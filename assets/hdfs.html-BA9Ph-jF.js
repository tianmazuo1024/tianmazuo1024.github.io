import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as a,d as t}from"./app-B5m7CcSj.js";const r={},d=t('<p><a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop</a>中虽有五大组件，但整体上分为两派，分别用于<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>和<a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html" target="_blank" rel="noopener noreferrer">YARN</a>的管理。</p><p>官方给出的<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>架构图。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hadoop/hadoop-02.png" alt="官方给出的HDFS架构图" tabindex="0" loading="lazy"><figcaption>官方给出的HDFS架构图</figcaption></figure><p>其中<code>NameNode</code>、<code>SecondaryNameNode</code>和<code>DataNode</code>的作品分别如下。</p><ul><li><p><code>NameNode</code>：<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>的核心管理节点，存放各种元数据，负责响应和处理客户端的请求。</p></li><li><p><code>SecondaryNameNode</code>：相当于<a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL</a>的从节点，它不记录任何实时的数据变化，但会定期地保存<code>NameNode</code>中元数据的快照，也作为备用<code>NameNode</code>。</p></li><li><p><code>DataNode</code>：<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>的工作节点，真正保存数据的地方，接受客户端和<code>NameNode</code>的调度，读取、存储、复制并检索数据块（BLOCK）。</p></li></ul><p><a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>的整体实现思路也可以用一张图来说明。</p><figure><img src="https://tianmazuo.com/technology/bigdata/hadoop/hadoop-03.png" alt="HDFS整体实现思路" tabindex="0" loading="lazy"><figcaption>HDFS整体实现思路</figcaption></figure><ul><li><p><a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>通过分布式集群来存储文件。</p><ul><li><p>提供了一套虚拟的目录结构来保存实际的文件。</p></li><li><p>为客户端提供了一种便捷的访问方式。</p></li></ul></li><li><p>客户端上传文件时会首先记录<code>元数据</code>（也就是数据的操作日志）到内存的<code>editslog</code>，然后再为客户端分配可供操作的<code>DataNode</code>。</p></li><li><p>当<code>editslog</code>满，<code>NameNode</code>会通知<code>SecondaryNameNode</code>将内容合并到<code>fsimage</code>磁盘文件。</p></li><li><p>文件被保存到<a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>集群的时候被切分成一个个的<code>BLOCK</code>。</p><ul><li><p><code>BLOCK</code>按固定大小切分（<a href="https://hadoop.apache.org" target="_blank" rel="noopener noreferrer">Hadoop2</a>的每一个<code>BLOCK</code>的默认大小都是<code>128MB</code>）。</p></li><li><p>如果文件小于<code>128MB</code>则以<code>BLOCK</code>实际大小为准。</p></li></ul></li><li><p>每一个<code>BLOCK</code>在集群中都会被存储多份副本，既能提高数据可靠性，也能提高访问吞吐量。</p></li><li><p><a href="https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html" target="_blank" rel="noopener noreferrer">HDFS</a>保存的文件与<code>BLOCK</code>之间的映射关系都由<code>NameNode</code>管理。</p></li></ul>',8),p=[d];function c(n,h){return a(),o("div",null,p)}const s=e(r,[["render",c],["__file","hdfs.html.vue"]]),g=JSON.parse('{"path":"/technology/bigdata/hadoop/hdfs.html","title":"HDFS三大Node","lang":"zh-CN","frontmatter":{"title":"HDFS三大Node","icon":"file-zipper","category":["大数据","Hadoop"],"tag":["大数据","Hadoop","HDFS","NameNode","SecondaryNameNode","DataNode"],"date":"2023-03-20T00:00:00.000Z","isOriginal":true,"star":true,"description":"Hadoop中虽有五大组件，但整体上分为两派，分别用于HDFS和YARN的管理。 官方给出的HDFS架构图。 官方给出的HDFS架构图官方给出的HDFS架构图 其中NameNode、SecondaryNameNode和DataNode的作品分别如下。 NameNode：HDFS的核心管理节点，存放各种元数据，负责响应和处理客户端的请求。 Seconda...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/technology/bigdata/hadoop/hdfs.html"}],["meta",{"property":"og:site_name","content":"添码座"}],["meta",{"property":"og:title","content":"HDFS三大Node"}],["meta",{"property":"og:description","content":"Hadoop中虽有五大组件，但整体上分为两派，分别用于HDFS和YARN的管理。 官方给出的HDFS架构图。 官方给出的HDFS架构图官方给出的HDFS架构图 其中NameNode、SecondaryNameNode和DataNode的作品分别如下。 NameNode：HDFS的核心管理节点，存放各种元数据，负责响应和处理客户端的请求。 Seconda..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tianmazuo.com/technology/bigdata/hadoop/hadoop-02.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"添码座"}],["meta",{"property":"article:tag","content":"大数据"}],["meta",{"property":"article:tag","content":"Hadoop"}],["meta",{"property":"article:tag","content":"HDFS"}],["meta",{"property":"article:tag","content":"NameNode"}],["meta",{"property":"article:tag","content":"SecondaryNameNode"}],["meta",{"property":"article:tag","content":"DataNode"}],["meta",{"property":"article:published_time","content":"2023-03-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HDFS三大Node\\",\\"image\\":[\\"https://tianmazuo.com/technology/bigdata/hadoop/hadoop-02.png\\",\\"https://tianmazuo.com/technology/bigdata/hadoop/hadoop-03.png\\"],\\"datePublished\\":\\"2023-03-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"添码座\\",\\"url\\":\\"https://www.tianmazuo.com/about/\\"}]}"]]},"headers":[],"git":{},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"technology/bigdata/hadoop/hdfs.md","localizedDate":"2023年3月20日","excerpt":"<p><a href=\\"https://hadoop.apache.org\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hadoop</a>中虽有五大组件，但整体上分为两派，分别用于<a href=\\"https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HDFS</a>和<a href=\\"https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">YARN</a>的管理。</p>","autoDesc":true}');export{s as comp,g as data};
