**leftmenu 控件介绍**

左侧栏目树控件

属性：

- categorynum：对应栏目号，例如：categorynum="001001"，只展示该栏目下子栏目数据 

占位符：
`{@categoryurl}`、`{@target}`、`{@categoryname}`

示例：

```html
<e:leftmenu>
    <commontemplate>
        <![CDATA[{@linehtml}]]>
    </commontemplate>
    <linetemplate>
        <![CDATA[<li class="left-menu-item open"><h4 class="left-menu-tt"><a href="{@categoryurl}" target="{@target}" title="{@categoryname}">{@categoryname}</a></h4>{@subhtml}</li>]]>
    </linetemplate>
    <speciallevel2commontemplate>
        <![CDATA[<ul class="left-menu">{@linehtml}</ul>]]>
    </speciallevel2commontemplate>
    <speciallevel2linetemplate>
        <![CDATA[<li class="left-menu-item"><a href="{@categoryurl}" target="{@target}">{@categoryname}</a></li> ]]>
    </speciallevel2linetemplate>
</e:leftmenu>
```