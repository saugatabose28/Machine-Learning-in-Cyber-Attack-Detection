!function() {
    function e(e, t, n) {
        return function() {
            if (n && arguments.length) {
                var r = Array.prototype.slice.call(n, 0);
                for (var i = 0; i < arguments.length; i++)
                    Array.prototype.push.call(r, arguments[i])
            }
            return e.apply(t || this, r || n || arguments)
        }
    }
    function t(t) {
        return e(t, null, Array.prototype.slice.call(arguments, 1))
    }
    function n() {
        return (new Date).getTime()
    }
    function r(e, t, n) {
        var r = document.createElement("script");
        r.type = "text/javascript", n && (r.charset = n), r.src = e;
        var i = document.getElementsByTagName("head")[0], s=!1;
        r.onload = r.onreadystatechange = function() {
            !s && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") && (s=!0, t && t(), r.onload = r.onreadystatechange = null, setTimeout(function() {
                i.removeChild(r)
            }, 1))
        }, i.appendChild(r)
    }
    function i(e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
    }
    var s = {};
    s.get = function(e) {
        var t = document.cookie.match("(?:^|;)\\s*" + i(e) + "=([^;]*)");
        return t ? t[1] || "" : ""
    }, s.set = function(e, t, n) {
        n = n || {}, t === null && (t = "", n.expires =- 1);
        var r = "";
        if (n.expires && (n.expires * 1 || n.expires.toUTCString)) {
            var i;
            n.expires * 1 ? (i = new Date, i.setTime(i.getTime() + n.expires * 1e3)) : i = n.expires, r = "; expires=" + i.toUTCString()
        }
        var s = n.path ? "; path=" + n.path: "", o = n.domain ? "; domain=" + n.domain: "", u = n.secure ? "; secure": "";
        document.cookie = [e, "=", t, r, s, o, u].join("")
    };
    if (window.loadHQ)
        return;
    window.loadHQ = new function() {
        function f() {
            function c() {
                r("http://hq.sinajs.cn/list=sys_hqEtagMode", function() {
                    var r = window.hq_str_sys_hqEtagMode;
                    if (n === undefined)
                        n = r;
                    else {
                        l++, n == r && f++;
                        if (l == a) {
                            f ? (i = t, s.set(o, "0", u)) : (i = e, s.set(o, "1", u));
                            return 
                        }
                        n = r
                    }
                    setTimeout(c, 2e3)
                })
            }
            s.set(o, "-1", {
                domain: ".sina.com.cn",
                path: "/",
                expires: 10
            });
            var n, f = 0, l = 0;
            c()
        }
        function l() {
            var n = s.get(o);
            switch (n) {
            case"1":
                i = e;
                break;
            case"0":
                i = t;
                break;
            case"-1":
                i = e;
                break;
            default:
                i = e, f()
            }
        }
        var e = "http://hq.sinajs.cn/etag.php?rn=$rand@type@&list=".replace("$rand", n()), t = "http://hq.sinajs.cn/?rn=$rand@type@&list=", i = "", o = "hqEtagMode", u = {
            domain: ".sina.com.cn",
            path: "/",
            expires: 3600
        }, a = 2;
        return l(), setInterval(l, 1e3), function(e, t, s) {
            s = s || {}, r(i.replace("hq.sinajs.cn", s.domain || "hq.sinajs.cn").replace("$rand", n()).replace("@type@", s.type ? "&format=" + s.type : "") + e, t, s.charset)
        }
    }
}()
