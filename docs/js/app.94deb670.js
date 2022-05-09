(function(){"use strict";var t={9790:function(t,e,n){var o=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v("Vue-Project")]),n("v-list-item-subtitle",[t._v(" 님 환영합니다. ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.menuList,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.path}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.meta.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1),n("v-divider")],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-title",[t._v(t._s(t.title))])],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{app:"",color:"primary lighten-1",padless:""}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[t._l(t.links,(function(e){return n("v-btn",{key:e,staticClass:"my-2",attrs:{color:"white",text:"",rounded:""}},[t._v(" "+t._s(e)+" ")])})),n("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Vuetify")])])],2)],1)],1)},a=[],r=n(629),s={name:"App",data:()=>({links:["Home","About Us","Team","Services","Blog","Contact Us"]}),computed:{...(0,r.Se)("page",["menuList","title"])}},l=s,c=n(1001),u=n(3453),d=n.n(u),p=n(7524),v=n(426),m=n(7905),h=n(4995),_=n(2102),f=n(1418),g=n(899),y=n(6428),b=n(6816),k=n(7620),x=n(8958),w=n(459),Z=n(7877),T=n(3970),V=n(2877),D=(0,c.Z)(l,i,a,!1,null,null,null),C=D.exports;d()(D,{VApp:p.Z,VAppBar:v.Z,VAppBarTitle:m.Z,VBtn:h.Z,VCol:_.Z,VDivider:f.Z,VFooter:g.Z,VIcon:y.Z,VList:b.Z,VListItem:k.Z,VListItemContent:x.km,VListItemIcon:w.Z,VListItemSubtitle:x.oZ,VListItemTitle:x.V9,VMain:Z.Z,VNavigationDrawer:T.Z,VRow:V.Z});var P=n(8345),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hello-world")},S=[],A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Vue.js 프레임워크 심화과정 ")])])],1)],1)},j=[],E={name:"HelloWorld",data:()=>({})},L=E,I=n(247),O=n(7047),N=(0,c.Z)(L,A,j,!1,null,null,null),H=N.exports;d()(N,{VCol:_.Z,VContainer:I.Z,VImg:O.Z,VRow:V.Z});var M={name:"Home",components:{HelloWorld:H}},U=M,z=(0,c.Z)(U,$,S,!1,null,null,null),B=z.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",{staticStyle:{margin:"20px"}},[t._v("심화 과정 수업 내용 안내 페이지입니다.")]),n("v-divider"),n("h3",{staticStyle:{margin:"20px"}},[t._v("Vue.js 기반 실전 프로젝트")]),t._m(0)],1)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",{staticStyle:{margin:"10px"}},[n("li",[t._v("vuetify 설치 및 활용하기")]),n("li",[t._v("router 설치 및 활용하기")]),n("li",[t._v("vuex 설치 및 활용하기")]),n("li",[t._v("vuetify, router, vuex 활용해서 새로운 페이지 구성하기")]),n("ul",[n("li",[t._v("Vue.js 기초과정 To Do List 삽입")])]),n("li",[t._v("axios 설명 및 설치")]),n("li",[t._v("HTTP Method 및 비동기와 동기 설명")]),n("li",[t._v("Promise 설명 및 예제")]),n("li",[t._v("async await")]),n("li",[t._v("카카오 API 활용")]),n("ul",[n("li",[t._v("axios 활용해서 검색 페이지 구성하기_AxiosView.vue")])]),n("li",[t._v("사용자관리를 위한 통신")]),n("ul",[n("li",[t._v(" 회원가입, 로그인, 사용자삭제 구현하기_SignUpView.vue, LoginView.vue DeleteView.vue ")])])])}],q={},F=q,R=(0,c.Z)(F,K,W,!1,null,null,null),Y=R.exports;d()(R,{VDivider:f.Z});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new"},[n("h1",{staticStyle:{margin:"20px"}},[t._v("To-Do List 기능을 구현한 새로운 페이지입니다.")]),n("v-divider"),n("Todolist")],1)},J=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",[n("div",{staticClass:"container"},[n("h1",[t._v("To - Do List")]),n("TodoInput",{on:{addTodo:t.addTodo}}),n("ul",{staticClass:"todo_list"},[t._m(0),n("li",[n("p",[t._v(t._s(t.remaining)+" / "+t._s(t.todolist.length)+" 건 선택")]),n("label",{staticClass:"fini_bt"},[t._v(t._s(t.finicount)+" / "+t._s(t.todolist.length)+" 건 완료")])]),t._l(t.todolist,(function(e,o){return n("li",{key:o,staticClass:"del_btn"},[n("p",{class:{finiStyle:e.fini}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"item.done"}],attrs:{type:"checkbox",name:"check1"},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:function(n){var o=e.done,i=n.target,a=!!i.checked;if(Array.isArray(o)){var r=null,s=t._i(o,r);i.checked?s<0&&t.$set(e,"done",o.concat([r])):s>-1&&t.$set(e,"done",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(e,"done",a)}}}),t._v(t._s(o+1)+". "+t._s(e.todo)+" "+t._s("["+e.tododate+"]")+" ")]),n("ul",{staticClass:"todo_list_btn"},[n("li",[n("button",{on:{click:function(e){return t.subTodo(o)}}},[t._v("삭 제")])]),n("li",[n("button",{on:{click:function(e){return t.finiTodo(o)}}},[t._v("완 료")])])])])}))],2),n("div",{staticClass:"form_btn"},[n("li",{staticStyle:{"list-style-type":"none"}},[n("button",{on:{click:t.cleanTodo}},[t._v("삭제")]),n("button",{on:{click:function(e){return t.saveTodo()}}},[t._v("저장")])])])],1)])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"todo_list_tit"},[n("p",[t._v("할 일")])])}],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("ul",{staticClass:"list_add"},[t._m(0),n("li",[n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addText,expression:"addText"}],attrs:{type:"text"},domProps:{value:t.addText},on:{input:function(e){e.target.composing||(t.addText=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setDate,expression:"setDate"}],attrs:{type:"date"},domProps:{value:t.setDate},on:{input:function(e){e.target.composing||(t.setDate=e.target.value)}}}),n("button",{on:{click:t.addTodo}},[t._v("등 록")])])])])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"list_add_tit"},[n("p",[t._v("등록 하기")])])}],nt={name:"todoinput",data:function(){return{addText:"",setDate:""}},methods:{addTodo(){this.$emit("addTodo",[this.addText,this.setDate]),this.addText="",this.setDate=""}}},ot=nt,it=(0,c.Z)(ot,tt,et,!1,null,"01d58407",null),at=it.exports,rt={name:"todolist",components:{TodoInput:at},data:function(){return{todolist:[{done:!1,todo:"Vue.js 정리하기",tododate:"2022-04-11",fini:!1},{done:!1,todo:"Vue.js 공부하기",tododate:"2022-04-11",fini:!1},{done:!1,todo:"수업 준비하기",tododate:"2022-04-15",fini:!1},{done:!1,todo:"책 읽기",tododate:"2022-04-11",fini:!1},{done:!1,todo:"보고서 작성하기",tododate:"2022-04-12",fini:!1}]}},computed:{remaining(){return this.todolist.filter((function(t){return t.done})).length},finicount(){return this.todolist.filter((function(t){return t.fini})).length}},methods:{addTodo(t){t[0]?t[1]?this.todolist.splice(0,0,{done:!1,todo:t[0],tododate:t[1]}):alert("종료일을 설정해주세요!"):alert("내용을 입력하세요!")},subTodo(t){confirm(`${t+1}번째 항목을 삭제하시겠습니까?`)&&this.todolist.splice(t,1)},cleanTodo(){const t=this.remaining;confirm("선택된 항목 모두를 삭제하시겠습니까?")?(this.todolist=this.todolist.filter((function(t){return 0==t.done})),alert(`${t}건이 삭제됩니다!`)):alert("삭제가 취소되었습니다.")},finiTodo(t){const e=this.todolist.length-1,n=this.todolist[t];return alert(`${t+1}번째 항목이 완료되었습니다.`),this.todolist.splice(t,1),this.todolist.push(n),this.todolist[e].fini=!0,this.todolist[e].done=!0},saveTodo(){print()}}},st=rt,lt=(0,c.Z)(st,Q,X,!1,null,"3925aef3",null),ct=lt.exports,ut={name:"New",components:{Todolist:ct}},dt=ut,pt=(0,c.Z)(dt,G,J,!1,null,"79bb82c4",null),vt=pt.exports;d()(pt,{VDivider:f.Z});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"axios"},[n("h1",{staticStyle:{margin:"20px"}},[t._v("Axios 활용 페이지입니다.")]),n("v-divider"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("--choose--")]),n("option",{attrs:{value:"1"}},[t._v("웹문서")]),n("option",{attrs:{value:"2"}},[t._v("책검색")]),n("option",{attrs:{value:"3"}},[t._v("이미지검색")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"검색할 내용을 적으세요"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.callData.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("button",{on:{click:t.callData}},[t._v("검색")]),1==t.type?n("div",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("제목")]),n("th",[t._v("내용")])])]),n("tbody",t._l(t.list,(function(e,o){return n("tr",{key:o},[n("td",[n("a",{attrs:{href:e.url,target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(e.title)}})])]),n("td",[n("span",{domProps:{innerHTML:t._s(e.contents)}})])])})),0)]},proxy:!0}],null,!1,897318031)})],1):t._e(),2==t.type?n("div",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("제목")]),n("th",[t._v("내용")])])]),n("tbody",t._l(t.list,(function(e,o){return n("tr",{key:o},[n("td",[n("a",{attrs:{href:e.url,target:"_blank"}},[n("span",{domProps:{innerHTML:t._s(e.title)}})])]),n("td",[n("span",{domProps:{innerHTML:t._s(e.contents)}})])])})),0)]},proxy:!0}],null,!1,897318031)})],1):t._e(),3==t.type?n("div",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("관련기사")]),n("th",[t._v("썸네일")]),n("th",[t._v("원본 이미지 링크")])])]),n("tbody",t._l(t.list,(function(e,o){return n("tr",{key:o},[n("td",[n("a",{attrs:{href:e.doc_url,target:"_blank"}},[t._v(" "+t._s(e.display_sitename)+" ")])]),n("td",[n("img",{attrs:{src:e.thumbnail_url}})]),n("td",[n("a",{attrs:{href:e.image_url,target:"_blank"}},[t._v(" "+t._s(e.image_url)+" ")])])])})),0)]},proxy:!0}],null,!1,1651194915)})],1):t._e()],1)},ht=[],_t=n(9669),ft=n.n(_t),gt={data:()=>({type:"",search:"",list:[]}),methods:{callData(){switch(this.type){case"1":this.callWebData();break;case"2":this.callBookData();break;case"3":this.callImageData();break}},callWebData(){ft().get(`https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=10&sort=accuracy`,{headers:{Authorization:"KakaoAK 5e44b85908d95545bd5b3bb6731cf0eb"}}).then((t=>{console.log(t),this.list=t.data.documents})).catch((t=>{console.error(t)}))},callBookData(){ft().get(`https://dapi.kakao.com//v3/search/book?query=${this.search}&page=1&size=10&sort=accuracy`,{headers:{Authorization:"KakaoAK 5e44b85908d95545bd5b3bb6731cf0eb"}}).then((t=>{console.log(t),this.list=t.data.documents})).catch((t=>{console.error(t)}))},callImageData(){ft().get(`https://dapi.kakao.com//v2/search/image?query=${this.search}&page=1&size=20&sort=accuracy`,{headers:{Authorization:"KakaoAK 5e44b85908d95545bd5b3bb6731cf0eb"}}).then((t=>{console.log(t),this.list=t.data.documents})).catch((t=>{console.error(t)}))}}},yt=gt,bt=n(3568),kt=(0,c.Z)(yt,mt,ht,!1,null,"76e88726",null),xt=kt.exports;d()(kt,{VDivider:f.Z,VSimpleTable:bt.Z});var wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signup"},[n("h1",{staticStyle:{margin:"20px"}},[t._v("회원가입 페이지입니다.")]),n("v-divider"),n("p",[t._v("회원가입")]),n("p",[t._v("ID : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),n("p",[t._v("PW : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),n("p",[t._v("이름 : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("button",{on:{click:t.signUp}},[t._v("가입")])],1)},Zt=[],Tt={data:()=>({id:"",pwd:"",name:""}),methods:{signUp(){ft().post("https://api.devcury.kr/auth/user/new",{id:this.id,pwd:this.pwd,name:this.name}).then((t=>{201===t.status&&alert("회원가입 성공")})).catch((t=>{alert(t.response.data.error)}))}}},Vt=Tt,Dt=(0,c.Z)(Vt,wt,Zt,!1,null,"5f86ed1c",null),Ct=Dt.exports;d()(Dt,{VDivider:f.Z});var Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("h1",{staticStyle:{margin:"20px"}},[t._v("로그인 페이지입니다.")]),n("v-divider"),n("p",[t._v("로그인")]),n("p",[t._v("ID : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),n("p",[t._v("PW : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),n("button",{on:{click:t.login}},[t._v("로그인")]),n("p",[t._v(t._s(t.token))])],1)},$t=[],St={data:()=>({id:"",pwd:"",token:""}),methods:{login(){ft().post("https://api.devcury.kr/auth/user",{id:this.id,pwd:this.pwd}).then((t=>{this.token=t.data.token,alert("토큰 발급 성공")})).catch((t=>{alert(t.response.data.error)}))}}},At=St,jt=(0,c.Z)(At,Pt,$t,!1,null,"1f7d18ef",null),Et=jt.exports;d()(jt,{VDivider:f.Z});var Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"delete"},[n("h1",{staticStyle:{margin:"20px"}},[t._v("사용자 삭제 페이지입니다.")]),n("v-divider"),n("p",[t._v("사용자 삭제")]),n("p",[t._v("토큰 : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],attrs:{type:"text"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}})]),n("button",{on:{click:t.deleteUser}},[t._v("삭제")]),n("p",[t._v(t._s(t.token))])],1)},It=[],Ot={data:()=>({token:""}),methods:{deleteUser(){if(!confirm("정말로 삭제 하시겠습니까?"))return!1;ft()["delete"]("https://api.devcury.kr/api/auth/user",{headers:{Authorization:`Bearer ${this.token}`}}).then((t=>{200===t.status&&alert("삭제되었습니다.")})).catch((t=>{alert(t.response.data.error)}))}}},Nt=Ot,Ht=(0,c.Z)(Nt,Lt,It,!1,null,"1985564a",null),Mt=Ht.exports;d()(Ht,{VDivider:f.Z});var Ut={namespaced:!0,state:{title:"",basePath:"",list:{home:{path:"/home",name:"home",meta:{title:"Home",icon:"home"},component:B},about:{path:"/about",name:"about",meta:{title:"About",icon:"question_mark"},component:Y},new:{path:"/new",name:"new",meta:{title:"New",icon:"event"},component:vt},axios:{path:"/axios",name:"axios",meta:{title:"Axios",icon:"search"},component:xt},signup:{path:"/signup",name:"signup",meta:{title:"Signup",icon:"edit"},component:Ct},login:{path:"/login",name:"login",meta:{title:"Login",icon:"login"},component:Et},deleteuser:{path:"/delete",name:"delete",meta:{title:"DeleteUser",icon:"delete"},component:Mt}}},getters:{title(t){return t.title},basePath(t){return t.basePath},menuList(t){return t.list}},mutations:{setTitle(t,e){t.title=e}},actions:{setTitle({commit:t},e){t("setTitle",e)}}};o.Z.use(r.ZP);var zt=new r.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{page:Ut}});function Bt(){const t=new Array;return Object.entries(zt.getters["page/menuList"]).forEach((([e,n])=>{t.push(n)})),t}function Kt(){return zt.getters["page/basePath"]}o.Z.use(P.Z);const Wt=Bt(),qt=new P.Z({base:Kt(),mode:"history",routes:Wt});qt.beforeEach((function(t,e,n){n()})),qt.afterEach((function(t,e){zt.dispatch("page/setTitle",t.meta.title)}));var Ft=qt,Rt=n(5671);o.Z.use(Rt.Z);var Yt=new Rt.Z({icons:{iconfont:"md"}});o.Z.config.productionTip=!1,new o.Z({router:Ft,vuetify:Yt,store:zt,render:t=>t(C)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.4d6033c9.svg"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue_router_project/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(e&&e(o);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkvue_router_project"]=self["webpackChunkvue_router_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9790)}));o=n.O(o)})();
//# sourceMappingURL=app.94deb670.js.map