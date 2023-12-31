/*! scripts/application.js */
var video_thumbnail_hover = false;
function load_typekit() {
    if (typeof Typekit != "undefined") {
        return 
    }
    TypekitConfig = {
        kitId: "dzi2tiv"
    };
    (function() {
        var a = document.createElement("script");
        a.src = "//use.typekit.com/" + TypekitConfig.kitId + ".js";
        a.type = "text/javascript";
        a.async = "true";
        a.onload = a.onreadystatechange = function() {
            var c = this.readyState;
            if (c && c != "complete" && c != "loaded") {
                return 
            }
            try {
                Typekit.load(TypekitConfig)
            } catch (d) {}
        };
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    })()
}
function select_field(a) {
    if (a.createTextRange) {
        var b = a.createTextRange();
        b.moveStart("character", 0);
        b.moveEnd("character", a.value.length);
        b.select()
    } else {
        if (a.setSelectionRange) {
            a.setSelectionRange(0, a.value.length)
        }
    }
}
function get_cookie(d) {
    var b = document.cookie;
    var g, f = b.split(";");
    var e, a = f.length;
    for (e = 0; e < a; e += 1) {
        if ((g = f[e].replace(/^\s+|\s+$/g, "").split("="))[0] == d) {
            return {
                name: g[0],
                value: g[1]
            }
        }
    }
    return false
}
function set_cookie(a, f, h, c) {
    c = c || {};
    var b = new Date();
    var g = (typeof(c.path) !== "undefined") ? c.path: "/";
    var e = (typeof(c.is_secure) !== "undefined") ? true: false;
    var d = (typeof(c.domain) !== "undefined") ? c.domain: "";
    b.setDate(b.getDate() + h);
    document.cookie = a + "=" + escape(f) + ((h == null) ? "" : ";expires=" + b.toGMTString()) + ";path=" + g + ((e === false) ? "" : ";secure") + ((d === "") ? "" : ";domain=" + d)
}
function unset_cookie(a) {
    set_cookie(a, "", - 1)
}
var trackable_follow = function(c, g, f, b, a, d, e) {
    b = b || function() {};
    a = a || function() {};
    d = d || function() {};
    e = e || function() {};
    Tumblr.follow({
        tumblelog: f
    }, {
        init: b,
        success: a,
        error: d,
        complete: e
    })
};
function toggle_video_embed(a) {
    var b = jQuery;
    if (!b("#watch_video_" + a).is(":visible")) {
        b("#video_embed_" + a).html(b("#video_code_" + a).val());
        b("#video_toggle_" + a).hide();
        b("#watch_video_" + a).show();
        Tumblr.Events.trigger("Capture:push", "embed_interaction", "click");
        if (typeof _gaq !== "undefined" && _gaq) {
            _gaq.push(["_trackEvent", "dashboard_video", "click", "normal"])
        }
    } else {
        b("#video_embed_" + a).html("");
        b("#video_toggle_" + a).show();
        b("#watch_video_" + a).hide();
        Tumblr.Events.trigger("Capture:push", "embed_interaction", "hide");
        if (typeof _gaq !== "undefined" && _gaq) {
            _gaq.push(["_trackEvent", "dashboard_video", "hide", "normal"])
        }
    }
};
/*! scripts/tumblr/utils/prefixer.js */
Tumblr.Utils || (Tumblr.Utils = {});
(function(e) {
    var d = (function() {
        var g = document.documentElement.style;
        var h = [];
        for (var i in g) {
            if (typeof g[i] === "string") {
                h.push(i)
            }
        }
        return h.join(" ")
    })();
    var b = function(g) {
        return new RegExp("\\b((webkit|moz|ms|o|)" + g.toLowerCase() + ")\\b", "i")
    };
    var a = {};
    function f(h) {
        if (a[h] === void 0) {
            if (b(h).test(d)) {
                var g = RegExp.$1;
                a[h] = {
                    js: g,
                    css: (g[0] + g.slice(1).replace(/[A-Z]/g, "-$&")).toLowerCase()
                }
            } else {
                a[h] = false
            }
        }
        return a[h]
    }
    f.style = function c(j, i, l) {
        var h, g;
        if (l) {
            h = {};
            h[i] = l
        } else {
            h = i
        }
        if (j.jquery) {
            j = j[0]
        }
        for (var k in h) {
            g = h[k];
            j.style[f(k).js] = g
        }
        return j
    };
    e.prefixer = f
})(Tumblr.Utils);
/*! scripts/polyfills/function.bind.polyfill.js */
if (!Function.prototype.bind) {
    Function.prototype.bind = function(a) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var e = Array.prototype.slice.call(arguments, 1), d = this, b = function() {}, c = function() {
            return d.apply(this instanceof b && a ? this : a, e.concat(Array.prototype.slice.call(arguments)))
        };
        b.prototype = this.prototype;
        c.prototype = new b();
        return c
    }
};
/*! scripts/tumblelog/styler.js */
(function(a) {
    function c(f, k, l) {
        if (Array.prototype.indexOf) {
            return f.indexOf(k, l)
        }
        for (var h = (l || 0), g = f.length; h < g; h++) {
            if (f[h] === k) {
                return h
            }
        }
        return - 1
    }
    function b(g, f) {
        var i = [];
        if (!g) {
            return i
        }
        for (var h in g) {
            if (g.hasOwnProperty(h)) {
                i.push(h)
            }
        }
        if (f && f.length) {
            return i.sort(function(k, j) {
                return c(f, k) - c(f, j)
            })
        }
        return i
    }
    function e() {
        var f = function() {
            return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
        };
        return (f() + f() + "-" + f() + "-" + f() + "-" + f() + "-" + f() + f() + f())
    }
    var d = function(f) {
        if (!(this instanceof d)) {
            return new d(f)
        }
        if (!f) {
            f = {}
        }
        if (typeof f === "string") {
            f = {
                id: f
            }
        }
        this.el = d.create_stylesheet(f.id || e());
        if (f.media_query) {
            this.set_media_query(f.media_query)
        }
        this.selectors = {};
        this.selectors_order = [];
        this.animations = {};
        if (f.styles) {
            this.import_styles(f.styles)
        }
        if (f.animations) {
            this.import_animations(f.animations)
        }
        this.attach();
        d.register(this);
        return this
    };
    d.prototype = {
        add_px: function(f) {
            if (typeof f === "string" && f.match(/\D/)) {
                return f
            }
            return f + "px"
        },
        add_px_value: function(g, f) {
            switch (g) {
            case"top":
            case"right":
            case"bottom":
            case"left":
            case"width":
            case"height":
                return this.add_px(f);
            default:
                return f
            }
        },
        import_styles: function(g) {
            for (var f in g) {
                this.set(f, g[f])
            }
        },
        import_animations: function(g) {
            for (var f in g) {
                this.set_animation(f, g[f])
            }
        },
        set_media_query: function(f) {
            this.el.media = f || ""
        },
        set: function(f, i, h, j) {
            if (typeof this.selectors[f] === "undefined") {
                this.selectors[f] = {
                    properties: {},
                    properties_order: []
                };
                this.selectors_order.push(f)
            }
            f = this.selectors[f];
            if (typeof i === "object") {
                var g = i;
                j = h;
                for (i in g) {
                    if (typeof f.properties[i] === "undefined") {
                        f.properties_order.push(i)
                    }
                    h = g[i];
                    f.properties[i] = this.add_px_value(i, h)
                }
            } else {
                if (typeof f.properties[i] === "undefined") {
                    f.properties_order.push(i)
                }
                f.properties[i] = this.add_px_value(i, h)
            }
            if (typeof j === "undefined") {
                j = true
            }
            if (j) {
                this.update()
            }
        },
        get: function(f, g) {
            f = this.selectors[f];
            if (typeof f === "undefined") {
                return false
            }
            if (!g) {
                return f
            }
            g = f.properties[g];
            if (typeof g === "undefined") {
                return false
            }
            return g
        },
        has: function(f, g) {
            f = this.selectors[f];
            if (typeof f === "undefined") {
                return false
            }
            if (!g) {
                return true
            }
            g = f[g];
            if (typeof g === "undefined") {
                return false
            }
            return (typeof g !== "undefined") && g !== ""
        },
        set_selectors_order: function(f) {
            this.selectors_order = b(this.selectors, f);
            this.update();
            return true
        },
        set_properties_order: function(f, g) {
            if (!f) {
                for (f in this.selectors) {
                    if (!this.selectors.hasOwnProperty(f)) {
                        continue
                    }
                    f = this.selectors[f];
                    f.properties_order = b(f.properties, g || d.default_properties_order)
                }
                this.update();
                return true
            }
            f = this.get(f);
            if (!f) {
                return false
            }
            f.properties_order = b(f.properties, g || d.default_properties_order);
            this.update();
            return true
        },
        set_animation: function(j, g, i, h, m) {
            if (typeof this.animations[j] === "undefined") {
                this.animations[j] = {}
            }
            if (typeof g === "object") {
                var k = g;
                for (g in k) {
                    this.set_animation(j, g, k[g], false)
                }
                m = i;
                if (typeof m === "undefined") {
                    m = true
                }
                if (m) {
                    this.update()
                }
                return 
            }
            var l = this.animations[j];
            if (typeof l[g] === "undefined") {
                l[g] = {}
            }
            g = l[g];
            if (typeof i === "object") {
                var f = i;
                m = h;
                for (i in f) {
                    h = f[i];
                    g[i] = this.add_px_value(i, h)
                }
            } else {
                g[i] = this.add_px_value(i, h)
            }
            if (typeof m === "undefined") {
                m = true
            }
            if (m) {
                this.update()
            }
        },
        get_animation: function(h, f, g) {
            h = this.animations[h];
            if (typeof h === "undefined") {
                return false
            }
            if (!f) {
                return h
            }
            f = h[f];
            if (typeof f === "undefined") {
                return false
            }
            if (!g) {
                return f
            }
            g = f[g];
            if (typeof f === "undefined") {
                return false
            }
            return f
        },
        attach: function() {
            var f = document.getElementsByTagName("head")[0];
            if (!f) {
                return false
            }
            this.update();
            f.appendChild(this.el);
            return true
        },
        detach: function() {
            var f = document.getElementsByTagName("head")[0];
            if (!f) {
                return false
            }
            if (this.el.parentNode !== f) {
                return false
            }
            this.el.parentNode.removeChild(this.el);
            return true
        },
        update: function() {
            var f = this.css_text();
            if (this.el.styleSheet) {
                this.el.styleSheet.cssText = "\n" + f
            } else {
                while (this.el.hasChildNodes()) {
                    this.el.removeChild(this.el.lastChild)
                }
                this.el.appendChild(document.createTextNode("\n" + f))
            }
        },
        selectors_to_text: function(j, g) {
            g || (g = b(j));
            var f;
            var k = "";
            for (var h = 0; h < g.length; h++) {
                f = g[h];
                if (!(j.hasOwnProperty(f) && j[f])) {
                    continue
                }
                k += f + " {\n";
                k += this.properties_to_text(j[f].properties, j[f].properties_order);
                k += "}\n"
            }
            return k
        },
        properties_to_text: function(h, f, k) {
            f || (f = b(h));
            var l = "";
            var j;
            for (var g = 0; g < f.length; g++) {
                j = f[g];
                if (!(h.hasOwnProperty(j) && h[j] !== "")) {
                    continue
                }
                l += j + ": " + h[j] + ";\n"
            }
            return l
        },
        animations_to_text: function(n, f) {
            f || (f = b(n));
            var k = d.browser_prefixes.slice();
            k.push("");
            var j;
            var h;
            var m = "";
            for (var g = 0; g < f.length; g++) {
                h = f[g];
                if (!(n.hasOwnProperty(h) && n[h])) {
                    continue
                }
                for (var l = 0; l < k.length; l++) {
                    j = k[l];
                    m += "@" + (j ? "-" + j + "-" : "") + "keyframes " + h + " {\n";
                    m += this.keyframes_to_text(n[h], j);
                    m += "}\n"
                }
            }
            return m
        },
        keyframes_to_text: function(l, j) {
            var f = b(l);
            var h;
            var k = "";
            for (var g = 0; g < f.length; g++) {
                h = f[g];
                if (!(l.hasOwnProperty(h) && l[h])) {
                    continue
                }
                k += h + " {\n";
                k += this.properties_to_text(l[h], false, j);
                k += "}\n"
            }
            return k
        },
        css_text: function() {
            var f = this.selectors_to_text(this.selectors, this.selectors_order).replace(/</g, "&lt;").replace(/>/g, "&gt;");
            var g = this.animations_to_text(this.animations).replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return f + g
        },
        toString: function() {
            return this.css_text()
        }
    };
    d.instances = [];
    d.browser_prefixes = ["webkit", "moz", "ms", "o"];
    d.default_properties_order = ["font", "font-family", "font-size", "font-style", "font-variant", "font-weight", "@font-face", "font-size-adjust", "font-stretch", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "border", "border-top", "border-top-color", "border-top-style", "border-top-width", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-bottom", "border-bottom-color", "border-bottom-style", "border-bottom-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius", "background", "background-color", "background-position", "background-size", "background-repeat", "background-origin", "background-clip", "background-attachment", "background-image", "overflow", "overflow-x", "overflow-y", "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay", "transform", "transform-origin", "transform-style"];
    d.create_stylesheet = function(g) {
        var f = document.createElement("style");
        f.type = "text/css";
        if (g) {
            f.id = g
        }
        return f
    };
    d.register = function(f) {
        this.instances.push(f)
    };
    a.Styler = d
})(this.Tumblr || (this.Tumblr = {}));
/*! scripts/tumblelog/follow_teaser.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.FollowTeaser = (function() {
    var h = false, o = false, n = false, a = false, l = {}, c = 310, p = 110, i = false, b = new Tumblr.Styler({
        id: "tumblr_teaser_follow_css",
        styles: {
            "#tumblr_teaser_follow": {
                display: "block",
                opacity: "1",
                visibility: "hidden",
                position: "fixed",
                bottom: "0",
                right: "0",
                width: "1px",
                height: "1px",
                "z-index": "2147483647"
            },
            "#tumblr_teaser_follow.open": {
                visibility: "visible",
                width: c + "px",
                height: p + "px"
            }
        }
    });
    function q(w, t) {
        var x = [];
        for (var u in w) {
            var s = t ? t + "[" + u + "]": u, r = w[u];
            x.push(typeof r == "object" ? q(r, s) : encodeURIComponent(s) + "=" + encodeURIComponent(r))
        }
        return x.join("&")
    }
    var g = 0;
    var e = 9000;
    var d = 200;
    var f = false;
    function j() {
        if (f) {
            return 
        }
        var s = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
        if ((s > e || (Tumblr.FollowTeaser.current_page >= 2 && s > 500)) && Tumblr.FollowTeaser.can_show()) {
            Tumblr.FollowTeaser.scroll_listener(false);
            return 
        }
        if (Tumblr.FollowTeaser.infer_infinite_scroll) {
            var r = document.body.clientHeight;
            if (r > g + 100) {
                Tumblr.FollowTeaser.current_page++;
                g = r
            }
        }
        f = true;
        setTimeout(function() {
            f = false
        }, d)
    }
    var m;
    function k() {
        if (f) {
            return 
        }
        clearTimeout(m);
        m = setTimeout(j, 300);
        f = true;
        setTimeout(function() {
            f = false
        }, d)
    }
    return {
        infer_infinite_scroll: false,
        current_page: 1,
        can_show: function() {
            n = true;
            var r = this.open(c, p);
            if (h) {
                h.contentWindow.postMessage("follow_teaser;show", "*")
            }
            return r
        },
        create_from_tumblr_controls: function(r) {
            if (!(o = document.getElementById("tumblr_controls"))) {
                return false
            }
            if (!(url_matches = o.src.match(/([^\?#]+\/)([^\/\?\#]\.html)?(\?_v=[^\&#]+)?([^#]*)(.*)?/i))) {
                return false
            }
            this.initialize({
                url: (r || (url_matches[1] + "follow.html")) + url_matches[4] + url_matches[5]
            })
        },
        create_iframe: function(r) {
            var s = document.createElement("iframe");
            s.id = "tumblr_teaser_follow";
            s.width = 1;
            s.height = 1;
            s.frameBorder = 0;
            s.scrolling = "no";
            s.src = r;
            document.body.appendChild(s);
            return s
        },
        scroll_listener: function(r) {
            if (r) {
                if (window.addEventListener) {
                    window.addEventListener("scroll", k)
                } else {
                    if (window.attachEvent) {
                        window.attachEvent("onscroll", k)
                    }
                }
            } else {
                if (window.removeEventListener) {
                    window.removeEventListener("scroll", k)
                } else {
                    if (window.detachEvent) {
                        window.detachEvent("onscroll", k)
                    }
                }
            }
        },
        initialize: function(t) {
            if (!Tumblr.PostMessageListener) {
                return false
            }
            if (!t) {
                t = {}
            }
            g = document.body.clientHeight;
            e = Math.min(e, 3 * Tumblr.windowDimensions().height);
            var r = this;
            Tumblr.PostMessageListener.initialize(function(x, w) {
                r.post_message_event(x, w)
            });
            h = document.getElementById("tumblr_teaser_tagged");
            o = document.getElementById("tumblr_controls");
            if (!h) {
                var u = t.query || {};
                var s = t.url || "http://www.tumblr.com/assets/html/follow.html";
                var v = (s.indexOf("#") < 0 ? "#" : "&") + q(u);
                h = this.create_iframe(s + v)
            }
        },
        post_message_event: function(s, r) {
            if (!s || s.length < 2 || s[0] !== "follow_iframe") {
                return false
            }
            switch (s[1]) {
            case"resize":
                if (s.length > 3) {
                    c = s[2];
                    p = s[3];
                    b.set("#tumblr_teaser_follow.open", {
                        width: c + "px",
                        height: p + "px"
                    })
                }
                a = true;
                this.open(c, p);
                break;
            case"dismiss":
                this.close();
                break
            }
            function t(u, v) {
                if (!(typeof u === "string" && u.match(/\d+%/))) {
                    u = parseInt(u, 10) || 0
                }
                if (!(typeof v === "string" && v.match(/\d+%/))) {
                    v = parseInt(v, 10) || 0
                }
                if (u) {
                    tumblelog_iframe.width = u
                }
                if (v) {
                    tumblelog_iframe.height = v
                }
            }
        },
        open: function(s, r) {
            if (!h) {
                return false
            }
            if (!(n && a)) {
                return false
            }
            if (i) {
                return false
            }
            i = true;
            Tumblr.addClass(h, "open");
            o.style.display = "none";
            return true
        },
        close: function() {
            if (!h) {
                return 
            }
            if (!i) {
                return 
            }
            i = false;
            n = false;
            Tumblr.removeClass(h, "open");
            o.style.display = "block"
        },
        toggle: function() {
            if (!h) {
                return 
            }
            if (i) {
                return this.close()
            } else {
                this.open()
            }
        }
    }
})();
/*! scripts/tumblelog/teaser.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.Teaser = (function() {
    var a = false, e = false, b = false, f = {
        hide: false,
        sneeze: false
    }, c = false, d = 360;
    return {
        is_enabled: function() {
            return !!e
        },
        initialize: function(h) {
            e = document.getElementById("teaser_iframe");
            if (!e) {
                return false
            }
            a = e.parentNode;
            if (!h) {
                h = {}
            }
            if (h.slide_page) {
                c = h.slide_page
            }
            if (h.width) {
                d = h.width
            }
            this.prepare(false);
            var g = this;
            if ("addEventListener" in a) {
                a.addEventListener("mouseout", function(i) {
                    if (!(i.relatedTarget || i.toElement)) {
                        g.close()
                    }
                })
            }
        },
        prepare: function(i) {
            if (!e) {
                return 
            }
            var g = 0.25;
            var j = 0.3;
            a.style.display = "block";
            a.style.opacity = "0";
            a.style.visibility = "hidden";
            a.style.position = "fixed";
            a.style.top = "0";
            a.style.right = "0";
            a.style.bottom = "0";
            a.style.width = "1px";
            a.style.height = "100%";
            a.style.zIndex = "2147483646";
            a.style.overflow = "hidden";
            try {
                a.style.backgroundColor = "rgba(0,0,0, 0.6)"
            } catch (h) {}
            a.style.webkitTransition = "width " + g + "s ease-in-out";
            a.style.MozTransition = "width " + g + "s ease-in-out";
            a.style.msTransition = "width " + g + "s ease-in-out";
            a.style.OTransition = "width " + g + "s ease-in-out";
            a.style.transition = "width " + g + "s ease-in-out";
            e.style.display = "block";
            e.style.opacity = "1";
            e.style.visibility = "visible";
            e.style.position = "absolute";
            e.style.top = "0";
            e.style.right = "0";
            e.style.minWidth = "100%";
            e.style.width = d + "px";
            e.style.height = "100%";
            if (c && document.body.parentNode) {
                document.body.parentNode.style.position = "relative";
                document.body.parentNode.style.webkitTransition = "right " + g + "s ease-in-out";
                document.body.parentNode.style.MozTransition = "right " + g + "s ease-in-out";
                document.body.parentNode.style.msTransition = "right " + g + "s ease-in-out";
                document.body.parentNode.style.OTransition = "right " + g + "s ease-in-out";
                document.body.parentNode.style.transition = "right " + g + "s ease-in-out";
                document.body.parentNode.style.right = "0"
            }
        },
        refresh: function() {
            if (!e) {
                return 
            }
            e.contentWindow.postMessage("teaser;refresh", "*")
        },
        reset_timers: function() {
            clearTimeout(f.hide);
            f.hide = false;
            clearTimeout(f.sneeze);
            f.sneeze = false
        },
        reset: function() {
            if (!e) {
                return 
            }
            this.reset_timers();
            a.style.opacity = "0";
            this.refresh()
        },
        open: function() {
            if (!e) {
                return 
            }
            if (b) {
                return 
            }
            b = true;
            a.style.opacity = "1";
            a.style.visibility = "visible";
            a.style.width = d + "px";
            if (c && document.body.parentNode) {
                document.body.parentNode.style.right = d + "px"
            }
            e.contentWindow.postMessage("teaser;show", "*");
            this.reset_timers();
            clearTimeout(f.sneeze);
            f.sneeze = setTimeout(function() {
                f.sneeze = false
            }, 100)
        },
        close: function() {
            if (!e) {
                return 
            }
            if (!b || f.sneeze) {
                return 
            }
            b = false;
            a.style.opacity = "1";
            a.style.visibility = "visible";
            a.style.width = "1px";
            if (c && document.body.parentNode) {
                document.body.parentNode.style.right = "0"
            }
            e.contentWindow.postMessage("teaser;hide", "*");
            this.reset_timers();
            var g = this;
            f.hide = setTimeout(function() {
                g.reset()
            }, 300)
        },
        toggle: function() {
            if (!e) {
                return 
            }
            if (b) {
                return this.close()
            } else {
                this.open()
            }
        }
    }
})();
/*! scripts/tumblelog/legacy_tumblelog_video.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.flashVersion = function() {
    if (navigator.plugins && navigator.plugins.length > 0) {
        var a = navigator.mimeTypes;
        if (a && a["application/x-shockwave-flash"] && a["application/x-shockwave-flash"].enabledPlugin && a["application/x-shockwave-flash"].enabledPlugin.description) {
            return parseInt(a["application/x-shockwave-flash"].enabledPlugin.description.split(" ")[2].split(".")[0], 10)
        }
    } else {
        if (navigator.appVersion.indexOf("Mac")===-1 && window.execScript) {
            try {
                var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                var b = c.GetVariable("$version");
                return b.split(",")[0].split(" ")[1]
            } catch (d) {}
            return 0
        }
    }
};
Tumblr.replaceIfFlash = function(b, a, c) {
    if (Tumblr.flashVersion() >= b) {
        document.getElementById(a).innerHTML = c
    }
};
function flashVersion() {
    return Tumblr.flashVersion()
}
function replaceIfFlash(b, a, c) {
    Tumblr.replaceIfFlash(b, a, c)
};
/*! scripts/tumblelog/utilities.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.hasClass = function(b, a) {
    return new RegExp("(\\s|^)" + a + "(\\s|$)").test(b.className)
};
Tumblr.addClass = function(b, a) {
    if (!Tumblr.hasClass(b, a)) {
        b.className += " " + a
    }
};
Tumblr.removeClass = function(c, a) {
    if (Tumblr.hasClass(c, a)) {
        var b = new RegExp("(\\s|^)" + a + "(\\s|$)");
        c.className = c.className.replace(b, " ")
    }
};
Tumblr.toggleClass = function(b, a) {
    if (Tumblr.hasClass(b, a)) {
        Tumblr.removeClass(b, a)
    } else {
        Tumblr.addClass(b, a)
    }
};
/*! scripts/tumblelog/lightbox.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.windowDimensions = function() {
    if (window.innerWidth !== undefined) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    } else {
        if (document.documentElement) {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        } else {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight
            }
        }
    }
};
Tumblr.Lightbox = (function() {
    var g = false;
    var i = false;
    var o = false;
    var d = [];
    var j = false;
    var h = false;
    var p = false;
    var f = false;
    var c = {
        left: false,
        center: false,
        right: false
    };
    function e() {
        if (window.innerWidth !== undefined) {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        } else {
            if (document.documentElement) {
                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight
                }
            } else {
                return {
                    width: document.body.clientWidth,
                    height: document.body.clientHeight
                }
            }
        }
    }
    function n(s, v) {
        if (document.getElementById("tumblr_lightbox")) {
            return 
        }
        if (!v) {
            v = 1
        }
        d = s;
        if (navigator && navigator.userAgent.indexOf("Firefox")!=-1) {
            var z = document.createElement("input");
            z.setAttribute("id", "Tumblr_Lightbox_focus_input");
            z.setAttribute("type", "text");
            z.style.position = "fixed";
            z.style.top = 0;
            z.style.left = 0;
            document.body.appendChild(z);
            z.focus();
            document.body.removeChild(z)
        } else {
            window.focus()
        }
        if (!g) {
            if (window.onkeydown) {
                i = window.onkeydown
            }
            window.onkeydown = function(C) {
                if (document.getElementById("tumblr_lightbox")) {
                    if (!C) {
                        C = window.event
                    }
                    var B = C.charCode ? C.charCode: C.keyCode;
                    if (!C.shiftKey&&!C.ctrlKey&&!C.altKey&&!C.metaKey) {
                        if (B == 37) {
                            if (h > 1) {
                                l(h - 1)
                            }
                        } else {
                            if (B == 39) {
                                if (h < d.length) {
                                    l(h + 1)
                                }
                            } else {
                                if (B == 27 || B == 32 || B == 74 || B == 75) {
                                    m()
                                }
                            }
                        }
                    } else {
                        if ((C.ctrlKey || C.metaKey) && B == 87) {
                            m();
                            return false
                        }
                    }
                }
                if (i) {
                    i()
                }
            };
            if (window.onresize) {
                o = window.onresize
            }
            window.onresize = function() {
                if (document.getElementById("vignette")) {
                    document.getElementById("vignette").style.display = "none";
                    if (f) {
                        clearTimeout(f)
                    }
                    f = setTimeout(function() {
                        document.getElementById("vignette").style.display = "inline-block"
                    }, 100)
                }
                k();
                if (o) {
                    o()
                }
            };
            if (navigator && navigator.userAgent.search("iPad")!=-1) {
                document.addEventListener("touchmove", function() {
                    m()
                }, false)
            }
            g = true
        }
        document.body.style.overflow = "hidden";
        var q = document.createElement("div");
        q.setAttribute("id", "tumblr_lightbox");
        if (navigator && navigator.userAgent.search("iPad")!=-1) {
            q.style.position = "absolute";
            q.style.top = document.body.scrollTop + "px";
            q.style.height = window.innerHeight + "px"
        } else {
            q.style.position = "fixed";
            q.style.top = "0px";
            q.style.bottom = "0px"
        }
        q.style.left = "0px";
        q.style.right = "0px";
        q.style.zIndex = 4294967294;
        q.style.overflow = "hidden";
        q.style.backgroundColor = (navigator && navigator.userAgent.indexOf("MSIE")!=-1) ? "#222" : "rgba(17,17,17,0.92)";
        q.onclick = function() {
            if (j) {
                j = false
            } else {
                m()
            }
        };
        if (!(navigator && navigator.userAgent.search("iPad")!=-1)&&!(navigator && navigator.userAgent.search("MSIE")!=-1)) {
            var y = document.createElement("img");
            y.setAttribute("id", "vignette");
            y.setAttribute("src", "//assets.tumblr.com/images/full_page_vignette.png");
            y.style.position = "absolute";
            y.style.width = "100%";
            y.style.height = "100%";
            y.style.left = "0px";
            y.style.top = "0px";
            q.appendChild(y);
            var x = document.createElement("div");
            x.style.position = "absolute";
            x.style.width = "100%";
            x.style.height = "100%";
            x.style.left = "0px";
            x.style.top = "0px";
            q.appendChild(x)
        }
        var t = document.createElement("div");
        t.style.position = "absolute";
        t.style.left = "50%";
        t.style.top = "50%";
        if (!document.getElementById("tumblr_form_key")) {
            t.style.width = "100%"
        }
        q.appendChild(t);
        var r = ["left", "center", "right"];
        while (stage_name = r.pop()) {
            var w = document.createElement("a");
            w.setAttribute("id", "tumblr_lightbox_" + stage_name + "_link");
            w.setAttribute("href", "#");
            if (d.length < 2) {
                w.style.cursor = "default"
            }
            t.appendChild(w);
            var u = document.createElement("img");
            u.setAttribute("id", "tumblr_lightbox_" + stage_name + "_image");
            u.setAttribute("src", "//assets.tumblr.com/images/x.gif");
            u.style.mozBorderRadius = "3px";
            u.style.webkitBorderRadius = "3px";
            u.style.borderRadius = "3px";
            if (navigator && navigator.userAgent.indexOf("Chrome")!=-1) {
                u.style.moxBoxShadow = "0 4px 30px rgba(0,0,0,1)";
                u.style.webkitBoxShadow = "0 4px 30px rgba(0,0,0,1)";
                u.style.boxShadow = "0 4px 30px rgba(0,0,0,1)"
            }
            u.style.borderWidth = "0px";
            u.style.position = "absolute";
            if (stage_name == "center") {
                u.style.zIndex = 4294967295
            }
            w.appendChild(u)
        }
        var A = document.createElement("div");
        A.setAttribute("id", "tumblr_lightbox_caption");
        A.style.position = "absolute";
        A.style.textAlign = "center";
        A.style.font = "bold 17px 'HelveticaNeue','Helvetica','Arial',sans-serif";
        A.style.color = "#fff";
        A.style.paddingTop = "20px";
        A.style.textShadow = "0 4px 30px rgba(0,0,0,1)";
        A.style.display = "inline-block";
        A.style.textRendering = "optimizeLegibility";
        t.appendChild(A);
        document.body.appendChild(q);
        l(v);
        k()
    }
    function m() {
        document.body.style.overflow = "";
        document.getElementById("tumblr_lightbox").style.display = "none";
        document.body.removeChild(document.getElementById("tumblr_lightbox"));
        if (Tumblr && Tumblr.Events) {
            Tumblr.Events.trigger("tumblr_lightbox:form:hide")
        }
    }
    function l(r) {
        h = r;
        p = Math.round(Math.random() * 1000000000000);
        document.getElementById("tumblr_lightbox_left_link").onclick = function() {
            j = true;
            l(r - 1);
            return false
        };
        if (d.length == 1) {
            document.getElementById("tumblr_lightbox_center_link").onclick = function() {
                return false
            }
        } else {
            if (r < d.length) {
                document.getElementById("tumblr_lightbox_center_link").onclick = function() {
                    j = true;
                    l(r + 1);
                    return false
                }
            } else {
                document.getElementById("tumblr_lightbox_center_link").onclick = function() {
                    j = true;
                    l(1);
                    return false
                }
            }
        }
        document.getElementById("tumblr_lightbox_right_link").onclick = document.getElementById("tumblr_lightbox_center_link").onclick;
        c.left = false;
        c.center = false;
        c.right = false;
        b("center", r - 1);
        if (r > 1) {
            b("left", r - 2)
        }
        if (r < d.length) {
            b("right", r)
        }
        if (r + 1 < d.length) {
            var q = new Image();
            q.src = d[r + 1].low_res
        }
    }
    function b(r, t) {
        var q = new Image();
        var s = false;
        q.className = p;
        q.onload = function() {
            if (this.className == p) {
                this.className = "high-res";
                c[r] = this;
                k()
            }
        };
        q.src = d[t].high_res;
        if (!q.complete) {
            s = new Image();
            s.className = p;
            s.onload = function() {
                if (this.className == p && (!c[r] || c[r].className == "placeholder")) {
                    this.className = "low-res";
                    c[r] = this;
                    k()
                }
            };
            s.src = d[t].low_res;
            if (d[t].width && d[t].height) {
                if (s) {
                    s.style.maxWidth = d[t].width + "px";
                    s.style.maxHeight = d[t].height + "px"
                }
                q.style.maxWidth = d[t].width + "px";
                q.style.maxHeight = d[t].height + "px"
            }
            if (!s.complete && (d[t].width && d[t].height)) {
                c[r] = new Image(d[t].width, d[t].height);
                c[r].style.maxWidth = d[t].width + "px";
                c[r].style.maxHeight = d[t].height + "px";
                c[r].src = "//assets.tumblr.com/images/x.gif";
                c[r].className = "placeholder"
            }
        }
    }
    function k() {
        var v = ["right", "left", "center"];
        while (stage_name = v.pop()) {
            var s = document.getElementById("tumblr_lightbox_" + stage_name + "_image");
            if (!s) {
                continue
            }
            var t = c[stage_name];
            if (!t) {
                s.style.display = "none";
                continue
            } else {
                s.style.display = "inline-block"
            }
            var r = t.style.maxWidth ? parseInt(t.style.maxWidth, 10): t.width;
            var q = t.style.maxHeight ? parseInt(t.style.maxHeight, 10): t.height;
            if (e().width / e().height < r / q) {
                var u = (d.length == 1) ? 0.85: 0.75;
                if (e().width * u > r && (t.className == "high-res" || t.style.maxWidth)) {
                    s.style.width = r + "px";
                    s.style.height = q + "px"
                } else {
                    s.style.height = (q * ((e().width * u) / r)) + "px";
                    s.style.width = (e().width * u) + "px"
                }
            } else {
                if (e().height * 0.85 > q && (t.className == "high-res" || t.style.maxHeight)) {
                    s.style.width = r + "px";
                    s.style.height = q + "px"
                } else {
                    s.style.width = (r * ((e().height * 0.85) / q)) + "px";
                    s.style.height = (e().height * 0.85) + "px"
                }
            }
            if (stage_name == "center") {
                s.style.left = (0 - parseInt(s.style.width, 10) / 2) + "px";
                s.style.top = (0 - parseInt(s.style.height, 10) / 2) + "px"
            } else {
                if (stage_name == "right") {
                    s.style.left = (e().width * 0.42) + "px";
                    s.style.top = (0 - parseInt(s.style.height, 10) / 2) + "px"
                } else {
                    s.style.left = (0 - parseInt(s.style.width, 10) - e().width * 0.42) + "px";
                    s.style.top = (0 - parseInt(s.style.height, 10) / 2) + "px"
                }
            }
            s.src = t.src;
            s.style.backgroundColor = (t.className == "placeholder") ? ((navigator && navigator.userAgent.indexOf("MSIE")!=-1) ? "#444" : "rgba(255,255,255,0.05)") : "transparent";
            if (stage_name == "center" && d[h - 1].caption) {
                document.getElementById("tumblr_lightbox_caption").innerHTML = d[h - 1].caption;
                document.getElementById("tumblr_lightbox_caption").style.width = (e().width * 0.7) + "px";
                document.getElementById("tumblr_lightbox_caption").style.top = (parseInt(s.style.height, 10) * 0.5) + "px";
                document.getElementById("tumblr_lightbox_caption").style.left = (0 - e().width * 0.35) + "px";
                document.getElementById("tumblr_lightbox_caption").style.display = "block"
            } else {
                if (stage_name == "center") {
                    document.getElementById("tumblr_lightbox_caption").style.display = "none"
                }
            }
        }
    }
    function a() {
        return !!document.getElementById("tumblr_lightbox")
    }
    return {
        init: n,
        isOpen: a
    }
})();
/*! scripts/tumblelog/iframe_preloader.js */
Tumblr.IframePreloader = function(a) {
    for (var b in a) {
        if (typeof b == "object") {
            for (var c in b) {
                this.options[b][c] = b[c]
            }
        } else {
            this.options[b] = a[b]
        }
    }
    this.__create()
};
Tumblr.IframePreloader.prototype = {
    options: {
        iframe_src: "",
        iframe_before_onload: function() {},
        iframe_after_onload: function() {},
        iframe_class: "",
        iframe_styles: {
            zIndex: 8675309,
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            background: "transparent",
            border: "0px",
            overflow: "hidden"
        },
        preloader_class: "",
        preloader_innerHTML: '<div style="position:absolute; top:0; left:0; right:0; bottom:0; background:transparent center no-repeat url(\'/images/loading_big_fff_on_2e3133.gif?709\')"><img style="position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.3;" src="//assets.tumblr.com/images/full_page_vignette.png?709"/></div>',
        preloader_styles: {
            zIndex: 8675310,
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            background: "rgba(17,17,17,0.92)"
        },
        close_class: "",
        close_innerHTML: "&times;",
        close_styles: {
            zIndex: 8675311,
            position: "fixed",
            top: "10px",
            right: "15px",
            cursor: "pointer",
            font: "bold 20px Helvetica, sans-serif"
        }
    },
    iframe_loaded: false,
    __create: function() {
        this.id = Math.random().toString().split(".")[1];
        this.$container = document.createElement("div");
        this.$preloader = document.createElement("div");
        this.$preloader.id = "iframe_preloader-preloader-" + this.id;
        this.$preloader.className = this.options.preloader_class;
        for (var d in this.options.preloader_styles) {
            this.$preloader.style[d] = this.options.preloader_styles[d]
        }
        this.$preloader.innerHTML = this.options.preloader_innerHTML;
        this.$iframe = document.createElement("iframe");
        this.$iframe.id = "iframe_preloader-iframe-" + this.id;
        this.$iframe.className = this.options.iframe_class;
        for (var c in this.options.iframe_styles) {
            this.$iframe.style[c] = this.options.iframe_styles[c]
        }
        this.$iframe.src = this.options.iframe_src;
        this.$iframe.scrolling = "no";
        this.$iframe.frameborder = "0";
        this.$close = document.createElement("div");
        this.$close.id = "iframe_preloader-close-" + this.id;
        this.$close.className = this.options.close_class;
        for (var b in this.options.close_styles) {
            this.$close.style[b] = this.options.close_styles[b]
        }
        this.$close.innerHTML = this.options.close_innerHTML;
        var a = this;
        this.$close.onclick = function() {
            if (typeof pano_iframe_preloader != "undefined" && pano_iframe_preloader) {
                pano_iframe_preloader.remove()
            }
        };
        this.$iframe.onload = function() {
            a.options.iframe_before_onload();
            a.iframe_loaded = true;
            a.show();
            a.$close.style.display = "none";
            a.options.iframe_after_onload()
        };
        this.hide_iframe();
        this.lock_body();
        this.$container.appendChild(this.$preloader);
        this.$container.appendChild(this.$iframe);
        this.$container.appendChild(this.$close);
        document.body.appendChild(this.$container)
    },
    hide: function() {
        this.hide_iframe();
        this.hide_preloader();
        this.unlock_body()
    },
    show: function() {
        if (this.iframe_loaded) {
            this.show_iframe();
            this.hide_preloader()
        } else {
            this.hide_iframe();
            this.show_preloader()
        }
        this.lock_body()
    },
    remove: function() {
        this.hide();
        document.body.removeChild(this.$container);
        delete this.$container;
        delete this.$preloader;
        delete this.$iframe
    },
    lock_body: function() {
        document.body.style.overflow = "hidden"
    },
    unlock_body: function() {
        document.body.style.overflow = ""
    },
    show_preloader: function() {
        this.window.focus();
        this.$preloader.style.display = "block"
    },
    hide_preloader: function() {
        this.$preloader.style.display = "none"
    },
    show_iframe: function() {
        this.$iframe.contentWindow.focus();
        this.$iframe.style.opacity = 1
    },
    hide_iframe: function() {
        this.$iframe.style.opacity = 0
    }
};
var pano_iframe_preloader = false;
Tumblr.PanoLightboxInit = function(b, a) {
    if ((!b && window.event && (window.event.metaKey || window.event.altKey)) || (b && (b.metaKey || b.altKey))) {
        return true
    }
    pano_iframe_preloader = new Tumblr.IframePreloader({
        iframe_src: a
    });
    return false
};
/*! scripts/tumblelog/reblog_post_iframe.js */
(function() {
    var b, h;
    if (!(Tumblr && Tumblr.PostMessageChannel)) {
        return 
    }
    function c() {
        if (b) {
            return 
        }
        b = new Tumblr.Styler({
            id: "tumblr_reblog_post_iframe_css",
            styles: {
                "#tumblr_reblog_post_iframe": {
                    position: "fixed",
                    right: 0,
                    bottom: 0,
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                    background: "transparent",
                    "z-index": "2147483647"
                },
                "body._t_reblog_iframe_opened": {
                    overflow: "hidden"
                },
                "._t_reblog_iframe_opened #tumblr_reblog_post_iframe": {
                    width: "100%",
                    height: "100%"
                }
            }
        })
    }
    function g(j) {
        var i = j.origin + "/detached/reblog/";
        i.replace(/^http:\/\//, "https://");
        i += j.reblogId;
        i += "/";
        i += j.reblogKey;
        return i
    }
    function a(i) {
        if (h) {
            f()
        }
        if ("reblogId" in i) {
            i = g(i)
        }
        var j = document.createElement("iframe");
        j.id = "tumblr_reblog_post_iframe";
        j.frameBorder = "0";
        j.scrolling = "yes";
        j.width = "1";
        j.height = "1";
        j.src = i + "?t=" + new Date().getTime();
        h = j;
        c();
        document.body.appendChild(j)
    }
    function d() {
        if (h) {
            document.body.className += " _t_reblog_iframe_opened"
        } else {
            f()
        }
    }
    function f() {
        if (h) {
            document.body.removeChild(h);
            h = null
        }
        document.body.className = document.body.className.replace(/\_t_reblog_iframe_opened\b/, "")
    }
    Tumblr.ReblogPostIframe = {};
    var e = new Tumblr.PostMessageChannel({
        namespace: "reblog_iframe"
    });
    e.listen_to({
        reblog_post: a,
        reblog_post_frame_loaded: d,
        close_reblog_post_frame: f
    })
})();
/*! scripts/tumblelog/like_button.js */
("Tumblr" in window) || (window.Tumblr = {});
(function() {
    var a;
    if (window.JSON && window.JSON.stringify && window.JSON.parse) {
        a = window.JSON
    } else {
        if (_t) {
            a = _t.getCleanObject("JSON")
        }
    }
    Tumblr.LikeButtonUpdate = (function() {
        return {
            post_message_event: function(d, b) {
                if (d[0] === "tumblelog_like") {
                    if (d[1] && document.getElementById("like_button_" + d[1])) {
                        var c = document.getElementById("like_button_" + d[1]);
                        if (d[2] === "liked") {
                            Tumblr.addClass(c, "liked")
                        } else {
                            Tumblr.removeClass(c, "liked")
                        }
                    }
                }
            }
        }
    })();
    Tumblr.LikeButton = {
        loaded_iframes: {},
        like_statuses: {},
        get_status_by_page: function(d) {
            var b = document.getElementById("tumblr_controls");
            if (b) {
                var c = "get_like_states;" + a.stringify({
                    page: d
                });
                b.contentWindow.postMessage(c, "*")
            }
        },
        get_status_by_post_ids: function(c) {
            var b = document.getElementById("tumblr_controls");
            if (b) {
                var d = "get_like_states;" + a.stringify({
                    ids: c
                });
                b.contentWindow.postMessage(d, "*")
            }
        },
        post_message_event: function(e, c) {
            if (e[0] === "like_state_update") {
                var f = a.parse(e[1]);
                if (f.length) {
                    for (var d = 0, b = f.length; d < b; d++) {
                        Tumblr.LikeButton.queue_like_status(f[d]);
                        Tumblr.LikeButton.update_like_state(f[d])
                    }
                } else {
                    Tumblr.LikeButton.queue_like_status(f);
                    Tumblr.LikeButton.update_like_state(f)
                }
            }
        },
        logged_in_iframe_loaded: function(n, k) {
            if (n[0] === "logged_in_iframe_loaded") {
                var h = "";
                var l = "";
                var m = window.location.pathname;
                if (m.indexOf("page")!==-1 || m.indexOf("post")!==-1) {
                    var f = m.split("/");
                    for (var d = 0; d < f.length; d++) {
                        if (f[d] === "page" && f[d++]) {
                            h = f[d++];
                            break
                        }
                        if (f[d] === "post" && f[d++]) {
                            l = f[d++];
                            break
                        }
                    }
                }
                if (l) {
                    Tumblr.LikeButton.get_status_by_post_ids([l])
                } else {
                    if (h) {
                        Tumblr.LikeButton.get_status_by_page(h)
                    } else {
                        var g = [];
                        var c = document.querySelectorAll(".like_button");
                        for (var b = 0; b < c.length; b++) {
                            var e = c[b];
                            if (e.attributes["data-post-id"]) {
                                g.push(e.attributes["data-post-id"].value)
                            }
                        }
                        if (g.length > 0) {
                            Tumblr.LikeButton.get_status_by_post_ids(g)
                        }
                    }
                }
            }
        },
        like_iframe_loaded: function(c, b) {
            if (c[0] === "like_iframe_load") {
                var d = a.parse(c[1]);
                if (d.post_id) {
                    Tumblr.LikeButton.loaded_iframes[d.post_id] = 1;
                    Tumblr.LikeButton.check_like_status(d.post_id, true)
                }
            }
        },
        check_like_status: function(c, b) {
            var e = Tumblr.LikeButton.like_statuses[c];
            if (e) {
                var d = {
                    post_id: c,
                    state: (e === "liked") ? true: false
                };
                Tumblr.LikeButton.update_like_state(d)
            }
        },
        queue_like_status: function(b) {
            if (b.post_id) {
                Tumblr.LikeButton.like_statuses[b.post_id] = (b.state) ? "liked" : "unliked"
            }
        },
        update_like_state: function(c) {
            if (c.post_id) {
                var b = document.getElementById("like_iframe_" + c.post_id);
                if (b) {
                    b.contentWindow.postMessage("state_update;" + a.stringify(c), "http://assets.tumblr.com")
                }
            }
        }
    }
}).call(this);
/*! scripts/tumblelog/post_message_form_resize.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.TumblelogFormResize = (function() {
    return {
        post_message_event: function(d, b) {
            if (d[0] === "resize_tumblelog_form_iframe") {
                var e = d[1];
                var c = document.getElementById(e);
                var a = parseInt(d[2], 10);
                if (e) {
                    c.height = a
                }
            }
        }
    }
})();
/*! scripts/tumblelog/post_message_photoset_resize.js */
Tumblr.PhotosetResize = (function() {
    return {
        post_message_event: function(c, b) {
            if (c[0] === "resize_photoset_iframe") {
                var d = c[1], a = parseInt(c[2], 10);
                document.getElementById("photoset_iframe_" + d).height = a
            }
        }
    }
})();
/*! scripts/tumblelog/feature_analytics.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.AnalyticsFeatureSupport = (function() {
    return {
        post_message_event: function(c, a) {
            if (c[0] === "openInMobileAppSuccess") {
                if (typeof(open_in_mobile_app) === "function") {
                    if (c[1] && c[1].length) {
                        var b = parseInt(c[1], 10);
                        open_in_mobile_app(b)
                    }
                }
            }
        }
    }
})();
/*! scripts/tumblelog/feature_iframe.js */
Tumblr.IframeFeatureSupport = (function() {
    var h;
    var e;
    var c;
    var d = new Tumblr.Styler({
        id: "tumblr_iframe_css",
        styles: {
            ".tumblr_controls": {
                position: "absolute",
                top: "0",
                right: "0",
                display: "block",
                opacity: "1",
                width: "1px",
                height: "1px",
                "z-index": "2147483647",
                visibility: "hidden",
                "pointer-events": "none"
            },
            ".tumblr_controls.visible": {
                visibility: "visible",
                "pointer-events": "all"
            },
            ".tumblr_controls.sticky": {
                position: "fixed"
            },
            ".tumblr_controls.transition": {
                "-webkit-transition": "top 0.1s ease",
                "-moz-transition": "top 0.1s ease",
                "-ms-transition": "top 0.1s ease",
                "-o-transition": "top 0.1s ease",
                transition: "top 0.1s ease"
            },
            "iframe#tumblr_controls.tumblr_controls.sticky.transition": {
                "-webkit-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                "-moz-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                "-ms-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                "-o-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                animation: "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                top: "0 !important"
            },
            ".tumblr_controls.sticky.transition": {
                "-webkit-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                "-moz-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                "-ms-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                "-o-animation": "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                animation: "tumblr_controls_fade_in 0.3s 0.2s linear 1 both",
                top: "0 !important"
            },
            ".tumblr_controls.flash_fix": {
                visibility: "hidden !important"
            }
        },
        animations: {
            tumblr_controls_fade_in: {
                "0%": {
                    opacity: 0
                },
                "100%": {
                    opacity: 1
                }
            }
        }
    });
    function f() {
        var j, k, i = document.querySelector('meta[name="color:Tumblr Controls"]');
        if (i) {
            j = i.getAttribute("content")
        }
        if (!j) {
            j = "default"
        }
        h.contentWindow.postMessage("color_match;" + j, e)
    }
    function g(i, j) {
        if (!(typeof i === "string" && i.match(/\d+%/))) {
            i = parseInt(i, 10) || 0
        }
        if (!(typeof j === "string" && j.match(/\d+%/))) {
            j = parseInt(j, 10) || 0
        }
        Tumblr.addClass(h, "visible");
        if (i) {
            h.width = i;
            d.set("#tumblr_controls", "width", i + "px")
        }
        if (j) {
            h.height = j;
            d.set("#tumblr_controls", "height", j + "px")
        }
    }
    var b = (function() {
        var l = [];
        var q = false;
        var i = 200;
        var k = false;
        function j() {
            if (window.addEventListener) {
                window.addEventListener("scroll", p)
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onscroll", p)
                }
            }
        }
        function n() {
            if (window.removeEventListener) {
                window.removeEventListener("scroll", p)
            } else {
                if (window.detachEvent) {
                    window.detachEvent("onscroll", p)
                }
            }
        }
        function p(t) {
            if (q) {
                clearTimeout(k);
                return 
            }
            var r = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
            var u = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
            for (var s = 0; s < l.length; s++) {
                l[s].call(this, t, r, u)
            }
            if (i && t) {
                q = true;
                setTimeout(function() {
                    q = false;
                    p()
                }, i)
            }
        }
        function m(r) {
            l.push(r);
            j()
        }
        function o(s) {
            for (var r = 0; r < l.length; r++) {
                if (l[r] === s) {
                    l.splice(r--, 1)
                }
            }
            if (!l.length) {
                n()
            }
        }
        return {
            on: m,
            off: o,
            start: j,
            stop: n
        }
    })();
    var a = (function(i) {
        var l;
        var r = 0;
        var j = 0;
        var m = 0;
        function k() {
            if (window.removeEventListener) {
                window.removeEventListener("DOMContentLoaded", k, false)
            } else {
                if (window.detachEvent) {
                    window.detachEvent("onload", k)
                }
            }
            setTimeout(function() {
                n()
            }, 200)
        }
        function n() {
            l = document.getElementById("tumblr_controls");
            if (!l) {
                return false
            }
            var s = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
            r = l.offsetTop;
            j = l.clientHeight;
            m = s - (r + j);
            if (r === 0 || m === 0) {
                o()
            } else {
                if (window.getComputedStyle(l).position !== "fixed") {
                    Tumblr.addClass(l, "transition");
                    b.on(q);
                    q()
                }
            }
        }
        function q(u, t, s) {
            if (typeof t === "undefined") {
                t = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0
            }
            if (typeof s === "undefined") {
                s = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
            }
            if (t < r) {
                p()
            } else {
                if (t >= r + (j = l.clientHeight)) {
                    o()
                }
            }
        }
        function o() {
            Tumblr.addClass(l, "sticky")
        }
        function p() {
            Tumblr.removeClass(l, "sticky")
        }
        if (window.addEventListener) {
            window.addEventListener("DOMContentLoaded", k, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", k)
            }
        }
        return {
            stick: o,
            unstick: p,
            check: q
        }
    })(d);
    return {
        post_message_event: function(j, i) {
            c = document.getElementById("mobile_iframe");
            h = document.getElementById("tumblr_controls");
            e = j[j.length - 1];
            if (c) {
                if (j[0] === "show_mobile_banner") {
                    if (j[1] === "1") {
                        Tumblr.MobileBanner.showBanner();
                        Tumblr.MobileBanner.mobile_origin = e
                    } else {
                        Tumblr.MobileBanner.showHeaderBanner()
                    }
                }
            } else {
                if (h && e) {
                    if (j[0] === "color_match") {
                        f()
                    }
                    if (j[0] === "location_change") {
                        Tumblr.addClass(h, "flash_fix");
                        document.getElementById("tumblr_controls").onload = function() {
                            Tumblr.removeClass(h, "flash_fix")
                        }
                    }
                    if (j[0] === "request_keywords") {
                        if (typeof tumblr_meta_keyboards != "undefined") {
                            h.contentWindow.postMessage("keywords;" + tumblr_meta_keyboards, e)
                        }
                    }
                    if (j[0] === "teaser_iframe") {
                        if (j.length < 2 ||!Tumblr.Teaser) {
                            return false
                        }
                        switch (j[1]) {
                        case"initialize":
                            h.contentWindow.postMessage("teaser;enable", e);
                            return Tumblr.Teaser.initialize({
                                slide_page: (j.length > 2 && j[2] === "slide")
                            });
                        case"load":
                            return Tumblr.Teaser.load_once();
                        case"open":
                            return Tumblr.Teaser.open();
                        case"close":
                            return Tumblr.Teaser.close();
                        case"toggle":
                            return Tumblr.Teaser.toggle();
                        default:
                            break
                        }
                    }
                    if (j[0] === "tagged_teaser_iframe") {
                        if (j.length < 2 ||!Tumblr.TaggedTeaser) {
                            return false
                        }
                        switch (j[1]) {
                        case"show":
                            Tumblr.TaggedTeaser.initialize({
                                once: true,
                                open: true
                            });
                            return;
                        case"open":
                            return Tumblr.TaggedTeaser.open(j.length > 2 ? j[2] : false);
                        case"close":
                            return Tumblr.TaggedTeaser.close();
                        case"toggle":
                            return Tumblr.TaggedTeaser.toggle();
                        default:
                            break
                        }
                    }
                    if (j[0] === "resize_iframe") {
                        g(j[1], j[2]);
                        if (j.length > 2) {
                            switch (j[3]) {
                            case"body_class":
                                if (j.length > 3 && j[4]) {
                                    Tumblr.addClass(document.body, j[4])
                                }
                                break;
                            default:
                                break
                            }
                        }
                    }
                }
            }
        }
    }
})();
/*! scripts/tumblelog/feature_video.js */
Tumblr.VideoFeatureSupport = (function() {
    var b = {
        setup_controls: {}
    };
    function f() {
        if (document.getElementById("tumblr_video_iframe_fullscreen")) {
            return true
        }
        var j = document.createElement("style");
        j.id = "tumblr_video_iframe_fullscreen";
        j.innerHTML = ".tumblr_video_iframe.fullwindow { top: 0; bottom: 0; right: 0; left: 0; position: fixed; z-index: 8675309; height: 100%; width: 100%; }";
        document.body.appendChild(j)
    }
    function e(j) {
        f();
        if (j) {
            b.iframe.className = "tumblr_video_iframe fullwindow"
        } else {
            b.iframe.className = "tumblr_video_iframe"
        }
    }
    function i(j) {
        var k = document.getElementById("tumblr_controls");
        if (!j) {
            if (b.parent_post) {
                b.parent_post.className = b.parent_post.className.replace(/\s+is_lightbox/g, "")
            }
            document.body.className = document.body.className.replace(/\s+is_lightbox/g, "");
            document.body.style.overflow = "visible";
            b.iframe.style.position = "static";
            b.iframe.style.height = "100%";
            b.iframe.style.width = "100%";
            b.iframe.style.zIndex = 0;
            if (k) {
                k.style.display = "block"
            }
            return 
        }
        a();
        if (b.parent_post) {
            b.parent_post.className += " is_lightbox"
        }
        document.body.className += " is_lightbox";
        document.body.style.overflow = "hidden";
        b.iframe.style.position = "fixed";
        b.iframe.style.height = "100%";
        b.iframe.style.width = "100%";
        b.iframe.style.top = 0;
        b.iframe.style.right = 0;
        b.iframe.style.left = 0;
        b.iframe.style.bottom = 0;
        b.iframe.style.zIndex = 90210;
        if (k) {
            k.style.display = "none"
        }
    }
    function g(j) {
        if (!j) {
            if (b.parent_post) {
                b.parent_post.className = b.parent_post.className.replace(/\s+is_fullscreen/g, "")
            }
            document.body.className = document.body.className.replace(/\s+is_fullscreen/g, "");
            return 
        }
        if (b.parent_post) {
            b.parent_post.className += " is_fullscreen"
        }
        document.body.className += " is_fullscreen"
    }
    function a() {
        if (b.setup_controls[b.id]) {
            return 
        }
        var k = document.querySelector("#post_" + b.id + " .tumblr_lightbox_controls .close_button");
        if (k) {
            k.addEventListener("click", function(l) {
                b.iframe.contentWindow.postMessage("exit_lightbox", b.origin_url);
                return false
            })
        }
        var j = document.querySelector("#post_" + b.id + " .tumblr_lightbox_controls .like_button");
        if (j) {
            j.addEventListener("click", function(m) {
                var l = this;
                var n = {
                    id: l.getAttribute("data-post-id"),
                    key: l.getAttribute("data-reblog-key")
                };
                if (Tumblr.hasClass(l, "already_like")) {
                    Tumblr.unlike(n, {
                        success: function() {
                            Tumblr.removeClass(l, "already_like")
                        }
                    })
                } else {
                    Tumblr.like(n, {
                        success: function() {
                            Tumblr.addClass(l, "already_like")
                        }
                    })
                }
                return false
            })
        }
        b.setup_controls[b.id] = true
    }
    function h() {
        if (typeof(get_cookie) === "function") {
            var j = get_cookie("supress_lightbox"), k = parseInt(j.value, 10) || 0;
            if (j && k > 3) {
                return "supress_lightbox"
            }
            if (!j) {
                return "enable_lightbox"
            }
        }
        return false
    }
    function d(k) {
        if (typeof(set_cookie) === "function") {
            var j = get_cookie("supress_lightbox"), l = parseInt(j.value, 10) || 0;
            if (k > 0 && k < 5) {}
            if (k===-1) {
                if (l > 1) {} else {}
            }
            c(h())
        }
    }
    function c(l) {
        if (!l) {
            return 
        }
        var k = document.querySelectorAll(".tumblr_video_iframe.has_lightbox");
        for (var j = 0; j < k.length; j++) {
            k[j].contentWindow.postMessage(l, k[j].getAttribute("data-origin"))
        }
    }
    return {
        post_message_event: function(l, j) {
            var k = l[2];
            b.iframe = document.getElementById("tumblr_video_iframe_" + k);
            if (!b.iframe) {
                return 
            }
            b.id = k;
            b.origin_url = b.iframe.getAttribute("data-origin");
            b.parent_post = document.getElementById("post_" + k);
            if (l[0] === "lightbox") {
                i((l[1] === "true") ? true : false)
            }
            if (l[0] === "full_window") {
                e((l[1] === "true") ? true : false)
            }
            if (l[0] === "full_screen") {
                g((l[1] === "true") ? true : false)
            }
        }
    }
})();
/*! scripts/tumblelog/feature_audio.js */
Tumblr.AudioFeatureSupport = (function() {
    return {
        post_message_event: function(d, a) {
            var c, b;
            if (d[0] === "audioPlayerReady") {
                c = document.getElementsByClassName("tumblr_audio_player");
                for (b = 0; b < c.length; b++) {
                    if (c[b].className.indexOf(" tumblr_audio_player_" + d[1]) >= 0) {
                        try {
                            if (!c[b].style.webkitTransform) {
                                c[b].style.webkitTransform = "translate3d(0px, 0px, 0px)"
                            }
                        } catch (f) {}
                    }
                }
            } else {
                if (d[0] === "audioPlayerPlaying") {
                    c = document.getElementsByClassName("tumblr_audio_player");
                    for (b = 0; b < c.length; b++) {
                        if (c[b].className.indexOf(" tumblr_audio_player_" + d[1]) < 0) {
                            c[b].contentWindow.postMessage("pause", "*")
                        }
                    }
                    c = document.getElementsByClassName("tumblr_video_iframe");
                    for (b = 0; b < c.length; b++) {
                        c[b].contentWindow.postMessage("pause", "*")
                    }
                }
            }
        }
    }
})();
/*! scripts/tumblelog/mobile_fullscreen_iframe.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.mobileFullscreenIframe = {
    og_store: function() {
        this.og_body_position = document.body.style.position;
        this.og_body_overflow = document.body.style.overflow;
        this.og_html_bg = this.html_el.style.backgroundColor;
        this.win_height = window.innerHeight + "px"
    },
    set_frame_height: function() {
        this.win_height = window.innerHeight + "px";
        this.win_width = window.innerWidth + "px";
        this.frame.style.height = this.win_height;
        this.frame.style.minWidth = this.win_width
    },
    enable: function(a) {
        this.frame = document.getElementById(a);
        if (!this.frame) {
            return 
        }
        this.html_el = document.getElementsByTagName("html")[0];
        this.og_store();
        this.orientation_height_change = this.set_frame_height.bind(this);
        window.addEventListener("orientationchange", this.orientation_height_change, false);
        window.addEventListener("resize", this.orientation_height_change, false);
        this.frame.className += " is_lightbox";
        document.body.className += " is_lightbox";
        document.body.style.position = "relative";
        document.body.style.left = "-99999px";
        document.body.style.overflow = "hidden";
        this.html_el.style.backgroundColor = "#000000";
        this.frame.style.cssText = "position:fixed; overflow:hidden; width: 100%; top:0; left:0; right:0; bottom:0; z-index: 90210;";
        this.frame.style.height = this.win_height;
        if (document.getElementById("tumblr_controls")) {
            document.getElementById("tumblr_controls").style.display = "none"
        }
    },
    disable: function(a) {
        this.frame = this.frame || document.getElementById(a);
        if (!this.frame) {
            return 
        }
        this.frame.className = this.frame.className.replace(/\s+is_lightbox/, "");
        document.body.className = document.body.className.replace(/\s+is_lightbox/, "");
        document.body.style.overflow = this.og_body_overflow;
        document.body.style.position = this.og_body_position;
        this.html_el.style.backgroundColor = this.og_html_bg;
        this.frame.style.cssText = "";
        if (document.getElementById("tumblr_controls")) {
            document.getElementById("tumblr_controls").style.display = "block"
        }
        window.removeEventListener("orientationchange", this.orientation_height_change, false);
        window.removeEventListener("resize", this.orientation_height_change, false)
    }
};
/*! scripts/tumblelog/post_message_listener.js */
("Tumblr" in window) || (window.Tumblr = {});
Tumblr.PostMessageListener = (function() {
    return {
        initialize: function(d) {
            d = d || function() {};
            var c = window.addEventListener ? "addEventListener": "attachEvent";
            var b = window[c];
            var a = c == "attachEvent" ? "onmessage": "message";
            b(a, function(g) {
                if (typeof g.data !== "string") {
                    return 
                }
                var f = g.data.split(";");
                d(f, g.origin)
            }, false)
        }
    }
})();
Tumblr.PostMessageListener.initialize(function(b, a) {
    Tumblr.VideoFeatureSupport.post_message_event(b, a);
    Tumblr.AudioFeatureSupport.post_message_event(b, a);
    Tumblr.IframeFeatureSupport.post_message_event(b, a);
    Tumblr.AnalyticsFeatureSupport.post_message_event(b, a);
    Tumblr.TumblelogFormResize.post_message_event(b, a);
    Tumblr.PhotosetResize.post_message_event(b, a);
    Tumblr.LikeButtonUpdate.post_message_event(b, a);
    Tumblr.LikeButton.logged_in_iframe_loaded(b, a);
    Tumblr.LikeButton.post_message_event(b, a);
    Tumblr.LikeButton.like_iframe_loaded(b, a)
});
/*! scripts/tumblelog.js */

/*! scripts/spin.js */
(function(i, k, a) {
    var e = ["webkit", "Moz", "ms", "O"];
    var p = {};
    var o;
    function g(q, t) {
        var r = k.createElement(q || "div");
        var s;
        for (s in t) {
            r[s] = t[s]
        }
        return r
    }
    function h(r) {
        for (var q = 1, s = arguments.length; q < s; q++) {
            r.appendChild(arguments[q])
        }
        return r
    }
    var j = function() {
        var q = g("style");
        h(k.getElementsByTagName("head")[0], q);
        return q.sheet || q.styleSheet
    }();
    function c(u, q, v, y) {
        var r = ["opacity", q, ~~(u * 100), v, y].join("-");
        var s = 0.01 + v / y * 100;
        var x = Math.max(1 - (1 - u) / q * (100 - s), u);
        var w = o.substring(0, o.indexOf("Animation")).toLowerCase();
        var t = w && "-" + w + "-" || "";
        if (!p[r]) {
            j.insertRule("@" + t + "keyframes " + r + "{0%{opacity:" + x + "}" + s + "%{opacity:" + u + "}" + (s + 0.01) + "%{opacity:1}" + (s + q)%100 + "%{opacity:" + u + "}100%{opacity:" + x + "}}", 0);
            p[r] = 1
        }
        return r
    }
    function n(u, v) {
        var t = u.style;
        var q;
        var r;
        if (t[v] !== a) {
            return v
        }
        v = v.charAt(0).toUpperCase() + v.slice(1);
        for (r = 0; r < e.length; r++) {
            q = e[r] + v;
            if (t[q] !== a) {
                return q
            }
        }
    }
    function f(q, s) {
        for (var r in s) {
            q.style[n(q, r) || r] = s[r]
        }
        return q
    }
    function m(s) {
        for (var q = 1; q < arguments.length; q++) {
            var r = arguments[q];
            for (var t in r) {
                if (s[t] === a) {
                    s[t] = r[t]
                }
            }
        }
        return s
    }
    function l(q) {
        var r = {
            x: q.offsetLeft,
            y: q.offsetTop
        };
        while ((q = q.offsetParent)) {
            r.x += q.offsetLeft;
            r.y += q.offsetTop
        }
        return r
    }
    var d = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        color: "#000",
        speed: 1,
        trail: 100,
        opacity: 1 / 4,
        fps: 20,
        zIndex: 2000000000,
        className: "spinner",
        top: "auto",
        left: "auto"
    };
    var b = function b(q) {
        if (!this.spin) {
            return new b(q)
        }
        this.opts = m(q || {}, b.defaults, d)
    };
    b.defaults = {};
    b.prototype = {
        spin: function(x) {
            this.stop();
            var B = this;
            var q = B.opts;
            var r = B.el = f(g(0, {
                className: q.className
            }), {
                position: "relative",
                zIndex: q.zIndex
            });
            var A = q.radius + q.length + q.width;
            var C;
            var z;
            if (x) {
                x.insertBefore(r, x.firstChild || null);
                z = l(x);
                C = l(r);
                f(r, {
                    left: (q.left == "auto" ? z.x - C.x + (x.offsetWidth>>1) : q.left + A) + "px",
                    top: (q.top == "auto" ? z.y - C.y + (x.offsetHeight>>1) : q.top + A) + "px"
                })
            }
            r.setAttribute("aria-role", "progressbar");
            B.lines(r, B.opts);
            if (!o) {
                var u = 0;
                var s = q.fps;
                var w = s / q.speed;
                var v = (1 - q.opacity) / (w * q.trail / 100);
                var y = w / q.lines;
                !function t() {
                    u++;
                    for (var D = q.lines; D; D--) {
                        var E = Math.max(1 - (u + D * y)%w * v, q.opacity);
                        B.opacity(r, q.lines - D, E, q)
                    }
                    B.timeout = B.el && setTimeout(t, ~~(1000 / s))
                }()
            }
            return B
        },
        stop: function() {
            var q = this.el;
            if (q) {
                clearTimeout(this.timeout);
                if (q.parentNode) {
                    q.parentNode.removeChild(q)
                }
                this.el = a
            }
            return this
        },
        lines: function(s, u) {
            var r = 0;
            var q;
            function t(v, w) {
                return f(g(), {
                    position: "absolute",
                    width: (u.length + u.width) + "px",
                    height: u.width + "px",
                    background: v,
                    boxShadow: w,
                    transformOrigin: "left",
                    transform: "rotate("+~~(360 / u.lines * r) + "deg) translate(" + u.radius + "px,0)",
                    borderRadius: (u.width>>1) + "px"
                })
            }
            for (; r < u.lines; r++) {
                q = f(g(), {
                    position: "absolute",
                    top: 1+~(u.width / 2) + "px",
                    transform: u.hwaccel ? "translate3d(0,0,0)": "",
                    opacity: u.opacity,
                    animation: o && c(u.opacity, u.trail, r, u.lines) + " " + 1 / u.speed + "s linear infinite"
                });
                if (u.shadow) {
                    h(q, f(t("#000", "0 0 4px #000"), {
                        top: 2 + "px"
                    }))
                }
                h(s, h(q, t(u.color, "0 0 1px rgba(0,0,0,.1)")))
            }
            return s
        },
        opacity: function(r, q, s) {
            if (q < r.childNodes.length) {
                r.childNodes[q].style.opacity = s
            }
        }
    };
    !function() {
        var r = f(g("group"), {
            behavior: "url(#default#VML)"
        });
        var q;
        if (!n(r, "transform") && r.adj) {
            for (q = 4; q--;) {
                j.addRule(["group", "roundrect", "fill", "stroke"][q], "behavior:url(#default#VML)")
            }
            b.prototype.lines = function(v, u) {
                var t = u.length + u.width;
                var B = 2 * t;
                function A() {
                    return f(g("group", {
                        coordsize: B + " " + B,
                        coordorigin: - t + " " +- t
                    }), {
                        width: B,
                        height: B
                    })
                }
                var w =- (u.width + u.length) * 2 + "px";
                var z = f(A(), {
                    position: "absolute",
                    top: w,
                    left: w
                });
                var y;
                function x(C, s, D) {
                    h(z, h(f(A(), {
                        rotation: 360 / u.lines * C + "deg",
                        left: ~~s
                    }), h(f(g("roundrect", {
                        arcsize: 1
                    }), {
                        width: t,
                        height: u.width,
                        left: u.radius,
                        top: - u.width>>1,
                        filter: D
                    }), g("fill", {
                        color: u.color,
                        opacity: u.opacity
                    }), g("stroke", {
                        opacity: 0
                    }))))
                }
                if (u.shadow) {
                    for (y = 1; y <= u.lines; y++) {
                        x(y, - 2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
                    }
                }
                for (y = 1; y <= u.lines; y++) {
                    x(y)
                }
                return h(v, z)
            };
            b.prototype.opacity = function(t, s, v, u) {
                var w = t.firstChild;
                u = u.shadow && u.lines || 0;
                if (w && s + u < w.childNodes.length) {
                    w = w.childNodes[s + u];
                    w = w && w.firstChild;
                    w = w && w.firstChild;
                    if (w) {
                        w.opacity = v
                    }
                }
            }
        } else {
            o = n(r, "animation")
        }
    }();
    i.Spinner = b
})(window, document);
/*! scripts/popover_scroll.js */
(function(b, a) {
    var c = function(d, e) {
        this.$container = b(d);
        this.container = this.$container[0];
        this.options = b.extend({
            on_infinite_scroll: function() {},
            on_scroll: function() {}
        }, e || {});
        this.$wrapper = b('<div class="popover_scrollbar"></div>');
        this.$track = b('<div class="popover_scrollbar_track"></div>');
        this.$thumb = b('<div class="popover_scrollbar_thumb"></div>');
        this.is_scrollable = false;
        this.is_scrolling = false;
        this.$track.on("mousedown", b.proxy(this.on_scrollbar_mousedown, this));
        this.$container.on("scroll.popover_scrollbar", b.proxy(this.on_scroll, this));
        this.init()
    };
    c.prototype = {
        init: function() {
            this.$container.wrap(this.$wrapper);
            this.update()
        },
        update: function() {
            if (!this.is_scrollable && this.container.scrollHeight > this.$container.height()) {
                this.is_scrollable = true;
                this.$container.after(this.$track);
                this.$track.append(this.$thumb);
                if (!("ontouchstart" in document.documentElement)) {
                    this.$container.on("mousewheel DOMMouseScroll", b.proxy(this.steal_scroll, this))
                }
            }
            if (this.is_scrollable) {
                var d = this.$container.height() / this.container.scrollHeight;
                this.$thumb.height(this.$track.height() * d)
            }
            this.on_scroll()
        },
        steal_scroll: function(f) {
            var d = f.currentTarget, g = f.originalEvent.wheelDelta||-f.originalEvent.detail;
            if (g > 0 && d.scrollTop <= 0) {
                f.preventDefault()
            }
            if (g < 0 && d.scrollTop >= d.scrollHeight - b(d).height()) {
                f.preventDefault()
            }
        },
        on_scrollbar_mousedown: function(d) {
            d.preventDefault();
            this.$track.addClass("is_scrolling");
            b(window).on("mousemove.popover_scrollbar", b.proxy(this.on_scrollbar_mousemove, this));
            b(window).on("mouseup.popover_scrollbar", b.proxy(this.on_scrollbar_mouseup, this));
            this.on_scrollbar_mousemove(d)
        },
        on_scrollbar_mousemove: function(h) {
            var f = h.pageY - this.$track.offset().top, g = f / this.$track.height(), d = this.container.scrollHeight - this.$container.height();
            if (g >= 0 && g <= 1) {
                this.$container.scrollTop(d * g)
            }
        },
        on_scrollbar_mouseup: function(d) {
            this.$track.removeClass("is_scrolling");
            b(window).off(".popover_scrollbar")
        },
        on_scroll: function(g) {
            var f = this.container.scrollTop / (this.container.scrollHeight - this.$container.height()), d = this.$track.height() - this.$thumb.height();
            this.$thumb.css("top", d * f);
            this.options.on_scroll(this.container.scrollTop, f);
            if (f > 0.9) {
                this.options.on_infinite_scroll()
            }
        },
        destroy: function() {
            if (this.is_scrollable) {
                this.$track.off().remove();
                this.$thumb.remove();
                this.$container.off(".popover_scrollbar")
            }
            this.$container.unwrap();
            this.is_scrollable = false;
            this.is_scrolling = false
        }
    };
    a.PopoverScroll = c
})(jQuery, Tumblr);
/*! scripts/polyfills/placeholders.js */
(function(b, a) {
    var c = {
        init: function(l) {
            var h = b(document);
            var d = "placeholder" in document.createElement("input");
            var j = "placeholder" in document.createElement("textarea");
            l = b.extend({}, l);
            var k = (l.els) ? b(l.els): b("input, textarea");
            var i = l.clear_on_submit;
            var e = l.force;
            function m(p) {
                var n = b(p.target);
                var o = n.get(0).nodeName.toLowerCase();
                if (!d ||!j || e) {
                    if (n.hasClass("placeholder")) {
                        n.val("").removeClass("placeholder")
                    }
                    if (n.attr("data-type") == "password") {
                        try {
                            n.get(0).type = "password"
                        } catch (q) {}
                    }
                }
            }
            function f(n) {
                if (!d ||!j || e) {
                    g(n.target)
                }
            }
            function g(n) {
                $input = b(n);
                var o = $input.attr("placeholder");
                if (o && $input.val() === "") {
                    $input.addClass("placeholder").val(o)
                }
                if ($input.attr("type") == "password" && ($input.val() === "" || $input.val() === o)) {
                    try {
                        $input.get(0).type = "text"
                    } catch (p) {}
                    $input.attr("data-type", "password")
                }
            }
            if (!d ||!j || e) {
                h.on("focus", k.selector, m);
                h.on("blur", k.selector, f);
                _.each(k, function(o) {
                    g(o);
                    if (i) {
                        var n = b(o);
                        n.parents("form").on("submit", function() {
                            if (n.val() === n.attr("placeholder")) {
                                n.val("")
                            }
                        })
                    }
                })
            }
        }
    };
    a.PlaceHolders = c
})(jQuery, this.Tumblr || (this.Tumblr = {}));
/*! scripts/application/glass.js */
(function(c, a) {
    var b = new (Backbone.View.extend({
        id: "glass_overlay",
        events: {
            click: "click"
        },
        locked: false,
        visible: false,
        initialize: function() {},
        render: function() {
            c(document.body).prepend(this.$el);
            this.rendered = true;
            Tumblr.Events.on("DOMEventor:escape", _.bind(this.keydown, this))
        },
        click: function() {
            if (this.locked) {
                return 
            }
            this.hide()
        },
        keydown: function(d) {
            if (this.locked) {
                return 
            }
            if (this.visible) {
                this.hide()
            }
        },
        show: function(e, d) {
            if (_.isObject(Tumblr.KeyCommands)&&!Tumblr.KeyCommands.suspended) {
                Tumblr.KeyCommands.suspend();
                this.glass_suspended_keys = true
            }
            if (!this.rendered) {
                this.render()
            }
            d = d || "";
            this.on_close = e || function() {};
            this.visible = true;
            Tumblr.Events.trigger("Glass:show", this);
            this.$el.addClass("show");
            setTimeout(_.bind(function() {
                this.$el.addClass(d)
            }, this), 0)
        },
        hide: function() {
            this.visible = false;
            Tumblr.Events.trigger("Glass:hide", this);
            this.$el.removeClass("show");
            this.on_close();
            if (this.glass_suspended_keys) {
                if (_.isObject(Tumblr.KeyCommands)) {
                    Tumblr.KeyCommands.resume()
                }
                this.glass_suspended_keys = false
            }
        },
        lock: function() {
            this.locked = true
        },
        unlock: function() {
            this.locked = false
        }
    }))();
    a.Glass = b
})(jQuery, Tumblr);
/*! scripts/application/cookie.js */
(function(b) {
    var a = {
        get: function(c) {
            return new RegExp(c + "=([^;]+)").test(unescape(document.cookie)) ? RegExp.$1 : null
        },
        set: function(c, i, h, e) {
            e = e || {};
            var d = new Date();
            var j = e.path ? e.path: "/";
            var g = e.is_secure ? true: false;
            var f = e.domain ? e.domain: "";
            d.setTime(d.getTime() + (h * 1000));
            document.cookie = c + "=" + escape(i) + ((h == null) ? "" : ";expires=" + d.toGMTString()) + ";path=" + j + ((g === false) ? "" : ";secure") + ((f === "") ? "" : ";domain=" + f)
        },
        unset: function(c) {
            a.set(c, "", - 1)
        }
    };
    b.Cookie = a
})(Tumblr);
/*! scripts/application/document_width_cookie.js */
(function(c, d, b, a) {
    a.documentWidth = function(e) {
        if (!e) {
            e = c(document).width()
        }
        Tumblr.Cookie.set("documentWidth", e, 24 * 60 * 60)
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/device_pixel_ratio.js */
(function(c, d, b, a) {
    a.devicePixelRatio = function() {
        Tumblr.Cookie.set("devicePixelRatio", window.devicePixelRatio, 24 * 60 * 60)
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/spinjs_spinner_defaults.js */
(function(a) {
    a.spinners = {
        white: {
            lines: 16,
            length: 11,
            width: 4,
            radius: 17,
            color: "#ffffff",
            speed: 0.9,
            trail: 34,
            shadow: false,
            hwaccel: false,
            className: "tumblr_default_spinner spinner",
            zIndex: 2000000000,
            top: "50",
            left: "auto"
        }
    }
})(Tumblr);
/*! scripts/application/popover.js */
(function(d, b) {
    var a = Backbone.View.extend({
        events: {
            click: "click"
        },
        initialize: function(e) {
            this.button = d(e.el || this.$el);
            this.popover = e.popover || this.$el.find(".popover");
            this.on_hide = e.on_hide || function() {};
            this.on_show = e.on_show || function() {};
            this.auto_show = e.auto_show || false;
            this.prevent_default_click = e.prevent_default_click || false;
            if (this.auto_show) {
                this.show()
            }
            a.register(this)
        },
        click: function(f) {
            if (this.prevent_default_click) {
                f.preventDefault()
            }
            this.toggle()
        },
        is_showing: false,
        show: function() {
            Tumblr.Glass.show(_.bind(function() {
                this.hide();
                this.on_hide()
            }, this));
            this.popover.show();
            this.on_show();
            this.is_showing = true
        },
        hide: function() {
            if (!this.is_showing) {
                return 
            }
            Tumblr.Glass.on_close = _.bind(function() {
                if (this.is_showing) {
                    this.popover.hide();
                    this.on_hide()
                }
            }, this);
            Tumblr.Glass.hide();
            this.is_showing = false
        },
        toggle: function() {
            return this.is_showing ? this.hide() : this.show()
        }
    });
    a.instances = [];
    a.register = function(e) {
        this.instances.push(e)
    };
    a.hide_all = function() {
        for (var e = 0; e < this.instances.length; e++) {
            this.instances[e].hide()
        }
    };
    a.hide_all_after = function(e) {
        e = (e) ? e : 100;
        setTimeout(_.bind(function() {
            for (var f = 0; f < this.instances.length; f++) {
                this.instances[f].hide()
            }
        }, this), e)
    };
    var c = a.extend({
        initialize: function(e) {
            Tumblr.BasePopover.prototype.initialize.apply(this, arguments);
            this.skip_glass = e.skip_glass || false;
            this.skip_offset = e.skip_offset || false;
            this.direction = e.direction || "down";
            this.align = e.align || "left";
            this.glassless = e.glassless || false;
            if (this.glassless) {
                this.skip_glass = true;
                this.glassless_options = e.glassless_options || {};
                var f = {
                    prevent_clicks: true,
                    click_root: false
                };
                _.defaults(this.glassless_options, f);
                this.on("click:outside", this.__onClickOutside, this);
                this.on("click:inside", this.__onClickInside, this)
            }
            this.options = e || {};
            this.options.left = e.left || 0;
            this.options.right = e.right || 0;
            this.options.top = e.top || 0;
            this.options.bottom = e.bottom || 0
        },
        click: function(f) {
            if (this.options.prevent_default_click) {
                f.preventDefault()
            }
            if (!this.options.disable_auto_show) {
                this.show()
            }
            return 
        },
        __bindOutsideClick: function() {
            this.__outsideClickFn = _.bind(this.__onOutsideClick, this);
            document.addEventListener("click", this.__outsideClickFn, true);
            this.listenToOnce(Tumblr.Events, "popover:hide", function() {
                document.removeEventListener("click", this.__outsideClickFn, true);
                this.__outsideClickFn = null
            })
        },
        __onOutsideClick: function(i) {
            var g = this.glassless_options;
            var f = false;
            var h = function(e) {
                if (e.jquery) {
                    e = e[0]
                }
                if (!(e && e.nodeType)) {
                    return false
                }
                return e
            };
            var j = [".ui_dialog"];
            j.push(this.popover);
            if (g.click_root) {
                if (_.isArray(g.click_root)) {
                    j.concat(g.click_root)
                } else {
                    j.push(g.click_root)
                }
            }
            if (g.dynamic_ignore_selectors) {
                if (_.isArray(g.dynamic_ignore_selectors)) {
                    _.each(g.dynamic_ignore_selectors, function(e) {
                        j.push(d(e))
                    })
                } else {
                    j.push(d(g.dynamic_ignore_selectors))
                }
            }
            _.each(j, _.bind(function(e) {
                clean_el = h(e);
                if (!clean_el && _.isString(e)) {
                    clean_el = d(e).get(0)
                }
                if (!clean_el) {
                    return 
                }
                if (i.target === clean_el || d.contains(clean_el, i.target)) {
                    f = true
                }
            }, this));
            if (f) {
                this.trigger("click:inside")
            } else {
                if (this.glassless_options.prevent_clicks) {
                    i.preventDefault();
                    i.stopPropagation()
                }
                this.trigger("click:outside")
            }
        },
        __onClickOutside: function() {
            if (!this.is_showing) {
                return 
            }
            this.hide()
        },
        __onClickInside: function() {},
        show: function() {
            if (!this.skip_glass) {
                Tumblr.Glass.show(_.bind(function() {
                    this.hide();
                    this.on_hide()
                }, this))
            }
            if (!this.$el.is(this.popover.parent())) {
                var f = {
                    top: 0,
                    left: 0
                };
                var e = {};
                if (!this.skip_offset) {
                    f = this.button.position()
                }
                if (this.direction !== "up") {
                    e.top = (this.options.top + f.top) + "px"
                } else {
                    e.bottom = (this.options.bottom - f.top - this.button.height()) + "px"
                }
                if (this.align !== "right") {
                    e.left = (this.options.left + f.left) + "px"
                } else {
                    e.right = (this.options.right - f.left - this.button.width()) + "px"
                }
                this.popover.css(e)
            }
            this.popover.show();
            this.on_show();
            this.is_showing = true;
            Tumblr.Events.trigger("popover:show", this);
            if (this.glassless&&!this.__outsideClickFn) {
                this.__bindOutsideClick()
            }
        },
        hide: function() {
            if (!this.is_showing) {
                return 
            }
            if (!this.skip_glass) {
                Tumblr.Glass.on_close = _.bind(function() {
                    if (this.is_showing) {
                        this.popover.hide()
                    }
                }, this);
                Tumblr.Glass.hide()
            } else {
                this.popover.hide()
            }
            this.on_hide();
            this.is_showing = false;
            Tumblr.Events.trigger("popover:hide")
        },
        position: function() {
            this.popover.show();
            var i = d(window);
            var e = {
                top: i.scrollTop(),
                left: i.scrollLeft()
            };
            this.popover.removeClass("up nipple_on_bottom");
            e.right = e.left + i.width();
            e.bottom = e.top + i.height();
            var h = this.popover.offset();
            var g = this.popover.outerHeight();
            var f = i.height();
            h.right = h.left + this.popover.outerWidth();
            h.bottom = h.top + g;
            if (f > g && e.bottom < h.bottom) {
                this.popover.addClass("up nipple_on_bottom")
            }
        }
    });
    b.BasePopover = a;
    b.Popover = c
})(jQuery, Tumblr);
/*! scripts/application/popover_with_form.js */
(function(e, c, b) {
    var d = window.l10n_str;
    var a = Tumblr.Popover.extend({
        initialize: function(f) {
            this.options = f || {};
            this.$form = this.$("form");
            if (!this.$form.length) {
                return 
            }
            this.$form.on("submit", c.bind(this.submit_form, this));
            Tumblr.Popover.prototype.initialize.apply(this, arguments)
        },
        show: function() {
            Tumblr.Popover.prototype.show.call(this);
            Tumblr.Events.trigger("keycommands:suspend");
            if (!this.options.no_autofocus) {
                this.$("form :input").first().focus()
            }
        },
        hide: function() {
            Tumblr.Popover.prototype.hide.call(this);
            Tumblr.Events.trigger("keycommands:resume")
        },
        submit_form: function(f) {
            if (f) {
                f.preventDefault()
            }
            var g = this.$form.serializeArray();
            e.ajax({
                with_form_key: true,
                url: this.$form.attr("action"),
                type: this.$form.attr("method") || "post",
                data: g,
                success: c.bind(this.on_success, this) || function() {},
                error: c.bind(function() {
                    if (c.isFunction(this.on_error)) {
                        this.on_error()
                    }
                    Tumblr.Dialog.alert(d.ajax_error)
                }, this),
                complete: c.bind(function() {
                    if (!this.options.wait) {
                        this.hide()
                    }
                    if (c.isFunction(this.on_complete)) {
                        this.on_complete()
                    }
                }, this)
            });
            this.on_submit && this.on_submit();
            return false
        }
    });
    b.PopoverWithForm = a
})(jQuery, _, Tumblr);
/*! scripts/application/popover_with_scroll.js */
(function(c, d, b, a) {
    a.PopoverWithScroll = Tumblr.Popover.extend({
        is_scroll_disabled: false,
        initialize: function(e) {
            this.options = e || {};
            Tumblr.Popover.prototype.initialize.apply(this, arguments);
            this.$container = this.$el.find(".popover_inner");
            this.$scroll = this.$el.find(".popover_scroll");
            this.options.disable_infinite_scroll = e.disable_infinite_scroll || false;
            this.on_load_more = e.on_load_more || function() {};
            this.scrollbar = null;
            this.auto_center = b.isBoolean(this.options.auto_center) ? this.options.auto_center : true;
            if (!this.$scroll.length) {
                this.is_scroll_disabled = true
            }
        },
        containing_frame: window,
        get_container_width: function() {
            if (this.containing_frame === window) {
                return Tumblr.Prima.DOMEventor.rect().windowWidth
            } else {
                return c(this.containing_frame).outerWidth(true)
            }
        },
        show: function() {
            Tumblr.Popover.prototype.show.apply(this, arguments);
            if (this.auto_center) {
                this.position_vertical()
            } else {
                if (this.popover) {
                    var e = this.get_container_width();
                    if ((e - this.$el.offset().left - this.$el.outerWidth(true)) < this.popover.outerWidth(true)) {
                        this.popover.addClass("nipple_on_right").removeClass("nipple_on_left")
                    } else {
                        this.popover.addClass("nipple_on_left").removeClass("nipple_on_right")
                    }
                }
            }
            if (Tumblr.PopoverScroll) {
                this.scrollbar = new Tumblr.PopoverScroll(this.$scroll, {
                    on_infinite_scroll: c.proxy(this.load_more, this)
                })
            }
            this.$scroll.attr("tabindex", "-1").focus()
        },
        hide: function() {
            if (this.$container) {
                this.$container.css({
                    top: "",
                    height: ""
                })
            }
            if (this.$scroll) {
                this.$scroll.css("height", "")
            }
            if (this.scrollbar) {
                this.scrollbar.destroy();
                this.scrollbar = null
            }
            Tumblr.Popover.prototype.hide.apply(this, arguments)
        },
        update: function() {
            if (this.scrollbar) {
                this.scrollbar.update()
            }
            this.position_vertical()
        },
        load_more: function() {
            if (this.is_scroll_disabled || this.options.disable_infinite_scroll) {
                return 
            }
            this.on_load_more()
        },
        position_vertical: function() {
            if (!this.$container ||!this.$scroll) {
                return 
            }
            var i = Tumblr.Flags.bool("dashboard_refresh") ? 132: 80;
            var f = 50 - (this.$container.outerHeight(true) * 0.5), g = c(window).height(), j, h, e;
            this.$container.css("top", f);
            if (this.$scroll.height() > g - i) {
                this.$scroll.css("height", g - i)
            }
            e = this.$container.outerHeight(true);
            j = this.$container.offset().top - c(window).scrollTop();
            h = parseInt(this.$container.css("top"), 10);
            if (j < 30) {
                h = h - (j - 30);
                this.$container.css("top", (h < 23) ? h : 23)
            } else {
                if (j + e > g - 30) {
                    h = h - ((j + e) - g + 50);
                    this.$container.css("top", (h>-(e - 80)) ? h : - (e - 68))
                }
            }
            if (this.scrollbar) {
                this.scrollbar.update()
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/loader.js */
(function(c, b, a) {
    var d = {
        zIndex: 2000000000,
        color: "inherit",
        top: "50%",
        left: "50%",
        position: "absolute",
        className: "leviathan"
    };
    function e(f) {
        if (!this.start) {
            return new e(f)
        }
        this.created = false;
        this.opts = this.opts || {};
        b.extend(this.opts, e.defaults, d, f)
    }
    e.defaults = {};
    e.prototype = {
        start: function(f) {
            if (typeof f !== "object") {
                f = false
            }
            if (f && f instanceof jQuery) {
                f = f[0]
            }
            if (!this.created&&!f) {
                return false
            }
            if (!f) {
                f = this.$target[0]
            }
            this.destroy();
            this.uid = this._uid();
            this.$target = c(f);
            this.$target.data("loader-uid", this.uid);
            this.el = this._html();
            this.$target.append(this.el);
            this.$loader = c("#loader_" + this.uid);
            this._init();
            return this
        },
        stop: function() {
            if (typeof this.$loader !== "undefined") {
                this.$loader.hide();
                this.$loader.removeClass("animate")
            }
            return this
        },
        destroy: function() {
            this.stop();
            if (typeof this.$loader !== "undefined") {
                this.$loader.remove()
            }
            if (typeof this.$target !== "undefined") {
                this.$target.removeData("loader-uid")
            }
            return this
        },
        _init: function() {
            this.created = true;
            if (this.opts.color !== "auto") {
                c(".Knight-Rider-bar", this.$loader).css("background-color", this.opts.color)
            }
            this.$loader.css("position", this.opts.position);
            this.$loader.css("z-index", this.opts.zIndex);
            this.$loader.css("top", this.opts.top);
            this.$loader.css("left", this.opts.left);
            this.$loader.show()
        },
        _uid: function() {
            return Math.floor(Math.random() * 10000000)
        },
        _html: function() {
            return '<div id="loader_' + this.uid + '" class="Knight-Rider-loader centered animate ' + this.opts.className + '"><div class="Knight-Rider-bar"></div><div class="Knight-Rider-bar"></div><div class="Knight-Rider-bar"></div></div>'
        }
    };
    a.Loader = e
})(jQuery, _, Tumblr);
/*! scripts/peepr.js */
(function(e, d, h, b) {
    var a = function() {
        var i;
        var j = document.createElement("div");
        var k = {
            transition: "transitionend",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (i in k) {
            if (j.style[i] !== undefined) {
                return k[i]
            }
        }
        return false
    };
    var f = {
        "click .ui_peepr_arrows .previous_arrow": "__previous_arrow_click",
        "click .ui_peepr_arrows .next_arrow": "__next_arrow_click",
        "click .refresh": "__refresh_click",
        'click .post:not(".sponsored_post") a.post_avatar_link:not(".animating")': "__link_click",
        'click .post:not(".sponsored_post") a.post_sub_avatar:not(".animating")': "__link_click",
        'click .post:not(".sponsored_post") .post_info_link:not(".reblog_follow_button")': "__link_click",
        'click .post:not(".sponsored_post") .asker .name': "__link_click",
        'click .post:not(".sponsored_post") .avatar a': "__link_click",
        "click .tumblelog_popover .indash_header_wrapper .avatar": "__link_click",
        "click .tumblelog_popover .indash_header_wrapper .name a": "__link_click",
        "click .tumblelog_popover .indash_header_wrapper .header_image a": "__link_click",
        "click .tumblelog_popover .indash_header_wrapper .avatar a": "__link_click",
        "click .post_micro .post_glass a": "__link_click",
        "click .follower .avatar": "__link_click",
        "click .follower .name a": "__link_click",
        "click .crushes .crush": "__link_click",
        "click .notification .username": "__link_click",
        "click .notification .avatar_frame": "__link_click",
        "click .notification .preview_frame": "__link_click",
        "click .ui_tops .tops_fans .ui_jumbo_avatar": "__link_click",
        "click .ui_tops .tops_post a": "__link_click",
        'click #ui_activity_feed .ui_note a:not(".block, .note_follow")': "__link_click",
        "click .user_list .follow_list_item_blog": "__link_click",
        "click #popover_search .blog .result_link": "__link_click",
        "click .post_notes .popover a.tumblelog": "__link_click",
        "click .post_notes .popover a.source_tumblelog": "__link_click",
        "click .post_notes .popover a.avatar_frame": "__link_click",
        "click .post .tumblr_blog": "__link_click",
        'click .radar:not(".premium") a.radar_avatar': "__link_click",
        'click .radar:not(".premium") a.radar_superglass': "__link_click",
        'click .radar:not(".premium") a.thumbnail_anchor': "__link_click",
        "click .dockable_video_embed  a.tumblelog_info": "__link_click",
        "click #dashboard_controls_open_blog #open_blog_link": "__link_click",
        "click .members_list .member_avatar": "__link_click",
        "click .members_list .member_name": "__link_click",
        "click [data-peepr]": "__data_click"
    };
    if (Tumblr.Flags.bool("allow_edit_appearance_in_popover")) {
        d.assign(f, {
            "click .tumblelog_popover .navigation button.customize_button": "__customize_button_click",
        })
    }
    var c = h.View.extend({
        el: "body",
        defaults: {
            base_url: "/indash_blog/peepr/",
            post_message_scope: "*",
            url: false,
            hide_posts_on_unfollow: false
        },
        events: f,
        initialize: function(i) {
            this.options = d.extend({}, this.defaults, i);
            this.is_open = false;
            this.is_hiding = false;
            this.has_arrows = false;
            this.load_check = null;
            this.load_timeout = 15000;
            this.transition_end = a();
            this.loader = null;
            this.current_tumblelog = "";
            this.current_post_id = "";
            this.hide_posts_on_unfollow = this.options.hide_posts_on_unfollow;
            this.context = {};
            this.current_iframe_url;
            this.$win = e(window);
            this.$doc = e(document);
            this.$html = e("html");
            this.$body = e("body");
            this.$iframe = e();
            this.$iframe_wrapper = e();
            this.$glass = e();
            this.$arrows = e();
            this.$error = e();
            if (this.options.url) {
                this.open_page(this.options.url)
            }
            this.listenTo(Tumblr.Events, "Dashboard:hide_posts_on_unfollow", this.set_hide_posts_on_unfollow);
            Tumblr.Events.trigger("Dashboard:should_hide_posts_on_unfollow")
        },
        __data_click: function(m) {
            m.preventDefault();
            var i = e(m.currentTarget);
            var l = e(m.target);
            if (i.hasClass("no_pop") || l.hasClass("no_pop")) {
                return 
            }
            var k = i.data("peepr");
            var j = i.attr("href");
            if (!(m.ctrlKey || m.metaKey) && Tumblr.Prima.Url.isTumblelogUrl(j)) {
                this.open_tumblelog(k.tumblelog, k.postId)
            } else {
                if (j && Tumblr.Prima.Url.hasAllowedProtocol(j)) {
                    window.open(j)
                }
            }
        },
        __previous_arrow_click: function(i) {
            i.preventDefault();
            Tumblr.Events.trigger("peepr:previous")
        },
        __next_arrow_click: function(i) {
            i.preventDefault();
            Tumblr.Events.trigger("peepr:next")
        },
        __link_click: function(k) {
            k.preventDefault();
            k.stopPropagation();
            if (Tumblr.Glass && Tumblr.Glass.visible) {
                Tumblr.Glass.hide()
            }
            var i = e(k.currentTarget);
            var j = i.attr("href") || "";
            this.context.path = e(k.target).closest("[data-context-path]").data("context-path");
            if (!j && i.closest(".ui_avatar_link").length > 0) {
                j = i.closest(".ui_avatar_link").attr("href")
            }
            if (!(k.ctrlKey || k.metaKey) && Tumblr.Prima.Url.isTumblelogUrl(j)) {
                this.open_url(j)
            } else {
                if (!i.hasClass("no_pop") && Tumblr.Prima.Url.hasAllowedProtocol(j)) {
                    window.open(j)
                }
            }
            return false
        },
        __customize_button_click: function(k) {
            k.preventDefault();
            k.stopPropagation();
            var i = e(k.currentTarget);
            var j = i.data("url") || "";
            if (!(k.ctrlKey || k.metaKey) && Tumblr.Prima.Url.isTumblelogUrl(j)) {
                this.open_url(j)
            } else {
                if (!i.hasClass("no_pop") && Tumblr.Prima.Url.hasAllowedProtocol(j)) {
                    window.open(j)
                }
            }
            return false
        },
        __intro_complete: function() {
            this.$iframe_wrapper.off(".peepr");
            this.$iframe_wrapper.append(this.$iframe)
        },
        __outro_complete: function() {
            this.$iframe_wrapper.off(".peepr");
            this.destroy()
        },
        __glass_click: function(i) {
            i.preventDefault();
            this.close()
        },
        __keydown: function(i) {
            switch (i.which) {
            case 27:
                if (!this.is_hiding) {
                    this.close()
                }
                break;
            case 37:
                if (this.has_arrows) {
                    Tumblr.Events.trigger("peepr:previous")
                }
                break;
            case 39:
                if (this.has_arrows) {
                    Tumblr.Events.trigger("peepr:next")
                }
                break
            }
        },
        __message: function(l) {
            l = l.originalEvent;
            var m = false;
            var k = "";
            if (d.isString(l.data)) {
                m = l.data
            }
            if (!m) {
                return 
            }
            if (m.indexOf(":")>-1) {
                var i = m.split(/:(.+)/);
                m = i[0];
                k = i[1]
            }
            var j = {};
            try {
                j = JSON.parse(k)
            } catch (l) {}
            switch (m) {
            case"peepr_ready":
                this.ready();
                break;
            case"peepr_close":
                this.close();
                break;
            case"peepr_reblog":
                this.reblog(j);
                break;
            case"peepr_like_update":
                this.like_update(j);
                break;
            case"peepr_ask":
                this.ask(j);
                break;
            case"peepr_fan_mail":
                this.fan_mail(j);
                break;
            case"peepr_photo_lightbox":
                this.photo_lightbox(j);
                break;
            case"peepr_update_tumblelog_model":
                this.update_tumblelog_model(j);
                break
            }
        },
        __post_form_hide: function() {
            d.delay(d.bind(this.show, this), 100)
        },
        __post_form_success: function(i) {
            if (!d.isEmpty(i)) {
                this.post_message("peepr_reblogged", i)
            }
        },
        __ask_form_hide: function() {
            d.delay(d.bind(this.show, this), 100)
        },
        __ask_form_success: function() {
            d.delay(d.bind(this.show, this), 100)
        },
        __fan_mail_hide: function() {
            d.delay(d.bind(this.show, this), 100)
        },
        __photo_lightbox_hide: function() {
            this.is_hiding = false
        },
        __refresh_click: function() {
            this.$error.remove();
            this.show_loader();
            this.setLoadTimeout();
            this.$iframe.attr("src", this.current_iframe_url)
        },
        open_url: function(k) {
            var i = Tumblr.Prima.Url.parseTumblelogUrl(k);
            var l = i.tumblelog_name || false;
            var j = i.post_id || false;
            if (l && j) {
                this.current_tumblelog = l;
                this.current_post_id = j;
                this.open_page(l + "/" + j)
            } else {
                if (l) {
                    this.current_tumblelog = l;
                    this.open_page(l)
                } else {
                    if (Tumblr.Prima.Url.hasAllowedProtocol(k)) {
                        window.open(k)
                    }
                }
            }
        },
        set_hide_posts_on_unfollow: function() {
            this.hide_posts_on_unfollow = true
        },
        setLoadTimeout: function() {
            this.load_check = setTimeout(d.bind(function() {
                this.opening_error()
            }, this), this.load_timeout)
        },
        opening_error: function() {
            this.loader.destroy();
            this.$iframe.attr("src", "");
            this.$error = e(this.error_template()).appendTo(this.$iframe_wrapper)
        },
        open_tumblelog: function(m, k, i, l) {
            this.context = l || {};
            var j = (k) ? (m + "/" + k): m;
            this.current_tumblelog = m;
            this.current_post_id = k;
            this.open_page(j, i)
        },
        open_page: function(j, i) {
            if (!j) {
                return 
            }
            if (this.is_open) {
                this.post_message("peepr_navigate", {
                    url: j
                });
                return 
            }
            if (d.isObject(Tumblr.KeyCommands)) {
                Tumblr.KeyCommands.suspend()
            }
            j = j.replace(/^\/|\/$/g, "");
            this.$body.css("overflow", "hidden");
            this.current_iframe_url = this.options.base_url + j;
            this.$iframe = e("<iframe>", {
                "class": "ui_peepr",
                frameborder: 0,
                src: this.current_iframe_url,
                allowFullScreen: ""
            });
            this.setLoadTimeout();
            this.$iframe_wrapper = e("<div>", {
                "class": "ui_peepr_wrapper"
            }).appendTo(this.$body);
            this.$glass = e("<div>", {
                "class": "ui_peepr_glass"
            }).appendTo(this.$body);
            if (i) {
                this.$arrows = e(this.arrows_template()).appendTo(this.$body);
                this.has_arrows = true
            }
            this.$glass.on("click", d.bind(this.__glass_click, this));
            this.$doc.on("keydown.peepr", d.bind(this.__keydown, this));
            this.$win.on("message.peepr", d.bind(this.__message, this));
            this.show_loader();
            this.intro();
            this.is_open = true;
            Tumblr.Events.trigger("peepr:open", {
                tumblelog_name: this.current_tumblelog,
                post_id: this.current_post_id,
                loggingData: {
                    tumblelog_name: this.current_tumblelog,
                    post_id: this.current_post_id
                }
            })
        },
        intro: function() {
            if (this.transition_end) {
                this.$iframe_wrapper.on(this.transition_end + ".peepr", d.bind(this.__intro_complete, this))
            } else {
                this.__intro_complete()
            }
            var i = d.bind(function() {
                this.$body.addClass("peepr")
            }, this);
            d.delay(i, 50)
        },
        show_loader: function() {
            this.loader = new Tumblr.Loader({
                color: "#CCC",
                left: "50%",
                position: "absolute",
                top: "50%"
            }).start(this.$iframe_wrapper)
        },
        ready: function() {
            if (d.isObject(this.loader)) {
                this.loader.destroy()
            }
            clearTimeout(this.load_check);
            this.$iframe.addClass("ready");
            this.$iframe.focus()
        },
        close: function() {
            if (this.transition_end) {
                this.$iframe_wrapper.on(this.transition_end + ".peepr", d.bind(this.__outro_complete, this))
            } else {
                this.__outro_complete()
            }
            clearTimeout(this.load_check);
            this.$body.removeClass("peepr");
            Tumblr.Events.trigger("peepr:close", this.current_tumblelog, this.current_post_id)
        },
        reblog: function(j) {
            var i = "POST_CONTEXT_PEEPR";
            if (this.context.source === "search") {
                i = "POST_CONTEXT_SEARCH_PEEPR"
            }
            if (d.size(j) > 0) {
                if (Tumblr.Flags.bool("prima_post_forms")) {
                    Tumblr.Events.trigger("postForms:reblog", {
                        reblogSource: i,
                        reblogId: j.id,
                        reblogKey: j.reblog_key,
                        pt: j.pt
                    });
                    this.listenToOnce(Tumblr.Events, "postForms:closed", this.__post_form_hide);
                    this.listenToOnce(Tumblr.Events, "postForms:saved", this.__post_form_success);
                    this.hide()
                } else {
                    if (b.PostForms) {
                        b.PostForms.edit({
                            type: j.type,
                            reblog_id: j.id,
                            detached: true,
                            reblog: true,
                            reblog_key: j.reblog_key,
                            reblog_source: i
                        });
                        this.listenToOnce(b.Events, "post:form:hide", this.__post_form_hide);
                        this.listenToOnce(b.Events, "post:form:success", this.__post_form_success);
                        this.hide()
                    } else {
                        window.open("/reblog/" + j.id + "/" + j.reblog_key)
                    }
                }
                Tumblr.Events.trigger("peepr:reblog", this.current_tumblelog, j)
            }
        },
        like_update: function(i) {
            Tumblr.Events.trigger("peepr:like_update", this.current_tumblelog, i)
        },
        remove_unfollowed_posts: function(i) {
            Tumblr.Posts.whereBy({
                tumblelog: i.get("name"),
                sponsored: false
            }).invoke("dismiss")
        },
        ask: function(i) {
            new Tumblr.DashboardAskView({
                model: new Tumblr.DashboardAskModel(),
                recipient: i.recipient,
                allow_anonymous: false
            }).show_form();
            this.listenToOnce(b.Events, "ask:form:hide", this.__ask_form_hide);
            this.listenToOnce(b.Events, "ask:form:success", this.__ask_form_success);
            this.hide()
        },
        fan_mail: function(i) {
            Tumblr.FanMail.show(null, {
                href: Tumblr.FanMail.make_url_from_tumblelog(i.recipient),
                transparent_lightbox: true,
                show_loader: false
            });
            this.listenToOnce(b.Events, "fan_mail:form:hide", this.__fan_mail_hide);
            this.hide()
        },
        photo_lightbox: function(j) {
            var i = j.post;
            var m = i.photos;
            var k = j.photoset_index || 0;
            var l = [];
            d.each(m, function(n) {
                l.push({
                    width: n.original_size.width,
                    height: n.original_size.height,
                    low_res: n.alt_sizes[0].url,
                    high_res: n.original_size.url
                })
            });
            Tumblr.Lightbox.init(l, k);
            this.listenToOnce(b.Events, "tumblr_lightbox:form:hide", this.__photo_lightbox_hide);
            this.is_hiding = true
        },
        update_tumblelog_model: function(k) {
            if (!d.isObject(k) ||!d.has(k, "name")) {
                return 
            }
            var m = new Tumblr.Prima.Models.Tumblelog({
                name: k.name
            });
            if (d.has(k, "following") && k.following !== m.get("following")) {
                var j = {
                    source: (k.following) ? "FOLLOW_SOURCE_PEEPR_HEADER": "UNFOLLOW_SOURCE_PEEPR_HEADER"
                };
                if (this.context) {
                    var i = d.cloneDeep(this.context);
                    var l = i.path;
                    delete i.path;
                    j.context = i;
                    if (l) {
                        j.tlt = l
                    }
                }
                m.save_following({
                    following: k.following
                }, j);
                if (m.get("following") === false && this.hide_posts_on_unfollow === true) {
                    this.remove_unfollowed_posts(m)
                }
            }
            m.set(k)
        },
        show: function() {
            this.stopListening(b.Events);
            this.$body.removeClass("peepr_hide");
            this.is_hiding = false;
            this.$iframe.focus()
        },
        hide: function() {
            this.$body.addClass("peepr_hide");
            this.is_hiding = true
        },
        destroy: function() {
            Tumblr.Events.trigger("peepr:destroy", this.current_tumblelog, this.current_post_id);
            this.$win.off(".peepr");
            this.$doc.off(".peepr");
            this.stopListening(b.Events);
            this.is_open = false;
            this.has_arrows = false;
            this.current_tumblelog = "";
            this.current_post_id = "";
            this.$body.css("overflow", "auto");
            if (this.$iframe.length) {
                this.$iframe.remove()
            }
            if (this.$iframe_wrapper.length) {
                this.$iframe_wrapper.remove()
            }
            if (this.$glass.length) {
                this.$glass.off().remove()
            }
            if (this.$arrows.length) {
                this.$arrows.remove()
            }
            if (d.isObject(this.loader)) {
                this.loader.destroy()
            }
            if (d.isObject(Tumblr.KeyCommands)) {
                Tumblr.KeyCommands.resume()
            }
        },
        post_message: function(i, k) {
            var j = (k) ? (i + ":" + JSON.stringify(k)): i;
            this.$iframe[0].contentWindow.postMessage(j, this.options.post_message_scope)
        },
        arrows_template: d.template(e("#peepr_arrows").html()),
        error_template: d.template(e("#peepr_error").html())
    });
    var g = {
        init: function() {
            e(document).ready(this.ready);
            return this
        },
        ready: function() {
            parent.postMessage("peepr_ready", "*")
        },
        close: function() {
            parent.postMessage("peepr_close", "*")
        },
        reblog: function(j) {
            var i = JSON.stringify(j);
            parent.postMessage("peepr_reblog:" + i, "*")
        },
        ask: function(i) {
            var j = JSON.stringify(i);
            parent.postMessage("peepr_ask:" + j, "*")
        },
        fan_mail: function(j) {
            var i = JSON.stringify(j);
            parent.postMessage("peepr_fan_mail:" + i, "*")
        },
        like_update: function(j) {
            var i = JSON.stringify(j);
            parent.postMessage("peepr_like_update:" + i, "*")
        },
        photo_lightbox: function(i) {
            i = JSON.stringify(i);
            parent.postMessage("peepr_photo_lightbox:" + i, "*")
        },
        update_tumblelog_model: function(i) {
            i = JSON.stringify(i);
            parent.postMessage("peepr_update_tumblelog_model:" + i, "*")
        }
    };
    b.Peepr = (Tumblr.Flags.bool("indash_blogs")) ? c : d.noop;
    b.PeeprLink = (Tumblr.Flags.bool("indash_blogs")) ? g : d.noop
})(jQuery, _, Backbone, Tumblr);
/*! scripts/application/popover_legal.js */
(function(c, d, b, a) {
    a.LegalPopover = d.View.extend({
        initialize: function() {
            if (!this.$el.length) {
                return 
            }
            this.popover = new Tumblr.Popover({
                el: this.$el,
                glassless: true,
                glassless_options: {
                    prevent_clicks: true
                },
                on_show: b.bind(function() {
                    this.$el.addClass("show");
                    this.$el.closest("#sidebar_footer_nav").addClass("show_popover");
                    this.close_on_scroll()
                }, this),
                on_hide: b.bind(function() {
                    this.$el.removeClass("show");
                    this.$el.closest("#sidebar_footer_nav").removeClass("show_popover")
                }, this)
            });
            this.popover_button = this.$el.find(".popover_legal_link");
            this.popover_button.on("click", b.bind(function() {
                this.popover.show();
                return false
            }, this));
            this.update_position()
        },
        update_position: function() {
            var e = Math.floor(this.popover.popover.outerWidth() / 2);
            this.popover.popover.css({
                marginLeft: - e + "px"
            })
        },
        close_on_scroll: function() {
            c(window).on("scroll.legalpopover", b.bind(function() {
                this.popover.hide();
                c(window).off("scroll.legalpopover")
            }, this))
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/popover_search_base.js */
(function(c, d, b, a) {
    a.BaseSearchPopover = d.View.extend({
        el: "#user_tools",
        initialize: function(e) {
            this.options = e || {};
            this.popover_selector = this.options.popover_selector || "#popover_tracked_tags";
            this.$search_field = this.$("#search_field");
            this.$search_form = this.$("#search_form");
            this.$search_query = this.$("#search_query");
            this.$popover = this.$(this.popover_selector);
            this.$tracked_tags = this.$(this.popover_selector + " .tracked_tags");
            this.winRect = Tumblr.Prima.DOMEventor.rect();
            this.popover = new Tumblr.Popover({
                el: this.$search_query,
                glassless: true,
                glassless_options: {
                    click_root: this.$search_field,
                    prevent_clicks: true
                },
                popover: this.$popover,
                disable_auto_show: true,
                on_show: b.bind(function() {
                    this.bind_key_nav();
                    this.resize_view();
                    this.init_scroll()
                }, this),
                on_hide: b.bind(function() {
                    c("#unread_tag_notice").show();
                    c("#search_query").addClass("with_unread");
                    c(".ui_search").removeClass("active");
                    this.$search_field.removeClass("active");
                    this.unbind_key_nav();
                    this.destroy_scroll()
                }, this)
            });
            this.cached_popover_height = this.popover.popover.height();
            this.$scrollable_container = this.$el.find(".popover_scroll");
            this.scrollbar = null;
            this.setup_autocomplete();
            this.keyevents = {
                bind_key_down: b.bind(this.keydown, this),
                bind_key_up: b.bind(this.keyup, this)
            };
            Tumblr.Events.on("DOMEventor:flatresize", b.debounce(this.resize_view, 300).bind(this));
            Tumblr.Events.on("SearchPopover:update", b.debounce(this.on_update, 300).bind(this))
        },
        init_scroll: function() {
            if (!this.scrollbar) {
                this.scrollbar = new Tumblr.PopoverScroll(this.$scrollable_container)
            }
        },
        destroy_scroll: function() {
            if (this.scrollbar) {
                this.scrollbar.destroy();
                this.scrollbar = null
            }
        },
        resize_view: function() {
            var e = {}, f = this.popover.popover;
            if ((this.cached_popover_height > this.winRect.windowHeight)) {
                if ((f.height() + f.position().top) > this.winRect.windowHeight - 200) {
                    e = {
                        "max-height": this.winRect.windowHeight - 200 + "px",
                        "overflow-y": "auto"
                    };
                    this.$scrollable_container.css(e);
                    if (this.scrollbar) {
                        this.scrollbar.update()
                    } else {
                        this.init_scroll()
                    }
                }
            } else {
                e = {
                    "max-height": "auto",
                    overflow: "none"
                };
                this.$scrollable_container.css(e);
                if (this.scrollbar) {
                    this.destroy_scroll()
                }
            }
        },
        on_update: function() {
            this.cached_popover_height = this.popover.popover.height();
            this.resize_view()
        },
        setup_autocomplete: function() {},
        focus_search_query: function() {},
        mouseenter: function() {
            if (this.in_popover(this.in_focus())) {
                this.in_focus().blur()
            }
        },
        has_children: function(e) {
            if (!e) {
                return false
            }
            return (e.children().length > 0) ? true : false
        },
        click_popover: function(f) {},
        bind_key_nav: function() {
            c(document).off("keydown", this.keyevents.bind_key_down);
            c(document).off("keyup", this.keyevents.bind_key_up);
            c(document).on("keydown", this.keyevents.bind_key_down);
            c(document).on("keyup", this.keyevents.bind_key_up)
        },
        unbind_key_nav: function() {
            c(document).off("keyup", this.keyevents.bind_key_up);
            c(document).off("keydown", this.keyevents.bind_key_down)
        },
        next: function() {
            this.$search_query.blur();
            this.currentIndex++;
            this.set_active("next")
        },
        previous: function() {
            this.$search_query.blur();
            this.currentIndex--;
            this.set_active("previous")
        },
        set_active: function(e) {},
        in_focus: function() {
            return c(document.activeElement)
        },
        contains: function(e) {
            return (this.in_popover(e) || this.$search_query.is(e)) ? true : false
        },
        in_popover: function(e) {
            return this.$popover.has(e).length
        },
        keyup: function(f) {
            if (f.keyCode === 9) {
                if (!this.contains(this.in_focus())) {
                    this.popover.hide();
                    this.unbind_key_nav();
                    this.in_focus().blur()
                }
            }
        },
        keydown: function(f) {
            switch (f.keyCode) {
            case 27:
                this.$search_query.blur();
                return;
            case 38:
                f.preventDefault();
                this.previous();
                break;
            case 40:
                f.preventDefault();
                this.next();
                break;
            default:
                break
            }
        },
        submit: function() {
            if (c.trim(this.$search_query.val()) === "") {
                return false
            }
            return true
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/popover_reply.js */
(function(c, d, b, a) {
    a.ReplyPopover = Tumblr.PopoverWithForm.extend({
        template: "#post_reply_form",
        events: {
            "input textarea": "check_form_state",
            "keydown textarea": "on_keydown"
        },
        initialize: function(e) {
            this.options = e || {};
            var f = b.template(c(this.template).html());
            this.$el.html(f());
            this.submit_button = this.$("button");
            this.textarea = this.$("form textarea");
            this.check_form_state();
            this.is_empty = true;
            b.extend(this.options, {
                on_hide: this.on_hide,
                on_show: this.on_show
            });
            Tumblr.PopoverWithForm.prototype.initialize.apply(this, arguments)
        },
        on_keydown: function(f) {
            this.check_form_state();
            if (!this.is_empty && (f.ctrlKey || f.metaKey) && f.which === 13) {
                f.preventDefault();
                this.submit_form()
            }
        },
        check_form_state: function() {
            this.is_empty = (this.textarea[0].value.length === 0);
            this.submit_button.attr("disabled", this.is_empty)
        },
        on_show: function() {
            this.position()
        },
        on_hide: function() {
            this.$el.removeClass("active");
            this.trigger("close")
        },
        submit_form: function(f) {
            if (f) {
                f.preventDefault()
            }
            this.submit_button.attr("disabled", true);
            this.submit_button.html(this.submit_button.data("label-loading"));
            var e = this.model.reply(this.textarea.val());
            e.done(b.bind(this.on_success, this))
        },
        on_success: function() {
            this.model.set("replied_to", true);
            this.trigger("success");
            this.$el.find("button").attr("disabled", false);
            this.$el.find("textarea").val("");
            this.hide();
            this.submit_button.html(this.submit_button.data("label"))
        }
    });
    a.ReplyButtons = {
        init: function() {
            var e = {};
            c("#posts").on("click", ".reply_button", function(f) {
                if (f.target !== f.currentTarget) {
                    return 
                }
                f.stopPropagation();
                f.preventDefault();
                var g = f.currentTarget.id;
                if (!e[g]) {
                    e[g] = new ReplyPopover({
                        el: c(f.target)
                    })
                }
                c(f.currentTarget).addClass("active");
                e[g].show()
            })
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/popover_sharing_base.js */
(function(c, b, e, a) {
    var d = a.Popover.extend({
        events: {
            "click .share_email": "__email_trigger_click",
            "click .share_facebook": "__share_facebook_click",
            "click .share_twitter": "__share_twitter_click",
            "click .share_permalink": "__share_permalink_click",
            "click .cancel": "__cancel_click",
            "input .email_address": "__email_form_input",
            "input .twitter .share_message": "__share_twitter_input",
            "change .reply_to_input": "__reply_to_change",
            "keydown .share_form": "__submit_keydown",
            "submit .share_form": "__submit"
        },
        __email_trigger_click: function(f) {
            f.preventDefault();
            this._toggle_email_form()
        },
        __email_form_input: function() {
            var f = a.SharePopoverBase.validate_email(this.$email_address.val());
            this.$submit_button.attr("disabled", !f)
        },
        __share_facebook_click: function(f) {
            f.preventDefault();
            this._share_facebook()
        },
        __share_twitter_click: function(f) {
            f.preventDefault();
            this._share_twitter()
        },
        __share_twitter_input: function(g) {
            g.preventDefault();
            var f = a.SharePopoverBase.validate_twitter(this.$share_message.val(), this.$character_count);
            this.$submit_button.attr("disabled", !f)
        },
        __share_permalink_click: function() {
            this.reset_and_hide()
        },
        __cancel_click: function(f) {
            f.preventDefault();
            this._cancel_or_close()
        },
        __reply_to_change: function(g) {
            if (!a.Cookie) {
                return 
            }
            var f = c(g.currentTarget).is(":checked");
            a.Cookie.set("share_popover_reply_to", f, 365 * 24 * 60 * 60)
        },
        __submit: function() {
            this.submit_form();
            return false
        },
        __submit_keydown: function(f) {
            if (f.keyCode === 13 && (f.ctrlKey || f.metaKey || f.altKey)) {
                f.preventDefault();
                f.stopPropagation();
                this.submit_form()
            }
        },
        __submit_success: function() {
            this.$status.show();
            this._fadeout_popover()
        },
        __submit_error: function() {
            this.$error_status.html(this.error_text);
            this.$submit_button.html(this.$submit_button.data("label"));
            this.$submit_button.attr("disabled", false);
            this.$error_status.addClass("active")
        },
        _share_twitter: function() {
            if (this.twitter_username) {
                this.$service_cancel.show();
                this.$submit_button.html("Tweet");
                this.$share_form.data("type", "twitter");
                this.$share_label.text("@" + this.twitter_username);
                this.$share_message.val(" [URL]");
                this.$share_form.addClass("active");
                this.$share_options.removeClass("active");
                this.$share_message.get(0).setSelectionRange(0, 0);
                a.SharePopoverBase.validate_twitter(this.$share_message.val(), this.$character_count);
                this.$share_message.attr("placeholder", "");
                this.$submit_button.attr("disabled", false);
                this.$share_form.addClass("twitter");
                if (this.$share_form.hasClass("active") && this.placeholder_supported) {
                    this.$share_message.focus();
                    this.$share_message.get(0).setSelectionRange(0, 0)
                }
            } else {
                this._share_twitter_fallback()
            }
        },
        _share_twitter_fallback: function() {
            window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(this.tiny_url || this.url), "twitter-share-dialog", "width=626,height=258");
            this.reset_and_hide()
        },
        _share_facebook: function() {
            if (this.share_to_facebook) {
                c.ajax({
                    url: "/svc/facebook_status",
                    type: "post",
                    data: {
                        form_key: c("#tumblr_form_key").attr("content")
                    },
                    success: b.bind(this._share_facebook_success, this),
                    error: b.bind(this._share_facebook_fallback, this)
                })
            } else {
                this._share_facebook_fallback()
            }
        },
        _share_facebook_success: function(f) {
            if (f) {
                this.$service_cancel.show();
                this.$submit_button.html(this.$submit_button.data("label"));
                this.$share_form.data("type", "facebook");
                this.$share_label.text(f);
                this.$submit_button.attr("disabled", false);
                this.$share_form.addClass("facebook");
                this.$share_options.toggleClass("active");
                this.$share_form.toggleClass("active");
                if (this.$share_form.hasClass("active") && this.placeholder_supported) {
                    this.$share_message.focus()
                }
            } else {
                this._share_facebook_fallback()
            }
        },
        _share_facebook_fallback: function() {
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.url), "facebook-share-dialog", "width=626,height=436");
            this.reset_and_hide()
        },
        _toggle_email_form: function() {
            this.$submit_button.html(this.$submit_button.data("label"));
            this.$share_form.data("type", "email");
            this.$share_options.toggleClass("active");
            this.$share_form.toggleClass("active");
            this.$reply_to.addClass("active");
            if (this.$share_form.hasClass("active") && this.is_placeholder_supported) {
                this.$email_address.focus()
            }
        },
        _fadeout_popover: function() {
            setTimeout(b.bind(function() {
                this.popover.fadeOut(150, b.bind(this.reset_and_hide, this))
            }, this), 1250)
        },
        _position_popover: function() {
            this.popover.css({
                right: "auto",
                left: (this.$button.length) ? this.$button.offset().left: ""
            });
            this.position()
        },
        _cancel_or_close: function() {
            var f = this.$email_address.val() || "";
            if (this.$share_form.data("type") === "email" && f.length) {
                this.$email_address.val("");
                this.$submit_button.attr("disabled", true)
            } else {
                this.reset_form()
            }
        },
        initialize: function(f) {
            this.options = b.extend({
                url: "",
                tiny_url: "",
                popover: null,
                button: null,
                on_hide: b.bind(this.reset_and_hide, this)
            }, f);
            this.url = this.options.url;
            this.tiny_url = this.options.tiny_url;
            this.is_placeholder_supported = a.SharePopoverBase.placeholder_support();
            this.$button = c(this.options.button);
            this.cache_selectors();
            if (a.Cookie && a.Cookie.get("share_popover_reply_to") === "true") {
                this.$reply_to_input.prop("checked", true)
            }
            Tumblr.Events.trigger("keycommands:suspend");
            a.Popover.prototype.initialize.call(this, this.options)
        },
        cache_selectors: function() {
            this.$share_form = this.$(".share_form");
            this.$share_label = this.$(".share_label");
            this.$reply_to = this.$(".reply_to");
            this.$share_options = this.$(".share_options");
            this.$submit_button = this.$("button.email_submit");
            this.$email_address = this.$(".email_address");
            this.$share_message = this.$(".share_message");
            this.$character_count = this.$(".character_count");
            this.$service_cancel = this.$(".cancel.service");
            this.$status = this.$(".status");
            this.$error_status = this.$(".error_status");
            this.$status_message = this.$(".status_message");
            this.$reply_to_input = this.$(".reply_to_input");
            this.sent_text = this.$status.data("sent") || "";
            this.error_text = this.$status.data("error") || "";
            if (c(".share_twitter").length) {
                this.twitter_username = c(".share_twitter").data("twitter-username")
            }
        },
        show: function() {
            this._position_popover();
            this.listenTo(Tumblr.Events, "DOMEventor:flatresize", this._position_popover);
            a.Popover.prototype.show.call(this)
        },
        hide: function() {
            Tumblr.Events.trigger("keycommands:resume");
            this.stopListening(Tumblr.Events, "DOMEventor:flatresize");
            a.Popover.prototype.hide.call(this)
        },
        reset_form: function() {
            this.$service_cancel.hide();
            this.$submit_button.html(this.$submit_button.data("label"));
            this.$submit_button.attr("disabled", true);
            this.$email_address.val("");
            this.$share_message.val("");
            this.$share_message.attr("placeholder", this.$share_message.attr("title"));
            this.$share_options.addClass("active");
            this.$share_form.removeClass("active");
            this.$share_form.removeClass("facebook");
            this.$share_form.removeClass("twitter");
            this.$status.hide();
            this.$status_message.html(this.sent_text);
            this.$reply_to.removeClass("active");
            this.$error_status.removeClass("active")
        },
        reset_and_hide: function() {
            this.reset_form();
            this.$el.removeClass("active");
            this.popover.hide()
        },
        submit_form: function() {
            this.$submit_button.attr("disabled", true);
            this.$submit_button.html(this.$submit_button.data("label-sending"))
        },
    }, {
        placeholder_support: function() {
            var f = document.createElement("input");
            return ("placeholder" in f)
        },
        validate_email: function(g) {
            var f = /\S+@\S+\.\S+/;
            return f.test(g)
        },
        validate_twitter: function(k, j) {
            var i = k.match(/\[URL\]/ig);
            var g = (i) ? (i.length * 24): 0;
            var h = 140 - k.length - g;
            var f = (j && j.length) ? j: false;
            if (f) {
                f.html(h);
                if (h < 10) {
                    f.css("color", "#d95e40")
                } else {
                    if (h < 20) {
                        f.css("color", "#444444")
                    } else {
                        f.css("color", "#bbbbbb")
                    }
                }
            }
            if (h < 0 || h === 140) {
                return false
            }
            return true
        }
    });
    a.SharePopoverBase = d
})(jQuery, _, Backbone, Tumblr);
/*! scripts/application/popover_sharing.js */
(function(d, e, b, a) {
    var c = a.SharePopoverBase.extend({
        _fadeout_popover: function() {
            this.popover.addClass("flyaway");
            setTimeout(b.bind(function() {
                this.popover.removeClass("flyaway").hide();
                this.reset_and_hide()
            }, this), 1000)
        },
        cache_selectors: function() {
            a.SharePopoverBase.prototype.cache_selectors.call(this);
            if (d(".share_twitter").length) {
                this.$twitter_username = d(".share_twitter").data("twitter-username")
            }
            if (d(".share_facebook").length) {
                this.$share_to_facebook = d(".share_facebook").data("has-facebook")
            }
            this.url = this.$share_options.data("post-url");
            this.tiny_url = this.$share_options.data("post-tiny-url")
        },
        submit_form: function() {
            var f = "/svc/email_post";
            switch (this.$share_form.data("type")) {
            case"facebook":
                f = "/svc/share_to_facebook";
                break;
            case"twitter":
                f = "svc/share_to_twitter";
                break
            }
            var g = this.$share_form.serializeArray();
            g.push({
                name: "form_key",
                value: d("#tumblr_form_key").attr("content")
            });
            d.ajax({
                url: f,
                type: "post",
                data: g,
                success: b.bind(this.__submit_success, this),
                error: b.bind(this.__submit_error, this)
            });
            a.SharePopoverBase.prototype.submit_form.call(this)
        }
    });
    a.ShareButtons = {
        init: function() {
            var f = {};
            d("#posts").on("click", ".share_social_button", function(i) {
                if (i.currentTarget !== i.target) {
                    return 
                }
                var g = d(i.currentTarget).closest(".post");
                var h = d(i.currentTarget);
                var k = d(i.currentTarget).attr("id");
                var j = (g.length) ? g.data("json"): {};
                if (Tumblr.Prima && Tumblr.Prima.SharePopover && Tumblr.Flags && Tumblr.Flags.bool("enable_prima_share_popover")) {
                    f[k] = new Tumblr.Prima.SharePopover({
                        popoverData: j.share_popover_data,
                        pinnedTarget: h
                    }).render()
                } else {
                    if (!f[k]) {
                        f[k] = new c({
                            el: h,
                            wait: true,
                            directional: true,
                            no_autofocus: true,
                            disable_auto_show: true,
                            glassless: true
                        }).show();
                        h.addClass("active")
                    }
                }
            })
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/css_webfonts.js */
(function(a) {
    a.webfonts = {
        "1785 GLC Baskerville": {
            display_name: "1785 Baskerville",
            family: "'1785 GLC Baskerville', serif",
            path: "1785glcbaskerville",
            _v: "1"
        },
        "Alternate Gothic": {
            display_name: "Alternate Gothic",
            family: "'Alternate Gothic', sans-serif",
            path: "alternategothic",
            _v: "3"
        },
        Arquitecta: {
            display_name: "Arquitecta",
            family: "'Arquitecta', sans-serif",
            path: "arquitecta",
            _v: "3"
        },
        Avalon: {
            display_name: "Avalon",
            family: "'Avalon', sans-serif",
            path: "avalon",
            _v: "1"
        },
        Baskerville: {
            display_name: "Baskerville",
            family: "Baskerville, 'Times New Roman', Times, serif"
        },
        "Bodoni Recut FS": {
            display_name: "Bodoni",
            family: "'Bodoni Recut FS', serif",
            path: "bodonirecutfs",
            _v: "3"
        },
        Bookmania: {
            display_name: "Bookmania",
            family: "'Bookmania', serif",
            path: "bookmania",
            _v: "1"
        },
        "Brutal Type": {
            display_name: "Brutal Type",
            family: "'Brutal Type', sans-serif",
            path: "brutaltype",
            _v: "1"
        },
        Calluna: {
            display_name: "Calluna",
            family: "'Calluna', serif",
            path: "calluna",
            _v: "3"
        },
        "Calluna Sans": {
            display_name: "Calluna Sans",
            family: "'Calluna Sans', sans-serif",
            path: "callunasans",
            _v: "3"
        },
        Capita: {
            display_name: "Capita",
            family: "'Capita', serif",
            path: "capita",
            _v: "1"
        },
        "Caslon FS": {
            display_name: "Caslon FS",
            family: "'Caslon FS', serif",
            path: "caslonfs",
            _v: "3"
        },
        "Clarendon Text Pro": {
            display_name: "Clarendon",
            family: "'Clarendon Text Pro', serif",
            path: "clarendontextpro",
            _v: "3"
        },
        "Clearface FS": {
            display_name: "Clearface",
            family: "'Clearface FS', serif",
            path: "clearface",
            _v: "4"
        },
        "Courier New": {
            display_name: "Courier New",
            family: "'Courier New', Courier, monospace"
        },
        Futura: {
            display_name: "Futura",
            family: "Futura, 'Century Gothic', AppleGothic, sans-serif"
        },
        "Garamond Classic FS": {
            display_name: "Garamond",
            family: "'Garamond Classic FS', serif",
            path: "garamondclassicfs",
            _v: "3"
        },
        Georgia: {
            display_name: "Georgia",
            family: "Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif"
        },
        Gibson: {
            display_name: "Gibson",
            family: "'Gibson', sans-serif",
            path: "gibson",
            _v: "3"
        },
        "Grumpy Black 48": {
            display_name: "Grumpy",
            family: "'Grumpy Black 48', serif",
            path: "grumpyblack48",
            _v: "3"
        },
        "Helvetica Neue": {
            display_name: "Helvetica",
            family: "'Helvetica Neue', Arial, Helvetica, sans-serif"
        },
        "Lorimer No 2": {
            display_name: "Lorimer No 2",
            family: "'Lorimer No 2', sans-serif",
            path: "lorimerno2",
            _v: "3"
        },
        "Lucida Sans": {
            display_name: "Lucida Sans",
            family: "'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', sans-serif"
        },
        "News Gothic FS": {
            display_name: "News Gothic",
            family: "'News Gothic FS', sans-serif",
            path: "newsgothicfs",
            _v: "3"
        },
        "Pratt Pro": {
            display_name: "Pratt Pro",
            family: "'Pratt Pro', serif",
            path: "prattpro",
            _v: "1"
        },
        Quadrat: {
            display_name: "Quadrat",
            family: "'Quadrat', serif",
            path: "quadrat",
            _v: "1"
        },
        "Sofia Pro": {
            display_name: "Sofia Pro",
            family: "'Sofia Pro', sans-serif",
            path: "sofiapro",
            _v: "2"
        },
        Spade: {
            display_name: "Spade",
            family: "'Spade', serif",
            path: "spade",
            _v: "1"
        },
        "Square Serif": {
            display_name: "Square Serif",
            family: "'Square Serif', serif",
            path: "squareserif",
            _v: "4"
        },
        Streetscript: {
            display_name: "Streetscript",
            family: "'Streetscript', sans-serif",
            path: "streetscript",
            _v: "1"
        },
        "Typewriter FS": {
            display_name: "Typewriter",
            family: "'Typewriter FS', serif",
            path: "typewriterfs",
            _v: "1"
        },
        Verdana: {
            display_name: "Verdana",
            family: "Verdana, Geneva, Tahoma, sans-serif"
        },
        Ziclets: {
            display_name: "Ziclets",
            family: "'Ziclets', serif",
            path: "ziclets",
            _v: "1"
        }
    }
})(Tumblr);
/*! scripts/color_utilities.js */
(function(c, b, a) {
    var d = {
        rgb_to_hex: function(h, f, e) {
            return "#" + ((1<<24) + (h<<16) + (f<<8) + e).toString(16).slice(1)
        },
        hex_to_rgb: function(f) {
            f = new String(f).replace(/[^0-9a-f]/gi, "");
            if (f.length < 6) {
                f = f[0] + f[0] + f[1] + f[1] + f[2] + f[2]
            }
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        },
        rgb_to_hsv: function(l, k, f) {
            var j = Math.min(Math.min(l, k), f);
            var e = Math.max(Math.max(l, k), f);
            var h = e - j;
            var i = {
                h: 6,
                s: e ? ((e - j) / e): 0,
                v: (e / 255)
            };
            if (!h) {
                i.h = 0
            } else {
                if (e === l) {
                    i.h += (k - f) / h
                } else {
                    if (e === k) {
                        i.h += 2 + (f - l) / h
                    } else {
                        i.h += 4 + (l - k) / h
                    }
                }
            }
            i.h = (60 * i.h)%360;
            return i
        },
        hsv_to_rgb: function(j, q, p) {
            var e, k, n;
            if (!q) {
                e = k = n = p
            } else {
                e = k = n = 0;
                var i = ((j + 360)%360) / 60;
                var l = p * q;
                var f = p - l;
                var o = l * (1 - Math.abs(i%2 - 1));
                if (i < 1) {
                    e = l;
                    k = o
                } else {
                    if (i < 2) {
                        e = o;
                        k = l
                    } else {
                        if (i < 3) {
                            k = l;
                            n = o
                        } else {
                            if (i < 4) {
                                k = o;
                                n = l
                            } else {
                                if (i < 5) {
                                    n = l;
                                    e = o
                                } else {
                                    n = o;
                                    e = l
                                }
                            }
                        }
                    }
                }
                e += f;
                k += f;
                n += f
            }
            return {
                r: Math.round(255 * e),
                g: Math.round(255 * k),
                b: Math.round(255 * n)
            }
        },
        hex_to_hsv: function(g) {
            g = new String(g).replace(/[^0-9a-f]/gi, "");
            if (g.length < 6) {
                g = g[0] + g[0] + g[1] + g[1] + g[2] + g[2]
            }
            var f = a.ColorUtilities.hex_to_rgb(g);
            var e = a.ColorUtilities.rgb_to_hsv.apply(a.ColorUtilities, b.toArray(f));
            return e
        },
        hsv_to_hex: function(i, g, e) {
            var f = a.ColorUtilities.hsv_to_rgb(i, g, e);
            var j = a.ColorUtilities.rgb_to_hex.apply(a.ColorUtilities, b.toArray(f));
            return j
        },
        hex_brightness: function(i, q) {
            i = String(i).replace(/[^0-9a-f]/gi, "");
            if (i.length < 6) {
                i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]
            }
            q = q || 0;
            var o = parseInt(i, 16), j = (q < 0) ? 0: 255, f = (q < 0)?-(q) : q, e = o>>16, m = o>>8 & 255, s = o & 255, n, k, h;
            n = Math.round((j - e) * f) + e;
            k = Math.round((j - m) * f) + m;
            h = Math.round((j - s) * f) + s;
            return "#" + (16777216 + n * 65536 + k * 256 + h).toString(16).slice(1)
        },
        hsv_to_readable: function(e) {
            if (typeof e === "string") {
                e = a.ColorUtilities.hex_to_hsv(e)
            }
            return (e.s < 0.2 && e.v > 0.8) ? "#444" : "#FFF"
        },
        compare_colors: function(k, i, o) {
            var g = {
                upper_bound: 0.8,
                lower_bound: 0.2,
                diff_bound: 0.1,
                hue_bound: 15
            };
            b.extend(g, o);
            var j = g.upper_bound;
            var n = g.lower_bound;
            var m = g.diff_bound;
            var e = g.hue_bound;
            var h = Math.abs(k.h - i.h);
            var f = Math.abs(k.s - i.s);
            var l = Math.abs(k.v - i.v);
            if (h <= m && f <= m && l <= m) {
                return true
            } else {
                if (f <= m && l <= m) {
                    if (f >= j || f <= n && l >= j || l <= n && h <= e) {
                        return true
                    }
                }
            }
            return false
        }
    };
    a.ColorUtilities = d
})(jQuery, _, Tumblr);
/*! scripts/indash_blog/views/header/popover.js */
Tumblr.IndashBlog || (Tumblr.IndashBlog = {});
Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {});
(function(d, b, e, a) {
    var c = e.View.extend({
        className: "indash_header_popover",
        defaults: {
            direction: "left",
            edit_field: null,
            template: false,
            template_data: {},
            trigger: null,
            glassless: true
        },
        __close: function() {
            this.hide()
        },
        initialize: function(f) {
            this.options = b.extend({}, this.defaults, f);
            this.template = this.options.template;
            this.template_data = this.options.template_data;
            this.checkbox_template = b.template(d("#tumblelog_header_checkbox_template").html());
            this.color_picker_template = b.template(d("#tumblelog_header_color_picker_template").html());
            this.is_showing = false;
            this.$popover = null;
            this.popover_view = null;
            a.Popover.register(this)
        },
        render: function() {
            var f = this.template(this.template_data);
            this.$popover = d(f).appendTo(this.$el).hide();
            this.popover_view = new Tumblr.Popover({
                el: this.options.trigger,
                popover: this.$popover,
                glassless: this.options.glassless,
                glassless_options: this.options.glassless_options,
                auto_show: false,
                direction: this.options.direction,
                skip_offset: true,
                on_show: b.bind(function() {
                    if (!this.is_showing) {
                        Tumblr.Events.trigger("indashblog:popover:show", this, this.options.edit_field);
                        this.is_showing = true
                    }
                }, this),
                on_hide: b.bind(function() {
                    if (this.is_showing) {
                        Tumblr.Events.trigger("indashblog:popover:hide", this, this.options.edit_field);
                        this.is_showing = false
                    }
                }, this)
            });
            return this
        },
        show: function() {
            this.popover_view.show()
        },
        hide: function() {
            if (!this.is_showing) {
                return 
            }
            Tumblr.Events.trigger("indashblog:popover:hide", this, this.options.edit_field);
            this.is_showing = false;
            this.popover_view.hide()
        }
    });
    c.instances = [];
    c.register = function(f) {
        this.instances.push(f)
    };
    c.hide_all = function() {
        for (var g = 0, f = this.instances.length; g < f; g++) {
            this.instances[g].hide()
        }
    };
    a.Popover = c
})(jQuery, _, Backbone, Tumblr.IndashBlog.Header);
/*! scripts/indash_blog/views/header/info_popover.js */
Tumblr.IndashBlog || (Tumblr.IndashBlog = {});
Tumblr.IndashBlog.Header || (Tumblr.IndashBlog.Header = {});
(function(d, b, e, a) {
    var c = Tumblr.Popover.extend({
        template: b.template(d("#tumblelog_header_info_popover_template").html()),
        events: {
            "click .ask_menu_item": "__ask_menu_item_clicked",
            "click .fan_mail_menu_item": "__fan_mail_menu_item_clicked",
            "click .archive_menu_item": "__archive_menu_item_clicked",
            "click .toggle_spam": "__toggle_spam_click",
            "click .toggle_nsfw": "__toggle_nsfw_click",
            "click .toggle_suspended": "__toggle_suspended_click",
            "click .panel_menu_item": "__panel_menu_item_clicked",
        },
        __panel_menu_item_clicked: function(f) {
            this.hide()
        },
        __ask_menu_item_clicked: function(f) {
            f.preventDefault();
            Tumblr.Events.trigger("indashblog:tumblelog:ask", {
                recipient: this.model.get("name"),
                anonymous_asks: this.model.get("anonymous_asks")
            });
            this.hide()
        },
        __fan_mail_menu_item_clicked: function(f) {
            f.preventDefault();
            Tumblr.Events.trigger("indashblog:tumblelog:fan_mail", {
                recipient: this.model.get("name")
            });
            this.hide()
        },
        __archive_menu_item_clicked: function() {
            this.hide()
        },
        __toggle_spam_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_spam();
            g.success(b.bind(function(h) {
                this.model.set("spam", (h.spammer) ? true : false)
            }, this))
        },
        __toggle_nsfw_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_nsfw();
            g.success(b.bind(function(h) {
                this.model.set("nsfw", h.nsfw)
            }, this))
        },
        __toggle_suspended_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_suspended();
            g.success(b.bind(function(h) {
                this.model.set("suspended", h.suspended)
            }, this))
        },
        __model_change: function() {
            var f = this.model.toJSON();
            this.$(".toggle_spam").toggleClass("is_flagged", !!(f.spam));
            this.$(".toggle_nsfw").toggleClass("is_flagged", !!(f.nsfw));
            this.$(".toggle_suspended").toggleClass("is_flagged", !!(f.suspended))
        },
        initialize: function(f) {
            this.$trigger = f.trigger;
            if (!this.model) {
                return 
            }
            this.$popover = d(this.template(this.model.toJSON())).appendTo(this.$el).hide();
            this.tumblelog = new Tumblr.Prima.Models.Tumblelog({
                name: this.model.get("name")
            });
            this.listenTo(this.model, "change", this.__model_change);
            f = b.extend(f, {
                popover: this.$popover
            });
            Tumblr.Popover.prototype.initialize.call(this, f)
        },
        show: function() {
            this.position_popover();
            this.listenTo(Tumblr.Events, "DOMEventor:flatresize", this.position_popover);
            Tumblr.Popover.prototype.show.call(this)
        },
        hide: function() {
            this.stopListening(Tumblr.Events, "DOMEventor:flatresize");
            Tumblr.Popover.prototype.hide.call(this)
        },
        position_popover: function() {
            var f = this.$trigger.offset().left + "px";
            this.$popover.css({
                right: "auto",
                left: f
            })
        }
    });
    a.InfoPopover = c
})(jQuery, _, Backbone, Tumblr.IndashBlog.Header);
/*! scripts/indash_blog/views/header_view_compact.js */
var TumblrData = TumblrData || {};
var Events = Tumblr.Events;
Tumblr.IndashBlog || (Tumblr.IndashBlog = {});
(function(c, b, e, a) {
    var d = e.View.extend({
        className: "indash_header_compact",
        defaults: {
            current_data: {},
            unfollow_data: {},
            follow_data: {},
            template_data: {},
            on_render: c.noop,
            hide_posts_on_unfollow: false,
            strip_description_line_breaks: false,
            include_info_popover: true
        },
        events: {
            "click .description a": "__description_link_click",
            "click .info_popover_button": "__info_popover_button_clicked",
            "click .follow": "__on_follow_click",
            "click .unfollow": "__on_follow_click",
            'click [data-post-action="remove"]': "__on_remove_click"
        },
        __on_follow_click: function(f) {
            f.preventDefault();
            f.stopPropagation();
            if (!Tumblr.Flags.bool("is_logged_in")) {
                window.open("/follow/" + this.model.get("name"), "_self");
                return 
            }
            if (this.model.get("following")) {
                var g = Tumblr.TumblelogActions.confirm_unfollow({
                    tumblelog: this.model.get("name"),
                    avatar_url: this.model.get("avatar_url") || ""
                });
                this._open_dialog(g, b.bind(function() {
                    this.model.save_following({
                        following: false
                    }, this.options.unfollow_data);
                    if (this.hide_posts_on_unfollow) {
                        this._hide_posts()
                    }
                }, this))
            } else {
                this.model.save_following({
                    following: true
                }, this.options.follow_data)
            }
        },
        __on_remove_click: function(f) {
            f.preventDefault();
            this.destroy()
        },
        __info_popover_button_clicked: function(f) {
            f.preventDefault();
            f.stopPropagation();
            this.info_popover.show()
        },
        __description_link_click: function(i) {
            i.preventDefault();
            var f = c(i.currentTarget).attr("href");
            try {
                if (Tumblr.Prima.Url && Tumblr.Prima.Url.hasAllowedProtocol(f)) {
                    if (!Tumblr.Prima.Url.isAbsoluteUrl(f)) {
                        var h = "http://" + this.model.get("name") + ".tumblr.com/";
                        f = (f.charAt(0) === "/") ? f.substr(1) : f;
                        f = h + f
                    }
                    window.open(f, "_blank")
                }
            } catch (g) {}
        },
        _render_follow_button: function() {
            if (this.model.get("following")) {
                this.$el.find(".follow").hide();
                this.$el.find(".unfollow").show()
            } else {
                this.$el.find(".unfollow").hide();
                this.$el.find(".follow").show()
            }
        },
        _hide_posts: function() {
            Tumblr.Posts.whereBy({
                tumblelog: this.model.get("name"),
                sponsored: false
            }).invoke("dismiss")
        },
        _open_dialog: function(f, g) {
            g = g || c.noop;
            this.is_disabled = true;
            f.fail(b.bind(function() {
                this.is_disabled = this.is_menu_open
            }, this));
            f.done(b.bind(function() {
                this.is_disabled = this.is_menu_open;
                g()
            }, this))
        },
        _render_inline_styles: function() {
            var j = this.model.get("global_theme_params");
            var g=!!(j.header_image_focused && j.header_stretch && j.show_header_image);
            var i = Tumblr.ColorUtilities.hex_to_hsv(j.background_color);
            var h = Tumblr.ColorUtilities.hex_to_hsv(j.link_color);
            var f = j.link_color;
            if (Tumblr.ColorUtilities.compare_colors(h, i)) {
                f = Tumblr.ColorUtilities.hsv_to_readable(i)
            }
            if (!g) {
                this.$(".navigation .nav_icon").css("color", f);
                this.$(".navigation .blog_name").css("color", f);
                this.$(".navigation .post_dismiss").css("color", f);
                this.$(".navigation .dismiss_icon").css("color", f);
                this.$(".navigation button").css({
                    color: j.background_color,
                    "background-color": f
                })
            }
            this.$(".description a").css("color", j.link_color);
            return this
        },
        _render_font_styles: function() {
            if (!Tumblr.webfonts) {
                return 
            }
            var i = this.model.get("global_theme_params");
            if (b.has(Tumblr.webfonts, i.title_font)) {
                var h = b.result(Tumblr.webfonts, i.title_font);
                var f = "webfont_" + h.path;
                if (h.path&&!c("head #" + f).length) {
                    var g = this.assets_host + "/fonts/" + h.path + "/stylesheet.css";
                    g += (b.has(h, "_v")) ? ("?v=" + h._v) : "";
                    c("<link>", {
                        id: f,
                        rel: "stylesheet",
                        type: "text/css",
                        href: g
                    }).appendTo(c("head"))
                }
            }
        },
        __log_recommendation_dismissal: function() {
            c.ajax({
                method: "POST",
                url: "/svc/search/log_dismissal",
                data: {
                    tumblelog_name: this.model.get("name")
                },
                with_form_key: true
            })
        },
        initialize: function(f) {
            this.options = b.extend({}, this.defaults, f);
            this.hide_posts_on_unfollow = this.options.hide_posts_on_unfollow;
            this.current_data = this.options.current_data;
            this.on_render = this.options.on_render;
            this.is_rendered = false;
            this.assets_host = Tumblr.assets_host || "";
            this.template = b.template(c("#tumblelog_header_template").html());
            this.$description = null;
            this.$description_inner = null;
            this.listenTo(this.model, "add:global_theme_params", this.render);
            this.listenTo(this.model, "change:global_theme_params", this.render);
            this.listenTo(this.model, "change:following", this._render_follow_button);
            if (!b.isEmpty(this.current_data)) {
                var g = b.extend({}, this.current_data, this.model.toJSON());
                this.model.set(g, {
                    silent: true
                })
            }
        },
        render: function() {
            var g = this.model.toJSON();
            g.following || (g.following = false);
            if (this.is_rendered ||!g.global_theme_params) {
                return this
            }
            var h = b.result(Tumblr.webfonts, g.global_theme_params.title_font);
            var f = Tumblr.ColorUtilities.hex_to_rgb(g.global_theme_params.title_color);
            this.$el.html(this.template(b.merge(g, {
                show_navigation: true,
                show_share_controls: false,
                show_user_controls: true,
                show_follow_button: true,
                show_dismiss_controls: false,
                title_font_family: false,
                title_font_family: (h) ? h.family: false,
                title_color_rgb: String(b.values(f).join(","))
            }, this.options.template_data)));
            this.$description = this.$(".description");
            this.$description_inner = this.$(".description .description_inner");
            this._render_font_styles();
            this._render_inline_styles();
            if (this.options.include_info_popover) {
                this.info_popover = new Tumblr.TumblelogPopover.PopticaInfoPopover({
                    el: this.$el,
                    auto_show: false,
                    trigger: this.$el.find(".info_popover_button"),
                    recipient: this.model.get("name"),
                    asks: this.model.get("asks"),
                    anonymous_asks: this.model.get("anonymous_asks"),
                    url: this.model.get("url"),
                    skip_glass: true,
                    model: this.model
                })
            }
            this.is_rendered = true;
            this.on_render();
            if (this.$description.length) {
                b.delay(b.bind(this.truncate_description, this), 100);
                if (this.options.strip_description_line_breaks) {
                    this.strip_description_line_breaks()
                }
            }
            return this
        },
        strip_description_line_breaks: function() {
            this.$description_inner.find("br").remove();
            var f = this.$description_inner.html();
            var g = f.replace(/[\n\r]/g, " ");
            this.$description_inner.html(g)
        },
        destroy: function() {
            this.$el.fadeOut(500, b.bind(function() {
                this.unbind();
                if (this.$el.parent().hasClass("post_container")) {
                    this.$el.parent().remove()
                }
                this.__log_recommendation_dismissal();
                Events.trigger("DOMEventor:updateRect");
                Events.trigger("posts:destroyed", this.$el);
                this.remove()
            }, this))
        },
        truncate_description: function() {
            var i = this.$description_inner.get(0);
            if (i.scrollHeight <= i.clientHeight) {
                return 
            }
            var h = this.model.get("global_theme_params");
            var f = h.background_color;
            var g = Tumblr.ColorUtilities.hex_to_rgb(f);
            this.$description.append(this.description_gradient_template({
                background_color: String(b.values(g).join(","))
            }))
        },
        description_gradient_template: b.template('            <div class="description_gradient" style="                background: -moz-linear-gradient(top,  rgba(<%= background_color %>,0) 0%, rgba(<%= background_color %>,0.75) 50%, rgba(<%= background_color %>,1) 100%);                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(<%= background_color %>,0)), color-stop(50%,rgba(<%= background_color %>,0.75)), color-stop(100%,rgba(<%= background_color %>,1)));                background: -webkit-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                background: -o-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                background: -ms-linear-gradient(top,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);                background: linear-gradient(to bottom,  rgba(<%= background_color %>,0) 0%,rgba(<%= background_color %>,0.75) 50%,rgba(<%= background_color %>,1) 100%);            "></div>        ')
    });
    a.HeaderCompact = d
})(jQuery, _, Backbone, Tumblr.IndashBlog);
/*! scripts/indash_blog/indash_blog_header_compact.js */

/*! scripts/tumblelog_popover/views/tumblelog_popover.js */
(function(c, b, e, a) {
    var d = e.View.extend({
        popover_recommendations: a.Flags.bool("popover_recommendations"),
        el: "body",
        initialize: function(g) {
            if (a.Flags.bool("indash_blogs") === false) {
                return 
            }
            this.options = g || {};
            this.popover_template = c.trim(this.options.template || c("#tumblelog_popover_template").html());
            this.cache_timeout = this.options.cache_timeout || 3600000;
            this.mention_hostname = this.options.mention_hostname || "tmblr.co";
            this.hide_posts_on_unfollow = this.options.hide_posts_on_unfollow || false;
            this.$popover = null;
            this.popover = null;
            this.subviews = {};
            this.current_target = null;
            this.current_data = {};
            this.current_tumblelog = "";
            this.current_post = {};
            this.current_mouse_x = 0;
            this.model = {};
            this.hide_timeout = null;
            this.queued_event = null;
            this.hover_bounds = {};
            this.target_bounds = {};
            this.is_open = false;
            this.is_user_mention = false;
            this.is_mobile=!!("ontouchstart" in document.documentElement);
            this.is_poptica = true;
            this.is_menu_open = false;
            this.session_storage_key = (this.is_poptica) ? "optica_header" : "tumblelog_popover";
            this.listenTo(a.Events, "TumblelogPopover:follow", this.on_follow);
            this.listenTo(a.Events, "TumblelogPopover:follow_hover", this.on_follow_hover);
            this.listenTo(a.Events, "TumblelogPopover:unfollow", this.on_unfollow);
            this.listenTo(a.Events, "TumblelogPopover:inserted_posts", this.set_hover_bounds);
            this.listenTo(a.Events, "TumblelogPopover:track_engagement", this.track_engagement);
            this.listenTo(a.Events, "TumblelogPopover:toggle_navigation_menu", this.on_toggle_navigation_menu);
            this.listenTo(a.Events, "TumblelogPopover:navigation_menu_item_clicked", this.on_navigation_menu_item_clicked);
            this.listenTo(a.Events, "peepr:open", this.on_peepr_open);
            this.listenTo(a.Events, "Dashboard:hide_posts_on_unfollow", this.set_hide_posts_on_unfollow);
            a.Events.trigger("Dashboard:should_hide_posts_on_unfollow");
            var h = ['a.post_avatar_link:not(".animating")', 'a.post_sub_avatar:not(".animating")', '.post_info_link:not(".reblog_follow_button")', ".asker .name", ".post .avatar a", '.post_content .post_content_inner a[href*=".tumblr.com"]', ".follower .avatar", ".follower .name a", ".crushes .crush", ".notification .username", ".notification .avatar_frame", ".notification .preview_frame", ".ui_tops .tops_fans .ui_jumbo_avatar", ".ui_avatar a", ".user_list .follow_list_item_blog", ".post .tumblr_blog", "a.radar_avatar", "#dashboard_controls_open_blog #open_blog_link", ".members_list .member_avatar", ".members_list .member_name", ".posts_view_masonry a.tumblelog_info", ];
            var f = c(h.join(","));
            if (this.is_mobile) {
                var j = f.find("a[data-tumblelog-popover]");
                j.addClass("no_pop");
                j.on("touchend", b.bind(this.on_touch_open, this))
            } else {
                this.$el.hoverIntent({
                    selector: h.join(","), over: b.bind(this.on_mouseover, this), out: c.noop
                })
            }
            if (window.sessionStorage) {
                try {
                    this.sync_storage()
                } catch (i) {}
            }
        }, sync_storage: function() {
            if (!a.Utils ||!a.Utils.popover) {
                return 
            }
            a.Utils.popover.get_session_storage(this.session_storage_key, this.cache_timeout);
            c(window).on("beforeunload", b.bind(function() {
                a.Utils.popover.sync_session_storage(this.session_storage_key)
            }, this))
        }, update_current_data: function() {
            this.current_data = this.model.toJSON()
        }, show: function() {
            var h, i = true, f = c(this.current_target), g = (a.Utils.popover.cache) ? a.Utils.popover.cache[this.current_tumblelog] : null;
            if (g && g.data) {
                h = b.isObject(g.data) ? g.data : JSON.parse(g.data);
                if (b.size(h) > 1) {
                    this.current_data = h
                }
            }
            this.$popover = c(b.template(this.popover_template, {
                is_poptica: this.is_poptica || false,
                context_path: this.context_path
            }));
            this.$popover.appendTo(this.$el).hide();
            this.popover = new a.Popover({
                button: f,
                popover: this.$popover,
                skip_glass: true
            });
            if (!b.isEmpty(this.current_data)) {
                this.popover.show();
                i = false
            }
            if (this.is_poptica) {
                this.subviews.poptica_header = new a.TumblelogPopover.PopticaHeader({
                    model: this.model,
                    popover: this.$popover,
                    current_data: this.current_data,
                    tumblelog: this.current_tumblelog,
                    hide_posts_on_unfollow: this.hide_posts_on_unfollow,
                    on_render: b.bind(this.position, this)
                });
                this.$popover.find(".popover_inner").prepend(this.subviews.poptica_header.render().el);
                if (f.hasClass("post_avatar_link") || f.hasClass("post_sub_avatar")) {
                    this.$popover.addClass("avatar_hover")
                }
            } else {
                this.subviews.tumblelog_info = new a.TumblelogPopover.Info({
                    model: this.model,
                    popover: this.$popover,
                    tumblelog: this.current_tumblelog,
                    post: this.current_post,
                    current_data: this.current_data,
                    on_close: b.bind(this.animate_out, this),
                    hide_posts_on_unfollow: this.hide_posts_on_unfollow,
                    is_user_mention: this.is_user_mention
                })
            }
            if (this.context_path) {
                this.$popover.find("[data-context-path]").each(b.partial(function(j) {
                    var k = c(this);
                    k.attr("data-context-path", j + "/" + k.attr("data-context-path"))
                }, this.context_path))
            }
            this.subviews.highlighted_posts = new a.TumblelogPopover.Posts({
                model: this.model,
                post: this.current_post,
                popover: this.$popover,
                parent: this.$popover.find(".popover_inner").first(),
                on_bottom: this.is_poptica
            });
            if (i === false&&!b.isEmpty(this.current_data)) {
                this.popover.show()
            }
            this.position();
            this.animate_in();
            this.is_open = true;
            this.bind_events();
            this.log_impression(g);
            a.Events.trigger("TumblelogPopover:show", this.current_target)
        },
        hide: function() {
            if (this.$popover) {
                this.$popover.remove();
                this.$popover = null;
                a.Events.trigger("TumblelogPopover:hide", this.current_target)
            }
            if (c(".tumblelog_popover").length) {
                c(".tumblelog_popover").remove()
            }
            if (this.popover) {
                this.popover.hide();
                this.popover = null
            }
            if (this.subviews.tumblelog_info) {
                this.subviews.tumblelog_info.close()
            }
            b.each(this.subviews, b.bind(function(g, h) {
                if (g) {
                    g.remove()
                }
                this.subviews[h] = null
            }, this));
            this.current_data = {};
            this.current_tumblelog = "";
            this.current_post = {};
            this.is_open = false;
            this.is_user_mention = false;
            try {
                this.stopListening(this.model)
            } catch (f) {}
            if (this.queued_event) {
                this.on_mouseover(this.queued_event);
                this.queued_event = null
            }
        },
        animate_in: function() {
            if (this.hide_timeout) {
                clearTimeout(this.hide_timeout);
                this.hide_timeout = null
            }
            if (this.$popover) {
                this.$popover.removeClass("is_closed").addClass("is_open")
            }
        },
        animate_out: function() {
            if (this.hide_timeout) {
                clearTimeout(this.hide_timeout);
                this.hide_timeout = null
            }
            if (this.$popover) {
                this.$popover.removeClass("is_open").addClass("is_closed")
            }
            try {
                this.stopListening(this.model)
            } catch (f) {}
            this.unbind_events();
            this.hide_timeout = setTimeout(b.bind(this.hide, this), 300)
        },
        position: function() {
            if (!this.$popover ||!this.current_target) {
                return 
            }
            this.$popover.show();
            var k = c(window);
            var l = c(this.current_target);
            var g = this.$popover.height();
            var p = {};
            p.top = k.scrollTop();
            p.left = k.scrollLeft();
            p.bottom = p.top + k.height();
            p.right = p.left + k.width();
            var h = l.offset().top - g;
            var i = l.offset().top + l.height();
            var n = l.offset().left + (l.width() * 0.5);
            l.css("white-space", "nowrap");
            n = (l.offset().top > top) ? this.current_mouse_x : n;
            l.css("white-space", "");
            this.$popover.removeClass("down up left right nipple_on_top nipple_on_bottom");
            if (this.is_poptica) {
                this.$popover.addClass("down nipple_on_top");
                this.$popover.css({
                    left: n,
                    top: i
                })
            } else {
                this.$popover.addClass("up nipple_on_bottom");
                this.$popover.css({
                    left: n,
                    top: h
                })
            }
            var o = a.Utils.popover.get_bounds(this.$popover);
            var j = 20;
            var f = 365;
            this.target_bounds = a.Utils.popover.get_bounds(l);
            var m = (this.is_poptica) ? (o.top + f): o.bottom;
            if (m > p.bottom - j) {
                this.$popover.css("top", h);
                this.$popover.removeClass("down nipple_on_top").addClass("up nipple_on_bottom");
                o = a.Utils.popover.get_bounds(this.$popover)
            }
            var q = (this.is_poptica) ? (o.bottom - f): o.top;
            if (q < p.top + j) {
                this.$popover.css("top", i);
                this.$popover.removeClass("up nipple_on_bottom").addClass("down nipple_on_top");
                o = a.Utils.popover.get_bounds(this.$popover)
            }
            if (this.is_poptica && o.left < p.left + j) {
                this.$popover.css("left", p.left + j);
                this.$popover.removeClass("left").addClass("right");
                o = a.Utils.popover.get_bounds(this.$popover)
            }
            if (o.right > p.right - j) {
                if (this.is_poptica) {
                    this.$popover.css("left", (p.right - j) - this.$popover.width())
                }
                this.$popover.removeClass("right").addClass("left");
                o = a.Utils.popover.get_bounds(this.$popover)
            }
            this.set_hover_bounds(o)
        },
        set_hover_bounds: function(f) {
            f || (f = a.Utils.popover.get_bounds(this.$popover));
            this.hover_bounds.left = Math.min(f.left, this.target_bounds.left);
            this.hover_bounds.top = Math.min(f.top, this.target_bounds.top);
            this.hover_bounds.right = Math.max(f.right, this.target_bounds.right);
            this.hover_bounds.bottom = Math.max(f.bottom, this.target_bounds.bottom)
        },
        bind_events: function() {
            if (this.is_mobile) {
                c(document).on("touchstart.tumblelog_popover", b.bind(this.on_touch_close, this))
            } else {
                c(document).on("mousemove.tumblelog_popover", b.throttle(b.bind(this.on_mousemove, this), 50))
            }
        },
        unbind_events: function() {
            c(document).off(".tumblelog_popover")
        },
        set_hide_posts_on_unfollow: function() {
            this.hide_posts_on_unfollow = true
        },
        on_mouseover: function(m) {
            var f, n, k, j, h = c(m.currentTarget), g = h.attr("href"), l=!!(h.attr("data-tumblelog-popover")), q = (h.text().replace(/\s+/g, " ").length > 1), p = h.hasClass("post_avatar_link");
            is_sub_avatar = h.hasClass("post_sub_avatar");
            this.current_mouse_x = m.clientX;
            var i = h.closest(".post").data("post-id") || h.closest(".radar").data("post-id") || "";
            this.current_post = a.Posts.get(i) || {};
            if (!l&&!q&&!p&&!is_sub_avatar) {
                return 
            }
            if (this.is_open) {
                if (this.current_target.href !== m.currentTarget.href) {
                    this.queued_event = m;
                    this.animate_out()
                }
                return 
            }
            this.context_path = c(m.target).closest("[data-context-path]").data("context-path");
            if (l) {
                this.current_data = c.parseJSON(h.attr("data-tumblelog-popover"));
                this.current_tumblelog = this.current_data.name.toString()
            } else {
                if (h[0].hostname && h[0].hostname === this.mention_hostname) {
                    f = (g.substr( - 1) === "/") ? g.substr(0, g.length - 1) : g;
                    n = f.split("/");
                    this.is_user_mention = true;
                    this.current_tumblelog = n[n.length - 1]
                } else {
                    if (q || p || is_sub_avatar) {
                        f = g.replace(/.*?:\/\//g, "");
                        n = f.split("/");
                        if (n.length > 1 && n[1].length && n[1] !== "post") {
                            return 
                        }
                        k = g.match(/([^\/\.]+\/\/)([^\/\.]+)(\..*)/i);
                        j = k && k[2];
                        if (j) {
                            this.current_tumblelog = j.toLowerCase()
                        }
                    }
                }
            }
            if (!b.isUndefined(this.current_tumblelog)) {
                this.current_target = m.currentTarget;
                var o = (this.is_user_mention) ? this.get_model_from_token(): this.get_model_from_name();
                o.then(b.bind(function(r) {
                    this.model = r;
                    this.listenTo(this.model, "change", this.update_current_data);
                    this.show()
                }, this))
            }
        },
        get_model_from_token: function() {
            return a.Prima.Models.Tumblelog.modelFromToken(this.current_tumblelog)
        },
        get_model_from_name: function() {
            var f = c.Deferred();
            var g = new a.Prima.Models.Tumblelog({
                name: this.current_tumblelog
            });
            f.resolve(g);
            return f.promise()
        },
        on_mousemove: function(h) {
            if (this.is_menu_open || (this.subviews.tumblelog_info && this.subviews.tumblelog_info.is_disabled) ||!this.hover_bounds || b.isEmpty(this.hover_bounds)) {
                return 
            }
            var i=!(this.hover_bounds.left <= h.pageX && h.pageX <= this.hover_bounds.right), g=!(this.hover_bounds.top <= h.pageY && h.pageY <= this.hover_bounds.bottom);
            var f = c(h.target).hasClass("icon_close");
            if (i || g || f) {
                this.animate_out()
            }
        },
        on_touch_open: function(f) {
            f.preventDefault();
            f.stopPropagation();
            (this.is_open) ? this.animate_out() : this.on_mouseover(f)
        },
        on_touch_close: function(f) {
            this.on_mousemove(f.originalEvent)
        },
        log_impression: function(f) {
            a.Events.trigger("Capture:push", "tumblelog_popover", "impressions", {
                post_type: "highlighted",
                cached: (f) ? true: false
            })
        },
        on_follow: function() {
            this.show_recommendations()
        },
        on_follow_hover: function(g) {
            if (!g) {
                return 
            }
            var f=!!(g.get("following"));
            if (this.popover_recommendations&&!f) {
                this.setup_recommendations(g.get("name"))
            }
        },
        on_unfollow: function() {
            this.animate_out()
        },
        on_peepr_open: function() {
            b.delay(b.bind(this.hide, this), 50)
        },
        setup_recommendations: function(f) {
            if (!this.subviews.recommended_blogs) {
                this.subviews.recommended_blogs = new a.TumblelogPopover.Recommendations({
                    popover: this.$popover,
                    followed_blog: f,
                    recommendations_needed: (this.is_poptica) ? 4: 3,
                    is_poptica: this.is_poptica
                })
            }
        },
        should_show_recommendations: function() {
            if ((b.isEmpty(this.current_post) ||!this.current_post.get("sponsored")) && this.subviews.recommended_blogs && this.subviews.recommended_blogs.has_recommendations&&!this.subviews.recommended_blogs.is_visible) {
                return true
            }
            return false
        },
        show_recommendations: function() {
            if (this.should_show_recommendations()) {
                this.subviews.recommended_blogs.render()
            }
        },
        on_navigation_menu_item_clicked: function() {
            this.animate_out()
        },
        on_toggle_navigation_menu: function(f) {
            this.is_menu_open = f || false;
            if (this.$popover && this.$popover.length) {
                this.$popover.toggleClass("nav_menu_open", this.is_menu_open)
            }
        },
        track_engagement: function(f) {
            if (a.Utils && a.Utils.popover) {
                a.Utils.popover.track_premium_engagement(f, this.current_post)
            }
        }
    });
    a.TumblelogPopover = d
})(jQuery, _, Backbone, Tumblr);
/*! scripts/tumblelog_popover/views/tumblelog_info.js */
(function(c, b, e, a) {
    var d = e.View.extend({
        className: "tumblelog_info",
        events: {
            "click .follow": "on_follow_click",
            "mouseenter .follow": "on_follow_hover",
            "click .unfollow": "on_follow_click",
            "click .tumblelog_menu_btn": "on_menu_click",
            "click .ask": "on_ask_click",
            "click .fan_mail": "on_fan_mail_click",
            "click .ignore": "on_ignore_click",
            "click .toggle_spam": "on_spam_click",
            "click .toggle_suspended": "on_suspended_click",
            "click .toggle_nsfw": "on_nsfw_click",
            "click a.avatar": "on_avatar_click",
            "click .name a": "on_blog_name_click",
            mouseenter: "on_mouseenter"
        },
        initialize: function(f) {
            this.options = f || {};
            this.template = b.template(this.options.template || c("#tumblelog_popover_info").html());
            this.$popover = this.options.popover || c();
            this.$parent = this.options.parent || this.$popover.find(".popover_inner");
            this.is_recommendation = this.options.is_recommendation === true;
            this.recommendation_data = this.options.recommendation_data || {};
            this.on_close = this.options.on_close || c.noop;
            this.on_menu_toggle = this.options.on_menu_toggle || c.noop;
            this.min_load_time = this.options.min_load_time || 500;
            this.current_data = this.options.current_data || {};
            this.hide_posts_on_unfollow = (this.options.hide_posts_on_unfollow !== false);
            this.is_user_mention = this.options.is_user_mention || false;
            this.post = this.options.post || {};
            this.is_mobile = b.has(document.documentElement, "ontouchstart");
            this.is_disabled = false;
            this.is_menu_open = false;
            this.xhr = null;
            this.model = this.options.model || new a.Prima.Models.Tumblelog({
                name: this.options.tumblelog
            });
            this.listenTo(this.model, "add", this.render);
            this.listenTo(this.model, "change", this.render);
            if (!b.isEmpty(this.current_data)) {
                var g = this.model.toJSON();
                b.extend(this.current_data, g);
                this.model.set(this.current_data, {
                    silent: true
                })
            }
            this.update_cache();
            this.$el.addClass(this.model.get("name"));
            this.$parent.append(this.$el);
            this.render()
        },
        render: function() {
            var f = b.extend(this.model.toJSON(), {
                show_menu: !(this.is_recommendation)
            });
            this.$el.html(this.template(f));
            this.update_cache();
            return this
        },
        close: function() {
            this.on_close();
            if (this.xhr) {
                this.xhr.abort();
                this.xhr = null
            }
            c(document).off(".tumblelog_popover_menu");
            this.remove()
        },
        update_cache: function() {
            var f = this.model.toJSON(), g = this.model.get("name");
            a.Utils.popover.cache[g] = {
                timestamp: new Date().getTime(),
                data: JSON.stringify(f)
            }
        },
        open_dialog: function(f, g) {
            g = g || c.noop;
            this.is_disabled = true;
            f.fail(b.bind(function() {
                this.is_disabled = this.is_menu_open
            }, this));
            f.done(b.bind(function() {
                this.is_disabled = this.is_menu_open;
                g()
            }, this))
        },
        hide_posts: function() {
            a.Posts.whereBy({
                tumblelog: this.model.get("name"),
                sponsored: false
            }).invoke("dismiss");
            this.close()
        },
        show_menu: function() {
            this.is_menu_open = true;
            this.is_disabled = true;
            this.$popover.addClass("admin_menu_open")
        },
        hide_menu: function() {
            this.is_menu_open = false;
            this.is_disabled = false;
            this.$popover.removeClass("admin_menu_open")
        },
        on_follow_click: function(h) {
            h.preventDefault();
            h.stopPropagation();
            if (c(h.currentTarget).hasClass("unfollow")) {
                if (this.is_recommendation) {
                    this.model.save_following({
                        following: false
                    }, {
                        source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS",
                        from_popover: true,
                        placement_id: ((this.post instanceof a.Post || this.post instanceof a.Prima.Models.Post) && this.post.get("placement_id")) || ""
                    })
                } else {
                    var i = a.TumblelogActions.confirm_unfollow({
                        tumblelog: this.model.get("name"),
                        avatar_url: this.model.get("avatar_url") || ""
                    });
                    this.open_dialog(i, b.bind(function() {
                        this.model.save_following({
                            following: false
                        }, {
                            source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER",
                            from_popover: true,
                            placement_id: ((this.post instanceof a.Post || this.post instanceof a.Prima.Models.Post) && this.post.get("placement_id")) || ""
                        });
                        if (this.hide_posts_on_unfollow) {
                            this.hide_posts()
                        }
                        a.Utils.popover.track_premium_engagement("popover_unfollow", this.post)
                    }, this))
                }
            } else {
                var g = this.is_recommendation ? "FOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS": "FOLLOW_SOURCE_TUMBLELOG_POPOVER";
                var f;
                var j;
                if (this.post instanceof a.Post || this.post instanceof a.Prima.Models.Post) {
                    j = this.post.get("placement_id");
                    f = this.post.get("pt")
                }
                this.model.save_following({
                    following: true
                }, {
                    source: g,
                    from_popover: true,
                    placement_id: j,
                    pt: f,
                });
                a.Utils.popover.track_premium_engagement("popover_follow", this.post);
                a.Events.trigger("TumblelogPopover:follow", this.model.get("name"))
            }
        },
        on_menu_click: function(f) {
            f.preventDefault();
            if (!this.is_menu_open) {
                this.show_menu();
                c(document).on("mouseup.tumblelog_popover_menu", b.bind(this.on_menu_mouseup, this))
            }
            a.Utils.popover.track_premium_engagement("popover_menu", this.post)
        },
        on_menu_mouseup: function(h) {
            var f = a.Utils.popover.get_bounds(this.$popover.find(".tumblelog_menu_popover"));
            var i=!(f.left <= h.pageX && h.pageX <= f.right), g=!(f.top <= h.pageY && h.pageY <= f.bottom);
            if (i || g) {
                c(document).off(".tumblelog_popover_menu");
                this.hide_menu()
            }
        },
        on_ask_click: function(f) {
            if (b.isObject(a.DashboardAsk)) {
                f.preventDefault();
                a.DashboardAsk.open_ask(c(f.currentTarget));
                this.close()
            }
        },
        on_fan_mail_click: function(g) {
            if (b.isObject(a.FanMail)) {
                var f = {
                    href: a.FanMail.make_url_from_tumblelog(this.model.get("name"))
                };
                g.preventDefault();
                a.FanMail.show(f);
                this.close()
            }
        },
        on_ignore_click: function(f) {
            f.preventDefault();
            var g = a.TumblelogActions.confirm_ignore({
                tumblelog: this.model.get("name"),
                avatar_url: this.model.get("avatar_url") || ""
            });
            this.open_dialog(g, b.bind(function() {
                a.ignore({
                    tumblelog: this.model.get("name")
                }, {
                    success: b.bind(function() {
                        this.model.set("ignoring", true);
                        this.hide_posts()
                    }, this)
                })
            }, this))
        },
        on_spam_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_spam();
            g.success(b.bind(function(h) {
                this.model.set("spam", (h.spammer) ? true : false)
            }, this))
        },
        on_suspended_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_suspended();
            g.success(b.bind(function(h) {
                this.model.set("suspended", (h.suspended) ? true : false)
            }, this))
        },
        on_nsfw_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_nsfw();
            g.success(b.bind(function(h) {
                this.model.set("nsfw", h.nsfw)
            }, this))
        },
        on_avatar_click: function(f) {
            a.Utils.popover.capture_tumblelog_click(f);
            a.Utils.popover.track_premium_engagement("popover_avatar", this.post)
        },
        on_blog_name_click: function(f) {
            a.Utils.popover.capture_tumblelog_click(f);
            a.Utils.popover.track_premium_engagement("popover_blog", this.post)
        },
        on_mouseenter: function(f) {
            a.Events.trigger("TumblelogPopover:mouseenter_tumblelog_info", this.model)
        },
        on_follow_hover: function(f) {
            if (!this.is_recommendation) {
                a.Events.trigger("TumblelogPopover:follow_hover", this.model)
            }
        }
    });
    a.TumblelogPopover.Info = d
})(jQuery, _, Backbone, Tumblr);
/*! scripts/tumblelog_popover/views/recommendations.js */
(function(c, b, e, a) {
    var d = e.View.extend({
        className: "popover_inner recommended_blogs",
        initialize: function(f) {
            this.options = f || {};
            this.is_poptica = this.options.is_poptica || false;
            this.followed_blog = this.options.followed_blog || "";
            this.posts_insert_delay = this.options.posts_insert_delay || 50;
            this.posts_update_delay = this.options.posts_update_delay || 300;
            this.recommendations_needed = this.options.recommendations_needed || 3;
            this.$popover = this.options.popover || c();
            this.$popover_wrapper = this.$popover.find(".popover_content_wrapper");
            this.template = b.template(this.options.template || c("#recommended_blogs_template").html());
            this.posts_template = b.template(this.options.posts_template || c("#highlighted_posts_template").html());
            this.is_visible = false;
            this.showing_posts = false;
            this.has_recommendations = false;
            this.subviews = {
                blogs: [],
                posts: null
            };
            this.viewed = [];
            this.original_popover_height = 0;
            var g = e.Collection.extend({
                model: a.Prima.Models.Tumblelog,
                url: "/svc/related_blogs",
                parse: b.bind(function(h) {
                    if (!b.isEmpty(h)) {
                        this.has_recommendations = true
                    }
                    return h
                }, this)
            });
            this.blogs = new g();
            this.fetch_tumblelog_data()
        },
        fetch_tumblelog_data: function() {
            this.blogs.fetch({
                data: {
                    tumblelog: this.followed_blog,
                    minimum: this.recommendations_needed
                },
                merge: true,
                with_form_key: true,
                remove: false,
            })
        },
        render: function() {
            if (this.is_poptica) {
                this.original_popover_height = this.$popover.height();
                this.$popover.css("height", this.original_popover_height)
            }
            if (!this.is_visible) {
                this.$popover_wrapper.append(this.$el);
                this.is_visible = true
            }
            var g = {
                followed_blog: this.followed_blog
            };
            this.$popover.find(".recommended_blogs").html(this.template(g));
            var f = 1;
            this.blogs.forEach(function(i) {
                var h = new a.TumblelogPopover.Info({
                    popover: this.$popover,
                    parent: this.$el,
                    current_data: i.toJSON(),
                    model: i,
                    recommendation_data: {
                        rank: f,
                        recommendation_ct: this.blogs.length,
                        position: {}
                    },
                    is_recommendation: true,
                });
                h.recommendation_data.position = h.$el.offset();
                f += 1;
                this.subviews.blogs.push(h)
            }, this);
            this.$popover.addClass("showing_recommendations");
            this.after_render();
            return this
        },
        log_impressions: function() {
            var f = function() {
                return window.location.pathname.split("/")[1]
            };
            var g = 1;
            b.forEach(this.subviews.blogs, function(i) {
                var k = i.model;
                var h = b.find(this.subviews.blogs, {
                    model: k
                });
                if (b.isEmpty(h) || (b.indexOf(this.viewed, k)!==-1)) {
                    return 
                }
                this.viewed.push(k);
                var j = (a.getRealNow || b.now)();
                a.Events.trigger("Capture:push", "recommended_blog_impressions", "impressions", {
                    tumblelog_name: k.get("name"),
                    algorithm_id: "reblog_related",
                    page: f(),
                    ts: Math.floor(j / 1000),
                    position: h.$el.offset(),
                    format: "RECOMMEND_FORMAT_TUMBLELOG_POPOVER",
                    rank: g
                });
                g += 1;
                this.viewed.push(k)
            }, this)
        },
        insert_posts: function(f) {
            if (this.subviews.posts) {
                return 
            }
            this.subviews.posts = new a.TumblelogPopover.Posts({
                popover: this.$popover,
                parent: this.$el,
                model: f,
                on_bottom: (this.is_poptica || this.$popover.hasClass("nipple_on_top"))
            });
            this.$popover.one("transitionend webkitTransitionEnd MSTransitionEnd", this._after_insert_posts);
            setTimeout(this._after_insert_posts, 600);
            var g = this;
            setTimeout(function() {
                g.$popover.addClass("slide_up")
            }, this.posts_insert_delay);
            this.listenTo(a.Events, "TumblelogPopover:mouseenter_tumblelog_info", this.update_posts);
            this.listenTo(a.Events, "TumblelogPopover:mouseenter_posts", this.cancel_update_posts)
        },
        _after_insert_posts: function() {
            a.Events.trigger("TumblelogPopover:inserted_posts")
        },
        update_posts: function(f) {
            if (!this.subviews.posts) {
                this.insert_posts(f)
            }
            this.cancel_update_posts();
            if (this.subviews.posts.model === f) {
                return 
            }
            this.subviews.posts.$el.removeClass("blink");
            var g = this;
            this.queued_post_update = setTimeout(function() {
                g.subviews.posts.$el.addClass("blink");
                g.subviews.posts.update_posts(f)
            }, this.posts_update_delay)
        },
        cancel_update_posts: function() {
            if (this.queued_post_update) {
                clearTimeout(this.queued_post_update)
            }
        },
        after_render: function() {
            var g = c.Deferred();
            g.then(b.bind(this._after_animation, this));
            this.$popover.one("animationend webkitAnimationEnd MSAnimationEnd", g.resolve);
            setTimeout(g.resolve, 600);
            this.log_impressions();
            if (this.is_poptica) {
                this.$popover.css("height", "");
                this.$popover_wrapper.css("background-color", "#FFF");
                var h = {
                    height: this.$popover.height() - this.original_popover_height
                };
                if (this.$popover.hasClass("up")) {
                    var f = parseInt(this.$popover.css("margin-top"));
                    h["margin-top"] = this.original_popover_height - h.height + f
                }
                this.$popover.css(h)
            }
        },
        _after_animation: function() {
            this.$popover.find(".popover_inner:not(.recommended_blogs)").remove();
            this.$popover.removeClass("showing_recommendations");
            this.insert_posts(b.last(this.blogs.models))
        }
    });
    a.TumblelogPopover.Recommendations = d
})(jQuery, _, Backbone, Tumblr);
/*! scripts/tumblelog_popover/views/poptica_info_popover.js */
var TumblrData = TumblrData || {};
Tumblr.TumblelogPopover || (Tumblr.TumblelogPopover = {});
(function(d, c, e, b) {
    var a = Tumblr.Popover.extend({
        template: c.template(d("#tumblelog_header_info_popover_template").html()),
        defaults: {
            auto_show: false,
            skip_glass: false,
            template_data: {},
            trigger: d(),
            standalone: false
        },
        events: {
            "click .ask_menu_item": "__ask_menu_item_clicked",
            "click .fan_mail_menu_item": "__fan_mail_menu_item_clicked",
            "click .archive_menu_item": "__archive_menu_item_clicked",
            "click .toggle_spam": "__toggle_spam_click",
            "click .toggle_suspended": "__toggle_suspended_click",
            "click .toggle_nsfw": "__toggle_nsfw_click",
            "click .likes": "__likes_menu_item_clicked",
            "click .ignore": "__ignore_click",
            "click .panel_menu_item": "__panel_menu_item_clicked"
        },
        __panel_menu_item_clicked: function(f) {
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __ignore_click: function(f) {
            f.preventDefault();
            if (!Tumblr.TumblelogActions) {
                return 
            }
            var g = Tumblr.TumblelogActions.confirm_ignore({
                tumblelog: this.model.get("name"),
                avatar_url: this.model.get("avatar_url") || ""
            });
            this._open_dialog(g, c.bind(function() {
                Tumblr.ignore({
                    tumblelog: this.model.get("name")
                }, {
                    success: c.bind(function() {
                        this.model.set("ignoring", true);
                        this._hide_posts()
                    }, this)
                })
            }, this));
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __ask_menu_item_clicked: function(f) {
            if (c.isObject(Tumblr.DashboardAskView)) {
                f.preventDefault();
                new Tumblr.DashboardAskView({
                    model: new Tumblr.DashboardAskModel(),
                    recipient: this.model.get("name"),
                    allow_anonymous: this.model.get("anonymous_asks")
                }).show_form();
                Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
                this.hide()
            }
        },
        __fan_mail_menu_item_clicked: function(f) {
            if (c.isObject(Tumblr.FanMail)) {
                f.preventDefault();
                Tumblr.FanMail.show(null, {
                    href: Tumblr.FanMail.make_url_from_tumblelog(this.model.get("name"))
                });
                Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
                this.hide()
            }
        },
        __archive_menu_item_clicked: function(f) {
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __likes_menu_item_clicked: function(f) {
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __toggle_spam_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_spam();
            g.success(c.bind(function(h) {
                this.model.set("spam", (h.spammer) ? true : false)
            }, this));
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __toggle_suspended_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_suspended();
            g.success(c.bind(function(h) {
                this.model.set("suspended", (h.suspended) ? true : false)
            }, this));
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __toggle_nsfw_click: function(f) {
            f.preventDefault();
            var g = this.model.toggle_nsfw();
            g.success(c.bind(function(h) {
                this.model.set("nsfw", h.nsfw)
            }, this));
            Tumblr.Events.trigger("TumblelogPopover:navigation_menu_item_clicked");
            this.hide()
        },
        __model_change: function() {
            var f = this.model.toJSON();
            this.$(".toggle_spam").toggleClass("is_flagged", !!(f.spam));
            this.$(".toggle_nsfw").toggleClass("is_flagged", !!(f.nsfw))
        },
        __document_click: function(h) {
            if (!Tumblr.Utils ||!Tumblr.Utils.popover) {
                return 
            }
            var f = Tumblr.Utils.popover.get_bounds(this.$popover);
            var i=!(f.left <= h.pageX && h.pageX <= f.right), g=!(f.top <= h.pageY && h.pageY <= f.bottom);
            if (i || g) {
                this.hide()
            }
        },
        _hide_posts: function() {
            Tumblr.Posts.whereBy({
                tumblelog: this.model.get("name"),
                sponsored: false
            }).invoke("dismiss")
        },
        _open_dialog: function(f, g) {
            g = g || d.noop;
            this.is_disabled = true;
            f.fail(c.bind(function() {
                this.is_disabled = this.is_menu_open
            }, this));
            f.done(c.bind(function() {
                this.is_disabled = this.is_menu_open;
                g()
            }, this))
        },
        initialize: function(f) {
            this.options = c.extend({}, this.defaults, f);
            this.$trigger = f.trigger;
            if (!this.model) {
                return 
            }
            this.$doc = d(document);
            this.$popover = d(this.template(this.model.toJSON())).appendTo(this.$el).hide();
            this.listenTo(this.model, "change", this.__model_change);
            Tumblr.Popover.prototype.initialize.call(this, c.extend(this.options, {
                popover: this.$popover
            }))
        },
        show: function() {
            Tumblr.Events.trigger("TumblelogPopover:toggle_navigation_menu", true);
            if (!this.options.standalone) {
                this.$doc.on("click.poptica_info_popover", c.bind(this.__document_click, this))
            }
            Tumblr.Popover.prototype.show.call(this)
        },
        hide: function() {
            Tumblr.Events.trigger("TumblelogPopover:toggle_navigation_menu", false);
            this.$doc.off(".poptica_info_popover");
            return Tumblr.Popover.prototype.hide.call(this)
        }
    });
    b.PopticaInfoPopover = a
})(jQuery, _, Backbone, Tumblr.TumblelogPopover);
/*! scripts/tumblelog_popover/views/poptica_header.js */
var TumblrData = TumblrData || {};
Tumblr.IndashBlog || (Tumblr.IndashBlog = {});
Tumblr.TumblelogPopover || (Tumblr.TumblelogPopover = {});
(function(c, b, e, a) {
    var d = Tumblr.IndashBlog.HeaderCompact.extend({
        className: "poptica_header",
        defaults: {
            current_data: {},
            on_render: c.noop,
            popover: null,
            hide_posts_on_unfollow: false,
            is_recommendation: false,
            template_data: {
                popover: true
            },
            include_info_popover: true
        },
        events: function() {
            return b.extend({}, Tumblr.IndashBlog.HeaderCompact.prototype.events, {
                "click .avatar a": "__on_avatar_click",
                "click a.blog_name": "__on_blog_name_click",
                "mouseenter .follow": "__on_follow_hover",
                mouseenter: "__on_mouseenter"
            })
        },
        __on_follow_click: function(h) {
            h.preventDefault();
            h.stopPropagation();
            if (c(h.currentTarget).hasClass("unfollow")) {
                if (this.is_recommendation) {
                    this.model.save_following({
                        following: false
                    }, {
                        source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS",
                        from_popover: true,
                        placement_id: ((this.post instanceof Tumblr.Post || this.post instanceof Tumblr.Prima.Models.Post) && this.post.get("placement_id")) || ""
                    })
                } else {
                    var j = Tumblr.TumblelogActions.confirm_unfollow({
                        tumblelog: this.model.get("name"),
                        avatar_url: this.model.get("avatar_url") || ""
                    });
                    this._open_dialog(j, b.bind(function() {
                        this.model.save_following({
                            following: false
                        }, {
                            source: "UNFOLLOW_SOURCE_TUMBLELOG_POPOVER",
                            from_popover: true,
                            placement_id: ((this.post instanceof Tumblr.Post || this.post instanceof Tumblr.Prima.Models.Post) && this.post.get("placement_id")) || ""
                        });
                        if (this.hide_posts_on_unfollow) {
                            this._hide_posts()
                        }
                        Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_unfollow")
                    }, this));
                    Tumblr.Events.trigger("TumblelogPopover:unfollow")
                }
            } else {
                var g = this.is_recommendation ? "FOLLOW_SOURCE_TUMBLELOG_POPOVER_RECOMMENDATIONS": "FOLLOW_SOURCE_TUMBLELOG_POPOVER";
                var f = {
                    source: g,
                    from_popover: true,
                    placement_id: ((this.post instanceof Tumblr.Post || this.post instanceof Tumblr.Prima.Models.Post) && this.post.get("placement_id")) || ""
                };
                var i = c(h.target).closest("[data-context-path]").data("context-path");
                if (i) {
                    f.tlt = i
                }
                this.model.save_following({
                    following: true
                }, f);
                Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_follow");
                Tumblr.Events.trigger("TumblelogPopover:follow", this.model.get("name"))
            }
        },
        __info_popover_button_clicked: function(f) {
            Tumblr.IndashBlog.HeaderCompact.prototype.__info_popover_button_clicked.call(this, f);
            Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_menu")
        },
        __on_avatar_click: function(f) {
            Tumblr.Utils.popover.capture_tumblelog_click(f);
            Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_avatar")
        },
        __on_blog_name_click: function(f) {
            Tumblr.Utils.popover.capture_tumblelog_click(f);
            Tumblr.Events.trigger("TumblelogPopover:track_engagement", "popover_blog")
        },
        __on_mouseenter: function(f) {
            Tumblr.Events.trigger("TumblelogPopover:mouseenter_tumblelog_info", this.model)
        },
        __on_follow_hover: function(f) {
            if (!this.is_recommendation) {
                Tumblr.Events.trigger("TumblelogPopover:follow_hover", this.model)
            }
        },
        _update_cache: function() {
            if (Tumblr.Utils && Tumblr.Utils.popover) {
                Tumblr.Utils.popover.cache_tumblelog_data(this.model.get("name"), this.model.toJSON())
            }
        },
        initialize: function(f) {
            this.listenTo(this.model, "change", this._update_cache);
            Tumblr.IndashBlog.HeaderCompact.prototype.initialize.call(this, f);
            this.is_recommendation = this.options.is_recommendation
        }
    });
    a.PopticaHeader = d
})(jQuery, _, Backbone, Tumblr.TumblelogPopover);
/*! scripts/tumblelog_popover/views/posts.js */
(function(d, c, e, b) {
    var a = e.View.extend({
        className: "recent_posts",
        events: {
            "click a": "on_post_click",
            mouseenter: "on_mouseenter"
        },
        initialize: function(f) {
            f || (f = {});
            this.template = c.template(d("#highlighted_posts_template").html());
            this.$popover = f.popover || d();
            this.$parent = f.parent || d();
            this.min_load_time = f.min_load_time || 500;
            this.model = f.model || {};
            this.dashboard_post = f.post || {};
            if (!this.model) {
                return 
            }
            this.listenTo(this.model, "change:highlighted_posts", this.render);
            this.listenTo(this.model, "change:global_theme_params", this.render_inline_styles);
            this.render_loader();
            this.render_inline_styles();
            if (f.on_bottom) {
                this.$parent.append(this.$el)
            } else {
                this.$parent.prepend(this.$el)
            }
            this.posts = this.model.get("highlighted_posts");
            if (!c.isUndefined(this.posts)) {
                this.render(true)
            } else {
                this.fetch_posts()
            }
        },
        fetch_posts: function() {
            this.model.fetch_popover_data({
                is_tumblelog_popover: true
            })
        },
        update_posts: function(f) {
            this.model = f;
            this.posts = this.model.get("highlighted_posts");
            if (!c.isUndefined(this.posts)) {
                this.render(true)
            } else {
                this.fetch_posts()
            }
        },
        render_loader: function() {
            var g = this.model.toJSON();
            var f = (b.Flags) ? b.Flags.bool("poptica_tumblelog_popovers"): false;
            this.$el.html(this.template({
                loader_color: (f && g.global_theme_params) ? g.global_theme_params.title_color: "#D9D9D9"
            }))
        },
        render_inline_styles: function() {
            var f = this.model.get("global_theme_params");
            if (f) {
                this.$el.css("background-color", f.background_color)
            }
        },
        render: function(h) {
            var i = this.posts || this.model.get("highlighted_posts");
            if (!c.isArray(i)) {
                return 
            }
            var g = i.join(""), f = 0;
            if (i.length < 2) {
                setTimeout(c.bind(function() {
                    this.$popover.addClass("is_empty");
                    this.$el.html("")
                }, this), this.min_load_time);
                return 
            }
            this.$el.addClass("has_" + i.length + "_posts");
            if (h === true) {
                this.$el.addClass("is_cached").html(g);
                return 
            }
            setTimeout(c.bind(function() {
                this.$el.addClass("is_loaded").html(g)
            }, this), this.min_load_time);
            return this
        },
        on_post_click: function(f) {
            b.Utils.popover.capture_tumblelog_click(f);
            b.Utils.popover.track_premium_engagement("popover_post", this.dashboard_post)
        },
        on_mouseenter: function(f) {
            b.Events.trigger("TumblelogPopover:mouseenter_posts")
        }
    });
    b.TumblelogPopover.Posts = a
})(jQuery, _, Backbone, Tumblr);
/*! scripts/tumblr/utils/popover.js */
Tumblr.Utils || (Tumblr.Utils = {});
(function(c, b) {
    var a = {
        cache: {},
        cache_tumblelog_data: function(d, e) {
            if (!d ||!_.isString(d) ||!_.isObject(e)) {
                return 
            }
            if (!e.customizable) {
                this.cache[d] = {
                    timestamp: new Date().getTime(),
                    data: JSON.stringify(e)
                }
            }
        },
        get_session_storage: function(h, g) {
            if (!window.sessionStorage ||!window.sessionStorage.length) {
                return 
            }
            h = (h || "optica_header");
            g = (g || 3600000);
            var e = sessionStorage.getItem(h);
            if (e) {
                var f = JSON.parse(e);
                var d = new Date().getTime();
                for (key in f) {
                    if (d - f[key].timestamp > g ||!_.has(f[key], "data") || f[key].data.customizable) {
                        delete f[key]
                    }
                }
                this.cache = _.extend({}, this.cache, f);
                return f
            }
        },
        sync_session_storage: function(i) {
            if (_.size(this.cache) < 1 ||!window.sessionStorage) {
                return 
            }
            i = (i || "optica_header");
            var h, e, g = _.size(this.cache), d = 50;
            if (g > d) {
                h = 0;
                for (e in this.cache) {
                    if (this.cache[e]) {
                        h++;
                        if (h <= g - d) {
                            delete this.cache[e]
                        }
                    }
                }
            }
            try {
                sessionStorage.setItem(i, JSON.stringify(this.cache))
            } catch (f) {}
        },
        clear_session_storage: function(d) {
            if (!window.sessionStorage ||!window.sessionStorage.length) {
                return 
            }
            d = (d || "optica_header");
            if (sessionStorage.getItem(d)) {
                sessionStorage.removeItem(d)
            }
        },
        get_bounds: function(e) {
            var d = c(e), f = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
            if (d.length) {
                f = d.offset();
                f.right = f.left + d.width();
                f.bottom = f.top + d.height()
            }
            return f
        },
        capture_tumblelog_click: function(d) {
            if (Tumblr.CaptureTumblelogClick) {
                Tumblr.CaptureTumblelogClick.track_click(d)
            }
        },
        track_premium_engagement: function(f, d) {
            if (d instanceof Tumblr.Post || d instanceof Tumblr.Prima.Models.Post) {
                if (Tumblr.CapturePremiumRadar && d === Tumblr.radar.postModel && (d.get("placement_id") || d.get("premium_tracked"))) {
                    Tumblr.CapturePremiumRadar.force_track_radar_controls(f)
                } else {
                    if (d.get("sponsored") || d.get("premium_tracked")) {
                        var e = _.find(Tumblr.postsView.postViews, {
                            model: d
                        });
                        if (!e) {
                            return 
                        }
                        e.capture_web_instream.force_track_sponsored_controls(f)
                    }
                }
            }
        }
    };
    b.popover = a
})(jQuery, Tumblr.Utils);
/*! scripts/color_utilities.js */
(function(c, b, a) {
    var d = {
        rgb_to_hex: function(h, f, e) {
            return "#" + ((1<<24) + (h<<16) + (f<<8) + e).toString(16).slice(1)
        },
        hex_to_rgb: function(f) {
            f = new String(f).replace(/[^0-9a-f]/gi, "");
            if (f.length < 6) {
                f = f[0] + f[0] + f[1] + f[1] + f[2] + f[2]
            }
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(f);
            return e ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        },
        rgb_to_hsv: function(l, k, f) {
            var j = Math.min(Math.min(l, k), f);
            var e = Math.max(Math.max(l, k), f);
            var h = e - j;
            var i = {
                h: 6,
                s: e ? ((e - j) / e): 0,
                v: (e / 255)
            };
            if (!h) {
                i.h = 0
            } else {
                if (e === l) {
                    i.h += (k - f) / h
                } else {
                    if (e === k) {
                        i.h += 2 + (f - l) / h
                    } else {
                        i.h += 4 + (l - k) / h
                    }
                }
            }
            i.h = (60 * i.h)%360;
            return i
        },
        hsv_to_rgb: function(j, q, p) {
            var e, k, n;
            if (!q) {
                e = k = n = p
            } else {
                e = k = n = 0;
                var i = ((j + 360)%360) / 60;
                var l = p * q;
                var f = p - l;
                var o = l * (1 - Math.abs(i%2 - 1));
                if (i < 1) {
                    e = l;
                    k = o
                } else {
                    if (i < 2) {
                        e = o;
                        k = l
                    } else {
                        if (i < 3) {
                            k = l;
                            n = o
                        } else {
                            if (i < 4) {
                                k = o;
                                n = l
                            } else {
                                if (i < 5) {
                                    n = l;
                                    e = o
                                } else {
                                    n = o;
                                    e = l
                                }
                            }
                        }
                    }
                }
                e += f;
                k += f;
                n += f
            }
            return {
                r: Math.round(255 * e),
                g: Math.round(255 * k),
                b: Math.round(255 * n)
            }
        },
        hex_to_hsv: function(g) {
            g = new String(g).replace(/[^0-9a-f]/gi, "");
            if (g.length < 6) {
                g = g[0] + g[0] + g[1] + g[1] + g[2] + g[2]
            }
            var f = a.ColorUtilities.hex_to_rgb(g);
            var e = a.ColorUtilities.rgb_to_hsv.apply(a.ColorUtilities, b.toArray(f));
            return e
        },
        hsv_to_hex: function(i, g, e) {
            var f = a.ColorUtilities.hsv_to_rgb(i, g, e);
            var j = a.ColorUtilities.rgb_to_hex.apply(a.ColorUtilities, b.toArray(f));
            return j
        },
        hex_brightness: function(i, q) {
            i = String(i).replace(/[^0-9a-f]/gi, "");
            if (i.length < 6) {
                i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]
            }
            q = q || 0;
            var o = parseInt(i, 16), j = (q < 0) ? 0: 255, f = (q < 0)?-(q) : q, e = o>>16, m = o>>8 & 255, s = o & 255, n, k, h;
            n = Math.round((j - e) * f) + e;
            k = Math.round((j - m) * f) + m;
            h = Math.round((j - s) * f) + s;
            return "#" + (16777216 + n * 65536 + k * 256 + h).toString(16).slice(1)
        },
        hsv_to_readable: function(e) {
            if (typeof e === "string") {
                e = a.ColorUtilities.hex_to_hsv(e)
            }
            return (e.s < 0.2 && e.v > 0.8) ? "#444" : "#FFF"
        },
        compare_colors: function(k, i, o) {
            var g = {
                upper_bound: 0.8,
                lower_bound: 0.2,
                diff_bound: 0.1,
                hue_bound: 15
            };
            b.extend(g, o);
            var j = g.upper_bound;
            var n = g.lower_bound;
            var m = g.diff_bound;
            var e = g.hue_bound;
            var h = Math.abs(k.h - i.h);
            var f = Math.abs(k.s - i.s);
            var l = Math.abs(k.v - i.v);
            if (h <= m && f <= m && l <= m) {
                return true
            } else {
                if (f <= m && l <= m) {
                    if (f >= j || f <= n && l >= j || l <= n && h <= e) {
                        return true
                    }
                }
            }
            return false
        }
    };
    a.ColorUtilities = d
})(jQuery, _, Tumblr);
/*! scripts/tumblelog_popover/tumblelog_popover.js */

/*! scripts/application/ajax_request.js */
(function(e, g, h, c) {
    var b = window.l10n_str || {};
    var j = [{
        useraction: "follow",
        url: "/svc/follow"
    }, {
        useraction: "unfollow",
        url: "/svc/unfollow"
    }, {
        useraction: "like",
        url: "/svc/like"
    }, {
        useraction: "unlike",
        url: "/svc/unlike"
    }, {
        useraction: "ignore",
        url: "/svc/ignore/add"
    }, {
        useraction: "unignore",
        url: "/svc/ignore/remove"
    }, {
        useraction: "reply",
        url: "/svc/reply"
    }, {
        useraction: "report",
        url: "/svc/report"
    }
    ];
    var a = function(i, k) {
        return function(n, m) {
            if (!i) {
                return 
            }
            n = n || {};
            m = m || {};
            if (m.init) {
                m.init()
            }
            var l = e.ajax({
                url: i,
                type: "POST",
                data: {
                    form_key: e("#tumblr_form_key").attr("content"),
                    data: n
                },
                with_form_key: true
            });
            l.success(function() {
                if (m.success) {
                    m.success()
                }
                Tumblr.Events.trigger("useraction:xhr:success", k, n)
            });
            l.error(function() {
                if (m.error) {
                    m.error()
                } else {
                    Tumblr.Dialog.alert(b.ajax_error)
                }
                Tumblr.Events.trigger("useraction:xhr:error", k, n)
            });
            l.complete(function() {
                if (m.complete) {
                    m.complete()
                }
            });
            return l
        }
    };
    var f = j.length;
    for (var d = f - 1; d >= 0; d--) {
        c[j[d].useraction] = a(j[d].url, j[d].useraction)
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/tabs.js */
(function(c, b, d, a) {
    a.Tabs = d.View.extend({
        el: "#user_tools",
        events: {
            "click #logout_button": "logout",
        },
        initialize: function() {},
        logout: function(i) {
            i.preventDefault();
            var h = c(i.currentTarget);
            var g = h.data("confirm-message");
            var f = h.attr("href");
            if (b.isObject(Tumblr.Dialog)) {
                Tumblr.Dialog.confirm(g, b.bind(function() {
                    window.location.href = f
                }));
                return false
            }
        }
    })
})(jQuery, _, Backbone, Tumblr);
/*! scripts/application/blog_menu.js */
(function(c, d, b, a) {
    a.BlogMenu = d.View.extend({
        el: "#dashboard_controls_open_blog",
        events: {
            "click #popover_button_blogs": "click_popover_button",
            "click #popover_blogs .popover_menu_item": "click_popover_blogs"
        },
        initialize: function() {
            if (c("#popover_blogs").length) {
                this.popover = new Tumblr.Popover({
                    el: this.$("#popover_button_blogs"),
                    popover: this.$("#popover_blogs"),
                    disable_auto_show: true,
                    glassless: true,
                    on_hide: function() {
                        c("#all_channel_count_notice").show()
                    }
                });
                this.sortable = new Tumblr.SortableView({
                    el: this.$("#popover_blogs"),
                    items: ".item",
                    callback: b.bind(this.save, this),
                    scrollable: true
                })
            }
        },
        click_popover_button: function(e) {
            if (e.target.id === "open_blog_link") {
                return 
            }
            e.stopPropagation();
            e.preventDefault();
            this.popover.show();
            c("#all_channel_count_notice").hide()
        },
        click_popover_blogs: function(g) {
            var f = this.$(g.currentTarget);
            var e = f.find("a").attr("href");
            if (Tumblr.Prima.Url.hasAllowedProtocol(e)) {
                if (g.metaKey || g.altKey) {
                    window.open(e)
                } else {
                    window.location = e
                }
            }
            this.popover.hide();
            g.stopPropagation();
            g.preventDefault()
        },
        save: function(f) {
            var e = b.map(f.sequence(), function(g) {
                return g.replace("menuitem-", "")
            });
            c.ajax({
                type: "POST",
                url: "/order",
                data: "channel_names=" + JSON.stringify(e)
            })
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/language_menu.js */
(function(d, e, b, c, a) {
    a.LanguageMenu = Tumblr.Popover.extend({
        events: {
            click: "toggle",
            "click .popover_menu_item a": "select_language"
        },
        initialize: function() {
            if (!this.$el.length) {
                return 
            }
            Tumblr.Popover.prototype.initialize.apply(this, arguments);
            this.update_timezone();
            this.update_position();
            this.language_form = this.$el.find("#set_language");
            this.language_form_type = this.language_form.attr("method");
            this.language_form_url = this.language_form.attr("action")
        },
        show: function() {
            Tumblr.Popover.prototype.show.call(this);
            this.$el.closest("#sidebar_footer_nav").addClass("show_popover");
            this.update_position()
        },
        hide: function() {
            Tumblr.Popover.prototype.hide.call(this);
            this.$el.closest("#sidebar_footer_nav").removeClass("show_popover")
        },
        select_language: function(f) {
            var g = d(f.target);
            f.preventDefault();
            d("#language_selected").val(g.attr("data-lang"));
            d("#language_switcher .current").removeClass("current");
            if (this.spinner) {
                this.spinner.stop()
            } else {
                this.spinner = new c({
                    top: "auto",
                    left: "100%",
                    width: 2,
                    radius: 3,
                    length: 2,
                    color: "#444",
                    className: "language_switcher_spinner"
                })
            }
            this.spinner.spin(g[0]);
            this.set_language()
        },
        set_language: function() {
            var f = b(this.language_form.serializeArray()).map(function(g) {
                return [g.name, g.value]
            }).zipObject().value();
            d.ajax({
                type: this.language_form_type,
                url: this.language_form_url,
                data: f,
                complete: function() {
                    if (f.redirect_to) {
                        window.location = f.redirect_to
                    } else {
                        window.location.reload()
                    }
                }
            })
        },
        update_position: function() {
            var f = Math.floor(this.popover.outerWidth() / 2);
            this.popover.css({
                marginLeft: - f + "px"
            })
        },
        update_timezone: function() {
            var g = new Date();
            var i = new Date(g.getFullYear(), 0, 1, 0, 0, 0, 0);
            var h = new Date(i.toGMTString().replace(/(.*)(\s\S+)/, "$1"));
            var f = Math.round((i - h) / (1000 * 60 * 60));
            this.$el.removeClass("americas europe_africa asia_pacific");
            switch (f) {
            case - 12:
            case - 11:
            case - 10:
            case - 9:
            case - 8:
            case - 7:
            case - 6:
            case - 4:
            case - 3:
            case - 2:
            case - 1:
                this.$el.addClass("americas");
                break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                this.$el.addClass("europe_africa");
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                this.$el.addClass("asia_pacific");
                break;
            default:
                this.$el.addClass("americas");
                break
            }
            return f
        }
    })
})(jQuery, Backbone, _, Spinner, Tumblr);
/*! scripts/application/dashboard_link_pops.js */
(function(c, d, b, a) {
    a.DashboardLinkPops = d.View.extend({
        initialize: function() {},
        el: "#posts",
        events: {
            "click a": "run_click"
        },
        run_click: function(h) {
            var f = h.currentTarget.href;
            var g = c(h.currentTarget);
            if (g.closest("#post_form, .post-composer, .post-form, .editor-wrapper").length > 0) {
                return 
            }
            if (g.closest(".ray-media-player").length > 0) {
                return 
            }
            if (Tumblr.TumblelogDrawer&&!g.is(".sponsored_post, .read_more") && Tumblr.Prima.Url.isTumblelogUrl(f)) {
                return 
            }
            if (g.is(".no_pop, .photoset_photo, .photo_exif_flipper, .fan_mail_read_more, .follow")) {
                return 
            }
            if (window.self !== top && g.is(".post_control.reblog, .post_control.edit")) {
                f = f.replace(/\?.*/, "")
            } else {
                if (g.closest(".no_pop, .post_controls, #new_post, .controls, .user_menu_list, form, .flash_notification, .more_notes_link").length > 0) {
                    return 
                }
                if (!f || f === "#") {
                    return 
                }
            }
            h.preventDefault();
            h.stopPropagation();
            if (Tumblr.Prima.Url.hasAllowedProtocol(f)) {
                window.open(f)
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/password_strength_meter.js */
(function(c, d, b, a) {
    a.PasswordStrengthMeter = d.View.extend({
        defaults: {
            password: "#signup_password",
            email: "#signup_email",
            tumblelog: "#signup_username"
        },
        initialize: function(e) {
            this.options = e || {};
            this.options = b.extend(this.defaults, this.options);
            this.$password_meter = c("#password_strength_meter");
            this.$password = c(this.options.password);
            this.$email = c(this.options.email);
            this.$tumblelog = c(this.options.tumblelog);
            if (!this.$password.length) {
                return 
            }
            this.class_name = "password_strength_meter";
            this.password_meter_markup = '<div class="password_strength_meter inactive" id="password_strength_meter"><strong class="l5"></strong><strong class="l4 l5"></strong><strong class="l3 l4 l5"></strong><strong class="l2 l3 l4 l5"></strong><strong class="l1 l2 l3 l4 l5"></strong></div>';
            this.render();
            this.test_password();
            this.$password.on("keydown keyup focus blur", b.throttle(b.bind(function(f) {
                if (this.last_checked !== this.get_password()) {
                    this.test_password(f)
                }
            }, this), 250))
        },
        render: function() {
            if (!this.$password_meter.length) {
                this.$password.after(this.password_meter_markup);
                this.$password_meter = c("#password_strength_meter")
            }
        },
        set_inactive: function() {
            this.$password_meter.addClass("inactive")
        },
        set_active: function() {
            this.$password_meter.removeClass("inactive")
        },
        set_level: function(e) {
            this.set_active();
            switch (e) {
            case 1:
                this.$password_meter[0].className = this.class_name + " level_1";
                break;
            case 2:
                this.$password_meter[0].className = this.class_name + " level_2";
                break;
            case 3:
                this.$password_meter[0].className = this.class_name + " level_3";
                break;
            case 4:
                this.$password_meter[0].className = this.class_name + " level_4";
                break;
            case 5:
                this.$password_meter[0].className = this.class_name + " level_5";
                break;
            default:
                this.$password_meter[0].className = this.class_name;
                break
            }
        },
        test_password: function(e) {
            this.last_checked = this.$password.val();
            if (!e ||!this.$password.val().length) {
                this.set_inactive();
                return 
            }
            this.get_password_strength()
        },
        update: function() {
            this.test_password()
        },
        get_email: function() {
            return this.$email.val()
        },
        get_password: function() {
            return this.$password.val()
        },
        get_username: function() {
            return this.$tumblelog.val()
        },
        get_form_data: function() {
            var e = {};
            e.username = this.get_username();
            e.email = this.get_email();
            e.password = this.get_password();
            return e
        },
        get_password_strength: function() {
            if (this.pw_xhr) {
                this.pw_xhr.abort()
            }
            this.pw_xhr = c.ajax({
                url: "/svc/account/validation",
                dataType: "json",
                type: "POST",
                data: this.get_form_data()
            });
            this.pw_xhr.done(b.bind(function(e) {
                var f = e.score || 0;
                this.set_level(f);
                this.block_registration_step = (e.reject_reason) ? e.reject_reason : false;
                delete this.pw_xhr
            }, this))
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/report_tumblelog.js */
(function(c, d, b, a) {
    a.ReportTumblelogView = d.View.extend({
        el: "#report_tumblelog_bar",
        events: {
            "click .spam": "report_spam",
            "click .harassment": "report_harassment",
            "click .dismiss": "dismiss",
            mouseenter: "delay_dismiss",
            mouseleave: "timeout_dismiss"
        },
        initialize: function() {
            Tumblr.Events.on("block_tumblelog", b.bind(this.block_tumblelog, this))
        },
        block_tumblelog: function(e) {
            if (e.can_report) {
                this.tumblelog = e.tumblelog;
                this.animate_in();
                this.timeout_dismiss()
            }
        },
        animate_in: function() {
            this.$el.find("#report_tumblelog_with_name").show();
            this.$el.find("#report_tumblelog_name").html(this.tumblelog);
            this.$el.fadeIn(300)
        },
        report_spam: function() {
            var e = this.tumblelog;
            Tumblr.report({
                tumblelog: e,
                reason: "1"
            }).done(function() {
                Tumblr.Events.trigger("report_tumblelog", {
                    tumblelog: e,
                    reason: "spam"
                })
            }).always(b.bind(function() {
                this.dismiss()
            }, this))
        },
        report_harassment: function() {
            var e = this.tumblelog;
            Tumblr.report({
                tumblelog: e,
                reason: "2"
            }).done(function() {
                Tumblr.Events.trigger("report_tumblelog", {
                    tumblelog: e,
                    reason: "harassment"
                })
            }).always(b.bind(function() {
                this.dismiss()
            }, this))
        },
        dismiss: function() {
            this.$el.fadeOut(300, b.bind(function() {
                this.$el.find("#report_tumblelog_name").html("");
                this.$el.find("#report_tumblelog_with_name").hide()
            }, this))
        },
        timeout_dismiss: function(e) {
            e = e || 3000;
            clearTimeout(this.dismissTimeout);
            this.dismissTimeout = setTimeout(b.bind(function() {
                this.dismiss()
            }, this), 3000)
        },
        delay_dismiss: function() {
            clearTimeout(this.dismissTimeout)
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/full_height_no_posts_found.js */
(function(c, d, b, a) {
    a.FullHeightNoPostsFound = d.View.extend({
        initialize: function() {
            this.$no_posts_found = c(".no_posts_found");
            this.$left_column = c("#left_column");
            this.$right_column = c("#right_column");
            if (this.$no_posts_found.length && this.$left_column.length && this.$right_column.length) {
                if (this.$right_column.css("min-height") !== "0px") {
                    return 
                }
                var f = this.$left_column.height(), e = this.$right_column.height(), h = 0, g = "+";
                if (f < e) {
                    g = "+";
                    h = e - f
                } else {
                    if (f > e) {
                        g = "-";
                        h = f - e;
                        if (h >= 50) {
                            h = 0
                        }
                    }
                }
                this.center_padding(h, g)
            }
        },
        center_padding: function(e, g) {
            if (e > 0 && (g === "+" || g === "-")) {
                var f = e / 2;
                this.$no_posts_found.css("padding-top", g + "=" + f).css("padding-bottom", g + "=" + f)
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/blog_name_helper.js */
(function(c, d, b, a) {
    a.BlogNameHelper = {
        validate_tumblelog_name: function(e) {
            return !(/^-|-$|[^\-a-z0-9]|tumblr/i).test(e)
        },
        has_starting_hyphen: function(e) {
            return (/^-/).test(e)
        },
        has_ending_hyphen: function(e) {
            return (/-$/).test(e)
        },
        clean_tumblelog_name: function(e) {
            return e.toLowerCase().replace(/[^\-a-z0-9]/g, "-").replace(/^-+|-+$/g, "").replace(/tumblr/gi, "")
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/fan_mail.js */
(function(c, d, b, a) {
    a.FanMail = {
        show: function(k, i) {
            i = i || {};
            var h = b.has(i, "transparent_lightbox") ? i.transparent_lightbox: false;
            var g = b.has(i, "href") ? i.href: false;
            var e = b.has(i, "show_loader") ? i.show_loader: true;
            if (!g && k && k.href) {
                g = k.href
            }
            g += (g.indexOf("?")!==-1 ? "&" : "?") + "lightbox=true";
            if (h) {
                g += "&transparent_lightbox=true"
            }
            if (e) {
                var f = c('<div id="send_fan_mail_lightbox_loader"></div>');
                f.css({
                    zIndex: 4294967294,
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    background: "transparent url('/images/fan_mail/grid_bg_lightbox.png?709') center"
                });
                f.html('<div style="position:absolute; top:0; left:0; right:0; bottom:0; background:transparent center no-repeat url(\'/images/loading_big_fff_on_2e3133.gif?709\')"><img style="position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.3;" src="/images/full_page_vignette.png?709"/></div>');
                c("body").append(f)
            }
            var j = c('<iframe id="send_fan_mail_lightbox" scrolling="no" border="0" frameBorder="0"/>');
            j.attr("src", g);
            j.css({
                zIndex: 4294967294,
                display: "none",
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                background: "transparent",
                overflow: "hidden"
            });
            j.load(function() {
                c("#send_fan_mail_lightbox_loader").hide();
                c("#send_fan_mail_lightbox").show()
            });
            c("body").append(j)
        },
        hide: function() {
            c("#send_fan_mail_lightbox").hide().remove();
            c("#send_fan_mail_lightbox_loader").hide().remove();
            Tumblr.Events.trigger("fan_mail:form:hide")
        },
        sending: function() {
            c("#send_fan_mail_lightbox").hide().load(function() {
                c("#send_fan_mail_lightbox_loader").hide();
                c("#send_fan_mail_lightbox").show()
            });
            c("#send_fan_mail_lightbox_loader").show()
        },
        make_url_from_tumblelog: function(e) {
            return "/send/" + e
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/activity_sparkline.js */
(function(c, d, b, a) {
    a.ActivitySparkline = d.View.extend({
        el: "#dashboard_controls_open_blog .activity .count",
        initialize: function() {
            if (this.$el.length) {
                var e = this.$el.data("sparkline");
                if (b.isFunction(this.$el.sparkline)) {
                    try {
                        if (typeof(e) !== "object") {
                            throw "sparkline is not an object"
                        }
                        if (b.max(e) === 0) {
                            throw "sparkline has no interesting data"
                        }
                        this.$el.sparkline(e, {
                            type: "line",
                            lineColor: "#ffffff",
                            fillColor: false,
                            lineWidth: 4,
                            chartRangeMin: 0,
                            spotColor: false,
                            minSpotColor: false,
                            maxSpotColor: false,
                            disableInteraction: true,
                            width: "72px",
                            height: "30px"
                        });
                        this.$el.find("canvas").css({
                            height: "15px",
                            width: "36px"
                        });
                        return 
                    } catch (f) {}
                }
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/tumblelog_actions.js */
(function(d, e, b, a) {
    var c = window.l10n_str || {};
    a.TumblelogActions = {
        confirm: function(h) {
            var g = d.Deferred();
            h = h || {};
            if (!h.tumblelog) {
                return g.reject()
            }
            var f = h.avatar_url || "/images/anonymous_avatar_96.png";
            if (f&&!f.match(/96\.png/)) {
                f = f.replace(/_(\d\d.?)\.png/, "_96.png")
            }
            var j = function() {
                g.resolve();
                d("body").removeClass("dialog_open")
            };
            var i = function() {
                g.reject();
                d("body").removeClass("dialog_open")
            };
            Tumblr.Dialog.confirm({
                text: h.confirm_text || "",
                text_ok: h.text_ok || Tumblr.Dialog.__("Ok"),
                text_cancel: Tumblr.Dialog.__("Nevermind"),
                callback_ok: j,
                callback_cancel: i,
                templates: {
                    content: ['<div class="avatar_image" style="background-image: url(' + f + ');">', '<div class="avatar_frame"></div>', "</div>", '<span class="text"><%= text %></span>'].join("")
                }
            });
            return g.promise()
        },
        confirm_ignore: function(i) {
            if (!i.tumblelog) {
                var h = d.Deferred();
                return h.reject()
            }
            var f = "";
            var g = i.tumblelog.match(/post\_id\:/) || i.tumblelog.match(/ip\:/);
            if (g) {
                f = c.confirm_block_this_person
            } else {
                f = c.confirm_block.replace("%1$s", "<strong>" + i.tumblelog + "</strong>")
            }
            if (!i.confirm_text) {
                i.confirm_text = f
            }
            i.text_ok = Tumblr.Dialog.__("Ignore");
            return this.confirm(i)
        },
        confirm_unfollow: function(g) {
            if (!g.tumblelog) {
                var f = d.Deferred();
                return f.reject()
            }
            g.confirm_text = Tumblr.Dialog.__("Are you sure you want to unfollow %1$s?").replace("%1$s", "<strong>" + g.tumblelog + "</strong>");
            g.text_ok = Tumblr.Dialog.__("Unfollow");
            return this.confirm(g)
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications/base_view.js */
(function(c, d, b, a) {
    a.NotesBaseView = d.View.extend({
        ignore: function(f) {
            f.preventDefault();
            c("body").addClass("dialog_open");
            var h = this.tumblelog;
            var g = Tumblr.TumblelogActions.confirm_ignore({
                tumblelog: h,
                avatar_url: c(f.delegateTarget).find(".avatar").attr("src")
            });
            g.done(function() {
                Tumblr.ignore({
                    tumblelog: h,
                    source: "IGNORE_SOURCE_NOTIFICATION"
                });
                Tumblr.Events.trigger("block_tumblelog", {
                    tumblelog: h,
                    can_report: true
                })
            });
            return false
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications/notification_view.js */
(function(d, e, b, a) {
    var c = window.l10n_str || {};
    a.NotificationView = Tumblr.NotesBaseView.extend({
        events: {
            "click .block": "ignore",
            "mousedown .notification_inner": "before_notification_click",
            "mouseup .notification_inner": "after_notification_click",
            "click .notification_inner": "notification_click",
            "click .notification_follow_button": "notification_follow",
            "click .photo_reply_image": "notification_photo_reply_image",
            "mouseenter .notification .block": "notification_block_hover",
            "mouseleave .notification .block": "notification_block_hover",
            "mouseenter .control": "control_hover_in",
            "mouseleave .control": "control_hover_out"
        },
        initialize: function() {
            this.tumblelog = this.$el.find("a.block").attr("data-tumblelog");
            Tumblr.Events.on("block_tumblelog", b.bind(this.tumblelog_block, this));
            if (this.$el.find("a.block").length) {
                this.$el.addClass("can_ignore")
            }
        },
        tumblelog_block: function(f) {
            if (this.tumblelog === f.tumblelog) {
                this.$el.addClass("ignored").addClass("no_active").addClass("no_hover").removeClass("can_ignore");
                this.$el.find(".block").remove();
                this.$el.unbind()
            }
        },
        update: function() {
            this.$el.find(".notification .notification_text").each(function(g, h) {
                var f = d(h);
                if (f.find("a").length > 1) {
                    f.addClass("underline_links")
                }
            });
            this.$el.find(".notification a.block").each(function(g, h) {
                var f = d(h);
                f.closest(".notification").addClass("can_ignore")
            })
        },
        before_notification_click: function(g) {
            var f = d(g.target);
            if (f.is(".photo_reply_image") || f.is(".photo_reply_image_container")) {
                this.$el.addClass("no_active")
            }
        },
        after_notification_click: function(g) {
            var f = d(g.target);
            if (f.is(".photo_reply_image") || f.is(".photo_reply_image_container")) {
                this.$el.removeClass("no_active")
            }
        },
        notification_click: function(h) {
            var f = d(h.target);
            if (!f.is("a")&&!f.is(".photo_reply_image_container")) {
                h.stopPropagation();
                h.preventDefault();
                var g = this.$el.find(".notification_target").attr("href");
                if (!g && this.$el.find("a").length === 1) {
                    g = this.$el.find("a").attr("href")
                }
                if (g) {
                    window.open(g)
                }
            }
        },
        notification_follow: function(g) {
            g.stopPropagation();
            g.preventDefault();
            var f = d(g.currentTarget);
            f.addClass("animated").addClass("poof");
            window.setTimeout(b.bind(function() {
                f.parent().remove();
                this.$el.removeClass("has_follow");
                f.addClass("final_state")
            }, this), 1000);
            Tumblr.follow({
                tumblelog: f.attr("data-tumblelog-name"),
                source: "FOLLOW_SOURCE_DASHBOARD_NOTIFICATION"
            }, {
                success: function() {
                    var h = d('[href="' + f.attr("data-tumblelog-name") + '"]');
                    h.hide()
                },
                error: function() {
                    Tumblr.Dialog.alert(c.ajax_error)
                }
            })
        },
        notification_photo_reply_image: function(g) {
            var f = d(g.target);
            g.stopPropagation();
            g.preventDefault();
            Tumblr.Lightbox.init([{
                high_res: f.attr("src"),
                low_res: f.attr("src"),
                width: 500
            }
            ])
        },
        notification_block_hover: function() {},
        control_hover_in: function() {
            this.$el.addClass("control_hover")
        },
        control_hover_out: function() {
            this.$el.removeClass("control_hover")
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications/notifications_view.js */
(function(c, d, b, a) {
    a.Notifications = d.View.extend({
        el: "#posts",
        events: {
            "click .notification_dismiss": "notification_dismiss"
        },
        initialize: function() {
            if ("AfterAutoPaginationQueue" in window) {
                window.AfterAutoPaginationQueue.push(b.bind(this.updateViews, this))
            }
            this.updateViews();
            this.$el.find(".notification .notification_text").each(function(f, g) {
                var e = c(g);
                if (e.find("a").length > 1) {
                    e.addClass("underline_links")
                }
            })
        },
        updateViews: function() {
            this.$el.find(".notification:not([data-view-exists])").each(function(f, g) {
                var e = c(g);
                if (!e.attr("data-view-exists")) {
                    new Tumblr.NotificationView({
                        el: g
                    });
                    e.attr("data-view-exists", true)
                }
            })
        },
        notification_dismiss: function(h) {
            h.stopPropagation();
            h.preventDefault();
            var f = c(h.target);
            var k = f.parents(".notification");
            var j = k.data("cookie");
            if (j) {
                j = j.split("|");
                var g = j[0] || "";
                var i = j[1] || "";
                var l = parseInt(j[2], 10) || null;
                if (g) {
                    Tumblr.Cookie.set(g, i, l)
                }
            }
            var e = k.data("ajax");
            if (e) {
                c.get(e)
            }
            k.css("display", "none")
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications/note_view.js */
(function(c, d, b, a) {
    a.NoteView = Tumblr.NotesBaseView.extend({
        events: {
            "click a.block": "ignore"
        },
        initialize: function() {
            this.tumblelog = this.$el.attr("data-tumblelog");
            Tumblr.Events.on("block_tumblelog", b.bind(this.tumblelog_block, this))
        },
        tumblelog_block: function(e) {
            if (this.tumblelog === e.tumblelog) {
                this.$el.addClass("ignored").addClass("no_active").addClass("no_hover").removeClass("can_ignore");
                this.$el.find(".block").remove();
                this.$el.unbind()
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications/reblog_note_view.js */
(function(c, d, b, a) {
    a.ReblogNoteView = Tumblr.NoteView.extend({
        events: function() {
            return b.extend({}, Tumblr.NoteView.prototype.events, {
                click: "note_click",
                mouseenter: "note_hover",
                mouseleave: "note_out",
                "mouseenter .avatar_frame": "note_img_hover",
                "mouseleave .avatar_frame": "note_img_out",
                "mouseleave .block": "note_img_out",
                mousedown: "note_down",
                mouseup: "note_up"
            })
        },
        note_down: function(g) {
            var f = c(g.target);
            if (!f.is("a")&&!f.is("img")) {
                this.$el.addClass("active")
            }
        },
        note_up: function() {
            this.$el.removeClass("active")
        },
        note_hover: function() {
            this.$el.addClass("hover")
        },
        note_out: function() {
            this.$el.removeClass("hover").removeClass("active")
        },
        note_img_hover: function() {
            this.$el.removeClass("hover")
        },
        note_img_out: function() {
            this.$el.addClass("hover")
        },
        note_click: function(i) {
            var g = c(i.target);
            var f = c(i.currentTarget);
            if (!g.is("a")&&!g.is("img")&&!g.closest(".follow").length) {
                i.stopPropagation();
                i.preventDefault();
                var h = f.find(".action").attr("data-post-url");
                window.open(h)
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications/notes_view.js */
(function(c, d, b, a) {
    a.Notes = d.View.extend({
        initialize: function() {},
        el: "#posts",
        loading_notes: false,
        events: {
            "click .post_control.reblog_count": "toggle_notes",
            "click .more_notes_link_container": "more_notes"
        },
        create_note_views: function(e) {
            e.find(".note:not([data-view-exists])").each(function(g, h) {
                var f;
                if (c(h).hasClass("reblog")) {
                    f = new Tumblr.ReblogNoteView({
                        el: h
                    })
                } else {
                    f = new Tumblr.NoteView({
                        el: h
                    })
                }
                c(h).attr("data-view-exists", true)
            })
        },
        toggle_notes: function(k) {
            k.preventDefault();
            if (this.loading_notes) {
                return 
            }
            this.loading_notes = true;
            var h = c(k.currentTarget);
            var f = h.closest(".post");
            var j = f.find(".notes_outer_container");
            var i = f.find(".notes_container");
            var g = f.find(".notes");
            j.show();
            i.show();
            if (g.is(":visible")) {
                this.loading_notes = true;
                g.slideUp(300, b.bind(function() {
                    this.loading_notes = false
                }, this));
                return 
            }
            if (h.attr("data-notes-loaded")) {
                this.animate_in(g);
                return 
            }
            this.load_notes(f.attr("data-post-id"), f.attr("data-tumblelog-key"), {}, b.bind(function(e) {
                h.attr("data-notes-loaded", true);
                g.append(c(e).html());
                this.animate_in(g);
                j.find(".notes_control").hide();
                this.create_note_views(g)
            }, this))
        },
        animate_in: function(e) {
            this.loading_notes = true;
            e.slideDown(300, b.bind(function() {
                this.loading_notes = false
            }, this))
        },
        more_notes: function(i) {
            i.preventDefault();
            var j = c(i.currentTarget);
            var h = j.find(".more_notes_link");
            var f = j.closest(".post");
            var g = f.find(".notes");
            h.hide();
            this.load_notes(f.attr("data-post-id"), f.attr("data-tumblelog-key"), {
                from_id: h.attr("data-next")
            }, b.bind(function(e) {
                j.remove();
                g.find(".last_note").removeClass("last_note");
                g.append(c(e).html());
                this.create_note_views(g)
            }, this))
        },
        load_notes: function(e, i, g, h) {
            var f = "/dashboard/notes/" + e + "/" + i;
            if (g.from_id) {
                f += "?from_c=" + g.from_id
            }
            c.ajax(f).done(h)
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/notes_and_notifications.js */

/*! scripts/application/buttons_panos.js */
(function(c, d, b, a) {
    a.Panos = {
        init: function() {
            c("#posts").on("click", ".panorama", function(f) {
                if (f.shiftKey || f.ctrlKey || f.altKey || f.metaKey) {
                    return 
                }
                var e = c(f.target).closest(".panorama");
                if (e.hasClass("with_clickthru") && f.target.className !== "zoomer") {
                    return 
                }
                f.stopImmediatePropagation();
                f.preventDefault();
                e.panorama({
                    lightbox: true
                })
            })
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/buttons_reply.js */
(function(c, d, b, a) {
    a.ReplyButtons = {
        init: function() {
            var e = {};
            c("#posts").on("click", ".reply_button", function(f) {
                if (f.target !== f.currentTarget) {
                    return 
                }
                f.stopPropagation();
                f.preventDefault();
                var g = f.currentTarget.id;
                if (!e[g]) {
                    e[g] = new Tumblr.ReplyPopover({
                        el: c(f.target)
                    })
                }
                c(f.currentTarget).addClass("active");
                e[g].show()
            })
        }
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/buttons_reblog.js */
(function(e, g, b, a) {
    var c = window.l10n_str || {};
    var f = g.View.extend({
        initialize: function() {
            this.$post = this.$el.closest(".post")
        },
        clicked: function() {
            if (this.$el.closest(".logged_out").length || this.$el.data("reblogged")) {
                return 
            }
            this.reblog();
            this.$el.addClass("animated").addClass("collapse_reblog_button");
            window.setTimeout(b.bind(function() {
                this.$el.addClass("final_state")
            }, this), 1000)
        },
        reblog: function() {
            this.$el.data("reblogged", 1);
            e.ajax({
                url: "/fast_reblog",
                type: "post",
                data: {
                    reblog_key: this.$el.attr("data-reblog-key"),
                    reblog_post_id: this.$el.attr("data-reblog-id"),
                    form_key: this.$el.attr("data-user-form-key"),
                    pt: this.$el.attr("data-pt")
                },
                success: b.bind(function() {
                    this.$el.addClass("reblogged");
                    if (this.$post.hasClass("promotion_pinned")&&!this.$post.hasClass("is_mine")) {
                        this.unpin()
                    }
                }, this),
                error: function() {
                    Tumblr.Dialog.alert(c.ajax_error)
                },
                complete: function() {}
            })
        },
        unpin: function() {
            e.ajax("/unpin", {
                type: "post",
                data: {
                    post_id: this.$post.id().replace("post_", ""),
                    form_key: e("#tumblr_form_key").attr("content")
                }
            })
        }
    });
    var d = {
        init: function() {
            e("#posts").on("click", ".reblog_button", function(h) {
                if (!h.altKey || h.target !== h.currentTarget) {
                    return 
                }
                h.stopPropagation();
                h.preventDefault();
                new f({
                    el: e(h.target)
                }).clicked()
            })
        }
    };
    a.ReblogButtons = d
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/buttons_right_column.js */
(function(c, d, b, a) {
    a.PushButtons = d.View.extend({
        el: "#right_column",
        events: {
            "click li": "on_click"
        },
        on_click: function(f) {
            var e = this.$(f.currentTarget);
            if (e.length&&!e.hasClass("item")&&!e.hasClass("no_push")&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey) {
                this.$(".selected").removeClass("selected");
                e.addClass("selected")
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/custom_resize_anchor.js */
(function(d, e, c, b) {
    var a = function(g, f) {
        if (!(this instanceof a)) {
            return new a(g, f)
        }
        this.el = (typeof g === "string") ? d(g).get(0) : g;
        this.$el = d(g);
        this.options = f;
        if (this.$el.data("resizeAnchor")) {
            return this.$el.data("resizeAnchor")
        }
        this.$el.data("resizeAnchor", this);
        this.metadata = this.$el.data("plugin-options");
        this.config = d.extend({}, a.defaults, this.options, this.metadata);
        this.config.resize = this.$el.css("resize") || "both";
        if (this.config.create_container) {
            this.$container = d("<div/>").addClass(this.config.container_class).insertBefore(this.$el);
            this.$container.append(this.$el);
            this.$clearfix = d("<div/>").addClass(this.config.clearfix_class).insertAfter(this.$container)
        }
        this.$anchor = d("<span/>").attr({
            onclick: "return false;",
            tabindex: - 1
        }).addClass(this.config.anchor_class).insertAfter(this.$el);
        this.anchor_visibility();
        this.resize_start = d.proxy(this._resize_start, this);
        this.resize_move = d.proxy(this._resize_move, this);
        this.resize_end = d.proxy(this._resize_end, this);
        this.$anchor.on("mousedown", this.resize_start);
        this.$parent = d(window);
        a.register(this);
        return this
    };
    a.prototype = {
        __event_position: function(g) {
            var f, h;
            f = g.pageX;
            h = g.pageY;
            return {
                x: f,
                y: h
            }
        },
        _resize_start: function(f) {
            this.start_width = this.$el.outerWidth();
            this.start_height = this.$el.outerHeight();
            this.start_position = this.__event_position(f);
            this.$parent.on("mousemove", this.resize_move);
            this.$parent.on("mouseup", this.resize_end);
            f.preventDefault()
        },
        _resize_move: function(f) {
            this.current_position = this.__event_position(f);
            switch (this.config.resize) {
            case"vertical":
                this.set_height(this.current_position.y - this.start_position.y + this.start_height);
                break;
            case"horizontal":
                this.set_width(this.current_position.x - this.start_position.x + this.start_width);
                break;
            case"both":
                this.set_size(this.current_position.x - this.start_position.x + this.start_width, this.current_position.y - this.start_position.y + this.start_height);
                break;
            case"none":
                break
            }
        },
        _resize_end: function(f) {
            this.$parent.off("mousemove", this.resize_move);
            this.$parent.off("mouseup", this.resize_end)
        },
        anchor_visibility: function() {
            if (this.config.resize === "none") {
                this.$anchor.hide()
            } else {
                this.$anchor.show()
            }
        },
        set_width: function(f) {
            this.$el.css("width", Math.max(0, f))
        },
        set_height: function(f) {
            this.$el.css("height", Math.max(0, f))
        },
        set_size: function(g, f) {
            this.$el.css({
                width: Math.max(0, g),
                height: Math.max(0, f)
            })
        },
        destroy: function() {
            this.$anchor.remove();
            if (this.config.create_container) {
                this.$el.insertBefore($container);
                this.$container.remove();
                this.$clearfix.remove()
            }
        }
    };
    a.instances = [];
    a.defaults = {
        container_class: "resize_textarea_container",
        clearfix_class: "resize_textarea_clearfix",
        anchor_class: "resize_textarea_anchor",
        create_container: true
    };
    a.register = function(f) {
        this.instances.push(f)
    };
    a.destroy_all = function() {
        for (var f = 0; f < this.instances.length; f++) {
            this.instances[f].destroy()
        }
    };
    d.fn.resizeanchor = function(f) {
        return this.each(function() {
            new a(this, f)
        })
    };
    b.ResizeAnchor = a
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/autoexpand_textarea.js */
(function(d, e, b, a) {
    var c = function(h, f) {
        if (!(this instanceof c)) {
            return new c(h, f)
        }
        this.el = (typeof h === "string") ? d(h).get(0) : h;
        this.$el = d(h);
        this.options = f;
        this.metadata = this.$el.data("plugin-options");
        this.config = d.extend({}, c.defaults, this.options, this.metadata);
        var g = parseInt(this.$el.css("lineHeight"), 10);
        this.minHeight = this.oldHeight = (this.config.minHeight) ? this.config.minHeight : this.$el.height();
        this.maxHeight = (this.config.maxHeight) ? this.config.maxHeight : false;
        this.padder = g;
        this.$el.css("min-height", this.minHeight);
        this.$el.each(d.proxy(function(i) {
            this.create_shadow(i)
        }, this));
        this.events = {
            __input: d.proxy(this.__input, this),
            __mouseup: d.proxy(this.__mouseup, this)
        };
        this.$el.on("input", this.events.__input);
        this.$el.on("mouseup", this.events.__mouseup);
        this.update(this.$el);
        c.register(this);
        return this
    };
    c.prototype = {
        __input: function(g) {
            var f = d(g.currentTarget);
            this.update(f)
        },
        __mouseup: function(g) {
            var f = d(g.currentTarget);
            this.oldHeight = f.outerHeight();
            if (this.oldHeight >= this.maxHeight) {
                this.maxHeight = this.oldHeight
            }
        },
        create_shadow: function(f) {
            this.$shadow = (d("." + this.config.shadowClass).length) ? d("." + this.config.shadowClass) : d("<div/>", {
                "class": this.config.shadowClass
            });
            this.$shadow.css({
                position: "absolute",
                top: - 10000,
                left: - 10000,
                width: this.$el.width(),
                fontSize: this.$el.css("fontSize"),
                fontFamily: this.$el.css("fontFamily"),
                fontWeight: this.$el.css("fontWeight"),
                lineHeight: this.$el.css("lineHeight")
            }).appendTo(document.body)
        },
        replace_value: function(f) {
            return f.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>")
        },
        update: function(f) {
            var h = this.replace_value(f.val());
            this.$shadow.css("width", this.$el.width());
            this.$shadow.html(h);
            var g = Math.max(this.$shadow.height() + this.padder, this.oldHeight);
            if ((this.maxHeight && (g < this.maxHeight)) ||!this.maxHeight) {
                this.$el.css("height", g)
            } else {
                this.$el.css("height", this.maxHeight)
            }
        },
        destroy: function() {
            this.$shadow.remove();
            this.$el.off("input", this.events.__input);
            this.$el.off("mouseup", this.events.__mouseup)
        }
    };
    c.instances = [];
    c.defaults = {
        shadowClass: "autoexpand_shadow",
        minHeight: false,
        maxHeight: 400
    };
    c.register = function(f) {
        this.instances.push(f)
    };
    c.destroy_all = function() {
        for (var f = 0; f < this.instances.length; f++) {
            this.instances[f].destroy()
        }
    };
    d.fn.autoexpand = function(f) {
        return this.each(function() {
            new c(this, f)
        })
    };
    a.AutoExpand = c
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/event_relay.js */
(function(c, e, b, a) {
    var d = function(g, f) {
        if (!(this instanceof d)) {
            return new d(g, f)
        }
        this.el = (typeof g === "string") ? c(g).get(0) : g;
        this.$el = c(g);
        this.options = f;
        this.metadata = this.$el.data("plugin-options");
        this.config = c.extend({}, d.defaults, this.options, this.metadata);
        if (this.config.event) {
            this.config.events = this.config.event
        }
        if (this.config.selector) {
            this.config.child_selector = this.config.selector
        }
        this.$relay_targets = c(this.$el.find(this.config.child_selector)).add(c(this.config.global_selector));
        this.$el.addClass(this.config.relay_class);
        this.$relay_targets.addClass(this.config.target_class);
        this.relay = c.proxy(this.__relay, this);
        this.events = {};
        c.each(this.config.events.split(","), c.proxy(function(h, j) {
            this.add_event(j)
        }, this));
        this.$el.data("eventRelayObject", this);
        d.register(this);
        return this
    };
    d.prototype = {
        __relay: function(f) {
            if (this.__is_relay_element(f)) {
                f.stopPropagation();
                this.$relay_targets.not(f.target).trigger(f)
            }
        },
        __is_relay_element: function(f) {
            return this.$el.is(f.currentTarget)
        },
        add_event: function(f) {
            this.events[f] = true;
            this.$el.on(f, this.relay)
        },
        remove_event: function(f) {
            this.events[f] = false;
            this.$el.off(f, this.relay)
        },
        destroy: function(f) {
            c.each(this.events, c.proxy(function(g) {
                this.remove_event(g)
            }, this));
            if (!f) {
                d.unregister(this)
            }
        }
    };
    d.defaults = {
        events: "click",
        child_selector: false,
        global_selector: false,
        relay_class: "click_relay",
        target_class: "click_relay_target"
    };
    d.instances = [];
    d.register = function(f) {
        this.instances.push(f)
    };
    d.unregister = function(f) {
        this.instances.splice(this.instances.indexOf(f), 1)
    };
    d.destroy_all = function() {
        for (var f = 0; f < this.instances.length; f++) {
            this.instances[f].destroy(true)
        }
        this.instances = []
    };
    c.fn.eventrelay = function(f) {
        return this.each(function() {
            new d(this, f)
        })
    };
    a.EventRelay = d
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_controls.js */
(function(c, d, b, a) {
    a.PostControls = d.View.extend({
        initialize: function() {},
        el: "#posts",
        events: {
            "click .post_control.block_link": "ignore",
            "click .post_control.publish_post": "publish",
            "click .post_control.flag": "flag"
        },
        ignore: function(j) {
            var g = c(j.currentTarget);
            var i = g.data("message");
            var h = g.data("tumblelog-name");
            var f = g.data("tumblelog-hash");
            Tumblr.Dialog.confirm(i, b.bind(function() {
                Tumblr.ignore({
                    tumblelog: h,
                    source: "IGNORE_SOURCE_POST"
                });
                Tumblr.remove_tumblelog_posts(f)
            }, this));
            return false
        },
        publish: function(i) {
            var f = c(i.currentTarget);
            var h = f.data("message");
            var g = f.data("post-id");
            Tumblr.Dialog.confirm(h, b.bind(function() {
                c("#publish_post_" + g).submit()
            }));
            return false
        },
        flag: function(g) {
            var f = c(g.currentTarget);
            if (!this.postModerationPopover) {
                this.postModerationPopover = new Tumblr.Prima.PostModerationPopover({
                    post: this.model,
                    pinnedTarget: f
                })
            }
            this.postModerationPopover.render()
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_draggable_tags.js */
(function(c, d, b, a) {
    a.DraggableTags = d.View.extend({
        el: "#posts",
        events: {
            "mouseover .post_footer_links .tags": "mouseover",
            "mousedown .post_footer_links .tags.draggable": "mousedown",
            mousemove: "mousemove"
        },
        initialize: function() {
            c("body").on("mouseup", b.bind(this.mouseup, this))
        },
        mouseover: function(i) {
            var j = this.$(i.currentTarget);
            var h = j.parents(".post_footer_links");
            var g = h.width();
            var f = h.find(".source_url").width();
            this.max_width = g;
            if (f) {
                this.max_width = g - f + 8
            }
            if (j.width() > this.max_width) {
                j.addClass("draggable")
            }
            i.preventDefault();
            i.stopPropagation()
        },
        mousedown: function(f) {
            this.$dragging = this.$(f.currentTarget).addClass("dragging");
            this.mouse_down_left = f.offsetX || f.clientX - this.$(f.currentTarget).offset().left;
            f.preventDefault();
            f.stopPropagation()
        },
        mousemove: function(f) {
            if (this.$dragging) {
                this.$dragging.offset({
                    left: f.pageX - this.mouse_down_left
                });
                f.preventDefault();
                f.stopPropagation()
            }
        },
        mouseup: function(h) {
            if (this.$dragging == null) {
                return 
            }
            this.$dragging.removeClass("dragging");
            var g = parseInt(this.$dragging.css("left"), 10);
            var f = this.$dragging.width();
            if (g > 0 || g < this.max_width - f) {
                this.$dragging.animate({
                    left: "0"
                })
            }
            this.$dragging = null;
            h.preventDefault();
            h.stopPropagation()
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_inline_image_toggle.js */
(function(c, d, b, a) {
    a.PostInlineImageToggle = d.View.extend({
        events: {
            "click .post_content img": "toggle"
        },
        toggle: function(k) {
            var h = this.$(k.currentTarget).parents(".post_content");
            var g = h.find(".toggle_inline_image");
            g.toggleClass("inline_image");
            var i = h.find(".inline_external_image");
            b.each(i, b.bind(this.toggle_external, this));
            var j = h.find(".image_thumbnail");
            if (j.length) {
                this.toggle_thumbnail(j)
            }
            var f = h.find(".photo_info");
            if (f.length) {
                f.toggleClass("hidden")
            }
        },
        toggle_thumbnail: function(e) {
            if (e.hasClass("enlarged")) {
                e.removeClass("enlarged");
                e.attr("width", e.data("thumbnail-width"));
                e.attr("height", e.data("thumbnail-height"))
            } else {
                e.addClass("enlarged");
                e.attr("width", e.data("width"));
                e.attr("height", e.data("height"))
            }
        },
        toggle_external: function(g) {
            var h = this.$(g);
            var e = h.attr("external_src");
            if (h.hasClass("enlarged")) {
                h.attr("src", h.attr("original_src"));
                h.removeClass("enlarged")
            } else {
                h.attr("original_src", h.attr("src"));
                h.addClass("enlarged");
                if (h.attr("loader")) {
                    h.attr("src", h.attr("loader"))
                }
                var f = new Image();
                f.onload = function() {
                    h.attr("src", e)
                };
                f.src = e
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_video_embed_toggle.js */
(function(c, d, b, a) {
    a.PostVideoEmbedToggle = d.View.extend({
        events: {
            "click .video_preview": "show_video"
        },
        show_video: function(l) {
            var n = c(l.currentTarget);
            var m = n.closest(".post");
            var f = m.find(".post_media");
            var g = f.find(".video_embed");
            var j = f.find(".video_preview");
            var h = f.find(".video");
            var i = m.find(".video_preview").data("permalink");
            var k = f.find(".video_embed_code").val();
            if (n.data("render-context") === "blank") {
                window.open(i, "_blank");
                return false
            }
            if (j.is(":visible")) {
                g.html(k);
                j.hide();
                h.show()
            }
            this.track_view(true);
            return false
        },
        track_view: function(e) {
            Tumblr.Events.trigger("Capture:push", "embed_interaction", "click", e ? "static" : "normal");
            if (!b.isUndefined(window._gaq)) {
                window._gaq.push(["_trackEvent", "dashboard_video", "click", e ? "static": "normal"])
            }
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_answer.js */
(function(d, e, b, a) {
    var c = window.l10n_str || {};
    a.AnswerPost = e.View.extend({
        el: "#posts",
        events: {
            "keyup .answer_form .answer_input": "keyup",
            "submit .answer_form": "submit"
        },
        keyup: function(f) {
            this.answer_input = d(f.currentTarget);
            this.answer_form = this.answer_input.closest(".answer_form");
            this.answer_length_label = this.answer_form.find(".answer_length");
            this.answer_input_value = this.answer_input.val();
            if (this.answer_input_value.length) {
                this.answer_length_label.html(141 - this.answer_input_value.length)
            } else {
                this.answer_length_label.html()
            }
        },
        submit: function(g) {
            g.preventDefault();
            g.stopPropagation();
            var f = d(g.currentTarget).attr("data-post-id");
            if (f) {
                this.answer(f)
            }
        },
        answer: function(f) {
            d("#answer_form_" + f + " [name=redirect_to]").remove();
            var h = "#answer_container_" + f;
            var g = d(h)[0];
            var m = g.children[0].className;
            var l = d("#answer_text_" + f)[0];
            var k = g.querySelector(".answer_avatar").outerHTML;
            var j = d("#answer_form_" + f).serialize();
            if (!l.value) {
                return 
            }
            window.increment_note_count(f);
            d(g).addClass("updating");
            l.disabled = true;
            var i = d.ajax({
                url: "/answer",
                data: j,
                type: "post"
            });
            i.fail(function() {
                Tumblr.Dialog.alert(c.ajax_error)
            });
            i.done(function() {
                setTimeout(function() {
                    g.innerHTML = '<div class="' + m + '">' + k + ' <span class="answer_body">' + l.value.replace("<", "&lt;") + "</span></div>";
                    d(g).addClass("updated")
                }, 500)
            })
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_remove_tumblelog_posts.js */
(function(c, d, b, a) {
    a.remove_tumblelog_posts = function(f) {
        var e = c(".post_tumblelog_" + f);
        e.fadeOut(500, function() {
            e.remove()
        })
    }
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_exif_flip.js */
(function(c, d, b, a) {
    a.ExifFlipcards = d.View.extend({
        el: "#posts",
        events: {
            "click .photo_exif_flipper": "flip"
        },
        flip: function(g) {
            g.preventDefault();
            g.stopPropagation();
            var f = c(g.currentTarget).parents(".flipcard");
            f.addClass("initialized");
            b.defer(function() {
                f.toggleClass("reveal_back")
            })
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/post_private_share.js */
(function(c, d, b, a) {
    a.SharePrivatePost = d.View.extend({
        el: "#posts",
        events: {
            "click .share_private": "toggle"
        },
        toggle: function(h) {
            h.preventDefault();
            var f = c(h.currentTarget).parents("li").attr("data-post-id");
            var g = c("#share_" + f);
            g.toggle()
        }
    })
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/postmessage_listener.js */
(function(c, d, b, a) {
    a.LoggingPostMessage = d.View.extend({
        initialize: function() {
            this._listen()
        },
        handler_embed_focus: function(e) {
            if (!b.isObject(e)) {
                return 
            }
            if (!e.service_name ||!e.post_id) {
                return 
            }
            Tumblr.Events.trigger("post:embed:focus", {
                embedData: e,
                loggingData: {
                    postData: this.getPostData(e.post_id),
                    service: e.service_name
                }
            })
        },
        getPostData: function(e) {
            return this.postData || (this.postData = c("#post_" + e).data("json"))
        },
        _listen: function() {
            var e = this._listen_handler;
            c(window).on("message.PmEvent", b.bind(e, this))
        },
        _listen_handler: function(h) {
            var j = h.originalEvent;
            var k = false;
            if (b.isString(j.data)) {
                k = j.data
            }
            if (!k || (k.indexOf("PmEvent;") !== 0)) {
                return 
            }
            var g = k.split(";");
            if ((g.length < 3) ||!b.isFunction(this["handler_" + g[1]])) {
                return false
            }
            var f = k.substr(g[0].length + g[1].length + 2, k.length);
            var i = f;
            if (f.indexOf("{") === 0) {
                try {
                    i = JSON.parse(f)
                } catch (j) {
                    i = f
                }
            }
            this["handler_" + g[1]](i)
        }
    })
}(jQuery, Backbone, _, Tumblr));
/*! scripts/application/logging/ads/models/post.js */
Tumblr.Logging || (Tumblr.Logging = {});
(function(d, c, e, b) {
    var a = e.Model.extend({
        idAttribute: "serve-id",
        defaults: {
            pt_sent: {},
            mb_sent: false
        }
    });
    b.PostModel = a
})(jQuery, _, Backbone, Tumblr.Logging);
/*! scripts/application/logging/ads/collections/posts.js */
Tumblr.Logging || (Tumblr.Logging = {});
(function(d, c, e, b) {
    var a = e.Collection.extend({
        model: b.Post,
        initialize: function(g, f) {
            f = f || {}
        }
    });
    b.PostsCollection = a
})(jQuery, _, Backbone, Tumblr.Logging);
/*! scripts/application/logging/ads/views/logging.js */
Tumblr.Logging || (Tumblr.Logging = {});
(function(c, h, i, b) {
    var d = Tumblr.Logging;
    var g = d.PostModel;
    var e = d.PostsCollection;
    var a = function(k, n, l, m) {
        var j = k.get(n);
        var o = i.cloneDeep(j);
        o[l] = m;
        k.set(n, o)
    };
    var f = function(j, l, k) {
        return j.get(l)[k]
    };
    b.Ads = h.View.extend({
        initialize: function() {
            this.blacklisted_beacon_actions = {
                popover_menu: true,
                popover_follow: true,
                popover_unfollow: true,
                popover_blog: true,
                popover_avatar: true,
                video_auto_play: true,
                video_stop: true,
                video_mute: true,
                video_restart: true,
                video_loop: true,
                video_auto_dock: true,
                video_dock_dismiss: true,
                video_fullscreen_dismiss: true,
                hover: true,
                click_thru: true
            };
            this.dupedEvents = ["video_play", "video_auto_play", "video_stop", "video_auto_stop", "video_scrub_stop", "video_loop"];
            this.postsCollection = new e();
            this.listenTo(Tumblr.Events, "useraction:video:play", i.bind(this.onVideoPlay, this));
            this.listenTo(Tumblr.Events, "post:embed:stateChange", i.bind(this.prepVideoPlay, this));
            this.listenTo(Tumblr.Events, "useraction:audio:play", i.bind(this.onAudioPlay, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:tag_click", i.bind(this.onSearchTagClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:permalink", i.bind(this.onSearchPermalinkClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:lightbox", i.bind(this.onSearchBlogClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:caption", i.bind(this.onSearchCaptionClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:media", i.bind(this.onSearchMediaClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:share", i.bind(this.onSearchShareClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:notes", i.bind(this.onSearchNotesClick, this));
            this.listenTo(Tumblr.Events, "useraction:search_click:remnant", i.bind(this.onRemnantClick, this));
            this.listenTo(Tumblr.Events, "search:blog:click:posts_click", i.bind(this.onSearchBlogCardClick, this));
            this.listenTo(Tumblr.Events, "useraction:hover:dot", i.bind(this.onDotHover, this));
            this.listenTo(Tumblr.Events, "useraction:click:dot", i.bind(this.onDotClick, this));
            this.listenTo(Tumblr.Events, "useraction:click:dot_blog", i.bind(this.onDotBlogClick, this));
            this.listenTo(Tumblr.Events, "temp:peepr:open:tumblelog", i.bind(this.peeprOpen, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:play", i.bind(this.onVideoPlayerPlay, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:autoplay", i.bind(this.onVideoPlayerAutoPlay, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:pause", i.bind(this.onVideoPlayerPause, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:muted", i.bind(this.onVideoPlayerVolume, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:fullscreen", i.bind(this.onVideoPlayerFullscreen, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:looped", i.bind(this.onVideoPlayerLooped, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:seek", i.bind(this.onVideoPlayerSeek, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:restart", i.bind(this.onVideoPlayerRestart, this));
            this.listenTo(Tumblr.Events, "VideoPlayer:resolutionchange", i.bind(this.onVideoPlayerResolutionChange, this));
            this.listenTo(Tumblr.Events, "post:docked", i.bind(this.onVideoPlayerDocked, this));
            this.listenTo(Tumblr.Events, "post:undocked", i.bind(this.onVideoPlayerUndocked, this))
        },
        onVideoPlay: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onAudioPlay: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onSearchTagClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.userAction = "tags";
            this.doLog()
        },
        onSearchBlogClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.userAction = "posts";
            this.doLog()
        },
        onSearchPermalinkClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onSearchCaptionClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onSearchMediaClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.userAction = "photo";
            this.doLog()
        },
        onSearchShareClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onSearchNotesClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onSearchBlogCardClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onRemnantClick: function(k) {
            var j = i.cloneDeep(k.loggingData);
            var l = j.userAction || "unknown";
            var m = j.pt || null;
            this.userAction = l;
            this.hasServeId=!!(m);
            this.model = (m) ? this.postsCollection.get(m) : null;
            if (!this.model) {
                this.model = new g({
                    pt: m,
                    "serve-id": m
                });
                this.postsCollection.push(this.model)
            }
            this.doLog()
        },
        peeprOpen: function(j) {
            Tumblr.TumblelogLightbox.open_tumblelog(j)
        },
        onDotClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onDotHover: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onDotBlogClick: function(j) {
            this.preLogSetup(j.loggingData);
            this.doLog()
        },
        onVideoPlayerPlay: function(j) {
            this.onVideoEvent("video_play", j)
        },
        onVideoPlayerAutoPlay: function(j) {
            this.onVideoEvent("video_auto_play", j)
        },
        onVideoPlayerPause: function(j) {
            this.onVideoEvent("video_stop", j)
        },
        onVideoPlayerVolume: function(j) {
            this.onVideoEvent((j.loggingData.muted ? "video_mute" : "video_unmute"), j)
        },
        onVideoPlayerFullscreen: function(j) {
            this.onVideoEvent((j.loggingData.fullscreen ? "video_fullscreen" : "video_fullscreen_dismiss"), j)
        },
        onVideoPlayerLooped: function(j) {
            this.onVideoEvent("video_loop", j)
        },
        onVideoPlayerSeek: function(j) {
            this.onVideoEvent("video_scrub_stop", j)
        },
        onVideoPlayerDocked: function(j) {
            this.onVideoEvent((j.loggingData.autodocked ? "video_auto_dock" : "video_dock"), j)
        },
        onVideoPlayerUndocked: function(j) {
            this.onVideoEvent("video_dock_dismiss", j)
        },
        onVideoPlayerRestart: function(j) {
            this.onVideoEvent("video_restart", j)
        },
        onVideoPlayerResolutionChange: function(j) {
            this.onVideoEvent("video_resolution_change", j)
        },
        onVideoEvent: function(l, n) {
            var m = n.loggingData;
            if (!m.post_id) {
                return 
            }
            var j = c("#post_" + m.post_id) || c('.post[data-post-id="' + m.post_id + '"]');
            var k = j.data("json");
            n.loggingData = i.extend(n.loggingData, {
                postData: k,
                userAction: l
            });
            this.preLogSetup(m);
            this.model.set({
                video_duration: m.duration,
                video_progress: m.position
            });
            if (l === "video_scrub_stop" || l === "video_restart") {
                this.model.set({
                    video_scrub_start: m.start,
                    video_scrub_end: m.end
                })
            }
            if (l === "video_resolution_change") {
                this.model.set({
                    video_resolution: m.resolution
                })
            }
            this.doLog()
        },
        prepVideoPlay: function(k) {
            var j = k.loggingData;
            if (j.service === "tumblr") {
                return 
            }
            if (j.state === "focus" || j.state === "playing") {
                if (!j.postID) {
                    return 
                }
                var k = {
                    loggingData: {
                        postData: this.get$EmbedPost(j.embedID).data("json") || {},
                        userAction: "video"
                    }
                };
                this.onVideoPlay(k)
            }
        },
        get$EmbedPost: function(j) {
            return c("#" + j).closest(".post")
        },
        preLogSetup: function(k) {
            var l = k.userAction || "unknown";
            var j = k.postData || {};
            this.userAction = l;
            this.hasServeId=!!(j["serve-id"]);
            if (this.hasServeId) {
                this.model = this.getPostModel(j)
            } else {
                this.model = this.getPostModel({})
            }
        },
        getPostModel: function(j) {
            var l = j["serve-id"];
            var k = (l) ? this.postsCollection.get(l): null;
            if (!k) {
                k = new g(j);
                this.postsCollection.push(k)
            }
            if (!k.get("pt") && j.pt) {
                k.set("pt", j.pt)
            }
            return k
        },
        shouldLogPost: function() {
            return ((!!this.model.get("pt")) && (!f(this.model, "pt_sent", this.userAction)))
        },
        shouldLogMB: function() {
            return !!this.model.get("mb-click-url")&&!this.model.get("mb_sent")&&!Tumblr.Flags.bool("is_admin")&&!this.beaconBlacklistedAction()
        },
        beaconBlacklistedAction: function() {
            return this.blacklisted_beacon_actions[this.userAction] || false
        },
        prepPayload: function() {
            var j = {
                action: this.userAction,
                pt: this.model.get("pt")
            };
            if (this.userAction.lastIndexOf("video_", 0) === 0) {
                i.extend(j, {
                    video_details: this.prepVideoPayload(this.userAction)
                })
            }
            if (this.shouldLogMB()) {
                i.extend(j, {
                    post_id: this.model.get("post-id"),
                    type: 623,
                    placement_id: this.model.get("placement-id") || "",
                    beacon: this.model.get("mb-click-url") || ""
                })
            }
            return j
        },
        prepVideoPayload: function(k) {
            var j = {};
            i.extend(j, {
                duration: this.model.get("video_duration"),
                progress: this.model.get("video_progress"),
                timestamp: new Date().getTime()
            });
            if (k === "video_scrub_stop" || k === "video_restart") {
                i.extend(j, {
                    start: this.model.get("video_scrub_start"),
                    end: this.model.get("video_scrub_end")
                })
            }
            if (k === "video_resolution_change") {
                i.extend(j, {
                    resolution: this.model.get("video_resolution")
                })
            }
            return j
        },
        doLog: function() {
            if (!this.model ||!this.model.get("serve-id")) {
                return 
            }
            try {
                if (!this.shouldLogPost()) {
                    return 
                }
                if (this.shouldLogMB()) {
                    this.doBeacon()
                }
                this.$xhr = c.ajax({
                    url: "/svc/log/yx",
                    type: "POST",
                    data: this.prepPayload(),
                    with_form_key: true,
                    async: false
                }).success(i.bind(function() {
                    if (this.shouldLogMB()) {
                        this.model.set("mb_sent", true)
                    }
                    if (i.contains(this.dupedEvents, this.userAction)) {
                        return 
                    }
                    a(this.model, "pt_sent", this.userAction, true)
                }, this))
            } catch (j) {
                this.error.yxFailure(j)
            }
        },
        doBeacon: function() {
            var k = this.model.get("mb-click-url") || false;
            if (k) {
                var j = document.createElement("img");
                j.src = k
            }
            Tumblr.ImpressionTracking.log_impression(this.$el)
        },
        doLogExternal: function(k, l) {
            if (k) {
                var j = this.get$postForExternalLog(k);
                if (j.length) {
                    var m = {
                        postData: j.data("json") || {},
                        userAction: l || "unknown"
                    };
                    this.preLogSetup(m);
                    this.doLog()
                } else {
                    this.error.noExternalPostFound(k)
                }
            } else {
                this.error.noExternalId(k, l)
            }
        },
        get$postForExternalLog: function(j) {
            return c('[data-serve-id="' + j + '"]')
        },
        error: {
            noExternalPostFound: function(j) {
                Tumblr.Utils.exceptions(new Error("Tumblr.Logging.Ads - could not find post with externalServeId: " + (j || 0)))
            },
            noExternalId: function(k, j) {
                Tumblr.Utils.exceptions(new Error('Tumblr.Logging.Ads - doLogExternal failed with action "' + j + '" and serveId "' + k + '."'))
            },
            yxFailure: function(j) {
                Tumblr.Utils.exceptions(new Error('Tumblr.Logging.Ads - yx xhr failure: "' + j))
            }
        }
    })
}(jQuery, Backbone, _, Tumblr.Logging));
/*! scripts/application/logging/ads/index.js */
(function(b, a) {
    b(function(c) {
        a.Logging.ads = new a.Logging.Ads()
    })
})(jQuery, Tumblr);
/*! scripts/application/legacy_post_like.js */
(function(d, e, g, c) {
    var a = window.l10n_str || {};
    function b(l, m, o) {
        var j = (o == null) ? d("#like_form_" + l): d("#" + o), k;
        if (!j.length) {
            return 
        }
        k = j.attr("action");
        if (typeof m === "undefined") {
            f(l)
        } else {
            m()
        }
        var n = d.ajax({
            url: k,
            data: j.serialize(),
            type: "post"
        });
        n.fail(function() {
            Tumblr.Dialog.alert(a.ajax_error)
        })
    }
    function f(m) {
        var n = d("#like_button_" + m);
        var k = d("#like_form_" + m);
        var j = n.hasClass("already_like");
        var l = k.attr("action");
        d("#post_" + m).addClass("force_redraw");
        d("#post_" + m)[0].offsetHeight;
        d("#post_" + m).removeClass("force_redraw");
        var o = n.attr("data-root-post-id") || false;
        if (j) {
            n.removeClass("already_like");
            k.attr("action", l.replace("/unlike", "/like"));
            i(m);
            if (o) {
                d(".like_root_" + o).removeClass("already_like")
            }
        } else {
            n.addClass("already_like");
            k.attr("action", l.replace("/like", "/unlike"));
            h(m);
            if (o) {
                d(".like_root_" + o).addClass("already_like")
            }
        }
    }
    function h(j) {
        if (!(d("#notes_outer_container_" + j)[0] && d("#show_notes_link_" + j)[0] && d("#note_link_more_" + j)[0] && d("#note_link_less_" + j)[0] && d("#note_link_current_" + j)[0])) {
            return false
        }
        d("#show_notes_link_" + j).show();
        if (d("#note_link_less_" + j).is(":visible")) {
            d("#note_link_less_" + j).hide();
            d("#note_link_current_" + j).show();
            d("#note_link_more_" + j).hide()
        } else {
            d("#note_link_less_" + j).hide();
            d("#note_link_current_" + j).hide();
            d("#note_link_more_" + j).show()
        }
    }
    function i(j) {
        if (!(d("#show_notes_link_" + j)[0] && d("#note_link_more_" + j)[0] && d("#note_link_less_" + j)[0] && d("#note_link_current_" + j)[0])) {
            return false
        }
        d("#show_notes_link_" + j).show();
        if (d("#note_link_more_" + j).is(":visible")) {
            d("#note_link_less_" + j).hide();
            d("#note_link_current_" + j).show();
            d("#note_link_more_" + j).hide()
        } else {
            d("#note_link_less_" + j).hide();
            d("#note_link_current_" + j).hide();
            d("#note_link_less_" + j).show()
        }
    }
    c.like_post = b;
    window.increment_note_count = h;
    window.decrement_note_count = i
})(jQuery, Backbone, _, Tumblr);
/*! scripts/application/yvp.js */
(function(b, a) {
    a.YVP = {
        init: function() {
            var c = b("#new_post_label_video[data-js-yvp-video]");
            if (c.length) {
                c.on("click", function(d) {
                    d.stopPropagation();
                    d.preventDefault();
                    window.location = c.attr("href")
                })
            }
        }
    };
    a.YVP.Auth = {
        init: function() {
            b("#tripleplay_tos").click(function() {
                var c = b("#allow");
                if (c.attr("disabled")) {
                    c.removeAttr("disabled")
                } else {
                    c.attr("disabled", "disabled")
                }
            })
        }
    }
})(jQuery, Tumblr);
/*! scripts/jquery.application.js */
(function(b, a) {
    b(document).ready(function(c) {
        a.LinkButton.init();
        a.PhotoReply.init();
        a.Panos.init();
        a.ReplyButtons.init();
        a.ReblogButtons.init();
        a.ShareButtons.init();
        a.PlaceHolders.init();
        a.YVP.init();
        new a.Tabs();
        new a.PostVideoEmbedToggle({
            el: c("#posts")
        });
        new a.PostInlineImageToggle({
            el: c("#posts")
        });
        new a.BlogMenu();
        new a.DashboardLinkPops();
        new a.LanguageMenu({
            el: "#language_switcher"
        });
        new a.LegalPopover({
            el: "#popover_legal"
        });
        new a.ReportTumblelogView();
        new a.FullHeightNoPostsFound();
        new a.PushButtons();
        new a.Notifications();
        new a.DraggableTags();
        new a.ExifFlipcards();
        new a.AnswerPost();
        new a.SharePrivatePost();
        new a.Notes();
        new a.PostControls();
        new a.ActivitySparkline();
        new a.devicePixelRatio();
        new a.documentWidth();
        new a.LoggingPostMessage();
        new a.TumblelogPopover();
        a.TumblelogDrawer = new a.Peepr();
        new a.Popover({
            el: "#analytics_popover",
            glassless: true
        })
    })
})(jQuery, Tumblr);
/*! scripts/tumblr/auto_paginator.js */
(function(f, e, l, m) {
    var j = {
        start: function() {
            k = 3;
            Tumblr.Events.on("DOMEventor:flatscroll", h)
        },
        stop: function() {
            window.loading_next_page = false;
            Tumblr.Events.off("DOMEventor:flatscroll", h)
        },
        flushQueue: function() {
            d()
        }
    };
    m.extend(j, l.Events);
    var k = 3;
    window.loading_next_page = false;
    function h(o) {
        if (!window.next_page) {
            if (f("#auto_pagination_loader").is(":visible")) {
                f("#auto_pagination_loader").hide()
            }
            j.stop();
            return 
        }
        if (window.loading_next_page) {
            return 
        }
        if ((o.documentHeight - o.windowScrollY) < o.windowHeight * 3) {
            window.loading_next_page = true;
            j.trigger("before", window.next_page);
            f("#auto_pagination_loader_loading").show();
            f("#auto_pagination_loader_failure").hide();
            c()
        }
    }
    function a() {
        k--;
        var o = f.ajax({
            url: window.next_page,
            type: "get"
        });
        o.done(function(q) {
            b(q);
            var p = o.getResponseHeader("X-next-page");
            if (p) {
                window.next_page = p
            } else {
                window.next_page = q.match('id="next_page_link" href="') ? q.split('id="next_page_link" href="')[1].split('"')[0] : false;
                if (!window.next_page) {
                    j.stop()
                }
            }
            f("#auto_pagination_loader_loading").hide()
        });
        o.fail(function() {
            if (k) {
                a()
            } else {
                i()
            }
        })
    }
    function b(q) {
        if (q.indexOf('<script type="text/javascript" language="javascript" src="http://assets.tumblr.com/languages/errors.js')!==-1) {
            j.stop();
            return false
        }
        var p;
        if (q.indexOf("<!-- START POSTS -->")===-1) {
            p = q
        } else {
            p = q.split("<!-- START POSTS -->")[1].split("<!-- END POSTS -->")[0]
        }
        var o = f(f.trim(p)).not(":empty");
        f("#posts").append(o);
        Tumblr.Events.trigger("DOMEventor:updateRect");
        window.loading_next_page = false;
        setTimeout(function() {
            if (typeof window.after_auto_paginate === "function") {
                window.after_auto_paginate()
            }
            d();
            j.trigger("after", window.next_page)
        }, 0)
    }
    function i() {
        j.stop();
        f("#auto_pagination_loader_loading").hide();
        f("#auto_pagination_loader_failure").show()
    }
    var n = [];
    function d() {
        for (var o = n.length - 1; o >= 0; o--) {
            if (typeof(n[o]) === "function") {
                n[o]()
            }
        }
    }
    function g() {
        k--;
        var o = window.next_page;
        if (!o.match(/^\/dashboard/)) {
            return a()
        }
        o = o.replace("/dashboard", "/svc/dashboard");
        o += "/posts";
        var p = f.ajax({
            url: o,
            type: "get"
        });
        p.done(function(q) {
            window.next_page = q.meta.tumblr_old_next_page;
            b(q.response.DashboardPosts.body);
            if (q.response.RecommendedBlog) {
                Tumblr.Events.trigger("component:RecommendedBlog", q.response.RecommendedBlog)
            }
            f("#auto_pagination_loader_loading").hide()
        });
        p.fail(function() {
            if (k) {
                g()
            } else {
                i()
            }
        })
    }
    var c = Tumblr.Flags.bool("json_ajax_dashboard") ? g: a;
    e.AutoPaginator = j;
    window.AfterAutoPaginationQueue = n
})(jQuery, Tumblr, Backbone, _);
/*! scripts/plexi.js */
(function(c, a) {
    var b = function(d) {
        if (!(this instanceof b)) {
            return new b(d)
        }
        this.token = d.token || "";
        if (d.instance) {
            this.instance = d.instance;
            this.$instance = c(d.instance)
        }
        this.hide_timeout = null;
        this.transition_class = null;
        this.$hide_timeout = null;
        b.register(this)
    };
    b.prototype = {
        create: function(e, f) {
            f = f || {};
            var d = c(e);
            this.$instance = c("<div/>", {
                "data-token": this.token,
                "class": "plexi"
            });
            this.instance = this.$instance.get(0);
            if (f.cssClass) {
                this.$instance.addClass(f.cssClass)
            }
            d.append(this.$instance)
        },
        show: function(d) {
            d = d || {};
            this.transition_class = d.transition_class || false;
            if (!this.$instance.hasClass("instant")) {
                this.$instance.addClass("active")
            }
            setTimeout(c.proxy(function() {
                clearTimeout(this.$hide_timeout);
                if (this.transition_class) {
                    this.$instance.addClass(this.transition_class)
                }
                this.$instance.addClass("show");
                if (!this.$instance.hasClass("instant")) {
                    this.$instance.addClass("active")
                }
            }, this), 1)
        },
        hide: function() {
            this.$instance.removeClass("show");
            this.$hide_timeout = setTimeout(c.proxy(function() {
                this.$instance.removeClass("show instant active fast");
                if (this.transition_class) {
                    this.$instance.removeClass(this.transition_class)
                }
            }, this), 50)
        },
        destroy: function() {
            b.instances.splice(_.indexOf(this), 1);
            return this
        }
    };
    b.instances = [];
    b.register = function(d) {
        this.instances.push(d)
    };
    b.findByToken = function(f) {
        var d;
        for (var e = 0; e < this.instances.length; e++) {
            if (this.instances[e].token == f) {
                d = this.instances[e]
            }
        }
        if (!d) {
            var h = c('.plexi[data-token="' + f + '"]');
            if (h.length) {
                var g = new Tumblr.Plexi({
                    instance: h,
                    token: f
                });
                this.instances.push(g);
                return g
            }
        }
        return d
    };
    a.Plexi = b
})(jQuery, Tumblr);
/*! scripts/sortable.js */
(function(c, b) {
    var a = Backbone.View.extend({
        initialize: function(d) {
            this.options = d || {};
            d.items || (d.items = ".item");
            this.callback = d.callback || function() {};
            this.before = d.before || function() {};
            this.placeholder = null;
            this.on_dragenter = _.throttle(this.on_dragenter, 500);
            this.reloadItems()
        },
        events: function() {
            var d = this.options.items;
            var e = _(["dragstart", "dragenter", "dragover", "drop", "dragend"]).reduce(function(f, g) {
                f[g + " " + d] = "on_" + g;
                return f
            }, {});
            return _.extend(e, {})
        },
        on_dragstart: function(f) {
            f.originalEvent.dataTransfer.effectAllowed = "move";
            try {
                f.originalEvent.dataTransfer.setData("text/html", "foo")
            } catch (d) {}
            this.dragged = f.currentTarget;
            this.placeholder = c(this.dragged).clone().addClass("sortable-placeholder");
            if (!this.options.no_opacity) {
                this.placeholder.css("opacity", "0").find("*").css("opacity", "0")
            }
            this.placeholder = this.placeholder.get(0);
            this.$(this.dragged).addClass("sortable-dragging");
            this.before.call(this);
            this.trigger("dragstart", this);
            if (this.options.scrollable) {
                this.$el.on("dragover." + this.cid, _.throttle(function(k) {
                    var i = 0.2;
                    var h = window.innerHeight;
                    var g = k.originalEvent.clientY / h;
                    var j = this.getBoundingClientRect();
                    if (g < i && j.top < 0) {
                        window.scrollBy(0, - ((i - g) * 200))
                    } else {
                        if (g > (1 - i)) {
                            window.scrollBy(0, ((i + g - 1) * 200))
                        }
                    }
                    k.preventDefault()
                }, 50));
                this.$(this.dragged).one("dragend", _.bind(function() {
                    this.$el.off(["dragenter." + this.cid, "dragover." + this.cid].join(" "))
                }, this))
            }
        },
        on_dragenter: function(h) {
            if (!this.dragged) {
                return 
            }
            h.preventDefault();
            var g = h.currentTarget;
            if (g == this.placeholder) {
                return 
            }
            this.$(this.dragged).hide();
            var d = this.$(g).index(this.options.items);
            var f = this.$(this.placeholder).index(this.options.items);
            if (f < d) {
                this.$(g).after(this.placeholder)
            } else {
                this.$(g).before(this.placeholder)
            }
            this.last_droppable = g
        },
        on_dragover: function(d) {
            if (!this.dragged) {
                return 
            }
            d.preventDefault()
        },
        on_drop: function(d) {
            if (!this.dragged) {
                return 
            }
            d.stopPropagation();
            this.$(this.dragged).insertAfter(this.placeholder);
            return false
        },
        on_dragend: function(d) {
            this.$(this.dragged).removeClass("sortable-dragging").show();
            this.$(this.placeholder).detach();
            d.stopPropagation();
            this.callback(this);
            this.trigger("dragend", this);
            this.dragged = null;
            this.last_droppable = null
        },
        sequence: function() {
            var d = this.$(this.options.items).toArray();
            return _.uniq(_.pluck(d, "id"))
        },
        reloadItems: function() {
            this.items = this.$(this.options.items);
            this.items.attr("draggable", true);
            this.items.find("a").attr("draggable", false);
            this.items.find("img").attr("draggable", false);
            return this
        },
        disableItems: function() {
            this.items = this.$(this.options.items);
            this.items.attr("draggable", false);
            return this
        },
        teardown: function() {
            this.undelegateEvents();
            if (this.options.scrollable) {
                this.$el.off(["dragenter." + this.cid, "dragover." + this.cid].join(" "))
            }
            this.items.add("a, img", this.items).removeAttr("draggable");
            this.options.items = this.items = null;
            this.options.callback = this.callback = null;
            this.options.before = this.before = null;
            this.on_dragenter = null;
            return this
        },
    });
    b.SortableView = a
})(jQuery, Tumblr);
/*! scripts/toaster.js */
(function(c, b) {
    var a = Backbone.View.extend({
        el: "#toaster",
        debug_mode: false,
        defaults: {
            max_toast: 5,
            toast_padding: 623,
            away_speed: 350,
            close_buttons: false,
            queue_heartbeat: 1000,
            pause_on_hover: true,
            only_when_footer_hidden: true,
            token: null,
            disabled: false
        },
        default_toast: {
            id: null,
            type: "text",
            on_create: false,
            on_destory: false,
            animation: true,
            message: " ",
            img1: {
                url: null,
                badge: " ",
                is_link: false,
                href: "#"
            },
            img2: {
                url: null,
                badge: " ",
                is_link: false,
                href: "#"
            },
            icon: {
                type: "regular",
                href: "#"
            },
            notification: {
                object: null,
                title: "",
                body: "",
                icon: false
            },
            is_link: false,
            href: "#",
            position_class: "toast_only",
            close: false,
            expires: 7023,
            in_queue: false
        },
        toast_count: 0,
        toasts: {},
        desk_notify_support: false,
        page_visible: true,
        transition_support: true,
        is_ipad: false,
        toast_ids: [],
        queue_ids: [],
        paused: false,
        t_paused: null,
        unpause_expires: 2000,
        t_queue_heartbeat: null,
        toast_padding_mult: 0,
        push_lock: false,
        time_until_lock: 50,
        t_push_lock: null,
        footer_overlaps: false,
        templates: {
            text: '<li id="toast_<%- id %>" class="toast toast_text <%- position_class %>"><span class="toast_border"><span class="toast_outer"><span class="toast_inner"><% if (is_link === true) { %><a class="anchor" href="<%- href %>" target="blank"></a><% } %><span class="txt"><%= message %></span></span></span><% if (close === true) { %><span class="close"></span><% } %></span></li>',
            image_text: '<li id="toast_<%- id %>" class="toast toast_image_text <%- position_class %>"><span class="toast_border"><span class="toast_outer"><span class="toast_inner"><% if (is_link === true) { %><a class="anchor" href="<%- href %>" target="blank"></a><% } %><span class="frame box_left <%- img1.badge %>"><% if (img1.is_link === true) { %><a href="<%- img1.href %>" target="_blank"><% } %><img src="<%- img1.url %>" width="28" height="28" /><% if (img1.is_link === true) { %></a><% } %></span><span class="txt"><%= message %></span></span></span><% if (close === true) { %><span class="close"></span><% } %></span></li>',
            image_text_image: '<li id="toast_<%- id %>" class="toast toast_image_text_image <%- position_class %>"><span class="toast_border"><span class="toast_outer"><span class="toast_inner"><% if (is_link === true) { %><a class="anchor" href="<%- href %>" target="blank"></a><% } %><span class="frame box_left <%- img1.badge %>"><% if (img1.is_link === true) { %><a href="<%- img1.href %>" target="_blank"><% } %><img src="<%- img1.url %>" width="28" height="28" /><% if (img1.is_link === true) { %></a><% } %></span><span class="txt"><%= message %></span><span class="frame box_right <%- img2.badge %>"><% if (img2.is_link === true) { %><a href="<%- img2.href %>" target="_blank"><% } %><img src="<%- img2.url %>" width="28" height="28" /><% if (img2.is_link === true) { %></a><% } %></span></span></span><% if (close === true) { %><span class="close"></span><% } %></span></li>',
            image_text_icon: '<li id="toast_<%- id %>" class="toast toast_image_text_icon <%- position_class %>"><span class="toast_border"><span class="toast_outer"><span class="toast_inner"><% if (is_link === true) { %><a class="anchor" href="<%- href %>" target="blank"></a><% } %><span class="frame box_left <%- img1.badge %>"><% if (img1.is_link === true) { %><a href="<%- img1.href %>" target="_blank"><% } %><img src="<%- img1.url %>" width="28" height="28" /><% if (img1.is_link === true) { %></a><% } %></span><span class="txt"><%= message %></span><a class="frame box_right icon <%= icon.type %>" href="<%- icon.href %>"><span class="inside icon <%= icon.type %>"></span></a></span></span><% if (close === true) { %><span class="close"></span><% } %></span></li>'
        },
        events: {
            mouseover: "hover_in",
            mouseout: "hover_out"
        },
        initialize: function(d) {
            this.options = d || {};
            this.options = _.extend(this.defaults, this.options);
            this.debug_order = 0;
            if (this.options.only_when_footer_hidden) {
                this._sidebar_hide_helpers()
            }
            if (window.webkitNotifications || window.Notification) {
                this.desk_notify_support = true
            }
            c('<style type="text/css"> #toaster .toast .toast_border { background-color: ' + c("body").css("background-color") + " !important; } </style>").appendTo("head");
            var e = document.createElement("div").style;
            this.transition_support = "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e;
            this.is_ipad = (navigator.userAgent.match(/iPad/i) === null) ? false : true;
            this._queue_heartbeat();
            this._add_visibility_helper();
            return this
        },
        debug: function(d) {
            this.debug_mode = d;
            console.log("Debug mode is now " + (d ? "on" : "off") + ".")
        },
        tumblrbot: function(e) {
            var d = {
                type: "image_text",
                message: "<strong>" + e + "</strong>",
                is_link: false,
                href: "#",
                img1: {
                    url: "/images/toast_tumblrbot.png",
                    is_link: true,
                    href: "http://tumblrbot.tumblr.com/"
                }
            };
            this.add_toast(d)
        },
        disable: function() {
            this.options.disabled = true
        },
        enable: function() {
            this.options.disabled = false
        },
        can_display_toasts: function() {
            var d = c(window);
            if (this.options.disabled || d.innerHeight() < 400 || d.innerWidth() < 960) {
                return false
            }
            return this.page_visible
        },
        footer_will_overlap: function() {
            if (this.options.only_when_footer_hidden) {
                return this.footer_overlaps
            }
            return false
        },
        is_screen_full: function() {
            return (this.toast_ids.length >= this.options.max_toast)
        },
        is_screen_empty: function() {
            return (this.toast_ids.length === 0)
        },
        is_queue_empty: function() {
            return (this.queue_ids.length === 0)
        },
        _queue_heartbeat: function() {
            clearTimeout(this.t_queue_heartbeat);
            var d = function() {
                if (this.is_queue_empty() ||!this.is_screen_empty()) {
                    this._queue_heartbeat()
                } else {
                    this.push_lock = true;
                    var g = this.queue_ids.length;
                    this.toast_padding_mult = 0;
                    for (var e = 0; e <= g; e++) {
                        if ((e < this.options.max_toast) && (e < g)) {
                            var f = this.queue_ids[0];
                            this.queue_ids.splice(0, 1);
                            this.toast_ids.push(f);
                            this._delayed_add_toast_to_dom(f, (this.toast_padding_mult * this.options.toast_padding));
                            this.toast_padding_mult++
                        } else {
                            break
                        }
                    }
                    this._queue_heartbeat()
                }
            };
            this.t_queue_heartbeat = setTimeout(_.bind(d, this), this.options.queue_heartbeat)
        },
        _delayed_add_toast_to_dom: function(f, d) {
            var e = setTimeout(_.bind(function() {
                this._add_toast_to_dom(f)
            }, this), d)
        },
        _add_next_queue_item: function() {
            if (!this.is_queue_empty()) {
                var d = this.queue_ids[0];
                this.queue_ids.splice(0, 1);
                this.toast_ids.push(d);
                this._add_toast_to_dom(d);
                this._queue_heartbeat()
            }
        },
        add_toast: function(d) {
            var e = {};
            jQuery.extend(e, this.default_toast, d);
            this._toast(e)
        },
        _toast: function(e) {
            var f = this.toast_count++;
            var d = (this.push_lock ||!this.is_queue_empty() || this.is_screen_full());
            if (d) {
                this.queue_ids.push(f)
            } else {
                if (this.toast_ids.length === 0) {
                    this.toast_padding_mult = 0
                }
                this.toast_ids.push(f)
            }
            e = jQuery.extend(e, {
                id: f
            });
            var g = this._get_toast_template(e.type);
            $toast = c(g(e));
            this.toasts[f] = {
                id: f,
                $el: $toast,
                options: e,
                in_queue: d,
                t: null
            };
            if (!d) {
                setTimeout(_.bind(function() {
                    this._add_toast_to_dom(f)
                }, this), (this.toast_padding_mult * this.options.toast_padding));
                this.toast_padding_mult++;
                clearTimeout(this.t_push_lock);
                this.t_push_lock = setTimeout(_.bind(function() {
                    this.push_lock = true;
                    this.toast_padding_mult = 0
                }, this), this.time_until_lock)
            }
            return f
        },
        _add_toast_to_dom: function(d) {
            if (this.footer_will_overlap() ||!this.can_display_toasts() || typeof this.toasts[d] === "undefined") {
                this._nuke_toast(d);
                return 
            }
            this.toasts[d].t = this._set_toast_timeout(d);
            this.$el.append(this.toasts[d].$el);
            if (this.transition_support) {
                setTimeout(_.bind(function() {
                    this._update_position_helpers()
                }, this), 200)
            } else {
                this._update_position_helpers()
            }
            c("#toast_" + d).addClass("animation");
            setTimeout(function() {
                c("#toast_" + d).addClass("slide_open")
            }, 50);
            this._measure_helpers(d);
            this._click_helpers(d)
        },
        _sidebar_hide_helpers: function() {
            var e = c("#right_column");
            if (e.length !== 1) {
                return 
            }
            var f = e.outerWidth();
            var d = e.outerHeight();
            setInterval(_.bind(function() {
                var p = c(window).innerHeight();
                var n = window.pageYOffset;
                var m = n + p;
                var o = e.offset();
                var k = o.top;
                var h = o.top + d;
                if ((n + (p / 2.5)) < h) {
                    this.footer_overlaps = true;
                    for (var l = this.toast_ids.length - 1; l >= 0; l--) {
                        this.pop_toast(this.toast_ids[l])
                    }
                    for (var g = this.queue_ids.length - 1; g >= 0; g--) {
                        this._nuke_toast(this.queue_ids[g])
                    }
                    this._queue_heartbeat()
                } else {
                    this.footer_overlaps = false
                }
            }, this), 800)
        },
        _measure_helpers: function(d) {
            $txt = c("#toast_" + d + " .txt");
            if ($txt.length > 0) {
                var e = $txt.height();
                if (e > 0 && e <= 20) {
                    $txt.addClass("nowrap")
                }
            }
        },
        _click_helpers: function(d) {
            $anchor = c("#toast_" + d + " .anchor");
            if ($anchor.length > 0) {
                $anchor.on("mousedown", function() {
                    c("#toast_" + d).addClass("toast_active")
                });
                $anchor.on("click, mouseup, mouseleave", function() {
                    c("#toast_" + d).removeClass("toast_active")
                })
            }
        },
        reset_all_timeouts: function() {
            c.each(this_toast_ids, _.bind(function(e, d) {
                this._set_toast_timeout(d)
            }, this))
        },
        set_all_timeouts: function(d) {
            c.each(this.toast_ids, _.bind(function(f, e) {
                this.toasts[e].t = this._set_custom_toast_timeout(e, d)
            }, this))
        },
        hover_in: function() {
            if (this.is_ipad) {
                return 
            }
            clearTimeout(this.t_paused);
            if (!this.paused) {
                this._clear_all_timeouts()
            }
            this.paused = true;
            this.$el.addClass("hover")
        },
        hover_out: function() {
            if (this.is_ipad) {
                return 
            }
            this.t_paused = setTimeout(_.bind(function() {
                this.paused = false;
                this.$el.removeClass("hover");
                c.each(this.toast_ids, _.bind(function(f, e) {
                    var d = this.unpause_expires + (f * this.options.toast_padding);
                    this.toasts[e].t = this._set_custom_toast_timeout(e, d)
                }, this))
            }, this), 150)
        },
        pop_toast: function(e) {
            if (this.debug_mode || typeof this.toasts[e] === "undefined") {
                return 
            }
            clearTimeout(this.toasts[e].t);
            var d = jQuery.inArray(e, this.toast_ids);
            this.toast_ids.splice(d, 1);
            delete this.toasts[e];
            this._freeze_toast(e);
            this._animate_away(e);
            this._update_position_helpers();
            if (this.can_display_toasts()&&!this.footer_will_overlap() && (this.toast_ids.length == (this.options.max_toast - 1))) {
                this._add_next_queue_item()
            } else {
                this._queue_heartbeat()
            }
            clearTimeout(this.t_push_lock);
            if (this.is_screen_empty()) {
                this.push_lock = false
            }
        },
        _nuke_all_toast: function() {
            c.each(this.toasts, _.bind(function(e, d) {
                this._nuke_toast(d.id)
            }, this));
            this._queue_heartbeat()
        },
        _nuke_toast: function(e) {
            var d = jQuery.inArray(e, this.toast_ids);
            if (d!==-1) {
                this.toast_ids.splice(d, 1)
            }
            var f = jQuery.inArray(e, this.queue_ids);
            if (f!==-1) {
                this.queue_ids.splice(f, 1)
            }
            if (d!==-1 || f!==-1) {
                clearTimeout(this.toasts[e].t);
                delete this.toasts[e];
                var g = c("#toast_" + e);
                if (g.length > 0) {
                    g.remove()
                }
            }
            this._update_position_helpers();
            return 
        },
        _clear_all_timeouts: function() {
            c.each(this.toast_ids, _.bind(function(e, d) {
                clearTimeout(this.toasts[d].t)
            }, this))
        },
        _animate_away: function(e) {
            var d = c("#toast_" + e);
            if (d.length === 0) {
                return 
            }
            c("#toast_" + e).addClass("fade_out");
            setTimeout(function() {
                c("#toast_" + e).remove()
            }, (this.options.away_speed + 15))
        },
        _freeze_toast: function(d) {
            var l = c("#toast_" + d);
            if (l.length === 0) {
                return 
            }
            var e = l.position();
            var j = c("#toaster").height();
            var h = l.outerHeight();
            var i = l.width();
            var k = l.height();
            var g = e.top;
            var f = e.left;
            l.css({
                position: "absolute",
                bottom: (j - h) + "px",
                left: f + "px",
                width: i,
                height: k
            })
        },
        _get_toast_template: function(d) {
            return _.template(this.templates[d])
        },
        _toast_expire: function(d) {
            this.pop_toast(d)
        },
        _add_visibility_helper: function() {
            var g, h, f = {
                hidden: "visibilitychange",
                mozHidden: "mozvisibilitychange",
                webkitHidden: "webkitvisibilitychange",
                msHidden: "msvisibilitychange",
                oHidden: "ovisibilitychange"
            };
            for (g in f) {
                if (f.hasOwnProperty(g) && g in document) {
                    h = f[g];
                    break
                }
            }
            if (h) {
                document.addEventListener(h, e)
            } else {
                if (c.browser.msie && (parseInt(c.browser.version, 10) <= 9)) {
                    document.onfocusin = document.onfocusout = e
                } else {
                    window.onfocus = window.onblur = e
                }
            }
            var d = this;
            function e(j) {
                var i = document.body;
                j = j || window.event;
                if (j.type == "focus" || j.type == "focusin") {
                    d.page_visible = true
                } else {
                    if (j.type == "blur" || j.type == "focusout") {
                        d.page_visible = false
                    } else {
                        d.page_visible = this[g] ? false : true
                    }
                }
            }
        },
        _set_toast_timeout: function(d) {
            if (typeof this.toasts[d] != "object") {
                return null
            }
            return this._set_custom_toast_timeout(d, this.toasts[d].options.expires)
        },
        _set_custom_toast_timeout: function(f, d) {
            if (typeof this.toasts[f] != "object") {
                return null
            }
            clearTimeout(this.toasts[f].t);
            var e = function() {
                this._toast_expire(f)
            };
            return setTimeout(_.bind(e, this), d)
        },
        _update_position_helpers: function() {
            var f = 0;
            var d = 0;
            for (var e = this.toast_ids.length - 1; e >= 0; e--) {
                if (c("#toast_" + this.toast_ids[e]).is(":visible")) {
                    d++
                }
            }
            c.each(this.toast_ids, function(h, g) {
                $this_toast = c("#toast_" + g);
                if ($this_toast.length > 0) {
                    $this_toast.removeClass("toast_only toast_top toast_bottom toast_middle");
                    if (d == 1) {
                        $this_toast.addClass("toast_only")
                    } else {
                        if (f === 0) {
                            $this_toast.addClass("toast_top")
                        } else {
                            if (f === (d - 1)) {
                                $this_toast.addClass("toast_bottom")
                            } else {
                                $this_toast.addClass("toast_middle")
                            }
                        }
                    }
                    f++
                }
            })
        }
    });
    b.Toaster = a
})(jQuery, Tumblr);
(function(c, a) {
    var b = Backbone.Model.extend({
        translations: {},
        add_translations: function(d) {
            jQuery.extend(this.translations, d)
        },
        unset_translations: function() {
            this.translations = {}
        },
        __: function(d) {
            return this.translations[d] || d
        },
        _helper_icon_target_type: function(d) {
            return d.target_post_type
        },
        _helper_media_url: function(d) {
            return d.media_url
        },
        _helper_from_tumblelog_link: function(d) {
            var e = d.from_tumblelog_name;
            if (d.from_tumblelog_name.length > 14) {
                e = d.from_tumblelog_name.substr(0, 14) + "..."
            }
            return '<a href="' + d.from_tumblelog_url + '" target="_blank">' + e + "</a>"
        },
        _helper_other_user_badge: function(d) {
            var e = d.type;
            if (e === "answer") {
                e = "reply"
            }
            if (e === "photo_reply") {
                e = "reply"
            }
            return e
        },
        _helper_blockquote: function(d) {
            return "<blockquote>" + _.escape(d) + "</blockquote>"
        },
        _helper_is_empty: function(d) {
            return (d === "")
        },
        _helper_has_reply: function(d) {
            if ((typeof d.quote_summary == "string")&&!this._helper_is_empty(d.quote_summary)) {
                return true
            } else {
                return false
            }
        },
        _helper_summary_txt: function(d) {
            if ((typeof d.summary == "string")&&!this._helper_is_empty(d.summary)) {
                return ": <em>" + _.escape(d.summary) + "</em>"
            } else {
                return ""
            }
        },
        _helper_post_noun: function(d) {
            return d.noun_type == "question" ? "post" : d.noun_type
        },
        _base_other_user_action: function(d) {
            var g = {
                img1: {
                    url: d.from_tumblelog_avatar,
                    badge: this._helper_other_user_badge(d),
                    is_link: true,
                    href: d.from_tumblelog_url
                }
            };
            var f = {};
            if (d.type == "follower" || d.type == "user_mention") {
                f = {
                    type: "image_text"
                }
            } else {
                if (d.type == "photo_reply") {
                    f = {
                        type: "image_text_image",
                        img2: {
                            url: d.photo_reply_url,
                            is_link: true,
                            href: d.target_post_url
                        }
                    }
                } else {
                    if (d.target_post_type == "photo") {
                        f = {
                            type: "image_text_image",
                            img2: {
                                url: this._helper_media_url(d),
                                is_link: true,
                                href: d.target_post_url
                            }
                        }
                    } else {
                        f = {
                            type: "image_text_icon",
                            icon: {
                                type: this._helper_icon_target_type(d),
                                href: d.target_post_url
                            }
                        }
                    }
                }
            }
            var e = {};
            jQuery.extend(e, g, f);
            return e
        },
        notification_center_convert: function(f, d) {
            var e = {
                type: "image_text",
                message: "<strong>" + f + "</strong>",
                is_link: true,
                href: d.url,
                img1: {
                    url: d.tumblelog.avatar,
                    is_link: true,
                    href: d.tumblelog.url
                }
            };
            return e
        },
        like: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s liked your " + this._helper_post_noun(d);
            g = this.__(g).replace("%1$s", this._helper_from_tumblelog_link(d));
            var f = {
                message: g,
                is_link: true,
                href: d.target_post_url
            };
            jQuery.extend(f, e);
            return f
        },
        reblog: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s reblogged your " + this._helper_post_noun(d);
            g += this._helper_has_reply(d) ? " and added:" : "";
            g = this.__(g).replace("%1$s", this._helper_from_tumblelog_link(d));
            if (this._helper_has_reply(d)) {
                g += this._helper_blockquote(d.quote_summary)
            }
            var f = {
                message: g,
                is_link: true,
                href: d.new_post_url
            };
            jQuery.extend(f, e);
            return f
        },
        ask_answer: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s answered your ask";
            g = this.__(g).replace("%1$s", this._helper_from_tumblelog_link(d));
            g += this._helper_summary_txt(d);
            if (d.answer_text) {
                g += this._helper_blockquote(d.answer_text)
            }
            var f = {
                message: g,
                is_link: true,
                href: d.target_post_url
            };
            jQuery.extend(f, e);
            return f
        },
        answer: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s answered your question";
            g = this.__(g).replace("%1$s", this._helper_from_tumblelog_link(d));
            g += this._helper_summary_txt(d);
            if (d.answer_text) {
                g += this._helper_blockquote(d.answer_text)
            }
            var f = {
                message: g,
                is_link: true,
                href: d.target_post_url
            };
            jQuery.extend(f, e);
            return f
        },
        reply: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s replied to your " + this._helper_post_noun(d);
            g = this.__(g).replace("%1$s", this._helper_from_tumblelog_link(d));
            g += this._helper_summary_txt(d) + this._helper_blockquote(d.reply_text);
            var f = {
                message: g,
                is_link: true,
                href: d.target_post_url
            };
            jQuery.extend(f, e);
            return f
        },
        photo_reply: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s replied to your " + this._helper_post_noun(d);
            g = this.__(g).replace("%1$s", this._helper_from_tumblelog_link(d));
            g += this._helper_summary_txt(d);
            var f = {
                message: g,
                is_link: true,
                href: d.target_post_url
            };
            jQuery.extend(f, e);
            return f
        },
        follower: function(d) {
            var e = this._base_other_user_action(d);
            var g = "%1$s started following %2$s";
            if (this.has("primary_tumblelog")) {
                if (this.get("primary_tumblelog") == d.target_tumblelog_name) {
                    g = "%1$s started following you"
                }
            }
            g = this.__(g);
            g = g.replace("%1$s", this._helper_from_tumblelog_link(d));
            g = g.replace("%2$s", d.target_tumblelog_name);
            var f = {
                message: g,
                is_link: true,
                href: d.from_tumblelog_url
            };
            jQuery.extend(f, e);
            return f
        },
        user_mention: function(d) {
            var f = this._base_other_user_action(d);
            var i = this._helper_post_noun(d);
            var e = i == "audio" ? "an": "a";
            var h = "%1$s mentioned %2$s in " + e + " " + i;
            h = this.__(h);
            h = h.replace("%1$s", this._helper_from_tumblelog_link(d));
            h = h.replace("%2$s", d.target_tumblelog_name);
            var g = {
                message: h,
                is_link: true,
                href: d.new_post_url
            };
            jQuery.extend(g, f);
            return g
        }
    });
    a.ToastKit = new b()
})(jQuery, Tumblr);
(function(c, a) {
    var b = Backbone.Model.extend({
        enabled: true,
        debug_mode: false,
        poll_route: "/svc/poll",
        is_sleeping: false,
        total_sleep_heartbeats: 0,
        total_empty_heatbeats: 0,
        hash_history: {},
        use_hash_history: true,
        visibility_check: 2000,
        i_visibility_check: null,
        is_window_visible: true,
        defaults: {
            toast_mode: 0,
            primary_tumblelog: false,
            start_timestamp: false,
            check_posts: false,
            check_inbox: false,
            current_speed: 1,
            initial_delay: 0,
            poll_speeds: {
                0: 10000,
                1: 20000,
                2: 30000,
                3: 50000,
                4: 60000,
                5: 80000
            },
            sleep_speed: 300000,
            sleep_max: 18,
            slowdown_beats: 10,
            poll_padding: 30000
        },
        use_timestamps: true,
        last_timestamp: false,
        t_heartbeat: null,
        is_first_heartbeat: true,
        poll_lock: false,
        initialize: function(d) {
            this.options = this.attributes;
            Tumblr.ToastKit.set("primary_tumblelog", d.primary_tumblelog);
            if (typeof Tumblr.Cookie === "object") {
                var e = Tumblr.Cookie.get("last_toast");
                if (e) {
                    e = parseInt(e, 10);
                    if (e !== 0 && e > this.options.start_timestamp) {
                        this.options.start_timestamp = e
                    }
                }
            }
            if (this.options.start_timestamp) {
                this.update_timestamp(this.options.start_timestamp)
            }
            if (this.options.toast_mode === 0) {
                this.options.current_speed = 3
            }
            this._set_heartbeat();
            this.i_visibility_check = setInterval(_.bind(this._check_visibility, this), this.visibility_check)
        },
        kill_switch: function() {
            this.enabled = false;
            this.poll_lock = true;
            clearTimeout(this.t_heartbeat)
        },
        debug_endless: function() {
            this.use_timestamps = false;
            this.use_hash_history = false;
            this.options.current_speed = 0;
            this.heartbeat();
            return true
        },
        heartbeat: function() {
            clearTimeout(this.t_heartbeat);
            if (!this.enabled) {
                return false
            }
            if (this.total_empty_heatbeats >= this.options.slowdown_beats) {
                this.total_empty_heatbeats = 0;
                this.poll_slower()
            }
            if (this.is_sleeping) {
                this.total_sleep_heartbeats++;
                if (this.total_sleep_heartbeats <= this.options.sleep_max) {
                    this.poll()
                } else {}
            } else {
                this.poll()
            }
            this._set_heartbeat();
            return 
        },
        get_next_heartbeat: function() {
            return this.is_sleeping ? this.options.sleep_speed : this.options.poll_speeds[this.options.current_speed]
        },
        _check_visibility: function() {
            var d = Tumblr.Toaster.can_display_toasts();
            if (this.is_window_visible&&!d) {
                this.sleep()
            }
            if (!this.is_window_visible && d) {
                this.wakeup()
            }
            this.is_window_visible = d
        },
        _set_heartbeat: function() {
            var d = this.is_sleeping ? this.options.sleep_speed: this.options.poll_speeds[this.options.current_speed];
            if (this.is_first_heartbeat) {
                this.is_first_heartbeat = false;
                d = this.is_sleeping ? this.options.sleep_speed : this.options.poll_speeds[this.options.initial_delay]
            }
            this.t_heartbeat = setTimeout(_.bind(function() {
                this.heartbeat()
            }, this), d)
        },
        poll_faster: function() {
            var d = this.options.current_speed;
            if ((d - 1) >= 0) {
                this.options.current_speed--
            }
        },
        poll_slower: function() {
            var d = this.options.current_speed;
            var e = _.size(this.options.poll_speeds);
            if ((d + 1) < e) {
                this.options.current_speed++
            }
        },
        sleep: function() {
            this.is_sleeping = true;
            this.total_sleep_heartbeats = 0
        },
        wakeup: function() {
            this.is_sleeping = false;
            this.total_sleep_heartbeats = 0;
            this._set_heartbeat()
        },
        poll: function() {
            if (this.poll_lock) {
                return 
            }
            this.poll_lock = true;
            var g = {
                notifications_next: (this.get_next_heartbeat() + this.options.poll_padding),
                magick: Math.floor(Math.random() * 100001)
            };
            if (this.options.token !== null) {
                g.token = this.options.token
            }
            if (this.options.toast_mode !== 0) {
                var d = {
                    notifications: true
                };
                jQuery.extend(g, d)
            }
            if (this.use_timestamps && this.last_timestamp&&!this.debug_mode) {
                jQuery.extend(g, {
                    from: this.last_timestamp
                })
            }
            if (this.options.check_posts) {
                var h = {
                    unread: true
                };
                jQuery.extend(g, h)
            }
            if (this.options.check_inbox) {
                var e = {
                    inbox: true
                };
                jQuery.extend(g, e)
            }
            var f = c.ajax({
                url: "/services/poll",
                type: "GET",
                data: g
            });
            f.done(_.bind(function(i) {
                this.poll_lock = false;
                if (this.options.toast_mode !== 0) {
                    this.parse_notifications(i)
                }
                if (this.options.check_posts) {
                    this.parse_unread(i)
                }
                if (this.options.check_inbox) {
                    this.parse_inbox(i)
                }
                if (typeof i.next_from !== "undefined") {
                    this.update_timestamp(i.next_from)
                }
            }, this));
            f.fail(_.bind(function() {
                this.kill_switch()
            }, this))
        },
        update_timestamp: function(d) {
            d = parseInt(d, 10);
            if (this.last_timestamp === false || d > this.last_timestamp) {
                this.last_timestamp = d;
                if (typeof Tumblr.Cookie === "object") {
                    Tumblr.Cookie.set("last_toast", d, 365 * 24 * 60 * 60)
                }
            }
        },
        parse_unread: function(f) {
            if (typeof f.unread !== "number") {
                return 
            }
            var e = f.unread;
            if (e) {
                var d = e;
                if (e >= 100) {
                    this.options.check_posts = false;
                    d = "100+"
                }
                if (e > 0) {
                    document.title = "(" + d + ") " + (document.title.indexOf(")")!=-1 ? document.title.split(")")[1] : document.title);
                    c(".new_post_notice_container").each(_.bind(function(h, g) {
                        var j = c(g);
                        j.find(".tab_notice_value").text(d);
                        j.addClass("active")
                    }, this))
                }
            }
            return e
        },
        parse_inbox: function(f) {
            if (typeof f.inbox !== "number") {
                return 
            }
            var e = f.inbox;
            if (e) {
                var d = e;
                if (e > 0) {
                    c(".inbox_notice_container").each(_.bind(function(h, g) {
                        var j = c(g);
                        j.find(".tab_notice_value").text(d);
                        j.addClass("active")
                    }, this))
                } else {
                    c(".inbox_notice_container").removeClass("active")
                }
            }
            return e
        },
        parse_notifications: function(e) {
            if (typeof e.notifications !== "object") {
                return 
            }
            var d = e.notifications;
            if (d.length > 0) {
                c(d).each(_.bind(function(h, f) {
                    var j = false;
                    if (this.use_hash_history) {
                        var k = f.hash;
                        if (k in this.hash_history) {
                            this.hash_history[k]++;
                            j = true
                        } else {
                            this.hash_history[k] = 1
                        }
                    }
                    if (!j && this.options.toast_mode !== 0) {
                        var g = false;
                        switch (f.type) {
                        case"like":
                            g = Tumblr.ToastKit.like(f);
                            break;
                        case"reblog":
                            g = Tumblr.ToastKit.reblog(f);
                            break;
                        case"answer":
                            g = Tumblr.ToastKit.answer(f);
                            break;
                        case"ask_answer":
                            g = Tumblr.ToastKit.ask_answer(f);
                            break;
                        case"reply":
                            g = Tumblr.ToastKit.reply(f);
                            break;
                        case"photo_reply":
                            g = Tumblr.ToastKit.photo_reply(f);
                            break;
                        case"follower":
                            g = Tumblr.ToastKit.follower(f);
                            break;
                        case"user_mention":
                            g = Tumblr.ToastKit.user_mention(f);
                            break
                        }
                        if (g) {
                            Tumblr.Toaster.add_toast(g)
                        }
                    }
                }, this));
                this.poll_faster();
                this.total_empty_heatbeats = 0
            } else {
                this.total_empty_heatbeats++
            }
        }
    });
    a.Thoth = b
})(jQuery, Tumblr);
/*! scripts/photo_reply.js */
(function(a) {
    Tumblr.PhotoReply = Backbone.View.extend({
        options: {
            post_id: undefined,
            mb_limit: 10,
            status: "inactive",
            progress: 0,
            image: undefined
        },
        initialize: function(b) {
            this.options = b || {};
            this.post_id = this.options.post_id || this.$el.data("postId");
            this.status = this.options.status || "inactive";
            this.progress = this.options.progress || 0;
            this.disabled = true;
            this.$post = this.$el.closest(".post");
            this.$container = this.$post.find(".photo_reply_container");
            this.$icon = this.$(".photo_reply_icon");
            this.$progress = this.$(".photo_reply_icon_progress");
            this.$image = this.$(".photo_reply_image");
            this.$icon.addClass("show_progress_bar");
            this.__proxy_functions();
            if (this.status !== "has_image") {
                this.enable_dropzone()
            }
            this.$el.data("tumblr_photoreply", this);
            this.constructor.register(this)
        },
        __proxy_functions: function() {
            this._show_image = a.proxy(this.show_image, this);
            this._hide_image = a.proxy(this.hide_image, this);
            this._upload_file_add = a.proxy(this.upload_file_add, this);
            this._upload_submit = a.proxy(this.upload_submit, this);
            this._upload_progress = a.proxy(this.upload_progress, this);
            this._upload_end = a.proxy(this.upload_end, this);
            this._upload_cancel = a.proxy(this.upload_cancel, this);
            this._upload_stop = a.proxy(this.upload_stop, this);
            this._dragenter = a.proxy(this.dragenter, this);
            this._dragleave = a.proxy(this.dragleave, this);
            this._drop = a.proxy(this.drop, this)
        },
        attach_image: function(c) {
            var b = {
                width: "",
                height: "",
                src: ""
            };
            if (typeof c === "string") {
                b.src = c
            } else {
                if (c.url) {
                    b.src = c.url
                }
                if (c.height) {
                    b.height = c.height
                }
                if (c.width) {
                    b.width = c.width
                }
            }
            this.$container.addClass("fileupload");
            if (!(this.$image && this.$image.length)) {
                this.$image = a('<img src="" alt="" class="photo_reply_image"/>');
                this.$image.appendTo(this.$container).on("load", this._show_image)
            }
            this.$image.attr(b)
        },
        show_image: function() {
            if (!(this.$image && this.$image.length)) {
                return false
            }
            this.$container.css("max-height", this.$image.get(0).naturalHeight).addClass("has_photo_reply")
        },
        hide_image: function() {
            this.$container.removeClass("has_photo_reply").css("max-height", "")
        },
        enable_dropzone: function() {
            this.disabled = false;
            this.$post.on({
                dragenter: this._dragenter,
                dragleave: this._dragleave,
                drop: this._drop
            });
            this.$post.find("*").on("dragenter dragover", this.cancel_event);
            this.$el.find('input[type="file"]').on("click", this._upload_cancel).attr("disabled", false);
            this.create_uploader({
                form: this.$el,
                dropzone: this.$post
            })
        },
        disable_dropzone: function() {
            this.disabled = true;
            this.$post.off({
                dragenter: this.dragenter,
                dragleave: this.dragleave,
                drop: this.drop
            });
            this.$post.removeClass("photo_reply_hover");
            this.$post.find("*").off("dragenter dragover", this.cancel_event);
            this.$el.find('input[type="file"]').off("click", this._upload_cancel).attr("disabled", true)
        },
        create_uploader: function(b) {
            this.destroy_uploader();
            this.$uploader = a(b.form).fileupload({
                dataType: "json",
                maxNumberOfFiles: 1,
                dropZone: b.dropzone,
                pasteZone: null,
                add: this._upload_file_add,
                submit: this._upload_submit,
                send: this._upload_start,
                progress: this._upload_progress,
                always: this._upload_end,
                stop: this._upload_stop
            })
        },
        destroy_uploader: function() {
            if (this.$uploader && this.$uploader.data("fileupload")) {
                a(this.$uploader).fileupload("destroy")
            }
        },
        dragenter: function(b) {
            this.$post.addClass("photo_reply_hover")
        },
        dragleave: function(b) {
            if (this.event_in_bounds(b)) {
                return false
            }
            this.$post.removeClass("photo_reply_hover")
        },
        drop: function(b) {
            this.$post.removeClass("photo_reply_hover")
        },
        show_coddled_progress: function(b) {
            return this.show_progress(b, 20)
        },
        show_progress: function(b, c) {
            if (c) {
                b = Math.max(c, Math.min(b, 100 - c))
            }
            this.$progress.css("width", b + "%");
            return b
        },
        upload_submit: function(f, d) {
            if (this.disabled) {
                return false
            }
            if (this.status !== "inactive") {
                return false
            }
            var b=!!d.files.length;
            a.each(d.files, a.proxy(function(e, g) {
                if (g.size && g.size > this.options.mb_limit * 1048576) {
                    b = false
                }
            }, this));
            if (!b) {
                var c = l10n_str.ajax_error;
                if (l10n_str.over_max_file_size_mb) {
                    c = l10n_str.over_max_file_size_mb.replace("%1$s", this.options.mb_limit)
                }
                alert(c);
                return false
            }
        },
        upload_file_add: function(c, b) {
            this.jqXHR = b.submit()
        },
        upload_start: function(c, b) {
            this.status = "uploading";
            this.progress = 0;
            this.show_progress(this.progress)
        },
        upload_progress: function(c, b) {
            this.progress = parseInt(b.loaded / b.total * 100, 10);
            this.show_coddled_progress(this.progress)
        },
        upload_end: function(d, c) {
            var b;
            if (c.textStatus === "success") {
                b = c.result
            } else {
                b = a.parseJSON(c.jqXHR.responseText)
            }
            if (b && b.meta && b.meta.status && b.meta.status === 200) {
                if (b && b.response && b.response[0].url) {
                    this.image = b.response[0];
                    this.progress = 100;
                    this.status = "has_image";
                    this.disable_dropzone();
                    this.attach_image(this.image)
                }
            } else {
                if (c && c.errorThrown === "abort") {
                    this.progress = 0;
                    this.status = "inactive"
                } else {
                    this.progress = 0;
                    this.status = "error";
                    alert(b && b.response ? b.response : l10n_str.ajax_error)
                }
            }
            this.show_progress(this.progress)
        },
        upload_cancel: function() {
            try {
                this.jqXHR.abort()
            } catch (b) {}
            this.progress = 0;
            this.show_progress(this.progress);
            this.enable_dropzone()
        },
        upload_stop: function() {
            this.destroy_uploader()
        },
        cancel_event: function(b) {
            b.preventDefault();
            b.stopPropagation();
            return false
        },
        event_in_bounds: function(f) {
            var d = f.currentTarget.getBoundingClientRect();
            var c = f.originalEvent;
            var b, g;
            if (typeof c.clientX === "undefined") {
                b = c.pageX;
                g = c.pageY
            } else {
                b = c.clientX;
                g = c.clientY
            }
            return !(b > d.left + d.width - 1 || b < d.left || g > d.top + d.height - 1 || g < d.top)
        }
    }, {
        instances: [],
        register: function(b) {
            this.instances.push(b)
        },
        unregister: function(b) {
            this.instances.splice(_.indexOf(this.instances, b), 1)
        },
        clean_up: function(d) {
            if (!document.body) {
                return 
            }
            var c, b;
            for (c = 0; c < this.instances.length; c++) {
                b = this.instances[c];
                if (!(b.$el.data("tumblr_photoreply") && b.$el.closest(document.body).length)) {
                    b.remove();
                    c--
                }
            }
        },
        init: function() {
            if (!this._scan) {
                this._scan = a.proxy(this.scan, this)
            }
            if (_.indexOf(AfterAutoPaginationQueue, this._scan) < 0) {
                AfterAutoPaginationQueue.push(this._scan)
            }
            this.scan()
        },
        scan: function(b) {
            b = a.extend({}, b);
            a(b.el || ".photo_reply_form").each(a.proxy(function(c, d) {
                if (!a(d).data("tumblr_photoreply")) {
                    new Tumblr.PhotoReply({
                        el: d
                    })
                }
            }, this));
            return this
        }
    })
})(jQuery);
/*! scripts/link_button.js */
(function(a) {
    Tumblr.LinkButton = Backbone.View.extend({
        events: {
            click: "follow_link"
        },
        initialize: function(b) {
            this.$el.addClass("clickable");
            this.determine_size();
            this.$el.data("tumblr_linkbutton", this);
            this.constructor.register(this)
        },
        determine_size: function() {
            this.$el.removeClass("small");
            if (this.$(".link_title").text().length > 100 || this.$(".link_text").height() > 110) {
                this.$el.addClass("small")
            }
            Tumblr.Events.trigger("posts:change:text_size", this.$el)
        },
        follow_link: function(b) {
            if (a(b.target).is(".link_title")) {
                return true
            }
            b.preventDefault();
            b.stopPropagation();
            this.$(".link_title").click();
            return false
        }
    }, {
        instances: [],
        register: function(b) {
            this.instances.push(b)
        },
        unregister: function(b) {
            this.instances.splice(_.indexOf(this.instances, b), 1)
        },
        init: function() {
            if (!this._scan) {
                this._scan = a.proxy(this.scan, this)
            }
            if (_.indexOf(AfterAutoPaginationQueue, this._scan) < 0) {
                AfterAutoPaginationQueue.push(this._scan)
            }
            this.scan()
        },
        scan: function(b) {
            b = a.extend({}, b);
            a(b.el || ".link_button").each(a.proxy(function(c, d) {
                if (!a(d).data("tumblr_linkbutton")) {
                    new Tumblr.LinkButton({
                        el: d
                    })
                }
            }, this));
            return this
        }
    })
})(jQuery);
/*! scripts/jquery.pano.js */
(function(c, b) {
    var a = function(d, e) {
        if (!(this instanceof a)) {
            return new a(d)
        }
        this.options = d;
        this.config = c.extend({}, a.defaults, this.options);
        this._ = c.extend({}, a.init, this.init);
        this.evt = c.extend({}, a.events);
        c.each(this.evt, c.proxy(function(f) {
            if (typeof this.config[f] === "function") {
                this.evt[f] = this.config[f]
            }
        }, this));
        this.clock = false;
        this.still = true;
        this.motion = false;
        this.paused = false;
        a.register(this);
        return this
    };
    a.prototype = {
        start_clock: function() {
            if (this.clock) {
                return false
            }
            this.clock = true;
            clearInterval(this.ticker);
            this.ticker = setInterval(c.proxy(this.tick, this), this.config.dt)
        },
        stop_clock: function() {
            this.clock = false;
            clearInterval(this.ticker)
        },
        tick: function(d) {
            if (!d) {
                d = this.config.dt
            }
            return this.paused ? false : this.__tick(d)
        },
        __tick: function(f, e) {
            if (this.evt.pre_tick&&!this.evt.pre_tick.apply(this, [this])) {
                return this
            }
            if (!f) {
                f = this.config.dt
            }
            if (!e) {
                this.set_properties({
                    px0: this._.px,
                    vx0: this._.vx,
                    ax0: this._.ax,
                    py0: this._.py,
                    vy0: this._.vy,
                    ay0: this._.ay,
                    pz0: this._.pz,
                    vz0: this._.vz,
                    az0: this._.az,
                    dt: f
                })
            }
            if (!f) {
                return this
            }
            this.still = true;
            this.motion = false;
            var d = f * f;
            if (this.config.x && (this._.vx || this._.ax)) {
                this._.px = this._.px + this._.vx * f + 0.5 * this._.ax * d;
                this._.vx = this.__almost_zero(this._.vx + this._.ax * f);
                if (this._.drag < 1) {
                    this._.vx*=this._.drag
                }
                if (this._.vx) {
                    this.still = false
                }
                if (this._.vx || this._.ax) {
                    this.motion = true
                }
            }
            if (this.config.y && (this._.vy || this._.ay)) {
                this._.py = this._.py + this._.vy * f + 0.5 * this._.ay * d;
                this._.vy = this.__almost_zero(this._.vy + this._.ay * f);
                if (this._.drag < 1) {
                    this._.vy*=this._.drag
                }
                if (this._.vy) {
                    this.still = false
                }
                if (this._.vy || this._.ay) {
                    this.motion = true
                }
            }
            if (this.config.z && (this._.vz || this._.az)) {
                this._.pz = this._.pz + this._.vz * f + 0.5 * this._.az * d;
                this._.vz = this.__almost_zero(this._.vz + this._.az * f);
                if (this._.drag < 1) {
                    this._.vz*=this._.drag
                }
                if (this._.vz) {
                    this.still = false
                }
                if (this._.vz || this._.az) {
                    this.motion = true
                }
            }
            if (this.evt.post_tick) {
                this.evt.post_tick.apply(this, [this])
            }
            if (this.still && this.evt.when_still) {
                this.evt.when_still.apply(this, [this])
            }
            if (!this.motion && this.evt.no_motion) {
                this.evt.no_motion.apply(this, [this])
            }
            return this
        },
        __split_tick: function(g, f, h) {
            if (typeof h !== "function") {
                return this.__tick(g, true)
            }
            var d = f * g;
            var e = g - d;
            if (e) {
                this.__tick(e)
            }
            h.apply(this, [this]);
            if (d) {
                this.__tick(d)
            }
            return this
        },
        __almost_zero: function(d) {
            return Math.abs(d) < this.config.threshold ? 0 : d
        },
        set_properties: function(d, e) {
            if (c.isPlainObject(d)) {
                c.extend(this._, d)
            } else {
                this._[d] = e
            }
            return this
        },
        calculate_velocity: function(g, h, n) {
            if (g.length < 2) {
                return false
            }
            if (this.evt.slide_start) {
                this.evt.slide_start.apply(this, [this])
            }
            var l = 0, j = g.length - 1;
            var e = (new Date()).getTime() - h;
            for (var f = 0; f < g.length; f++) {
                if (g[f][0] < e) {
                    l = f + 1
                }
            }
            if (l >= j) {
                return false
            }
            var m = g[l], k = g[j], d = k[0] - m[0];
            this.set_properties({
                vx0: this._.vx,
                vy0: this._.vy,
                vx: (m[1] - k[1]) / d,
                vy: (m[2] - k[2]) / d
            });
            if (n) {
                this.autostart_xy()
            }
            return this
        },
        autostart_xy: function() {
            var d = (this.config.x && this._.vx) || (this.config.y && this._.vy);
            if (d) {
                this.start_clock()
            }
            return d
        },
        autostop_xy: function() {
            var d=!(this._.vx && this.config.x)&&!(this._.vy && this.config.y);
            if (d) {
                this.stop_clock()
            }
            return d
        }
    };
    a.instances = [];
    a.register = function(d) {
        this.instances.push(d)
    };
    a.unregister = function(d) {
        this.instances.splice(this.instances.indexOf(d), 1)
    };
    a.dt = 15;
    a.tick = function(e) {
        if (typeof e !== "number") {
            e = this.dt
        }
        for (var d = 0; d < this.instances.length; d++) {
            this.instances[d].tick(e)
        }
    };
    a.init = {
        px: 0,
        vx: 0,
        ax: 0,
        py: 0,
        vy: 0,
        ay: 0,
        pz: 0,
        vz: 0,
        az: 0,
        px0: 0,
        vx0: 0,
        ax0: 0,
        py0: 0,
        vy0: 0,
        ay0: 0,
        pz0: 0,
        vz0: 0,
        az0: 0,
        drag0: 0.9,
        drag: 0.9,
        dt: null
    };
    a.events = {
        pre_tick: false,
        post_tick: false,
        slide_start: false,
        when_still: false,
        no_motion: false
    };
    a.defaults = {
        x: true,
        y: false,
        z: false,
        threshold: 0.005,
        dt: a.dt
    };
    b.Physics = a
})(jQuery, this.Tumblr || (this.Tumblr = {}));
(function(c, b) {
    var a = function(e, d) {
        if (!(this instanceof a)) {
            return new a(e, d)
        }
        this.el = (typeof e === "string") ? c(e).get(0) : e;
        this.$el = c(e);
        this.options = d;
        this.metadata = this.$el.data("plugin-options");
        this.config = c.extend({}, a.defaults, this.options, this.metadata);
        this.$parent = c(this.config.parent);
        this.start = c.proxy(this.__start, this);
        this.end = c.proxy(this.__end, this);
        this.move = c.proxy(this.__move, this);
        this.click = c.proxy(this.__click, this);
        this.scroll = c.proxy(this.__scroll, this);
        this.__init();
        a.register(this);
        return this
    };
    a.prototype = {
        __init: function() {
            this.__reset_positions();
            if (this.autostart) {
                this.enable()
            }
            this.touch = ("ontouchstart" in window || "onmsgesturechange" in window) && navigator.msMaxTouchPoints > 1;
            if (this.touch) {
                c.extend(this.config, {
                    start: "touchstart",
                    end: "touchend",
                    move: "touchmove"
                })
            }
            this.physics = this.config.physics ? new Tumblr.Physics(this.config.physics) : false
        },
        enable: function() {
            this.enable_dragging();
            if (this.config.can_scroll) {
                this.enable_scrolling()
            }
        },
        enable_dragging: function() {
            this.dragging = false;
            this.$el.on(this.config.start, this.start);
            this.$el.on(this.config.click, this.click)
        },
        enable_scrolling: function() {
            this.scrolling = false;
            this.$el.on(this.config.scroll, this.scroll);
            clearTimeout(this.enable_scrolling_delay)
        },
        disable: function() {
            this.disable_dragging();
            this.disable_scrolling()
        },
        disable_dragging: function() {
            this.dragging = false;
            this.$el.off(this.config.start, this.start);
            this.$el.off(this.config.click, this.click);
            this.$parent.off(this.config.blur, this.end);
            this.$parent.off(this.config.end, this.end);
            this.$parent.off(this.config.move, this.move)
        },
        disable_scrolling: function() {
            this.scrolling = false;
            this.$el.off(this.config.scroll, this.scroll);
            clearTimeout(this.enable_scrolling_delay)
        },
        __start: function(d) {
            this.dragging = true;
            this.$parent.on(this.config.blur, this.end);
            this.$parent.on(this.config.end, this.end);
            this.$parent.on(this.config.move, this.move);
            this.__reset_positions();
            this.__event_position(d);
            this.start_position = this.end_position = this.positions[0];
            if (this.config.start_position) {
                this.config.start_position(this.start_position[1], this.start_position[2])
            }
            if (this.physics) {
                this.physics.set_properties({
                    vx0: this.physics._.vx,
                    vy0: this.physics._.vy,
                    vx: 0,
                    vy: 0
                }).stop_clock()
            }
            d.stopPropagation();
            return false
        },
        __end: function(d) {
            this.dragging = false;
            this.$parent.off(this.config.blur, this.end);
            this.$parent.off(this.config.end, this.end);
            this.$parent.off(this.config.move, this.move);
            if (this.config.end_position) {
                this.config.end_position(this.end_position[1], this.end_position[2])
            }
            if (this.physics) {
                this.physics.calculate_velocity(this.positions, this.config.pos_time, true)
            }
        },
        __click: function(d) {
            if (this.__any_movement()) {
                d.stopPropagation();
                return false
            }
            return true
        },
        __move: function(f) {
            var d = this.__event_position(f);
            this.end_position = this.positions[this.positions.length - 1];
            if (this.config.update_position) {
                this.config.update_position(d.x - this.start_position[1], d.y - this.start_position[2], false)
            }
        },
        __scroll: function(d) {
            if (this.physics && this.physics.clock) {
                d.preventDefault();
                this.physics.set_properties({
                    vx0: this.physics._.vx,
                    vy0: this.physics._.vy,
                    vz0: 0,
                    vx: 0,
                    vy: 0,
                    vz: 0
                }).stop_clock();
                this.physics.motion = false;
                if (this.physics.evt.no_motion) {
                    this.physics.evt.no_motion.apply(this.physics, [this.physics])
                }
                return false
            }
            if (this.config.update_position) {
                this.config.update_position(this.$el.scrollLeft(), this.$el.scrollTop(), true)
            }
        },
        __event_position: function(f, h) {
            var d, g;
            if (this.touch) {
                if (!f.originalEvent.targetTouches.length) {
                    return false
                }
                d = f.originalEvent.targetTouches[0].pageX;
                g = f.originalEvent.targetTouches[0].pageY
            } else {
                d = f.pageX;
                g = f.pageY
            }
            if (h) {
                return {
                    x: d,
                    y: g
                }
            } else {
                return this.__record_position(d, g)
            }
        },
        __any_movement: function() {
            if (this.positions < 2) {
                return false
            }
            var e = this.positions[0], d = this.positions[this.positions.length - 1];
            return d[0] !== e[0] || d[1] !== e[1]
        },
        __reset_positions: function() {
            delete this.start_position;
            delete this.end_position;
            this.positions = [];
            this.scroll_x = this.$el.scrollLeft();
            this.scroll_y = this.$el.scrollTop()
        },
        __record_position: function(d, f) {
            if (c.isPlainObject(d)) {
                f = d.y;
                d = d.x
            }
            var e = (new Date()).getTime();
            this.positions.push([e, d, f]);
            if (this.positions.length - 1 === this.config.pos_limit) {
                this.positions.shift()
            } else {
                if (this.positions.length > this.config.pos_limit) {
                    this.positions.splice( - this.config.pos_limit, this.positions.length)
                }
            }
            this.positions.push([e, d, f]);
            return {
                x: d,
                y: f
            }
        },
        sync_scroll: function(e) {
            if (!this.config.can_scroll) {
                return 
            }
            this.disable_scrolling();
            var d = c(e);
            this.$el.scrollLeft(d.scrollLeft());
            this.$el.scrollTop(d.scrollTop());
            this.scroll_x = this.$el.scrollLeft();
            this.scroll_y = this.$el.scrollTop();
            if (this.physics) {
                this.physics.set_properties({
                    px: this.scroll_x,
                    py: this.scroll_Y
                })
            }
            clearTimeout(this.enable_scrolling_delay);
            this.enable_scrolling_delay = setTimeout(c.proxy(this.enable_scrolling, this), 200)
        }
    };
    a.instances = [];
    a.register = function(d) {
        this.instances.push(d)
    };
    a.unregister = function(d) {
        this.instances.splice(this.instances.indexOf(d), 1)
    };
    a.defaults = {
        pos_limit: 5,
        pos_time: 200,
        start: "mousedown",
        end: "mouseup",
        move: "mousemove",
        click: "click",
        scroll: "scroll",
        blur: "blur",
        parent: window,
        can_scroll: true,
        physics: false,
        start_position: false,
        end_position: false,
        update_position: false,
        autostart: true
    };
    b.DragRelay = a
})(jQuery, Tumblr);
(function(c, a) {
    var d = function(e) {
        this.options = e;
        this.__init(this.config);
        return this
    };
    d.prototype = {
        __init: function() {
            Tumblr.Glass.show(_.bind(function() {
                this.__destroy()
            }, this));
            this.click = c.proxy(this.__click, this);
            this.resize = c.proxy(this.__resize, this);
            this.keydown = c.proxy(this.__keydown, this);
            this.keyup = c.proxy(this.__keyup, this);
            this.keycancel = c.proxy(this.__keycancel, this);
            this.__create();
            if (this.options.pano) {
                this.__clone_pano(this.options.pano)
            }
            this.__open()
        },
        __bind_events: function() {
            this.$lightbox.on("click", this.click);
            c(window).on("resize", this.resize);
            c(window).on("keydown", this.keydown)
        },
        __unbind_events: function() {
            this.$lightbox.off("click", this.click);
            c(window).off("resize", this.resize);
            c(window).off("keydown", this.keydown);
            c(window).off("keyup", this.keyup);
            c(window).off("blur", this.keycancel)
        },
        __create: function() {
            this.$lightbox = c("<div/>").attr("class", "pano_lightbox").appendTo(c("body"));
            this.$lightbox.css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 4294967294,
                overflow: "hidden",
                backgroundColor: "rgba(15,15,15,0.95)"
            });
            c("<img/>").attr("id", "vignette").attr("src", "//assets.tumblr.com/images/full_page_vignette.png").css({
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%"
            }).appendTo(this.$lightbox);
            c("<div/>").css({
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%"
            }).appendTo(this.$lightbox)
        },
        __destroy: function() {
            this.__unbind_events();
            this.$lightbox.css("display", "none").remove();
            this.pano.$parent.css("overflow", "");
            delete this.$lightbox;
            if (window.top != window.self) {
                if (typeof window.top.pano_iframe_preloader != "undefined" && window.top.pano_iframe_preloader) {
                    window.top.pano_iframe_preloader.remove()
                }
            }
            b.unregister(this)
        },
        __clone_pano: function(e) {
            this.$pano = c(e).clone(false).appendTo(this.$lightbox);
            this.pano = new b(this.$pano, {
                side_margins: 100
            });
            this.pano.lightbox = this
        },
        __open: function() {
            this.__bind_events();
            this.pano.__center_vertically(c(window).height());
            this.pano.$parent.css("overflow", "hidden")
        },
        __close: function() {
            Tumblr.Glass.hide()
        },
        __click: function(f) {
            if (c(f.target).closest(".pano_dragger").length || c(f.target).closest(".pano_thumb").length) {
                return 
            }
            this.__close()
        },
        __resize: function(f) {
            this.pano.__enforce_max_height();
            this.pano.__center_vertically(c(window).height());
            this.pano.__draw_shades();
            c("#vignette").css("display", "none")
        },
        __keydown: function(g) {
            if (!g) {
                return false
            }
            var f = g.charCode ? g.charCode: g.keyCode;
            if ((g.ctrlKey || g.metaKey) && f === 87) {
                this.__close();
                return false
            }
            if (!g.shiftKey&&!g.ctrlKey && g.altKey&&!g.metaKey) {
                return true
            }
            switch (f) {
            case 37:
                if (this.arrowed) {
                    return false
                }
                this.arrowed = true;
                this.pano.physics.set_properties({
                    drag0: this.pano.physics._.drag,
                    drag: 1,
                    vx0: this.pano.physics._.vx,
                    vx: - 0.9
                }).autostart_xy();
                c(window).on("blur", this.keycancel);
                c(window).on("keyup", this.keyup);
                return false;
            case 39:
                if (this.arrowed) {
                    return false
                }
                this.arrowed = true;
                this.pano.physics.set_properties({
                    drag0: this.pano.physics._.drag,
                    drag: 1,
                    vx0: this.pano.physics._.vx,
                    vx: 0.9
                }).autostart_xy();
                c(window).on("blur", this.keycancel);
                c(window).on("keyup", this.keyup);
                return false;
            case 27:
            case 32:
            case 74:
            case 75:
                this.__close();
                return false
            }
        },
        __keyup: function(g) {
            if (!g) {
                return false
            }
            var f = g.charCode ? g.charCode: g.keyCode;
            if (!g.shiftKey&&!g.ctrlKey && g.altKey&&!g.metaKey) {
                return true
            }
            switch (f) {
            case 37:
                this.arrowed = false;
                this.pano.physics.set_properties({
                    drag: this.pano.physics._.drag0
                }).autostop_xy();
                c(window).off("blur", this.keycancel);
                c(window).off("keyup", this.keyup);
                return false;
            case 39:
                this.arrowed = false;
                this.pano.physics.set_properties({
                    drag: this.pano.physics._.drag0
                }).autostop_xy();
                c(window).off("blur", this.keycancel);
                c(window).off("keyup", this.keyup);
                return false
            }
        },
        __keycancel: function(f) {
            if (this.arrowed) {
                this.arrowed = false;
                this.pano.physics.set_properties({
                    drag: this.pano.physics._.drag0,
                    vx0: this.pano.physics._.vx,
                    vx: 0
                }).autostop_xy()
            }
            c(window).off("blur", this.keycancel);
            c(window).off("keyup", this.keyup)
        }
    };
    var b = function(f, e) {
        if (!(this instanceof b)) {
            return new b(f, e)
        }
        this.el = (typeof f === "string") ? c(f).get(0) : f;
        this.$el = c(f);
        if (this.$el.data("panoObject")) {
            return this.$el.data("panoObject")
        }
        this.options = e;
        this.metadata = this.$el.data("plugin-options");
        this.config = c.extend({
            physics: {
                post_tick: c.proxy(function(g) {
                    this.viewport_size();
                    if (g._.px <= 0) {
                        g.set_properties({
                            px: 0,
                            vx: 0.1 * Math.abs(g._.vx)
                        });
                        if (this.lightbox) {
                            this.lightbox.keycancel()
                        }
                    } else {
                        if (g._.px >= (this.display_width + (this.display_side_margins * 2)) - this.viewport_width) {
                            g.set_properties({
                                px: (this.display_width + (this.display_side_margins * 2)) - this.viewport_width,
                                vx: - 0.1 * Math.abs(g._.vx)
                            });
                            if (this.lightbox) {
                                this.lightbox.keycancel()
                            }
                        }
                    }
                    this.set_position(g._.px, g._.py, true)
                }, this),
                slide_start: c.proxy(function(g) {
                    this.relay.disable_scrolling();
                    this.scrubber_relay.disable_scrolling()
                }, this),
                no_motion: c.proxy(function(g) {
                    g.stop_clock();
                    this.relay.enable_scrolling();
                    this.scrubber_relay.enable_scrolling();
                    this.relay.sync_scroll(this.$viewport)
                }, this)
            },
            autostart: true
        }, this.options, this.metadata);
        this.__init(this.config);
        return this
    };
    b.prototype = {
        __init: function(e) {
            this.img_loaded = c.proxy(this.__img_loaded, this);
            this.img_ready = c.proxy(this.__img_ready, this);
            this.__create();
            c.extend(this.config, {
                start_position: c.proxy(this.set_start_position, this),
                end_position: c.proxy(this.set_end_position, this),
                update_position: c.proxy(this.set_position, this)
            });
            this.relay = new Tumblr.DragRelay(this.$dragger, this.config);
            this.physics = this.relay.physics;
            this.scrubber_relay = new Tumblr.DragRelay(this.$scrubber, c.extend({}, this.config, {
                can_scroll: false,
                physics: false,
                start_position: c.proxy(this.set_inverted_start_position, this),
                update_position: c.proxy(this.set_inverted_position, this)
            }));
            this.__load_pano_image();
            b.register(this)
        },
        __create: function() {
            if (this.$el.is("a")) {
                this.$orig_a = this.$el;
                this.$orig_img = this.$el.children("img")
            } else {
                this.$orig_img = this.$el
            }
            this.src = this.$orig_img.data("panoSrc");
            this.href = this.$orig_img.data("panoHref");
            this.width = this.$orig_img.data("panoWidth");
            this.height = this.$orig_img.data("panoHeight");
            this.position_height = Math.min(80, this.$orig_img.data("thumbHeight"));
            this.position_width = this.$orig_img.data("thumbWidth") * (this.position_height / this.$orig_img.data("thumbHeight"));
            this.position_width = Math.min(500, this.position_width);
            this.$parent = c("body");
            this.$container = c("<div/>").attr("class", "pano_container loading");
            this.$view_container = c("<div/>").attr("class", "pano_view_container").appendTo(this.$container);
            this.$viewport = c("<div/>").attr("class", "pano_viewport").appendTo(this.$view_container);
            this.$img_container = c("<div/>").attr("class", "pano_img_container").css({
                width: this.width,
                height: this.height,
                padding: "0 " + this.options.side_margins + "px"
            }).appendTo(this.$viewport);
            this.$img = c("<img/>").attr({
                src: "//assets.tumblr.com/images/x.gif",
                "class": "pano_img"
            }).css({
                width: this.width,
                height: this.height
            }).appendTo(this.$img_container);
            this.$loader_img = c("<img/>").attr({
                "class": "pano_loader_img",
                src: this.$orig_img.attr("src")
            }).css({
                width: this.width,
                height: this.height
            }).appendTo(this.$img_container);
            this.$position = c("<div/>").attr("class", "pano_position").css({
                width: this.position_width,
                height: this.position_height
            }).appendTo(this.$container);
            this.$thumb = c("<img/>").attr("class", "pano_thumb").attr("src", this.$orig_img.attr("src")).appendTo(this.$position);
            this.$shade_left = c("<div/>").attr("class", "pano_shade left").appendTo(this.$position);
            this.$shade_right = c("<div/>").attr("class", "pano_shade right").appendTo(this.$position);
            this.$scrubber = c("<div/>").attr("class", "pano_scrubber grab").appendTo(this.$position);
            this.$dragger = c("<div/>").attr("class", "pano_dragger grab").css({
                height: this.height
            }).appendTo(this.$container);
            this.$scroller = c("<div/>").attr("class", "pano_scroller").css({
                width: this.width,
                height: this.height,
                borderLeft: this.options.side_margins + "px solid transparent",
                borderRight: this.options.side_margins + "px solid transparent"
            }).appendTo(this.$dragger);
            this.$el.css("display", "none").data("panoObject", this).after(this.$container);
            this.__set_img_dimensions(this.width, this.height, this.options.side_margins);
            this.__enforce_max_height();
            return this
        },
        __destroy: function() {
            this.$img.off("load", this.img_ready);
            this.$container.remove();
            delete this.$container;
            delete this.$view_container;
            delete this.$viewport;
            delete this.$img;
            delete this.$loader_img;
            delete this.$position;
            delete this.$thumb;
            delete this.$pos_frame;
            delete this.$dragger;
            this.$el.css("display", "").data("panoObject", "")
        },
        __load_pano_image: function(e) {
            if (!e) {
                e = this.src
            }
            this.img_poll = setInterval(this.img_ready, 1000);
            this.$img.on("load", this.img_loaded).attr("src", e);
            this.__img_init()
        },
        __img_init: function() {
            this.relay.enable();
            this.scrubber_relay.enable();
            this.__scrubber_sizing();
            this.set_position(0, 0)
        },
        __img_ready: function(e) {
            if (!e) {
                e = this.$img[0]
            }
            if (e && e.src && e.complete) {
                this.__img_loaded()
            }
        },
        __img_loaded: function(f) {
            this.__scrubber_sizing();
            this.$container.removeClass("loading");
            clearInterval(this.img_poll)
        },
        __scrubber_sizing: function() {
            this.viewport_size();
            var e = 100 * this.viewport_width / (this.$img.width() + (this.options.side_margins * 2));
            this.$scrubber.width(Math.min(e, 100) + "%");
            if (Math.min(e, 100) == 100) {
                this.$position.css("opacity", "0")
            } else {
                this.$position.css("opacity", "1")
            }
        },
        __draw_shades: function() {
            if (this.relay.touch) {
                return 
            }
            this.$shade_left.css("width", Math.max(0, this.scrubber_x));
            this.$shade_right.css("width", Math.max(0, this.position_width - this.scrubber_x - this.$scrubber.width()))
        },
        __set_img_dimensions: function(g, e, f) {
            this.$img_container.css({
                width: g,
                height: e
            });
            this.$img.css({
                width: g,
                height: e
            });
            this.$loader_img.css({
                width: g,
                height: e
            });
            this.$dragger.css({
                height: e
            });
            this.$scroller.css({
                width: g,
                height: e
            });
            this.display_width = g;
            this.display_height = e;
            if (typeof f === "number") {
                this.$img_container.css({
                    padding: "0 " + f + "px"
                });
                this.$scroller.css({
                    borderLeft: f + "px solid transparent",
                    borderRight: f + "px solid transparent"
                });
                this.display_side_margins = f
            }
        },
        __enforce_max_height: function(f) {
            f = f || 200;
            var g = c(window).height() - this.$position.outerHeight(true);
            g -= 30;
            var e = Math.max(f, Math.min(this.height, g));
            var h = this.width * (e / this.height);
            this.__set_img_dimensions(h, e);
            this.$img_container.css("min-width", c(window).width() - 2 * this.display_side_margins);
            this.__scrubber_sizing()
        },
        __center_vertically: function(e) {
            this.$container.css("top", (e / 2) - (this.$container.height() / 2))
        },
        set_start_position: function(e, f) {
            this.$parent.addClass("grabbing");
            this.start_x = this.$viewport.scrollLeft();
            this.start_y = this.$viewport.scrollTop()
        },
        set_inverted_start_position: function(e, f) {
            this.$parent.addClass("grabbing");
            this.start_x = this.$scrubber.position().left;
            this.start_y = this.$scrubber.position().top
        },
        set_end_position: function(e, f) {
            this.$parent.removeClass("grabbing");
            this.relay.sync_scroll(this.$viewport)
        },
        viewport_size: function() {
            this.viewport_width = this.$viewport.width();
            this.viewport_height = this.$viewport.height()
        },
        set_position: function(f, g, e) {
            this.viewport_size();
            if (e) {
                this.position_x = f;
                this.position_y = g
            } else {
                this.position_x = this.start_x - f;
                this.position_y = this.start_y - g
            }
            this.$viewport.scrollLeft(this.position_x);
            this.position_x = this.$viewport.scrollLeft();
            this.scrubber_x = this.$scrubber.width() * this.position_x / this.viewport_width;
            this.$scrubber.css("left", parseInt(this.scrubber_x, 10) + "px");
            this.__draw_shades()
        },
        set_inverted_position: function(f, g, e) {
            this.viewport_size();
            if (e) {
                this.scrubber_x = f
            } else {
                this.scrubber_x = this.start_x + f
            }
            this.scrubber_x = Math.max(0, Math.min(this.scrubber_x, (this.$position.width() - this.$scrubber.width())));
            this.position_x = this.$viewport.width() * this.scrubber_x / this.$scrubber.width();
            this.$scrubber.css("left", parseInt(this.scrubber_x, 10) + "px");
            this.__draw_shades();
            this.$viewport.scrollLeft(this.position_x)
        }
    };
    b.instances = [];
    b.register = function(e) {
        this.instances.push(e)
    };
    b.unregister = function(e) {
        this.instances.splice(this.instances.indexOf(e), 1)
    };
    c.fn.panorama = function(e) {
        e = e || {};
        var f = e.lightbox || false;
        return this.each(function() {
            if (f) {
                new d(c.extend({}, e, {
                    pano: this
                }))
            } else {
                new b(this, e)
            }
        })
    };
    a.Panorama = b
})(jQuery, this.Tumblr || (this.Tumblr = {}));
/*! scripts/search/views/popover/search_popover.js */
(function(d, c, b) {
    var a = Tumblr.BaseSearchPopover.extend({
        events: {
            "focus #search_query": "focus_search_query",
            "click #popover_search .popover_menu_item": "click_popover",
            "submit #search_form": "submit"
        },
        initialize: function(e) {
            this.options = e || {};
            this.options.popover_selector = "#popover_search";
            this.log_session = Tumblr.Flags.bool("log_search_box");
            this.onboarding_search = this.options.onboarding || false;
            this.onboarding_search_endpoint = this.options.onboarding_search_endpoint || false;
            Tumblr.BaseSearchPopover.prototype.initialize.apply(this, arguments);
            this.search_term = this.$search_query.val();
            this.capturing = (Tumblr.Capture) ? new Tumblr.Capture.SearchPopover() : null;
            this.listenTo(Tumblr.Events, "search:change:query", this.change_query, this);
            this.listenTo(Tumblr.Events, "search:submit", this.force_submit, this)
        },
        click_popover: function(i) {
            var h = this.$(i.currentTarget);
            var g = h.find("a");
            var f = g.attr("href");
            if (i.metaKey || i.altKey) {
                i.stopPropagation();
                i.preventDefault();
                if (Tumblr.Prima.Url.hasAllowedProtocol(f)) {
                    window.open(f)
                }
            }
            this.popover.hide();
            this.change_query(g.data("tag-result"));
            if (g.hasClass("search_typeahead")) {
                i.preventDefault();
                i.stopPropagation();
                this.force_submit();
                this.clicked_typeahead(g.data("tag-result"), g)
            }
        },
        clicked_typeahead: function(h, i) {
            var e = i.closest(".popover_menu_item");
            var g = e.parent().children().index(e);
            var f = i.find(".result_title u").text();
            this.log_search_box("typeahead_click", {
                position: g,
                query: h,
                characters: f
            })
        },
        log_search_box: function(e, f) {
            if (this.log_session) {
                Tumblr.Events.trigger("Capture:push", "search_box_usage", e, f)
            }
        },
        setup_autocomplete: function() {
            if (this.onboarding_search) {
                this.auto_complete = new Tumblr.OnboardingAutoCompleteSearch({
                    el: this.$search_query,
                    endpoint: this.onboarding_search_endpoint,
                    popover: this.popover
                })
            } else {
                this.auto_complete = new Tumblr.AutoCompleteSearch({
                    el: this.$search_query,
                    store: "/svc/search_popover",
                    popover: this.popover,
                    include: Tumblr.EXISTING_TAGS,
                    base_blog_search_url: this.options.base_blog_search_url || null,
                    blog_search_label: this.options.blog_search_label || 'More results for "%1$s"'
                })
            }
        },
        focus_search_query: function() {
            this.$search_field.addClass("active");
            this.currentIndex =- 1;
            if (this.$search_query.val() === this.$search_query.attr("placeholder")) {
                this.$search_query.val("")
            }
            if (this.$search_query.val().length) {
                this.auto_complete.lookup()
            } else {
                this.popover.show();
                this.$("#unread_tag_notice").hide();
                this.$search_query.removeClass("with_unread")
            }
            Tumblr.Events.trigger("SearchPopover:focus");
            this.log_search_box("focus")
        },
        set_active: function(g) {
            var e = d(this.popover_selector + " .popover_menu_item a").filter(":visible");
            var f = e.filter(":focus");
            if (f.length) {
                this.currentIndex = (g === "previous") ? e.index(f) - 1 : e.index(f) + 1
            }
            if (this.currentIndex >= 0 && this.currentIndex < e.length) {
                e.eq(this.currentIndex).focus()
            } else {
                if (this.currentIndex===-2 && g === "previous") {
                    e.eq(e.length - 1).focus();
                    this.currentIndex = e.length - 1
                } else {
                    this.currentIndex =- 1;
                    this.$search_query.focus()
                }
            }
        },
        change_query: function(e) {
            this.$search_query.val(e);
            return this
        },
        force_submit: function() {
            this.$("#search_form").trigger("submit")
        },
        submit: function() {
            if (d.trim(this.$search_query.val()) === "") {
                window.location = "/search";
                return false
            }
            if (c.isFunction(this.auto_complete.abort)) {
                this.auto_complete.abort()
            }
            this.popover.hide();
            this.$search_query.blur();
            this.$search_field.removeClass("active");
            this.log_search_box("form_submit");
            Tumblr.Events.trigger("Capture:push", "search_page_usage", "submit", {
                query: this.$search_query.val()
            })
        }
    });
    b.SearchPopover = a
})(jQuery, _, Tumblr);
/*! scripts/search/views/popover/search_autocomplete.js */
(function(c, a) {
    var b = Backbone.View.extend({
        events: {
            keyup: "keyup"
        },
        initialize: function(d) {
            this.options = d || {};
            this.endpoint = this.options.endpoint || "/svc/search_popover/";
            this.threshold = this.options.threshold || 1;
            this.cache_size = this.options.cache_size || 15;
            this.init_value = this.$el.val();
            this.base_blog_search_url = this.options.base_blog_search_url || "/search/blogs?q=";
            this.blog_search_label = this.options.blog_search_label || 'More blogs with "%1$s"';
            this.form_key = c("#tumblr_form_key").attr("content");
            this.cache = {};
            this.queries = [];
            this.popover = this.options.popover;
            this.search_loading_template = c("#search_loading_template").html();
            this.search_results_template = c("#search_results_template").html();
            this.search_results_item_blogs_template = c("#search_results_item_blogs").html();
            this.search_results_item_tags_template = c("#search_results_item_tags").html();
            this.$search_query = c("#search_query");
            this.$search_results_container = c("#search_results_container .scrollable_container");
            this.$tracked_tags = c(".tracked_tags.search_results_section");
            this.tracked_tags_markup = c("<div>").append(this.$tracked_tags.clone()).html()
        },
        keyup: _.throttle(function(d) {
            this.lookup()
        }, 300),
        prepare_search_data: function() {
            this.queries.push(this.search_query);
            return {
                q: this.search_query_raw,
                form_key: this.form_key
            }
        },
        get_results: function(d) {
            d = d || function() {};
            if (this.cache[this.search_query]) {
                this.results = this.cache[this.search_query];
                d.call(this);
                return 
            }
            this.search_in_progress = true;
            this.results = {
                tags: [],
                blogs: []
            };
            this.store_xhr = c.ajax({
                url: this.endpoint,
                data: this.prepare_search_data(),
                dataType: "json",
                type: "GET"
            });
            this.store_xhr.done(_.bind(function(e) {
                this.results = e;
                this.add_to_cache(this.search_query, e)
            }, this));
            this.store_xhr.fail(_.bind(function(f, e) {
                if (e === "abort") {
                    this.force_hide = true
                }
            }, this));
            this.store_xhr.always(_.bind(function(e) {
                this.search_in_progress = false;
                d.call(this)
            }, this))
        },
        lookup: function() {
            var e = c.trim(this.$el.val());
            if (e[0] == "#") {
                e = e.substr(1)
            }
            var f = e.length;
            var d;
            if (f >= this.threshold && e.length) {
                this.search_query = _.escape(e);
                this.search_query_raw = e;
                this.force_hide = false;
                this.get_results(_.bind(function() {
                    this.update();
                    Tumblr.Events.trigger("SearchPopover:update")
                }, this))
            } else {
                this.reset_popover()
            }
            this.init = false;
            this.init_value = ""
        },
        show_tracked_tags: function() {
            if (this.$tracked_tags.children().length > 0) {
                this.$tracked_tags.show()
            } else {
                this.popover.hide()
            }
        },
        hide_tracked_tags: function() {
            this.$tracked_tags.hide()
        },
        reset_popover: function() {
            if (this.tracked_tags_markup.length) {
                this.$search_results_container.html(this.tracked_tags_markup)
            } else {
                this.popover.hide()
            }
        },
        add_to_cache: function(d, e) {
            this.cache[d] = e;
            if (_.size(this.cache) > this.cache_size) {
                delete this.cache[this.queries[0]];
                this.queries.shift()
            }
        },
        should_add_query_to_tags: function(d) {
            var e = _.find(d, function(g) {
                var i = g.tag.toLowerCase(), j = this.search_query.toLowerCase(), h = this.search_query_raw.toLowerCase();
                return (i == j || i == h)
            }, this);
            if (!e) {
                var f = {
                    tag: this.search_query,
                    url: "/tagged/" + this.search_query,
                    is_query: true
                };
                d.unshift(f)
            }
            return d
        },
        inject_search_substring: function(d, f) {
            if (!this.search_query) {
                return 
            }
            var e = new RegExp(this._escapeRegExp(this.search_query), "gi"), g = this.decorate_search_substring;
            if (!e) {
                return 
            }
            _.each(d, function(j, h) {
                if (f == "tag"&&!j.is_query) {
                    d[h].escaped_tag = d[h].escaped_tag || _.escape(j.tag);
                    d[h].hilite_tag = d[h].hilite_tag || j.escaped_tag.replace(e, g)
                }
                if (f == "blog") {
                    d[h].hilite_name = d[h].hilite_name || j.name.replace(e, g);
                    d[h].hilite_title = d[h].hilite_title || j.title.replace(e, g);
                    d[h].hilite_url = d[h].hilite_url || j.url.replace(e, g)
                }
            });
            return d
        },
        decorate_search_substring: function(d) {
            return "<u>" + d + "</u>"
        },
        _escapeRegExp: function(d) {
            return d.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\~\`\!\@\#]/g, "\\$&")
        },
        update: function() {
            if (!_.isObject(this.results)) {
                return 
            }
            var f = _.isArray(this.results.tags) ? this.results.tags: [], j = _.isArray(this.results.blogs) ? this.results.blogs: [], h = "", e = false, d = false, g = _.template(this.search_results_template), i;
            f = this.should_add_query_to_tags(f);
            f = this.inject_search_substring(f, "tag");
            j = this.inject_search_substring(j, "blog");
            if (_.size(f)) {
                if (f.length > 5) {
                    f = f.slice(0, 5)
                }
                i = {
                    results: {
                        type: "tag",
                        items: f,
                        query: this.search_query,
                        item_template: this.search_results_item_tags_template,
                        blog_search_url: this.base_blog_search_url,
                        blog_search_label: this.blog_search_label
                    }
                };
                h += g(i)
            }
            if (_.size(j)) {
                g = _.template(this.search_results_template);
                i = {
                    results: {
                        type: "blog",
                        items: j,
                        query: this.search_query,
                        item_template: this.search_results_item_blogs_template,
                        blog_search_url: this.base_blog_search_url,
                        blog_search_label: this.blog_search_label
                    }
                };
                h += g(i)
            }
            if (h.length&&!this.force_hide) {
                this.$search_results_container.empty().prop("innerHTML", h);
                this.popover.show()
            } else {
                this.reset_popover()
            }
        },
        abort: function() {
            if (this.store_xhr) {
                this.store_xhr.abort()
            }
        }
    });
    a.AutoCompleteSearch = b
})(jQuery, Tumblr);
/*! scripts/capture.js */
(function(c, b) {
    var a = {};
    a.Base = Backbone.View.extend({
        el: "body",
        svc_url: "/svc/log/capture",
        initialize: function() {
            this.form_key = c("#tumblr_form_key").attr("content");
            this.start_time = (b.getRealNow || _.now)();
            this.tracking_data = {};
            c(window).on("beforeunload.capture", _.bind(this.send_data, this))
        },
        _get_delta: function() {
            var d = (b.getRealNow || _.now)();
            return d - this.start_time
        },
        enable_listeners: function() {
            this.listenTo(Tumblr.Events, "Capture:set", this._set, this);
            this.listenTo(Tumblr.Events, "Capture:push", this._push, this)
        },
        _set: function(e, d, f) {
            if (!(e in this.tracking_data)) {
                this.tracking_data[e] = {}
            }
            this.tracking_data[e][d] = f
        },
        _push: function(e, d, f) {
            f = f || {};
            if (_.isObject(f)) {
                f.time = this._get_delta()
            }
            if (!(e in this.tracking_data)) {
                this.tracking_data[e] = {}
            }
            if (!(d in this.tracking_data[e]) ||!_.isArray(this.tracking_data[e][d])) {
                this.tracking_data[e][d] = []
            }
            this.tracking_data[e][d].push(f)
        },
        send_data: function() {
            if (!Tumblr.Flags.bool("enable_capture_js")) {
                return 
            }
            if (this.sending_data) {
                return 
            }
            if (_.size(this.tracking_data) < 1) {
                return 
            }
            this.track_context();
            var d = c.ajax({
                url: this.svc_url,
                type: "POST",
                data: {
                    log: this.tracking_data
                },
                with_form_key: true,
                async: false
            });
            this.tracking_data = {}
        },
        unique_cookie: function() {
            var d = Tumblr.Cookie.get("capture") || this.form_key;
            if (d == this.form_key) {
                Tumblr.Cookie.set("capture", this.form_key)
            }
            return d
        },
        track_context: function() {
            this.tracking_data.context = this.tracking_data.context || {};
            this.tracking_data.context.id = this.unique_cookie();
            this.tracking_data.context.language = (window.navigator.userLanguage || window.navigator.language).toLowerCase();
            this.tracking_data.context.path = document.location.pathname
        }
    });
    a.Generic = a.Base.extend({
        initialize: function() {
            a.Base.prototype.initialize.call(this);
            this.enable_listeners()
        },
        _set_generic_data: function() {
            this.tracking_data._init = this.start_time;
            this.tracking_data._elapsed = this._get_delta()
        },
        send_data: function() {
            if (_.size(this.tracking_data) < 1) {
                return 
            }
            this._set_generic_data();
            a.Base.prototype.send_data.call(this)
        }
    });
    a.UserActions = a.Base.extend({
        el: "body",
        mb_sent: {},
        premium_action_sent: {},
        initialize: function() {
            a.Base.prototype.initialize.call(this);
            this.tracking_data.context = {}
        },
        send_moneyball_beacon: function(d, e) {
            Tumblr.Logging.ads.doLogExternal(d.$el.data("serve-id"), e)
        },
        get_post_id: function(f, g) {
            g = g || ".post";
            var e = 0, d = f.closest(g);
            if (d.length) {
                e = d.data("post-id")
            }
            return e
        },
        track_signup_buttons: function(e) {
            var f = c(e.target), d = f.attr("id").replace("signup_button_", "");
            this.tracking_data.signup_button[d] = 1
        },
        track_search: function(f) {
            var d = c(f.target);
            var e = d.serialize();
            this.tracking_data.search = e
        },
        track_explore_tag: function(e) {
            var d = c(e.target);
            this.tracking_data.explore = d.text()
        },
        track_spotlight_blog: function(f) {
            var d = c(f.target), e = d.find(".tumblelog_name").text();
            this.tracking_data.spotlight = e
        },
        track_small_links: function(f) {
            var e = c(f.target), d = e.attr("href");
            if (d == "/explore") {
                this.tracking_data.explore_link = 1
            }
            if (d == "/spotlight") {
                this.tracking_data.spotlight_link = 1
            }
        },
        track_post_tags: function(g) {
            var e = c(g.target), f = this.get_post_id(e), d = {
                post_id: e.text()
            };
            this.tracking_data.post_tags.push(d)
        },
        track_post_info: function(f) {
            var g = c(f.target), d = this.get_post_id(g), e = g.text();
            this.tracking_data.post_info = {
                post_id: e
            }
        },
        track_post_controls: function(g) {
            var f = c(g.target), d = this.get_post_id(f), e;
            if (f.hasClass("reblog_button")) {
                e = "reblog"
            }
            if (f.hasClass("like_button")) {
                e = "like"
            }
            if (f.hasClass("reblog_count") || f.closest(".reblog_count").length) {
                e = "notes"
            }
            this.tracking_data.post_controls[d] = this.tracking_data.post_controls[d] || [];
            this.tracking_data.post_controls[d][e] = 1
        },
        track_post_content: function(h) {
            var f = c(h.target), d = f.closest(".post"), g = this.get_post_id(f), i = d.attr("data-type") || "unknown", e = f[0].outerHTML.replace(/[\n\r]/g, " ").replace(/\>\s+\/</g, "");
            this.tracking_data.post_content[g] = this.tracking_data.post_content[g] || {};
            this.tracking_data.post_content[g].post_type = i;
            this.tracking_data.post_content[g].clicks = this.tracking_data.post_content[g].clicks || [];
            this.tracking_data.post_content[g].clicks.push(e)
        },
        track_j_k_keys: function(e) {
            var d = e.keyCode;
            if ((d == 74 || d == 75)&&!c("body").hasClass("show_form")) {
                this.tracking_data.keycommands = 1
            }
        },
        track_auto_pager: function(d) {
            this.page_number = this.page_number || 1;
            this.tracking_data.auto_pager = this.page_number;
            this.page_number++
        },
        track_recommendations: function(h) {
            var f = c(h.target);
            var e = f.closest(".ht_post").data("id"), g = (f.hasClass("hello_tag")) ? "tag": "thumbnail", d = f.attr("href");
            this.tracking_data.recommendations.push({
                post_id: e,
                type: g,
                url: d
            })
        },
        track_related_tag: function(e) {
            var d = c(e.target), f = false;
            if (!d.hasClass(".tag")) {
                d = d.closest(".tag")
            }
            f = c.trim(d.text());
            if (f && f.length) {
                this.tracking_data.related_tags.push(f)
            }
        },
        track_related_blog: function(f) {
            var d = c(f.target), e = false;
            if (!d.hasClass(".blog")) {
                d = d.closest(".blog")
            }
            e = d.data("tumblelog");
            if (e && e.length) {
                this.tracking_data.related_blogs.push(e)
            }
        },
        track_tag_source: function() {
            if (c("body").hasClass("sassafras")) {
                this.tracking_data.tag_source = "sassafras"
            } else {
                this.tracking_data.tag_source = "default"
            }
        }
    });
    a.OnboardingDash = a.UserActions.extend({
        events: {
            "submit #search_form": "track_search",
            "click .signup_buttons .chrome": "track_signup_buttons",
            "click .tracked_tag .tag": "track_explore_tag",
            "click #tag_editors .blog": "track_spotlight_blog",
            "click .post .tag": "track_post_tags",
            "click .post_info a": "track_post_info",
            "click .post_controls a": "track_post_controls",
            "click .post_content > *": "track_post_content",
            "click #right_column .small_links a": "track_small_links",
            keydown: "track_j_k_keys"
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture/logged_out_dashboard";
            this.tracking_data.signup_button = {};
            this.tracking_data.search = "";
            this.tracking_data.explore = "";
            this.tracking_data.explore_link = 0;
            this.tracking_data.spotlight = "";
            this.tracking_data.spotlight_link = 0;
            this.tracking_data.post_tags = [];
            this.tracking_data.post_info = {};
            this.tracking_data.post_controls = {};
            this.tracking_data.post_content = {};
            this.tracking_data.keycommands = 0;
            this.tracking_data.auto_pager = 0;
            this.track_auto_pager();
            if (window.AfterAutoPaginationQueue) {
                window.AfterAutoPaginationQueue.push(_.bind(this.track_auto_pager, this))
            }
            this.source_page = "onboarding_dash"
        }
    });
    a.OnboardingTags = a.OnboardingDash.extend({
        events: _.extend({
            "click #related_tags .tag": "track_related_tag"
        }, a.OnboardingDash.prototype.events),
        initialize: function() {
            a.OnboardingDash.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture/logged_out_tags";
            this.tracking_data.related_tags = [];
            this.track_tag_source();
            this.source_page = "onboarding_tags"
        }
    });
    a.HelloDash = a.UserActions.extend({
        el: "body",
        events: {
            "submit #search_form": "track_search",
            "click .signup_buttons .chrome": "track_signup_buttons",
            "click .ht_post .hello_tag": "track_post_tags",
            "click .ht_post .go": "track_go_lightbox",
            keydown: "track_j_k_keys"
        },
        track_post_tags: function(g) {
            var e = c(g.target), f = this.get_post_id(e, ".ht_post"), d = {};
            d[f] = e.text();
            this.tracking_data.post_tags.push(d)
        },
        track_go_lightbox: function(f) {
            var e = c(f.target);
            var d = this.get_post_id(e, ".ht_post");
            this.tracking_data.go_lightbox.push(d)
        },
        has_zoom_effect: function() {
            return (c('.ht_post[data-effect="grow"]').length || c(".ht_post").data("grow"))
        },
        track_post_zoom_effect: function() {
            if (this.has_zoom_effect) {
                this.tracking_data.has_zoom = 1
            }
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture/hello_dash";
            this.tracking_data.signup_button = {};
            this.tracking_data.search = "";
            this.tracking_data.post_tags = [];
            this.tracking_data.go_lightbox = [];
            this.tracking_data.has_zoom = 0;
            this.track_post_zoom_effect();
            this.source_page = "hello_dash"
        }
    });
    a.HelloLightbox = a.UserActions.extend({
        events: {
            "click .post .tag": "track_post_tags",
            "click .post_info a": "track_post_info",
            "click .post_controls a": "track_post_controls",
            "click .post_content > *": "track_post_content",
            "click .recommendations a": "track_recommendations",
            keydown: "track_j_k_keys"
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture/hello_lightbox";
            this.tracking_data.post_tags = [];
            this.tracking_data.post_info = {};
            this.tracking_data.post_controls = {};
            this.tracking_data.post_content = {};
            this.tracking_data.keycommands = 0;
            this.tracking_data.auto_pager = 0;
            this.tracking_data.recommendations = [];
            this.track_auto_pager();
            if (window.AfterAutoPaginationQueue) {
                window.AfterAutoPaginationQueue.push(_.bind(this.track_auto_pager, this))
            }
            this.source_page = "hello_lightbox"
        }
    });
    a.Radar = a.UserActions.extend({
        el: "#tumblr_radar",
        events: {
            "click .radar_content a": "track_radar_content",
            "click .radar_controls a": "track_radar_controls",
            "click .radar_footer a": "track_radar_footer"
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture_radar";
            this.init_tracking_data()
        },
        init_tracking_data: function() {
            this.tracking_data.radar_id = {};
            this.tracking_data.radar_content = [];
            this.tracking_data.radar_controls = {};
            this.tracking_data.radar_footer = 0
        },
        send_data: function() {
            if (!this.tracking_data.radar_id.post_id) {
                return 
            }
            a.UserActions.prototype.send_data.call(this);
            this.init_tracking_data()
        },
        track_radar_id: function() {
            if (this.tracking_data.radar_id.post_id) {
                return 
            }
            this.tracking_data.radar_id = {
                tumblelog: this.$el.data("tumblelog-name"),
                post_id: this.$el.data("post-id")
            }
        },
        track_follow: function(e) {
            var d = e ? "follow": "unfollow";
            this.tracking_data.radar_controls[d] = 1 + (this.tracking_data.radar_controls[d] || 0);
            this.track_radar_id();
            if (e) {
                a.UserActions.prototype.send_moneyball_beacon(this, d)
            }
        },
        track_like: function(d) {
            var e = d ? "like": "unlike";
            this.tracking_data.radar_controls[e] = 1 + (this.tracking_data.radar_controls[e] || 0);
            this.track_radar_id();
            if (d) {
                a.UserActions.prototype.send_moneyball_beacon(this, e)
            }
        },
        track_reblog: function(e, d) {
            var f = "reblog";
            this.tracking_data.radar_controls[f] = 1 + (this.tracking_data.radar_controls[f] || 0);
            this.track_radar_id();
            a.UserActions.prototype.send_moneyball_beacon(this, f)
        },
        track_fast_reblog: function(e, d) {
            var f = "reblog";
            this.tracking_data.radar_controls[f] = 1 + (this.tracking_data.radar_controls[f] || 0);
            this.track_radar_id();
            a.UserActions.prototype.send_moneyball_beacon(this, f)
        },
        track_notes: function(e, d) {
            var f = "notes";
            this.tracking_data.radar_controls[f] = 1 + (this.tracking_data.radar_controls[f] || 0);
            this.track_radar_id();
            a.UserActions.prototype.send_moneyball_beacon(this, f)
        },
        track_radar_content: function(f) {
            var e = c(f.target);
            e = (e.is("a")) ? e : e.closest("a");
            var d = e.attr("href");
            this.tracking_data.radar_content.push({
                clicked: d
            });
            this.track_radar_id();
            a.UserActions.prototype.send_moneyball_beacon(this, "photo")
        },
        track_avatar: function(e, d) {
            var f = "avatar";
            this.tracking_data.radar_controls[f] = 1 + (this.tracking_data.radar_controls[f] || 0);
            this.track_radar_id();
            a.UserActions.prototype.send_moneyball_beacon(this, f)
        },
        track_radar_controls: function(g) {
            var f = c(g.target);
            f = (f.is("a")) ? f : f.closest("a");
            var h = false;
            if (f.hasClass("reblog")&&!g.altKey) {
                h = "reblog"
            } else {
                if (f.hasClass("note_link_current")) {
                    h = "notes"
                }
            }
            if (h === false) {
                return 
            }
            if (h == "reblog") {
                var d = this;
                var e = function(i) {
                    d.track_reblog(c(i.target), i);
                    d.track_radar_id();
                    c("body").off("click.capturejs")
                };
                c("body").on("click.capturejs", "#create_post > button, .post-composer_save [data-js-clickablesave]", e)
            } else {
                this["track_" + h](f, g);
                this.track_radar_id()
            }
        },
        track_radar_footer: function(d) {
            if (!c(d.target).hasClass("follow")) {
                this.tracking_data.radar_footer = 1;
                this.track_radar_id();
                a.UserActions.prototype.send_moneyball_beacon(this, "posts")
            }
        }
    });
    a.WebInStream = a.UserActions.extend({
        el: ".sponsored_post",
        events: {
            "click .post_controls .post_control": "track_sponsored_controls",
            "click .post_permalink": "track_sponsored_controls",
            "click .post_avatar a": "track_sponsored_controls",
            "click .post_info .post_info_fence": "track_sponsored_controls",
            "click .post_info .reblog_follow_button": "track_sponsored_controls",
            "click .sponsored_wrapper .post_header_follow": "track_blue_follow",
            "click .post_tags a.post_tag": "track_sponsored_controls",
            "click .post_media_photo": "track_photo",
            "click .photoset_photo": "track_photo",
            "click .post_notes_label": "track_sponsored_controls",
            "click .post_body a": "track_sponsored_controls"
        },
        initialize: function() {
            if (this.initialized) {
                return 
            }
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture_web_instream";
            this.init_tracking_data();
            this.control_names = {
                post_avatar_link: "avatar",
                post_tag: "tags",
                post_permalink: "permalink",
                reblog: "reblog",
                post_notes_label: "notes",
                share_email: "share",
                share_facebook: "share",
                share_twitter: "share",
                share_permalink: "share",
                post_media_photo: "photo",
                photoset_photo: "photo",
                post_media: "photo",
                post_body: "post_body"
            };
            this.initialized = true
        },
        init_tracking_data: function() {
            this.tracking_data.sponsored_id = {};
            this.tracking_data.sponsored_controls = {};
            this.tracking_data.sponsored_content = [];
            this.tracking_data.sponsored_tags = [];
            this.tracking_data.is_moneyball = (this.$el.data("mb-click-url")) ? 1 : 0
        },
        send_data: function() {
            if (!this.tracking_data.sponsored_id.post_id) {
                return 
            }
            if (!this.$el.hasClass("sponsored_post")) {
                return 
            }
            a.UserActions.prototype.send_data.call(this);
            this.init_tracking_data()
        },
        track_sponsored_id: function() {
            if (this.tracking_data.sponsored_id.post_id) {
                return 
            }
            this.tracking_data.sponsored_id = {
                tumblelog: this.$el.data("tumblelog-name"),
                post_id: this.$el.data("post-id"),
                placement_id: this.$el.data("placement-id")
            }
        },
        track_follow: function(e) {
            var d = e ? "follow": "unfollow";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            if (e) {
                a.UserActions.prototype.send_moneyball_beacon(this, d)
            }
        },
        track_blue_follow: function() {
            var d = "follow";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        },
        track_like: function(d) {
            var e = d ? "like": "unlike";
            this.tracking_data.sponsored_controls[e] = 1 + (this.tracking_data.sponsored_controls[e] || 0);
            this.track_sponsored_id();
            if (d) {
                a.UserActions.prototype.send_moneyball_beacon(this, e)
            }
        },
        track_reblog: function(e, d) {
            var f = "reblog";
            this.tracking_data.sponsored_controls[f] = 1 + (this.tracking_data.sponsored_controls[f] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, f)
        },
        track_fast_reblog: function() {
            var d = "reblog";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        },
        track_notes: function() {
            var d = "notes";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        },
        track_share: function() {
            var d = "share";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        },
        track_photo: function() {
            var d = "photo";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        },
        track_caption: function() {
            var d = "caption";
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        },
        track_sponsored_content: function(e) {
            var d = c(e.target);
            d = (d.is("a")) ? d : d.closest("a");
            this.tracking_data.sponsored_content.push({
                clicked: d.attr("href")
            });
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, "sponsored_controls_click")
        },
        track_sponsored_controls: function(g) {
            var f = (c(g.target).className) ? c(g.target): c(g.currentTarget);
            if (f.hasClass("share_social_button")) {
                if (g.target != g.currentTarget) {
                    f = c(g.target).parent()
                }
            }
            var i = null;
            if (f.parent().hasClass("source_url")) {
                i = "source_url"
            } else {
                if (f.parent().hasClass("post_info")&&!f.hasClass("reblog_follow_button")&&!f.hasClass("post_header_follow")) {
                    i = "posts"
                } else {
                    if (f.parents(".post_body").length != 0) {
                        i = "caption"
                    } else {
                        for (var h in this.control_names) {
                            if (f.hasClass(h)) {
                                i = this.control_names[h];
                                break
                            }
                        }
                    }
                }
            }
            if (!i) {
                return 
            }
            if (i == "reblog") {
                var d = this;
                var e = function(j) {
                    d.track_reblog(c(j.target), j);
                    d.track_sponsored_id();
                    c("body").off("click.capturejs")
                };
                c("body").on("click.capturejs", "#create_post > button, .post-composer_save [data-js-clickablesave]", e)
            } else {
                if (this["track_" + i] && this["track_" + i].call) {
                    this["track_" + i](f, g);
                    this.track_sponsored_id()
                } else {
                    this.tracking_data.sponsored_controls[i] = 1 + (this.tracking_data.sponsored_controls[i] || 0);
                    this.track_sponsored_id();
                    a.UserActions.prototype.send_moneyball_beacon(this, i)
                }
            }
        },
        force_track_sponsored_controls: function(d) {
            this.tracking_data.sponsored_controls[d] = 1 + (this.tracking_data.sponsored_controls[d] || 0);
            this.track_sponsored_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        }
    });
    a.PremiumRadar = a.Radar.extend({
        el: "#tumblr_radar.premium",
        events: function() {
            return _.extend({}, a.Radar.prototype.events, {
                "mouseenter .radar_content a": "track_radar_hover",
                "mouseleave .radar_content a": "track_radar_hover"
            })
        },
        initialize: function() {
            a.Radar.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture_premium_radar";
            this.tracking_data.is_moneyball = (this.$el.data("mb-click-url")) ? 1 : 0;
            _.bindAll(this, "track_radar_loaded");
            c(window).load(this.track_radar_loaded);
            this.track_radar_visibility();
            _.bindAll(this, "track_radar_visibility");
            c(window).scroll(this.track_radar_visibility)
        },
        track_radar_id: function() {
            if (this.tracking_data.radar_id.post_id) {
                return 
            }
            this.tracking_data.radar_id = {
                tumblelog: this.$el.data("tumblelog-name"),
                post_id: this.$el.data("post-id"),
                placement_id: this.$el.data("placement-id")
            }
        },
        get_radar_args: function(d) {
            var f = [this.$el.data("tumblelog-name"), this.$el.data("post-id")];
            for (var e = 0; e < arguments.length; e++) {
                f.push(arguments[e])
            }
            return f
        },
        track_follow: function(d) {
            a.Radar.prototype.track_follow.call(this, d)
        },
        track_like: function(d) {
            a.Radar.prototype.track_like.call(this, d)
        },
        track_reblog: function(e, d) {
            a.Radar.prototype.track_reblog.call(this, e, d)
        },
        track_radar_content: function(d) {
            a.Radar.prototype.track_radar_content.call(this, d)
        },
        track_radar_hover: function(d) {},
        track_radar_loaded: function(d) {},
        track_radar_visibility: function(d) {},
        elInView: function(f) {
            var h = f.offsetTop;
            var g = f.offsetLeft;
            var e = f.offsetWidth;
            var d = f.offsetHeight;
            while (f.offsetParent) {
                f = f.offsetParent;
                h += f.offsetTop;
                g += f.offsetLeft
            }
            return (h < (window.pageYOffset + window.innerHeight) && g < (window.pageXOffset + window.innerWidth) && (h + d) > window.pageYOffset && (g + e) > window.pageXOffset)
        },
        track_radar_footer: function(d) {
            a.Radar.prototype.track_radar_footer.call(this, d)
        },
        track_radar_badge: function(d) {
            this.tracking_data.radar_badge = 1;
            this.track_radar_id()
        },
        force_track_radar_controls: function(d) {
            this.tracking_data.radar_controls[d] = 1 + (this.tracking_data.radar_controls[d] || 0);
            this.track_radar_id();
            a.UserActions.prototype.send_moneyball_beacon(this, d)
        }
    });
    a.SearchPopover = a.UserActions.extend({
        el: ".l-header",
        events: {
            "mousedown .tracked_tags .result_link": "track_tracked_tag_click",
            "mousedown .tag .result_title": "track_tag_click",
            "mousedown .blog .result_link": "track_blog_click",
            "mousedown .blog .more_results_link": "track_blog_click",
            "keydown #popover_search": "keyup"
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture_search";
            this.$search_field = this.$el.find("#search_query");
            this.$search_popover = this.$el.find("#popover_search");
            this.tracking_data.query = 0;
            this.tracking_data.tag = 0;
            this.tracking_data.blog = 0;
            this.tracking_data.search_tag = 0;
            this.tracking_data.search_blog = 0;
            this.tracking_data.tracked_tag = 0
        },
        send_data: function() {
            if (this.tracking_data.tracked_tag === 0 && this.tracking_data.query === 0) {
                return 
            }
            a.UserActions.prototype.send_data.call(this)
        },
        get_query_name: function() {
            return c.trim(this.$search_field.val())
        },
        get_tag_name: function(d) {
            return c.trim(d.text()).replace("#", "")
        },
        get_tumblelog_name: function(d) {
            return (d) ? d.attr("data-tumblelog-name") : ""
        },
        track_query: function(d) {
            this.tracking_data.query = ((this.get_query_name().length) ? 1 : 0)
        },
        track_tag: function(d) {
            if (d.closest(".result.is_query").length) {
                this.tracking_data.search_tag++
            } else {
                this.tracking_data.tag++
            }
            this.track_query()
        },
        track_blog: function(d) {
            if (d.hasClass("more_results_link")) {
                this.tracking_data.search_blog++
            } else {
                this.tracking_data.blog++
            }
            this.track_query()
        },
        track_tag_click: function(e) {
            var d = c(e.currentTarget);
            this.track_tag(d)
        },
        track_tracked_tag_click: function(e) {
            var d = c(e.currentTarget);
            this.track_tracked_tag(d)
        },
        track_tracked_tag: function(d) {
            this.tracking_data.tracked_tag++;
            this.track_query()
        },
        track_blog_click: function(e) {
            var d = c(e.currentTarget);
            this.track_blog(d)
        },
        track_submit: function(d) {
            this.track_query()
        },
        keyup: function(e) {
            if (e.keyCode == 13) {
                var d = c(document.activeElement);
                if (d.closest(".tag").length) {
                    this.track_tag(d)
                }
                if (d.closest(".tracked_tags").length) {
                    this.track_tracked_tag(d)
                }
                if (d.closest(".blog").length) {
                    this.track_blog(d)
                }
            }
        }
    });
    a.CrushClick = a.UserActions.extend({
        el: "#crushes",
        events: {
            "mousedown .crush": "track_crush_click"
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture_crush";
            this.tracking_data.crush_clicks = []
        },
        track_crush_click: function(e) {
            var d = c(e.currentTarget);
            this.tracking_data.crush_clicks.push({
                click_time: Math.round(Date.now() / 1000),
                tumblelog_name: d.data("tumblelog-name"),
                position: d.attr("id").split("_")[1],
                love: d.data("love")
            })
        }
    });
    a.TumblelogClick = a.UserActions.extend({
        el: '[href^="http"][href*=".tumblr"]:not([href*="://tumblr"]):not([href*="://www.tumblr"]):not([href*=".media.tumblr"])',
        events: {
            mousedown: "track_click"
        },
        initialize: function() {
            a.UserActions.prototype.initialize.call(this);
            this.svc_url = "/svc/log/capture_tumblelog_click";
            this.tracking_data.page = c(location).attr("href");
            this.tracking_data.tumblelog_clickthrough = {}
        },
        track_click: function(f) {
            var d = c(f.currentTarget), e = c.trim(d.closest("[class]").prop("className"));
            this.tracking_data.tumblelog_clickthrough[e] = 1 + (this.tracking_data.tumblelog_clickthrough[e] || 0)
        }
    });
    b.Capture = a;
    c(function(d) {
        Tumblr.CaptureGeneric = new Tumblr.Capture.Generic();
        Tumblr.Flags("tumblelog_clickthrough")(function() {
            Tumblr.CaptureTumblelogClick = new Tumblr.Capture.TumblelogClick()
        }, false)
    })
})(jQuery, Tumblr);
/*! scripts/sponsored_posts.js */
(function(c, d, a) {
    var b = d.View.extend({
        initialize: function(e) {
            this.div = document.createElement("div");
            this.isScrollEnabled = false;
            this.transform = (this.check_support("transform") || this.check_support("webkitTransform") || this.check_support("MozTransform") || this.check_support("msTransform") || this.check_support("OTransform"));
            this.div = null;
            if (!this.transform) {
                return 
            }
            this.rings = c();
            Tumblr.AutoPaginator.on("after", c.proxy(this.on_autopaginator_after, this));
            this.check_for_rings()
        },
        check_support: function(e) {
            if (e in this.div.style) {
                return e
            }
            return false
        },
        check_for_rings: function() {
            this.rings = this.rings.add(".sponsored_badge_icon .ring");
            if (!this.isScrollEnabled && this.rings.length > 0) {
                this.isScrollEnabled = true;
                Tumblr.Events.on("DOMEventor:flatscroll", this.on_window_scroll, this)
            }
        },
        on_autopaginator_after: function() {
            this.check_for_rings()
        },
        on_window_scroll: function(h) {
            var e = h.windowScrollTop;
            for (var g = 0, f = this.rings.length; g < f; g++) {
                this.rings[g].style[this.transform] = "rotate(" + e + "deg)"
            }
        }
    });
    c(function() {
        a.SponsoredPosts = new b()
    })
})(jQuery, Backbone, Tumblr);
/*! scripts/vendor/gif-js/gif.js */
(function(f) {
    function e(a, i) {
        if ({}.hasOwnProperty.call(e.cache, a)) {
            return e.cache[a]
        }
        var h = e.resolve(a);
        if (!h) {
            throw new Error("Failed to resolve module " + a)
        }
        var j = {
            id: a,
            require: e,
            filename: a,
            exports: {},
            loaded: !1,
            parent: i,
            children: []
        };
        i && i.children.push(j);
        var g = a.slice(0, a.lastIndexOf("/") + 1);
        return e.cache[a] = j.exports, h.call(j.exports, j, j.exports, g, a), j.loaded=!0, e.cache[a] = j.exports
    }
    e.modules = {}, e.cache = {}, e.resolve = function(a) {
        return {}.hasOwnProperty.call(e.modules, a) ? e.modules[a] : void 0
    }, e.define = function(a, g) {
        e.modules[a] = g
    };
    var d = function(b) {
        return b = "/", {
            title: "browser",
            version: "v0.10.5",
            browser: !0,
            env: {},
            argv: [],
            nextTick: f.setImmediate || function(c) {
                setTimeout(c, 0)
            },
            cwd: function() {
                return b
            },
            chdir: function(a) {
                b = a
            }
        }
    }();
    e.define("/gif.coffee", function(t, a, l, m) {
        function s(g, c) {
            return {}.hasOwnProperty.call(g, c)
        }
        function o(i, g) {
            for (var h = 0, j = g.length; h < j; ++h) {
                if (h in g && g[h] === i) {
                    return !0
                }
            }
            return !1
        }
        function n(g, c) {
            function h() {
                this.constructor = g
            }
            for (var i in c) {
                s(c, i) && (g[i] = c[i])
            }
            return h.prototype = c.prototype, g.prototype = new h, g.__super__ = c.prototype, g
        }
        var q, r, p;
        r = e("events", t).EventEmitter, q = e("/browser.coffee", t), p = function(h, c, i) {
            function g(j) {
                var b, k;
                this.running=!1, this.options = {}, this.frames = [], this.freeWorkers = [], this.activeWorkers = [], this.setOptions(j);
                for (b in c) {
                    k = c[b], null != this.options[b] ? this.options[b] : this.options[b] = k
                }
            }
            return n(g, h), c = {
                workerScript: "gif.worker.js",
                workers: 2,
                repeat: 0,
                background: "#fff",
                quality: 10,
                width: null,
                height: null
            }, i = {
                delay: 500,
                copy: !1
            }, g.prototype.setOption = function(k, j) {
                return this.options[k] = j, null != this._canvas && (k === "width" || k === "height") ? this._canvas[k] = j : void 0
            }, g.prototype.setOptions = function(b) {
                return function(u) {
                    var j, k;
                    for (j in b) {
                        if (!s(b, j)) {
                            continue
                        }
                        k = b[j], u.push(this.setOption(j, k))
                    }
                    return u
                }.call(this, [])
            }, g.prototype.addFrame = function(j, v) {
                var k, u;
                null == v && (v = {}), k = {};
                for (u in i) {
                    k[u] = v[u] || i[u]
                }
                if ("undefined" !== typeof CanvasRenderingContext2D && null != CanvasRenderingContext2D && j instanceof CanvasRenderingContext2D || "undefined" !== typeof WebGLRenderingContext && null != WebGLRenderingContext && j instanceof WebGLRenderingContext) {
                    v.copy ? k.data = this.getContextData(j) : k.context = j
                } else {
                    if (null != j.childNodes) {
                        null != this.options.width || this.setOption("width", j.width), null != this.options.height || this.setOption("height", j.height), v.copy ? k.data = this.getImageData(j) : k.image = j
                    } else {
                        throw new Error("Invalid image")
                    }
                }
                return this.frames.push(k), null != k.width && this.setOption("width", k.width), null != k.height ? this.setOption("height", k.height) : void 0
            }, g.prototype.render = function() {
                var u, k;
                if (this.running) {
                    throw new Error("Already running")
                }
                this.running=!0, this.nextFrame = 0, this.finishedFrames = 0, this.imageParts = function(w) {
                    var y;
                    for (var x = 0, z = function() {
                        var A, A;
                        A = [];
                        for (var B = 0; 0 <= this.frames.length ? B < this.frames.length : B > this.frames.length; 0 <= this.frames.length?++B : --B) {
                            A.push(B)
                        }
                        return A
                    }.apply(this, arguments).length; x < z; ++x) {
                        y = function() {
                            var A, A;
                            A = [];
                            for (var B = 0; 0 <= this.frames.length ? B < this.frames.length : B > this.frames.length; 0 <= this.frames.length?++B : --B) {
                                A.push(B)
                            }
                            return A
                        }.apply(this, arguments)[x], w.push(null)
                    }
                    return w
                }.call(this, []), k = this.spawnWorkers();
                for (var j = 0, v = function() {
                    var x, x;
                    x = [];
                    for (var w = 0; 0 <= k ? w < k : w > k; 0 <= k?++w : --w) {
                        x.push(w)
                    }
                    return x
                }.apply(this, arguments).length; j < v; ++j) {
                    u = function() {
                        var x, x;
                        x = [];
                        for (var w = 0; 0 <= k ? w < k : w > k; 0 <= k?++w : --w) {
                            x.push(w)
                        }
                        return x
                    }.apply(this, arguments)[j], this.renderNextFrame()
                }
                return this.emit("start"), this.emit("progress", 0)
            }, g.prototype.abort = function() {
                var b;
                while (!0) {
                    if (b = this.activeWorkers.shift(), !(null != b)) {
                        break
                    }
                    console.log("killing active worker"), b.terminate()
                }
                return this.running=!1, this.emit("abort")
            }, g.prototype.spawnWorkers = function() {
                var u, k, j;
                k = Math.min(this.options.workers, this.frames.length);
                for (var w = 0, v = function() {
                    var y, y;
                    y = [];
                    for (var x = this.freeWorkers.length; this.freeWorkers.length <= k ? x < k : x > k; this.freeWorkers.length <= k?++x : --x) {
                        y.push(x)
                    }
                    return y
                }.apply(this, arguments).length; w < v; ++w) {
                    u = function() {
                        var y, y;
                        y = [];
                        for (var x = this.freeWorkers.length; this.freeWorkers.length <= k ? x < k : x > k; this.freeWorkers.length <= k?++x : --x) {
                            y.push(x)
                        }
                        return y
                    }.apply(this, arguments)[w], (j = this, function(x) {
                        var b, y;
                        return console.log("spawning worker " + x), y = new Worker(j.options.workerScript), b = j, y.onmessage = function(z) {
                            return b.activeWorkers.splice(b.activeWorkers.indexOf(y), 1), b.freeWorkers.push(y), b.frameFinished(z.data)
                        }, j.freeWorkers.push(y)
                    })()
                }
                return k
            }, g.prototype.frameFinished = function(b) {
                return console.log("frame " + b.index + " finished - " + this.activeWorkers.length + " active"), this.finishedFrames++, this.emit("progress", this.finishedFrames / this.frames.length), this.imageParts[b.index] = b, o(null, this.imageParts) ? this.renderNextFrame() : this.finishRendering()
            }, g.prototype.finishRendering = function() {
                var C, G, w, u, F, D, z;
                F = 0;
                for (var B = 0, x = this.imageParts.length; B < x; ++B) {
                    G = this.imageParts[B], F += (G.data.length - 1) * G.pageSize + G.cursor
                }
                F += G.pageSize - G.cursor, console.log("rendering finished - filesize " + Math.round(F / 1000) + "kb"), C = new Uint8Array(F), D = 0;
                for (var A = 0, v = this.imageParts.length; A < v; ++A) {
                    G = this.imageParts[A];
                    for (var E = 0, y = G.data.length; E < y; ++E) {
                        z = G.data[E], w = E, C.set(z, D), w === G.data.length - 1 ? D += G.cursor : D += G.pageSize
                    }
                }
                return u = new Blob([C], {
                    type: "image/gif"
                }), this.emit("finished", u, C)
            }, g.prototype.renderNextFrame = function() {
                var u, k, j;
                if (this.freeWorkers.length === 0) {
                    throw new Error("No free workers")
                }
                return this.nextFrame >= this.frames.length ? void 0 : (u = this.frames[this.nextFrame++], j = this.freeWorkers.shift(), k = this.getTask(u), console.log("starting frame " + (k.index + 1) + " of " + this.frames.length), this.activeWorkers.push(j), j.postMessage(k))
            }, g.prototype.getContextData = function(b) {
                return b.getImageData(0, 0, this.options.width, this.options.height).data
            }, g.prototype.getImageData = function(j) {
                var k;
                return null != this._canvas || (this._canvas = document.createElement("canvas"), this._canvas.width = this.options.width, this._canvas.height = this.options.height), k = this._canvas.getContext("2d"), k.setFill = this.options.background, k.fillRect(0, 0, this.options.width, this.options.height), k.drawImage(j, 0, 0), this.getContextData(k)
            }, g.prototype.getTask = function(k) {
                var u, j;
                if (u = this.frames.indexOf(k), j = {
                    index: u,
                    last: u === this.frames.length - 1,
                    delay: k.delay,
                    width: this.options.width,
                    height: this.options.height,
                    quality: this.options.quality,
                    repeat: this.options.repeat,
                    canTransfer: q.name === "chrome"
                }, null != k.data) {
                    j.data = k.data
                } else {
                    if (null != k.context) {
                        j.data = this.getContextData(k.context)
                    } else {
                        if (null != k.image) {
                            j.data = this.getImageData(k.image)
                        } else {
                            throw new Error("Invalid frame")
                        }
                    }
                }
                return j
            }, g
        }(r), t.exports = p
    }), e.define("/browser.coffee", function(m, l, k, j) {
        var r, o, n, p, q;
        p = navigator.userAgent.toLowerCase(), n = navigator.platform.toLowerCase(), q = p.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0], o = q[1] === "ie" && document.documentMode, r = {
            name: q[1] === "version" ? q[3]: q[1],
            version: o || parseFloat(q[1] === "opera" && q[4] ? q[4] : q[2]),
            platform: {
                name: p.match(/ip(?:ad|od|hone)/) ? "ios": (p.match(/(?:webos|android)/) || n.match(/mac|win|linux/) || ["other"])[0]
            }
        }, r[r.name]=!0, r[r.name + parseInt(r.version, 10)]=!0, r.platform[r.platform.name]=!0, m.exports = r
    }), e.define("events", function(k, l, j, i) {
        d.EventEmitter || (d.EventEmitter = function() {});
        var b = l.EventEmitter = d.EventEmitter, n = typeof Array.isArray === "function" ? Array.isArray: function(c) {
            return Object.prototype.toString.call(c) === "[object Array]"
        }, m = 10;
        b.prototype.setMaxListeners = function(c) {
            this._events || (this._events = {}), this._events.maxListeners = c
        }, b.prototype.emit = function(p) {
            if (p === "error" && (!(this._events && this._events.error) || n(this._events.error)&&!this._events.error.length)) {
                throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.")
            }
            if (!this._events) {
                return !1
            }
            var h = this._events[p];
            if (!h) {
                return !1
            }
            if (!(typeof h == "function")) {
                if (n(h)) {
                    var c = Array.prototype.slice.call(arguments, 1), q = h.slice();
                    for (var r = 0, o = q.length; r < o; r++) {
                        q[r].apply(this, c)
                    }
                    return !0
                } else {
                    return !1
                }
            }
            switch (arguments.length) {
            case 1:
                h.call(this);
                break;
            case 2:
                h.call(this, arguments[1]);
                break;
            case 3:
                h.call(this, arguments[1], arguments[2]);
                break;
            default:
                var c = Array.prototype.slice.call(arguments, 1);
                h.apply(this, c)
            }
            return !0
        }, b.prototype.addListener = function(g, c) {
            if ("function" !== typeof c) {
                throw new Error("addListener only takes instances of Function")
            }
            if (this._events || (this._events = {}), this.emit("newListener", g, c), !this._events[g]) {
                this._events[g] = c
            } else {
                if (n(this._events[g])) {
                    if (!this._events[g].warned) {
                        var h;
                        this._events.maxListeners !== undefined ? h = this._events.maxListeners : h = m, h && h > 0 && this._events[g].length > h && (this._events[g].warned=!0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[g].length), console.trace())
                    }
                    this._events[g].push(c)
                } else {
                    this._events[g] = [this._events[g], c]
                }
            }
            return this
        }, b.prototype.on = b.prototype.addListener, b.prototype.once = function(g, p) {
            var h = this;
            return h.on(g, function o() {
                h.removeListener(g, o), p.apply(this, arguments)
            }), this
        }, b.prototype.removeListener = function(g, o) {
            if ("function" !== typeof o) {
                throw new Error("removeListener only takes instances of Function")
            }
            if (!(this._events && this._events[g])) {
                return this
            }
            var c = this._events[g];
            if (n(c)) {
                var h = c.indexOf(o);
                if (h < 0) {
                    return this
                }
                c.splice(h, 1), c.length == 0 && delete this._events[g]
            } else {
                this._events[g] === o && delete this._events[g]
            }
            return this
        }, b.prototype.removeAllListeners = function(c) {
            return c && this._events && this._events[c] && (this._events[c] = null), this
        }, b.prototype.listeners = function(c) {
            return this._events || (this._events = {}), this._events[c] || (this._events[c] = []), n(this._events[c]) || (this._events[c] = [this._events[c]]), this._events[c]
        }
    }), f.GIF = e("/gif.coffee")
}.call(this, this));
/*! scripts/tumblr/binary_switch.js */
(function(c, b) {
    var a = Backbone.View.extend({
        el: ".binary_switcher",
        className: "binary_switch",
        defaults: {
            additionalClassNames: ""
        },
        initialize: function(d) {
            this.options = d || {};
            this.options = _.extend(this.defaults, this.options || {})
        },
        render: function() {
            _.each(this.$el.not("[data-binary-switch-init]"), _.bind(function(e) {
                var d = c(e);
                d.attr("data-binary-switch-init", true);
                d.wrap(c("<label>").addClass(this.className).addClass(this.options.additionalClassNames));
                d.after(c("<span>", {
                    "class": this.className + "_button"
                }));
                d.after(c("<span>", {
                    "class": this.className + "_track"
                }))
            }, this));
            return this
        }
    });
    b.BinarySwitch = a
})(jQuery, Tumblr);
/*! scripts/ghostlist.js */
(function(r, e, s) {
    function p(t) {
        return (t !== null && t !== undefined) ? (("length" in t) ? t : [t]) : []
    }
    function c(t) {
        if (t && typeof t.then === "function") {
            return t
        } else {
            if (typeof t === "function") {
                return function() {
                    return c(t.apply(this, arguments))
                }
            } else {
                return e.Deferred()[t === false ? "reject": "resolve"](t).promise()
            }
        }
    }
    function i(t, u) {
        return r.compact(r.map(p(u), function(v) {
            return n(t, v)
        }))
    }
    function n(t, v) {
        var u;
        return (u = v.parentNode) ? ((u !== t) ? n(t, u) : v) : false
    }
    var b = (function() {
        var w = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        function v(y) {
            return (y.nodeName === "IMG") ? [y] : r.toArray(y.getElementsByTagName("img"))
        }
        function u(y) {
            var z = y.src;
            if (z && z !== w) {
                y.src = w;
                return {
                    img: y,
                    src: z
                }
            }
        }
        function t(y) {
            return (y.img.src = y.src, y.img)
        }
        return function x(y) {
            var z = r.chain(p(y)).map(v).flatten().map(u).compact().value();
            return (z.length) ? r.partial(r.map, z, t) : r.noop
        }
    })();
    var g = (function() {
        var v = "about:blank";
        function w(y) {
            return (y.nodeName === "IFRAME") ? [y] : r.toArray(y.getElementsByTagName("iframe"))
        }
        function u(y) {
            var z = y.src;
            if (z && z !== v) {
                y.src = v;
                return {
                    iframe: y,
                    src: z
                }
            }
        }
        function t(y) {
            return (y.iframe.src = y.src, y.iframe)
        }
        return function x(y) {
            var z = r.chain(p(y)).map(w).flatten().map(u).compact().value();
            return (z.length) ? r.partial(r.map, z, t) : r.noop
        }
    })();
    var m = (function() {
        function v(x) {
            var w = r.toArray(x.querySelectorAll("[data-background-image]"));
            x.getAttribute("data-background-image") && w.push(x);
            return w
        }
        function u(x) {
            var w = x.getAttribute("data-background-image");
            if (w) {
                x.style.backgroundImage = "url(" + w + ")";
                x.removeAttribute("data-background-image");
                return x
            }
        }
        return function t(w) {
            return r.chain(p(w)).map(v).flatten().map(u).compact().value()
        }
    })();
    function a(w, u) {
        var v = u.options.onBeforeAttach;
        var t = u.options.onAfterAttach;
        return r.map(w, function(y) {
            var z = e.data(y);
            if (z.exclude) {
                return y
            }
            if (!z.reattach) {
                return y
            }
            v.call(u, y, z).then(function x() {
                z.reattach();
                z.reattach = null;
                t.call(u, y, z)
            })
        })
    }
    function o(v, t) {
        var u = t.options.onViewable;
        r.each(v, function(w) {
            var x = e.data(w);
            if (x.exclude) {
                return 
            }
            if (x.promise && x.promise.state && x.promise.state() === "pending") {
                return w
            }
            u.call(t, w, x, m)
        })
    }
    function k(x, u) {
        var w = u.options.styles;
        var t = u.options.onBeforeDetach;
        var v = u.options.onAfterDetach;
        return r.chain(x).map(function(z) {
            var A = e.data(z);
            if (A.exclude) {
                return z
            }
            if (A.promise && A.promise.state && A.promise.state() === "pending") {
                return z
            }(A.promise = t.call(u, z, A)).then(function B(C) {
                A.reattach = f(z, w, (C === "hide"));
                A.promise = null;
                v.call(u, z, A)
            }, function y() {
                A.promise = null
            });
            return z
        }).tap(function() {
            x = null
        }).value()
    }
    function j(t, v) {
        try {
            t.removeChild(v)
        } catch (u) {}
    }
    function f(u, B, y) {
        var v = r.toArray(u.children);
        var x = (function() {
            var C = r.pick(u.style, r.keys(B));
            r.extend(u.style, B, {
                height: e(u).height() + "px",
                width: e(u).width() + "px"
            });
            return function() {
                r.extend(u.style, C, {
                    height: "",
                    width: ""
                })
            }
        })();
        var A = r.map(v, y ? function(D) {
            var C = D.style.display;
            D.style.display = "none";
            return function() {
                D.style.display = C;
                return D
            }
        } : function(C) {
            j(u, C);
            return function() {
                u.appendChild(C);
                return C
            }
        });
        var t = b(v);
        var w = function() {
            if (y) {
                return r.noop
            } else {
                return g(v)
            }
        };
        v = null;
        B = null;
        return function z() {
            t();
            w();
            x();
            r.each(A, function(C) {
                C()
            })
        }
    }
    function q(B, u, C, z) {
        var v = [];
        var x = false;
        var y = 0;
        var t;
        var A;
        var w = u.length;
        while (y < w) {
            t = u[y++];
            A = t.getBoundingClientRect();
            if (t.nodeType !== 1) {
                continue
            }
            if (!(A.bottom < C || A.top > z)) {
                if (!x) {
                    x = (A.top > C)
                }
                v.push(t)
            } else {
                if (x) {
                    break
                }
            }
        }
        return v
    }
    function h(B, u, C, y) {
        var v = [];
        var x = (B.windowScrollY / B.documentHeight);
        (x >= 0) || (x = 0);
        (x <= 1) || (x = 1);
        var z = Math.floor(u.length * x);
        var w;
        var t;
        var A;
        w = z;
        while ((w >= 0) && (t = u[w--]) && (A = t.getBoundingClientRect()) && (C < A.bottom)) {
            if (t.nodeType !== 1) {
                continue
            }
            if (A.top < y) {
                v.push(t)
            }
        }
        w = z + 1;
        while ((t = u[w++]) && (A = t.getBoundingClientRect()) && (A.top < y)) {
            if (t.nodeType !== 1) {
                continue
            }
            if (C < A.bottom) {
                v.push(t)
            }
        }
        return v
    }
    function d(y, A) {
        var B =- (A.windowHeight * y.options.PAGES_ABOVE);
        var x = A.windowHeight + (A.windowHeight * y.options.PAGES_BELOW);
        var t = y.container.children;
        var u;
        if (y.options.nonlinear) {
            u = q(A, t, B, x)
        } else {
            u = h(A, t, B, x)
        }
        var z = r.difference(y.attached, u);
        if (z.length) {
            k(z, y)
        }
        var w = r.intersection(u, y.detached);
        if (w.length) {
            a(w, y)
        }
        var v = r.difference(u, y.attached);
        if (v.length) {
            o(v, y)
        }
        y.detached = r.without.apply(null, [y.detached].concat(w)).concat(z);
        y.attached = u
    }
    function l(v) {
        var t = e(v.container).get(0);
        if (!t) {
            throw "GhostList: Bad container form."
        }
        var u = r.bind(d, null, this);
        var w = r.debounce(r.bind(d, null, this), 500);
        if (v.eventor) {
            v.eventor.on("DOMEventor:flatscroll", u);
            v.eventor.on("DOMEventor:flatresize", w)
        } else {
            throw "GhostList depends on DOMEventor"
        }
        this.container = t;
        this.attached = [];
        this.detached = [];
        this.options = {
            styles: v.styles || {},
            onBeforeDetach: c(v.onBeforeDetach || r.noop),
            onAfterDetach: v.onAfterDetach || r.noop,
            onBeforeAttach: c(v.onBeforeAttach || r.noop),
            onAfterAttach: v.onAfterAttach || r.noop,
            onViewable: v.onViewable || r.noop,
            PAGES_ABOVE: (v.pages && v.pages[0] !== undefined) ? v.pages[0]: 1,
            PAGES_BELOW: (v.pages && v.pages[1] !== undefined) ? v.pages[1]: 1,
            nonlinear: v.nonlinear,
            eventor: v.eventor,
            boundOnScroll: u,
            boundOnResize: w
        };
        if (r.isFunction(v.initialize)) {
            v.initialize.call(this)
        }
    }
    l.prototype = {
        exclude: function(t) {
            return r.map(i(this.container, t), function(u) {
                return (e.data(u, "exclude", true), u)
            })
        },
        unexclude: function(t) {
            return r.map(i(this.container, t), function(u) {
                return (e.data(u, "exclude", false), u)
            })
        },
        clean: function() {},
        remove: function() {
            if (this.options.boundOnScroll) {
                this.options.eventor.off("DOMEventor:flatscroll", this.options.boundOnScroll);
                this.options.boundOnScroll = null
            }
            if (this.options.boundOnResize) {
                this.options.eventor.off("DOMEventor:flatresize", this.options.boundOnResize);
                this.options.boundOnResize = null
            }
        },
        relayout: function() {}
    };
    s.GhostList = l
})(_, jQuery, Tumblr);
/*! scripts/fast_dashboard.js */
(function(b, c, a) {
    Tumblr.Flags("fast_dashboard")(function() {
        var d = function() {
            return !c.browser.mozilla ? function(f) {
                var e = c(f).children(".post").first();
                if (e.hasClass("is_audio")) {
                    return "hide"
                }
                if (e.hasClass("is_direct_video")) {
                    return false
                }
                return !e.hasClass("is_persistent")
            } : function(f) {
                var g = ["is_video", "is_audio", "is_persistent"];
                var e = c(f).children(".post").first();
                return !b.some(g, function(h) {
                    return e.hasClass(h)
                })
            }
        };
        c(function() {
            a.fastDashboard = new Tumblr.GhostList({
                container: "#posts",
                pages: [1, 2],
                eventor: Tumblr.Events,
                styles: {
                    backgroundColor: "#ffffff",
                    borderRadius: "6px"
                },
                initialize: function() {
                    this.exclude(this.container.querySelector("#new_post_buttons"));
                    this.exclude(this.container.querySelector("#tumblr_radar.premium"));
                    this.exclude(this.container.querySelector(".post.sponsored_post"));
                    this.exclude(this.container.querySelector(".post.pt"))
                },
                onBeforeDetach: d(),
                onAfterDetach: function() {},
                onBeforeAttach: function() {},
                onAfterAttach: function() {}
            })
        })
    })
})(_, jQuery, Tumblr);
/*! scripts/application/keycommands.js */
(function(b, a) {
    var c = Backbone.View.extend({
        el: "body",
        post_types: ["text", "photo", "quote", "link", "chat", "audio", "video"],
        suspended: false,
        suspended_exceptions: [],
        last_key_code: 0,
        mouseout_id: null,
        events: {
            keydown: "keydown",
            keyup: "keyup",
            "click .post_tab_switching .tab_post_type": "click_tab_switch",
            "mouseover .post_tab_switching .tab_post_type": "mouseover_tab_switch",
            "mouseout .post_tab_switching .tab_post_type": "mouseout_tab_switch",
        },
        click_tab_switch: function(d) {
            this.post_keys({
                toggle: "stop"
            })
        },
        mouseover_tab_switch: function(d) {
            window.clearTimeout(this.mouseout_id);
            this.post_keys({
                toggle: "start",
                pos: d.currentTarget.attributes["data-index"].value
            })
        },
        mouseout_tab_switch: function(d) {
            this.mouseout_id = window.setTimeout(_.bind(function() {
                this.post_keys({
                    toggle: "clear"
                })
            }, this), 250)
        },
        initialize: function() {
            this.logged_in = (!b(document.body).hasClass("logged_out"));
            this.auto_paginate = Tumblr.auto_paginate || false;
            this.animate_scroll = (Tumblr.animate_scroll !== undefined) ? Tumblr.animate_scroll : false;
            this.scroll_speed = 100;
            if (Tumblr.Flags.bool("dashboard_refresh")) {
                this.scroll_offset = 68
            } else {
                this.scroll_offset = 7
            }
            this.pressed_keys = [];
            this.current_post = null;
            if (!Tumblr.enable_dashboard_key_commands) {
                this.suspend()
            }
            this.blog_switcher_detection();
            this.is_xbox = Tumblr.Flags.bool("is_xbox");
            if (this.is_xbox) {
                this.animate_scroll = false
            }
            if (Tumblr.Events) {
                this.listenTo(Tumblr.Events, "keycommands:suspend", this.suspend);
                this.listenTo(Tumblr.Events, "keycommands:resume", this.resume);
                this.listenTo(Tumblr.Events, "fastCompose:create", this.create_new)
            }
        },
        suspend: function(d) {
            this.suspended = true;
            this.suspended_exceptions = d || [];
            Tumblr.Prima.Events.trigger("drawer:suspend")
        },
        resume: function() {
            this.suspended = false;
            this.suspended_exceptions = [];
            Tumblr.Prima.Events.trigger("drawer:resume")
        },
        left: function() {
            if (!this.auto_paginate&&!b("#tumblr_lightbox").length) {
                var d = b("#previous_page_link").attr("href");
                if (d) {
                    location.href = d
                }
            }
        },
        right: function() {
            if (!this.auto_paginate&&!b("#tumblr_lightbox").length) {
                var d = b("#next_page_link").attr("href");
                if (d) {
                    location.href = d
                }
            }
        },
        next: function(d) {
            if (d > (this.current_position + 2) && (d < this.go_to_position ||!this.go_to_position)) {
                Tumblr.Popover.hide_all();
                this.go_to_position = d
            }
        },
        previous: function(d) {
            if (d < (this.current_position - 2) && d > this.go_to_position) {
                Tumblr.Popover.hide_all();
                this.go_to_position = d
            }
        },
        check_offset: function(d) {
            return (Math.abs(d - this.current_position) < 2)
        },
        update_post_positions: function() {
            var d = {};
            b("#posts [data-pageable]").each(function(f, g) {
                var e = b(g);
                var h = e.data("pageable") || _.uniqueId("pageable_");
                d[h] = e.offset().top
            });
            this.post_positions = d
        },
        get_parse_params: function(d) {
            var e = window.location.pathname.split("/");
            e.shift();
            if (e[0] === "tagged") {
                return "/new/" + d + "?post[tags]=" + e[1]
            } else {
                return "/new/" + d
            }
        },
        create_new: function(i) {
            var g = i.type;
            if (Tumblr.Flags.bool("new_post_forms_v2")) {
                Backbone.history.navigate("fast/new/" + g, {
                    trigger: true
                })
            } else {
                if (typeof Tumblr.PostForms === "object") {
                    var d = b("#new_post_label_" + g);
                    var f = d.length ? d.attr("href"): this.get_parse_params(g);
                    var h = Tumblr.PostForms.endpoints_to_types[g];
                    var j = Tumblr.PostForms.parse_url_params(f);
                    j.detached = true;
                    j.loggingData = i.loggingData;
                    Tumblr.PostForms.create({
                        type: h,
                        attach_to: "body",
                        detached: true,
                        mode: "index"
                    }, j)
                } else {
                    document.location.href = "/new/" + g;
                    this.suspend()
                }
            }
        },
        like: function(e) {
            var d = b("#" + e);
            var f = d.find(".post_control.like");
            var g = d.data("post-id");
            if (f.length && g) {
                Tumblr.Events.trigger("post:like", g, "keyboard")
            }
        },
        notes: function(f) {
            var e = b("#" + f);
            var d = e.find(".post_notes_label");
            if (d.length < 1 || d.find(".note_link_current").text() === "") {
                return 
            }
            var g = d.offset().top - 500, h;
            if (e.find(".post_notes .popover").length > 0 && g > e.offset().top) {
                b("html,body").animate({
                    scrollTop: g
                }, 200, function() {
                    if (!h) {
                        d.trigger("click")
                    }
                    h = true
                })
            } else {
                d.trigger("click")
            }
        },
        reblog: function(e) {
            var d = b("#" + e);
            var f = d.find(".post_control.reblog");
            if (f.length) {
                f.trigger("click")
            }
        },
        follow: function(e) {
            var d = b("#" + e);
            var f = d.find(".post_header_button.follow");
            if (f.length) {
                f.trigger("click")
            }
        },
        dock: function(e) {
            var d = b("#" + e);
            var h = d.find(".dock_video_button.dock");
            if (h.length) {
                h.trigger("click")
            } else {
                var f = b(".docked");
                var g = f.find(".dock_video_button.undock");
                if (g.length) {
                    g.trigger("click")
                }
            }
        },
        dismiss: function(f) {
            var d = b('[data-pageable="' + f + '"]');
            var e = d.find('[data-post-action="remove"]');
            if (e.length) {
                e.trigger("click")
            }
        },
        elevate: function() {
            var d = window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            if (d >= 1500) {
                b("html, body").stop(true).animate({
                    scrollTop: 0
                }, "slow")
            }
        },
        play: function(g, i) {
            var d = b("#" + g), h = d.data("type");
            if (h == "video") {
                var f = d.find("iframe.tumblr_video_iframe");
                var j = d.find(".retro_video_preview");
                if (f.length > 0) {
                    f[0].contentWindow.postMessage("toggle", f.attr("data-origin"));
                    f[0].contentWindow.focus()
                } else {
                    if (j.length > 0) {
                        b(".big_play_button", j).click();
                        i.preventDefault()
                    }
                }
            }
        },
        fast_reblog: function(f, g, e) {
            var h = b("#tumblr_form_key").attr("content"), d = b("#" + f), i = d.find(".post_control.reblog:not(.reblogged)");
            if (i.length && this.check_offset(g)&&!i.data("reblogged")) {
                Tumblr.Events.trigger("post:fastreblog", b("#" + f).data("post-id"), e);
                i.data("reblogged", true)
            }
        },
        show_plexi: function() {
            if (Tumblr.Plexi.findByToken("body-plexi")) {
                this.body_plexi = Tumblr.Plexi.findByToken("body-plexi")
            }
            if (!this.body_plexi) {
                this.body_plexi = new Tumblr.Plexi({
                    token: "body-plexi"
                });
                this.body_plexi.create(document.body, {
                    insertAt: "top",
                    cssClass: "color"
                })
            }
            this.body_plexi.show({
                transition_class: "fast"
            });
            Tumblr.Prima.Events.trigger("drawer:suspend")
        },
        hide_plexi: function() {
            if (Tumblr.Plexi.findByToken("body-plexi")) {
                this.body_plexi = Tumblr.Plexi.findByToken("body-plexi")
            }
            if (this.body_plexi) {
                this.body_plexi.hide()
            }
            Tumblr.Prima.Events.trigger("drawer:resume")
        },
        post_keys: function(g) {
            g.toggle = g.toggle || null;
            g.shift = g.shift || null;
            g.pos = g.pos || null;
            if (this.tab_switching) {
                return 
            }
            var e = b("#post_tab_switching");
            if (!e.length) {
                return 
            }
            var f = e.find(".tab_post_type");
            if (g.toggle == "cancel") {
                if (!this.creating_new) {
                    this.hide_plexi()
                }
                this.creating_new = false;
                e.removeClass("active");
                clearTimeout(this.show_timeout);
                clearTimeout(this.fade_timeout);
                this.cancel_timeout = setTimeout(function() {
                    e.addClass("inactive undimmed")
                }, 50);
                this.post_keying = false;
                this.post_tab_index = undefined;
                return 
            }
            if (g.toggle == "clear") {
                this.post_tab_index = undefined;
                f.removeClass("selected loading")
            }
            if (g.toggle == "stop") {
                var d = null;
                if (this.post_tab_index !== undefined) {
                    d = this.post_types[this.post_tab_index]
                }
                this.post_tab_index = undefined;
                if (d) {
                    this.creating_new = true;
                    this.create_new({
                        type: d
                    })
                } else {
                    this.hide_plexi()
                }
                this.post_keys({
                    toggle: "cancel"
                });
                return 
            }
            if (g.toggle == "init") {
                this.show_plexi();
                clearTimeout(this.cancel_timeout);
                clearTimeout(this.fade_timeout);
                setTimeout(_.bind(function() {
                    f.removeClass("selected loading");
                    e.removeClass("inactive");
                    e.addClass("active");
                    this.post_keys({
                        toggle: "start"
                    })
                }, this), 50);
                this.post_keying = true;
                return 
            }
            if (g.toggle == "start") {
                clearTimeout(this.show_timeout);
                if (g.pos && (g.pos - 1 == this.post_tab_index)) {
                    return 
                }
                setTimeout(_.bind(function() {
                    e.removeClass("undimmed");
                    f.removeClass("selected loading");
                    if (this.post_tab_index === undefined) {
                        this.post_tab_index = g.pos ? g.pos - 1 : 0
                    } else {
                        this.post_tab_index = g.pos ? g.pos - 1 : (this.post_tab_index + ((g.shift)?-1 : 1));
                        if (this.post_tab_index >= 7) {
                            this.post_tab_index = 0
                        }
                        if (this.post_tab_index < 0) {
                            this.post_tab_index = 6
                        }
                    }
                    e.addClass("active");
                    this.tab_current_post_type = f.eq(this.post_tab_index);
                    this.tab_current_post_type.addClass("selected")
                }, this), 1);
                return 
            }
        },
        blog_switcher: function(h) {
            h.toggle = h.toggle || null;
            h.shift = h.shift || null;
            if (this.post_keying) {
                return 
            }
            this.tab_switching = (h.toggle.length) ? true : false;
            var e = b("#tab_switching");
            if (!e.length) {
                return 
            }
            var g = e.find(".tab_blog");
            g.removeClass("selected loading");
            if (h.toggle == "cancel") {
                this.tab_switching = false;
                this.tab_index = undefined;
                this.hide_plexi();
                e.removeClass("active");
                setTimeout(function() {
                    e.addClass("inactive")
                }, 500);
                return 
            }
            if (h.toggle == "stop") {
                this.tab_index = undefined;
                var d = this.tab_current_blog.find("a.blog_name").attr("href");
                if (!document.location.href.match(d)) {
                    this.tab_current_blog.addClass("loading");
                    var f = new Spinner(Tumblr.spinners.white).spin();
                    this.tab_current_blog.append(f.el);
                    document.location.href = d;
                    this.suspend();
                    b(window).on("keydown", function() {
                        return false
                    })
                } else {
                    this.blog_switcher({
                        toggle: "cancel"
                    })
                }
                return 
            }
            if (h.toggle == "start") {
                e.removeClass("inactive");
                this.show_plexi();
                setTimeout(_.bind(function() {
                    if (this.tab_index === undefined) {
                        this.tab_index = 1
                    } else {
                        this.tab_index = this.tab_index + ((h.shift)?-1 : 1);
                        if (this.tab_index >= g.length) {
                            this.tab_index = 0
                        }
                        if (this.tab_index < 0) {
                            this.tab_index = g.length - 1
                        }
                    }
                    e.addClass("active");
                    this.tab_current_blog = g.eq(this.tab_index);
                    this.tab_current_blog.addClass("selected")
                }, this), 50);
                return 
            }
        },
        blog_switcher_detection: function() {
            if (window.devicePixelRatio) {
                if (escape(navigator.javaEnabled.toString()) == "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D") {
                    b("html").addClass("tab_switcher_chrome")
                } else {
                    if (escape(navigator.javaEnabled.toString()) != "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D") {
                        b("html").addClass("tab_switcher_safari")
                    }
                }
            }
        },
        match_modifier_keys: function(h, d) {
            if (typeof d == "string") {
                d = [d]
            }
            var f = {
                shift: _.indexOf(d, "shift")>-1,
                ctrl: _.indexOf(d, "ctrl")>-1,
                alt: _.indexOf(d, "alt")>-1,
                meta: _.indexOf(d, "meta")>-1
            };
            var g = {
                shift: h.shiftKey,
                ctrl: h.ctrlKey,
                alt: h.altKey,
                meta: h.metaKey
            };
            return _.isEqual(f, g)
        },
        keydown: function(l) {
            var f = l.charCode ? l.charCode: l.keyCode;
            if (this.suspended && _.indexOf(this.suspended_exceptions, f) < 0) {
                return 
            }
            if (this.animating) {
                return 
            }
            var m = l ? l.target: window.event.srcElement;
            if (b(m).is("input:focus") || b(m).is(".result_link:focus")) {
                return 
            }
            this.update_post_positions();
            this.current_position = (window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop) + this.scroll_offset;
            this.go_to_position = 0;
            var o = (l.shiftKey || l.ctrlKey || l.altKey || l.metaKey), k;
            this.pressed_keys[f] = 1;
            if ((this.post_keying || this.tab_switching)&&!(l.ctrlKey || l.altKey || l.metaKey)) {
                var j = [74, 75, 190, 76, 78, 82, 32, 38, 40, 33, 34, 35, 36];
                if (_.indexOf(j, f) >= 0) {
                    return false
                }
            }
            if (f == 37) {
                this.left()
            } else {
                if (f == 39) {
                    this.right()
                } else {
                    if (!o) {
                        for (k in this.post_positions) {
                            var h = k, n = this.post_positions[k], d = b;
                            if (f == 74) {
                                this.next(n);
                                Tumblr.Events.trigger("keycommands:jk")
                            }
                            if (f == 75) {
                                this.previous(n);
                                Tumblr.Events.trigger("keycommands:jk")
                            }
                            if (this.is_xbox && f == 40) {
                                this.next(n);
                                l.preventDefault()
                            }
                            if (this.is_xbox && f == 38) {
                                this.previous(n);
                                l.preventDefault()
                            }
                            if (f == 190) {
                                this.elevate();
                                l.preventDefault();
                                return false
                            }
                            if (this.check_offset(n)) {
                                this.current_post = b('[data-pageable="' + h + '"]');
                                if (f == 76) {
                                    this.like(h);
                                    Tumblr.Events.trigger("keycommands:like")
                                }
                                if (f == 78) {
                                    this.notes(h);
                                    Tumblr.Events.trigger("keycommands:notes")
                                }
                                if (f == 82) {
                                    this.reblog(h);
                                    Tumblr.Events.trigger("keycommands:reblog")
                                }
                                if (f == 70) {
                                    this.follow(h);
                                    Tumblr.Events.trigger("keycommands:follow")
                                }
                                if (f == 68) {
                                    this.dock(h);
                                    Tumblr.Events.trigger("keycommands:dock")
                                }
                                if (f == 13&&!this.post_keying) {
                                    if (Tumblr.Peepr && Tumblr.Flags.bool("indash_blogs")) {
                                        var g = this.current_post.find(".post_avatar_link, .blog_name");
                                        g.first().trigger("click");
                                        Tumblr.Events.trigger("keycommands:peepr")
                                    }
                                }
                                if (f == 32) {
                                    this.play(h, l);
                                    if (this.current_post.length) {
                                        if (this.current_post.attr("data-type") == "video" && this.current_post.attr("data-direct-video")) {
                                            return false
                                        }
                                    }
                                    return true
                                }
                                if (f == 88) {
                                    this.dismiss(h);
                                    Tumblr.Events.trigger("keycommands:dismiss")
                                }
                            }
                        }
                        if (f == 74&&!this.go_to_position) {
                            this.go_to_position = b(document).height()
                        }
                        if (this.animate_scroll) {
                            if (this.go_to_position&&!this.animating) {
                                this.animating = true;
                                b("html,body").stop().animate({
                                    scrollTop: this.go_to_position - this.scroll_offset
                                }, this.scroll_speed, _.bind(function() {
                                    this.animating = false
                                }, this))
                            }
                        } else {
                            if (this.go_to_position) {
                                window.scrollTo(0, this.go_to_position - this.scroll_offset)
                            }
                        }
                    }
                }
            }
            if (navigator.platform == "MacIntel") {
                if (l.altKey && f == 9) {
                    if (!this.tab_switching) {
                        Tumblr.Events.trigger("keycommands:blog_switching")
                    }
                    this.blog_switcher({
                        toggle: "start",
                        shift: l.shiftKey
                    });
                    return false
                }
                if (l.altKey && f == 192) {
                    this.blog_switcher({
                        toggle: "start",
                        shift: true
                    });
                    return false
                }
                if (l.altKey && f == 27 && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "cancel"
                    });
                    return false
                }
                if (l.altKey && f == 37 && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "start",
                        shift: true
                    });
                    return false
                }
                if (l.altKey && f == 39 && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "start"
                    });
                    return false
                }
                if (l.altKey && f == 82 && this.logged_in) {
                    for (k in this.post_positions) {
                        this.fast_reblog(k, this.post_positions[k])
                    }
                    Tumblr.Events.trigger("keycommands:fast_reblog");
                    return false
                }
                if (l.altKey && f == 69 && this.logged_in) {
                    for (k in this.post_positions) {
                        this.fast_reblog(k, this.post_positions[k], true)
                    }
                    Tumblr.Events.trigger("keycommands:fast_reblog_queue");
                    return false
                }
            }
            if (navigator.platform == "Win32") {
                if (this.pressed_keys[90] && this.pressed_keys[9]) {
                    if (!this.tab_switching) {
                        Tumblr.Events.trigger("keycommands:blog_switching")
                    }
                    this.blog_switcher({
                        toggle: "start",
                        shift: l.shiftKey
                    });
                    return false
                }
                if (this.pressed_keys[90] && this.pressed_keys[27] && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "cancel"
                    });
                    return false
                }
                if (this.pressed_keys[90] && this.pressed_keys[192]) {
                    this.blog_switcher({
                        toggle: "start",
                        shift: true
                    });
                    return false
                }
                if (this.pressed_keys[90] && this.pressed_keys[37] && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "start",
                        shift: true
                    });
                    return false
                }
                if (this.pressed_keys[90] && this.pressed_keys[39] && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "start"
                    });
                    return false
                }
                if (l.shiftKey && f == 82 && this.logged_in) {
                    for (k in this.post_positions) {
                        this.fast_reblog(k, this.post_positions[k])
                    }
                    Tumblr.Events.trigger("keycommands:fast_reblog");
                    return false
                }
                if (l.shiftKey && f == 69 && this.logged_in) {
                    for (k in this.post_positions) {
                        this.fast_reblog(k, this.post_positions[k], true)
                    }
                    Tumblr.Events.trigger("keycommands:fast_reblog_queue");
                    return false
                }
            }
        },
        keyup: function(g) {
            var f = g.charCode ? g.charCode: g.keyCode, d = (g.shiftKey || g.ctrlKey || g.altKey || g.metaKey);
            this.pressed_keys[f] = 0;
            if (navigator.platform == "MacIntel") {
                if (!g.altKey && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "stop"
                    });
                    return false
                }
            }
            if (navigator.platform == "Win32") {
                if (!this.pressed_keys[90] && this.tab_switching) {
                    this.blog_switcher({
                        toggle: "stop"
                    });
                    return false
                }
            }
        }
    });
    a.KeyCommandsConstructor = c
})(jQuery, Tumblr);
/*! scripts/posts/models/post.js */
(function(b) {
    var a = Backbone.Model.extend({
        initialize: function(c) {
            this._createPostTumblelogModel("tumblelog", this.get("tumblelog-data"));
            this._createPostTumblelogModel("parentTumblelog", this.get("tumblelog-parent-data"));
            this._createPostTumblelogModel("rootTumblelog", this.get("tumblelog-root-data"))
        },
        _createPostTumblelogModel: function(e, d) {
            e = e || "tumblelog";
            d = d || false;
            var c = false;
            if (d) {
                c = new Tumblr.Prima.Models.Tumblelog(_(d).omit(_.isUndefined).omit(_.isNull).value())
            }
            this[e] = c
        },
        getLikeSource: function(c) {
            c = c || "like";
            var d = "LIKE_";
            switch (c) {
            case"unlike":
                d = "UNLIKE_";
                break;
            case"reply":
                d = "REPLY_";
                break;
            case"ignore":
                d = "IGNORE_"
            }
            var e = location.pathname;
            if (e.match(/^\/dashboard/)) {
                return d + "SOURCE_DASHBOARD"
            }
            if (e.match(/^\/tagged/)) {
                return d + "SOURCE_TAG_PAGE"
            }
            if (e.match(/^\/likes/)) {
                return d + "SOURCE_LIKES_PAGE"
            }
            if (e.match(/^\/inbox/)) {
                return d + "SOURCE_INBOX"
            }
            if (e.match(/^\/search/)) {
                return d + "SOURCE_SEARCH_RESULTS_PAGE"
            }
            if (e.match(/^\/indash_blog\/peepr/)) {
                return d + this.getPeeprSource()
            }
            return d + "SOURCE_UNKNOWN"
        },
        getPeeprSource: function() {
            if (window.parent && window.parent.location) {
                var c = window.parent.location.pathname;
                if (c.match(/search/)) {
                    return "SOURCE_SEARCH_PEEPR"
                }
            }
            return "SOURCE_PEEPR"
        },
        likePayload: function(d, c) {
            d = d || "mouse";
            c = c || "LIKE_SOURCE_UNKNOWN";
            return {
                id: this.get("id"),
                root_id: this.get("root_id"),
                key: this.get("reblog_key"),
                method: d,
                source: c,
                placement_id: this.get("placement_id") || false,
                is_recommended: this.get("is_recommended") || "",
                is_docked: this.get("is_docked") || "",
                pt: this.get("pt") || false
            }
        },
        like: function(c) {
            if (this.get("is_mine")) {
                return 
            }
            if (!this.get("liked")) {
                this.set("liked", true);
                Tumblr.like(this.likePayload(c, this.getLikeSource("like"))).error(_.bind(this.trigger, this, "like:failure"))
            }
            this.trigger("like:success", this);
            Tumblr.Events.trigger("post:like:success", this.get("id"))
        },
        xhr_request: function(c, f, d) {
            f = _.extend(f, {
                form_key: this.get("form_key")
            });
            var e = b.ajax({
                data: JSON.stringify(f),
                type: "POST",
                url: c
            });
            e.done(_.bind(function(g) {
                if (d[200]) {
                    d[200].call(this, g)
                }
            }, this));
            e.fail(_.bind(function(g) {
                if (d[g.status]) {
                    d[g.status].call(this, g.status)
                }
            }, this))
        },
        unlike: function() {
            this.set("liked", false);
            Tumblr.unlike(this.likePayload("mouse", this.getLikeSource("unlike"))).error(_.bind(this.trigger, this, "unlike:failure"));
            this.trigger("unlike:success", this)
        },
        toggleLike: function() {
            if (this.get("liked")) {
                this.unlike()
            } else {
                this.like()
            }
        },
        reblog: function() {
            if (this.get("reblogged")) {
                return 
            }
            this.set("reblogged", true);
            return b.ajax({
                url: "/fast_reblog",
                type: "post",
                data: {
                    reblog_key: this.get("reblog_key"),
                    reblog_post_id: this.get("id"),
                    form_key: b("#tumblr_form_key").attr("content"),
                    pt: this.get("pt")
                },
                success: _.bind(function() {
                    this.set("reblogged", true)
                }, this),
                error: _.bind(function() {
                    this.set("reblogged", false)
                }, this)
            })
        },
        fastReblog: function(c) {
            c = c || false;
            this.trigger("fastreblog:success", c);
            this.set("reblogged", true);
            return b.ajax({
                url: "/fast_reblog",
                type: "post",
                data: {
                    reblog_key: this.get("reblog_key"),
                    reblog_post_id: this.get("id"),
                    form_key: b("#tumblr_form_key").attr("content"),
                    queue: c,
                    pt: this.get("pt")
                },
                success: _.bind(function(d) {
                    this.set("reblogged", true);
                    this.show_notification(d.response)
                }, this),
                error: _.bind(function() {
                    this.set("reblogged", false)
                }, this)
            })
        },
        embedFocus: function() {
            this.trigger("embed:focus", this)
        },
        updateReblogControl: function(c) {
            this.trigger("reblog:success", c)
        },
        show_notification: function(c) {
            _.delay(function() {
                if (typeof Tumblr.Toaster === "object" && typeof Tumblr.ToastKit === "object") {
                    var d = Tumblr.ToastKit.notification_center_convert(c.message, {
                        url: c.post_tumblelog.post_url,
                        tumblelog: {
                            name: c.post_tumblelog.name_or_id,
                            url: c.post_tumblelog.url,
                            avatar: c.post_tumblelog.avatar
                        }
                    });
                    Tumblr.Toaster.add_toast(d)
                }
            }, 250)
        },
        reply: function(d) {
            var c = Tumblr.reply({
                reply_text: d,
                post_id: this.get("id"),
                tumblelog: this.get("tumblelog"),
                tumblelog_key: this.get("tumblelog_key"),
                source: this.getLikeSource("reply")
            });
            c.done(_.bind(function() {
                this.trigger("replied")
            }, this));
            return c
        },
        destroy: function() {
            var c = {
                post_id: this.get("id"),
                channel_id: this.get("tumblelog")
            };
            this.xhr_request("/svc/post/delete", c, {
                200: _.bind(this.trigger, this, "destroy:success"),
                401: _.bind(this.trigger, this, "destroy:failure"),
                403: _.bind(this.trigger, this, "destroy:failure"),
                500: _.bind(this.trigger, this, "destroy:failure"),
            })
        },
        fan_mail: function() {
            if (_.isObject(Tumblr.FanMail)) {
                var c = {
                    href: Tumblr.FanMail.make_url_from_tumblelog(this.get("tumblelog"))
                };
                Tumblr.FanMail.show(c)
            }
        },
        publish: function() {
            var c = b.ajax({
                url: "/publish",
                type: "post",
                data: {
                    form_key: this.get("form_key"),
                    id: this.get("id")
                }
            });
            c.fail(_.bind(this.trigger, this, "publish:failure"));
            c.done(_.bind(this.trigger, this, "publish:success"))
        },
        promote: function(c) {
            var d = b.ajax({
                url: "/svc/promote",
                type: "post",
                data: {
                    tag: c,
                    post_id: this.get("id"),
                    form_key: this.get("form_key"),
                    reblog_key: this.get("reblog_key"),
                    tumblelog_name: this.get("tumblelog")
                }
            });
            d.fail(_.bind(this.trigger, this, "promote:failure"));
            d.done(_.bind(function(e) {
                if (e && e.status && e.status === "failure") {
                    this.trigger("promote:failure", e.error)
                } else {
                    this.trigger("promote:success", c)
                }
            }, this));
            return d
        },
        unpromote: function(c) {
            var d = b.ajax({
                url: "/svc/unpromote",
                type: "post",
                data: {
                    tag_id: c,
                    post_id: this.get("id"),
                    form_key: this.get("form_key"),
                    reblog_key: this.get("reblog_key"),
                    tumblelog_name: this.get("tumblelog")
                }
            });
            d.fail(_.bind(this.trigger, this, "unpromote:failure"));
            d.done(_.bind(this.trigger, this, "unpromote:success"));
            return d
        },
        follow: function(d, c) {
            d = d || this.get("tumblelog");
            Tumblr.follow({
                tumblelog: d,
                source: c,
                placement_id: this.get("placement_id") || false,
                pt: this.get("pt")
            }, {
                success: b.proxy(function() {
                    Tumblr.Events.trigger("follow_tumblelog", {
                        tumblelog: d
                    });
                    this.trigger("follow:success", this)
                }, this),
                error: b.proxy(function() {
                    this.trigger("follow:failure", this)
                }, this)
            })
        },
        ignore: function(f) {
            f = f || this.get("tumblelog");
            var e = Tumblr.ignore({
                tumblelog: f,
                source: this.getLikeSource("ignore")
            });
            var d = f.match(/post\_id\:/);
            var c=!d;
            e.done(_.bind(function() {
                Tumblr.Events.trigger("block_tumblelog", {
                    tumblelog: f,
                    can_report: c
                });
                if (f === this.get("tumblelog")) {
                    this.trigger("ignore:success", this)
                } else {
                    this.dismiss()
                }
            }, this));
            e.fail(_.bind(this.trigger, this, "ignore:failure"))
        },
        queue: function() {
            var c = b.ajax({
                url: "/publish",
                type: "post",
                data: {
                    form_key: this.get("form_key"),
                    id: this.get("id"),
                    queue: "queue"
                }
            });
            c.fail(_.bind(this.trigger, this, "queue:failure"));
            c.done(_.bind(this.trigger, this, "queue:success"))
        },
        removeSource: function() {
            var c = b.ajax({
                url: "/remove_app_attribution",
                type: "post",
                dataType: "text",
                data: {
                    post_id: this.get("id"),
                    tumblelog_id: this.get("tumblelog"),
                    form_key: this.get("form_key")
                }
            });
            c.done(_.bind(this.trigger, this, "remove_source:success"));
            c.fail(_.bind(this.trigger, this, "remove_source:failure"));
            return c
        },
        dismiss: function() {
            this.trigger("dismiss", this)
        },
        approve: function(c) {
            var e = {
                form_key: this.get("form_key"),
                id: this.get("id")
            };
            if (c) {
                e.queue = true
            }
            var d = b.ajax({
                url: "/approve_submission/" + this.get("id"),
                type: "post",
                dataType: "text",
                data: e
            });
            d.fail(_.bind(this.trigger, this, "approve:failure"));
            d.done(_.bind(this.trigger, this, "approve:success"));
            return d
        },
        deny: function() {
            var c = b.ajax({
                url: "/deny_submission",
                type: "post",
                dataType: "text",
                data: {
                    pid: this.get("id"),
                    form_key: this.get("form_key")
                }
            });
            c.fail(_.bind(this.trigger, this, "deny:failure"));
            c.done(_.bind(this.trigger, this, "deny:success"));
            return c
        },
        answer: function(d) {
            var c = b.ajax({
                url: "/answer",
                type: "post",
                data: {
                    form_key: this.get("form_key"),
                    post_id: this.get("id"),
                    tumblelog: this.get("tumblelog"),
                    key: this.get("tumblelog_key"),
                    answer_text: d
                }
            });
            c.fail(_.bind(this.trigger, this, "answer:failure"));
            c.done(_.bind(this.trigger, this, "answer:success"));
            return c
        }
    });
    (Tumblr.Models || (Tumblr.Models = {})).Post = Tumblr.Post = a
})(jQuery);
/*! scripts/posts/collections/posts.js */
(function(b) {
    var a = Backbone.Collection.extend({
        model: Tumblr.Flags.bool("prima_post_model") ? Tumblr.Prima.Models.Post: Tumblr.Post,
        initialize: function() {
            this.on("change:liked", this.updateLikeStatus, this);
            this.on("ignore:success", this.dismiss, this);
            this.on("unfollow:success", this.dismiss, this)
        },
        updateLikeStatus: function(c, d) {
            var e = this.whereBy({
                liked: !d,
                root_id: c.get("root_id")
            });
            e.invoke("set", {
                liked: d
            });
            if (c.get("liked")) {
                e.invoke("trigger", "like:success")
            } else {
                e.invoke("trigger", "unlike:success")
            }
        },
        dismiss: function(c) {
            this.whereBy({
                tumblelog: c.get("tumblelog"),
                sponsored: false
            }).invoke("dismiss")
        },
        whereBy: function(c) {
            return new a(this.where(c))
        }
    });
    Tumblr.Posts = new a()
})(jQuery);
/*! scripts/posts/views/posts_view.js */
(function(c) {
    var a = Tumblr.Events;
    var b = Tumblr.Flags("is_logged_in");
    Tumblr.PostsView = Backbone.View.extend({
        el: "#posts",
        initialize: function() {
            this.collection = Tumblr.Posts;
            this.postViews = [];
            this.form_key = c("#tumblr_form_key").attr("content");
            this.createPosts();
            this.listenTo(Tumblr.AutoPaginator, "after", this.createPosts);
            this.listenTo(a, "posts:load", this.createPosts);
            this.listenTo(a, "post:like", this.likePostById);
            this.listenTo(a, "post:fastreblog", this.fastReblogById);
            this.listenTo(a, "post:embed:focus", this.embedFocus);
            this.listenTo(a, "post:form:success", this.postFormSubmit)
        },
        createPosts: function() {
            _.forEach(this.$el.find(".post[data-json]:not([data-view-exists])"), this.createPost, this)
        },
        createPostModelFromEl: function(d) {
            if (Tumblr.Flags.bool("prima_post_model")) {
                return new Tumblr.Prima.Models.Post(d.data("json"))
            } else {
                return new Tumblr.Post({
                    id: d.attr("data-post-id"),
                    type: d.attr("data-type"),
                    root_id: d.attr("data-root-id"),
                    "tumblelog-data": d.data("json")["tumblelog-data"],
                    "tumblelog-parent-data": d.data("json")["tumblelog-parent-data"],
                    "tumblelog-root-data": d.data("json")["tumblelog-root-data"],
                    tumblelog: d.attr("data-tumblelog-name"),
                    tumblelog_key: d.attr("data-tumblelog-key"),
                    reblog_key: d.attr("data-reblog-key"),
                    is_mine: d.hasClass("is_mine"),
                    accepts_answers: (d.attr("data-accepts-answers") === "1"),
                    reblogged: false,
                    liked: d.find(".post_control.like").hasClass("liked"),
                    form_key: this.form_key,
                    sponsored: (d.attr("data-sponsored") === "1"),
                    premium_tracked: d.hasClass("pt"),
                    is_recommended: (d.attr("data-is-recommended") === "1"),
                    placement_id: d.attr("data-placement-id") || false,
                    featured_tags: (d.attr("data-featured-tags") || "").split(","),
                    reblog_source: d.attr("data-reblog-source"),
                    pt: d.attr("data-pt")
                })
            }
        },
        createPost: function(h) {
            var d = c(h);
            var g = this.createPostModelFromEl(d);
            var e = b(function() {
                var i = (g.get("type") === "fan_mail") ? Tumblr.FanMailView: Tumblr.PostView;
                return new i({
                    el: d,
                    model: g
                })
            }, function() {
                return new Tumblr.PostViewLoggedOut({
                    el: d,
                    model: g
                })
            });
            this.collection.add(g);
            this.postViews.push(e);
            if (Tumblr.Prima && Tumblr.Prima.Events && (g.get("type") === "video")) {
                var f = d.find("video[data-crt-video]");
                if (f.length) {
                    Tumblr.Prima.Events.trigger("CrtControl:newPlayer", f, {
                        attributes: {
                            autoplay: true
                        }
                    })
                }
            }
            d.attr("data-view-exists", true);
            return e
        },
        likePostById: function(e, d) {
            d = d || "mouse";
            this.collection.get(e).like(d)
        },
        fastReblogById: function(e, d) {
            this.collection.get(e).fastReblog(d)
        },
        embedFocus: function(e) {
            var d = this.collection.get(e.embedData.post_id);
            if (!_.isEmpty(d)) {
                d.embedFocus()
            }
        },
        postFormSubmit: function(e) {
            var d;
            var f;
            if (e && e.reblog) {
                d = this.collection.get(e.reblog_id);
                if (!_.isEmpty(d)) {
                    if (parseInt(e["post[state]"], 10) === 1) {
                        return 
                    }
                    if (e["post[state]"] === "on.2" || parseInt(e["post[state]"], 10) === 2) {
                        f = true
                    }
                    d.updateReblogControl(f)
                }
            }
        }
    });
    c(function() {
        Tumblr.postsView = new Tumblr.PostsView();
        if (Tumblr.Flags.bool("new_post_forms_v2") && "dashboardPostsInit" in Tumblr) {
            Tumblr.dashboardPostsInit.resolve(Tumblr.postsView)
        }
    })
})(jQuery);
/*! scripts/posts/views/reply_popover.js */
(function(a) {
    Tumblr.ReplyPopover = Tumblr.PopoverWithForm.extend({
        template: "#post_reply_form",
        events: {
            "input textarea": "check_form_state",
            "keydown textarea": "on_keydown"
        },
        initialize: function(b) {
            this.options = b || {};
            var c = _.template(a(this.template).html());
            this.$el.html(c());
            this.submit_button = this.$("button");
            this.textarea = this.$("form textarea");
            this.check_form_state();
            this.is_empty = true;
            _.extend(this.options, {
                on_hide: this.on_hide,
                on_show: this.on_show
            });
            Tumblr.PopoverWithForm.prototype.initialize.apply(this, arguments)
        },
        on_keydown: function(b) {
            this.check_form_state();
            if (!this.is_empty && (b.ctrlKey || b.metaKey) && b.which === 13) {
                b.preventDefault();
                this.submit_form()
            }
        },
        check_form_state: function() {
            this.is_empty = (this.textarea[0].value.length === 0);
            this.submit_button.attr("disabled", this.is_empty)
        },
        on_show: function() {
            this.position()
        },
        on_hide: function() {
            this.trigger("close");
            this.$el.removeClass("active")
        },
        submit_form: function(c) {
            if (c) {
                c.preventDefault()
            }
            this.submit_button.attr("disabled", true);
            this.submit_button.html(this.submit_button.data("label-loading"));
            var b = this.model.reply(this.textarea.val());
            b.done(_.bind(this.on_success, this))
        },
        on_success: function() {
            this.model.set("replied_to", true);
            this.trigger("success");
            this.$el.find("button").attr("disabled", false);
            this.$el.find("textarea").val("");
            this.hide();
            this.submit_button.html(this.submit_button.data("label"))
        }
    })
})(jQuery);
/*! scripts/posts/views/sponsor_popover.js */
(function(a) {
    Tumblr.SponsorPopover = Tumblr.Popover.extend({
        events: {
            "click .post_control.add": "add",
        },
        initialize: function(b) {
            this.options = b || {};
            _.extend(this.options, {
                on_show: this.on_show,
                disable_auto_show: true
            });
            Tumblr.Popover.prototype.initialize.apply(this, arguments)
        },
        add: function(b) {
            this.hide();
            this.$el.removeClass("active");
            this.trigger("action:add", b);
            if (Tumblr.PostForms) {
                b.preventDefault()
            }
        },
        on_show: function() {
            this.position()
        }
    })
})(jQuery);
/*! scripts/posts/views/creator_popover.js */
(function(a) {
    Tumblr.CreatorPopover = Tumblr.Popover.extend({
        events: {
            "click .post_control.delete": "delete",
            "click .post_control.edit": "edit",
            "click .post_control.edit_yvp": "edit",
            "click .post_control.queue": "queue"
        },
        initialize: function(b) {
            this.options = b || {};
            _.extend(this.options, {
                on_show: this.on_show,
                disable_auto_show: true
            });
            Tumblr.Popover.prototype.initialize.apply(this, arguments)
        },
        "delete": function() {
            this.hide();
            this.$el.removeClass("active")
        },
        edit: function(b) {
            this.hide();
            this.$el.removeClass("active");
            if (a(b.currentTarget).is(".edit_yvp")) {
                this.trigger("action:edit_yvp", b)
            } else {
                this.trigger("action:edit", b)
            }
            if (Tumblr.PostForms) {
                b.preventDefault()
            }
        },
        queue: function() {
            this.hide()
        },
        on_show: function() {
            this.position()
        }
    })
})(jQuery);
/*! scripts/posts/views/promote_tag_view.js */
(function(b) {
    var a = window.l10n_str || {};
    Tumblr.PromoteTagView = Backbone.View.extend({
        events: {
            "click .promote_post a": "promote",
            "change select.promotable_tags": "promote_select"
        },
        button_count: 5,
        initialize: function() {
            this.listenTo(this.model, "promote:success", this.update_tag_count);
            this.render()
        },
        render: function() {
            this.$el.html(this.template())
        },
        promote: function(e) {
            var c = b(e.currentTarget);
            var d = this.model.promote(c.data("tag"));
            c.addClass("loading");
            d.always(c.removeClass.bind(c, "loading"));
            if (Tumblr.Popover) {
                Tumblr.Popover.hide_all()
            }
        },
        update_tag_count: function(c) {
            for (var d = 0; d < window.promotable_tags.length; d++) {
                if (window.promotable_tags[d].tag === c) {
                    window.promotable_tags[d].promote_diff -= 1
                }
            }
            this.render()
        },
        promote_select: function() {
            if (Tumblr.Popover) {
                Tumblr.Popover.hide_all()
            }
        },
        show: function() {
            this.$el.show();
            this.$el.removeClass("hidden")
        },
        hide: function() {
            this.$el.hide();
            this.$el.addClass("hidden")
        },
        template: function() {
            var c = _.compact(this.$el.data("promotion-warnings").split(";;"));
            var d = "";
            d += "<ul>";
            d += '<li class="popover_sub_header promote_post_header">Promote</li>';
            if (window.promotable_tags.length > this.button_count) {
                d += '<div class="promote_select_wrapper">';
                d += '<select class="popover_menu_item promotable_tags">';
                d += '<option value="">' + a.promote_this_post_in + "</option>"
            }
            _.each(window.promotable_tags, function(e, g) {
                var f = (e.promote_diff < 0) ? "": " (" + e.promote_diff + ")";
                if (e.promote_diff === 0) {
                    c.push(a.promote_warning_none.replace("%1$s", e.title))
                }
                if (window.promotable_tags.length > this.button_count) {
                    d += '<option value="' + e.tag + '">' + window.promotable_tags[g].title + f + "</option>"
                } else {
                    d += '<li class="popover_menu_item promote_post">';
                    d += '<a data-tag="' + e.tag + '" href="#">';
                    d += window.promotable_tags[g].title + f;
                    d += "</a>";
                    d += "</li>"
                }
            }, this);
            if (window.promotable_tags.length > this.button_count) {
                d += "</select>";
                d += "</div>"
            }
            if (c.length) {
                d += '<div class="promote_pane_warnings">';
                _.each(c, function(e) {
                    d += '<div class="warning">' + e + "</div>"
                });
                d += "</div>"
            }
            d += "</ul>";
            return d
        }
    })
})(jQuery);
/*! scripts/posts/views/admin_popover.js */
(function(a) {
    Tumblr.AdminPopover = Tumblr.Popover.extend({
        events: {
            "click .post_control.unpromote": "unpromote",
            "click .post_control.remove_source": "remove_source"
        },
        initialize: function(b) {
            this.options = b || {};
            _.extend(this.options, {
                on_show: this.on_show,
                on_hide: this.on_hide,
                disable_auto_show: true,
                glassless: true
            });
            if (window.promotable_tags && window.promotable_tags.length) {
                this.promote_tag_view = new Tumblr.PromoteTagView({
                    el: this.$(".promote_pane"),
                    model: this.model,
                    tags: window.promotable_tags
                });
                this.promote_tag_view.show()
            }
            this.listenTo(this.model, "remove_source:failure", this.error);
            Tumblr.Popover.prototype.initialize.apply(this, arguments)
        },
        on_show: function() {
            this.position()
        },
        remove_source: function() {
            this.hide();
            this.model.removeSource()
        },
        on_hide: function() {},
        error: function() {
            Tumblr.Dialog.alert("Error removing source from this post")
        },
        promote: function(b) {
            b.preventDefault();
            if (!(this.promote_tag_view instanceof Tumblr.PromoteTagView)) {
                this.promote_tag_view = new Tumblr.PromoteTagView({
                    el: this.$(".promote_pane"),
                    model: this.model,
                    tags: window.promotable_tags
                })
            }
            this.promote_tag_view.show()
        },
        unpromote: function(d) {
            var b = a(d.currentTarget);
            var c = this.model.unpromote(b.data("tag"));
            b.addClass("loading");
            c.always(b.removeClass.bind(b, "loading"))
        },
    })
})(jQuery);
/*! scripts/posts/views/post_view.js */
(function(d) {
    var a = Tumblr.Events;
    var e = Tumblr.Lightbox;
    var c = Tumblr.Flags;
    var b = window.l10n_str || {};
    Tumblr.PostView = Backbone.View.extend({
        events: {
            "click .post_control.like:not(.liked)": "like",
            "click .post_control.liked": "unlike",
            "click .post_control.reblog": "reblog",
            "click .post_control.reply": "reply",
            "click .post_control.block": "ignore",
            "click .post_control.publish": "publish",
            "click .post_control.queue": "queue",
            "click .post_control.queue_submission": "queue_submission",
            "click .post_control.delete": "delete",
            "click .post_control.delete_yvp": "delete_yvp",
            "click .post_control.approve": "approve",
            "click .post_control.post_control_menu.creator": "creator_popover",
            "click .post_control.post_control_menu.sponsor": "sponsor_popover",
            "click .post_control.post_control_menu.admin": "admin_popover",
            "click .post_control.deny": "deny",
            "click .note .follow": "note_follow",
            "click .photo_reply_image_container": "photo_reply_click",
            'click .reblog_follow_button:not(".onboard")': "handle_tiny_grey_plus_follow_button",
            "click [data-post-action]": "_click_post_action",
            "click .post_media": "media_click",
            "click .post_body a": "caption_click",
            "click .post_permalink": "permalink_click",
            "click .share_social_button": "share_click",
            "click .post_media_photo_anchor": "photo_lightbox",
            "click .post_control.ask_answer": "ask_answer",
            "click .ask_cancel_button": "ask_cancel",
            "click .accordion_trigger": "accordion_click"
        },
        initialize: function() {
            this.controls = {};
            this.controls.like = this.$el.find(".post_control.like");
            this.controls.reblog = this.$el.find(".post_control.reblog");
            this.reblogged_content = {};
            this.reblogged_content.accordion_content = this.$el.find(".accordion_content");
            this.reblogged_content.trigger = this.$el.find(".accordion_trigger");
            this.note_count = this.$el.find(".note_count");
            this.tagsDraggable();
            this.checkForVendor();
            if (this.model.get("accepts_answers")) {
                this.setupAnswerForm()
            }
            this.like_heart_timeout = null;
            this.is_click_trigger = false;
            this.is_reblogged = false;
            if (Tumblr.Flags.bool("prima_post_model")) {
                this.listenTo(this.model, "like:set", this.updateLikeStatus);
                this.listenTo(this.model, "unlike:set", this.updateLikeStatus);
                this.listenTo(this.model, "like:set", _.bind(this.updateNoteCount, this, true));
                this.listenTo(this.model, "unlike:set", _.bind(this.updateNoteCount, this, false))
            } else {
                this.listenTo(this.model, "like:success", this.updateLikeStatus);
                this.listenTo(this.model, "unlike:success", this.updateLikeStatus);
                this.listenTo(this.model, "like:success", _.bind(this.updateNoteCount, this, true));
                this.listenTo(this.model, "unlike:success", _.bind(this.updateNoteCount, this, false))
            }
            this.listenTo(this.model, "destroy:success", this.destroy);
            this.listenTo(this.model, "dismiss", this.destroy);
            this.listenTo(this.model, "publish:success", this.destroy);
            this.listenTo(this.model, "queue:success", this.destroy);
            this.listenTo(this.model, "unpromote:success", this.destroy);
            this.listenTo(this.model, "promote:failure", this.alert);
            this.listenTo(this.model, "deny:success", this.destroy);
            this.listenTo(this.model, "approve:success", this.destroy);
            this.listenTo(this.model, "answer:success", this.answer);
            this.listenTo(this.model, "fastreblog:success", this.updateReblog);
            this.listenTo(this.model, "fastreblog:ajax:success", this.notifyFastReblog);
            this.listenTo(this.model, "remove_source:success", this.hidePost);
            this.listenTo(this.model, "embed:focus", this.excludeFromGhostlist);
            this.listenTo(this.model, "reblog:success", this.updateReblogControl);
            this.listenTo(a, "TumblelogPopover:follow", this._on_tumblelog_popover_follow);
            this.listenTo(a, "peepr:like_update", this._on_external_like_update);
            this.modelForTinyGreyFollowButton = this.model.parentTumblelog || this.model.tumblelog;
            if (this.modelForTinyGreyFollowButton) {
                this.modelForTinyGreyFollowButton.on("change:following", this.updateParentTumblelogFollow, this)
            }
            if (Tumblr.Capture && (this.model.get("sponsored") || this.model.get("premium_tracked"))) {
                this.capture_web_instream = new Tumblr.Capture.WebInStream({
                    el: this.$el
                })
            }
            this.current_link = true;
            this.less_link = false;
            this.more_link = false;
            _.result(this, "initialize_type_" + this.model.get("type"))
        },
        _click_post_action: function(j) {
            j.preventDefault();
            var f = d(j.currentTarget);
            var i = f.data();
            var h = i.postAction;
            var g = "_post_action_";
            var k = g + h;
            if (_.isFunction(this[k])) {
                this[k].call(this, i, f)
            }
        },
        _post_action_remove: function() {
            this.destroy();
            if (this.model.get("is_recommended")) {
                this._log_recommendation_dismissal()
            }
        },
        _post_action_follow: function(h, f) {
            var i = this.model.tumblelog;
            var g = h.postActionSource || false;
            i.save_following({
                following: true
            }, {
                source: g,
                pt: this.model.get("pt")
            }).fail(function() {
                Tumblr.Dialog.alert(b.ajax_error)
            });
            this.$el.addClass("is_followed");
            this.$el.find(".follow").addClass("follow_poof")
        },
        _on_tumblelog_popover_follow: function(f) {
            if (this.model.tumblelog.get("name") === f) {
                this.$el.addClass("is_followed popover_open");
                this.$el.find(".follow").addClass("follow_poof");
                this.listenToOnce(a, "TumblelogPopover:hide", function() {
                    this.$el.removeClass("popover_open")
                })
            }
        },
        _on_external_like_update: function(g, f) {
            if (this.model.get("root_id") === f.root_id) {
                this.controls.like.toggleClass("liked", f.liked);
                this.updateNoteCount(f.liked)
            }
        },
        _hide_posts: function(f) {
            if (!f) {
                f = {
                    tumblelog: this.model.get("tumblelog"),
                    sponsored: false
                }
            }
            Tumblr.Posts.whereBy(f).invoke("dismiss")
        },
        photo_lightbox: function(i) {
            if ((!i && window.event && (window.event.metaKey || window.event.altKey)) || (i && (i.metaKey || i.altKey))) {
                return true
            }
            var f = d(i.currentTarget), h = f.data("big-photo"), g = f.find(".image").attr("src");
            if (h && g) {
                i.preventDefault();
                e.init([{
                    high_res: h,
                    low_res: g
                }
                ])
            }
        },
        ask_answer: function(o) {
            o.preventDefault();
            var k = window.tinyMCE || false;
            var p = d(o.currentTarget);
            var s = p.closest(".post");
            var g = s.find(".post_ask_answer_form");
            var u = s.find(".post_ask_answer_field");
            var t = u.attr("id");
            g.show();
            s.find(".post_footer").hide();
            p.hide();
            u.focus();
            if (c.bool("prima_post_forms")) {
                var f = function() {
                    Tumblr.KeyCommands.suspend()
                };
                var i = function() {
                    Tumblr.KeyCommands.resume()
                };
                if (!s.find(".editor").length) {
                    var l = d("<div />", {
                        contenteditable: "true",
                        "class": "editor"
                    });
                    l.insertAfter(u);
                    u.hide();
                    var r = {
                        placeholder: "Type stuff here...",
                        flattenBlocks: true,
                        onChange: function() {
                            var v = this.getData(true);
                            u.val(v)
                        },
                        runIFrameSanitization: true,
                        linkRules: {
                            bypassClasses: ["tumblelog"]
                        },
                        filterRules: {
                            elements: ["a", "b", "i", "ul", "ol", "li", "p", "blockquote", "img", "iframe", "br", "h2"],
                            attributes: {
                                a: ["href", "title", "class"],
                                img: ["src", "alt"],
                                iframe: ["src", "width", "height"]
                            },
                            remove_contents: ["style", "noscript", "script", "meta"],
                            protocols: {
                                a: {
                                    href: ["http", "https", "mailto"]
                                }
                            }
                        },
                        blockKillerMarkup: '<div class="btn_remove icon_close"></div>'
                    };
                    var n = new Tumblr.Prima.Ligature.RichTextEditor(l[0], r);
                    d(n.element).focus(f).blur(i).trigger("focus")
                } else {
                    s.find(".editor").focus(f).blur(i).trigger("focus")
                }
            } else {
                if (c.bool("new_post_forms_v2")) {
                    u.blur();
                    u.hide();
                    Tumblr.KeyCommands.suspend();
                    var h = s.find(".post_body");
                    var q = new Tumblr.Models.Post({
                        type: "note",
                        tumblelog: this.model.get("tumblelog"),
                        mode: "new",
                        ask: h.clone().children().remove().end().text(),
                        asking_tumblelog: {
                            name: s.find(".post_avatar_link").attr("data-tumblelog-name") || "",
                            avatar: s.find(".post_avatar_link").attr("data-avatar-url") || Tumblr.assets_host + "/images/anonymous_avatar_40.gif"
                        }
                    });
                    this.askAnswerField = new Tumblr.Views.NotePostView({
                        model: q
                    });
                    u.after(this.askAnswerField.el, "<hr>");
                    this.askAnswerField.render();
                    h.css("visibility", "hidden");
                    g.css({
                        "margin-top": 0 - (h.height() - g.height()),
                        visibility: "visible"
                    });
                    this.listenTo(q, "change:answer", function() {
                        u.val(q.get("answer"))
                    })
                } else {
                    if (k) {
                        if (k.get(t)) {
                            k.execInstanceCommand(t, "mceFocus")
                        } else {
                            Tumblr.Editor.render(t, {
                                skin: "bluth",
                                custom_css: "/assets/styles/custom_tinymce_bluth.css",
                                layout: "bold,italic,strikethrough,link,unlink,numlist,bullist,pagebreak,image,image_upload,blockquote,code",
                                plugins: "autoresize,safari,pagebreak,ajax_forms,image_upload,tumblr_popovers,mention,paste",
                                resize: true,
                                immediate: true,
                                focus: true
                            });
                            var m = d("#regular_image_upload");
                            var j = new Tumblr.PostForms.RegularModel();
                            j.init_uploader(m);
                            j.on("change:upload_complete", function(x) {
                                var w = k.get(t);
                                var y = x.response[0].url;
                                var v = new Image();
                                d(v).one("load", _.bind(function(z) {
                                    d(v).off();
                                    w.execCommand("mceInsertContent", false, '<img src="' + y + '" />');
                                    w.execCommand("mceInsertContent", false, "<p>");
                                    setTimeout(function() {
                                        w.execCommand("mceAutoResize")
                                    }, 100)
                                }, this)).one("error", function(z) {
                                    d(v).off()
                                });
                                v.src = y
                            }, this);
                            this.listenTo(Tumblr.Editor, "tinymce.image_upload.click", function() {
                                m.trigger("click")
                            })
                        }
                        k.onAddEditor.add(function(w, v) {
                            v.onKeyDown.add(function(x, y) {
                                if (y.keyCode === 18) {
                                    if (Tumblr.inbox && _.isFunction(Tumblr.inbox.show_all_queue_and_draft)) {
                                        Tumblr.inbox.show_all_queue_and_draft()
                                    }
                                }
                            });
                            v.onKeyUp.add(function(x, y) {
                                if (y.keyCode === 18) {
                                    if (Tumblr.inbox && _.isFunction(Tumblr.inbox.hide_all_queue_and_draft)) {
                                        Tumblr.inbox.hide_all_queue_and_draft()
                                    }
                                }
                            })
                        })
                    }
                }
            }
        },
        ask_cancel: function(i) {
            if (c.bool("new_post_forms_v2")) {
                Tumblr.KeyCommands.resume();
                var g = d(i.currentTarget);
                var f = g.closest(".post");
                var j = f.find(".post_ask_answer_form");
                var h = f.find(".post_body");
                h.css("visibility", "visible");
                j.css("margin-top", "0");
                this.askAnswerField.remove();
                j.find("hr").remove()
            }
        },
        _log_recommendation_dismissal: function() {
            d.ajax({
                method: "POST",
                url: "/svc/search/log_dismissal",
                data: {
                    tumblelog_name: this.model.get("tumblelog")
                },
                with_form_key: true
            })
        },
        edit: function(g) {
            var f = {
                type: this.model.get("type"),
                edit: true,
                channel_id: this.model.get("tumblelog"),
                post_id: this.model.get("id"),
                endpoint: this.model.get("type"),
                attach_to: this.$el,
                previous_content_selector: this.$(".post_wrapper"),
                adjust_offset: true
            };
            if (c.bool("prima_post_forms")) {
                g.preventDefault();
                a.trigger("postForms:edit", {
                    postEl: f.attach_to,
                    editId: f.post_id,
                    channelId: f.channel_id
                })
            } else {
                if (c.bool("new_post_forms_v2")) {
                    g.preventDefault();
                    Tumblr.postsView.trigger("action:edit", g, f)
                } else {
                    if (Tumblr.PostForms) {
                        Tumblr.PostForms.edit(f)
                    }
                }
            }
        },
        edit_yvp: function(f) {
            f.preventDefault();
            location.href = "https://extra.tumblr.com/" + this.model.get("tumblelog") + "/video/" + this.model.get("id") + "/edit"
        },
        "delete": function(g) {
            g.preventDefault();
            var f = d(g.currentTarget).data("confirm");
            Tumblr.Dialog.confirm(f, _.bind(this.model.destroy, this.model))
        },
        delete_yvp: function(f) {
            f.preventDefault();
            location.href = "https://extra.tumblr.com/" + this.model.get("tumblelog") + "/video/" + this.model.get("id") + "/delete"
        },
        deny: function(g) {
            g.preventDefault();
            var f = d(g.currentTarget).data("confirm");
            Tumblr.Dialog.confirm(f, _.bind(function() {
                this.destroy();
                this.model.deny()
            }, this))
        },
        approve: function(g) {
            g.preventDefault();
            var f = d(g.currentTarget).data("confirm");
            Tumblr.Dialog.confirm(f, _.bind(this.model.approve, this.model, false))
        },
        queue: function(g) {
            g.preventDefault();
            var f = d(g.currentTarget).data("confirm");
            Tumblr.Dialog.confirm(f, _.bind(this.model.queue, this.model))
        },
        queue_submission: function(g) {
            g.preventDefault();
            var f = d(g.currentTarget).data("confirm");
            Tumblr.Dialog.confirm(f, _.bind(this.model.approve, this.model, true))
        },
        sponsor_popover: function(f) {
            if (f.target !== f.currentTarget) {
                return 
            }
            var g = d(f.currentTarget);
            if (!(this.sponsorPopover instanceof Tumblr.SponsorPopover)) {
                this.sponsorPopover = new Tumblr.SponsorPopover({
                    model: this.model,
                    el: d(f.target),
                    glassless: true,
                    on_hide: _.bind(function() {
                        g.removeClass("active")
                    }, this)
                });
                this.sponsorPopover.on("action:edit", _.bind(this.edit, this))
            }
            g.addClass("active");
            this.sponsorPopover.show()
        },
        creator_popover: function(f) {
            if (f.target !== f.currentTarget) {
                return 
            }
            var g = d(f.currentTarget);
            if (!(this.creatorPopover instanceof Tumblr.CreatorPopover)) {
                this.creatorPopover = new Tumblr.CreatorPopover({
                    model: this.model,
                    el: d(f.target),
                    glassless: true,
                    on_hide: _.bind(function() {
                        g.removeClass("active")
                    }, this)
                });
                this.creatorPopover.on("action:edit", _.bind(this.edit, this));
                this.creatorPopover.on("action:edit_yvp", _.bind(this.edit_yvp, this))
            }
            g.addClass("active");
            this.creatorPopover.show()
        },
        admin_popover: function(f) {
            if (f.target !== f.currentTarget) {
                return 
            }
            if (!(this.adminPopover instanceof Tumblr.AdminPopover)) {
                this.adminPopover = new Tumblr.AdminPopover({
                    model: this.model,
                    el: d(f.target)
                })
            }
            this.adminPopover.show()
        },
        like: function(f) {
            f.preventDefault();
            this.is_click_trigger = true;
            this.model.like("mouse")
        },
        unlike: function(f) {
            f.preventDefault();
            this.is_click_trigger = true;
            this.model.unlike()
        },
        reply: function(f) {
            var g = d(f.currentTarget);
            if (!(this.replyPopover instanceof Tumblr.ReplyPopover)) {
                this.replyPopover = new Tumblr.ReplyPopover({
                    model: this.model,
                    el: g,
                    glassless: true
                });
                this.replyPopover.on("success", function() {
                    g.addClass("replied")
                });
                this.replyPopover.on("close", function() {
                    g.removeClass("active")
                })
            }
            g.addClass("active");
            this.replyPopover.show()
        },
        publish: function(g) {
            g.preventDefault();
            var f = d(g.currentTarget).data("confirm");
            Tumblr.Dialog.confirm(f, _.bind(this.model.publish, this.model))
        },
        reblog: function(g) {
            var f = {};
            if (g.altKey&&!this.model.reblogged) {
                g.preventDefault();
                this.is_click_trigger = true;
                return this.fastReblog(g)
            }
            if (this.is_reblogged) {
                return 
            }
            f = {
                type: this.model.get("type"),
                channel_id: this.model.get("tumblelog"),
                reblog_id: this.model.get("id"),
                endpoint: this.model.get("type"),
                detached: true,
                reblog: true,
                animate_from: this.$el,
                reblog_key: this.model.get("reblog_key"),
                previous_content_selector: null,
                is_recommended: this.model.get("is_recommended"),
                reblog_source: this.model.get("reblog_source"),
                placement_id: this.model.get("placement_id"),
                pt: this.model.get("pt")
            };
            if (c.bool("prima_post_forms")) {
                g.preventDefault();
                a.trigger("postForms:reblog", {
                    postEl: f.animate_from,
                    pt: f.pt,
                    reblogId: f.reblog_id,
                    reblogKey: f.reblog_key
                })
            } else {
                if (c.bool("new_post_forms_v2")) {
                    g.preventDefault();
                    Tumblr.postsView.trigger("action:reblog", g, f)
                } else {
                    if (Tumblr.PostForms) {
                        g.preventDefault();
                        Tumblr.PostForms.edit(f)
                    }
                }
            }
        },
        fastReblog: function(f) {
            f.stopPropagation();
            f.preventDefault();
            if (!this.is_reblogged) {
                this.model.fastReblog()
            }
        },
        notifyFastReblog: function(g) {
            if (typeof Tumblr.Toaster === "object" && typeof Tumblr.ToastKit === "object") {
                var f = Tumblr.ToastKit.notification_center_convert(g.message, {
                    url: g.post_tumblelog.post_url,
                    tumblelog: {
                        name: g.post_tumblelog.name_or_id,
                        url: g.post_tumblelog.url,
                        avatar: g.post_tumblelog.avatar
                    }
                });
                Tumblr.Toaster.add_toast(f)
            }
        },
        note_follow: function(h) {
            h.preventDefault();
            var g = d(h.currentTarget);
            var f = g.closest(".note");
            var i = f.data("tumblelog");
            f.addClass("is_following");
            Tumblr.follow({
                tumblelog: i,
                source: "FOLLOW_SOURCE_NOTES_POPOVER"
            }, {
                success: function() {
                    Tumblr.Events.trigger("follow_tumblelog", {
                        tumblelog: i
                    })
                }
            })
        },
        handle_tiny_grey_plus_follow_button: function() {
            if (!this.modelForTinyGreyFollowButton) {
                if (Tumblr.Flags.bool("is_dev")) {
                    console.error("Follow Parent Tumblelog Failed -- No Parent Tumblelog Model")
                }
                return false
            }
            this.modelForTinyGreyFollowButton.save_following({
                following: true
            }, {
                source: this.getFollowReblogSource(),
                placement_id: this.model.get("placement_id"),
                pt: this.model.get("pt")
            }).done(_.bind(function() {
                if (this.capture_web_instream) {
                    this.capture_web_instream.track_follow(true)
                }
            }, this)).fail(function() {
                Tumblr.Dialog.alert(b.ajax_error)
            });
            return false
        },
        getFollowReblogSource: function() {
            var f = "FOLLOW_SOURCE_REBLOG";
            var g = document.body.id;
            if (this.model.get("is_docked")) {
                f = "FOLLOW_SOURCE_REBLOG_DOCKED_POST"
            } else {
                if (g === "dashboard_posts_likes") {
                    f = "FOLLOW_SOURCE_REBLOG_LIKES"
                } else {
                    if (g === "tagged_display") {
                        f = "FOLLOW_SOURCE_REBLOG_TAGGED"
                    } else {
                        if (g === "pagebox_layout") {
                            f = "FOLLOW_SOURCE_SEARCH_LIGHTBOX"
                        } else {
                            if (d("body").hasClass("tablet")) {
                                f = "FOLLOW_SOURCE_REBLOG_TABLET"
                            }
                        }
                    }
                }
            }
            return f
        },
        ignore: function(h) {
            h.preventDefault();
            if (!Tumblr.TumblelogActions) {
                return 
            }
            var g = "";
            if (_.has(this.model.get("tumblelog_data"), "avatar_url")) {
                g = this.model.get("tumblelog_data").avatar_url
            } else {
                if (this.$(".post_avatar_link").attr("data-avatar-url")) {
                    g = this.$(".post_avatar_link").attr("data-avatar-url")
                }
            }
            var m = {
                tumblelog: this.model.get("tumblelog"),
                post_id: this.model.get("id")
            };
            var k = this.$(".post_control.block").data("block");
            if (k) {
                if (k.indexOf("name:")===-1) {
                    m = {
                        tumblelog: k
                    }
                } else {
                    var o = k.split(",");
                    var j;
                    for (var f = 0; f < o.length; f++) {
                        j = o[f].indexOf("name:");
                        if (j!==-1) {
                            m.tumblelog = o[f].substring(5, o[f].length);
                            break
                        }
                    }
                }
            }
            var l = this.$(".post_control.block").data("confirm");
            var n = Tumblr.TumblelogActions.confirm_ignore({
                confirm_text: l,
                tumblelog: m.tumblelog,
                avatar_url: g
            });
            n.done(_.bind(function() {
                Tumblr.ignore(m, {
                    success: _.bind(function() {
                        this.model.set("ignoring", true);
                        this._hide_posts({
                            id: this.model.get("id"),
                            sponsored: false
                        })
                    }, this)
                })
            }, this))
        },
        hidePost: function() {
            this.$el.fadeOut("fast")
        },
        excludeFromGhostlist: function() {
            this.$el.addClass("is_persistent")
        },
        updateParentTumblelogFollow: function(f, h) {
            var g = this.$('.reblog_follow_button:not(".onboard")');
            if (f._previousAttributes.following == null || f._previousAttributes.following === h) {
                return 
            }
            if (h === false) {
                g.removeClass("active animated poof final_state")
            } else {
                g.addClass("active animated poof");
                setTimeout(function() {
                    g.addClass("final_state")
                }, 1000);
                a.trigger("post:follow:success", f);
                a.trigger("useraction:follow_reblog:success", this.model)
            }
        },
        updateReblog: function(f) {
            this.is_reblogged = true;
            var i = d('<div class="post_reblog_poof post_poof"></div>'), g = this.controls.reblog;
            if (f) {
                i.addClass("queue")
            }
            if (this.is_click_trigger) {
                g.append(i)
            } else {
                if (this.$el.height() > d(window).height()) {
                    i.css("top", d(window).height() * 0.5)
                }
                this.$el.append(i)
            }
            this.is_click_trigger = false;
            setTimeout(_.bind(function h() {
                i.fadeOut(200, _.bind(function j() {
                    i.remove();
                    this.updateReblogControl(f)
                }, this))
            }, this), 300);
            if (this.capture_web_instream) {
                this.capture_web_instream.track_fast_reblog()
            }
            a.trigger("useraction:fast_reblog:success", this.model)
        },
        updateReblogControl: function(f) {
            this.controls.reblog.addClass("reblogged");
            if (f) {
                this.controls.reblog.addClass("queued")
            }
        },
        updateLikeStatus: function() {
            var g = this.model.get("liked");
            this.controls.like.toggleClass("liked", g);
            var f = d('<div class="post_animated_heart post_poof"><span class="heart_left"></span><span class="heart_right"></span></div>').toggleClass("unliked", !g);
            if (this.is_click_trigger) {
                this.controls.like.append(f)
            } else {
                if (this.$el.height() > d(window).height()) {
                    f.css("top", d(window).height() * 0.5)
                }
                if (d(".post_animated_heart").length > 0) {
                    var h = 0.2 + (Math.random() * 0.6);
                    f.css("left", this.$el.width() * h)
                }
                this.$el.append(f)
            }
            this.is_click_trigger = false;
            setTimeout(function() {
                f.fadeOut(200, function() {
                    f.remove()
                })
            }, 300);
            if (this.capture_web_instream) {
                this.capture_web_instream.track_like(g)
            }
        },
        updateNoteCount: function(g) {
            var f = this.$(".note_link_current"), i;
            var h = f.first().text();
            if (g) {
                i = f.data("more");
                if (f.data("more") !== h) {
                    f.data("less", h)
                }
                this.$el.removeClass("no_notes")
            } else {
                i = f.data("less");
                if (i !== h) {
                    f.data("more", h)
                }
                if (!i.length) {
                    this.$el.addClass("no_notes")
                }
            }
            f.text(i);
            f.attr("title", i)
        },
        destroy: function() {
            this.$el.fadeOut(500, _.bind(function() {
                this.unbind();
                if (this.$el.parent().hasClass("post_container")) {
                    this.$el.parent().remove()
                }
                a.trigger("DOMEventor:updateRect");
                this.remove();
                a.trigger("posts:destroyed", this.$el)
            }, this))
        },
        alert: function(f) {
            Tumblr.Dialog(f)
        },
        tagsDraggable: function() {
            var f = this.$(".post_tags");
            var g = f.find(".post_tags_inner");
            var h;
            if (f.width() < g.width()) {
                f.addClass("draggable no_pop");
                h = new Tumblr.DraggableTags({
                    el: f
                })
            }
        },
        checkForVendor: function() {
            var g = this.$(".vendor_button");
            if (g.length) {
                var f = new Tumblr.VendorButton({
                    el: g,
                    vendorData: g.data("vendor-json"),
                    postModel: this.model
                })
            }
        },
        setupAnswerForm: function() {
            var f = this.$(".post_answer");
            if (!(this.answer_form instanceof Tumblr.AnswerForm) && f.find(".post_answer_input").length) {
                this.answer_form = new Tumblr.AnswerForm({
                    model: this.model,
                    el: f,
                    existing_note: this.$el.hasClass("existing_note")
                })
            }
        },
        answer: function() {
            this.$el.addClass("existing_note")
        },
        initialize_type_photo: function() {},
        initialize_type_photoset: function() {
            this.initialize_type_photo()
        },
        initialize_type_video: function() {
            setTimeout(_.bind(function() {
                var f = this.$(".dockable_video_embed[data-can-gutter]")[0];
                if (f) {
                    this.dockable_video_embed = new Tumblr.PostView.DockableVideo({
                        model: this.model,
                        el: f
                    })
                }
            }, this))
        },
        photo_reply_click: function(f) {
            e.init([{
                high_res: d(f.currentTarget).find("img").attr("src"),
                low_res: d(f.currentTarget).find("img").attr("src"),
                width: 500
            }
            ])
        },
        media_click: function() {
            a.trigger("useraction:click:post_media", this.model)
        },
        caption_click: function() {
            a.trigger("useraction:click:post_caption", this.model)
        },
        permalink_click: function() {
            a.trigger("useraction:click:post_permalink", this.model)
        },
        share_click: function() {
            a.trigger("useraction:click:post_share", this.model)
        },
        accordion_click: function() {
            this.reblogged_content.accordion_content.addClass("show");
            this.reblogged_content.trigger.addClass("hide")
        }
    })
})(jQuery);
/*! scripts/posts/views/post_view_logged_out.js */
(function(c) {
    var b = Tumblr.PostView;
    var a = Tumblr.Events;
    Tumblr.PostViewLoggedOut = Tumblr.PostView.extend({
        events: {
            "click .post_control.like": "send_to_signup",
            "click .post_control.reblog": "send_to_signup"
        },
        send_to_signup: function(e) {
            if (e) {
                var d = c(e.currentTarget).hasClass("reblog") ? "reblog": "like";
                a.trigger("PostsView:send_to_signup", {
                    event: e,
                    type: d,
                    model: this.model
                }, this);
                if (e.isPropagationStopped()) {
                    return false
                }
                e.preventDefault();
                e.stopPropagation()
            }
            window.open("/register");
            return false
        }
    })
})(jQuery);
/*! scripts/posts/views/dockable_video_background_post.js */
(function(b) {
    var a = Tumblr.PostView.extend({
        events: _.extend({}, Tumblr.PostView.prototype.events, {
            mouseenter: "__onMouseEnter",
            mouseleave: "__onMouseLeave",
        }),
        header_template: _.template('<header class="post_header post_info"><a class="tumblelog_info post_info_link" href="<%= permalink %>"<% if (popover_data) {%>data-tumblelog-popover=\'<%- popover_data %>\'<% } %>title="<%= blog_name %>"><div class="tumblelog_avatar" style="background-image: url(\'<%= avatar_url %>\');"></div><div class="post_info_tumblelog"><%= blog_name %></div></a><a class="<% if (is_following) { %>final_state poof animated <% } %>follow_link post_info_link reblog_follow_button icon_follow_rounded_small no_pop"href="/follow/<%= blog_name %>" title="<%= __("Follow") %>"><i><%= __("Follow") %></i></a></header>'),
        initialize: function() {},
        keep_controls: [".reblog", ".like"],
        "$embed": function() {
            if (!this._$embed) {
                this._$embed = this.$(".embed_iframe, .crt-video")
            }
            return this._$embed
        },
        "$permalink": function() {
            if (!this._$permalink && this.$post) {
                this._$permalink = this.$post.closest(".post_full").find(".post_permalink")
            }
            return this._$permalink
        },
        render: function() {
            var c = this.$post = this.$el.closest(".post");
            var e = {};
            var d = c.find(".post_info_link:first");
            e.popover_data = (function() {
                var i = d.data("tumblelogPopover");
                if (i) {
                    return JSON.stringify(i)
                } else {
                    return false
                }
            })();
            e.avatar_url = (function() {
                var j = c.find(".post_avatar > .post_avatar_link");
                var i = j.css("background-image").match(/url\(['"]?(.+?)['"]?\)/);
                if (i) {
                    return i[1]
                }
            })();
            e.blog_name = d.text();
            e.permalink = this.$post.find(".post_avatar_link").data("blog-url");
            e.is_following = this.model.tumblelog.get("following") || this.model.get("is_mine");
            this.$header = b(this.header_template(e));
            var h = this.$post.find(".sponsored_wrapper");
            if (h.length) {
                h = h.clone();
                b(".follow_button_wrapper", h).remove();
                this.$header.append(h)
            }
            this.post_classes = (function() {
                var i = c[0].className.split(/\s+/);
                _.pull(i, "post_full");
                i.push("post_brick");
                i.push("docked_post_underlay");
                return i
            })();
            this.$el.addClass(this.post_classes.join(" "));
            var f = this.$post.attr("data-json");
            this.$el.attr("data-json", f);
            this.$el.attr("data-view-exists", "true");
            this.$footer = this.$post.find(".post_footer").clone();
            this.$footer.find(".post_notes .popover").removeClass("nipple_on_left").addClass("nipple_on_right");
            this.$footer.find(".post_control").each(_.bind(function(m, l) {
                var k = b(l), j;
                for (j = 0; j < this.keep_controls.length; j += 1) {
                    if (k.is(this.keep_controls[j])) {
                        return 
                    }
                }
                k.hide()
            }, this));
            this.$el.prepend(this.$header, this.$footer);
            Tumblr.PostView.prototype.initialize.call(this);
            this.disableToaster();
            this.reveal();
            var g = this._$embed.attr("id");
            this.trigger("afterRender", {
                embedID: g
            });
            Tumblr.Events.trigger("post:docked:afterRender", {
                embedID: g
            })
        },
        updateNoteCount: _.noop,
        reveal: function() {
            this.$el.velocity({
                height: "+=89px"
            }, {
                duration: 150
            });
            this.$embed().velocity({
                top: "+=44px"
            }, {
                duration: 150
            })
        },
        remove: function(c) {
            var d = _.bind(function d() {
                this.$el.removeClass(this.post_classes.join(" "));
                this.$footer.remove();
                this.$header.remove();
                this.$embed().css({
                    top: ""
                });
                this.releaseDogear();
                this.enableToaster();
                if (c) {
                    c()
                }
            }, this);
            this.$el.velocity({
                height: "-=89px"
            }, {
                duration: 150,
                complete: d
            });
            this.$embed().velocity({
                top: "-=44px"
            }, {
                duration: 150
            })
        },
        enableToaster: function() {
            try {
                Tumblr.Toaster.enable()
            } catch (c) {
                if (__DEV__) {
                    console.warn("Toaster unavailable: ", c)
                }
            }
        },
        disableToaster: function() {
            try {
                Tumblr.Toaster._nuke_all_toast();
                Tumblr.Toaster.disable()
            } catch (c) {
                if (__DEV__) {
                    console.warn("Toaster unavailable: ", c)
                }
            }
        },
        wrangleDogear: function() {
            if (this.$el.hasClass("docked") && this.$permalink()) {
                this.$permalink().css("display", "none")
            }
        },
        releaseDogear: function() {
            if (this.$permalink()) {
                this.$permalink().removeAttr("style")
            }
        },
        __onMouseEnter: function() {
            this.wrangleDogear()
        },
        __onMouseLeave: function() {
            this.releaseDogear()
        }
    });
    Tumblr.DockableVideoBackgroundPost = a
})(jQuery);
/*! scripts/posts/views/dockable_video.js */
(function(b) {
    var a = Backbone.View.extend({
        autoDockOnScroll: true,
        videoState: "",
        placeholder_template: _.template('<div class="dockable_video_placeholder"><div class="dockable_video_placeholder_content"><div class="arrow_icon icon_arrow_video"></div><%= __("Put it back") %></div></div>'),
        events: {
            "click .dock_video_button": "_dockVideoButton",
            "click .post_control.like:not(.liked)": "_onLikeClick",
            "click .post_control.liked": "_onLikeClick"
        },
        aspectRatio: null,
        initialWidth: null,
        isAnimating: false,
        initialize: function() {
            this.embedManager = Tumblr.Prima.embedHarness;
            this.gutterManager = Tumblr.Prima.gutterMediaManager;
            this.canResize = this.$el.is("[data-can-resize]");
            this.$doc = b(document);
            this.docIsFullscreen = false;
            this.dockablePost = new Tumblr.DockableVideoBackgroundPost({
                el: this.el,
                model: this.model
            });
            if (this.$embed().attr("id")) {
                this.setupHarness()
            }
            this.listenTo(Tumblr.Events, "peepr:open", this.pauseVideo);
            this.listenTo(Tumblr.Events, "posts:destroyed", this.onPostDestroyed);
            this.listenTo(Tumblr.Events, "Glass:show", this.onGlassShow);
            this.listenTo(Tumblr.Events, "Glass:hide", this.onGlassHide);
            this.listenTo(Tumblr.Events, "CrtPlayer:ready", this.onCrtReady);
            this.listenTo(this.dockablePost, "afterRender", this.onPostDock)
        },
        onCrtReady: function(c) {
            this.setupHarness()
        },
        onPostDock: function(c) {
            if (!this.harness) {
                return 
            }
            var d = c.embedID;
            if (d === this.harness.getData().embedID) {
                this.harness.play()
            }
        },
        setupHarness: function() {
            if (this.harness) {
                return 
            }
            this.$embed(true);
            var c = this.embedManager.getHarness(this.$embed().attr("id"));
            c.then(_.bind(function(d) {
                this.harness = d;
                this.listenTo(this.harness, "exitViewport", this.onExitViewport);
                this.listenTo(this.harness, "stateChange", this.onStateChange)
            }, this))
        },
        onExitViewport: function() {
            var d = (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement);
            if (!this.isInGutter() && this.videoState === "playing"&&!d) {
                var c = "slide";
                this.gutterManager.putViewInGutter(this, c)
            }
        },
        onStateChange: function(c) {
            this.videoState = c
        },
        "$post": function() {
            if (!this._$post) {
                this._$post = this.$el.closest(".post")
            }
            return this._$post
        },
        "$embed": function(c) {
            if (c === true ||!this._$embed) {
                this._$embed = this.$(".embed_iframe, .crt-video")
            }
            return this._$embed
        },
        "$right_column": function() {
            if (!this._$right_column) {
                this._$right_column = b(".right_column")
            }
            return this._$right_column
        },
        _dockVideoButton: function() {
            if (this.isAnimating === false) {
                if (this.isInGutter()) {
                    this.gutterManager.removeViewFromGutter(this)
                } else {
                    var c = "fall";
                    this.gutterManager.putViewInGutter(this, c)
                }
            }
        },
        _onLikeClick: function(c) {
            c.stopPropagation();
            c.preventDefault()
        },
        makePersistent: function() {
            this.$post().addClass("is_persistent");
            this.makePersistent = _.noop
        },
        onPostDestroyed: function(c) {
            if (c.hasClass("docked")) {
                this.undimBackground()
            }
        },
        onGlassShow: function(c) {
            if (this.isInGutter()) {
                this.$el.css("z-index", 2147483649)
            }
        },
        onGlassHide: function() {
            this.$el.css("z-index", "")
        },
        dimBackground: function() {
            this.$right_column().addClass("has_docked_post")
        },
        undimBackground: function() {
            this.$right_column().removeClass("has_docked_post")
        },
        setReblogSource: function(c) {
            if (this.originalReblogSource === undefined) {
                this.originalReblogSource = this.model.get("reblog_source") || ""
            }
            if (c) {
                this.model.set("reblog_source", c)
            } else {
                this.model.set("reblog_source", this.originalReblogSource)
            }
        },
        moveToGutter: function(d) {
            var f = this.rect();
            this.makePersistent();
            var c = d.gutterPosition;
            c.height = this.embedDimensionsForWidth(c.width).height;
            this.fixElInOriginalPlace({
                animate: false
            });
            if (!this.$placeholder) {
                this.$placeholder = this.buildPlaceholder(f)
            }
            this.$el.before(this.$placeholder);
            this.isAnimating = true;
            if (this.canResize) {
                this.$embed().velocity(_.pick(c, "width", "height"));
                if (d.animation === "fall") {
                    this.$el.velocity(c, {
                        complete: _.bind(function() {
                            this.dockablePost.render();
                            this.isAnimating = false
                        }, this)
                    })
                } else {
                    if (d.animation === "slide") {
                        var e = c.bottom;
                        c.bottom =- (c.height + c.bottom + 90);
                        this.listenToOnce(this.dockablePost, "afterRender", function() {
                            this.$el.velocity({
                                bottom: e,
                                opacity: 1,
                            }, {
                                duration: 400,
                                easing: "ease",
                                complete: _.bind(function() {
                                    this.isAnimating = false
                                }, this)
                            })
                        });
                        this.$el.velocity({
                            opacity: 0
                        }, {
                            duration: 10
                        });
                        this.$el.velocity(c, {
                            duration: 10,
                            complete: _.bind(function() {
                                this.dockablePost.render()
                            }, this)
                        })
                    }
                }
            } else {
                delete c.height;
                delete c.width
            }
            this.model.set("is_docked", true);
            this.$el.addClass("docked");
            this.dimBackground();
            this.setReblogSource("POST_CONTEXT_DOCKED_POST")
        },
        originalEmbedLocation: function() {
            var d;
            if (this.$placeholder) {
                d = this.$placeholder[0].getBoundingClientRect()
            } else {
                d = this.rect()
            }
            var c = Tumblr.Prima.DOMEventor.rect();
            var e = d.left - (c.windowWidth / 2);
            return {
                left: "50%",
                width: d.width,
                height: this.embedDimensionsForWidth(d.width).height,
                bottom: c.windowHeight - d.bottom,
                translateX: e,
                translateY: 0
            }
        },
        translateOutOfGutter: function() {
            if (!this.isInGutter()) {
                return 
            }
            this.returnToOriginalState(true)
        },
        returnToOriginalState: function(c) {
            if (c) {
                this.isAnimating = true
            }
            this.dockablePost.remove();
            this.fixElInOriginalPlace({
                animate: (c),
                complete: _.bind(function() {
                    this.$placeholder.remove();
                    this.$placeholder = null;
                    this.$el.attr("style", "");
                    this.$el.css(this.embedDimensionsForWidth(this.initialWidth));
                    this.isAnimating = false
                }, this)
            });
            this.model.set("is_docked", false);
            this.$el.removeClass("docked");
            this.undimBackground();
            this.setReblogSource()
        },
        slideOutOfGutter: function() {
            if (!this.isInGutter()) {
                return 
            }
            this.isAnimating = true;
            var c = this.$el.outerHeight() + parseInt(this.$el.css("bottom"), 10);
            this.$el.velocity({
                translateY: c,
                opacity: 0
            }, {
                duration: 400,
                easing: "ease",
                complete: _.bind(function() {
                    this.returnToOriginalState(false)
                }, this)
            });
            this.pauseVideo()
        },
        fixElInOriginalPlace: function(d) {
            var c = this.originalEmbedLocation();
            if (!d.animate) {
                d.duration = 0;
                this.$el.css({
                    "z-index": 79,
                    position: "fixed"
                })
            }
            this.$el.velocity(c, d);
            this.$embed().velocity(_.pick(c, "width", "height"), _.pick(d, "duration"))
        },
        embedDimensionsForWidth: function(d) {
            if (!this.aspectRatio) {
                this.rect()
            }
            var c = d * this.aspectRatio;
            return {
                width: d,
                height: c
            }
        },
        rect: function() {
            var c = this.el.getBoundingClientRect();
            if (!this.aspectRatio) {
                this.aspectRatio = c.height / c.width
            }
            if (!this.initialWidth) {
                this.initialWidth = c.width
            }
            return c
        },
        pauseVideo: function() {
            if (this.harness) {
                this.harness.pause()
            } else {
                if (this.$embed().is("iframe")) {
                    var c = this.$embed()[0];
                    c.src = c.src
                } else {
                    var d = this.$embed().find("video");
                    if (d.length) {
                        d[0].pause()
                    }
                }
            }
        },
        buildPlaceholder: function(c) {
            c || (c = this.rect());
            this.$dockable_video_placeholder = b(this.placeholder_template());
            this.$dockable_video_placeholder.css({
                width: c.width,
                height: c.height
            });
            this.$dockable_video_placeholder.on("click", _.bind(function() {
                this.gutterManager.removeViewFromGutter(this)
            }, this));
            return this.$dockable_video_placeholder
        },
        isInGutter: function() {
            return this.gutterManager.gutteredView === this
        }
    });
    Tumblr.PostView.DockableVideo = a
})(jQuery);
/*! scripts/posts/views/fan_mail_view.js */
(function(a) {
    Tumblr.FanMailView = Tumblr.PostView.extend({
        events: {
            'click [data-action="ignore"]': "ignore",
            'click [data-action="read_more"]': "read_more",
            'click [data-action="deny"]': "deny",
            'click [data-action="reply"]': "reply"
        },
        read_more: function(b) {
            b.preventDefault();
            this.$(".read_more").hide();
            this.$(".message_body_truncated").hide();
            this.$(".message_body").show()
        },
        reply: function(b) {
            b.preventDefault();
            Tumblr.FanMail.show(b.target)
        },
        deny: function(b) {
            Tumblr.PostView.prototype.deny.call(this, b)
        }
    })
})(jQuery);
/*! scripts/posts/views/notes_popover.js */
(function(a) {
    Tumblr.NotesPopover = Tumblr.PopoverWithScroll.extend({
        show_by_el: function(b) {
            this.$el = a(b);
            this.$container = this.$el.find(".notes_container");
            this.$scroll = this.$el.find(".popover_scroll");
            this.popover = this.$el.find(".popover");
            this.show()
        }
    })
})(jQuery);
/*! scripts/posts/views/notes.js */
(function(c) {
    var a = Tumblr.Events;
    var e = Tumblr.NotesPopover;
    var d = Tumblr.KeyCommands;
    var f = Tumblr.ReblogNoteView;
    var b = Tumblr.NoteView;
    Tumblr.Notes = Backbone.View.extend({
        el: "#posts",
        loading_notes: false,
        at_end: false,
        events: {
            "click .post_notes_label": "show_notes",
            "click .more_notes_link": "on_more_click",
            keydown: "on_keydown"
        },
        initialize: function() {
            var g = this;
            this.popover = new e({
                direction: "left",
                disable_auto_show: true,
                auto_center: false,
                glassless: true,
                glassless_options: {
                    prevent_clicks: false,
                    dynamic_ignore_selectors: ".ui_peepr_glass"
                },
                on_show: function() {
                    g.on_notes_show(this.$el)
                },
                on_load_more: function() {
                    if (!g.loading_notes && this.$el.find("a.more_notes_link").length > 0) {
                        g.more_notes(this.$el.closest(".post"))
                    }
                }
            })
        },
        show_notes: function(g) {
            g.preventDefault();
            if (this.popover.is_showing) {
                return 
            }
            this.popover.show_by_el(g.currentTarget);
            if (_.isObject(d)) {
                d.suspend([74, 75])
            }
        },
        create_note_views: function(g) {
            g.find(".note:not([data-view-exists])").each(function(j, k) {
                var h;
                if (c(k).hasClass("reblog")) {
                    h = new f({
                        el: k
                    })
                } else {
                    h = new b({
                        el: k
                    })
                }
                c(k).attr("data-view-exists", true)
            });
            this.popover.update()
        },
        updateControls: function(h, i) {
            var g = h.find(".more_notes_link");
            if (i) {
                h.show();
                g.attr("data-next", i).show()
            } else {
                this.at_end = true;
                this.popover.is_scroll_disabled = true;
                g.attr("data-notes-complete", true);
                h.hide()
            }
        },
        animate_in: function(g) {
            this.loading_notes = true;
            g.slideDown(300, _.bind(function() {
                this.loading_notes = false
            }, this))
        },
        on_more_click: function(g) {
            g.preventDefault();
            this.more_notes(c(g.currentTarget).closest(".post"))
        },
        on_keydown: function(h) {
            var g = h.charCode ? h.charCode: h.keyCode;
            if (g === 78 && this.popover.is_showing) {
                h.preventDefault();
                h.stopPropagation();
                this.popover.hide()
            }
        },
        on_notes_show: function(i) {
            var h = c(i), g = h.closest(".post");
            this.at_end = (h.find(".more_notes_link").data("notes-complete")) ? true : false;
            this.popover.is_scroll_disabled = this.at_end;
            if (!h.attr("data-notes-loaded")) {
                this.load_notes(g, {}, _.bind(function(j) {
                    if (!j) {
                        this.popover.hide()
                    }
                    h.attr("data-notes-loaded", true);
                    this.popover.position_vertical()
                }, this))
            } else {
                this.popover.position_vertical()
            }
        },
        more_notes: function(i) {
            var g = c(i);
            var h = g.find(".more_notes_link").hide();
            var j = g.find(".notes_loading").show();
            this.loading_notes = true;
            this.load_notes(g, {
                from_id: h.attr("data-next")
            }, _.bind(function() {
                j.hide();
                h.show();
                this.loading_notes = false
            }, this))
        },
        load_notes: function(g, j, m) {
            var i;
            var l;
            var n;
            if (g.data("json")) {
                var k = g.data("json");
                i = k["post-id"];
                l = k["tumblelog-key"];
                n = k["tumblelog-name"]
            } else {
                i = g.attr("data-post-id");
                l = g.attr("data-tumblelog-key");
                n = g.attr("data-tumblelog-name")
            }
            var h = "/dashboard/notes/" + i + "/" + l + "/" + n;
            if (j.from_id) {
                h += "?from_c=" + j.from_id
            }
            c.ajax(h).done(_.bind(function(t, u, r) {
                var q = g.find(".more_notes_link_container"), o = g.find(".notes"), p = g.find(".more_notes_link"), s = g.find(".notes_loading");
                p.show();
                s.hide();
                t = c.trim(t);
                this.updateControls(q, r.getResponseHeader("X-next-note"));
                o.append(c(t).children());
                this.create_note_views(o);
                a.trigger("DOMEventor:updateRect");
                m(t, u, r)
            }, this))
        }
    })
})(jQuery);
/*! scripts/posts/views/draggable_tags.js */
(function(a) {
    Tumblr.DraggableTags = Backbone.View.extend({
        initialize: function() {
            this.dragging = false;
            this.drag_x = false;
            this.drag_inner = this.$(".post_tags_inner");
            this.doc = a(document);
            this.transform = this.isTransformSupported();
            this.bindEvents()
        },
        bindEvents: function() {
            this.$el.on("mousedown touchstart touchmove mouseleave mouseup touchend", ".post_tags_inner", _.bind(this.dragEvents, this));
            this.$el.on("click", ".post_tag", _.bind(this.handleLinks, this))
        },
        getDimensions: function() {
            var c = this.$el.width();
            var b = this.drag_inner.width();
            return {
                post_width: c,
                tag_width: b,
                max_left: 0,
                max_right: ((c - b) - 10)
            }
        },
        isTransformSupported: function() {
            var c = "transform WebkitTransform MozTransform OTransform msTransform".split(" ");
            for (var b = 0; b < c.length; b++) {
                if (document.createElement("div").style[c[b]] !== undefined) {
                    return true
                }
            }
            return false
        },
        dragEvents: function(b) {
            switch (b.type) {
            case"mousedown":
            case"touchstart":
                this.dragStart(b);
                break;
            case"mousemove":
            case"touchmove":
                if (this.pointer_down) {
                    this.dragMove(b)
                }
                break;
            case"touchend":
            case"mouseup":
                this.dragEnd(b);
                break
            }
        },
        bindDocEvents: function() {
            this.doc.on("mousemove.tagsDraggable", _.bind(this.dragEvents, this));
            this.doc.on("mouseup.tagsDraggable", _.bind(this.resetDrag, this));
            this.doc.on("mouseout", _.bind(this.checkMouseOut, this))
        },
        unbindDocEvents: function() {
            this.doc.off("mousemove.tagsDraggable");
            this.doc.off("mouseup.tagsDraggable");
            this.doc.off("mouseout")
        },
        dragStart: function(b) {
            b.preventDefault();
            if (!this.dragging&&!this.pointer_down) {
                this.pointer_down = true;
                this.start_x = this.drag_inner.position().left;
                this.page_x = ("pageX" in b ? b.pageX : b.originalEvent.touches[0].pageX);
                this.bindDocEvents()
            }
        },
        dragMove: function(c) {
            c.preventDefault();
            c.stopPropagation();
            this.drag_inner[0].classList.add("dragging");
            this.dragging = true;
            var b = ("clientX" in c ? c.clientX : c.originalEvent.touches[0].clientX) - this.page_x;
            this.drag_x = b + this.start_x;
            this.dragSet(this.drag_x)
        },
        dragSet: function(b) {
            if (this.transform) {
                this.drag_inner.css("transform", "translate(" + b + "px, 0)")
            } else {
                this.drag_inner.css("left", b)
            }
        },
        checkMouseOut: function(b) {
            var c = b.relatedTarget || b.toElement;
            if (!c || c.nodeName == "HTML") {
                this.dragEnd(b)
            }
        },
        handleLinks: function(d) {
            d.preventDefault();
            if (this.dragging) {
                d.stopPropagation()
            } else {
                var b = a(d.currentTarget);
                var c = b.attr("href");
                if (Tumblr.Flags.bool("post_tag_links_to_search")) {
                    return true
                }
                if (Tumblr.Prima.Url.hasAllowedProtocol(c)) {
                    window.open(c, "_blank")
                }
            }
        },
        resetDragPosition: function() {
            if (!this.d) {
                this.d = this.getDimensions()
            }
            if (this.drag_x > this.d.max_left) {
                this.dragSet(this.d.max_left)
            } else {
                if (this.drag_x < this.d.max_right) {
                    this.dragSet(this.d.max_right)
                }
            }
        },
        dragEnd: function(c) {
            c.preventDefault();
            c.stopPropagation();
            var b = _.bind(this.resetDrag, this);
            _.delay(b, 100)
        },
        resetDrag: function() {
            if (this.dragging || this.pointer_down) {
                this.dragging = false;
                this.pointer_down = false;
                this.drag_inner[0].classList.remove("dragging");
                this.resetDragPosition();
                this.unbindDocEvents()
            }
        }
    })
})(jQuery);
/*! scripts/posts/views/answer_form.js */
(function(a) {
    Tumblr.AnswerForm = Backbone.View.extend({
        events: {
            "keyup .post_answer_input": "keyup",
            "focus .post_answer_input": "focus",
            "blur  .post_answer_input": "blur",
            "click .post_answer_submit": "submit"
        },
        initialize: function(b) {
            this.options = b || {};
            this.max_length = 140;
            this.answer_input = this.$(".post_answer_input");
            this.answer_submit = this.$(".post_answer_submit");
            this.answer_length = this.$(".post_answer_length");
            this.answer_error_message = this.answer_input.data("error-message");
            this.existing_note = this.options.existing_note || false;
            this.answer_text = this.answer_input.val();
            this.listenTo(this.model, "answer:success", this.answer);
            this.listenTo(this.model, "answer:failure", this.error)
        },
        keyup: function(b) {
            if (this.existing_note) {
                return false
            }
            this.remaining_chars = this.max_length - this.getAnswerLength();
            if (this.remaining_chars <= 0) {
                this.remaining_chars = 0
            }
            this.answer_length.text(this.remaining_chars);
            this.answer_text = (this.answer_text !== this.answer_input.val()) ? this.answer_input.val() : this.answer_text;
            if (b.keyCode === 13) {
                b.preventDefault();
                this.answer_post()
            }
        },
        focus: function() {
            if (this.existing_note) {
                return false
            }
            this.answer_text = this.answer_input.val();
            this.$el.addClass("show_submit")
        },
        blur: function() {
            if (this.getAnswerLength() === 0) {
                this.$el.removeClass("show_submit")
            }
        },
        submit: function(b) {
            b.preventDefault();
            this.answer_post()
        },
        answer_post: function() {
            if (this.getAnswerLength()) {
                this.model.answer(this.getAnswer())
            }
        },
        answer: function() {
            this.answer_input.blur();
            this.answer_input.attr("readonly", "readonly")
        },
        error: function() {
            Tumblr.Dialog.confirm(this.answer_error_message)
        },
        getAnswerLength: function() {
            return this.getAnswer().length
        },
        getAnswer: function() {
            return a.trim(this.answer_input.val())
        }
    })
})(jQuery);
/*! scripts/posts/views/dashboard_blog_card.js */
(function(b) {
    var a = Tumblr.IndashBlog.HeaderCompact.extend({
        className: "indash_header_compact indash_blog",
        events: Tumblr.IndashBlog.HeaderCompact.prototype.events,
        defaults: _.extend({}, Tumblr.IndashBlog.HeaderCompact.prototype.defaults, {
            include_info_popover: false,
            template_data: {
                show_navigation: true,
                show_user_controls: false,
                show_share_controls: false,
                show_follow_button: true,
                show_dismiss_controls: true,
                popover: false
            },
            follow_data: {
                source: "FOLLOW_SOURCE_INDASH_RECOMMENDED_BLOG"
            },
            unfollow_data: {
                source: "UNFOLLOW_SOURCE_INDASH_RECOMMENDED_BLOG"
            },
            aspect_ratio: 9 / 16,
            width: 540
        }),
        render: function() {
            Tumblr.IndashBlog.HeaderCompact.prototype.render.apply(this, arguments);
            var c = this.options.width;
            this.$(".header_image_wrapper, .header_image").height(c * this.options.aspect_ratio);
            this._setup_posts();
            return this
        },
        _setup_posts: function() {
            this.highlighted_posts = new Tumblr.TumblelogPopover.Posts({
                model: this.model,
                on_bottom: true,
                parent: this.$el.find(".indash_header_wrapper")
            })
        }
    });
    a.attach_to_el = function(e) {
        var f = b(e.$el);
        var d = e.blogs[0];
        if (!d) {
            return d
        }
        var c = new a({
            model: d,
            include_posts: true
        }).render();
        f.after(c.$el)
    };
    Tumblr.Events.on("component:DashboardBlogCard:attach_to_el", a.attach_to_el);
    Tumblr.DashboardBlogCard = a
})(jQuery);
/*! scripts/posts/views/vendor_button.js */
(function(a) {
    Tumblr.VendorButton = Backbone.View.extend({
        events: {
            "click .dropdown-area": "onDropDownClick",
            "click .button-area": "onLinkClick"
        },
        initialize: function(b) {
            b || (b = {});
            this.postModel = b.postModel || {};
            this.listing_id = b.vendorData.listing_id;
            this.price = b.vendorData.price;
            this.state = b.vendorData.state;
            this.name = b.vendorData.name;
            this.vendorPopover = new Tumblr.VendorPopover({
                glassless: true,
                el: this.$(".dropdown-area"),
                listing_id: this.listing_id
            });
            this.listenTo(this.vendorPopover, "emailClick", _.bind(function(c) {
                this.triggerEvent("emailClick")
            }, this));
            this.triggerEvent("serve")
        },
        onDropDownClick: function(b) {
            this.vendorPopover.show();
            this.triggerEvent("dropdownOpen")
        },
        onLinkClick: function(b) {
            this.triggerEvent("buttonClick")
        },
        triggerEvent: function(b) {
            Tumblr.Events.trigger("VendorButton:" + b, {
                loggingData: {
                    listing_id: this.listing_id,
                    price: this.price,
                    state: this.state,
                    partner: this.name,
                    postData: this.postModel.toJSON()
                }
            })
        }
    })
})(jQuery);
/*! scripts/posts/views/vendor_popover.js */
(function(a) {
    Tumblr.VendorPopover = Tumblr.Popover.extend({
        hiding: false,
        popoverTimer: null,
        hideButtonTimer: null,
        hidePopoverTimeout: 2000,
        hideButtonTimeout: 2150,
        events: {
            "click .email-vendor-listing": "onEmailClick",
        },
        initialize: function(b) {
            this.options = b || {};
            _.extend(this.options, {
                on_hide: this.onHide
            });
            Tumblr.Popover.prototype.initialize.apply(this, arguments);
            this.$popoverEl = this.$(".popover_vendor")
        },
        onEmailClick: function(b) {
            b.stopPropagation();
            a.ajax({
                method: "POST",
                url: "/svc/vendor/buy_it_later",
                data: {
                    item_id: this.options.listing_id
                },
                with_form_key: true,
                success: function() {},
                failure: function() {}
            });
            this.trigger("emailClick");
            this.tellOfGreatEmailingSuccess()
        },
        onHide: function() {
            if (this.hiding) {
                clearTimeout(this.popoverTimer);
                clearTimeout(this.hideButtonTimer);
                this.hidePopover();
                this.hideDropdown()
            }
        },
        tellOfGreatEmailingSuccess: function() {
            this.hiding = true;
            this.$popoverEl.addClass("success");
            this.popoverTimer = setTimeout(_.bind(function() {
                this.hidePopover()
            }, this), this.hidePopoverTimeout);
            this.hideButtonTimer = setTimeout(_.bind(function() {
                this.hideDropdown()
            }, this), this.hideButtonTimeout)
        },
        hidePopover: function() {
            this.$popoverEl.addClass("fade-out")
        },
        hideDropdown: function() {
            this.$popoverEl.remove();
            this.$el.addClass("slide-out");
            this.hiding = false;
            this.hide()
        }
    })
})(jQuery);
/*! scripts/posts/index.js */

/*! scripts/follow_list.js */
(function(f, a) {
    var d = window.l10n_str || {};
    function c() {
        return window.location.pathname.split("/")[1]
    }
    var e = Backbone.View.extend({
        tagName: "ul",
        events: {
            "click .show_more": "show_more"
        },
        initialize: function(g) {
            this.template || (this.template = g.template);
            this.subviews = [];
            this.data = this.$el.data("json") || {};
            this.tumblelogs = this.data.tumblelogs || [];
            this.context = this.data.context || "";
            this.enable_refresh = false;
            this.collection_url = "";
            this.exclude_following = false;
            this.minimum_list_length = null;
            this.visible_list_length = 4;
            this.viewed = [];
            this.log_impressions = false;
            this.is_popover_showing = false;
            this.set_context_props();
            var i = this;
            var h = Backbone.Collection.extend({
                url: this.collection_url,
                model: Tumblr.Prima.Models.Tumblelog,
                parse: function(k) {
                    var j = k.response.blogs;
                    if (i.exclude_following) {
                        j = _.filter(j, {
                            following: false
                        })
                    }
                    return j
                }
            });
            this.collection = new h();
            this.listenTo(this.collection, "add", this.add_tumblelog);
            this.listenTo(this.collection, "remove", this.remove_tumblelog);
            this.listenTo(this.collection, "change:following", this.on_follow);
            this.listenTo(Tumblr.Events, "TumblelogPopover:show", this.on_popover_show);
            this.listenTo(Tumblr.Events, "TumblelogPopover:hide", this.on_popover_hide);
            if (this.log_impressions) {
                this.listenTo(this.collection, "add", this.log_impression);
                this.listenTo(this.collection, "remove", this.log_impression)
            }
            this.$el.attr("data-json", null)
        },
        before_render: function() {
            this.$el.addClass("is_rendering")
        },
        render: function() {
            this.before_render();
            this.$el.html(_.template(this.template, {
                heading: this.data.heading || "",
                context: this.data.context || ""
            }));
            this.collection.add(this.tumblelogs);
            this.add_footer();
            this.after_render();
            return this
        },
        after_render: function() {
            setTimeout(_.bind(function() {
                this.$el.removeClass("is_rendering")
            }, this), 0)
        },
        set_context_props: function() {
            if (this.context === "recommended_tumblelogs") {
                this.collection_url = "/svc/search/get_recommended_tumblelogs";
                this.enable_refresh = true;
                this.has_dismiss = true;
                this.auto_refresh = true;
                this.exclude_following = true;
                this.minimum_list_length = 6;
                this.log_impressions = true
            } else {
                if (this.context === "trending_tumblelogs") {
                    this.collection_url = "/svc/search/get_trending_tumblelogs";
                    this.enable_refresh = true;
                    this.has_dismiss = true;
                    this.auto_refresh = true;
                    this.exclude_following = true;
                    this.minimum_list_length = 6;
                    this.log_impressions = false
                }
            }
        },
        on_popover_show: function() {
            this.is_popover_showing = true
        },
        on_popover_hide: function() {
            this.is_popover_showing = false
        },
        add_footer: function() {
            var g = _.template(f("#follow_list_" + this.data.context + "_small_links_template").html(), {
                user_is_editor: this.data.user_is_editor || false
            });
            this.$el.append(g)
        },
        on_follow: function(i, h) {
            var g = _.find(this.subviews, {
                model: i
            });
            if (!this.enable_refresh) {
                g.render();
                return 
            }
            if (h) {
                if (this.collection.length > this.visible_list_length) {
                    if (this.is_popover_showing) {
                        this.listenToOnce(Tumblr.Events, "TumblelogPopover:hide", function() {
                            this.collection.remove(i);
                            this.animate(g, false)
                        });
                        g.$el.find(".follow").addClass("follow_poof");
                        g.$el.addClass("flash");
                        g.$el.find(".dismiss").addClass("hide")
                    } else {
                        this.collection.remove(i);
                        this.animate(g, true)
                    }
                } else {
                    g.render()
                }
            } else {
                this.stopListening(Tumblr.Events, "TumblelogPopover:hide");
                g.render();
                g.$el.removeClass("flash")
            }
            g.disable_dismiss()
        },
        add_tumblelog: function(h) {
            var g = new b({
                model: h,
                collection: this.collection,
                params: {
                    follow_source: this.data.follow_source,
                    has_dismiss: this.has_dismiss
                }
            });
            this.subviews.push(g);
            if (!this.auto_refresh && this.visible_list_length && this.subviews.length > this.visible_list_length) {
                g.hide()
            }
            this.$el.append(g.el);
            g.render()
        },
        remove_tumblelog: function(h) {
            this.subviews = _.filter(this.subviews, function(i) {
                return i.model !== h
            });
            var g = this.minimum_list_length - this.collection.length;
            if (g > 0) {
                this.fetch_tumblelogs(g)
            }
        },
        fetch_tumblelogs: function(g) {
            this.collection.fetch({
                data: {
                    limit: g,
                    page: c(),
                    include_posts: false
                },
                with_form_key: true,
                remove: false
            })
        },
        animate: function(h, g) {
            h.$el.find(".follow").addClass("follow_poof");
            if (g) {
                h.$el.addClass("flash").delay(200)
            }
            h.$el.animate({
                opacity: 0
            }, 100).slideUp(300, function() {
                f(this).remove()
            })
        },
        show_more: function(g) {
            this.$(".item.last").removeClass("last");
            this.$(".item").last().addClass("after_showing");
            this.$(".item.hidden").removeClass("hidden");
            f(g.currentTarget).hide();
            return false
        },
        log_impression: function() {
            _.forEach(this.collection.slice(0, this.visible_list_length), function(i) {
                var g = _.find(this.subviews, {
                    model: i
                });
                if (_.isEmpty(g) || (_.indexOf(this.viewed, i)!==-1)) {
                    return 
                }
                this.viewed.push(i);
                var h = (Tumblr.getRealNow || _.now)();
                Tumblr.Events.trigger("Capture:push", "recommended_blog_impressions", "impressions", {
                    tumblelog_name: i.get("name"),
                    algorithm_id: i.get("algorithm_id") || "",
                    page: c(),
                    ts: Math.floor(h / 1000),
                    position: g.$el.offset(),
                    format: "RECOMMEND_FORMAT_DASH_SIDEBAR",
                })
            }, this)
        }
    });
    var b = Backbone.View.extend({
        tagName: "li",
        className: "item",
        events: {
            "click .follow": "follow",
            "click .icon_close": "dismiss"
        },
        initialize: function(g) {
            this.params = g.params || {};
            this.$button = this.$(".follow")
        },
        render: function() {
            var g = _.extend(this.model.toJSON(), this.params);
            g.following = this.model.get("following") || this.model.get("is_you");
            var h = _.template(f("#follow_list_item_template").html(), g);
            this.$el.html(h);
            this.$button.toggle(!this.model.get("following"));
            return this
        },
        follow: function() {
            this.model.save_following({
                following: true
            }, {
                source: this.params.follow_source
            }).fail(function() {
                Tumblr.Dialog.alert(d.ajax_error)
            });
            return false
        },
        hide: function() {
            this.$el.addClass("hidden")
        },
        dismiss: function() {
            this.collection.remove(this.model);
            this.$el.animate({
                left: - 245
            }, 250).slideUp(300, function() {
                f(this).remove()
            });
            f.ajax({
                method: "POST",
                url: "/svc/search/log_dismissal",
                data: {
                    tumblelog_name: this.model.get("name"),
                    page: c()
                },
                with_form_key: true
            })
        },
        disable_dismiss: function() {
            this.$el.find(".dismiss").remove()
        }
    });
    a.FollowList = e;
    a.FollowListItem = b
})(jQuery, Tumblr);
jQuery(document).ready(function(b) {
    var a = b.trim(b("#follow_list_template").html());
    b(".follow_list").each(function(d, c) {
        new Tumblr.FollowList({
            el: c,
            template: a
        }).render()
    })
});
/*! scripts/tumblr/dashboard/dashboard_controls.js */
(function(k, f, j, d) {
    function c() {
        var m = arguments;
        return function() {
            for (var o = 0, n = m.length; o < n; o++) {
                if (m[o].apply(this, arguments) === false) {
                    break
                }
            }
        }
    }
    function b() {
        return this.isRenderable()
    }
    function g(m) {
        return function(n) {
            return !(n._previousAttributes[m] == null || n._previousAttributes[m] === n.attributes[m])
        }
    }
    var a = (function() {
        try {
            var m = 0;
            m.toLocaleString("i");
            return function(o, p) {
                return p.toLocaleString()
            }
        } catch (n) {
            return function(o, p) {
                return p.toLocaleString(o)
            }
        }
    })();
    function e(n) {
        var m = /\d[\d\s\.,]*/;
        return function(o, s) {
            var p = this[n];
            var r = parseInt(p.data("count"), 10) + (s ? 1 : - 1);
            p.data("count", r);
            var t = p.text();
            var q = f.trim(t.match(m));
            if (q) {
                p.text(t.replace(q, a(this.locale, r)))
            }
        }
    }
    var l = j.View.extend({
        initialize: function(m) {
            this._renderable = false;
            this.locale = m.locale;
            this.allPosts = m.allPosts;
            this.allTumblelogs = m.allTumblelogs;
            this.listenTo(this.allTumblelogs, "change:following", this.changeFollowingLabel);
            this.listenTo(this.allPosts, "change:liked", this.changeLikesLabel)
        },
        changeFollowingLabel: c(b, g("following"), e("$followingLabel")),
        changeLikesLabel: c(b, g("liked"), e("$likesLabel")),
        isRenderable: function() {
            return !!this._renderable
        },
        render: function() {
            this.$likesLabel = this.$(".likes [data-count]");
            this.$followingLabel = this.$(".following [data-count]");
            this._renderable = (this.$likesLabel.length !== 0) && (this.$followingLabel !== 0);
            return this
        }
    });
    var h = (typeof language_for_tinymce === "string") ? language_for_tinymce: "en";
    var i = new l({
        el: "#right_column",
        allPosts: Tumblr.Posts,
        allTumblelogs: Tumblr.Prima.Models.Tumblelog.collection,
        locale: h
    }).render();
    d.DashboardControls = l;
    d.dashboardControls = i
})(_, jQuery, Backbone, Tumblr);
/*! scripts/tumblr/dashboard/post_helpers.js */
Tumblr.DashboardPostHelpers = (function() {
    var f = window.jQuery;
    var b = window._;
    var e = Tumblr.Flags;
    var d = {
        updatePostInline: function(j) {
            var n = this.$previousContent;
            if (!j.post_dashboard_html ||!n.length) {
                return 
            }
            var k = f(f.trim(j.post_dashboard_html));
            var o = k.filter("script");
            var h = k.find(".post_wrapper");
            var m = [".post_content", ".post_tags", ".post_footer_links", ".notes_outer_container", ".permalink", ".post_source", ".post_info"];
            var i = ".post_info";
            b.each(m, function(p, q) {
                var r = n.find(p).filter(":not('.post_info.answer')");
                if (r.length) {
                    r.replaceWith(h.find(p))
                } else {
                    n.children(i).after(h.children(p))
                }
                i = p
            }, this);
            var l = n.find(".post_control.reblog");
            if (l.length) {
                l.replaceWith(h.find(".post_control.reblog"))
            } else {
                n.find(".post_controls_inner").append(h.find(".post_control.reblog"))
            }
            h.after(o);
            n.find("iframe.spotify_player").css("opacity", 0).addClass("iframe_reload_and_fade_in");
            if (Tumblr.AudioPlayer) {
                b.delay(function() {
                    Tumblr.AudioPlayer.replace_placeholders(n, true)
                }, 750)
            }
        },
        afterHide: function(j) {
            var i = this.dashboard;
            var k = (!!j.post&&!!j.post.is_edit) && (j.context_page !== j.post_context_page) && (!i.model.get("detached"));
            if (b.isFunction(i.destroy_preview)) {
                i.destroy_preview()
            }
            if (b.isFunction(i.hide_loader)) {
                i.hide_loader()
            }
            i.render_view = new Tumblr.PostForms.RenderPost({
                model: i.model
            });
            var l = this.newRoot;
            var h = true;
            if (this.newRoot === "") {
                if (window.location.pathname.indexOf("/tagged/")!==-1) {
                    h = false
                } else {
                    l = "/dashboard"
                }
            }
            var m = "before";
            if (window.location.pathname.indexOf("/drafts")!==-1) {
                m = "after";
                l += "/drafts"
            }
            if (!j.post.is_edit && (f("#new_post").length > 0) && h&&!j.post.is_reblog&&!j.fastCompose) {
                i.render_view.load_more_posts(i.model.get("detached") ? i.options.animate_from : 0, l, m)
            }
            if (k) {
                i.$parent_el.slideUp(200, function() {
                    f(i).remove()
                });
                if (f("#posts .post").not(".new_post").length <= 1) {
                    window.location = this.pageRoot;
                    return 
                }
            }
            this.displayNotification(j, k)
        },
        displayNotification: function(h, j) {
            var k = this.pageRoot ? this.pageRoot.split("/"): [];
            var i = k[1] || "";
            var l = (i.toLowerCase() === "blog" ? k[2] : f('input[name="t"]').val()) || "";
            if (!h.created_post || h.post.is_reblog || h.fastCompose || i.toLowerCase() === "tagged" || l.toLowerCase() !== h.post_tumblelog.name_or_id.toLowerCase() || j) {
                b.delay(function(n) {
                    if (typeof Tumblr.Toaster === "object" && typeof Tumblr.ToastKit === "object") {
                        var m = Tumblr.ToastKit.notification_center_convert(n, {
                            url: h.post_tumblelog.post_url,
                            tumblelog: {
                                name: h.post_tumblelog.name_or_id,
                                url: h.post_tumblelog.url,
                                avatar: h.post_tumblelog.avatar
                            }
                        });
                        Tumblr.Toaster.add_toast(m)
                    }
                }, 250, h.message)
            }
        },
        processPostSaveSuccess: function(i) {
            var h = this.dashboard;
            clearTimeout(h.delay_loader);
            this.triggerPostFormSuccess();
            if (i.context_page === "queue") {
                window.location = this.pageRoot;
                return 
            }
            this.updatePostInline(i);
            var j = b.bind(this.afterHide, this, i);
            if (b.isFunction(this.hidePostForm)) {
                this.hidePostForm(j)
            } else {
                h.hide_post_form(null, j)
            }
            if (i.context_tumblelog) {
                f.each(i.context_tumblelog.counts, function(l, n) {
                    var m = f("#dashboard_controls_open_blog .dashboard_" + l);
                    m.find(".count").text(n);
                    var k = (m.attr("class") || "").match(/(?:\s|^)count_\d+/gi);
                    if (k) {
                        m.removeClass(k.join(""))
                    }
                    m.addClass("count_" + n)
                })
            }
        },
        postSaveSuccess: function(i, h) {
            if (h.user) {
                Tumblr.video_seconds_remaining = h.user.video_seconds_remaining
            }
            b.delay(b.bind(this.processPostSaveSuccess, this, h), 250)
        },
        postSaveError: function(i, k, h) {
            var j = (k.status === 403) ? "This post died while you were away. Copy your work and refresh the page.": k.statusText;
            i.trigger("invalid", i, j)
        },
        triggerPostFormSuccess: function() {
            Tumblr.Events.trigger("post:form:success", this.dashboard.model.toJSON())
        }
    };
    var c = function(h) {
        if (e.bool("new_post_forms_v2")) {
            return {
                pageRoot: h.baseRoute,
                newRoot: h.baseRoute,
                $previousContent: []
            }
        }
        return {
            pageRoot: h.page_root,
            newRoot: h.new_root,
            $previousContent: h.$previous_content
        }
    };
    var a = function(h, i) {
        i = i || {};
        this.dashboard = h;
        b.each(d, function(j, k) {
            this[k] = j.bind(this)
        }, this);
        b.extend(this, b.defaults(i, c(h)))
    };
    if (Tumblr.Flags.bool("prima_post_forms")) {
        var g = function(j, i) {
            if (!j) {
                return 
            }
            var h;
            if (Tumblr.ToastKit) {
                h = Tumblr.ToastKit.notification_center_convert(j, i)
            }
            if (Tumblr.Toaster) {
                Tumblr.Toaster.add_toast(h)
            }
        };
        Tumblr.Events.listenTo(Tumblr.Events, "postForms:saveHook:toast", g)
    }
    return a
})();
/*! scripts/vendor/audio-js/audio.js */
(function(e, b, a) {
    var d = (function() {
        var j = new RegExp("audio(\\.min)?\\.js.*"), f = document.getElementsByTagName("script");
        for (var g = 0, h = f.length; g < h; g++) {
            var k = f[g].getAttribute("src");
            if (j.test(k)) {
                return k.replace(j, "")
            }
        }
        return ""
    })();
    a[e] = {
        instanceCount: 0,
        instances: {},
        flashSource: '      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance=' + e + '.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance=' + e + '.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',
        settings: {
            autoplay: false,
            loop: false,
            preload: true,
            imageLocation: d + "player-graphics.gif",
            swfLocation: d + "audiojs.swf",
            useFlash: (function() {
                var f = document.createElement("audio");
                return !(f.canPlayType && f.canPlayType("audio/mpeg;").replace(/no/, ""))
            })(),
            hasFlash: (function() {
                if (navigator.plugins && navigator.plugins.length && navigator.plugins["Shockwave Flash"]) {
                    return true
                } else {
                    if (navigator.mimeTypes && navigator.mimeTypes.length) {
                        var h = navigator.mimeTypes["application/x-shockwave-flash"];
                        return h && h.enabledPlugin
                    } else {
                        try {
                            var f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            return true
                        } catch (g) {}
                    }
                }
                return false
            })(),
            createPlayer: {
                markup: '          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
                playPauseClass: "play-pause",
                scrubberClass: "scrubber",
                progressClass: "progress",
                loaderClass: "loaded",
                timeClass: "time",
                durationClass: "duration",
                playedClass: "played",
                errorMessageClass: "error-message",
                playingClass: "playing",
                loadingClass: "loading",
                errorClass: "error"
            },
            css: '        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
            trackEnded: function(f) {},
            flashError: function() {
                var h = this.settings.createPlayer, f = c(h.errorMessageClass, this.wrapper), g = 'Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';
                if (this.mp3) {
                    g += ' <a href="' + encodeURI(this.mp3) + '">Download audio file</a>.'
                }
                a[e].helpers.removeClass(this.wrapper, h.loadingClass);
                a[e].helpers.addClass(this.wrapper, h.errorClass);
                f.innerHTML = g
            },
            loadError: function(h) {
                var g = this.settings.createPlayer, f = c(g.errorMessageClass, this.wrapper);
                a[e].helpers.removeClass(this.wrapper, g.loadingClass);
                a[e].helpers.addClass(this.wrapper, g.errorClass);
                f.innerHTML = 'Error loading: "' + _.escape(this.mp3) + '"'
            },
            init: function() {
                var f = this.settings.createPlayer;
                a[e].helpers.addClass(this.wrapper, f.loadingClass)
            },
            loadStarted: function() {
                var g = this.settings.createPlayer, i = c(g.durationClass, this.wrapper), f = Math.floor(this.duration / 60), h = Math.floor(this.duration%60);
                a[e].helpers.removeClass(this.wrapper, g.loadingClass);
                i.innerHTML = ((f < 10 ? "0" : "") + f + ":" + (h < 10 ? "0" : "") + h)
            },
            loadProgress: function(h) {
                var g = this.settings.createPlayer, i = c(g.scrubberClass, this.wrapper), f = c(g.loaderClass, this.wrapper);
                f.style.width = (i.offsetWidth * h) + "px"
            },
            playPause: function() {
                if (this.playing) {
                    this.settings.play()
                } else {
                    this.settings.pause()
                }
            },
            play: function() {
                var f = this.settings.createPlayer;
                a[e].helpers.addClass(this.wrapper, f.playingClass)
            },
            pause: function() {
                var f = this.settings.createPlayer;
                a[e].helpers.removeClass(this.wrapper, f.playingClass)
            },
            updatePlayhead: function(j) {
                var h = this.settings.createPlayer, l = c(h.scrubberClass, this.wrapper), g = c(h.progressClass, this.wrapper);
                g.style.width = (l.offsetWidth * j) + "px";
                var k = c(h.playedClass, this.wrapper), n = this.duration * j, f = Math.floor(n / 60), i = Math.floor(n%60);
                k.innerHTML = ((f < 10 ? "0" : "") + f + ":" + (i < 10 ? "0" : "") + i)
            }
        },
        create: function(g, f) {
            var f = f || {};
            if (g.length) {
                return this.createAll(f, g)
            } else {
                return this.newInstance(g, f)
            }
        },
        createAll: function(g, k) {
            var f = k || document.getElementsByTagName("audio"), l = [];
            g = g || {};
            for (var h = 0, j = f.length; h < j; h++) {
                l.push(this.newInstance(f[h], g))
            }
            return l
        },
        newInstance: function(g, f) {
            var g = g, h = this.helpers.clone(this.settings), l = "audiojs" + this.instanceCount, k = "audiojs_wrapper" + this.instanceCount, j = this.instanceCount++;
            if (g.getAttribute("autoplay") != null) {
                h.autoplay = true
            }
            if (g.getAttribute("loop") != null) {
                h.loop = true
            }
            if (g.getAttribute("preload") == "none") {
                h.preload = false
            }
            if (f) {
                this.helpers.merge(h, f)
            }
            if (h.createPlayer.markup) {
                g = this.createPlayer(g, h.createPlayer, k)
            } else {
                g.parentNode.setAttribute("id", k)
            }
            var i = new a[b](g, h);
            if (h.css) {
                this.helpers.injectCss(i, h.css)
            }
            if (h.useFlash && h.hasFlash) {
                this.injectFlash(i, l);
                this.attachFlashEvents(i.wrapper, i)
            } else {
                if (h.useFlash&&!h.hasFlash) {
                    h.flashError.apply(i)
                }
            }
            if (!h.useFlash || (h.useFlash && h.hasFlash)) {
                this.attachEvents(i.wrapper, i)
            }
            this.instances[l] = i;
            return i
        },
        createPlayer: function(g, f, j) {
            var i = document.createElement("div"), h = g.cloneNode(true);
            i.setAttribute("class", "audiojs");
            i.setAttribute("className", "audiojs");
            i.setAttribute("id", j);
            if (h.outerHTML&&!document.createElement("audio").canPlayType) {
                h = this.helpers.cloneHtml5Node(g);
                i.innerHTML = f.markup;
                i.appendChild(h);
                g.outerHTML = i.outerHTML;
                i = document.getElementById(j)
            } else {
                i.appendChild(h);
                i.innerHTML = i.innerHTML + f.markup;
                g.parentNode.replaceChild(i, g)
            }
            return i.getElementsByTagName("audio")[0]
        },
        attachEvents: function(k, h) {
            if (!h.settings.createPlayer) {
                return 
            }
            var g = h.settings.createPlayer, j = c(g.playPauseClass, k), i = c(g.scrubberClass, k), f = function(l) {
                var m = 0;
                if (l.offsetParent) {
                    do {
                        m += l.offsetLeft
                    }
                    while (l = l.offsetParent)
                    }
                return m
            };
            a[e].events.addListener(j, "click", function(l) {
                h.playPause.apply(h)
            });
            a[e].events.addListener(i, "click", function(m) {
                var l = m.clientX - f(this);
                h.skipTo(l / i.offsetWidth)
            });
            if (h.settings.useFlash) {
                return 
            }
            a[e].events.trackLoadProgress(h);
            a[e].events.addListener(h.element, "timeupdate", function(l) {
                h.updatePlayhead.apply(h)
            });
            a[e].events.addListener(h.element, "ended", function(l) {
                h.trackEnded.apply(h)
            });
            a[e].events.addListener(h.source, "error", function(l) {
                clearInterval(h.readyTimer);
                clearInterval(h.loadTimer);
                h.settings.loadError.apply(h)
            })
        }, attachFlashEvents : function(f, g) {
            g.swfReady = false;
            g.load = function(h) {
                g.mp3 = h;
                if (g.swfReady) {
                    g.element.load(h)
                }
            };
            g.loadProgress = function(h, i) {
                g.loadedPercent = h;
                g.duration = i;
                g.settings.loadStarted.apply(g);
                g.settings.loadProgress.apply(g, [h])
            };
            g.skipTo = function(h) {
                if (h > g.loadedPercent) {
                    return 
                }
                g.updatePlayhead.call(g, [h]);
                g.element.skipTo(h)
            };
            g.updatePlayhead = function(h) {
                g.settings.updatePlayhead.apply(g, [h])
            };
            g.play = function() {
                if (!g.settings.preload) {
                    g.settings.preload = true;
                    g.element.init(g.mp3)
                }
                g.playing = true;
                g.element.pplay();
                g.settings.play.apply(g)
            };
            g.pause = function() {
                g.playing = false;
                g.element.ppause();
                g.settings.pause.apply(g)
            };
            g.setVolume = function(h) {
                g.element.setVolume(h)
            };
            g.loadStarted = function() {
                g.swfReady = true;
                if (g.settings.flashReady) {
                    g.settings.flashReady.apply(g)
                }
                if (g.settings.preload && g.mp3) {
                    g.element.init(g.mp3)
                }
                if (g.settings.autoplay) {
                    g.play.apply(g)
                }
            }
        }, injectFlash: function(h, j) {
            var f = this.flashSource.replace(/\$1/g, j);
            f = f.replace(/\$2/g, h.settings.swfLocation);
            f = f.replace(/\$3/g, ( + new Date + Math.random()));
            var g = h.wrapper.innerHTML, i = document.createElement("div");
            i.innerHTML = f + g;
            h.wrapper.innerHTML = i.innerHTML;
            h.element = this.helpers.getSwf(j)
        }, helpers: {
            merge: function(g, f) {
                for (attr in f) {
                    if (g.hasOwnProperty(attr) || f.hasOwnProperty(attr)) {
                        g[attr] = f[attr]
                    }
                }
            }, clone: function(h) {
                if (h == null || typeof(h) !== "object") {
                    return h
                }
                var f = new h.constructor();
                for (var g in h) {
                    f[g] = arguments.callee(h[g])
                }
                return f
            }, addClass: function(f, h) {
                var g = new RegExp("(\\s|^)" + h + "(\\s|$)");
                if (g.test(f.className)) {
                    return 
                }
                f.className += " " + h
            }, removeClass: function(f, h) {
                var g = new RegExp("(\\s|^)" + h + "(\\s|$)");
                f.className = f.className.replace(g, " ")
            }, injectCss: function(g, k) {
                var q = "", p = document.getElementsByTagName("style"), j = k.replace(/\$1/g, g.settings.imageLocation);
                for (var h = 0, o = p.length; h < o; h++) {
                    var m = p[h].getAttribute("title");
                    if (m&&~m.indexOf("audiojs")) {
                        f = p[h];
                        if (f.innerHTML === j) {
                            return 
                        }
                        q = f.innerHTML;
                        break
                    }
                }
                var l = document.getElementsByTagName("head")[0], n = l.firstChild, f = document.createElement("style");
                if (!l) {
                    return 
                }
                f.setAttribute("type", "text/css");
                f.setAttribute("title", "audiojs");
                if (f.styleSheet) {
                    f.styleSheet.cssText = q + j
                } else {
                    f.appendChild(document.createTextNode(q + j))
                }
                if (n) {
                    l.insertBefore(f, n)
                } else {
                    l.appendChild(styleElement)
                }
            }, cloneHtml5Node: function(g) {
                var f = document.createDocumentFragment(), h = f.createElement ? f: document;
                h.createElement("audio");
                var i = h.createElement("div");
                f.appendChild(i);
                i.innerHTML = g.outerHTML;
                return i.firstChild
            }, getSwf: function(f) {
                var g = document[f] || window[f];
                return g.length > 1 ? g[g.length - 1] : g
            }
        }, events: {
            memoryLeaking: false, listeners : [], addListener : function(g, f, h) {
                if (g.addEventListener) {
                    g.addEventListener(f, h, false)
                } else {
                    if (g.attachEvent) {
                        this.listeners.push(g);
                        if (!this.memoryLeaking) {
                            window.attachEvent("onunload", function() {
                                if (this.listeners) {
                                    for (var j = 0, k = this.listeners.length; j < k; j++) {
                                        a[e].events.purge(this.listeners[j])
                                    }
                                }
                            });
                            this.memoryLeaking = true
                        }
                        g.attachEvent("on" + f, function() {
                            h.call(g, window.event)
                        })
                    }
                }
            }, trackLoadProgress: function(h) {
                if (!h.settings.preload) {
                    return 
                }
                if (!h.element.src) {
                    return 
                }
                var f, i, h = h, g = (/(ipod|iphone|ipad)/i).test(navigator.userAgent);
                f = setInterval(function() {
                    if (h.element.readyState>-1) {
                        if (!g) {
                            h.init.apply(h)
                        }
                    }
                    if (h.element.readyState > 1) {
                        if (h.settings.autoplay) {
                            h.play.apply(h)
                        }
                        clearInterval(f);
                        i = setInterval(function() {
                            h.loadProgress.apply(h);
                            if (h.loadedPercent >= 1) {
                                clearInterval(i)
                            }
                        })
                    }
                }, 10);
                h.readyTimer = f;
                h.loadTimer = i
            }, purge: function(h) {
                var f = h.attributes, g;
                if (f) {
                    for (g = 0; g < f.length; g += 1) {
                        if (typeof h[f[g].name] === "function") {
                            h[f[g].name] = null
                        }
                    }
                }
                f = h.childNodes;
                if (f) {
                    for (g = 0; g < f.length; g += 1) {
                        purge(h.childNodes[g])
                    }
                }
            }, ready: (function() {
                return function(l) {
                    var h = window, g = false, k = true, n = h.document, m = n.documentElement, q = n.addEventListener ? "addEventListener": "attachEvent", o = n.addEventListener ? "removeEventListener": "detachEvent", f = n.addEventListener ? "": "on", p = function(r) {
                        if (r.type == "readystatechange" && n.readyState != "complete") {
                            return 
                        }(r.type == "load" ? h : n)[o](f + r.type, p, false);
                        if (!g && (g = true)) {
                            l.call(h, r.type || r)
                        }
                    }, j = function() {
                        try {
                            m.doScroll("left")
                        } catch (r) {
                            setTimeout(j, 50);
                            return 
                        }
                        p("poll")
                    };
                    if (n.readyState == "complete") {
                        l.call(h, "lazy")
                    } else {
                        if (n.createEventObject && m.doScroll) {
                            try {
                                k=!h.frameElement
                            } catch (i) {}
                            if (k) {
                                j()
                            }
                        }
                        n[q](f + "DOMContentLoaded", p, false);
                        n[q](f + "readystatechange", p, false);
                        h[q](f + "load", p, false)
                    }
                }
            })()
        }
    };
    a[b] = function(f,
    g) {
        this.element = f;
        this.wrapper = f.parentNode;
        this.source = f.getElementsByTagName("source")[0] || f;
        this.mp3 = (function(h) {
            var i = h.getElementsByTagName("source")[0];
            return h.getAttribute("src") || (i ? i.getAttribute("src"): null)
        })(f);
        this.settings = g;
        this.loadStartedCalled = false;
        this.loadedPercent = 0;
        this.duration = 1;
        this.playing = false
    }; a[b].prototype = {
        updatePlayhead : function() {
            var f = this.element.currentTime / this.duration;
            this.settings.updatePlayhead.apply(this, [f])
        }, skipTo: function(f) {
            if (f > this.loadedPercent) {
                return 
            }
            this.element.currentTime = this.duration * f;
            this.updatePlayhead()
        }, load: function(f) {
            this.loadStartedCalled = false;
            this.source.setAttribute("src", f);
            this.element.load();
            this.mp3 = f;
            a[e].events.trackLoadProgress(this)
        }, loadError: function() {
            this.settings.loadError.apply(this)
        }, init: function() {
            this.settings.init.apply(this)
        }, loadStarted: function() {
            if (!this.element.duration) {
                return false
            }
            this.duration = this.element.duration;
            this.updatePlayhead();
            this.settings.loadStarted.apply(this);
            return true
        }, loadProgress: function() {
            if (this.element.buffered != null && this.element.buffered.length) {
                if (!this.loadStartedCalled) {
                    this.loadStartedCalled = this.loadStarted()
                }
                var f = this.element.buffered.end(this.element.buffered.length - 1);
                this.loadedPercent = f / this.duration;
                this.settings.loadProgress.apply(this, [this.loadedPercent])
            }
        }, playPause: function() {
            if (this.playing) {
                this.pause()
            } else {
                this.play()
            }
        }, play: function() {
            var f = (/(ipod|iphone|ipad)/i).test(navigator.userAgent);
            if (f && this.element.readyState == 0) {
                this.init.apply(this)
            }
            if (!this.settings.preload) {
                this.settings.preload = true;
                this.element.setAttribute("preload", "auto");
                a[e].events.trackLoadProgress(this)
            }
            this.playing = true;
            this.element.play();
            this.settings.play.apply(this)
        }, pause: function() {
            this.playing = false;
            this.element.pause();
            this.settings.pause.apply(this)
        }, setVolume: function(f) {
            this.element.volume = f
        }, trackEnded: function(f) {
            this.skipTo.apply(this, [0]);
            if (!this.settings.loop) {
                this.pause.apply(this)
            }
            this.settings.trackEnded.apply(this)
        }
    };
    var c = function(n, j) {
        var m = [];
        j = j || document;
        if (j.getElementsByClassName) {
            m = j.getElementsByClassName(n)
        } else {
            var h, f, g = j.getElementsByTagName("*"), k = new RegExp("(^|\\s)" + n + "(\\s|$)");
            for (h = 0, f = g.length; h < f; h++) {
                if (k.test(g[h].className)) {
                    m.push(g[h])
                }
            }
        }
        return m.length > 1 ? m : m[0]
    }
})("audiojs", "audiojsInstance", this);
/*! scripts/html5_audio.js */
(function() {
    var b = 0;
    var c = ["ms", "moz", "webkit", "o"];
    for (var a = 0; a < c.length&&!window.requestAnimationFrame; ++a) {
        window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[c[a] + "CancelAnimationFrame"] || window[c[a] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(h, e) {
            var d = new Date().getTime();
            var f = Math.max(0, 16 - (d - b));
            var g = window.setTimeout(function() {
                h(d + f)
            }, f);
            b = d + f;
            return g
        }
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(d) {
            clearTimeout(d)
        }
    }
}());
(function(c, e, b) {
    var d = d || function(g) {
        return g
    };
    var a = function(g) {
        if (!(this instanceof a)) {
            return new a(g)
        }
        this.options = g;
        this.config = e.extend(true, {}, a.defaults, this.options);
        this.config.audiojs_settings = e.extend({}, audiojs.settings, a.defaults.audiojs_settings, this.config.audiojs_settings);
        this.localized = e.extend({
            no_id3: "Listen",
            flash_error: '<a href="http://get.adobe.com/flashplayer/">Flash 9 is required to listen to audio.</a>'
        }, this.config.localized);
        this.__init();
        a.register(this);
        return this
    };
    a.prototype = {
        playing: false,
        onscreen: true,
        animation_interval: false,
        animation_callback: false,
        animation_arguments: [],
        last_tick: 0,
        __init: function() {
            this.__build_track_list();
            this.title = a.format_title(this.tracks[0]);
            if (typeof this.config.template === "string") {
                this.config.template = c.template(this.config.template)
            }
            this.$container = e(this.config.template({
                service: this.config.service,
                cover: this.config.cover,
                tracks: this.config.tracks,
                title: this.title
            })).addClass(this.config.container_classes);
            if (this.config.replace) {
                e(this.config.replace).replaceWith(this.$container)
            } else {
                if (this.config.append_to) {
                    e(this.config.append_to).append(this.$container)
                } else {
                    if (this.config.prepend_to) {
                        e(this.config.prepend_to).prepend(this.$container)
                    }
                }
            }
            this.__cache_selectors();
            this.__defer_artwork();
            this.__proxy_functions();
            this.$player.addClass(this.config.player_classes);
            this.starting_track_id = this.config.start_at || 0;
            if (!this.track_info(this.starting_track_id, "artist")&&!this.track_info(this.starting_track_id, "track")&&!this.track_info(this.starting_track_id, "album")) {
                this.$message_text.html(this.localized.no_id3);
                this.$player.addClass("message")
            }
            this.__init_visualizations();
            this.config.audiojs_settings.createPlayer.markup = "";
            this.config.audiojs_settings.createPlayer.css = "";
            this.__init_audiojs();
            if (!this.audiojs.settings.useFlash ||!this.audiojs.settings.hasFlash) {
                this.bind_events()
            }
            if (this.config.lightbox) {
                this.$container.addClass("has_lightbox")
            }
            e(document.body).trigger("tumblr:audio:ready", {
                audioplayer: this,
                using_flash: (this.audiojs.settings.useFlash && this.audiojs.settings.hasFlash)
            })
        },
        __init_audiojs: function() {
            this.element = this.config.el || this.__create_el(this.config.wrapper || this.$player.get(0));
            this.audiojs = audiojs.create(this.element, this.config.audiojs_settings);
            this.audiojs.audioplayer = this;
            this.check_flash_error()
        },
        __create_el: function(g) {
            return e("<audio/>").attr({
                type: "audio/mp3"
            }).appendTo(g).get(0)
        },
        __get_post: function() {
            return this.$post || (this.$post = e("#post_" + this.options.post_id))
        },
        __get_post_data: function() {
            return this.postData || (this.postData = this.__get_post().data("json"))
        },
        __cache_selectors: function() {
            this.$player = this.$container.find(".audio_player");
            if (this.track_info(0, "cover")) {
                this.$container.addClass("has_art")
            }
            this.$controls = this.$container.find(".audio_controls");
            this.$visualizer = this.$container.find(".audio_visualizer");
            this.$message_container = this.$container.find(".audio_message_container");
            this.$message_text = this.$container.find(".audio_message_text");
            this.$overlay = this.$container.find(".audio_player_overlay");
            this.$progress_container = this.$container.find(".progress_container");
            this.$load_progress = this.$container.find(".load_progress");
            this.$play_progress = this.$container.find(".play_progress");
            this.$playhead = this.$container.find(".playhead");
            this.$seek_overlay = this.$container.find(".seek_overlay");
            this.$seek_position = this.$container.find(".seek_position");
            this.$seek_time = this.$container.find(".seek_time");
            this.$play_pause_container = this.$container.find(".play_pause_container");
            this.$play_button = this.$container.find(".play_button");
            this.$pause_button = this.$container.find(".pause_button");
            this.$text_wrapper = this.$container.find(".player_text_wrapper");
            this.$text = this.$container.find(".player_text");
            this.$track_name = this.$container.find(".track_name");
            this.$artist_name = this.$container.find(".artist_name");
            this.$album_name = this.$container.find(".album_name");
            this.truncate_text();
            this.$current_time = this.$container.find(".current_time");
            this.$total_time = this.$container.find(".total_time");
            this.$album_art_container = this.$container.find(".album_art_container");
            this.$main_album_art = this.$container.find(".album_art.main");
            this.$album_art = this.$container.find(".album_art").not(this.$main_album_art).hide()
        },
        __defer_artwork: function() {
            if (this.$album_art_container.is(":visible")) {
                this.$album_art_container.hide(1, function() {
                    e(this).show()
                })
            }
        },
        __init_visualizations: function() {
            this.$visualizer.empty();
            if (this.config.eq) {
                this.generate_equalizer();
                this.equalizer_levels(0);
                this.real_frequencies = a.has_equalizer_support();
                this.$container.addClass("has_visualizer");
                this.truncate_text()
            }
        },
        __proxy_functions: function() {
            this._on_focus_player = e.proxy(this.on_focus_player, this);
            this._album_art_lightbox = e.proxy(this.album_art_lightbox, this);
            this._on_overlay_mouseenter = e.proxy(this.on_overlay_mouseenter, this);
            this._on_overlay_mouseleave = e.proxy(this.on_overlay_mouseleave, this);
            this._on_overlay_mousedown = e.proxy(this.on_overlay_mousedown, this);
            this._on_seek_mouseenter = e.proxy(this.on_seek_mouseenter, this);
            this._on_seek_mousemove = e.proxy(this.on_seek_mousemove, this);
            this._on_seek_mouseleave = e.proxy(this.on_seek_mouseleave, this);
            this._on_seek_begin = e.proxy(this.on_seek_begin, this);
            this._on_seek_move = e.proxy(this.on_seek_move, this);
            this._on_seek_end = e.proxy(this.on_seek_end, this);
            this._on_audio_playing = e.proxy(this.on_audio_playing, this);
            this._on_audio_pause = e.proxy(this.on_audio_pause, this);
            this._play = e.proxy(this.play, this);
            this._pause = e.proxy(this.pause, this);
            this._load_progress = e.proxy(this.load_progress, this);
            this._play_progress = e.proxy(this.play_progress, this)
        },
        __build_track_list: function(g) {
            this.tracks = g || this.config.tracks;
            if (!this.tracks.length) {
                this.tracks = [e.extend({}, a.defaults.tracks[0])];
                this.tracks[0].bpm = this.config.bpm;
                this.tracks[0].stream_url = this.config.stream_url;
                this.tracks[0].track = this.config.track;
                this.tracks[0].artist = this.config.artist;
                this.tracks[0].album = this.config.album;
                this.tracks[0].cover = this.config.cover
            }
        },
        bind_events: function() {
            this.$player.on({
                touchstart: this._on_focus_player,
                mousedown: this._on_focus_player
            });
            this.$album_art_container.on("click", this._album_art_lightbox);
            this.$overlay.on({
                touchstart: this._on_overlay_mousedown,
                mouseenter: this._on_overlay_mouseenter,
                mouseleave: this._on_overlay_mouseleave,
                mousedown: this._on_overlay_mousedown
            });
            this.$seek_overlay.on({
                mouseenter: this._on_seek_mouseenter,
                mouseleave: this._on_seek_mouseleave,
                mousemove: this._on_seek_mousemove,
                mousedown: this._on_seek_begin
            });
            e(document.body).on({
                "tumblr:audio:playing": this._on_audio_playing,
                "tumblr:audio:pause": this._on_audio_pause
            })
        },
        unbind_events: function() {
            this.$player.off({
                touchstart: this._on_focus_player,
                mousedown: this._on_focus_player
            });
            this.$album_art_container.off("click", this._album_art_lightbox);
            this.$overlay.off({
                touchstart: this._on_overlay_mousedown,
                mouseenter: this._on_overlay_mouseenter,
                mouseleave: this._on_overlay_mouseleave,
                mousedown: this._on_overlay_mousedown
            });
            this.$seek_overlay.off({
                mouseenter: this._on_seek_mouseenter,
                mouseleave: this._on_seek_mouseleave,
                mousemove: this._on_seek_mousemove,
                mousedown: this._on_seek_begin
            });
            e(document.body).off({
                mousemove: this._on_seek_move,
                mouseup: this._on_seek_end,
                "tumblr:audio:playing": this._on_audio_playing,
                "tumblr:audio:pause": this._on_audio_pause
            })
        },
        responsive_size_embed: function(h, g) {
            this.$container.removeClass("hide_art hide_visualizer condense_visualizer");
            this.$container.addClass("embed");
            if (this.track_info(0, "cover")) {
                this.$container.addClass("has_art")
            }
            if (this.config.eq) {
                this.$container.addClass("has_visualizer")
            }
            if (this.$container.hasClass("has_art") && g * 2 <= h && g >= 30) {
                this.$album_art_container.css("width", g);
                this.$player.css("padding-right", g);
                this.$visualizer.css("margin-right", g)
            } else {
                this.$album_art_container.css("width", "");
                this.$player.css("padding-right", "");
                this.$visualizer.css("margin-right", "");
                if (this.$container.hasClass("has_art") || h < 250) {
                    this.$container.removeClass("has_visualizer embed")
                }
                this.$container.removeClass("has_art")
            }
            if (this.$container.hasClass("has_art")) {
                if (g < 169) {
                    this.$controls.css("height", "");
                    this.$container.removeClass("has_visualizer")
                } else {
                    this.$controls.css("height", g - this.$visualizer.outerHeight())
                }
            } else {
                this.$controls.css("height", "");
                if (g < 85 || g > 85) {
                    this.$container.removeClass("has_visualizer")
                }
            }
            if (this.$equalizer) {
                if (this.$equalizer.width() < 300) {
                    this.$container.addClass("condense_visualizer")
                }
            }
            this.responsive_size(this.$controls.width(), this.$controls.height())
        },
        responsive_size: function(h, g) {
            this.$container.removeClass("switch small button listen");
            if (g > 50) {
                if (h < 110) {
                    this.$container.addClass("button")
                } else {
                    if (h < 205) {
                        this.$container.addClass("listen")
                    }
                }
            } else {
                this.$container.addClass("small");
                if (h < 70) {
                    this.$container.addClass("button")
                } else {
                    this.$container.addClass("listen")
                }
            }
        },
        check_flash_error: function() {
            var g = this.audiojs.settings.useFlash&&!this.audiojs.settings.hasFlash;
            if (g&&!this.flash_error) {
                this.audiojs.settings.flashError.apply(this.audiojs)
            }
        },
        on_focus_player: function(g) {
            if (g&&!a.is_left_click(g)) {
                return true
            }
            a.set_key_commands(true, true)
        },
        on_overlay_mouseenter: function(g) {
            this.$player.addClass("hover")
        },
        on_overlay_mouseleave: function(g) {
            this.$player.removeClass("hover")
        },
        on_overlay_mousedown: function(g) {
            if (g&&!a.is_left_click(g)) {
                return true
            }
            if (this.flash_error) {
                return true
            } else {
                if (!this.audiojs.loadedPercent) {
                    if (this.load_track(this.config.start_at)) {
                        this.play()
                    }
                } else {
                    if (!this.error) {
                        this.play_pause()
                    }
                }
            }
            g.preventDefault()
        },
        on_seek_mouseenter: function(g) {
            this.$progress_container.addClass("seek")
        },
        on_seek_mousemove: function(h) {
            var g = this.get_seek_progress(h.pageX - this.$progress_container.offset().left);
            this.$seek_position.css("left", (100 * g) + "%");
            if (this.$progress_container.width() * Math.abs(this.play_progress - g) < 5) {
                this.$player.addClass("playhead_hover")
            } else {
                this.$player.removeClass("playhead_hover")
            }
            if (this.total_time) {
                this.$seek_time.text(a.format_time(g * this.total_time))
            }
        },
        on_seek_mouseleave: function(g) {
            this.$player.removeClass("playhead_hover");
            this.$progress_container.removeClass("seek")
        },
        on_audio_playing: function(h, g) {
            a.handling_on_play = true;
            if (a.config.one_at_a_time && g.audioplayer !== this) {
                if (this.current_state("unplayed")) {
                    this.paused_animation_start(true)
                } else {
                    if (this.playing) {
                        this.pause()
                    }
                }
            }
            a.handling_on_play = false
        },
        on_audio_pause: function(h, g) {
            if (a.handling_on_play) {
                return 
            }
            if (a.config.one_at_a_time && g.audioplayer !== this) {
                if (this.current_state("unplayed")) {
                    this.demo_animation_start()
                }
            }
        },
        on_seek_begin: function(g) {
            if (g&&!a.is_left_click(g)) {
                return true
            }
            this.$player.addClass("seeking");
            e(document.body).addClass("grabbing");
            this.was_playing = this.audiojs.playing;
            if (this.was_playing) {
                this.$player.addClass("was_playing")
            }
            this.pause();
            e(document.body).on({
                mousemove: this._on_seek_move,
                mouseup: this._on_seek_end
            });
            this.seek_move_timeout = c.delay(this._on_seek_move, 50, g, true);
            this.on_focus_player(g);
            return false
        },
        on_seek_move: function(i, g) {
            clearTimeout(this.seek_move_timeout);
            if (!g) {
                this.$player.addClass("show_seek_time")
            }
            this.on_seek_mousemove(i);
            var h = this.get_seek_progress();
            this.set_play_progress(h);
            this.set_time(h * this.total_time, this.total_time)
        },
        on_seek_end: function(g) {
            this.$player.removeClass("seeking show_seek_time was_playing");
            e(document.body).removeClass("grabbing");
            this.skip_to(Math.min(this.total_time ? (this.total_time - 0.1) / this.total_time : 1, this.get_seek_progress(g.pageX - this.$progress_container.offset().left)));
            if (this.was_playing) {
                this.play()
            }
            e(document.body).off({
                mousemove: this._on_seek_move,
                mouseup: this._on_seek_end
            })
        },
        load_track: function(h) {
            if (this.current_track_id === h) {
                return false
            }
            if (h >= this.tracks.length || h < 0) {
                return false
            }
            if (this.audiojs.playing) {
                this.pause()
            }
            this.current_track_id = h;
            this.current_track = this.tracks[h];
            this.$track_name.text(this.current_track.track);
            this.$artist_name.text(this.current_track.artist);
            this.$album_name.text(this.current_track.album);
            this.$current_album_art = e(this.$album_art.get(h));
            this.$current_album_art.show();
            this.$album_art.not(this.$current_album_art).hide();
            this.truncate_text();
            this.$player.removeClass("message");
            var g = this.config.post_key ? "?play_key=" + this.config.post_key: "";
            this.audiojs.load(this.current_track.stream_url + g);
            this.equalizer_levels(0);
            if (!this.audiojs.settings.useFlash) {
                this.use_audio_context(Tumblr.AudioPlayer.context)
            }
            return true
        },
        play_pause: function() {
            return this.audiojs.playing ? this.pause() : this.play()
        },
        smart_play_pause: function(g) {
            if (typeof g === "undefined") {
                g=!this.audiojs.playing
            }
            if (this.flash_error) {
                return false
            } else {
                if (!this.audiojs.loadedPercent) {
                    if (g && this.load_track(this.config.start_at)) {
                        this.play()
                    }
                } else {
                    if (!this.error) {
                        return g ? this.play() : this.pause()
                    }
                }
            }
        },
        play: function() {
            if (Tumblr.Events) {
                Tumblr.Events.trigger("useraction:audio:play", {
                    loggingData: {
                        postData: this.__get_post_data(),
                        userAction: "audio"
                    },
                })
            }
            return this.audiojs.play()
        },
        pause: function() {
            return this.audiojs.pause()
        },
        skip_to: function(g) {
            return this.audiojs.skipTo(g)
        },
        previous_track: function() {
            if (this.load_track(this.current_track_id - 1)) {
                this.play();
                return true
            }
            return false
        },
        next_track: function() {
            if (this.load_track(this.current_track_id + 1)) {
                this.play();
                return true
            }
            return false
        },
        get_seek_progress: function(g) {
            if (typeof g !== "number") {
                g = this.$seek_position.position().left
            }
            return Math.max(0, Math.min(g / this.$progress_container.width(), 1))
        },
        set_play_progress: function(g) {
            this.$play_progress.width((100 * g) + "%");
            this.$playhead.css("left", (100 * g) + "%")
        },
        set_time: function(h, g) {
            if (typeof h !== "number") {
                h = 0
            }
            this.$current_time.text(a.format_time(h));
            if (typeof g !== "number") {
                return 
            }
            this.$total_time.text(a.format_time(g))
        },
        set_load_progress: function(g) {
            this.$load_progress.width((100 * g) + "%")
        },
        album_art_lightbox: function(g) {
            if (g&&!a.is_left_click(g)) {
                return true
            }
            if (!this.config.lightbox) {
                return false
            }
            var h = this.current_track_info("cover");
            if (!h) {
                return false
            }
            return this.config.lightbox.init([{
                high_res: h
            }
            ])
        },
        truncate_text: function(h) {
            var i = this.$text_wrapper.width();
            if (!i) {
                if (typeof h !== "number") {
                    h = 10
                }
                if (h > 0) {
                    c.delay(e.proxy(this.truncate_text, this), 100, --h);
                    return 
                }
            }
            var g = this.max_lines(this.$track_name, 3, "...");
            this.max_lines(this.$artist_name, 4 - g, "...")
        },
        max_lines: function(g, o, k) {
            var n = e(g);
            var m = n.clone().css("opacity", 0.5).text("A");
            n.after(m);
            var l = m.height(), i = l * o;
            if (!n.data("full_text")) {
                n.data("full_text", n.text())
            }
            if (!i) {
                m.remove();
                n.text("");
                return o
            }
            m.text(n.data("full_text"));
            if (m.height() <= i) {
                m.remove();
                n.text(n.data("full_text"));
                return Math.ceil(n.height() / l)
            }
            if (typeof k !== "string") {
                k = "..."
            }
            var j = n.data("full_text").split(" ");
            var h = 0;
            do {
                m.text(j.slice(0, ++h).join(" ") + k)
            }
            while (m.height() <= i && h <= j.length);
            n.text(j.slice(0, h - 1).join(" ") + k);
            m.remove();
            return Math.ceil(n.height() / l)
        },
        use_audio_context: function(h) {
            if (!h) {
                return false
            }
            this.context = h;
            this.source = this.context.createMediaElementSource(this.audiojs.source);
            this.analyser_node = this.context.createAnalyser();
            this.analyser_node.fftSize = 128;
            this.analyser_node.smoothingTimeConstant = 0.2;
            this.frequency_array = new Uint8Array(this.analyser_node.frequencyBinCount);
            this.nodes = [this.source, this.analyser_node, this.context.destination];
            for (var g = 1; g < this.nodes.length; g++) {
                this.nodes[g - 1].connect(this.nodes[g])
            }
        },
        read_analyser_frequencies: function(m, j, s, q) {
            if (this.analyser_node) {
                this.analyser_node.getByteFrequencyData(this.frequency_array)
            } else {
                if (this.audiojs.settings.useFlash && this.audiojs.settings.hasFlash) {
                    var t;
                    try {
                        t = this.audiojs.element.getByteFrequencyData()
                    } catch (o) {
                        return false
                    }
                    if (!t || t === "NO_ACCESS" || t.match(/ERR/)) {
                        this.equalizer_levels(0);
                        return false
                    }
                    var k = t.match(/.{1,2}/g);
                    var r = Math.floor(0.5 * k.length);
                    var g;
                    var p = true;
                    this.frequency_array = [];
                    for (var l = 0; l < r; l++) {
                        g = 0.5 * (parseInt(k[l], 16) + parseInt(k[l + r], 16));
                        if (g) {
                            p = false
                        }
                        this.frequency_array.push(g)
                    }
                    if (p) {
                        return false
                    }
                } else {
                    return false
                }
            }
            if (typeof s !== "number") {
                s = 1
            }
            if (typeof q !== "number") {
                q = 0
            }
            var h = a.scale_array_values(this.frequency_array, this.config.eq.bands + q, true, function(u, n) {
                u*=s;
                if (m) {
                    u/=m
                }
                if (j) {
                    return Math.max(0, Math.min(u, 1))
                } else {
                    return u
                }
            });
            if (q) {
                return h.slice(0, this.config.eq.bands)
            } else {
                return h
            }
        },
        generate_equalizer: function() {
            if (this.$equalizer) {
                this.$equalizer.remove()
            }
            var i = this.config.eq;
            if (!i) {
                return false
            }
            this.$equalizer = e("<div/>").addClass("audio_equalizer");
            if (!this.config.preview&&!this.$container.hasClass("has_art")) {
                i.bands = 7
            }
            var h, k;
            for (var g = 0; g < i.bands; g++) {
                h = e("<div/>").addClass("audio_equalizer_band").data({
                    wait: 0,
                    peak: 0,
                    level: 0
                }).appendTo(this.$equalizer);
                for (var j = 0; j < i.levels; j++) {
                    k = e("<b>").appendTo(h);
                    if (j === i.levels - 1) {
                        k.addClass("peak")
                    }
                }
            }
            this.$visualizer.append(this.$equalizer);
            return true
        },
        equalizer_levels: function(j, k, h, g) {
            if (!this.$equalizer) {
                return false
            }
            if (typeof j !== "number"&&!e.isArray(j)) {
                var i = [];
                this.$equalizer.children(".audio_equalizer_band").each(function(l, m) {
                    i[l] = e(m).data("level")
                });
                return i
            }
            this.$equalizer.children(".audio_equalizer_band").each(e.proxy(function(o, r) {
                var s = 0;
                if (typeof j === "number") {
                    s = j
                } else {
                    if (j && o < j.length && j[o]) {
                        s = j[o]
                    }
                }
                var p = e(r);
                var m = this.config.eq.levels;
                var n = Math.floor(s * (m - 1));
                var q = parseFloat(p.data("peak")) || 0;
                var l = k || (s > q);
                if (l) {
                    p.data({
                        wait: 10,
                        peak: s
                    })
                }
                p.data("level", s);
                p.children("b").each(function(t, v) {
                    var u = e(v);
                    u.removeClass("on");
                    if (!h && m - n < t + 1) {
                        u.addClass("on")
                    }
                    if (l) {
                        u.removeClass("peak");
                        if (g) {
                            if (m - n - 0.5 * g <= t + 1 && m - n + 0.5 * g > t + 1) {
                                u.addClass("peak")
                            }
                        } else {
                            if (m - n === t + 1) {
                                u.addClass("peak")
                            }
                        }
                    }
                })
            }, this));
            return true
        },
        equalizer_image: function(g) {
            if (!this.$equalizer) {
                return false
            }
            this.$equalizer.children(".audio_equalizer_band").each(e.proxy(function(h, j) {
                var i = e(j);
                i.children("b").each(function(m, l) {
                    var k = e(l);
                    k.removeClass("on peak");
                    if (h >= g.length) {
                        return 
                    }
                    if (m >= g[h].length) {
                        return 
                    }
                    if (g[h][m] < 0) {
                        k.addClass("on")
                    } else {
                        if (g[h][m] > 0) {
                            k.addClass("peak")
                        }
                    }
                })
            }, this));
            return true
        },
        equalizer_dolphin: function(g, k, j, i) {
            var h = a.offset_image(a.dolphin_frames[j ? 1: 0], g, k, i);
            return this.equalizer_image(h)
        },
        equalizer_peaks: function() {
            if (!this.$equalizer) {
                return false
            }
            var g = true;
            this.$equalizer.children(".audio_equalizer_band").each(e.proxy(function(k, o) {
                var l = e(o);
                var m = parseFloat(l.data("peak")) || 0;
                var p = parseFloat(l.data("level")) || 0;
                var n = parseFloat(l.data("wait")) || 0;
                if (m !== p) {
                    g = false
                }
                if (n > 0) {
                    l.data("wait", n - 1);
                    return 
                }
                m = Math.max(m - 0.1, p);
                l.data("peak", m);
                var h = this.config.eq.levels;
                var j = Math.floor(m * (h - 1));
                l.data("peak", m);
                l.children("b").each(function(q, s) {
                    var r = e(s);
                    r.removeClass("peak");
                    if (h - j === q + 1) {
                        r.addClass("peak")
                    }
                })
            }, this));
            return g
        },
        set_animation_callback: function(i, g, h) {
            if (!i) {
                return this.reset_animation()
            }
            this.animation_callback = i;
            this.animation_interval = g || 30;
            this.animation_arguments = h || [];
            this.last_tick = 0
        },
        reset_animation: function() {
            this.animation = false;
            e(document.body).trigger("tumblr:audio:animation_complete", {
                audioplayer: this
            });
            this.animation_callback = false;
            this.animation_interval = false;
            this.animation_arguments = [];
            this.last_tick = 0
        },
        animation_tick: function(g, h) {
            if (!this.animation_callback) {
                return false
            }
            if (!(h || this.onscreen)) {
                return false
            }
            if (this.last_tick && g - this.last_tick < this.animation_interval) {
                return false
            }
            this.animation_callback.apply(this, this.animation_arguments);
            this.last_tick = g;
            return true
        },
        demo_animation_start: function(h) {
            if (a.config.disable_inactive_loop) {
                return false
            }
            if (!(h || this.$player.hasClass("inactive"))) {
                return false
            }
            var g = 60;
            var i = this.current_track_info("bpm") || 150;
            this.demo_frequency = i / 2 / Math.PI / g;
            this.demo_loop_index = 0;
            this.set_animation_callback(this.demo_animation_tick, g)
        },
        demo_animation_tick: function() {
            this.loop_index++;
            var g = Math.abs(Math.tan(Math.sin(this.demo_frequency * this.demo_loop_index)) * 2 / Math.PI);
            g*=0.5 * Math.max(0, Math.sin(0.5 * this.demo_frequency * this.demo_loop_index)) + 0.5;
            g = 0.4 * Math.abs(g) + 0.6;
            this.equalizer_levels(this.generate_demo_eq(0.75 * g, 0.3, 0.2, 1.6));
            this.equalizer_peaks()
        },
        playing_animation_start: function() {
            var g = 30;
            if (typeof this.fallback_offset !== "number") {
                this.fallback_offset = 0
            }
            if (this.real_frequencies) {
                this.set_animation_callback(this.visualizer_animation_tick, g, [true, true, false])
            } else {
                this.set_animation_callback(this.fallback_animation_tick, g)
            }
        },
        paused_animation_start: function(h) {
            var g = 30;
            if (h) {
                this.equalizer_levels(0)
            }
            this.set_animation_callback(this.visualizer_animation_tick, g, [false, true, true])
        },
        visualizer_animation_tick: function(i, j, g) {
            if (i) {
                this.equalizer_levels(this.read_analyser_frequencies(255, true, 1.3, 2))
            }
            var h = false;
            if (j) {
                h = this.equalizer_peaks();
                this.animation = true
            }
            if (h && g) {
                this.reset_animation()
            }
        },
        fallback_animation_tick: function() {
            if (this.playing) {
                this.fallback_offset++
            }
            this.equalizer_levels(this.generate_sine_eq(this.fallback_offset), true, true, 2)
        },
        idle_animation_start: function() {
            if (!this.$equalizer) {
                return 
            }
            this.dolphin_width = 6;
            this.dolphin_height = 5;
            this.dolphin_x =- this.dolphin_width;
            this.dolphin_y = 0;
            this.dolphin_left = false;
            this.dolphin_up = false;
            this.dolphin_frame = 0;
            this.dolphin_min_x =- 1;
            this.dolphin_max_x = this.config.eq.bands - this.dolphin_width + 1;
            this.dolphin_min_y =- 1;
            this.dolphin_max_y = this.config.eq.levels - this.dolphin_height + 1;
            if (!a.dolphin_frames) {
                a.generate_dolphins()
            }
            this.set_animation_callback(this.idle_animation_tick, 300)
        },
        idle_animation_tick: function() {
            this.equalizer_dolphin(this.dolphin_x, this.dolphin_y, this.dolphin_frame, this.dolphin_left);
            this.dolphin_frame = (this.dolphin_frame + 1)%a.dolphin_frames.length;
            if (this.dolphin_frame !== 0) {
                return 
            }
            this.dolphin_x += this.dolphin_left?-1 : 1;
            this.dolphin_y += this.dolphin_up?-1 : 1;
            if (!this.dolphin_left && this.dolphin_x >= this.dolphin_max_x) {
                this.dolphin_x = this.dolphin_max_x;
                this.dolphin_left = true
            } else {
                if (this.dolphin_left && this.dolphin_x <= this.dolphin_min_x) {
                    this.dolphin_x = this.dolphin_min_x;
                    this.dolphin_left = false
                }
            }
            if (!this.dolphin_up && this.dolphin_y >= this.dolphin_max_y) {
                this.dolphin_y = this.dolphin_max_y;
                this.dolphin_up = true
            } else {
                if (this.dolphin_up && this.dolphin_y <= this.dolphin_min_y) {
                    this.dolphin_y = this.dolphin_min_y;
                    this.dolphin_up = false
                }
            }
        },
        visualizer_fallback_tick: function() {
            var i = this.fallback_offset++;
            var h = this.config.eq.bands;
            var g = c.range(h).map(function(j, k) {
                return 0.3 * Math.sin(k + 0.3 * i) + 0.5
            });
            this.equalizer_levels(g, true, true, 2)
        },
        generate_sine_eq: function(i, g) {
            var h = this.config.eq ? this.config.eq.bands: 11;
            if (typeof i !== "number") {
                i = 0
            }
            if (typeof g !== "number") {
                g = 0.3
            }
            return c.range(h).map(function(j, k) {
                return g * Math.sin(k + 0.3 * i) + 0.5
            })
        },
        generate_demo_eq: function(j, i, g, h) {
            if (typeof j !== "number") {
                j = 1
            }
            if (typeof g !== "number") {
                g = 0
            }
            if (typeof h !== "number") {
                h = 1
            }
            return c.range(this.config.eq.bands).map(e.proxy(function(k, l) {
                var m = Math.max(0, Math.min(1 - l / (this.config.eq.bands - 1) + i, 1));
                return Math.pow(j * m * (g * Math.random() + 1 - g), h)
            }, this))
        },
        track_info: function(i, h) {
            if (!this.tracks.length) {
                return 
            }
            if (typeof i === "undefined") {
                i = this.config.start_at
            }
            if (i < 0 || i >= this.tracks.length) {
                return 
            }
            var g = this.tracks[i];
            return h ? g[h] : g
        },
        current_track_info: function(g) {
            return this.track_info(this.current_track_id, g)
        },
        is_onscreen: function(h) {
            if (!this.rect) {
                return 
            }
            if (typeof h !== "number") {
                h = 50
            }
            var j = this.$container.offset().top;
            var g = this.$container.offset().top + this.$container.height();
            var i = this.rect.windowScrollTop;
            var k = i + this.rect.windowHeight;
            if (j > k + h) {
                return (this.onscreen = false)
            }
            if (g < i - h) {
                return (this.onscreen = false)
            }
            return (this.onscreen = true)
        },
        needs_animation: function(g) {
            if (g) {
                this.is_onscreen()
            }
            if (!this.onscreen) {
                return false
            }
            if (this.playing || this.animation) {
                return true
            }
            if (!a.config.disable_inactive_loop && this.$player.hasClass("unplayed")) {
                return true
            }
            if (!this.$player.hasClass("unplayed") && this.$player.hasClass("inactive")) {
                return true
            }
            return false
        },
        current_state: function(g) {
            var h = "";
            if (this.playing) {
                h = "playing"
            } else {
                if (this.$player.hasClass("unplayed")) {
                    h = "unplayed"
                } else {
                    if (this.$player.hasClass("inactive")) {
                        h = "inactive"
                    } else {
                        if (this.$player.hasClass("error")) {
                            h = "error"
                        } else {
                            h = "paused"
                        }
                    }
                }
            }
            if (typeof g === "undefined") {
                return h
            } else {
                return (h === g)
            }
        }
    };
    a.instances = [];
    a.register = function(g) {
        this.instances.push(g)
    };
    a.unregister = function(g) {
        this.instances.splice(c.indexOf(this.instances, g), 1)
    };
    a.config = {
        disable_inactive_loop: true,
        draw_offscreen: false,
        one_at_a_time: true,
        auto_advance: false,
        key_commands: true
    };
    a.key_commands = false;
    a.idle_delay = 1;
    a.__init_jukebox = function(g) {
        this.config = e.extend(this.config, g);
        e(document.body).on("click.tumblraudio", ".audio_player_container.placeholder", function(j) {
            var i = Tumblr.AudioPlayer.replace_placeholder(e(j.currentTarget));
            i.smart_play_pause()
        });
        e(document.body).on({
            "tumblr:audio:animation_complete": e.proxy(function(j, i) {
                this.update_onscreen()
            }, this),
            "tumblr:audio:playing": e.proxy(function(j, i) {
                this.current_player_id = e.inArray(i.audioplayer, this.instances);
                this.current_player = i.audioplayer;
                e("iframe.tumblr_video_iframe").each(function(k, l) {
                    l.contentWindow.postMessage("pause", "*")
                });
                this.update_onscreen()
            }, this),
            "tumblr:audio:pause": e.proxy(function(j, i) {
                this.update_onscreen()
            }, this),
            "tumblr:audio:ended": e.proxy(function(j, i) {
                if (this.config.auto_advance) {
                    if (this.current_player_id + 1 < this.instances.length) {
                        this.instances[this.current_player_id + 1].on_overlay_mousedown()
                    }
                }
            }, this),
            mousedown: e.proxy(function(i) {
                this.set_key_commands(false)
            }, this),
            keydown: e.proxy(function(j) {
                if (!j) {
                    return false
                }
                if (!this.key_commands) {
                    return true
                }
                if (!this.current_player) {
                    return true
                }
                var i = j.charCode ? j.charCode: j.keyCode;
                switch (i) {
                case 32:
                    this.current_player.play_pause();
                    j.preventDefault();
                    j.stopPropagation();
                    return false;
                case 37:
                    if (!(j.ctrlKey || j.metaKey)) {
                        return true
                    }
                    j.preventDefault();
                    j.stopPropagation();
                    if (this.current_player.current_time > 2) {
                        this.current_player.skip_to(0);
                        return false
                    }
                    return !this.current_player.previous_track();
                case 39:
                    if (!(j.ctrlKey || j.metaKey)) {
                        return true
                    }
                    j.preventDefault();
                    j.stopPropagation();
                    return !this.current_player.next_track();
                case 27:
                    this.set_key_commands(false);
                    return false
                }
            }, this)
        });
        if (b.DOMEventor) {
            b.Events.on("DOMEventor:flatscroll", c.debounce(this.update_onscreen, 100), this);
            this.prototype.rect = b.DOMEventor.rect()
        } else {
            e(window).on("scroll", c.debounce((function(i) {
                var k = e(window);
                var j = i.prototype.rect = {};
                return function() {
                    j.windowScrollTop = k.scrollTop();
                    j.windowHeight = k.height();
                    i.update_onscreen()
                }
            })(this), 100))
        }
        try {
            Tumblr.PostMessageListener.initialize(function(j, i) {
                if (j[0] === "video_do_play") {
                    Tumblr.AudioPlayer.pause_all()
                }
            })
        } catch (h) {}
    };
    a.update_all = function() {
        var g = false;
        var h = false;
        var i = (!this.current_player ||!this.current_player.playing);
        this.replace_placeholders();
        e.each(this.instances, e.proxy(function(k, j) {
            if (j.is_onscreen()) {
                g = true
            }
            if (!h && j.needs_animation()) {
                h = true
            }
            if (i && j.current_state("unplayed")) {
                j.demo_animation_start(false)
            }
        }, this));
        if (this.instances.length) {
            if (h) {
                this.animation_start()
            } else {
                this.animation_stop()
            }
        }
    };
    a.update_onscreen = function() {
        var g = false;
        var h = false;
        e.each(this.instances, function(k, j) {
            if (j.is_onscreen()) {
                g = true
            }
            if (!h && j.needs_animation()) {
                h = true
            }
        });
        if (this.instances.length) {
            if (h) {
                this.animation_start()
            } else {
                this.animation_stop()
            }
        }
    };
    a.pause_all = function(g) {
        e.each(this.instances, function(j, h) {
            if (g && g === h.config.post_id) {
                return 
            }
            h.pause()
        })
    };
    a.animation_start = function() {
        if (this.animating) {
            return 
        }
        this.animating = true;
        window.cancelAnimationFrame(this.animation_frame);
        this.animation_frame = window.requestAnimationFrame(this._animation_tick)
    };
    a.animation_tick = function() {
        var g = Date.now();
        e.each(this.instances, e.proxy(function(j, h) {
            h.animation_tick(g, this.config.draw_offscreen)
        }, this));
        if (this.animating) {
            this.animation_frame = window.requestAnimationFrame(this._animation_tick)
        }
    };
    a._animation_tick = e.proxy(a.animation_tick, a);
    a.animation_stop = function(g) {
        this.animating = false;
        window.cancelAnimationFrame(this.animation_frame)
    };
    a.inactive_player_demo = function() {
        e.each(this.instances, function(h, g) {
            if (g.current_state("unplayed")) {
                g.demo_animation_start(false)
            }
        })
    };
    a.when_dolphins_cry = function() {
        e.each(this.instances, function(h, g) {
            g.idle_animation_start()
        })
    };
    a.create_context = function() {
        try {
            this.context = new webkitAudioContext();
            return this.context
        } catch (g) {
            return false
        }
    };
    a.replace_placeholders = function(g, h) {
        var i = g ? e(g): e(document.body);
        i.find(".audio_player_container.placeholder").each(c.bind(function(j, k) {
            this.replace_placeholder(k)
        }, this));
        if (h) {
            this.clean_up(true)
        }
    };
    a.replace_placeholder = function(j) {
        var g = e(j);
        var k = g.data();
        g.closest(".post").addClass("is_persistent");
        var l = e("<div/>");
        g.before(l);
        var i = {
            post_key: k.postKey,
            replace: l,
            container_classes: k.containerClasses,
            player_classes: k.playerClasses,
            post_id: k.postId,
            service: k.service,
            cover: k.cover,
            tracks: [{
                bpm: k.bpm,
                stream_url: k.streamUrl,
                track: k.track,
                artist: k.artist,
                album: k.album,
                default_text: !Boolean(k.track + k.artist),
                cover: k.cover
            }
            ],
            localized: {
                no_id3: k.noId3,
                flash_error: k.flashError
            }
        };
        if (k.hasVisualizer === false) {
            i.eq = false
        }
        var h = new a(i);
        g.remove();
        return h
    };
    a.clean_up = function(j) {
        if (!document.body) {
            return 
        }
        var h, g;
        for (h = 0; h < this.instances.length; h++) {
            g = this.instances[h];
            if (!g.$container.closest(document.body).length) {
                this.unregister(g);
                h--
            }
        }
        if (j) {
            this.sort()
        }
    };
    a.sort = function() {
        e.each(e(".audio_player_container"), function(h, g) {
            e(g).data("tumblr_audioplayer_sort", h)
        });
        this.instances.sort(function(h, g) {
            return h.$container.data("tumblr_audioplayer_sort") - g.$container.data("tumblr_audioplayer_sort")
        });
        this.current_player_id = e.inArray(this.current_player, this.instances)
    };
    a.scale_array_values = function(h, m, l, k) {
        if (m <= 0) {
            return []
        }
        if (h.length === m) {
            if (typeof k === "function") {
                return h.slice().map(k)
            } else {
                return h.slice()
            }
        }
        if (m === 1) {
            var j = c.reduce(h, function(o, p) {
                return o + p
            }, 0);
            if (typeof k === "function") {
                return [k(j)]
            } else {
                return [j]
            }
        }
        var g = c.range(m);
        var i = h.length / m;
        if (i > 1) {
            return g.map(function(o, r) {
                var t = r * i;
                var q = r * i + i;
                var u = 1 - t%1;
                var s = q%1;
                t = Math.floor(t);
                q = Math.floor(q);
                if (!s && t + 1 < q) {
                    q -= 1;
                    s = 1
                }
                var n = u * h[t] + s * h[q];
                for (var p = t + 1; p < q; p++) {
                    n += h[p]
                }
                if (l) {
                    n/=i
                }
                if (typeof k === "function") {
                    return k(n)
                } else {
                    return n
                }
            })
        } else {
            return g.map(function(o, p) {
                var q = Math.floor(p * i);
                var n = h[q] * i;
                if (l) {
                    n/=i
                }
                if (typeof k === "function") {
                    return k(n)
                } else {
                    return n
                }
            })
        }
    };
    a.format_title = function(g) {
        var h = "";
        if (g.artist) {
            h += g.artist
        }
        if (g.track) {
            if (h) {
                h += " "
            }
            h += "&quot;" + g.track + "&quot;"
        }
        if (g.album) {
            if (h) {
                h += " "
            }
            h += "(from '" + g.album + "')"
        }
        return h
    };
    a.format_time = function(j) {
        if (!j || j < 0) {
            j = 0
        }
        function i(m, l) {
            if (typeof m !== "string") {
                m = m.toString()
            }
            return m.length < l ? i("0" + m, l) : m
        }
        var k = Math.floor(j%60);
        var h = Math.floor(j / 60)%60;
        var g = Math.floor(j / 3600);
        if (g) {
            return g + ":" + i(h, 2) + ":" + i(k, 2)
        } else {
            return h + ":" + i(k, 2)
        }
    };
    a.has_equalizer_support = function() {
        if (this.context || this.create_context()) {
            if (/chrome/.test(navigator.userAgent.toLowerCase())) {
                return true
            }
        } else {
            if (Tumblr.flashVersion() >= 9) {
                return false
            }
        }
        return false
    };
    a.is_left_click = function(g) {
        return !(g && (g.which > 1 || g.which <= 1 && g.ctrlKey))
    };
    a.generate_image = function(h, k) {
        var g, m, l = [];
        for (var j = 0; j < h.length; j++) {
            g = j%k;
            m = Math.floor(j / k);
            if (!l[g]) {
                l[g] = []
            }
            switch (h[j]) {
            case" ":
                l[g][m] = 0;
                break;
            case"o":
                l[g][m] =- 1;
                break;
            default:
            case"x":
                l[g][m] = 1;
                break
            }
        }
        return l
    };
    a.offset_image = function(k, g, l, h) {
        k = k.slice();
        if (h) {
            k.reverse()
        }
        if (g > 0) {
            e.each(c.range(g), function() {
                k.unshift([])
            })
        } else {
            if (g < 0) {
                k.splice(0, - g)
            }
        }
        if (l) {
            for (var j = 0; j < k.length; j++) {
                k[j] = k[j].slice();
                if (l > 0) {
                    e.each(c.range(l), function() {
                        k[j].unshift(0)
                    })
                } else {
                    if (l < 0) {
                        k[j].splice(0, - l)
                    }
                }
            }
        }
        return k
    };
    a.generate_dolphins = function() {
        this.dolphin_frames = [this.generate_image("   x  x  xx xxxxxxx oxoo   x  ", 6), this.generate_image("   x     xx x xxxxxxoxoox  x  ", 6)];
        return this.dolphin_frames
    };
    a.set_key_commands = function(g, h) {
        if (this.ignore_next) {
            this.ignore_next = false;
            return this.key_commands
        }
        if (h) {
            this.ignore_next = true
        }
        this.key_commands = this.config.key_commands && g;
        return this.key_commands
    };
    var f = (function() {
        var k = new RegExp("audio(\\.min|_src|_player)?\\.js.*"), l = new RegExp("(^[^/]+//[^/]+|)(/.*$)|(.*)"), g = document.getElementsByTagName("script");
        for (var h = 0, j = g.length; h < j; h++) {
            var m = g[h].getAttribute("src");
            if (k.test(m)) {
                return m.replace(l, "$1")
            }
        }
        return ""
    })();
    a.defaults = {
        template: c.template('<div class="audio_player_container"><div class="album_art_container"><% if (cover) { %><img src="<%= cover %>" alt="<%- title %>" class="album_art main"/><% }%><% _.each(tracks, function(t, i) { %><% if (t.cover) { %><img src="<%= t.cover %>" alt="<%- Tumblr.AudioPlayer.format_title(t) %>" class="album_art album_art_<%= i %>"/><% }%><% }); %></div><div class="audio_player inactive unplayed"><div class="audio_controls"><div class="progress_container"><div class="load_progress"></div><div class="play_progress"></div><i class="playhead"></i><i class="seek_position"></i><i class="seek_time"></i></div><div class="player_text_wrapper"><div class="player_text"><% if (tracks.length) { %><ul class="id3_tags"><li class="track_name"><%- tracks[0].track %></li><li class="artist_name"><%- tracks[0].artist %></li><li class="album_name"><%- tracks[0].album %></li><% if (tracks[0].default_text) { %><li class="default_text">' + d("Listen") + '</li><% } %></ul><% } %></div></div><ul class="time_container"><li class="current_time">0:00</li><li class="separator"> / </li><li class="total_time">0:00</li></ul><div class="seek_overlay"></div><div class="play_pause_container"><i class="play_button audio_player_button">' + d("Play") + '</i><i class="pause_button audio_player_button">' + d("Pause") + '</i><i class="error_x audio_player_button">' + d("X") + '</i></div><div class="audio_message_container"><span class="audio_message_text">' + d("Listen") + '</span></div></div><div class="audio_visualizer"></div><div class="audio_player_overlay"></div></div></div>'),
        preview: false,
        eq: {
            width: 330,
            height: 84,
            padding_x: 16,
            padding_y: 7,
            bands: 11,
            levels: 14,
            tick_width: 18,
            tick_height: 3,
            tick_radius: 2,
            tick_margin_x: 10,
            tick_margin_y: 2
        },
        cover: "",
        service: "",
        container_classes: "",
        player_classes: "",
        autoplay: false,
        tracks: [{
            bpm: 150,
            stream_url: "",
            track: "",
            artist: "",
            album: "",
            cover: ""
        }
        ],
        start_at: 0,
        lightbox: Tumblr.Lightbox,
        audiojs_settings: {
            swfLocation: f + "/assets/scripts/legacy/audio-js/audiojs.swf",
            createPlayer: {
                playPauseClass: "play_pause_container",
                scrubberClass: "progress_container",
                progressClass: "play_progress",
                loaderClass: "load_progress",
                timeClass: "time_container",
                durationClass: "total_time",
                playedClass: "current_time",
                errorMessageClass: "audio_message_text",
                playingClass: "playing",
                loadingClass: "loading",
                errorClass: "error"
            },
            css: "",
            trackEnded: function(h) {
                var g = this.audioplayer;
                g.playing = false;
                audiojs.settings.trackEnded.apply(this, arguments);
                g.$player.addClass("inactive");
                g.paused_animation_start(true);
                g.idle_timeout = c.delay(e.proxy(g.idle_animation_start, g), a.idle_delay * 1000);
                e(document.body).trigger("tumblr:audio:ended", {
                    audioplayer: g
                })
            },
            flashError: function() {
                if (!this.audioplayer) {
                    return 
                }
                audiojs.settings.flashError.apply(this, arguments);
                var g = this.audioplayer;
                g.playing = false;
                g.flash_error = true;
                g.error = true;
                g.$player.addClass("inactive error flash_error").removeClass("playing");
                g.$message_text.html(g.localized.flash_error)
            },
            loadError: function() {
                audiojs.settings.loadError.apply(this, arguments);
                var g = this.audioplayer;
                g.error = true;
                g.$player.addClass("inactive error").removeClass("playing");
                g.$message_text.html(d("Error"))
            },
            init: function() {
                return audiojs.settings.init.apply(this, arguments)
            },
            loadStarted: function() {
                audiojs.settings.loadStarted.apply(this, arguments);
                var g = this.audioplayer;
                g.error = false
            },
            loadProgress: function(g) {
                return audiojs.settings.loadProgress.apply(this, arguments)
            },
            flashReady: function() {
                var g = this.audioplayer;
                g.__cache_selectors();
                g.__init_visualizations();
                g.bind_events();
                e(document.body).trigger("tumblr:audio:flashready", {
                    audioplayer: g
                })
            },
            play: function() {
                audiojs.settings.play.apply(this, arguments);
                var g = this.audioplayer;
                g.$player.removeClass("inactive unplayed");
                g.playing = true;
                g.playing_animation_start();
                clearTimeout(g.idle_timeout);
                e(document.body).trigger("tumblr:audio:playing", {
                    audioplayer: g
                })
            },
            pause: function() {
                audiojs.settings.pause.apply(this, arguments);
                var g = this.audioplayer;
                g.playing = false;
                if (!g.$player.hasClass("inactive")) {
                    g.paused_animation_start()
                }
                clearTimeout(g.idle_timeout);
                e(document.body).trigger("tumblr:audio:pause", {
                    audioplayer: g
                })
            },
            updatePlayhead: function(h) {
                audiojs.settings.updatePlayhead.apply(this, arguments);
                var g = this.audioplayer;
                g.$player.addClass("duration");
                g.total_time = this.element.duration || this.duration;
                g.current_time = g.total_time * h;
                g.play_progress = g.current_time / g.total_time;
                g.set_play_progress(g.play_progress);
                g.set_time(g.current_time, g.total_time);
                e(document.body).trigger("tumblr:audio:update", {
                    current_time: a.format_time(g.current_time),
                    total_time: a.format_time(g.total_time),
                    audioplayer: g
                })
            }
        }
    };
    b.AudioPlayer = a;
    e(function() {
        if (Tumblr.AudioPlayerSettings&&!e.isEmptyObject(Tumblr.AudioPlayerSettings)) {
            Tumblr.AudioPlayer.defaults = e.extend(Tumblr.AudioPlayer.defaults, Tumblr.AudioPlayerSettings)
        }
        a.__init_jukebox()
    });
    e(window).on("load", function(g) {
        a.create_context()
    })
})(_, jQuery, Tumblr);
/*! scripts/audio_player.js */

/*! scripts/dashboard_ask.js */
(function(d, a) {
    var c = c || function(g) {
        return g
    };
    var e = {
        initialize: function() {
            d(document).on("click", "a.ask", _.bind(function(g) {
                g.preventDefault();
                this.open_ask(d(g.currentTarget))
            }, this))
        },
        open_ask: function(g) {
            Tumblr.Popover.hide_all();
            var h = g.attr("data-tumblelog-name");
            var i = (parseInt(g.data("anonymous-ask"), 10) === 1) ? true: false;
            this.model = new f();
            if (this.view) {
                this.view.destroy()
            }
            this.view = new b({
                model: this.model,
                recipient: h,
                allow_anonymous: i
            }).show_form()
        }
    };
    var f = Backbone.Model.extend({
        defaults: {
            form_key: d("#tumblr_form_key").attr("content")
        },
        urlRoot: "/svc/post/ask",
        validate: function(g) {
            if (!d.trim(g.question)) {
                return {
                    error: c("You need to enter a question!")
                }
            } else {
                if (this.is_url(g.question)) {
                    return {
                        error: c("Sorry, but please don't include links in questions.")
                    }
                }
            }
            if (g.response && g.response.errors) {
                return g.response.errors
            }
        },
        is_url: function(g) {
            return !!(g.match(/(http|https):\/\//i) || g.match(/www\./i) || g.match(/[a-zA-Z0-9]+(\.arpa|\.root|\.aero|\.biz|\.cat|\.com|\.coop|\.edu|\.gov|\.info|\.int|\.jobs|\.mil|\.mobi|\.museum|\.name|\.net|\.org|\.pro|\.travel|TLD|\.ac|\.ad|\.ae|\.af|\.ag|\.ai|\.al|\.am|\.an|\.ao|\.aq|\.ar|\.as|\.at|\.au|\.aw|\.ax|\.az|\.ba|\.bb|\.bd|\.be|\.bf|\.bg|\.bh|\.bi|\.bj|\.bm|\.bn|\.bo|\.br|\.bs|\.bt|\.bv|\.bw|\.by|\.bz|\.ca|\.cc|\.cd|\.cf|\.cg|\.ch|\.ci|\.ck|\.cl|\.cm|\.cn|\.co|\.cr|\.cu|\.cv|\.cx|\.cy|\.cz|\.de|\.dj|\.dk|\.dm|\.do|\.dz|\.ec|\.ee|\.eg|\.er|\.es|\.et|\.eu|\.fi|\.fj|\.fk|\.fm|\.fo|\.fr|\.ga|\.gb|\.gd|\.ge|\.gf|\.gg|\.gh|\.gi|\.gl|\.gm|\.gn|\.gp|\.gq|\.gr|\.gs|\.gt|\.gu|\.gw|\.gy|\.hk|\.hm|\.hn|\.hr|\.ht|\.hu|\.id|\.ie|\.il|\.im|\.in|\.io|\.iq|\.ir|\.is|\.it|\.je|\.jm|\.jo|\.jp|\.ke|\.kg|\.kh|\.ki|\.km|\.kn|\.kr|\.kw|\.ky|\.kz|\.la|\.lb|\.lc|\.li|\.lk|\.lr|\.ls|\.lt|\.lu|\.lv|\.ly|\.ma|\.mc|\.md|\.mg|\.mh|\.mk|\.ml|\.mm|\.mn|\.mo|\.mp|\.mq|\.mr|\.ms|\.mt|\.mu|\.mv|\.mw|\.mx|\.my|\.mz|\.na|\.nc|\.ne|\.nf|\.ng|\.ni|\.nl|\.no|\.np|\.nr|\.nu|\.nz|\.om|\.pa|\.pe|\.pf|\.pg|\.ph|\.pk|\.pl|\.pm|\.pn|\.pr|\.ps|\.pt|\.pw|\.py|\.qa|\.re|\.ro|\.ru|\.rw|\.sa|\.sb|\.sc|\.sd|\.se|\.sg|\.sh|\.si|\.sj|\.sk|\.sl|\.sm|\.sn|\.so|\.sr|\.st|\.su|\.sv|\.sy|\.sz|\.tc|\.td|\.tf|\.tg|\.th|\.tj|\.tk|\.tl|\.tm|\.tn|\.to|\.tp|\.tr|\.tt|\.tv|\.tw|\.tz|\.ua|\.ug|\.uk|\.um|\.us|\.uy|\.uz|\.va|\.vc|\.ve|\.vg|\.vi|\.vn|\.vu|\.wf|\.ws|\.ye|\.yt|\.yu|\.za|\.zm|\.zw)/i))
        }
    });
    var b = Backbone.View.extend({
        className: "ask_container",
        events: {
            "click button.close": "__close_button_click",
            "keydown #question": "__textarea_keydown",
            "input #question": "__textarea_input",
            "change #question": "__textarea_input",
            "submit #ask_form": "__form_submit",
            "change #ask_anonymously": "__ask_anonymously_change"
        },
        __close_button_click: function(g) {
            g.preventDefault();
            this.hide_form()
        },
        __textarea_keydown: function(g) {
            if (g.keyCode === 13) {
                g.preventDefault()
            }
        },
        __textarea_input: function(g) {
            this.update()
        },
        __form_submit: function(g) {
            g.preventDefault();
            this.submit_form()
        },
        __ask_anonymously_change: function(h) {
            var g = d(h.currentTarget);
            this.toggle_anonymous(g)
        },
        __keydown: function(g) {
            if (g.keyCode === 27) {
                this.hide_form(g)
            }
        },
        initialize: function(g) {
            this.options = g || {};
            this.template = d("#dashboard_ask_template").html() || d("#dashboard_ask_template", window.parent.document).html();
            this.$body = d("body");
            this.ask_limit = Tumblr.ASK_CHARACTER_LIMIT || 500;
            this.recipient = this.options.recipient;
            this.recipient_avatar = this.options.recipient_avatar;
            this.allow_anonymous = this.options.allow_anonymous;
            this.render();
            var h = {
                lines: 13,
                length: 6,
                width: 2,
                radius: 6,
                color: "rgba(0,0,0,.5)",
                speed: 0.9,
                trail: 34,
                shadow: false,
                hwaccel: false,
                className: "spinner",
                zIndex: 2000000000,
                top: "0",
                left: "0"
            };
            this.keyboard_events = {
                keydown: _.bind(this.__keydown, this)
            };
            this.spinner = new Spinner(h)
        },
        render: function() {
            var g = _.template(this.template);
            this.$body.append(this.$el.append(g({
                recipient: this.recipient,
                allow_anonymous: this.allow_anonymous
            })));
            this.cache_selectors();
            this.is_ie9 = d("html").hasClass("ie9");
            if (this.is_ie9) {
                this.disable_submit()
            }
            Tumblr.PlaceHolders.init({
                els: this.$("#question"),
                clear_on_submit: true
            });
            return this
        },
        cache_selectors: function() {
            this.$form = this.$("form");
            this.$loader = this.$(".post_loader");
            this.$plexi = this.$(".plexi");
            this.$question = this.$("#question");
            this.$character_count = this.$("#character_count");
            this.$post_form_wrapper = this.$(".post_form_wrapper");
            this.$close_button = this.$("button.close");
            this.$post_avatar = this.$(".post_avatar");
            this.$post_avatar_link = this.$(".post_avatar_link");
            this.$tumblelog_name = this.$("#from .tumblelog_name");
            this.$anonymous = this.$("#from .anonymous");
            this.$anonymous_avatar = this.$(".post_avatar .anonymous");
            this.$ask_button = this.$("#ask_button")
        },
        toggle_anonymous: function(g) {
            this.is_anonymous = g.prop("checked");
            if (this.is_anonymous) {
                this.$post_avatar_link.removeClass("use_blog_avatar");
                this.$tumblelog_name.hide();
                this.$anonymous.show()
            } else {
                this.$post_avatar_link.addClass("use_blog_avatar");
                this.$tumblelog_name.show();
                this.$anonymous.hide()
            }
        },
        show_form: function() {
            if (_.isObject(Tumblr.KeyCommands)) {
                Tumblr.KeyCommands.suspend()
            }
            d(document).on("keydown", this.keyboard_events.keydown);
            this.$body.addClass("scrollverlay_active");
            this.$plexi.addClass("active");
            setTimeout(_.bind(function() {
                this.$plexi.addClass("show");
                this.$post_form_wrapper.addClass("active")
            }, this), 10);
            return this
        },
        hide_form: function() {
            if (_.isObject(Tumblr.KeyCommands)) {
                Tumblr.KeyCommands.resume()
            }
            this.$post_form_wrapper.removeClass("active");
            this.$plexi.removeClass("show");
            setTimeout(_.bind(function() {
                this.$plexi.removeClass("active");
                this.destroy()
            }, this), 250);
            this.$body.removeClass("scrollverlay_active");
            Tumblr.Events.trigger("ask:form:hide");
            return this
        },
        show_loader: function() {
            this.$loader.show();
            this.$close_button.hide();
            setTimeout(_.bind(function() {
                this.$loader.addClass("active")
            }, this), 10);
            this.spinner.spin(this.$(".loader").get(0))
        },
        hide_loader: function() {
            this.$close_button.show();
            this.$loader.removeClass("active");
            this.spinner.stop();
            this.$loader.hide()
        },
        serialize: function(i, j) {
            var h = {};
            var g = i.serializeArray();
            d.each(g, function() {
                if (h[this.name] !== undefined) {
                    if (!h[this.name].push) {
                        h[this.name] = [h[this.name]]
                    }
                    h[this.name].push(this.value || "")
                } else {
                    h[this.name] = this.value || ""
                }
            });
            return (j) ? JSON.stringify(h) : h
        },
        destroy: function() {
            this.remove();
            d(document).off("keydown", this.keyboard_events.keydown)
        },
        update: function() {
            if (d.trim(this.$question.val()).length > 0) {
                this.enable_submit()
            } else {
                this.disable_submit()
            }
            if (this.$question.val().match(/\n/g)) {
                this.$question.val(this.$question.val().replace(/\n/g, ""))
            }
            if (this.$question.val().length > this.ask_limit) {
                this.$question.val(this.$question.val().substring(0, this.ask_limit))
            }
            var g = this.ask_limit - this.$question.val().length;
            this.$character_count.text(g);
            if (g <= 100) {
                this.$character_count.addClass("active");
                if (g > 40) {
                    this.$character_count.css({
                        color: "#a8b1ba"
                    })
                } else {
                    if (g > 20 && g <= 40) {
                        this.$character_count.css({
                            color: "#b2212e"
                        })
                    } else {
                        this.$character_count.css({
                            color: "#cd1828"
                        })
                    }
                }
            } else {
                this.$character_count.removeClass("active")
            }
        },
        enable_submit: function() {
            if (!this.is_ie9) {
                this.$ask_button.prop("disabled", false)
            } else {
                this.$ask_button.prop("disabled", false).removeClass("ui_disabled")
            }
        },
        disable_submit: function() {
            if (!this.is_ie9) {
                this.$ask_button.prop("disabled", true)
            } else {
                this.$ask_button.prop("disabled", false).addClass("ui_disabled")
            }
        },
        submit_form: function() {
            var g = this.serialize(this.$form);
            this.show_loader();
            this.delay_loader = setTimeout(_.bind(function() {
                this.show_loader()
            }, this), 150);
            this.model.save(g, {
                success: _.bind(function(h) {
                    setTimeout(_.bind(function() {
                        clearTimeout(this.delay_loader);
                        Tumblr.Events.trigger("ask:form:success");
                        if (typeof Tumblr.Toaster === "object" && typeof Tumblr.ToastKit === "object") {
                            var j = "Question sent to %1$s";
                            j = Tumblr.ToastKit.__(j).replace("%1$s", this.recipient);
                            var i = {
                                type: "image_text",
                                message: "<strong>" + j + " </strong>",
                                is_link: false,
                                href: "#",
                                img1: {
                                    url: (this.is_anonymous) ? this.$anonymous_avatar.data("anonymous-avatar-url"): this.$post_avatar_link.data("user-avatar-url"),
                                    is_link: false,
                                    href: "#"
                                }
                            };
                            Tumblr.Toaster.add_toast(i)
                        }
                        this.hide_form()
                    }, this), 350)
                }, this),
                error: _.bind(function(h, i) {
                    clearTimeout(this.delay_loader);
                    this.hide_loader();
                    this.display_errors(i)
                }, this)
            })
        },
        show_messages: function(h, i) {
            var j = this.$("." + h);
            var g = j.get(0);
            if (!g) {
                return 
            }
            j.empty();
            if (typeof i === "string") {
                i = [i]
            }
            _.each(i, function(l) {
                var k = d("<li/>", {
                    text: l
                });
                j.append(k)
            });
            j.show().fadeTo(250, 1)
        },
        hide_messages: function(g) {
            var h = this.$("." + g);
            if (!h.length) {
                return 
            }
            h.empty().hide()
        },
        display_errors: function(g) {
            this.show_messages("errors", g)
        },
        hide_errors: function() {
            this.hide_messages("errors")
        }
    });
    a.DashboardAsk = e;
    a.DashboardAskModel = f;
    a.DashboardAskView = b
})(jQuery, Tumblr || {});
jQuery(function() {
    Tumblr.DashboardAsk.initialize()
});
/*! scripts/jquery.sparkline.min.js */
(function(b) {
    typeof define == "function" && define.amd ? define(["jquery"], b) : b(jQuery)
})(function(ar) {
    var aq = {}, ap, ao, an, am, al, ak, aj, ai, ah, ag, af, ae, ad, ac, aa, Y, W, U, S, Q, O, M, K, J, ab, Z, X, V, T, R, P, N, L = 0;
    ap = function() {
        return {
            common: {
                type: "line",
                lineColor: "#00f",
                fillColor: "#cdf",
                defaultPixelsPerValue: 3,
                width: "auto",
                height: "auto",
                composite: !1,
                tagValuesAttribute: "values",
                tagOptionsPrefix: "spark",
                enableTagOptions: !1,
                enableHighlight: !0,
                highlightLighten: 1.4,
                tooltipSkipNull: !0,
                tooltipPrefix: "",
                tooltipSuffix: "",
                disableHiddenCheck: !1,
                numberFormatter: !1,
                numberDigitGroupCount: 3,
                numberDigitGroupSep: ",",
                numberDecimalMark: ".",
                disableTooltips: !1,
                disableInteraction: !1
            },
            line: {
                spotColor: "#f80",
                highlightSpotColor: "#5f5",
                highlightLineColor: "#f22",
                spotRadius: 1.5,
                minSpotColor: "#f80",
                maxSpotColor: "#f80",
                lineWidth: 1,
                normalRangeMin: undefined,
                normalRangeMax: undefined,
                normalRangeColor: "#ccc",
                drawNormalOnTop: !1,
                chartRangeMin: undefined,
                chartRangeMax: undefined,
                chartRangeMinX: undefined,
                chartRangeMaxX: undefined,
                tooltipFormat: new an('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
            },
            bar: {
                barColor: "#3366cc",
                negBarColor: "#f44",
                stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                zeroColor: undefined,
                nullColor: undefined,
                zeroAxis: !0,
                barWidth: 4,
                barSpacing: 1,
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                chartRangeClip: !1,
                colorMap: undefined,
                tooltipFormat: new an('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
            },
            tristate: {
                barWidth: 4,
                barSpacing: 1,
                posBarColor: "#6f6",
                negBarColor: "#f44",
                zeroBarColor: "#999",
                colorMap: {},
                tooltipFormat: new an('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                tooltipValueLookups: {
                    map: {
                        "-1": "Loss",
                        0: "Draw",
                        1: "Win"
                    }
                }
            },
            discrete: {
                lineHeight: "auto",
                thresholdColor: undefined,
                thresholdValue: 0,
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                chartRangeClip: !1,
                tooltipFormat: new an("{{prefix}}{{value}}{{suffix}}")
            },
            bullet: {
                targetColor: "#f33",
                targetWidth: 3,
                performanceColor: "#33f",
                rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                base: undefined,
                tooltipFormat: new an("{{fieldkey:fields}} - {{value}}"),
                tooltipValueLookups: {
                    fields: {
                        r: "Range",
                        p: "Performance",
                        t: "Target"
                    }
                }
            },
            pie: {
                offset: 0,
                sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                borderWidth: 0,
                borderColor: "#000",
                tooltipFormat: new an('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
            },
            box: {
                raw: !1,
                boxLineColor: "#000",
                boxFillColor: "#cdf",
                whiskerColor: "#000",
                outlierLineColor: "#333",
                outlierFillColor: "#fff",
                medianColor: "#f00",
                showOutliers: !0,
                outlierIQR: 1.5,
                spotRadius: 1.5,
                target: undefined,
                targetColor: "#4a2",
                chartRangeMax: undefined,
                chartRangeMin: undefined,
                tooltipFormat: new an("{{field:fields}}: {{value}}"),
                tooltipFormatFieldlistKey: "field",
                tooltipValueLookups: {
                    fields: {
                        lq: "Lower Quartile",
                        med: "Median",
                        uq: "Upper Quartile",
                        lo: "Left Outlier",
                        ro: "Right Outlier",
                        lw: "Left Whisker",
                        rw: "Right Whisker"
                    }
                }
            }
        }
    }, Z = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', ao = function() {
        var a, d;
        return a = function() {
            this.init.apply(this, arguments)
        }, arguments.length > 1 ? (arguments[0] ? (a.prototype = ar.extend(new arguments[0], arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (d = Array.prototype.slice.call(arguments, 1, - 1), d.unshift(a.prototype), ar.extend.apply(ar, d))) : a.prototype = arguments[0], a.prototype.cls = a, a
    }, ar.SPFormatClass = an = ao({
        fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
        precre: /(\w+)\.(\d+)/,
        init: function(d, c) {
            this.format = d, this.fclass = c
        },
        render: function(t, s, r) {
            var q = this, p = t, o, n, m, l, k;
            return this.format.replace(this.fre, function() {
                var b;
                return n = arguments[1], m = arguments[3], o = q.precre.exec(n), o ? (k = o[2], n = o[1]) : k=!1, l = p[n], l === undefined ? "" : m && s && s[m] ? (b = s[m], b.get ? s[m].get(l) || l : s[m][l] || l) : (ah(l) && (r.get("numberFormatter") ? l = r.get("numberFormatter")(l) : l = ac(l, k, r.get("numberDigitGroupCount"), r.get("numberDigitGroupSep"), r.get("numberDecimalMark"))), l)
            })
        }
    }), ar.spformat = function(d, c) {
        return new an(d, c)
    }, am = function(e, d, f) {
        return e < d ? d : e > f ? f : e
    }, al = function(e, d) {
        var f;
        return d === 2 ? (f = Math.floor(e.length / 2), e.length%2 ? e[f] : (e[f - 1] + e[f]) / 2) : e.length%2 ? (f = (e.length * d + d) / 4, f%1 ? (e[Math.floor(f)] + e[Math.floor(f) - 1]) / 2 : e[f - 1]) : (f = (e.length * d + 2) / 4, f%1 ? (e[Math.floor(f)] + e[Math.floor(f) - 1]) / 2 : e[f - 1])
    }, ak = function(d) {
        var c;
        switch (d) {
        case"undefined":
            d = undefined;
            break;
        case"null":
            d = null;
            break;
        case"true":
            d=!0;
            break;
        case"false":
            d=!1;
            break;
        default:
            c = parseFloat(d), d == c && (d = c)
        }
        return d
    }, aj = function(e) {
        var d, f = [];
        for (d = e.length; d--;) {
            f[d] = ak(e[d])
        }
        return f
    }, ai = function(g, f) {
        var j, i, h = [];
        for (j = 0, i = g.length; j < i; j++) {
            g[j] !== f && h.push(g[j])
        }
        return h
    }, ah = function(b) {
        return !isNaN(parseFloat(b)) && isFinite(b)
    }, ac = function(a, n, m, l, k) {
        var j, i;
        a = (n===!1 ? parseFloat(a).toString() : a.toFixed(n)).split(""), j = (j = ar.inArray(".", a)) < 0 ? a.length : j, j < a.length && (a[j] = k);
        for (i = j - m; i > 0; i -= m) {
            a.splice(i, 0, l)
        }
        return a.join("")
    }, ag = function(f, e, h) {
        var g;
        for (g = e.length; g--;) {
            if (h && e[g] === null) {
                continue
            }
            if (e[g] !== f) {
                return !1
            }
        }
        return !0
    }, af = function(e) {
        var d = 0, f;
        for (f = e.length; f--;) {
            d += typeof e[f] == "number" ? e[f] : 0
        }
        return d
    }, ad = function(a) {
        return ar.isArray(a) ? a : [a]
    }, ae = function(d) {
        var c;
        document.createStyleSheet ? document.createStyleSheet().cssText = d : (c = document.createElement("style"), c.type = "text/css", document.getElementsByTagName("head")[0].appendChild(c), c[typeof document.body.style.WebkitAppearance == "string" ? "innerText": "innerHTML"] = d)
    }, ar.fn.simpledraw = function(a, l, k, j) {
        var i, h;
        if (k && (i = this.data("_jqs_vcanvas"))) {
            return i
        }
        a === undefined && (a = ar(this).innerWidth()), l === undefined && (l = ar(this).innerHeight());
        if (ar.fn.sparkline.hasCanvas) {
            i = new R(a, l, this, j)
        } else {
            if (!ar.fn.sparkline.hasVML) {
                return !1
            }
            i = new P(a, l, this)
        }
        return h = ar(this).data("_jqs_mhandler"), h && h.registerCanvas(i), i
    }, ar.fn.cleardraw = function() {
        var b = this.data("_jqs_vcanvas");
        b && b.reset()
    }, ar.RangeMapClass = aa = ao({
        init: function(f) {
            var e, h, g = [];
            for (e in f) {
                f.hasOwnProperty(e) && typeof e == "string" && e.indexOf(":")>-1 && (h = e.split(":"), h[0] = h[0].length === 0?-Infinity : parseFloat(h[0]), h[1] = h[1].length === 0 ? Infinity : parseFloat(h[1]), h[2] = f[e], g.push(h))
            }
            this.map = f, this.rangelist = g ||!1
        },
        get: function(g) {
            var f = this.rangelist, j, i, h;
            if ((h = this.map[g]) !== undefined) {
                return h
            }
            if (f) {
                for (j = f.length; j--;) {
                    i = f[j];
                    if (i[0] <= g && i[1] >= g) {
                        return i[2]
                    }
                }
            }
            return undefined
        }
    }), ar.range_map = function(b) {
        return new aa(b)
    }, Y = ao({
        init: function(a, f) {
            var e = ar(a);
            this.$el = e, this.options = f, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over=!1, this.displayTooltips=!f.get("disableTooltips"), this.highlightEnabled=!f.get("disableHighlight")
        },
        registerSparkline: function(b) {
            this.splist.push(b), this.over && this.updateDisplay()
        },
        registerCanvas: function(a) {
            var d = ar(a.canvas);
            this.canvas = a, this.$canvas = d, d.mouseenter(ar.proxy(this.mouseenter, this)), d.mouseleave(ar.proxy(this.mouseleave, this)), d.click(ar.proxy(this.mouseclick, this))
        },
        reset: function(b) {
            this.splist = [], this.tooltip && b && (this.tooltip.remove(), this.tooltip = undefined)
        },
        mouseclick: function(a) {
            var d = ar.Event("sparklineClick");
            d.originalEvent = a, d.sparklines = this.splist, this.$el.trigger(d)
        },
        mouseenter: function(a) {
            ar(document.body).unbind("mousemove.jqs"), ar(document.body).bind("mousemove.jqs", ar.proxy(this.mousemove, this)), this.over=!0, this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, !this.tooltip && this.displayTooltips && (this.tooltip = new W(this.options), this.tooltip.updatePosition(a.pageX, a.pageY)), this.updateDisplay()
        },
        mouseleave: function() {
            ar(document.body).unbind("mousemove.jqs");
            var a = this.splist, j = a.length, i=!1, h, g;
            this.over=!1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null);
            for (g = 0; g < j; g++) {
                h = a[g], h.clearRegionHighlight() && (i=!0)
            }
            i && this.canvas.render()
        },
        mousemove: function(b) {
            this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, this.tooltip && this.tooltip.updatePosition(b.pageX, b.pageY), this.updateDisplay()
        },
        updateDisplay: function() {
            var v = this.splist, u = v.length, t=!1, s = this.$canvas.offset(), r = this.currentPageX - s.left, q = this.currentPageY - s.top, p, o, n, m, a;
            if (!this.over) {
                return 
            }
            for (n = 0; n < u; n++) {
                o = v[n], m = o.setRegionHighlight(this.currentEl, r, q), m && (t=!0)
            }
            if (t) {
                a = ar.Event("sparklineRegionChange"), a.sparklines = this.splist, this.$el.trigger(a);
                if (this.tooltip) {
                    p = "";
                    for (n = 0; n < u; n++) {
                        o = v[n], p += o.getCurrentRegionTooltip()
                    }
                    this.tooltip.setContent(p)
                }
                this.disableHighlight || this.canvas.render()
            }
            m === null && this.mouseleave()
        }
    }), W = ao({
        sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
        init: function(a) {
            var h = a.get("tooltipClassname", "jqstooltip"), g = this.sizeStyle, f;
            this.container = a.get("tooltipContainer") || document.body, this.tooltipOffsetX = a.get("tooltipOffsetX", 10), this.tooltipOffsetY = a.get("tooltipOffsetY", 12), ar("#jqssizetip").remove(), ar("#jqstooltip").remove(), this.sizetip = ar("<div/>", {
                id: "jqssizetip",
                style: g,
                "class": h
            }), this.tooltip = ar("<div/>", {
                id: "jqstooltip",
                "class": h
            }).appendTo(this.container), f = this.tooltip.offset(), this.offsetLeft = f.left, this.offsetTop = f.top, this.hidden=!0, ar(window).unbind("resize.jqs scroll.jqs"), ar(window).bind("resize.jqs scroll.jqs", ar.proxy(this.updateWindowDims, this)), this.updateWindowDims()
        },
        updateWindowDims: function() {
            this.scrollTop = ar(window).scrollTop(), this.scrollLeft = ar(window).scrollLeft(), this.scrollRight = this.scrollLeft + ar(window).width(), this.updatePosition()
        },
        getSize: function(b) {
            this.sizetip.html(b).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
        },
        setContent: function(b) {
            if (!b) {
                this.tooltip.css("visibility", "hidden"), this.hidden=!0;
                return 
            }
            this.getSize(b), this.tooltip.html(b).css({
                width: this.width,
                height: this.height,
                visibility: "visible"
            }), this.hidden && (this.hidden=!1, this.updatePosition())
        },
        updatePosition: function(d, c) {
            if (d === undefined) {
                if (this.mousex === undefined) {
                    return 
                }
                d = this.mousex - this.offsetLeft, c = this.mousey - this.offsetTop
            } else {
                this.mousex = d -= this.offsetLeft, this.mousey = c -= this.offsetTop
            }
            if (!this.height ||!this.width || this.hidden) {
                return 
            }
            c -= this.height + this.tooltipOffsetY, d += this.tooltipOffsetX, c < this.scrollTop && (c = this.scrollTop), d < this.scrollLeft ? d = this.scrollLeft : d + this.width > this.scrollRight && (d = this.scrollRight - this.width), this.tooltip.css({
                left: d,
                top: c
            })
        },
        remove: function() {
            this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = undefined, ar(window).unbind("resize.jqs scroll.jqs")
        }
    }), X = function() {
        ae(Z)
    }, ar(X), N = [], ar.fn.sparkline = function(a, d) {
        return this.each(function() {
            var i = new ar.fn.sparkline.options(this, d), h = ar(this), c, b;
            c = function() {
                var q, p, o, n, m, l, e;
                if (a === "html" || a === undefined) {
                    e = this.getAttribute(i.get("tagValuesAttribute"));
                    if (e === undefined || e === null) {
                        e = h.html()
                    }
                    q = e.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")
                } else {
                    q = a
                }
                p = i.get("width") === "auto" ? q.length * i.get("defaultPixelsPerValue") : i.get("width");
                if (i.get("height") === "auto") {
                    if (!i.get("composite") ||!ar.data(this, "_jqs_vcanvas")) {
                        n = document.createElement("span"), n.innerHTML = "a", h.html(n), o = ar(n).innerHeight() || ar(n).height(), ar(n).remove(), n = null
                    }
                } else {
                    o = i.get("height")
                }
                i.get("disableInteraction") ? m=!1 : (m = ar.data(this, "_jqs_mhandler"), m ? i.get("composite") || m.reset() : (m = new Y(this, i), ar.data(this, "_jqs_mhandler", m)));
                if (i.get("composite")&&!ar.data(this, "_jqs_vcanvas")) {
                    ar.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), ar.data(this, "_jqs_errnotify", !0));
                    return 
                }
                l = new (ar.fn.sparkline[i.get("type")])(this, q, i, p, o), l.render(), m && m.registerSparkline(l)
            };
            if (ar(this).html()&&!i.get("disableHiddenCheck") && ar(this).is(":hidden") || ar.fn.jquery < "1.3.0" && ar(this).parents().is(":hidden") ||!ar(this).parents("body").length) {
                if (!i.get("composite") && ar.data(this, "_jqs_pending")) {
                    for (b = N.length; b; b--) {
                        N[b - 1][0] == this && N.splice(b - 1, 1)
                    }
                }
                N.push([this, c]), ar.data(this, "_jqs_pending", !0)
            } else {
                c.call(this)
            }
        })
    }, ar.fn.sparkline.defaults = ap(), ar.sparkline_display_visible = function() {
        var a, h, g, f = [];
        for (h = 0, g = N.length; h < g; h++) {
            a = N[h][0], ar(a).is(":visible")&&!ar(a).parents().is(":hidden") ? (N[h][1].call(a), ar.data(N[h][0], "_jqs_pending", !1), f.push(h)) : !ar(a).closest("html").length&&!ar.data(a, "_jqs_pending") && (ar.data(N[h][0], "_jqs_pending", !1), f.push(h))
        }
        for (h = f.length; h; h--) {
            N.splice(f[h - 1], 1)
        }
    }, ar.fn.sparkline.options = ao({
        init: function(l, k) {
            var j, i, b, a;
            this.userOptions = k = k || {}, this.tag = l, this.tagValCache = {}, i = ar.fn.sparkline.defaults, b = i.common, this.tagOptionsPrefix = k.enableTagOptions && (k.tagOptionsPrefix || b.tagOptionsPrefix), a = this.getTagSetting("type"), a === aq ? j = i[k.type || b.type] : j = i[a], this.mergedOptions = ar.extend({}, b, j, k)
        },
        getTagSetting: function(b) {
            var l = this.tagOptionsPrefix, k, j, i, h;
            if (l===!1 || l === undefined) {
                return aq
            }
            if (this.tagValCache.hasOwnProperty(b)) {
                k = this.tagValCache.key
            } else {
                k = this.tag.getAttribute(l + b);
                if (k === undefined || k === null) {
                    k = aq
                } else {
                    if (k.substr(0, 1) === "[") {
                        k = k.substr(1, k.length - 2).split(",");
                        for (j = k.length; j--;) {
                            k[j] = ak(k[j].replace(/(^\s*)|(\s*$)/g, ""))
                        }
                    } else {
                        if (k.substr(0, 1) === "{") {
                            i = k.substr(1, k.length - 2).split(","), k = {};
                            for (j = i.length; j--;) {
                                h = i[j].split(":", 2), k[h[0].replace(/(^\s*)|(\s*$)/g, "")] = ak(h[1].replace(/(^\s*)|(\s*$)/g, ""))
                            }
                        } else {
                            k = ak(k)
                        }
                    }
                }
                this.tagValCache.key = k
            }
            return k
        },
        get: function(b, h) {
            var g = this.getTagSetting(b), f;
            return g !== aq ? g : (f = this.mergedOptions[b]) === undefined ? h : f
        }
    }), ar.fn.sparkline._base = ao({
        disabled: !1,
        init: function(a, j, i, h, g) {
            this.el = a, this.$el = ar(a), this.values = j, this.options = i, this.width = h, this.height = g, this.currentRegion = undefined
        },
        initTarget: function() {
            var b=!this.options.get("disableInteraction");
            (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), b)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled=!0
        },
        render: function() {
            return this.disabled ? (this.el.innerHTML = "", !1) : !0
        },
        getRegion: function(d, c) {},
        setRegionHighlight: function(h, g, l) {
            var k = this.currentRegion, j=!this.options.get("disableHighlight"), i;
            return g > this.canvasWidth || l > this.canvasHeight || g < 0 || l < 0 ? null : (i = this.getRegion(h, g, l), k !== i ? (k !== undefined && j && this.removeHighlight(), this.currentRegion = i, i !== undefined && j && this.renderHighlight(), !0) : !1)
        },
        clearRegionHighlight: function() {
            return this.currentRegion !== undefined ? (this.removeHighlight(), this.currentRegion = undefined, !0) : !1
        },
        renderHighlight: function() {
            this.changeHighlight(!0)
        },
        removeHighlight: function() {
            this.changeHighlight(!1)
        },
        changeHighlight: function(b) {},
        getCurrentRegionTooltip: function() {
            var G = this.options, F = "", E = [], D, C, B, A, z, y, x, w, v, u, t, e, a, H;
            if (this.currentRegion === undefined) {
                return ""
            }
            D = this.getCurrentRegionFields(), t = G.get("tooltipFormatter");
            if (t) {
                return t(this, G, D)
            }
            G.get("tooltipChartTitle") && (F += '<div class="jqs jqstitle">' + G.get("tooltipChartTitle") + "</div>\n"), C = this.options.get("tooltipFormat");
            if (!C) {
                return ""
            }
            ar.isArray(C) || (C = [C]), ar.isArray(D) || (D = [D]), x = this.options.get("tooltipFormatFieldlist"), w = this.options.get("tooltipFormatFieldlistKey");
            if (x && w) {
                v = [];
                for (y = D.length; y--;) {
                    u = D[y][w], (H = ar.inArray(u, x))!=-1 && (v[H] = D[y])
                }
                D = v
            }
            B = C.length, a = D.length;
            for (y = 0; y < B; y++) {
                e = C[y], typeof e == "string" && (e = new an(e)), A = e.fclass || "jqsfield";
                for (H = 0; H < a; H++) {
                    if (!D[H].isNull ||!G.get("tooltipSkipNull")) {
                        ar.extend(D[H], {
                            prefix: G.get("tooltipPrefix"),
                            suffix: G.get("tooltipSuffix")
                        }), z = e.render(D[H], G.get("tooltipValueLookups"), G), E.push('<div class="' + A + '">' + z + "</div>")
                    }
                }
            }
            return E.length ? F + E.join("\n") : ""
        },
        getCurrentRegionFields: function() {},
        calcHighlightColor: function(j, f) {
            var p = f.get("highlightColor"), o = f.get("highlightLighten"), n, m, l, k;
            if (p) {
                return p
            }
            if (o) {
                n = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(j) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(j);
                if (n) {
                    l = [], m = j.length === 4 ? 16 : 1;
                    for (k = 0; k < 3; k++) {
                        l[k] = am(Math.round(parseInt(n[k + 1], 16) * m * o), 0, 255)
                    }
                    return "rgb(" + l.join(",") + ")"
                }
            }
            return j
        }
    }), U = {
        changeHighlight: function(a) {
            var j = this.currentRegion, i = this.target, h = this.regionShapes[j], g;
            h && (g = this.renderRegion(j, a), ar.isArray(g) || ar.isArray(h) ? (i.replaceWithShapes(h, g), this.regionShapes[j] = ar.map(g, function(b) {
                return b.id
            })) : (i.replaceWithShape(h, g), this.regionShapes[j] = g.id))
        },
        render: function() {
            var a = this.values, n = this.target, m = this.regionShapes, l, k, j, i;
            if (!this.cls._super.render.call(this)) {
                return 
            }
            for (j = a.length; j--;) {
                l = this.renderRegion(j);
                if (l) {
                    if (ar.isArray(l)) {
                        k = [];
                        for (i = l.length; i--;) {
                            l[i].append(), k.push(l[i].id)
                        }
                        m[j] = k
                    } else {
                        l.append(), m[j] = l.id
                    }
                } else {
                    m[j] = null
                }
            }
            n.render()
        }
    }, ar.fn.sparkline.line = S = ao(ar.fn.sparkline._base, {
        type: "line",
        init: function(g, f, j, i, h) {
            S._super.init.call(this, g, f, j, i, h), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
        },
        getRegion: function(g, f, j) {
            var i, h = this.regionMap;
            for (i = h.length; i--;) {
                if (h[i] !== null && f >= h[i][0] && f <= h[i][1]) {
                    return h[i][2]
                }
            }
            return undefined
        },
        getCurrentRegionFields: function() {
            var b = this.currentRegion;
            return {
                isNull: this.yvalues[b] === null,
                x: this.xvalues[b],
                y: this.yvalues[b],
                color: this.options.get("lineColor"),
                fillColor: this.options.get("fillColor"),
                offset: b
            }
        },
        renderHighlight: function() {
            var r = this.currentRegion, q = this.target, p = this.vertices[r], o = this.options, n = o.get("spotRadius"), m = o.get("highlightSpotColor"), l = o.get("highlightLineColor"), k, j;
            if (!p) {
                return 
            }
            n && m && (k = q.drawCircle(p[0], p[1], n, undefined, m), this.highlightSpotId = k.id, q.insertAfterShape(this.lastShapeId, k)), l && (j = q.drawLine(p[0], this.canvasTop, p[0], this.canvasTop + this.canvasHeight, l), this.highlightLineId = j.id, q.insertAfterShape(this.lastShapeId, j))
        },
        removeHighlight: function() {
            var b = this.target;
            this.highlightSpotId && (b.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (b.removeShapeId(this.highlightLineId), this.highlightLineId = null)
        },
        scanValues: function() {
            var t = this.values, s = t.length, r = this.xvalues, q = this.yvalues, p = this.yminmax, o, n, m, l, k;
            for (o = 0; o < s; o++) {
                n = t[o], m = typeof t[o] == "string", l = typeof t[o] == "object" && t[o] instanceof Array, k = m && t[o].split(":"), m && k.length === 2 ? (r.push(Number(k[0])), q.push(Number(k[1])), p.push(Number(k[1]))) : l ? (r.push(n[0]), q.push(n[1]), p.push(n[1])) : (r.push(o), t[o] === null || t[o] === "null" ? q.push(null) : (q.push(Number(n)), p.push(Number(n))))
            }
            this.options.get("xvalues") && (r = this.options.get("xvalues")), this.maxy = this.maxyorg = Math.max.apply(Math, p), this.miny = this.minyorg = Math.min.apply(Math, p), this.maxx = Math.max.apply(Math, r), this.minx = Math.min.apply(Math, r), this.xvalues = r, this.yvalues = q, this.yminmax = p
        },
        processRangeOptions: function() {
            var e = this.options, d = e.get("normalRangeMin"), f = e.get("normalRangeMax");
            d !== undefined && (d < this.miny && (this.miny = d), f > this.maxy && (this.maxy = f)), e.get("chartRangeMin") !== undefined && (e.get("chartRangeClip") || e.get("chartRangeMin") < this.miny) && (this.miny = e.get("chartRangeMin")), e.get("chartRangeMax") !== undefined && (e.get("chartRangeClip") || e.get("chartRangeMax") > this.maxy) && (this.maxy = e.get("chartRangeMax")), e.get("chartRangeMinX") !== undefined && (e.get("chartRangeClipX") || e.get("chartRangeMinX") < this.minx) && (this.minx = e.get("chartRangeMinX")), e.get("chartRangeMaxX") !== undefined && (e.get("chartRangeClipX") || e.get("chartRangeMaxX") > this.maxx) && (this.maxx = e.get("chartRangeMaxX"))
        },
        drawNormalRange: function(r, q, p, o, n) {
            var m = this.options.get("normalRangeMin"), l = this.options.get("normalRangeMax"), k = q + Math.round(p - p * ((l - this.miny) / n)), j = Math.round(p * (l - m) / n);
            this.target.drawRect(r, k, o, j, undefined, this.options.get("normalRangeColor")).append()
        },
        render: function() {
            var aV = this.options, aU = this.target, aT = this.canvasWidth, aS = this.canvasHeight, aR = this.vertices, aQ = aV.get("spotRadius"), aP = this.regionMap, aO, aN, aM, aL, aK, aJ, aI, aH, aE, aC, aA, ax, av, at, q, a, aG, aF, aD, aB, az, ay, aw, au, u;
            if (!S._super.render.call(this)) {
                return 
            }
            this.scanValues(), this.processRangeOptions(), aw = this.xvalues, au = this.yvalues;
            if (!this.yminmax.length || this.yvalues.length < 2) {
                return 
            }
            aL = aK = 0, aO = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, aN = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, aM = this.yvalues.length - 1, aQ && (aT < aQ * 4 || aS < aQ * 4) && (aQ = 0);
            if (aQ) {
                az = aV.get("highlightSpotColor")&&!aV.get("disableInteraction");
                if (az || aV.get("minSpotColor") || aV.get("spotColor") && au[aM] === this.miny) {
                    aS -= Math.ceil(aQ)
                }
                if (az || aV.get("maxSpotColor") || aV.get("spotColor") && au[aM] === this.maxy) {
                    aS -= Math.ceil(aQ), aL += Math.ceil(aQ)
                }
                if (az || (aV.get("minSpotColor") || aV.get("maxSpotColor")) && (au[0] === this.miny || au[0] === this.maxy)) {
                    aK += Math.ceil(aQ), aT -= Math.ceil(aQ)
                }
                if (az || aV.get("spotColor") || aV.get("minSpotColor") || aV.get("maxSpotColor") && (au[aM] === this.miny || au[aM] === this.maxy)) {
                    aT -= Math.ceil(aQ)
                }
            }
            aS--, aV.get("normalRangeMin") !== undefined&&!aV.get("drawNormalOnTop") && this.drawNormalRange(aK, aL, aS, aT, aN), aI = [], aH = [aI], at = q = null, a = au.length;
            for (u = 0; u < a; u++) {
                aE = aw[u], aA = aw[u + 1], aC = au[u], ax = aK + Math.round((aE - this.minx) * (aT / aO)), av = u < a - 1 ? aK + Math.round((aA - this.minx) * (aT / aO)) : aT, q = ax + (av - ax) / 2, aP[u] = [at || 0, q, u], at = q, aC === null ? u && (au[u - 1] !== null && (aI = [], aH.push(aI)), aR.push(null)) : (aC < this.miny && (aC = this.miny), aC > this.maxy && (aC = this.maxy), aI.length || aI.push([ax, aL + aS]), aJ = [ax, aL + Math.round(aS - aS * ((aC - this.miny) / aN))], aI.push(aJ), aR.push(aJ))
            }
            aG = [], aF = [], aD = aH.length;
            for (u = 0; u < aD; u++) {
                aI = aH[u], aI.length && (aV.get("fillColor") && (aI.push([aI[aI.length - 1][0], aL + aS]), aF.push(aI.slice(0)), aI.pop()), aI.length > 2 && (aI[0] = [aI[0][0], aI[1][1]]), aG.push(aI))
            }
            aD = aF.length;
            for (u = 0; u < aD; u++) {
                aU.drawShape(aF[u], aV.get("fillColor"), aV.get("fillColor")).append()
            }
            aV.get("normalRangeMin") !== undefined && aV.get("drawNormalOnTop") && this.drawNormalRange(aK, aL, aS, aT, aN), aD = aG.length;
            for (u = 0; u < aD; u++) {
                aU.drawShape(aG[u], aV.get("lineColor"), undefined, aV.get("lineWidth")).append()
            }
            if (aQ && aV.get("valueSpots")) {
                aB = aV.get("valueSpots"), aB.get === undefined && (aB = new aa(aB));
                for (u = 0; u < a; u++) {
                    ay = aB.get(au[u]), ay && aU.drawCircle(aK + Math.round((aw[u] - this.minx) * (aT / aO)), aL + Math.round(aS - aS * ((au[u] - this.miny) / aN)), aQ, undefined, ay).append()
                }
            }
            aQ && aV.get("spotColor") && au[aM] !== null && aU.drawCircle(aK + Math.round((aw[aw.length - 1] - this.minx) * (aT / aO)), aL + Math.round(aS - aS * ((au[aM] - this.miny) / aN)), aQ, undefined, aV.get("spotColor")).append(), this.maxy !== this.minyorg && (aQ && aV.get("minSpotColor") && (aE = aw[ar.inArray(this.minyorg, au)], aU.drawCircle(aK + Math.round((aE - this.minx) * (aT / aO)), aL + Math.round(aS - aS * ((this.minyorg - this.miny) / aN)), aQ, undefined, aV.get("minSpotColor")).append()), aQ && aV.get("maxSpotColor") && (aE = aw[ar.inArray(this.maxyorg, au)], aU.drawCircle(aK + Math.round((aE - this.minx) * (aT / aO)), aL + Math.round(aS - aS * ((this.maxyorg - this.miny) / aN)), aQ, undefined, aV.get("maxSpotColor")).append())), this.lastShapeId = aU.getLastShapeId(), this.canvasTop = aL, aU.render()
        }
    }), ar.fn.sparkline.bar = Q = ao(ar.fn.sparkline._base, U, {
        type: "bar",
        init: function(aW, aV, aU, aT, aS) {
            var aR = parseInt(aU.get("barWidth"), 10), aQ = parseInt(aU.get("barSpacing"), 10), aP = aU.get("chartRangeMin"), aO = aU.get("chartRangeMax"), aN = aU.get("chartRangeClip"), aM = Infinity, aL =- Infinity, aK, aJ, aI, aH, aG, aF, aE, aD, aC, aB, aA, az, ay, ax, aw, av, au, at, v, q, j, i, h;
            Q._super.init.call(this, aW, aV, aU, aT, aS);
            for (aF = 0, aE = aV.length; aF < aE; aF++) {
                q = aV[aF], aK = typeof q == "string" && q.indexOf(":")>-1;
                if (aK || ar.isArray(q)) {
                    aw=!0, aK && (q = aV[aF] = aj(q.split(":"))), q = ai(q, null), aJ = Math.min.apply(Math, q), aI = Math.max.apply(Math, q), aJ < aM && (aM = aJ), aI > aL && (aL = aI)
                }
            }
            this.stacked = aw, this.regionShapes = {}, this.barWidth = aR, this.barSpacing = aQ, this.totalBarWidth = aR + aQ, this.width = aT = aV.length * aR + (aV.length - 1) * aQ, this.initTarget(), aN && (ay = aP === undefined?-Infinity : aP, ax = aO === undefined ? Infinity : aO), aG = [], aH = aw ? [] : aG;
            var f = [], a = [];
            for (aF = 0, aE = aV.length; aF < aE; aF++) {
                if (aw) {
                    av = aV[aF], aV[aF] = v = [], f[aF] = 0, aH[aF] = a[aF] = 0;
                    for (au = 0, at = av.length; au < at; au++) {
                        q = v[au] = aN ? am(av[au], ay, ax) : av[au], q !== null && (q > 0 && (f[aF] += q), aM < 0 && aL > 0 ? q < 0 ? a[aF] += Math.abs(q) : aH[aF] += q : aH[aF] += Math.abs(q - (q < 0 ? aL : aM)), aG.push(q))
                    }
                } else {
                    q = aN ? am(aV[aF], ay, ax) : aV[aF], q = aV[aF] = ak(q), q !== null && aG.push(q)
                }
            }
            this.max = az = Math.max.apply(Math, aG), this.min = aA = Math.min.apply(Math, aG), this.stackMax = aL = aw ? Math.max.apply(Math, f) : az, this.stackMin = aM = aw ? Math.min.apply(Math, aG) : aA, aU.get("chartRangeMin") !== undefined && (aU.get("chartRangeClip") || aU.get("chartRangeMin") < aA) && (aA = aU.get("chartRangeMin")), aU.get("chartRangeMax") !== undefined && (aU.get("chartRangeClip") || aU.get("chartRangeMax") > az) && (az = aU.get("chartRangeMax")), this.zeroAxis = aC = aU.get("zeroAxis", !0), aA <= 0 && az >= 0 && aC ? aB = 0 : aC == 0 ? aB = aA : aA > 0 ? aB = aA : aB = az, this.xaxisOffset = aB, aD = aw ? Math.max.apply(Math, aH) + Math.max.apply(Math, a) : az - aA, this.canvasHeightEf = aC && aA < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, aA < aB ? (i = aw && az >= 0 ? aL : az, j = (i - aB) / aD * this.canvasHeight, j !== Math.ceil(j) && (this.canvasHeightEf -= 2, j = Math.ceil(j))) : j = this.canvasHeight, this.yoffset = j, ar.isArray(aU.get("colorMap")) ? (this.colorMapByIndex = aU.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = aU.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === undefined && (this.colorMapByValue = new aa(this.colorMapByValue))), this.range = aD
        },
        getRegion: function(f, e, h) {
            var g = Math.floor(e / this.totalBarWidth);
            return g < 0 || g >= this.values.length ? undefined : g
        },
        getCurrentRegionFields: function() {
            var g = this.currentRegion, f = ad(this.values[g]), j = [], i, h;
            for (h = f.length; h--;) {
                i = f[h], j.push({
                    isNull: i === null,
                    value: i,
                    color: this.calcColor(h, i, g),
                    offset: g
                })
            }
            return j
        },
        calcColor: function(a, p, o) {
            var n = this.colorMapByIndex, m = this.colorMapByValue, l = this.options, k, j;
            return this.stacked ? k = l.get("stackedBarColor") : k = p < 0 ? l.get("negBarColor") : l.get("barColor"), p === 0 && l.get("zeroColor") !== undefined && (k = l.get("zeroColor")), m && (j = m.get(p)) ? k = j : n && n.length > o && (k = n[o]), ar.isArray(k) ? k[a%k.length] : k
        },
        renderRegion: function(aB, aA) {
            var az = this.values[aB], ay = this.options, ax = this.xaxisOffset, aw = [], av = this.range, au = this.stacked, at = this.target, I = aB * this.totalBarWidth, H = this.canvasHeightEf, G = this.yoffset, F, E, D, C, B, A, z, y, l, a;
            az = ar.isArray(az) ? az : [az], z = az.length, y = az[0], C = ag(null, az), a = ag(ax, az, !0);
            if (C) {
                return ay.get("nullColor") ? (D = aA ? ay.get("nullColor") : this.calcHighlightColor(ay.get("nullColor"), ay), F = G > 0 ? G - 1 : G, at.drawRect(I, F, this.barWidth - 1, 0, D, D)) : undefined
            }
            B = G;
            for (A = 0; A < z; A++) {
                y = az[A];
                if (au && y === ax) {
                    if (!a || l) {
                        continue
                    }
                    l=!0
                }
                av > 0 ? E = Math.floor(H * (Math.abs(y - ax) / av)) + 1 : E = 1, y < ax || y === ax && G === 0 ? (F = B, B += E) : (F = G - E, G -= E), D = this.calcColor(A, y, aB), aA && (D = this.calcHighlightColor(D, ay)), aw.push(at.drawRect(I, F, this.barWidth - 1, E - 1, D, D))
            }
            return aw.length === 1 ? aw[0] : aw
        }
    }), ar.fn.sparkline.tristate = O = ao(ar.fn.sparkline._base, U, {
        type: "tristate",
        init: function(a, n, m, l, k) {
            var j = parseInt(m.get("barWidth"), 10), i = parseInt(m.get("barSpacing"), 10);
            O._super.init.call(this, a, n, m, l, k), this.regionShapes = {}, this.barWidth = j, this.barSpacing = i, this.totalBarWidth = j + i, this.values = ar.map(n, Number), this.width = l = n.length * j + (n.length - 1) * i, ar.isArray(m.get("colorMap")) ? (this.colorMapByIndex = m.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = m.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === undefined && (this.colorMapByValue = new aa(this.colorMapByValue))), this.initTarget()
        },
        getRegion: function(e, d, f) {
            return Math.floor(d / this.totalBarWidth)
        },
        getCurrentRegionFields: function() {
            var b = this.currentRegion;
            return {
                isNull: this.values[b] === undefined,
                value: this.values[b],
                color: this.calcColor(this.values[b], b),
                offset: b
            }
        },
        calcColor: function(j, i) {
            var p = this.values, o = this.options, n = this.colorMapByIndex, m = this.colorMapByValue, l, k;
            return m && (k = m.get(j)) ? l = k : n && n.length > i ? l = n[i] : p[i] < 0 ? l = o.get("negBarColor") : p[i] > 0 ? l = o.get("posBarColor") : l = o.get("zeroBarColor"), l
        },
        renderRegion: function(v, u) {
            var t = this.values, s = this.options, r = this.target, q, p, o, n, m, l;
            q = r.pixelHeight, o = Math.round(q / 2), n = v * this.totalBarWidth, t[v] < 0 ? (m = o, p = o - 1) : t[v] > 0 ? (m = 0, p = o - 1) : (m = o - 1, p = 2), l = this.calcColor(t[v], v);
            if (l === null) {
                return 
            }
            return u && (l = this.calcHighlightColor(l, s)), r.drawRect(n, m, this.barWidth - 1, p - 1, l, l)
        }
    }), ar.fn.sparkline.discrete = M = ao(ar.fn.sparkline._base, U, {
        type: "discrete",
        init: function(a, j, i, h, g) {
            M._super.init.call(this, a, j, i, h, g), this.regionShapes = {}, this.values = j = ar.map(j, Number), this.min = Math.min.apply(Math, j), this.max = Math.max.apply(Math, j), this.range = this.max - this.min, this.width = h = i.get("width") === "auto" ? j.length * 2 : this.width, this.interval = Math.floor(h / j.length), this.itemWidth = h / j.length, i.get("chartRangeMin") !== undefined && (i.get("chartRangeClip") || i.get("chartRangeMin") < this.min) && (this.min = i.get("chartRangeMin")), i.get("chartRangeMax") !== undefined && (i.get("chartRangeClip") || i.get("chartRangeMax") > this.max) && (this.max = i.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = i.get("lineHeight") === "auto" ? Math.round(this.canvasHeight * 0.3) : i.get("lineHeight"))
        },
        getRegion: function(e, d, f) {
            return Math.floor(d / this.itemWidth)
        },
        getCurrentRegionFields: function() {
            var b = this.currentRegion;
            return {
                isNull: this.values[b] === undefined,
                value: this.values[b],
                offset: b
            }
        },
        renderRegion: function(F, E) {
            var D = this.values, C = this.options, B = this.min, A = this.max, z = this.range, y = this.interval, x = this.target, w = this.canvasHeight, v = this.lineHeight, u = w - v, t, s, r, f;
            return s = am(D[F], B, A), f = F * y, t = Math.round(u - u * ((s - B) / z)), r = C.get("thresholdColor") && s < C.get("thresholdValue") ? C.get("thresholdColor") : C.get("lineColor"), E && (r = this.calcHighlightColor(r, C)), x.drawLine(f, t, f, t + v, r)
        }
    }), ar.fn.sparkline.bullet = K = ao(ar.fn.sparkline._base, {
        type: "bullet",
        init: function(j, i, p, o, n) {
            var m, l, k;
            K._super.init.call(this, j, i, p, o, n), this.values = i = aj(i), k = i.slice(), k[0] = k[0] === null ? k[2] : k[0], k[1] = i[1] === null ? k[2] : k[1], m = Math.min.apply(Math, i), l = Math.max.apply(Math, i), p.get("base") === undefined ? m = m < 0 ? m : 0 : m = p.get("base"), this.min = m, this.max = l, this.range = l - m, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = o = p.get("width") === "auto" ? "4.0em" : o, this.target = this.$el.simpledraw(o, n, p.get("composite")), i.length || (this.disabled=!0), this.initTarget()
        },
        getRegion: function(f, e, h) {
            var g = this.target.getShapeAt(f, e, h);
            return g !== undefined && this.shapes[g] !== undefined ? this.shapes[g] : undefined
        },
        getCurrentRegionFields: function() {
            var b = this.currentRegion;
            return {
                fieldkey: b.substr(0, 1),
                value: this.values[b.substr(1)],
                region: b
            }
        },
        changeHighlight: function(f) {
            var e = this.currentRegion, h = this.valueShapes[e], g;
            delete this.shapes[h];
            switch (e.substr(0, 1)) {
            case"r":
                g = this.renderRange(e.substr(1), f);
                break;
            case"p":
                g = this.renderPerformance(f);
                break;
            case"t":
                g = this.renderTarget(f)
            }
            this.valueShapes[e] = g.id, this.shapes[g.id] = e, this.target.replaceWithShape(h, g)
        },
        renderRange: function(g, f) {
            var j = this.values[g], i = Math.round(this.canvasWidth * ((j - this.min) / this.range)), h = this.options.get("rangeColors")[g - 2];
            return f && (h = this.calcHighlightColor(h, this.options)), this.target.drawRect(0, 0, i - 1, this.canvasHeight - 1, h, h)
        },
        renderPerformance: function(f) {
            var e = this.values[1], h = Math.round(this.canvasWidth * ((e - this.min) / this.range)), g = this.options.get("performanceColor");
            return f && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), h - 1, Math.round(this.canvasHeight * 0.4) - 1, g, g)
        },
        renderTarget: function(h) {
            var g = this.values[0], l = Math.round(this.canvasWidth * ((g - this.min) / this.range) - this.options.get("targetWidth") / 2), k = Math.round(this.canvasHeight * 0.1), j = this.canvasHeight - k * 2, i = this.options.get("targetColor");
            return h && (i = this.calcHighlightColor(i, this.options)), this.target.drawRect(l, k, this.options.get("targetWidth") - 1, j - 1, i, i)
        },
        render: function() {
            var f = this.values.length, e = this.target, h, g;
            if (!K._super.render.call(this)) {
                return 
            }
            for (h = 2; h < f; h++) {
                g = this.renderRange(h).append(), this.shapes[g.id] = "r" + h, this.valueShapes["r" + h] = g.id
            }
            this.values[1] !== null && (g = this.renderPerformance().append(), this.shapes[g.id] = "p1", this.valueShapes.p1 = g.id), this.values[0] !== null && (g = this.renderTarget().append(), this.shapes[g.id] = "t0", this.valueShapes.t0 = g.id), e.render()
        }
    }), ar.fn.sparkline.pie = J = ao(ar.fn.sparkline._base, {
        type: "pie",
        init: function(a, n, m, l, k) {
            var j = 0, i;
            J._super.init.call(this, a, n, m, l, k), this.shapes = {}, this.valueShapes = {}, this.values = n = ar.map(n, Number), m.get("width") === "auto" && (this.width = this.height);
            if (n.length > 0) {
                for (i = n.length; i--;) {
                    j += n[i]
                }
            }
            this.total = j, this.initTarget(), this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2)
        },
        getRegion: function(f, e, h) {
            var g = this.target.getShapeAt(f, e, h);
            return g !== undefined && this.shapes[g] !== undefined ? this.shapes[g] : undefined
        },
        getCurrentRegionFields: function() {
            var b = this.currentRegion;
            return {
                isNull: this.values[b] === undefined,
                value: this.values[b],
                percent: this.values[b] / this.total * 100,
                color: this.options.get("sliceColors")[b%this.options.get("sliceColors").length],
                offset: b
            }
        },
        changeHighlight: function(f) {
            var e = this.currentRegion, h = this.renderSlice(e, f), g = this.valueShapes[e];
            delete this.shapes[g], this.target.replaceWithShape(g, h), this.valueShapes[e] = h.id, this.shapes[h.id] = e
        },
        renderSlice: function(F, E) {
            var D = this.target, C = this.options, B = this.radius, A = C.get("borderWidth"), z = C.get("offset"), y = 2 * Math.PI, x = this.values, w = this.total, v = z ? 2 * Math.PI * (z / 360): 0, u, t, s, r, q;
            r = x.length;
            for (s = 0; s < r; s++) {
                u = v, t = v, w > 0 && (t = v + y * (x[s] / w));
                if (F === s) {
                    return q = C.get("sliceColors")[s%C.get("sliceColors").length], E && (q = this.calcHighlightColor(q, C)), D.drawPieSlice(B, B, B - A, u, t, undefined, q)
                }
                v = t
            }
        },
        render: function() {
            var i = this.target, h = this.values, n = this.options, m = this.radius, l = n.get("borderWidth"), k, j;
            if (!J._super.render.call(this)) {
                return 
            }
            l && i.drawCircle(m, m, Math.floor(m - l / 2), n.get("borderColor"), undefined, l).append();
            for (j = h.length; j--;) {
                h[j] && (k = this.renderSlice(j).append(), this.valueShapes[j] = k.id, this.shapes[k.id] = j)
            }
            i.render()
        }
    }), ar.fn.sparkline.box = ab = ao(ar.fn.sparkline._base, {
        type: "box",
        init: function(a, j, i, h, g) {
            ab._super.init.call(this, a, j, i, h, g), this.values = ar.map(j, Number), this.width = i.get("width") === "auto" ? "4.0em" : h, this.initTarget(), this.values.length || (this.disabled = 1)
        },
        getRegion: function() {
            return 1
        },
        getCurrentRegionFields: function() {
            var b = [{
                field: "lq",
                value: this.quartiles[0]
            }, {
                field: "med",
                value: this.quartiles[1]
            }, {
                field: "uq",
                value: this.quartiles[2]
            }
            ];
            return this.loutlier !== undefined && b.push({
                field: "lo",
                value: this.loutlier
            }), this.routlier !== undefined && b.push({
                field: "ro",
                value: this.routlier
            }), this.lwhisker !== undefined && b.push({
                field: "lw",
                value: this.lwhisker
            }), this.rwhisker !== undefined && b.push({
                field: "rw",
                value: this.rwhisker
            }), b
        },
        render: function() {
            var ax = this.target, aw = this.values, av = aw.length, au = this.options, at = this.canvasWidth, I = this.canvasHeight, H = au.get("chartRangeMin") === undefined ? Math.min.apply(Math, aw): au.get("chartRangeMin"), G = au.get("chartRangeMax") === undefined ? Math.max.apply(Math, aw): au.get("chartRangeMax"), F = 0, E, D, C, B, A, z, y, x, w, v, g;
            if (!ab._super.render.call(this)) {
                return 
            }
            if (au.get("raw")) {
                au.get("showOutliers") && aw.length > 5 ? (D = aw[0], E = aw[1], B = aw[2], A = aw[3], z = aw[4], y = aw[5], x = aw[6]) : (E = aw[0], B = aw[1], A = aw[2], z = aw[3], y = aw[4])
            } else {
                aw.sort(function(d, c) {
                    return d - c
                }), B = al(aw, 1), A = al(aw, 2), z = al(aw, 3), C = z - B;
                if (au.get("showOutliers")) {
                    E = y = undefined;
                    for (w = 0; w < av; w++) {
                        E === undefined && aw[w] > B - C * au.get("outlierIQR") && (E = aw[w]), aw[w] < z + C * au.get("outlierIQR") && (y = aw[w])
                    }
                    D = aw[0], x = aw[av - 1]
                } else {
                    E = aw[0], y = aw[av - 1]
                }
            }
            this.quartiles = [B, A, z], this.lwhisker = E, this.rwhisker = y, this.loutlier = D, this.routlier = x, g = at / (G - H + 1), au.get("showOutliers") && (F = Math.ceil(au.get("spotRadius")), at -= 2 * Math.ceil(au.get("spotRadius")), g = at / (G - H + 1), D < E && ax.drawCircle((D - H) * g + F, I / 2, au.get("spotRadius"), au.get("outlierLineColor"), au.get("outlierFillColor")).append(), x > y && ax.drawCircle((x - H) * g + F, I / 2, au.get("spotRadius"), au.get("outlierLineColor"), au.get("outlierFillColor")).append()), ax.drawRect(Math.round((B - H) * g + F), Math.round(I * 0.1), Math.round((z - B) * g), Math.round(I * 0.8), au.get("boxLineColor"), au.get("boxFillColor")).append(), ax.drawLine(Math.round((E - H) * g + F), Math.round(I / 2), Math.round((B - H) * g + F), Math.round(I / 2), au.get("lineColor")).append(), ax.drawLine(Math.round((E - H) * g + F), Math.round(I / 4), Math.round((E - H) * g + F), Math.round(I - I / 4), au.get("whiskerColor")).append(), ax.drawLine(Math.round((y - H) * g + F), Math.round(I / 2), Math.round((z - H) * g + F), Math.round(I / 2), au.get("lineColor")).append(), ax.drawLine(Math.round((y - H) * g + F), Math.round(I / 4), Math.round((y - H) * g + F), Math.round(I - I / 4), au.get("whiskerColor")).append(), ax.drawLine(Math.round((A - H) * g + F), Math.round(I * 0.1), Math.round((A - H) * g + F), Math.round(I * 0.9), au.get("medianColor")).append(), au.get("target") && (v = Math.ceil(au.get("spotRadius")), ax.drawLine(Math.round((au.get("target") - H) * g + F), Math.round(I / 2 - v), Math.round((au.get("target") - H) * g + F), Math.round(I / 2 + v), au.get("targetColor")).append(), ax.drawLine(Math.round((au.get("target") - H) * g + F - v), Math.round(I / 2), Math.round((au.get("target") - H) * g + F + v), Math.round(I / 2), au.get("targetColor")).append()), ax.render()
        }
    }), function() {
        document.namespaces&&!document.namespaces.v ? (ar.fn.sparkline.hasVML=!0, document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML")) : ar.fn.sparkline.hasVML=!1;
        var a = document.createElement("canvas");
        ar.fn.sparkline.hasCanvas=!!a.getContext&&!!a.getContext("2d")
    }(), V = ao({
        init: function(f, e, h, g) {
            this.target = f, this.id = e, this.type = h, this.args = g
        },
        append: function() {
            return this.target.appendShape(this), this
        }
    }), T = ao({
        _pxregex: /(\d+)(px)?\s*$/i,
        init: function(a, f, e) {
            if (!a) {
                return 
            }
            this.width = a, this.height = f, this.target = e, this.lastShapeId = null, e[0] && (e = e[0]), ar.data(e, "_jqs_vcanvas", this)
        },
        drawLine: function(h, g, l, k, j, i) {
            return this.drawShape([[h, g], [l, k]], j, i)
        },
        drawShape: function(f, e, h, g) {
            return this._genShape("Shape", [f, e, h, g])
        },
        drawCircle: function(h, g, l, k, j, i) {
            return this._genShape("Circle", [h, g, l, k, j, i])
        },
        drawPieSlice: function(i, h, n, m, l, k, j) {
            return this._genShape("PieSlice", [i, h, n, m, l, k, j])
        },
        drawRect: function(h, g, l, k, j, i) {
            return this._genShape("Rect", [h, g, l, k, j, i])
        },
        getElement: function() {
            return this.canvas
        },
        getLastShapeId: function() {
            return this.lastShapeId
        },
        reset: function() {
            alert("reset not implemented")
        },
        _insert: function(a, d) {
            ar(d).html(a)
        },
        _calculatePixelDims: function(a, h, g) {
            var f;
            f = this._pxregex.exec(h), f ? this.pixelHeight = f[1] : this.pixelHeight = ar(g).height(), f = this._pxregex.exec(a), f ? this.pixelWidth = f[1] : this.pixelWidth = ar(g).width()
        },
        _genShape: function(e, d) {
            var f = L++;
            return d.unshift(f), new V(this, f, e, d)
        },
        appendShape: function(b) {
            alert("appendShape not implemented")
        },
        replaceWithShape: function(d, c) {
            alert("replaceWithShape not implemented")
        },
        insertAfterShape: function(d, c) {
            alert("insertAfterShape not implemented")
        },
        removeShapeId: function(b) {
            alert("removeShapeId not implemented")
        },
        getShapeAt: function(e, d, f) {
            alert("getShapeAt not implemented")
        },
        render: function() {
            alert("render not implemented")
        }
    }), R = ao(T, {
        init: function(a, h, g, f) {
            R._super.init.call(this, a, h, g), this.canvas = document.createElement("canvas"), g[0] && (g = g[0]), ar.data(g, "_jqs_vcanvas", this), ar(this.canvas).css({
                display: "inline-block",
                width: a,
                height: h,
                verticalAlign: "top"
            }), this._insert(this.canvas, g), this._calculatePixelDims(a, h, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = f, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = undefined, ar(this.canvas).css({
                width: this.pixelWidth,
                height: this.pixelHeight
            })
        },
        _getContext: function(f, e, h) {
            var g = this.canvas.getContext("2d");
            return f !== undefined && (g.strokeStyle = f), g.lineWidth = h === undefined ? 1 : h, e !== undefined && (g.fillStyle = e), g
        },
        reset: function() {
            var b = this._getContext();
            b.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = undefined
        },
        _drawShape: function(j, i, p, o, n) {
            var m = this._getContext(p, o, n), l, k;
            m.beginPath(), m.moveTo(i[0][0] + 0.5, i[0][1] + 0.5);
            for (l = 1, k = i.length; l < k; l++) {
                m.lineTo(i[l][0] + 0.5, i[l][1] + 0.5)
            }
            p !== undefined && m.stroke(), o !== undefined && m.fill(), this.targetX !== undefined && this.targetY !== undefined && m.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = j)
        },
        _drawCircle: function(j, i, p, o, n, m, l) {
            var k = this._getContext(n, m, l);
            k.beginPath(), k.arc(i, p, o, 0, 2 * Math.PI, !1), this.targetX !== undefined && this.targetY !== undefined && k.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = j), n !== undefined && k.stroke(), m !== undefined && k.fill()
        },
        _drawPieSlice: function(r, q, p, o, n, m, l, k) {
            var j = this._getContext(l, k);
            j.beginPath(), j.moveTo(q, p), j.arc(q, p, o, n, m, !1), j.lineTo(q, p), j.closePath(), l !== undefined && j.stroke(), k && j.fill(), this.targetX !== undefined && this.targetY !== undefined && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = r)
        },
        _drawRect: function(i, h, n, m, l, k, j) {
            return this._drawShape(i, [[h, n], [h + m, n], [h + m, n + l], [h, n + l], [h, n]], k, j)
        },
        appendShape: function(b) {
            return this.shapes[b.id] = b, this.shapeseq.push(b.id), this.lastShapeId = b.id, b.id
        },
        replaceWithShape: function(f, e) {
            var h = this.shapeseq, g;
            this.shapes[e.id] = e;
            for (g = h.length; g--;) {
                h[g] == f && (h[g] = e.id)
            }
            delete this.shapes[f]
        },
        replaceWithShapes: function(i, h) {
            var n = this.shapeseq, m = {}, l, k, j;
            for (k = i.length; k--;) {
                m[i[k]]=!0
            }
            for (k = n.length; k--;) {
                l = n[k], m[l] && (n.splice(k, 1), delete this.shapes[l], j = k)
            }
            for (k = h.length; k--;) {
                n.splice(j, 0, h[k].id), this.shapes[h[k].id] = h[k]
            }
        },
        insertAfterShape: function(f, e) {
            var h = this.shapeseq, g;
            for (g = h.length; g--;) {
                if (h[g] === f) {
                    h.splice(g + 1, 0, e.id), this.shapes[e.id] = e;
                    return 
                }
            }
        },
        removeShapeId: function(e) {
            var d = this.shapeseq, f;
            for (f = d.length; f--;) {
                if (d[f] === e) {
                    d.splice(f, 1);
                    break
                }
            }
            delete this.shapes[e]
        },
        getShapeAt: function(e, d, f) {
            return this.targetX = d, this.targetY = f, this.render(), this.currentTargetShapeId
        },
        render: function() {
            var i = this.shapeseq, h = this.shapes, n = i.length, m = this._getContext(), l, k, j;
            m.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
            for (j = 0; j < n; j++) {
                l = i[j], k = h[l], this["_draw" + k.type].apply(this, k.args)
            }
            this.interact || (this.shapes = {}, this.shapeseq = [])
        }
    }), P = ao(T, {
        init: function(a, h, g) {
            var f;
            P._super.init.call(this, a, h, g), g[0] && (g = g[0]), ar.data(g, "_jqs_vcanvas", this), this.canvas = document.createElement("span"), ar(this.canvas).css({
                display: "inline-block",
                position: "relative",
                overflow: "hidden",
                width: a,
                height: h,
                margin: "0px",
                padding: "0px",
                verticalAlign: "top"
            }), this._insert(this.canvas, g), this._calculatePixelDims(a, h, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = ar(this.canvas).children()[0], this.rendered=!1, this.prerender = ""
        },
        _drawShape: function(z, y, x, w, v) {
            var u = [], t, s, r, q, p, o, n;
            for (n = 0, o = y.length; n < o; n++) {
                u[n] = "" + y[n][0] + "," + y[n][1]
            }
            return t = u.splice(0, 1), v = v === undefined ? 1 : v, s = x === undefined ? ' stroked="false" ' : ' strokeWeight="' + v + 'px" strokeColor="' + x + '" ', r = w === undefined ? ' filled="false"' : ' fillColor="' + w + '" filled="true" ', q = u[0] === u[u.length - 1] ? "x " : "", p = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + z + '" ' + s + r + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + t + " l " + u.join(", ") + " " + q + 'e"> </v:shape>', p
        },
        _drawCircle: function(t, s, r, q, p, o, n) {
            var m, l, k;
            return s -= q, r -= q, m = p === undefined ? ' stroked="false" ' : ' strokeWeight="' + n + 'px" strokeColor="' + p + '" ', l = o === undefined ? ' filled="false"' : ' fillColor="' + o + '" filled="true" ', k = '<v:oval  id="jqsshape' + t + '" ' + m + l + ' style="position:absolute;top:' + r + "px; left:" + s + "px; width:" + q * 2 + "px; height:" + q * 2 + 'px"></v:oval>', k
        },
        _drawPieSlice: function(F, E, D, C, B, A, z, y) {
            var x, w, v, u, t, s, r, q;
            if (B === A) {
                return ""
            }
            A - B === 2 * Math.PI && (B = 0, A = 2 * Math.PI), w = E + Math.round(Math.cos(B) * C), v = D + Math.round(Math.sin(B) * C), u = E + Math.round(Math.cos(A) * C), t = D + Math.round(Math.sin(A) * C);
            if (w === u && v === t) {
                if (A - B < Math.PI) {
                    return ""
                }
                w = u = E + C, v = t = D
            }
            return w === u && v === t && A - B < Math.PI ? "" : (x = [E - C, D - C, E + C, D + C, w, v, u, t], s = z === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + z + '" ', r = y === undefined ? ' filled="false"' : ' fillColor="' + y + '" filled="true" ', q = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + F + '" ' + s + r + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + E + "," + D + " wa " + x.join(", ") + ' x e"> </v:shape>', q)
        },
        _drawRect: function(i, h, n, m, l, k, j) {
            return this._drawShape(i, [[h, n], [h, n + l], [h + m, n + l], [h + m, n], [h, n]], k, j)
        },
        reset: function() {
            this.group.innerHTML = ""
        },
        appendShape: function(d) {
            var c = this["_draw" + d.type].apply(this, d.args);
            return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", c) : this.prerender += c, this.lastShapeId = d.id, d.id
        },
        replaceWithShape: function(a, h) {
            var g = ar("#jqsshape" + a), f = this["_draw" + h.type].apply(this, h.args);
            g[0].outerHTML = f
        },
        replaceWithShapes: function(a, l) {
            var k = ar("#jqsshape" + a[0]), j = "", i = l.length, h;
            for (h = 0; h < i; h++) {
                j += this["_draw" + l[h].type].apply(this, l[h].args)
            }
            k[0].outerHTML = j;
            for (h = 1; h < a.length; h++) {
                ar("#jqsshape" + a[h]).remove()
            }
        },
        insertAfterShape: function(a, h) {
            var g = ar("#jqsshape" + a), f = this["_draw" + h.type].apply(this, h.args);
            g[0].insertAdjacentHTML("afterEnd", f)
        },
        removeShapeId: function(a) {
            var d = ar("#jqsshape" + a);
            this.group.removeChild(d[0])
        },
        getShapeAt: function(f, e, h) {
            var g = f.id.substr(8);
            return g
        },
        render: function() {
            this.rendered || (this.group.innerHTML = this.prerender, this.rendered=!0)
        }
    })
});
/*! scripts/fullsize_photo_slideshow.js */
(function(b, a) {
    var c = Backbone.View.extend({
        initialize: function(d) {
            this.options = d || {};
            this.slides = this.options.slideshow_items || [];
            this.root = b(this.options.slideshow_container) || b("#rad_slideshow"), this.interval = this.options.interval || 3000, this.display_badge = this.options.display_badge || false, this.display_like_and_reblog = this.options.display_like_and_reblog || false, this.current_slide = false;
            this.next_slide = false;
            this.count = false;
            if (!this.slides.length) {
                return 
            }
            this.start_slideshow()
        },
        create_slide: function() {
            var d, e, h, g, f;
            d = b('<div class="slide" />');
            h = b('<a class="source" />');
            if (this.display_badge) {
                e = b('<div class="radar_badge" />');
                d.append(e)
            }
            if (this.display_like_and_reblog) {
                g = b('<a class="reblog reblog_button" />');
                f = b('<a class="like" />');
                d.append(g);
                d.append(f)
            }
            d.append(h);
            return d
        },
        update_slide: function(f, d) {
            if (!d) {
                return false
            }
            var i = f.find(".source"), g = f.find(".like"), h = f.find(".reblog"), e = f.find(".radar_badge");
            if (typeof(d.photo_url) !== "undefined") {
                f.css({
                    "background-image": "url(" + d.photo_url + ")"
                })
            }
            if (d.source_url !== undefined) {
                i.attr("href", d.source_url);
                i.attr("target", "_new");
                if (d.source_label !== undefined) {
                    i.html(d.source_label || "Source")
                }
            }
            if (this.display_badge) {
                e.addClass(d.radar_badge_class || "radar_badge")
            }
            if (this.display_like_and_reblog) {
                if (d.like_url !== undefined) {
                    g.attr("href", d.like_url)
                }
                if (d.like_url === "#like") {
                    g.off("click.NerdSlideshow").on("click.NerdSlideshow", function(j) {
                        j.preventDefault();
                        var k = (!d.like_state) ? "like": "unlike";
                        Tumblr[k]({
                            id: d.post_id,
                            key: d.reblog_key
                        }, {
                            complete: function() {
                                b("#rad_slideshow_like_" + d.post_id).toggleClass("red");
                                d.like_state=!d.like_state
                            }
                        })
                    })
                }
                g.attr({
                    id: "rad_slideshow_like_" + d.post_id,
                    "class": (d.like_state === true) ? "like red like_button": "like like_button"
                }).html(d.like_label || "Like");
                if (d.reblog_url !== undefined) {
                    h.html(d.reblog_label || "Reblog");
                    h.attr("href", d.reblog_url)
                }
            }
        },
        transition: function() {
            b(this.current_slide).fadeOut(_.bind(function(f) {
                if (this.next_slide) {
                    this.next_slide.css({
                        zIndex: 1
                    })
                }
                if (this.current_slide) {
                    this.current_slide.css({
                        zIndex: 0
                    }).show()
                }
                var d = this.next_slide;
                this.next_slide = this.current_slide;
                this.current_slide = d;
                var e = this.slides[count%this.slides.length];
                this.update_slide(this.next_slide, e);
                count++;
                setTimeout(_.bind(this.transition, this), this.interval)
            }, this))
        },
        start_slideshow: function() {
            this.current_slide = this.create_slide();
            this.root.append(this.current_slide);
            this.update_slide(this.current_slide, this.slides[0]);
            if (this.slides.length > 1) {
                this.next_slide = this.create_slide();
                this.root.append(this.next_slide);
                this.update_slide(this.next_slide, this.slides[1]);
                count = 2;
                this.transition()
            }
        }
    });
    a.NerdSlideshow = c
})(jQuery, Tumblr);
/*! scripts/radar.js */
(function(d, e, b) {
    var c = window.l10n_str || {};
    var a = e.View.extend({
        el: "#tumblr_radar",
        events: {
            "click a": "run_click",
            "click .notes_outer_container.popover .follow": "notes_popover_follow",
            "click .radar_footer .follow": "toggleFollow",
            "click .radar_controls_buttons .reblog": "reblog",
            "click .radar_controls_buttons .like:not(.liked)": "like",
            "click .radar_controls_buttons .liked": "unlike"
        },
        initialize: function() {
            this.post_id = this.$el.attr("data-post-id");
            this.post_root_id = this.$el.attr("data-root-id");
            this.form_key = d("#tumblr_form_key").attr("content");
            this.is_premium = this.$el.hasClass("premium");
            this.placement_id = this.$el.attr("data-placement-id");
            this.pt = this.$el.attr("data-pt");
            this.$followButton = this.$(".follow");
            this.version = this.$el.hasClass("radar_v2") ? "v2" : "v1";
            this.is_new_radar_design = this.$el.hasClass("new_radar_design");
            this.postModel = Tumblr.postsView.createPostModelFromEl(this.$el);
            Tumblr.postsView.collection.add(this.postModel);
            this.tumblelogModel = this.postModel.tumblelog;
            this.listenTo(this.tumblelogModel, "change:following", this.renderFollow);
            if (this.version === "v2" && this.$el.hasClass("radar_type_video")) {
                var f = this.$el.find(".thumbnail_anchor");
                var k = d(f).data("thumbnail-urls");
                var j = [];
                for (var h = 0; h < k.length; h++) {
                    j.push({
                        photo_url: k[h]
                    })
                }
                this.slideshow = new Tumblr.NerdSlideshow({
                    slideshow_container: f,
                    slideshow_items: j,
                    display_badge: false,
                    display_like_and_reblog: false
                })
            } else {
                if (this.version === "v2" && this.$el.find(".photoset").length > 0) {
                    var g = this.$el.find(".photoset");
                    var m = d(g).data("thumbnail-urls");
                    this.slideshow = new Tumblr.RadarPhotosetSlideshow({
                        container: g,
                        image_urls: m
                    })
                }
            }
            var l = new Tumblr.Notes({
                el: this.el
            })
        },
        renderFollow: function(f, g) {
            if (f._previousAttributes.following == null || f._previousAttributes.following === g) {
                return 
            }
            if (this.version === "v2") {
                this.$followButton[g ? "hide": "show"]()
            } else {
                if (this.version === "v1") {
                    this.$followButton.toggleClass("followed follow_poof", g)
                }
            }
            this.$(".radar_footer").toggleClass("has_follow_button", !g)
        },
        toggleFollow: function() {
            var f = this;
            var g=!this.tumblelogModel.get("following");
            this.tumblelogModel.save_following({
                following: g
            }, {
                placement_id: this.placement_id,
                pt: this.pt,
                source: g ? "FOLLOW_SOURCE_RADAR": "UNFOLLOW_SOURCE_RADAR"
            }).done(function() {
                if (Tumblr.CapturePremiumRadar && f.placement_id) {
                    Tumblr.CapturePremiumRadar.track_follow(g)
                } else {
                    if (Tumblr.CaptureRadar) {
                        Tumblr.CaptureRadar.track_follow(g)
                    }
                }
            }).fail(function() {
                Tumblr.Dialog.alert(c.ajax_error)
            });
            return false
        },
        like: function(h) {
            h.stopPropagation();
            h.preventDefault();
            var f = d(h.currentTarget);
            f.addClass("liked");
            this.show_heart_poof(f.parent(), true);
            this.update_note_count(true);
            var g = this;
            Tumblr.like({
                id: this.post_id,
                root_id: this.post_root_id,
                key: f.attr("data-reblog-key"),
                placement_id: this.placement_id,
                pt: this.pt,
                source: "LIKE_SOURCE_RADAR"
            }, {
                success: function() {
                    if (Tumblr.CapturePremiumRadar && g.placement_id) {
                        Tumblr.CapturePremiumRadar.track_like(true)
                    } else {
                        if (Tumblr.CaptureRadar) {
                            Tumblr.CaptureRadar.track_like(true)
                        }
                    }
                },
                error: function() {
                    f.removeClass("liked");
                    Tumblr.Dialog.alert(c.ajax_error)
                }
            })
        },
        unlike: function(h) {
            h.stopPropagation();
            h.preventDefault();
            var f = d(h.currentTarget);
            f.removeClass("liked");
            this.show_heart_poof(f.parent(), false);
            this.update_note_count(false);
            var g = this;
            Tumblr.unlike({
                id: this.post_id,
                key: f.attr("data-reblog-key"),
                placement_id: this.placement_id,
                source: "UNLIKE_SOURCE_RADAR"
            }, {
                success: function() {
                    if (Tumblr.CapturePremiumRadar && g.placement_id) {
                        Tumblr.CapturePremiumRadar.track_like(false)
                    } else {
                        if (Tumblr.CaptureRadar) {
                            Tumblr.CaptureRadar.track_like(false)
                        }
                    }
                },
                error: function() {
                    f.addClass("liked");
                    Tumblr.Dialog.alert(c.ajax_error)
                }
            })
        },
        show_heart_poof: function(g, h) {
            var f = d('<div class="post_animated_heart post_poof"><span class="heart_left"></span><span class="heart_right"></span></div>').toggleClass("unliked", !h);
            g.append(f);
            setTimeout(function() {
                f.fadeOut(200, function() {
                    f.remove()
                })
            }, 300)
        },
        reblog: function(h) {
            var f = d(h.currentTarget);
            if (h.altKey) {
                h.stopPropagation();
                h.preventDefault();
                if (f.hasClass("reblogged")) {
                    return 
                }
                f.addClass("reblogged");
                var g = this;
                d.ajax({
                    url: "/fast_reblog",
                    type: "post",
                    data: {
                        reblog_key: f.attr("data-reblog-key"),
                        reblog_post_id: f.attr("data-reblog-id"),
                        form_key: this.form_key,
                        pt: this.pt
                    },
                    success: function() {
                        if (Tumblr.CapturePremiumRadar && g.placement_id) {
                            Tumblr.CapturePremiumRadar.track_fast_reblog(f, h)
                        } else {
                            if (Tumblr.CaptureRadar) {
                                Tumblr.CaptureRadar.track_fast_reblog(f, h)
                            }
                        }
                    },
                    error: function() {
                        f.removeClass("reblogged");
                        Tumblr.Dialog.alert(c.ajax_error)
                    }
                })
            } else {
                if (Tumblr.Flags.bool("prima_post_forms")) {
                    h.stopPropagation();
                    h.preventDefault();
                    Tumblr.Events.trigger("postForms:reblog", {
                        reblogKey: f.attr("data-reblog-key"),
                        reblogId: f.attr("data-reblog-id"),
                        pt: this.pt
                    })
                }
            }
        },
        notes_popover_follow: function(h) {
            var g = d(h.currentTarget);
            var f = g.closest(".note");
            var i = f.data("tumblelog");
            f.addClass("is_following");
            Tumblr.follow({
                tumblelog: i
            })
        },
        update_note_count: function(g) {
            var f = this.$el.find(".note_link_current"), h;
            if (g) {
                h = f.data("more");
                if (f.data("more") !== f.text()) {
                    f.data("less", f.text())
                }
                this.$el.removeClass("no_notes")
            } else {
                h = f.data("less");
                if (!h ||!h.length) {
                    this.$el.addClass("no_notes")
                }
            }
            f.text(h);
            f.attr("title", h)
        },
        run_click: function(h) {
            var f = h.currentTarget.href;
            var g = d(h.currentTarget);
            if (g.is(".no_pop, .photoset_photo, .photo_exif_flipper, .fan_mail_read_more, .follow, .like, .reblog")) {
                return 
            }
            if (window.self !== window.top && g.is(".post_control.reblog, .post_control.edit")) {
                f = f.replace(/\?.*/, "")
            } else {
                if (g.closest(".no_pop, .post_controls, #new_post, .controls, .user_menu_list, form, .flash_notification, .more_notes_link").length > 0) {
                    return 
                }
                if (!f || f === "#") {
                    return 
                }
            }
            if (Tumblr.TumblelogDrawer&&!this.is_premium && Tumblr.Prima.Url.isTumblelogUrl(f)) {
                return 
            } else {
                if (Tumblr.Prima.Url.hasAllowedProtocol(f)) {
                    window.open(f)
                }
                h.preventDefault();
                h.stopPropagation()
            }
        }
    });
    b.Radar = a
})(jQuery, Backbone, Tumblr);
jQuery(document).ready(function(a) {
    var b = a("#tumblr_radar");
    if (b.length) {
        Tumblr.radar = new Tumblr.Radar({
            el: b
        })
    }
});
/*! scripts/ads_impression_tracking.js */
(function(c, a) {
    var b = Tumblr.Utils.exceptions;
    a.ImpressionTracking = {
        initialize: function() {
            this.tracking = [];
            this.setup();
            Tumblr.Events.on("DOMEventor:updateRect", this.check_for_ads, this)
        },
        setup: function() {
            this.check_for_ads();
            Tumblr.Events.on("DOMEventor:flatscroll DOMEventor:flatresize", this.track, this);
            this.track()
        },
        register: function(d) {
            _.each(c(d + ":not(.mb_tracked)"), function(f) {
                var e = c(f);
                e.addClass("mb_tracked");
                this.tracking.push({
                    was_below: null,
                    el: f,
                    $el: e
                })
            }, this)
        },
        track: function() {
            var f = Tumblr.Prima.DOMEventor.rect();
            var h = f.windowScrollTop;
            var g = h + f.windowHeight;
            var e = Tumblr.Prima.DOMEventor.lastRect().windowScrollTop;
            var d = ((e || 0) <= h);
            _.each(this.tracking, function(j) {
                if (j.$el.data("yx") ||!j.$el.is(":visible")) {
                    return 
                }
                var m = false;
                var k = j.el.offsetHeight;
                var l = j.$el.offset().top + k;
                var i = j.$el.offset().top + (k * 0.5);
                if (j.was_below === null) {
                    j.was_below = h > l
                }
                if (d) {
                    m = i < g
                } else {
                    if (j.was_below) {
                        m = i > h
                    }
                }
                if (m) {
                    this.log_impression(j.$el)
                }
            }, this)
        },
        check_for_ads: function() {
            this.register("#tumblr_radar.premium");
            this.register(".post.sponsored_post");
            this.register(".post.pt, .remnant_ad.pt");
            this.register(".logo_dot.pt")
        },
        log_impression: function(d) {
            if (!(d instanceof jQuery && d.length)) {
                b(new Error("Attempted to log ad impression on undefined element"));
                return 
            }
            if (d.data("yx")) {
                return 
            } else {
                d.data("yx", 1)
            }
            var k = d.data("placementId");
            var f = d.data("mb-impression-url");
            var j = d.hasClass("radar");
            var g = d.data("pt");
            var i = false;
            if ((/^mb_[0-9]{1,20}$/).test(k)) {
                if (f) {
                    this._send_beacon(f)
                }
                i = "622"
            } else {
                if (k) {
                    i = j ? "641" : "640"
                }
            }
            var h = d.data("impression-url");
            if (h) {
                this._send_beacon(h)
            }
            try {
                c.ajax({
                    url: "/svc/log/yx",
                    type: "POST",
                    data: {
                        type: i,
                        post_id: d.data("postId"),
                        placement_id: k,
                        beacon: f,
                        pt: JSON.stringify(g)
                    },
                    with_form_key: true
                })
            } catch (e) {}
        },
        _send_beacon: function(d) {
            var e = document.createElement("img");
            e.src = d
        }
    }
})(jQuery, Tumblr || {});
jQuery(document).ready(function() {
    Tumblr.ImpressionTracking.initialize()
});
/*! scripts/tumblr/porn.js */
(function(a) {
    a.porn = function() {
        var d = document.doctype.nextSibling;
        var b = d.nodeValue.split("\n").length - 2;
        (function c() {
            var e = d.nodeValue.split("\n");
            e.splice(e.length - 2, 0, e.splice(1, 1));
            d.nodeValue = e.join("\n");
            (--b) && setTimeout(c, 100)
        })()
    }
})(Tumblr);
/*! scripts/tumblr/utils/post_tags.js */
Tumblr.Utils || (Tumblr.Utils = {});
(function(b, a) {
    var c = {
        tag_url: function(d) {
            var e = encodeURIComponent(d);
            e = e.replace("+", "-");
            e = e.replace("%20", "-");
            e = e.replace("_", "-");
            return "/tagged/" + e
        }
    };
    a.PostTags = c
})(jQuery, Tumblr.Utils);
/*! scripts/dashboard.js */

