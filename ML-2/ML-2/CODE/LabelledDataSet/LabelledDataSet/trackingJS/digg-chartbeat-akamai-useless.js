
var _sf_async_config={uid:30608,domain:"digg.com"};
(function(){
function loadChartbeat() {
window._sf_endpt=(new Date()).getTime();

window._sf_async_config.useCanonical = true;


window._sf_async_config.sections = "Homepage";

var e = document.createElement('script');
e.setAttribute('language', 'javascript');
e.setAttribute('type', 'text/javascript');
e.setAttribute('src',
(("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
"js/chartbeat_video.js");
document.body.appendChild(e);
}
var oldonload = window.onload;
window.onload = (typeof window.onload != 'function') ?
loadChartbeat : function() { oldonload(); loadChartbeat(); };
})();
