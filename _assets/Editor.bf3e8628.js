import{a as e,M as i,h as s,i as t,o,j as r,k as a,w as n}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./index.caabb9a0.js";import"./Trigger.85e0c6c3.js";import"./omit.55ec7501.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.985f7fcf.js";import"./CheckOutlined.68db086c.js";import{s as m}from"./index.8b69d756.js";import"./colors.2c198061.js";import"./RightOutlined.dc9b87b8.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import"./index.d7e6258a.js";import"./index.a172b251.js";import"./index.6227aee6.js";import"./index.151bd698.js";import"./UpOutlined.350ee0d8.js";import"./index.3a133817.js";import"./index.828aec9e.js";import"./index.9a4837a6.js";import"./index.4d632f1c.js";import"./index.3cc37455.js";import{a as d}from"./index.aa1eff48.js";import"./LoadingOutlined.fcd9fc2e.js";import"./RightOutlined.03811c7b.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";import"./useAttrs.cbcfaf76.js";import"./index.30f1e688.js";import{M as p}from"./index.c26989a0.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:s})=>i(p,{value:e[s],onChange:i=>{e[s]=i}})}];var c=e({components:{BasicForm:m,CollapseContainer:d},setup(){const{createMessage:e}=s();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});const u={class:"m-4"};c.render=function(e,i,s,m,d,p){const l=t("BasicForm"),c=t("CollapseContainer");return o(),r("div",u,[a(c,{title:"MarkDown表单"},{default:n((()=>[a(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default c;