(function(y, D) {
    var E, z, F, n, G = window.Sizzle || null, b, s, v, q, m = y[D], H=!1, t = {
        animate: !1,
        smoothScroll: !0,
        scrollDuration: 1E3,
        scrollTopMargin: 200,
        showCloseButton: !0,
        showPrevButton: !1,
        showNextButton: !0,
        bubbleWidth: 280,
        bubblePadding: 15,
        arrowWidth: 20,
        skipIfNoElement: !0
    }, A = "undefined" !== typeof window.jQuery, w = "undefined" !== typeof window.sessionStorage, g = window.document;
    m || (Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }), b = {
        addClass: function(a, b) {
            var c, d,
            h;
            if (0 === a.className.length)
                a.className = b;
            else {
                c = a.className.split(/\s+/);
                d = 0;
                for (h = c.length; d < h; ++d)
                    if (c[d] === b)
                        return;
                c.splice(0, 0, b);
                a.className = c.join(" ")
            }
        },
        removeClass: function(a, b) {
            var c, d, h, i, f, g, j;
            d = b.split(/\s+/);
            c = a.className.split(/\s+/);
            i = 0;
            for (g = d.length; i < g; ++i) {
                h = d[i];
                f = 0;
                for (j = c.length; f < j && c[f] !== h; ++f);
                f < j && c.splice(f, 1)
            }
            a.className = c.join(" ")
        },
        getPixelValue: function(a) {
            var b = typeof a;
            return "number" === b ? a : "string" === b ? parseInt(a, 10) : 0
        },
        valOrDefault: function(a, b) {
            return "undefined" !==
            typeof a ? a : b
        },
        supportsCssTransitions: function() {
            var a = g.body.style;
            return "undefined" !== typeof a.MozTransition || "undefined" !== typeof a.MsTransition || "undefined" !== typeof a.webkitTransition || "undefined" !== typeof a.OTransition || "undefined" !== typeof a.transition
        },
        invokeCallbackArrayHelper: function(a) {
            var b;
            Array.isArray(a) && (b = v[a[0]], "function" === typeof b && b.apply(this, a.slice(1)))
        },
        invokeCallbackArray: function(a) {
            var e, c;
            if (Array.isArray(a))
                if ("string" === typeof a[0])
                    b.invokeCallbackArrayHelper(a);
                else {
                    e =
                    0;
                    for (c = a.length; e < c; ++e)
                        b.invokeCallback(a[e])
                }
        },
        invokeCallback: function(a) {
            "function" === typeof a && a();
            if ("string" === typeof a && v[a])
                v[a]();
            else 
                b.invokeCallbackArray(a)
        },
        invokeEventCallbacks: function(a, b) {
            var c = s[a], d, h;
            b && this.invokeCallback(b);
            d = 0;
            for (h = c.length; d < h; ++d)
                this.invokeCallback(c[d].cb)
        },
        getScrollTop: function() {
            return "undefined" !== typeof window.pageYOffset ? window.pageYOffset : g.documentElement.scrollTop
        },
        getScrollLeft: function() {
            return "undefined" !== typeof window.pageXOffset ? window.pageXOffset :
            g.documentElement.scrollLeft
        },
        getWindowHeight: function() {
            return window.innerHeight || g.documentElement.clientHeight
        },
        getWindowWidth: function() {
            return window.innerWidth || g.documentElement.clientWidth
        },
        addEvtListener: function(a, b, c) {
            return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
        },
        removeEvtListener: function(a, b, c) {
            return a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
        },
        documentIsReady: function() {
            return "complete" === g.readyState || "interactive" ===
            g.readyState
        },
        evtPreventDefault: function(a) {
            a.preventDefault ? a.preventDefault() : event && (event.returnValue=!1)
        },
        extend: function(a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c])
        },
        getStepTargetHelper: function(a) {
            return /^[#\.]/.test(a) ? g.querySelector ? g.querySelector(a) : A ? (a = jQuery(a), a.length ? a[0] : null) : G ? (a = new G(a), a.length ? a[0] : null) : /^#[a-zA-Z][\w-_:.]*$/.test(a) ? g.getElementById(a.substring(1)) : null : g.getElementById(a)
        },
        getStepTarget: function(a) {
            var e;
            if (!a ||!a.target)
                return null;
            if ("string" ===
            typeof a.target)
                return a.target = b.getStepTargetHelper(a.target);
            if (Array.isArray(a.target)) {
                var c, d;
                c = 0;
                for (d = a.target.length; c < d; c++)
                    if ("string" === typeof a.target[c] && (e = b.getStepTargetHelper(a.target[c])))
                        return a.target = e;
                return null
            }
            return a.target
        },
        setState: function(a, b, c) {
            var d = "";
            w ? sessionStorage.setItem(a, b) : (c && (d = new Date, d.setTime(d.getTime() + 864E5 * c), d = "; expires=" + d.toGMTString()), g.cookie = a + "=" + b + d + "; path=/")
        },
        getState: function(a) {
            var b = a + "=", c = g.cookie.split(";"), d, h;
            if (w)
                h = sessionStorage.getItem(a);
            else 
                for (a = 0; a < c.length; a++) {
                    for (d = c[a]; " " === d.charAt(0);)
                        d = d.substring(1, d.length);
                        if (0 === d.indexOf(b)) {
                            h = d.substring(b.length, d.length);
                            break
                        }
                }
            return h
        },
        clearState: function(a) {
            w ? sessionStorage.removeItem(a) : this.setState(a, "", - 1)
        }
    }, b.addEvtListener(window, "load", function() {
        H && m.startTour()
    }), s = {
        next: [],
        prev: [],
        start: [],
        end: [],
        show: [],
        error: [],
        close: []
    }, v = {}, n = {
        stepNums: null,
        nextBtn: "Next",
        prevBtn: "Back",
        doneBtn: "Done",
        skipBtn: "Skip",
        closeTooltip: "Close"
    }, z = function(a) {
        this.init(a)
    }, z.prototype =
    {
        isShowing: !1,
        currStep: void 0,
        _createButton: function(a,
        e) {
            var c = g.createElement("button");
            c.id = a;
            e && (c.innerHTML = e);
            b.addClass(c,
            "hopscotch-nav-button");
            0 <= a.indexOf("prev") ? b.addClass(c,
            "prev"): b.addClass(c,
            "next");
            return c
        }, setPosition : function(a) {
            var e, c, d, h, g;
            d = b.getStepTarget(a);
            var f = this.element, l = this.arrowEl, j = b.getPixelValue(a.arrowOffset);
            e = b.getPixelValue(a.width) || this.opt.bubbleWidth;
            c = b.valOrDefault(a.padding, this.opt.bubblePadding);
            b.removeClass(f, "fade-in-down fade-in-up fade-in-left fade-in-right");
            d = d.getBoundingClientRect();
            "top" === a.orientation ? (e = f.offsetHeight, h = d.top - e - this.opt.arrowWidth, g = d.left) : "bottom" === a.orientation ? (h = d.bottom + this.opt.arrowWidth, g = d.left) : "left" === a.orientation ? (h = d.top, g = d.left - e - 2 * c - 12 - this.opt.arrowWidth) : "right" === a.orientation && (h = d.top, g = d.right + this.opt.arrowWidth);
            if (j)
                if ("top" === a.orientation || "bottom" === a.orientation)
                    l.style.top = "", l.style.left = j + "px";
                else {
                    if ("left" === a.orientation || "right" === a.orientation)
                        l.style.left = "", l.style.top = j + "px"
                } else 
                    l.style.top =
                    "", l.style.left = "";
            g += b.getPixelValue(a.xOffset);
            h += b.getPixelValue(a.yOffset);
            a.fixedElement || (h += b.getScrollTop(), g += b.getScrollLeft());
            f.style.position = a.fixedElement ? "fixed" : "absolute";
            this.opt.animate && A&&!q ? $(f).animate({
                top: h + "px",
                left: g + "px"
            }) : (f.style.top = h + "px", f.style.left = g + "px")
        }, _initNavButtons: function() {
            var a = g.createElement("div");
            this.prevBtnEl = this._createButton("hopscotch-prev", n.prevBtn);
            this.nextBtnEl = this._createButton("hopscotch-next", n.nextBtn);
            this.doneBtnEl = this._createButton("hopscotch-done",
            n.doneBtn);
            this.ctaBtnEl = this._createButton("hopscotch-cta");
            b.addClass(this.doneBtnEl, "hide");
            a.appendChild(this.prevBtnEl);
            a.appendChild(this.nextBtnEl);
            a.appendChild(this.doneBtnEl);
            a.appendChild(this.ctaBtnEl);
            b.addEvtListener(this.prevBtnEl, "click", function() {
                m.prevStep(!0)
            });
            b.addEvtListener(this.nextBtnEl, "click", function() {
                m.nextStep(!0)
            });
            b.addEvtListener(this.doneBtnEl, "click", m.endTour);
            a.className = "hopscotch-actions";
            this.buttonsEl = a;
            this.containerEl.appendChild(a);
            return this
        }, _getCloseFn: function() {
            var a =
            this;
            this.closeFn || (this.closeFn = function(e) {
                a.opt.onClose && b.invokeCallback(a.opt.onClose);
                a.opt.id&&!a.opt.isTourBubble ? m.getCalloutManager().removeCallout(a.opt.id) : a.destroy();
                b.evtPreventDefault(e)
            });
            return this.closeFn
        }, initCloseButton: function() {
            var a = g.createElement("a");
            a.className = "hopscotch-bubble-close";
            a.href = "#";
            a.title = n.closeTooltip;
            a.innerHTML = n.closeTooltip;
            this.opt.isTourBubble ? b.addEvtListener(a, "click", function(a) {
                var c = m.getCurrStepNum(), d = m.getCurrTour(), c = c === d.steps.length -
                1;
                b.invokeEventCallbacks("close");
                m.endTour(!0, c);
                a.preventDefault ? a.preventDefault() : event && (event.returnValue=!1)
            }) : b.addEvtListener(a, "click", this._getCloseFn());
            this.closeBtnEl = a;
            this.containerEl.appendChild(a);
            return this
        }, _initArrow: function() {
            var a, b;
            this.arrowEl = g.createElement("div");
            this.arrowEl.className = "hopscotch-bubble-arrow-container";
            b = g.createElement("div");
            b.className = "hopscotch-bubble-arrow-border";
            a = g.createElement("div");
            a.className = "hopscotch-bubble-arrow";
            this.arrowEl.appendChild(b);
            this.arrowEl.appendChild(a);
            this.element.appendChild(this.arrowEl);
            return this
        }, render: function(a, e, c, d) {
            var h = this.element, g, f;
            a ? this.currStep = a : this.currStep && (a = this.currStep);
            g = b.valOrDefault(a.showNextButton, this.opt.showNextButton);
            f = b.valOrDefault(a.showPrevButton, this.opt.showPrevButton);
            this.setTitle(a.title || "");
            this.setContent(a.content || "");
            this.opt.showNumber && this.setNum(e);
            this.orientation = a.orientation;
            this.showPrevButton(this.prevBtnEl && f && 0 < e);
            this.showNextButton(this.nextBtnEl &&
            g&&!c);
            this.nextBtnEl.value = a.showSkip ? n.skipBtn : n.nextBtn;
            c ? b.removeClass(this.doneBtnEl, "hide") : b.addClass(this.doneBtnEl, "hide");
            this._showButton(this.ctaBtnEl, !!a.showCTAButton);
            a.showCTAButton ? (this.ctaBtnEl.innerHTML = a.ctaLabel, a.onCTA && (this.onCTA && b.removeEvtListener(this.ctaBtnEl, "click", this.onCTA), b.addEvtListener(this.ctaBtnEl, "click", a.onCTA), this.onCTA = a.onCTA)) : this.onCTA && (b.removeEvtListener(this.ctaBtnEl, "click", this.onCTA), this.onCTA = null);
            this._setArrow(a.orientation);
            e = b.getPixelValue(a.width) ||
            this.opt.bubbleWidth;
            c = b.valOrDefault(a.padding, this.opt.bubblePadding);
            this.containerEl.style.width = e + "px";
            this.containerEl.style.padding = c + "px";
            h.style.zIndex = a.zindex || "";
            "top" === a.orientation ? (h.style.top = "-9999px", h.style.left = "-9999px", b.removeClass(h, "hide"), this.setPosition(a), b.addClass(h, "hide")) : this.setPosition(a);
            d && d(!a.fixedElement);
            return this
        }, setTitle: function(a) {
            a ? (this.titleEl.innerHTML = a, b.removeClass(this.titleEl, "hide")) : b.addClass(this.titleEl, "hide");
            return this
        }, setContent: function(a) {
            a ?
            (this.contentEl.innerHTML = a, b.removeClass(this.contentEl, "hide")) : b.addClass(this.contentEl, "hide");
            return this
        }, setNum: function(a) {
            a = n.stepNums && a < n.stepNums.length ? n.stepNums[a] : a + 1;
            this.numberEl.innerHTML = a
        }, _setArrow: function(a) {
            b.removeClass(this.arrowEl, "down up right left");
            "top" === a ? b.addClass(this.arrowEl, "down") : "bottom" === a ? b.addClass(this.arrowEl, "up") : "left" === a ? b.addClass(this.arrowEl, "right") : "right" === a && b.addClass(this.arrowEl, "left")
        }, _getArrowDirection: function() {
            if ("top" === this.orientation)
                return "down";
            if ("bottom" === this.orientation)
                return "up";
            if ("left" === this.orientation)
                return "right";
            if ("right" === this.orientation)
                return "left"
        }, show: function() {
            var a = this, e = "fade-in-" + this._getArrowDirection();
            b.removeClass(this.element, "hide");
            this.opt.animate ? setTimeout(function() {
                b.addClass(a.element, "animate")
            }, 50) : (b.addClass(this.element, e), setTimeout(function() {
                b.removeClass(a.element, "invisible")
            }, 50), setTimeout(function() {
                b.removeClass(a.element, e)
            }, 1E3));
            this.isShowing=!0;
            return this
        }, hide: function(a) {
            var e =
            this.element, a = b.valOrDefault(a, !0);
            e.style.top = "";
            e.style.left = "";
            a ? (b.addClass(e, "hide"), b.removeClass(e, "invisible")) : (b.removeClass(e, "hide"), this.opt.animate || b.addClass(e, "invisible"));
            b.removeClass(e, "animate fade-in-up fade-in-down fade-in-right fade-in-left");
            this.isShowing=!1;
            return this
        }, _showButton: function(a, e, c) {
            var d = "hide";
            c && (d = "hide-all");
            "undefined" === typeof e && (e=!0);
            e ? b.removeClass(a, d) : b.addClass(a, d)
        }, showPrevButton: function(a, b) {
            this._showButton(this.prevBtnEl, a, b)
        }, showNextButton: function(a,
        b) {
            this._showButton(this.nextBtnEl, a, b)
        }, showCloseButton: function(a, b) {
            this._showButton(this.closeBtnEl, a, b)
        }, _initAnimate: function() {
            var a = this;
            setTimeout(function() {
                b.addClass(a.element, "animate")
            }, 50)
        }, _removeAnimate: function() {
            b.removeClass(this.element, "animate")
        }, destroy: function() {
            var a = this.element;
            a && a.parentNode.removeChild(a);
            this.closeBtnEl && b.removeEvtListener(this.closeBtnEl, "click", this._getCloseFn());
            this.ctaBtnEl && this.onCTA && b.removeEvtListener(this.ctaBtnEl, "click", this.onCTA)
        },
        init: function(a) {
            var e = g.createElement("div"), c = g.createElement("div"), d = g.createElement("div"), h = this, i=!1, f, l;
            this.element = e;
            this.containerEl = c;
            this.titleEl = g.createElement("h3");
            this.contentEl = g.createElement("p");
            l = {
                animate: t.animate,
                showPrevButton: t.showPrevButton,
                showNextButton: t.showNextButton,
                bubbleWidth: t.bubbleWidth,
                bubblePadding: t.bubblePadding,
                arrowWidth: t.arrowWidth,
                showNumber: !0,
                isTourBubble: !0
            };
            a = "undefined" === typeof a ? {} : a;
            b.extend(l, a);
            this.opt = l;
            e.className = "hopscotch-bubble animated";
            c.className = "hopscotch-bubble-container";
            l.showNumber ? (this.numberEl = g.createElement("span"), this.numberEl.className = "hopscotch-bubble-number", c.appendChild(this.numberEl)) : b.addClass(e, "no-number");
            d.appendChild(this.titleEl);
            d.appendChild(this.contentEl);
            d.className = "hopscotch-bubble-content";
            c.appendChild(d);
            e.appendChild(c);
            this._initNavButtons();
            this.initCloseButton();
            this._initArrow();
            b.addEvtListener(window, "resize", function() {
                !i && h.isShowing && (i=!0, setTimeout(function() {
                    h.setPosition(h.currStep);
                    i=!1
                }, 100))
            });
            this.hide();
            b.documentIsReady() ? (g.body.appendChild(e), q = b.supportsCssTransitions()) : (g.addEventListener ? (f = function() {
                g.removeEventListener("DOMContentLoaded", f);
                window.removeEventListener("load", f);
                g.body.appendChild(e);
                q = b.supportsCssTransitions()
            }, g.addEventListener("DOMContentLoaded", f, !1)) : (f = function() {
                "complete" === g.readyState && (g.detachEvent("onreadystatechange", f), window.detachEvent("onload", f), g.body.appendChild(e));
                q = b.supportsCssTransitions()
            }, g.attachEvent("onreadystatechange",
            f)), b.addEvtListener(window, "load", f))
        }
    }, F = function() {
        var a = {};
        this.createCallout = function(b) {
            var c;
            if (b.id) {
                if (a[b.id])
                    throw "Callout by that id already exists. Please choose a unique id.";
                b.showNextButton = b.showPrevButton=!1;
                b.isTourBubble=!1;
                c = new z(b);
                a[b.id] = c;
                b.target && c.render(b, null, null, function() {
                    c.show()
                })
            } else 
                throw "Must specify a callout id.";
            return c
        };
        this.getCallout = function(b) {
            return a[b]
        };
        this.removeAllCallouts = function() {
            for (var b in a)
                a.hasOwnProperty(b) && this.removeCallout(b)
        };
        this.removeCallout = function(b) {
            var c = a[b];
            a[b] = null;
            c && c.destroy()
        }
    }, E = function(a) {
        var e = this, c, d, h, i, f, l, j, q, x = function() {
            c || (c = new z({
                animate: h.animate,
                bubblePadding: h.bubblePadding,
                bubbleWidth: h.bubbleWidth,
                showNextButton: h.showNextButton,
                showPrevButton: h.showPrevButton,
                arrowWidth: h.arrowWidth
            }));
            return c
        }, r = function() {
            return 0 > f || f >= i.steps.length ? null : i.steps[f]
        }, w = function() {
            e.nextStep(!1)
        }, B = function(a, c) {
            var d, h;
            0 <= f + a && f + a < i.steps.length ? (f += a, h = r(), setTimeout(function() {
                (d = b.getStepTarget(h)) ?
                c(f) : (b.invokeEventCallbacks("error"), B(a, c))
            }, b.valOrDefault(h.delay, 0))) : c( - 1)
        }, y = function(a, c) {
            var d = this, g, e, k, C;
            x().hide();
            a = b.valOrDefault(a, !0);
            e = g = r();
            k = 0 < c ? e.multipage : 0 < f && i.steps[f - 1].multipage;
            C = function(d) {
                if ( - 1 === d)
                    return this.endTour(!0);
                if (a && (0 < c ? b.invokeEventCallbacks("next", e.onNext) : b.invokeEventCallbacks("prev", e.onPrev), k))
                    return;
                this.showStep(d)
            };
            if (!k && h.skipIfNoElement)
                B(c, function(a) {
                    C.call(d, a)
                });
            else if (0 <= f + c && f + c < i.steps.length) {
                f += c;
                g = r();
                if (!b.getStepTarget(g)&&!k)
                    return b.invokeEventCallbacks("error"),
                    this.endTour(!0, !1);
                C.call(this, f)
            }
            return this
        };
        this.getCalloutManager = function() {
            "undefined" === typeof d && (d = new F);
            return d
        };
        this.startTour = function(a, c) {
            var d, g = this;
            if (!i) {
                i = a;
                var e = {}, k;
                for (k in a)
                    a.hasOwnProperty(k) && ("id" !== k && "steps" !== k) && (e[k] = a[k]);
                this.resetDefaultOptions();
                q.call(this, e, !0);
                if (e = b.getState(h.cookieName))
                    e = e.split(":"), l = e[0], j = e[1], j = parseInt(j, 10), 2 < e.length && "mp" === e[2] && j < i.steps.length - 1&&++j
            }
            "undefined" !== typeof c && (f = c);
            if (!b.documentIsReady())
                return H=!0, this;
            f =
            i.id === l && "undefined" !== typeof j ? j : 0;
            e = function(a) {
                - 1 !== a && b.getStepTarget(i.steps[a]) ? (b.invokeEventCallbacks("start"), d = x(), d.hide(!1), g.isActive=!0, h.animate && d._initAnimate(), b.getStepTarget(r()) ? g.showStep(a) : (b.invokeEventCallbacks("error"), h.skipIfNoElement && g.nextStep(!1))) : g.endTour(!1, !1)
            };
            f = f || 0;
            k = r();
            (k = b.getStepTarget(k)) ? e(f) : (0 < f && (--f, k = r(), k = b.getStepTarget(k)), k || (b.invokeEventCallbacks("error"), h.skipIfNoElement ? (++f, B(1, e)) : (f =- 1, e(f))));
            return this
        };
        this.showStep = function(a) {
            var c =
            i.steps[a];
            setTimeout(function() {
                var d = i.steps.length, e = i.id + ":" + a, u = x(), k = b.getStepTarget(c), j;
                j = function() {
                    u.show();
                    b.invokeEventCallbacks("show", c.onShow)
                };
                f = a;
                h.animate || u.hide(!1);
                u.render(c, a, a === d - 1, function(a) {
                    if (a) {
                        var d = x().element, a = b.getPixelValue(d.style.top), d = a + b.getPixelValue(d.offsetHeight), e = b.getStepTarget(r()).getBoundingClientRect(), f = e.top + b.getScrollTop(), e = e.bottom + b.getScrollTop(), a = a < f ? a: f, d = d > e ? d: e, f = b.getScrollTop(), e = f + b.getWindowHeight(), p = a - h.scrollTopMargin, i, I, u;
                        a >=
                        f && (a <= f + h.scrollTopMargin || d <= e) ? j && j() : h.smoothScroll ? "undefined" !== typeof YAHOO && "undefined" !== typeof YAHOO.env && "undefined" !== typeof YAHOO.env.ua && "undefined" !== typeof YAHOO.util && "undefined" !== typeof YAHOO.util.Scroll ? (a = YAHOO.env.ua.webkit ? g.body : g.documentElement, d = YAHOO.util.Easing ? YAHOO.util.Easing.easeOut : void 0, a = new YAHOO.util.Scroll(a, {
                            scroll : {
                                to : [0, p]
                            }
                        }, h.scrollDuration / 1E3, d), a.onComplete.subscribe(j), a.animate()) : A ? $("body, html").animate({
                            scrollTop: p
                        }, h.scrollDuration, j) : (0 > p && (p =
                        0), i = f > a?-1 : 1, I = Math.abs(f - p) / (h.scrollDuration / 10), u = function() {
                            var a = b.getScrollTop(), c = a + i * I;
                            0 < i && c >= p || 0 > i && c <= p ? (c = p, j && j(), window.scrollTo(0, c)) : (window.scrollTo(0, c), b.getScrollTop() === a ? j && j() : setTimeout(u, 10))
                        }, u()) : (window.scrollTo(0, p), j && j())
                    } else 
                        j();
                    c.nextOnTargetClick && b.addEvtListener(k, "click", w)
                });
                c.multipage && (e += ":mp");
                b.setState(h.cookieName, e, 1)
            }, c.delay || 0);
            return this
        };
        this.prevStep = function(a) {
            y.call(this, a, - 1);
            return this
        };
        this.nextStep = function(a) {
            var c = r(), d = b.getStepTarget(c);
            c.nextOnTargetClick && b.removeEvtListener(d, "click", w);
            y.call(this, a, 1);
            return this
        };
        this.endTour = function(a, c) {
            var d = x(), a = b.valOrDefault(a, !0), c = b.valOrDefault(c, !0);
            f = 0;
            j = void 0;
            d.hide();
            a && b.clearState(h.cookieName);
            m.isActive=!1;
            i && c && b.invokeEventCallbacks("end");
            m.removeCallbacks(!0);
            i = null;
            return this
        };
        this.getCurrTour = function() {
            return i
        };
        this.getCurrStepNum = function() {
            return f
        };
        this.listen = function(a, b, c) {
            a && s[a].push({
                cb: b,
                fromTour: c
            });
            return this
        };
        this.unlisten = function(a, b) {
            var c = s[a],
            d, e;
            d = 0;
            for (e = c.length; d < e; ++d)
                c[d] === b && c.splice(d, 1);
            return this
        };
        this.removeCallbacks = function(a) {
            var b, c, d, e;
            for (e in s)
                if (a) {
                    b = s[e];
                    c = 0;
                    for (d = b.length; c < d; ++c)
                        b[c].fromTour && (b.splice(c--, 1), --d)
                } else 
                    s[e] = [];
            return this
        };
        this.registerHelper = function(a, b) {
            "string" === typeof a && "function" === typeof b && (v[a] = b)
        };
        this.unregisterHelper = function(a) {
            v[a] = null
        };
        this.setCookieName = function(a) {
            h.cookieName = a;
            return this
        };
        this.resetDefaultOptions = function() {
            h || (h = {});
            b.extend(h, t);
            return this
        };
        q = function(a,
        c) {
            var d;
            d = "next prev start end show error close".split(" ");
            var e, f, g;
            h || this.resetDefaultOptions();
            b.extend(h, a);
            a && b.extend(n, a.i18n);
            f = 0;
            for (g = d.length; f < g; ++f)
                e = "on" + d[f].charAt(0).toUpperCase() + d[f].substring(1), a[e] && this.listen(d[f], a[e], c);
            d = x();
            h.animate ? d._initAnimate() : d._removeAnimate();
            d.showCloseButton(a.showCloseButton, "undefined" !== typeof a.showCloseButton);
            return this
        };
        this.configure = function(a) {
            return q.call(this, a, !1)
        };
        a && (a.cookieName = a.cookieName || "hopscotch.tour.state", this.configure(a))
    },
    m = new E, y[D] = m)
})(window, "hopscotch");
if (hopscotch) {
    hopscotch.registerHelper("goToUrl", function(b) {
        var a = b.location;
        if (!a) {
            throw "location is undefined"
        }
        window.location = a
    });
    hopscotch.registerHelper("trackEvent", function(a) {
        var b = a.eventId;
        if (!b) {
            throw "eventId is undefined"
        }
        if (WebTracking) {
            WebTracking.trackUserAction(b, "atStep:" + hopscotch.getCurrStepNum())
        }
    });
    hopscotch.registerHelper("setFormValue", function(b) {
        var a = b.elId, d = b.val, c;
        if (!a) {
            throw "elId is undefined"
        }
        c = YDom.get(a);
        if (c && (typeof c.value !== "undefined")) {
            c.value = d
        }
    });
    hopscotch.registerHelper("submitForm", function(b) {
        var a = b.elId, c;
        if (!a) {
            throw "elId is undefined"
        }
        c = YDom.get(a);
        if (c && c.submit) {
            c.submit()
        }
    });
    hopscotch.registerHelper("typeWord", function(c) {
        var b = c.elId, a = c.keyword, d = c.typingDelay, f, e;
        if (!b) {
            throw "elId is undefined"
        }
        f = YDom.get(b);
        if (!d) {
            f.value = a
        } else {
            e = function(g) {
                var h = g.charAt(0);
                if (h) {
                    f.value += h;
                    g = g.substr(1);
                    setTimeout(function() {
                        e(g)
                    }, d)
                }
            };
            e(a)
        }
    });
    hopscotch.registerHelper("fireEvent", function(c) {
        var b = c.elId, a = c.evt, d;
        if (!b) {
            throw "elId is undefined"
        }
        if (!a) {
            throw "evt is undefined"
        }
        d = YDom.get(b);
        if (!d) {
            return
        }
        LI.fireEvent(d, a)
    });
    hopscotch.registerHelper("focus", function(b) {
        var a = b.elId, c;
        if (!a) {
            throw "elId is undefined"
        }
        c = YDom.get(a);
        if (!c) {
            return
        }
        c.focus()
    });
    hopscotch.registerHelper("saveUISetting", function(a, b) {
        if (typeof a !== "undefined" && typeof window.oUISettings !== "undefined") {
            window.oUISettings.saveSettings(a, b)
        }
    });
    hopscotch.registerHelper("removeHopscotchCallout", function(b) {
        var a = b.calloutID;
        if (!a) {
            throw "calloutID is undefined"
        }
        window.hopscotch.getCalloutManager().removeCallout(a)
    });
    hopscotch.registerHelper("endPromoOnInteraction", function(d) {
        var f = d.promoID, m = d.promoURL, k = d.promoPageKey, b = d.promoEndOnClose !== undefined ? d.promoEndOnClose: true, j = d.endOnButtonPress || false, e = Y$(".hopscotch-bubble", null, true), h = "hopscotch-bubble-close", g = "hopscotch-done", c = "hopscotch-next", l = Y$("." + c, e.element, true) ? c: g, a, i;
        if (!f) {
            throw "promoID is undefined"
        }
        if (!m) {
            throw "promoURL is undefined"
        }
        if (!k) {
            throw "promoPageKey is undefined"
        }
        if (LI.SitePromotion) {
            i = {
                promoID: f,
                pageKey: k,
                url: m,
                skipInitialImp: true,
                skipHidePromo: true
            };
            if (b) {
                i.closeTriggerClass = h
            }
            if (j) {
                i.actionTriggerID = l
            }
            a = new LI.SitePromotion(e, i)
        }
    });
    hopscotch.registerHelper("addClassToEl", function(a) {
        var c = a.el, b = a.classToAdd;
        if (!c ||!b) {
            return
        }
        $(c).addClass(b)
    });
    hopscotch.registerHelper("removeClassFromEl", function(b) {
        var c = b.el, a = b.classToRemove;
        if (!c ||!a) {
            return
        }
        $(c).removeClass(a)
    })
};
