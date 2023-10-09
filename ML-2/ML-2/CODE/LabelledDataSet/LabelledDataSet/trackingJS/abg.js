(function() {
    var g, l = this, aa = function(a, c) {
        var b = a.split("."), d = l;
        b[0]in d ||!d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());)
            b.length || void 0 === c ? d = d[e] ? d[e] : d[e] = {} : d[e] = c
    }, ba = function(a) {
        a.ba = function() {
            return a.Vb ? a.Vb : a.Vb = new a
        }
    }, da = function(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) {
                if (a instanceof Array)
                    return "array";
                    if (a instanceof Object)
                        return c;
                        var b = Object.prototype.toString.call(a);
                        if ("[object Window]" == b)
                            return "object";
                            if ("[object Array]" == b || "number" == typeof a.length && "undefined" !=
                            typeof a.splice && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))
                                return "array";
                                if ("[object Function]" == b || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))
                                    return "function"
            } else 
                return "null";
                else if ("function" == c && "undefined" == typeof a.call)
    return "object";
return c
}, m = function(a) {
    return "string" == typeof a
}, ea = function(a) {
    return "function" == da(a)
}, fa = function(a, c, b) {
    return a.call.apply(a.bind, arguments)
}, ja = function(a,
c, b) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(b, d);
            return a.apply(c, b)
        }
    }
    return function() {
        return a.apply(c, arguments)
    }
}, q = function(a, c, b) {
    q = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ja;
    return q.apply(null, arguments)
}, r = Date.now || function() {
    return + new Date
}, ka = function(a, c) {
    function b() {}
    b.prototype = c.prototype;
    a.Ac =
    c.prototype;
    a.prototype = new b;
    a.prototype.constructor = a;
    a.Dc = function(a, b, f) {
        return c.prototype[b].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};
var la = String.prototype.trim ? function(a) {
    return a.trim()
}
: function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, ta = function(a) {
    if (!ma.test(a))
        return a;
    - 1 != a.indexOf("&") && (a = a.replace(na, "&amp;"));
    - 1 != a.indexOf("<") && (a = a.replace(oa, "&lt;"));
    - 1 != a.indexOf(">") && (a = a.replace(pa, "&gt;"));
    - 1 != a.indexOf('"') && (a = a.replace(qa, "&quot;"));
    - 1 != a.indexOf("'") && (a = a.replace(ra, "&#39;"));
    - 1 != a.indexOf("\x00") && (a = a.replace(sa, "&#0;"));
    return a
}, na = /&/g, oa = /</g, pa = />/g, qa = /"/g, ra = /'/g, sa = /\x00/g, ma = /[\x00&<>"']/,
ua = function(a, c) {
    return a < c?-1 : a > c ? 1 : 0
}, va = function(a) {
    return String(a).replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}, wa = function(a) {
    var c = m(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"): "\\s";
    return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, c, e) {
        return c + e.toUpperCase()
    })
};
var xa = function(a) {
    xa[" "](a);
    return a
};
xa[" "] = function() {};
var s = function(a, c, b, d) {
    b = q(d, b);
    a.addEventListener ? a.addEventListener(c, b, !1) : a.attachEvent && a.attachEvent("on" + c, b)
};
var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), za = function(a, c) {
    for (var b, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (b in d)
            a[b] = d[b];
        for (var f = 0; f < ya.length; f++)
            b = ya[f], Object.prototype.hasOwnProperty.call(d, b) && (a[b] = d[b])
    }
}, Aa = function(a) {
    var c = arguments.length;
    if (1 == c && "array" == da(arguments[0]))
        return Aa.apply(null, arguments[0]);
    for (var b = {}, d = 0; d < c; d++)
        b[arguments[d]]=!0;
    return b
};
var Ba = function() {
    this.v = {}
};
ba(Ba);
var Ca = function(a, c) {
    var b = Ba.ba();
    return void 0 !== b.v[a] ? "true" === b.v[a] ||!0 === b.v[a] : c
};
var Da = "undefined" != typeof DOMTokenList, Ea = function(a, c, b) {
    a = a.classList;
    b == a.contains(c) && a.toggle(c)
}, Fa = function(a, c) {
    var b = a.className;
    if (b) {
        for (var b = b.split(/\s+/), d=!1, e = 0; e < b.length&&!d; ++e)
            d = b[e] == c;
        d || (b.push(c), a.className = b.join(" "))
    } else 
        a.className = c
}, Ga = function(a, c) {
    var b = a.className;
    if (b&&!(0 > b.indexOf(c))) {
        for (var b = b.split(/\s+/), d = 0; d < b.length; ++d)
            b[d] == c && b.splice(d--, 1);
        a.className = b.join(" ")
    }
};
var Ha = function(a, c) {
    var b = parseInt(a, 10);
    return isNaN(b) ? c : b
};
var Ja = Array.prototype, Ka = Ja.indexOf ? function(a, c, b) {
    return Ja.indexOf.call(a, c, b)
}
: function(a, c, b) {
    b = null == b ? 0 : 0 > b ? Math.max(0, a.length + b) : b;
    if (m(a))
        return m(c) && 1 == c.length ? a.indexOf(c, b) : - 1;
    for (; b < a.length; b++)
        if (b in a && a[b] === c)
            return b;
    return - 1
};
var u;
i: {
    var La = l.navigator;
    if (La) {
        var Ma = La.userAgent;
        if (Ma) {
            u = Ma;
            break i
        }
    }
    u = ""
};
var Na =- 1 != u.indexOf("Opera")||-1 != u.indexOf("OPR"), v =- 1 != u.indexOf("Trident")||-1 != u.indexOf("MSIE"), w =- 1 != u.indexOf("Gecko")&&-1 == u.toLowerCase().indexOf("webkit")&&!( - 1 != u.indexOf("Trident")||-1 != u.indexOf("MSIE")), x =- 1 != u.toLowerCase().indexOf("webkit"), Oa = function() {
    var a = l.document;
    return a ? a.documentMode : void 0
}, Pa = function() {
    var a = "", c;
    if (Na && l.opera)
        return a = l.opera.version, ea(a) ? a() : a;
    w ? c = /rv\:([^\);]+)(\)|;)/ : v ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : x && (c = /WebKit\/(\S+)/);
    c && (a = (a = c.exec(u)) ?
    a[1] : "");
    return v && (c = Oa(), c > parseFloat(a)) ? String(c) : a
}(), Qa = {}, y = function(a) {
    var c;
    if (!(c = Qa[a])) {
        c = 0;
        for (var b = la(String(Pa)).split("."), d = la(String(a)).split("."), e = Math.max(b.length, d.length), f = 0; 0 == c && f < e; f++) {
            var h = b[f] || "", k = d[f] || "", E = RegExp("(\\d*)(\\D*)", "g"), Ta = RegExp("(\\d*)(\\D*)", "g");
            do {
                var I = E.exec(h) || ["", "", ""], J = Ta.exec(k) || ["", "", ""];
                if (0 == I[0].length && 0 == J[0].length)
                    break;
                c = ua(0 == I[1].length ? 0 : parseInt(I[1], 10), 0 == J[1].length ? 0 : parseInt(J[1], 10)) || ua(0 == I[2].length, 0 == J[2].length) ||
                ua(I[2], J[2])
            }
            while (0 == c)
            }
        c = Qa[a] = 0 <= c
    }
    return c
}, Ra = l.document, Sa = Ra && v ? Oa() || ("CSS1Compat" == Ra.compatMode ? parseInt(Pa, 10) : 5) : void 0;
!w&&!v || v && v && 9 <= Sa || w && y("1.9.1");
v && y("9");
var A = function(a) {
    var c = document;
    return m(a) ? c.getElementById(a) : a
};
v && y(8);
Aa("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var Va = function() {
    this.xc = "";
    this.wc = Ua
}, Ua = {};
var Xa = function() {
    this.$a = "";
    this.vc = Wa
};
Xa.prototype.Sb = function() {
    return 1
};
var Wa = {};
var Za = function() {
    this.$a = "";
    this.tc = Ya;
    this.yc = null
};
Za.prototype.Sb = function() {
    return this.yc
};
Aa("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
Aa("link", "script", "style");
var Ya = {};
var $a = {}, ab = {}, bb = {}, cb = {}, db = {}, C = function() {
    throw Error("Do not instantiate directly");
};
C.prototype.cb = null;
C.prototype.toString = function() {
    return this.content
};
var D = function(a, c, b) {
    a.innerHTML = eb(c(b || fb, void 0, void 0))
}, eb = function(a) {
    var c = typeof a;
    if (("object" != c || null == a) && "function" != c)
        return String(a);
    if (a instanceof C) {
        if (a.N === $a)
            return a.content;
        if (a.N === db)
            return ta(a.content)
    }
    return "zSoyz"
}, fb = {};
var gb = function(a) {
    if (null != a)
        switch (a.cb) {
        case 1:
            return 1;
        case - 1:
            return - 1;
        case 0:
            return 0
        }
    return null
}, ib = function() {
    C.call(this)
};
ka(ib, C);
ib.prototype.N = $a;
var F = function(a) {
    return null != a && a.N === $a ? a : a instanceof Za ? jb(a instanceof Za && a.constructor === Za && a.tc === Ya ? a.$a : "type_error:SafeHtml", a.Sb()) : jb(ta(String(String(a))), gb(a))
}, jb = function(a) {
    function c(a) {
        this.content = a
    }
    c.prototype = a.prototype;
    return function(a, d) {
        var e = new c(String(a));
        void 0 !== d && (e.cb = d);
        return e
    }
}(ib);
(function(a) {
    function c(a) {
        this.content = a
    }
    c.prototype = a.prototype;
    return function(a, d) {
        var e = String(a);
        if (!e)
            return "";
        e = new c(e);
        void 0 !== d && (e.cb = d);
        return e
    }
})(ib);
var G = function(a) {
    null != a && a.N === $a ? (a = String(a.content).replace(kb, "").replace(lb, "&lt;"), a = String(a).replace(nb, ob)) : a = ta(String(a));
    return a
}, rb = function(a) {
    if (null == a)
        return " null ";
    if (null != a && a.N === ab)
        return a.content;
    switch (typeof a) {
    case "boolean":
    case "number":
        return " " + a + " ";
    default:
        return "'" + String(String(a)).replace(pb, qb) + "'"
    }
}, vb = function(a) {
    null != a && a.N === bb ? a = String(a).replace(sb, tb) : a instanceof Xa ? (a = a instanceof Xa && a.constructor === Xa && a.vc === Wa ? a.$a : "type_error:SafeUrl", a = String(a).replace(sb,
    tb)) : (a = String(a), a = ub.test(a) ? a.replace(sb, tb) : "#zSoyz");
    return a
}, H = function(a) {
    null != a && a.N === cb ? a = a.content : null == a ? a = "" : a instanceof Va ? a = a instanceof Va && a.constructor === Va && a.wc === Ua ? a.xc : "type_error:SafeStyle" : (a = String(a), a = wb.test(a) ? a : "zSoyz");
    return a
}, xb = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
}, ob = function(a) {
    return xb[a]
}, yb = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\x0B": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    $: "\\x24",
    "&": "\\x26",
    "'": "\\x27",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    "/": "\\/",
    ":": "\\x3a",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "?": "\\x3f",
    "[": "\\x5b",
    "\\": "\\\\",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}, qb =
function(a) {
    return yb[a]
}, zb = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
}, tb = function(a) {
    return zb[a]
}, nb = /[\x00\x22\x27\x3c\x3e]/g, pb = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, sb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, wb = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, ub = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
kb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, lb = /</g;
var Ab = function(a) {
    a = a || {};
    var c = "" + (a.W ? "#333" : "#f1f2f2"), b = "" + (a.W ? "#333" : "#fff"), d = "" + (a.W ? "#fff" : "#333"), e = "" + (a.W ? "#ccc" : "#999"), f = "" + (a.W ? "#e5e5e5" : "#666"), h = 2 < a.l / a.m, k = 2 < a.m / a.l, E = (60 < a.m ? "12" : "11") + "px";
    return a = "" + ('<div id="info_container"><ul><li><div id="back_section" class="back_border" onclick="handleClick(\'backClick\', event)">' + ('<img src="' + G(vb(a.O.sb)) + '" />') + '</div></li><li><div id="info_content"></div></li></ul></div><div id="border_overlay"></div><style>#info_container * {box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box;}#info_container > ul {list-style-type:none; margin:0; padding:0;}' +
    (k ? "" : "#info_container > ul > li {float:left;}") + (h ? ".inline {float:left;}" : "") + ".back_border {" + (k ? "border-bottom:1px solid #ccc;" : "border-right:1px solid #ccc;") + "}.opt_border {" + (h ? "border-left:1px solid #ccc;border-right:1px solid #ccc;" : "border-bottom:1px solid #ccc;border-top:1px solid #ccc;") + "}.opt_border_last {" + (k ? "border-bottom:1px solid #ccc;" : "") + "}.mn_opt {color:" + H("#39c") + "; display:table;" + (h ? "height:" + H(a.m) + "px;" : "width:" + (k ? H(a.l) : H(a.l - 30)) + "px;") + (60 >= a.m ? "line-height:11px;" :
    "") + "padding:0 5px;}.cell {display:table-cell; position:relative; width:inherit;}.conf {color:" + H(e) + ";" + (k ? "padding:5px 10px;" : "padding-left:" + (16E3 < a.m * a.l ? "10" : "5") + "px;") + (k ? "" : "vertical-align:middle;") + "}.header {color:" + H(d) + "; margin-bottom:5px;}.fb_opt{color:" + H("#39c") + "; padding:5px 0; position:relative;" + (h ? "" : "width:" + (k ? H(a.l) : H(a.l - 30)) + "px;") + "}.opt_tappable{position:absolute; margin:" + (h ? "0 " + H("5px") + ";" : H("5px") + " 0;") + "bottom:0; left:0; right:0; top:0;}.center{text-align:center;}.middle{vertical-align:middle;}.athird{" +
    (h ? "width" : "height") + ":" + (k ? "15%" : "33%") + ";}#survey_page {display:table-cell;" + (k ? "" : "vertical-align:middle;") + "}#info_card {font:bold " + H(E) + " Roboto; height:" + H(a.m) + "px;" + H(a.Yb) + ":" + H( - a.l) + "px; position:absolute;" + H(a.Zb) + ":" + H( - a.m) + "px; width:" + H(a.l) + "px; z-index:9100;}#back_section{background-color:" + H(c) + "; opacity:1.0; width:" + (k ? H(a.l) : "30") + "px; height:" + (k ? "30" : H(a.m)) + "px; display:table-cell; vertical-align:middle; text-align:center;}#back_section.hidden{display:none;}#countdown {color:" +
    H(f) + ";}#info_container {display:-webkit-box; height:" + H(a.m) + "px; -webkit-box-orient:vertical; -webkit-box-pack:center; width:" + H(a.l) + "px;}#info_content {background-color:" + H(b) + "; display:table; height:" + (k ? H(a.m - 30) : H(a.m)) + "px; opacity:0.97; position:relative; width:" + (k ? H(a.l) : H(a.l - 30)) + "px;}#info_content.expand{height:" + H(a.m) + "px; width:" + H(a.l) + "px;}#border_overlay {border:1px solid #ccc; bottom:0; left:0; pointer-events:none; position:absolute; right:0; top:0;}</style>")
}, Bb = function(a) {
    a =
    a || {};
    return '<div class="inline center athird mn_opt"><div class="cell middle"><img src="' + G(vb(a.mc)) + '" /><div class="fb_opt_txt">' + F(a.nc) + '</div><div class="opt_tappable" onclick="handleClick(\'attributionClick\', event)"></div></div></div><div class="inline center athird mn_opt opt_border"><div class="cell middle"><img src="' + G(vb(a.O.zb)) + '" /><div class="fb_opt_txt">' + F(a.O.Ab) + '</div><div class="opt_tappable" onclick="handleClick(\'pubMuteClick\', event)"></div></div></div><div class="inline center athird mn_opt opt_border_last"><div class="cell middle"><img src="' +
    G(vb(a.O.xb)) + '" /><div class="fb_opt_txt">' + F(a.O.yb) + '</div><div class="opt_tappable" onclick="handleClick(\'adMuteClick\', event)"></div></div></div>'
}, Cb = function(a) {
    a = a || {};
    var c = '<div id="survey_page"><div class="header center">' + F(a.pc) + "</div>";
    a = a.qc;
    for (var b = a.length, d = 0; d < b; d++) {
        var e = '<div class="inline athird center fb_opt ' + (0 != d ? "opt_border" : "") + (d == b - 1 ? "_last" : "") + '"><div style="display:table;width:100%;height:100%"><div class="cell middle">', f;
        f = a[d].text();
        f = F(f);
        c += e + f + '</div></div><div class="opt_tappable" onclick="handleClick(\'surveyOptionClick\', event, ' +
        G(rb(d)) + ')"></div></div>'
    }
    return c + "</div>"
}, Db = function(a) {
    a = a || {};
    return '<div class="cell conf"><div class="header">' + F(a.Jb) + (a.Kb ? ' <a id="undo_link" class="fb_opt" onclick="handleClick(\'undoClick\', event)">' + F(a.Lb) + "</a>" : "") + "</div>" + F(a.text) + ' <span id="countdown" style="display:none"></span></div>'
};
var Eb = function(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
    } catch (c) {}
    throw Error("Invalid JSON string: " + a);
};
var K = function(a, c, b) {
    if (m(c))(c = Fb(a, c)) && (a.style[c] = b);
    else 
        for (var d in c) {
            b = a;
            var e = c[d], f = Fb(b, d);
            f && (b.style[f] = e)
        }
}, Fb = function(a, c) {
    var b = va(c);
    if (void 0 === a.style[b]) {
        var d = (x ? "Webkit" : w ? "Moz" : v ? "ms" : Na ? "O" : null) + wa(b);
        if (void 0 !== a.style[d])
            return d
    }
    return b
};
var Gb = function() {
    this.Wb = this.Wb;
    this.Cc = this.Cc
};
Gb.prototype.Wb=!1;
var L = function(a, c) {
    this.type = a;
    this.currentTarget = this.target = c;
    this.defaultPrevented = this.T=!1;
    this.Pb=!0
};
L.prototype.preventDefault = function() {
    this.defaultPrevented=!0;
    this.Pb=!1
};
var Hb=!v || v && 9 <= Sa, Ib = v&&!y("9");
!x || y("528");
w && y("1.9b") || v && y("8") || Na && y("9.5") || x && y("528");
w&&!y("8") || v && y("9");
var M = function(a, c) {
    L.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey=!1;
    this.Xb = this.state = null;
    if (a) {
        var b = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = c;
        var d = a.relatedTarget;
        if (d) {
            if (w) {
                var e;
                i:
                {
                    try {
                        xa(d.nodeName);
                        e=!0;
                        break i
                    } catch (f) {}
                    e=!1
                }
                e || (d = null)
            }
        } else 
            "mouseover" ==
            b ? d = a.fromElement : "mouseout" == b && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = x || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = x || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == b ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
        a.metaKey;
        this.state = a.state;
        this.Xb = a;
        a.defaultPrevented && this.preventDefault()
    }
};
ka(M, L);
M.prototype.preventDefault = function() {
    M.Ac.preventDefault.call(this);
    var a = this.Xb;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue=!1, Ib)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode =- 1
    } catch (c) {}
};
var Jb = "closure_listenable_" + (1E6 * Math.random() | 0), Kb = 0;
var Lb = function(a, c, b, d, e) {
    this.M = a;
    this.Ha = null;
    this.src = c;
    this.type = b;
    this.Da=!!d;
    this.Ga = e;
    this.key=++Kb;
    this.R = this.Ea=!1
}, Mb = function(a) {
    a.R=!0;
    a.M = null;
    a.Ha = null;
    a.src = null;
    a.Ga = null
};
var N = function(a) {
    this.src = a;
    this.o = {};
    this.Ia = 0
};
N.prototype.add = function(a, c, b, d, e) {
    var f = a.toString();
    a = this.o[f];
    a || (a = this.o[f] = [], this.Ia++);
    var h = Nb(a, c, d, e);
    - 1 < h ? (c = a[h], b || (c.Ea=!1)) : (c = new Lb(c, this.src, f, !!d, e), c.Ea = b, a.push(c));
    return c
};
N.prototype.remove = function(a, c, b, d) {
    a = a.toString();
    if (!(a in this.o))
        return !1;
    var e = this.o[a];
    c = Nb(e, c, b, d);
    return - 1 < c ? (Mb(e[c]), Ja.splice.call(e, c, 1), 0 == e.length && (delete this.o[a], this.Ia--), !0) : !1
};
var Ob = function(a, c) {
    var b = c.type;
    if (b in a.o) {
        var d = a.o[b], e = Ka(d, c), f;
        (f = 0 <= e) && Ja.splice.call(d, e, 1);
        f && (Mb(c), 0 == a.o[b].length && (delete a.o[b], a.Ia--))
    }
};
N.prototype.ab = function(a, c, b, d) {
    a = this.o[a.toString()];
    var e =- 1;
    a && (e = Nb(a, c, b, d));
    return - 1 < e ? a[e] : null
};
var Nb = function(a, c, b, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.R && f.M == c && f.Da==!!b && f.Ga == d)
            return e
    }
    return - 1
};
var Pb = "closure_lm_" + (1E6 * Math.random() | 0), Qb = {}, Rb = 0, Sb = function(a, c, b, d, e) {
    if ("array" == da(c))
        for (var f = 0; f < c.length; f++)
            Sb(a, c[f], b, d, e);
    else if (b = Tb(b), a && a[Jb])
        a.listen(c, b, d, e);
    else {
        if (!c)
            throw Error("Invalid event type");
        var f=!!d, h = Ub(a);
        h || (a[Pb] = h = new N(a));
        b = h.add(c, b, !1, d, e);
        b.Ha || (d = Vb(), b.Ha = d, d.src = a, d.M = b, a.addEventListener ? a.addEventListener(c.toString(), d, f) : a.attachEvent(Wb(c.toString()), d), Rb++)
    }
}, Vb = function() {
    var a = Xb, c = Hb ? function(b) {
        return a.call(c.src, c.M, b)
    }
    : function(b) {
        b =
        a.call(c.src, c.M, b);
        if (!b)
            return b
    };
    return c
}, Zb = function(a, c, b, d, e) {
    if ("array" == da(c))
        for (var f = 0; f < c.length; f++)
            Zb(a, c[f], b, d, e);
    else 
        b = Tb(b), a && a[Jb] ? a.unlisten(c, b, d, e) : a && (a = Ub(a)) && (c = a.ab(c, b, !!d, e)) && $b(c)
}, $b = function(a) {
    if ("number" != typeof a && a&&!a.R) {
        var c = a.src;
        if (c && c[Jb])
            Ob(c.S, a);
        else {
            var b = a.type, d = a.Ha;
            c.removeEventListener ? c.removeEventListener(b, d, a.Da) : c.detachEvent && c.detachEvent(Wb(b), d);
            Rb--;
            (b = Ub(c)) ? (Ob(b, a), 0 == b.Ia && (b.src = null, c[Pb] = null)) : Mb(a)
        }
    }
}, Wb = function(a) {
    return a in
    Qb ? Qb[a] : Qb[a] = "on" + a
}, bc = function(a, c, b, d) {
    var e = 1;
    if (a = Ub(a))
        if (c = a.o[c.toString()])
            for (c = c.concat(), a = 0; a < c.length; a++) {
                var f = c[a];
                f && f.Da == b&&!f.R && (e&=!1 !== ac(f, d))
            }
    return Boolean(e)
}, ac = function(a, c) {
    var b = a.M, d = a.Ga || a.src;
    a.Ea && $b(a);
    return b.call(d, c)
}, Xb = function(a, c) {
    if (a.R)
        return !0;
    if (!Hb) {
        var b;
        if (!(b = c))
            i: {
            b = ["window", "event"];
            for (var d = l, e; e = b.shift();)
                if (null != d[e])
                    d = d[e];
                else {
                    b = null;
                    break i
                }
                b = d
        }
        e = b;
        b = new M(e, this);
        d=!0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            i:
            {
                var f=!1;
                if (0 == e.keyCode)
                    try {
                        e.keyCode =
                        - 1;
                        break i
                } catch (h) {
                    f=!0
                }
                if (f || void 0 == e.returnValue)
                    e.returnValue=!0
            }
            e = [];
            for (f = b.currentTarget; f; f = f.parentNode)
                e.push(f);
            for (var f = a.type, k = e.length - 1; !b.T && 0 <= k; k--)
                b.currentTarget = e[k], d&=bc(e[k], f, !0, b);
            for (k = 0; !b.T && k < e.length; k++)
                b.currentTarget = e[k], d&=bc(e[k], f, !1, b)
            }
        return d
    }
    return ac(a, new M(c, this))
}, Ub = function(a) {
    a = a[Pb];
    return a instanceof N ? a : null
}, cc = "__closure_events_fn_" + (1E9 * Math.random()>>>0), Tb = function(a) {
    if (ea(a))
        return a;
    a[cc] || (a[cc] = function(c) {
        return a.handleEvent(c)
    });
    return a[cc]
};
var O = function() {
    Gb.call(this);
    this.S = new N(this);
    this.uc = this;
    this.Rb = null
};
ka(O, Gb);
O.prototype[Jb]=!0;
g = O.prototype;
g.addEventListener = function(a, c, b, d) {
    Sb(this, a, c, b, d)
};
g.removeEventListener = function(a, c, b, d) {
    Zb(this, a, c, b, d)
};
g.dispatchEvent = function(a) {
    var c, b = this.Rb;
    if (b)
        for (c = []; b; b = b.Rb)
            c.push(b);
    var b = this.uc, d = a.type || a;
    if (m(a))
        a = new L(a, b);
    else if (a instanceof L)
        a.target = a.target || b;
    else {
        var e = a;
        a = new L(d, b);
        za(a, e)
    }
    var e=!0, f;
    if (c)
        for (var h = c.length - 1; !a.T && 0 <= h; h--)
            f = a.currentTarget = c[h], e = dc(f, d, !0, a) && e;
    a.T || (f = a.currentTarget = b, e = dc(f, d, !0, a) && e, a.T || (e = dc(f, d, !1, a) && e));
    if (c)
        for (h = 0; !a.T && h < c.length; h++)
            f = a.currentTarget = c[h], e = dc(f, d, !1, a) && e;
    return e
};
g.listen = function(a, c, b, d) {
    return this.S.add(String(a), c, !1, b, d)
};
g.unlisten = function(a, c, b, d) {
    return this.S.remove(String(a), c, b, d)
};
var dc = function(a, c, b, d) {
    c = a.S.o[String(c)];
    if (!c)
        return !0;
    c = c.concat();
    for (var e=!0, f = 0; f < c.length; ++f) {
        var h = c[f];
        if (h&&!h.R && h.Da == b) {
            var k = h.M, E = h.Ga || h.src;
            h.Ea && Ob(a.S, h);
            e=!1 !== k.call(E, d) && e
        }
    }
    return e && 0 != d.Pb
};
O.prototype.ab = function(a, c, b, d) {
    return this.S.ab(String(a), c, b, d)
};
var ec = function(a, c) {
    O.call(this);
    this.Ja = a || 1;
    this.Y = c || l;
    this.Ya = q(this.sc, this);
    this.Za = r()
};
ka(ec, O);
g = ec.prototype;
g.enabled=!1;
g.q = null;
g.sc = function() {
    if (this.enabled) {
        var a = r() - this.Za;
        0 < a && a < .8 * this.Ja ? this.q = this.Y.setTimeout(this.Ya, this.Ja - a) : (this.q && (this.Y.clearTimeout(this.q), this.q = null), this.dispatchEvent("tick"), this.enabled && (this.q = this.Y.setTimeout(this.Ya, this.Ja), this.Za = r()))
    }
};
g.start = function() {
    this.enabled=!0;
    this.q || (this.q = this.Y.setTimeout(this.Ya, this.Ja), this.Za = r())
};
g.stop = function() {
    this.enabled=!1;
    this.q && (this.Y.clearTimeout(this.q), this.q = null)
};
var fc = function() {
    this.bb = {};
    var a = q(this.Bc, this);
    aa("handleClick", a)
};
ba(fc);
fc.prototype.D = function(a, c) {
    this.bb[c] = a
};
fc.prototype.Bc = function(a, c, b) {
    ea(this.bb[a]) && this.bb[a].apply(this, Array.prototype.slice.call(arguments, 1))
};
var gc = function() {
    this.Ka = [];
    var a = q(this.Wa, this);
    aa("onLoad", a)
};
ba(gc);
gc.prototype.D = function(a) {
    this.Ka.push(a)
};
gc.prototype.Wa = function() {
    for (var a = 0; a < this.Ka.length; a += 1)
        ea(this.Ka[a]) && this.Ka[a]()
};
var hc = ["", "moz", "ms", "O", "webkit"];
var ic = function() {
    this.Nb = [];
    this.Ob = [];
    this.h()
};
ic.prototype.j = function(a) {
    this.h();
    this.g(a)
};
ic.prototype.h = function() {
    this.Nb.length = 0;
    this.Ob.length = 0
};
ic.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        if ("ad_text" == d)
            for (var e = 0; e < b.length; ++e)
                this.Nb.push(b[e]);
        if ("line_rtl" == d)
            for (e = 0; e < b.length; ++e)
                this.Ob.push(b[e])
    }
};
var jc = function() {
    this.h()
};
g = jc.prototype;
g.height = function() {
    return this.H
};
g.width = function() {
    return this.I
};
g.j = function(a) {
    this.h();
    this.g(a)
};
g.h = function() {
    this.Q = "";
    this.I = this.H = 0
};
g.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "image_url" == d && (this.Q = b);
        "height" == d && (this.H = b);
        "width" == d && (this.I = b)
    }
};
var kc = function() {
    this.Eb = [];
    this.xa = null;
    this.Db = [];
    this.h()
};
g = kc.prototype;
g.name = function() {
    return this.J
};
g.Ma = function() {
    return this.F
};
g.j = function(a) {
    this.h();
    this.g(a)
};
g.h = function() {
    this.F = this.J = "";
    this.Eb.length = 0;
    this.xa = null;
    this.Db.length = 0
};
g.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "name" == d && (this.J = b);
        "icon_url" == d && (this.F = b);
        if ("user_reviews" == d)
            for (var e = 0; e < b.length; ++e)
                this.Eb.push(b[e]);
        "screenshot_data" == d && (null === this.xa && (this.xa = new lc), this.xa.g(b));
        if ("promo_code" == d)
            for (e = 0; e < b.length; ++e)
                d = new P, this.Db.push(d), d.g(b[e])
    }
};
var P = function() {
    this.h()
};
P.prototype.La = function() {
    return this.B
};
P.prototype.j = function(a) {
    this.h();
    this.g(a)
};
P.prototype.h = function() {
    this.B = ""
};
P.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c];
        "destination_url" == c.toLowerCase() && (this.B = b)
    }
};
var mc = function() {
    this.h()
};
g = mc.prototype;
g.name = function() {
    return this.J
};
g.Ma = function() {
    return this.F
};
g.j = function(a) {
    this.h();
    this.g(a)
};
g.h = function() {
    this.F = this.J = ""
};
g.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "name" == d && (this.J = b);
        "icon_url" == d && (this.F = b)
    }
};
var nc = function() {
    this.Hb = [];
    this.h()
};
nc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
nc.prototype.h = function() {
    this.Hb.length = 0
};
nc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c];
        if ("product" == c.toLowerCase())
            for (var d = 0; d < b.length; ++d) {
                var e = new mc;
                this.Hb.push(e);
                e.g(b[d])
            }
        }
};
var oc = function() {
    this.X = [];
    this.h()
};
oc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
oc.prototype.h = function() {
    this.X.length = 0
};
oc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c];
        if ("artists" == c.toLowerCase())
            for (var d = 0; d < b.length; ++d)
                this.X.push(b[d])
    }
};
var pc = function() {
    this.X = [];
    this.Gb = [];
    this.h()
};
pc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
pc.prototype.h = function() {
    this.X.length = 0;
    this.Gb.length = 0
};
pc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        if ("artists" == d)
            for (var e = 0; e < b.length; ++e)
                this.X.push(b[e]);
        if ("songs" == d)
            for (e = 0; e < b.length; ++e)
                d = new oc, this.Gb.push(d), d.g(b[e])
    }
};
var qc = function() {
    this.Q = [];
    this.Mb = [];
    this.h()
};
qc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
qc.prototype.h = function() {
    this.Q.length = 0;
    this.Mb.length = 0
};
qc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        if ("image_url" == d)
            for (var e = 0; e < b.length; ++e)
                this.Q.push(b[e]);
        if ("duration" == d)
            for (e = 0; e < b.length; ++e)
                this.Mb.push(b[e])
    }
};
var rc = function() {
    this.h()
};
rc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
rc.prototype.h = function() {};
rc.prototype.g = function(a) {
    for (var c in a);
};
var sc = function() {
    this.h()
};
sc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
sc.prototype.h = function() {};
sc.prototype.g = function(a) {
    for (var c in a);
};
var Q = function() {
    this.za = null;
    this.h()
};
Q.prototype.text = function() {
    return this.G
};
Q.prototype.j = function(a) {
    this.h();
    this.g(a)
};
Q.prototype.h = function() {
    this.G = this.Q = "";
    this.za = null
};
Q.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "image_url" == d && (this.Q = b);
        "text" == d && (this.G = b);
        "action_urls" == d && (null === this.za && (this.za = new sc), this.za.g(b))
    }
};
var R = function() {
    this.Bb = [];
    this.ma = this.na = this.la = this.pa = this.ka = this.qa = this.oa = null;
    this.h()
};
R.prototype.La = function() {
    return this.B
};
R.prototype.j = function(a) {
    this.h();
    this.g(a)
};
R.prototype.h = function() {
    this.B = "";
    this.Bb.length = 0;
    this.ma = this.na = this.la = this.pa = this.ka = this.qa = this.oa = null
};
R.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "destination_url" == d && (this.B = b);
        if ("buttons" == d)
            for (var e = 0; e < b.length; ++e) {
                var f = new Q;
                this.Bb.push(f);
                f.g(b[e])
            }
        "image_creative" == d && (null === this.oa && (this.oa = new jc), this.oa.g(b));
        "text_creative" == d && (null === this.qa && (this.qa = new ic), this.qa.g(b));
        "app_creative" == d && (null === this.ka && (this.ka = new kc), this.ka.g(b));
        "music_creative" == d && (null === this.pa && (this.pa = new pc), this.pa.g(b));
        "crossfade_creative" == d && (null === this.la &&
        (this.la = new qc), this.la.g(b));
        "iap_creative" == d && (null === this.na && (this.na = new nc), this.na.g(b));
        "html5_template_creative" == d && (null === this.ma && (this.ma = new rc), this.ma.g(b))
    }
};
R.CREATIVE_TYPE_UNKNOWN = 0;
R.CREATIVE_TYPE_TEXT = 1;
R.CREATIVE_TYPE_IMAGE = 2;
R.CREATIVE_TYPE_CROSSFADE_BANNER = 3;
R.CREATIVE_TYPE_PRODUCT = 4;
R.CREATIVE_TYPE_APP = 5;
R.CREATIVE_TYPE_MUSIC = 6;
R.CREATIVE_TYPE_IN_APP_PURCHASE = 7;
R.CREATIVE_TYPE_HTML5_TEMPLATE = 8;
var S = function() {
    this.Cb = [];
    this.Ba = null;
    this.v = [];
    this.h()
};
S.prototype.height = function() {
    return this.H
};
S.prototype.width = function() {
    return this.I
};
var U = function(a) {
    null === a.Ba && (a.Ba = new T);
    return a.Ba
};
S.prototype.j = function(a) {
    this.h();
    this.g(a)
};
S.prototype.h = function() {
    this.I = this.H = this.Cb.length = 0;
    this.Ba = null;
    this.v.length = 0
};
S.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        if ("creatives" == d)
            for (var e = 0; e < b.length; ++e) {
                var f = new R;
                this.Cb.push(f);
                f.g(b[e])
            }
        "height" == d && (this.H = b);
        "width" == d && (this.I = b);
        "attribution" == d && U(this).g(b);
        if ("flags" == d)
            for (e = 0; e < b.length; ++e)
                d = new tc, this.v.push(d), d.g(b[e])
        }
};
S.CREATIVE_TYPE_UNKNOWN = 0;
S.CREATIVE_TYPE_TEXT = 1;
S.CREATIVE_TYPE_IMAGE = 2;
S.CREATIVE_TYPE_CROSSFADE_BANNER = 3;
S.CREATIVE_TYPE_PRODUCT = 4;
S.CREATIVE_TYPE_APP = 5;
var V = function() {
    this.h()
};
V.prototype.label = function() {
    return this.Tb
};
V.prototype.j = function(a) {
    this.h();
    this.g(a)
};
V.prototype.h = function() {
    this.Xa = this.Tb = "";
    this.Qb=!0
};
V.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "label" == d && (this.Tb = b);
        "label_instance" == d && (this.Xa = b);
        "include_close_button_token" == d && (this.Qb = b)
    }
};
var uc = function() {
    this.Fa = null;
    this.h()
};
uc.prototype.text = function() {
    return this.G
};
var vc = function(a) {
    null === a.Fa && (a.Fa = new V);
    return a.Fa
};
uc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
uc.prototype.h = function() {
    this.G = "";
    this.Fa = null
};
uc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "text" == d && (this.G = b);
        "conversion" == d && vc(this).g(b)
    }
};
var wc = function() {
    this.wa = this.va = this.ua = this.ta = this.sa = null;
    this.ja = [];
    this.h()
}, xc = function(a) {
    null === a.sa && (a.sa = new V);
    return a.sa
}, yc = function(a) {
    null === a.ta && (a.ta = new V);
    return a.ta
}, zc = function(a) {
    null === a.ua && (a.ua = new V);
    return a.ua
}, Ac = function(a) {
    null === a.va && (a.va = new V);
    return a.va
}, Bc = function(a) {
    null === a.wa && (a.wa = new V);
    return a.wa
};
wc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
wc.prototype.h = function() {
    this.ub = this.Ua = this.vb = this.zb = this.Ab = this.xb = this.yb = "";
    this.wa = this.va = this.ua = this.ta = this.sa = null;
    this.tb = "";
    this.ja.length = 0;
    this.Ta = this.rb = this.Sa = this.qb = this.pb = this.ob = this.nb = this.sb = "";
    this.wb=!1
};
wc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "mute_text" == d && (this.yb = b);
        "mute_icon_url" == d && (this.xb = b);
        "pub_feedback_text" == d && (this.Ab = b);
        "pub_feedback_icon_url" == d && (this.zb = b);
        "conversion_url" == d && (this.vb = b);
        "encoded_cookie" == d && (this.Ua = b);
        "close_button_token" == d && (this.ub = b);
        "interaction_conversion" == d && xc(this).g(b);
        "mute_conversion" == d && yc(this).g(b);
        "mute_undo_conversion" == d && zc(this).g(b);
        "pub_feedback_conversion" == d && Ac(this).g(b);
        "pub_feedback_undo_conversion" ==
        d && Bc(this).g(b);
        "survey_header" == d && (this.tb = b);
        if ("survey_options" == d)
            for (var e = 0; e < b.length; ++e) {
                var f = new uc;
                this.ja.push(f);
                f.g(b[e])
            }
        "back_icon_url" == d && (this.sb = b);
        "mute_confirmation_header" == d && (this.nb = b);
        "mute_confirmation_text" == d && (this.ob = b);
        "pub_feedback_confirmation_header" == d && (this.pb = b);
        "pub_feedback_confirmation_text" == d && (this.qb = b);
        "undo_text" == d && (this.Sa = b);
        "closing_countdown_text" == d && (this.rb = b);
        "close_message" == d && (this.Ta = b, this.wb=!0)
    }
};
var T = function() {
    this.Ca = null;
    this.h()
};
T.prototype.La = function() {
    return this.B
};
T.prototype.Ma = function() {
    return this.F
};
T.prototype.text = function() {
    return this.G
};
var Cc = function(a) {
    null === a.Ca && (a.Ca = new wc);
    return a.Ca
};
T.prototype.j = function(a) {
    this.h();
    this.g(a)
};
T.prototype.h = function() {
    this.G = this.F = this.B = "";
    this.Ca = null
};
T.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "destination_url" == d && (this.B = b);
        "icon_url" == d && (this.F = b);
        "text" == d && (this.G = b);
        "user_feedback_data" == d && Cc(this).g(b)
    }
};
T.BOTTOM_LEFT = 0;
T.TOP_LEFT = 1;
T.TOP_RIGHT = 2;
T.BOTTOM_RIGHT = 3;
var tc = function() {
    this.h()
};
g = tc.prototype;
g.name = function() {
    return this.J
};
g.value = function() {
    return this.Ub
};
g.j = function(a) {
    this.h();
    this.g(a)
};
g.h = function() {
    this.Ub = this.J = ""
};
g.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "name" == d && (this.J = b);
        "value" == d && (this.Ub = b)
    }
};
var lc = function() {
    this.Ib = [];
    this.h()
};
lc.prototype.j = function(a) {
    this.h();
    this.g(a)
};
lc.prototype.h = function() {
    this.Ib.length = 0
};
lc.prototype.g = function(a) {
    for (var c in a) {
        var b = a[c];
        if ("screenshots" == c.toLowerCase())
            for (var d = 0; d < b.length; ++d) {
                var e = new Dc;
                this.Ib.push(e);
                e.g(b[d])
            }
        }
};
var Dc = function() {
    this.h()
};
g = Dc.prototype;
g.width = function() {
    return this.I
};
g.height = function() {
    return this.H
};
g.j = function(a) {
    this.h();
    this.g(a)
};
g.h = function() {
    this.H = this.I = 0
};
g.g = function(a) {
    for (var c in a) {
        var b = a[c], d = c.toLowerCase();
        "width" == d && (this.I = b);
        "height" == d && (this.H = b)
    }
};
var W = function(a, c, b, d, e, f, h, k) {
    this.eb = a;
    this.fb = c;
    this.Z = b;
    this.aa = d;
    this.dc = e;
    this.ec = f;
    this.fc = h;
    this.Fb=!1;
    this.i = k;
    this.A = 0;
    this.ra = Ca("conf_hide_backbutton") ||!1;
    this.Va = Ca("conf_show_undo") ||!1;
    this.C = this.Aa = null;
    this.ya=!1;
    a = fc.ba();
    a.D(q(this.ic, this), "backClick");
    a.D(q(this.hc, this), "attributionClick");
    a.D(q(this.gc, this), "adMuteClick");
    a.D(q(this.jc, this), "pubMuteClick");
    a.D(q(this.kc, this), "surveyOptionClick");
    this.Va && a.D(q(this.lc, this), "undoClick");
    gc.ba().D(q(this.Wa, this))
};
W.prototype.Wa = function() {
    for (var a = A("info_card"), c = this.Z + " linear 0.2s," + this.aa + " linear 0.2s", b = 0; b < hc.length; b++)
        K(a, hc[b] ? hc[b] + "transition"[0].toUpperCase() + "ransition" : "transition", c)
};
W.prototype.collapse = function() {
    var a = A("info_card");
    K(a, this.Z, - 1 * this.fb + "px");
    K(a, this.aa, - 1 * this.eb + "px")
};
W.prototype.expand = function() {
    Ec(this);
    var a = A("info_card");
    K(a, this.Z, "0px");
    K(a, this.aa, "0px");
    this.Fb || (X(this, xc(this.i)), this.Fb=!0)
};
var Ec = function(a) {
    D(A("info_content"), Bb, {
        mc: a.dc,
        nc: a.ec,
        O: a.i
    });
    a.A = 1;
    Fc(!0)
}, Gc = function(a) {
    D(A("info_content"), Cb, {
        pc: a.i.tb,
        qc: a.i.ja
    });
    a.A = 2;
    Fc(!0)
}, Fc = function(a) {
    var c = A("back_section"), b = A("info_content");
    c && b && (a ? (Da ? Ea(c, "hidden", !0) : Ga(c, "hidden"), Da ? Ea(b, "expand", !0) : Ga(b, "expand")) : (Da ? Ea(c, "hidden", !1) : Fa(c, "hidden"), Da ? Ea(b, "expand", !1) : Fa(b, "expand")))
}, X = function(a, c) {
    var b = a.i.vb + "&label=" + c.label();
    "" !== c.Xa && (b += "&label_instance=" + c.Xa);
    c.Qb && (b += "&cbt=" + a.i.ub);
    0 < a.i.Ua.length &&
    (b += "&cid=" + a.i.Ua);
    (new Image).src = b
};
W.prototype.rc = function(a, c) {
    if (!(3 != this.A && 4 != this.A || 0 > c || c > a)) {
        var b = a;
        if (!this.C) {
            this.C = new ec(1E3);
            var d = A("countdown"), e = this.i.rb, f = q(function() {
                var a = "";
                0 < b && (a = e.replace("%1$d", String(b)));
                d.style.display = a ? "inline" : "none";
                if ("textContent"in d)
                    d.textContent = a;
                else if (3 == d.nodeType)
                    d.data = a;
                else if (d.firstChild && 3 == d.firstChild.nodeType) {
                    for (; d.lastChild != d.firstChild;)
                        d.removeChild(d.lastChild);
                    d.firstChild.data = a
                } else {
                    for (var f; f = d.firstChild;)
                        d.removeChild(f);
                    d.appendChild((9 == d.nodeType ?
                    d : d.ownerDocument || d.document).createTextNode(String(a)))
                }
                if (b == c)
                    try {
                        this.ya=!0, window.top.postMessage(this.i.Ta, "*")
                } catch (E) {}
                0 >= b && Hc(this);
                b--
            }, this);
            Sb(this.C, "tick", f)
        }
        this.C.dispatchEvent("tick");
        0 <= b && this.C.start()
    }
};
var Hc = function(a) {
    a.C && (a.C.stop(), a.C = null, a.ya=!1);
    a.Aa && (window.clearTimeout(a.Aa), a.Aa = null);
    if (a = A("countdown"))
        a.style.display = "none"
}, Ic = function(a) {
    if (a.i.wb) {
        var c = Eb(a.i.Ta), b = {};
        if (c && c.key_value)
            for (var d = c.key_value, e = 0; e < d.length; e++) {
                var f = d[e];
                f.key && f.value && (b[f.key] = f.value)
            }
        if ("ablate-me" == c.msg_type || "dismiss" == c.msg_type)
            c = Ha(b["secs-to-countdown"], 2), a.Aa = window.setTimeout(q(a.rc, a, Ha(b.countdown, 0), Ha(b["message-tick"], 0)), 1E3 * c)
        }
};
g = W.prototype;
g.ic = function() {
    if (!this.ya)
        switch (Hc(this), this.A) {
        case 1:
            this.collapse();
            break;
        case 2:
            Ec(this);
            X(this, zc(this.i));
            break;
        case 3:
            this.ra || Gc(this);
            break;
        case 4:
            this.ra || (Ec(this), X(this, Bc(this.i)))
        }
};
g.lc = function() {
    if (!this.ya)
        switch (Hc(this), this.A) {
        case 3:
            this.collapse();
            X(this, zc(this.i));
            break;
        case 4:
            this.collapse(), X(this, Bc(this.i))
        }
};
g.hc = function() {
    window.open(this.fc)
};
g.gc = function() {
    Gc(this);
    X(this, yc(this.i))
};
g.kc = function(a, c) {
    D(A("info_content"), Db, {
        Jb: this.i.nb,
        text: this.i.ob,
        Lb: this.i.Sa,
        Kb: this.Va
    });
    this.A = 3;
    Fc(!this.ra);
    X(this, vc(this.i.ja[c]));
    Ic(this)
};
g.jc = function() {
    D(A("info_content"), Db, {
        Jb: this.i.pb,
        text: this.i.qb,
        Lb: this.i.Sa,
        Kb: this.Va
    });
    this.A = 4;
    Fc(!this.ra);
    X(this, Ac(this.i));
    Ic(this)
};
var Z = function(a, c, b, d, e, f, h, k, E, Ta, I, J, Sc, Tc, Uc, p, n, z, Vc, B, Ia, Yb, t) {
    this.n = a;
    this.s = c;
    this.w = b;
    this.p = d;
    this.k = e;
    this.gb = f;
    this.U = h;
    this.$b = k;
    this.ac = E;
    this.jb = Ta;
    this.Na = I;
    this.da = J;
    this.Oa = Sc;
    this.V = Tc;
    this.Pa = Uc;
    i: for (a = this.s, c = "A", b = a.childNodes, d = 0; d < b.length; d++)
        if (e = b.item(d), "undefined" != typeof e.tagName && e.tagName.toUpperCase() == c) {
            a = e;
            break i
        }
    this.L = a;
    this.ea = "left" == n;
    this.K = this.u = null;
    this.lb=!0 === B;
    this.kb=!0 === Ia;
    this.fa = null;
    if (Yb) {
        B = new S;
        B.j(t);
        if (t.flags && (Ia = Ba.ba(), t = t.flags))
            for (Ia.v =
            {}, a = 0; a < t.length; a++)
                Ia.v[t[a].name] = t[a].value;
        n = this.fa = new W(B.height(), B.width(), n, this.kb ? "bottom" : "top", U(B).Ma(), U(B).text(), U(B).La(), Cc(U(B)));
        D(A("info_card"), Ab, {
            m: n.eb,
            l: n.fb,
            Yb: n.Z,
            Zb: n.aa,
            W: Ca("uses_octagon_sdk", !1),
            O: n.i
        });
        Ec(n)
    }
    n = "undefined" != typeof SVGElement && "undefined" != typeof document.createElementNS;
    "img" == z && (n=!1);
    n ? "adchoices" == p ? (this.w.appendChild(Y(Jc(this), Kc("0px"))), p = this.k - this.p + "px", this.u = Lc(this.Na, 5, this.Pa, this.da), this.L.appendChild(Y(Mc(this, this.k, this.U),
    Kc(p), this.u))) : "adsbygoogle" == p ? (p = Jc(this), z = Nc("0px"), this.w.appendChild(Y(p, z)), this.ea ? (t = 0, p = this.p + 2, z = this.k - this.V - 5) : (n = 0, p = 5, z = this.k - this.V - 2 - n - this.p, t = this.k - this.p - n), n = Mc(this, this.k, this.U), this.u = Lc(this.Na, p, this.Pa, this.da), "" != this.Oa && (this.K = Lc(this.Oa, z, this.Pa, this.V)), p = Nc(t + "px"), null != this.L && (p = this.K ? Y(n, this.u, this.K, p) : Y(n, this.u, p), this.L.appendChild(p))) : "germany" == p ? (this.w.appendChild(Y(Jc(this), Kc("0px"))), this.ea ? (z = this.p + 2, n = 3, t = 0) : (z = this.k - 45 - this.p, n = this.k -
    88 - 3, t = this.k - this.p - 0), p = Mc(this, this.k, this.U), this.u = Lc(this.Na, z, 0, this.da), this.K = Lc(this.Oa, n, 14, this.V), z = Kc(t + "px"), null != this.L && (p = Y(p, this.u, this.K, z), this.L.appendChild(p))) : Oc(this) : Oc(this);
    this.P = null;
    this.ib = 0;
    Yb ? s(this.n, "click", this, q(this.fa.expand, this.fa)) : Vc ? this.Ra() : (s(this.n, "mouseover", this, this.Ra), s(this.n, "mouseout", this, this.cc), s(this.n, "mouseup", this, this.Qa), s(this.n, "touchstart", this, this.Ra), s(this.n, "touchend", this, this.Qa), s(this.n, "touchcancel", this, this.Qa),
    s(this.L, "click", this, this.bc))
}, Y = function(a) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    c.setAttribute("width", "100%");
    c.setAttribute("height", "100%");
    for (var b = 0; b < arguments.length; b++)
        c.appendChild(arguments[b]);
    return c
}, Jc = function(a) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    if (a.lb)
        return c;
    c.setAttribute("width", "100%");
    c.setAttribute("height", "100%");
    c.setAttribute("fill", "lightgray");
    return c
}, Mc = function(a, c, b) {
    var d = document.createElementNS("http://www.w3.org/2000/svg",
    "path");
    if (a.lb)
        return d;
    d.setAttribute("fill", "lightgray");
    var e = "M";
    a.kb ? (e += "0," + b + "L" + c + "," + b, e = a.ea ? e + ("L" + c + ",4s0,-4,-4,-4L0,0") : e + ("L" + c + ",0L4,0s-4,0,-4,4")) : (e += "0,0L" + c + ",0", e = a.ea ? e + ("L" + c + "," + (b - 4) + "s0,4,-4,4L0," + b) : e + ("L" + c + "," + b + "L4," + b + "s-4,0,-4,-4"));
    d.setAttribute("d", e + "z");
    return d
}, Lc = function(a, c, b, d) {
    b = 11 + b;
    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg"), f = document.createElementNS("http://www.w3.org/2000/svg", "text");
    a = document.createTextNode(a);
    e.setAttribute("overflow",
    "visible");
    e.setAttribute("x", c + "px");
    e.setAttribute("y", b + "px");
    e.setAttribute("width", d + "px");
    f.setAttribute("fill", "black");
    f.setAttribute("font-family", "Arial");
    f.setAttribute("font-size", "100px");
    e.appendChild(f);
    f.appendChild(a);
    return e
}, Pc = function(a, c) {
    var b = a.childNodes.item(0), d = b.getComputedTextLength();
    0 != d && b.setAttribute("transform", "scale(" + c / d + ")")
}, Kc = function(a) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "svg"), b = document.createElementNS("http://www.w3.org/2000/svg",
    "circle"), d = document.createElementNS("http://www.w3.org/2000/svg", "path");
    c.appendChild(b);
    c.appendChild(d);
    c.setAttribute("fill", "#00aecd");
    c.setAttribute("x", a);
    c.setAttribute("y", "0.5px");
    b.setAttribute("cx", "6.711px");
    b.setAttribute("cy", "6.04px");
    b.setAttribute("r", "0.483");
    d.setAttribute("d", "M2.696,3.234c0-0.555,0.131-0.989,0.537-1.201c0.359-0.188,0.769-0.136,1.25,0.141l7.438,4.219c0.485,0.28,0.743,0.546,0.734,1c-0.009,0.456-0.271,0.771-0.766,1.032L7.78,10.519c-0.594,0.297-0.798,0.289-1.031,0.188C6.39,10.55,6.296,10.237,6.296,9.378l0.016-1.672c0-0.828,0.844-0.906,0.844,0l0.016,1.719C7.155,9.94,7.499,9.769,7.499,9.769L11.53,7.69c0.359-0.219,0.25-0.406,0.141-0.516c-0.024-0.024-0.188-0.12-0.25-0.156L4.233,2.987c-0.797-0.531-0.656,0.25-0.656,0.25s-0.016,7.182-0.016,7.625c0,0.797,0.094,0.672,1.062,0.156c0.95-0.506,1.156,0.422,0.516,0.75c0,0-0.869,0.473-1.297,0.641c-0.797,0.312-1.109-0.234-1.141-0.641C2.674,11.401,2.696,3.234,2.696,3.234z");
    return c
}, Oc = function(a) {
    var c = Qc(a.$b, a.jb, a.p, a.gb);
    a.w.appendChild(c);
    c = Qc(a.ac, a.jb, a.k, a.U);
    a.L.appendChild(c);
    c.width = a.k
}, Qc = function(a, c, b, d) {
    var e = document.createElement("img");
    e.src = a;
    e.alt = c;
    e.setAttribute("border", "0");
    e.width = b;
    e.height = d;
    return e
};
Z.prototype.Ra = function() {
    window.clearTimeout(this.P);
    this.P = null;
    this.s && "block" == this.s.style.display || (this.ib = r(), this.k && (this.n.style.width = this.k + "px", this.n.style.height = this.U + "px"), this.w && this.s && (this.w.style.display = "none", this.s.style.display = "block"), this.u && Pc(this.u, this.da), this.K && Pc(this.K, this.V))
};
Z.prototype.cc = function() {
    Rc(this, 500)
};
Z.prototype.Qa = function() {
    Rc(this, 4E3)
};
var Rc = function(a, c) {
    window.clearTimeout(a.P);
    a.P = window.setTimeout(q(a.zc, a), c)
};
Z.prototype.zc = function() {
    window.clearTimeout(this.P);
    this.P = null;
    this.oc && (this.n.style.left = this.oc + "px");
    this.p && (this.n.style.width = this.p + "px", this.n.style.height = this.gb + "px");
    this.w && this.s && (this.w.style.display = "block", this.s.style.display = "none")
};
Z.prototype.bc = function(a) {
    this.s && "block" == this.s.style.display && 500 > r() - this.ib && (a.preventDefault ? a.preventDefault() : a.returnValue=!1)
};
var Nc = function(a) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "svg"), b = document.createElementNS("http://www.w3.org/2000/svg", "circle"), d = document.createElementNS("http://www.w3.org/2000/svg", "circle"), e = document.createElementNS("http://www.w3.org/2000/svg", "line");
    c.setAttribute("stroke", "#00aecd");
    c.setAttribute("fill", "#00aecd");
    c.setAttribute("x", a);
    c.setAttribute("y", "0px");
    b.setAttribute("cx", "7.5px");
    b.setAttribute("cy", "7.5px");
    b.setAttribute("r", "5.5px");
    b.setAttribute("fill",
    "none");
    b.setAttribute("stroke-width", "1.1px");
    d.setAttribute("cx", "7.5px");
    d.setAttribute("cy", "4.75px");
    d.setAttribute("r", "1px");
    d.setAttribute("stroke", "none");
    e.setAttribute("x1", "7.5px");
    e.setAttribute("x2", "7.5px");
    e.setAttribute("y1", "6.5px");
    e.setAttribute("y2", "11px");
    e.setAttribute("fill", "none");
    e.setAttribute("stroke-width", "1.75px");
    c.appendChild(b);
    c.appendChild(d);
    c.appendChild(e);
    return c
};
aa("abg", Z);
if ("undefined" != typeof window.abgp) {
    var $ = window.abgp;
    new Z($.el, $.ael, $.iel, $.hw, $.sw, $.hh, $.sh, $.himg, $.simg, $.alt, $.t, $.tw, $.t2, $.t2w, $.tbo, $.att, $.halign, $.ff, $.fe, $.fnb, $.iba, $.uic, $.icd)
};
})();

