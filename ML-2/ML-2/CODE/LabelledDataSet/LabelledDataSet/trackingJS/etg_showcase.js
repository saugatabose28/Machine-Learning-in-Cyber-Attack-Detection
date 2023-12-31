
(function() {
    window.GDTMOD = window.GDTMOD || {};
    GDTMOD.showcase = {}
    var EXPAD_ADLISTID, EXPAD_MODELID, EXPAD_POSID, EXPAD_COUNT, PAGE_PREV, PAGE_CONENT, PAGE_NEXT, PAGE_TOTAL, PAGE_COUNT, EXPAD_ALTAD = [], tmpDefaultAds, EXPAD_UNITNUM, CPC_PADDING, TPL, CLASS, PTAG, posMap = {
        "5080609051822677": "1070000091486169",
        "5060509091322668": "5090902061185260",
        "9020807021027669": "6010204091380291",
        "1080865053853209807": "7060007021281087",
        "1873498588270417103": "5040905061486180",
        "4179341597484111055": "8020405021777935",
        "4251399191522038991": "5000407081779937",
        "936749865777353935": "9090706031374938",
        "4323456785559966927": "4080201061072999",
        "3386708063066903759": "9070803051486054",
        "1008807459815281871": "1070700081281025",
        "1297037835966993615": "2040109001184076",
        "1801440994232489167": "3090801001285023",
        "2060704091423750": "9070903011881262",
        "1080406070957058": "2040709041684134",
        "4000109010955069": "9040809021584125",
        "2594074528649696463": "7080106011281132",
        "2522016934611768527": "4010401031384171",
        "3242592874991047887": "5000905001971914",
        "5080305040153036": "1060101071780163",
        "3098477686915192015": "6030107061883042",
        "4090901001721674": "1040000091384148",
        "1050202071923622": "5040301021987167",
        "4010901041121671": "4070901071184136",
        "5332263102090958031": "7000208021887000",
        "5404320696128885967": "4020000021289031"
    };
    function getMapPosid(poslist) {
        var newposlist = [];
        var len = poslist.length;
        for (var i = 0; i < len; i++) {
            var posid = poslist[i];
            newposlist.push(posMap[posid] || posid);
        };
        return newposlist;
    }
    function trimDefData() {
        if (tmpDefaultAds) {
            for (var i = 0, len = tmpDefaultAds.length; i < len; i++) {
                var di = tmpDefaultAds[i];
                if (di) {
                    di.olink = 'href="' + di.rl + '" target="_blank"';
                    EXPAD_ALTAD.push(di);
                }
            }
        }
    }
    function initEnv(opts) {
        EXPAD_ADLISTID = opts.adlistid;
        EXPAD_MODELID = opts.tplid;
        EXPAD_POSID = opts.posid;
        EXPAD_COUNT = opts.count;
        EXPAD_POSID = getMapPosid([EXPAD_POSID])[0];
        TPL = opts.tpllist || {};
        PAGE_PREV = opts.pageprev;
        PAGE_CONENT = opts.pagecontent;
        PAGE_NEXT = opts.pagenext;
        PAGE_TOTAL = opts.pagetotal;
        PAGE_COUNT = opts.pagecount;
        PAGE_INTERVAL = opts.page_interval;
        PAGE_WRAP = opts.pagewrap;
        CLASS = opts.classlist;
        PTAG = opts.ptag;
        EXPAD_UNITNUM = opts.unitnum;
        CPC_PADDING = opts.cpc_padding;
        tmpDefaultAds = opts.defaultads;
    }
    GDTMOD.showcase.init = function(opts) {
        opts = opts || {};
        initEnv(opts);
        trimDefData();
        this.sendRequest();
    }
    GDTMOD.showcase.sendRequest = function() {
        if (typeof GDT !== 'undefined') {
            var scope = GDTMOD.showcase;
            var posid = getParameter('pid');
            EXPAD_POSID = posid || EXPAD_POSID;
            scope.reCoder = $returnCode({
                url: 'http://express.paipai.com/gdt?posid=' + EXPAD_POSID,
                formatUrl: false
            });
            GDT.load({
                posId: EXPAD_POSID,
                count: EXPAD_COUNT,
                onComplete: scope.gdtCallback,
                context: {
                    classlist: CLASS || '',
                    req: {
                        ptag: PTAG || ''
                    }
                }
            });
            scope.timeoutTag = setTimeout(function() {
                scope.reCoder.report(false, EXPADERR.TIMEOUT);
                var obj = {};
                obj.data = EXPAD_ALTAD || [];
                scope.gdtCallback(obj);
            }, 15000);
        }
    }
    GDTMOD.showcase.gdtCallback = function(obj) {
        try {
            var scope = GDTMOD.showcase;
            clearTimeout(scope.timeoutTag);
            var model = TPL[EXPAD_MODELID || 'adItemTmpl'], listObj = $id(EXPAD_ADLISTID || 'adList'), posid = EXPAD_POSID, datas = obj.data, itemStrs = [], commIds = [], shopIds = [], len;
            if (!posid ||!model ||!listObj) {
                scope.reCoder.report(false, EXPADERR.LACKDOM);
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
                datas = EXPAD_ALTAD || [];
            }
            if (EXPAD_ALTAD) {
                datas = datas.concat(EXPAD_ALTAD);
            }
            len = Math.min(datas.length, EXPAD_COUNT);
            for (var i = 0; i < len; i++) {
                var data = datas[i], str = model;
                if (EXPAD_UNITNUM) {
                    if (i == 0) {
                        itemStrs.push('<ul>');
                    } else if (i%EXPAD_UNITNUM == 0) {
                        itemStrs.push('</ul><ul>');
                    }
                }
                if (data.producttype === 1) {
                    data.price = '&yen;' + data.price;
                } else {
                    data.price = '&nbsp;';
                    shopIds.push(data.cl);
                }
                if (data.productid && data.productid.length === 32) {
                    commIds.push(data.productid);
                }
                for (var key in data) {
                    str = str.split('{#' + key + '#}').join(data[key]);
                }
                itemStrs.push(str);
                if (EXPAD_UNITNUM && i == len - 1) {
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
            if (CPC_PADDING) {
                scope.loadCpcAd();
            }
            scope.getCmdtyInfo(commIds);
            scope.bindEventForAds();
            scope.reCoder.report(true, EXPADERR.FINISH);
        } catch (e) {}
    }
    GDTMOD.showcase.loadCpcAd = function() {
        var url = 'http://te.paipai.com/tws/cpcad/cpc_search?adsbannerid=' + (CPCDATA.id || '') + (CPCDATA.count ? '&pagesize=' + CPCDATA.count : '') + '&curl=' + encodeURIComponent(location.href.split('?')[0]) + (CPCDATA.ptag ? '&PTAG=' + CPCDATA.ptag : '') + (CPCDATA.outerchn ? '&outerchn=' + CPCDATA.outerchn : '');
        GDTMOD.showcase.loadObj.loadData(url, function(obj, reCoder) {
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
    GDTMOD.showcase.getCmdtyInfo = function(commIds, prefixID) {
        GDTMOD.showcase.loadObj.loadData('http://express.paipai.com/tws/expcomm/ExpViewAdStat?commid=' + commIds.join('|') + '&filter=3', function(response, reCoder) {
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
    GDTMOD.showcase.loadObj = {
        _guid: 1000,
        loadData: function(url, cb, returnId) {
            var cbName = 'priceAdCallback' + this._guid++, reCoder = $returnCode({
                url: returnId ? (url.split('?')[0] + '?' + returnId): url,
                formatUrl: returnId ? false: true
            }), timeoutTag;
            GDT.importJs(url + '&callback=' + cbName);
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
    GDTMOD.showcase.bindEventForAds = function() {
        if (silder && silder.titleId && silder.titleId.length > 0) {
            for (var i = 0, len = silder.titleId.length; i < len; ++i) {
                $slider({
                    auto: typeof silder.auto == 'boolean' ? silder.auto: (silder.auto || true),
                    timeLag: 30,
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
                        exposeAds(cur, this);
                    }
                });
            }
        } else {
            var posid = EXPAD_POSID;
            var obj = GDT.getPosData(posid);
            (obj.data && obj.data.length > 0) && GDT.viewpos(posid);
        }
    }
    function exposeAds(cur, slider) {
        var contentDom = document.getElementById(slider.contentId);
        var lis = contentDom.getElementsByTagName(slider.contentTag);
        var curTag = lis[cur], ads = [], posid = EXPAD_POSID;
        var t = function(curTag) {
            var tagvalid = false;
            if (curTag && curTag.getAttribute('attr-show') != '1') {
                var id = curTag.getAttribute('id');
                if (id) {
                    tagvalid = true;
                    if (id.indexOf("gdt")>-1) {
                        ads.push(id.substring(3));
                    }
                    curTag.setAttribute('attr-show', '1');
                }
            }
            return tagvalid;
        };
        if (!t(curTag)) {
            var curTags = curTag.getElementsByTagName(slider.titleTag), tlen;
            tlen = curTags.length;
            for (var i = 0; i < tlen; i++) {
                t(curTags[i]);
            }
        }
        if (ads.length > 0) {
            GDT.view(posid, ads);
        }
    }
    var EXPADERR = {
        TIMEOUT: 11,
        SYSERR: 12,
        EMPTY: 13,
        NOTENOUGH: 14,
        LACKDOM: 15,
        EXECERR: 16,
        FINISH: 20
    };
    function getParameter(name) {
        var r = new RegExp("(\\?|#|&)" + name + "=([^&#]*)(&|#|$)");
        var m = location.href.match(r);
        return (!m ? "" : m[2]);
    }
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
    }
    function $getCookie(name) {
        var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"), val = document.cookie.match(reg);
        return val ? (val[2] ? unescape(val[2]) : "") : null;
    }
    function $setCookie(name, value, expires, path, domain, secure) {
        var exp = new Date(), expires = arguments[2] || null, path = arguments[3] || "/", domain = arguments[4] || null, secure = arguments[5] || false;
        expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
        document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    }
    function $id(id) {
        return typeof(id) == "string" ? document.getElementById(id) : id;
    }
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
    }
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
    }
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
                if (opt.contentId&&!_imgs[cur] && (isInit == false || (isInit == true && opt.isLoadInit == true))) {
                    $loadImg(_cont[cur], opt.backAttr);
                    _imgs[cur] = true;
                };
                if (opt.contentId && _cont[cur]) {
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
    }
    function $preventDefault(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        };
        return false;
    }
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
    }
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
    }
    function $empty() {
        return function() {
            return true;
        }
    }
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
    }
    function $report(url) {
        GDT.pingreq(url + ((url.indexOf('?')==-1) ? '?' : '&') + Math.random());
    }
    function $loadImg(obj, attr) {
        if (!obj)
            return;
        var attr = attr || "back_src", images = obj.getElementsByTagName("IMG");
        for (var i = 0, len = images.length; i < len; i++) {
            var oImg = images[i], src = oImg.getAttribute(attr);
            '' == oImg.src && src && (oImg.src = src);
        }
    }
    function $delClass(ids, cName) {
        $setClass(ids, cName, "remove");
    }
    function $addClass(ids, cName) {
        $setClass(ids, cName, "add");
    }
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
    }
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
    }
})();
