(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20a9a5be"],{"25f0":function(t,e,n){"use strict";var i=n("6eeb"),s=n("825a"),a=n("d039"),r=n("ad6d"),o="toString",c=RegExp.prototype,u=c[o],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(l||d)&&i(RegExp.prototype,o,(function(){var t=s(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?r.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2ec4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"view-layout"},[t.isNotPublish?n("div",{staticClass:"main"},[t._m(0),t._m(1)]):t.isExpired?n("div",{staticClass:"main"},[t._m(2),t._m(3)]):t.naire?n("div",{staticClass:"main"},[n("div",{staticClass:"header"},[n("h1",[t._v(t._s(t.naire.title))])]),n("div",{staticClass:"content"},[n("div",{staticClass:"intro"},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.naire.intro))]),n("p",{staticClass:"mt-10"},[t._v("截止日期："+t._s(t._f("formatTime")(t.naire.deadline)))])]),n("question-list",{attrs:{"question-list":t.naire.topic}}),n("div",{staticClass:"text-center"},[t.isAdmin?n("el-button",{attrs:{type:"success"},on:{click:t.goBack}},[t._v("返回管理平台 ")]):t._e(),n("el-button",{attrs:{type:"primary",loading:t.finished,disabled:t.finished},on:{click:t.submitNaire}},[t._v("提交问卷")])],1)],1),t._m(4)]):t._e()])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v("问卷未发布！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("您所填写的问卷未发布，暂不能填写。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v("问卷已过期！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("您所填写的问卷已到截止日期，暂不能填写。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v("苏州外国语学校信息中心技术支持")])])}],a=(n("b0c0"),n("a9e3"),n("d3b7"),n("25f0"),n("498a"),n("159b"),n("96cf"),n("d4ec")),r=n("bee2"),o=n("99de"),c=n("7e84"),u=n("262e"),l=n("9ab4"),d=n("60a3"),p=n("9dba"),f=n("3ec7"),h=n("ea9b"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.questionList&&0===t.questionList.length?n("div",{staticClass:"no-question"},[t._v(" 一点东西都没有，赶快点击上方按钮添加题目吧！ ")]):t._e(),t._l(t.questionList,(function(e,i){return n("div",{key:i,class:["question-item",t.type]},[n("div",{staticClass:"question-order"},[n("div",{staticClass:"title"},[t._v(" Q"+t._s(i+1)+"： ["+t._s(e.type)+"] "+t._s(e.question)),e.selectMultipleContent&&e.setting.last>0?n("span",[t._v(" (必选 "+t._s(e.setting.last)+" 项，已勾选 "+t._s(e.selectMultipleContent.length)+" 项)")]):t._e(),e.isRequired?n("span",{staticStyle:{color:"#f00"}},[t._v("*")]):t._e()]),""!==e.description?n("p",{staticClass:"question-desc"},[t._v("说明："+t._s(e.description))]):t._e()]),n("div",{staticClass:"question-content"},[n("question-item",t._g({attrs:{type:e.type,topic:e,index:i}},t.$listeners))],1)])}))],2)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentName,t._g(t._b({tag:"component"},"component",t.$attrs,!1),t.$listeners))},_=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-radio-group",{staticClass:"radio-list",attrs:{vertica:""},model:{value:t.topic.selectContent,callback:function(e){t.$set(t.topic,"selectContent",e)},expression:"topic.selectContent"}},t._l(t.topic.options,(function(e,i){return n("el-radio",{key:i,staticClass:"option-item",attrs:{label:e.o_id}},[n("span",[t._v(t._s(e.content))]),e.isAddition?n("el-input",{directives:[{name:"show",rawName:"v-show",value:e.isAddition&&t.topic.selectContent===e.o_id,expression:"option.isAddition && topic.selectContent === option.o_id "}],staticClass:"addition-input",staticStyle:{width:"300px"},attrs:{placeholder:"请输入理由",size:"mini"},model:{value:t.topic.additional,callback:function(e){t.$set(t.topic,"additional",e)},expression:"topic.additional"}}):t._e(),n("div",{staticClass:"option-desc",domProps:{textContent:t._s(e.desc)}})],1)})),1)],1)},y=[],C=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);l["a"]([Object(d["b"])({required:!0})],C.prototype,"topic",void 0),l["a"]([Object(d["b"])({required:!0})],C.prototype,"index",void 0),C=l["a"]([d["a"]],C);var j=C,O=j,x=(n("52da"),n("2877")),T=Object(x["a"])(O,g,y,!1,null,"0092ece0",null),E=T.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-checkbox-group",{staticClass:"checkbox-list",model:{value:t.topic.selectMultipleContent,callback:function(e){t.$set(t.topic,"selectMultipleContent",e)},expression:"topic.selectMultipleContent"}},t._l(t.topic.options,(function(e,i){return n("el-checkbox",{key:i,staticClass:"option-item",attrs:{label:e.o_id}},[n("span",[t._v(t._s(e.content))]),n("div",{class:["option-desc"],domProps:{textContent:t._s(e.desc)}})])})),1)],1)},w=[],I=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);l["a"]([Object(d["b"])({required:!0})],I.prototype,"topic",void 0),l["a"]([Object(d["b"])({required:!0})],I.prototype,"index",void 0),I=l["a"]([d["a"]],I);var $=I,q=$,S=(n("9f43"),Object(x["a"])(q,k,w,!1,null,"75de75c8",null)),N=S.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-20 mb-20"},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入..."},model:{value:t.topic.selectContent,callback:function(e){t.$set(t.topic,"selectContent",e)},expression:"topic.selectContent"}})],1)},L=[],R=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);l["a"]([Object(d["b"])({required:!0})],R.prototype,"topic",void 0),l["a"]([Object(d["b"])({required:!0})],R.prototype,"index",void 0),R=l["a"]([d["a"]],R);var M=R,F=M,A=Object(x["a"])(F,U,L,!1,null,"6d68ffec",null),Q=A.exports,P=n("5d15"),H=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"componentName",get:function(){return this.type===P["a"].SINGLE_CHOICE?"SingleChoice":this.type===P["a"].MULTIPLE_CHOICE?"MultiChoice":this.type===P["a"].TEXT_QUESTION?"TextQuestion":void 0}}]),e}(d["c"]);l["a"]([Object(d["b"])()],H.prototype,"type",void 0),H=l["a"]([Object(d["a"])({components:{SingleChoice:E,MultiChoice:N,TextQuestion:Q}})],H);var D=H,G=D,X=Object(x["a"])(G,b,_,!1,null,null,null),z=X.exports,B=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),e}(d["c"]);l["a"]([Object(d["b"])()],B.prototype,"questionList",void 0),l["a"]([Object(d["b"])({default:"normal"})],B.prototype,"type",void 0),B=l["a"]([Object(d["a"])({components:{QuestionItem:z}})],B);var J=B,K=J,V=(n("873e"),Object(x["a"])(K,v,m,!1,null,"69b9647a",null)),W=V.exports,Y=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.loading=!1,t.naire=null,t.isLogin=!0,t.userId="",t.userInfo={name:"111",identity:"111"},t.userInfoRule={name:[{required:!0,message:"请填写用户名",trigger:"blur"}],identity:[{required:!0,message:"请填写身份证后6位",trigger:"blur"}]},t.finished=!1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"watchRoute",value:function(){this.fetchData()}},{key:"goBack",value:function(){this.$router.push("/list")}},{key:"handleSubmit",value:function(){var t=this,e=this.$refs["userInfo"];e.validate((function(e){var n;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(e){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,regeneratorRuntime.awrap(h["e"]({n_id:t.naire.n_id,name:t.userInfo.name,identity:t.userInfo.identity.toUpperCase()}));case 4:n=i.sent,n.success?(t.isLogin=!0,t.userId=n.data.u_id,n.data.isFinished?(t.$notify({title:"已完成问卷",message:"您已完成该问卷，请勿重复提交！",type:"warning"}),t.$router.push("/complete")):t.$notify({title:"欢迎您 "+n.data.name,message:"请继续完成问卷内容吧！",type:"success"})):t.$message.error("用户登录失败，请重试");case 6:case"end":return i.stop()}}))}))}},{key:"validateNaire",value:function(){var t=!0,e=!1;return this.naire.topic.forEach((function(n,i){if(n.isRequired){if(n.type===P["a"].TEXT_QUESTION&&(n.selectContent&&n.selectContent.trim().length>0||(t=!1)),n.type===P["a"].SINGLE_CHOICE){var s=n.options&&n.options.some((function(t,e){return t.isAddition&&t.o_id===n.selectContent}));!s||n.additional&&n.additional.trim().length>0||(e=!0),n.selectContent&&n.selectContent.trim().length>0||(t=!1)}n.type===P["a"].MULTIPLE_CHOICE&&(n.selectMultipleContent&&n.selectMultipleContent.length>0||(t=!1),n.setting.last&&n.setting.last>0&&n.selectMultipleContent&&n.selectMultipleContent.length!==Number(n.setting.last)&&(t=!1))}})),t?!e||(this.$notify.warning({title:"提示",message:"请填写附加理由",type:"warning"}),!1):(this.$notify.warning({title:"提示",message:"您还有必填项未正确填写，请检查后提交！",type:"warning"}),!1)}},{key:"submitNaire",value:function(){var t,e,n,i=this;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:if(this.userId=(new Date).getTime().toString(),this.validateNaire()){s.next=3;break}return s.abrupt("return");case 3:return this.finished=!0,t=this.naire.n_id,e=[],this.naire.topic.forEach((function(n,s){if("单选"===n.type){var a={n_id:t,u_id:i.userId,q_id:n.q_id,o_id:n.selectContent,o_addition:n.additional?n.additional.trim():""};e.push(a)}else if("多选"===n.type){var r={n_id:t,u_id:i.userId,q_id:n.q_id,o_id:n.selectMultipleContent,o_addition:n.additional?n.additional.trim():""};e.push(r)}else{var o={n_id:t,u_id:i.userId,q_id:n.q_id,o_id:"",o_addition:n.selectContent?n.selectContent.trim():""};e.push(o)}})),s.next=9,regeneratorRuntime.awrap(f["k"]({nId:t,result:e,userId:this.userId}));case 9:n=s.sent,this.finished=!1,n.success?(this.$message.success("问卷提交成功"),this.$router.push("/complete")):this.$message.error("提交失败，错误信息："+n.data.msg);case 12:case"end":return s.stop()}}),null,this)}},{key:"fetchData",value:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,regeneratorRuntime.awrap(f["f"]({n_id:this.$route.params.id,type:"normal"}));case 3:t=e.sent,this.loading=!1,t.success&&(this.naire=t.data,document.title=t.data.title);case 6:case"end":return e.stop()}}),null,this)}},{key:"mounted",value:function(){this.fetchData()}},{key:"loginTip",get:function(){return this.isLogin?"当前登录用户：".concat(this.userInfo.name,"，请继续完成问卷！"):"在填写表单之前，请先填写用户信息。"}},{key:"isAdmin",get:function(){return p["a"].isAdmin}},{key:"isNotPublish",get:function(){return!this.isAdmin&&"0"===this.naire.status}},{key:"isExpired",get:function(){return!this.isAdmin&&Number(this.naire.deadline)<(new Date).getTime()}}]),e}(d["c"]);l["a"]([Object(d["d"])("$route")],Y.prototype,"watchRoute",null),Y=l["a"]([Object(d["a"])({components:{QuestionList:W}})],Y);var Z=Y,tt=Z,et=(n("3615"),Object(x["a"])(tt,i,s,!1,null,"17b5ba5c",null));e["default"]=et.exports},3615:function(t,e,n){"use strict";var i=n("5260"),s=n.n(i);s.a},"3ec7":function(t,e,n){"use strict";n.d(e,"g",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"j",(function(){return r})),n.d(e,"i",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"l",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return v}));var i=n("b32d"),s=function(){return i["a"].get("/naire",{})},a=function(t){return i["a"].post("/naire/save",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},r=function(t){return i["a"].post("/naire/statis",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},o=function(t){return i["a"].get("/naire/sourcedata",t)},c=function(t){return i["a"].post("/naire/crossanalysis",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},u=function(t){return i["a"].post("/naire/questions",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},l=function(t){return i["a"].post("/naire/detail",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},d=function(t){return i["a"].post("/naire/submit",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},p=function(t){return i["a"].get("/naire/changeStatus",t)},f=function(t){return i["a"].get("/naire/submitStatis",t)},h=function(t){return i["a"].post("/naire/changeTime",t)},v=function(t){return i["a"].get("/naire/del",t)}},"498a":function(t,e,n){"use strict";var i=n("23e7"),s=n("58a8").trim,a=n("e070");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},5260:function(t,e,n){},"52da":function(t,e,n){"use strict";var i=n("5ce4"),s=n.n(i);s.a},"5ce4":function(t,e,n){},"5d15":function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t["SINGLE_CHOICE"]="单选",t["MULTIPLE_CHOICE"]="多选",t["TEXT_QUESTION"]="文本"}(i||(i={}))},"6c2c":function(t,e,n){},"873e":function(t,e,n){"use strict";var i=n("6c2c"),s=n.n(i);s.a},"9f43":function(t,e,n){"use strict";var i=n("ed7d"),s=n.n(i);s.a},b0c0:function(t,e,n){var i=n("83ab"),s=n("9bf2").f,a=Function.prototype,r=a.toString,o=/^\s*function ([^ (]*)/,c="name";!i||c in a||s(a,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},e070:function(t,e,n){var i=n("d039"),s=n("5899"),a="​᠎";t.exports=function(t){return i((function(){return!!s[t]()||a[t]()!=a||s[t].name!==t}))}},ea9b:function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l}));var i=n("b32d"),s=function(t){return i["a"].post("/user/getId",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},a=function(t){return i["a"].post("/user/addUser",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},r=function(t){return i["a"].post("/user/updateUser",t,{headers:{"Content-Type":"application/json; charset=UTF-8"}})},o=function(){return i["a"].get("/user/getClass")},c=function(t){return i["a"].get("/user",t)},u=function(t){return i["a"].post("/user/del",t)},l=function(){return i["a"].post("/user/clear")}},ed7d:function(t,e,n){}}]);
//# sourceMappingURL=chunk-20a9a5be.91299f0f.js.map