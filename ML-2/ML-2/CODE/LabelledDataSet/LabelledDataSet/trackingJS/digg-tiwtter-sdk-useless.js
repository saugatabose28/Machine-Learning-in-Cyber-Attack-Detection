
// Load Twitter SDK Asynchronously
window.twttr = (function (d,s,id) {
var t, js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));
// Load the FB SDK Asynchronously
(function(d){
var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
js = d.createElement('script'); js.id = id; js.async = true;
js.src = "//connect.facebook.net/en_US/all.js";
d.getElementsByTagName('head')[0].appendChild(js);
}(document));
