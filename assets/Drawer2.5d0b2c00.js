import{_ as r,a as e}from"./index.00b6d04a.js";import{d as t,h as s,o as i,i as o,w as a,j as n,a7 as m,m as c}from"./index.24307e55.js";import"./index.14625c53.js";import"./index.e346a81c.js";import"./index.540b99ab.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./RightOutlined.b19e71a7.js";/* empty css              */import"./useTimeout.203f9576.js";import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./ArrowLeftOutlined.e39c5bbd.js";import"./isEqual.b01a20c4.js";import"./vendor.3b1829c7.js";var d=t({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:t}]=e();return{register:r,closeDrawer:t}}});const p=c(" Drawer Info. "),j=c(" 内部关闭drawer ");d.render=function(r,e,t,c,d,l){const f=s("a-button"),u=s("BasicDrawer");return i(),o(u,m(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[p,n(f,{type:"primary",onClick:r.closeDrawer},{default:a((()=>[j])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default d;