import{_ as e}from"./index.2e3c5ad0.js";import"./index.1cd496a6.js";import{c as i,d as t,a as o,b as s,e as d}from"./data.d4fc1b62.js";import{_ as a}from"./index.5b50fd31.js";import{d as r,i as n,o as m,j as c,w as p,k as j,n as x}from"./index.a0c9d414.js";import"./index.47fbc714.js";import"./index.60510fc2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./index.27bb0464.js";import"./clickOutside.ba49a855.js";import"./CheckOutlined.1616189b.js";import"./useSortable.1eebfae0.js";import"./SettingOutlined.fcf5c9f8.js";import"./useExpose.9b24ca4e.js";import"./useForm.0c31c5a9.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";var l=r({components:{BasicTable:e,PageWrapper:a},setup:()=>({aoaToExcel:function(){o({data:s,header:d,filename:"二维数组方式导出excel.xlsx"})},columns:i,data:t})});const u=x("导出");l.render=function(e,i,t,o,s,d){const a=n("a-button"),r=n("BasicTable"),x=n("PageWrapper");return m(),c(x,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[j(a,{onClick:e.aoaToExcel},{default:p((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default l;