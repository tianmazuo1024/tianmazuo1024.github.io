import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-B5m7CcSj.js";const t={},l=e(`<h2 id="根页" tabindex="-1"><a class="header-anchor" href="#根页"><span>根页</span></a></h2><p><code>InnoDB</code>存储引擎通过聚簇索引和二级索引实现对索引页、数据页和数据行的管理，搜索时根据不同的索引来查找主键或非主键字段值，通过页分裂实现对数据页的扩展。</p><p>但刚创建的一张新表，是没有这么复杂的结构的，甚至可能只有一个数据页。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-65.png" alt="单一数据页" tabindex="0" loading="lazy"><figcaption>单一数据页</figcaption></figure><p>这个初始数据页可以称为<code>原始页/根页</code>，其内部就有一个页目录，直接通过主键来查找会非常快。</p><p>当数据不断插入，根页无法存储更多数据时，就通过页分裂创建一个新数据页，同时根据主键值大小进行排序挪动，新数据页的最小主键值一定要大于原始页的最大主键值。</p><p>然而之前根页并不是直接变为另一个数据页，而是<code>升级</code>成了索引页，存放的是两个数据页的页号和数据行。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-66.png" alt="升级的索引页" tabindex="0" loading="lazy"><figcaption>升级的索引页</figcaption></figure><p>当数据不停插入时，也会不停地创建、分裂出越来越多的数据页。当索引越来越多，就会让索引页也实现页分裂，根页继续向上成为<code>B+树</code>中更高的层级，成为<code>根索引</code>，这就是聚簇索引的维护过程，二级索引也是同样的过程。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-67.png" alt="二级索引" tabindex="0" loading="lazy"><figcaption>二级索引</figcaption></figure><br><h2 id="索引的特性" tabindex="-1"><a class="header-anchor" href="#索引的特性"><span>索引的特性</span></a></h2><p>在不断插入数据的过程中，<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>会自动创建聚簇索引和用户指定的二级索引，这是一个不断分裂、排序、重组、挪动的过程。</p><p>二级索引是不会保存整行数据全部字段信息的，只有聚簇索引才会，这也是它为什么会被称为<code>聚簇</code>的原因——全部字段信息都聚簇到主键之下。</p><p>数据页/索引页的特性如下。</p><ul><li><p>页内数据都是按照大小有序排列并组成单向链表的。</p></li><li><p>页间数据也是按照大小有序排列并组成双向链表的。</p></li></ul><p>索引太多必然需要更多空间，而且在操作数据时必然要同时维护更多的<code>B+树</code>，需要更多的时间——虽然查询更快了，但增删改却更慢了。</p><br><h2 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引"><span>联合索引</span></a></h2><p>假设存在一张用户订单表，主键自增，会自动创建聚簇索引，还有其他几个字段用来保存用户名、商品、数量和金额等信息，可以针对用户名、商品、数量建立联合索引。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-68.png" alt="二级索引" tabindex="0" loading="lazy"><figcaption>二级索引</figcaption></figure><p>有一个索引页，两个数据页，每个数据页中都有三条数据，每条数据都包含了三个字段的值和主键值。</p><ul><li><p>数据页内部先按照字段名排序，如果用户名相同，则按照商品名排序，而且数据行之间组成了单向链表。</p></li><li><p>数据页之间也是有序的，前一个数据页的最大值一定小于后一个数据页的最小值。</p></li><li><p>索引页的每条数据也是有序的，并且也组成了单向链表，分别指向每个数据页的第一条数据。</p></li></ul><p>如果有多个索引页，那么它们之间也会组成双向链表。</p><p>现在想要搜索高伟光买狗粮的数据，可能会写出这样的SQL。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> order </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> username</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;高伟光&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> product</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;狗粮&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当<code>SQL</code>查询条件中的条件都是等号<code>=</code>，并且字段的名称和顺序也和联合索引一模一样的时候，就是<code>全值匹配规则</code>。</p><p>对于联合索引而言，就是依照各个字段来逐步进行二分查找，直到定位到某条或某几条数据。</p><br><h2 id="索引使用规则" tabindex="-1"><a class="header-anchor" href="#索引使用规则"><span>索引使用规则</span></a></h2><h3 id="全值匹配规则" tabindex="-1"><a class="header-anchor" href="#全值匹配规则"><span>全值匹配规则</span></a></h3><p>查询时<code>WHERE</code>子句中出现的字段名称和顺序，如果能与联合索引定义的字段名称和顺序完全一致，而且都是通过等号<code>=</code>来定位数据，那么就会<code>100%</code>利用到<code>全值匹配规则</code>，即使不一致，<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>也会自动优化为按联合索引的顺序去查询。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-69.png" alt="全值匹配规则" tabindex="0" loading="lazy"><figcaption>全值匹配规则</figcaption></figure><h3 id="最左侧列匹配规则" tabindex="-1"><a class="header-anchor" href="#最左侧列匹配规则"><span>最左侧列匹配规则</span></a></h3><p>如果查询的字段只有部分联合索引最左侧部分的字段，并且没有跳字段，那么也是符合索引使用规则的，这就是<code>最左侧列匹配规则</code>。</p><ul><li><p><code>WHERE username=&quot;高伟光&quot; AND product=&quot;狗粮&quot;</code>符合<code>最左侧列匹配规则</code>。</p></li><li><p><code>WHERE product=&quot;狗粮&quot;</code>不符合<code>最左侧列匹配规则</code>。</p></li></ul><p>因为二级索引的<code>B+树</code>必须先按<code>username</code>查询，再按<code>product</code>查询，不能跳过第一个<code>username</code>字段而直接用第二字段来查，这样是没法高效利用索引的。</p><p><code>WHERE username=&quot;高伟光&quot; AND number=11</code>也不符合<code>最左侧列匹配规则</code>。</p><p>因为只有<code>username</code>可以利用索引查询，剩下的<code>number</code>是没法在索引里找的，道理同上。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-70.png" alt="最左侧列匹配规则" tabindex="0" loading="lazy"><figcaption>最左侧列匹配规则</figcaption></figure><h3 id="最左前缀匹配规则" tabindex="-1"><a class="header-anchor" href="#最左前缀匹配规则"><span>最左前缀匹配规则</span></a></h3><p>如果使用<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>的<code>LIKE</code>语句做模糊查询，也是可以利用到索引规则的，只需要<code>LIKE &quot;n%&quot;</code>中查询的内容在<code>%前面</code>就行。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> username </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;高伟光%&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这条<code>SQL</code>查询语句是可以利用到索引规则的，因为<code>%左侧前缀</code>就是索引中排序的字段，而且是<code>最左侧列字段</code>，可以完全匹配。</p><p>但<code>&quot;%高伟光&quot;</code>就不行了，因为在<code>最左侧前缀</code>的<code>%</code>并不是索引中的内容，当然也就利用不了索引了。</p><p>实际开发中，<a href="https://en.wikipedia.org/wiki/Database_administrator" target="_blank" rel="noopener noreferrer">DBA</a>、运维及开发工程师可以通过<code>EXPLAIN</code>来检查<code>SQL</code>语句的执行状况，尤其是慢查询的定位，接下来会通过它完成一些索引规则方面的实验。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 删除表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DROP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> IF</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> EXISTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 复制表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AS</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 指定主键</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">MODIFY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 创建索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> INDEX</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2_name </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2 (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 无索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;索引%&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 有索引：利用最左前缀匹配规则</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;索引%&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 有索引：非最左前缀匹配规则</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;%索引&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三条语句的执行结果如下。</p><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-71.png" alt="最左侧列匹配规则实验结果" tabindex="0" loading="lazy"><figcaption>最左侧列匹配规则实验结果</figcaption></figure><ul><li><p><code>type</code>：显示查询在表中是怎么找到所需数据行的，跟性能强相关，从最好到最差依次是：<code>system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; all（全表扫描）</code>。</p></li><li><p><code>rows</code>：根据表统计信息及索引情况，估算找到记录所需读取的行数（越少越好）。</p></li><li><p><code>filtered</code>：返回结果的行占需要读取的行（<code>rows</code>列的值）的百分比。</p></li></ul><h3 id="范围匹配规则" tabindex="-1"><a class="header-anchor" href="#范围匹配规则"><span>范围匹配规则</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> username </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2蛋&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> username </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;3娃&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当需要使用上面这样的范围查询语句来查找某些数据时，也是会用到索引的。</p><p>因为索引最下层的数据页都是有序的双向链表，所以完全可以先找到大于<code>&quot;2蛋&quot;</code>的那些数据页和小于<code>&quot;3娃&quot;</code>的那些数据页，两个数据页中间的那些数据页，就是查找范围内的数据了。</p><p>但是如果写成这样就不行了。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面这样的范围查询是无法利用到索引的，因为范围索引只对联合索引最左侧的列有效。</p><p>刚才的实验同样可以用范围查找规则再做一次，这里就不重复了。</p><h3 id="等值匹配-范围匹配规则" tabindex="-1"><a class="header-anchor" href="#等值匹配-范围匹配规则"><span>等值匹配 + 范围匹配规则</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> username </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2蛋&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> product </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;361度&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>首先<code>username</code>会通过索引精准定位到一批用户名相同的数据；</p></li><li><p>然后<code>product</code>也可以基于索引顺序来找；</p></li><li><p>但是<code>number</code>是无法再利用索引的，虽然它也在联合主键里面——因为一旦有字段利用了范围匹配，那么后续的字段就都无法再利用索引了。</p></li></ul><p>综上所述，最有效利用联合索引的方法如下。</p><ul><li><p>用<code>索引最左侧的多个字段</code>来进行 <strong><mark>全值/等值匹配 + 范围匹配</mark></strong>。</p></li><li><p>用<code>最左侧部分字段</code>实现 <strong><mark>最左前缀模糊匹配</mark></strong>。</p></li></ul><h3 id="order-by中的索引" tabindex="-1"><a class="header-anchor" href="#order-by中的索引"><span>ORDER BY中的索引</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> F1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ASC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, F2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">DESC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, F3 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ASC</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 200</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这类按照多个字段排序后返回前<code>N</code>条数据的查询语句，经常出现于分页的<code>SQL</code>语句中。</p><p>对查出来的数据基于磁盘文件或临时中间表来排序，在<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>的术语中叫<code>filrsort</code>或<code>temporary</code>，如果在<code>EXPLAIN</code>的<code>extra</code>的字段中出现这两种统计结果，那基本意味着<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>随时可能卡死。</p><p>为了能更好说明问题，可以接着之前的数据表来做实验，去掉<code>WHERE</code>子句，只用<code>ORDER BY</code>来观察结果。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 无LIMIT限定的ORDER BY</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-72.png" alt="无LIMIT限定的ORDER BY" tabindex="0" loading="lazy"><figcaption>无LIMIT限定的ORDER BY</figcaption></figure><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 有LIMIT限定的ORDER BY</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ORDER BY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  LIMIT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-73.png" alt="有LIMIT限定的ORDER BY" tabindex="0" loading="lazy"><figcaption>有LIMIT限定的ORDER BY</figcaption></figure><p>可以看到，在没有<code>LIMIT</code>限定的情况下，即使是有索引的表，在<code>ORDER BY</code>中同样出现了可怕的<code>filesort</code>。</p><p>所以，不要觉得有了索引做任何查询都万事大吉了。</p><ul><li><p>应该尽量按照联合索引的字段顺序查询数据。</p></li><li><p>对于查询返回的数据尽量加上<code>LIMIT</code>限定，哪怕做全值匹配的精准查询，也建议加上<code>LIMIT 1</code>，保持好习惯。</p></li><li><p>另外，由于联合索引都是按照从小到大排序的。</p><ul><li><p><code>ORDER BY</code>要么就默认<code>ORDER BY F1, F2, F3 LIMIT 10</code>。</p></li><li><p><code>ORDER BY</code>要么就都加<code>ORDER BY F1 DESC, F2 DESC, F3 DESC LIMIT 10</code>。</p></li><li><p>如果有的字段按升序排列，有的字段按降序排列，或者有的字段使用了复杂的函数，都是无法利用索引的。</p></li></ul></li></ul><h3 id="group-by中的索引" tabindex="-1"><a class="header-anchor" href="#group-by中的索引"><span>GROUP BY中的索引</span></a></h3><p>有时候在查询时，会需要用到<code>GROUP BY</code>进行数据分组，然后做聚合统计。</p><p>同样，为了验证查询效率，可以接着做实验。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 无索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> COUNT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GROUP BY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">-- 有索引</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> EXPLAIN </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> COUNT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test_2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GROUP BY</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://tianmazuo.com/technology/database/mysql/mysql-74.png" alt="GROUP BY中的索引" tabindex="0" loading="lazy"><figcaption>GROUP BY中的索引</figcaption></figure><p>可以看到，在没有索引的表，<code>filesort</code>和<code>temporary</code>居然同时出现。</p><p>所以，<code>GROUP BY</code>之后的字段，也需要按照联合索引中的<code>最左侧列匹配规则</code>来执行，这样就可以完美地运用索引来直接提取分组数据（至于加或不加<code>LIMIT</code>的区别，这里就略过）。</p><p>本质上，<code>GROUP BY</code>和<code>SELECT</code>、<code>ORDER BY</code>对索引的使用规则是相通的。</p><ul><li><p><code>最左侧列匹配规则</code>。</p></li><li><p>字段顺序与索引一致。</p></li></ul><p>因此在创建索引时，需要充分考虑到后续的<code>SQL</code>语句会怎么写，大概需要如何过滤等等，而这些，在业务初期是做不到的——也就是说，好的索引一定是长期使用<code>SQL</code>查询数据的经验积累，而不是拍脑袋想象出来的结果。</p><p>把查询的索引规则搞清楚了，接下来就可以对于更新而言就好办了——索引不能太多，否则维护成本飙升，适得其反。</p><h3 id="概念澄清" tabindex="-1"><a class="header-anchor" href="#概念澄清"><span>概念澄清</span></a></h3><ul><li><p>除了聚簇索引之外，每个二级索引都对应着一颗独立的<code>B+</code>树，其中除了包含建立索引的字段值外，还包括主键值。</p></li><li><p>即使依据索引找到了所需数据，也还需要再根据主键值在聚簇索引中找到完整的数据行其他字段值，这就需要进行一个称之为<code>回表</code>的操作——除非需要查找的值都在索引里才不需要。</p></li><li><p><code>覆盖索引</code>并不是另一种索引分类，而是一种基于索引查询的方式——比如<code>SELECT F1, F2, F3 FROM TABLE ORDER BY F1, F2, F3</code>这样的<code>SQL</code>语句，仅仅只需要联合索引里几个字段值，而不需要再做<code>回表</code>操作，这种<code>完全覆盖</code>（查询字段小于等于索引字段）的查询就是<code>覆盖查询</code>。</p></li><li><p>所以<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>在执行时，会判断是否可能会导致大量的<code>回表操作</code>，如果是的话，可能就直接执行全表扫描而不走联合索引了，这也是为什么查询禁止写成<code>SELECT *</code>的原因。</p></li><li><p>即使是真要回表到聚簇索引，也最好加上<code>WHERE</code>、<code>LIMIT</code>之类的语句限制一下回表到聚簇索引的次数，这样性能也会好一些。</p></li></ul>`,88),n=[l];function h(p,k){return a(),s("div",null,n)}const o=i(t,[["render",h],["__file","index02.html.vue"]]),c=JSON.parse('{"path":"/technology/database/mysql/index02.html","title":"索引（下）","lang":"zh-CN","frontmatter":{"title":"索引（下）","icon":"table","category":["数据库","MySQL"],"tag":["数据库","MySQL"],"date":"2023-05-11T00:00:00.000Z","isOriginal":true,"star":true,"description":"根页 InnoDB存储引擎通过聚簇索引和二级索引实现对索引页、数据页和数据行的管理，搜索时根据不同的索引来查找主键或非主键字段值，通过页分裂实现对数据页的扩展。 但刚创建的一张新表，是没有这么复杂的结构的，甚至可能只有一个数据页。 单一数据页单一数据页 这个初始数据页可以称为原始页/根页，其内部就有一个页目录，直接通过主键来查找会非常快。 当数据不断插...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/database/mysql/index02.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"索引（下）"}],["meta",{"property":"og:description","content":"根页 InnoDB存储引擎通过聚簇索引和二级索引实现对索引页、数据页和数据行的管理，搜索时根据不同的索引来查找主键或非主键字段值，通过页分裂实现对数据页的扩展。 但刚创建的一张新表，是没有这么复杂的结构的，甚至可能只有一个数据页。 单一数据页单一数据页 这个初始数据页可以称为原始页/根页，其内部就有一个页目录，直接通过主键来查找会非常快。 当数据不断插..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/database/mysql/mysql-65.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-05-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引（下）\\",\\"image\\":[\\"https://tianmazuo.com/technology/database/mysql/mysql-65.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-66.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-67.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-68.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-69.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-70.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-71.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-72.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-73.png\\",\\"https://tianmazuo.com/technology/database/mysql/mysql-74.png\\"],\\"datePublished\\":\\"2023-05-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"根页","slug":"根页","link":"#根页","children":[]},{"level":2,"title":"索引的特性","slug":"索引的特性","link":"#索引的特性","children":[]},{"level":2,"title":"联合索引","slug":"联合索引","link":"#联合索引","children":[]},{"level":2,"title":"索引使用规则","slug":"索引使用规则","link":"#索引使用规则","children":[{"level":3,"title":"全值匹配规则","slug":"全值匹配规则","link":"#全值匹配规则","children":[]},{"level":3,"title":"最左侧列匹配规则","slug":"最左侧列匹配规则","link":"#最左侧列匹配规则","children":[]},{"level":3,"title":"最左前缀匹配规则","slug":"最左前缀匹配规则","link":"#最左前缀匹配规则","children":[]},{"level":3,"title":"范围匹配规则","slug":"范围匹配规则","link":"#范围匹配规则","children":[]},{"level":3,"title":"等值匹配 + 范围匹配规则","slug":"等值匹配-范围匹配规则","link":"#等值匹配-范围匹配规则","children":[]},{"level":3,"title":"ORDER BY中的索引","slug":"order-by中的索引","link":"#order-by中的索引","children":[]},{"level":3,"title":"GROUP BY中的索引","slug":"group-by中的索引","link":"#group-by中的索引","children":[]},{"level":3,"title":"概念澄清","slug":"概念澄清","link":"#概念澄清","children":[]}]}],"git":{},"readingTime":{"minutes":10.82,"words":3247},"filePathRelative":"technology/database/mysql/index02.md","localizedDate":"2023年5月11日","excerpt":"<h2>根页</h2>\\n<p><code>InnoDB</code>存储引擎通过聚簇索引和二级索引实现对索引页、数据页和数据行的管理，搜索时根据不同的索引来查找主键或非主键字段值，通过页分裂实现对数据页的扩展。</p>\\n<p>但刚创建的一张新表，是没有这么复杂的结构的，甚至可能只有一个数据页。</p>\\n<figure><img src=\\"https://tianmazuo.com/technology/database/mysql/mysql-65.png\\" alt=\\"单一数据页\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>单一数据页</figcaption></figure>","autoDesc":true}');export{o as comp,c as data};
