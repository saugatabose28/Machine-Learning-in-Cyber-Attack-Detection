/* From: production-mt-wfe-52-18-use1 : 16055 */
(function($) {
    $.I18N = $.I18N || {};
    $.extend($.I18N, {
        locale: "en_US",
        dictionary: {},
        debug_prefix: "[",
        debug_sufix: "]",
        debug_cookie: "huffpost_i18n_debug",
        setLocale: function(locale) {
            if (locale.constructor === String && locale.length == 5 && /[a-z]{2}\_[A-Z]{2}/.test(locale)) {
                $.I18N.locale = locale
            }
        },
        getLocale: function() {
            return $.I18N.locale
        },
        setDictionary: function(data) {
            if (data.constructor === String) {
                try {
                    var dictionary = eval("(" + data + ")")
                } catch (e) {
                    return 
                }
            } else {
                var dictionary = data
            }
            $.I18N.dictionary = dictionary;
            if (document.cookie.indexOf($.I18N.debug_cookie + "=") >= 0) {
                for (key in dictionary) {
                    console.log($.I18N.dictionary[key])
                }
            }
        },
        gettext: function() {
            var str = arguments[0];
            var trans = str;
            if ("undefined" !== typeof $.I18N.dictionary) {
                trans = $.I18N.dictionary[str]
            }
            if (typeof trans == "string") {
                str = trans
            } else {
                if (typeof trans == "object" && trans.constructor == Array) {
                    str = trans[0]
                } else {
                    if (document.cookie.indexOf($.I18N.debug_cookie + "=") >= 0) {
                        str = $.I18N.debug_prefix + str + $.I18N.debug_sufix
                    }
                }
            }
            if (arguments.length > 1 && "undefined" !== typeof window.sprintf) {
                arguments[0] = str;
                str = sprintf.apply(null, arguments)
            }
            return str
        },
        ngettext: function() {
            var str = arguments[0];
            var p_str = arguments[1];
            var count = arguments[2];
            var trans;
            if (typeof $.I18N.dictionary !== "undefined") {
                trans = $.I18N.dictionary[str]
            }
            if (typeof trans == "object" && trans.constructor == Array) {
                var pl = $.I18N.plural(count);
                if (typeof pl == "boolean") {
                    pl = pl ? 1 : 0
                }
                if (typeof pl == "number" && pl < trans.length && typeof trans[pl] == "string") {
                    trans = trans[pl]
                }
            }
            if ("undefined" === typeof trans) {
                trans = ($.I18N.plural(count)) ? p_str : str
            }
            if (document.cookie.indexOf($.I18N.debug_cookie + "=") >= 0) {
                trans = $.I18N.debug_prefix + trans + $.I18N.debug_sufix
            }
            if (arguments.length > 3 && "undefined" !== typeof window.sprintf) {
                var spf_arg = new Array();
                for (var spf_i = 0; spf_i < arguments.length; spf_i++) {
                    if (spf_i > 2) {
                        spf_arg.push(arguments[spf_i])
                    }
                }
                spf_arg.unshift(trans);
                trans = sprintf.apply(null, spf_arg)
            }
            return trans
        },
        plural: function(number) {
            var locale = this.locale.substr(0, (this.locale.indexOf("_")));
            switch (locale) {
            case"zh":
                return 0;
            case"uk":
                return ((number%10 == 1) && (number%100 != 11)) ? 0 : (((number%10 >= 2) && (number%10 <= 4) && ((number%100 < 10) || (number%100 >= 20))) ? 1 : 2);
            case"zu":
                return (number == 1) ? 0 : 1;
            case"wa":
                return ((number == 0) || (number == 1)) ? 0 : 1;
            case"sk":
                return (number == 1) ? 0 : (((number >= 2) && (number <= 4)) ? 1 : 2);
            case"ga":
                return (number == 1) ? 0 : ((number == 2) ? 1 : 2);
            case"lt":
                return ((number%10 == 1) && (number%100 != 11)) ? 0 : (((number%10 >= 2) && ((number%100 < 10) || (number%100 >= 20))) ? 1 : 2);
            case"sl":
                return (number%100 == 1) ? 0 : ((number%100 == 2) ? 1 : (((number%100 == 3) || (number%100 == 4)) ? 2 : 3));
            case"mk":
                return (number%10 == 1) ? 0 : 1;
            case"mt":
                return (number == 1) ? 0 : (((number == 0) || ((number%100 > 1) && (number%100 < 11))) ? 1 : (((number%100 > 10) && (number%100 < 20)) ? 2 : 3));
            case"lv":
                return (number == 0) ? 0 : (((number%10 == 1) && (number%100 != 11)) ? 1 : 2);
            case"pl":
                return (number == 1) ? 0 : (((number%10 >= 2) && (number%10 <= 4) && ((number%100 < 12) || (number%100 > 14))) ? 1 : 2);
            case"cy":
                return (number == 1) ? 0 : ((number == 2) ? 1 : (((number == 8) || (number == 11)) ? 2 : 3));
            case"ro":
                return (number == 1) ? 0 : (((number == 0) || ((number%100 > 0) && (number%100 < 20))) ? 1 : 2);
            case"ar":
                return (number == 0) ? 0 : ((number == 1) ? 1 : ((number == 2) ? 2 : (((number >= 3) && (number <= 10)) ? 3 : (((number >= 11) && (number <= 99)) ? 4 : 5))));
            default:
                return number != 1
            }
        },
        hasJapaneseChars: function(str) {
            return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u5dbf]/.test(str)
        },
        hasKoreanChars: function(str) {
            return /[\u3130-\u318F\uAC00-\uD7AF]/.test(str)
        }
    })
})(jQuery);
if (typeof _ == "undefined") {
    var _ = jQuery.I18N.gettext
}
if (typeof __ == "undefined") {
    var __ = jQuery.I18N.gettext
}
if (typeof ngettext == "undefined") {
    var ngettext = jQuery.I18N.ngettext
}
if (typeof _n == "undefined") {
    var _n = jQuery.I18N.ngettext
};
jQuery.I18N.setLocale("en_US");
jQuery.I18N.setDictionary([]);
(function(c) {
    function a(e) {
        return Object.prototype.toString.call(e).slice(8, - 1).toLowerCase()
    }
    function b(f, g) {
        for (var e = []; g > 0; e[--g] = f) {}
        return e.join("")
    }
    var d = function() {
        if (!d.cache.hasOwnProperty(arguments[0])) {
            d.cache[arguments[0]] = d.parse(arguments[0])
        }
        return d.format.call(null, d.cache[arguments[0]], arguments)
    };
    d.format = function(n, m) {
        var r = 1, p = n.length, h = "", s, e = [], j, g, l, f, o, q;
        for (j = 0; j < p; j++) {
            h = a(n[j]);
            if ("string" === h) {
                e.push(n[j])
            } else {
                if ("array" === h) {
                    l = n[j];
                    if (l[2]) {
                        s = m[r];
                        for (g = 0; g < l[2].length; g++) {
                            if (!s.hasOwnProperty(l[2][g])) {
                                throw (sprintf('[sprintf] property "%s" does not exist', l[2][g]))
                            }
                            s = s[l[2][g]]
                        }
                    } else {
                        if (l[1]) {
                            s = m[l[1]]
                        } else {
                            s = m[r++]
                        }
                    }
                    if (/[^s]/.test(l[8]) && (a(s) != "number")) {
                        throw (sprintf("[sprintf] expecting number but found %s", a(s)))
                    }
                    switch (l[8]) {
                    case"b":
                        s = s.toString(2);
                        break;
                    case"c":
                        s = String.fromCharCode(s);
                        break;
                    case"d":
                        s = parseInt(s, 10);
                        break;
                    case"e":
                        s = l[7] ? s.toExponential(l[7]) : s.toExponential();
                        break;
                    case"f":
                        s = l[7] ? parseFloat(s).toFixed(l[7]) : parseFloat(s);
                        break;
                    case"o":
                        s = s.toString(8);
                        break;
                    case"s":
                        s = ((s = String(s)) && l[7] ? s.substring(0, l[7]) : s);
                        break;
                    case"u":
                        s = Math.abs(s);
                        break;
                    case"x":
                        s = s.toString(16);
                        break;
                    case"X":
                        s = s.toString(16).toUpperCase();
                        break
                    }
                    s = (/[def]/.test(l[8]) && l[3] && s >= 0 ? "+" + s : s);
                    o = l[4] ? l[4] == "0" ? "0" : l[4].charAt(1) : " ";
                    q = l[6] - String(s).length;
                    f = l[6] ? b(o, q) : "";
                    e.push(l[5] ? s + f : f + s)
                }
            }
        }
        return e.join("")
    };
    d.cache = {};
    d.parse = function(e) {
        var h = e, i = [], k = [], j = 0;
        while (h) {
            if ((i = /^[^\x25]+/.exec(h)) !== null) {
                k.push(i[0])
            } else {
                if ((i = /^\x25{2}/.exec(h)) !== null) {
                    k.push("%")
                } else {
                    if ((i = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(h)) !== null) {
                        if (i[2]) {
                            j|=1;
                            var l = [], g = i[2], f = [];
                            if ((f = /^([a-z_][a-z_\d]*)/i.exec(g)) !== null) {
                                l.push(f[1]);
                                while ((g = g.substring(f[0].length)) !== "") {
                                    if ((f = /^\.([a-z_][a-z_\d]*)/i.exec(g)) !== null) {
                                        l.push(f[1])
                                    } else {
                                        if ((f = /^\[(\d+)\]/.exec(g)) !== null) {
                                            l.push(f[1])
                                        } else {
                                            throw ("[sprintf] huh?")
                                        }
                                    }
                                }
                            } else {
                                throw ("[sprintf] huh?")
                            }
                            i[2] = l
                        } else {
                            j|=2
                        }
                        if (j === 3) {
                            throw ("[sprintf] mixing positional and named placeholders is not (yet) supported")
                        }
                        k.push(i)
                    } else {
                        throw ("[sprintf] huh?")
                    }
                }
            }
            h = h.substring(i[0].length)
        }
        return k
    };
    if ("undefined" === typeof c.sprintf) {
        c.sprintf = d
    }
    if ("undefined" === typeof c.vsprintf) {
        c.vsprintf = function(f, e) {
            e.unshift(f);
            return sprintf.apply(null, e)
        }
    }
})(window);

/* From: production-mt-wfe-52-18-use1 : 16055 */
/* a67cccb80cc3039a0690e1b0fd4d00024bd9b3fa */
