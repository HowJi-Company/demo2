import{L as Ga,_ as Qa,J as Ha,K as ks,M as Wa,N as It,O as Ya,P as Xa,Q as Ja,S as Za,R as tu,U as Mi,V as eu,W as dn,X as nu,d as ru,E as su,r as iu,o as ou,b as xs,k as Os,i as rt,t as Ls,F as au,m as uu,g as hu,Y as lu,Z as cu}from"./index-DK4RB-FT.js";var du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Mr=Mr||{},v=du||self;function An(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function be(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function fu(e){return Object.prototype.hasOwnProperty.call(e,Jn)&&e[Jn]||(e[Jn]=++gu)}var Jn="closure_uid_"+(1e9*Math.random()>>>0),gu=0;function mu(e,t,n){return e.call.apply(e.bind,arguments)}function pu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Y(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=mu:Y=pu,Y.apply(null,arguments)}function Ze(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function j(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Vt(){this.s=this.s,this.o=this.o}var _u=0;Vt.prototype.s=!1;Vt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),_u!=0)&&fu(this)};Vt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Fr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ms(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(An(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var yu=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};v.addEventListener("test",n,t),v.removeEventListener("test",n,t)}catch{}return e}();function Re(e){return/^[\s\xa0]*$/.test(e)}function Rn(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function ut(e){return Rn().indexOf(e)!=-1}function br(e){return br[" "](e),e}br[" "]=function(){};function Eu(e,t){var n=ch;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var vu=ut("Opera"),Jt=ut("Trident")||ut("MSIE"),bi=ut("Edge"),cr=bi||Jt,Ui=ut("Gecko")&&!(Rn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),Tu=Rn().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function qi(){var e=v.document;return e?e.documentMode:void 0}var dr;t:{var Zn="",tr=function(){var e=Rn();if(Ui)return/rv:([^\);]+)(\)|;)/.exec(e);if(bi)return/Edge\/([\d\.]+)/.exec(e);if(Jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Tu)return/WebKit\/(\S+)/.exec(e);if(vu)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(tr&&(Zn=tr?tr[1]:""),Jt){var er=qi();if(er!=null&&er>parseFloat(Zn)){dr=String(er);break t}}dr=Zn}var fr;if(v.document&&Jt){var Fs=qi();fr=Fs||parseInt(dr,10)||void 0}else fr=void 0;var Iu=fr;function Pe(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ui){t:{try{br(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:wu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pe.$.h.call(this)}}j(Pe,X);var wu={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),Au=0;function Ru(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++Au,this.fa=this.ia=!1}function Pn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ur(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Pu(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Bi(e){const t={};for(const n in e)t[n]=e[n];return t}const bs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ji(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<bs.length;i++)n=bs[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Sn(e){this.src=e,this.g={},this.h=0}Sn.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=mr(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ru(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function gr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Fi(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Pn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function mr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),nr={};function $i(e,t,n,r,s){if(r&&r.once)return zi(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)$i(e,t[i],n,r,s);return null}return n=$r(n),e&&e[Ue]?e.O(t,n,be(r)?!!r.capture:!!r,s):Ki(e,t,n,!1,r,s)}function Ki(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=be(s)?!!s.capture:!!s,a=jr(e);if(a||(e[qr]=a=new Sn(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Su(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)yu||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Qi(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Su(){function e(n){return t.call(e.src,e.listener,n)}const t=Cu;return e}function zi(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)zi(e,t[i],n,r,s);return null}return n=$r(n),e&&e[Ue]?e.P(t,n,be(r)?!!r.capture:!!r,s):Ki(e,t,n,!0,r,s)}function Gi(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Gi(e,t[i],n,r,s);else r=be(r)?!!r.capture:!!r,n=$r(n),e&&e[Ue]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=mr(i,n,r,s),-1<n&&(Pn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=jr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=mr(t,n,r,s)),(n=-1<e?t[e]:null)&&Br(n))}function Br(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ue])gr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Qi(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=jr(t))?(gr(n,e),n.h==0&&(n.src=null,t[qr]=null)):Pn(e)}}}function Qi(e){return e in nr?nr[e]:nr[e]="on"+e}function Cu(e,t){if(e.fa)e=!0;else{t=new Pe(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Br(e),e=n.call(r,t)}return e}function jr(e){return e=e[qr],e instanceof Sn?e:null}var rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $r(e){return typeof e=="function"?e:(e[rr]||(e[rr]=function(t){return e.handleEvent(t)}),e[rr])}function B(){Vt.call(this),this.i=new Sn(this),this.S=this,this.J=null}j(B,Vt);B.prototype[Ue]=!0;B.prototype.removeEventListener=function(e,t,n,r){Gi(this,e,t,n,r)};function z(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var s=t;t=new X(r,e),ji(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=tn(o,r,!0,t)&&s}if(o=t.g=e,s=tn(o,r,!0,t)&&s,s=tn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=tn(o,r,!1,t)&&s}B.prototype.N=function(){if(B.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Pn(n[r]);delete e.g[t],e.h--}}this.J=null};B.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};B.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function tn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&gr(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kr=v.JSON.stringify;class Vu{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Du(){var e=zr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Nu{constructor(){this.h=this.g=null}add(t,n){const r=Hi.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hi=new Vu(()=>new ku,e=>e.reset());class ku{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xu(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ou(e){v.setTimeout(()=>{throw e},0)}let Se,Ce=!1,zr=new Nu,Wi=()=>{const e=v.Promise.resolve(void 0);Se=()=>{e.then(Lu)}};var Lu=()=>{for(var e;e=Du();){try{e.h.call(e.g)}catch(n){Ou(n)}var t=Hi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ce=!1};function Cn(e,t){B.call(this),this.h=e||1,this.g=t||v,this.j=Y(this.qb,this),this.l=Date.now()}j(Cn,B);m=Cn.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),z(this,"tick"),this.ga&&(Gr(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gr(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}m.N=function(){Cn.$.N.call(this),Gr(this),delete this.g};function Qr(e,t,n){if(typeof e=="function")n&&(e=Y(e,n));else if(e&&typeof e.handleEvent=="function")e=Y(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function Yi(e){e.g=Qr(()=>{e.g=null,e.i&&(e.i=!1,Yi(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Mu extends Vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Yi(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(e){Vt.call(this),this.h=e,this.g={}}j(Ve,Vt);var Us=[];function Xi(e,t,n,r){Array.isArray(n)||(n&&(Us[0]=n.toString()),n=Us);for(var s=0;s<n.length;s++){var i=$i(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ji(e){Ur(e.g,function(t,n){this.g.hasOwnProperty(n)&&Br(t)},e),e.g={}}Ve.prototype.N=function(){Ve.$.N.call(this),Ji(this)};Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vn(){this.g=!0}Vn.prototype.Ea=function(){this.g=!1};function Fu(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var l=h[0];h=h[1];var c=l.split("_");o=2<=c.length&&c[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function bu(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function Qt(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+qu(e,n)+(r?" "+r:"")})}function Uu(e,t){e.info(function(){return"TIMEOUT: "+t})}Vn.prototype.info=function(){};function qu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kr(n)}catch{return t}}var Bt={},qs=null;function Dn(){return qs=qs||new B}Bt.Ta="serverreachability";function Zi(e){X.call(this,Bt.Ta,e)}j(Zi,X);function De(e){const t=Dn();z(t,new Zi(t))}Bt.STAT_EVENT="statevent";function to(e,t){X.call(this,Bt.STAT_EVENT,e),this.stat=t}j(to,X);function tt(e){const t=Dn();z(t,new to(t,e))}Bt.Ua="timingevent";function eo(e,t){X.call(this,Bt.Ua,e),this.size=t}j(eo,X);function qe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var Nn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},no={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hr(){}Hr.prototype.h=null;function Bs(e){return e.h||(e.h=e.i())}function ro(){}var Be={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wr(){X.call(this,"d")}j(Wr,X);function Yr(){X.call(this,"c")}j(Yr,X);var pr;function kn(){}j(kn,Hr);kn.prototype.g=function(){return new XMLHttpRequest};kn.prototype.i=function(){return{}};pr=new kn;function je(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ve(this),this.P=Bu,e=cr?125:void 0,this.V=new Cn(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new so}function so(){this.i=null,this.g="",this.h=!1}var Bu=45e3,io={},_r={};m=je.prototype;m.setTimeout=function(e){this.P=e};function yr(e,t,n){e.L=1,e.A=On(Tt(t)),e.u=n,e.S=!0,oo(e,null)}function oo(e,t){e.G=Date.now(),$e(e),e.B=Tt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),mo(n.i,"t",r),e.o=0,n=e.l.J,e.h=new so,e.g=Mo(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Mu(Y(e.Pa,e,e.g),e.O)),Xi(e.U,e.g,"readystatechange",e.nb),t=e.I?Bi(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),De(),Fu(e.j,e.v,e.B,e.m,e.W,e.u)}m.nb=function(e){e=e.target;const t=this.M;t&&lt(e)==3?t.l():this.Pa(e)};m.Pa=function(e){try{if(e==this.g)t:{const l=lt(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>l)&&(l!=3||cr||this.g&&(this.h.h||this.g.ja()||zs(this.g)))){this.J||l!=4||t==7||(t==8||0>=c?De(3):De(2)),xn(this);var n=this.g.da();this.ca=n;e:if(ao(this)){var r=zs(this.g);e="";var s=r.length,i=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),Ee(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,bu(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Re(a)){var h=a;break e}}h=null}if(n=h)Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Er(this,n);else{this.i=!1,this.s=3,tt(12),kt(this),Ee(this);break t}}this.S?(uo(this,l,o),cr&&this.i&&l==3&&(Xi(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Er(this,o)),l==4&&kt(this),this.i&&!this.J&&(l==4?ko(this.l,this):(this.i=!1,$e(this)))}else uh(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),kt(this),Ee(this)}}}catch{}finally{}};function ao(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function uo(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=ju(e,n),s==_r){t==4&&(e.s=4,tt(14),r=!1),Qt(e.j,e.m,null,"[Incomplete Response]");break}else if(s==io){e.s=4,tt(15),Qt(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Qt(e.j,e.m,s,null),Er(e,s);ao(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,tt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ns(t),t.M=!0,tt(11))):(Qt(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),Ee(e))}m.mb=function(){if(this.g){var e=lt(this.g),t=this.g.ja();this.o<t.length&&(xn(this),uo(this,e,t),this.i&&e!=4&&$e(this))}};function ju(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?_r:(n=Number(t.substring(n,r)),isNaN(n)?io:(r+=1,r+n>t.length?_r:(t=t.slice(r,r+n),e.o=r+n,t)))}m.cancel=function(){this.J=!0,kt(this)};function $e(e){e.Y=Date.now()+e.P,ho(e,e.P)}function ho(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=qe(Y(e.lb,e),t)}function xn(e){e.C&&(v.clearTimeout(e.C),e.C=null)}m.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Uu(this.j,this.B),this.L!=2&&(De(),tt(17)),kt(this),this.s=2,Ee(this)):ho(this,this.Y-e)};function Ee(e){e.l.H==0||e.J||ko(e.l,e)}function kt(e){xn(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Gr(e.V),Ji(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Er(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||vr(n.i,e))){if(!e.K&&vr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)mn(n),bn(n);else break t;es(n),tt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qe(Y(n.ib,n),6e3));if(1>=yo(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else xt(n,11)}else if((e.K||n.g==e)&&mn(n),!Re(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let h=s[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const l=h[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const c=h[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const f=h[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const _=e.g;if(_){const S=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(S){var i=r.i;i.g||S.indexOf("spdy")==-1&&S.indexOf("quic")==-1&&S.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xr(i,i.h),i.h=null))}if(r.F){const C=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.Da=C,N(r.I,r.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Lo(r,r.J?r.pa:null,r.Y),o.K){Eo(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(xn(a),$e(a)),r.g=o}else Do(r);0<n.j.length&&Un(n)}else h[0]!="stop"&&h[0]!="close"||xt(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?xt(n,7):ts(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}De(4)}catch{}}function $u(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(An(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ku(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(An(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function lo(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(An(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ku(e),r=$u(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Mt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Mt){this.h=e.h,fn(this,e.j),this.s=e.s,this.g=e.g,gn(this,e.m),this.l=e.l;var t=e.i,n=new Ne;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),js(this,n),this.o=e.o}else e&&(t=String(e).match(co))?(this.h=!1,fn(this,t[1]||"",!0),this.s=ge(t[2]||""),this.g=ge(t[3]||"",!0),gn(this,t[4]),this.l=ge(t[5]||"",!0),js(this,t[6]||"",!0),this.o=ge(t[7]||"")):(this.h=!1,this.i=new Ne(null,this.h))}Mt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(me(t,$s,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(me(t,$s,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(me(n,n.charAt(0)=="/"?Hu:Qu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",me(n,Yu)),e.join("")};function Tt(e){return new Mt(e)}function fn(e,t,n){e.j=n?ge(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function js(e,t,n){t instanceof Ne?(e.i=t,Xu(e.i,e.h)):(n||(t=me(t,Wu)),e.i=new Ne(t,e.h))}function N(e,t,n){e.i.set(t,n)}function On(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ge(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function me(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Gu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var $s=/[#\/\?@]/g,Qu=/[#\?:]/g,Hu=/[#\?]/g,Wu=/[#\?@]/g,Yu=/#/g;function Ne(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Dt(e){e.g||(e.g=new Map,e.h=0,e.i&&zu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Ne.prototype;m.add=function(e,t){Dt(this),this.i=null,e=oe(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function fo(e,t){Dt(e),t=oe(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function go(e,t){return Dt(e),t=oe(e,t),e.g.has(t)}m.forEach=function(e,t){Dt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};m.ta=function(){Dt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};m.Z=function(e){Dt(this);let t=[];if(typeof e=="string")go(this,e)&&(t=t.concat(this.g.get(oe(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Dt(this),this.i=null,e=oe(this,e),go(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function mo(e,t,n){fo(e,t),0<n.length&&(e.i=null,e.g.set(oe(e,t),Fr(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function oe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Xu(e,t){t&&!e.j&&(Dt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(fo(this,r),mo(this,s,n))},e)),e.j=t}var Ju=class{constructor(e,t){this.g=e,this.map=t}};function po(e){this.l=e||Zu,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zu=10;function _o(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function yo(e){return e.h?1:e.g?e.g.size:0}function vr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xr(e,t){e.g?e.g.add(t):e.h=t}function Eo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}po.prototype.cancel=function(){if(this.i=vo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function vo(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Fr(e.i)}var th=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function eh(){this.g=new th}function nh(e,t,n){const r=n||"";try{lo(e,function(s,i){let o=s;be(s)&&(o=Kr(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function rh(e,t){const n=new Vn;if(v.Image){const r=new Image;r.onload=Ze(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ze(en,n,r,"TestLoadImage: error",!1,t),r.onabort=Ze(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ze(en,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function en(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Ln(e){this.l=e.ec||null,this.j=e.ob||!1}j(Ln,Hr);Ln.prototype.g=function(){return new Mn(this.l,this.j)};Ln.prototype.i=function(e){return function(){return e}}({});function Mn(e,t){B.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Jr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(Mn,B);var Jr=0;m=Mn.prototype;m.open=function(e,t){if(this.readyState!=Jr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ke(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ke(this)),this.readyState=Jr};m.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ke(this)),this.g&&(this.readyState=3,ke(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;To(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function To(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}m.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ke(this):ke(this),this.readyState==3&&To(this)}};m.Za=function(e){this.g&&(this.response=this.responseText=e,Ke(this))};m.Ya=function(e){this.g&&(this.response=e,Ke(this))};m.ka=function(){this.g&&Ke(this)};function Ke(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ke(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ke(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var sh=v.JSON.parse;function x(e){B.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Io,this.L=this.M=!1}j(x,B);var Io="",ih=/^https?$/i,oh=["POST","PUT"];m=x.prototype;m.Oa=function(e){this.M=e};m.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pr.g(),this.C=this.u?Bs(this.u):Bs(pr),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Ks(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=v.FormData&&e instanceof v.FormData,!(0<=Fi(oh,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ro(this),0<this.B&&((this.L=ah(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=Qr(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Ks(this,i)}};function ah(e){return Jt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.ua=function(){typeof Mr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Ks(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wo(e),Fn(e)}function wo(e){e.F||(e.F=!0,z(e,"complete"),z(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,z(this,"complete"),z(this,"abort"),Fn(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),x.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?Ao(this):this.kb())};m.kb=function(){Ao(this)};function Ao(e){if(e.h&&typeof Mr<"u"&&(!e.C[1]||lt(e)!=4||e.da()!=2)){if(e.v&&lt(e)==4)Qr(e.La,0,e);else if(z(e,"readystatechange"),lt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(co)[1]||null;!s&&v.self&&v.self.location&&(s=v.self.location.protocol.slice(0,-1)),r=!ih.test(s?s.toLowerCase():"")}n=r}if(n)z(e,"complete"),z(e,"success");else{e.m=6;try{var i=2<lt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",wo(e)}}finally{Fn(e)}}}}function Fn(e,t){if(e.g){Ro(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||z(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ro(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}m.isActive=function(){return!!this.g};function lt(e){return e.g?e.g.readyState:0}m.da=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),sh(t)}};function zs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Io:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function uh(e){const t={};e=(e.g&&2<=lt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Re(e[r]))continue;var n=xu(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Pu(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Po(e){let t="";return Ur(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Zr(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Po(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function ce(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function So(e){this.Ga=0,this.j=[],this.l=new Vn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ce("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ce("baseRetryDelayMs",5e3,e),this.hb=ce("retryDelaySeedMs",1e4,e),this.eb=ce("forwardChannelMaxRetries",2,e),this.xa=ce("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new po(e&&e.concurrentRequestLimit),this.Ja=new eh,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=So.prototype;m.ra=8;m.H=1;function ts(e){if(Co(e),e.H==3){var t=e.W++,n=Tt(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),ze(e,n),t=new je(e,e.l,t),t.L=2,t.A=On(Tt(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.A,n=!0),n||(t.g=Mo(t.l,null),t.g.ha(t.A)),t.G=Date.now(),$e(t)}Oo(e)}function bn(e){e.g&&(ns(e),e.g.cancel(),e.g=null)}function Co(e){bn(e),e.u&&(v.clearTimeout(e.u),e.u=null),mn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Un(e){if(!_o(e.i)&&!e.m){e.m=!0;var t=e.Na;Se||Wi(),Ce||(Se(),Ce=!0),zr.add(t,e),e.C=0}}function hh(e,t){return yo(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=qe(Y(e.Na,e,t),xo(e,e.C)),e.C++,!0)}m.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new je(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Bi(i),ji(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Vo(this,s,t),n=Tt(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),ze(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Po(i)))+"&"+t:this.o&&Zr(n,this.o,i)),Xr(this.i,s),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),s.aa=!0,yr(s,n,null)):yr(s,n,t),this.H=2}}else this.H==3&&(e?Gs(this,e):this.j.length==0||_o(this.i)||Gs(this))};function Gs(e,t){var n;t?n=t.m:n=e.W++;const r=Tt(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),ze(e,r),e.o&&e.s&&Zr(r,e.o,e.s),n=new je(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Vo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Xr(e.i,n),yr(n,r,t)}function ze(e,t){e.na&&Ur(e.na,function(n,r){N(t,r,n)}),e.h&&lo({},function(n,r){N(t,r,n)})}function Vo(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Y(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let h=s[u].g;const l=s[u].map;if(h-=i,0>h)i=Math.max(0,s[u].g-100),a=!1;else try{nh(l,o,"req"+h+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Do(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Se||Wi(),Ce||(Se(),Ce=!0),zr.add(t,e),e.A=0}}function es(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=qe(Y(e.Ma,e),xo(e,e.A)),e.A++,!0)}m.Ma=function(){if(this.u=null,No(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=qe(Y(this.jb,this),e)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),bn(this),No(this))};function ns(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function No(e){e.g=new je(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Tt(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),ze(e,t),e.o&&e.s&&Zr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=On(Tt(t)),n.u=null,n.S=!0,oo(n,e)}m.ib=function(){this.v!=null&&(this.v=null,bn(this),es(this),tt(19))};function mn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function ko(e,t){var n=null;if(e.g==t){mn(e),ns(e),e.g=null;var r=2}else if(vr(e.i,t))n=t.F,Eo(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Dn(),z(r,new eo(r,n)),Un(e)}else Do(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&hh(e,t)||r==2&&es(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:xt(e,5);break;case 4:xt(e,10);break;case 3:xt(e,6);break;default:xt(e,2)}}}function xo(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function xt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Y(e.pb,e);n||(n=new Mt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||fn(n,"https"),On(n)),rh(n.toString(),r)}else tt(2);e.H=0,e.h&&e.h.za(t),Oo(e),Co(e)}m.pb=function(e){e?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Oo(e){if(e.H=0,e.ma=[],e.h){const t=vo(e.i);(t.length!=0||e.j.length!=0)&&(Ms(e.ma,t),Ms(e.ma,e.j),e.i.i.length=0,Fr(e.j),e.j.length=0),e.h.ya()}}function Lo(e,t,n){var r=n instanceof Mt?Tt(n):new Mt(n);if(r.g!="")t&&(r.g=t+"."+r.g),gn(r,r.m);else{var s=v.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Mt(null);r&&fn(i,r),t&&(i.g=t),s&&gn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),ze(e,r),r}function Mo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new x(new Ln({ob:n})):new x(e.va),t.Oa(e.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Fo(){}m=Fo.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function pn(){if(Jt&&!(10<=Number(Iu)))throw Error("Environmental error: no available transport.")}pn.prototype.g=function(e,t){return new st(e,t)};function st(e,t){B.call(this),this.g=new So(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Re(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Re(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ae(this)}j(st,B);st.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;tt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lo(e,null,e.Y),Un(e)};st.prototype.close=function(){ts(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Kr(e),e=n);t.j.push(new Ju(t.fb++,e)),t.H==3&&Un(t)};st.prototype.N=function(){this.g.h=null,delete this.j,ts(this.g),delete this.g,st.$.N.call(this)};function bo(e){Wr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(bo,Wr);function Uo(){Yr.call(this),this.status=1}j(Uo,Yr);function ae(e){this.g=e}j(ae,Fo);ae.prototype.Ba=function(){z(this.g,"a")};ae.prototype.Aa=function(e){z(this.g,new bo(e))};ae.prototype.za=function(e){z(this.g,new Uo)};ae.prototype.ya=function(){z(this.g,"b")};function lh(){this.blockSize=-1}function at(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}j(at,lh);at.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}at.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)sr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){sr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){sr(this,r),s=0;break}}this.h=s,this.i+=t};at.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function D(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var ch={};function rs(e){return-128<=e&&128>e?Eu(e,function(t){return new D([t|0],0>t?-1:0)}):new D([e|0],0>e?-1:0)}function ct(e){if(isNaN(e)||!isFinite(e))return Ht;if(0>e)return K(ct(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Tr;return new D(t,0)}function qo(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return K(qo(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ct(Math.pow(t,8)),r=Ht,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=ct(Math.pow(t,i)),r=r.R(i).add(ct(o))):(r=r.R(n),r=r.add(ct(o)))}return r}var Tr=4294967296,Ht=rs(0),Ir=rs(1),Qs=rs(16777216);m=D.prototype;m.ea=function(){if(it(this))return-K(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Tr+r)*t,t*=Tr}return e};m.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Et(this))return"0";if(it(this))return"-"+K(this).toString(e);for(var t=ct(Math.pow(e,6)),n=this,r="";;){var s=yn(n,t).g;n=_n(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Et(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};m.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Et(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function it(e){return e.h==-1}m.X=function(e){return e=_n(this,e),it(e)?-1:Et(e)?0:1};function K(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new D(n,~e.h).add(Ir)}m.abs=function(){return it(this)?K(this):this};m.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new D(n,n[n.length-1]&-2147483648?-1:0)};function _n(e,t){return e.add(K(t))}m.R=function(e){if(Et(this)||Et(e))return Ht;if(it(this))return it(e)?K(this).R(K(e)):K(K(this).R(e));if(it(e))return K(this.R(K(e)));if(0>this.X(Qs)&&0>e.X(Qs))return ct(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,u=e.D(s)&65535;n[2*r+2*s]+=o*u,nn(n,2*r+2*s),n[2*r+2*s+1]+=i*u,nn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,nn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,nn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new D(n,0)};function nn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function de(e,t){this.g=e,this.h=t}function yn(e,t){if(Et(t))throw Error("division by zero");if(Et(e))return new de(Ht,Ht);if(it(e))return t=yn(K(e),t),new de(K(t.g),K(t.h));if(it(t))return t=yn(e,K(t)),new de(K(t.g),t.h);if(30<e.g.length){if(it(e)||it(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=t;0>=r.X(e);)n=Hs(n),r=Hs(r);var s=$t(n,1),i=$t(r,1);for(r=$t(r,2),n=$t(n,2);!Et(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=$t(r,1),n=$t(n,1)}return t=_n(e,s.R(t)),new de(s,t)}for(s=Ht;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=ct(n),o=i.R(t);it(o)||0<o.X(e);)n-=r,i=ct(n),o=i.R(t);Et(i)&&(i=Ir),s=s.add(i),e=_n(e,o)}return new de(s,e)}m.gb=function(e){return yn(this,e).h};m.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new D(n,this.h&e.h)};m.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new D(n,this.h|e.h)};m.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new D(n,this.h^e.h)};function Hs(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new D(n,e.h)}function $t(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new D(s,e.h)}pn.prototype.createWebChannel=pn.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Nn.NO_ERROR=0;Nn.TIMEOUT=8;Nn.HTTP_ERROR=6;no.COMPLETE="complete";ro.EventType=Be;Be.OPEN="a";Be.CLOSE="b";Be.ERROR="c";Be.MESSAGE="d";B.prototype.listen=B.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;at.prototype.digest=at.prototype.l;at.prototype.reset=at.prototype.reset;at.prototype.update=at.prototype.j;D.prototype.add=D.prototype.add;D.prototype.multiply=D.prototype.R;D.prototype.modulo=D.prototype.gb;D.prototype.compare=D.prototype.X;D.prototype.toNumber=D.prototype.ea;D.prototype.toString=D.prototype.toString;D.prototype.getBits=D.prototype.D;D.fromNumber=ct;D.fromString=qo;var dh=function(){return new pn},fh=function(){return Dn()},ir=Nn,gh=no,mh=Bt,Ws={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rn=ro,ph=x,_h=at,Wt=D;const Ys="@firebase/firestore";/**
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
 */class H{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
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
 */let ue="10.10.0";/**
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
 */const bt=new Ga("@firebase/firestore");function fe(){return bt.logLevel}function p(e,...t){if(bt.logLevel<=It.DEBUG){const n=t.map(ss);bt.debug(`Firestore (${ue}): ${e}`,...n)}}function gt(e,...t){if(bt.logLevel<=It.ERROR){const n=t.map(ss);bt.error(`Firestore (${ue}): ${e}`,...n)}}function Zt(e,...t){if(bt.logLevel<=It.WARN){const n=t.map(ss);bt.warn(`Firestore (${ue}): ${e}`,...n)}}function ss(e){if(typeof e=="string")return e;try{/**
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
 */function I(e="Unexpected state"){const t=`FIRESTORE (${ue}) INTERNAL ASSERTION FAILED: `+e;throw gt(t),new Error(t)}function b(e,t){e||I()}function P(e,t){return e}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Wa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Bo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(H.UNAUTHENTICATED))}shutdown(){}}class Eh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vh{constructor(t){this.t=t,this.currentUser=H.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(b(typeof r.accessToken=="string"),new Bo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new H(t)}}class Th{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=H.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ih{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Th(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(H.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ah{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,p("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(b(typeof n.token=="string"),this.R=n.token,new wh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Rh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Rh(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function V(e,t){return e<t?-1:e>t?1:0}function te(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class et{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new et(0,0))}static max(){return new T(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xe{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return xe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof xe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends xe{construct(t,n,r){return new k(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new k(n)}static emptyPath(){return new k([])}}const Ph=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends xe{construct(t,n,r){return new Z(t,n,r)}static isValidIdentifier(t){return Ph.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new y(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(n)}static emptyPath(){return new Z([])}}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function Sh(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=T.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new Pt(s,E.empty(),t)}function Ch(e){return new Pt(e.readTime,e.key,-1)}class Pt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Pt(T.min(),E.empty(),-1)}static max(){return new Pt(T.max(),E.empty(),-1)}}function Vh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:V(e.largestBatchId,t.largestBatchId))}/**
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
 */const Dh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function is(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==Dh)throw e;p("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,r)=>{n(t)})}static reject(t){return new d((n,r)=>{r(t)})}static waitFor(t){return new d((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=d.resolve(!1);for(const r of t)n=n.next(s=>s?d.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new d((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const h=u;n(t[h]).next(l=>{o[h]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new d((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class os{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ve(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=as(r.target.error);this.V.reject(new ve(t,s))}}static open(t,n,r,s){try{return new os(n,t.transaction(s,r))}catch(i){throw new ve(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new xh(n)}}class Ot{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Ot.S(dn())===12.2&&gt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Nt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!nu())return!1;if(Ot.C())return!0;const t=dn(),n=Ot.S(t),r=0<n&&n<10,s=Ot.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ve(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ve(t,o))},s.onupgradeneeded=i=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=os.open(this.db,t,i?"readonly":"readwrite",r),u=s(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),d.reject(h))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,h=u.name!=="FirebaseError"&&o<3;if(p("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kh{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Nt(this.k.delete())}}class ve extends y{constructor(t,n){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ge(e){return e.name==="IndexedDbTransactionError"}class xh{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(p("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Nt(r)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Nt(this.store.add(t))}get(t){return Nt(this.store.get(t)).next(n=>(n===void 0&&(n=null),p("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Nt(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Nt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new d((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new d((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){p("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new d((r,s)=>{n.onerror=i=>{const o=as(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new d((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new kh(a),h=n(a.primaryKey,a.value,u);if(h instanceof d){const l=h.catch(c=>(u.done(),d.reject(c)));r.push(l)}u.isDone?s():u.$===null?a.continue():a.continue(u.$)}}).next(()=>d.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Nt(e){return new d((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=as(r.target.error);n(s)}})}let Xs=!1;function as(e){const t=Ot.S(dn());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xs||(Xs=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class us{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}us._e=-1;function qn(e){return e==null}function wr(e){return e===0&&1/e==-1/0}/**
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
 */function Js(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Oh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class L{constructor(t,n){this.comparator=t,this.root=n||$.EMPTY}insert(t,n){return new L(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sn(this.root,t,this.comparator,!0)}}class sn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??$.RED,this.left=s??$.EMPTY,this.right=i??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new $(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return $.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,n,r,s,i){return this}insert(t,n,r){return new $(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class G{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zs(this.data.getIterator())}getIteratorFrom(t){return new Zs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new G(this.comparator);return n.data=t,n}}class Zs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new wt([])}unionWith(t){let n=new G(Z.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new wt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return te(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $o extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $o("Invalid base64 string: "+i):i}}(t);return new J(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(e){if(b(!!e),typeof e=="string"){let t=0;const n=Lh.exec(e);if(b(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(e.seconds),nanos:F(e.nanos)}}function F(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ut(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
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
 */function hs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ls(e){const t=e.mapValue.fields.__previous_value__;return hs(t)?ls(t):t}function Oe(e){const t=St(e.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class Mh{constructor(t,n,r,s,i,o,a,u,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class Le{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Le("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Le&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const on={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hs(e)?4:Fh(e)?9007199254740991:10:I()}function mt(e,t){if(e===t)return!0;const n=qt(e);if(n!==qt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Oe(e).isEqual(Oe(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=St(s.timestampValue),a=St(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return F(s.geoPointValue.latitude)===F(i.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return F(s.integerValue)===F(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=F(s.doubleValue),a=F(i.doubleValue);return o===a?wr(o)===wr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return te(e.arrayValue.values||[],t.arrayValue.values||[],mt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Js(o)!==Js(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!mt(o[u],a[u])))return!1;return!0}(e,t);default:return I()}}function Me(e,t){return(e.values||[]).find(n=>mt(n,t))!==void 0}function ee(e,t){if(e===t)return 0;const n=qt(e),r=qt(t);if(n!==r)return V(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return V(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=F(i.integerValue||i.doubleValue),u=F(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return ti(e.timestampValue,t.timestampValue);case 4:return ti(Oe(e),Oe(t));case 5:return V(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Ut(i),u=Ut(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const l=V(a[h],u[h]);if(l!==0)return l}return V(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=V(F(i.latitude),F(o.latitude));return a!==0?a:V(F(i.longitude),F(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const l=ee(a[h],u[h]);if(l)return l}return V(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===on.mapValue&&o===on.mapValue)return 0;if(i===on.mapValue)return 1;if(o===on.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),h=o.fields||{},l=Object.keys(h);u.sort(),l.sort();for(let c=0;c<u.length&&c<l.length;++c){const f=V(u[c],l[c]);if(f!==0)return f;const _=ee(a[u[c]],h[l[c]]);if(_!==0)return _}return V(u.length,l.length)}(e.mapValue,t.mapValue);default:throw I()}}function ti(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return V(e,t);const n=St(e),r=St(t),s=V(n.seconds,r.seconds);return s!==0?s:V(n.nanos,r.nanos)}function ne(e){return Ar(e)}function Ar(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=St(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ut(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ar(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ar(n.fields[o])}`;return s+"}"}(e.mapValue):I()}function Rr(e){return!!e&&"integerValue"in e}function cs(e){return!!e&&"arrayValue"in e}function ei(e){return!!e&&"nullValue"in e}function ni(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function or(e){return!!e&&"mapValue"in e}function Te(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Te(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Te(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Fh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ht{constructor(t){this.value=t}static empty(){return new ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!or(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Te(n)}setAll(t){let n=Z.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Te(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());or(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];or(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Bn(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ht(Te(this.value))}}/**
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
 */class W{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new W(t,0,T.min(),T.min(),T.min(),ht.empty(),0)}static newFoundDocument(t,n,r,s){return new W(t,1,n,T.min(),r,s,0)}static newNoDocument(t,n){return new W(t,2,n,T.min(),T.min(),ht.empty(),0)}static newUnknownDocument(t,n){return new W(t,3,n,T.min(),T.min(),ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof W&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new W(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class En{constructor(t,n){this.position=t,this.inclusive=n}}function ri(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ee(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function si(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!mt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class vn{constructor(t,n="asc"){this.field=t,this.dir=n}}function bh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Ko{}class U extends Ko{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new qh(t,n,r):n==="array-contains"?new $h(t,r):n==="in"?new Kh(t,r):n==="not-in"?new zh(t,r):n==="array-contains-any"?new Gh(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Bh(t,r):new jh(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ee(n,this.value)):n!==null&&qt(this.value)===qt(n)&&this.matchesComparison(ee(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends Ko{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new pt(t,n)}matches(t){return zo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function zo(e){return e.op==="and"}function Go(e){return Uh(e)&&zo(e)}function Uh(e){for(const t of e.filters)if(t instanceof pt)return!1;return!0}function Pr(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+ne(e.value);if(Go(e))return e.filters.map(t=>Pr(t)).join(",");{const t=e.filters.map(n=>Pr(n)).join(",");return`${e.op}(${t})`}}function Qo(e,t){return e instanceof U?function(r,s){return s instanceof U&&r.op===s.op&&r.field.isEqual(s.field)&&mt(r.value,s.value)}(e,t):e instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Qo(o,s.filters[a]),!0):!1}(e,t):void I()}function Ho(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${ne(n.value)}`}(e):e instanceof pt?function(n){return n.op.toString()+" {"+n.getFilters().map(Ho).join(" ,")+"}"}(e):"Filter"}class qh extends U{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Bh extends U{constructor(t,n){super(t,"in",n),this.keys=Wo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class jh extends U{constructor(t,n){super(t,"not-in",n),this.keys=Wo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Wo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class $h extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return cs(n)&&Me(n.arrayValue,this.value)}}class Kh extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Me(this.value.arrayValue,n)}}class zh extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(Me(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Me(this.value.arrayValue,n)}}class Gh extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!cs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Me(this.value.arrayValue,r))}}/**
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
 */class Qh{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ii(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Qh(e,t,n,r,s,i,o)}function ds(e){const t=P(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Pr(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ne(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ne(r)).join(",")),t.ce=n}return t.ce}function fs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!bh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Qo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!si(e.startAt,t.startAt)&&si(e.endAt,t.endAt)}function Sr(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class jn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Hh(e,t,n,r,s,i,o,a){return new jn(e,t,n,r,s,i,o,a)}function gs(e){return new jn(e)}function oi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Wh(e){return e.collectionGroup!==null}function Ie(e){const t=P(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new G(Z.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new vn(i,r))}),n.has(Z.keyField().canonicalString())||t.le.push(new vn(Z.keyField(),r))}return t.le}function dt(e){const t=P(e);return t.he||(t.he=Yh(t,Ie(e))),t.he}function Yh(e,t){if(e.limitType==="F")return ii(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new vn(s.field,i)});const n=e.endAt?new En(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new En(e.startAt.position,e.startAt.inclusive):null;return ii(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Cr(e,t,n){return new jn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function $n(e,t){return fs(dt(e),dt(t))&&e.limitType===t.limitType}function Yo(e){return`${ds(dt(e))}|lt:${e.limitType}`}function Kt(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ho(s)).join(", ")}]`),qn(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ne(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ne(s)).join(",")),`Target(${r})`}(dt(e))}; limitType=${e.limitType})`}function Kn(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):E.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ie(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,u){const h=ri(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,Ie(r),s)||r.endAt&&!function(o,a,u){const h=ri(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,Ie(r),s))}(e,t)}function Xh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xo(e){return(t,n)=>{let r=!1;for(const s of Ie(e)){const i=Jh(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jh(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,o,a){const u=o.data.field(i),h=a.data.field(i);return u!==null&&h!==null?ee(u,h):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
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
 */class he{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Bn(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Oh(this.inner)}size(){return this.innerSize}}/**
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
 */const Zh=new L(E.comparator);function Ct(){return Zh}const Jo=new L(E.comparator);function pe(...e){let t=Jo;for(const n of e)t=t.insert(n.key,n);return t}function tl(e){let t=Jo;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Lt(){return we()}function Zo(){return we()}function we(){return new he(e=>e.toString(),(e,t)=>e.isEqual(t))}const el=new G(E.comparator);function R(...e){let t=el;for(const n of e)t=t.add(n);return t}const nl=new G(V);function rl(){return nl}/**
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
 */function sl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wr(t)?"-0":t}}function il(e){return{integerValue:""+e}}/**
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
 */class zn{constructor(){this._=void 0}}function ol(e,t,n){return e instanceof Vr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hs(i)&&(i=ls(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Tn?ta(e,t):e instanceof In?ea(e,t):function(s,i){const o=ul(s,i),a=ai(o)+ai(s.Ie);return Rr(o)&&Rr(s.Ie)?il(a):sl(s.serializer,a)}(e,t)}function al(e,t,n){return e instanceof Tn?ta(e,t):e instanceof In?ea(e,t):n}function ul(e,t){return e instanceof Dr?function(r){return Rr(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Vr extends zn{}class Tn extends zn{constructor(t){super(),this.elements=t}}function ta(e,t){const n=na(t);for(const r of e.elements)n.some(s=>mt(s,r))||n.push(r);return{arrayValue:{values:n}}}class In extends zn{constructor(t){super(),this.elements=t}}function ea(e,t){let n=na(t);for(const r of e.elements)n=n.filter(s=>!mt(s,r));return{arrayValue:{values:n}}}class Dr extends zn{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function ai(e){return F(e.integerValue||e.doubleValue)}function na(e){return cs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function hl(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Tn&&s instanceof Tn||r instanceof In&&s instanceof In?te(r.elements,s.elements,mt):r instanceof Dr&&s instanceof Dr?mt(r.Ie,s.Ie):r instanceof Vr&&s instanceof Vr}(e.transform,t.transform)}class Ft{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ft}static exists(t){return new Ft(void 0,t)}static updateTime(t){return new Ft(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ms{}function ra(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new cl(e.key,Ft.none()):new ps(e.key,e.data,Ft.none());{const n=e.data,r=ht.empty();let s=new G(Z.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gn(e.key,r,new wt(s.toArray()),Ft.none())}}function ll(e,t,n){e instanceof ps?function(s,i,o){const a=s.value.clone(),u=hi(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Gn?function(s,i,o){if(!hn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=hi(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(sa(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ae(e,t,n,r){return e instanceof ps?function(i,o,a,u){if(!hn(i.precondition,o))return a;const h=i.value.clone(),l=li(i.fieldTransforms,u,o);return h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof Gn?function(i,o,a,u){if(!hn(i.precondition,o))return a;const h=li(i.fieldTransforms,u,o),l=o.data;return l.setAll(sa(i)),l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,o,a){return hn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function ui(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&te(r,s,(i,o)=>hl(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ps extends ms{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends ms{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function hi(e,t,n){const r=new Map;b(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,al(o,a,n[s]))}return r}function li(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ol(i,o,t))}return r}class cl extends ms{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dl{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&ll(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ae(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ae(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Zo();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=ra(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),R())}isEqual(t){return this.batchId===t.batchId&&te(this.mutations,t.mutations,(n,r)=>ui(n,r))&&te(this.baseMutations,t.baseMutations,(n,r)=>ui(n,r))}}/**
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
 */class fl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class gl{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var M,A;function ia(e){if(e===void 0)return gt("GRPC error has no .code"),g.UNKNOWN;switch(e){case M.OK:return g.OK;case M.CANCELLED:return g.CANCELLED;case M.UNKNOWN:return g.UNKNOWN;case M.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case M.INTERNAL:return g.INTERNAL;case M.UNAVAILABLE:return g.UNAVAILABLE;case M.UNAUTHENTICATED:return g.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case M.NOT_FOUND:return g.NOT_FOUND;case M.ALREADY_EXISTS:return g.ALREADY_EXISTS;case M.PERMISSION_DENIED:return g.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case M.ABORTED:return g.ABORTED;case M.OUT_OF_RANGE:return g.OUT_OF_RANGE;case M.UNIMPLEMENTED:return g.UNIMPLEMENTED;case M.DATA_LOSS:return g.DATA_LOSS;default:return I()}}(A=M||(M={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ml(){return new TextEncoder}/**
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
 */const pl=new Wt([4294967295,4294967295],0);function ci(e){const t=ml().encode(e),n=new _h;return n.update(t),new Uint8Array(n.digest())}function di(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Wt([n,r],0),new Wt([s,i],0)]}class _s{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _e(`Invalid padding: ${n}`);if(r<0)throw new _e(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new _e(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new _e(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Wt.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(Wt.fromNumber(r)));return s.compare(pl)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=ci(t),[r,s]=di(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new _s(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=ci(t),[r,s]=di(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class _e extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qn{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Qe.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Qn(T.min(),s,new L(V),Ct(),R())}}class Qe{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Qe(r,n,R(),R(),R())}}/**
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
 */class ln{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class oa{constructor(t,n){this.targetId=t,this.fe=n}}class aa{constructor(t,n,r=J.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class fi{constructor(){this.ge=0,this.pe=mi(),this.ye=J.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=R(),n=R(),r=R();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:I()}}),new Qe(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=mi()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,b(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class _l{constructor(t){this.Be=t,this.ke=new Map,this.qe=Ct(),this.Qe=gi(),this.Ke=new L(V)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Sr(i))if(r===0){const o=new E(i.path);this.We(n,o,W.newNoDocument(o,T.min()))}else b(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ut(r).toUint8Array()}catch(u){if(u instanceof $o)return Zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new _s(o,s,i)}catch(u){return Zt(u instanceof _e?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Sr(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,W.newNoDocument(u,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=R();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Qn(t,n,this.Ke,this.qe,r);return this.qe=Ct(),this.Qe=gi(),this.Ke=new L(V),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new fi,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new G(V),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||p("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new fi),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function gi(){return new L(E.comparator)}function mi(){return new L(E.comparator)}const yl={asc:"ASCENDING",desc:"DESCENDING"},El={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vl={and:"AND",or:"OR"};class Tl{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Nr(e,t){return e.useProto3Json||qn(t)?t:{value:t}}function Il(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Yt(e){return b(!!e),T.fromTimestamp(function(n){const r=St(n);return new et(r.seconds,r.nanos)}(e))}function Al(e,t){return kr(e,t).canonicalString()}function kr(e,t){const n=function(s){return new k(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function ua(e){const t=k.fromString(e);return b(fa(t)),t}function ar(e,t){const n=ua(t);if(n.get(1)!==e.databaseId.projectId)throw new y(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(la(n))}function ha(e,t){return Al(e.databaseId,t)}function Rl(e){const t=ua(e);return t.length===4?k.emptyPath():la(t)}function pi(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function la(e){return b(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Pl(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,l){return h.useProto3Json?(b(l===void 0||typeof l=="string"),J.fromBase64String(l||"")):(b(l===void 0||l instanceof Uint8Array),J.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const l=h.code===void 0?g.UNKNOWN:ia(h.code);return new y(l,h.message||"")}(o);n=new aa(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ar(e,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):T.min(),a=new ht({mapValue:{fields:r.document.fields}}),u=W.newFoundDocument(s,i,o,a),h=r.targetIds||[],l=r.removedTargetIds||[];n=new ln(h,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ar(e,r.document),i=r.readTime?Yt(r.readTime):T.min(),o=W.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ln([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ar(e,r.document),i=r.removedTargetIds||[];n=new ln([],i,s,null)}else{if(!("filter"in t))return I();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gl(s,i),a=r.targetId;n=new oa(a,o)}}return n}function Sl(e,t){return{documents:[ha(e,t.path)]}}function Cl(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ha(e,s);const i=function(h){if(h.length!==0)return da(pt.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(l=>function(f){return{field:zt(f.field),direction:Nl(f.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Nr(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:n,parent:s}}function Vl(e){let t=Rl(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){b(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(c){const f=ca(c);return f instanceof pt&&Go(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(f=>function(S){return new vn(Gt(S.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,qn(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(c){const f=!!c.before,_=c.values||[];return new En(_,f)}(n.startAt));let h=null;return n.endAt&&(h=function(c){const f=!c.before,_=c.values||[];return new En(_,f)}(n.endAt)),Hh(t,s,o,i,a,"F",u,h)}function Dl(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function ca(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gt(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gt(n.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gt(n.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gt(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(e):e.fieldFilter!==void 0?function(n){return U.create(Gt(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return pt.create(n.compositeFilter.filters.map(r=>ca(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return I()}}(n.compositeFilter.op))}(e):I()}function Nl(e){return yl[e]}function kl(e){return El[e]}function xl(e){return vl[e]}function zt(e){return{fieldPath:e.canonicalString()}}function Gt(e){return Z.fromServerFormat(e.fieldPath)}function da(e){return e instanceof U?function(n){if(n.op==="=="){if(ni(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NAN"}};if(ei(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ni(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NOT_NAN"}};if(ei(n.value))return{unaryFilter:{field:zt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(n.field),op:kl(n.op),value:n.value}}}(e):e instanceof pt?function(n){const r=n.getFilters().map(s=>da(s));return r.length===1?r[0]:{compositeFilter:{op:xl(n.op),filters:r}}}(e):I()}function fa(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class At{constructor(t,n,r,s,i=T.min(),o=T.min(),a=J.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new At(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Ol{constructor(t){this.ct=t}}function Ll(e){const t=Vl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Cr(t,t.limit,"L"):t}/**
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
 */class Ml{constructor(){this._n=new Fl}addToCollectionParentIndex(t,n){return this._n.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getIndexType(t,n){return d.resolve(0)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,n){return d.resolve(Pt.min())}getMinOffsetFromCollectionGroup(t,n){return d.resolve(Pt.min())}updateCollectionGroup(t,n,r){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class Fl{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new G(k.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new G(k.comparator)).toArray()}}/**
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
 */class re{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new re(0)}static Ln(){return new re(-1)}}/**
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
 */class bl{constructor(){this.changes=new he(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,W.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?d.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ul{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class ql{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ae(r.mutation,s,wt.empty(),et.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,R()).next(()=>r))}getLocalViewOfDocuments(t,n,r=R()){const s=Lt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=pe();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Lt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,R()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ct();const o=we(),a=function(){return we()}();return n.forEach((u,h)=>{const l=r.get(h.key);s.has(h.key)&&(l===void 0||l.mutation instanceof Gn)?i=i.insert(h.key,h):l!==void 0?(o.set(h.key,l.mutation.getFieldMask()),Ae(l.mutation,h,l.mutation.getFieldMask(),et.now())):o.set(h.key,wt.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((h,l)=>o.set(h,l)),n.forEach((h,l)=>{var c;return a.set(h,new Ul(l,(c=o.get(h))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,n){const r=we();let s=new L((o,a)=>o-a),i=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let l=r.get(u)||wt.empty();l=a.applyToLocalView(h,l),r.set(u,l);const c=(s.get(a.batchId)||R()).add(u);s=s.insert(a.batchId,c)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,l=u.value,c=Zo();l.forEach(f=>{if(!i.has(f)){const _=ra(n.get(f),r.get(f));_!==null&&c.set(f,_),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,c))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Wh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):d.resolve(Lt());let a=-1,u=i;return o.next(h=>d.forEach(h,(l,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),i.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,u,h,R())).next(l=>({batchId:a,changes:tl(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let s=pe();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=pe();return this.indexManager.getCollectionParents(t,i).next(a=>d.forEach(a,u=>{const h=function(c,f){return new jn(f,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(l=>{l.forEach((c,f)=>{o=o.insert(c,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const l=h.getKey();o.get(l)===null&&(o=o.insert(l,W.newInvalidDocument(l)))});let a=pe();return o.forEach((u,h)=>{const l=i.get(u);l!==void 0&&Ae(l.mutation,h,wt.empty(),et.now()),Kn(n,h)&&(a=a.insert(u,h))}),a})}}/**
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
 */class Bl{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return d.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),d.resolve()}getNamedQuery(t,n){return d.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Ll(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),d.resolve()}}/**
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
 */class jl{constructor(){this.overlays=new L(E.comparator),this.hr=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Lt();return d.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),d.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,n,r){const s=Lt(),i=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return d.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new L((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let l=i.get(h.largestBatchId);l===null&&(l=Lt(),i=i.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=Lt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=s)););return d.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fl(n,r));let i=this.hr.get(n);i===void 0&&(i=R(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class ys{constructor(){this.Pr=new G(q.Ir),this.Tr=new G(q.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new q(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new q(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new k([])),r=new q(n,t),s=new q(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new k([])),r=new q(n,t),s=new q(n,t+1);let i=R();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new q(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class q{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||V(t.pr,n.pr)}static Er(t,n){return V(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
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
 */class $l{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new G(q.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dl(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return d.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new q(n,0),s=new q(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),d.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new G(V);return n.forEach(s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;E.isDocumentKey(i)||(i=i.child(""));const o=new q(new E(i),0);let a=new G(V);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(a=a.add(u.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){b(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(n.mutations,s=>{const i=new q(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new q(n,0),s=this.wr.firstAfterOrEqual(r);return d.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kl{constructor(t){this.vr=t,this.docs=function(){return new L(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return d.resolve(r?r.document.mutableCopy():W.newInvalidDocument(n))}getEntries(t,n){let r=Ct();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():W.newInvalidDocument(s))}),d.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ct();const o=n.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:l}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Vh(Ch(l),r)<=0||(s.has(l.key)||Kn(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,r,s){I()}Fr(t,n){return d.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new zl(this)}getSize(t){return d.resolve(this.size)}}class zl extends bl{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),d.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class Gl{constructor(t){this.persistence=t,this.Mr=new he(n=>ds(n),fs),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ys,this.targetCount=0,this.Lr=re.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),d.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new re(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.qn(n),d.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),d.waitFor(i).next(()=>s)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return d.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),d.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),d.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),d.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return d.resolve(r)}containsKey(t,n){return d.resolve(this.Nr.containsKey(n))}}/**
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
 */class Ql{constructor(t,n){this.Br={},this.overlays={},this.kr=new us(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Gl(this),this.indexManager=new Ml,this.remoteDocumentCache=function(s){return new Kl(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Ol(n),this.$r=new Bl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new jl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new $l(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){p("MemoryPersistence","Starting transaction:",t);const s=new Hl(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return d.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Hl extends Nh{constructor(t){super(),this.currentSequenceNumber=t}}class Es{constructor(t){this.persistence=t,this.zr=new ys,this.jr=null}static Hr(t){return new Es(t)}get Jr(){if(this.jr)return this.jr;throw I()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),d.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const s=E.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,T.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return d.or([()=>d.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class vs{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=R(),s=R();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vs(t,n.fromCache,r,s)}}/**
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
 */class Wl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Yl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return eu()?8:Ot.v(dn())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Wl;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(fe()<=It.DEBUG&&p("QueryEngine","SDK will not create cache indexes for query:",Kt(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(fe()<=It.DEBUG&&p("QueryEngine","Query:",Kt(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(fe()<=It.DEBUG&&p("QueryEngine","The SDK decides to create cache indexes for query:",Kt(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,dt(n))):d.resolve())}ji(t,n){if(oi(n))return d.resolve(null);let r=dt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Cr(n,null,"F"),r=dt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=R(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Zi(n,a);return this.Xi(n,h,o,u.readTime)?this.ji(t,Cr(n,null,"F")):this.es(t,h,n,u)}))})))}Hi(t,n,r,s){return oi(n)||s.isEqual(T.min())?d.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?d.resolve(null):(fe()<=It.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kt(n)),this.es(t,o,n,Sh(s,-1)).next(a=>a))})}Zi(t,n){let r=new G(Xo(t));return n.forEach((s,i)=>{Kn(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return fe()<=It.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",Kt(n)),this.zi.getDocumentsMatchingQuery(t,n,Pt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Xl{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new L(V),this.rs=new he(i=>ds(i),fs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ql(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Jl(e,t,n,r){return new Xl(e,t,n,r)}async function ga(e,t){const n=P(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=R();for(const h of s){o.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}for(const h of i){a.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function ma(e){const t=P(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Zl(e,t){const n=P(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,c)=>{const f=s.get(c);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,c).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,c)));let _=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(c)!==null?_=_.withResumeToken(J.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,r)),s=s.insert(c,_),function(C,w,O){return C.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(f,_,l)&&a.push(n.Qr.updateTargetData(i,_))});let u=Ct(),h=R();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(tc(i,o,t.documentUpdates).next(l=>{u=l.cs,h=l.ls})),!r.isEqual(T.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(c=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return d.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.ns=s,i))}function tc(e,t,n){let r=R(),s=R();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ct();return n.forEach((a,u)=>{const h=i.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):p("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:s}})}function ec(e,t){const n=P(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,d.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new At(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function xr(e,t,n){const r=P(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ge(o))throw o;p("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function _i(e,t,n){const r=P(e);let s=T.min(),i=R();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,l){const c=P(u),f=c.rs.get(l);return f!==void 0?d.resolve(c.ns.get(f)):c.Qr.getTargetData(h,l)}(r,o,dt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:T.min(),n?i:R())).next(a=>(nc(r,Xh(t),a),{documents:a,hs:i})))}function nc(e,t,n){let r=e.ss.get(t)||T.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class yi{constructor(){this.activeTargetIds=rl()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rc{constructor(){this.no=new yi,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new yi,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class sc{io(t){}shutdown(){}}/**
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
 */class Ei{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let an=null;function ur(){return an===null?an=function(){return 268435456+Math.round(2147483648*Math.random())}():an++,"0x"+an.toString(16)}/**
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
 */const ic={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oc{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Q="WebChannelConnection";class ac extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ur(),u=this.bo(n,r.toUriEncodedString());p("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,i,o),this.Co(n,u,h,s).then(l=>(p("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Zt("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ue}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=ic[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=ur();return new Promise((o,a)=>{const u=new ph;u.setWithCredentials(!0),u.listenOnce(gh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ir.NO_ERROR:const l=u.getResponseJson();p(Q,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case ir.TIMEOUT:p(Q,`RPC '${t}' ${i} timed out`),a(new y(g.DEADLINE_EXCEEDED,"Request time out"));break;case ir.HTTP_ERROR:const c=u.getStatus();if(p(Q,`RPC '${t}' ${i} failed with status:`,c,"response text:",u.getResponseText()),c>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const _=f==null?void 0:f.error;if(_&&_.status&&_.message){const S=function(w){const O=w.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(O)>=0?O:g.UNKNOWN}(_.status);a(new y(S,_.message))}else a(new y(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(g.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{p(Q,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);p(Q,`RPC '${t}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Fo(t,n,r){const s=ur(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=dh(),a=fh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");p(Q,`Creating RPC '${t}' stream ${s}: ${l}`,u);const c=o.createWebChannel(l,u);let f=!1,_=!1;const S=new oc({lo:w=>{_?p(Q,`Not sending because RPC '${t}' stream ${s} is closed:`,w):(f||(p(Q,`Opening RPC '${t}' stream ${s} transport.`),c.open(),f=!0),p(Q,`RPC '${t}' stream ${s} sending:`,w),c.send(w))},ho:()=>c.close()}),C=(w,O,nt)=>{w.listen(O,_t=>{try{nt(_t)}catch(yt){setTimeout(()=>{throw yt},0)}})};return C(c,rn.EventType.OPEN,()=>{_||p(Q,`RPC '${t}' stream ${s} transport opened.`)}),C(c,rn.EventType.CLOSE,()=>{_||(_=!0,p(Q,`RPC '${t}' stream ${s} transport closed`),S.Vo())}),C(c,rn.EventType.ERROR,w=>{_||(_=!0,Zt(Q,`RPC '${t}' stream ${s} transport errored:`,w),S.Vo(new y(g.UNAVAILABLE,"The operation could not be completed")))}),C(c,rn.EventType.MESSAGE,w=>{var O;if(!_){const nt=w.data[0];b(!!nt);const _t=nt,yt=_t.error||((O=_t[0])===null||O===void 0?void 0:O.error);if(yt){p(Q,`RPC '${t}' stream ${s} received error:`,yt);const Xe=yt.status;let jt=function(za){const Ns=M[za];if(Ns!==void 0)return ia(Ns)}(Xe),Je=yt.message;jt===void 0&&(jt=g.INTERNAL,Je="Unknown error status: "+Xe+" with message "+yt.message),_=!0,S.Vo(new y(jt,Je)),c.close()}else p(Q,`RPC '${t}' stream ${s} received:`,nt),S.mo(nt)}}),C(a,mh.STAT_EVENT,w=>{w.stat===Ws.PROXY?p(Q,`RPC '${t}' stream ${s} detected buffering proxy`):w.stat===Ws.NOPROXY&&p(Q,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.Ro()},0),S}}function hr(){return typeof document<"u"?document:null}/**
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
 */function pa(e){return new Tl(e,!0)}/**
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
 */class _a{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class uc{constructor(t,n,r,s,i,o,a,u){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new _a(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(gt(n.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new y(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hc extends uc{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Pl(this.serializer,t),r=function(i){if(!("targetChange"in i))return T.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?T.min():o.readTime?Yt(o.readTime):T.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=pi(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=Sr(u)?{documents:Sl(i,u)}:{query:Cl(i,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wl(i,o.resumeToken);const h=Nr(i,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(T.min())>0){a.readTime=Il(i,o.snapshotVersion.toTimestamp());const h=Nr(i,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=Dl(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=pi(this.serializer),n.removeTarget=t,this.t_(n)}}/**
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
 */class lc extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new y(g.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,kr(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(g.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,kr(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(g.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class cc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(gt(n),this.g_=!1):p("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class dc{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{We(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=P(u);h.v_.add(4),await He(h),h.x_.set("Unknown"),h.v_.delete(4),await Hn(h)}(this))})}),this.x_=new cc(r,s)}}async function Hn(e){if(We(e))for(const t of e.F_)await t(!0)}async function He(e){for(const t of e.F_)await t(!1)}function ya(e,t){const n=P(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),As(n)?ws(n):le(n).Jo()&&Is(n,t))}function Ts(e,t){const n=P(e),r=le(n);n.C_.delete(t),r.Jo()&&Ea(n,t),n.C_.size===0&&(r.Jo()?r.Xo():We(n)&&n.x_.set("Unknown"))}function Is(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}le(e).c_(t)}function Ea(e,t){e.O_.Oe(t),le(e).l_(t)}function ws(e){e.O_=new _l({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),le(e).start(),e.x_.p_()}function As(e){return We(e)&&!le(e).Ho()&&e.C_.size>0}function We(e){return P(e).v_.size===0}function va(e){e.O_=void 0}async function fc(e){e.C_.forEach((t,n)=>{Is(e,t)})}async function gc(e,t){va(e),As(e)?(e.x_.S_(t),ws(e)):e.x_.set("Unknown")}async function mc(e,t,n){if(e.x_.set("Online"),t instanceof aa&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){p("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vi(e,r)}else if(t instanceof ln?e.O_.$e(t):t instanceof oa?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(T.min()))try{const r=await ma(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.C_.get(h);l&&i.C_.set(h,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const l=i.C_.get(u);if(!l)return;i.C_.set(u,l.withResumeToken(J.EMPTY_BYTE_STRING,l.snapshotVersion)),Ea(i,u);const c=new At(l.target,u,h,l.sequenceNumber);Is(i,c)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){p("RemoteStore","Failed to raise snapshot:",r),await vi(e,r)}}async function vi(e,t,n){if(!Ge(t))throw t;e.v_.add(1),await He(e),e.x_.set("Offline"),n||(n=()=>ma(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Hn(e)})}async function Ti(e,t){const n=P(e);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=We(n);n.v_.add(3),await He(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Hn(n)}async function pc(e,t){const n=P(e);t?(n.v_.delete(2),await Hn(n)):t||(n.v_.add(2),await He(n),n.x_.set("Unknown"))}function le(e){return e.N_||(e.N_=function(n,r,s){const i=P(n);return i.R_(),new hc(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:fc.bind(null,e),To:gc.bind(null,e),u_:mc.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),As(e)?ws(e):e.x_.set("Unknown")):(await e.N_.stop(),va(e))})),e.N_}/**
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
 */class Rs{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Rs(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(e,t){if(gt("AsyncQueue",`${t}: ${e}`),Ge(e))return new y(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Xt{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=pe(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new Xt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Xt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Xt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Ii{constructor(){this.B_=new L(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):I():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class se{constructor(t,n,r,s,i,o,a,u,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new se(t,n,Xt.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$n(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _c{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class yc{constructor(){this.queries=new he(t=>Yo(t),$n),this.onlineState="Unknown",this.W_=new Set}}async function Ia(e,t){const n=P(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new _c,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ta(o,`Initialization of query '${Kt(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&Ps(n)}async function wa(e,t){const n=P(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ec(e,t){const n=P(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Ps(n)}function vc(e,t,n){const r=P(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Ps(e){e.W_.forEach(t=>{t.next()})}var Or,wi;(wi=Or||(Or={})).j_="default",wi.Cache="cache";class Aa{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new se(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Or.Cache}}/**
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
 */class Ra{constructor(t){this.key=t}}class Pa{constructor(t){this.key=t}}class Tc{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=R(),this.mutatedKeys=R(),this.ha=Xo(t),this.Pa=new Xt(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new Ii,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,c)=>{const f=s.get(l),_=Kn(this.query,c)?c:null,S=!!f&&this.mutatedKeys.has(f.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let w=!1;f&&_?f.data.isEqual(_.data)?S!==C&&(r.track({type:3,doc:_}),w=!0):this.da(f,_)||(r.track({type:2,doc:_}),w=!0,(u&&this.ha(_,u)>0||h&&this.ha(_,h)<0)&&(a=!0)):!f&&_?(r.track({type:0,doc:_}),w=!0):f&&!_&&(r.track({type:1,doc:f}),w=!0,(u||h)&&(a=!0)),w&&(_?(o=o.add(_),i=C?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,c)=>function(_,S){const C=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return C(_)-C(S)}(l.type,c.type)||this.ha(l.doc,c.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],u=this.la.size===0&&this.current&&!s?1:0,h=u!==this.ca;return this.ca=u,o.length!==0||h?{snapshot:new se(this.query,t.Pa,i,o,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Ii,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=R(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Pa(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Ra(r))}),n}fa(t){this.ua=t.hs,this.la=R();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return se.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Ic{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class wc{constructor(t){this.key=t,this.pa=!1}}class Ac{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new he(a=>Yo(a),$n),this.Sa=new Map,this.ba=new Set,this.Da=new L(E.comparator),this.Ca=new Map,this.va=new ys,this.Fa={},this.Ma=new Map,this.xa=re.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Rc(e,t,n=!0){const r=Na(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Sa(r,t,n,!0),s}async function Pc(e,t){const n=Na(e);await Sa(n,t,!0,!1)}async function Sa(e,t,n,r){const s=await ec(e.localStore,dt(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Sc(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&ya(e.remoteStore,s),a}async function Sc(e,t,n,r,s){e.Na=(c,f,_)=>async function(C,w,O,nt){let _t=w.view.Ta(O);_t.Xi&&(_t=await _i(C.localStore,w.query,!1).then(({documents:Je})=>w.view.Ta(Je,_t)));const yt=nt&&nt.targetChanges.get(w.targetId),Xe=nt&&nt.targetMismatches.get(w.targetId)!=null,jt=w.view.applyChanges(_t,C.isPrimaryClient,yt,Xe);return Ri(C,w.targetId,jt.Va),jt.snapshot}(e,c,f,_);const i=await _i(e.localStore,t,!0),o=new Tc(t,i.hs),a=o.Ta(i.documents),u=Qe.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=o.applyChanges(a,e.isPrimaryClient,u);Ri(e,n,h.Va);const l=new Ic(t,n,o);return e.wa.set(t,l),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),h.snapshot}async function Cc(e,t,n){const r=P(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!$n(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xr(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ts(r.remoteStore,s.targetId),Lr(r,s.targetId)}).catch(is)):(Lr(r,s.targetId),await xr(r.localStore,s.targetId,!0))}async function Vc(e,t){const n=P(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ts(n.remoteStore,r.targetId))}async function Ca(e,t){const n=P(e);try{const r=await Zl(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(b(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?b(o.pa):s.removedDocuments.size>0&&(b(o.pa),o.pa=!1))}),await Da(n,r,t)}catch(r){await is(r)}}function Ai(e,t,n){const r=P(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=P(o);u.onlineState=a;let h=!1;u.queries.forEach((l,c)=>{for(const f of c.Q_)f.G_(a)&&(h=!0)}),h&&Ps(u)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Dc(e,t,n){const r=P(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new L(E.comparator);o=o.insert(i,W.newNoDocument(i,T.min()));const a=R().add(i),u=new Qn(T.min(),new Map,new L(V),o,a);await Ca(r,u),r.Da=r.Da.remove(i),r.Ca.delete(t),Ss(r)}else await xr(r.localStore,t,!1).then(()=>Lr(r,t,n)).catch(is)}function Lr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Va(e,r)})}function Va(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(Ts(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Ss(e))}function Ri(e,t,n){for(const r of n)r instanceof Ra?(e.va.addReference(r.key,t),Nc(e,r)):r instanceof Pa?(p("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Va(e,r.key)):I()}function Nc(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(p("SyncEngine","New document in limbo: "+n),e.ba.add(r),Ss(e))}function Ss(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new E(k.fromString(t)),r=e.xa.next();e.Ca.set(r,new wc(n)),e.Da=e.Da.insert(n,r),ya(e.remoteStore,new At(dt(gs(n.path)),r,"TargetPurposeLimboResolution",us._e))}}async function Da(e,t,n){const r=P(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){s.push(h);const l=vs.Ki(u.targetId,h);i.push(l)}}))}),await Promise.all(o),r.ya.u_(s),await async function(u,h){const l=P(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(h,f=>d.forEach(f.qi,_=>l.persistence.referenceDelegate.addReference(c,f.targetId,_)).next(()=>d.forEach(f.Qi,_=>l.persistence.referenceDelegate.removeReference(c,f.targetId,_)))))}catch(c){if(!Ge(c))throw c;p("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const f=c.targetId;if(!c.fromCache){const _=l.ns.get(f),S=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(S);l.ns=l.ns.insert(f,C)}}}(r.localStore,i))}async function kc(e,t){const n=P(e);if(!n.currentUser.isEqual(t)){p("SyncEngine","User change. New user:",t.toKey());const r=await ga(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(u=>{u.reject(new y(g.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Da(n,r.us)}}function xc(e,t){const n=P(e),r=n.Ca.get(t);if(r&&r.pa)return R().add(r.key);{let s=R();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Na(e){const t=P(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ca.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dc.bind(null,t),t.ya.u_=Ec.bind(null,t.eventManager),t.ya.La=vc.bind(null,t.eventManager),t}class Pi{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=pa(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Jl(this.persistence,new Yl,t.initialUser,this.serializer)}createPersistence(t){return new Ql(Es.Hr,this.serializer)}createSharedClientState(t){return new rc}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oc{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ai(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kc.bind(null,this.syncEngine),await pc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new yc}()}createDatastore(t){const n=pa(t.databaseInfo.databaseId),r=function(i){return new ac(i)}(t.databaseInfo);return function(i,o,a,u){return new lc(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new dc(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Ai(this.syncEngine,n,0),function(){return Ei.D()?new Ei:new sc}())}createSyncEngine(t,n){return function(s,i,o,a,u,h,l){const c=new Ac(s,i,o,a,u,h);return l&&(c.Oa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=P(r);p("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await He(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class ka{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):gt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Lc{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=H.UNAUTHENTICATED,this.clientId=jo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{p("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(p("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ta(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function lr(e,t){e.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ga(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Si(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Fc(e);p("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Ti(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Ti(t.remoteStore,s)),e._onlineComponents=t}function Mc(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Fc(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){p("FirestoreClient","Using user provided OfflineComponentProvider");try{await lr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Mc(n))throw n;Zt("Error using user provided cache. Falling back to memory cache: "+n),await lr(e,new Pi)}}else p("FirestoreClient","Using default OfflineComponentProvider"),await lr(e,new Pi);return e._offlineComponents}async function bc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(p("FirestoreClient","Using user provided OnlineComponentProvider"),await Si(e,e._uninitializedComponentsProvider._online)):(p("FirestoreClient","Using default OnlineComponentProvider"),await Si(e,new Oc))),e._onlineComponents}async function xa(e){const t=await bc(e),n=t.eventManager;return n.onListen=Rc.bind(null,t.syncEngine),n.onUnlisten=Cc.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Pc.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Vc.bind(null,t.syncEngine),n}function Uc(e,t,n={}){const r=new vt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const l=new ka({next:f=>{o.enqueueAndForget(()=>wa(i,c));const _=f.docs.has(a);!_&&f.fromCache?h.reject(new y(g.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&f.fromCache&&u&&u.source==="server"?h.reject(new y(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(f)},error:f=>h.reject(f)}),c=new Aa(gs(a.path),l,{includeMetadataChanges:!0,ta:!0});return Ia(i,c)}(await xa(e),e.asyncQueue,t,n,r)),r.promise}function qc(e,t,n={}){const r=new vt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,h){const l=new ka({next:f=>{o.enqueueAndForget(()=>wa(i,c)),f.fromCache&&u.source==="server"?h.reject(new y(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(f)},error:f=>h.reject(f)}),c=new Aa(a,l,{includeMetadataChanges:!0,ta:!0});return Ia(i,c)}(await xa(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function Oa(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Ci=new Map;/**
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
 */function La(e,t,n){if(!n)throw new y(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Bc(e,t,n,r){if(t===!0&&r===!0)throw new y(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Vi(e){if(!E.isDocumentKey(e))throw new y(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Di(e){if(E.isDocumentKey(e))throw new y(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function jc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function Fe(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jc(e);throw new y(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ni{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Bc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new y(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new y(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new y(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wn{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ni({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ni(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yh;switch(r.type){case"firstParty":return new Ih(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ci.get(n);r&&(p("ComponentProvider","Removing Datastore"),Ci.delete(n),r.terminate())}(this),Promise.resolve()}}function $c(e,t,n,r={}){var s;const i=(e=Fe(e,Wn))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=H.MOCK_USER;else{a=tu(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new H(h)}e._authCredentials=new Eh(new Bo(a,u))}}/**
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
 */class Yn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Yn(this.firestore,t,this._query)}}class ft{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class Rt extends Yn{constructor(t,n,r){super(t,n,gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new E(t))}withConverter(t){return new Rt(this.firestore,t,this._path)}}function Kc(e,t,...n){if(e=Mi(e),La("collection","path",t),e instanceof Wn){const r=k.fromString(t,...n);return Di(r),new Rt(e,null,r)}{if(!(e instanceof ft||e instanceof Rt))throw new y(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(k.fromString(t,...n));return Di(r),new Rt(e.firestore,null,r)}}function zc(e,t,...n){if(e=Mi(e),arguments.length===1&&(t=jo.newId()),La("doc","path",t),e instanceof Wn){const r=k.fromString(t,...n);return Vi(r),new ft(e,null,new E(r))}{if(!(e instanceof ft||e instanceof Rt))throw new y(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(k.fromString(t,...n));return Vi(r),new ft(e.firestore,e instanceof Rt?e.converter:null,new E(r))}}/**
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
 */class Gc{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new _a(this,"async_queue_retry"),this.cu=()=>{const n=hr();n&&p("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=hr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=hr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new vt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Ge(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw gt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=Rs.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&I()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class Cs extends Wn{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Gc}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fa(this),this._firestoreClient.terminate()}}function Qc(e,t){const n=typeof e=="object"?e:Ya(),r=typeof e=="string"?e:t||"(default)",s=Xa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ja("firestore");i&&$c(s,...i)}return s}function Ma(e){return e._firestoreClient||Fa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Fa(e){var t,n,r;const s=e._freezeSettings(),i=function(a,u,h,l){return new Mh(a,u,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Oa(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Lc(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class wn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wn(J.fromBase64String(t))}catch(n){throw new y(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new wn(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ba{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Hc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}const Wc=new RegExp("[~\\*/\\[\\]]");function Yc(e,t,n){if(t.search(Wc)>=0)throw ki(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ba(...t.split("."))._internalPath}catch{throw ki(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ki(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new y(g.INVALID_ARGUMENT,a+e+u)}/**
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
 */class Ua{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(qa("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Xc extends Ua{data(){return super.data()}}function qa(e,t){return typeof t=="string"?Yc(e,t):t instanceof ba?t._internalPath:t._delegate._internalPath}/**
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
 */function Jc(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zc{convertValue(t,n="none"){switch(qt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ut(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Bn(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Hc(F(t.latitude),F(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ls(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oe(t));default:return null}}convertTimestamp(t){const n=St(t);return new et(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=k.fromString(t);b(fa(r));const s=new Le(r.get(1),r.get(3)),i=new E(r.popFirst(5));return s.isEqual(n)||gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class ye{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ba extends Ua{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new cn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(qa("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cn extends Ba{data(t={}){return super.data(t)}}class td{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new ye(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new cn(this._firestore,this._userDataWriter,r.key,r,new ye(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new cn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ye(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new cn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ye(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,l=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:ed(a.type),doc:u,oldIndex:h,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ed(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
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
 */function nd(e){e=Fe(e,ft);const t=Fe(e.firestore,Cs);return Uc(Ma(t),e._key).then(n=>sd(t,e,n))}class ja extends Zc{constructor(t){super(),this.firestore=t}convertBytes(t){return new wn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function rd(e){e=Fe(e,Yn);const t=Fe(e.firestore,Cs),n=Ma(t),r=new ja(t);return Jc(e._query),qc(n,e._query).then(s=>new td(t,r,e,s))}function sd(e,t,n){const r=n.docs.get(t._key),s=new ja(e);return new Ba(e,s,t._key,r,new ye(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){ue=s})(Za),Qa(new Ha("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Cs(new vh(r.getProvider("auth-internal")),new Ah(r.getProvider("app-check-internal")),function(h,l){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new y(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Le(h.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ks(Ys,"4.5.1",t),ks(Ys,"4.5.1","esm2017")})();var id={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},od=`\r
`,ad="\uFEFF",Vs=e=>Object.assign({},id,e);class ud extends Error{constructor(t){super(t),this.name="CsvGenerationError"}}class hd extends Error{constructor(t){super(t),this.name="EmptyHeadersError"}}class ld extends Error{constructor(t){super(t),this.name="CsvDownloadEnvironmentError"}}var Ye=e=>e,ot=e=>e,Xn=Ye,ie=Ye,xi=Ye,Oi=Ye,cd=function(e,t){return t=='"'&&e.indexOf('"')>-1?e.replace(/"/g,'""'):e},dd=e=>xi(typeof e=="object"?e.key:e),fd=e=>Oi(typeof e=="object"?e.displayLabel:e),gd=(e,...t)=>t.reduce((n,r)=>r(n),e),md=e=>t=>e.useBom?Xn(ot(t)+ad):t,pd=e=>t=>e.showTitle?Ds(Xn(ot(t)+e.title))(ie("")):t,Ds=e=>t=>Xn(ot(e)+ot(t)+od),$a=e=>(t,n)=>_d(e)(ie(t+n)),_d=e=>t=>Ye(ot(t)+e.fieldSeparator),yd=(e,t)=>n=>{if(!e.showColumnHeaders)return n;if(t.length<1)throw new hd("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let r=ie("");for(let s=0;s<t.length;s++){const i=fd(t[s]);r=$a(e)(r,Ka(e,i))}return r=ie(ot(r).slice(0,-1)),Ds(n)(r)},Ed=(e,t,n)=>r=>{let s=r;for(var i=0;i<n.length;i++){let o=ie("");for(let a=0;a<t.length;a++){const u=dd(t[a]),h=typeof n[i][ot(u)]>"u"?e.replaceUndefinedWith:n[i][ot(u)];o=$a(e)(o,Ka(e,h))}o=ie(ot(o).slice(0,-1)),s=Ds(s)(o)}return s},Li=e=>+e===e&&(!isFinite(e)||!!(e%1)),Ka=(e,t)=>{if(e.decimalSeparator==="locale"&&Li(t))return t.toLocaleString();if(e.decimalSeparator!=="."&&Li(t))return t.toString().replace(".",e.decimalSeparator);if(typeof t=="string"){let n=t;return(e.quoteStrings||e.fieldSeparator&&t.indexOf(e.fieldSeparator)>-1||e.quoteCharacter&&t.indexOf(e.quoteCharacter)>-1||t.indexOf(`
`)>-1||t.indexOf("\r")>-1)&&(n=e.quoteCharacter+cd(t,e.quoteCharacter)+e.quoteCharacter),n}if(typeof t=="boolean"&&e.boolDisplay){const n=t?"true":"false";return e.boolDisplay[n]}return t},vd=e=>t=>{const n=Vs(e),r=n.useKeysAsHeaders?Object.keys(t[0]):n.columnHeaders;let s=gd(Xn(""),md(n),pd(n),yd(n,r),Ed(n,r,t));if(ot(s).length<1)throw new ud("Output is empty. Is your data formatted correctly?");return s},Td=e=>t=>{if(!window)throw new ld("Downloading only supported in a browser environment.");const n=Vs(e),r=ot(t),s=n.useTextFile?"plain":"csv",i=n.useTextFile?"txt":"csv";let o=new Blob([r],{type:`text/${s};charset=utf8;`}),a=document.createElement("a");a.download=`${n.filename}.${i}`,a.href=URL.createObjectURL(o),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)},un={VITE_USE_LIFF:"false",VITE_MEMBER_SIGNUP_URL:"https://liquorexplorer.cyberbiz.co/zh-TW/account/signup",VITE_SKIP_LIFF:"false",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Id={class:"container min-h-screen bg-standard pb-12 pt-[20px]"},wd={class:"flex flex-col items-center"},Ad={class:"mb-20 mt-10 text-xl"},Rd=rt("p",{class:"mb-16 text-2xl font-medium"},"參加者資訊",-1),Pd=rt("p",{class:"mb-16 text-center text-2xl font-medium"},"賀卡編號",-1),Sd={class:"grid gap-4 lg:grid-cols-6"},Cd=["src"],Vd={class:"mt-4 block text-center text-xl font-medium"},Ld=ru({__name:"DownLoadView",setup(e){const t=hu(),n=su(),r=Qc(lu),s=un.VITE_FIRESTORE_SHARE_COUNTS_COLLECTION,i=un.VITE_FIRESTORE_SHARE_BTN_DOC,o=un.VITE_FIRESTORE_SENDERS_COLLECTION,a=un.VITE_CSV_FILENAME,u=iu(0),h=async()=>{const S=zc(r,s,i),C=await nd(S);C.exists()?u.value=C.data().clicks:console.log("No such document!")};ou(()=>{h()});const l=Vs({useKeysAsHeaders:!0,filename:a}),c=async()=>{let S=[];(await rd(Kc(r,o))).forEach(O=>{let nt={uuid:O.data().uuid,displayName:O.data().displayName,productNum:O.data().selectedProductNumber};S.push(nt)});const w=vd(l)(S);Td(l)(w)},f=()=>{cu(n).then(()=>{t.push({name:"admin"})}).catch(S=>{console.log("登出失敗",S)})},_=["/images/card01.png","/images/card02.png","/images/card03.png","/images/card04.png","/images/card05.png","/images/card06.png"];return(S,C)=>(xs(),Os("main",Id,[rt("div",wd,[rt("h2",Ad,"目前總分享次數："+Ls(u.value),1),rt("div",{class:"mb-20 flex flex-col justify-center"},[Rd,rt("button",{type:"button",class:"rounded bg-blue-950 px-4 py-2 text-white hover:bg-blue-800",onClick:c}," 下載CSV ")]),rt("div",null,[Pd,rt("ul",Sd,[(xs(),Os(au,null,uu(_,(w,O)=>rt("li",{key:O},[rt("img",{class:"w-full",src:w,alt:"product"},null,8,Cd),rt("span",Vd,Ls(O+1),1)])),64))])]),rt("div",{class:"absolute right-12 top-12"},[rt("button",{type:"button",class:"rounded bg-zinc-800 px-3 py-2 text-sm text-white hover:bg-zinc-600",onClick:f}," 登出 ")])])]))}});export{Ld as default};
