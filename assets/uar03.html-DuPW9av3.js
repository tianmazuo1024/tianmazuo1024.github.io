import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B5m7CcSj.js";const l={},e=n(`<h2 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路"><span>实现思路</span></a></h2><p>所谓<code>流失用户</code>，就是加入某个用户在<code>2024-01-01</code>注册或使用了APP后，直到<code>2024-01-08</code>这7天内都未再次打开APP，那么就认为该用户已流失。</p><p>可以这样来实现。</p><ul><li><p>首先，基于<code>DWS层</code>的<code>dws_app_open_history</code>表，获取最近8天的新增或者活跃用户数据，根据<code>did</code>分组，获得它对应的多个日期。</p></li><li><p>然后，对<code>did</code>相应的日期进行过滤，获取其中最大的日期，并判断该日期是否等于当前日期 - 7，如果满足则说明该用户已流失。</p></li><li><p>接着，将满足条件的用户数据保存到<code>DWS层</code>的<code>dws_user_lost</code>表中。</p></li><li><p>最后，对<code>dws_user_lost</code>表中的数据进行聚合统计，获得用户7日流失数量，保存到<code>APP层</code>的<code>app_user_lost</code>表中。</p></li></ul><br><h2 id="dws层开发" tabindex="-1"><a class="header-anchor" href="#dws层开发"><span>DWS层开发</span></a></h2><p>根据实现思路，需要在<code>DWS层</code>初始化<code>dws_user_lost</code>表。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi dws_shopmall_requirement03_init.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需求三：七日流失用户相关指标</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># dws层数据库和表初始化，只需要执行一次</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">create database if not exists dws_shopmall;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">create external table if not exists dws_shopmall.dws_user_lost (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    did    string</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) partitioned by(dt string)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  row format delimited  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  fields terminated by &#39;\\t&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  location &#39;hdfs://server01:9000/data/dws/user_lost&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，需要从<code>dws_app_open_history</code>表中获取最近8天的新增或者活跃用户数据。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi dws_shopmall_requirement03_add_partition.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需求三：七日流失用户相关指标</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 每天凌晨执行一次</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;d</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;d&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--date=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1 days ago&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 日期格式转换，将 20240101 转换为 2024-01-01</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt_new</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y-%m-%d </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--date=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">insert overwrite table dws_shopmall.dws_user_lost partition(dt=&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;) select</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">did</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">from dws_shopmall.dws_app_open_history</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">where dt &gt;= regexp_replace(date_add(&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt_new</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;, -7), &#39;-&#39;, &#39;&#39;)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">group by did</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">having max(dt) = regexp_replace(date_add(&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt_new</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;, -7), &#39;-&#39;, &#39;&#39;);</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过定时任务来执行它。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; crontab -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 每天凌晨0点1分执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/work/warehouse_user_action/dws_shopmall_requirement03_add_partition.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="app层开发" tabindex="-1"><a class="header-anchor" href="#app层开发"><span>APP层开发</span></a></h2><p>然后再初始化<code>APP层</code>的<code>app_user_lost</code>表。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi app_shopmall_requirement03_init.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需求三：七日流失用户相关指标</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># app层数据库和表初始化，只需要执行一次</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">create database if not exists app_shopmall;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">create external table if not exists app_shopmall.app_user_lost (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    num    int</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">) partitioned by(dt string)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  row format delimited  </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  fields terminated by &#39;\\t&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  location &#39;hdfs://server01:9000/data/app/user_lost&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来给它添加分区。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi app_shopmall_requirement03_add_partition.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 需求三：七日流失用户相关指标</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 每天凌晨执行一次</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;d</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;d&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">date</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +%Y%m%d </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--date=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1 days ago&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">$1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hive</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">insert overwrite table app_shopmall.app_user_lost partition(dt=&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;) select</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">count(*) as num</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">from dws_shopmall.dws_user_lost</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">where dt = &#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#98C379;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过定时任务来执行它。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; crontab -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 每天凌晨0点1分执行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /home/work/warehouse_user_action/app_shopmall_requirement03_add_partition.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[e];function h(p,d){return a(),i("div",null,t)}const c=s(l,[["render",h],["__file","uar03.html.vue"]]),o=JSON.parse('{"path":"/application/case/warehouse/uar03.html","title":"需求三：七日流失用户相关指标","lang":"zh-CN","frontmatter":{"title":"需求三：七日流失用户相关指标","icon":"user-tag","category":["案例","数据仓库"],"tag":["案例","数据仓库","用户行为","DWS层","APP层"],"date":"2024-05-22T00:00:00.000Z","isOriginal":true,"star":true,"description":"实现思路 所谓流失用户，就是加入某个用户在2024-01-01注册或使用了APP后，直到2024-01-08这7天内都未再次打开APP，那么就认为该用户已流失。 可以这样来实现。 首先，基于DWS层的dws_app_open_history表，获取最近8天的新增或者活跃用户数据，根据did分组，获得它对应的多个日期。 然后，对did相应的日期进行过滤，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/case/warehouse/uar03.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"需求三：七日流失用户相关指标"}],["meta",{"property":"og:description","content":"实现思路 所谓流失用户，就是加入某个用户在2024-01-01注册或使用了APP后，直到2024-01-08这7天内都未再次打开APP，那么就认为该用户已流失。 可以这样来实现。 首先，基于DWS层的dws_app_open_history表，获取最近8天的新增或者活跃用户数据，根据did分组，获得它对应的多个日期。 然后，对did相应的日期进行过滤，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"案例"}],["meta",{"property":"article:tag","content":"数据仓库"}],["meta",{"property":"article:tag","content":"用户行为"}],["meta",{"property":"article:tag","content":"DWS层"}],["meta",{"property":"article:tag","content":"APP层"}],["meta",{"property":"article:published_time","content":"2024-05-22T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"需求三：七日流失用户相关指标\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-22T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"实现思路","slug":"实现思路","link":"#实现思路","children":[]},{"level":2,"title":"DWS层开发","slug":"dws层开发","link":"#dws层开发","children":[]},{"level":2,"title":"APP层开发","slug":"app层开发","link":"#app层开发","children":[]}],"git":{},"readingTime":{"minutes":2.26,"words":677},"filePathRelative":"application/case/warehouse/uar03.md","localizedDate":"2024年5月22日","excerpt":"<h2>实现思路</h2>\\n<p>所谓<code>流失用户</code>，就是加入某个用户在<code>2024-01-01</code>注册或使用了APP后，直到<code>2024-01-08</code>这7天内都未再次打开APP，那么就认为该用户已流失。</p>\\n<p>可以这样来实现。</p>\\n<ul>\\n<li>\\n<p>首先，基于<code>DWS层</code>的<code>dws_app_open_history</code>表，获取最近8天的新增或者活跃用户数据，根据<code>did</code>分组，获得它对应的多个日期。</p>\\n</li>\\n<li>\\n<p>然后，对<code>did</code>相应的日期进行过滤，获取其中最大的日期，并判断该日期是否等于当前日期 - 7，如果满足则说明该用户已流失。</p>\\n</li>\\n<li>\\n<p>接着，将满足条件的用户数据保存到<code>DWS层</code>的<code>dws_user_lost</code>表中。</p>\\n</li>\\n<li>\\n<p>最后，对<code>dws_user_lost</code>表中的数据进行聚合统计，获得用户7日流失数量，保存到<code>APP层</code>的<code>app_user_lost</code>表中。</p>\\n</li>\\n</ul>","autoDesc":true}');export{c as comp,o as data};
