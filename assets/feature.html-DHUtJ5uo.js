import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as r,d as o}from"./app-B5m7CcSj.js";const t={},n=o('<p>在知道了<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>的共性之后，再来看看<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>自身所独有的那些特性。</p><h2 id="跨平台" tabindex="-1"><a class="header-anchor" href="#跨平台"><span>跨平台</span></a></h2><p>这一点相信程序员们都知道。</p><h2 id="编解-同框" tabindex="-1"><a class="header-anchor" href="#编解-同框"><span>“编解”同框</span></a></h2><p>所谓<code>编解</code>同框，说的是<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>既是一门<code>编译型编程语言</code>，也是一门<code>解释型编程语言</code>：</p><ul><li><p>说它是编译型语言，是因为它需要将源代码<code>编译</code>为<code>.class文件</code>，而不能直接执行。</p></li><li><p>说它是解释型语言，是因为<code>.class</code>文件也需要被<a href="https://zh.wikipedia.org/wiki/Java%E8%99%9A%E6%8B%9F%E6%9C%BA" target="_blank" rel="noopener noreferrer">JVM</a><code>解释</code>为二进制机器码才能最终执行。</p></li></ul><p>至于<code>编译型</code>和<code>解释型</code>编程语言，没有好坏优劣之分，只有各自的适用场景之别。</p><h2 id="动态内存分配" tabindex="-1"><a class="header-anchor" href="#动态内存分配"><span>动态内存分配</span></a></h2><p><a href="https://zh.wikipedia.org/wiki/C++" target="_blank" rel="noopener noreferrer">C++</a>认为效率第一，所以它将对象的生命周期交给程序员来管理，由程序员来决定将代码中的变量存放在哪里。</p><p>但<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>不这么认为，它认为对象通常是比较复杂的，完全人为管理一定会捅娄子。所以它实现了对象的会自动创建与回收（<a href="https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html" target="_blank" rel="noopener noreferrer">JVM GC</a>），完全不需要人为干预，唯一需要的就是知晓<a href="https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html" target="_blank" rel="noopener noreferrer">JVM GC</a>的尿性。</p><p>这一举措给程序员带来了极大的便利。</p><p>虽然<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>也会出现诸如<a href="https://en.wikipedia.org/wiki/Out_of_memory" target="_blank" rel="noopener noreferrer">OOM（Out of Memory，内存溢出）</a>之类的问题，但相对于<a href="https://zh.wikipedia.org/wiki/C++" target="_blank" rel="noopener noreferrer">C++</a>而言，已经简单和方便了太多。</p><h2 id="单继承结构" tabindex="-1"><a class="header-anchor" href="#单继承结构"><span>单继承结构</span></a></h2><p>所谓<code>单继承结构</code>，是指任何类或对象只有唯一一个父类，而<a href="https://zh.wikipedia.org/wiki/C++" target="_blank" rel="noopener noreferrer">C++</a>的<code>多继承结构</code>可以有多个父类。</p><p>单继承结构相对来说更简单，也更好理解，这也是<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>相较之于<a href="https://zh.wikipedia.org/wiki/C++" target="_blank" rel="noopener noreferrer">C++</a>的根本改进之一。</p><h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h2><p><a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>可以同时执行多个任务，但这种能力是和操作系统的支持分不开的。</p><p>目前所有主流操作系统都支持多线程的工作模式，只不过这里面还有一点小小的区别。</p><ul><li><p>对于单<code>CPU</code>的计算机而言，即使操作系统支持多线程，但在微观范畴，<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>的各个子线程依然是在<code>串行</code>地执行任务，只不过从宏观上看起来像是在同时执行罢了。</p></li><li><p>对于有多个<code>CPU</code>的计算机而言，只要操作系统底层能够实现分配不同的任务到不同的<code>CPU</code>上执行，那么不管是宏观还是微观，<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>的多线程都是真正地在<code>同时</code>执行着多个任务。</p></li></ul><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理"><span>异常处理</span></a></h2><p>在<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>诞生之前，多数编程语言对于错误处理的主要方式是：依赖程序员的约定俗成而不是语言本身的限制。也就是说，如果程序员没想起来，这些错误就很容易被忘记。</p><p>而<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>的异常处理机制是将程序错误直接通过编程语言甚至是操作系统来展现。<code>异常（Exception）</code>是一个从出错点<code>抛出（thrown）</code>后能被特定类型的异常处理程序<code>捕获(catch)</code>的一个对象。</p><p>它不会干扰程序的正常运行，仅当程序出错的时候才被执行。这让开发更简单：不用再反复检查错误了。</p><p>另外，异常是绝不会被<code>忘记</code>或忽略的，它终究会在某一时刻被处理。而且，异常处理机制也提供了一种可靠地从错误状况中恢复的方法：只要处理好抛出的异常就能够立即恢复程序的运行，无需退出。</p>',24),l=[n];function c(i,p){return r(),a("div",null,l)}const s=e(t,[["render",c],["__file","feature.html.vue"]]),w=JSON.parse('{"path":"/technology/programming/java/feature.html","title":"Java特性","lang":"zh-CN","frontmatter":{"title":"Java特性","icon":"mug-hot","category":["编程语言","Java"],"tag":["编程语言","Java"],"date":"2022-08-30T00:00:00.000Z","isOriginal":true,"star":true,"description":"在知道了OOP的共性之后，再来看看Java自身所独有的那些特性。 跨平台 这一点相信程序员们都知道。 “编解”同框 所谓编解同框，说的是Java既是一门编译型编程语言，也是一门解释型编程语言： 说它是编译型语言，是因为它需要将源代码编译为.class文件，而不能直接执行。 说它是解释型语言，是因为.class文件也需要被JVM解释为二进制机器码才能最终...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/programming/java/feature.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"Java特性"}],["meta",{"property":"og:description","content":"在知道了OOP的共性之后，再来看看Java自身所独有的那些特性。 跨平台 这一点相信程序员们都知道。 “编解”同框 所谓编解同框，说的是Java既是一门编译型编程语言，也是一门解释型编程语言： 说它是编译型语言，是因为它需要将源代码编译为.class文件，而不能直接执行。 说它是解释型语言，是因为.class文件也需要被JVM解释为二进制机器码才能最终..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"编程语言"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-08-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java特性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"跨平台","slug":"跨平台","link":"#跨平台","children":[]},{"level":2,"title":"“编解”同框","slug":"编解-同框","link":"#编解-同框","children":[]},{"level":2,"title":"动态内存分配","slug":"动态内存分配","link":"#动态内存分配","children":[]},{"level":2,"title":"单继承结构","slug":"单继承结构","link":"#单继承结构","children":[]},{"level":2,"title":"多线程","slug":"多线程","link":"#多线程","children":[]},{"level":2,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]}],"git":{},"readingTime":{"minutes":3.23,"words":970},"filePathRelative":"technology/programming/java/feature.md","localizedDate":"2022年8月30日","excerpt":"<p>在知道了<a href=\\"https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">OOP</a>的共性之后，再来看看<a href=\\"https://www.oracle.com/java/technologies/downloads/archive/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java</a>自身所独有的那些特性。</p>","autoDesc":true}');export{s as comp,w as data};
