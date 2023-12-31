var GravityInsights = function(a) {
    function j(g) {
        var b;
        b = a.action || "beacon";
        var d = void 0 === document.getElementsByTagName("title")[0] ? "" : encodeURIComponent(document.getElementsByTagName("title")[0].innerHTML), e = new Date, e = e.getMilliseconds() + "-" + e.getSeconds();
        b = ["cbust=" + e, a.super_site_guid ? "super_site_guid=" + a.super_site_guid: "", "site_guid=" + a.site_guid, "action=" + b, "user_guid=" + g, "referrer=" + c(document.referrer), "browser_useragent=" + c(navigator.userAgent), "OS=" + c(l()), "href=" + c(location.href), "url=" +
        m(), void 0 !== a.thread_id ? "thread_id=" + a.thread_id: "", void 0 !== a.post_id ? "post_id=" + a.post_id: "", void 0 !== a.forum_id ? "forum_id=" + a.forum_id: "", void 0 !== a.user_id ? "user_id=" + a.user_id: "", void 0 !== a.username ? "user_name=" + c(a.username): "", void 0 !== a.post_title ? "post_title=" + c(a.post_title): "", void 0 !== a.thread_title ? "thread_title=" + c(a.thread_title): "", void 0 !== a.forum_title ? "forum_title=" + c(a.forum_title): "", void 0 !== d ? "article_title=" + d: "", void 0 !== a.external_user_id ? "external_user_id=" + a.external_user_id:
        "", void 0 !== a.article_id ? "article_id=" + a.article_id: "", void 0 !== a.type ? "type=" + a.type: "", void 0 !== a.board ? "board=" + encodeURIComponent(a.board): ""].join("&");
        g = document.createElement("script");
        g.src = k + "/log?" + b;
        g.type = "text/javascript";
        b = document.getElementsByTagName("head")[0] || document.documentElement;
        b.insertBefore(g, b.firstChild)
    }
    function c(a) {
        return window.encodeURIComponent ? encodeURIComponent(a) : escape(a)
    }
    function l() {
        var a = "Unknown OS";
        - 1 !== navigator.appVersion.indexOf("Win") && (a = "Windows");
        - 1 !== navigator.appVersion.indexOf("Mac") && (a = "MacOS");
        - 1 !== navigator.appVersion.indexOf("X11") && (a = "UNIX");
        - 1 !== navigator.appVersion.indexOf("Linux") && (a = "Linux");
        return a
    }
    function m() {
        var a = document.getElementsByTagName("link"), b = a.length, d = "";
        for (x = 0; x < b; x++) {
            if ((d = a[x].getAttribute("rel")) && 0 === d.indexOf("canonical") && (a[x].getAttribute("href") || "").replace(/^\s+|\s+$/g, ""))
                return encodeURIComponent(a[x].getAttribute("href"));
            if (x === b)
                break
        }
        return encodeURIComponent(location.href)
    }
    var k = "https:" ==
    document.location.protocol ? "https://secure-api.gravity.com/v1/beacons": "http://rma-api.gravity.com/v1/beacons", b;
    b = document.cookie;
    var f = b.indexOf("grvinsights");
    if ( - 1 === f)
        b = " ";
    else {
        var h = b.indexOf(";", f);
        - 1 === h && (h = b.length);
        b = unescape(b.substring(f + 11 + 1, h))
    }
    if (" " === b || "" === b)
        f = "?u=" + a.user_id + "&sg=" + a.site_guid, b = document.createElement("script"), b.src = k + "/initialize" + f, b.type = "text/javascript", f = document.getElementsByTagName("head")[0] || document.documentElement, f.insertBefore(b, f.firstChild), b=!1;
    void 0 !==
    b && b && j(b);
    return {
        cc: function(a, b, d) {
            if ("" !== a) {
                var e = new Date;
                e.setTime(e.getTime() + 432E8);
                e = "; expires=" + e.toGMTString();
                var c = d ? d.replace(/^\W*/, ""): "";
                d = c ? (c =- 1 !== window.location.hostname.indexOf(c, window.location.hostname.length - c.length)) ? "; domain=" + d : "" : "";
                document.cookie = a + "=" + b + e + d + "; path=/";
                j(b)
            }
        }
    }
}(gravityInsightsParams);

