(function() {
    var b = {
        tplid: window.ADBOX_TEMPLATE_ID || 0,
        hour: 1800 * 1000,
        year: 365 * 24 * 3600 * 1000,
        version: "1.0 0",
        clickTracker: false,
        documentWidth: null,
        apiName: "",
        rcv: ["d11.sina.com.cn/a.gif"],
        ercv: [],
        _allowdomain: "adbox.sina.com.cn",
        _n: (new Date).getTime(),
        _isload: 0,
        _nssp: "cm",
        _t: ["ck", "cl", "cm", "ds", "ep", "et", "mo", "ja", "ln", "rnd", "ti", "type"]
    };
    var a = document;
    var h = a.location;
    var n = encodeURIComponent;
    var d = a.referrer;
    var k = (function() {
        var v = window.name, t = h.search.substring(1), r = 0, u, q = {}, o = [];
        v && o.push(v);
        t && o.push(t);
        v = o.join("&");
        if (v) {
            v = v.split("&");
            for (var r = 0, m = v.length; r < m; r++) {
                u = v[r];
                if (u) {
                    u = u.split("=");
                    !q[u[0]] && (q[u[0]] = []);
                    u[1] && q[u[0]].push(u[1])
                }
            }
        }
        return q
    })();
    function j(o, m) {
        return Math.floor(o + Math.random() * (m - o + 1))
    }
    function g(p, o, m) {
        o = o.replace(/^on/i, "").toLowerCase();
        if (p.attachEvent) {
            p.attachEvent("on" + o, function(q) {
                m.call(p, q)
            })
        } else {
            if (p.addEventListener) {
                p.addEventListener(o, m, false)
            }
        }
    }
    function l(m) {
        return a.getElementById(m) || null
    }
    function e() {
        this.tags = {};
        this.getTracker()
    }
    e.prototype = {
        getValue: function(p, q) {
            var o = new RegExp("(^|&|\\?)" + p + "=([^&]*)(&|\x24|#)");
            var m = q.match(o);
            return m ? m[2] : ""
        },
        getDs: function() {
            this.tags.ds = (window.screen.width + "x" + window.screen.height)
        },
        getCl: function() {
            this.tags.cl = (window.screen ? window.screen.colorDepth + "-bit" : "")
        },
        getCk: function() {
            this.tags.ck = (navigator.cookieEnabled ? "1" : "0")
        },
        getJa: function() {
            this.tags.ja = (navigator.javaEnabled() ? "1" : "0")
        },
        getLn: function() {
            var m;
            var o = navigator;
            if (o.systemLanguage) {
                m = o.systemLanguage
            } else {
                if (o.browserLanguage) {
                    m = o.browserLanguage
                } else {
                    if (o.language) {
                        m = o.language
                    } else {
                        if (o.userLanguage) {
                            m = o.userLanguage
                        } else {
                            m = "-"
                        }
                    }
                }
            }
            this.tags.ln = m.toLowerCase()
        },
        getTi: function() {
            this.tags.ti = this.tplid
        },
        getRnd: function() {
            var m = Math.round(Math.random() * 2147483647);
            this.tags.rnd = m
        },
        getRCV: function() {
            return this.rcv[j(0, this.rcv.length - 1)]
        },
        JTQ: function(o) {
            var u = [];
            var r = b._t;
            for (var t = 0, w = r.length; t < w; t++) {
                var q = r[t], p, m = o[q];
                p = m ? q + "=" + n(m) : q + "=";
                u.push(p)
            }
            return u.join("&")
        },
        getPar: function() {
            this.getTi();
            this.getLn();
            this.getJa();
            this.getCk();
            this.getCl();
            this.getDs();
            this.tags.et = "0";
            this.tags.ep = "";
            this.tags.type = "adbox"
        },
        protocol: function() {
            return (h.protocol == "https:" ? "https://" : "http://")
        },
        init: function() {
            try {
                this.getPar();
                this.adDocEvt()
            } catch (m) {}
        },
        adDocEvt: function() {
            if (this.clickTracker) {
                g(a, "mouseup", this.getPos())
            }
            g(a, "click", this.evHandle())
        },
        getMoCnt: function(o, m) {
            var m = "";
            switch (o.tagName.toLowerCase()) {
            case"a":
                m = o.href;
                break;
            case"input":
                m = o.value;
                break;
            default:
                break
            }
            return m
        },
        evHandle: function() {
            var m = this;
            return function(t) {
                var t = t || window.event;
                var r = m._getPos(t);
                var x = t.srcElement || t.target;
                var q = x;
                while (q && q != a && q != a.body) {
                    var o = q.getAttribute("mo"), p = q.getAttribute("moc"), u = q.getAttribute("data-mou");
                    if (o) {
                        m.tags.ep = r.x + "x" + r.y;
                        m.tags.mo = "{el:" + o + ",et:" + t.type + ",cnt:" + (p || m.getMoCnt(q) || "''") + "}";
                        m.tags.moel = o;
                        m.tags.moet = t.type;
                        m.tags.mocnt = p || m.getMoCnt(q) || "";
                        m.postData();
                        u && m.postExtData(decodeURIComponent(u))
                    }
                    if (q.nodeName.toLowerCase() !== "a") {
                        m.postClickTagData()
                    }
                    q = q.parentNode
                }
            }
        },
        ie: function() {
            var m = /msie (\d+\.\d)/i.test(navigator.userAgent);
            return m
        },
        _getPos: function(s) {
            var s = s || window.event;
            var v, t, r, q, m, o;
            m = Math.max(a.documentElement.scrollTop, a.body.scrollTop);
            o = Math.max(a.documentElement.scrollLeft, a.body.scrollLeft);
            if (this.ie()) {
                v = s.clientX + o;
                t = s.clientY + m
            } else {
                v = s.pageX;
                t = s.pageY
            }
            if (this.documentWidth) {
                var w = Math.max(a.documentElement.clientWidth, a.body.clientWidth);
                r = (w - me.documentWidth) / 2;
                q = 0
            } else {
                r = 0;
                q = 0
            }
            function p(y, x) {
                return {
                    x: y - r,
                    y: x - q
                }
            }
            var u = p(v, t);
            v = Math.round(u.x / 10) * 10;
            t = Math.round(u.y / 10) * 10;
            return {
                x: v,
                y: t
            }
        },
        getPos: function() {
            var m = this;
            return function(o) {
                var p = m._getPos(o);
                m.tags.et = "2";
                m.tags.ep = p.x + "x" + p.y;
                m.postData()
            }
        },
        postData: function(t) {
            var s, r = this;
            if (!this.tags.ti) {
                return 
            }
            this.getRnd();
            s = this.JTQ(this.tags);
            var q = new Image(1, 1);
            q.src = this.protocol() + this.getRCV() + "?" + s;
            if (!t && k.api_exu && k.api_exu.length > 0) {
                for (var o = 0, m = k.api_exu.length; o < m; o++) {
                    var p = decodeURIComponent(k.api_exu[o]);
                    p = p.replace(/\{__([0-9a-zA-Z]+)__\}/g, function(v, u) {
                        return r.tags[u] || ""
                    });
                    q = new Image(1, 1);
                    q.src = this.protocol() + p.replace(/^(http|https)\:\/\//, "")
                }
            }
        },
        postClickTagData: function() {
            if (k.clickTAG) {
                var q = sa.EX_PAR.clickTAG;
                q = q.join("|").split("|");
                for (var o = 0, m = q.length; o < m; o++) {
                    var p = decodeURIComponent(q[o]);
                    i = new Image(1, 1);
                    i.src = this.protocol() + p.replace(/^(http|https)\:\/\//, "")
                }
                return 
            }
        },
        postExtData: function(m) {
            var o = this, m = decodeURIComponent(m);
            m = m.replace(/\{__([0-9a-zA-Z]+)__\}/g, function(q, p) {
                return o.tags[p] || ""
            });
            i = new Image(1, 1);
            i.src = this.protocol() + m.replace(/^(http|https)\:\/\//, "")
        },
        getTracker: function() {
            for (var m in b) {
                if (m.indexOf("_") != 0) {
                    this[m] = b[m]
                }
            }
            if (b.apiName == "") {
                this.init()
            }
        }
    };
    var c = new e();
    if (b.apiName != "") {
        window[b.apiName] = e
    }
    var f = "function" === typeof window.adplayerStatus ? window.adplayerStatus: null;
    window.adplayerStatus = function(m) {
        f && f(m);
        c.tags.mo = "{el:video-" + m + ",et:" + m + ",cnt:}";
        c.tags.moel = "video-" + m;
        c.tags.moet = m;
        c.tags.mocnt = "";
        c.postData(1)
    }
})();
