import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,d as i}from"./app-B5m7CcSj.js";const n={},r=i(`<h2 id="宽依赖和窄依赖" tabindex="-1"><a class="header-anchor" href="#宽依赖和窄依赖"><span>宽依赖和窄依赖</span></a></h2><h3 id="窄依赖" tabindex="-1"><a class="header-anchor" href="#窄依赖"><span>窄依赖</span></a></h3><p><a href="https://spark.apache.org/docs/latest/api/scala/org/apache/spark/NarrowDependency.html" target="_blank" rel="noopener noreferrer">Scala语言版窄依赖API（Narrow Dependency API）</a>。</p><p><a href="https://spark.apache.org/docs/latest/api/java/org/apache/spark/NarrowDependency.html" target="_blank" rel="noopener noreferrer">Java语言版窄依赖API（Narrow Dependency API）</a>。</p><p>不管是哪种语言版本的<code>窄依赖（Narrow Dependency）</code>，它们都指的是父<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>的一个或多个分区被子<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>的一个或多个分区所使用，例如<code>map</code>、<code>filter</code>、<code>union</code>、<code>join</code>、<code>cogroup</code>、<code>cartesian</code>等算子。</p><figure><img src="https://tianmazuo.com/technology/bigdata/spark/spark-06.png" alt="窄依赖（Narrow Dependency）" tabindex="0" loading="lazy"><figcaption>窄依赖（Narrow Dependency）</figcaption></figure><h3 id="宽依赖" tabindex="-1"><a class="header-anchor" href="#宽依赖"><span>宽依赖</span></a></h3><p><a href="https://spark.apache.org/docs/latest/api/scala/org/apache/spark/ShuffleDependency.html" target="_blank" rel="noopener noreferrer">Scala语言版宽依赖API（Shuffle Dependency API）</a>。</p><p><a href="https://spark.apache.org/docs/latest/api/java/org/apache/spark/ShuffleDependency.html" target="_blank" rel="noopener noreferrer">Java语言版宽依赖API（Shuffle Dependency API）</a>。</p><p><code>宽依赖（Shuffle Dependency）</code>指的是父<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>的每个分区的一部分被多个子<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>所使用，例如<code>reduceByKey</code>、<code>groupByKey</code>等算子。</p><figure><img src="https://tianmazuo.com/technology/bigdata/spark/spark-07.png" alt="宽依赖（Shuffle Dependency）" tabindex="0" loading="lazy"><figcaption>宽依赖（Shuffle Dependency）</figcaption></figure><figure><img src="https://tianmazuo.com/technology/bigdata/spark/spark-08.png" alt="窄依赖（Narrow Dependency）和宽依赖（Shuffle Dependency）的应用" tabindex="0" loading="lazy"><figcaption>窄依赖（Narrow Dependency）和宽依赖（Shuffle Dependency）的应用</figcaption></figure><br><h2 id="stage" tabindex="-1"><a class="header-anchor" href="#stage"><span>Stage</span></a></h2><p><a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>每执行一次<code>Action</code>操作，就会启动一个<code>Job</code>，而如果这个<code>Job</code>有<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html#shuffle-operations" target="_blank" rel="noopener noreferrer">Shuffle</a>（也就是<code>宽依赖（Shuffle Dependency）</code>）操作，则这个<code>Job</code>又会被划分成前后两个<code>Stage</code>，每个<code>Stage</code>都由一组并行的<code>Task</code>组成。</p><p><code>Stage</code>会将一批<code>Task</code>用<code>TaskSet</code>封装起来，然后提交给<code>TaskScheduler</code>分配，最后发送给<code>Executor</code>去执行。</p><p><code>Stage</code>的划分过程是从后往前进行的，也就是从最后一个<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>开始倒推，每遇到一个<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html#shuffle-operations" target="_blank" rel="noopener noreferrer">Shuffle</a>操作就划分。但它的执行过程却是从前往后，也就是按照正常的代码顺序来执行的。</p><figure><img src="https://tianmazuo.com/technology/bigdata/spark/spark-09.png" alt="Stage的划分过程" tabindex="0" loading="lazy"><figcaption>Stage的划分过程</figcaption></figure><br><h2 id="job的三种提交模式" tabindex="-1"><a class="header-anchor" href="#job的三种提交模式"><span>Job的三种提交模式</span></a></h2><h3 id="standalone模式" tabindex="-1"><a class="header-anchor" href="#standalone模式"><span>Standalone模式</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/spark-submit --master spark://hadoop:7077 ......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="yarn-clint模式" tabindex="-1"><a class="header-anchor" href="#yarn-clint模式"><span>yarn clint模式</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/spark-submit --yarn --deploy-mode client ......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="yarn-cluster模式" tabindex="-1"><a class="header-anchor" href="#yarn-cluster模式"><span>yarn cluster模式</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; ./bin/spark-submit --yarn --deploy-mode cluster ......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>三种模式的区别如下图。</p><figure><img src="https://tianmazuo.com/technology/bigdata/spark/spark-10.png" alt="Job三种提交模式的区别" tabindex="0" loading="lazy"><figcaption>Job三种提交模式的区别</figcaption></figure><br><h2 id="shuffle" tabindex="-1"><a class="header-anchor" href="#shuffle"><span>Shuffle</span></a></h2><p>在<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>中，<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html#shuffle-operations" target="_blank" rel="noopener noreferrer">Shuffle</a>指的是将数据重新分区并重新分发到不同的节点上进行处理的过程。</p><p><code>reduceByKey</code>、<code>groupByKey</code>、<code>sortByKey</code>、<code>countByKey</code>（<code>xxxByKey</code>类的算子）和<code>join</code>等算子会产生<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html#shuffle-operations" target="_blank" rel="noopener noreferrer">Shuffle</a>。</p><p><a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html#shuffle-operations" target="_blank" rel="noopener noreferrer">Shuffle</a>的算法经过了几种不同的变化。</p><ul><li><p>未优化的<code>Hash Based Shuffle</code>。</p></li><li><p>优化后的<code>Hash Based Shuffle</code>。</p></li><li><p><code>Sort-Based Shuffle</code>。</p></li></ul><br><h2 id="checkpoint" tabindex="-1"><a class="header-anchor" href="#checkpoint"><span>Checkpoint</span></a></h2><p>当<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>的计算任务较为复杂，且运行时间较长时，比较适合使用<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>功能，这是<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>的一个容灾备份机制，也可以把它理解为<a href="https://spark.apache.org/" target="_blank" rel="noopener noreferrer">Spark</a>任务执行过程中产生的快照。</p><p><a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>和<code>持久化</code>有两个关键区别。</p><ul><li><p><code>持久化</code>将数据存储在内存中，一旦宕机就会丢失。而<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>则是将数据保存在磁盘或高可用的分布式存储系统中，基本上不会有数据丢失的情况。</p></li><li><p><a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>被持久化之后其相互依赖关系（又称为<code>血缘关系</code>）仍然存在，而一旦被<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>存为快照之后，它所有的<code>血缘关系</code>全部丢失。</p></li></ul><p>所以，如果某个<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>需要执行<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>，那么可以先执行一次<code>持久化</code>操作，例如<code>persist(StorageLevel.DISK_ONLY)</code>。</p><p>这样一来，当后面进行<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>操作时就会直接从磁盘上读取<a href="https://spark.apache.org/docs/latest/rdd-programming-guide.html" target="_blank" rel="noopener noreferrer">RDD</a>的数据，而不再需要重新计算一次。</p><p>调用<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>的方法也很简单。</p><p><a href="https://www.scala-lang.org/api/2.11.12/#package" target="_blank" rel="noopener noreferrer">Scala 2</a>调用<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>方法的代码。</p><div class="language-scala line-numbers-mode" data-highlighter="shiki" data-ext="scala" data-title="scala" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 1. 设置checkpoint目录</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">sc.setCheckpointDir(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hdfs://hadoop:9000/checkpoint/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">val</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> linesRDD</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> sc.textFile(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/wordcount.txt&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 2. 先执行RDD的持久化方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">linesRDD.persist(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">StorageLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">DISK_ONLY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 3. 再对RDD调用checkpoint()方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">linesRDD.checkpoint()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>调用<a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#checkpointing" target="_blank" rel="noopener noreferrer">Checkpoint</a>方法的代码。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 1. 设置checkpoint目录</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">sc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setCheckpointDir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;hdfs://hadoop:9000/checkpoint/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">JavaRDD</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> linesRDD </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> sc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">textFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/wordcount.txt&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 2. 先执行RDD的持久化方法</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">linesRDD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">persist</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">StorageLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DISK_ONLY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 3. 再对RDD调用checkpoint()方法</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">linesRDD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">checkpoint</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),t=[r];function l(p,h){return s(),a("div",null,t)}const c=e(n,[["render",l],["__file","advanced.html.vue"]]),k=JSON.parse('{"path":"/technology/bigdata/spark/advanced.html","title":"高级特性","lang":"zh-CN","frontmatter":{"title":"高级特性","icon":"fire","category":["大数据","Spark"],"tag":["大数据","Spark"],"date":"2023-04-13T00:00:00.000Z","isOriginal":true,"star":true,"description":"宽依赖和窄依赖 窄依赖 Scala语言版窄依赖API（Narrow Dependency API）。 Java语言版窄依赖API（Narrow Dependency API）。 不管是哪种语言版本的窄依赖（Narrow Dependency），它们都指的是父RDD的一个或多个分区被子RDD的一个或多个分区所使用，例如map、filter、union、j...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/bigdata/spark/advanced.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"高级特性"}],["meta",{"property":"og:description","content":"宽依赖和窄依赖 窄依赖 Scala语言版窄依赖API（Narrow Dependency API）。 Java语言版窄依赖API（Narrow Dependency API）。 不管是哪种语言版本的窄依赖（Narrow Dependency），它们都指的是父RDD的一个或多个分区被子RDD的一个或多个分区所使用，例如map、filter、union、j..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/bigdata/spark/spark-06.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Spark"}],["meta",{"property":"article:published_time","content":"2023-04-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高级特性\\",\\"image\\":[\\"https://tianmazuo.com/technology/bigdata/spark/spark-06.png\\",\\"https://tianmazuo.com/technology/bigdata/spark/spark-07.png\\",\\"https://tianmazuo.com/technology/bigdata/spark/spark-08.png\\",\\"https://tianmazuo.com/technology/bigdata/spark/spark-09.png\\",\\"https://tianmazuo.com/technology/bigdata/spark/spark-10.png\\"],\\"datePublished\\":\\"2023-04-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"宽依赖和窄依赖","slug":"宽依赖和窄依赖","link":"#宽依赖和窄依赖","children":[{"level":3,"title":"窄依赖","slug":"窄依赖","link":"#窄依赖","children":[]},{"level":3,"title":"宽依赖","slug":"宽依赖","link":"#宽依赖","children":[]}]},{"level":2,"title":"Stage","slug":"stage","link":"#stage","children":[]},{"level":2,"title":"Job的三种提交模式","slug":"job的三种提交模式","link":"#job的三种提交模式","children":[{"level":3,"title":"Standalone模式","slug":"standalone模式","link":"#standalone模式","children":[]},{"level":3,"title":"yarn clint模式","slug":"yarn-clint模式","link":"#yarn-clint模式","children":[]},{"level":3,"title":"yarn cluster模式","slug":"yarn-cluster模式","link":"#yarn-cluster模式","children":[]}]},{"level":2,"title":"Shuffle","slug":"shuffle","link":"#shuffle","children":[]},{"level":2,"title":"Checkpoint","slug":"checkpoint","link":"#checkpoint","children":[]}],"git":{},"readingTime":{"minutes":3.41,"words":1023},"filePathRelative":"technology/bigdata/spark/advanced.md","localizedDate":"2023年4月13日","excerpt":"<h2>宽依赖和窄依赖</h2>\\n<h3>窄依赖</h3>\\n<p><a href=\\"https://spark.apache.org/docs/latest/api/scala/org/apache/spark/NarrowDependency.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Scala语言版窄依赖API（Narrow Dependency API）</a>。</p>\\n<p><a href=\\"https://spark.apache.org/docs/latest/api/java/org/apache/spark/NarrowDependency.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java语言版窄依赖API（Narrow Dependency API）</a>。</p>","autoDesc":true}');export{c as comp,k as data};
