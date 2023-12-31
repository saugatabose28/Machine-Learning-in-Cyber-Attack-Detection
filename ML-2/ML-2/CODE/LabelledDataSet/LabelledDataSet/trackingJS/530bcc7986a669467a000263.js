(function(g) {
    if (g._errs && _errs.shift) {
        var u = "https:" == location.protocol, k = "http" + (u ? "s" : "") + "://p.errorception.com/projects/" + _errs.shift() + "/err", B = "<form method='post' action='" + k + "'>", l = [], v = "before", w = document.getElementsByTagName("script")[0], r = Array.prototype.slice, C = navigator.userAgent, s, m = function(a, c) {
            for (var b in a)
                a.hasOwnProperty(b) && c(b, a[b])
        }, x = function(a) {
            return function(c, b) {
                b && (a[c] = b)
            }
        }, y = function(a, c) {
            for (var b = 0, d = a.length; b < d; b++)
                c(a[b], b)
        }, z = function() {
            try {
                console.log.apply(console, arguments)
            } catch (a) {}
        }, D = function() {
            var a = document.createElement("iframe");
            a.style.display = "none";
            w.parentNode.insertBefore(a, w);
            setTimeout(function() {
                a.parentNode.removeChild(a)
            }, 1E4);
            var c = a.contentWindow || a.contentDocument;
            return c.document || c
        }, F = function(a) {
            var c = B;
            y(a, function(a, d) {
                m(a, function(e, E) {
                    if ("meta" !== e)
                        c += n(e + d, E);
                    else {
                        var h = 0;
                        m(a.meta, function(a, b) {
                            c += n("meta" + d + "name" + h, a);
                            c += n("meta" + d + "value" + h, b);
                            h++
                        })
                    }
                })
            });
            return c + "</form><script>onload=function(){setTimeout(function(){document.forms[0].submit()},10);}\x3c/script>"
        }, n = function(a, c) {
            return "<textarea name=" + a + ">" + ("" + c).replace(/</g, "&lt;") + "</textarea>"
        }, G = function(a, c) {
            var b;
            g.XMLHttpRequest && "withCredentials"in new XMLHttpRequest ? (b = new XMLHttpRequest, b.open("post", k, !0), b.setRequestHeader("Content-Type", "text/plain")) : g.XDomainRequest && (b = new XDomainRequest, b.open("POST", k));
            if (b && g.JSON)
                b.onload = function() {
                    c && 200 == b.status && parseInt(b.responseText) && c(b.responseText)
                }, b.send(JSON.stringify(a));
            else {
                var d = D();
                d.open();
                d.write(F(a));
                d.close()
            }
        }, H = function(a) {
            if (a._allow)
                return !0;
            if (_errs.allow && _errs.allow.constructor && _errs.allow.call && _errs.allow.apply) {
                var c = {};
                y(["message", "url", "line", "stack"], function(b) {
                    var d = a[b];
                    d && (c[b] = d)
                });
                try {
                    return _errs.allow(c)
                } catch (b) {
                    b._allow=!0;
                    var d = _errs.meta;
                    _errs.meta = {
                        "Original message": a.message,
                        "Original line number": a.line,
                        "Original script url": a.url,
                        "Original stack": a.stack
                    };
                    t(b);
                    _errs.meta = d
                }
            }
            return !0
        }, I = function() {
            if (_errs.meta) {
                var a;
                m(_errs.meta, function(c, b) {
                    /string|number|boolean/.test(typeof b) && (a = a || {}, a[c] = b)
                });
                return a
            }
        }, J = function() {
            for (var a = [], c; c = l.shift();) {
                a.push(c);
                if (l.length && "2" == c.method) {
                    var b = l.shift();
                    "2" != c.method || "2" === b.method||-1 == b.message.indexOf(c.message)&&-1 == c.message.indexOf(b.message) ? l.unshift(b) : !c.line && b.line && (c.line = b.line)
                }
                c.line || c.stack || a.pop()
            }
            return a
        }, t = function(a) {
            if (!p) {
                s && clearTimeout(s);
                try {
                    var c;
                    if (a) {
                        var b;
                        a.m ? b = {
                            message: a.m,
                            url: a.u,
                            line: a.l,
                            method: "0"
                        } : a.length ? (b = {
                            message: a[0],
                            url: a[1],
                            line: a[2],
                            method: "1"
                        }, m({
                            column: a[3],
                            stack: a[4] && a[4].stack ? a[4].stack: a.stacktrace || a.stack,
                            number: a.number
                        }, x(b))) : a instanceof Error && (b = {
                            message: a.name + ": " + a.message,
                            method: "2"
                        }, m({
                            url: a.fileName || a.sourceURL,
                            line: a.line || a.lineNumber,
                            column: a.columnNumber,
                            stack: a.stacktrace || a.stack,
                            number: a.number,
                            _allow: a._allow
                        }, x(b)));
                        c = b
                    } else 
                        c = void 0;
                    if (!c)
                        return;
                    c.when = v;
                    c.page = location.href;
                    if (!c.stack && a.callee && a.callee.caller && a.callee.caller.caller) {
                        var d, e = a.callee.caller;
                        a = /function\s*([\w\-$]+)?\s*\(/i;
                        b = [];
                        for (var f; e && e.arguments && 10 > b.length;)
                            f = a.test(e.toString()) ? RegExp.$1 || "{anonymous}" : "{anonymous}", b.push(f + "(" + (u ? "" : q(r.call(e.arguments || []))) + ")"), e = e.caller;
                        (d = 1 < b.length ? b.join("\n") : "") && (c.stack = d)
                    }
                    d = c;
                    var h;
                    if (h=!("Error loading script" == d.message && /Firefox/.test(C) ||!d.message || 0 == d.line || d.url && 0 === d.url.split("#")[0].indexOf(location.href.split("#")[0]) && 1 == d.line || "script error." == d.message.toLowerCase() || /originalCreateNotification/.test(d.message) || /atomicFindClose/.test(d.message) || /jid1\-ejhbjdxm9zr4tq/.test(d.url) || "miscellaneous_bindings" == d.url) && H(c)) {
                        var g;
                        g = c.stack && 1E4 < c.stack.length?!0 : !1;
                        h=!g
                    }
                    if (h) {
                        var k = I();
                        k && (c.meta = k);
                        l.push(c)
                    }
                } catch (n) {}
                s = setTimeout(K, 200)
            }
        }, p=!1, K = function() {
            if (!p)
                try {
                    var a = J();
                    a.length && (50 < a.length && (p=!0, a = a.slice(0, 50)), G(a, function(a) {
                        z("Posted " + a + " error" + (1 == a ? "" : "s") + " to errorception.com");
                        p && z("Errorception disabled due to flooding")
                    }))
            } catch (c) {}
        }, q = function(a) {
            for (var c = [], b = 0; b < a.length; ++b) {
                var d = a[b];
                void 0 === d || null === d ? c[b] = "" + d : d.constructor && (d.constructor == Array ? c[b] = 3 > d.length ? "[" + q(d) + "]" : "[" + q(r.call(d, 0, 1)) + "..." + q(r.call(d, - 1)) + "]" : d.constructor == Object ? c[b] = "#object" : d.constructor == Function ? c[b] = "#function" : d.constructor == String ? c[b] = '"' + d + '"' : d.constructor == Number && (c[b] = d))
            }
            return c.join()
        }, f;
        for (; f = _errs.shift();)
            t(f);
        v = "after";
        f = _errs.meta;
        var A = _errs.allow;
        _errs = {
            push: t
        };
        f && (_errs.meta = f);
        A && (_errs.allow = A)
    }
})(window);
