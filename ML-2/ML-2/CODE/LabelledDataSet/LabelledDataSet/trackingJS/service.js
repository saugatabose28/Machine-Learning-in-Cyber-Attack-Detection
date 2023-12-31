(function(e, t) {
    sumo.define("plugins/css", [], function() {
        if (typeof window == "undefined")
            return {
                load: function(e, t, n) {
                    n()
                }
            };
        var e = document.getElementsByTagName("head")[0], t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0, n=!1, r=!0;
        t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] ? r=!1 : t[4] && (n = parseInt(t[4]) < 18);
        var i = {};
        i.pluginBuilder = "./css-builder";
        var s, o = function() {
            s = document.createElement("style"), e.appendChild(s)
        }, u = function(e, t) {
            o();
            var n = s.styleSheet || s.sheet;
            if (n && n.addImport)
                n.addImport(e), s.onload = t;
            else {
                s.textContent = '@import "' + e + '";';
                var r = setInterval(function() {
                    try {
                        s.sheet.cssRules, clearInterval(r), t()
                    } catch (e) {}
                }, 10)
            }
        }, a = function(t, n) {
            var i = document.createElement("link");
            i.type = "text/css", i.rel = "stylesheet";
            if (r)
                i.onload = function() {
                    i.onload = function() {}, setTimeout(n, 7)
                };
            else 
                var s = setInterval(function() {
                    for (var e = 0; e < document.styleSheets.length; e++) {
                        var t = document.styleSheets[e];
                        if (t.href == i.href)
                            return clearInterval(s), n()
                    }
                }, 10);
            i.href = t, e.appendChild(i)
        };
        return i.normalize = function(e, t) {
            return e.substr(e.length - 4, 4) == ".css" && (e = e.substr(0, e.length - 4)), t(e)
        }, i.load = function(e, t, r, i) {
            (n ? u : a)(t.toUrl(e + ".css"), r)
        }, i
    }), function() {
        var n;
        n = function(e) {
            var t, n;
            return t=!1, e(function() {
                var r;
                return r = (document.body || document.documentElement).style, t = r.animation !== void 0 || r.WebkitAnimation !== void 0 || r.MozAnimation !== void 0 || r.MsAnimation !== void 0 || r.OAnimation !== void 0, e(window).bind("resize.vex", function(e) {
                    return n.resize()
                }), e(window).bind("keyup.vex", function(e) {
                    if (e.keyCode === 27)
                        return n.closeByEscape()
                })
            }), n = {
                globalID: 1,
                animationEndEvent: "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",
                baseClassNames: {
                    vex: "sumome-vex",
                    content: "sumome-vex-content",
                    overlay: "sumome-vex-overlay",
                    close: "sumome-vex-close",
                    closing: "sumome-vex-closing",
                    open: "sumome-vex-open"
                },
                defaultOptions: {
                    content: "",
                    showCloseButton: !0,
                    customCloseButton: !1,
                    escapeButtonCloses: !0,
                    overlayClosesOnClick: !0,
                    appendLocation: "body",
                    className: "",
                    css: {},
                    overlayClassName: "",
                    overlayCSS: {},
                    contentClassName: "",
                    contentCSS: {},
                    closeClassName: "",
                    closeCSS: {}
                },
                open: function(t) {
                    return t = e.extend({}, n.defaultOptions, t), t.id = n.globalID, n.globalID += 1, t.$vex = e("<div>").addClass(n.baseClassNames.vex).addClass(t.className).css(t.css).data({
                        vex: t
                    }), t.$vexOverlay = e("<div>").addClass(n.baseClassNames.overlay).addClass(t.overlayClassName).css(t.overlayCSS).data({
                        vex: t
                    }), t.overlayClosesOnClick && t.$vexOverlay.bind("click.vex", function(t) {
                        if (t.target !== this)
                            return;
                        return n.close(e(this).data().vex.id)
                    }), t.$vex.append(t.$vexOverlay), t.$vexContent = e("<div>").addClass(n.baseClassNames.content).addClass(t.contentClassName).css(t.contentCSS).append(t.content).data({
                        vex: t
                    }), t.$vex.append(t.$vexContent), t.customCloseButton ? t.showCloseButton && (t.$closeButton = t.$vexContent.find("." + t.closeClassName).eq(0).data({
                        vex: t
                    }).bind("click.vex", function() {
                        return n.close(e(this).data().vex.id)
                    })) : t.showCloseButton && (t.$closeButton = e("<div>").addClass(n.baseClassNames.close).addClass(t.closeClassName).css(t.closeCSS).data({
                        vex: t
                    }).bind("click.vex", function() {
                        return n.close(e(this).data().vex.id)
                    }), t.$vexContent.append(t.$closeButton)), e(t.appendLocation).append(t.$vex), n.setupBodyClassName(t.$vex), t.afterOpen && t.afterOpen(t.$vexContent, t), setTimeout(function() {
                        return t.$vexContent.trigger("vexOpen", t)
                    }, 0), t.$vexContent
                },
                getAllVexes: function() {
                    return e("." + n.baseClassNames.vex + ':not(".' + n.baseClassNames.closing + '") .' + n.baseClassNames.content)
                },
                getVexByID: function(t) {
                    return n.getAllVexes().filter(function() {
                        return e(this).data().vex.id === t
                    })
                },
                close: function(e) {
                    var t;
                    if (!e) {
                        t = n.getAllVexes().last();
                        if (!t.length)
                            return !1;
                        e = t.data().vex.id
                    }
                    return n.closeByID(e)
                },
                closeAll: function() {
                    var t;
                    return t = n.getAllVexes().map(function() {
                        return e(this).data().vex.id
                    }).toArray(), (t != null?!t.length : !void 0)?!1 : (e.each(t.reverse(), function(e, t) {
                        return n.closeByID(t)
                    }), !0)
                },
                closeByID: function(r) {
                    var i, s, o, u, a;
                    s = n.getVexByID(r);
                    if (!s.length)
                        return;
                    return i = s.data().vex.$vex, a = e.extend({}, s.data().vex), o = function() {
                        if (a.beforeClose)
                            return a.beforeClose(s, a)
                    }, u = function() {
                        s.trigger("vexClose", a), i.remove();
                        if (a.afterClose)
                            return a.afterClose(s, a)
                    }, t ? (o(), i.unbind(n.animationEndEvent).bind(n.animationEndEvent, function() {
                        return u()
                    }).addClass(n.baseClassNames.closing)) : (o(), u()), !0
                },
                resizeByID: function(t) {
                    var r, i, s, o, u;
                    i = n.getVexByID(t);
                    if (!i.length)
                        return;
                    return r = i.data().vex.$vex, u = e.extend({}, i.data().vex), i.trigger("vexResize", u), !0
                },
                resize: function() {
                    var t, r, i;
                    return i = n.getAllVexes().map(function() {
                        return e(this).data().vex.id
                    }).toArray(), (i != null?!i.length : !void 0)?!1 : (r = Math.max.apply(Math, i), t = n.getVexByID(r), n.resizeByID(r))
                },
                closeByEscape: function() {
                    var t, r, i;
                    return i = n.getAllVexes().map(function() {
                        return e(this).data().vex.id
                    }).toArray(), (i != null?!i.length : !void 0)?!1 : (r = Math.max.apply(Math, i), t = n.getVexByID(r), t.data().vex.escapeButtonCloses!==!0?!1 : n.closeByID(r))
                },
                setupBodyClassName: function(t) {
                    return t.bind("vexOpen.vex", function() {
                        return e("body").addClass(n.baseClassNames.open)
                    }).bind("vexClose.vex", function() {
                        if (!n.getAllVexes().length)
                            return e("body").removeClass(n.baseClassNames.open)
                    })
                },
                hideLoading: function() {
                    return e(".vex-loading-spinner").remove()
                },
                showLoading: function() {
                    return n.hideLoading(), e("body").append('<div class="vex-loading-spinner ' + n.defaultOptions.className + '"></div>')
                }
            }
        }, typeof sumo.define == "function" && sumo.define.amd ? sumo.define("vex", ["jquery"], n) : typeof e == "object" ? t.exports = n(require("jquery")) : window.vex = n(jQuery)
    }.call(this), function(e) {
        typeof sumo.define == "function" && sumo.define.amd ? sumo.define("jquery.cookie", ["jquery"], e) : e(jQuery)
    }(function(e) {
        function n(e) {
            return u.raw ? e : encodeURIComponent(e)
        }
        function r(e) {
            return u.raw ? e : decodeURIComponent(e)
        }
        function i(e) {
            return n(u.json ? JSON.stringify(e) : String(e))
        }
        function s(e) {
            e.indexOf('"') === 0 && (e = e.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                e = decodeURIComponent(e.replace(t, " "))
            } catch (n) {
                return 
            }
            try {
                return u.json ? JSON.parse(e) : e
            } catch (n) {}
        }
        function o(t, n) {
            var r = u.raw ? t: s(t);
            return e.isFunction(n) ? n(r) : r
        }
        var t = /\+/g, u = e.cookie = function(t, s, a) {
            if (s !== undefined&&!e.isFunction(s)) {
                a = e.extend({}, u.defaults, a);
                if (typeof a.expires == "number") {
                    var f = a.expires, l = a.expires = new Date;
                    l.setDate(l.getDate() + f)
                }
                return document.cookie = [n(t), "=", i(s), a.expires ? "; expires=" + a.expires.toUTCString(): "", a.path ? "; path=" + a.path: "", a.domain ? "; domain=" + a.domain: "", a.secure ? "; secure": ""].join("")
            }
            var c = t ? undefined: {}, h = document.cookie ? document.cookie.split("; "): [];
            for (var p = 0, d = h.length; p < d; p++) {
                var v = h[p].split("="), m = r(v.shift()), g = v.join("=");
                if (t && t === m) {
                    c = o(g, s);
                    break
                }
                !t && (g = o(g)) !== undefined && (c[m] = g)
            }
            return c
        };
        u.defaults = {}, e.removeCookie = function(t, n) {
            return e.cookie(t) !== undefined ? (e.cookie(t, "", e.extend({}, n, {
                expires: - 1
            })), !0) : !1
        }
    }), function() {
        var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], t = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, n = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, r = typeof location != "undefined" && location.href, i = r && location.protocol && location.protocol.replace(/\:/, ""), s = r && location.hostname, o = r && (location.port || void 0), u = [];
        sumo.define("plugins/text", [], function() {
            var a, f, l;
            return typeof window != "undefined" && window.navigator && window.document ? f = function(e, t) {
                var n = a.createXhr();
                n.open("GET", e, !0), n.onreadystatechange = function() {
                    n.readyState === 4 && t(n.responseText)
                }, n.send(null)
            } : typeof process != "undefined" && process.versions && process.versions.node ? (l = require.nodeRequire("fs"), f = function(e, t) {
                t(l.readFileSync(e, "utf8"))
            }) : typeof Packages != "undefined" && (f = function(e, t) {
                var n = new java.io.File(e), r = java.lang.System.getProperty("line.separator"), n = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(n), "utf-8")), i, s, o = "";
                try {
                    i = new java.lang.StringBuffer, (s = n.readLine()) && s.length() && s.charAt(0) === 65279 && (s = s.substring(1));
                    for (i.append(s); (s = n.readLine()) !== null;)
                        i.append(r), i.append(s);
                    o = String(i.toString())
                } finally {
                    n.close()
                }
                t(o)
            }), a = {
                version: "1.0.2",
                strip: function(e) {
                    if (e) {
                        var e = e.replace(t, ""), r = e.match(n);
                        r && (e = r[1])
                    } else 
                        e = "";
                    return e
                },
                jsEscape: function(e) {
                    return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
                },
                createXhr: function() {
                    var t, n, r;
                    if (typeof XMLHttpRequest != "undefined")
                        return new XMLHttpRequest;
                    for (n = 0; n < 3; n++) {
                        r = e[n];
                        try {
                            t = new ActiveXObject(r)
                        } catch (i) {}
                        if (t) {
                            e = [r];
                            break
                        }
                    }
                    if (!t)
                        throw Error("createXhr(): XMLHttpRequest not available");
                    return t
                },
                get: f,
                parseName: function(e) {
                    var t=!1, n = e.indexOf("."), r = e.substring(0, n), e = e.substring(n + 1, e.length), n = e.indexOf("!");
                    return n!==-1 && (t = e.substring(n + 1, e.length), t = t === "strip", e = e.substring(0, n)), {
                        moduleName: r,
                        ext: e,
                        strip: t
                    }
                },
                xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
                useXhr: function(e, t, n, r) {
                    var i = a.xdRegExp.exec(e), s;
                    return i ? (e = i[2], i = i[3], i = i.split(":"), s = i[1], i = i[0], (!e || e === t) && (!i || i === n) && (!s&&!i || s === r)) : !0
                },
                finishLoad: function(e, t, n, r, i) {
                    n = t ? a.strip(n) : n, i.isBuild && (u[e] = n), r(n)
                },
                load: function(e, t, n, u) {
                    if (u.isBuild&&!u.inlineText)
                        n();
                    else {
                        var f = a.parseName(e), l = f.moduleName + "." + f.ext, c = t.toUrl(l), h = u && u.text && u.text.useXhr || a.useXhr;
                        !r || h(c, i, s, o) ? a.get(c, function(t) {
                            a.finishLoad(e, f.strip, t, n, u)
                        }) : t([l], function(e) {
                            a.finishLoad(f.moduleName + "." + f.ext, f.strip, e, n, u)
                        })
                    }
                },
                write: function(e, t, n) {
                    if (t in u) {
                        var r = a.jsEscape(u[t]);
                        n.asModule(e + "!" + t, "define(function () { return '" + r + "';});\n")
                    }
                },
                writeFile: function(e, t, n, r, i) {
                    var t = a.parseName(t), s = t.moduleName + "." + t.ext, o = n.toUrl(t.moduleName + "." + t.ext) + ".js";
                    a.load(s, n, function() {
                        var t = function(e) {
                            return r(o, e)
                        };
                        t.asModule = function(e, t) {
                            return r.asModule(e, o, t)
                        }, a.write(e, s, t, i)
                    }, i)
                }
            }
        })
    }(), sumo.define("plugins/text!8dc42610-ae42-4164-90b1-573478b46574/templates/email_popup.html", [], function() {
        return '<div class="sumome-popup-form">\n  <h2 class="sumome-popup-heading"></h2>\n  <div class="sumome-popup-text"></div>\n  <div class="sumome-popup-error"></div>\n  <input class="sumome-popup-input" type="text" value="" autofocus name="listbuilder_email_address" id="listbuilder_email_address" placeholder="Enter your email address" />\n  <button class="sumome-popup-button sumome-popup-button-bg sumome-popup-button-text" type="submit">Subscribe Me</button>\n  <button class="sumome-popup-continue sumome-popup-continue-bg sumome-popup-continue-text" type="submit" style="display:none;">Continue</button>\n</div>'
    }), sumo.define("jquery.style", ["jquery"], function(e) {
        if (e.fn.style)
            return;
        var t = function(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, n=!!CSSStyleDeclaration.prototype.getPropertyValue;
        n || (CSSStyleDeclaration.prototype.getPropertyValue = function(e) {
            return this.getAttribute(e)
        }, CSSStyleDeclaration.prototype.setProperty = function(e, n, r) {
            this.setAttribute(e, n);
            var r = typeof r != "undefined" ? r: "";
            if (r != "") {
                var i = new RegExp(t(e) + "\\s*:\\s*" + t(n) + "(\\s*;)?", "gmi");
                this.cssText = this.cssText.replace(i, e + ": " + n + " !" + r + ";")
            }
        }, CSSStyleDeclaration.prototype.removeProperty = function(e) {
            return this.removeAttribute(e)
        }, CSSStyleDeclaration.prototype.getPropertyPriority = function(e) {
            var n = new RegExp(t(e) + "\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?", "gmi");
            return n.test(this.cssText) ? "important" : ""
        }), e.fn.style = function(e, t, n) {
            var r = this.get(0);
            if (typeof r == "undefined")
                return this;
            var i = this.get(0).style;
            return typeof e != "undefined" ? typeof t != "undefined" ? (n = typeof n != "undefined" ? n : "", i.setProperty(e, t, n), this) : i.getPropertyValue(e) : i
        }
    }), sumo.define("8dc42610-ae42-4164-90b1-573478b46574/popup", ["jquery", "vex", "jquery.cookie", "plugins/text!8dc42610-ae42-4164-90b1-573478b46574/templates/email_popup.html", "jquery.style"], function(e, t, n, r) {
        var i = {
            mx: null,
            my: null,
            lmx: - 1,
            lmy: - 1,
            travel: null,
            $modal: null,
            api: null,
            cookieName: "__smListBuilderShown",
            subCookieName: "__smSubscribed",
            hasMouse: !1,
            scrollTop: 0,
            hasShown: !1,
            continueMode: !1,
            settings: {
                contentWidth: "small",
                deviceMode: "all",
                popupMode: "smart",
                beforeShowDelay: 5,
                cookieLifetime: 1,
                cookieLifetimeInterval: "month",
                headingText: "Join Our Newsletter",
                blurbText: "Signup today for free and be the first to get notified on new updates.",
                buttonText: "Subscribe Now",
                continueButtonText: "Continue",
                placeholderText: "Enter your email address",
                advancedForm: null,
                excludeUrls: [],
                template: null,
                templateHtml: null,
                yield: !0
            },
            load: function() {
                var t = e.cookie(this.subCookieName) && e.cookie(this.subCookieName) === "true" || e.cookie(this.cookieName) && e.cookie(this.cookieName) === "true";
                t || e.ajax({
                    type: "POST",
                    dataType: "json",
                    url: this.api.properties.sumoUrl + "/apps/listbuilder/load",
                    data: {
                        site_id: this.api.properties.siteId
                    },
                    xhrFields: {
                        withCredentials: !1
                    },
                    crossDomain: !0
                }).done(e.proxy(function(e) {
                    if (e && "success"in e && e.success) {
                        this.settings.popupMode = e.popup_mode ? e.popup_mode : "smart", this.settings.beforeShowDelay = e.before_show_delay, this.settings.cookieLifetime = e.cookie_lifetime, this.settings.cookieLifetimeInterval = e.cookie_lifetime_interval, this.settings.headingText = e.heading_text, this.settings.blurbText = e.blurb_text, this.settings.continueHeadingText = e.continue_heading_text, this.settings.continueBlurbText = e.continue_blurb_text, this.settings.buttonText = e.button_text, this.settings.continueButtonText = e.continue_button_text, this.settings.placeholderText = e.placeholder_text, this.settings.advancedForm = e.advanced_form, this.settings.excludeUrls = e.exclude_urls, this.settings.contentWidth = e.content_width, this.settings.deviceMode = e.device_mode, this.settings.headingColor = e.heading_color, this.settings.textColor = e.text_color, this.settings.modalColor = e.modal_color, this.settings.buttonForeColor = e.button_fore_color, this.settings.buttonBackColor = e.button_back_color, this.settings.subscribeRedirectUrl = e.subscribe_redirect_url, this.settings.subscribeRedirectMethod = e.subscribe_redirect_method, this.settings.subscribeRedirectVariable = e.subscribe_redirect_variable, this.settings.template = e.listBuilderTemplate ? e.listBuilderTemplate.id : null, this.settings.templateHtml = e.listBuilderTemplate ? e.listBuilderTemplate.html : null, this.settings.templateSlug = e.listBuilderTemplate ? e.listBuilderTemplate.slug : null, this.settings.mediaId = e.media_id ? e.media_id : null, this.settings.yield = e.yield;
                        var t=!1, n = window.location.toString().toLowerCase(), r = window.location.pathname.toString().toLowerCase();
                        r.length > 1 && r[r.length - 1] == "/" && (r = r.substring(0, r.length - 1));
                        for (var i = 0; i < this.settings.excludeUrls.length&&!t; i++) {
                            var s = this.settings.excludeUrls[i].toLowerCase();
                            s.length > 1 && s[s.length - 1] == "/" && (s = s.substring(0, s.length - 1)), s === "/" ? t = r == s : s.indexOf("exact:") == 0 ? t = n == s.substring(6) || r == s.substring(6) : t = n.indexOf(s)!==-1
                        }
                        t || (this.settings.popupMode === "smart" ? this.showOnExit() : this.showOnStartup(this.settings.beforeShowDelay))
                    }
                }, this))
            },
            shadeColor: function(e, t) {
                e = e.toString();
                var n = parseInt(e.slice(1), 16), r = Math.round(2.55 * t), i = (n>>16) + r, s = (n>>8 & 255) + r, o = (n & 255) + r;
                return "#" + (16777216 + (i < 255 ? i < 1 ? 0 : i : 255) * 65536 + (s < 255 ? s < 1 ? 0 : s : 255) * 256 + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1)
            },
            show: function() {
                if (this.hasShown || this.settings.yield && this.api.properties.yield)
                    return;
                this.hasShown=!0;
                var n = Math.min(window.screen.availWidth || e(window).width(), e(window).width());
                if (this.settings.deviceMode == "mobile" && n > 480)
                    return;
                if (this.settings.deviceMode == "desktop" && n <= 480)
                    return;
                e(document).off(".listbuilder"), e(window).off(".listbuilder");
                if (this.settings.cookieLifetime!==-1) {
                    var i = new Date;
                    switch (this.settings.cookieLifetimeInterval) {
                    case"minute":
                        i.setMinutes(i.getMinutes() + this.settings.cookieLifetime);
                        break;
                    case"hour":
                        i.setHours(i.getHours() + this.settings.cookieLifetime);
                        break;
                    case"day":
                        i.setDate(i.getDate() + this.settings.cookieLifetime);
                        break;
                    case"month":
                        i.setMonth(i.getMonth() + this.settings.cookieLifetime);
                        break;
                    case"year":
                        i.setFullYear(i.getFullYear() + this.settings.cookieLifetime)
                    }
                    e.cookie(this.cookieName, !0, {
                        expires: i,
                        path: "/"
                    })
                }
                if (this.settings.advancedForm)
                    this.$modal = t.open({
                        content: this.settings.advancedForm,
                        overlayClosesOnClick: !1,
                        className: "sumome-popup sumome-popup-" + this.settings.contentWidth,
                        overlayClassName: "sumome-popup-overlay",
                        contentClassName: "sumome-popup-content sumome-popup-content-default sumome-popup-content-advanced",
                        closeClassName: "sumome-popup-close"
                    }), this.$modal.on("vexResize", e.proxy(function(t, n) {
                        var r = Math.max((e(window).height() - n.$vexContent.outerHeight()) / 2, 0);
                        n.$vex.css({
                            "padding-top": r + "px"
                        })
                    }, this)), this.$modal.on("vexOpen", e.proxy(function(t, n) {
                        n.$vexContent.find("img").on("load", e.proxy(function(e) {
                            this.$modal.resize()
                        }, this)), this.$modal.resize(), e(".sumome-popup-overlay").append('<a class="sumome-popup-link" href="http://sumome.com/?src=sm-lb-' + this.api.properties.siteId + '" target="_blank">Powered by SumoMe</a>'), this.api.emit("event", {
                            appId: "8dc42610-ae42-4164-90b1-573478b46574",
                            event: "popup-advanced"
                        }), this.api.emit("setProperties", {
                            yield: !0
                        })
                    }, this));
                else if (this.settings.template) {
                    var s = this.settings.templateHtml, o = s.match(/\{sm\:.*?\}/g);
                    o && o.forEach(e.proxy(function(e) {
                        var t = e.replace(/([\{\}]|sm\:)/g, ""), n = t.split("|");
                        if (n.length > 1) {
                            var r = n[1].split(":");
                            s = s.replace(e, this.shadeColor(this.settings[n[0]], parseInt(r[1])))
                        } else 
                            s = s.replace(e, this.settings[n[0]])
                    }, this)), this.$modal = t.open({
                        content: s,
                        customCloseButton: !0,
                        overlayClosesOnClick: !1,
                        className: "sumome-popup sumome-popup-" + this.settings.contentWidth + " sumome-popup-template-" + this.settings.templateSlug,
                        overlayClassName: "sumome-popup-overlay",
                        contentClassName: "sumome-popup-content",
                        closeClassName: "sumome-popup-close"
                    }), this.$modal.on("vexResize", e.proxy(function(t, n) {
                        var r = Math.max((e(window).height() - n.$vexContent.outerHeight()) / 2, 0);
                        n.$vex.css({
                            "padding-top": r + "px"
                        })
                    }, this)), this.$modal.on("vexOpen", e.proxy(function(t, n) {
                        n.$vexContent.find("img").on("load", e.proxy(function(e) {
                            this.$modal.resize()
                        }, this)), this.$modal.resize(), this.settings.mediaId ? n.$vexContent.find(".sumome-popup-media").attr("src", "//sumome-media.s3.amazonaws.com/" + this.settings.mediaId).show() : n.$vexContent.find(".sumome-popup-media").hide(), e(".sumome-popup-overlay").append('<a class="sumome-popup-link" href="http://sumome.com/?src=sm-lb-' + this.api.properties.siteId + '" target="_blank">Powered by SumoMe</a>'), n.$vexContent.find("input[type=text], textarea").filter(":visible").first().focus(), this.api.emit("event", {
                            appId: "8dc42610-ae42-4164-90b1-573478b46574",
                            event: "popup"
                        }), this.api.emit("setProperties", {
                            yield: !0
                        })
                    }, this)), this.findAndStyleElements(), this.$headingEl.text(this.settings.headingText), this.$textEl.html(this.settings.blurbText), this.$buttonTextEl.text(this.settings.buttonText), this.$inputEl.attr("placeholder", this.settings.placeholderText), this.$inputEl.on("keyup change paste", e.proxy(function(e) {}, this)), this.$inputEl.on("keydown", e.proxy(function(e) {
                        e.keyCode === 13 && this.$buttonEl.trigger("click")
                    }, this)), this.$buttonEl.on("click", e.proxy(function() {
                        if (!this.continueMode&&!this.$buttonEl.data("sumome-disabled")) {
                            var e = /^[\+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, t = this.$inputEl.val().trim();
                            e.test(t) ? this.logEmail(t) : (this.$modal.removeClass("sumome-animated sumome-shake"), this.$modal.get(0).offsetWidth = this.$modal.get(0).offsetWidth, this.$modal.addClass("sumome-animated sumome-shake"))
                        }
                    }, this))
                } else 
                    this.$modal = t.open({
                        content: r,
                        overlayClosesOnClick: !1,
                        className: "sumome-popup sumome-popup-" + this.settings.contentWidth,
                        overlayClassName: "sumome-popup-overlay",
                        contentClassName: "sumome-popup-content sumome-popup-content-default",
                        closeClassName: "sumome-popup-close"
                    }), this.$modal.on("vexResize", e.proxy(function(t, n) {
                        var r = Math.max((e(window).height() - n.$vexContent.outerHeight()) / 2, 0);
                        n.$vex.css({
                            "padding-top": r + "px"
                        })
                    }, this)), this.$modal.on("vexOpen", e.proxy(function(t, n) {
                        n.$vexContent.find("img").on("load", e.proxy(function(e) {
                            this.$modal.resize()
                        }, this)), this.$modal.resize(), e(".sumome-popup-overlay").append('<a class="sumome-popup-link" href="http://sumome.com/?src=sm-lb-' + this.api.properties.siteId + '" target="_blank">Powered by SumoMe</a>'), n.$vexContent.find("input[type=text], textarea").filter(":visible").first().focus(), this.api.emit("event", {
                            appId: "8dc42610-ae42-4164-90b1-573478b46574",
                            event: "popup"
                        }), this.api.emit("setProperties", {
                            yield: !0
                        })
                    }, this)), this.findAndStyleElements(), this.$headingEl.text(this.settings.headingText), this.$textEl.html(this.settings.blurbText), this.$buttonTextEl.text(this.settings.buttonText), this.$inputEl.attr("placeholder", this.settings.placeholderText), this.$inputEl.on("keyup change paste", e.proxy(function(e) {}, this)), this.$inputEl.on("keydown", e.proxy(function(e) {
                        e.keyCode === 13 && this.$buttonEl.trigger("click")
                    }, this)), this.$buttonEl.on("click", e.proxy(function() {
                        if (!this.continueMode&&!this.$buttonEl.data("sumome-disabled")) {
                            var e = /^[\+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, t = this.$inputEl.val().trim();
                            e.test(t) ? this.logEmail(t) : (this.$modal.removeClass("sumome-animated sumome-shake"), this.$modal.get(0).offsetWidth = this.$modal.get(0).offsetWidth, this.$modal.addClass("sumome-animated sumome-shake"))
                        }
                    }, this))
            },
            findAndStyleElements: function() {
                this.$headingEl = this.$modal.find(".sumome-popup-heading"), this.$textEl = this.$modal.find(".sumome-popup-text"), this.$inputEl = this.$modal.find(".sumome-popup-input"), this.$buttonEl = this.$modal.find(".sumome-popup-button"), this.$buttonTextEl = this.$modal.find(".sumome-popup-button-text"), this.$continueButtonEl = this.$modal.find(".sumome-popup-continue"), this.$continueButtonTextEl = this.$modal.find(".sumome-popup-continue-text"), this.$errorEl = this.$modal.find(".sumome-popup-form div.sumome-popup-error").hide(), this.$closeButton = this.$modal.find(".sumome-popup-close"), this.$closeButton.style("color", this.settings.textColor, "important"), !this.settings.advancedForm && this.settings.template && this.$modal.style("background-color", "transparent", "important")
            },
            continueContent: function() {
                this.continueMode=!0, this.$inputEl.hide(), this.$buttonEl.hide(), this.$continueButtonTextEl.text(this.settings.continueButtonText), this.$continueButtonEl.show(), this.$headingEl.text(this.settings.continueHeadingText), this.$textEl.html(this.settings.continueBlurbText), this.$continueButtonEl.on("click", e.proxy(function() {
                    t.close(this.$modal.data().vex.id)
                }, this)), setTimeout(e.proxy(function() {
                    this.$continueButtonEl.trigger("click")
                }, this), 1e4)
            },
            logEmail: function(n) {
                this.$buttonEl.data("sumome-disabled", !0), e.ajax({
                    type: "POST",
                    dataType: "json",
                    url: this.api.properties.sumoUrl + "/list/subscribe",
                    data: {
                        site_id: this.api.properties.siteId,
                        app_id: "8dc42610-ae42-4164-90b1-573478b46574",
                        email_address: n
                    },
                    xhrFields: {
                        withCredentials: !1
                    },
                    crossDomain: !0
                }).done(e.proxy(function(r) {
                    if (r && "success"in r && r.success) {
                        this.api.emit("event", {
                            appId: "8dc42610-ae42-4164-90b1-573478b46574",
                            event: "subscribe"
                        });
                        var i = new Date;
                        i.setFullYear(i.getFullYear() + 10), e.cookie(this.subCookieName, !0, {
                            expires: i,
                            path: "/"
                        });
                        if (this.settings.subscribeRedirectUrl)
                            if (this.settings.subscribeRedirectMethod == "post") {
                                var s = e("<form />").attr("method", "post").attr("action", this.settings.subscribeRedirectUrl);
                                if (this.settings.subscribeRedirectVariable) {
                                    var o = e("<input />").attr("type", "text").attr("name", this.settings.subscribeRedirectVariable).val(n);
                                    s.append(o)
                                }
                                e(document.body).append(s), setTimeout(function() {
                                    s.trigger("submit")
                                }, 1e3)
                            } else if (this.settings.subscribeRedirectMethod == "get") {
                                var u = this.settings.subscribeRedirectUrl;
                                if (this.settings.subscribeRedirectVariable) {
                                    var a = {};
                                    u.indexOf("?") > 0 ? u += "&" : u += "?", a[this.settings.subscribeRedirectVariable] = n, u += e.param(a)
                                }
                                setTimeout(function() {
                                    window.location = u
                                }, 1e3)
                            } else 
                                setTimeout(e.proxy(function() {
                                    window.location = this.settings.subscribeRedirectUrl
                                }, this), 1e3);
                        else 
                            this.continueContent()
                        } else 
                            r && "error"in r ? (this.$errorEl.text(r.error).show(), setTimeout(e.proxy(function() {
                                this.$buttonEl.data("sumome-disabled", !1)
                            }, this), 1e3)) : t.close(this.$modal.data().vex.id)
                    }, this))
            },
            showOnStartup: function(t) {
                e(document).ready(e.proxy(function() {
                    ("ontouchstart"in window||!!navigator.msMaxTouchPoints) && window.setTimeout(e.proxy(function() {
                        e(document).one("touchstart", e.proxy(function() {
                            this.show()
                        }, this))
                    }, this), t * 1e3), window.setTimeout(e.proxy(function() {
                        e(document).one("mousemove.listbuilder", e.proxy(function() {
                            this.show()
                        }, this))
                    }, this), t * 1e3)
                }, this))
            },
            showOnExit: function() {
                e(document).ready(e.proxy(function() {
                    e(document).on("mousemove.listbuilder", e.proxy(function(e) {
                        this.hasMouse=!0, this.mx = e.pageX, this.my = e.pageY, this.lmx>-1 && (this.travel = Math.max(Math.abs(this.mx - this.lmx), Math.abs(this.my - this.lmy))), this.lmx = this.mx, this.lmy = this.my
                    }, this)), e(document).on("mouseleave.listbuilder", e.proxy(function(t) {
                        var n = e(window).scrollTop(), r = e(window).scrollLeft(), i = e(window).width(), s = i * .15, o = this.my - n, u = this.mx - r;
                        o <= 20 && u <= s && this.travel >= 9 ? this.show() : o <= 20 && u >= i - s && this.travel >= 9 && this.show()
                    }, this)), e(window).on("blur.listbuilder", e.proxy(function(t) {
                        var n = e(window).scrollTop(), r = e(window).scrollLeft(), i = e(window).width(), s = this.my - n, o = this.mx - r;
                        s <= 20 && o >= 20 && o <= i - 20 && this.show()
                    }, this)), "ontouchstart"in window||!!navigator.msMaxTouchPoints ? (this.scrollTop = e(window).scrollTop(), e(window).on("scroll.listbuilder", e.proxy(function(t) {
                        if (!this.hasMouse) {
                            var n = e(window).scrollTop();
                            n < this.scrollTop && window.setTimeout(e.proxy(function() {
                                this.show()
                            }, this), 1e3), this.scrollTop = n
                        }
                    }, this))) : this.hasMouse=!0
                }, this))
            }
        };
        return i
    }), sumo.define("8dc42610-ae42-4164-90b1-573478b46574/service", ["jquery", "8dc42610-ae42-4164-90b1-573478b46574/popup"], function(e, t) {
        return function(e) {
            var n = function(n, r) {
                sumo.require(["plugins/css!../css/sme-popup.css"]), t.api = e, t.load(), r()
            }, r = function(e) {
                e()
            };
            return {
                init: n,
                destroy: r
            }
        }
    }), sumo.define("8dc42610-ae42-4164-90b1-573478b46574/service", function() {})
})(undefined, undefined);
