(function(g, f, M) {
    var V;
    function F(a, b) {
        return function() {
            try {
                return a.apply(this, arguments)
            } catch (c) {
                na(c, b)
            }
        }
    }
    function na(a, b) {
        if (0.01 > Math.random())
            try {
                (new O).log("jserrs", fa, a.message, b, A.href, oa, "string" == typeof a.stack && a.stack.replace(/\n/g, "\\n"))
        } catch (c) {
            var d = ["cp: " + b, a.name + ": " + a.message, "debug: " + oa, "code: " + fa, "stack: " + a.stack];
            (new Image).src = "//an.yandex.ru/jserr/101500?cnt-class=100&errmsg=" + encodeURIComponent(d.join("; ").replace(/\r?\n/g, "\\n"))
        }
    }
    function P(a, b, c) {
        return g.setTimeout(F(a,
        c || "setTimeout"), b)
    }
    function v() {
        for (var a = {}, b = "hash host hostname href pathname port protocol search".split(" "), c = b.length, d = c; d--;)
            a[b[d]] = "";
        try {
            for (var e = g.location, d = c; d--;) {
                var s = b[d];
                a[s] = "" + e[s]
            }
        } catch (t) {
            A && (a = A)
        }
        return a
    }
    function jb(a) {
        return a ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "") : ""
    }
    function ga(a) {
        return - 1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
    }
    function pa(a, b) {
        if (!a ||!b)
            return !1;
        for (var c = [], d = 0; d < b.length; d++)
            c.push(b[d].replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g,
            "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}"));
        return RegExp("\\.(" + c.join("|") + ")$", "i").test(a)
    }
    function Ka(a) {
        a = a.target || a.srcElement;
        if (!a)
            return !1;
        3 == a.nodeType && (a = a.parentNode);
        for (var b = a.nodeName.toString().toLowerCase(); a.parentNode && a.parentNode.nodeName && ("a" != b && "area" != b ||!a.href);)
            a = a.parentNode, b = a.nodeName.toString().toLowerCase();
        return a.href ? a : !1
    }
    function La(a, b) {
        return (a ? a.replace(/^www\./, "") : "") == (b ? b.replace(/^www\./, "") : "")
    }
    function Ma(a, b) {
        function c(a) {
            a = a.split(":");
            a = a[1] || "";
            a = a.replace(/^\/*/, "").replace(/^www\./, "");
            return a.split("/")[0]
        }
        return a && b ? c(a) == c(b) : a || b?!1 : !0
    }
    function qa() {
        var a = g.performance || g.webkitPerformance, b = [];
        if (a = a && a.timing) {
            var c = a.navigationStart;
            if (c)
                for (b = [a.domainLookupEnd - a.domainLookupStart, a.connectEnd - a.connectStart, a.responseStart - a.requestStart, a.responseEnd - a.responseStart,
                a.fetchStart - c, a.redirectEnd - a.redirectStart, a.redirectCount], b.push(a.domInteractive && a.domLoading ? a.domInteractive - a.domLoading : null), b.push(a.domContentLoadedEventStart && a.domContentLoadedEventEnd ? a.domContentLoadedEventEnd - a.domContentLoadedEventStart : null), b.push(a.domComplete ? a.domComplete - c : null), b.push(a.loadEventStart ? a.loadEventStart - c : null), b.push(a.loadEventStart && a.loadEventEnd ? a.loadEventEnd - a.loadEventStart : null), b.push(a.domContentLoadedEventStart ? a.domContentLoadedEventStart - c : null),
                a = 0; a < b.length; a++)
                    c = b[a], null !== c && (0 > c || 36E5 < c) && (b[a] = null)
        }
        return b
    }
    function Na(a) {
        var b = [], c = a._lastPerformanceTiming, d = qa();
        if (c)
            for (var e = 0, s = c.length; e < s; e++)
                null === d[e] ? b.push(d[e]) : b.push(c[e] === d[e] ? "" : d[e]);
        else 
            b = d;
        a._lastPerformanceTiming = d;
        return b.join(",")
    }
    function Oa() {
        var a;
        if ("object" == typeof g.chrome && g.chrome.loadTimes) {
            if (a = g.chrome.loadTimes(), a.requestTime && a.firstPaintTime)
                return ~~(1E3 * (a.firstPaintTime - a.requestTime))
        } else if (g.performance && g.performance.timing && (a = g.performance.timing,
        a.navigationStart && a.msFirstPaint))
            return a.msFirstPaint - a.navigationStart;
        return null
    }
    function Pa(a) {
        var b = f.referrer || "";
        if (RegExp("^https?://" + A.host + "/").test(b))
            return !1;
        for (var c = a.patterns, d = 0; d < c.length; d++)
            if (b.match(RegExp(c[d], "i"))) {
                var e = a.params || [];
                if (e.length)
                    for (var s = S((RegExp.$1 || "").replace(/\+/g, "%20")), g = 0; g < e.length; g++) {
                        if (s == S(e[g]))
                            return !0
                    } else 
                        return !0
            }
        return !1
    }
    function ra(a, b) {
        var c=!1;
        if (a && "string" != typeof a && a.length)
            for (var d = 0; d < a.length; d++) {
                var e = a[d].selector,
                g = a[d].text, t = e.charAt(0), e = e.slice(1);
                if ("#" == t) {
                    if (t = f.getElementById(e))
                        c=!0, b && N.unshift([t, t.innerHTML]), t.innerHTML = g
                } else if ("." == t)
                    for (t = l.getElementsByClassName(e), e = 0; e < t.length; e++) {
                        var c=!0, h = t[e], k = g;
                        b && N.unshift([h, h.innerHTML]);
                        h.innerHTML = k
                    }
            }
        return c
    }
    function ta() {
        for (var a = 0; a < N.length; a++)
            N[a][0].innerHTML = N[a][1]
    }
    function Qa(a, b) {
        a = a && a.replace(/^\?/, "");
        b = b && b.replace(/^#/, "");
        var c = "";
        if (a)
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                "_openstat" == g[0] && (c =
                g[1])
            }
        b && 0 == b.indexOf("_openstat=") && (c = b.slice(10));
        c && (c =- 1 < c.indexOf(";") ? S(c) : Ra(c.replace(/[-*_]/g, function(a) {
            return {
                "*": "+",
                "-": "/",
                _: "="
            }
            [a] || a
        })));
        return c && (c = c.split(";"), 4 == c.length) ? {
            service: c[0],
            campaign: c[1],
            ad: c[2],
            source: c[3]
        } : null
    }
    function S(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return ""
        }
    }
    function Ra(a) {
        for (; a.length%4;)
            a += "=";
        var b, c, d, e, g, f = 0, h = "";
        do {
            b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++));
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++));
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++));
            g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++));
            if (0 > b || 0 > c || 0 > e || 0 > g)
                return null;
            d = b<<18 | c<<12 | e<<6 | g;
            b = d>>16 & 255;
            c = d>>8 & 255;
            d&=255;
            h = 64 == e ? h + String.fromCharCode(b) : 64 == g ? h + String.fromCharCode(b, c) : h + String.fromCharCode(b, c, d)
        }
        while (f < a.length);
        a = h;
        e = "";
        for (b = h = f = g = 0; g < a.length;)
            f = a.charCodeAt(g), 128 > f ? (e += String.fromCharCode(f), g++) : 191 < f && 224 > f ? (h = a.charCodeAt(g +
            1), e += String.fromCharCode((f & 31)<<6 | h & 63), g += 2) : (h = a.charCodeAt(g + 1), b = a.charCodeAt(g + 2), e += String.fromCharCode((f & 15)<<12 | (h & 63)<<6 | b & 63), g += 3);
        return e
    }
    function ua(a) {
        try {
            delete g[a]
        } catch (b) {
            g[a] = M
        }
    }
    function va(a) {
        var b = f.createElement("script");
        b.type = "text/javascript";
        b.async=!0;
        b.src = a;
        try {
            var c = f.getElementsByTagName("html")[0];
            f.getElementsByTagName("head")[0] || c.appendChild(f.createElement("head"));
            var d = f.getElementsByTagName("head")[0];
            d.insertBefore(b, d.firstChild)
        } catch (e) {}
    }
    function wa() {
        if (top !=
        g && parent == top && g.postMessage&&!Ya.Metrika_visorPlayerOn) {
            Ya.Metrika_visorPlayerOn=!0;
            var a = f.createElement("div");
            a.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var b = a.firstChild;
            P(function() {
                var c = f.body || f.documentElement;
                a.webkitCreateShadowRoot && (c.appendChild(a), c = a.webkitCreateShadowRoot(), Ya.Metrika_shadowAppRoot = c);
                c.appendChild(b);
                try {
                    var d = b.contentWindow.document
                } catch (e) {}
                d &&
                (c = Math.random(), g[c] = function(a, b, c, d, e) {
                    try {
                        c.postMessage && (a.onmessage = function(c) {
                            c = c || a.event;
                            try {
                                var g = JSON.parse(c.data)
                            } catch (f) {
                                return 
                            }
                            if (/(^|\.)yandex\.(ru|com|ua|kz|by|com\.tr)(:\d{4})?$/.test(c.origin) && g && "script" == g.name && g.data) {
                                c = d.getElementsByTagName("head")[0];
                                var h = d.createElement("base");
                                h.href = g.data;
                                c.appendChild(h);
                                h = d.createElement("script");
                                h.src = g.data;
                                c.appendChild(h);
                                - 1 < e.userAgent.indexOf("Firefox/3.6.") && b.removeEventListener("message", a.onmessage, !1);
                                a.onmessage = null
                            }
                        },
                        - 1 < e.userAgent.indexOf("Firefox/3.6.") && b.addEventListener("message", a.onmessage, !1), c.postMessage('{"name":"ping"}', "*"))
                    } catch (g) {}
                }, d.open(), d.write('<!doctype html><html><head><meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7,IE=edge" /></head><body><script type="text/javascript">eval("(" + Function.prototype.toString.call(parent[' + c + ']) + ")")(window, parent, top, document, navigator);\x3c/script></body></html>'), d.close())
            }, 500)
        }
    }
    function Sa(a, b, c, d, e, s) {
        function t(a) {
            var b = (new Date).getTime();
            a && b < a && (Ta += a - b + R);
            P(function() {
                t(b)
            }, R, "timeCorrector")
        }
        function sa() {
            var a = (new Date).getTime() + Ta;
            a < Ua && (a = Ua + R / 2);
            return Ua = a
        }
        function w() {
            return Math.round((sa() - ib) / $)
        }
        function r(a, b) {
            b = Math.max(0, Math.min(b, 65535));
            h.mergeArrays(a, [b>>8, b & 255])
        }
        function n(a, b) {
            h.mergeArrays(a, [b & 255])
        }
        function m(a, b) {
            for (b = Math.max(0, b | 0); 127 < b;)
                h.mergeArrays(a, [b & 127 | 128]), b>>=7;
            h.mergeArrays(a, [b])
        }
        function u(a, b) {
            255 < b.length && (b = b.substr(0, 255));
            h.mergeArrays(a, [b.length]);
            for (var c = 0; c < b.length; c++)
                r(a,
                b.charCodeAt(c))
        }
        function q(a, b) {
            m(a, b.length);
            for (var c = 0; c < b.length; c++)
                m(a, b.charCodeAt(c))
        }
        function A(a, b, c, d, e, g) {
            for (; c && (!c.offsetWidth ||!c.offsetHeight);)
                c = l.getElementParent(c);
            if (!c)
                return null;
            var f = c[C];
            if (!f || 0 > f)
                return null;
            var h = {
                mousemove: ba,
                click: Ha,
                dblclick: Ia,
                mousedown: fa,
                mouseup: Fa,
                touch: na
            }
            [b];
            if (!h)
                return null;
            var s = l.getElementXY(c);
            c = [];
            n(c, h);
            m(c, a);
            m(c, f);
            m(c, Math.max(0, d[0] - s[0]));
            m(c, Math.max(0, d[1] - s[1]));
            /^mouse(up|down)|click$/.test(b) && (a = e || g, n(c, 2 > a ? Ja : a == (e ? 2 : 4) ?
            La : Ka));
            return c
        }
        function F(a, b, c, d) {
            b = b[C];
            if (!b || 0 > b)
                return null;
            var e = [];
            n(e, Ga);
            m(e, a);
            m(e, b);
            m(e, c[0]);
            m(e, c[1]);
            n(e, 0);
            n(e, 0);
            n(e, d);
            return e
        }
        function H(a, b) {
            var c = [];
            n(c, da);
            m(c, a);
            m(c, b[0]);
            m(c, b[1]);
            return c
        }
        function I(a, b, c) {
            var d = [];
            c = c[C];
            if (!c || 0 > c)
                return null;
            n(d, ea);
            m(d, a);
            m(d, b[0]);
            m(d, b[1]);
            m(d, c);
            return d
        }
        function E(a, b, c) {
            var d = [];
            n(d, wa);
            m(d, a);
            m(d, b[0]);
            m(d, b[1]);
            m(d, c[0]);
            m(d, c[1]);
            return d
        }
        function J(a, b, c, d) {
            var e = [];
            n(e, ga);
            m(e, a);
            r(e, b);
            n(e, c);
            a = d[C];
            if (!a || 0 > a)
                a = 0;
            m(e, a);
            return e
        }
        function D(a, b) {
            var c, d;
            0 == b.length ? d = c = "" : 100 >= b.length ? (c = b, d = "") : 200 >= b.length ? (c = b.substr(0, 100), d = b.substr(100)) : (c = b.substr(0, 97), d = b.substr(b.length - 97));
            var e = [];
            n(e, Ea);
            m(e, a);
            q(e, c);
            q(e, d);
            return e
        }
        function T(a) {
            var b = [];
            n(b, va);
            m(b, a);
            return b
        }
        function B(a) {
            var b = [];
            n(b, pa);
            m(b, a);
            return b
        }
        function Q(a) {
            var b = [];
            n(b, qa);
            m(b, a);
            return b
        }
        function Y(a, b) {
            var c = [];
            n(c, ra);
            m(c, a);
            m(c, b[C]);
            return c
        }
        function Bb(a, b) {
            var c = [];
            n(c, ta);
            m(c, a);
            m(c, b[C]);
            return c
        }
        function Z(a, b, c) {
            var d =
            [];
            n(d, ua);
            m(d, a);
            m(d, b[C]);
            u(d, String(c));
            return d
        }
        function W(a) {
            var b = a[C];
            if (!b || 0 > b ||!/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) ||!a.form || l.classNameExists(a.form, "-metrika-noform"))
                return null;
            var c = l.getFormNumber(a.form);
            if (0 > c)
                return null;
            var d;
            d = "INPUT" == a.nodeName ? {
                text: 0,
                color: 0,
                date: 0,
                datetime: 0,
                "datetime-local": 0,
                email: 0,
                number: 0,
                range: 0,
                search: 0,
                tel: 0,
                time: 0,
                url: 0,
                month: 0,
                week: 0,
                password: 2,
                radio: 3,
                checkbox: 4,
                file: 6,
                image: 7
            }
            [a.type] : {
                SELECT: 1,
                TEXTAREA: 5
            }
            [a.nodeName];
            if ("number" != typeof d)
                return null;
            for (var e =- 1, g = a.form.elements, f = g.length, h = 0, s = 0; h < f; h++)
                if (g[h].name == a.name) {
                    if (g[h] == a) {
                        e = s;
                        break
                    }
                    s++
                }
            if (0 > e)
                return null;
            g = [];
            n(g, ja);
            m(g, b);
            m(g, c);
            m(g, d);
            q(g, a.name || "");
            m(g, e);
            return g
        }
        function x(a, b) {
            var c = l.getFormNumber(b);
            if (0 > c)
                return null;
            for (var d = b.elements, e = d.length, g = [], f = 0; f < e; f++)
                if (!l.isEmptyField(d[f])) {
                    var s = d[f][C];
                    s && 0 < s && h.mergeArrays(g, [s])
                }
            d = [];
            n(d, ma);
            m(d, a);
            m(d, c);
            m(d, g.length);
            for (c = 0; c < g.length; c++)
                m(d, g[c]);
            return d
        }
        function z() {
            var a = [];
            n(a, oa);
            return a
        }
        function p(a,
        b, c) {
            a = a.apply(g, b);
            K.append(a, c)
        }
        function y(a) {
            if (a[C])
                a: {
                var b = w(), c = a[C];
                if (0 < c) {
                    var d = [];
                    a = l.getElementRegion(a);
                    var e = xa[c], g = a[0] + "x" + a[1], f = a[2] + "x" + a[3];
                    g != e.pos && (e.pos = g, n(d, ka), m(d, b), m(d, c), m(d, a[0]), m(d, a[1]));
                    f != e.size && (e.size = f, n(d, la), m(d, b), m(d, c), m(d, a[2]), m(d, a[3]));
                    if (d.length) {
                        a = d;
                        break a
                    }
                }
                a = null
            } else {
                (c = l.getElementParent(a)) && y(c);
                a[C] = Va;
                xa[Va] = {};
                Va++;
                if (a.nodeName)
                    if (c =+ a[C], !isFinite(c) || 0 >= c)
                        b = null;
                    else {
                        var d = Pa, e = 0, h = l.getElementParent(a), g = h && h[C] ? h[C]: 0;
                        0 > g && (g = 0);
                        var f = a.nodeName.toUpperCase(), s = Sa[f];
                        s || (d|=Ma);
                        var t = l.getElementNeighborPosition(a);
                        t || (d|=Na);
                        var x = l.getElementRegion(a);
                        (h = h ? l.getElementRegion(h) : null) && x[0] == h[0] && x[1] == h[1] && x[2] == h[2] && x[3] == h[3] && (d|=kb);
                        xa[c].pos = x[0] + "x" + x[1];
                        xa[c].size = x[2] + "x" + x[3];
                        a.id && "string" == typeof a.id && (d|=lb);
                        (h = l.calcTextChecksum(a)) && (d|=Oa);
                        var k = l.calcAttribChecksum(a);
                        k && (e|=Qa);
                        var p;
                        b:
                        {
                            p = l.getElementChildren(l.getElementParent(a), a.tagName);
                            for (var z = 0; z < p.length; z++)
                                if ((!p[z].id || "string" != typeof p[z].id) &&
                                l.calcAttribChecksum(p[z]) == k && l.calcTextChecksum(p[z]) == h) {
                                    p=!0;
                                    break b
                                }
                                p=!1
                            }
                            p && (d|=mb, b = l.calcChildrenChecksum(a));
                            p = [];
                            n(p, aa);
                            m(p, c);
                            n(p, d);
                            m(p, g);
                            s ? n(p, s) : u(p, f);
                            t && m(p, t);
                            d & kb || (m(p, x[0]), m(p, x[1]), m(p, x[2]), m(p, x[3]));
                            d & lb && u(p, a.id);
                            h && r(p, h);
                            d & mb && r(p, b);
                            n(p, e);
                            k && r(p, k);
                            b = p
                    } else 
                        a[C] =- 1, b = null;
                K.append(b, void 0);
                a = W(a)
            }
            K.append(a, void 0)
        }
        function ca(a) {
            var b = G.getTarget(a);
            if (b && "SCROLLBAR" != b.nodeName) {
                if (b && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))
                    if (b[C])
                        y(b);
                    else {
                        var c = b.form;
                        if (c)
                            for (var c = c.elements, d = c.length, e = 0; e < d; e++)
                                /^INPUT | SELECT | TEXTAREA | BUTTON$ / .test(c[e].tagName)&&!c[e][C] && y(c[e]);
                        else 
                            y(b)
                        } else 
                            y(b);
                p(A, [w(), a.type, b, G.getPos(a), a.which, a.button])
            }
        }
        function nb(a) {
            ca(a);
            a: {
                var b, c;
                g.getSelection ? (a = g.getSelection(), b = a.toString(), c = a.anchorNode) : f.selection && f.selection.createRange && (a = f.selection.createRange(), b = a.text, c = a.parentElement());
                if ("string" == typeof b) {
                    try {
                        for (; c && 1 != c.nodeType;)
                            c = c.parentNode
                    } catch (d) {
                        break a
                    }
                    c && Wa(c) || c && (/(?:^|\s)-metrika-nokeys(?:\s|$)/.test(c.className) ||
                    l.getElementsByClassName("-metrika-nokeys", c).length) || b == Xa || (Xa = b, p(D, [w(), b]))
                }
            }
        }
        function ob(a) {
            var b = sa(), c = b - pb;
            if (!(c < U)) {
                var d = G.getPos(a), e = Za[0] - d[0], g = Za[1] - d[1], e = e * e + g * g;
                0 >= e || 16 > e && 100 > c || 20 > c && 256 > e || (pb = b, Za = d, ca(a))
            }
        }
        function ya() {
            var a = l.getDocumentScroll(), b = sa();
            b - qb < U || 10 > Math.abs(a[0] - $a[0]) && 10 > Math.abs(a[1] - $a[1]) || (qb = b, $a = a, p(H, [w(), a]))
        }
        function rb(a) {
            a = G.getTarget(a);
            var b = Math.random(), c = [a.scrollLeft, a.scrollTop];
            if (a.localId) {
                if (b = ab[a.localId], !b || 10 > Math.abs(c[0] - b[0]) &&
                10 > Math.abs(c[1] - b[1]))
                    return 
            } else {
                for (; ab[b];)
                    b = Math.random();
                a.localId = b
            }
            ab[a.localId] = c;
            a !== f && (y(a), p(I, [w(), c, a]))
        }
        function bb() {
            p(E, [w(), l.getViewportSize(), l.getDocumentSize()])
        }
        function za() {
            p(z, [], !0)
        }
        function sb(a) {
            return (a.shiftKey ? tb : 0) | (a.ctrlKey ? cb : 0) | (a.altKey ? ub : 0) | (a.metaKey ? Ra : 0) | (a.ctrlKey || a.altKey ? Aa : 0)
        }
        function Wa(a) {
            return "INPUT" == a.tagName ? "password" == a.type || a.name && vb.test(a.name) || a.id && vb.test(a.id) : !1
        }
        function wb(a, b, c) {
            a = G.getTarget(a);
            Wa(a) || /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className) ||
            (y(a), p(J, [w(), b, c, a]))
        }
        function xb(a) {
            var b = a.keyCode, c = sb(a);
            if ({
                3: 1,
                8: 1,
                9: 1,
                13: 1,
                16: 1,
                17: 1,
                18: 1,
                19: 1,
                20: 1,
                27: 1,
                33: 1,
                34: 1,
                35: 1,
                36: 1,
                37: 1,
                38: 1,
                39: 1,
                40: 1,
                45: 1,
                46: 1,
                91: 1,
                92: 1,
                93: 1,
                106: 1,
                110: 1,
                111: 1,
                144: 1,
                145: 1
            }
            [b] || 112 <= b && 123 >= b || 96 <= b && 105 >= b || c & Aa)
                19 == b && (c&~Aa) == cb && (b = 144), wb(a, b, c | Aa), db=!1, P(function() {
                    db=!0
                }, 1), 67 == b && c & cb&&!(c & ub || c & tb) && eb()
        }
        function yb(a) {
            db&&!fb && 0 !== a.which && (wb(a, a.charCode || a.keyCode, sb(a)), fb=!0, P(function() {
                fb=!1
            }, 1))
        }
        function eb() {
            gb || (gb=!0, Xa && p(T, [w()]), P(function() {
                gb =
                !1
            }, 1))
        }
        function hb() {
            ha || (ha=!0, p(B, [w()]))
        }
        function ia() {
            ha && (ha=!1, p(Q, [w()]))
        }
        function zb(a) {
            (!ha || a&&!a.fromElement) && hb()
        }
        function L(a) {
            a&&!a.toElement && ia()
        }
        function M(a) {
            if ((a = G.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)) {
                if (a[C])
                    y(a);
                else {
                    var b = a.form;
                    if (b)
                        for (var b = b.elements, c = b.length, d = 0; d < c; d++)
                            /^INPUT | SELECT | TEXTAREA | BUTTON$ / .test(b[d].tagName)&&!b[d][C] && y(b[d]);
                    else 
                        y(a)
                    }
                p(Y, [w(), a])
            }
        }
        function V(a) {
            (a = G.getTarget(a)) && /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) &&
            (y(a), p(Bb, [w(), a]))
        }
        function O(a) {
            a = G.getTarget(a);
            if (!(Wa(a) || a && /(?:^|\s)-metrika-nokeys(?:\s|$)/.test(a.className)) && a && /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)) {
                var b = /^(checkbox|radio)$/.test(a.type) ? a.checked: a.value;
                y(a);
                p(Z, [w(), a, b])
            }
        }
        function S(a) {
            a = G.getTarget(a);
            if (!l.classNameExists(a, "-metrika-noform") && "FORM" == a.nodeName) {
                for (var b = a.elements, c = 0; c < b.length; c++)
                    l.isEmptyField(b[c]) || y(b[c]);
                p(x, [w(), a], !0)
            }
        }
        function N(a) {
            ya();
            if (a.touches && a.touches.length) {
                var b = G.getTarget(a);
                if (b) {
                    y(b);
                    for (var c = 0; c < a.touches.length; c++)
                        p(A, [w(), "touch", b, [a.touches[c].pageX, a.touches[c].pageY], 0, 0])
                    }
            }
        }
        function X(a) {
            var b = G.getTarget(a);
            if (b) {
                var c;
                "wheel" == a.type ? c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" == a.type && (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                c && (y(b), p(F, [w(), b, G.getPos(a), c]))
            }
        }
        var K = new Ab({
            protocol: a,
            counterId: b,
            counterType: c,
            meta: {
                url: v().href,
                hitId: e,
                timezone: Ba,
                timestamp: Ca
            }
        }), R = 20, $ = 50, U = 10, aa = 1, ba = 2, da = 3, ea = 16, fa = 4, ga = 5, ja = 7, ka = 9, la = 10, ma = 11, na = 12, oa = 13, pa = 14, qa = 15, ra = 17, ta =
        18, ua = 19, va = 27, wa = 28, Ea = 29, Fa = 30, Ga = 31, Ha = 32, Ia = 33, Ja = 1, Ka = 2, La = 4, mb = 1, Ma = 2, Na = 4, kb = 8, Oa = 16, lb = 32, Pa = 64, Qa = 2, ub = 1, tb = 2, cb = 4, Ra = 8, Aa = 16, Sa = {
            A: 1,
            ABBR: 2,
            ACRONYM: 3,
            ADDRESS: 4,
            APPLET: 5,
            AREA: 6,
            B: 7,
            BASE: 8,
            BASEFONT: 9,
            BDO: 10,
            BIG: 11,
            BLOCKQUOTE: 12,
            BODY: 13,
            BR: 14,
            BUTTON: 15,
            CAPTION: 16,
            CENTER: 17,
            CITE: 18,
            CODE: 19,
            COL: 20,
            COLGROUP: 21,
            DD: 22,
            DEL: 23,
            DFN: 24,
            DIR: 25,
            DIV: 26,
            DL: 27,
            DT: 28,
            EM: 29,
            FIELDSET: 30,
            FONT: 31,
            FORM: 32,
            FRAME: 33,
            FRAMESET: 34,
            H1: 35,
            H2: 36,
            H3: 37,
            H4: 38,
            H5: 39,
            H6: 40,
            HEAD: 41,
            HR: 42,
            HTML: 43,
            I: 44,
            IFRAME: 45,
            IMG: 46,
            INPUT: 47,
            INS: 48,
            ISINDEX: 49,
            KBD: 50,
            LABEL: 51,
            LEGEND: 52,
            LI: 53,
            LINK: 54,
            MAP: 55,
            MENU: 56,
            META: 57,
            NOFRAMES: 58,
            NOSCRIPT: 59,
            OBJECT: 60,
            OL: 61,
            OPTGROUP: 62,
            OPTION: 63,
            P: 64,
            PARAM: 65,
            PRE: 66,
            Q: 67,
            S: 68,
            SAMP: 69,
            SCRIPT: 70,
            SELECT: 71,
            SMALL: 72,
            SPAN: 73,
            STRIKE: 74,
            STRONG: 75,
            STYLE: 76,
            SUB: 77,
            SUP: 78,
            TABLE: 79,
            TBODY: 80,
            TD: 81,
            TEXTAREA: 82,
            TFOOT: 83,
            TH: 84,
            THEAD: 85,
            TITLE: 86,
            TR: 87,
            TT: 88,
            U: 89,
            UL: 90,
            VAR: 91,
            NOINDEX: 100
        }, Ta = 0;
        t(0);
        var Ua = 0, Va = 1, pb = 0, Za = [0, 0], qb = 0, $a = [0, 0], ab = {}, vb = /^(password|passwd|pswd)$/, db=!0, fb=!1, Xa = "", gb=!1, ha=!0, ib = sa(), C =
        "metrikaId_" + Math.random(), xa = {}, Da = ":submit" + Math.random();
        if ("MetrikaPlayer" != g.name) {
            k.on(f, "mousemove", ob);
            k.on(f, "click,dblclick,mousedown", ca);
            k.on(f, "mouseup", nb);
            k.on(g, "scroll", ya);
            if ("onmousewheel"in f)
                k.on(f, "mousewheel", X);
            else 
                k.on(f, "wheel", X);
            k.on(g, "beforeunload", za);
            if (!Cb)
                k.on(g, "unload", za);
            k.on(g, "resize", bb);
            k.on(f, "keydown", xb);
            k.on(f, "keypress", yb);
            k.on(f, "copy", eb);
            k.on(f, "touchmove,touchstart", N);
            f.attachEvent&&!g.opera ? (k.on(f, "focusin", zb), k.on(f, "focusout", L)) : (k.on(g,
            "focus", hb), k.on(g, "blur", ia), k.on(f, "blur", ia));
            f.addEventListener ? (k.on(f, "scroll", rb), k.on(f, "focus", M), k.on(f, "blur", V), k.on(f, "change", O), k.on(f, "submit", S)) : f.attachEvent && (k.on(f, "focusin", M), k.on(f, "focusout", V), function() {
                for (var a = f.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                    for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)
                        if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName))
                            k.on(c[d], "change", O);
                    k.on(a[b], "submit", S)
                }
            }());
            (function() {
                var a = f.getElementsByTagName("form");
                if (a.length)
                    for (var b =
                    0; b < a.length; b++) {
                        var c = a[b].submit;
                        if ("function" == typeof c || "object" == typeof c && /^\s*function submit\(\)/.test(String(c)))
                            a[b][Da] = c, a[b].submit = function() {
                                S({
                                    target: this
                                });
                                return this[Da]()
                            }
                    }
            })();
            "0:0" != l.getDocumentScroll().join(":") && ya();
            bb();
            s.uploadPage = function(d) {
                if ("function" == typeof g.toStaticHTML&&-1 < g.toStaticHTML.toString().indexOf("NoScript"))
                    return !1;
                var h = f.documentElement;
                if (h && 19E4 < ("" + h.innerHTML).length)
                    return !1;
                var s = g.XMLHttpRequest ? new g.XMLHttpRequest: new ActiveXObject("Msxml2.XMLHTTP"),
                x = l.getDocumentCharset(), h = "text/html" + (x ? ";charset=" + x : ""), t = new Db({
                    protocol: a,
                    counterId: b,
                    counterType: c
                });
                if ("html" == d)
                    return d = RegExp("<script [^>]*?//mc\\.yandex\\.ru/watch/.*?\x3c/script>", "gi"), t.sendContent(l.getDocumentHTML().replace(d, ""), h, e, Ba, Ca), !0;
                s && (s.open("get", v().href, !0), s.onreadystatechange = function() {
                    4 == s.readyState && t.sendContent(s.responseText, s.getResponseHeader("content-type"), e, Ba, Ca)
                }, s.overrideMimeType && x && s.overrideMimeType(h), s.send(null));
                return !0
            }
        }
        return {
            start: function() {
                K.activate()
            },
            stop: function() {
                K.clear();
                k.un(f, "mousemove", ob);
                k.un(f, "click,dblclick,mousedown", ca);
                k.un(f, "mouseup", nb);
                k.un(f, "mousewheel,wheel", X);
                k.un(g, "scroll", ya);
                k.un(g, "beforeunload", za);
                k.un(g, "unload", za);
                k.un(g, "resize", bb);
                k.un(f, "keydown", xb);
                k.un(f, "keypress", yb);
                k.un(f, "copy", eb);
                k.un(f, "touchmove,touchstart", N);
                k.un(f, "focusin", zb);
                k.un(f, "focusout", L);
                k.un(g, "focus", hb);
                k.un(g, "blur", ia);
                k.un(f, "blur", ia);
                f.removeEventListener ? (k.un(f, "scroll", rb), k.un(f, "focus", M), k.un(f, "blur", V), k.un(f, "change",
                O), k.un(f, "submit", S)) : f.detachEvent && (k.un(f, "focusin", M), k.un(f, "focusout", V), function() {
                    for (var a = f.getElementsByTagName("form"), b = 0; b < a.length; b++) {
                        for (var c = a[b].getElementsByTagName("*"), d = 0; d < c.length; d++)
                            /^INPUT | SELECT | TEXTAREA$ / .test(c[d].tagName) && k.un(c[d], "change", O);
                        k.un(a[b], "submit", S)
                    }
                }());
                (function() {
                    for (var a = f.getElementsByTagName("form"), b = 0; b < a.length; b++)
                        a[b][Da] && (a[b].submit = a[b][Da])
                })()
            },
            uploadPages: function(a, b) {
                function c() {
                    k.un(f, "DOMContentLoaded", c);
                    k.un(g, "load", c);
                    for (var d = a.split(/\n/), e = v().href, h = /regexp:/, x = 0; x < d.length; x++) {
                        var t = d[x];
                        if (t)
                            if (h.test(t)) {
                                t = jb(t.replace(h, ""));
                                try {
                                    var p = RegExp(t)
                                } catch (m) {}
                                if (p && p.test(e)) {
                                    s.uploadPage(b);
                                    break
                                }
                        } else if ( - 1 !== e.indexOf(t)) {
                            s.uploadPage(b);
                            break
                        }
                    }
                }
                "complete" == f.readyState ? c() : (k.on(f, "DOMContentLoaded", c), k.on(g, "load", c))
            }
        }
    }
    var ib=!1, oa = "", Cb=!ga(/webkit/) && ga(/gecko/), l = {
        getDocumentCharset: function() {
            return ("" + (f.characterSet || f.charset || "")).toLowerCase()
        },
        getDocumentHTML: function() {
            var a = "", b = "", a = f.documentElement,
            c = a.outerHTML;
            if (c)
                a = c;
            else {
                for (var c = a.attributes, d = "", e = 0; e < c.length; e++) {
                    var g = c[e];
                    g && (d += " " + g.name + '="' + (g.value || "") + '"')
                }
                a = "<html" + d + ">" + a.innerHTML + "</html>"
            }(c = f.doctype) && (b = "<!DOCTYPE " + c.name + (c.publicId ? ' PUBLIC "' + c.publicId + '"' : "") + (c.systemId ? ' "' + c.systemId + '"' : "") + ">\n");
            return b + a
        },
        getRootElement: function() {
            var a = f.documentElement;
            return "CSS1Compat" == f.compatMode ? a : f.body || a
        },
        getViewportSize: function() {
            var a = l.getRootElement();
            return [a.clientWidth, a.clientHeight]
        },
        getDocumentSize: function() {
            var a =
            l.getRootElement(), b = l.getViewportSize();
            return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
        },
        getDocumentScroll: function() {
            return [g.pageXOffset || f.documentElement && f.documentElement.scrollLeft || f.body && f.body.scrollLeft || 0, g.pageYOffset || f.documentElement && f.documentElement.scrollTop || f.body && f.body.scrollTop || 0]
        },
        getElementXY: function(a) {
            if (!a.ownerDocument || "PARAM" == a.tagName || a == f.body || a == f.documentElement)
                return [0, 0];
            if (a.getBoundingClientRect) {
                a = a.getBoundingClientRect();
                var b =
                l.getDocumentScroll();
                return [Math.round(a.left + b[0]), Math.round(a.top + b[1])]
            }
            for (var c = b = 0; a;)
                b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
            return [b, c]
        },
        getElementParent: function(a) {
            return a == f.documentElement ? null : a == f.body ? f.documentElement : a.parentNode
        }
    }, h = {
        isArray: function(a) {
            return "function" == typeof Array.isArray ? Array.isArray(a) : "[object Array]" == Object.prototype.toString.call(a)
        },
        mergeArrays: function(a) {
            for (var b = 1; b < arguments.length; b++)
                if (h.isArray(arguments[b]))
                    for (var c = 0; c < arguments[b].length; c++)
                        a[a.length] =
                        arguments[b][c];
            return a
        }
    };
    l.getElementChildren = function(a, b) {
        var c = [];
        if (a) {
            var d = a.childNodes;
            if (d)
                for (var e = 0, g = d.length; e < g; e++) {
                    var f = d[e];
                    "INPUT" == f.nodeName && f.type && "hidden" == f.type.toLocaleLowerCase() || b && f.nodeName != b || h.mergeArrays(c, [f])
                }
            }
        return c
    };
    l.getElementNeighborPosition = function(a) {
        var b = l.getElementParent(a);
        if (b)
            for (var c = 0, d = 0; d < b.childNodes.length; d++)
                if (a.nodeName == b.childNodes[d].nodeName) {
                    if (a == b.childNodes[d])
                        return c;
                        c++
                }
        return 0
    };
    l.getElementSize = function(a) {
        return a ==
        f.body || a == f.documentElement ? l.getDocumentSize() : [a.offsetWidth, a.offsetHeight]
    };
    l.getElementRegion = function(a) {
        var b = l.getElementXY(a);
        a = l.getElementSize(a);
        return [b[0], b[1], a[0], a[1]]
    };
    h.fletcher = function(a) {
        for (var b = a.length, c = 0, d = 255, e = 255; b;) {
            var g = 21 < b ? 21: b, b = b - g;
            do {
                var f = "string" == typeof a ? a.charCodeAt(c): a[c];
                c++;
                if (255 < f)
                    var h = f>>8, f = f & 255, f = f^h;
                d += f;
                e += d
            }
            while (--g);
            d = (d & 255) + (d>>8);
            e = (e & 255) + (e>>8)
        }
        a = (d & 255) + (d>>8)<<8 | (e & 255) + (e>>8);
        return 65535 == a ? 0 : a
    };
    l.calcTextChecksum = function(a) {
        var b =
        "";
        a = a.childNodes;
        for (var c = 0, d = a.length; c < d; c++)
            a[c] && 3 == a[c].nodeType && (b += a[c].nodeValue);
        return h.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
    };
    l.calcAttribChecksum = function(a) {
        var b = "", c = "width height align title alt name".split(" ");
        "IMG" == a.tagName && (b += a.src.toLowerCase());
        "A" == a.tagName && (b += a.href.toLowerCase());
        for (var b = b + String(a.className || "").toLowerCase(), d = 0; d < c.length; d++)
            a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase());
        return h.fletcher(b.replace(/[\u0000-\u0020]+/g,
        ""))
    };
    l.calcChildrenChecksum = function(a) {
        return h.fletcher((a.innerHTML || "").replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
    };
    l.getFormNumber = function(a) {
        for (var b = f.getElementsByTagName("form"), c = 0, d = b.length; c < d; c++)
            if (b[c] == a)
                return c;
        return - 1
    };
    l.classNameExists = function(a, b) {
        return RegExp("(?:^|\\s)" + b + "(?:\\s|$)").test(a.className)
    };
    l.isEmptyField = function(a) {
        return "INPUT" == a.nodeName && "submit" != a.type && "image" != a.type && "hidden" != a.type ? "radio" == a.type || "checkbox" == a.type?!a.checked : !a.value : "TEXTAREA" ==
        a.nodeName?!a.value : "SELECT" == a.nodeName ? 0 > a.selectedIndex : !0
    };
    l.getElementsByClassName = function(a, b) {
        b = b || f;
        for (var c = b.getElementsByTagName("*"), d = [], e = 0; e < c.length; e++)
            l.classNameExists(c[e], a) && d.push(c[e]);
        return d
    };
    l.getDocumentTitle = function() {
        var a = f.title;
        "string" != typeof a && (a = (a = f.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "");
        return a
    };
    var G = {
        getPos: function(a) {
            var b = l.getRootElement(), c = l.getDocumentScroll();
            return [a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0, a.pageY || a.clientY +
            c[1] - (b.clientTop || 0) || 0]
        },
        getTarget: function(a) {
            return a.target || a.srcElement
        },
        getMouseButton: function(a) {
            return a.which || a.button == M ? a.which : a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0
        }
    };
    h.mixin = function(a) {
        for (var b = 1; b < arguments.length; b++)
            if (arguments[b]) {
                for (var c in arguments[b])
                    arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c]);
                    arguments[b].hasOwnProperty("toString") && (a.toString = arguments[b].toString)
            }
        return a
    };
    var E = function(a) {
        a = a || {};
        h.mixin(this, a);
        this._initComponent()
    };
    E.prototype._initComponent =
    function() {};
    E.inherit = function(a) {
        a = a || {};
        var b = "function" == typeof this ? this: Object;
        a.hasOwnProperty("constructor") || (a.constructor = function() {
            b.apply(this, arguments)
        });
        var c = function() {};
        c.prototype = b.prototype;
        a.constructor.prototype = new c;
        h.mixin(a.constructor.prototype, a);
        a.constructor.prototype.constructor = a.constructor;
        a.constructor.superclass = b.prototype;
        a.constructor.inherit = E.inherit;
        return a.constructor
    };
    var k = E.inherit({
        _initComponent: function() {
            k.superclass._initComponent.apply(this,
            arguments);
            this._listeners = []
        },
        on: function(a, b, c, d, e) {
            e = 5 > arguments.length?!0 : !!e;
            for (var f = b.split(","), h = 0; h < f.length; h++) {
                var k = f[h], l = F(function(a) {
                    c.call(d || this, a || g.event)
                }, "on" + k);
                this._listeners[this._listeners.length] = [a, k, c, d, e, l];
                a.addEventListener ? a.addEventListener(k, l, e) : a.attachEvent && a.attachEvent("on" + k, l)
            }
        },
        un: function(a, b, c, d, e) {
            e = 5 > arguments.length?!0 : !!e;
            for (var g = b.split(","), f = 0; f < g.length; f++)
                for (var h = g[f], k = 0; k < this._listeners.length; k++) {
                    var l = this._listeners[k];
                    if (l[0] ==
                    a && l[1] == h && l[2] == c && l[3] == d && l[4] == e) {
                        this._listeners.splice(k, 1);
                        this._removeListener(a, h, l[5], e);
                        return 
                    }
                }
        },
        unAll: function() {
            for (var a = 0; a < this._listeners.length; a++) {
                var b = this._listeners[a];
                this._removeListener(b[0], b[1], b[5], b[4])
            }
            this._listeners.length = 0
        },
        _removeListener: function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
    });
    k.on = function(a, b, c, d, e) {
        k._instance || (k._instance = new k);
        k._instance.on.apply(k._instance, arguments)
    };
    k.un = function(a,
    b, c, d, e) {
        k._instance && k._instance.un.apply(k._instance, arguments)
    };
    k.onDocumentVisible = function(a, b) {
        if ("prerender" == f.webkitVisibilityState) {
            var c = function() {
                "prerender" != f.webkitVisibilityState && (k.un(f, "webkitvisibilitychange", c), a.call(b, !0))
            };
            k.on(f, "webkitvisibilitychange", c)
        } else 
            a.call(b, !1)
    };
    V = null;
    h.toJSON = function(a) {
        if (a === M)
            return "";
        if (null === a)
            return "null";
        switch (a.constructor) {
        case Boolean:
            return a.toString();
        case Number:
            return isFinite(a) ? a.toString() : "null";
        case String:
            return '"' +
            a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"';
        case Array:
            for (var b = [], c = 0, d = a.length; c < d; c++)
                b[b.length] = h.toJSON(a[c]);
            return "[" + b.join(",") + "]";
        case Object:
            b = [];
            for (c in a)
                a.hasOwnProperty(c) && a[c] !== M && (b[b.length] = h.toJSON(c) + ":" + h.toJSON(a[c]));
            return "{" + b.join(",") + "}";
        default:
            return "null"
        }
    };
    var Z = E.inherit({
        counterId: "",
        _initComponent: function() {
            Z.superclass._initComponent.apply(this, arguments);
            this._ls = null;
            try {
                this._ls = g.localStorage
            } catch (a) {}
        },
        set: function(a, b) {
            if (this.isEnabled())
                try {
                    !b || b && h.isArray(b)&&!b.length ? this.remove(a) : this._ls.setItem(this._getLsKey(a), h.toJSON(b))
            } catch (c) {}
        },
        get: function(a) {
            if (this.isEnabled())
                try {
                    return JSON.parse(this._ls.getItem(this._getLsKey(a)))
            } catch (b) {}
            return null
        },
        remove: function(a) {
            if (this.isEnabled())
                try {
                    this._ls.removeItem(this._getLsKey(a))
            } catch (b) {}
        },
        isEnabled: function() {
            return this._ls && g.JSON && "object" == typeof this._ls && "object" == typeof g.JSON
        },
        getStorageId: function() {
            var a = this.get("lsid");
            a || (a = Math.round(Math.random() * new Date), this.set("lsid", a));
            return a
        },
        clearStorageId: function() {
            this.remove("lsid")
        },
        _getLsKey: function(a) {
            return "_ym" + this.counterId + "_" + a
        }
    }), X = E.inherit({
        counterId: "",
        onlyCurrentDomain: !1,
        skipPrefix: !1,
        _initComponent: function() {
            X.superclass._initComponent.apply(this, arguments);
            this._domain = null;
            if (!this.onlyCurrentDomain)
                for (var a = A.host.split("."), b = 2; ;)
                    if (b <= a.length) {
                        if (this._domain = "." + a.slice( - b).join("."), b++, this.isEnabled())
                            break
                    } else {
                        this._domain = null;
                        break
                    }
        },
        create: function(a, b, c) {
            a = [this._prepareName(a) + "=" + encodeURIComponent(b)];
            c && (b = new Date, b.setTime(b.getTime() + 6E4 * c), a.push("expires=" + b.toGMTString()));
            this._domain && a.push("domain=" + this._domain);
            a.push("path=/");
            try {
                f.cookie = a.join(";")
            } catch (d) {}
        },
        read: function(a) {
            try {
                var b = f.cookie
            } catch (c) {}
            return b && b.match(RegExp("(?:^|;\\s*)" + this._prepareName(a) + "=([^;]*)")) ? decodeURIComponent(RegExp.$1) : null
        },
        erase: function(a) {
            this.create(a, "", - 1)
        },
        isEnabled: function() {
            this.create("metrika_enabled", "1",
            60);
            var a=!!this.read("metrika_enabled");
            this.erase("metrika_enabled");
            return a
        },
        _prepareName: function(a) {
            return (this.skipPrefix ? "" : "_ym_") + a + (this.counterId ? "_" + this.counterId : "")
        }
    });
    X.isEnabled = function() {
        return (new X({
            onlyCurrentDomain: !0
        })).isEnabled()
    };
    var q = E.inherit({
        transports: [],
        postParams: [],
        send: function(a, b, c, d) {
            c = c || function() {};
            (function s(g) {
                if (g < this.transports.length)
                    try {
                        var f = new this.transports[g]({
                            postParams: this.postParams
                        });
                        f.request(a, b, function(a, b) {
                            a ? c.call(d, b) : s.call(this,
                            g + 1)
                        }, this)
                } catch (h) {
                    na(h, "send by " + (f && f.id)), s.call(this, g + 1)
                }
            }).call(this, 0)
        }
    }), Ea = {
        stringify: function(a) {
            var b = [], c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (h.isArray(d))
                        for (var e = 0; e < d.length; e++)
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d[e])));
                    else 
                        b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
                }
            return b.join("&")
        }
    };
    h.forEachKey = function(a, b, c) {
        for (var d in a)
            a.hasOwnProperty(d) && b.call(c, d, a[d], a)
    };
    h.inArray = function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] ==
            b)
                return !0;
        return !1
    };
    var H = E.inherit({
        postParams: [],
        _buildUrl: function(a, b) {
            return a + ( - 1 < a.indexOf("?") ? "&" : "?") + Ea.stringify(b)
        },
        _splitParams: function(a) {
            var b = {}, c = {};
            h.forEachKey(a, function(a, e) {
                h.inArray(this.postParams, a) ? c[a] = e : b[a] = e
            }, this);
            return {
                get: b,
                post: c
            }
        }
    }), J = H.inherit({
        id: "XHR",
        request: function(a, b, c, d) {
            if (/[^a-z0-9.:-]/.test(A.host) && g.opera && "function" == typeof g.opera.version) {
                var e = g.opera.version();
                if ("string" == typeof e && "12" == e.split(".")[0])
                    return c.call(d, !1)
            }
            if (g.XMLHttpRequest) {
                var f =
                new XMLHttpRequest;
                if ("withCredentials"in f) {
                    b = this._splitParams(b);
                    a = this._buildUrl(a, b.get);
                    f.open("POST", a, !0);
                    f.withCredentials=!0;
                    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    f.send(Ea.stringify(b.post));
                    (function() {
                        4 == f.readyState ? c.call(d, 200 == f.status) : P(arguments.callee, 50, "TransportXHR.request")
                    })();
                    return 
                }
            }
            c.call(d, !1)
        }
    });
    h.random = function(a, b) {
        2 > arguments.length && (b = a, a = 0);
        1 > arguments.length && (b = 1073741824);
        return Math.floor(Math.random() * (b - a)) + a
    };
    var K = H.inherit({
        id: "form",
        enctype: "application/x-www-form-urlencoded",
        htmlfileOnly: !1,
        _initComponent: function() {
            K.superclass._initComponent.apply(this, arguments);
            "_htmlfile"in K.prototype || (K.prototype._htmlfile = this._createHtmlfile());
            this._doc = this._htmlfile || (this.htmlfileOnly ? null : f)
        },
        request: function(a, b, c, d) {
            var e = this._doc;
            if (!e)
                return c.call(d, !1);
            b = this._splitParams(b);
            var g = "ifr" + h.random(), f = e.createElement("div");
            f.style.position = "absolute";
            f.style.left = "-99999px";
            f.style.top = "-99999px";
            var k = ['<iframe name="',
            g, '"></iframe>', '<form action="', this._buildUrl(a, b.get), '" method="post" target="', g, '" enctype="', this.enctype, '">'];
            h.forEachKey(b.post, function(a) {
                h.mergeArrays(k, ['<textarea name="', a, '"></textarea>'])
            });
            h.mergeArrays(k, ["</form>"]);
            f.innerHTML = k.join("");
            e.body.appendChild(f);
            var l = f.getElementsByTagName("form")[0];
            h.forEachKey(b.post, function(a, b) {
                l[a].value = b
            });
            l.submit();
            P(function() {
                e.body.removeChild(f)
            }, 1E4, "TransportForm.request.2");
            return c.call(d, !0)
        },
        _createHtmlfile: function() {
            try {
                if (g.ActiveXObject) {
                    var a =
                    new ActiveXObject("htmlfile");
                    a.open();
                    a.write("<html><body></body></html>");
                    a.close();
                    return a
                }
            } catch (b) {}
            return null
        }
    }), R = K.inherit({
        id: "htmlfile",
        htmlfileOnly: !0
    }), $ = H.inherit({
        id: "img",
        request: function(a, b, c, d) {
            a = this._buildUrl(a, b);
            b = f.createElement("img");
            b.onload = F(function() {
                c.call(d, !0)
            }, "TransportImage.request");
            b.onerror = F(function() {
                c.call(d, !1)
            }, "TransportImage.request");
            b.src = a
        }
    });
    h.defer = function(a, b, c, d, e) {
        return P(function() {
            a.apply(c, d || [])
        }, b, e)
    };
    var T = q.inherit({
        protocol: "",
        host: "mc.yandex.ru",
        resource: "",
        counterId: "",
        counterType: 0,
        retry: !1,
        transports: [J, R, $],
        _initComponent: function() {
            T.superclass._initComponent.apply(this, arguments);
            this.retry && (this._storage = new Z)
        },
        send: function(a, b, c, d) {
            var e = this._registerRequest(a, b);
            this._sendSavedRequest(e, a, b, c, d)
        },
        _sendSavedRequest: function(a, b, c, d, e) {
            var f = g.Ya._metrika.firstReqStatus;
            if ("process" == f)
                g.Ya._metrika.firstReqCallbacks = h.mergeArrays(g.Ya._metrika.firstReqCallbacks || [], [[this, arguments]]);
            else {
                f || (g.Ya._metrika.firstReqStatus = "process");
                f = {};
                this.counterType && (f["cnt-class"] = this.counterType);
                h.mixin(f, b);
                c.st = Math.round((new Date).getTime() / 1E3);
                var k = [this.protocol, "//", this.host, "/" + this.resource + "/" + this.counterId].join(""), l = [];
                c && (h.forEachKey(c, function(a, b) {
                    "t" != a && h.mergeArrays(l, [a, b])
                }), c.t && h.mergeArrays(l, ["t", c.t]));
                l.length && (f["browser-info"] = l.join(":"));
                return T.superclass.send.call(this, k, f, function() {
                    g.Ya._metrika.firstReqStatus = "complete";
                    this._unregisterRequest(a);
                    var b = g.Ya._metrika.firstReqCallbacks;
                    g.Ya._metrika.firstReqCallbacks =
                    null;
                    if (b)
                        for (var c = 0; c < b.length; c++)
                            b[c][0]._sendSavedRequest.apply(b[c][0], b[c][1]);
                    d && d.apply(e, arguments)
                }, this)
            }
        },
        _isRetryEnabled: function() {
            return this.retry && this._storage && this._storage.isEnabled()
        },
        _registerRequest: function(a, b) {
            if (this._isRetryEnabled()) {
                b.rqnl = b.rqnl || 0;
                b.rqnl++;
                for (var c = this._storage.get("retryReqs") || {}, d = 1; c[d];)
                    d++;
                c[d] = {
                    protocol: this.protocol,
                    host: this.host,
                    resource: this.resource,
                    counterId: this.counterId,
                    counterType: this.counterType,
                    postParams: this.postParams,
                    params: a,
                    browserInfo: b,
                    ghid: Ya._globalMetrikaHitId,
                    time: + new Date
                };
                this._storage.set("retryReqs", c);
                return d
            }
        },
        _unregisterRequest: function(a) {
            if (a && this._isRetryEnabled()) {
                var b = this._storage.get("retryReqs") || {};
                b[a] && (delete b[a], this._storage.set("retryReqs", b))
            }
        }
    });
    T.retransmit = function() {
        var a = new Z, b = a.get("retryReqs") || {};
        a.remove("retryReqs");
        h.forEachKey(b, function(a, b) {
            g.Ya._metrika.firstReqStatus || (g.Ya._metrika.firstReqStatus = "complete");
            b.ghid && b.ghid != Ya._globalMetrikaHitId && b.time && b.time + 864E5 >
            + new Date && 2 >= b.browserInfo.rqnl && (new T({
                protocol: b.protocol,
                host: b.host,
                resource: b.resource,
                counterId: b.counterId,
                counterType: b.counterType,
                postParams: b.postParams || [],
                retry: !0
            })).send(b.params, b.browserInfo)
        })
    };
    var U = {
        abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        tail: "+/=",
        tailSafe: "*-_",
        encode: function(a, b) {
            for (var c = (U.abc + (b ? U.tailSafe : U.tail)).split(""), d = a.length, e = [], g = d - d%3, f, k = 0; k < g; k += 3)
                f = (a[k]<<16) + (a[k + 1]<<8) + a[k + 2], h.mergeArrays(e, [c[f>>18 & 63], c[f>>12 & 63], c[f>>
                6 & 63], c[f & 63]]);
            switch (d - g) {
            case 1:
                f = a[g]<<4;
                h.mergeArrays(e, [c[f>>6 & 63], c[f & 63], c[64], c[64]]);
                break;
            case 2:
                f = (a[g]<<10) + (a[g + 1]<<2), h.mergeArrays(e, [c[f>>12 & 63], c[f>>6 & 63], c[f & 63], c[64]])
            }
            return e.join("")
        }
    }, Eb = {
        encode: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
                var e = a.charCodeAt(c);
                128 > e ? b.push(e) : (127 < e && 2048 > e ? b.push(e>>6 | 192) : (b.push(e>>12 | 224), b.push(e>>6 & 63 | 128)), b.push(e & 63 | 128))
            }
            return b
        }
    }, Db = T.inherit({
        resource: "webvisor",
        transports: [J, K],
        postParams: ["wv-data"],
        sendContent: function(a,
        b, c, d, e, g, f) {
            if (!a)
                return !1;
            - 1 < a.indexOf("\r") && (a = a.replace(/\r\n/g, "\n"));
            a = {
                "wv-type": 1,
                "page-url": v().href,
                "wv-hit": c,
                "wv-data": U.encode(Eb.encode(a))
            };
            return this.send(a, {
                z: d,
                i: e,
                pct: b || ""
            }, g, f)
        }
    });
    h.trim = function(a, b) {
        a = String(a).replace(/^\s+|\s+$/g, "");
        b && a.length > b && (a = a.substr(0, b));
        return a
    };
    var u = {
        _jScriptVersion: 0,
        getJScriptVersion: function() {
            u._jScriptVersion || (u._jScriptVersion = (new Function("return /*@cc_on @_jscript_version @*/;"))());
            return u._jScriptVersion
        },
        _silverlightVersion: "",
        getSilverlightVersion: function() {
            if (!u._silverlightVersion)
                if (g.ActiveXObject)
                    try {
                        var a = new ActiveXObject("AgControl.AgControl"), b = function(a, b, c, d) {
                            for (; a.isVersionSupported(b[0] + "." + b[1] + "." + b[2] + "." + b[3]);)
                                b[c] += d;
                                b[c] -= d
                            }, c = [1, 0, 0, 0];
                            b(a, c, 0, 1);
                            b(a, c, 1, 1);
                            b(a, c, 2, 1E4);
                            b(a, c, 2, 1E3);
                            b(a, c, 2, 100);
                            b(a, c, 2, 10);
                            b(a, c, 2, 1);
                            b(a, c, 3, 1);
                            u._silverlightVersion = c.join(".")
            } catch (d) {} else if (a = I.plugins["Silverlight Plug-In"])
                u._silverlightVersion = a.description;
            return u._silverlightVersion || ""
        },
        _flashVersion: 0,
        getFlashVersion: function() {
            if (!u._flashVersion) {
                var a = g.navigator;
                if ("undefined" != typeof a.plugins && "object" == typeof a.plugins["Shockwave Flash"]) {
                    var b = a.plugins["Shockwave Flash"].description;
                    b && (a = a.mimeTypes, "undefined" == typeof a ||!a["application/x-shockwave-flash"] || a["application/x-shockwave-flash"].enabledPlugin) && (u._flashVersion = b.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, "."))
                } else if ("undefined" != typeof g.ActiveXObject)
                    try {
                        if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                            var c =
                            b.GetVariable("$version");
                            c && (u._flashVersion = c.split(" ")[1].replace(/,/g, ".").replace(/[^.\d]/g, ""))
                        }
                    } catch (d) {}
            }
            return u._flashVersion
        },
        getLanguage: function() {
            return (g.navigator && (I.language || I.browserLanguage) || "").toLowerCase()
        },
        getJavaEnabled: function() {
            try {
                return I.javaEnabled()
            } catch (a) {
                return !1
            }
        }
    };
    h.fnv32a = function(a) {
        for (var b = 2166136261, c = 0, d = a.length; c < d; ++c)
            b^=a.charCodeAt(c), b += (b<<1) + (b<<4) + (b<<7) + (b<<8) + (b<<24);
        return b>>>0
    };
    u.getFingerPrint = function() {
        var a = [];
        if (I.plugins && I.plugins.length)
            for (var b =
            0; b < I.plugins.length; b++) {
                var c = I.plugins[b];
                h.mergeArrays(a, [c.name, c.version, c.description, c.filename])
            }
        if (I.mimeTypes && I.mimeTypes.length)
            for (b = 0; b < I.mimeTypes.length; b++)
                c = I.mimeTypes[b], h.mergeArrays(a, [c.type, c.description, c.suffixes]);
        return h.fnv32a(a.join(";")) + "01"
    };
    var aa = T.inherit({
        hitId: 0,
        trackHash: !1,
        trimParams: !1,
        webvisor: !1,
        counter: null,
        counterNum: 0,
        resource: "watch",
        retry: !0,
        postParams: ["site-info"],
        _initComponent: function() {
            aa.superclass._initComponent.apply(this, arguments);
            this._trackHash =
            this.trackHash
        },
        setTrackHash: function(a) {
            this._trackHash = a
        },
        sendHit: function(a, b, c, d, e) {
            this._hitExt(a, b, c, d, {
                ut: e,
                ar: !0,
                saveRef: !0
            })
        },
        sendAjaxHit: function(a, b, c, d) {
            this._hitExt(a, b, c, null, d)
        },
        sendParams: function(a) {
            this._hitExt(v().href, "", "", a, {
                ar: !0,
                pa: !0,
                onlyData: !0
            })
        },
        sendGoal: function(a, b) {
            if (!/[\/&=?#]/.test(a)) {
                var c = a ? "goal://" + v().hostname + "/" + encodeURIComponent(a): v().href, d = l.getDocumentTitle(), e = a ? v().href: f.referrer;
                this._hitExt(c, d, e, b, {
                    ar: !0
                })
            }
        },
        sendClickLink: function(a, b, c) {
            this._hitExt(a,
            b, v().href, null, c)
        },
        sendExtLink: function(a, b, c, d) {
            this._hitExt(a, "", v().href, d, {
                ar: !0,
                ln: !0,
                ut: ja
            })
        },
        sendFileUpload: function(a, b, c, d) {
            this._hitExt(a, "", v().href, d, {
                ar: !0,
                ln: !0,
                dl: !0
            })
        },
        sendNotBounce: function(a) {
            this._hitExt(v().href, "", "", null, {
                cl: a,
                ar: !0,
                nb: !0,
                onlyData: !0
            })
        },
        sendVideoAction: function(a, b, c, d) {
            this._hitExt(c, d || "", "", null, {
                ar: !0,
                va: a,
                vt: + b
            })
        },
        sendSocialClick: function(a, b, c) {
            this._hitExt(c || v().href, "", "", null, {
                ar: !0,
                sn: h.trim(a, 64),
                sa: h.trim(b, 64)
            })
        },
        _hitExt: function(a, b, c, d, e, f, k,
        l, w, r) {
            function n(a, b) {
                b && (m[a] = b)
            }
            e = e || {};
            f = f || {};
            if ("MetrikaPlayer" != g.name) {
                c = "undefined" != typeof c ? c : V;
                var m = {};
                e.ar&&!e.onlyData && (c = this._prepareHitUrl(c), a = this._prepareHitUrl(a));
                n("page-ref", h.trim(c, ka));
                n("page-url", h.trim(a, ka));
                - 1 != v().hostname.search(/(?:^|\.)(?:ya|yandex|narod|narod2)\.(?:\w+|com\.\w+)$/) ? n("ut", ja) : "undefined" != typeof e.ut && n("ut", h.trim(e.ut, Fb));
                if (d)
                    if (a = h.toJSON(d), this.trimParams && a.length > Gb)
                        var u=!0;
                else 
                    n("site-info", a);
                e.saveRef && (V = c);
                h.mixin(f, this._getTechInfo(b,
                e, this.counterId, k, l, this._trackHash, this.hitId, this.webvisor, this.counter));
                this.send(m, f, function() {
                    u && (new aa({
                        protocol: this.protocol,
                        counterType: this.counterType,
                        counterId: this.counterId,
                        hitId: this.hitId,
                        trackHash: this.trackHash,
                        webvisor: this.webvisor,
                        counterNum: this.counterNum,
                        counter: this.counter
                    })).sendParams(d);
                    w && w.apply(r, arguments)
                }, this)
            }
        },
        _prepareHitUrl: function(a) {
            var b = v(), c = b.host, b = b.href;
            if (!a)
                return b;
            if ( - 1 != a.search(/^\w+:\/\//))
                return a;
            var d = a.charAt(0);
            if ("?" == d)
                return d = b.search(/\?/),
                - 1 == d ? b + a : b.substr(0, d) + a;
            if ("#" == d)
                return d = b.search(/#/), - 1 == d ? b + a : b.substr(0, d) + a;
            if ("/" == d) {
                if (d = b.search(c), - 1 != d)
                    return b.substr(0, d + c.length) + a
            } else 
                return c = b.split("/"), c[c.length - 1] = a, c.join("/");
            return a
        },
        _getTechInfo: function(a, b, c, d, e, f, k, q, w) {
            function r(a, b) {
                a && b && (m[a] = b)
            }
            function n(a) {
                r(a, b[a] ? "1" : "")
            }
            b = b || {};
            var m = {};
            d = d || L.getTimestamp();
            e = e || L.getTimezone();
            r("j", u.getJavaEnabled() ? "1" : "");
            ba && r("s", ba.width + "x" + ba.height + "x" + (ba.colorDepth || ba.pixelDepth));
            g.devicePixelRatio &&
            r("sk", g.devicePixelRatio);
            r("f", u.getFlashVersion());
            r("l", u.getSilverlightVersion());
            r("fpr", u.getFingerPrint());
            r("cn", this.counterNum);
            if (!b.pa) {
                var v = l.getViewportSize();
                r("w", v[0] + "x" + v[1])
            }
            r("z", e);
            r("i", d);
            r("et", Math.round((new Date).getTime() / 1E3));
            r("en", l.getDocumentCharset());
            r("v", fa);
            r("c", I.cookieEnabled ? "1" : "");
            r("jv", u.getJScriptVersion());
            r("la", u.getLanguage());
            f && r("wh", "1");
            e = "ar ln dl ad nb pa".split(" ");
            for (d = 0; d < e.length; d++)
                n(e[d]);
            e = ["va", "vt", "sn", "sa", "he"];
            b.nb && e.push("cl");
            for (d = 0; d < e.length; d++)
                f = e[d], r(f, b[f]);
            c = new Z({
                counterId: c
            });
            c.isEnabled() && (d = c.getStorageId(), (e = c.get("reqNum")) ? e++ : e = 1, c.set("reqNum", e), c.get("reqNum") == e ? (r("ls", d), r("rqn", e)) : (c.remove("reqNum"), c.clearStorageId(), 1 < e && (r("ls", d), r("rqn", 0))));
            r("rn", h.random());
            r("hid", k);
            r("ds", Na(w));
            w._firstPaint || (w._firstPaint = Oa(), r("fp", w._firstPaint));
            if (q) {
                g.name || (g.name = Math.round(65535 * Math.random()));
                if (k =+ g.name)
                    0 > k && (k*=-1), k%=65535;
                r("wn", k || h.fletcher(g.name));
                try {
                    g.history && r("hl", String(g.history.length))
                } catch (A) {}
            }
            a =
            "undefined" == typeof a ? (a = l.getDocumentTitle()) ? h.trim(a, Fa) : "" : h.trim(a, Fa);
            r("t", a);
            return m
        }
    });
    h.array2Props = function(a) {
        for (var b = a.length, c = {}, d = c, e = 0; e < b - 1; e++) {
            var f = a[e];
            d[f] = {};
            e < b - 2 && (d = d[f])
        }
        d[f] = a[b - 1];
        return c
    };
    var O = E.inherit({
        sampling: 1,
        counterId: 26302566,
        _initComponent: function() {
            O.superclass._initComponent.apply(this, arguments);
            this._sender = new aa({
                counterId: this.counterId,
                retry: !1,
                counter: {}
            })
        },
        log: function() {
            this.logParams(h.array2Props(arguments))
        },
        logParams: function(a) {
            Math.random() <
            this.sampling && this._sender.sendHit(A.href, "", "", a)
        }
    });
    h.throttle = function(a, b, c, d) {
        var e, f, g;
        return function() {
            f = arguments;
            g = this;
            e || function() {
                e = null;
                f && (a.apply || (new O).log("fn no apply", typeof a, typeof a.apply, 1), a.apply(c || g, f), f = null, e = P(arguments.callee, b, d))
            }()
        }
    };
    var Ga = E.inherit({
        storage: null,
        storageKey: "dataBuffer",
        maxBufferSize: 255,
        flushTimeout: 1E4,
        active: !0,
        meta: null,
        onFlush: function() {},
        onFlushCtx: null,
        bufferExpireTime: 864E5,
        _initComponent: function() {
            Ga.superclass._initComponent.apply(this,
            arguments);
            this._data = [];
            this._packetNumber = 0;
            this._flushTID = null;
            this._saveToStorageThrottled = h.throttle(this._saveToStorage, 300, this, "DataBuffer._saveToStorage");
            if (this.storage) {
                var a = this.storage.get(this.storageKey);
                a && a.data && a.meta && a.time && a.time + this.bufferExpireTime>+new Date && this.onFlush.call(this.onFlushCtx || this, a.data, a.meta, a.pnum);
                this.clear()
            }
        },
        append: function(a, b) {
            h.mergeArrays(this._data, a);
            this._saveToStorageThrottled();
            this.active && ((b || this._data.length >= this.maxBufferSize) &&
            this._flush(), this._flushTID || (this._flushTID = h.defer(this._flush, this.flushTimeout, this, [], "DataBuffer._flush")))
        },
        activate: function() {
            this.active || (this.active=!0, this.append([]))
        },
        clear: function() {
            this._data.length = 0;
            this._flushTID = null;
            this.storage && this.storage.remove(this.storageKey)
        },
        _flush: function() {
            this.onFlush.call(this.onFlushCtx || this, this._data, this.meta, this._packetNumber);
            this._packetNumber++;
            this.clear()
        },
        _saveToStorage: function() {
            this.storage && this._data.length && this.storage.set(this.storageKey,
            {
                data: this._data,
                meta: this.meta,
                pnum: this._packetNumber,
                time: + new Date
            })
        }
    }), Hb = T.inherit({
        resource: "webvisor",
        retry: !0,
        postParams: ["wv-data"],
        sendPacket: function(a, b, c, d, e, f, k, l) {
            if (!a ||!a.length)
                return !1;
            var u = U.encode(a, !0);
            0 == u.indexOf("AAAAAAAAADw") && g.Error && "string" == typeof Error().stack && (new O({
                sampling: 0.1
            })).log("bad visor packet 5", 1);
            a = {
                rn: h.random(),
                "page-url": b,
                wmode: 0,
                "wv-type": 0,
                "wv-hit": c,
                "wv-part": d + 1,
                "wv-check": h.fletcher(a),
                "wv-data": u
            };
            return this.send(a, {
                z: e,
                i: f
            }, k, l)
        }
    }), Ab =
    Ga.inherit({
        protocol: "",
        counterId: "",
        counterType: "",
        meta: null,
        maxBufferSize: 7500,
        flushTimeout: 3E4,
        storageKey: "visorbuff",
        active: !1,
        _initComponent: function() {
            this.storage = new Z({
                counterId: this.counterId
            });
            this._sender = new Hb({
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType
            });
            Ab.superclass._initComponent.apply(this, arguments)
        },
        onFlush: function(a, b, c) {
            this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
        }
    });
    u.isIE = function() {
        return 5.8 >= u.getJScriptVersion()
    };
    var da = {
        log: function() {
            g.console && console.log && ( - 1 < A.href.indexOf("_ym_debug=1") || g._ym_debug) && console.log.apply(console, arguments)
        }
    }, Ib = T.inherit({
        resource: "clmap",
        retry: !0,
        transports: [$],
        sendClick: function(a, b, c, d) {
            this.send({
                "page-url": a,
                "pointer-click": b
            }, {}, c, d)
        }
    }), Jb = E.inherit({
        filter: null,
        ignoreTags: [],
        quota: 0,
        urlFilter: null,
        isTrackHash: !1,
        protocol: "",
        counterId: 0,
        counterType: 0,
        startTime: 0,
        MAX_LEN_PATH: 128,
        TIMEOUT_CLICK: 50,
        TIMEOUT_SAME_CLICKS: 1E3,
        DELTA_SAME_CLICKS: 2,
        tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN".split(" "),
        _initComponent: function() {
            this._lastClick = null;
            this.hasQuota=!!this.quota;
            this._quota = this.quota;
            this._ignoreTags = [];
            if (this.ignoreTags)
                for (var a = 0; a < this.ignoreTags.length; a++)
                    this.ignoreTags[a] && h.mergeArrays(this._ignoreTags, [String(this.ignoreTags[a]).toUpperCase()]);
            this._cacheTags = {};
            for (var a = 59, b = String.fromCharCode, c = 0; c < this.tags.length; c++)
                this._cacheTags[this.tags[c]] = b(a), b(a), a++;
            this._sender = new Ib({
                protocol: this.protocol,
                counterId: this.counterId,
                counterType: this.counterType
            });
            this._start =
            !1;
            this.start()
        },
        destroy: function() {
            this.stop()
        },
        start: function() {
            if (!this._start)
                k.on(f, "click", this._handler, this);
            this._start=!0
        },
        stop: function() {
            this._start && k.un(f, "click", this._handler, this);
            this._start=!1
        },
        setTrackHash: function(a) {
            this.isTrackHash = a
        },
        _handler: function(a) {
            a = {
                el: G.getTarget(a),
                pos: G.getPos(a),
                button: G.getMouseButton(a),
                time: + new Date
            };
            if (this._isTrackingClick(a)) {
                var b = l.getElementSize(a.el), c = l.getElementXY(a.el), b = ["rn", h.random(), "x", Math.floor(65535 * (a.pos[0] - c[0]) / (b[0] ||
                1)), "y", Math.floor(65535 * (a.pos[1] - c[1]) / (b[1] || 1)), "t", Math.floor((a.time - this.startTime) / 100), "p", this._getElPath(a.el)], c = v().href;
                this.isTrackHash ? h.mergeArrays(b, ["wh", "1"]) : c = c.split("#")[0];
                "function" == typeof this.urlFilter && (c = this.urlFilter(c));
                this._sender.sendClick(h.trim(c, ka), b.join(":"));
                this._lastClick = a
            }
        },
        _isTrackingClick: function(a) {
            if (g.ymDisabledClickmap || "MetrikaPlayer" == g.name)
                return !1;
            var b = a.el.tagName;
            if ((2 == a.button || 3 == a.button) && "A" != b || this.filter&&!this.filter(a.el, b))
                return !1;
            for (var c = 0; c < this._ignoreTags.length; c++)
                if (this._ignoreTags[c] == b)
                    return !1;
            for (b = a.el; b;) {
                if (l.classNameExists(b, "ym-clickmap-ignore"))
                    return !1;
                b = b.parentNode
            }
            if (this._lastClick) {
                if (a.time - this._lastClick.time < this.TIMEOUT_CLICK)
                    return !1;
                var b = Math.abs(this._lastClick.pos[0] - a.pos[0]), c = Math.abs(this._lastClick.pos[1] - a.pos[1]), d = a.time - this._lastClick.time;
                if (this._lastClick.el == a.el && b < this.DELTA_SAME_CLICKS && c < this.DELTA_SAME_CLICKS && d < this.TIMEOUT_SAME_CLICKS)
                    return !1
            }
            if (this.hasQuota) {
                if (!this._quota)
                    return !1;
                this._quota--
            }
            return !0
        },
        _getElPath: function(a) {
            for (var b = ""; a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;)
                b += this._cacheTags[a.tagName] || "*", b += l.getElementNeighborPosition(a) || "", a = a.parentNode;
            return h.trim(b, this.MAX_LEN_PATH)
        }
    }), Ha = E.inherit({
        _initComponent: function() {
            Ha.superclass._initComponent.apply(this, arguments);
            this._executedMsgs = {};
            k.on(g, "message", this.RemoteControl__onMessage, this)
        },
        RemoteControl__onMessage: function(a) {
            try {
                var b = a.origin
            } catch (c) {}
            if (b && /^https?:\/\/(.*?\.)?(metr(i(ca?|ka))?|analytics|metrika-(dev|test|ps)(\.haze)?)\.yandex\.(ru|ua|by|kz|com(\.tr)?)(:\d+)?$/.test(b)) {
                try {
                    var d =
                    (new Function("return " + a.data))()
                } catch (e) {}
                d && d.id && d.code&&!this._executedMsgs[d.id] && (this._executedMsgs[d.id]=!0, (new Function("evt", d.code))(a))
            }
        }
    }), L = {};
    h.pad = function(a) {
        return (10 > a ? "0" : "") + a
    };
    L.getTimestamp = function() {
        for (var a = new Date, a = [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()], b = "", c = 0; c < a.length; c++)
            b += h.pad(a[c]);
        return b
    };
    L.getTimezone = function() {
        return - (new Date).getTimezoneOffset()
    };
    var q = H.inherit({
        id: "script",
        request: function(a, b, c,
        d) {
            var e = "_ymjsp" + h.random(), k = f.createElement("script");
            g[e] = F(function(a) {
                try {
                    delete g[e]
                } catch (b) {
                    g[e] = M
                }
                c.call(d, !0, a);
                k.parentNode && k.parentNode.removeChild(k)
            }, "transport.script");
            k.type = "text/javascript";
            k.src = this._buildUrl(a, h.mixin({
                wmode: 5,
                callback: e
            }, b));
            a = f.getElementsByTagName("head")[0];
            a.insertBefore(k, a.firstChild);
            return !0
        }
    }), Kb = aa.inherit({
        transports: [q],
        trimParams: !0,
        sendHit: function(a, b, c, d, e, f, g, h, k, l, n) {
            var m = {};
            f && (m.vc = f);
            g && (m.pr = 1);
            this._hitExt(a, b, c, d, e, m, h, k, l, n)
        }
    }), N =
    [];
    g.Ya = g.Ya || {};
    Ya._metrika = Ya._metrika || {};
    Ya._metrika.counters = Ya._metrika.counters || {};
    Ya._metrika.hitParam = Ya._metrika.hitParam || {};
    Ya._metrika.counterNum = Ya._metrika.counterNum || 0;
    Ya._globalMetrikaHitId = h.random();
    var A = v(), Ba = L.getTimezone(), Ca = L.getTimestamp(), I = g.navigator, ba = g.screen, Y = "https:" == A.protocol ? "https:": "http:", fa = "ver604".slice(3), Fb = 64, ka = u.isIE() ? 512: 2048, Gb = u.isIE() ? 512: 2048, Fa = u.isIE() ? 100: 400, ja = "noindex", Ia = 50, Lb = 15E3, Ja = RegExp("\\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|pdf|phps|png|ppt(x|m|b)?|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|xls(x|m|b)?|xpi|g?zip)$",
    "i"), Mb =+ new Date, la, ea;
    g.Ya.Metrika = function(a, b, c, d) {
        var e = this;
        return F(function() {
            function s(x) {
                var z=!1;
                if (Ya._metrika.hitParam[D]) {
                    if (1 != c || Ya._metrika.counters[D])
                        return !1;
                    z=!0
                }
                Ya._metrika.counters[D] = e;
                Ya._metrika.hitParam[D] = 1;
                e._webvisor=!d && (B && B.webvisor || ib);
                e._directCampaign = B && B.directCampaign;
                B && B.trackHash && G(!0);
                if (!d&&!z) {
                    e.replacePhones();
                    var p = new X({
                        counterId: a
                    }), y = p.read("visorc");
                    "b" != y && "w" != y && (y = "");
                    if (!p.isEnabled() || ga("opera mini"))
                        y = "b";
                    la =+ new Date;
                    var z = new Kb({
                        protocol: Y,
                        counterType: c,
                        counterId: a,
                        trackHash: W,
                        hitId: E,
                        webvisor: e._webvisor,
                        counter: e,
                        counterNum: J
                    }), s = {
                        ut: K,
                        he: B?~~B.httpError: 0,
                        ad: 1 == c && g.Ya && g.Ya.Direct,
                        saveRef: !0
                    };
                    da.log("PageView. Counter " + a + ". URL: " + A.href + ". Referer: " + f.referrer, ". Params: ", b);
                    z.sendHit(A.href, l.getDocumentTitle(), f.referrer, b, s, y, x, Ca, Ba, function(a) {
                        ea || (ea =+ new Date);
                        a = a || {};
                        var b = a.webvisor || {};
                        if (L) {
                            var c =+ b.recp;
                            if (!isFinite(c) || 0 > c || 1 < c)
                                y = "w";
                            y || (y = E%1E4 / 1E4 < c ? "w" : "b");
                            p.create("visorc", y, 30);
                            "w" == y ? (L.start(), c = b.arch_type,
                            (b = b.urls) && c && L.uploadPages(b, c)) : L.stop()
                        }
                        b = a.mp2;
                        a = e;
                        p.erase("mp2_substs");
                        if (b) {
                            b:
                            if ((c = b.conditions) && c.length)
                                for (var d = 0; d < c.length; d++) {
                                    var x;
                                    if ("ref" == c[d].type)
                                        x = Pa(c[d]);
                                    else if (x = "adv" == c[d].type) {
                                        var l = c[d], m = Ya._metrika.counter._directCampaign, z = l.ServiceNamePattern, r = l.RefererPattern;
                                        x = m ? l.direct_orders : l.direct_camp;
                                        var s = f.referrer, n = A.search, n = n && n.replace(/^\?/, ""), u = {};
                                        if (n)
                                            for (var n = n.split("&"), t = 0; t < n.length; t++) {
                                                var q = n[t].split("=");
                                                u[S(q[0])] = S(q[1])
                                            }
                                            for (var n = Qa(A.search,
                                            A.hash), t = {}, q = ["source", "medium", "campaign", "term", "content"], w = 0; w < q.length; w++)
                                                u["utm_" + q[w]] && (t[q[w]] = u["utm_" + q[w]]);
                                                w = m ? "direct.yandex.ru" : n && n.service || t.source;
                                                q=!1;
                                                if (!q && z && z.length)
                                                    for (var v = 0; v < z.length; v++)
                                                        if (RegExp(z[v], "i").test(w)) {
                                                            q=!0;
                                                            break
                                                        }
                                                        if (!q && r && r.length)
                                                            for (z = 0; z < r.length; z++)
                                                                if (RegExp(r[z], "i").test(s)) {
                                                                    q=!0;
                                                                    break
                                                                }
                                                                !q && l.google_adwords && u.gclid && (q=!0);
                                                                !q && l.yandex_direct && u.yclid && (q=!0);
                                                                if (q && x && x.length && (q=!1, l = m || n && n.campaign || t && t.campaign))
                                                                    for (m = 0; m < x.length; m++)
                                                                        if (x[m] ==
                                                                        l) {
                                                                            q=!0;
                                                                            break
                                                                        }
                                                                        x = q
                                        }
                                        if (x) {
                                            c[d].track_id && p.create("mp2_track", c[d].track_id, 43200);
                                            break b
                                        }
                                }
                            c = p.read("mp2_track");
                            b = b.substs && b.substs[c];
                            c && b ? (p.create("mp2_substs", h.toJSON(b)), b = ra(b), a.params("__ym", b ? "mp_trackid" : "mp_trackid_bad", c)) : ta()
                        } else 
                            ta();
                        k.on(g, "load", e.replacePhones, e);
                        e._inited=!0
                    })
                }
                q();
                B && (B.enableAll ? (t(!0), r(!0), m()) : (B.clickmap && r(B.clickmap), B.trackLinks && t(B.trackLinks), B.accurateTrackBounce && m(B.accurateTrackBounce), B.ad && ad()));
                e._webvisor && (L = new Sa(Y, a, c, B, E, e))
            }
            function t(a) {
                var b =
                {
                    delay: Ia
                };
                switch (typeof a) {
                case "string":
                    b.on=!0;
                    break;
                case "object":
                    b.on=!0;
                    b.delay = "number" != typeof a.delay ? Ia : a.delay;
                    break;
                case "boolean":
                    b.on = a;
                    break;
                default:
                    return 
                }
                e._trackLinks = b
            }
            function q() {
                t(!1);
                k.on(f, "click", function(a) {
                    e._trackLinks.on && w(a)
                })
            }
            function w(a) {
                var b = Ka(a);
                if (b) {
                    var c=!1, d = "" + b.href, f = d ? d.split(/\?/)[0] : "", h = function(a) {
                        var c = jb(b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        Q.sendClickLink(d, d == c ? "" : c, a)
                    }, k = function() {
                        var c;
                        var d = b.target;
                        c=!1;
                        b.hostname ? (d && "_self" != d && "_top" !=
                        d && "_parent" != d || (c=!0), (d = a.shiftKey || a.ctrlKey || a.altKey) || a.modifiers && g.Event && (d = a.modifiers & g.Event.CONTROL_MASK || a.modifiers & g.Event.SHIFT_MASK || a.modifiers & g.Event.ALT_MASK), c = c&&!d) : c=!1;
                        return c ? e._trackLinks.delay : 0
                    };
                    if (Ja.test(f) || Ja.test(d) || pa(d, N) || pa(f, N))
                        c=!0;
                    var m = l.classNameExists(b, "ym-disable-tracklink"), f = l.classNameExists(b, "ym-external-link");
                    m || (m = {
                        ln: !0,
                        dl: c
                    }, f ? (m.delay = k(), h(m)) : La(v().hostname, b.hostname) ? c && (m.ln=!1, m.delay = k(), h(m)) : d&&-1 != d.search(/^ *(data|javascript):/i) ||
                    (m.ut = ja, m.delay = k(), h(m)))
                }
            }
            function r(b) {
                "undefined" == typeof b && (b=!0);
                !0 === b && (b = {});
                e._clickmap && e._clickmap.destroy();
                b && (e._clickmap = new Jb({
                    filter: b.filter,
                    ignoreTags: b.ignoreTags,
                    quota: b.quota,
                    urlFilter: b.urlFilter,
                    isTrackHash: b.isTrackHash,
                    protocol: M,
                    counterId: a,
                    counterType: c,
                    startTime: Mb
                }))
            }
            function n(a, b) {
                function c() {
                    if (!w) {
                        t && clearTimeout(t);
                        var d = b, e;
                        e = r ? q : q + + new Date - s;
                        d -= e;
                        0 > d && (d = 0);
                        t = P(function() {
                            w=!0;
                            l(!1);
                            a()
                        }, d, "trackUserTime")
                    }
                }
                function d() {
                    r = m = n=!0;
                    q+=+new Date - s;
                    s =+ new Date;
                    c()
                }
                function e() {
                    m || n || (q = 0);
                    s =+ new Date;
                    m = n=!0;
                    r=!1;
                    c()
                }
                function h() {
                    n || (m=!0, r=!1, n=!0, c())
                }
                function l(a) {
                    for (var b = 0; b < v.length; b += 3)
                        if (a)
                            k.on(v[b], v[b + 1], v[b + 2]);
                        else 
                            k.un(v[b], v[b + 1], v[b + 2])
                }
                var m=!1, n=!1, r=!0, q = 0, s =+ new Date, t = null, w=!1;
                if (u.isIE())
                    P(a, b, "trackUserTime");
                else {
                    var v = [g, "blur", d, g, "focus", e, f, "click", h, f, "mousemove", h, f, "keydown", h, f, "scroll", h];
                    l(!0);
                    c()
                }
            }
            function m(b) {
                "number" != typeof b && (b = Lb);
                if (!e._isAccurateTrackBounce) {
                    e._isAccurateTrackBounce=!0;
                    var c = new Z({
                        counterId: a
                    }),
                    d = c.get("lastHit");
                    c.set("lastHit", + new Date);
                    ((c = c.get("lastHit")) && (!d || d < c - 18E5) ||!Ma(f.referrer, v().href) || 0.1 > Math.random()) && n(function() {
                        e.notBounce()
                    }, b)
                }
            }
            function H(a) {
                function b() {
                    var a = v().hash.split("#")[1];
                    if ("undefined" == typeof a)
                        return !1;
                    var c = a.indexOf("?");
                    0 < c && (a = a.substring(0, c));
                    return a
                }
                var c = b();
                (function ca() {
                    var d = b();
                    d !== c && (a(), c = d);
                    U = P(ca, 200, "trackHash")
                })()
            }
            function G(a) {
                if (!1 === a)
                    W && ("onhashchange"in g ? k.un(g, "hashchange", I) : clearInterval(U), W=!1);
                else if (a = I, !W) {
                    if ("onhashchange"in
                    g)
                        k.on(g, "hashchange", a);
                    else 
                        H(a);
                    W=!0
                }
                Q.setTrackHash(W);
                e._trackHash = W
            }
            function I() {
                R = V = O;
                var a = {
                    ut: K,
                    ad: 1 == c && g.Ya && g.Ya.Direct,
                    wh: !0,
                    saveRef: !0
                };
                Q.sendAjaxHit(v().href, l.getDocumentTitle(), R, a);
                O = v().href
            }
            var E = Math.round(1073741824 * Math.random());
            Ya._metrika.counterNum++;
            var J = Ya._metrika.counterNum, D, K = "", M = Y, O = V = A.href, R = "", B;
            Ya._metrika.counter || (Ya._metrika.counter = e);
            "object" == typeof a && (B = a, d = a.defer, K = a.ut, c = a.type, b = a.params, M = a.onlyHttps ? "https:" : Y, a = a.id);
            a = a || 0;
            /^\d+$/.test(a) || (a =
            0);
            c = c || 0;
            D = a + ":" + c;
            if (Ya._metrika.counters[D])
                return Ya._metrika.counters[D];
            T.retransmit();
            var Q = new aa({
                protocol: M,
                counterType: c,
                counterId: a,
                hitId: E,
                counter: e,
                counterNum: J
            }), L;
            e.replacePhones = F(function() {
                try {
                    var b = (new X({
                        counterId: a
                    })).read("mp2_substs");
                    if (b) {
                        var c = (new Function("return " + b))();
                        c && ra(c, !0)
                    }
                } catch (d) {}
            }, "counter.replacePhones");
            e.reachGoal = F(function(b, c) {
                da.log("Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ", c);
                Q.sendGoal(b, c);
                return !0
            }, "counter.reachGoal");
            e.trackLinks =
            F(function(a) {
                t(a)
            }, "counter.trackLinks");
            e.hit = F(function(b, c, d, e, f) {
                b && (da.log("PageView. Counter " + a + ". URL: " + b + ". Referer: " + d + ". Params: ", e), Q.sendHit(b, c, d, e, f))
            }, "counter.hit");
            e.params = F(function(b) {
                b && (1 < arguments.length && (b = h.array2Props(arguments)), da.log("User params. Counter " + a + ". Params: ", b), Q.sendParams(b))
            }, "counter.params");
            e.file = F(function(a, b, c, d) {
                a && Q.sendFileUpload(a, b, c, d)
            }, "counter.file");
            e.extLink = F(function(a, b, c, d) {
                a && Q.sendExtLink(a, b, c, d)
            }, "counter.extLink");
            e.notBounce =
            F(function() {
                var a = 0;
                la && ea && (a = ea - la);
                Q.sendNotBounce(a)
            }, "counter.notBounce");
            var N = [];
            e.addFileExtension = function(a) {
                "string" == typeof a ? N.push(a) : N = N.concat(a)
            };
            e.clickmap = function(a) {
                r(a)
            };
            e.accurateTrackBounce = function(a) {
                m(a)
            };
            var U = null, W=!1;
            e.trackHash = function(a) {
                G(a)
            };
            e.video = F(function(a, b, c, d) {
                var e = ["end", "play", "pause", "seek"];
                if (a && c) {
                    a:
                    {
                        for (var f = 0, g = e.length; f < g; f += 1)
                            if (a === e[f]) {
                                e = f;
                                break a
                            }
                        e =- 1
                    }
                    - 1 !== e && Q.sendVideoAction(a, b, c, d)
                }
            }, "counter.video");
            e.social = F(function(a, b, c) {
                a &&
                b && Q.sendSocialClick(a, b, c)
            }, "counter.social");
            e.enableAll = function() {
                t(!0);
                r(!0);
                m()
            };
            e.uploadPage = function() {};
            e._performanceTiming = qa;
            if (a)
                k.onDocumentVisible(s)
        }, "init")()
    };
    if (g.performance && "function" == typeof performance.getEntries) {
        H = {
            2343947156: 1,
            1996539654: 1,
            2065498185: 1,
            823651274: 1,
            1417229093: 1,
            138396985: 1
        };
        J = performance.getEntries();
        R = {};
        $=!1;
        for (q = 0; q < J.length; q++) {
            var D = J[q], ma = D.name.replace(/^https?:\/\//, "").split("?")[0], Nb = h.fnv32a(ma);
            H[Nb]&&!R[ma] && 0 < D.connectEnd - D.connectStart &&
            ($=!0, R[ma] = {
                dns: Math.round(D.domainLookupEnd - D.domainLookupStart),
                tcp: Math.round(D.connectEnd - D.connectStart),
                duration: Math.round(D.duration),
                response: Math.round(D.responseEnd - D.requestStart),
                pages: A.href
            })
        }
        $ && (new O).logParams({
            timings6: R
        })
    }
    g.Ya._metrika.remoteCtrlInited || (g.Ya._metrika.remoteCtrlInited=!0, new Ha);
    g.Ya.Metrika.counters = function() {
        var a = [];
        h.forEachKey(g.Ya._metrika.counters, function(b, c) {
            var d = b.split(":");
            a.push({
                id: + d[0],
                type: + d[1],
                accurateTrackBounce: c._isAccurateTrackBounce,
                clickmap: c._clickmap && c._clickmap._start,
                oldCode: !!g.ya_cid,
                trackHash: !!c._trackHash,
                trackLinks: c._trackLinks && c._trackLinks.on,
                webvisor: !!c._webvisor
            })
        });
        return a
    };
    g.ya_cid && new Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class);
    g.ya_cid&&!g.ya_hit && (g.ya_hit = function(a, b) {
        Ya._metrika.counter && Ya._metrika.counter.reachGoal(a, b)
    });
    q = g.yandex_metrika_callback;
    H = g.yandex_metrika_callbacks;
    "function" == typeof q && q();
    if ("object" == typeof H)
        for (q = 0; q < H.length; q++)
            if (J = H[q])
                H[q] = null, J();
    ua("yandex_metrika_callback");
    ua("yandex_metrika_callbacks");
    H = ["link", "click", "scroll", "res"];
    for (q = 0; q < H.length; q++)
        if (J = H[q] + "map", - 1 != A.href.search("ym_playback=" + J)) {
            va(Y + "//metrika.yandex.ru/js/" + J + "/_loader.js");
            break
        }
    g.Ya.Metrika.informer = function(a) {
        var b=!!Ya.Metrika._informer;
        Ya.Metrika._informer = a;
        b || va(Y + "//mc.yandex.ru/metrika/informer.js")
    };
    (function() {
        var a = u.getJScriptVersion();
        if (!a || 5.8 < a)
            if ("complete" == f.readyState)
                wa();
            else 
                k.on(g, "load", wa)
    })();
    (function() {
        var a = function() {
            var a = f.getElementsByTagName("body")[0],
            b = f.createElement("iframe");
            b.src = "http://awaps.yandex.ru/0/2153/0.htm?ad=165746&pl=93829&rnd=" + h.random();
            b.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;visibility:hidden");
            a.appendChild(b);
            P(function() {
                b.parentNode && b.parentNode.removeChild(b)
            }, 1E4, "ad")
        }, b = function() {
            g.removeEventListener("load", b, !1);
            a()
        }, c = g.performance;
        h.random(200) || Ya._metrika.isAd || (Ya._metrika.isAd=!0, "http:" == Y && "object" == typeof c && g.addEventListener && (c.timing && c.timing.loadEventStart ?
        a() : g.addEventListener("load", b, !1)))
    })()
})(this, this.document);

