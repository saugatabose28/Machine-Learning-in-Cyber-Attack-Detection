ISQ.CSS=initializeNS("ISQ.CSS");ISQ.CSS.getVerticalMargin=function(a){var b=0;tp=ISQ.CSS.getElementStyle(a,"margin-top");tp=parseInt(tp);if(!isNaN(tp)){b+=tp}bt=ISQ.CSS.getElementStyle(a,"margin-bottom");bt=parseInt(bt);if(!isNaN(bt)){b+=bt}return b};ISQ.CSS.getHorizonalMargin=function(a){var b=0;left=ISQ.CSS.getElementStyle(a,"margin-left");left=parseInt(left);if(!isNaN(left)){b+=left}right=ISQ.CSS.getElementStyle(a,"margin-right");right=parseInt(right);if(!isNaN(right)){b+=right}return b};ISQ.CSS.setStyle=function(c,e,a){c=ISQ.Html._(c);if(c===null){return}if(typeof(e)!=="string"){return}if(typeof(a)==="undefined"){a=true}if(a){c.className="";c.style.cssText=""}var d=e.split("&");for(var b=0;b<d.length;++b){if(d[b].charAt(0)==="."){c.className+=" "+d[b].substring(1)}else{c.style.cssText+=";"+d[b]}}};ISQ.CSS.setOpacity=function(b,c){b=ISQ.Html._(b);if(b===null){return}if(typeof(c)!=="number"||(c<0||c>100)){return}if(ISQ.Http.browser.isIE6||ISQ.Http.browser.isIE7){if(c===100){b.style.removeAttribute("filter");if(b.nodeName==="TR"){for(var a=0;a<b.childNodes.length;++a){ISQ.CSS.setOpacity(b.childNodes[a],c)}}}else{b.style.filter="alpha(opacity="+c+")";if(b.nodeName==="TR"){for(var a=0;a<b.childNodes.length;++a){ISQ.CSS.setOpacity(b.childNodes[a],c)}}}}else{if(ISQ.Http.browser.isIE8||ISQ.Http.browser.isIE9){if(c===100){b.style.removeAttribute("filter");if(b.nodeName==="TR"){for(var a=0;a<b.childNodes.length;++a){b.childNodes[a].style.removeAttribute("filter")}}}else{b.style.filter="progid:DXImageTransform.Microsoft.Alpha(Opacity="+c+")";if(b.nodeName==="TR"){for(var a=0;a<b.childNodes.length;++a){b.childNodes[a].style.filter="inherit"}}}}else{if(c===100){b.style.removeProperty("opacity");if(ISQ.Http.browser.app==="opera"&&b.nodeName==="TR"){for(var a=0;a<b.childNodes.length;++a){b.childNodes[a].style.removeProperty("opacity")}}}else{b.style.opacity=(c/100);if(ISQ.Http.browser.app==="opera"&&b.nodeName==="TR"){for(var a=0;a<b.childNodes.length;++a){b.childNodes[a].style.opacity="inherit"}}}}}};ISQ.CSS.toggleCss=function(a,c){var d=false;
var h="cssRules";if(ISQ.Http.browser.app==="ie"&&!ISQ.Http.browser.isIE11){h="rules"}var g=document.styleSheets.length;for(var f=g-1;f>=0;--f){var k=document.styleSheets[f];try{if(k.href||k[h].length==0){continue}var j=k[h][0].selectorText;if(!j){continue}if(j.toLowerCase()!==a.toLowerCase()){continue}k.disabled=!c;d=true}catch(b){}}return d};ISQ.CSS.bringToFront=function(a){var c=false;var h="cssRules";if(ISQ.Http.browser.app==="ie"&&!ISQ.Http.browser.isIE11){h="rules"}var g=document.styleSheets.length;for(var f=g-1;f>=0;--f){var k=document.styleSheets[f];try{if(k.href||k[h].length==0){continue}var j=k[h][0].selectorText;if(!j){continue}if(j.toLowerCase()!==a.toLowerCase()){continue}if(k.ownerNode){styleElement=k.ownerNode}else{styleElement=k.owningElement}var d=styleElement.parentNode;if(d){d.appendChild(styleElement)}c=true}catch(b){}}return c};ISQ.CSS.getElementStyle=function(c,f){c=ISQ.Html._(c);var g=null;if(window.getComputedStyle){g=document.defaultView.getComputedStyle(c,null).getPropertyValue(f)}if(!g&&c.runtimeStyle){if(f.indexOf("-")!==-1){var a=[];for(var d=0;d<f.length;d++){if(f.charAt(d)==="-"){a.push(f.charAt(++d).toUpperCase())}else{a.push(f.charAt(d))}}f=a.join("")}if(typeof(document.defaultView)!=="undefined"){try{g=document.defaultView.getComputedStyle(c,null)[f]}catch(b){g=null}}if(!g){try{g=c.runtimeStyle[f]}catch(b){g=null}}if(!g){if((ISQ.Http.browser.isIE7||ISQ.Http.browser.isIE6)&&f.contains("border")){g=null}else{if(c.currentStyle){g=c.currentStyle[f]}}}}return g};ISQ.CSS.getElementWidth=function(a,b){var c=a.offsetWidth;c-=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-left"),0);c-=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-right"),0);if(b){c-=ISQ.CSS.getHorizonalMargin(a)}return c};ISQ.CSS.getElementHeight=function(a,c,b){var d=a.offsetHeight;if(d===0){if(b){return 0}d=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"height"),0)}d-=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-top"),0);d-=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-bottom"),0);if(c){d-=ISQ.CSS.getVerticalMargin(a)
}return d};ISQ.CSS.getPaddingWidth=function(a){var b=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-left"),0);b+=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-right"),0);return b};ISQ.CSS.setWidthIncludingPadding=function(a,b){b-=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-left"),0);b-=ISQ.Tools.getNumber(ISQ.CSS.getElementStyle(a,"padding-right"),0);a.style.width=b+"px"};ISQ.CSS.addClass=function(b,a){if(b.className){var d=b.className.split(" ");for(var c in d){if(d[c]==a){return}}}b.className+=" "+a};ISQ.CSS.removeClass=function(c,b){if(!c.className){return}var a=new Array();var e=c.className.split(" ");for(var d in e){if(e[d]&&e[d]!=b){a.push(e[d])}}c.className=a.join(" ")};ISQ.CSS.addNewStyle=function(b,a){var c=document.createElement("style");c.type="text/css";if(a){c.id=a}document.getElementsByTagName("head")[0].appendChild(c);if(ISQ.Http.browser.app==="ie"&&!ISQ.Http.browser.isIE11){c.styleSheet.cssText=b}else{var d=document.createTextNode(b);c.appendChild(d)}return c};