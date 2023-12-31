(function(b) {
    b.__adroll = b.__adroll || {
        exp: 5E4,
        eexp: 720,
        pv: 1E11 * Math.random(),
        __adc: "__ar_v4",
        _nad: 0,
        _lce: null,
        _broken: !1,
        _loaded: !1,
        _url: 2E3,
        _r: {},
        _kwl: 50,
        _logs: [],
        _secure: function() {
            return "https:" === this._protocol()
        },
        _head: function() {
            return (b.document.getElementsByTagName("head") || [null])[0] || (b.document.getElementsByTagName("body") || [null])[0] || b.document.getElementsByTagName("script")[0].parentNode
        },
        _protocol: function() {
            return b.document.location.protocol
        },
        _native: function() {
            try {
                return "http" !==
                this._protocol().slice(0, 4)
            } catch (a) {
                return !0
            }
        },
        _srv: function(a) {
            return (this._native() ? "https:" : "") + "//d.adroll.com" + ("undefined" === typeof a ? "" : a)
        },
        _cdn: function(a) {
            a = "undefined" === typeof a ? "" : a;
            return this._secure() ? "https://s.adroll.com" + a : "http://a.adroll.com" + a
        },
        log: function(a) {
            this._logs.push(a)
        },
        read_log: function(a) {
            return this._logs.join(a ? "\n" : "<br>\n")
        },
        cookieEnabled: function(a) {
            if (b.adroll_ext_network || b.adroll_optout || this._broken)
                return !1;
            if (2 <= this._nad || a)
                return this._lce;
            this.set("_te_",
            "1");
            return "1" === this.get("_te_") ? (this.del("_te_"), 0 < this._nad&&!this.get(this.__adc) ? this._lce=!1 : this._lce=!0) : this._lce=!1
        },
        parseUri: function(a) {
            a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);
            for (var d = {}, c = 14, b = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "); c--;)
                d[b[c]] = a[c] ||
                "";
            d.queryKey = {};
            d[b[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(a, c, b) {
                c && (d.queryKey[c] = b)
            });
            return d
        },
        get_keywords: function() {
            try {
                var a = b.document.referrer || "";
                if (!a)
                    return "";
                var d = this.parseUri(a);
                return - 1 !== d.host.indexOf("google.com") ? d.queryKey.q.substring(0, this._kwl) : ""
            } catch (c) {
                return ""
            }
        },
        get: function(a) {
            var d = b.document.cookie;
            if (null === d)
                return this._broken=!0, null;
            var c;
            0 > d.indexOf(a + "=") ? d = null : (a = d.indexOf(a + "=") + a.length + 1, c = d.indexOf(";", a), - 1 === c && (c = d.length), d = d.substring(a,
            c), d = "" === d ? null : b.unescape(d));
            return d
        },
        set: function(a, d, c) {
            var e;
            !c || "number" !== typeof c ? c = "" : (e = new Date, e.setTime(e.getTime() + 36E5 * c), c = e.toGMTString(), c = "; expires=" + c);
            e = "; domain=" + b.location.hostname;
            d = b.escape(d);
            b.document.cookie = a + "=" + d + c + "; path=/" + e
        },
        del: function(a) {
            this.set(a, "", - 8760)
        },
        generate_link: function() {
            return ""
        },
        get_base_url: function(a, d, c, e, f, g) {
            a = a + "/" + d + "/" + c + (e ? "/" + e : "") + (f ? "/" + f : "");
            var j = "";
            this.cookieEnabled(!1) ? (j = b.escape(this.get_eids()), a += "?pv=" + this.pv + "&cookie=" +
            j) : a += "?no-cookies=1&pv=" + this.pv;
            g && (a += "&" + g.join("&"));
            if (a.length > this._url) {
                this.del(this.__adc);
                if (a.length - j.length > this._url)
                    return "#";
                this.log("Url was too big, shrinking it");
                return this.get_url(d, c, e, f, g)
            }
            this.log("Generated url: " + a);
            return a
        },
        get_url: function(a, d, c, b, f) {
            var g=!c ? this._srv("/r") : this._srv("/c");
            return this.get_base_url(g, a, d, c, b, f)
        },
        get_eids: function() {
            if (b.adroll_ext_network || b.adroll_optout)
                return "";
            try {
                for (var a = this.get(this.__adc), d = a ? a.split("|") : "", a = [], c = d.length -
                1; 0 <= c; c--)
                    if (d[c]) {
                        var e = d[c].split(":");
                        a.push([e[0], e[2]].join(":"))
                    }
                return a.join("|")
            } catch (f) {
                return this.del(this.__adc), ""
            }
        },
        get_date: function(a) {
            var d = new Date;
            a && d.setTime(d.getTime() + 36E5 * a);
            a = "" + d.getUTCFullYear();
            var b = d.getUTCMonth(), b = 10 <= b ? b: "0" + b, d = d.getUTCDate();
            return [a, b, 10 <= d ? d: "0" + d].join("")
        },
        normalize_url: function(a) {
            return a.toLowerCase()
        },
        check_cookie: function(a, d) {
            if (b.adroll_ext_network || b.adroll_optout)
                return "";
            for (var c = a.split("|"), e = c.length - 1; 0 <= e; e--)
                if (c[e]) {
                    var f =
                    c[e].split(":");
                    d === f[0] && (f[2] = "" + (parseInt(f[2]) + 1), c[e] = f.join(":"))
                }
            return c.join("|")
        },
        handle: function(a) {
            var b = this.get(this.__adc) || "";
            - 1 !== b.indexOf(a) ? this.set(this.__adc, this.check_cookie(b, a), this.exp) : (a = [b, [a, this.get_date(this.eexp), "1"].join(":")].join("|"), this.set(this.__adc, a, this.exp))
        },
        expire_old: function() {
            if (!b.adroll_ext_network&&!b.adroll_optout) {
                for (var a = this.get_date(), d = this.get(this.__adc), d = d ? d.split("|") : [""], c = [], e = d.length - 1; 0 <= e; e--)
                    d[e] && d[e].split(":")[1] > a && c.push(d[e]);
                this.set(this.__adc, c.join("|"), this.exp)
            }
        },
        render_win_notification: function(a) {
            if (a.adroll_cpm_macro && a.adroll_win_notif) {
                var d = new b.Image, c = this._secure() ? "https://": "http://";
                d.src = c + a.adroll_win_notif + a.adroll_cpm_macro;
                d.setAttribute("width", "1");
                d.setAttribute("height", "1");
                d.setAttribute("border", "0");
                this._head().appendChild(d)
            }
        },
        render_ad_code: function(a, d, c, e) {
            e = "undefined" === typeof e ? null : e;
            if ("undefined" === typeof this._r[d] || e) {
                var f = ["width=" + b.adroll_width, "height=" + b.adroll_height,
                "x=0", "y=0"];
                if (c)
                    this.log("Rendering test ad " + c + " in space " + d), f.push("test_ad=" + c), a = this.get_url(a, d, null, "ad", f);
                else if (e) {
                    this.log("Rendering adgroup " + e);
                    c = this.macro_values();
                    var g = this.macro_url_params(c, !1, !1, !1, !1);
                    f.push(g);
                    this.render_win_notification(c);
                    a = this.get_url(a, d, e, null, f)
                } else 
                    this.log("Rendering ad space " + d), a = this.get_url(a, d, null, "ad", f);
                this.expire_old();
                b.document.write('<script src="' + a + '">\x3c/script>');
                this._nad += 1;
                this._r[d] = 1
            }
        },
        endswith: function(a, b) {
            return - 1 !==
            a.indexOf(b, a.length - b.length)
        },
        macro_values: function() {
            b.adroll_cpm_macro = "undefined" === typeof b.adroll_cpm_macro ? null : b.adroll_cpm_macro;
            b.adroll_url_macro = "undefined" === typeof b.adroll_url_macro ? null : b.adroll_url_macro;
            b.adroll_c_macro = "undefined" === typeof b.adroll_c_macro ? null : b.adroll_c_macro;
            b.adroll_subnetwork = "undefined" === typeof b.adroll_subnetwork ? null : b.adroll_subnetwork;
            b.adroll_ad_payload = "undefined" === typeof b.adroll_ad_payload ? null : b.adroll_ad_payload;
            b.adroll_win_notif = "undefined" ===
            typeof b.adroll_win_notif ? null : b.adroll_win_notif;
            var a = {
                r: /^\$\{.*\}$/i,
                g: /^%%.*%%$/i,
                b: /^\[.*\]$/i,
                x: /^\$\{.*\}$/i,
                t: /INSERTCLICKTRACKER/
            }
            [b.adroll_ext_network], a = "undefined" === typeof a ? /CANNOT_MATCH_THIS/: a, d = {};
            b.adroll_cpm_macro&&!a.test(b.adroll_cpm_macro) && (d.adroll_cpm_macro = b.adroll_cpm_macro);
            b.adroll_url_macro&&!a.test(b.adroll_url_macro) && (d.adroll_url_macro = b.adroll_url_macro);
            b.adroll_c_macro&&!a.test(b.adroll_c_macro) && (d.adroll_c_macro = b.adroll_c_macro);
            b.adroll_subnetwork&&!a.test(b.adroll_subnetwork) &&
            (d.adroll_subnetwork = b.adroll_subnetwork);
            b.adroll_ad_payload&&!a.test(b.adroll_ad_payload) && (d.adroll_ad_payload = b.adroll_ad_payload);
            b.adroll_win_notif&&!a.test(b.adroll_win_notif) && (d.adroll_win_notif = b.adroll_win_notif);
            return d
        },
        format_macros: function(a, b, c, e) {
            return this.macro_url_params(this.macro_values(), a, b, c, e)
        },
        macro_url_params: function(a, d, c, e, f) {
            f = "undefined" === typeof f?!1 : f;
            var g = e ? b.escape: function(a) {
                return a
            }, j = a.adroll_cpm_macro, l = a.adroll_url_macro, k = c ? a.adroll_c_macro: null, h =
            [], m = d ? this.parseUri(d): null, m = m ? this.endswith(m.path, ".tp"): !1;
            !m && f && h.push(["desturl", ""]);
            k && 0 === k.indexOf("http") ? (f = g, "g" === b.adroll_ext_network && (f = e ? function(a) {
                return a
            } : b.unescape), h.push(["clickurl", f(k)])) : m && f && h.push(["clickurl", ""]);
            b.adroll_ext_network && h.push(["adroll_network", b.adroll_ext_network]);
            j && h.push(["cpm", j]);
            a.adroll_subnetwork && h.push(["adroll_subnetwork", a.adroll_subnetwork]);
            a.adroll_ad_payload && h.push(["adroll_ad_payload", a.adroll_ad_payload]);
            l && (a = this.parseUri(b.unescape(l)),
            h.push(["site_url", g("http://" + a.host)]), c && (h.push(["adroll_width", g(b.adroll_width)]), h.push(["adroll_height", g(b.adroll_height)])));
            this.log("Macros found " + this.serialize(h));
            return d ? this.buildurl(d, h) : this.serialize(h)
        },
        view: function(a) {
            var d = new b.Image;
            d.src = this._srv("/view/" + a);
            d.setAttribute("width", "1");
            d.setAttribute("height", "1");
            d.setAttribute("border", "0");
            this._head().appendChild(d)
        },
        serialize: function(a) {
            if (a.length) {
                for (var b = [], c = a.length - 1; 0 <= c; c--)
                    b.push(a[c].join("="));
                return b.join("&")
            }
            return ""
        },
        buildurl: function(a, b) {
            var c = this.serialize(b), e = a.indexOf("?");
            return !c ? a : e === a.length - 1 ? a + c : - 1 !== e ? "&" === a[a.length - 1] ? a + c : a + "&" + c : a + "?" + c
        },
        set_cookie: function() {},
        reset: function() {
            b.adroll_c_id = null;
            b.adroll_url_macro = "";
            b.adroll_c_macro = "";
            b.adroll_cpm_macro = "";
            b.adroll_ext_network = null;
            b.adroll_subnetwork = null;
            b.adroll_ad_payload = null;
            b.adroll_win_notif = null
        },
        addLoadEvent: function(a) {
            if ("undefined" !== typeof b.__adroll_loaded && b.__adroll_loaded || "undefined" !== typeof b._adroll_ie && b._adroll_ie ||
            /msie/i.test(b.navigator.userAgent))
                return a();
            if (/WebKit/i.test(b.navigator.userAgent)) {
                var d = b.setInterval(function() {
                    /loaded|complete/.test(b.document.readyState) && b.clearInterval(d);
                    a()
                }, 10);
                return null
            }
            var c = b.onload;
            b.onload = function() {
                a();
                c && c()
            }
        },
        render_pixel_code: function(a, d) {
            this.expire_old();
            var c = this._srv("/pixel"), e = b.document.createElement("script");
            e.setAttribute("async", "true");
            e.type = "text/javascript";
            var f = b.__adroll.get_keywords();
            this.addLoadEvent(function() {
                var g = [];
                try {
                    g.push("keyw=" +
                    b.escape(f))
                } catch (j) {}
                try {
                    "undefined" !== typeof b.adroll_segments && g.push("name=" + b.escape(b.adroll_segments.toLowerCase()))
                } catch (l) {}
                try {
                    var k = b.__adroll.get_conversion_value();
                    k.conv_value && g.push("conv_value=" + k.conv_value);
                    k.currency && g.push("adroll_currency=" + k.currency)
                } catch (h) {}
                try {
                    var m = b.__adroll.external_data_to_qs(!0);
                    m && g.push(m)
                } catch (n) {}
                g = b.__adroll.get_base_url(c, a, d, null, "", g);
                e.src = g;
                b.__adroll._head().appendChild(e)
            })
        },
        record_user: function(a) {
            var d = ["adroll_conversion_value",
            "adroll_conversion_value_in_dollars", "adroll_segments", "adroll_currency"], c, e;
            a = a || {};
            for (c = 0; c < d.length; c++) {
                try {
                    delete b[d[c]]
                } catch (f) {}
                if (d[c]in a) {
                    b[d[c]] = a[d[c]];
                    try {
                        delete a[d[c]]
                    } catch (g) {}
                }
            }
            try {
                delete b.adroll_custom_data
            } catch (j) {}
            for (e in a)
                if (a.hasOwnProperty(e)) {
                    b.adroll_custom_data = a;
                    break
                }
            this.render_pixel_code(b.adroll_adv_id, b.adroll_pix_id)
        },
        normalize_var: function(a, d) {
            if (!a)
                return "";
            a = a.toString().substr(0, this._kwl).replace(/,/gi, ".");
            d && (a = b.escape(a));
            return a
        },
        get_conversion_value: function() {
            b.adroll_currency =
            "undefined" === typeof b.adroll_currency ? null : b.adroll_currency;
            b.adroll_conversion_value = "undefined" === typeof b.adroll_conversion_value ? null : b.adroll_conversion_value;
            b.adroll_conversion_value_in_dollars = "undefined" === typeof b.adroll_conversion_value_in_dollars ? null : b.adroll_conversion_value_in_dollars;
            return b.adroll_conversion_value ? {
                conv_value: "" + b.adroll_conversion_value,
                currency: b.adroll_currency
            } : b.adroll_conversion_value_in_dollars ? {
                conv_value: "" + parseInt(100 * b.adroll_conversion_value_in_dollars),
                currency: "USC"
            } : null
        },
        get_external_data: function() {
            if ("undefined" !== typeof b.adroll_custom_data) {
                var a = b.adroll_custom_data, d = {}, c;
                for (c in a)
                    a.hasOwnProperty(c) && (d[c.toLowerCase()] = a[c]);
                return d
            }
            return null
        },
        _gurl: function() {
            var a = b.location;
            return this.normalize_url(a.pathname + a.search)
        },
        extract_pid: function(a, b, c, e, f, g) {
            function j(a) {
                return a ? (a = RegExp(a, "gi"), !!a.exec(k)) : null
            }
            var l = e = null, k = this._gurl(), h = this.get_external_data();
            h && h.product_id && (l = h.product_id);
            h && h.product_group && (e = h.product_group);
            if (!l && c&&!("string" === c && c instanceof String) && "html" === c.scheme) {
                if (j(b) ||!0 !== j(a))
                    return "";
                l = this.get_product_id_from_dom(c)
            } else if (!l) {
                if (j(b))
                    return "";
                l = this.get_product_id_from_url(k, a, c)
            }
            !e && g&&!("string" === g && g instanceof String) && "html" === g.scheme ? e = this.get_product_id_from_dom(g) : e || f && (e = this.get_product_id_from_url(k, f, g));
            if (!l)
                return null;
            e || (e = "");
            return {
                product_id: l,
                product_group: e,
                product_action: h ? h.product_action: null
            }
        },
        get_pid: function(a, d, c, e, f, g) {
            c = this.extract_pid(a, d, c, e,
            f, g);
            if (!c)
                return "";
            a = c.product_id;
            d = c.product_group;
            c = c.product_action;
            f = "";
            if (a instanceof Array) {
                f = "?";
                for (g = 0; g < a.length; g++)
                    f += "adroll_product_id=" + this.normalize_var((a[g] + "").toLowerCase(), e), g < a.length - 1 && (f += "&")
            } else 
                f = "?adroll_product_id=" + this.normalize_var((a + "").toLowerCase(), e);
            d = d ? "&adroll_product_group=" + this.normalize_var((d + "").toLowerCase(), e) : "";
            c = c ? "&adroll_product_action=" + this.normalize_var(c + "").toLowerCase() : "";
            return '<img src="' + this._srv("/p/" + b.adroll_adv_id + "/" + f + d + c) +
            '" width="1" height="1" border="0"/>'
        },
        get_product_id_from_dom: function(a) {
            var d = null, c;
            a.path && (b.jQuery ? (c = b.jQuery(a.path), c.length && (c = c.eq(0), d = "text" === a.attribute ? c.text() : c.attr(a.attribute))) : b.Prototype && b.$$ ? (c = b.$$(a.path), c.length && (c = c[0], d = "text" === a.attribute ? c.innerText&&!b.opera ? c.innerText : c.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g, " ") : c.readAttribute(a.attribute))) : b.YUI ? (c = b.YUI().use("node"), c.one && (c = c.one(a.path), d = null, c && (d = "text" === a.attribute ? c.get("text") :
            c.getAttribute(a.attribute)))) : b.$$ && (c = b.$$(a.path), c.length && (c = c[0], d = "text" === a.attribute ? c.get("text") : c.getProperty(a.attribute))));
            if (d && (d = d.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), a.regular_expression && a.regular_expression_replace))
                if (c = RegExp(a.regular_expression, "gi"), d = c.exec(d), null !== d) {
                    a = a.regular_expression_replace;
                    for (c = 0; c < d.length; c++)
                        a = a.replace(RegExp("\\\\" + c, "gi"), d[c] || "");
                        d = a
                } else 
                    d = "";
            return d
        },
        get_product_id_from_url: function(a, b, c) {
            var e = null;
            try {
                e = parseInt(c)
            } catch (f) {}
            return null !==
            e && (!isNaN(e) && b) && (a = RegExp(b, "gi").exec(a), null !== a && e in a) ? a[e] : null
        },
        external_data_to_qs: function(a) {
            var d = [], c = this.get_external_data();
            if (!c)
                return null;
            for (var e in c)
                c.hasOwnProperty(e) && d.push(this.normalize_var(b.escape("" + e) + "=" + b.escape("" + c[e])));
            d = d.join("&");
            a && (d = b.escape(d));
            return "adroll_external_data=" + d
        },
        replace_external_data: function(a) {
            var d = this.get_external_data(), c = this.get_conversion_value(), e = null, f;
            if (d)
                for (f in d)
                    d.hasOwnProperty(f) && (e = RegExp("\\[" + f + "\\]", "gi"), a = a.replace(e,
                    d[f]), e = RegExp("\\[" + f + "_ESC\\]", "gi"), a = a.replace(e, b.escape(d[f])));
            if (c)
                for (f in c)
                    c.hasOwnProperty(f) && (e = RegExp("\\[" + f + "\\]", "gi"), a = a.replace(e, c[f]), e = RegExp("\\[" + f + "_ESC\\]", "gi"), a = a.replace(e, b.escape(c[f])));
            return a
        },
        set_pixel_cookie: function(a, d, c) {
            b.adroll_optout || (this.handle(a), this.handle(d), this.handle(c), this.pixel_loaded())
        },
        add_pixel_load_callback: function(a) {
            this._loaded ? a() : b.adroll_callbacks.push(a)
        },
        pixel_loaded: function() {
            this._loaded=!0;
            for (var a = 0; a < b.adroll_callbacks.length; a++)
                b.adroll_callbacks[a]()
        }
    };
    b.adroll_optout=!1;
    b.adroll_ext_network = null;
    b.adroll_callbacks = "undefined" === typeof b.adroll_callbacks ? [] : b.adroll_callbacks;
    b.__adroll.render_pixel_code(b.adroll_adv_id, b.adroll_pix_id)
})(window);

