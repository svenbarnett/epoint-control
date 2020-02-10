**singleinfo 控件介绍**

单条信息控件

属性：

- issingle：1，表示单条

占位符：
`{@title}` `{@InfoDate@date@yyyy-MM-dd}` `{@author}` `{@secondtitle}` `{@zhuanzai}` `{@infocontent}`

示例：
```html
<e:singleinfo width="100" height="100" issingle="1">
    <detailtemplate>
        <![CDATA[ <div class="news-article">
            <h6 class="news-article-tt">{@title}</h6>
            <p class="news-article-info">【发稿时间 ：{@InfoDate@date@yyyy-MM-dd}  作者：{@author}  副标题：{@secondtitle}  来源：{@zhuanzai} 阅读次数：<span id="infoViewCount"></span>】【推荐】【纠错】【收藏】</p>
            <p class="news-article-para">{@infocontent}</p>
        </div>]]>
    </detailtemplate>
    <attachtemplate>
        <![CDATA[附件： <a href="{@attachUrl}" title="{@attachName}">{@attachName}</a> ]]>
    </attachtemplate>
</e:singleinfo>
```