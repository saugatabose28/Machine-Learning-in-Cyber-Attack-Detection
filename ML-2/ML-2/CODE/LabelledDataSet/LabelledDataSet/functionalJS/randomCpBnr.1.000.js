(function(h) {
    function g(a) {
        e = this;
        this.i.call(this, a)
    }
    var d = h.document, e = {};
    g.prototype = {
        e: "/blog/js/common/randomCpBnrConf.js",
        i: function(a) {
            this.a = a.bnrId || "";
            this.b = a.statDomain || "";
            "" !== this.a && "" !== this.b && (this.d = d.getElementById(this.a)) && (this.c = this.h(), this.j())
        },
        h: function() {
            function a(a) {
                a = "" + a;
                return 1 < a.length ? a : "0" + a
            }
            var b = [], c = new Date;
            b.push("" + c.getFullYear());
            b.push(a(c.getMonth() + 1));
            b.push(a(c.getDate()));
            b.push(a(c.getHours()));
            b.push(a(c.getMinutes()));
            return 1 * b.join("")
        },
        j: function() {
            var a = d.createElement("script"), b = d.getElementsByTagName("body").item(0);
            a.src = this.b + this.e + "?ts=" + 1 * new Date;
            b.appendChild(a)
        },
        f: function(a) {
            a && a[e.a] && e.g.call(e, a)
        },
        g: function(a) {
            a = a[this.a] || [];
            var b = [], c = 0, b = {};
            1 > a.length || (b = this.k(a), c = b.length, 0 < c && (b = b[Math.floor(Math.random() * c)], this.l(b)))
        },
        k: function(a) {
            for (var b = [], c = {}, d = 0, e = a.length; d < e; d++) {
                var c = a[d], f;
                if (f = c.startTime)
                    if (f = c.endTime)
                        f = 1 * c.endTime, f = 1 * c.startTime <= this.c && f > this.c?!0 : !1;
                f && b.push(c)
            }
            return b
        },
        l: function(a) {
            var b =
            d.createElement("img"), c = d.createElement("a");
            c.href = a.linkUrl;
            "none" !== a.target && (c.target = a.target);
            b.src = this.b + a.imgPath;
            b.width = a.width;
            b.height = a.height;
            b.alt = a.alt;
            c.appendChild(b);
            this.d.appendChild(c)
        }
    };
    window.Amb = window.Amb || {};
    window.Amb.Ameblo = window.Amb.Ameblo || {};
    window.Amb.Ameblo.randomCpBnr = g;
    window.Amb.Ameblo.cpBannerConfig = g.prototype.f
})(window);
