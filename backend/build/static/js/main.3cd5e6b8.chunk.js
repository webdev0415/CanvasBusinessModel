(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{213:function(e,n,t){e.exports=t(417)},269:function(e,n){},309:function(e,n){},311:function(e,n){},325:function(e,n){},327:function(e,n){},355:function(e,n){},357:function(e,n){},358:function(e,n){},364:function(e,n){},366:function(e,n){},384:function(e,n){},386:function(e,n){},398:function(e,n){},401:function(e,n){},417:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(21),c=t.n(o),i=(t(218),t(219),t(46)),l=t(12),u=t(209),s=t(16),d=(Object(s.b)((function(e){return{auth:e.auth}}))((function(e){var n=e.component,t=e.auth,a=Object(u.a)(e,["component","auth"]);return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return!0===t.isAuthenticated?r.a.createElement(n,e):r.a.createElement(l.a,{to:"/login"})}}))})),t(3)),f=t(7),p=t(2),m=t(205),b=t.n(m),g=t(206),h=t.n(g),x=t(37),v=t(11),E=t(436),O=t(22),j=t.n(O),y=t(17),w=t.n(y),k=t(33),C=t(18),S=t.n(C),_=t(40),A=function(e){e?S.a.defaults.headers.common.Authorization=e:delete S.a.defaults.headers.common.Authorization},R=t(198),N=t(36),z=t(199),D=t.n(z),L=t(200),P=t(27),T=t(201),I={canvas:[],cur_canvas_id:0,socket:t.n(T)()("".concat(""))};var U=t(22),H={user:[],isAuthenticated:!1,message:""};var M=Object(N.combineReducers)({canvas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CREATE_CANVAS":return e;case"READ_CANVAS":return Object(v.a)(Object(v.a)({},e),{},{canvas:n.payload});case"CUR_CANVAS_ID":return Object(v.a)(Object(v.a)({},e),{},{cur_canvas_id:n.payload});case"READ_PLACEHOLDER":return Object(v.a)(Object(v.a)({},e),{},{canvas_data:n.payload});case"CREATE_PLACEHOLDER":return Object(v.a)(Object(v.a)({},e),{},{canvas_data:[].concat(Object(P.a)(e.canvas_data),[n.payload])});case"SET_PLACEHOLDERS":return Object(v.a)(Object(v.a)({},e),{},{canvas_data:Object(P.a)(n.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SIGNUP_SUCCESS":return e;case"SET_CURRENT_USER":return Object(v.a)(Object(v.a)({},e),{},{isAuthenticated:!U(n.payload),user:n.payload});default:return e}}}),V=Object(N.createStore)(M,Object(L.composeWithDevTools)(Object(N.applyMiddleware)(R.a,D.a))),F=function(e){return function(n){S.a.post("".concat("","/apis/canvas/create/"),n).then((function(n){e({type:"CREATE_CANVAS",payload:n.data}),e({type:"SET_PLACEHOLDERS",payload:[]})})).catch((function(e){return console.log(e)}))}},B=function(e){return function(){S.a.post("".concat("","/apis/canvas/read_all/")).then((function(n){console.log("canvas = ",n.data),e({type:"READ_CANVAS",payload:n.data}),e({type:"CUR_CANVAS_ID",payload:n.data[0].id})})).catch((function(e){return console.log(e)}))}},q=function(e){return function(n){console.log("data = ",n),S.a.post("".concat("","/apis/canvas/read_data"),n).then((function(t){console.log("canvas data = ",t.data),t.data.forEach((function(e){e.isEditing=!1})),e({type:"CUR_CANVAS_ID",payload:n.id}),e({type:"READ_PLACEHOLDER",payload:t.data})})).catch((function(e){return console.log(e)}))}},W=function(e){return function(n){var t=V.getState();S.a.post("".concat("","/apis/canvas/update_data"),n).then((function(n){e({type:"SET_PLACEHOLDERS",payload:n.data}),t.canvas.socket.emit("reload_placeholders")})).catch((function(e){return console.log(e)}))}},X=function(e){return function(n){S.a.post("".concat("","/apis/canvas/delete_data"),n).then((function(n){e({type:"SET_PLACEHOLDERS",payload:n.data})})).catch((function(e){return console.log(e)}))}},G=function(e){return function(n){console.log("set cur canvas id = ",n),e({type:"CUR_CANVAS_ID",payload:n})}},K=function(e){return function(n){console.log("*** canvas data = ",n),S.a.post("".concat("","/apis/canvas/create_placeholder/"),n).then((function(n){e({type:"CREATE_PLACEHOLDER",payload:n.data})})).catch((function(e){return console.log(e)}))}},Y=function(e){return function(){var n=Object(k.a)(w.a.mark((function n(t){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("action call",t),n.next=3,S.a.post("".concat("","/apis/registration/"),t).then((function(n){201===n.status?e({type:"SIGNUP_SUCCESS",payload:n.data}):Promise.reject('Can"t communicate with REST API server ('.concat(n.statusText,")"))})).catch((function(e){return console.log(e)}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},J=function(e){return function(){var n=Object(k.a)(w.a.mark((function n(t){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.a.post("".concat("","/apis/login/"),t).then((function(n){if(200===n.status){var t;n.data.token?t=n.data.token:n.data.key&&(t=n.data.key),localStorage.setItem("jwtToken",t),A(t);var a=Object(_.a)(t);e(Q(a))}else Promise.reject('Can"t communicate with REST API server ('.concat(n.statusText,")"))})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Q=function(e){return{type:"SET_CURRENT_USER",payload:e}},Z=function(e){return function(){localStorage.removeItem("jwtToken"),A(!1),e(Q({}))}};function $(){var e=Object(d.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 40%;\n\ttransform: translate(-50%, -50%);\n\tbackground-color: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 2rem 4rem;\n"]);return $=function(){return e},e}function ee(){var e=Object(d.a)(["\n\tcolor: red;\n"]);return ee=function(){return e},e}function ne(){var e=Object(d.a)(["\n\tpadding: 10px 20px;\n\tcolor: white;\n\tmargin: 20px;\n\n"]);return ne=function(){return e},e}function te(){var e=Object(d.a)(["\n  padding: 10px 20px;\n  color: white;\n  margin: 20px;\n"]);return te=function(){return e},e}function ae(){var e=Object(d.a)(["\n\tpadding: 10px 20px;\n\tcolor: white;\n"]);return ae=function(){return e},e}function re(){var e=Object(d.a)(["\n\tpadding: 10px 20px;\n\tcolor: gray;\n\tborder: 1px solid gray;\n\tmargin-right: 1rem;\n"]);return re=function(){return e},e}function oe(){var e=Object(d.a)(["\n"]);return oe=function(){return e},e}function ce(){var e=Object(d.a)(["\n\n"]);return ce=function(){return e},e}function ie(){var e=Object(d.a)(["\n\n"]);return ie=function(){return e},e}function le(){var e=Object(d.a)(["\n\tmargin-top: 1rem;\n"]);return le=function(){return e},e}function ue(){var e=Object(d.a)(["\n\tmargin-top: 1rem;\n\tfloat: right;\n"]);return ue=function(){return e},e}function se(){var e=Object(d.a)(["\n\n"]);return se=function(){return e},e}var de=p.a.div(se()),fe=p.a.div(ue()),pe=p.a.label(le()),me=p.a.input(ie()),be=p.a.select(ce()),ge=p.a.option(oe()),he=p.a.button(re()),xe=p.a.button(ae()),ve=p.a.button(te()),Ee=(p.a.button(ne()),p.a.span(ee())),Oe=p.a.div($()),je=Object(s.b)((function(e,n){return{open:n.open,setOpen:n.setOpen,history:n.history,socket:e.canvas.socket}}),(function(e){return{createCanvas:F(e)}}))((function(e){var n=e.socket,t=e.open,a=e.setOpen,o=e.history,c=e.createCanvas,i=r.a.useState({name:"",type:""}),l=Object(f.a)(i,2),u=l[0],s=l[1],d=r.a.useState({name:"",type:""}),p=Object(f.a)(d,2),m=p[0],b=p[1],g=function(){a(!1)},h=function(e){s(Object(v.a)(Object(v.a)({},u),{},Object(x.a)({},e.target.id,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{open:t,onClose:g,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement(Oe,null,r.a.createElement(de,{className:"form-group"},r.a.createElement(pe,null,"Name"),r.a.createElement(me,{className:"form-control",id:"name",onChange:h}),r.a.createElement(Ee,null,m.name)),r.a.createElement(de,{className:"form-group"},r.a.createElement(pe,null,"Type"),r.a.createElement(be,{className:"form-control",id:"type",onChange:h},r.a.createElement(ge,null),r.a.createElement(ge,{value:"type1"},"Business Model")),r.a.createElement(Ee,null,m.type)),r.a.createElement(fe,null,r.a.createElement(he,{className:"btn btn-default",onClick:g},"Cancel"),r.a.createElement(xe,{className:"btn btn-primary",onClick:function(e){console.log(),!u.name||j()(u.name)?b({name:"Please input name."}):!u.type||j()(u.type)?b({type:"Please select type."}):(console.log(u),console.log("---",o,typeof o),o.push("/canvas".concat(u.type,"/").concat(u.name)),n.emit("sendMessage","Message"),c(u))}},"Create")))))}));function ye(){var e=Object(d.a)(["\n  border: 1px solid gray;\n  padding: 20px;\n  width: 90%;\n  margin: 0 auto;\n"]);return ye=function(){return e},e}function we(){var e=Object(d.a)(["\n"]);return we=function(){return e},e}var ke=p.a.h1(we()),Ce=p.a.div(ye()),Se=Object(s.b)((function(e,n){return{auth:e.auth,canvas:e.canvas,history:n.history,socket:e.canvas.socket}}),(function(e){return{logoutUser:Z(e),readCanvas:B(e),setCurCanvas:G(e)}}))((function(e){var n=e.socket,t=e.auth,o=e.canvas,c=e.history,i=e.logoutUser,l=e.readCanvas,u=e.setCurCanvas,s=Object(a.useState)(!1),d=Object(f.a)(s,2),p=d[0],m=d[1];Object(a.useEffect)((function(){n.emit("sendMessage","Message"),n.on("refresh",(function(e){l()})),console.log("socket emit")}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null,"Welcome ",t.user.username,"!"),r.a.createElement(ve,{className:"btn btn-primary",onClick:function(e){m(!0)}},r.a.createElement(b.a,null)," Add new"),r.a.createElement(ve,{className:"btn btn-danger",onClick:function(e){e.preventDefault(),i()}},r.a.createElement(h.a,null)," Log out"),r.a.createElement(je,{open:p,setOpen:m,history:c}),o.canvas.map((function(e){return r.a.createElement(Ce,null,r.a.createElement("p",{key:e.id},r.a.createElement("a",{onClick:function(){console.log("clicked = ",e),u(e.id),c.push("/canvas".concat(e.type,"/").concat(e.name))}},e.name)))})))})),_e=t(433),Ae=t(434),Re=t(435);function Ne(){var e=Object(d.a)(["\n  font-size: 12px;\n  margin-left: 5px;\n"]);return Ne=function(){return e},e}function ze(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 5px;\n"]);return ze=function(){return e},e}function De(){var e=Object(d.a)(["\n  border: 1px solid #cdcdcd;\n  flex: 1;\n"]);return De=function(){return e},e}var Le=p.a.div(De()),Pe=p.a.div(ze()),Te=p.a.a(Ne()),Ie=function(e){return r.a.createElement(Le,null,r.a.createElement(Pe,null,e.icon,r.a.createElement(Te,null,e.title)),r.a.createElement("div",{style:{flex:1,width:"100%",height:"100%"}}))},Ue=t(207),He=t.n(Ue),Me=t(431),Ve=t(432);function Fe(){var e=Object(d.a)(["\n  width: 80%;\n  align-self: center;\n  resize: none;\n"]);return Fe=function(){return e},e}function Be(){var e=Object(d.a)(["\n  padding: 10px;\n  font-size: 14px;\n  align-self: center;\n"]);return Be=function(){return e},e}function qe(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  border: 1px solid #000;\n  width: 20px;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"]);return qe=function(){return e},e}function We(){var e=Object(d.a)(["\n  width: 110%;\n  height: 1px;\n  background-color: #cdcdcd;\n  margin-left: -5px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n"]);return We=function(){return e},e}function Xe(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return Xe=function(){return e},e}function Ge(){var e=Object(d.a)(["\n  position: absolute;\n  top: -5px;\n  width: 120px;\n  height: 130px;\n  box-shadow: 1px 1px 5px 0px;\n  display: ",";\n  flex-direction: column;\n  flex: 1;\n  border-radius: 5px;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: white;\n  padding: 5px;\n  overflow: hidden;\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(d.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  margin: 5px;\n  background-color: ",";\n"]);return Ke=function(){return e},e}function Ye(){var e=Object(d.a)(["\n  position: absolute;\n  top: -5px;\n  width: 200px;\n  height: 30px;\n  box-shadow: 1px 1px 5px 0px;\n  display: ",";\n  flex-direction: row;\n  flex: 1;\n  border-radius: 5px;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n"]);return Ye=function(){return e},e}function Je(){var e=Object(d.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 20px;\n  background-color: ",";\n"]);return Je=function(){return e},e}function Qe(){var e=Object(d.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: ",";\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(d.a)(["\n  position: absolute;\n  top: -35px;\n  width: 100px;\n  height: 30px;\n  flex-direction: row;\n  display: ",";\n  border-radius: 5px;\n  background-color: white;\n  margin-bottom: 5px;\n  box-shadow: 1px 1px 5px 0px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(d.a)(["\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  height: 50px;\n  overflow: hidden;\n  resize: none;\n  &:focus {\n    outline-color: #1196f1;\n    outline-width: 2px;\n  }\n"]);return $e=function(){return e},e}function en(){var e=Object(d.a)(["\n  width: ","px;\n  height: ","px;\n  border-radius: 5px;\n  background-color: ",";\n  /* border: ","; */\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  display: flex;\n  &:focus {\n    outline-color: #1196f1;\n    outline-width: 2px;\n  }\n"]);return en=function(){return e},e}var nn=p.a.div(en(),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.background}),(function(e){return e.border})),tn=p.a.textarea($e()),an=p.a.div(Ze(),(function(e){return e.display})),rn=p.a.div(Qe(),(function(e){return e.last?"none":"1px solid #cdcdcd"})),on=p.a.div(Je(),(function(e){return e.color})),cn=p.a.div(Ye(),(function(e){return e.display})),ln=p.a.a(Ke(),(function(e){return e.color})),un=p.a.div(Ge(),(function(e){return e.display})),sn=p.a.div(Xe()),dn=p.a.div(We()),fn=p.a.a(qe(),(function(e){return e.active?"#18b1f6":"white"})),pn=p.a.a(Be()),mn=p.a.textarea(Fe()),bn=function(e){var n=Object(a.useState)(""),t=Object(f.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(e.color),l=Object(f.a)(i,2),u=l[0],s=l[1],d=Object(a.useState)(e.isEditing),p=Object(f.a)(d,2),m=p[0],b=p[1],g=Object(a.useState)(!1),h=Object(f.a)(g,2),x=h[0],v=h[1],E=Object(a.useState)(!1),O=Object(f.a)(E,2),j=O[0],y=O[1],w=Object(a.useState)(!1),k=Object(f.a)(w,2),C=k[0],S=k[1],_=Object(a.useState)(e.data),A=Object(f.a)(_,2),R=A[0],N=A[1],z=Object(a.useState)({x:0,y:0}),D=Object(f.a)(z,2),L=D[0],P=D[1],T=Object(a.useState)(""),I=Object(f.a)(T,2),U=I[0],H=I[1],M=Object(a.useState)(!1),V=Object(f.a)(M,2),F=V[0],B=V[1],q=Object(a.useState)(!1),W=Object(f.a)(q,2),X=W[0],G=W[1],K=Object(a.useRef)(null),Y=Object(a.useRef)(null);Object(a.useEffect)((function(){m&&K.current.focus()}),[K,m]),Object(a.useEffect)((function(){Y.current.focus()}),[Y]);return r.a.createElement(He.a,{axis:"both",position:{x:e.x,y:e.y},grid:[25,25],scale:1,disabled:!!e.isLocked||!!m,bounds:"parent",onStart:function(n){c("1px solid #00ff00"),v(!0),P({x:n.screenX-e.x,y:n.screenY-e.y}),e.setOrder(e.id)},onDrag:function(){},onStop:function(n){c(""),e.onMove(e.id,n.x-L.x,n.y-L.y+70*e.id+203)}},r.a.createElement(nn,{width:20*e.size,height:20*e.size,background:u,style:{zIndex:e.order,position:"relative"},border:o,tabIndex:-1,onClick:function(e){e.stopPropagation()},onContextMenu:function(n){console.log("right clicked"),e.isLocked?G(!0):S(!0),n.preventDefault(),n.stopPropagation()},onDoubleClick:function(n){if(n.stopPropagation(),!e.isLocked){b(!0);var t=setInterval((function(){K&&(K.current.focus(),clearInterval(t))}),100)}},onFocus:function(){},onBlur:function(){F||(v(!1),y(!1),S(!1),G(!1),""===R&&e.onDelete(e.id))}},r.a.createElement(an,{display:X&&e.isLocked?"flex":"none"},r.a.createElement(rn,null,r.a.createElement("p",{onClick:function(){e.setLocked(e.id,!1)},style:{color:"#1196f1"}},"Unlock"))),r.a.createElement(an,{display:x&&!m?"flex":"none"},r.a.createElement(rn,{onClick:function(){B(!0),y(!1),S(!1);var e=setInterval((function(){Y&&(Y.current.focus(),clearInterval(e))}),100)}},r.a.createElement(Me.a,null)),r.a.createElement(rn,{onClick:function(){y(!0),B(!1),S(!1)}},r.a.createElement(on,{color:u})),r.a.createElement(rn,{last:!0,onClick:function(){S(!0),B(!1),y(!1)}},r.a.createElement(Ve.a,null))),r.a.createElement(cn,{display:j?"flex":"none"},r.a.createElement(ln,{color:"#fbea70",onClick:function(){s("#fbea70"),y(!1),e.setColor(e.id,"#fbea70")}}),r.a.createElement(ln,{color:"#ffcd83",onClick:function(){s("#ffcd83"),y(!1),e.setColor(e.id,"#ffcd83")}}),r.a.createElement(ln,{color:"#ffb9ba",onClick:function(){s("#ffb9ba"),y(!1),e.setColor(e.id,"#ffb9ba")}}),r.a.createElement(ln,{color:"#fec9fa",onClick:function(){s("#fec9fa"),y(!1),e.setColor(e.id,"#fec9fa")}}),r.a.createElement(ln,{color:"#8fe7fe",onClick:function(){s("#8fe7fe"),y(!1),e.setColor(e.id,"#8fe7fe")}}),r.a.createElement(ln,{color:"#ccee9d",onClick:function(){s("#ccee9d"),y(!1),e.setColor(e.id,"#ccee9d")}}),r.a.createElement(ln,{color:"#d8dadc",onClick:function(){s("#d8dadc"),y(!1),e.setColor(e.id,"#d8dadc")}})),r.a.createElement(un,{display:C?"flex":"none"},r.a.createElement(sn,null,r.a.createElement(fn,{active:1===e.size,onClick:function(){e.setSize(e.id,1),S(!1)}},"XS"),r.a.createElement(fn,{active:2===e.size,onClick:function(){e.setSize(e.id,2),S(!1)}},"S"),r.a.createElement(fn,{active:3===e.size,onClick:function(){e.setSize(e.id,3),S(!1)}},"M"),r.a.createElement(fn,{active:4===e.size,onClick:function(){e.setSize(e.id,4),S(!1)}},"L"),r.a.createElement(fn,{active:5===e.size,onClick:function(){e.setSize(e.id,5),S(!1)}},"XL")),r.a.createElement(dn,null),r.a.createElement(sn,{onClick:function(){e.setLocked(e.id,!0),v(!1),S(!1)}},r.a.createElement("span",{style:{color:"#1196f1"}},"Lock")),r.a.createElement(sn,{onClick:function(n){e.onDuplicate(e.x,e.y+90,R,!1,e.order+1),v(!1),S(!1)}},r.a.createElement("span",{style:{color:"#1196f1"}},"Duplicate")),r.a.createElement(dn,null),r.a.createElement(sn,{onClick:function(){e.onDelete(e.id),v(!1),S(!1)}},r.a.createElement("span",{style:{color:"#ff3440"}},"Delete"))),r.a.createElement(un,{onBlur:function(){B(!1)},display:F?"flex":"none"},r.a.createElement(pn,null,R),r.a.createElement(mn,{ref:Y,onBlur:function(){B(!1)},defaultValue:U,onChange:function(e){return H(e.target.value)}}),r.a.createElement("button",{style:{alignSelf:"center",marginTop:3},onClick:function(){return B(!1)}},"OK")),m?r.a.createElement(tn,{ref:K,defaultValue:R,onChange:function(e){N(e.target.value)},onBlur:function(){e.setData(e.id,R),b(!1)}}):r.a.createElement("span",null,R)))};function gn(){var e=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]);return gn=function(){return e},e}function hn(){var e=Object(d.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n"]);return hn=function(){return e},e}function xn(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 120vh;\n  height: 90vh;\n  position: relative;\n  margin: 5rem;\n"]);return xn=function(){return e},e}var vn=p.a.div(xn()),En=p.a.div(hn(),(function(e){return e.rows?e.rows:1})),On=p.a.div(gn()),jn={largeIcon:{width:15,height:15}},yn=Object(s.b)((function(e,n){return{canvas_data:e.canvas.canvas_data,cur_canvas_id:e.canvas.cur_canvas_id,socket:e.canvas.socket}}),(function(e){return{createPlaceholder:K(e),readCurCanvasData:q(e),setPlaceholders:W(e),deletePlaceholder:X(e)}}))((function(e){var n=e.socket,t=e.canvas_data,o=e.cur_canvas_id,c=e.readCurCanvasData,i=e.createPlaceholder,l=e.setPlaceholders,u=e.deletePlaceholder,s=Object(a.useState)(1),d=Object(f.a)(s,2),p=d[0],m=d[1],b=Object(a.useState)(),g=Object(f.a)(b,2),h=g[0],x=g[1],v=Object(a.useState)(-1),E=Object(f.a)(v,2),O=E[0],j=E[1],y=Object(a.useRef)(null),C=function(){var e=Object(k.a)(w.a.mark((function e(n,a){var r,c,l,u=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:"",!(u.length>3&&void 0!==u[3])||u[3],console.log("stickers = ",t),c=Object(P.a)(t),m(p+1),l=0,c.forEach((function(e){e.order&&l<e.order&&(l=e.order)})),j(t.length),console.log("*** cur_canvas_id = ",o),e.next=11,i({canvas_id:o,coordinate_x:n,coordinate_y:a-10*(t.length-1),name:r,color:"#fbea70",size:3,lock:!1,isEditing:!0,order:l+1});case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),S=function(e){var n=Object(P.a)(t);console.log("stickers = ",n);var a=0;n.forEach((function(e){e.order&&a<e.order&&(a=e.order)})),console.log("maxOrder = ",a),n[e].order=a+1,l({data:n,id:o})},_=function(e){u({data:t[e],id:o})},A=function(e,n){var a=Object(P.a)(t);a[e].name=n,l({data:a,id:o})},R=function(e,n){var a=Object(P.a)(t);a[e].color=n,l({data:a,id:o})},N=function(e,n){var a=Object(P.a)(t);a[e].size=n,l({data:a,id:o})},z=function(e,n){var a=Object(P.a)(t);a[e].lock=n,l({data:a,id:o})},D=function(e,n,a){var r=Object(P.a)(t),c=y.current.offsetWidth,i=y.current.offsetHeight;r[e].coordinate_x=Math.min(Math.max(0,n),c-80),r[e].coordinate_y=Math.min(Math.max(100,a),i+20),l({data:r,id:o})};return Object(a.useEffect)((function(){console.log("cur_canvas_id = ",o),c({id:o}),n.on("reload",(function(){c({id:o})}))}),[]),Object(a.useEffect)((function(){console.log("parent = ",y.current.getBoundingClientRect());var e=y.current.getBoundingClientRect();x({x:e.x,y:e.y})}),[y]),r.a.createElement(vn,{onDoubleClick:function(e){console.log("x, y = ",e.screenX,e.screenY),C(e.screenX-h.x,e.screenY-h.y)},ref:y},r.a.createElement(En,{rows:2},r.a.createElement(Ie,{title:"Key Partnerships",icon:r.a.createElement(_e.a,{style:jn.largeIcon})}),r.a.createElement(On,null,r.a.createElement(Ie,{title:"Key Activities",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})}),r.a.createElement(Ie,{title:"Key Resources",icon:r.a.createElement(Re.a,{style:jn.largeIcon})})),r.a.createElement(Ie,{title:"Value Propositions",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})}),r.a.createElement(On,null,r.a.createElement(Ie,{title:"Customer Relationships",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})}),r.a.createElement(Ie,{title:"Channels",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})})),r.a.createElement(Ie,{title:"Customer Segments",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})})),r.a.createElement(En,null,r.a.createElement(Ie,{title:"Cost Structure",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})}),r.a.createElement(Ie,{title:"Revenue Streams",icon:r.a.createElement(Ae.a,{style:jn.largeIcon})})),r.a.createElement("div",{style:{position:"absolute",left:0,top:0,width:"120vh",height:"90vh"}},t&&t.map((function(e,n){return r.a.createElement(bn,{x:e.coordinate_x,y:e.coordinate_y-70*(n+1)-30,data:e.name,setData:A,color:e.color,setColor:R,size:e.size,setSize:N,isLocked:e.lock,setLocked:z,isEditing:n==O,order:e.order,setOrder:S,offset:h,onMove:D,onDuplicate:C,onDelete:_,id:n})}))))})),wn=t(76),kn=t.n(wn);function Cn(){var e=Object(d.a)(["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  margin: 0;\n  opacity: 0;\n  margin-bottom:20px;\n  background-color: #3e3e3e;\n"]);return Cn=function(){return e},e}function Sn(){var e=Object(d.a)(["\n  height: 150px;\n  padding: 12px 12px;\n  font: 16px Arial, Helvetica, sans-serif;\n  color: #ccc;\n  outline: none;\n  border: none;\n  text-shadow: 1px 1px 0px #000;\n  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);\n  background-color: #3e3e3e;\n  background: -webkit-gradient(linear, left top, left bottom, from(#545454), to(#3e3e3e));\n  background: -moz-linear-gradient(top, #545454, #3e3e3e);\n  border-radius: 5px;  \n  display: block;\n  width:100%;\n  overflow: auto;\n  vertical-align: top;  \n  \n  margin-top:10px;\n  margin-bottom:20px;\n  "]);return Sn=function(){return e},e}function _n(){var e=Object(d.a)(["\n  flex: 0 0 50%;\n  max-width: 50%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  @media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n"]);return _n=function(){return e},e}function An(){var e=Object(d.a)(["\n  flex: 0 0 50%;\n  max-width: 50%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  @media only screen and (max-width: 768px) {\n  /* For mobile phones: */\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n"]);return An=function(){return e},e}function Rn(){var e=Object(d.a)(["\n  flex: 0 0 100%;\n  max-width: 100%;\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n"]);return Rn=function(){return e},e}function Nn(){var e=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;"]);return Nn=function(){return e},e}function zn(){var e=Object(d.a)(["\n  background-color: #3e3e3e;\n  font: 16px Arial, Helvetica, sans-serif;\n  color: #ccc;\n  outline: none;\n  border: none;\n  padding: 2px 12px;\n  height: 36px;\n  text-shadow: 1px 1px 0px #000;  \n  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);  \n  border-radius: 5px;\n  width: 100%;\n  text-transform: none;\n  box-sizing: border-box;\n  align-items: center;\n  white-space: pre;\n  cursor: default;\n\n  margin-top: 10px;\n  margin-bottom:20px;\n  "]);return zn=function(){return e},e}function Dn(){var e=Object(d.a)(["\n  width:90%;\n"]);return Dn=function(){return e},e}function Ln(){var e=Object(d.a)(["\n  padding: 1px 15px 2px 15px;\n  min-height: 25px;\n  color: white;\n  font-family: Arial;\n  font-size: 13px;\n  font-family: 'Titillium Web', Arial, Helvetica, sans-serif;\n  font-weight: 500;\n  text-decoration: none;\n  text-transform: uppercase;\n  border-radius: 50px;\n  text-shadow: 1px 1px 0px #1a355f;\n  box-shadow: 1px 1px 3px rgba(0,0,0,0.5), inset 0 0 16px rgba(0,0,0,0.5);\n  border: none;\n  border-top: 1px solid rgba(255,255,255,0.3);\n  border-bottom: 1px solid rgba(0,0,0,0.5);\n  background: #2c507a;\n  background: -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681));\n  background: -webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);\n  background: -o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);\n  background: -ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);\n  background: linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%);\n  white-space: nowrap; \n  outline: none;\n  &:hover {\n    cursor: pointer;\n    background: #4d7cb3;\n  }\n"]);return Ln=function(){return e},e}function Pn(){var e=Object(d.a)(["\n  font: 16px Arial, Helvetica, sans-serif;\n  outline: none;\n  height: 36px;\n  border-radius: 5px;\n  font-size: 20px\n  padding-left: 3px;\n  display: block;\n  width:100%;\n  margin-top: 10px;\n  margin-bottom:20px;\n  transition: all 0.15s linear;\n  -webkit-appearance: textfield;\n  background-color: white;\n  -webkit-rtl-ordering: logical;\n  cursor: text;  \n\n\n"]);return Pn=function(){return e},e}function Tn(){var e=Object(d.a)(["\n  font: 14px Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  color: #999;  \n  font-size: 14px;\n  color: #4d4d4d;\n  cursor: pointer;\n  display: block;\n  font-weight: 500;\n  margin-bottom: 3px;\n  text-align: left;\n  "]);return Tn=function(){return e},e}function In(){var e=Object(d.a)(["\n  background-color:black;\n  padding: 10px 10px 10px 10px;\n  background: url(/static/images/striped_bg.gif) repeat;\n"]);return In=function(){return e},e}function Un(){var e=Object(d.a)(["\n    height: 50px;\n    padding-left: 5px;\n    font-size: 16px;\n    color: #fefefe;\n    font-weight: 700;\n    padding-left: 15px;\n    font-family: 'Titillium Web', Arial, Helvetica, sans-serif;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    text-align:left;\n    background-color: #5cb85c;\n    letter-spacing: 1px;\n"]);return Un=function(){return e},e}function Hn(){var e=Object(d.a)(["\n  color: red;\n  font-size: .8rem;\n  float: right;\n\n"]);return Hn=function(){return e},e}function Mn(){var e=Object(d.a)(["\n  border: 1px solid #5cb85c;\n  border-radius: 5px;\n  "]);return Mn=function(){return e},e}function Vn(){var e=Object(d.a)(["\n  background: transparent url(/static/images/striped_bg.gif) repeat center top;\n  background-size: cover;\n  border: 1px solid;\n  height: 0;\n  padding-bottom: 60%;\n  overflow: auto;\n"]);return Vn=function(){return e},e}p.a.div(Vn());var Fn=p.a.div(Mn()),Bn=p.a.span(Hn()),qn=p.a.div(Un()),Wn=p.a.div(In()),Xn=p.a.div(Tn()),Gn=p.a.input(Pn()),Kn=(p.a.button(Ln()),p.a.div(Dn()),p.a.select.attrs({})(zn()),p.a.div(Nn()),p.a.div(Rn()),p.a.div(An()),p.a.div(_n()),p.a.textarea(Sn()),p.a.input.attrs({type:"file"})(Cn()),t(79)),Yn=t.n(Kn),Jn=(t(292),function(){return r.a.createElement(Yn.a,{style:{float:"right",marginLeft:"4px",lineHeight:"10px"},type:"Circles",color:"#00BFFF",height:15,width:15})});function Qn(){var e=Object(d.a)(["\n\tmax-width: 400px;\n\tmargin: 3rem auto;\n"]);return Qn=function(){return e},e}var Zn=p.a.div(Qn()),$n=Object(s.b)((function(e,n){return{auth:e.auth,history:n.history}}),(function(e){return{loginUser:J(e)}}))((function(e){var n=e.auth,t=e.loginUser,a=e.history,o=r.a.useState(!1),c=Object(f.a)(o,2),i=c[0],l=(c[1],r.a.useState({})),u=Object(f.a)(l,2),s=u[0],d=u[1],p=r.a.useState({}),m=Object(f.a)(p,2),b=m[0],g=m[1];r.a.useEffect((function(){var e=localStorage.getItem("jwtToken");if(e){A(e);var n=Object(_.a)(e);V.dispatch(Q(n))}}),[]),r.a.useEffect((function(){n.isAuthenticated&&a.push("dashboard")}),[n.isAuthenticated]);var h=function(e){g(Object(v.a)(Object(v.a)({},b),{},Object(x.a)({},e.target.id,e.target.value)))},E=function(){var e=Object(k.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!b.username||j()(b.username)?d({email:"The field is required"}):!b.password||j()(b.password)?d({password:"The field is required"}):b.username&&!kn()(b.username)?d({email:"No Validate E-mail"}):(console.log("loginParam",b),t(b));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(Zn,null,r.a.createElement(Fn,null,r.a.createElement(qn,{className:"card-header"},"Login"),r.a.createElement(Wn,null,r.a.createElement(Xn,null,"E-mail ",s.email&&r.a.createElement(Bn,null,s.email)),r.a.createElement(Gn,{type:"text",id:"username",className:"form-control",onChange:h}),r.a.createElement(Xn,null,"Password ",s.password&&r.a.createElement(Bn,null,s.password)),r.a.createElement(Gn,{type:"password",id:"password",className:"form-control",onChange:h}),r.a.createElement("p",null,r.a.createElement("a",{href:"/signup"},"Click here")," to Sign Up"),r.a.createElement("center",null,r.a.createElement(xe,{type:"button",className:"btn btn-success",onClick:E},i?r.a.createElement(Jn,null):"Login")),r.a.createElement("a",{type:"button",href:"".concat("","/auth/google/sign"),className:"btn btn-outline-dark btn-block"},"Continue With Google"))))})),et=t(77),nt=t.n(et);function tt(){var e=Object(d.a)(["\n\tmax-width: 400px;\n\tmargin: 3rem auto;\n"]);return tt=function(){return e},e}var at=p.a.div(tt()),rt=Object(s.b)(null,(function(e){return{signupUser:Y(e)}}))((function(e){var n=e.signupUser,t=r.a.useState({}),a=Object(f.a)(t,2),o=a[0],c=a[1],i=r.a.useState({}),l=Object(f.a)(i,2),u=l[0],s=l[1],d=r.a.useState(!1),p=Object(f.a)(d,2),m=p[0],b=(p[1],function(e){c(Object(v.a)(Object(v.a)({},o),{},Object(x.a)({},e.target.id,e.target.value)))}),g=function(){var e=Object(k.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!o.username||j()(o.username)?s({username:"The field is required"}):!o.email||j()(o.email)?s({email:"The field is required"}):o.email&&!kn()(o.email)?s({email:"No Validate E-mail"}):!o.password1||j()(o.password1)?s({password1:"The field is required"}):!o.password2||j()(o.password2)?s({password2:"The field is required"}):o.password1!==o.password2?s({password2:"No match"}):(console.log("signupParam",o),n(o));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(at,null,r.a.createElement(Fn,null,r.a.createElement(qn,{className:"card-header"},"Sign Up"),r.a.createElement(Wn,null,r.a.createElement(Xn,null,"Username ",u.username&&r.a.createElement(Bn,null,u.username)),r.a.createElement(Gn,{type:"text",id:"username",className:"form-control",onChange:b,error:u.username&&!0}),r.a.createElement(Xn,null,"E-mail ",u.email&&r.a.createElement(Bn,null,u.email)),r.a.createElement(Gn,{type:"email",id:"email",className:"form-control",onChange:b,error:u.email&&!0}),r.a.createElement(Xn,null,"Password ",u.password1&&r.a.createElement(Bn,null,u.password1)),r.a.createElement(Gn,{type:"password",id:"password1",className:"form-control",onChange:b,error:u.password1&&!0}),r.a.createElement(Xn,null,"Confirm Password ",u.password2&&r.a.createElement(Bn,null,u.password2)),r.a.createElement(Gn,{type:"password",id:"password2",className:"form-control",onChange:b,error:u.password2&&!0}),r.a.createElement("p",null,r.a.createElement("a",{href:"/login"},"Click here")," to Log In"),r.a.createElement("center",null,r.a.createElement(xe,{type:"submit",className:"btn btn-success",onClick:g},m?r.a.createElement(Jn,null):"Sign Up")))))}));function ot(){var e=Object(d.a)(["\n\n"]);return ot=function(){return e},e}var ct=p.a.div(ot()),it=function(){var e=r.a.useState(!0),n=Object(f.a)(e,2),t=n[0],a=n[1],o=Object(l.g)().id;return console.log("id",o),r.a.useEffect((function(){console.log("effect call"),S.a.post("".concat("","/apis/register/confirm/").concat(o)).then((function(e){a(!1),et.notify.show(e.data.msg)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(nt.a,null),r.a.createElement(ct,null,t?r.a.createElement("span",{className:"spinner-border spinner-border-sm"}):r.a.createElement("div",null,r.a.createElement("p",null,"Your email is confirmed exactly."),r.a.createElement("p",null,"Go to ",r.a.createElement(i.b,{to:"/login"},"Log in.")))))},lt=t(208),ut=t.n(lt),st=(t(307),function(e){return r.a.useEffect((function(){var n=localStorage.getItem("jwtToken");if(console.log("token",n),void 0===e.location.search||n){if(n){A(n);var t=Object(_.a)(n);console.log("decoded",t),V.dispatch(Q(t)),e.history.push("dashboard")}}else{var a=ut.a.parse(e.location.search);if(a.token){window.localStorage.setItem("jwtToken",a.token),A(a.token);var r=a.token,o=Object(_.a)(r);console.log("decoded",o),V.dispatch(Q(o)),e.history.push("dashboard")}}e.history.push("login")}),[]),console.log("props",e),r.a.createElement("div",null,"ahahha")});var dt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:st}),r.a.createElement(l.b,{path:"/login",component:$n}),r.a.createElement(l.b,{path:"/signup",component:rt}),r.a.createElement(l.b,{path:"/dashboard",component:Se}),r.a.createElement(l.b,{path:"/canvastype1/:name",component:yn}),r.a.createElement(l.b,{exact:!0,path:"/register/confirm/:id",component:it}))))};c.a.render(r.a.createElement(s.a,{store:V},r.a.createElement(dt,null)),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.3cd5e6b8.chunk.js.map