function sample(){var N='',ub='" for "gwt:onLoadErrorFn"',sb='" for "gwt:onPropertyErrorFn"',gb='"><\/script>',X='#',mc='.cache.html',Z='/',lc=':',mb='::',uc='<script defer="defer">sample.onInjectionDone(\'sample\')<\/script>',fb='<script id="',pb='=',Y='?',Zb='ActiveXObject',rb='Bad handler "',$b='ChromeTab.ChromeFrame',tc='DOMContentLoaded',kc="GWT module 'sample' may need to be (re)compiled",hb='SCRIPT',eb='__gwt_marker_sample',Ub='adobeair',Vb='air',ib='base',ab='baseUrl',R='begin',Q='bootstrap',Ab='chrome',Yb='chromeframe',_='clear.cache.gif',ob='content',nc='css/chart.css',W='end',Qb='gecko',Sb='gecko1_8',Tb='gecko1_9',S='gwt.codesvr=',T='gwt.hosted=',U='gwt.hybrid',tb='gwt:onLoadErrorFn',qb='gwt:onPropertyErrorFn',nb='gwt:property',zb='gxt.user.agent',sc='head',ic='hosted.html?sample',rc='href',Eb='ie6',Gb='ie7',Ib='ie8',Jb='ie9',vb='iframe',$='img',wb="javascript:''",oc='link',ec='linux',hc='loadExternalRefs',dc='mac',cc='mac os x',bc='macintosh',jb='meta',yb='moduleRequested',V='moduleStartup',Cb='msie',Db='msie 6',Fb='msie 7',Hb='msie 8',kb='name',Bb='opera',xb='position:absolute;width:0;height:0;border:none',pc='rel',Rb='rv:1.8',Kb='safari',Mb='safari3',Ob='safari4',Pb='safari5',O='sample',cb='sample.nocache.js',lb='sample::',bb='script',jc='selectingPermutation',P='startup',qc='stylesheet',db='undefined',_b='unknown',Wb='user.agent',ac='user.agent.os',Lb='version/3',Nb='version/4',Xb='webkit',gc='win32',fc='windows';var l=window,m=document,n=l.__gwtStatsEvent?function(a){return l.__gwtStatsEvent(a)}:null,o=l.__gwtStatsSessionId?l.__gwtStatsSessionId:null,p,q,r,s=N,t={},u=[],v=[],w=[],x=0,y,z;n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Q,millis:(new Date).getTime(),type:R});if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={}}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={}}function A(){var b=false;try{var c=l.location.search;return (c.indexOf(S)!=-1||(c.indexOf(T)!=-1||l.external&&l.external.gwtOnLoad))&&c.indexOf(U)==-1}catch(a){}A=function(){return b};return b}
function B(){if(p&&q){var b=m.getElementById(O);var c=b.contentWindow;if(A()){c.__gwt_getProperty=function(a){return F(a)}}sample=null;c.gwtOnLoad(y,O,s,x);n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:V,millis:(new Date).getTime(),type:W})}}
function C(){function e(a){var b=a.lastIndexOf(X);if(b==-1){b=a.length}var c=a.indexOf(Y);if(c==-1){c=a.length}var d=a.lastIndexOf(Z,Math.min(c,b));return d>=0?a.substring(0,d+1):N}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=m.createElement($);b.src=a+_;a=e(b.src)}return a}
function g(){var a=E(ab);if(a!=null){return a}return N}
function h(){var a=m.getElementsByTagName(bb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(cb)!=-1){return e(a[b].src)}}return N}
function i(){var a;if(typeof isBodyLoaded==db||!isBodyLoaded()){var b=eb;var c;m.write(fb+b+gb);c=m.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=hb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return N}
function j(){var a=m.getElementsByTagName(ib);if(a.length>0){return a[a.length-1].href}return N}
var k=g();if(k==N){k=h()}if(k==N){k=i()}if(k==N){k=j()}if(k==N){k=e(m.location.href)}k=f(k);s=k;return k}
function D(){var b=document.getElementsByTagName(jb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(kb),g;if(f){f=f.replace(lb,N);if(f.indexOf(mb)>=0){continue}if(f==nb){g=e.getAttribute(ob);if(g){var h,i=g.indexOf(pb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=N}t[f]=h}}else if(f==qb){g=e.getAttribute(ob);if(g){try{z=eval(g)}catch(a){alert(rb+g+sb)}}}else if(f==tb){g=e.getAttribute(ob);if(g){try{y=eval(g)}catch(a){alert(rb+g+ub)}}}}}}
function E(a){var b=t[a];return b==null?null:b}
function F(a){var b=v[a](),c=u[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(z){z(a,d,b)}throw null}
var G;function H(){if(!G){G=true;var a=m.createElement(vb);a.src=wb;a.id=O;a.style.cssText=xb;a.tabIndex=-1;m.body.appendChild(a);n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:V,millis:(new Date).getTime(),type:yb});a.contentWindow.location.replace(s+J)}}
v[zb]=function(){var a=navigator.userAgent.toLowerCase();if(a.indexOf(Ab)!=-1)return Ab;if(a.indexOf(Bb)!=-1)return Bb;if(a.indexOf(Cb)!=-1){if(a.indexOf(Db)!=-1)return Eb;if(a.indexOf(Fb)!=-1)return Gb;if(a.indexOf(Hb)!=-1)return Ib;return Jb}if(a.indexOf(Kb)!=-1){if(a.indexOf(Lb)!=-1)return Mb;if(a.indexOf(Nb)!=-1)return Ob;return Pb}if(a.indexOf(Qb)!=-1){if(a.indexOf(Rb)!=-1)return Sb;return Tb}if(a.indexOf(Ub)!=-1)return Vb;return null};u[zb]={air:0,chrome:1,gecko1_8:2,gecko1_9:3,ie6:4,ie7:5,ie8:6,ie9:7,opera:8,safari3:9,safari4:10,safari5:11};v[Wb]=function(){var c=navigator.userAgent.toLowerCase();var d=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return c.indexOf(Bb)!=-1}())return Bb;if(function(){return c.indexOf(Xb)!=-1||function(){if(c.indexOf(Yb)!=-1){return true}if(typeof window[Zb]!=db){try{var b=new ActiveXObject($b);if(b){b.registerBhoIfNeeded();return true}}catch(a){}}return false}()}())return Kb;if(function(){return c.indexOf(Cb)!=-1&&m.documentMode>=9}())return Jb;if(function(){return c.indexOf(Cb)!=-1&&m.documentMode>=8}())return Ib;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(c);if(a&&a.length==3)return d(a)>=6000}())return Eb;if(function(){return c.indexOf(Qb)!=-1}())return Sb;return _b};u[Wb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};v[ac]=function(){var a=l.navigator.userAgent.toLowerCase();if(a.indexOf(bc)!=-1||a.indexOf(cc)!=-1){return dc}if(a.indexOf(ec)!=-1){return ec}if(a.indexOf(fc)!=-1||a.indexOf(gc)!=-1){return fc}return _b};u[ac]={linux:0,mac:1,windows:2};sample.onScriptLoad=function(){if(G){q=true;B()}};sample.onInjectionDone=function(){p=true;n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:hc,millis:(new Date).getTime(),type:W});B()};D();C();var I;var J;if(A()){if(l.external&&(l.external.initModule&&l.external.initModule(O))){l.location.reload();return}J=ic;I=N}n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Q,millis:(new Date).getTime(),type:jc});if(!A()){try{alert(kc);return;var K=I.indexOf(lc);if(K!=-1){x=Number(I.substring(K+1));I=I.substring(0,K)}J=I+mc}catch(a){return}}var L;function M(){if(!r){r=true;if(!__gwt_stylesLoaded[nc]){var a=m.createElement(oc);__gwt_stylesLoaded[nc]=a;a.setAttribute(pc,qc);a.setAttribute(rc,s+nc);m.getElementsByTagName(sc)[0].appendChild(a)}B();if(m.removeEventListener){m.removeEventListener(tc,M,false)}if(L){clearInterval(L)}}}
if(m.addEventListener){m.addEventListener(tc,function(){H();M()},false)}var L=setInterval(function(){if(/loaded|complete/.test(m.readyState)){H();M()}},50);n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:Q,millis:(new Date).getTime(),type:W});n&&n({moduleName:O,sessionId:o,subSystem:P,evtGroup:hc,millis:(new Date).getTime(),type:R});m.write(uc)}
sample();