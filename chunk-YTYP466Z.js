import{i as L}from"./chunk-7BKHLCB6.js";import{h as N,i as P,j,k as E}from"./chunk-737QNFMI.js";import{c as O,e as I}from"./chunk-FDCLM4BU.js";import{c as F,d as S}from"./chunk-BJ3AG4RX.js";import{i as _,l as T}from"./chunk-YKTI5QJU.js";import"./chunk-4YRY4IP2.js";import{l as y}from"./chunk-P3S5YJFO.js";import{$ as x,$a as M,Ea as v,Fa as b,N as o,O as u,W as m,Y as d,_a as w,ea as n,fa as r,fb as C,ga as c,r as a,ub as l,v as f,w as p,wa as g,xa as h}from"./chunk-SBAOVUZ3.js";var V=()=>({width:"100%"}),z=e=>({"border-top-1 surface-border":e});function Y(e,s){if(e&1&&(n(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11),g(4),r()(),n(5,"div",12),c(6,"p-button",13),r(),n(7,"div",12),c(8,"p-button",14),r()()()),e&2){let t=s.$implicit,i=s.first;o(),d("ngClass",b(2,z,!i)),o(3),h(t.name)}}function $(e,s){if(e&1&&(n(0,"div",6),m(1,Y,9,4,"div",7),r()),e&2){let t=s.$implicit;o(),d("ngForOf",t)}}var k=(()=>{class e{constructor(t){this.licenseServices=t}ngOnInit(){this.retrieveTables()}retrieveTables(){this.licenseServices.getItems().subscribe({next:t=>{this.items=t,console.log(t)},error:t=>console.error(t)})}static{this.\u0275fac=function(i){return new(i||e)(u(L))}}static{this.\u0275cmp=f({type:e,selectors:[["app-licenses"]],decls:6,vars:4,consts:[["dv",""],[1,"grid"],[1,"col-10","col-offset-1"],["header","Licensias"],["emptyMessage","Sin ordenes en proceso",3,"value"],["pTemplate","list"],[1,"grid","grid-nogutter"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],[1,"grid",3,"ngClass"],[1,"col"],[1,"font-medium","text-700","mt-2"],[1,"col-fixed","gap-1"],["icon","pi pi-pencil",1,"flex-auto","md:align-items-end","white-space-nowrap"],["severity","danger","icon","pi pi-trash",1,"flex-auto","md:align-items-end","white-space-nowrap"]],template:function(i,R){i&1&&(n(0,"div",1)(1,"div",2)(2,"p-card",3)(3,"p-dataView",4,0),m(5,$,2,1,"ng-template",5),r()()()()),i&2&&(o(2),x(v(3,V)),o(),d("value",R.items))},dependencies:[w,M,F,y,N,j],styles:[".button-table[_ngcontent-%COMP%]{appearance:none;background-color:#ef5b1c;border-radius:4px;border-width:0;box-shadow:#2d234266 0 2px 4px,#2d23424d 0 7px 13px -3px,#d6d6e7 0 -3px inset;box-sizing:border-box;color:#36395a;cursor:pointer;font-family:JetBrains Mono,monospace;height:35vh;width:30vw;list-style:none;overflow:hidden;padding-left:16px;padding-right:16px;position:relative;text-decoration:none;transition:box-shadow .15s,transform .15s;user-select:none;-webkit-user-select:none;touch-action:manipulation;white-space:nowrap;will-change:box-shadow,transform;font-size:18px}.button-table[_ngcontent-%COMP%]:focus{box-shadow:#d6d6e7 0 0 0 1.5px inset,#2d234266 0 2px 4px,#2d23424d 0 7px 13px -3px,#d6d6e7 0 -3px inset}.button-table[_ngcontent-%COMP%]:hover{box-shadow:#2d234266 0 4px 8px,#2d23424d 0 7px 13px -3px,#d6d6e7 0 -3px inset;transform:translateY(-2px)}.button-table[_ngcontent-%COMP%]:active{box-shadow:#d6d6e7 0 3px 7px inset;transform:translateY(2px)}"]})}}return e})();var B=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=a({imports:[l.forChild([{path:"",component:k}]),l]})}}return e})();var me=(()=>{class e{static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=p({type:e})}static{this.\u0275inj=a({imports:[C,B,S,O,T,_,I,P,E]})}}return e})();export{me as LicensesModule};
