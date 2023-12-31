if (typeof CE2 == "undefined") {
    CE2 = {}
}
CE2.browser = (function() {
    var b = navigator.userAgent;
    CE2.opera = CE2.ie = CE2.chrome = CE2.safari = CE2.firefox = false;
    var a = "unknown";
    if (CE2.w.opera && typeof CE2.w.opera.version == "function") {
        a = "opera";
        CE2.opera = true;
        CE2.operaVersion = parseInt(opera.version(), 10)
    } else {
        if (/\bMSIE\b/.test(b)) {
            a = "ie";
            CE2.ie = true;
            CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(navigator.userAgent)[1], 10);
            CE2.ieQuirksMode = (document.compatMode == "BackCompat")
        } else {
            if (/\b(iPhone|iP[ao]d)\b/.test(b)) {
                a = "iphone";
                CE2.iphone = true;
                CE2.webkit = true
            } else {
                if (/\bChrome\b/.test(b)) {
                    a = "chrome";
                    CE2.chrome = true;
                    CE2.webkit = true
                } else {
                    if (/AppleWebKit/.test(navigator.appVersion)) {
                        a = "safari";
                        CE2.safari = true;
                        CE2.webkit = true
                    } else {
                        if (/Mozilla/i.test(b)&&!/compatible|webkit/i.test(b)) {
                            a = "firefox";
                            CE2.firefox = true
                        }
                    }
                }
            }
        }
    }
    if (CE2.webkit) {
        CE2.webkitVersion = parseInt(/AppleWebKit\/(\d+)/.exec(b)[1], 10)
    }
    return a
})();
CE2.findByClass = function(e) {
    var b = [], a = CE2.d.body, c, d, g, f;
    if (a.getElementsByClassName) {
        g = a.getElementsByClassName(e)
    } else {
        if (a.querySelectorAll) {
            g = a.querySelectorAll("." + e)
        }
    }
    if (g) {
        for (c = 0; d = g[c++];) {
            b.push(d)
        }
    } else {
        g = a.getElementsByTagName("*");
        f = new RegExp("(^|\\s)" + e + "($|\\s)");
        for (c = 0; d = g[c++];) {
            if (d.className && f.test(d.className)) {
                b.push(d)
            }
        }
    }
    return b
};
CE2.innerText = function(e) {
    var f = typeof e.textContent == "undefined" ? "innerText": "textContent";
    var b = e[f];
    var a = e.getElementsByTagName("SCRIPT");
    for (var d = 0, c = a.length; d < c; d++) {
        b = b.replace(a[d][f], "")
    }
    return b
};
CE2.innerTextName = function(a, b) {
    return CE2.strip(CE2.strip(CE2.innerText(a), true).substr(0, b || 100))
};
CE2.formatClass = function(b) {
    var a = b.className;
    if (a && typeof(a) == "string") {
        a = CE2.strip(a.replace(/(\s|^)-ce-capture\b/g, "")).split(/\s+/);
        a.sort();
        return a.join(" ")
    }
};
CE2.href = function(b) {
    if (CE2.ie) {
        var a = b.outerHTML.match(/\bhref="(.*?)"/i);
        if (a) {
            return CE2.strip(a[1])
        }
    } else {
        return b.getAttribute("href")
    }
};
CE2.strip = function(b, c) {
    var a = b.replace(/^[\s\u00a0]+|[\s\u00a0]+$/gm, "");
    if (c) {
        return a.replace(/\s+/gm, " ")
    } else {
        return a
    }
};
CE2.map = function(f, e, c) {
    var a = [];
    for (var d = 0, b = f.length; d < b; d++) {
        a.push(e.call(c, f[d]))
    }
    return a
};
CE2.spansLines = function(a) {
    return a.getClientRects && (a.getClientRects().length > 1)
};
CE2.eventCoords = function(b, c) {
    if (b.pageX == null) {
        var a = CE2.scroll(c);
        return [b.clientX + a.left, b.clientY + a.top]
    } else {
        return [b.pageX, b.pageY]
    }
};
CE2.contains = function(b, a) {
    if (b == a) {
        return true
    }
    if (typeof b.contains == "function") {
        return b.contains(a)
    }
    var c = a;
    do {
        c = c.parentNode
    }
    while (c && c != document.body && c != b);
    return (c == b)
};
CE2.isVML = function(a) {
    return (typeof a.tagUrn == "string") && (a.tagUrn.indexOf("vml") >= 0)
};
CE2.bind = function(c, b) {
    var a = c[b];
    return function() {
        return a.apply(c, arguments)
    }
};
CE2.TIME_RANGES = [500, 1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 15000, 20000, 30000, 35000, 40000, 60000, 1.5 * 60 * 1000, 2 * 60 * 1000, 3 * 60 * 1000, 4 * 60 * 1000, 5 * 60 * 1000, 7 * 60 * 1000, 10 * 60 * 1000, 15 * 60 * 1000, 20 * 60 * 1000, 25 * 60 * 1000, 30 * 60 * 1000, 40 * 60 * 1000, 50 * 60 * 1000, 60 * 60 * 1000, 2 * 60 * 60 * 1000, 3 * 60 * 60 * 1000, Number.MAX_VALUE];
CE2.getTimeRange = function(c) {
    var b = CE2.TIME_RANGES;
    for (var d = 0, a = b.length; d < a; d++) {
        if (c < b[d] && (d == 0 || c >= b[d - 1])) {
            return d + 1
        }
    }
};
CE2.eventWindow = function(a) {
    return a.source || a.view || a.srcElement.ownerDocument.parentWindow
};
CE2.getStyle = function(b) {
    var a;
    return b.currentStyle || (a = CE2.w.getComputedStyle) && a(b, null)
};
if (typeof CE2 == "undefined") {
    CE2 = {}
}
CE2.SPIRAL = [[0.4, 0.4], [0.5, 0.4], [0.5, 0.5], [0.4, 0.5], [0.3, 0.5], [0.3, 0.4], [0.3, 0.3], [0.4, 0.3], [0.5, 0.3], [0.6, 0.3], [0.6, 0.4], [0.6, 0.5], [0.6, 0.6], [0.5, 0.6], [0.4, 0.6], [0.3, 0.6], [0.2, 0.6], [0.2, 0.5], [0.2, 0.4], [0.2, 0.3], [0.2, 0.2], [0.3, 0.2], [0.4, 0.2], [0.5, 0.2], [0.6, 0.2], [0.7, 0.2], [0.7, 0.3], [0.7, 0.4], [0.7, 0.5], [0.7, 0.6], [0.7, 0.7], [0.6, 0.7], [0.5, 0.7], [0.4, 0.7], [0.3, 0.7], [0.2, 0.7], [0.1, 0.7], [0.1, 0.6], [0.1, 0.5], [0.1, 0.4], [0.1, 0.3], [0.1, 0.2], [0.1, 0.1], [0.2, 0.1], [0.3, 0.1], [0.4, 0.1], [0.5, 0.1], [0.6, 0.1], [0.7, 0.1], [0.8, 0.1], [0.8, 0.2], [0.8, 0.3], [0.8, 0.4], [0.8, 0.5], [0.8, 0.6], [0.8, 0.7], [0.8, 0.8], [0.7, 0.8], [0.6, 0.8], [0.5, 0.8], [0.4, 0.8], [0.3, 0.8], [0.2, 0.8], [0.1, 0.8], [0, 0.8], [0, 0.7], [0, 0.6], [0, 0.5], [0, 0.4], [0, 0.3], [0, 0.2], [0, 0.1], [0, 0], [0.1, 0], [0.2, 0], [0.3, 0], [0.4, 0], [0.5, 0], [0.6, 0], [0.7, 0], [0.8, 0], [0.9, 0], [0.9, 0.1], [0.9, 0.2], [0.9, 0.3], [0.9, 0.4], [0.9, 0.5], [0.9, 0.6], [0.9, 0.7], [0.9, 0.8], [0.9, 0.9], [0.8, 0.9], [0.7, 0.9], [0.6, 0.9], [0.5, 0.9], [0.4, 0.9], [0.3, 0.9], [0.2, 0.9], [0.1, 0.9], [0, 0.9]];
CE2.initScrollTracking = function() {
    CE2.nonStaticCache = [];
    CE2.strictAnchorSearch = true;
    CE2.lastRecordedScroll = null;
    CE2.lastRecordedTime = 0;
    CE2.lastRecordedY = 0;
    CE2.idleAt = null;
    CE2.idleSince = new Date().getTime()
};
CE2.scroll = function(c) {
    var b, a;
    c = c || CE2.w;
    b = c.document;
    if (c.pageXOffset != null) {
        return {
            left: c.pageXOffset,
            top: c.pageYOffset,
            width: c.innerWidth,
            height: c.innerHeight
        }
    } else {
        a = b.compatMode == "BackCompat" ? b.body : b.documentElement;
        return {
            left: a.scrollLeft,
            top: a.scrollTop,
            width: a.offsetWidth,
            height: a.offsetHeight
        }
    }
};
CE2.shouldRecordScroll = function(a) {
    var e = a.top, c = a.height, d = "" + e + ":" + c, b = new Date().getTime();
    if (d == CE2.lastRecordedScroll) {
        return false
    }
    if (d == CE2.idleAt) {
        if (b - CE2.idleSince >= 800) {
            CE2.lastRecordedScroll = d;
            CE2.lastRecordedTime = b;
            CE2.lastRecordedY = e;
            return true
        }
    } else {
        CE2.idleAt = d;
        CE2.idleSince = b
    }
    if ((CE2.lastRecordedScroll == null) || ((Math.abs(e - CE2.lastRecordedY) > c / 2) && (b - CE2.lastRecordedTime >= 1600))) {
        CE2.lastRecordedScroll = d;
        CE2.lastRecordedTime = b;
        CE2.lastRecordedY = e;
        return true
    }
};
CE2.findAnchorElement = function(j, k) {
    if (!CE2.d.elementFromPoint) {
        return k()
    }
    var c = 0, h = CE2.strictAnchorSearch, a = j.width, m = j.height, e, b, g, f;
    var d = function() {
        if (e = CE2.SPIRAL[c++]) {
            g = (e[0] + (Math.random() * 0.1)) * a;
            f = (e[1] + (Math.random() * 0.1)) * m;
            b = CE2.elementFromPoint(g, f, j);
            if (CE2.isAnchorElement(b, j, h)) {
                return k(b)
            }
            setTimeout(d, 0)
        } else {
            c = 0;
            CE2.strictAnchorSearch = h = false;
            setTimeout(d, 0)
        }
    };
    setTimeout(d, 0)
};
CE2.isStatic = function(c) {
    var e = CE2.nonStaticCache;
    if (e.indexOf) {
        if (e.indexOf(c) >= 0) {
            return false
        }
    } else {
        for (var a = 0, d; d = e[a]; a++) {
            if (c == d) {
                return false
            }
        }
    }
    for (var b; c && c != CE2.d && c != CE2.d.documentElement && c != CE2.d.body; c = c.parentNode) {
        b = CE2.getStyle(c);
        if (b && (b.position == "absolute" || b.position == "fixed")) {
            e.push(c);
            return false
        }
    }
    return true
};
CE2.elementFromPointAbsolute = function(b, d, a) {
    var c = CE2.d.elementFromPoint(b + a.left, d + a.top);
    if (c.nodeType === c.TEXT_NODE) {
        return c.parentNode
    } else {
        return c
    }
};
CE2.elementFromPointRelative = function(a, b) {
    return CE2.d.elementFromPoint(a, b)
};
CE2.elementFromPoint = function() {
    if (CE2.d.elementFromPoint) {
        if ((CE2.webkit && CE2.webkitVersion < 533) || (CE2.opera && CE2.operaVersion < 10)) {
            CE2.elementFromPoint = CE2.elementFromPointAbsolute
        } else {
            CE2.elementFromPoint = CE2.elementFromPointRelative
        }
        return CE2.elementFromPoint.apply(CE2, arguments)
    }
};
CE2.isAnchorElement = function(c, a, b) {
    if (!(c && c.nodeName)) {
        return false
    }
    if (c == CE2.d || c == CE2.d.documentElement || c == CE2.d.body) {
        return false
    }
    if (CE2.isVML(c)) {
        return false
    }
    if (b) {
        if (!CE2.isStatic(c)) {
            return false
        }
        var d = CE2.getBox(c);
        if (d.height > (a.height * 2)) {
            return false
        }
    }
    return true
};
if (typeof CE2 == "undefined") {
    CE2 = {}
}
CE2.S16_0 = 32768;
CE2.Package = function() {
    var k = [];
    var f = {}, c = 0, e = arguments;
    var h, a, g, j;
    for (var d = 0, b = e.length; d < b; d++) {
        h = e[d];
        a = h[0];
        g = h[1];
        j = h[2];
        k.push(a);
        f[a] = {
            t: g,
            s: j
        }
    }
    this.props = f;
    this.propList = k;
    this.overBudget = [];
    this.surplus = 0
};
CE2.Package.prototype = {
    set: function(b, c) {
        var d = this.props[b], a = 0;
        if (!d) {
            return 
        }
        if (d.t == "s") {
            d.ov = c;
            d.v = String(c) ? this.utf8Trim(String(c), 255) : "";
            a = d.s - d.v.length;
            this.surplus += a;
            if (a < 0) {
                this.overBudget.push(d)
            }
        } else {
            d.ov = c;
            d.v = isNaN(parseInt(c, 10)) ? 0 : parseInt(c, 10)
        }
    },
    utf8Trim: function(c, d) {
        var a = CE2.utf8(c);
        if (a == c) {
            return c.substr(0, d)
        }
        for (var b = c.length - 1; a.length > d; b--) {
            a = CE2.utf8(c.substr(0, b))
        }
        return a
    },
    trimStrings: function() {
        var b = this.surplus, e = this.overBudget;
        if (b >= 0) {
            return 
        }
        var f = Math.abs(b) / e.length;
        var d = Math.floor(f) == f ? 0: 1;
        f = Math.floor(f);
        for (var c = 0, a = e.length, g = null; c < a; c++) {
            g = e[c];
            g.v = this.utf8Trim(g.v, g.v.length - f - d);
            if (d) {
                d = 0
            }
        }
    },
    toString: function() {
        this.trimStrings();
        var e = this.props, b = this.propList, a = [];
        var g, f;
        for (var d = 0, c = b.length; d < c; d++) {
            g = e[b[d]];
            f = g.v;
            if (g.t == "s") {
                if (f == null) {
                    a.push("\x00")
                } else {
                    a.push(CE2.pack(1, f.length));
                    a.push(f)
                }
            } else {
                if (f == null) {
                    a.push(CE2.pack(g.s, 0))
                } else {
                    a.push(CE2.pack(g.s, f))
                }
            }
        }
        return a.join("")
    }
};
CE2.pack = function(c, d) {
    var a = [];
    for (var b = 0; b < c; b++) {
        a.push(String.fromCharCode((d>>(8 * b)) & 255))
    }
    return a.join("")
};
CE2.utf8 = function(d) {
    d = d.replace(/\r\n/g, "\n");
    var a = [];
    var f;
    for (var e = 0, b = d.length; e < b; e++) {
        f = d.charCodeAt(e);
        if (f < 128) {
            a.push(String.fromCharCode(f))
        } else {
            if ((f > 127) && (f < 2048)) {
                a.push(String.fromCharCode((f>>6) | 192));
                a.push(String.fromCharCode((f & 63) | 128))
            } else {
                a.push(String.fromCharCode((f>>12) | 224));
                a.push(String.fromCharCode(((f>>6) & 63) | 128));
                a.push(String.fromCharCode((f & 63) | 128))
            }
        }
    }
    return a.join("")
};
CE2.base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
CE2.base64 = function(e) {
    var b = CE2.base64Alphabet;
    var n, k, h, m, j, g, f;
    var a = [], d = 0, c = e.length;
    while (d < c) {
        n = e.charCodeAt(d++);
        k = e.charCodeAt(d++);
        h = e.charCodeAt(d++);
        m = n>>2;
        j = ((n & 3)<<4) | (k>>4);
        g = ((k & 15)<<2) | (h>>6);
        f = h & 63;
        if (isNaN(k)) {
            g = f = 64
        } else {
            if (isNaN(h)) {
                f = 64
            }
        }
        a.push(b.charAt(m) + b.charAt(j));
        if (g != 64) {
            a.push(b.charAt(g));
            if (f != 64) {
                a.push(b.charAt(f))
            }
        }
    }
    return a.join("")
};
if (typeof CE2 == "undefined") {
    CE2 = {}
}
CE2.getBox = function(a, b, j) {
    b = b || {};
    if (a.nodeName == "AREA") {
        var g = CE2.boxForArea(a);
        if (g) {
            b.left = g.left;
            b.top = g.top;
            b.width = g.width;
            b.height = g.height
        }
    } else {
        if (a.getBoundingClientRect) {
            var g = a.getBoundingClientRect();
            var h = CE2.scroll();
            b.left = Math.floor(g.left + h.left);
            b.top = Math.floor(g.top + h.top);
            if (CE2.webkit && CE2.webkitVersion < 533 && a.style.position == "relative") {
                b.left += parseInt(a.style.left, 10);
                b.top += parseInt(a.style.top, 10)
            }
            b.width = Math.floor(g.width || (g.right - g.left));
            b.height = Math.floor(g.height || (g.bottom - g.top))
        } else {
            b.width = a.offsetWidth;
            b.height = a.offsetHeight;
            var d = a;
            var i = 0, f = 0;
            do {
                i += d.offsetLeft || 0;
                f += d.offsetTop || 0;
                d = d.offsetParent
            }
            while (d);
            b.left = Math.floor(i);
            b.top = Math.floor(f)
        }
    }
    b.pageX = b.left;
    b.pageY = b.top;
    if (j) {
        var c = CE2.getBox(j);
        b.left -= c.pageX;
        b.top -= c.pageY
    }
    return b
};
CE2.boxForArea = function(c) {
    var d = CE2.imageForArea(c);
    if (!d) {
        return 
    }
    var b = CE2.getBox(d);
    var a = CE2.areaBounds(c, b);
    if (a) {
        return {
            left: b.left + a.left,
            top: b.top + a.top,
            width: a.width,
            height: a.height
        }
    }
};
CE2.imageForArea = function(c) {
    var e = new RegExp("(^|#)" + c.parentNode.name, "i"), a = c.ownerDocument.getElementsByTagName("IMG"), b, d;
    for (b = 0; d = a[b++];) {
        if (e.test(d.useMap)) {
            return d
        }
    }
};
CE2.areaBounds = function(c, f) {
    var e = CE2.areaLength;
    var d = Math.min(f.width, f.height);
    var o = CE2.map(CE2.strip(c.coords, true).split(/[^\d\.%]+/), function(i) {
        return e(i, d)
    });
    var p, n, m;
    if (/circle/i.test(c.shape)) {
        if (o.length >= 3) {
            p = o[0];
            n = o[1];
            m = o[2];
            return {
                left: p - m,
                top: n - m,
                width: m * 2,
                height: m * 2
            }
        }
    } else {
        p = [];
        n = [];
        for (var k = 0, j = o.length; k < j; k++) {
            if (k%2) {
                n.push(o[k])
            } else {
                p.push(o[k])
            }
        }
        var h = Math.min.apply(null, p);
        var b = Math.max.apply(null, p);
        var g = Math.min.apply(null, n);
        var a = Math.max.apply(null, n);
        return {
            left: h,
            top: g,
            width: b - h,
            height: a - g
        }
    }
};
CE2.areaLength = function(b, a) {
    var c = parseInt(b, 10);
    if (b.indexOf("%")!=-1) {
        c*=0.01 * a
    }
    if (isNaN(c)) {
        return null
    }
    return c
};
CE2.getPageCoords = function(c) {
    c.pageX = c.left;
    c.pageY = c.top;
    var a, b;
    if (c.parentID && (a = CE2.d.getElementById(String(c.parentID)))) {
        b = CE2.getBox(a);
        c.pageX += b.pageX;
        c.pageY += b.pageY
    }
};
if (typeof CE2 == "undefined") {
    CE2 = {}
}
CE2.fingerprint = function(c) {
    var g = {
        type: CE2.tagTypes[c.nodeName.toLowerCase()] || 0
    }, b, d, f, a, e;
    if (b = CE2.getName(c)) {
        g.name = b
    }
    if (d = CE2.getData(c)) {
        g.data = d
    }
    if (f = c.getAttribute("id")) {
        g.id = f
    }
    if (a = c.getAttribute("ceid")) {
        g.ceid = a
    }
    if (e = CE2.getParentID(c)) {
        g.parentID = e
    }
    CE2.getBox(c, g, e ? c.parentNode : null);
    return g
};
CE2.getParentID = function(b) {
    var a = b.parentNode, c = null;
    if (a && a.getAttribute && (a != b.ownerDocument.body)) {
        if ((c = a.id) && (a.ownerDocument.getElementById(c) == a)) {
            return c
        }
        return a.getAttribute("ceid") || null
    }
};
CE2.IGNORE_HREF = /^\s*javascript:|^\s*#\s*$/;
CE2.getName = function(b) {
    var c, a;
    if (c = b.getAttribute("cename")) {
        return c
    }
    if (c = b.getAttribute("ceid")) {
        return c
    }
    if (c = (b.nodeName != "SELECT" && b.getAttribute("value"))) {
        return c
    }
    if (c = b.getAttribute("title")) {
        return c
    }
    if (c = b.getAttribute("alt")) {
        return c
    }
    if (c = b.getAttribute("name")) {
        return c
    }
    if (b.nodeName == "A") {
        if (c = CE2.innerTextName(b)) {
            return c
        }
    }
    if (c = CE2.href(b)) {
        a = CE2.href(b);
        if (a&&!CE2.IGNORE_HREF.test(a)) {
            return new CE2.URI(c).simplify()
        }
    }
    if (c = b.getAttribute("src")) {
        return new CE2.URI(c).simplify()
    }
    if (c = CE2.innerTextName(b)) {
        return c
    }
    if (c = b.getAttribute("id")) {
        return c
    }
    if (c = CE2.formatClass(b)) {
        return c
    }
    return ""
};
CE2.getData = function(b) {
    var a;
    switch (b.nodeName) {
    case"A":
        a = CE2.href(b);
        if (a&&!CE2.IGNORE_HREF.test(a)) {
            return new CE2.URI(b.href).simplify()
        } else {
            if (b.className) {
                return "@#" + CE2.formatClass(b)
            } else {
                break
            }
        }
    case"IMG":
    case"IFRAME":
    case"EMBED":
        return new CE2.URI(b.src).simplify();
    case"OBJECT":
        return new CE2.URI(b.data).simplify();
    case"INPUT":
    case"SELECT":
    case"TEXTAREA":
        return b.name;
    default:
        return CE2.formatClass(b)
    }
};
CE2.tagTypes = {
    a: 3,
    abbr: 4,
    acronym: 5,
    address: 6,
    applet: 7,
    area: 8,
    b: 9,
    base: 10,
    basefont: 11,
    bdo: 12,
    big: 13,
    blockquote: 14,
    body: 15,
    br: 16,
    button: 17,
    caption: 18,
    center: 19,
    cite: 20,
    code: 21,
    col: 22,
    colgroup: 23,
    dd: 24,
    del: 25,
    dfn: 26,
    dir: 27,
    div: 28,
    dl: 29,
    dt: 30,
    em: 31,
    fieldset: 32,
    font: 33,
    form: 34,
    frame: 35,
    frameset: 36,
    head: 37,
    h1: 38,
    h2: 38,
    h3: 38,
    h4: 38,
    h5: 38,
    h6: 38,
    hr: 38,
    html: 39,
    i: 40,
    iframe: 41,
    img: 42,
    input: 43,
    ins: 44,
    kbd: 45,
    label: 46,
    legend: 47,
    li: 48,
    link: 49,
    map: 50,
    menu: 51,
    meta: 52,
    noframes: 53,
    noscript: 54,
    object: 55,
    embed: 55,
    ol: 56,
    optgroup: 57,
    option: 58,
    p: 59,
    param: 60,
    pre: 61,
    q: 62,
    s: 63,
    samp: 64,
    script: 65,
    select: 66,
    small: 67,
    span: 68,
    strike: 69,
    strong: 70,
    style: 71,
    sub: 72,
    sup: 73,
    table: 74,
    tbody: 75,
    td: 76,
    textarea: 77,
    tfoot: 78,
    th: 79,
    thead: 80,
    title: 81,
    tr: 82,
    tt: 83,
    u: 84,
    ul: 85,
    "var": 86,
    article: 87,
    aside: 88,
    audio: 89,
    bdi: 90,
    canvas: 91,
    command: 92,
    details: 93,
    figcaption: 94,
    figure: 95,
    footer: 96,
    header: 97,
    hgroup: 98,
    keygen: 99,
    mark: 100,
    meter: 101,
    nav: 102,
    output: 103,
    progress: 104,
    rp: 105,
    rt: 106,
    ruby: 107,
    section: 108,
    summary: 109,
    time: 110,
    video: 111,
    "(custom)": 255
};
if (typeof CE2 == "undefined") {
    CE2 = {}
}
CE2.URI.prototype.join = function(a) {
    var c = new CE2.URI(this);
    var b = this.path;
    if (typeof(a) == "string") {
        a = new CE2.URI(a)
    }
    if (a.isURL()) {
        return new CE2.URI(a)
    }
    if (a.isAbsolute()) {
        b = a.path
    } else {
        if (b) {
            b = b.split("/");
            b.pop();
            b = a.path ? b.concat(a.path.split("/")) : b;
            b = b.join("/")
        } else {
            if (this.isURL()) {
                b = "/" + a.path
            } else {
                b = a.path
            }
        }
    }
    c.path = b;
    c.qs = a.qs;
    c.hash = a.hash;
    return c
};
CE2.URI.prototype.normalize = function() {
    if (!this.path) {
        return 
    }
    var c;
    if (CE2.ie && CE2.ieVersion < 9) {
        c = [];
        if (this.path.charAt(0) == "/") {
            c.push("")
        }
        c = c.concat(this.path.split(/\/+/g));
        if (this.path.charAt(this.path.length - 1) == "/") {
            c.push("")
        }
    } else {
        c = this.path.split(/\/+/g)
    }
    var b = 0, a;
    do {
        a = c.length - 1;
        if (c[b + 1] == "..") {
            if (c[b] == "" && b == 0) {
                c.splice(b + 1, 1)
            } else {
                c.splice(b, 2);
                b -= 1
            }
        } else {
            if (c[b] == ".") {
                if (a == 0) {
                    break
                } else {
                    c.splice(b, 1)
                }
            } else {
                b++
            }
        }
    }
    while (b <= a);
    this.path = c.join("/")
};
CE2.URI.prototype.simplify = function(c) {
    var b;
    var d = [];
    if (CE2.ie) {
        b = c ? c.join(this) : this
    } else {
        c = c || new CE2.URI(CE2.d.baseURI);
        b = c.join(this)
    }
    b.normalize();
    if (b.host) {
        d.push(b.host.replace(/^www\./i, ""))
    }
    if (b.port != null) {
        d.push(":" + b.port)
    }
    if (/^\/(default|home|index|$)/i.test(b.path)) {
        if (b.qs || b.hash) {
            d.push("/")
        }
    } else {
        d.push(b.path)
    }
    if (b.qs) {
        var a = [];
        CE2.each(b.qs, function(f, e) {
            if (f&&!/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(e)) {
                a.push(encodeURIComponent(e) + "=" + encodeURIComponent(f))
            }
        });
        if (a.length) {
            d.push("?" + a.join("&"))
        }
    }
    if (b.hash) {
        d.push("#" + b.hash)
    }
    return d.join("")
};
CE2.URI.prototype.sameOrigin = function(a) {
    if (!a) {
        return false
    }
    if (typeof a == "string") {
        a = new CE2.URI(a)
    }
    return (a.host == null || (a.host == this.host && a.port == this.port && a.protocol == this.protocol))
};
CE2.URI.prototype.getDomain = function() {
    return this.host && this.host.replace(/^www\./, "")
};
CE2.Tracker = function(d, b) {
    this.id = d;
    this.version = b;
    this.location = new CE2.URI(window.location.href);
    this.startTime = new Date().getTime();
    this.ignoredElements = CE2.ignoredElements.concat(CE2.findByClass("-ce-ignore"));
    this.clickCaptors = CE2.clickCaptors.concat(CE2.findByClass("-ce-capture"));
    this.opaqueElement = null;
    this.lastClicked = null;
    this.handlers = {};
    CE2.each(["onOver", "onOut", "onBlur", "onUnload", "onClickFrame", "onClick"], function(e) {
        this.handlers[e] = CE2.bind(this, e)
    }, this);
    this.handleEvents();
    this.isReturning = (function() {
        var e = CE2.qs2obj(document.cookie.replace(/;\s*/g, "&"));
        if (e) {
            return parseInt(e.is_returning, 10) || 0
        }
        return 0
    })();
    if ((typeof CE_NO_COOKIES == "undefined") ||!CE_NO_COOKIES) {
        var c = new Date();
        var a = new Date(c.getFullYear() + 5, c.getMonth(), c.getDate()).toUTCString();
        document.cookie = "is_returning=1;domain=." + (this.location.domain || this.location.getDomain()) + ";expires=" + a
    }
};
CE2.Tracker.prototype = {
    handleEvents: function() {
        var a = this.handlers;
        if (this.version && this.version >= 2) {
            CE2.initScrollTracking();
            this.trackScrollInterval = setInterval(CE2.bind(this, "trackScroll"), 100)
        }
        CE2.listen(document, "mousedown", a.onClick);
        CE2.each(["FRAME", "IFRAME", "OBJECT", "EMBED"], function(b, c) {
            var f = document.body.getElementsByTagName(b), c, d, e;
            for (c = 0; d = f[c++];) {
                if (/i?frame/i.test(d.nodeName) && this.location.sameOrigin(d.src)) {
                    CE2.listen(CE2.ieVersion < 9 ? d.contentWindow.document : d.contentWindow, "mousedown", a.onClickFrame)
                } else {
                    e = CE2.getBox(d);
                    if (e.width > 1 && e.height > 1) {
                        CE2.listen(d, "mouseover", a.onOver);
                        CE2.listen(d, "mouseout", a.onOut)
                    }
                }
            }
        }, this);
        CE2.listen(window, "blur", a.onBlur);
        CE2.listen(window, CE2.opera ? "unload" : "beforeunload", a.onUnload)
    },
    cleanup: function() {
        var a = this.handlers;
        clearInterval(this.trackScrollInterval);
        CE2.removeListener(document, "mousedown", a.onClick);
        CE2.removeListener(window, "blur", a.onBlur);
        CE2.removeListener(window, CE2.opera ? "unload" : "beforeunload", a.onUnload);
        CE2.each(["FRAME", "IFRAME", "OBJECT", "EMBED"], function(b, c) {
            var f = document.body.getElementsByTagName(b), c, d, e;
            for (c = 0; d = f[c++];) {
                if (/i?frame/i.test(d.nodeName) && this.location.sameOrigin(d.src)) {
                    CE2.removeListener(CE2.ieVersion < 9 ? d.contentWindow.document : d.contentWindow, "mousedown", a.onClickFrame)
                } else {
                    e = CE2.getBox(d);
                    if (e.width > 1 && e.height > 1) {
                        CE2.removeListener(d, "mouseover", a.onOver);
                        CE2.removeListener(d, "mouseout", a.onOut)
                    }
                }
            }
        }, this)
    },
    click: function(c, k, h) {
        if (c == document || c == document.body || c == document.documentElement) {
            return 
        }
        if (this.isIgnored(c)) {
            return 
        }
        if (this.clickCaptors && this.clickCaptors.length) {
            var n = this.clickCaptors;
            for (e = 0, l = n.length; e < l; e++) {
                if (CE2.contains(n[e], c)) {
                    c = n[e];
                    break
                }
            }
        }
        if (c.nodeName == "OPTION") {
            c = c.parentNode
        }
        if (CE2.isVML(c)) {
            return 
        }
        this.lastClicked = c;
        var m;
        if (k && (k.srcElement || k.target)) {
            m = k
        }
        var f = new CE2.Package(["type", "i", 1], ["left", "i", 2], ["top", "i", 2], ["width", "i", 2], ["height", "i", 2], ["id", "s", 40], ["ceid", "s", 40], ["name", "s", 100], ["data", "s", 180], ["parentID", "s", 40], ["x", "i", 1], ["y", "i", 1], ["windowWidth", "i", 1], ["timeToClick", "i", 1], ["isReturning", "i", 1], ["referrer", "s", 100], ["googleCampaignSource", "s", 100], ["googleCampaignMedium", "s", 100], ["googleCampaignTerm", "s", 100], ["googleCampaignContent", "s", 100], ["googleCampaignName", "s", 100], ["user1", "s", 100], ["user2", "s", 100], ["user3", "s", 100], ["user4", "s", 100], ["user5", "s", 100], ["flags", "i", 1]);
        var d;
        if (c.nodeType === 1) {
            d = CE2.fingerprint(c)
        } else {
            f.set("type", CE2.tagTypes["(custom)"]);
            f.set("flags", 1);
            CE2.getPageCoords(c);
            d = c
        }
        CE2.each(d, function(o, i) {
            f.set(i, o)
        });
        if (m) {
            var j = CE2.eventCoords(m);
            k = j[0] - d.pageX;
            h = j[1] - d.pageY
        } else {
            if (k == null) {
                k = d.width / 2;
                h = d.height / 2
            }
        }
        f.set("x", Math.floor((255 * k) / d.width));
        f.set("y", Math.floor((255 * h) / d.height));
        var b;
        if (window.innerWidth) {
            b = window.innerWidth
        } else {
            b = document.documentElement.clientWidth
        }
        if (b == 0) {
            f.set("windowWidth", 0)
        } else {
            f.set("windowWidth", Math.floor(b / 100) + 1)
        }
        f.set("timeToClick", CE2.getTimeRange(new Date().getTime() - this.startTime));
        f.set("isReturning", this.isReturning);
        f.set("referrer", new CE2.URI(document.referrer).simplify());
        var g;
        if (g = this.location.qs) {
            f.set("googleCampaignSource", g.utm_source || "");
            f.set("googleCampaignMedium", g.utm_medium || "");
            f.set("googleCampaignTerm", g.utm_term || "");
            f.set("googleCampaignContent", g.utm_content || "");
            f.set("googleCampaignName", g.utm_campaign || "")
        }
        for (var e = 1, a; e <= 5; e++) {
            a = CE2.userData[e];
            if (a) {
                f.set("user" + e, a)
            }
        }
        this.send(f, "c")
    },
    send: function(e, f, c) {
        var a, d = window.location.protocol == "https:" ? CE2.TRACKING_DEST_SECURE: CE2.TRACKING_DEST, b = d + f + "?" + this.id + "&" + (c ? c + "&" : "") + CE2.base64(e.toString());
        a = document.createElement("img");
        a.style.display = "none";
        a.src = b
    },
    isIgnored: function(d) {
        var b = this.ignoredElements, c, a;
        if (b && b.length) {
            for (c = 0, a = b.length; c < a; c++) {
                if (CE2.contains(b[c], d)) {
                    return true
                }
            }
        }
        return false
    },
    onClick: function(b, d) {
        var h, f, c, a;
        try {
            if (!this.id) {
                return 
            }
            if (CE2.ieVersion && (CE2.ieVersion < 9 || CE2.ieQuirksMode)) {
                if (b.button != 1) {
                    return 
                }
            } else {
                if (b.button != 0) {
                    return 
                }
            }
            if (d) {
                h = CE2.eventWindow(b);
                f = h.frameElement
            } else {
                f = b.srcElement || b.target
            }
            if (d) {
                this.click.apply(this, [f].concat(CE2.eventCoords(b, h)))
            } else {
                this.click(f, b)
            }
        } catch (g) {}
    },
    onClickFrame: function(a) {
        this.onClick(a, true)
    },
    onOver: function(a) {
        try {
            if (!this.id) {
                return 
            }
            var c = a.srcElement || a.target;
            if (this.isIgnored(c)) {
                return 
            }
            this.opaqueElement = c
        } catch (b) {}
    },
    onOut: function(a) {
        try {
            if (!this.id) {
                return 
            }
            if (this.isIgnored(a.srcElement || a.target)) {
                return 
            }
            this.opaqueElement = null
        } catch (b) {}
    },
    onBlur: function(a) {
        try {
            if (!this.id) {
                return 
            }
            var b = this.opaqueElement;
            if (b && b != this.lastClicked) {
                this.click(b);
                this.opaqueElement = null
            }
        } catch (c) {}
    },
    onUnload: function(a) {
        try {
            if (!this.id) {
                return 
            }
            var b = this.opaqueElement;
            if (this.isIgnored(b)) {
                return 
            }
            if (b) {
                this.click(b);
                this.opaqueElement = null
            }
        } catch (c) {}
    },
    trackScroll: function() {
        try {
            if (!this.id) {
                return 
            }
            var a = CE2.scroll();
            if (!CE2.shouldRecordScroll(a)) {
                return 
            }
            var b = this;
            CE2.findAnchorElement(a, function(h) {
                try {
                    var f = new CE2.Package(["screenTop", "i", 2], ["screenHeight", "i", 2], ["screenTopDistanceFromAnchor", "i", 2], ["screenBottomDistanceFromAnchor", "i", 2], ["type", "i", 1], ["left", "i", 2], ["top", "i", 2], ["width", "i", 2], ["height", "i", 2], ["id", "s", 40], ["ceid", "s", 40], ["name", "s", 100], ["data", "s", 180], ["parentID", "s", 40]);
                    f.set("screenTop", a.top);
                    f.set("screenHeight", a.height);
                    if (h) {
                        var d = CE2.fingerprint(h);
                        f.set("screenTopDistanceFromAnchor", (a.top - d.pageY) + CE2.S16_0);
                        f.set("screenBottomDistanceFromAnchor", ((a.top + a.height) - d.pageY) + CE2.S16_0);
                        CE2.each(d, function(i, e) {
                            f.set(e, i)
                        })
                    }
                    b.send(f, "s", Math.floor(new Date().getTime() / 1000))
                } catch (g) {}
            })
        } catch (c) {}
    }
};
if (CE2.tracker) {
    CE2.tracker.cleanup()
}
CE2.tracker = new CE2.Tracker(CE2.testID, CE2.testVersion);
