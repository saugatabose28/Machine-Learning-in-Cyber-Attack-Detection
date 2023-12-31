sa.u.btn = {
    mo: 1,
    moc: function(a) {
        return a.innerHTML
    },
    z: 100,
    open: function(c, a) {
        a ? window.open(c) : (window.location.href = c)
    },
    show: function(b) {
        var a = sa.g(b);
        if (a) {
            a.style.display = "block";
            a.style.zIndex=++this.z
        }
    },
    init: function(b) {
        var a = sa.getData(b, "act").split("|")[0];
        if (a) {
            switch (a) {
            case"open":
                b.onclick = function() {
                    sa.u.btn.open(sa.getData(b, "url"), 1)
                };
                break;
            case"show":
                b.onclick = function() {
                    sa.u.btn.show(sa.getData(b, "layer") || sa.getData(b, "act").split("|")[1])
                };
                break;
            default:
                break
            }
        }
    }
};
sa.u.img = {
    mo: function(a) {
        return sa.getData(a, "url")
    },
    moc: function(a) {
        return sa.getData(a, "url")
    },
    init: function(b) {
        var a = sa.getData(b, "url");
        if (a) {
            b.innerHTML = '<a href="' + a + '" target="_blank">' + b.innerHTML + "</a>"
        }
    }
};
sa.u.fla = {
    mo: function(a) {
        return sa.getData(a, "url")
    },
    moc: function(a) {
        return sa.getData(a, "url")
    },
    cf: function(c, a, b) {
        var d = "swf" + ( + new Date());
        return ['<object id="' + d + '" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + a + '" height="' + b + '" type="application/x-shockwave-flash">', '<param name="movie" value="' + c + '" />', '<param name="wmode" value="transparent" />', '<param name="quality" value="high">', '<param name="allowscriptaccess" value="always" />', '<param name="scale" value="exactfit" />', '<embed name="' + d + '" width="' + a + '" height="' + b + '" src="' + c + '" quality="high" allowscriptaccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" scale="exactfit" />', "</object>"].join("")
    },
    init: function(d) {
        var b = sa.getData(d, "url"), c = parseInt(d.style.height, 10), a = parseInt(d.style.width, 10);
        d.innerHTML = this.cf(sa.getData(d, "src"), a, c) + (b ? '<a href="' + b + '" target="_blank" class="fla-msk" style="background:#fff;opacity:0;width:' + a + "px;filter:alpha(opacity=0);height:" + c + 'px"></a>' : "")
    }
};
sa.u.vid = {
    cf: function(l, g, d, a, f, k, e, j) {
        a = a || sa.u.PLAYER_URL;
        var c = [];
        var b = "vid" + ( + new Date());
        j && c.push("vol=0");
        f && c.push("link=" + encodeURIComponent(f));
        e && c.push("picurl=" + encodeURIComponent(e));
        j && c.push("autoplay=true");
        k = k || "0x00a0dc";
        return ['<object id="' + b + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="' + g + '" height="' + d + '" align="middle">', '<param name="wmode" value="opaque" />', '<param name="allowScriptAccess" value="always" />', '<param name="scale" value="exactfit" />', '<param name="allowfullscreen" value="true" />', '<param name="movie" value="' + a + "?flvurl=" + l + "&colour=" + k + "&" + c.join("&") + '" />', c.length > 0 ? '<param name="FlashVars" value="' + c.join("&") + '">': "", '<embed name="' + b + '" ' + (c.length > 0 ? 'flashvars="' + c.join("&") + '"' : "") + ' width="' + g + '" height="' + d + '" wmode="opaque" align="middle" allowScriptAccess="always" allowFullScreen="true" src="' + a + "?flvurl=" + l + "&colour=" + k + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">', "</object>"].join("")
    },
    init: function(c) {
        var b = parseInt(c.style.height, 10), a = parseInt(c.style.width, 10);
        c.innerHTML = this.cf(sa.getData(c, "src"), a, b, null, sa.getData(c, "url"), sa.getData(c, "playerskin"), sa.getData(c, "pic"), parseInt(sa.getData(c, "auto"), 10))
    }
};
sa.u.rt = {
    init: function(b) {
        var a = sa.getData(b, "url");
        if (a) {
            b.innerHTML = '<a href="' + a + '" target="_blank" style="display:block;width:' + b.offsetWidth + "px;height:" + b.offsetHeight + 'px;"></a>'
        }
    }
};
sa.u.hottip = {
    cf: function(c, a, b) {
        var d = "swf" + ( + new Date());
        return ['<object id="' + d + '" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + a + '" height="' + b + '" type="application/x-shockwave-flash">', '<param name="movie" value="' + c + '" />', '<param name="wmode" value="transparent" />', '<param name="quality" value="high">', '<param name="allowscriptaccess" value="always" />', '<param name="scale" value="exactfit" />', '<embed name="' + d + '" width="' + a + '" height="' + b + '" src="' + c + '" quality="high" allowscriptaccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" scale="exactfit" />', "</object>"].join("")
    },
    init: function(j) {
        var d = sa.getData(j, "url"), f = parseInt(j.style.height, 10), c = parseInt(j.style.width, 10);
        j.innerHTML = this.cf(sa.getData(j, "src"), c, f) + (d ? '<a href="' + d + '" target="_blank" class="fla-msk" style="background:#fff;opacity:0;width:' + c + "px;filter:alpha(opacity=0);height:" + f + 'px"></a>' : "");
        var g = document.getElementById(j.id + "-tip");
        var b = j.parentNode.offsetWidth;
        if (g.offsetWidth > b / 2) {
            g.style.width = b / 2 + "px"
        }
        var a = (parseInt(j.style.left, 10) || 0) + (c / 2 - g.offsetWidth / 2);
        if (a < 0) {
            a = 0
        } else {
            if ((a + g.offsetWidth) > b) {
                a = b - g.offsetWidth
            }
        }
        g.style.left = a + "px";
        g.style.top = (parseInt(j.style.top, 10) || 0) + f + "px";
        j.onmouseover = function() {
            g.style.visibility = "visible"
        };
        j.onmouseout = function() {
            g.style.visibility = "hidden"
        }
    }
};
sa.u.txt = {
    mo: function(a) {
        return sa.getData(a, "url")
    },
    moc: function(a) {
        return sa.getData(a, "url")
    },
    init: function(c) {
        var a = sa.getData(c, "url"), b = sa.getData(c, "tstyle");
        text = sa.getData(c, "text");
        c.style.cssText += ";" + b;
        c.innerHTML = text;
        if (a) {
            c.innerHTML = '<a style="color:inherit;font:inherit;" href="' + a + '" target="_blank" style="' + b + '">' + c.innerHTML + "</a>"
        }
    }
};
sa.u.slider = {
    uid: 0,
    o: {},
    gUID: function() {
        return "s-" + this.uid++
    },
    gObj: function(a) {
        return this.o[sa.getData(a, "uid")]
    },
    gPics: function(d) {
        var b = d.getElementsByTagName("li"), c = 0, a, f = [];
        while (a = b[c++]) {
            f.push({
                src: sa.getData(a, "src"),
                tsrc: sa.getData(a, "t-src"),
                url: sa.getData(a, "url")
            })
        }
        return f
    },
    gen: function(t, k, z, E, g, D, d, C, B, j, q, c, y, f, v, m) {
        var A = [], n = [], x = 0, o, u = t.length;
        while (o = t[x++]) {
            A.push('<div mo="slider-b-' + x + '" class="slider-b" style="width:' + k + "px;height:" + z + 'px"><a href="' + o.url + '" target="_blank">加载中...</a></div>');
            n.push('<div mo="slider-s-' + x + '" class="slider-s" data-idx="' + (x - 1) + '" style="width:' + D + "px;height:" + d + "px; border-width:" + f + "px;border-color:" + v + ";margin:" + m + 'px;"><a href="' + o.url + '" target="_blank"><img src="' + o.tsrc + '" style="width:' + D + "px;height:" + d + 'px"/></a></div>')
        }
        var e = "";
        var a = "";
        var r = "silder-left-right";
        if (y == 0) {
            e = "width:" + (k * t.length) + "px;height:" + z + "px";
            r = "slider-left-right"
        } else {
            if (y == 1) {
                e = "width:" + k + "px;height:" + (z * t.length) + "px";
                r = "slider-up-down"
            } else {
                if (y == 2) {
                    e = "width:" + k + "px;height:" + z + "px;";
                    a = "overlap-block";
                    r = "fade-in-out"
                }
            }
        }
        return ['<div class="slider-mask" style="width:' + k + "px;height:" + z + 'px">', '<div class="' + r + " " + a + '" style="' + e + '">' + A.join("") + "</div>", "</div>", '<div class="slider-t" style="left:' + C + "px;top:" + B + "px;width:" + E + "px;height:" + g + 'px">', '<div class="slider-mask" style="width:' + E + "px;height:" + g + 'px">', '<div class="slider-mask" style="top:0px;left:0px;width:' + (!q ? ((D + (m + f) * 2) * t.length) : E) + "px;height:" + (!q ? g : (d + (m + f) * 2) * t.length) + 'px;">' + n.join("") + "</div>", "</div>", c ? (!q ? '<div class="slider-a slider-a-l" onclick="sa.u.slider.roll(this,' + (D + (m + f) * 2) + ',1,0,0)" style="top:' + (g / 2 - 8) + 'px;left:-11px;"></div><div class="slider-a slider-a-r" onclick="sa.u.slider.roll(this,' + (D + (m + f) * 2) + ",-1," + (E - (D + (m + f) * 2) * (t.length - 1)) + ',0)" style="top:' + (g / 2 - 8) + 'px;right:-11px;"></div>' : '<div class="slider-a slider-a-t" onclick="sa.u.slider.roll(this,' + (d + (m + f) * 2) + ',1,0,1)" style="left:' + (E / 2 - 8) + 'px;top:-11px;"></div><div class="slider-a slider-a-b" onclick="sa.u.slider.roll(this,' + (d + (m + f) * 2) + ",-1," + (g - (d + (m + f) * 2) * (t.length - 1)) + ',1)" style="left:' + (E / 2 - 8) + 'px;bottom:-11px;"></div>'): "", "</div>"].join("")
    },
    to: function(d, b) {
        if (isFlashPlaying) {
            return 
        }
        var g = this.gObj(d);
        if (g.animationEffect == 0) {
            var f =- b * g.bw;
            g.m.style.left = f + "px"
        } else {
            if (g.animationEffect == 1) {
                var f =- b * g.bh;
                g.m.style.top = f + "px"
            } else {
                if (g.animationEffect == 2) {
                    g.m.childNodes[g.i].style.opacity = 0;
                    g.m.childNodes[g.i].style.visibility = "hidden";
                    g.m.childNodes[b].style.visibility = "visible";
                    g.m.childNodes[b].style.opacity = 1
                } else {
                    var f =- b * g.bw;
                    g.m.style.left = f + "px"
                }
            }
        }
        var a = g.m.childNodes[b], c = g.ps[b];
        !c.loaded && (a.innerHTML = a.innerHTML.replace("加载中...", sa.u.slider.getResource(c, g.bw, g.bh)));
        c.loaded = 1;
        sa.removeClass(g.t.childNodes[g.i], "slider-s-h");
        g.i = b;
        sa.addClass(g.t.childNodes[g.i], "slider-s-h")
    },
    auto: function(a) {
        var b = this.gObj(a);
        b.timer = setInterval(function() {
            var c = (b.i == b.ps.length - 1 ? 0 : (b.i + 1));
            sa.u.slider.to(a, c)
        }, b.dur * 1000)
    },
    roll: function(g, f, b, a, c) {
        var d = g.parentNode.childNodes[0].childNodes[0];
        if (d) {
            var h = (c ? parseInt(d.style.top, 10) : parseInt(d.style.left, 10));
            if (b < 0 ? h >= a : h < a) {
                if (c) {
                    d.style.top = h + f * b + "px"
                } else {
                    d.style.left = h + f * b + "px"
                }
            }
        }
    },
    preload: function(f) {
        var g = this.gObj(f);
        var a = g.m.childNodes[0], d = g.ps[0];
        var c = g.m.childNodes;
        for (var b = c.length - 1; b >= 0; b--) {
            a = c[b];
            d = g.ps[b];
            !d.loaded && (a.innerHTML = a.innerHTML.replace("加载中...", this.getResource(d, g.bw, g.bh)));
            d.loaded = 1;
            a.style.visibility = "hidden";
            a.style.opacity = 0
        }
        g.m.childNodes[0].style.visibility = "visible";
        g.m.childNodes[0].style.opacity = 1
    },
    getResource: function(e, a, c) {
        if (e.src.toLowerCase().match(/.flv$/)) {
            var b = sa.u.PLAYER_URL;
            var d = [];
            var f = "vid" + ( + new Date());
            return ['<object id="' + f + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="' + a + '" height="' + c + '" align="middle">', '<param name="wmode" value="opaque" />', '<param name="allowScriptAccess" value="always" />', '<param name="scale" value="exactfit" />', '<param name="allowfullscreen" value="true" />', '<param name="movie" value="' + b + "?flvurl=" + e.src + '" />', d.length > 0 ? '<param name="FlashVars" value="' + d.join("&") + '">': "", '<embed name="' + f + '" ' + (d.length > 0 ? 'flashvars="' + d.join("&") + '"' : "") + ' width="' + a + '" height="' + c + '" wmode="opaque" align="middle" allowScriptAccess="always" allowFullScreen="true" src="' + b + "?flvurl=" + e.src + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">', "</object>"].join("")
        } else {
            return '<img src="' + e.src + '" style="width:' + a + "px;height:" + c + 'px"/>'
        }
    },
    init: function(c) {
        var b = this.gUID(), d = this.gPics(c), f = parseInt(sa.getData(c, "bw"), 10), a = parseInt(sa.getData(c, "bh"), 10);
        c.setAttribute("data-uid", b);
        c.innerHTML = this.gen(d, f, a, parseInt(sa.getData(c, "tbw"), 10) || 300, parseInt(sa.getData(c, "tbh"), 10) || 250, parseInt(sa.getData(c, "tw"), 10) || 40, parseInt(sa.getData(c, "th"), 10) || 40, parseInt(sa.getData(c, "tx"), 10), parseInt(sa.getData(c, "ty"), 10), sa.getData(c, "td"), parseInt(sa.getData(c, "dir"), 10) || 0, parseInt(sa.getData(c, "ov"), 10) || 0, parseInt(sa.getData(c, "animationEffect"), 10) || 0, parseInt(sa.getData(c, "tbbw"), 10) || 1, sa.getData(c, "tbbc"), parseInt(sa.getData(c, "tbbm"), 10) || 2);
        this.o[b] = {
            timer: null,
            dur: parseInt(sa.getData(c, "dur") || 5, 10),
            mov: 0,
            ps: d,
            bw: f,
            bh: a,
            m: c.childNodes[0].childNodes[0],
            t: c.childNodes[1].childNodes[0].childNodes[0],
            i: 0,
            animationEffect: parseInt(sa.getData(c, "animationEffect")) || 0
        };
        if (parseInt(sa.getData(c, "animationEffect")) == 2) {
            this.preload(c)
        }
        c.onmouseover = function(e) {
            var e = e || window.event, g = e.target || e.srcElement, h = sa.u.slider.gObj(this).timer;
            h && clearInterval(h);
            while (g != this) {
                if (sa.hasClass(g, "slider-s")) {
                    sa.u.slider.to(this, parseInt(sa.getData(g, "idx"), 10));
                    break
                }
                g = g.parentNode
            }
        };
        c.onmouseout = function(e) {
            var e = e || window.event, g = e.target || e.srcElement;
            sa.u.slider.auto(this)
        };
        sa.u.slider.to(c, 0);
        sa.u.slider.auto(c)
    }
};
sa.u.tabslider = {
    uid: 0,
    o: {},
    gUID: function() {
        return "s-" + this.uid++
    },
    gObj: function(a) {
        return this.o[sa.getData(a, "uid")]
    },
    gItems: function(d) {
        var b = d.getElementsByTagName("li"), c = 0, a, f = [];
        while (a = b[c++]) {
            f.push({
                src: sa.getData(a, "pic"),
                text: sa.getData(a, "text"),
                url: sa.getData(a, "url")
            })
        }
        return f
    },
    gen: function(c, p, x, g, u) {
        var k = x.charAt(0) === "0", j = x.substring(1).replace("0", "").length, d = Math.ceil(p.length / j), n = p.slice(0), l, v, a, b = [], o = [], e = g, q = u, f = 60, s = 30, m = 0;
        e = k ? g : (g - 60 * j);
        q = k ? (u - 30 * j) : u;
        while (n.length > 0) {
            i = 0;
            l = [];
            v = n.splice(0, d);
            f = k ? Math.floor(g / v.length) : 60;
            s = k ? 30 : Math.floor(u / v.length);
            var r = k ? (g - Math.floor(f) * (v.length - 1)): 60;
            var t = k ? 30: (u - Math.floor(s) * (v.length - 1));
            l.push('<ul class="tabslider-tab" style="width:' + (k ? g : 60) + "px;height:" + (k ? 30 : u) + 'px;">');
            while (a = v[i++]) {
                b.push('<li class="tabslider-main-item" style="position:absolute;top:' + (q * m) + 'px"><a href="' + a.url + '" target="_blank">加载中...</a></li>');
                if (!v[i]) {
                    l.push('<li data-idx="' + m + '" id="' + (c + "TabItem" + m) + '" class="tabslider-tab-item" style="width:' + (r - 1) + "px;height:" + (t - 1) + "px;line-height:" + (t - 1) + 'px;"><a href="' + a.url + '" target="_blank">' + a.text + "</a></li>")
                } else {
                    l.push('<li data-idx="' + m + '" id="' + (c + "TabItem" + m) + '" class="tabslider-tab-item" style="width:' + (f - 1) + "px;height:" + (s - 1) + "px;line-height:" + (s - 1) + 'px;"><a href="' + a.url + '" target="_blank">' + a.text + "</a></li>")
                }
                m++
            }
            l.push();
            l.push("</ul>");
            o.push(l.join(""))
        }
        return (x.substring(1).split("").join("|") + "|").replace("0|", '<div id="' + (c + "TabSliderMain") + '" class="tabslider-main" data-w="' + e + '" data-h="' + q + '" style="width:' + e + "px;height:" + q + 'px;"><ul class="tabslider-main-inner" style="left:0px;width:' + e + 'px;">' + b.join("") + "</ul></div>").replace(/1\|/g, function() {
            var h = 0;
            return function() {
                return o[h++]
            }
        }())
    },
    to: function(d, b) {
        var g = this.gObj(d), f =- b * g.bh;
        g.m.style.top = f + "px";
        var a = g.m.childNodes[b], c = g.ps[b];
        !c.loaded && (a.innerHTML = a.innerHTML.replace("加载中...", '<img src="' + c.src + '" style="width:' + g.bw + "px;height:" + g.bh + 'px"/>'));
        c.loaded = 1;
        sa.removeClass(sa.g(sa.getData(d, "uid") + "TabItem" + g.i), "tabslider-s-h");
        g.i = b;
        sa.addClass(sa.g(sa.getData(d, "uid") + "TabItem" + g.i), "tabslider-s-h")
    },
    auto: function(a) {
        var b = this.gObj(a);
        b.timer = setInterval(function() {
            var c = (b.i == b.ps.length - 1 ? 0 : (b.i + 1));
            sa.u.tabslider.to(a, c)
        }, b.dur * 1000)
    },
    roll: function(f, d, b, a) {
        var c = f.childNodes[1];
        if (c) {
            var g = parseInt(c.style.left, 10);
            if (b * g < a) {
                c.style.left = g + d * b + "px"
            }
        }
    },
    init: function(c) {
        var b = this.gUID(), d = this.gItems(c);
        c.setAttribute("data-uid", b);
        c.innerHTML = this.gen(b, d, sa.getData(c, "layout"), parseInt(sa.getData(c, "w"), 10), parseInt(sa.getData(c, "h"), 10));
        var a = sa.g(b + "TabSliderMain");
        this.o[b] = {
            timer: null,
            dur: parseInt(sa.getData(c, "dur") || 5, 10),
            mov: 0,
            ps: d,
            i: 0,
            m: a.childNodes[0],
            bw: parseInt(sa.getData(a, "w"), 10),
            bh: parseInt(sa.getData(a, "h"), 10)
        };
        c.onmouseover = function(e) {
            var e = e || window.event, f = e.target || e.srcElement, g = sa.u.tabslider.gObj(this).timer;
            g && clearInterval(g);
            while (f != this) {
                if (sa.hasClass(f, "tabslider-tab-item")) {
                    sa.u.tabslider.to(this, parseInt(sa.getData(f, "idx"), 10));
                    break
                }
                f = f.parentNode
            }
        };
        c.onmouseout = function(e) {
            var e = e || window.event, f = e.target || e.srcElement;
            sa.u.tabslider.auto(this)
        };
        sa.u.tabslider.to(c, 0);
        sa.u.tabslider.auto(c)
    }
};
sa.u.simpleslider = {
    uid: 0,
    o: {},
    gUID: function() {
        return "s-" + this.uid++
    },
    gObj: function(a) {
        return this.o[sa.getData(a, "uid")]
    },
    gPics: function(d) {
        var b = d.getElementsByTagName("li"), c = 0, a, f = [];
        while (a = b[c++]) {
            f.push({
                src: sa.getData(a, "src"),
                tsrc: sa.getData(a, "t-src"),
                url: sa.getData(a, "url")
            })
        }
        return f
    },
    gen: function(z, q, E, G, k, e, d, f, r, H, m, a, n, o, x, g, C, D) {
        var F = [], t = [], B = 0, v, A = z.length;
        while (v = z[B++]) {
            F.push('<div mo="slider-b-' + B + '" class="slider-b" style="width:' + q + "px;height:" + E + 'px"><a href="' + v.url + '" target="_blank">加载中...</a></div>');
            t.push('<div mo="slider-s-' + B + '" class="slider-s indicator-item indicator-bgimg" data-idx="' + (B - 1) + '"><span>' + B + "</span></div>")
        }
        var j = "";
        var c = "";
        var y = "slider-left-right";
        if (C == 0) {
            j = "width:" + (q * z.length) + "px;height:" + E + "px";
            y = "slider-left-right"
        } else {
            if (C == 1) {
                j = "width:" + q + "px;height:" + (E * z.length) + "px";
                y = "slider-up-down"
            } else {
                if (C == 2) {
                    j = "width:" + q + "px;height:" + E + "px;";
                    c = "overlap-block";
                    y = "fade-in-out"
                }
            }
        }
        var u = D + " slider-" + ["horizon", "vertical"][x] + " " + D + "-" + ["h", "v"][x];
        return ['<div class="slider-mask" style="width:' + q + "px;height:" + E + 'px">', '<div class="' + y + " " + c + '" style="' + j + '">' + F.join("") + "</div>", "</div>", '<div class="slider-t ' + u + '" style="left:' + e + "px;top:" + d + "px;width:" + f + "px;height:" + r + 'px">', '<div class="slider-larrow indicator-bgimg"></div>', '<div class="indicator-inner" style="width:' + H + "px;height:" + m + 'px">', '<div class="indicator-cnt" style="top:0px;left:0px;width:' + (!x ? (a * z.length) : "") + "px;height:" + (!x ? "" : n * z.length) + 'px;">' + t.join("") + "</div>", "</div>", '<div class="slider-rarrow indicator-bgimg"></div>', "</div>"].join("")
    },
    preload: function(f) {
        var g = this.gObj(f);
        var a = g.m.childNodes[0], d = g.ps[0];
        var c = g.m.childNodes;
        for (var b = c.length - 1; b >= 0; b--) {
            a = c[b];
            d = g.ps[b];
            !d.loaded && (a.innerHTML = a.innerHTML.replace("加载中...", '<img src="' + d.src + '" style="width:' + g.bw + "px;height:" + g.bh + 'px"/>'));
            d.loaded = 1;
            a.style.visibility = "hidden";
            a.style.opacity = 0
        }
        g.m.childNodes[0].style.visibility = "visible";
        g.m.childNodes[0].style.opacity = 1
    },
    to: function(k, h) {
        var d = this.gObj(k);
        if (h < 0 || h >= d.ps.length) {
            return 
        }
        if (d.animationEffect == 0) {
            var l =- h * d.bw;
            d.m.style.left = l + "px"
        } else {
            if (d.animationEffect == 1) {
                var l =- h * d.bh;
                d.m.style.top = l + "px"
            } else {
                if (d.animationEffect == 2) {
                    d.m.childNodes[d.i].style.opacity = 0;
                    d.m.childNodes[d.i].style.visibility = "hidden";
                    d.m.childNodes[h].style.opacity = 1;
                    d.m.childNodes[h].style.visibility = "visible"
                } else {
                    var l =- h * d.bw;
                    d.m.style.left = l + "px"
                }
            }
        }
        var m = d.m.childNodes[h], b = d.ps[h];
        !b.loaded && (m.innerHTML = m.innerHTML.replace("加载中...", '<img src="' + b.src + '" style="width:' + d.bw + "px;height:" + d.bh + 'px"/>'));
        b.loaded = 1;
        sa.removeClass(d.t.childNodes[d.i], "slider-s-h");
        d.i = h;
        sa.addClass(d.t.childNodes[d.i], "slider-s-h");
        sa.hasClass(d.it.childNodes[0], "invalid") && sa.removeClass(d.it.childNodes[0], "invalid");
        sa.hasClass(d.it.childNodes[2], "invalid") && sa.removeClass(d.it.childNodes[2], "invalid");
        if (h == 0) {
            sa.addClass(d.it.childNodes[0], "invalid")
        }
        if (h == d.ps.length - 1) {
            sa.addClass(d.it.childNodes[2], "invalid")
        }
        if (!d.dir) {
            var j = d.inw;
            var f = d.ps.length * d.itw;
            var r = d.itw;
            var c = d.ps.length;
            var q = d.it.childNodes[1].childNodes[0];
            q.style.left = "0px";
            var n = h;
            if (j < f) {
                if (((n + 0.5) * r + 5) < j / 2) {
                    q.style.left = "0px"
                } else {
                    if (((c - n - 0.5) * r) < j / 2) {
                        q.style.left = (j - f) + "px"
                    } else {
                        q.style.left = (j / 2 - r / 2 - n * r) + "px"
                    }
                }
            } else {
                q.style.left = (j - f) / 2 + "px"
            }
        } else {
            var s = d.inh;
            var g = d.ps.length * d.ith;
            var a = d.ith;
            var c = d.ps.length;
            var n = h;
            var q = d.it.childNodes[1].childNodes[0];
            q.style.top = "0px";
            if (s < g) {
                if (((n + 0.5) * a + 5) < s / 2) {
                    q.style.top = "0px"
                } else {
                    if (((c - n - 0.5) * a) < s / 2) {
                        q.style.top = (s - g) + "px"
                    } else {
                        q.style.top = (s / 2 - a / 2 - n * a) + "px"
                    }
                }
            } else {
                q.style.top = (s / 2 - g / 2) + "px"
            }
        }
    },
    auto: function(a) {
        var b = this.gObj(a);
        b.timer = setInterval(function() {
            var c = (b.i == b.ps.length - 1 ? 0 : (b.i + 1));
            sa.u.simpleslider.to(a, c)
        }, b.dur * 1000)
    },
    roll: function(g, f, b, a, c) {
        var d = g.parentNode.childNodes[0].childNodes[0];
        if (d) {
            var h = (c ? parseInt(d.style.top, 10) : parseInt(d.style.left, 10));
            if (b < 0 ? h >= a : h < a) {
                if (c) {
                    d.style.top = h + f * b + "px"
                } else {
                    d.style.left = h + f * b + "px"
                }
            }
        }
    },
    init: function(d) {
        var b = this.gUID(), g = this.gPics(d), h = parseInt(sa.getData(d, "bw"), 10), a = parseInt(sa.getData(d, "bh"), 10);
        d.setAttribute("data-uid", b);
        d.innerHTML = this.gen(g, h, a, parseInt(sa.getData(d, "tbw"), 10) || 300, parseInt(sa.getData(d, "tbh"), 10) || 250, parseInt(sa.getData(d, "ix"), 10), parseInt(sa.getData(d, "iy"), 10), parseInt(sa.getData(d, "iw"), 10), parseInt(sa.getData(d, "ih"), 10), parseInt(sa.getData(d, "inw"), 10) || 40, parseInt(sa.getData(d, "inh"), 10) || 40, parseInt(sa.getData(d, "itw"), 10) || 40, parseInt(sa.getData(d, "ith"), 10) || 40, sa.getData(d, "td"), parseInt(sa.getData(d, "dir"), 10) || 0, parseInt(sa.getData(d, "ov"), 10) || 0, parseInt(sa.getData(d, "animationEffect"), 10) || 0, sa.getData(d, "style"));
        this.o[b] = {
            timer: null,
            dur: parseInt(sa.getData(d, "dur") || 5, 10),
            mov: 0,
            ps: g,
            bw: h,
            bh: a,
            m: d.childNodes[0].childNodes[0],
            it: d.childNodes[1],
            t: d.childNodes[1].childNodes[1].childNodes[0],
            i: 0,
            animationEffect: parseInt(sa.getData(d, "animationEffect")) || 0,
            iw: parseInt(sa.getData(d, "iw"), 10),
            ih: parseInt(sa.getData(d, "ih"), 10),
            inw: parseInt(sa.getData(d, "inw"), 10) || 40,
            inh: parseInt(sa.getData(d, "inh"), 10) || 40,
            itw: parseInt(sa.getData(d, "itw"), 10) || 40,
            ith: parseInt(sa.getData(d, "ith"), 10) || 40,
            dir: parseInt(sa.getData(d, "dir"), 10) || 0
        };
        if (parseInt(sa.getData(d, "animationEffect")) == 2) {
            this.preload(d)
        }
        d.onmouseover = function(e) {
            var e = e || window.event, j = e.target || e.srcElement, k = sa.u.simpleslider.gObj(this).timer;
            k && clearInterval(k);
            while (j != this) {
                if (sa.hasClass(j, "slider-s")) {
                    sa.u.simpleslider.to(this, parseInt(sa.getData(j, "idx"), 10));
                    break
                }
                j = j.parentNode
            }
        };
        d.onmouseout = function(e) {
            var e = e || window.event, j = e.target || e.srcElement;
            sa.u.simpleslider.auto(this)
        };
        var c = d;
        var f = this.o[b];
        d.childNodes[1].childNodes[0].onclick = function(e) {
            var e = e || window.event;
            var j = e.target || e.srcElement;
            sa.u.simpleslider.to(d, f.i - 1)
        };
        d.childNodes[1].childNodes[2].onclick = function(e) {
            var e = e || window.event;
            var j = e.target || e.srcElement;
            sa.u.simpleslider.to(d, f.i + 1)
        };
        sa.u.simpleslider.to(d, 0);
        sa.u.simpleslider.auto(d)
    }
};
var isFlashPlaying = false;
function adplayerStatus(a) {
    if (a == "play" || a == "pause") {
        isFlashPlaying = true
    } else {
        if (a == "stop") {
            isFlashPlaying = false
        }
    }
};
