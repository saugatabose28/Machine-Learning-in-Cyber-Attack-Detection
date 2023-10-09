/*!
 * sinaadToolkit.Media
 * @author acelan<xiaobin8[at]staff.sina.com.cn> zhouyi<zhouyi3[at]staff.sina.com.cn>
 * @version 1.0.0
 * 
 *                          $$!   ;$;
 *                    !$  $$$$  !$$$   ;;
 *                 $ *$$;$$$$$$$$$$;*$$$
 *                $$$$$$$$$$$$$$$$$$$$$
 *               $$$$$$;         o$$$$$o
 *              *$$$   *#####;     $$$$$
 *              $$$   &#$*!###     $$$$!
 *              $$$;  $#!!###$   ;$$$$
 *                $$$o  ;**   !$$$$!
 *          !$&&&&$!  o$$$$$$o;   ;$&###&!     ;o$&&##&$;
 *       ###########$ o####*  #############!  o############
 *     ;#####;        #####  $####    *####;          ####*
 *      ###########  o####   ####;    ####$  $######;o####
 *          ;*#####o ####$  ####&    !#### o####     ####
 *    ####$**&####$ ;####  o####     ####o &####$o$#####
 *   ;o########$    *###   ####!    &####   ;######&!
 *                 ###;
 *                  ##o
 *                 ;#!
 *                 ;
 */
!function(a, b, c, d) {
    "use strict";
    function e(e) {
        var g = b.cookie.get("bgAdCookie" + e.pdps);
        if ("0" !== g) {
            this.config = e;
            var h = document.body;
            h.style.cssText += ";background:url(" + e.src[0] + ") no-repeat center " + e.top + "px;margin:0px;";
            var i = this.midBg = document.getElementById("bgAdWrap");
            if (i) {
                i.style.cssText += ";position:relative;display:block;height: " + e.headHeight + "px;width: " + e.midWidth + "px;margin:0 auto;", i.innerHTML = '<a href="' + e.link[0] + '" target="_blank" style="display:block;height:' + e.headHeight + "px;width: " + e.midWidth + 'px;"></a>';
                var j = (e.width - e.midWidth) / 2, k = this.leftAd = document.createElement("div");
                k.id = "bgLeftAd", k.style.cssText += ";position: absolute;overflow:hidden;height: " + e.height + "px;width:" + j + "px;left:0px;top: " + e.top + "px", h.insertBefore(k, h.firstChild);
                var l = this.rightAd = document.createElement("div");
                if (l.id = "bgRightAd", l.style.cssText += ";position: absolute;overflow:hidden;height: " + e.height + "px;width:" + j + "px;left:0px;top: " + e.top + "px", h.insertBefore(l, h.firstChild), e.src[1]) {
                    var m = e.type[1] || e.type[0], n = e.src[1], o = {};
                    ("flash" === m || /\.swf$/.test(n)) && (o = {
                        wmode: "transparent"
                    }), b.ad.embed(k, m, j, e.height, b.ad.createHTML(m, n, j, e.height, e.link[1] || e.link[0], e.monitor, e.pv, d, o)), m = e.type[2] || e.type[1] || e.type[0], n = e.src[2] || e.src[1], o = {}, ("flash" === m || /\.swf$/.test(n)) && (o = {
                        wmode: "transparent"
                    }), b.ad.embed(l, m, j, e.height, b.ad.createHTML(m, n, j, e.height, e.link[2] || e.link[1] || e.link[0], e.monitor, e.pv, d, o))
                } else if (e.asideClickable) {
                    var p = document.createElement("a");
                    p.setAttribute("href", e.link[1] || e.link[0]), p.setAttribute("target", "_blank"), p.style.cssText += ";display: block;height: " + e.height + "px;", k.appendChild(p), p = document.createElement("a"), p.setAttribute("href", e.link[2] || e.link[1] || e.link[0]), p.setAttribute("target", "_blank"), p.style.cssText += ";display:block;height: " + e.height + "px;", l.appendChild(p)
                }
                var q = this.closeBtn = document.createElement("div");
                q.style.cssText += ";width: 40px;height: 18px;position:absolute;right:1px;top: 6px;background:url(" + f + ") no-repeat right center #ebebeb;cursor:pointer", i.appendChild(q), this.getResizeHandler()(), this.resizeHandler = this.getResizeHandler(), b.event.on(a, "resize", this.resizeHandler), b.event.on(q, "click", this.getCloseHandler());
                try {
                    b.debug("Media: In building bg complete!"), c.done(c.bg)
                } catch (r) {}
            }
        }
    }
    var f = "http://d1.sina.com.cn/shh/tianyi/bg/audi_zty_cls1.jpg";
    e.prototype = {
        getResizeHandler: function() {
            var a = this;
            return function() {
                var c = a.config.midWidth, d = b.dom.getPosition(document.getElementById("bgAdWrap")).left, e = (a.config.width - a.config.midWidth) / 2;
                a.leftAd.style.left = d - e + "px", a.rightAd.style.left = d + c + "px";
                var f = document.body.clientWidth - a.config.midWidth;
                0 > f && (f = 0), a.rightAd.style.width = Math.floor(Math.min(f / 2, e)) + "px"
            }
        },
        getCloseHandler: function() {
            var c = this;
            return function() {
                b.cookie.set("bgAdCookie" + c.config.pdps, 0, 864e5), b.event.un(a, "resize", c.resizeHandler), document.body.style.cssText += ";background:none;", c.midBg.style.display = "none", c.leftAd.style.display = "none", c.rightAd.style.display = "none"
            }
        }
    }, b.BgMedia = b.BgMedia || e
}(window, window.sinaadToolkit, window.sinaadsROC), function(a, b) {
    "use strict";
    function c(c) {
        if (!b.browser.mobile) {
            this.delay = c.delay ? parseInt(c.delay, 10) : 0, c.src = b.array.ensureArray(c.src), c.type = b.array.ensureArray(c.type), c.link = b.array.ensureArray(c.link), c.offsettop = c.offsettop || n, c.expandpos = c.expandpos || o;
            var h = c.smallsize = c.smallsize || m, i = c.bigsize = c.bigsize || l;
            this.config = c, this.deferred = new b.Deferred;
            var j = this.leftSmallContent = d(h, {
                type: c.type[0],
                src: c.src[0],
                link: c.link[0],
                monitor: c.monitor,
                pv: c.pv
            }), k = this.leftSmallCloseBtn = e("small"), p = this.leftSmall = f("small", "left " + c.offsettop);
            g(j, k, p);
            var q = this.leftBigContent = d(i, {
                type: c.type[1] || c.type[0],
                src: c.src[1],
                link: c.link[1] || c.link[0],
                monitor: c.monitor,
                pv: c.pv
            }), r = this.leftBigCloseBtn = e("big"), s = this.leftBig = f("big", "left " + c.offsettop);
            g(q, r, s);
            var t = this.rightSmallContent = d(h, {
                type: c.type[2] || c.type[0],
                src: c.src[2] || c.src[0],
                link: c.link[2] || c.link[0],
                monitor: c.monitor,
                pv: c.pv
            }), u = this.rightSmallCloseBtn = e("small"), v = this.rightSmall = f("small", "right " + c.offsettop);
            g(t, u, v);
            var w = this.rightBigContent = d(i, {
                type: c.type[3] || c.type[1] || c.type[0],
                src: c.src[3] || c.src[1],
                link: c.link[3] || c.link[1] || c.link[0],
                monitor: c.monitor,
                pv: c.pv
            }), x = this.rightBigCloseBtn = e("big"), y = this.rightBig = f("big", "right " + c.offsettop);
            g(w, x, y), b.event.on(k, "click", this.getCloseSideHandler()), b.event.on(r, "click", this.getCloseSideHandler()), b.event.on(u, "click", this.getCloseSideHandler()), b.event.on(x, "click", this.getCloseSideHandler()), b.event.on(a, "scroll", this.getScrollHandler()), b.event.on(a, "resize", this.getResizeHandler()), this.isClose=!1, this.clientWidth = document.body.clientWidth, this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop, this.show()
        }
    }
    function d(a, c) {
        var d = document.createElement("div");
        return d.style.cssText = "width:" + a[0] + "px;height:" + a[1] + "px;position:absolute;left:0px;top:0px;", b.ad.embed(d, c.type, a[0], a[1], b.ad.createHTML(c.type, c.src, a[0], a[1], c.link, c.monitor, c.pv)), d
    }
    function e(a) {
        var b, c, d;
        "big" === a ? (b = j, c = l[1], d = h) : (b = k, c = m[1], d = i);
        var e = document.createElement("div");
        return e.style.cssText = "width:" + b[0] + "px;height:" + b[1] + "px;position:absolute;left:0px;top:" + c + "px;background:url(" + d + ") no-repeat right center #ebebeb;cursor:pointer", e
    }
    function f(a, c) {
        var d, e;
        "big" === a ? (d = l[0], e = l[1] + j[1]) : (d = m[0], e = m[1] + k[1]);
        var f = new b.Box({
            width: d,
            height: e,
            position: c,
            autoShow: 1,
            follow: !0,
            zIndex: 10501
        });
        return f
    }
    function g(a, b, c) {
        c.getMain().appendChild(a), c.getMain().appendChild(b)
    }
    var h = "http://d1.sina.com.cn/d1images/close_btn/40x18_1.jpg", i = "http://d1.sina.com.cn/d1images/close_btn/25x45_1.gif", j = [120, 18], k = [25, 45], l = [120, 270], m = [25, 270], n = 100, o = 700, p = 1024;
    c.prototype = {
        getResizeHandler: function() {
            var a = this;
            return function() {
                a.clientWidth = document.body.clientWidth, a.show()
            }
        },
        getScrollHandler: function() {
            var a = this;
            return function() {
                a.scrollTop = document.documentElement.scrollTop || document.body.scrollTop, a.show()
            }
        },
        show: function() {
            this.isClose || (this.scrollTop > this.config.expandpos && this.clientWidth > p ? (this.leftSmall.hide(), this.rightSmall.hide(), this.leftBig.show(), this.rightBig.show()) : (this.leftSmall.show(), this.rightSmall.show(), this.leftBig.hide(), this.rightBig.hide()))
        },
        getCloseSideHandler: function() {
            var a = this;
            return function() {
                a.isClose=!0, a.leftSmall.hide(), a.leftBig.hide(), a.rightSmall.hide(), a.rightBig.hide()
            }
        }
    }, b.CoupletExtMedia = b.CoupletExtMedia || c
}(window, window.sinaadToolkit), function(a, b, c) {
    "use strict";
    function d(a) {
        if (b.browser.mobile)
            try {
                b.debug("Media: In building couplet complete!"), c.done(c.couplet)
        } catch (d) {} else {
            this.delay = a.delay ? parseInt(a.delay, 10) : 0, a.mainWidth = a.mainWidth || i[0], a.mainHeight = a.mainHeight || i[1], a.sideWidth = a.sideWidth || j[0], a.sideHeight = a.sideHeight || j[1], a.src = b.array.ensureArray(a.src), a.type = b.array.ensureArray(a.type), a.link = b.array.ensureArray(a.link), this.config = a, this.pdps = a.pdps, this.deferred = new b.Deferred;
            var k = this.left = new b.Box({
                width: a.sideWidth,
                height: a.sideHeight + g[1],
                position: "left " + a.top || 0,
                autoShow: 1,
                minViewportWidth: a.mainWidth + 2 * a.sideWidth,
                zIndex: 10500,
                className: "sinaads-couplet-side sinaads-couplet-side-left"
            }), l = this.right = new b.Box({
                width: a.sideWidth,
                height: a.sideHeight + g[1],
                position: "right " + a.top || 0,
                autoShow: 1,
                minViewportWidth: a.mainWidth + 2 * a.sideWidth,
                zIndex: 10500,
                className: "sinaads-couplet-side sinaads-couplet-side-right"
            }), m = this.main = new b.Box({
                width: a.mainWidth,
                height: a.mainHeight,
                position: "center " + a.top || 0,
                zIndex: 10500
            }), n = this.mainContent = document.createElement("div");
            n.style.cssText = "width:" + a.mainWidth + "px;height:" + a.mainHeight + "px;overflow:hidden;margin:0px auto;position:relative;";
            var o = this.mainCloseBtn = document.createElement("div");
            o.style.cssText = "width:" + h[0] + "px;height:" + h[1] + "px;position:absolute;top:" + a.mainHeight + "px;right:0px;background:url(" + f + ") no-repeat;cursor:pointer;";
            var p = this.leftContent = document.createElement("div");
            p.style.cssText = "width:" + a.sideWidth + "px;height:" + a.sideHeight + "px;position:absolute;left:0px;top:0px;";
            var q = this.leftCloseBtn = document.createElement("div");
            q.className = "sinaads-couplet-side-close", q.style.cssText = "width:" + a.sideWidth + "px;height:" + g[1] + "px;position:absolute;left:0px;top:" + a.sideHeight + "px;background:url(" + e + ") no-repeat right center #ebebeb;cursor:pointer";
            var r = this.rightContent = document.createElement("div");
            r.style.cssText = "width:" + a.sideWidth + "px;height:" + a.sideHeight + "px;position:absolute;left:0px;top:0px;";
            var s = this.rightCloseBtn = document.createElement("div");
            s.className = "sinaads-couplet-side-close", s.style.cssText = "width:" + a.sideWidth + "px;height:" + g[1] + "px;position:absolute;left:0px;top:" + a.sideHeight + "px;background:url(" + e + ") no-repeat left center #ebebeb;cursor:pointer", m.getMain().appendChild(n), m.getMain().appendChild(o), k.getMain().appendChild(p), k.getMain().appendChild(q), l.getMain().appendChild(r), l.getMain().appendChild(s), b.ad.embed(p, a.type[1], a.sideWidth, a.sideHeight, b.ad.createHTML(a.type[1], a.src[1], a.sideWidth, a.sideHeight, a.link[1] || a.link[0], a.monitor, a.pv)), b.ad.embed(r, a.type[2] || a.type[1], a.sideWidth, a.sideHeight, b.ad.createHTML(a.type[2] || a.type[1], a.src[2] || a.src[1], a.sideWidth, a.sideHeight, a.link[2] || a.link[1] || a.link[0], a.monitor, a.pv)), b.event.on(o, "click", this.getCloseMainHandler()), b.event.on(q, "click", this.getCloseSideHandler()), b.event.on(s, "click", this.getCloseSideHandler()), b.event.on(r, "mouseover", this.getHoverSideHandler()), b.event.on(p, "mouseover", this.getHoverSideHandler());
            try {
                b.debug("Media: In building couplet complete!"), c.done(c.couplet)
            } catch (d) {}
        }
    }
    var e = "http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg", f = "http://d2.sina.com.cn/d1images/lmt/cls_66x22.gif", g = [120, 18], h = [66, 22], i = [1e3, 90], j = [120, 270];
    d.prototype = {
        timer: null,
        aniTimer: null,
        isshow: 0,
        show: function() {
            var a = this;
            this.tmpWidth = 0, this.isshow = 1, clearTimeout(this.timer), this.mainContent.style.width = "0px", b.ad.embed(this.mainContent, this.config.type[0], this.config.mainWidth, this.config.mainHeight, b.ad.createHTML(this.config.type[0], this.config.src[0], this.config.mainWidth, this.config.mainHeight, this.config.link[0], this.config.monitor, this.config.pv)), this.main.show(), this.aniTimer = setInterval(function() {
                a.tmpWidth < a.config.mainWidth ? (a.tmpWidth += (a.config.mainWidth - a.tmpWidth) / 4, a.mainContent.style.width = a.tmpWidth + "px") : (a.mainContent.style.width = a.config.mainWidth + "px", clearInterval(a.aniTimer), a.deferred.resolve())
            }, 50), a.timer = setTimeout(function() {
                a.hide()
            }, 8e3)
        },
        hide: function() {
            this.main.hide(), this.mainContent.innerHTML = "", this.isshow = 0, this.aniTimer && clearInterval(this.aniTimer), this.timer && clearTimeout(this.timer)
        },
        getCloseMainHandler: function() {
            var a = this;
            return function() {
                a.hide(), a.mainIsClose=!0
            }
        },
        getHoverSideHandler: function() {
            var a = this;
            return function() {
                a.mainIsClose || a.show()
            }
        },
        getCloseSideHandler: function() {
            var a = this;
            return function() {
                a.hide(), a.left.hide(), a.right.hide()
            }
        }
    }, b.CoupletMedia = b.CoupletMedia || d
}(window, window.sinaadToolkit, window.sinaadsROC), function(a, b, c) {
    "use strict";
    function d(d) {
        if (b.browser.mobile)
            try {
                b.debug("Media: In building float complete!"), c.done(c["float"])
        } catch (i) {} else {
            this.delay = d.delay ? parseInt(d.delay, 10) : 0, d.sideWidth = d.sideWidth || g[0], d.sideHeight = d.sideHeight || g[1], d.src = b.array.ensureArray(d.src), d.type = b.array.ensureArray(d.type), d.link = b.array.ensureArray(d.link), d.top = d.top || h, this.showPos = d.showPos || 0, this.follow = d.follow || this.showPos || 0, this.config = d, this.pdps = d.pdps;
            var j = this.left = new b.Box({
                width: d.sideWidth,
                height: d.sideHeight,
                position: "left " + d.top,
                autoShow: 1,
                minViewportWidth: (d.contentWidth || 1e3) + 2 * d.sideWidth,
                zIndex: 10500,
                follow: this.follow,
                className: "sinaads-float sinaads-float-left"
            }), k = this.right = new b.Box({
                width: d.sideWidth,
                height: d.sideHeight,
                position: "right " + d.top,
                autoShow: 1,
                minViewportWidth: (d.contentWidth || 1e3) + 2 * d.sideWidth,
                zIndex: 10500,
                follow: this.follow,
                className: "sinaads-float sinaads-float-right"
            }), l = this.leftContent = document.createElement("div");
            l.style.cssText = "width:" + d.sideWidth + "px;height:" + d.sideHeight + "px;position:absolute;left:0px;top:0px;", b.ad.embed(l, d.type[0], d.sideWidth, d.sideHeight, b.ad.createHTML(d.type[0], d.src[0], d.sideWidth, d.sideHeight, d.link[0], d.monitor, d.pv));
            var m = this.leftCloseBtn = document.createElement("div");
            m.className = "sinaads-float-close", m.style.cssText = "width:" + f[0] + "px;height:" + f[1] + "px;position:absolute;right:0px;top:0px;background:url(" + e + ") no-repeat right center #ebebeb;cursor:pointer";
            var n = this.rightContent = document.createElement("div");
            n.style.cssText = "width:" + d.sideWidth + "px;height:" + d.sideHeight + "px;position:absolute;left:0px;top:0px;", b.ad.embed(n, d.type[1] || d.type[0], d.sideWidth, d.sideHeight, b.ad.createHTML(d.type[1] || d.type[0], d.src[1] || d.src[0], d.sideWidth, d.sideHeight, d.link[1] || d.link[0], d.monitor, d.pv));
            var o = this.rightCloseBtn = document.createElement("div");
            o.className = "sinaads-float-close", o.style.cssText = "width:" + f[0] + "px;height:" + f[1] + "px;position:absolute;left:0px;top:0px;background:url(" + e + ") no-repeat left center #ebebeb;cursor:pointer", j.getMain().appendChild(l), j.getMain().appendChild(m), k.getMain().appendChild(n), k.getMain().appendChild(o), this.closeSideHandler = this.getCloseSideHandler(), b.event.on(m, "click", this.closeSideHandler), b.event.on(o, "click", this.closeSideHandler), d.showPos && (this.getScrollHandler()(), b.event.on(a, "scroll", this.getScrollHandler()));
            try {
                b.debug("Media: In building float complete!"), c.done(c["float"])
            } catch (i) {}
        }
    }
    var e = "http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg", f = [40, 18], g = [120, 300], h = 100;
    d.prototype = {
        getCloseSideHandler: function() {
            var a = this;
            return function() {
                a.isClose=!0, a.left.hide(), a.right.hide()
            }
        },
        destory: function() {
            b.event.un(this.leftCloseBtn, "click", this.closeSideHandler), b.event.un(this.rightCloseBtn, "click", this.closeSideHandler), this.left.remove(), this.right.remove()
        },
        decideShow: function() {
            this.isClose || (this.scrollTop > this.showPos ? (this.left.show(), this.right.show()) : (this.left.hide(), this.right.hide()))
        },
        getScrollHandler: function() {
            var a = this;
            return function() {
                a.scrollTop = document.documentElement.scrollTop || document.body.scrollTop, a.decideShow()
            }
        }
    }, b.FloatMedia = b.FloatMedia || d
}(window, window.sinaadToolkit, window.sinaadsROC), function(a, b) {
    "use strict";
    function c(a) {
        var c = this;
        this.deferred = new b.Deferred;
        var k = this.width = a.main.width, l = this.height = a.main.height;
        this.delay = a.delay ? parseInt(a.delay, 10) : 0, this.config = a, this.isHideMini=!this.config.mini.src;
        var m = this.main = new b.Box({
            width: k,
            height: l,
            position: "right " + (a.main.top || "top"),
            follow: 1,
            zIndex: 10010
        }), n = this.mini = new b.Box({
            width: h[0],
            height: h[1] + j[1] + i[1],
            position: "right " + (a.mini.top || "bottom"),
            follow: 1,
            zIndex: 1e4
        }), o = this.mainCloseBtn = document.createElement("div");
        o.style.cssText = ["width:" + k + "px", "height:" + g[1] + "px", "position:absolute", "right:0px", "bottom:-" + g[1] + "px", "z-index:9999", "background:url(" + f + ") no-repeat left top #eee", "margin:0", "padding:0", "cursor:pointer"].join(";");
        var p = this.miniCloseBtn = document.createElement("div");
        p.style.cssText = "margin:0px;padding:0px;display:block;cursor:pointer;width:" + j[0] + "px;height:" + j[1] + "px;position:absolute;left:0px;top:" + (h[1] + i[1]) + "px;background:url(" + e + ") no-repeat center;";
        var q = this.miniReplayBtn = document.createElement("div");
        q.style.cssText = "width:" + i[0] + "px;height:" + i[1] + "px;position:absolute;left:0px;top:" + h[1] + "px;background:url(" + d + ") no-repeat center;margin:0px;padding:0px;display:block;cursor:pointer;", b.event.on(p, "click", this.getCloseMiniHandler()), b.event.on(q, "click", this.getReplayHandler()), b.event.on(o, "click", this.getCloseMainHandler());
        var r = this.mainContent = document.createElement("div"), s = this.miniContent = document.createElement("div");
        m.getMain().appendChild(r), m.getMain().appendChild(o), n.getMain().appendChild(s), n.getMain().appendChild(q), n.getMain().appendChild(p), this.delay ? setTimeout(function() {
            c.show()
        }, 1e3 * this.delay) : this.show()
    }
    var d = "http://d5.sina.com.cn/d1images/lmt/play.gif", e = "http://d1.sina.com.cn/d1images/lmt/close1.jpg", f = "http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg", g = [40, 18], h = [25, 150], i = [25, 24], j = [25, 45];
    c.prototype = {
        timer: null,
        show: function() {
            var a = this, c = this.config;
            clearTimeout(this.timer), b.ad.embed(this.mainContent, c.main.type, c.main.width, c.main.height, b.ad.createHTML(c.main.type, c.main.src, c.main.width, c.main.height, c.main.link, c.monitor, c.pv)), this.main.show(), this.miniContent.innerHTML = "", this.mini.hide(), this.deferred.resolve(), this.timer = setTimeout(function() {
                a.hide()
            }, 1e3 * c.duration || 5e3)
        },
        hide: function() {
            var a = this.config;
            clearTimeout(this.timer), this.mainContent.innerHTML = "", this.main.hide(), this.isHideMini || (this.mini.show(), b.ad.embed(this.miniContent, a.mini.type, 25, 150, b.ad.createHTML(a.mini.type, a.mini.src, 25, 150, a.mini.link, a.monitor, a.pv)))
        },
        getCloseMiniHandler: function() {
            var a = this;
            return function() {
                clearTimeout(a.timer), a.mini.hide(), a.miniContent.innerHTML = ""
            }
        },
        getReplayHandler: function() {
            var a = this;
            return function() {
                a.show()
            }
        },
        getCloseMainHandler: function() {
            var a = this;
            return function() {
                a.hide()
            }
        }
    }, b.FollowMedia = b.FollowMedia || c
}(window, window.sinaadToolkit), function(a, b, c) {
    "use strict";
    function d(d) {
        var h = document.getElementById("FullScreenWrap");
        if (h) {
            var j = this;
            this.deferred = new b.Deferred;
            var k = d.hasClose ? b.ad.getTimesInRange("FullscreenMedia" + d.pdps, i, 864e5): 1;
            this.width = d.width, this.height = d.height + (d.hasClose ? 40 : 0), this.contentHeight = d.height, this.src = d.src, this.link = d.link, this.type = d.type, this.monitor = d.monitor, this.pv = d.pv, this.transitionStep = d.hasClose ? 90 : 98, this.replaySrc = d.replaySrc || g, this.replaySrcType = d.replaySrcType || "flash", this.duration = d.duration || (d.hasClose ? 8e3 : 5e3), this.pdps = d.pdps, this.replayFuncName = "fullscreenReplayFunc" + d.pdps, this.delay = d.delay ? parseInt(d.delay, 10) : 0;
            var l = this.container = document.createElement("div");
            l.style.cssText = "width:" + this.width + "px;margin:0px auto;position:relative;", h.appendChild(l);
            var m = this.main = document.createElement("div");
            m.className = "sinaads-fullscreen-main", m.style.cssText = "display:none;";
            var n = this.mainContent = document.createElement("div");
            if (n.style.cssText = "position:relative;overflow:hidden;width:" + this.width + "px;height:0px;margin:0;padding:0;", m.appendChild(n), l.appendChild(m), d.hasClose) {
                var o = this.mainCloseBtn = document.createElement("div");
                o.style.cssText = "cursor:pointer;position:absolute;width:77px;height:31px;right:0px;top:" + this.contentHeight + "px;background:url(" + e + ") no-repeat;margin:0;padding:0;";
                var p = this.mini = document.createElement("div");
                p.style.cssText = "width:25px;height:117px;position:absolute;left:" + this.width + "px;top:0px;margin:0;padding:0;overflow:hidden;";
                var q = this.miniContent = document.createElement("div");
                q.style.cssText = "position:absolute;left:0px;top:0px;width:25px;height:100px;overflow:hidden;margin:0;padding:0";
                var r = this.miniCloseBtn = document.createElement("div");
                if (r.style.cssText = "cursor:pointer;width:25px;height:17px;position:absolute;right:0px;top:100px;background:url(" + f + ") no-repeat right;margin:0;padding:0;", m.appendChild(o), p.appendChild(q), d.replaySrc) {
                    var s = document.createElement("div");
                    s.style.cssText = "cursor:pointer;position:absolute;left:0px;top:0px;width:25px;height:100px;overflow:hidden;margin:0;padding:0;background:#fff;opacity:0;*filter:alpha(opacity=0);", q.innerHTML = b.ad.createHTML(this.replaySrcType, this.replaySrc, 25, 100, this.monitor, this.pv), p.appendChild(s), b.event.on(s, "click", this.getReplayHandler())
                } else 
                    a[this.replayFuncName] = this.getReplayHandler(), q.innerHTML = b.swf.createHTML({
                        url: g,
                        width: 25,
                        height: 100,
                        wmode: "transparent",
                        allowScriptAccess: "always",
                        vars: {
                            replayFunc: this.replayFuncName
                        }
                    });
                p.appendChild(r), l.appendChild(p), b.event.on(this.mainCloseBtn, "click", this.getCloseMainHandler()), b.event.on(this.miniCloseBtn, "click", this.getCloseMiniHandler())
            }
            this.delay ? setTimeout(function() {
                k ? j.show() : j.hide()
            }, 1e3 * this.delay) : k ? j.show() : j.hide()
        } else 
            try {
                b.debug("Media: In building fullscreen complete!"), c.done(c.fullscreen)
        } catch (t) {}
    }
    var e = "http://d1.sina.com.cn/d1images/fullscreen/cls_77x31.gif", f = "http://d3.sina.com.cn/d1images/fullscreen/close.gif", g = "http://d2.sina.com.cn/litong/zhitou/sinaads/release/fullscreen_replay_btn.swf", h = 0, i = 2;
    d.prototype = {
        timer: null,
        aniTimer: null,
        show: function() {
            var a = this;
            clearTimeout(this.timer), b.ad.embed(this.mainContent, this.type, this.width, this.contentHeight, b.ad.createHTML(this.type, this.src, this.width, this.contentHeight, this.link, this.monitor, this.pv)), this.main.style.display = "block", this.mini && (this.mini.style.display = "none"), this.expand(this.height, this.transitionStep, function() {
                a.deferred.resolve(), a.timer = setTimeout(function() {
                    a.hide()
                }, a.duration)
            })
        },
        hide: function() {
            var a = this;
            clearTimeout(this.timer), this.fold(this.transitionStep, function() {
                a.main.style.display = "none", a.mini && (a.mini.style.display = "block");
                try {
                    b.debug("Media: In building fullscreen complete!"), c.done(c.fullscreen)
                } catch (d) {}
            })
        },
        expand: function(a, b, c) {
            var d = this;
            a > h ? (h += b, this.mainContent.style.height = Math.min(a, h) + "px", this.aniTimer = setTimeout(function() {
                d.expand(a, b, c)
            }, 100)) : (clearTimeout(this.aniTimer), c())
        },
        fold: function(a, b) {
            var c = this;
            h > 0 ? (h -= a, this.mainContent.style.height = h + "px", this.aniTimer = setTimeout(function() {
                c.fold(a, b)
            }, 100)) : (clearTimeout(this.aniTimer), b())
        },
        getReplayHandler: function() {
            var a = this;
            return function() {
                a.show()
            }
        },
        getCloseMainHandler: function() {
            var a = this;
            return function() {
                a.hide()
            }
        },
        getCloseMiniHandler: function() {
            var a = this;
            return function() {
                clearTimeout(this.timer), a.mini.style.display = "none"
            }
        }
    }, b.FullscreenMedia = b.FullscreenMedia || d
}(window, window.sinaadToolkit, window.sinaadsROC), function(a, b) {
    "use strict";
    function c(c) {
        this.cookieKey = c.cookieKey;
        var f = this.width = c.width, g = this.height = c.height, h = this.main = new b.Box({
            position: {
                of: [a, a],
                at: "left top",
                my: "left top+120px"
            },
            follow: 1,
            width: f,
            autoShow: 1,
            height: g + e[1]
        }), i = this.mainContent = document.createElement("div");
        i.style.cssText = "width:" + f + "px;height:" + g + "px;position:absolute;right:0px;top:0px;", b.ad.embed(i, c.type, f, g, b.ad.createHTML(c.type, c.src, f, g, c.link, c.monitor, c.pv));
        var j = this.mainCloseBtn = document.createElement("div");
        j.style.cssText = ["width:" + f + "px", "height:" + e[1] + "px", "position:absolute", "right:0px", "top:" + g + "px", "z-index:10000", "background:url(" + d + ") no-repeat right center #ebebeb", "margin:0", "padding:0", "cursor:pointer"].join(";"), h.getMain().appendChild(j), h.getMain().appendChild(i), this.closeHandler = this.getCloseHandler(), b.event.on(j, "click", this.closeHandler)
    }
    var d = "http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg", e = [40, 18];
    c.prototype = {
        resizeTimeout: null,
        getCloseHandler: function() {
            var a = this;
            return function() {
                a.mainContent.innerHTML = "", a.main.hide(), b.cookie.get(a.cookieKey) || b.cookie.set(a.cookieKey, "1", {
                    path: "/",
                    expires: 6e5
                }), b.event.un(a.mainCloseBtn, "click", a.closeHandler)
            }
        }
    }, b.LeftSuspendMedia = b.LeftSuspendMedia || c
}(window, window.sinaadToolkit), function(a, b, c) {
    "use strict";
    function d(a, d) {
        var j = d.position || "center center", k = [42, 22], l = f, m = d.height, n = 0;
        "center center" === j && (k = [66, 22], l = e, m = parseInt(m, 10) + k[1], n = k[1]);
        var o = this.main = new b.Box({
            position: j,
            width: d.width,
            height: m,
            follow: d.follow || 1,
            autoShow: 1,
            zIndex: d.zIndex || g
        }), p = this.button = document.createElement("div");
        p.style.cssText = ["width:" + k[0] + "px", "height:" + k[1] + "px", "position:absolute", "right:0px", "top:0px", "z-index:" + h, "background:url(" + l + ") no-repeat", "margin:0", "padding:0", "cursor:pointer"].join(";"), o.getMain().appendChild(p), o.getMain().appendChild(a), a.style.cssText += ";display:block;overflow:hidden;text-decoration:none;padding-top:" + n + "px", a.innerHTML = '<ins style="text-decoration:none;margin:0px auto;display:block;overflow:hidden;width:' + d.width + "px;height:" + d.height + 'px;"></ins>', a = a.getElementsByTagName("ins")[0];
        var q = d.src ? b.ad.createHTML(d.type, d.src, d.width, d.height, d.link, d.monitor, d.pv): "";
        switch (d.type[0]) {
        case"text":
        case"image":
        case"url":
        case"adbox":
        case"flash":
            a.innerHTML = q;
            break;
        default:
            b.sandbox.create(a, d.width + "px", d.height + "px", q, {
                sinaads_uid: "PopMediaSandbox" + i++,
                sinaads_ad_pdps: d.pdps,
                sinaads_ad_width: d.width,
                sinaads_ad_height: d.height
            })
        }
        b.event.on(p, "click", this._getCloseHandler());
        try {
            b.debug("Media: In building pop(" + d.pdps + ")complete!"), c.done(d.pdps)
        } catch (r) {}
    }
    var e = "http://d2.sina.com.cn/d1images/lmt/cls_66x22.gif", f = "http://d1.sina.com.cn/shh/ws/2012/09/29/1/close1.gif", g = 11e3, h = 11010, i = 0;
    d.prototype = {
        _getCloseHandler: function() {
            var a = this;
            return function() {
                a.hide()
            }
        },
        hide: function() {
            this.main.hide()
        }
    }, b.PopMedia = b.PopMedia || d
}(window, window.sinaadToolkit, window.sinaadsROC), function(a, b) {
    "use strict";
    function c(a, c) {
        var d = b.cookie.get(h + a), e = new Date;
        return b.isNull(d) ? (e = e.getTime() + 1e3 * 60 * 60 * j, b.cookie.set(i + a, "" + e, {
            expires: 1728e5
        }), d = c ? 1 : 2) : (e = b.cookie.get(i + a), d = parseInt(d, 10) + 1), {
            showCount: d,
            expires: e
        }
    }
    function d(d) {
        var h = this, i = this.width = d.main.width, j = this.height = d.main.height, k = d.mini.width, l = this.miniHeight = g;
        this.delay = d.delay ? parseInt(d.delay, 10) : 0, this.config = d;
        var m = this.main = new b.Box({
            width: i,
            height: j,
            position: d.left + " " + d.top,
            follow: 1,
            zIndex: 10010
        }), n = this.mini = new b.Box({
            width: k,
            height: l,
            position: d.left + " " + d.top,
            follow: 1,
            zIndex: 1e4
        }), o = this.mainContent = document.createElement("div");
        o.style.cssText = "width:" + i + "px;height:" + j + "px;position:absolute;right:0px;bottom:0px;";
        var p = this.miniContent = document.createElement("div");
        p.style.cssText = "width:" + k + "px;height:" + l + "px;position:absolute;right:0px;bottom:0px;";
        var q = this.mainCloseBtn = document.createElement("div");
        q.style.cssText = ["width:" + f[0] + "px", "height:" + f[1] + "px", "position:absolute", "right:0px", "top:0px", "bottom:" + f[1] + "px", "z-index:9999", "background:url(" + e + ") no-repeat", "margin:0", "padding:0", "cursor:pointer"].join(";");
        var r = this.miniCloseBtn = document.createElement("div");
        r.style.cssText = ["width:" + f[0] + "px", "height:" + f[1] + "px", "position:absolute", "right:0px", "top:0px", "bottom:" + f[1] + "px", "z-index:9999", "background:url(" + e + ") no-repeat", "margin:0", "padding:0", "cursor:pointer"].join(";"), this.clientWidth = document.body.clientWidth, this.closeHandler = this.getCloseHandler(), b.event.on(r, "click", this.closeHandler), b.event.on(q, "click", this.closeHandler), this.miniMouseOverHandler = this.getMiniMouseOverHandler(), b.event.on(this.miniContent, "mouseover", this.miniMouseOverHandler), this.resizeHandler = this.getResizeHandler(), b.event.on(a, "resize", this.resizeHandler), m.getMain().appendChild(q), m.getMain().appendChild(o), n.getMain().appendChild(r), n.getMain().appendChild(p), this.timer = null, b.ad.embed(o, d.main.type, i, j, b.ad.createHTML(d.main.type, d.main.src, i, j, d.main.link, d.monitor, d.pv)), b.ad.embed(p, d.mini.type, k, l, b.ad.createHTML(d.mini.type, d.mini.src, k, l, d.link, d.monitor, d.pv));
        var s = this.showInfo = c(d.pdps, !0);
        setTimeout(function() {
            h.render(1 === s.showCount)
        }, 1e3 * this.delay)
    }
    var e = "http://d9.sina.com.cn/litong/zhitou/test/images/close-h.jpg", f = [40, 18], g = 270, h = "SkyScraperMediaCount", i = "SkyScraperMediaOutdate", j = 24, k = 3;
    d.prototype = {
        render: function(a) {
            var c = this.config, d = this.showInfo;
            this.hide(), this.hideMini(), b.page.getViewWidth() >= c.midWidth + 2 * (this.width + c.left) && (a ? (b.cookie.set(h + c.pdps, d.showCount, {
                expires: new Date(parseInt(d.expires, 10))
            }), this.show()) : this.showMini())
        },
        show: function() {
            var a = this, c = this.config;
            b.ad.embed(this.mainContent, c.main.type, c.main.width, c.main.height, b.ad.createHTML(c.main.type, c.main.src, c.main.width, c.main.height, c.main.link, c.monitor, c.pv)), this.main.show(), this.timer = setTimeout(function() {
                a.render()
            }, 1e3 * c.duration || 8e3)
        },
        hide: function() {
            this.timer && clearTimeout(this.timer), this.mainContent.innerHTML = "", this.main.hide()
        },
        showMini: function() {
            var a = this.config;
            a.mini.src && (b.ad.embed(this.miniContent, a.mini.type, a.mini.width, this.miniHeight, b.ad.createHTML(a.mini.type, a.mini.src, a.mini.width, this.miniHeight, a.mini.link, a.monitor, a.pv)), this.mini.show())
        },
        hideMini: function() {
            this.miniContent.innerHTML = "", this.mini.hide()
        },
        getResizeHandler: function() {
            var a = this;
            return function() {
                a.resizeTimer && clearTimeout(a.resizeTimer), a.resizeTimer = setTimeout(function() {
                    a.render()
                }, 500)
            }
        },
        getCloseHandler: function() {
            var c = this;
            return function() {
                c.hide(), c.hideMini(), b.event.un(c.mainCloseBtn, "click", c.closeHandler), b.event.un(c.miniCloseBtn, "click", c.closeHandler), b.event.un(c.miniContent, "mouseover", c.miniMouseOverHandler), b.event.un(a, "resize", c.resizeHandler)
            }
        },
        getMiniMouseOverHandler: function() {
            var a = this;
            return function() {
                var b = a.showInfo = c(a.config.pdps, !1);
                b.showCount <= k && a.render(!0)
            }
        }
    }, b.SkyScraperMedia = b.SkyScraperMedia || d
}(window, window.sinaadToolkit), function(a, b, c) {
    "use strict";
    function d(a) {
        var c = this;
        this.deferred = new b.Deferred;
        var d = b.storage.get("StreamMedia" + a.pdps);
        d = d ? parseInt(d, 10) + 1 : 1, b.storage.set("StreamMedia" + a.pdps, d, 864e5);
        var l = this.width = a.main.width, m = this.height = a.main.height;
        this.delay = a.delay ? parseInt(a.delay, 10) : 0, this.config = a, this.pdps = a.pdps;
        var n = this.main = new b.Box({
            width: l,
            height: m,
            position: "center " + (a.main.top || (l > 320 ? "46" : "center")),
            follow: 1,
            zIndex: i,
            className: "sinaads-stream-main"
        }), o = this.mini = new b.Box({
            width: 25,
            height: 219,
            position: "right bottom",
            follow: 1,
            zIndex: j,
            className: "sinaads-stream-side"
        }), p = this.mainCloseBtn = document.createElement("div");
        p.style.cssText = ["width:" + (l > 375 ? 77 : 66) + "px", "height:" + (l > 375 ? 31 : 22) + "px", "position:absolute", "right:0px", "bottom:" + (l > 375?-31 : - 22) + "px", "z-index:" + i, "background:url(" + (l > 375 ? e : f) + ") no-repeat", "margin:0", "padding:0", "cursor:pointer"].join(";");
        var q = this.miniCloseBtn = document.createElement("div");
        q.style.cssText = "margin:0px;padding:0px;display:block;cursor:pointer;width:25px;height:45px;position:absolute;left:0px;top:174px;background:url(" + h + ") no-repeat center;";
        var r = this.miniReplayBtn = document.createElement("div");
        r.style.cssText = "width:25px;height:24px;position:absolute;left:0px;top:150px;background:url(" + g + ") no-repeat center;margin:0px;padding:0px;display:block;cursor:pointer;", b.event.on(q, "click", this.getCloseMiniHandler()), b.event.on(r, "click", this.getReplayHandler()), b.event.on(p, "click", this.getCloseMainHandler());
        var s = this.mainContent = document.createElement("div"), t = this.miniContent = document.createElement("div");
        n.getMain().appendChild(s), n.getMain().appendChild(p), o.getMain().appendChild(t), o.getMain().appendChild(r), o.getMain().appendChild(q), this.delay ? setTimeout(function() {
            d > k ? c.hide() : c.show()
        }, 1e3 * this.delay) : d > k ? this.hide() : this.show()
    }
    var e = "http://d4.sina.com.cn/d1images/lmt/cls_77x31.gif", f = "http://d2.sina.com.cn/d1images/lmt/cls_66x22.gif", g = "http://d5.sina.com.cn/d1images/lmt/play.gif", h = "http://d1.sina.com.cn/d1images/lmt/close1.jpg", i = 12e3, j = 1e4, k = 2;
    d.prototype = {
        timer: null,
        show: function() {
            var a = this, c = this.config;
            clearTimeout(this.timer), this.miniContent.innerHTML = "", b.ad.embed(this.mainContent, c.main.type, c.main.width, c.main.height, b.ad.createHTML(c.main.type, c.main.src, c.main.width, c.main.height, c.main.link || c.link, c.monitor, c.pv, "", {
                wmode: "transparent"
            })), this.main.show(), this.mini.hide(), this.timer = setTimeout(function() {
                a.hide()
            }, c.duration || (this.width > 300 ? 8e3 : 5e3))
        },
        hide: function() {
            var a = this.config;
            clearTimeout(this.timer), this.mainContent.innerHTML = "", this.mini.show(), this.main.hide(), b.ad.embed(this.miniContent, a.mini.type, 25, 150, b.ad.createHTML(a.mini.type, a.mini.src, 25, 150, a.mini.link || a.link, a.monitor, a.pv));
            try {
                b.debug("Media: In building stream complete!"), c.done(c.stream)
            } catch (d) {}
        },
        getCloseMiniHandler: function() {
            var a = this;
            return function() {
                clearTimeout(a.timer), a.mini.hide(), a.miniContent.innerHTML = ""
            }
        },
        getReplayHandler: function() {
            var a = this;
            return function() {
                a.show()
            }
        },
        getCloseMainHandler: function() {
            var a = this;
            return function() {
                a.hide()
            }
        }
    }, b.StreamMedia = b.StreamMedia || d
}(window, window.sinaadToolkit, window.sinaadsROC), function(a, b) {
    "use strict";
    function c(a, c) {
        if (c.src = b.array.ensureArray(c.src), c.type = b.array.ensureArray(c.type), c.link = b.array.ensureArray(c.link), this.config = c, a.style.display = "block", a.innerHTML = b.ad.createHTML(c.type[0], c.src[0], 0, 0, c.link[0] || "", c.monitor, c.pv) || "", c.src[1]) {
            var d = this.closeBtn = document.createElement("span");
            d.innerHTML = "\xd7", d.style.cssText += ";position:absolute;right:6px;top:6px;line-height:10px;cursor:pointer;color:#8a8678;";
            var e = this.tipContent = document.createElement("div");
            this.tip = new b.Tip(a, {
                width: c.width,
                height: c.height,
                top: c.top || 0,
                left: c.left || 0,
                zIndex: c.zIndex
            }), this.tip.element.appendChild(e), this.tip.element.appendChild(d), e.innerHTML = b.ad.createHTML(c.type[1], c.src[1], c.width, c.height, c.link[1] || c.link[0] || "", c.monitor, c.pv), c.autoShow && this.tip.show(), b.event.on(d, "click", this.getHideHandler())
        }
    }
    b.Tip = function(c, d) {
        this.relateElement = c, this.top = d.top || 0, this.left = d.left || 0, this.element = document.createElement("div"), this.element.style.cssText += ";border:1px solid #ccc;z-index:" + (d.zIndex || 9999) + ";display:none;position:absolute;width:" + d.width + "px;height:" + d.height + "px;overflow:hidden;", this.setPosition(), document.body.insertBefore(this.element, document.body.firstChild), b.event.on(a, "resize", this.getResizeHandler())
    }, b.Tip.prototype = {
        show: function() {
            this.element.style.display = "block"
        },
        hide: function() {
            this.element.style.display = "none"
        },
        setPosition: function() {
            var a = b.dom.getPosition(this.relateElement), c = this.relateElement.offsetHeight || 0;
            this.element.style.left = (this.left || a.left) + "px", this.element.style.top = (this.top || a.top + c) + "px"
        },
        getResizeHandler: function() {
            var a = this;
            return function() {
                a.setPosition()
            }
        }
    }, c.prototype = {
        getHideHandler: function() {
            var a = this;
            return function() {
                a.tip.hide()
            }
        }
    }, b.TipsMedia = b.TipsMedia || c
}(window, window.sinaadToolkit), function(a, b, c) {
    "use strict";
    function d(c) {
        var d = this;
        c.innerWidth = c.width, c.innerHeight = c.height, c.height = j, c.width = i, this.delay = c.delay ? parseInt(c.delay, 10) : 0, this.config = c, this.pdps = c.pdps, this.deferred = new b.Deferred;
        var k = this.main = new b.Box({
            width: c.width,
            height: c.height,
            position: "right bottom",
            follow: 1,
            zIndex: c.zIndex || g
        }), l = this.mainWrap = document.createElement("div");
        l.style.cssText = "position:absolute;left:0px;bottom:0px;width:" + c.width + "px;height:0px;overflow:hidden;";
        var m = this.mainContent = document.createElement("div");
        m.style.cssText = "position:absolute;width:" + c.width + "px;height:" + c.height + "px;left:0px;top:0px;";
        var n = this.closeBtn = document.createElement("div");
        n.style.cssText = "background:url(" + e + ") left top no-repeat;cursor:pointer;z-index:" + h + ";position:absolute;width:42px;height:19px;right:7px;top:1px;", l.appendChild(m), l.appendChild(n), k.getMain().appendChild(l), b.event.on(n, "click", this.getCloseHandler()), b.event.on(n, "mouseover", function(b) {
            var c = b || a.event, d = c.target || c.srcElement;
            d.style.background = "url(" + f + ") left top no-repeat"
        }), b.event.on(n, "mouseout", function(b) {
            var c = b || a.event, d = c.target || c.srcElement;
            d.style.background = "url(" + e + ") left top no-repeat"
        }), this.delay ? setTimeout(function() {
            d.show()
        }, 1e3 * this.delay) : this.show()
    }
    var e = "http://d1.sina.com.cn/shh/ws/2012/09/29/1/close1.gif", f = "http://d1.sina.com.cn/shh/ws/2012/09/29/1/close2.gif", g = 11e3, h = 11010, i = 300, j = 300;
    d.prototype = {
        aniTimer: null,
        show: function() {
            var a = this;
            this.mainWrap.style.height = "0px", this.main.show(), b.ad.embed(this.mainContent, this.config.type, this.config.width, this.config.height, b.ad.createHTML(this.config.type, this.config.src, this.config.width, this.config.height, "", this.config.monitor, this.config.pv) + (this.config.link ? '<a style="position:absolute;background:#fff;opacity:0;filter:alpha(opacity=0);width:' + this.config.innerWidth + "px;height:" + this.config.innerHeight + 'px;left:0;top:24px" href="' + this.config.link + '" target="_blank"></a>' : "")), this.tmpHeight = 0, this.aniTimer = setInterval(function() {
                if (a.tmpHeight < a.config.height)
                    a.tmpHeight += 10, a.mainWrap.style.height = a.tmpHeight + "px";
                else {
                    a.mainWrap.style.height = a.config.height + "px", clearInterval(a.aniTimer);
                    try {
                        b.debug("Media: In building videoWindow complete!"), c.done(c.videoWindow)
                    } catch (d) {}
                }
            }, 20)
        },
        hide: function() {
            this.mainContent.innerHTML = "", this.aniTimer && clearInterval(this.aniTimer), this.main.hide()
        },
        getCloseHandler: function() {
            var a = this;
            return function() {
                a.hide()
            }
        }
    }, b.VideoWindowMedia = b.VideoWindowMedia || d
}(window, window.sinaadToolkit, window.sinaadsROC);
/*
//@ sourceMappingURL=Media.js.map
*/
