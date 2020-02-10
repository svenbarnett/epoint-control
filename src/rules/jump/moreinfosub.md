**moreinfosub 控件介绍**

栏目信息控件

属性：

- row：对应栏目号，例如：categorynum="001001" 

- issingle：截图栏目号，截取对应长度，例如，栏目号001002，toplen=3，那么此时查询的是001栏目

- ismoresubinfo：

- isrecommend：

- photosrc

- filmsrc
占位符：

`{@categoryurl}`、`{@target}`、`{@categoryname}`

示例：

```html
<e:moreinfosub row="5" issingle="1" ismoresubinfo="1" isrecommend="1" photosrc="/images/Photo.gif" filmsrc="/images/Film.gif">
    <commontemplate>
        <![CDATA[{@linehtml}]]>
    </commontemplate>
    <linetemplate>
        <![CDATA[<div class="sublist3">
            <div class="sublistimg">
                <div class="sublisttext">
                    <a href="{@categoryurl}" target="_blank" title="{@categoryname}">{@categoryname}</a>
                </div>
            </div><div class="listClass">{@subhtml}</div>
        </div>]]>
    </linetemplate>
    <speciallevel2commontemplate>
        <![CDATA[<ul class=" clearfix">{@linehtml}</ul>]]>
    </speciallevel2commontemplate>
    <speciallevel2linetemplate>
        <![CDATA[<li class="listnews">
            <div class="linestyle-title123">
                <a href="{@infourl}">
                    <span class="title"><span style="color:red">{@secretlevelstr}{@recommendstr}</span>{@title}{@titletypeimg}<span style="color:red">{@shixiaostr}</span></span>
                </a>
            </div><span class="wb-data-date">{@infodate@date@MM-dd}</span>
        </li>]]>
    </speciallevel2linetemplate>
</e:moreinfosub>
```