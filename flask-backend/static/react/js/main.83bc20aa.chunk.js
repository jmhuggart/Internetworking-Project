(window["webpackJsonpreact-frontend"]=window["webpackJsonpreact-frontend"]||[]).push([[0],{152:function(e,t,a){e.exports=a(300)},157:function(e,t,a){},158:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l);a(157),a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(31),i=a(32),c=a(34),m=a(33),u=a(35),p=a(54),d=a(45);a(158);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,r.a.createElement("a",{className:"App-link",href:"login"},"Sign In")," or ",r.a.createElement("a",{className:"App-link",href:"register"},"Create an Account"))))},h=a(55),g=a(60),b=a(28),E=a(305),y=a(301),v=a(303),w=a(12),j=a(91),O=a(306),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var n=t,r=Object(h.a)(a),l=new Request("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});fetch(l).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){console.log("ok"),r.setState({isComplete:!0,isInvalid:!1})})).catch((function(e){r.setState({isComplete:!1,isInvalid:!0}),console.log(e),console.log(window.userType)}))}}))},a.state={isComplete:!1,isInvalid:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.isInvalid;return this.state.isComplete?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{style:{marginTop:"10%"}},r.a.createElement(g.a,null,r.a.createElement(b.a,{span:6,offset:9,style:{background:"red"}},r.a.createElement(E.a,{title:"Login",style:{width:"100%"},className:"login-card"},r.a.createElement(y.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(y.a.Item,null,e("email",{rules:[{required:!0,message:"Please enter your email!"}]})(r.a.createElement(v.a,{prefix:r.a.createElement(w.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"enter your email"}))),r.a.createElement(y.a.Item,null,e("pass",{rules:[{required:!0,message:"Please enter your password!"}]})(r.a.createElement(v.a.Password,{prefix:r.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"enter your password"}))),r.a.createElement(y.a.Item,null,r.a.createElement(j.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),r.a.createElement("a",{href:"/reg",className:"login-form-reg"},"register now!")))),t?r.a.createElement(O.a,{message:"Invalid credentials",description:"Your username or password is incorrect.",type:"error"}):null)))}}]),t}(r.a.Component),T=k=y.a.create()(k),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var n=t,r=Object(h.a)(a),l=new Request("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});fetch(l).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then((function(e){console.log("ok"),r.setState({isComplete:!0,isInvalid:!1})})).catch((function(e){r.setState({isComplete:!1,isInvalid:!0}),console.log(e)}))}}))},a.state={isComplete:!1,isInvalid:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.isInvalid;return this.state.isComplete?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{style:{marginTop:"10%"}},r.a.createElement(g.a,null,r.a.createElement(b.a,{span:6,offset:9,style:{background:"red"}},r.a.createElement(E.a,{title:"Register",style:{width:"100%"},className:"login-card"},r.a.createElement(y.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(y.a.Item,null,e("email",{rules:[{required:!0,message:"Please enter your email!"}]})(r.a.createElement("label",null,"Email",r.a.createElement(v.a,{prefix:r.a.createElement(w.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"enter your email"})))),r.a.createElement(y.a.Item,null,e("pass",{rules:[{required:!0,message:"Please enter your password!"}]})(r.a.createElement("label",null,"Password",r.a.createElement(v.a,{prefix:r.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"enter your password"})))),r.a.createElement(y.a.Item,null,e("name",{rules:[{required:!0,message:"Please enter your username!"}]})(r.a.createElement("label",null,"Username",r.a.createElement(v.a,{prefix:r.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"enter your username"})))),r.a.createElement(y.a.Item,null,r.a.createElement(j.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Sign up"),r.a.createElement("a",{href:"/",className:"login-form-reg"},"login")))),t?r.a.createElement(O.a,{message:"Invalid email",description:"Please enter in a complete email address.",type:"error"}):null)))}}]),t}(r.a.Component),S=C=y.a.create()(C),I=a(119),P=a(302),q=a(304),N=v.a.TextArea,x={0:"A",1:"B",2:"C",3:"D"},A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={asnum:0},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var a=t,n=new Request("/adminPage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});fetch(n).then((function(){}))}}))},a.onChange=function(e){console.log("radio checked",e.target.value),a.setState({asnum:e.target.value})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.asnum;return r.a.createElement("div",{style:{width:"80%",margin:"3% auto 0"}},r.a.createElement(y.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a.Item,{label:"subject"},e("subject",{rules:[{required:!0,message:"Please enter subject"}]})(r.a.createElement(v.a,{placeholder:"Please enter subject"}))),r.a.createElement(y.a.Item,{label:"question"},e("question",{rules:[{required:!0,message:"Please enter question"}]})(r.a.createElement(N,{rows:4,placeholder:"Please enter question"}))),r.a.createElement(y.a.Item,{label:"the number of answers"},e("number",{rules:[{required:!1,message:"select the number"}]})(r.a.createElement(q.a.Group,{onChange:this.onChange},r.a.createElement(q.a,{value:"2"}," Two "),r.a.createElement(q.a,{value:"3"}," Three "),r.a.createElement(q.a,{value:"4"}," Four ")))),function(t){for(var a=[],n=0;n<t;n++)a.push(r.a.createElement(y.a.Item,{key:n,label:x[n]},e("subject".concat(x[n]),{rules:[{required:!0,message:"Please enter the answer"}]})(r.a.createElement(v.a,{placeholder:"Please enter the answer"}))));return console.log("items --\x3e",a),a}(t),r.a.createElement(y.a.Item,null,r.a.createElement(j.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Create a Task"))))}}]),t}(r.a.Component),D=A=y.a.create()(A),F=I.a.TabPane,R=(P.a.Option,function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var a=t,n=new Request("/adminPage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});fetch(n).then((function(){}))}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.form.getFieldDecorator;return r.a.createElement("div",{style:{width:"80%",margin:"3% auto 0"}},r.a.createElement("div",{style:{overflow:"hidden",textAlign:"right"}},r.a.createElement(p.b,{to:"/login"},"Sign out")),r.a.createElement(I.a,{animated:!0,style:{textAlign:"center"}},r.a.createElement(F,{tab:"Task List",key:"1",style:{textAlign:"left"}},"Content of Tab 1"),r.a.createElement(F,{tab:"Worker List",key:"2",style:{textAlign:"left"}},"Content of Tab 2"),r.a.createElement(F,{tab:"Create Task",key:"3",style:{textAlign:"left"}},r.a.createElement(D,null))),r.a.createElement("p",null,"userType is ",window.userType))}}]),t}(r.a.Component)),J=R=y.a.create()(R),L=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:f}),r.a.createElement(d.b,{path:"/login",component:T}),r.a.createElement(d.b,{path:"/register",component:S}),r.a.createElement(d.b,{path:"/adminPage",component:J})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},72:function(e,t,a){}},[[152,1,2]]]);
//# sourceMappingURL=main.83bc20aa.chunk.js.map