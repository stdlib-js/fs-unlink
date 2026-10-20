"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=n(function(x,u){
var l=require("fs").unlink;function o(e,r){l(e,r)}u.exports=o
});var s=n(function(f,t){
var v=require("fs").unlinkSync;function y(e){try{v(e)}catch(r){return r}return null}t.exports=y
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=i(),q=s();k(c,"sync",q);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
