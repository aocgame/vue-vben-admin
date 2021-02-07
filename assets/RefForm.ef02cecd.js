import{_ as e}from"./index.256ca702.js";import{a as s}from"./index.e346a81c.js";import{d as o,r as t,g as i,h as l,o as a,i as r,w as n,j as p,m as c}from"./index.24307e55.js";import{_ as d}from"./index.8fbcdc3e.js";import"./index.72bde911.js";import"./index.c30b4b97.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.688aa195.js";import"./isEqual.b01a20c4.js";import"./get.69f57ef3.js";import"./_baseProperty.74f89655.js";import"./toInteger.9a5a9d5a.js";import"./index.5b062b56.js";import"./index.bb7c19a7.js";import"./SearchOutlined.757a7c18.js";import"./EyeOutlined.d2f3f9ef.js";import"./index.0fd23b0f.js";import"./CheckOutlined.1ccef882.js";import"./DownOutlined.47b7c2c1.js";import"./index.47943644.js";import"./index.c3a5cfcc.js";import"./UpOutlined.c6e7a587.js";import"./index.f0aee7f7.js";import"./RightOutlined.b19e71a7.js";import"./RedoOutlined.9382cd35.js";import"./index.431dabb1.js";import"./EllipsisOutlined.e8a93345.js";import"./types.1fed049d.js";import"./Tree.9425d2f7.js";import"./util.cecf4fcb.js";/* empty css              */import"./uuid.f9448e9c.js";import"./index.750dbcf8.js";import"./DeleteOutlined.acd17502.js";import"./index.279fddc5.js";import"./index.26a2afc9.js";import"./useTimeout.203f9576.js";import"./useWindowSizeFn.55418cf4.js";import"./FullscreenOutlined.ec7d2a96.js";import"./index.d91c8c4a.js";import"./index.52307fdb.js";import"./index.86da423d.js";import"./LeftOutlined.c68d7da1.js";import"./download.a82d0ea6.js";import"./domUtils.96c05842.js";import"./_stringToArray.d9435ec6.js";import"./index.540b99ab.js";import"./useScrollTo.ff91b601.js";import"./animation.f865ff7c.js";import"./index.721a3e8f.js";import"./index.1b435b11.js";import"./usePageContext.4b2bc254.js";import"./transButton.4e6639d4.js";import"./ArrowLeftOutlined.e39c5bbd.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var f=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:d},setup(){const e=t(null),{createMessage:s}=i();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const u={class:"mb-4"},b=c(" 更改labelWidth "),j=c(" 还原labelWidth "),P=c(" 更改Size "),x=c(" 还原Size "),C=c(" 禁用表单 "),h=c(" 解除禁用 "),k=c(" 紧凑表单 "),_=c(" 还原正常间距 "),O=c(" 操作按钮位置 "),v={class:"mb-4"},g=c(" 隐藏操作按钮 "),S=c(" 显示操作按钮 "),w=c(" 隐藏重置按钮 "),B=c(" 显示重置按钮 "),R=c(" 隐藏查询按钮 "),W=c(" 显示查询按钮 "),y=c(" 修改重置按钮 "),z=c(" 修改查询按钮 ");f.render=function(e,s,o,t,i,c){const d=l("a-button"),m=l("BasicForm"),f=l("CollapseContainer"),E=l("PageWrapper");return a(),r(E,{title:"Ref操作示例"},{default:n((()=>[p("div",u,[p(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),p(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),p(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),p(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[x])),_:1}),p(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[C])),_:1}),p(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[h])),_:1}),p(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[k])),_:1}),p(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),p(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[O])),_:1})]),p("div",v,[p(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[g])),_:1}),p(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[S])),_:1}),p(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[w])),_:1}),p(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[B])),_:1}),p(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[R])),_:1}),p(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),p(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[y])),_:1}),p(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[z])),_:1})]),p(f,{title:"使用ref调用表单内部函数示例"},{default:n((()=>[p(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;