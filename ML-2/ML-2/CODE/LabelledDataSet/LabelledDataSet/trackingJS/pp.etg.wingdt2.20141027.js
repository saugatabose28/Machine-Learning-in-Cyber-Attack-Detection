window['PP.etg.wingdt2.time'] && window['PP.etg.wingdt2.time'].push(new Date());
function $addClass(ids, cName) {
    $setClass(ids, cName, "add");
};
function $addEvent(obj, type, handle) {
    if (!obj ||!type ||!handle) {
        return;
    }
    if (obj instanceof Array) {
        for (var i = 0, l = obj.length; i < l; i++) {
            $addEvent(obj[i], type, handle);
        }
        return;
    }
    if (type instanceof Array) {
        for (var i = 0, l = type.length; i < l; i++) {
            $addEvent(obj, type[i], handle);
        }
        return;
    }
    window.__allHandlers = window.__allHandlers || {};
    window.__Hcounter = window.__Hcounter || 1;
    function setHandler(obj, type, handler, wrapper) {
        obj.__hids = obj.__hids || [];
        var hid = 'h' + window.__Hcounter++;
        obj.__hids.push(hid);
        window.__allHandlers[hid] = {
            type: type,
            handler: handler,
            wrapper: wrapper
        }
    }
    function createDelegate(handle, context) {
        return function() {
            return handle.apply(context, arguments);
        };
    }
    if (window.addEventListener) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper)
        obj.addEventListener(type, wrapper, false);
    } else if (window.attachEvent) {
        var wrapper = createDelegate(handle, obj);
        setHandler(obj, type, handle, wrapper)
        obj.attachEvent("on" + type, wrapper);
    } else {
        obj["on" + type] = handle;
    }
};
function $addToken(url, type, skey) {
    var token = $getToken(skey);
    if (url == "" || (url.indexOf("://") < 0 ? location.href : url).indexOf("http") != 0) {
        return url;
    }
    if (url.indexOf("#")!=-1) {
        var f1 = url.match(/\?.+\#/);
        if (f1) {
            var t = f1[0].split("#"), newPara = [t[0], "&g_tk=", token, "&g_ty=", type, "#", t[1]].join("");
            return url.replace(f1[0], newPara);
        } else {
            var t = url.split("#");
            return [t[0], "?g_tk=", token, "&g_ty=", type, "#", t[1]].join("");
        }
    }
    return token == "" ? (url + (url.indexOf("?")!=-1 ? "&" : "?") + "g_ty=" + type) : (url + (url.indexOf("?")!=-1 ? "&" : "?") + "g_tk=" + token + "&g_ty=" + type);
};
function $attr(attr, val, node) {
    var results = [], node = node || document.body;
    walk(node, function(n) {
        if (window.__skipHidden && n.type == "hidden" && n.tagName == "INPUT") {
            return false;
        }
        var actual = n.nodeType === 1 && (attr === "class" ? n.className : (typeof n.getAttribute != "unknown" && n.getAttribute(attr)));
        if (typeof actual === 'string' && (actual === val || typeof val !== 'string')) {
            results.push(n);
        }
    });
    return results;
    function walk(n, func) {
        func(n);
        n = n.firstChild;
        while (n) {
            walk(n, func);
            n = n.nextSibling;
        }
    }
};
function $child(node, val, fn, filter) {
    var results = [], filter = filter || $empty();
    if (!node)
        return results;
    walk(node.firstChild, function(n) {
        if (!n) {
            return;
        }
        var actual = n.nodeType === 1 && n.nodeName.toLowerCase();
        if (typeof actual === 'string' && (actual === val || typeof val !== 'string') && filter(n)) {
            results.push(n);
            fn && fn(n, results.length - 1);
        }
    });
    return results;
    function walk(n, func) {
        func(n);
        while (n && (n = n.nextSibling)) {
            func(n, func);
        }
    }
};
function $delClass(ids, cName) {
    $setClass(ids, cName, "remove");
};
function $empty() {
    return function() {
        return true;
    }
};
function $getCookie(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"), val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : null;
};
function $getQuery(name, url) {
    var u = arguments[1] || window.location.search, reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"), r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
};
function $getTarget(e, parent, tag) {
    var e = window.event || e, tar = e.srcElement || e.target;
    if (parent && tag && tar.nodeName.toLowerCase() != tag) {
        while (tar = tar.parentNode) {
            if (tar == parent || tar == document.body || tar == document) {
                return null;
            } else if (tar.nodeName.toLowerCase() == tag) {
                break;
            }
        }
    };
    return tar;
};
function $getToken(skey) {
    var skey = skey ? skey: $getCookie("skey");
    return skey ? $time33(skey) : "";
};
function $hasClass(old, cur) {
    if (!old ||!cur)
        return null;
    var arr = (typeof old == 'object' ? old.className : old).split(' ');
    for (var i = 0, len = arr.length; i < len; i++) {
        if (cur == arr[i]) {
            return cur;
        }
    };
    return null;
};
function $id(id) {
    return typeof(id) == "string" ? document.getElementById(id) : id;
};
function $inArray(t, arr) {
    if (arr.indexOf) {
        return arr.indexOf(t);
    }
    for (var i = arr.length; i--;) {
        if (arr[i] === t) {
            return i * 1;
        }
    };
    return - 1;
};
function $loadImg(obj, attr) {
    if (!obj)
        return;
    var attr = attr || "back_src", images = obj.getElementsByTagName("IMG");
    for (var i = 0, len = images.length; i < len; i++) {
        var oImg = images[i], src = oImg.getAttribute(attr);
        '' == oImg.src && src && (oImg.src = src);
    }
};
function $loadScript(obj) {
    if (!$loadScript.counter) {
        $loadScript.counter = 1;
    }
    var isObj = typeof(obj) == "object", url = isObj ? obj.url: arguments[0], id = isObj ? obj.id: arguments[1], obj = isObj ? obj: arguments[2], _head = document.head || document.getElementsByTagName("head")[0] || document.documentElement, _script = document.createElement("script"), D = new Date(), _time = D.getTime(), _isCleared = false, _timer = null, o = obj || {}, data = o.data || '', charset = o.charset || "gb2312", isToken = o.isToken, skey = o.skey, timeout = o.timeout, isAutoReport = o.isAutoReport || false, reportOptions = o.reportOptions || {}, reportType = o.reportType || 'current', reportRetCodeName = o.reportRetCodeName, reportSuccessCode = typeof(o.reportSuccessCode) == "undefined" ? 200: o.reportSuccessCode, reportErrorCode = typeof(o.reportErrorCode) == "undefined" ? 500: o.reportErrorCode, reportTimeoutCode = typeof(o.reportTimeoutCode) == "undefined" ? 600: o.reportTimeoutCode, onload = o.onload, onsucc = o.onsucc, callbackName = o.callbackName || '', callback = o.callback, errorback = o.errorback, _jsonpLoadState = 'uninitialized';
    var complete = function(errCode) {
        if (!_script || _isCleared) {
            return;
        }
        _isCleared = true;
        if (_timer) {
            clearTimeout(_timer);
            _timer = null;
        }
        _script.onload = _script.onreadystatechange = _script.onerror = null;
        if (_head && _script.parentNode) {
            _head.removeChild(_script);
        }
        _script = null;
        if (callbackName) {
            if (callbackName.indexOf('.')==-1) {
                window[callbackName] = null;
                try {
                    delete window[callbackName];
                } catch (e) {}
            } else {
                var arrJ = callbackName.split("."), p = {};
                for (var j = 0, jLen = arrJ.length; j < jLen; j++) {
                    var n = arrJ[j];
                    if (j == 0) {
                        p = window[n];
                    } else {
                        if (j == jLen - 1) {
                            try {
                                delete p[n];
                            } catch (e) {}
                        } else {
                            p = p[n];
                        }
                    }
                }
            }
        }
        if (_jsonpLoadState != "loaded" && typeof errorback == "function") {
            errorback(errCode);
        }
        if (isAutoReport && reportType != 'cross') {
            _retCoder.report(_jsonpLoadState == "loaded", errCode);
        }
    };
    var jsontostr = function(d) {
        var a = [];
        for (var k in d) {
            a.push(k + '=' + d[k]);
        }
        return a.join('&');
    };
    if (isAutoReport && reportOptions) {
        if (reportType == 'cross') {
            $returnCode(reportOptions).reg();
        } else {
            reportOptions.url = reportOptions.url || url.substr(0, url.indexOf('?')==-1 ? url.length : url.indexOf('?'));
            var _retCoder = $returnCode(reportOptions);
        }
    }
    if (data) {
        url += (url.indexOf("?")!=-1 ? "&" : "?") + (typeof data == 'string' ? data : jsontostr(data));
    }
    if (callbackName && typeof callback == "function") {
        var oldName = callbackName;
        if (callbackName.indexOf('.')==-1) {
            callbackName = window[callbackName] ? callbackName + $loadScript.counter++ : callbackName;
            window[callbackName] = function(jsonData) {
                _jsonpLoadState = 'loaded';
                if (isAutoReport && reportRetCodeName) {
                    reportSuccessCode = jsonData[reportRetCodeName];
                }
                callback.apply(null, arguments);
                onsucc && (onsucc());
            };
        } else {
            var arrJ = callbackName.split("."), p = {}, arrF = [];
            for (var j = 0, jLen = arrJ.length; j < jLen; j++) {
                var n = arrJ[j];
                if (j == 0) {
                    p = window[n];
                } else {
                    if (j == jLen - 1) {
                        p[n] ? (n = n + $loadScript.counter++) : '';
                        p[n] = function(jsonData) {
                            _jsonpLoadState = 'loaded';
                            if (isAutoReport && reportRetCodeName) {
                                reportSuccessCode = jsonData[reportRetCodeName];
                            }
                            callback.apply(null, arguments);
                            onsucc && (onsucc());
                        };
                    } else {
                        p = p[n];
                    }
                }
                arrF.push(n);
            }
            callbackName = arrF.join('.');
        }
        url = url.replace('=' + oldName, '=' + callbackName);
    }
    _jsonpLoadState = 'loading';
    id = id ? (id + _time) : _time;
    url = (isToken !== false ? $addToken(url, "ls", skey) : url);
    _script.charset = charset;
    _script.id = id;
    _script.onload = _script.onreadystatechange = function() {
        var uA = navigator.userAgent.toLowerCase();
        if (!(!(uA.indexOf("opera")!=-1) && uA.indexOf("msie")!=-1) || /loaded|complete/i.test(this.readyState)) {
            if (typeof onload == "function") {
                onload();
            }
            complete(_jsonpLoadState == "loaded" ? reportSuccessCode : reportErrorCode);
        }
    };
    _script.onerror = function() {
        complete(reportErrorCode);
    };
    if (timeout) {
        _timer = setTimeout(function() {
            complete(reportTimeoutCode);
        }, parseInt(timeout, 10));
    }
    setTimeout(function() {
        _script.src = url;
        try {
            _head.insertBefore(_script, _head.lastChild);
        } catch (e) {}
    }, 0);
};
function $loadUrl(o) {
    o.element = o.element || 'script';
    var el = document.createElement(o.element);
    el.charset = o.charset || 'utf-8';
    o.onBeforeSend && o.onBeforeSend(el);
    el.onload = el.onreadystatechange = function() {
        if (/loaded|complete/i.test(this.readyState) || navigator.userAgent.toLowerCase().indexOf("msie")==-1) {
            o.onLoad && o.onLoad();
            clear();
        }
    };
    el.onerror = function() {
        clear();
    };
    el.src = o.url;
    document.getElementsByTagName('head')[0].appendChild(el);
    function clear() {
        if (!el) {
            return;
        }
        el.onload = el.onreadystatechange = el.onerror = null;
        el.parentNode && (el.parentNode.removeChild(el));
        el = null;
    }
};
function $preventDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    } else {
        window.event.returnValue = false;
    };
    return false;
};
function $randomInt(num1, num2) {
    if (num2 == undefined) {
        num2 = num1;
        num1 = 0;
    }
    return Math.floor(Math.random() * (num2 - num1) + num1);
};
function $report(url) {
    $loadUrl({
        'url': url + ((url.indexOf('?')==-1) ? '?' : '&') + Math.random(),
        'element': 'img'
    });
};
function $returnCode(opt) {
    var option = {
        url: "",
        action: "",
        sTime: "",
        eTime: "",
        retCode: "",
        errCode: "",
        frequence: 1,
        refer: "",
        uin: "",
        domain: "paipai.com",
        from: 1,
        report: report,
        isReport: false,
        timeout: 3000,
        timeoutCode: 444,
        formatUrl: true,
        reg: reg
    };
    try {
        option['refer'] = location.href;
    } catch (e) {}
    for (var i in opt) {
        option[i] = opt[i];
    }
    if (option.url) {
        option.sTime = new Date();
    }
    if (option.timeout) {
        setTimeout(function() {
            if (!option.isReport) {
                option.report(false, option.timeoutCode);
            }
        }, option.timeout);
    }
    function reg() {
        this.sTime = new Date();
        if (!this.action) {
            return;
        }
        var rcookie = $getCookie("retcode"), cookie2 = [];
        rcookie = rcookie ? rcookie.split("|") : [];
        for (var i = 0; i < rcookie.length; i++) {
            if (rcookie[i].split(",")[0] != this.action) {
                cookie2.push(rcookie[i]);
            }
        }
        cookie2.push(this.action + "," + this.sTime.getTime());
        $setCookie("retcode", cookie2.join("|"), 60, "/", this.domain);
    }
    function report(ret, errid) {
        if (this.isReport == true) {
            return;
        }
        this.isReport = true;
        this.eTime = new Date();
        this.retCode = ret ? 1 : 2;
        this.errCode = isNaN(parseInt(errid)) ? "0" : parseInt(errid);
        if (this.action) {
            this.url = "http://retcode.paipai.com/" + this.action;
            var rcookie = $getCookie("retcode"), ret = "", ncookie = [];
            rcookie = rcookie ? rcookie.split("|") : [];
            for (var i = 0; i < rcookie.length; i++) {
                if (rcookie[i].split(",")[0] == this.action) {
                    ret = rcookie[i].split(",");
                } else {
                    ncookie.push(rcookie[i]);
                }
            }
            $setCookie("retcode", ncookie.join("|"), 60, "/", this.domain);
            if (!ret) {
                return;
            }
            this.sTime = new Date(parseInt(ret[1]));
        }
        if (!this.url) {
            return;
        }
        var domain = this.url.replace(/^.*\/\//, '').replace(/\/.*/, ''), timer = this.eTime - this.sTime, cgi = encodeURIComponent(this.formatUrl ? this.url.match(/^[\w|/|.|:|-]*/)[0] : this.url);
        this.reportUrl = "http://c.isdspeed.qq.com/code.cgi?domain=" + domain + "&cgi=" + cgi + "&type=" + this.retCode + "&code=" + this.errCode + "&time=" + timer + "&rate=" + this.frequence + (this.uin ? ("&uin=" + this.uin) : "");
        if (this.reportUrl && Math.random() < (1 / this.frequence) && this.url) {
            $report(this.reportUrl);
        }
    }
    return option;
};
function $setClass(ids, cName, kind) {
    if (!ids) {
        return;
    }
    var set = function(obj, cName, kind) {
        if (!obj) {
            return;
        }
        var oldName = obj.className, arrName = oldName ? oldName.split(' '): [];
        if (kind == "add") {
            if (!$hasClass(oldName, cName)) {
                arrName.push(cName);
                obj.className = arrName.join(' ');
            }
        } else if (kind == "remove") {
            var newName = [];
            for (var i = 0, l = arrName.length; i < l; i++) {
                if (cName != arrName[i] && ' ' != arrName[i]) {
                    newName.push(arrName[i]);
                }
            }
            obj.className = newName.join(' ');
        }
    };
    if (typeof(ids) == "string") {
        var arrDom = ids.split(",");
        for (var i = 0, l = arrDom.length; i < l; i++) {
            if (arrDom[i]) {
                set($id(arrDom[i]), cName, kind);
            }
        }
    } else if (ids instanceof Array) {
        for (var i = 0, l = ids.length; i < l; i++) {
            if (ids[i]) {
                set(ids[i], cName, kind);
            }
        }
    } else {
        set(ids, cName, kind);
    }
};
function $setCookie(name, value, expires, path, domain, secure) {
    var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
    expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
    document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
};
function $slider(obj) {
    var opt = {
        titleId: "",
        titleTag: "",
        contentId: "",
        contentTag: "",
        prevId: "",
        nextId: "",
        perView: 1,
        className: "current",
        eventType: "mouseover",
        initIndex: NaN,
        timeLag: 300,
        funcInit: $empty(),
        funcTabInit: $empty(),
        func: $empty(),
        onPage: $empty(),
        nodeWalker: null,
        auto: false,
        autoKeep: true,
        autoTimes: 100,
        autoLag: 5000,
        fadeLag: 50,
        fadeTimes: 500,
        initSpeed: 100,
        effect: 'none',
        width: 0,
        height: 0,
        backAttr: "back_src",
        isLoadInit: true,
        focusIndex: setEffect,
        clearAuto: function() {
            clearInterval(autoIntr)
        },
        cont: null,
        tabs: null,
        funcTabChange: $empty()
    };
    for (var i in obj) {
        opt[i] = obj[i]
    };
    ((opt.width == 0 && opt.effect == "scrollx") || (opt.height == 0 && opt.effect == "scrolly")) && (opt.effect = "none");
    var total = 0, autoCount = 0, isInit = true, intr = null, autoIntr = null, _imgs = [];
    if (opt.contentId) {
        var oContent = $id(opt.contentId), _cont = (opt.nodeWalker || $child)(oContent, opt.contentTag, function(dom) {
            switch (opt.effect) {
            case"none":
                dom.style.display = "none";
                break;
            case"scrollx":
                dom.style.width = opt.width + "px";
                dom.style.styleFloat = dom.style.cssFloat = "left";
                dom.style.visibility = "hidden";
                break;
            case"scrolly":
                dom.style.height = opt.height + "px";
                dom.style.visibility = "hidden";
                break;
            case"fade":
                dom.style.display = "none";
                dom.style.position = "absolute";
                dom.style.left = 0;
                dom.style.top = 0;
                break;
            };
            opt.funcInit(total++, dom);
        });
        if (opt.auto) {
            $addEvent(oContent, "mouseover", function() {
                clearInterval(autoIntr);
            });
            opt.autoKeep && $addEvent(oContent, "mouseout", function() {
                setAuto();
            });
        };
        opt.cont = _cont;
    }
    var len = opt.perView, now = 0;
    if (opt.titleId) {
        var oTitle = $id(opt.titleId), _tabs = (opt.nodeWalker || $child)(oTitle, opt.titleTag, function(dom) {
            opt.funcTabInit(now, dom);
            dom.setAttribute("index", now++);
        });
        $addEvent(oTitle, opt.eventType, function(e) {
            var tar = $getTarget(e, oTitle, opt.titleTag);
            if (tar && $inArray(tar, _tabs)!=-1) {
                var cur = tar.getAttribute("index") * 1;
                clearInterval(autoIntr);
                if (cur != current) {
                    intr = setTimeout(function() {
                        opt.funcTabChange(cur, opt);
                        setEffect(cur);
                    }, opt.timeLag);
                }
            }
        });
        $addEvent(oTitle, "mouseout", function(e) {
            var tar = $getTarget(e, oTitle, opt.titleTag);
            if (tar) {
                clearTimeout(intr);
                opt.auto && opt.autoKeep && setAuto();
            }
        });
        opt.tabs = _tabs;
        total = now;
    };
    var pageTotal = Math.ceil(total / len), current = isNaN(opt.initIndex) ? $randomInt(pageTotal): opt.initIndex, autoTotal = opt.autoTimes * total - 1;
    setEffect(current);
    opt.auto && setAuto();
    if (opt.prevId) {
        if (opt.prevId.indexOf(",")>-1) {
            var prevs = opt.prevId.split(",");
            for (var i = 0, j = prevs.length; i < j; i++) {
                $addEvent($id(prevs[i]), "click", showPrev);
            }
        } else {
            $addEvent($id(opt.prevId), "click", showPrev);
        }
    }
    if (opt.nextId) {
        if (opt.nextId.indexOf(",")>-1) {
            var nexts = opt.nextId.split(",");
            for (var i = 0, j = nexts.length; i < j; i++) {
                $addEvent($id(nexts[i]), "click", showNext);
            }
        } else {
            $addEvent($id(opt.nextId), "click", showNext);
        }
    }
    isInit = false;
    return opt;
    function setAuto() {
        autoIntr && clearInterval(autoIntr);
        autoIntr = setInterval(function() {
            if (autoCount >= autoTotal) {
                clearInterval(autoIntr);
            } else {
                setEffect((now = current + 1) >= pageTotal ? 0 : now);
                autoCount++;
            }
        }, opt.autoLag);
    }
    function setEffect(cur) {
        if (cur >= _cont.length)
            return;
        if (!opt.contentId) {
            showItem(cur);
            current = cur;
            return;
        };
        if (isInit) {
            switch (opt.effect) {
            case"scrollx":
                oContent.style.position = "relative";
                oContent.style.width = (total + 1) * opt.width + "px";
                oContent.style.left =- current * opt.width + "px";
                break;
            case"scrolly":
                oContent.style.position = "relative";
                oContent.style.top =- current * opt.height + "px";
                break;
            case"fade":
                oContent.style.position = "relative";
                break;
            };
            for (var i = 0; i < len; i++) {
                (now = cur + i) < total && showItem(now);
            };
            opt.onPage(cur);
            current = cur;
        } else {
            var fadeStep = Math.floor(opt.fadeTimes / opt.fadeLag), fadeIntr = null, fadeCount = 0;
            if (opt.globeFadeIntr) {
                switch (opt.effect) {
                case"fade":
                    _cont[current].style.zIndex = 0;
                    _cont[cur].style.zIndex = 1;
                    _cont[current].style.filter = "alpha(opacity=0)";
                    _cont[current].style.opacity = 0;
                    _cont[cur].style.filter = "alpha(opacity=1)";
                    _cont[cur].style.opacity = 1;
                    current = cur;
                    break;
                }
                clearInterval(opt.globeFadeIntr);
            }
            opt.globeFadeIntr = null;
            switch (opt.effect) {
            case"none":
                for (var i = 0; i < len; i++) {
                    (now = current * len + i) < total && (_cont[now].style.display = "none");
                    (now = cur * len + i) < total && showItem(now);
                };
                opt.onPage(cur);
                current = cur;
                break;
            case"scrollx":
                var left = getSpeed(opt.width);
                showItem(cur);
                opt.globeFadeIntr = fadeIntr = setInterval(function() {
                    if (fadeCount++>=fadeStep) {
                        clearInterval(fadeIntr);
                        opt.globeFadeIntr = null;
                        oContent.style.left =- left.end + "px";
                        current = cur;
                    } else {
                        oContent.style.left =- getMove(left) + "px";
                        left.t = left.t < opt.fadeTimes ? (left.t + opt.fadeLag) : opt.fadeTimes;
                    };
                }, opt.fadeLag);
                break;
            case"scrolly":
                var top = getSpeed(opt.height);
                showItem(cur);
                opt.globeFadeIntr = fadeIntr = setInterval(function() {
                    if (fadeCount++>=fadeStep) {
                        clearInterval(fadeIntr);
                        opt.globeFadeIntr = null;
                        oContent.style.top =- top.end + "px";
                        current = cur;
                    } else {
                        oContent.style.top =- getMove(top) + "px";
                        top.t = top.t < opt.fadeTimes ? (top.t + opt.fadeLag) : opt.fadeTimes;
                    };
                }, opt.fadeLag);
                break;
            case"fade":
                showItem(cur);
                opt.globeFadeIntr = fadeIntr = setInterval(function() {
                    if (fadeCount++>=fadeStep) {
                        clearInterval(fadeIntr);
                        opt.globeFadeIntr = null;
                        _cont[current].style.zIndex = 0;
                        _cont[cur].style.zIndex = 1;
                        current = cur;
                    } else {
                        var per = fadeCount / fadeStep;
                        _cont[current].style.filter = "alpha(opacity=" + (1 - per) * 100 + ")";
                        _cont[current].style.opacity = 1 - per;
                        _cont[cur].style.filter = "alpha(opacity=" + (per * 100) + ")";
                        _cont[cur].style.opacity = per;
                    };
                }, opt.fadeLag);
                break;
            };
        }
        function getSpeed(s) {
            var flag = (cur - current) < 0?-1 : 1, end = cur * s, here = (cur - flag) * s, oFirst = _cont[0];
            current == 0 && (oFirst.style.position = "static");
            if (current + 1 == total && cur == 0) {
                flag = 1;
                end = (current + 1) * s;
                here = current * s;
                oFirst.style.position = "relative";
                opt.effect == "scrollx" ? oFirst.style.left = end + "px" : oFirst.style.top = end + "px";
            };
            return {
                t: 0,
                distance: flag * s,
                end: end,
                here: here
            }
        }
        function getMove(obj) {
            var b = obj.here, c = obj.distance, d = opt.fadeTimes, t = obj.t / d - 1;
            return parseInt( - c * (t * t * t * t - 1) + b, 10);
        }
        function showItem(cur) {
            if (cur >= _cont.length)
                return;
            if (opt.contentId&&!_imgs[cur] && (isInit == false || (isInit == true && opt.isLoadInit == true))) {
                $loadImg(_cont[cur], opt.backAttr);
                _imgs[cur] = true;
            };
            if (opt.contentId) {
                _cont[cur].style.display == "none" && (_cont[cur].style.display = "block");
                _cont[cur].style.visibility == "hidden" && (_cont[cur].style.visibility = "visible");
            };
            if (opt.titleId) {
                for (var i = 0, len = _tabs.length; i < len; i++) {
                    i != cur && $delClass(_tabs[i], opt.className);
                }
                $addClass(_tabs[cur], opt.className);
                _tabs[cur].style.display == "none" && (_tabs[cur].style.display = "block");
            };
            opt.func(cur);
        }
    }
    function showPrev(e) {
        $preventDefault(e);
        clearInterval(autoIntr);
        setEffect((now = current - 1) < 0 ? (pageTotal - 1) : now);
    }
    function showNext(e) {
        $preventDefault(e);
        clearInterval(autoIntr);
        setEffect((now = current + 1) >= pageTotal ? 0 : now);
    }
};
function $strReplace(str, re, rt) {
    if (rt != undefined) {
        replace(re, rt);
    } else {
        for (var key in re) {
            replace(key, re[key]);
        };
    };
    function replace(a, b) {
        var arr = str.split(a);
        str = arr.join(b);
    };
    return str;
};
function $time33(str) {
    for (var i = 0, len = str.length, hash = 5381; i < len; ++i) {
        hash += (hash<<5) + str.charAt(i).charCodeAt();
    };
    return hash & 0x7fffffff;
};
namespace("PP.etg.wingdt2");
PP.etg.wingdt2 = {}
PP.etg.wingdt2.init = function() {
    this.checkGetAds();
}
PP.etg.wingdt2.checkGetAds = function() {
    var abtestingRate = 100, randomNum = Math.random() * 100;
    var grayType = $getQuery('isgray');
    if (grayType == "new") {
        abtestingRate = 100;
    } else if (grayType == "old") {
        abtestingRate = 0;
    }
    if (checkAdsIn(EXPAD_POSID) && randomNum < abtestingRate) {
        getAlterAds(EXPAD_POSID, getloader);
    } else {
        this.sendRequest();
    }
    function checkAdsIn(postid) {
        var oldAdsIds = ["5080609051822677", "5060509091322668", "9020807021027669", "1080865053853209807", "1873498588270417103", "4179341597484111055", ['4251399191522038991', '4179341597484111055'], "936749865777353935", "4323456785559966927", "3386708063066903759", '1008807459815281871', ['1008807459815281871'], ['1008807459815281871', '3386708063066903759'], "1297037835966993615", "1801440994232489167", "2060704091423750", "1080406070957058", "4000109010955069", "2594074528649696463", "2522016934611768527", "3242592874991047887", "5080305040153036", ["5332263102090958031", "5404320696128885967"], "3098477686915192015", "4090901001721674", "1050202071923622", "4010901041121671"];
        for (var i = oldAdsIds.length - 1; i >= 0; i--) {
            if (oldAdsIds[i] == postid || (isArray(postid) && isArray(oldAdsIds[i]) && oldAdsIds[i].join("") == postid.join(""))) {
                return true;
            }
        }
        return false;
    }
    function getAlterAds(adid, __callback) {
        var oldAdsSpec = [["5080609051822677", "1080865053853209807", "1873498588270417103", "936749865777353935", "4323456785559966927", '1008807459815281871', ['1008807459815281871'], ['1008807459815281871', '3386708063066903759'], "1297037835966993615", "1801440994232489167", ["5332263102090958031", "5404320696128885967"], "3098477686915192015", "1050202071923622", "4010901041121671"], ["1080406070957058", "5080305040153036"], ["5060509091322668", "9020807021027669", "4179341597484111055", ['4251399191522038991', '4179341597484111055'], "3386708063066903759", "2060704091423750", "4000109010955069", "2594074528649696463", "2522016934611768527", "3242592874991047887", "4090901001721674"]];
        for (var altindex = oldAdsSpec.length - 1; altindex >= 0; altindex--) {
            var tempAltAds = oldAdsSpec[altindex];
            for (var i = tempAltAds.length - 1; i >= 0; i--) {
                if (tempAltAds[i] == adid || (isArray(adid) && isArray(tempAltAds[i]) && tempAltAds[i].join("") == adid.join(""))) {
                    var tempAltIndex = altindex;
                    if (tempAltIndex == 0) {
                        tempAltIndex = ""
                    } else {
                        ++tempAltIndex;
                    }
                    window["adAlterData" + tempAltIndex + "Callback"] = function(adDatas) {
                        if (!window.EXPAD_ALTAD) {
                            window.EXPAD_ALTAD = adDatas;
                        }
                    };
                    PP.etg.wingdt2.loadScript('http://static.paipaiimg.com/js/adAlterData' + tempAltIndex + '.js', __callback);
                    return;
                }
            }
        }
    }
    function getloader() {
        PP.etg.wingdt2.loadScript('http://qzs.qq.com/qzone/biz/gdt/comm/etg_showcase.js', function() {
            var opt = {
                adlistid: window.EXPAD_ADLISTID,
                tplid: window.EXPAD_MODELID,
                posid: window.EXPAD_POSID,
                count: window.EXPAD_COUNT,
                tpllist: {},
                pageprev: window.PAGE_PREV,
                pagecontent: window.PAGE_CONENT,
                pagenext: window.PAGE_NEXT,
                pagetotal: window.PAGE_TOTAL,
                pagecount: window.PAGE_COUNT,
                page_interval: window.PAGE_INTERVAL,
                pagewrap: window.PAGE_WRAP,
                right_adlistid: window.EXPAD_RIGHT_ADLISTID,
                right_cont: window.PAGE_RIGHT_CONT,
                right_moduleid: window.EXPAD_RIGHT_MODELID,
                classlist: window.CLASS,
                ptag: window.PTAG,
                leftslider: window.leftslider,
                rightslider: window.rightslider,
                slider: window.slider,
                unitnum: window.EXPAD_UNITNUM,
                cpc_padding: window.CPC_PADDING,
                defaultads: window.EXPAD_ALTAD || []
            };
            var tplidlist = opt.tplid;
            !isArray(tplidlist) && (tplidlist = [tplidlist]);
            opt.tpllist[tplidlist] = document.getElementById(tplidlist).innerHTML;
            GDTMOD.showcase.init(opt);
        }, "utf-8");
    }
};
PP.etg.wingdt2.sendRequest = function() {
    if (typeof GDT !== 'undefined') {
        var scope = PP.etg.wingdt2;
        scope.reCoder = $returnCode({
            url: 'http://express.paipai.com/gdt?posid=' + EXPAD_POSID,
            formatUrl: false
        });
        GDT.load({
            posId: EXPAD_POSID,
            count: EXPAD_COUNT,
            onComplete: scope.gdtCallback,
            context: {
                classlist: window.CLASS || '',
                req: {
                    ptag: window.PTAG || ''
                }
            }
        });
        scope.timeoutTag = setTimeout(function() {
            scope.reCoder.report(false, EXPADERR.TIMEOUT);
            scope.showAlternative();
            var obj = {};
            if (window.EXPAD_ALTAD&&!EXPAD_ALTAD[EXPAD_ALTAD.length - 1]) {
                EXPAD_ALTAD.pop();
            }
            obj.data = window.EXPAD_ALTAD || [];
            scope.gdtCallback(obj);
        }, 15000);
    }
}
PP.etg.wingdt2.gdtCallback = function(obj) {
    try {
        var scope = PP.etg.wingdt2;
        clearTimeout(scope.timeoutTag);
        if (obj.ret) {
            var model = $id(EXPAD_MODELID || 'adItemTmpl'), listObj = $id(EXPAD_ADLISTID || 'adList'), posid = EXPAD_POSID, datas = obj.data, itemStrs = [], commIds = [], shopIds = [], len;
            if (!posid ||!model ||!listObj) {
                scope.reCoder.report(false, EXPADERR.LACKDOM);
                scope.showAlternative();
                return false;
            }
            try {
                if (!datas) {
                    datas = [];
                    scope.reCoder.report(true, EXPADERR.EMPTY);
                } else if (datas.length < EXPAD_COUNT) {
                    scope.reCoder.report(true, EXPADERR.NOTENOUGH);
                }
            } catch (e) {
                datas = window.EXPAD_ALTAD || [];
            }
            if (window.EXPAD_ALTAD) {
                EXPAD_ALTAD.pop();
                datas = datas.concat(EXPAD_ALTAD);
            }
            model = model.innerHTML;
            len = Math.min(datas.length, EXPAD_COUNT);
            for (var i = 0; i < len; i++) {
                var data = datas[i], str = model;
                if (window.EXPAD_UNITNUM) {
                    if (i == 0) {
                        itemStrs.push('<ul>');
                    } else if (i%window.EXPAD_UNITNUM == 0) {
                        itemStrs.push('</ul><ul>');
                    }
                }
                if (data.producttype === 1) {
                    commIds.push(data.productid);
                } else {
                    shopIds.push(data.cl);
                }
                data.productid = '&yen;' + data.productid;
                for (var key in data) {
                    str = str.split('{#' + key + '#}').join(data[key]);
                }
                itemStrs.push(str);
                if (window.EXPAD_UNITNUM && i == len - 1) {
                    itemStrs.push('</ul>');
                }
            }
            listObj.innerHTML = itemStrs.join('');
            for (i = 0; i < shopIds.length; ++i) {
                var shop = $id('gdt' + shopIds[i]);
                if (shop) {
                    var cmdtyList = $attr('attr-tag', 'shop', shop) || [];
                    for (var j = 0, l = cmdtyList.length; j < l; ++j) {
                        cmdtyList[j].style.display = 'none';
                    }
                }
            }
            if (window.CPC_PADDING) {
                scope.loadCpcAd();
            }
            scope.getCmdtyInfo(commIds);
            scope.bindEventForAds();
            scope.reCoder.report(true, EXPADERR.FINISH);
        } else {
            scope.reCoder.report(false, EXPADERR.SYSERR);
            scope.showAlternative();
        }
    } catch (e) {
        scope.reCoder.report(false, EXPADERR.EXECERR);
        scope.showAlternative();
    }
}
PP.etg.wingdt2.showAlternative = function() {
    var obj = {};
    obj.ret = 0;
    obj.data = window.EXPAD_ALTAD || [];
    gdtCallback(obj);
};
PP.etg.wingdt2.loadCpcAd = function() {
    var url = 'http://te.paipai.com/tws/cpcad/cpc_search?adsbannerid=' + (CPCDATA.id || '') + (CPCDATA.count ? '&pagesize=' + CPCDATA.count : '') + '&curl=' + encodeURIComponent(location.href.split('?')[0]) + (CPCDATA.ptag ? '&PTAG=' + CPCDATA.ptag : '') + (CPCDATA.outerchn ? '&outerchn=' + CPCDATA.outerchn : '');
    PP.etg.wingdt2.loadObj.loadData(url, function(obj, reCoder) {
        try {
            var datas = obj.data.adList, listObj = $id(EXPAD_ADLISTID || 'adList'), model = $id(CPCDATA.modelId || 'adItemCpcTmpl'), html = [];
            if (!listObj ||!model) {
                reCoder.report(false, EXPADERR.LACKDOM);
                return false;
            }
            var adlist = listObj.getElementsByTagName('li'), model = model.innerHTML;
            if (datas.length == 0) {
                reCoder.report(true, EXPADERR.EMPTY);
            } else {
                for (var i = 0, len = datas.length; i < len; ++i) {
                    html.push($strReplace(model, {
                        "{#commodityUrl#}": datas[i].commodityUrl,
                        "{#recmdRegName#}": datas[i].recmdRegName,
                        "{#image#}": datas[i].image,
                        "{#newPrice#}": datas[i].newPrice
                    }));
                }
                for (var i = (adlist.length - CPCDATA.count), len = adlist.length, j = 0; i < len; ++i) {
                    adlist[i].innerHTML = html[j++];
                }
                reCoder.report(true, EXPADERR.FINISH);
            }
        } catch (e) {
            reCoder.report(false, EXPADERR.EXECERR);
        }
    }, 'bizId=adcard');
}
PP.etg.wingdt2.getCmdtyInfo = function(commIds, prefixID) {
    PP.etg.wingdt2.loadObj.loadData('http://express.paipai.com/tws/expcomm/ExpViewAdStat?commid=' + commIds.join('|') + '&filter=3', function(response, reCoder) {
        try {
            var len = commIds.length;
            count = response.data.length;
            if (len != count) {
                reCoder.report(false, EXPADERR.NOTENOUGH);
            }
            for (var i = 0; i < count; ++i) {
                var item = response.data[i], priceObj = $id('price' + item.commId), soldObj = $id('sold' + item.commId);
                if (priceObj) {
                    priceObj.innerHTML = '&yen;' + item.price;
                }
                if (soldObj) {
                    soldObj.innerHTML = item.payCnt;
                }
            }
            reCoder.report(true, EXPADERR.FINISH);
        } catch (e) {
            reCoder.report(false, EXPADERR.EXECERR);
        }
    }, 'bizId=adcard');
}
PP.etg.wingdt2.loadObj = {
    _guid: 1000,
    loadData: function(url, cb, returnId) {
        var cbName = 'priceAdCallback' + this._guid++, reCoder = $returnCode({
            url: returnId ? (url.split('?')[0] + '?' + returnId): url,
            formatUrl: returnId ? false: true
        }), timeoutTag;
        $loadScript(url + '&callback=' + cbName);
        window[cbName] = function(obj) {
            clearTimeout(timeoutTag);
            if (obj.errCode == 0) {
                cb && cb(obj, reCoder);
            } else {
                reCoder.report(false, EXPADERR.SYSERR);
            }
        }
        timeoutTag = setTimeout(function() {
            reCoder.report(false, EXPADERR.TIMEOUT);
            window[cbName] = $empty();
        }, 15000);
    }
}
PP.etg.wingdt2.bindEventForAds = function() {
    if (silder && silder.titleId && silder.titleId.length > 0) {
        for (var i = 0, len = silder.titleId.length; i < len; ++i) {
            $slider({
                auto: typeof silder.auto == 'boolean' ? silder.auto: (silder.auto || true),
                timeLag: 30,
                autoLag: silder.autoLag ? silder.autoLag: 5000,
                initIndex: 0,
                titleId: silder.titleId[i],
                titleTag: silder.titleTag || 'li',
                contentId: silder.contentId[i],
                className: silder.className,
                contentTag: silder.contentTag || 'li',
                width: silder.width || '',
                effect: silder.effect || 'none',
                prevId: silder.prevId || '',
                nextId: silder.nextId || '',
                func: function(cur) {
                    var contentDom = document.getElementById(this.contentId);
                    var lis = contentDom.getElementsByTagName(this.contentTag);
                    var curTag = lis[cur], ads = [], posid = EXPAD_POSID;
                    if (curTag.getAttribute('attr-show') != '1') {
                        var id = curTag.getAttribute('id');
                        if (id.indexOf("gdt")>-1) {
                            ads.push(id.substring(3));
                        }
                        curTag.setAttribute('attr-show', '1');
                    }
                    if (ads.length > 0) {
                        GDT.view(posid, ads);
                    }
                }
            });
        }
    }
}
PP.etg.wingdt2.loadScript = function(url, callback, charSet) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = charSet ? charSet : "";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;
                callback && callback();
            }
        }
    } else {
        script.onload = function() {
            callback && callback();
        }
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
var EXPADERR = {
    TIMEOUT: 11,
    SYSERR: 12,
    EMPTY: 13,
    NOTENOUGH: 14,
    LACKDOM: 15,
    EXECERR: 16,
    FINISH: 20
}
function namespace(name) {
    for (var i = 0, k, name = name.split('.'), root = window; k = name[i]; i++) {
        root = root[k] = root[k] || {};
    }
    return root;
}
function isArray(o) {
    if (typeof o === 'string') {
        return false;
    }
    return true;
}
window['PP.etg.wingdt2'] = '21769:20141027:20141027155600';
window['PP.etg.wingdt2.time'] && window['PP.etg.wingdt2.time'].push(new Date()); /*  |xGv00|592fb102518fba145854c0fd73971b9a */
