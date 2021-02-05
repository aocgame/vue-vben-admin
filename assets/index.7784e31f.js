import e from"./DetailModal.566a8ff9.js";import{_ as r}from"./index.6b39c5d3.js";import{b as i}from"./index.016bc34a.js";import{cT as o,d as t,r as s,u as a,aT as n,x as d,N as m,du as l,h as p,o as f,i as c,aL as j,aM as u,a3 as b,b8 as x,j as g,w as E,m as y,l as O}from"./index.2ebd7bfa.js";import{getColumns as T}from"./data.4eee8a48.js";import{g as R}from"./index.0a97ddb0.js";import{u as D}from"./useTable.bba23bae.js";import"./index.b44f1792.js";import"./index.64db7749.js";import"./responsiveObserve.c545f1cc.js";import"./index.c9fd18b2.js";import"./index.704fa2a9.js";import"./domUtils.e1c3618e.js";import"./_stringToArray.bc74427c.js";import"./RightOutlined.62bde205.js";/* empty css              */import"./useTimeout.def0159f.js";import"./useScrollTo.d9e2f1b0.js";import"./animation.2dca1ea3.js";import"./get.cc921876.js";import"./useDescription.f1044d86.js";import"./index.74e21404.js";import"./SearchOutlined.a2705f11.js";import"./CheckOutlined.a020ea7c.js";import"./DownOutlined.56671cd5.js";import"./index.0dd18cf4.js";import"./index.909f9362.js";import"./vendor.3b1829c7.js";import"./findIndex.9bf2e605.js";import"./isEqual.0a78f514.js";import"./_baseProperty.74f89655.js";import"./toInteger.3d1037bd.js";import"./index.b6fde2b2.js";import"./EllipsisOutlined.41880f5e.js";import"./types.d45ad2ea.js";import"./index.8b9a951a.js";import"./LeftOutlined.7cf7902c.js";import"./DoubleLeftOutlined.1267f122.js";import"./DoubleRightOutlined.e623c642.js";import"./zh_CN.8094f4d6.js";import"./uuid.4b9789bd.js";import"./index.731a2f67.js";import"./util.f06bef37.js";import"./DeleteOutlined.719311aa.js";import"./EyeOutlined.9fd98a6b.js";import"./index.17012094.js";import"./scrollTo.c1e0f75f.js";import"./transButton.6f73f198.js";import"./CaretDownFilled.77298cf1.js";import"./clickOutside.9e475aad.js";import"./index.94ee5ef0.js";import"./index.937e178b.js";import"./UpOutlined.d6611b32.js";import"./index.fca230f3.js";import"./useSortable.ed3ff8e0.js";import"./useWindowSizeFn.227bb415.js";import"./index.257b8920.js";import"./SettingOutlined.f67c4bdb.js";import"./useExpose.c2b3ef22.js";import"./useForm.5d7a97b6.js";import"./useAttrs.11cd1fa7.js";import"./FullscreenOutlined.92085b1f.js";import"./index.dbc26e07.js";import"./colors.70040742.js";import"./index.4b804b62.js";import"./RedoOutlined.5e75bc04.js";import"./Tree.e43bd54d.js";import"./index.e42abba8.js";import"./index.3981b83f.js";import"./download.3820d830.js";var h;(h||(h={})).Error="/error";var w=t({name:"ErrorHandler",components:{DetailModal:e,BasicTable:r,TableAction:R},setup(){const e=s(),r=s([]),{t:t}=a(),[p,{setTableData:f}]=D({title:t("sys.errorLog.tableTitle"),columns:T(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:j}]=i();return n((()=>l.getErrorInfoState),(e=>{d((()=>{f(m(e))}))}),{immediate:!0}),{register:p,registerModal:c,handleDetail:function(r){e.value=r,j(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){r.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await o.request({url:h.Error,method:"GET"})},imgListRef:r,rowInfoRef:e,t:t}}});const C={class:"p-4"};w.render=function(e,r,i,o,t,s){const a=p("DetailModal"),n=p("a-button"),d=p("TableAction"),m=p("BasicTable");return f(),c("div",C,[(f(!0),c(j,null,u(e.imgListRef,(e=>b((f(),c("img",{key:e,src:e},null,8,["src"])),[[x,!1]]))),128)),g(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),g(m,{onRegister:e.register,class:"error-handle-table"},{toolbar:E((()=>[g(n,{onClick:e.fireVueError,type:"primary"},{default:E((()=>[y(O(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireResourceError,type:"primary"},{default:E((()=>[y(O(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),g(n,{onClick:e.fireAjaxError,type:"primary"},{default:E((()=>[y(O(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:r})=>[g(d,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default w;