import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as o}from"./app-B5m7CcSj.js";const r={},n=o(`<p>计算机源于数学理论和电子技术的结合，而编程则是我们与计算机之间对话的一种媒介或手段。正如语言可以描绘其他的创作形式，如诗歌、绘画、音乐、舞蹈等，编程语言就是一种可以创建思想和表达结构的工具。</p><h2 id="抽象" tabindex="-1"><a class="header-anchor" href="#抽象"><span>抽象</span></a></h2><p>抽象是对复杂事务的一种简单化概括。如果要向从没有吃过苹果的爱斯基摩人描述苹果是什么，只能说<code>一种水果，形状像一个拳头大小的雪球，能吃，有点甜也有点酸</code>——这就是一种对苹果的抽象和类比描述。同样，汇编语言是对底层机器码的抽象，而高级编程语言则是对汇编语言的抽象。如果没有汇编语言和高级语言，恐怕今天所有从事计算机编程的人都不得不学习如何用二进制来向计算机输入指令，并读懂输出的二进制结果了，那今时今日的鼠标、键盘以及我们所看见的一切图形化的东西都不存在了，这种计算机也失去了存在的意义。</p><p>虽然与汇编相比，类似<a href="https://zh.wikipedia.org/wiki/C%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">C</a>、<a href="https://zh.wikipedia.org/wiki/BASIC" target="_blank" rel="noopener noreferrer">BASIC</a>这类高级语言已经有了巨大的质的提升，但它们所谓的抽象，依然要求人们从计算机的结构，也就是寄存器指令、内存地址等方面来解决具体问题，而非从问题本身的角度出发来理解问题的内涵。</p><p>所以，那时候的工程师们，不得不在 <strong><mark>机器模型</mark></strong>（实际能解决问题的上下文空间）和 <strong><mark>问题模型</mark></strong>（需要面对的麻烦的上下文空间）之间建立起一种特定的关联。</p><p>这种努力既相当耗费精力，又不能通用，基本上都只能处理非常具体的问题。问题模型一旦发生变化，这个过程又得从头再来。这种方式开发出来的程序代码，不仅极为脆弱，而且维护代价高得离谱，因为没人愿意接手这样的<code>烂摊子</code>。</p><p>在这种背景下，计算机科学家们，尤其是软件专家们想尽一切办法，试图来结束这种<code>痛苦</code>——他们尝试各种做法，试图从一切不同的角度来<code>观察世界</code>。在这种努力尝试的过程中，诞生了很多种不同的编程方法，有基于归纳的编程模式（如<a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)" target="_blank" rel="noopener noreferrer">LISP</a>和<a href="https://zh.wikipedia.org/wiki/APL%E8%AA%9E%E8%A8%80" target="_blank" rel="noopener noreferrer">APL</a>），有基于约束的编程模式（如<a href="https://en.wikipedia.org/wiki/Prolog" target="_blank" rel="noopener noreferrer">PROLOG</a>），还有基于图形符号设计的编程模式（如<a href="https://en.wikipedia.org/wiki/Fortran" target="_blank" rel="noopener noreferrer">FORTRAN</a>、<a href="https://en.wikipedia.org/wiki/COBOL" target="_blank" rel="noopener noreferrer">COBOL</a>和<a href="https://zh.wikipedia.org/wiki/PL/I" target="_blank" rel="noopener noreferrer">PL\\I</a>），但它们都无法做到通用——只要<code>问题模型</code>稍稍超出其<code>机器模型</code>范畴，它们就无能为力了。</p><p>但这种尝试也并非一无所获，因为在此期间诞生了一种称为<a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>的编程语言。</p><p><a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>和以往所有的编程语言都不同，用<a href="https://en.wikipedia.org/wiki/Alan_Kay" target="_blank" rel="noopener noreferrer">Alan Curtis Kay（艾伦·凯）</a>的话来说，<a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>具有一些划时代的特性。</p><ul><li><p><strong>万物皆对象</strong>。这是从问题本身的特性抽象出的概念，而后通过程序代码来表现这种特性。</p></li><li><p><strong>对象之间能彼此传递消息</strong>。要调用另一个<code>对象</code>的<code>方法</code>，就需要告诉它具体的请求上下文。</p></li><li><p><strong>对象是嵌套的</strong>。一个对象还可以容纳其他的对象，例如<code>人</code>总是有<code>手</code>、<code>脚</code>、<code>身体</code>和<code>五官</code>的。</p></li><li><p><strong>每个对象都有与之相对应的类型</strong>。每个<code>对象</code>都是某个抽象类型的具体<code>实例</code>。例如，<code>李星云</code>是一个<code>人</code>，同时，也是一个<code>热血青年</code>。</p></li><li><p><strong>同一类对象能接收相同的消息</strong>。对于<code>志愿者</code>来说，他们有自己的组织，能够定期或不定期地<code>收到</code>只针对志愿者的<code>开展援助</code>消息。这也意味着Smalltalk可以让程序统一<code>指挥</code>某一类对象，让它们做出符合预期的行为。这称为<code>对象的可替换性</code>。</p></li></ul><figure><img src="https://tianmazuo.com/technology/programming/java/java-01.png" alt="Alan Curtis Kay" tabindex="0" loading="lazy"><figcaption>Alan Curtis Kay</figcaption></figure><p><a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>是世界上第二门面向对象的编程语言，也是世界上第一个<code>完全面向对象</code>的编程语言，它在程序设计的基础上跨出了一大步。由于<code>对象</code>这种概念具有极其普遍的代表性，而且不受限于特定类型的问题（甚至<code>问题</code>本身也是对象）。相对于<code>机器模型</code>来说，<code>问题模型</code>空间中的元素在<code>机器模型</code>中的映射被<a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>称为<code>对象</code>。</p><p>通过<code>对象</code>、<code>消息</code>、<code>对象嵌套</code>和<code>对象类型</code>，<a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>可以非常灵活地对程序代码进行调整，以便解决任何<code>特定</code>的问题。当阅读这些代码时，也差不多就是在理解<code>问题模型</code>中的问题本身，也就是业务逻辑。</p><p><a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>也因此被称之为<a href="https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">面向对象的语言（Object-Oriented Language，OOL）</a>，而使用它来实现开发的过程，也叫做<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">面向对象编程（Object-Oriented Programming，OOP）</a>。</p><p><a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">面向对象编程</a>允许人们从现实世界的角度来描述问题：它们有各自的状态，某一类对象能进行特定的操作，这完全符合人们对现实世界的理解。</p><p>自<a href="https://en.wikipedia.org/wiki/Smalltalk" target="_blank" rel="noopener noreferrer">Smalltalk</a>之后，又出现了更多、更强大的面向对象编程语言，而<a href="https://www.oracle.com/java/technologies/downloads/archive/" target="_blank" rel="noopener noreferrer">Java</a>就是它们当中的集大成者——一门<code>纯面向对象</code>且跨平台的编程语言。</p><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装"><span>封装</span></a></h2><p>一般来说，科学家侧重于研究，而工程师侧重于应用开发，二者之间相辅相成。</p><p>当科学家发布研究成果的时候，工程师会将这些成果转化为<code>产品</code>、<code>交付件</code>或<code>商品</code>。在很多大中型公司中也有类似的划分，一个是基础架构部门，专门设计、研究并搭建各种基础组件、设施和装备；另一个是应用开发部门，专门将这些基础组件、设施和装备应用于业务功能的开发之中，然后反馈问题，让基础架构部门改进。</p><p>有时候，有些工具的功能还未完全成型，不能完全公开其中的内容，这样既可以有效地避免该工具被错误地使用和篡改，减少出错的概率；又可以避免让应用开发工程师陷入到具体的细节中。</p><p>因为，对于 <strong><mark>封装</mark></strong> 来说，其目的和意义有三点。</p><ul><li><p>让应用程序员避免陷入细节之中——应用程序员并不关心问题是怎样解决的，他们只关心当他们向这些组件、设施和装备输入信息时，是否能得到它合理且正确的响应。例如，对于一个登录功能，用户并不需要知道当他收入手机号以后，前台页面、后台服务以及它们之间会发生什么事件，以及这些事件是如何确保用户能够登录成功的，用户所关心的只是登录后能使用系统提供的哪些功能而已。而封装正是对用户屏蔽了这些细节，排除了干扰，让他得以专心地处理自己的事务——这是应用层次的封装；</p></li><li><p>当一个对象向另一个对象发出消息，或者说<code>调用请求</code>时（例如对象B调用对象A中的方法），工程师也不想知道对象A的功能是怎么实现的，他只关心调用对象A的功能后，能否得到正确的结果——这是开发层次的封装（其实是应用层次封装的一种内涵延申而已）。</p></li><li><p>使组件、设施和装备的创建者（如科学家）在不影响工程师们使用的情况下能够继续完善和更新这些组件、设施和装备。这涉及到封装的另一层意思：访问控制。一般来说，<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>有三个显式的关键字来实现对类的访问控制：<code>public</code>、<code>private</code>和<code>protected</code>。这些访问修饰符分别表示公开、私有和受保护的访问方式，它决定了<code>谁</code>以及<code>如何</code>使用方法、变量或类——这是访问控制层次封装。</p></li></ul><p>封装并非<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>所独有的特性，一些面向过程的编程语言，例如BASIC也有封装的概念，例如将多个函数功能<code>封装</code>在一起，共同对外提供服务，这也叫封装。</p><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2><p>继承是<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>的关键特性之一。</p><p>当一位亿万富翁去世以后，其子嗣往往能得到大量的财富，<code>继承</code>了上一辈的遗产，避免了从头打拼的艰辛；在为人处世、行事风格，乃至包括样貌形态上，这位富翁的后代也<code>继承</code>了他的诸多特点，这些特点也许可以让他们赚到同样多的财富。</p><p><strong><mark>继承</mark></strong> 是<code>对象</code>的一种克隆手段，通过这种手段，<code>对象</code>能够将自己的属性（类似于拥有的<code>资源</code>或<code>标签</code>）和方法（类似于<code>性格</code>或<code>行为</code>）完整地复制到另一个对象中去（这和物种的繁衍非常像）。从开发层面来说，这么做的好处在于：工程师不必每次都从头开始创建另一个几乎一模一样的对象，而是只需要创建出一个<code>模板</code>或<code>公共父亲</code>（<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>称之为<code>父类</code>），再通过它来克隆所需的<code>子嗣</code>即可。而且每个克隆后的<code>子嗣</code>都可以通过修改它们的属性和行为，来实现<code>个性化</code>的微调。</p><figure><img src="https://tianmazuo.com/technology/programming/java/java-02.png" alt="动物的继承结构" tabindex="0" loading="lazy"><figcaption>动物的继承结构</figcaption></figure><p>例如，<code>动物</code>这个大类是<code>哺乳类</code>、<code>爬行类</code>和<code>鸟类</code>的共同父类。</p><ul><li><p>所有的动物都有<code>皮肤</code>，都有<code>血液</code>。</p></li><li><p>所有的动物都需要<code>吃东西</code>，都要<code>喝水</code>，它们都会<code>繁衍</code>、<code>排泄</code>、<code>自由行动</code>，而且遇到天敌时会<code>逃跑</code>。</p></li></ul><p>但是，作为<code>子嗣</code>（也就是<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>中的<code>子类</code>），它们也都有各自的<code>特色</code>。</p><ul><li><p>哺乳类体表有体毛，用于保持恒温，而且哺乳类大多会奔跑。</p></li><li><p>爬行类体表被鳞片覆盖，而且体温会随着环境的变化而变化，它们基本上是以爬行为主。</p></li><li><p>鸟类的体表被羽毛替代，只有这样才能利用空气动力进行飞行。</p></li></ul><p>因为父类和子类有一些共同的行为，例如<code>吃东西</code>，所以它们都可以接收某些共同的<code>消息</code>，如饥饿感。但对于爬行类来说，它就无法接收到上升气流发出的<code>可以飞行</code>信号，因为只有鸟类才能接收到它。</p><p>在继承当中存在两种关系。</p><ul><li><p><strong><mark>是一个（is-a）</mark></strong> 的关系：<code>麻雀</code> <strong><mark>是一个</mark></strong> <code>鸟</code>，<code>蜥蜴</code> <strong><mark>是一个</mark></strong> <code>爬虫</code>等。这表示说，麻雀和鸟之间，蜥蜴和爬虫之间是直接的<code>父子</code>关系，<strong><mark>不是领养、不是过继，就是最直接的血缘亲属</mark></strong>。</p></li><li><p><strong><mark>像是一个（is-like-a）</mark></strong> 的关系：<code>鲲鹏</code> <strong><mark>像是一个</mark></strong> <code>鸟</code>，<code>美杜莎</code> <strong><mark>像是一个</mark></strong> <code>爬虫</code>等。这是借助于想象力，在原<code>父类</code>的基础上，给<code>子类</code>添加了一些<code>父类</code>不存在的元素（属性和行为）。虽然此时<code>子类</code>仍然具备某些<code>父类</code>的元素，但这种替代并非符合自然生物的衍变规律，是一种不合理或不完美的替代，这种关系就被称为 <strong><mark>像是一个（is-like-a）</mark></strong>。</p></li></ul><p>这两种关系，在实际开发中都有大量的应用场景。</p><h2 id="多态" tabindex="-1"><a class="header-anchor" href="#多态"><span>多态</span></a></h2><p>在程序处理这种<code>类的层次结构</code>时，通常会将<code>对象</code>当作某一个类来看待，而不会把它当成具体的实例。这是什么意思呢？例如，对于动物来说，既然它们都要吃东西，都要喝水，都要行动，那么是不是可以编写出不局限于特定类型的代码？如果单独给麻雀写一套<code>吃东西</code>、<code>喝水</code>和<code>行动</code>的代码，然后再给鸟类写一套，然后给猴子再来一套，这样下去什么时候才算完？所以，对于程序来说，它操作的是针对类的<code>方法</code>或<code>行为</code>，而不管它们是麻雀，鸟类还是猴子。</p><p>这样一来，即使新创建或清除掉某个<code>子类</code>，也不会对程序有任何影响——这正是<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>的强大扩展能力之一。</p><p>但这里面有个问题，即便是<code>吃东西</code>这个行为，对于哺乳类和鸟类来说是有区别的：哺乳类大多用<code>咀嚼</code>，而鸟类几乎都是<code>生吞</code>。如果用程序来实现这个行为，那它怎么知道是哪一种动物在吃东西？又是哪一种动物在<code>行动</code>呢（爬行类和鸟类的行动方式也是不同的）？</p><p>这就是面向对象编程的另一个关键特性：<strong><mark>程序运行时的动态绑定</mark></strong>！</p><p>以前的高级语言，例如<a href="https://zh.wikipedia.org/wiki/BASIC" target="_blank" rel="noopener noreferrer">BASIC</a>、<a href="https://en.wikipedia.org/wiki/Pascal_(programming_language)" target="_blank" rel="noopener noreferrer">PASCAL</a>这种结构化的设计语言，他们虽然比汇编语言更抽象，但也就是仅仅做了一层指令的封装，将人可以理解的东西翻译成机器可以理解的东西。这些语言的编译器只能理解事先赋予它们的东西，也就是在程序运行之前，一些变量、方法的地址空间就已经被分配好了，是无法在运行时改变的。</p><p>但面向对象的编程语言不同，它存在着独一无二的<code>类的层次结构</code>，所以即使是在程序运行期间，只要不立即访问某个对象的属性，或调用某个对象的方法，那么可以说该对象是 <strong><mark>不存在的</mark></strong>——直到运行时才能真正确定它所在的内存地址。这就给了<code>相同父类</code>的<code>不同子类</code>实现不同方法的绝佳机会：当创建一个哺乳类对象时（在<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>中也称为<code>实例化</code>），只要它不<code>吃东西</code>，就可以认为它像它的父类<code>动物</code>那样去<code>吃东西</code>。而一旦它真正要进食的时候，程序才会给<code>吃东西</code>这个行为分配内存地址，同时发现它是<code>哺乳类</code>，进而改变其<code>吃东西</code>的方式为<code>咀嚼</code>！</p><p>这种 <strong><mark>程序运行时动态绑定</mark></strong>（地址）的特性，被<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>称之为 <strong><mark>多态</mark></strong>。</p><h2 id="重载与重写" tabindex="-1"><a class="header-anchor" href="#重载与重写"><span>重载与重写</span></a></h2><p>提到多态，一般情况下也要提一下<code>重写</code>，然后再顺带提一下它和<code>重载</code>的区别。</p><p>所谓<code>重写</code>，就是当<code>子类</code>继承了<code>父类</code>的行为以后，并不想或不能够原封不动地去实现这些行为，而是需要根据自己的情况来做出相应改变。就比如之前说过的<code>吃东西</code>，对于哺乳类和鸟类来说就是完全不同的行为。</p><p>而<code>重载</code>虽有一字之差，但指的是另一个完全不同的意思。当某个类或对象有两个相同的行为却完全不同的参数时，这些具有相同名称的行为或方法就称为<code>重载方法</code>。例如，在家<code>吃东西</code>和在飞机上<code>吃东西</code>就是不同的行为（当然这个比喻未必恰当，但现实世界中很难举出两个名称一样但<code>参数</code>不一样的行为）。</p><h2 id="复用" tabindex="-1"><a class="header-anchor" href="#复用"><span>复用</span></a></h2><p>无论什么时候，都不必也不应该重复造轮子。实现登录的代码，即使换一个系统，其原理和过程也都是差不多的，把约束条件稍稍修改一下，就应该能够立即运行起来。</p><p><code>复用</code>也并不是<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>所独有的优点，即使<a href="https://zh.wikipedia.org/wiki/BASIC" target="_blank" rel="noopener noreferrer">BASIC</a>、<a href="https://zh.wikipedia.org/wiki/C%E8%AF%AD%E8%A8%80" target="_blank" rel="noopener noreferrer">C</a>或者<a href="https://en.wikipedia.org/wiki/Pascal_(programming_language)" target="_blank" rel="noopener noreferrer">PASCAL</a>也能做到复用。</p><p>有两种形式的<code>复用关系</code>。</p><ul><li><p><code>组合（Composition）</code>：这是一种<code>整体</code>和<code>部分</code>的关系，而且这种关系具有统一性，也就是说，如果整体不存在了，那么部分也会消失；而且大多数时候反过来也成立。例如，<code>人</code>和人身上的<code>心脏</code>的关系。可以说：<code>人</code><strong><mark>包含一个（contains-a）</mark></strong><code>心脏</code>。</p></li><li><p><code>聚合（Aggregation）</code>：这是一种关系较弱的组合。它也表示整体和部分的关系，但它当中的<code>部分</code>是可以脱离于<code>整体</code>而独立存在的。例如，某个互联网大厂 <strong><mark>有一个（has-a）</mark></strong> 名叫李星云的员工。</p></li></ul><p>在<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>中，经常会重点强调<code>继承</code>特性，这就导致很多新手程序员认为<code>继承应当随处可见</code>。但其实用这种思路开发出来的程序通常都比较复杂。</p><p>相反，在创建新类型时建议首先考虑<code>组合</code>或<code>聚合</code>关系，因为它们更简单灵活，更易扩展与维护，且设计更加清晰。</p><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h2><p>古希腊哲学家<a href="https://en.wikipedia.org/wiki/Aristotle" target="_blank" rel="noopener noreferrer">亚里士多德（Aristotle）</a>曾提出过 <strong><mark>类</mark></strong> 这样的概念，他认为所有的对象都是<code>唯一的</code>（例如，你今天吃的那条鱼是世界上唯一的一条，以后也不会再有和它完全相同的一条鱼存在了），但同时这些唯一的对象也都是具有相同的特性和行为的类的一部分。</p><p><a href="https://en.wikipedia.org/wiki/Aristotle" target="_blank" rel="noopener noreferrer">亚里士多德</a>的这种<code>对象</code>思想被世界上第一个面向对象编程语言<a href="https://zh.wikipedia.org/wiki/Simula" target="_blank" rel="noopener noreferrer">Simula-67</a>所采用，它在程序中使用关键字<code>class</code>来引入新的类型，又通过关键字<code>type</code>来定义<code>接口</code>，而<code>class</code>只是实现接口的一种特殊方式。</p><p>创建好类或类型以后，可以生成许多实例化的对象，但如果需要这些对象完成所需的功能，就需要通过这些对象的行为才能完成了。</p><p>所谓<code>接口</code>，指的是一种行为的抽象。例如，<code>吃东西</code>是一种行为的抽象，不管是哺乳动物、爬行类还是鸟类，都有这个行为。如果工程师将<code>进食</code>功能定义为<code>吃东西</code>，那么对于<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>来说，就可以通过多态来实现所有动物<code>吃东西</code>的这个功能。反之，如果将<code>进食</code>功能仅仅定义为<code>咀嚼</code>，那结果就只有哺乳动物能够活下来，而大部分爬行类和所有鸟类将全部饿死。</p><p>因此，类或对象是对现实世界实际事物（<a href="https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1" target="_blank" rel="noopener noreferrer">OOP</a>将这种<code>实际事物</code>统称为 <strong><mark>实体</mark></strong>）的抽象，而接口则是对实体行为的抽象。</p><p>如今所说的面向接口编程，其意义之一就是上面所说的对行为的抽象。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 行为接口，有一个行为的抽象方法：吃东西</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Behavior</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 鸟类实现了行为接口，并重写了“吃东西”这个方法</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Bird</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Behavior</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">		System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;生吞&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	    // TODO SOMETHING</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 将对象实例化为行为的抽象</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Behavior</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> bird </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Bird</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">bird</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码展示了实际开发中的所谓<code>面向接口编程</code>是怎么回事。</p>`,64),s=[n];function t(l,d){return a(),i("div",null,s)}const h=e(r,[["render",t],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/technology/programming/java/","title":"对象和面向对象","lang":"zh-CN","frontmatter":{"title":"对象和面向对象","icon":"mug-hot","category":["编程语言","Java"],"tag":["编程语言","Java"],"date":"2022-08-19T00:00:00.000Z","isOriginal":true,"star":true,"description":"计算机源于数学理论和电子技术的结合，而编程则是我们与计算机之间对话的一种媒介或手段。正如语言可以描绘其他的创作形式，如诗歌、绘画、音乐、舞蹈等，编程语言就是一种可以创建思想和表达结构的工具。 抽象 抽象是对复杂事务的一种简单化概括。如果要向从没有吃过苹果的爱斯基摩人描述苹果是什么，只能说一种水果，形状像一个拳头大小的雪球，能吃，有点甜也有点酸——这就是...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/programming/java/"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"对象和面向对象"}],["meta",{"property":"og:description","content":"计算机源于数学理论和电子技术的结合，而编程则是我们与计算机之间对话的一种媒介或手段。正如语言可以描绘其他的创作形式，如诗歌、绘画、音乐、舞蹈等，编程语言就是一种可以创建思想和表达结构的工具。 抽象 抽象是对复杂事务的一种简单化概括。如果要向从没有吃过苹果的爱斯基摩人描述苹果是什么，只能说一种水果，形状像一个拳头大小的雪球，能吃，有点甜也有点酸——这就是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/programming/java/java-01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"编程语言"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-08-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象和面向对象\\",\\"image\\":[\\"https://tianmazuo.com/technology/programming/java/java-01.png\\",\\"https://tianmazuo.com/technology/programming/java/java-02.png\\"],\\"datePublished\\":\\"2022-08-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[{"level":2,"title":"抽象","slug":"抽象","link":"#抽象","children":[]},{"level":2,"title":"封装","slug":"封装","link":"#封装","children":[]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":2,"title":"多态","slug":"多态","link":"#多态","children":[]},{"level":2,"title":"重载与重写","slug":"重载与重写","link":"#重载与重写","children":[]},{"level":2,"title":"复用","slug":"复用","link":"#复用","children":[]},{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[]}],"git":{},"readingTime":{"minutes":16.98,"words":5094},"filePathRelative":"technology/programming/java/README.md","localizedDate":"2022年8月19日","excerpt":"<p>计算机源于数学理论和电子技术的结合，而编程则是我们与计算机之间对话的一种媒介或手段。正如语言可以描绘其他的创作形式，如诗歌、绘画、音乐、舞蹈等，编程语言就是一种可以创建思想和表达结构的工具。</p>\\n<h2>抽象</h2>\\n<p>抽象是对复杂事务的一种简单化概括。如果要向从没有吃过苹果的爱斯基摩人描述苹果是什么，只能说<code>一种水果，形状像一个拳头大小的雪球，能吃，有点甜也有点酸</code>——这就是一种对苹果的抽象和类比描述。同样，汇编语言是对底层机器码的抽象，而高级编程语言则是对汇编语言的抽象。如果没有汇编语言和高级语言，恐怕今天所有从事计算机编程的人都不得不学习如何用二进制来向计算机输入指令，并读懂输出的二进制结果了，那今时今日的鼠标、键盘以及我们所看见的一切图形化的东西都不存在了，这种计算机也失去了存在的意义。</p>","autoDesc":true}');export{h as comp,k as data};
