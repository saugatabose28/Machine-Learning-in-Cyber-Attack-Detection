(function() {
    var m = this, n = function(a) {
        return void 0 !== a
    }, aa = function(a, b, c) {
        a = a.split(".");
        c = c || m;
        a[0]in c ||!c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            !a.length && n(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {}
    }, ba = function() {}, ca = function(a) {
        a.getInstance = function() {
            return a.fd ? a.fd : a.fd = new a
        }
    }, da = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return b;
                        var c = Object.prototype.toString.call(a);
                        if ("[object Window]" == c)
                            return "object";
                            if ("[object Array]" ==
                            c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == b && "undefined" == typeof a.call)
    return "object";
return b
}, p = function(a) {
    return "array" == da(a)
}, ea = function(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length
},
q = function(a) {
    return "string" == typeof a
}, fa = function(a) {
    return "number" == typeof a
}, ga = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}, ha = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
}, ia = function(a, b, c) {
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
}, r = function(a, b,
c) {
    r = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
    return r.apply(null, arguments)
}, ja = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}, ka = Date.now || function() {
    return + new Date
}, s = function(a, b, c) {
    aa(a, b, c)
}, la = function(a, b, c) {
    a[b] = c
}, t = function(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.gf = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function(a,
    c, f) {
        var g = Array.prototype.slice.call(arguments, 2);
        return b.prototype[c].apply(a, g)
    }
};
var u = function(a, b) {
    var c = parseFloat(a);
    return isNaN(c) || 1 < c || 0 > c ? b : c
}, ma = function(a, b) {
    var c = parseInt(a, 10);
    return isNaN(c) ? b : c
}, na = function(a, b) {
    return /^true$/.test(a)?!0 : /^false$/.test(a)?!1 : b
}, oa = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/, qa = function(a, b) {
    if (!a)
        return b;
    var c = a.match(oa);
    return c ? c[0] : b
};
var ra = u("0.02", 0), sa = u("0.0", 0), ta = u("0.02", 0), ua = u("0.001", 0), va = u("0.2", 0), wa = u("", 0), xa = u("", 0), ya = u("0.01", 0), za = u("", 0), Aa = u("", 0), Ba = u("",
0), Ca = u("", 0), Da = u("0.001", 0), Ea = u("", 0), Fa = u("0.01", 0), Ga = u("", 0), Ha = na("", !0), Ia = u("0.002", 0), Ja = u("0.05", 0), Ka = u("0.1", 0), La = u("0.1", 0), Ma = u("0.05", 0), Na = ma("100",
100), Oa = u("0.01", 0);
var Pa = function() {
    return "r20141113"
}, Qa = na("false", !1), Ra = na("false", !1), Sa = na("false", !1), Ta = na("false", !1), Ua = na("false", !1), Va = function() {
    Ua=!0
};
var Wa = function() {
    return qa("", "googleads.g.doubleclick.net")
}, Xa = function(a) {
    return a ? "pagead2.googlesyndication.com" : qa("", "pagead2.googlesyndication.com")
};
var Ya;
var $a = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, hb = function(a, b) {
    if (b)
        a = a.replace(ab, "&amp;").replace(bb, "&lt;").replace(cb, "&gt;").replace(db, "&quot;").replace(eb, "&#39;").replace(fb, "&#0;");
    else {
        if (!gb.test(a))
            return a;
        - 1 != a.indexOf("&") && (a = a.replace(ab, "&amp;"));
        - 1 != a.indexOf("<") && (a = a.replace(bb, "&lt;"));
        - 1 != a.indexOf(">") && (a = a.replace(cb, "&gt;"));
        - 1 != a.indexOf('"') && (a = a.replace(db, "&quot;"));
        - 1 != a.indexOf("'") && (a = a.replace(eb,
        "&#39;"));
        - 1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;"))
    }
    return a
}, ab = /&/g, bb = /</g, cb = />/g, db = /"/g, eb = /'/g, fb = /\x00/g, gb = /[\x00&<>"']/, kb = function(a) {
    return - 1 != a.indexOf("&") ? "document"in m ? ib(a) : jb(a) : a
}, ib = function(a, b) {
    var c = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, d;
    d = b ? b.createElement("div") : m.document.createElement("div");
    return a.replace(lb, function(a, b) {
        var g = c[a];
        if (g)
            return g;
        if ("#" == b.charAt(0)) {
            var h = Number("0" + b.substr(1));
            isNaN(h) || (g = String.fromCharCode(h))
        }
        g || (d.innerHTML =
        a + " ", g = d.firstChild.nodeValue.slice(0, - 1));
        return c[a] = g
    })
}, jb = function(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == c.charAt(0)) {
                var d = Number("0" + c.substr(1));
                if (!isNaN(d))
                    return String.fromCharCode(d)
                }
            return a
        }
    })
}, lb = /&([^;\s<&]+);?/g, mb = function(a, b) {
    for (var c = b.length, d = 0; d < c; d++) {
        var e = 1 == c ? b: b.charAt(d);
        if (a.charAt(0) == e && a.charAt(a.length - 1) == e)
            return a.substring(1, a.length - 1)
    }
    return a
},
nb = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\"
}, ob = {
    "'": "\\'"
}, qb = function(a) {
    a = String(a);
    if (a.quote)
        return a.quote();
    for (var b = ['"'], c = 0; c < a.length; c++) {
        var d = a.charAt(c), e = d.charCodeAt(0);
        b[c + 1] = nb[d] || (31 < e && 127 > e ? d : pb(d))
    }
    b.push('"');
    return b.join("")
}, pb = function(a) {
    if (a in ob)
        return ob[a];
    if (a in nb)
        return ob[a] = nb[a];
    var b = a, c = a.charCodeAt(0);
    if (31 < c && 127 > c)
        b = a;
    else {
        if (256 > c) {
            if (b = "\\x", 16 > c || 256 < c)
                b += "0"
        } else 
            b = "\\u", 4096 > c && (b +=
            "0");
        b += c.toString(16).toUpperCase()
    }
    return ob[a] = b
}, tb = function(a, b) {
    for (var c = 0, d = $a(String(a)).split("."), e = $a(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var h = d[g] || "", k = e[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), E = RegExp("(\\d*)(\\D*)", "g");
        do {
            var y = l.exec(h) || ["", "", ""], z = E.exec(k) || ["", "", ""];
            if (0 == y[0].length && 0 == z[0].length)
                break;
            var c = 0 == y[1].length ? 0: parseInt(y[1], 10), V = 0 == z[1].length ? 0: parseInt(z[1], 10), c = rb(c, V) || rb(0 == y[2].length, 0 == z[2].length) || rb(y[2], z[2])
        }
        while (0 ==
        c)
        }
    return c
}, rb = function(a, b) {
    return a < b?-1 : a > b ? 1 : 0
}, ub = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}, vb = function(a, b) {
    var c = q(b) ? String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"): "\\s", c = c ? "|[" + c + "]+": "", c = new RegExp("(^" + c + ")([a-z])", "g");
    return a.replace(c, function(a, b, c) {
        return b + c.toUpperCase()
    })
};
var wb = function(a) {
    return a
};
var xb = function(a) {
    xb[" "](a);
    return a
};
xb[" "] = ba;
var yb = function(a, b) {
    try {
        return xb(a[b]), !0
    } catch (c) {}
    return !1
};
var v = function(a) {
    try {
        return !!a && null != a.location.href && yb(a, "foo")
    } catch (b) {
        return !1
    }
}, w = function(a, b) {
    if (!(1E-4 > Math.random())) {
        var c = Math.random();
        if (c < b) {
            try {
                var d = new Uint16Array(1);
                window.crypto.getRandomValues(d);
                c = d[0] / 65536
            } catch (e) {
                c = Math.random()
            }
            c = Math.floor(c * a.length);
            return a[c]
        }
    }
    return null
}, zb = function(a, b, c) {
    for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
}, x = function(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, d ||!1), !0) : a.attachEvent ?
    (a.attachEvent("on" + b, c), !0) : !1
}, A = function(a, b, c, d) {
    return a.removeEventListener ? (a.removeEventListener(b, c, d ||!1), !0) : a.detachEvent ? (a.detachEvent("on" + b, c), !0) : !1
};
var Bb = function(a) {
    var b = a.toString();
    a.name&&-1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message&&-1 == b.indexOf(a.message) && (b += ": " + a.message);
    a.stack && (b = Ab(a.stack, b));
    return b
}, Cb = function(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = a.document.createElement("img");
    if (c) {
        var e = function() {
            c();
            A(d, "load", e);
            A(d, "error", e)
        };
        x(d, "load", e);
        x(d, "error", e)
    }
    d.src = b;
    a.google_image_requests.push(d)
}, Ab = function(a, b) {
    try {
        - 1 == a.indexOf(b) && (a = b + "\n" + a);
        for (var c; a != c;)
            c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,
            "$1");
        return a.replace(/\n */g, "\n")
    } catch (d) {
        return b
    }
};
var B = document, C = window;
var D = function(a, b) {
    for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(null, a[c], c, a)
}, Db = function(a) {
    return !!a && "function" == typeof a&&!!a.call
}, Eb = function(a) {
    return !!a && ("object" == typeof a || "function" == typeof a)
}, Fb = function(a, b) {
    if (!a)
        return !1;
    var c=!0;
    D(b, function(b, e) {
        c && e in a && typeof b == typeof a[e] || (c=!1)
    });
    return c
}, Gb = function(a, b) {
    if (2 > arguments.length)
        return a.length;
    for (var c = 1, d = arguments.length; c < d; ++c)
        a.push(arguments[c]);
    return a.length
};
function Hb(a, b, c, d) {
    d = d || document;
    var e = d.createElement("script");
    e.type = "text/javascript";
    b && (void 0 !== e.onreadystatechange ? e.onreadystatechange = function() {
        if ("complete" == e.readyState || "loaded" == e.readyState)
            try {
                b()
        } catch (a) {}
    } : e.onload = b);
    c && (e.id = c);
    e.src = a;
    var f = d.getElementsByTagName("head")[0];
    if (!f)
        return !1;
    try {
        window.setTimeout(function() {
            f.appendChild(e)
        }, 0)
    } catch (g) {
        return !1
    }
    return !0
}
var Ib = function(a, b) {
    return x(a, "load", b, void 0)
}, Jb = function(a, b, c, d) {
    return x(a, b, c, d)
}, Kb = function(a, b, c, d, e) {
    c = r(d, c);
    return x(a, b, c, e) ? c : null
}, Lb = function(a) {
    "google_onload_fired"in a || (a.google_onload_fired=!1, Ib(a, function() {
        a.google_onload_fired=!0
    }))
}, Mb = function(a, b, c) {
    Cb(a, b, c)
}, Nb = function(a) {
    a = a || window;
    try {
        return a.history.length
    } catch (b) {
        return 0
    }
};
function Ob(a) {
    return a in Pb ? Pb[a] : Pb[a] =- 1 != navigator.userAgent.toLowerCase().indexOf(a)
}
var Pb = {};
function Qb() {
    try {
        return Rb()
    } catch (a) {
        return "0"
    }
}
function Rb() {
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description)
            return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
    } else {
        if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
            for (var a = 3, b = 1; b;)
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a + 1)), a++
            } catch (c) {
                b = null
            }
            return a.toString()
        }
        if (Ob("msie")&&!window.opera) {
            b = null;
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
            } catch (d) {
                a = 0;
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a = 6, b.AllowScriptAccess = "always"
                } catch (e) {
                    if (6 == a)
                        return a.toString()
                    }
                try {
                    b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                } catch (f) {}
            }
            if (b)
                return a = b.GetVariable("$version").split(" ")[1], a.replace(/,/g, ".")
            }
    }
    return "0"
}
var Sb = function(a) {
    a = a || C;
    return "http:" == a.location.protocol
}, Tb = function(a) {
    a = a || C;
    return a.google_ad_output || "html"
};
function Ub(a) {
    var b = a.google_ad_format;
    return b ? 0 < b.indexOf("_0ads") : "html" != a.google_ad_output && 0 < a.google_num_radlinks
}
var Vb = function(a, b) {
    return w(a, b)
}, Wb = function(a) {
    a.google_unique_id?++a.google_unique_id : a.google_unique_id = 1;
    return a.google_unique_id
}, Xb = function(a) {
    a = a.google_unique_id;
    return "number" == typeof a ? a : 0
}, Yb = function(a) {
    a.u_tz =- (new Date).getTimezoneOffset();
    a.u_his = Nb();
    a.u_java = navigator.javaEnabled();
    window.screen && (a.u_h = window.screen.height, a.u_w = window.screen.width, a.u_ah = window.screen.availHeight, a.u_aw = window.screen.availWidth, a.u_cd = window.screen.colorDepth);
    navigator.plugins && (a.u_nplug =
    navigator.plugins.length);
    navigator.mimeTypes && (a.u_nmime = navigator.mimeTypes.length)
}, Zb = function(a, b) {
    var c = a.length;
    if (0 == c)
        return 0;
    for (var d = b || 305419896, e = 0; e < c; e++)
        var f = a.charCodeAt(e), d = d^(d<<5) + (d>>2) + f & 4294967295;
    return 0 < d ? d : 4294967296 + d
}, $b = function(a) {
    for (var b = [C.top], c = [], d = 0, e; e = b[d++];) {
        a&&!v(e) || c.push(e);
        try {
            if (e.frames)
                for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g)
                    b.push(e.frames[g])
                } catch (h) {}
    }
    return c
}, ac = function(a) {
    for (var b = [], c = 0; a && 25 > c; a = a.parentNode, ++c)
        b.push(9 !=
        a.nodeType && a.id || "");
    return b.join()
}, bc = function(a) {
    if (a && a.nodeName && a.parentElement)
        for (var b = a.parentElement, c = a.nodeName.toLowerCase(), b = b.childNodes, d = 0, e = 0; e < b.length; ++e) {
            var f = b[e];
            if (f.nodeName && f.nodeName.toLowerCase() == c) {
                if (a == f)
                    return "." + d;
                    ++d
            }
        }
    return ""
}, cc = function(a) {
    for (var b = [], c = 0; a && 25 > c; ++c) {
        var d = 9 != a.nodeType && a.id, d = d ? "/" + d: "", e = a.nodeName && a.nodeName.toLowerCase();
        b.push(e + d + bc(a));
        a = a.parentElement
    }
    return b.join()
}, dc = function(a) {
    var b = [];
    if (a)
        try {
            for (var c = a.parent, d = 0; c &&
            c != a && 25 > d; ++d) {
                for (var e = c.frames, f = 0; f < e.length; ++f)
                    if (a == e[f]) {
                        b.push(f);
                        break
                    }
                    a = c;
                    c = a.parent
            }
    } catch (g) {}
    return b.join()
}, ec = function(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
}, fc = function(a, b, c) {
    a = c ? a.parentElement : a;
    b = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, b.google_ad_height];
    (a = ac(a)) && b.push(a);
    return Zb(b.join(":")).toString()
}, gc = function(a, b) {
    var c = cc(b) + ":" + dc(a);
    return Zb(c).toString()
}, hc = function(a) {
    a = (new Date).getTime() -
    a;
    return 1E4 > a ? a + "" : "M"
}, ic = function(a) {
    return !!a && (0 < a.indexOf("?google_debug") || 0 < a.indexOf("&google_debug"))
}, jc = function(a, b, c) {
    var d = a.userAgent, e = a.platform;
    c = c || /Win|Mac|Linux|iPad|iPod|iPhone/;
    if (c.test(e)&&!/^Opera/.test(d)) {
        c = (/WebKit\/(\d+)/.exec(d) || [0, 0])[1];
        var f = (/rv\:(\d+\.\d+)/.exec(d) || [0, 0])[1];
        if (/Win/.test(e) && /Trident/.test(d) && 9 < b.documentMode ||!c && "Gecko" == a.product && 1.7 < f&&!/rv\:1\.8([^.]|\.0)/.test(d) || 524 < c)
            return !0
    }
    return !1
}, kc = function(a) {
    return v(a.top) ? a.top : null
}, lc =
/(^| )adsbygoogle($| )/, mc = function(a) {
    return function() {
        if (a) {
            var b = a;
            a = null;
            b.apply(null, arguments)
        }
    }
}, nc = function(a) {
    a.preventDefault ? a.preventDefault() : a.returnValue=!1
};
var oc = {
    FLOATING: 1,
    INTERSTITIAL: 2,
    RESIZABLE: 4,
    AUTO_INSTREAM: 8
}, pc = {
    FLOATING_BOTTOM: 1,
    GDN_INTERSTITIAL: 8,
    RESPONSIVE_RESIZE: 16,
    AUTO_INSTREAM: 24
};
var qc = function(a, b, c, d) {
    var e = a + "_anchor";
    a += "_expand";
    b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
    d = ['<ins id="', a, '" style="display:inline-table;', b, '">', '<ins id="', e, '" style="display:block;', b, '">', d, "</ins></ins>"];
    return d.join("")
};
var rc=!!window.google_async_iframe_id, sc = rc && window.parent || window, tc = {
    CONTROL: "C",
    EXPERIMENT: "E"
}, F = function() {
    if (rc&&!v(sc)) {
        for (var a = "." + B.domain; 2 < a.split(".").length&&!v(sc);)
            B.domain = a = a.substr(a.indexOf(".") + 1), sc = window.parent;
        v(sc) || (sc = window)
    }
    return sc
}, uc = function(a, b, c) {
    var d = ["<iframe"], e;
    for (e in a)
        a.hasOwnProperty(e) && Gb(d, e + "=" + a[e]);
    d.push('style="left:0;position:absolute;top:0;"');
    d.push("></iframe>");
    d = d.join(" ");
    return a = qc(a.id, b, c, d)
}, vc = function(a, b) {
    for (var c = b.id, d = 0; !c ||
    a.getElementById(c);)
        c = "aswift_" + d++;
    b.id = c;
    b.name = c
}, wc = function(a, b, c, d) {
    var e = a.document;
    vc(e, b);
    a = Number(c.google_ad_width);
    var f = Number(c.google_ad_height);
    16 == c.google_reactive_ad_format ? (c = e.createElement("div"), c.innerHTML = uc(b, a, f), d.appendChild(c.firstChild)) : d.innerHTML = uc(b, a, f);
    return b.id
}, xc = function(a, b, c) {
    a = a.document.getElementById(b).contentWindow;
    b = a.document;
    b.body && b.body.firstChild || (b.open(), a.google_async_iframe_close=!0, b.write(c))
}, yc = function(a, b, c) {
    a = a.document.getElementById(b).contentWindow;
    c = "javascript:" + qb(c);
    a.location.replace(c)
}, zc = function(a, b, c) {
    var d = a.document.getElementById(b), d = d.contentWindow;
    v(d) ? xc(a, b, c) : yc(a, b, c)
}, Ac = function(a) {
    rc && a != a.parent && a.google_async_iframe_close && a.setTimeout(function() {
        a.document.close()
    }, 0)
};
var Bc = function(a) {
    this.defaultBucket = [];
    this.layers = {};
    for (var b = 0, c = arguments.length; b < c; ++b)
        this.layers[arguments[b]] = ""
}, Cc=!1, Dc = function(a) {
    Cc = a
}, Ec = function(a) {
    for (var b = new Bc, c = 0, d = a.defaultBucket.length; c < d; ++c)
        b.defaultBucket.push(a.defaultBucket[c]);
    zb(a.layers, Bc.prototype.tb, b);
    return b
};
Bc.prototype.statusz = function() {
    return !0
};
Bc.prototype.tb = function(a, b) {
    this.layers[b] = a
};
Bc.prototype.eb = function(a, b) {
    return "" == a ? "" : b ? this.layers.hasOwnProperty(b) ? this.layers[b] = a : "" : (this.defaultBucket.push(a), a)
};
Bc.prototype.j = function(a, b, c) {
    return this.od(c) && (a = w(a, b)) ? this.eb(a, c) : ""
};
Bc.prototype.od = function(a) {
    return Cc?!1 : a ? this.layers.hasOwnProperty(a) && "" == this.layers[a] : !0
};
Bc.prototype.n = function(a) {
    return this.layers.hasOwnProperty(a) ? this.layers[a] : ""
};
Bc.prototype.wb = function() {
    var a = [], b = function(b) {
        "" != b && a.push(b)
    };
    zb(this.layers, b);
    return 0 < this.defaultBucket.length && 0 < a.length ? this.defaultBucket.join() + "," + a.join() : this.defaultBucket.join() + a.join()
};
Dc(!1);
var Fc = function(a) {
    Bc.apply(this, arguments)
};
t(Fc, Bc);
Fc.prototype.geil = Fc.prototype.n;
var Gc = function(a) {
    return Ec(a)
};
var Hc = "jserror", Ic = .01, Jc=!0, Kc = {}, Lc = function(a) {
    Jc = a
}, Mc = function(a) {
    Kc = a
}, Oc = function(a, b, c, d, e) {
    var f, g = Jc;
    try {
        f = c()
    } catch (h) {
        try {
            var k = Bb(h);
            c = "";
            h.fileName && (c = h.fileName);
            var l =- 1;
            h.lineNumber && (l = h.lineNumber);
            g = b(a, k, c, l, d)
        } catch (E) {
            Nc("pAR", E)
        }
        if (!g)
            throw h;
    } finally {
        if (e)
            try {
                e()
            } catch (y) {}
    }
    return f
}, Sc = function(a, b, c, d, e, f) {
    var g = B, h = {};
    if (e)
        try {
            e(h)
    } catch (k) {}
    h.context = a;
    h.msg = b.substring(0, 512);
    c && (h.file = c);
    0 < d && (h.line = d.toString());
    h.url = g.URL.substring(0, 512);
    h.ref = g.referrer.substring(0,
    512);
    Rc(h);
    G(Hc, h, f);
    return Jc
}, G = function(a, b, c) {
    try {
        if (c = c || Ic, Math.random() < c) {
            var d = "/pagead/gen_204?id=" + a + Tc(b), e = "http" + (Sb() ? "" : "s") + "://pagead2.googlesyndication.com" + d, e = e.substring(0, 2E3);
            Mb(C, e)
        }
    } catch (f) {}
}, Nc = function(a, b, c, d) {
    try {
        var e = Bb(b), f = "";
        b.fileName && (f = b.fileName);
        var g =- 1;
        b.lineNumber && (g = b.lineNumber);
        Sc(a, e, f, g, d, c)
    } catch (h) {
        a = {
            context: "mRE",
            msg: h.toString() + "\n" + (h.stack || "")
        }, G(Hc, a, c)
    }
}, Rc = function(a) {
    var b = a || {};
    D(Kc, function(a, d) {
        b[d] = C[a]
    });
    return b
}, Uc = function(a,
b, c, d, e) {
    return function() {
        var f = arguments, g = function() {
            return b.apply(c, f)
        };
        return Oc(a, Sc, g, d, e)
    }
}, Vc = function(a, b, c, d) {
    return Uc(a, b, void 0, c, d)
}, Wc = function(a, b, c, d) {
    return Uc(a, b, void 0, c, d)
}, Tc = function(a) {
    var b = "";
    D(a, function(a, d) {
        if (0 === a || a)
            b += "&" + d + "=" + ("function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a))
    });
    return b
};
var Xc = function(a, b) {
    for (var c = 0, d = a, e = 0; a != a.parent;)
        if (a = a.parent, e++, v(a))
            d = a, c = e;
        else if (b)
            break;
    return {
        win: d,
        level: c
    }
}, Yc = function(a) {
    a = Xc(a, !0);
    return a.win
}, Zc = function(a) {
    a = Xc(a, !1);
    return a.win
}, $c = null, ad = function() {
    $c || ($c = Yc(window));
    return $c
};
var cd = function(a) {
    this.S = a;
    bd(this)
}, dd = {
    google_persistent_state: !0,
    google_persistent_state_async: !0
}, ed = {}, fd = function(a) {
    return "E" == a.google_pstate_expt || "EU" == a.google_pstate_expt
}, gd = function(a) {
    var b = ["C", "E"];
    a.google_pstate_gc_expt = w(b, Ja) || "N"
}, hd = function() {
    var a = F();
    if (!a.google_pstate_expt) {
        for (var b = $b(!0), c, d, e = 0; e < b.length&&!(d = b[e], c = d.google_pstate_expt); ++e);
        c ? (a.google_pstate_gc_expt = d.google_pstate_gc_expt, a.google_pstate_expt = c, fd(a) && (a.google_pstate = d.google_pstate)) : (b = ["C",
        "E", "CU", "EU"], a.google_pstate_expt = w(b, Ia) || "N", fd(a) ? (a.google_pstate = new cd({}), a.google_pstate_gc_expt = "N") : "N" == a.google_pstate_expt && gd(a))
    }
}, kd = function(a) {
    var b, c;
    try {
        var d = a.google_pstate;
        if (b = id(d))
            return c = d, jd(c), c
    } catch (e) {
        c = Bb(e)
    }
    b = {
        context: "ps::eg",
        msg: c,
        L: n(b) ? b ? 1: 0: 2,
        url: a.location.href
    };
    G("jserror", b, 1);
    return a.google_pstate = new cd({})
}, jd = function(a) {
    a.C = (a.C || 0) + 1
}, ld = function() {
    var a = F();
    if ("E" == a.google_pstate_gc_expt) {
        var a = Zc(a), b = a.google_global_correlator;
        b || (a.google_global_correlator =
        b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }
    return 1 + Math.floor(Math.random() * Math.pow(2, 43))
}, md = function(a) {
    var b = F();
    if (fd(b))
        return kd(b);
    a = a && dd[a] ? a : rc ? "google_persistent_state_async" : "google_persistent_state";
    if (ed[a])
        return ed[a];
    var c = "google_persistent_state_async" == a ? {}
    : b, d = b[a];
    return id(d) ? ed[a] = d : b[a] = ed[a] = new cd(c)
}, id = function(a) {
    return "object" == typeof a && "object" == typeof a.S
}, bd = function(a) {
    H(a, 3, null);
    H(a, 4, 0);
    H(a, 5, 0);
    H(a, 6, 0);
    H(a, 15, 0);
    H(a, 7, ld());
    H(a, 8, {});
    H(a, 9, {});
    H(a, 10, {});
    H(a, 11, []);
    H(a, 12, 0);
    H(a, 16, null);
    var b = F();
    fd(b) ? b.gaGlobal = nd(a, 14, b.gaGlobal || {}) : H(a, 14, {})
}, od = function(a) {
    switch (a) {
    case 3:
        return "google_exp_persistent";
    case 4:
        return "google_num_sdo_slots";
    case 5:
        return "google_num_0ad_slots";
    case 6:
        return "google_num_ad_slots";
    case 7:
        return "google_correlator";
    case 8:
        return "google_prev_ad_formats_by_region";
    case 9:
        return "google_prev_ad_slotnames_by_region";
    case 10:
        return "google_num_slots_by_channel";
    case 11:
        return "google_viewed_host_channels";
    case 12:
        return "google_num_slot_to_show";
    case 14:
        return "gaGlobal";
    case 15:
        return "google_num_reactive_ad_slots";
    case 16:
        return "google_persistent_language"
    }
    throw Error("unexpected state");
}, I = function(a, b) {
    var c = od(b);
    return c = a.S[c]
}, nd = function(a, b, c) {
    a = a.S;
    return a[od(b)] = c
}, H = function(a, b, c) {
    a = a.S;
    b = od(b);
    return void 0 === a[b] ? a[b] = c : a[b]
}, pd = function(a, b) {
    return nd(a, 3, b)
}, qd = function(a, b) {
    return nd(a, 14, b)
};
var rd, sd, td, ud = function(a) {
    try {
        return a.statusz()
    } catch (b) {
        return !1
    }
}, vd = function() {
    if (sd && ud(sd))
        return !0;
    var a = md();
    return (a = I(a, 3)) && Eb(a) && Fb(a, Fc.prototype) && ud(a) ? (sd = a, !0) : !1
}, wd = function() {
    if (vd()) {
        var a = sd;
        return a
    }
    a = md();
    return sd = pd(a, new Fc(2, 1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 19, 20, 23, 24, 26, 29))
}, J = function() {
    td || (td = Gc(wd()));
    return td
}, xd = function(a) {
    var b = J();
    b && (b = b.wb(), a.eid = 50 < b.length ? b.substring(0, 50) + "T" : b)
}, K = {
    UNLIMITED_ADSLOTS: {
        CONTROL: "44901218",
        NO_LIMIT: "44901217"
    },
    PERISCOPE_FOR_TARGETING: {
        CONTROL: "317150300",
        EXPERIMENT_ZERO_LATENCY: "317150301",
        EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE: "317150302",
        EXPERIMENT_ZL_NO_TARGETING: "317150305",
        EXPERIMENT_WAIT_NO_TARGETING: "317150306",
        CONTROL_REFERER_CLEANUP: "317150303",
        EXPERIMENT_REFERER_CLEANUP: "317150304"
    },
    ASYNC_FOR_OPERA_ANDROID: {
        CONTROL_ANDROID: "33895173",
        EXPERIMENT_ANDROID: "33895174",
        CONTROL_ANDROID_CHROME: "33895183",
        EXPERIMENT_ANDROID_CHROME: "33895184"
    },
    DEVICE_SENSORS: {
        CONTROL: "586900001",
        EXPERIMENT_ZERO_LATENCY: "586900002",
        EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL: "586900003"
    },
    SS: {
        COUNT_AD_FRAMES_ON_PAGE_CONTROL: "317150310",
        COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT: "317150311"
    },
    ADD_ADK2: {
        CONTROL: "33895400",
        EXPERIMENT: "33895401"
    },
    JS_RNG: {
        CONTROL: "42631002",
        EXPERIMENT: "42631003"
    },
    ALWAYS_USE_DELAYED_IMPRESSIONS: {
        CONTROL: "33895330",
        EXPERIMENT: "33895331"
    },
    PRERENDERING_DELAYED_IMPRESSION: {
        CONTROL: "33895332",
        EXPERIMENT: "33895333"
    },
    APPEND_AS_FOR_FORMAT_OVERRIDE: {
        CONTROL: "373855270",
        EXPERIMENT: "373855271"
    },
    SEND_LOAD_TIME_PINGBACKS: {
        EXPERIMENT: "947190536"
    },
    PERSISTENT_STATE: {
        CONTROL: "33895552",
        EXPERIMENT: "33895553",
        CONTROL_NO_AD_LIMIT: "33895554",
        EXPERIMENT_NO_AD_LIMIT: "33895555"
    },
    GLOBAL_CORRELATOR: {
        CONTROL: "42631034",
        EXPERIMENT: "42631035"
    },
    PERSIST_LANGUAGE: {
        CONTROL: "42631006",
        EXPERIMENT: "42631007"
    },
    ALWAYS_USE_HTTPS: {
        CONTROL: "575144603",
        EXPERIMENT: "575144604"
    },
    AUTO_WIDTH: {
        CONTROL: "33995340",
        EXPERIMENT: "33995341",
        CONTROL_ISOLATED: "33995342",
        EXPERIMENT_ISOLATED: "33995343"
    },
    RESPONSIVE_OPTIMIZATION: {
        CONTROL_320_100: "17415610",
        EXPERIMENT_320_100: "17415611"
    },
    RESPONSIVE_SHRINKING: {
        CONTROL: "17415615",
        EXPERIMENT: "17415616"
    },
    RESPONSIVE_MOBILE_ATF: {
        CONTROL: "17415612",
        EXPERIMENT_320_50: "17415613",
        EXPERIMENT_320_100: "17415614"
    },
    RESPONSIVE_IPHONE_OPT: {
        CONTROL: "17415604",
        EXPERIMENT_234_60_A: "17415605",
        EXPERIMENT_234_60_B: "17415606"
    },
    POSITION_FIXED: {
        CONTROL: "828064100",
        EXPERIMENT: "828064101"
    },
    VIGNETTE_UI_ALLOWANCE: {
        EXPERIMENT: 39071250
    },
    FLOATING_ADS: {
        CONTROL: "4091000",
        EXPERIMENT_100PX_HEIGHT: "4091001"
    },
    NMO_FLOATING_ADS: {
        CONTROL: "828064120",
        EXPERIMENT: "828064121"
    }
};
var yd = {
    google: 1,
    googlegroups: 1,
    gmail: 1,
    googlemail: 1,
    googleimages: 1,
    googleprint: 1
}, zd = function(a) {
    var b = a.google_page_location || a.google_page_url;
    "EMPTY" == b && (b = a.google_page_url);
    if (Sa ||!b)
        return !1;
    b = b.toString();
    0 == b.indexOf("http://") ? b = b.substring(7, b.length) : 0 == b.indexOf("https://") && (b = b.substring(8, b.length));
    a = b.indexOf("/");
    - 1 == a && (a = b.length);
    b = b.substring(0, a);
    b = b.split(".");
    a=!1;
    3 <= b.length && (a = b[b.length - 3]in yd);
    2 <= b.length && (a = a || b[b.length - 2]in yd);
    return a
};
var Ad = function(a, b, c) {
    c || (c = Ua ? "https" : "http");
    return [c, "://", a, b].join("")
};
var Bd = Array.prototype, Cd = Bd.indexOf ? function(a, b, c) {
    return Bd.indexOf.call(a, b, c)
}
: function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (q(a))
        return q(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return - 1
}, Dd = Bd.forEach ? function(a, b, c) {
    Bd.forEach.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = q(a) ? a.split("") : a, f = 0; f < d; f++)
        f in e && b.call(c, e[f], f, a)
}, Ed = Bd.map ? function(a, b, c) {
    return Bd.map.call(a, b, c)
}
: function(a, b, c) {
    for (var d = a.length, e = Array(d), f =
    q(a) ? a.split("") : a, g = 0; g < d; g++)
        g in f && (e[g] = b.call(c, f[g], g, a));
    return e
}, Fd = function(a, b) {
    return 0 <= Cd(a, b)
}, Gd = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
};
var L = function(a, b) {
    this.x = n(a) ? a : 0;
    this.y = n(b) ? b : 0
};
L.prototype.clone = function() {
    return new L(this.x, this.y)
};
var Hd = function(a, b) {
    var c = a.x - b.x, d = a.y - b.y;
    return Math.sqrt(c * c + d * d)
}, Id = function(a, b) {
    return new L(a.x - b.x, a.y - b.y)
}, Jd = function(a, b) {
    return new L(a.x + b.x, a.y + b.y)
};
L.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
L.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
L.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
L.prototype.translate = function(a, b) {
    a instanceof L ? (this.x += a.x, this.y += a.y) : (this.x += a, fa(b) && (this.y += b));
    return this
};
L.prototype.scale = function(a, b) {
    var c = fa(b) ? b: a;
    this.x*=a;
    this.y*=c;
    return this
};
var M = function(a, b) {
    this.width = a;
    this.height = b
};
M.prototype.clone = function() {
    return new M(this.width, this.height)
};
M.prototype.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
M.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
M.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
M.prototype.scale = function(a, b) {
    var c = fa(b) ? b: a;
    this.width*=a;
    this.height*=c;
    return this
};
var Kd = function(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}, Ld = function(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
}, Md = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Nd = function(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var f = 0; f < Md.length; f++)
            c = Md[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}, Od = function(a) {
    var b = arguments.length;
    if (1 == b && p(arguments[0]))
        return Od.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]]=!0;
    return c
};
var Pd = function() {
    var a = m.navigator;
    return a && (a = a.userAgent) ? a : ""
}, Qd = Pd(), Rd = function(a) {
    var b = Qd;
    return - 1 != b.indexOf(a)
}, Sd = function(a) {
    var b = Qd;
    return - 1 != b.toLowerCase().indexOf(a.toLowerCase())
};
var Td = function() {
    return Rd("Opera") || Rd("OPR")
}, Ud = function() {
    return Rd("Trident") || Rd("MSIE")
}, Vd = Td, Wd = Ud;
var Xd = Vd(), N = Wd(), Yd = Rd("Gecko")&&!Sd("WebKit")&&!(Rd("Trident") || Rd("MSIE")), Zd = Sd("WebKit"), $d = Zd && Rd("Mobile"), ae = Rd("Macintosh"), be = function() {
    var a = m.navigator || null;
    return !!a&&-1 != (a.appVersion || "").indexOf("X11")
}, ce = be(), de = Rd("Android"), fe = function() {
    var a = "", b;
    if (Xd && m.opera)
        return a = m.opera.version, "function" == da(a) ? a() : a;
    Yd ? b = /rv\:([^\);]+)(\)|;)/ : N ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Zd && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(Qd)) ? a[1] : "");
    return N && (b = ee(), b > parseFloat(a)) ? String(b) :
    a
}, ee = function() {
    var a = m.document;
    return a ? a.documentMode : void 0
}, ge = fe(), he = {}, ie = function(a) {
    return he[a] || (he[a] = 0 <= tb(ge, a))
}, je = function() {
    var a = m.document;
    if (a && N) {
        var b = ee();
        return b || ("CSS1Compat" == a.compatMode ? parseInt(ge, 10) : 5)
    }
}();
var ke=!N || N && 9 <= je;
!Yd&&!N || N && N && 9 <= je || Yd && ie("1.9.1");
N && ie("9");
var le = N || Xd || Zd;
var oe = function(a) {
    return a ? new me(ne(a)) : Ya || (Ya = new me)
}, qe = function(a, b) {
    Kd(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in pe ? a.setAttribute(pe[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}, pe = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
}, re = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new M(a.clientWidth, a.clientHeight)
}, se = function(a) {
    var b = Zd || "CSS1Compat" != a.compatMode ? a.body || a.documentElement: a.documentElement;
    a = a.parentWindow || a.defaultView;
    return N && ie("10") && a.pageYOffset != b.scrollTop ? new L(b.scrollLeft, b.scrollTop) : new L(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}, te = function(a) {
    return a ? a.parentWindow || a.defaultView : window
}, ve = function(a, b, c) {
    return ue(document,
    arguments)
}, ue = function(a, b) {
    var c = b[0], d = b[1];
    if (!ke && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', hb(d.name), '"');
        if (d.type) {
            c.push(' type="', hb(d.type), '"');
            var e = {};
            Nd(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (q(d) ? c.className = d : p(d) ? c.className = d.join(" ") : qe(c, d));
    2 < b.length && we(a, c, b, 2);
    return c
}, we = function(a, b, c, d) {
    function e(c) {
        c && b.appendChild(q(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !ea(f) || ga(f) && 0 < f.nodeType ? e(f) : Dd(xe(f) ?
        Gd(f) : f, e)
    }
}, ye = function(a) {
    if (1 != a.nodeType)
        return !1;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
        return !1
    }
    return !0
}, ze = function(a, b) {
    a.appendChild(b)
}, Ae = function(a, b) {
    we(ne(a), a, arguments, 1)
}, Be = function(a) {
    return a &&
    a.parentNode ? a.parentNode.removeChild(a) : null
}, Ce = function(a) {
    var b;
    if (le && (b = N && ie("9")&&!ie("10"), !(b && m.SVGElement && a instanceof m.SVGElement) && (b = a.parentElement)))
        return b;
    b = a.parentNode;
    return ga(b) && 1 == b.nodeType ? b : null
}, De = function(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
}, ne = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument ||
    a.document
}, xe = function(a) {
    if (a && "number" == typeof a.length) {
        if (ga(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if ("function" == da(a))
            return "function" == typeof a.item
    }
    return !1
}, me = function(a) {
    this.D = a || m.document || document
};
me.prototype.createElement = function(a) {
    return this.D.createElement(a)
};
me.prototype.createTextNode = function(a) {
    return this.D.createTextNode(String(a))
};
me.prototype.md = function() {
    return "CSS1Compat" == this.D.compatMode
};
me.prototype.vb = function() {
    return se(this.D)
};
me.prototype.appendChild = ze;
me.prototype.append = Ae;
me.prototype.canHaveChildren = ye;
me.prototype.removeNode = Be;
me.prototype.contains = De;
var Ee = function() {
    return Zd ? "Webkit" : Yd ? "Moz" : N ? "ms" : Xd ? "O" : null
}, Fe = function() {
    return Zd ? "-webkit" : Yd ? "-moz" : N ? "-ms" : Xd ? "-o" : null
};
var O = function(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
O.prototype.clone = function() {
    return new O(this.top, this.right, this.bottom, this.left)
};
O.prototype.contains = function(a) {
    return this && a ? a instanceof O ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
O.prototype.expand = function(a, b, c, d) {
    ga(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
O.prototype.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
O.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
O.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
O.prototype.translate = function(a, b) {
    a instanceof L ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, fa(b) && (this.top += b, this.bottom += b));
    return this
};
O.prototype.scale = function(a, b) {
    var c = fa(b) ? b: a;
    this.left*=a;
    this.right*=a;
    this.top*=c;
    this.bottom*=c;
    return this
};
var P = function(a, b, c) {
    if (q(b))
        Ge(a, c, b);
    else 
        for (var d in b)
            Ge(a, b[d], d)
}, Ge = function(a, b, c) {
    (c = He(a, c)) && (a.style[c] = b)
}, He = function(a, b) {
    var c = ub(b);
    if (void 0 === a.style[c]) {
        var d = Ee() + vb(c);
        if (void 0 !== a.style[d])
            return d
    }
    return c
}, Ie = function(a, b) {
    var c = ub(b);
    return void 0 === a.style[c] && (c = Ee() + vb(c), void 0 !== a.style[c]) ? Fe() + "-" + b : b
}, Le = function(a, b) {
    var c = a.style[ub(b)];
    return "undefined" !== typeof c ? c : a.style[He(a, b)] || ""
}, Me = function(a, b) {
    var c = ne(a);
    return c.defaultView && c.defaultView.getComputedStyle &&
    (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}, Ne = function(a, b) {
    return Me(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}, Oe = function(a) {
    var b = Ie(a, "transform");
    return Ne(a, b) || Ne(a, "transform")
}, Qe = function(a, b, c) {
    var d, e = Yd && (ae || ce) && ie("1.9");
    b instanceof L ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Pe(d, e);
    a.style.top = Pe(b, e)
}, Re = function(a) {
    a = a ? ne(a) : document;
    return !N || N && 9 <= je || oe(a).md() ? a.documentElement : a.body
}, Se = function(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    N && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}, Te = function(a) {
    if (N&&!(N && 8 <= je))
        return a.offsetParent;
    var b = ne(a), c = Ne(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Ne(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" ==
        c || "relative" == c))
            return a;
    return null
}, Ue = function(a) {
    var b, c = ne(a), d = Ne(a, "position"), e = Yd && c.getBoxObjectFor&&!a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new L(0, 0), g = Re(c);
    if (a == g)
        return f;
    if (a.getBoundingClientRect)
        b = Se(a), a = oe(c).vb(), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor&&!e)
        b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x +=
            b.clientLeft || 0, f.y += b.clientTop || 0);
            if (Zd && "fixed" == Ne(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        }
        while (b && b != a);
        if (Xd || Zd && "absolute" == d)
            f.y -= c.body.offsetTop;
        for (b = a; (b = Te(b)) && b != c.body && b != g;)
            f.x -= b.scrollLeft, Xd && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}, We = function(a, b) {
    var c = new L(0, 0), d = te(ne(a)), e = a;
    do {
        var f = d == b ? Ue(e): Ve(e);
        c.x += f.x;
        c.y += f.y
    }
    while (d && d != b && (e = d.frameElement) && (d = d.parent));
    return c
}, Ye = function(a, b) {
    var c = Xe(a), d = Xe(b);
    return new L(c.x -
    d.x, c.y - d.y)
}, Ve = function(a) {
    var b;
    if (a.getBoundingClientRect)
        b = Se(a), b = new L(b.left, b.top);
    else {
        b = oe(a).vb();
        var c = Ue(a);
        b = new L(c.x - b.x, c.y - b.y)
    }
    return Yd&&!ie(12) ? Jd(b, Ze(a)) : b
}, Xe = function(a) {
    if (1 == a.nodeType)
        return Ve(a);
    var b = "function" == da(a.getBrowserEvent), c = a, d = a;
    a.targetTouches && a.targetTouches.length ? d = a.targetTouches[0] : b && c.getBrowserEvent().targetTouches && c.getBrowserEvent().targetTouches.length && (d = c.getBrowserEvent().targetTouches[0]);
    return new L(d.clientX, d.clientY)
}, bf = function(a,
b, c) {
    if (b instanceof M)
        c = b.height, b = b.width;
    else if (void 0 == c)
        throw Error("missing height argument");
    $e(a, b);
    af(a, c)
}, Pe = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}, af = function(a, b) {
    a.style.height = Pe(b, !0)
}, $e = function(a, b) {
    a.style.width = Pe(b, !0)
}, cf = function(a, b) {
    if ("none" != Ne(b, "display"))
        return a(b);
    var c = b.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var g = a(b);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return g
}, df = function(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = Zd&&!b&&!c;
    return n(b)&&!d ||!a.getBoundingClientRect ? new M(b, c) : (a = Se(a), new M(a.right - a.left, a.bottom - a.top))
}, ef = function(a) {
    var b = a.style;
    a = "";
    "opacity"in b ? a = b.opacity : "MozOpacity"in b ? a = b.MozOpacity : "filter"in b && (b = b.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a = String(b[1] / 100));
    return "" == a ? a : Number(a)
}, ff = function(a, b) {
    var c = a.style;
    "opacity"in c ? c.opacity = b : "MozOpacity"in c ? c.MozOpacity = b : "filter"in c && (c.filter = "" === b ? "" : "alpha(opacity=" +
    100 * b + ")")
}, gf = function(a, b, c, d) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var e = a.style[c], f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
}, hf = function(a, b) {
    var c = a.currentStyle ? a.currentStyle[b]: null;
    return c ? gf(a, c, "left", "pixelLeft") : 0
}, jf = function(a, b) {
    if (N) {
        var c = hf(a, b + "Left"), d = hf(a, b + "Right"), e = hf(a, b + "Top"), f = hf(a, b + "Bottom");
        return new O(e, d, f, c)
    }
    c = Me(a, b + "Left");
    d = Me(a, b + "Right");
    e = Me(a, b + "Top");
    f = Me(a, b + "Bottom");
    return new O(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
}, kf = function(a) {
    var b = ne(a), c = "";
    if (b.body.createTextRange && De(b, a)) {
        b = b.body.createTextRange();
        b.moveToElementText(a);
        try {
            c = b.queryCommandValue("FontName")
        } catch (d) {
            c = ""
        }
    }
    c || (c = Ne(a, "fontFamily"));
    a = c.split(",");
    1 < a.length && (c = a[0]);
    return mb(c, "\"'")
}, lf = /[^\d]+$/, mf = function(a) {
    return (a = a.match(lf)) && a[0] || null
}, nf = {
    cm: 1,
    "in": 1,
    mm: 1,
    pc: 1,
    pt: 1
}, of = {
    em: 1,
    ex: 1
}, pf = function(a) {
    var b = Ne(a, "fontSize"), c = mf(b);
    if (b && "px" == c)
        return parseInt(b,
        10);
    if (N) {
        if (c in nf)
            return gf(a, b, "left", "pixelLeft");
        if (a.parentNode && 1 == a.parentNode.nodeType && c in of)
            return a = a.parentNode, c = Ne(a, "fontSize"), gf(a, b == c ? "1em" : b, "left", "pixelLeft")
    }
    c = ve("span", {
        style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
    });
    ze(a, c);
    b = c.offsetHeight;
    Be(c);
    return b
}, qf = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/, Ze = function(a) {
    a = Oe(a);
    return a ? (a = a.match(qf)) ? new L(parseFloat(a[1]),
    parseFloat(a[2])) : new L(0, 0) : new L(0, 0)
};
var rf = function(a) {
    var b=!1, c;
    return function() {
        b || (c = a(), b=!0);
        return c
    }
};
var Q = function() {};
Q.serializeExpandableAdSlotParams = function(a, b, c, d, e, f, g, h) {
    return {
        a: a,
        b: b,
        c: c,
        d: d,
        e: e,
        f: f,
        g: g,
        h: h
    }
};
Q.deserializeExpandableAdSlotParams = function(a) {
    return {
        id: a.a,
        url: a.b,
        width: a.c,
        height: a.d,
        channelName: a.e,
        pubWindow: a.f,
        asyncIframeId: a.g,
        expandableAdSlotId: a.h
    }
};
Q.XPC_SERVICE_NAME = "expandable_ad";
Q.URI_PARAM_XPC_CHANNEL = "xpc";
Q.URI_PARAM_PEER_HOSTNAME = "p";
Q.buildPollingUri = function(a) {
    a = a || B.location.protocol + "//" + B.location.host;
    return a + "/robots.txt"
};
Q.Hc = function(a, b) {
    wb(b.match(/^[a-zA-Z]+$/));
    var c = "[?&#]" + b + "=([^&#]*)";
    return (c = a.match(c)) ? decodeURIComponent(c[1]) : void 0
};
Q.getXpcUrlParams = function(a) {
    return {
        channelName: Q.Hc(a, Q.URI_PARAM_XPC_CHANNEL),
        peerHostname: Q.Hc(a, Q.URI_PARAM_PEER_HOSTNAME)
    }
};
Q.isMobileUserAgent = function() {
    var a = Q.getCreativeToolsetParams().MOBILE_BROWSER_CLASS;
    if (null != a && 0 <= a)
        return 3 != a;
    a = C.navigator.userAgent;
    return $d || de || Yd && (/Mobile/.test(a) || /Tablet/.test(a)) || N && /IEMobile/.test(a)
};
Q.getCreativeToolsetParams = function() {
    return C.CREATIVE_TOOLSET_PARAMS || {}
};
Q.getSafeCreativeToolsetParams = function() {
    var a = Q.getCreativeToolsetParams();
    return {
        SAMPLE_VIEWPORT_SIZES: a.SAMPLE_VIEWPORT_SIZES,
        JS_EXPERIMENT_LABELS: a.JS_EXPERIMENT_LABELS,
        MOBILE_BROWSER_CLASS: a.MOBILE_BROWSER_CLASS
    }
};
Q.encodeExpansionParams = function(a, b) {
    return [b ? "google_debug&": "", Q.URI_PARAM_XPC_CHANNEL, "=", a, "&", Q.URI_PARAM_PEER_HOSTNAME, "=", encodeURIComponent(B.location.protocol), "//", encodeURIComponent(B.location.host)].join("")
};
Q.addExpansionParamsToUrl = function(a, b, c, d) {
    d = d ? encodeURIComponent : function(a) {
        return a
    };
    return a + ( - 1 == a.indexOf(d("?")) ? d("?") : d("&")) + d(Q.encodeExpansionParams(b, c))
};
Q.logger = null;
Q.throwError = function(a, b) {
    var c = b instanceof Error ? b: Error(b);
    Nc(a, c);
    throw c;
};
var sf = function(a, b) {
    if (a) {
        var c = a.match(b + "=([^&]+)");
        if (c && 2 == c.length)
            return c[1]
    }
    return ""
};
var tf = function(a, b, c) {
    b = b || C;
    a && b.top != b && (b = b.top);
    try {
        return b.document&&!b.document.body ? new M( - 1, - 1) : c ? new M(b.innerWidth, b.innerHeight) : re(b || window)
    } catch (d) {
        return new M( - 12245933, - 12245933)
    }
}, uf = function(a) {
    if (a == a.top)
        return 0;
    var b = [];
    b.push(a.document.URL);
    a.name && b.push(a.name);
    a = tf(!1, a, !1);
    b.push(a.width.toString());
    b.push(a.height.toString());
    return Zb(b.join(""))
}, vf = function(a, b) {
    if (Ob("msie")&&!window.opera) {
        var c = function() {
            "complete" == a.readyState && b(null)
        };
        x(a, "readystatechange",
        Wc("osd::util::rschange", c), void 0)
    } else 
        x(a, "load", Wc("osd::util::load", b), void 0)
}, wf = function() {
    var a = 0;
    !n(C.postMessage) && (a|=1);
    return a
};
var R = function(a, b) {
    this.hb = a;
    this.T = b && b.T ? b.T : [];
    this.Cb = b ? b.Cb : !1;
    this.Ua = b && b.Ua ? b.Ua : 0;
    this.nb = b ? b.nb : "";
    this.t = b && b.t ? b.t : [];
    this.kb = null;
    this.Oc=!1;
    if (b) {
        var c;
        for (c = 0; c < this.T.length; ++c)
            this.T[c].push("true");
        for (c = 0; c < this.t.length; ++c)
            this.t[c].isFromCopiedInstance=!0
    }
}, xf = "", yf = 0, zf = 0, Af = function(a, b, c, d) {
    xf = Ad(b, "/pagead/osd.js", a ? "https" : "http");
    yf = c;
    zf = d
};
Af(Ua, Xa(!1), ra, sa);
R.prototype.Qd = function(a, b) {
    var c = this.T, d = this.hb[b];
    d && (d = d.orig_callback || d, this.hb[b] = function(b) {
        if (b && 0 < b.length) {
            var f = 1 < b.length ? b[1].url: null, g = b[0].log_info || null, h = b[0].activeview_url || null, k = b[0].activeview_js_enabled || null, l = b[0].activeview_js_immediate_enabled || null;
            c.push([a, kb(b[0].url), f, g, null, h, k, l])
        }
        d(b)
    }, this.hb[b].orig_callback = d)
};
R.prototype.rd = function() {
    this.Cb || (Lb(F()), Hb(xf), this.Cb=!0)
};
R.prototype.sb = function(a, b, c) {
    var d = this.T;
    if (0 < d.length)
        for (var e = a.document.getElementsByTagName("a"), f = 0; f < e.length; f++)
            for (var g = 0; g < d.length; g++) {
                var h = d[g][1];
                if (0 <= e[f].href.indexOf(h)) {
                    h = e[f].parentNode;
                    if (d[g][2])
                        for (var k = h, l = 0; 4 > l; l++) {
                            if (0 <= k.innerHTML.indexOf(d[g][2])) {
                                h = k;
                                break
                            }
                            k = k.parentNode
                        }
                        var k=!0, l = d[g][3], E = d[g][5], y = "true" == d[g][6], z = "true" == d[g][7], V = "true" == d[g][8];
                        b(h, d[g][0], c || 0, k, l, void 0, E, y, z, V);
                        d.splice(g, 1);
                        break
                }
            }
    if (0 < d.length && a != ad())
        try {
            this.sb(a.parent, b, c)
    } catch (pa) {}
    for (f =
    0; f < d.length; ++f)
        a = d[f], "true" == a[6] && this.Mb("osd2", a[3]), "true" == a[7] && this.Mb("osdim", a[3])
};
R.prototype.Mb = function(a, b) {
    if (a && b) {
        var c = ["//"];
        c.push("pagead2.googlesyndication.com");
        c.push("/activeview");
        c.push("?id=" + a);
        c.push("&r=j");
        c.push("&avi=" + b);
        Mb(C, c.join(""))
    }
};
R.prototype.getNewBlocks = function(a, b) {
    b && this.sb(this.hb, a, 1);
    for (var c = this.t.length, d = 0; d < c; d++) {
        var e = this.t[d];
        !e.Xc && e.$b && (a(e.$b, e.cc, e.Ze, e.ac, "", e.Re, "", !1, !1, e.isFromCopiedInstance), e.Xc=!0)
    }
    b && (this.kb = a)
};
R.prototype.getRegisteredAdblockUrls = function() {
    for (var a = [], b = this.t.length, c = 0; c < b; c++) {
        var d = this.t[c];
        a.push(d.cc)
    }
    return a
};
R.prototype.setupOse = function(a) {
    if (this.getOseId())
        return this.getOseId();
    var b = window.google_enable_ose, c;
    !0 === b ? c = 2 : !1 !== b && (c = Vb([0], zf), null == c && ((c = Vb([2], yf)) || (c = 3)));
    if (!c)
        return 0;
    this.Ua = c;
    this.nb = String(a || 0);
    return this.getOseId()
};
R.prototype.getOseId = function() {
    return window ? this.Ua : - 1
};
R.prototype.getCorrelator = function() {
    return this.nb
};
R.prototype.numBlocks = function() {
    return this.T.length + this.t.length
};
R.prototype.registerAdBlock = function(a, b, c, d, e, f) {
    var g = null;
    e && f && (g = {
        width: e,
        height: f
    });
    if (this.kb && d)
        this.kb(d, a, b, !0, "", g, "", !1, !1, !1);
    else {
        if ("js" == c)
            this.Qd(a, "google_ad_request_done");
        else {
            var h = new Bf(a, b, c, d, g);
            this.t.push(h);
            d && (a = function() {
                h.ac=!0
            }, vf(d, a))
        }
        this.rd()
    }
};
R.prototype.unloadAdBlock = function(a, b) {
    n(window.Goog_Osd_UnloadAdBlock) && Goog_Osd_UnloadAdBlock(a, b)
};
R.prototype.setUpForcePeriscope = function() {
    window.google_enable_ose_periscope && (this.Oc=!0)
};
R.prototype.shouldForcePeriscope = function() {
    return this.Oc
};
var Cf = function() {
    var a = F(), b = a.__google_ad_urls;
    if (!b)
        return a.__google_ad_urls = new R(a);
    try {
        if (0 <= b.getOseId())
            return b
    } catch (c) {}
    return a.__google_ad_urls = new R(a, b)
}, Bf = function(a, b, c, d, e) {
    this.cc = a;
    this.Ze = b;
    this.ff = c;
    this.$b = d;
    this.Xc = this.ac=!1;
    this.Re = e;
    this.isFromCopiedInstance=!1
};
s("Goog_AdSense_getAdAdapterInstance", Cf);
s("Goog_AdSense_OsdAdapter", R);
s("Goog_AdSense_OsdAdapter.prototype.numBlocks", R.prototype.numBlocks);
s("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", R.prototype.getNewBlocks);
s("Goog_AdSense_OsdAdapter.prototype.getOseId", R.prototype.getOseId);
s("Goog_AdSense_OsdAdapter.prototype.getCorrelator", R.prototype.getCorrelator);
s("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", R.prototype.getRegisteredAdblockUrls);
s("Goog_AdSense_OsdAdapter.prototype.setupOse", R.prototype.setupOse);
s("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", R.prototype.registerAdBlock);
s("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", R.prototype.setUpForcePeriscope);
s("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", R.prototype.shouldForcePeriscope);
s("Goog_AdSense_OsdAdapter.prototype.unloadAdBlock", R.prototype.unloadAdBlock);
var Df = function(a) {
    var b = parseInt(a[10], 10);
    a = parseInt(a[11], 10);
    return 0 < b && 0 < a ? new M(b, a) : new M( - 12245933, - 12245933)
}, Ef = function(a, b, c) {
    var d = parseInt(a[6], 10), e = parseInt(a[7], 10), f = parseInt(a[8], 10);
    a = parseInt(a[9], 10);
    return 0 < d && 0 < e && 0 < f && 0 < a && (b = Math.abs(f - b), c = Math.abs(a - c), 10 >= b + c) ? new L(d, e) : new L( - 12245933, - 12245933)
};
var Ff = null, Gf = function(a) {
    for (var b = $b(), c = 0; c < b.length; c++)
        try {
            var d = b[c].frames.google_esf;
            if (d && (!a || v(d)))
                return d
    } catch (e) {}
    return null
}, Hf = function() {
    Ff || (Ff = Gf(!1));
    return Ff
};
var If = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0
};
var Jf = /^([0-9.]+)px$/, Kf = /^([0-9.]+)$/, Lf = function(a, b) {
    var c = Kf, d = Jf;
    return !((c.test(b.google_ad_width) || d.test(a.style.width)) && (c.test(b.google_ad_height) || d.test(a.style.height)))
}, Nf = function(a, b, c) {
    c = ec(a, c);
    a.style.width = c.width;
    a.style.height = c.height;
    Mf(c, b)
}, Of = function(a) {
    return (a = Jf.exec(a)) ? Number(a[1]) : null
}, Pf = function(a) {
    return (a = Of(a)) ? Math.round(a) : null
}, Mf = function(a, b) {
    var c = ["width", "height"];
    Qf(a, b, c)
}, Qf = function(a, b, c) {
    for (var d = 0; d < c.length; d++) {
        var e = "google_ad_" + c[d];
        if (!b.hasOwnProperty(e)) {
            var f =
            Pf(a[c[d]]);
            null != f && (b[e] = f)
        }
    }
}, Rf = function(a) {
    var b = a.style.width;
    a.style.width = "100%";
    var c = a.offsetWidth;
    a.style.width = b;
    return c
}, Sf = function(a, b, c) {
    var d = a.style;
    Qf(d, b, ["height"]);
    var e = Rf(a), f = Pf(d.width), g = Pf(d.height);
    if (!g ||!f || 50 > g || 120 > e || If[f + "x" + g])
        return Qf(d, b, ["width"]), !1;
    e = Math.min(1200, e);
    300 < g && (e = Math.min(300, e));
    if (e <= f)
        return Qf(d, b, ["width"]), !1;
    c ? (b.google_ad_width = e, b.google_original_width = f, a.style.width = e + "px") : (b.google_ad_width = f, b.google_available_width = e);
    return !0
};
var Tf = Od("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var Vf = function() {
    this.Tb = "";
    this.Fe = Uf
};
Vf.prototype.r=!0;
Vf.prototype.o = function() {
    return this.Tb
};
Vf.prototype.toString = function() {
    return "Const{" + this.Tb + "}"
};
var Wf = function(a) {
    return a instanceof Vf && a.constructor === Vf && a.Fe === Uf ? a.Tb : "type_error:Const"
}, Uf = {};
var Yf = function() {
    this.Jb = "";
    this.De = Xf
};
Yf.prototype.r=!0;
var Xf = {}, Zf = function(a) {
    wb(!/[<>]/.test(a), "Forbidden characters in style string: " + a)
};
Yf.prototype.o = function() {
    return this.Jb
};
var $f = function(a) {
    var b = new Yf;
    b.Jb = a;
    return b
}, ag = $f(""), cg = function(a) {
    var b = "", c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        null != d && (d instanceof Vf ? (d = Wf(d), wb(!/[{;}]/.test(d), "Value does not allow [{;}].")) : bg.test(d) || (d = "zClosurez"), b += c + ":" + d + ";")
    }
    if (!b)
        return ag;
    Zf(b);
    return $f(b)
}, bg = /^[-.%_!# a-zA-Z0-9]+$/;
var eg = function() {
    this.ha = "";
    this.Ee = dg
};
eg.prototype.r=!0;
eg.prototype.o = function() {
    return this.ha
};
eg.prototype.$=!0;
eg.prototype.J = function() {
    return 1
};
var dg = {};
var gg = function() {
    this.Od = "";
    this.Ge = fg
};
gg.prototype.r=!0;
gg.prototype.o = function() {
    return this.Od
};
gg.prototype.$=!0;
gg.prototype.J = function() {
    return 1
};
var fg = {};
var ig = function() {
    this.ha = "";
    this.Ce = hg;
    this.yc = null
};
ig.prototype.$=!0;
ig.prototype.J = function() {
    return this.yc
};
ig.prototype.r=!0;
ig.prototype.o = function() {
    return this.ha
};
var jg = function(a) {
    return a instanceof ig && a.constructor === ig && a.Ce === hg ? a.ha : "type_error:SafeHtml"
}, lg = function(a) {
    if (a instanceof ig)
        return a;
    var b = null;
    a.$ && (b = a.J());
    a = a.r ? a.o() : String(a);
    return kg(hb(a), b)
}, mg = /^[a-zA-Z0-9-]+$/, ng = Od("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"), og = Od("link", "script", "style"), qg = function(a, b, c) {
    if (!mg.test(a))
        throw Error("Invalid tag name <" + a + ">.");
    if (a.toLowerCase()in og)
        throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    return pg(a,
    null, b, c)
}, pg = function(a, b, c, d) {
    var e = null, f = "<" + a;
    b && (f += " " + b);
    if (c)
        for (var g in c) {
            if (!mg.test(g))
                throw Error('Invalid attribute name "' + g + '".');
                b = c[g];
                null != b && (f += " " + rg(a, g, b))
        }
    n(d) ? p(d) || (d = [d]) : d = [];
    !0 === Tf[a.toLowerCase()] ? f += ">" : (e = sg(d), f += ">" + jg(e) + "</" + a + ">", e = e.J());
    (a = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
    return kg(f, e)
}, rg = function(a, b, c) {
    if (c instanceof Vf)
        c = Wf(c);
    else if ("style" == b.toLowerCase())
        c = tg(c);
    else {
        if (/^on/i.test(b))
            throw Error('Attribute "' + b + '" requires goog.string.Const value, "' +
            c + '" given.');
        if (b.toLowerCase()in ng)
            if (c instanceof gg)
                c = c instanceof gg && c.constructor === gg && c.Ge === fg ? c.Od : "type_error:TrustedResourceUrl";
            else if (c instanceof eg)
                c = c instanceof eg && c.constructor === eg && c.Ee === dg ? c.ha : "type_error:SafeUrl";
            else 
                throw Error('Attribute "' + b + '" on tag "' + a + '" requires goog.html.SafeUrl or goog.string.Const value, "' + c + '" given.');
    }
    c.r && (c = c.o());
    return b + '="' + hb(String(c)) + '"'
}, tg = function(a) {
    if (!ga(a))
        throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
        typeof a + " given: " + a);
    a instanceof Yf || (a = cg(a));
    return a instanceof Yf && a.constructor === Yf && a.De === Xf ? a.Jb : "type_error:SafeStyle"
}, sg = function(a) {
    var b = 0, c = "", d = function(a) {
        p(a) ? Dd(a, d) : (a = lg(a), c += jg(a), a = a.J(), 0 == b ? b = a : 0 != a && b != a && (b = null))
    };
    Dd(arguments, d);
    return kg(c, b)
}, hg = {}, kg = function(a, b) {
    var c = new ig;
    c.ha = a;
    c.yc = b;
    return c
};
kg("", 0);
var ug = function(a, b) {
    a.innerHTML = jg(b)
};
var wg = function(a, b) {
    p(b) || (b = [b]);
    var c = Ed(b, function(a) {
        return q(a) ? a : a = a.property + " " + a.duration + "s " + a.timing + " " + a.delay + "s"
    });
    vg(a, c.join(","))
}, xg = rf(function() {
    if (N)
        return ie("10.0");
    var a = document.createElement("div"), b = Fe(), c = {
        transition: "opacity 1s linear"
    };
    b && (c[b + "-transition"] = "opacity 1s linear");
    ug(a, qg("div", {
        style: c
    }));
    a = a.firstChild;
    return "" != Le(a, "transition")
}), vg = function(a, b) {
    P(a, "transition", b)
};
var yg = function(a) {
    if (/^\s*$/.test(a))
        return !1;
    var b = /\\["\\\/bfnrtu]/g, c = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, d = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, e = /^[\],:{}\s\u2028\u2029]*$/;
    return e.test(a.replace(b, "@").replace(c, "]").replace(d, ""))
}, zg = function(a) {
    a = String(a);
    if (yg(a))
        try {
            return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
}, Ag = function(a) {
    this.Ya = a
};
Ag.prototype.serialize = function(a) {
    var b = [];
    this.bb(a, b);
    return b.join("")
};
Ag.prototype.bb = function(a, b) {
    switch (typeof a) {
    case "string":
        this.V(a, b);
        break;
    case "number":
        this.xa(a, b);
        break;
    case "boolean":
        b.push(a);
        break;
    case "undefined":
        b.push("null");
        break;
    case "object":
        if (null == a) {
            b.push("null");
            break
        }
        if (p(a)) {
            this.be(a, b);
            break
        }
        this.ya(a, b);
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof a);
    }
};
var Bg = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, Cg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
Ag.prototype.V = function(a, b) {
    b.push('"', a.replace(Cg, function(a) {
        if (a in Bg)
            return Bg[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return Bg[a] = e + b.toString(16)
    }), '"')
};
Ag.prototype.xa = function(a, b) {
    b.push(isFinite(a)&&!isNaN(a) ? a : "null")
};
Ag.prototype.be = function(a, b) {
    var c = a.length;
    b.push("[");
    for (var d = "", e = 0; e < c; e++)
        b.push(d), d = a[e], this.bb(this.Ya ? this.Ya.call(a, String(e), d) : d, b), d = ",";
    b.push("]")
};
Ag.prototype.ya = function(a, b) {
    b.push("{");
    var c = "", d;
    for (d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
            var e = a[d];
            "function" != typeof e && (b.push(c), this.V(d, b), b.push(":"), this.bb(this.Ya ? this.Ya.call(a, d, e) : e, b), c = ",")
        }
    b.push("}")
};
var Dg = {
    "http://googleads.g.doubleclick.net": !0,
    "http://pagead2.googlesyndication.com": !0,
    "https://googleads.g.doubleclick.net": !0,
    "https://pagead2.googlesyndication.com": !0
}, Eg = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return a.clientHeight
}, Fg = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return a.clientWidth
}, Gg = function(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return a.offsetHeight
}, Hg = function(a) {
    return void 0 !==
    a.pageYOffset ? a.pageYOffset : (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop
}, Ig = function(a) {
    return a.innerHeight >= a.innerWidth
}, Jg = function(a) {
    a = Fg(a);
    return 320 <= a && 420 >= a
}, Kg = function(a) {
    var b = Fg(a);
    a = a.innerWidth;
    return .05 > Math.abs(b / a - 1)
}, Lg = function(a) {
    a = a.google_reactive_ad_format;
    return Ld(pc, a) ? "" + a : null
}, Mg = function(a) {
    var b = {};
    if (a && a.key_value) {
        a = a.key_value;
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.key && d.value && (b[d.key] = d.value)
        }
    }
    return b
};
var Ng = {
    TAG_NAME: "google_instream_tag_name",
    CLASS_NAMES: "google_instream_class_names",
    CONTAINER_CSS_STYLING: "google_instream_ccss",
    PAGE_URL: "google_instream_page",
    AD_SLOT_NAME: "google_ad_slot",
    INSERTION_INDEX: "google_instream_index",
    FILTER_FOR_ARTICLES_BELOW_FOLD: "google_instream_below_fold"
};
var Og = function(a) {
    this.topWindow = a;
    this.zd = {};
    this.ed()
};
Og.prototype.ed = function() {
    this.ja(this.zd);
    var a = Wc("ras::hdlr", r(this.Ld, this));
    x(this.topWindow, "message", a, void 0)
};
Og.prototype.Ld = function(a) {
    if (a) {
        var b, c;
        try {
            if (!Dg[a.origin])
                return;
            c = (b = zg(a.data)) && b.msg_type
        } catch (d) {
            return 
        }(c = this.zd[c]) && c.call(this, b, a)
    }
};
var Pg = function(a, b, c, d, e) {
    Og.call(this, a);
    this.za = b;
    this.oc = c;
    this.kc = d;
    this.jc = e
};
t(Pg, Og);
Pg.prototype.Zb = function(a, b) {
    if (b.source === this.za.contentWindow) {
        var c = Mg(a), d = Qg(this.za, this.oc)[0];
        Rg(d, this.kc, this.jc, c)
    }
};
Pg.prototype.Vd = function(a, b) {
    if (b.source === this.za.contentWindow) {
        var c = Mg(a), d = parseInt(c.r_nw, 10), e = parseInt(c.r_nh, 10), f = c.r_str, g = Qg(this.za, this.oc);
        Sg(g, d, e, f, this.kc, this.jc, c)
    }
};
Pg.prototype.ja = function(a) {
    a["ablate-me"] = this.Zb;
    a["resize-me"] = this.Vd
};
var Ug = function(a, b, c) {
    return (a = a && kc(a))&&!Lg(b) ? Tg(c, b.google_ad_width, b.google_ad_height, 0, 0, !1) : "XS"
}, Vg = function(a, b, c, d) {
    var e = {
        str: a.Ra(),
        scrl: a.scrollPosition,
        ad_y: a.elementTopOffset,
        adk: b,
        adk2: c
    };
    D(d, function(a, b) {
        e[b] = a
    });
    return e
}, Rg = function(a, b, c, d) {
    var e = F();
    if (a && e && (e = ec(a, e))) {
        var f = new Wg(a), g = d["collapse-after-close"];
        if (g ||!d.clp_btf_only || f.Ra())
            d.abl = Tg(a, Of(e.width), Of(e.height), 0, 0, !0, "animate" == g);
        a = Vg(f, b, c, d);
        Xg("ablation", a, .05)
    }
}, Zg = function(a, b, c, d, e, f) {
    var g = 63.5, h =
    F(), k, l = function() {
        var l = ec(d, h), y = Of(l.width), l = Of(l.height), z = 0, V = 0;
        null !== y && (z = y - e);
        null !== l && (V = l - f);
        if (0 < g) {
            if (z || V) {
                var pa = a.getAttribute("width"), sb = a.getAttribute("height");
                Yg(a, pa ? Number(pa) + z : null, sb ? Number(sb) + V : null)
            }
        } else 
            C.clearInterval(k), Yg(a, b, c);
        e = y;
        f = l;
        --g
    };
    C.setTimeout(function() {
        k = C.setInterval(l, 16)
    }, 990)
}, ah = function(a, b, c) {
    (a.getAttribute("width") || a.getAttribute("height")) && Yg(a, b, c);
    $g(a, b, c)
}, $g = function(a, b, c) {
    null !== b && (a.style.width = b + "px");
    null !== c && (a.style.height =
    c + "px")
}, Yg = function(a, b, c) {
    "number" == typeof b && a.setAttribute("width", b);
    "number" == typeof c && a.setAttribute("height", c)
}, Sg = function(a, b, c, d, e, f, g) {
    var h = new Wg(a[0]);
    if (h.nd() && (e = Vg(h, e, f, g), Xg("resize", e, .05), h.Ra(d)))
        for (d = 0; d < a.length; d++)
            ah(a[d], b, c)
}, bh = function(a) {
    wg(a, "opacity 1s cubic-bezier(.4, 0, 1, 1),width .1s cubic-bezier(.4, 0, 1, 1) .4s,height .5s cubic-bezier(.4, 0, 1, 1)")
}, Tg = function(a, b, c, d, e, f, g) {
    if (!a)
        return "XS";
    g = g && xg();
    var h = a;
    if (f)
        if (g) {
            bh(h);
            if (0 == d || 0 == e)
                h.style.opacity =
                0;
                C.setTimeout(function() {
                    for (var a = h.children, b = 0; b < a.length; b++)
                        a[b].style.display = "none";
                        $g(h, d, e)
                    }, 1E3)
        } else {
            if (0 == d || 0 == e)
                h.style.display = "none";
                ah(h, d, e)
        }
    if (!b ||!c)
        return "XS";
    var k = F();
    for (a = a.parentElement; a;) {
        var l = ch(k, h, a, b, c, d, e, f, g);
        if (l)
            return l;
        if ((l = ec(a, k)) && ("absolute" == l.position || "fixed" == l.position))
            return "absolute" == l.position ? "CA" : "CF";
        a = a.parentElement;
        if (!a)
            try {
                a = k.frameElement;
                var E = k.parent;
                E && E != k && (k = E)
            } catch (y) {
            return "XS"
        }
    }
    return "CS"
}, dh = function(a) {
    if (!a)
        return !0;
    var b =
    !1;
    a = a.childNodes;
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (3 == d.nodeType && /\S/.test(d.data) || 1 == d.nodeType&&!{
            script: 1,
            style: 1
        }
        [d.nodeName.toLowerCase()]) {
            if (b)
                return !1;
            b=!0
        }
    }
    return !0
}, ch = function(a, b, c, d, e, f, g, h, k) {
    try {
        var l = c.style
    } catch (E) {}
    if ((a = c.getAttribute("width") || c.getAttribute("height")) || l) {
        var y = null, z = null, V = null, pa = null;
        a && (V = c.getAttribute("width"), pa = c.getAttribute("height"));
        l && (y = Of(l.width), z = Of(l.height));
        var sb = l = null, Pc = null, Qc = null, Za = c.parentElement, Za = dh(Za), Je = y && d >= y ||
        V && d >= V, Ke = z && e >= z || pa && e >= pa;
        if (z)
            if (Za || Je)
                h && (sb = Math.max(z - e + g, 0));
            else 
                return "NS";
        if (y)
            if (Za || Ke)
                h && (l = Math.max(y - d + f, 0));
            else 
                return "NS";
        if (pa)
            if (Za || Je)
                h && (Qc = Math.max(pa - e + g, 0));
            else 
                return "NS";
        if (V)
            if (Za || Ke)
                h && (Pc = Math.max(V - d + f, 0));
            else 
                return "NS";
        h && (a && (k ? Zg(c, Pc, Qc, b, d, e) : Yg(c, Pc, Qc)), $g(c, l, sb))
    }
    return null
}, Qg = function(a, b) {
    var c = [a];
    if (!b)
        return c;
    c.unshift(b);
    var d = b.id, e = b.ownerDocument, f = d + "_anchor", d = d + "_expand", f = e.getElementById(f), e = e.getElementById(d);
    if (!f)
        return c;
    c.unshift(f);
    if (!e)
        return c;
    c.unshift(e);
    e = e.parentElement;
    if (!e ||!lc.test(e.className))
        return c;
    c.unshift(e);
    return c
}, Xg = function(a, b, c) {
    var d = B;
    b.url = d.URL;
    G(a, b, c)
}, Wg = function(a) {
    var b = F(), c = kc(b);
    a = a.getBoundingClientRect();
    this.defined=!!c;
    c = c || b;
    this.scrollPosition = Hg(c);
    this.elementTopOffset = a.top;
    this.viewportHeight = Eg(c);
    this.visible = 0 != a.top || 0 != a.bottom
};
Wg.prototype.ld = function() {
    return this.elementTopOffset >= this.viewportHeight
};
Wg.prototype.Ra = function(a) {
    a = "force" == a;
    return this.defined && (a ||!this.visible || this.ld())
};
Wg.prototype.nd = function() {
    return this.defined
};
var eh = function() {
    this.wasReactiveAdConfigReceived = {};
    this.wasReactiveAdCreated = {};
    this.stateForType = {};
    this.wasReactiveAdConfigHandlerRegistered=!1
}, S = function(a) {
    fh(a);
    return a.google_reactive_ads_global_state
}, fh = function(a) {
    a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new eh)
};
var jh = function(a) {
    return gh() || hh(a) && ih(a)
}, hh = function(a) {
    var b=!1;
    try {
        b = a.top == a&&!!a.postMessage&&!kh(a.navigator.userAgent) && Ig(a) && Jg(a) && Kg(a)
    } catch (c) {}
    return b
}, lh = function(a) {
    switch (a.google_reactive_ad_format) {
    case 1:
        return "bottom"
    }
    return null
}, mh = function(a, b) {
    b.google_ad_width = 320;
    b.google_ad_height = 50;
    a.style.display = "none"
}, oh = function(a, b, c) {
    c.google_ad_width = Fg(a);
    K.FLOATING_ADS.EXPERIMENT_100PX_HEIGHT == nh() ? c.google_ad_height = Na : c.google_ad_height = 50;
    b.style.display = "none"
}, ih =
function(a) {
    S(a);
    return !0
}, kh = function(a) {
    return !/(Android|iPhone OS|Windows Phone)/.test(a) || /Android 2/.test(a) || /Firefox/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a)
}, gh = function() {
    return J().n(29) === K.NMO_FLOATING_ADS.EXPERIMENT
};
var ph = function(a) {
    try {
        var b = kc(a);
        return !!b&&!!b.postMessage && 320 == a.google_ad_width && 50 == a.google_ad_height && "html" === Tb(a) && 1 == a.google_reactive_ad_format&&!kh(b.navigator.userAgent) && ih(b)&&!!b&&!(Ig(b) && Jg(b) && Kg(b))
    } catch (c) {
        return !1
    }
}, qh = function(a) {
    if (ph(a)) {
        a = K.NMO_FLOATING_ADS;
        a = [a.CONTROL, a.EXPERIMENT];
        var b = Oa, c = J();
        c.j(a, b, 29)
    }
}, rh = function(a) {
    var b = K.NMO_FLOATING_ADS, b = [b.CONTROL, b.EXPERIMENT], c = J().n(29);
    c === b[0] ? a.nmo = 0 : c === b[1] && (a.nmo = 1)
};
var sh = function() {};
sh.prototype.serialize = function(a) {
    var b = [];
    this.cb(a, b);
    return b.join("")
};
sh.prototype.cb = function(a, b) {
    switch (typeof a) {
    case "string":
        this.V(a, b);
        break;
    case "number":
        this.xa(a, b);
        break;
    case "boolean":
        b.push(a);
        break;
    case "undefined":
        b.push("null");
        break;
    case "object":
        if (null == a) {
            b.push("null");
            break
        }
        if (a instanceof Array) {
            this.ce(a, b);
            break
        }
        this.ya(a, b);
        break;
    case "function":
        break;
    default:
        throw Error("Unknown type: " + typeof a);
    }
};
var th = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, uh = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
sh.prototype.V = function(a, b) {
    b.push('"');
    b.push(a.replace(uh, function(a) {
        if (a in th)
            return th[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return th[a] = e + b.toString(16)
    }));
    b.push('"')
};
sh.prototype.xa = function(a, b) {
    b.push(isFinite(a)&&!isNaN(a) ? a : "null")
};
sh.prototype.ce = function(a, b) {
    var c = a.length;
    b.push("[");
    for (var d = "", e = 0; e < c; e++)
        b.push(d), this.cb(a[e], b), d = ",";
    b.push("]")
};
sh.prototype.ya = function(a, b) {
    b.push("{");
    var c = "", d;
    for (d in a)
        if (a.hasOwnProperty(d)) {
            var e = a[d];
            "function" != typeof e && (b.push(c), this.V(d, b), b.push(":"), this.cb(e, b), c = ",")
        }
    b.push("}")
};
var vh = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_bid google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_original_width google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
wh = {
    google_analytics_domain_name: !0,
    google_analytics_uacct: !0
}, xh = function(a) {
    for (var b = {}, c = 0, d = vh.length; c < d; c++) {
        var e = vh[c];
        null != a[e] && (b[e] = a[e])
    }
    return b
}, yh = function(a) {
    a.google_page_url && (a.google_page_url = String(a.google_page_url));
    var b = [];
    D(a, function(a, d) {
        if (null != a) {
            var e;
            try {
                e = (new sh).serialize(a)
            } catch (f) {}
            e && Gb(b, d, "=", e, ";")
        }
    });
    return b.join("")
};
var zh = function(a, b) {
    var c=!1;
    try {
        c = a.top == a&&!!a.postMessage && Kg(a) && Jg(a) && Ig(a)&&!zd(b)&&!/Android 2/.test(a.navigator.userAgent)
    } catch (d) {}
    return c
}, Ah = function(a, b, c) {
    b.google_ad_width = Fg(c);
    b.google_ad_height = Eg(c);
    a.style.display = "none"
}, Bh = function(a) {
    S(a);
    return !0
};
var Ch = {
    rectangle: 1,
    horizontal: 2,
    vertical: 4
}, Dh = [{
    width: 970,
    height: 90,
    format: 2
}, {
    width: 728,
    height: 90,
    format: 2
}, {
    width: 468,
    height: 60,
    format: 2
}, {
    width: 336,
    height: 280,
    format: 1
}, {
    width: 320,
    height: 50,
    format: 2
}, {
    width: 300,
    height: 600,
    format: 4
}, {
    width: 300,
    height: 250,
    format: 1
}, {
    width: 250,
    height: 250,
    format: 1
}, {
    width: 234,
    height: 60,
    format: 2
}, {
    width: 200,
    height: 200,
    format: 1
}, {
    width: 180,
    height: 150,
    format: 1
}, {
    width: 160,
    height: 600,
    format: 4
}, {
    width: 125,
    height: 125,
    format: 1
}, {
    width: 120,
    height: 600,
    format: 4
}, {
    width: 120,
    height: 240,
    format: 4
}
], Eh = function(a) {
    return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
}, Jh = function(a, b, c) {
    var d = a.offsetWidth, e = b.google_ad_format, f = Fh(d, e, c, b, a);
    if (!f)
        throw Error("Cannot find a responsive size for a container of width=" + d + "px and data-ad-format=" + e);
    Gh(b, f, d);
    var e = b.google_responsive_optimization_experiment, g = "SE" == e, g = g ? f.width: 300 < d && 300 < f.height ? f.width: 1200 < d ? 1200: Math.round(d), h = "E320" == e || "EMATF100" == e, h = h && 320 == f.width && 50 == f.height ? 100: f.height,
    k = Hh;
    if (234 == f.width && 60 == f.height && e == k.EXPERIMENT_234_60_A || e == k.EXPERIMENT_234_60_B)
        if (c = Ih(d, a, c))
            g = 320, h = e == k.EXPERIMENT_234_60_A ? 50 : 100;
    b.google_ad_width = g;
    b.google_ad_height = h;
    a.style.height = b.google_ad_height + "px";
    b.google_ad_resizable=!0;
    delete b.google_ad_format
}, Ih = function(a, b, c) {
    var d = Fg(c);
    a = 320 == d && 300 <= a && 320 > a;
    if (!a || Kh(d, b, c))
        return !1;
    c = ec(b, c);
    a = b.getBoundingClientRect();
    if (!c ||!a)
        return !1;
    a = a.left;
    if (0 >= a)
        return !1;
    d -= a + b.offsetWidth;
    "rtl" != c.direction ? (c = Of(c.marginLeft) || 0, b.style.marginLeft =
    c - a + "px") : (c = Of(c.marginRight) || 0, b.style.marginRight = c - d + "px");
    return !0
}, Kh = function(a, b, c) {
    for (var d = 0; 10 > d && b.parentElement; d++) {
        b = b.parentElement;
        var e = ec(b, c);
        if (!e)
            break;
        e = e.overflowX || e.overflow;
        if ("hidden" == e || "scroll" == e || "auto" == e)
            break;
        if (b.clientWidth >= a)
            return !1
    }
    return !0
}, Lh = function(a, b, c) {
    if ("auto" == c)
        return c = Fg(a), c = Math.min(1200, c), c = b / c, .25 >= c ? 4 : 3;
    b = 0;
    a = Ch;
    for (var d in a) 
        - 1 != c.indexOf(d) && (b|=a[d]);
    return b
}, Oh = function(a, b, c, d, e) {
    for (var f = Mh, f = Dh.sort(f), g = 0; g < f.length; g++) {
        var h =
        f[g];
        if (f[g].width <= a && h.format & b && Nh(h, c, d, e))
            return h
    }
    return null
}, Nh = function(a, b, c, d) {
    if (!c ||!d)
        return !0;
    c = c.google_responsive_optimization_experiment;
    return (c = "EMATF" == c || "EMATF100" == c || Ph(c)) && 488 > Fg(b) && Qh(d, b) ? 250 > a.height : !0
}, Mh = function(a, b) {
    return b.width - a.width || b.height - a.height
}, Fh = function(a, b, c, d, e) {
    b = Lh(c, a, b);
    d && (d.google_responsive_formats = b);
    return Oh(a, b, c, d, e)
}, Qh = function(a, b) {
    var c = Fg(b), d = Eg(b), c = Math.min(d, 16 * c / 9), d = Rh(a, b);
    return d < c - 100
}, Rh = function(a, b) {
    var c = b.document.documentElement,
    c = c.getBoundingClientRect(), d = a.getBoundingClientRect();
    return c && d ? d.top - c.top : 0
}, Sh = {
    CONTROL_320_100: "C320",
    EXPERIMENT_320_100: "E320"
}, Th = function(a) {
    var b = Sh;
    return a == b.CONTROL_320_100 || a == b.EXPERIMENT_320_100
}, Uh = {
    EXPERIMENT: "SE",
    CONTROL: "SC"
}, Vh = function(a) {
    var b = Uh;
    return a == b.CONTROL || a == b.EXPERIMENT
}, Wh = {
    EXPERIMENT_320_50: "EMATF",
    EXPERIMENT_320_100: "EMATF100",
    CONTROL: "CMATF"
}, Hh = {
    CONTROL: "IC",
    EXPERIMENT_234_60_A: "IEA",
    EXPERIMENT_234_60_B: "IEB"
}, Ph = function(a) {
    var b = Hh;
    return a == b.CONTROL ||
    a == b.EXPERIMENT_234_60_A || a == b.EXPERIMENT_234_60_B
}, ai = function(a, b, c) {
    if (!n(b.google_responsive_optimization_experiment)) {
        var d = 488 > Fg(window), e = 320 == Fg(window);
        b.google_responsive_optimization_experiment = Xh(d) || Yh(a, b, c, d) || Zh(a, e) || $h() || "-"
    }
}, Xh = function(a) {
    var b = Sh, b = [b.CONTROL_320_100, b.EXPERIMENT_320_100], c = za;
    return a ? w(b, c) : null
}, Yh = function(a, b, c, d) {
    var e = Wh, e = [e.CONTROL, e.EXPERIMENT_320_50, e.EXPERIMENT_320_100], f = Ba, e = w(e, f);
    b = "horizontal" == b.google_ad_format;
    return (a=!!e&&!b && d && Qh(a,
    c)) ? e : null
}, Zh = function(a, b) {
    var c = Hh, c = [c.CONTROL, c.EXPERIMENT_234_60_A, c.EXPERIMENT_234_60_B], d = Ca, e = a.offsetWidth;
    return b && 300 <= e && 320 > e ? w(c, d) : null
}, $h = function() {
    var a = Uh, a = [a.CONTROL, a.EXPERIMENT], b = Aa;
    return w(a, b)
}, Gh = function(a, b, c) {
    var d = a.google_responsive_optimization_experiment;
    bi(d, b, c) || (a.google_responsive_optimization_experiment = void 0)
}, bi = function(a, b, c) {
    return Vh(a) ? b.width != (300 < c && 300 < b.height ? b.width : 1200 < c ? 1200 : Math.round(c)) : Th(a) ? 320 == b.width && 50 == b.height : Ph(a) ? 234 == b.width &&
    60 == b.height : !0
};
var di = function(a) {
    ci|=a
}, ci = 0;
Lc(!Sa);
var ei = {
    client: "google_ad_client",
    format: "google_ad_format",
    slotname: "google_ad_slot",
    output: "google_ad_output",
    ad_type: "google_ad_type",
    async_oa: "google_async_for_oa_experiment",
    dimpr: "google_always_use_delayed_impressions_experiment",
    peri: "google_top_experiment",
    pse: "google_pstate_expt"
};
Mc(ei);
var fi = function(a) {
    this.P = a;
    a.google_iframe_oncopy || (a.google_iframe_oncopy = {
        handlers: {},
        upd: r(this.xe, this)
    });
    this.$e = a.google_iframe_oncopy
}, gi = hb("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
fi.prototype.set = function(a, b) {
    this.$e.handlers[a] = b;
    this.P.addEventListener && this.P.addEventListener("load", r(this.Nc, this, a), !1)
};
fi.prototype.Nc = function(a) {
    a = this.P.document.getElementById(a);
    try {
        var b = a.contentWindow.document;
        if (a.onload && b && (!b.body ||!b.body.firstChild))
            a.onload()
    } catch (c) {}
};
fi.prototype.xe = function(a, b) {
    var c = hi("rx", a), d = sf(a, "dt"), c = c.replace(/&dtd=(\d+|M)/, "&dtd=" + hc(d));
    this.set(b, c);
    return c
};
var hi = function(a, b) {
    var c = new RegExp("\\b" + a + "=(\\d+)"), d = c.exec(b);
    d && (d =+ d[1] + 1 || 1, b = b.replace(c, a + "=" + d));
    return b
};
var ii = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, ki = function(a) {
    ji();
    return a.match(ii)
}, li = Zd, ji = function() {
    if (li) {
        li=!1;
        var a = m.location;
        if (a) {
            var b = a.href;
            if (b && (b = mi(ki(b)[3] || null, !0)) && b != a.hostname)
                throw li=!0, Error();
        }
    }
}, mi = function(a, b) {
    return a ? b ? decodeURI(a) : decodeURIComponent(a) : a
}, ni = function(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c ==
        b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
}, oi = function(a, b, c) {
    if (p(b))
        for (var d = 0; d < b.length; d++)
            oi(a, String(b[d]), c);
    else 
        null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}, pi = function(a, b) {
    for (var c in b)
        oi(c, b[c], a);
    return a
};
var T = {
    getIframingState: function(a, b) {
        var c = T;
        if (a.top == a)
            return c.NO_IFRAMING;
        if (b) {
            var d = a.location.ancestorOrigins;
            if (d)
                return d[d.length - 1] == a.location.origin ? c.SAME_DOMAIN_IFRAMING : c.CROSS_DOMAIN_IFRAMING
        }
        return v(a.top) ? c.SAME_DOMAIN_IFRAMING : c.CROSS_DOMAIN_IFRAMING
    },
    frameCountsWithDelayedPingback: function(a, b, c, d) {
        var e = T.ub(a.top, a, 0);
        window.setTimeout(ja(T.Ke, a, b, c, d, e.adFrames), T.IFRAME_COUNTS_DELAY);
        return e.adFrames
    },
    Ke: function(a, b, c, d, e) {
        a = T.ub(a.top, a, 0);
        var f = a.signature.substring(0,
        1800);
        b = {
            frmn: a.adFrames,
            frms: f,
            adk: b,
            correlator: c,
            frm: d,
            frmn0: e
        };
        c = Ad(Xa(), "/pagead/gen_204?id=frmn");
        c = ni(pi([c], b));
        Mb(C, c)
    },
    ub: function(a, b, c) {
        var d, e = {
            signature: "",
            adFrames: 0
        };
        if (c > T.MAXIMUM_IFRAME_DEPTH)
            return e;
        try {
            d = a[T.NAME_FIRST_GOOGLE_WINDOW]
        } catch (f) {}
        d && (e.signature = a == b ? "I" : "A", e.adFrames = 1);
        for (var g = 0; g < a.length; g++) {
            var h = a[g];
            h != d && (h = T.ub(h, b, c + 1), e.adFrames += h.adFrames, e.signature = h.signature ? e.signature + ("!" + h.signature + "~") : e.signature + "o")
        }
        return e
    },
    NO_IFRAMING: 0,
    SAME_DOMAIN_IFRAMING: 1,
    CROSS_DOMAIN_IFRAMING: 2,
    NAME_FIRST_GOOGLE_WINDOW: "aswift_0",
    IFRAME_COUNTS_DELAY: 2E3,
    MAXIMUM_IFRAME_DEPTH: 20
};
var qi = function(a) {
    a = a.webkitVisibilityState || a.mozVisibilityState || a.visibilityState || "";
    var b = {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4
    };
    return b[a] || 0
}, ri = function(a) {
    var b;
    a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState ? b = "webkitvisibilitychange" : a.visibilityState && (b = "visibilitychange");
    return b
};
var si = {
    google_ad_channel: "channel",
    google_ad_host: "host",
    google_ad_host_channel: "h_ch",
    google_ad_host_tier_id: "ht_id",
    google_ad_section: "region",
    google_ad_type: "ad_type",
    google_adtest: "adtest",
    google_original_width: "orig_w",
    google_available_width: "avail_w",
    google_allow_expandable_ads: "ea",
    google_alternate_ad_url: "alternate_ad_url",
    google_alternate_color: "alt_color",
    google_bid: "bid",
    google_city: "gcs",
    google_color_bg: "color_bg",
    google_color_border: "color_border",
    google_color_line: "color_line",
    google_color_link: "color_link",
    google_color_text: "color_text",
    google_color_url: "color_url",
    google_contents: "contents",
    google_country: "gl",
    google_cpm: "cpm",
    google_cust_age: "cust_age",
    google_cust_ch: "cust_ch",
    google_cust_gender: "cust_gender",
    google_cust_id: "cust_id",
    google_cust_interests: "cust_interests",
    google_cust_job: "cust_job",
    google_cust_l: "cust_l",
    google_cust_lh: "cust_lh",
    google_cust_u_url: "cust_u_url",
    google_disable_video_autoplay: "disable_video_autoplay",
    google_ed: "ed",
    google_encoding: "oe",
    google_feedback: "feedback_link",
    google_flash_version: "flash",
    google_font_face: "f",
    google_font_size: "fs",
    google_hints: "hints",
    google_kw: "kw",
    google_kw_type: "kw_type",
    google_language: "hl",
    google_page_url: "url",
    google_pgb_reactive: "pra",
    google_region: "gr",
    google_reuse_colors: "reuse_colors",
    google_responsive_formats: "resp_fmts",
    google_safe: "adsafe",
    google_sc_id: "sc_id",
    google_tag_info: "gut",
    google_targeting: "targeting",
    google_ui_features: "ui",
    google_ui_version: "uiv",
    google_video_doc_id: "video_doc_id",
    google_video_product_type: "video_product_type"
},
ti = {
    google_ad_block: "ad_block",
    google_ad_client: "client",
    google_ad_format: "format",
    google_ad_output: "output",
    google_ad_callback: "callback",
    google_ad_height: "h",
    google_ad_slot: "slotname",
    google_ad_unit_key: "adk",
    google_ad_unit_key_2: "adk2",
    google_ad_width: "w",
    google_analytics_url_parameters: "aup",
    google_captcha_token: "captok",
    google_content_recommendation_ui_type: "crui",
    google_ctr_threshold: "ctr_t",
    google_cust_criteria: "cust_params",
    google_image_size: "image_size",
    google_last_modified_time: "lmt",
    google_loeid: "loeid",
    google_max_num_ads: "num_ads",
    google_max_radlink_len: "max_radlink_len",
    google_mtl: "mtl",
    google_enable_content_recommendations: "ecr",
    google_num_radlinks: "num_radlinks",
    google_num_radlinks_per_unit: "num_radlinks_per_unit",
    google_only_ads_with_video: "only_ads_with_video",
    google_rl_dest_url: "rl_dest_url",
    google_rl_filtering: "rl_filtering",
    google_rl_mode: "rl_mode",
    google_rt: "rt",
    google_source_type: "src_type",
    google_sui: "sui",
    google_skip: "skip",
    google_tag_for_child_directed_treatment: "tfcd",
    google_tag_origin: "to",
    google_tdsma: "tdsma",
    google_tfs: "tfs",
    google_tl: "tl"
}, ui = {
    google_lact: "lact",
    google_only_pyv_ads: "pyv",
    google_only_userchoice_ads: "uc",
    google_scs: "scs",
    google_with_pyv_ads: "withpyv",
    google_previous_watch: "p_w",
    google_previous_searches: "p_s",
    google_video_url_to_fetch: "durl",
    google_yt_pt: "yt_pt",
    google_yt_up: "yt_up"
};
var vi = function() {
    var a = wd().n(10), b = K.PERISCOPE_FOR_TARGETING;
    return a == b.EXPERIMENT_ZL_NO_TARGETING || a == b.EXPERIMENT_WAIT_NO_TARGETING
};
function wi(a, b, c, d) {
    c = c || a.google_ad_width;
    d = d || a.google_ad_height;
    if (a.top == a)
        return !1;
    var e = b.documentElement;
    if (c && d) {
        var f = 1, g = 1;
        a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
        if (g > 2 * d || f > 2 * c)
            return !1
    }
    return !0
}
function xi(a, b) {
    D(b, function(b, d) {
        a["google_" + d] = b
    })
}
var yi = function(a) {
    if (vi())
        return null;
    var b = F().google_top_values;
    if (b) {
        var c = b[3];
        a && (c = b[4]);
        if (c)
            return c + ""
    }
    return null
};
function zi(a, b) {
    var c = yi();
    return c ? c : b ? a.referrer : a.URL
}
var Ai = function(a, b) {
    if (!b) {
        var c = yi();
        if (c)
            return {
                url: c,
                isTopUrl: !0
            }
    }
    c = a.location.href;
    if (a == a.top)
        return {
            url: c,
            isTopUrl: !0
        };
    var d=!1, e = a.document;
    e && e.referrer && (c = e.referrer, a.parent == a.top && (d=!0));
    (e = a.location.ancestorOrigins) && (e = e[e.length - 1])&&-1 == c.indexOf(e) && (d=!1, c = e);
    return {
        url: c,
        isTopUrl: d
    }
};
function Bi(a, b, c) {
    a = T.getIframingState(F());
    var d = 4;
    b || a != T.SAME_DOMAIN_IFRAMING ? b || a != T.CROSS_DOMAIN_IFRAMING ? b && a == T.SAME_DOMAIN_IFRAMING ? d = 7 : b && a == T.CROSS_DOMAIN_IFRAMING && (d = 8) : d = 6 : d = 5;
    c && (d|=16);
    return "" + d
}
var Ci = function(a) {
    return a == a.top ? a.document.referrer : (a = yi(!0)) || ""
};
function Di(a, b, c) {
    a.page_url = zi(b, c);
    a.page_location = null
}
function Ei(a, b, c, d) {
    a.page_url = b.google_page_url;
    a.page_location = zi(c, d) || "EMPTY"
}
function Fi(a) {
    var b = yi();
    return !b&&!!a.google_page_url
}
function Gi(a, b) {
    var c = {}, d = Hi(a, b), e = d.topAvailableWindow, f = d.inAdframe;
    c.iframing = d.iframing;
    if (!a.google_page_url && "ad.yieldmanager.com" == b.domain) {
        for (d = b.URL.substring(b.URL.lastIndexOf("http")); - 1 < d.indexOf("%");)
            try {
                d = decodeURIComponent(d)
            } catch (g) {
            break
        }
        a.google_page_url = d
    }
    Fi(a) ? Ei(c, a, b, f) : Di(c, b, f);
    c.last_modified_time = b.URL == c.page_url ? Date.parse(b.lastModified) / 1E3 : null;
    c.referrer_url = Ci(e);
    return c
}
function Hi(a, b, c) {
    var d = {};
    d.topAvailableWindow = Zc(window);
    d.topLocation = Ai(d.topAvailableWindow, c);
    d.inAdframe = wi(F(), b, a.google_ad_width, a.google_ad_height);
    d.iframing = Bi(a, d.inAdframe, d.topLocation.isTopUrl);
    return d
}
function Ii(a) {
    var b = Gi(a, F().document);
    xi(a, b)
};
var Li = function() {
    null == window.google_ad_output && (window.google_ad_output = "html");
    window.google_ad_client = String(window.google_ad_client);
    window.google_ad_client = Ji(window.google_ad_client);
    null == window.google_flash_version && (window.google_flash_version = Qb());
    window.google_ad_section = window.google_ad_section || window.google_ad_region || "";
    window.google_country = window.google_country || window.google_gl || "";
    var a = (new Date).getTime();
    p(window.google_color_bg) && (window.google_color_bg = Ki(window.google_color_bg,
    a));
    p(window.google_color_text) && (window.google_color_text = Ki(window.google_color_text, a));
    p(window.google_color_link) && (window.google_color_link = Ki(window.google_color_link, a));
    p(window.google_color_url) && (window.google_color_url = Ki(window.google_color_url, a));
    p(window.google_color_border) && (window.google_color_border = Ki(window.google_color_border, a));
    p(window.google_color_line) && (window.google_color_line = Ki(window.google_color_line, a))
}, Mi = function(a) {
    D(si, function(b, c) {
        a[c] = null
    });
    D(ti, function(b,
    c) {
        a[c] = null
    });
    D(ui, function(b, c) {
        a[c] = null
    });
    a.google_container_id = null;
    a.google_enable_async = null;
    a.google_eids = null;
    a.google_page_location = null;
    a.google_referrer_url = null;
    a.google_show_ads_impl = null;
    a.google_ad_region = null;
    a.google_gl = null;
    a.google_iframe_name = null;
    a.google_loader_used = null;
    a.google_loader_features_used = null
}, Ki = function(a, b) {
    di(2);
    return a[b%a.length]
}, Ji = function(a) {
    if (!a)
        return "";
    a = a.toLowerCase();
    return a = Ni(a)
}, Ni = function(a) {
    a && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
    return a
};
var Oi, U = function(a) {
    this.Wa = [];
    this.P = a || window;
    this.N = 0;
    this.Va = null;
    this.oe = 0
}, Pi = function(a, b) {
    this.fn = a;
    this.win = b
};
U.prototype.enqueue = function(a, b) {
    0 != this.N || 0 != this.Wa.length || b && b != window ? this.Ga(a, b) : (this.N = 2, this.Kb(new Pi(a, window)))
};
U.prototype.Ga = function(a, b) {
    this.Wa.push(new Pi(a, b || this.P));
    this.ab()
};
U.prototype.Hb = function(a) {
    this.N = 1;
    if (a) {
        var b = Vc("sjr::timeout", r(this.$a, this, !0));
        this.Va = this.P.setTimeout(b, a)
    }
};
U.prototype.$a = function(a) {
    a&&++this.oe;
    1 == this.N && (null != this.Va && (this.P.clearTimeout(this.Va), this.Va = null), this.N = 0);
    this.ab()
};
U.prototype.statusz = function() {
    return !(!window ||!Array)
};
U.prototype.Vb = function() {
    return this.oe
};
la(U.prototype, "nq", U.prototype.enqueue);
la(U.prototype, "nqa", U.prototype.Ga);
la(U.prototype, "al", U.prototype.Hb);
la(U.prototype, "rl", U.prototype.$a);
la(U.prototype, "sz", U.prototype.statusz);
la(U.prototype, "tc", U.prototype.Vb);
U.prototype.ab = function() {
    var a = Vc("sjr::tryrun", r(this.ue, this));
    this.P.setTimeout(a, 0)
};
U.prototype.ue = function() {
    if (0 == this.N && this.Wa.length) {
        var a = this.Wa.shift();
        this.N = 2;
        var b = Vc("sjr::run", r(this.Kb, this, a));
        a.win.setTimeout(b, 0);
        this.ab()
    }
};
U.prototype.Kb = function(a) {
    this.N = 0;
    a.fn()
};
var Qi = function(a) {
    try {
        return a.sz()
    } catch (b) {
        return !1
    }
}, Ri = function(a) {
    return Eb(a) && Qi(a) && Db(a.nq) && Db(a.nqa) && Db(a.al) && Db(a.rl)
}, Si = function() {
    if (Oi && Qi(Oi))
        return Oi;
    var a = ad(), b = a.google_jobrunner;
    return Ri(b) ? Oi = b : a.google_jobrunner = Oi = new U(a)
}, Ti = function(a, b) {
    Si().nq(a, b)
}, Ui = function(a, b) {
    Si().nqa(a, b)
}, Vi = function(a) {
    Si().al(a)
}, Wi = function() {
    var a = ad().google_jobrunner;
    Ri(a) && a.rl()
}, Xi = function() {
    var a = Si();
    return Db(a.tc) ? a.tc() : null
};
var Yi = (new Date).getTime();
var Zi = {
    PUBLISHER_DISABLED: 1,
    BLOCK_NOT_SUPPORTED: 2,
    BROWSER_NOT_SUPPORTED: 4,
    EXCEPTION_ENCOUNTERED: 8,
    DISABLED_FOR_EXPERIMENT: 16
}, $i = rc ? 1 == Xb(C): !Xb(C), aj = function() {
    var a = xb("script");
    return ["<", a, ' src="', Ad(Xa(), ["/pagead/js/", Pa(), "/r20141119/show_ads_impl.js"].join(""), ""), '"></', a, ">"].join("")
}, bj = function(a, b) {
    var c = 0, d = Zi;
    try {
        !1 === a.google_allow_expandable_ads &&
        (c|=d.PUBLISHER_DISABLED);
        if (!b.body || a.google_ad_output && "html" != a.google_ad_output || isNaN(a.google_ad_height) || isNaN(a.google_ad_width) || b.domain != a.location.hostname ||!/^http/.test(b.location.protocol))
            c|=d.BLOCK_NOT_SUPPORTED;
        jc(navigator, b) || (c|=d.BROWSER_NOT_SUPPORTED)
    } catch (e) {
        c|=d.EXCEPTION_ENCOUNTERED
    }
    return c
}, dj = function(a, b, c, d) {
    return function() {
        var e=!1;
        d && Vi(3E4);
        var f = a.document.getElementById(b);
        f&&!v(f.contentWindow) && cj(a);
        try {
            zc(a, b, c), e=!0
        } catch (g) {
            Wi()
        }
        e && (e = hi("google_async_rrc",
        c), (new fi(a)).set(b, dj(a, b, e, !1)))
    }
}, ej = function(a, b, c) {
    var d = a.createElement("iframe");
    D(b, function(a, b) {
        null != a && d.setAttribute(b, a)
    });
    c && (d.style.display = c);
    return d
}, fj = function(a) {
    var b = ["<iframe"];
    D(a, function(a, d) {
        null != a && b.push(" " + d + '="' + a + '"')
    });
    b.push("></iframe>");
    return b.join("")
}, gj = function(a) {
    return Ad(Wa(), ["/pagead/html/", Pa(), "/r20141119/zrt_lookup.html", a ? "#" + encodeURIComponent(a): ""].join(""))
}, hj = function(a, b,
c) {
    c.id = b;
    c.name = b;
    c.src = gj(a);
    return fj(c)
}, ij = function(a, b, c, d, e) {
    d = d ? '"' : "";
    var f = d + "0" + d;
    a.width = d + b + d;
    a.height = d + c + d;
    a.frameborder = f;
    e && (a.src = d + e + d);
    a.marginwidth = f;
    a.marginheight = f;
    a.vspace = f;
    a.hspace = f;
    a.allowtransparency = d + "true" + d;
    a.scrolling = d + "no" + d;
    a.allowfullscreen = d + "true" + d
}, jj = function() {
    if ($i&&!Hf()) {
        var a = {};
        ij(a, 0, 0, !1);
        a.style = "display:none";
        return hj("", "google_esf", a)
    }
    return ""
}, lj = function(a, b, c) {
    kj(a, b, c, !1, function(a, b, f) {
        return wc(a, b, f, c)
    })
}, kj = function(a, b, c, d, e) {
    var f =
    xb("script"), g = b.google_ad_width, h = b.google_ad_height, k = {};
    ij(k, g, h, !0);
    k.onload = '"' + gi + '"';
    e = e(a, k, b);
    g = mj(b);
    nj(a, c, d, b, "e" == g);
    b = yh(b);
    c = jj();
    d = Yi;
    var h = (new Date).getTime(), k = a.google_top_experiment, l = a.google_async_for_oa_experiment;
    l && (a.google_async_for_oa_experiment = void 0);
    var E = a.google_always_use_delayed_impressions_experiment, y = a.google_auto_width_experiment, z = a.google_floating_ads_js_experiment, g = ["<!doctype html><html><body>", c, "<", f, ">", b, "google_show_ads_impl=true;google_unique_id=",
    a.google_unique_id, ';google_async_iframe_id="', e, '";google_start_time=', d, ";", k ? 'google_top_experiment="' + k + '";': "", l ? 'google_async_for_oa_experiment="' + l + '";': "", E ? 'google_always_use_delayed_impressions_experiment="' + E + '";': "", g ? 'google_append_as_for_format_override="' + g + '";': "", y ? 'google_auto_width_experiment="' + y + '";': "", z ? 'google_floating_ads_js_experiment="' + z + '";': "", "google_bpp=", h > d ? h - d: 1, ";google_async_rrc=0;</", f, ">", aj(), "</body></html>"].join("");
    b = a.document.getElementById(e) ? Ti : Ui;
    b(dj(a,
    e, g, !0))
}, oj = function(a, b) {
    var c = a.google_ad_output, d = a.google_ad_format;
    d || "html" != c && null != c || (d = a.google_ad_width + "x" + a.google_ad_height, b && (d += "_as"));
    c=!a.google_ad_slot || a.google_override_format ||!If[a.google_ad_width + "x" + a.google_ad_height] && "aa" == a.google_loader_used;
    d = d && c ? d.toLowerCase() : "";
    a.google_ad_format = d
}, nj = function(a, b, c, d, e) {
    oj(d, e);
    d.google_ad_unit_key = fc(b, d, c);
    c = a.google_adk2_experiment = a.google_adk2_experiment || w(["C", "E"], Ea) || "N";
    "E" == c ? d.google_ad_unit_key_2 = gc(a, b) : "C" ==
    c && (d.google_ad_unit_key_2 = "ctrl")
}, qj = function() {
    var a = pj, b = K.PERISCOPE_FOR_TARGETING;
    if (window.google_top_experiment) {
        var c;
        switch (window.google_top_experiment) {
        case a.CONTROL:
            c = b.CONTROL;
            break;
        case a.EXPERIMENT_ZERO_LATENCY:
            c = b.EXPERIMENT_ZERO_LATENCY;
            break;
        case a.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
            c = b.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE;
            break;
        case a.EXPERIMENT_ZL_NO_TARGETING:
            c = b.EXPERIMENT_ZL_NO_TARGETING;
            break;
        case a.EXPERIMENT_WAIT_NO_TARGETING:
            c = b.EXPERIMENT_WAIT_NO_TARGETING
        }
        c &&
        wd().j([c], 1, 10)
    }
}, rj = function() {
    if (window.google_ad_unit_key_2) {
        var a;
        "ctrl" == window.google_ad_unit_key_2 ? a = K.ADD_ADK2.CONTROL : /[0-9]+/.test(window.google_ad_unit_key_2) && (a = K.ADD_ADK2.EXPERIMENT);
        a && wd().j([a], 1, 4)
    }
}, sj = function(a) {
    var b = tc, c = K.ASYNC_FOR_OPERA_ANDROID, d = a || navigator.userAgent;
    if (a = window.google_async_for_oa_experiment) {
        window.google_async_for_oa_experiment = void 0;
        var e, d = /Chrome/.test(d);
        a == b.CONTROL ? e = d ? c.CONTROL_ANDROID_CHROME : c.CONTROL_ANDROID : a == b.EXPERIMENT && (e = d ? c.EXPERIMENT_ANDROID_CHROME :
        c.EXPERIMENT_ANDROID);
        e && J().j([e], 1, 20)
    }
}, tj = {
    EXPERIMENT: "E",
    CONTROL: "C"
}, uj = function() {
    var a = tj, b = K.ALWAYS_USE_DELAYED_IMPRESSIONS, c = window.google_always_use_delayed_impressions_experiment, d = window.google_ad_output;
    if (c && (!d || "html" == d))
        return a = c == a.EXPERIMENT ? b.EXPERIMENT : b.CONTROL, J().j([a], 1, 4)
}, wj = function() {
    var a = vj, b = K.APPEND_AS_FOR_FORMAT_OVERRIDE, c = window.google_append_as_for_format_override;
    if (c)
        return a = c == a.EXPERIMENT ? b.EXPERIMENT : b.CONTROL, J().j([a], 1, 15)
}, mj = function(a) {
    return a.google_override_format ||
    !If[a.google_ad_width + "x" + a.google_ad_height] && "aa" == a.google_loader_used ? (a = vj, w([a.CONTROL, a.EXPERIMENT], Ga)) : null
}, xj = {
    EXPERIMENT: "E",
    CONTROL: "C",
    EXPERIMENT_ISOLATED: "EI",
    CONTROL_ISOLATED: "CI"
}, yj = function() {
    var a = xj, b = K.AUTO_WIDTH, c = window.google_auto_width_experiment;
    if (c) {
        switch (c) {
        case a.EXPERIMENT:
            a = b.EXPERIMENT;
            break;
        case a.CONTROL:
            a = b.CONTROL;
            break;
        case a.EXPERIMENT_ISOLATED:
            a = b.EXPERIMENT_ISOLATED;
            break;
        case a.CONTROL_ISOLATED:
            a = b.CONTROL_ISOLATED;
            break;
        default:
            a = ""
        }
        return J().j([a], 1,
        4)
    }
}, zj = function() {
    if (!n(window.google_auto_width_experiment)) {
        var a = xj, b = [a.CONTROL, a.EXPERIMENT], c = wa;
        window.google_auto_width_experiment = w(b, c);
        if (window.google_auto_width_experiment)
            return window.google_auto_width_experiment;
        c = xa;
        b = [a.CONTROL_ISOLATED, a.EXPERIMENT_ISOLATED];
        window.google_auto_width_experiment = w(b, c);
        return window.google_auto_width_experiment
    }
    return ""
}, pj = {
    CONTROL: "jp_c",
    EXPERIMENT_ZERO_LATENCY: "jp_zl",
    EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE: "jp_wfpmr",
    EXPERIMENT_ZL_NO_TARGETING: "jp_zlt",
    EXPERIMENT_WAIT_NO_TARGETING: "jp_wnt"
}, vj = {
    CONTROL: "c",
    EXPERIMENT: "e"
}, Aj = function() {
    var a = window.google_floating_ads_js_experiment;
    if (a)
        return J().j([a], 1, 26)
}, nh = function() {
    if (!n(window.google_floating_ads_js_experiment)) {
        var a = K.FLOATING_ADS, a = [a.CONTROL, a.EXPERIMENT_100PX_HEIGHT], b = Ma;
        window.google_floating_ads_js_experiment = w(a, b)
    }
    return window.google_floating_ads_js_experiment
}, cj = function(a) {
    3 == a.google_top_js_status && (a.google_top_js_status = 6)
}, Bj = function(a, b) {
    var c = navigator;
    if (Ha && a && b &&
    c) {
        var d = a.document, c = d.createElement("script"), e = Ji(b);
        c.async=!0;
        c.type = "text/javascript";
        c.src = Ad("www.gstatic.com", "/pub-config/" + e + ".js");
        d = d.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d)
    }
};
var Ej = function(a, b, c) {
    c = c || window;
    Cj(a);
    Dj(a, b, c)
}, Cj = function(a) {
    a.setAttribute("data-adsbygoogle-status", "done")
}, Dj = function(a, b, c) {
    Wb(c);
    Fj(a, b, c);
    var d = ec(a, c);
    if (!d || "none" != d.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format) {
        1 == Xb(c) && Bj(c, b.google_ad_client);
        D(wh, function(a, d) {
            b[d] = b[d] || c[d]
        });
        b.google_loader_used = "aa";
        if ((d = b.google_ad_output) && "html" != d)
            throw Error("No support for google_ad_output=" + d);
        Oc("aa::main", Sc, function() {
            lj(c, b, a)
        })
    } else 
        c.document.createComment &&
        a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag"))
}, Gj = function(a, b) {
    if ("google_reactive_ad_format" == a) {
        var c =+ b;
        return isNaN(c) ? null : c
    }
    return b
}, Fj = function(a, b, c) {
    for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
        var g = d[f];
        if (/data-/.test(g.nodeName)) {
            var h = g.nodeName.replace("data", "google").replace(/-/g, "_");
            b.hasOwnProperty(h) || (g = Gj(h, g.nodeValue), null === g || (b[h] = g))
        }
    }
    b.google_enable_content_recommendations && 1 == b.google_reactive_ad_format ?
    oh(c, a, b) : 1 == b.google_reactive_ad_format ? mh(a, b) : 8 == b.google_reactive_ad_format ? Ah(a, b, c) : Eh(b.google_ad_format) ? (ai(a, b, c), Jh(a, b, c), b.google_loader_features_used = 128) : Lf(a, b) ? (Nf(a, b, c), b.google_loader_features_used = 256) : Hj(c) ? Ij(a, b, c) : Mf(a.style, b)
}, Ij = function(a, b, c) {
    var d = "CI" != c.google_auto_width_experiment;
    a = Sf(a, b, d);
    !a && Jj(c) && (c.google_auto_width_experiment = null)
}, Jj = function(a) {
    a = a.google_auto_width_experiment;
    var b = xj;
    return a == b.EXPERIMENT_ISOLATED || a == b.CONTROL_ISOLATED
}, Hj = function(a) {
    var b =
    zj(), c = xj;
    return b == c.EXPERIMENT || Jj(a)
};
var Pj = function(a, b) {
    var c = b || document, d = null;
    if (a.id)
        if (d = c.getElementById(a.id))
            d = [d];
        else 
            return [];
    a.tagName && (d = d ? Kj(d, a.tagName) : Lj(a.tagName, c));
    if (a.classNames && 0 < a.classNames.length)
        if (d)
            d = Mj(d, a.classNames);
        else {
            if (!c.body)
                return [];
                d = Nj(a.classNames, c.body)
        }
    if (fa(a.occurrenceIndex) && d)
        if (d.length > a.occurrenceIndex)
            d = [d[a.occurrenceIndex]];
        else 
            return [];
    if (fa(a.paragraphIndex) && d) {
        for (var c = [], e = 0; e < d.length; e++) {
            var f = Oj(d[e]), g = a.paragraphIndex;
            0 > g && (g += f.length);
            0 <= g && g < f.length && c.push(f[g])
        }
        d =
        c
    }
    if (n(a.ignoreMode) && d)
        switch (a.ignoreMode) {
        case "ignoreFirst":
            return d.slice(1);
        case "ignoreLast":
            return d.slice(0, d.length - 1);
        case "ignoreFirstAndLast":
            return d.slice(1, d.length - 1)
        }
    return d ? d : []
}, Oj = function(a) {
    var b = [];
    a = a.getElementsByTagName("p");
    for (var c = 0; c < a.length; ++c) {
        var d = Qj(a[c]);
        100 <= d && b.push(a[c])
    }
    return b
}, Qj = function(a) {
    if (3 == a.nodeType)
        return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName)
        return 0;
    for (var b = 0, c = 0; c < a.childNodes.length; ++c)
        b += Qj(a.childNodes[c]);
    return b
}, Nj = function(a,
b) {
    if (b.getElementsByClassName) {
        for (var c = b.getElementsByClassName(a.join(" ")), d = [], e = 0; e < c.length; ++e)
            d.push(c[e]);
        return d
    }
    c = [];
    Rj(b, a) && c.push(b);
    for (e = 0; e < b.childNodes.length; ++e)
        1 == b.childNodes[e].nodeType && (d = b.childNodes[e], c = c.concat(Nj(a, d)));
    return c
}, Mj = function(a, b) {
    for (var c = [], d = 0; d < a.length; ++d)
        Rj(a[d], b) && c.push(a[d]);
    return c
}, Rj = function(a, b) {
    for (var c = a.className ? a.className.split(/\s+/) : [], d = {}, e = 0; e < c.length; ++e)
        d[c[e]]=!0;
    for (e = 0; e < b.length; ++e)
        if (!d[b[e]])
            return !1;
    return !0
},
Lj = function(a, b) {
    for (var c = b.getElementsByTagName(a), d = [], e = 0; e < c.length; ++e)
        d.push(c[e]);
    return d
}, Kj = function(a, b) {
    for (var c = [], d = 0; d < a.length; ++d)
        a[d].tagName && a[d].tagName.toUpperCase() == b.toUpperCase() && c.push(a[d]);
    return c
};
var Sj = function(a) {
    var b=!1;
    try {
        b = a.top == a&&!!a.postMessage
    } catch (c) {}
    return b
}, Vj = function(a, b) {
    var c = Tj(b.tagName), c = a.document.createElement(c);
    b.classNames && (c.className = b.classNames.join(" "));
    b.containerCssStyling && Uj(c, b.containerCssStyling);
    return c
}, Xj = function(a, b, c) {
    var d = {
        tagName: b.tagName,
        id: b.id,
        classNames: b.classNames
    }, d = Pj(d, a.document);
    b.filterForArticlesBelowFold && (d = Wj(a, d));
    if (b.insertionIndex > d.length)
        return null;
    b.insertionIndex == d.length ? (a = d[d.length - 1], b = a.nextSibling) : b =
    a = d[b.insertionIndex];
    d = a.parentElement;
    if (!d)
        return null;
    d.insertBefore(c, b);
    return a
}, Yj = function(a) {
    if (window.getComputedStyle && a) {
        a = parseInt(window.getComputedStyle(a).height, 10);
        if (120 > a)
            return 120;
        if (200 > a)
            return a
    }
    return 200
}, Zj = function(a) {
    return window.getComputedStyle && a ? (a = parseInt(window.getComputedStyle(a).width, 10), 960 < a ? 960 : 120 > a ? 120 : parseInt(a, 10)) : 320
}, ak = function(a) {
    a = S(a);
    return !!a.wasReactiveAdConfigReceived[8]
}, Tj = function(a) {
    return a ? a : "div"
}, Uj = function(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d =
        b[c];
        if (2 == d.length) {
            var e = bk(d[0]), d = d[1];
            a.style[e] = d
        }
    }
}, bk = function(a) {
    return a.replace(/\W+(.)/g, function(a, c) {
        return c.toUpperCase()
    })
}, Wj = function(a, b) {
    for (var c = [], d = 0; d < b.length; d++) {
        var e = b[d], f = e.getBoundingClientRect(), g = a.innerHeight || a.document.documentElement.clientHeight;
        f.top >= g && c.push(e)
    }
    return c
};
var ck = function() {}, dk = function(a) {
    if (!a)
        return null;
    var b = new ck, c = a.adClient;
    if (!c)
        return null;
    q(c) && (b.adClient = c);
    (c = a.adSlotName) && q(c) && (b.adSlotName = c);
    (c = a.pageUrl) && q(c) && (b.pageUrl = c);
    c = a.tagName;
    q(c) && (b.tagName = c);
    c = a.id;
    q(c) && (b.id = c);
    var d = a.classNames;
    b.classNames = [];
    if (p(d))
        for (c = 0; c < d.length; c++)
            q(d[c]) && b.classNames.push(d[c]);
    d = a.containerCssStyling;
    b.containerCssStyling = [];
    if (p(d))
        for (c = 0; c < d.length; c++) {
            var e = d[c];
            p(e) && 2 == e.length && q(e[0]) && q(e[1]) && b.containerCssStyling.push(e)
        }
    c =
    parseInt(a.insertionIndex, 10);
    b.insertionIndex = 0 <= c ? c : 1;
    b.filterForArticlesBelowFold=!!a.filterForArticlesBelowFold;
    return b
}, ek = function() {};
ca(ek);
ek.prototype.M = function(a, b, c) {
    var d = new ck;
    d.adClient = b;
    d.tagName = "div";
    d.classNames = [];
    d.containerCssStyling = [];
    d.insertionIndex = 1;
    d = this.Pd(c, d);
    b = S(a);
    b.wasReactiveAdConfigReceived[8]=!0;
    this.s(a, d)
};
ek.prototype.Pd = function(a, b) {
    var c = a.split("?", 2);
    if (2 > c.length)
        return b;
    for (var c = c[1], c = c.split("&"), d = Ng, e = 0; e < c.length; e++) {
        var f = c[e].split("=");
        if (2 == f.length) {
            var g = decodeURIComponent(f[0]), f = decodeURIComponent(f[1]);
            switch (g) {
            case d.TAG_NAME:
                b.tagName = f;
                break;
            case d.CLASS_NAMES:
                0 < f.length && (b.classNames = f.split(","));
                break;
            case d.CONTAINER_CSS_STYLING:
                g = f.split(";");
                for (f = 0; f < g.length; f++)
                    b.containerCssStyling.push(g[f].split(":"));
                break;
            case d.PAGE_URL:
                b.pageUrl = f;
                break;
            case d.AD_SLOT_NAME:
                b.adSlotName =
                f;
                break;
            case d.INSERTION_INDEX:
                g = parseInt(f, 10);
                b.insertionIndex = 0 <= g ? g : 1;
                break;
            case d.FILTER_FOR_ARTICLES_BELOW_FOLD:
                b.filterForArticlesBelowFold=!!f
            }
        }
    }
    return b
};
ek.prototype.O = function(a, b) {
    var c = S(a);
    if (c.wasReactiveAdConfigReceived[8])
        return !1;
    var d = dk(b);
    if (!d)
        return !1;
    c.wasReactiveAdConfigReceived[8]=!0;
    this.s(a, d);
    return !0
};
ek.prototype.s = function(a, b) {
    var c = Vj(a, b), d = a.document.createElement("ins");
    d.className = "adsbygoogle";
    c.appendChild(d);
    var e = Xj(a, b, c);
    e && (c = Yj(e), e = Zj(e), c = {
        google_ad_channel: "GoogleAutoInstream",
        google_ad_client: b.adClient,
        google_ad_slot: b.adSlotName,
        google_ad_width: e,
        google_ad_height: c,
        google_page_url: b.pageUrl,
        google_reactive_ad_format: 24
    }, Ej(d, c, a))
};
var fk = function() {}, gk = function(a) {
    if (!a)
        return null;
    var b = new fk, c = a.adClient;
    q(c) && (b.adClient = c);
    c = a.adWidth;
    fa(c) && 0 < c && (b.adWidth = c);
    c = a.adHeight;
    fa(c) && 0 < c && (b.adHeight = c);
    c = a.adSlot;
    q(c) && (b.adSlot = c);
    c = a.adChannel;
    q(c) && (b.adChannel = c);
    a = a.adTest;
    q(a) && (b.adTest = a);
    return b.adClient && b.adWidth && b.adHeight ? b : null
}, hk = function() {};
ca(hk);
hk.prototype.M = function(a, b) {
    var c = ik(b), d = S(a);
    d.wasReactiveAdConfigReceived[1]=!0;
    this.s(a, c)
};
hk.prototype.O = function(a, b) {
    var c = S(a);
    if (c.wasReactiveAdConfigReceived[1])
        return !1;
    var d = gk(b);
    if (!d)
        return !1;
    c.wasReactiveAdConfigReceived[1]=!0;
    this.s(a, d);
    return !0
};
hk.prototype.s = function(a, b) {
    var c = a.document.createElement("ins");
    c.className = "adsbygoogle";
    a.document.body.appendChild(c);
    var d = String(Math.random()), d = d.slice( - 3), d = {
        google_ad_client: b.adClient,
        google_ad_width: b.adWidth,
        google_ad_height: b.adHeight,
        google_ad_format: b.adWidth + "x" + b.adHeight + "_as",
        google_reactive_ad_format: 1,
        google_ad_section: d,
        google_pgb_reactive: !0
    };
    b.adSlot && (d.google_ad_slot = b.adSlot);
    d.google_ad_channel = "GoogleAnchorAd";
    b.adChannel && (d.google_ad_channel += "+" + b.adChannel);
    b.adTest &&
    (d.google_adtest = b.adTest);
    Ej(c, d, a)
};
var ik = function(a) {
    var b = new fk;
    b.adClient = a;
    b.adWidth = 320;
    b.adHeight = 50;
    b.adTest = "on";
    return b
};
var jk = function() {
    this.spaMode=!1
}, kk = function(a) {
    if (!a)
        return null;
    var b = new jk, c = a.adClient;
    q(c) && (b.adClient = c);
    c = a.adTest;
    q(c) && (b.adTest = c);
    if (a = a.spaMode)
        b.spaMode=!0;
    return b.adClient ? b : null
}, lk = function() {};
ca(lk);
lk.prototype.M = function(a, b, c) {
    var d = new jk;
    d.adClient = b;
    d.adTest = "on";
    mk(c, "google_ia_debug_spa") && (d.spaMode=!0);
    b = S(a);
    b.wasReactiveAdConfigReceived[2]=!0;
    this.s(a, d)
};
lk.prototype.O = function(a, b) {
    var c = S(a);
    if (c.wasReactiveAdConfigReceived[2])
        return !1;
    var d = kk(b);
    if (!d)
        return !1;
    c.wasReactiveAdConfigReceived[2]=!0;
    this.s(a, d);
    return !0
};
lk.prototype.s = function(a, b) {
    var c = a.document.createElement("ins");
    c.className = "adsbygoogle";
    c.style.display = "none";
    a.document.documentElement.appendChild(c);
    var d = Eg(a), e = Fg(a), d = {
        google_ad_channel: "GoogleVignetteAd",
        google_ad_client: b.adClient,
        google_ad_width: e,
        google_ad_height: d,
        google_reactive_ad_format: 8,
        google_pgb_reactive: !0
    };
    b.spaMode && (d.google_vignette_manual_trigger=!0);
    b.adTest && (d.google_adtest = b.adTest);
    Ej(c, d, a)
};
var nk = function() {};
ca(nk);
nk.prototype.M = function(a) {
    Jb(a, "resize", r(this.ga, this, a))
};
nk.prototype.O = function(a, b) {
    var c = S(a);
    if (c.wasReactiveAdConfigReceived[4] ||!b)
        return !1;
    c.wasReactiveAdConfigReceived[4]=!0;
    this.qd = this.xb(a);
    Jb(a, "resize", r(this.ga, this, a));
    return !0
};
nk.prototype.ga = function(a) {
    var b = this.xb(a);
    if (this.qd != b) {
        this.qd = b;
        for (var b = ok(a), c = 0; c < b.length; c++)
            if (b[c].pubElement.offsetWidth != b[c].offsetWidth) {
                b[c].offsetWidth = b[c].pubElement.offsetWidth;
                var d = ja(pk, b[c].pubElement, b[c].pubVars, a);
                Oc("resp::och", Sc, d)
            }
    }
};
nk.prototype.xb = function(a) {
    return a.innerHeight >= a.innerWidth ? 0 : 90
};
var sk = function(a, b) {
    var c = kc(b);
    if (c && a.google_ad_resizable&&!a.google_reactive_ad_format && qk(c) && c == c.top) {
        var d = rk(a, c);
        if (d) {
            var c = ok(c), e = xh(a);
            c.push({
                pubElement: d,
                pubVars: e,
                offsetWidth: d.offsetWidth
            })
        }
    }
}, ok = function(a) {
    a = S(a);
    a.stateForType[4] || (a.stateForType[4] = []);
    return a.stateForType[4]
}, pk = function(a, b, c) {
    var d = tk(a, b);
    uk(b);
    Fj(a, b, c);
    var e = tk(a, b);
    !e && d && 1 == a.childNodes.length ? (vk(d, !1), b.google_reactive_ad_format = 16, b.google_ad_section = "responsive_resize", Ej(a, b, c)) : e && d ? e != d && (vk(d,
    !1), vk(e, !0)) : G("auto_size_refresh", {
        context: "showOrHideElm",
        url: c.location.href,
        nodes: a.childNodes.length
    })
}, vk = function(a, b) {
    a.style.display = b ? "inline-block" : "none"
}, tk = function(a, b) {
    for (var c = 0; c < a.childNodes.length; c++) {
        var d = {};
        Mf(a.childNodes[c].style, d);
        if (d.google_ad_width == b.google_ad_width && d.google_ad_height == b.google_ad_height)
            return a.childNodes[c]
    }
    return null
}, rk = function(a, b) {
    var c = b.document.getElementById(a.google_async_iframe_id);
    if (c) {
        for (c = c.parentElement; c&&!lc.test(c.className);)
            c =
            c.parentElement;
        return c
    }
}, uk = function(a) {
    delete a.google_ad_format;
    delete a.google_ad_width;
    delete a.google_ad_height
}, qk = function(a) {
    return !!a.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(a.navigator.userAgent)
};
var wk = {
    1: 1,
    8: 2,
    16: 4,
    24: 8
}, xk = function(a, b, c) {
    switch (c) {
    case 1:
        return jh(a);
    case 2:
        return zh(a, b) && Bh(a);
    case 8:
        return Sj(a, b) && ak(a)
    }
    return !1
}, yk = function(a, b, c) {
    switch (c) {
    case 1:
        return hh(a);
    case 2:
        return zh(a, b);
    case 4:
        return !!b.google_ad_resizable&&!b.google_reactive_ad_format && qk(a) && a == a.top;
    case 8:
        return Sj(a, b)
    }
    return !1
}, zk = function(a, b) {
    var c = b.google_reactive_ad_format;
    if (!Ld(pc, c))
        return !1;
    var d = kc(a);
    if (!d)
        return !1;
    c = wk[c] || null;
    if (!xk(d, b, c))
        return !1;
    var d = S(d), e = d.wasReactiveAdCreated[c];
    d.wasReactiveAdCreated[c]=!0;
    return !e
}, Ak = function(a) {
    switch (a) {
    case 1:
        return hk.getInstance();
    case 2:
        return lk.getInstance();
    case 4:
        return nk.getInstance();
    case 8:
        return ek.getInstance()
    }
    return null
}, Bk = function(a, b) {
    var c = a.location.hash;
    if (!c ||!c.indexOf)
        return !1;
    var d;
    mk(c, "google_anchor_debug") ? d = Ak(1) : mk(c, "google_ia_debug") ? d = Ak(2) : mk(c, "google_resize_debug") ? d = Ak(4) : mk(c, "google_instream_debug") && (d = Ak(8));
    if (!d)
        return !1;
    d.M(a, b, c);
    return !0
}, Dk = function(a, b) {
    var c = kc(b);
    if (!c)
        return null;
    var d = S(c);
    if (!d.wasReactiveAdConfigHandlerRegistered)
        return null;
    var e = 0;
    D(oc, function(b) {
        Ck(a, c, b) && (e|=b)
    });
    return e ? "" + e : null
}, Ek = function(a, b) {
    var c = kc(b);
    if (!c)
        return !1;
    var d = S(c);
    if (d.wasReactiveAdConfigHandlerRegistered)
        return !1;
    var e=!1;
    D(oc, function(b) {
        Ck(a, c, b) && (e=!0)
    });
    return d.wasReactiveAdConfigHandlerRegistered = e
}, mk = function(a, b) {
    if ( - 1 != a.indexOf(b))
        return !0;
    var c = Fk(b);
    return - 1 != a.indexOf(c)?!0 : !1
}, Gk = function(a, b) {
    if ( - 1 != a.indexOf(b))
        return a.substring(a.indexOf(b) + b.length, a.length);
    var c = Fk(b);
    return - 1 != a.indexOf(c) ? a.substring(a.indexOf(c) + c.length, a.length) : ""
}, Fk = function(a) {
    var b = "";
    D(a.split("_"), function(a) {
        b += a.substr(0, 2)
    });
    return b
}, Ck = function(a, b, c) {
    if (!b)
        return !1;
    var d = S(b), e = wk[a.google_reactive_ad_format] || null;
    return yk(b, a, c) && e != c&&!d.wasReactiveAdCreated[c]
};
var Hk = function(a) {
    this.m = a;
    this.Se = Wc("rach::hdlr", r(this.vc, this));
    x(a, "message", this.Se, void 0)
}, Ik = function(a, b) {
    var c = kc(a);
    if (c) {
        var d = Bk(c, b);
        d || new Hk(c)
    }
};
Hk.prototype.vc = function(a) {
    if (a) {
        var b;
        try {
            if (!Dg[a.origin])
                return;
            b = zg(a.data)
        } catch (c) {}
        b && ((a = b.adType) || (a = 1), (a = Ak(a)) && a.O(this.m, b))
    }
};
var W = function(a, b, c) {
    this.Rb = a;
    this.Je = b;
    this.af = c;
    this.Qb = null;
    this.ne=!1;
    this.easeFn = this.current = null;
    this.Yb=!!Jk&&!/iPhone/.test(window.navigator.userAgent)
}, Jk = window.requestAnimationFrame || window.webkitRequestAnimationFrame, Kk = function(a) {
    return a * a * a
}, Lk = function(a) {
    a = 1 - a;
    return 1 - a * a * a
};
W.prototype.oa = function(a) {
    if (this.ne)
        this.U();
    else {
        a = this.Yb ? a : ka();
        null === this.Qb && (this.Qb = a);
        a = (a - this.Qb) / this.af;
        1 <= a && (a = 1);
        var b = this.easeFn ? this.easeFn(a): a;
        this.we(b);
        this.K();
        1 == a ? this.da() : this.Yb ? Jk(r(this.oa, this)) : C.setTimeout(r(this.oa, this), 20)
    }
};
W.prototype.da = function() {};
W.prototype.U = function() {};
W.prototype.K = function() {};
W.prototype.we = function(a) {
    this.current = [];
    for (var b = 0; b < this.Rb.length; b++)
        this.current.push((this.Je[b] - this.Rb[b]) * a + this.Rb[b])
};
W.prototype.play = function() {
    this.Yb ? Jk(r(this.oa, this)) : this.oa(0)
};
W.prototype.stop = function() {
    this.ne=!0
};
var Mk = function(a, b) {
    this.F = a;
    W.call(this, [Number(ef(a))], [1], b)
};
t(Mk, W);
Mk.prototype.K = function() {
    ff(this.F, this.current[0])
};
var Nk = function(a, b, c, d, e, f) {
    W.call(this, [b], [c], d);
    this.F = a;
    this.onEndCallback = e ? e : null;
    this.easeFn = f || null
};
t(Nk, W);
Nk.prototype.K = function() {
    var a = {
        bottom: this.current[0] + "px"
    };
    P(this.F, a)
};
Nk.prototype.da = function() {
    if (this.onEndCallback)
        this.onEndCallback()
};
var Ok = function(a, b, c) {
    this.F = a;
    this.onEndCallback = c ? c : null;
    W.call(this, [Number(ef(a))], [0], b)
};
t(Ok, W);
Ok.prototype.da = function() {
    Be(this.F);
    if (this.onEndCallback)
        this.onEndCallback()
};
Ok.prototype.K = function() {
    ff(this.F, this.current[0])
};
var Pk = function(a) {
    var b = Ye(a, Ce(a));
    a = jf(a, "margin");
    a = new L(a.left, a.top);
    return Id(b, a)
}, Qk = function(a, b, c, d) {
    this.F = a;
    this.Gc = b;
    this.Wc = c;
    this.rc = d;
    x(this.F, this.Gc, this.Wc, this.rc)
};
Qk.prototype.remove = function() {
    A(this.F, this.Gc, this.Wc, this.rc)
};
var Rk = function(a) {
    this.smoothing_ms = a;
    this.reset()
};
Rk.prototype.add = function(a) {
    var b = ka();
    this.sa.push({
        time: b,
        coords: a
    });
    this.uc(b)
};
Rk.prototype.reset = function() {
    this.sa = [];
    this.dd = 0;
    this.Me = null
};
Rk.prototype.uc = function(a) {
    for (var b = this.dd; b < this.sa.length; ++b) {
        var c = this.sa[b];
        if (a - c.time >= this.smoothing_ms)
            this.Me = c, delete this.sa[b];
        else 
            break
    }
    this.dd = b;
    b >= this.sa.length && this.reset()
};
var Sk = function(a, b, c, d) {
    this.D = a;
    this.target = b;
    this.handle = c || b;
    this.smoothing_ms = d || 100;
    this.Qa = this.Pa = this.Bb=!1;
    this.Da = this.currentCoords = this.startCoords = this.startPosition = this.Id = this.Gd = this.Jd = this.Hd = null;
    this.df = new Qk(this.handle, "mousedown", r(function(a) {
        0 == a.button && this.qb(a)
    }, this), !0);
    this.ef = new Qk(this.handle, "touchstart", r(this.qb, this), !0);
    this.cf = new Qk(this.handle, "click", r(function(a) {
        this.Bb ? (this.ua(), this.Bb=!1) : a.stopPropagation()
    }, this), !0)
}, Tk = function(a) {
    a = a.touches &&
    a.touches[0] || a;
    return new L(a.clientX, a.clientY)
};
Sk.prototype.va = function() {
    if (this.startPosition && this.startCoords && this.currentCoords) {
        var a = Id(this.currentCoords, this.startCoords);
        Qe(this.target, Jd(this.startPosition, a))
    }
};
Sk.prototype.U = ba;
Sk.prototype.ua = ba;
Sk.prototype.Ja = function() {
    return Pk(this.target)
};
Sk.prototype.qb = function(a) {
    this.Pa && this.Sb();
    this.Pa=!0;
    this.startPosition = this.Ja();
    this.currentCoords = this.startCoords = Tk(a);
    this.Da = new Rk(this.smoothing_ms);
    this.Da.add(this.startCoords);
    this.Hd = new Qk(this.D, "mousemove", r(this.Fb, this), !0);
    this.Jd = new Qk(this.D, "touchmove", r(this.Fb, this), !0);
    this.Gd = new Qk(this.D, "mouseup", r(this.Xb, this), !0);
    this.Id = new Qk(this.D, "touchend", r(this.Xb, this), !0)
};
Sk.prototype.Fb = function(a) {
    this.Pa && (nc(a), this.currentCoords = Tk(a), this.Da.add(this.currentCoords), this.Qa ? this.va() : 10 <= Hd(this.startCoords, this.currentCoords) && (this.va(), this.Qa=!0))
};
Sk.prototype.Xb = function(a) {
    this.Qa ? (nc(a), this.currentCoords = Tk(a), this.U()) : this.Bb=!0;
    this.Sb()
};
Sk.prototype.Sb = function() {
    this.Qa = this.Pa=!1;
    this.Da = this.currentCoords = this.startCoords = this.startPosition = null;
    this.Hd.remove();
    this.Jd.remove();
    this.Gd.remove();
    this.Id.remove()
};
var Uk = function(a, b, c, d, e) {
    this.W = a;
    this.m = b;
    this.l = b.document;
    this.R = c;
    this.Ea = d;
    this.Ne = e || ba
};
Uk.prototype.decorate = function() {};
Uk.prototype.Y = function() {
    return 0
};
Uk.prototype.X = function() {
    return 0
};
Uk.prototype.Ha = function() {
    return null
};
Uk.prototype.hide = function(a) {
    a && this.Ea && this.Ea()
};
var Vk = function(a, b, c) {
    return {
        background: "rgba(0,0,0,0.65)",
        boxShadow: "0 -5px 5px -5px rgba(0,0,0,0.5)",
        zIndex: 999999,
        position: "fixed",
        left: a + "px",
        bottom: b + "px",
        opacity: c
    }
}, Wk = function(a, b, c, d, e) {
    Uk.call(this, a, b, c, d, e)
};
t(Wk, Uk);
Wk.prototype.ma = function(a, b) {
    if ("bottom" != b)
        throw Error("unsupported reactive type");
    P(a, Vk(0, 0, !1));
    var c = new Mk(a, 350);
    c.play()
};
var Yk = function(a, b, c, d, e) {
    Uk.call(this, a, b, c, d, e);
    this.kd=!1;
    a = Xk;
    this.Ie =+ (this.W[a.ye] || 500);
    this.B =+ (this.W[a.ib] || 50);
    this.B >= Gg(this.m) && (this.B = 0);
    this.Le = "true" == this.W[a.Be]
};
t(Yk, Uk);
var Xk = {
    ye: "docking_delay",
    ib: "scroll_threshold",
    Be: "measure_scroll_from_bottom"
};
Yk.prototype.ma = function(a, b) {
    if ("bottom" != b)
        throw Error("unsupported reactive type");
    P(a, Vk(0, - 1 * this.R.height, !0))
};
Yk.prototype.decorate = function(a) {
    if (!this.kd) {
        var b = Hg(this.m), c = Gg(this.m), c = this.Le ? c - this.B - Eg(this.m): this.B;
        b >= c && (a = new Nk(a, - 1 * this.R.height, 0, this.Ie, this.Ne, Lk), a.play(), this.kd=!0)
    }
};
var X = function(a, b, c, d) {
    Uk.call(this, a, b, c, d);
    this.I = b.document.createElement("ins");
    this.I.addEventListener("click", r(this.ua, this));
    this.Dc = .1;
    d = Zk;
    this.B =+ (this.W[d.ib] || 0);
    this.B >= Gg(this.m) && (this.B = 0);
    this.Ka = 0 >= this.B;
    this.w = this.A=!1;
    this.Ib = 0;
    this.u = c;
    this.bf = a.gvar in $k ? $k[a.gvar] : "p";
    this.Db = "true" == this.W[d.Ae];
    this.Oa = "true" == this.W[d.ze];
    al(this.I, this.Y(), this.bf);
    this.upArrow = this.I.querySelector(".up");
    this.downArrow = this.I.querySelector(".down");
    this.manualMode=!1;
    this.q = this.dragAndDrop =
    null;
    !this.Oa && window.navigator.userAgent.match(/iPhone OS 7/) && (this.pollingId = b.setInterval(r(this.jd, this), 300));
    this.viewportHeight = b.innerHeight;
    this.fb()
};
t(X, Uk);
var Zk = {
    Ae: "scroll_detached",
    ze: "dismissable",
    ib: "scroll_threshold"
}, $k = {
    p: "p",
    hd: "hd",
    hl: "hl",
    b: "b",
    bl: "bl"
}, bl = function(a) {
    switch (a) {
    case "hd":
    case "b":
        return "#222222";
    case "hl":
    case "bl":
        return "#D8D8D8"
    }
    return "rgba(80, 80, 80, 1)"
}, cl = function(a) {
    switch (a) {
    case "hl":
    case "bl":
        return "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    }
    return "none"
}, al = function(a, b, c) {
    P(a, {
        "background-color": bl(c),
        display: "block",
        position: "relative",
        "z-index": 1,
        height: b + "px",
        "box-shadow": cl(c)
    });
    a.innerHTML = dl(c)
};
X.prototype.jd = function() {
    var a = this.m.innerHeight;
    if (2 > Math.abs(a - 460) || 2 > Math.abs(a - 529))
        a < this.viewportHeight && 2 > Math.abs(Hg(this.m) - this.Ib - 68) && this.Fd(), this.viewportHeight = a
};
X.prototype.Fd = function() {
    this.manualMode=!0;
    this.w && this.show()
};
X.prototype.Ha = function() {
    return this.I
};
X.prototype.Y = function() {
    return 15
};
X.prototype.X = function() {
    return 30
};
var dl = function(a) {
    switch (a) {
    case "p":
        return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0; left:50%;display: block; width: 60px;height: 30px; border:1px solid white; background-color: black;" xmlns="http://www.w3.org/2000/svg"><g class="up" stroke="#fff" stroke-width="2px" stroke-linecap="square"><line x1="22" y1="19" x2="30" y2="11"></line><line x1="30" y1="11" x2="38" y2="19"></line></g><g class="down" stroke="#fff" stroke-width="2px" stroke-linecap="square"><line x1="22" y1="11" x2="30" y2="19"></line><line x1="30" y1="19" x2="38" y2="11"></line></g></svg>';
    case "hd":
        return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0;left:50%;display: block; width: 60px;height: 30px;" xmlns="http://www.w3.org/2000/svg"><path d="M10,30 C 7,-7 53,-7 50,30 Z" stroke="#222222" stroke-width="1" fill="#222222" /><rect x="0" y="15" width="60" height="15" style="fill:#222222"/><g class="up" stroke-width="0px" stroke-linecap="square"><path d="M 22,19 L30,10 L38,19 Z" fill="#888888" /></g><g class="down" stroke-width="0px" stroke-linecap="square" style="display:none"><path d="M 22,13 L30,22 L38,13 Z" fill="#888888"/></g></svg>';
    case "hl":
        return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0; left:50%;display: block; width: 60px;height: 30px;"xmlns="http://www.w3.org/2000/svg"><defs><filter id="dropShadowTop" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceAlpha" result="TransferredAlpha">  <feFuncR type="discrete" tableValues="0.8"/>  <feFuncG type="discrete" tableValues="0.8"/>  <feFuncB type="discrete" tableValues="0.8"/></feComponentTransfer><feGaussianBlur in="TransferredAlpha" stdDeviation="2"/><feOffset dx="0" dy="0" result="offsetblur"/><feMerge>  <feMergeNode/>  <feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="dropShadowBottomRight" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceAlpha" result="TransferredAlpha">  <feFuncR type="discrete" tableValues="0.5"/>  <feFuncG type="discrete" tableValues="0.5"/>  <feFuncB type="discrete" tableValues="0.5"/></feComponentTransfer><feGaussianBlur in="TransferredAlpha" stdDeviation="2"/><feOffset dx="1" dy="1" result="offsetblur"/> <feMerge>  <feMergeNode/>  <feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M10,15 C 20,0 40,0 50,15 Z"stroke="#D8D8D8" stroke-width="1" fill="#D8D8D8" style="filter:url(#dropShadowTop)"/><rect x="0" y="15" width="60" height="15" style="fill:#D8D8D8"/><g class="up" stroke-width="0px" stroke-linecap="square" style="filter:url(#dropShadowBottomRight)"><path d="M 22,19 L30,10 L38,19 Z" fill="#888888"/></g><g class="down" stroke-width="0px" stroke-linecap="square" style="filter:url(#dropShadowBottomRight)"><path d="M 22,13 L30,22 L38,13 Z" fill="#888888"/></g></svg>';
    case "b":
        return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0;left:50%;display: block; width: 60px;height: 30px;" xmlns="http://www.w3.org/2000/svg"><path d="M10,30 C 7,-7 53,-7 50,30 Z" stroke="#222222" stroke-width="1" fill="#222222" /><rect x="0" y="15" width="60" height="15" style="fill:#222222"/><g class="down" stroke="#888888" stroke-width="2px" stroke-linecap="square"><line x1="22" y1="13" x2="38" y2="13"/><line x1="22" y1="17" x2="38" y2="17"/><line x1="22" y1="21" x2="38" y2="21"/></g><g class="up" stroke="#888888" stroke-width="2px" stroke-linecap="square"><line x1="22" y1="13" x2="38" y2="13"/><line x1="22" y1="17" x2="38" y2="17"/><line x1="22" y1="21" x2="38" y2="21"/></g></svg>';
    case "bl":
        return '<svg style="margin: 0 0 0 -30px; position: absolute; bottom:0; left:50%;display: block; width: 60px;height: 30px;"xmlns="http://www.w3.org/2000/svg"><defs><filter id="dropShadowTop" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceAlpha" result="TransferredAlpha">  <feFuncR type="discrete" tableValues="0.8"/>  <feFuncG type="discrete" tableValues="0.8"/>  <feFuncB type="discrete" tableValues="0.8"/></feComponentTransfer><feGaussianBlur in="TransferredAlpha" stdDeviation="2"/><feOffset dx="0" dy="0" result="offsetblur"/><feMerge>  <feMergeNode/>  <feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="dropShadowBottomRight" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feComponentTransfer in="SourceAlpha" result="TransferredAlpha">  <feFuncR type="discrete" tableValues="0.5"/>  <feFuncG type="discrete" tableValues="0.5"/>  <feFuncB type="discrete" tableValues="0.5"/></feComponentTransfer><feGaussianBlur in="TransferredAlpha" stdDeviation="2"/><feOffset dx="1" dy="1" result="offsetblur"/> <feMerge>  <feMergeNode/>  <feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path d="M10,15 C 20,0 40,0 50,15 Z"stroke="#D8D8D8" stroke-width="1" fill="#D8D8D8" style="filter:url(#dropShadowTop)"/><rect x="0" y="15" width="60" height="15" style="fill:#D8D8D8"/><g class="up" stroke="#888888" stroke-width="2px" stroke-linecap="square" style="filter:url(#dropShadowBottomRight)"><line x1="22" y1="13" x2="38" y2="13"/><line x1="22" y1="17" x2="38" y2="17"/><line x1="22" y1="21" x2="38" y2="21"/></g><g class="down" stroke="#888888" stroke-width="2px" stroke-linecap="square" style="filter:url(#dropShadowBottomRight)"><line x1="22" y1="13" x2="38" y2="13"/><line x1="22" y1="17" x2="38" y2="17"/><line x1="22" y1="21" x2="38" y2="21"/></g></svg>';
    default:
        throw Error("Unexpected variant: " + a);
    }
};
X.prototype.pingback = function(a, b, c) {
    a = {
        i: a,
        dc: this.w ? "1": "0",
        fdc: b ? "1": "0",
        ds: this.Oa ? "1": "0",
        sc: this.Db ? "1": "0",
        st: this.B,
        off: c
    };
    G("flgr", a, 1)
};
X.prototype.ua = function(a) {
    nc(a);
    this.A || (this.manualMode=!0, this.w ? this.show() : this.hide(this.Oa), this.pingback("c", !this.w, 0))
};
X.prototype.fb = function() {
    this.upArrow.style.display = "none";
    this.downArrow.style.display = ""
};
X.prototype.Pb = function() {
    this.upArrow.style.display = "";
    this.downArrow.style.display = "none"
};
X.prototype.show = function() {
    if (!this.A) {
        var a = parseInt(this.q.style.bottom, 10), b = Hg(this.m);
        !this.Ka && b >= this.B || this.Ka && 0 != a ? (this.A=!0, a = new Nk(this.q, a, 0, - a / this.Dc, r(function() {
            this.w = this.A=!1;
            this.Ka=!0;
            this.fb()
        }, this), Lk), a.play()) : (this.w=!1, this.fb())
    }
};
X.prototype.hide = function(a) {
    if (!this.A) {
        var b = parseInt(this.q.style.bottom, 10), c =- this.u.height - (a ? this.X() : 0);
        b != c ? (this.A=!0, b = new Nk(this.q, b, c, (b - c) / this.Dc, r(function() {
            this.A=!1;
            this.w=!0;
            this.Pb();
            a && this.Ea && this.Ea()
        }, this), Kk), b.play()) : (this.w=!0, this.Pb())
    }
};
X.prototype.ad = function() {
    P(this.I, {
        visibility: "hidden"
    });
    P(this.q, {
        background: "transparent"
    })
};
X.prototype.ke = function() {
    P(this.I, {
        visibility: "visible"
    });
    P(this.q, {
        background: "rgba(0,0,0,1)"
    })
};
X.prototype.ma = function(a, b) {
    if ("bottom" != b)
        throw Error("unsupported reactive type");
    P(a, {
        opacity: 1
    });
    var c = window.top.document;
    c && (this.q = a, this.dragAndDrop = new el(this, c, this.u.height, a, this.I), P(a, {
        background: "rgba(0,0,0,1)",
        zIndex: 999999,
        position: "fixed",
        left: "0px",
        bottom: - this.R.height - this.X() + "px"
    }), this.show())
};
X.prototype.Ed = function() {
    if (!this.A) {
        var a = parseInt(this.q.style.bottom, 10);
        a>-this.u.height / 2 ? (this.show(), this.pingback("d", !1, a)) : (this.hide(this.Oa), this.pingback("d", !0, a))
    }
};
X.prototype.decorate = function() {
    if (this.Ka) {
        var a = Hg(this.m), b = a - this.Ib;
        if (!(10 > Math.abs(b))) {
            var b = 10 > a, c = a + 10 + Eg(this.m) > Gg(this.m);
            this.Db || this.manualMode || b || c || this.A || this.w || this.hide(!1);
            this.Db || this.manualMode ||!b&&!c || this.A ||!this.w || this.show();
            this.Ib = a
        }
    } else 
        this.show()
};
var el = function(a, b, c, d, e) {
    this.vd = c;
    this.He = a;
    Sk.call(this, b, d, e)
};
t(el, Sk);
el.prototype.U = function() {
    this.He.Ed()
};
el.prototype.va = function() {
    if (null !== this.startPosition && null !== this.startCoords && null !== this.currentCoords) {
        var a = Id(this.currentCoords, this.startCoords), a = this.startPosition.y - a.y;
        0 < a && (a = 0);
        a<-this.vd && (a =- this.vd);
        P(this.target, {
            bottom: a + "px"
        })
    }
};
el.prototype.Ja = function() {
    return new L(0, parseInt(this.target.style.bottom, 10))
};
var fl = function(a) {
    a = a.className;
    return q(a) && a.match(/\S+/g) || []
}, gl = function(a, b) {
    return Fd(fl(a), b)
};
var hl = function(a, b, c) {
    this.asyncIframe = a;
    this.adFrame = b;
    this.topWindow = c
};
hl.prototype.Rc = function() {
    return this.adFrame
};
hl.prototype.Ia = function() {
    if (!this.Fa) {
        this.Fa = [];
        for (var a = this.asyncIframe; a&&!gl(a, this.Tc());)
            this.Fa.push(a), a = a.parentNode;
        a && this.Fa.push(a)
    }
    return this.Fa
};
hl.prototype.Tc = function() {
    return "adsbygoogle"
};
hl.prototype.G = function() {
    if (!this.q) {
        var a = this.Ia();
        if (!a || 2 > a.length)
            return null;
        this.q = a[a.length - 1]
    }
    return this.q
};
var Y = function(a, b, c, d) {
    hl.call(this, a, b, c);
    this.qa = this.Kc = this.pb=!1;
    this.aa = null;
    this.Oe = jf(c.document.body, "padding");
    this.ca = 0;
    this.Yc=!1;
    this.Sa=!0;
    this.Ub = d;
    this.u = this.Sc();
    this.Ta = this.R = null;
    this.hide();
    this.Te = Kb(this.topWindow, "orientationchange", this, this.ga);
    this.Ue = Kb(this.topWindow, "resize", this, this.Ud);
    this.ka = Kb(this.topWindow, "scroll", this, this.Yd);
    this.Ve = Kb(this.topWindow, "touchcancel", this, this.pe);
    this.We = Kb(this.topWindow, "touchend", this, this.qe);
    this.Xe = Kb(this.topWindow,
    "touchmove", this, this.re);
    this.Ye = Kb(this.topWindow, "touchstart", this, this.se)
};
t(Y, hl);
Y.prototype.Ob = function(a, b) {
    if (!this.v) {
        var c = Mg(b), d = this.topWindow.location.hash || "";
        mk(d, "google_anchor_debug") && (c.ui = Gk(d, "google_anchor_debug"));
        switch (c.ui) {
        case "scf":
            d = r(this.dismiss, this, !0);
            this.v = new Yk(c, this.topWindow, this.u, d, a);
            break;
        case "gr":
            d = r(this.dismiss, this, !1);
            c = new X(c, this.topWindow, this.u, d);
            null != window.google_expandable_ad_slot1 && (d = window.google_expandable_ad_slot1, d.listen("expanding", c.ad, !1, c), d.listen("collapsed", c.ke, !1, c));
            this.v = c;
            break;
        default:
            d = r(this.dismiss,
            this, !0), this.v = new Wk(c, this.topWindow, this.u, d)
        }
        this.R = new M(this.u.width, this.u.height + this.v.Y());
        c = this.v.Ha();
        d = this.G();
        c && d.insertBefore(c, d.firstChild)
    }
};
Y.prototype.dismiss = function(a) {
    this.pb || (this.pb=!0, A(this.topWindow, "orientationchange", this.Te, void 0), A(this.topWindow, "resize", this.Ue, void 0), A(this.topWindow, "scroll", this.ka, void 0), A(this.topWindow, "touchcancel", this.Ve, void 0), A(this.topWindow, "touchend", this.We, void 0), A(this.topWindow, "touchmove", this.Xe, void 0), A(this.topWindow, "touchstart", this.Ye, void 0), a ? (a = new Ok(this.G(), 250, r(this.Za, this)), a.play()) : this.Za())
};
Y.prototype.Vc = function() {
    this.v.hide(!0)
};
Y.prototype.hide = function() {
    this.Sa && (P(this.G(), "display", "none"), this.Za(), this.Sa=!1)
};
Y.prototype.ie = function(a) {
    this.Ta = a
};
Y.prototype.ba = function() {
    this.Kc=!0;
    if (!this.Yc && this.lb()) {
        var a = this.G();
        a && (this.ic(), this.v.ma(a, this.Ub), this.show(), this.Ta && (this.Ta(), this.Ta = null), this.Yc=!0)
    }
};
Y.prototype.show = function() {
    var a = this.G();
    a && (this.v.decorate(a), this.Sa || (this.hc(), P(a, {
        display: "block"
    }), this.Sa=!0))
};
Y.prototype.hc = function() {
    il(this.topWindow.document.body, this.Uc())
};
Y.prototype.ic = function() {
    var a = this.Ia();
    if (a&&!(2 > a.length)) {
        var b = a[a.length - 1], c = a[0];
        if (b && c) {
            c = gh();
            bf(b, this.R);
            c && P(b, "width", "100%");
            for (b = a.length - 2; 0 <= b; --b)
                bf(a[b], this.u), c && P(a[b], "width", "100%");
            P(this.adFrame, {
                display: "block",
                margin: "0 auto"
            });
            c && P(this.adFrame, "width", "100%")
        }
    }
};
Y.prototype.Uc = function() {
    var a;
    switch (this.Ub) {
    case "bottom":
        if (a = jf(this.topWindow.document.body, "padding")) {
            var b = this.v.X() - this.v.Y();
            a.bottom += this.R.height + b
        }
    }
    return a
};
Y.prototype.Sc = function() {
    var a;
    switch (this.Ub) {
    case "bottom":
        a = this.topWindow.innerWidth;
        var b = cf(df, this.adFrame).height||+this.adFrame.height || 0;
        a = new M(a, b)
    }
    return a
};
Y.prototype.cd = function() {
    return Ig(this.topWindow)
};
Y.prototype.ga = function() {
    this.H()
};
Y.prototype.Ud = function() {
    this.H()
};
Y.prototype.Yd = function() {
    this.H()
};
Y.prototype.pe = function() {
    this.aa = "touchcancel";
    this.topWindow.setTimeout(r(function() {
        "touchcancel" == this.aa && (this.ca = 0, this.qa=!1, this.H())
    }, this), 1E3)
};
Y.prototype.qe = function(a) {
    this.aa = "touchend";
    var b = a.touches.length;
    2 > b ? this.topWindow.setTimeout(r(function() {
        "touchend" == this.aa && (this.ca = b, this.qa=!1, this.H())
    }, this), 1E3) : (this.ca = b, this.H())
};
Y.prototype.re = function(a) {
    this.aa = "touchmove";
    this.ca = a.touches.length;
    this.qa=!0;
    this.H()
};
Y.prototype.se = function(a) {
    this.aa = "touchstart";
    this.ca = a.touches.length;
    this.qa=!1;
    this.H()
};
Y.prototype.Za = function() {
    il(this.topWindow.document.body, this.Oe)
};
Y.prototype.pd = function() {
    return 2 <= this.ca && this.qa
};
Y.prototype.H = function() {
    this.Kc&&!this.pb&&!this.pd() && this.lb() ? (this.ba(), this.show()) : this.hide()
};
Y.prototype.lb = function() {
    if (!this.cd())
        return !1;
    if (gh()) {
        var a = this.topWindow.innerWidth;
        return 320 <= a && 480 >= a
    }
    return Kg(this.topWindow)
};
var il = function(a, b) {
    P(a, {
        paddingTop: b.top + "px",
        paddingLeft: b.left + "px",
        paddingRight: b.right + "px",
        paddingBottom: b.bottom + "px"
    })
};
var jl = function(a, b) {
    Og.call(this, a);
    this.Z = b;
    this.pa = this.Cc=!1
};
t(jl, Og);
jl.prototype.Bc = function() {
    this.Cc || (this.Cc=!0, this.Z.Vc())
};
jl.prototype.Ic = function(a) {
    if (!this.pa) {
        this.pa=!0;
        var b = Vc("fas::fsv", r(this.Mc, this));
        gh() ? (this.Z.ie(b), this.Z.Ob(function() {}, a)) : this.Z.Ob(b, a);
        this.Z.ba()
    }
};
jl.prototype.ja = function(a) {
    a.fill = this.Ic;
    a.dismiss = this.Bc
};
jl.prototype.Mc = function() {
    var a = {
        msg_type: "manual-send-view"
    };
    this.Z.Rc().contentWindow.postMessage(this.topWindow.JSON.stringify(a), Ad("googleads.g.doubleclick.net", ""))
};
var Z = function(a, b, c, d) {
    hl.call(this, a, b, c);
    this.me = d;
    this.l = c.document;
    this.Pe = c.location.hostname;
    this.Qe = kl(c.location.href);
    this.Na = [];
    this.ec = this.Aa=!1;
    this.ta = 0;
    this.sd=!1;
    this.Bd = null;
    this.Zc=!0;
    this.$d = this.Zd =- 1;
    this.bd = "";
    this.he();
    this.ia = this.Ba = this.Ca = null;
    this.animationType = ""
};
t(Z, hl);
var ll = /^(www\.|m\.|mobile\.)*/i, ml = {
    "animation-name": "slideFromBottom",
    "-webkit-animation-name": "slideFromBottom",
    "animation-duration": "1s",
    "-webkit-animation-duration": "1s",
    "animation-timing-function": "ease",
    "-webkit-animation-timing-function": "ease"
}, nl = {
    "animation-name": "slideFromRight",
    "-webkit-animation-name": "slideFromRight",
    "animation-duration": "1s",
    "-webkit-animation-duration": "1s",
    "animation-timing-function": "ease",
    "-webkit-animation-timing-function": "ease"
}, ol = {
    backgroundColor: "white",
    opacity: "1",
    position: "fixed",
    left: "0px",
    top: "0px",
    display: "none",
    zIndex: "2147483647"
}, pl = {
    width: "100%",
    height: "100%"
}, ql = {
    left: "0",
    position: "absolute",
    top: "0"
}, rl = {
    width: "100%",
    "min-height": "100%"
}, kl = function(a) {
    var b = ki(a);
    a = b[5] || "";
    b = b[6];
    return a + (b ? "?" + b : "")
};
Z.prototype.de = function(a) {
    this.Ba = a
};
Z.prototype.je = function(a) {
    this.ia = a
};
Z.prototype.bc = function(a) {
    this.ec || (this.ec=!0, this.La() || (this.Sd = a, this.Ma(), this.Ad()))
};
Z.prototype.dismiss = function() {
    this.la(!1)
};
Z.prototype.yb = function() {
    return !!this.ta
};
Z.prototype.hide = function() {
    this.Aa || this.wd();
    this.la(!1)
};
Z.prototype.La = function() {
    return this.me
};
Z.prototype.Fc = function() {
    this.me=!0
};
Z.prototype.ee = function(a) {
    this.animationType = a
};
Z.prototype.te = function() {
    var a = this.G();
    a && (a.style.backgroundColor = "transparent")
};
Z.prototype.ba = function(a, b) {
    if (!this.yb()) {
        this.Eb();
        this.ve();
        this.xc();
        this.wc(a);
        this.Bd = b;
        this.gc();
        var c = Wc("ifr::hid", r(this.Kd, this));
        x(this.topWindow, "pagehide", c, void 0)
    }
};
Z.prototype.Eb = function() {
    this.ta = ka();
    this.la(!0)
};
Z.prototype.ea = function() {
    var a = this.topWindow.location;
    return - 1 != a.hash.indexOf("google_vignette")
};
Z.prototype.rb = function(a) {
    this.Xa && (this.Zc = a)
};
Z.prototype.gc = function() {
    this.ea() || (this.topWindow.location.hash = "google_vignette");
    this.Xa = Wc("ifr::hch", r(this.$c, this));
    var a = ja(Jb, this.topWindow, "hashchange", this.Xa);
    this.topWindow.setTimeout(a, 0)
};
Z.prototype.lc = function(a) {
    var b = a.getAttribute("data-google-vignette");
    if ("false" == b)
        return !1;
    var c = a.href, d = c && (ki(c)[3] || null);
    return this.mc(a, c, d) ? "true" == b?!0 : this.nc(a, d) : !1
};
Z.prototype.nc = function(a, b) {
    if (a.onclick)
        return !1;
    for (var c = a, d = 0; 10 > d && c.parentElement; ++d)
        if (c = c.parentElement, c.onclick)
            return !1;
    c = ll;
    return this.Ec(b) || b.replace(c, "") == this.Pe.replace(c, "")?!0 : !1
};
Z.prototype.Ec = function(a) {
    if (this.Ba && a)
        for (var b = 0; b < this.Ba.length; b++) {
            var c = this.Ba[b];
            if ( - 1 != a.indexOf(c, a.length - c.length))
                return !0
        }
    return !1
};
Z.prototype.mc = function(a, b, c) {
    if (!b || (a = a.target) && "_self" != a && "_top" != a)
        return !1;
    a = kl(b);
    b =- 1 != b.indexOf("#");
    return !c || a == this.Qe && b?!1 : !0
};
Z.prototype.ob = function(a, b) {
    var c = this.l.createElement("link");
    c.setAttribute("rel", b);
    c.setAttribute("href", a);
    return c
};
Z.prototype.wc = function(a) {
    this.Nd = this.ob(a, "prerender");
    this.Md = this.ob(a, "prefetch");
    this.l.body.appendChild(this.Nd);
    this.l.body.appendChild(this.Md)
};
Z.prototype.xc = function() {
    for (var a = 0; a < this.Na.length; ++a) {
        var b = this.Na[a];
        A(b, "click", this.Sd, void 0);
        b.removeAttribute("data-google-reveal-ad")
    }
    this.Na = []
};
Z.prototype.$c = function() {
    if (this.Zc)
        if (this.ea()) {
            this.Wd();
            var a = {
                fnv: 1,
                req: this.adFrame.src,
                qid: this.ia
            };
            this.ia && (a.qid = this.ia);
            G("ia_evt", a, 1);
            this.Bd()
        } else 
            this.hide()
};
Z.prototype.Ma = function() {
    for (var a = this.l.links, b = 0; b < a.length; ++b) {
        var c = a[b];
        this.lc(c) && (this.gd(c), mk(this.topWindow.location.hash, "google_ia_debug") && sl(c))
    }
};
Z.prototype.gd = function(a) {
    a.getAttribute("data-google-reveal-ad") || (this.Na.push(a), x(a, "click", this.Sd, void 0), a.setAttribute("data-google-reveal-ad", "true"))
};
var sl = function(a) {
    a.setAttribute("style", "border:1px solid #000; color: #6C12B9;");
    for (var b = 0; b < a.children.length; b++)
        a.children[b].setAttribute("style", "color: #6C12B9;")
};
Z.prototype.wd = function() {
    var a = {
        tth: ka() - this.ta,
        req: this.adFrame.src,
        qid: this.ia
    };
    G("ia_evt", a, 1)
};
Z.prototype.xd = function() {
    var a = {
        ttr: ka() - this.ta,
        req: this.adFrame.src,
        qid: this.ia
    };
    G("ia_evt", a, .1)
};
Z.prototype.Ad = function() {
    var a = Vc("ifr::mat", r(Z.prototype.Ma, this));
    this.Ca = this.topWindow.setInterval(a, 5E3)
};
Z.prototype.Kd = function() {
    this.Aa || this.xd();
    this.la(!1);
    this.Xa && A(this.topWindow, "hashchange", this.Xa, void 0);
    this.ka && A(this.topWindow, "scroll", this.ka, void 0);
    this.Td()
};
Z.prototype.Td = function() {
    this.l.body.removeChild(this.Nd);
    this.l.body.removeChild(this.Md)
};
Z.prototype.Wd = function() {
    this.topWindow.scrollTo(this.Zd, this.$d)
};
Z.prototype.Lb = function() {
    try {
        var a = this.l.documentElement, b = this.topWindow.pageXOffset || a.scrollLeft;
        this.Zd = b - (a.clientLeft || 0);
        var c = this.topWindow.pageYOffset || a.scrollTop;
        this.$d = c - (a.clientTop || 0)
    } catch (d) {
        this.sd || (this.sd=!0, Nc("ifr::sss", d))
    }
};
Z.prototype.yd = function() {
    "FROM_BOTTOM" == this.animationType||-1 != this.topWindow.location.hash.indexOf("google_ia_debug_fb") ? this.Wb("FROM_BOTTOM") : ("FROM_RIGHT" == this.animationType || mk(this.topWindow.location.hash, "google_ia_debug_fr")) && this.Wb("FROM_RIGHT")
};
Z.prototype.Wb = function(a) {
    var b = this.l.createElement("style");
    b.type = "text/css";
    var c = this.G();
    switch (a) {
    case "FROM_BOTTOM":
        b.appendChild(this.l.createTextNode("@keyframes slideFromBottom {0%  { transform: translateY(100%); }70% { transform: translateY(-6%);  }100%{ transform: translateY(0%);   } } @-webkit-keyframes slideFromBottom { 0%  { -webkit-transform: translateY(100%); }70% { -webkit-transform: translateY(-6%);  }100%{ -webkit-transform: translateY(0%);   }  }"));
        break;
    case "FROM_RIGHT":
        b.appendChild(this.l.createTextNode("@keyframes slideFromRight {0%  { transform: translateX(100%); }70% { transform: translateX(-6%);  }100%{ transform: translateX(0%);   } } @-webkit-keyframes slideFromRight { 0%  { -webkit-transform: translateX(100%); }70% { -webkit-transform: translateX(-6%);  }100%{ -webkit-transform: translateX(0%);   }  }"))
    }
    this.l.body.appendChild(b);
    switch (a) {
    case "FROM_BOTTOM":
        P(c, ml);
        break;
    case "FROM_RIGHT":
        P(c, nl)
    }
};
Z.prototype.he = function() {
    this.la(!1);
    var a = this.Ia();
    if (a&&!(2 > a.length)) {
        var b = a[a.length - 1];
        if (b) {
            for (var c = 0; c < a.length; ++c)
                P(a[c], pl);
            this.adFrame.setAttribute("width", "");
            this.adFrame.setAttribute("height", "");
            this.asyncIframe.setAttribute("width", "");
            this.asyncIframe.setAttribute("height", "");
            P(this.adFrame, pl);
            P(this.adFrame, ql);
            a = this.asyncIframe.contentWindow.document;
            P(a.documentElement, pl);
            P(a.body, rl);
            P(b, ol)
        }
    }
};
Z.prototype.la = function(a) {
    var b = this.G();
    b && (a ? (this.yd(), b.style.display = "block", this.Aa || this.Lb(), this.ge()) : (b.style.display = "none", this.ta && (this.Aa=!0, this.l.documentElement.style.overflow = this.bd, this.ka || (this.ka = r(this.Lb, this), x(this.topWindow, "scroll", this.ka, void 0)))))
};
Z.prototype.ge = function() {
    var a = this.l.documentElement;
    this.bd = a.style.overflow;
    a.style.overflow = "hidden"
};
Z.prototype.ve = function() {
    this.Ca && (this.topWindow.clearInterval(this.Ca), this.Ca = null)
};
var $ = function(a, b, c) {
    Og.call(this, a);
    this.jb = b;
    this.k = c;
    this.na = {};
    this.ra = this.pa=!1;
    this.le = "";
    this.gb = null;
    this.Ac=!1
};
t($, Og);
$.prototype.ja = function(a) {
    a["i-dismiss"] = this.zc;
    a["i-blur"] = this.qc;
    a["i-fill"] = this.Jc;
    a["i-go"] = this.Qc;
    a["i-no"] = this.Pc
};
$.prototype.ud = function(a) {
    if (!a ||!q(a))
        throw Error("Must be called with next page title as first argument.");
    if (!this.mb() ||!this.ra)
        return !1;
    this.le = a;
    this.k.Eb();
    this.Nb();
    return !0
};
$.prototype.td = function() {
    this.k.hide()
};
$.prototype.mb = function() {
    return Kg(this.topWindow) && Ig(this.topWindow)&&!this.k.yb()
};
$.prototype.Q = function() {
    return this.na.iclk_url || null
};
$.prototype.zc = function() {
    if (this.zb())
        this.k.dismiss(), this.Lc();
    else if (this.Ac) {
        var a = {
            msg: "dha",
            req: this.jb.src
        };
        G("ia_evt", a, 1);
        this.k.ea() ? this.topWindow.history.back() : this.k.dismiss()
    } else 
        this.Q() && (this.k.rb(!1), this.Gb())
};
$.prototype.qc = function() {
    this.Ac=!0;
    this.k.rb(!0)
};
$.prototype.Jc = function(a) {
    if (!this.pa) {
        this.pa=!0;
        a = Mg(a);
        var b = Wc("ias::chdlr", r(this.Dd, this));
        "true" == a.i_spaMode && this.k.Fc();
        this.k.La() && this.Rd();
        var c = a.animation;
        c && this.k.ee(c);
        (c = a.translucent) && this.k.te();
        (c = a.dom_suf) && this.k.de(c.split(";"));
        a.qid && this.k.je(a.qid);
        this.k.bc(b);
        this.ae()
    }
};
$.prototype.Lc = function() {
    var a = new Event("googlevignettedone");
    this.topWindow.document.dispatchEvent(a)
};
$.prototype.Qc = function() {
    this.ra=!0;
    this.gb = null
};
$.prototype.Pc = function(a) {
    this.ra=!1;
    this.gb =+ a.i_tslv
};
$.prototype.zb = function() {
    return this.k.La()
};
$.prototype.Ab = function() {
    return Ad("googleads.g.doubleclick.net", "")
};
$.prototype.Gb = function() {
    this.Cd(!0)
};
$.prototype.Cd = function(a) {
    var b = this.Q();
    b && (a ? this.topWindow.location.replace(b) : this.topWindow.location.href = b)
};
$.prototype.wa = function() {
    var a = {
        zm: Kg(this.topWindow) ? 1: 0,
        pm: Ig(this.topWindow) ? 1: 0,
        cu: this.Q() ? 1: 0,
        fc: this.ra ? 1: 0,
        vp: this.k.ea() ? 1: 0
    };
    this.gb && (a.ts = this.gb);
    G("ia_evt", a, 1)
};
$.prototype.Dd = function(a) {
    if (!a)
        return !0;
    if (this.Q())
        return nc(a), !1;
    if (!this.mb())
        return this.wa(), !0;
    var b = a && (a.currentTarget || a.target);
    this.Xd(b);
    if (!this.Q() ||!this.ra || this.k.ea())
        return this.wa(), !0;
    b = r(this.Gb, this);
    this.k.ba(this.Q(), b);
    this.Nb();
    nc(a);
    return !1
};
$.prototype.Xd = function(a) {
    this.na.iclk_url = a.href;
    this.na.iclk_ltx = tl(a);
    (a = a.getAttribute("title")) && (this.na.iclk_ltl = a)
};
$.prototype.ae = function() {
    try {
        var a = {
            msg_type: "i-prepare"
        };
        this.jb.contentWindow.postMessage((new Ag(void 0)).serialize(a), this.Ab());
        return !0
    } catch (b) {}
    return !1
};
$.prototype.Nb = function() {
    var a = {
        msg_type: "i-view"
    };
    this.fe(a);
    this.jb.contentWindow.postMessage((new Ag(void 0)).serialize(a), this.Ab())
};
$.prototype.fe = function(a) {
    if (this.zb())
        a.iclk_ltx = this.le, a.iclk_url = this.topWindow.location.href;
    else {
        var b = this.na;
        a.iclk_url = b.iclk_url;
        var c = b.iclk_ltx;
        c && (a.iclk_ltx = c);
        (b = b.iclk_ltl) && (a.iclk_ltl = b)
    }
};
$.prototype.Rd = function() {
    this.topWindow.googleVignetteShow = r(this.ud, this);
    this.topWindow.googleVignetteHide = r(this.td, this)
};
var ul = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1,
    NOSCRIPT: 1
}, vl = {
    IMG: " ",
    BR: "\n"
}, wl = function(a, b, c) {
    if (!(a.nodeName in ul))
        if (3 == a.nodeType)
            c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in vl)
            b.push(vl[a.nodeName]);
        else 
            for (a = a.firstChild; a;)
                wl(a, b, c), a = a.nextSibling
}, tl = function(a) {
    var b = [];
    wl(a, b, !0);
    a = b.join("");
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    a = a.replace(/ +/g, " ");
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
};
var zl = function(a, b, c, d) {
    if (!(a && b && c && d))
        return null;
    d = kc(d);
    if (!d)
        return null;
    b = d.document.getElementById(b);
    if (!b)
        return null;
    var e = wk[a.google_reactive_ad_format] || null;
    switch (e) {
    case 1:
        return xl(a, b, c, d);
    case 2:
        return yl(a, b, c, d)
    }
    return null
}, xl = function(a, b, c, d) {
    a = lh(a);
    b = new Y(b, c, d, a);
    return new jl(d, b)
}, yl = function(a, b, c, d) {
    a=!!a.google_vignette_manual_trigger;
    b = new Z(b, c, d, a);
    return new $(d, c, b)
};
var Al = function() {
    var a = "";
    if (document.documentMode) {
        var b = document.createElement("IFRAME");
        b.frameBorder = 0;
        b.style.height = 0;
        b.style.width = 0;
        b.style.position = "absolute";
        if (document.body) {
            document.body.appendChild(b);
            try {
                var c = b.contentWindow.document;
                c.open();
                c.write("<!DOCTYPE html>");
                c.close();
                a += c.documentMode
            } catch (d) {}
            document.body.removeChild(b)
        }
    }
    return a
};
var Bl = function(a) {
    try {
        var b = a.screenX, c = a.screenY
    } catch (d) {}
    try {
        var e = a.outerWidth, f = a.outerHeight
    } catch (g) {}
    try {
        var h = a.innerWidth, k = a.innerHeight
    } catch (l) {}
    return [a.screenLeft, a.screenTop, b, c, a.screen ? a.screen.availWidth: void 0, a.screen ? a.screen.availTop: void 0, e, f, h, k]
};
var Dl = function(a, b) {
    for (var c = b || Cl, d = c.length, e = ""; 0 < a--;)
        e += c.charAt(Math.floor(Math.random() * d));
    return e
}, Cl = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var El = navigator;
function Fl(a, b, c, d, e) {
    var f = Math.round((new Date).getTime() / 1E3), g = window.google_analytics_domain_name;
    a = "undefined" == typeof g ? Gl("auto", a) : Gl(g, a);
    var h =- 1 < b.indexOf("__utma=" + a + "."), g =- 1 < b.indexOf("__utmb=" + a), k = md("google_persistent_state"), k = I(k, 14) || qd(k, {}), l=!1;
    h ? (c = b.split("__utma=" + a + ".")[1].split(";")[0].split("."), g ? k.sid = c[3] + "" : k.sid || (k.sid = f + ""), k.vid = c[0] + "." + c[1], k.from_cookie=!0) : (k.sid || (k.sid = f + ""), k.vid || (l=!0, k.vid = Hl(b, c, d, e) + "." + f), k.from_cookie=!1);
    k.cid || (b = Il(b), l && b &&
    - 1 != b.search(/^\d+\.\d+$/) ? k.vid = b : b != k.vid && (k.cid = b));
    k.dh = a;
    k.hid || (k.hid = Math.round(2147483647 * Math.random()));
    return k
}
function Hl(a, b, c, d) {
    return Math.round(2147483647 * Math.random())^Jl(a, b, c, d) & 2147483647
}
function Jl(a, b, c, d) {
    var e = [El.appName, El.version, El.language ? El.language: El.browserLanguage, El.platform, El.userAgent, El.javaEnabled() ? 1: 0].join("");
    c ? e += c.width + "x" + c.height + c.colorDepth : window.java && (c = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), e += c.screen.width + "x" + c.screen.height);
    e += a;
    e += d || "";
    for (a = e.length; 0 < b;)
        e += b--^a++;
    return Kl(e)
}
function Kl(a) {
    var b = 1, c = 0, d;
    if (void 0 != a && "" != a)
        for (b = 0, d = a.length - 1; 0 <= d; d--)
            c = a.charCodeAt(d), b = (b<<6 & 268435455) + c + (c<<14), c = b & 266338304, b = 0 != c ? b^c>>21 : b;
    return b
}
function Gl(a, b) {
    if (!a || "none" == a)
        return 1;
    a = String(a);
    "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
    return Kl(a.toLowerCase())
}
var Ll = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Ml = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
function Il(a) {
    var b = 999, c = window.google_analytics_domain_name;
    c && (c = 0 == c.indexOf(".") ? c.substr(1) : c, b = ("" + c).split(".").length);
    var d, c = 999;
    a = a.split(";");
    for (var e = 0; e < a.length; e++) {
        var f = Ll.exec(a[e]) || Ml.exec(a[e]);
        if (f) {
            if (f[1] == b)
                return f[2];
            f[1] < c && (c = f[1], d = f[2])
        }
    }
    return d
};
var Nl = Xa(!1), Ql = function() {
    var a = Vc("sa::faf", Ol, xd);
    Oc("show_ads::main", Sc, Pl, xd, a)
}, Pl = function() {
    var a = C;
    if (!/_sdo/.test(a.google_ad_format)) {
        Oc("sa::ips", Sc, hd);
        Rl();
        Sl();
        var b = a.google_start_time;
        fa(b) && (Yi = b, a.google_start_time = null);
        Oc("show_ads::init_globals", Sc, Tl);
        Ul()
    }
}, Vl =- 1;
C.google_eas_queue = C.google_eas_queue || [];
var Wl = mc(function() {
    var a = B, b = a.createElement("script");
    b.async=!0;
    b.type = "text/javascript";
    b.src = Ad(Nl, "/pagead/js/r20141113/r20141119/expansion_embed.js");
    a = a.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a)
});
function Xl(a) {
    return null != a ? '"' + a + '"' : '""'
}
var Yl = function(a, b) {
    var c = b.slice( - 1), d = "?" == c || "#" == c ? "": "&", e = [b], c = function(a, b) {
        if (a || 0 === a ||!1 === a)
            "boolean" == typeof a && (a = a ? 1 : 0), Gb(e, d, b, "=", "function" == typeof encodeURIComponent ? encodeURIComponent(a) : escape(a)), d = "&"
    };
    D(a, c);
    return e.join("")
};
function Zl(a) {
    var b = a.google_ad_width, c = a.google_ad_height, d = F(), e = Zi;
    a = bj(a, d.document);
    wi(d, d.document, b, c) && (a|=e.BLOCK_NOT_SUPPORTED);
    return a
}
var $l = function() {
    var a = Cf(), b = md();
    a.setUpForcePeriscope && a.setUpForcePeriscope();
    return a.setupOse(I(b, 7))
}, cm = function(a, b, c, d, e, f, g, h, k, l, E) {
    f.src = am(d);
    a = fj(f);
    E ? bm(E, b, a) : b.write(a)
}, dm = function(a, b, c, d, e) {
    d.src = am(c);
    c = ej(b, d);
    b.body.appendChild(c);
    b = F();
    zl(a, e, c, b)
}, gm = function(a, b, c, d, e, f, g, h) {
    var k = C, l = em(a);
    l || "html" != c ? ((a = kc(k)) && l&&!Lg(k) && (k = rc ? k.frameElement : null, new Pg(a, l, k, f, g)), fm(b, l, c, d, e)) : h ? (b = {
        context: "ac::nfrm",
        url: b
    }, G("jserror", b)) : (b = Vc("ac::psrt", ja(gm, a, b, c, d, e, f, g,
    !0)), k.setTimeout(b, 0))
}, Ol = function() {
    rc ? (Wi(), hm() || Ac(C)) : im(C)
}, jm = function() {
    rd && rd()
}, nm = function(a, b) {
    if (3 != qi(b))
        km(lm, a);
    else {
        var c = ri(b), d = function() {
            km(lm, a);
            A(B, c, d, void 0)
        };
        x(b, c, d, void 0)
    }
    mm=!1
}, pm = function(a, b, c, d, e, f) {
    var g = e ? c.replace(/&ea=[^&]*/, "") + "&ea=0": c, h = "google_ads_frame" + d, k = {
        id: h,
        name: h
    };
    ij(k, a.google_ad_width, a.google_ad_height, !1, am(g));
    Db(a.google_sra_onload) && (k.onload = "google_sra_onload()");
    var l = fj(k);
    f = a.google_container_id || f || null;
    var E = a.google_async_iframe_id,
    y = a.google_container_id, z = "";
    e ? (z = Dl(10), g = Q, c = g.addExpansionParamsToUrl(c, z, ic(B.URL))) : c = g;
    Lg(a) && 16 != a.google_reactive_ad_format ? dm(a, b, c, k, E) : cm(a, b, e, c, h, k, a.google_ad_width, a.google_ad_height, f, E, y);
    e && (a.setTimeout(Vc("ac::write_ee", Wl, xd), 0), a.google_eas_queue.push(Q.serializeExpandableAdSlotParams(h, c, a.google_ad_width, a.google_ad_height, z, F(), E || void 0, "google_expandable_ad_slot" + d)));
    rc && om(a.google_async_iframe_id, l);
    a = em(h);
    mm && a && nm(a, b)
}, rm = function(a) {
    if (1991 >= a.length)
        return a;
    qm(a);
    return a.substring(0, 1983) + "&trunc=1"
}, sm = function(a) {
    if (1983 >= a.length)
        return "";
    var b = a.lastIndexOf("&", 1983);
    - 1 == b && (b = a.lastIndexOf("?", 1983));
    return - 1 == b ? "" : a.substring(b + 1)
}, qm = function(a) {
    var b = sm(a);
    a = {
        ol: a.length,
        tr: b,
        url: a
    };
    G("trn", a, .01)
};
function tm(a, b, c, d) {
    rc || Wb(a);
    var e = Xb(a);
    c = Yl({
        ifi: e
    }, c);
    c = rm(c);
    c = c.replace(/%\w?$/, "");
    var f = xb("script"), g = "google_ads_frame" + e;
    "js" != a.google_ad_output && "json_html" != a.google_ad_output ||!a.google_ad_request_done&&!a.google_radlink_request_done ? "html" == a.google_ad_output && pm(a, b, c, e, 0 == Vl, d) : b.write("<" + f + ' language="JavaScript1.1" src=' + Xl(am(c)) + "></" + f + ">");
    rd = ja(gm, g, c, a.google_ad_output, a.google_ad_width, a.google_ad_height, String(a.google_ad_unit_key || ""), String(a.google_ad_unit_key_2 ||
    ""));
    return c
}
var fm = function(a, b, c, d, e) {
    var f = Cf();
    f.getOseId() && f.registerAdBlock(a, 1, String(c || ""), b, d, e)
}, om = function(a, b) {
    var c = "javascript:" + qb(["<!DOCTYPE html><html><body>", b, "</body></html>"].join("")), d = F();
    (new fi(d)).set(a, c)
};
function im(a) {
    Mi(a)
}
var Am = function(a) {
    var b = C;
    Ii(b);
    var c = wd(), c = c.n(2), d = K, c = c == d.UNLIMITED_ADSLOTS.NO_LIMIT || c == d.PERSISTENT_STATE.CONTROL_NO_AD_LIMIT || c == d.PERSISTENT_STATE.EXPERIMENT_NO_AD_LIMIT;
    if (!um(c) || Lg(b) && 16 != b.google_reactive_ad_format && (c = F(), !zk(c, b)))
        return !1;
    c = zd(b) ? qa("", "pagead2.googlesyndication.com") : Wa();
    a = vm(a);
    d = wm(b);
    d = Ad(c, d);
    (xm() || ym(b)) && zm(a);
    xm() || C.google_ad_output && "html" !== C.google_ad_output || 3 != qi(B) || (mm=!0, lm = d, d = Ad(c, "/pagead/blank.gif#?"));
    b.google_ad_url =
    Yl(a, d + "");
    return !0
}, Bm = /PyvSearchDelayed/, ym = function(a) {
    var b = a.google_ad_client;
    a = a.google_ad_channel;
    return "ca-pub-6219811747049371" == b && Bm.test(a)
}, xm = function() {
    var a = J().n(19), b = K.PRERENDERING_DELAYED_IMPRESSION;
    return a == b.EXPERIMENT && "html" == C.google_ad_output
}, mm=!1, lm = "", Cm = function(a, b) {
    var c = C, d = I(a, 8), e = c.google_ad_section, f = c.google_ad_format, c = c.google_ad_slot;
    d[e] && (b.prev_fmts = d[e]);
    var g = I(a, 9);
    g[e] && (b.prev_slotnames = g[e].toLowerCase());
    f ? d[e] = d[e] ? d[e] + ("," +
    f) : f : c && (g[e] = g[e] ? g[e] + ("," + c) : c);
    d = I(a, 15);
    0 < d && (b.nras = "" + d)
}, Gm = function(a) {
    var b = C;
    a.dt = Yi;
    rc && b.google_bpp && (a.bpp = b.google_bpp);
    var c = Dm();
    c && (a.bdt = c);
    a.shv = Pa();
    var c=!!b.google_test_1, d=!!b.google_test_2;
    c && (a.tsi = d ? "3" : "2");
    a.cbv = "/r20141119".replace("/", "");
    /^\w{1,3}$/.test(b.google_loader_used) && (a.saldr = b.google_loader_used);
    c = md();
    Lg(b) && nd(c, 15, I(c, 15) + 1);
    Cm(c, a);
    a.correlator = I(c, 7);
    if (b.google_ad_channel) {
        for (var d = I(c,
        10), e = "", f = b.google_ad_channel.split(Em), g = 0; g < f.length; g++) {
            var h = f[g];
            d[h] ? e += h + "+" : d[h]=!0
        }
        a.pv_ch = e
    }
    b.google_ad_host_channel && (c = Fm(b.google_ad_host_channel, I(c, 11)), a.pv_h_ch = c);
    Qa && (a.jscb = 1);
    Ra && (a.jscd = 1);
    a.frm = b.google_iframing;
    c = F().document;
    d = "";
    try {
        d = c.cookie
    } catch (k) {}
    c = Fl(c.domain, d, Nb(), b.screen, c.referrer);
    a.ga_vid = c.vid;
    a.ga_sid = c.sid;
    a.ga_hid = c.hid;
    a.ga_fc = c.from_cookie;
    a.ga_cid = c.cid;
    a.ga_wpids = b.google_analytics_uacct
}, Hm = function(a) {
    var b = F(), c = tf(!1, b.top);
    c && ( - 12245933 == c.width &&
    b.google_top_values && (c = Df(b.google_top_values)), a.biw = c.width, a.bih = c.height);
    b.top != b && (b = tf(!1, b)) && (a.isw = b.width, a.ish = b.height)
}, Dm = function(a) {
    var b = F();
    try {
        var c = b.performance;
        if (c && c.timing && c.now)
            var d = c.timing.navigationStart + Math.round(c.now()), e = d - c.timing.domLoading
    } catch (f) {}
    if (!e)
        return null;
    a = a || Yi;
    b = b.Date.now() - a;
    e -= b;
    return 0 > e ? "-M" : 1E6 < e ? "M" : e
}, Im = function(a) {
    var b = uf(F());
    0 != b && (a.ifk = b.toString())
}, Jm = function(a) {
    var b = Cf();
    (b = b.getOseId()) && (a.oid = b)
};
function Fm(a, b) {
    for (var c = a.split("|"), d =- 1, e = [], f = 0; f < c.length; f++) {
        var g = c[f].split(Em);
        b[f] || (b[f] = {});
        for (var h = "", k = 0; k < g.length; k++) {
            var l = g[k];
            "" != l && (b[f][l] ? h += "+" + l : b[f][l]=!0)
        }
        h = h.slice(1);
        e[f] = h;
        "" != h && (d = f)
    }
    c = "";
    if ( - 1 < d) {
        for (f = 0; f < d; f++)
            c += e[f] + "|";
        c += e[d]
    }
    return c
}
var Rl = function() {
    if (!vd()) {
        var a = wd(), b;
        if (!Ua) {
            var c = K.ALWAYS_USE_HTTPS;
            b = [c.CONTROL, c.EXPERIMENT];
            b = a.j(b, Ka, 4);
            b == c.EXPERIMENT && Va()
        }
        b = [K.UNLIMITED_ADSLOTS.CONTROL, K.UNLIMITED_ADSLOTS.NO_LIMIT];
        a.j(b, ta, 2);
        C.google_top_experiment && qj();
        c = K.SS;
        b = [c.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
        a.j(b, Da, 14);
        c = K.PERISCOPE_FOR_TARGETING;
        a.j([c.EXPERIMENT_REFERER_CLEANUP], 1, 10);
        rj();
        b = [K.JS_RNG.CONTROL, K.JS_RNG.EXPERIMENT];
        a.j(b, Fa, 17);
        Km();
        Lm();
        Mm()
    }
}, Sl = function() {
    var a = J();
    a.n(4) == K.ALWAYS_USE_HTTPS.EXPERIMENT && Va();
    sj();
    wj();
    uj();
    yj();
    Nm();
    Om();
    a = C;
    Pm(a);
    qh(a);
    Qm();
    Aj();
    Rm()
}, Nm = function() {
    var a = C;
    if (a = a.google_responsive_optimization_experiment) {
        var b = Sh, c = Uh, d = Wh, e = Hh, f = K.RESPONSIVE_OPTIMIZATION, g = K.RESPONSIVE_SHRINKING, h = K.RESPONSIVE_MOBILE_ATF, k = K.RESPONSIVE_IPHONE_OPT;
        switch (a) {
        case b.EXPERIMENT_320_100:
            a = f.EXPERIMENT_320_100;
            break;
        case b.CONTROL_320_100:
            a = f.CONTROL_320_100;
            break;
        case c.EXPERIMENT:
            a = g.EXPERIMENT;
            break;
        case c.CONTROL:
            a = g.CONTROL;
            break;
        case d.EXPERIMENT_320_50:
            a =
            h.EXPERIMENT_320_50;
            break;
        case d.EXPERIMENT_320_100:
            a = h.EXPERIMENT_320_100;
            break;
        case d.CONTROL:
            a = h.CONTROL;
            break;
        case e.EXPERIMENT_234_60_A:
            a = k.EXPERIMENT_234_60_A;
            break;
        case e.EXPERIMENT_234_60_B:
            a = k.EXPERIMENT_234_60_B;
            break;
        case e.CONTROL:
            a = k.CONTROL;
            break;
        default:
            a = ""
        }
        J().j([a], 1, 4)
    }
}, Om = function() {
    var a = C;
    "html" != a.google_ad_output || Ub(a) || J().j([K.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ua, 16)
}, Lm = function() {
    var a = F(), b = K.PERSISTENT_STATE, c;
    switch (a.google_pstate_expt) {
    case "C":
        c = b.CONTROL;
        break;
    case "E":
        c = b.EXPERIMENT;
        break;
    case "CU":
        c = b.CONTROL_NO_AD_LIMIT;
        break;
    case "EU":
        c = b.EXPERIMENT_NO_AD_LIMIT
    }
    c && wd().j([c], 1, 2)
}, Mm = function() {
    var a = F(), b = K.GLOBAL_CORRELATOR, c;
    switch (a.google_pstate_gc_expt) {
    case "C":
        c = b.CONTROL;
        break;
    case "E":
        c = b.EXPERIMENT
    }
    c && wd().eb(c, 23)
}, Km = function() {
    var a = B, a = qi(a);
    if (3 == a) {
        var a = K.PRERENDERING_DELAYED_IMPRESSION, b = wd();
        b.j([a.CONTROL, a.EXPERIMENT], va, 19)
    }
}, Qm = function() {
    var a = C;
    8 == a.google_reactive_ad_format && J().j([K.VIGNETTE_UI_ALLOWANCE.EXPERIMENT], 1)
},
Sm = function() {
    ad() != F() && di(4);
    Ua && di(16);
    Ta && di(8);
    var a = B;
    3 == qi(a) && di(32)
}, Tm = 0, Um = function(a, b, c) {
    if (!c || c())
        Tm && (Tm = (new Date).getTime() - Tm), c = Am(a), a && a.id == b && Be(a), c && (a = C, tm(a, B, a.google_ad_url), jm())
}, Vm = function(a, b) {
    Vl = Zl(a, b);
    0 != Vl && (a.google_allow_expandable_ads=!1)
}, Ul = function() {
    var a = C, b = B;
    Vm(a, b);
    Sm();
    a.google_loader_features_used && di(a.google_loader_features_used);
    $i && $l();
    var c = null, b = "", c = a.google_async_iframe_id, d = F();
    c ? c = d.document.getElementById(c) : (b = "google_temp_span", c =
    Wm(b));
    var e = hm();
    if (e) {
        var f=!1, g = null;
        e && (g = function() {
            return 3 != d.google_top_js_status || f
        });
        var h = Vc("sa::prsc", ja(Um, c, b, g), void 0, ja(Ac, a));
        e && (Tm = (new Date).getTime(), d.google_top_js_callbacks = d.google_top_js_callbacks || [], d.google_top_js_callbacks.push(h), b = function() {
            f=!0;
            for (var a = 0; a < d.google_top_js_callbacks.length; a++)
                d.google_top_js_callbacks[a] === h && (d.google_top_js_callbacks.splice(a, 1), h())
        }, a.setTimeout(b, 150))
    } else 
        Um(c, b, null)
}, hm = function() {
    var a = F(), b = pj;
    return (rc && a.google_top_experiment ==
    b.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE || a.google_top_experiment == b.EXPERIMENT_WAIT_NO_TARGETING) && 3 == a.google_top_js_status
}, Xm = function(a) {
    var b = C;
    D(ti, function(c, d) {
        a[c] = b[d]
    });
    D(si, function(c, d) {
        a[c] = b[d]
    });
    D(ui, function(c, d) {
        a[c] = b[d]
    })
}, Ym = function(a) {
    var b = C, c = J();
    if (p(b.google_eids) && 0 !== b.google_eids.length) {
        di(64);
        for (var d = 0; d < b.google_eids.length; d++)
            q(b.google_eids[d]) && c.eb(b.google_eids[d])
    }
    a.eid = c.wb()
};
function Tl() {
    Li()
}
function bm(a, b, c) {
    a && (a = b.getElementById(a)) && c && "" != c.length && (a.style.visibility = "visible", a.innerHTML = c)
}
var Zm = /YtLoPri/, wm = function(a) {
    var b = a.google_ad_client;
    a = a.google_ad_channel;
    var c = "/pagead/ads?";
    "ca-pub-6219811747049371" == b && Zm.test(a) && (c = "/pagead/lopri?");
    return c
}, $m = function(a, b, c) {
    var d = a.indexOf(b);
    return - 1 == d ? a : c + a.substr(d + b.length)
}, km = function(a, b) {
    var c = b.src, d = $m(c, "/pagead/blank.gif#?", a);
    if (d !== c) {
        var c = b.nextSibling, e = b.parentNode;
        e.removeChild(b);
        b.src = d;
        e.insertBefore(b, c)
    }
}, an = function(a, b) {
    b.dff = kf(a).toLowerCase();
    b.dfs = pf(a)
}, bn = function(a, b) {
    var c = C;
    if ("html" == c.google_ad_output) {
        var d =
        F();
        if (d.google_top_values) {
            var e = Ef(d.google_top_values, c.google_ad_width, c.google_ad_height);
            b.adx = Math.round(e.x);
            b.ady = Math.round(e.y)
        }
        if (!b.adx||-12245933 == b.adx ||!b.ady||-12245933 == b.ady)
            try {
                e = We(a, c.top), b.adx = Math.round(e.x), b.ady = Math.round(e.y)
            } catch (f) {
            b.adx =- 12245933, b.ady =- 12245933
        }
    }
}, cn = function(a) {
    try {
        var b = te(a);
        if (b) {
            var c = b.frameElement;
            if (c && v(b.parent))
                return c
        }
    } catch (d) {}
    return null
}, dn = function(a) {
    try {
        if (a.parentNode)
            return a.parentNode
    } catch (b) {
        return null
    }
    return 9 === a.nodeType ?
    cn(a) : null
}, en = function(a) {
    for (var b = [], c = 0; 100 > c++&&(a = dn(a));)
        1 === a.nodeType && b.push(a);
    return b
}, fn = function(a) {
    if (a) {
        var b = F();
        return b.document.getElementById(a)
    }
    a = document.getElementsByTagName("script");
    return (a = a[a.length - 1]) && a.parentNode || null
}, gn = function(a) {
    try {
        var b = fn(a);
        if (!b)
            return !1;
        var c = en(b);
        a = 0;
        for (var d; a < c.length; a++)
            if (d = c[a], !/html|body/i.test(d.tagName) && /fixed/i.test(Ne(d, "position")))
                return !0
    } catch (e) {}
    return !1
}, Pm = function(a) {
    if ("html" === Tb(a)&&!Lg(a)) {
        a = K.POSITION_FIXED;
        a = [a.CONTROL, a.EXPERIMENT];
        var b = La, c = J();
        c.j(a, b, 24)
    }
}, hn = function() {
    var a = J(), a = a.n(24), b = K.POSITION_FIXED;
    return a == b.EXPERIMENT
}, jn = function(a, b) {
    hn() && (a.pfx = gn(b) ? 1 : 0)
}, mn = function(a) {
    var b = C, c = F();
    a.ref = b.google_referrer_url;
    a.loc = b.google_page_location;
    var d = ad(), d = Ai(d), e = K, f = J();
    kn(a, d);
    e = e.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
    f.n(4) == e && zm(a);
    f = a.loc || a.url;
    d.url != f && (a.top = d.url);
    b.google_async_rrc && (a.rr = b.google_async_rrc);
    a.rx = 0;
    (d = Xi()) && (a.jtc = d);
    0 <= Vl && (a.eae = Vl);
    (d = c.google_top_js_status) &&
    (a.jp = d);
    Tm && (a.jpd = Tm);
    Ek(b, c) && Ik(c, b.google_ad_client);
    (d = Dk(b, c)) && (a.fc = d);
    sk(b, c);
    Ub(b) || (a.docm = Al());
    d = Bl(c);
    a.brdim = d.join();
    d = K.SS;
    f = J().n(14);
    f == d.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT && (a.frmn = T.frameCountsWithDelayedPingback(c, a.adk, a.correlator, a.frm));
    d = wf();
    0 < d && (a.osd = d);
    a.vis = qi(B);
    Lg(b) && (d = Lg(b), a.fa = d);
    d = cn(B);
    a.abl = Ug(c, b, d);
    (c = ln(c)) && (a.ppjl = c);
    jn(a, b.google_async_iframe_id);
    rh(a)
}, ln = function(a) {
    var b = C;
    a = a.google_async_config;
    b = Ji(b.google_ad_client);
    return a ? b in a ? a[b].sra_enabled ?
    "t" : "f" : "default"in a ? "d" : "u1" : "u"
}, um = function(a) {
    var b = md(), c = C, d = c.google_ad_section;
    if (Ub(c)) {
        if (3 < nd(b, 5, I(b, 5) + 1)&&!a)
            return !1
    } else if (c = nd(b, 6, I(b, 6) + 1), b = c - I(b, 15), !a && 8 < b && "" == d)
        return !1;
    return !0
}, vm = function(a) {
    var b = {};
    Xm(b);
    Gm(b);
    Yb(b);
    if (a)
        try {
            an(a, b), bn(a, b)
    } catch (c) {}
    Hm(b);
    Im(b);
    Ym(b);
    Jm(b);
    mn(b);
    b.fu = ci;
    return b
}, Wm = function(a) {
    var b = C, c = b.google_container_id, d = c && b.document.getElementById(c) || b.document.getElementById(a);
    d || c ||!a || (b.document.write("<span id=" + a + "></span>"), d = b.document.getElementById(a));
    return d
}, am = function(a) {
    var b = Yi;
    return Yl({
        dtd: hc(b)
    }, a)
}, kn = function(a, b) {
    a.url || a.loc ||!b.url || (a.url = b.url, b.isTopUrl || (a.usrc = 1))
}, zm = function(a) {
    a.unviewed_position_start = "1"
}, Em = /[+, ]/, em = function(a) {
    var b = B;
    return b.getElementById(a)
}, nn = function(a) {
    return function() {
        di(512);
        return a.apply(void 0, arguments)
    }
}, Rm = function() {
    var a = C, b = md(), c = I(b, 16), d = a.google_language, e = J(), f = K.PERSIST_LANGUAGE;
    null === c && d ? (c = w([d], ya) || "", nd(b, 16, c)) : c&&!d ? (b = e.j([f.CONTROL, f.EXPERIMENT], 1, 4), b == f.EXPERIMENT &&
    (a.google_language = c)) : c && d && c != d && G("pslm", {
        psLang: c,
        pubLang: d,
        client: a.google_ad_client
    })
};
s("google_eid", nn(xd));
s("google_handleError", nn(Sc));
s("google_protectAndRun", nn(Oc));
s("google_render_ad", nn(Ul));
Ql();
})()
