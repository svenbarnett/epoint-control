 **subpagelist 控件介绍**

分页列表控件

属性：
- maxpages="10" 
- issingle="1" 
- ismoresubinfo="1" 
- isrecommend="1" 
- photosrc="/images/Photo.gif" 
- filmsrc="/images/Film.gif"

占位符：
`{@adlink}` `{@adcontent}` `{@infourl}` `@secretlevelstr}` `{@recommendstr}` `{@strcomment}` `{@title}` `{@titletypeimg}`


示例：

```html
<e:subpagelist maxpages="10" issingle="1" ismoresubinfo="1" isrecommend="1" photosrc="/images/Photo.gif" filmsrc="/images/Film.gif">
    <wrappercommontemplate>
        <![CDATA[<ul class="news-list-items clearfix">{@commonhtml}</ul><div class="pagemargin">{@pagehtml}</div>]]>
    </wrappercommontemplate>
    <commontemplate>
        <![CDATA[{@linehtml}]]>
    </commontemplate>
    <linetemplate>
        <![CDATA[<li class="news-list-item">
                <a href="{@infourl}">
                    <h5 class="news-list-tt"><span style="color:red">{@secretlevelstr}{@recommendstr}</span>{@title}{@titletypeimg}<span style="color:red">{@shixiaostr}</span></h5><p class="news-para">发布时间：{@infodate@date@MM-dd}</p>
                    <p class="news-para news-detail">{@strcomment}</p>
                </a>
            </li> ]]>
    </linetemplate>
    <pagetemplate>
        <![CDATA[
            <div id="page"></div>
            <script>
                function getQueryString(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return encodeURI(r[2]);
                    return null;
                }

                var pageIndex= {@previndex};
                if(getQueryString('pageIndex')){
                    pageIndex=getQueryString('pageIndex')-1;
                }
                $("#page").pagination({
                    pageIndex:pageIndex,
                    pageSize: {@pagecount},
                    total: {@totalnum},
                    pageBtnCount:10,
                    debug: true,
                    showInfo: true,
                    showJump: true,
                    showPageSizes: true,
                    pageElementSort: ['$page', '$jump'],
                });
                $("#page").on("pageClicked", function (event, data) {
                    if(data.pageIndex==0){
                        window.location.href="{@categoryPath}/moreinfo.html";
                    }else if(data.pageIndex<{@pagetotalcount}){
                        window.location.href="{@categoryPath}/"+(data.pageIndex+1)+".html";
                    }else{
                        window.location.replace("{@categoryPath}/moreinfo.html?categoryNum={@categorynum}&pageIndex="+(data.pageIndex+1));
                    }
                }).on('jumpClicked', function (event, data) {
                    if(data.pageIndex==0){
                        window.location.href="{@categoryPath}/moreinfo.html";
                    }else if(data.pageIndex<{@pagetotalcount}){
                        window.location.href="{@categoryPath}/"+(data.pageIndex+1)+".html";
                    }else{
                        window.location.replace("{@categoryPath}/moreinfo.html?categoryNum={@categorynum}&pageIndex="+(data.pageIndex+1));
                    }
                });

            </script>
            ]]>
    </pagetemplate>
    <pagelisttemplate>
        <![CDATA[]]>
    </pagelisttemplate>
    <linktemplate>
        <![CDATA[]]>
    </linktemplate>
</e:subpagelist>
```