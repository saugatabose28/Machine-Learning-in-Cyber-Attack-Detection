var sa = {};
sa.ROOT = "http://adbox.sina.com.cn";
sa.SRC_ROOT = "http://img.adbox.sina.com.cn";
sa.SSP_RCV = "http://ads.ad.sina.com.cn/click?";
sa.L = window.location;
sa.g = function(a) {
    if (!a) {
        return null
    }
    if ("string" == typeof a || a instanceof String) {
        return document.getElementById(a)
    } else {
        if (a.nodeName && (a.nodeType == 1 || a.nodeType == 9)) {
            return a
        }
    }
    return null
};
(function() {
    var a = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
    sa.trim = function(b) {
        return String(b).replace(a, "")
    }
})();
sa.hasClass = function(d, f) {
    d = sa.g(d);
    if (!d ||!d.className) {
        return false
    }
    var b = sa.trim(f).split(/\s+/), a = b.length;
    f = d.className.split(/\s+/).join(" ");
    while (a--) {
        if (!(new RegExp("(^| )" + b[a] + "( |\x24)")).test(f)) {
            return false
        }
    }
    return true
};
sa.addClass = function(h, j) {
    h = sa.g(h);
    var d = j.split(/\s+/), g = h.className, a = " " + g + " ", f = 0, b = d.length;
    for (; f < b; f++) {
        if (a.indexOf(" " + d[f] + " ") < 0) {
            g += (g ? " " : "") + d[f]
        }
    }
    h.className = g;
    return h
};
sa.removeClass = function(h, l) {
    h = sa.g(h);
    var a = h.className.split(/\s+/), k = l.split(/\s+/), g, f = k.length, b, d = 0;
    for (; d < f; ++d) {
        for (b = 0, g = a.length; b < g; ++b) {
            if (a[b] == k[d]) {
                a.splice(b, 1);
                break
            }
        }
    }
    h.className = a.join(" ");
    return h
};
sa.getQuery = function(e, f) {
    var d = new RegExp("(^|&|\\?)" + e + "=([^&]*)(&|\x24|#)");
    var c = f.match(d);
    return c ? c[2] : ""
};
sa.EX_PAR = (function() {
    var g = window.name, e = window.location.search.substring(1), d = 0, f, c = {}, b = [];
    g && b.push(g);
    e && b.push(e);
    g = b.join("&");
    if (g) {
        g = g.split("&");
        for (var d = 0, a = g.length; d < a; d++) {
            f = g[d];
            if (f) {
                f = f.split("=");
                !c[f[0]] && (c[f[0]] = []);
                f[1] && c[f[0]].push(f[1])
            }
        }
    }
    return c
})();
sa.getURL = function(a) {
    return a.getAttribute("data-url") || ""
};
sa.getData = function(a, b) {
    return (b == "url" ? sa.getURL(a) : a.getAttribute("data-" + b)) || ""
};
sa.on = function(g, c, d) {
    var a = function(e) {
        return e.relatedTarget || e.toElement || g.fromElement || null
    };
    var b = function(e) {
        e = e || window.event;
        e.relTarget = a(e);
        d.call(g, e)
    };
    if (g.addEventListener) {
        g.addEventListener(c, b, false)
    } else {
        if (g.attachEvent) {
            g.attachEvent("on" + c, b)
        }
    }
};
sa.inDom = function(a, b) {
    while (a && a !== document.body) {
        if (a === b) {
            return true
        } else {
            a = a.parentNode
        }
    }
    return false
};
sa.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode||+RegExp["\x241"]) : undefined;
sa.ff = /firefox\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp["\x241"] : undefined;
sa.gg = /chrome\/(\d+\.\d+)/i.test(navigator.userAgent)?+RegExp["\x241"] : undefined;
sa.n = {
    timeout: 0,
    _rmScr: function(b) {
        if (b.clearAttributes) {
            b.clearAttributes()
        } else {
            for (var a in b) {
                if (b.hasOwnProperty(a)) {
                    delete b[a]
                }
            }
        }
        if (b && b.parentNode) {
            b.parentNode.removeChild(b)
        }
        b = null
    },
    _creScr: function(b, a, c) {
        b.setAttribute("type", "text/javascript");
        c && b.setAttribute("charset", c);
        b.setAttribute("src", a);
        document.getElementsByTagName("head")[0].appendChild(b)
    },
    jsonp: function(a, j, h) {
        var f = document.createElement("SCRIPT"), e = 0, g = h || {}, d = j || function() {}, c = g.charset || "utf-8", i = g.timeout || 0, b;
        f.onload = f.onreadystatechange = function() {
            if (e) {
                return 
            }
            var k = f.readyState;
            if ("undefined" == typeof k || k == "loaded" || k == "complete") {
                scrLoadeded = 1;
                try {
                    d();
                    clearTimeout(b)
                } finally {
                    f.onload = f.onreadystatechange = null;
                    sa.n._rmScr(f)
                }
            }
        };
        if (i) {
            b = setTimeout(function() {
                f.onload = f.onreadystatechange = null;
                sa.n._rmScr(f);
                g.onfailure && g.onfailure()
            }, i)
        }
        sa.n._creScr(f, a, c)
    },
    ifr: function(d, b, f) {
        function a(i) {
            return i.replace(/\\/g, "\\\\").replace(/\"/g, '\\"')
        }
        function e(j) {
            var i = sa.g(j);
            if (!i) {
                i = document.createElement("iframe");
                i.id = j;
                i.width = 1;
                i.height = 1;
                i.src = "about:blank";
                i.style.cssText = "position:absolute;left:-1000px;top:-1000px;";
                document.body.appendChild(i)
            }
            return i
        }
        if ("string" !== typeof b) {
            f = b || {};
            b = ""
        }
        var c = "SaIfrPostForm", h = "SaIfrFormId", g = e(c).contentWindow.document;
        g.open("text/html");
        g.write(["<html><head></head><body>", '<script type="text/javascript">', "window.onload = function(){", 'var form = document.getElementById("' + h + '");', "form.submit();", "};", "<\/script>", '<form id="' + h + '" method="POST" action="' + a(d) + '" target="' + (f.target || "") + '">', '<textarea type="text" name="' + (f.postname || "saifrpoststr") + '" >' + a(decodeURIComponent(f.params || "")) + "</textarea>", '<input type="text" name="callbackName" value="' + b + '" />', "</form>", "</body></html>"].join(""));
        g.close()
    },
    ifrFix: function(e, c, g) {
        function b(i) {
            return i.replace(/\\/g, "\\\\").replace(/\"/g, '\\"')
        }
        function f(k) {
            var j = sa.g(k);
            if (!j) {
                var i = document.createElement("div");
                i.innerHTML = '<iframe id="' + k + '" name="' + k + '" src="about:blank" width="1" height="1" style="position:absolute;left:-1000px;top:-1000px;"></iframe>';
                document.body.appendChild(i)
            }
            return j
        }
        function a(j, l, i) {
            var k = sa.g(l);
            if (!k) {
                k = document.createElement("form");
                k.width = 1;
                k.height = 1;
                k.style.cssText = "position:absolute;left:-1000px;top:-1000px;";
                document.body.appendChild(k)
            }
            k.id = l;
            k.method = "post";
            k.action = b(j);
            k.target = i;
            return k
        }
        if ("string" !== typeof c) {
            g = c || {};
            c = ""
        }
        var d = "SaIfrPostFormFix", h = "SaIfrFormIdFix";
        form = a(e, h, d);
        f(d);
        form.innerHTML = ['<textarea type="text" name="' + (g.postname || "saifrpoststr") + '" >' + b(decodeURIComponent(g.params || "")) + "</textarea>", '<input type="text" name="callbackName" value="' + c + '" />'].join("");
        form.submit()
    }
};
sa.u = {
    PLAYER_URL: sa.SRC_ROOT + "/static/player.swf",
    init: function(j) {
        var j = j || document, g = j.getElementsByTagName("*"), a = 0, f, b = [], h;
        while (f = g[a++]) {
            if (sa.getData(f, "role")) {
                b.push(f)
            }
        }
        a = 0;
        while (f = b[a++]) {
            var h = sa.getData(f, "role"), d;
            sa.addClass(f, "ui " + h + " " + sa.u.getSkin(f));
            sa.on(f, "mouseover", function(c) {
                sa.u.aStat(this, "h")
            });
            sa.on(f, "mouseout", function(c) {
                sa.u.rStat(this, "h")
            });
            if (sa.u[h]) {
                d = sa.u[h].mo;
                if ("function" == typeof d ? d(f) : d) {
                    f.setAttribute("mo", h);
                    sa.u[h].moc && f.setAttribute("moc", sa.u[h].moc(f))
                }
                sa.u[h].init && sa.u[h].init(f)
            }
            sa.u.initInteractive(f)
        }
    },
    initInteractive: function(g) {
        var j = sa.getData(g, "interactive"), d = 0, c;
        if (j) {
            j = j.split("|");
            while (c = j[d++]) {
                var h = c.split(":"), a = h[0], f = h[1], b = h[2];
                if (f === "always") {
                    sa.u[b](g)
                } else {
                    if (a = sa.g(a)) {
                        sa.on(a, f, function() {
                            var e = g, i = b, k = f;
                            return function(l) {
                                if (k === "mouseout" && sa.inDom(l.relTarget, e)) {
                                    return 
                                }
                                sa.u[i] && sa.u[i](e)
                            }
                        }())
                    }
                }
            }
        }
    },
    show: function(a) {
        sa.removeClass(a, "hide")
    },
    hide: function(a) {
        sa.addClass(a, "hide")
    },
    getSkin: function(a) {
        return sa.getData(a, "role") + sa.getData(a, "skin")
    },
    aStat: function(b, a) {
        sa.addClass(b, sa.u.getSkin(b) + "-" + a)
    },
    rStat: function(b, a) {
        sa.removeClass(b, sa.u.getSkin(b) + "-" + a)
    },
    gStat: function(b, a) {
        return sa.hasClass(b, sa.u.getSkin(b) + "-" + a)
    }
};
(function() {
    try {
        var a = window.location.search.match(/(\?|&)logopos\=(lt|rt|lb|rb)/);
        a = a ? a[2] : "rb";
        if (window.location.search.indexOf("hidelogo=1")===-1) {
            sa.on(window, "load", function() {
                var d = document.createElement("a"), c = (document.body.childNodes && document.body.childNodes[0]);
                c = c.className === "fset" ? c : document.body;
                d.className = "adbox-logo adbox-logo-" + a;
                d.setAttribute("mo", "logo");
                d.target = "_blank";
                d.href = "http://adbox.sina.com.cn";
                d.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
                c && c.appendChild(d)
            })
        }
    } catch (b) {}
})();
