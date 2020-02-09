# 新点网站大师控件 VScode 插件

## 控件基础知识介绍

### 控件

| 控件名称            | 说明                     |
| ------------------- | ------------------------ |
| nesttemplate        | 头尾载入                 |
| webinfolistnew      | 信息列表                 |
| currentpostion      | 当前位置                 |
| categoryinfo        | 根据栏目编号取得栏目属性 |
| categorylist        | 子栏目列表               |
| flashpic            | 轮播图片                 |
| headnews            | 标题图片                 |
| detailflashpic      | 详细页图片               |
| frameou             | 部门列表                 |
| moreinfosub         | 分组信息列表、豆腐块     |
| leftmenu            | 左侧树                   |
| subpagelist         | 分页列表                 |
| detailinfo          | 详细信息                 |
| infofeedback        | 信息评论                 |
| singleinfo          | 单条信息                 |
| movead              | 两侧广告                 |
| floatad             | 浮动广告                 |
| popad               | 弹出广告                 |
| ajaxjsondata        | 跨栏目信息               |
| ajaxjsonunlimitcate | 无限循环树               |
| ajaxjsonurl         | 生成的 json 文件 url     |
| questionnairedetail | 问卷调查详细页           |
| morequesinfo        | 问卷调查列表页           |
| morevoteinfo        | 在线投票列表页           |
| coldetailinfo       | 信息公开栏目信息详细页   |
| catedetailinfo      | 信息公开类目信息详细页   |
| cateleftmenu        | 信息公开左侧类目树       |
| genreleftmenu       | 信息公开左侧体裁树       |
| themeleftmenu       | 信息公开左侧主题树       |
| colleftmenu         | 信息公开左侧栏目树       |
| deptpagelist        | 机构列表页分页           |
| catepagelist        | 类目列表页分页           |
| genrepagelist       | 体裁列表页分页           |
| themepagelist       | 主题列表页分页           |
| colpagelist         | 栏目列表分页             |
| colsingleinfo       | 信息公开普通栏目单条信息 |
| catesingleinfo      | 类目单条信息             |
| govinfopubinfolist  | 信息公开信息列表数据     |
| govdeptinfolist     | 信息公开机构信息列表数据 |
| govinfodeptlist     | 信息公开部门列表数据     |
| govinfocatelist     | 信息公开机构类目列表数据 |
| wenjuaninfolist     | 问卷调查列表数据         |
| voteinfolist        | 在线投票列表数据         |
| votedetail          | 在线投票详情             |
| voteoptionlist      | 投票对象列表数据         |
| columninfo          | 信息公开普通栏目属性     |

### 控件模板

- 通用模板

```
<commonTemplate>通用数据模板</commonTemplate>
<lineTemplate>通用数据，针对{@linehtml}</lineTemplate>
<SecondLineTemplate> 第二列数据，针对{@linehtml2}</SecondLineTemplate>
<ThirdLineTemplate> 第三列数据，针对{@linehtml3}</ ThirdLineTemplate >
<SpecialLineTemplate+数字>特殊行使用</SpecialLineTemplate+数字>
<SecondSpecialLineTemplate+数字>第二列数据特殊行使用，数字表示第几行</SecondSpecialLineTemplate>
<ThirdSpecialLineTemplate+数字>第三列数据特殊行使用，数字表示第几行</ThirdSpecialLineTemplate>
```

- 指定层级特殊模板

```
<specialLevel+数字CommonTemplate>指定层级特殊模板，数字代表层级<specialLevelCommonTemplate>
<specialLevel+数字LineTemplate>指定层级特殊模板，数字代表层级<specialLevelLineTemplate>
<specialLevel+数字1SpecialLineTemplate+数字2>指定层级特殊模板模板，数字1为层级，数字2为第几行，该标签优先级最高<specialLevelSpecialLineTemplate>

<speciallevel+数字1Index+数字2commonTemplate>指定层级特殊模板，数字1为层级，数字2为行数，数字2以-的形式表现，比如2-4，指2-4行的数据
</speciallevel+数字1Index+数字2commonTemplate>
<speciallevel+数字1Index+数字2lineTemplate>指定层级特殊模板，数字1为层级，数字2为行数，数字2可以以-的形式表现，比如2-4，指2-4行的数据
</speciallevel+数字1Index+数字2lineTemplate>
```

- 其他特殊模板

```
<remainderTemplate>余数列模板< remainderTemplate>
<splitTemplate >分隔行模板< splitTemplate >
<lastTemplate>最后一行模板< lastTemplate>
<EmptyResult>数据为空时显示内容</EmptyResult>
<wrapperCommonTemplate>分页模板</wrapperCommonTemplate>
```

- 分页

```
<pageTemplate><ul><li>{@firstlink}</li><li>{@previouslink}</li>{@pagelisthtml}<li>{@nextlink}</li><li>{@lastlink}</li></ul></pageTemplate>
<pageListTemplate><li>{@pagelink}</li></pageListTemplate>
<linkTemplate><a href="{@url}">{@name}</a></linkTemplate>
```

### 控件属性和占位符

- 属性及占位符概念介绍
  先了解下属性及占位符的概念，以 flash 轮播图片为例

```
<e:flashpic categorynum="001001" width="494" height="280" row="3" >
     <commontemplate>
         <![CDATA[{@linehtml}]]>
     </commontemplate>
     <linetemplate>
        <![CDATA[  <div class="wb-slider-ctag"><a href="{@infourl}" target="{@target}">
        <img src="{@headnewsimg}" alt=""></a></div>]]>
     </linetemplate>
 </e:flashpic>
```

`flashpic`：控件名称；

`categorynum、width、height等`：控件属性；

`{@linehtml}、{@infourl}`：用{}标识的是控件的占位符；

`commontemplate、linetemplate等`：控件模板；

Sql 中查出的字段都可直接当占位符来使用，另外网站大师提供了一些常用的属性及占位符：

- 占位符通用方法:

1. `@date@` 时间格式化 例如:`{@InfoDate@date@yyyy-MM-dd}`

2. 前台时间显示支持 24 小时制`{@infodate@date@MM-dd HH24:MM:SS}`

3. `@cut@` 字符串截取 例如:`{@title@cut@60}`

- 通用属性

| 属性名称            | 说明                                                                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| width               | 图片宽度，以 “，”隔开，作用于 HeadNewsImg2、3、4                                                                                                                   |
| height              | 图片高度，以“，”隔开，作用于 HeadNewsImg2、3、4                                                                                                                    |
| divisor             | 列数或者倍数，用于控制 remainderTemplate，如果 divisor=2，对应`<remainderTemplate1>模板代码</remainderTemplate1><remainderTemplate2>模板代码</remainderTemplate2>` |
| frommainsite        | frommainsite =”1”，取主站数据                                                                                                                                      |
| connectionstring    | 取指定数据源，connectionstring=“站群管理-服务器配置-数据源管理中的数据源名称”                                                                                      |
| clientGuidFieldName | 主键（默认 infoid）                                                                                                                                                |
| contentFieldName    | 正文字段（默认 infocontent）                                                                                                                                       |
| imgGuidName         | 附件 guid（默认 attachid）                                                                                                                                         |
| imgFieldName        | 附件正文字段（默认 filecontent）                                                                                                                                   |

- 通用占位符

| 占位符名称                     | 说明         |
| ------------------------------ | ------------ |
| subHtml                        | 子栏目 html  |
| Level                          | 层级         |
| linehtml、linehtml2、linehtml3 | 数据列表     |
| infourl                        | 信息访问地址 |
| categoryName                   | 栏目名称     |
| categoryurl                    | 栏目地址     |
| index                          | 当前行号     |
| OuName                         | 所属部门     |

> 一种尺寸：{@HeadNewsImg}、
> 多种尺寸：{@HeadNewsImg1}、{@HeadNewsImg2}、{@HeadNewsImg3}、{@HeadNewsImg4} 图片路径，控件的图片只有一种尺寸，使用{@HeadNewsImg}占位符；
> 当控件中需要展示多种尺寸的图片，控件属性中的宽、高设置为多个，用分号隔开，且必须采用带有数字的占位符，如{@HeadNewsImg1}{@HeadNewsImg2}
> baseimgpath 图片路径（原图），如果项目中客户反馈缩略图像素低，可以采用该占位符，取原图

- DataListAction（通用于 PageDataListAction）属性

| 属性名称    | 说明                             |
| ----------- | -------------------------------- |
| categoryNum | 栏目号                           |
| isRecommend | 显示推荐 0（默认）不启用，1 启用 |
| PhotoSrc    | 图片类型信息后缀图片路径         |
| FilmSrc     | 视频类型信息后缀图片路径         |
| shownewday  | 信息显示 new 天数                |
| shownew     | 信息 new 图片路径                |

- DataListAction（通用于 PageDataListAction）占位符

| 占位符名称   | 说明                                                  |
| ------------ | ----------------------------------------------------- |
| current      | 当前栏目返回 current 否则为空                         |
| newhtml      | 信息 new 图标                                         |
| target       | sql 需查询出 isopennewpage 字段，返回\_blank 或\_self |
| TITLE        | 标题                                                  |
| recommendstr | 推荐                                                  |
| shixiaostr   | 信息过期的话显示已失效                                |
| titletypeimg | -标题类型：Photo、Film                                |

- PageDataListAction 属性

| 属性名称           | 说明                          |
| ------------------ | ----------------------------- |
| class              | 列表数据外层嵌套 div 的 class |
| maxPages           | 最大显示分页数                |
| categorynum        | 栏目号                        |
| Pagecount          | 每页信息数                    |
| first              | 首页名称                      |
| last               | 末页名称                      |
| previous           | 上页名称                      |
| next               | 下页名称                      |
| PageDataListAction | 占位符                        |

| 占位符名称   | 说明      |
| ------------ | --------- |
| firstlink    | 首页地址  |
| lastlink     | 末页地址  |
| previouslink | 上页地址  |
| nextlink     | 下页地址  |
| firstclass   | out、over |
| lastclass    | out、over |
| totalnum     | 总页数    |
| previndex    | 上页页数  |
| nextindex    | 下页页数  |
| currentindex | 当前页数  |
| url          | 分页连接  |
| name         | 分页页数  |
| pagelink     | 分页列表  |

- DataDetailAction 占位符

| 占位符名称  | 说明     |
| ----------- | -------- |
| imgurl      | 图片路径 |
| smallimgurl | 小图路径 |
| attachUrl   | 附件路径 |
| attachName  | 附件名   |
| videoUrl    | 视频路径 |
| videoName   | 视频名   |
| videoType   | 视频类型 |

- AjaxJsonDataAction 属性

| 属性名称   | 说明                   |
| ---------- | ---------------------- |
| formatDate | 时间格式               |
| isTree     | 是否为树 0（默认）不是 |
| infoOrCate | 信息还是栏目           |

- 树类型下包含属性：

| 属性名称   | 说明         |
| ---------- | ------------ |
| idField    | Id 对应字段  |
| textField  | 文本对应字段 |
| uniqueGuid | 特殊标识     |
| rootName   | 根节点名称   |
| Id         | 根节点 id    |

- AjaxJsonUrlAction 属性

| 属性名称   | 说明                   |
| ---------- | ---------------------- |
| systemName | 静态插件名（默认取值） |
| directGuid | 目标 guid（默认取值）  |
| uniqueGuid | 特殊标识               |
| isTree     | 是否为树 0（默认）不是 |

- NestTemplateAction 属性

| 属性名称 | 说明                                               |
| -------- | -------------------------------------------------- |
| isAjax   | 是否为 ajax（是否执行生成，默认 1 不执行，0 执行） |
| name     | Isajax=1 情况下，执行 load 的 div 的 name          |
