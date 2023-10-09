aRadar("additionalJSLoad", 1);
aRadar("additionalJSInit");
window.__portal = {};
(function() {
    function f(a) {
        return a && 1 == a.nodeType
    }
    function e(a, c) {
        return f(a) && b ? a.classList.contains(c) : !!~(" " + a.className + " ").indexOf(" " + c + " ")
    }
    function d(a, c) {
        f(a) && (b ? a.classList.add(c) : !e(a, c) && (a.className += " " + c))
    }
    function a(a, c) {
        f(a) && (b ? a.classList.remove(c) : a.className = a.className.replace(RegExp("(^|\\s)" + c + "(\\s|$)", "g"), "$1"))
    }
    var b = "classList"in document.documentElement, c = window.__portal, g = /\s*(\S+)\s*/g, i=!/\[native\s+code\]/i.test(document.getElementsByClass + ""), j = /\./g;
    c.__fn = {
        byId: function(a) {
            return document.getElementById(a)
        },
        byClassName: function(a, b, c) {
            var d, e;
            "string" === typeof a && (c = b, b = a, a = document);
            c = c || "";
            if (!a || null == b)
                return [];
            b = b.replace(/\s+/ig, ".");
            "." != b[0] && (b = "." + b);
            if ("querySelectorAll"in a) {
                c = a.querySelectorAll(c + b);
                if (i) {
                    d =- 1;
                    for (a = []; e = c[++d];)
                        a.push(e);
                    return a
                }
                return c
            }
            c = a.getElementsByTagName(c || "*");
            b && (b = b.replace(j, " "), b = RegExp(b.replace(g, "(?=(^|.*\\s)$1(\\s|$))")));
            d =- 1;
            for (a = []; e = c[++d];)
                1 === e.nodeType && (!b || b.test(e.className)) && a.push(e);
            return a
        },
        arrayIndexOf: function(a, b) {
            for (var c = 0, d = a.length; c <
            d; c++)
                if (a[c] == b)
                    return c;
            return - 1
        },
        bind: function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        extend: function(a, b) {
            for (var a = a || {}, c = 1, d = arguments.length; c < d; c++) {
                var e = arguments[c], g;
                for (g in e)
                    e.hasOwnProperty(g) && (a[g] = e[g])
            }
            return a
        },
        append: function(a, b) {
            for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c)&&!Object.prototype.hasOwnProperty.call(a, c) && (a[c] = b[c]);
            return a
        },
        isNode: f,
        hasParent: function(a, b) {
            var c;
            c = f(b) ? function(a, b) {
                return a == b
            } : function(a, b) {
                return e(a, b)
            };
            for (var d =
            a.parentNode; d;) {
                if (c(d, b))
                    return d;
                d = d.parentNode
            }
            return !1
        },
        hasClass: e,
        addClass: d,
        removeClass: a,
        toggleClass: function(c, g) {
            if (f(c))
                return b ? c.classList.toggle(g) : e(c, g) ? (a(c, g), !1) : (d(c, g), !0)
        }
    }
})();
var p = __portal, fn = p.__fn;
__portal.PortalEvents = {};
var PortalEvents = p.PortalEvents;
void function(f, e) {
    function d(a) {
        if (!("__isFixed"in a)) {
            g || (g = document.body);
            var b = "button"in a && a.button;
            a.__isFixed=!0;
            if ("click" === a.type || "dblclick" === a.type)
                void 0 === a.detail && (a.detail = "click" === a.type ? 1 : 2), !a.button && void 0 !== d._clickButton && (b = d._clickButton);
            i(a, q);
            a.defaultPrevented || (a.defaultPrevented=!1);
            a.target || (a.target = a.srcElement || document);
            void 0 === a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement == a.target ? a.toElement : a.fromElement);
            "clientX"in a && null == a.pageX &&
            (a.pageX = a.clientX + (c.scrollLeft || g && g.scrollLeft || 0) - (c.clientLeft || 0), a.pageY = a.clientY + (c.scrollTop || g && g.scrollTop || 0) - (c.clientTop || 0));
            !a.which && b && (a.which = b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0);
            "timeStamp"in a || (a.timeStamp =+ new Date);
            "eventPhase"in a || (a.eventPhase = a.target == this ? 2 : 3);
            "currentTarget"in a || (a.currentTarget = this);
            "isTrusted"in a || (a.isTrusted=!0);
            "keyCode"in a || (a.keyCode = a.charCode || a.which);
            return a
        }
    }
    function a(a) {
        if (void 0 !== d) {
            var b = this._, c = [], g = [];
            if (b && b._e_8vj && (a || (a = window.event),
            d.call(this, a), b = b._e_8vj[a.type])) {
                for (var e in b)
                    if (h(b, e)) {
                        var f = b[e], i;
                        "object" === typeof f && (i = f, f = f.handleEvent);
                        try {
                            if (f&&!1 === (a.result = k.call(f, i || this, a)))
                                a.preventDefault(), a.stopPropagation()
                            } catch (j) {
                                window.logError && logError(j, "portalEventHandler"), c.push(j), g.push(j.message), window.console && console.error(j)
                            }
                            if (a.__stopNow)
                                break
                        }
                b[0] = void 0;
                delete b[0];
                1 == c.length ? m(c[0]) : 1 < c.length && (a = Error("Multiple errors thrown : " + a.type + " :  : " + g.join("|")), a.errors = c, m(a))
            }
        }
    }
    var b = window.eval &&
    window.eval("/*@cc_on 1;@*/")&&+((/msie (\d+)/i.exec(navigator.userAgent) || [])[1] || 0) || void 0, c = document.documentElement, g = document.body, i = e.append, j = 1, h = Function.prototype.call.bind(Object.prototype.hasOwnProperty), k = Function.prototype.call, m = function(a) {
        throw a instanceof Error ? a : Error(a);
    }, l=!("createEvent"in document), n, q = {
        preventDefault: function() {
            !1 !== this.cancelable && (this.returnValue=!1, this.defaultPrevented=!0)
        },
        stopPropagation: function() {
            this.cancelBubble=!0
        },
        stopImmediatePropagation: function() {
            this.__stopNow =
            !0;
            this.stopPropagation()
        },
        defaultPrevented: !1
    };
    b && 9 > b && (document.attachEvent("onmousedown", function() {
        d._clickButton = event.button
    }), document.attachEvent("onclick", function() {
        d._clickButton = void 0
    }));
    f.addListener = l ? function(c, d, g) {
        if ("function" == typeof g || "object" === typeof g && g.handleEvent) {
            var e = c._, f, i=!1;
            e || (e = c._ = {});
            if (b && 9 > b) {
                if ("DOMContentLoaded" == d) {
                    if ("complete" == document.readyState)
                        return;
                    c === global && (c = document);
                    i=!0;
                    if (!n) {
                        n=!0;
                        var h = function() {
                            try {
                                document.documentElement.doScroll("left")
                            } catch (b) {
                                setTimeout(h,
                                50);
                                return 
                            }
                            a.call(c, {
                                type: d,
                                isTrusted: !0
                            })
                        };
                        if ("createEventObject"in document && "doScroll"in document.documentElement)
                            try {
                                global.frameElement || h()
                            } catch (k) {}
                    }
                }
                c.setInterval && (c != global&&!c.frameElement) && (c = global)
            }
            g.uuid || (g.uuid=++j);
            if (!(f = e._h_9e2))
                f = e._h_9e2 = a.bind(c);
            e._e_8vj || (e._e_8vj = {});
            e._e_8vj[d] || (e._e_8vj[d] = {}, b && 9 > b ? i || c.attachEvent("on" + d, f) : c.addEventListener(d, f, !1));
            e._e_8vj[d][g.uuid] = g
        }
    } : function(a, b, c) {
        a.addEventListener(b, c, !1)
    };
    f.removeListener = l ? function(a, c, d) {
        var e = a._,
        g, f, i;
        if (!("function" != typeof d&&!("object" === typeof d && d.handleEvent) ||!d.uuid ||!e))
            if (g = e._h_9e2) {
                f = e._e_8vj && e._e_8vj[c];
                delete f[d.uuid];
                for (i in f)
                    if (h(f, i))
                        return;
                        b && 9 > b ? a.detachEvent("on" + c, g) : a.removeEventListener(c, g, !1);
                        delete e._e_8vj[c];
                        for (i in e._e_8vj)
                            if (h(e._e_8vj, i))
                                return;
                                delete e._e_8vj
            }
    } : function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
}(__portal.PortalEvents, window.__portal.__fn);
void function() {
    function f() {}
    f.prototype = {
        emit: function(e, d, a) {
            function b() {
                --g || a && a()
            }
            void 0 == d && (d = {});
            var c = this.listeners(e);
            if (c)
                for (var c = c.slice(), e = new f.Event(e, d), g = c.length, d = 0, i = g; d < i; d++) {
                    var j = c[d];
                    if ("function" === typeof j)
                        try {
                            j.call(this, e, b)
                        } catch (h) {
                            window.logError && logError(h, "emit"), window.console && window.console.error && window.console.error(h), b()
                        }
                    } else 
                        a && a()
        },
        listeners: function(e) {
            return this._events && this._events[e] && this._events[e].length && this._events[e]
        },
        addListener: function(e,
        d) {
            if ("function" !== typeof d)
                throw Error("invalid argument");
            this._events || (this._events = {});
            this._events[e] || (this._events[e] = []);
            this._events[e].push(d);
            return this
        },
        once: function(e, d) {
            function a() {
                this.removeListener(e, a);
                d.apply(this, arguments)
            }
            if ("function" !== typeof d)
                throw Error("invalid argument");
            this.on(e, a);
            return this
        },
        removeListener: function(e, d) {
            if ("function" !== typeof d)
                throw Error("invalid argument");
            if (!this._events[e])
                return this;
            var a = this._events[e], b = fn.arrayIndexOf(a, d);
            if (0 > b)
                return this;
            a.splice(b, 1);
            0 === a.length && delete this._events[e];
            return this
        }
    };
    f.prototype.on = f.prototype.addListener;
    f.Event = function(e, d) {
        this.type = e;
        this.data = d
    };
    __portal.PortalEventEmitter = f
}();
void function() {
    function f(b) {
        if (!(this instanceof f))
            return new f;
        this.__settings = d.extend({}, a, b);
        this.__baseClass = "portal-overlay";
        this.__visible=!1
    }
    var e = __portal, d = e.__fn, a = {
        hideByClick: !0
    };
    f.prototype = new e.PortalEventEmitter;
    d.extend(f.prototype, {
        show: function() {
            this.__visible || (this.__visible=!0, this.__init(), this.emit("beforeShow"), e.PortalEvents.addListener(document, "keyup", this.____hideByEsc || (this.____hideByEsc = d.bind(this.__hideByEsc, this))), d.addClass(this.__node, this.__baseClass + "_visible"),
            this.emit("show"))
        },
        hide: function() {
            this.__visible && (this.__visible=!1, this.__init(), this.emit("beforeHide"), this.____hideByEsc && e.PortalEvents.removeListener(document, "keyup", this.____hideByEsc), d.removeClass(this.__node, this.__baseClass + "_visible"), this.emit("hide"))
        },
        __hideByEsc: function(a) {
            27 == a.keyCode && this.hide()
        },
        __init: function() {
            this.__node || (this.__node = document.createElement("div"), this.__node.className = this.__baseClass, this.__settings.hideByClick && e.PortalEvents.addListener(this.__node,
            "click", d.bind(this.hide, this)), document.body.appendChild(this.__node))
        }
    });
    e.PortalOverlay = f
}();
void function() {
    function f(d) {
        if (!d ||!fn.isNode(d.node))
            throw Error("Invalid arguments");
        this.__settings = fn.extend({}, e, d);
        this.__baseClass = "portal-popup";
        this.__wBaseClass = "w-" + this.__baseClass;
        this.__node = this.__settings.node;
        this.__wNode = fn.hasParent(this.__node, this.__wBaseClass);
        this.__visible=!1;
        this.__settings.overlay && (this.__overlay = new p.PortalOverlay, this.__overlay.on("hide", fn.bind(this.hide, this)));
        this.__wNode && PortalEvents.addListener(this.__wNode, "click", fn.bind(this.__wHide, this));
        (this.__closeButton = fn.byClassName(this.__node, ".js-close")[0]) && PortalEvents.addListener(this.__closeButton, "click", fn.bind(this.__closeButtonHide, this));
        (this.__controls = fn.byClassName(this.__node, ".js-controls")[0]) && PortalEvents.addListener(this.__controls, "click", fn.bind(this.__controlsHandler, this))
    }
    var e = {
        overlay: !0,
        node: null
    };
    f.prototype = new p.PortalEventEmitter;
    fn.extend(f.prototype, {
        __init: function() {
            this.__inited || (this.__inited=!0)
        },
        isVisible: function() {
            return this.__visible
        },
        show: function() {
            this.__visible ||
            (this.__visible=!0, this.__init(), this.__overlay && this.__overlay.show(), this.emit("beforeShow"), this.__wNode && fn.addClass(this.__wNode, this.__wBaseClass + "_visible"), fn.addClass(this.__node, this.__baseClass + "_visible"), window.scrollTo(0, 0), this.emit("show"))
        },
        hide: function() {
            this.__visible && (this.__visible=!1, this.__overlay && this.__overlay.hide(), this.emit("beforeHide"), this.__wNode && fn.removeClass(this.__wNode, this.__wBaseClass + "_visible"), fn.removeClass(this.__node, this.__baseClass + "_visible"), this.emit("hide"))
        },
        __wHide: function(d) {
            fn.hasParent(d.target, this.__node) || this.hide()
        },
        __closeButtonHide: function(d) {
            d.preventDefault();
            this.hide()
        },
        __controlsHandler: function(d) {
            var a = d.target, b = fn.hasParent(a, "js-control"), c;
            !b && fn.hasClass(a, "js-control") && (b = a);
            b && (c = b.getAttribute("data-action"));
            c && (this.emit("action" + c.substr(0, 1).toUpperCase() + c.substr(1)), d.preventDefault())
        }
    });
    p.PortalPopup = f
}();
void function() {
    function f(a) {
        if (this instanceof f) {
            if (e)
                return e
        } else 
            return new f;
        e = this;
        this.__settings = fn.extend({}, d, a);
        this.__node = fn.byId("portal-region");
        this.__form = fn.byClassName(this.__node, "js-region-form")[0];
        this.__autoCheckbox = fn.byId("regionAutoDetectInput");
        this.__autoCheckboxCity = fn.byClassName(this.__node, "js-auto-city")[0];
        this.__manualCheckbox = fn.byId("regionManualInput");
        this.__regionSearchInput = fn.byId("regionSearchInput");
        this.__regionSearchInputWrap = fn.byId("regionSearchInputWrap");
        this.__regionSearchInputBaseClass = "portal-input";
        this.__regionSearchPlaceholderBaseClass = "portal-input__placeholder";
        this.__regionSearchPlaceholder = fn.byClassName(this.__node, this.__regionSearchPlaceholderBaseClass)[0];
        this.__regionSuggestsBaseClass = "portal-region__suggests";
        this.__regionSuggests = fn.byClassName(this.__node, this.__regionSuggestsBaseClass)[0];
        this.__regionSuggestsGroups = {
            current: fn.byClassName(this.__regionSuggests, "js-current-regions")[0],
            russia: fn.byClassName(this.__regionSuggests,
            "js-russia-regions")[0],
            other: fn.byClassName(this.__regionSuggests, "js-other-regions")[0]
        };
        this.__regionSuggestsGroupLists = {
            current: fn.byClassName(this.__regionSuggestsGroups.current, "js-region-items")[0],
            russia: fn.byClassName(this.__regionSuggestsGroups.russia, "js-region-items")[0],
            other: fn.byClassName(this.__regionSuggestsGroups.other, "js-region-items")[0]
        };
        this.__regionSuggestsGroupBaseClass = "portal-region__suggests__group";
        this.__regionSuggestsGroupItemBaseClass = "portal-region__suggests__group__item";
        this.__autoCheckboxCity.innerHTML = this.__settings.cityName || "";
        PortalEvents.addListener(this.__autoCheckbox, "click", fn.bind(this.__switchToAuto, this));
        PortalEvents.addListener(this.__manualCheckbox, "click", fn.bind(function() {
            "manual" !== this.__currentState && this.__switchToManual();
            this.__regionSearchInput.focus()
        }, this));
        PortalEvents.addListener(this.__regionSearchInputWrap, "click", fn.bind(function() {
            "manual" !== this.__currentState && (this.__switchToManual(), this.__regionSearchInput.focus(), this.__autoCheckbox.checked =
            !1, this.__manualCheckbox.checked=!0)
        }, this));
        PortalEvents.addListener(this.__regionSearchInput, "click", fn.bind(this.__searchInputKeys, this));
        PortalEvents.addListener(this.__regionSearchInput, "keydown", fn.bind(this.__searchInputKeys, this));
        PortalEvents.addListener(this.__regionSearchInput, "keyup", fn.bind(this.__searchInputKeys, this));
        PortalEvents.addListener(this.__regionSearchInput, "paste", fn.bind(this.__searchInputKeys, this));
        PortalEvents.addListener(this.__regionSearchInput, "cut", fn.bind(this.__searchInputKeys,
        this));
        PortalEvents.addListener(this.__regionSearchInput, "input", fn.bind(function() {
            this.__validate()
        }, this));
        PortalEvents.addListener(this.__regionSearchInput, "paste", fn.bind(function() {
            this.__validate()
        }, this));
        PortalEvents.addListener(this.__regionSearchInput, "cut", fn.bind(function() {
            this.__validate()
        }, this));
        PortalEvents.addListener(this.__regionSuggests, "click", fn.bind(this.__searchInputKeys, this));
        PortalEvents.addListener(this.__regionSuggests, "keydown", fn.bind(this.__searchInputKeys, this));
        PortalEvents.addListener(this.__regionSuggests, "scroll", fn.bind(this.__onScroll, this));
        if (this.__placeholderEmulation=!("placeholder"in document.createElement("input"))) {
            if (a = this.__regionSearchInput.getAttribute("placeholder"))
                this.__regionSearchPlaceholder.innerHTML = a;
            PortalEvents.addListener(this.__regionSearchInput, "keydown", fn.bind(this.__placeHolderKeys, this));
            PortalEvents.addListener(this.__regionSearchInput, "keyup", fn.bind(this.__placeHolderKeys, this));
            PortalEvents.addListener(this.__regionSearchInput,
            "paste", fn.bind(this.__togglePlaceholder, this));
            PortalEvents.addListener(this.__regionSearchInput, "cut", fn.bind(this.__togglePlaceholder, this));
            PortalEvents.addListener(this.__regionSearchInput, "input", fn.bind(this.__togglePlaceholder, this))
        } else 
            this.__regionSearchPlaceholder.style.display = "none";
        PortalEvents.addListener(fn.byClassName(this.__regionSuggests, "js-message-all")[0], "click", fn.bind(function() {
            this.__reset();
            this.__regionSearchInput.focus()
        }, this));
        PortalEvents.addListener(fn.byClassName(this.__regionSuggests,
        "js-message-reload")[0], "click", fn.bind(this.__reload, this));
        this.__popup = new __portal.PortalPopup({
            node: fn.byId("regional-popup")
        });
        this.__popup.on("actionCancel", fn.bind(function() {
            this.__actionCancel=!0;
            mr.counter("clb1221592");
            this.__popup.hide()
        }, this));
        this.__popup.on("hide", fn.bind(function() {
            this.__actionCancel || mr.counter("clb1264381");
            this.__actionCancel=!1
        }, this));
        this.__popup.on("actionSave", fn.bind(function() {
            mr.counter("clb1221591");
            this.__save()
        }, this));
        PortalEvents.addListener(this.__form,
        "submit", fn.bind(function(a) {
            a && a.preventDefault();
            this.__save()
        }, this));
        this.on("beforeShow", this.__init);
        this.on("show", function() {
            this.__regionSuggestsOffsetHeight = this.__regionSuggests.offsetHeight;
            this.__regionSuggestsScrollHeight = this.__regionSuggests.scrollHeight
        });
        this.__autocompletedValue = this.__q = "";
        this.__cacheQ = {};
        this.__cacheNoQ = void 0;
        this.__regionsCache = {}
    }
    var e, d = {
        startRegion: null,
        auto: !0,
        notification: !1,
        cityName: "",
        pageSize: 50,
        inputTimeout: 400,
        lastItemsToLoad: 15,
        preloaderPause: 200,
        region: null,
        effRegion: null
    };
    f.prototype = new __portal.PortalEventEmitter;
    fn.extend(f.prototype, {
        __init: function() {
            this.__settings.auto ? (this.__autoCheckbox.checked=!0, this.__manualCheckbox.checked=!1, this.__switchToAuto(), this.once("show", fn.bind(function() {
                this.__manualCheckbox.focus()
            }, this))) : (this.__autoCheckbox.checked=!1, this.__manualCheckbox.checked=!0, this.__switchToManual(), this.once("show", fn.bind(function() {
                this.__regionSearchInput.focus()
            }, this)));
            this.__page = 0;
            this.once("show", fn.bind(function() {
                this.__regionSuggests.scrollTop =
                0
            }, this));
            this.__selectCity();
            this.__loadRegions(0)
        },
        __reload: function() {
            this.__loadRegions(this.__page)
        },
        __reset: function() {
            this.__regionSuggests.scrollTop = 0;
            this.__setQ("");
            this.__loadRegions(0)
        },
        __save: function() {
            var a = mr.s_cookie.getGlobal("geo");
            mr.s_cookie.getGlobal("georb");
            (new Image).src = "//rs.mail.ru/f?new=" + (this.__selectedCity ? this.__selectedCity.getAttribute("data-id") : "auto") + "&old=" + this.__settings.effRegion.id + "&ipR=" + this.__settings.region.id + "&ipLevel2=" + this.__settings.region.level2 +
            "&effLevel2=" + this.__settings.effRegion.level2 + "&ipLevel1=" + this.__settings.region.level1 + "&effLevel1=" + this.__settings.effRegion.level1 + "&geod=" + mr.s_cookie.getGlobal("geod") + "&georb=" + mr.s_cookie.getGlobal("georb") + "&geol1=" + mr.s_cookie.getGlobal("geol1") + "&geo=" + mr.s_cookie.getGlobal("geo");
            if (this.__autoCheckbox.checked)
                mr.counter("clb1221593"), mr.s_cookie.removeGlobal("geo"), mr.s_cookie.removeGlobal("georb"), mr.s_cookie.removeGlobal("geol1");
            else {
                if (!this.__selectedCity) {
                    this.__setError(!0);
                    return 
                }
                this.__selectedCity.parentNode === this.__regionSuggestsGroupLists.current ? mr.counter("clb1264632") : mr.counter("clb1221598");
                mr.s_cookie.setGlobal("geo", this.__selectedCity.getAttribute("data-id"));
                mr.s_cookie[this.__settings.region.level2 ? "setGlobal": "removeGlobal"]("georb", this.__settings.region.level2);
                mr.s_cookie[this.__settings.region.level1 ? "setGlobal": "removeGlobal"]("geol1", this.__settings.region.level1)
            }
            mr.s_cookie.removeGlobal("geod");
            this.__popup.hide();
            a !== mr.s_cookie.getGlobal("geo") &&
            setTimeout(function() {
                var a = window.location.toString(), a = a.replace("#region", "");
                setTimeout(function() {
                    try {
                        window.location.replace(a)
                    } catch (c) {}
                    setTimeout(function() {
                        try {
                            window.location.replace(a)
                        } catch (c) {}
                        setTimeout(function() {
                            try {
                                window.location.reload()
                            } catch (a) {}
                        }, 10)
                    }, 10)
                }, 10)
            }, 50)
        },
        __cache: function(a, b, c) {
            var d, e = c && c.regionsCount && Math.ceil(c.regionsCount / this.__settings.pageSize);
            (a = this.__getNormalizedQ(a)) ? (d = this.__cacheQ[a], !d && e ? d = this.__cacheQ[a] = Array(e) : !d && (!e && c) && (d = this.__cacheQ[a] =
            !1)) : (d = this.__cacheNoQ, !d && e && (d = this.__cacheNoQ = Array(e)));
            if (!d)
                return d;
            if (e && b > e - 1)
                return null;
            a = d[b];
            c && (a || (d[b] = a = {
                current: [],
                russia: [],
                other: []
            }), a.current = c.current, a.russia = c.russia, a.other = c.other, d.regionsCount = c.regionsCount, fn.append(this.__regionsCache, c.regions));
            return a
        },
        __inCache: function(a, b) {
            return this.__cache(a, b)
        },
        __pages: function(a) {
            a = this.__getNormalizedQ(a);
            return (a = "" == a ? this.__cacheNoQ : this.__cacheQ[a]) ? a.length : void 0
        },
        __scrollToCity: function(a, b) {
            var c = fn.arrayIndexOf(this.__items,
            a), d = a.offsetTop, e = a.offsetHeight, f = this.__regionSuggests.scrollTop, h = this.__regionSuggestsOffsetHeight;
            0 === c ? this.__regionSuggests.scrollTop = 0 : c === this.__items.length - 1 ? this.__regionSuggests.scrollTop = this.__regionSuggestsScrollHeight - h : (c = (b ? e : 0) + d - f, c > h ? this.__regionSuggests.scrollTop = d + e - h : 0 >= c && (this.__regionSuggests.scrollTop = d))
        },
        __onScroll: function() {
            this.__items.length && this.__regionSuggests.scrollTop + this.__regionSuggestsOffsetHeight > this.__regionSuggestsScrollHeight - this.__items[0].offsetHeight *
            this.__settings.lastItemsToLoad && this.__loadRegions(this.__page + 1)
        },
        __selectCity: function(a, b) {
            a || (this.__selectedCity = null, fn.removeClass(this.__selectedCity, "portal-region__suggests__group__item_selected"));
            this.__selectedCity && fn.removeClass(this.__selectedCity, "portal-region__suggests__group__item_selected");
            a && (this.__selectedCity = a, b || this.__setQ(this.__getQ(), this.__regionsCache[a.getAttribute("data-id")].cityName), fn.addClass(this.__selectedCity, "portal-region__suggests__group__item_selected"))
        },
        __searchInputKeys: function(a) {
            if ("click" === a.type && (a.target === this.__regionSuggests || fn.hasParent(a.target, this.__regionSuggests)))
                this.__autoCheckbox.checked ? a.preventDefault() : (a = fn.hasParent(a.target, "portal-region__suggests__group__item") || fn.hasClass(a.target, "portal-region__suggests__group__item") && a.target) && this.__selectCity(a);
            else if ("keydown" === a.type)
                switch (a.keyCode) {
                case 13:
                    if (this.__autoCheckbox.checked) {
                        a.preventDefault();
                        break
                    }
                    a.target === this.__regionSuggests && (this.__save(), this.__hasError() &&
                    setTimeout(fn.bind(function() {
                        this.__regionSearchInput.focus()
                    }, this), 10));
                    break;
                case 40:
                case 38:
                    if (this.__autoCheckbox.checked ||!this.__items.length) {
                        a.preventDefault();
                        break
                    }
                    var b;
                    if (40 == a.keyCode)
                        if (this.__selectedCity) {
                            b = fn.arrayIndexOf(this.__items, this.__selectedCity) + 1;
                            if (b >= this.__items.length) {
                                if (this.__loading)
                                    break;
                                    b = 0
                            }
                            b = this.__items[b]
                        } else 
                            b = this.__items[0];
                        else 
                            this.__selectedCity ? (b = fn.arrayIndexOf(this.__items, this.__selectedCity) - 1, 0 > b && (b = this.__items.length - 1), b = this.__items[b]) :
                            b = this.__items[this.__items.length - 1];
                            this.__selectCity(b);
                            this.__scrollToCity(this.__selectedCity, 40 == a.keyCode);
                            a.preventDefault()
                } else if ("keyup" === a.type || ("paste" === a.type || "cut" === a.type) && a.target === this.__regionSearchInput || "click" === a.type && (a.target === this.__regionSearchInput || fn.hasParent(a.target, this.__regionSearchInput)))
                clearTimeout(this.__qEntertimeout), "cut" === a.type || "paste" === a.type ? this.__qEntertimeout = setTimeout(fn.bind(function() {
                    this.__searchInputKeys({
                        type: "keyup"
                    })
                }, this),
                0) : 13 !== a.keyCode && this.__validate(this.__regionSearchInput.value) && (b = (a = this.__getSelection()) ? this.__regionSearchInput.value.substr(0, this.__regionSearchInput.value.toLowerCase().indexOf(a)) : this.__regionSearchInput.value, b = b.toLowerCase(), b === this.__getNormalizedQ() || a === this.__regionSearchInput.value.toLowerCase() && "" !== this.__regionSearchInput.value || (this.__qEntertimeout = setTimeout(fn.bind(function() {
                    this.__q = this.__regionSearchInput.value;
                    this.__autocompletedValue = "";
                    this.__getNormalizedQ() !==
                    this.__getQLoaded() && this.__loadRegions(0)
                }, this), this.__settings.inputTimeout)))
        },
        __placeHolderKeys: function(a) {
            this.__placeholderEmulation && ("keydown" === a.type ? 91 == a.keyCode || 92 == a.keyCode ? this.__commandKey=!0 : - 1 < [8, 46].indexOf(a.keyCode) && 1 == this.__getQ().length ? this.__togglePlaceholder(!0) : 48 <= a.keyCode && (90 >= a.keyCode&&!a.altKey&&!a.ctrlKey&&!this.__commandKey) && this.__togglePlaceholder(!1) : "keyup" === a.type && (91 == a.keyCode || 92 == a.keyCode ? this.__commandKey=!1 : this.__togglePlaceholder()))
        },
        __togglePlaceholder: function(a) {
            this.__placeholderEmulation &&
            (this.__regionSearchPlaceholder.style.display=!0 === a ||!1 === a ? a ? "block" : "none" : !this.__regionSearchInput.value ? "block" : "none")
        },
        __validate: function(a) {
            a = void 0 === a ? this.__regionSearchInput.value : a;
            (a = "" === a || /^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0451() \-]+$/i.test(a)) ? this.__removeError(!0) : this.__setError();
            return a
        },
        __getQ: function() {
            return this.__q
        },
        __setQ: function(a, b) {
            this.__autocompletedValue = b || "";
            this.__q = a;
            this.__regionSearchInput.value = this.__autocompletedValue ? this.__autocompletedValue :
            this.__q;
            var c = this.__getNormalizedQ(this.__q).length, d = this.__autocompletedValue.length;
            if (this.__popup.isVisible())
                if (this.__regionSearchInput.setSelectionRange)
                    this.__regionSearchInput.setSelectionRange(c, d);
                else if (this.__regionSearchInput.createTextRange) {
                    var e = this.__regionSearchInput.createTextRange();
                    e.collapse(!0);
                    e.moveEnd("character", d);
                    e.moveStart("character", c);
                    e.select()
                }
            this.__togglePlaceholder()
        },
        __getNormalizedQ: function(a) {
            a = void 0 !== a ? a : this.__getQ();
            return a.toLowerCase()
        },
        __getSelection: function() {
            var a =
            this.__getNormalizedQ(this.__q).length;
            return !this.__autocompletedValue ? "" : - 1 !== this.__regionSearchInput.value.toLowerCase().indexOf(this.__autocompletedValue.toLowerCase()) ? this.__autocompletedValue.substr(a).toLowerCase() : ""
        },
        __getQLoaded: function() {
            return this.__qLoaded
        },
        __setQLoaded: function(a) {
            this.__qLoaded = a.toLowerCase()
        },
        __hasError: function() {
            return fn.hasClass(this.__regionSearchInput.parentNode.parentNode, this.__regionSearchInputBaseClass + "_error")
        },
        __setError: function(a) {
            clearTimeout(this.__hightlightTimeout);
            fn.addClass(this.__regionSearchInput.parentNode.parentNode, this.__regionSearchInputBaseClass + "_error");
            a ? (this.__hightlightTimeout = setTimeout(fn.bind(function() {
                this.__validate()
            }, this), 1E3), fn.addClass(this.__regionSuggests.parentNode, "w-" + this.__regionSuggestsBaseClass + "_highlight")) : this.__removeError(!0, !0)
        },
        __removeError: function(a, b) {
            b || fn.removeClass(this.__regionSearchInput.parentNode.parentNode, this.__regionSearchInputBaseClass + "_error");
            a && fn.removeClass(this.__regionSuggests.parentNode,
            "w-" + this.__regionSuggestsBaseClass + "_highlight")
        },
        __switchToAuto: function() {
            this.__reset();
            this.__regionSearchInput.setAttribute("disabled", "disabled");
            fn.addClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_disabled");
            this.__currentState = "auto"
        },
        __switchToManual: function() {
            this.__reset();
            this.__regionSearchInput.removeAttribute("disabled");
            fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_disabled");
            this.__currentState = "manual"
        },
        __url: "//portal.mail.ru/RegionSuggest",
        __loadRegions: function(a) {
            if (!(this.__loading && this.__getQLoaded() === this.__getNormalizedQ())) {
                var b = this.__getParams(a), c = b.q;
                if (!(a > this.__pages(c) - 1)) {
                    this.__setQLoaded(c);
                    this.__page = a;
                    var d = this.__inCache(c, a);
                    if (void 0 === d) {
                        for (var e = c, f; 2 <= (e = e.substr(0, e.length - 1)).length && void 0 === (f = this.__inCache(e, a)););
                        if (!1 === f) {
                            this.__updateList();
                            return 
                        }
                    } else if (!1 === d) {
                        this.__updateList();
                        return 
                    }
                    d ? this.__updateList(d, a) : (clearTimeout(this.__loaderTimeout), a || (this.__loaderTimeout = setTimeout(fn.bind(function() {
                        fn.addClass(this.__regionSuggests,
                        this.__regionSuggestsBaseClass + "_loading")
                    }, this), this.__settings.preloaderPause)), this.__loading=!0, mr.JSONP({
                        url: this.__url,
                        params: b,
                        callback: fn.bind(function(b) {
                            clearTimeout(this.__loaderTimeout);
                            fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_loading");
                            this.__loading=!1;
                            b = this.__cache(c, a, b);
                            this.__getNormalizedQ() === this.__getQLoaded() && this.__page === a && this.__updateList(b, a)
                        }, this),
                        error: fn.bind(function(b) {
                            clearTimeout(this.__loaderTimeout);
                            fn.removeClass(this.__regionSuggests,
                            this.__regionSuggestsBaseClass + "_loading");
                            this.__loading=!1;
                            this.__getNormalizedQ() === this.__getQLoaded() && this.__page === a && this.__message(null, b)
                        }, this),
                        timeout: 6E4
                    }))
                }
            }
        },
        __message: function(a, b) {
            b ? (this.__scrollTop = this.__regionSuggests.scrollTop, fn.addClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_message"), fn.addClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_error"), fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_empty")) : (a ? (fn.addClass(this.__regionSuggests,
            this.__regionSuggestsBaseClass + "_message"), fn.addClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_empty")) : (fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_message"), fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_empty")), fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_error"));
            !b && this.__scrollTop && (this.__regionSuggests.scrollTop = this.__scrollTop, this.__scrollTop = null)
        },
        __updateList: function(a, b) {
            if (0 === b ||!a)
                this.__selectCity(),
                this.__regionSuggests.scrollTop = 0, fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_hasMore"), this.__regionSuggestsGroupLists.current.innerHTML = "", this.__regionSuggestsGroupLists.russia.innerHTML = "", this.__regionSuggestsGroupLists.other.innerHTML = "";
            this.__message(!a);
            a && (a.current.length && this.__regionSuggestsGroupLists.current.appendChild(this.__groupHTML(this.__regionsCache, a.current)), a.russia.length && this.__regionSuggestsGroupLists.russia.appendChild(this.__groupHTML(this.__regionsCache,
            a.russia)), a.other.length && this.__regionSuggestsGroupLists.other.appendChild(this.__groupHTML(this.__regionsCache, a.other)), void 0 !== b && b !== this.__pages(this.__getNormalizedQ()) - 1 ? fn.addClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_hasMore") : fn.removeClass(this.__regionSuggests, this.__regionSuggestsBaseClass + "_hasMore"), (!this.__regionSuggestsGroupLists.current.childNodes.length ? fn.addClass : fn.removeClass)(this.__regionSuggestsGroups.current, this.__regionSuggestsGroupBaseClass + "_empty"),
            (!this.__regionSuggestsGroupLists.russia.childNodes.length ? fn.addClass : fn.removeClass)(this.__regionSuggestsGroups.russia, this.__regionSuggestsGroupBaseClass + "_empty"), (!this.__regionSuggestsGroupLists.other.childNodes.length ? fn.addClass : fn.removeClass)(this.__regionSuggestsGroups.other, this.__regionSuggestsGroupBaseClass + "_empty"));
            var c = this.__items;
            this.__items = fn.byClassName(this.__regionSuggests, this.__regionSuggestsGroupItemBaseClass);
            1 === this.__items.length && this.__selectCity(this.__items[0],
            1 == c.length && c[0].getAttribute("data-id") === this.__items[0].getAttribute("data-id"));
            this.__regionSuggestsScrollHeight = this.__regionSuggests.scrollHeight
        },
        __groupHTML: function(a, b) {
            if (!b ||!b.length)
                return "";
            for (var c = document.createDocumentFragment(), d = 0, e = b.length; d < e; d++) {
                var f = b[d], h = a[f], k = h.parentId && a[h.parentId], m = k && k.parentId && a[k.parentId], l = document.createElement("div"), n = document.createElement("span"), q = document.createElement("span");
                l.setAttribute("data-id", f);
                l.className = "portal-region__suggests__group__item";
                n.className = "portal-region__suggests__group__item__name";
                q.className = "portal-region__suggests__group__item__info";
                n.innerHTML = h.cityName;
                f = [];
                k && (k.regionName && f.push(k.regionName), m && m.regionName && f.push(m.regionName));
                q.innerHTML = f.length ? "(" + f.join(", ") + ")" : "";
                l.appendChild(n);
                l.appendChild(q);
                c.appendChild(l)
            }
            return c
        },
        __getParams: function(a) {
            var b = {
                q: this.__getNormalizedQ()
            }, a = this.__settings.pageSize * a, c = this.__settings.pageSize;
            this.__settings.startRegion && (b.rId = this.__settings.startRegion);
            void 0 !== a && (b.M = a);
            void 0 !== c && (b.N = c);
            return b
        },
        show: function() {
            function a() {
                this.__popup.show();
                this.emit("show");
                mr.counter("d1221590")
            }
            this.__popup.isVisible() || (this.emit("beforeShow"), this.__inCache(this.__getNormalizedQ(), this.__page) ? a.call(this) : setTimeout(fn.bind(a, this), this.__settings.preloaderPause))
        },
        hide: function() {
            this.__popup.isVisible() && (this.emit("beforeHide"), this.__popup.hide(), this.emit("hide"))
        }
    });
    p.PortalRegion = f
}();
(function(f) {
    function e(a) {
        var b = this;
        this.__settings = f.extend({}, d, a);
        this.showVariant = this.__settings.show;
        this.variant = 0;
        this.container = mr.id("news");
        this.linkforposition = mr.id("regional-info-link-0");
        this.popup = mr.id("region-confirm");
        this.choose = mr.id("region-confirm__choose");
        this.closeButton = mr.id("region-confirm__close");
        this.confirm = mr.id("region-confirm__confirm");
        this.link = mr.id("region-confirm__link");
        this.city = mr.id("region-confirm__city");
        this.yes = mr.id("region-confirm__yes");
        this.no =
        mr.id("region-confirm__no");
        this.container.appendChild(this.popup);
        PortalEvents.addListener(this.closeButton, "click", f.bind(this.hideByButton, this));
        PortalEvents.addListener(this.closeButton, "keyup", f.bind(function(a) {
            13 === a.keyCode && this.hideByButton()
        }, this));
        var a = mr.s_cookie.getGlobal("geo"), c = mr.s_cookie.getGlobal("georb"), e = mr.s_cookie.getGlobal("geod"), i = mr.s_cookie.getGlobal("geol1") || null, c = c || null, j = this.__settings.region, h = this.__settings.effRegion;
        if (1 === this.showVariant || 0 === this.__settings.region.id &&
        !a)
            this.variant = 1;
        else if (2 === this.showVariant || a && a !== j.id && (null !== c && h.level2 != j.level2 && c != j.level2 && null !== j.level2 || null !== i && h.level1 != j.level1 && i != j.level1) && (!e || e && e != j.level1))
            this.variant = 2;
        1 === this.variant ? (this.choose.style.display = "inline-block", this.confirm.style.display = "none", PortalEvents.addListener(this.link, "click", f.bind(this.showRegionalSelector, this))) : 2 === this.variant ? (this.choose.style.display = "none", this.confirm.style.display = "inline-block", this.city.innerHTML = this.__settings.cityName,
        PortalEvents.addListener(this.yes, "click", f.bind(this.save, this)), PortalEvents.addListener(this.no, "click", f.bind(this.save, this)), PortalEvents.addListener(this.yes, "keyup", f.bind(this.save, this)), PortalEvents.addListener(this.no, "keyup", f.bind(this.save, this))) : this.__disabled=!0;
        newsTabs.on("tab:activate", function() {
            b.hide()
        })
    }
    var d = {
        cityName: "",
        region: null,
        effRegion: null
    };
    e.prototype = {
        save: function(a) {
            var b;
            if ("click" === a.type || "keyup" === a.type && 13 === a.keyCode) {
                if (a.target === this.yes || f.hasParent(a.target,
                this.yes))
                    b = "yes";
                else if (a.target === this.no || f.hasParent(a.target, this.no))
                    b = "no";
                b && ((new Image).src = "//rs.mail.ru/f?geo=" + mr.s_cookie.getGlobal("geo") + "&ipR=" + this.__settings.region.id + "&ipLevel2=" + this.__settings.region.level2 + "&effLevel2=" + this.__settings.effRegion.level2 + "&ipLevel1=" + this.__settings.region.level1 + "&effLevel1=" + this.__settings.effRegion.level1 + "&geod=" + mr.s_cookie.getGlobal("geod") + "&georb=" + mr.s_cookie.getGlobal("georb") + "&geol1=" + mr.s_cookie.getGlobal("geol1") + "&button=" + b,
                "yes" === b && (mr.counter("clb1283927"), mr.s_cookie.removeGlobal("geo"), mr.s_cookie.removeGlobal("georb"), mr.s_cookie.removeGlobal("geol1"), mr.s_cookie.removeGlobal("geod"), setTimeout(function() {
                    location.reload()
                }, 20), this.hide()), "no" === b && (mr.counter("clb1283928"), a = mr.s_cookie.getGlobal("geod"), mr.s_cookie[this.__settings.region.level2 ? "setGlobal": "removeGlobal"]("georb", this.__settings.region.level2), mr.s_cookie[this.__settings.region.level1 ? "setGlobal": "removeGlobal"]("geol1", this.__settings.region.level1),
                - 1 == a ? mr.s_cookie.setGlobal("geod", this.__settings.region.level1) : mr.s_cookie.setGlobal("geod", "-1"), this.hide()))
            }
        },
        hideByButton: function() {
            this.hide();
            this.variant && mr.counter("clb" + (1 == this.variant ? "1283920" : "1283930"))
        },
        hide: function() {
            this.popup.style.display = "none"
        },
        show: function() {
            this.__disabled || (this.popup.style.display = "block", this.popup.style.left = this.linkforposition.offsetWidth + 20 + "px", this.variant && mr.counter("d" + (1 == this.variant ? "1283915" : "1283926")))
        },
        showRegionalSelector: function() {
            showRegionSelector =
            !0;
            "regionalSelector"in window && (mr.counter("clb1283918"), window.regionalSelector.show());
            this.hide()
        }
    };
    window.RegionConfirm = e
})(window.__portal.__fn);
aRadar("additionalJSInit", 1);
mr.portalSriptLoaded=!0;

