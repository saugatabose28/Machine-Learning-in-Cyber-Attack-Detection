
(function(){window.amzn=window.amzn||{};amzn.copilot=amzn.copilot||{};var f=window,k=document;var d=k.head||k.getElementsByTagName("head")[0],m="cpidv",b=0,j="cpJQUnavailable",a="cpLoadResourceError";amzn.copilot.checkCoPilotSession=function(){if(k.cookie.match(m)){if(typeof jQuery!=="undefined"){i(jQuery)}else{if(f.P&&f.P.when){f.P.when("jQuery").execute(function(n){i(n)})}else{if(f.amznJQ&&f.amznJQ.available){f.amznJQ.available("jQuery",function(){i(jQuery)})}else{c()}}}}};var c=function(){if(!b){b=1;if(k.addEventListener){k.addEventListener("DOMContentLoaded",amzn.copilot.checkCoPilotSession,false)}else{if(k.attachEvent){k.attachEvent("onreadystatechange",function(){if(k.readyState==="complete"){amzn.copilot.checkCoPilotSession()}})}}}else{if(f.ue&&(typeof f.ue.count==="function")){f.ue.count(j,1)}}};var i=function(p){amzn.copilot.jQuery=p;var o=l("debugJS"),n=f.location.protocol==="https:"?1:0;if(amzn.copilot.jQuery.ajax){amzn.copilot.jQuery.ajax({url:"/gp/copilot/handlers/copilot_strings_resources.html",dataType:"json",data:{isDebug:o,isSecure:n},success:function(q){amzn.copilot.vip=q.serviceEndPoint;g(q)},error:function(){f.ue.count(a,1)}})}};var g=function(o){var s=amzn.copilot.jQuery;var n=function(){amzn.copilot.setup(s.extend({isContinuedSession:true},o))};var q=o.CSSUrls||[copilotCSSUrl];s.each(q,function(t,u){e(u)});var r=l("forceSynchronousJS");var p=o.JSUrls[0]||[copilotJSUrl];s.each(p,function(t,u){if(t===p.length-1){h(u,r,n)}else{h(u,r)}})},h=function(o,q,n){var p=k.createElement("script");p.type="text/javascript";p.src=o;p.async=q?false:true;if(n){p.onload=n}d.appendChild(p)},e=function(n){var o=k.createElement("link");o.type="text/css";o.rel="stylesheet";o.href=n;d.appendChild(o)};function l(q){var o=f.location.search.substring(1);var n=o.split("&");for(var p=0;p<n.length;p++){var r=n[p].split("=");if(r[0]===q){return r[1]}}}})();
amzn.copilot.checkCoPilotSession();