import{d as e,g as t,h as o,o as i,i as s,j as n,w as a,m as l}from"./index.1913eb94.js";import"./index.1268fe0c.js";import"./_stringToArray.5cb95166.js";import"./domUtils.0258b8bd.js";import"./index.18ad5efb.js";import"./index.783d6b86.js";import"./index.bdf910cd.js";import"./CheckOutlined.c53a211d.js";import"./index.f94b9e9e.js";import{_ as c}from"./index.db3d08b6.js";import"./FullscreenOutlined.6d692539.js";import"./RightOutlined.2ee7001c.js";import"./SettingOutlined.e940c981.js";import"./useTimeout.9da07028.js";import"./index.8f8f83b3.js";import"./animation.3a00ce01.js";import"./useScrollTo.e2974638.js";import"./useAttrs.693b4d98.js";import"./useWindowSizeFn.eef1c2fa.js";import"./index.5acc6e7c.js";import"./uuid.a6cec785.js";import"./download.71135c62.js";import"./useForm.7ec6aae7.js";import"./useSortable.a3f8f546.js";import"./useExpose.1d20c03d.js";import{u as r}from"./useTable.6cfc8531.js";import{getBasicColumns as d,getBasicShortColumns as m}from"./tableData.7aa0192c.js";import{d as u}from"./table.4ea4bfd7.js";var f=e({components:{BasicTable:c},setup(){const{createMessage:e}=t(),[o,{setLoading:i,setColumns:s,getColumns:n,getDataSource:a,reload:l,getPaginationRef:c,setPagination:f,getSelectRows:g,getSelectRowKeys:p,setSelectedRowKeys:b,clearSelectedRowKeys:C}]=r({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:u,columns:d(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){i(!0),setTimeout((()=>{i(!1)}),1e3)},changeColumns:function(){s(m())},reloadTable:function(){s(d()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){C()}}}});const g={class:"p-4"},p={class:"mb-4"},b=l("还原"),C=l("开启loading"),j=l("更改Columns"),k=l("获取Columns"),S=l("获取表格数据"),w=l("跳转到第2页"),T={class:"mb-4"},R=l("获取选中行"),_=l("获取选中行Key"),x=l("设置选中行"),y=l("清空选中行"),h=l("获取分页信息");f.render=function(e,t,l,c,r,d){const m=o("a-button"),u=o("BasicTable");return i(),s("div",g,[n("div",p,[n(m,{class:"mr-2",onClick:e.reloadTable},{default:a((()=>[b])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeLoading},{default:a((()=>[C])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.changeColumns},{default:a((()=>[j])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getColumn},{default:a((()=>[k])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getTableData},{default:a((()=>[S])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:a((()=>[w])),_:1},8,["onClick"])]),n("div",T,[n(m,{class:"mr-2",onClick:e.getSelectRowList},{default:a((()=>[R])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:a((()=>[_])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:a((()=>[x])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.clearSelect},{default:a((()=>[y])),_:1},8,["onClick"]),n(m,{class:"mr-2",onClick:e.getPagination},{default:a((()=>[h])),_:1},8,["onClick"])]),n(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;