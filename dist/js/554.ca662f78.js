"use strict";(self["webpackChunkvue3_huashuo_system"]=self["webpackChunkvue3_huashuo_system"]||[]).push([[554],{2640:function(e,a,n){var t=n(1026);a["Z"]={Login(e){return(0,t.Z)({url:"api/user/login",headers:{"Content-Type":"application/json"},method:"post",data:e})},whoami(){return(0,t.Z)({url:"api/user/whoami",headers:{"Content-Type":"application/json"},method:"get"})}}},554:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});var t=n(3396),o=n(4870),s=n(9242),l=n(678),u=n(5823),r=n(2640);const i=e=>((0,t.dD)("data-v-7dbaa004"),e=e(),(0,t.Cn)(),e),p={id:"Login"},d={class:"box"},c=i((()=>(0,t._)("div",{class:"boxTitle"},"请登陆",-1))),m={class:"loginForm"},h=["onKeypress"];var v=(0,t.aZ)({__name:"SystemLogin",setup(e){const a=(0,l.tv)();let n=(0,o.iH)(""),i=(0,o.iH)("");async function v(){const e=await r.Z.Login({username:n.value,password:i.value});e?(localStorage.setItem("token",e),a.push({name:"Home"})):u.z8.error({message:(0,t.h)("p",null,[(0,t.h)("span",{style:"color: black;  font-family: serif;"},"登录失败")])})}return null!=localStorage.getItem("token")&&a.push({name:"Home"}),(e,a)=>((0,t.wg)(),(0,t.iD)("div",p,[(0,t._)("div",d,[c,(0,t._)("div",m,[(0,t.wy)((0,t._)("input",{type:"text",placeholder:"请输入账号名","onUpdate:modelValue":a[0]||(a[0]=e=>(0,o.dq)(n)?n.value=e:n=e)},null,512),[[s.nr,(0,o.SU)(n)]]),(0,t.wy)((0,t._)("input",{type:"password",placeholder:"请输入密码","onUpdate:modelValue":a[1]||(a[1]=e=>(0,o.dq)(i)?i.value=e:i=e),onKeypress:(0,s.D2)(v,["enter"])},null,40,h),[[s.nr,(0,o.SU)(i)]]),(0,t._)("button",{id:"LoginBtn",onClick:v},"登录")])])]))}}),y=n(89);const _=(0,y.Z)(v,[["__scopeId","data-v-7dbaa004"]]);var g=_}}]);
//# sourceMappingURL=554.ca662f78.js.map