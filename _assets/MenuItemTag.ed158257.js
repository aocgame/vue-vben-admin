import{a as t,aW as e,I as i,o as s,j as o,n as r,m as n}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./useSortable.b798defb.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./index.278c333c.js";import"./index.1ba525ec.js";import"./index.25538577.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import{c as a}from"./index.ebaaea57.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./index.04ccb94b.js";import"./UpOutlined.d1c97ab1.js";import"./LeftOutlined.a2747bf9.js";import"./index.a1f247c9.js";import"./index.53907294.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.98ac4cc3.js";import"./zh_CN.0242bd16.js";import"./index.79bf1a1f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.da527672.js";import"./index.eb3c5efe.js";import"./CaretDownFilled.332f9000.js";import"./transButton.295c4225.js";import"./index.010cd2a6.js";import"./index.3ab703ad.js";import"./index.c41153d6.js";import"./RightOutlined.a8a05276.js";import"./index.952df5be.js";import"./index.b5fc5f91.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./index.e72d8f0d.js";import"./useHeaderSetting.d7fea6a2.js";var d=t({name:"MenuItemTag",props:a,setup(t){const{prefixCls:s}=e("basic-menu-item-tag"),o=i((()=>{const{item:e,showTitle:i,isHorizontal:s}=t;if(!e||i||s)return!1;const{tag:o}=e;if(!o)return!1;const{dot:r,content:n}=o;return!(!r&&!n)})),r=i((()=>{if(!o.value)return"";const{item:e}=t,{tag:i}=e,{dot:s,content:r}=i;return s?"":r})),n=i((()=>{const{item:e}=t,{tag:i={}}=e||{},{dot:o,type:r="error"}=i;return[s,[`${s}--${r}`],{[`${s}--dot`]:o}]}));return{prefixCls:s,getTagClass:n,getShowTag:o,getContent:r}}});d.render=function(t,e,i,a,d,m){return t.getShowTag?(s(),o("span",{key:0,class:t.getTagClass},r(t.getContent),3)):n("v-if",!0)};export default d;