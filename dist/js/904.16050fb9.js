"use strict";(self["webpackChunkvue3_huashuo_system"]=self["webpackChunkvue3_huashuo_system"]||[]).push([[904],{2904:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(3396),o=a(4870),s=a(9242),l=a(678),u=a(2807),r=a(3261),d={Login(e){return(0,r.Z)({url:"/user/login",headers:{"Content-Type":"application/json"},method:"post",data:e})}};const i=e=>((0,n.dD)("data-v-0e47ddf8"),e=e(),(0,n.Cn)(),e),c={id:"Login"},p={class:"box"},v=i((()=>(0,n._)("div",{class:"boxTitle"},"请登陆",-1))),h={class:"loginForm"},m=["onKeypress"];var _=(0,n.aZ)({__name:"SystemLogin",setup(e){const t=(0,l.tv)();let a=(0,o.iH)(""),r=(0,o.iH)("");async function i(){const e=await d.Login({username:a.value,password:r.value});e?(localStorage.setItem("token",e),t.push({name:"cardtable"})):u.z8.error({message:(0,n.h)("p",null,[(0,n.h)("span",{style:'color: black;  font-family: "Noto Serif SC", serif;'},"登录失败")])})}return null!=localStorage.getItem("token")&&t.push({name:"cardtable"}),(e,t)=>((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",p,[v,(0,n._)("div",h,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"请输入账号名","onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.dq)(a)?a.value=e:a=e)},null,512),[[s.nr,(0,o.SU)(a)]]),(0,n.wy)((0,n._)("input",{type:"password",placeholder:"请输入密码","onUpdate:modelValue":t[1]||(t[1]=e=>(0,o.dq)(r)?r.value=e:r=e),onKeypress:(0,s.D2)(i,["enter"])},null,40,m),[[s.nr,(0,o.SU)(r)]]),(0,n._)("button",{id:"LoginBtn",onClick:i},"登录")])])]))}}),y=a(89);const f=(0,y.Z)(_,[["__scopeId","data-v-0e47ddf8"]]);var g=f}}]);
//# sourceMappingURL=904.16050fb9.js.map