import{G as yu,H as Eu,I as Tu,J as Ys,K as vu,M as Rt,N as Iu,O as wu,P as Au,S as Ru,Q as Pu,R as St,T as Vu,U as Tn,V as Su}from"./index-C5k5Gm4v.js";var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Hr=Hr||{},I=Cu||self;function Mn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function $e(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Du(e){return Object.prototype.hasOwnProperty.call(e,dr)&&e[dr]||(e[dr]=++ku)}var dr="closure_uid_"+(1e9*Math.random()>>>0),ku=0;function Nu(e,t,n){return e.call.apply(e.bind,arguments)}function xu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Nu:Z=xu,Z.apply(null,arguments)}function un(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Nt(){this.s=this.s,this.o=this.o}var Mu=0;Nt.prototype.s=!1;Nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Mu!=0)&&Du(this)};Nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Js(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Mn(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function tt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var Ou=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function De(e){return/^[\s\xa0]*$/.test(e)}function On(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return On().indexOf(e)!=-1}function Yr(e){return Yr[" "](e),e}Yr[" "]=function(){};function Lu(e,t){var n=Sh;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var bu=ct("Opera"),ne=ct("Trident")||ct("MSIE"),Wi=ct("Edge"),Ar=Wi||ne,Hi=ct("Gecko")&&!(On().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),Fu=On().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function Xi(){var e=I.document;return e?e.documentMode:void 0}var Rr;t:{var fr="",mr=function(){var e=On();if(Hi)return/rv:([^\);]+)(\)|;)/.exec(e);if(Wi)return/Edge\/([\d\.]+)/.exec(e);if(ne)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Fu)return/WebKit\/(\S+)/.exec(e);if(bu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(mr&&(fr=mr?mr[1]:""),ne){var gr=Xi();if(gr!=null&&gr>parseFloat(fr)){Rr=String(gr);break t}}Rr=fr}var Pr;if(I.document&&ne){var Zs=Xi();Pr=Zs||parseInt(Rr,10)||void 0}else Pr=void 0;var Uu=Pr;function ke(e,t){if(tt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Hi){t:{try{Yr(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:qu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ke.$.h.call(this)}}z(ke,tt);var qu={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Qe="closure_listenable_"+(1e6*Math.random()|0),Bu=0;function ju(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Bu,this.fa=this.ia=!1}function Ln(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Jr(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function zu(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Yi(e){const t={};for(const n in e)t[n]=e[n];return t}const ti="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ji(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<ti.length;i++)n=ti[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function bn(e){this.src=e,this.g={},this.h=0}bn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Sr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ju(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function Vr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Gi(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ln(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Sr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Zr="closure_lm_"+(1e6*Math.random()|0),pr={};function Zi(e,t,n,r,s){if(r&&r.once)return eo(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Zi(e,t[i],n,r,s);return null}return n=ns(n),e&&e[Qe]?e.O(t,n,$e(r)?!!r.capture:!!r,s):to(e,t,n,!1,r,s)}function to(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=$e(s)?!!s.capture:!!s,a=es(e);if(a||(e[Zr]=a=new bn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Ku(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ou||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ro(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ku(){function e(n){return t.call(e.src,e.listener,n)}const t=$u;return e}function eo(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)eo(e,t[i],n,r,s);return null}return n=ns(n),e&&e[Qe]?e.P(t,n,$e(r)?!!r.capture:!!r,s):to(e,t,n,!0,r,s)}function no(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)no(e,t[i],n,r,s);else r=$e(r)?!!r.capture:!!r,n=ns(n),e&&e[Qe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Sr(i,n,r,s),-1<n&&(Ln(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=es(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Sr(t,n,r,s)),(n=-1<e?t[e]:null)&&ts(n))}function ts(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Qe])Vr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ro(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=es(t))?(Vr(n,e),n.h==0&&(n.src=null,t[Zr]=null)):Ln(e)}}}function ro(e){return e in pr?pr[e]:pr[e]="on"+e}function $u(e,t){if(e.fa)e=!0;else{t=new ke(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ts(e),e=n.call(r,t)}return e}function es(e){return e=e[Zr],e instanceof bn?e:null}var _r="__closure_events_fn_"+(1e9*Math.random()>>>0);function ns(e){return typeof e=="function"?e:(e[_r]||(e[_r]=function(t){return e.handleEvent(t)}),e[_r])}function j(){Nt.call(this),this.i=new bn(this),this.S=this,this.J=null}z(j,Nt);j.prototype[Qe]=!0;j.prototype.removeEventListener=function(e,t,n,r){no(this,e,t,n,r)};function W(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new tt(t,e);else if(t instanceof tt)t.target=t.target||e;else{var s=t;t=new tt(r,e),Ji(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=hn(o,r,!0,t)&&s}if(o=t.g=e,s=hn(o,r,!0,t)&&s,s=hn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=hn(o,r,!1,t)&&s}j.prototype.N=function(){if(j.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ln(n[r]);delete e.g[t],e.h--}}this.J=null};j.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};j.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function hn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Vr(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var rs=I.JSON.stringify;class Qu{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Gu(){var e=ss;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wu{constructor(){this.h=this.g=null}add(t,n){const r=so.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var so=new Qu(()=>new Hu,e=>e.reset());class Hu{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xu(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Yu(e){I.setTimeout(()=>{throw e},0)}let Ne,xe=!1,ss=new Wu,io=()=>{const e=I.Promise.resolve(void 0);Ne=()=>{e.then(Ju)}};var Ju=()=>{for(var e;e=Gu();){try{e.h.call(e.g)}catch(n){Yu(n)}var t=so;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1};function Fn(e,t){j.call(this),this.h=e||1,this.g=t||I,this.j=Z(this.qb,this),this.l=Date.now()}z(Fn,j);_=Fn.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(is(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function is(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}_.N=function(){Fn.$.N.call(this),is(this),delete this.g};function os(e,t,n){if(typeof e=="function")n&&(e=Z(e,n));else if(e&&typeof e.handleEvent=="function")e=Z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function oo(e){e.g=os(()=>{e.g=null,e.i&&(e.i=!1,oo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Zu extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:oo(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(e){Nt.call(this),this.h=e,this.g={}}z(Me,Nt);var ei=[];function ao(e,t,n,r){Array.isArray(n)||(n&&(ei[0]=n.toString()),n=ei);for(var s=0;s<n.length;s++){var i=Zi(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function uo(e){Jr(e.g,function(t,n){this.g.hasOwnProperty(n)&&ts(t)},e),e.g={}}Me.prototype.N=function(){Me.$.N.call(this),uo(this)};Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Un(){this.g=!0}Un.prototype.Ea=function(){this.g=!1};function th(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var l=h[0];h=h[1];var c=l.split("_");o=2<=c.length&&c[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function eh(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Jt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+rh(e,n)+(r?" "+r:"")})}function nh(e,t){e.info(function(){return"TIMEOUT: "+t})}Un.prototype.info=function(){};function rh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return rs(n)}catch{return t}}var Kt={},ni=null;function qn(){return ni=ni||new j}Kt.Ta="serverreachability";function ho(e){tt.call(this,Kt.Ta,e)}z(ho,tt);function Oe(e){const t=qn();W(t,new ho(t))}Kt.STAT_EVENT="statevent";function lo(e,t){tt.call(this,Kt.STAT_EVENT,e),this.stat=t}z(lo,tt);function nt(e){const t=qn();W(t,new lo(t,e))}Kt.Ua="timingevent";function co(e,t){tt.call(this,Kt.Ua,e),this.size=t}z(co,tt);function Ge(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Bn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fo={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function as(){}as.prototype.h=null;function ri(e){return e.h||(e.h=e.i())}function mo(){}var We={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function us(){tt.call(this,"d")}z(us,tt);function hs(){tt.call(this,"c")}z(hs,tt);var Cr;function jn(){}z(jn,as);jn.prototype.g=function(){return new XMLHttpRequest};jn.prototype.i=function(){return{}};Cr=new jn;function He(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Me(this),this.P=sh,e=Ar?125:void 0,this.V=new Fn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}var sh=45e3,po={},Dr={};_=He.prototype;_.setTimeout=function(e){this.P=e};function kr(e,t,n){e.L=1,e.A=Kn(wt(t)),e.u=n,e.S=!0,_o(e,null)}function _o(e,t){e.G=Date.now(),Xe(e),e.B=wt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Ro(n.i,"t",r),e.o=0,n=e.l.J,e.h=new go,e.g=Qo(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Zu(Z(e.Pa,e,e.g),e.O)),ao(e.U,e.g,"readystatechange",e.nb),t=e.I?Yi(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Oe(),th(e.j,e.v,e.B,e.m,e.W,e.u)}_.nb=function(e){e=e.target;const t=this.M;t&&dt(e)==3?t.l():this.Pa(e)};_.Pa=function(e){try{if(e==this.g)t:{const l=dt(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>l)&&(l!=3||Ar||this.g&&(this.h.h||this.g.ja()||ai(this.g)))){this.J||l!=4||t==7||(t==8||0>=c?Oe(3):Oe(2)),zn(this);var n=this.g.da();this.ca=n;e:if(yo(this)){var r=ai(this.g);e="";var s=r.length,i=dt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lt(this),Ae(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eh(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!De(a)){var h=a;break e}}h=null}if(n=h)Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nr(this,n);else{this.i=!1,this.s=3,nt(12),Lt(this),Ae(this);break t}}this.S?(Eo(this,l,o),Ar&&this.i&&l==3&&(ao(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,o,null),Nr(this,o)),l==4&&Lt(this),this.i&&!this.J&&(l==4?jo(this.l,this):(this.i=!1,Xe(this)))}else Rh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),Lt(this),Ae(this)}}}catch{}finally{}};function yo(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Eo(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=ih(e,n),s==Dr){t==4&&(e.s=4,nt(14),r=!1),Jt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==po){e.s=4,nt(15),Jt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Jt(e.j,e.m,s,null),Nr(e,s);yo(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,nt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),gs(t),t.M=!0,nt(11))):(Jt(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Ae(e))}_.mb=function(){if(this.g){var e=dt(this.g),t=this.g.ja();this.o<t.length&&(zn(this),Eo(this,e,t),this.i&&e!=4&&Xe(this))}};function ih(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Dr:(n=Number(t.substring(n,r)),isNaN(n)?po:(r+=1,r+n>t.length?Dr:(t=t.slice(r,r+n),e.o=r+n,t)))}_.cancel=function(){this.J=!0,Lt(this)};function Xe(e){e.Y=Date.now()+e.P,To(e,e.P)}function To(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ge(Z(e.lb,e),t)}function zn(e){e.C&&(I.clearTimeout(e.C),e.C=null)}_.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(nh(this.j,this.B),this.L!=2&&(Oe(),nt(17)),Lt(this),this.s=2,Ae(this)):To(this,this.Y-e)};function Ae(e){e.l.H==0||e.J||jo(e.l,e)}function Lt(e){zn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,is(e.V),uo(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Nr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||xr(n.i,e))){if(!e.K&&xr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)wn(n),Wn(n);else break t;ms(n),nt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ge(Z(n.ib,n),6e3));if(1>=So(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else bt(n,11)}else if((e.K||n.g==e)&&wn(n),!De(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const l=h[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const c=h[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const R=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var i=r.i;i.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ls(i,i.h),i.h=null))}if(r.F){const P=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(r.Da=P,N(r.I,r.F,P))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=$o(r,r.J?r.pa:null,r.Y),o.K){Co(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(zn(a),Xe(a)),r.g=o}else qo(r);0<n.j.length&&Hn(n)}else h[0]!="stop"&&h[0]!="close"||bt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?bt(n,7):fs(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Oe(4)}catch{}}function oh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Mn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ah(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Mn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function vo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Mn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ah(e),r=oh(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Io=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function qt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof qt){this.h=e.h,vn(this,e.j),this.s=e.s,this.g=e.g,In(this,e.m),this.l=e.l;var t=e.i,n=new Le;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),si(this,n),this.o=e.o}else e&&(t=String(e).match(Io))?(this.h=!1,vn(this,t[1]||"",!0),this.s=Ee(t[2]||""),this.g=Ee(t[3]||"",!0),In(this,t[4]),this.l=Ee(t[5]||"",!0),si(this,t[6]||"",!0),this.o=Ee(t[7]||"")):(this.h=!1,this.i=new Le(null,this.h))}qt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Te(t,ii,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Te(t,ii,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Te(n,n.charAt(0)=="/"?ch:lh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Te(n,fh)),e.join("")};function wt(e){return new qt(e)}function vn(e,t,n){e.j=n?Ee(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function In(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function si(e,t,n){t instanceof Le?(e.i=t,mh(e.i,e.h)):(n||(t=Te(t,dh)),e.i=new Le(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Kn(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ee(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Te(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,hh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function hh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ii=/[#\/\?@]/g,lh=/[#\?:]/g,ch=/[#\?]/g,dh=/[#\?@]/g,fh=/#/g;function Le(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&uh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=Le.prototype;_.add=function(e,t){xt(this),this.i=null,e=le(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function wo(e,t){xt(e),t=le(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ao(e,t){return xt(e),t=le(e,t),e.g.has(t)}_.forEach=function(e,t){xt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};_.ta=function(){xt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};_.Z=function(e){xt(this);let t=[];if(typeof e=="string")Ao(this,e)&&(t=t.concat(this.g.get(le(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return xt(this),this.i=null,e=le(this,e),Ao(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ro(e,t,n){wo(e,t),0<n.length&&(e.i=null,e.g.set(le(e,t),Xr(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function le(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function mh(e,t){t&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(wo(this,r),Ro(this,s,n))},e)),e.j=t}var gh=class{constructor(e,t){this.g=e,this.map=t}};function Po(e){this.l=e||ph,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ph=10;function Vo(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function So(e){return e.h?1:e.g?e.g.size:0}function xr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ls(e,t){e.g?e.g.add(t):e.h=t}function Co(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Po.prototype.cancel=function(){if(this.i=Do(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Do(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xr(e.i)}var _h=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function yh(){this.g=new _h}function Eh(e,t,n){const r=n||"";try{vo(e,function(s,i){let o=s;$e(s)&&(o=rs(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Th(e,t){const n=new Un;if(I.Image){const r=new Image;r.onload=un(ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=un(ln,n,r,"TestLoadImage: error",!1,t),r.onabort=un(ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=un(ln,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ln(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function $n(e){this.l=e.ec||null,this.j=e.ob||!1}z($n,as);$n.prototype.g=function(){return new Qn(this.l,this.j)};$n.prototype.i=function(e){return function(){return e}}({});function Qn(e,t){j.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=cs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(Qn,j);var cs=0;_=Qn.prototype;_.open=function(e,t){if(this.readyState!=cs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,be(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ye(this)),this.readyState=cs};_.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,be(this)),this.g&&(this.readyState=3,be(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ko(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ko(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}_.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ye(this):be(this),this.readyState==3&&ko(this)}};_.Za=function(e){this.g&&(this.response=this.responseText=e,Ye(this))};_.Ya=function(e){this.g&&(this.response=e,Ye(this))};_.ka=function(){this.g&&Ye(this)};function Ye(e){e.readyState=4,e.l=null,e.j=null,e.A=null,be(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function be(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var vh=I.JSON.parse;function O(e){j.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=No,this.L=this.M=!1}z(O,j);var No="",Ih=/^https?$/i,wh=["POST","PUT"];_=O.prototype;_.Oa=function(e){this.M=e};_.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cr.g(),this.C=this.u?ri(this.u):ri(Cr),this.g.onreadystatechange=Z(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){oi(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&e instanceof I.FormData,!(0<=Gi(wh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Oo(this),0<this.B&&((this.L=Ah(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.ua,this)):this.A=os(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){oi(this,i)}};function Ah(e){return ne&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.ua=function(){typeof Hr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function oi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,xo(e),Gn(e)}function xo(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),Gn(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gn(this,!0)),O.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?Mo(this):this.kb())};_.kb=function(){Mo(this)};function Mo(e){if(e.h&&typeof Hr<"u"&&(!e.C[1]||dt(e)!=4||e.da()!=2)){if(e.v&&dt(e)==4)os(e.La,0,e);else if(W(e,"readystatechange"),dt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Io)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!Ih.test(s?s.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var i=2<dt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",xo(e)}}finally{Gn(e)}}}}function Gn(e,t){if(e.g){Oo(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function Oo(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}_.isActive=function(){return!!this.g};function dt(e){return e.g?e.g.readyState:0}_.da=function(){try{return 2<dt(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),vh(t)}};function ai(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case No:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(e){const t={};e=(e.g&&2<=dt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(De(e[r]))continue;var n=Xu(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}zu(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Lo(e){let t="";return Jr(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ds(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Lo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function pe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function bo(e){this.Ga=0,this.j=[],this.l=new Un,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pe("baseRetryDelayMs",5e3,e),this.hb=pe("retryDelaySeedMs",1e4,e),this.eb=pe("forwardChannelMaxRetries",2,e),this.xa=pe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Po(e&&e.concurrentRequestLimit),this.Ja=new yh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=bo.prototype;_.ra=8;_.H=1;function fs(e){if(Fo(e),e.H==3){var t=e.W++,n=wt(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),Je(e,n),t=new He(e,e.l,t),t.L=2,t.A=Kn(wt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=Qo(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Xe(t)}Ko(e)}function Wn(e){e.g&&(gs(e),e.g.cancel(),e.g=null)}function Fo(e){Wn(e),e.u&&(I.clearTimeout(e.u),e.u=null),wn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Hn(e){if(!Vo(e.i)&&!e.m){e.m=!0;var t=e.Na;Ne||io(),xe||(Ne(),xe=!0),ss.add(t,e),e.C=0}}function Ph(e,t){return So(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ge(Z(e.Na,e,t),zo(e,e.C)),e.C++,!0)}_.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new He(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Yi(i),Ji(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Uo(this,s,t),n=wt(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),Je(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Lo(i)))+"&"+t:this.o&&ds(n,this.o,i)),ls(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,kr(s,n,null)):kr(s,n,t),this.H=2}}else this.H==3&&(e?ui(this,e):this.j.length==0||Vo(this.i)||ui(this))};function ui(e,t){var n;t?n=t.m:n=e.W++;const r=wt(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),Je(e,r),e.o&&e.s&&ds(r,e.o,e.s),n=new He(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Uo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ls(e.i,n),kr(n,r,t)}function Je(e,t){e.na&&Jr(e.na,function(n,r){N(t,r,n)}),e.h&&vo({},function(n,r){N(t,r,n)})}function Uo(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Z(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let h=s[u].g;const l=s[u].map;if(h-=i,0>h)i=Math.max(0,s[u].g-100),a=!1;else try{Eh(l,o,"req"+h+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function qo(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ne||io(),xe||(Ne(),xe=!0),ss.add(t,e),e.A=0}}function ms(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ge(Z(e.Ma,e),zo(e,e.A)),e.A++,!0)}_.Ma=function(){if(this.u=null,Bo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ge(Z(this.jb,this),e)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nt(10),Wn(this),Bo(this))};function gs(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Bo(e){e.g=new He(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=wt(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),Je(e,t),e.o&&e.s&&ds(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Kn(wt(t)),n.u=null,n.S=!0,_o(n,e)}_.ib=function(){this.v!=null&&(this.v=null,Wn(this),ms(this),nt(19))};function wn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function jo(e,t){var n=null;if(e.g==t){wn(e),gs(e),e.g=null;var r=2}else if(xr(e.i,t))n=t.F,Co(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=qn(),W(r,new co(r,n)),Hn(e)}else qo(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Ph(e,t)||r==2&&ms(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:bt(e,5);break;case 4:bt(e,10);break;case 3:bt(e,6);break;default:bt(e,2)}}}function zo(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function bt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Z(e.pb,e);n||(n=new qt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||vn(n,"https"),Kn(n)),Th(n.toString(),r)}else nt(2);e.H=0,e.h&&e.h.za(t),Ko(e),Fo(e)}_.pb=function(e){e?(this.l.info("Successfully pinged google.com"),nt(2)):(this.l.info("Failed to ping google.com"),nt(1))};function Ko(e){if(e.H=0,e.ma=[],e.h){const t=Do(e.i);(t.length!=0||e.j.length!=0)&&(Js(e.ma,t),Js(e.ma,e.j),e.i.i.length=0,Xr(e.j),e.j.length=0),e.h.ya()}}function $o(e,t,n){var r=n instanceof qt?wt(n):new qt(n);if(r.g!="")t&&(r.g=t+"."+r.g),In(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new qt(null);r&&vn(i,r),t&&(i.g=t),s&&In(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),Je(e,r),r}function Qo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new O(new $n({ob:n})):new O(e.va),t.Oa(e.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function Go(){}_=Go.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function An(){if(ne&&!(10<=Number(Uu)))throw Error("Environmental error: no available transport.")}An.prototype.g=function(e,t){return new at(e,t)};function at(e,t){j.call(this),this.g=new bo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!De(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!De(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ce(this)}z(at,j);at.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;nt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=$o(e,null,e.Y),Hn(e)};at.prototype.close=function(){fs(this.g)};at.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=rs(e),e=n);t.j.push(new gh(t.fb++,e)),t.H==3&&Hn(t)};at.prototype.N=function(){this.g.h=null,delete this.j,fs(this.g),delete this.g,at.$.N.call(this)};function Wo(e){us.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(Wo,us);function Ho(){hs.call(this),this.status=1}z(Ho,hs);function ce(e){this.g=e}z(ce,Go);ce.prototype.Ba=function(){W(this.g,"a")};ce.prototype.Aa=function(e){W(this.g,new Wo(e))};ce.prototype.za=function(e){W(this.g,new Ho)};ce.prototype.ya=function(){W(this.g,"b")};function Vh(){this.blockSize=-1}function lt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(lt,Vh);lt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}lt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)yr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){yr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){yr(this,r),s=0;break}}this.h=s,this.i+=t};lt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function D(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Sh={};function ps(e){return-128<=e&&128>e?Lu(e,function(t){return new D([t|0],0>t?-1:0)}):new D([e|0],0>e?-1:0)}function ft(e){if(isNaN(e)||!isFinite(e))return Zt;if(0>e)return Q(ft(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Mr;return new D(t,0)}function Xo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Q(Xo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ft(Math.pow(t,8)),r=Zt,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=ft(Math.pow(t,i)),r=r.R(i).add(ft(o))):(r=r.R(n),r=r.add(ft(o)))}return r}var Mr=4294967296,Zt=ps(0),Or=ps(1),hi=ps(16777216);_=D.prototype;_.ea=function(){if(ut(this))return-Q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Mr+r)*t,t*=Mr}return e};_.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(ut(this))return"-"+Q(this).toString(e);for(var t=ft(Math.pow(e,6)),n=this,r="";;){var s=Pn(n,t).g;n=Rn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,It(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};_.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ut(e){return e.h==-1}_.X=function(e){return e=Rn(this,e),ut(e)?-1:It(e)?0:1};function Q(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new D(n,~e.h).add(Or)}_.abs=function(){return ut(this)?Q(this):this};_.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new D(n,n[n.length-1]&-2147483648?-1:0)};function Rn(e,t){return e.add(Q(t))}_.R=function(e){if(It(this)||It(e))return Zt;if(ut(this))return ut(e)?Q(this).R(Q(e)):Q(Q(this).R(e));if(ut(e))return Q(this.R(Q(e)));if(0>this.X(hi)&&0>e.X(hi))return ft(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,cn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,cn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,cn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,cn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new D(n,0)};function cn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _e(e,t){this.g=e,this.h=t}function Pn(e,t){if(It(t))throw Error("division by zero");if(It(e))return new _e(Zt,Zt);if(ut(e))return t=Pn(Q(e),t),new _e(Q(t.g),Q(t.h));if(ut(t))return t=Pn(e,Q(t)),new _e(Q(t.g),t.h);if(30<e.g.length){if(ut(e)||ut(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Or,r=t;0>=r.X(e);)n=li(n),r=li(r);var s=Wt(n,1),i=Wt(r,1);for(r=Wt(r,2),n=Wt(n,2);!It(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Wt(r,1),n=Wt(n,1)}return t=Rn(e,s.R(t)),new _e(s,t)}for(s=Zt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ft(n),o=i.R(t);ut(o)||0<o.X(e);)n-=r,i=ft(n),o=i.R(t);It(i)&&(i=Or),s=s.add(i),e=Rn(e,o)}return new _e(s,e)}_.gb=function(e){return Pn(this,e).h};_.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new D(n,this.h&e.h)};_.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new D(n,this.h|e.h)};_.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new D(n,this.h^e.h)};function li(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new D(n,e.h)}function Wt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new D(s,e.h)}An.prototype.createWebChannel=An.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;Bn.NO_ERROR=0;Bn.TIMEOUT=8;Bn.HTTP_ERROR=6;fo.COMPLETE="complete";mo.EventType=We;We.OPEN="a";We.CLOSE="b";We.ERROR="c";We.MESSAGE="d";j.prototype.listen=j.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;lt.prototype.digest=lt.prototype.l;lt.prototype.reset=lt.prototype.reset;lt.prototype.update=lt.prototype.j;D.prototype.add=D.prototype.add;D.prototype.multiply=D.prototype.R;D.prototype.modulo=D.prototype.gb;D.prototype.compare=D.prototype.X;D.prototype.toNumber=D.prototype.ea;D.prototype.toString=D.prototype.toString;D.prototype.getBits=D.prototype.D;D.fromNumber=ft;D.fromString=Xo;var Ch=function(){return new An},Dh=function(){return qn()},Er=Bn,kh=fo,Nh=Kt,ci={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dn=mo,xh=O,Mh=lt,te=D;const di="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let de="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new yu("@firebase/firestore");function ye(){return Bt.logLevel}function p(e,...t){if(Bt.logLevel<=Rt.DEBUG){const n=t.map(_s);Bt.debug(`Firestore (${de}): ${e}`,...n)}}function _t(e,...t){if(Bt.logLevel<=Rt.ERROR){const n=t.map(_s);Bt.error(`Firestore (${de}): ${e}`,...n)}}function re(e,...t){if(Bt.logLevel<=Rt.WARN){const n=t.map(_s);Bt.warn(`Firestore (${de}): ${e}`,...n)}}function _s(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){const t=`FIRESTORE (${de}) INTERNAL ASSERTION FAILED: `+e;throw _t(t),new Error(t)}function k(e,t){e||v()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends vu{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bh{constructor(t){this.t=t,this.currentUser=Y.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new Yo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return k(t===null||typeof t=="string"),new Y(t)}}class Fh{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uh{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Fh(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(k(typeof n.token=="string"),this.R=n.token,new qh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=jh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function C(e,t){return e<t?-1:e>t?1:0}function se(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new q(0,0))}static max(){return new w(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,n,r){n===void 0?n=0:n>t.length&&v(),r===void 0?r=t.length-n:r>t.length-n&&v(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Fe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Fe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends Fe{construct(t,n,r){return new x(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new x(n)}static emptyPath(){return new x([])}}const zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends Fe{construct(t,n,r){return new G(t,n,r)}static isValidIdentifier(t){return zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(n)}static emptyPath(){return new G([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(x.fromString(t))}static fromName(t){return new E(x.fromString(t).popFirst(5))}static empty(){return new E(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new x(t.slice()))}}function Kh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=w.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new Ct(s,E.empty(),t)}function $h(e){return new Ct(e.readTime,e.key,-1)}class Ct{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ct(w.min(),E.empty(),-1)}static max(){return new Ct(w.max(),E.empty(),-1)}}function Qh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:C(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Gh)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(s=>s?f.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new f((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const h=u;n(t[h]).next(l=>{o[h]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new f((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new mt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Re(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Es(r.target.error);this.V.reject(new Re(t,s))}}static open(t,n,r,s){try{return new ys(n,t.transaction(s,r))}catch(i){throw new Re(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Xh(n)}}class Ft{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Ft.S(Tn())===12.2&&_t("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Ot(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Su())return!1;if(Ft.C())return!0;const t=Tn(),n=Ft.S(t),r=0<n&&n<10,s=Ft.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Re(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Re(t,o))},s.onupgradeneeded=i=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=ys.open(this.db,t,i?"readonly":"readwrite",r),u=s(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),f.reject(h))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,h=u.name!=="FirebaseError"&&o<3;if(p("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Hh{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ot(this.k.delete())}}class Re extends y{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function tn(e){return e.name==="IndexedDbTransactionError"}class Xh{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(p("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Ot(r)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Ot(this.store.add(t))}get(t){return Ot(this.store.get(t)).next(n=>(n===void 0&&(n=null),p("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Ot(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Ot(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new f((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new f((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){p("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new f((r,s)=>{n.onerror=i=>{const o=Es(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new f((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new Hh(a),h=n(a.primaryKey,a.value,u);if(h instanceof f){const l=h.catch(c=>(u.done(),f.reject(c)));r.push(l)}u.isDone?s():u.$===null?a.continue():a.continue(u.$)}}).next(()=>f.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Ot(e){return new f((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Es(r.target.error);n(s)}})}let fi=!1;function Es(e){const t=Ft.S(Tn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fi||(fi=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Ts._e=-1;function Xn(e){return e==null}function Vn(e){return e===0&&1/e==-1/0}function Yh(e){return typeof e=="number"&&Number.isInteger(e)&&!Vn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $t(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Zo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,n){this.comparator=t,this.root=n||$.EMPTY}insert(t,n){return new M(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new M(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fn(this.root,t,this.comparator,!0)}}class fn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??$.RED,this.left=s??$.EMPTY,this.right=i??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new $(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return $.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,n,r,s,i){return this}insert(t,n,r){return new $(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.comparator=t,this.data=new M(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new gi(this.data.getIterator())}getIteratorFrom(t){return new gi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof H)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new H(this.comparator);return n.data=t,n}}class gi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new ot([])}unionWith(t){let n=new H(G.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return se(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ta("Invalid base64 string: "+i):i}}(t);return new et(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new et(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}et.EMPTY_BYTE_STRING=new et("");const Jh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(e){if(k(!!e),typeof e=="string"){let t=0;const n=Jh.exec(e);if(k(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function jt(e){return typeof e=="string"?et.fromBase64String(e):et.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Is(e){const t=e.mapValue.fields.__previous_value__;return vs(t)?Is(t):t}function Ue(e){const t=Dt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,n,r,s,i,o,a,u,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class qe{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vs(e)?4:tl(e)?9007199254740991:10:v()}function yt(e,t){if(e===t)return!0;const n=zt(e);if(n!==zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ue(e).isEqual(Ue(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dt(s.timestampValue),a=Dt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return jt(s.bytesValue).isEqual(jt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return F(s.geoPointValue.latitude)===F(i.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return F(s.integerValue)===F(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=F(s.doubleValue),a=F(i.doubleValue);return o===a?Vn(o)===Vn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return se(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(mi(o)!==mi(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!yt(o[u],a[u])))return!1;return!0}(e,t);default:return v()}}function Be(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ie(e,t){if(e===t)return 0;const n=zt(e),r=zt(t);if(n!==r)return C(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=F(i.integerValue||i.doubleValue),u=F(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return pi(e.timestampValue,t.timestampValue);case 4:return pi(Ue(e),Ue(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(i,o){const a=jt(i),u=jt(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const l=C(a[h],u[h]);if(l!==0)return l}return C(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=C(F(i.latitude),F(o.latitude));return a!==0?a:C(F(i.longitude),F(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const l=ie(a[h],u[h]);if(l)return l}return C(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===mn.mapValue&&o===mn.mapValue)return 0;if(i===mn.mapValue)return 1;if(o===mn.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),h=o.fields||{},l=Object.keys(h);u.sort(),l.sort();for(let c=0;c<u.length&&c<l.length;++c){const d=C(u[c],l[c]);if(d!==0)return d;const g=ie(a[u[c]],h[l[c]]);if(g!==0)return g}return C(u.length,l.length)}(e.mapValue,t.mapValue);default:throw v()}}function pi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const n=Dt(e),r=Dt(t),s=C(n.seconds,r.seconds);return s!==0?s:C(n.nanos,r.nanos)}function oe(e){return Lr(e)}function Lr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Dt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return jt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Lr(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Lr(n.fields[o])}`;return s+"}"}(e.mapValue):v()}function br(e){return!!e&&"integerValue"in e}function ws(e){return!!e&&"arrayValue"in e}function _i(e){return!!e&&"nullValue"in e}function yi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pn(e){return!!e&&"mapValue"in e}function Pe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $t(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Pe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Pe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.value=t}static empty(){return new rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!pn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pe(n)}setAll(t){let n=G.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Pe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());pn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];pn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){$t(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new rt(Pe(this.value))}}function ea(e){const t=[];return $t(e.fields,(n,r)=>{const s=new G([n]);if(pn(r)){const i=ea(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new J(t,0,w.min(),w.min(),w.min(),rt.empty(),0)}static newFoundDocument(t,n,r,s){return new J(t,1,n,w.min(),r,s,0)}static newNoDocument(t,n){return new J(t,2,n,w.min(),w.min(),rt.empty(),0)}static newUnknownDocument(t,n){return new J(t,3,n,w.min(),w.min(),rt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof J&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new J(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,n){this.position=t,this.inclusive=n}}function Ei(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ie(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ti(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,n="asc"){this.field=t,this.dir=n}}function el(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{}class U extends na{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new rl(t,n,r):n==="array-contains"?new ol(t,r):n==="in"?new al(t,r):n==="not-in"?new ul(t,r):n==="array-contains-any"?new hl(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new sl(t,r):new il(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ie(n,this.value)):n!==null&&zt(this.value)===zt(n)&&this.matchesComparison(ie(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Et extends na{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Et(t,n)}matches(t){return ra(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ra(e){return e.op==="and"}function sa(e){return nl(e)&&ra(e)}function nl(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function Fr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+oe(e.value);if(sa(e))return e.filters.map(t=>Fr(t)).join(",");{const t=e.filters.map(n=>Fr(n)).join(",");return`${e.op}(${t})`}}function ia(e,t){return e instanceof U?function(r,s){return s instanceof U&&r.op===s.op&&r.field.isEqual(s.field)&&yt(r.value,s.value)}(e,t):e instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ia(o,s.filters[a]),!0):!1}(e,t):void v()}function oa(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${oe(n.value)}`}(e):e instanceof Et?function(n){return n.op.toString()+" {"+n.getFilters().map(oa).join(" ,")+"}"}(e):"Filter"}class rl extends U{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class sl extends U{constructor(t,n){super(t,"in",n),this.keys=aa("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class il extends U{constructor(t,n){super(t,"not-in",n),this.keys=aa("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function aa(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class ol extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ws(n)&&Be(n.arrayValue,this.value)}}class al extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Be(this.value.arrayValue,n)}}class ul extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(Be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Be(this.value.arrayValue,n)}}class hl extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ws(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Be(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function vi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new ll(e,t,n,r,s,i,o)}function As(e){const t=A(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Fr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>oe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>oe(r)).join(",")),t.ce=n}return t.ce}function Rs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!el(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!ia(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ti(e.startAt,t.startAt)&&Ti(e.endAt,t.endAt)}function Ur(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function cl(e,t,n,r,s,i,o,a){return new Yn(e,t,n,r,s,i,o,a)}function Ps(e){return new Yn(e)}function Ii(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function dl(e){return e.collectionGroup!==null}function Ve(e){const t=A(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new H(G.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Cn(i,r))}),n.has(G.keyField().canonicalString())||t.le.push(new Cn(G.keyField(),r))}return t.le}function gt(e){const t=A(e);return t.he||(t.he=fl(t,Ve(e))),t.he}function fl(e,t){if(e.limitType==="F")return vi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Cn(s.field,i)});const n=e.endAt?new Sn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Sn(e.startAt.position,e.startAt.inclusive):null;return vi(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function qr(e,t,n){return new Yn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Jn(e,t){return Rs(gt(e),gt(t))&&e.limitType===t.limitType}function ua(e){return`${As(gt(e))}|lt:${e.limitType}`}function Ht(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>oa(s)).join(", ")}]`),Xn(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>oe(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>oe(s)).join(",")),`Target(${r})`}(gt(e))}; limitType=${e.limitType})`}function Zn(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ve(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const h=Ei(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,Ve(r),s)||r.endAt&&!function(o,a,u){const h=Ei(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,Ve(r),s))}(e,t)}function ml(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ha(e){return(t,n)=>{let r=!1;for(const s of Ve(e)){const i=gl(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gl(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),h=a.data.field(i);return u!==null&&h!==null?ie(u,h):v()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){$t(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Zo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new M(E.comparator);function At(){return pl}const la=new M(E.comparator);function ve(...e){let t=la;for(const n of e)t=t.insert(n.key,n);return t}function ca(e){let t=la;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ut(){return Se()}function da(){return Se()}function Se(){return new fe(e=>e.toString(),(e,t)=>e.isEqual(t))}const _l=new M(E.comparator),yl=new H(E.comparator);function V(...e){let t=yl;for(const n of e)t=t.add(n);return t}const El=new H(C);function Tl(){return El}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function ma(e){return{integerValue:""+e}}function ga(e,t){return Yh(t)?ma(t):fa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this._=void 0}}function vl(e,t,n){return e instanceof Dn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vs(i)&&(i=Is(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof je?_a(e,t):e instanceof ze?ya(e,t):function(s,i){const o=pa(s,i),a=wi(o)+wi(s.Ie);return br(o)&&br(s.Ie)?ma(a):fa(s.serializer,a)}(e,t)}function Il(e,t,n){return e instanceof je?_a(e,t):e instanceof ze?ya(e,t):n}function pa(e,t){return e instanceof Ke?function(r){return br(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Dn extends tr{}class je extends tr{constructor(t){super(),this.elements=t}}function _a(e,t){const n=Ea(t);for(const r of e.elements)n.some(s=>yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ze extends tr{constructor(t){super(),this.elements=t}}function ya(e,t){let n=Ea(t);for(const r of e.elements)n=n.filter(s=>!yt(s,r));return{arrayValue:{values:n}}}class Ke extends tr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function wi(e){return F(e.integerValue||e.doubleValue)}function Ea(e){return ws(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,n){this.field=t,this.transform=n}}function Al(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof je&&s instanceof je||r instanceof ze&&s instanceof ze?se(r.elements,s.elements,yt):r instanceof Ke&&s instanceof Ke?yt(r.Ie,s.Ie):r instanceof Dn&&s instanceof Dn}(e.transform,t.transform)}class Rl{constructor(t,n){this.version=t,this.transformResults=n}}class ht{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ht}static exists(t){return new ht(void 0,t)}static updateTime(t){return new ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _n(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class er{}function Ta(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ia(e.key,ht.none()):new en(e.key,e.data,ht.none());{const n=e.data,r=rt.empty();let s=new H(G.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mt(e.key,r,new ot(s.toArray()),ht.none())}}function Pl(e,t,n){e instanceof en?function(s,i,o){const a=s.value.clone(),u=Ri(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Mt?function(s,i,o){if(!_n(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ri(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(va(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ce(e,t,n,r){return e instanceof en?function(i,o,a,u){if(!_n(i.precondition,o))return a;const h=i.value.clone(),l=Pi(i.fieldTransforms,u,o);return h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Mt?function(i,o,a,u){if(!_n(i.precondition,o))return a;const h=Pi(i.fieldTransforms,u,o),l=o.data;return l.setAll(va(i)),l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,o,a){return _n(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Vl(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=pa(r.transform,s||null);i!=null&&(n===null&&(n=rt.empty()),n.set(r.field,i))}return n||null}function Ai(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&se(r,s,(i,o)=>Al(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class en extends er{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mt extends er{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function va(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ri(e,t,n){const r=new Map;k(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Il(o,a,n[s]))}return r}function Pi(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vl(i,o,t))}return r}class Ia extends er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sl extends er{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Pl(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ce(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ce(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=da();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=Ta(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),V())}isEqual(t){return this.batchId===t.batchId&&se(this.mutations,t.mutations,(n,r)=>Ai(n,r))&&se(this.baseMutations,t.baseMutations,(n,r)=>Ai(n,r))}}class Vs{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){k(t.mutations.length===r.length);let s=function(){return _l}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vs(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b,S;function Nl(e){switch(e){default:return v();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function wa(e){if(e===void 0)return _t("GRPC error has no .code"),m.UNKNOWN;switch(e){case b.OK:return m.OK;case b.CANCELLED:return m.CANCELLED;case b.UNKNOWN:return m.UNKNOWN;case b.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case b.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case b.INTERNAL:return m.INTERNAL;case b.UNAVAILABLE:return m.UNAVAILABLE;case b.UNAUTHENTICATED:return m.UNAUTHENTICATED;case b.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case b.NOT_FOUND:return m.NOT_FOUND;case b.ALREADY_EXISTS:return m.ALREADY_EXISTS;case b.PERMISSION_DENIED:return m.PERMISSION_DENIED;case b.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case b.ABORTED:return m.ABORTED;case b.OUT_OF_RANGE:return m.OUT_OF_RANGE;case b.UNIMPLEMENTED:return m.UNIMPLEMENTED;case b.DATA_LOSS:return m.DATA_LOSS;default:return v()}}(S=b||(b={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new te([4294967295,4294967295],0);function Vi(e){const t=xl().encode(e),n=new Mh;return n.update(t),new Uint8Array(n.digest())}function Si(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new te([n,r],0),new te([s,i],0)]}class Ss{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ie(`Invalid padding: ${n}`);if(r<0)throw new Ie(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ie(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ie(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=te.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(te.fromNumber(r)));return s.compare(Ml)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Vi(t),[r,s]=Si(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ss(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Vi(t),[r,s]=Si(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ie extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new nr(w.min(),s,new M(C),At(),V())}}class nn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new nn(r,n,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Aa{constructor(t,n){this.targetId=t,this.fe=n}}class Ra{constructor(t,n,r=et.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ci{constructor(){this.ge=0,this.pe=ki(),this.ye=et.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=V(),n=V(),r=V();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:v()}}),new nn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=ki()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,k(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Ol{constructor(t){this.Be=t,this.ke=new Map,this.qe=At(),this.Qe=Di(),this.Ke=new M(C)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:v()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ur(i))if(r===0){const o=new E(i.path);this.We(n,o,J.newNoDocument(o,w.min()))}else k(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=jt(r).toUint8Array()}catch(u){if(u instanceof ta)return re("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ss(o,s,i)}catch(u){return re(u instanceof Ie?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ur(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,J.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=V();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new nr(t,n,this.Ke,this.qe,r);return this.qe=At(),this.Qe=Di(),this.Ke=new M(C),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ci,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new H(C),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||p("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Ci),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function Di(){return new M(E.comparator)}function ki(){return new M(E.comparator)}const Ll={asc:"ASCENDING",desc:"DESCENDING"},bl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fl={and:"AND",or:"OR"};class Ul{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Br(e,t){return e.useProto3Json||Xn(t)?t:{value:t}}function kn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Pa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ql(e,t){return kn(e,t.toTimestamp())}function pt(e){return k(!!e),w.fromTimestamp(function(n){const r=Dt(n);return new q(r.seconds,r.nanos)}(e))}function Cs(e,t){return jr(e,t).canonicalString()}function jr(e,t){const n=function(s){return new x(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Va(e){const t=x.fromString(e);return k(Na(t)),t}function zr(e,t){return Cs(e.databaseId,t.path)}function Tr(e,t){const n=Va(t);if(n.get(1)!==e.databaseId.projectId)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Ca(n))}function Sa(e,t){return Cs(e.databaseId,t)}function Bl(e){const t=Va(e);return t.length===4?x.emptyPath():Ca(t)}function Kr(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ca(e){return k(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ni(e,t,n){return{name:zr(e,t),fields:n.value.mapValue.fields}}function jl(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:v()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,l){return h.useProto3Json?(k(l===void 0||typeof l=="string"),et.fromBase64String(l||"")):(k(l===void 0||l instanceof Uint8Array),et.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const l=h.code===void 0?m.UNKNOWN:wa(h.code);return new y(l,h.message||"")}(o);n=new Ra(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tr(e,r.document.name),i=pt(r.document.updateTime),o=r.document.createTime?pt(r.document.createTime):w.min(),a=new rt({mapValue:{fields:r.document.fields}}),u=J.newFoundDocument(s,i,o,a),h=r.targetIds||[],l=r.removedTargetIds||[];n=new yn(h,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Tr(e,r.document),i=r.readTime?pt(r.readTime):w.min(),o=J.newNoDocument(s,i),a=r.removedTargetIds||[];n=new yn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Tr(e,r.document),i=r.removedTargetIds||[];n=new yn([],i,s,null)}else{if(!("filter"in t))return v();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new kl(s,i),a=r.targetId;n=new Aa(a,o)}}return n}function zl(e,t){let n;if(t instanceof en)n={update:Ni(e,t.key,t.value)};else if(t instanceof Ia)n={delete:zr(e,t.key)};else if(t instanceof Mt)n={update:Ni(e,t.key,t.data),updateMask:Jl(t.fieldMask)};else{if(!(t instanceof Sl))return v();n={verify:zr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Dn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof je)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ze)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ke)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw v()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ql(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:v()}(e,t.precondition)),n}function Kl(e,t){return e&&e.length>0?(k(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?pt(s.updateTime):pt(i);return o.isEqual(w.min())&&(o=pt(i)),new Rl(o,s.transformResults||[])}(n,t))):[]}function $l(e,t){return{documents:[Sa(e,t.path)]}}function Ql(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sa(e,s);const i=function(h){if(h.length!==0)return ka(Et.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(l=>function(d){return{field:Xt(d.field),direction:Hl(d.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Br(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:n,parent:s}}function Gl(e){let t=Bl(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){k(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(c){const d=Da(c);return d instanceof Et&&sa(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(d=>function(R){return new Cn(Yt(R.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Xn(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(c){const d=!!c.before,g=c.values||[];return new Sn(g,d)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const d=!c.before,g=c.values||[];return new Sn(g,d)}(n.endAt)),cl(t,s,o,i,a,"F",u,h)}function Wl(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Da(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yt(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yt(n.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yt(n.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yt(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(e):e.fieldFilter!==void 0?function(n){return U.create(Yt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Et.create(n.compositeFilter.filters.map(r=>Da(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return v()}}(n.compositeFilter.op))}(e):v()}function Hl(e){return Ll[e]}function Xl(e){return bl[e]}function Yl(e){return Fl[e]}function Xt(e){return{fieldPath:e.canonicalString()}}function Yt(e){return G.fromServerFormat(e.fieldPath)}function ka(e){return e instanceof U?function(n){if(n.op==="=="){if(yi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NAN"}};if(_i(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yi(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NAN"}};if(_i(n.value))return{unaryFilter:{field:Xt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(n.field),op:Xl(n.op),value:n.value}}}(e):e instanceof Et?function(n){const r=n.getFilters().map(s=>ka(s));return r.length===1?r[0]:{compositeFilter:{op:Yl(n.op),filters:r}}}(e):v()}function Jl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Na(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,s,i=w.min(),o=w.min(),a=et.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t){this.ct=t}}function tc(e){const t=Gl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?qr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this._n=new nc}addToCollectionParentIndex(t,n){return this._n.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Ct.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Ct.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class nc{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new H(x.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new H(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ae(0)}static Ln(){return new ae(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.changes=new fe(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,J.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ce(r.mutation,s,ot.empty(),q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,V()).next(()=>r))}getLocalViewOfDocuments(t,n,r=V()){const s=Ut();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=ve();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ut();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,V()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=At();const o=Se(),a=function(){return Se()}();return n.forEach((u,h)=>{const l=r.get(h.key);s.has(h.key)&&(l===void 0||l.mutation instanceof Mt)?i=i.insert(h.key,h):l!==void 0?(o.set(h.key,l.mutation.getFieldMask()),Ce(l.mutation,h,l.mutation.getFieldMask(),q.now())):o.set(h.key,ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,l)=>o.set(h,l)),n.forEach((h,l)=>{var c;return a.set(h,new sc(l,(c=o.get(h))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Se();let s=new M((o,a)=>o-a),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let l=r.get(u)||ot.empty();l=a.applyToLocalView(h,l),r.set(u,l);const c=(s.get(a.batchId)||V()).add(u);s=s.insert(a.batchId,c)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,l=u.value,c=da();l.forEach(d=>{if(!i.has(d)){const g=Ta(n.get(d),r.get(d));g!==null&&c.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,c))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):dl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):f.resolve(Ut());let a=-1,u=i;return o.next(h=>f.forEach(h,(l,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,V())).next(l=>({batchId:a,changes:ca(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=ve();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=ve();return this.indexManager.getCollectionParents(t,i).next(a=>f.forEach(a,u=>{const h=function(c,d){return new Yn(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(l=>{l.forEach((c,d)=>{o=o.insert(c,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const l=h.getKey();o.get(l)===null&&(o=o.insert(l,J.newInvalidDocument(l)))});let a=ve();return o.forEach((u,h)=>{const l=i.get(u);l!==void 0&&Ce(l.mutation,h,ot.empty(),q.now()),Zn(n,h)&&(a=a.insert(u,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return f.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pt(s.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:tc(s.bundledQuery),readTime:pt(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.overlays=new M(E.comparator),this.hr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ut();return f.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const s=Ut(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return f.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new M((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let l=i.get(h.largestBatchId);l===null&&(l=Ut(),i=i.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=Ut(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=s)););return f.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dl(n,r));let i=this.hr.get(n);i===void 0&&(i=V(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.Pr=new H(B.Ir),this.Tr=new H(B.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new B(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new B(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new x([])),r=new B(n,t),s=new B(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new x([])),r=new B(n,t),s=new B(n,t+1);let i=V();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new B(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class B{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||C(t.pr,n.pr)}static Er(t,n){return C(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new H(B.Ir)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cl(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new B(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new B(n,0),s=new B(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new H(C);return n.forEach(s=>{const i=new B(s,0),o=new B(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),f.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new B(new E(i),0);let a=new H(C);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(u.pr)),!0)},o),f.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){k(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return f.forEach(n.mutations,s=>{const i=new B(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new B(n,0),s=this.wr.firstAfterOrEqual(r);return f.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this.vr=t,this.docs=function(){return new M(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():J.newInvalidDocument(n))}getEntries(t,n){let r=At();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():J.newInvalidDocument(s))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=At();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:l}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Qh($h(l),r)<=0||(s.has(l.key)||Zn(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(t,n,r,s){v()}Fr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new lc(this)}getSize(t){return f.resolve(this.size)}}class lc extends rc{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.persistence=t,this.Mr=new fe(n=>As(n),Rs),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ds,this.targetCount=0,this.Lr=ae.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),f.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new ae(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.qn(n),f.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),f.waitFor(i).next(()=>s)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,n){this.Br={},this.overlays={},this.kr=new Ts(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new cc(this),this.indexManager=new ec,this.remoteDocumentCache=function(s){return new hc(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Zl(n),this.$r=new oc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ac,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new uc(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){p("MemoryPersistence","Starting transaction:",t);const s=new fc(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class fc extends Wh{constructor(t){super(),this.currentSequenceNumber=t}}class ks{constructor(t){this.persistence=t,this.zr=new Ds,this.jr=null}static Hr(t){return new ks(t)}get Jr(){if(this.jr)return this.jr;throw v()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),f.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,w.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return f.or([()=>f.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=V(),s=V();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ns(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Vu()?8:Ft.v(Tn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new mc;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(ye()<=Rt.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",Ht(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),f.resolve()):(ye()<=Rt.DEBUG&&p("QueryEngine","Query:",Ht(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(ye()<=Rt.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",Ht(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,gt(n))):f.resolve())}ji(t,n){if(Ii(n))return f.resolve(null);let r=gt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qr(n,null,"F"),r=gt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=V(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Zi(n,a);return this.Xi(n,h,o,u.readTime)?this.ji(t,qr(n,null,"F")):this.es(t,h,n,u)}))})))}Hi(t,n,r,s){return Ii(n)||s.isEqual(w.min())?f.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?f.resolve(null):(ye()<=Rt.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ht(n)),this.es(t,o,n,Kh(s,-1)).next(a=>a))})}Zi(t,n){let r=new H(ha(t));return n.forEach((s,i)=>{Zn(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return ye()<=Rt.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Ht(n)),this.zi.getDocumentsMatchingQuery(t,n,Ct.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new M(C),this.rs=new fe(i=>As(i),Rs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ic(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function _c(e,t,n,r){return new pc(e,t,n,r)}async function xa(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=V();for(const h of s){o.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}for(const h of i){a.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function yc(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,h,l){const c=h.batch,d=c.keys();let g=f.resolve();return d.forEach(R=>{g=g.next(()=>l.getEntry(u,R)).next(P=>{const T=h.docVersions.get(R);k(T!==null),P.version.compareTo(T)<0&&(c.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),l.addEntry(P)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,c))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=V();for(let h=0;h<a.mutationResults.length;++h)a.mutationResults[h].transformResults.length>0&&(u=u.add(a.batch.mutations[h].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ma(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Ec(e,t){const n=A(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,c)=>{const d=s.get(c);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,c).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,c)));let g=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(c)!==null?g=g.withResumeToken(et.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(c,g),function(P,T,L){return P.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(d,g,l)&&a.push(n.Qr.updateTargetData(i,g))});let u=At(),h=V();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Tc(i,o,t.documentUpdates).next(l=>{u=l.cs,h=l.ls})),!r.isEqual(w.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(c=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.ns=s,i))}function Tc(e,t,n){let r=V(),s=V();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=At();return n.forEach((a,u)=>{const h=i.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(w.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):p("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:s}})}function vc(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Ic(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,f.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function $r(e,t,n){const r=A(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!tn(o))throw o;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function xi(e,t,n){const r=A(e);let s=w.min(),i=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,l){const c=A(u),d=c.rs.get(l);return d!==void 0?f.resolve(c.ns.get(d)):c.Qr.getTargetData(h,l)}(r,o,gt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:w.min(),n?i:V())).next(a=>(wc(r,ml(t),a),{documents:a,hs:i})))}function wc(e,t,n){let r=e.ss.get(t)||w.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Mi{constructor(){this.activeTargetIds=Tl()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ac{constructor(){this.no=new Mi,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Mi,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gn=null;function vr(){return gn===null?gn=function(){return 268435456+Math.round(2147483648*Math.random())}():gn++,"0x"+gn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class Sc extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=vr(),u=this.bo(n,r.toUriEncodedString());p("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,i,o),this.Co(n,u,h,s).then(l=>(p("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw re("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+de}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Pc[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=vr();return new Promise((o,a)=>{const u=new xh;u.setWithCredentials(!0),u.listenOnce(kh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Er.NO_ERROR:const l=u.getResponseJson();p(X,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Er.TIMEOUT:p(X,`RPC '${t}' ${i} timed out`),a(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case Er.HTTP_ERROR:const c=u.getStatus();if(p(X,`RPC '${t}' ${i} failed with status:`,c,"response text:",u.getResponseText()),c>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const R=function(T){const L=T.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(L)>=0?L:m.UNKNOWN}(g.status);a(new y(R,g.message))}else a(new y(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(m.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p(X,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);p(X,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Fo(t,n,r){const s=vr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Ch(),a=Dh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");p(X,`Creating RPC '${t}' stream ${s}: ${l}`,u);const c=o.createWebChannel(l,u);let d=!1,g=!1;const R=new Vc({lo:T=>{g?p(X,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(d||(p(X,`Opening RPC '${t}' stream ${s} transport.`),c.open(),d=!0),p(X,`RPC '${t}' stream ${s} sending:`,T),c.send(T))},ho:()=>c.close()}),P=(T,L,K)=>{T.listen(L,it=>{try{K(it)}catch(vt){setTimeout(()=>{throw vt},0)}})};return P(c,dn.EventType.OPEN,()=>{g||p(X,`RPC '${t}' stream ${s} transport opened.`)}),P(c,dn.EventType.CLOSE,()=>{g||(g=!0,p(X,`RPC '${t}' stream ${s} transport closed`),R.Vo())}),P(c,dn.EventType.ERROR,T=>{g||(g=!0,re(X,`RPC '${t}' stream ${s} transport errored:`,T),R.Vo(new y(m.UNAVAILABLE,"The operation could not be completed")))}),P(c,dn.EventType.MESSAGE,T=>{var L;if(!g){const K=T.data[0];k(!!K);const it=K,vt=it.error||((L=it[0])===null||L===void 0?void 0:L.error);if(vt){p(X,`RPC '${t}' stream ${s} received error:`,vt);const on=vt.status;let Gt=function(_u){const Xs=b[_u];if(Xs!==void 0)return wa(Xs)}(on),an=vt.message;Gt===void 0&&(Gt=m.INTERNAL,an="Unknown error status: "+on+" with message "+vt.message),g=!0,R.Vo(new y(Gt,an)),c.close()}else p(X,`RPC '${t}' stream ${s} received:`,K),R.mo(K)}}),P(a,Nh.STAT_EVENT,T=>{T.stat===ci.PROXY?p(X,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===ci.NOPROXY&&p(X,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function Ir(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e){return new Ul(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,n,r,s,i,o,a,u){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Oa(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(_t(n.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cc extends La{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=jl(this.serializer,t),r=function(i){if(!("targetChange"in i))return w.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?pt(o.readTime):w.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Kr(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Ur(u)?{documents:$l(i,u)}:{query:Ql(i,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Pa(i,o.resumeToken);const h=Br(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=kn(i,o.snapshotVersion.toTimestamp());const h=Br(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=Wl(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Kr(this.serializer),n.removeTarget=t,this.t_(n)}}class Dc extends La{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(k(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=Kl(t.writeResults,t.commitTime),r=pt(t.commitTime);return this.listener.T_(r,n)}return k(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Kr(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>zl(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,jr(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,jr(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Nc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(_t(n),this.g_=!1):p("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Qt(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=A(u);h.v_.add(4),await rn(h),h.x_.set("Unknown"),h.v_.delete(4),await sr(h)}(this))})}),this.x_=new Nc(r,s)}}async function sr(e){if(Qt(e))for(const t of e.F_)await t(!0)}async function rn(e){for(const t of e.F_)await t(!1)}function ba(e,t){const n=A(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Ls(n)?Os(n):me(n).Jo()&&Ms(n,t))}function xs(e,t){const n=A(e),r=me(n);n.C_.delete(t),r.Jo()&&Fa(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Qt(n)&&n.x_.set("Unknown"))}function Ms(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}me(e).c_(t)}function Fa(e,t){e.O_.Oe(t),me(e).l_(t)}function Os(e){e.O_=new Ol({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),me(e).start(),e.x_.p_()}function Ls(e){return Qt(e)&&!me(e).Ho()&&e.C_.size>0}function Qt(e){return A(e).v_.size===0}function Ua(e){e.O_=void 0}async function Mc(e){e.C_.forEach((t,n)=>{Ms(e,t)})}async function Oc(e,t){Ua(e),Ls(e)?(e.x_.S_(t),Os(e)):e.x_.set("Unknown")}async function Lc(e,t,n){if(e.x_.set("Online"),t instanceof Ra&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Nn(e,r)}else if(t instanceof yn?e.O_.$e(t):t instanceof Aa?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(w.min()))try{const r=await Ma(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.C_.get(h);l&&i.C_.set(h,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const l=i.C_.get(u);if(!l)return;i.C_.set(u,l.withResumeToken(et.EMPTY_BYTE_STRING,l.snapshotVersion)),Fa(i,u);const c=new Pt(l.target,u,h,l.sequenceNumber);Ms(i,c)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){p("RemoteStore","Failed to raise snapshot:",r),await Nn(e,r)}}async function Nn(e,t,n){if(!tn(t))throw t;e.v_.add(1),await rn(e),e.x_.set("Offline"),n||(n=()=>Ma(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await sr(e)})}function qa(e,t){return t().catch(n=>Nn(e,n,t))}async function ir(e){const t=A(e),n=kt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;bc(t);)try{const s=await vc(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Fc(t,s)}catch(s){await Nn(t,s)}Ba(t)&&ja(t)}function bc(e){return Qt(e)&&e.D_.length<10}function Fc(e,t){e.D_.push(t);const n=kt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Ba(e){return Qt(e)&&!kt(e).Ho()&&e.D_.length>0}function ja(e){kt(e).start()}async function Uc(e){kt(e).d_()}async function qc(e){const t=kt(e);for(const n of e.D_)t.I_(n.mutations)}async function Bc(e,t,n){const r=e.D_.shift(),s=Vs.from(r,t,n);await qa(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ir(e)}async function jc(e,t){t&&kt(e).P_&&await async function(r,s){if(function(o){return Nl(o)&&o!==m.ABORTED}(s.code)){const i=r.D_.shift();kt(r).Zo(),await qa(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ir(r)}}(e,t),Ba(e)&&ja(e)}async function Li(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Qt(n);n.v_.add(3),await rn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await sr(n)}async function zc(e,t){const n=A(e);t?(n.v_.delete(2),await sr(n)):t||(n.v_.add(2),await rn(n),n.x_.set("Unknown"))}function me(e){return e.N_||(e.N_=function(n,r,s){const i=A(n);return i.R_(),new Cc(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Mc.bind(null,e),To:Oc.bind(null,e),u_:Lc.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Ls(e)?Os(e):e.x_.set("Unknown")):(await e.N_.stop(),Ua(e))})),e.N_}function kt(e){return e.L_||(e.L_=function(n,r,s){const i=A(n);return i.R_(),new Dc(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Uc.bind(null,e),To:jc.bind(null,e),E_:qc.bind(null,e),T_:Bc.bind(null,e)}),e.F_.push(async t=>{t?(e.L_.Zo(),await ir(e)):(await e.L_.stop(),e.D_.length>0&&(p("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new bs(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fs(e,t){if(_t("AsyncQueue",`${t}: ${e}`),tn(e))return new y(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=ve(),this.sortedSet=new M(this.comparator)}static emptySet(t){return new ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ee;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.B_=new M(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):v():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ue{constructor(t,n,r,s,i,o,a,u,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ue(t,n,ee.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Jn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class $c{constructor(){this.queries=new fe(t=>ua(t),Jn),this.onlineState="Unknown",this.W_=new Set}}async function za(e,t){const n=A(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new Kc,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Fs(o,`Initialization of query '${Ht(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&Us(n)}async function Ka(e,t){const n=A(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Qc(e,t){const n=A(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Us(n)}function Gc(e,t,n){const r=A(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Us(e){e.W_.forEach(t=>{t.next()})}var Qr,Fi;(Fi=Qr||(Qr={})).j_="default",Fi.Cache="cache";class $a{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ue(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=ue.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Qr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t){this.key=t}}class Ga{constructor(t){this.key=t}}class Wc{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=V(),this.mutatedKeys=V(),this.ha=ha(t),this.Pa=new ee(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new bi,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,c)=>{const d=s.get(l),g=Zn(this.query,c)?c:null,R=!!d&&this.mutatedKeys.has(d.key),P=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;d&&g?d.data.isEqual(g.data)?R!==P&&(r.track({type:3,doc:g}),T=!0):this.da(d,g)||(r.track({type:2,doc:g}),T=!0,(u&&this.ha(g,u)>0||h&&this.ha(g,h)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),T=!0):d&&!g&&(r.track({type:1,doc:d}),T=!0,(u||h)&&(a=!0)),T&&(g?(o=o.add(g),i=P?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,c)=>function(g,R){const P=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return P(g)-P(R)}(l.type,c.type)||this.ha(l.doc,c.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],u=this.la.size===0&&this.current&&!s?1:0,h=u!==this.ca;return this.ca=u,o.length!==0||h?{snapshot:new ue(this.query,t.Pa,i,o,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new bi,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=V(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Ga(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Qa(r))}),n}fa(t){this.ua=t.hs,this.la=V();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return ue.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Hc{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Xc{constructor(t){this.key=t,this.pa=!1}}class Yc{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new fe(a=>ua(a),Jn),this.Sa=new Map,this.ba=new Set,this.Da=new M(E.comparator),this.Ca=new Map,this.va=new Ds,this.Fa={},this.Ma=new Map,this.xa=ae.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Jc(e,t,n=!0){const r=Za(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Wa(r,t,n,!0),s}async function Zc(e,t){const n=Za(e);await Wa(n,t,!0,!1)}async function Wa(e,t,n,r){const s=await Ic(e.localStore,gt(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await td(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&ba(e.remoteStore,s),a}async function td(e,t,n,r,s){e.Na=(c,d,g)=>async function(P,T,L,K){let it=T.view.Ta(L);it.Xi&&(it=await xi(P.localStore,T.query,!1).then(({documents:an})=>T.view.Ta(an,it)));const vt=K&&K.targetChanges.get(T.targetId),on=K&&K.targetMismatches.get(T.targetId)!=null,Gt=T.view.applyChanges(it,P.isPrimaryClient,vt,on);return qi(P,T.targetId,Gt.Va),Gt.snapshot}(e,c,d,g);const i=await xi(e.localStore,t,!0),o=new Wc(t,i.hs),a=o.Ta(i.documents),u=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=o.applyChanges(a,e.isPrimaryClient,u);qi(e,n,h.Va);const l=new Hc(t,n,o);return e.wa.set(t,l),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),h.snapshot}async function ed(e,t,n){const r=A(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Jn(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await $r(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xs(r.remoteStore,s.targetId),Gr(r,s.targetId)}).catch(Ze)):(Gr(r,s.targetId),await $r(r.localStore,s.targetId,!0))}async function nd(e,t){const n=A(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xs(n.remoteStore,r.targetId))}async function rd(e,t,n){const r=ld(e);try{const s=await function(o,a){const u=A(o),h=q.now(),l=a.reduce((g,R)=>g.add(R.key),V());let c,d;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=At(),P=V();return u.os.getEntries(g,l).next(T=>{R=T,R.forEach((L,K)=>{K.isValidDocument()||(P=P.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,R)).next(T=>{c=T;const L=[];for(const K of a){const it=Vl(K,c.get(K.key).overlayedDocument);it!=null&&L.push(new Mt(K.key,it,ea(it.value.mapValue),ht.exists(!0)))}return u.mutationQueue.addMutationBatch(g,h,L,a)}).next(T=>{d=T;const L=T.applyToLocalDocumentSet(c,P);return u.documentOverlayCache.saveOverlays(g,T.batchId,L)})}).then(()=>({batchId:d.batchId,changes:ca(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let h=o.Fa[o.currentUser.toKey()];h||(h=new M(C)),h=h.insert(a,u),o.Fa[o.currentUser.toKey()]=h}(r,s.batchId,n),await sn(r,s.changes),await ir(r.remoteStore)}catch(s){const i=Fs(s,"Failed to persist write");n.reject(i)}}async function Ha(e,t){const n=A(e);try{const r=await Ec(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(k(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?k(o.pa):s.removedDocuments.size>0&&(k(o.pa),o.pa=!1))}),await sn(n,r,t)}catch(r){await Ze(r)}}function Ui(e,t,n){const r=A(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=A(o);u.onlineState=a;let h=!1;u.queries.forEach((l,c)=>{for(const d of c.Q_)d.G_(a)&&(h=!0)}),h&&Us(u)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function sd(e,t,n){const r=A(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new M(E.comparator);o=o.insert(i,J.newNoDocument(i,w.min()));const a=V().add(i),u=new nr(w.min(),new Map,new M(C),o,a);await Ha(r,u),r.Da=r.Da.remove(i),r.Ca.delete(t),qs(r)}else await $r(r.localStore,t,!1).then(()=>Gr(r,t,n)).catch(Ze)}async function id(e,t){const n=A(e),r=t.batch.batchId;try{const s=await yc(n.localStore,t);Ya(n,r,null),Xa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sn(n,s)}catch(s){await Ze(s)}}async function od(e,t,n){const r=A(e);try{const s=await function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let l;return u.mutationQueue.lookupMutationBatch(h,a).next(c=>(k(c!==null),l=c.keys(),u.mutationQueue.removeMutationBatch(h,c))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,l)).next(()=>u.localDocuments.getDocuments(h,l))})}(r.localStore,t);Ya(r,t,n),Xa(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await sn(r,s)}catch(s){await Ze(s)}}function Xa(e,t){(e.Ma.get(t)||[]).forEach(n=>{n.resolve()}),e.Ma.delete(t)}function Ya(e,t,n){const r=A(e);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Fa[r.currentUser.toKey()]=s}}function Gr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Ja(e,r)})}function Ja(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(xs(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),qs(e))}function qi(e,t,n){for(const r of n)r instanceof Qa?(e.va.addReference(r.key,t),ad(e,r)):r instanceof Ga?(p("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Ja(e,r.key)):v()}function ad(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(p("SyncEngine","New document in limbo: "+n),e.ba.add(r),qs(e))}function qs(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new E(x.fromString(t)),r=e.xa.next();e.Ca.set(r,new Xc(n)),e.Da=e.Da.insert(n,r),ba(e.remoteStore,new Pt(gt(Ps(n.path)),r,"TargetPurposeLimboResolution",Ts._e))}}async function sn(e,t,n){const r=A(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){s.push(h);const l=Ns.Ki(u.targetId,h);i.push(l)}}))}),await Promise.all(o),r.ya.u_(s),await async function(u,h){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>f.forEach(h,d=>f.forEach(d.qi,g=>l.persistence.referenceDelegate.addReference(c,d.targetId,g)).next(()=>f.forEach(d.Qi,g=>l.persistence.referenceDelegate.removeReference(c,d.targetId,g)))))}catch(c){if(!tn(c))throw c;p("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const d=c.targetId;if(!c.fromCache){const g=l.ns.get(d),R=g.snapshotVersion,P=g.withLastLimboFreeSnapshotVersion(R);l.ns=l.ns.insert(d,P)}}}(r.localStore,i))}async function ud(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const r=await xa(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(m.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await sn(n,r.us)}}function hd(e,t){const n=A(e),r=n.Ca.get(t);if(r&&r.pa)return V().add(r.key);{let s=V();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Za(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ha.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sd.bind(null,t),t.ya.u_=Qc.bind(null,t.eventManager),t.ya.La=Gc.bind(null,t.eventManager),t}function ld(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=id.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=od.bind(null,t),t}class Bi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return _c(this.persistence,new gc,t.initialUser,this.serializer)}createPersistence(t){return new dc(ks.Hr,this.serializer)}createSharedClientState(t){return new Ac}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ui(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ud.bind(null,this.syncEngine),await zc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $c}()}createDatastore(t){const n=rr(t.databaseInfo.databaseId),r=function(i){return new Sc(i)}(t.databaseInfo);return function(i,o,a,u){return new kc(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new xc(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Ui(this.syncEngine,n,0),function(){return Oi.D()?new Oi:new Rc}())}createSyncEngine(t,n){return function(s,i,o,a,u,h,l){const c=new Yc(s,i,o,a,u,h);return l&&(c.Oa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=A(r);p("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await rn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):_t("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Y.UNAUTHENTICATED,this.clientId=Jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{p("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(p("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Fs(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function wr(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xa(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ji(e,t){e.asyncQueue.verifyOperationInProgress();const n=await md(e);p("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Li(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Li(t.remoteStore,s)),e._onlineComponents=t}function fd(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function md(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await wr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!fd(n))throw n;re("Error using user provided cache. Falling back to memory cache: "+n),await wr(e,new Bi)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await wr(e,new Bi);return e._offlineComponents}async function eu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await ji(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await ji(e,new cd))),e._onlineComponents}function gd(e){return eu(e).then(t=>t.syncEngine)}async function nu(e){const t=await eu(e),n=t.eventManager;return n.onListen=Jc.bind(null,t.syncEngine),n.onUnlisten=ed.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Zc.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=nd.bind(null,t.syncEngine),n}function pd(e,t,n={}){const r=new mt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const l=new tu({next:d=>{o.enqueueAndForget(()=>Ka(i,c));const g=d.docs.has(a);!g&&d.fromCache?h.reject(new y(m.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&u&&u.source==="server"?h.reject(new y(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(d)},error:d=>h.reject(d)}),c=new $a(Ps(a.path),l,{includeMetadataChanges:!0,ta:!0});return za(i,c)}(await nu(e),e.asyncQueue,t,n,r)),r.promise}function _d(e,t,n={}){const r=new mt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const l=new tu({next:d=>{o.enqueueAndForget(()=>Ka(i,c)),d.fromCache&&u.source==="server"?h.reject(new y(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(d)},error:d=>h.reject(d)}),c=new $a(a,l,{includeMetadataChanges:!0,ta:!0});return za(i,c)}(await nu(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e,t,n){if(!n)throw new y(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function yd(e,t,n,r){if(t===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ki(e){if(!E.isDocumentKey(e))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function $i(e){if(E.isDocumentKey(e))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Bs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":v()}function Tt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bs(e);throw new y(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}yd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ru((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class or{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qi(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oh;switch(r.type){case"firstParty":return new Uh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zi.get(n);r&&(p("ComponentProvider","Removing Datastore"),zi.delete(n),r.terminate())}(this),Promise.resolve()}}function Ed(e,t,n,r={}){var s;const i=(e=Tt(e,or))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Y.MOCK_USER;else{a=Pu(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Y(h)}e._authCredentials=new Lh(new Yo(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ar(this.firestore,t,this._query)}}class st{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new st(this.firestore,t,this._key)}}class Vt extends ar{constructor(t,n,r){super(t,n,Ps(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new st(this.firestore,null,new E(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function Ud(e,t,...n){if(e=St(e),su("collection","path",t),e instanceof or){const r=x.fromString(t,...n);return $i(r),new Vt(e,null,r)}{if(!(e instanceof st||e instanceof Vt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return $i(r),new Vt(e.firestore,null,r)}}function Td(e,t,...n){if(e=St(e),arguments.length===1&&(t=Jo.newId()),su("doc","path",t),e instanceof or){const r=x.fromString(t,...n);return Ki(r),new st(e,null,new E(r))}{if(!(e instanceof st||e instanceof Vt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(x.fromString(t,...n));return Ki(r),new st(e.firestore,e instanceof Vt?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Oa(this,"async_queue_retry"),this.cu=()=>{const n=Ir();n&&p("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Ir();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=Ir();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new mt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!tn(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=bs.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&v()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class ge extends or{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new vd}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iu(this),this._firestoreClient.terminate()}}function qd(e,t){const n=typeof e=="object"?e:Iu(),r=typeof e=="string"?e:t||"(default)",s=wu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Au("firestore");i&&Ed(s,...i)}return s}function js(e){return e._firestoreClient||iu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iu(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,h,l){return new Zh(a,u,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ru(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new dd(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(et.fromBase64String(t))}catch(n){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new he(et.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=/^__.*__$/;class wd{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Mt(t,this.data,this.fieldMask,n,this.fieldTransforms):new en(t,this.data,n,this.fieldTransforms)}}class ou{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Mt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function au(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Ks{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return xn(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(au(this.Vu)&&Id.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Ad{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||rr(t)}Cu(t,n,r,s=!1){return new Ks({Vu:t,methodName:n,Du:r,path:G.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $s(e){const t=e._freezeSettings(),n=rr(e._databaseId);return new Ad(e._databaseId,!!t.ignoreUndefinedProperties,n)}function uu(e,t,n,r,s,i={}){const o=e.Cu(i.merge||i.mergeFields?2:0,t,n,s);Gs("Data must be an object, but it was:",o,r);const a=hu(r,o);let u,h;if(i.merge)u=new ot(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const c of i.mergeFields){const d=Wr(t,c,n);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cu(l,d)||l.push(d)}u=new ot(l),h=o.fieldTransforms.filter(c=>u.covers(c.field))}else u=null,h=o.fieldTransforms;return new wd(new rt(a),u,h)}class lr extends hr{_toFieldTransform(t){if(t.Vu!==2)throw t.Vu===1?t.Su(`${this._methodName}() can only appear at the top level of your update data`):t.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof lr}}class Qs extends hr{constructor(t,n){super(t),this.Fu=n}_toFieldTransform(t){const n=new Ke(t.serializer,ga(t.serializer,this.Fu));return new wl(t.path,n)}isEqual(t){return t instanceof Qs&&this.Fu===t.Fu}}function Rd(e,t,n,r){const s=e.Cu(1,t,n);Gs("Data must be an object, but it was:",s,r);const i=[],o=rt.empty();$t(r,(u,h)=>{const l=Ws(t,u,n);h=St(h);const c=s.yu(l);if(h instanceof lr)i.push(l);else{const d=cr(h,c);d!=null&&(i.push(l),o.set(l,d))}});const a=new ot(i);return new ou(o,a,s.fieldTransforms)}function Pd(e,t,n,r,s,i){const o=e.Cu(1,t,n),a=[Wr(t,r,n)],u=[s];if(i.length%2!=0)throw new y(m.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Wr(t,i[d])),u.push(i[d+1]);const h=[],l=rt.empty();for(let d=a.length-1;d>=0;--d)if(!cu(h,a[d])){const g=a[d];let R=u[d];R=St(R);const P=o.yu(g);if(R instanceof lr)h.push(g);else{const T=cr(R,P);T!=null&&(h.push(g),l.set(g,T))}}const c=new ot(h);return new ou(l,c,o.fieldTransforms)}function cr(e,t){if(lu(e=St(e)))return Gs("Unsupported field value:",t,e),hu(e,t);if(e instanceof hr)return function(r,s){if(!au(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=cr(a,s.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=St(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ga(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=q.fromDate(r);return{timestampValue:kn(s.serializer,i)}}if(r instanceof q){const i=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:kn(s.serializer,i)}}if(r instanceof zs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof he)return{bytesValue:Pa(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Cs(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Bs(r)}`)}(e,t)}function hu(e,t){const n={};return Zo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$t(e,(r,s)=>{const i=cr(s,t.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof zs||e instanceof he||e instanceof st||e instanceof hr)}function Gs(e,t,n){if(!lu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Bs(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function Wr(e,t,n){if((t=St(t))instanceof ur)return t._internalPath;if(typeof t=="string")return Ws(e,t);throw xn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vd=new RegExp("[~\\*/\\[\\]]");function Ws(e,t,n){if(t.search(Vd)>=0)throw xn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ur(...t.split("."))._internalPath}catch{throw xn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function xn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(m.INVALID_ARGUMENT,a+e+u)}function cu(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Sd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(fu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sd extends du{data(){return super.data()}}function fu(e,t){return typeof t=="string"?Ws(e,t):t instanceof ur?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dd{convertValue(t,n="none"){switch(zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw v()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return $t(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new zs(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Is(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ue(t));default:return null}}convertTimestamp(t){const n=Dt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=x.fromString(t);k(Na(r));const s=new qe(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gu extends du{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new En(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(fu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class En extends gu{data(t={}){return super.data(t)}}class kd{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new we(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new En(this._firestore,this._userDataWriter,r.key,r,new we(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new En(s._firestore,s._userDataWriter,a.doc.key,a.doc,new we(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new En(s._firestore,s._userDataWriter,a.doc.key,a.doc,new we(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,l=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Nd(a.type),doc:u,oldIndex:h,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Nd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e){e=Tt(e,st);const t=Tt(e.firestore,ge);return pd(js(t),e._key).then(n=>xd(t,e,n))}class pu extends Dd{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new st(this.firestore,null,n)}}function jd(e){e=Tt(e,ar);const t=Tt(e.firestore,ge),n=js(t),r=new pu(t);return Cd(e._query),_d(n,e._query).then(s=>new kd(t,r,e,s))}function zd(e,t,n){e=Tt(e,st);const r=Tt(e.firestore,ge),s=mu(e.converter,t,n);return Hs(r,[uu($s(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,ht.none())])}function Kd(e,t,n,...r){e=Tt(e,st);const s=Tt(e.firestore,ge),i=$s(s);let o;return o=typeof(t=St(t))=="string"||t instanceof ur?Pd(i,"updateDoc",e._key,t,n,r):Rd(i,"updateDoc",e._key,t),Hs(s,[o.toMutation(e._key,ht.exists(!0))])}function $d(e,t){const n=Tt(e.firestore,ge),r=Td(e),s=mu(e.converter,t);return Hs(n,[uu($s(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,ht.exists(!1))]).then(()=>r)}function Hs(e,t){return function(r,s){const i=new mt;return r.asyncQueue.enqueueAndForget(async()=>rd(await gd(r),s,i)),i.promise}(js(e),t)}function xd(e,t,n){const r=n.docs.get(t._key),s=new pu(e);return new gu(e,s,t._key,r,new we(n.hasPendingWrites,n.fromCache),t.converter)}function Qd(e){return new Qs("increment",e)}(function(t,n=!0){(function(s){de=s})(Ru),Eu(new Tu("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ge(new bh(r.getProvider("auth-internal")),new Bh(r.getProvider("app-check-internal")),function(h,l){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(h.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Ys(di,"4.5.1",t),Ys(di,"4.5.1","esm2017")})();export{$d as a,Bd as b,Ud as c,Td as d,jd as e,qd as g,Qd as i,zd as s,Kd as u};
