import{d as e,aR as s,h as l,o,i as t,w as a,j as r,m as c}from"./index.1913eb94.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import{a as i}from"./index.bdf910cd.js";import"./RightOutlined.2ee7001c.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import{_ as n}from"./index.de3a5f99.js";import"./usePageContext.c6a4ca7d.js";var m=e({name:"TabsDemo",components:{CollapseContainer:i,PageWrapper:n},setup(){const{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:a,refreshPage:r}=s();return{closeAll:e,closeLeft:l,closeRight:o,closeOther:t,closeCurrent:a,refreshPage:r}}});const d=c("关闭所有"),f=c("关闭左侧"),u=c("关闭右侧"),p=c("关闭其他"),C=c("关闭当前"),h=c("刷新当前");m.render=function(e,s,c,i,n,m){const j=l("a-input"),k=l("CollapseContainer"),g=l("a-button"),_=l("PageWrapper");return o(),t(_,{title:"标签页操作示例"},{default:a((()=>[r(k,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:a((()=>[r(j,{placeholder:"请输入"})])),_:1}),r(k,{class:"mt-4",title:"标签页操作"},{default:a((()=>[r(g,{class:"mr-2",onClick:e.closeAll},{default:a((()=>[d])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeLeft},{default:a((()=>[f])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeRight},{default:a((()=>[u])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeOther},{default:a((()=>[p])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.closeCurrent},{default:a((()=>[C])),_:1},8,["onClick"]),r(g,{class:"mr-2",onClick:e.refreshPage},{default:a((()=>[h])),_:1},8,["onClick"])])),_:1})])),_:1})};export default m;