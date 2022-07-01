// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return t({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,f=r,a=function(t,e,r){var f,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&u&&u.call(t,e,r.set),t},p=e()?f:a,y=function(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})},b=function(t){return"number"==typeof t},s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=function(){return s&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,d=_,v=function(t){return d.call(t)},g=Object.prototype.hasOwnProperty,j=function(t,e){return null!=t&&g.call(t,e)},h="function"==typeof Symbol?Symbol.toStringTag:"",O=j,S=h,w=_,P=v,T=function(t){var e,r,n;if(null==t)return w.call(t);r=t[S],e=O(t,S);try{t[S]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[S]=r:delete t[S],n},N=m()?T:P,E=Number,x=E.prototype.toString,A=N,V=E,k=function(t){try{return x.call(t),!0}catch(t){return!1}},G=m(),M=function(t){return"object"==typeof t&&(t instanceof V||(G?k(t):"[object Number]"===A(t)))},C=b,F=M,q=y,z=function(t){return C(t)||F(t)},B=M;q(z,"isPrimitive",b),q(z,"isObject",B);var D=z.isPrimitive,H=function(t){return D(t)&&t>=0},I=z.isObject,J=function(t){return I(t)&&t.valueOf()>=0},K=H,L=J,Q=y,R=function(t){return K(t)||L(t)},U=J;Q(R,"isPrimitive",H),Q(R,"isObject",U);var W=R,X=Math.floor,Y=function(t){return X(t)===t},Z=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&Y(t.length)&&t.length>=0&&t.length<=4294967295},$=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}},tt=$(W);return y(tt,"primitives",$(W.isPrimitive)),y(tt,"objects",$(W.isObject)),tt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isNonNegativeNumberArray=e();
//# sourceMappingURL=index.js.map
