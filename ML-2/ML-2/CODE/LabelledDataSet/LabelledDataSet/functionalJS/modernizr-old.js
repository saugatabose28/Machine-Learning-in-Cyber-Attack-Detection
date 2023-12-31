/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: borderradius | boxshadow | opacity | rgba | textshadow | cssanimations | cssgradients | csstransitions | canvas | iepp | cssclasses | testprop | testallprops | prefixes | domprefixes
 */
;
window.Modernizr = function(a, b, c) {
    function B(a, b) {
        var c = a.charAt(0).toUpperCase() + a.substr(1), d = (a + " " + o.join(c + " ") + c).split(" ");
        return A(d, b)
    }
    function A(a, b) {
        for (var d in a)
            if (k[a[d]] !== c)
                return b == "pfx" ? a[d] : !0;
        return !1
    }
    function z(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function y(a, b) {
        return typeof a === b
    }
    function x(a, b) {
        return w(n.join(a + ";") + (b || ""))
    }
    function w(a) {
        k.cssText = a
    }
    var d = "2.0.6", e = {}, f=!0, g = b.documentElement, h = b.head || b.getElementsByTagName("head")[0], i = "modernizr", j = b.createElement(i), k = j.style, l, m = Object.prototype.toString, n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "), o = "Webkit Moz O ms Khtml".split(" "), p = {}, q = {}, r = {}, s = [], t, u = {}.hasOwnProperty, v;
    !y(u, c)&&!y(u.call, c) ? v = function(a, b) {
        return u.call(a, b)
    } : v = function(a, b) {
        return b in a && y(a.constructor.prototype[b], c)
    }, p.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext&&!!a.getContext("2d")
    }, p.rgba = function() {
        w("background-color:rgba(150,255,150,.5)");
        return z(k.backgroundColor, "rgba")
    }, p.borderradius = function() {
        return B("borderRadius")
    }, p.boxshadow = function() {
        return B("boxShadow")
    }, p.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }, p.opacity = function() {
        x("opacity:.55");
        return /^0.55$/.test(k.opacity)
    }, p.cssanimations = function() {
        return B("animationName")
    }, p.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        w((a + n.join(b + a) + n.join(c + a)).slice(0, - a.length));
        return z(k.backgroundImage, "gradient")
    }, p.csstransitions = function() {
        return B("transitionProperty")
    };
    for (var C in p)
        v(p, C) && (t = C.toLowerCase(), e[t] = p[C](), s.push((e[t] ? "" : "no-") + t));
    w(""), j = l = null, a.attachEvent && function() {
        var a = b.createElement("div");
        a.innerHTML = "<elem></elem>";
        return a.childNodes.length !== 1
    }() && function(a, b) {
        function s(a) {
            var b =- 1;
            while (++b < g)
                a.createElement(f[b])
        }
        a.iepp = a.iepp || {};
        var d = a.iepp, e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", f = e.split("|"), g = f.length, h = new RegExp("(^|\\s)(" + e + ")", "gi"), i = new RegExp("<(/*)(" + e + ")", "gi"), j = /^\s*[\{\}]\s*$/, k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"), l = b.createDocumentFragment(), m = b.documentElement, n = m.firstChild, o = b.createElement("body"), p = b.createElement("style"), q = /print|all/, r;
        d.getCSS = function(a, b) {
            if (a + "" === c)
                return "";
            var e =- 1, f = a.length, g, h = [];
            while (++e < f) {
                g = a[e];
                if (g.disabled)
                    continue;
                b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText), b = "all"
            }
            return h.join("")
        }, d.parseCSS = function(a) {
            var b = [], c;
            while ((c = k.exec(a)) != null)
                b.push(((j.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(h, "$1.iepp_$2") + c[4]);
            return b.join("\n")
        }, d.writeHTML = function() {
            var a =- 1;
            r = r || b.body;
            while (++a < g) {
                var c = b.getElementsByTagName(f[a]), d = c.length, e =- 1;
                while (++e < d)
                    c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + f[a])
            }
            l.appendChild(r), m.appendChild(o), o.className = r.className, o.id = r.id, o.innerHTML = r.innerHTML.replace(i, "<$1font")
        }, d._beforePrint = function() {
            p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all")), d.writeHTML()
        }, d.restoreHTML = function() {
            o.innerHTML = "", m.removeChild(o), m.appendChild(r)
        }, d._afterPrint = function() {
            d.restoreHTML(), p.styleSheet.cssText = ""
        }, s(b), s(l);
        d.disablePP || (n.insertBefore(p, n.firstChild), p.media = "print", p.className = "iepp-printshim", a.attachEvent("onbeforeprint", d._beforePrint), a.attachEvent("onafterprint", d._afterPrint))
    }(a, b), e._version = d, e._prefixes = n, e._domPrefixes = o, e.testProp = function(a) {
        return A([a])
    }, e.testAllProps = B, g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + s.join(" ") : "");
    return e
}(this, this.document);

