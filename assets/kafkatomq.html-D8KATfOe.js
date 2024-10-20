import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as e}from"./app-B5m7CcSj.js";const n={},t=e(`<p>如果之前使用的是<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>，但现在想将系统迁移到<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>上去的话，是不可能一下子将所有<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>服务器全部停掉，然后将业务数据直接写入到<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的，这需要有一个循序渐进的过程，主要是分三步走。</p><ul><li>先执行<code>双写</code>方案，也就是让业务代码将结果同时写入到<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>和<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>。<code>双写</code>的时间要持续一段时间，因为在这段时间内，除了要保证各个系统平稳运行不出错，还有一件很重要的事情要做：分别记录<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>和<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>发送消息的数量，并随机抽样调查写入的数据内容是否一致。</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 生产消息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> payOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 在发送Kafka消息的地方，都加上发送RocketmQ消息</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        Producer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> kafkaProducer </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> KafkaProducer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(properties)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        RecordMetadata</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> recordMetadata </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> kafkaProducer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(producerRecord).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 发送RocketmQ消息</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        SendResult</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sendResult </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> rocketProducer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(message);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ....</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li>再执行<code>双读</code>方案，也就是挑选几个用于测试的下游系统，然后将它从<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>消费数据的逻辑，用<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>再实现一遍，只不过此时<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>消费的数据可以不必进入真实的业务系统，而是要么丢弃，要么保临时保存到别的地方。这里也同样要记录和统计读取到的消息数量，通过抽样调查的方式，来将它和<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>消费的数据进行对比，从消息数量和到消息内容，再到接收时间，都可以仔细对比，看看有没有潜在的问题。</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 消费消息</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> grantCoupon</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 在消费Kafka消息的地方，都加上消费RocketmQ消息</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        KafkaConsumer</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> consumer </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> KafkaConsumer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(properties)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        consumer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">subscribe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Arrays</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">asList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;topic&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        while</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">            ConsumerRecords</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> records </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> consumer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">poll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ConsumerRecord</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> record </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> records) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                ......</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 消费RocketmQ消息</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        DefaultMQPushConsumer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> consumer </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> DefaultMQPushConsumer</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;consumer_group&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        consumer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setNamesrvAddr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;localhost:9876&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        consumer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">subscribe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;TopicTest&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        consumer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">registerMessageListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((MessageListenerConcurrently) (msgs, context) </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            ......</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ....</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><ul><li>最后进行综合的统计分析，就是将<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>和<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>之间生产消息对比的情况，和它们消费消息对比的情况再进行一个综合的交叉对比，分别看看<code>发出去的</code>和<code>收回来的</code>是否一致，延迟高还是低，异常或故障的处理方式有无不妥，数据内容是否一致，顺序是否正确等等，这一步至少要持续一周。</li></ul><p>经过以上三步之后，如果没出现什么问题或风险，就可以逐步、按批次地下线之前的<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Kafka</a>服务，然后逐步、按批次地上线新的<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>服务了。</p>`,9),l=[t];function k(h,r){return a(),i("div",null,l)}const o=s(n,[["render",k],["__file","kafkatomq.html.vue"]]),c=JSON.parse('{"path":"/technology/middleware/rocketmq/kafkatomq.html","title":"从Kafka到RocketMQ","lang":"zh-CN","frontmatter":{"title":"从Kafka到RocketMQ","icon":"envelope-circle-check","category":["中间件","RocketMQ"],"tag":["中间件","RocketMQ","Kafka"],"date":"2023-02-28T00:00:00.000Z","isOriginal":true,"star":true,"description":"如果之前使用的是Kafka，但现在想将系统迁移到RocketMQ上去的话，是不可能一下子将所有Kafka服务器全部停掉，然后将业务数据直接写入到RocketMQ的，这需要有一个循序渐进的过程，主要是分三步走。 先执行双写方案，也就是让业务代码将结果同时写入到Kafka和RocketMQ。双写的时间要持续一段时间，因为在这段时间内，除了要保证各个系统平稳...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/rocketmq/kafkatomq.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"从Kafka到RocketMQ"}],["meta",{"property":"og:description","content":"如果之前使用的是Kafka，但现在想将系统迁移到RocketMQ上去的话，是不可能一下子将所有Kafka服务器全部停掉，然后将业务数据直接写入到RocketMQ的，这需要有一个循序渐进的过程，主要是分三步走。 先执行双写方案，也就是让业务代码将结果同时写入到Kafka和RocketMQ。双写的时间要持续一段时间，因为在这段时间内，除了要保证各个系统平稳..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:tag","content":"Kafka"}],["meta",{"property":"article:published_time","content":"2023-02-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从Kafka到RocketMQ\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":2.36,"words":707},"filePathRelative":"technology/middleware/rocketmq/kafkatomq.md","localizedDate":"2023年2月28日","excerpt":"<p>如果之前使用的是<a href=\\"https://kafka.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kafka</a>，但现在想将系统迁移到<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>上去的话，是不可能一下子将所有<a href=\\"https://kafka.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Kafka</a>服务器全部停掉，然后将业务数据直接写入到<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>的，这需要有一个循序渐进的过程，主要是分三步走。</p>","autoDesc":true}');export{o as comp,c as data};
