// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,v,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):u.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var i=r-e.length;return i<0?e:e=t?e+_(i):_(i)+e}var j=String.fromCharCode,x=isNaN,E=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,i,a,o,l,u,p,f;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,p=0;p<e.length;p++)if(s(i=e[p]))l+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,x(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):j(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),l+=i.arg||"",u+=1}return l}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=O.exec(e);i;)(r=e.slice(n,O.lastIndex-i[0].length)).length&&t.push(r),t.push(V(i)),n=O.lastIndex,i=O.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function A(e){return"string"==typeof e}function F(e){var r,t,i;if(!A(e))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return T.apply(null,t)}var P=Object.prototype,I=P.toString,C=P.__defineGetter__,N=P.__defineSetter__,R=P.__lookupGetter__,Z=P.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(R.call(e,r)||Z.call(e,r)?(i=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function W(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,z=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,B="function"==typeof q?q.toStringTag:"",D=U()?function(e){var r,t,i,n,a;if(null==e)return X.call(e);t=e[B],a=B,r=null!=(n=e)&&z.call(n,a);try{e[B]=void 0}catch(r){return X.call(e)}return i=X.call(e),r?e[B]=t:delete e[B],i}:function(e){return X.call(e)},H=Number,J=H.prototype.toString,K=U();function Q(e){return"object"==typeof e&&(e instanceof H||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function Y(e){return L(e)||Q(e)}function ee(e){return L(e)&&e>=0}function re(e){return Q(e)&&e.valueOf()>=0}function te(e){return ee(e)||re(e)}W(Y,"isPrimitive",L),W(Y,"isObject",Q),W(te,"isPrimitive",ee),W(te,"isObject",re);var ie=Math.floor;function ne(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length&&(r=e.length,ie(r)===r)&&e.length>=0&&e.length<=4294967295;var r}function ae(e){if("function"!=typeof e)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!ne(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}var oe=ae(te.isPrimitive),ce=ae(te.isObject),se=ae(te);return W(se,"primitives",oe),W(se,"objects",ce),se},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isNonNegativeNumberArray=r();
//# sourceMappingURL=browser.js.map
