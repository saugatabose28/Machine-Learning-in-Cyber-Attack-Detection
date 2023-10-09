(function(e, s) {
    var a = function(y, u) {
        u = u || 0;
        y = y || "yp";
        var v = Math.round((new Date()).getTime() / 1000), x = {};
        function A(H) {
            if (H == "") {
                return {}
            }
            if (H.indexOf("#")==-1 && /%23\d{10,}\./.test(H)) {
                H = decodeURIComponent(H)
            }
            var E = {}, F = H.split("#"), D, G, J, B, I, C;
            for (G = 0; G < F.length; G++) {
                J = F[G].split(".");
                D = (/%23\d{10,}\./.test(F[G]) || J.length < 3 || J[1] == "");
                if (!D) {
                    C = parseInt(J.shift(), "10");
                    B = J.shift();
                    I = J.join(".");
                    E[B] = {
                        expire: C,
                        value: decodeURIComponent(I)
                    }
                }
            }
            return E
        }
        function z() {
            var E = document.cookie.split("; "), D, B, C;
            for (D = 0, B = E.length; D < B; D++) {
                C = E[D].split("=", 2);
                if (C[0] == y) {
                    return C[1]
                }
            }
            return ""
        }
        function w() {
            var B = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000 * 365 * 10).toGMTString(), F = [], E, D = document.domain.replace(/^\S*yandex/, ".yandex");
            for (E in x) {
                var C = (x.hasOwnProperty(E) && (x[E].expire >= v || u == 0 || u == 2));
                if (C) {
                    F.push([x[E].expire, E, encodeURIComponent(x[E].value)].join("."))
                }
            }
            document.cookie = y + "=" + F.join("#") + ";expires=" + B + ";path=/;domain=" + D
        }
        this.get = function(B) {
            x = A(z());
            if (x[B]) {
                if (x[B]["expire"] < v && u < 2) {
                    return ""
                }
                return x[B]["value"]
            } else {
                return ""
            }
        };
        this.dump = function() {
            x = A(z());
            return x
        };
        this.set = function(C, D, B) {
            x = A(z());
            B = B || Math.round((new Date()).getTime() / 1000) + 315360000;
            x[C] = {
                value: D,
                expire: B
            };
            w()
        };
        this.remove = function(B) {
            x = A(z());
            delete x[B];
            w()
        }
    };
    var i = "yb", b = ":", t = c("clinst") || c("clid"), h = d() || "", g = navigator, p = g.userAgent, k = p && (/MSIE/).test(p) && (/Win/).test(p), m = k ? "fco": "fce", j = new a;
    function c(y) {
        var v = location.search.substr(1), x = location.hash.substr(1), w = new RegExp("(^|&)" + y + "=([^&]*)(&|$)"), u = v.match(w);
        if (u && u[2]) {
            return decodeURIComponent(u[2])
        }
        u = x.match(w);
        return u && u[2] && decodeURIComponent(u[2])
    }
    function l() {
        return Math.round((new Date).valueOf() / 1000)
    }
    function d() {
        var u = navigator.userAgent.match(/Ya(ndex)?Browser\/([\d\.]+)/);
        return (u && u[2] || "").replace(/\./g, "_")
    }
    function r() {
        if (h) {
            var v = ya_fc && ya_fc.split(b) || [], u;
            v[0] = h;
            v[1] = t || "0";
            v[2] = l();
            delete v[5];
            u = v.join(b);
            swf.fc_write(i, u);
            j.set(i, u)
        }
    }
    function o() {
        if (h) {
            var v = ya_fc && ya_fc.split(b) || [], u;
            v[0] = h;
            v[1] = t || "0";
            v[2] = v[2] || l();
            u = v.join(b);
            swf.fc_write(i, u);
            j.set(i, u)
        }
    }
    function n() {
        var v = ya_fc && ya_fc.split(b) || [], u;
        if (h) {
            v[0] = v[0] || h;
            v[2] = v[2] || l();
            v[3] = l();
            v[4] = parseInt(v[4] || 0) + 1;
            u = v.join(b);
            swf.fc_write(i, u)
        }
        u = u || ya_fc;
        if (u) {
            j.set(i, u)
        }
    }
    function q() {
        var v = ya_fc && ya_fc.split(b) || [], u;
        if (h) {
            v[0] = v[0] || h;
            v[2] = v[2] || l();
            v[3] = l();
            v[4] = v[4] || 0;
            u = v.join(b);
            swf.fc_write(i, u)
        }
        u = u || ya_fc;
        if (u) {
            j.set(i, u)
        }
    }
    function f() {
        if (!h) {
            var v = ya_fc && ya_fc.split(b) || [], u;
            v[5] = l();
            u = v.join(b);
            swf.fc_write(i, u);
            j.set(i, u)
        }
    }
    e.fc_onReady = function() {
        swf = s.getElementById(m);
        ya_fc = swf.fc_read(i);
        switch (window.pageType || c("pt")) {
        case"w":
            return r();
        case"u":
            return o();
        case"b":
            return f();
        case"p":
            return q();
        default:
            return n()
        }
    }
})(window, document);
