(function() {
    var f = this, k = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var d = Object.prototype.toString.call(a);
                        if ("[object Window]" == d)
                            return "object";
                            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
};
var l = function(a) {
    l[" "](a);
    return a
};
l[" "] = function() {};
var m = function(a, b) {
    for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(void 0, a[d], d, a)
};
var n = window;
var p;
n: {
    var q = f.navigator;
    if (q) {
        var u = q.userAgent;
        if (u) {
            p = u;
            break n
        }
    }
    p = ""
};
var y =- 1 != p.indexOf("Opera")||-1 != p.indexOf("OPR"), z =- 1 != p.indexOf("Trident")||-1 != p.indexOf("MSIE"), B =- 1 != p.indexOf("Gecko")&&-1 == p.toLowerCase().indexOf("webkit")&&!( - 1 != p.indexOf("Trident")||-1 != p.indexOf("MSIE")), C =- 1 != p.toLowerCase().indexOf("webkit");
(function() {
    var a = "", b;
    if (y && f.opera)
        return a = f.opera.version, "function" == k(a) ? a() : a;
    B ? b = /rv\:([^\);]+)(\)|;)/ : z ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : C && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(p)) ? a[1] : "");
    return z && (b = (b = f.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
})();
var D = function(a) {
    this.b = [];
    this.a = {};
    for (var b = 0, d = arguments.length; b < d; ++b)
        this.a[arguments[b]] = ""
}, E=!1;
D.prototype.c = function(a) {
    return this.a.hasOwnProperty(a) ? this.a[a] : ""
};
var G = function() {
    var a = F, b = [];
    m(a.a, function(a) {
        "" != a && b.push(a)
    });
    return 0 < a.b.length && 0 < b.length ? a.b.join() + "," + b.join() : a.b.join() + b.join()
};
var E=!1, H = function(a) {
    D.apply(this, arguments)
};
(function() {
    function a() {}
    a.prototype = D.prototype;
    H.e = D.prototype;
    H.prototype = new a;
    H.d = function(a, d, c) {
        return D.prototype[d].apply(a, Array.prototype.slice.call(arguments, 2))
    }
})();
H.prototype.geil = H.prototype.c;
var F, I = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");
function J(a) {
    return null != a ? escape(a.toString()) : ""
}
function N(a) {
    return null != a ? a.toString().substring(0, 512) : ""
}
function O(a, b) {
    var d = J(b);
    if ("" != d) {
        var c = J(a);
        if ("" != c)
            return "&".concat(c, "=", d)
    }
    return ""
}
function P(a) {
    var b = typeof a;
    return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
}
function Q(a) {
    var b;
    if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
        var d = [];
        for (b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                if (c && "function" == typeof c.join) {
                    for (var e = [], g = 0; g < c.length; ++g) {
                        var h = P(c[g]);
                        null != h && e.push(h)
                    }
                    c = 0 == e.length ? null : e.join(",")
                } else 
                    c = P(c);
                    (e = P(b)) && null != c && d.push(e + "=" + c)
            }
        b = d.join(";")
    } else 
        b = "";
    return "" == b ? "" : "&".concat("data=", encodeURIComponent(b))
}
function R(a) {
    return "number" != typeof a && "string" != typeof a ? "" : J(a.toString())
}
function S(a) {
    if (!a)
        return "";
    a = a.google_conversion_items;
    if (!a)
        return "";
    for (var b = [], d = 0, c = a.length; d < c; d++) {
        var e = a[d], g = [];
        e && (g.push(R(e.value)), g.push(R(e.quantity)), g.push(R(e.item_id)), g.push(R(e.adwords_grouping)), g.push(R(e.sku)), b.push("(" + g.join("*") + ")"))
    }
    return 0 < b.length ? "&item=" + b.join("") : ""
}
function T(a, b, d) {
    var c = [];
    if (a) {
        var e = a.screen;
        e && (c.push(O("u_h", e.height)), c.push(O("u_w", e.width)), c.push(O("u_ah", e.availHeight)), c.push(O("u_aw", e.availWidth)), c.push(O("u_cd", e.colorDepth)));
        a.history && c.push(O("u_his", a.history.length))
    }
    d && "function" == typeof d.getTimezoneOffset && c.push(O("u_tz", - d.getTimezoneOffset()));
    b && ("function" == typeof b.javaEnabled && c.push(O("u_java", b.javaEnabled())), b.plugins && c.push(O("u_nplug", b.plugins.length)), b.mimeTypes && c.push(O("u_nmime", b.mimeTypes.length)));
    return c.join("")
}
function U(a, b, d) {
    var c = "";
    if (b) {
        var e;
        if (a.top == a)
            e = 0;
        else {
            var g = a.location.ancestorOrigins;
            if (g)
                e = g[g.length - 1] == a.location.origin ? 1 : 2;
            else {
                g = a.top;
                try {
                    var h;
                    if (h=!!g && null != g.location.href)
                        e: {
                        try {
                            l(g.foo);
                            h=!0;
                            break e
                        } catch (r) {}
                        h=!1
                    }
                    e = h
                } catch (A) {
                    e=!1
                }
                e = e ? 1 : 2
            }
        }
        h = "";
        h = d ? d : 1 == e ? a.top.location.href : a.location.href;
        c += O("frm", e);
        c += O("url", N(h));
        c += O("ref", N(b.referrer))
    }
    return c
}
function V(a) {
    return "42631044" == (F ? F.c(2) : "") || a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase() ? "https:" : "http:"
}
var W = /Android ([01]\.|2\.[01])/i;
function X() {
    return new Image
}
function Y(a, b, d) {
    var c = X;
    "function" === typeof a.opt_image_generator && (c = a.opt_image_generator);
    c = c();
    b += O("async", "1");
    c.src = b;
    c.onload = d && "function" === typeof a.onload_callback ? a.onload_callback : function() {}
}
function Z(a) {
    for (var b = window, d = {}, c = function(c) {
        d[c] = a && null != a[c] ? a[c] : b[c]
    }, e = 0; e < I.length; e++)
        c(I[e]);
    c("onload_callback");
    return d
};
window.google_trackConversion = function(a) {
    a = Z(a);
    a.google_conversion_format = 3;
    var b;
    var d = window, c = navigator, e = document, g=!1;
    if (a && 3 == a.google_conversion_format) {
        try {
            var h;
            if ("landing" == a.google_conversion_type ||!a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough)
                h=!1;
            else {
                a.google_conversion_date = new Date;
                a.google_conversion_time = a.google_conversion_date.getTime();
                a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ?
                a.google_conversion_snippets + 1 : 1;
                "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
                a.google_conversion_js_version = "7";
                0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 1);
                F = new H(1, 2, 3);
                if ("https:" != V(n)&&!W.test(navigator.userAgent) && F) {
                    var r = F, A = ["42631043", "42631044"];
                    if (E ? 0 : r.a.hasOwnProperty(2) && "" == r.a[2]) {
                        var s;
                        e:
                        {
                            if (!(1E-4 > Math.random())) {
                                var v =
                                Math.random();
                                if (0 > v) {
                                    try {
                                        var K = new Uint16Array(1);
                                        window.crypto.getRandomValues(K);
                                        v = K[0] / 65536
                                    } catch (aa) {
                                        v = Math.random()
                                    }
                                    s = A[Math.floor(v * A.length)];
                                    break e
                                }
                            }
                            s = null
                        }
                        s && "" != s && r.a.hasOwnProperty(2) && (r.a[2] = s)
                    }
                }
                h=!0
            }
            if (h) {
                h = "/?";
                "landing" == a.google_conversion_type && (h = "/extclk?");
                var L;
                L = V(d) + "//" + (a.google_remarketing_only ? "googleads.g.doubleclick.net" : a.google_conversion_domain || "www.googleadservices.com") + "/pagead/" + [a.google_remarketing_only ? "viewthroughconversion/": "conversion/", J(a.google_conversion_id),
                h, "random=", J(a.google_conversion_time)].join("");
                var $ = e ? {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4
                }
                [e.webkitVisibilityState || e.mozVisibilityState || e.visibilityState || ""] || 0: "0", w;
                r:
                {
                    var M = a.google_conversion_language;
                    if (null != M) {
                        var t = M.toString();
                        if (2 == t.length) {
                            w = O("hl", t);
                            break r
                        }
                        if (5 == t.length) {
                            w = O("hl", t.substring(0, 2)) + O("gl", t.substring(3, 5));
                            break r
                        }
                    }
                    w = ""
                }
                b = [O("cv", a.google_conversion_js_version), O("fst", a.google_conversion_first_time), O("num", a.google_conversion_snippets), O("fmt", a.google_conversion_format),
                O("value", a.google_conversion_value), O("currency_code", a.google_conversion_currency), O("label", a.google_conversion_label), O("oid", a.google_conversion_order_id), O("bg", a.google_conversion_color), w, O("guid", "ON"), O("disvt", a.google_disable_viewthrough), O("is_call", a.google_is_call), O("eid", G()), S(a), T(d, c, a.google_conversion_date), Q(a), U(d, e, a.google_conversion_page_url), a.google_remarketing_for_search&&!a.google_conversion_domain ? "&srr=n": "", O("vis", $)].join("");
                Y(a, L + b, !0);
                if (a.google_remarketing_for_search &&
                !a.google_conversion_domain) {
                    var x;
                    x = V(d) + "//www.google.com/ads/user-lists/" + [J(a.google_conversion_id), "/?random=", Math.floor(1E9 * Math.random())].join("");
                    x += [O("label", a.google_conversion_label), O("fmt", "3"), U(d, e, a.google_conversion_page_url)].join("");
                    Y(a, x, !1)
                }
                g=!0
            }
        } catch (ba) {}
        b = g
    } else 
        b=!1;
    return b
};
})();

