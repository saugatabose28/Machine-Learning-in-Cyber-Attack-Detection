var _tmr = _tmr || [];
(function() {
    function v(a, r, d) {
        a.addEventListener ? a.addEventListener(r, d, !1) : a.attachEvent && a.attachEvent("on" + r, d)
    }
    function f() {}
    function J(a) {
        return (a=!n ? void 0 : n[a]) && w ? a - w : void 0
    }
    function p(a, r) {
        var c = "id"in a ? a.id: k, e = "url"in a ? a.url: location.href, b = "referrer"in a ? a.referrer: g.referrer, f = "title"in a ? a.title: g.title, c = ("https:" == g.location.protocol ? "https:" : "http:") + "//top-fwz1.mail.ru" + (r ? "/tracker" : "/counter") + "?js=13" + (c ? ";id=" + escape(c) : "") + (e ? ";u=" + escape(e) : "") + (b ? ";r=" + escape(b) : "") + ("start"in
        a && 0 < a.start ? ";st=" + escape(a.start) : "") + ("gender"in a ? ";gender=" + escape(a.gender) : "") + ("age"in a ? ";age=" + escape(a.age) : "") + (f ? ";title=" + encodeURIComponent(f) : "") + ((x = d.screen) ? ";s=" + x.width + "*" + x.height : "") + ";vp=", b = e = 0;
        g.documentElement && (g.documentElement.clientWidth || g.documentElement.clientHeight) ? (e = g.documentElement.clientWidth, b = g.documentElement.clientHeight) : "number" == typeof d.innerWidth && (e = d.innerWidth, b = d.innerHeight);
        c = c + ("" + e + "*" + b) + ";touch=" + K + ";hds=" + L + ";flash=" + y + ";sid=" + C + ";ver=" +
        D + ";nt=";
        if (!n ||!z)
            e = "";
        else {
            e = [];
            e.push(z.type);
            e.push(z.redirectCount);
            e.push(w);
            for (b = 0; b < E.length; b++)
                e.push(J(E[b]));
            e = e.join("/")
        }
        return c + e + ";_=" + Math.random()
    }
    function F(a, b) {
        return ("https:" == g.location.protocol ? "https:" : "http:") + "//top-fwz1.mail.ru/tracker?js=13;id=" + a[0] + ";e=" + escape(b) + ";sid=" + C + ";ids=" + a.join() + ";ver=" + D + ";_=" + Math.random()
    }
    function M() {
        if (!G)
            for (var a = 0; a < q.length; a++) {
                var b = q[a];
                (new Image).src = p(b, !0) + ";e=" + escape("PVT/15")
            }
    }
    function A() {
        _tmr.onload()
    }
    if ("[object Array]" ===
    Object.prototype.toString.call(_tmr)) {
        var d = window, b = navigator, g = document, x, k = 0, D = 60, s = [], B = 0, t = 0, C = "xxxxxxxx".replace(/[x]/g, function(a) {
            return (16 * Math.random() | 0).toString(16)
        }), q = [], l = [], u = 0, h = "string" === typeof location.hostname && ( - 1 != location.hostname.search(/^odnoklassniki\.ru$/)||-1 != location.hostname.search(/\.odnoklassniki\.ru$/)||-1 != location.hostname.search(/^ok\.ru$/)||-1 != location.hostname.search(/\.ok\.ru$/)), c = "string" === typeof location.hostname && ( - 1 != location.hostname.search(/^vk\.com$/) ||
        - 1 != location.hostname.search(/\.vk\.com$/)), H = h || c, G = h || c, I = h || c, K = "ontouchstart"in d || 1 < (b.maxTouchPoints || b.msMaxTouchPoints) ? "1": "0", L = d.devicePixelRatio || 0, y = "";
        if (b.plugins && b.plugins["Shockwave Flash"])
            y = b.plugins["Shockwave Flash"].description.split(" ")[2];
        else if (d.ActiveXObject)
            try {
                var m = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), m = m.GetVariable("$version"), m = m.split(" ")[1].split(","), y = m[0] + "." + m[1]
        } catch (N) {}
        var b = d.performance || d.mozPerformance || d.msPerformance || d.webkitPerformance ||
        {}, n = b.timing || {}, z = b.navigation || {}, E = "unloadEventStart unloadEventEnd redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart connectEnd secureConnectionStart requestStart responseStart responseEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd".split(" "), w=!n ? void 0 : n.navigationStart;
        f.prototype.pageView = function(a) {
            "start"in a && s.push(a);
            (new Image).src = p(a, !1);
            t = (new Date).getTime()
        };
        f.prototype.reachGoal =
        function(a) {
            "goal"in a && ((new Image).src = p(a, !0) + (a.goal ? ";e=" + escape("RG/" + a.goal) : ""))
        };
        f.prototype.itemView = function(a) {
            if ("id"in a || k)(new Image).src = ("https:" == g.location.protocol ? "https:" : "http:") + "//ad.mail.ru/retarget/?counter=" + (a.id || k) + "&list=" + (a.list || "") + "&productid=" + (a.productid || "") + "&pagetype=" + (a.pagetype || "") + "&totalvalue=" + (a.totalvalue || 0) + "&_=" + Math.random()
            };
        f.prototype.processEvent = function(a) {
            if ("type"in a && ("pageView" != a.type || "id"in a)) {
                if (!k && "id"in a && "type"in a && ("pageView" ==
                a.type || "reachGoal" == a.type))
                    k = a.id;
                switch (a.type) {
                case "pageView":
                    this.pageView(a);
                    break;
                case "reachGoal":
                    this.reachGoal(a);
                    break;
                case "itemView":
                    this.itemView(a)
                }
            }
        };
        f.prototype.push = function(a) {
            this.processEvent(a)
        };
        f.prototype.onload = function() {
            if (0 < s.length) {
                u = (new Date).getTime();
                for (var a = 0, b; b = s[a]; a++)(new Image)
                    .src = p(b, !0) + ";e=" + escape("RT/load") + ";et=" + u;
                t = u;
                s = []
            }
            G || setTimeout(M, 15E3)
        };
        f.prototype.beat = function() {
            if (!H && 0 != l.length && B) {
                var a = (new Date).getTime(), b = a - B;
                if (!(12E4 < b)) {
                    if (12E4 <
                    a - t)
                        for (var c = 0; c < q.length; c++) {
                            var d = q[c];
                            (new Image).src = p(d, !0) + ";e=" + escape("RT/resend") + ";et=" + u + ";active=" + (b ? "1" : "0")
                        } else (new Image)
                        .src = F(l, "RT/beat");
                    t = a
                }
            }
        };
        f.prototype.unload = function() {
            I || 0 == l.length || ((new Image).src = F(l, "RT/unload"))
        };
        f.prototype.activity = function(a) {
            B = (new Date).getTime()
        };
        b = new f;
        for (h = 0; c = _tmr[h]; h++)
            if (!k && "id"in c && "type"in c && ("pageView" == c.type || "reachGoal" == c.type))
                k = c.id;
        for (h = 0; c = _tmr[h]; h++)
            "id"in c && ("type"in c && "pageView" == c.type && 5 > l.length) && (l.push(c.id),
            q.push(c)), b.processEvent(c);
        _tmr = b;
        if ("complete" === g.readyState)
            _tmr.onload();
        else 
            d.addEventListener ? d.addEventListener("load", A, !1) : d.attachEvent ? d.attachEvent("onload", A) : d.onload = A;
        I || v(d, "beforeunload", _tmr.unload);
        if (!H && 0 < l.length) {
            setInterval(_tmr.beat, 3E4);
            try {
                b = function(a) {
                    for (var b = 0; b < a.length; b++)
                        v(g, a[b], function() {
                            _tmr.activity(a[b])
                        })
                }, b(["scroll", "gesturechange", "touchmove"]), b(["mousedown", "mousemove", "mouseup"]), v(d, "scroll", function() {
                    _tmr.activity("scallback")
                })
            } catch (O) {}
        }
    }
})();


