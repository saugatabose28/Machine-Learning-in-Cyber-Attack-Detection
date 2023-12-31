var MixpanelLib = function(k, o, m) {
    function j(a, e, b) {
        if (Object.prototype.toString.call(a) === "[object Array]") {
            var d;
            for (d = 0; d < a.length; d++)
                e.call(b || e, a[d], d)
        } else if (typeof a == "object")
            for (d in a)
                Object.hasOwnProperty.call(a, d) && e.call(b || e, a[d], d)
    }
    function s(a, e, b) {
        b = b || function() {
            return true
        };
        j(e, function(e, f) {
            b(e) && (a[f] = e)
        });
        return a
    }
    function A(a, e) {
        a.prototype = new e;
        a.prototype.constructor = a;
        a.superclass = e.prototype;
        return a
    }
    function w(a) {
        if (!a)
            return false;
        var e = Object.prototype.toString.call(a);
        return e === "[object Array]" || e === "[object HTMLCollection]" || e === "[object NodeList]" || typeof a.jquery !== "undefined" && typeof a.length !== "undefined" || typeof a.length === "number" && typeof a.item === "function" || typeof a.length === "number" && typeof a.item === "string" || typeof a.length === "number" && typeof a.item === "object"
    }
    function t(a) {
        return typeof a === "object"&&!w(a)
    }
    function u(a) {
        var e, b = 0, d = [];
        if (a === null || a === void 0)
            return [];
        try {
            return Array.prototype.slice.call(a, 0)
        } catch (f) {
            if (typeof a.length === "number")
                for (e =
                a.length; b < e; b++)
                    d[b] = a[b];
            else 
                for (; a[b] !== void 0;)
                    d[b] = a[b], b++;
            return d
        }
    }
    function B(a) {
        return !a ? false : a.charAt(0) === "." || a.charAt(0) === "#"
    }
    function C(a) {
        if (!a)
            return {
                type: "error",
                query: ""
            };
        var b = a.charAt(0), b = b === "." ? "class": b === "#" ? "id": "error";
        return {
            type: b,
            query: b === "error" ? "": a.slice(1)
        }
    }
    function D(a) {
        if (typeof document.getElementsByClassName === "undefined") {
            var b = RegExp("(?:^|\\s)" + a + "(?:$|\\s)"), c = document.getElementsByTagName("*"), d = [], f, g;
            for (g = 0; (f = c[g]) != null; g++) {
                var h = f.className;
                h &&
                h.indexOf(a)!=-1 && b.test(h) && d.push(f)
            }
            return d
        } else 
            return a = document.getElementsByClassName(a), u(a)
    }
    function E(a) {
        return typeof a !== "string" ? a : document.getElementById === void 0 ? document.all !== void 0 ? document.all[a] : document.layers !== void 0 ? document.layers[a] : null : document.getElementById(a)
    }
    function x(a, b, c) {
        if (a !== void 0 && a !== null && typeof b === "string") {
            var d = a[b] ? a[b]: function() {};
            a[b] = function(a) {
                d(a);
                return c(a)
            }
        }
    }
    function F(a, e, c, d, f) {
        x(a, e, function(a) {
            var e = false, a = a || window.event, i = {
                new_tab_click: L(a)
            },
            k = window.setTimeout(function() {
                e || (e = true, f(false, d, i))
            }, b.config.track_links_timeout);
            b.track(c, d, function() {
                e || (e = true, window.clearTimeout(k), f(true, d, i))
            });
            if (!i.new_tab_click)
                return G(a)
        })
    }
    function L(a) {
        if (a && a.type === "click") {
            var b = 0, c = a.metaKey || a.ctrlKey;
            a.which === null && a.button !== null ? b = a.button < 2 ? 0 : a.button == 4 ? 1 : 2 : a.which !== null && (b = a.which < 2 ? 0 : a.which == 2 ? 1 : 2);
            return b == 1 || c && b == 0
        }
        return false
    }
    function G(a) {
        if (a)
            a.returnValue = false, a.preventDefault !== void 0 && a.preventDefault();
        return false
    }
    function q() {
        this.function_name = "track_links";
        this.override_event = "onclick"
    }
    function y() {
        this.function_name = "track_forms";
        this.override_event = "onsubmit"
    }
    function H() {
        var a = navigator.userAgent;
        return window.opera ? "Opera" : /chrom/i.test(a) ? "Chrome" : /msie/i.test(a) ? "Internet Explorer" : /AppleWebKit/.test(navigator.appVersion) ? "Safari" : /mozilla/i.test(a)&&!/compatible|webkit/i.test(a) ? "Firefox" : ""
    }
    function I() {
        var a = navigator.userAgent;
        return /Windows/i.test(a) ? "Windows" : /iPhone/.test(a) ? "iPhone" : /Android/.test(a) ?
        "Android" : /Mac/i.test(a) ? "Mac OS X" : /X11/.test(a) || /Linux/.test(a) ? "Linux" : ""
    }
    function J(a) {
        a = a.split("/");
        return a.length >= 3 ? a[2] : ""
    }
    function v() {
        if (!r) {
            r = true;
            document.removeEventListener && (document.removeEventListener("DOMContentLoaded", v, false), document.removeEventListener("load", v, false));
            for (; z.length > 0;) {
                var a = z.shift();
                b[a[0]].apply(b, a.slice(1))
            }
        }
    }
    var b = {}, K = false, r = false, z = [];
    b.config = {
        cross_subdomain_cookie: true,
        cookie_name: "mp_super_properties",
        test: false,
        store_google: true,
        save_referrer: true,
        debug: false,
        track_links_timeout: 300,
        cookie_expiration: 30,
        img: false
    };
    b.jsonp_callback = function() {};
    b.super_properties = {
        all: {},
        events: {},
        funnels: {}
    };
    b.funnels = {};
    var n = {
        log: function() {
            if (typeof window.console !== "undefined" && window.console && b.config.debug)
                try {
                    window.console.log.apply(window.console, arguments)
            } catch (a) {
                var e = Array.prototype.slice.call(arguments);
                window.console.log(e.join("\n"))
            }
        },
        error: function() {
            if (typeof window.console !== "undefined" && window.console && b.config.debug)
                try {
                    window.console.error.apply(window.console,
                    arguments)
            } catch (a) {
                var e = Array.prototype.slice.call(arguments);
                window.console.error(e.join("\n"))
            }
        }
    }, p = function() {};
    p.prototype.track = function() {
        if (!r)
            return z.push([this.function_name].concat(u(arguments))), true;
        var a = arguments.length > 0 ? arguments[0]: void 0;
        if (a === void 0)
            n.error("Invalid arguments for track_forms:", arguments);
        else if (typeof a === "string" && B(a))
            return this.track_query.apply(this, arguments);
        else if (w(a))
            return arguments[0] = u(a), this.track_dom.apply(this, arguments);
        else 
            n.error("Invalid arguments for track_links:",
            arguments);
        return false
    };
    p.prototype.track_query = function(a, b, c, d) {
        var a = C(a), f = null;
        a.type === "class" ? f = D(a.query) : a.type === "id" && (a = E(a.query), f = a !== null ? [a] : []);
        a = f;
        return a === null ? false : this.track_dom(a, b, c, d)
    };
    p.prototype.track_dom = function(a, b, c, d) {
        if (!b)
            return n.error("No event name provided to mpmetrics." + this.function_name), false;
        c = c || {};
        j(a, function(a) {
            if (typeof a !== "object" || typeof a.nodeName === "undefined")
                return n.error("Invalid element provided to " + this.function_name, a), false;
            var g = this.update_properties(a,
            c);
            F(a, this.override_event, b, g, this.callback_generator(a, d))
        }, this);
        return true
    };
    p.prototype.update_properties = function(a, b) {
        var c = {};
        j(b, function(a, b) {
            c[b] = a
        });
        return c
    };
    A(q, p);
    q.prototype.callback_generator = function(a, b) {
        return function(c, d, f) {
            b && b(c, d) === false || f.new_tab_click || a.href !== void 0 && a.href !== null && setTimeout(function() {
                window.location = a.href
            }, 0)
        }
    };
    q.prototype.update_properties = function(a, b) {
        var c = q.superclass.update_properties.call(this, a, b);
        if (a.href)
            c.url = a.href;
        return c
    };
    A(y, p);
    y.prototype.callback_generator = function(a, b) {
        return function(c, d) {
            b && b(c, d) === false || setTimeout(function() {
                document.createElement("form").submit.call(a)
            }, 0)
        }
    };
    b.track_links = function() {
        var a = new q;
        return a.track.apply(a, arguments)
    };
    b.track_forms = function() {
        var a = new y;
        return a.track.apply(a, arguments)
    };
    b.send_request = function(a, e) {
        var c = navigator.userAgent;
        if (!/google web preview/i.test(c)&&!/baiduspider/i.test(c)&&!/yandexbot/i.test(c)) {
            if (b.config.test)
                e.test = 1;
            if (b.config.img)
                e.img = 1;
            e._ = (new Date).getTime().toString();
            a += "?" + b.http_build_query(e);
            if (b.config.img)
                c = document.createElement("img"), c.src = a, document.body.appendChild(c);
            else {
                c = document.createElement("script");
                c.type = "text/javascript";
                c.async = true;
                c.defer = true;
                c.src = a;
                var d = document.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(c, d)
            }
        }
    };
    b.get_query_param = function(a, b) {
        var b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
        return c === null || c && typeof c[1] !== "string" && c[1].length ? "" : unescape(c[1]).replace(/\+/g,
        " ")
    };
    b.track = function(a, e, c, d) {
        if (a) {
            b.load_super_once();
            d = d || "events";
            e = e || {};
            e.token = e.token || b.token;
            var f = Math.floor(Math.random() * 1E4), g = b.callback_fn;
            c !== void 0 && (b.jsonp_callback["" + f] = c, g += '["' + f + '"]');
            e.time = b.get_unixtime();
            b.save_campaign_params();
            b.save_search_info(document.referrer);
            b.config.save_referrer && b.save_referrer_info(document.referrer);
            c = {};
            s(c, {
                $os: I(),
                $browser: H(),
                $referrer: document.referrer,
                $referring_domain: J(document.referrer)
            }, function(a) {
                return a.length
            });
            s(c, b.super_properties.all);
            d != "all" && s(c, b.super_properties[d]);
            s(c, e);
            d = {
                event: a,
                properties: c
            };
            c = b.base64_encode(b.json_encode(d));
            b.config.debug && (n.log("-------------- REQUEST --------------"), n.log(d));
            b.send_request(b.api_host + "/track/", {
                data: c,
                ip: 1,
                callback: g
            });
            b.track_predefined_funnels(a, e);
            return d
        } else 
            n.error("No event name provided to mpmetrics.track")
    };
    b.track_funnel = function(a, e, c, d, f) {
        d = d || {};
        d.funnel = a;
        d.step = parseInt(e, 10);
        d.goal = c;
        return b.track("mp_funnel", d, f, "funnels")
    };
    b.track_pageview = function() {
        b.track("mp_page_view",
        b.get_pageview_info())
    };
    b.track_top = function(a, e, c) {
        if (typeof a == "undefined")
            n.error("No data_store provided to track_top");
        else if (typeof e == "undefined")
            n.error("No item_id provided to track_top");
        else {
            a = {
                token: b.token,
                collection: a,
                item_id: e
            };
            if (typeof c != "undefined")typeof c.desc != "undefined" && (a.desc = c.desc), typeof c.img != "undefined" && (a.img = c.img), typeof c.url != "undefined" && (a.url = c.url);
            b.send_request("http://lift.mixpanel.com/lift", a);
            return a
        }
    };
    b.identify = function(a) {
        b.register_once({
            distinct_id: a
        },
        "all", null, 30)
    };
    b.name_tag = function(a) {
        b.register({
            mp_name_tag: a
        }, "all", 30)
    };
    b.register_once = function(a, e, c, d) {
        if (t(a)) {
            b.load_super_once();
            e = e || "all";
            c === void 0 && (c = "None");
            if (d === void 0)
                d = b.config.cookie_expiration;
            if (b.super_properties.hasOwnProperty(e)) {
                var f = b.super_properties[e];
                j(a, function(a, d) {
                    if (!f[d] || f[d] === c)
                        b.super_properties[e][d] = a
                })
            }
            b.config.cross_subdomain_cookie && b.clear_old_cookie();
            b.set_cookie(b.config.cookie_name, b.json_encode(b.super_properties), d, b.config.cross_subdomain_cookie);
            return true
        } else 
            return false
    };
    b.register = function(a, e, c) {
        if (t(a)) {
            b.load_super_once();
            e = e || "all";
            if (c === void 0)
                c = b.config.cookie_expiration;
            b.super_properties.hasOwnProperty(e) && j(a, function(a, c) {
                b.super_properties[e][c] = a
            });
            b.config.cross_subdomain_cookie && b.clear_old_cookie();
            b.set_cookie(b.config.cookie_name, b.json_encode(b.super_properties), c, b.config.cross_subdomain_cookie);
            return true
        } else 
            return false
    };
    b.http_build_query = function(a, b) {
        var c, d, f = [];
        b || (b = "&");
        j(a, function(a, b) {
            c = encodeURIComponent(a.toString());
            d = encodeURIComponent(b);
            f[f.length] = d + "=" + c
        });
        return f.join(b)
    };
    b.get_unixtime = function() {
        return parseInt((new Date).getTime().toString().substring(0, 10), 10)
    };
    b.json_encode = function(a) {
        var b = function(a) {
            var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, c = {
                "\u0008": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\u000c": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };
            b.lastIndex = 0;
            return b.test(a) ? '"' + a.replace(b, function(a) {
                var b = c[a];
                return typeof b ===
                "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"' : '"' + a + '"'
        }, c = function(a, f) {
            var g = "", h = 0, i = h = "", i = 0, k = g, j = [], l = f[a];
            l && typeof l === "object" && typeof l.toJSON === "function" && (l = l.toJSON(a));
            switch (typeof l) {
            case "string":
                return b(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l)
                    return "null";
                g += "    ";
                j = [];
                if (Object.prototype.toString.apply(l) === "[object Array]") {
                    i = l.length;
                    for (h = 0; h < i; h += 1)
                        j[h] = c(h, l) || "null";
                    return i =
                    j.length === 0 ? "[]" : g ? "[\n" + g + j.join(",\n" + g) + "\n" + k + "]" : "[" + j.join(",") + "]"
                }
                for (h in l)
                    Object.hasOwnProperty.call(l, h) && (i = c(h, l)) && j.push(b(h) + (g ? ": " : ":") + i);
                return i = j.length === 0 ? "{}" : g ? "{" + j.join(",") + "" + k + "}" : "{" + j.join(",") + "}"
            }
        };
        return c("", {
            "": a
        })
    };
    b.base64_encode = function(a) {
        var e, c, d, f, g = 0, h = 0, i = "", i = [];
        if (!a)
            return a;
        a = b.utf8_encode(a + "");
        do 
            e = a.charCodeAt(g++), c = a.charCodeAt(g++), d = a.charCodeAt(g++), f = e<<16 | c<<8 | d, e = f>>18 & 63, c = f>>12 & 63, d = f>>6 & 63, f&=63, i[h++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f);
        while (g < a.length);
        i = i.join("");
        switch (a.length%3) {
        case 1:
            i = i.slice(0, - 2) + "==";
            break;
        case 2:
            i = i.slice(0, - 1) + "="
        }
        return i
    };
    b.utf8_encode = function(a) {
        var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"), b = "", c, d, f = 0, g;
        c = d = 0;
        f = a.length;
        for (g = 0; g < f; g++) {
            var h = a.charCodeAt(g),
            i = null;
            h < 128 ? d++ : i = h > 127 && h < 2048 ? String.fromCharCode(h>>6 | 192) + String.fromCharCode(h & 63 | 128) : String.fromCharCode(h>>12 | 224) + String.fromCharCode(h>>6 & 63 | 128) + String.fromCharCode(h & 63 | 128);
            i !== null && (d > c && (b += a.substring(c, d)), b += i, c = d = g + 1)
        }
        d > c && (b += a.substring(c, a.length));
        return b
    };
    b.set_cookie = function(a, e, c, d) {
        var f = new Date, d = d ? b.parse_domain(document.location.hostname): "", a = a + "=" + escape(e);
        f.setDate(f.getDate() + c);
        a += c === null ? "" : ";expires=" + f.toGMTString();
        a += "; path=/";
        a += d ? ";domain=." + d : "";
        document.cookie = a
    };
    b.get_cookie = function(a) {
        var b;
        if (document.cookie.length > 0 && (document.cookie.match("^" + a + "=") ? b = 0 : (b = document.cookie.search("; " + a + "="), b!==-1 && (b += 2)), b!==-1)) {
            b = b + a.length + 1;
            a = document.cookie.indexOf(";", b);
            if (a==-1)
                a = document.cookie.length;
            return unescape(document.cookie.substring(b, a))
        }
        return ""
    };
    b.delete_cookie = function(a, e) {
        b.set_cookie(a, "", - 1, e)
    };
    b.parse_domain = function(a) {
        return (a = a.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)) ? a[0] : ""
    };
    b.get_super = function() {
        var a = eval("(" +
        b.get_cookie(b.config.cookie_name) + ")") || {};
        j(a, function(a, c) {
            b.super_properties[c] = a
        });
        return b.super_properties
    };
    b.load_super_once = function() {
        if (!K)
            try {
                b.get_super(), K = true
        } catch (a) {}
    };
    b.register_funnel = function(a, e) {
        b.funnels[a] = e
    };
    b.track_predefined_funnels = function(a, e) {
        var c, d;
        if (a && b.funnels)
            for (c in b.funnels)
                if (b.funnels.hasOwnProperty(c))
                    for (d = 0; d < b.funnels[c].length; ++d)
                        b.funnels[c][d] && b.funnels[c][d] == a && b.track_funnel(c, d + 1, a, e)
    };
    b.get_campaign_params = function(a) {
        var e = "", c = {};
        j(["utm_source",
        "utm_medium", "utm_campaign", "utm_content", "utm_term"], function(d) {
            e = b.get_query_param(a, d);
            e.length && (c[d] = e)
        });
        return c
    };
    b.save_campaign_params = function() {
        b.campaign_params_saved = b.campaign_params_saved || false;
        if (b.config.store_google&&!b.campaign_params_saved)
            b.register_once(b.get_campaign_params(document.URL)), b.campaign_params_saved = true
    };
    b.save_search_info = function(a) {
        var e = a.search("https?://(.*)google.([^/?]*)") === 0 ? "google": a.search("https?://(.*)bing.com") === 0 ? "bing": a.search("https?://(.*)yahoo.com") ===
        0 ? "yahoo": a.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo": "";
        e.length && (a = b.get_query_param(a, e != "yahoo" ? "q" : "p"), a.length && b.register({
            mp_keyword: a,
            $search_engine: e
        }, "all"))
    };
    b.save_referrer_info = function(a) {
        b.register_once({
            $initial_referrer: a,
            $initial_referring_domain: J(a)
        }, "all", "")
    };
    b.get_pageview_info = function() {
        var a = document.referrer, b = H(), c = I(), d = document.location.href, f = {};
        if (a.length)
            f.mp_referrer = a;
        if (b.length)
            f.mp_browser = b;
        if (c.length)
            f.mp_platform = c;
        if (d.length)
            f.mp_page = d;
        return f
    };
    b.clear_old_cookie = function() {
        b.delete_cookie(b.config.cookie_name, false);
        b.set_cookie(b.config.cookie_name, b.json_encode(b.super_properties), 7, true)
    };
    b.set_config = function(a) {
        t(a) && j(a, function(a, c) {
            b.config[c] = a
        })
    };
    (function(a) {
        var b = navigator.userAgent.toLowerCase();
        /webkit/.test(b) ? timeout = setTimeout(function() {
            document.readyState === "loaded" || document.readyState === "complete" ? a() : setTimeout(arguments.callee, 10)
        }, 10) : /mozilla/.test(b)&&!/(compatible)/.test(b) || /opera/.test(b) ? document.addEventListener("DOMContentLoaded",
        a, false) : x(window, "onload", a)
    })(v);
    b._private = {
        dom_loaded: function(a) {
            if (typeof a !== "undefined")
                r = a;
            else 
                return r
        },
        is_list: w,
        is_object: t,
        is_dom_query: B,
        parse_dom_query: C,
        to_array: u,
        get_elements_by_class_name: D,
        get_element_by_id: E,
        register_event: x,
        register_tracking_event: F,
        prevent_default: G,
        process_dom_loaded_queue: v
    };
    b.set_config(m || {});
    m = "https:" == document.location.protocol ? "https://" : "http://";
    b.token = k;
    b.api_host = m + "api.mixpanel.com";
    b.callback_fn = o ? o + ".jsonp_callback" : "mpmetrics.jsonp_callback";
    b.track_pageview();
    return b
};
typeof mpq != "undefined" && mpq && mpq[0] && mpq[0][0] == "init" && function(k) {
    k.metrics = new MixpanelLib(k[0][1], "mpq.metrics", k[0][2]);
    k.push = function(m) {
        if (m)
            if (typeof m == "function")
                m();
            else if (m.constructor == Array) {
                var j = k.metrics[m[0]];
                typeof j == "function" && j.apply(k.metrics, m.slice(1))
            }
    };
    var o;
    for (o = 1; o < k.length; o++)
        k.push(k[o]);
    k.length = 0
}(mpq);

