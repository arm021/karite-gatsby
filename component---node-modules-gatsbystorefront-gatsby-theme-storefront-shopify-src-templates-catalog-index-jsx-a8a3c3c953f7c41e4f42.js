(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{JjMb:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("TJpk"),i=n("KQm4"),c=n("VdAu"),s=n("Tqld"),l=n("+ZDr"),f=n.n(l),u=function(e){var t=e.numPages,n=e.currentPage,a=e.shopifyThemePath,i=!1,s=!1;return 1!==n&&(i=a+"/"+(n-1)),2===n&&(i=a),n!==t&&(s=a+"/"+(n+1)),o.a.createElement(r.Fragment,null,t>=1?o.a.createElement(c.d,{justifyContent:"center",fontSize:"inherit",sx:{position:"relative",borderTopWidth:"1px",borderTopStyle:"solid",borderTopColor:"grey",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"grey"}},i?o.a.createElement(c.b,{as:f.a,to:i,rel:"prev",variant:"pagination",sx:{position:"absolute",margin:"auto",height:"100%",left:0}},"Previous"):o.a.createElement(c.b,{m:"auto",variant:"pagination",sx:{position:"absolute",opacity:".3",height:"100%",left:0}},"Previous"),Array.from({length:t}).map((function(e,r){var i,s=r+1;return s>=Math.max(1,n-2)&&s<=Math.min(n+2,t)?s===n?o.a.createElement(c.b,{mx:2,variant:"pagination-active",key:s},s):(i=1===s?a:a+"/"+s,o.a.createElement(c.b,{as:f.a,to:i,mx:2,variant:"pagination",key:s},s)):""})),s?o.a.createElement(c.b,{as:f.a,to:s,rel:"next",variant:"pagination",sx:{position:"absolute",margin:"auto",height:"100%",right:0}},"Next"):o.a.createElement(c.b,{m:"auto",variant:"pagination",sx:{position:"absolute",opacity:".3",height:"100%",right:0}},"Next")):"")};var p=function(e){var t=e.pageContext,n=t.limit,r=t.skip,a=t.cartUrl,l=e.data.collection.nodes[0],f=l.title,p=l.description,d=[];return e.data.collection.nodes.forEach((function(e){d=[].concat(Object(i.a)(d),Object(i.a)(e.products))})),o.a.createElement(c.d,{flexWrap:"wrap",mx:"auto",pt:["20vw","15vw"],sx:{background:'url("//cdn.shopify.com/s/files/1/0117/9005/7534/files/bg-face.jpg")'}},o.a.createElement(c.d,{width:1,flexWrap:["wrap","nowrap"],justifyContent:"space-between",alignItems:"flex-end"},o.a.createElement(c.a,{textAlign:"center",py:"2em",px:["2em","6em","14em"]},o.a.createElement(c.h,{fontSize:["10vw","5vw"],fontWeight:"body"},f),o.a.createElement(c.h,null,p))),o.a.createElement(c.d,{flexDirection:"column",bg:"background",mt:"1em",p:["5vw","3.5vw"]},o.a.createElement(c.d,{flexDirection:["column","row"]},o.a.createElement(s.a,{products:d,limit:n,skip:r,cartUrl:a})),o.a.createElement(c.a,{width:1,key:"pagination"},o.a.createElement(c.h,{textAlign:"center"},o.a.createElement(u,e.pageContext)))))};n("wTIg"),n("Wbzz"),n("MzTJ"),n("noZq"),n("1NZb"),n("A8MR"),n("JOp6"),n("8Qyq");n("Jz+W"),n("KD6P");var d,m=n("wx14"),v=n("zLVn"),b=n("TSYQ"),h=n.n(b);var g=n("Zeqi"),y=n("y8DL");var O=n("YGJp"),w=n("ZCiN");function x(e,t,n){return void 0===n&&(n=!1),function(e,t,n,o){void 0===o&&(o=!1);var a=Object(w.a)(n);Object(r.useEffect)((function(){var n="function"==typeof e?e():e;return n.addEventListener(t,a,o),function(){return n.removeEventListener(t,a,o)}}),[e])}(Object(r.useCallback)((function(){return document}),[]),e,t,n)}var j=o.a.createContext(null);var E=function(e){var t=function(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}();return[e[0],Object(r.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function C(e){return e.split("-")[0]}function k(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function D(e){var t=k(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function P(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){return e instanceof P(e).Element||e instanceof Element}function M(e){return e instanceof P(e).HTMLElement||e instanceof HTMLElement}function R(e){return"undefined"!=typeof ShadowRoot&&(e instanceof P(e).ShadowRoot||e instanceof ShadowRoot)}function S(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&R(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function T(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){return P(e).getComputedStyle(e)}function L(e){return["table","td","th"].indexOf(T(e))>=0}function B(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function W(e){return"html"===T(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||B(e)}function I(e){return M(e)&&"fixed"!==A(e).position?e.offsetParent:null}function q(e){for(var t=P(e),n=I(e);n&&L(n)&&"static"===A(n).position;)n=I(n);return n&&("html"===T(n)||"body"===T(n)&&"static"===A(n).position)?t:n||function(e){for(var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=W(e);M(n)&&["html","body"].indexOf(T(n))<0;){var r=A(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var H=Math.max,F=Math.min,_=Math.round;function z(e,t,n){return H(e,F(t,n))}function K(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function V(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Z="top",J="bottom",Q="right",Y="left",G=[Z,J,Q,Y],X=G.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),$=[].concat(G,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var te={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,c=C(n.placement),s=U(c),l=[Y,Q].indexOf(c)>=0?"height":"width";if(a&&i){var f=function(e,t){return K("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:V(e,G))}(o.padding,n),u=D(a),p="y"===s?Z:Y,d="y"===s?J:Q,m=n.rects.reference[l]+n.rects.reference[s]-i[s]-n.rects.popper[l],v=i[s]-n.rects.reference[s],b=q(a),h=b?"y"===s?b.clientHeight||0:b.clientWidth||0:0,g=m/2-v/2,y=f[p],O=h-u[l]-f[d],w=h/2-u[l]/2+g,x=z(y,w,O),j=s;n.modifiersData[r]=((t={})[j]=x,t.centerOffset=x-w,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&S(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.offsets,i=e.position,c=e.gpuAcceleration,s=e.adaptive,l=e.roundOffsets,f=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:_(_(t*r)/r)||0,y:_(_(n*r)/r)||0}}(a):"function"==typeof l?l(a):a,u=f.x,p=void 0===u?0:u,d=f.y,m=void 0===d?0:d,v=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),h=Y,g=Z,y=window;if(s){var O=q(n),w="clientHeight",x="clientWidth";O===P(n)&&"static"!==A(O=B(n)).position&&(w="scrollHeight",x="scrollWidth"),O=O,o===Z&&(g=J,m-=O[w]-r.height,m*=c?1:-1),o===Y&&(h=Q,p-=O[x]-r.width,p*=c?1:-1)}var j,E=Object.assign({position:i},s&&ne);return c?Object.assign({},E,((j={})[g]=b?"0":"",j[h]=v?"0":"",j.transform=(y.devicePixelRatio||1)<2?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",j)):Object.assign({},E,((t={})[g]=b?m+"px":"",t[h]=v?p+"px":"",t.transform="",t))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,a=n.adaptive,i=void 0===a||a,c=n.roundOffsets,s=void 0===c||c,l={placement:C(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ae={passive:!0};var ie={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,i=r.resize,c=void 0===i||i,s=P(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",n.update,ae)})),c&&s.addEventListener("resize",n.update,ae),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",n.update,ae)})),c&&s.removeEventListener("resize",n.update,ae)}},data:{}},ce={left:"right",right:"left",bottom:"top",top:"bottom"};function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return ce[e]}))}var le={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return le[e]}))}function ue(e){var t=P(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function pe(e){return k(B(e)).left+ue(e).scrollLeft}function de(e){var t=A(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function me(e,t){var n;void 0===t&&(t=[]);var r=function e(t){return["html","body","#document"].indexOf(T(t))>=0?t.ownerDocument.body:M(t)&&de(t)?t:e(W(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=P(r),i=o?[a].concat(a.visualViewport||[],de(r)?r:[]):r,c=t.concat(i);return o?c:c.concat(me(W(i)))}function ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function be(e,t){return"viewport"===t?ve(function(e){var t=P(e),n=B(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,i=0,c=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,c=r.offsetTop)),{width:o,height:a,x:i+pe(e),y:c}}(e)):M(t)?function(e){var t=k(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ve(function(e){var t,n=B(e),r=ue(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=H(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=H(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+pe(e),s=-r.scrollTop;return"rtl"===A(o||n).direction&&(c+=H(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:c,y:s}}(B(e)))}function he(e,t,n){var r="clippingParents"===t?function(e){var t=me(W(e)),n=["absolute","fixed"].indexOf(A(e).position)>=0&&M(e)?q(e):e;return N(n)?t.filter((function(e){return N(e)&&S(e,n)&&"body"!==T(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],i=o.reduce((function(t,n){var r=be(e,n);return t.top=H(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=H(r.left,t.left),t}),be(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function ge(e){return e.split("-")[1]}function ye(e){var t,n=e.reference,r=e.element,o=e.placement,a=o?C(o):null,i=o?ge(o):null,c=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(a){case Z:t={x:c,y:n.y-r.height};break;case J:t={x:c,y:n.y+n.height};break;case Q:t={x:n.x+n.width,y:s};break;case Y:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var l=a?U(a):null;if(null!=l){var f="y"===l?"height":"width";switch(i){case"start":t[l]=t[l]-(n[f]/2-r[f]/2);break;case"end":t[l]=t[l]+(n[f]/2-r[f]/2)}}return t}function Oe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,i=void 0===a?"clippingParents":a,c=n.rootBoundary,s=void 0===c?"viewport":c,l=n.elementContext,f=void 0===l?"popper":l,u=n.altBoundary,p=void 0!==u&&u,d=n.padding,m=void 0===d?0:d,v=K("number"!=typeof m?m:V(m,G)),b="popper"===f?"reference":"popper",h=e.elements.reference,g=e.rects.popper,y=e.elements[p?b:f],O=he(N(y)?y:y.contextElement||B(e.elements.popper),i,s),w=k(h),x=ye({reference:w,element:g,strategy:"absolute",placement:o}),j=ve(Object.assign({},g,x)),E="popper"===f?j:w,C={top:O.top-E.top+v.top,bottom:E.bottom-O.bottom+v.bottom,left:O.left-E.left+v.left,right:E.right-O.right+v.right},D=e.modifiersData.offset;if("popper"===f&&D){var P=D[o];Object.keys(C).forEach((function(e){var t=[Q,J].indexOf(e)>=0?1:-1,n=[Z,J].indexOf(e)>=0?"y":"x";C[e]+=P[n]*t}))}return C}var we={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=void 0===o||o,i=n.altAxis,c=void 0===i||i,s=n.fallbackPlacements,l=n.padding,f=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,b=t.options.placement,h=C(b),g=s||(h===b||!m?[se(b)]:function(e){if("auto"===C(e))return[];var t=se(e);return[fe(e),t,fe(t)]}(b)),y=[b].concat(g).reduce((function(e,n){return e.concat("auto"===C(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,c=n.flipVariations,s=n.allowedAutoPlacements,l=void 0===s?$:s,f=ge(r),u=f?c?X:X.filter((function(e){return ge(e)===f})):G,p=u.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,n){return t[n]=Oe(e,{placement:n,boundary:o,rootBoundary:a,padding:i})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),O=t.rects.reference,w=t.rects.popper,x=new Map,j=!0,E=y[0],k=0;k<y.length;k++){var D=y[k],P=C(D),N="start"===ge(D),M=[Z,J].indexOf(P)>=0,R=M?"width":"height",S=Oe(t,{placement:D,boundary:f,rootBoundary:u,altBoundary:p,padding:l}),T=M?N?Q:Y:N?J:Z;O[R]>w[R]&&(T=se(T));var A=se(T),L=[];if(a&&L.push(S[P]<=0),c&&L.push(S[T]<=0,S[A]<=0),L.every((function(e){return e}))){E=D,j=!1;break}x.set(D,L)}if(j)for(var B=function(e){var t=y.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},W=m?3:1;W>0;W--){if("break"===B(W))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function xe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[Z,Q,J,Y].some((function(t){return e[t]>=0}))}var Ee={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=Oe(t,{elementContext:"reference"}),c=Oe(t,{altBoundary:!0}),s=xe(i,r),l=xe(c,o,a),f=je(s),u=je(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":u})}};var Ce={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,i=$.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[Y,Z].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],c=a[1];return i=i||0,c=(c||0)*o,[Y,Q].indexOf(r)>=0?{x:c,y:i}:{x:i,y:c}}(n,t.rects,a),e}),{}),c=i[t.placement],s=c.x,l=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=i}};var ke={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ye({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var De={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=void 0===o||o,i=n.altAxis,c=void 0!==i&&i,s=n.boundary,l=n.rootBoundary,f=n.altBoundary,u=n.padding,p=n.tether,d=void 0===p||p,m=n.tetherOffset,v=void 0===m?0:m,b=Oe(t,{boundary:s,rootBoundary:l,padding:u,altBoundary:f}),h=C(t.placement),g=ge(t.placement),y=!g,O=U(h),w="x"===O?"y":"x",x=t.modifiersData.popperOffsets,j=t.rects.reference,E=t.rects.popper,k="function"==typeof v?v(Object.assign({},t.rects,{placement:t.placement})):v,P={x:0,y:0};if(x){if(a||c){var N="y"===O?Z:Y,M="y"===O?J:Q,R="y"===O?"height":"width",S=x[O],T=x[O]+b[N],A=x[O]-b[M],L=d?-E[R]/2:0,B="start"===g?j[R]:E[R],W="start"===g?-E[R]:-j[R],I=t.elements.arrow,_=d&&I?D(I):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},V=K[N],G=K[M],X=z(0,j[R],_[R]),$=y?j[R]/2-L-X-V-k:B-X-V-k,ee=y?-j[R]/2+L+X+G+k:W+X+G+k,te=t.elements.arrow&&q(t.elements.arrow),ne=te?"y"===O?te.clientTop||0:te.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][O]:0,oe=x[O]+$-re-ne,ae=x[O]+ee-re;if(a){var ie=z(d?F(T,oe):T,S,d?H(A,ae):A);x[O]=ie,P[O]=ie-S}if(c){var ce="x"===O?Z:Y,se="x"===O?J:Q,le=x[w],fe=le+b[ce],ue=le-b[se],pe=z(d?F(fe,oe):fe,le,d?H(ue,ae):ue);x[w]=pe,P[w]=pe-le}}t.modifiersData[r]=P}},requiresIfExists:["offset"]};function Pe(e,t,n){void 0===n&&(n=!1);var r,o,a=B(t),i=k(e),c=M(t),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(c||!c&&!n)&&(("body"!==T(t)||de(a))&&(s=(r=t)!==P(r)&&M(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:ue(r)),M(t)?((l=k(t)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=pe(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Ne(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}var Me={placement:"bottom",modifiers:[],strategy:"absolute"};function Re(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Se(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?Me:o;return function(e,t,n){void 0===n&&(n=a);var o,i,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Me,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],l=!1,f={state:c,setOptions:function(n){u(),c.options=Object.assign({},a,c.options,n),c.scrollParents={reference:N(e)?me(e):e.contextElement?me(e.contextElement):[],popper:me(t)};var o=function(e){var t=Ne(e);return ee.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=o.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var a=o({state:c,name:t,instance:f,options:r});s.push(a||function(){})}})),f.update()},forceUpdate:function(){if(!l){var e=c.elements,t=e.reference,n=e.popper;if(Re(t,n)){c.rects={reference:Pe(t,q(n),"fixed"===c.options.strategy),popper:D(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],a=o.fn,i=o.options,s=void 0===i?{}:i,u=o.name;"function"==typeof a&&(c=a({state:c,options:s,name:u,instance:f})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return i||(i=new Promise((function(e){Promise.resolve().then((function(){i=void 0,e(o())}))}))),i}),destroy:function(){u(),l=!0}};if(!Re(e,t))return f;function u(){s.forEach((function(e){return e()})),s=[]}return f.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Te=Se({defaultModifiers:[Ee,ke,oe,ie,Ce,we,De,te]}),Ae=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},Le={name:"applyStyles",enabled:!1},Be={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,a=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===a&&"setAttribute"in o){var i=o.getAttribute("aria-describedby");if(i&&-1!==i.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",i?i+","+r.id:r.id)}}},We=[];var Ie=function(e,t,n){var o=void 0===n?{}:n,a=o.enabled,i=void 0===a||a,c=o.placement,s=void 0===c?"bottom":c,l=o.strategy,f=void 0===l?"absolute":l,u=o.modifiers,p=void 0===u?We:u,d=Object(v.a)(o,["enabled","placement","strategy","modifiers"]),b=Object(r.useRef)(),h=Object(r.useCallback)((function(){var e;null==(e=b.current)||e.update()}),[]),g=Object(r.useCallback)((function(){var e;null==(e=b.current)||e.forceUpdate()}),[]),y=E(Object(r.useState)({placement:s,update:h,forceUpdate:g,attributes:{},styles:{popper:Ae(f),arrow:{}}})),O=y[0],w=y[1],x=Object(r.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),w({state:t,styles:n,attributes:r,update:h,forceUpdate:g,placement:t.placement})}}}),[h,g,w]);return Object(r.useEffect)((function(){b.current&&i&&b.current.setOptions({placement:s,strategy:f,modifiers:[].concat(p,[x,Le])})}),[f,s,x,i]),Object(r.useEffect)((function(){if(i&&null!=e&&null!=t)return b.current=Te(e,t,Object(m.a)({},d,{placement:s,strategy:f,modifiers:[].concat(p,[Be,x])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,w((function(e){return Object(m.a)({},e,{attributes:{},styles:{popper:Ae(f)}})})))}}),[i,e,t]),O};var qe=n("GEtZ"),Ue=n("2W6z"),He=n.n(Ue),Fe=n("dZvc"),_e=n("i8i4"),ze=n.n(_e);var Ke=function(e){return Object(Fe.a)(function(e){return e&&"setState"in e?ze.a.findDOMNode(e):null!=e?e:null}(e))},Ve=function(){};var Ze=function(e){return e&&("current"in e?e.current:e)};var Je=function(e,t,n){var o=void 0===n?{}:n,a=o.disabled,i=o.clickTrigger,c=void 0===i?"click":i,s=Object(r.useRef)(!1),l=t||Ve,f=Object(r.useCallback)((function(t){var n,r,o,a=Ze(e);He()(!!a,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),s.current=!(a&&(o=t,!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey))&&function(e){return 0===e.button}(t)&&(n=a,r=t.target,!(n.contains?n.contains(r):n.compareDocumentPosition?n===r||16&n.compareDocumentPosition(r):void 0)))}),[e]),u=Object(w.a)((function(e){s.current||l(e)})),p=Object(w.a)((function(e){27===e.keyCode&&l(e)}));Object(r.useEffect)((function(){if(!a&&null!=e){var t=window.event,n=Ke(Ze(e)),r=Object(qe.a)(n,c,f,!0),o=Object(qe.a)(n,c,(function(e){e!==t?u(e):t=void 0})),i=Object(qe.a)(n,"keyup",(function(e){e!==t?p(e):t=void 0})),s=[];return"ontouchstart"in n.documentElement&&(s=[].slice.call(n.body.children).map((function(e){return Object(qe.a)(e,"mousemove",Ve)}))),function(){r(),o(),i(),s.forEach((function(e){return e()}))}}}),[e,a,c,f,u,p])};function Qe(e){var t,n,r,o,a,i=e.enabled,c=e.enableEvents,s=e.placement,l=e.flip,f=e.offset,u=e.fixed,p=e.containerPadding,d=e.arrowElement,v=e.popperConfig,b=void 0===v?{}:v,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(b.modifiers);return Object(m.a)({},b,{placement:s,enabled:i,strategy:u?"fixed":b.strategy,modifiers:(a=Object(m.a)({},h,{eventListeners:{enabled:c},preventOverflow:Object(m.a)({},h.preventOverflow,{options:p?Object(m.a)({padding:p},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object(m.a)({offset:f},null==(r=h.offset)?void 0:r.options)},arrow:Object(m.a)({},h.arrow,{enabled:!!d,options:Object(m.a)({},null==(o=h.arrow)?void 0:o.options,{element:d})}),flip:Object(m.a)({enabled:!!l},h.flip)}),void 0===a&&(a={}),Array.isArray(a)?a:Object.keys(a).map((function(e){return a[e].name=e,a[e]})))})}var Ye=function(){};function Ge(e){void 0===e&&(e={});var t=Object(r.useContext)(j),n=Object(r.useState)(null),o=n[0],a=n[1],i=Object(r.useRef)(!1),c=e,s=c.flip,l=c.offset,f=c.rootCloseEvent,u=c.fixed,p=void 0!==u&&u,d=c.popperConfig,v=void 0===d?{}:d,b=c.usePopper,h=void 0===b?!!t:b,g=null==(null==t?void 0:t.show)?!!e.show:t.show,y=null==(null==t?void 0:t.alignEnd)?e.alignEnd:t.alignEnd;g&&!i.current&&(i.current=!0);var O=t||{},w=O.drop,x=O.setMenu,E=O.menuElement,C=O.toggleElement,k=y?"bottom-end":"bottom-start";"up"===w?k=y?"top-end":"top-start":"right"===w?k=y?"right-end":"right-start":"left"===w&&(k=y?"left-end":"left-start");var D=Ie(C,E,Qe({placement:k,enabled:!(!h||!g),enableEvents:g,offset:l,flip:s,fixed:p,arrowElement:o,popperConfig:v})),P=Object(m.a)({ref:x||Ye,"aria-labelledby":null==C?void 0:C.id},D.attributes.popper,{style:D.styles.popper}),N={show:g,alignEnd:y,hasShown:i.current,toggle:null==t?void 0:t.toggle,popper:h?D:null,arrowProps:h?Object(m.a)({ref:a},D.attributes.arrow,{style:D.styles.arrow}):{}};return Je(E,(function(e){null==t||t.toggle(!1,e)}),{clickTrigger:f,disabled:!g}),[P,N]}function Xe(e){var t=e.children,n=Ge(Object(v.a)(e,["children"])),r=n[0],a=n[1];return o.a.createElement(o.a.Fragment,null,a.hasShown?t(r,a):null)}Xe.displayName="ReactOverlaysDropdownMenu",Xe.defaultProps={usePopper:!0};var $e=Xe,et=function(){};function tt(){var e=Object(r.useContext)(j)||{},t=e.show,n=void 0!==t&&t,o=e.toggle,a=void 0===o?et:o,i=e.setToggle,c=Object(r.useCallback)((function(e){a(!n,e)}),[n,a]);return[{ref:i||et,onClick:c,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:a}]}function nt(e){var t=e.children,n=tt(),r=n[0],a=n[1];return o.a.createElement(o.a.Fragment,null,t(r,a))}nt.displayName="ReactOverlaysDropdownToggle";var rt=nt;function ot(){var e=Object(O.a)(),t=Object(r.useRef)(null),n=Object(r.useCallback)((function(n){t.current=n,e()}),[e]);return[t,n]}function at(e){var t,n,a=e.drop,i=e.alignEnd,c=e.defaultShow,s=e.show,l=e.onToggle,f=e.itemSelector,u=void 0===f?"* > *":f,p=e.focusFirstItemOnShow,m=e.children,v=Object(y.b)(s,c,l),b=v[0],h=v[1],O=ot(),E=O[0],C=O[1],k=E.current,D=ot(),P=D[0],N=D[1],M=P.current,R=(t=b,n=Object(r.useRef)(null),Object(r.useEffect)((function(){n.current=t})),n.current),S=Object(r.useRef)(null),T=Object(r.useRef)(!1),A=Object(r.useCallback)((function(e,t){h(e,t)}),[h]),L=Object(r.useMemo)((function(){return{toggle:A,drop:a,show:b,alignEnd:i,menuElement:k,toggleElement:M,setMenu:C,setToggle:N}}),[A,a,b,i,k,M,C,N]);k&&R&&!b&&(T.current=k.contains(document.activeElement));var B=Object(w.a)((function(){M&&M.focus&&M.focus()})),W=Object(w.a)((function(){var e=S.current,t=p;if(null==t&&(t=!(!E.current||!function(e,t){if(!d){var n=document.body,r=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;d=function(e,t){return r.call(e,t)}}return d(e,t)}(E.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=Object(g.a)(E.current,u)[0];n&&n.focus&&n.focus()}}));Object(r.useEffect)((function(){b?W():T.current&&(T.current=!1,B())}),[b,T,B,W]),Object(r.useEffect)((function(){S.current=null}));var I=function(e,t){if(!E.current)return null;var n=Object(g.a)(E.current,u),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return x("keydown",(function(e){var t,n,r=e.key,o=e.target,a=null==(t=E.current)?void 0:t.contains(o),i=null==(n=P.current)?void 0:n.contains(o);if((!/input|textarea/i.test(o.tagName)||!(" "===r||"Escape"!==r&&a))&&(a||i))switch(S.current=e.type,r){case"ArrowUp":var c=I(o,-1);return c&&c.focus&&c.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),b){var s=I(o,1);s&&s.focus&&s.focus()}else h(!0,e);return;case"Escape":case"Tab":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),h(!1,e)}})),o.a.createElement(j.Provider,{value:L},m)}at.displayName="ReactOverlaysDropdown",at.Menu=$e,at.Toggle=rt;var it=at,ct=n("ILyh"),st=n("vUet"),lt=n("F9IU"),ft=n("dbZe"),ut={as:ft.a,disabled:!1},pt=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.children,c=e.eventKey,s=e.disabled,l=e.href,f=e.onClick,u=e.onSelect,p=e.active,d=e.as,b=Object(v.a)(e,["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"]),g=Object(st.a)(n,"dropdown-item"),y=Object(r.useContext)(ct.a),O=(Object(r.useContext)(lt.a)||{}).activeKey,x=Object(ct.b)(c,l),j=null==p&&null!=x?Object(ct.b)(O)===x:p,E=Object(w.a)((function(e){s||(f&&f(e),y&&y(x,e),u&&u(x,e))}));return o.a.createElement(d,Object(m.a)({},b,{ref:t,href:l,disabled:s,className:h()(a,g,j&&"active",s&&"disabled"),onClick:E}),i)}));pt.displayName="DropdownItem",pt.defaultProps=ut;var dt=pt,mt=n("17x9"),vt=n.n(mt),bt=n("lcWJ"),ht=n("qUpC");n("QLaP");function gt(e,t){return e}function yt(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}function Ot(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var wt=vt.a.oneOf(["left","right"]),xt=(vt.a.oneOfType([wt,vt.a.shape({sm:wt}),vt.a.shape({md:wt}),vt.a.shape({lg:wt}),vt.a.shape({xl:wt})]),o.a.forwardRef((function(e,t){var n,a,i,c,s=e.bsPrefix,l=e.className,f=e.align,u=e.alignRight,p=e.rootCloseEvent,d=e.flip,b=e.show,g=e.renderOnMount,y=e.as,O=void 0===y?"div":y,w=e.popperConfig,x=Object(v.a)(e,["bsPrefix","className","align","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"]),j=Object(r.useContext)(ht.a),E=Object(st.a)(s,"dropdown-menu"),C=(n=Object(r.useRef)(null),a=Object(r.useRef)(null),i=Object(st.a)(void 0,"popover"),c=Object(st.a)(void 0,"dropdown-menu"),[Object(r.useCallback)((function(e){e&&(yt(e,i)||yt(e,c))&&(a.current=Ot(e),e.style.margin="0",n.current=e)}),[i,c]),[Object(r.useMemo)((function(){return{name:"offset",options:{offset:function(e){var t=e.placement;if(!a.current)return[0,0];var n=a.current,r=n.top,o=n.left,i=n.bottom,c=n.right;switch(t.split("-")[0]){case"top":return[0,i];case"left":return[0,c];case"bottom":return[0,r];case"right":return[0,o];default:return[0,0]}}}}}),[a]),Object(r.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(e){var t=e.state;if(n.current&&t.elements.arrow&&yt(n.current,i)&&t.modifiersData["arrow#persistent"]){var r=Ot(t.elements.arrow),o=r.top,a=r.right,c=o||a;return t.modifiersData["arrow#persistent"].padding={top:c,left:c,right:c,bottom:c},t.elements.arrow.style.margin="0",function(){t.elements.arrow&&(t.elements.arrow.style.margin="")}}}}}),[i])]]),k=C[0],D=C[1],P=[];if(f)if("object"==typeof f){var N=Object.keys(f);if(N.length){var M=N[0],R=f[M];u="left"===R,P.push(E+"-"+M+"-"+R)}}else"right"===f&&(u=!0);var S=Ge({flip:d,rootCloseEvent:p,show:b,alignEnd:u,usePopper:!j&&0===P.length,popperConfig:Object(m.a)({},w,{modifiers:D.concat((null==w?void 0:w.modifiers)||[])})}),T=S[0],A=S[1],L=A.hasShown,B=A.popper,W=A.show,I=A.alignEnd,q=A.toggle;if(T.ref=Object(bt.a)(k,Object(bt.a)(gt(t),T.ref)),!L&&!g)return null;"string"!=typeof O&&(T.show=W,T.close=function(){return null==q?void 0:q(!1)},T.alignRight=I);var U=x.style;return null!=B&&B.placement&&(U=Object(m.a)({},x.style,T.style),x["x-placement"]=B.placement),o.a.createElement(O,Object(m.a)({},x,T,{style:U,className:h.a.apply(void 0,[l,E,W&&"show",I&&E+"-right"].concat(P))}))})));xt.displayName="DropdownMenu",xt.defaultProps={align:"left",alignRight:!1,flip:!0};var jt=xt,Et=(n("BO/t"),o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,a=e.size,i=e.active,c=e.className,s=e.block,l=e.type,f=e.as,u=Object(v.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(st.a)(n,"btn"),d=h()(c,p,i&&"active",r&&p+"-"+r,s&&p+"-block",a&&p+"-"+a);if(u.href)return o.a.createElement(ft.a,Object(m.a)({},u,{as:f,ref:t,className:h()(d,u.disabled&&"disabled")}));t&&(u.ref=t),l?u.type=l:f||(u.type="button");var b=f||"button";return o.a.createElement(b,Object(m.a)({},u,{className:d}))})));Et.displayName="Button",Et.defaultProps={variant:"primary",active:!1,disabled:!1};var Ct=Et,kt=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.split,a=e.className,i=e.childBsPrefix,c=e.as,s=void 0===c?Ct:c,l=Object(v.a)(e,["bsPrefix","split","className","childBsPrefix","as"]),f=Object(st.a)(n,"dropdown-toggle");void 0!==i&&(l.bsPrefix=i);var u=tt()[0];return u.ref=Object(bt.a)(u.ref,gt(t)),o.a.createElement(s,Object(m.a)({className:h()(a,f,r&&f+"-split")},u,l))}));kt.displayName="DropdownToggle";var Dt=kt,Pt=/-(.)/g;var Nt=function(e){return e[0].toUpperCase()+(t=e,t.replace(Pt,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function Mt(e,t){var n=void 0===t?{}:t,r=n.displayName,a=void 0===r?Nt(e):r,i=n.Component,c=n.defaultProps,s=o.a.forwardRef((function(t,n){var r=t.className,a=t.bsPrefix,c=t.as,s=void 0===c?i||"div":c,l=Object(v.a)(t,["className","bsPrefix","as"]),f=Object(st.a)(a,e);return o.a.createElement(s,Object(m.a)({ref:n,className:h()(r,f)},l))}));return s.defaultProps=c,s.displayName=a,s}var Rt=Mt("dropdown-header",{defaultProps:{role:"heading"}}),St=Mt("dropdown-divider",{defaultProps:{role:"separator"}}),Tt=Mt("dropdown-item-text",{Component:"span"}),At=o.a.forwardRef((function(e,t){var n=Object(y.a)(e,{show:"onToggle"}),a=n.bsPrefix,i=n.drop,c=n.show,s=n.className,l=n.alignRight,f=n.onSelect,u=n.onToggle,p=n.focusFirstItemOnShow,d=n.as,b=void 0===d?"div":d,g=(n.navbar,Object(v.a)(n,["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"])),O=Object(r.useContext)(ct.a),x=Object(st.a)(a,"dropdown"),j=Object(w.a)((function(e,t,n){void 0===n&&(n=t.type),t.currentTarget!==document||"keydown"===n&&"Escape"!==t.key||(n="rootClose"),u&&u(e,t,{source:n})})),E=Object(w.a)((function(e,t){O&&O(e,t),f&&f(e,t),j(!1,t,"select")}));return o.a.createElement(ct.a.Provider,{value:E},o.a.createElement(it,{drop:i,show:c,alignEnd:l,onToggle:j,focusFirstItemOnShow:p,itemSelector:"."+x+"-item:not(.disabled):not(:disabled)"},o.a.createElement(b,Object(m.a)({},g,{ref:t,className:h()(s,c&&"show",(!i||"down"===i)&&x,"up"===i&&"dropup","right"===i&&"dropright","left"===i&&"dropleft")}))))}));At.displayName="Dropdown",At.defaultProps={navbar:!1},At.Divider=St,At.Header=Rt,At.Item=dt,At.ItemText=Tt,At.Menu=jt,At.Toggle=Dt;t.default=function(e){var t=e.data.collection.nodes[0],n=t.title,r=t.description,i=e.data.store.siteMetadata.gatsbyStorefrontConfig.storeName;return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Helmet,{title:n,titleTemplate:"%s — "+i,defer:!1},o.a.createElement("meta",{name:"description",content:r})),o.a.createElement(p,e))}},Tqld:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("VdAu"),i=n("5gj6");t.a=function(e){var t=e.products,n=e.limit,r=e.skip,c=e.cartUrl;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return e.cartUrl=c,t+1>r&&t+1<=r+n?o.a.createElement(a.a,{width:[1,1/4],key:t},o.a.createElement(i.a,{key:e.shopifyId,product:e})):""})))}}}]);
//# sourceMappingURL=component---node-modules-gatsbystorefront-gatsby-theme-storefront-shopify-src-templates-catalog-index-jsx-a8a3c3c953f7c41e4f42.js.map