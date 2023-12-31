(function() {
    var m, B;
    (function() {
        var b = this, e = {};
        m = function(c, a) {
            m[c] = a
        };
        B = function(c) {
            if (B[c] === e)
                throw "Circular require";
            if (!m[c])
                throw "Unknown require: " + c;
            return B[c] || (B[c] = e) && (B[c] = new function() {
                return m[c](this, B, b) || this
            })
        }
    })();
    m("adm-events", function(b, e) {
        var c = e("util"), a = e("store"), h = e("routes"), i = b.COOKIE_SERVICE_TTL = 30 * a.MINUTES, d = b.EVENT_TTL = 2 * a.DAYS, f = b.prefix = "e_", g = b.knownEventIds = [];
        b.addEventId = function(a) {
            c.contains(g, a) || g.push(a)
        };
        var k = b.parse = function(a) {
            a = a.split("&");
            return {
                id: a.shift(),
                attrs: c.parseKeyValues(a.join("&"))
            }
        }, j = b.stringify = function(a) {
            return a.id + "&" + c.paramString(a.attrs)
        }, o = b.storeEvent = function(c, b) {
            b = b || 0;
            a.set(f + j(c), 1, d - b)
        }, l = b.processEvent = function(a) {
            var b = "event_" + a.id;
            c.set(b, !0);
            c.eachHash(a.attrs, function(a, f) {
                var d = b + "_attr_" + a, d = c.get(d) || c.set(d, []);
                c.contains(d, f) || d.push(f)
            })
        }, r = b.readFromStore = function() {
            var b = a.namespace(f);
            c.eachHash(b, function(a) {
                l(k(a))
            })
        }, n = b.process3rdParty = function(a) {
            var b = /^e_(.*)/, f;
            c.eachHash(a, function(d) {
                if (f = d.match(b)) {
                    var j =
                    k(f[1].replace(/\^/g, "&").replace(/\|/g, "="));
                    c.contains(g, j.id) && (d = (new Date - new Date(parseInt(a[d], 10))) / 1E3, o(j, d), l(j))
                }
            })
        };
        b.check3rdParty = function() {
            g.length&&!a.get("event3p") && e("http").jsonp({
                url: c.get("url_cookies") || "//beacon.krxd.net/cookie2json",
                callback: "kxjsonp_3pevents",
                done: function(c) {
                    a.set("event3p", "1", i);
                    n(c)
                }
            })
        };
        r();
        h.simple("admEvent", function(a, b) {
            var f = {
                id: a,
                attrs: b
            };
            o(f);
            l(f);
            e("http").pixel({
                url: c.get("url_event"),
                data: c.extend({
                    event_id: a,
                    pub_id: c.get("pubid")
                }, b)
            })
        })
    });
    m("browser-sniff", function(b, e, c) {
        var a = e("util"), h = {
            ANDROID: "Android",
            CHROME: "Chrome",
            FIREFOX: "Firefox",
            IE: "Internet Explorer",
            OPERA: "Opera",
            OTHER: "Other",
            SAFARI: "Safari"
        }, b = function(b) {
            var b = b || a.deref(c, "navigator.userAgent"), d = a.partial(a.matchAll, b), b = d("Chrome", "OPR"), f = d("Chrome")&&!b, g = d("Trident", "WOW") || d("MSIE"), k = d("Linux", "Android"), j=!b&&!f&&!g&&!k && d("Safari", "like Gecko"), d = d("Gecko", "Firefox");
            return f ? h.CHROME : g ? h.IE : j ? h.SAFARI : b ? h.OPERA : d ? h.FIREFOX : k ? h.ANDROID : h.OTHER
        };
        return a.extend({
            Browsers: h,
            is: b(),
            parse: b
        })
    });
    m("class", function(b, e) {
        var c = e("util"), a = b.beget = function(a, b) {
            function d() {
                this.constructor = b
            }
            c.extend(b, a);
            d.prototype = a.prototype;
            b.prototype = new d;
            return b
        };
        (b.Class = c.extend(function() {
            var a = arguments;
            c.each(this._class.initializers, function(c, b) {
                b.apply(this, a)
            }, this)
        }, {
            extensions: {
                extension: [/^extension_(.+)/, function(a, b) {
                    var d = {};
                    d[a[1]] = b;
                    this.extensions = c.extend(this.extensions || {}, d)
                }
                ]
            },
            mixin: function(a) {
                c.isFunction(a) ? a(this) : c.each(a, c.bind(this.mixinProperty, this))
            },
            mixinProperty: function(a, b) {
                var d;
                c.some(this.extensions, function(c, g) {
                    if (d = a.match(g[0]))
                        return g[1].call(this, d, b) ||!0
                }, this) || (this.prototype[a] = b)
            }
        })).mixin({
            _bind: function(a) {
                c.each(a.split(" "), function(a) {
                    this[a] = c.bind(this[a], this)
                }, this)
            },
            _apply: function(a, c) {
                this[a].apply(this, c)
            },
            _super: function(a, b) {
                var d, f = this._superctx;
                this._superctx = (this._superctx || this)._superproto;
                c.isString(a) ? d = this._superctx[a].apply(this, b || []) : this._superctx.constructor.apply(this, a || []);
                this._superctx = f;
                return d
            },
            extension_classMethod: [/^__(.+)/, function(a, c) {
                this[a[1]] = c
            }
            ],
            extension_initialier: [/^_init_(.+)/, function(a, b) {
                var d = {};
                d[a[1]] = b;
                this.initializers = c.extend(this.initializers || {}, d)
            }
            ],
            __extend: function(b) {
                a(this, b).construct(this, c.rest(arguments, 1));
                return b
            },
            __construct: function(a, b) {
                this.prototype._superproto = a.prototype;
                this.prototype._class = this;
                if (!this.name) {
                    var d = this.toString().match(/function\s+([^\(]+)/);
                    d && (this.name = d[1])
                }
                c.each(b, function(a) {
                    this.mixin(a)
                }, this);
                this.init()
            },
            __init: function() {}
        })
    });
    m("client-type", function() {
        return {
            PUBLISHER: 0,
            MARKETER: 1
        }
    });
    m("config", function(b, e) {
        var c = e("util"), a = e("store"), h = e("stateful").Stateful, i = h.extend(function(a) {
            this._super(arguments);
            this._type = "Config";
            this._handles = [];
            this._persisted = [];
            this._defaults = {
                confid: "no-confid"
            }
        }, {
            get: function(a, b) {
                var d = this._pointerPair(a), d = c.isString(d[1]) ? c.deref(d[0], d[1]): d[0];
                if (c.isString(d)) {
                    if (/^\d{1,12}$/.test(d))
                        return Number(d);
                    if (/^(true|false)$/.test(d))
                        return "true" === d
                }
                return c.existy(d) ?
                d : b
            },
            set: function(a, b) {
                var d = this._pointerPair(a), j;
                c.isString(d[1]) ? (j = c.deref(d[0], d[1]), d[0][d[1]] = b, this._fire("set", a, j, b)) : this._super("set", arguments);
                return this
            },
            remove: function(a) {
                var b = this._pointerPair(a), d;
                c.isString(b[1]) ? (d = c.deref(b[0], b[1]), delete b[0][b[1]], this._fire("remove", a, d, c.UNDEFINED)) : this._super("remove", arguments);
                return this
            },
            has: function(a) {
                return this._has(a) || c.existy(this.get(a))
            },
            persist: function(b) {
                var b = c.difference(c.toArray(arguments), this._persisted), d = this,
                k = function(b) {
                    d.has(b, !0) && a.set(b, d.get(b))
                };
                this._handles.push.apply(this._handles, c.map(b, function(b) {
                    var d = c.partial(k, b);
                    d();
                    return c.compose(this.watch("set:" + b, d), this.watch("remove:" + b, function() {
                        a.remove(b)
                    }, this))
                }, this));
                this._persisted.push.apply(this._persisted, b)
            },
            destroy: function() {
                c.forEach(this._handles, function(a) {
                    a()
                });
                return this
            },
            toJSON: function() {
                return c.extend({}, this._defaults, this._raw)
            },
            _has: function() {
                return h.prototype.has.apply(this, arguments)
            },
            _pointerPair: function(a) {
                var b =
                !1, d = a, j, e;
                0 < a.indexOf(".")&&!this._has(a) && (j = a.split("."), d = j[0], b=!0);
                a = h.prototype.get.call(this, d);
                b && ((b = j.slice(1, j.length - 1).join(".")) && (a = c.deref(a, b)), e = j.pop());
                return [a, e]
            }
        }), d;
        return c.extend(function(a) {
            if (a ||!d)
                d = new i(a);
            return d
        }, {
            Config: i
        }, b)
    });
    m("context-terms", function(b, e, c) {
        var a = e("util"), h = c.document, c = "a form script noscript style select textarea button".split(" "), i = RegExp("<(" + c.join("|") + ")\\b", "i"), d = RegExp("^(" + c.join("|") + ")$", "i");
        b.process = function(b) {
            for (var c = [h.body],
            f = "", e; e = c.shift();)
                3 === e.nodeType ? f += e.nodeValue : 1 === e.nodeType&&!d.test(e.nodeName) && (i.test(e.innerHTML) ? [].unshift.apply(c, a.toArray(e.childNodes)) : f += e.innerText || e.textContent);
            f = f.replace(/\s\s+/g, " ");
            a.each(b, function(b) {
                b.matches = 0;
                var c = RegExp("\\b" + a.escapeRegexp(b.value) + "\\b", "ig");
                f.replace(c, function() {
                    b.matches++
                })
            });
            b = a.filter(b, function(b) {
                return a.set("context_term_" + b.id, b.matches)
            });
            a.set("context_terms_processed", !0);
            a.set("page_attr_kx_context_terms", b);
            a.set("context_terms",
            a.map(b, function(a) {
                return a.id
            }));
            return {
                text: f,
                terms: b
            }
        };
        var f = e("pixel"), b = b.pixelFormatter = function(b) {
            return a.map(b, function(a) {
                return a.id + f.tuppleSeparator + a.matches
            }).join(",")
        };
        f.addFormatter("_kpa_kx_context_terms", b)
    });
    m("crypto-util", function(b, e) {
        var c = e("util"), a = function(a, b, c) {
            return (a | b<<24 - 8 * (c%4))>>>0
        }, h = function(a) {
            for (var b = [], c = 0; c < a.length; c += 8)
                b.push(a.substr(c, 8));
            return b
        };
        return b = {
            BITS_PER_BYTE: 8,
            BITS_PER_WORD: 32,
            BYTES_PER_WORD: 4,
            MAX_BYTE: 255,
            MAX_WORD: 4294967295,
            WORD_SIZE: 32,
            pad: function(a, b, c) {
                for (var b = b || "0", g = [], c = (c || 32) - a.length, k = 0; k < c; ++k)
                    g.push(b);
                return g.join("") + a
            },
            fromWordToBytesArray: function(a) {
                return c.map(c.range(4), function(b) {
                    return a>>>24 - 8 * (b%4) & 255
                })
            },
            fromBytesArrayToWord: function(b) {
                return c.reduce(b, a, 0)
            },
            toWord: function(a) {
                return b.pad(Number(a).toString(2))
            },
            fromWord: function(a) {
                return parseInt(a, 2)
            },
            toHex: function(a) {
                return Number(a).toString(16)
            },
            fromHex: function(a) {
                return parseInt(a, 16)
            },
            rotl: function(a, b, c) {
                return a<<b | a>>>(c || 32) - b
            },
            rotr: function(a,
            b, c) {
                return a>>>b | a<<(c || 32) - b
            },
            fromWordsToLatin1: function(a) {
                return c.map(a, function(a) {
                    return c.reduce(b.fromWordToBytesArray(a), function(a, b) {
                        return a + String.fromCharCode(b)
                    }, "")
                }).join("")
            },
            fromLatin1ToWords: function(a) {
                for (var b = [], c = 0, g = a.length; c < g; c++)
                    b[c>>>2]|=(a.charCodeAt(c) & 255)<<24 - 8 * (c%4);
                return b
            },
            fromWordsToUtf8: function(a) {
                try {
                    return decodeURIComponent(escape(b.fromWordsToLatin1(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            fromUtf8ToWords: function(a) {
                return b.fromLatin1ToWords(unescape(encodeURIComponent(a)))
            },
            fromWordsToHex: function(a) {
                for (var b = 4 * a.length, c = [], g = 0; g < b; g++) {
                    var k = a[g>>>2]>>>24 - 8 * (g%4) & 255;
                    c.push((k>>>4).toString(16));
                    c.push((k & 15).toString(16))
                }
                return c.join("")
            },
            fromHexToWords: function(a) {
                return c.map(h(a), b.fromHex)
            },
            calculateSigBytesForWords: function(a) {
                return c.sum(c.map(a, function(a) {
                    return c.filter(b.fromWordToBytesArray(a), c.identity).length
                }))
            }
        }
    });
    m("data-rewrite", function(b, e) {
        var c = e("util"), a = e("expression"), h = c.rewriter({
            country: "user_attr_kx_geo_country",
            sub_section: "subsection",
            segment: "user_segments"
        }), i = c.rewriter({
            "=": "is",
            "!=": "isnt",
            before: "<",
            after: ">"
        }), d = b.expression = function(b) {
            var d = i(b.operator), k = h(b.name), j = b.delimiter;
            c.isArray(b.value) ? b = "[" + b.value.join(",") + "]" : (b = b.value, b = String(b), b = b.match(/,/) ? "[" + b.split(", ").join(",") + "]" : b);
            var e = function(a, b, d) {
                return c.map(a, function(a) {
                    return [b, "$" + d, a]
                })
            }, l = c.isArray(a.get(k, j)), r = a.parse(b);
            if (c.isArray(r)) {
                if ("is" === d && (d = l ? "intersects" : "memberOf"), "isnt" === d && (d = l ? "notIntersects" : "notMemberOf"), "url" === k &&
                !l) {
                    if ("contains" === d)
                        return ["or"].concat(e(r, d, k));
                    if ("notContains" === d)
                        return ["and"].concat(e(r, d, k))
                    }
            } else 
                l && ("is" === d && (d = "contains"), "isnt" === d && (d = "notContains"));
            return [d, "$" + k + (j ? ":" + j : ""), b]
        };
        b.tag = function(a) {
            a = c.extend({}, a, {
                criteria: ["and"].concat(c.map(a.criteria, d))
            });
            a.freq_cap && a.criteria.push(["<", "$tag_deliveries_today", a.freq_cap]);
            a.user_percent && a.criteria.push(["<", ["random"], a.user_percent / 100]);
            delete a.rules;
            /^\s*\/\/@eval\b/.test(a.content) && (a.method = "eval");
            a.name = a.name ||
            "Anonymous";
            a.timing = a.timing || "onload";
            return a
        };
        a.setDelimiter("user_segments", ",");
        b.contextTermExpression = function(a) {
            if ("is" === i(a.operator))
                var b = a.occurrences.min || 1, a = ["or"].concat(c.map(a.values.split(","), function(a) {
                    return [">=", "$context_term_" + a, b]
                }));
            else 
                a = ["and"].concat(c.map(a.values.split(","), function(a) {
                    return ["is", "$context_term_" + a, 0]
                }));
            return ["and", "$context_terms_processed", a]
        }
    });
    m("data", function(b, e, c) {
        var a = e("util"), h = b.root = {}, i = b.defs = {};
        a.get = b.get = function(a) {
            return h[a.match(/_/) ?
            a: "_" + a]
        };
        a.set = b.set = function(b, c) {
            if (!a.isString(b))
                return a.each(b, a.set);
            b = b.match(/_/) ? b : "_" + b;
            h[b] = c;
            a.fire("data:change", {
                key: b,
                value: c
            });
            return c
        };
        a.removeData = b.remove = function(a) {
            delete h[a]
        };
        b.raw = function() {
            return h
        };
        var d = b.define = function(b, c) {
            if (!a.isString(b))
                return a.each(b, d);
            i[b] = c
        }, f = b.defaults = function(b, c) {
            if (!a.isString(b))
                return a.each(b, f);
            var d = a.get(b);
            return null == d ? a.set(b, c) : d
        }, g = b.namespace = function(b, c) {
            var d = b + "_", g, e = RegExp(d + "(.+)"), f = a.attributes({
                get: function(b) {
                    return a.get(d +
                    b)
                },
                set: function(b, c) {
                    return a.set(d + b, c)
                },
                all: function() {
                    var b = {};
                    a.eachHash(h, function(a, c) {
                        if (null != (g = a.match(e)))
                            b[g[1]] = c
                    });
                    return b
                },
                values: c
            }), i;
            f.change = function(b) {
                i || (i = [], a.on("data:change", function(b) {
                    null != (g = b.key.match(e)) && a.each(i, function(a) {
                        a(b)
                    })
                }));
                i.push(b)
            };
            return f
        };
        b.user_attr = g("user_attr");
        b.page_attr = g("page_attr");
        e("routes").simple("set", a.set);
        e("routes").simple("get", a.get);
        e("routes").regexp(/data:(.+)/, function(a, b) {
            return g(a[1], b)
        });
        e = c.navigator;
        if (e = e.language ||
        e.browserLanguage || e.userLanguage || e.systemLanguage)
            e = e.replace("_", "-"), e = e.toLowerCase();
        b.user_attr("kx_lang", e);
        b.user_attr("kx_tech_browser_language", e)
    });
    m("dataprovider", function(b, e) {
        var c = e("http"), a = e("util"), h = b.userMatch = function(b, e, g) {
            c.pixel({
                url: a.get("url_um"),
                data: {
                    partner: b,
                    r: e,
                    _kdpid: g
                }
            })
        }, i = b.exelate = function() {
            h("exelate", "//loadm.exelator.com/load/", "e4942ff0-4070-4896-a7ef-e6a5a30ce9f9")
        };
        e("routes").simple("dataprovider.exelate", i)
    });
    m("dom-iframe", function(b, e, c) {
        var a = e("util"),
        h = function(b) {
            this.options = a.extend({}, i, b || {});
            this.node = e("dom").createElement("iframe", this.options.attr);
            this.insert();
            if (!this.options.attr.src || this.options.html)
                this.html(this.options.html || "")
        }, i = {
            target: null,
            targetAction: "append",
            html: "",
            attr: {}
        };
        h.prototype = {
            insert: function() {
                var a = this.options, b = a.targetAction, a = a.target || c.document.body;
                e("dom").insert(b, a, this.node);
                this.win = h.window(this.node);
                this.doc = h.document(this.node)
            },
            html: function(a) {
                var b = this.doc;
                a.match(/^<html>/) || (a = "<html><head></head><body>" +
                a + "</body></html>");
                b.open();
                b.write(a);
                b.close()
            }
        };
        h.window = function(a) {
            return a.contentWindow
        };
        h.document = function(a) {
            return h.window(a).document
        };
        b.IFrame = h
    });
    m("dom", function(b, e, c) {
        function a(b, c, g) {
            var e = b.tagName, f = b.attributes || {}, b = b.children || [], c = c || [], g = g || 0, k = j[e];
            c("<", e);
            d.each(f, function(a, b) {
                c(" ", a, '="', b, '" ')
            });
            if (k)
                return c("/>");
            c(">");
            d.isString(b) ? c(b) : d.each(b, function(b) {
                a(b, c, g + 1)
            });
            k || c("</", e, ">")
        }
        function h(b, c, g) {
            b = d.isString(b) ? {
                tagName: b,
                attributes: c,
                children: g
            } : b;
            c = new r;
            a(b, c);
            return c.data()
        }
        function i() {
            try {
                k.documentElement.doScroll("left")
            } catch (a) {
                f(i, 1);
                return 
            }
            d.fireOnce("dom:ready")
        }
        var d = e("util"), f = c.setTimeout, g = e("browser-sniff");
        d.extend(b, e("dom-iframe"));
        var k = c.document, j = new d.Set("area base basefont br col frame hr img input isindex link meta param embed".split(" ")), o = b.attr = function(a, b, c) {
            var d;
            if (void 0 === c)
                try {
                    return a.getAttribute(b) || null != (d = a.attributes[b]) && d.value || ""
            } catch (g) {
                return ""
            } else {
                try {
                    a.setAttribute(b, c)
                } catch (e) {
                    throw Error("Failed to set: " +
                    b);
                }
                return a
            }
        };
        b.removeAttr = function(a, b) {
            try {
                a.removeAttribute(b)
            } catch (c) {
                throw Error("Failed to remove: " + b);
            }
        };
        var l = b.text = function(a) {
            return a.innerText || a.textContent
        };
        b.value = function(a) {
            var b = a.nodeName;
            return "INPUT" === b ? o(a, "value") : "TEXTAREA" === b && l(a)
        };
        var r = b.StringStream = function() {
            function a() {
                b.push.apply(b, arguments);
                return a
            }
            var b = [];
            a.data = function() {
                return b.join("")
            };
            return a
        }, n = b.createElement = function() {
            var a = h.apply(null, arguments), b = k.createElement("div");
            b.innerHTML = a;
            return b.childNodes[0]
        };
        b.create = n;
        b.byId = function(a) {
            return a && a.nodeType ? a : k.getElementById(a)
        };
        var u = b.head = function(a) {
            a = a || k;
            return a.head || a.getElementsByTagName("head")[0]
        };
        b.document = function(a) {
            return a.document || a.ownerDocument || a
        };
        b.window = function(a) {
            a = b.document(a);
            return a.parentWindow || a.defaultView
        };
        var q = b.remove = function(a) {
            a.parentNode.removeChild(a)
        };
        b.isNode = function(a) {
            return !!a.nodeType
        };
        var p = b.before = function(a, b) {
            a.parentNode.insertBefore(b, a)
        }, t = b.append = function(a, b) {
            a.appendChild(b)
        };
        b.after =
        function(a, b) {
            var c = a.nextSibling;
            c ? p(c, b) : t(a.parentNode, b)
        };
        b.prepend = function(a, b) {
            var c = a.firstChild;
            c ? p(c, b) : t(a, b)
        };
        b.insert = function(a, c, d) {
            if (3 === arguments.length)
                b[a](c, d);
            else {
                var d = a, g = k.getElementsByTagName("script")[0];
                g.parentNode.insertBefore(d, g)
            }
        };
        b.replace = function(a, b) {
            p(a, b);
            q(a)
        };
        b.scriptEval = function(a) {
            var b = k.createElement("script");
            b.text = a;
            u(k).appendChild(b)
        };
        b.winEval = function(a, b) {
            a.kxeval || (a.execScript ? a.execScript("(function(){\n  var win = this;\n  win.kxeval = win.execScript ? \n    function(expr){return win.execScript(expr);} :\n    function(expr){return win.eval(expr);};\n})();") :
            a.eval("(function(){\n  var win = this;\n  win.kxeval = win.execScript ? \n    function(expr){return win.execScript(expr);} :\n    function(expr){return win.eval(expr);};\n})();"));
            return a.kxeval(b)
        };
        b.childElements = function(a) {
            var b = [];
            d.each(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        };
        b.onload = function(a, b) {
            d.isFunction(b) && (b = {
                done: b
            });
            var c = d.once(b.done || d.doNothing), g = d.once(b.fail || d.doNothing), e = a.attachEvent ? "attachEvent": "addEventListener", f = a.attachEvent ? "on": "";
            d.each({
                load: c,
                error: g,
                readystatechange: function() {
                    a.readyState && a.readyState.match(/complete|loaded/) && c()
                }
            }, function(b, c) {
                a[e](f + b, c, !0)
            })
        };
        var s = 1, v = b.hash = function(a) {
            return a._krux_hash || (a._krux_hash = s++)
        }, w = {};
        b.meta = function(a) {
            var b = v(a);
            return w[b] || (w[b] = {
                node: a,
                hash: b
            })
        };
        n = c.navigator;
        b.ie = g.is === g.Browsers.IE;
        var z = b.ff = g.is === g.Browsers.FIREFOX;
        b.ua = n.userAgent.toLowerCase();
        var x = b.ua.match(/(webkit)[ \/]([\w.]+)/) || b.ua.match(/(opera)(?:.*version)?[ \/]([\w.]+)/) || b.ua.match(/(msie) ([\w.]+)/) ||
        0 > b.ua.indexOf("compatible") && b.ua.match(/(mozilla)(?:.*? rv:([\w.]+))?/) || ["unknown", "unknown", 0];
        b.browser = x[1];
        b.version = parseFloat((x[2] || "0").match(/^[0-9]+[.0-9]*/)[0], 10);
        b.msie = g.is === g.Browsers.IE;
        b.mozilla = "mozilla" === x[1]&&!b.msie;
        b.webkit = "webkit" === x[1];
        b.opera = g.is === g.Browsers.OPERA;
        b.gecko =- 1 !== b.ua.indexOf("gecko/");
        b.chrome = g.is === g.Browsers.CHROME;
        b.ie6 = b.msie && "6" === b.version;
        b.ie7 = b.msie && "7" === b.version;
        b.ie8 = b.msie && "8" === b.version;
        b.ie9 = b.msie && "9" === b.version;
        b.ie10 = b.msie &&
        "10" === b.version;
        b.ie11 = b.msie && "11" === b.version;
        b.browserBucket = b.msie ? "IE." + b.version : z ? "Firefox." + (4 > b.version ? "3x" : "4plus") : b.opera ? "Opera" : b.chrome ? "Chrome" : b.webkit ? "Webkit" : "Other";
        b.lang = (n.language || n.systemLanguage || n.browserLanguage || n.userLanguage || "").substring(0, 2);
        e("events");
        var y=!!c.window.attachEvent, D = b._on_ = y ? "attachEvent" : "addEventListener", g = b.type = {
            ready: {
                target: c.document
            },
            load: {
                target: c
            },
            unload: {
                target: c
            },
            beforeunload: {
                target: c
            }
        }, C = b.on = function(a, b, c, d) {
            b = (y ? "on" : "") + b;
            a[D](b, c, d ||!1)
        };
        b.d2on = c.addEventListener ? function(a, b, c) {
            a.addEventListener(b, c, !1);
            return {
                remove: function() {
                    a.removeEventListener(b, c)
                }
            }
        } : function(a, b, c) {
            a.attachEvent(b, c);
            return {
                remove: function() {
                    a.detachEvent(b, c)
                }
            }
        };
        d.each(g, function(a, c) {
            c.nativeName = "ready" !== a ? a : y ? "readystatechanged" : "DOMContentLoaded";
            b[a] = function(b) {
                d.onOnce("dom:" + a, b)
            }
        });
        var A = function(a) {
            return "load" !== a ? function() {
                d.fireOnce("dom:" + a)
            } : function() {
                d.fireOnce("dom:ready");
                d.fireOnce("dom:load")
            }
        };
        b.createHead = function(a,
        c) {
            var g = e("sizzle"), f = d.first(g.find('div[data-id="' + a + '"]'));
            if (f)
                return f;
            b.kxhead = f = b.create("div", {
                "class": "kxhead",
                "data-id": a,
                style: "display:none;"
            });
            c ? b.before(c, f) : b.insert(f);
            var j = b.insert;
            b.insert = function(a) {
                1 === arguments.length ? b.append(f, a) : j.apply(b, arguments)
            };
            return f
        };
        b.kruxDomain = function(a) {
            var b = 2, a = a.match(/^([^:]+)/)[1];
            if (!a.match(/(?:\d{1,3}\.){3}\d{1,3}/))
                return a = a.split(".").reverse(), a[1] && a[1].match(/com?/) && (b = 3), a.slice(0, Math.min(b, a.length)).reverse().join(".")
        };
        b.safeMode = function() {
            return - 1 < c.location.href.indexOf("krux_safe") || b.ie && 6 >= b.version || b.gecko && 4 > b.version ||!c.document.readyState
        };
        if (/^(complete|loaded)$/.test(c.document.readyState))
            A("load")();
        else {
            if (b.ie) {
                C(c, g.load.nativeName, A("ready"));
                n=!1;
                try {
                    n = null == c.window.frameElement
                } catch (E) {}
                k.documentElement.doScroll && n && i()
            }
            d.each(g, function(a, b) {
                C(b.target, b.nativeName, A(a), !1)
            })
        }
        f(d.bind(d.fireOnce, null, "dom:load", {
            timedout: !0
        }), 6E3)
    });
    m("events", function(b, e) {
        var c = e("util"), a = e("class").Class,
        a = b.Events = a.extend(function() {
            this._handlers = {
                ALL: []
            };
            this._happened = {};
            this._super(arguments)
        }, {
            on: function(a, b) {
                if (c.isString(a))(this._handlers[a] || (this._handlers[a] = [])).push(b);
                else if (c.isFunction(a))
                    this._handlers.ALL.push(a);
                else 
                    this.on(function(c) {
                        a.test(c.type) && b(c)
                    })
            },
            off: function(a, b) {
                this._handlers[a] = b ? c.remove(this._handlers[a], b) : []
            },
            fire: function(a, b) {
                b = b || {};
                b.type || (b.type = a);
                this._happened[a] = b;
                "data:change" !== b.type && c.log(b);
                var e = function(a) {
                    a(b)
                };
                c.each(this._handlers[a],
                e);
                c.each(this._handlers.ALL, e);
                return b
            },
            onOnce: function(a, b) {
                var e;
                return (e = this._happened[a]) ? c.defer(b, e) : this.on(a, c.once(b))
            },
            fireOnce: function(a, b) {
                return !this._happened[a] && this.fire(a, b)
            },
            onOnceAll: function(a, b) {
                var a = a.split(" "), b = c.once(b), e = c.bind(function() {
                    c.all(a, function(a) {
                        return this._happened[a]
                    }, this) && b()
                }, this);
                c.each(a, function(a) {
                    this.onOnce(a, e)
                }, this)
            },
            happened: function(a) {
                return this._happened[a]
            },
            clear: function(a) {
                this._happened = c.reduce(this._happened, function(b, c, e) {
                    a &&
                    0 !== c.indexOf(a) && (b[c] = e);
                    return b
                }, {})
            }
        }), h = b.instance = new a;
        h._bind("on off fire onOnce fireOnce onOnceAll happened");
        c.each("on off fire onOnce fireOnce onOnceAll happened".split(" "), function(a) {
            c[a] = h[a]
        })
    });
    m("expression", function(b, e) {
        var c = e("util"), a = c.isArray, h = c.isString, i = {}, d = {}, f, g = b.getDelimiter = function(a) {
            return c.get(a + "DELIM")
        }, k = b.setDelimiter = function(a, b) {
            g(a) !== b && c.set(a + "DELIM", b)
        }, j = b.get = function(a, b) {
            var d = c.get(a);
            b && k(a, b);
            b = g(a);
            return c.isArray(d) ? d : b ? d ? d.split(b) :
            [] : d
        }, o = b.parse = function(a) {
            var b;
            return !c.isString(a) ? a : (b = a.match(/^\$([^:]+)(?::(.*))?$/)) ? j(b[1], b[2]) : (b = a.match(/^\[\s*(.*)\s*\]$/)) ? c.map(b[1].split(/\s*,\s*/), o) : (b = a.match(/^"(.*)"$/)) ? b[1] : a
        }, l = function(a) {
            var b;
            b = (b = f(a[0])) && (i[b] || d[b]);
            return b.apply(this, b.isMacro ? c.rest(a) : c.map(c.rest(a), f))
        };
        f = b.eval = function(b) {
            return a(b) ? l(b) : h(b) ? o(b) : b
        };
        c.extend(i, {
            is: function(a, b) {
                return c.isString(a) ? a.toLowerCase() === String(b).toLowerCase() : a === b
            },
            matches: function(a, b) {
                return RegExp(b).test(a)
            },
            startsWith: function(a, b) {
                return i.matches(a, "^" + c.escapeRegexp(b))
            },
            endsWith: function(a, b) {
                return i.matches(a, c.escapeRegexp(b) + "$")
            },
            contains: function(a, b) {
                var a = a || [], d = ("" + b).toLowerCase();
                return c.isArray(a) ? c.any(a, function(a) {
                    return ("" + a).toLowerCase() === d
                }) : 0 <= ("" + a).toLowerCase().indexOf(d)
            },
            memberOf: function(a, b) {
                return i.contains(b, a)
            },
            intersection: function(a, b) {
                return c.intersection(a, b)
            },
            intersects: function(a, b) {
                a = c.isArray(a) ? a : [a];
                b = c.isArray(b) ? b : [b];
                return c.any(a, function(a) {
                    return i.contains(b,
                    a)
                })
            },
            random: function() {
                return Math.random()
            },
            now: function() {
                return new Date
            }
        });
        c.each(["<", ">", "<=", ">="], function(a) {
            i[a] = new Function("a", "b", "return a " + a + " b")
        });
        c.extend(i, {
            isnt: c.negate(i.is),
            notMemberOf: c.negate(i.memberOf),
            notContains: c.negate(i.contains),
            notIntersects: c.negate(i.intersects)
        });
        c.extend(d, {
            and: function() {
                return c.every(arguments, f)
            },
            or: function() {
                return c.any(arguments, f)
            }
        });
        c.each(d, function(a, b) {
            b.isMacro=!0
        })
    });
    m("feature", function(b, e) {
        var c = e("browser-sniff");
        return {
            hasThirdPartyCookies: function() {
                return c.is !==
                c.Browsers.SAFARI
            }
        }
    });
    m("fingerprint-scraper", function(b, e) {
        var c = e("util"), a = b.all = function(a, b) {
            var b = b || c.yes, d = [], e = c.deref(a), o;
            for (o in e) {
                var l = e[o];
                b(l, o, e) && null != l && d.push(l)
            }
            return d
        };
        b.path = c.deref;
        var h = function(a) {
            return function(b, d) {
                return a(b, function(a, b) {
                    return c.contains(d, b)
                })
            }
        };
        b.keys = h(a);
        var i = b.pluckAll = function(a, b) {
            var b = b || c.yes, d = c.deref(a);
            return c.reduce(d.length ? d : c.values(d), function(a, c) {
                var d, e;
                for (e in c)
                    c.hasOwnProperty(e) && b(d = c[e], e, c) && a.push(d);
                return a
            }, [])
        },
        d = b.pluckKeys = h(i);
        b.pluckKeysWhere = function(a, b, e) {
            return c.filter(d(a, b), e)
        };
        b.primitives = c.partial(a, c._, c.isPrimitive);
        b.serializable = c.partial(a, c._, c.isSerializable)
    });
    m("fingerprint", function(b, e, c) {
        var a = e("util");
        e("data");
        e("dom");
        var h = e("fingerprint-scraper"), i = e("sha1"), e = a.partial(h.keys, "navigator"), d = a.partial(h.keys, "screen"), f = function(a) {
            return a[0] * a[1]
        }, g = a.compose(d, f), k = a.partial(a.deref, c);
        b.canvas = function() {
            var a = document.createElement("canvas"), b = a.getContext("2d");
            b.textBaseline =
            "top";
            b.font = "14px 'Arial'";
            b.textBaseline = "alphabetic";
            b.fillStyle = "#f60";
            b.fillRect(125, 1, 62, 20);
            b.fillStyle = "#069";
            b.fillText("F1ng3r Print", 2, 15);
            b.fillStyle = "rgba(102, 204, 0, 0.7)";
            b.fillText("F1ng3r Print", 4, 17);
            return [a.toDataURL()]
        };
        b.winSize = function() {
            return a.map([["innerHeight", "innerWidth"], ["outerHeight", "outerWidth"]], function(b) {
                return f(a.map(b, k))
            })
        };
        b.mimeTypes = a.partial(h.pluckKeysWhere, "navigator.mimeTypes", ["type", "description", "suffixes"], function(b) {
            return "" !== b && a.isString(b) ||
            a.isNumber(b)&&!a.isNaN(b)
        });
        b.navigatorPrimitives = a.partial(e, "onLine product appCodeName platform appVersion appName vendorSub vendor productSub cookieEnabled language".split(" "));
        b.plugins = a.partial(h.pluckKeys, "navigator.plugins", ["name", "filename", "description"]);
        b.screenDepth = a.partial(d, ["pixelDepth", "colorDepth"]);
        b.screenResolution = a.partial(g, ["availWidth", "availHeight"]);
        b.screenSize = a.partial(g, ["width", "height"]);
        b.timezone = function() {
            return [(new Date).getTimezoneOffset()]
        };
        b.ua = function() {
            var a =
            h.path("navigator.userAgent");
            return [String(a).replace(/([a-z0-9]){8}\-(\1{4})\-\2\-\2\-\1{12}/i, "")]
        };
        var j = function() {
            return a.reduce(b, function(a, b, c) {
                var d;
                try {
                    d = c(), a.push.apply(a, d)
                } catch (e) {}
                return a
            }, [])
        };
        return a.extend(function(b) {
            var c = b.get("fp"), d = b.get("fp_id"), e = i(j().sort().join(""));
            e !== c ? (a.set("fp", e), b.set("fp", e), a.set("fp_id", d), a.set("fp_sent", !0)) : (a.set("fp_id", d), a.set("fp_sent", !1));
            a.onOnce("user_data_response", function(c) {
                if (c.kfuid) {
                    a.set("fp_id", c.kfuid);
                    b.set("fp_id",
                    c.kfuid)
                }
            });
            return e
        }, b, {
            raw: j
        })
    });
    m("flash", function(b, e) {
        var c = function(a) {
            try {
                return a.GetVariable("$version")
            } catch (b) {}
            return ""
        };
        b.version = function() {
            var a = e("util"), b = "", i;
            if (navigator.plugins && 0 < navigator.plugins.length) {
                if (b = a.deref(navigator, "mimeTypes.application/x-shockwave-flash.enabledPlugin.description"))
                    return a = b, i = a.split(/ +/), b = i[2].split(/\./), i = i[3], {
                        installed: !0,
                        raw: a,
                        major: parseInt(b[0], 10),
                        minor: parseInt(b[1], 10),
                        revision: parseInt(i.replace(/[a-zA-Z]/g, ""), 10) || i,
                        revisionStr: i
                    }
            } else if ( - 1 ===
            navigator.appVersion.indexOf("Mac") && window.execScript) {
                try {
                    i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "6,0,21", i.AllowScriptAccess = "always", b = c(i)
                } catch (d) {}
                try {
                    i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = c(i)
                } catch (f) {}
                if (b)
                    return a = b, b = a.split(","), {
                        installed: !0,
                        raw: a,
                        major: parseInt(b[0].split(" ")[1], 10),
                        minor: parseInt(b[1], 10),
                        revision: parseInt(b[2], 10),
                        revisionStr: b[2]
                    }
            }
            return {
                installed: !1,
                raw: "",
                major: "",
                minor: "",
                revision: "",
                revisionStr: ""
            }
        }
    });
    m("geo", function(b, e) {
        var c =
        e("util");
        e("json");
        var a = e("config"), h = e("privacy"), i = e("store");
        e("data");
        e("events");
        var d = function(a) {
            c.forEach(a, function(b, c) {
                var d = String(b).toLowerCase();
                d !== b && (delete a[b], a[d] = c)
            });
            return a
        }, f = function(a) {
            i.impl && i.set("geo", c.paramString(a), 24 * i.HOURS)
        };
        return b = c.extend(function() {
            var d = a();
            if (d.get("params.no_pii") || h.isOptOut())
                return c.forEach(b, function(a, d) {
                    c.isFunction(d) && (b[a] = c.doNothing)
                }), d.set("geo", {}), b;
            var k = d.get("geo");
            c.isString(k) && d.set("geo", k = e("json").JSON.parse(k));
            c.isEmpty(k) ? (c.on("user_data_response", function(a) {
                a = (a || {}).geo || {};
                f(a);
                b.receive(a)
            }), d = i.impl ? c.parseParams(i.get("geo")) : {}, c.isEmpty(d) || b.receive(d)) : (b.receive(k), f(k));
            return b
        }, {
            get: function(a) {
                var b = c.get("geo") || {};
                return a ? b[String(a).toLowerCase()] : b
            },
            set: function(a, e) {
                1 === arguments.length ? c.set("geo", d(a)) : c.get("geo")[String(a).toLowerCase()] = e;
                return b
            },
            receive: function(a) {
                b.set(a);
                c.forEach(["country", "region", "city", "dma"], function(b) {
                    c.set("user_attr_kx_geo_" + b, a[b] || a[b.toUpperCase()])
                });
                c.fireOnce("geo:ready", b);
                return b
            }
        })
    });
    m("hash-set", function(b, e) {
        function c(b, c) {
            this._hash = function(c) {
                var e = a.isFunction(b) ? b(c): c;
                return String(void 0 !== e ? e : String(c))
            };
            this._q = [];
            this.put.apply(this, a.tail(arguments));
            this._items = {}
        }
        var a = e("util");
        c.prototype._thunk = function() {
            var b = this._q, c = this._hash;
            a.forEach(b.splice(0, b.length), function(a) {
                this._items[c(a)] = a
            }, this);
            return this
        };
        c.prototype.put = function(a) {
            this._q.push.apply(this._q, arguments);
            return this
        };
        c.prototype.get = function(a) {
            this._thunk();
            return this._items[this._hash(a)]
        };
        c.prototype.has = function(a) {
            this._thunk();
            return this._hash(a)in this._items
        };
        c.prototype.remove = function(b) {
            this._thunk();
            a.forEach(arguments, function(a) {
                delete this._items[this._hash(a)]
            }, this);
            return this
        };
        c.prototype.toArray = function() {
            this._thunk();
            return a.values(this._items)
        };
        c.prototype.fromArray = function(a) {
            this.put.apply(this, a);
            return this
        };
        c.prototype.toString = function() {
            this._thunk();
            return a.keys(this._items).join(",")
        };
        c.prototype.empty = function() {
            this._q =
            [];
            this._items = {};
            return this
        };
        c.prototype.size = function() {
            this._thunk();
            return a.keys(this._items).length
        };
        return a.extend(function(b, e) {
            var d = new c(b);
            d.put.apply(d, a.tail(arguments));
            return d
        }, {
            HashSet: c
        })
    });
    (function() {
        function b(b, f) {
            var b = b || "", f = f || {}, j;
            for (j in e)
                e.hasOwnProperty(j) && (f.autoFix && (f["fix_" + j]=!0), f.fix = f.fix || f["fix_" + j]);
            var o = {
                comment: /^<\!--/,
                endTag: /^<\//,
                atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                startTag: /^</,
                chars: /^[^<]/
            }, l = {
                comment: function() {
                    var a =
                    b.indexOf("--\>");
                    if (0 <= a)
                        return {
                            content: b.substr(4, a),
                            length: a + 3
                        }
                },
                endTag: function() {
                    var c = b.match(a);
                    if (c)
                        return {
                            tagName: c[1],
                            length: c[0].length
                        }
                },
                atomicTag: function() {
                    var a = l.startTag();
                    if (a) {
                        var c = b.slice(a.length);
                        if (c.match(RegExp("</\\s*" + a.tagName + "\\s*>", "i")) && (c = c.match(RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i"))))
                            return {
                                tagName: a.tagName,
                                attrs: a.attrs,
                                content: c[1],
                                length: c[0].length + a.length
                            }
                    }
                },
                startTag: function() {
                    var a = b.match(c);
                    if (a) {
                        var d = {};
                        a[2].replace(h, function(a, b, c, e,
                        f) {
                            a = c || e || f || i.test(b) && b || null;
                            d[b] = "string" === typeof a ? a.replace(/(&#\d{1,4};)/gm, function(a) {
                                a = a.substring(2, a.length - 1);
                                return String.fromCharCode(a)
                            }) : a
                        });
                        return {
                            tagName: a[1],
                            attrs: d,
                            unary: !!a[3],
                            length: a[0].length
                        }
                    }
                },
                chars: function() {
                    var a = b.indexOf("<");
                    return {
                        length: 0 <= a ? a: b.length
                    }
                }
            }, r = function() {
                for (var a in o)
                    if (o[a].test(b)) {
                        d && console.log("suspected " + a);
                        var c = l[a]();
                        return c ? (d && console.log("parsed " + a, c), c.type = c.type || a, c.text = b.substr(0, c.length), b = b.slice(c.length), c) : null
                    }
            };
            if (f.fix) {
                var n =
                /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i, u = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, q = [];
                q.last = function() {
                    return this[this.length - 1]
                };
                q.lastTagNameEq = function(a) {
                    var b = this.last();
                    return b && b.tagName && b.tagName.toUpperCase() === a.toUpperCase()
                };
                q.containsTagName = function(a) {
                    for (var b = 0, c; c = this[b]; b++)
                        if (c.tagName === a)
                            return !0;
                    return !1
                };
                var p = function(a) {
                    a && "startTag" === a.type && (a.unary = n.test(a.tagName) || a.unary);
                    return a
                }, t = r, s = function() {
                    b =
                    "</" + q.pop().tagName + ">" + b
                }, v = {
                    startTag: function(a) {
                        var c = a.tagName;
                        "TR" === c.toUpperCase() && q.lastTagNameEq("TABLE") ? (b = "<TBODY>" + b, w()) : f.fix_selfClose && u.test(c) && q.containsTagName(c) ? q.lastTagNameEq(c) ? s() : (b = "</" + a.tagName + ">" + b, w()) : a.unary || q.push(a)
                    },
                    endTag: function(a) {
                        q.last() ? f.fix_tagSoup&&!q.lastTagNameEq(a.tagName) ? s() : q.pop() : f.fix_tagSoup && (t(), w())
                    }
                }, w = function() {
                    var a = b, c = p(t());
                    b = a;
                    if (c && v[c.type])
                        v[c.type](c)
                }, r = function() {
                    w();
                    return p(t())
                }
            }
            return {
                append: function(a) {
                    b += a
                },
                readToken: r,
                readTokens: function(a) {
                    for (var b; (b = r())&&!(a[b.type]&&!1 === a[b.type](b)););
                },
                clear: function() {
                    var a = b;
                    b = "";
                    return a
                },
                rest: function() {
                    return b
                },
                stack: []
            }
        }
        var e = function() {
            var a = {}, b = this.document.createElement("div");
            b.innerHTML = "<P><I></P></I>";
            a.tagSoup = "<P><I></P></I>" !== b.innerHTML;
            b.innerHTML = "<P><i><P></P></i></P>";
            a.selfClose = 2 === b.childNodes.length;
            return a
        }(), c = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, a = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
        h = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, i = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i, d=!1;
        b.supports = e;
        b.tokenToString = function(a) {
            var b = {
                comment: function(a) {
                    return "<--" + a.content + "--\>"
                },
                endTag: function(a) {
                    return "</" + a.tagName + ">"
                },
                atomicTag: function(a) {
                    console.log(a);
                    return b.startTag(a) + a.content + b.endTag(a)
                },
                startTag: function(a) {
                    var b = "<" + a.tagName, c;
                    for (c in a.attrs)
                        var d = a.attrs[c],
                        b = b + (" " + c + '="' + (d ? d.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"');
                    return b + (a.unary ? "/>" : ">")
                },
                chars: function(a) {
                    return a.text
                }
            };
            return b[a.type](a)
        };
        b.escapeAttributes = function(a) {
            var b = {}, c;
            for (c in a) {
                var d = a[c];
                b[c] = d && d.replace(/(^|[^\\])"/g, '$1\\"')
            }
            return b
        };
        for (var f in e)
            b.browserHasFlaw = b.browserHasFlaw ||!e[f] && f;
        this.htmlParser = b
    })();
    m("http-jsonp", function(b, e, c) {
        var a = e("class").Class, h = e("util"), i = e("ns"), d = c.document, f = i.self.inFlightKeys = i.self.inFlightKeys || {}, g = b.Request = a.extend(function(a) {
            a.data =
            a.data || {};
            this.options = a;
            if (!a.callback)
                throw "Callback name is required";
            h.extend(this, a);
            this.self && (this.done = h.bind(this.done, this.self), this.fail = h.bind(this.fail, this.self));
            this.plantReceiver();
            this.src = e("http").src(this);
            this._class.all.push(this)
        }, {
            fail: function(a) {
                h.fire("error", {
                    message: "jsonp failed with status " + (a && a.status || "unknown") + " src: " + this.src
                })
            },
            done: function() {},
            receive: function(a) {
                this.time.end = new Date;
                return a.status ? 200 == a.status ? this.done(a.body) : this.fail(a) : this.done(a)
            },
            plantReceiver: function() {
                var a = this.options.callback;
                this.data.callback = i.path + "." + a;
                f[a] = f[a] || 0;
                f[a]++;
                i.self[a] = h.bind(function() {
                    f[a]--;
                    0 === f[a] && delete i.self[a];
                    this.receive.apply(this, arguments)
                }, this)
            },
            sendInline: function() {
                d.write('<script src="' + this.src + '" type="text/javascript"><\/script>');
                return this
            },
            send: function() {
                this.time = {
                    start: new Date
                };
                if (this.inline)
                    return this.sendInline();
                var a = d.createElement("script");
                a.type = "text/javascript";
                a.src = this.src;
                var b = d.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b);
                return this
            },
            __all: []
        });
        b.call = function(a) {
            return (new g(a)).send()
        }
    });
    m("http", function(b, e, c) {
        var a = e("util"), h = e("json").JSON, i = b.protocol = "https:" === c.location.protocol ? "https:": "http:", d = e("browser-sniff");
        e("dom");
        b.maxUrlLength = d.is === d.Browsers.IE ? 2048 : 8E3;
        var f = b.param = function(b, c) {
            var d = a.isString(c) || a.isNumber(c) ? c: h.stringify(c);
            return encodeURIComponent(b) + "=" + encodeURIComponent(d)
        }, g = b.src = function(c) {
            function d() {
                return e + "?" + g.join("&")
            }
            c.url = c.url ||
            "no_url";
            var e = c.url;
            e.match(/^\/\//) && (e = i + e);
            var g = a.map(c.data, f);
            if (!c.noClip)
                for (d().length > b.maxUrlLength && a.fire("http:error", {
                    code : "overflow", message : "URL over max length " + b.maxUrlLength + " length was " + d()
                        .length
            });
            d().length > b.maxUrlLength && g.length;
            )g.pop();
            return d()
        }; b.willClip = function(c) {
            c = b.src(a.extend({
                noClip: !0
            }, c));
            return c.length > b.maxUrlLength && c.length - b.maxUrlLength
        };
        b.pixel = function(b) {
            try {
                (new c.Image).src = g(b), a.fire("http:pixel", b)
            } catch (d) {}
        };
        b.jsonp = function(a) {
            return e("http-jsonp").call(a)
        }
    });
    m("impression", function(b, e) {
        var c = e("util"), a = e("pixel");
        e("data");
        var h = b.send = function(b) {
            c.set("url_pixel", b.url);
            a.sendImpl(b)
        };
        b.init = function(a) {
            h(a)
        }
    });
    m("index", function(b, e) {
        e("init")
    });
    var F = window.postscribe;
    window.postscribe = null;
    m("init", function(b, e, c) {
        var a = c.Krux || ((c.Krux = function() {
            c.Krux.q.push(arguments)
        }).q = []);
        if (!a.commit || a.ns)
            a.commit = a.commit || 1, a.postscribe = c.postscribe, c.postscribe = F, c.Krux = function(b, i) {
                var d;
                i.params = i.params || {};
                d = i.params.control_tag_namespace;
                c.Krux =
                a;
                (d = e("ns").init(d, function() {
                    return e("routes").call
                })) && e("marketer" === i.params.client_type ? "marketer" : "publisher")(d, i)
            }
    });
    m("jslog", function(b, e, c) {
        function a(a) {
            f && c.console && c.console.log("Error:", a);
            h.happened("jslog.pixel") ? a.msg !== k[k.length - 1]&&!(k.length > 10 * Math.random()) && (k.push(a.msg), a.type += "-postload", g.push(a), d.pixel(n()), g = []) : g.push(a)
        }
        var h = e("util"), i = e("dom"), d = e("http"), f =- 1 < c.location.search.indexOf("kxdebug"), g = [], k = [], j = b.errorTypes = ["controltag", "tag", "test", "http", "js"],
        o = c.onerror || function() {
            return !1
        };
        c.onerror = function(b, d, e) {
            try {
                if ("string" !== typeof b)
                    return o.apply(c, arguments);
                var f;
                var g = /https*:\/\/([^\/]+)\/([^?\/]+)/.exec(d);
                f = g && "apiservices.krxd.net" === g[1] ? "service:" + g[2] : g&&-1 < g[1].indexOf("krxd.net") ? "controltag" : "";
                a({
                    type: f || "js",
                    url: d,
                    line: e,
                    msg: b
                });
                return o.apply(c, arguments)
            } catch (v) {
                c.console && c.console.log("Error in the error handler", v)
            }
            return o.apply(c, arguments)
        };
        var l = b.sortByPriority = function(a) {
            function b(a) {
                a = h.indexOf(j, a.type);
                return - 1 !==
                a ? a : j.length
            }
            return h.clone(a).sort(function(a, c) {
                var d = b(a), e = b(c);
                return d < e?-1 : d > e ? 1 : 0
            })
        };
        h.on("tag:fail", function(b) {
            a({
                type: "tag",
                tagid: b.id,
                msg: b.error
            })
        });
        h.on("test:fail", function(b) {
            a({
                type: "test",
                msg: b.code + ":" + b.data
            })
        });
        var r, n = b.getPixelOptions = function(a) {
            for (var a = a || {
                url: h.get("url_log"),
                data: {
                    control_tag_version: c.Krux.version,
                    commit: c.Krux.commit,
                    pubid: h.get("pubid"),
                    siteid: h.get("siteid"),
                    site_name: h.get("site"),
                    browser_bucket: i.browserBucket,
                    version_bucket: r,
                    lang: i.lang,
                    log_version: 1.1,
                    errors: l(g)
                }
            }, b = a.data.errors; d.willClip(a) && b.length;)
                b.pop();
            return a
        };
        h.on("test:all_done", function() {
            if (!(1 > g.length)) {
                var a = 0;
                r = h.get("config_param_control_tag_version");
                a = "alpha" === r ? 1 : 0.1;
                Math.random() > a || (d.pixel(n()), h.fire("jslog.pixel", {
                    errors: g.length
                }), g = [])
            }
        });
        h.on("http:error", function(b) {
            a({
                type: "http",
                msg: b.code + ": " + b.message
            })
        })
    });
    m("json", function(b, e, c) {
        var a = e("util"), h, i, d, f, g = function(a) {
            return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g,
            "\\r").replace(/\t/g, "\\t") + '"'
        };
        f = function(b) {
            ++d;
            b = d <= h && a.isNull(b) ? "null" : a.isUndefined(b) ? "null" : a.isBoolean(b)?!0 === b ? "true" : !1 === b ? "false" : "" + b : a.isString(b) ? g(b) : a.isNumber(b) ? "" + b : a.isArray(b) ? "[" + a.map(b, f).join(",") + "]" : a.isArguments(b) ? "[" + a.map(b, f).join(",") + "]" : "{" + a.map(b, function(a, b) {
                return (i ? "\n" + Array(d + 1).join("  ") : "") + g("" + a) + ":" + f(b)
            }).join(",") + (i ? "\n" + Array(d + 1).join("  ") : "") + "}";
            --d;
            return b
        };
        b.myJSON = {
            stringify: function(a, b) {
                b = b || {};
                i = b.pretty ||!1;
                h = b.maxdepth || 15;
                d = 0;
                return f(a)
            }
        };
        b.JSON = c.JSON || b.myJSON
    });
    m("kxinterchange", function(b, e, c) {
        var b = function(a) {
            var b, a = "kx" + a;
            return ((b = this.localStorage) ? b[a] || "" : (b = c.document.cookie) && (b = b.match("\\b" + a + "=([^;]*)")) && decodeURIComponent(b[1])) || ""
        }, a = e("util"), h = c.Krux, i = h.user, d = h.segments, f = b("user"), g = b("segs");
        e("test").module("kxinterchange-support-snippet", function(b) {
            b.eq("Krux.user exported", i, f);
            b.eq("Krux.segments exported", d, g && g.split(",") || []);
            a.each(d, function(a) {
                b("Krux.dartKeyValues contains segment " +
                a, 0 <= h.dartKeyValues.indexOf("ksgmnt=" + a))
            });
            f && b("Krux.dartKeyValues contains user", 0 <= h.dartKeyValues.indexOf("u=" + f))
        })
    });
    m("marketer", function(b, e, c) {
        var a = e("util"), h = e("config"), i = e("dom");
        e("events");
        var d = e("fingerprint"), f = e("impression"), g = e("privacy"), k = e("routes"), j = e("sizzle"), o = e("store"), l = e("tag"), r = e("timing"), n = /^https?:\/\/([a-z0-9_\-\.]+\.)?krxd\.net(:\d{1,5})?(\/|$)/i, u = b.getParams = function(b) {
            return a.urlParams(i.attr(b, "src"))
        }, q = b.next = function(b) {
            var c = a.find(j.find("script[src*=" +
            b + "]"), function(a) {
                return !i.attr(a, "data-kx-id") && n.test(a.src)
            });
            if (!c)
                throw Error("No node found for " + b);
            return c
        };
        return a.extend(function(b, j) {
            var s = new Date, v = h(j), n = v.get("confid");
            i.createHead(n);
            var z = n + "-" + s.getTime();
            r.start();
            l.claimOneTimers(v.get("tags"));
            a.set("tags", v.get("tags") || []);
            e("jslog");
            s = e("data");
            s.user_attr = s.namespace("user_attr");
            s.page_attr = s.namespace("page_attr");
            e("scrape");
            e("dataprovider");
            e("events");
            var x = q(n);
            i.attr(x, "data-kx-id", z);
            z = u(x);
            if ((x = v.get("services")) &&
            x.impression)
                z.url = x.impression;
            else 
                throw Error("impression service not specified");
            a.set("confid", n);
            a.set("pubid", a.get("pubid") || v.get("publisher.uuid"));
            v.get("params.no_pii") && (a.set("pixel_data__knopii", 1), s.user_attr("kx_lang", null), s.user_attr("kx_tech_browser_language", null));
            e("test").init();
            e("test-visualtags").init();
            a.set("tags", v.get("tags"));
            a.set("config", v.toJSON());
            a.set("version_bucket", v.get("params.control_tag_version"));
            a.set("max_segments", v.get("params.max_segments"));
            a.set("prioritized_segments",
            v.get("prioritized_segments"));
            s.namespace("config_param", v.get("params"));
            n=!/localStorage/.test(a.get("config_param_client_side_storage"));
            e("store").init(n);
            g();
            e("geo")();
            if (i.safeMode())
                a.onOnce("dom:load", a.bind(a.fireOnce, null, "report"));
            else {
                v.get("params.fingerprint")&&!g.isOptOut() && d(o);
                n = a.map(a.get("tags"), e("data-rewrite").tag);
                a.set("tags", n);
                a.set("config_segments", v.get("realtime_segments"));
                a.onOnceAll("dom:load tag:all_done", function() {
                    a.fireOnce("report");
                    v.get("params.remove_kxhead",
                    true) && setTimeout(function() {
                        if (i.kxhead) {
                            i.remove(i.kxhead);
                            i.kxhead = null
                        }
                    }, 250)
                });
                e("adm-events").check3rdParty();
                e("stats");
                e("social");
                k.api();
                if (v.has("context_terms"))
                    a.onOnce("dom:load", function() {
                        e("context-terms").process(v.get("context_terms"))
                    });
                z._kpid = a.get("pubid");
                f.init(z);
                c.setTimeout(l.init, 250)
            }
            r.end()
        }, b)
    });
    m("ns", function(b, e, c) {
        var a = e("util"), h = e("version"), i = c.Krux, d = b.NS_RE = /^ns:([\w\W]+)/, f = b.DEFAULT_NS = "_default", g = b.parseArgs = function(b) {
            var c = b[0];
            (c = c.match(d)) ? (c = c[1],
            b = a.rest(b)) : c = f;
            return {
                nsName: c,
                rest: b
            }
        }, k;
        if (!(k = i.nsRouter)) {
            var j = function() {
                var b = g(arguments), c = j.ns[b.nsName];
                if (!b.rest.length)
                    return c;
                if (c)
                    return c.apply(c, b.rest);
                j.q.push(arguments);
                return a.UNDEFINED
            };
            j.ns = {};
            j.q = [];
            j.defineNamespace = function(b, c) {
                var d = b || f;
                if (j.ns[d])
                    return j.ns[d];
                var e = j.ns[d] = c(b);
                a.extend(e, {
                    nsName: d,
                    isDefault: d === f,
                    path: "Krux.ns." + d
                });
                j.creator = j.creator || e;
                d = j.q.splice(0, j.q.length);
                a.each(d, function(a) {
                    j.apply(null, a)
                });
                return e
            };
            j.nsRouter = j;
            a.extend(j, i);
            k =
            c.Krux = j
        }
        b.router = k;
        b.init = function(d, f) {
            var g = b.self = b.router.defineNamespace(d, f);
            if (g) {
                b.name = g.nsName;
                b.isDefault = g.isDefault;
                b.path = g.path;
                var j = {
                    version: h.version,
                    commit: h.commit,
                    require: e,
                    define: m,
                    _: a
                };
                a.extend(g, j);
                g.isDefault && a.extend(c.Krux, j)
            }
            return g
        }
    });
    m("pixel", function(b, e, c) {
        var a = e("util"), h = e("http"), i = e("config")(), d = e("dom"), f = e("data"), g = e("feature"), k = e("store"), j = c.Krux, o = b.sendImpl = function(b) {
            var c = {};
            a.eachHash(b, function(a, b) {
                if (b = u(a, b))
                    c[a] = b
            });
            var b = a.get("config_param_control_tag_pixel_throttle"),
            d = 100 * Math.random();
            b && b < d || h.pixel({
                url: a.get("url_pixel"),
                data: c
            })
        }, l = b.stringifyValue = function(b) {
            return null != b && (a.isArray(b) ? a.map(b, l).join(q) : b.toString())
        }, r = b.formatters = [], n = b.addFormatter = function(a, b) {
            r.push({
                test: a,
                formatter: b
            })
        }, u = b.format = function(b, c) {
            var d = a.find(r, function(c) {
                return a.isString(c.test) ? c.test === b : c.test.test(b)
            });
            return (d ? d.formatter : l)(c)
        };
        b.tuppleSeparator = ":";
        var q = b.arraySeparator = ",", p = b.send = function(b, c) {
            var d = t(b, c);
            o(d);
            a.fireOnce("pixel", {
                phase: b,
                data: d
            })
        },
        t = b.gather = function(b, p) {
            var t = {
                source: "smarttag",
                fired: b,
                confid: a.get("confid"),
                _kpid: a.get("pubid"),
                _kcp_s: a.get("site"),
                _kcp_sc: a.get("section"),
                _kcp_ssc: a.get("subsection"),
                _kcp_d: a.get("domain"),
                _knifr: c.frames.length,
                _kpref_: c.document.referrer
            };
            !1 === p && (t.pageview = String(p));
            1 !== a.get("pixel_data__knopii") && (t.geo_country = a.get("user_attr_kx_geo_country"), t.geo_region = a.get("user_attr_kx_geo_region"), t.geo_city = a.get("user_attr_kx_geo_city"), t.geo_dma = a.get("user_attr_kx_geo_dma"));
            a.size(a.get("config_segments")) &&
            (t.rtsegs = e("segments").realtime());
            var r = function(b, c) {
                a.eachHash(c, function(a, c) {
                    t[b + a] = c
                })
            };
            r("_kua_", f.user_attr());
            r("_kpa_", f.page_attr());
            r("", f.namespace("pixel_data")());
            var l = c.performance, s = l && l.navigation, h = l && l.timing;
            s && (h&&!(d.gecko && 9 > d.version)) && (l = function(a, b) {
                if (!b) {
                    b = a + "End";
                    a = a + "Start"
                }
                var c = h[a] && h[b] && h[b] - h[a];
                return c == null || c < 0 || c > 3E4?-1 : c
            }, a.extend(t, {
                t_navigation_type: s.type,
                t_dns: l("domainLookup"),
                t_tcp: l("connect"),
                t_http_request: l("request"),
                t_http_response: l("response"),
                t_content_ready: l("navigationStart", "domInteractive"),
                t_window_load: l("navigationStart", "loadEventStart"),
                t_redirect: l("redirect")
            }));
            var s = e("scrape"), l = a.happened("user_data_response"), A = e("ns"), A = A.isDefault ? j: j[A.name] || {};
            a.extend(t, {
                interchange_ran: A.hasOwnProperty("user"),
                store_user: A.user,
                store_segs: A.segments,
                dart_user: s.dart("u"),
                dart_segs: s.dart("ksgmnt") || s.dart("ksg"),
                userdata_was_requested: !!a.happened("user_data_request"),
                userdata_did_respond: !!l,
                store_user_after: k.get("user"),
                store_segs_after: k.get("segs")
            });
            l && a.extend(t, {
                userdata_user: [l.kuid, l.kuid_long],
                userdata_segs: l.segments
            });
            s = k.get("org_user_id");
            a.existy(s) ? a.extend(t, {
                _kuid: s
            }) : i.get("params.fingerprint")&&!g.hasThirdPartyCookies() && a.extend(t, {
                _kuid: a.get("kfuid")
            });
            a.each({
                user: "_kua_",
                page: "_kpa_"
            }, function(b, c) {
                a.each(f[b + "_attr"](), function(a, b) {
                    t[c + a] = b
                })
            });
            if (s = c.sessionStorage)
                try {
                    t.sview = s.krux_views =+ (s.krux_views || 0) + 1
            } catch (E) {}
            s = a.get("tags");
            s = a.filter(s, function(a) {
                return a.time && a.time.end
            });
            a.each(s, function(a, b) {
                t["kplt" +
                b] = a.id;
                r("tag" + a.id + "_timing", {
                    duration: a.time.duration
                })
            });
            n(/tag.*_timing/i, function() {
                return false
            });
            t.jsonp_requests = a.map(e("http-jsonp").Request.all, function(a) {
                return [a.url, a.time.end - a.time.start]
            });
            return t
        }, s = b.sendOnce = a.once(p);
        b.init = function() {
            a.onOnce("report", function() {
                var b = a.bind(s, null, "report");
                a.happened("user_data_fetch_scheduled") ? (a.onOnce("user_data_response", function() {
                    a.defer(b)
                }), c.setTimeout(function() {
                    s("user_data_timeout")
                }, 300)) : b()
            });
            a.onOnce("dom:beforeunload",
            function() {
                s("dom:beforeunload")
            });
            a.onOnce("dom:unload", function() {
                s("dom:unload")
            });
            a.on("navigation", function(b) {
                b = {
                    source: "smarttag",
                    type: "navigation",
                    _kpid: a.get("pubid"),
                    _kcp_s: a.get("site"),
                    _kcp_sc: b.section,
                    _kcp_ssc: b.subsection
                };
                o(b)
            });
            e("test").module("pixel", function(b) {
                b("pixel", a.happened("pixel"))
            })
        }
    });
    (function() {
        function b() {}
        function e(a) {
            return a !== g && null !== a
        }
        function c(a, b, c) {
            var d, e = a && a.length || 0;
            for (d = 0; d < e; d++)
                b.call(c, a[d], d)
        }
        function a(a, b, c) {
            for (var d in a)
                a.hasOwnProperty(d) &&
                b.call(c, d, a[d])
        }
        function h(b, c) {
            a(c, function(a, c) {
                b[a] = c
            });
            return b
        }
        function i(a) {
            try {
                return k.call(a)
            } catch (b) {
                var d = [];
                c(a, function(a) {
                    d.push(a)
                });
                return d
            }
        }
        var d = {
            afterAsync: b,
            afterDequeue: b,
            afterStreamStart: b,
            afterWrite: b,
            beforeEnqueue: b,
            beforeWrite: function(a) {
                return a
            },
            done: b,
            error: function(a) {
                throw a;
            },
            releaseAsync: !1
        }, f = this, g = void 0;
        if (!f.postscribe) {
            var k = Array.prototype.slice, j = function(a, b, c) {
                var d = l + b;
                if (2 === arguments.length)
                    return d = a.getAttribute(d), !e(d) ? d : String(d);
                e(c) && "" !== c ?
                a.setAttribute(d, c) : a.removeAttribute(d)
            }, o = function(a, b) {
                var c = a.ownerDocument;
                h(this, {
                    root: a,
                    options: b,
                    win: c.defaultView || c.parentWindow,
                    doc: c,
                    parser: htmlParser("", {
                        autoFix: !0
                    }),
                    actuals: [a],
                    proxyHistory: "",
                    proxyRoot: c.createElement(a.nodeName),
                    scriptStack: [],
                    writeQueue: []
                });
                j(this.proxyRoot, "proxyof", 0)
            }, l = "data-ps-";
            o.prototype.write = function() {
                [].push.apply(this.writeQueue, arguments);
                for (var a; !this.deferredRemote && this.writeQueue.length;)
                    a = this.writeQueue.shift(), "function" === typeof a ? this.callFunction(a) :
                    this.writeImpl(a)
            };
            o.prototype.callFunction = function(a) {
                var b = {
                    type: "function",
                    value: a.name || a.toString()
                };
                this.onScriptStart(b);
                a.call(this.win, this.doc);
                this.onScriptDone(b)
            };
            o.prototype.writeImpl = function(a) {
                this.parser.append(a);
                for (var b, a = [], c, d; (b = this.parser.readToken())&&!(c=!b ||!("tagName"in b)?!1 : !!~b.tagName.toLowerCase().indexOf("script"))
                    &&!(d=!b ||!("tagName"in b)?!1 : !!~b.tagName.toLowerCase().indexOf("style"));
                )a.push(b);
                this.writeStaticTokens(a);
                c && this.handleScriptToken(b);
                d && this.handleStyleToken(b)
            };
            o.prototype.writeStaticTokens = function(a) {
                a = this.buildChunk(a);
                if (a.actual)
                    return a.html = this.proxyHistory + a.actual, this.proxyHistory += a.proxy, this.proxyRoot.innerHTML = a.html, this.walkChunk(), a
            };
            o.prototype.buildChunk = function(a) {
                var b = this.actuals.length, d = [], e = [], f = [];
                c(a, function(a) {
                    d.push(a.text);
                    if (a.attrs) {
                        if (!/^noscript$/i.test(a.tagName)) {
                            var c = b++;
                            e.push(a.text.replace(/(\/?>)/, " " + l + "id=" + c + " $1"));
                            "ps-script" !== a.attrs.id && "ps-style" !== a.attrs.id && f.push("atomicTag" === a.type ? "" : "<" + a.tagName +
                            " " + l + "proxyof=" + c + (a.unary ? " />" : ">"))
                        }
                    } else 
                        e.push(a.text), f.push("endTag" === a.type ? a.text : "")
                });
                return {
                    tokens: a,
                    raw: d.join(""),
                    actual: e.join(""),
                    proxy: f.join("")
                }
            };
            o.prototype.walkChunk = function() {
                for (var a, b = [this.proxyRoot]; e(a = b.shift());) {
                    var c = 1 === a.nodeType;
                    if (!c ||!j(a, "proxyof"))
                        c && (this.actuals[j(a, "id")] = a, j(a, "id", null)), (c = a.parentNode && j(a.parentNode, "proxyof")) && this.actuals[c].appendChild(a);
                    b.unshift.apply(b, i(a.childNodes))
                }
            };
            o.prototype.handleScriptToken = function(a) {
                var b = this.parser.clear();
                b && this.writeQueue.unshift(b);
                a.src = a.attrs.src || a.attrs.SRC;
                if (a.src && this.scriptStack.length)
                    this.deferredRemote = a;
                else 
                    this.onScriptStart(a);
                var c = this;
                this.writeScriptToken(a, function() {
                    c.onScriptDone(a)
                })
            };
            o.prototype.handleStyleToken = function(a) {
                var b = this.parser.clear();
                b && this.writeQueue.unshift(b);
                a.type = a.attrs.type || a.attrs.TYPE || "text/css";
                this.writeStyleToken(a);
                b && this.write()
            };
            o.prototype.writeStyleToken = function(a) {
                var b = this.buildStyle(a);
                this.insertStyle(b);
                a.content && (b.styleSheet &&
                !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.doc.createTextNode(a.content)))
            };
            o.prototype.buildStyle = function(b) {
                var c = this.doc.createElement(b.tagName);
                c.setAttribute("type", b.type);
                a(b.attrs, function(a, b) {
                    c.setAttribute(a, b)
                });
                return c
            };
            o.prototype.insertStyle = function(a) {
                this.writeImpl('<span id="ps-style"/>');
                var b = this.doc.getElementById("ps-style");
                b.parentNode.replaceChild(a, b)
            };
            o.prototype.onScriptStart = function(a) {
                a.outerWrites = this.writeQueue;
                this.writeQueue = [];
                this.scriptStack.unshift(a)
            };
            o.prototype.onScriptDone = function(a) {
                a !== this.scriptStack[0] ? this.options.error({
                    message: "Bad script nesting or script finished twice"
                }) : (this.scriptStack.shift(), this.write.apply(this, a.outerWrites), !this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), this.deferredRemote = null))
            };
            o.prototype.writeScriptToken = function(a, b) {
                var c = this.buildScript(a), d = this.shouldRelease(c), e = this.options.afterAsync;
                a.src && (c.src = a.src, this.scriptLoadHandler(c, !d ? function() {
                    b();
                    e()
                } :
                e));
                try {
                    this.insertScript(c), (!a.src || d) && b()
                } catch (f) {
                    this.options.error(f), b()
                }
            };
            o.prototype.buildScript = function(b) {
                var c = this.doc.createElement(b.tagName);
                a(b.attrs, function(a, b) {
                    c.setAttribute(a, b)
                });
                b.content && (c.text = b.content);
                return c
            };
            o.prototype.insertScript = function(a) {
                this.writeImpl('<span id="ps-script"/>');
                var b = this.doc.getElementById("ps-script");
                b.parentNode.replaceChild(a, b)
            };
            o.prototype.scriptLoadHandler = function(a, b) {
                function c() {
                    a = a.onload = a.onreadystatechange = a.onerror = null
                }
                var d = this.options.error;
                h(a, {
                    onload: function() {
                        c();
                        b()
                    },
                    onreadystatechange: function() {
                        /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                    },
                    onerror: function() {
                        var e = {
                            message: "remote script failed " + a.src
                        };
                        c();
                        d(e);
                        b()
                    }
                })
            };
            o.prototype.shouldRelease = function(a) {
                return !/^script$/i.test(a.nodeName) ||!(!this.options.releaseAsync ||!a.src ||!a.hasAttribute("async"))
            };
            var r, n = function() {
                var a = t.shift(), b;
                a && (b = a[a.length - 1], b.afterDequeue(), a.stream = u.apply(null, a), b.afterStreamStart())
            }, u = function(a, c, d) {
                function e(a) {
                    a =
                    d.beforeWrite(a);
                    s.write(a);
                    d.afterWrite(a)
                }
                s = new o(a, d);
                s.id = p++;
                s.name = d.name || s.id;
                q.streams[s.name] = s;
                var f = a.ownerDocument, g = {
                    close: f.close,
                    open: f.open,
                    write: f.write,
                    writeln: f.writeln
                };
                h(f, {
                    close: b,
                    open: b,
                    write: function() {
                        return e(i(arguments).join(""))
                    },
                    writeln: function() {
                        return e(i(arguments).join("") + "\n")
                    }
                });
                var j = s.win.onerror || b;
                s.win.onerror = function(a, b, c) {
                    d.error({
                        msg: a + " - " + b + ":" + c
                    });
                    j.apply(s.win, arguments)
                };
                s.write(c, function() {
                    h(f, g);
                    s.win.onerror = j;
                    d.done();
                    s = null;
                    n()
                });
                return s
            },
            q = function(c, g, p) {
                "function" === typeof p && (p = {
                    done: p
                });
                var j = p, j = j || {};
                a(d, function(a, b) {
                    e(j[a]) || (j[a] = b)
                });
                var p = j, c = /^#/.test(c) ? f.document.getElementById(c.substr(1)): c.jquery ? c[0]: c, l = [c, g, p];
                c.postscribe = {
                    cancel: function() {
                        l.stream ? l.stream.abort() : l[1] = b
                    }
                };
                p.beforeEnqueue(l);
                t.push(l);
                s || n();
                return c.postscribe
            }, p = 0, t = [], s = null;
            r = h(q, {
                streams: {},
                queue: t,
                WriteStream: o
            });
            f.postscribe = r
        }
    })();
    m("privacy", function(b, e) {
        var c = e("util");
        e("events");
        var a = e("feature"), h = e("http"), i = e("routes"), d = e("store"),
        f = e("config");
        e("events");
        e("data");
        var g = {
            ATTEMPT_CHANGE: "optout_attempt_change",
            CHANGE: "optout_change",
            ERROR: "optout_error",
            REQUEST: "optout_request",
            RESPONSE: "optout_response"
        }, k = b.OPTOUT_ALLOWED_KEYS = [/^tag\d*\.day$/, "optout"];
        b.Events = c.clone(g);
        var j = function(a) {
            return c.extend({
                code: "success",
                type: "no_change",
                time: new Date
            }, a)
        }, o=!1, l = b.fetch = function(a) {
            c.fire(g.REQUEST);
            h.jsonp({
                callback: "kxjsonp_optOutCheck",
                done: a,
                fail: c.partial(c.fire, g.ERROR),
                url: f().get("services.is_optout")
            })
        }, r = function(b) {
            c.fire(g.ATTEMPT_CHANGE);
            var d = c.partial(c.fire, g.CHANGE);
            a.hasThirdPartyCookies() ? h.jsonp({
                callback: "kxjsonp_optOutChange",
                done: d,
                fail: c.partial(c.fire, g.ERROR),
                url: f().get("services.set_opt" + (b ? "out" : "in"))
            }) : d(j({
                type: "optout_change"
            }))
        }, n = b.optOut = function(a) {
            (a = c.existy(a) ? a : !0) ? (u() || r(a), d.allowOnly.apply(d, k), d.clear(), d.set("optout", "true")) : (u() && r(a), d.allowAll(), d.remove("optout"));
            o = a;
            f().set("dnt", o)
        }, u = b.isOptOut = function() {
            return !(!o&&!f().get("dnt")&&!(c.isFunction(d.get) && "true" === d.get("optout") || /^(?:yes|1)$/.test(c.G.navigator.doNotTrack)))
        };
        b.handler = function(a) {
            c.fire(g.RESPONSE, a);
            a.optout || /^(?:OPTOUT|DNT)$/i.test(a._kuid_ || "") ? n() : (!a || c.existy(a.optout) || c.existy(a._kuid_)) && n(!1)
        };
        return c.extend(function() {
            l(b.handler);
            var a = function() {
                u() && n();
                c.off(d.READY_EVENT, a)
            };
            c.on(d.READY_EVENT, a);
            i.simple("optout", function(a, b) {
                b = c.isFunction(b) ? b : c.noop;
                if (c.existy(a)) {
                    if (a === u()) {
                        b(null, j());
                        return 
                    }
                } else 
                    return u();
                var d = function() {
                    c.off(g.CHANGE, e);
                    c.off(g.ERROR, f)
                }, e = function(a) {
                    b(null, a);
                    d()
                }, f = function(a) {
                    b(Error(a.message), a);
                    d()
                };
                c.on(g.CHANGE, e);
                c.on(g.ERROR, f);
                n(a)
            })
        }, b)
    });
    m("publisher", function(b, e, c) {
        var a = c.location, h = e("config"), i = c.document;
        e("dom");
        var d = e("feature"), f = e("fingerprint"), g = e("privacy"), k = e("store"), j = e("util"), o = e("timing");
        return function(b, r) {
            o.start();
            var n = h(r), u = e("dom");
            e("jslog");
            var q = e("data");
            q.user_attr = q.namespace("user_attr");
            q.page_attr = q.namespace("page_attr");
            var p = e("routes");
            e("scrape");
            e("dataprovider");
            e("events");
            i.getElementById("kxinterchange") && e("kxinterchange");
            var t = n.get("confid");
            u.createHead(t);
            j.set("confid", t);
            j.set("pubid", j.get("pubid") || n.get("publisher.uuid"));
            j.set("domain", u.kruxDomain(a.host));
            j.set("site", j.get("site") || n.get("site.name") || j.get("domain"));
            j.set("siteid", j.get("siteid") || n.get("site.id"));
            n.get("params.no_pii") && (j.set("pixel_data__knopii", 1), q.user_attr("kx_lang", null), q.user_attr("kx_tech_browser_language", null));
            e("pixel").init();
            e("test").init();
            e("test-visualtags").init();
            j.set("tags", n.get("tags"));
            j.set("url", c.location.href);
            j.set("config",
            n.toJSON());
            j.set("version_bucket", n.get("params.control_tag_version"));
            j.set("max_segments", n.get("params.max_segments"));
            j.set("prioritized_segments", n.get("prioritized_segments"));
            q.namespace("url", n.get("services"));
            q.namespace("config_param", n.get("params"));
            q=!/localStorage/.test(j.get("config_param_client_side_storage"));
            q = k.init(q);
            g();
            e("geo")();
            if (u.safeMode())
                c.console && c.console.log("Krux running in safe mode, no tags will be delivered"), j.onOnce("dom:load", j.bind(j.fireOnce, null, "report"));
            else {
                n.get("params.fingerprint")&&!g.isOptOut() && f(k);
                var t = n.get("params.user_id_cookie"), s = k.cookie.get(t);
                j.existy(t) && s&&!d.hasThirdPartyCookies() ? (q.set("org_user_id", s), j.set("user", s)) : q.remove("org_user_id");
                q = j.map(j.get("tags"), e("data-rewrite").tag);
                j.set("tags", q);
                j.set("config_segments", n.get("realtime_segments"));
                j.onOnceAll("dom:load tag:all_done", function() {
                    j.fireOnce("report");
                    n.get("params.remove_kxhead", true) && setTimeout(function() {
                        if (u.kxhead) {
                            u.remove(u.kxhead);
                            u.kxhead = null
                        }
                    },
                    250)
                });
                e("adm-events").check3rdParty();
                e("stats");
                e("social");
                p.api();
                if (n.get("context_terms"))
                    j.onOnce("dom:load", function() {
                        e("context-terms").process(n.get("context_terms"))
                    });
                e("tag").init();
                n.get("params.recommend") && e("recommend")
            }
            o.end()
        }
    });
    m("recommend", function(b, e, c) {
        var a = e("util"), h = e("dom"), i = e("flash").version(), d = c.document;
        e("data");
        var f = e("geo");
        e("routes").simple("recommend", function(b, k) {
            var k = k || {}, j = h.byId(b);
            if (!j)
                throw Error('Could not find target element with id "' + b + '"');
            var o = k.stylesheet;
            if (o&&!h.byId(b + "_style")) {
                var l = d.createElement("link");
                l.id = b + "_style";
                l.rel = "stylesheet";
                l.type = "text/css";
                l.href = o;
                h.append(h.head(d), l)
            }
            o = {
                pubid: a.get("pubid"),
                test: k.test || 0,
                site_id: a.get("siteid"),
                url: c.document.location.href || "",
                ref: c.document.referrer || "",
                cat: k.cat || "",
                search: k.search || "",
                utc: (new Date).getTimezoneOffset(),
                lang: c.navigator.language,
                fv: [i.major, i.minor].join("."),
                h: c.screen.height,
                w: c.screen.width,
                co: f.get("country") || "",
                st: f.get("region") || "",
                met: f.get("dma") ||
                "",
                pcode: f.get("zip") || "",
                kuid: a.get("user") || "",
                seg: (a.get("user_segments") || []).join(","),
                allimps: 1
            };
            l = k.links || 5;
            o.nm = (k.fields || [0, 1, 2, 3]).join(",");
            o.nv = "1.0";
            o.ni = l;
            e("http").jsonp({
                url: a.get("url_recommendation"),
                callback: "kxjsonp_recommendation",
                data: o,
                done: function(a) {
                    var b, c = h.byId(k.template);
                    c && (b = h.text(c));
                    b = e("template").compile(b || '<ul>{{#entry}}<li><a href="{{actionlink}}">{{title}}</a> - {{description}}</li>{{/entry}}</ul>');
                    j.innerHTML = b.render(a)
                }
            })
        })
    });
    m("routes", function(b, e,
    c) {
        var a = e("util"), h = e("ns"), i = b.routes = [], d = b.q = c.Krux && c.Krux.q || [], f = b.getHandler = function(b) {
            return a.find(i, function(a) {
                return a[0].test(b)
            })
        }, g = b.call = function(b) {
            var c = arguments, g;
            if (h.NS_RE.test(b))
                return g = h.router(b), 1 < a.size(c) ? g.apply(g, a.tail(c)) : g;
            if (a.isFunction(b))
                return b.call(null, e);
            if (g = f(b))
                return g[1].apply(null, c);
            d.push(a.toArray(c));
            return a.UNDEFINED
        }, k = b.understands = function(a) {
            return !!f(a)
        }, j = b.replay = function() {
            var b = a.clone(d);
            d.length = 0;
            a.each(b, function(a) {
                g.apply(null,
                a)
            })
        }, o = b.add = function(a, b) {
            i.push([a, b]);
            j()
        }, l = b.regexp = function(b, c) {
            o(b, function(d) {
                return c.apply(this, [d.match(b)].concat(a.rest(arguments)))
            })
        }, r = b.simple = function(b, c) {
            l(RegExp("^" + b + "$"), function() {
                return c.apply(null, a.rest(arguments))
            })
        };
        b.once = function(c, d) {
            var e = function() {
                i = b.routes = a.remove(i, e);
                return d.apply(this, arguments)
            };
            r(c, e)
        };
        b.namespace = function(b, c) {
            l(RegExp("^" + b + "\\.(.*)"), function(b) {
                c[b[1]].apply(c, a.rest(arguments))
            })
        };
        b.api = function() {
            l(/^fire:(.+)/, function(b, c) {
                return a.fire(b[1],
                c)
            });
            l(/^on:(.+)/, function(b, c) {
                return a.on(b[1], c)
            });
            l(/^fireOnce:(.+)/, function(b, c) {
                return a.fireOnce(b[1], c)
            });
            l(/^onOnce:(.+)/, function(b, c) {
                return a.onOnce(b[1], c)
            });
            l(/^require:?(.*)/, function(a, b) {
                return a[1] ? e(a[1]) : b ? e(b) : e
            });
            r("define", m);
            r("JSON.stringify", e("json").JSON.stringify);
            r("log", a.log);
            r("page:load", function(b, d) {
                var f = e("pixel");
                try {
                    a.set("url", String(c.location)), g("tag:reload", function(a) {
                        b && b(a);
                        f.send("ajax", d && d.pageView)
                    })
                } catch (p) {
                    b(p)
                }
            })
        };
        r("understands", k)
    });
    m("scrape",
    function(b, e, c) {
        var a = e("util"), h = e("data"), i = e("sizzle"), d = e("routes"), f = e("dom"), g = b.defaultExcludes = "sz dcopt ord tile pos uri click ksgmnt null undefined".split(" "), k = b._dart = function() {
            function d(a) {
                return i.find("script[src*=" + e + "]", a).concat(i.find("iframe[src*=" + e + "]", a))
            }
            var e = ".doubleclick.net", f = {}, g = [], g = g.concat(d(c.document)), p = i.find("iframe[src*=://" + c.location.hostname + "]").concat(i.find("iframe[src^=/]"));
            a.each(p, function(a) {
                try {
                    g = g.concat(d(a.contentWindow.document))
                } catch (b) {}
            });
            b.dartElements = g;
            a.each(g, function(b) {
                var c, b = (c = i.attr(b, "src").match(/[^;]*;(.*)/)) && c[1];
                c = a.parseKeyValues(b, ";");
                a.eachHash(c, function(b, c) {
                    var d = f[b];
                    d && d !== c ? (a.isArray(d) || (d = [d]), a.isArray(c) ? d = d.concat(c) : d.push(c), f[b] = a.uniq(d)) : f[b] = c
                })
            });
            if (g[0]) {
                var j, p = (j = i.attr(g[0], "src").match(/\.doubleclick\.net(\/[^;]*)/)) ? j[1]: "";
                h.page_attr({
                    dfpsite: p.split("/")[2],
                    dfpzone: p.split("/")[3]
                })
            }
            return f
        }, j, o = b.extensions = {}, e = b.extension = function(a, c) {
            o[a] = b[a] = c;
            d.simple("scrape." + a, c);
            return c
        };
        a.eachHash({
            dart: function(b) {
                if (!j || a.isEmpty(j))
                    j = k();
                var c = new a.Set(b && b._excludes || g);
                return null == b ? j : a.isString(b) ? j[b] : a.eachHash(b, function(b, d) {
                    var e = h.namespace(b);
                    a.isArray(d) ? a.each(d, function(a) {
                        j[a] && e(a, j[a])
                    }) : "*" === d ? a.eachHash(j, function(a, b) {
                        c[a] || e(a, b)
                    }) : a.set(b, j[d])
                })
            },
            dom: function(a) {
                var b = a.match(/^(.+):([^:]+)$/), a = i.find(b[1])[0], b = b[2];
                return a && b && ("text" === b ? f.text(a) : "value" === b ? f.value(a) : "@" === b.charAt(0) && f.attr(a, b.substr(1)))
            },
            link_rel: function(a) {
                return b.dom("link[rel=" +
                a + "]:@href")
            },
            link_rev: function(a) {
                return b.dom("link[rev=" + a + "]:@href")
            },
            meta_name: function(a) {
                return b.dom("meta[name=" + a + "]:@content")
            },
            meta_property: function(a) {
                return b.dom("meta[property=" + a + "]:@content")
            },
            opengraph: function(a) {
                return b.meta_property("og:" + a)
            },
            url_path: function(a) {
                return b.location.pathname.split("/")[a]
            },
            url_param: function(a) {
                var c;
                return (c = b.location.href.match("\\b" + a + "(?:=|\\b)([^&]*)")) && (decodeURIComponent(c[1]) ||!0)
            },
            url_hash: function(a) {
                return [""].concat(String(c.location.hash).replace(/^(?:#|\/){0,}/,
                "").split("/"))[a]
            },
            url_host: function(a) {
                return b.location.hostname.split(".").reverse()[a - 1]
            },
            url_domain: function(c) {
                return a.last(b.location.hostname.split("."), c).join(".")
            },
            cookie: function(a) {
                var b;
                return (b = c.document.cookie) && (b = b.match("\\b" + a + "=([^;]*)")) && decodeURIComponent(b[1])
            },
            data: function(b) {
                return a.get(b)
            },
            javascript: function(b) {
                try {
                    return c.eval(b)
                } catch (d) {
                    a.fire("error", d)
                }
            },
            js_global: function(a) {
                try {
                    for (var b = c, d = a.split("."); b && d[0];)
                        b = b[d.shift()];
                    return b
                } catch (e) {}
            }
        }, e);
        b.location =
        c.location;
        var l = b.scrape = function(b) {
            var c = {};
            a.eachHash(b, function(d, e) {
                var f = a.findHash(e, function(a) {
                    return o[a] && a
                });
                if (!f)
                    return a.fire("error", {
                        message: "No extension found",
                        scrape: b
                    });
                f = o[f](e[f]);
                c[d] = f
            });
            return c
        };
        d.simple("scrape", function(b) {
            b = l(b);
            a.set(b);
            return b
        })
    });
    m("segments", function(b, e) {
        var c = e("util"), a = e("config")(), h = e("data"), i = e("privacy"), d = e("store"), f = c.param("segs");
        f && c.set("user_segments", f.split(","));
        var g = b.allRealtime = c.pluck(c.get("config_segments"), "id"), k = e("expression").eval,
        j = b.realtime = function() {
            if (i.isOptOut())
                return [];
            for (var a = [], b = c.get("config_segments") || [], e = 24 * d.HOURS, f = 0, g = b.length, j, l; f < g; ++f)
                j = b[f], l = "rt_" + j.id, k(j.test) && d.set(l, "1", e), d.get(l) && a.push(j.id);
            return a
        }, o = b.prioritizedSegments = function() {
            return c.get("prioritized_segments") || []
        }, l = b.maxSegments = function() {
            return c.get("max_segments") || 0
        }, r = b.compute = function() {
            if (i.isOptOut())
                c.set("user_segments", []), d.set("segs", "");
            else if (!f) {
                var a;
                a = (a = d.get("segs")) ? a.split(",") : [];
                a = c.difference(a,
                g);
                c.set("user_segments", a);
                var b = j().concat(a);
                c.set("user_segments", b);
                d.set("segs", b.join(","));
                var e = o();
                a = l();
                0 < e.length && 0 < a && (e = c.filter(e, function(a) {
                    return c.contains(b, a)
                }), e = e.slice(0, a), c.set("user_segments", e), d.set("segs", e.join(",")))
            }
        }, n = b.handleUserDataResponse = function(a) {
            a.segments && d.set("segs", a.segments.join(","), 72 * d.HOURS);
            a.prvx_segments && (d.set("prvx_segs", a.prvx_segments.join(","), 72 * d.HOURS), c.set("user_prvx_segments", a.prvx_segments));
            a.shared_segments && (d.set("shared_segments",
            a.shared_segments.join(","), 72 * d.HOURS), c.set("user_shared_segments", a.shared_segments));
            a.kuid && (d.set("user", a.kuid, 180 * d.DAYS), c.set("user", a.kuid));
            a.technographics && (d.set("tech", c.paramString(a.technographics), 30 * d.DAYS), u());
            a.fp_id && d.set("fp_id", a.fp_id);
            r();
            c.fire("user_data_response", a)
        }, u = b.readTechFromStore = function() {
            var a = d.get("tech");
            return a ? (1 !== c.get("pixel_data__knopii") && c.eachHash(c.parseKeyValues(a), function(a, b) {
                c.set("user_attr_kx_tech_" + a, b)
            }), !0) : !1
        }, q = {
            url: c.get("url_userData"),
            data: {
                pubid: c.get("pubid")
            },
            callback: "kxjsonp_userData",
            done: n
        };
        if (n = d.get("org_user_id"))
            q.data._kuid = n;
        if ((a = a.get("params.fingerprint")) && c.get("fp_sent"))
            a = c.get("fp_id"), q.data.kxfp = c.get("fp"), a && (q.data.kfuid = a);
        else if (a && (a = c.get("fp_id")))
            q.data.kfuid = a;
        u() || (q.data.technographics = 1);
        a = b.fetch = function() {
            c.fireOnce("user_data_request");
            e("http").jsonp(q)
        };
        c.get("segWait") || (c.set("segWait", 1, 5 * d.MINUTES), c.onOnce("dom:load", a), c.fire("user_data_fetch_scheduled"));
        d.get("segs");
        r();
        a = [];
        d.get("prvx_segs") && (a = d.get("prvx_segs").split(","));
        c.set("user_prvx_segments", a);
        a = [];
        d.get("shared_segments") && (a = d.get("shared_segments").split(","));
        c.set("user_shared_segments", a);
        a = c.throttle(r, 100);
        h.user_attr.change(a);
        h.page_attr.change(a);
        h.namespace("event").change(r);
        e("test").module("segments", function(a) {
            c.happened("user_data_fetch_scheduled") && a("user_data_response", c.happened("user_data_response"))
        })
    });
    m("sha1", function(b, e) {
        var c = e("crypto-util"), a = e("class").Class, h = e("routes"),
        i = [], d = {
            20: 1518500249,
            40: 1859775393,
            60: 1894007588,
            80: 899497514
        }, f = a.extend(function(a) {
            this._message = "";
            this.reset();
            this._append(a)
        }, {
            _minBufferSize: 0,
            finalize: function() {
                var a = this._data, b = 8 * c.calculateSigBytesForWords(a);
                a[b>>>5]|=128<<24 - b%32;
                a[(b + 64>>>9<<4) + 14] = Math.floor(b / c.MAX_WORD);
                a[(b + 64>>>9<<4) + 15] = b;
                this._process();
                return String(this)
            },
            toString: function() {
                return c.fromWordsToHex(this._hash)
            },
            clone: function() {
                var a = new f(this._message);
                a._hash = this._hash.slice(0);
                return a
            },
            reset: function() {
                this._hash =
                this._getInitial();
                this._data = [];
                return this
            },
            update: function(a) {
                this._append(a);
                return this
            },
            _append: function(a) {
                this._message += a;
                a = c.fromUtf8ToWords(a);
                this._data.push.apply(this._data, a);
                return this
            },
            _process: function() {
                var a = this._data, b = 16 * (a.length * c.BYTES_PER_WORD / 64), d;
                if (b) {
                    for (d = 0; d < b; d += 16)
                        this._processBlock(a, d);
                    d = a.splice(0, b)
                }
                return d
            },
            _processBlock: function(a, b) {
                for (var c = this._hash, e = c[0], f = c[1], h = c[2], n = c[3], u = c[4], q = 0; 80 > q; q++) {
                    if (16 > q)
                        i[q] = a[b + q] | 0;
                    else {
                        var p = i[q - 3]^i[q - 8]^i[q -
                        14]^i[q - 16];
                        i[q] = p<<1 | p>>>31
                    }
                    p = (e<<5 | e>>>27) + u + i[q];
                    p = 20 > q ? p + ((f & h|~f & n) + d["20"]) : 40 > q ? p + ((f^h^n) + d["40"]) : 60 > q ? p + ((f & h | f & n | h & n) - d["60"]) : p + ((f^h^n) - d["80"]);
                    u = n;
                    n = h;
                    h = f<<30 | f>>>2;
                    f = e;
                    e = p
                }
                c[0] = c[0] + e | 0;
                c[1] = c[1] + f | 0;
                c[2] = c[2] + h | 0;
                c[3] = c[3] + n | 0;
                c[4] = c[4] + u | 0
            },
            _getInitial: function() {
                var a = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                return function() {
                    return a.slice(0)
                }
            }()
        }), a = function(a) {
            return (new f(a)).finalize()
        };
        h.simple("hash:sha1", a);
        return a
    });
    m("sizzle", function(b, e, c) {
        var a = e("util"),
        e = e("dom"), h = /^(?:(\w+)|(\*(?=\W|$))|\.([\w\-]+)|#([\w\-]+))([#\.\w\-]*)/, i = /^\[([\w\-]+)(?:(\W?=)(["']?)([^\]]*)\3(["']?))?\]/, d = b.attr = e.attr, f = b.hasAttr = function(a, b) {
            var c;
            return a.hasAttribute ? a.hasAttribute(b) : !(!(c = a.attributes[b]) ||!c.nodeValue)
        }, g = function(b, c, e, g) {
            var h = function(a) {
                return function(b) {
                    return !!d(b, c).match(a)
                }
            }, i = g && a.escapeRegexp(g), e=!e ? function(a) {
                return f(a, c)
            } : "=" === e ? function(a) {
                return d(a, c) === g
            } : "!=" === e ? function(a) {
                return d(a, c) !== g
            } : "*=" === e ? function(a) {
                return 0 <=
                d(a, c).indexOf(g)
            } : "~=" === e ? h("(^|\\s)" + i + "(\\s|$)") : "|=" === e ? h("^" + i + "\\b") : "$=" === e ? h(i + "$") : "^=" === e ? h("^" + i) : "false";
            return a.filter(b, e)
        }, k = b.getElementsByClassName = function(b, d) {
            a.isString(b) && (d = b, b = c.document);
            return b.getElementsByClassName ? b.getElementsByClassName(d) : g(b.getElementsByTagName("*"), "class", "~=", d)
        };
        b.find = function(b, d) {
            d = d || c.document;
            a.isArray(d) || (d = [d]);
            for (var e = d, f = [], n, u = 0, q = function(b, c) {
                return c[1] ? a.toArray(b.getElementsByTagName(c[1])) : c[2] ? a.toArray(b.getElementsByTagName("*")) :
                c[3] ? a.toArray(k(b, c[3])) : c[4] && (c = b.getElementById(c[4])) ? [c] : []
            }, p = function() {
                f = f.concat(e === d ? [] : e);
                e = d
            }, t = function(a, b) {
                return function() {
                    var c = n.match(a);
                    if (!c)
                        return 0;
                    b(c);
                    return c[0].length
                }
            }, s = t(h, function(b) {
                var c = [];
                a.each(e, function(a) {
                    c = c.concat(q(a, b))
                });
                e = c;
                for (var d, f = b[5] || ""; d = f.match(/^([\.#])([\w\-]+)/);)
                    e = "." === d[1] ? g(e, "class", "~=", d[2]) : g(e, "id", "=", d[2]), f = f.slice(d[0].length);
                if (f)
                    throw "parse error";
            }), v = t(i, function(a) {
                e = g(e, a[1], a[2], a[4])
            }), w = t(/\s*/, function() {}), t = t(/,/,
            p); n = b.slice(u);) {
                var m;
                if (!(m = s()))
                    if (!(m = v()))
                        if (!(m = t()))
                            if (!(m = w()))
                                throw "selector parse error";
                u += m
            }
            p();
            return f
        }
    });
    m("social", function(b, e, c) {
        var a = e("util");
        a.on("social", function(b) {
            var d = a.rewriter({
                facebook: "fb",
                twitter: "twttr"
            });
            e("http").pixel({
                url: a.get("url_social"),
                data: {
                    _kpid: a.get("pubid"),
                    _kcp_s: a.get("site"),
                    _ksoc_t: d(b.provider),
                    _ksoc_e: b.action,
                    _ksoc_url: b.url,
                    _kpa_title: c.document.title
                }
            })
        });
        var h = function(b, c) {
            a.fire("social", {
                provider: "facebook",
                action: b,
                url: c
            })
        }, i = b.init_facebook =
        function() {
            var b = (b = c.FB) && (b = b.Event) && b.subscribe && a.bind(b.subscribe, b);
            b ? (b("edge.create", a.bind(h, null, "like")), b("edge.remove", a.bind(h, null, "unlike")), b("message.send", a.bind(h, null, "send")), b = "done") : b = "fail";
            a.fire("social.init_facebook", {
                status: b
            })
        }, d = b.init_twitter = function() {
            var b = (b = c.twttr) && (b = b.events) && b.bind && a.bind(b.bind, b);
            b ? (b("tweet", function(b) {
                a.fire("social", {
                    provider: "twitter",
                    action: "tweet",
                    url: b && b.target && "IFRAME" === b.target.nodeName ? b.target.src: null
                })
            }), b = "done") : b =
            "fail";
            a.fire("social.init_twitter", {
                status: b
            })
        };
        e("routes").simple("social.init", function() {
            c.setTimeout(function() {
                i();
                d()
            }, 1E3)
        })
    });
    m("stateful", function(b, e) {
        var c = e("util"), a = e("class").Class, h = e("json").JSON, i = /(?:([a-z]*):)?([^:]+)$/i, d = a.extend(function(a, b) {
            this._type = "Stateful";
            this._raw = a || {};
            this._defaults = b || {};
            this._handlers = {
                all: []
            }
        }, {
            get: function(a) {
                var b = this._raw[a];
                return c.existy(b) ? b : this._defaults[a]
            },
            set: function(a, b) {
                var c = this._raw[a];
                this._raw[a] = b;
                this._fire("set", a, c, b);
                return this
            },
            has: function(a, b) {
                return c.existy(this._raw[a]) || b && c.existy(this._defaults[a])
            },
            remove: function(a, b) {
                var d = this._raw[a];
                delete this._raw[a];
                c.existy(d) && this._fire("remove", a, d, c.UNDEFINED);
                b && (d = this._defaults[a], delete this._defaults[a], c.existy(d) && this._fire("removeDefault", a, d, c.UNDEFINED));
                return this
            },
            watch: function(a, b, d) {
                if (!c.isFunction(b))
                    throw Error("watch expected function, but got: " + String(b) + "\nContext: " + String(this));
                var e, h;
                h = a.match(i);
                "all" === a ? (h = "", e = a) : !h[1] ||
                "all" === h[1] ? (h = h[2], e = "all", a = e + ":" + h) : (e = h[1], h = h[2]);
                var l = this._mkRemover(a, b);
                this._addHandler(a, {
                    context: d,
                    fn: b,
                    key: h,
                    remove: l,
                    type: e
                });
                return l
            },
            toString: function() {
                return String(this._type) + h.stringify(this._raw)
            },
            _fire: function(a, b, d, e, h) {
                var i = this._handlers;
                c.forEach(i.all.concat(i["all:" + b] || []).concat(i[a + ":" + b] || []), function(a) {
                    a = a.fn.call(a.context || null, b, d, e);
                    c.existy(a) && ((h || this._raw)[b] = a)
                }, this);
                return this
            },
            _addHandler: function(a, b) {
                var c = this._handlers[a];
                c || (c = this._handlers[a] =
                []);
                c.push(b);
                return this
            },
            _mkRemover: function(a, b) {
                var d = this;
                return function() {
                    d._handlers[a] = c.filter(d._handlers[a], function(a) {
                        return a.fn !== b
                    })
                }
            }
        });
        return c.extend(function(a, b) {
            return new d(a, b)
        }, {
            Stateful: d
        }, b)
    });
    m("stats", function(b, e) {
        var c = e("util");
        e("events");
        e("data");
        var a = {
            counter: {},
            time: {}
        }, h = b.get = function(b, c) {
            return a[b][c]
        }, i = b.set = function(b, c, d) {
            a[b][c] = d
        };
        b.time = function(a, b) {
            i("time", a, b)
        };
        var d = b.inc = function(a) {
            var b = h("counter", a) || 0;
            i("counter", a, b + 1)
        }, f = b.incPath = function(a) {
            var b =
            a.split(".");
            c.times(b.length, function(a) {
                d(c.first(b, a + 1).join("."))
            })
        }, g = "." + e("dom").browserBucket, k = "." + c.get("config_param_control_tag_version"), j = k + g;
        f("views" + j);
        c.get("config_param_control_tag_stats_prefix");
        c.on("social", function(a) {
            d(a.provider + "." + a.action)
        });
        c.on("tag:done", function() {
            f("tags_delivered" + j)
        });
        var o = 0;
        c.on("error", function() {
            try {
                10 < o || (o++, f("js_errors" + j))
            } catch (a) {}
        });
        if (Math.random() < (".alpha" === k ? 1 : ".beta" === k || ".stable" === k ? 0.01 : 0.001))
            c.onOnce("tag:all_done", function() {
                function b(a,
                c) {
                    return "controltagv2." + a + ":" + c + "|" + this
                }
                var d = c.map(a.counter, c.bind(b, "c")).concat(c.map(a.time, c.bind(b, "ms"))).join(",");
                e("http").pixel({
                    url: c.get("url_stats"),
                    data: {
                        q: d,
                        format: "gif"
                    }
                })
            })
    });
    m("store", function(b, e, c) {
        var a = e("util"), h = e("whitelist");
        e("events");
        var i = c.localStorage, d = c.document, f = ["set", "get", "remove", "namespace"], g = f.concat(["clear"]), k = "", j = b.whitelist = h(h.ALL);
        a.forEach(["allowAll", "allowNone", "allowOnly"], function(c) {
            b[c] = a.bind(j[c], j)
        });
        h = b.SECONDS = 1;
        h = b.MINUTES = 60 * h;
        h =
        b.HOURS = 60 * h;
        b.DAYS = 24 * h;
        var o = b.READY_EVENT = "store:ready", l = function(a) {
            b.prefix && 0 !== a.indexOf(k) && (a = k + a);
            return a
        }, r = {
            domain: function(a) {
                return "; domain=" + a
            }
        }, n = function(a) {
            return j.has(b.prefix ? a.replace(RegExp("^" + k), "") : a) || j.has(a)
        }, m = b.cookie = {
            _COOKIE_START: "(?:^|\\s|;)",
            set: function(a, b, c, d) {
                return n(a) ? m._set.apply(m, arguments) : ""
            },
            get: function(a) {
                var b, a = m._COOKIE_START + a + "=([^;]*)";
                return d.cookie && (b = d.cookie.match(a)) && c.decodeURIComponent(b[1])
            },
            remove: function(a) {
                m._set(a, 0, - 1)
            },
            namespace: function(a) {
                var b = {};
                d.cookie.replace(RegExp(m._COOKIE_START + a + "([^=]*)=([^;]*)", "g"), function(a, c) {
                    b[decodeURIComponent(a)] = decodeURIComponent(c)
                });
                return b
            },
            clear: function() {
                a.forEach(d.cookie.split(/\s*;\s*/), function(a) {
                    a = a.split("=").shift();
                    n(a) || m.remove(l(a))
                })
            },
            _set: function(a, b, c, e) {
                c = c ? "; expires=" + (new Date( + new Date + 1E3 * c)).toUTCString() : "";
                a = a + "=" + encodeURIComponent(b) + m._optionsToCookie(e) + ";path=/" + c;
                return d.cookie = a
            },
            _optionsToCookie: function(b) {
                var c = "";
                a.forEach(b, function(a,
                b) {
                    a in r && (c += r[a](b))
                });
                return c
            }
        };
        if (h = i)
            var q = {
                set: function(a, b, c) {
                    if (!n(a))
                        return "";
                        i.setItem(a, b);
                        c ? i.setItem("_" + a, + new Date( + new Date + 1E3 * c)) : i.removeItem("_" + a);
                        return b
                    },
                    get: function(a) {
                        var b = i.getItem(a), a = i.getItem("_" + a);
                        return !a ? b : a > new Date ? b : null
                    },
                    remove: function(a) {
                        i.removeItem(a);
                        i.removeItem("_" + a)
                    },
                    namespace: function(a) {
                        var c = {}, d, e;
                        for (e in i)
                            if (d = e.match("^" + a + "(.*)"))
                                c[d[1]] = b.get(d[1]);
                                return c
                            },
                            clear: function() {
                                for (var a in i)
                                    n(a) || p.remove(l(a))
                                }
                            }, h = a.reduce(f, function(a,
                            b) {
                                a[b] = function() {
                                    try {
                                        return q[b].apply(q, arguments)
                                    } catch (a) {}
                                };
                                return a
                            }, a.clone(q));
        var p = b.local = h, e = e("ns"), k = b.prefix = "kx" + (e.isDefault ? "" : e.name + "_");
        b.init = function(c) {
            var d;
            if (p&&!c)
                try {
                    p.set("kxtest", "test"), d = "test" === p.get("kxtest") && p, p.remove("kxtest")
            } catch (e) {}
            var j = d = d || m, c = a.clone(j), c = a.reduce(f, function(b, c) {
                b[c] = function(b) {
                    return j[c].apply(j, [l(b || "")].concat(a.rest(arguments)))
                };
                return b
            }, c), h = b.impl = c;
            a.forEach(g, function(a) {
                b[a] = h[a]
            });
            a.fire(o);
            return h
        }
    });
    m("tag-actions",
    function(b, e) {
        var c = e("util"), a = e("tag-delivery"), h = e("tag-delivery-timing"), i = e("events").instance;
        b.DEFAULT = "all";
        var d = c.yes;
        b[b.DEFAULT] = function(b) {
            i.clear("tag");
            var e = c.filter(c.get("tags"), function(b) {
                var c = d(b);
                c && a.forget(b);
                return c
            });
            h(e);
            var k;
            c.on("tag:all_done", k = function() {
                b(null);
                c.off("tag:all_done", k)
            })
        }
    });
    m("tag-delivery-timing", function(b, e) {
        var c = e("util"), a = e("tag-delivery"), h = e("dom");
        e("store");
        var i = b.isDone = function(a) {
            return !!(a.time && a.time.end || a.error ||!1 === a.metCriteria)
        };
        return c.extend(function(b) {
            c.each(b, a.uniqueName);
            var e, g = function() {
                c.all(b, i) && (g = c.doNothing, c.fireOnce("tag:all_done"))
            };
            c.on("tag:done", function() {
                g()
            });
            c.on("tag:fail", function() {
                g()
            });
            g();
            var k = function(j) {
                e = c.filter(b, function(a) {
                    return a.timing === j
                });
                c.each(e, function(b) {
                    a.meetsCriteria(b) && a.deliver(b)
                });
                g()
            }, j = c.once(k, null, "onload"), o = c.once(k, null, "onready");
            k("asap");
            h.ready(o);
            h.load(j);
            a.init();
            return {
                deliver: k,
                isDone: function() {
                    return g !== c.doNothing
                }
            }
        }, b, a)
    });
    m("tag-delivery", function(b,
    e, c) {
        var a = e("util"), h = e("config"), i = c.document, d = e("dom"), f = e("geo"), g = e("hash-set"), k = e("ns");
        e("sizzle");
        var j = e("store"), o = e("x-frame");
        e("data");
        var l = new Date, l = new Date( + l + 864E5), r = new Date(l.getFullYear(), l.getMonth(), l.getDate()), n = b.mode = "1" === a.param("writeCapture") ? "writeCapture": "1" === a.param("writeNativeIframe") ? "nativeIframe": "1" === a.param("writeOld") ? "old": "newWriter";
        b.forget = function(a) {
            a.metCriteria = void 0;
            a.time = {};
            return a
        };
        var m = {};
        a.set("tagsByName", m);
        var q = b.uniqueName = function(a) {
            if (!a.named) {
                for (var b =
                a.name, c = 1; m[b];)
                    c++, b = a.name + "_" + c;
                a.name = b;
                a.named=!0;
                m[b] = a
            }
        }, p = function(a, b, e, f) {
            a.root = b;
            var g = z(a.content), p = c.Krux, j = function() {
                k.isDefault || (c.Krux = k.self)
            }, i = function() {
                k.isDefault || (c.Krux = p)
            }, l = function() {
                e();
                h().get("remove_kxhead", !0) && setTimeout(function() {
                    d.remove(b)
                }, 250)
            };
            "writeCapture" === n ? (c.$(b).attr("data-writeCapture", "true"), c.$(b).writeCapture().html(g, {
                done: l
            })) : "nativeIframe" === a.method || "native" === n && a.target ? (b.ownerDocument.write(g), l()) : c.Krux.postscribe(b, g, {
                afterDequeue: j,
                afterStreamStart: i,
                done: l,
                error: f,
                name: a.name,
                releaseAsync: !0
            })
        };
        e("routes").simple("nativeTag", function(c) {
            "native" === n && b.deliver(a.get("tagsByName")[c])
        });
        e("routes").simple("writeHtml", function(a, c, d) {
            b.deliver({
                name: d || "Anonymous",
                content: c,
                target: a[0] || a
            })
        });
        var t = function(a, b) {
            var c;
            if (a.target) {
                c = a.target;
                var e;
                c = c && c.nodeType ? c : c && (e = c.match(/^(head|body)$/)) ? i[e[1]] : i.getElementById(c)
            } else 
                c = d.kxhead || i.getElementsByTagName("script")[0].parentNode;
            if (e = c)
                d[a.target_action || "append"](e,
                b);
            return e
        }, s = function(a) {
            var b = {
                "class": "kxtag",
                "data-id": a.id,
                "data-alias": a.name
            };
            b["class"] += a.target ? " kxtargeted" : " kxinvisible";
            return b
        }, v = {
            eval: function(b, c, d) {
                var e;
                try {
                    e = a.globalEval(b.content)
                } catch (f) {
                    d(f)
                }
                c();
                return e
            },
            apply: function(a, b, c) {
                var d;
                try {
                    d = a.content.apply(null)
                } catch (e) {
                    c(e)
                }
                b();
                return d
            },
            document: function(a, b, c) {
                var e = d.createElement("span", s(a));
                t(a, e) ? p(a, e, b, c) : b();
                return e
            },
            iframeCommon: function(a, b, e, f) {
                var g = s(a);
                g.width = g.height = 0;
                g.scrolling = "no";
                g.style = "overflow:hidden;";
                var j = a.name.match(/(\d+)x(\d+)/);
                j && (g.width = j[1] + "px", g.height = j[2] + "px");
                g = d.createElement("iframe", g);
                if (t(a, g)) {
                    j = g.contentWindow.document;
                    j.open();
                    j.write('<html><head></head><body style="margin:0;">');
                    f.leaveOpen || j.close();
                    if (f.onIframe)
                        f.onIframe(g);
                    g.contentWindow.Krux = c.Krux;
                    p(a, g.contentWindow.document.body, b, e)
                } else 
                    b();
                return g
            },
            nativeIframe: function(a, b, c, d) {
                d.leaveOpen=!0;
                return v.iframeCommon(a, b, c, d)
            },
            iframe: function(a, b, c, d) {
                return v.iframeCommon(a, b, c, d)
            }
        }, w = b.templateData = function() {
            return {
                pubid: a.get("pubid"),
                site: a.get("site"),
                geo: f.get(),
                now: new Date
            }
        }, z = b.runTemplate = function(b, c) {
            e("underscore").templateSettings = {
                evaluate: /\{%([\s\S]+?)%\}/g,
                interpolate: /\{\{([\s\S]+?)\}\}/g,
                escape: /\{%-([\s\S]+?)%\}/g
            };
            w.now = new Date;
            return a.template(b, c || w())
        };
        b.meetsCriteria = function(b) {
            if (b.once_per_page && y.has(b))
                return b.metCriteria=!1;
            if (!b.criteria)
                return b.metCriteria=!0;
            if ("native" === n && b.target)
                return b.metCriteria=!1;
            a.set("now", new Date);
            if (b.freq_cap) {
                var c =+ j.get("tag" + b.id + ".day") || 0;
                a.set("tag_deliveries_today",
                c)
            }
            return b.metCriteria = e("expression").eval(b.criteria)
        };
        var x = 0, y = k.self._oneTimeTags = k.self._oneTimeTags || g(function(a) {
            return a.id
        });
        b.deliver = function(b, c) {
            var d = b.once_per_page;
            if (d && y.has(b))
                return y.get(b).id;
            c = c || {};
            q(b);
            b.id = b.id || x++;
            b.time = {
                mode: "async",
                start: a.ms()
            };
            b.method = b.method || (a.isFunction(b.content) ? "apply" : "document");
            "nativeIframe" === n && b.target && (b.method = "nativeIframe");
            var e = function(c) {
                b.error = c && c.message && c || {
                    message: "unknown error"
                };
                a.fire("tag:fail", {
                    id: b.id,
                    alias: b.name,
                    error: b.error.message
                })
            };
            a.fire("tag:started", {
                id: b.id,
                alias: b.name
            });
            var f;
            try {
                return f = v[b.method](b, function() {
                    b.time.end = a.ms();
                    b.time.duration = b.time.end - b.time.start;
                    if (b.freq_cap) {
                        var c = "tag" + b.id + ".day", d =+ j.get(c) || 0;
                        j.set(c, d + 1, (r - new Date) / 1E3)
                    }
                    a.fire("tag:done", {
                        id: b.id,
                        alias: b.name
                    })
                }, e, c), d && y.put({
                    id: b.id
                }), f
            } catch (g) {
                return e(g), null
            }
        };
        b.claimOneTimers = function(b) {
            var b = a.filter(b, function(a) {
                return a.once_per_page
            }), c = a.now(), d = a.map(b, function(a) {
                return {
                    id: a.id,
                    claimId: c
                }
            });
            d.length &&
            (o.broadcast({
                tags: d
            }), o.listen(function(b) {
                b = b.data.tags;
                b = a.filter(b, function(b) {
                    var c = a.find(d, function(a) {
                        return a.id === b.id
                    });
                    return b.claimId < c.claimId
                });
                y.put.apply(y, b)
            }))
        };
        b.init = a.once(function() {
            e("test").module("tag-delivery", function(b) {
                var c = {};
                a.each(a.get("tags"), function(d) {
                    !a.happened("dom:beforeunload")&&!a.happened("dom:unload") && b("tag_considered", null != d.metCriteria, d.name);
                    if (d.metCriteria) {
                        var e = d.time || {}, f = e.start;
                        b("tag_delivered", e.end, d.name);
                        e = d.timing;
                        b("tag_valid_timing_name",
                        e, e);
                        e = c[e] = c[e] || {
                            lastStart: 0
                        };
                        b("tag_order", f >= e.lastStart, d.name);
                        e.lastStart = f
                    }
                })
            })
        })
    });
    m("tag", function(b, e) {
        var c = e("util"), a = e("tag-actions"), h = e("tag-delivery-timing"), i = e("routes"), d = e("store");
        e("x-frame");
        e("data");
        c.extend(b, h, {
            Timing: h
        });
        b.init = function() {
            var a = d.get("org_user_id") || d.get("kuid");
            a && c.set("user", a);
            c.onOnce("user_data_response", function() {
                var a = c.get("user");
                a && d.set("kuid", a)
            });
            h(c.get("tags"))
        };
        i.regexp(/^tag:reload:?(.*)$/, function(b, c) {
            var d = b[1] || a.DEFAULT;
            if (d in
            a)
                try {
                    a[d](c)
            } catch (e) {
                c(e)
            } else 
                c(new TypeError("Krux('tags') has no method: " + d))
        })
    });
    m("template", function(b) {
        var e = {}, c = "undefined" !== typeof b ? b: e, a = function(a) {
            return String(null === a || void 0 === a ? "" : a)
        }, h = function(a, b, c) {
            var d;
            b && "object" === typeof b && (null != b[a] ? d = b[a] : c && (b.get && "function" === typeof b.get) && (d = b.get(a)));
            return d
        };
        c.Template = function(a, b, c, d) {
            a = a || {};
            this.r = a.code || this.r;
            this.c = c;
            this.options = d || {};
            this.text = b || "";
            this.partials = a.partials || {};
            this.subs = a.subs || {};
            this.buf = ""
        };
        c.Template.prototype = {
            r: function() {
                return ""
            },
            v: function(b) {
                b = a(b);
                return j.test(b) ? b.replace(i, "&amp;").replace(d, "&lt;").replace(f, "&gt;").replace(g, "&#39;").replace(k, "&quot;") : b
            },
            t: a,
            render: function(a, b, c) {
                return this.ri([a], b || {}, c)
            },
            ri: function(a, b, c) {
                return this.r(a, b, c)
            },
            ep: function(a, b) {
                var c = this.partials[a], d = b[c.name];
                if (c.instance && c.base === d)
                    return c.instance;
                if ("string" === typeof d) {
                    if (!this.c)
                        throw Error("No compiler available.");
                    d = this.c.compile(d, this.options)
                }
                if (!d)
                    return null;
                this.partials[a].base =
                d;
                if (c.subs) {
                    b.stackText || (b.stackText = {});
                    for (var e in c.subs)
                        b.stackText[e] || (b.stackText[e] = void 0 !== this.activeSub && b.stackText[this.activeSub] ? b.stackText[this.activeSub] : this.text);
                    e = d;
                    var d = c.subs, c = c.partials, f = this.stackSubs, g = this.stackPartials, p = b.stackText, j = function() {}, h = function() {};
                    j.prototype = e;
                    h.prototype = e.subs;
                    var i;
                    e = new j;
                    e.subs = new h;
                    e.subsText = {};
                    e.buf = "";
                    f = f || {};
                    e.stackSubs = f;
                    e.subsText = p;
                    for (i in d)
                        f[i] || (f[i] = d[i]);
                    for (i in f)
                        e.subs[i] = f[i];
                    g = g || {};
                    e.stackPartials = g;
                    for (i in c)
                        g[i] ||
                        (g[i] = c[i]);
                    for (i in g)
                        e.partials[i] = g[i];
                    d = e
                }
                return this.partials[a].instance = d
            },
            rp: function(a, b, c, d) {
                a = this.ep(a, c);
                return !a ? "" : a.ri(b, c, d)
            },
            rs: function(a, b, c) {
                var d = a[a.length - 1];
                if (o(d))
                    for (var e = 0; e < d.length; e++)
                        a.push(d[e]), c(a, b, this), a.pop();
                else 
                    c(a, b, this)
            },
            s: function(a, b, c, d, e, f, g) {
                if (o(a) && 0 === a.length)
                    return !1;
                "function" === typeof a && (a = this.ms(a, b, c, d, e, f, g));
                c=!!a;
                !d && (c && b) && b.push("object" === typeof a ? a : b[b.length - 1]);
                return c
            },
            d: function(a, b, c, d) {
                var e = a.split("."), f = this.f(e[0], b,
                c, d), g = this.options.modelGet, j = null;
                if ("." === a && o(b[b.length - 2]))
                    f = b[b.length - 1];
                else 
                    for (var p = 1; p < e.length; p++)
                        a = h(e[p], f, g), null != a ? (j = f, f = a) : f = "";
                if (d&&!f)
                    return !1;
                !d && "function" === typeof f && (b.push(j), f = this.mv(f, b, c), b.pop());
                return f
            },
            f: function(a, b, c, d) {
                for (var e=!1, f = null, g=!1, p = this.options.modelGet, j = b.length - 1; 0 <= j; j--)
                    if (f = b[j], e = h(a, f, p), null != e) {
                        g=!0;
                        break
                    }
                if (!g)
                    return d?!1 : "";
                !d && "function" === typeof e && (e = this.mv(e, b, c));
                return e
            },
            ls: function(b, c, d, e, f) {
                var g = this.options.delimiters;
                this.options.delimiters = f;
                this.b(this.ct(a(b.call(c, e)), c, d));
                this.options.delimiters = g;
                return !1
            },
            ct: function(a, b, c) {
                if (this.options.disableLambda)
                    throw Error("Lambda features disabled.");
                return this.c.compile(a, this.options).render(b, c)
            },
            b: function(a) {
                this.buf += a
            },
            fl: function() {
                var a = this.buf;
                this.buf = "";
                return a
            },
            ms: function(a, b, c, d, e, f, g) {
                b = b[b.length - 1];
                a = a.call(b);
                if ("function" === typeof a) {
                    if (d)
                        return !0;
                    d = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] :
                    this.text;
                    return this.ls(a, b, c, d.substring(e, f), g)
                }
                return a
            },
            mv: function(b, c, d) {
                c = c[c.length - 1];
                b = b.call(c);
                return "function" === typeof b ? this.ct(a(b.call(c)), c, d) : b
            },
            sub: function(a, b, c, d) {
                var e = this.subs[a];
                e && (this.activeSub = a, e(b, c, this, d), this.activeSub=!1)
            }
        };
        var i = /&/g, d = /</g, f = />/g, g = /\'/g, k = /\"/g, j = /[&<>\"\']/, o = Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }, l = "undefined" !== typeof b ? b: e, r = function(a) {
            return a.trim ? a.trim() : a.replace(/^\s*|\s*$/g, "")
        }, n =
        function(a, b, c) {
            if (b.charAt(c) !== a.charAt(0))
                return !1;
            for (var d = 1, e = a.length; d < e; d++)
                if (b.charAt(c + d) !== a.charAt(d))
                    return !1;
            return !0
        }, m = function(a, b, c, d) {
            for (var b = [], e = null, f = e = null, e = c[c.length - 1]; 0 < a.length;) {
                f = a.shift();
                if (e && "<" === e.tag&&!(f.tag in B))
                    throw Error("Illegal content in < super tag.");
                var g;
                if (!(g = l.tags[f.tag] <= l.tags.$))
                    a: {
                    g = f;
                    for (var j = d, p = 0, h = j.length; p < h; p++)
                        if (j[p].o === g.n) {
                            g.tag = "#";
                            g=!0;
                            break a
                        }
                        g = void 0
                }
                if (g)
                    c.push(f), f.nodes = m(a, f.tag, c, d);
                else {
                    if ("/" === f.tag) {
                        if (0 === c.length)
                            throw Error("Closing tag without opener: /" +
                            f.n);
                        e = c.pop();
                        if (a = f.n !== e.n) {
                            a:
                            {
                                a = 0;
                                for (c = d.length; a < c; a++)
                                    if (d[a].c === f.n && d[a].o === e.n) {
                                        d=!0;
                                        break a
                                    }
                                d = void 0
                            }
                            a=!d
                        }
                        if (a)
                            throw Error("Nesting error: " + e.n + " vs. " + f.n);
                        e.end = f.i;
                        return b
                    }
                    "\n" === f.tag && (f.last = 0 === a.length || "\n" === a[0].tag)
                }
                b.push(f)
            }
            if (0 < c.length)
                throw Error("missing closing tag: " + c.pop().n);
            return b
        }, q = function(a) {
            var b = [], c;
            for (c in a.partials)
                b.push('"' + p(c) + '":{name:"' + p(a.partials[c].name) + '", ' + q(a.partials[c]) + "}");
            var b = "partials: {" + b.join(",") + "}, subs: ", d, a = a.subs;
            c = [];
            for (d in a)
                c.push('"' + p(d) + '": function(c,p,t,i) {' + a[d] + "}");
            d = "{ " + c.join(",") + " }";
            return b + d
        }, p = function(a) {
            return a.replace(y, "\\\\").replace(w, '\\"').replace(z, "\\n").replace(x, "\\r")
        }, t = function(a) {
            return ~a.indexOf(".") ? "d" : "f"
        }, s = function(a, b) {
            var c = "<" + (b.prefix || "") + a.n + C++;
            b.partials[c] = {
                name: a.n,
                partials: {}
            };
            b.code += 't.b(t.rp("' + p(c) + '",c,p,"' + (a.indent || "") + '"));';
            return c
        }, b = function(a, b) {
            b.code += "t.b(t.t(t." + t(a.n) + '("' + p(a.n) + '",c,p,0)));'
        }, v = /\S/, w = /\"/g, z = /\n/g, x = /\r/g, y = /\\/g;
        l.tags = {
            "#": 1,
            "^": 2,
            "<": 3,
            $: 4,
            "/": 5,
            "!": 6,
            ">": 7,
            "=": 8,
            _v: 9,
            "{": 10,
            "&": 11,
            _t: 12
        };
        l.scan = function(a, b) {
            function c() {
                0 < p.length && (h.push({
                    tag: "_t",
                    text: String(p)
                }), p = "")
            }
            function d(a, b) {
                c();
                var e;
                if (e = a)
                    a: {
                    e=!0;
                    for (var f = s; f < h.length; f++)
                        if (e = l.tags[h[f].tag] < l.tags._v || "_t" === h[f].tag && null === h[f].text.match(v), !e) {
                            e=!1;
                            break a
                        }
                }
                if (e) {
                    e = s;
                    for (var g; e < h.length; e++)
                        if (h[e].text) {
                            if ((g = h[e + 1]) && ">" === g.tag)
                                g.indent = h[e].text.toString();
                                h.splice(e, 1)
                        }
                } else 
                    b || h.push({
                        tag: "\n"
                    });
                i=!1;
                s = h.length
            }
            var e = a.length,
            f = 0, g = null, j = null, p = "", h = [], i=!1, k = 0, s = 0, t = "{{", o = "}}";
            b && (b = b.split(" "), t = b[0], o = b[1]);
            for (k = 0; k < e; k++)
                0 === f ? n(t, a, k) ? (--k, c(), f = 1) : "\n" === a.charAt(k) ? d(i) : p += a.charAt(k) : 1 === f ? (k += t.length - 1, g = (j = l.tags[a.charAt(k + 1)]) ? a.charAt(k + 1) : "_v", "=" === g ? (t = a, j = k, k = "=" + o, f = t.indexOf(k, j), o = r(t.substring(t.indexOf("=", j) + 1, f)).split(" "), t = o[0], o = o[o.length - 1], k = f + k.length - 1, f = 0) : (j && k++, f = 2), i = k) : n(o, a, k) ? (h.push({
                    tag: g,
                    n: r(p),
                    otag: t,
                    ctag: o,
                    i: "/" === g ? i - t.length: k + o.length
                }), p = "", k += o.length - 1, f = 0, "{" ===
                g && ("}}" === o ? k++ : (j = h[h.length - 1], "}" === j.n.substr(j.n.length - 1) && (j.n = j.n.substring(0, j.n.length - 1))))) : p += a.charAt(k);
            d(i, !0);
            return h
        };
        var B = {
            _t: !0,
            "\n": !0,
            $: !0,
            "/": !0
        };
        l.stringify = function(a) {
            return "{code: function (c,p,i) { " + l.wrapMain(a.code) + " }," + q(a) + "}"
        };
        var C = 0;
        l.generate = function(a, b, c) {
            C = 0;
            var d = {
                code: "",
                subs: {},
                partials: {}
            };
            l.walk(a, d);
            return c.asString ? this.stringify(d, b, c) : this.makeTemplate(d, b, c)
        };
        l.wrapMain = function(a) {
            return 'var t=this;t.b(i=i||"");' + a + "return t.fl();"
        };
        l.template =
        l.Template;
        l.makeTemplate = function(a, b, c) {
            var d = this.makePartials(a);
            d.code = new Function("c", "p", "i", this.wrapMain(a.code));
            return new this.template(d, b, this, c)
        };
        l.makePartials = function(a) {
            var b, c = {
                subs: {},
                partials: a.partials,
                name: a.name
            };
            for (b in c.partials)
                c.partials[b] = this.makePartials(c.partials[b]);
            for (b in a.subs)
                c.subs[b] = new Function("c", "p", "t", "i", a.subs[b]);
            return c
        };
        l.codegen = {
            "#": function(a, b) {
                b.code += "if(t.s(t." + t(a.n) + '("' + p(a.n) + '",c,p,1),c,p,0,' + a.i + "," + a.end + ',"' + a.otag + " " + a.ctag +
                '")){t.rs(c,p,function(c,p,t){';
                l.walk(a.nodes, b);
                b.code += "});c.pop();}"
            },
            "^": function(a, b) {
                b.code += "if(!t.s(t." + t(a.n) + '("' + p(a.n) + '",c,p,1),c,p,1,0,0,"")){';
                l.walk(a.nodes, b);
                b.code += "};"
            },
            ">": s,
            "<": function(a, b) {
                var c = {
                    partials: {},
                    code: "",
                    subs: {},
                    inPartial: !0
                };
                l.walk(a.nodes, c);
                var d = b.partials[s(a, b)];
                d.subs = c.subs;
                d.partials = c.partials
            },
            $: function(a, b) {
                var c = {
                    subs: {},
                    code: "",
                    partials: b.partials,
                    prefix: a.n
                };
                l.walk(a.nodes, c);
                b.subs[a.n] = c.code;
                b.inPartial || (b.code += 't.sub("' + p(a.n) + '",c,p,i);')
            },
            "\n": function(a, b) {
                b.code += 't.b("\\n"' + (a.last ? "" : " + i") + ");"
            },
            _v: function(a, b) {
                b.code += "t.b(t.v(t." + t(a.n) + '("' + p(a.n) + '",c,p,0)));'
            },
            _t: function(a, b) {
                var c = b.code, d = '"' + p(a.text) + '"';
                b.code = c + ("t.b(" + d + ");")
            },
            "{": b,
            "&": b
        };
        l.walk = function(a, b) {
            for (var c, d = 0, e = a.length; d < e; d++)(c = l.codegen[a[d].tag]) 
                && c(a[d], b);
            return b
        };
        l.parse = function(a, b, c) {
            c = c || {};
            return m(a, "", [], c.sectionTags || [])
        };
        l.cache = {};
        l.cacheKey = function(a, b) {
            return [a, !!b.asString, !!b.disableLambda, b.delimiters, !!b.modelGet].join("||")
        };
        l.compile = function(a, b) {
            var b = b || {}, c = l.cacheKey(a, b), d = this.cache[c];
            if (d) {
                var c = d.partials, e;
                for (e in c)
                    delete c[e].instance;
                return d
            }
            d = this.generate(this.parse(this.scan(a, b.delimiters), a, b), a, b);
            return this.cache[c] = d
        }
    });
    m("test-visualtags", function(b, e) {
        function c(a) {
            return - 1 < ("" + a).indexOf("px") ? parseInt(a.replace("px", ""), 10) || 0 : 0
        }
        function a(a, b) {
            return Math.floor(100 * (Math.abs(a - b) / b))
        }
        function h(a, b) {
            return b["offset" + ("width" === a ? "Width" : "Height")] || 0
        }
        function i(a, b) {
            g++;
            if (1E3 < g)
                return 0;
            for (var c = 0, d = "offset" + ("width" === a ? "Width" : "Height"), e = 0; e < b.childNodes.length; e++)
                c = Math.max(c, b.childNodes[e][d] || 0), b.childNodes[e].childNodes.length && (c = Math.max(c, i(a, b.childNodes[e])));
            return c
        }
        var d = e("util"), f = e("sizzle").find;
        b.init = function() {
            e("test").module("visualtags", function(b) {
                for (var e = f(".kxtargeted"), g = 0, l = e.length; g < l; g++) {
                    var r = e[g].getAttribute("data-id"), n = e[g].getAttribute("data-alias");
                    a:
                    {
                        var m = d.get("tagsByName"), q = void 0;
                        for (q in m)
                            if (m[q].id === r) {
                                r = m[q].target || "";
                                break a
                            }
                        r =
                        ""
                    }
                    r = f("#" + r);
                    r = 1 === r.length ? r[0] : e[g].parentNode;
                    m = Math.max(h("width", e[g]), i("width", r));
                    q = Math.max(h("height", e[g]), i("height", r));
                    b("visualtag-not-blank", m * q, "Tag area appears to be empty (" + n + ")");
                    r.style && c(r.style.width) && b("visualtag-expected-width", 10 > a(c(r.style.width), m), "Tag width ain't right (" + n + ")");
                    r.style && c(r.style.height) && b("visualtag-expected-height", 10 > a(c(r.style.height), q), "Tag height ain't right (" + n + ")")
                }
            })
        };
        var g = 0
    });
    m("test", function(b, e, c) {
        var a = e("util"), h = {}, i = "test";
        b.status = "NOT_STARTED";
        var d = b.test = function(c, d, e) {
            var f = d ? "pass": "fail";
            b.results.push({
                module: i,
                code: c,
                data: e,
                assertion: d,
                time: new Date,
                status: f
            });
            a.fire("test:" + f, {
                code: c,
                data: e
            });
            return d
        }, f = function(b, c) {
            return a.isArray(b) && a.isArray(c) ? b.length === c.length && a.all(b, function(a, b) {
                return f(a, c[b])
            }) : b === c
        };
        d.eq = function(a, b, c) {
            return d(a, f(b, c), {
                actual: b,
                expected: c
            })
        };
        b.module = function(a, c) {
            "NOT_STARTED" !== b.status && d("tests_not_started", !1, b.status);
            h[a] = c
        };
        var g = function(a, b) {
            i = a;
            try {
                b(d)
            } catch (c) {
                d("tests_module_threw",
                !1, "module_" + a + "_threw:" + c.message)
            }
        }, k = b.run = function() {
            b.results = [];
            b.failureGroup = null;
            d("tests_to_run", !a.isEmpty(h));
            a.eachHash(h, g);
            var e = b.report = a.groupBy(b.results, "status");
            e.total = b.results.length;
            e.toString = function() {
                try {
                    var d = [], e = function() {
                        d.push(Array.prototype.join.call(arguments, ""))
                    };
                    e("Test Summary: " + b.status);
                    e("Version: " + c.Krux.version + ", " + c.Krux.commit);
                    b.failureGroup && e("Failure Group:" + b.failureGroup);
                    e("Phase: " + b.phase);
                    e("Status,Code,Data");
                    a.each(b.results, function(a) {
                        e(a.status,
                        ",", a.code, ",", a.data)
                    });
                    return d.join("\n")
                } catch (f) {
                    return "report.toString failed: " + f
                }
            };
            var f = b.status = e.status = e.fail ? "FAIL": "PASS";
            if ("PASS" !== f) {
                var i =- 1, k, n = 1E3, m = [], q = {
                    tests_to_run: n--,
                    tests_module_threw: n--,
                    pixel: n--,
                    tag_delivered: n--
                };
                a.each(e.fail, function(a) {
                    var b = q[a.code] || 0;
                    m.push(a.code + ": " + a.data);
                    b > i && (i = b, k = a)
                });
                b.failureGroup = k.code + (k.data ? ":" + k.data : "");
                b.phase = a.happened("dom:load") ? "after_load" : a.happened("dom:ready") ? "after_ready_before_load" : "before_ready"
            }
            a.fire("test:all_done",
            {
                status: f
            })
        };
        b.init = function() {
            var b = a.once(k);
            a.on("pixel", b);
            a.on("dom:beforeunload", b);
            a.on("dom:unload", b)
        }
    });
    m("timing", function(b, e) {
        var c = e("data"), a = Date.now || function() {
            return (new Date).getTime()
        }, h = function(b) {
            return function() {
                c.set(b, a())
            }
        };
        return {
            start: h("started"),
            end: h("ended")
        }
    });
    m("underscore", function(b, e, c) {
        var a = function(b) {
            if (b instanceof a)
                return b;
            if (!(this instanceof a))
                return new a(b);
            this._wrapped = b
        }, h = {}, i = Array.prototype, d = Object.prototype, f = i.slice, g = d.toString, k = d.hasOwnProperty,
        j = i.map, o = i.filter, l = i.every, r = i.some, n = i.indexOf, i = Array.isArray, m = a.each = a.forEach = function(a, b, c) {
            if (null != a)
                if (a.length ===+ a.length)
                    for (var d = 0, e = a.length; d < e&&!(d in a && b.call(c, a[d], d, a) === h); d++);
                else 
                    for (d in a)
                        if (k.call(a, d) && b.call(c, d, a[d], a) === h)
                            break
        };
        a.map = function(a, b, c) {
            var d = [];
            if (null == a)
                return d;
            if (j && a.map === j)
                return a.map(b, c);
            m(a, function(a, e, f) {
                d[d.length] = b.call(c, a, e, f)
            });
            return d
        };
        a.find = a.detect = function(a, b, c) {
            var d;
            q(a, function(a, e, f) {
                if (b.call(c, a, e, f))
                    return d = a, !0
            });
            return d
        };
        a.every = a.all = function(a, b, c) {
            var d=!0;
            if (null == a)
                return d;
            if (l && a.every === l)
                return a.every(b, c);
            m(a, function(a, e, f) {
                if (!(d = d && b.call(c, a, e, f)))
                    return h
            });
            return d
        };
        var q = a.some = a.any = function(b, c, d) {
            var c = c || a.identity, e=!1;
            if (null == b)
                return e;
            if (r && b.some === r)
                return b.some(c, d);
            m(b, function(a, b, f) {
                if (e || (e = c.call(d, a, b, f)))
                    return h
            });
            return !!e
        };
        a.include = a.contains = function(a, b) {
            var c=!1;
            return null == a ? c : n && a.indexOf === n?-1 != a.indexOf(b) : c = q(a, function(a) {
                return a === b
            })
        };
        a.filter = a.select =
        function(a, b, c) {
            var d = [];
            if (null == a)
                return d;
            if (o && a.filter === o)
                return a.filter(b, c);
            m(a, function(a, e, f) {
                b.call(c, a, e, f) && (d[d.length] = a)
            });
            return d
        };
        a.reduce = a.foldl = a.inject = function(a, b, c, d) {
            var e = 2 < arguments.length;
            null == a && (a = []);
            m(a, function(a, f, g) {
                e ? c = b.call(d, c, a, f, g) : (c = a, e=!0)
            });
            if (!e)
                throw new TypeError("Reduce of empty array with no initial value");
            return c
        };
        a.indexOf = function(a, b) {
            if (null == a)
                return - 1;
            var c, d;
            if (n && a.indexOf === n)
                return a.indexOf(b);
            c = 0;
            for (d = a.length; c < d; c++)
                if (c in a &&
                a[c] === b)
                    return c;
            return - 1
        };
        a.uniq = a.unique = function(b, c, d) {
            var d = d ? a.map(b, d): b, e = [];
            3 > b.length && (c=!0);
            a.reduce(d, function(d, f, g) {
                if (c ? a.last(d) !== f ||!d.length : !a.include(d, f))
                    d.push(f), e.push(b[g]);
                return d
            }, []);
            return e
        };
        a.difference = function(b) {
            var c = a.flatten(f.call(arguments, 1), !0);
            return a.filter(b, function(b) {
                return !a.include(c, b)
            })
        };
        a.flatten = function(b, c) {
            return a.reduce(b, function(b, d) {
                if (a.isArray(d))
                    return b.concat(c ? d : a.flatten(d));
                b[b.length] = d;
                return b
            }, [])
        };
        a.intersection = a.intersect =
        function(b) {
            var c = f.call(arguments, 1);
            return a.filter(a.uniq(b), function(b) {
                return a.every(c, function(c) {
                    return 0 <= a.indexOf(c, b)
                })
            })
        };
        a.groupBy = function(b, c) {
            var d = {}, e = a.isFunction(c) ? c: function(a) {
                return a[c]
            };
            m(b, function(a, b) {
                var c = e(a, b);
                (d[c] || (d[c] = [])).push(a)
            });
            return d
        };
        a.compact = function(b) {
            return a.filter(b, function(a) {
                return !!a
            })
        };
        a.invoke = function(b, c) {
            var d = f.call(arguments, 2);
            return a.map(b, function(b) {
                return (a.isFunction(c) ? c || b : b[c]).apply(b, d)
            })
        };
        a.pluck = function(b, c) {
            return a.map(b,
            function(a) {
                return a[c]
            })
        };
        a.identity = function(a) {
            return a
        };
        a.values = function(b) {
            return a.map(b, a.identity)
        };
        a.times = function(a, b, c) {
            for (var d = 0; d < a; d++)
                b.call(c, d)
        };
        a.clone = function(b) {
            return !a.isObject(b) ? b : a.isArray(b) ? b.slice() : a.extend({}, b)
        };
        a.extend = function(a) {
            m(f.call(arguments, 1), function(b) {
                for (var c in b)
                    void 0 !== b[c] && (a[c] = b[c])
            });
            return a
        };
        a.defaults = function(a) {
            m(f.call(arguments, 1), function(b) {
                for (var c in b)
                    null == a[c] && (a[c] = b[c])
            });
            return a
        };
        a.first = a.head = function(a, b, c) {
            return null !=
            b&&!c ? f.call(a, 0, b) : a[0]
        };
        a.initial = function(a, b, c) {
            return f.call(a, 0, a.length - (null == b || c ? 1 : b))
        };
        a.last = function(a, b, c) {
            return null != b&&!c ? f.call(a, Math.max(a.length - b, 0)) : a[a.length - 1]
        };
        a.rest = a.tail = function(a, b, c) {
            return f.call(a, null == b || c ? 1 : b)
        };
        a.size = function(b) {
            return null == b ? 0 : b.length ===+ b.length ? b.length : a.keys(b).length
        };
        a.toArray = function(b) {
            return !b ? [] : b.toArray ? b.toArray() : a.isArray(b) || a.isArguments(b) ? f.call(b) : a.values(b)
        };
        a.escape = function(a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g,
            "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
        };
        a.template = function(b, c) {
            var d = a.templateSettings, d = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + b.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(d.escape, function(a, b) {
                return "',_.escape(" + b.replace(/\\'/g, "'") + "),'"
            }).replace(d.interpolate, function(a, b) {
                return "'," + b.replace(/\\'/g, "'") + ",'"
            }).replace(d.evaluate || null, function(a, b) {
                return "');" + b.replace(/\\'/g,
                "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');", e = new Function("obj", "_", d);
            return c ? e(c, a) : function(b) {
                return e.call(this, b, a)
            }
        };
        a.isEmpty = function(b) {
            if (a.isArray(b) || a.isString(b))
                return 0 === b.length;
            for (var c in b)
                if (k.call(b, c))
                    return !1;
            return !0
        };
        a.isElement = function(a) {
            return !!(a && 1 == a.nodeType)
        };
        a.isArray = i || function(a) {
            return "[object Array]" == g.call(a)
        };
        a.isObject = function(a) {
            return a === Object(a)
        };
        a.isArguments =
        "[object Arguments]" == g.call(arguments) ? function(a) {
            return "[object Arguments]" == g.call(a)
        } : function(a) {
            return !(!a ||!k.call(a, "callee"))
        };
        a.isFunction = function(a) {
            return "[object Function]" == g.call(a)
        };
        a.isString = function(a) {
            return "[object String]" == g.call(a)
        };
        a.isNumber = function(a) {
            return "[object Number]" == g.call(a)
        };
        a.isNaN = function(a) {
            return a !== a
        };
        a.isBoolean = function(a) {
            return !0 === a ||!1 === a || "[object Boolean]" == g.call(a)
        };
        a.isDate = function(a) {
            return "[object Date]" == g.call(a)
        };
        a.isRegExp = function(a) {
            return "[object RegExp]" ==
            g.call(a)
        };
        a.isNull = function(a) {
            return null === a
        };
        a.isUndefined = function(a) {
            return void 0 === a
        };
        a.range = function(a, b, c) {
            1 >= arguments.length && (b = a || 0, a = 0);
            for (var c = arguments[2] || 1, d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); e < d;)
                f[e++] = a, a += c;
            return f
        };
        a.now = Date.now || function() {
            return (new Date).getTime()
        };
        a.throttle = function(b, c, d) {
            var e, f, g, h = null, j = 0;
            d || (d = {});
            var i = function() {
                j=!1 === d.leading ? 0 : a.now();
                h = null;
                g = b.apply(e, f);
                e = f = null
            };
            return function() {
                var k = a.now();
                !j&&!1 === d.leading && (j = k);
                var l = c - (k - j);
                e = this;
                f = arguments;
                0 >= l ? (clearTimeout(h), h = null, j = k, g = b.apply(e, f), e = f = null) : !h&&!1 !== d.trailing && (h = setTimeout(i, l));
                return g
            }
        };
        a.partial = function(b) {
            var c = f.call(arguments, 1);
            return function() {
                for (var d = 0, e = c.slice(), f = 0, g = e.length; f < g; f++)
                    e[f] === a && (e[f] = arguments[d++]);
                for (; d < arguments.length;)
                    e.push(arguments[d++]);
                return b.apply(this, e)
            }
        };
        a.compose = function() {
            var a = arguments;
            return function() {
                for (var b = arguments, c = a.length - 1; 0 <= c; c--)
                    b = [a[c].apply(this, b)];
                return b[0]
            }
        };
        return a
    });
    m("util", function(b, e, c) {
        var a = e("underscore");
        a.extend(b, a, {
            _: a
        });
        a = b;
        a.UNDEFINED = void 0;
        a.globalEval = function(a, b) {
            b = b || c;
            a && /\S/.test(a) && b.eval.call(b, a)
        };
        a.parseParams = a.parseKeyValues = function(b, c, e, h) {
            var c = c || "&", e = e || "=", h = h || decodeURIComponent, j = {};
            if ("string" !== typeof b)
                return j;
            b.replace(RegExp(c + "*([^" + e + c + "]+)" + e + "([^" + c + "]+)" + c + "*", "g"), function(b, c, d) {
                d = h(d);
                j[c]=!j[c] ? d : a.isArray(j[c]) ? j[c].concat([d]) : [j[c], d]
            });
            return j
        };
        a.urlParams = function(b) {
            b = (b || c.location.href).match(/[^\#?]+(?:\?([^#]*))?(?:#(.*))?/);
            return a.parseParams(a.compact(b.slice(1)).join("&"))
        };
        a.paramString = function(b, c, e, h) {
            var c = c || "&", e = e || "=", h = h || encodeURIComponent, j = [];
            a.eachHash(b, function(b, c) {
                c = a.isArray(c) ? c : [c];
                a.each(c, function(a) {
                    null != a && "" !== a && j.push(h(b) + e + h(a))
                })
            });
            return j.join(c)
        };
        a.isPrimitive = function(b) {
            return null == b ||!/^object|function$/.test(typeof b)&&!a.isNaN(b)
        };
        a.isSerializable = function(b) {
            return a.isPrimitive(b) ||!/[object [^\]]*]/.test(String(b))
        };
        a.without = a.remove = function(b, c) {
            return a.filter(b, function(a) {
                return a !==
                c
            })
        };
        var h = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)", "g");
        a.escapeRegexp = function(a) {
            return ("" + a).replace(h, "\\$1")
        };
        a.doNothing = a.noop = function() {};
        a.defer = function(b) {
            var e = a.rest(arguments);
            c.setTimeout(function() {
                b.apply(null, e)
            }, 0)
        };
        var i = [];
        i.toString = function() {
            return e("json").JSON.stringify(i)
        };
        a.log = function(b) {
            if (a.isString(b))
                c.console && console.log(b);
            else if (b)
                b.time = new Date, i.push(b);
            else 
                return i
        };
        a.Set = function(a) {
            for (var b = 0; b < a.length; b++)
                this[a[b]]=!0
        };
        a.negate =
        function(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        };
        a.G = c;
        a.bind = function(b, c) {
            if (b.isBound && 3 > arguments.length)
                return b;
            var e = a.rest(arguments, 2), h = function() {
                return b.apply(c, e.concat(a.toArray(arguments)))
            };
            h.actual = b;
            h.isBound=!0;
            return h
        };
        a.bindMethod = function(b, c) {
            a.each(b.split(" "), function(b) {
                c[b] = a.bind(c[b], c)
            })
        };
        a.interpolate = function(a, b) {
            return b.replace(/\$\{([^{}]*)\}/g, function(b, c) {
                var e = a[c];
                return "string" === typeof e || "number" === typeof e ? e : b
            })
        };
        a.rewriter = function(a) {
            return function(b) {
                return a[b] ||
                b
            }
        };
        a.extend(a, {
            max: Math.max,
            min: Math.min
        });
        a.once = function(b) {
            if (b.isOnce && 3 > arguments.length)
                return b;
            var c=!1, b = a.bind.apply(null, arguments), e = function() {
                return !c && (c=!0) && b.apply(null, arguments)
            };
            e.isOnce=!0;
            e.actual = b;
            return e
        };
        a.ms = function() {
            return new Date - a.get("started")
        };
        a.param = function(a) {
            var b;
            return (b = c.location.href.match("\\bkx" + a + "(?:=|\\b)([^&#]*)")) && (b[1] ||!0)
        };
        a.eachHash = a.each;
        a.mapHash = function(b, c, e) {
            var h = {};
            a.eachHash(b, function(a, i) {
                var l = c.call(e, a, i, b);
                h[l[0]] = l[1]
            });
            return h
        };
        a.anyHash = a.any;
        a.findHash = a.find;
        a.keys = function(b) {
            return a.map(b, function(a) {
                return a
            })
        };
        a.values = function(b) {
            return a.map(b, function(a, b) {
                return b
            })
        };
        a.say = function() {};
        a.property = function(a) {
            var b = function(a) {
                return arguments.length ? b.set(a) : b.get()
            };
            b.get = a.get;
            b.set = a.set;
            a.value && b.set(a.value);
            return b
        };
        a.attributes = function(b) {
            var c = function(b, d) {
                var e = arguments.length;
                return 0 === e ? c.all() : !a.isString(b) ? c.set(b) : 1 === e ? c.get(b) : c.set(b, d)
            };
            c.get = b.get;
            c.all = b.all;
            c.set = function(c,
            e) {
                return 1 === arguments.length ? a.each(c, b.set) : b.set(c, e)
            };
            b.values && c.set(b.values);
            return c
        };
        a.range = function(a, b, c) {
            1 >= arguments.length && (b = a || 0, a = 0);
            for (var c = arguments[2] || 1, e = Math.max(Math.ceil((b - a) / c), 0), h = 0, i = Array(e); h < e;)
                i[h++] = a, a += c;
            return i
        };
        a.deref = a.dereference = function(b, e) {
            1 === arguments.length && (e = b, b = c);
            try {
                return a.reduce(e.split("."), function(a, b) {
                    return a[b]
                }, b)
            } catch (g) {}
        };
        a.sum = function(b) {
            a.isArray(b) || (b = a.toArray(arguments));
            return a.reduce(b, function(a, b) {
                return a + b
            }, 0)
        };
        a.yes = function() {
            return !0
        };
        a.not = function(a) {
            return !a
        };
        a.kruxDomain = function(a) {
            a = String(a).replace(/:\d+$/, "");
            return /(?:\d{1,3}\.){3}\d{1,3}/.test(a) ? "" : a.replace(/.*?((?:(^|\.)[^\.]+){1,2}(?:\.com)?)$/, "$1").replace(/^\./, "")
        };
        a.existy = function(b) {
            return null !== b && b !== a.UNDEFINED
        };
        a.matchAll = function(b, c) {
            return a.all(a.toArray(arguments).slice(1), function(c) {
                return a.isFunction(c.test) ? c.test(b) : - 1 !== b.indexOf(c)
            })
        }
    });
    m("version", function(b) {
        b.version = "5.33.5.1";
        b.commit = "b94dcf2a4acd76b074093a8001c487cf0307ab25"
    });
    m("whitelist", function(b, e) {
        function c(b) {
            var c = a.toArray(arguments);
            c.unshift(String);
            h.HashSet.apply(this, c)
        }
        var a = e("util"), h = e("hash-set"), i = {
            toString: function() {
                return "ALL"
            }
        }, d = {
            toString: function() {
                return "NONE"
            }
        };
        c.ALL = i;
        c.NONE = d;
        c.prototype = h();
        a.extend(c.prototype, {
            _parent: h.HashSet.prototype,
            get: function(a) {
                return this._all() || this._none() ? this._all() ? a : null : this._parent.get.apply(this, arguments)
            },
            has: function(a) {
                return !this._none() && this._all() || this._parent.has.apply(this, arguments) || this._hasMatch(a)
            },
            put: function(a) {
                if (this._all() || this._none())
                    this._items = {};
                return this._parent.put.apply(this, arguments)
            },
            allowOnly: function(a) {
                this.empty();
                return this.put.apply(this, arguments)
            },
            allowAll: function() {
                this.empty();
                this._items = i;
                return this
            },
            allowNone: function() {
                this.empty();
                this._items = d;
                return this
            },
            toString: function() {
                return a.isSerializable(this._items) ? String(this._items) : this._parent.toString.call(this)
            },
            _hasMatch: function(b) {
                this._thunk();
                return a.any(this._items, function(c, d) {
                    return d.test &&
                    a.isFunction(d.test) && d.test(b)
                })
            },
            _all: function() {
                return this._items === i
            },
            _none: function() {
                return this._items === d
            }
        });
        return a.extend(function(a) {
            var b = new c;
            !a || a === i ? b.allowAll() : a === d ? b.allowNone() : b.put.apply(b, arguments);
            return b
        }, {
            Whitelist: c,
            ALL: i,
            NONE: d
        })
    });
    m("x-frame", function(b, e, c) {
        var a = e("util"), h = e("dom"), i = e("json").JSON, d = h.d2on, f = c.location.origin, g = b.isFramed = function() {
            return c.top !== c
        }, k = b.send = function(b, c, d) {
            if (a.isFunction(b.postMessage))
                try {
                    "document"in b && b.postMessage(i.stringify(c),
                    d)
            } catch (e) {}
        };
        b.broadcast = function(b, d) {
            var d = a.defaults(d || {}, {
                container: !0,
                domain: f,
                self: !1
            }), e = g() ? c.parent: c;
            d.container && (g() || d.self) && k(e, b, d.domain);
            for (var h = 0, e = e.frames, i = e.length; h < i; ++h)(e[h] !== c || d.self) 
                && k(e[h], b, d.domain)
        };
        b.listen = function(b, e) {
            var g = a.defaults(e || {}, {
                origin: f,
                strict: !0,
                win: c.window
            });
            return d(g.win, "message", function(c) {
                if (!g.strict || 0 === String(c.origin || "").indexOf(g.origin))
                    b.call(this, {
                        data: a.isString(c.data) ? i.parse(c.data): c.data,
                        event: c
                    })
            })
        };
        b.init = function(a) {
            f =
            a
        }
    });
    B("index")
})();

