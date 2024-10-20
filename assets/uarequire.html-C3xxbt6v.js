import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-B5m7CcSj.js";const n={},l=e(`<p>通常情况下，数据仓库的前两层（也就是<code>ODS层</code>和<code>DWD层</code>）和业务需求没什么关系，它们纯粹就是为完成数据的<a href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" rel="noopener noreferrer">ETL</a>工作而存在的。</p><p>但从<code>DWS层</code>开始，就需要根据业务需求来构建数据库和表了。</p><p>在用户行为数仓的建设中，需要满足下面这么几项需求。</p><ul><li><p><code>每日新增用户</code>相关指标。</p><ul><li><p><code>每日新增用户数</code>：也就是第一次安装并且使用APP的用户，这个指标使用设备<code>did</code>来统计，因为通过用户ID计算会出现偏差。但如果卸载之后再安装使用就不算新用户了。</p></li><li><p><code>每日新增用户数的日环比和周同比</code>：<code>环比</code>一般是将本次统计数据和上一次的统计数据作比较，而<code>同比</code>则是指将本次统计数据和往年的同时期的统计数据进行比较。</p></li></ul><figure><img src="https://tianmazuo.com/application/case/warehouse/warehouse-07.png" alt="环比与同比的区别" tabindex="0" loading="lazy"><figcaption>环比与同比的区别</figcaption></figure></li><li><p><code>日活用户（Daily Active User，DAU）</code>相关指标。</p><ul><li><p><code>日活用户数</code>：也就是每天主动打开APP的用户。</p></li><li><p><code>日活用户数日环比和周同比</code>：同<code>每日新增用户数的日环比和周同比</code>类似。</p></li></ul></li><li><p><code>每七天流失的用户数</code>，也就是七天未使用APP的用户数量。</p></li><li><p><code>每日应用启动</code>的相关指标。</p><ul><li><p><code>每日人均启动APP数</code>：指的是<code>当日所有用户启动APP的总数</code> / <code>当日总人数</code>。</p></li><li><p><code>每日APP启动数分布</code>：包括启动1次、启动2次、启动3次及以上。</p></li></ul></li><li><p><code>设备平台</code>相关指标。</p><ul><li><p><code>设备平台活跃用户分布</code>。</p></li><li><p><code>Android系统活跃用户分布</code>。</p></li><li><p><code>IOS系统活跃用户分布</code>。</p></li><li><p><code>设备品牌活跃用户分布</code>。</p></li><li><p><code>设备型号活跃用户分布</code>。</p></li><li><p><code>网络类型活跃用户分布</code>。</p></li></ul></li><li><p><code>应用闪退</code>相关指标，是指发生闪退时的设备平台、品牌、版本、机型、操作系统版本等数据。</p><ul><li><p><code>每日设备平台闪退总计</code>，包括Android和IOS。</p></li><li><p><code>每日Android系统不同APP版本闪退数</code>。</p></li><li><p><code>每日IOS系统不同APP版本闪退数</code>。</p></li></ul></li></ul><p>为了便于后续的功能调试，需要先创建测试数据集（事先已经通过代码生成了<code>2024-01-01</code>~<code>2024-01-31</code>这一个月的用户行为日志，且已经上传到了<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>中）。</p><p>如果使用<code>ods_shopmall_add_partition.sh \${dt}</code>命令，那么需要调用它<code>31</code>次才能在<code>ODS层</code>中造出一个月的数据，所以用代码循环来实现更省事。</p><p>通过代码加载已经生成的<code>ODS层</code>数据。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi load_data_to_ods_shopmall.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 加载ods层的数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">31</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -lt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2024010&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$i</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    else</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;202401&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$i</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    fi</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ods_shopmall_add_partition.sh&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ods_shopmall_add_partition.sh</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，再往<code>DWD层</code>中填充数据。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; vi load_data_to_dwd_shopmall.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 往dwd层填充数据</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">31</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">do</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -lt</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	then</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2024010&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$i</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	else</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        dt</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;202401&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$i</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    fi</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;dwd_shopmall_add_partition.sh&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dwd_shopmall_add_partition.sh</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;"> \${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dt</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，执行这两个数据加载脚本。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; cd /home/work/warehouse_user_action</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># ods层的数据加载要先执行</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; sh load_data_to_ods_shopmall.sh</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; sh load_data_to_dwd_shopmall.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),t=[l];function p(d,h){return a(),s("div",null,t)}const r=i(n,[["render",p],["__file","uarequire.html.vue"]]),c=JSON.parse('{"path":"/application/case/warehouse/uarequire.html","title":"用户行为数仓需求","lang":"zh-CN","frontmatter":{"title":"用户行为数仓需求","icon":"user-tag","category":["案例","数据仓库"],"tag":["案例","数据仓库","用户行为"],"date":"2024-05-21T00:00:00.000Z","isOriginal":true,"star":true,"description":"通常情况下，数据仓库的前两层（也就是ODS层和DWD层）和业务需求没什么关系，它们纯粹就是为完成数据的ETL工作而存在的。 但从DWS层开始，就需要根据业务需求来构建数据库和表了。 在用户行为数仓的建设中，需要满足下面这么几项需求。 每日新增用户相关指标。 每日新增用户数：也就是第一次安装并且使用APP的用户，这个指标使用设备did来统计，因为通过用户...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/application/case/warehouse/uarequire.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"用户行为数仓需求"}],["meta",{"property":"og:description","content":"通常情况下，数据仓库的前两层（也就是ODS层和DWD层）和业务需求没什么关系，它们纯粹就是为完成数据的ETL工作而存在的。 但从DWS层开始，就需要根据业务需求来构建数据库和表了。 在用户行为数仓的建设中，需要满足下面这么几项需求。 每日新增用户相关指标。 每日新增用户数：也就是第一次安装并且使用APP的用户，这个指标使用设备did来统计，因为通过用户..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/application/case/warehouse/warehouse-07.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"案例"}],["meta",{"property":"article:tag","content":"数据仓库"}],["meta",{"property":"article:tag","content":"用户行为"}],["meta",{"property":"article:published_time","content":"2024-05-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户行为数仓需求\\",\\"image\\":[\\"https://tianmazuo.com/application/case/warehouse/warehouse-07.png\\"],\\"datePublished\\":\\"2024-05-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.77,"words":830},"filePathRelative":"application/case/warehouse/uarequire.md","localizedDate":"2024年5月21日","excerpt":"<p>通常情况下，数据仓库的前两层（也就是<code>ODS层</code>和<code>DWD层</code>）和业务需求没什么关系，它们纯粹就是为完成数据的<a href=\\"https://en.wikipedia.org/wiki/Extract,_transform,_load\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ETL</a>工作而存在的。</p>\\n<p>但从<code>DWS层</code>开始，就需要根据业务需求来构建数据库和表了。</p>\\n<p>在用户行为数仓的建设中，需要满足下面这么几项需求。</p>\\n<ul>\\n<li>\\n<p><code>每日新增用户</code>相关指标。</p>\\n<ul>\\n<li>\\n<p><code>每日新增用户数</code>：也就是第一次安装并且使用APP的用户，这个指标使用设备<code>did</code>来统计，因为通过用户ID计算会出现偏差。但如果卸载之后再安装使用就不算新用户了。</p>\\n</li>\\n<li>\\n<p><code>每日新增用户数的日环比和周同比</code>：<code>环比</code>一般是将本次统计数据和上一次的统计数据作比较，而<code>同比</code>则是指将本次统计数据和往年的同时期的统计数据进行比较。</p>\\n</li>\\n</ul>\\n<figure><img src=\\"https://tianmazuo.com/application/case/warehouse/warehouse-07.png\\" alt=\\"环比与同比的区别\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>环比与同比的区别</figcaption></figure>\\n</li>\\n<li>\\n<p><code>日活用户（Daily Active User，DAU）</code>相关指标。</p>\\n<ul>\\n<li>\\n<p><code>日活用户数</code>：也就是每天主动打开APP的用户。</p>\\n</li>\\n<li>\\n<p><code>日活用户数日环比和周同比</code>：同<code>每日新增用户数的日环比和周同比</code>类似。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>每七天流失的用户数</code>，也就是七天未使用APP的用户数量。</p>\\n</li>\\n<li>\\n<p><code>每日应用启动</code>的相关指标。</p>\\n<ul>\\n<li>\\n<p><code>每日人均启动APP数</code>：指的是<code>当日所有用户启动APP的总数</code> / <code>当日总人数</code>。</p>\\n</li>\\n<li>\\n<p><code>每日APP启动数分布</code>：包括启动1次、启动2次、启动3次及以上。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>设备平台</code>相关指标。</p>\\n<ul>\\n<li>\\n<p><code>设备平台活跃用户分布</code>。</p>\\n</li>\\n<li>\\n<p><code>Android系统活跃用户分布</code>。</p>\\n</li>\\n<li>\\n<p><code>IOS系统活跃用户分布</code>。</p>\\n</li>\\n<li>\\n<p><code>设备品牌活跃用户分布</code>。</p>\\n</li>\\n<li>\\n<p><code>设备型号活跃用户分布</code>。</p>\\n</li>\\n<li>\\n<p><code>网络类型活跃用户分布</code>。</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>应用闪退</code>相关指标，是指发生闪退时的设备平台、品牌、版本、机型、操作系统版本等数据。</p>\\n<ul>\\n<li>\\n<p><code>每日设备平台闪退总计</code>，包括Android和IOS。</p>\\n</li>\\n<li>\\n<p><code>每日Android系统不同APP版本闪退数</code>。</p>\\n</li>\\n<li>\\n<p><code>每日IOS系统不同APP版本闪退数</code>。</p>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{r as comp,c as data};
