/*
* ameblo common ga
*/
function getCookie(e) {
    var t, n, r;
    r = document.cookie.split(";");
    for (var t = 0; t < r.length; t++) {
        n = r[t].indexOf("=");
        if (r[t].substring(0, n) == e || r[t].substring(0, n) == " " + e)
            return unescape(r[t].substring(n + 1))
    }
    return ""
}
var key = getCookie("P") !== "" ? getCookie("P"): 0;
var hash = murmurhash3_32_gc(key);
var num = hash%denom; /*debug*/
/*num=1;*/
/*/debug*/
if (num === 1) {
    (function(e, t, n, r, i, s, o) {
        e["GoogleAnalyticsObject"] = i;
        e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments)
        }, e[i].l = 1 * new Date;
        s = t.createElement(n), o = t.getElementsByTagName(n)[0];
        s.async = 1;
        s.src = r;
        o.parentNode.insertBefore(s, o)
    })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
    ga("create", trackingId, "auto", {
        name: "ameblo"
    });
    ga("ameblo.send", "pageview")
}
if (!ga) {
    var ga
}
