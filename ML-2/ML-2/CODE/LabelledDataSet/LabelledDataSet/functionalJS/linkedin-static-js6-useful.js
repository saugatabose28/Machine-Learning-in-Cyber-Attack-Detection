LI.define("Discovery");
LI.Discovery = function(b, a) {
    if (!b) {
        return
    }
    this.module = b;
    this.config = a;
    this.highlightedItem = 0;
    this.numVisible = this.config.numVisible || 4;
    this.pageWidth = this.config.pageWidth || 244;
    this.itemWidth = this.config.itemWidth || 61;
    this.currentItemWidth = this.config.currentItemWidth || 65;
    this.panelWidth = this.config.panelWidth || 278;
    this.peekWidth = this.config.peekWidth || 27;
    this.peek = "right";
    this.startMargin = 0;
    this.sliderOffset = this.config.sliderOffset || 0;
    this.panel = Y$(".discovery-panel", this.module, true);
    this.tabSlider = this.module.getElementsByTagName("ol")[0];
    this.detailList = this.tabSlider.getElementsByTagName("dl");
    this.navNext = YDom.get(this.config.navNext) || Y$(".discovery-next", this.module, true);
    this.navPrevious = YDom.get(this.config.navPrevious) || Y$(".discovery-prev", this.module, true);
    this.itemList = this.tabSlider.getElementsByTagName("li");
    this.imgList = this.tabSlider.getElementsByTagName("img");
    this.loader = Y$(".discovery-spinner", this.module, true);
    this.itemCount = this.itemList.length;
    this.prefetchedPages = this.config.prefetchedPages || 3;
    this.startPage = 0;
    this.currentPage = 0;
    this.maxPages = this.itemCount%this.numVisible === 0 ? (Math.floor(this.itemCount / this.numVisible) - 1) : Math.floor(this.itemCount / this.numVisible);
    this.timer = null;
    this.endpoint = this.config.endpoint || "";
    this.offset =+ this.config.offset || 0;
    this.fetch = this.config.fetch || false;
    this.fetches = [];
    this.fetchParams = this.config.fetchParams || {};
    this.vieweeId = this.config.viewerId || LI.getQueryStringParam("id");
    this.template = this.config.template;
    this.max =+ this.config.max || false;
    this.rootContext = this.config.rootContext || "RightTop.discovery.people";
    this.offsetKey = this.config.offsetKey || "offset";
    this.recordsKey = this.config.recordsKey || "records";
    this.panelTransitions = this.config.panelTransitions || false;
    this.nextEvent = new YAHOO.util.CustomEvent("next", this);
    this.prevEvent = new YAHOO.util.CustomEvent("prev", this);
    if (a.legacy) {
        this.init = function() {
            YEvent.addListener(this.module, "click", this.handleClick, this, true);
            YEvent.addListener(this.module, "focusin", this.handleFocus, this, true);
            YEvent.addListener(this.imgList, "mouseover", this.handleHover, this, true);
            YEvent.addListener(this.imgList, "mouseout", this.clearTimer, this, true);
            this.setupNav();
            this.setupTabs();
            this.setupIndex();
            this.updateHighlight()
        };
        this.handleClick = function(c) {
            if (YEvent.getTarget(c) === this.navNext) {
                if (this.currentPage < this.maxPages) {
                    this.goNext()
                } else {
                    if (this.fetch) {
                        this.fetchMore()
                    }
                }
            }
            if (YEvent.getTarget(c) === this.navPrevious) {
                if (this.currentPage > this.startPage) {
                    this.goBack()
                }
            }
        };
        this.handleHover = function(d) {
            var e = this, f = YEvent.getTarget(d), c = LI.getDataAttribute(f.parentNode.parentNode, "index");
            this.timer = setTimeout(function() {
                e.updateHighlight(c)
            }, 300)
        };
        this.goNext = function() {
            this.currentPage++;
            this.startMargin = this.startMargin - this.pageWidth;
            YDom.setStyle(this.tabSlider, "margin-left", this.startMargin + "px");
            this.setupNav();
            this.updateHighlight();
            this.setupTabs()
        };
        this.goBack = function() {
            this.currentPage--;
            this.startMargin = this.startMargin + this.pageWidth;
            YDom.setStyle(this.tabSlider, "margin-left", this.startMargin + "px");
            this.setupNav();
            this.updateHighlight();
            this.setupTabs()
        };
        this.fetchMore = function() {
            var c, k, i, g, e, f, h, m, d, l, j;
            c = this.endpoint;
            i = (this.currentPage * this.numVisible) + this.numVisible + this.offset;
            g = this.numVisible * 2;
            e = this.fetchParams;
            f = this.vieweeId;
            j = "";
            h = {
                id: f,
                offset: i,
                records: g
            };
            for (k in e) {
                if (e.hasOwnProperty(k)) {
                    h[k] = e[k]
                }
            }
            for (k in h) {
                if (h.hasOwnProperty(k)) {
                    j += k + "=" + h[k] + "&"
                }
            }
            m = function(o) {
                var n;
                if (o.responseText) {
                    n = o.responseText.RightTop || o.responseText.Discovery || o.responseText
                }
                if ((n && n.discovery && n.discovery.people && n.discovery.people.length < this.numVisible) || (this.max && this.max <= this.itemCount + this.offset + this.numVisible)) {
                    this.fetch = false;
                    this.setupNav()
                }
                if (n && n.discovery && n.discovery.people && n.discovery.people.length > 0) {
                    n.discovery.people = n.discovery.people.splice(0, this.numVisible);
                    this.itemCount = this.itemCount + this.numVisible;
                    this.maxPages++;
                    this.renderMore(n);
                    this.setupIndex();
                    this.goNext()
                }
                LI.hide(this.loader)
            };
            d = function() {
                LI.hide(this.loader)
            };
            l = {
                success: m,
                failure: d,
                scope: this
            };
            LI.show(this.loader);
            LI.asyncRequest("POST", c, l, j)
        };
        this.renderMore = function(d) {
            var c = this.tabSlider;
            YEvent.purgeElement(this.tabSlider, true);
            dust.render(this.template, d.discovery, function(f, e) {
                c.innerHTML += e
            });
            YEvent.addListener(this.imgList, "mouseover", this.handleHover, this, true);
            YEvent.addListener(this.imgList, "mouseout", this.clearTimer, this, true)
        }
    }
    this.init()
};
LI.Discovery.prototype = {
    init: function() {
        var a = this.prefetchedPages * this.numVisible, b = this.itemCount;
        if (a !== b) {
            this.fetch = false
        }
        YDom.addClass(this.module, "discovery-peek-right");
        YEvent.addListener(this.module, "click", this.handleClick, this, true);
        YEvent.addListener(this.module, "focusin", this.handleFocus, this, true);
        YEvent.addListener(this.module, "mouseover", this.handleMouseOver, this, true);
        YEvent.addListener(this.module, "mouseout", this.handleMouseOut, this, true);
        this.setupNav();
        this.setupTabs();
        this.setupIndex();
        this.updateHighlight()
    },
    handleClick: function(a) {
        if (YEvent.getTarget(a) === this.navNext) {
            if (this.fetches.length && this.currentPage === this.maxPages - 1) {
                YDom.addClass(this.module, "discovery-loading")
            } else {
                if (this.fetch) {
                    if (this.currentPage + this.prefetchedPages >= this.maxPages && this.currentPage < this.maxPages) {
                        this.goNext();
                        this.fetchMore()
                    } else {
                        if (this.currentPage + this.prefetchedPages < this.maxPages) {
                            this.goNext()
                        } else {
                            if (this.currentPage === this.maxPages) {
                                this.fetchMore(true)
                            }
                        }
                    }
                } else {
                    if (this.currentPage < this.maxPages) {
                        this.goNext()
                    }
                }
            }
        }
        if (YEvent.getTarget(a) === this.navPrevious) {
            if (this.currentPage > this.startPage) {
                this.goBack()
            }
        }
    },
    handleFocus: function(b) {
        var a;
        if (YEvent.getTarget(b).parentNode.parentNode === this.tabSlider) {
            a = LI.getDataAttribute(YEvent.getTarget(b).parentNode, "index");
            this.updateHighlight(a)
        }
    },
    clearTimer: function() {
        if (this.timer) {
            clearTimeout(this.timer)
        }
    },
    handleMouseOver: function(c) {
        var d = this, f = YEvent.getTarget(c), b = parseInt(LI.getDataAttribute(YDom.getAncestorByTagName(f, "li"), "index"), 10), e = (this.currentPage + 1) * this.numVisible, a = (this.currentPage) * this.numVisible;
        if (b >= 0) {
            this.timer = setTimeout(function() {
                if (d.peek === "right" && b === e) {
                    d.goTo(b, "right")
                } else {
                    if (d.peek === "left" && b === a) {
                        d.goTo(b)
                    }
                }
                d.updateHighlight(b)
            }, 250)
        }
    },
    handleMouseOut: function() {
        this.clearTimer()
    },
    emitEvent: function(b) {
        var a = b + "Event";
        if (this[a]) {
            this[a].fire({
                currentPage: this.currentPage,
                maxPages: this.maxPages,
                itemsPerPage: this.numVisible,
                totalItems: this.itemCount
            })
        }
    },
    goNext: function() {
        this.currentPage++;
        this.fetchDeferredImages();
        this.goTo(this.currentPage * this.numVisible);
        this.updateHighlight();
        this.setupNav();
        this.setupTabs();
        this.emitEvent("next")
    },
    goBack: function() {
        this.currentPage--;
        this.goTo(this.currentPage * this.numVisible);
        this.updateHighlight();
        this.setupNav();
        this.setupTabs();
        this.emitEvent("prev")
    },
    goTo: function(a, b) {
        b = b || "left";
        if (a >= 0) {
            if (b === "left") {
                this.peek = "right";
                YDom.addClass(this.module, "discovery-peek-right");
                YDom.removeClass(this.module, "discovery-peek-left");
                this.startMargin =- (a * (this.itemWidth + this.sliderOffset))
            } else {
                this.peek = "left";
                YDom.addClass(this.module, "discovery-peek-left");
                YDom.removeClass(this.module, "discovery-peek-right");
                this.startMargin =- ((a - this.numVisible) * (this.itemWidth + this.sliderOffset) + this.peekWidth)
            }
            YDom.setStyle(this.tabSlider, "margin-left", this.startMargin + "px")
        }
    },
    setupNav: function() {
        if ((this.itemCount <= this.numVisible&&!this.fetch) || (this.itemCount < this.numVisible) || (this.max && this.max - this.offset <= this.numVisible)) {
            this.hideNav()
        } else {
            if (this.currentPage === this.startPage) {
                YDom.addClass(this.navPrevious, "disabled");
                YDom.removeClass(this.navNext, "disabled")
            } else {
                if ((this.currentPage === this.maxPages&&!this.fetch) || (this.max && this.max <= this.itemCount + this.offset)) {
                    YDom.addClass(this.navNext, "disabled");
                    YDom.removeClass(this.navPrevious, "disabled")
                } else {
                    YDom.removeClass(this.navNext, "disabled");
                    YDom.removeClass(this.navPrevious, "disabled")
                }
            }
        }
    },
    setupTabs: function() {
        var d, b = this.itemList, c, a;
        for (c = 0, a = this.itemCount;
        c < a;
        c++) {
            if (b[c]) {
                d = Y$("a", this.itemList[c], true);
                if (d) {
                    YDom.setAttribute(this.itemList[c].getElementsByTagName("a")[0], "tabindex", "-1")
                }
            }
        }
        for (c = this.currentPage * this.numVisible, a = c + this.numVisible;
        c < a;
        c++) {
            if (this.itemList[c]) {
                d = Y$("a", this.itemList[c], true);
                if (c < this.itemCount && d) {
                    YDom.setAttribute(this.itemList[c].getElementsByTagName("a")[0], "tabindex", "0")
                }
            }
        }
    },
    setupIndex: function() {
        for (var a = 0;
        a < this.itemCount;
        a++) {
            if (this.itemList[a]) {
                LI.setDataAttribute(this.itemList[a], "index", a)
            }
        }
    },
    updateHighlight: function(a) {
        YDom.removeClass(this.detailList[this.highlightedItem], "selected");
        YDom.removeClass(this.itemList[this.highlightedItem], "discovery-active");
        if (a) {
            this.highlightedItem = a
        } else {
            this.highlightedItem = this.currentPage * this.numVisible
        }
        YDom.addClass(this.detailList[this.highlightedItem], "selected");
        YDom.addClass(this.itemList[this.highlightedItem], "discovery-active");
        if (this.panelTransitions) {
            this.panel.className = "discovery-panel";
            YDom.addClass(this.panel, LI.getDataAttribute(this.itemList[this.highlightedItem], "type") + "-active")
        }
    },
    fetchMore: function(n) {
        var a = this.endpoint, k = this.itemCount + this.offset, g = (this.currentPage - this.maxPages + this.prefetchedPages) * this.numVisible, e = this.fetchParams, f = this.vieweeId, b = "", j, d, o, m, h;
        if (this.fetches.length) {
            for (m = 0, h = this.fetches.length;
            m < h;
            m += 1) {
                k += this.fetches[m];
                g -= this.fetches[m]
            }
        }
        this.fetches.push(g);
        j = {};
        if (f) {
            j.id = f
        }
        j[this.offsetKey] = k;
        j[this.recordsKey] = g;
        for (o in e) {
            if (e.hasOwnProperty(o)) {
                j[o] = e[o]
            }
        }
        for (o in j) {
            if (j.hasOwnProperty(o)) {
                b += o + "=" + j[o] + "&"
            }
        }
        function p(s) {
            var y = s.responseText, w = y, u = 0, z, r, t, v, x = this.max, q = this.offset, l = this.itemCount, A = this.numVisible;
            if (y && y.Discovery) {
                this.rootContext = "Discovery.discovery.people"
            }
            if (w) {
                r = this.rootContext.split(".");
                for (t = 0, v = r.length;
                t < v;
                t++) {
                    if (!w[r[t]]) {
                        break
                    }
                    z = w;
                    w = w[r[t]]
                }
                u = w.length || 0
            }
            this.fetches.shift();
            if (u < A || x && x <= l + q + A) {
                this.fetch = false
            }
            if (YAHOO.lang.isArray(w) && u > 0) {
                this.itemCount += u;
                this.maxPages += Math.ceil(u / A);
                this.renderMore(z);
                this.setupIndex();
                this.setupNav()
            }
            if ((n && u > 0) || YDom.hasClass(this.module, "discovery-loading")) {
                this.goNext();
                if (this.fetch && YDom.hasClass(this.module, "discovery-loading")) {
                    this.fetchMore()
                }
            }
            YDom.removeClass(this.module, "discovery-loading")
        }
        function c() {
            this.fetches.shift();
            YDom.removeClass(this.module, "discovery-loading")
        }
        d = {
            success: p,
            failure: c,
            scope: this
        };
        if (n) {
            YDom.addClass(this.module, "discovery-loading")
        }
        LI.asyncRequest("POST", a, d, b)
    },
    renderMore: function(e) {
        var d = this.tabSlider, c = document.createElement("div"), f = document.createDocumentFragment(), b, a;
        dust.render(this.template, e, function(h, g) {
            c.innerHTML = g;
            for (b = 0, a = c.children.length;
            b < a;
            b += 1) {
                f.appendChild(c.children[0])
            }
            d.appendChild(f)
        })
    },
    fetchDeferredImages: function() {
        var b = this.imgList, a = b.length, d, c, e;
        for (d = 0;
        d < a;
        d++) {
            c = b[d];
            e = c.getAttribute("data-li-src");
            if (e && e !== c.src) {
                c.src = e
            }
        }
    },
    hideNav: function() {
        LI.hide(this.navNext);
        LI.hide(this.navPrevious)
    }
};
LI.define("RecentActivities");
LI.RecentActivities = function(g, b) {
    var f, e, d;
    if (!g ||!b) {
        return
    }
    f = g, e = "discovery-photo", d = "li-trkcode";
    function c() {
        YEvent.on(f, "mouseover", h)
    }
    function h(i) {
        var l = YEvent.getTarget(i), k = l.tagName === "A" ? l: YDom.getAncestorByTagName(l, "A"), j = "";
        if (k && YDom.hasClass(k, e)) {
            j = LI.getDataAttribute(k, d);
            if (WebTracking && j) {
                WebTracking.trackUserAction(j)
            }
        }
    }(function a() {
        c()
    })()
};
LI.define("ShareStats");
LI.ShareStats = function(c, aG) {
    var E, bb, bu, ap, br, A, az, y, aZ, O, ax, aj, ah, aE, n, bo, R, ab, bf, l, I, aP, v, H, m, a5, aw, aK, aF, a4, W, bd, N, a3, aq, e, bk, bm, bq, ai, a9, aS, J, j, bg, ak, q, aU, w, k, ac, bs, S, B, at, r, T, ae, ay, ag, K, aD, be, i, C, L, b, aJ, bi, al, a8, aO, bn, aa, aL, au, a1, U, ar, o, bc, aR, M, aV, aY, a;
    if (!c ||!aG) {
        return
    }
    aG = {
        idStats: aG.idStats || "",
        idUpdate: aG.idUpdate || "",
        idCallout: aG.idCallout || "",
        idShareDetails: aG.idShareDetails || "",
        instructionsLabel: aG.instructionsLabel || "",
        viewsOnlyTotal: aG.viewsOnlyTotal || "",
        viewsOnlyLabel: aG.viewsOnlyLabel || "",
        dataViews: aG.dataViews || ["", 0, 0, 0],
        dataLikes: aG.dataLikes || ["", 0, 0, 0],
        dataComments: aG.dataComments || ["", 0, 0, 0],
        dataReshares: aG.dataReshares || ["", 0, 0, 0],
        totalsFormatted: aG.totalsFormatted || ["", "", "", ""],
        memberPhotoURL: aG.memberPhotoURL,
        isViewsOnly: aG.isViewsOnly || false,
        isConnectionsOnly: aG.isConnectionsOnly || false,
        isNo2ndDegree: aG.isNo2ndDegree || false,
        isNo3rdDegree: aG.isNo3rdDegree || false,
        isAggregate: aG.isAggregate || false,
        isShareTeaser: aG.isShareTeaser || false,
        isInitialEntry: aG.isInitialEntry || false,
        SVGAriaLabel: aG.SVGAriaLabel || "",
        SVGDesc: aG.SVGDesc || "",
        locale: aG.locale || "",
        isBufferLazyLoad: aG.isBufferLazyLoad || false
    };
    E = aG.idStats, bb = aG.idUpdate, bu = aG.idCallout, ap = aG.idShareDetails, br = "callout-overlay", A = "share-stats-widget", az = "callout-content", y = "carousel-entry", aZ = "carousel-viewport", O = "comment", ax = "content-inner", aj = "share-teaser-overlay", ah = "transparent-overlay", aE = "wvyu-callout-content", n = 105, bo = 185, R = 78, ab = 70, bf = 22, l = 12, I = 4, aP = I + 2, v = 30, H = 100, m = {
        "DEFAULT": 278
    }, a5 = {
        "DEFAULT": 290,
        "SHARE_TEASER": 204,
        "VIEWS_ONLY": 220,
        "AGGREGATE": 312
    }, aw = {
        "LEGEND": "LEGEND",
        "NETWORK": "NETWORK"
    }, aK = {
        "FIRST": "1ST",
        "SECOND": "2ND",
        "THIRD": "3RD"
    }, aF = {
        "LEGEND": "LEGEND",
        "NETWORK_DOT": "NETWORK_DOT"
    }, a4 = {
        "VIEWS": "VIEWS",
        "LIKES": "LIKES",
        "COMMENTS": "COMMENTS",
        "RESHARES": "RESHARES"
    }, W = {
        "DEFAULT": "DEFAULT",
        "VIEWS_AND_CONNECTIONS": "VIEWS_AND_CONNECTIONS",
        "VIEWS_ONLY": "VIEWS_ONLY",
        "CONNECTIONS_ONLY": "CONNECTIONS_ONLY",
        "NO_2ND_DEGREE_AND_NO_3RD_DEGREE": "NO_2ND_DEGREE_AND_NO_3RD_DEGREE",
        "NO_3RD_DEGREE": "NO_3RD_DEGREE"
    }, bd = {
        "DEFAULT": "DEFAULT",
        "AGGREGATE": "AGGREGATE"
    }, N = {
        "ENGLISH": "en_US",
        "FRENCH": "fr_FR"
    }, a3 = "#7A30CE", aq = "#6A9530", e = "#DD6423", bk = "#E31D74", bm = {
        "fill": "#333",
        "font-family": "Helvetica",
        "font-size": "32",
        "text-anchor": "start"
    }, bq = {
        "fill": "#333",
        "font-family": "Helvetica",
        "font-size": "13",
        "text-anchor": "start"
    }, ai = {
        "fill": "url(" + aG.memberPhotoURL + ")",
        "stroke": "transparent"
    }, a9 = {
        "stroke": "#333"
    }, aS = {
        "fill": "#FFF",
        "stroke": "#333",
        "stroke-dasharray": ". "
    }, J = {
        "fill": "#FFF"
    }, j = {
        "fill": "#CCE9FF"
    }, bg = {
        "stroke": "#2E8DD7",
        "stroke-dasharray": ""
    }, ak = {
        "fill": a3,
        "stroke-width": "0"
    }, q = {
        "fill": a3,
        "stroke": a3
    }, aU = {
        "fill": aq,
        "stroke": aq
    }, w = {
        "fill": e,
        "stroke": e
    }, k = {
        "fill": bk,
        "stroke": bk
    }, ac = {
        "fill": "none",
        "stroke": a3
    }, bs = {
        "fill": "none",
        "stroke": aq
    }, S = {
        "fill": "none",
        "stroke": e
    }, B = {
        "fill": "none",
        "stroke": bk
    }, at = {
        "stroke": "#999"
    }, r = {
        "fill": "#999",
        "font-size": "11",
        "text-anchor": "end"
    }, T = {
        "cursor": "default",
        "fill": "#FFF",
        "font-family": "Helvetica",
        "font-size": "32",
        "text-anchor": "start"
    }, ae = {
        "cursor": "default",
        "fill": "#FFF",
        "font-size": "13",
        "text-anchor": "start"
    }, ay = "balloon-callout-type", ag = aK.FIRST.concat("-", aw.NETWORK), K = aK.SECOND.concat("-", aw.NETWORK), aD = aK.THIRD.concat("-", aw.NETWORK), be = "li-trkcode", L = W.DEFAULT, b = bd.DEFAULT, aJ = c, bi = null, al = null, a8 = null, aO = {}, bn = YDom.get(bb), aa = YDom.get(bu), aL = aa ? YDom.getElementsByClassName(az, "div", aa)[0] : null, au = YDom.get(A), a1 = {}, U = {
        "circle": null,
        "degree": null,
        "setDots": null,
        "setDotsOutline": null
    }, ar = false, bc = null, aR = 200, M = 500;
    aV = [];
    function af() {
        var bv = YDom.get(br), bw = YDom.getElementsByClassName(O, "a", bn)[0];
        YEvent.on(bv, "mouseover", function(bx) {
            if (YDom.hasClass(this, bu)) {
                clearTimeout(bc)
            }
            ao(bx)
        });
        YEvent.on(bv, "mouseout", function() {
            if (YDom.hasClass(this, bu)) {
                clearTimeout(bc);
                bt()
            }
        });
        YEvent.on(bw, "mouseover", function() {
            clearTimeout(bc);
            s()
        });
        ar = true
    }
    function g(bv, by) {
        var bx = bv.data("typeAction"), bw = bx ? ("nmp_wvmu_dot_" + by + "_" + bx + "_hover").toLowerCase(): ("nmp_wvmu_lowstate_" + by + "_circle_hover").toLowerCase();
        if (!aV[bw] && WebTracking) {
            aV[bw] = true;
            WebTracking.trackUserAction(bw)
        }
    }
    function aI(bz, bB, bA, by, bv) {
        var bx = null, bw = null;
        if (!V()) {
            bx = function() {
                aH(this, bB, bA, by, bv);
                g(this, bA)
            };
            bw = function() {
                bt()
            };
            bz.hover(bx, bw);
            bv.hide()
        }
    }
    function f(bv, bz, by, bx) {
        var bw = bi.circle(bv, bz, I).data("typeAction", by);
        bw.data(ay, bx.concat("-", by));
        switch (by) {
        case a4.VIEWS:
            return bw.attr(q);
        case a4.LIKES:
            return bw.attr(aU);
        case a4.COMMENTS:
            return bw.attr(w);
        case a4.RESHARES:
            return bw.attr(k);
        default:
            return {}
        }
    }
    function G(bv, by, bx) {
        var bw = bi.circle(bv, by, aP);
        switch (bx) {
        case a4.VIEWS:
            return bw.attr(ac);
        case a4.LIKES:
            return bw.attr(bs);
        case a4.COMMENTS:
            return bw.attr(S);
        case a4.RESHARES:
            return bw.attr(B);
        default:
            return {}
        }
    }
    function aB(bv, bw) {
        bi.path("M" + bv + "," + bw + " " + "h" + l).attr(a9)
    }
    function an(bz, by) {
        var bv = 0, bC = 0, bw = 0, bD = 0, bB = 0, bA = 0, bx = "", bE = "";
        al = bi.set();
        if (b === bd.AGGREGATE) {
            bv = bz + 192;
            bC = bv - 5;
            bw = bv + 20;
            bD = by - 15;
            bB = bD - 2;
            bA = bD - 33;
            bx = "l-8,1 l2,-8";
            bE = "c0,0,19,-10,9,-21"
        } else {
            bv = bz + 35;
            bC = bv - 15;
            bw = bv - 13;
            bD = by + 75;
            bB = bD + 8;
            bA = bD;
            bx = "l8,-3 l0,8";
            bE = "c0,0,10,10,20,-7"
        }
        al.push(bi.path("M" + bv + "," + bD + " " + bx + " " + "M" + bC + "," + bB + " " + bE).attr(at), bi.text(bw, bA, aG.instructionsLabel).attr(r));
        return al
    }
    function Y(bx, bw) {
        var bD = d(aF.LEGEND), bB = bD.length, bv = "", bA = 0, bE = 0, bF = 0, bC = {
            "dot": 0,
            "total": 0,
            "label": 0
        }, bz = {
            "dot": 0,
            "total": 0,
            "label": 0
        };
        bz.dot = bw - 124;
        bz.total = bw - 150;
        bz.label = bw - 125;
        for (var by = 0;
        by < bB;
        by++) {
            bv = bD[by];
            bA = by + 1;
            bE = t(bv);
            bF = F(bv);
            switch (bA) {
            case 1:
                bC.dot = 7;
                break;
            case 2:
                bC.dot = 102;
                break;
            case 3:
                bC.dot = (aG.locale === N.FRENCH ? 187 : 197);
                break;
            default:
                break
            }
            f(bC.dot, bz.dot, bv, aw.LEGEND);
            bi.text(bC.dot - I, bz.total, bE).attr(bm);
            bi.text(bC.dot + I + 5, bz.label, bF).attr(bq)
        }
    }
    function ad(bw, by, bx, bv) {
        a2(bw, by);
        aB(bw, by);
        Q(bw, by, bx, bv);
        if (V()) {
            bl()
        } else {
            an(bw, by);
            Y(bw, by)
        }
    }
    function Q(bA, by, bE, bF) {
        var bI = bF[aK.FIRST], bD = bF[aK.SECOND], bx = bF[aK.THIRD], bB = bA + l, bH = bB + bI, bz = bB + bD, bw = bB + bx, bC = null, bv = null, bJ = null, bG = null;
        bJ = bi.circle(bw, by, bx).attr(aS);
        bv = bi.circle(bz, by, bD).attr(aS);
        bC = bi.circle(bH, by, bI).attr(aS);
        bJ.data(ay, aD);
        bv.data(ay, K);
        bC.data(ay, ag);
        if (aC()) {
            bC.attr(ak)
        } else {
            bC.attr(bg)
        }
        a1[aK.FIRST] = 0;
        a1[aK.SECOND] = 0;
        a1[aK.THIRD] = 0;
        if (u()) {
            D(bE, bC, aK.FIRST);
            bG = bi.set();
            bG.push(bv, bJ);
            aI(bG, bG, aK.SECOND, bi.set(), bi.set())
        } else {
            D(bE, bC, aK.FIRST);
            D(bE, bv, aK.SECOND);
            D(bE, bJ, aK.THIRD)
        }
    }
    function D(bR, bD, bA) {
        var bE = bR.length, bN = bD.attrs, bG = bN.cx, bI = bN.cy, bC = bN.r, bJ = aW(bR, bA), bF = bJ.length, bO = 0, bL = {}, bH = {}, bP = 0, by = 0, bw = 0, bQ = "", bB = "", bz = null, bM = null, bv = null, bx = null, bK = null;
        if ((aC()) && (bA === aK.FIRST)) {
            bF = 0;
            bx = bi.text(bG - (0.6 * bC), bI - 10, aG.viewsOnlyTotal).attr(T);
            bK = bi.text(bG - (0.6 * bC) + 4, bI + 12, aG.viewsOnlyLabel).attr(ae);
            bx.data(ay, ag);
            bK.data(ay, ag);
            aI(bD, bD, bA, bi.set(), bi.set())
        } else {
            if (bF === 0) {
                aI(bD, bD, bA, bi.set(), bi.set())
            } else {
                for (bP = 0;
                bP < bE;
                bP++) {
                    bQ = bR[bP];
                    bL[bQ] = bi.set();
                    bH[bQ] = bi.set()
                }
                for (bP = 0;
                bP < bF;
                bP++) {
                    bz = Z(bG, bI, bA, bP + 1);
                    by = bz.cx;
                    bw = bz.cy;
                    bB = bJ[bP];
                    bM = f(by, bw, bB, bA);
                    bL[bB].push(bM);
                    if (!V()) {
                        bv = G(by, bw, bB);
                        bH[bB].push(bv)
                    }
                    bO++
                }
                if (!V()) {
                    for (bP = 0;
                    bP < bE;
                    bP++) {
                        bQ = bR[bP];
                        if (bL[bQ].length > 0) {
                            aI(bL[bQ], bD, bA, bL[bQ], bH[bQ])
                        }
                    }
                }
                a1[bA] = bO
            }
        }
    }
    function a2(bv, bw) {
        bi.circle(bv - v, bw, v).attr(ai)
    }
    function aW(bD, bx) {
        var bK = h(bD, bx), bC = aN(bx), bB = bD.length, bv = {}, bE = [], bA = 0, by = 0, bH = 0, bI = 0, bG = 0, bJ = 0, bF = 0, bz = 0, bw = "";
        for (bA = 0;
        bA < bB;
        bA++) {
            bw = bD[bA];
            bH = bK ? aQ(bw, bx) : P(bw, bx);
            bv[bw] = bH;
            for (by = 0;
            by < bH;
            by++) {
                bE.push(bw)
            }
        }
        bI = bE.length;
        while (bI--) {
            bG = Math.floor(Math.random() * (bI + 1));
            bJ = bE[bI];
            bE[bI] = bE[bG];
            bE[bG] = bJ
        }
        bE = bE.slice(0, Math.min(bC, bE.length));
        for (bA = 0;
        bA < bB;
        bA++) {
            bw = bD[bA];
            bH = bv[bw];
            if ((bH > 0) && (bE.indexOf(bw)===-1)) {
                bE.unshift(bw);
                bF = bE.length;
                do {
                    bz = bE[--bF]
                }
                while (bF && (typeof(bz) !== "undefined") && (bE.indexOf(bz) === _.lastIndexOf(bE, bz)));
                bE.splice(bF, 1)
            }
        }
        return bE
    }
    function X(bA, by, bx, bw) {
        var bv = bA, bz = by;
        if (bx === aK.FIRST) {
            if (bw === 1) {
                bv = bA - 5;
                bz = by + 1
            } else {
                if (bw === 2) {
                    bv = bA + 3;
                    bz = by + 16
                } else {
                    if (bw === 3) {
                        bv = bA + 9;
                        bz = by - 3
                    } else {
                        if (bw === 4) {
                            bv = bA - 9;
                            bz = by - 16
                        } else {
                            if (bw === 5) {
                                bv = bA - 12;
                                bz = by + 17
                            } else {
                                if (bw === 6) {
                                    bv = bA + 17;
                                    bz = by + 10
                                } else {
                                    if (bw === 7) {
                                        bv = bA + 8;
                                        bz = by - 19
                                    } else {
                                        if (bw === 8) {
                                            bv = bA - 20;
                                            bz = by - 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (bx === aK.SECOND) {
                if (bw === 1) {
                    bv = bA + 22;
                    bz = by + 1
                } else {
                    if (bw === 2) {
                        bv = bA + 27;
                        bz = by - 15
                    } else {
                        if (bw === 3) {
                            bv = bA + 40;
                            bz = by
                        } else {
                            if (bw === 4) {
                                bv = bA + 32;
                                bz = by + 15
                            } else {
                                if (bw === 5) {
                                    bv = bA + 12;
                                    bz = by + 15
                                } else {
                                    if (bw === 6) {
                                        bv = bA + 14;
                                        bz = by + 31
                                    } else {
                                        if (bw === 7) {
                                            bv = bA + 31;
                                            bz = by + 33
                                        } else {
                                            if (bw === 8) {
                                                bv = bA + 42;
                                                bz = by - 18
                                            } else {
                                                if (bw === 9) {
                                                    bv = bA + 12;
                                                    bz = by - 17
                                                } else {
                                                    if (bw === 10) {
                                                        bv = bA - 2;
                                                        bz = by + 33
                                                    } else {
                                                        if (bw === 11) {
                                                            bv = bA + 27;
                                                            bz = by - 31
                                                        } else {
                                                            if (bw === 12) {
                                                                bv = bA + 14;
                                                                bz = by + 45
                                                            } else {
                                                                if (bw === 13) {
                                                                    bv = bA + 3;
                                                                    bz = by - 33
                                                                } else {
                                                                    if (bw === 14) {
                                                                        bv = bA - 7;
                                                                        bz = by + 47
                                                                    } else {
                                                                        if (bw === 15) {
                                                                            bv = bA + 16;
                                                                            bz = by - 44
                                                                        } else {
                                                                            if (bw === 16) {
                                                                                bv = bA - 22;
                                                                                bz = by + 40
                                                                            } else {
                                                                                if (bw === 17) {
                                                                                    bv = bA - 15;
                                                                                    bz = by - 40
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (bx === aK.THIRD) {
                    if (bw === 1) {
                        bv = bA + 44;
                        bz = by + 2
                    } else {
                        if (bw === 2) {
                            bv = bA + 50;
                            bz = by + 18
                        } else {
                            if (bw === 3) {
                                bv = bA + 63;
                                bz = by + 2
                            } else {
                                if (bw === 4) {
                                    bv = bA + 65;
                                    bz = by + 21
                                } else {
                                    if (bw === 5) {
                                        bv = bA + 59;
                                        bz = by - 15
                                    } else {
                                        if (bw === 6) {
                                            bv = bA + 54;
                                            bz = by + 35
                                        } else {
                                            if (bw === 7) {
                                                bv = bA + 39;
                                                bz = by - 17
                                            } else {
                                                if (bw === 8) {
                                                    bv = bA + 34;
                                                    bz = by + 41
                                                } else {
                                                    if (bw === 9) {
                                                        bv = bA + 35;
                                                        bz = by + 24
                                                    } else {
                                                        if (bw === 10) {
                                                            bv = bA + 62;
                                                            bz = by - 31
                                                        } else {
                                                            if (bw === 11) {
                                                                bv = bA + 43;
                                                                bz = by - 33
                                                            } else {
                                                                if (bw === 12) {
                                                                    bv = bA + 47;
                                                                    bz = by + 52
                                                                } else {
                                                                    if (bw === 13) {
                                                                        bv = bA + 26;
                                                                        bz = by - 41
                                                                    } else {
                                                                        if (bw === 14) {
                                                                            bv = bA + 33;
                                                                            bz = by + 61
                                                                        } else {
                                                                            if (bw === 15) {
                                                                                bv = bA + 50;
                                                                                bz = by - 48
                                                                            } else {
                                                                                if (bw === 15) {
                                                                                    bv = bA + 18;
                                                                                    bz = by + 51
                                                                                } else {
                                                                                    if (bw === 14) {
                                                                                        bv = bA + 50;
                                                                                        bz = by - 48
                                                                                    } else {
                                                                                        if (bw === 15) {
                                                                                            bv = bA + 34;
                                                                                            bz = by - 56
                                                                                        } else {
                                                                                            if (bw === 16) {
                                                                                                bv = bA + 12;
                                                                                                bz = by - 54
                                                                                            } else {
                                                                                                if (bw === 17) {
                                                                                                    bv = bA + 35;
                                                                                                    bz = by - 56
                                                                                                } else {
                                                                                                    if (bw === 18) {
                                                                                                        bv = bA + 17;
                                                                                                        bz = by + 51
                                                                                                    } else {
                                                                                                        if (bw === 19) {
                                                                                                            bv = bA + 22;
                                                                                                            bz = by - 68
                                                                                                        } else {
                                                                                                            if (bw === 20) {
                                                                                                                bv = bA + 14;
                                                                                                                bz = by + 68
                                                                                                            } else {
                                                                                                                if (bw === 21) {
                                                                                                                    bv = bA + 2;
                                                                                                                    bz = by - 68
                                                                                                                } else {
                                                                                                                    if (bw === 22) {
                                                                                                                        bv = bA - 3;
                                                                                                                        bz = by + 62
                                                                                                                    } else {
                                                                                                                        if (bw === 23) {
                                                                                                                            bv = bA - 17;
                                                                                                                            bz = by - 66
                                                                                                                        } else {
                                                                                                                            if (bw === 24) {
                                                                                                                                bv = bA - 21;
                                                                                                                                bz = by + 66
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            "cx": bv,
            "cy": bz
        }
    }
    function ba(bA, by, bx, bw) {
        var bv = bA, bz = by;
        if (bx === aK.FIRST) {
            if (bw === 1) {
                bv = bA - 5;
                bz = by + 1
            } else {
                if (bw === 2) {
                    bv = bA + 7;
                    bz = by - 12
                } else {
                    if (bw === 3) {
                        bv = bA + 12;
                        bz = by + 7
                    } else {
                        if (bw === 4) {
                            bv = bA + 2;
                            bz = by + 22
                        } else {
                            if (bw === 5) {
                                bv = bA + 22;
                                bz = by + 22
                            } else {
                                if (bw === 6) {
                                    bv = bA - 14;
                                    bz = by + 17
                                } else {
                                    if (bw === 7) {
                                        bv = bA - 12;
                                        bz = by - 15
                                    } else {
                                        if (bw === 8) {
                                            bv = bA + 24;
                                            bz = by - 8
                                        } else {
                                            if (bw === 9) {
                                                bv = bA - 24;
                                                bz = by
                                            } else {
                                                if (bw === 10) {
                                                    bv = bA - 31;
                                                    bz = by - 16
                                                } else {
                                                    if (bw === 11) {
                                                        bv = bA - 31;
                                                        bz = by + 21
                                                    } else {
                                                        if (bw === 12) {
                                                            bv = bA + 23;
                                                            bz = by + 38
                                                        } else {
                                                            if (bw === 13) {
                                                                bv = bA - 17;
                                                                bz = by + 34
                                                            } else {
                                                                if (bw === 14) {
                                                                    bv = bA + 33;
                                                                    bz = by + 7
                                                                } else {
                                                                    if (bw === 15) {
                                                                        bv = bA + 16;
                                                                        bz = by - 25
                                                                    } else {
                                                                        if (bw === 16) {
                                                                            bv = bA - 25;
                                                                            bz = by - 34
                                                                        } else {
                                                                            if (bw === 17) {
                                                                                bv = bA + 5;
                                                                                bz = by + 41
                                                                            } else {
                                                                                if (bw === 18) {
                                                                                    bv = bA - 3;
                                                                                    bz = by - 31
                                                                                } else {
                                                                                    if (bw === 19) {
                                                                                        bv = bA - 43;
                                                                                        bz = by + 4
                                                                                    } else {
                                                                                        if (bw === 20) {
                                                                                            bv = bA + 41;
                                                                                            bz = by - 14
                                                                                        } else {
                                                                                            if (bw === 21) {
                                                                                                bv = bA + 40;
                                                                                                bz = by + 27
                                                                                            } else {
                                                                                                if (bw === 22) {
                                                                                                    bv = bA + 35;
                                                                                                    bz = by - 31
                                                                                                } else {
                                                                                                    if (bw === 23) {
                                                                                                        bv = bA + 21;
                                                                                                        bz = by - 44
                                                                                                    } else {
                                                                                                        if (bw === 24) {
                                                                                                            bv = bA - 13;
                                                                                                            bz = by - 48
                                                                                                        } else {
                                                                                                            if (bw === 25) {
                                                                                                                bv = bA + 5;
                                                                                                                bz = by - 50
                                                                                                            } else {
                                                                                                                if (bw === 26) {
                                                                                                                    bv = bA - 41;
                                                                                                                    bz = by - 27
                                                                                                                } else {
                                                                                                                    if (bw === 27) {
                                                                                                                        bv = bA - 33;
                                                                                                                        bz = by + 38
                                                                                                                    } else {
                                                                                                                        if (bw === 28) {
                                                                                                                            bv = bA - 49;
                                                                                                                            bz = by - 11
                                                                                                                        } else {
                                                                                                                            if (bw === 29) {
                                                                                                                                bv = bA + 49;
                                                                                                                                bz = by + 6
                                                                                                                            } else {
                                                                                                                                if (bw === 30) {
                                                                                                                                    bv = bA - 46;
                                                                                                                                    bz = by + 21
                                                                                                                                } else {
                                                                                                                                    if (bw === 31) {
                                                                                                                                        bv = bA - 10;
                                                                                                                                        bz = by + 48
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            "cx": bv,
            "cy": bz
        }
    }
    function x(bA, by, bx, bw) {
        var bv = bA, bz = by;
        if (bx === aK.FIRST) {
            if (bw === 1) {
                bv = bA + 3;
                bz = by - 10
            } else {
                if (bw === 2) {
                    bv = bA - 7;
                    bz = by + 6
                } else {
                    if (bw === 3) {
                        bv = bA + 10;
                        bz = by + 7
                    } else {
                        if (bw === 4) {
                            bv = bA + 20;
                            bz = by - 4
                        } else {
                            if (bw === 5) {
                                bv = bA - 17;
                                bz = by - 9
                            } else {
                                if (bw === 6) {
                                    bv = bA - 24;
                                    bz = by + 14
                                } else {
                                    if (bw === 7) {
                                        bv = bA - 7;
                                        bz = by + 22
                                    } else {
                                        if (bw === 8) {
                                            bv = bA + 15;
                                            bz = by + 24
                                        } else {
                                            if (bw === 9) {
                                                bv = bA - 32;
                                                bz = by - 1
                                            } else {
                                                if (bw === 10) {
                                                    bv = bA + 17;
                                                    bz = by - 21
                                                } else {
                                                    if (bw === 11) {
                                                        bv = bA - 6;
                                                        bz = by - 22
                                                    } else {
                                                        if (bw === 12) {
                                                            bv = bA - 27;
                                                            bz = by - 21
                                                        } else {
                                                            if (bw === 13) {
                                                                bv = bA + 27;
                                                                bz = by + 13
                                                            } else {
                                                                if (bw === 14) {
                                                                    bv = bA - 20;
                                                                    bz = by + 30
                                                                } else {
                                                                    if (bw === 15) {
                                                                        bv = bA + 8;
                                                                        bz = by - 35
                                                                    } else {
                                                                        if (bw === 16) {
                                                                            bv = bA + 2;
                                                                            bz = by + 35
                                                                        } else {
                                                                            if (bw === 17) {
                                                                                bv = bA + 33;
                                                                                bz = by - 13
                                                                            } else {
                                                                                if (bw === 18) {
                                                                                    bv = bA - 14;
                                                                                    bz = by - 34
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (bx === aK.SECOND) {
                if (bw === 1) {
                    bv = bA + 44;
                    bz = by - 1
                } else {
                    if (bw === 2) {
                        bv = bA + 35;
                        bz = by + 15
                    } else {
                        if (bw === 3) {
                            bv = bA + 54;
                            bz = by + 11
                        } else {
                            if (bw === 4) {
                                bv = bA + 51;
                                bz = by + 27
                            } else {
                                if (bw === 5) {
                                    bv = bA + 57;
                                    bz = by - 8
                                } else {
                                    if (bw === 6) {
                                        bv = bA + 38;
                                        bz = by + 35
                                    } else {
                                        if (bw === 7) {
                                            bv = bA + 52;
                                            bz = by - 24
                                        } else {
                                            if (bw === 8) {
                                                bv = bA + 37;
                                                bz = by - 16
                                            } else {
                                                if (bw === 9) {
                                                    bv = bA + 29;
                                                    bz = by
                                                } else {
                                                    if (bw === 10) {
                                                        bv = bA + 24;
                                                        bz = by + 24
                                                    } else {
                                                        if (bw === 11) {
                                                            bv = bA + 24;
                                                            bz = by - 27
                                                        } else {
                                                            if (bw === 12) {
                                                                bv = bA + 41;
                                                                bz = by - 36
                                                            } else {
                                                                if (bw === 13) {
                                                                    bv = bA + 17;
                                                                    bz = by - 42
                                                                } else {
                                                                    if (bw === 14) {
                                                                        bv = bA + 32;
                                                                        bz = by - 50
                                                                    } else {
                                                                        if (bw === 15) {
                                                                            bv = bA + 30;
                                                                            bz = by + 50
                                                                        } else {
                                                                            if (bw === 16) {
                                                                                bv = bA + 16;
                                                                                bz = by + 40
                                                                            } else {
                                                                                if (bw === 17) {
                                                                                    bv = bA + 14;
                                                                                    bz = by + 56
                                                                                } else {
                                                                                    if (bw === 18) {
                                                                                        bv = bA + 14;
                                                                                        bz = by - 58
                                                                                    } else {
                                                                                        if (bw === 19) {
                                                                                            bv = bA + 1;
                                                                                            bz = by - 48
                                                                                        } else {
                                                                                            if (bw === 20) {
                                                                                                bv = bA + 1;
                                                                                                bz = by + 47
                                                                                            } else {
                                                                                                if (bw === 21) {
                                                                                                    bv = bA - 6;
                                                                                                    bz = by + 59
                                                                                                } else {
                                                                                                    if (bw === 22) {
                                                                                                        bv = bA - 7;
                                                                                                        bz = by - 61
                                                                                                    } else {
                                                                                                        if (bw === 23) {
                                                                                                            bv = bA - 21;
                                                                                                            bz = by + 54
                                                                                                        } else {
                                                                                                            if (bw === 24) {
                                                                                                                bv = bA - 23;
                                                                                                                bz = by - 54
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            "cx": bv,
            "cy": bz
        }
    }
    function Z(by, bx, bw, bv) {
        switch (L) {
        case W.DEFAULT:
            return X(by, bx, bw, bv);
        case W.CONNECTIONS_ONLY:
            return ba(by, bx, bw, bv);
        case W.NO_2ND_DEGREE_AND_NO_3RD_DEGREE:
            return ba(by, bx, bw, bv);
        case W.NO_3RD_DEGREE:
            return x(by, bx, bw, bv);
        default:
            return {
                "cx": by,
                "cy": bx
            }
        }
    }
    function aN(bv) {
        if (L === W.DEFAULT) {
            switch (bv) {
            case aK.FIRST:
                return 8;
            case aK.SECOND:
                return 17;
            case aK.THIRD:
                return 24;
            default:
                return 0
            }
        } else {
            if ((L === W.CONNECTIONS_ONLY) || (L === W.NO_2ND_DEGREE_AND_NO_3RD_DEGREE)) {
                if (bv === aK.FIRST) {
                    return 31
                } else {
                    return 0
                }
            } else {
                if (L === W.NO_3RD_DEGREE) {
                    switch (bv) {
                    case aK.FIRST:
                        return 18;
                    case aK.SECOND:
                        return 24;
                    case aK.THIRD:
                        return 0;
                    default:
                        return 0
                    }
                }
            }
        }
        return 0
    }
    function F(bv) {
        switch (bv) {
        case a4.VIEWS:
            return aG.dataViews[0];
        case a4.LIKES:
            return aG.dataLikes[0];
        case a4.COMMENTS:
            return aG.dataComments[0];
        case a4.RESHARES:
            return aG.dataReshares[0];
        default:
            return ""
        }
    }
    function t(bw) {
        var bv = 0;
        switch (bw) {
        case a4.LIKES:
            bv = 1;
            break;
        case a4.COMMENTS:
            bv = 2;
            break;
        case a4.RESHARES:
            bv = 3;
            break;
        default:
            break
        }
        return aG.totalsFormatted[bv]
    }
    function P(by, bx) {
        var bw = [0], bv = 0;
        switch (by) {
        case a4.VIEWS:
            bw = aG.dataViews;
            break;
        case a4.LIKES:
            bw = aG.dataLikes;
            break;
        case a4.COMMENTS:
            bw = aG.dataComments;
            break;
        case a4.RESHARES:
            bw = aG.dataReshares;
            break;
        default:
            break
        }
        switch (bx) {
        case aK.FIRST:
            bv = 1;
            break;
        case aK.SECOND:
            bv = 2;
            break;
        case aK.THIRD:
            bv = 3;
            break;
        default:
            break
        }
        return V() ? H : bw[bv]
    }
    function aQ(bx, bw) {
        var bv = P(bx, bw), by = 1;
        if ((bx === a4.VIEWS) && (bv > 7)) {
            by = 7
        } else {
            if (bv > 5) {
                by = 5
            }
        }
        return Math.ceil(bv / by)
    }
    function a0(by) {
        var bw = 0, bx = 0, bv = "";
        for (bv in aK) {
            bx = aK[bv];
            bw += P(by, bx)
        }
        return bw
    }
    function ao(bv) {
        var bA = YEvent.getTarget(bv), bz = bA.tagName.toLowerCase() === "a" ? bA: YDom.getAncestorByTagName(bA, "a"), by = bA.tagName.toLowerCase() === "button" ? bA: YDom.getAncestorByTagName(bA, "button"), bx = bz || by, bw;
        if (bx) {
            bw = LI.getDataAttribute(bx, be);
            if (WebTracking && bw) {
                WebTracking.trackUserAction(bw)
            }
        }
    }
    function s() {
        if (!((aC()) && (U.degree === aK.FIRST))) {
            if (U.circle) {
                U.circle.attr(J);
                U.setDotsOutline.hide()
            }
        }
        U = {
            "circle": null,
            "degree": null,
            "setDots": null,
            "setDotsOutline": null
        }
    }
    function aM() {
        var bx = m.DEFAULT, bw = a5.DEFAULT, bv = null, by = null, bz = {};
        if (!V()) {
            p();
            bj()
        }
        if (V()) {
            bw = a5.SHARE_TEASER
        } else {
            if (aC()) {
                bw = a5.VIEWS_ONLY
            } else {
                if (b === bd.AGGREGATE) {
                    bw = a5.AGGREGATE
                }
            }
        }
        bi = Raphael(E, bx, bw);
        aT();
        if (aG.isInitialEntry) {
            bv = YDom.getAncestorByClassName(aJ, aZ), by = YDom.getAncestorByClassName(aJ, y);
            bz = YDom.getRegion(by);
            YDom.setStyle(bv, "height", bz.height + "px")
        }
    }
    function a6(bv) {
        return (bv ? (bv.hasOwnProperty("length") && (bv.length > 1)) : false)
    }
    function h(bw, bC) {
        var by = aN(bC), bA = bw.length, bz = 0, bB = "", bv = false;
        for (var bx = 0;
        bx < bA;
        bx++) {
            bB = h[bx];
            bz += P(bB, bC)
        }
        bv = (bz > by) ? true : false;
        return bv
    }
    function aX(by) {
        var bw = U.setDots, bx = U.circle, bv = 0, bz = 0;
        if (bw) {
            bv = bw.length;
            while (bv--) {
                if (by === bw[bv]) {
                    return true
                }
            }
        }
        if (a6(bx)) {
            bz = bx.length;
            while (bz--) {
                if (by === bx[bz]) {
                    return true
                }
            }
        } else {
            return by === bx
        }
    }
    function u() {
        return ((L === W.VIEWS_AND_CONNECTIONS) || (L === W.CONNECTIONS_ONLY))
    }
    function aC() {
        return ((L === W.VIEWS_AND_CONNECTIONS) || (L === W.VIEWS_ONLY))
    }
    function V() {
        return aG.isShareTeaser
    }
    function am() {
        YAHOO.util.Get.script(LI.ShareStatsDependencies.scripts, {
            onFailure: function() {
                au.parentNode.removeChild(au)
            },
            onSuccess: aM
        })
    }
    function bp() {
        var bv = {};
        if (V()) {
            bv[aK.FIRST] = 30;
            bv[aK.SECOND] = 55;
            bv[aK.THIRD] = 80
        } else {
            if ((L === W.VIEWS_AND_CONNECTIONS) || (L === W.VIEWS_ONLY) || (L === W.CONNECTIONS_ONLY) || (L === W.NO_2ND_DEGREE_AND_NO_3RD_DEGREE)) {
                bv[aK.FIRST] = 60;
                bv[aK.SECOND] = 70;
                bv[aK.THIRD] = 80
            } else {
                if (L === W.NO_3RD_DEGREE) {
                    bv[aK.FIRST] = 45;
                    bv[aK.SECOND] = 70;
                    bv[aK.THIRD] = 80
                } else {
                    bv[aK.FIRST] = 30;
                    bv[aK.SECOND] = 55;
                    bv[aK.THIRD] = 80
                }
            }
        }
        return bv
    }
    function av() {
        var bv = n, bw = bo;
        if (V()) {
            bw -= R
        } else {
            if (aC()) {
                bw -= ab
            } else {
                if (b === bd.AGGREGATE) {
                    bv = 2 * v + 5;
                    bw += bf
                }
            }
        }
        return {
            "cx": bv,
            "cy": bw
        }
    }
    function d(bA) {
        var bx = (bA === aF.LEGEND), by = 0, bz = 0, bw = 0, bC = 0, bB = [], bv = 3;
        if (bx) {
            by = t(a4.VIEWS);
            bz = t(a4.LIKES);
            bw = t(a4.COMMENTS);
            bC = t(a4.RESHARES)
        } else {
            by = a0(a4.VIEWS);
            bz = a0(a4.LIKES);
            bw = a0(a4.COMMENTS);
            bC = a0(a4.RESHARES)
        }
        if (!aC()) {
            if (by && (by !== "0")) {
                bB.push(a4.VIEWS)
            }
            if (bz && (bz !== "0")) {
                bB.push(a4.LIKES)
            }
            if (bw && (bw !== "0")) {
                bB.push(a4.COMMENTS)
            }
            if (bC && (bC !== "0") && (bB.length < bv)) {
                bB.push(a4.RESHARES)
            }
        }
        return bB
    }
    function aT() {
        var bx = {}, bw = [], bv = {};
        aA();
        bx = av(), bw = d(aF.NETWORK_DOT), bv = bp();
        ad(bx.cx, bx.cy, bw, bv);
        z()
    }
    function p() {
        var bx = aG.isViewsOnly && aG.isConnectionsOnly, bv = aG.isViewsOnly, by = aG.isConnectionsOnly, bw = aG.isNo2ndDegree, bz = aG.isNo3rdDegree;
        if (bx) {
            L = W.VIEWS_AND_CONNECTIONS
        } else {
            if (bv) {
                L = W.VIEWS_ONLY
            } else {
                if (by) {
                    L = W.CONNECTIONS_ONLY
                } else {
                    if (bw && bz) {
                        L = W.NO_2ND_DEGREE_AND_NO_3RD_DEGREE
                    } else {
                        if (bz) {
                            L = W.NO_3RD_DEGREE
                        }
                    }
                }
            }
        }
    }
    function bj() {
        b = aG.isAggregate ? bd.AGGREGATE : bd.DEFAULT
    }
    function bh(bN, bz, by) {
        var bw = bN.data(ay), bF = bN.node, bB = bF.raphaelid, bH = bw.concat("-", bB), bG = a1[by], bL = 15, bJ = 10, bE = {}, bA = {}, bM = 0, bD = 0, bC = 0, bx = 0, bv = 0, bK = 0, bI = 0;
        if (aO.hasOwnProperty(bH)) {
            a8 = aO[bH]
        } else {
            if ((!a6(bz)) && (bN !== bz)) {
                bE = bz.attrs;
                bA = bN.attrs;
                bM = bE.cx;
                bD = bE.cy;
                bC = bE.r;
                bx = bA.hasOwnProperty("cx") ? bA.cx : (bA.x - (bF.offsetWidth / 2));
                bv = bA.hasOwnProperty("cy") ? bA.cy : (bA.y - (bF.offsetHeight / 2));
                bK =- (Math.abs((bM - bC) - bx));
                bI =- (Math.abs((bD - bC) - bv));
                bL = bK + bC - 10;
                bJ = bI + 15;
                if (bG > 0) {
                    if (by === aK.FIRST) {
                        if ((L === W.CONNECTIONS_ONLY) || (L === W.NO_2ND_DEGREE_AND_NO_3RD_DEGREE)) {
                            if (bG < 15) {
                                bL += 5;
                                bJ += 25
                            }
                        } else {
                            if (L === W.NO_3RD_DEGREE) {
                                if (bG < 10) {
                                    bL += 5;
                                    bJ += 15
                                }
                            }
                        }
                    } else {
                        if (by === aK.SECOND) {
                            if (L === W.NO_3RD_DEGREE) {
                                if (bG < 7) {
                                    bL += 50;
                                    bJ += 40
                                } else {
                                    if (bG < 13) {
                                        bL += 35;
                                        bJ += 25
                                    }
                                }
                            } else {
                                if (L === W.DEFAULT) {
                                    if (bG < 11) {
                                        bL += 20;
                                        bJ += 15
                                    }
                                }
                            }
                        } else {
                            if (by === aK.THIRD) {
                                if (L === W.DEFAULT) {
                                    if (bG < 10) {
                                        bL += 60;
                                        bJ += 40
                                    } else {
                                        if (bG < 16) {
                                            bL += 35;
                                            bJ += 15
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if ((bw === aD) && (u())) {
                    bL -= 10;
                    bJ += 10
                }
            }
            aL.className = az;
            YDom.addClass(aL, aE);
            YDom.addClass(aL, "content-" + bw.toLowerCase());
            a8 = new LI.BalloonCallout(bF, {
                id: bu,
                type: "hovercard-callout",
                orientation: "bottom",
                width: "auto",
                offsetX: bL,
                offsetY: bJ,
                events: []
            });
            aO[bH] = a8
        }
        if (!ar) {
            af()
        }
    }
    function a7(bz, by, bx, bw, bv) {
        al.hide();
        if (!((aC()) && (bx === aK.FIRST))) {
            if (by) {
                by.attr(j);
                bv.show()
            }
        }
        U = {
            "circle": by,
            "degree": bx,
            "setDots": bw,
            "setDotsOutline": bv
        }
    }
    function bl() {
        var by = YDom.getAncestorByClassName(aJ, y), bx = by ? YDom.getElementsByClassName(aj, "div", by)[0]: null, bA = bx ? YDom.getElementsByClassName(ax, "div", bx)[0]: null, bw = bA ? YDom.getElementsByClassName(ah, "div", bA)[0]: null, bz = {}, bv = {};
        if (bw) {
            bz = YDom.getRegion(by);
            bv = YDom.getRegion(bA);
            YDom.setStyle(bx, "width", bz.width + "px");
            YDom.setStyle(bx, "height", bz.height + "px")
        }
    }
    function z() {
        var bx = YDom.getElementsByClassName(O, "a", bn)[0], bv = YDom.get(ap), bw = null;
        if (b !== bd.AGGREGATE) {
            if (bx && bv) {
                bw = new LI.BalloonCallout(bx, {
                    id: ap,
                    type: "hovercard-callout",
                    orientation: "bottom",
                    width: "auto"
                })
            }
            LI.show(bn)
        }
    }
    function aH(bz, by, bx, bw, bv) {
        clearTimeout(bc);
        bc = setTimeout(function() {
            if (U.setDots&&!aX(bz)) {
                s()
            }
            a7(bz, by, bx, bw, bv);
            bh(bz, by, bx);
            a8.open()
        }, (U.circle ? aR : 0))
    }
    function bt() {
        clearTimeout(bc);
        bc = setTimeout(function() {
            s();
            a8.close()
        }, M)
    }
    function aA() {
        var bv = bi.hasOwnProperty("canvas") ? bi.canvas: null, bw = bi.hasOwnProperty("desc") ? bi.desc: null;
        if (bv) {
            bv.setAttribute("role", "img");
            bv.setAttribute("aria-label", aG.SVGAriaLabel)
        }
        if (bw) {
            bw.textContent = aG.SVGDesc
        }
    }
    if (!(YDom.get(E).innerHTML)) {
        if (window.Raphael) {
            aM()
        } else {
            if (aG.isBufferLazyLoad) {
                YEvent.on(window, "load", function() {
                    am()
                })
            } else {
                am()
            }
        }
    }
};
LI.define("ShareStatsCarousel");
LI.ShareStatsCarousel = function(aa, J) {
    var l, T, ae, B, Y, K, q, z, b, f, C, N, R, Z, e, L, m, E, a, h, M, ac, A, I, i, O, P, U, p, n, ad, D, S, t;
    if (!aa ||!J) {
        return
    }
    J = {
        idViewport: J.idViewport || "",
        idEntries: J.idEntries || "",
        URLAggregate: J.URLAggregate || "",
        isBufferLazyLoad: J.isBufferLazyLoad || false
    };
    l = J.idViewport;
    T = J.idEntries;
    ae = "wvyu-carousel-controls";
    B = "wvyu-carousel-entries";
    Y = "share-teaser-close";
    K = "share-stats-widget";
    q = "active";
    z = "arrow-prev";
    b = "arrow-next";
    f = "counter";
    C = "carousel-entry";
    N = "disabled";
    R = "loading";
    Z = "share-teaser-overlay";
    e = "is-stale";
    L = "wvyu-container";
    m = "data-li-offset";
    E = "data-li-offset-url";
    a = "data-li-variation-type";
    h = "data-li-config";
    M = {
        "PREVIOUS": "PREVIOUS",
        "NEXT": "NEXT"
    };
    ac = {
        "DEFAULT": "DEFAULT",
        "AGGREGATE": "AGGREGATE"
    };
    A = aa;
    I = YDom.getElementsByClassName(z, "button", A)[0];
    i = YDom.getElementsByClassName(b, "button", A)[0];
    O = YDom.get(l);
    P = YDom.get(T);
    U = YDom.get(Y);
    p = YDom.get(K);
    n = 0;
    ad = false;
    D = false;
    S = null;
    t = function() {
        var ah = document.getElementById(B), aj = YDom.getElementsByClassName(e, "li", ah)[0], ag = YDom.getElementsByClassName(Z, "div", aj)[0], ai = {}, af;
        if (aj) {
            LI.hide(ag);
            af = YDom.getRegion(aj).height;
            ai = new YAnim(O, {
                "height": {
                    to: af
                }
            }, 0.3);
            ai.animate()
        }
        t = function() {}
    };
    function H() {
        return YDom.getElementsByClassName(q, "li", P)[0]
    }
    function c(af) {
        return YDom.getPreviousSibling(af)
    }
    function F(af) {
        return YDom.getNextSibling(af)
    }
    function o(af) {
        return u(af, m)
    }
    function y(af) {
        return u(af, E)
    }
    function u(ah, af) {
        var ag = YDom.getElementsByClassName(L, "div", ah)[0];
        if (af === m) {
            return ag ? parseInt(ag.getAttribute(af), 10) : - 1
        }
        return ag ? ag.getAttribute(af) : ""
    }
    function g(af) {
        return u(af, a)
    }
    function V(af) {
        var ak = YEvent.getTarget(af), aj = ak.tagName.toLowerCase() === "a" ? ak: YDom.getAncestorByTagName(ak, "a"), ai = ak.tagName.toLowerCase() === "button" ? ak: YDom.getAncestorByTagName(ak, "button"), ah = aj || ai, ag;
        if (ah) {
            ag = LI.getDataAttribute(ah, "li-trkcode");
            if (WebTracking && ag) {
                WebTracking.trackUserAction(ag)
            }
        }
    }
    function v(af) {
        return g(af) === ac.AGGREGATE
    }
    function r(af) {
        return !YDom.hasClass(af, N)
    }
    function W(ag, ah) {
        var ai = ((ah === M.PREVIOUS) && (c(ag))), af = ((ah === M.NEXT) && (F(ag)));
        return (ai || af)
    }
    function x(af) {
        return !c(af) && v(af)
    }
    function k(af) {
        return (o(af)===-1) && s(af)
    }
    function s(af) {
        return g(af) === ac.DEFAULT
    }
    function Q() {
        YAHOO.util.Get.script(LI.ShareStatsCarouselDependencies.scripts, {
            onFailure: function() {
                p.parentNode.removeChild(p)
            },
            onSuccess: function() {
                LI.Controls.processQueue();
                d()
            }
        })
    }
    function ab(an, al) {
        var ap = {}, ao = {}, ag = c(an), ah = F(an), ak = al === M.PREVIOUS, aj = ak ? ag: ah, ai = ak ? n: - n, am = YDom.getRegion(aj).height, af = YDom.getRegion(O).height;
        ap = new YAnim(P, {
            "left": {
                by: ai
            }
        }, 0.3);
        ao = new YAnim(O, {
            "height": {
                to: am
            }
        }, 0.3);
        ap.onComplete.subscribe(function() {
            if (af !== am) {
                ao.animate()
            } else {
                X(an, aj)
            }
        });
        ao.onComplete.subscribe(function() {
            X(an, aj)
        });
        if (!D) {
            D = true;
            ap.animate()
        }
    }
    function G() {
        var ag = YDom.getFirstChild(P), af = {};
        YDom.addClass(ag, q);
        w(ag)
    }
    function j(ag, ak) {
        var aj = this, ai = H(), al = o(ai), ah = y(ai), af = (ak === M.PREVIOUS) && s(ai)&&!c(ai);
        if (r(aj)&&!ad&&!D) {
            if (W(ai, ak)) {
                ab(ai, ak)
            } else {
                ad = true;
                if (af && (al === 1)) {
                    ah = J.URLAggregate
                }
                YDom.addClass(A, R);
                LI.originUUID();
                YConn.asyncRequest("GET", ah, {
                    success: function(an) {
                        var am = null;
                        ad = false;
                        if (an.responseText) {
                            am = LI.domify(an.responseText);
                            YDom.setStyle(P, "width", parseInt(YDom.getStyle(P, "width"), 10) + n + "px");
                            if (af) {
                                YDom.insertBefore(am, YDom.getFirstChild(P));
                                YDom.setStyle(P, "left", parseInt(YDom.getStyle(P, "left"), 10) - n + "px")
                            } else {
                                P.appendChild(am)
                            }
                            LI.Controls.parseFragment(am);
                            ab(ai, ak);
                            t()
                        } else {
                            YDom.removeClass(A, R)
                        }
                    },
                    failure: function() {
                        ad = false;
                        YDom.removeClass(A, R)
                    }
                }, null)
            }
        }
    }
    function X(af, ag) {
        D = false;
        YDom.removeClass(af, q);
        YDom.addClass(ag, q);
        if (x(ag)) {
            YDom.addClass(I, N)
        } else {
            YDom.removeClass(I, N)
        }
        if (k(ag)) {
            YDom.addClass(i, N)
        } else {
            YDom.removeClass(i, N)
        }
        YDom.removeClass(A, R);
        w(ag)
    }
    function w(ai) {
        var aj = document.getElementById(ae), ag = YDom.getElementsByClassName(f, "p", aj)[0], af = YDom.getElementsByClassName(L, "div", ai)[0], ah = af ? YAHOO.lang.JSON.parse(af.getAttribute(h)): {};
        if (ag && ah.counterText) {
            ag.innerHTML = ah.counterText
        }
    }
    function d() {
        var af = "click", ag = "mouseover";
        G();
        YEvent.on(U, af, t);
        YEvent.on(p, ag, V);
        if (A && O && P) {
            n = YDom.getRegion(O).width;
            YEvent.on(I, af, j, M.PREVIOUS);
            YEvent.on(i, af, j, M.NEXT)
        }
    }
    if (LI.ShareStats) {
        d()
    } else {
        if (J.isBufferLazyLoad) {
            YEvent.on(window, "load", function() {
                Q()
            })
        } else {
            Q()
        }
    }
};
LI.define("MentionsInComments");
LI.MentionsInComments = LI.BaseControl.extend(function(f) {
    var a = "data-li-context", d = {
        context: "nus-discussion"
    }, b = "mentions-input", e = "mentions-ready", c = {
        handleEventAs: ["DEFAULT"],
        maxResultsDisplayed: 11,
        maxResultsPerSource: [{
            max: 3,
            sourceID: "discussionparticipants"
        }, {
            max: 5,
            sourceID: "mynetwork"
        }, {
            max: 5,
            sourceID: "my1stnetwork"
        }, {
            max: 3,
            sourceID: "company"
        }
        ],
        renderAs: ["DEFAULT", "AUTOCHOOSE", {
            autoSnapContainer: false
        }
        ],
        resultsClass: "mentions-typeahead",
        source: "TYPE_DISCUSSION_PARTICIPANTS_COMPANIES_FIRST_DEGREE_CONNECTIONS"
    };
    return {
        addMentionsMarkup: function(l, j) {
            var h = j.containerId, k = j.typeaheadId, i = '<div class="mentions-container" id="' + h + '">' + '<pre class="mentions-highlighter" id="' + j.highlighterId + '"></pre></div>' + '<input type="hidden" id="' + k + '" name="' + k + '">' + '<div class="mentions-typeahead-container" id="' + j.typeaheadContainerId + '"></div>' + '<input type="hidden" id="' + j.mentionsDataId + '" name="mentions">', g;
            $(i).insertBefore(l);
            g = $("#" + h);
            g.append(l);
            l.addClass(b);
            setTimeout(function() {
                l.focus()
            }, 0)
        },
        attachEventListeners: function() {
            var h = this._$el.find(this.selector), g = this;
            h.each(function(j, i) {
                var k = $(i);
                if (!k.hasClass(e)) {
                    k.on("focus", _.bind(g.handleFocus, g));
                    k.addClass(e)
                }
            })
        },
        createMentionsConfigs: function(h) {
            var j = _.extend({
                containerEl: $("#" + h.typeaheadContainerId).get(0)
            }, c), i = h.topicId, g;
            g = _.extend({
                dedupeConnections: this.dedupeConnections,
                highlightEl: $("#" + h.highlighterId).get(0),
                mentionsEl: $("#" + h.mentionsDataId).get(0),
                mentionsInputEl: $("#" + h.inputId).get(0),
                queryDelay: this.queryDelay,
                triggers: this.triggers,
                typeaheadEl: $("#" + h.typeaheadId).get(0),
                urlAppend: "&ta-updateId=" + i + "&ta-posterId=" + h.scopeId + (i !== h.activityId ? "&ta-isMegaphone=true" : "")
            }, d);
            return {
                mentions: g,
                typeahead: j
            }
        },
        handleFocus: function(m) {
            var h = $(m.target), i, j, l, n, g, k;
            if (h.hasClass(e) && (!h.hasClass(b))) {
                k = h.parents(".comments");
                i = $.parseJSON(k.attr("data-li-config"));
                n = h.attr(a);
                j = {
                    activityId: i.activityID,
                    containerId: "mentions-container-" + n,
                    discussionContext: h.attr(a),
                    highlighterId: "comment-highlighter-" + n,
                    inputId: h.attr("id"),
                    mentionsDataId: "mentions-data-" + n,
                    scopeId: i.scopeID,
                    topicId: i.topicID,
                    typeaheadContainerId: "typeahead-container-" + n,
                    typeaheadId: "comment-typeahead-" + n
                };
                this.addMentionsMarkup(h, j);
                l = this.createMentionsConfigs(j);
                l.mentions.typeahead = new LI.Typeahead2(j.typeaheadId, l.typeahead);
                g = new LI.MentionsDecorator(j.containerId, l.mentions)
            }
        },
        init: function(h, g) {
            this.dedupeConnections = g.dedupeConnections;
            this.queryDelay = g.queryDelay;
            this.selector = g.selector;
            this.triggers = g.triggers;
            f.init.call(this, h, g);
            if (LI && LI.NusEvents) {
                LI.NusEvents.subscribe("replaceList", function(i) {
                    this.attachEventListeners()
                }, null, this)
            }
            $(document).on("infinitePagination-newPage", _.bind(this.attachEventListeners, this))
        }
    }
});
