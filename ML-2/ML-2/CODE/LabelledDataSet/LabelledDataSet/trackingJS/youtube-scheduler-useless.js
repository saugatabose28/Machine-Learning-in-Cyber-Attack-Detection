(function() {
    var e = this;
    function g(a) {
        a = a.split(".");
        for (var b = e, c; c = a.shift();)
            if (null != b[c])
                b = b[c];
            else 
                return null;
        return b
    }
    function h(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function k(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function l(a, b, c) {
        l = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? h : k;
        return l.apply(null, arguments)
    }
    var m = Date.now || function() {
        return + new Date
    };
    function n(a, b) {
        var c = a.split("."), d = e;
        c[0]in d ||!d.execScript || d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift());)
            c.length || void 0 === b ? d[f] ? d = d[f] : d = d[f] = {} : d[f] = b
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return l.apply(null, c)
        }
        return l(this, a)
    };
    function p() {
        this.o = this.o;
        this.v = this.v
    }
    p.prototype.o=!1;
    p.prototype.dispose = function() {
        this.o || (this.o=!0, this.C())
    };
    p.prototype.C = function() {
        if (this.v)
            for (; this.v.length;)
                this.v.shift()()
    };
    function q() {
        p.call(this);
        this.d = [];
        this.d[3] = [];
        this.d[2] = [];
        this.d[1] = [];
        this.d[0] = [];
        this.g = {};
        this.k = q.d;
        this.D = this.t = 0;
        this.B = this.A=!1;
        this.j = [];
        this.F = l(this.G, this)
    }(function() {
        var a = q;
        function b() {}
        b.prototype = p.prototype;
        a.H = p.prototype;
        a.prototype = new b;
        a.base = function(a, b, f) {
            return p.prototype[b].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    })();
    q.k = "hidden";
    q.j = 1E3 / 60;
    q.g = 3;
    q.d = q.j - q.g;
    function r(a, b, c) {
        ++a.D;
        var d = a.D;
        a.g[d] = b;
        a.A ? a.j.push({
            id: d,
            priority: c
        }) : (a.d[c].push(d), a.B || a.start());
        return d
    }
    function s(a) {
        a.j.length = 0;
        for (var b = 3; 0 <= b; b--)
            a.d[b].length = 0;
        a.g = {};
        a.stop()
    }
    function t(a) {
        try {
            a()
        } catch (b) {
            (a = g("yt.www.errors.log")) && a(b)
        }
    }
    q.prototype.G = function() {
        this.stop();
        this.A=!0;
        for (var a = m() + this.k, b = this.d[3]; b.length;) {
            var c = this.g[b.shift()];
            c && t(c)
        }
        for (b = 2; 0 <= b; b--) {
            for (var c = a, d = this.d[b]; d.length && m() < c;) {
                var f = d.shift(), u = this.g[f];
                delete this.g[f];
                u && t(u)
            }
            if (!(m() < c))
                break
        }
        this.A=!1;
        b = 0;
        for (c = this.j.length; b < c; b++)
            d = this.j[b], this.d[d.priority].push(d.id);
        this.k = q.d;
        (a <= m() || this.j.length) && this.start();
        this.j.length = 0
    };
    q.prototype.start = function() {
        this.B=!1;
        0 == this.t && (this.t = window.setTimeout(this.F, 1))
    };
    q.prototype.pause = function() {
        this.stop();
        this.B=!0
    };
    q.prototype.stop = function() {
        window.clearTimeout(this.t);
        this.t = 0
    };
    q.prototype.C = function() {
        s(this);
        this.stop();
        q.H.C.call(this)
    };
    function v() {
        var a = g("yt.scheduler.instance.instance_");
        if (!a || a.o)
            a = new q, n("yt.scheduler.instance.instance_", a);
        return a
    }
    var w = g("yt.scheduler.instance.timerIdMap_") || {};
    n("yt.scheduler.instance.dispose", function() {
        var a = g("yt.scheduler.instance.instance_");
        a && (a && "function" == typeof a.dispose && a.dispose(), n("yt.scheduler.instance.instance_", null))
    });
    n("yt.scheduler.instance.addJob", function(a, b, c) {
        if (0 == c)
            return - r(v(), a, b);
        var d = window.setTimeout(function() {
            var c = r(v(), a, b);
            w[d] = c
        }, c);
        return d
    });
    n("yt.scheduler.instance.addImmediateJob", function(a) {
        var b = v(), c = m();
        t(a);
        a = m() - c;
        b.k -= a
    });
    n("yt.scheduler.instance.cancelJob", function(a) {
        var b = v();
        if (0 > a)
            delete b.g[ - a];
        else {
            var c = w[a];
            c ? (delete b.g[c], delete w[a]) : window.clearTimeout(a)
        }
    });
    n("yt.scheduler.instance.cancelAllJobs", function() {
        s(v())
    });
    n("yt.scheduler.instance.start", function() {
        v().start()
    });
    n("yt.scheduler.instance.pause", function() {
        v().pause()
    });
})();

