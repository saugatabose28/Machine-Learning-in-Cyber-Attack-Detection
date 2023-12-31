YUI.add("stencil-bquery", function(e) {
    "use strict";
    function i(t) {
        var n = t.host._node || t.host, r = n.getAttribute("data-bquery") || "max-width:450px=BreakPoint", i = e.one(n.getAttribute("data-bquery-target") || n.getAttribute("data-target"));
        this.query = this.constructor.parseQuery(r), this.node = n, this.target = i ? i._node : null, this.constructor.superclass.constructor.call(this, t), this.addResizeListener(n, e.bind(this.handleResize, this)), this.handleResize()
    }
    var t = e.Object.owns, n = e.DOM, r = e.config.doc;
    e.extend(i, e.Stencil.BasePlugin, {
        throttle: 50,
        lastTime: 0,
        handleResize: function() {
            var r =+ (new Date), i, s, o, u, a, f, l, c, h, p;
            if (!this.lastTime || r - this.lastTime > this.throttle) {
                this.lastTime = r, u = this.query, a = this.target || this.node, f = this.node.offsetWidth, this.resizeSupport || (i = this.expandEl, s = i.firstChild, o = this.contractEl, l = parseInt(f + 100, 0), c = parseInt(a.offsetHeight + 100, 0), s.style.cssText = "width:" + l + "px;height:" + c + "px;", i.scrollLeft = l, i.scrollTop = c, o.scrollLeft = o.scrollWidth + 100, o.scrollTop = o.scrollHeight + 100);
                for (h = u.length - 1; h >= 0; h -= 1)
                    if (t(u[h], "min-width") && f >= u[h]["min-width"]) {
                        e.fire("bquery:breakpoint", {
                            type: "min-width",
                            node: a
                        });
                        for (p = u[h].classesA.length - 1; p >= 0; p -= 1)
                            n.addClass(a, u[h].classesA[p])
                    } else if (t(u[h], "max-width") && f <= u[h]["max-width"]) {
                        e.fire("bquery:breakpoint", {
                            type: "max-width",
                            node: a
                        });
                        for (p = u[h].classesA.length - 1; p >= 0; p -= 1)
                            n.addClass(a, u[h].classesA[p])
                    } else {
                        e.fire("bquery:breakpoint", {
                            type: "remove",
                            node: a
                        });
                        for (p = u[h].classesA.length - 1; p >= 0; p -= 1)
                            n.removeClass(a, u[h].classesA[p])
                        }
                }
        },
        addResizeListener: function(t) {
            var i = e.UA.ie && e.UA.ie < 11, s, o, u, a, f, l;
            this.resizeSupport = i, i ? (t.style.zoom = 1, t.attachEvent ? t.attachEvent("onresize", e.bind(this.handleResize, this)) : t.addEventListener && t.addEventListener("resize", e.bind(this.handleResize, this))) : (n.getComputedStyle(t, "position") === "static" && (t.style.position = "relative"), s = "position:absolute;top:0;left:0;width:100%;height:100%;overflow:scroll;visibility:hidden;z-index:-1", l = r.createDocumentFragment(), o = r.createElement("div"), o.style.cssText = s, u = r.createElement("div"), u.style.cssText = "width:200%;height:200%;", o.appendChild(u), a = r.createElement("div"), a.style.cssText = s, f = r.createElement("div"), a.appendChild(f), o.addEventListener("scroll", e.bind(this.handleResize, this)), a.addEventListener("scroll", e.bind(this.handleResize, this)), this.contractEl = o, this.expandEl = a, l.appendChild(a), l.appendChild(o), t.appendChild(l))
        }
    }, {
        NS: "StencilBquery",
        defaultTriggerEvents: [],
        requiresInit: !0,
        parseQuery: function(e) {
            var t = [], n, r = /(min-width|max-width):([0-9]+)(px)=((?:(?:[\-a-zA-Z0-9]+)(?:\,)?)+)/, i, s;
            e = e.split(" ");
            for (n = e.length - 1; n >= 0; n -= 1)
                i = r.exec(e[n]), i && (s = {}, s[i[1]] = parseInt(i[2], 10), s.unit = i[3], s.classesA = i[4].split(","), t.push(s));
            return t
        }
    }), e.Stencil.registerPlugin(i, "Bquery")
}, "@VERSION@", {
    requires: ["stencil-base", "yui-base", "dom-base", "dom-style", "node-base", "node-pluginhost"]
});
YUI.add("ape-applet-lang-strings_en-au", function(e, t) {
    e.Intl.add("ape-applet/strings", "en-AU", {
        MORE_INFO: "More Info",
        POWERED_BY: "Powered by",
        DONE: "Done",
        REMOVE: "Remove",
        DOUBLE_CONFIRM: "Are you sure?",
        CANCEL: "Cancel",
        EDIT_SETTINGS: "Edit Settings",
        SAVE: "Save"
    })
}, "@VERSION@", {
    requires: ["intl"]
});
YUI.add("stencil-imageloader", function(e, t) {
    "use strict";
    function v(e) {
        return e.offsetParent === null
    }
    function m(t) {
        this.constructor.superclass.constructor.call(this, t);
        var n = p.documentElement, r = e.DOM.docScrollY(n) + e.DOM.winHeight(n), f = e.DOM.docScrollX(n) + e.DOM.winWidth(n), l = t.host, c;
        m.checkPosition = null !== p.body.getAttribute("data-imageloader-checkposition"), l.all && l.all("." + i).each(function(e) {
            e.getDOMNode()&&!e.hasClass(o)&&!e.hasClass(u)&&!e.hasClass(a) && (e.getY() <= r && e.getX() <= f ? v(e.getDOMNode()) ? e.addClass(s) : m.loadImage(e) : (c = e._yuid || e.generateID(), m.imgs[c] = e))
        }, this)
    }
    var n = "stencil-plugin-imageloader", r = Modernizr, i = "ImageLoader", s = i + "-Hidden", o = i + "-Loaded", u = i + "-Loading", a = i + "-Delayed", f = i + "-Group", l = 2e3, c = 100, h = 0, p = e.config.doc, d = e.config.win;
    if (e.one("html").hasClass(n))
        return;
    e.extend(m, e.Stencil.BasePlugin, {}, {
        NS: "StencilImageLoader",
        requiresInit: !0,
        defaultTriggerEvents: [],
        initOnRootOnly: !0,
        imgs: {},
        loadImage: function(e) {
            if (!e)
                return;
            if (!e._node) {
                e._yuid && delete this.imgs[e._yuid];
                return 
            }
            var t = e;
            !e.hasClass(o)&&!e.hasClass(u) && (t.test("img") ? (e._error = 0, this.swapSrc(e)) : (t = e.all("." + f), t.each(this.swapSrc, this)), !e.hasClass(a)&&!e.hasClass(s) && e.removeClass(i), t.on("load", function() {
                e.setStyle("opacity", 1), e.removeClass(a), e.removeClass(u), e.removeClass(s), e.removeClass(i), e.addClass(o), this.imgs[e._yuid] && delete this.imgs[e._yuid]
            }, this), t.on("error", function(t) {
                var n = t.target, r, i;
                n._error || (e._error += 1, n.removeClass(u), i = n.get("src"), r = new Image, r.onload = function() {
                    n.setStyle("backgroundImage", "url(" + i + ")"), m.swapSrc(n), m.imgs[n._yuid] && delete m.imgs[n._yuid]
                }, r.onerror = function() {}, r.src = i)
            }, this))
        },
        swapSrc: function(e) {
            var t = "http://l.yimg.com/g/images/spaceball.gif", n = e.getStyle("backgroundImage"), i = n && n !== "none" ? n: e.getData("imageloader-src");
            /url\(["']?(.*?)["']?\)/.test(i) && (i = RegExp.$1), i && i.length > 0 && i !== e.get("src") && (/\.svg$/.test(i) ? r && r.svg ? e.set("src", i) : (e.set("src", e.getData("imageloader-fallback") || t), e.addClass(u)) : (e.set("src", i), e.addClass(u)), e.setStyle("backgroundImage", ""))
        }
    }), e.on("domready", function() {
        e.on(["scroll", "resize"], function() {
            var t =+ (new Date), n = h, r, i, s, o, u, a;
            if (n === 0 || t - n >= c) {
                h = t, s = p.documentElement, o = e.DOM.docScrollY(s) + e.DOM.winHeight(s), u = e.DOM.docScrollX(s) + e.DOM.winWidth(s), a = m.imgs;
                for (i in a)
                    if (a.hasOwnProperty(i)) {
                        r = a[i];
                        if (!r.getDOMNode()) {
                            delete a[i];
                            continue
                        }
                        m.checkPosition ? r.getY() <= o && r.getX() <= u && m.loadImage(r) : m.loadImage(r)
                    }
            }
        })
    }), e.one(d).on("load", function() {
        setTimeout(function() {
            e.all("." + s).each(m.loadImage, m)
        }, l)
    }), e.one("body").on("imageloader:delayed", function(t) {
        var n, r = "." + a;
        e.Lang.isArray(t) ? n = e.Array.reduce(t, new e.NodeList, function(e, t) {
            return e.concat(t.all(r))
        }) : t instanceof e.NodeList ? (n = new e.NodeList, t.each(function(e) {
            n = n.concat(e.all(r))
        })) : n = t && t.all(r), n && n.size() && n.each(m.loadImage, m)
    }), e.Stencil.registerPlugin(m, "ImageLoader")
}, "@VERSION@", {
    requires: ["stencil-base", "yui-base", "dom-base", "dom-screen", "node-base", "node-screen", "node-style", "node-pluginhost", "array-extras"]
});
(function(e) {
    e.IntlAvailableLangs = ["en-US", "aa-DJ", "aa-ER", "aa-ET", "aa", "af-NA", "af-ZA", "af", "agq-CM", "agq", "ak-GH", "ak", "am-ET", "am", "ar-001", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS", "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "ar", "as-IN", "as", "asa-TZ", "asa", "ast-ES", "ast", "az-Cyrl-AZ", "az-Cyrl", "az-Latn-AZ", "az-Latn", "az", "bas-CM", "bas", "be-BY", "be", "bem-ZM", "bem", "bez-TZ", "bez", "bg-BG", "bg", "bm-ML", "bm", "bn-BD", "bn-IN", "bn", "bo-CN", "bo-IN", "bo", "br-FR", "br", "brx-IN", "brx", "bs-Cyrl-BA", "bs-Cyrl", "bs-Latn-BA", "bs-Latn", "bs", "byn-ER", "byn", "ca-AD", "ca-ES", "ca-FR", "ca-IT", "ca", "cgg-UG", "cgg", "chr-US", "chr", "cs-CZ", "cs", "cy-GB", "cy", "da-DK", "da-GL", "da", "dav-KE", "dav", "de-AT", "de-BE", "de-CH", "de-DE", "de-LI", "de-LU", "de", "dje-NE", "dje", "dua-CM", "dua", "dyo-SN", "dyo", "dz-BT", "dz", "ebu-KE", "ebu", "ee-GH", "ee-TG", "ee", "el-CY", "el-GR", "el", "en-001", "en-150", "en-AG", "en-AI", "en-AS", "en-AU", "en-BB", "en-BE", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CK", "en-CM", "en-CX", "en-DG", "en-DM", "en-Dsrt-US", "en-Dsrt", "en-ER", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY", "en-HK", "en-IE", "en-IM", "en-IN", "en-IO", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR", "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW", "en-NA", "en-NF", "en-NG", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN", "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SG", "en-SH", "en-SL", "en-SS", "en-SX", "en-SZ", "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG", "en-UM", "en-US", "en-VC", "en-VG", "en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "en", "eo-001", "eo", "es-419", "es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EA", "es-EC", "es-ES", "es-GQ", "es-GT", "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "es", "et-EE", "et", "eu-ES", "eu", "ewo-CM", "ewo", "fa-AF", "fa-IR", "fa", "ff-CM", "ff-GN", "ff-MR", "ff-SN", "ff", "fi-FI", "fi", "fil-PH", "fil", "fo-FO", "fo", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-FR", "fr-GA", "fr-GF", "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU", "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF", "fr-YT", "fr", "fur-IT", "fur", "ga-IE", "ga", "gd-GB", "gd", "gl-ES", "gl", "gsw-CH", "gsw-LI", "gsw", "gu-IN", "gu", "guz-KE", "guz", "gv-GB", "gv-IM", "gv", "ha-Latn-GH", "ha-Latn-NE", "ha-Latn-NG", "ha-Latn", "ha", "haw-US", "haw", "he-IL", "he", "hi-IN", "hi", "hr-BA", "hr-HR", "hr", "hu-HU", "hu", "hy-AM", "hy", "ia-FR", "ia", "id-ID", "id", "ig-NG", "ig", "ii-CN", "ii", "is-IS", "is", "it-CH", "it-IT", "it-SM", "it", "ja-JP", "ja", "jgo-CM", "jgo", "jmc-TZ", "jmc", "ka-GE", "ka", "kab-DZ", "kab", "kam-KE", "kam", "kde-TZ", "kde", "kea-CV", "kea", "khq-ML", "khq", "ki-KE", "ki", "kk-Cyrl-KZ", "kk-Cyrl", "kk", "kkj-CM", "kkj", "kl-GL", "kl", "kln-KE", "kln", "km-KH", "km", "kn-IN", "kn", "ko-KP", "ko-KR", "ko", "kok-IN", "kok", "ks-Arab-IN", "ks-Arab", "ks", "ksb-TZ", "ksb", "ksf-CM", "ksf", "ksh-DE", "ksh", "kw-GB", "kw", "ky-Cyrl-KG", "ky-Cyrl", "ky-KG", "ky", "lag-TZ", "lag", "lg-UG", "lg", "lkt-US", "lkt", "ln-AO", "ln-CD", "ln-CF", "ln-CG", "ln", "lo-LA", "lo", "lt-LT", "lt", "lu-CD", "lu", "luo-KE", "luo", "luy-KE", "luy", "lv-LV", "lv", "mas-KE", "mas-TZ", "mas", "mer-KE", "mer", "mfe-MU", "mfe", "mg-MG", "mg", "mgh-MZ", "mgh", "mgo-CM", "mgo", "mk-MK", "mk", "ml-IN", "ml", "mn-Cyrl-MN", "mn-Cyrl", "mn", "mr-IN", "mr", "ms-Latn-BN", "ms-Latn-MY", "ms-Latn-SG", "ms-Latn", "ms", "mt-MT", "mt", "mua-CM", "mua", "my-MM", "my", "naq-NA", "naq", "nb-NO", "nb-SJ", "nb", "nd-ZW", "nd", "ne-IN", "ne-NP", "ne", "nl-AW", "nl-BE", "nl-BQ", "nl-CW", "nl-NL", "nl-SR", "nl-SX", "nl", "nmg-CM", "nmg", "nn-NO", "nn", "nnh-CM", "nnh", "nr-ZA", "nr", "nso-ZA", "nso", "nus-SD", "nus", "nyn-UG", "nyn", "om-ET", "om-KE", "om", "or-IN", "or", "os-GE", "os-RU", "os", "pa-Arab-PK", "pa-Arab", "pa-Guru-IN", "pa-Guru", "pa", "pl-PL", "pl", "ps-AF", "ps", "pt-AO", "pt-BR", "pt-CV", "pt-GW", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "pt", "rm-CH", "rm", "rn-BI", "rn", "ro-MD", "ro-RO", "ro", "rof-TZ", "rof", "root", "ru-BY", "ru-KG", "ru-KZ", "ru-MD", "ru-RU", "ru-UA", "ru", "rw-RW", "rw", "rwk-TZ", "rwk", "sah-RU", "sah", "saq-KE", "saq", "sbp-TZ", "sbp", "se-FI", "se-NO", "se", "seh-MZ", "seh", "ses-ML", "ses", "sg-CF", "sg", "shi-Latn-MA", "shi-Latn", "shi-Tfng-MA", "shi-Tfng", "shi", "si-LK", "si", "sk-SK", "sk", "sl-SI", "sl", "sn-ZW", "sn", "so-DJ", "so-ET", "so-KE", "so-SO", "so", "sq-AL", "sq-MK", "sq-XK", "sq", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-RS", "sr-Cyrl-XK", "sr-Cyrl", "sr-Latn-BA", "sr-Latn-ME", "sr-Latn-RS", "sr-Latn-XK", "sr-Latn", "sr", "ss-SZ", "ss-ZA", "ss", "ssy-ER", "ssy", "st-LS", "st-ZA", "st", "sv-AX", "sv-FI", "sv-SE", "sv", "sw-KE", "sw-TZ", "sw-UG", "sw", "swc-CD", "swc", "ta-IN", "ta-LK", "ta-MY", "ta-SG", "ta", "te-IN", "te", "teo-KE", "teo-UG", "teo", "tg-Cyrl-TJ", "tg-Cyrl", "tg", "th-TH", "th", "ti-ER", "ti-ET", "ti", "tig-ER", "tig", "tn-BW", "tn-ZA", "tn", "to-TO", "to", "tr-CY", "tr-TR", "tr", "ts-ZA", "ts", "twq-NE", "twq", "tzm-Latn-MA", "tzm-Latn", "tzm", "uk-UA", "uk", "ur-IN", "ur-PK", "ur", "uz-Arab-AF", "uz-Arab", "uz-Cyrl-UZ", "uz-Cyrl", "uz-Latn-UZ", "uz-Latn", "uz", "vai-Latn-LR", "vai-Latn", "vai-Vaii-LR", "vai-Vaii", "vai", "ve-ZA", "ve", "vi-VN", "vi", "vo-001", "vo", "vun-TZ", "vun", "wae-CH", "wae", "wal-ET", "wal", "xh-ZA", "xh", "xog-UG", "xog", "yav-CM", "yav", "yo-BJ", "yo-NG", "yo", "zgh-MA", "zgh", "zh-Hans-CN", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hans", "zh-Hant-HK", "zh-Hant-MO", "zh-Hant-TW", "zh-Hant", "zh", "zu-ZA", "zu"]
})(window), YUI.add("intl-messageformat", function(e, t) {
    (function() {
        (function(e, t) {
            "use strict";
            var n = e.Intl || e.IntlPolyfill, r = t(n);
            typeof define == "function" && define.amd && define(r), typeof module == "object" && typeof module.exports == "object" && (module.exports = r), e && (e.IntlMessageFormat = r)
        })(typeof global != "undefined" ? global : this, function(e) {
            "use strict";
            function u(e, t, n) {
                typeof e == "string" && (e = u.__parse(e));
                if (!e || typeof e.length != "number")
                    throw new TypeError("A pattern must be provided as a String or Array."
                    );
                n = this._mergeFormats(u.FORMATS, n), i(this, "_locale", {
                    value: this._resolveLocale(t)
                }), e = this._compilePattern(e, t, n), i(this, "_pattern", {
                    value: e
                }), this.format = o.call(this.format, this)
            }
            function f(e) {
                var t = e.match(a);
                return t ? new l(t[1]) : e
            }
            function l(e) {
                this.valueName = e
            }
            function c(e, t) {
                this.valueName = e, this.options = t
            }
            function h(e, t, n) {
                this.valueName = e, this.options = t, this.pluralFunction = n
            }
            function d(e, t) {
                var n = /[{}]/g, r = [], i = 0, s = 0, o, u, a, f, l;
                a = n.exec(e);
                while (a) {
                    i += a[0] === "{" ? 1 : - 1;
                    if (i < 0)
                        throw new Error("Imbalanced bracket detected at index " + a.index + ' for message "' + e + '"');
                    i === 0 && (o = a.index + 1, r.push(e.slice(s, o)), s = o), i === 1 && s !== a.index && (u = e.slice(s, a.index), u.indexOf("{")===-1 && (r.push(u), s = a.index)), a = n.exec(e)
                }
                if (i !== 0)
                    throw new Error("Brackets were not properly closed: " + e);
                s !== e.length && r.push(e.slice(s));
                if (t)
                    for (f = 0, l = r.length; f < l; f++)
                        r[f] = r[f].replace(/^\s+|\s+$/gm, "");
                return r
            }
            function v(e) {
                return e.replace(/^\{\s*/, "").replace(/\s*\}$/, "")
            }
            function m(e) {
                return e.indexOf("{") >= 0
            }
            function g(e, t) {
                var n, r, i, s, o;
                e.options = {};
                if (t.length%2)
                    throw new Error("Options must come in pairs: " + t.join(", "));
                for (o = 0, s = t.length; o < s; o += 2)
                    i = t[o], r = t[o + 1], e.options[i] = r, n = n || i === "other";
                if (!n)
                    throw new Error('Options must include default "other" option: ' + t.join(", "));
                return e
            }
            function y(e, t) {
                return e.format = t[0], e
            }
            function b(e, t, n) {
                var r = {
                    type: n.type,
                    valueName: t[1]
                }, i = t[2] && d(t[2], !0);
                return n.tokenParser && i && (r = n.tokenParser(r, i)), n.postParser && (r = n.postParser(r)), r
            }
            function w(e, t) {
                var n, r;
                for (n = 0, r = p.length; n < r; n++)
                    if (E(p[n], e, t))
                        return e[t];
                return e[t]
            }
            function E(e, t, n) {
                var r = t[n], i = r.match(e.regex), s, o = [], u, a, f;
                if (i) {
                    s = e.parse(r, i, e), t[n] = s;
                    if (s && s.options && typeof s.options == "object")
                        for (u in s.options)
                            s.options.hasOwnProperty(u) && o.push(u);
                    for (a = 0, f = o.length; a < f; a++)
                        S(s, o[a], e);
                    return !0
                }
                return !!i
            }
            function S(e, t, n) {
                var r = e.options && e.options[t];
                r = v(r), e.options[t] = x(r, n.outputFormatter)
            }
            function x(e, t) {
                var n, r, i;
                if (!m(e))
                    return t ? t(e) : [e];
                n = d(e);
                for (r = 0, i = n.length; r < i; r++)
                    n[r].charAt(0) === "{" && (n[r] = w(n, r));
                return n
            }
            function T(e) {
                var t = Array.prototype.slice.call(arguments, 1), n, r, i, s;
                for (n = 0, r = t.length; n < r; n += 1) {
                    i = t[n];
                    if (!i)
                        continue;
                    for (s in i)
                        i.hasOwnProperty(s) && (e[s] = i[s])
                }
                return e
            }
            if (!e)
                throw new ReferenceError("Intl must be available");
            var t = Object.prototype.hasOwnProperty, n = function() {
                try {
                    return !!Object.defineProperty({}, "a", {})
                } catch (e) {
                    return !1
                }
            }(), r=!n&&!Object.prototype.__defineGetter__, i = n ? Object.defineProperty : function(e, n, r) {
                if ("get"in r && e.__defineGetter__)
                    e.__defineGetter__(n, r.get);
                else if (!t.call(e, n) || "value"in r)
                    e[n] = r.value
            }, s = Object.create || function(e, n) {
                function o() {}
                var r, s;
                o.prototype = e, r = new o;
                for (s in n)
                    t.call(n, s) && i(r, s, n[s]);
                return r
            }, o = Function.prototype.bind || function(e) {
                var t = this, n = [].slice.call(arguments, 1);
                return function() {
                    t.apply(e, n.concat([].slice.call(arguments)))
                }
            };
            i(u, "FORMATS", {
                enumerable: !0,
                value: {
                    number: {
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        "short": {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        "long": {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        "short": {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        "long": {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }
            }), i(u, "__availableLocales__", {
                value: []
            }), i(u, "__localeData__", {
                value: s(null)
            }), i(u, "__addLocaleData", {
                value: function(e) {
                    if (!e ||!e.locale)
                        throw new Error("Object passed does not identify itself with a valid language tag");
                    if (!e.messageformat)
                        throw new Error("Object passed does not contain locale data for IntlMessageFormat");
                    var t = u.__availableLocales__, n = u.__localeData__, r = e.locale.toLowerCase().split("-")[0];
                    t.push(r), n[r] = e.messageformat, u.defaultLocale === undefined && (u.defaultLocale = r)
                }
            }), i(u, "__parse", {
                value: x
            }), i(u, "defaultLocale", {
                enumerable: !0,
                writable: !0
            }), u.prototype.format = function(e) {
                return this._format(this._pattern, e)
            }, u.prototype.resolvedOptions = function() {
                return {
                    locale: this._locale
                }
            }, u.prototype._compilePattern = function(n, r, i) {
                typeof n == "string" && (n = [n]);
                var s = this._locale, o = u.__localeData__, a = [], l, p, d, v, m, g, y, b, w, E, S;
                for (l = 0, p = n.length; l < p; l += 1) {
                    d = n[l];
                    if (typeof d == "string") {
                        a.push(f(d));
                        continue
                    }
                    v = d.type, m = d.valueName, b = d.options;
                    if (b) {
                        E = {};
                        for (w in b) {
                            if (!t.call(b, w))
                                continue;
                            S = b[w];
                            if (v === "plural" && typeof S == "string" && S.indexOf("${#}") >= 0) {
                                S = S.match(/(.*)\${#}(.*)/), E[w] = [S[1], {
                                    valueName: m,
                                    format: (new e.NumberFormat(r)).format
                                }, S[2]];
                                continue
                            }
                            E[w] = this._compilePattern(S, r, i)
                        }
                    }
                    switch (v) {
                    case"date":
                        g = i.date[d.format], a.push({
                            valueName: m,
                            format: (new e.DateTimeFormat(r, g)).format
                        });
                        break;
                    case"time":
                        g = i.time[d.format], a.push({
                            valueName: m,
                            format: (new e.DateTimeFormat(r, g)).format
                        });
                        break;
                    case"number":
                        g = i.number[d.format], a.push({
                            valueName: m,
                            format: (new e.NumberFormat(r, g)).format
                        });
                        break;
                    case"plural":
                        y = o[s].pluralFunction, a.push(new h(m, E, y));
                        break;
                    case"select":
                        a.push(new c(m, E));
                        break;
                    default:
                        throw new Error("Message pattern part at index " + l + " does not have a valid type")
                    }
                }
                return a
            }, u.prototype._format = function(e, n) {
                var r = "", i, s, o, u, a, f;
                for (i = 0, s = e.length; i < s; i += 1) {
                    o = e[i];
                    if (typeof o == "string") {
                        r += o;
                        continue
                    }
                    u = o.valueName;
                    if (!n ||!t.call(n, u))
                        throw new Error("A value must be provided for: " + u);
                    a = n[u], f = o.options, f ? r += this._format(o.getOption(a), n) : r += o.format(a)
                }
                return r
            }, u.prototype._mergeFormats = function(e, n) {
                var r = {}, i, o;
                for (i in e) {
                    if (!t.call(e, i))
                        continue;
                    r[i] = o = s(e[i]), n && t.call(n, i) && T(o, n[i])
                }
                return r
            }, u.prototype._resolveLocale = function(e) {
                var t = u.__availableLocales__, n, r, i, s;
                if (t.length === 0)
                    throw new Error("No locale data has been provided for IntlMessageFormat yet");
                typeof e == "string" && (e = [e]);
                if (e && e.length)
                    for (i = 0, s = e.length; i < s; i += 1) {
                        n = e[i].toLowerCase().split("-")[0];
                        if (!/[a-z]{2,3}/i.test(n))
                            throw new RangeError('"' + e[i] + '" is not a structurally valid language tag');
                            if (t.indexOf(n) >= 0)
                                break
                    }
                return n || u.defaultLocale
            };
            var a = /^\${([-\w]+)}$/;
            l.prototype.format = function(e) {
                return e ? typeof e == "string" ? e : String(e) : ""
            }, c.prototype.getOption = function(e) {
                var t = this.options;
                return t[e] || t.other
            }, h.prototype.getOption = function(e) {
                var t = this.options, n = this.pluralFunction(e);
                return t[n] || t.other
            };
            var p = [{
                type: "string",
                regex: /^{\s*([-\w]+)\s*}$/,
                parse: b,
                postParser: function(e) {
                    return "${" + e.valueName + "}"
                }
            }, {
                type: "select",
                regex: /^{\s*([-\w]+)\s*,\s*select\s*,\s*(.*)\s*}$/,
                parse: b,
                tokenParser: g
            }, {
                type: "plural",
                regex: /^{\s*([-\w]+)\s*,\s*plural\s*,\s*(.*)\s*}$/,
                parse: b,
                tokenParser: g,
                outputFormatter: function(e) {
                    return e.replace(/#/g, "${#}")
                }
            }, {
                type: "time",
                regex: /^{\s*([-\w]+)\s*,\s*time(?:,(.*))?\s*}$/,
                parse: b,
                tokenParser: y,
                postParser: function(e) {
                    return e.format = e.format || "medium", e
                }
            }, {
                type: "date",
                regex: /^{\s*([-\w]+)\s*,\s*date(?:,(.*))?\s*}$/,
                parse: b,
                tokenParser: y,
                postParser: function(e) {
                    return e.format = e.format || "medium", e
                }
            }, {
                type: "number",
                regex: /^{\s*([-\w]+)\s*,\s*number(?:,(.*))?\s*}$/,
                parse: b,
                tokenParser: y
            }, {
                type: "custom",
                regex: /^{\s*([-\w]+)\s*,\s*([a-zA-Z]*)(?:,(.*))?\s*}$/,
                parse: b,
                tokenParser: y
            }
            ];
            return u
        }), function(e) {
            var t = e.IntlMessageFormat, n = [function(e) {}, function(e) {
                return e = Math.floor(e), e === 1 ? "one" : "other"
            }, function(e) {
                return e = Math.floor(e), e >= 0 && e <= 1 ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e));
                return e = Math.floor(e), t === 0 || e === 1 ? "one" : "other"
            }, function(e) {
                return e = Math.floor(e), e === 0 ? "zero" : e === 1 ? "one" : e === 2 ? "two" : e%100 >= 3 && e%100 <= 10 ? "few" : e%100 >= 11 && e%100 <= 99 ? "many" : "other"
            }, function(e) {
                return e = Math.floor(e), e%10 === 1 && e%100 !== 11 ? "one" : e%10 >= 2 && e%10 <= 4&&!(e%100 >= 12 && e%100 <= 14) ? "few" : e%10 === 0 || e%10 >= 5 && e%10 <= 9 || e%100 >= 11 && e%100 <= 14 ? "many" : "other"
            }, function(e) {
                return "other"
            }, function(e) {
                return e = Math.floor(e), e%10 === 1 && e%100 !== 11 && e%100 !== 71 && e%100 !== 91 ? "one" : e%10 === 2 && e%100 !== 12 && e%100 !== 72 && e%100 !== 92 ? "two" : !(e%10 >= 3 && e%10 <= 4 || e%10 === 9) || e%100 >= 10 && e%100 <= 19 || e%100 >= 70 && e%100 <= 79 || e%100 >= 90 && e%100 <= 99 ? e !== 0 && e%1e6 === 0 ? "many" : "other" : "few"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length, r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
                return e = Math.floor(e), n === 0 && t%10 === 1 && (t%100 !== 11 || r%10 === 1 && r%100 !== 11) ? "one" : n === 0 && t%10 >= 2 && t%10 <= 4 && (!(t%100 >= 12 && t%100 <= 14) || r%10 >= 2 && r%10 <= 4&&!(r%100 >= 12 && r%100 <= 14)) ? "few" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), t === 1 && n === 0 ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), t === 1 && n === 0 ? "one" : t >= 2 && t <= 4 && n === 0 ? "few" : n !== 0 ? "many" : "other"
            }, function(e) {
                return e = Math.floor(e), e === 0 ? "zero" : e === 1 ? "one" : e === 2 ? "two" : e === 3 ? "few" : e === 6 ? "many" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = parseInt(e.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
                return e = Math.floor(e), e === 1 || n !== 0 && (t === 0 || t === 1) ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e));
                return e = Math.floor(e), t === 0 || t === 1 ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), t >= 0 && t <= 1 && n === 0 ? "one" : "other"
            }, function(e) {
                return e = Math.floor(e), e === 1 ? "one" : e === 2 ? "two" : e >= 3 && e <= 6 ? "few" : e >= 7 && e <= 10 ? "many" : "other"
            }, function(e) {
                return e = Math.floor(e), e === 1 || e === 11 ? "one" : e === 2 || e === 12 ? "two" : e >= 3 && e <= 10 || e >= 13 && e <= 19 ? "few" : "other"
            }, function(e) {
                return e = Math.floor(e), e%10 === 1 ? "one" : e%10 === 2 ? "two" : e%100 === 0 || e%100 === 20 || e%100 === 40 || e%100 === 60 ? "few" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), t === 1 && n === 0 ? "one" : t === 2 && n === 0 ? "two" : n !== 0 || e >= 0 && e <= 10 || e%10 !== 0 ? "other" : "many"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = parseInt(e.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
                return e = Math.floor(e), n !== 0 || t%10 !== 1 || t%100 === 11 && n === 0 ? "other" : "one"
            }, function(e) {
                return e = Math.floor(e), e === 0 ? "zero" : e === 1 ? "one" : "other"
            }, function(e) {
                return e = Math.floor(e), e === 1 ? "one" : e === 2 ? "two" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e));
                return e = Math.floor(e), e === 0 ? "zero" : t !== 0 && t !== 1 || e === 0 ? "other" : "one"
            }, function(e) {
                var t = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
                return e = Math.floor(e), e%10 !== 1 || e%100 >= 11 && e%100 <= 19 ? e%10 >= 2 && e%10 <= 9&&!(e%100 >= 11 && e%100 <= 19) ? "few" : t !== 0 ? "many" : "other" : "one"
            }, function(e) {
                var t = e.toString().replace(/^[^.]*\.?/, "").length, n = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
                return e = Math.floor(e), e%10 === 0 || e%100 >= 11 && e%100 <= 19 || t === 2 && n%100 >= 11 && n%100 <= 19 ? "zero" : e%10 === 1 && (e%100 !== 11 || t === 2 && n%10 === 1 && (n%100 !== 11 || t !== 2 && n%10 === 1)) ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length, r = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
                return e = Math.floor(e), n !== 0 || t%10 !== 1 && r%10 !== 1 ? "other" : "one"
            }, function(e) {
                return e = Math.floor(e), e === 1 ? "one" : e === 0 || e%100 >= 2 && e%100 <= 10 ? "few" : e%100 >= 11 && e%100 <= 19 ? "many" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), t === 1 && n === 0 ? "one" : n === 0 && t%10 >= 2 && t%10 <= 4&&!(t%100 >= 12 && t%100 <= 14) ? "few" : n === 0 && t !== 1 && (t%10 >= 0 && t%10 <= 1 || n === 0 && (t%10 >= 5 && t%10 <= 9 || n === 0 && t%100 >= 12 && t%100 <= 14)) ? "many" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length, r = parseInt(e.toString().replace(/^[^.]*\.?|0+$/g, ""), 10);
                return e = Math.floor(e), t === 1 && (n === 0 || t === 0 && r === 1) ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), t === 1 && n === 0 ? "one" : n !== 0 || e === 0 || e !== 1 && e%100 >= 1 && e%100 <= 19 ? "few" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), n === 0 && t%10 === 1 && t%100 !== 11 ? "one" : n === 0 && (t%10 === 0 || n === 0 && (t%10 >= 5 && t%10 <= 9 || n === 0 && t%100 >= 11 && t%100 <= 14)) ? "many" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e));
                return e = Math.floor(e), t === 0 || e === 1 ? "one" : e >= 2 && e <= 10 ? "few" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e
                )), n = parseInt(e.toString().replace(/^[^.]*\.?/, ""), 10);
                return e = Math.floor(e), e === 0 || e === 1 || t === 0 && n === 1 ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), n === 0 && t%100 === 1 ? "one" : n === 0 && t%100 === 2 ? "two" : n === 0 && (t%100 >= 3 && t%100 <= 4 || n !== 0) ? "few" : "other"
            }, function(e) {
                return e = Math.floor(e), e >= 0 && e <= 1 || e >= 11 && e <= 99 ? "one" : "other"
            }, function(e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return e = Math.floor(e), n === 0 && t%10 === 1 && t%100 !== 11 ? "one" : n === 0 && t%10 >= 2 && t%10 <= 4&&!(t%100 >= 12 && t%100 <= 14) ? "few" : n === 0 && (t%10 === 0 || n === 0 && (t%10 >= 5 && t%10 <= 9 || n === 0 && t%100 >= 11 && t%100 <= 14)) ? "many" : "other"
            }
            ];
            t.__addLocaleData({
                locale: "aa",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "af",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "agq",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ak",
                messageformat: {
                    pluralFunction: n[2]
                }
            }), t.__addLocaleData({
                locale: "am",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "ar",
                messageformat: {
                    pluralFunction: n[4]
                }
            }), t.__addLocaleData({
                locale: "as",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "asa",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ast",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "az",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "bas",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "be",
                messageformat: {
                    pluralFunction: n[5]
                }
            }), t.__addLocaleData({
                locale: "bem",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "bez",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "bg",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "bm",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "bn",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "bo",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "br",
                messageformat: {
                    pluralFunction: n[7]
                }
            }), t.__addLocaleData({
                locale: "brx",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "bs",
                messageformat: {
                    pluralFunction: n[8]
                }
            }), t.__addLocaleData({
                locale: "byn",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ca",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "cgg",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "chr",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "cs",
                messageformat: {
                    pluralFunction: n[10]
                }
            }), t.__addLocaleData({
                locale: "cy",
                messageformat: {
                    pluralFunction: n[11]
                }
            }), t.__addLocaleData({
                locale: "da",
                messageformat: {
                    pluralFunction: n[12]
                }
            }), t.__addLocaleData({
                locale: "dav",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "de",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "dje",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "dua",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "dyo",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "dz",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "ebu",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ee",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "el",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "en",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "eo",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "es",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "et",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "eu",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ewo",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "fa",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "ff",
                messageformat: {
                    pluralFunction: n[13]
                }
            }), t.__addLocaleData({
                locale: "fi",
                messageformat: {
                    pluralFunction: n[14]
                }
            }), t.__addLocaleData({
                locale: "fil",
                messageformat: {
                    pluralFunction: n[14]
                }
            }), t.__addLocaleData({
                locale: "fo",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "fr",
                messageformat: {
                    pluralFunction: n[13]
                }
            }), t.__addLocaleData({
                locale: "fur",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ga",
                messageformat: {
                    pluralFunction: n[15]
                }
            }), t.__addLocaleData({
                locale: "gd",
                messageformat: {
                    pluralFunction: n[16]
                }
            }), t.__addLocaleData({
                locale: "gl",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "gsw",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "gu",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "guz",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "gv",
                messageformat: {
                    pluralFunction: n[17]
                }
            }), t.__addLocaleData({
                locale: "ha",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "haw",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "he",
                messageformat: {
                    pluralFunction: n[18]
                }
            }), t.__addLocaleData({
                locale: "hi",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "hr",
                messageformat: {
                    pluralFunction: n[8]
                }
            }), t.__addLocaleData({
                locale: "hu",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "hy",
                messageformat: {
                    pluralFunction: n[13]
                }
            }), t.__addLocaleData({
                locale: "ia",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "id",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "ig",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "ii",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "is",
                messageformat: {
                    pluralFunction: n[19]
                }
            }), t.__addLocaleData({
                locale: "it",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "ja",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "jgo",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "jmc",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ka",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "kab",
                messageformat: {
                    pluralFunction: n[13]
                }
            }), t.__addLocaleData({
                locale: "kam",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale
                : "kde",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "kea",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "khq",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ki",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "kk",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "kkj",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "kl",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "kln",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "km",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "kn",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "ko",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "kok",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ks",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ksb",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ksf",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ksh",
                messageformat: {
                    pluralFunction: n[20]
                }
            }), t.__addLocaleData({
                locale: "kw",
                messageformat: {
                    pluralFunction: n[21]
                }
            }), t.__addLocaleData({
                locale: "ky",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "lag",
                messageformat: {
                    pluralFunction: n[22]
                }
            }), t.__addLocaleData({
                locale: "lg",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "lkt",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "ln",
                messageformat: {
                    pluralFunction: n[2]
                }
            }), t.__addLocaleData({
                locale: "lo",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "lt",
                messageformat: {
                    pluralFunction: n[23]
                }
            }), t.__addLocaleData({
                locale: "lu",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "luo",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "luy",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "lv",
                messageformat: {
                    pluralFunction: n[24]
                }
            }), t.__addLocaleData({
                locale: "mas",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "mer",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "mfe",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "mg",
                messageformat: {
                    pluralFunction: n[2]
                }
            }), t.__addLocaleData({
                locale: "mgh",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "mgo",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "mk",
                messageformat: {
                    pluralFunction: n[25]
                }
            }), t.__addLocaleData({
                locale: "ml",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "mn",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "mr",
                messageformat: {
                    pluralFunction: n[3]
                }
            }), t.__addLocaleData({
                locale: "ms",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "mt",
                messageformat: {
                    pluralFunction: n[26]
                }
            }), t.__addLocaleData({
                locale: "mua",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "my",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "naq",
                messageformat: {
                    pluralFunction: n[21]
                }
            }), t.__addLocaleData({
                locale: "nb",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "nd",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ne",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "nl",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "nmg",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "nn",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "nnh",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "nr",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "nso",
                messageformat: {
                    pluralFunction: n[2]
                }
            }), t.__addLocaleData({
                locale: "nus",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "nyn",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "om",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "or",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "os",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "pa",
                messageformat: {
                    pluralFunction: n[2]
                }
            }), t.__addLocaleData({
                locale: "pl",
                messageformat: {
                    pluralFunction: n[27]
                }
            }), t.__addLocaleData({
                locale: "ps",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "pt",
                messageformat: {
                    pluralFunction: n[28]
                }
            }), t.__addLocaleData({
                locale: "rm",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "rn",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ro",
                messageformat: {
                    pluralFunction: n[29]
                }
            }), t.__addLocaleData({
                locale: "rof",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ru",
                messageformat: {
                    pluralFunction: n[30]
                }
            }), t.__addLocaleData({
                locale: "rw",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "rwk",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "sah",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "saq",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "sbp",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "se",
                messageformat: {
                    pluralFunction: n[21]
                }
            }), t.__addLocaleData({
                locale: "seh",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ses",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "sg",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "shi",
                messageformat: {
                    pluralFunction: n[31]
                }
            }), t.__addLocaleData({
                locale: "si",
                messageformat: {
                    pluralFunction: n[32]
                }
            }), t.__addLocaleData({
                locale: "sk",
                messageformat: {
                    pluralFunction: n[10]
                }
            }), t.__addLocaleData({
                locale: "sl",
                messageformat: {
                    pluralFunction: n[33]
                }
            }), t.__addLocaleData({
                locale: "sn",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "so",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "sq",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "sr",
                messageformat: {
                    pluralFunction: n[8]
                }
            }), t.__addLocaleData({
                locale: "ss",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ssy",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "st",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "sv",
                messageformat
                : {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "sw",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "swc",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ta",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "te",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "teo",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "tg",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "th",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "ti",
                messageformat: {
                    pluralFunction: n[2]
                }
            }), t.__addLocaleData({
                locale: "tig",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "tn",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "to",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "tr",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "ts",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "twq",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "tzm",
                messageformat: {
                    pluralFunction: n[34]
                }
            }), t.__addLocaleData({
                locale: "uk",
                messageformat: {
                    pluralFunction: n[35]
                }
            }), t.__addLocaleData({
                locale: "ur",
                messageformat: {
                    pluralFunction: n[9]
                }
            }), t.__addLocaleData({
                locale: "uz",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "vai",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "ve",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "vi",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "vo",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "vun",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "wae",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "wal",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "xh",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "xog",
                messageformat: {
                    pluralFunction: n[1]
                }
            }), t.__addLocaleData({
                locale: "yav",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "yo",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "zgh",
                messageformat: {
                    pluralFunction: n[0]
                }
            }), t.__addLocaleData({
                locale: "zh",
                messageformat: {
                    pluralFunction: n[6]
                }
            }), t.__addLocaleData({
                locale: "zu",
                messageformat: {
                    pluralFunction: n[3]
                }
            })
        }(typeof global != "undefined" ? global : this)
    }).apply(typeof e.config.global != "undefined" ? e.config.global : this)
}, "@VERSION@", {
    es: !0
});
YUI.add("dust-helper-intl", function(e, t) {
    (function() {
        (function(e, t) {
            var n = t(e.Intl, e.Intl && e.Intl.MessageFormat || e.IntlMessageFormat);
            typeof module == "object" && module.exports && (module.exports = n), typeof define == "function" && define.amd && define(n), e && (e.DustHelperIntl = n)
        })(typeof global != "undefined" ? global : this, function(e, t) {
            function r(e, t) {
                var n;
                for (n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            function i(e, t, n) {
                var r = e;
                return typeof e == "function" && (e.isFunction===!0 ? r = e() : (r = "", t.tap(function(e) {
                    return r += e, ""
                }).render(e, n).untap(), r === "" && (r=!1))), r
            }
            function s(e, t) {
                var n, r, i = t.length - 1, s, o;
                for (n = e.stack; n; n = n.tail) {
                    r = n.head;
                    for (s = 0; s < i; s += 1) {
                        o = t[s];
                        if (!r.hasOwnProperty(o))
                            break;
                        r = r[o]
                    }
                    if (s === i && r.hasOwnProperty(t[i]))
                        return r[t[i]]
                }
                return undefined
            }
            function o(e, t, r) {
                return t.locales ? i(t.locales, e, r) : s(r, [n, "locales"]) || this.locale
            }
            function u(e, t, o, u) {
                var a, f, l = {}, c;
                o.formatName ? (c = i(o.formatName, t, u), delete o.formatName, a = s(u, [n, "formats", e, c]), a = r({}, a), r(a, o)) : a = o;
                for (f in a)
                    a.hasOwnProperty(f) && (l[f] = i(a[f], t, u));
                return l
            }
            function a(e, r, u, a) {
                var f = {}, l, c, h;
                a = a || {};
                if (a.hasOwnProperty("_msg"))
                    c = a._msg;
                else {
                    if (!a._key)
                        throw new ReferenceError("@intlMessage needs either a `_msg` or `_key` parameter");
                    c = s(r, [n, "messages", i(a._key, e, r)])
                }
                return "object" == typeof c && "function" == typeof c.format ? (e.write(c.format(a)), e) : (f = s(r, [n, "formats"]), l = o(e, a, r), h = new t(c, l, f), e.write(h.format(a)), e)
            }
            function f(t, n, r, s) {
                var a, f, l, c;
                s = s || {};
                if (!s.hasOwnProperty("val"))
                    throw new ReferenceError("@intlNumber needs a `val` parameter");
                return l = i(s.val, t, n), delete s.val, a = u("number", t, s, n), f = o(t, s, n), c = new e.NumberFormat(f, a), t.write(c.format(l)), t
            }
            function l(t, n, r, s) {
                var a, f, l, c;
                s = s || {};
                if (!s.hasOwnProperty("val"))
                    throw new ReferenceError("@intlDate needs a `val` parameter");
                return l = i(s.val, t, n), delete s.val, l = (new Date(l)).getTime(), a = u("date", t, s, n), f = o(t, s, n), c = new e.DateTimeFormat(f, a), t.write(c.format(l)), t
            }
            function c(e, t, r, i) {
                var s = {};
                return r.block ? (s[n] = i || {}, e.render(r.block, t.push(s))) : e
            }
            if (!e)
                throw new ReferenceError("Intl must be provided.");
            if (!t)
                throw new ReferenceError("IntlMessageFormat must be provided.");
            var n = "intl";
            return {
                helpers: {
                    intlMessage: a,
                    intlNumber: f,
                    intlDate: l,
                    intl: c
                },
                register: function(e) {
                    e.helpers.intlMessage = a, e.helpers.intlNumber = f, e.helpers.intlDate = l, e.helpers.intl = c
                }
            }
        })
    }).apply(typeof e.config.global != "undefined" ? e.config.global : this)
}, "@VERSION@", {
    requires: ["intl-messageformat"],
    es: !0
});
YUI.add("intl-helper", function(e, t) {
    (function() {
        "use strict";
        if (typeof exports != "undefined") {
            global.Intl = global.Intl || require("intl");
            var e = require("intl-messageformat"), t = require("dust-helper-intl");
            module.exports = function(e) {
                t.register(e)
            }
        } else 
            window.DustHelperIntl.register(dust)
    })()
}, "@VERSION@", {
    requires: ["dust-helper-intl"]
});
YUI.add("ape-af-lang-strings_en-au", function(e, t) {
    e.Intl.add("ape-af/strings", "en-AU", {
        ERR: "Doh! Something went wrong. Please try again.",
        ERR_LOAD: "Oops, something went wrong. Please try again.",
        ERR_SAVE_SETTINGS: "Oops, we couldn't save your preferences. Please try again.",
        ERR_SAVE: "Oops, something got stuck in our tubes. Please try again.",
        ERR_AUTH: "Oops, you need to log in again."
    })
}, "@VERSION@", {
    requires: ["intl"]
});
YUI.add("ape-applet-templates-reload", function(e, t) {
    dust.cache = dust.cache || {}, dust.cache[t] = function() {
        return function() {
            function e(e, t) {
                return e.write('<div role="alertdialog" tabindex="0" class="js-msg Bgc-w" style="border:1px solid #000;border-radius:3px" aria-labelledby="desc-').reference(t.get("guid"), t, "h").write('">').write("\n    ").write('<p id="desc-').reference(t.get("guid"), t, "h").write('" class="Bfc Reset Mt-2 Ta-c">').reference(t.get("content"), t, "h", ["s"]).write("</p>").write("\n    ").write('<button class="AlertReloadBtn Icon ButtonNaked js-applet-action D-b Mx-a My-10 Fz-2xl" data-applet-action="loadapplet">&#xe021;<b class="Hidden">Reload</b></button>').write("\n").write("</div>").write("\n")
            }
            return dust.register("ape-applet-templates-reload", e), e
        }()
    }(), dust.cache["ape-applet:reload.dust"] = dust.cache["ape-applet:reload"] = dust.cache[t], e.Template._cache = e.Template._cache || {}, e.Template._cache["ape-applet/templates/reload"] = function(e, n) {
        e = e || {}, dust.render(t, e, n)
    }
}, "@VERSION@", {
    requires: ["template-base", "dust"]
});
YUI.add("af-content", function(e, t) {
    "use strict";
    var n = e.Lang, r = e.Af.Utils, i = e.Af.Config, s = e.Af.Dom, o = e.Mjata.REST.HTTP, u = n.isFunction, a = n.isNumber, f = n.isObject, l = n.isString, c = r.objectGetValue, h = "replace_content", p = "replace", d = ".js-applet", v = "appletsinit";
    e.namespace("Af").Content = {
        simple: function(t, n, i) {
            return t = e.one(t), i = i || r.noop, !t ||!n ||!n.html ? (i("invalid param"), this) : (s.setHTML(t, n.html), n.js && s.jsAttach(n.js), i(null), this)
        },
        applet: function(t, n, i, s) {
            s = s || r.noop;
            if (!t ||!n ||!i)
                return s("invalid param");
            n = e.one(n);
            if (!n)
                return s("invalid node");
            var o;
            l(t) ? (o = c(e, t), o ? this._initApplet(o, i, {
                node: n,
                where: h
            }, s) : e.onceAfter(v, function(e) {
                this._initApplet(e.applets, i, {
                    node: n,
                    where: h
                }, s)
            }, this)) : f(t) ? this._initApplet(t, i, {
                node: n,
                where: h
            }, s) : e.onceAfter(v, function(e) {
                this._initApplet(e.applets, i, {
                    node: n,
                    where: h
                }, s)
            }, this)
        },
        remoteApplet: function(t, n, r) {
            n = n || {};
            var s = i.get("context") || {}, o = i.get("td") || {}, u = e.merge(n.params, {
                initApplet: 0,
                initStencil: 0,
                m_id: n.type,
                m_mode: "json"
            }), f = n.placement && n.placement.node, l = n.placement && n.placement.where, c, h = {}, d, v = this;
            if (!n.type)
                return r && r("missing options.type");
            f = e.one(f);
            if (!f)
                return r && r("missing options.placement.node");
            a(l) || (l = l || p), window.location.protocol === "https:" ? u.ssl = 1 : u.ssl = 0, !u.site && s.site && (u.site = s.site), !u.lang && s.lang && (u.lang = s.lang), !u.region && s.region && (u.region = s.region), !u.xhr_path && o.api && (u.xhr_path = o.api), n.guid && (u.instance_id = n.guid), c = n.uri || o.remote || "/_remote", a(n.timeout) && n.timeout > 0 && (h.timeout = n.timeout), d = n.method === "post" ? "_post" : "_get", v[d](t, c, u, f, l, h, r)
        },
        _get: function(t, n, r, i, s, u, a) {
            var f = this, l;
            n += "?" + e.QueryString.stringify(r), o.get(n, {}, u || {}, function(e, n) {
                f._parseContent(t, l, i, s, a, e, n)
            })
        },
        _post: function(e, t, n, r, i, s, u) {
            var a = this, f;
            o.post(t, {}, n, s || {}, function(t, n) {
                a._parseContent(e, f, r, i, u, t, n)
            })
        },
        _parseContent: function(t, n, r, i, s, o, u) {
            var a = this;
            if (o)
                return s && s(o);
            if (!u ||!u.responseText)
                return s && s("empty content");
            try {
                n = e.JSON.parse(u.responseText), a._initApplet(t, n, {
                    node: r,
                    where: i
                }, s)
            } catch (f) {
                return s && s("invalid json content:" + f.message)
            }
        },
        _initApplet: function(t, n, r, i) {
            if (!u(t.initApplet))
                return i("missing initApplet()");
            var s, o;
            r = e.merge({
                where: "replace"
            }, r), n && (r.where === h && (o = e.Node.create(n.html), o = o.one("div.js-applet") || o, n.html = o.getHTML(), r.where = "replace"), s = this._insert(n, r));
            if (!s)
                return i("missing applet node");
            e.use("stencil", function(e) {
                var t = e.Stencil;
                t && t.initAll && t.initAll(s)
            }), e.later(5, null, function() {
                t.initApplet(s, !0), i(null)
            })
        },
        _insert: function(t, n) {
            var r, i;
            n.node.insert(t.html, n.where);
            switch (n.where) {
            case"before":
                r = n.node.previous(d);
                break;
            case"after":
                r = n.node.next(d);
                break;
            case"replace":
                r = n.node.one(d) || n.node;
                break;
            default:
                e.Lang.isNumber(n.where) && (r = n.node.get("children").item(n.where))
            }
            return r && (i = t.js || t.assets, i && s.jsAttach(i)), r
        },
        rmp: function(t) {
            e.use("media-rmp", function(e) {
                e.Media.RMP.load(t)
            })
        }
    }
}, "@VERSION@", {
    requires: ["af-config", "af-dom", "af-utils", "json-parse", "mjata-rest-http", "node-pluginhost", "querystring-stringify"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("router", function(e, t) {
    function c() {
        c.superclass.constructor.apply(this, arguments)
    }
    var n = e.HistoryHash, r = e.QueryString, i = e.Array, s = e.Lang, o = e.Object, u = e.config.win, a = [], f = [], l = "ready";
    e.Router = e.extend(c, e.Base, {
        _regexPathParam: /([:*])([\w\-]+)?/g,
        _regexUrlQuery: /\?([^#]*).*$/,
        _regexUrlOrigin: /^(?:[^\/#?:]+:\/\/|\/\/)[^\/]*/,
        initializer: function(t) {
            var n = this;
            n._html5 = n.get("html5"), n._params = {}, n._routes = [], n._url = n._getURL(), n._setRoutes(t && t.routes ? t.routes : n.get("routes")), n._html5 ? (n._history = new e.HistoryHTML5({
                force: !0
            }), n._historyEvents = e.after("history:change", n._afterHistoryChange, n)) : n._historyEvents = e.on("hashchange", n._afterHistoryChange, u, n), n.publish(l, {
                defaultFn: n._defReadyFn,
                fireOnce: !0,
                preventable: !1
            }), n.once("initializedChange", function() {
                e.once("load", function() {
                    setTimeout(function() {
                        n.fire(l, {
                            dispatched: !!n._dispatched
                        })
                    }, 20)
                })
            }), a.push(this)
        },
        destructor: function() {
            var e = i.indexOf(a, this);
            e>-1 && a.splice(e, 1), this._historyEvents && this._historyEvents.detach()
        },
        dispatch: function() {
            return this.once(l, function() {
                this._ready=!0, this.upgrade() || this._dispatch(this._getPath(), this._getURL())
            }), this
        },
        getPath: function() {
            return this._getPath()
        },
        hasRoute: function(e) {
            var t;
            return this._hasSameOrigin(e) ? (this._html5 || (e = this._upgradeURL(e)), t = this.removeQuery(this.removeRoot(e)), !!this.match(t).length) : !1
        },
        match: function(e) {
            return i.filter(this._routes, function(t) {
                return e.search(t.regex)>-1
            })
        },
        param: function(e, t) {
            return this._params[e] = t, this
        },
        removeRoot: function(e) {
            var t = this.get("root");
            return e = e.replace(this._regexUrlOrigin, ""), t && e.indexOf(t) === 0 && (e = e.substring(t.length)), e.charAt(0) === "/" ? e : "/" + e
        },
        removeQuery: function(e) {
            return e.replace(/\?.*$/, "")
        },
        replace: function(e) {
            return this._queue(e, !0)
        },
        route: function(e, t) {
            t = i.flatten(i(arguments, 1, !0));
            var n = [];
            return this._routes.push({
                callbacks: t,
                keys: n,
                path: e,
                regex: this._getRegex(e, n),
                callback: t[0]
            }), this
        },
        save: function(e) {
            return this._queue(e)
        },
        upgrade: function() {
            if (!this._html5)
                return !1;
            var e = this._getHashPath();
            return e ? (this.once(l, function() {
                this.replace(e)
            }), !0) : !1
        },
        _decode: function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        },
        _dequeue: function() {
            var t = this, n;
            return YUI.Env.windowLoaded ? (n = f.shift(), n ? n() : this) : (e.once("load", function() {
                t._dequeue()
            }), this)
        },
        _dispatch: function(t, n, r) {
            var o = this, u = o._decode, a = o.match(t), f = [], l, c, h, p;
            return o._dispatching = o._dispatched=!0, !a ||!a.length ? (o._dispatching=!1, o) : (h = o._getRequest(t, n, r), p = o._getResponse(h), h.next = function(n) {
                var r, d, v;
                if (n)
                    n === "route" ? (f = [], h.next()) : e.error(n);
                else if (r = f.shift())typeof r == "string" && (d = r, r = o[d], r || e.error("Router: Callback not found: " + d, null, "router")), h.pendingCallbacks = f.length, r.call(o, h, p, h.next);
                else if (v = a.shift())
                    f = v.callbacks.concat(), l = i.map(v.regex.exec(t) || [], function(e) {
                        return e && u(e) || ""
                    }), c=!0, l.length === v.keys.length + 1 ? (l = l.slice(1), h.params = i.hash(v.keys, l), c = i.every(v.keys, function(e, t) {
                        var n = o._params[e], r = l[t];
                        return n && r && typeof r == "string" ? (r = n instanceof RegExp ? n.exec(r) : n.call(o, r, e), r!==!1 && s.isValue(r) ? (h.params[e] = r, !0) : !1) : !0
                    })) : h.params = l.concat(), h.pendingRoutes = a.length, c ? h.next() : h.next("route")
            }, h.next(), o._dispatching=!1, o._dequeue())
        },
        _getHashPath: function(e) {
            return e || (e = n.getHash()), e && e.charAt(0) === "/" ? this._joinURL(e) : ""
        },
        _getOrigin: function() {
            var t = e.getLocation();
            return t.origin || t.protocol + "//" + t.host
        },
        _getParams: function() {
            return e.merge(this._params)
        },
        _getPath: function() {
            var t=!this._html5 && this._getHashPath() || e.getLocation().pathname;
            return this.removeQuery(this.removeRoot(t))
        },
        _getPathRoot: function() {
            var t = "/", n = e.getLocation().pathname, r;
            return n.charAt(n.length - 1) === t ? n : (r = n.split(t), r.pop(), r.join(t) + t)
        },
        _getQuery: function() {
            var t = e.getLocation(), r, i;
            return this._html5 ? t.search.substring(1) : (r = n.getHash(), i = r.match(this._regexUrlQuery), r && i ? i[1] : t.search.substring(1))
        },
        _getRegex: function(e, t) {
            return e instanceof RegExp ? e : e === "*" ? /.*/ : (e = e.replace(this._regexPathParam, function(e, n, r) {
                return r ? (t.push(r), n === "*" ? "(.*?)" : "([^/#?]*)") : n === "*" ? ".*" : e
            }), new RegExp("^" + e + "$"))
        },
        _getRequest: function(e, t, n) {
            return {
                path: e,
                query: this._parseQuery(this._getQuery()),
                url: t,
                src: n
            }
        },
        _getResponse: function(e) {
            var t = function() {
                return e.next.apply(this, arguments)
            };
            return t.req = e, t
        },
        _getRoutes: function() {
            return this._routes.concat()
        },
        _getURL: function() {
            var t = e.getLocation().toString();
            return this._html5 || (t = this._upgradeURL(t)), t
        },
        _hasSameOrigin: function(t) {
            var n = (t && t.match(this._regexUrlOrigin) || [])[0];
            return n && n.indexOf("//") === 0 && (n = e.getLocation().protocol + n), !n || n === this._getOrigin()
        },
        _joinURL: function(e) {
            var t = this.get("root");
            return e = this.removeRoot(e), e.charAt(0) === "/" && (e = e.substring(1)), t && t.charAt(t.length - 1) === "/" ? t + e : t + "/" + e
        },
        _normalizePath: function(e) {
            var t = "..", n = "/", r, i, s, o, u, a;
            if (!e || e === n)
                return n;
            o = e.split(n), a = [];
            for (r = 0, i = o.length; r < i; ++r)
                u = o[r], u === t ? a.pop() : u && a.push(u);
            return s = n + a.join(n), s !== n && e.charAt(e.length - 1) === n && (s += n), s
        },
        _parseQuery: r && r.parse ? r.parse: function(e) {
            var t = this._decode, n = e.split("&"), r = 0, i = n.length, s = {}, o;
            for (; r < i; ++r)
                o = n[r].split("="), o[0] && (s[t(o[0])] = t(o[1] || ""));
            return s
        },
        _queue: function() {
            var t = arguments, n = this;
            return f.push(function() {
                return n._html5 ? e.UA.ios && e.UA.ios < 5 ? n._save.apply(n, t) : setTimeout(function() {
                    n._save.apply(n, t)
                }, 1) : (n._dispatching=!0, n._save.apply(n, t)), n
            }), this._dispatching ? this : this._dequeue()
        },
        _resolvePath: function(t) {
            return t ? (t.charAt(0) !== "/" && (t = this._getPathRoot() + t), this._normalizePath(t)) : e.getLocation().pathname
        },
        _resolveURL: function(t) {
            var n = t && t.match(this._regexURL), r, i, s, o, u;
            return n ? (r = n[1], i = n[2], s = n[3], o = n[4], r ? (r.indexOf("//") === 0 && (r = e.getLocation().protocol + r), r + (i || "/") + (s || "") + (o || "")) : (u = this._getOrigin() + this._resolvePath(i), i || s ? u + (s || "") + (o || "") : (s = this._getQuery(), u + (s ? "?" + s : "") + (o || "")))) : e.getLocation().toString()
        },
        _save: function(t, r) {
            var i = typeof t == "string", s, o, u;
            if (i&&!this._hasSameOrigin(t))
                return e.error("Security error: The new URL must be of the same origin as the current URL."), this;
            i && (t = this
            ._joinURL(t)), this._ready=!0;
            if (this._html5)
                this._history[r ? "replace": "add"](null, {
                    url: t
                });
            else {
                s = e.getLocation().pathname, o = this.get("root"), u = n.getHash(), i || (t = u);
                if (o === s || o === this._getPathRoot())
                    t = this.removeRoot(t);
                t === u ? e.Router.dispatch() : n[r ? "replaceHash": "setHash"](t)
            }
            return this
        },
        _setParams: function(t) {
            return this._params = {}, o.each(t, function(e, t) {
                this.param(t, e)
            }, this), e.merge(this._params)
        },
        _setRoutes: function(e) {
            return this._routes = [], i.each(e, function(e) {
                var t = e.callbacks || e.callback;
                this.route(e.path, t)
            }, this), this._routes.concat()
        },
        _upgradeURL: function(t) {
            if (!this._hasSameOrigin(t))
                return t;
            var n = (t.match(/#(.*)$/) || [])[1] || "", r = e.HistoryHash.hashPrefix, i;
            r && n.indexOf(r) === 0 && (n = n.replace(r, ""));
            if (n) {
                i = this._getHashPath(n);
                if (i)
                    return this._resolveURL(i)
            }
            return t
        },
        _afterHistoryChange: function(e) {
            var t = this, n = e.src, r = t._url, i = t._getURL();
            t._url = i;
            if (n === "popstate" && (!t._ready || r.replace(/#.*$/, "") === i.replace(/#.*$/, "")))
                return;
            t._dispatch(t._getPath(), i, n)
        },
        _defReadyFn: function(e) {
            this._ready=!0
        }
    }, {
        NAME: "router",
        ATTRS: {
            html5: {
                valueFn: function() {
                    return e.Router.html5
                },
                writeOnce: "initOnly"
            },
            params: {
                value: {},
                getter: "_getParams",
                setter: "_setParams"
            },
            root: {
                value: ""
            },
            routes: {
                value: [],
                getter: "_getRoutes",
                setter: "_setRoutes"
            }
        },
        html5: e.HistoryBase.html5 && (!e.UA.android || e.UA.android >= 3),
        _instances: a,
        dispatch: function() {
            var e, t, n;
            for (e = 0, t = a.length; e < t; e += 1)
                n = a[e], n && n._dispatch(n._getPath(), n._getURL())
        }
    }), e.Controller = e.Router
}, "3.12.0", {
    optional: ["querystring-parse"],
    requires: ["array-extras", "base-build", "history"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("pjax-base", function(e, t) {
    function s() {}
    var n = e.config.win, r = e.ClassNameManager.getClassName("pjax"), i = "navigate";
    s.prototype = {
        _regexURL: /^((?:[^\/#?:]+:\/\/|\/\/)[^\/]*)?([^?#]*)(\?[^#]*)?(#.*)?$/,
        initializer: function() {
            this.publish(i, {
                defaultFn: this._defNavigateFn
            }), this.get("html5") && this._pjaxBindUI()
        },
        destructor: function() {
            this._pjaxEvents && this._pjaxEvents.detach()
        },
        navigate: function(t, n) {
            return t = this._resolveURL(t), this._navigate(t, n)?!0 : (this._hasSameOrigin(t) || e.error("Security error: The new URL must be of the same origin as the current URL."), !1)
        },
        _isLinkSameOrigin: function(t) {
            var n = e.getLocation(), r = n.protocol, i = n.hostname, s = parseInt(n.port, 10) || null, o;
            return t.get("protocol") !== r || t.get("hostname") !== i?!1 : (o = parseInt(t.get("port"), 10) || null, r === "http:" ? (s || (s = 80), o || (o = 80)) : r === "https:" && (s || (s = 443), o || (o = 443)), o === s)
        },
        _navigate: function(t, r) {
            t = this._upgradeURL(t);
            if (!this.hasRoute(t))
                return !1;
            r = e.merge(r, {
                url: t
            });
            var s = this._getURL(), o, u;
            u = t.replace(/(#.*)$/, function(e, t, n) {
                return o = t, e.substring(n)
            });
            if (o && u === s.replace(/#.*$/, "")) {
                if (!this.get("navigateOnHash"))
                    return !1;
                r.hash = o
            }
            return "replace"in r || (r.replace = t === s), this.get("html5") || r.force ? this.fire(i, r) : n && (r.replace ? n.location.replace(t) : n.location = t), !0
        },
        _pjaxBindUI: function() {
            this._pjaxEvents || (this._pjaxEvents = e.one("body").delegate("click", this._onLinkClick, this.get("linkSelector"), this))
        },
        _defNavigateFn: function(e) {
            this[e.replace ? "replace": "save"](e.url), n && this.get("scrollToTop") && setTimeout(function() {
                n.scroll(0, 0)
            }, 1)
        },
        _onLinkClick: function(e) {
            var t, n, r;
            if (e.button !== 1 || e.ctrlKey || e.metaKey)
                return;
            t = e.currentTarget;
            if (t.get("tagName").toUpperCase() !== "A")
                return;
            if (!this._isLinkSameOrigin(t))
                return;
            n = t.get("href"), n && (r = this._navigate(n, {
                originEvent: e
            }), r && e.preventDefault())
        }
    }, s.ATTRS = {
        linkSelector: {
            value: "a." + r,
            writeOnce: "initOnly"
        },
        navigateOnHash: {
            value: !1
        },
        scrollToTop: {
            value: !0
        }
    }, e.PjaxBase = s
}, "3.12.0", {
    requires: ["classnamemanager", "node-event-delegate", "router"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("app-base", function(e, t) {
    var n = e.Lang, r = e.Object, i = e.PjaxBase, s = e.Router, o = e.View, u = e.ClassNameManager.getClassName, a = e.config.win, f;
    f = e.Base.create("app", e.Base, [o, s, i], {
        views: {},
        initializer: function(t) {
            function i(t, r) {
                n[r] = e.merge(n[r], t)
            }
            t || (t = {});
            var n = {};
            r.each(this.views, i), r.each(t.views, i), this.views = n, this._viewInfoMap = {}, this.after("activeViewChange", e.bind("_afterActiveViewChange", this)), this.get("serverRouting") || this._pjaxBindUI()
        },
        createView: function(t, i) {
            var s = this.getViewInfo(t), u = s && s.type || o, a, f;
            return a = n.isString(u) ? r.getValue(e, u.split(".")) : u, f = new a(i), this._viewInfoMap[e.stamp(f, !0)] = s, f
        },
        getViewInfo: function(t) {
            return n.isString(t) ? this.views[t] : t && this._viewInfoMap[e.stamp(t, !0)]
        },
        render: function() {
            var t = e.App.CLASS_NAMES, n = this.get("container"), r = this.get("viewContainer"), i = this.get("activeView"), s = i && i.get("container"), o = n.compareTo(r);
            return n.addClass(t.app), r.addClass(t.views), i&&!r.contains(s) && r.appendChild(s), !n.contains(r)&&!o && n.appendChild(r), this
        },
        showView: function(t, r, i, s) {
            var o, u;
            return i || (i = {}), s ? i = e.merge(i, {
                callback: s
            }) : n.isFunction(i) && (i = {
                callback: i
            }), n.isString(t) && (o = this.getViewInfo(t), o && o.preserve && o.instance ? (t = o.instance, this._viewInfoMap[e.stamp(t, !0)] = o) : (t = this.createView(t, r), u=!0)), i.update&&!u && t.setAttrs(r), "render"in i ? i.render && t.render() : u && t.render(), this._set("activeView", t, {
                options: i
            })
        },
        _attachView: function(e, t) {
            if (!e)
                return;
            var n = this.getViewInfo(e), r = this.get("viewContainer");
            e.addTarget(this), n && (n.instance = e), r[t ? "prepend": "append"](e.get("container"))
        },
        _destroyContainer: function() {
            var t = e.App.CLASS_NAMES, n = this.get("container"), r = this.get("viewContainer"), i = n.compareTo(r);
            if (e.one("body").compareTo(n)) {
                this.detachEvents(), n.removeClass(t.app), i ? n.removeClass(t.views) : r.remove(!0);
                return 
            }
            r.remove(!0), i || n.remove(!0)
        },
        _detachView: function(t) {
            if (!t)
                return;
            var n = this.getViewInfo(t) || {};
            n.preserve ? t.remove() : (t.destroy({
                remove: !0
            }), delete this._viewInfoMap[e.stamp(t, !0)], t === n.instance && delete n.instance), t.removeTarget(this)
        },
        _getViewContainer: function(e) {
            return !e&&!this._viewContainer && (e = this._viewContainer = this.create(), this._set("viewContainer", e)), e
        },
        _initHtml5: function() {
            return this.get("serverRouting")===!1?!1 : s.html5
        },
        _isChildView: function(e, t) {
            var n = this.getViewInfo(e), r = this.getViewInfo(t);
            return n && r ? this.getViewInfo(n.parent) === r : !1
        },
        _isParentView: function(e, t) {
            var n = this.getViewInfo(e), r = this.getViewInfo(t);
            return n && r ? this.getViewInfo(r.parent) === n : !1
        },
        _navigate: function(t, n) {
            return this.get("serverRouting") || (n = e.merge({
                force: !0
            }, n)), i.prototype._navigate.call(this, t, n)
        },
        _save: function(t, n) {
            var r;
            return this.get("serverRouting")&&!this.get("html5") ? this._hasSameOrigin(t) ? (a && (r = this._joinURL(t || ""), n ? a.location.replace(r) : a.location = r), this) : (e.error("Security error: The new URL must be of the same origin as the current URL."), this) : s.prototype._save.apply(this, arguments)
        },
        _uiSetActiveView: function(e, t, n) {
            n || (n = {});
            var r = n.callback, i = this._isChildView(e, t), s=!i && this._isParentView(e, t), o=!!n.prepend || s;
            if (e === t)
                return r && r.call(this, e);
            this._attachView(e, o), this._detachView(t), r && r.call(this, e)
        },
        _afterActiveViewChange: function(e) {
            this._uiSetActiveView(e.newVal, e.prevVal, e.options)
        }
    }, {
        ATTRS: {
            activeView: {
                value: null,
                readOnly: !0
            },
            container: {
                valueFn: function() {
                    return e.one("body")
                }
            },
            html5: {
                valueFn: "_initHtml5"
            },
            linkSelector: {
                value: "a"
            },
            serverRouting: {
                valueFn: function() {
                    return e.App.serverRouting
                },
                writeOnce: "initOnly"
            },
            viewContainer: {
                getter: "_getViewContainer",
                setter: e.one,
                writeOnce: !0
            }
        },
        _NON_ATTRS_CFG: ["views"]
    }), e.namespace("App").Base = f, e.App = e.mix(e.Base.create("app", f, []), e.App, !0), e.App.CLASS_NAMES = {
        app: u("app"),
        views: u("app", "views")
    }
}, "3.12.0", {
    requires: ["classnamemanager", "pjax-base", "router", "view"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("pjax-content", function(e, t) {
    function n() {}
    n.prototype = {
        getContent: function(t) {
            var n = {}, r = this.get("contentSelector"), i = e.Node.create(t || ""), s = this.get("titleSelector"), o;
            return r && i ? n.node = i.all(r).toFrag() : n.node = i, s && i && (o = i.one(s), o && (n.title = o.get("text"))), n
        },
        loadContent: function(t, n, r) {
            var i = t.url;
            this._request && this._request.abort(), this.get("addPjaxParam") && (i = i.replace(/([^#]*)(#.*)?$/, function(e, t, n) {
                return t += (t.indexOf("?")>-1 ? "&" : "?") + "pjax=1", t + (n || "")
            })), this._request = e.io(i, {
                arguments: {
                    route: {
                        req: t,
                        res: n,
                        next: r
                    },
                    url: i
                },
                context: this,
                headers: {
                    "X-PJAX": "true"
                },
                timeout: this.get("timeout"),
                on: {
                    complete: this._onPjaxIOComplete,
                    end: this._onPjaxIOEnd
                }
            })
        },
        _onPjaxIOComplete: function(e, t, n) {
            var r = this.getContent(t.responseText), i = n.route, s = i.req, o = i.res;
            s.ioURL = n.url, o.content = r, o.ioResponse = t, i.next()
        },
        _onPjaxIOEnd: function() {
            this._request = null
        }
    }, n.ATTRS = {
        addPjaxParam: {
            value: !0
        },
        contentSelector: {
            value: null
        },
        titleSelector: {
            value: "title"
        },
        timeout: {
            value: 3e4
        }
    }, e.PjaxContent = n
}, "3.12.0", {
    requires: ["io-base", "node-base", "router"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("app-content", function(e, t) {
    function r() {
        n.apply(this, arguments)
    }
    var n = e.PjaxContent;
    r.route = ["loadContent", "_contentRoute"], r.prototype = {
        showContent: function(t, n, r) {
            t = e.one(t), typeof n == "function" && (n = {
                callback: n
            }, r = null), n = e.merge({
                render: !1
            }, n);
            var i = n.view || "", s = typeof i == "string" ? i: i.name, o = typeof i != "string" ? i.config: {}, u = this.getViewInfo(s), a, f, l, c;
            return delete n.view, t && t.isFragment() && t.get("childNodes").size() === 1 && (t = t.get("firstChild")), t && t.get("nodeType") === 1 ? a = t : (l = u && u.type || e.View, c = typeof l == "string" ? e.Object.getValue(e, l.split(".")) : l, f = c.prototype.containerTemplate, a = e.Node.create(f), a.append(t)), o = e.merge(o, {
                container: a
            }), this.showView(s, o, n, r)
        },
        _contentRoute: function(t, n, r) {
            var i = n.content, s = e.config.doc, o;
            if (!i ||!i.node)
                return r();
            i.title && s && (o = this.onceAfter("activeViewChange", function() {
                s.title = i.title
            })), this.showContent(i.node), o && o.detach(), r()
        }
    }, r.ATTRS = e.Attribute.protectAttrs(n.ATTRS), e.mix(r, n, !1, null, 1), e.App.Content = r, e.Base.mix(e.App, [r])
}, "3.12.0", {
    requires: ["app-base", "pjax-content"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("app-transitions", function(e, t) {
    function n() {}
    n.ATTRS = {
        transitions: {
            setter: "_setTransitions",
            value: !1
        }
    }, n.FX = {
        fade: {
            viewIn: "app:fadeIn",
            viewOut: "app:fadeOut"
        },
        slideLeft: {
            viewIn: "app:slideLeft",
            viewOut: "app:slideLeft"
        },
        slideRight: {
            viewIn: "app:slideRight",
            viewOut: "app:slideRight"
        }
    }, n.prototype = {
        transitions: {
            navigate: "fade",
            toChild: "slideLeft",
            toParent: "slideRight"
        },
        _setTransitions: function(t) {
            var n = this.transitions;
            return t && t===!0 ? e.merge(n) : t
        }
    }, e.App.Transitions = n, e.Base.mix(e.App, [n]), e.mix(e.App.CLASS_NAMES, {
        transitioning: e.ClassNameManager.getClassName("app", "transitioning")
    })
}, "3.12.0", {
    requires: ["app-base"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("app-transitions-native", function(e, t) {
    function r() {}
    var n = e.App.Transitions;
    r.prototype = {
        initializer: function() {
            this._transitioning=!1, this._viewTransitionQueue = [], e.Do.before(this._queueActiveView, this, "_uiSetActiveView")
        },
        _dequeueActiveView: function() {
            var t = this._viewTransitionQueue, n = t.shift(), r;
            n && (t.length && (r = e.merge(n[2], {
                transition: !1
            }), n.splice(2, 1, r)), this._uiTransitionActiveView.apply(this, n))
        },
        _getFx: function(e, t, r) {
            var i = n.FX, s = this.get("transitions");
            return r===!1 ||!s ? null : r ? i[r] : this._isChildView(e, t) ? i[s.toChild] : this._isParentView(e, t) ? i[s.toParent] : i[s.navigate]
        },
        _queueActiveView: function() {
            var t = e.Array(arguments, 0, !0);
            return this._viewTransitionQueue.push(t), this._transitioning || this._dequeueActiveView(), new e.Do.Prevent
        },
        _uiTransitionActiveView: function(t, n, r) {
            function p() {
                return this._detachView(n), s.removeClass(o), i && i.call(this, t), this._transitioning=!1, this._dequeueActiveView()
            }
            r || (r = {});
            var i = r.callback, s, o, u, a, f, l, c, h;
            if (t === n)
                return i && i.call(this, t), this._transitioning=!1, this._dequeueActiveView();
            l = this._getFx(t, n, r.transition), u = this._isChildView(t, n), a=!u && this._isParentView(t, n), f=!!r.prepend || a;
            if (!l)
                return this._attachView(t, f), this._detachView(n), i && i.call(this, t), this._transitioning=!1, this._dequeueActiveView();
            this._transitioning=!0, s = this.get("container"), o = e.App.CLASS_NAMES.transitioning, s.addClass(o), this._attachView(t, f), h = new e.Parallel({
                context: this
            }), c = {
                crossView: !!n&&!!t,
                prepended: f
            }, t && l.viewIn && t.get("container").transition(l.viewIn, c, h.add()), n && l.viewOut && n.get("container").transition(l.viewOut, c, h.add()), h.done(p)
        }
    }, e.mix(e.Transition.fx, {
        "app:fadeIn": {
            opacity: 1,
            duration: .3,
            on: {
                start: function(e) {
                    var t = {
                        opacity: 0
                    }, n = e.config;
                    n.crossView&&!n.prepended && (t.transform = "translateX(-100%)"), this.setStyles(t)
                },
                end: function() {
                    this.setStyle("transform", "translateX(0)")
                }
            }
        },
        "app:fadeOut": {
            opacity: 0,
            duration: .3,
            on: {
                start: function(e) {
                    var t = {
                        opacity: 1
                    }, n = e.config;
                    n.crossView && n.prepended && (t.transform = "translateX(-100%)"), this.setStyles(t)
                },
                end: function() {
                    this.setStyle("transform", "translateX(0)")
                }
            }
        },
        "app:slideLeft": {
            duration: .3,
            transform: "translateX(-100%)",
            on: {
                start: function() {
                    this.setStyles({
                        opacity: 1,
                        transform: "translateX(0%)"
                    })
                },
                end: function() {
                    this.setStyle("transform", "translateX(0)")
                }
            }
        },
        "app:slideRight": {
            duration: .3,
            transform: "translateX(0)",
            on: {
                start: function() {
                    this.setStyles({
                        opacity: 1,
                        transform: "translateX(-100%)"
                    })
                },
                end: function() {
                    this.setStyle("transform", "translateX(0)")
                }
            }
        }
    }), e.App.TransitionsNative = r, e.Base.mix(e.App, [r])
}, "3.12.0", {
    requires: ["app-transitions", "app-transitions-css", "parallel", "transition"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("model-sync-rest", function(e, t) {
    function r() {}
    var n = e.Lang;
    r.CSRF_TOKEN = YUI.Env.CSRF_TOKEN, r.EMULATE_HTTP=!1, r.HTTP_HEADERS = {
        Accept: "application/json",
        "Content-Type": "application/json"
    }, r.HTTP_METHODS = {
        create: "POST",
        read: "GET",
        update: "PUT",
        "delete": "DELETE"
    }, r.HTTP_TIMEOUT = 3e4, r._NON_ATTRS_CFG = ["root", "url"], r.prototype = {
        root: "",
        url: "",
        initializer: function(e) {
            e || (e = {}), "root"in e && (this.root = e.root || ""), "url"in e && (this.url = e.url || "")
        },
        getURL: function(t, n) {
            var r = this.root, i = this.url;
            return this._isYUIModelList ? i ? this._substituteURL(i, e.merge(this.getAttrs(), n)) : this.model.prototype.root : r && (t === "create" || this.isNew()) ? r : i ? this._substituteURL(i, e.merge(this.getAttrs(), n)) : this._joinURL(this.getAsURL("id") || "")
        },
        parseIOResponse: function(e) {
            return e.responseText
        },
        serialize: function(t) {
            return e.JSON.stringify(this)
        },
        sync: function(t, n, i) {
            n || (n = {});
            var s = this.getURL(t, n), o = r.HTTP_METHODS[t], u = e.merge(r.HTTP_HEADERS, n.headers), a = n.timeout || r.HTTP_TIMEOUT, f = n.csrfToken || r.CSRF_TOKEN, l;
            o === "POST" || o === "PUT" ? l = this.serialize(t) : delete u["Content-Type"], r.EMULATE_HTTP && (o === "PUT" || o === "DELETE") && (u["X-HTTP-Method-Override"] = o, o = "POST"), f && (o === "POST" || o === "PUT" || o === "DELETE") && (u["X-CSRF-Token"] = f), this._sendSyncIORequest({
                action: t,
                callback: i,
                entity: l,
                headers: u,
                method: o,
                timeout: a,
                url: s
            })
        },
        _joinURL: function(e) {
            var t = this.root;
            return !t&&!e ? "" : (e.charAt(0) === "/" && (e = e.substring(1)), t && t.charAt(t.length - 1) === "/" ? t + e + "/" : t + "/" + e)
        },
        _parse: function(e) {
            return typeof this.parseIOResponse == "function" && (e = this.parseIOResponse(e)), this.parse(e)
        },
        _sendSyncIORequest: function(t) {
            return e.io(t.url, {
                arguments: {
                    action: t.action,
                    callback: t.callback,
                    url: t.url
                },
                context: this,
                data: t.entity,
                headers: t.headers,
                method: t.method,
                timeout: t.timeout,
                on: {
                    start: this._onSyncIOStart,
                    failure: this._onSyncIOFailure,
                    success: this._onSyncIOSuccess,
                    end: this._onSyncIOEnd
                }
            })
        },
        _substituteURL: function(t, r) {
            if (!t)
                return "";
            var i = {};
            return e.Object.each(r, function(e, t) {
                if (n.isString(e) || n.isNumber(e))
                    i[t] = encodeURIComponent(e)
            }), n.sub(t, i)
        },
        _onSyncIOEnd: function(e, t) {},
        _onSyncIOFailure: function(e, t, n) {
            var r = n.callback;
            r && r({
                code: t.status,
                msg: t.statusText
            }, t)
        },
        _onSyncIOSuccess: function(e, t, n) {
            var r = n.callback;
            r && r(null, t)
        },
        _onSyncIOStart: function(e, t) {}
    }, e.namespace("ModelSync").REST = r
}, "3.12.0", {
    requires: ["model", "io-base", "json-stringify"]
});
/*
YUI 3.12.0 (build 8655935)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("view-node-map", function(e, t) {
    function i() {}
    var n = e.namespace("View._buildCfg"), r = {};
    n.aggregates || (n.aggregates = []), n.aggregates.push("getByNode"), i.getByNode = function(t) {
        var n;
        return e.one(t).ancestor(function(t) {
            return (n = r[e.stamp(t, !0)]) ||!1
        }, !0), n || null
    }, i._instances = r, i.prototype = {
        initializer: function() {
            r[e.stamp(this.get("container"))] = this
        },
        destructor: function() {
            var t = e.stamp(this.get("container"), !0);
            t in r && delete r[t]
        }
    }, e.View.NodeMap = i
}, "3.12.0", {
    requires: ["view"]
});
YUI.add("media-agof-tracking", function(e, t) {
    "use strict";
    var n = "", r = "dummy", i = "de.ioam.de/tx.io", s = "de.ioam.de/aid.io", o = ["", "inst", "open", "clse", "play", "stop", "fowa", "bakw", "recd", "paus", "forg", "bakg", "dele", "refr", "view", "alve"], u = [], a = 1, f = 0, l = 1, c = "Leercode_nichtzuordnungsfaehig", h = {
        onfocus: "forg",
        onblur: "bakg",
        onclose: "clse"
    }, p = 0, d = null, v = null, m = {}, g = 0, y = 0;
    e.namespace("Media").Agof = {
        enableEvents: function() {
            var e = this, t;
            if (f && (typeof m.tb == "undefined" || m.tb)&&!g) {
                g = 1;
                for (t in h)(function(t) {
                    var n = window[t];
                    window[t] = function() {
                        e.event(h[t]), typeof n == "function" && n()
                    }
                })(t)
            }
        },
        isDoNotTrack: function() {
            if (p & 2 ? typeof m.nt == "undefined" ? p & 1 : m.nt : p & 1) {
                if (window.navigator.msDoNotTrack && window.navigator.msDoNotTrack == "1")
                    return !0;
                if (window.navigator.doNotTrack && (window.navigator.doNotTrack == "yes" || window.navigator.doNotTrack == "1"))
                    return !0
            }
            return !1
        },
        loadSurvey: function() {
            var e = this, t = m.st + "//" + m.pt + "//" + m.cp + "//VIA_SZMNG";
            if (l&&!y && m.sv !== "ke" && (m.sv === "in" || m.sv === "mo" || m.sv === "i2")) {
                y = 1;
                var n = 0, r = document.cookie.split(";");
                for (var i = 0; i < r.length; i++)
                    if (r[i].match("POPUPCHECK=.*")) {
                        var s = new Date, o = s.getTime();
                        s.setTime(r[i].split("=")[1]), s.getTime() >= o && (n = 1);
                        break
                    }
                n == 0 && m.sv === "in" && (v = e.createScriptTag(window.location.protocol + "//qs.ioam.de/?" + (t ? t : "")), v && v.parentNode.removeChild(v)), n == 0 && m.sv === "i2" && (v && v.parentNode.removeChild(v), v = e.createScriptTag(window.location.protocol + "//qs.ioam.de/?" + (t ? t : ""))), n == 0 && m.sv === "mo" && (v && v.parentNode.removeChild(v), v = e.createScriptTag(window.location.protocol + "//mqs.ioam.de/?" + (t ? t : "")))
            }
        },
        hash: function(e) {
            var t = 0;
            for (var n = 0; n < e.length; ++n)
                t += e.charCodeAt(n), t += t<<10, t^=t>>6;
            return t += t<<3, t^=t>>11, t += t<<15, t = Math.abs(t & t), t.toString(36)
        },
        activeXDetect: function() {
            var e = "", t, n = ["7790769C-0471-11D2-AF11-00C04FA35D02", "89820200-ECBD-11CF-8B85-00AA005B4340", "283807B5-2C60-11D0-A31D-00AA00B92C03", "4F216970-C90C-11D1-B5C7-0000F8051515", "44BBA848-CC51-11CF-AAFA-00AA00B6015C", "9381D8F2-0288-11D0-9501-00AA00B911A5", "4F216970-C90C-11D1-B5C7-0000F8051515", "5A8D6EE0-3E18-11D0-821E-444553540000", "89820200-ECBD-11CF-8B85-00AA005B4383", "08B0E5C0-4FCB-11CF-AAA5-00401C608555", "45EA75A0-A269-11D1-B5BF-0000F8051515", "DE5AED00-A4BF-11D1-9948-00C04F98BBC9", "22D6F312-B0F6-11D0-94AB-0080C74C7E95", "44BBA842-CC51-11CF-AAFA-00AA00B6015B", "3AF36230-A269-11D1-B5BF-0000F8051515", "44BBA840-CC51-11CF-AAFA-00AA00B6015C", "CC2A9BA0-3BDD-11D0-821E-444553540000", "08B0E5C0-4FCB-11CF-AAA5-00401C608500", "D27CDB6E-AE6D-11CF-96B8-444553540000", "2A202491-F00D-11CF-87CC-0020AFEECF20"];
            document.body.addBehavior("#default#clientCaps");
            for (var r = 0; r < n.length; r++)
                t = document.body.getComponentVersion("{" + n[r] + "}", "ComponentID"), t != null ? e += t : e += "null";
            return e
        },
        fingerprint: function() {
            var e = this, t = window.navigator, n = t.userAgent, r;
            n += e.getScreen();
            if (t.plugins.length > 0)
                for (r = 0; r < t.plugins.length; r++)
                    n += t.plugins[r].filename + t.plugins[r].version + t.plugins[r].description;
            if (t.mimeTypes.length > 0)
                for (r = 0; r < t.mimeTypes.length; r++)
                    n += t.mimeTypes[r].type;
            return /MSIE (\d+\.\d+);/.test(t.userAgent) && (n += e.activeXDetect()), e.hash(n)
        },
        createScriptTag: function(e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e;
            var n = document.getElementsByTagName("HEAD")[0];
            return n ? (n.appendChild(t), t) : !1
        },
        transmitData: function(e, t) {
            var n = this, r, i;
            if (e.split("/")[2].slice(e.split("/")[2].length - 8) == ".ioam.de")
                switch (t) {
                case 1:
                    d && d.parentNode.removeChild(d), d = n.createScriptTag(e + "&mo=1"), d || ((new Image).src = e + "&mo=0");
                    break;
                case 2:
                    (new Image).src = e + "&mo=0";
                    break;
                case 3:
                    i = document.getElementById("iamsendbox"), i && document.body.removeChild(i), i = document.createElement("iframe"), i.id = "iamsendbox", r = i.style, r.position = "absolute", r.left = r.top = "-999px", i.src = e + "&mo=1", document.body.appendChild(i);
                    break;
                case 0:
                default:
                    (new Image).src = e + "&mo=0"
                }
        },
        getScreen: function() {
            return screen.width + "x" + screen.height + "x" + screen.colorDepth
        },
        arrayContains: function(e, t) {
            var n;
            for (n = 0; n < e.length; n++)
                if (e[n] == t)
                    return !0;
            return !1
        },
        transformVar: function(e) {
            return e || (e = ""), e = e.replace(/[?#].*/g, ""), e = e.replace(/[^a-zA-Z0-9,_\/-]+/g, "."), e.length > 255 && (e = e.substr(0, 254) + "+"), e
        },
        getRefHost: function() {
            var e = document.referrer.split("/");
            return e.length >= 3 ? e[2] : ""
        },
        buildResult: function(e) {
            var t = this, n;
            m = {};
            for (n in e)
                e.hasOwnProperty(n) && (m[n] = e[n]);
            m.hasOwnProperty("fp") && (m.fp = m.fp != "" ? m.fp : c, m.fp = t.transformVar(m.fp), m.pt = "FP"), m.hasOwnProperty("np") && (m.np = m.np != "" ? m.np : c, m.np = t.transformVar(m.np), m.pt = "NP"), m.hasOwnProperty("xp") && (m.xp = m.xp != "" ? m.xp : c, m.xp = t.transformVar(m.xp), m.pt = "XP"), m.hasOwnProperty("cp") && (m.cp = m.cp != "" ? m.cp : c, m.cp = t.transformVar(m.cp), m.pt = "CP"), m.pt || (m.cp = c, m.pt = "CP", m.er = "N13"), m.rf = t.getRefHost(), m.r2 = document.referrer, m.ur = document.location.host, m.xy = t.getScreen(), m.cb = "8002", m.vr = "304", m.id = t.fingerprint(), m.st = m.st ? m.st : r
        },
        event: function(e, t) {
            var n = this, r = "", t = t || 2, f;
            e = e || "";
            if (!n.isDoNotTrack() && (!a || a && n.arrayContains(o, e))) {
                m.lt = (new Date).getTime(), m.ev = e;
                var l = window.location.protocol.slice(0, 4) === "http" ? window.location.protocol: "https:";
                !n.arrayContains(u, m.st) && (/iPhone/.test(window.navigator.userAgent) || /iPad/.test(window.navigator.userAgent)) && /OS\s[3-6]/.test(window.navigator.userAgent) && /Safari/.test(window.navigator.userAgent)&&!/Chrome/.test(window.navigator.userAgent) && (i = s, t = 3, m.u2 = document.URL);
                for (f in m)
                    m.hasOwnProperty(f) && f != "cs" && f != "url" && (r = r + encodeURIComponent(f).slice(0, 8) + "=" + encodeURIComponent(m[f]).slice(0, 2048) + "&");
                r = r.slice(0, 4096), m.cs = n.hash(r), m.url = l + "//" + i + "?" + r + "cs=" + m.cs, n.transmitData(m.url, t)
            }
        },
        forwardToOldSZM: function() {
            var e = this;
            if (m.mg === "yes"&&!window.IVW&&!document.IVW) {
                var t = window.location.protocol.slice(0, 4) === "http" ? window.location.protocol: "https:", n = m.co ? m.co + "_SENT_VIA_MIGRATION_TAG": "SENT_VIA_MIGRATION_TAG", r = m.oc ? m.oc: m.cp ? m.cp == c ? "": m.cp: "", i = m.pt !== null ? m.pt: "CP";
                (new Image).src = t + "//" + m.st + ".ivwbox.de/cgi-bin/ivw/" + i.toUpperCase() + "/" + r + ";" + n + "?r=" + escape(document.referrer) + "&d=" + Math.random() * 1e5
            }
        },
        beacon: function(e, t) {
            var n = this, r = t || 2;
            n.buildResult
            (e), m.sv && (m.sv = m.sv == "in" && r == 1 ? "i2" : m.sv), n.enableEvents(), n.loadSurvey(), n.forwardToOldSZM(), n.event(m.ev, r)
        }
    }
}, "@VERSION@");
YUI.add("af-eu-tracking", function(e, t) {
    "use strict";
    e.namespace("Af").EuTracking = {
        agof: function(t) {
            var n = {}, r = t && t.spaceid || "";
            if (!r)
                return;
            e.Media.Agof && e.Media.Agof.beacon && (n = {
                st: t && t.domain || "mobyahoo",
                co: t && t.comment || "kommentar",
                cp: r
            }, e.Media.Agof.beacon(n))
        },
        whap: function(t) {
            var n = t && t.serial || "800000206964", r = t && t.channel || "", i = t && t.brand || "", s = encodeURIComponent(document.referrer), o;
            o = window.location.protocol + "//w.estat.com/m/web/" + n + "?n=" + Math.round(Math.random() * 1e9) + "&type=whap&v=0.09&r=" + s, r && (o += "&chn=" + encodeURIComponent(r)), i && (o += "&brnd=" + encodeURIComponent(i)), e.Af.Beacon.send(o)
        }
    }
}, "@VERSION@", {
    requires: ["af-beacon", "media-agof-tracking"]
});
YUI.add("type_myy", function(b, i) {
    var e = 400, j = b.one(".back-to-top"), c = b.one("#OpenWidgetsBtn"), g = b.one("#search-box"), f = b.one("#MasterWrapper"), d = 40, h =+ (new Date()), a = b.Base.create("MyApp", b.Base, [b.Af.Applets, b.Af.Rapid], {
        initializer: function(k) {
            var l;
            for (l in b.My.Extensions) {
                if (b.Lang.isFunction(b.My.Extensions[l].init)) {
                    b.My.Extensions[l].NAME = l;
                    b.later(Math.floor(Math.random() * 20), b.My.Extensions[l], function() {
                        this.init();
                    });
                }
            }
            if (j) {
                b.on("click", this.handleScrollTop, j);
                b.on("scroll", this.showScrollToTop);
            }
            if (c) {
                b.on("touchstart", this.loadApps, c);
            }
        },
        handleScrollTop: function(k) {
            b.config.win.scrollTo(0, 0);
        },
        showScrollToTop: function(l) {
            var k =+ (new Date());
            if (k - h < d) {
                return;
            }
            if (b.one("body").get("docScrollY") > e) {
                j.addClass("show-top");
                j.removeClass("D-n");
            } else {
                j.addClass("D-n");
            }
            h = k;
        },
        loadApps: function(l) {
            var k = b.one("#Widgets");
            if (k) {
                k.all('[data-applet-defer="when:custom"]').each(function(m) {
                    b.My.App.loadApplet(m, function(n) {
                        if (n) {
                            b.Af.Beacon.error(i, {}, {
                                code: "appldfail",
                                appName: m.getData("applet-type")
                            });
                        }
                    });
                });
                k.all('[data-applet-init="custom"]').each(function(m) {
                    b.My.App.initApplet(m);
                });
            }
        }
    }, {});
    if (g && f) {
        g.on("touchstart", function(k) {
            f.addClass("srch-focus");
        });
        g.on("blur", function(k) {
            f.removeClass("srch-focus");
        });
    }
    b.namespace("My").App = a;
}, "0.0.1", {
    requires: ["stencil", "af-applets", "base", "af-rapid", "af-beacon"]
}); /* Copyright (c) 2014, Yahoo! Inc.  All rights reserved. */
window.Angus || (window.Angus = {}), function() {
    "use strict";
    function f(e, n) {
        var r = this, i;
        a = Stencil.css.properties.transform, r.node = typeof e == "string" ? t.getElementById(e) : e;
        if (typeof r.node != "object")
            return;
        r.viewport = r.node, r.cards = null, r.items = [], i = r.node.dataset, r.isIndependentY = n && n.isIndependentY || i && i.isIndependentY ||!1, r.viewportOffsetTop = r.isIndependentY && (n && n.viewportOffsetTop || i && i.viewportOffsetTop) || 0, r.isLoop = n && n.isLoop || i && i.isLoop ||!1, r.enableBounce = n && n.enableBounce || i && i.enableBounce ||!1, r.numBufCards = n && n.numBufCards || i && i.numBufCards || 1, r.offsetX = n && n.offsetX || i && i.offsetX || 0, r.currIndex = 0, r.isTransitioning=!1, r.isScrolling=!1, r.isSwipingMode=!1, r.defaultPositionStyle = r.isIndependentY ? "fixed" : "absolute", r.viewportWidth = r.viewport.offsetWidth, r.paginationTimer = null, r.numCards = r.numBufCards * 2 + 1, r.middleIndex = r.numBufCards, r.pos = {
            axisIntention: "",
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
            absX: 0,
            absY: 0,
            realDeltaX: 0
        }, r.init()
    }
    var e = window, t = document, n = e.requestAnimationFrame || function(e) {
        setTimeout(e, 1e3 / 60)
    }, r = 20, i = 5, s = e.navigator && e.navigator.userAgent && /iPad|iPod|iPhone/.test(e.navigator.userAgent), o = "px", u = "translate3d", a;
    f.prototype = {
        init: function() {
            var t = this, n = t.node, r = t.node.innerHTML;
            n.style.position = "relative", t.createCards(), t.fillContent(r, !1), n.addEventListener("touchstart", function(e) {
                t.handleTouchStart(e)
            }, !1), n.addEventListener("touchend", function(e) {
                t.handleTouchEnd(e)
            }, !1), n.addEventListener("touchmove", function(e) {
                t.handleTouchMove(e)
            }, !1), n.addEventListener(Stencil.css.events.transitionEnd, function(e) {
                t.handleSwipingTransitionEnd(e)
            }, !1), e.addEventListener("orientationchange", function(e) {
                t.handleOrientationChange(e)
            }, !1), t.isIndependentY && e.addEventListener("scroll", function(e) {
                t.handleScroll(e)
            }, !1)
        },
        fillContent: function(e, n) {
            var r = this, i, s, o, u;
            if (typeof e != "string" || e.trim().length === 0)
                return;
            e = e.replace(/<img([^>]*)src=/ig, "<img$1data-original-src="), i = t.createElement("div"), i.innerHTML = e, s = i.querySelectorAll("div > .js-slider-item") || [], o = s.length;
            if (o === 0)
                return;
            n || (r.items = [], r.clear(), r.currIndex = 0);
            for (u = 0; u < o; u++)
                e = s[u].outerHTML, e = e.replace(/data-original-src=/ig, "src="), r.items.push(e);
            r.showContent(r.currIndex)
        },
        showContent: function(e) {
            var t = this, n = t.middleIndex, r;
            t.resetCards();
            if (t.items[e]) {
                t.currIndex = e, t.setContent(t.cards[n], e);
                for (r = 1; r <= t.numBufCards; r++)
                    t.setContent(t.cards[n - r], e - r), t.setContent(t.cards[n + r], e + r)
            }
        },
        paginate: function(e, t, n) {
            var r = this, i;
            if (r.paginationTimer)
                return;
            if (["index", "next", "prev"].indexOf(e)===-1)
                return;
            e === "index" ? (i = t, e = t - r.currIndex > 0?-1 : 1, t = Math.abs(t - r.currIndex)) : (e === "next" ? e =- 1 : e === "prev" && (e = 1), i = r.currIndex - e * t);
            if (t <= 0)
                return;
            t > r.numBufCards && (t = r.numBufCards + 1, r.currIndex = i + e * t), r.paginationTimer = setInterval(function() {
                t--, t > 0 ? r.shuffleCards(e) : (r.shuffleCards(e, function() {
                    r.showContent(i), n && n()
                }), clearTimeout(r.paginationTimer), r.paginationTimer = null)
            }, 100)
        },
        next: function(e, t) {
            this.paginate("next", e, t)
        },
        prev: function(e, t) {
            this.paginate("prev", e, t)
        },
        jumpTo: function(e, t) {
            var n = this, r = e > n.currIndex ? "next": "prev", i = Math.abs(e - n.currIndex);
            n.paginate(r, i, t)
        },
        getTotal: function() {
            return this.items.length
        },
        getCurrIndex: function() {
            return this.currIndex
        },
        getCurrItem: function() {
            var e = this;
            return e.cards[e.middleIndex].firstChild
        },
        getItem: function(e) {
            return e >= 0 && e < this.items.length ? this.items[e] : null
        },
        clear: function() {
            var e = this, t;
            for (t = 0; t < e.numCards; t++)
                e.cards[t].innerHTML = "", e.cards[t].setAttribute("data-index", "")
        },
        setContent: function(e, t) {
            var n = this, r = n.items.length, i;
            if (!n.isLoop && (t < 0 || t >= r))
                return;
            t < 0 ? t = r + t%r : t >= r && (t%=r), i = parseInt(e.getAttribute("data-index"), 10);
            if (i === t)
                return;
            e.innerHTML = n.items[t], e.setAttribute("data-index", t)
        },
        resetContent: function(e) {
            e.innerHTML = "", e.setAttribute("data-index", "")
        },
        createCards: function() {
            var e = this, t, n;
            n = "";
            for (t = 0; t < e.numCards; t++)
                n += '<div class="js-slider-card"></div>';
            e.viewport.innerHTML = n, e.cards = e.viewport.querySelectorAll(".js-slider-card"), e.cards = [].slice.call(e.cards);
            for (t = 0; t < e.numCards; t++)
                e.cards[t].style.top = "0", e.cards[t].style.left = "0", e.cards[t].style.width = "100%", e.cards[t].style.height = "100%", e.cards[t].setAttribute("data-index", "")
        },
        resetCards: function() {
            var e = this, t, n, r, i, s, o;
            o = e.defaultPositionStyle, r = e.viewportOffsetTop, i = e.middleIndex, e.cards[i].style.position = "relative", e.translate(e.cards[i], 0, 0), t = e.viewportWidth = e.viewport.offsetWidth;
            for (s = 1; s <= e.numBufCards; s++)
                n =- s * t - e.offsetX, e.cards[i - s].style.position = o, e.translate(e.cards[i - s], n, r), n = s * t + e.offsetX, e.cards[i + s].style.position = o, e.translate(e.cards[i + s], n, r);
            e.isSwipingMode=!1
        },
        setCardsTransition: function(e, t) {
            var n = this, r;
            n.isTransitioning = e;
            for (r = 0; r < n.numCards; r++)
                t < 0 && r === 0 || t > 0 && r === n.numCards - 1 ? n.cards[r].classList.remove("FastTrans") : e ? n.cards[r].classList.add("FastTrans") : n.cards[r].classList.remove("FastTrans")
        },
        moveCards: function(e) {
            var t = this, r = t.viewportOffsetTop, i = t.viewportWidth + t.offsetX, s = t.middleIndex;
            if (!t.isLoop&&!t.enableBounce)
                if (t.currIndex === 0 && e > 0 || t.currIndex === t.items.length - 1 && e < 0)
                    return 0;
            return n(function() {
                e >= 0 && t.translate(t.cards[s - 1], - i + e, r), t.translate(t.cards[s], e, t.isSwipingMode ? r : 0), e <= 0 && t.translate(t.cards[s + 1], i + e, r)
            }), e
        },
        shuffleCards: function(e, t) {
            var r = this, i = r.middleIndex, s, o, u, a, f, l;
            n(function() {
                s = r.items.length, f = r.currIndex, e === 1 ? (r.currIndex--, r.currIndex < 0 && (r.currIndex = r.isLoop ? s - 1 : 0)) : e===-1 && (r.currIndex++, r.currIndex >= s && (r.currIndex = r.isLoop ? 0 : s - 1)), e = r.currIndex === f ? 0 : e, r.setCardsTransition(!0, e), e === 0 ? (r.moveCards(0), Stencil.utils.dispatch(r.viewport, "slider:swipeabort", {
                    currPage: r.currIndex,
                    fromPage: r.currIndex,
                    currNode: r.cards[i].firstChild,
                    fromNode: r.cards[i].firstChild
                })) : (u = r.cards[i], r.shiftCardsPosition(e), r.shiftCardsArray(e), r.isSwipingMode || (r.isSwipingMode=!0, r.isIndependentY && function(e) {
                    setTimeout(function() {
                        r.scrollToTop(e)
                    }, 200)
                }(u)), o = e > 0 ? r.cards[0] : r.cards[r.numCards - 1], a = e > 0 ? r.currIndex - r.numBufCards : r.currIndex + r.numBufCards, function(e, t) {
                    e.timer && (clearTimeout(e.timer), e.timer = null), r.resetContent(e), e.timer =
                    setTimeout(function() {
                        r.setContent(e, t), e.timer = null
                    }, 100)
                }(o, a), l = {
                    currPage: r.currIndex,
                    fromPage: f,
                    currNode: r.cards[i].firstChild,
                    fromNode: u.firstChild
                }, Stencil.utils.dispatch(r.viewport, "slider:swipe", l), t && t(l))
            })
        },
        shiftCardsPosition: function(e) {
            var t = this, n = t.viewportWidth + t.offsetX, r = t.viewportOffsetTop, i, s, o = t.middleIndex;
            if (e > 0) {
                t.translate(t.cards[o], n, t.isSwipingMode ? r : 0);
                for (i = 1; i <= t.numBufCards; i++)
                    s =- i + 1, t.translate(t.cards[o - i], s * n, r), s = i + 1 <= t.numBufCards ? i + 1 : - t.numBufCards, t.translate(t.cards[o + i], s * n, r)
            } else if (e < 0) {
                t.translate(t.cards[o], - n, t.isSwipingMode ? r : 0);
                for (i = 1; i <= t.numBufCards; i++)
                    s =- i - 1>=-t.numBufCards?-i - 1 : t.numBufCards, t.translate(t.cards[o - i], s * n, r), s = i - 1, t.translate(t.cards[o + i], s * n, r)
            }
        },
        shiftCardsArray: function(e) {
            var t = this, n, r, i = t.numCards - 1;
            if (e > 0) {
                n = t.cards[i];
                for (r = i; r > 0; r--)
                    t.cards[r] = t.cards[r - 1];
                t.cards[0] = n
            } else if (e < 0) {
                n = t.cards[0];
                for (r = 0; r < i; r++)
                    t.cards[r] = t.cards[r + 1];
                t.cards[i] = n
            }
        },
        scrollToTop: function(e) {
            var r = this;
            n(function() {
                t.body.scrollTop = 0, e.style.position = r.defaultPositionStyle
            })
        },
        translate: function(e, t, n) {
            t += o, n += o, e.style[a] = u + "(" + t + "," + n + ",0)"
        },
        setAdjacentVisibility: function(e) {
            var t = this, n = t.middleIndex;
            t.cards[n - 1].style.visibility = e, t.cards[n + 1].style.visibility = e
        },
        getXY: function(e) {
            var n = this, r = {
                x: 0,
                y: 0
            };
            return e.pageX || e.pageY ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX + t.body.scrollLeft + t.documentElement.scrollLeft, r.y = e.clientY + t.body.scrollTop + t.documentElement.scrollTop), r.x -= n.viewport.offsetLeft, r.y -= n.viewport.offsetTop, r
        },
        handleTouchStart: function(e) {
            var t = this, n;
            n = t.getXY(e.touches[0]), t.pos.axisIntention = t.isScrolling ? "y" : t.isTransitioning ? "x" : "", t.pos.startX = n.x, t.pos.startY = n.y, t.pos.deltaX = 0, t.pos.deltaY = 0, t.pos.absX = 0, t.pos.absY = 0, t.pos.realDeltaX = 0
        },
        handleTouchMove: function(e) {
            var t = this, r;
            t.isTransitioning && n(function() {
                t.setCardsTransition(!1)
            }), r = t.getXY(e.touches[0]), t.pos.deltaX = r.x - t.pos.startX, t.pos.deltaY = r.y - t.pos.startY, t.pos.absX = Math.abs(t.pos.deltaX), t.pos.absY = Math.abs(t.pos.deltaY), t.pos.axisIntention === "" && (t.pos.absX > i && t.pos.absX >= t.pos.absY ? t.pos.axisIntention = "x" : t.pos.absY > i && t.pos.absY > t.pos.absX && (t.pos.axisIntention = "y")), t.pos.axisIntention === "x" && (e.preventDefault(), t.pos.realDeltaX = t.moveCards(t.pos.deltaX)), Stencil.utils.dispatch(t.viewport, "slider:move", t.pos)
        },
        handleTouchEnd: function() {
            var e = this, t, n;
            e.pos.axisIntention === "x" ? (t = e.pos.realDeltaX, t !== 0 ? (n = 0, t > r ? n = 1 : t<-r && (n =- 1), e.shuffleCards(n)) : e.resetCards()) : e.pos.axisIntention === "y" && e.isIndependentY && s && (e.isScrolling=!0)
        },
        handleSwipingTransitionEnd: function(e) {
            var t = this, r = t.cards[t.middleIndex];
            t.isTransitioning && e.target === r && n(function() {
                t.setCardsTransition(!1), t.resetCards(), Stencil.utils.dispatch(t.viewport, "slider:swipeend", {
                    currPage: t.currIndex,
                    currNode: r
                })
            })
        },
        handleScroll: function() {
            var e = this;
            s ? e.isScrolling=!1 : (e.isScrolling && clearTimeout(e.isScrolling), e.isScrolling = setTimeout(function() {
                e.isScrolling=!1
            }, 250))
        },
        handleOrientationChange: function() {
            var e = this;
            e.setAdjacentVisibility("hidden"), e.showContent(e.currIndex), e.setAdjacentVisibility("visible")
        }
    }, Angus.Slider = f
}(), YUI.add("angus-slider", function(e, t) {}, "@VERSION@", {
    requires: ["stencil"]
});

