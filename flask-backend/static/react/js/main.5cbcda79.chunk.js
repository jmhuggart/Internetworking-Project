(window["webpackJsonpreact-frontend"]=window["webpackJsonpreact-frontend"]||[]).push([[0],{105:function(e,t,a){},136:function(e,t,a){e.exports=a(277)},141:function(e,t,a){},142:function(e,t,a){e.exports=a.p+"media/logo.5d5d9eef.svg"},143:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o);a(141),a(105),a(142),a(143);var c=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("a",{className:"App-link",href:"login"},"Sign In")," or ",r.a.createElement("a",{className:"App-link",href:"register"},"Create an Account"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(66),s=a(67),m=a(72),u=a(68),p=a(73),d=a(132),f=a(33),h=a(45),g=a(24),E=a(279),y=a(280),b=a(281),w=a(13),v=a(76),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var a=t,n=new Request("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});fetch(n).then((function(){console.log("it worked!")}))}}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{style:{marginTop:"10%"}},r.a.createElement(h.a,null,r.a.createElement(g.a,{span:6,offset:9,style:{background:"red"}},r.a.createElement(E.a,{title:"Login",style:{width:"100%"},className:"login-card"},r.a.createElement(y.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(y.a.Item,null,e("email",{rules:[{required:!0,message:"Please enter your email!"}]})(r.a.createElement(b.a,{prefix:r.a.createElement(w.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"enter your email"}))),r.a.createElement(y.a.Item,null,e("pass",{rules:[{required:!0,message:"Please enter your password!"}]})(r.a.createElement(b.a.Password,{prefix:r.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"enter your password"}))),r.a.createElement(y.a.Item,null,r.a.createElement(v.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),r.a.createElement("a",{href:"/reg",className:"login-form-reg"},"register now!")))))))}}]),t}(r.a.Component),j=O=y.a.create()(O),k=function(e){function t(e){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:c}),r.a.createElement(f.a,{path:"/login",component:j})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[136,1,2]]]);
//# sourceMappingURL=main.5cbcda79.chunk.js.map