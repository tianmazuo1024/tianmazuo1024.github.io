import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,d as a}from"./app-B5m7CcSj.js";const n={},l=a(`<p>将存储在<a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>数据库中的<code>Collection</code>进行分片需要合理选择分片<code>Key</code>，它直接决定了集群中数据分布是否均衡、集群性能是否良好。</p><p>下面是一个记录日志的Document。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ny153.example.com&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    application</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;apache&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    time</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2021-01-02T21:21:56.249Z&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    level</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ERROR&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    msg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;something is broken&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分片<code>Key</code>的选择需要考虑如下几点。</p><br><h2 id="基数" tabindex="-1"><a class="header-anchor" href="#基数"><span>基数</span></a></h2><p>Mongodb中一个被分片的<code>Collection</code>的所有数据都存放在众多的<code>Chunk</code>中。一个<code>Chunk</code>存放分片字段的一个区间范围的数据。选择一个好的分片字段非常重要，否则就会遭遇到不能被拆分的大<code>Chunk</code>。</p><p>以上述的日志为例，如果选择<code>{server:1}</code>来作为一个分片<code>Key</code>的话，那么<code>server</code>上的所有数据都是在同一个<code>Chunk</code>中，很容易想到日志数据会超过200MB（默认Chunk大小）。</p><p>如果分片<code>Key</code>是<code>{server:1,time:1}</code>，那么能够将一个<code>Server</code>上的日志信息进行分片，直至毫秒级别，绝对不会存在不可被拆分的<code>Chunk</code>。</p><p>将<code>Chunk</code>的规模维持在一个合理的大小是非常重要的，只有这样数据才能均匀分布，并且移动<code>Chunk</code>的代价也不会过大。</p><br><h2 id="写操作可扩展" tabindex="-1"><a class="header-anchor" href="#写操作可扩展"><span>写操作可扩展</span></a></h2><p>使用分片的一个主要原因之一是分散写操作。为了实现这个目标，尽可能的将写操作分散到多个<code>Chunk</code>就尤为重要了。</p><p>如果选择<code>{time：1}</code>来作为分片<code>key</code>将导致所有的写操作都会落在最新的一个<code>Chunk</code>上，这样就形成了一个热点区域。</p><p>如果选择<code>{server:1,application:1,time:1}</code>来作为分片<code>Key</code>的话，那么每一个<code>server</code>上的应用的日志信息将会写在不同的地方，如果有100个应用和10个<code>server</code>，那么每一个<code>server</code>将会分担1/10的写操作。</p><br><h2 id="查询隔离" tabindex="-1"><a class="header-anchor" href="#查询隔离"><span>查询隔离</span></a></h2><p>另外一个需要考虑的是任何一个查询操作将会由多少个分片来来提供服务。</p><p>最理想的情况是，一个查询操作直接从<code>Mongos</code>进程路由到一个<code>Mongodb</code>上，并且这个<code>Mongodb</code>拥有该次查询的全部数据。</p><p>因此，如果通用的查询操作的都以<code>server</code>作为查询条件的话，那么以<code>server</code>作为一个起始的分片<code>Key</code>会使整个集群更加高效。</p><p>任何一个查询都能执行，不管使用什么来作为分片<code>Key</code>。但是，如果<code>Mongos</code>进程不知道是哪一个<code>Mongodb</code>的分片拥有要查询的数据的话，<code>Mongos</code>将会让所有的<code>Mongod</code>分片去执行查询操作，再将结果信息汇总起来返回。</p><p>显而易见，这会增加服务器的响应时间，会增加网络成本，也会无谓的增加了负担。</p><br><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序"><span>排序</span></a></h2><p>在需要调用<code>sort()</code>来查询排序后的结果的时候，以分片<code>Key</code>的最左边的字段为依据，<code>Mongos</code>可以按照预先排序的结果来查询最少的分片，并且将结果信息返回给调用者。这样会花最少的时间和资源代价。</p><p>相反，如果在利用<code>sort()</code>排序的时候，排序所依据的字段不是最左侧（起始）的分片<code>Key</code>，那么<code>Mongos</code>将不得不并行的将查询请求传递给每一个分片，然后将各个分片返回的结果合并之后再返回请求方。这个会给<code>Mongos</code>增加额外的负担。</p><br><h2 id="可靠性" tabindex="-1"><a class="header-anchor" href="#可靠性"><span>可靠性</span></a></h2><p>选择分片<code>Key</code>的一个非常重要因素是万一某一个分片彻底不可访问了，受到影响的<code>Chunk</code>有多大。</p><p>例如，有一个类似于<code>Twitter</code>的系统，其<code>Comment</code>记录类似如下形式。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    _id:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ObjectId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;4d084f78a4c8707815a601d7&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    user_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 42</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    time</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2021-01-02T21:21:56.249Z&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    comment</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;I am happily using MongoDB&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这个系统对写操作非常敏感，所以需要将写操作扁平化的分布到所有的<code>Server</code>上去，这个时候就需要用<code>id</code>或者<code>user_id</code>来作为分片<code>Key</code>了。</p><p>使用<code>id</code>作为分片<code>Key</code>有最大粒度的扁平化，但是在一个分片宕机的情况下，会影响几乎所有的用户（一些数据丢失了）。</p><p>如果使用<code>user_id</code>作为分片<code>Key</code>，只有极少比率的用户会收到影响（在存在5个分片的时候，20%的用户受影响），但是这些用户会再也不会看到他们的数据了。</p><br><h2 id="索引优化" tabindex="-1"><a class="header-anchor" href="#索引优化"><span>索引优化</span></a></h2><p>如果只有一部分的索引被读或者更新的话，通常会有更好的性能，因为“活跃”的部分在大多数时间内能驻留在内存中。</p><p>上面选择分片<code>Key</code>的方法都是为了最终数据能够均匀的分布，与此同时，每一个<code>Mongod</code>的索引信息也被均匀分布了。</p><p>相反，使用时间戳作为分片<code>key</code>的起始字段会有利于将常用索引限定在较小的一部分。</p><p>例如，有一个图片存储系统，图片记录类似于如下形式。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    _id:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ObjectId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;4d084f78a4c8707815a601d7&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    user_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 42</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    title:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;sunset at the beach&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    upload_time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2021-01-02T21:21:56.249Z&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    data:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以构造一个客户<code>id</code>，让它包括图片上传时间对应的信息和一个唯一标志符。记录看起来就像下面这个样子。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    _id:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2021-01-02_4d084f78a4c8707815a601d7&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    user_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 42</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    title:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;sunset at the beach&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    upload_time</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2021-01-02T21:21:56.249Z&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    data:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户<code>id</code>作为分片<code>key</code>，并且这个<code>id</code>也被用于去访问<code>Document</code>。这样既能将数据均衡的分布在各个节点上，也减少了大多数查询所使用的索引比例。</p><p>更进一步来讲：在每一个月份的开始，在最初的一段时间内只有一个<code>server</code>来存取数据。</p><p>随着数据量的增长，负载均衡器（balancer）就开始进行分裂和迁移数据块了。为了避免潜在的低效率和迁移数据，预先创建分片范围区间是明智之举。</p><p>可以继续改进，把<code>user_id</code>包含到图片的<code>id</code>中来。这样的话会让一个用户的所有<code>Document</code>都在一个分片上。比如用<code>2021-01-02_42_4d084f78a4c8707815a601d7</code>作为图片的id。</p><br><h2 id="gridfs" tabindex="-1"><a class="header-anchor" href="#gridfs"><span>GridFS</span></a></h2><p>根据需求的不同，<code>GridFS</code>有几种不同的分片方法。基于预先存在的索引是惯用的分片办法。</p><ul><li><p><code>files集合</code>不会分片，所有的文件记录都会位于一个分片上，推荐使该分片保持高度灵活（至少使用由3个节点构成的replica set）。</p></li><li><p><code>chunks集合</code>应该被分片，并且用索引<code>files_id:1</code>。已经存在的由<code>MongoDB</code>的驱动来创建的<code>files_id,n</code>索引不能用作分片<code>Key</code>（这个是一个分片约束，后续会被修复），所以不得不创建一个独立的<code>files_id</code>索引。使用<code>files_id</code>作为分片<code>Key</code>的原因是一个特定的文件的所有<code>Chunks</code>都是在相同的分片上，非常安全并且允许运行<code>filemd5</code>命令（要求特定的驱动）。</p></li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; db.fs.chunks.ensureIndex({files_id: 1});</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">db.runCommand(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> shardcollection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;test.fs.chunks&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> key</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files_id</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }}</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;collectionsharded&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;test.fs.chunks&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ok&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于默认的<code>files_id</code>是一个<code>ObjectId</code>，<code>files_id</code>将会升序增长。</p><p>因此，<code>GridFS</code>的全部<code>Chunks</code>都会被从一个单点分片上存取。如果写的负载比较高，就需要使用其他的分片<code>Key</code>了，或者使用其它的值来作为分片<code>Key</code>。</p><p>选择分片<code>Key</code>需要考虑的因素具有一定的对立性，不可能样样具备，在实际使用过程中还是需要根据需求的不同来进行权衡，适当放弃一些。</p>`,55),d=[l];function t(h,p){return e(),i("div",null,d)}const c=s(n,[["render",t],["__file","sharding.html.vue"]]),r=JSON.parse('{"path":"/technology/middleware/mongodb/sharding.html","title":"选择分片字段","lang":"zh-CN","frontmatter":{"title":"选择分片字段","icon":"lemon","category":["中间件","MongoDB"],"tag":["中间件","MongoDB","分片"],"date":"2023-01-16T00:00:00.000Z","isOriginal":true,"star":true,"description":"将存储在MongoDB数据库中的Collection进行分片需要合理选择分片Key，它直接决定了集群中数据分布是否均衡、集群性能是否良好。 下面是一个记录日志的Document。 分片Key的选择需要考虑如下几点。 基数 Mongodb中一个被分片的Collection的所有数据都存放在众多的Chunk中。一个Chunk存放分片字段的一个区间范围的数据...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/mongodb/sharding.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"选择分片字段"}],["meta",{"property":"og:description","content":"将存储在MongoDB数据库中的Collection进行分片需要合理选择分片Key，它直接决定了集群中数据分布是否均衡、集群性能是否良好。 下面是一个记录日志的Document。 分片Key的选择需要考虑如下几点。 基数 Mongodb中一个被分片的Collection的所有数据都存放在众多的Chunk中。一个Chunk存放分片字段的一个区间范围的数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"MongoDB"}],["meta",{"property":"article:tag","content":"分片"}],["meta",{"property":"article:published_time","content":"2023-01-16T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"选择分片字段\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-16T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"基数","slug":"基数","link":"#基数","children":[]},{"level":2,"title":"写操作可扩展","slug":"写操作可扩展","link":"#写操作可扩展","children":[]},{"level":2,"title":"查询隔离","slug":"查询隔离","link":"#查询隔离","children":[]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":2,"title":"可靠性","slug":"可靠性","link":"#可靠性","children":[]},{"level":2,"title":"索引优化","slug":"索引优化","link":"#索引优化","children":[]},{"level":2,"title":"GridFS","slug":"gridfs","link":"#gridfs","children":[]}],"git":{},"readingTime":{"minutes":6.51,"words":1954},"filePathRelative":"technology/middleware/mongodb/sharding.md","localizedDate":"2023年1月16日","excerpt":"<p>将存储在<a href=\\"https://www.mongodb.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MongoDB</a>数据库中的<code>Collection</code>进行分片需要合理选择分片<code>Key</code>，它直接决定了集群中数据分布是否均衡、集群性能是否良好。</p>\\n<p>下面是一个记录日志的Document。</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    server</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> :</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"ny153.example.com\\"</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    application</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> :</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"apache\\"</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">    time</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> :</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"2021-01-02T21:21:56.249Z\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    level</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> :</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"ERROR\\"</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    msg</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> :</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"something is broken\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,r as data};
