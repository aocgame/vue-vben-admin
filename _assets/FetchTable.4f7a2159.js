import{a as e,i,o as t,j as o,k as s,w as r,p as a}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./useSortable.74a4edee.js";import"./index.caabb9a0.js";import"./Trigger.85e0c6c3.js";import"./omit.55ec7501.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.985f7fcf.js";import"./CheckOutlined.68db086c.js";import"./index.8b69d756.js";import"./colors.2c198061.js";import"./index.7db77d01.js";import"./RightOutlined.dc9b87b8.js";import"./index.c2ba9c2f.js";import"./types.6032647f.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import"./_baseFor.f4e5f03f.js";import"./index.d7e6258a.js";import"./index.a172b251.js";import"./index.6227aee6.js";import"./index.151bd698.js";import"./UpOutlined.350ee0d8.js";import"./LeftOutlined.c6092702.js";import"./index.3a133817.js";import"./index.828aec9e.js";import"./index.5e4fc368.js";import"./index.9a4837a6.js";import"./index.6c2d10f1.js";import"./zh_CN.0242bd16.js";import"./index.4d632f1c.js";import"./index.3cc37455.js";import"./CaretDownFilled.6b8fd509.js";import"./index.aa1eff48.js";import"./CheckOutlined.c08442ed.js";import"./CloseOutlined.a385804b.js";import{s as d}from"./index.b6dbf657.js";import"./FullscreenOutlined.182bcb88.js";import"./LeftOutlined.60f39dee.js";import"./LoadingOutlined.fcd9fc2e.js";import"./TableAction.1b63178c.js";import"./RightOutlined.03811c7b.js";import"./SettingOutlined.fe954433.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";import"./useAttrs.cbcfaf76.js";import"./index.30f1e688.js";import"./useForm.e934175a.js";import"./index.b419ef5c.js";import"./useWindowSizeFn.f8841ec5.js";import"./uuid.40269c00.js";import"./useExpose.37e055d0.js";import"./index.b8771aff.js";import{u as p}from"./useTable.9546fa5c.js";import{getBasicColumns as m}from"./tableData.37218e0c.js";import{d as n}from"./table.612b3cbf.js";var j=e({components:{BasicTable:d},setup(){const[e,{reload:i}]=p({title:"远程加载示例",api:n,columns:m()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const c={class:"p-4"},l=a(" 刷新当前页 "),f=a(" 刷新并返回第一页 ");j.render=function(e,a,d,p,m,n){const j=i("a-button"),b=i("BasicTable");return t(),o("div",c,[s(b,{onRegister:e.registerTable},{toolbar:r((()=>[s(j,{type:"primary",onClick:e.handleReloadCurrent},{default:r((()=>[l])),_:1},8,["onClick"]),s(j,{type:"primary",onClick:e.handleReload},{default:r((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default j;