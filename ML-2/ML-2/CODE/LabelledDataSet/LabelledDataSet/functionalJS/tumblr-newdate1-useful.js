require=function r(t,n,e){function o(i,f){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);throw new Error("Cannot find module '"+i+"'")}var a=n[i]={exports:{}};t[i][0].call(a.exports,function(r){var n=t[i][1][r];return o(n?n:r)},a,a.exports,r,t,n,e)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)o(e[i]);return o}({"f/LVtH":[function(r,t){"use strict";function n(r){return"function"==typeof r}function e(r){return"undefined"==typeof r}function o(r){var t,e;if(!n(r))throw new TypeError;return function(){return t?e:(t=!0,e=r.apply(this,arguments),r=null,e)}}function u(r){return!(!c||!c[r])}function i(r){var t=u(r);return t?function o(r){var u=n(r)?r.call(this,t):r;return e(u)?o:u}:function i(r,o){var u=n(o)?o.call(this,t):o;return e(u)?i:u}}function f(r){try{c=JSON.parse(p(r))}catch(t){c={}}}var c,a=Object.prototype,p=(a.toString,n(window.atob)?window.atob:function(r){var t,n,e,o,u={},i=0,f=0,c="",a=String.fromCharCode,p=r.length,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(t=0;64>t;t++)u[s.charAt(t)]=t;for(e=0;p>e;e++)for(n=u[r.charAt(e)],i=(i<<6)+n,f+=6;f>=8;)((o=i>>>(f-=8)&255)||p-2>e)&&(c+=a(o));return c});t.exports=i,t.exports.bool=u,t.exports.setup=o(f)},{}],"prima/lib/flags":[function(r,t){t.exports=r("f/LVtH")},{}]},{},[]);