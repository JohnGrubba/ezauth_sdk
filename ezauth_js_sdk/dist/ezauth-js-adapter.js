!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["ezauth-js-adapter"]=t():e["ezauth-js-adapter"]=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{EZAuthClient:()=>s});var n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},r=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},s=function(){function e(e,t){void 0===t&&(t=""),this.server_url=e.replace(/\/$/,""),this.session_id=t,console.log("EZAuth initialized")}return e.prototype.authorizedFetch=function(e){return r(this,arguments,void 0,(function(e,t){return void 0===t&&(t={}),o(this,(function(r){switch(r.label){case 0:return[4,fetch("".concat(this.server_url,"/").concat(e),n(n({},t),{credentials:"include",headers:n(n({},t.headers),{cookie:"session=".concat(this.session_id)})}))];case 1:return[2,r.sent()]}}))}))},e.prototype.logout=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,this.authorizedFetch("logout")];case 1:return e=t.sent(),this.session_id="",204!==e.status?[3,2]:(console.info("Logged Out"),[3,4]);case 2:return[4,e.json()];case 3:throw t.sent();case 4:return[2]}}))}))},e.prototype.init=function(){return r(this,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:return[4,this.authorizedFetch("up")];case 1:if(!n.sent().ok)return[2];n.label=2;case 2:return n.trys.push([2,5,,6]),[4,this.authorizedFetch("profile")];case 3:return(e=n.sent()).ok?(t=this,[4,e.json()]):[2];case 4:return t.profile_info=n.sent(),[2,this.profile_info];case 5:return n.sent(),[2];case 6:return[2]}}))}))},e.prototype.signup=function(e,t,s,i){return r(this,void 0,void 0,(function(){var r,a;return o(this,(function(o){switch(o.label){case 0:return[4,this.authorizedFetch("signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n(n({},i),{email:e,username:t,password:s}))})];case 1:return 200!==(r=o.sent()).status?[3,3]:(console.info("User Created and Logged In"),a=this,[4,r.json()]);case 2:return a.session_id=o.sent().session_token,[2,this.session_id];case 3:return 204!==r.status?[3,4]:(console.info("Confirmation E-Mail was sent"),[3,6]);case 4:return[4,r.json()];case 5:throw o.sent();case 6:return[2]}}))}))},e.prototype.login=function(e,t,n){return r(this,void 0,void 0,(function(){var r,s;return o(this,(function(o){switch(o.label){case 0:return[4,this.authorizedFetch("login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:e,password:t,two_factor_code:n}),credentials:"include"})];case 1:return 200!==(r=o.sent()).status?[3,3]:(console.info("Logged In"),s=this,[4,r.json()]);case 2:return s.session_id=o.sent().session_token,[2,this.session_id];case 3:return[4,r.json()];case 4:throw o.sent()}}))}))},e}();return t})()));