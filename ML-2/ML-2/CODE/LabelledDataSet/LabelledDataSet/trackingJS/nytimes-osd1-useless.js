
(function(){var c=Date.now||function(){return+new Date};var g=document,n=window;var r=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(null,a[d],d,a)},s=function(a){n.google_image_requests||(n.google_image_requests=[]);var b=n.document.createElement("img");b.src=a;n.google_image_requests.push(b)};var t=.01,u=!0,v={},w=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var d=b;try{-1==a.indexOf(d)&&(a=d+"\n"+a);for(var e;a!=e;)e=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(h){b=d}}return b},A=function(a,b,d,e){var h=x,k,f=u;try{k=b()}catch(l){try{var q=w(l);b="";l.fileName&&(b=l.fileName);var m=-1;l.lineNumber&&(m=l.lineNumber);f=h(a,q,
b,m,d)}catch(p){try{var H=w(p);a="";p.fileName&&(a=p.fileName);d=-1;p.lineNumber&&(d=p.lineNumber);x("pAR",H,a,d,void 0,void 0)}catch(z){y({context:"mRE",msg:z.toString()+"\n"+(z.stack||"")},void 0)}}if(!f)throw l;}finally{if(e)try{e()}catch(O){}}return k},x=function(a,b,d,e,h,k){var f={};if(h)try{h(f)}catch(l){}f.context=a;f.msg=b.substring(0,512);d&&(f.file=d);0<e&&(f.line=e.toString());f.url=g.URL.substring(0,512);f.ref=g.referrer.substring(0,512);B(f);y(f,k);return u},y=function(a,b){try{if(Math.random()<
(b||t)){var d="/pagead/gen_204?id=jserror"+C(a),e="http"+("https:"==n.location.protocol?"s":"")+"://pagead2.googlesyndication.com"+d,e=e.substring(0,2E3);s(e)}}catch(h){}},B=function(a){var b=a||{};r(v,function(a,e){b[e]=n[a]})},D=function(a,b){return function(){var d=arguments;return A(a,function(){return b.apply(void 0,d)},void 0,void 0)}},E=function(a,b){return D(a,b)},C=function(a){var b="";r(a,function(a,e){if(0===a||a)b+="&"+e+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):
escape(a))});return b};/^true$/.test("false")&&(t=1);if(g&&g.URL)var F=g.URL,u=!(F&&(0<F.indexOf("?google_debug")||0<F.indexOf("&google_debug")));var G=function(a,b,d,e){d=D(e||"osd_or_lidar::"+b,d);a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent&&a.attachEvent("on"+b,d)};var I=function(){try{n.localStorage.setItem("__sak","1");var a=n.localStorage.__sak;n.localStorage.removeItem("__sak");return"1"==a}catch(b){return!1}},J=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var d=n.document.createElement("img");G(d,"load",b,"osd::ls_img::load");d.src=a;n.google_image_requests.push(d)};var K=[{a:0,c:0,b:0,f:0,h:0,d:0,e:0,g:0},{a:0,c:0,b:0,f:0,h:0,d:0,e:0,g:0},{a:0,c:0,b:0,f:0,h:0,d:0,e:0,g:0}],L=function(a){for(var b=n.localStorage,d=2<=a?2:a,e=[],h=0;h<b.length;h++){var k=b.key(h);k&&e.push(k)}for(h=0;h<e.length;h++)if(k=e[h],0==k.indexOf("LSPNGS-")){var f=b.getItem(k);if(f)if((f=f.match(/^(.*)&timestamp=(\d+)(&send)?$/))&&3<=f.length){K[d].a++;var l=c()-f[2],q=3==f.length||!f[3];if(72E5<l)b.removeItem(k),K[d].f++;else if(q&&2E3>l)K[d].h++;else{var m=f[1];1993<m.length&&(m=m.substring(0,
1993));m+="&lsci="+a;(function(a){J(m,function(){b.removeItem(a);K[d].g++})})(k);K[d].d++;q||K[d].e++}}else b.removeItem(k),K[d].c++;else K[d].b++}},M=function(){var a=2;n.setInterval(E("osd::ls::pcheck",function(){L(a);a++}),3E4)},N=function(){0==K[0].a&&0==K[1].a&&0==K[2].a&&0==K[0].c&&0==K[1].c&&0==K[2].c&&0==K[0].b&&0==K[1].b&&0==K[2].b||s(["//pagead2.googlesyndication.com/pagead/gen_204?id=lsdbg&ffc=",K[0].a,"&fuc=",K[0].c,"&fmc=",K[0].b,"&foc=",K[0].f,"&fyc=",K[0].h,"&fac=",K[0].d,"&fic=",K[0].e,
"&fsc=",K[0].g,"&sfc=",K[1].a,"&suc=",K[1].c,"&smc=",K[1].b,"&soc=",K[1].f,"&syc=",K[1].h,"&sac=",K[1].d,"&sic=",K[1].e,"&ssc=",K[1].g,"&rfc=",K[2].a,"&ruc=",K[2].c,"&rmc=",K[2].b,"&roc=",K[2].f,"&ryc=",K[2].h,"&rac=",K[2].d,"&ric=",K[2].e,"&rsc=",K[2].g].join(""))};A("osd::ls::main",function(){"google_esf"==n.name&&I()&&(L(0),n.setTimeout(E("osd::ls::check",function(){L(1);M()}),5E3),.1>=Math.random()&&G(n,"unload",N,"osd::ls::unload"))});})();