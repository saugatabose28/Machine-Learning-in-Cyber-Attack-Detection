
// Temporary anonymous count of DNT signals. More info: https://bugzilla.mozilla.org/show_bug.cgi?id=1087011
var _dntStatus = navigator.doNotTrack || navigator.msDoNotTrack;
 
(function() {
    var fxMatch = navigator.userAgent.match(/Firefox\/(\d+)/);

    if (fxMatch && Number(fxMatch[1]) < 32) {
        // Can't say for sure if it is 1 or 0, due to Fx bug 887703
        _dntStatus = (_dntStatus === 'yes') ? 'Unknown' : 'Unspecified';
    } else {
        _dntStatus = { '0': 'Disabled', '1': 'Enabled' }[_dntStatus] || 'Unspecified';
    }
})();

var _gaq = _gaq || [];
var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', 'UA-36116321-1']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_setAllowAnchor', true]);
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_setCustomVar', 13, 'DNT', _dntStatus, 3]);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;

    var prefix = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www');
    ga.src = prefix + '.google-analytics.com/ga.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
