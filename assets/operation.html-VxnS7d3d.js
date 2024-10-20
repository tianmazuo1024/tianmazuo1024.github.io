import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as i,d as a}from"./app-B5m7CcSj.js";const l={},e=a(`<h2 id="索引相关命令" tabindex="-1"><a class="header-anchor" href="#索引相关命令"><span>索引相关命令</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除单个索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XDELETE </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/blink?pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除多个索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XDELETE </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/blink,blog?pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT -H </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;localhost:9200/blink?pretty&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;settings&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         &quot;index&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;number_of_shards&quot; : 1,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;number_of_replicas&quot; : 0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;mappings&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         &quot;properties&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;guid&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;bizline&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;resid&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;block&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;username&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;title&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;search_analyzer&quot;: &quot;ik_max_word&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;content&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;search_analyzer&quot;: &quot;ik_max_word&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;url&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;kind&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;integer&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;status&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;integer&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;suggestion&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;again&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;integer&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;senstitle&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;search_analyzer&quot;: &quot;ik_max_word&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;senstext&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;search_analyzer&quot;: &quot;ik_max_word&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;sensimage&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;keyword&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;createtime&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;updatetime&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;long&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建产品索引（不带分词）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/product?pretty&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;settings&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;index&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;number_of_shards&quot; : 3, </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;number_of_replicas&quot; : 2 </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建产品索引（带分词）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/twitter?pretty&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;settings&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;index&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;number_of_shards&quot; : 3, </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;number_of_replicas&quot; : 2 </span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;analysis&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;analyzer&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  &quot;my_analyzer&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                      &quot;tokenizer&quot;: &quot;my_tokenizer&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;tokenizer&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  &quot;my_tokenizer&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                      &quot;type&quot;: &quot;pattern&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                      &quot;pattern&quot;: &quot;\\\\,&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建产品mapping（数据表）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/product/_mapping/product_plan?pretty&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;properties&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;id&quot; : { &quot;type&quot;: &quot;keyword&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;name&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;desc&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot;, &quot;store&quot;: false },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;price&quot; : { &quot;type&quot;: &quot;float&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;productid&quot; : { &quot;type&quot;: &quot;keyword&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;productname&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          &quot;categorys&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;type&quot; : &quot;nested&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;properties&quot; : {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  &quot;id&quot; : { &quot;type&quot;: &quot;keyword&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  &quot;name&quot; : { &quot;type&quot;: &quot;text&quot; , &quot;analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                  &quot;parentid&quot; : { &quot;type&quot;: &quot;keyword&quot; }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 给索引赋值一个文档（记录值）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/product/product_plan/1?pretty&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;name&quot; : &quot;儿童保险计划&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;desc&quot; : &quot;保险产品计划&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;price&quot; : 200,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;productid&quot; : &quot;1&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;productname&quot; : &quot;少儿益佳保险&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;categorys&quot; : [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;name&quot; : &quot;儿童保险&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">              &quot;parentid&quot; : &quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      ]</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看单个索引的创建结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;http://localhost:9200/blink/_mapping?pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看多个索引的创建结果</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;http://localhost:9200/blink,blog/_mapping?pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看全部索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;http://localhost:9200/_cat/indices?v&amp;pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 获取索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/product/_mapping/product_plan?pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 删除索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XDELETE </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;localhost:9200/product?pretty&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="集群相关命令" tabindex="-1"><a class="header-anchor" href="#集群相关命令"><span>集群相关命令</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看集群健康状况</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;http://localhost:9200/_cluster/health?pretty&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;http://localhost:9200/_cluster/health?level=indices&amp;pretty&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看插件信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 http://localhost:9200/_cat/plugins?pretty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看本机信息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 http://localhost:9200?pretty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看本机健康状况</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 http://localhost:9200/_cat/health?pretty</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="查询相关命令" tabindex="-1"><a class="header-anchor" href="#查询相关命令"><span>查询相关命令</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 关键词索引	</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>          &quot;multi_match&quot; : {</span></span>
<span class="line"><span>              &quot;query&quot; : &quot;this is a test&quot;,</span></span>
<span class="line"><span>              &quot;fields&quot; : [ &quot;subject^3&quot;, &quot;message&quot; ] </span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 正则表达式：使用逗号&quot;,&quot;分割</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/my_index?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;settings&quot;: {</span></span>
<span class="line"><span>          &quot;analysis&quot;: {</span></span>
<span class="line"><span>              &quot;analyzer&quot;: {</span></span>
<span class="line"><span>                  &quot;my_analyzer&quot;: {</span></span>
<span class="line"><span>                      &quot;tokenizer&quot;: &quot;my_tokenizer&quot;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>              &quot;tokenizer&quot;: {</span></span>
<span class="line"><span>                  &quot;my_tokenizer&quot;: {</span></span>
<span class="line"><span>                      &quot;type&quot;: &quot;pattern&quot;,</span></span>
<span class="line"><span>                      &quot;pattern&quot;: &quot;\\\\,&quot;</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在查询中加入正则表达式</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/_mapping/product_plan?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;properties&quot;: {</span></span>
<span class="line"><span>          &quot;id&quot; : { &quot;type&quot;: &quot;keyword&quot; },</span></span>
<span class="line"><span>          &quot;name&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span>          &quot;desc&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot;, &quot;store&quot;: false },</span></span>
<span class="line"><span>          &quot;areas&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;my_analyzer&quot;, &quot;search_analyzer&quot;: &quot;my_analyzer&quot;, &quot;store&quot;: true },</span></span>
<span class="line"><span>          &quot;price&quot; : { &quot;type&quot;: &quot;float&quot; },</span></span>
<span class="line"><span>          &quot;productid&quot; : { &quot;type&quot;: &quot;keyword&quot; },</span></span>
<span class="line"><span>          &quot;productname&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span>          &quot;categorys&quot; : {</span></span>
<span class="line"><span>              &quot;type&quot; : &quot;nested&quot;,</span></span>
<span class="line"><span>              &quot;properties&quot; : {</span></span>
<span class="line"><span>                  &quot;id&quot; : { &quot;type&quot;: &quot;keyword&quot; },</span></span>
<span class="line"><span>                  &quot;name&quot; : { &quot;type&quot;: &quot;text&quot; , &quot;analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span>                  &quot;parentid&quot; : { &quot;type&quot;: &quot;keyword&quot; }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPOST &#39;localhost:9200/twitter/_analyze?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;analyzer&quot;: &quot;my_analyzer&quot;,</span></span>
<span class="line"><span>      &quot;text&quot;: &quot;000000,000010,000200&quot;</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>          &quot;bool&quot;: {</span></span>
<span class="line"><span>              &quot;must&quot;: [</span></span>
<span class="line"><span>                  { &quot;match&quot; : { &quot;areaIds&quot; : &quot;990000&quot; }}</span></span>
<span class="line"><span>              ]</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 同义词</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/1?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;name&quot; : &quot;儿童旅游计划&quot;,</span></span>
<span class="line"><span>      &quot;desc&quot; : &quot;旅游产品计划&quot;,</span></span>
<span class="line"><span>      &quot;price&quot; : 200,</span></span>
<span class="line"><span>      &quot;productid&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;productname&quot; : &quot;少儿益佳旅游&quot;,</span></span>
<span class="line"><span>      &quot;categorys&quot; : [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>              &quot;name&quot; : &quot;儿童旅游&quot;,</span></span>
<span class="line"><span>              &quot;parentid&quot; : &quot;3&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/1?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;name&quot; : &quot;儿童旅行计划&quot;,</span></span>
<span class="line"><span>      &quot;desc&quot; : &quot;旅行产品计划&quot;,</span></span>
<span class="line"><span>      &quot;price&quot; : 200,</span></span>
<span class="line"><span>      &quot;productid&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;productname&quot; : &quot;少儿益佳旅行&quot;,</span></span>
<span class="line"><span>      &quot;categorys&quot; : [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>              &quot;name&quot; : &quot;儿童旅行&quot;,</span></span>
<span class="line"><span>              &quot;parentid&quot; : &quot;3&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;settings&quot; : {</span></span>
<span class="line"><span>          &quot;index&quot; : {</span></span>
<span class="line"><span>              &quot;number_of_shards&quot; : 3, </span></span>
<span class="line"><span>              &quot;number_of_replicas&quot; : 2 </span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/_mapping/product_plan?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;properties&quot;: {</span></span>
<span class="line"><span>          &quot;name&quot; : { &quot;type&quot;: &quot;completion&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot;, &quot;search_analyzer&quot;: &quot;ik_max_word&quot; },</span></span>
<span class="line"><span>          &quot;tags&quot; : { &quot;type&quot;: &quot;text&quot;,&quot;analyzer&quot;: &quot;ik_max_word&quot;, &quot;store&quot;: false }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/1?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;name&quot; : [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;input&quot;: &quot;Nevermind&quot;,</span></span>
<span class="line"><span>              &quot;weight&quot; : 10</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;input&quot;: &quot;Nirvana&quot;,</span></span>
<span class="line"><span>              &quot;weight&quot; : 3</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;tags&quot; : &quot;个人,团队,员工,技术&quot;</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/2?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;name&quot; : &quot;旅游险&quot;,</span></span>
<span class="line"><span>      &quot;tags&quot; : &quot;综合,交通,公司,企业,职工,户外,风景&quot;</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/3?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;name&quot; : &quot;儿童险&quot;,</span></span>
<span class="line"><span>      &quot;tags&quot; : &quot;少儿,意外,保险,保障&quot;</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 搜索</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPOST &#39;localhost:9200/product/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;suggest&quot;: {</span></span>
<span class="line"><span>          &quot;product_plan&quot; : {</span></span>
<span class="line"><span>              &quot;prefix&quot; : &quot;nir&quot;,</span></span>
<span class="line"><span>              &quot;completion&quot; : {</span></span>
<span class="line"><span>                  &quot;field&quot; : &quot;name&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span># curl --user elastic:company2020 -XPOST &#39;localhost:9200/product/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;suggest&quot;: {</span></span>
<span class="line"><span>          &quot;product_plan&quot; : {</span></span>
<span class="line"><span>              &quot;prefix&quot; : &quot;旅&quot;,</span></span>
<span class="line"><span>              &quot;completion&quot; : {</span></span>
<span class="line"><span>                  &quot;field&quot; : &quot;name&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 模糊查询</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPOST &#39;localhost:9200/product/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;suggest&quot;: {</span></span>
<span class="line"><span>          &quot;product_plan&quot; : {</span></span>
<span class="line"><span>              &quot;prefix&quot; : &quot;游&quot;,</span></span>
<span class="line"><span>              &quot;completion&quot; : {</span></span>
<span class="line"><span>                  &quot;field&quot; : &quot;name&quot;,</span></span>
<span class="line"><span>                  &quot;fuzzy&quot; : {</span></span>
<span class="line"><span>                      &quot;fuzziness&quot; : 2</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 正则查询</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPOST &#39;localhost:9200/product/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;suggest&quot;: {</span></span>
<span class="line"><span>          &quot;product_plan&quot; : {</span></span>
<span class="line"><span>              &quot;regex&quot; : &quot;n[ever|i]r&quot;,</span></span>
<span class="line"><span>              &quot;completion&quot; : {</span></span>
<span class="line"><span>                  &quot;field&quot; : &quot;name&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IN查询</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/1?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;name&quot; : &quot;儿童保险计划&quot;,</span></span>
<span class="line"><span>      &quot;desc&quot; : &quot;保险产品计划&quot;,</span></span>
<span class="line"><span>      &quot;price&quot; : 200,</span></span>
<span class="line"><span>      &quot;productid&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;productname&quot; : &quot;少儿益佳保险&quot;,</span></span>
<span class="line"><span>      &quot;categorys&quot; : [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>              &quot;name&quot; : &quot;儿童保险&quot;,</span></span>
<span class="line"><span>              &quot;parentid&quot; : &quot;3&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPUT &#39;localhost:9200/product/product_plan/3?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;id&quot; : &quot;3&quot;,</span></span>
<span class="line"><span>      &quot;name&quot; : &quot;儿童保险计划&quot;,</span></span>
<span class="line"><span>      &quot;desc&quot; : &quot;保险产品计划&quot;,</span></span>
<span class="line"><span>      &quot;price&quot; : 200,</span></span>
<span class="line"><span>      &quot;productid&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>      &quot;productname&quot; : &quot;少儿益佳保险&quot;,</span></span>
<span class="line"><span>      &quot;categorys&quot; : [</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>              &quot;id&quot; : &quot;1&quot;,</span></span>
<span class="line"><span>              &quot;name&quot; : &quot;儿童保险&quot;,</span></span>
<span class="line"><span>              &quot;parentid&quot; : &quot;3&quot;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;size&quot; : 10,</span></span>
<span class="line"><span>      &quot;query&quot;: {&quot;terms&quot;: {&quot;id&quot; : [&quot;1&quot;, &quot;2&quot;]}}</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Sort排序</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;size&quot; : 10,</span></span>
<span class="line"><span>      &quot;query&quot;: {&quot;terms&quot;: {&quot;id&quot; : [&quot;1&quot;, &quot;3&quot;]}},</span></span>
<span class="line"><span>      &quot;sort&quot; : [</span></span>
<span class="line"><span>          { &quot;id&quot; : {&quot;order&quot; : &quot;desc&quot;}}</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 结果高亮显示</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;size&quot; : 10,</span></span>
<span class="line"><span>      &quot;query&quot;: {&quot;terms&quot;: {&quot;id&quot; : [&quot;1&quot;, &quot;3&quot;]}},</span></span>
<span class="line"><span>      &quot;sort&quot; : [</span></span>
<span class="line"><span>          { &quot;id&quot; : {&quot;order&quot; : &quot;desc&quot;}}</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      &quot;highlight&quot; : {</span></span>
<span class="line"><span>          &quot;fields&quot; : {</span></span>
<span class="line"><span>              &quot;id&quot; : {}</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;size&quot; : 10,</span></span>
<span class="line"><span>      &quot;query&quot;: {&quot;match&quot;: {&quot;name&quot; : &quot;儿童&quot;}},</span></span>
<span class="line"><span>      &quot;highlight&quot; : {</span></span>
<span class="line"><span>          &quot;pre_tags&quot; : [&quot;&lt;tag1&gt;&quot;],</span></span>
<span class="line"><span>          &quot;post_tags&quot; : [&quot;&lt;/tag1&gt;&quot;],</span></span>
<span class="line"><span>          &quot;fields&quot; : {</span></span>
<span class="line"><span>              &quot;name&quot; : {}</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &#39;localhost:9200/product/product_plan/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>      &quot;size&quot; : 10,</span></span>
<span class="line"><span>      &quot;query&quot;: {&quot;match&quot;: {&quot;name&quot; : &quot;儿童&quot;}},</span></span>
<span class="line"><span>      &quot;highlight&quot; : {</span></span>
<span class="line"><span>          &quot;fields&quot; : {</span></span>
<span class="line"><span>              &quot;name&quot; : {&quot;type&quot; : &quot;plain/postings/fvh&quot;}</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询文档数量</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET localhost:9200/_cat/indices/blink?v</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在单个索引中查询数据</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/blink/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;match&quot; : {&quot;type&quot;:1}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在多个索引中查询数据</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/blink,blink_comment/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;from&quot;:0,</span></span>
<span class="line"><span>      &quot;size&quot;:100,</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;match_all&quot; : {}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在多个字段中查询数据</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/*/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;multi_match&quot;: {</span></span>
<span class="line"><span>            &quot;query&quot;: &quot;你民工&quot;,</span></span>
<span class="line"><span>            &quot;fields&quot;: [</span></span>
<span class="line"><span>               &quot;address&quot;,</span></span>
<span class="line"><span>               &quot;name&quot;</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在多个索引中查询数据（方式一：使用，分隔多个索引名称）</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/blink/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>     &quot;from&quot;:0,</span></span>
<span class="line"><span>     &quot;size&quot;:100,</span></span>
<span class="line"><span>     &quot;query&quot;: {</span></span>
<span class="line"><span>        &quot;match&quot; : {</span></span>
<span class="line"><span>            &quot;content&quot; : &quot;用户&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>     &quot;highlight&quot;: {</span></span>
<span class="line"><span>        &quot;fields&quot;: {</span></span>
<span class="line"><span>           &quot;content&quot;: {}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>  }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在多个索引中查询数据（方式二：使用_all）</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/_all/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;from&quot;:0,</span></span>
<span class="line"><span>      &quot;size&quot;:100,</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;match&quot; : {&quot;content&quot;:&quot;haha&quot;}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在多个索引中查询数据（方式三：使用*代替所有的）</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/*/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;from&quot;:0,</span></span>
<span class="line"><span>      &quot;size&quot;:100,</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;match&quot; : {&quot;content&quot;:&quot;haha&quot;}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在多个索引中查询数据（方式四：将/index中的内容空出来）</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/_search?pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;from&quot;:0,</span></span>
<span class="line"><span>      &quot;size&quot;:100,</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;match&quot; : {&quot;content&quot;:&quot;haha&quot;}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 准备深分页查询</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &quot;localhost:9200/blink/_search?scroll=5m&amp;pretty&quot; -H &#39;Content-Type: application/json&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;size&quot;: 50,</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;bool&quot;: {</span></span>
<span class="line"><span>            &quot;must&quot;: [{</span></span>
<span class="line"><span>               &quot;match&quot;: {</span></span>
<span class="line"><span>                  &quot;content&quot;: {</span></span>
<span class="line"><span>                     &quot;query&quot;: &quot;blink&quot;,</span></span>
<span class="line"><span>                     &quot;operator&quot;: &quot;OR&quot;,</span></span>
<span class="line"><span>                     &quot;prefix_length&quot;: 0,</span></span>
<span class="line"><span>                     &quot;max_expansions&quot;: 50,</span></span>
<span class="line"><span>                     &quot;fuzzy_transpositions&quot;: true,</span></span>
<span class="line"><span>                     &quot;lenient&quot;: false,</span></span>
<span class="line"><span>                     &quot;zero_terms_query&quot;: &quot;NONE&quot;,</span></span>
<span class="line"><span>                     &quot;auto_generate_synonyms_phrase_query&quot;: true</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               &quot;range&quot;: {</span></span>
<span class="line"><span>                  &quot;createtime&quot;: {</span></span>
<span class="line"><span>                     &quot;from&quot;: 1592206680000,</span></span>
<span class="line"><span>                     &quot;to&quot;: null,</span></span>
<span class="line"><span>                     &quot;include_lower&quot;: true,</span></span>
<span class="line"><span>                     &quot;include_upper&quot;: true</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>               &quot;range&quot;: {</span></span>
<span class="line"><span>                  &quot;createtime&quot;: {</span></span>
<span class="line"><span>                     &quot;from&quot;: null,</span></span>
<span class="line"><span>                     &quot;to&quot;: 1592293080000,</span></span>
<span class="line"><span>                     &quot;include_lower&quot;: true,</span></span>
<span class="line"><span>                     &quot;include_upper&quot;: true</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>            }]</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;sort&quot;: [{</span></span>
<span class="line"><span>         &quot;createtime&quot;: {</span></span>
<span class="line"><span>            &quot;order&quot;: &quot;asc&quot;</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>      }]</span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通过深分页继续查询</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XGET &quot;localhost:9200/_search/scroll?pretty&quot; -H &#39;Content-Type: application/json&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;scroll&quot; : &quot;1m&quot;, </span></span>
<span class="line"><span>      &quot;scroll_id&quot; : &quot;DXF1ZXJ5QW5kRmV0Y2gBAAAAAAAABN0WdXNvd3QyZUxUQUtJYUpQN213RllPdw==&quot; </span></span>
<span class="line"><span>   }&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 清空type下所有doc</span></span>
<span class="line"><span>&gt; curl --user elastic:company2020 -XPOST -H &#39;Content-Type: application/json&#39; &#39;localhost:9200/blink/_delete_by_query?conflicts=proceed&amp;pretty&#39; -d&#39;</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>         &quot;match_all&quot;: {}</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="分词器相关命令" tabindex="-1"><a class="header-anchor" href="#分词器相关命令"><span>分词器相关命令</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 分词</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XGET -H </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;http://localhost:9200/_analyze?pretty&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;{&quot;text&quot;:&quot;中华人民共和国&quot;}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 创建IK分词器</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPOST -H </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> http://localhost:9200/blink/fulltext/_mapping?pretty -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;fulltext&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         &quot;_all&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;search_analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;term_vector&quot;: &quot;no&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;store&quot;: &quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         },</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         &quot;properties&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &quot;content&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;search_analyzer&quot;: &quot;ik_max_word&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;include_in_all&quot;: &quot;true&quot;,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">               &quot;boost&quot;: 8</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">         }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT -H </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> http://localhost:9200/blink/_doc/1?pretty -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;guid&quot; : 1,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;content&quot; : &quot;哈哈，今天天气真好&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT -H </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> http://localhost:9200/blink/_doc/2?pretty -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;guid&quot; : 2,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;content&quot; : &quot;经过90天的奋战，中国取得了抗疫成功&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   }&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; curl --user elastic:company2020 -XPUT -H </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> http://localhost:9200/blog/_doc/1?pretty -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;guid&quot; : 1,</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      &quot;content&quot; : &quot;天空之城&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">   }&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="聚合相关命令" tabindex="-1"><a class="header-anchor" href="#聚合相关命令"><span>聚合相关命令</span></a></h2><p><code>precision</code>精度范围（1~12）。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  5009.4km</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 4992.6km</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  1252.3km</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 624.1km</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  156.5km</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 156km</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  39.1km</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 19.5km</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  4.9km</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 4.9km</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">6</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  1.2km</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 609.4m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">7</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  152.9m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 152.4m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">8</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  38.2m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 19m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">9</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  4.8m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 4.8m</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">10</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.2m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 59.5cm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">11</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 14.9cm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 14.9cm</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">12</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 3.7cm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.9m</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>精度不能大于定义时给出的值，如果定义为<code>10</code>，那么搜索时最大只能为<code>10</code>。</p><p>聚合分组的结果取决于搜索时<code>precision</code>给出的值。</p><ul><li><p>定义<code>10</code>，搜索精度<code>5</code>时的聚合结果：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;aggregations&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    &quot;areacode&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      &quot;buckets&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;key&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wt3m7&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;doc_count&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }, {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;key&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wt3mh&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;doc_count&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      } ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义<code>10</code>，搜索精度<code>6</code>时的聚合结果：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;aggregations&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    &quot;areacode&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">      &quot;buckets&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;key&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wt3mhk&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;doc_count&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }, {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;key&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wt3m7t&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;doc_count&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }, {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;key&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wt3m7s&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;doc_count&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }, {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;key&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;wt3m75&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;doc_count&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      } ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>因此可以依据<code>precision</code>来调整热力图的显示数据。</p></li></ul>`,18),p=[e];function t(d,c){return i(),n("div",null,p)}const h=s(l,[["render",t],["__file","operation.html.vue"]]),k=JSON.parse(`{"path":"/technology/middleware/elasticsearch/operation.html","title":"常用操作命令","lang":"zh-CN","frontmatter":{"title":"常用操作命令","icon":"magnifying-glass","category":["中间件","Elasticsearch"],"tag":["中间件","Elasticsearch"],"date":"2023-01-25T00:00:00.000Z","isOriginal":true,"star":true,"description":"索引相关命令 集群相关命令 查询相关命令 分词器相关命令 聚合相关命令 precision精度范围（1~12）。 精度不能大于定义时给出的值，如果定义为10，那么搜索时最大只能为10。 聚合分组的结果取决于搜索时precision给出的值。 定义10，搜索精度5时的聚合结果： 定义10，搜索精度6时的聚合结果： 因此可以依据precision来调整热力...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/elasticsearch/operation.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"常用操作命令"}],["meta",{"property":"og:description","content":"索引相关命令 集群相关命令 查询相关命令 分词器相关命令 聚合相关命令 precision精度范围（1~12）。 精度不能大于定义时给出的值，如果定义为10，那么搜索时最大只能为10。 聚合分组的结果取决于搜索时precision给出的值。 定义10，搜索精度5时的聚合结果： 定义10，搜索精度6时的聚合结果： 因此可以依据precision来调整热力..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"Elasticsearch"}],["meta",{"property":"article:published_time","content":"2023-01-25T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用操作命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-25T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"索引相关命令","slug":"索引相关命令","link":"#索引相关命令","children":[]},{"level":2,"title":"集群相关命令","slug":"集群相关命令","link":"#集群相关命令","children":[]},{"level":2,"title":"查询相关命令","slug":"查询相关命令","link":"#查询相关命令","children":[]},{"level":2,"title":"分词器相关命令","slug":"分词器相关命令","link":"#分词器相关命令","children":[]},{"level":2,"title":"聚合相关命令","slug":"聚合相关命令","link":"#聚合相关命令","children":[]}],"git":{},"readingTime":{"minutes":6.26,"words":1879},"filePathRelative":"technology/middleware/elasticsearch/operation.md","localizedDate":"2023年1月25日","excerpt":"<h2>索引相关命令</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 删除单个索引</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XDELETE </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/blink?pretty'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 删除多个索引</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XDELETE </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/blink,blog?pretty'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 创建索引</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XPUT -H </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'Content-Type: application/json'</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 'localhost:9200/blink?pretty'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> -d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">   {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"settings\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">         \\"index\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"number_of_shards\\" : 1,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"number_of_replicas\\" : 0</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">         }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"mappings\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">         \\"properties\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"guid\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"long\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"bizline\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"resid\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"block\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"username\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"title\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"text\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"analyzer\\": \\"ik_max_word\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"search_analyzer\\": \\"ik_max_word\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"content\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"text\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"analyzer\\": \\"ik_max_word\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"search_analyzer\\": \\"ik_max_word\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"url\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"kind\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"integer\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"status\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"integer\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"suggestion\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"again\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"integer\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"senstitle\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"text\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"analyzer\\": \\"ik_max_word\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"search_analyzer\\": \\"ik_max_word\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"senstext\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"text\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"analyzer\\": \\"ik_max_word\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"search_analyzer\\": \\"ik_max_word\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"sensimage\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"keyword\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"createtime\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"long\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            \\"updatetime\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">               \\"type\\": \\"long\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">            }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">         }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">   }'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 创建产品索引（不带分词）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XPUT </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/product?pretty'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> -d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"settings\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"index\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"number_of_shards\\" : 3, </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"number_of_replicas\\" : 2 </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  }'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 创建产品索引（带分词）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XPUT </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/twitter?pretty'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> -d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"settings\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"index\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"number_of_shards\\" : 3, </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"number_of_replicas\\" : 2 </span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"analysis\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"analyzer\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  \\"my_analyzer\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                      \\"tokenizer\\": \\"my_tokenizer\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"tokenizer\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  \\"my_tokenizer\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                      \\"type\\": \\"pattern\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                      \\"pattern\\": \\"\\\\\\\\,\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">   }'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 创建产品mapping（数据表）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XPUT </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/product/_mapping/product_plan?pretty'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> -d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"properties\\": {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"id\\" : { \\"type\\": \\"keyword\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"name\\" : { \\"type\\": \\"text\\",\\"analyzer\\": \\"ik_max_word\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"desc\\" : { \\"type\\": \\"text\\",\\"analyzer\\": \\"ik_max_word\\", \\"store\\": false },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"price\\" : { \\"type\\": \\"float\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"productid\\" : { \\"type\\": \\"keyword\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"productname\\" : { \\"type\\": \\"text\\",\\"analyzer\\": \\"ik_max_word\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          \\"categorys\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"type\\" : \\"nested\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"properties\\" : {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  \\"id\\" : { \\"type\\": \\"keyword\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  \\"name\\" : { \\"type\\": \\"text\\" , \\"analyzer\\": \\"ik_max_word\\" },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">                  \\"parentid\\" : { \\"type\\": \\"keyword\\" }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  }'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 给索引赋值一个文档（记录值）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XPUT </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/product/product_plan/1?pretty'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> -d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"id\\" : \\"1\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"name\\" : \\"儿童保险计划\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"desc\\" : \\"保险产品计划\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"price\\" : 200,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"productid\\" : \\"1\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"productname\\" : \\"少儿益佳保险\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      \\"categorys\\" : [</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"id\\" : \\"1\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"name\\" : \\"儿童保险\\",</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">              \\"parentid\\" : \\"3\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">          }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">      ]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">  }'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看单个索引的创建结果</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XGET </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'http://localhost:9200/blink/_mapping?pretty'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看多个索引的创建结果</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XGET </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'http://localhost:9200/blink,blog/_mapping?pretty'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看全部索引</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XGET </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'http://localhost:9200/_cat/indices?v&amp;pretty'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 获取索引</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XGET </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/product/_mapping/product_plan?pretty'</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 删除索引</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&gt; curl --user elastic:company2020 -XDELETE </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'localhost:9200/product?pretty'</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{h as comp,k as data};
