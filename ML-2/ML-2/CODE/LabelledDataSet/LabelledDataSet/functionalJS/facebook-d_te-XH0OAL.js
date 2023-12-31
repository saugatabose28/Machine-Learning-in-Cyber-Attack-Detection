/*!CK:579699091!*/
/*1415600704,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["Q8BTQ"]);
}

__d("SpotlightViewerLoggingEvents", [], function(a, b, c, d, e, f) {
    e.exports = {
        LOADED: "loaded",
        LOADING: "loading",
        ERROR: "error",
        ABORT: "abort",
        OPEN_BEGIN: "open_begin",
        OPEN_COMPLETE: "open_complete",
        CLOSE_BEGIN: "close_begin",
        CLOSE_COMPLETE: "close_complete",
        PAGE_BEGIN: "page_begin",
        PAGE_COMPLETE: "page_complete",
        PHOTO_CHANGE_BEGIN: "photo_change_begin",
        PHOTO_CHANGE_COMPLETE: "photo_change_complete",
        DATA_FETCH_BEGIN: "data_fetch_begin",
        DATA_FETCH_COMPLETE: "data_fetch_complete",
        PHOTO_FETCH: "photo_fetch"
    };
}, null);
__d("ImageUtils", ["UserAgent_DEPRECATED"], function(a, b, c, d, e, f, g) {
    var h = {
        hasLoaded: function(i) {
            if (i.naturalWidth !== undefined) {
                return i.complete && i.width !== 0;
            } else if (i.height == 20 && i.width == 20 && i.complete) {
                return false;
            } else if (i.complete === undefined && g.webkit() < 500) {
                var j = new Image();
                j.src = i.src;
                return j.complete;
            }
            return i.complete;
        }
    };
    e.exports = h;
}, null);
__d("PhotoEverstoreLogger", ["Event", "AsyncRequest", "copyProperties", "ImageUtils"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        BATCH_WINDOW_MS: 500,
        storedLog: []
    };
    function l() {}
    i(l, {
        _log: function(n) {
            k.storedLog.push(n);
            if (k.storedLog.length == 1)
                setTimeout(m, k.BATCH_WINDOW_MS);
        },
        logImmediately: function(n) {
            l._log(n);
        },
        registerForLogging: function(n) {
            var o = document.getElementById(n);
            if (o != null)
                if (j.hasLoaded(o)) {
                    l._log(o.src);
                } else 
                    g.listen(o, 'load', function(event) {
                        l._log(o.src);
                    });
        }
    });
    function m() {
        var n = k.storedLog;
        k.storedLog = [];
        var o = JSON.stringify(n);
        new h().setURI('/ajax/photos/logging/everstore_logging.php').setData({
            loggedUrls: o
        }).setMethod('POST').setOption('suppressErrorHandlerWarning', true).setOption('suppressErrorAlerts', true).send();
    }
    e.exports = l;
}, null);
__d("PhotosConst", [], function(a, b, c, d, e, f) {
    var g = {
        VIEWER_PERMALINK: 0,
        VIEWER_SNOWLIFT: 6,
        VIEWER_VAULTBOX: 8,
        VIEWER_SNOWFLAKE: 14,
        VIEWER_COMPOSER: 16,
        VIEWER_PERMALINK_STRING: 'permalink',
        VIEWER_SNOWLIFT_STRING: 'snowlift',
        VIEWER_VAULTBOX_STRING: 'vaultbox',
        BULK_EDITOR: 3,
        BULK_EDITOR_REACT: 15,
        FLASH_UPLOADER: 4,
        HTML5_UPLOADER: 10,
        SIZE_NORMAL: 'n',
        PIC_NORMAL_FBX_SIZE: 180
    };
    e.exports = g;
}, null);
__d("PhotoViewerImage", ["PhotoEverstoreLogger", "URI", "Vector"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        "use strict";
        this._hiResDimensions = k.hiResDimensions && i.deserialize(k.hiResDimensions);
        this._normalDimensions = k.normalDimensions && i.deserialize(k.normalDimensions);
        this._info = k.info;
        this._video = k.video;
        this._shouldLog = k.everstoreLogThis;
        this._hiResSrc = k.hiResSrc;
        this._normalSrc = k.normalSrc;
        this._thumbSrc = k.thumbSrc;
        this._isInverted = false;
        this._data = k;
    }
    j.prototype.getURIString = function() {
        "use strict";
        return h(this._info.permalink).getUnqualifiedURI().toString();
    };
    j.prototype.hasHiResDimensions = function() {
        "use strict";
        return !!this._hiResDimensions;
    };
    j.prototype.getHiResDimensions = function() {
        "use strict";
        return this._hiResDimensions;
    };
    j.prototype.getNormalDimensions = function() {
        "use strict";
        return this._normalDimensions;
    };
    j.prototype.getHiResSrc = function() {
        "use strict";
        return this._hiResSrc;
    };
    j.prototype.getNormalSrc = function() {
        "use strict";
        return this._normalSrc;
    };
    j.prototype.getThumbSrc = function() {
        "use strict";
        return this._thumbSrc;
    };
    j.prototype.getInfo = function() {
        "use strict";
        return this._info;
    };
    j.prototype.getPermalink = function() {
        "use strict";
        return this._info.permalink;
    };
    j.prototype.getHighestResSrc = function() {
        "use strict";
        return this._hiResSrc || this._normalSrc;
    };
    j.prototype.preload = function(k) {
        "use strict";
        var l;
        if (this.getHighestResSrc())
            if (k&&!this._resource) {
                this._resource = new Image();
                this._resource.src = this.getHighestResSrc();
                l = this._resource.src;
                if (this._shouldLog)
                    g.logImmediately(this._resource.src);
            } else if (!k&&!this._small) {
                this._small = new Image();
                this._small.src = this._normalSrc || this._hiResSrc;
                l = this._small.src;
                if (this._shouldLog)
                    g.logImmediately(this._small.src);
            }
        return l;
    };
    j.prototype.setNormalDimensions = function(k, l) {
        "use strict";
        this._normalDimensions = new i(k, l);
    };
    j.prototype.setHiResDimensions = function(k, l) {
        "use strict";
        this._hiResDimensions = new i(k, l);
    };
    j.prototype.invertDimensions = function() {
        "use strict";
        if (this.hasHiResDimensions())
            this._hiResDimensions = new i(this._hiResDimensions.y, this._hiResDimensions.x);
        this._normalDimensions = new i(this._normalDimensions.y, this._normalDimensions.x);
        this._isInverted=!this._isInverted;
    };
    j.prototype.copy = function() {
        "use strict";
        return new j(this._data);
    };
    e.exports = j;
}, null);
__d("PhotoStreamCache", ["DOM", "HTML", "PhotoEverstoreLogger", "PhotosConst", "PhotoViewerImage", "Rect", "UIPagelet", "URI", "Vector", "copyProperties", "createArrayFrom", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    function s() {
        "use strict";
    }
    s.prototype.init = function(t, u, v, w, x) {
        "use strict";
        this.version = t;
        this.pageletName = u;
        this.pageletRootID = v;
        this.tagSuggestionMode = x;
        this.bufferSize = s.BUFFER_SIZE;
        this.fullBucketSize = s.FULL_BUCKET_SIZE;
        this.initError = false;
        this.isActive = true;
        this.usesOpaqueCursor = false;
        this.usesNonCircularPhotoSet = false;
        this.reachedLeftEnd = false;
        this.reachedRightEnd = false;
        this.leftLock = false;
        this.rightLock = false;
        this.useAjaxPipe = true;
        this.logger = w;
        this.viewAsUser = null;
        this.reset();
    };
    s.prototype.setViewAs = function(t) {
        "use strict";
        this.viewAsUser = t;
    };
    s.prototype.isInViewAsMode = function() {
        "use strict";
        return !!this.viewAsUser;
    };
    s.prototype.getViewAsUserId = function() {
        "use strict";
        return this.viewAsUser;
    };
    s.prototype.getUsesOpaqueCursor = function() {
        "use strict";
        return this.usesOpaqueCursor;
    };
    s.prototype.isNonCircularPhotoSet = function() {
        "use strict";
        return this.usesNonCircularPhotoSet;
    };
    s.prototype.setReachedLeftEnd = function() {
        "use strict";
        this.reachedLeftEnd = true;
    };
    s.prototype.setReachedRightEnd = function() {
        "use strict";
        this.reachedRightEnd = true;
    };
    s.prototype.hasReachedLeftEnd = function() {
        "use strict";
        return this.reachedLeftEnd;
    };
    s.prototype.hasReachedRightEnd = function() {
        "use strict";
        return this.reachedRightEnd;
    };
    s.prototype.nonCircularPhotoSetCanPage = function(t) {
        "use strict";
        if (!this.isNonCircularPhotoSet())
            return true;
        if (t < 0)
            return this.getCursorPos() ||!this.hasReachedLeftEnd();
        if (t > 0)
            return (this.getLength() - 1 != this.getCursorPos()) ||!this.hasReachedRightEnd();
        return true;
    };
    s.prototype.setUseAjaxPipe = function(t) {
        "use strict";
        this.useAjaxPipe = t;
    };
    s.prototype.reset = function() {
        "use strict";
        this.cache = {
            image: {},
            extra: {},
            html: {}
        };
        this.fbidList = [];
        this.loaded = false;
        this.allLoaded = false;
        this.permalinkMap = {};
        this.position = 0;
        this.totalCount = null;
        this.firstCursor = null;
        this.firstCursorIndex = null;
        this.firstOpaqueCursor = null;
    };
    s.prototype.waitForInitData = function() {
        "use strict";
        this.fbidList.push(s.INIT_PLACEHOLDER);
    };
    s.prototype.destroy = function() {
        "use strict";
        this.reset();
        this.isActive = false;
    };
    s.prototype.isLoaded = function() {
        "use strict";
        return this.loaded;
    };
    s.prototype.canPage = function() {
        "use strict";
        if (!this.isLoaded())
            return false;
        if (this.totalCount !== null)
            return this.totalCount > 1;
        if (this.usesNonCircularPhotoSet)
            return true;
        return this.getLength() > 1;
    };
    s.prototype.errorInCurrent = function() {
        "use strict";
        if (this.initError) {
            return true;
        } else if (!this.isLoaded())
            return false;
        return this.checkErrorAt(this.getCursor());
    };
    s.prototype.getLength = function() {
        "use strict";
        return this.fbidList.length;
    };
    s.prototype.getPhotoSet = function() {
        "use strict";
        return this.photoSetQuery.set;
    };
    s.prototype.getPhotoSetQuery = function() {
        "use strict";
        return this.photoSetQuery;
    };
    s.prototype.getCurrentImageData = function() {
        "use strict";
        return this.getImageData(this.getCursor());
    };
    s.prototype.addViewAsToURI = function(t) {
        "use strict";
        var u = n(t);
        if (this.isInViewAsMode())
            u.addQueryData({
                viewas: this.getViewAsUserId()
            });
        return u;
    };
    s.prototype.getOpaqueCursor = function(t) {
        "use strict";
        if (this.getImageData(t)) {
            if (this.version === j.VIEWER_VAULTBOX)
                return this.getImageData(t).getInfo().opaquecursor;
            return this.getImageData(t).info.opaquecursor;
        }
        if (t == this.firstCursor)
            return this.firstOpaqueCursor;
        return null;
    };
    s.prototype.getImageData = function(t) {
        "use strict";
        var u = this.getCacheContent(t, s.IMAGE_DATA);
        if (u)
            u.info.permalink = this.addViewAsToURI(u.info.permalink);
        return u;
    };
    s.prototype.getCurrentHtml = function() {
        "use strict";
        return this.getCacheContent(this.getCursor(), s.HTML);
    };
    s.prototype.getCurrentExtraData = function() {
        "use strict";
        return this.getCacheContent(this.getCursor(), s.EXTRA);
    };
    s.prototype.getCacheContent = function(t, u) {
        "use strict";
        if (!t || t === s.ERROR_ID || t === s.INIT_PLACEHOLDER)
            return null;
        return this.cache[u][t];
    };
    s.prototype.getCursorPos = function() {
        "use strict";
        return this.position;
    };
    s.prototype.getCursor = function() {
        "use strict";
        if (this.position >= 0 && this.position < this.getLength())
            return this.fbidList[this.position];
        return null;
    };
    s.prototype.getCursorAt = function(t) {
        "use strict";
        return this.fbidList[t];
    };
    s.prototype.getCursorForURI = function(t) {
        "use strict";
        return this.permalinkMap[t];
    };
    s.prototype.calculatePositionForMovement = function(t) {
        "use strict";
        var u = this.position + t;
        if (this.allLoaded) {
            var v = this.getLength();
            u = (v + u%v)%v;
        }
        return u;
    };
    s.prototype.isValidMovement = function(t) {
        "use strict";
        if (!this.isLoaded() ||!this.canPage())
            return false;
        var u = this.calculatePositionForMovement(t);
        return this.getCursor() > 0 || (u >= 0 && u < this.getLength());
    };
    s.prototype.moveCursor = function(t) {
        "use strict";
        if (!this.isValidMovement(t))
            return;
        this.position = this.calculatePositionForMovement(t);
        if (t !== 0)
            this.loadMoreIfNeccessary(t > 0);
    };
    s.prototype.checkErrorAt = function(t) {
        "use strict";
        if (!this.isLoaded())
            return false;
        if (t === s.ERROR_ID)
            return true;
        return false;
    };
    s.prototype.getRelativeMovement = function(t) {
        "use strict";
        for (var u = 0; u < this.getLength(); u++)
            if (this.fbidList[u] == t)
                return u - this.position;
        return null;
    };
    s.prototype.preloadImages = function(t) {
        "use strict";
        var u, v, w = this.getLength(), x = this.cache.image, y = s.BUFFER_SIZE;
        if (w > y * 2) {
            u = (this.position + w - y%w)%w;
            v = (this.position + y)%w;
        } else {
            u = 0;
            v = w - 1;
        }
        while (u != v) {
            var z, aa = this.fbidList[u], ba = t && t(x[aa]);
            if (this.version === j.VIEWER_VAULTBOX) {
                z = x[aa] && x[aa].preload(ba);
            } else if (x[aa] && x[aa].url)
                if (ba&&!x[aa].resource) {
                    x[aa].resource = new Image();
                    x[aa].resource.src = x[aa].url;
                    z = x[aa].url;
                    if (x[aa].everstoreLogThis === true)
                        i.logImmediately(x[aa].resource.src);
                } else if (!ba&&!x[aa].small) {
                    x[aa].small = new Image();
                    x[aa].small.src = x[aa].smallurl || x[aa].url;
                    z = x[aa].small.src;
                    if (x[aa].everstoreLogThis === true)
                        i.logImmediately(x[aa].small.src);
                }
            if (this.logger && z)
                this.logger.log(z);
            u = (u + 1)%w;
        }
    };
    s.prototype.loadMoreIfNeccessary = function(t) {
        "use strict";
        if (this.allLoaded || (t && this.rightLock) || (!t && this.leftLock))
            return;
        var u = t ? 1: - 1, v = this.position + this.bufferSize * u;
        if (v < 0&&!this.checkErrorAt(this.getEndCursor(false))) {
            this.leftLock = true;
            this.fetch(this.fullBucketSize, false);
        } else if (v > this.getLength()&&!this.checkErrorAt(this.getEndCursor(true))) {
            this.rightLock = true;
            this.fetch(this.fullBucketSize, true);
        }
    };
    s.prototype.getEndCursor = function(t) {
        "use strict";
        return t ? this.fbidList[this.getLength() - 1] : this.fbidList[0];
    };
    s.prototype.calculateRelativeIndex = function(t, u, v) {
        "use strict";
        if (!this.totalCount)
            return null;
        var w = this.fbidList.indexOf(u), x = this.fbidList.indexOf(v);
        if (w===-1 || x===-1)
            return null;
        var y = x - w;
        return (t + y + this.totalCount)%this.totalCount;
    };
    s.prototype.calculateDistance = function(t, u) {
        "use strict";
        var v = this.fbidList.indexOf(t), w = this.fbidList.indexOf(u);
        if (v===-1 || w===-1)
            return null;
        return (w - v + this.getLength())%this.getLength();
    };
    s.prototype.fetch = function(t, u) {
        "use strict";
        var v = this.getEndCursor(u), w = p({
            cursor: v,
            version: this.version,
            end: this.getEndCursor(!u),
            fetchSize: u ? t: - 1 * t,
            relevant_count: this.relevantCount,
            opaqueCursor: this.getOpaqueCursor(v),
            tagSuggestionMode: this.tagSuggestionMode
        }, this.photoSetQuery);
        if (this.isInViewAsMode())
            w.viewas = this.getViewAsUserId();
        if (this.totalCount && this.firstCursorIndex !== null) {
            w.total = this.totalCount;
            w.cursorIndex = this.calculateRelativeIndex(this.firstCursorIndex, this.firstCursor, v);
        }
        var x = r(this.pageletRootID);
        if (!x) {
            x = g.create('div', {
                id: this.pageletRootID
            });
            g.appendContent(document.body, x);
        }
        m.loadFromEndpoint(this.pageletName, x, w, {
            usePipe: this.useAjaxPipe,
            automatic: true,
            jsNonblock: true,
            crossPage: true
        });
        if (!this.useAjaxPipe)
            this.setUseAjaxPipe(true);
    };
    s.prototype.storeToCache = function(t) {
        "use strict";
        var u = {};
        if (!this.isActive)
            return u;
        if ('error' in t) {
            this.processErrorResult(t.error);
            u.error = true;
            return u;
        }
        if ('init' in t) {
            this.processInitResult(t.init);
            u.init = {
                logids: t.init.logids,
                fbid: t.init.fbid,
                loggedin: t.init.loggedin,
                fromad: t.init.fromad
            };
        }
        if ('image' in t) {
            this.processImageResult(t.image);
            u.image = true;
        }
        if ('data' in t) {
            this.processDataResult(t.data);
            u.data = true;
        }
        return u;
    };
    s.prototype.processInitResult = function(t) {
        "use strict";
        if (this.loaded)
            return;
        this.usesOpaqueCursor = t.usesopaquecursor;
        this.usesNonCircularPhotoSet = t.isnoncircularphotoset;
        this.loaded = true;
        this.photoSetQuery = t.query;
        if (t.bufferSize)
            this.bufferSize = t.bufferSize;
        if (t.fullBucketSize)
            this.fullBucketSize = t.fullBucketSize;
        if (this.fbidList.length === 0) {
            this.fbidList.push(t.fbid);
            this.rightLock = true;
        } else {
            var u = this.fbidList.indexOf(s.INIT_PLACEHOLDER);
            if (u!=-1)
                this.fbidList[u] = t.fbid;
        }
        this.firstCursor = t.fbid;
        this.firstOpaqueCursor = t.opaquecursor;
        if ('initIndex' in t && 'totalCount' in t) {
            this.firstCursorIndex = t.initIndex;
            this.totalCount = t.totalCount;
        }
        if (this.version == j.VIEWER_PERMALINK)
            this.fetch(s.INIT_BUCKET_SIZE, true);
    };
    s.prototype.processImageResult = function(t) {
        "use strict";
        for (var u in t) {
            if (u === this.firstCursor && t[u].everstoreLogThis)
                i.logImmediately(t[u].url);
            if (this.version === j.VIEWER_VAULTBOX) {
                var v = t[u];
                this.cache.image[u] = new k(v);
                this.permalinkMap[this.cache.image[u].getURIString()] = u;
            } else {
                this.cache.image[u] = t[u];
                if (t[u].dimensions)
                    this.cache.image[u].dimensions = o.deserialize(t[u].dimensions);
                if (t[u].originalDimensions)
                    this.cache.image[u].originalDimensions = o.deserialize(t[u].originalDimensions);
                if (t[u].smalldims)
                    this.cache.image[u].smalldims = o.deserialize(t[u].smalldims);
                this.permalinkMap[n(t[u].info.permalink).getUnqualifiedURI().toString()] = u;
            }
        }
    };
    s.prototype.attachToFbidsList = function(t, u, v) {
        "use strict";
        if (this.allLoaded)
            return;
        if (u===-1) {
            for (var w = t.length - 1; w >= 0; w--) {
                this.fbidList.unshift(t[w]);
                this.position++;
            }
            this.leftLock = false;
        } else {
            for (var x = 0; x < t.length; x++)
                this.fbidList.push(t[x]);
            this.rightLock = false;
        }
        if (v)
            this.setAllLoaded();
    };
    s.prototype.setAllLoaded = function() {
        "use strict";
        this.allLoaded = true;
        if (this.getCursor() === null)
            this.position = this.calculatePositionForMovement(0);
    };
    s.prototype.processDataResult = function(t) {
        "use strict";
        for (var u in t) {
            if (!this.cache.html[u])
                this.cache.html[u] = {};
            for (var v in t[u].html) {
                var w = t[u].html[v];
                if (typeof w === 'string')
                    w = h(w).getRootNode();
                this.cache.html[u][v] = q(w.childNodes);
            }
            if (!('extra' in t[u])) {
                this.cache.extra[u] = null;
                continue;
            }
            this.cache.extra[u] = {
                tagRects: {}
            };
            if (!Array.isArray(t[u].extra.tagRects))
                for (var x in t[u].extra.tagRects)
                    if (t[u].extra.tagRects[x])
                        this.cache.extra[u].tagRects[x] = l.deserialize(t[u].extra.tagRects[x]);
            Object.keys(t[u].extra).forEach(function(y) {
                if (y == 'tagRects')
                    return;
                this.cache.extra[u][y] = t[u].extra[y];
            }.bind(this));
        }
    };
    s.prototype.processErrorResult = function(t) {
        "use strict";
        if (!this.isLoaded()) {
            this.initError = true;
            return;
        }
        var u = t.side, v = [s.ERROR_ID];
        this.attachToFbidsList(v, u);
    };
    s.prototype.setTotalCount = function(t) {
        "use strict";
        this.totalCount = t;
    };
    s.prototype.setFirstCursorIndex = function(t) {
        "use strict";
        this.firstCursorIndex = t;
    };
    p(s, {
        ERROR: 'error',
        HTML: 'html',
        IMAGE_DATA: 'image',
        EXTRA: 'extra',
        BUFFER_SIZE: 3,
        INIT_BUCKET_SIZE: 4,
        FULL_BUCKET_SIZE: 12,
        ERROR_ID: - 1,
        INIT_PLACEHOLDER: 1
    });
    e.exports = s;
}, null);
__d("XPhotosetSearchPivotControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/search-pivot\/photoset\/", {
        fbid: {
            type: "Int",
            required: true
        },
        tags: {
            type: "IntToIntMap"
        }
    });
}, null);
__d("PhotosetSearchPivotData", ["AsyncRequest", "Deferred", "PhotoStreamCache", "XPhotosetSearchPivotControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = /^(perm:)?tag:(\d+)/, l = {}, m = {
        fetch: function(n, o) {
            if (!(n in l)) {
                var p = l[n] = new h(), q = (new j()).setInt('fbid', n);
                if (o) {
                    var r = {};
                    o.fbidList.forEach(function(t) {
                        var u = o.getCacheContent(t, i.EXTRA);
                        if (u)
                            Object.keys(u.tagRects).forEach(function(v) {
                                if (k.test(v)) {
                                    var w = RegExp.$2;
                                    if (w in r) {
                                        r[w]++;
                                    } else 
                                        r[w] = 1;
                                }
                            });
                    });
                    q.setIntToIntMap('tags', r);
                }(new g()).setURI(q.getURI()).setHandler(function(t) {
                    p.succeed(t.getPayload());
                }).setErrorHandler(function(t) {
                    return p.fail(t);
                }).setAllowCrossPageTransition(true).send();
            }
            var s = new h();
            l[n].addCallback(function(t) {
                return s.succeed(t);
            });
            l[n].addErrback(function(t) {
                delete l[n];
                s.fail(t);
            });
            return s;
        }
    };
    e.exports = m;
}, null);
__d("PhotoLogger", ["Event", "BanzaiScuba", "SpotlightViewerLoggingEvents", "SubscriptionsHandler"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this.$PhotoLogger0 = l;
        this.$PhotoLogger1 = {};
    }
    k.prototype.log = function(l) {
        "use strict";
        if (!this.$PhotoLogger1[l]) {
            this.$PhotoLogger2(l);
            this.$PhotoLogger1[l] = true;
        }
    };
    k.prototype.$PhotoLogger2 = function(l) {
        "use strict";
        this.$PhotoLogger3(i.LOADING, {
            uri: l
        });
        var m = new j(), n = new Image();
        m.addSubscriptions(g.listen(n, 'load', function() {
            this.$PhotoLogger3(i.LOADED, {
                uri: l
            });
            m.release();
        }.bind(this)), g.listen(n, 'error', function() {
            this.$PhotoLogger3(i.ERROR, {
                uri: l
            });
            m.release();
        }.bind(this)), g.listen(n, 'abort', function() {
            this.$PhotoLogger3(i.ABORT, {
                uri: l
            });
            m.release();
        }.bind(this)));
        n.src = l;
    };
    k.prototype.logEvent = function(l) {
        "use strict";
        this.$PhotoLogger3(l);
    };
    k.prototype.$PhotoLogger3 = function(l, m) {
        "use strict";
        var n = new h('photos_client_loading', null, {
            addBrowserFields: true
        });
        n.addNormal('event', l);
        n.addNormal('viewer', this.$PhotoLogger0);
        for (var o in m)
            n.addNormal(o, m[o]);
        n.post();
    };
    e.exports = k;
}, null);
__d("PhotoSessionLog", ["AsyncRequest", "Run", "Vector", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    function k() {}
    j(k, {
        UNKNOWN: 0,
        ESC: 1,
        X: 2,
        OUTSIDE: 3,
        UNLOAD: 4,
        NAVIGATE: 5,
        AGGREGATE: 6,
        LEAVE: 7,
        PERMALINK: 0,
        SNOWLIFT: 6,
        SNOWDOWN: 13,
        AGGREGATION_COUNT: 20,
        set: null,
        time: null,
        views: 0,
        fbidList: [],
        details: {},
        width: 0,
        height: 0,
        first: false,
        last: false,
        logIds: false,
        version: null,
        source: null,
        buttonLikes: 0,
        pagingAction: '',
        cycle: false,
        endOfRelevant: false,
        relevantCount: 0,
        initLogging: function(l) {
            this.set = null;
            this.time = new Date();
            this.views = 0;
            this.hiResLoads = 0;
            this.fullScreenViews = {};
            this.first = true;
            this.last = false;
            this.logIds = false;
            this.version = l;
            this.buttonLikes = 0;
            this.pagingAction = '';
            this.cycle = false;
            this.endOfRelevant = false;
            this.relevantCount = 0;
            this.panoramaClicks = 0;
            this.panoramaImpressions = 0;
            if (l === k.SNOWLIFT) {
                var m = i.getViewportDimensions();
                this.width = m.x;
                this.height = m.y;
            }
        },
        setLogFbids: function(l) {
            this.logIds = l;
        },
        setPhotoSet: function(l) {
            this.set = l;
        },
        addButtonLike: function() {
            this.buttonLikes++;
        },
        setPagingAction: function(l) {
            this.pagingAction = l;
        },
        setCycle: function(l) {
            this.cycle = l;
        },
        setEndOfRelevant: function(l) {
            this.endOfRelevant = l;
        },
        setRelevantCount: function(l) {
            this.relevantCount = l;
        },
        setEndMetrics: function(l) {
            this.endMetrics = l;
        },
        setSource: function(l) {
            this.source = l;
        },
        addPanoramaClick: function() {
            this.panoramaClicks++;
        },
        addPanoramaImpression: function() {
            this.panoramaImpressions++;
        },
        addPhotoView: function(l, m, n) {
            if (this.logIds && this.views >= this.AGGREGATION_COUNT)
                this.logPhotoViews(this.AGGREGATE);
            this.views++;
            if (l)
                this.fbidList.push([l.fbid, l.owner, Date.now()]);
            if (m)
                this.hiResLoads++;
            if (n)
                this.fullScreenViews[l.fbid] = true;
        },
        logEnterFullScreen: function(l) {
            this.fullScreenViews[l] = true;
        },
        addDetailData: function(l, m) {
            if (!this.details[l])
                this.details[l] = {
                    t: m.num_tags,
                    l: m.has_location,
                    c: m.has_caption,
                    cm: m.comment_count,
                    lk: m.like_count,
                    w: m.width,
                    h: m.height,
                    ad: '{}',
                    p: this.pagingAction
                };
        },
        updateAdData: function(l, m) {
            if (this.details[l])
                this.details[l].ad = JSON.stringify(m);
        },
        logPhotoViews: function(l) {
            if (!this.views)
                return;
            if (l != this.AGGREGATE)
                this.last = true;
            var m = {
                set: this.set,
                time: new Date() - this.time,
                fbids: this.logIds ? this.fbidList: [],
                details: this.logIds ? this.details: {},
                first: this.first,
                last: this.last,
                close: l ? l: this.UNKNOWN,
                button_likes: this.buttonLikes,
                version: this.version,
                endmetric: this.endMetrics,
                cycle: this.cycle,
                end_relev: this.endOfRelevant,
                relev_count: this.relevantCount,
                source: this.source,
                panorama_clicks: this.panoramaClicks,
                panorama_impressions: this.panoramaImpressions
            };
            if (this.version === k.SNOWLIFT) {
                var n = i.getViewportDimensions();
                m.width = n.x || this.width;
                m.height = n.y || this.height;
                if (this.hiResLoads > 0)
                    m.hires_loads = this.hiResLoads;
                if (this.last) {
                    var o = Object.keys(this.fullScreenViews).length;
                    if (o > 0)
                        m.fullscreen = o;
                }
            }
            new g().setURI('/ajax/photos/logging/session_logging.php').setAllowCrossPageTransition(true).setOption('asynchronous', (l != k.UNLOAD)).setOption('suppressErrorHandlerWarning', true).setData(m).send();
            this.views = 0;
            this.hiResLoads = 0;
            this.fbidList = [];
            this.details = {};
            this.first = false;
            this.buttonLikes = 0;
            if (this.last) {
                this.set = null;
                this.logIds = false;
                this.fullScreenViews = {};
            }
        }
    });
    h.onUnload(function() {
        k.logPhotoViews(k.UNLOAD);
    });
    h.onLeave(function() {
        k.logPhotoViews(k.LEAVE);
    });
    e.exports = k;
}, null);
__d("PhotosUtils", ["copyProperties", "Vector"], function(a, b, c, d, e, f, g, h) {
    function i() {}
    g(i, {
        getNearestBox: function(j, k) {
            var l = Infinity, m = null;
            for (var n in j) {
                var o = j[n];
                if (o.contains(k)) {
                    var p = k.distanceTo(o.getCenter());
                    if (p < l) {
                        l = p;
                        m = n;
                    }
                }
            }
            return m;
        },
        absoluteToNormalizedPosition: function(j, k) {
            var l = h.getElementPosition(j), m = h.getElementDimensions(j), n = k.sub(l).mul(100 / m.x, 100 / m.y);
            n.domain = 'pure';
            return n;
        },
        normalizedToAbsolutePosition: function(j, k) {
            var l = h.getElementPosition(j), m = h.getElementDimensions(j), n = k.mul(m.x / 100, m.y / 100).add(l);
            n.domain = 'document';
            return n;
        },
        isFacebox: function(j) {
            return j.match(/^face:/);
        },
        isTag: function(j) {
            return j.match(/^tag:/);
        }
    });
    e.exports = i;
}, null);
__d("PhotoPermalinkURI", [], function(a, b, c, d, e, f) {
    var g = {
        isValid: function(h) {
            return g.parse(h) !== null;
        },
        parse: function(h) {
            if (this.isValidLegacy(h)) {
                var i = h.getQueryData();
                if (i.fbid)
                    return {
                        photo_id: i.fbid,
                        set_token: i.set
                    };
                if (i.id && i.pid)
                    return {
                        photo_id: i.id + ':' + i.pid,
                        set_token: i.set
                    };
                return null;
            }
            var j = h.getPath();
            if (j[j.length - 1] === '/')
                j = j.substring(0, j.length - 1);
            var k = j.split('/');
            if (k.length >= 3 && k[2] === 'photos')
                if (k.length === 4 && /^\d+$/.exec(k[3]) !== null) {
                    return {
                        photo_id: k[3],
                        set_token: null
                    };
                } else if (k.length === 5 && /^\d+$/.exec(k[4]) !== null)
                    return {
                        photo_id: k[4],
                        set_token: k[3]
                    };
            return null;
        },
        isValidLegacy: function(h) {
            var i = h.getPath();
            if (i[i.length - 1] === '/')
                i = i.substring(0, i.length - 1);
            if (i === '/photo.php' || i === '/force_photo/photo.php' || i === '/photo' || i === '/force_photo/photo/index.php' || i === '/photo/index.php' || i === '/force_photo/photo')
                return true;
            return false;
        }
    };
    e.exports = g;
}, null);
__d("PhotoTagSearchPivotLogger", ["Banzai"], function(a, b, c, d, e, f, g) {
    var h = {};
    g.subscribe(g.SHUTDOWN, function() {
        Object.keys(h).forEach(function(l) {
            var m = h[l];
            Object.keys(m).forEach(function(n) {
                g.post('photo_tag_search_pivot', {
                    source: l,
                    action: n,
                    count: m[n]
                });
            });
        });
    });
    var i = /^(perm:)?tag:/, j, k = {
        logImpression: function(l, m) {
            var n = l in h ? h[l]: (h[l] = {});
            n[m] = m in n ? n[m] + 1 : 1;
        },
        logImageImpression: function(l, m, n) {
            if (j !== m) {
                if (n.some(function(o) {
                    return i.test(o);
                }))
                    this.logImpression(l, 'image_impression');
                j = m;
            }
        },
        logPivotImpression: function(l, m) {
            if (i.test(m))
                this.logImpression(l, 'pivot_impression');
        },
        logShowMorePhotos: function() {
            this.logImpression('photoset', 'show_more_photos');
        },
        logHideMorePhotos: function() {
            this.logImpression('photoset', 'hide_more_photos');
        },
        logSuggestMorePhotos: function() {
            this.logImpression('photoset', 'suggest_more_photos');
        },
        logMorePhotosNavigation: function(l) {
            g.post('photo_tag_search_pivot', {
                source: 'photoset',
                action: 'more_photos_search',
                query: l,
                count: 1
            });
        }
    };
    e.exports = k;
}, null);
__d("PhotosetSearchPivot.react", ["LeftRight.react", "PhotoTagSearchPivotLogger", "PhotosetSearchPivotData", "React", "XUISpinner.react", "XUIText.react", "cx", "fbt", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = j.createClass({
        displayName: "PhotosetSearchPivotItem",
        propTypes: {
            normalized: j.PropTypes.string,
            title: j.PropTypes.string,
            uri: j.PropTypes.string,
            images: j.PropTypes.array
        },
        onClick: function() {
            h.logMorePhotosNavigation(this.props.normalized);
        },
        render: function() {
            return (j.createElement("div", {
                className: "_25r"
            }, j.createElement("a", {
                onClick: this.onClick,
                href: this.props.uri,
                className: "_25t _3-8t"
            }, j.createElement("div", {
                className: "_25u"
            }, j.createElement("div", {
                className: "_25v _25w",
                style: {
                    backgroundImage: 'url(' + this.props.images[0].uri + ')'
                }
            }), j.createElement("div", {
                className: "_25x"
            }, j.createElement("div", {
                className: "_25y"
            }, j.createElement("div", {
                className: "_25z"
            }), j.createElement("div", {
                className: "_26r"
            }, j.createElement("div", {
                className: "_273 _25w",
                style: {
                    backgroundImage: 'url(' + this.props.images[1].uri + ')'
                }
            }))), j.createElement("div", {
                className: "_274"
            }, j.createElement("div", {
                className: "_25z"
            }), j.createElement("div", {
                className: "_26r"
            }, j.createElement("div", {
                className: "_273 _25w",
                style: {
                    backgroundImage: 'url(' + this.props.images[2].uri + ')'
                }
            }))))), j.createElement(l, {
                display: "block",
                className: "_27f _2pi4"
            }, this.props.title))));
        }
    }), q = j.createClass({
        displayName: "PhotosetSearchPivot",
        propTypes: {
            fbid: j.PropTypes.string,
            endofalbum: j.PropTypes.bool,
            withBackground: j.PropTypes.bool,
            linesAroundHeader: j.PropTypes.bool,
            onclose: j.PropTypes.func
        },
        fetchPivots: function(r) {
            i.fetch(r).then(function(s) {
                setTimeout(this.onFetchSuccess.bind(this, r, s.pivots), 0);
            }.bind(this), function(s) {
                setTimeout(this.onFetchError.bind(this, r), 0);
            }.bind(this));
        },
        onFetchSuccess: function(r, s) {
            if (!this.isMounted() || this.props.fbid !== r)
                return;
            s = s || [];
            var t = 'show';
            if (s.length === 0)
                t = 'hide';
            this.setState({
                pivots: s,
                action: t
            });
        },
        onFetchError: function(r) {
            if (!this.isMounted() || this.props.fbid !== r)
                return;
            this.setState({
                pivots: [],
                action: 'hide'
            });
        },
        getInitialState: function() {
            this.fetchPivots(this.props.fbid);
            return {
                pivots: [],
                action: 'loading'
            };
        },
        componentWillReceiveProps: function(r) {
            if (r.fbid) {
                this.setState({
                    action: 'loading'
                });
                this.fetchPivots(r.fbid);
            } else 
                this.setState({
                    action: 'hide',
                    pivots: []
                });
        },
        onExitClicked: function() {
            this.props.onclose();
        },
        render: function() {
            if (this.state.action === 'loading')
                return (j.createElement("div", {
                    className: o(this.props.className, "_27h _2ph_")
                }, j.createElement(k, {
                    size: "large"
                })));
            if (this.state.action === 'hide')
                return j.createElement("span", null);
            var r = this.state.pivots.map(function(v) {
                return j.createElement(p, {
                    normalized: v.normalized,
                    title: v.title,
                    uri: v.uri,
                    images: v.images
                });
            }), s = this.props.endofalbum ? j.createElement("span", {
                className: "_2pij"
            }, "End of album"): null, t = (("_27m") + (' ' + "_2pi3") + (' ' + "_2pib") + (this.props.linesAroundHeader ? ' ' + "_3-te" : '')), u = j.createElement("span", null, s, j.createElement("span", {
                className: "_4ptz"
            }, "Other photos you may like"));
            if (this.props.onclose) {
                u = j.createElement(g, {
                    className: t
                }, u, j.createElement("a", {
                    href: "#",
                    onClick: this.onExitClicked,
                    className: "_27n"
                }));
            } else 
                u = j.createElement("div", {
                    className: t
                }, u);
            return (j.createElement("div", {
                className: o(this.props.className, ((this.state.action === 'hide' ? "_27j" : '') + (this.state.action === 'show' ? ' ' + "_27k" : '')))
            }, j.createElement("div", {
                className: (("_27l") + (this.props.withBackground ? ' ' + "_3-tf" : ''))
            }, u, j.createElement("div", {
                className: "_27o _2pi8 clearfix"
            }, r))));
        }
    });
    e.exports = q;
}, null);
__d("PhotosetPivotSlide.react", ["Link.react", "PhotosetSearchPivot.react", "React", "XUIGlyph.react", "XUIGlyphConstants", "XUIText.react", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = i.createClass({
        displayName: "PhotosetPivotSlide",
        propTypes: {
            fbid: i.PropTypes.string,
            isAlbum: i.PropTypes.bool,
            albumOwnerName: i.PropTypes.string,
            visible: i.PropTypes.bool,
            onReturn: i.PropTypes.func
        },
        render: function() {
            return (i.createElement("div", {
                className: (("_1_ap") + (this.props.visible ? ' ' + "_1_aq" : ''))
            }, i.createElement("div", {
                className: "_1_ar"
            }, i.createElement(l, {
                display: "block"
            }, this._getEndOfAlbumTitle()), i.createElement(g, {
                className: "_1_as",
                onClick: this.props.onReturn
            }, i.createElement(j, {
                className: "_1_at",
                image: k.ARROW_RIGHT,
                shade: "white",
                size: "small"
            }), "Return to Beginning")), i.createElement(h, {
                className: "_1_au",
                fbid: this.props.visible ? this.props.fbid: null,
                linesAroundHeader: true
            })));
        },
        _getEndOfAlbumTitle: function() {
            if (this.props.albumOwnerName) {
                if (this.props.isAlbum) {
                    return (n._("End of {user_name}'s album", [n.param("user_name", i.createElement(l, {
                        weight: "bold"
                    }, this.props.albumOwnerName))]));
                } else 
                    return (n._("End of {user_name}'s photos", [n.param("user_name", i.createElement(l, {
                        weight: "bold"
                    }, this.props.albumOwnerName))]));
            } else if (this.props.isAlbum) {
                return ("End of album");
            } else 
                return ("End of photos");
        }
    });
    e.exports = o;
}, null);
__d("PhotoSnowliftAds", ["Arbiter", "Event", "copyProperties", "CSS", "csx", "DataStore", "DOM", "PhotoSessionLog", "UIPagelet", "URI", "Vector", "extendArray"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = {
        REFRESH_RATE: 30000,
        UNITS_REGISTER_DELAY: 1000,
        root: null,
        availableDimensions: null,
        loadQuery: null,
        lastLoadTime: 0,
        minAds: 100,
        units: null,
        isLogAdData: null,
        displayedCallback: null,
        position: null,
        adsStatus: 'null',
        adsEvents: {},
        resetEvents: function() {
            this.adsStatus = 'reset';
            this.adsEvents = {};
        },
        addEvent: function(t, u) {
            if (u)
                this.adsStatus = t;
            var v = Date.now();
            this.adsEvents[t + '_' + v] = v;
        },
        init: function(t, u, v, w) {
            this.reset();
            this.root = t;
            this.snowlift = u;
            this.minAds = v.min_ads;
            this.displayedCallback = w;
            this.addEvent('init', true);
        },
        reset: function() {
            this.lastLoadTime = 0;
            this.position = 0;
            this.units = [];
            this.resetEvents();
            this.addEvent('reset', true);
        },
        resize: function(t) {
            this.availableDimensions = t;
            this.loadQuery = this.snowlift.getLoadQuery();
            this.processResize();
        },
        calculateUnitSizes: function(t, u, v) {
            var w = {};
            t.forEach(function(x) {
                var y = x.root.firstChild.offsetHeight;
                x.units.forEach(function(aa) {
                    if (!j.hasClass(aa, 'hidden')&&!this.getIsHoldout(aa)&&!this.getIsShadow(aa)) {
                        var ba = this.getHeight(aa.firstChild, u);
                        y -= ba;
                    }
                }.bind(this));
                var z = {
                    height: y,
                    visible: false
                };
                x.units.forEach(function(aa) {
                    var ba = this.getIsAds(aa), ca = this.getHeight(aa.firstChild, u), da = this.getUnitId(aa), ea = this.getIsHoldout(aa);
                    if (ea && v)
                        return;
                    w[da] = {
                        height: ca,
                        visible: false,
                        priority: 0,
                        is_ads: ba,
                        is_holdout: ea,
                        section_ref: z
                    };
                }.bind(this));
            }.bind(this));
            return w;
        },
        calculateVisibleUnits: function(t, u, v) {
            var w = 0, x = this.getUnitPriority(u);
            x.forEach(function(y) {
                if (u.hasOwnProperty(y)) {
                    var z = u[y], aa = z.height;
                    if (!z.section_ref.visible)
                        aa += z.section_ref.height;
                    z.height_below = v - aa;
                    z.visible = z.height_below >= 0 && aa > 0;
                    if (z.visible) {
                        z.section_ref.visible = true;
                        v -= aa;
                        w++;
                    }
                }
            }.bind(this));
            return u;
        },
        displayUnits: function(t, u) {
            t.forEach(function(v) {
                var w = false, x = true;
                v.units.forEach(function(y) {
                    var z = this.getUnitId(y), aa = u[z];
                    if (!aa)
                        return;
                    var ba = aa.visible, ca = aa.height_below, da = aa.is_ads;
                    j.conditionClass(y, 'hidden', !ba);
                    if (da && ba && x) {
                        var ea = m.find(y, 'div.ego_unit');
                        j.addClass(ea, 'ego_unit_no_top_border');
                        x = false;
                    }
                    w = w || ba;
                    this.calcUnitStats(this.units[da][z], ba, ca);
                }.bind(this));
                j.conditionClass(v.root, 'hidden', !w);
            }.bind(this));
            g.inform('PhotoSnowliftAds/displayUnits');
        },
        getUnitsDisplayed: function(t, u) {
            var v = 0;
            t.forEach(function(w) {
                w.units.forEach(function(x) {
                    var y = this.getUnitId(x), z = u[y];
                    if (!z ||!z.visible)
                        return;
                    v++;
                }.bind(this));
            }.bind(this));
            return v;
        },
        getHeightsRequired: function(t, u) {
            var v = 0, w = [];
            t.forEach(function(x) {
                var y = false;
                x.units.forEach(function(z) {
                    var aa = this.getUnitId(z), ba = u[aa];
                    if (!ba)
                        return;
                    v += ba.height;
                    if (!y) {
                        v += ba.section_ref.height;
                        y = true;
                    }
                    w.push(v);
                }.bind(this));
            }.bind(this));
            return w;
        },
        getUnitPriority: function(t) {
            var u = [], v = 0, w = 0;
            for (var x in t) {
                var y = t[x];
                u.push(x);
                var z = this.minAds + v + w;
                if (y.is_ads) {
                    if (w < this.minAds)
                        z = w;
                    w++;
                } else 
                    v++;
                y.priority = z;
            }
            u = u.sort(function(aa, ba) {
                var ca = t[aa], da = t[ba];
                return ca.priority - da.priority;
            }.bind(this));
            return u;
        },
        updateUnitsStatus: function() {
            var t = this.availableDimensions.x, u = this.availableDimensions.y, v = this.calculateUnitSizes(this.sections, t);
            v = this.calculateVisibleUnits(this.sections, v, u);
            for (var w in v) {
                if (!v.hasOwnProperty(w))
                    continue;
                var x = v[w];
                if (!x.is_holdout ||!x.visible)
                    continue;
                var y = this.units[1][w];
                this.calcUnitStats(y, x.visible, x.height_below);
            }
            v = this.calculateUnitSizes(this.sections, t, true);
            v = this.calculateVisibleUnits(this.sections, v, u);
            this.displayUnits(this.sections, v);
            if (this.displayedCallback) {
                var z = this.getUnitsDisplayed(this.sections, v), aa = this.getHeightsRequired(this.sections, v);
                this.displayedCallback(z, aa);
            }
        },
        calcUnitStats: function(t, u, v) {
            var w = Date.now();
            if (t.visible)
                t.totalTime += w - t.lastShowTime;
            if (t.trackingCode !== null && t.totalTime >= this.UNITS_REGISTER_DELAY) {
                var x = t.trackingCode;
                t.trackingCode = null;
                this.registerImpression(x, t.registerUrl);
            }
            t.visible = u;
            t.heightBelow = v;
            t.lastShowTime = w;
        },
        prepareResize: function() {
            var t = function(u) {
                var v = m.create('div', {
                    className: 'inner'
                }), w = m.create('div', {
                    className: 'wrapper'
                }, v);
                m.replace(u, w);
                m.setContent(v, u);
                return w;
            };
            this.sections = m.scry(this.root, 'div.ego_section').map(function(u) {
                return {
                    root: t(u),
                    units: m.scry(u, 'div.ego_unit').map(t)
                };
            });
        },
        processResize: function() {
            if (this.isLoading || this.lastLoadTime === 0 || this.availableDimensions === null) {
                this.setLogData();
                return;
            }
            this.updateUnitsStatus();
            this.setLogData();
            var t = this.nextRegisterTime();
            if (t !== Infinity)
                setTimeout(this.processResize.bind(this), t);
        },
        setIsLogAdData: function(t) {
            this.isLogAdData = t;
            this.addEvent('setIsLogAdData', false);
            this.setLogData();
        },
        setLogData: function() {
            var t = this.snowlift.getImageId();
            if (this.isLogAdData && t) {
                var u = q.getElementDimensions(this.snowlift.getImage()), v = q.getElementDimensions(this.snowlift.getRHCHeader()), w = q.getElementDimensions(this.snowlift.getRHCBody()), x = q.getElementDimensions(this.snowlift.getRHCFooter()), y = {
                    query_set: this.snowlift.getLoadQuery().set,
                    window_x: window.innerWidth,
                    window_y: window.innerHeight,
                    image_x: u.x,
                    image_y: u.y,
                    header_x: v.x,
                    header_y: v.y,
                    body_x: w.x,
                    body_y: w.y,
                    footer_x: x.x,
                    footer_y: x.y,
                    ads_below_space: this.getAdsBelowSpace(),
                    time: Date.now(),
                    adsStatus: this.adsStatus,
                    adsEvents: this.adsEvents,
                    refreshRate: this.refreshUnitsRate,
                    position: this.position
                };
                n.updateAdData(t, y);
            }
        },
        getAdsBelowSpace: function() {
            var t = [], u = this.units[1];
            for (var v in u)
                if (u.hasOwnProperty(v)&&!this.getIsHoldout(this.getAdUnit(v)))
                    t.push(u[v].heightBelow);
            return t;
        },
        getIsAds: function(t) {
            var u = m.scry(t, "div._4u8");
            return u.length;
        },
        getUnitId: function(t) {
            if (this.getIsAds(t)) {
                return this.getAdId(t);
            } else 
                return this.getEgoId(t);
        },
        getEgoId: function(t) {
            var u = m.find(t, 'div.ego_unit');
            return u.getAttribute('data-ego-fbid');
        },
        getAdData: function(t) {
            var u = m.find(t, "div._4u8"), v = u.getAttribute('data-ad');
            return v && JSON.parse(v) || {};
        },
        getAdId: function(t) {
            return this.getAdData(t).adid;
        },
        getIsHoldout: function(t) {
            return t && this.getIsAds(t) && this.getAdData(t).holdout;
        },
        getIsShadow: function(t) {
            return t && this.getIsAds(t) && this.getAdData(t).shadow;
        },
        getAdUnit: function(t) {
            if (!this.sections)
                return null;
            var u = [];
            this.sections.forEach(function(w) {
                r(u, w.units);
            });
            for (var v = 0; v < u.length; v++)
                if (this.getIsAds(u[v]) && this.getAdId(u[v]) == t)
                    return u[v];
            return null;
        },
        nextRegisterTime: function() {
            var t = Infinity, u = i(i({}, this.units[0]), this.units[1]);
            for (var v in u)
                if (u.hasOwnProperty(v)) {
                    var w = u[v];
                    if (w.trackingCode !== null && w.visible)
                        t = Math.min(t, this.UNITS_REGISTER_DELAY - w.totalTime);
                }
            return t;
        },
        getHeight: function(t, u) {
            var v = l.get(t, 'height');
            if (v && v.x === u)
                return v.y;
            return this.cacheHeight(t, u);
        },
        cacheHeight: function(t, u) {
            var v = {
                x: u,
                y: t.offsetHeight
            };
            l.set(t, 'height', v);
            return v.y;
        },
        loadAdsAndEgo: function() {
            this.resetEvents();
            this.addEvent('adsRequested', true);
            this.position++;
            var t = this.getCursorFBID(this.loadQuery);
            o.loadFromEndpoint('WebEgoPane', this.root, {
                pid: 34,
                data: [this.loadQuery.set, t, false, this.snowlift.getOpaqueCursor(t)]
            }, {
                crossPage: true,
                bundle: false
            });
        },
        getCursorFBID: function(t) {
            if (t.v !== undefined)
                return t.v;
            if (t.fbid !== undefined)
                return t.fbid;
            return '0';
        },
        unitsLoaded: function(t, u) {
            var v;
            if (u) {
                v = '/ai.php';
                this.addEvent('adsLoaded', true);
            } else {
                v = '/ajax/ei.php';
                this.addEvent('egoLoaded', true);
            }
            var w = {};
            for (var x in t)
                if (t.hasOwnProperty(x))
                    w[x] = {
                        trackingCode: t[x],
                        totalTime: 0,
                        lastShowTime: 0,
                        heightBelow: - 10000,
                        visible: false,
                        registerUrl: v
                    };
            this.units[u] = w;
            if (u)
                this.waitForImages(this.imagesLoaded.bind(this));
        },
        imagesLoaded: function() {
            this.prepareResize();
            this.addEvent('imagesLoaded', true);
            this.lastLoadTime = Date.now();
            this.isLoading = false;
            this.processResize();
            j.removeClass(this.root, 'loading');
        },
        loadAdsFromUserActivity: function() {
            var t = Date.now() - this.lastLoadTime;
            if (!this.isLoading && t > s.REFRESH_RATE) {
                j.addClass(this.root, 'loading');
                this.isLoading = true;
                this.loadAdsAndEgo();
            }
        },
        registerImpression: function(t, u) {
            var v = m.create('iframe', {
                src: p(u).addQueryData({
                    aed: t
                }),
                width: 0,
                height: 0,
                frameborder: 0,
                scrolling: 'no',
                className: 'fbEmuTracking'
            });
            v.setAttribute('aria-hidden', 'true');
            m.appendContent(this.root, v);
        },
        waitForImages: function(t) {
            var u = m.scry(this.root, 'img.img'), v = u.length, w = v;
            if (w === 0)
                t();
            var x = function() {
                w--;
                if (w === 0)
                    setTimeout(t, 0);
            };
            for (var y = 0; y < v; y++) {
                var z = u[y];
                if (z.complete) {
                    x();
                } else 
                    h.listen(z, {
                        load: x,
                        error: x,
                        abort: x
                    });
            }
        }
    };
    e.exports = s;
}, null);
__d("PhotoViewer", ["Bootloader", "CSS", "DOM", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l() {
        "use strict";
        this.image = null;
        this.root = null;
        this.stream = null;
    }
    l.prototype.getEventString = function(m) {
        "use strict";
        var n = this.getEventPrefix();
        if (n)
            return n + '.' + m;
        return null;
    };
    l.prototype.getImage = function() {
        "use strict";
        return this.image;
    };
    l.prototype.getPosition = function() {
        "use strict";
        return this.stream ? this.stream.getCursor() : null;
    };
    l.prototype.getRoot = function() {
        "use strict";
        return this.root;
    };
    l.prototype.hiliteAllBoxes = function() {
        "use strict";
        i.scry(this.stageWrapper, 'div.tagsWrapper div.faceBox').forEach(function(m) {
            h.addClass(m, 'otherActive');
        });
    };
    l.bootstrap = function(m, n) {
        "use strict";
        g.loadModules(["PhotoSnowlift"], function(o) {
            o.bootstrap(m, n);
        });
    };
    j(l.prototype, {
        getEventPrefix: k.thatReturnsNull,
        getSourceString: k.thatReturnsNull,
        getVersionConst: k.thatReturnsNull,
        getViewerSource: k.thatReturnsNull,
        getViewerSet: k.thatReturnsNull
    });
    e.exports = l;
}, null);
__d("PhotoSnowlift", ["Arbiter", "Assert", "AsyncRequest", "Bootloader", "CSS", "Dialog", "DOM", "DOMControl", "Event", "fbt", "FullScreen", "ImageUtils", "Input", "Keys", "Layer", "LayerHideOnEscape", "LikeConfirmer", "LinkController", "LitestandStoryInsertionStatus", "Locale", "PageTransitions", "Parent", "PhotoLogger", "PhotoPermalinkURI", "PhotosConst", "PhotoSessionLog", "PhotosetPivotSlide.react", "PhotosetSearchPivot.react", "PhotosetSearchPivotData", "PhotoSnowliftAds", "PhotoStreamCache", "PhotosUtils", "PhotoTagSearchPivotLogger", "PhotoViewer", "React", "Rect", "ScriptPath", "ScrollableArea", "Style", "Toggler", "Tooltip", "UFIFeedbackTargets", "UIPagelet", "URI", "UserAgent_DEPRECATED", "Vector", "VideoPlayerReason", "$", "computeRelativeURI", "copyProperties", "createArrayFrom", "csx", "cx", "emptyFunction", "ge", "getActiveElement", "goURI", "tx", "userAction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb) {
    var nb = 74, ob = 75, pb = 70, qb = 76, rb = 315;
    for (var sb in na)
        if (na.hasOwnProperty(sb))
            ub[sb] = na[sb];
    var tb = na === null ? null: na.prototype;
    ub.prototype = Object.create(tb);
    ub.prototype.constructor = ub;
    ub.__superConstructor__ = na;
    function ub() {
        "use strict";
        na.call(this);
        this._seenTags = {};
        this._navCount = 0;
        this._isZoomOn = false;
        this.clearAlbumBoundaries();
    }
    ub.prototype.preload = function(vb, wb) {
        "use strict";
        j.loadModules(["PhotoTagger", "Live", "PhotoTagApproval", "PhotoTags", "TagTokenizer", "css:fb-photos-snowlift-fullscreen-css"], function(yb) {
            this.PhotoTagger = yb;
        }.bind(this));
        var xb = this.getImageSrc(xa(vb).getQueryData());
        if (xb)
            if (!this._log(xb))(new Image()).src = xb;
    };
    ub.prototype.bootstrap = function(vb, wb) {
        "use strict";
        if (vb && xa(vb).getQueryData().makeprofile)
            this.enableCropperOnInit = true;
        this.preload(vb, wb);
        if (this.closeDirty) {
            setTimeout(this.bootstrap.bind(this, vb, wb), 0);
            return;
        }
        ja.reset();
        this.resetUriStack = true;
        if (this.isOpen)
            if (this.openExplicitly) {
                this.closeCleanup();
                this.resetUriStack = false;
            } else 
                return;
        this._dataFt = null;
        var xb = ba.byAttribute(wb, 'data-cursor');
        if (xb) {
            try {
                var zb = JSON.parse(xb.getAttribute('data-ft'));
                this._dataFt = {
                    qid: zb.qid,
                    mf_story_key: zb.mf_story_key
                };
            } catch (yb) {}
        } else 
            try {
                xb = ba.byAttribute(wb, 'data-ad');
                var ac = JSON.parse(xb.getAttribute('data-ad'));
                this._dataFt = {
                    ad_id: ac.adid
                };
        } catch (yb) {}
        this.ua = mb('snowlift', wb).uai('open');
        qa.openOverlayView('snowlift');
        this.returningToStart = false;
        this.loading && k.removeClass(this.loading, 'loading');
        if (wb) {
            k.addClass((this.loading = wb), 'loading');
            var bc = ba.byClass(wb, 'uiStreamStory') || ba.byClass(wb, "_5jmm");
            if (bc) {
                this.storyID = bc.id;
            } else {
                var cc = ba.byClass(wb, "_5b9c");
                if (cc)
                    this.storyID = cc.getAttribute('data-ownerid');
            }
            this._updateContainerOwnerID();
            this.getThumbAndSize(wb);
        } else 
            this.loading = null;
        g.inform('PhotoSnowlift.GO', vb, g.BEHAVIOR_STATE);
        this.loadFrameIfUninitialized();
    };
    ub.prototype._updateContainerOwnerID = function() {
        "use strict";
        if (this.container)
            if (this.storyID) {
                this.container.setAttribute('data-ownerid', this.storyID);
            } else 
                this.container.removeAttribute('data-ownerid');
    };
    ub.prototype.setupFromSnowflake = function(vb, wb) {
        "use strict";
        this.extraClasses = vb;
        this.snowflake = true;
        this.firstInSet = wb;
        if (this.root) {
            k.addClass(this.root, "snowflake");
            this.extraClasses.forEach(function(xb) {
                k.addClass(this.root, xb);
            }, this);
        }
    };
    ub.prototype.getCurrentImageServerSizeDimensions = function() {
        "use strict";
        var vb = this.stream.getCurrentImageData();
        return vb.originalDimensions || vb.dimensions;
    };
    ub.prototype.getEventPrefix = function() {
        "use strict";
        return 'PhotoSnowlift';
    };
    ub.prototype.getRoot = function() {
        "use strict";
        return this.root;
    };
    ub.prototype.getSourceString = function() {
        "use strict";
        return 'snowlift';
    };
    ub.prototype.getViewerSource = function() {
        "use strict";
        return this.source;
    };
    ub.prototype.getViewerSet = function() {
        "use strict";
        return this.stream.getPhotoSet();
    };
    ub.prototype.getVersionConst = function() {
        "use strict";
        return ea.VIEWER_SNOWLIFT;
    };
    ub.prototype.getImage = function() {
        "use strict";
        return this.image;
    };
    ub.prototype.getImageId = function() {
        "use strict";
        return this.stream.getCursor();
    };
    ub.prototype.getRHCHeader = function() {
        "use strict";
        return this.rhcHeader;
    };
    ub.prototype.getRHCBody = function() {
        "use strict";
        return this.ufiForm;
    };
    ub.prototype.getRHCFooter = function() {
        "use strict";
        return this.rhcFooter;
    };
    ub.prototype.getLoadQuery = function() {
        "use strict";
        return this.loadQuery;
    };
    ub.prototype.getCurrentPhotoInfo = function() {
        "use strict";
        var vb = this.stream.getCurrentImageData();
        if (vb)
            return vb.info;
        return null;
    };
    ub.prototype.getOwnerId = function() {
        "use strict";
        var vb = this.stream.getCurrentImageData();
        if (vb)
            return vb.info.owner;
        return null;
    };
    ub.prototype.getThumbAndSize = function(vb) {
        "use strict";
        this.currentImageSize = null;
        this.thumbSrc = null;
        var wb = xa(vb.getAttribute('ajaxify')).getQueryData();
        if (!wb.size)
            return;
        var xb = za.deserialize(wb.size);
        if (!xb.x ||!xb.y)
            return;
        this.currentImageSize = xb;
        if (vb.getAttribute('data-cropped'))
            return;
        var yb = m.scry(vb, 'img')[0], zb = m.scry(vb, 'i')[0], ac = ba.byAttribute(vb, 'data-size');
        this.shouldStretch = ac && this.currentImageSize && yb && ac.getAttribute('data-size') === "2" && this.currentImageSize.x > this.currentImageSize.y && this.currentImageSize.x <= ub.TIMELINE_STRETCH_WIDTH && yb.offsetWidth === ub.TIMELINE_STRETCH_WIDTH;
        var bc;
        if (yb) {
            bc = yb.src;
        } else if (zb) {
            bc = sa.get(zb, 'backgroundImage').replace(/.*url\("?([^"]*)"?\).*/, '$1');
        } else 
            return;
        this.thumbSrc = bc;
    };
    ub.prototype.loadFrameIfUninitialized = function() {
        "use strict";
        if (this.root)
            return;
        new i('/ajax/photos/snowlift/init.php').setAllowCrossPageTransition(true).setMethod('GET').setReadOnly(true).send();
    };
    ub.prototype.init = function(vb, wb) {
        "use strict";
        this.init = hb;
        this._shouldLog = wb.photos_client_loading;
        this._logger = null;
        if (this._shouldLog)
            this._logger = new ca(ea.VIEWER_SNOWLIFT_STRING);
        this._showHover = wb.pivot_hover;
        this._showMorePhotos = wb.show_more_photos;
        this._extraSlidePivot = wb.extra_slide_pivot;
        fa.setEndMetrics(wb.pivot_end_metric);
        this.startingMousePos = null;
        this.haveLeftBufferRegion = false;
        this.showingTypeaheadSuggestions = false;
        this.fullscreen = q.isSupported();
        this.showOGVideos = wb.og_videos;
        this.resizeCommentsForAds = wb.resize_comments_for_ads;
        this.spotlight = vb;
        this.spotlight.subscribe('blur', function() {
            this.closingAction = fa.OUTSIDE;
        }.bind(this));
        this.spotlight.subscribe('beforehide', this.beforeCloseHandler.bind(this));
        this.spotlight.subscribe('hide', this.closeHandler.bind(this));
        this.spotlight.subscribe('key', this.keyHandler.bind(this));
        this.initializeNodes(this.spotlight.getRoot());
        ja.init(this.sideAdUnit, this, wb, this.adsDisplayedCallback.bind(this));
        this.inAdsDisplayedCallback = false;
        this.lastAdsHeight = 0;
        if (!this.subscription) {
            x.registerHandler(this.handleNavigateAway.bind(this));
            this.subscription = g.subscribe('PhotoSnowlift.GO', function(xb, yb) {
                this.openExplicitly = true;
                this.loading && k.removeClass(this.loading, 'loading');
                this.open(yb);
            }.bind(this));
        }
        this.transitionHandlerRegistered = false;
        this.returningToStart = false;
        aa.registerHandler(this.openHandler.bind(this));
        this.openHandlerRegistered = true;
        g.subscribe('PhotoTagApproval.HILITE_TAG', this.onHiliteTag.bind(this));
        g.subscribe('PhotoTagApproval.UPDATE_TAG_BOX', this.onUpdateTagBox.bind(this));
        if (this.fullscreen)
            q.subscribe('changed', this.onFullScreenChange.bind(this));
        this.slideshowGk = wb.snowlift_slideshow;
        this.buttonTruncateGk = wb.snowlift_button_truncate;
        this._hasZoomCapability = this._hasZoomCapability && wb.www_panorama_viewer;
        this.allowIrrelevantRequests=!!wb.snowlift_allow_irrelevant_requests;
        if (this.snowflake) {
            k.addClass(this.root, "snowflake");
            this.extraClasses.forEach(function(xb) {
                k.addClass(this.root, xb);
            }, this);
        }
    };
    ub.prototype.onFullScreenChange = function() {
        "use strict";
        var vb = q.isFullScreen();
        k.conditionClass(document.body, 'fbPhotoSnowliftFullScreenMode', vb);
        if (vb) {
            if (!k.hasClass(this.root, 'fbPhotoSnowliftEditMode'))
                this.collapseRHC();
            var wb = this.stream.getCurrentImageData();
            if (wb && wb.url && this.image.src !== wb.url && this.shouldShowHiRes(wb))
                this.switchImage(wb.url);
            this.adjustForResize();
            if (!this._isZoomOn)
                this._conditionDisplayZoomInButton();
        } else {
            if (!this._isZoomOn)
                this.uncollapseRHC();
            if (ya.chrome()&&!k.hasClass(this.root, 'fbPhotoSnowliftEditMode'))
                this.page(0, false);
            g.inform('reflow');
        }
        ta.hide();
        if (this.cropper)
            this.cropper.resetPhoto();
    };
    ub.prototype.initializeNodes = function(vb) {
        "use strict";
        this.root = vb;
        this.container = m.find(vb, 'div.fbPhotoSnowliftContainer');
        this._updateContainerOwnerID();
        this.snowliftPopup = m.find(this.container, 'div.fbPhotoSnowliftPopup');
        this.rhc = m.find(this.snowliftPopup, 'div.rhc');
        this.rhcHeader = m.find(this.rhc, 'div.rhcHeader');
        this.rhcFooter = m.find(this.rhc, 'div.rhcFooter');
        this.ufiForm = m.find(this.rhc, 'form.fbPhotosSnowliftFeedbackForm');
        this.ufiInputContainer = m.find(this.rhc, 'div.fbPhotosSnowboxFeedbackInput');
        this.scroller = m.find(this.ufiForm, 'div.rhcScroller');
        this.scrollerBody = m.find(this.scroller, 'div.uiScrollableAreaBody');
        this.stageWrapper = m.find(this.snowliftPopup, 'div.stageWrapper');
        this.overlay = m.find(this.snowliftPopup, 'div.snowliftOverlay');
        this.errorBox = m.find(this.stageWrapper, 'div.stageError');
        this.image = m.find(this.stageWrapper, 'img.spotlight');
        this.stage = m.find(this.stageWrapper, 'div.stage');
        this.showZoomInButton = m.scry(this.stageWrapper, "._5qmg").pop();
        this.showZoomOutButton = m.scry(this.stageWrapper, "._5qmh").pop();
        this.zoomedImage = m.scry(this.stage, "._10zw").pop();
        this.outerImageSlider = m.scry(this.stage, "._10zx").pop();
        this.innerImageSlider = m.scry(this.stage, "._10zv").pop();
        this._hasZoomCapability = this.showZoomInButton && this.showZoomOutButton && this.zoomedImage && this.outerImageSlider && this.innerImageSlider;
        if (this._hasZoomCapability) {
            k.hide(this.showZoomInButton);
            k.hide(this.showZoomOutButton);
            k.hide(this.zoomedImage);
            k.hide(this.outerImageSlider);
        }
        this.videoStage = m.find(this.stageWrapper, 'div.videoStage');
        this.prevPager = m.find(this.snowliftPopup, 'a.snowliftPager.prev');
        this.nextPager = m.find(this.snowliftPopup, 'a.snowliftPager.next');
        this.stageActions = m.find(vb, 'div.stageActions');
        this.buttonActions = m.find(this.stageActions, 'div.fbPhotosPhotoButtons');
        this.placeInfo = m.find(this.rhc, 'div.fbPhotosSnowliftPlaceInfo');
        this.sideAdUnit = m.find(vb, "._5ciw");
        k.conditionClass(this.root, 'fullScreenAvailable', this.fullscreen);
    };
    ub.prototype.initializeScroller = function() {
        "use strict";
        this.initializeScroller = hb;
        this.scrollableArea = ra.fromNative(this.scroller, {
            fade: true,
            persistent: true
        });
        var vb = function(event) {
            var wb = o.$E(event).getTarget();
            if (m.contains(this.ufiInputContainer, wb)) {
                var xb = n.getInstance(wb);
                if (xb) {
                    this.scrollableArea.scrollToBottom();
                    var yb = xb.subscribe('resize', function() {
                        var ac = this.scrollableArea.isScrolledToBottom();
                        this.adjustScroller();
                        ac && this.scrollableArea.scrollToBottom();
                    }.bind(this)), zb = o.listen(wb, 'blur', function() {
                        xb.unsubscribe(yb);
                        zb.remove();
                    });
                }
            }
        }.bind(this);
        g.subscribe('ufi/inputHeightChanged', function(wb, xb) {
            if (m.contains(this.ufiInputContainer, xb.node))
                this.adjustScroller();
        }.bind(this));
        g.subscribe('ufi/changed', function(wb, xb) {
            if (this.ufiForm === xb.form)
                this.adjustScrollerIfNecessary();
        }.bind(this));
        g.subscribe('ufi/comment', function(wb, xb) {
            if (this.ufiForm === xb.form) {
                this.adjustScrollerIfNecessary();
                if (xb.isranked) {
                    this.scrollableArea.scrollToTop();
                } else 
                    this.scrollableArea.scrollToBottom();
            }
        }.bind(this));
        o.listen(this.rhc, 'click', function(event) {
            var wb = event.getTarget();
            if (ba.byTag(wb, 'a') || ba.byTag(wb, 'button') || m.isNodeOfType(wb, 'input'))
                this.adjustScrollerIfNecessary();
        }.bind(this));
        g.subscribe(['reflow', 'CommentUFI.Pager'], function() {
            if (this.isOpen)
                this.adjustScrollerIfNecessary();
        }.bind(this));
        o.listen(this.ufiForm, 'focusin', vb);
    };
    ub.prototype.openHandler = function(vb) {
        "use strict";
        if (this.isOpen ||!da.isValid(vb) || this.returningToStart || vb.getQueryData().closeTheater || vb.getQueryData().permPage || vb.getQueryData().makeprofile) {
            this.openHandlerRegistered = false;
            return false;
        }
        this.open(vb);
        this._uriStack.push(xa(vb).getQualifiedURI().toString());
        aa.transitionComplete(true);
        return true;
    };
    ub.prototype.getImageSrc = function(vb) {
        "use strict";
        if (vb.smallsrc) {
            if (!vb.size)
                return vb.smallsrc;
            var wb = za.deserialize(vb.size), xb = this.getStageSize(wb);
            xb = this._adjustStageSizeForPixelRatio(xb);
            if (xb.x <= ub.STAGE_NORMAL_MAX.x && xb.y <= ub.STAGE_NORMAL_MAX.y)
                return vb.smallsrc;
        }
        return vb.src;
    };
    ub.prototype.open = function(vb) {
        "use strict";
        var wb = xa(vb), xb = wb.getQueryData(), yb = da.parse(wb);
        if (yb !== null) {
            xb.fbid = yb.photo_id;
            xb.set = yb.set_token;
        }
        var zb = this.getImageSrc(xb);
        if (zb) {
            delete xb.src;
            delete xb.smallsrc;
        }
        if (this.resetUriStack)
            this._uriStack = [];
        if (!this.initialLoad) {
            xb.firstLoad = true;
            this.initialLoad = true;
            y.registerBlocker(function() {
                return this.isOpen;
            }.bind(this));
        }
        this.sessionID = Date.now();
        this.loadQuery = db(xb, {
            ssid: this.sessionID
        });
        if (this._dataFt)
            this.loadQuery.data_ft = this._dataFt;
        this.isOpen = true;
        this.pagersShown = false;
        this.refreshOnClose = false;
        this.hilitedTag = null;
        this.loadingStates = {
            image: false,
            html: false
        };
        this.replaceUrl = false;
        this.movementDelta = 0;
        this.source = null;
        this.saveTagSubscription = g.subscribe('PhotoTagger.SAVE_TAG', this.onTagSaved.bind(this));
        this.taggedPhotoIds = [];
        this.stream = new ka();
        this.stream.init(ea.VIEWER_SNOWLIFT, 'PhotoViewerPagelet', 'pagelet_photo_viewer', this._shouldLog ? this._logger : null, xb.tagSuggestionMode || 'everyone');
        if (!!xa.getMostRecentURI().getQueryData().viewas)
            this.stream.setViewAs(xa.getMostRecentURI().getQueryData().viewas + '');
        this.fetchInitialData();
        this.setLoadingState(ub.STATE_HTML, true);
        this.rhcCollapsed = false;
        this._open(vb, zb);
        j.loadModules(["SnowliftPicCropper"], function(ac) {
            this.cropper = ac.getInstance(this);
            this.cropper.init();
            if (this.enableCropperOnInit) {
                var bc = g.subscribe('PhotoSnowlift.SWITCH_IMAGE', function() {
                    this.cropper.enableCropping();
                    g.unsubscribe(bc);
                }.bind(this));
                this.enableCropperOnInit = false;
            }
        }.bind(this));
        j.loadModules(["PhotosButtonTooltips"], function(ac) {
            ac.init();
        });
    };
    ub.prototype._open = function(vb, wb) {
        "use strict";
        this.createLoader(wb);
        this.spotlight.show();
        this.ua && this.ua.add_event('frame');
        g.inform('layer_shown', {
            type: 'PhotoSnowlift'
        });
        g.inform('PhotoSnowlift.OPEN');
        this.stageHandlers = [o.listen(window, 'resize', this.adjustForResize.bind(this)), o.listen(this.stageWrapper, 'click', this.buttonListener.bind(this)), o.listen(this.stageWrapper, 'mouseleave', function(event) {
            var zb = event.getTarget();
            if (!(ba.byClass(zb, 'snowliftOverlay') || ba.byClass(zb, 'fbPhotoSnowliftTagApproval') || ba.byClass(zb, 'tagPointer') || ba.byClass(zb, 'arrow') || ba.byClass(zb, 'faceboxSuggestion') || ba.byClass(zb, 'typeaheadWrapper') || ba.byClass(zb, 'photoTagTypeahead') || ba.byClass(zb, 'fbPhotoTagger')))
                this.unhiliteAllTags();
            this.hidePagers();
        }.bind(this)), o.listen(this.stageWrapper, 'mousemove', this.hilitePager.bind(this)), o.listen(this.stageWrapper, 'mousemove', this.hiliteTagsOnMouseMove.bind(this)), o.listen(this.overlay, 'mouseenter', this.unhiliteAllTags.bind(this)), o.listen(this.container, 'mousemove', this._enableMouseOver.bind(this)), o.listen(this.container, 'mouseover', this._interceptMouseOver.bind(this)), o.listen(this.stageWrapper, 'focusin', this.hilitePager.bind(this)), o.listen(this.rhc, 'focusin', this.hidePagers.bind(this))];
        if (this._hasZoomCapability) {
            this.stageHandlers.push(o.listen(this.stage, 'mousedown', this._zoomedImageMouseDown.bind(this)));
            this.stageHandlers.push(o.listen(this.root, 'mouseup', this._zoomedImageMouseUp.bind(this)));
        }
        this.stageHandlers.push(o.listen(this.container, 'click', function(event) {
            var zb = event.getTarget();
            if (ba.byClass(zb, 'rotateRight')) {
                this.rotate('right');
            } else if (ba.byClass(zb, 'rotateLeft')) {
                this.rotate('left');
            } else if (ba.byClass(zb, 'closeTheater')) {
                if (q.isFullScreen()) {
                    q.toggleFullScreen();
                    return;
                }
                this.closingAction = fa.X;
                this.spotlight.hide();
                return false;
            } else if (this.fullscreen)
                if (ba.byClass(zb, 'fbPhotoSnowliftFullScreen')) {
                    this.toggleFullScreen();
                } else if (ba.byClass(zb, 'fbPhotoSnowliftCollapse'))
                    this.toggleCollapse();
        }.bind(this)));
        var xb = ib('fbPhotoSnowliftFeedback');
        if (xb)
            this.stageHandlers.push(o.listen(xb, 'click', function(event) {
                var zb = event.getTarget();
                if (ba.byClass(zb, 'like_link') || (ba.byClass(zb, 'UFILikeLink') && ba.byClass(zb, 'UIActionLinks')))
                    this.toggleLikeButton();
                    var ac = ba.byClass(event.getTarget(), 'uiUfiCollapsedComment');
                    if (ac)
                        k.addClass(ac, 'uiUfiCollapsedCommentToggle');
                    }.bind(this)));
        var yb = ib('fbPhotoSnowliftOnProfile');
        if (yb)
            this.stageHandlers.push(o.listen(yb, 'click', function(event) {
                if (ba.byClass(event.getTarget(), 'fbPhotoRemoveFromProfileLink'))
                    this.refreshOnClose = true;
                }.bind(this)));
        if (this.resetUriStack)
            this.startingURI = xa.getMostRecentURI().addQueryData({
                closeTheater: 1
            }).getUnqualifiedURI();
        if (!wb)
            this.setLoadingState(ub.STATE_IMAGE_DATA, true);
        if (!this.transitionHandlerRegistered) {
            aa.registerHandler(this.transitionHandler.bind(this));
            this.transitionHandlerRegistered = true;
        }
        fa.initLogging(fa.SNOWLIFT);
        if (this.pivots)
            fa.setRelevantCount(this.pivots.relevantCount);
    };
    ub.prototype.toggleFullScreen = function() {
        "use strict";
        var vb = q.toggleFullScreen(document.documentElement);
        if (vb) {
            var wb = this.stream.getCurrentImageData();
            if (wb && wb.url && this.image.src !== wb.url && this.shouldShowHiRes(wb))
                if (!this._log(wb.url))(new Image()).src = wb.url;
            fa.logEnterFullScreen(this.stream.getCursor());
        }
    };
    ub.prototype.getStream = function() {
        "use strict";
        return this.stream;
    };
    ub.prototype.fetchInitialData = function() {
        "use strict";
        this.ua && this.ua.add_event('init_data');
        this.stream.waitForInitData();
        wa.loadFromEndpoint('PhotoViewerInitPagelet', ib('pagelet_photo_viewer_init', this.root), this.loadQuery, {
            actorID: va.getActorIDForFeedbackTargetIfExists(this.loadQuery.fbid),
            usePipe: true,
            jsNonblock: true,
            crossPage: true,
            allowIrrelevantRequests: this.allowIrrelevantRequests
        });
    };
    ub.prototype.toggleCollapse = function() {
        "use strict";
        if (this.rhcCollapsed) {
            this.uncollapseRHC();
        } else 
            this.collapseRHC();
    };
    ub.prototype.collapseRHC = function() {
        "use strict";
        this.rhcCollapsed = true;
        k.addClass(this.root, 'collapseRHC');
        this.adjustForResize();
    };
    ub.prototype.uncollapseRHC = function() {
        "use strict";
        this.rhcCollapsed = false;
        k.removeClass(this.root, 'collapseRHC');
        this.adjustForResize();
    };
    ub.prototype.beforeCloseHandler = function() {
        "use strict";
        if (this.isOpen && this.cropper && this.cropper.croppingMode) {
            this.warnLeavePage(this.closeHandler.bind(this));
            return false;
        }
    };
    ub.prototype.closeHandler = function() {
        "use strict";
        if (!this.isOpen)
            return;
        this.closingAction = this.closingAction || fa.ESC;
        if (xa.getMostRecentURI().addQueryData({
            closeTheater: 1
        }).getUnqualifiedURI().toString() == this.startingURI.toString()) {
            this.close();
            return;
        }
        this.returnToStartingURI(this.refreshOnClose);
        this.close();
    };
    ub.prototype.returnToStartingURI = function(vb, wb) {
        "use strict";
        if (!vb)
            if (wb) {
                this.squashNextTransition(kb.bind(null, wb));
            } else 
                this.squashNextTransition();
        this.returningToStart = true;
        var xb = g.subscribe('page_transition', (function() {
            this.returningToStart = false;
            xb.unsubscribe();
        }).bind(this)), yb = vb || isNaN(ya.opera()), zb = this._uriStack.length;
        if (yb && zb < window.history.length) {
            window.history.go( - zb);
        } else {
            var ac = this.startingURI, bc = new xa(ac).removeQueryData('closeTheater');
            if (ac.getQueryData().sk == 'approve' && ac.getPath() == '/profile.php') {
                bc.removeQueryData('highlight');
                bc.removeQueryData('notif_t');
            }
            kb(bc);
        }
    };
    ub.prototype.squashNextTransition = function(vb) {
        "use strict";
        this.squashNext = true;
        aa.registerHandler(function wb() {
            if (this.squashNext) {
                this.squashNext = false;
                if (vb)
                    setTimeout(vb, 0);
                aa.transitionComplete(true);
                return true;
            }
            return false;
        }.bind(this), 7);
    };
    ub.prototype.handleNavigateAway = function(vb) {
        "use strict";
        var wb = cb(aa._most_recent_uri.getQualifiedURI(), vb.getAttribute('href'));
        if (this.isOpen && (wb instanceof xa) && wb.getUnqualifiedURI().toString() != this.startingURI.toString() && wb.getPath() != '/photo.php') {
            if (!this.closingAction)
                this.closingAction = fa.NAVIGATE;
            this.returnToStartingURI(false, wb);
            this.close();
            return false;
        }
        return true;
    };
    ub.prototype.postProcessTaggedPhotos = function() {
        "use strict";
        if (this.taggedPhotoIds && this.taggedPhotoIds.length > 0) {
            var vb = null;
            if (this.source === ub.COLLECTIONS_UNTAGGED_PHOTOS) {
                vb = '/ajax/photos/photo/edit/skiptag/';
            } else if (this.source === ub.PHOTOS_OF_YOU_SUGGESTIONS || this.source === ub.FRIENDS_IN_PHOTOS_SUGGESTIONS)
                vb = '/ajax/photos/photo/add_to_star_grid/';
            if (vb)
                new i().setURI(vb).setAllowCrossPageTransition(true).setData({
                    media_id: this.taggedPhotoIds,
                    source: this.source
                }).send();
        }
    };
    ub.prototype.onTagSaved = function(vb, wb) {
        "use strict";
        if (this.taggedPhotoIds) {
            if (this.source === ub.PHOTOS_OF_YOU_SUGGESTIONS&&!wb.self_tag)
                return;
            this.taggedPhotoIds.push(wb.photo_fbid);
        }
    };
    ub.prototype.clearAlbumBoundaries = function() {
        "use strict";
        this._albumBoundaries = {
            start: 0,
            end: 0
        };
    };
    ub.prototype.close = function() {
        "use strict";
        if (!this.isOpen)
            return;
        this._albumFBID = null;
        this.hideMorePhotos();
        this.hidePivotSlide();
        this._pauseVideoIfNeeded();
        this.isOpen = false;
        this._navCount = 0;
        this.clearAlbumBoundaries();
        if (this.fullscreen)
            q.disableFullScreen();
        mb('snowlift').uai('close');
        qa.closeOverlayView('snowlift');
        this.cropper && this.cropper.disableCropping();
        this.spotlight.hide();
        this.openExplicitly = false;
        this.postProcessTaggedPhotos();
        g.unsubscribe(this.saveTagSubscription);
        this.taggedPhotoIds = [];
        this.closeDirty = true;
        setTimeout(this.closeCleanup.bind(this), 0);
        if (this.snowflake) {
            k.removeClass(this.root, "snowflake");
            this.extraClasses.forEach(function(vb) {
                k.removeClass(this.root, vb);
            }, this);
        }
        this.extraClasses = [];
        this.snowflake = false;
        this.firstInSet = null;
        this.movementDelta = 0;
    };
    ub.prototype.closeCleanup = function() {
        "use strict";
        this.closeDirty = false;
        k.removeClass(this.root, 'dataLoading');
        fa.logPhotoViews(this.closingAction);
        this.destroy();
        k.hide(this.errorBox);
        k.hide(this.image);
        this.currentImageSize = null;
        this.thumbSrc = null;
        this.shouldStretch = false;
        this.resetUriStack = true;
        var vb = this.stream.getCursor();
        k.removeClass(this.stageWrapper, 'showVideo');
        m.empty(this.videoStage);
        this.uncollapseRHC();
        this.currentMinSize = null;
        this.setStagePagersState('reset');
        this.recacheData();
        m.empty(this.sideAdUnit);
        this.stream.destroy();
        this.root.setAttribute('aria-busy', 'true');
        var wb = this.closingAction === fa.NAVIGATE;
        this.closingAction = null;
        if (!this.openHandlerRegistered) {
            aa.registerHandler(this.openHandler.bind(this));
            this.openHandlerRegistered = true;
        }
        g.inform('layer_hidden', {
            type: 'PhotoSnowlift'
        });
        g.inform('PhotoSnowlift.CLOSE', {
            is_navigating: wb,
            fbid: vb
        });
        this._setZoomOut();
        this._previousZoomScrollPercent = null;
    };
    ub.prototype.createLoader = function(vb) {
        "use strict";
        if (this.currentImageSize === null) {
            this.adjustStageSize(ub.STAGE_MIN);
        } else {
            var wb = this.getStageSize(this.currentImageSize);
            wb = new za(Math.max(wb.x, ub.STAGE_MIN.x), Math.max(wb.y, ub.STAGE_MIN.y));
            var xb = this.getImageSizeInStage(this.currentImageSize, wb);
            if (this.thumbSrc === null) {
                this.adjustStageSize(xb);
            } else 
                this.useImage(m.create('img', {
                    className: 'spotlight',
                    alt: '',
                    src: this.thumbSrc,
                    style: {
                        width: xb.x + 'px',
                        height: xb.y + 'px'
                    }
                }), xb, false);
        }
        this.setLoadingState(this.STATE_IMAGE_PIXELS, true);
        if (vb)
            setTimeout((function() {
                var yb = new Image(), zb = function() {
                    if (!this.isOpen)
                        return;
                        if (!this.stream ||!this.stream.errorInCurrent()) {
                            this.switchImage(vb, this.currentImageSize);
                            this.ua && this.ua.add_event('image');
                            this.setLoadingState(ub.STATE_IMAGE_DATA, false);
                        }
                    }.bind(this), ac = o.listen(yb, 'load', zb), bc = function() {
                        if (ac) {
                            ac.remove();
                            ac = null;
                        }
                    };
                    g.subscribeOnce('PhotoSnowlift.SWITCH_IMAGE', bc);
                    g.subscribeOnce('PhotoSnowlift.CLOSE', bc);
                    this._log(vb);
                    yb.src = vb;
                }).bind(this), 0);
        k.hide(this.stageActions);
        this.setStagePagersState('disabled');
    };
    ub.prototype.initDataFetched = function(vb) {
        "use strict";
        fa.setPhotoSet(this.stream.getPhotoSet());
        fa.setLogFbids(vb.logids);
        this._albumBoundaries.start = this.stream.getCursor();
        var wb = this.stream.getCurrentImageData();
        fa.addPhotoView(wb.info, this.shouldShowHiRes(wb), this.fullscreen && q.isFullScreen());
        var xb = this.stream.getCurrentExtraData();
        if (this._showHover && xb)
            ma.logImageImpression('snowlift', String(this.stream.getCursor()), Object.keys(xb.tagRects));
        if (xb && xb.source !== undefined) {
            this.source = parseInt(xb.source, 10);
            fa.setSource(this.source);
        }
        if (!this.pageHandlers)
            this.pageHandlers = [o.listen(this.root, 'click', this.pageListener.bind(this)), o.listen(this.root, 'mouseleave', this.mouseLeaveListener.bind(this))];
        k.show(this.stageActions);
        this.root.setAttribute('aria-busy', 'false');
        this.isLoggedInViewer = vb.loggedin;
        this.disableAds=!this.isLoggedInViewer || vb.fromad || this.stream.isInViewAsMode();
        this.loadAds();
        var yb = new za(this.stage.clientWidth, this.stage.clientHeight);
        if (wb && this._shouldShowZoomInButton(yb, wb.originalDimensions)) {
            fa.addPanoramaImpression();
            this._displayZoomInButton(yb);
        } else if (this._hasZoomCapability)
            k.hide(this.showZoomInButton);
    };
    ub.prototype.adjustScrollerIfNecessary = function() {
        "use strict";
        clearTimeout(this.scrollerTimeout);
        this.scrollerTimeout = setTimeout(this.adjustScroller.bind(this), 0);
    };
    ub.prototype.adjustScroller = function(vb) {
        "use strict";
        clearTimeout(this.scrollerTimeout);
        this.initializeScroller();
        this.scrollableArea.resize();
        var wb = za.getElementDimensions(this.rhc), xb = wb.y;
        xb -= za.getElementDimensions(this.rhcHeader).y;
        xb -= za.getElementDimensions(this.ufiInputContainer).y;
        if (this.placeInfo) {
            var yb = za.getElementDimensions(this.placeInfo);
            xb -= yb.y;
            sa.set(this.sideAdUnit, 'bottom', yb.y + 'px');
        }
        if (vb == null)
            vb = this.resizeCommentsForAds ? this.lastAdsHeight : 0;
        this.lastAdsHeight = vb;
        xb = Math.max(0, xb);
        var zb = za.getElementDimensions(this.scrollerBody).y, ac = Math.max(ub.MIN_UFI_HEIGHT, xb - vb);
        if (zb >= ac) {
            if (xb > ac) {
                k.removeClass(this.rhc, 'pinnedUfi');
                xb -= ac;
            } else {
                k.addClass(this.rhc, 'pinnedUfi');
                xb = 0;
            }
            sa.set(this.scroller, 'height', ac + 'px');
        } else {
            sa.set(this.scroller, 'height', 'auto');
            k.removeClass(this.rhc, 'pinnedUfi');
            xb -= zb;
        }
        var bc = za.getElementDimensions(this.ufiInputContainer).y;
        sa.set(this.ufiForm, 'padding-bottom', bc + 'px');
        ja.resize(new za(wb.x, xb));
        this.scrollableArea.adjustGripper();
    };
    ub.prototype.adjustForResize = function() {
        "use strict";
        this.currentMinSize = null;
        this.adjustStageSize();
        this.adjustForNewData();
        if (this._hasZoomCapability) {
            if (!this._isZoomOn)
                this._conditionDisplayZoomInButton();
            this._scrollZoomedImageToPercent(this._previousZoomScrollPercent);
        }
    };
    ub.prototype.shouldShowHiRes = function(vb) {
        "use strict";
        if (!vb ||!vb.smallurl)
            return false;
        var wb = this.getStageSize(vb.dimensions);
        wb = this._adjustStageSizeForPixelRatio(wb);
        var xb = this.getImageSizeInStage(vb.dimensions, wb);
        return (xb.x > ub.STAGE_NORMAL_MAX.x || xb.y > ub.STAGE_NORMAL_MAX.y);
    };
    ub.prototype._adjustStageSizeForPixelRatio = function(vb) {
        "use strict";
        if (window.devicePixelRatio && window.devicePixelRatio > 1)
            vb = new za(vb.x * window.devicePixelRatio, vb.y * window.devicePixelRatio);
        return vb;
    };
    ub.prototype.getImageURL = function(vb) {
        "use strict";
        if (vb.video) {
            return null;
        } else if (vb.smallurl&&!this.shouldShowHiRes(vb))
            return vb.smallurl;
        return vb.url;
    };
    ub.prototype.getImageOrVideoDimensions = function(vb) {
        "use strict";
        if (vb.video) {
            var wb = this.getVideoElement(vb.video);
            if (wb)
                return this.getVideoSize(wb);
        }
        return this.getImageDimensions(vb);
    };
    ub.prototype.getImageDimensions = function(vb) {
        "use strict";
        if (this._isZoomOn)
            return vb.originalDimensions;
        if (vb.smalldims && (!this.shouldShowHiRes(vb) || this.image.src === vb.smallurl))
            return vb.smalldims;
        return vb.dimensions;
    };
    ub.prototype.getStageSize = function(vb, wb) {
        "use strict";
        var xb = za.getViewportDimensions(), yb = new za(vb.x, vb.y + this.getExtraVerticalSpace());
        if (wb)
            yb = new za(Math.max(vb.x, wb.x), Math.max(vb.y, wb.y));
        var zb, ac;
        if (this.fullscreen && q.isFullScreen()) {
            return new za((this.rhcCollapsed ? screen.width : screen.width - ub.SIDEBAR_SIZE_MAX), screen.height - ub.FULL_SCREEN_PADDING * 2);
        } else {
            zb = Math.min(yb.x, (xb.x - ub.SIDEBAR_SIZE_MAX - ub.STAGE_CHROME.x));
            ac = Math.min(yb.y, xb.y - ub.STAGE_CHROME.y);
        }
        if (zb === 0 && ac === 0)
            return new za(0, 0);
        var bc = zb / ac, cc = yb.x / yb.y;
        if (bc < cc)
            return new za(zb, Math.round(zb / cc));
        return new za(Math.round(ac * cc), ac);
    };
    ub.prototype.getExtraVerticalSpace = function() {
        "use strict";
        if (this.getVideoOnStage())
            return ub.VIDEO_BOTTOM_BAR_SPACE * 2;
        return 0;
    };
    ub.prototype.getComponentsHeight = function() {
        "use strict";
        var vb = this.getVideoOnStage();
        if (vb)
            return this.getVideoComponentsHeight(ib(vb));
        return 0;
    };
    ub.prototype.getImageSizeInStage = function(vb, wb) {
        "use strict";
        var xb = vb.x, yb = vb.y, zb = this.getComponentsHeight(), ac = this.getExtraVerticalSpace();
        yb -= zb;
        wb = new za(wb.x, wb.y - zb - ac);
        if (xb >= wb.x || yb >= wb.y) {
            var bc = wb.x / wb.y, cc = xb / yb;
            if (bc < cc) {
                xb = wb.x;
                yb = Math.round(xb / cc);
            } else if (bc > cc) {
                yb = wb.y;
                xb = Math.round(yb * cc);
            } else {
                xb = wb.x;
                yb = wb.y;
            }
        }
        return new za(xb, yb + zb);
    };
    ub.prototype.getStageSizeForZoomedImage = function(vb, wb) {
        "use strict";
        if (this.fullscreen && q.isFullScreen()) {
            var xb = this.rhcCollapsed ? screen.width: screen.width - ub.SIDEBAR_SIZE_MAX, yb = screen.height - ub.FULL_SCREEN_PADDING * 2;
            return new za(xb, yb);
        }
        var zb = za.getViewportDimensions();
        if (wb === null)
            wb = new za(0, 0);
        var ac = new za(Math.max(vb.x, ub.STAGE_MIN.x, wb.x), Math.max(vb.y, ub.STAGE_MIN.y, wb.y)), bc = zb.x - ub.STAGE_CHROME.x;
        if (!this.rhcCollapsed)
            bc -= ub.SIDEBAR_SIZE_MAX;
        xb = Math.min(ac.x, bc);
        yb = Math.min(ac.y, zb.y - ub.STAGE_CHROME.y);
        return new za(xb, yb);
    };
    ub.prototype.adjustStageSize = function(vb) {
        "use strict";
        var wb = this.currentImageSize;
        if (vb) {
            wb = vb;
        } else {
            var xb = this.stream && this.stream.getCurrentImageData();
            if (xb)
                wb = this.getImageOrVideoDimensions(xb);
        }
        if (!wb)
            return;
        this.currentImageSize = wb;
        var yb = this.getExtraVerticalSpace();
        if (this.shouldStretch&&!this.getVideoOnStage() && wb.x > wb.y && wb.x <= ub.TIMELINE_STRETCH_WIDTH && wb.x >= ub.TIMELINE_STRETCH_MIN) {
            wb.y = Math.round(wb.y * ub.TIMELINE_STRETCH_WIDTH / wb.x);
            wb.x = ub.TIMELINE_STRETCH_WIDTH;
        }
        var zb;
        if (this._isZoomOn) {
            zb = this.getStageSizeForZoomedImage(wb, this.currentMinSize);
        } else 
            zb = this.getStageSize(wb, this.currentMinSize);
        if (!this.currentMinSize)
            this.currentMinSize = new za(0, 0);
        this.currentMinSize = new za(Math.max(zb.x, ub.STAGE_MIN.x, this.currentMinSize.x), Math.max(zb.y, ub.STAGE_MIN.y, this.currentMinSize.y));
        var ac = this.getImageSizeInStage(wb, this.currentMinSize), bc = this.currentMinSize.x - ac.x, cc = this.currentMinSize.y - ac.y;
        if (bc > 0 && bc < ub.PADDING_MIN) {
            this.currentMinSize.x -= bc;
        } else if (cc > 0 && cc < ub.PADDING_MIN)
            this.currentMinSize.y -= cc;
        var dc = this.currentMinSize.x + ub.SIDEBAR_SIZE_MAX;
        if (this.rhcCollapsed)
            dc = this.currentMinSize.x;
        this.snowliftPopup.style.cssText = 'width:' + dc + 'px;' + 'height:' + this.currentMinSize.y + 'px;';
        var ec = this.currentMinSize.y - yb + 'px';
        if (ya.firefox()) {
            var fc = sa.get(this.stageWrapper, 'font-size');
            ec = ((this.currentMinSize.y - yb) / parseFloat(fc)) + 'em';
        }
        this.stageWrapper.style.cssText = 'width:' + this.currentMinSize.x + 'px;' + 'line-height:' + ec + ';';
        if (this.getVideoOnStage())
            this.videoStage.style.cssText = 'width:' + this.currentMinSize.x + 'px;' + 'height:' + ec + ';';
        if (this._isZoomOn) {
            var gc = this.currentMinSize.y - yb;
            if (wb.y > gc) {
                var hc = (wb.x / wb.y) * gc;
                sa.apply(this.zoomedImage, {
                    width: hc + "px",
                    height: gc + "px"
                });
            } else 
                sa.apply(this.zoomedImage, {
                    width: wb.x + "px",
                    height: wb.y + "px"
                });
        } else {
            ac.y -= this.getComponentsHeight();
            this.setMediaElementSize(ac);
        }
        var ic = this.getTagger();
        if (ic)
            ic.repositionTagger();
        this.adjustScrollerIfNecessary();
    };
    ub.prototype.setMediaElementSize = function(vb) {
        "use strict";
        var wb = this.image;
        if (this.getVideoOnStage())
            wb = m.scry(this.videoStage, "._53j5")[0] || wb;
        wb.style.cssText = 'width:' + vb.x + 'px;' + 'height:' + vb.y + 'px;';
    };
    ub.prototype.adjustForNewData = function() {
        "use strict";
        if (!this.image)
            return;
        var vb = m.scry(this.stage, 'div.tagsWrapper')[0], wb = za.getElementDimensions(this.image);
        if (vb) {
            sa.set(vb, 'width', wb.x + 'px');
            sa.set(vb, 'height', wb.y + 'px');
        }
    };
    ub.prototype.adsDisplayedCallback = function(vb, wb) {
        "use strict";
        var xb = this.resizeCommentsForAds&&!this.inAdsDisplayedCallback&&!this.disableAds && vb < ub.MIN_ADS_VISIBLE && wb.length >= ub.MIN_ADS_VISIBLE;
        if (xb) {
            this.inAdsDisplayedCallback = true;
            var yb = wb[ub.MIN_ADS_VISIBLE - 1];
            this.adjustScroller(yb);
            this.inAdsDisplayedCallback = false;
        }
    };
    ub.prototype.setLoadingState = function(vb, wb) {
        "use strict";
        switch (vb) {
        case ub.STATE_IMAGE_PIXELS:
            k.conditionClass(this.root, 'imagePixelsLoading', wb);
            break;
        case ub.STATE_IMAGE_DATA:
            this.loadingStates[vb] = wb;
            k.conditionClass(this.root, 'imageLoading', wb);
            break;
        case ub.STATE_HTML:
            this.loadingStates[vb] = wb;
            k.conditionClass(this.root, 'dataLoading', wb);
            this.rhc.setAttribute('aria-busy', wb ? 'true' : 'false');
            break;
        }
    };
    ub.prototype.destroy = function() {
        "use strict";
        this.stageHandlers.forEach(function(vb) {
            vb.remove();
        });
        if (this.pageHandlers) {
            this.pageHandlers.forEach(function(vb) {
                vb.remove();
            });
            this.pageHandlers = null;
        }
        this._slideshowToken && clearInterval(this._slideshowToken);
        this._slideshowToken = null;
        this._videoPlayerStateManager = null;
    };
    ub.prototype.checkState = function(vb) {
        "use strict";
        if (vb != ub.STATE_ERROR&&!this.loadingStates[vb])
            return;
        switch (vb) {
        case ub.STATE_IMAGE_DATA:
            var wb = this.stream.getCurrentImageData();
            if (wb) {
                var xb = this.getImageURL(wb);
                if (xb) {
                    this.switchImage(xb, null, true);
                } else if (wb.video)
                    this.switchVideo(wb.video, true);
                this.setLoadingState(vb, false);
            }
            break;
        case ub.STATE_HTML:
            if (this.stream.getCurrentHtml()) {
                this.swapData();
                this.setLoadingState(vb, false);
            }
            break;
        default:
            if (this.stream.errorInCurrent()) {
                k.hide(this.image);
                k.show(this.errorBox);
            }
            break;
        }
    };
    ub.prototype.buttonListener = function(event) {
        "use strict";
        var vb = event.getTarget(), wb = Date.now();
        if (ba.byClass(vb, "_5qmg")) {
            fa.addPanoramaClick();
            this.switchIntoZoomedImage();
            return;
        }
        if (ba.byClass(vb, "_5qmh")) {
            this._setZoomOut();
            this.switchImage(this.getImageURL(this.stream.getCurrentImageData()));
            return false;
        }
        if (ba.byClass(vb, 'fbPhotoTagApprovalBox'))
            return;
        if (wb - this.lastPage < 350)
            return;
        if (ba.byClass(vb, 'fbPhotosPhotoLike')) {
            this.likePhoto();
        } else if (ba.byClass(vb, 'tagApproveIgnore')) {
            this.updateTagBox(event, vb);
        } else if (ba.byClass(vb, "_5ge9")) {
            this.hideMorePhotos();
            this.toggleSlideshow();
            return false;
        } else if (ba.byClass(vb, "_5ymu")) {
            if (!this._showingMorePhotos) {
                ma.logShowMorePhotos();
                var xb = this.stream.getCursor();
                if (xb)
                    this.showMorePhotos(String(xb));
                if (this._hasZoomCapability)
                    k.hide(this.showZoomInButton);
            } else {
                ma.logHideMorePhotos();
                this._conditionDisplayZoomInButton();
                this.hideMorePhotos();
            }
            return;
        } else if (ba.byClass(vb, "_27n"))
            this._conditionDisplayZoomInButton();
        this.hideMorePhotos();
    };
    ub.prototype.toggleSlideshow = function() {
        "use strict";
        if (!this.slideshowGk)
            return;
        if (this._slideshowToken) {
            this.stopSlideshow();
        } else 
            this.startSlideshow();
    };
    ub.prototype.startSlideshow = function() {
        "use strict";
        this._slideshowToken = window.setInterval(this.page.bind(this, 1, ya.chrome() && q.isFullScreen()), ub.SLIDESHOW_TIME);
        k.addClass(this.root, 'slideshowStarted');
        k.removeClass(this.root, 'slideshowAvailable');
    };
    ub.prototype.stopSlideshow = function() {
        "use strict";
        this._slideshowToken && clearInterval(this._slideshowToken);
        this._slideshowToken = null;
        k.addClass(this.root, 'slideshowAvailable');
        k.removeClass(this.root, 'slideshowStarted');
    };
    ub.prototype.likePhoto = function() {
        "use strict";
        fa.addButtonLike();
        var vb = bb('fbPhotoSnowliftFeedback'), wb = m.scry(vb, 'button.like_link')[0];
        if (!wb)
            wb = m.scry(vb, 'a.UFILikeLink')[0];
        var xb = wb.getAttribute('href');
        if (q.isFullScreen())
            if (ya.chrome())
                wb.setAttribute('href', 'javascript:;');
        wb.click();
        wb.setAttribute('href', xb);
    };
    ub.prototype.toggleLikeButton = function() {
        "use strict";
        var vb = m.scry(this.buttonActions, 'a.fbPhotosPhotoLike')[0];
        if (vb) {
            var wb = m.find(this.root, '.likeCount'), xb = m.find(wb, '.likeCountNum');
            if (wb)
                if (k.hasClass(vb, 'viewerLikesThis')) {
                    m.setContent(xb, parseInt(xb.textContent, 10) - 1);
                } else 
                    m.setContent(xb, parseInt(xb.textContent, 10) + 1);
            k.toggleClass(vb, 'viewerLikesThis');
            k.removeClass(vb, 'viewerAlreadyLikedThis');
        }
    };
    ub.prototype.likePhotoWithKey = function() {
        "use strict";
        return w.like(this.likePhoto.bind(this), jb());
    };
    ub.prototype.updateTagBox = function(vb, wb) {
        "use strict";
        this.unhiliteAllTags();
        var xb = ib(vb);
        if (!xb)
            return;
        k.addClass(xb, 'tagBox');
        k.addClass(xb, 'tagBoxPendingResponse');
        k.removeClass(xb, 'tagBoxPending');
        k.hide(m.find(xb, 'span.tagForm'));
        if (wb) {
            k.show(m.find(xb, 'span.tagApproved'));
        } else 
            k.show(m.find(xb, 'span.tagIgnored'));
    };
    ub.prototype.rotate = function(vb) {
        "use strict";
        var wb = this.stream.getCursor();
        if (this.getVideoOnStage()) {
            var xb = (vb == 'left') ? 270: 90;
            h.isTruthy(this.videoRotateURI, "Video rotate URI not set.");
            j.loadModules(["VideoRotate"], function(zb) {
                new zb(wb, this.videoRotateURI).motionRotate(xb);
            }.bind(this));
            return;
        }
        var yb = db({
            fbid: wb,
            opaquecursor: this.stream.getOpaqueCursor(wb),
            cs_ver: ea.VIEWER_SNOWLIFT
        }, this.stream.getPhotoSetQuery());
        yb[vb] = 1;
        this.setLoadingState(ub.STATE_IMAGE_DATA, true);
        this.setLoadingState(this.STATE_IMAGE_PIXELS, true);
        k.hide(this.image);
        new i('/ajax/photos/photo/rotate/').setAllowCrossPageTransition(true).setData(yb).setErrorHandler(this.rotationError.bind(this, wb)).setFinallyHandler(this.rotationComplete.bind(this, wb)).setMethod('POST').setReadOnly(false).send();
    };
    ub.prototype.rotationComplete = function(vb, wb) {
        "use strict";
        if (vb == this.stream.getCursor()) {
            this.setLoadingState(ub.STATE_IMAGE_DATA, false);
            this.switchImage(this.getImageURL(this.stream.getCurrentImageData()));
            this.swapData();
        }
    };
    ub.prototype.rotationError = function(vb, wb) {
        "use strict";
        if (vb == this.stream.getCursor()) {
            this.setLoadingState(ub.STATE_IMAGE_DATA, false);
            this.switchImage(this.getImageURL(this.stream.getCurrentImageData()));
            j.loadModules(["AsyncResponse"], function(xb) {
                xb.defaultErrorHandler(wb);
            });
        }
    };
    ub.prototype.saveTagsFromPayload = function(vb) {
        "use strict";
        this.storeFromData(vb);
        if ('data' in vb && this.stream.getCursor() in vb.data)
            this.swapData();
    };
    ub.prototype.saveEdit = function() {
        "use strict";
        if (!k.hasClass(this.root, 'fbPhotoSnowliftEditMode'))
            return;
        j.loadModules(["PhotoInlineEditor", "Form"], function(vb, wb) {
            var xb = vb.getInstance(this.getViewerConst());
            xb && wb.bootstrap(xb.getForm().controller);
        }.bind(this));
    };
    ub.prototype.mouseLeaveListener = function(event) {
        "use strict";
        this.unhiliteAllTags();
        this.reHilitePendingTag();
    };
    ub.prototype.hilitePager = function(event) {
        "use strict";
        var vb = za.getEventPosition(event), wb = za.getElementPosition(this.stage);
        if (z.isRTL()) {
            var xb = za.getElementDimensions(this.stage);
            this.stagePagerPrev = xb.x - (vb.x - wb.x) < ub.GOPREV_AREA;
        } else 
            this.stagePagerPrev = vb.x - wb.x < ub.GOPREV_AREA;
        k.conditionClass(this.prevPager, 'hilightPager', this.stagePagerPrev);
        k.conditionClass(this.nextPager, 'hilightPager', !this.stagePagerPrev);
        var yb, zb = event.getTarget();
        if (!ba.byClass(zb, 'snowliftOverlay')&&!ba.byClass(zb, 'bottomBarActions')&&!ba.byClass(zb, 'snowliftPager'))
            yb = ub.PAGER_FADE;
        this.showPagers(yb);
    };
    ub.prototype.showPagers = function(vb) {
        "use strict";
        clearTimeout(this.fadePagerTimer);
        this.setStagePagersState('active');
        if (typeof vb !== 'undefined')
            this.fadePagerTimer = setTimeout(this.hidePagers.bind(this), vb);
    };
    ub.prototype.hidePagers = function() {
        "use strict";
        var vb = m.scry(this.getRoot(), '.fbPhotosPhotoActionsMenu')[0];
        if (vb)
            return;
        clearTimeout(this.fadePagerTimer);
        this.setStagePagersState('inactive');
    };
    ub.prototype.getTagger = function() {
        "use strict";
        return (this.PhotoTagger && this.PhotoTagger.getInstance(ea.VIEWER_SNOWLIFT));
    };
    ub.prototype.unhiliteAllTags = function() {
        "use strict";
        clearTimeout(this.unhiliteTimer);
        m.scry(this.stage, 'div.tagsWrapper div.hover').forEach(function(wb) {
            k.removeClass(wb, 'hover');
        });
        m.scry(this.stage, 'div.tagsWrapper div.otherActive').forEach(function(wb) {
            k.removeClass(wb, 'otherActive');
        });
        this.hilitedTag = null;
        this.showingTypeaheadSuggestions = false;
        if (!k.hasClass(this.root, 'taggingMode')) {
            var vb = this.getTagger();
            if (vb) {
                vb.hideTagger();
                vb.setCurrentFacebox(null);
            }
        }
    };
    ub.prototype.switchHilitedTags = function(vb, wb) {
        "use strict";
        if (this.switchTimer !== null) {
            clearTimeout(this.switchTimer);
            this.switchTimer = null;
        }
        this.unhiliteAllTags();
        this.hiliteAllBoxes();
        var xb = ib(vb);
        if (xb) {
            this.hilitedTag = vb;
            if (!k.hasClass(this.root, 'taggingMode') && la.isFacebox(this.hilitedTag)) {
                var yb = this.getTagger();
                if (yb) {
                    k.addClass(xb, 'hover');
                    var zb = yb.getFacebox(vb);
                    yb.setCurrentFacebox(zb);
                    if (zb)
                        yb.addTagFromFacebox(zb);
                }
            } else 
                k.addClass(xb, 'hover');
            if (k.hasClass(xb, 'tagBoxPending')&&!k.hasClass(xb, 'showPendingTagName') && wb === true) {
                m.scry(this.stage, 'div.tagsWrapper div.showPendingTagName').forEach(function(ac) {
                    k.removeClass(ac, 'showPendingTagName');
                });
                k.addClass(xb, 'showPendingTagName');
            }
        }
    };
    ub.prototype.reHilitePendingTag = function() {
        "use strict";
        var vb = ib(this.hilitedTag);
        if (vb && k.hasClass(vb, 'showPendingTagName'))
            return;
        var wb = m.scry(this.stage, 'div.tagsWrapper div.showPendingTagName')[0];
        if (wb)
            this.switchHilitedTags(wb.id);
    };
    ub.prototype.hiliteTagsOnMouseMove = function(event) {
        "use strict";
        if (!this.stream.getCurrentExtraData() || this.getVideoOnStage())
            return;
        if (this.switchTimer !== null)
            return;
        var vb = event.getTarget();
        if (ba.byClass(vb, 'snowliftOverlay') || ba.byClass(vb, 'fbPhotoSnowliftTagApproval') || ba.byClass(vb, 'tagPointer') || ba.byClass(vb, 'arrow') || ba.byClass(vb, 'faceboxSuggestion') || ba.byClass(vb, 'typeaheadWrapper') || ba.byClass(vb, 'photoTagTypeahead'))
            return;
        var wb = ba.byClass(vb, 'tagBoxPending'), xb = false;
        if (this.hilitedTag) {
            var yb = ib(this.hilitedTag);
            xb = yb && k.hasClass(yb, 'tagBoxPending');
        }
        var zb = ((!this.hilitedTag && wb) || (!xb && wb));
        if (zb) {
            this.switchHilitedTags(wb.id);
            return;
        }
        if (wb && (wb.id == this.hilitedTag))
            return;
        var ac = 250, bc = 15, cc = za.getEventPosition(event);
        if (!this.startingMousePos)
            this.startingMousePos = cc;
        var dc = la.absoluteToNormalizedPosition(this.image, cc);
        if (!this.haveLeftBufferRegion && this.startingMousePos.distanceTo(cc) < bc) {
            return;
        } else 
            this.haveLeftBufferRegion = true;
        if (this.currentTagHasPrecedence(dc))
            return;
        var ec = la.getNearestBox(this.stream.getCurrentExtraData().tagRects, dc);
        if (!ec) {
            if (!xb) {
                this.unhiliteAllTags();
                this.reHilitePendingTag();
            }
            return;
        }
        var fc = null;
        if (xb) {
            var gc = {};
            gc[this.hilitedTag] = this.stream.getCurrentExtraData().tagRects[this.hilitedTag];
            fc = la.getNearestBox(gc, dc);
        }
        if (fc !== null && xb)
            return;
        if (this.hilitedTag != ec)
            if (xb) {
                this.switchTimer = setTimeout(this.switchHilitedTags.bind(this, ec), ac);
            } else {
                if (this._showHover&&!this._seenTags[ec]) {
                    this._seenTags[ec] = true;
                    ma.logPivotImpression('snowlift', ec);
                }
                this.switchHilitedTags(ec);
            }
    };
    ub.prototype.currentTagHasPrecedence = function(vb) {
        "use strict";
        if (!this.hilitedTag)
            return false;
        if (this.stream.getCurrentExtraData().tagRects[this.hilitedTag] === undefined) {
            this.hilitedTag = null;
            return false;
        }
        var wb = this.stream.getCurrentExtraData().tagRects[this.hilitedTag], xb = new pa(wb.t + (wb.h() / 2), wb.r, wb.b + (la.isFacebox(this.hilitedTag) ? 10 : 0), wb.l, wb.domain);
        return xb.contains(vb);
    };
    ub.prototype.getVideoOnStage = function() {
        "use strict";
        var vb = this.stream && this.stream.getCurrentImageData();
        return vb && vb.video;
    };
    ub.prototype.shouldPageOnAction = function(vb, wb) {
        "use strict";
        if (!this.isOpen || w.isShowingConfirmation())
            return false;
        var xb = m.isNode(wb) && (ba.byClass(wb, 'snowliftPager') || ba.byClass(wb, 'stagePagers') || ba.byClass(wb, 'pivotPageColumn')), yb = m.isNode(wb) && ba.byClass(wb, 'stage'), zb = k.hasClass(wb, 'faceBox'), ac = (!k.hasClass(this.root, 'taggingMode') && zb&&!xb);
        if (ac) {
            if (!this.showingTypeaheadSuggestions) {
                this.getTagger().updateWithSuggestions();
                setTimeout((function() {
                    m.find(this.getTagger().tagger, 'input.textInput').focus();
                }).bind(this), 0);
            }
            this.showingTypeaheadSuggestions=!this.showingTypeaheadSuggestions;
            return false;
        }
        var bc = ((yb && k.hasClass(this.root, 'taggingMode')) || ba.byClass(wb, 'tagBoxPending') || ba.byClass(wb, 'tagBoxPendingResponse') || ba.byClass(wb, 'fbPhotoTagApprovalBox') || ba.byClass(wb, 'tag') || (this.cropper && this.cropper.croppingMode));
        if (bc)
            return false;
        if (yb && this._isZoomOn)
            yb = false;
        return vb == t.LEFT || vb == t.RIGHT || vb == nb || vb == ob || xb || ac || yb;
    };
    ub.prototype.keyHandler = function(vb, event) {
        "use strict";
        if (event.getModifiers().any || u.getTopmostLayer() !== this.spotlight)
            return true;
        switch (o.getKeyCode(event)) {
        case t.LEFT:
        case t.RIGHT:
        case nb:
        case ob:
            this.pageListener(event);
            return false;
        case pb:
            return this.toggleFullScreen();
        case qb:
            return this.likePhotoWithKey();
        case t.SPACE:
            this.toggleSlideshow();
            this.showPagers(ub.PAGER_FADE);
            return false;
        case t.ESC:
            if (this._isZoomOn) {
                this._setZoomOut();
                this.switchImage(this.getImageURL(this.stream.getCurrentImageData()));
                return false;
            }
            break;
        }
    };
    ub.prototype.shouldHandlePendingTag = function(event) {
        "use strict";
        var vb = this.getTagger();
        if (!vb ||!vb.tags.length)
            return false;
        var wb = la.absoluteToNormalizedPosition(this.getImage(), za.getEventPosition(event)), xb = vb.findNearestTag(wb);
        if (!xb ||!k.hasClass(xb.node, 'tagBoxPending'))
            return false;
        g.inform('PhotoTagApproval.PENDING_TAG_PHOTO_CLICK', {
            id: xb.id,
            version: this.getVersionConst()
        });
        return true;
    };
    ub.prototype.pageListener = function(event) {
        "use strict";
        var vb = o.getKeyCode(event), wb = event.getTarget();
        if (this._slideshowToken) {
            this.stopSlideshow();
            return;
        }
        if (!this.shouldPageOnAction(vb, wb))
            return;
        if (this.shouldHandlePendingTag(event))
            return;
        var xb = 0;
        if (vb == t.RIGHT || vb == ob) {
            xb = 1;
            fa.setPagingAction('key_right');
            this._disableMouseOver = true;
        } else if (vb == t.LEFT || vb == nb) {
            xb =- 1;
            fa.setPagingAction('key_left');
            this._disableMouseOver = true;
        } else if (ba.byClass(wb, 'next')) {
            xb = 1;
            fa.setPagingAction('click_next');
        } else if (ba.byClass(wb, 'prev')) {
            xb =- 1;
            fa.setPagingAction('click_prev');
        } else if (!this.stagePagerPrev) {
            xb = 1;
            fa.setPagingAction('click_stage');
        } else {
            xb =- 1;
            fa.setPagingAction('click_stage_back');
        }
        var yb = m.scry(this.ufiForm, 'input.mentionsHidden'), zb = false;
        for (var ac = 0; ac < yb.length; ac++)
            if (!s.isEmpty(yb[ac])) {
                zb = true;
                break;
            }
        if (zb || k.hasClass(this.root, 'fbPhotoSnowliftEditMode') || (this.cropper && this.cropper.croppingMode)) {
            this.warnLeavePage(this.page.bind(this, xb));
        } else {
            this.page(xb, ya.chrome() && q.isFullScreen());
            this._previousZoomScrollPercent = null;
            mb('snowlift', wb, event).uai(fa.pagingAction);
        }
    };
    ub.prototype.warnLeavePage = function(vb) {
        "use strict";
        new l().setTitle("Are You Sure You Want To Leave This Page?").setBody("You have unsaved changes that will be lost if you leave the page.").setButtons([{
            name: 'leave_page',
            label: "Leave This Page",
            handler: vb
        }, {
            name: 'continue_editing',
            label: "Stay on This Page",
            className: 'inputaux'
        }
        ]).setModal(true).show();
    };
    ub.prototype.getUsesOpaqueCursor = function() {
        "use strict";
        return this.stream.getUsesOpaqueCursor();
    };
    ub.prototype.getOpaqueCursor = function(vb) {
        "use strict";
        return this.stream.getOpaqueCursor(vb);
    };
    ub.prototype.setReachedLeftEnd = function() {
        "use strict";
        this.stream.setReachedLeftEnd();
    };
    ub.prototype.setReachedRightEnd = function() {
        "use strict";
        this.stream.setReachedRightEnd();
    };
    ub.prototype.page = function(vb, wb) {
        "use strict";
        if (!this.stream.isValidMovement(vb) ||!this.stream.nonCircularPhotoSetCanPage(vb)) {
            this.showPagers(ub.PAGER_FADE);
            return;
        }
        var xb = this.stream.getCursorAt(this.stream.calculatePositionForMovement(vb));
        if (this.snowflake && ((this.stream.getCursor() == this.firstInSet && vb < 0) || (this.firstInSet == xb && vb > 0))) {
            this.showPagers(ub.PAGER_FADE);
            return;
        }
        this.lastPage = Date.now();
        this.unhiliteAllTags();
        this.startingMousePos = null;
        this.haveLeftBufferRegion = false;
        this._seenTags = {};
        this._navCount += vb;
        var yb = this.stream.allLoaded ? Math.abs(this._navCount) - this.stream.getLength(): null;
        if (this._extraSlidePivot && this._albumFBID) {
            if (!this._albumBoundaries.end && yb === 0) {
                this._albumBoundaries.end = this.stream.getCursor();
            } else if (yb===-1)
                ia.fetch(this._albumFBID, this.stream);
            if (!this.onExtraSlide) {
                if (this.stream.getCursor() === this._albumBoundaries.end && xb === this._albumBoundaries.start) {
                    this.showPivotSlide(this._albumFBID, wb);
                    return;
                } else if (this.stream.getCursor() === this._albumBoundaries.start && xb === this._albumBoundaries.end)
                    this.showPivotSlide(this._albumFBID, wb);
            } else {
                this.hidePivotSlide();
                if (xb !== this._albumBoundaries.start)
                    return;
            }
        }
        var zb = this.getVideoOnStage();
        if (zb)
            this.switchVideo(zb, false);
        if (this.pivots && this.pivots.page(vb))
            return;
        g.inform('PhotoSnowlift.PAGE');
        ta.hide();
        this.recacheData();
        this.stream.moveCursor(vb);
        k.hide(this.image);
        if (vb !== 0) {
            this.storyID = null;
            this._updateContainerOwnerID();
        }
        if (vb !== 0 && this._isZoomOn)
            this._setZoomOut();
        if (this.stream.errorInCurrent()) {
            this.setLoadingState(ub.STATE_HTML, true);
            k.show(this.errorBox);
            return;
        }
        this.movementDelta += vb;
        var ac = this.stream.getCurrentImageData();
        if (ac) {
            var bc = this.getImageURL(ac);
            if (bc) {
                this.switchImage(bc, null, true);
            } else if (ac.video)
                this.switchVideo(ac.video, true);
            if (!wb) {
                this.replaceUrl = true;
                kb(ac.info.permalink);
            }
            this.setLoadingState(ub.STATE_IMAGE_DATA, false);
        } else {
            this.setLoadingState(ub.STATE_IMAGE_PIXELS, true);
            this.setLoadingState(ub.STATE_IMAGE_DATA, true);
        }
        if (this.stream.getCurrentHtml()) {
            this.swapData();
        } else 
            this.setLoadingState(ub.STATE_HTML, true);
        this.disableAds=!this.isLoggedInViewer || this.stream.isInViewAsMode();
        this.loadAds();
        if (this.cropper)
            this.cropper.resetPhoto();
        this.setLeftAndRightPagersState();
        if (this._slideshowToken) {
            k.addClass(this.root, 'slideshowStarted');
        } else if (this.slideshowAvailable)
            k.addClass(this.root, 'slideshowAvailable');
        if (!this._extraSlidePivot && this._showMorePhotos && this._albumFBID)
            if (yb===-1) {
                ia.fetch(this._albumFBID, this.stream);
            } else if (yb === 0) {
                ma.logSuggestMorePhotos();
                this.showMorePhotos(this._albumFBID, true);
                this.showPagers();
                this._navCount = 0;
            } else {
                this.hideMorePhotos();
                this.hidePagers();
            }
    };
    ub.prototype.showMorePhotos = function(vb, wb) {
        "use strict";
        if (this._showingMorePhotos)
            return;
        this._showingMorePhotos = true;
        if (!this.searchPivot)
            this.searchPivot = this.overlay.appendChild(document.createElement('div'));
        k.addClass(this.stageWrapper, "_5ymv");
        this.searchPivotComponent = oa.render(oa.createElement(ha, {
            className: "_27g",
            fbid: vb,
            onclose: this.hideMorePhotos.bind(this),
            endofalbum: wb || false,
            withBackground: true
        }), this.searchPivot);
    };
    ub.prototype.hideMorePhotos = function() {
        "use strict";
        if (this.searchPivotComponent && this._showingMorePhotos) {
            this._showingMorePhotos = false;
            k.removeClass(this.stageWrapper, "_5ymv");
            this.searchPivotComponent.setProps({
                fbid: null
            });
        }
    };
    ub.prototype.showPivotSlide = function(vb, wb) {
        "use strict";
        if (this.onExtraSlide)
            return;
        this.onExtraSlide = true;
        k.addClass(this.stageWrapper, "_3tvf");
        if (!this.pivotSlide) {
            this.pivotSlide = m.create('div');
            m.insertBefore(this.stageActions, this.pivotSlide);
        }
        this.pivotSlideComponent = oa.render(oa.createElement(ga, {
            fbid: vb,
            isAlbum: this._isAlbum,
            albumOwnerName: this._albumOwnerName,
            visible: true,
            onReturn: this.returnToBeginning.bind(this, wb)
        }), this.pivotSlide);
    };
    ub.prototype.hidePivotSlide = function() {
        "use strict";
        if (this.pivotSlideComponent && this.onExtraSlide) {
            this.pivotSlideComponent.setProps({
                visible: false
            });
            k.removeClass(this.stageWrapper, "_3tvf");
        }
        this.onExtraSlide = false;
    };
    ub.prototype.returnToBeginning = function(vb) {
        "use strict";
        var wb = this.stream.getRelativeMovement(this._albumBoundaries.start);
        this.page(wb, vb);
    };
    ub.prototype.logImpressionDetailsForPhoto = function() {
        "use strict";
        var vb = [].concat(m.scry(bb('fbPhotoSnowliftTagList'), 'input.photoImpressionDetails'), m.scry(bb('fbPhotoSnowliftFeedback'), 'input.photoImpressionDetails'));
        if (vb.length === 0)
            return;
        var wb = {};
        for (var xb = 0; xb < vb.length; xb++)
            wb[vb[xb].name] = vb[xb].value;
        if (this.getVideoOnStage()) {
            wb.width = 0;
            wb.height = 0;
        } else {
            var yb = this.getImageDimensions(this.stream.getCurrentImageData());
            wb.width = yb.x;
            wb.height = yb.y;
        }
        fa.addDetailData(this.stream.getCursor(), wb);
        ja.setIsLogAdData(true);
    };
    ub.prototype.loadAds = function() {
        "use strict";
        if (this.disableAds)
            return;
        ja.loadAdsFromUserActivity();
    };
    ub.prototype.transitionHandler = function(vb) {
        "use strict";
        if (vb.getQueryData().closeTheater || vb.getQueryData().permPage || vb.getQueryData().makeprofile || this.returningToStart) {
            if (this.isOpen)
                this.close();
            this.transitionHandlerRegistered = false;
            return false;
        }
        if (this.replaceUrl) {
            this.replaceUrl = false;
            this._uriStack.push(vb.getQualifiedURI().toString());
            aa.transitionComplete(true);
            return true;
        }
        var wb = this._uriStack.length;
        if (wb >= 2 && this._uriStack[wb - 2] == vb.getQualifiedURI().toString())
            this._uriStack.pop();
        var xb = this.stream.getCursorForURI(vb.getUnqualifiedURI().toString());
        if (xb) {
            var yb = this.stream.getRelativeMovement(xb);
            this.page(yb, true);
            aa.transitionComplete(false);
            return true;
        }
        if (this.isOpen) {
            aa.transitionComplete(true);
            this.close();
            return true;
        }
        this.transitionHandlerRegistered = false;
        return false;
    };
    ub.prototype.recacheData = function() {
        "use strict";
        if (!this.loadingStates.html) {
            var vb = this.stream.getCurrentHtml();
            for (var wb in vb) {
                vb[wb] = eb(bb(wb).childNodes);
                m.empty(bb(wb));
            }
        }
    };
    ub.prototype.reloadIfTimeout = function() {
        "use strict";
        if (!r.hasLoaded(this.image)) {
            var vb = this.makeNewImage(this.image.src, true);
            o.listen(vb, 'load', this.useImage.bind(this, vb, null, true));
            this._log(vb.src);
        }
    };
    ub.prototype.useImage = function(vb, wb, xb) {
        "use strict";
        if (xb && r.hasLoaded(this.image))
            return;
        m.replace(this.image, vb);
        this.image = vb;
        this.adjustStageSize(wb);
    };
    ub.prototype.makeNewImage = function(vb, wb) {
        "use strict";
        if (this.imageLoadingTimer) {
            clearTimeout(this.imageLoadingTimer);
            this.imageLoadingTimer = null;
        } else if (!wb)
            this.imageRefreshTimer = setTimeout(this.reloadIfTimeout.bind(this), ub.LOADING_TIMEOUT);
        var xb = m.create('img', {
            className: 'spotlight',
            alt: ''
        });
        xb.setAttribute('aria-describedby', 'fbPhotosSnowliftCaption');
        xb.setAttribute('aria-busy', 'true');
        var yb = function() {
            clearTimeout(this.imageRefreshTimer);
            this.image.setAttribute('aria-busy', 'false');
            this.setLoadingState(this.STATE_IMAGE_PIXELS, false);
            setTimeout((function() {
                if (this.isOpen) {
                    this.adjustStageSize();
                    this.adjustForNewData();
                }
            }).bind(this), 0);
        }.bind(this);
        o.listen(xb, 'load', yb);
        this._log(vb);
        xb.src = vb;
        return xb;
    };
    ub.prototype.switchImage = function(vb, wb, xb) {
        "use strict";
        k.hide(this.image);
        k.hide(this.errorBox);
        this.setLoadingState(this.STATE_IMAGE_PIXELS, true);
        var yb = this.stream && this.stream.getCurrentImageData();
        if (yb) {
            fa.addPhotoView(yb.info, this.shouldShowHiRes(yb), this.fullscreen && q.isFullScreen());
            if (this._showHover) {
                var zb = this.stream.getCurrentExtraData();
                if (zb)
                    ma.logImageImpression('snowlift', String(this.stream.getCursor()), Object.keys(zb.tagRects));
            }
        }
        this.useImage(this.makeNewImage(vb, false), wb, false);
        if (xb)
            this.stream.preloadImages(this.shouldShowHiRes.bind(this));
        if (this.cropper && this.cropper.croppingMode)
            this.cropper.resetPhoto();
        var ac = new za(this.stage.clientWidth, this.stage.clientHeight);
        if (yb && this._shouldShowZoomInButton(ac, yb.originalDimensions)&&!this._isZoomOn) {
            fa.addPanoramaImpression();
            this._displayZoomInButton(ac);
        } else if (this._hasZoomCapability)
            k.hide(this.showZoomInButton);
        if (this._isZoomOn)
            this.switchIntoZoomedImage();
        g.inform('PhotoSnowlift.SWITCH_IMAGE');
    };
    ub.prototype._conditionDisplayZoomInButton = function() {
        "use strict";
        if (!this._hasZoomCapability)
            return;
        var vb = this.stream && this.stream.getCurrentImageData(), wb = vb && vb.originalDimensions;
        if (!wb)
            return;
        var xb = new za(this.stage.clientWidth, this.stage.clientHeight);
        if (this._shouldShowZoomInButton(xb, wb)) {
            this._displayZoomInButton(xb);
        } else 
            k.hide(this.showZoomInButton);
    };
    ub.prototype._displayZoomInButton = function(vb) {
        "use strict";
        var wb = parseInt(this.image.style.height, 10), xb = (vb.y - wb) / 2;
        if (xb >= ub.ZOOM_BUTTON_TOP_PAD + ub.ZOOM_BUTTON_BOT_PAD + ub.ZOOM_BUTTON_HEIGHT) {
            var yb = xb - ub.ZOOM_BUTTON_HEIGHT - ub.ZOOM_BUTTON_TOP_PAD;
            sa.set(this.showZoomInButton, 'bottom', yb + 'px');
        } else 
            sa.set(this.showZoomInButton, 'bottom', '60px');
        k.show(this.showZoomInButton);
    };
    ub.prototype._shouldShowZoomInButton = function(vb, wb) {
        "use strict";
        if (!this._hasZoomCapability ||!wb)
            return false;
        var xb = wb.x / wb.y, yb = Math.min(vb.y * xb, wb.x);
        if (!isNaN(xb) && xb > 2 && wb.y > ub.MIN_PANORAMA_Y && vb.x * ub.MIN_PANO_TO_STAGE_RATIO < yb) {
            return true;
        } else 
            return false;
    };
    ub.prototype._setZoomIn = function() {
        "use strict";
        this._isZoomOn = true;
        k.hide(this.showZoomInButton);
        k.hide(this.stageActions);
        k.show(this.showZoomOutButton);
        sa.set(this.stage, 'overflow', 'hidden');
        this.spotlight.disableBehavior(v);
        this.collapseRHC();
    };
    ub.prototype._setZoomOut = function() {
        "use strict";
        if (!this._hasZoomCapability)
            return;
        this._isZoomOn = false;
        this.spotlight.enableBehavior(v);
        sa.set(this.stage, 'overflow', 'visible');
        k.hide(this.showZoomInButton);
        k.hide(this.showZoomOutButton);
        k.hide(this.zoomedImage);
        k.hide(this.outerImageSlider);
        k.show(this.stageActions);
        this.uncollapseRHC();
    };
    ub.prototype.switchIntoZoomedImage = function(vb) {
        "use strict";
        this._setZoomIn();
        k.hide(this.zoomedImage);
        k.hide(this.outerImageSlider);
        var wb = this.stream.getCurrentImageData(), xb = wb.originalDimensions;
        this.zoomedImage.src = wb.url;
        this.adjustStageSize(xb);
        this._initializeZoomedImagePositions(new za(parseInt(sa.get(this.zoomedImage, 'width'), 10), parseInt(sa.get(this.zoomedImage, 'height'), 10)));
        k.hide(this.image);
    };
    ub.prototype._adjustInnerImageSlider = function(vb) {
        "use strict";
        var wb = this.stage.clientWidth, xb = Math.min(100, (wb / vb.x) * 100);
        sa.set(this.innerImageSlider, 'width', xb + '%');
        return xb;
    };
    ub.prototype._getSliderSizeForZoomedImage = function(vb) {
        "use strict";
        var wb = ub.MAX_SLIDER_HEIGHT * this.stage.clientHeight / vb.y, xb = ub.MAX_SLIDER_WIDTH * this.stage.clientWidth / vb.x, yb = Math.min(wb, xb);
        return new za(100 * vb.x * yb / this.stage.clientWidth, 100 * vb.y * yb / this.stage.clientHeight);
    };
    ub.prototype._initializeZoomedImagePositions = function(vb) {
        "use strict";
        this._scrollZoomedImageToPercent(this._previousZoomScrollPercent);
        var wb = this._getSliderSizeForZoomedImage(vb);
        sa.set(this.outerImageSlider, 'width', wb.x + '%');
        sa.set(this.outerImageSlider, 'height', wb.y + '%');
        sa.set(this.outerImageSlider, 'left', (50 - wb.x / 2) + '%');
        sa.set(this.showZoomOutButton, 'bottom', wb.y * this.stage.clientHeight / 100 + parseInt(sa.get(this.outerImageSlider, 'bottom'), 10) + 20 + 'px');
        k.show(this.zoomedImage);
        k.show(this.outerImageSlider);
    };
    ub.prototype._zoomedImageMouseDown = function(event) {
        "use strict";
        if (!this._isZoomOn)
            return;
        k.addClass(this.stage, 'showSlider');
        if (this._zoomedImageMouseMoveHandle)
            this._zoomedImageMouseMoveHandle.remove();
        var vb = false, wb = event.getTarget();
        if (ba.byClass(wb, "_10zv")) {
            this.startSliderMargins = new za(parseFloat(sa.get(this.innerImageSlider, 'marginLeft')), parseFloat(sa.get(this.innerImageSlider, 'marginTop')));
            this.startImageMargins = null;
            this.mouseDownStartPosition = new za(event.clientX, event.clientY);
        } else if (ba.byClass(wb, "_10zx")) {
            this.startSliderMargins = new za(parseInt(sa.get(this.innerImageSlider, 'marginLeft'), 10), parseInt(sa.get(this.innerImageSlider, 'marginTop'), 10));
            this.startImageMargins = null;
            var xb = parseInt(sa.get(this.innerImageSlider, 'width'), 10);
            this.mouseDownStartPosition = new za(this.innerImageSlider.getBoundingClientRect().left + xb / 2, event.clientY);
            vb = true;
        } else if (ba.byClass(wb, "_10zw")) {
            this.startImageMargins = new za(parseInt(sa.get(this.zoomedImage, 'marginLeft'), 10), parseInt(sa.get(this.zoomedImage, 'marginTop'), 10));
            this.startSliderMargins = null;
            this.mouseDownStartPosition = new za(event.clientX, event.clientY);
        }
        this._zoomedImageMouseMoveHandle = o.listen(this.stage, 'mousemove', this._zoomedImagePan.bind(this));
        if (vb) {
            this._zoomedImagePan(event);
        } else 
            event.kill();
    };
    ub.prototype._zoomedImageMouseUp = function(event) {
        "use strict";
        if (this._zoomedImageMouseMoveHandle) {
            k.removeClass(this.stage, 'showSlider');
            this._zoomedImageMouseMoveHandle.remove();
            this._zoomedImageMouseMoveHandle = null;
            var vb = parseFloat(sa.get(this.zoomedImage, 'marginLeft')), wb =- this.zoomedImage.width + this.stage.clientWidth;
            this._previousZoomScrollPercent = vb / wb;
        }
    };
    ub.prototype._zoomedImagePan = function(event) {
        "use strict";
        var vb;
        if (this.startSliderMargins) {
            vb = event.clientX - this.mouseDownStartPosition.x;
            var wb = parseFloat(sa.get(this.outerImageSlider, 'width')), xb = parseFloat(sa.get(this.innerImageSlider, 'width')), yb = Math.max(0, Math.min(wb - xb, this.startSliderMargins.x + vb)) / wb;
            sa.set(this.innerImageSlider, 'marginLeft', 100 * yb + "%");
            sa.set(this.zoomedImage, 'marginLeft', - 1 * yb * this.zoomedImage.width + 'px');
            event.kill();
        } else if (this.startImageMargins) {
            vb = 1.75 * (this.mouseDownStartPosition.x - event.clientX);
            var zb = Math.min(0, Math.max(this.startImageMargins.x - vb, - this.zoomedImage.width + this.stage.clientWidth));
            sa.set(this.zoomedImage, 'marginLeft', zb + 'px');
            sa.set(this.innerImageSlider, 'marginLeft', ( - zb / this.zoomedImage.width * 100) + "%");
            event.kill();
        }
    };
    ub.prototype._scrollZoomedImageToPercent = function(vb) {
        "use strict";
        if (vb === undefined || vb === null)
            vb = .5;
        var wb = new za(parseInt(sa.get(this.zoomedImage, 'width'), 10), parseInt(sa.get(this.zoomedImage, 'height'), 10));
        sa.set(this.innerImageSlider, 'marginLeft', ((100 - this._adjustInnerImageSlider(wb)) * vb) + '%');
        sa.set(this.zoomedImage, 'marginLeft', ((this.stage.clientWidth - wb.x) * vb) + 'px');
    };
    ub.prototype.switchVideo = function(vb, wb) {
        "use strict";
        this._pauseVideoIfNeeded();
        var xb = 'swf_' + vb;
        m.empty(this.videoStage);
        if (wb) {
            k.addClass(this.stageWrapper, 'showVideo');
            var yb = this.stream.getCurrentImageData(), zb = yb.video_element;
            m.find(zb, "._ox1").style.cssText = '';
            k.addClass(zb, 'videoStageContainer');
            m.appendContent(this.videoStage, zb);
            if (window[xb]&&!ib(xb))
                window[xb].write(vb);
            var ac = 'video_warning_' + vb, bc = ib(vb);
            if (!this.videoWarnings)
                this.videoWarnings = [];
            if (bc && this.videoWarnings[ac])
                m.setContent(bc, this.videoWarnings[ac]);
            this._videoPlayerStateManager = yb.controller;
            this._videoPlayerStateManager.reset();
            if (this._autoplayVideos)
                this._videoPlayerStateManager.play(ab.USER);
            setTimeout(this.adjustStageSizeForVideo.bind(this, vb), 0);
        } else {
            window[xb] && window[xb].addVariable('video_autoplay', 0);
            this.videoLoadTimer && clearTimeout(this.videoLoadTimer);
            k.removeClass(this.stageWrapper, 'showVideo');
        }
    };
    ub.prototype.checkVideoStatus = function(vb) {
        "use strict";
        if (this.videoLoadTimer)
            clearTimeout(this.videoLoadTimer);
        var wb = this.getVideoOnStage();
        if (!wb) {
            return;
        } else {
            if (wb !== vb)
                return;
            this.adjustStageSizeForVideo(vb);
        }
    };
    ub.prototype.getVideoSize = function(vb) {
        "use strict";
        return new za(vb.getAttribute('data-video-width'), + vb.getAttribute('data-video-height') + this.getVideoComponentsHeight(vb));
    };
    ub.prototype.getVideoElement = function(vb) {
        "use strict";
        return m.scry(this.videoStage, "._ox1")[0];
    };
    ub.prototype.getVideoComponentsHeight = function(vb) {
        "use strict";
        var wb = 0, xb = ba.byClass(vb, "_1c_u");
        if (!xb)
            return 0;
        var yb = m.scry(xb, "._2i84");
        if (yb.length) {
            var zb = yb[0].getBoundingClientRect();
            wb = zb.bottom - zb.top;
        }
        return wb;
    };
    ub.prototype.adjustStageSizeForVideo = function(vb) {
        "use strict";
        var wb = this.getVideoElement(vb);
        if (!wb) {
            this.videoLoadTimer = setTimeout(this.checkVideoStatus.bind(this, vb), 200);
        } else 
            this.adjustStageSize(this.getVideoSize(wb));
    };
    ub.prototype.handleServerError = function(vb, wb) {
        "use strict";
        m.setContent(this.errorBox, vb);
        this.storeFromData(wb);
    };
    ub.prototype.fixButtonText = function(vb) {
        "use strict";
        if (!this.buttonTruncateGk)
            return;
        var wb = m.scry(vb, ".photosTruncatingUIButton"), xb = parseInt(sa.get(vb, 'width'), 10);
        if (xb > rb) {
            var yb = {
                tagPhoto: "Tag Photo",
                doneTagPhoto: "Done Tagging",
                addLocation: "Add Location",
                editPhoto: "Edit"
            };
            for (var zb = 0; zb < wb.length; zb++) {
                var ac = wb[zb];
                k.addClass(ac, "_2n0k");
                ua.set(ac, yb[ac.getAttribute('data-buttonname')], 'below', 'center');
            }
        }
    };
    ub.prototype.swapData = function() {
        "use strict";
        var vb, wb = this.stream.getCurrentHtml();
        if (wb) {
            this.setLoadingState(ub.STATE_HTML, false);
            for (var xb in wb) {
                vb = ib(xb);
                vb && m.setContent(vb, wb[xb]);
            }
            var yb = ib('photosTruncatingUIButtonGroup');
            yb && this.fixButtonText(yb);
            g.inform('PhotoSnowlift.DATA_CHANGE', db(this.stream.getCurrentImageData().info, {
                movement: this.movementDelta
            }), g.BEHAVIOR_STATE);
            this.movementDelta = 0;
            if (this.stream.getCurrentExtraData())
                g.inform('PhotoSnowlift.EXTRA_DATA_CHANGE', this.stream.getCurrentExtraData(), g.BEHAVIOR_STATE);
        }
        this.adjustScroller();
        this.scrollableArea.showScrollbar(false);
        this.adjustForNewData();
        this.logImpressionDetailsForPhoto();
    };
    ub.prototype.updateTotalCount = function(vb, wb, xb) {
        "use strict";
        var yb = this.stream.getCurrentHtml();
        if (yb) {
            var zb = bb('fbPhotoSnowliftPositionAndCount');
            m.replace(zb, xb);
            zb = xb;
            k.show(zb);
            var ac = 'fbPhotoSnowliftPositionAndCount';
            yb[ac] = eb(zb.childNodes);
        }
        this.stream.setTotalCount(vb);
        this.stream.setFirstCursorIndex(wb);
    };
    ub.prototype.addPhotoFbids = function(vb, wb, xb, yb) {
        "use strict";
        if (yb && this.sessionID && yb != this.sessionID)
            return;
        var zb = this.stream.getCursor() === null;
        this.stream.attachToFbidsList(vb, wb, xb);
        if (xb && zb)
            this.page(0, true);
        if (this.pivots && xb)
            this.pivots.setCycleCount(this.stream.calculateDistance(this.stream.getCursor(), this.stream.firstCursor));
        if (!this.pagersShown && this.stream.canPage())
            this.setStagePagersState('ready');
        if (!this.slideshowAvailable && this.stream.canPage()) {
            this.slideshowAvailable = true;
            k.addClass(this.root, 'slideshowAvailable');
        }
        this.setLeftAndRightPagersState();
    };
    ub.prototype.attachTagger = function(vb) {
        "use strict";
        m.appendContent(this.stageActions, vb);
    };
    ub.prototype.storeFromData = function(vb) {
        "use strict";
        if (!this.isOpen)
            return;
        if (vb.ssid && this.sessionID && this.sessionID != vb.ssid)
            return;
        var wb = this.stream.storeToCache(vb);
        if ('error' in wb) {
            this.checkState(ub.STATE_ERROR);
            return;
        }
        if ('init' in vb) {
            this._albumFBID = vb.init.album_fbid;
            this._isAlbum = vb.init.is_album;
            this._albumOwnerName = vb.init.album_owner_name;
            this._autoplayVideos = vb.init.autoplay_videos;
        }
        if ('init' in wb) {
            this.initDataFetched(wb.init);
            if (this.openExplicitly) {
                this.replaceUrl = true;
                kb(this.stream.getCurrentImageData().info.permalink);
            }
            if (this.stream.canPage())
                this.setStagePagersState('ready');
            this.setLeftAndRightPagersState();
            this.ua && this.ua.add_event('ufi');
        }
        if ('image' in wb)
            this.checkState(ub.STATE_IMAGE_DATA);
        if ('data' in wb)
            this.checkState(ub.STATE_HTML);
    };
    ub.prototype.setLeftAndRightPagersState = function() {
        "use strict";
        if (this.stream.isNonCircularPhotoSet()) {
            k.conditionClass(this.root, 'disableLeft', !this.stream.nonCircularPhotoSetCanPage( - 1));
            k.conditionClass(this.root, 'disableRight', !this.stream.nonCircularPhotoSetCanPage(1));
        }
        if (this.snowflake) {
            k.conditionClass(this.root, 'disableLeft', this.stream.getCursor() == this.firstInSet);
            var vb = this.stream.getCursorAt(this.stream.calculatePositionForMovement(1));
            k.conditionClass(this.root, 'disableRight', vb == this.firstInSet);
        }
    };
    ub.prototype.setStagePagersState = function(vb) {
        "use strict";
        switch (vb) {
        case 'ready':
            k.addClass(this.root, 'pagingReady');
            this.pagersShown = true;
            this.ua && this.ua.add_event('arrows');
            return;
        case 'active':
            k.addClass(this.root, 'pagingActivated');
            return;
        case 'inactive':
            k.removeClass(this.root, 'pagingActivated');
            return;
        case 'disabled':
        case 'reset':
            k.removeClass(this.root, 'pagingReady');
            return;
        }
    };
    ub.prototype.deletePhoto = function(vb) {
        "use strict";
        this.closeRefresh();
    };
    ub.prototype.closeRefresh = function() {
        "use strict";
        this.refreshOnClose = true;
        this.spotlight.hide();
    };
    ub.prototype.onHiliteTag = function(vb, wb) {
        "use strict";
        if (wb.version != ea.VIEWER_SNOWLIFT)
            return;
        var xb = wb.tag;
        if (xb)
            this.switchHilitedTags(xb, true);
    };
    ub.prototype.onUpdateTagBox = function(vb, wb) {
        "use strict";
        if (wb.version == ea.VIEWER_SNOWLIFT)
            this.updateTagBox(wb.id, wb.approve);
    };
    ub.prototype._log = function(vb) {
        "use strict";
        if (this._shouldLog) {
            this._logger && this._logger.log(vb);
            return true;
        }
        return false;
    };
    ub.prototype._enableMouseOver = function() {
        "use strict";
        this._disableMouseOver = false;
    };
    ub.prototype._interceptMouseOver = function(event) {
        "use strict";
        if (this._disableMouseOver)
            event.kill();
    };
    ub.prototype.isReturningToStart = function() {
        "use strict";
        return !!this.returningToStart;
    };
    ub.prototype._pauseVideoIfNeeded = function() {
        "use strict";
        if (this._videoPlayerStateManager)
            this._videoPlayerStateManager.logStopForUnload();
    };
    ub.getInstance = function() {
        "use strict";
        if (!ub._instance)
            ub._instance = new ub();
        return ub._instance;
    };
    ub.initWithSpotlight = function(vb, wb) {
        "use strict";
        ub.getInstance().init(vb, wb);
    };
    ub.addPhotoFbids = function(vb, wb, xb, yb) {
        "use strict";
        ub.getInstance().addPhotoFbids(vb, wb, xb, yb);
    };
    ub.setReachedLeftEnd = function() {
        "use strict";
        ub.getInstance().setReachedLeftEnd();
    };
    ub.setReachedRightEnd = function() {
        "use strict";
        ub.getInstance().setReachedRightEnd();
    };
    ub.attachFollowFlyout = function(vb) {
        "use strict";
        m.insertAfter(bb('fbPhotoSnowliftSubscribe'), vb);
    };
    ub.attachSubscribeFlyout = function(vb) {
        "use strict";
        m.insertAfter(bb('fbPhotoSnowliftSubscribe'), vb);
    };
    ub.attachTagger = function(vb) {
        "use strict";
        ub.getInstance().attachTagger(vb);
    };
    ub.preload = function(vb, wb) {
        "use strict";
        ub.getInstance().preload(vb, wb);
    };
    ub.bootstrap = function(vb, wb) {
        "use strict";
        var xb = vb && xa(vb).getQueryData();
        if (xb && xb.hasOwnProperty('share_id')) {
            j.loadModules(["SpotlightShareViewer"], function(yb) {
                yb.bootstrap(vb, wb);
            });
            return;
        }
        ub.getInstance().bootstrap(vb, wb);
    };
    ub.closeRefresh = function() {
        "use strict";
        ub.getInstance().closeRefresh();
    };
    ub.deletePhoto = function(vb) {
        "use strict";
        ub.getInstance().deletePhoto(vb);
    };
    ub.getImage = function() {
        "use strict";
        return ub.getInstance().getImage();
    };
    ub.getImageId = function() {
        "use strict";
        return ub.getInstance().getImageId();
    };
    ub.getLoadQuery = function() {
        "use strict";
        return ub.getInstance().getLoadQuery();
    };
    ub.getRHCBody = function() {
        "use strict";
        return ub.getInstance().getRHCBody();
    };
    ub.getRHCFooter = function() {
        "use strict";
        return ub.getInstance().getRHCFooter();
    };
    ub.getRHCHeader = function() {
        "use strict";
        return ub.getInstance().getRHCHeader();
    };
    ub.getRoot = function() {
        "use strict";
        return ub.getInstance().getRoot();
    };
    ub.likePhotoSkipConfirmation = function(vb) {
        "use strict";
        ub.getInstance().likePhotoSkipConfirmation(vb);
    };
    ub.saveTagsFromPayload = function(vb) {
        "use strict";
        ub.getInstance().saveTagsFromPayload(vb);
    };
    ub.saveTagsFromPayloadDelayed = function(vb) {
        "use strict";
        setTimeout(ub.saveTagsFromPayload.bind(null, vb), 2000);
    };
    ub.handleServerError = function(vb, wb) {
        "use strict";
        ub.getInstance().handleServerError(vb, wb);
    };
    ub.setVideoWarning = function(vb, wb) {
        "use strict";
        var xb = ub.getInstance(), yb = 'video_warning_' + vb;
        if (!xb.videoWarnings)
            xb.videoWarnings = [];
        xb.videoWarnings[yb] = wb;
    };
    ub.storeFromData = function(vb) {
        "use strict";
        ub.getInstance().storeFromData(vb);
    };
    ub.swapData = function() {
        "use strict";
        ub.getInstance().swapData();
    };
    ub.updateTotalCount = function(vb, wb, xb) {
        "use strict";
        ub.getInstance().updateTotalCount(vb, wb, xb);
    };
    ub.setVideoRotateURI = function(vb) {
        "use strict";
        ub.getInstance().videoRotateURI = vb;
    };
    db(ub, {
        STATE_ERROR: 'error',
        STATE_HTML: 'html',
        STATE_IMAGE_PIXELS: 'image_pixels',
        STATE_IMAGE_DATA: 'image',
        LOADING_TIMEOUT: 2000,
        PAGER_FADE: 3000,
        FULL_SCREEN_PADDING: 10,
        STAGE_NORMAL_MAX: {
            x: 960,
            y: 960
        },
        STAGE_MIN: {
            x: 520,
            y: 520
        },
        SIDEBAR_SIZE_MAX: 360,
        MIN_PANORAMA_Y: 240,
        ZOOM_BUTTON_HEIGHT: 52,
        ZOOM_BUTTON_BOT_PAD: 60,
        ZOOM_BUTTON_TOP_PAD: 16,
        MAX_SLIDER_HEIGHT: .075,
        MAX_SLIDER_WIDTH: .75,
        MIN_PANO_TO_STAGE_RATIO: 1.2,
        STAGE_CHROME: {
            x: 82,
            y: 42
        },
        VIDEO_BOTTOM_BAR_SPACE: 40,
        GOPREV_AREA: 120,
        TIMELINE_STRETCH_WIDTH: 843,
        TIMELINE_STRETCH_MIN: 480,
        MIN_TAG_DISTANCE: 83,
        PADDING_MIN: 40,
        MIN_UFI_HEIGHT: 250,
        COLLECTIONS_UNTAGGED_PHOTOS: 3,
        PHOTOS_OF_YOU_SUGGESTIONS: 28,
        FRIENDS_IN_PHOTOS_SUGGESTIONS: 31,
        MIN_ADS_VISIBLE: 1,
        PINNED_UFI_ADJUSTMENT: 11,
        ADD_COMMENT_HEIGHT: 54,
        SLIDESHOW_TIME: 3000,
        _instance: null,
        touch: hb,
        touchMarkup: hb
    });
    db(ub.prototype, {
        switchTimer: null,
        imageRefreshTimer: null,
        imageLoadingTimer: null,
        lastPage: 0,
        currentMinSize: null,
        currentImageSize: null,
        resetUriStack: true,
        thumbSrc: null,
        shouldStretch: false,
        stageMax: ub.STAGE_NORMAL_MAX,
        stageChrome: ub.STAGE_CHROME,
        stagePagerPrev: null,
        ua: null,
        PhotoTagger: null
    });
    e.exports = ub;
}, null);
