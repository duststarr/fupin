(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0760c120"],{"062b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("el-row",{staticClass:"rowwrap",attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("div",{staticClass:"info"},[a("info")],1),t._v(" "),a("div",{staticClass:"radar1"},[a("radar1")],1)]),t._v(" "),a("el-col",{attrs:{span:17}},[a("div",{staticClass:"list"},[a("el-card",{staticStyle:{height:"100%"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("风险列表")]),t._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",icon:"el-icon-more"}},[t._v("更多")])],1),t._v(" "),a("list")],1)],1),t._v(" "),a("div",{staticClass:"pies"},[a("radar2",{staticClass:"radar"}),t._v(" "),a("pies",{staticClass:"pie"})],1)])],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("基本信息")])]),t._v(" "),a("div",{staticClass:"content"},[a("img",{attrs:{src:t.options[t.value].url,alt:""}}),t._v(" "),a("el-select",{attrs:{placeholder:"请选择飞行员"},on:{change:t.changePerson},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("span",[t._v("姓名："+t._s(t.options[t.value].label))]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("出生日期：1981年6月出生")]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("部职别：一大队二中队飞行员")]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("飞行时间：1000+小时")]),t._v(" "),a("el-divider"),t._v(" "),a("span",[t._v("主要成就：首位蝉联金头盔获得者2014年度“争做新一代革命军人”获得者")])],1)])},s=[],o=(a("2f62"),{data:function(){return{url:"http://www.chinanews.com/cr/2014/0102/3383391210.jpg",options:[{value:"0",label:"蒋佳冀",url:"http://www.chinanews.com/cr/2014/0102/3995256331.jpg"},{value:"1",label:"张三",url:"http://www.chinanews.com/cr/2014/0102/3080679999.jpg"},{value:"2",label:"李四",url:"http://www.chinanews.com/cr/2014/0102/3383391210.jpg"}],value:0}},computed:{},methods:{changePerson:function(t){this.$bus.$emit("changePerson",t)}},mounted:function(){}}),l=o,c=(a("d113"),a("2877")),d=Object(c["a"])(l,r,s,!1,null,"52aeb65a",null),u=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("整体风险评估")])]),t._v(" "),a("div",{staticClass:"radar1",attrs:{id:"radar1"}})])},p=[];function f(t,e){for(var a=[],n=0;n<t;n++)a.push(Math.floor(Math.random()*e));return a}var h={computed:{},data:function(){return{option:{tooltip:{},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:[{text:"思想",max:100},{text:"技术",max:100},{text:"身体",max:100}]},series:[{name:"整体风险评估",type:"radar",areaStyle:{normal:{}},data:[{value:[],name:"整体风险评估"}]}]}}},methods:{initChart:function(){var t=this.$echarts.init(document.getElementById("radar1"));t.setOption(this.option,!0)},setRandomData:function(){this.option.series[0].data[0].value=f(this.option.radar.indicator.length,100),this.initChart()}},mounted:function(){var t=this;this.setRandomData(),this.$bus.$on("changePerson",(function(e){t.setRandomData()}))}},v=h,b=(a("72c5"),Object(c["a"])(v,m,p,!1,null,"ec1ce208",null)),g=b.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("历史事件雷达图")])]),t._v(" "),a("div",{staticClass:"radar2",attrs:{id:"radar2"}})])},w=[],x={computed:{},data:function(){return{option:{tooltip:{},legend:{data:["身体","思想","技术"]},radar:{name:{textStyle:{}},indicator:function(){for(var t=[],e=1;e<=12;e++)t.push({text:e+"月",max:100});return t}()},series:[{name:"预算 vs 开销（Budget vs spending）",type:"radar",areaStyle:{normal:{}},data:[{name:"身体",value:[2.6,5.9,9,26.4,28.7,70.7,75.6,82.2,48.7,18.8,6,2.3]},{name:"思想",value:[2,4.9,7,23.2,25.6,76.7,35.6,62.2,32.6,20,6.4,3.3]},{name:"技术",value:[15,23,30,32,56,67,35.6,62.2,32.6,20,45,55]}]}]}}},methods:{initChart:function(){var t=this.$echarts.init(document.getElementById("radar2"));t.setOption(this.option,!0)},setRandomData:function(){this.option.series[0].data[0].value=f(this.option.radar.indicator.length,100),this.option.series[0].data[1].value=f(this.option.radar.indicator.length,100),this.option.series[0].data[2].value=f(this.option.radar.indicator.length,100),this.initChart()}},mounted:function(){var t=this;this.setRandomData(),this.$bus.$on("changePerson",(function(e){t.setRandomData()}))}},C=x,$=(a("94e0"),Object(c["a"])(C,_,w,!1,null,"b6ee5428",null)),y=$.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("思想、技术、身体风险分布图")])]),t._v(" "),a("div",[a("el-row",[a("el-col",{attrs:{span:8}},[a("pie1")],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("pie2")],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("pie3")],1)],1)],1)])},j=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie1",attrs:{id:"pie1"}})},O=[],D={computed:{},data:function(){return{option:{title:{text:"思想问题",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"50%",center:["50%","40%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},methods:{initChart:function(){var t=this.$echarts.init(document.getElementById("pie1"));t.setOption(this.option,!0)},setRandomData:function(){var t=[{value:0,name:"家庭情况"},{value:0,name:"外界影响因素"},{value:0,name:"现实表现"},{value:0,name:"心理反映"}];t.forEach((function(t){t.value=Math.floor(100*Math.random())})),this.option.series[0].data=t,this.initChart()}},mounted:function(){var t=this;this.setRandomData(),this.$bus.$on("changePerson",(function(e){t.setRandomData()}))}},R=D,k=(a("65ef"),Object(c["a"])(R,E,O,!1,null,"eb548fc2",null)),S=k.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie2",attrs:{id:"pie2"}})},M=[],P={computed:{},data:function(){return{option:{title:{text:"技术问题",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"50%",center:["50%","40%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},methods:{initChart:function(){var t=this.$echarts.init(document.getElementById("pie2"));t.setOption(this.option,!0)},setRandomData:function(){var t=[{value:0,name:"间断情况"},{value:0,name:"准备质量"},{value:0,name:"XX实施情况"},{value:0,name:"讲评情况"},{value:0,name:"转换情况"}];t.forEach((function(t){t.value=Math.floor(100*Math.random())})),this.option.series[0].data=t,this.initChart()}},mounted:function(){var t=this;this.setRandomData(),this.$bus.$on("changePerson",(function(e){t.setRandomData()}))}},X=P,H=(a("8561"),Object(c["a"])(X,B,M,!1,null,"57e0add6",null)),J=H.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pie3",attrs:{id:"pie3"}})},q=[],z={computed:{},data:function(){return{option:{title:{text:"身体问题",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"50%",center:["50%","40%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},methods:{initChart:function(){var t=this.$echarts.init(document.getElementById("pie3"));t.setOption(this.option,!0)},setRandomData:function(){var t=[{value:0,name:"体能考核情况"},{value:0,name:"伤病记录"},{value:0,name:"近期训练载荷情况"},{value:0,name:"体检情况"},{value:0,name:"疗养休息情况"}];t.forEach((function(t){t.value=Math.floor(100*Math.random())})),this.option.series[0].data=t,this.initChart()}},mounted:function(){var t=this;this.setRandomData(),this.$bus.$on("changePerson",(function(e){t.setRandomData()}))}},A=z,G=(a("9ef3"),Object(c["a"])(A,F,q,!1,null,"4e00caf1",null)),K=G.exports,L={components:{pie1:S,pie2:J,pie3:K},computed:{},mounted:function(){},methods:{}},N=L,Q=(a("4152"),Object(c["a"])(N,I,j,!1,null,"2c879116",null)),T=Q.exports,U=a("3139"),V={components:{info:u,radar1:g,radar2:y,pies:T,list:U["a"]},computed:{},mounted:function(){}},W=V,Y=(a("8f6a"),Object(c["a"])(W,n,i,!1,null,"0dca8756",null));e["default"]=Y.exports},"2f3d":function(t,e,a){},3139:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"wrap",staticClass:"wrap"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",height:t.tableHeight-80}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"课目",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"飞行阶段",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"类别",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"天气",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"填报人"}})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"15px"},attrs:{layout:"prev, pager, next",total:1e3}})],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"类别"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"课目"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"飞行阶段"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"气象特点"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"量化分数"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"日期"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)},s=[],o={data:function(){return{formInline:{user:"",region:""}}},methods:{onSubmit:function(){console.log("submit!")}}},l=o,c=a("2877"),d=Object(c["a"])(l,r,s,!1,null,"0f64819a",null),u=d.exports,m={components:{searchForm:u},data:function(){return{tableHeight:"",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},computed:{},mounted:function(){this.tableHeight=this.$refs.wrap.offsetHeight}},p=m,f=(a("83e0"),Object(c["a"])(p,n,i,!1,null,"3f4b0f72",null));e["a"]=f.exports},4152:function(t,e,a){"use strict";var n=a("2f3d"),i=a.n(n);i.a},"4e1f":function(t,e,a){},"560f":function(t,e,a){},"65ef":function(t,e,a){"use strict";var n=a("4e1f"),i=a.n(n);i.a},"72c5":function(t,e,a){"use strict";var n=a("da34"),i=a.n(n);i.a},"83e0":function(t,e,a){"use strict";var n=a("9377"),i=a.n(n);i.a},"84d6":function(t,e,a){},8561:function(t,e,a){"use strict";var n=a("8ac6"),i=a.n(n);i.a},"8ac6":function(t,e,a){},"8f6a":function(t,e,a){"use strict";var n=a("db00"),i=a.n(n);i.a},9377:function(t,e,a){},"94e0":function(t,e,a){"use strict";var n=a("84d6"),i=a.n(n);i.a},"9ef3":function(t,e,a){"use strict";var n=a("560f"),i=a.n(n);i.a},ca7a:function(t,e,a){},d113:function(t,e,a){"use strict";var n=a("ca7a"),i=a.n(n);i.a},da34:function(t,e,a){},db00:function(t,e,a){}}]);