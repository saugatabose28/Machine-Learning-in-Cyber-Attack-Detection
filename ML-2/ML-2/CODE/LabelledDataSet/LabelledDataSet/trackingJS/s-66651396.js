lpTagConfig._ver = '4.2.3.12';
(function() {
    var initializing = false, fnTest = /hhh/.test(function() {
        hhh
    }) ? /\b_super\b/: /.*/;
    lpTagConfig.LPClass = function() {};
    lpTagConfig.LPClass.extend = function(prop) {
        var name, _super = this.prototype;
        initializing = true;
        var prototype = new this ();
        initializing = false;
        for (name in prop) {
            prototype[name] = typeof prop[name] === 'function' && typeof _super[name] === 'function' && fnTest.test(prop[name]) ? (function(name, fn) {
                return function() {
                    var tmp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;
                    return ret
                }
            })(name, prop[name]) : prop[name]
        }
        function LPClass() {
            if (!initializing && this._ctor) {
                this._ctor.apply(this, arguments)
            }
        }
        LPClass.prototype = prototype;
        LPClass.prototype.constructor = LPClass;
        LPClass.extend = arguments.callee;
        return LPClass
    }
})();
if (typeof lpTagConfig.utils === 'undefined') {
    lpTagConfig.utils = {
        CONST: {
            deliveryBasePathToken: '{deliveryBasePath}',
            deliveryFolderPath: '/le/lechat/delivery/'
        },
        getDeliveryBasePath: function() {
            if (lpTagConfig.tagPlugins.conf.serverProps && lpTagConfig.tagPlugins.conf.serverProps.leChatDeliveryBasePath) {
                return lpTagConfig.tagPlugins.conf.serverProps.leChatDeliveryBasePath
            }
        },
        updateUrlPath: function(url) {
            var deliveryBasePath = lpTagConfig.utils.getDeliveryBasePath();
            if (deliveryBasePath) {
                deliveryBasePath = lpTagConfig.utils.format('https://{0}{1}', deliveryBasePath, lpTagConfig.utils.CONST.deliveryFolderPath);
                return url.replace(new RegExp(lpTagConfig.utils.CONST.deliveryBasePathToken, 'g'), deliveryBasePath)
            } else {
                return url
            }
        },
        isMSModernUI: function() {
            if (lpTagConfig.tagPlugins.conf.siteFeatures && lpTagConfig.tagPlugins.conf.siteFeatures.isMSModernUI) {
                return lpTagConfig.tagPlugins.conf.siteFeatures.isMSModernUI
            }
        },
        isLEChatAAEnabled: function() {
            return typeof lpTagConfig.tagPlugins.conf.siteFeatures !== 'undefined' && typeof lpTagConfig.tagPlugins.conf.siteFeatures.leChatAAEnabled !== 'undefined' && lpTagConfig.tagPlugins.conf.siteFeatures.leChatAAEnabled !== null && lpTagConfig.tagPlugins.conf.siteFeatures.leChatAAEnabled
        },
        _isLPTagExist: function() {
            return typeof lpTag !== 'undefined'
        },
        _isEMTExist: function() {
            return typeof lpMTag !== 'undefined'
        },
        getDataFromFiredEvent: function(lpTagData, emtData) {
            return this._isLPTagExist() ? lpTagData : emtData
        },
        publishEvent: function(evName, evData) {
            if (this._isLPTagExist()) {
                lpTag.events.trigger('LPChat', evName, evData);
                this.log('triggered by LPTag.events', 'INFO');
                return 
            } else if (this._isEMTExist()) {
                lpMTag.events.publish(evName, evData);
                this.log('published by EMT.events', 'INFO');
                return 
            }
            this.log('no LPTag or EMT events mechanism (trigger/publish)', 'ERROR');
            return null
        },
        registerEvent: function(evName, fn) {
            var mechanismExist = false;
            if (this._isLPTagExist()) {
                lpTag.events.bind('LPChat', evName, fn);
                mechanismExist = true
            }
            if (this._isEMTExist()) {
                lpMTag.events.register(evName, fn);
                mechanismExist = true
            }
            if (mechanismExist) {
                return 
            }
            this.log('no LPTag or EMT events mechanism (bind/register)', 'ERROR');
            return null
        },
        unregisterEvent: function(evId) {
            if (this._isLPTagExist()) {
                return lpTag.events.unbind(evId)
            }
            this.log('no LPTag or EMT events mechanism (unbind/unregister)', 'ERROR');
            return false
        },
        hasFired: function(evName) {
            var fired = [];
            if (this._isLPTagExist()) {
                fired = lpTag.events.hasFired('LPChat', evName)
            }
            if (this._isEMTExist()) {
                fired = fired.concat(lpMTag.events.hasFired(evName))
            }
            if (fired === null) {
                this.log('no LPTag or EMT events mechanism (hasFired)', 'ERROR');
                return false
            }
            return fired
        },
        registerToBrowserEvents: function() {
            var eventsArr = [{
                context: window,
                evName: 'resize'
            }
            ];
            var curEventObject, curEventName, callback;
            for (var i = 0; i < eventsArr.length; i++) {
                curEventObject = eventsArr[i]['context'];
                curEventName = eventsArr[i]['evName'];
                callback = (function(eventName) {
                    return function(e) {
                        lpTagConfig.utils.publishEvent('LPCHAT_BROWSER_' + eventName.toUpperCase(), e)
                    };
                })(curEventName);
                if (curEventObject.addEventListener) {
                    curEventObject.addEventListener(curEventName, callback, false)
                } else if (curEventObject.attachEvent) {
                    curEventObject.attachEvent('on' + curEventName, callback)
                }
            }
        },
        log: function(msg, type) {
            type = type || 'DEBUG';
            if (lpMTagDebug && lpMTagDebug.Display) {
                lpMTagDebug.Display(msg, type, 'LPChat')
            }
        },
        checkHttps: function(src) {
            if (lpTagConfig.lpProtocol === 'https' && src.indexOf('https') !== 0) {
                src = 'https' + src.substr(4)
            }
            return src
        },
        getCookie: function(n) {
            var len, end, start = document.cookie.indexOf(n + '=');
            if (typeof n === 'undefined' || start===-1) {
                return null
            }
            len = start + n.length + 1;
            if (!start && (n !== document.cookie.substring(0, n.length))) {
                return null
            }
            end = document.cookie.indexOf(';', len);
            if (end===-1) {
                end = document.cookie.length
            }
            return unescape(document.cookie.substring(len, end))
        },
        setCookie: function(params) {
            var cookieValue = params.name + '=' + params.value + '; path=/';
            document.cookie = cookieValue
        },
        makeScriptCall: function(src, charset) {
            src = this.checkHttps(src);
            var s = document.createElement("script");
            s.setAttribute("type", "text/javascript");
            s.setAttribute("charset", (charset || "UTF-8"));
            s.setAttribute("src", src);
            var h = document.getElementsByTagName("head");
            if (h) {
                h.item(0).appendChild(s)
            }
        },
        makeImgCall: function(src) {
            src = this.checkHttps(src);
            var img = new Image();
            img.src = src;
            return img
        },
        makeLPCall: function(cmd, params) {
            var src = lpTagConfig.utils.format('{0}&cmd={1}', this.getLPBaseUrl(), cmd);
            for (var paramName in params) {
                if (typeof params[paramName] !== 'undefined') {
                    src += lpTagConfig.utils.format('&{0}={1}', paramName, params[paramName])
                }
            }
            this.makeScriptCall(src)
        },
        arrToObject: function(arr) {
            var obj = {};
            for (var i = 0; i < arr.length; i++) {
                obj[arr[i]] = arr[i]
            }
            return obj
        },
        isIE: function() {
            return this.getIEMatch() !== null
        },
        isIE6: function() {
            var match = this.getIEMatch();
            if (match !== null) {
                var version = parseInt(match[2], 10);
                if (version === 6) {
                    return true
                }
            }
            return false
        },
        getIEMatch: function() {
            var agent = navigator.userAgent;
            agent = agent.toLowerCase();
            var msie = /(msie) ([\w.]+)/, match = msie.exec(agent);
            return match
        },
        isQuirksMode: function() {
            if ((document.documentMode && document.documentMode === 5) || document.compatMode === 'BackCompat') {
                this.log("Quirks Mode === true");
                return true
            }
            this.log("Quirks Mode === false");
            return false
        },
        getObjById: function(id) {
            if (typeof id !== 'undefined') {
                if (document.getElementById) {
                    return document.getElementById(id)
                } else {
                    if (document.all) {
                        return document.all(id)
                    }
                }
            }
            return false
        },
        stopEventBubble: function(e) {
            var event = e || window.event;
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation()
            }
        },
        isEmptyObj: function(obj) {
            for (var key in obj) {
                return false
            }
            return true
        },
        getObjSize: function(obj) {
            var size = 0;
            for (var prop in obj) {
                size++
            }
            return size
        },
        clearObj: function(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    delete obj[prop]
                }
            }
        },
        cloneObj: function(obj) {
            var newObj = obj instanceof Array ? []: {};
            for (var prop in obj) {
                newObj[prop] = obj[prop] && typeof obj[prop] === 'object' ? this.cloneObj(obj[prop]) : obj[prop]
            }
            return newObj
        },
        areEqualUnorderedArrays: function(arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false
            }
            arr1.sort();
            arr2.sort();
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false
                }
            }
            return true
        },
        areEqualObjects: function(obj1, obj2) {
            var prop;
            for (prop in obj1) {
                if (typeof obj2[prop] === 'undefined' || obj1[prop] !== obj2[prop]) {
                    return false
                }
            }
            for (prop in obj2) {
                if (typeof obj1[prop] === 'undefined' || obj1[prop] !== obj2[prop]) {
                    return false
                }
            }
            return true
        },
        areUnorderedEqual: function(obj1, obj2) {
            if (typeof obj1 === 'undefined' || typeof obj2 === 'undefined') {
                return false
            }
            if (obj1.constructor !== obj2.constructor) {
                return false
            }
            if (obj1.constructor === Array) {
                return lpTagConfig.utils.areEqualUnorderedArrays(obj1, obj2)
            } else {
                return lpTagConfig.utils.areEqualObjects(obj1, obj2)
            }
        },
        isPositionFixed: function() {
            return !lpTagConfig.utils.isIE6()&&!this.isIEQuirksMode()
        },
        isIEQuirksMode: function() {
            return lpTagConfig.utils.isIE() && lpTagConfig.utils.isQuirksMode()
        },
        cssNumStrToInt: function(cssNumStr) {
            return parseInt(cssNumStr.replace('px', ''))
        },
        getLPBaseUrl: function() {
            return lpTagConfig.utils.format('{0}://{1}/hc/{2}/?site={3}', lpTagConfig.lpProtocol, lpTagConfig.lpServer, lpTagConfig.lpNumber, lpTagConfig.lpNumber)
        },
        addPropsToObj: function(toObj, fromObj, overwrite) {
            if (toObj && fromObj) {
                for (var prop in fromObj) {
                    if (!overwrite && toObj[prop]) {
                        continue
                    }
                    toObj[prop] = fromObj[prop]
                }
            }
        },
        onEvent: function(evName, evData) {
            this.publishEvent(evName, evData);
            var logMsg = 'tagPlugin ' + evName;
            if (evData.tagPluginId) {
                logMsg += '(id: ' + evData.tagPluginId + ')'
            }
            if (evData.extra) {
                for (var i = 0; i < evData.extra.length; i++) {
                    logMsg += ' (' + evData.extra[i] + ')'
                }
            }
            this.log(logMsg);
            if (typeof evData.action === 'function') {
                evData.action()
            }
        },
        getFuncFromStr: function(funcStr) {
            var namespaces = funcStr.split('.'), funcName = namespaces.pop(), curContext = window[namespaces[0]];
            for (var j = 1; j < namespaces.length; j++) {
                curContext = curContext[namespaces[j]]
            }
            return curContext[funcName]
        },
        getPageDimensions: function() {
            var names = ["Height", "Width"], pageDimensions = {
                totalHeight: null,
                totalWidth: null,
                windowHeight: null,
                windowWidth: null,
                verticalScroll: null,
                horizontalScroll: null
            };
            for (var i = 0; i < names.length; i++) {
                var name = names[i];
                pageDimensions["total" + name] = Math.max(document.documentElement["client" + name], document.body["scroll" + name], document.documentElement["scroll" + name], document.body["offset" + name], document.documentElement["offset" + name]);
                pageDimensions["window" + name] = window.document.compatMode === "CSS1Compat" && window.document.documentElement["client" + name] || window.document.body["client" + name] || window.document.documentElement["client" + name]
            }
            pageDimensions["verticalScroll"] = document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop;
            pageDimensions["horizontalScroll"] = document.documentElement && document.documentElement.scrollLeft || document.body && document.body.scrollLeft;
            return pageDimensions
        },
        format: function(str) {
            for (var i = 1; i < arguments.length; i++) {
                str = str.replace(new RegExp('\\{' + (i - 1) + '\\}', 'gi'), "" + arguments[i])
            }
            return str
        },
        convertEngagementTypeToImpressionApproachTypeId: function(engagementType) {
            var map = {
                button: 7,
                sticky_button: 8,
                invitation: 9
            };
            return map[engagementType]
        },
        getImprRepState: function(repAvKey) {
            var map = {
                1: 3,
                2: 1,
                3: 2,
                4: 3
            };
            return map[repAvKey]
        }
    }
}
if (typeof lpTagConfig.lpAnimate === 'undefined') {
    lpTagConfig.lpAnimate = {
        ver: '1.0',
        elements: {},
        queue: {},
        conf: {
            interval: 13,
            duration: 500,
            easing: 'swing'
        },
        _easing: {
            linear: function(relTime, curTime, startValue, changeInVal, duration) {
                return startValue + changeInVal * relTime
            }
        },
        animate: function(domElement, props, options) {
            if (typeof(domElement) === 'undefined' || typeof(props) === 'undefined') {
                return 
            }
            if (domElement.id === "") {
                return 
            }
            if (typeof(this.elements[domElement.id]) === 'undefined') {
                if (typeof(props.length) == 'undefined') {
                    props = [props]
                }
                if (typeof(options) === 'number') {
                    options = {
                        duration: options
                    }
                }
                var id = domElement.id, that = this;
                this.elements[id] = {
                    id: id,
                    domElement: domElement,
                    props: props,
                    options: {
                        duration: (options && options.duration) ? options.duration: that.conf.duration,
                        easing: (options && options.easing) ? options.easing: that.conf.easing,
                        callback: (options && typeof(options.callback) == 'function') ? options.callback: null
                    }
                };
                this._doAnimate(id)
            } else {
                var animationRequest = {
                    domElement: domElement,
                    props: props,
                    options: options
                };
                this._addToQueue(domElement.id, animationRequest)
            }
        },
        stop: function(id) {
            var el = this.elements[id];
            if (typeof el !== 'undefined') {
                if (el.timeout != null) {
                    clearTimeout(el.timeout)
                }
                el.timeout = null;
                delete this.elements[id]
            }
            this._removeFromQueue(id)
        },
        _doAnimate: function(id) {
            var el = this.elements[id];
            el.startTime = (new Date()).getTime();
            el.relTime = el.relPos = 0;
            el.timeout = null;
            for (var i = 0; i < el.props.length; i++) {
                var property = el.props[i];
                property.start = this._getCurrentVal(el.domElement, property.name) || 0;
                property.now = property.start
            }
            this._step(el.id)
        },
        _step: function(id) {
            var el = this.elements[id], now = (new Date()).getTime();
            if (now >= el.startTime + el.options.duration) {
                el.relPos = el.relTime = 1;
                var i, property;
                for (i = 0; i < el.props.length; i++) {
                    property = el.props[i];
                    property.now = property.targetVal;
                    this._update(el.domElement, property.name, property.now)
                }
                this._complete(el)
            } else {
                var t = now - el.startTime;
                el.relTime = t / el.options.duration;
                el.relPos = this._easing[el.options.easing](el.relTime, t, 0, 1, el.options.duration);
                for (i = 0; i < el.props.length; i++) {
                    property = el.props[i];
                    property.now = property.start + ((property.targetVal - property.start) * el.relPos);
                    this._update(el.domElement, property.name, property.now)
                }
                var that = this;
                el.timeout = setTimeout(function() {
                    that._step(id)
                }, that.conf.interval)
            }
        },
        _update: function(domElement, cssProperty, value) {
            if (domElement.style && domElement.style[cssProperty] !== null) {
                domElement.style[cssProperty] = value + 'px'
            }
        },
        _getCurrentVal: function(domElement, cssProperty) {
            if (domElement.style && domElement.style[cssProperty] !== null) {
                return parseFloat(domElement.style[cssProperty])
            }
        },
        _complete: function(el) {
            var id = el.id, fn = null;
            if (el.options.callback !== null && typeof(el.options.callback) === 'function') {
                fn = el.options.callback
            }
            if (el.timeout != null) {
                clearTimeout(el.timeout)
            }
            el.timeout = null;
            delete this.elements[id];
            if (fn != null) {
                try {
                    fn(id)
                } catch (e) {}
            }
            if (typeof this.queue[id] !== 'undefined' && this.queue[id] !== null) {
                if (this.queue[id].length > 0) {
                    var req = this.queue[id].splice(0, 1);
                    this.animate(req[0].domElement, req[0].props, req[0].options)
                } else {
                    this._removeFromQueue(id)
                }
            }
        },
        _addToQueue: function(id, request) {
            if (typeof this.queue[id] === 'undefined') {
                this.queue[id] = []
            }
            this.queue[id].push(request)
        },
        _removeFromQueue: function(id) {
            if (typeof this.queue[id] !== 'undefined' && this.queue[id] !== null) {
                delete this.queue[id]
            }
        }
    }
}
lpTagConfig.lpJsonToDom = {
    _baseCss: {
        base: {
            margin: 0,
            padding: 0,
            width: 'auto',
            height: 'auto',
            borderTopStyle: 'none',
            borderRightStyle: 'none',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            outlineStyle: 'none',
            outlineWidth: 0,
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            listStylePosition: 'outside',
            listStyleImage: 'none',
            listStyleType: 'none',
            letterSpacing: 'normal',
            lineHeight: 'normal',
            textDecoration: 'none',
            textAlign: 'start',
            textJustify: 'auto',
            verticalAlign: 'baseline',
            whiteSpace: 'normal',
            wordSpacing: 'normal'
        },
        container: {
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom left',
            borderStyle: 'solid'
        },
        label: {
            position: 'absolute'
        },
        image: {
            position: 'absolute'
        },
        button: {
            position: 'absolute',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom left',
            borderStyle: 'solid',
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            cursor: 'pointer'
        },
        closeButton: {
            position: 'absolute',
            cursor: 'pointer'
        }
    },
    _cssNumber: {
        zIndex: true,
        fontWeight: true,
        opacity: true,
        zoom: true,
        lineHeight: true,
        color: true
    },
    _rnd: (new Date()).getTime(),
    _count: 0,
    _converters: {
        containers: function(json) {
            var container = this._baseConverters.div.call(this, json, 'container');
            return container
        },
        labels: function(json) {
            var lbl = this._baseConverters.text.call(this, json, 'label');
            return lbl
        },
        images: function(json) {
            var img = this._baseConverters.image.call(this, json, 'image');
            return img
        },
        buttons: function(json) {
            var btn = this._baseConverters.text.call(this, json, 'button');
            return btn
        },
        closeButtons: function(json) {
            var closeBtn = this._baseConverters.image.call(this, json, 'closeButton'), that = this;
            closeBtn.onclick = function(e) {
                that._publishEvent('LPCHAT_CLOSE_ENGAGEMENT_CLICK', e)
            };
            return closeBtn
        }
    },
    _baseConverters: {
        div: function(json, elemType) {
            var css = json.css, div = document.createElement('div');
            div.setAttribute('id', this._getId(elemType, json.id));
            div.setAttribute('class', this._getClass(elemType));
            this._resetAndApplyStyle(div, css, elemType);
            return div
        },
        text: function(json, elemType) {
            var text = json.text, css = json.css, div = document.createElement('div');
            div.setAttribute('id', this._getId(elemType));
            div.setAttribute('class', this._getClass(elemType));
            div.innerHTML = this.htmlEncode(text);
            this._resetAndApplyStyle(div, css, elemType);
            return div
        },
        image: function(json, elemType) {
            if (typeof(json.imageUrl) === 'undefined' || json.imageUrl === null || json.imageUrl === '') {
                this._log('lpJsonToDom, bad imageUrl', 'ERROR');
                throw new Error('invalid data exception')
            }
            var imgSrc = this._checkHttps(json.imageUrl), css = json.css, img = document.createElement('img');
            img.setAttribute('id', this._getId(elemType));
            img.setAttribute('class', this._getClass(elemType));
            img.setAttribute('src', imgSrc);
            this._resetAndApplyStyle(img, css, elemType);
            return img
        }
    },
    convert: function(jsons) {
        var domElements = [], elemArr;
        if (jsons === null) {
            this._log('lpJsonToDom, an empty repAv state has been rendered')
        } else if (typeof(jsons) === 'undefined') {
            this._log('lpJsonToDom, invalid jsons', 'ERROR');
            throw new Error('invalid data exception')
        } else {
            for (var type in jsons) {
                elemArr = jsons[type];
                if (typeof(elemArr) === 'undefined' || elemArr === null) {
                    this._log('lpJsonToDom, bad value', 'ERROR');
                    throw new Error('invalid data exception')
                }
                if (typeof(elemArr.length) === 'undefined') {
                    elemArr = [elemArr]
                }
                for (var i = 0; i < elemArr.length; i++) {
                    var fn = this._converters[type];
                    if (typeof(fn) !== 'function') {
                        this._log('lpJsonToDom, no converter for type ' + type, 'ERROR');
                        throw new Error('invalid data exception')
                    } else {
                        domElements.push(fn.call(this, elemArr[i]))
                    }
                }
            }
        }
        return domElements
    },
    applyStyle: function(el, styles) {
        if (typeof(el) !== 'undefined' && el !== null && typeof(styles) === 'object') {
            for (var prop in styles) {
                try {
                    var value = styles[prop];
                    if (this.isNumber(value)&&!this._cssNumber[prop]) {
                        value += 'px'
                    }
                    el.style[prop] = value
                } catch (e) {
                    this._log('lpJsonToDom, invalid css [' + prop + '; e:' + e + ']', 'ERROR')
                }
            }
        }
    },
    isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    },
    htmlEncode: function(value) {
        var retval = "";
        if (typeof(value) !== 'undefined' && value !== null) {
            for (var i = 0; i < value.length; i++) {
                retval += '&#x' + value.charCodeAt(i).toString(16) + ';'
            }
        }
        return retval
    },
    _getId: function(str, pluginId) {
        var id = 'lpchat-' + str + '-';
        id += pluginId || this._getRnd() + '-' + this._count;
        this._count++;
        return id
    },
    _getClass: function(str) {
        return 'lpchat-' + str
    },
    _getRnd: function() {
        return this._rnd
    },
    _resetAndApplyStyle: function(el, styles, elemType) {
        this.applyStyle(el, this._baseCss.base);
        this.applyStyle(el, this._baseCss[elemType]);
        this.applyStyle(el, styles)
    },
    _log: function(msg, type) {
        if (typeof(lpTagConfig.utils) !== 'undefined') {
            lpTagConfig.utils.log(msg, type)
        }
    },
    _publishEvent: function(evName, htmlEvent) {
        if (typeof(lpTagConfig.utils) !== 'undefined') {
            var evData = {
                htmlEvent: htmlEvent
            };
            return lpTagConfig.tagPlugins.api.utils.publishEvent(evName, evData)
        }
    },
    _checkHttps: function(src) {
        if (typeof(lpTagConfig.utils) !== 'undefined') {
            return lpTagConfig.utils.checkHttps(src)
        }
    }
};
lpTagConfig.tagPlugins = {};
lpTagConfig.tagPlugins.pluginsArr = [];
lpTagConfig.tagPlugins.jsonsArr = [];
lpTagConfig.tagPlugins.api = {};
lpTagConfig.tagPlugins.inPagePluginsArr = [];
lpTagConfig.tagPlugins.conf = {
    siteFeatures: {},
    siteGeneralProps: {},
    serverProps: {}
};
if (typeof(lpTagConfig.tagPlugins.api.utils) === 'undefined') {
    lpTagConfig.tagPlugins.api.utils = {
        publishEvent: function(evName, evData) {
            return lpTagConfig.utils.publishEvent(evName, evData)
        },
        registerEvent: function(evName, fn) {
            return lpTagConfig.utils.registerEvent(evName, fn)
        },
        unregisterEvent: function(evId) {
            return lpTagConfig.utils.unregisterEvent(evId)
        },
        hasFired: function(evName) {
            return lpTagConfig.utils.hasFired(evName)
        },
        preloadImages: function(imgUrls, callback) {
            var unloadedImgs = lpTagConfig.utils.arrToObject(imgUrls), imgsInProcess = [], loadedImgStore = {}, isCallbackInvoked = false, that = this, url, lastIndex;
            lpTagConfig.utils.log('preloading ' + imgUrls.length + ' images');
            if (!this.isEmptyObj(unloadedImgs)) {
                for (url in unloadedImgs) {
                    imgsInProcess.push(new Image());
                    lastIndex = imgsInProcess.length - 1;
                    imgsInProcess[lastIndex].onload = function() {
                        return function() {
                            delete unloadedImgs[this.src];
                            this.onload = null;
                            loadedImgStore[this.src] = {
                                width: this.width,
                                height: this.height
                            };
                            if (that.isEmptyObj(unloadedImgs)&&!isCallbackInvoked) {
                                isCallbackInvoked = true;
                                lpTagConfig.utils.log('preloading images complete');
                                try {
                                    callback(true, loadedImgStore)
                                } catch (e) {
                                    lpTagConfig.utils.log('error in preload callback [' + e + ']', 'ERROR')
                                }
                            }
                        };
                    }();
                    imgsInProcess[lastIndex].onerror = function() {
                        return function() {
                            lpTagConfig.utils.log('error preloading image: ' + this.src, 'ERROR');
                            if (!isCallbackInvoked) {
                                isCallbackInvoked = true;
                                try {
                                    callback(false)
                                } catch (e) {
                                    lpTagConfig.utils.log('error in preload callback [' + e + ']', 'ERROR')
                                }
                            }
                        };
                    }();
                    imgsInProcess[lastIndex].src = url
                }
            } else {
                try {
                    callback(true, loadedImgStore)
                } catch (e) {
                    lpTagConfig.utils.log('error in preload callback [' + e + ']', 'ERROR')
                }
            }
        },
        extractURL: function(bgImageStr) {
            var retVal = bgImageStr.slice(bgImageStr.indexOf("(") + 1, bgImageStr.indexOf(")"));
            if (retVal.charAt(0) === "'" || retVal.charAt(0) === '"') {
                retVal = retVal.slice(1, retVal.length - 1)
            }
            return retVal
        },
        isPositionFixed: function() {
            return lpTagConfig.utils.isPositionFixed()
        },
        getObjById: function(id) {
            return lpTagConfig.utils.getObjById(id)
        },
        isEmptyObj: function(obj) {
            return lpTagConfig.utils.isEmptyObj(obj)
        },
        getCookie: function(n) {
            return lpTagConfig.utils.getCookie(n)
        },
        setCookie: function(params) {
            lpTagConfig.utils.setCookie(params)
        },
        nextElementSibling: function(el) {
            var nextElementSibling = el.nextElementSibling;
            if (typeof(nextElementSibling) === 'undefined') {
                nextElementSibling = el;
                do {
                    nextElementSibling = nextElementSibling.nextSibling
                }
                while (nextElementSibling && nextElementSibling.nodeType !== 1)
                }
            return nextElementSibling
        }, firstElementChild: function(el) {
            return el.firstElementChild || el.children[0]
        }, cssNumStrToInt: function(cssNumStr) {
            return lpTagConfig.utils.cssNumStrToInt(cssNumStr)
        }, openChatWindow: function(data) {
            var winURL, protocol;
            protocol = lpTagConfig.utils.isMSModernUI() ? 'https' : lpTagConfig.lpProtocol;
            winURL = lpTagConfig.utils.format('{0}://{1}/hc/{2}/?cmd=file&file=visitorWantsToChat&{3}={2}', protocol, lpTagConfig.lpServer, lpTagConfig.lpNumber, 'site');
            if (data.forceOffline) {
                winURL += '&forceOffline=' + encodeURIComponent(data.forceOffline)
            }
            if (data.skillName) {
                winURL += '&SV!skill=' + encodeURIComponent(data.skillName)
            }
            if (data.availability) {
                winURL += lpTagConfig.utils.format('&at={0}&waitTime={1}', lpTagConfig.tagPlugins.feedsManager.feeds.repAv.availability.getAvailabilityTypeId(data.availability.type), data.availability.seconds)
            }
            if (data.instanceId) {
                winURL += '&leInsId=' + encodeURIComponent(data.instanceId)
            }
            if (data.skillId) {
                winURL += '&skId=' + encodeURIComponent(data.skillId)
            }
            if (data.segmentId) {
                winURL += '&leSegId=' + encodeURIComponent(data.segmentId)
            }
            if (data.engagementId) {
                winURL += '&leEngId=' + encodeURIComponent(data.engagementId)
            }
            if (data.engagementTypeId) {
                winURL += '&leEngTypeId=' + encodeURIComponent(data.engagementTypeId)
            }
            if (data.name) {
                winURL += '&leEngName=' + encodeURIComponent(data.name)
            }
            if (data.repAvState) {
                winURL += '&leRepAvState=' + encodeURIComponent(data.repAvState)
            }
            if (data.referrer) {
                winURL += '&referrer=' + data.referrer
            }
            if (typeof lpMTag !== 'undefined' && typeof lpMTag.addFirstPartyCookies !== 'undefined') {
                winURL = lpMTag.addFirstPartyCookies(winURL)
            }
            if (winURL.length > 2000) {
                winURL = winURL.substr(0, 2000)
            }
            if (!lpTagConfig.utils.isMSModernUI()) {
                window.open(winURL, 'ChatWindow', 'width=475,height=400,resizable=yes')
            } else {
                var options = {
                    src: winURL,
                    width: 475,
                    height: 400,
                    title: 'ChatWindow',
                    server: lpMTagConfig.lpServer,
                    protocol: lpMTagConfig.lpProtocol
                };
                try {
                    lpMTagConfig.frameAPI.init(options);
                    lpMTagConfig.frameAPI.openFrame(options)
                } catch (e) {
                    window.open(winURL, 'ChatWindow', 'width=475,height=400,resizable=yes');
                    lpTagConfig.utils.log('Opening window in regular mode even we need to open it in iframe mode base on useModernWindow method', 'ERROR')
                }
            }
            return false
        }, reportImpression: function(evData) {
            var data = evData.target._data, showData = evData.showData;
            if (lpTagConfig.tagPlugins.conf.serverProps.leChatImpressionEventLogEnabled) {
                lpTagConfig.utils.makeLPCall('engagementVisitorEvent', {
                    site: lpTagConfig.lpNumber,
                    repState: lpTagConfig.utils.getImprRepState(showData.repAvKey),
                    insId: showData.instanceId,
                    engId: data.id,
                    name: lpTagConfig.utils.format('{0}_{1}', data.name, showData.instanceName),
                    segId: showData.segmentId,
                    imprApproachType: lpTagConfig.utils.convertEngagementTypeToImpressionApproachTypeId(showData.engagementType),
                    skillId: showData.skillId
                })
            }
        }, reportTimeOutEvent: function(timeout, channel, t) {
            if (lpTagConfig.tagPlugins.conf.serverProps.leChatImpressionEventLogEnabled) {
                lpTagConfig.utils.makeLPCall('mTagInviteTimeout', {
                    lpCallId: '711087090550-0',
                    timeout: timeout,
                    channel: channel,
                    t: t
                })
            }
        }, _getReferrerPrefix: function(engagementType, engagementName) {
            return engagementType === 'invitation' ? '(engage) ' : '(button%20dynamic-button:' + escape(engagementName) + '(' + escape(document.title) + '))%20'
        }, doBehaviourClickAction: function(data) {
            var clickData = data._currentShownStateData, engData = data._data, clickAction, openChatWindow = lpTagConfig.tagPlugins.api.utils.openChatWindow, engagementName = lpTagConfig.utils.format('{0}_{1}', engData.name, clickData.instanceName), referrer = this._getReferrerPrefix(clickData.engagementType, engagementName) + escape(document.location), chatWindowParams = {
                engagementId: clickData.engagementId,
                engagementTypeId: lpTagConfig.utils.convertEngagementTypeToImpressionApproachTypeId(clickData.engagementType),
                skillId: clickData.skillId,
                skillName: clickData.skillName,
                instanceId: clickData.instanceId,
                segmentId: clickData.segmentId,
                name: engagementName,
                repAvState: lpTagConfig.utils.getImprRepState(clickData.repAvKey),
                referrer: referrer,
                behaviour: clickData.repAvStateData.behaviour
            };
            if (clickData.repAvStateData) {
                if (lpTagConfig.tagPlugins.api.utils.isClearedRepAvState(clickData.repAvStateData)) {
                    return false
                } else if (!clickData.repAvStateData.behaviour) {
                    chatWindowParams.availability = clickData.repAvStateData.availability;
                    openChatWindow(chatWindowParams)
                } else {
                    clickAction = clickData.repAvStateData.behaviour.clickAction;
                    switch (clickAction.type) {
                    case 'offline':
                        chatWindowParams.forceOffline = 'true';
                        openChatWindow(chatWindowParams);
                        break;
                    case 'redirect':
                        window.open(clickAction.url, clickAction.target);
                        break;
                    case 'none':
                        void(0);
                        break;
                    default:
                        lpTagConfig.utils.log('doBehaviourClickAction(): clickAction type is invalid.', 'ERROR');
                        break
                    }
                }
            } else {
                lpTagConfig.utils.log('doBehaviourClickAction(): current repAv state is incorrect.', 'ERROR')
            }
        }, isClearedRepAvState: function(repAvStateData) {
            var presentation = repAvStateData.presentation;
            return presentation.elements === null && presentation.background.color === 'transparent' && presentation.background.image === '' && presentation.border.width === 0
        }, stopEventBubble: function(e) {
            lpTagConfig.utils.stopEventBubble(e)
        }, getPageDimensions: function() {
            return lpTagConfig.utils.getPageDimensions()
        }
    }
}
lpTagConfig.tagPlugins.feedsManager = {
    _conf: {
        syncFirstFeeds: true
    },
    _isRunning: false,
    _firstFeedsSync: {
        sync: {},
        _allArrived: false,
        isAllArrived: function(feedName) {
            if (!this._allArrived) {
                delete this.sync[feedName];
                this._allArrived = lpTagConfig.utils.isEmptyObj(this.sync)
            }
            return this._allArrived
        }
    },
    feeds: {
        data: {},
        prevFeedData: {},
        segments: {
            _feedName: 'segments',
            _feedEventName: 'SEGMENTS_LIST',
            _conf: {
                callbackFunc: null,
                shouldRegister: false
            },
            _update: function(evName, evData) {
                evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
                var segmentsFeed = lpTagConfig.tagPlugins.feedsManager.feeds.segments;
                segmentsFeed._conf.callbackFunc(segmentsFeed._feedName, evData.segments)
            },
            setShouldRegister: function(shouldRegister) {
                this._conf.shouldRegister = shouldRegister
            },
            getShouldRegister: function() {
                return this._conf.shouldRegister
            },
            init: function(conf) {
                lpTagConfig.utils.addPropsToObj(this._conf, conf, true)
            },
            start: function() {
                this._subscribeToChange();
                this._handlePublished()
            },
            _handlePublished: function() {
                var fired = lpTagConfig.utils.hasFired(this._feedEventName), lastEvent = fired[fired.length - 1], evName, evData;
                if (lastEvent) {
                    evName = lastEvent.evName;
                    evData = lastEvent.evData || lastEvent.data;
                    if (lastEvent.data) {
                        this._update(evData)
                    } else {
                        this._update(evName, evData)
                    }
                }
            },
            _subscribeToChange: function() {
                lpTagConfig.tagPlugins.api.utils.registerEvent(this._feedEventName, this._update)
            }
        },
        repAv: {
            constants: {
                STATES: {
                    OFFLINE: 1,
                    ONLINE: 2,
                    BUSY: 3,
                    AWAY: 4,
                    NONE: 'none'
                },
                AVAILABILITY: {
                    REGULAR: {
                        id: 1,
                        type: 'regular'
                    },
                    INTERACT_IMMEDIATELY: {
                        id: 2,
                        type: 'interact_immediately'
                    },
                    WITHIN: {
                        id: 3,
                        type: 'within'
                    }
                }
            },
            _feedName: 'repAv',
            _feedEventName: 'LP_REP_STATE_CHANGED',
            _lastRequestedTime: 0,
            _isRunning: false,
            _conf: {
                cbfUrl: 'lpTagConfig.tagPlugins.feedsManager.feeds.repAv._update',
                requestDelay: (lpMTag.lpInPageRequestDelay || 10) * 1000,
                callbackFunc: null,
                shouldRegister: false
            },
            setShouldRegister: function(shouldRegister) {
                this._conf.shouldRegister = shouldRegister
            },
            getShouldRegister: function() {
                return this._conf.shouldRegister
            },
            availability: {
                _data: {
                    '-1~1~0': {
                        state: 'none',
                        count: 1
                    }
                },
                add: function(elem) {
                    var id, availabilityId = this.getAvailabilityTypeId(elem.availability.type);
                    id = lpTagConfig.utils.format('{0}~{1}~{2}', elem.skillId, availabilityId, elem.availability.seconds);
                    if (!this._data[id]) {
                        this._data[id] = {
                            state: lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE,
                            skillId: elem.skillId,
                            availabilityId: availabilityId,
                            seconds: elem.availability.seconds,
                            count: 1
                        }
                    } else {
                        this._data[id].count++
                    }
                },
                remove: function(id) {
                    if (this._data[id] === 1) {
                        delete this._data[id]
                    } else {
                        this._data[id]--
                    }
                },
                getAvailabilityTypeId: function(type) {
                    var availabilityEnum = lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.AVAILABILITY, id = availabilityEnum.REGULAR.id;
                    for (var currId in availabilityEnum) {
                        if (availabilityEnum[currId].type === type) {
                            id = availabilityEnum[currId].id;
                            break
                        }
                    }
                    return id
                },
                setStateFromServerData: function(serverData) {
                    for (var id in serverData) {
                        this._data[id].state = serverData[id]
                    }
                }
            },
            _update: function(data) {
                var availabilityStates = {}, repAvFeed = lpTagConfig.tagPlugins.feedsManager.feeds.repAv;
                if (data.ResultSet.lpData[0]['availability']) {
                    availabilityStates = data.ResultSet.lpData[0]['availability']
                } else {
                    lpTagConfig.utils.log('repAv._update, the returned data from the Server is obsolete', 'ERROR')
                }
                repAvFeed.availability.setStateFromServerData(availabilityStates);
                this._conf.callbackFunc(this._feedName, repAvFeed.availability._data)
            },
            _setLastTimeRequested: function() {
                this._lastRequestedTime = (new Date()).getTime()
            },
            _getSkillsRepStates: function() {
                var repAv = lpTagConfig.tagPlugins.feedsManager.feeds.repAv, availabilityIdsArr = [];
                for (var id in repAv.availability._data) {
                    availabilityIdsArr.push(id)
                }
                lpTagConfig.utils.makeLPCall('lpTagRepstateMulti', {
                    lpCallId: '711087090550-0',
                    c: 1,
                    cbf: lpTagConfig.tagPlugins.feedsManager.feeds.repAv._conf.cbfUrl,
                    sta: availabilityIdsArr.join(',')
                });
                lpTagConfig.tagPlugins.feedsManager.feeds.repAv._setLastTimeRequested()
            },
            init: function(conf) {
                lpTagConfig.utils.addPropsToObj(this._conf, conf, true)
            },
            start: function() {
                this._subscribeToChange();
                this._getSkillsRepStates()
            },
            isNotCurrent: function() {
                var currentTime = (new Date()).getTime();
                return currentTime - this._lastRequestedTime > this._conf.requestDelay
            },
            _subscribeToChange: function() {
                lpTagConfig.tagPlugins.api.utils.registerEvent(this._feedEventName, this._getSkillsRepStates)
            },
            setShouldRegister: function(shouldRegister) {
                this._conf.shouldRegister = shouldRegister
            },
            getShouldRegister: function() {
                return this._conf.shouldRegister
            }
        },
        advancedAvailability: {
            _feedName: 'advancedAvailability',
            _feedEventName: 'LP_ADVANCED_AVAILABILITY',
            _conf: {
                shouldRegister: false
            },
            _update: function(data) {
                var eventName;
                lpTagConfig.utils.log('Got update engagement type: ' + data.type + ' instanceId: ' + data.instanceId + ' availability: ' + data.repAv, 'INFO');
                if (data.type === 'invitation') {
                    lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_SHOW_INVITATION_ADVANCED_AVAILABILITY', data)
                } else {
                    eventName = lpTagConfig.utils.format('LPCHAT_SHOW_INSTANCE_BY_ADVANCED_AVAILABILITY_{0}', String(data.engagementId));
                    lpTagConfig.utils.log('Event Name: ' + eventName + ' engagementId: ' + data.engagementId, 'INFO');
                    lpTagConfig.utils.log('Event Name After Replace: ' + eventName + ' engagementId: ' + data.engagementId + ' instanceId: ' + data.instanceId + ' repAv: ' + data.repAv, 'INFO');
                    lpTagConfig.tagPlugins.api.utils.publishEvent(eventName, data)
                }
            },
            init: function(conf) {
                lpTagConfig.utils.addPropsToObj(this._conf, conf)
            },
            start: function() {
                this._subscribeToChange()
            },
            _subscribeToChange: function() {
                lpTagConfig.tagPlugins.api.utils.registerEvent(this._feedEventName, this._update)
            },
            setShouldRegister: function(shouldRegister) {
                this._conf.shouldRegister = shouldRegister
            },
            getShouldRegister: function() {
                return this._conf.shouldRegister
            }
        }
    },
    _processFeed: function(name, data, forcePublish) {
        this.feeds.data[name] = data;
        if (this._conf.syncFirstFeeds&&!this._firstFeedsSync.isAllArrived(name)) {
            return 
        }
        if (forcePublish || this._isNewFeedsData(name)) {
            this.feeds.prevFeedData[name] = lpTagConfig.utils.cloneObj(data);
            this.publishFeeds()
        }
    },
    _isNewFeedsData: function(processedFeedName) {
        return !lpTagConfig.utils.areUnorderedEqual(this.feeds.data[processedFeedName], this.feeds.prevFeedData[processedFeedName])
    },
    publishFeeds: function() {
        lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_FEEDS_SAMPLED', this.feeds.data)
    },
    run: function(conf) {
        if (!this._isRunning) {
            lpTagConfig.utils.addPropsToObj(this._conf, conf, true);
            var feed, that = this;
            for (var feedKey in this.feeds) {
                feed = this.feeds[feedKey];
                if (typeof feed.start === 'function' && feed.getShouldRegister()) {
                    feed.init({
                        callbackFunc: function(feedName, data, forcePublish) {
                            that._processFeed(feedName, data, forcePublish)
                        }
                    });
                    feed.start();
                    if (this._conf.isFirstSynchronous) {
                        this._firstFeedsSync.sync[feedKey] = true
                    }
                }
            }
            this._isRunning = true
        }
    },
    stop: function() {},
    isRunning: function() {
        return this._isRunning
    }
};
lpTagConfig.LPObject = lpTagConfig.LPClass.extend({
    _ctor: function() {},
    makeImgCall: function(src) {
        return lpTagConfig.utils.makeImgCall(src)
    },
    makeScriptCall: function(src) {
        return lpTagConfig.utils.makeScriptCall(src)
    },
    publishEvent: function(evName, evData) {
        return lpTagConfig.utils.publishEvent(evName, evData)
    },
    registerEvent: function(evName, fn) {
        return lpTagConfig.utils.registerEvent(evName, fn)
    },
    log: function(msg, type) {
        lpTagConfig.utils.log(msg, type)
    },
    isIEQuirksMode: function() {
        return lpTagConfig.utils.isIEQuirksMode()
    },
    isPositionFixed: function() {
        return lpTagConfig.utils.isPositionFixed()
    },
    onEvent: function(evName, evData) {
        lpTagConfig.utils.onEvent(evName, evData)
    }
});
lpTagConfig.tagPlugins.StateManager = function(instances, showStateCallback, buttonSkill, buttonAvailability) {
    this.selectedInstance = null;
    this._instances = instances;
    this._showStateCallback = showStateCallback;
    this._buttonSkill = buttonSkill;
    this._buttonAvailability = {
        type: buttonAvailability ? buttonAvailability.type: lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.AVAILABILITY.REGULAR.type,
        seconds: buttonAvailability ? buttonAvailability.seconds: 0
    }
};
lpTagConfig.tagPlugins.StateManager.prototype._feedsData = {
    segments: '',
    repAv: {
        '-1': lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE
    }
};
lpTagConfig.tagPlugins.StateManager.prototype.run = function() {
    var that = this, instanceObj;
    if (!lpTagConfig.utils.isLEChatAAEnabled()) {
        lpTagConfig.utils.log('Working with Client side decision', 'INFO');
        lpTagConfig.tagPlugins.api.utils.registerEvent('LPCHAT_FEEDS_SAMPLED', function(evName, evData) {
            evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
            lpTagConfig.utils.addPropsToObj(that._feedsData, evData, true);
            that._sampleState()
        });
        lpTagConfig.tagPlugins.feedsManager.publishFeeds();
        this._sampleState()
    } else {
        instanceObj = this._serverSideDecisionDisplayInstance(this._engagementId);
        if (instanceObj !== null) {
            lpTagConfig.utils.log('Working with Server side decision instance: ' + instanceObj.instance.isDefault, 'INFO');
            this._prepareAndShowInstance(instanceObj.instance, instanceObj.repAv)
        } else {
            lpTagConfig.utils.log('Working with Server side decision default instance is null or no default repAv on default instance', 'ERROR')
        }
    }
};
lpTagConfig.tagPlugins.StateManager.prototype._clientSideDecisionDisplayInstance = function() {
    var instance = null;
    for (var i = 0; i < this._instances.length; i++) {
        if (this._isInstanceNotSegmented(this._instances[i]) || this._isInstanceSegmentedToVisitorSegment(this._instances[i], this._feedsData.segments)) {
            return this._instances[i]
        }
    }
    return instance
};
lpTagConfig.tagPlugins.StateManager.prototype._serverSideDecisionDisplayInstance = function() {
    var instance = null, firedShowButtonEventData = lpTagConfig.tagPlugins.buttonsManager.getInstanceFromStartPage(this._engagementId);
    if (firedShowButtonEventData !== null) {
        instance = this._getInstanceById(firedShowButtonEventData.instanceId);
        var i, curEngagement;
        for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
            curEngagement = lpTagConfig.tagPlugins.jsonsArr[i];
            if (curEngagement.id === this._engagementId) {
                if (curEngagement.useRoom !== false) {
                    curEngagement.skillId = firedShowButtonEventData.roomSkillId;
                    curEngagement.skillName = firedShowButtonEventData.roomSkillName
                }
                break
            }
        }
        if (instance.useRoom !== false) {
            instance.skillId = firedShowButtonEventData.roomSkillId;
            instance.skillName = firedShowButtonEventData.roomSkillName
        }
        this.selectedInstance = instance;
        lpTagConfig.utils.log('Instance chosen based on start page events instanceId: ' + firedShowButtonEventData.instanceId, 'INFO')
    }
    if (!this.selectedInstance) {
        for (var i = 0; i < this._instances.length; i++) {
            if (this._instances[i].isDefault) {
                if (this._instances[i].repAv[lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE] !== null) {
                    this.selectedInstance = instance = this._instances[i];
                    firedShowButtonEventData = firedShowButtonEventData || {};
                    firedShowButtonEventData.repAv = lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE;
                    lpTagConfig.utils.log('Instance chosen default instanceId: ' + instance.id, 'INFO');
                    break
                } else {
                    lpTagConfig.utils.log('We have a default instance without a none repAv - will not show any image ', 'INFO')
                }
            }
        }
    }
    var retObject = instance === null ? null: {
        instance: instance,
        repAv: firedShowButtonEventData.repAv
    };
    return retObject
};
lpTagConfig.tagPlugins.StateManager.prototype._prepareAndShowInstance = function(instance, repAv) {
    var repAvKey, showData;
    if (instance !== null) {
        if (lpTagConfig.utils.isLEChatAAEnabled()) {
            repAvKey = repAv;
            lpTagConfig.utils.log('repAvailability was set by server side to: ' + repAvKey, 'INFO')
        } else {
            repAvKey = this._getRepAvKey(instance, lpTagConfig.tagPlugins.feedsManager.feeds.repAv.availability._data);
            lpTagConfig.utils.log('repAvailability was set by client side: ' + repAvKey, 'INFO')
        }
        if (instance.repAv[repAvKey]) {
            showData = {
                currentInstance: instance,
                instanceId: instance.id,
                instanceName: instance.name,
                segmentId: instance.segmentId,
                segmentHash: instance.segmentHash,
                repAvKey: repAvKey,
                skillId: this._getInstanceSkillId(instance),
                skillName: this._getInstanceSkillName(instance),
                availability: this._getInstanceAvailability(instance),
                overlay: instance.overlay,
                repAvStateData: instance.repAv[repAvKey]
            };
            this._showState(showData)
        }
    }
};
lpTagConfig.tagPlugins.StateManager.prototype._getInstanceById = function(instanceId) {
    for (var i = 0; i < this._instances.length; i++) {
        if (instanceId === this._instances[i].id) {
            return this._instances[i]
        }
    }
    return null
};
lpTagConfig.tagPlugins.StateManager.prototype.startAdvancedAvailabilityFlow = function(dataObj) {
    var instance = this._getInstanceById(dataObj.instanceId);
    if (instance !== null) {
        lpTagConfig.utils.log('Event fired for instanceId: ' + instance.id, 'INFO')
    }
    this._prepareAndShowInstance(instance, dataObj.repAv)
};
lpTagConfig.tagPlugins.StateManager.prototype._sampleState = function() {
    var instance = this._clientSideDecisionDisplayInstance();
    this._prepareAndShowInstance(instance)
};
lpTagConfig.tagPlugins.StateManager.prototype._showState = function(showData) {
    this._showStateCallback(showData)
};
lpTagConfig.tagPlugins.StateManager.prototype._getInstanceAvailability = function(instance) {
    return instance.availability ? instance.availability : this._buttonAvailability
};
lpTagConfig.tagPlugins.StateManager.prototype._getInstanceSkillId = function(instance) {
    var instanceSkillId = typeof instance.skillId !== 'undefined' ? instance.skillId: this._buttonSkill.id;
    return instanceSkillId
};
lpTagConfig.tagPlugins.StateManager.prototype._getInstanceSkillName = function(instance) {
    return instance.skillName || this._buttonSkill.name
};
lpTagConfig.tagPlugins.StateManager.prototype._getRepAvKey = function(instance, evRepAv) {
    var REP_AV_STATES = lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES, repAvKeyForInstanceSkill = this._getRepAvKeyForSkill(instance, evRepAv);
    repAvKeyForInstanceSkill = repAvKeyForInstanceSkill === REP_AV_STATES.AWAY ? REP_AV_STATES.OFFLINE : repAvKeyForInstanceSkill;
    return repAvKeyForInstanceSkill
};
lpTagConfig.tagPlugins.StateManager.prototype._getRepAvKeyForSkill = function(instance, evRepAv) {
    var id = this._getAvailabilityId(instance.skillId, lpTagConfig.tagPlugins.feedsManager.feeds.repAv.availability.getAvailabilityTypeId(instance.availability.type), instance.availability.seconds);
    return evRepAv[id].state
};
lpTagConfig.tagPlugins.StateManager.prototype._getAvailabilityId = function(skillId, type, seconds) {
    return lpTagConfig.utils.format('{0}~{1}~{2}', skillId, type, seconds)
};
lpTagConfig.tagPlugins.StateManager.prototype._isInstanceNotSegmented = function(instance) {
    return instance.segmentHash === 'all'
};
lpTagConfig.tagPlugins.StateManager.prototype._isInstanceSegmentedToVisitorSegment = function(instance, segments) {
    var isSegmented = false;
    if (segments) {
        for (var i = 0; i < segments.length; i++) {
            if (segments[i] === instance.segmentHash) {
                isSegmented = true;
                break
            }
        }
    }
    return isSegmented
};
lpTagConfig.tagPlugins.StateManager.prototype._preloadInstanceImages = function(instance, callback) {
    var allImages = [], i, backgroundImage, elements, buttons, closeButtons, images, repAvState, str;
    if (instance) {
        for (var repAvKey in instance.repAv) {
            repAvState = instance.repAv[repAvKey];
            backgroundImage = repAvState.presentation.background.image || '';
            elements = repAvState.presentation.elements || {};
            buttons = elements.buttons || [];
            closeButtons = elements.closeButtons || [];
            images = elements.images || [];
            if (backgroundImage) {
                allImages.push(lpTagConfig.tagPlugins.api.utils.extractURL(backgroundImage))
            }
            for (i = 0; i < buttons.length; i++) {
                str = buttons[i].css.backgroundImage;
                if (str) {
                    allImages.push(lpTagConfig.tagPlugins.api.utils.extractURL(str))
                }
            }
            for (i = 0; i < closeButtons.length; i++) {
                allImages.push(closeButtons[i].imageUrl)
            }
            for (i = 0; i < images.length; i++) {
                allImages.push(images[i].imageUrl)
            }
        }
    }
    lpTagConfig.tagPlugins.api.utils.preloadImages(allImages, callback)
};
lpTagConfig.tagPlugins.LPButtonStateManager = function(engagementId, instances, showStateCallback, buttonSkill, buttonAvailability) {
    this._engagementId = engagementId;
    this._repAvUpdateCounter = lpTagConfig.tagPlugins.conf.siteGeneralProps.leChatRepAvUpdate;
    this._instanceUpdateCounter = lpTagConfig.tagPlugins.conf.siteGeneralProps.leChatInstanceUpdate;
    this._currentRepAvKey = lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE;
    this._currentInstanceId = '';
    this._lastNonFailedInstanceLoaderRequestId = 0;
    this._lastShownInstanceLoadingRequestId = 0;
    this._currentlyLoadingInstancesIds = [];
    this.constructor.call(this, instances, showStateCallback, buttonAvailability)
};
lpTagConfig.tagPlugins.LPButtonStateManager.prototype = new lpTagConfig.tagPlugins.StateManager();
lpTagConfig.tagPlugins.LPButtonStateManager.prototype._updateCurrentRepAvKey = function(showData) {
    if (this._currentRepAvKey !== showData.repAvKey) {
        this._currentRepAvKey = showData.repAvKey;
        if (showData.repAvKey !== lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE) {
            this._repAvUpdateCounter--
        }
    }
};
lpTagConfig.tagPlugins.LPButtonStateManager.prototype._showInstance = function(showData) {
    if (this._repAvUpdateCounter>-1 && this._instanceUpdateCounter>-1) {
        lpTagConfig.utils.log('Before calling showState on : ' + this._currentInstanceId, 'INFO');
        lpTagConfig.tagPlugins.StateManager.prototype._showState.call(this, showData)
    }
};
lpTagConfig.tagPlugins.LPButtonStateManager.prototype._showState = function(showData) {
    var that = this, thisInstanceLoadingRequestId, thisInstanceLoadingRequestData = {
        isBack: false,
        isSuccess: false,
        showData: showData
    };
    lpTagConfig.utils.log('in button _showState - showData: ' + showData + ' state: ' + showData.repAvKey, 'INFO');
    if (this._currentInstanceId !== showData.instanceId) {
        try {
            this._lastNonFailedInstanceLoaderRequestId++;
            thisInstanceLoadingRequestId = this._lastNonFailedInstanceLoaderRequestId;
            this._currentlyLoadingInstancesIds[thisInstanceLoadingRequestId] = thisInstanceLoadingRequestData;
            this._preloadInstanceImages(showData.currentInstance, function(isSuccess) {
                var previousLoadedInstanceRequestData, curInstanceLoadingRequestId;
                that._currentlyLoadingInstancesIds[thisInstanceLoadingRequestId].isBack = true;
                that._currentlyLoadingInstancesIds[thisInstanceLoadingRequestId].isSuccess = isSuccess;
                if (isSuccess && that._lastNonFailedInstanceLoaderRequestId === thisInstanceLoadingRequestId) {
                    lpTagConfig.utils.log('All images of the latest instance request are succesfully loaded, the following instance is shown: ' + showData.instanceId, 'INFO');
                    that._showSuccesfullyLoadedImagesInstance(showData);
                    that._lastShownInstanceLoadingRequestId = thisInstanceLoadingRequestId
                } else if (that._lastNonFailedInstanceLoaderRequestId === thisInstanceLoadingRequestId && thisInstanceLoadingRequestId > that._lastShownInstanceLoadingRequestId) {
                    lpTagConfig.utils.log('At least one of the latest instance could not be loaded, the following instance will not be shown: ' + showData.instanceId, 'ERROR');
                    that._lastNonFailedInstanceLoaderRequestId--;
                    for (curInstanceLoadingRequestId = thisInstanceLoadingRequestId - 1; curInstanceLoadingRequestId > that._lastShownInstanceLoadingRequestId; curInstanceLoadingRequestId--) {
                        previousLoadedInstanceRequestData = that._currentlyLoadingInstancesIds[curInstanceLoadingRequestId];
                        if (!previousLoadedInstanceRequestData.isBack) {
                            break
                        } else {
                            if (!previousLoadedInstanceRequestData.isSuccess) {
                                continue
                            } else {
                                lpTagConfig.utils.log('Show the following instance request that was successfully loaded before: ' + previousLoadedInstanceRequestData.showData.instanceId, 'INFO');
                                that._showSuccesfullyLoadedImagesInstance(previousLoadedInstanceRequestData.showData);
                                break
                            }
                        }
                    }
                } else if (isSuccess) {
                    lpTagConfig.utils.log('An instance which is not a candidate to be shown as it was not the latest that was requested is successfully loaded: ' + showData.instanceId, 'INFO')
                } else {
                    lpTagConfig.utils.log('An instance which is not a candidate to be shown as it was not the latest that was requested is unsuccessfully loaded (at least one image was borken): ' + showData.instanceId, 'ERROR')
                }
            })
        } catch (e) {
            lpTagConfig.utils.log('Error loading images from instance [' + e + ']', 'ERROR')
        }
    } else {
        this._updateCurrentRepAvKey(showData);
        this._showInstance(showData)
    }
};
lpTagConfig.tagPlugins.LPButtonStateManager.prototype._showSuccesfullyLoadedImagesInstance = function(showData) {
    this._instanceUpdateCounter--;
    this._currentInstanceId = showData.instanceId;
    this._repAvUpdateCounter = lpTagConfig.tagPlugins.conf.siteGeneralProps.leChatRepAvUpdate;
    this._updateCurrentRepAvKey(showData);
    this._showInstance(showData)
};
lpTagConfig.tagPlugins.LPInvitationStateManager = function(instances, showStateCallback, buttonSkill, buttonAvailability) {
    this.constructor.call(this, instances, showStateCallback, buttonAvailability)
};
lpTagConfig.tagPlugins.LPInvitationStateManager.prototype = new lpTagConfig.tagPlugins.StateManager();
lpTagConfig.tagPlugins.LPInvitationStateManager.prototype.run = function(conf) {
    if (conf.instanceToShow) {
        this._showState(conf.instanceToShow)
    } else {
        lpTagConfig.tagPlugins.StateManager.prototype.run.call(this)
    }
};
lpTagConfig.tagPlugins.LPInvitationStateManager.prototype._showState = function(instance) {
    var that = this, showData = {
        instanceId: instance.id,
        instanceName: instance.name,
        segmentId: instance.segmentId,
        repAvKey: lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.ONLINE,
        skillId: this._getInstanceSkillId(instance),
        skillName: this._getInstanceSkillName(instance),
        segmentHash: instance.segmentHash,
        availability: this._getInstanceAvailability(instance),
        overlay: instance.overlay,
        repAvStateData: instance.repAv[lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.ONLINE]
    };
    try {
        lpTagConfig.tagPlugins.StateManager.prototype._preloadInstanceImages(instance, function(success) {
            if (success) {
                lpTagConfig.tagPlugins.StateManager.prototype._showState.call(that, showData)
            }
        })
    } catch (e) {
        lpTagConfig.utils.log('Error loading images from instance [' + e + ']', 'ERROR')
    }
};
lpTagConfig.tagPlugins.LPEngagementView = function() {};
lpTagConfig.tagPlugins.LPEngagementView.prototype.setData = function(data) {
    this._data = data;
    if (data.layout.position.type === 'fixed') {
        this._zIndex = 9999
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype.preloadImages = function(callback) {
    var allImages = [], i, backgroundImage, elements, buttons, closeButtons, images, repAvState, str, instances = this._data.states;
    if (instances) {
        for (var instanceIndex = 0; instanceIndex < instances.length; instanceIndex++) {
            for (var repAvKey in instances[instanceIndex].repAv) {
                repAvState = instances[instanceIndex].repAv[repAvKey];
                backgroundImage = repAvState.presentation.background.image || '';
                elements = repAvState.presentation.elements || {};
                buttons = elements.buttons || [];
                closeButtons = elements.closeButtons || [];
                images = elements.images || [];
                if (backgroundImage) {
                    allImages.push(lpTagConfig.tagPlugins.api.utils.extractURL(backgroundImage))
                }
                for (i = 0; i < buttons.length; i++) {
                    str = buttons[i].css.backgroundImage;
                    if (str) {
                        allImages.push(lpTagConfig.tagPlugins.api.utils.extractURL(str))
                    }
                }
                for (i = 0; i < closeButtons.length; i++) {
                    allImages.push(closeButtons[i].imageUrl)
                }
                for (i = 0; i < images.length; i++) {
                    allImages.push(images[i].imageUrl)
                }
            }
        }
    }
    lpTagConfig.tagPlugins.api.utils.preloadImages(allImages, callback)
};
lpTagConfig.tagPlugins.LPEngagementView.prototype.getFixedParentContainer = function() {
    return document.body
};
lpTagConfig.tagPlugins.LPEngagementView.prototype.setStatePosition = function(showData) {
    var coordinates;
    if (showData.repAvStateData && this._data.layout.position.type === 'fixed' && this._containerEl) {
        coordinates = this._getCoordinates(showData);
        this._containerEl.style.top = coordinates.top + 'px';
        this._containerEl.style.left = coordinates.left + 'px'
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype.showState = function(showData) {
    showData.engagementId = this._data.id;
    showData.engagementType = this._data.type;
    this.setStatePosition(showData)
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._getCoordinates = function(showData) {
    var coordinates = {}, borderWidth = showData.repAvStateData.presentation.border.width, totalHeight = this._data.layout.size.height + 2 * borderWidth, totalWidth = this._data.layout.size.width + 2 * borderWidth, locationArr = showData.overlay.location.split(' '), pageDims = lpTagConfig.tagPlugins.api.utils.getPageDimensions();
    switch (locationArr[0]) {
    case 'top':
        coordinates.top = 0;
        break;
    case 'middle':
        coordinates.top = (pageDims.windowHeight - totalHeight) / 2;
        break;
    case 'bottom':
        coordinates.top = pageDims.windowHeight - totalHeight;
        break;
    default:
        coordinates.top = showData.overlay.top;
        break
    }
    switch (locationArr[1]) {
    case 'left':
        coordinates.left = 0;
        break;
    case 'center':
        coordinates.left = (pageDims.windowWidth - totalWidth) / 2;
        break;
    case 'right':
        coordinates.left = pageDims.windowWidth - totalWidth;
        break;
    default:
        coordinates.left = showData.overlay.left;
        break
    }
    if (!lpTagConfig.tagPlugins.api.utils.isPositionFixed()) {
        coordinates.top += pageDims.verticalScroll;
        coordinates.left += pageDims.horizontalScroll
    }
    return coordinates
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._hide = function(el) {
    if (el !== null && el.style !== null) {
        el.style.display = 'none'
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._show = function(el) {
    if (el !== null && el.style !== null) {
        el.style.display = 'block'
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype.addToPage = function() {
    var that = this;
    this._createButtonDomContainer();
    if (this._data.layout.position.type === 'anchor') {
        var selectedDiv = lpTagConfig.tagPlugins.api.utils.getObjById(this._data.layout.position.divId);
        if (!selectedDiv) {
            throw new Error('div with the divId that was set does not exist.')
        }
        this._addAnchorDivToPage(selectedDiv, this._containerEl)
    } else {
        this._addFixedDivToPage(this._containerEl)
    }
    lpTagConfig.utils.registerEvent('LPCHAT_BROWSER_RESIZE', function() {
        that.setStatePosition(that._currentShownStateData)
    });
    this._show(this._containerEl)
};
lpTagConfig.tagPlugins.LPEngagementView.prototype.attachEvents = function() {
    this._attachOnClickEvent()
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._attachOnClickEvent = function() {
    var that = this;
    if (this._containerEl) {
        this._containerEl['onclick'] = function() {
            that._doBehaviourClickAction(that)
        }
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._doBehaviourClickAction = function(data) {
    lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_ENGAGEMENT_ACCEPTED', {
        engagementId: this._data.id,
        engagementType: this._data.type,
        currentRepAvStateData: data._currentShownStateData
    });
    lpTagConfig.tagPlugins.api.utils.doBehaviourClickAction(data)
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._close = function() {
    this._hide(this._containerEl)
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._updateButtonCursor = function(repAvStateData) {
    this._containerEl.style.cursor = (repAvStateData.behaviour && repAvStateData.behaviour.clickAction.type === 'none') || lpTagConfig.tagPlugins.api.utils.isClearedRepAvState(repAvStateData) ? 'auto' : 'pointer'
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._createButtonDomContainer = function() {
    var containerJson = this._getContainerConf();
    this._containerEl = lpTagConfig.lpJsonToDom.convert({
        containers: containerJson
    })[0];
    if (typeof this._containerEl === 'undefined') {
        throw new Error('Error creating tagPlugin container (id: ' + this._data.id + ')')
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._createDomRepAvState = function(repAvStateData) {
    var stateContainerJson = this._getRepAvStateContainerConf(repAvStateData), stateContainerEl = lpTagConfig.lpJsonToDom.convert({
        containers: stateContainerJson
    })[0];
    var innerElemsDomArr = lpTagConfig.lpJsonToDom.convert(repAvStateData.presentation.elements);
    for (var i = 0; i < innerElemsDomArr.length; i++) {
        stateContainerEl.appendChild(innerElemsDomArr[i])
    }
    this._containerEl.appendChild(stateContainerEl);
    repAvStateData.domObj = stateContainerEl;
    return stateContainerEl
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._addAnchorDivToPage = function(selectedDiv, tagPluginContainer) {
    switch (this._data.layout.position.divIdAnchor) {
    case 'lastChild':
        selectedDiv.appendChild(tagPluginContainer);
        break;
    case 'firstChild':
        var firstEl = lpTagConfig.tagPlugins.api.utils.firstElementChild(selectedDiv);
        selectedDiv.insertBefore(tagPluginContainer, firstEl);
        break;
    case 'before':
        selectedDiv.parentNode.insertBefore(tagPluginContainer, selectedDiv);
        break;
    case 'after':
        var nextEl = lpTagConfig.tagPlugins.api.utils.nextElementSibling(selectedDiv);
        selectedDiv.parentNode.insertBefore(tagPluginContainer, nextEl);
        break;
    default:
        selectedDiv.appendChild(tagPluginContainer);
        break
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._addFixedDivToPage = function(tagPluginContainer) {
    var parentContainer, divId = this._data.layout.position.divId;
    if (!divId || lpTagConfig.utils.getObjById(divId)) {
        parentContainer = this.getFixedParentContainer();
        parentContainer.appendChild(tagPluginContainer)
    }
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._getContainerConf = function() {
    var layoutData = this._data.layout, conf = {
        id: this._data.id,
        type: layoutData.position.type,
        css: {
            width: layoutData.size.width,
            height: layoutData.size.height,
            zIndex: this._zIndex || 'auto',
            display: 'none'
        }
    };
    if (conf.type === 'anchor') {
        conf.css.position = 'relative'
    } else {
        conf.css.position = lpTagConfig.tagPlugins.api.utils.isPositionFixed() ? 'fixed' : 'absolute'
    }
    return conf
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._getRepAvStateContainerConf = function(repAvStateData) {
    var containerDimensions = this._getRepAvStateContainerDimensions(repAvStateData), conf = {
        css: {
            backgroundColor: repAvStateData.presentation.background.color,
            backgroundImage: repAvStateData.presentation.background.image,
            borderWidth: repAvStateData.presentation.border.width,
            borderColor: repAvStateData.presentation.border.color,
            borderRadius: repAvStateData.presentation.border.radius,
            width: containerDimensions.width,
            height: containerDimensions.height,
            zIndex: this._zIndex,
            position: 'relative',
            display: 'none'
        }
    };
    return conf
};
lpTagConfig.tagPlugins.LPEngagementView.prototype._getRepAvStateContainerDimensions = function(repAvStateData) {
    var containerDimensions = {};
    if (lpTagConfig.utils.isIEQuirksMode() || typeof repAvStateData.presentation.size === 'undefined') {
        containerDimensions.width = this._data.layout.size.width;
        containerDimensions.height = this._data.layout.size.height
    } else {
        containerDimensions.width = repAvStateData.presentation.size.width;
        containerDimensions.height = repAvStateData.presentation.size.height
    }
    return containerDimensions
};
lpTagConfig.tagPlugins.LPButtonView = function() {};
lpTagConfig.tagPlugins.LPButtonView.prototype = new lpTagConfig.tagPlugins.LPEngagementView();
lpTagConfig.tagPlugins.LPButtonView.prototype.setData = function(data) {
    lpTagConfig.tagPlugins.LPEngagementView.prototype.setData.call(this, data);
    if (data.layout.position.type === 'fixed') {
        this._zIndex = 9999
    }
};
lpTagConfig.tagPlugins.LPButtonView.prototype.showState = function(showData) {
    var repAvStateContainerEl = null;
    if (showData.repAvStateData) {
        repAvStateContainerEl = showData.repAvStateData.domObj || this._createDomRepAvState(showData.repAvStateData)
    }
    if (repAvStateContainerEl !== this._currentShownRepAvStateEl) {
        lpTagConfig.tagPlugins.LPEngagementView.prototype.showState.call(this, showData);
        this._updateButtonCursor(showData.repAvStateData);
        if (this._currentShownRepAvStateEl) {
            this._hide(this._currentShownRepAvStateEl)
        }
        if (repAvStateContainerEl !== null) {
            this._updateButtonCursor(showData.repAvStateData);
            this._show(repAvStateContainerEl)
        }
        this._currentShownRepAvStateEl = repAvStateContainerEl;
        this._currentShownStateData = showData;
        lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_BUTTON_STATE_DISPLAYED', {
            target: this,
            showData: showData
        })
    }
};
lpTagConfig.tagPlugins.LPButtonView.prototype._close = function() {
    lpTagConfig.tagPlugins.LPEngagementView.prototype._close.call(this);
    lpTagConfig.tagPlugins.api.utils.publishEvent('LP_CHAT_BUTTON_CLOSE')
};
lpTagConfig.tagPlugins.LPInvitationView = function() {};
lpTagConfig.tagPlugins.LPInvitationView.prototype = new lpTagConfig.tagPlugins.LPEngagementView();
lpTagConfig.tagPlugins.LPInvitationView.prototype.setData = function(data) {
    lpTagConfig.tagPlugins.LPEngagementView.prototype.setData.call(this, data);
    this._zIndex = 10000
};
lpTagConfig.tagPlugins.LPInvitationView.prototype._doBehaviourClickAction = function(currentRepAvStateData) {
    lpTagConfig.tagPlugins.LPEngagementView.prototype._doBehaviourClickAction.call(this, currentRepAvStateData);
    this._close()
};
lpTagConfig.tagPlugins.LPInvitationView.prototype.showState = function(showData) {
    lpTagConfig.tagPlugins.LPEngagementView.prototype.showState.call(this, showData);
    var repAvStateContainerEl = this._createDomRepAvState(showData.repAvStateData);
    this._updateButtonCursor(showData.repAvStateData);
    this._show(repAvStateContainerEl);
    this._currentShownRepAvStateEl = repAvStateContainerEl;
    this._currentShownStateData = showData;
    lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_INVITATION_DISPLAYED', {
        target: this,
        showData: showData
    });
    this._doAnimation(showData.overlay.invitationType)
};
lpTagConfig.tagPlugins.LPInvitationView.prototype._doAnimation = function(invitationType) {
    switch (invitationType) {
    case 'floating':
        this._animateFloating();
        break;
    case 'fixed':
        break;
    default:
        break
    }
};
lpTagConfig.tagPlugins.LPInvitationView.prototype._animateFloating = function() {
    var that = this, doneAnimations = {
        toTheRight: false,
        toTheLeft: false
    };
    this._doFloatingAnimation(doneAnimations);
    this._containerEl.onmouseover = function() {
        lpTagConfig.lpAnimate.stop(that._containerEl.id)
    };
    this._containerEl.onmouseout = function() {
        that._doFloatingAnimation(doneAnimations)
    }
};
lpTagConfig.tagPlugins.LPInvitationView.prototype._doFloatingAnimation = function(doneAnimations) {
    var pageDims = lpTagConfig.tagPlugins.api.utils.getPageDimensions(), invitationWidth = this._data.layout.size.width, leftCoordinate = lpTagConfig.tagPlugins.api.utils.cssNumStrToInt(this._containerEl.style.left), millisPerPixel = 7, targetLeftCoordinate = 30, that = this;
    if (!doneAnimations.toTheRight) {
        lpTagConfig.lpAnimate.animate(this._containerEl, {
            name: 'left',
            targetVal: pageDims.windowWidth - invitationWidth
        }, {
            easing: 'linear',
            duration: (pageDims.windowWidth - invitationWidth - leftCoordinate) * millisPerPixel,
            callback: function() {
                doneAnimations.toTheRight = true;
                that._doFloatingAnimation(doneAnimations)
            }
        })
    }
    if (doneAnimations.toTheRight&&!doneAnimations.toTheLeft) {
        lpTagConfig.lpAnimate.animate(this._containerEl, {
            name: 'left',
            targetVal: targetLeftCoordinate
        }, {
            easing: 'linear',
            duration: (leftCoordinate - targetLeftCoordinate) * millisPerPixel,
            callback: function() {
                doneAnimations.toTheLeft = true;
                that._containerEl.onmouseover = null;
                that._containerEl.onmouseout = null
            }
        })
    }
};
lpTagConfig.tagPlugins.LPInvitationView.prototype.addToPage = function() {
    this._createButtonDomContainer();
    this._addFixedDivToPage(this._containerEl);
    this._show(this._containerEl)
};
lpTagConfig.tagPlugins.LPInvitationView.prototype.attachEvents = function() {
    lpTagConfig.tagPlugins.LPEngagementView.prototype._attachOnClickEvent.call(this);
    this._attachOnCloseButtonClickEvent()
};
lpTagConfig.tagPlugins.LPInvitationView.prototype._attachOnCloseButtonClickEvent = function() {
    var that = this;
    lpTagConfig.tagPlugins.api.utils.registerEvent('LPCHAT_CLOSE_ENGAGEMENT_CLICK', function(evName, evData) {
        evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
        that.close();
        lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_INVITATION_REJECTED');
        lpTagConfig.tagPlugins.api.utils.stopEventBubble(evData.htmlEvent)
    })
};
lpTagConfig.tagPlugins.LPInvitationView.prototype.close = function() {
    lpTagConfig.tagPlugins.LPEngagementView.prototype._close.call(this)
};
lpTagConfig.tagPlugins.LPPlugin = lpTagConfig.LPObject.extend({
    _ctor: function(view, data) {
        this._super();
        if (!data ||!view) {
            this.log('LPPLUGIN.ctor(): Invalid tagPlugin data or/and view', 'ERROR');
            return 
        }
        this._view = view;
        this._data = data;
        this._id = this._data.id;
        this._view.setData(this._data);
        this.onEvent('INIT_PLUGIN', {
            tagPluginId: this._id
        })
    },
    getView: function() {
        return this._view
    },
    getData: function() {
        return this._data
    },
    start: function() {
        var that = this;
        this.onEvent('START', {
            tagPluginId: this._id
        });
        this.create()
    },
    create: function() {
        this.onEvent('CREATE', {
            tagPluginId: this._id
        })
    },
    _reportImpression: function(imprUrl) {
        this.makeScriptCall(imprUrl);
        this.onEvent('IMPRESSION', {
            tagPluginId: this._id,
            extra: [imprUrl]
        })
    },
    addToPage: function() {
        this._view.addToPage()
    },
    attachEvents: function() {
        this._view.attachEvents()
    }
});
lpTagConfig.tagPlugins.LPEngagement = lpTagConfig.tagPlugins.LPPlugin.extend({
    _ctor: function(view, data) {
        this._super(view, data)
    },
    create: function() {
        this._super();
        if (!this._view.getFixedParentContainer()) {
            throw new Error('LPPlugin.create(): container element does not exist.')
        }
        this.addToPage();
        this.attachEvents()
    },
    start: function() {
        this._super()
    }
});
lpTagConfig.tagPlugins.LPButton = lpTagConfig.tagPlugins.LPEngagement.extend({
    _ctor: function(data) {
        var eventName, LPButtonViewObject = lpTagConfig.ovr && lpTagConfig.ovr.tagPlugins && lpTagConfig.ovr.tagPlugins.LPButtonView ? lpTagConfig.tagPlugins.ovr.LPButtonView: lpTagConfig.tagPlugins.LPButtonView, view = new LPButtonViewObject();
        this._super(view, data);
        var that = this, showStateCallback = function(repAvStateData) {
            that._view.showState(repAvStateData)
        };
        var StateManager = lpTagConfig.ovr && lpTagConfig.ovr.tagPlugins && lpTagConfig.ovr.tagPlugins.LPButtonStateManager ? lpTagConfig.ovr.tagPlugins.LPButtonStateManager: lpTagConfig.tagPlugins.LPButtonStateManager;
        this._stateManager = new StateManager(data.id, data.states, showStateCallback, {
            id: data.skillId,
            name: data.skillName
        }, data.availability);
        if (lpTagConfig.utils.isLEChatAAEnabled()) {
            eventName = lpTagConfig.utils.format('LPCHAT_SHOW_INSTANCE_BY_ADVANCED_AVAILABILITY_{0}', String(data.id));
            lpTagConfig.utils.log('Registering to Button id: ' + eventName, 'INFO');
            lpTagConfig.utils.registerEvent(eventName, function(evData) {
                lpTagConfig.utils.log('event was captured by listener, eventName: ' + eventName, 'INFO');
                var curInstance, i;
                if (data.useRoom !== false) {
                    data.skillId = evData.roomSkillId;
                    data.skillName = evData.roomSkillName
                }
                for (i = 0; i < data.states.length; i++) {
                    curInstance = data.states[i];
                    if (curInstance.id === evData.instanceId) {
                        if (curInstance.useRoom !== false) {
                            curInstance.skillId = evData.roomSkillId;
                            curInstance.skillName = evData.roomSkillName;
                            break
                        }
                    }
                }
                that._stateManager.startAdvancedAvailabilityFlow(evData)
            })
        }
    },
    create: function() {
        this._super();
        this._stateManager.run()
    }
});
lpTagConfig.tagPlugins.LPInvitation = lpTagConfig.tagPlugins.LPEngagement.extend({
    _ctor: function(data) {
        var LPButtonViewObject = lpTagConfig.ovr && lpTagConfig.ovr.tagPlugins && lpTagConfig.ovr.tagPlugins.LPButtonView ? lpTagConfig.tagPlugins.ovr.LPInvitationView: lpTagConfig.tagPlugins.LPInvitationView, view = new LPButtonViewObject();
        this._super(view, data);
        var that = this, showStateCallback = function(repAvStateData) {
            that._view.showState(repAvStateData)
        };
        var StateManager = lpTagConfig.ovr && lpTagConfig.ovr.tagPlugins && lpTagConfig.ovr.tagPlugins.LPInvitationStateManager ? lpTagConfig.ovr.tagPlugins.LPInvitationStateManager: lpTagConfig.tagPlugins.LPInvitationStateManager;
        this._stateManager = new StateManager(data.states, showStateCallback, {
            id: data.skillId,
            name: data.skillName
        }, data.availability)
    },
    start: function(stateManagerConf) {
        this._stateManagerConf = stateManagerConf;
        this._super()
    },
    create: function() {
        this._super();
        this._stateManager.run(this._stateManagerConf)
    }
});
lpTagConfig.tagPlugins.buttonsManager = {
    start: function() {
        lpTagConfig.tagPlugins.api.utils.registerEvent('LPCHAT_BUTTON_STATE_DISPLAYED', function(evName, evData) {
            evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
            if (evData.showData.repAvKey !== lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.NONE) {
                lpTagConfig.tagPlugins.api.utils.reportImpression(evData)
            }
        });
        this._handleInPageButtons()
    },
    _handleInPageButtons: function() {
        var pluginJSON, i;
        for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
            pluginJSON = lpTagConfig.tagPlugins.jsonsArr[i];
            if (this._isInPage(pluginJSON)) {
                this._showButton(pluginJSON)
            }
        }
    },
    getInstanceFromStartPage: function(engagementId) {
        var retObject = null;
        lpTagConfig.utils.log('in _getInstanceFromStartPage for Button ' + engagementId, 'INFO');
        var firedEvents = lpTagConfig.utils.hasFired('LP_ADVANCED_AVAILABILITY');
        if (firedEvents.length > 0) {
            for (var i = 0; i < firedEvents.length; i++) {
                lpTagConfig.utils.log('StartPage already fired for engagementId: ' + firedEvents[i].data.engagementId, 'INFO');
                if (firedEvents[i].data.type !== 'invitation') {
                    if (engagementId === firedEvents[i].data.engagementId) {
                        retObject = {
                            'instanceId': firedEvents[i].data.instanceId,
                            'repAv': firedEvents[i].data.repAv
                        }
                    }
                }
            }
        } else {
            return null
        }
        return retObject
    },
    _isInPage: function(pluginJSON) {
        return lpTagConfig.utils.getObjById(pluginJSON.layout.position.divId) || pluginJSON.type === 'sticky_button'
    },
    _showButton: function(pluginJSON) {
        var newTagPlugin;
        newTagPlugin = lpTagConfig.tagPlugins.factory(pluginJSON);
        lpTagConfig.tagPlugins.pluginsArr.push(newTagPlugin);
        lpTagConfig.tagPlugins.inPagePluginsArr[newTagPlugin._data.id] = newTagPlugin._data;
        newTagPlugin.start()
    }
};
lpTagConfig.tagPlugins.invitationsManager = {
    CONSTANTS: {
        INVITATION_REJECTED: 'LPChatIR',
        ACCEPTED_INVITATION_SEGMENTS: 'LPChatAIS',
        INVITATION_TYPES: {
            SEGMENT: 3,
            AGENT: 4,
            SERVER: 5
        },
        VISITOR_STATUS: {
            CHAT_STATUS: 'CHAT_STATUS',
            ENGAGE_STATUS: 'ENGAGE_STATUS',
            REJECT_STATUS: 'REJECT_STATUS'
        }
    },
    _utils: lpTagConfig.utils,
    _startedInvitationTrigger: null,
    _lpInvitationStarted: null,
    _lpInvitationShown: null,
    _lpInvitationAccepted: null,
    _lpInvitationTimeout: null,
    _currentShownInvitationShowData: null,
    _currentServerInvitationOnPage: null,
    _currentInvitation: null,
    start: function() {
        this._initCurInvitationState();
        this._registerInvitationListeners();
        this._handleSegmentedInvitation();
        this._handleInviteToChat();
        if (lpTagConfig.utils.isLEChatAAEnabled()) {
            this._handleFiredEventsInStartPage()
        }
    },
    getCurrentInvitation: function() {
        return this._currentInvitation
    },
    _getPluginByInstance: function(instanceId) {
        var curPluginJSON, curInstance, i, j;
        for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
            curPluginJSON = lpTagConfig.tagPlugins.jsonsArr[i];
            for (j = 0; j < curPluginJSON.states.length; j++) {
                curInstance = curPluginJSON.states[j];
                if (curInstance.id === instanceId) {
                    return {
                        plugin: curPluginJSON,
                        instance: curInstance
                    }
                }
            }
        }
        return null
    },
    _handleFiredEventsInStartPage: function() {
        lpTagConfig.utils.log('in _handleFiredEventsInStartPage for Invitation', 'INFO');
        var firedEvents = lpTagConfig.utils.hasFired('LP_ADVANCED_AVAILABILITY'), curEventData;
        if (firedEvents.length > 0) {
            for (var i = 0; i < firedEvents.length; i++) {
                curEventData = firedEvents[i].data;
                lpTagConfig.utils.log('StartPage already fired for invitationId: ' + curEventData.engagementId, 'INFO');
                if (curEventData.type === 'invitation') {
                    lpTagConfig.tagPlugins.api.utils.publishEvent('LPCHAT_SHOW_INVITATION_ADVANCED_AVAILABILITY', curEventData)
                }
            }
        }
    },
    _showInvitationHandlerAdvancedAvailability: function(instanceId) {
        if (!this._isNewServerInvitationCurrentlyShown()) {
            var retObject = this._getPluginByInstance(instanceId);
            if (retObject !== null) {
                this._showInvitation(retObject.plugin, retObject.instance);
                this._setNewServerInvitationCurrentlyShown(true)
            } else {
                lpTagConfig.utils.log('Unable to get pluginJSON for instanceId: ' + instanceId, 'ERROR')
            }
        }
    },
    _initCurInvitationState: function() {
        this._setInvitationStarted(false);
        this._setInvitationAccepted(false);
        this._setInvitationTimeout(false)
    },
    _handleSegmentedInvitation: function() {
        if (!lpTagConfig.utils.isLEChatAAEnabled()) {
            var that = this;
            this._utils.registerEvent('LPCHAT_FEEDS_SAMPLED', function(evName, evData) {
                evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
                var pluginJSON, instanceToShow, i;
                if (that._isInvitationRejected() || that._isInvitationCurrentlyShown() || that._isChatRequested()) {
                    return 
                }
                for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
                    pluginJSON = lpTagConfig.tagPlugins.jsonsArr[i];
                    if (pluginJSON.type === 'invitation') {
                        instanceToShow = that._getSegmentedInstance(pluginJSON, evData.segments);
                        if (instanceToShow !== null && evData.repAv && that._isAvailabilityRepAvOnline(instanceToShow, evData.repAv)) {
                            that._showSegmentedInvitation(pluginJSON, instanceToShow);
                            break
                        }
                    }
                }
            });
            lpTagConfig.tagPlugins.feedsManager.publishFeeds()
        }
    },
    _showSegmentedInvitation: function(invitationJSON, instanceToShow) {
        var that = this;
        this._utils.publishEvent('LPCHAT_INVITATION_STARTED', {
            trigger: this.CONSTANTS.INVITATION_TYPES.SEGMENT
        });
        if (instanceToShow.delay) {
            setTimeout(function() {
                if (!that._isOldInvitationCurrentlyShown()&&!that._isChatRequested()) {
                    that._showInvitation(invitationJSON, instanceToShow)
                }
            }, instanceToShow.delay * 1000)
        } else {
            this._showInvitation(invitationJSON, instanceToShow)
        }
    },
    _addAcceptedInvitationSegment: function(segmentHash) {
        var acceptedInvitationSegments = this._getAcceptedInvitationSegments();
        if (!this._isAcceptedInvitationSegment(segmentHash)) {
            acceptedInvitationSegments.push(segmentHash)
        }
        this._utils.setCookie({
            name: this.CONSTANTS.ACCEPTED_INVITATION_SEGMENTS,
            value: acceptedInvitationSegments.join(',')
        })
    },
    _getAcceptedInvitationSegments: function() {
        var acceptedInvitationSegmentsStr = this._utils.getCookie(this.CONSTANTS.ACCEPTED_INVITATION_SEGMENTS);
        return acceptedInvitationSegmentsStr ? acceptedInvitationSegmentsStr.split(',') : []
    },
    _isAcceptedInvitationSegment: function(segmentHash) {
        var acceptedInvitationSegments = this._getAcceptedInvitationSegments();
        for (var i = 0; i < acceptedInvitationSegments.length; i++) {
            if (acceptedInvitationSegments[i] === segmentHash) {
                return true
            }
        }
        return false
    },
    _showInvitation: function(pluginJSON, instanceToShow) {
        var stateManagerConf = {
            instanceToShow: instanceToShow
        };
        this._currentShownInvitationShowData = {
            engagementId: pluginJSON.id,
            instanceId: instanceToShow.id,
            segmentId: instanceToShow.segmentId,
            skillId: instanceToShow.skillId
        };
        this._currentInvitation = lpTagConfig.tagPlugins.factory(pluginJSON);
        lpTagConfig.tagPlugins.pluginsArr.push(this._currentInvitation);
        lpTagConfig.tagPlugins.inPagePluginsArr[this._currentInvitation._data.id] = this._currentInvitation._data;
        this._currentInvitation.start(stateManagerConf)
    },
    _getSegmentedInstance: function(pluginJSON, segmentsFeedData) {
        var instanceToShow = null, curInstance, curSegment, i, j;
        for (i = 0; i < pluginJSON.states.length; i++) {
            curInstance = pluginJSON.states[i];
            if (curInstance.segmentHash === 'all'&&!this._isAcceptedInvitationSegment(curInstance.segmentHash)) {
                instanceToShow = curInstance
            } else if (segmentsFeedData) {
                for (j = 0; j < segmentsFeedData.length; j++) {
                    curSegment = segmentsFeedData[j];
                    if (curInstance.segmentHash === curSegment&&!this._isAcceptedInvitationSegment(curSegment)) {
                        instanceToShow = curInstance
                    }
                }
            }
            if (instanceToShow) {
                break
            }
        }
        return instanceToShow
    },
    _isAvailabilityRepAvOnline: function(instance, repAvFeed) {
        var availabilityId = lpTagConfig.tagPlugins.StateManager.prototype._getAvailabilityId(instance.skillId, lpTagConfig.tagPlugins.feedsManager.feeds.repAv.availability.getAvailabilityTypeId(instance.availability.type), instance.availability.seconds);
        return repAvFeed[availabilityId].state === lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.STATES.ONLINE
    },
    _handleInviteToChat: function() {
        var that = this;
        this._utils.registerEvent('LPCHAT_INVITE_TO_CHAT', function(evName, evData) {
            evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
            that._inviteToChatHandler(evData.invitations[0].id)
        })
    },
    _inviteToChatHandler: function(defaultInvitationId) {
        var pluginJSON, i;
        for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
            pluginJSON = lpTagConfig.tagPlugins.jsonsArr[i];
            if (pluginJSON.id === defaultInvitationId&&!this._isInvitationCurrentlyShown()) {
                this._utils.publishEvent('LPCHAT_INVITATION_STARTED', {
                    trigger: this.CONSTANTS.INVITATION_TYPES.AGENT
                });
                this._showInvitation(lpTagConfig.tagPlugins.jsonsArr[i], pluginJSON.states[pluginJSON.states.length - 1]);
                break
            }
        }
    },
    _registerInvitationListeners: function() {
        this._registerOldInvitationListeners();
        this._registerNewInvitationListeners()
    },
    _registerOldInvitationListeners: function() {
        var that = this;
        if (this._utils.hasFired('LP_INV_START').length > 0) {
            this._initCurInvitationState();
            this._setInvitationStarted(true)
        }
        if (this._utils.hasFired('LP_INV_SHOWN').length > 0) {
            this._setInvitationShown(true);
            this._setLPVisitorStatus(this.CONSTANTS.VISITOR_STATUS.ENGAGE_STATUS)
        }
        this._utils.registerEvent('LP_INV_START', function() {
            that._initCurInvitationState();
            that._setInvitationStarted(true)
        });
        this._utils.registerEvent('LP_INV_SHOWN', function() {
            that._setInvitationShown(true);
            that._setLPVisitorStatus(that.CONSTANTS.VISITOR_STATUS.ENGAGE_STATUS)
        });
        this._utils.registerEvent('LP_INV_DECLINE', function() {
            that._setInvitationRejected(true)
        });
        this._utils.registerEvent('LP_INV_TIMEOUT', function() {
            that._setInvitationTimeout(true)
        })
    },
    _registerNewInvitationListeners: function() {
        var that = this, inviteToChatEventData;
        if (this._utils.hasFired('LPCHAT_INVITE_TO_CHAT').length > 0) {
            inviteToChatEventData = that._utils.hasFired('LPCHAT_INVITE_TO_CHAT')[0].evData || that._utils.hasFired('LPCHAT_INVITE_TO_CHAT')[0].data;
            that._inviteToChatHandler(inviteToChatEventData.invitations[0].id)
        }
        this._utils.registerEvent('LPCHAT_INVITATION_STARTED', function(evName, evData) {
            evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
            that._initCurInvitationState();
            that._setInvitationStarted(true);
            that._startedInvitationTrigger = evData.trigger
        });
        this._utils.registerEvent('LPCHAT_INVITATION_DISPLAYED', function(evName, evData) {
            evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
            var params, value;
            if (that._startedInvitationTrigger === that.CONSTANTS.INVITATION_TYPES.SEGMENT) {
                value = 1
            }
            if (that._startedInvitationTrigger === that.CONSTANTS.INVITATION_TYPES.SERVER) {
                value = 2
            }
            params = [{
                key: 'ibs',
                value: value
            }
            ];
            that._reportInvitationShown(params);
            that._reportInvitationImpression(evData);
            that._setInvitationShown(true);
            that._setLPVisitorStatus(that.CONSTANTS.VISITOR_STATUS.ENGAGE_STATUS);
            that._handleInvitationTimeout(that._currentInvitation._data.timeout)
        });
        this._utils.registerEvent('LPCHAT_ENGAGEMENT_ACCEPTED', function(evName, evData) {
            evData = lpTagConfig.utils.getDataFromFiredEvent(evName, evData);
            if (evData.engagementType === 'invitation') {
                that._setInvitationAccepted(true);
                that._setLPVisitorStatus(that.CONSTANTS.VISITOR_STATUS.CHAT_STATUS);
                that._addAcceptedInvitationSegment(evData.showData.currentRepAvStateData.segmentHash)
            }
            if (!evData.currentRepAvStateData.behaviour) {
                that._setChatRequested()
            }
        });
        this._utils.registerEvent('LPCHAT_INVITATION_REJECTED', function() {
            that._reportInvitationRejected();
            that._setInvitationRejected(true);
            that._setNewServerInvitationCurrentlyShown(false)
        });
        if (lpTagConfig.utils.isLEChatAAEnabled()) {
            this._utils.registerEvent('LPCHAT_SHOW_INVITATION_ADVANCED_AVAILABILITY', function(evData) {
                if (that._isChatRequested()) {
                    return 
                }
                var curEngagement, curInstance, data, i;
                for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
                    curEngagement = lpTagConfig.tagPlugins.jsonsArr[i];
                    if (curEngagement.id === evData.engagementId) {
                        data = curEngagement;
                        break
                    }
                }
                if (data.useRoom !== false) {
                    data.skillId = evData.roomSkillId;
                    data.skillName = evData.roomSkillName
                }
                for (i = 0; i < data.states.length; i++) {
                    curInstance = data.states[i];
                    if (curInstance.id === evData.instanceId) {
                        if (curInstance.useRoom !== false) {
                            curInstance.skillId = evData.roomSkillId;
                            curInstance.skillName = evData.roomSkillName;
                            break
                        }
                    }
                }
                that._utils.publishEvent('LPCHAT_INVITATION_STARTED', {
                    trigger: that.CONSTANTS.INVITATION_TYPES.SERVER
                });
                that._showInvitationHandlerAdvancedAvailability(evData.instanceId)
            })
        }
    },
    _reportInvitationShown: function(params) {
        var cParam = new hcArrayStorage();
        lpMTagConfig.inviteShown = true;
        cParam = lpMTag.lpSetCallParams('mTagInviteShown');
        cParam.add('channel', 'web');
        cParam.add('t', '1');
        if (params) {
            for (var i = 0; i < params.length; i++) {
                cParam.add(params[i].key, params[i].value)
            }
        }
        lpMTag.mtagAddToQueue(lpMTag.lpURL, cParam, null, false)
    },
    _reportInvitationImpression: function(evData) {
        lpTagConfig.tagPlugins.api.utils.reportImpression(evData)
    },
    _handleInvitationTimeout: function(timeout) {
        var that = this, timeoutSecs;
        if (timeout) {
            timeoutSecs = timeout;
            setTimeout(function() {
                if (that._isNewInvitationCurrentlyShown()) {
                    that._currentInvitation.getView().close();
                    that._setInvitationTimeout(true);
                    that._setNewServerInvitationCurrentlyShown(false);
                    var invitationConstTypes = that.CONSTANTS.INVITATION_TYPES, t = that._startedInvitationTrigger === invitationConstTypes.AGENT ? invitationConstTypes.AGENT: invitationConstTypes.SEGMENT;
                    lpTagConfig.tagPlugins.api.utils.reportTimeOutEvent(timeout / 1000, 'web', t);
                    that._utils.log('invitation timeout', 'INFO')
                }
            }, timeoutSecs)
        }
    },
    _isInvitationStarted: function() {
        return this._lpInvitationStarted
    },
    _isInvitationShown: function() {
        return this._lpInvitationShown
    },
    _isInvitationAccepted: function() {
        return this._lpInvitationAccepted
    },
    _isInvitationRejected: function() {
        if (lpTagConfig.utils.isLEChatAAEnabled()) {
            return false
        }
        return this._utils.getCookie(this.CONSTANTS.INVITATION_REJECTED) === 'true'
    },
    _isInvitationTimeout: function() {
        return this._lpInvitationTimeout
    },
    _isInvitationCurrentlyShown: function() {
        return this._isNewInvitationCurrentlyShown() || this._isOldInvitationCurrentlyShown()
    },
    _isNewInvitationCurrentlyShown: function() {
        return this._isInvitationStarted()&&!this._isInvitationAccepted()&&!this._isInvitationRejected()&&!this._isInvitationTimeout()
    },
    _isNewServerInvitationCurrentlyShown: function() {
        return this._currentServerInvitationOnPage
    },
    _isChatRequested: function() {
        return this._lpChatRequested
    },
    _setNewServerInvitationCurrentlyShown: function(isOnPage) {
        return this._currentServerInvitationOnPage = isOnPage
    },
    _isOldInvitationCurrentlyShown: function() {
        return lpMTag.lpVisitorStatus === 'ENGAGE_STATUS'
    },
    _setInvitationStarted: function(isInvitationStarted) {
        this._lpInvitationStarted = isInvitationStarted
    },
    _setInvitationShown: function(isInvitationShown) {
        this._lpInvitationShown = isInvitationShown
    },
    _setInvitationAccepted: function(isInvitationAccepted) {
        this._lpInvitationAccepted = isInvitationAccepted
    },
    _setLPVisitorStatus: function(status) {
        lpMTag.lpVisitorStatus = status
    },
    _setInvitationRejected: function(isInvitationRejected) {
        this._utils.setCookie({
            name: this.CONSTANTS.INVITATION_REJECTED,
            value: isInvitationRejected.toString()
        })
    },
    _setInvitationTimeout: function(isInvitationTimeout) {
        this._lpInvitationTimeout = isInvitationTimeout
    },
    _setChatRequested: function() {
        this._lpChatRequested = true
    },
    _reportInvitationRejected: function() {
        var cParam = new hcArrayStorage();
        lpMTagConfig.inviteShown = false;
        this._setLPVisitorStatus(this.CONSTANTS.VISITOR_STATUS.REJECT_STATUS);
        cParam = lpMTag.lpSetCallParams('mTagRejectChat');
        cParam.add('channel', 'web');
        if (this._startedInvitationTrigger === this.CONSTANTS.INVITATION_TYPES.AGENT) {
            cParam.add('t', this.CONSTANTS.INVITATION_TYPES.AGENT)
        } else {
            cParam.add('t', this.CONSTANTS.INVITATION_TYPES.SEGMENT)
        }
        if (this._currentShownInvitationShowData.instanceId) {
            cParam.add('leInsId', this._currentShownInvitationShowData.instanceId)
        }
        if (this._currentShownInvitationShowData.skillId) {
            cParam.add('skId', this._currentShownInvitationShowData.skillId)
        }
        if (this._currentShownInvitationShowData.segmentId) {
            cParam.add('leSegId', this._currentShownInvitationShowData.segmentId)
        }
        if (this._currentShownInvitationShowData.engagementId) {
            cParam.add('leEngId', this._currentShownInvitationShowData.engagementId)
        }
        lpMTag.mtagAddToQueue(lpMTag.lpURL, cParam, null, false);
        this._currentShownInvitationShowData = null;
        return false
    }
};
lpTagConfig.tagPlugins.factory = function(data) {
    var tagPlugin;
    switch (data.type) {
    case 'button':
    case 'sticky_button':
        tagPlugin = new lpTagConfig.tagPlugins.LPButton(data);
        break;
    case 'invitation':
        tagPlugin = new lpTagConfig.tagPlugins.LPInvitation(data);
        break;
    default:
        throw new Error('tagPlugin type does not exist', 'ERROR');
        break
    }
    return tagPlugin
};
lpTagConfig.tagPlugins.start = function() {
    try {
        lpTagConfig.tagPlugins.transformJsons();
        lpTagConfig.tagPlugins.preConfigFeeds();
        lpTagConfig.utils.registerToBrowserEvents();
        lpTagConfig.tagPlugins.feedsManager.run({});
        lpTagConfig.tagPlugins.buttonsManager.start();
        lpTagConfig.tagPlugins.runOnVisitorExist()
    } catch (e) {
        lpTagConfig.utils.log(e.message, 'ERROR')
    }
};
lpTagConfig.tagPlugins.runOnVisitorExist = function() {
    var startManagers = function() {
        lpTagConfig.tagPlugins.invitationsManager.start()
    };
    if (lpMTagConfig.isVisitor) {
        startManagers()
    } else {
        lpMTagConfig.ifVisitorCode = lpMTagConfig.ifVisitorCode || [];
        lpMTagConfig.ifVisitorCode.push(startManagers)
    }
};
lpTagConfig.tagPlugins.preConfigFeeds = function() {
    if (lpTagConfig.utils.isLEChatAAEnabled()) {
        lpTagConfig.tagPlugins.setFeedRegistration(['advancedAvailability'])
    } else {
        lpTagConfig.tagPlugins.setFeedRegistration(['segments', 'repAv'])
    }
};
lpTagConfig.tagPlugins.setFeedRegistration = function(feedNames) {
    var i;
    for (i = 0; i < feedNames.length; i++) {
        var currentFeed = lpTagConfig.tagPlugins.feedsManager.feeds[feedNames[i]];
        if (currentFeed !== null) {
            currentFeed.setShouldRegister(true);
            lpTagConfig.utils.log('Registering to feed: ' + feedNames[i], 'INFO')
        } else {
            lpTagConfig.utils.log('feed: ' + feedNames[i] + ' is null', 'ERROR')
        }
    }
};
lpTagConfig.tagPlugins.transformJsons = function() {
    var curPluginJSON, curInstance, i, j;
    for (i = 0; i < lpTagConfig.tagPlugins.jsonsArr.length; i++) {
        curPluginJSON = lpTagConfig.tagPlugins.jsonsArr[i];
        curPluginJSON.skillId = curPluginJSON.skillId||-1;
        curPluginJSON.timeout = curPluginJSON.timeout || 120000;
        curPluginJSON.availability = curPluginJSON.availability || {
            type: lpTagConfig.tagPlugins.feedsManager.feeds.repAv.constants.AVAILABILITY.REGULAR.type,
            seconds: 0
        };
        lpTagConfig.tagPlugins.feedsManager.feeds.repAv.availability.add({
            skillId: curPluginJSON.skillId,
            availability: curPluginJSON.availability
        });
        curPluginJSON.states = curPluginJSON.states || [];
        for (j = 0; j < curPluginJSON.states.length; j++) {
            curInstance = curPluginJSON.states[j];
            lpTagConfig.tagPlugins.replaceImagePathsFromInstance(curInstance);
            curInstance.skillId = curInstance.skillId || curPluginJSON.skillId||-1;
            curInstance.skillName = curInstance.skillName || curPluginJSON.skillName;
            curInstance.timeout = curInstance.timeout || curPluginJSON.timeout;
            curInstance.useRoom = typeof curInstance.useRoom !== 'undefined' ? curInstance.useRoom : curPluginJSON.useRoom;
            curInstance.segmentId = curInstance.segmentId || '';
            curInstance.segmentHash = curInstance.segmentHash || 'all';
            curInstance.availability = curInstance.availability || curPluginJSON.availability;
            lpTagConfig.tagPlugins.feedsManager.feeds.repAv.availability.add({
                skillId: curInstance.skillId,
                availability: curInstance.availability
            })
        }
    }
};
lpTagConfig.tagPlugins.replaceImagePathsFromInstance = function(instance) {
    var i, elements, buttons, closeButtons, images, repAvState;
    if (instance) {
        for (var repAvKey in instance.repAv) {
            repAvState = instance.repAv[repAvKey];
            elements = repAvState.presentation.elements || {};
            buttons = elements.buttons || [];
            closeButtons = elements.closeButtons || [];
            images = elements.images || [];
            if (repAvState.presentation.background.image) {
                repAvState.presentation.background.image = lpTagConfig.utils.updateUrlPath(repAvState.presentation.background.image)
            }
            for (i = 0; i < buttons.length; i++) {
                if (buttons[i].css.backgroundImage) {
                    buttons[i].css.backgroundImage = lpTagConfig.utils.updateUrlPath(buttons[i].css.backgroundImage)
                }
            }
            for (i = 0; i < closeButtons.length; i++) {
                closeButtons[i].imageUrl = lpTagConfig.utils.updateUrlPath(closeButtons[i].imageUrl)
            }
            for (i = 0; i < images.length; i++) {
                images[i].imageUrl = lpTagConfig.utils.updateUrlPath(images[i].imageUrl)
            }
        }
    }
};

lpTagConfig.tagPlugins.jsonsArr.push({
    "id": "66651396_46975d0e-8357-4c15-a7cd-56b14ec9be6e",
    "name": "vDeck Support",
    "description": "vDeck Support",
    "advancedAvailabilityAndConditions": false,
    "layout": {
        "position": {
            "divId": "LP_DIV_1409848614893",
            "divIdAnchor": "lastChild",
            "type": "anchor"
        },
        "size": {
            "height": 88,
            "width": 171
        }
    },
    "states": [{
        "id": "666513969454305093",
        "name": "default",
        "segmentId": "",
        "repAv": {
            "1": {
                "presentation": {
                    "background": {
                        "color": "#ffffff",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "14",
                                "top": "48",
                                "zIndex": "1015",
                                "backgroundColor": "#ff9500",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_s.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#818181",
                                "borderWidth": "0",
                                "borderRadius": "5"
                            },
                            "text": "Message us"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "97",
                                "top": "1",
                                "zIndex": "1005"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/female5.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Tahoma,Geneva,sans-serif",
                                "fontSize": "14",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0590be",
                                "left": "14",
                                "top": "17",
                                "zIndex": "1010"
                            },
                            "text": "Need Help?"
                        }
                        ]
                    },
                    "size": {
                        "height": 88,
                        "width": 171
                    }
                }
            },
            "2": {
                "presentation": {
                    "background": {
                        "color": "#ffffff",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "14",
                                "top": "48",
                                "zIndex": "1030",
                                "backgroundColor": "#ff9500",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_s.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#818181",
                                "borderWidth": "0",
                                "borderRadius": "5"
                            },
                            "text": "Chat LIve"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "98",
                                "top": "0",
                                "zIndex": "1020"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/female5.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Tahoma,Geneva,sans-serif",
                                "fontSize": "14",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0590be",
                                "left": "14",
                                "top": "17",
                                "zIndex": "1025"
                            },
                            "text": "Need Help?"
                        }
                        ]
                    },
                    "size": {
                        "height": 88,
                        "width": 171
                    }
                }
            },
            "3": {
                "presentation": {
                    "background": {
                        "color": "#ffffff",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "14",
                                "top": "48",
                                "zIndex": "1045",
                                "backgroundColor": "#ff9500",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_s.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#818181",
                                "borderWidth": "0",
                                "borderRadius": "5"
                            },
                            "text": "Back shortly"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "97",
                                "top": "1",
                                "zIndex": "1035"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/female5.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Tahoma,Geneva,sans-serif",
                                "fontSize": "16",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0590be",
                                "left": "14",
                                "top": "17",
                                "zIndex": "1040"
                            },
                            "text": "Live Help"
                        }
                        ]
                    },
                    "size": {
                        "height": 88,
                        "width": 171
                    }
                }
            },
            "none": {
                "presentation": {
                    "background": {
                        "color": "#FFFFFF",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "images": [{
                            "css": {
                                "left": "0",
                                "top": "0",
                                "zIndex": "1050"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/default171X88.gif"
                        }
                        ]
                    },
                    "size": {
                        "height": 88,
                        "width": 171
                    }
                }
            }
        },
        "overrideConditions": false,
        "isDefault": true,
        "overrideSkills": false,
        "delay": 0
    }
    ],
    "skillName": "vDeck Support",
    "skillId": "10",
    "useRoom": false,
    "timeout": 0,
    "availability": {
        "type": "regular",
        "seconds": 0
    },
    "type": "button"
});
lpTagConfig.tagPlugins.jsonsArr.push({
    "id": "66651396_9d595fb5-cc77-4f83-92eb-abf98674f586",
    "name": "Homestead Support",
    "description": "Homestead Support",
    "advancedAvailabilityAndConditions": false,
    "layout": {
        "position": {
            "divId": "LP_DIV_1414160288169",
            "divIdAnchor": "lastChild",
            "type": "anchor"
        },
        "size": {
            "height": 140,
            "width": 200
        }
    },
    "states": [{
        "id": "666513961735310255",
        "name": "default",
        "segmentId": "",
        "repAv": {
            "1": {
                "presentation": {
                    "background": {
                        "color": "#ffffff",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "14",
                                "top": "48",
                                "zIndex": "1015",
                                "backgroundColor": "#ff9500",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_s.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#818181",
                                "borderWidth": "0",
                                "borderRadius": "5"
                            },
                            "text": "Chat: Offline"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "97",
                                "top": "1",
                                "zIndex": "1005"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/female5.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Tahoma,Geneva,sans-serif",
                                "fontSize": "14",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0590be",
                                "left": "14",
                                "top": "17",
                                "zIndex": "1010"
                            },
                            "text": "Need Help?"
                        }
                        ]
                    },
                    "size": {
                        "height": 140,
                        "width": 200
                    }
                }
            },
            "2": {
                "presentation": {
                    "background": {
                        "color": "#fcfcfc",
                        "image": "url({deliveryBasePath}/images/styles/toaster_bigdots_grad_white_l.png)"
                    },
                    "border": {
                        "color": "#666666",
                        "width": 1,
                        "radius": 6
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "31",
                                "top": "104",
                                "zIndex": "1030",
                                "backgroundColor": "#ff9500",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_s.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#818181",
                                "borderWidth": "0",
                                "borderRadius": "5"
                            },
                            "text": "Chat Live"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "114",
                                "top": "3",
                                "zIndex": "1020"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/female5.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Tahoma,Geneva,sans-serif",
                                "fontSize": "32",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0590be",
                                "left": "21",
                                "top": "7",
                                "zIndex": "1025"
                            },
                            "text": "Hello"
                        }, {
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "20",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#1A1A1A",
                                "left": "17",
                                "top": "46",
                                "zIndex": "1035"
                            },
                            "text": "How may"
                        }, {
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "20",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#1A1A1A",
                                "left": "14",
                                "top": "72",
                                "zIndex": "1040"
                            },
                            "text": "I help you?"
                        }
                        ]
                    },
                    "size": {
                        "height": 138,
                        "width": 198
                    }
                }
            },
            "3": {
                "presentation": {
                    "background": {
                        "color": "#ffffff",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "14",
                                "top": "48",
                                "zIndex": "1055",
                                "backgroundColor": "#ff9500",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_s.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#818181",
                                "borderWidth": "0",
                                "borderRadius": "5"
                            },
                            "text": "Back shortly"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "97",
                                "top": "1",
                                "zIndex": "1045"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/female5.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Tahoma,Geneva,sans-serif",
                                "fontSize": "16",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0590be",
                                "left": "14",
                                "top": "17",
                                "zIndex": "1050"
                            },
                            "text": "Live Help"
                        }
                        ]
                    },
                    "size": {
                        "height": 140,
                        "width": 200
                    }
                }
            },
            "none": {
                "presentation": {
                    "background": {
                        "color": "#FFFFFF",
                        "image": ""
                    },
                    "border": {
                        "width": 0,
                        "radius": 15
                    },
                    "elements": {
                        "images": [{
                            "css": {
                                "left": "0",
                                "top": "0",
                                "zIndex": "1060"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/default171X88.gif"
                        }
                        ]
                    },
                    "size": {
                        "height": 140,
                        "width": 200
                    }
                }
            }
        },
        "overrideConditions": true,
        "isDefault": true,
        "overrideSkills": false,
        "delay": 0
    }
    ],
    "skillName": "HomeStead Support",
    "skillId": "12",
    "useRoom": false,
    "timeout": 0,
    "availability": {
        "type": "regular",
        "seconds": 0
    },
    "type": "button"
});
/* draft */
/* draft */
lpTagConfig.tagPlugins.jsonsArr.push({
    "id": "66651396_65d9d071-e4d7-44df-86ca-7366e8c412ec",
    "name": "vDeck Proactive",
    "description": "vDeck Proactive",
    "advancedAvailabilityAndConditions": false,
    "layout": {
        "position": {
            "type": "fixed"
        },
        "size": {
            "height": 290,
            "width": 206
        }
    },
    "states": [{
        "id": "666513964289084813",
        "name": "default",
        "segmentId": "66651396_53b50698-a886-42e0-b98c-77ae862ca4e1",
        "segmentHash": "373b8f2b4fa1bb88b39758191c0aaae",
        "repAv": {
            "2": {
                "presentation": {
                    "background": {
                        "color": "#fcfcfc",
                        "image": ""
                    },
                    "border": {
                        "style": "solid",
                        "color": "#787878",
                        "width": 2,
                        "radius": 4
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#f2ffc9",
                                "left": "7",
                                "top": "93",
                                "zIndex": "1010",
                                "backgroundColor": "#7ca500",
                                "backgroundImage": "",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#00e025",
                                "borderWidth": "1",
                                "borderRadius": "5"
                            },
                            "text": "Start Chat"
                        }
                        ],
                        "closeButtons": [{
                            "css": {
                                "left": "179",
                                "top": "6",
                                "zIndex": "2015"
                            },
                            "imageUrl": "{deliveryBasePath}/images/general/x.png"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "50",
                                "top": "70",
                                "zIndex": "1005"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/woman4.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "15",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#666666",
                                "left": "12",
                                "top": "28",
                                "zIndex": "1015"
                            },
                            "text": "Chat live with an online representative"
                        }
                        ]
                    },
                    "size": {
                        "height": 286,
                        "width": 202
                    }
                }
            }
        },
        "overrideConditions": true,
        "isDefault": true,
        "overrideSkills": false,
        "overlay": {
            "invitationType": "fixed",
            "left": 0,
            "location": "middle center",
            "top": 0
        },
        "delay": 8
    }
    ],
    "skillName": "vDeck Proactive",
    "skillId": "11",
    "useRoom": false,
    "timeout": 30000,
    "availability": {
        "type": "regular",
        "seconds": 0
    },
    "type": "invitation"
});
lpTagConfig.tagPlugins.jsonsArr.push({
    "id": "66651396_e584c4c6-816e-4d7c-9c65-df525b79af85",
    "name": "Default",
    "description": "",
    "advancedAvailabilityAndConditions": false,
    "layout": {
        "position": {
            "type": "fixed"
        },
        "size": {
            "height": 290,
            "width": 206
        }
    },
    "states": [{
        "id": "666513963032372559",
        "name": "default",
        "segmentId": "none",
        "segmentHash": "334c4a4c42fdb79d7ebc3e73b517e6f8",
        "repAv": {
            "2": {
                "presentation": {
                    "background": {
                        "color": "#f5f5f5",
                        "image": ""
                    },
                    "border": {
                        "style": "solid",
                        "color": "#787878",
                        "width": 2,
                        "radius": 4
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "12",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#f2ffc9",
                                "left": "9",
                                "top": "97",
                                "zIndex": "1020",
                                "backgroundColor": "#7ca500",
                                "backgroundImage": "",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#00e025",
                                "borderWidth": "1",
                                "borderRadius": "5"
                            },
                            "text": "Start Chat"
                        }
                        ],
                        "closeButtons": [{
                            "css": {
                                "left": "3",
                                "top": "268",
                                "zIndex": "2025"
                            },
                            "imageUrl": "{deliveryBasePath}/images/general/x.png"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "55",
                                "top": "79",
                                "zIndex": "1005"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/woman4.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "10",
                                "fontWeight": "",
                                "fontStyle": "",
                                "color": "#878787",
                                "left": "22",
                                "top": "271",
                                "zIndex": "1010"
                            },
                            "text": "No Thanks"
                        }, {
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "25",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#6b95aa",
                                "left": "13",
                                "top": "7",
                                "zIndex": "1015"
                            },
                            "text": "Need Help?"
                        }, {
                            "css": {
                                "fontFamily": "Arial, Aharoni, Verdana",
                                "fontSize": "15",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#666666",
                                "left": "11",
                                "top": "40",
                                "zIndex": "1025"
                            },
                            "text": "Chat live with an online representative"
                        }
                        ]
                    },
                    "size": {
                        "height": 286,
                        "width": 202
                    }
                }
            }
        },
        "overrideConditions": true,
        "isDefault": true,
        "overrideSkills": false,
        "skillName": "--Default Skill--",
        "skillId": "",
        "useRoom": false,
        "overlay": {
            "invitationType": "fixed",
            "left": 0,
            "location": "middle center",
            "top": 0
        },
        "delay": 10
    }
    ],
    "skillName": "HomeStead Proactive",
    "skillId": "13",
    "useRoom": false,
    "timeout": 15000,
    "availability": {
        "type": "regular",
        "seconds": 0
    },
    "type": "invitation"
});
lpTagConfig.tagPlugins.jsonsArr.push({
    "id": "66651396_cee874a2-7c03-4881-b3c0-094a5c2a5747",
    "name": "Homestead Proactive",
    "description": "Homestead Proactive",
    "advancedAvailabilityAndConditions": false,
    "layout": {
        "position": {
            "type": "fixed"
        },
        "size": {
            "height": 240,
            "width": 360
        }
    },
    "states": [{
        "id": "666513960332223304",
        "name": "default",
        "segmentId": "66651396_48d5d885-c52f-43ac-b28f-3258f0a48afc",
        "segmentHash": "71673889c696a6aafd172140e378869f",
        "repAv": {
            "2": {
                "presentation": {
                    "background": {
                        "color": "#ededed",
                        "image": ""
                    },
                    "border": {
                        "style": "solid",
                        "color": "#ffffff",
                        "width": 4,
                        "radius": 4
                    },
                    "elements": {
                        "buttons": [{
                            "css": {
                                "fontFamily": "'Trebuchet MS',Helvetica,sans-serif",
                                "fontSize": "20",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#ffffff",
                                "left": "217",
                                "top": "169",
                                "zIndex": "1015",
                                "backgroundColor": "#00b1cc",
                                "backgroundImage": "url({deliveryBasePath}/images/styles/button_grad_40_soft.png)",
                                "backgroundRepeat": "repeat-x",
                                "backgroundPosition": "bottom left",
                                "borderStyle": "solid",
                                "borderColor": "#5e6d7d",
                                "borderWidth": "1",
                                "borderRadius": "6"
                            },
                            "text": "Start Chat"
                        }
                        ],
                        "closeButtons": [{
                            "css": {
                                "left": "-13",
                                "top": "220",
                                "zIndex": "2020"
                            },
                            "imageUrl": "{deliveryBasePath}/images/general/close.png"
                        }
                        ],
                        "images": [{
                            "css": {
                                "left": "13",
                                "top": "8",
                                "zIndex": "1020"
                            },
                            "imageUrl": "{deliveryBasePath}/images/assets/chatIconLarge.png"
                        }
                        ],
                        "labels": [{
                            "css": {
                                "fontFamily": "'Trebuchet MS',Helvetica,sans-serif",
                                "fontSize": "19",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#02407b",
                                "left": "105",
                                "top": "10",
                                "zIndex": "1005"
                            },
                            "text": "Welcome to Homestead Sales! What can we help you with today?"
                        }, {
                            "css": {
                                "fontFamily": "'Trebuchet MS',Helvetica,sans-serif",
                                "fontSize": "19",
                                "fontWeight": "bold",
                                "fontStyle": "",
                                "color": "#0e5886",
                                "left": "14",
                                "top": "96",
                                "zIndex": "1010"
                            },
                            "text": "Our online representatives are here to help! Click here to chat now."
                        }
                        ]
                    },
                    "size": {
                        "height": 232,
                        "width": 352
                    }
                }
            }
        },
        "overrideConditions": true,
        "isDefault": true,
        "overrideSkills": false,
        "overlay": {
            "invitationType": "floating",
            "left": 0,
            "location": "middle center",
            "top": 0
        },
        "delay": 5
    }
    ],
    "skillName": "HomeStead Proactive",
    "skillId": "13",
    "useRoom": false,
    "timeout": 120000,
    "availability": {
        "type": "regular",
        "seconds": 0
    },
    "type": "invitation"
});
lpTagConfig.tagPlugins.conf = {
    "serverProps": {
        "leChatImpressionEventLogEnabled": true,
        "leChatDeliveryBasePath": "va.content.lpsnmedia.net"
    },
    "siteGeneralProps": {
        "leChatRepAvUpdate": 2,
        "leChatInstanceUpdate": 3
    },
    "siteFeatures": {
        "isMSModernUI": false,
        "leChatAAEnabled": false
    }
}
lpTagConfig.tagPlugins.start();


