/*! scripts/vendor/cedexis/cedexis.radar.min.js */
/*! version: 0.0.6 */
var cdx, cdxs, cdxu;
function cdxc() {
    this.reqs = {}
}
function cdxr(b) {
    this.e = [];
    this.h = 0;
    this.i = 0;
    this.z = b.z;
    this.c = b.c;
    this.del = b.del;
    this.tid = cdxc.j()
}
cdxc.a = function() {
    if ("undefined" !== typeof cedexis) {
        if (undefined !== cedexis.radar) {
            return true === cedexis.radar.unit_testing
        }
    }
    return false
};
cdxc.prototype.b = function(b) {
    this.reqs[b.z + "-" + b.c] = b
};
cdxc.c = function() {
    return false
};
cdxc.d = function(b) {
    return b.split(".").slice( - 2).join("")
};
cdxc.prototype.f = function(d) {
    var c;
    if (d.c && d.d) {
        c = this.reqs[d.c + "-" + d.d];
        if (c && c.f) {
            c.f(d)
        }
    }
};
cdxc.i = function(c, d) {
    return Math.floor(Math.random() * (d - c + 1)) + c
};
cdxc.j = function() {
    return cdxc.i(1, 999999999)
};
cdxc.k = function(d) {
    var f = [/opera mini/i, /skyfire/i, /teashark/i, /uzard/i], e;
    for (e = 0; e < f.length; e++) {
        if (f[e].test(d)) {
            return true
        }
    }
    return false
};
cdxc.l = function(g) {
    var i = {
        keynote: /keynote/i,
        gomez: /gomez/i,
        catchpoint: /catchpoint/i,
        pingdom: /pingdom/i,
        ip_label: /ip-label/,
        witbe: /witbe-/i
    }, h = [], f, j;
    if ("undefined" !== typeof cedexis) {
        if (undefined !== cedexis.radar) {
            if (undefined !== cedexis.radar.allowed_monitoring_agents) {
                h = cedexis.radar.allowed_monitoring_agents
            }
        }
    }
    f = function(a) {
        var c, b;
        for (c = 0; c < h.length; c++) {
            b = h[c].toLowerCase();
            if (b === a) {
                return true
            }
        }
        return false
    };
    for (j in i) {
        if (i.hasOwnProperty(j)) {
            if (i[j].test(g)) {
                if (!f(j)) {
                    return true
                }
            }
        }
    }
    return false
};
cdxr.prototype.d0 = function() {
    var b = this;
    return function() {
        var a = b.j() - b.b;
        if (undefined === cdx.s) {
            if (60000 > a) {
                b.d()
            }
        } else {
            cdx.s.d(b)
        }
    }
};
cdxr.prototype.d = function() {
    var b = this;
    if (!b.b) {
        b.b = this.j()
    }
    setTimeout(b.d0(), 1000)
};
cdxr.prototype.f = function(b) {
    this.a = b.a;
    this.g = b.e;
    cdx.s.e(b.c + "-" + b.d)
};
cdxr.prototype.j = function() {
    return (new Date()).getTime()
};
if (!cdxc.a()&&!cdxc.k(navigator.userAgent)&&!cdxc.l(navigator.userAgent)) {
    (function() {
        var f, j = parseInt("1", 10), h = parseInt("13960", 10), i = parseInt("2000", 10), g;
        f = new cdxr({
            z: j,
            c: h,
            del: i
        });
        g = f.z + "-" + f.c;
        if ("undefined" === typeof cdx) {
            cdx = new cdxc();
            if (undefined !== cdx.reqs[g]) {
                return 
            }
            cdx.b(f)
        } else {
            cdx.b(f)
        }
        f.d()
    }())
}
if (undefined === window.cedexis) {
    window.cedexis = {}
}
if (undefined === cedexis.radar) {
    cedexis.radar = {}
}
cedexis.radar.btt = function(f, d) {
    if (!cdxc.a() && cdxc.c()) {
        if (!cedexis.radar.btt_done) {
            var e = d.createElement("script");
            cedexis.radar.btt_done = true;
            if (undefined !== e.setAttribute) {
                e.setAttribute("async", "async")
            }
            e.type = "text/javascript";
            e.src = "//" + cdxc.d(f.location.hostname) + ".btttag.com/btt.js";
            d.body.appendChild(e)
        }
    }
};
cedexis.radar.btt(window, document);
/*! version: 0.0.34 */
/*! base64 encoding based on code from http://www.webtoolkit.info/ */
(function(d) {
    function c() {
        this.b0 = 6000;
        this.b1 = 6000;
        this.f = [];
        this.g = null;
        this.k2 = this.k1()
    }
    d.cdxs = c;
    c.prototype.A = function(m, a, b) {
        var i = document, p = i.createElement("script"), o = "//tumblrreports.cedexis.com/", l = "0", n;
        if (!this.g) {
            return 
        }
        l = this.g.node_id || "0";
        b = b || [];
        if (("0" === l)&&!this.k2) {
            l = "1"
        }
        if ("function" === typeof a) {
            if (undefined !== p.onload) {
                p.onload = function() {
                    a()
                }
            } else {
                if (undefined !== p.onreadystatechange) {
                    p.onreadystatechange = (function() {
                        var e = false;
                        return function() {
                            if (!e) {
                                if (("loaded" === this.readyState) || ("complete" === this.readyState)) {
                                    e = true;
                                    a()
                                }
                            }
                        }
                    }())
                }
            }
        }
        if (("f1" === m[0]) || ("f2" === m[0])) {
            m.push(l)
        }
        if (("f1" === m[0]) || ("f2" === m[0]) || ("n1" === m[0])) {
            m.push(this.m())
        }
        for (n = 0; n < b.length; n += 1) {
            if (b[n]) {
                m.push(b[n])
            }
        }
        o += m.join("/");
        p.type = "text/javascript";
        if (undefined !== p.setAttribute) {
            p.setAttribute("async", "async")
        }
        p.src = o;
        this.a5().appendChild(p)
    };
    c.prototype.a = function(a) {
        var b;
        function f() {
            var e, j, i = [];
            if (a.p.p) {
                for (e = 0; e < a.p.p.length; e++) {
                    j = a.p.p[e];
                    if ("uni" === j.a) {
                        i.unshift(j)
                    } else {
                        i.push(j)
                    }
                }
                a.p.p = i
            }
        }
        if (null === a) {
            return 
        }
        b = cdx.reqs[a.r.z + "-" + a.r.c];
        b.e.push(a.p.i);
        f();
        this.f.push(a);
        this.h()
    };
    c.prototype.b = function(a) {
        var b = cdx.s.g;
        if (a.id === b.p.i) {
            b.node_id = a.node;
            this.a12()
        }
    };
    c.prototype.b2 = function(a) {
        var b, h, g;
        g = cdx.reqs[a.r.z + "-" + a.r.c];
        b = a.m.responseEnd - a.m.domainLookupStart;
        if (this.b0 < b) {
            return null
        }
        h = ["f1", g.a, a.p.z, a.p.c, a.p.i, a.m.probe_id, 0, b];
        return h
    };
    c.prototype.c = function(b, f) {
        var a;
        a = (undefined === b.p.sub) ? b.p : b.p.sub;
        f.push(a.z);
        f.push(a.c);
        f.push(a.i)
    };
    c.prototype.c00 = function() {
        var a = this;
        return function(b) {
            a.c01(b)
        }
    };
    c.prototype.c01 = function(u) {
        var a, q = this.g, e = this.a0(), b, t, v, p = function(f) {
            return parseInt(f, 10)
        }, r, s;
        if (!q ||!e) {
            return 
        }
        try {
            a = JSON.parse(u.data)
        } catch (o) {
            return 
        }
        if (undefined === a.source) {
            if (p(a.m) !== e.t) {
                return 
            }
        }
        if ((p(a.p.z) !== q.p.z) || (p(a.p.c) !== q.p.c) || (p(a.p.i) !== q.p.i) || (p(a.r.z) !== q.r.z) || (p(a.r.c) !== q.r.c)) {
            return 
        }
        this.l(e.d);
        switch (a.s) {
        case"l":
            e.b = "loaded";
            return;
        case"e":
            e.b = "error";
            this.a12();
            return 
        }
        if (a.s !== "s") {
            return 
        }
        if (e.c) {
            return 
        }
        if (undefined === a.source) {
            s = 0;
            if (undefined !== e.s) {
                s = e.s
            }
            s*=8;
            r = cdx.reqs[a.r.z + "-" + a.r.c];
            b = [];
            b.push("f2");
            b.push(a.m);
            this.c(q, b);
            b.push(s);
            if (this.c03(a)) {
                b.push(0);
                if (this.c02(a)) {
                    for (t = 0; t < c.o.length; t++) {
                        v = a[c.o[t]];
                        b.push((undefined === v) ? 0 : v)
                    }
                    b.push(r.a);
                    b.push(a.h);
                    this.A(b, function() {
                        cdx.s.a12()
                    })
                } else {
                    this.a12()
                }
            } else {
                b.push(1);
                for (t = 0; t < c.o.length; t++) {
                    b.push(0)
                }
                b.push(r.a);
                b.push(a.h);
                this.A(b, function() {
                    cdx.s.a01()
                })
            }
        } else {
            if ("uni" === a.source) {
                q.node_id = a.node_id;
                this.a12()
            } else {
                if ("dsa" === a.source) {
                    b = this.b2(a);
                    if (b) {
                        this.A(b, (function(f) {
                            return function() {
                                f.a12()
                            }
                        }(this)), [a.m.ciphertext])
                    } else {
                        this.i4(e, 1)
                    }
                }
            }
        }
    };
    c.prototype.c02 = function(a) {
        if (!a) {
            return false
        }
        if (a.connectEnd < a.connectStart) {
            return false
        }
        if (a.responseStart < a.requestStart) {
            return false
        }
        if ((a.m === "14") && (a.responseEnd <= a.responseStart)) {
            return false
        }
        return true
    };
    c.prototype.c03 = function(b) {
        var a = this.b0;
        if ("14" === b.m) {
            a = this.b1
        }
        if (a < (b.responseEnd - b.fetchStart)) {
            return false
        }
        return true
    };
    c.prototype.e = function(a) {
        cdx.s.j(a)
    };
    c.prototype.h = function() {
        if (this.g === null) {
            if (0 < this.f.length) {
                this.g = this.f.pop();
                this.a12()
            }
        }
    };
    c.prototype.a0 = function() {
        var a;
        if (this.g) {
            a = this.g;
            if ("number" === typeof a.p.d) {
                if (a.p.d < a.p.p.length) {
                    return a.p.p[a.p.d]
                }
            }
        }
        return null
    };
    c.prototype.a01 = function() {
        var a = this.g;
        this.g = null;
        this.h();
        if (a) {
            this.j(a.r.z + "-" + a.r.c)
        }
    };
    c.prototype.a03 = function() {
        var a = d.performance, k, i = this.g, m = cdx.reqs[i.r.z + "-" + i.r.c], l, n, b;
        b = function(e) {
            if (undefined === e) {
                return 0
            }
            return e
        };
        l = [];
        l.push("n1");
        if (undefined !== a) {
            if (a.timing) {
                k = a.timing
            }
        }
        if (k) {
            l.push(0);
            for (n = 0; n < c.o.length; n++) {
                l.push(b(k[c.o[n]]))
            }
        } else {
            l.push(1);
            for (n = 0; n < 21; n++) {
                l.push(0)
            }
        }
        l.push(m.a);
        if (this.a03c(k)) {
            this.A(l, (function(e) {
                return function() {
                    e.a01()
                }
            }(this)))
        } else {
            this.a01()
        }
    };
    c.prototype.a03c = function(a) {
        if (!a) {
            return false
        }
        if (a.connectEnd < a.connectStart) {
            return false
        }
        if (a.domainLookupEnd < a.domainLookupStart) {
            return false
        }
        if (a.domComplete < a.domLoading) {
            return false
        }
        if (a.fetchStart < a.navigationStart) {
            return false
        }
        if (a.loadEventEnd < a.loadEventStart) {
            return false
        }
        if (a.loadEventEnd < a.navigationStart) {
            return false
        }
        if (a.responseEnd < a.responseStart) {
            return false
        }
        if (a.responseStart < a.requestStart) {
            return false
        }
        return true
    };
    c.prototype.a1 = function(q) {
        var a = document, b = this.g, p = a.createElement("iframe"), r, m = this.g, n = cdx.reqs[m.r.z + "-" + m.r.c], l = this.b0, o = n.a;
        if (false === m.p.b) {
            o = "none"
        }
        q.b = "loading";
        q.c = false;
        if (c.a(c.p, q.t)) {
            if ((0 === m.p.z) && (0 === m.p.c)) {
                n.h++
            } else {
                n.i++
            }
            l = this.b1
        }
        r = q.u + "?rnd=" + q.t + "-" + b.p.z + "-" + b.p.c + "-" + b.r.z + "-" + b.r.c + "-" + b.p.i + "-bAz2aJxxPeO7-72-" + o;
        p.src = r;
        p.style.display = "none";
        q.d = this.sto(this.a20(q), l);
        this.a5().appendChild(p);
        this.d3()
    };
    c.prototype.a12 = function() {
        var b = cdx.s.g, a;
        if (!b) {
            this.a01()
        } else {
            if ("pageload" === b.a) {
                this.a03()
            } else {
                if ("probe" === b.a) {
                    if (undefined === b.p.d) {
                        b.p.d = 0
                    } else {
                        b.p.d++
                    }
                    a = this.a0();
                    if (a) {
                        if ("v1" === a.a) {
                            this.d01(a)
                        } else {
                            if ("v2" === a.a) {
                                this.a1(a)
                            } else {
                                if ("custom-page" === a.a) {
                                    this.a30(a)
                                } else {
                                    if ("custom-js" === a.a) {
                                        this.a31(a)
                                    } else {
                                        if ("custom-img" === a.a) {
                                            this.a36(a)
                                        } else {
                                            if ("uni" === a.a) {
                                                if ("jsonp" === a.v) {
                                                    this.a34(a)
                                                } else {
                                                    if (("ajax" === a.v) && this.k2) {
                                                        this.a33(a)
                                                    } else {
                                                        this.a12()
                                                    }
                                                }
                                            } else {
                                                if ("dsa" === a.a) {
                                                    this.a35(a)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.a01()
                    }
                }
            }
        }
    };
    c.prototype.a20 = function(a) {
        var b = this;
        return function() {
            b.a21(a)
        }
    };
    c.prototype.a21 = function(b) {
        var a = this.a0();
        if (a === b) {
            b.b = "timeout";
            b.c = true;
            this.i5(b)
        }
    };
    c.prototype.a22 = function(a) {
        var b = this;
        return function() {
            b.a23(a)
        }
    };
    c.prototype.a23 = function(b) {
        var a = this.a0();
        if (a === b) {
            b.b = "timeout";
            b.c = true;
            this.g.node_id = "2";
            this.a12()
        }
    };
    c.prototype.a30 = function(k) {
        var b = document, a = b.createElement("iframe"), n = this.g, l = cdx.reqs[n.r.z + "-" + n.r.c], j = this.d2(k.t), m = k.u;
        if (false !== n.p.b) {
            if (0 > m.indexOf("?", 0)) {
                m += "?rnd=" + j
            } else {
                m += "&rnd=" + j
            }
        }
        a.src = m;
        a.style.display = "none";
        k.b = "loading";
        k.c = false;
        a.onload = this.a40(l, n, k);
        k.d = this.sto(this.a41(l, n, k), this.b0);
        k.e = this.i1();
        this.a5().appendChild(a);
        this.d3()
    };
    c.prototype.a31 = function(j) {
        var a = document, m = a.createElement("script"), n = this.g, k = cdx.reqs[n.r.z + "-" + n.r.c], b = this.d2(j.t), l = j.u;
        if (false !== n.p.b) {
            if (0 > l.indexOf("?", 0)) {
                l += "?rnd=" + b
            } else {
                l += "&rnd=" + b
            }
        }
        m.src = l;
        m.onload = this.a40(k, n, j);
        j.d = this.sto(this.a41(k, n, j), this.b0);
        j.e = this.i1();
        this.a5().appendChild(m)
    };
    c.prototype.a33 = function(i) {
        var b = document, a = b.createElement("iframe"), l = this.g, j = cdx.reqs[l.r.z + "-" + l.r.c], k;
        i.b = "loading";
        i.c = false;
        k = i.u + "?rnd=" + l.r.z + "-" + l.r.c + "-" + l.p.z + "-" + l.p.c + "-" + l.p.i + "-" + this.d4(8) + "-" + j.a;
        a.src = k;
        a.style.display = "none";
        i.d = this.sto(this.a22(i), this.b0);
        this.a5().appendChild(a);
        this.d3()
    };
    c.prototype.a34 = function(b) {
        var a = document, h = a.createElement("script"), g = b.u;
        b.b = "loading";
        b.c = false;
        if (undefined !== h.onload) {
            h.onload = (function(e) {
                return function() {
                    var f = e.a0();
                    if (b === f) {
                        clearTimeout(b.d)
                    }
                }
            }(this))
        } else {
            if (undefined !== h.onreadystatechange) {
                h.onreadystatechange = (function(e) {
                    var f = false;
                    return function() {
                        var j;
                        if (!f) {
                            if (("loaded" === this.readyState) || ("complete" === this.readyState)) {
                                f = true;
                                j = e.a0();
                                if (b === j) {
                                    clearTimeout(b.d)
                                }
                            }
                        }
                    }
                }(this))
            }
        }
        if (0 > g.indexOf("?", 0)) {
            g += "?rnd="
        } else {
            g += "&rnd="
        }
        g += this.d2("uni");
        h.src = g;
        b.d = this.sto(this.a22(b), this.b0);
        this.a5().appendChild(h)
    };
    c.prototype.a35 = function(j) {
        var b = document, a = b.createElement("iframe"), l = this.g, i = this.d2(j.t), k = j.u;
        if (l.p.b) {
            if (0 > k.indexOf("?", 0)) {
                k += "?rnd=" + i
            } else {
                k += "&rnd=" + i
            }
        }
        a.onload = (function() {
            return function() {
                j.b = "loaded"
            }
        }(this));
        a.src = k;
        a.style.display = "none";
        j.b = "loading";
        j.c = false;
        j.d = this.sto((function(e) {
            return function() {
                var f = e.a0(), g = 1;
                if (j === f) {
                    if ("loaded" === j.b) {
                        g = 4
                    }
                    j.b = "timeout";
                    j.c = true;
                    e.i4(f, g)
                }
            }
        }(this)), this.b0);
        this.a5().appendChild(a);
        (function() {
            var e = document.createElement("iframe"), f = document.body;
            e.style.display = "none";
            f.appendChild(e);
            f.removeChild(e)
        }())
    };
    c.prototype.a36 = function(j) {
        var m = new Image(), n = this.g, k = cdx.reqs[n.r.z + "-" + n.r.c], a = this.d2(j.t), l = j.u, b = this.b0;
        m.onload = (function(e) {
            return function() {
                function f() {
                    e.a12()
                }
                function s() {
                    e.a01()
                }
                var g, t, u, v, i, h;
                e.l(j.d);
                if (j.c) {
                    return 
                }
                g = d.performance.getEntriesByType("resource");
                i = [];
                h = c.a(c.p, j.t);
                for (t = 0; t < g.length; t += 1) {
                    u = g[t];
                    if (u.name === this.src) {
                        cedexis.radar.log(u);
                        if (0 < u.requestStart) {
                            if (h) {
                                v = Math.round(u.responseEnd - u.requestStart)
                            } else {
                                v = Math.round(u.responseStart - u.requestStart)
                            }
                        } else {
                            v = Math.round(u.duration)
                        }
                        i.push("f1");
                        i.push(k.a);
                        e.c(n, i);
                        i.push(j.t);
                        if (h && (e.b1 > v)) {
                            i.push(0, e.i2(v, j.s))
                        } else {
                            if (!h && (e.b0 > v)) {
                                i.push(0, v)
                            } else {
                                j.b = "timeout";
                                j.c = true;
                                i.push(1, 0);
                                e.A(i, s);
                                return 
                            }
                        }
                        e.A(i, f);
                        return 
                    }
                }
            }
        }(this));
        m.onerror = (function(e) {
            return function() {
                var f;
                if (j.c) {
                    return 
                }
                f = [];
                f.push("f1");
                f.push(k.a);
                e.c(n, f);
                f.push(j.t);
                f.push(4, 0);
                e.A(f, function() {
                    e.a01()
                })
            }
        }(this));
        if (false !== n.p.b) {
            if (0 > l.indexOf("?", 0)) {
                l += "?rnd=" + a
            } else {
                l += "&rnd=" + a
            }
        }
        if (c.a(c.p, j.t)) {
            b = this.b1
        }
        j.b = "loading";
        j.c = false;
        j.d = this.sto(this.a41(k, n, j), b);
        m.src = l
    };
    c.prototype.a40 = function(h, a, b) {
        var g = this;
        return function() {
            var f, e;
            g.l(b.d);
            if (a === g.g) {
                f = g.i1() - b.e;
                e = [];
                e.push("f1");
                e.push(h.a);
                g.c(a, e);
                e.push(b.t);
                e.push(0);
                if (c.a(c.p, b.t)) {
                    e.push(g.i2(f, b.s))
                } else {
                    e.push(f)
                }
                g.A(e, function() {
                    cdx.s.a12()
                })
            }
        }
    };
    c.prototype.a41 = function(h, a, b) {
        var g = this;
        return function() {
            var e;
            if (a !== cdx.s.g) {
                return 
            }
            if (b.c) {
                return 
            }
            b.b = "timeout";
            b.c = true;
            e = [];
            e.push("f1");
            e.push(h.a);
            g.c(a, e);
            e.push(b.t);
            e.push(1);
            e.push(0);
            g.A(e, function() {
                cdx.s.a01()
            })
        }
    };
    c.prototype.a5 = function() {
        var a = document, b = a.getElementById("cdx");
        if (b) {
            return b
        }
        b = a.createElement("div");
        b.id = "cdx";
        a.body.appendChild(b);
        return b
    };
    c.prototype.al = function(r, b) {
        var q, o, a = [], m = this.g, n, p, l = cedexis.radar.stopped_at || radar.stoppedAt || null;
        o = cdx.reqs[m.r.z + "-" + m.r.c];
        a.push("f1");
        a.push(o.a);
        this.c(m, a);
        a.push(r.t);
        if (!r.c && l) {
            q = l.getTime() - r.e;
            n = this.b0;
            p = q;
            if (c.a(c.p, r.t)) {
                n = this.b1;
                p = this.i2(q, r.s)
            }
            if (q <= n) {
                a.push(0);
                a.push(p)
            } else {
                a.push(1);
                a.push(0);
                this.A(a, function() {
                    cdx.s.a01()
                });
                return 
            }
        } else {
            if (undefined === b) {
                a.push(1)
            } else {
                a.push(b)
            }
            a.push(0);
            this.A(a, function() {
                cdx.s.a01()
            });
            return 
        }
        this.A(a, function() {
            cdx.s.a12()
        })
    };
    c.prototype.d = function(l) {
        var a = document, o = a.createElement("script"), b = "14-3", m = (location.protocol === "https:") ? "s": "i", p, n, k = this.i0();
        p = "i1-js-" + b + "-" + this.i3(l.z.toString(10), "0", 2) + "-" + this.i3(l.c.toString(10), "0", 5) + "-" + l.tid + "-" + m;
        n = "//" + p + ".init.cedexis-radar.net/i1/" + k + "/" + l.tid + "/jsonp?seed=" + p;
        o.type = "text/javascript";
        if (undefined !== o.setAttribute) {
            o.setAttribute("async", "async")
        }
        o.src = n;
        this.a5().appendChild(o)
    };
    c.prototype.d2 = function(a) {
        var f = this.g, b = cdx.reqs[f.r.z + "-" + f.r.c];
        return a + "-" + f.r.z + "-" + f.r.c + "-" + f.p.z + "-" + f.p.c + "-" + f.p.i + "-" + b.tid + "-" + b.a
    };
    c.prototype.d3 = (function() {
        var a = document.createElement("iframe");
        a.style.display = "none";
        return function() {
            var b = document.body;
            b.appendChild(a);
            b.removeChild(a)
        }
    }());
    c.prototype.d4 = function(g) {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", b, h = [];
        for (b = 0; b < g; b++) {
            h.push(a.charAt(this.e01(0, a.length - 1)))
        }
        return h.join("")
    };
    c.prototype.d01 = function(l) {
        var a = document, o = a.createElement("script"), n, p = this.g, m = cdx.reqs[p.r.z + "-" + p.r.c], b = this.b0, k = this.d2(l.t);
        n = l.u;
        if (c.a(c.p, l.t)) {
            if ((0 === p.p.z) && (0 === p.p.c)) {
                m.h++
            } else {
                m.i++
            }
            b = this.b1
        }
        if (false !== p.p.b) {
            if (0 > n.indexOf("?", 0)) {
                n += "?rnd=" + k
            } else {
                n += "&rnd=" + k
            }
        }
        o.src = n;
        o.type = "text/javascript";
        if (undefined !== o.onreadystatechange) {
            o.onreadystatechange = this.d04(l)
        } else {
            o.onload = this.d02(l)
        }
        o.onerror = this.d05(l);
        l.c = false;
        l.d = this.sto(this.d03(l), b);
        l.e = this.i1();
        radar.stoppedAt = null;
        cedexis.radar.stopped_at = null;
        this.a5().appendChild(o)
    };
    c.prototype.d02 = function(a) {
        var b = this;
        return function() {
            var f = b.a0();
            if (a === f) {
                clearTimeout(a.d);
                b.al(a)
            }
        }
    };
    c.prototype.d03 = function(a) {
        var b = this;
        return function() {
            a.c = true;
            b.al(a)
        }
    };
    c.prototype.d04 = function(a) {
        var f = false, b = this;
        return function() {
            var e;
            if (!f) {
                if (("loaded" === this.readyState) || ("complete" === this.readyState)) {
                    f = true;
                    e = b.a0();
                    if (a === e) {
                        if (!a.c) {
                            clearTimeout(a.d);
                            b.al(a)
                        }
                    }
                }
            }
        }
    };
    c.prototype.d05 = function(a) {
        var b = this;
        return function() {
            var f = b.a0();
            if (a === f) {
                a.c = true;
                clearTimeout(a.d);
                b.al(a, 4)
            }
        }
    };
    c.prototype.e01 = function(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a
    };
    c.prototype.i0 = function() {
        return String(Math.round(this.i1() / 1000))
    };
    c.prototype.i1 = function() {
        return (new Date()).getTime()
    };
    c.prototype.i2 = function(a, b) {
        return Math.floor(8 * 1000 * b / a)
    };
    c.prototype.i3 = function(g, a, b) {
        var h = g;
        while (b > h.length) {
            h = a + h
        }
        return h
    };
    c.prototype.i4 = function(b, a) {
        var h, j = this.g, i = cdx.reqs[j.r.z + "-" + j.r.c];
        h = ["f1", i.a, j.p.z, j.p.c, j.p.i, b.t, a, 0];
        this.A(h, (function(e) {
            return function() {
                e.a01()
            }
        }(this)))
    };
    c.prototype.i5 = function(a) {
        var b = [], i, k, l = this.g, j = cdx.reqs[l.r.z + "-" + l.r.c];
        b.push("f2");
        b.push(a.t);
        this.c(l, b);
        b.push(0);
        b.push(1);
        for (i = 0; i < 21; i++) {
            k = 0;
            b.push(k)
        }
        b.push(j.a);
        b.push(0);
        this.A(b, function() {
            cdx.s.a01()
        })
    };
    c.prototype.j = function(j) {
        var b = d, i = document, k = cdx.reqs[j], l = i.createElement("script"), a;
        l.type = "text/javascript";
        if (undefined !== l.setAttribute) {
            l.setAttribute("async", "async")
        }
        a = "//tumblrprobes.cedexis.com/?z=" + k.z + "&c=" + k.c;
        if (this.k(b)) {
            a += "&n=1"
        }
        if (this.n(b)) {
            a += "&r=1"
        }
        if ("function" === typeof b.postMessage) {
            a += "&p=1"
        }
        if (this.k3(b, i)) {
            a += "&q=1"
        }
        if (0 < k.e.length) {
            a += "&i=" + k.e.join(",")
        }
        if (0 < k.h) {
            a += "&t=" + k.h
        }
        if (0 < k.i) {
            a += "&u=" + k.i
        }
        a += "&uni=1";
        a += "&sig=" + k.a;
        l.src = a;
        this.a5().appendChild(l)
    };
    c.prototype.k = function(f) {
        var a = f.performance, b = document;
        if ( - 1 !== f.navigator.userAgent.search(/msie/i)) {
            if (undefined !== b.documentMode) {
                if (9 > b.documentMode) {
                    return false
                }
            } else {
                if ("BackCompat" === b.compatMode) {
                    return false
                }
            }
        }
        if ("function" !== typeof f.postMessage) {
            return false
        }
        if (undefined === a) {
            return false
        }
        return true
    };
    c.prototype.k1 = function() {
        var b, a;
        if ("function" !== typeof d.postMessage) {
            return false
        }
        a = [/chrome/i, /ipad.+safari/i];
        for (b = 0; b < a.length; b++) {
            if (a[b].test(navigator.userAgent)) {
                return false
            }
        }
        return true
    };
    c.prototype.k3 = function(a, b) {
        if ( - 1 !== a.navigator.userAgent.search(/msie/i)) {
            if (undefined !== b.documentMode) {
                if (8 < b.documentMode) {
                    return false
                }
                return true
            }
        }
        return "BackCompat" === b.compatMode
    };
    c.prototype.l = function(a) {
        clearTimeout(a)
    };
    c.prototype.m = function() {
        var i, b, h = d, j = [];
        function a(e) {
            var f, g, l;
            if ("radar_tags_" === e.slice(0, 11)) {
                f = b.exec(e);
                if (f && 2 === f.length) {
                    g = JSON.stringify(h[e]);
                    if (64 >= g.length) {
                        l = f[1] + ":" + c.y64.encode(g);
                        j.push(l)
                    }
                }
            }
        }
        if (undefined === d.JSON) {
            return "1"
        }
        b = /radar_tags_(\w{3,})/i;
        for (i in h) {
            if (undefined !== h.hasOwnProperty) {
                if (h.hasOwnProperty(i)) {
                    a(i)
                }
            } else {
                if (undefined !== h[i]) {
                    a(i)
                }
            }
        }
        if (1 > j.length) {
            return "0"
        }
        return j.join("@")
    };
    c.prototype.n = function(a) {
        function b() {
            var e = /msie (\d+)/i.exec(a.navigator.userAgent);
            if (e) {
                return parseInt(e[1], 10) <= 10
            }
            return false
        }
        var f=!!(a.performance && a.performance.getEntriesByType&&!b());
        return f
    };
    c.prototype.sto = function(a, b) {
        return setTimeout(a, b)
    };
    c.a = function(a, b) {
        var f;
        for (f = 0; f < a.length; f++) {
            if (b === a[f]) {
                return true
            }
        }
        return false
    };
    c.y64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-",
        encode: function(r) {
            var t = "", a, i, o, b, n, p, q, s = 0;
            r = this._utf8_encode(r);
            while (s < r.length) {
                a = r.charCodeAt(s++);
                i = r.charCodeAt(s++);
                o = r.charCodeAt(s++);
                b = a>>2;
                n = ((a & 3)<<4) | (i>>4);
                p = ((i & 15)<<2) | (o>>6);
                q = o & 63;
                if (isNaN(i)) {
                    p = q = 64
                } else {
                    if (isNaN(o)) {
                        q = 64
                    }
                }
                t = t + this._keyStr.charAt(b) + this._keyStr.charAt(n) + this._keyStr.charAt(p) + this._keyStr.charAt(q)
            }
            return t
        },
        _utf8_encode: function(h) {
            h = h.replace(/\r\n/g, "\n");
            var i = "", a, b;
            for (a = 0; a < h.length; a++) {
                b = h.charCodeAt(a);
                if (b < 128) {
                    i += String.fromCharCode(b)
                } else {
                    if ((b > 127) && (b < 2048)) {
                        i += String.fromCharCode((b>>6) | 192);
                        i += String.fromCharCode((b & 63) | 128)
                    } else {
                        i += String.fromCharCode((b>>12) | 224);
                        i += String.fromCharCode(((b>>6) & 63) | 128);
                        i += String.fromCharCode((b & 63) | 128)
                    }
                }
            }
            return i
        }
    };
    c.o = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"];
    c.p = [14, 15, 23, 30];
    if (cdx && (undefined === cdx.s) && ("undefined" === typeof cdxu)) {
        cdx.s = new c();
        if (d.addEventListener) {
            d.addEventListener("message", cdx.s.c00(), false)
        }
        if (undefined === d.radar) {
            d.radar = {}
        }
        if (undefined === d.cedexis) {
            d.cedexis = {}
        }
        if (undefined === cedexis.radar) {
            cedexis.radar = {}
        }
        cedexis.radar.log = function() {
            return 
        }
    }
}(window));
