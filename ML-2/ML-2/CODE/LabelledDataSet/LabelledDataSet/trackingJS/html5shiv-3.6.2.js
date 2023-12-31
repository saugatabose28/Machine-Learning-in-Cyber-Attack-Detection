(function(w, C) {
    function v() {
        var e = D.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function z(f) {
        var e = u[f[d]];
        e || (e = {}, A++, f[d] = A, u[A] = e);
        return e
    }
    function c(f, e, g) {
        e || (e = C);
        if (B) {
            return e.createElement(f)
        }
        g || (g = z(e));
        e = g.cache[f] ? g.cache[f].cloneNode() : a.test(f) ? (g.cache[f] = g.createElem(f)).cloneNode() : g.createElem(f);
        return e.canHaveChildren&&!F.test(f) ? g.frag.appendChild(e) : e
    }
    function E(f, e) {
        if (!e.cache) {
            e.cache = {}, e.createElem = f.createElement, e.createFrag = f.createDocumentFragment, e.frag = e.createFrag()
        }
        f.createElement = function(g) {
            return !D.shivMethods ? e.createElem(g) : c(g, f, e)
        };
        f.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + v().join().replace(/\w+/g, function(g) {
            e.createElem(g);
            e.frag.createElement(g);
            return 'c("' + g + '")'
        }) + ");return n}")(D, e.frag)
    }
    function b(f) {
        f || (f = C);
        var e = z(f);
        if (D.shivCSS&&!y&&!e.hasCSS) {
            var h, g = f;
            h = g.createElement("p");
            g = g.getElementsByTagName("head")[0] || g.documentElement;
            h.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
            h = g.insertBefore(h.lastChild, g.firstChild);
            e.hasCSS=!!h
        }
        B || E(f, e);
        return f
    }
    var x = w.html5 || {}, F = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, a = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, y, d = "_html5shiv", A = 0, u = {}, B;
    (function() {
        try {
            var f = C.createElement("a");
            f.innerHTML = "<xyz></xyz>";
            y = "hidden" in f;
            var e;
            if (!(e = 1 == f.childNodes.length)) {
                C.createElement("a");
                var h = C.createDocumentFragment();
                e = "undefined" == typeof h.cloneNode || "undefined" == typeof h.createDocumentFragment || "undefined" == typeof h.createElement
            }
            B = e
        } catch (g) {
            B = y=!0
        }
    })();
    var D = {
        elements: x.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        version: "3.6.2pre",
        shivCSS: !1 !== x.shivCSS,
        supportsUnknownElements: B,
        shivMethods: !1 !== x.shivMethods,
        type: "default",
        shivDocument: b,
        createElement: c,
        createDocumentFragment: function(g, f) {
            g || (g = C);
            if (B) {
                return g.createDocumentFragment()
            }
            for (var f = f || z(g), l = f.frag.cloneNode(), k = 0, j = v(), i = j.length; k < i; k++) {
                l.createElement(j[k])
            }
            return l
        }
    };
    w.html5 = D;
    b(C)
})(this, document);
