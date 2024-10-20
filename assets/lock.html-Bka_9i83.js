import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,d as l}from"./app-B5m7CcSj.js";const i={},s=l('<h2 id="避免脏写" tabindex="-1"><a class="header-anchor" href="#避免脏写"><span>避免脏写</span></a></h2><p>脏读、不可重复读与幻读，都发生在更新数据时，因此读的不对，就会发生这些问题——不过这些都通过<code>MVCC</code>机制解决了。但是多个事务并发更新同一行数据时，会有脏写问题，而要解决脏写问题，就需要比<code>MVCC</code>更加底层的机制——锁——来解决了。</p><p><a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>中的任何数据需要更新的时候，都会创建一把锁，里面包含了自身的<code>trx_id</code>和等待状态，然后将锁和当前数据关联起来。</p><p>根据<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>的更新机制，更新数据时必须把数据页从磁盘文件里读取到缓存页里来才能更新，因此数据和关联的锁数据结构，都是在内存里面的。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-54.png" alt="锁结构" tabindex="0" loading="lazy"><figcaption>锁结构</figcaption></figure><p>此时，<code>事务B</code>也想更新数据，并检查数据上有没有锁。如果发现数据已经被锁，那么<code>事务B</code>也会生成一个自己的锁，等待前一个事务执行完成后解锁（释放资源）。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-55.png" alt="事务再加锁" tabindex="0" loading="lazy"><figcaption>事务再加锁</figcaption></figure><p>如果<code>事务A</code>执行完成，会把自己的锁给释放，然后会寻找数据上是否有其他锁。</p><p>当发现<code>事务B</code>也加了锁时，<code>事务A</code>会修改事务B的锁等待状态，并唤醒<code>事务</code>继续执行。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-56.png" alt="事务唤醒" tabindex="0" loading="lazy"><figcaption>事务唤醒</figcaption></figure><br><h2 id="独占锁" tabindex="-1"><a class="header-anchor" href="#独占锁"><span>独占锁</span></a></h2><p>当事务更新数据，如果有其他事务的写请求时，默认加的就是独占锁，或排他锁<code>Exlucde</code>——一次只让一个事务得以执行，后续事务都需要排队等待前一个事务的锁释放。</p><p>当事务更新数据，如果有其他事务的读请求时，默认开启<code>MVCC</code>机制，所以不需要加锁——读和写操作是不需要互斥的。</p><br><h2 id="共享锁" tabindex="-1"><a class="header-anchor" href="#共享锁"><span>共享锁</span></a></h2><p>如果在读取时需要加锁，<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>也支持一种S锁：<code>Share</code>共享锁。</p><p>查询的共享锁。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> LOCK </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">IN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> SHARE MODE;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询的互斥锁。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FOR</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果此时有事务正在更新数据，也就是数据已经被加了独占锁，那么是不能再加共享锁的——独占锁和共享锁互斥。</p><p>反过来也一样——如果已经加了共享锁，当有事务需要更新时，也是不能再加独占锁的。</p><p>但是如果数据已经加了共享锁，其他事务的读请求还是可以继续加共享锁的，也就是共享锁之间是不会互斥的。</p><br><h2 id="锁的互斥规律" tabindex="-1"><a class="header-anchor" href="#锁的互斥规律"><span>锁的互斥规律</span></a></h2><ul><li><p>更新数据时必然加独占锁，和其他独占锁、共享锁互斥。</p></li><li><p>如果查询不带共享锁，由于<code>MVCC</code>机制，是不会受到独占锁影响的。</p></li><li><p>如果查询带共享锁，其他查询仍然可以加共享锁，但是无法更新，因为和独占锁互斥。</p></li><li><p>查询操作也可以加互斥锁：<code>SELECT * FROM TABLE FOR UPDATE;</code>。</p></li></ul><table><thead><tr><th style="text-align:center;">锁类型</th><th style="text-align:center;">独占锁</th><th style="text-align:center;">共享锁</th></tr></thead><tbody><tr><td style="text-align:center;">独占锁</td><td style="text-align:center;">互斥</td><td style="text-align:center;">互斥</td></tr><tr><td style="text-align:center;">共享锁</td><td style="text-align:center;">互斥</td><td style="text-align:center;">不互斥</td></tr></tbody></table><br><h2 id="行级锁的触发" tabindex="-1"><a class="header-anchor" href="#行级锁的触发"><span>行级锁的触发</span></a></h2><p>独占锁和共享锁，其实都是属于行级锁。多个事务并发更新数据时，都要在行级别加独占锁，也就是<code>行锁</code>。</p><p><code>行锁</code>不会发生<code>脏写</code>问题，但在读取时，会有两种可能。</p><ul><li><p>基于<code>MVCC</code>机制进行事务隔离，读取<code>undo log</code>快照。</p></li><li><p>查询的同时加共享锁或互斥锁。</p></li></ul><p>不要轻易加行锁，而是通过<code>Redis/Zookeeper</code>实现分布式锁。</p><br><h2 id="表锁" tabindex="-1"><a class="header-anchor" href="#表锁"><span>表锁</span></a></h2><p>在数据库中，除了给数据行加锁，还可以给表加锁。</p><p><a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>通用的<code>DDL</code>元数据锁<code>Metadata Locks</code>并不是<code>表级锁</code>，但表的<code>DDL</code>和<code>增删改（CDU）</code>操作确实是互斥的。</p><p><code>表级锁</code>与存储引擎相关，每种存储引擎都提供了自己的表级锁，比如<code>InnoDB</code>表级锁。</p><p><a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a><code>表级锁</code>实际开发中使用不多，分为两种。</p><ul><li><p>手动表锁。</p><ul><li><p>手动共享锁：<code>LOCK TABLES xxx READ;</code>。</p></li><li><p>手动独占锁：<code>LOCK TABLES xxx WRITE;</code>。</p></li></ul></li><li><p>表级意向锁。</p><ul><li><p>如果有事务在执行增删改操作，那么会自动在表级加一个意向独占锁。</p></li><li><p>如果有事务在执行查询操作，那么会自动在表级加一个意向共享锁。</p></li><li><p>这两种自动意向锁不会互斥。</p></li><li><p>但手动加的表级共享锁、独占锁，和自动在表上加的意向共享锁、独占锁之间反而是有一定的互斥关系。</p></li></ul></li></ul><p>一般读操作默认都是通过<code>MVCC</code>机制进行的，极少手动加锁。</p><table><thead><tr><th style="text-align:center;">锁类型</th><th style="text-align:center;">手动独占锁</th><th style="text-align:center;">意向独占锁</th><th style="text-align:center;">手动共享锁</th><th style="text-align:center;">意向共享锁</th></tr></thead><tbody><tr><td style="text-align:center;">手动独占锁</td><td style="text-align:center;">互斥</td><td style="text-align:center;">互斥</td><td style="text-align:center;">互斥</td><td style="text-align:center;">互斥</td></tr><tr><td style="text-align:center;">意向独占锁</td><td style="text-align:center;">互斥</td><td style="text-align:center;">不互斥</td><td style="text-align:center;">互斥</td><td style="text-align:center;">不互斥</td></tr><tr><td style="text-align:center;">手动共享锁</td><td style="text-align:center;">互斥</td><td style="text-align:center;">互斥</td><td style="text-align:center;">不互斥</td><td style="text-align:center;">不互斥</td></tr><tr><td style="text-align:center;">意向共享锁</td><td style="text-align:center;">互斥</td><td style="text-align:center;">不互斥</td><td style="text-align:center;">不互斥</td><td style="text-align:center;">不互斥</td></tr></tbody></table>',43),n=[s];function d(r,o){return a(),t("div",null,n)}const h=e(i,[["render",d],["__file","lock.html.vue"]]),g=JSON.parse('{"path":"/technology/database/mysql/lock.html","title":"锁","lang":"zh-CN","frontmatter":{"title":"锁","icon":"table","category":["数据库","MySQL"],"tag":["数据库","MySQL"],"date":"2023-05-08T00:00:00.000Z","isOriginal":true,"star":true,"description":"避免脏写 脏读、不可重复读与幻读，都发生在更新数据时，因此读的不对，就会发生这些问题——不过这些都通过MVCC机制解决了。但是多个事务并发更新同一行数据时，会有脏写问题，而要解决脏写问题，就需要比MVCC更加底层的机制——锁——来解决了。 MySQL中的任何数据需要更新的时候，都会创建一把锁，里面包含了自身的trx_id和等待状态，然后将锁和当前数据关...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/database/mysql/lock.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"锁"}],["meta",{"property":"og:description","content":"避免脏写 脏读、不可重复读与幻读，都发生在更新数据时，因此读的不对，就会发生这些问题——不过这些都通过MVCC机制解决了。但是多个事务并发更新同一行数据时，会有脏写问题，而要解决脏写问题，就需要比MVCC更加底层的机制——锁——来解决了。 MySQL中的任何数据需要更新的时候，都会创建一把锁，里面包含了自身的trx_id和等待状态，然后将锁和当前数据关..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/database/mysql/mysql-54.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-05-08T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁\\",\\"image\\":[\\"https://tianmazuo.com/technology/database/mysql/mysql-54.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-55.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-56.png\\"],\\"datePublished\\":\\"2023-05-08T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"避免脏写","slug":"避免脏写","link":"#避免脏写","children":[]},{"level":2,"title":"独占锁","slug":"独占锁","link":"#独占锁","children":[]},{"level":2,"title":"共享锁","slug":"共享锁","link":"#共享锁","children":[]},{"level":2,"title":"锁的互斥规律","slug":"锁的互斥规律","link":"#锁的互斥规律","children":[]},{"level":2,"title":"行级锁的触发","slug":"行级锁的触发","link":"#行级锁的触发","children":[]},{"level":2,"title":"表锁","slug":"表锁","link":"#表锁","children":[]}],"git":{},"readingTime":{"minutes":4.25,"words":1274},"filePathRelative":"technology/database/mysql/lock.md","localizedDate":"2023年5月8日","excerpt":"<h2>避免脏写</h2>\\n<p>脏读、不可重复读与幻读，都发生在更新数据时，因此读的不对，就会发生这些问题——不过这些都通过<code>MVCC</code>机制解决了。但是多个事务并发更新同一行数据时，会有脏写问题，而要解决脏写问题，就需要比<code>MVCC</code>更加底层的机制——锁——来解决了。</p>\\n<p><a href=\\"https://www.mysql.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL</a>中的任何数据需要更新的时候，都会创建一把锁，里面包含了自身的<code>trx_id</code>和等待状态，然后将锁和当前数据关联起来。</p>","autoDesc":true}');export{h as comp,g as data};
