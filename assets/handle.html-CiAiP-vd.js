import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,o as t,d as o}from"./app-B5m7CcSj.js";const a={},c=o('<h2 id="死信队列" tabindex="-1"><a class="header-anchor" href="#死信队列"><span>死信队列</span></a></h2><p>当某个消费消息的业务系统崩溃且在短时间内都无法恢复时，<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>最多会重复进行<code>16次</code>的消息投递动作。</p><p>如果16次之后还是无法得到确认，那么<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>就会将这些迟迟不能被消费的消息放进一个它内部特有的队列中，这个队列的名称是<code>DeadlineQueue</code>，也叫死信队列。</p><p>对于死信队列的处理，可以专门开启一个后台线程进行订阅拉取，然后做一些业务补偿的操作。</p><br><h2 id="消息乱序" tabindex="-1"><a class="header-anchor" href="#消息乱序"><span>消息乱序</span></a></h2><p>消息之所以会出现乱序问题，是因为每个<code>Topic</code>都会有多个<code>MessageQueue</code>，当向其中写入消息数据时，会把内容均匀地分发给不同的<code>MessageQueue</code>。</p><p>然而读取的时候，却并不知道，也不关心当初写入数据时的顺序，所以就导致了消费消息时的乱序问题。</p><p>如果要想让消息有序，那么在数据从<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">MySQL</a> ==&gt; <a href="https://github.com/alibaba/canal" target="_blank" rel="noopener noreferrer">Canal</a> ==&gt; <a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的每一步，都必须实现数据的有序。</p><p>尤其是从<a href="https://github.com/alibaba/canal" target="_blank" rel="noopener noreferrer">Canal</a>到<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>这一步，必须将同一个订单的<code>binlog</code>都发送到同一个<code>MessageQueue</code>，而且还要有序。</p><p>而且这种有序数据的处理，是不能允许消息失败重试的。</p><p>所以，当遇到消息读取或处理失败时，就要立即暂停一批消息的处理，而且不能将它们放进重试队列，而是要自己开发出失败消息的处理方案。</p><p>同时还要开启事务消息，确保消息零丢失。</p><br><h2 id="消息过滤" tabindex="-1"><a class="header-anchor" href="#消息过滤"><span>消息过滤</span></a></h2><p>除了<code>Topic</code>和<code>Group</code>，消费者还可以指定消息的<code>tags</code>属性，也就是标签，比如只消费具有某一类标签的消息。<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>还支持一些基本的数据过滤语法，比如数值比较、逻辑比较和字符比较。</p><br><h2 id="消息延迟" tabindex="-1"><a class="header-anchor" href="#消息延迟"><span>消息延迟</span></a></h2><p>所谓<code>消息延迟</code>，是借鉴了<code>Redis</code>中的过期失效机制。</p><p>例如，有些用户在下单后并没有及时付款，所以这些待支付订单会短期存在于<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>中。用后台线程来定期扫描这些短期存活消息的方法并不是很好的方法，因为消息队列系统一般都是分布式的，而且数据量比较大。如果多台机器都部署订单系统，那么每台机器上都要做这种扫描工作，时机和方式都不好把握，比较麻烦。</p><p>如果使用<a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>的延迟消息，那么可以指定在创建订单的30分钟后，该条消息才会被消费到。这样的话，如果30分钟后该订单还是待支付状态，那么就可以关闭订单了，否则什么都不用做。</p><p>不管是哪种情况，都无需再执行消息队列扫描工作。</p><br><h2 id="消息权限" tabindex="-1"><a class="header-anchor" href="#消息权限"><span>消息权限</span></a></h2><p><a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>支持ACL的权限控制配置，通过设定用户和相应<code>Topic</code>的操作权限，就可以实现对消息操作权限的控制。</p><p>可以做到某一类用户只能消费某一类<code>Topic</code>，是无法读取到其他的<code>Topic</code>消息的。</p><br><h2 id="轨迹追踪" tabindex="-1"><a class="header-anchor" href="#轨迹追踪"><span>轨迹追踪</span></a></h2><p>如果想知道某条消息是什么时候从哪个生产者发出来的，又是进入到哪个<code>Topic</code>中去的，是被哪个消费者所消费的等这类消息的<code>行动轨迹</code>问题，可以将<code>Broker</code>配置文件中的<code>traceTopicEnable</code>选项设置为<code>true</code>。</p><p><a href="https://rocketmq.apache.org/" target="_blank" rel="noopener noreferrer">RocketMQ</a>会在内部自动创建一个专有的<code>Topic</code>，用来存储所有消息的所有轨迹数据。</p>',30),n=[c];function p(l,d){return t(),r("div",null,n)}const s=e(a,[["render",p],["__file","handle.html.vue"]]),g=JSON.parse('{"path":"/technology/middleware/rocketmq/handle.html","title":"消息处理中的几个问题","lang":"zh-CN","frontmatter":{"title":"消息处理中的几个问题","icon":"envelope-circle-check","category":["中间件","RocketMQ"],"tag":["中间件","RocketMQ"],"date":"2023-02-25T00:00:00.000Z","isOriginal":true,"star":true,"description":"死信队列 当某个消费消息的业务系统崩溃且在短时间内都无法恢复时，RocketMQ最多会重复进行16次的消息投递动作。 如果16次之后还是无法得到确认，那么RocketMQ就会将这些迟迟不能被消费的消息放进一个它内部特有的队列中，这个队列的名称是DeadlineQueue，也叫死信队列。 对于死信队列的处理，可以专门开启一个后台线程进行订阅拉取，然后做一...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/middleware/rocketmq/handle.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"消息处理中的几个问题"}],["meta",{"property":"og:description","content":"死信队列 当某个消费消息的业务系统崩溃且在短时间内都无法恢复时，RocketMQ最多会重复进行16次的消息投递动作。 如果16次之后还是无法得到确认，那么RocketMQ就会将这些迟迟不能被消费的消息放进一个它内部特有的队列中，这个队列的名称是DeadlineQueue，也叫死信队列。 对于死信队列的处理，可以专门开启一个后台线程进行订阅拉取，然后做一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"中间件"}],["meta",{"property":"article:tag","content":"RocketMQ"}],["meta",{"property":"article:published_time","content":"2023-02-25T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"消息处理中的几个问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-25T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"死信队列","slug":"死信队列","link":"#死信队列","children":[]},{"level":2,"title":"消息乱序","slug":"消息乱序","link":"#消息乱序","children":[]},{"level":2,"title":"消息过滤","slug":"消息过滤","link":"#消息过滤","children":[]},{"level":2,"title":"消息延迟","slug":"消息延迟","link":"#消息延迟","children":[]},{"level":2,"title":"消息权限","slug":"消息权限","link":"#消息权限","children":[]},{"level":2,"title":"轨迹追踪","slug":"轨迹追踪","link":"#轨迹追踪","children":[]}],"git":{},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"technology/middleware/rocketmq/handle.md","localizedDate":"2023年2月25日","excerpt":"<h2>死信队列</h2>\\n<p>当某个消费消息的业务系统崩溃且在短时间内都无法恢复时，<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>最多会重复进行<code>16次</code>的消息投递动作。</p>\\n<p>如果16次之后还是无法得到确认，那么<a href=\\"https://rocketmq.apache.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">RocketMQ</a>就会将这些迟迟不能被消费的消息放进一个它内部特有的队列中，这个队列的名称是<code>DeadlineQueue</code>，也叫死信队列。</p>","autoDesc":true}');export{s as comp,g as data};
