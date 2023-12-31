window.LI = window.LI || {};
window.LI.RUM = window.LI.RUM || {};
(function(b) {
    var a = 0;
    b.activeTimers = b.activeTimers || {};
    b.finishedTimers = b.finishedTimers || {};
    b.timeMarks = b.timeMarks || {};
    b.startTimer = function(c, e) {
        var d = b.activeTimers;
        d[c] = d[c] || [];
        d[c].push(e||+new Date())
    };
    b.markTime = function(c, e) {
        var d = b.timeMarks;
        d[c + "ClientTimestampMs"] = e||+new Date()
    };
    b.stopTimer = function(e, f) {
        var d = f||+new Date(), c = b.activeTimers, h = b.finishedTimers;
        h[e] = h[e] || [];
        if (c[e] === undefined) {
            return
        }
        var g = c[e].pop();
        h[e].push(d - g)
    };
    b.monkeyTimer = function(e, c, d) {
        return function() {
            b.startTimer(c);
            var f = e.apply(d || this, arguments);
            b.stopTimer(c);
            return f
        }
    };
    b.monkeyTimeByName = function(d, c, e) {
        var h = d.split("."), g, f = window;
        for (g = 0;
        g < h.length - 1;
        g++) {
            f = f[h[g]];
            if (typeof f != "object") {
                return
            }
        }
        if (typeof f[h[g]] !== "function") {
            return
        }
        f[h[g]] = b.monkeyTimer(f[h[g]], c, e)
    };
    b.monkeyTimeList = function(d) {
        for (var c in d) {
            if (d.hasOwnProperty(c)) {
                b.monkeyTimeByName(c, d[c])
            }
        }
    };
    b.getNumTimes = function(c) {
        var d = b.finishedTimers;
        if (d[c] === undefined) {
            return undefined
        }
        return d[c].length
    };
    b.getTotalTimes = function() {
        var e = b.finishedTimers, d = {};
        for (var c in e) {
            if (e.hasOwnProperty(c)) {
                d[c] = b.getTotalTime(c)
            }
        }
        return d
    };
    b.getTotalTime = function(d) {
        var e, c, g = b.finishedTimers, f = 0;
        if (g[d] === undefined) {
            return undefined
        }
        for (e = 0, c = g[d].length;
        e < c;
        e++) {
            f += g[d][e]
        }
        return f
    };
    b.trackEmbeds = function(f) {
        var e, c, d, g = b.finishedTimers;
        if (typeof fs == "undefined") {
            return
        }
        if (typeof f == "string") {
            f = arguments
        }
        for (e = 0;
        e < f.length;
        e++) {
            (function(h, i) {
                fs.after(f[e], function() {
                    b.markTime("embedsReady");
                    h()
                });
                i && fs.timing(f[e], function(k) {
                    for (var l in k) {
                        if (k.hasOwnProperty(l)) {
                            var j = "fizzy" + l.substr(0, 1).toUpperCase() + l.substr(1) + "DurationMs";
                            g[j] = g[j] || [];
                            g[j].push(k[l])
                        }
                    }
                    i()
                })
            })(b.defer(), fs.timing && b.defer())
        }
    };
    b.defer = function(c) {
        a += 1;
        return function() {
            a -= 1;
            if (a === 0 && b.fire) {
                b.fire()
            }
        }
    };
    b.canFire = function() {
        return a === 0
    };
    if (LI.TalkIn) {
        b.adTimers = [];
        LI.TalkIn.register("adperf", (function(c) {
            return {
                endTimer: function(d) {
                    try {
                        BOOMR.plugins.Ads.endTimer(d)
                    } catch (f) {
                        c.push(d)
                    }
                }
            }
        }(b.adTimers)))
    }
}(LI.RUM));
LI.RUM.monkeyTimeList({
    "fs.embed": "totalFizzyTime",
    "dust.render": "totalDustRenderTime",
    "dust.register": "totalDustTemplateParseTime"
});
LI.define("A11yMenu");
LI.A11yMenu = function(b, a) {
    if (!b) {
        return
    }
    this.container = b;
    this.config = a;
    this.trigger = YDom.get("a11y-skip-nav-link");
    this.searchSelect = YDom.get("main-search-box");
    this.body = document.getElementsByTagName("body")[0];
    this.pageBody = YDom.get("body");
    this.item = 0;
    this.init()
};
LI.A11yMenu.prototype = {
    init: function() {
        if (!YAHOO.env.ua.ie || (YAHOO.env.ua.ie && YAHOO.env.ua.ie > 7)) {
            YEvent.addListener(this.trigger, "focus", this.buildMenu, this, true)
        }
    },
    buildMenu: function() {
        var e = document.getElementsByTagName("h2"), p = document.getElementsByTagName("h3"), o, f, c, m, n, h, g, l = (p.length > 10) ? 10: p.length, a = e.length + l, b = [], k = '<ul id="a11y-toolbar" role="toolbar">' + '<li role="presentation">' + '<a role="button" id="a11y-jump-to-link" aria-haspopup="true" class="a11y" href="#a11y-content">' + this.config.jumpToText + '<span class="more">' + this.config.moreText + "</span></a>" + '<ol id="a11y-sub-menu" role="menu" class="a11y-hidden">', d = "", q = "</ol>" + "</li>" + '<li role="presentation">' + '<a id="a11y-search" class="a11y" href="' + this.config.searchUrl + '"><span>' + this.config.skipToText + "</span></a>" + "</li>" + '<li role="presentation" class="options">' + '<a class="a11y" href="mailto:a11y-feedback@linkedin.com">' + this.config.feedbackText + "</a>" + '<button class="close">' + this.config.closeText + "</button>" + "</li>" + "</ul>";
        for (h = 0;
        h < a;
        h++) {
            if (e[h]) {
                b.push(e[h])
            }
            if (p[h]) {
                b.push(p[h])
            }
        }
        for (g = 1;
        g < a;
        g++) {
            n = b[g];
            if (this.isVisible(n)) {
                c = n.innerHTML;
                f = LI.htmlEncode(this.getText(n.childNodes));
                m = '<span class="a11y-offscreen" id="a11y-header' + g + '" name="a11y-header' + g + '"></span>';
                if (f !== "") {
                    d += '<li role="menuitem"><a class="a11y-jump-item" href="#a11y-header' + g + '">' + f + "</a></li>"
                }
                n.innerHTML = m + c
            }
        }
        if (a < 2 || d === "") {
            d = '<li role="menuitem"><a class="a11y-jump-item" href="#a11y-content-link">' + this.config.smallPageText + "</a></li>"
        }
        o = k + d + q;
        YEvent.removeListener(this.trigger, "focus", this.buildMenu);
        this.container.innerHTML += o;
        this.displayMenu()
    },
    getText: function(b) {
        var c = "", e, d, a;
        for (d = 0, a = b.length;
        d < a;
        d++) {
            e = b[d];
            if (e.nodeType === 3 || e.nodeType === 4) {
                c += e.nodeValue
            } else {
                if (e.nodeType !== 8 && e.nodeName.toUpperCase() !== "SCRIPT") {
                    c += (" " + this.getText(e.childNodes))
                }
            }
        }
        return c
    },
    displayMenu: function() {
        this.trigger = YDom.get("a11y-skip-nav-link");
        this.toolbar = YDom.get("a11y-toolbar");
        this.jumpLink = YDom.get("a11y-jump-to-link");
        this.subMenu = YDom.get("a11y-sub-menu");
        this.searchTrigger = YDom.get("a11y-search");
        YEvent.addListener(this.container, "keydown", this.handleKeyPress, this, true);
        YEvent.addListener(this.trigger, "focus", this.showMenu, this, true);
        YEvent.addListener(this.container, "click", this.handleClick, this, true);
        YEvent.addListener(this.searchTrigger, "focus", this.handleBlur, this, true);
        YEvent.addListener(this.jumpLink, "focus", this.handleFocus, this, true);
        this.showMenu()
    },
    isVisible: function(d) {
        var c = d.parentElement, e = c.parentElement, f = (YDom.getStyle(d, "display") === "none" || YDom.getStyle(c, "display") === "none" || YDom.getStyle(e, "display") === "none") ? true: false, b = (YDom.getStyle(d, "visibility") === "hidden" || YDom.getStyle(c, "visibility") === "hidden" || YDom.getStyle(e, "visibility") === "hidden") ? true: false, a = (YDom.getStyle(d, "text-indent")[0] === "-" || YDom.getStyle(c, "text-indent")[0] === "-" || YDom.getStyle(e, "text-indent")[0] === "-") ? true: false;
        if (f || b || a) {
            return false
        }
        return true
    },
    addBodyMargin: function() {
        YDom.addClass(this.pageBody, "a11y-open");
        YDom.addClass(this.body, "a11y-focus")
    },
    removeBodyMargin: function() {
        YDom.removeClass(this.pageBody, "a11y-open");
        YDom.removeClass(this.body, "a11y-focus")
    },
    hideMenu: function() {
        YDom.addClass(this.container, "a11y-hidden");
        this.removeBodyMargin();
        YEvent.removeListener(window, "scroll", this.hideMenu, this, true);
        this.hideSubMenu()
    },
    hideSubMenu: function() {
        YDom.addClass(this.subMenu, "a11y-hidden")
    },
    showSubMenu: function() {
        YDom.removeClass(this.subMenu, "a11y-hidden")
    },
    showMenu: function() {
        if (!this.toolbar) {
            this.buildMenu();
            return
        }
        this.hideSubMenu();
        YDom.removeClass(this.container, "a11y-hidden");
        this.toolbar.tabIndex =- 1;
        this.toolbar.focus();
        this.addBodyMargin();
        YEvent.addListener(window, "scroll", this.hideMenu, this, true)
    },
    skipToSearch: function() {
        this.hideMenu();
        this.searchSelect.focus()
    },
    handleBlur: function(a) {
        this.hideSubMenu();
        this.removeTabs()
    },
    handleFocus: function(a) {
        this.showSubMenu();
        this.resetTabs()
    },
    resetTabs: function() {
        var b = this.subMenu.getElementsByTagName("a"), c, a;
        for (c = 0, a = b.length;
        c < a;
        c++) {
            YDom.setAttribute(b[c], "tabindex", "0")
        }
    },
    removeTabs: function() {
        var b = this.subMenu.getElementsByTagName("a"), c, a;
        for (c = 0, a = b.length;
        c < a;
        c++) {
            YDom.setAttribute(b[c], "tabindex", "-1")
        }
    },
    handleClick: function(a) {
        var d = YEvent.getTarget(a), c = YDom.getAttribute(d, "href"), b;
        if (c && c.substr(0, 1) === "#" && d !== this.jumpLink&&!YDom.hasClass(d, "close")) {
            b = document.getElementById(c.substr(1)).parentNode
        }
        if (b) {
            b.tabIndex =- 1;
            b.focus();
            this.hideMenu()
        } else {
            if (d === this.jumpLink) {
                YEvent.preventDefault(a);
                this.subMenu.tabIndex =- 1;
                this.subMenu.focus()
            } else {
                if (d === this.searchTrigger || YDom.getAncestorByTagName(d, "a") === this.searchTrigger) {
                    YEvent.preventDefault(a);
                    this.skipToSearch()
                } else {
                    if (YDom.hasClass(d, "close")) {
                        YEvent.preventDefault(a);
                        this.hideMenu()
                    }
                }
            }
        }
    },
    handleKeyPress: function(a) {
        var b = YEvent.getCharCode(a);
        switch (b) {
        case 13:
            this.handleEnter(a);
            break;
        case 27:
            this.handleEsc(a);
            break;
        case 32:
            this.handleSpace(a);
            break;
        case 37:
            this.handleLeft(a);
            break;
        case 38:
            this.handleUp(a);
            break;
        case 39:
            this.handleRight(a);
            break;
        case 40:
            this.handleDown(a);
            break
        }
    },
    handleEnter: function(a) {
        if (YDom.hasClass(this.container, "a11y-hidden")) {
            YEvent.preventDefault(a);
            this.showMenu()
        }
    },
    handleEsc: function(a) {
        var b = YEvent.getTarget(a);
        if (YDom.getAncestorByTagName(b, "ol")) {
            this.jumpLink.focus()
        } else {
            YEvent.preventDefault(a);
            this.hideMenu()
        }
    },
    handleSpace: function(a) {
        YEvent.preventDefault(a);
        this.showMenu()
    },
    handleLeft: function(a) {
        var d = YEvent.getTarget(a), c, b;
        YEvent.preventDefault(a);
        if (!YDom.getAncestorByTagName(d, "ol")) {
            c = YDom.getAncestorByTagName(d, "li");
            b = YDom.getPreviousSibling(c);
            if (b) {
                b.getElementsByTagName("a")[0].focus()
            }
        }
    },
    handleUp: function(a) {
        var d = YEvent.getTarget(a), c, b;
        YEvent.preventDefault(a);
        if (YDom.getAncestorByTagName(d, "ol")) {
            c = YDom.getAncestorByTagName(d, "li");
            b = YDom.getPreviousSibling(c);
            if (b) {
                b.getElementsByTagName("a")[0].focus()
            }
        }
    },
    handleRight: function(a) {
        var d = YEvent.getTarget(a), c, b;
        YEvent.preventDefault(a);
        if (d === this.toolbar) {
            this.toolbar.getElementsByTagName("a")[0].focus()
        } else {
            if (!YDom.getAncestorByTagName(d, "ol")) {
                c = YDom.getAncestorByTagName(d, "li");
                b = YDom.getNextSibling(c);
                if (b) {
                    b.getElementsByTagName("a")[0].focus()
                }
            }
        }
    },
    handleDown: function(a) {
        var d = YEvent.getTarget(a), c, b;
        YEvent.preventDefault(a);
        if (d === this.subMenu || d === this.jumpLink) {
            this.subMenu.getElementsByTagName("a")[0].focus()
        } else {
            if (YDom.getAncestorByTagName(d, "ol")) {
                c = YDom.getAncestorByTagName(d, "li");
                b = YDom.getNextSibling(c);
                if (b) {
                    b.getElementsByTagName("a")[0].focus()
                }
            }
        }
    }
};
(function() {
    LI.define("NodeStash");
    LI.NodeStash = function a() {
        var f = this;
        var e = {
            test: !!window.LI_JS_TEST
        };
        var b = {}, d = 0;
        function c() {
            return "NodeStash#uid:" + (++d)
        }
        f.stash = function(h, g) {
            var i;
            if (!h) {
                return null
            }
            g = (!g && isNaN(g)) ? c() : g;
            i = document.createElement("div");
            i.appendChild(h);
            b[g] = i;
            return {
                uid: g,
                node: h
            }
        };
        f.retrieve = function(g) {
            var h = b[g];
            return h && h.firstChild
        };
        f.remove = function(g) {
            var h = b[g];
            if (h && h.remove) {
                h.remove()
            }
            delete b[g]
        };
        f.publicInterface = {
            stash: f.stash,
            retrieve: f.retrieve,
            remove: f.remove
        };
        if (e.test) {
            f.publicInterface._test = {
                nodes: b
            }
        }
        return f.publicInterface
    }
}());
(function() {
    if (LI.PageVisibility) {
        return
    }
    var b = "hidden";
    var a = "visible";
    var f = "change";
    var e = window.addEventListener, d = document.attachEvent;
    var c = {
        test: !!window.LI_JS_TEST
    };
    function g() {
        var l = this;
        var j, k = [];
        function n(o) {
            if (j) {
                l.hidden = document[j.prop]
            } else {
                l.hidden = /^(?:onfocusout|blur)$/.test((o && o.type) || "")
            }
            LI.PageVisibility.hidden = l.hidden;
            LI.PageVisibility.visibilityState = l.visibilityState = l.hidden ? b : a
        }
        function i() {
            return l.visibilityState
        }
        function h(r) {
            n(r);
            var s = i(), o = k.length, q =- 1, p;
            while (++q < o) {
                p = k[q];
                if (p.state === s || p.state === f) {
                    p.callback.apply((p.scope || window), [r])
                }
            }
        }
        l.on = function(p, q, o) {
            k.push({
                callback: q,
                state: p,
                scope: o
            })
        };
        (function m() {
            var o, p;
            o = [["msHidden", "msvisibilitychange"], ["mozHidden", "mozvisibilitychange"], ["webkitHidden", "webkitvisibilitychange"], ["hidden", "visibilitychange"]];
            p = o.length;
            while (p--) {
                if (o[p][0] in document) {
                    j = {
                        prop: o[p][0],
                        event: o[p][1]
                    };
                    break
                }
            }
            n();
            try {
                if (j && document.addEventListener) {
                    document.addEventListener(j.event, h, false)
                } else {
                    if (e) {
                        e("focus", h, false);
                        e("blur", h, false)
                    } else {
                        if (d) {
                            d("onfocusin", h);
                            d("onfocusout", h)
                        }
                    }
                }
            } catch (q) {}
        }());
        l.publicInterface = {
            on: l.on,
            hidden: l.hidden,
            visibilityState: l.visibilityState
        };
        if (c.test) {
            l.publicInterface._test = {
                events: k,
                trigger: h
            }
        }
        return l.publicInterface
    }
    LI.define("PageVisibility");
    LI.PageVisibility = new g()
}());
(function(b) {
    LI.define("WeightedQueue");
    LI.WeightedQueue = function a(d) {
        var i = this;
        var g = {
            debug: /LI_JS_DEBUG/.test(window.location.hash),
            test: !!window.LI_JS_TEST
        };
        var c = [], h = false;
        function f(k, j) {
            return k.weight - j.weight
        }
        function e() {
            if (h) {
                c = c.sort(d.sort);
                h = false
            }
        }
        d = d || {};
        d.weight = d.weight || 0;
        d.sort = typeof d.sort === "function" ? d.sort : f;
        i.length = function() {
            return c.length
        };
        i.enqueue = function(j, k) {
            c.push({
                weight: (isNaN(k) ? d.weight : k),
                item: j
            });
            h = true
        };
        i.dequeue = function() {
            e();
            return (c.length ? c.pop().item : b)
        };
        i.peek = function() {
            e();
            return (c.length ? c[c.length - 1].item : b)
        };
        i.publicInterface = {
            length: i.length,
            enqueue: i.enqueue,
            dequeue: i.dequeue,
            peek: i.peek
        };
        if (g.debug) {
            i.publicInterface._debug = {
                queue: c
            }
        }
        if (g.test) {
            i.publicInterface._test = {
                queue: c
            }
        }
        return i.publicInterface
    }
}());
(function(d, s) {
    if (LI.GlobalAlertManager) {
        return
    }
    var x = "dismiss";
    var j = 3000;
    var v = 100;
    var p = {
        MAINTENANCE: 1 * v,
        UNKNOWN: 2 * v,
        POLICY: 3 * v,
        APP: 4 * v,
        ACTION: 5 * v
    };
    var u = {
        QUEUE: "global-alert-queue",
        OLD: "global-error"
    };
    var B = {
        "global-maintenance-notice": p.MAINTENANCE,
        "notice-cookie-policy": p.POLICY,
        "notice-privacy": p.POLICY + 1,
        "global-error": p.APP
    };
    var w = {
        injectAlert: LI.injectAlert,
        removeAlert: LI.removeAlert
    };
    var n=!!d, f=!!s, y = f ? s.util.Event : null, o = {}, i = 0, e;
    function A(E) {
        if (E) {
            if (E.nodeType || E.item) {
                return E
            }
            if (typeof E === "string") {
                return document.getElementById(E)
            }
            if (typeof E === "object") {
                if ("length" in E) {
                    var F = [];
                    for (var D = 0, C = E.length;
                    D < C;
                    ++D) {
                        F[F.length] = A(E[D])
                    }
                    return F
                }
            }
            return E
        }
        return null
    }
    function z() {
        function F() {
            var I = document.getElementById("header"), G = document.getElementById("body") || document.body, H = function() {};
            if (I) {
                b.register(document.getElementById("text-ad-container") || document.getElementById("body"));
                G = I;
                H = function(J) {
                    J.className = "wrapper";
                    G.appendChild(J)
                }
            } else {
                if (G) {
                    H = function(J) {
                        G.insertBefore(J, G.firstChild)
                    }
                }
            }
            return {
                attach: H
            }
        }
        function D() {
            var G = document.createElement("div");
            G.id = u.QUEUE;
            o[u.QUEUE] = G;
            return G
        }
        var C = F(), E = D();
        C.attach(E);
        e = true
    }
    function t(C) {
        if (!e) {
            z()
        }
        o[C] = o[C] || document.getElementById(C);
        return o[C]
    }
    function a(C) {
        var D = t(u.QUEUE);
        C = A(C);
        if (C === t(u.OLD)) {
            return D
        }
        return C || D
    }
    function c(C) {
        return (C === t(u.QUEUE))
    }
    function h(D) {
        var C = {
            idx: (D === "inject") ? 2: 0,
            method: (D || "remove") + "Alert"
        };
        return function() {
            var F = [].slice.apply(arguments), E = l(F[0])&&!r(F[0]), G = a(E ? F[0].node : F[C.idx]);
            if (E) {
                F[0].node = G
            } else {
                F[C.idx] = G
            }
            var H = c(G) ? LI.GlobalAlertManager: w;
            return H[C.method].apply(this, F)
        }
    }
    function g(C) {
        return typeof C === "undefined" ? p.ACTION : (p[C] || C || 0)
    }
    function r(C) {
        return !!(C && C.nodeType === 1)
    }
    function l(C) {
        return C === Object(C)
    }
    function m(E) {
        var F = (E && E.childNodes) || [], D, C;
        for (D = 0, C = F.length;
        D < C;
        D++) {
            E = F[D];
            if (r(E)) {
                return E
            }
        }
        return null
    }
    var q;
    (function() {
        var C = {};
        q = {
            bind: function(D, E, F) {
                D = C[D] = C[D] || {};
                E = D[E] = D[E] || [];
                E.push(F)
            },
            fire: function(E, H) {
                if (q.paused) {
                    return
                }
                var G = (C[E] || {})[H] || [];
                for (var F = 0, D = G.length;
                F < D;
                F++) {
                    G[F]()
                }
            },
            pause: function() {
                q.paused = true
            },
            resume: function(D) {
                q.paused = false;
                if (D) {
                    D()
                }
            }
        }
    }());
    var b;
    (function() {
        var D = [];
        function C(G) {
            var F = "margin-top", H = G.offset;
            if (isNaN(H)) {
                if (n) {
                    H = d(G.node).css(F)
                } else {
                    if (f) {
                        H = YDom.getStyle(G.node, F)
                    }
                }
                H = parseInt(H, 10) || 0;
                G.offset = H
            }
            return H
        }
        function E(I) {
            var F = 0, J, L, K, G, H = D.length;
            if (I) {
                if (n) {
                    F = I ? d(I).outerHeight() : 0
                } else {
                    if (f) {
                        F = YDom.getRegion(I).height || 0;
                        J = parseInt(YDom.getStyle(I, "margin-top"), 10) || 0;
                        L = parseInt(YDom.getStyle(I, "margin-bottom"), 10) || 0;
                        F = F + J + L
                    }
                }
            }
            while (H--) {
                G = D[H];
                if (G && ("style" in G.node)) {
                    G.node.style.marginTop = (C(G) + F) + "px"
                }
            }
        }
        b = {
            shift: function(F) {
                E(F)
            },
            restore: function() {
                E(null)
            },
            register: function(F) {
                if (!F) {
                    return
                }
                F = ("length" in F) ? F : [F];
                F = A(F);
                var G = F.length;
                while (G--) {
                    if (F[G]) {
                        D.push({
                            node: F[G]
                        })
                    }
                }
            }
        }
    }());
    function k() {
        var N = this;
        var I = {
            debug: /LI_JS_DEBUG/.test(window.location.hash),
            test: !!window.LI_JS_TEST
        };
        var J = /<(span|a|button)[^>]+class\s*=\s*['\"]?[^'\"]*?\bdismiss\b/i;
        var D = /<a/i;
        var G = new LI.WeightedQueue();
        var C = new LI.NodeStash();
        var M;
        var F = document.createElement("div");
        function L() {
            C.remove(M.meta.uid);
            G.dequeue();
            N.showTopAlert()
        }
        function O() {
            if (M) {
                C.stash(M.contents, M.meta.uid)
            }
            return M
        }
        var H;
        (function() {
            var W, R = 0, T = 0;
            var V = Date.now || function() {
                return + new Date()
            };
            function U() {
                var X, Y;
                if (!M ||!M.autoHide) {
                    return null
                }
                X = M.autoHide;
                if (isNaN(X) || X === true) {
                    X = j;
                    Y = M.contents;
                    if (Y) {
                        Y = Y.textContent || Y.innerText || "";
                        X += Y.length * 55
                    }
                }
                return X
            }
            function S() {
                var Y, X;
                Q();
                if (M) {
                    Y = U();
                    if (Y) {
                        T = V();
                        X = Math.max(j, Y - R);
                        W = window.setTimeout(function() {
                            N.removeAlert()
                        }, X)
                    }
                }
            }
            function Q() {
                window.clearTimeout(W);
                W = null
            }
            H = {
                clear: function() {
                    R = 0;
                    Q()
                },
                start: S,
                resume: S,
                stop: Q,
                pause: function() {
                    R += Math.max(V() - T, 0);
                    Q()
                }
            }
        }());
        N.showTopAlert = function() {
            var V = t(u.QUEUE), T = O(), R = 0, U, Q;
            function S() {
                q.fire(M.meta.origin, "view")
            }
            if (G.length()) {
                M = G.peek();
                if (!(T && T.meta.uid === M.meta.uid)) {
                    H.clear();
                    U = M.contents;
                    V.appendChild(U);
                    b.shift(M.autoHide ? null : U);
                    w.injectAlert.animate(V, H.start);
                    if (q.paused) {
                        return S
                    } else {
                        S()
                    }
                } else {
                    V.appendChild(M.contents)
                }
            } else {
                H.clear();
                w.removeAlert(V, true);
                b.restore()
            }
            return null
        };
        N.normalizeAlert = function(T, S) {
            var R = {};
            function Q(U) {
                R.meta = {
                    weight: g(S),
                    uid: ++i
                };
                if (typeof R.contents === "undefined") {
                    F.innerHTML = U;
                    R.contents = m(F)
                }
                R.isDismissable = J.test(U);
                R.autoHide = R.isDismissable&&!D.test(U)
            }
            if (r(T)) {
                R.contents = T;
                F.innerHTML = "";
                Q(F.appendChild(T).innerHTML)
            } else {
                if (l(T)) {
                    R = T
                } else {
                    if (typeof T === "string") {
                        Q(T)
                    }
                }
            }
            return R
        };
        N.enqueue = function(S, R, Q) {
            if (!S) {
                return null
            }
            S = N.normalizeAlert(S, R);
            if (S && S.meta) {
                S.meta.origin = Q;
                if (M && M.meta.weight === S.meta.weight) {
                    L()
                }
                G.enqueue(S, S.meta.weight);
                q.fire(Q, "enqueue");
                return N.showTopAlert()
            }
            return null
        };
        N.dequeue = function() {
            if (M && M.isDismissable) {
                L()
            }
        };
        N.injectAlert = function() {
            var S = {}, Q = w.injectAlert.normalizeInterface.apply(this, arguments), R;
            O();
            Q.weight = g(Q.weight);
            Q.disableDismissHandler = true;
            Q.animate = true;
            S.meta = {
                weight: Q.weight,
                uid: ++i
            };
            S.isDismissable=!!Q.dismissable;
            S.autoHide = typeof Q.autoHide !== "undefined" ? Q.autoHide : S.isDismissable&&!D.test(Q.message || "");
            R = w.injectAlert(Q);
            S.contents = R.firstChild;
            C.stash(S.contents, S.meta.uid);
            N.enqueue(S, Q.weight, Q.origin || "injectAlert");
            return t(u.QUEUE)
        };
        N.removeAlert = function() {
            N.dequeue();
            if (M && M.meta) {
                q.fire(M.meta.origin, "remove")
            }
            N.showTopAlert()
        };
        N.attachEventHandlers = function() {
            var S = t(u.QUEUE), Q;
            function R() {
                q.fire(M.meta.origin, "dismiss");
                N.removeAlert()
            }
            if (n) {
                d(S).on("click", "." + x, function(T) {
                    R()
                }).on("mouseenter focus", H.pause).on("mouseleave blur", H.resume)
            } else {
                if (f) {
                    Q = function(T, U) {
                        y.on(S, T, U)
                    };
                    Q(S, "click", function(T) {
                        if (YDom.hasClass(y.getTarget(T), x)) {
                            R()
                        }
                    });
                    Q("mouseenter", H.pause);
                    Q("focus", H.pause);
                    Q("mouseleave", H.resume);
                    Q("blur", H.resume)
                }
            }
        };
        N.enqueueExistingAlerts = function() {
            var S, R, Q;
            q.pause();
            for (S in B) {
                if (B.hasOwnProperty(S)) {
                    R = document.getElementById(S);
                    Q = N.enqueue(m(R), g(B[S]), S) || Q
                }
            }
            q.resume(Q)
        };
        N.on = function(Q, R, S) {
            q.bind(Q, R, S)
        };
        N.trigger = function(Q, R) {
            q.fire(Q, R)
        };
        N.EnqueueAlertNode = function(R, Q) {
            Q = Q || {};
            N.enqueue(R, Q.weight || p.UNKNOWN, Q.origin || R.id)
        };
        function K() {
            N.attachEventHandlers();
            N.enqueueExistingAlerts()
        }
        function E() {
            if (n) {
                d(K)
            } else {
                if (f) {
                    y.onDOMReady(K)
                }
            }
        }(function P() {
            var Q = LI.PageVisibility;
            if (Q) {
                Q.on("hidden", H.pause);
                Q.on("visible", H.resume)
            }
            if (!I.test) {
                E()
            }
        }());
        N.publicInterface = {
            injectAlert: N.injectAlert,
            removeAlert: N.removeAlert,
            trigger: N.trigger,
            on: N.on,
            EnqueueAlertNode: N.EnqueueAlertNode
        };
        if (I.debug) {
            N.publicInterface._debug = {
                queue: G
            }
        }
        if (I.test) {
            N.publicInterface._test = {
                queue: G,
                domReady: K
            }
        }
        return N.publicInterface
    }
    LI.define("GlobalAlertManager");
    LI.GlobalAlertManager = new k();
    LI.injectAlert = h("inject");
    LI.removeAlert = h("remove")
}(window.jQuery, window.YAHOO));
