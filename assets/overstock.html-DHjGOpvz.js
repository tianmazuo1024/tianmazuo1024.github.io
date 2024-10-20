import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-B5m7CcSj.js";const l={},t=n(`<p>当<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的消费者终端崩溃而生产者依旧在不停地写入并发送消息时，就会产生消息积压问题。</p><p>如果仅仅只是几百上千，哪怕上万的消息积压，倒也不是什么问题，但如果积压的消息量一旦达到某个数量级，就会对<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>和业务系统造成冲击。</p><p>可以通过<code>宏观 + 微观</code>结合的方式来解决这个问题。</p><p>所谓<code>宏观的方式</code>就是通过临时部署更多的机器来分流这么多的消息内容，让每台机器都在所能承受的流量压力范围内。当积压的服务消息都处理完后，就可再下线这些临时部署的机器。</p><p>这种方式要求<code>Topic</code>在创建时就显式地配置了较多的<code>MessageQueue</code>数量可用于分流，否则要么删除重新创建，要么就只能重新编译<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的源码，用<code>Broker</code>的配置信息覆盖<code>defaultTopic</code>的配置信息，但很明显，生产环境不可能这么做。</p><p>而<code>微观的方式</code>则是通过一种类似于管道的方法，变相地为<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>和业务系统减压。使用这种方式是因为之前创建的<code>Topic</code>的<code>MessageQueue</code>数量有限，无法通过宏观的方式进行扩容。</p><p>首先，这种方式不会对消息做任何处理，而是仅仅只做中转，将它转发到另外的<code>Topic</code>中，这个新的<code>Topic</code>有较多的可用于分流的<code>MessageQueue</code>。</p><p>然后在新的<code>Topic</code>机器中再套用<code>宏观的方式</code>。</p><figure><img src="https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-26.png" alt="分流积压的服务消息" tabindex="0" loading="lazy"><figcaption>分流积压的服务消息</figcaption></figure><p>另外，作为消息生产者的订单系统，是需要提前准备好应对<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>崩溃这种情况的，否则又会退化到一个订单系统应对十几个下游系统的情况。</p><p>可以通过这种下面这种方式来防止并应对<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>崩溃的情况。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 支付订单伪代码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Transactional</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> payOrder</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    SendResult</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 发送消息更新数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> producer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> result) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // TODO Somthing...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 如果消息发送失败，就重试3次</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 重试发送消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> producer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 重试多次失败后抛出异常回滚本地事务</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> result) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // TODO Somthing...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // MQ已经彻底崩溃，将订单相关数据保存到本地磁盘或NoSQL中，一旦MQ恢复立即取出执行</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 可以按照ID或时间顺序来保存，总之，要有序</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        saveData2File</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> timestamp)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // saveData2Elasticsearch(data, timestamp)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 后台进程扫描伪代码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handleSavedData</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    SendResult</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 定时任务线程池</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    ScheduledExecutorService</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> scheduleService </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> Executors</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">newScheduledThreadPool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(m);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 异步执行任务，无需返回值</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    CompletableFuture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">runAsync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 先发送一个消息看看MQ是否已经恢复</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> producer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Are you OK ?&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 从本地文件或者从NoSQL中读取数据</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">                Data</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> readDataFromFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(filePath);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 将数据发送给MQ</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> producer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                    // TODO Somthing...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">InterruptedException</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // 这里依旧遵循消息发送失败重试的逻辑</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; i++) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 重试发送消息</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> producer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sendMessage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(data);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                // 重试多次失败后抛出异常</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">null</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                    // TODO Somthing...</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">                    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            // MQ再次崩溃，因为数据之前已经保存过，所以这里不用再次保存</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }, scheduleService</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面伪代码的逻辑结构中可以清楚地看到当<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>崩溃时的应对方法，只是要注意写入和读取时的数据有序问题。</p>`,13),e=[t];function h(k,p){return a(),s("div",null,e)}const c=i(l,[["render",h],["__file","overstock.html.vue"]]),A=JSON.parse('{"path":"/technology/middleware/rocketmq/overstock.html","title":"服务消息积压处理","lang":"zh-CN","frontmatter":{"title":"服务消息积压处理","icon":"envelope-circle-check","category":["中间件","RocketMQ"],"tag":["中间件","RocketMQ"],"date":"2023-02-27T00:00:00.000Z","isOriginal":true,"star":true,"description":"当RocketMQ的消费者终端崩溃而生产者依旧在不停地写入并发送消息时，就会产生消息积压问题。 如果仅仅只是几百上千，哪怕上万的消息积压，倒也不是什么问题，但如果积压的消息量一旦达到某个数量级，就会对RocketMQ和业务系统造成冲击。 可以通过宏观 + 微观结合的方式来解决这个问题。 所谓宏观的方式就是通过临时部署更多的机器来分流这么多的消息内容，让...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/rocketmq/overstock.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"服务消息积压处理"}],["meta",{"property":"og:description","content":"当RocketMQ的消费者终端崩溃而生产者依旧在不停地写入并发送消息时，就会产生消息积压问题。 如果仅仅只是几百上千，哪怕上万的消息积压，倒也不是什么问题，但如果积压的消息量一旦达到某个数量级，就会对RocketMQ和业务系统造成冲击。 可以通过宏观 + 微观结合的方式来解决这个问题。 所谓宏观的方式就是通过临时部署更多的机器来分流这么多的消息内容，让..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-26.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2023-02-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务消息积压处理\\",\\"image\\":[\\"https://tianmazuo.com/technology/middleware/rocketmq/rocketmq-26.png\\"],\\"datePublished\\":\\"2023-02-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":3.14,"words":943},"filePathRelative":"technology/middleware/rocketmq/overstock.md","localizedDate":"2023年2月27日","excerpt":"<p>当<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>的消费者终端崩溃而生产者依旧在不停地写入并发送消息时，就会产生消息积压问题。</p>\\n<p>如果仅仅只是几百上千，哪怕上万的消息积压，倒也不是什么问题，但如果积压的消息量一旦达到某个数量级，就会对<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>和业务系统造成冲击。</p>","autoDesc":true}');export{c as comp,A as data};
