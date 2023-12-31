/*!CK:2450801997!*/
/*1415600704,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["f8fJW"]);
}

__d("transferTextStyles", ["Style"], function(a, b, c, d, e, f, g) {
    var h = {
        fontFamily: null,
        fontSize: null,
        fontStyle: null,
        fontWeight: null,
        lineHeight: null,
        wordWrap: null
    };
    function i(j, k) {
        for (var l in h)
            if (h.hasOwnProperty(l))
                h[l] = g.get(j, l);
        g.apply(k, h);
    }
    e.exports = i;
}, null);
__d("TextMetrics", ["DOM", "Style", "UserAgent_DEPRECATED", "transferTextStyles"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(m) {
        var n = m.clientWidth, o = (h.get(m, '-moz-box-sizing') == 'border-box');
        if (o && i.firefox() < 29)
            return n;
        var p = h.getFloat(m, 'paddingLeft') + h.getFloat(m, 'paddingRight');
        return n - p;
    }
    function l(m, n) {
        this._node = m;
        this._flexible=!!n;
        var o = 'textarea', p = 'textMetrics';
        if (this._flexible) {
            o = 'div';
            p += ' textMetricsInline';
        }
        this._shadow = g.create(o, {
            className: p
        });
        j(m, this._shadow);
        document.body.appendChild(this._shadow);
    }
    l.prototype.measure = function(m) {
        var n = this._node, o = this._shadow;
        m = (m || n.value) + '...';
        if (!this._flexible) {
            var p = k(n);
            h.set(o, 'width', Math.max(p, 0) + 'px');
        }
        if (n.nodeName === 'TEXTAREA') {
            o.value = m;
        } else 
            g.setContent(o, m);
        return {
            width: o.scrollWidth,
            height: o.scrollHeight
        };
    };
    l.prototype.destroy = function() {
        g.remove(this._shadow);
    };
    e.exports = l;
}, null);
__d("FlexibleBlock.react", ["LeftRight.react", "React", "cx", "invariant", "keyMirror"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = k({
        left: true,
        right: true
    });
    function m(o) {
        j(o.flex && o.flex in n.FLEX);
        j(o.children && o.children.length === 2);
    }
    var n = h.createClass({
        displayName: "FlexibleBlock",
        render: function() {
            m(this.props);
            var o, p = this.props.children[0], q = this.props.children[1], r = this.props.flex == l.left, s = h.createElement("div", {
                className: "_42ef"
            });
            if (r) {
                s.props.children = [p];
                o = g.DIRECTION.right;
            } else {
                s.props.children = [q];
                o = g.DIRECTION.left;
            }
            return (h.createElement(g, h.__spread({}, this.props, {
                direction: o
            }), r ? s : this.props.children[0], r ? this.props.children[1] : s));
        }
    });
    n.FLEX = l;
    e.exports = n;
}, null);
__d("Dispatcher", ["invariant"], function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1, i = 'ID_';
    function j() {
        this.$Dispatcher0 = {};
        this.$Dispatcher1 = {};
        this.$Dispatcher2 = {};
        this.$Dispatcher3 = false;
        this.$Dispatcher4 = null;
    }
    j.prototype.register = function(k) {
        var l = i + h++;
        this.$Dispatcher0[l] = k;
        return l;
    };
    j.prototype.unregister = function(k) {
        g(this.$Dispatcher0[k]);
        delete this.$Dispatcher0[k];
    };
    j.prototype.waitFor = function(k) {
        g(this.$Dispatcher3);
        for (var l = 0; l < k.length; l++) {
            var m = k[l];
            if (this.$Dispatcher1[m]) {
                g(this.$Dispatcher2[m]);
                continue;
            }
            g(this.$Dispatcher0[m]);
            this.$Dispatcher5(m);
        }
    };
    j.prototype.dispatch = function(k) {
        g(!this.$Dispatcher3);
        this.$Dispatcher6(k);
        try {
            for (var l in this.$Dispatcher0) {
                if (this.$Dispatcher1[l])
                    continue;
                this.$Dispatcher5(l);
            }
        } finally {
            this.$Dispatcher7();
        }
    };
    j.prototype.isDispatching = function() {
        return this.$Dispatcher3;
    };
    j.prototype.$Dispatcher5 = function(k) {
        this.$Dispatcher1[k] = true;
        this.$Dispatcher0[k](this.$Dispatcher4);
        this.$Dispatcher2[k] = true;
    };
    j.prototype.$Dispatcher6 = function(k) {
        for (var l in this.$Dispatcher0) {
            this.$Dispatcher1[l] = false;
            this.$Dispatcher2[l] = false;
        }
        this.$Dispatcher4 = k;
        this.$Dispatcher3 = true;
    };
    j.prototype.$Dispatcher7 = function() {
        this.$Dispatcher4 = null;
        this.$Dispatcher3 = false;
    };
    e.exports = j;
}, null);
__d("CurrentLocale", ["LocaleInitialData"], function(a, b, c, d, e, f, g) {
    var h = {};
    h.get = function() {
        return g.locale;
    };
    e.exports = h;
}, null);
__d("CacheStorage", ["ErrorUtils", "EventListener", "ExecutionEnvironment", "FBJSON", "WebStorage", "startsWith"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        memory: v,
        localstorage: t,
        sessionstorage: u
    }, n = '_@_', o = '3b', p = 'CacheStorageVersion';
    function q(x) {
        "use strict";
        this._store = x;
    }
    q.prototype.getStore = function() {
        "use strict";
        return this._store;
    };
    q.prototype.keys = function() {
        "use strict";
        var x = [];
        for (var y = 0; y < this._store.length; y++)
            x.push(this._store.key(y));
        return x;
    };
    q.prototype.get = function(x) {
        "use strict";
        return this._store.getItem(x);
    };
    q.prototype.set = function(x, y) {
        "use strict";
        this._store.setItem(x, y);
    };
    q.prototype.remove = function(x) {
        "use strict";
        this._store.removeItem(x);
    };
    q.prototype.clear = function() {
        "use strict";
        this._store.clear();
    };
    for (var r in q)
        if (q.hasOwnProperty(r))
            t[r] = q[r];
    var s = q === null ? null: q.prototype;
    t.prototype = Object.create(s);
    t.prototype.constructor = t;
    t.__superConstructor__ = q;
    function t() {
        "use strict";
        q.call(this, k.getLocalStorage());
    }
    t.available = function() {
        "use strict";
        return !!k.getLocalStorage();
    };
    for (r in q)
        if (q.hasOwnProperty(r))
            u[r] = q[r];
    u.prototype = Object.create(s);
    u.prototype.constructor = u;
    u.__superConstructor__ = q;
    function u() {
        "use strict";
        q.call(this, k.getSessionStorage());
    }
    u.available = function() {
        "use strict";
        return !!k.getSessionStorage();
    };
    function v() {
        "use strict";
        this._store = {};
    }
    v.prototype.getStore = function() {
        "use strict";
        return this._store;
    };
    v.prototype.keys = function() {
        "use strict";
        return Object.keys(this._store);
    };
    v.prototype.get = function(x) {
        "use strict";
        if (this._store[x] === undefined)
            return null;
        return this._store[x];
    };
    v.prototype.set = function(x, y) {
        "use strict";
        this._store[x] = y;
    };
    v.prototype.remove = function(x) {
        "use strict";
        if (x in this._store)
            delete this._store[x];
    };
    v.prototype.clear = function() {
        "use strict";
        this._store = {};
    };
    v.available = function() {
        "use strict";
        return true;
    };
    function w(x, y) {
        "use strict";
        this._key_prefix = y || '_cs_';
        if (x == 'AUTO' ||!x)
            for (var z in m) {
                var aa = m[z];
                if (aa.available()) {
                    x = z;
                    break;
                }
            }
        if (x)
            if (!m[x] ||!m[x].available()) {
                i.canUseDOM;
                this._backend = new v();
            } else 
                this._backend = new m[x]();
        var ba = this.useBrowserStorage();
        if (ba)
            h.listen(window, 'storage', this._onBrowserValueChanged.bind(this));
        var ca = ba ? this._backend.getStore().getItem(p): this._backend.getStore()[p];
        if (ca !== o)
            this.clear();
    }
    w.prototype.useBrowserStorage = function() {
        "use strict";
        return this._backend.getStore() === k.getLocalStorage() || this._backend.getStore() === k.getSessionStorage();
    };
    w.prototype.addValueChangeCallback = function(x) {
        "use strict";
        this._changeCallbacks = this._changeCallbacks || [];
        this._changeCallbacks.push(x);
        return {
            remove: function() {
                this._changeCallbacks.slice(this._changeCallbacks.indexOf(x), 1);
            }.bind(this)
        };
    };
    w.prototype._onBrowserValueChanged = function(x) {
        "use strict";
        if (this._changeCallbacks && l(x.key, this._key_prefix))
            this._changeCallbacks.forEach(function(y) {
                y(x.key, x.oldValue, x.newValue);
            });
    };
    w.prototype.keys = function() {
        "use strict";
        var x = [];
        g.guard(function() {
            if (this._backend) {
                var y = this._backend.keys(), z = this._key_prefix.length;
                for (var aa = 0; aa < y.length; aa++)
                    if (y[aa].substr(0, z) == this._key_prefix)
                        x.push(y[aa].substr(z));
            }
        }.bind(this), 'CacheStorage')();
        return x;
    };
    w.prototype.set = function(x, y, z) {
        "use strict";
        if (this._backend) {
            var aa;
            if (typeof y == 'string') {
                aa = n + y;
            } else if (!z) {
                aa = {
                    __t: Date.now(),
                    __v: y
                };
                aa = j.stringify(aa);
            } else 
                aa = j.stringify(y);
            var ba = this._backend, ca = this._key_prefix + x, da = true;
            while (da)
                try {
                    ba.set(ca, aa);
                    da = false;
            } catch (ea) {
                var fa = ba.keys().length;
                this._evictCacheEntries();
                da = ba.keys().length < fa;
            }
        }
    };
    w.prototype._evictCacheEntries = function() {
        "use strict";
        var x = [], y = this._backend;
        y.keys().forEach(function(aa) {
            if (aa === p)
                return;
            var ba = y.get(aa);
            if (ba === undefined) {
                y.remove(aa);
                return;
            }
            if (w._hasMagicPrefix(ba))
                return;
            try {
                ba = j.parse(ba, e.id);
            } catch (ca) {
                y.remove(aa);
                return;
            }
            if (ba && ba.__t !== undefined && ba.__v !== undefined)
                x.push([aa, ba.__t]);
        });
        x.sort(function(aa, ba) {
            return aa[1] - ba[1];
        });
        for (var z = 0; z < Math.ceil(x.length / 2); z++)
            y.remove(x[z][0]);
    };
    w.prototype.get = function(x, y) {
        "use strict";
        var z;
        if (this._backend) {
            g.applyWithGuard(function() {
                z = this._backend.get(this._key_prefix + x);
            }, this, null, function() {
                z = null;
            }, 'CacheStorage:get');
            if (z !== null) {
                if (w._hasMagicPrefix(z)) {
                    z = z.substr(n.length);
                } else 
                    try {
                        z = j.parse(z, e.id);
                        if (z && z.__t !== undefined && z.__v !== undefined)
                            z = z.__v;
                } catch (aa) {
                    z = undefined;
                }
            } else 
                z = undefined;
        }
        if (z === undefined && y !== undefined) {
            z = y;
            this.set(x, z);
        }
        return z;
    };
    w.prototype.remove = function(x) {
        "use strict";
        if (this._backend)
            g.applyWithGuard(this._backend.remove, this._backend, [this._key_prefix + x], null, 'CacheStorage:remove');
    };
    w.prototype.clear = function() {
        "use strict";
        if (this._backend) {
            g.applyWithGuard(this._backend.clear, this._backend, null, null, null, 'CacheStorage:clear');
            if (this.useBrowserStorage()) {
                this._backend.getStore().setItem(p, o);
            } else 
                this._backend.getStore()[p] = o;
        }
    };
    w.getAllStorageTypes = function() {
        "use strict";
        return Object.keys(m);
    };
    w._hasMagicPrefix = function(x) {
        "use strict";
        return x.substr(0, n.length) === n;
    };
    e.exports = w;
}, null);
__d("MarauderLogger", ["Banzai", "CacheStorage", "MarauderConfig"], function(a, b, c, d, e, f, g, h, i) {
    var j = 'client_event', k = 'navigation', l = 180000, m = 'marauder', n = 'marauder_last_event_time', o = 'marauder_last_session_id', p = {}, q = [], r = false, s = null, t = null, u = null, v = 0, w, x, y = false, z = new h('localstorage', '');
    function aa() {
        z.set(n, ba());
    }
    g.subscribe(g.SHUTDOWN, aa);
    function ba() {
        w = w || z.get(n) || 0;
        return w;
    }
    function ca() {
        if (!y) {
            x = z.get(o);
            y = true;
        }
        var ra = Date.now();
        if (!x || ra - l > ba()) {
            x = ra.toString(16) + '-' + (~~(Math.random() * 16777215)).toString(16);
            z.set(o, x);
        }
        return x;
    }
    function da() {
        return {
            user_agent: window.navigator.userAgent,
            screen_height: window.screen.availHeight,
            screen_width: window.screen.availWidth,
            density: (window.screen.devicePixelRatio || null),
            platform: (window.navigator.platform || null),
            locale: (window.navigator.language || null)
        };
    }
    function ea() {
        return {
            locale: navigator.language
        };
    }
    function fa(ra, sa, ta, ua, va, wa, xa) {
        var ya = xa || Date.now();
        w = xa ? Date.now() : ya;
        sa = sa || s;
        return {
            name: ra,
            time: ya / 1000,
            module: sa,
            obj_type: ua,
            obj_id: va,
            uuid: wa,
            extra: ta
        };
    }
    function ga(ra, sa, ta) {
        return fa('content', null, {
            flags: sa
        }, null, null, ra, ta);
    }
    function ha(ra) {
        var sa = window.__mrdr;
        if (sa)
            for (var ta in sa) {
                var ua = sa[ta];
                if (ua[3] !== 0) {
                    delete sa[ta];
                    if (ta === "1")
                        if (u !== null) {
                            ta = u;
                        } else 
                            continue;
                            ra.push(ga(ta, 1, ua[1]));
                            ra.push(ga(ta, 2, ua[2]));
                            ra.push(ga(ta, 3, ua[3]));
                }
            }
    }
    function ia(ra) {
        ha(ra);
        if (ra.length === 0)
            return;
        if (r)
            ra.push(fa('counters', null, p));
        var sa = g.BASIC, ta = i.gk_enabled;
        if (v === 0 && ta) {
            ra.push(fa('device_status', null, ea()));
            sa = {
                delay: 5000
            };
        }
        if (ta && Math.random() < .01)
            ra.push(fa('device_info', null, da()));
        if (u !== null)
            for (var ua = 0; ua < ra.length; ua++) {
                var va = ra[ua];
                if (va.uuid === null || va.uuid === undefined)
                    va.uuid = u;
            }
        var wa = {
            app_ver: i.app_version,
            data: ra,
            log_type: j,
            seq: v++,
            session_id: ca()
        }, xa = z.get('device_id');
        if (xa)
            wa.device_id = xa;
        p = {};
        r = false;
        g.post(m, wa, sa);
    }
    function ja(ra) {
        if (!p[ra])
            p[ra] = 0;
        p[ra]++;
        r = true;
    }
    function ka(ra, sa, ta, ua, va, wa, xa) {
        ia([fa(ra, sa, ta, ua, va, wa, xa)]);
    }
    function la(ra, sa) {
        if (s !== sa) {
            q.push(fa(k, s, {
                dest_module: sa,
                source_url: t,
                destination_url: ra
            }));
            s = sa;
            t = ra;
        }
    }
    function ma(ra, sa) {
        if (s !== sa) {
            u = null;
            la(ra, sa);
        }
    }
    function na(ra, sa, ta) {
        ka(sa ? 'show_module' : 'hide_module', ra, ta);
    }
    function oa(ra) {
        s = ra;
    }
    function pa() {
        return s;
    }
    function qa(ra) {
        if (u === null) {
            u = ra;
            if (ra !== null) {
                ia(q);
                q = [];
            }
        }
    }
    e.exports = {
        count: ja,
        log: ka,
        navigateTo: ma,
        navigateWithinSession: la,
        toggleModule: na,
        setUUID: qa,
        setNavigationModule: oa,
        getNavigationModule: pa
    };
}, null);
__d("DragDropFileUpload", [], function(a, b, c, d, e, f) {
    f.isSupported = function() {
        return typeof(FileList) !== "undefined";
    };
}, null);
__d("DocumentDragDrop", ["Event", "Arbiter", "CSS", "DOM", "DOMQuery", "DragDropFileUpload", "emptyFunction", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = {}, p = 0;
    function q() {
        p = 0;
        n(o).forEach(function(v) {
            i.removeClass(v.element, v.className);
            h.inform('dragleave', {
                element: v.element
            });
        });
    }
    var r = null;
    function s() {
        r && clearTimeout(r);
        r = setTimeout(function() {
            q();
        }, 500);
    }
    function t() {
        if (!l.isSupported())
            return;
        g.listen(document, 'dragenter', function(v) {
            if (p === 0)
                n(o).forEach(function(w) {
                    i.addClass(w.element, w.className);
                    h.inform('dragenter', {
                        element: w.element,
                        event: v
                    });
                });
            p++;
            s();
        });
        g.listen(document, 'dragleave', function(v) {
            p--;
            if (p === 0)
                q();
            s();
        });
        g.listen(document, 'drop', function(v) {
            q();
            var w = v.getTarget();
            if (k.isNodeOfType(v.getTarget(), 'input'))
                if (w.type === 'file')
                    return;
            v.prevent();
        });
        g.listen(document, 'dragover', g.prevent);
        document.addEventListener('dragover', s, true);
        t = m;
    }
    var u = {
        init: function() {
            t();
        },
        registerStatusElement: function(v, w) {
            t();
            o[j.getID(v)] = {
                element: v,
                className: w
            };
            if (p > 0)
                i.addClass(v, w);
        },
        removeStatusElement: function(v) {
            var w = j.getID(v), x = o[w];
            if (x) {
                i.removeClass(x.element, x.className);
                delete o[w];
            }
        }
    };
    e.exports = u;
}, null);
__d("DragDropTarget", ["Arbiter", "Event", "SubscriptionsHandler", "CSS", "DataTransfer", "DocumentDragDrop", "DragDropFileUpload", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    function p(q) {
        this._element = q;
        this._listeners = new i();
        this._statusElem = q;
        this._dragEnterCount = 0;
        this._enabled = false;
    }
    n(p.prototype, {
        _onFilesDropCallback: o,
        _onURLDropCallback: o,
        _onPlainTextDropCallback: o,
        _onDropCallback: o,
        _fileFilterFn: o.thatReturnsArgument,
        setOnDocumentDragEnterCallback: function(q) {
            this._onDocumentDragEnterCallback = q;
            return this;
        },
        setOnDocumentDragLeaveCallback: function(q) {
            this._onDocumentDragLeaveCallback = q;
            return this;
        },
        setOnDragEnterCallback: function(q) {
            this._onDragEnterCallback = q;
            return this;
        },
        setOnDragLeaveCallback: function(q) {
            this._onDragLeaveCallback = q;
            return this;
        },
        setOnFilesDropCallback: function(q) {
            this._onFilesDropCallback = q;
            return this;
        },
        setOnURLDropCallback: function(q) {
            this._onURLDropCallback = q;
            return this;
        },
        setOnPlainTextDropCallback: function(q) {
            this._onPlainTextDropCallback = q;
            return this;
        },
        setOnDropCallback: function(q) {
            this._onDropCallback = q;
            return this;
        },
        enable: function() {
            if (!m.isSupported())
                return this;
            this._listeners.engage();
            l.registerStatusElement(this._statusElem, 'fbWantsDragDrop');
            this._listeners.addSubscriptions(h.listen(this._element, 'dragenter', this._onDragEnter.bind(this)), h.listen(this._element, 'dragleave', this._onDragLeave.bind(this)), h.listen(this._element, 'dragover', this._onDragOver.bind(this)), h.listen(this._element, 'drop', function(q) {
                this._dragEnterCount = 0;
                j.removeClass(this._statusElem, 'fbDropReady');
                j.removeClass(this._statusElem, 'fbDropReadyPhoto');
                j.removeClass(this._statusElem, 'fbDropReadyPhotos');
                j.removeClass(this._statusElem, 'fbDropReadyLink');
                var r = {}, s = false, t = this._fileFilterFn(q.dataTransfer.files);
                if (t.length) {
                    this._onFilesDropCallback(t, q);
                    r.files = t;
                    s = true;
                }
                var u = q.dataTransfer.getData('url') || q.dataTransfer.getData('text/uri-list');
                if (u) {
                    this._onURLDropCallback(u, q);
                    r.url = u;
                    s = true;
                }
                var v = q.dataTransfer.getData('text/plain');
                if (v) {
                    this._onPlainTextDropCallback(v, q);
                    r.plainText = v;
                    s = true;
                }
                if (s)
                    this._onDropCallback(r, q);
                q.kill();
            }.bind(this)));
            this._listeners.addSubscriptions(g.subscribe('dragenter', this._onDocumentDragEnter.bind(this)), g.subscribe('dragleave', this._onDocumentDragLeave.bind(this)));
            this._enabled = true;
            return this;
        },
        disable: function() {
            if (!this._enabled)
                return this;
            l.removeStatusElement(this._statusElem, 'fbWantsDragDrop');
            j.removeClass(this._statusElem, 'fbDropReady');
            j.removeClass(this._statusElem, 'fbDropReadyPhoto');
            j.removeClass(this._statusElem, 'fbDropReadyPhotos');
            j.removeClass(this._statusElem, 'fbDropReadyLink');
            this._listeners.release();
            this._enabled = false;
            return this;
        },
        setFileFilter: function(q) {
            this._fileFilterFn = q;
            return this;
        },
        setStatusElement: function(q) {
            this._statusElem = q;
            return this;
        },
        _onDragEnter: function(q) {
            if (this._dragEnterCount === 0) {
                var r = new k(q.dataTransfer);
                j.addClass(this._statusElem, 'fbDropReady');
                if (r.isLink() ||!r.isImage()) {
                    j.addClass(this._statusElem, 'fbDropReadyLink');
                } else if (r.getCount() > 1) {
                    j.addClass(this._statusElem, 'fbDropReadyPhotos');
                } else 
                    j.addClass(this._statusElem, 'fbDropReadyPhoto');
                this._onDragEnterCallback && this._onDragEnterCallback();
            }
            this._dragEnterCount++;
            q.preventDefault();
        },
        _onDragLeave: function(q) {
            this._dragEnterCount = Math.max(this._dragEnterCount - 1, 0);
            if (this._dragEnterCount === 0) {
                j.removeClass(this._statusElem, 'fbDropReady');
                j.removeClass(this._statusElem, 'fbDropReadyPhoto');
                j.removeClass(this._statusElem, 'fbDropReadyPhotos');
                j.removeClass(this._statusElem, 'fbDropReadyLink');
                this._onDragLeaveCallback && this._onDragLeaveCallback();
            }
        },
        _onDragOver: function(q) {
            if (!q.dataTransfer) {
                h.kill(q);
                return;
            }
            var r = q.dataTransfer.effectAllowed;
            q.dataTransfer.dropEffect = (r == 'move' || r == 'linkMove') ? 'move' : 'copy';
            h.kill(q);
        },
        _onDocumentDragEnter: function(event, q) {
            if (this._onDocumentDragEnterCallback && q.element == this._element)
                this._onDocumentDragEnterCallback();
        },
        _onDocumentDragLeave: function(event, q) {
            this._dragEnterCount = 0;
            this._onDragLeave(event);
            if (this._onDocumentDragLeaveCallback && q.element == this._element)
                this._onDocumentDragLeaveCallback();
        }
    });
    e.exports = p;
}, null);
__d("TypeaheadFacepile", ["DOM"], function(a, b, c, d, e, f, g) {
    function h() {}
    h.render = function(i) {
        var j = [g.create('span', {
            className: 'splitpic leftpic'
        }, [g.create('img', {
            alt: '',
            src: i[0]
        })]), g.create('span', {
            className: 'splitpic' + (i[2] ? ' toppic' : '')
        }, [g.create('img', {
            alt: '',
            src: i[1]
        })])];
        if (i[2])
            j.push(g.create('span', {
                className: 'splitpic bottompic'
            }, [g.create('img', {
                alt: '',
                src: i[2]
            })]));
        return g.create('span', {
            className: 'splitpics clearfix'
        }, j);
    };
    e.exports = h;
}, null);
__d("BasicTypeaheadRenderer", ["BadgeHelper", "DOM"], function(a, b, c, d, e, f, g, h) {
    var i = ' \u00B7 ';
    function j(k, l) {
        var m = [];
        if (k.icon)
            m.push(h.create('img', {
                alt: '',
                src: k.icon
            }));
        if (k.text) {
            var n = [k.text];
            if (k.is_verified)
                n.push(g.renderBadge('xsmall', 'verified'));
            m.push(h.create('span', {
                className: 'text'
            }, n));
        }
        if (k.subtext) {
            var o = [k.subtext];
            if (k.saved_context) {
                var p = h.create('span', {
                    className: 'saved'
                }, [k.saved_context]);
                o.unshift(p, i);
            }
            m.push(h.create('span', {
                className: 'subtext'
            }, o));
        }
        var q = h.create('li', {
            className: k.type || ''
        }, m);
        if (k.text) {
            q.setAttribute('title', k.text);
            q.setAttribute('aria-label', k.text);
        }
        return q;
    }
    j.className = 'basic';
    e.exports = j;
}, null);
__d("TypeaheadView", ["ArbiterMixin", "BasicTypeaheadRenderer", "CSS", "DOM", "Event", "Parent", "$", "copyProperties", "emptyFunction", "getElementText", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = q(g);
    for (var s in r)
        if (r.hasOwnProperty(s))
            u[s] = r[s];
    var t = r === null ? null: r.prototype;
    u.prototype = Object.create(t);
    u.prototype.constructor = u;
    u.__superConstructor__ = r;
    function u(v, w) {
        "use strict";
        this.element = this.content = m(v);
        n(this, w);
    }
    u.prototype.init = function() {
        "use strict";
        this.init = o;
        this.initializeEvents();
        this.reset();
    };
    u.prototype.initializeEvents = function() {
        "use strict";
        k.listen(this.element, {
            mouseup: this.mouseup.bind(this),
            mouseover: this.mouseover.bind(this)
        });
    };
    u.prototype.setTypeahead = function(v) {
        "use strict";
        this.typeahead = v;
    };
    u.prototype.setAccessibilityControlElement = function(v) {
        "use strict";
        this.accessibilityElement = v;
    };
    u.prototype.getElement = function() {
        "use strict";
        return this.element;
    };
    u.prototype.mouseup = function(event) {
        "use strict";
        if (event.button != 2) {
            this.select(true);
            event.prevent();
        }
    };
    u.prototype.mouseover = function(event) {
        "use strict";
        if (this.ignoreMouseover) {
            this.ignoreMouseover = false;
            return;
        }
        if (this.visible)
            this.highlight(this.getIndex(event));
    };
    u.prototype.reset = function(v) {
        "use strict";
        if (!v)
            this.disableAutoSelect = false;
        this.index =- 1;
        this.items = [];
        this.results = [];
        this.value = '';
        this.content.innerHTML = '';
        this.inform('reset');
        return this;
    };
    u.prototype.getIndex = function(event) {
        "use strict";
        return this.items.indexOf(l.byTag(event.getTarget(), 'li'));
    };
    u.prototype.getSelection = function() {
        "use strict";
        var v = this.results[this.index] || null;
        return this.visible ? v : null;
    };
    u.prototype.isEmpty = function() {
        "use strict";
        return !this.results.length;
    };
    u.prototype.isVisible = function() {
        "use strict";
        return !!this.visible;
    };
    u.prototype.show = function() {
        "use strict";
        i.show(this.element);
        if (this.results && this.results.length)
            if (this.autoSelect && this.accessibilityElement && this.selected)
                this.accessibilityElement.setAttribute('aria-activedescendant', j.getID(this.selected));
        this.accessibilityElement && this.accessibilityElement.setAttribute('aria-expanded', 'true');
        this.visible = true;
        return this;
    };
    u.prototype.hide = function() {
        "use strict";
        i.hide(this.element);
        if (this.accessibilityElement) {
            this.accessibilityElement.setAttribute('aria-expanded', 'false');
            this.accessibilityElement.removeAttribute('aria-activedescendant');
        }
        this.visible = false;
        return this;
    };
    u.prototype.render = function(v, w) {
        "use strict";
        this.value = v;
        if (!w.length) {
            this.accessibilityElement && this.accessibilityElement.removeAttribute('aria-activedescendant');
            this.reset(true);
            return;
        }
        var x = {
            results: w,
            value: v
        };
        this.inform('beforeRender', x);
        w = x.results;
        var y = this.getDefaultIndex(w);
        if (this.index > 0 && this.index !== this.getDefaultIndex(this.results) && this.index < this.results.length) {
            var z = this.results[this.index];
            for (var aa = 0, ba = w.length; aa < ba; ++aa)
                if (z.uid == w[aa].uid) {
                    y = aa;
                    break;
                }
        }
        this.results = w;
        j.setContent(this.content, this.buildResults(w));
        this.items = this.getItems();
        this.highlight(y, false);
        this.inform('render', w);
    };
    u.prototype.getItems = function() {
        "use strict";
        return j.scry(this.content, 'li');
    };
    u.prototype.buildResults = function(v) {
        "use strict";
        var w, x = null;
        if (typeof this.renderer == 'function') {
            w = this.renderer;
            x = this.renderer.className || '';
        } else {
            w = a.TypeaheadRenderers[this.renderer];
            x = this.renderer;
        }
        w = w.bind(this);
        var y = v.map(function(aa, ba) {
            var ca = aa.node || w(aa, ba);
            ca.setAttribute('role', 'option');
            return ca;
        }), z = j.create('ul', {
            className: x,
            id: 'typeahead_list_' + (this.typeahead ? j.getID(this.typeahead) : j.getID(this.element))
        }, y);
        z.setAttribute('role', 'listbox');
        return z;
    };
    u.prototype.getDefaultIndex = function() {
        "use strict";
        var v = (this.autoSelect&&!this.disableAutoSelect);
        return this.index < 0&&!v?-1 : 0;
    };
    u.prototype.next = function() {
        "use strict";
        this.highlight(this.index + 1);
        this.inform('next', this.selected);
    };
    u.prototype.prev = function() {
        "use strict";
        this.highlight(this.index - 1);
        this.inform('prev', this.selected);
    };
    u.prototype.getItemText = function(v) {
        "use strict";
        var w = '';
        if (v) {
            w = v.getAttribute('aria-label');
            if (!w) {
                w = p(v);
                v.setAttribute('aria-label', w);
            }
        }
        return w;
    };
    u.prototype.setIsViewingSelectedItems = function(v) {
        "use strict";
        this.viewingSelected = v;
        return this;
    };
    u.prototype.getIsViewingSelectedItems = function() {
        "use strict";
        return !!this.viewingSelected;
    };
    u.prototype.highlight = function(v, w) {
        "use strict";
        if (this.selected) {
            i.removeClass(this.selected, 'selected');
            this.selected.setAttribute('aria-selected', 'false');
        }
        if (v > this.items.length - 1) {
            v =- 1;
        } else if (v<-1)
            v = this.items.length - 1;
        if (v >= 0 && v < this.items.length) {
            this.selected = this.items[v];
            i.addClass(this.selected, 'selected');
            this.selected.setAttribute('aria-selected', 'true');
            if (this.accessibilityElement)
                setTimeout((function() {
                    this.accessibilityElement.setAttribute('aria-activedescendant', j.getID(this.selected));
                }).bind(this), 0);
        } else 
            this.accessibilityElement && this.accessibilityElement.removeAttribute('aria-activedescendant');
        this.index = v;
        this.disableAutoSelect = (v==-1);
        if (w !== false)
            this.inform('highlight', {
                index: v,
                selected: this.results[v],
                element: this.selected
            });
    };
    u.prototype.select = function(v) {
        "use strict";
        if (this.headerIndex && v)
            return;
        var w = this.index, x = this.results[w], y = this.element.getAttribute('id');
        if (x) {
            this.inform('select', {
                index: w,
                clicked: !!v,
                selected: x,
                id: y,
                query: this.value
            });
            this.inform('afterSelect');
        }
    };
    n(u.prototype, {
        events: ['highlight', 'render', 'reset', 'select', 'beforeRender', 'next', 'prev'],
        renderer: h,
        autoSelect: false,
        ignoreMouseover: false
    });
    e.exports = u;
}, null);
__d("BucketedTypeaheadView", ["DOM", "TypeaheadView", "tx"], function(a, b, c, d, e, f, g, h, i) {
    for (var j in h)
        if (h.hasOwnProperty(j))
            l[j] = h[j];
    var k = h === null ? null: h.prototype;
    l.prototype = Object.create(k);
    l.prototype.constructor = l;
    l.__superConstructor__ = h;
    function l() {
        "use strict";
        if (h !== null)
            h.apply(this, arguments);
    }
    l.prototype.render = function(m, n, o) {
        "use strict";
        n = this.buildBuckets(m, n);
        return k.render.call(this, m, n, o);
    };
    l.prototype.highlight = function(m, n) {
        "use strict";
        this.headerIndex = false;
        if (m==-1 && this.index !== 0)
            m = this.index;
        while (m >= 0 && m < this.items.length&&!this.isHighlightable(this.results[m])) {
            m = m + 1;
            this.headerIndex = true;
        }
        k.highlight.call(this, m, n);
    };
    l.prototype.buildBuckets = function(m, n) {
        "use strict";
        if (!this.typeObjects ||!n ||!n.length)
            return n;
        var o = [], p = {};
        for (var q = 0; q < n.length; ++q) {
            var r = n[q], s = r.render_type || r.type;
            if (!p.hasOwnProperty(s)) {
                p[s] = o.length;
                o.push([this.buildBucketHeader(s)]);
            }
            r.classNames = r.classNames || s;
            r.groupIndex = p[s];
            r.indexInGroup = o[r.groupIndex].length - 1;
            r.globalIndex = q;
            o[r.groupIndex].push(r);
        }
        for (s in this.typeObjects)
            if (!p.hasOwnProperty(s) && this.typeObjects[s].show_always) {
                p[s] = o.length;
                o.push([this.buildBucketHeader(s)]);
                r = this.buildNoResultsEntry();
                r.classNames = r.type;
                r.groupIndex = p[s];
                r.indexInGroup = o[r.groupIndex].length - 1;
                o[r.groupIndex].push(r);
            }
        var t = [];
        if (this.typeObjectsOrder) {
            for (var u = 0; u < this.typeObjectsOrder.length; ++u) {
                var v = this.typeObjectsOrder[u];
                if (p.hasOwnProperty(v))
                    t = t.concat(o[p[v]]);
            }
        } else 
            for (var w = 0; w < o.length; ++w)
                t = t.concat(o[w]);
        return t;
    };
    l.prototype.buildNoResultsEntry = function() {
        "use strict";
        return {
            uid: 'disabled_result',
            type: 'disabled_result',
            text: "No Results"
        };
    };
    l.prototype.buildBucketHeader = function(m) {
        "use strict";
        var n = this.typeObjects[m];
        if (n === undefined)
            throw new Error(m + " is undefined in " + JSON.stringify(this.typeObjects));
        if (n.markup) {
            n.text = n.markup;
            delete n.markup;
        }
        return this.typeObjects[m];
    };
    l.prototype.buildResults = function(m) {
        "use strict";
        var n = k.buildResults.call(this, m);
        if (this.typeObjects) {
            return g.create('div', {
                className: 'bucketed'
            }, [n]);
        } else 
            return n;
    };
    l.prototype.isHighlightable = function(m) {
        "use strict";
        return m.type != 'header' && m.type != 'disabled_result';
    };
    l.prototype.select = function(m) {
        "use strict";
        var n = this.results[this.index];
        if (n && this.isHighlightable(n))
            k.select.call(this, m);
    };
    l.prototype.normalizeIndex = function(m) {
        "use strict";
        var n = this.results.length;
        if (n === 0) {
            return - 1;
        } else if (m<-1) {
            return (m%n) + n + 1;
        } else if (m >= n) {
            return (m%n) - 1;
        } else 
            return m;
    };
    l.prototype.getDefaultIndex = function(m) {
        "use strict";
        var n = (this.autoSelect&&!this.disableAutoSelect);
        if (this.index < 0&&!n)
            return - 1;
        if (m.length === 0)
            return - 1;
        var o = 0;
        while (!this.isHighlightable(m) && o < m.length)
            o++;
        return o;
    };
    l.prototype.prev = function() {
        "use strict";
        var m = this.results[this.normalizeIndex(this.index - 1)];
        while (m&&!this.isHighlightable(m)) {
            this.index = this.normalizeIndex(this.index - 1);
            m = this.results[this.normalizeIndex(this.index - 1)];
        }
        return k.prev.call(this);
    };
    l.prototype.next = function() {
        "use strict";
        var m = this.results[this.normalizeIndex(this.index + 1)];
        while (m&&!this.isHighlightable(m)) {
            this.index = this.normalizeIndex(this.index + 1);
            m = this.results[this.normalizeIndex(this.index + 1)];
        }
        return k.next.call(this);
    };
    e.exports = l;
}, null);
__d("ContextualTypeaheadView", ["BucketedTypeaheadView", "CSS", "ContextualLayer", "ContextualLayerAutoFlip", "ContextualLayerHideOnScroll", "DOM", "DOMDimensions", "Style"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    for (var o in g)
        if (g.hasOwnProperty(o))
            q[o] = g[o];
    var p = g === null ? null: g.prototype;
    q.prototype = Object.create(p);
    q.prototype.constructor = q;
    q.__superConstructor__ = g;
    function q() {
        "use strict";
        if (g !== null)
            g.apply(this, arguments);
    }
    q.prototype.init = function() {
        "use strict";
        this.initializeLayer();
        p.init.call(this);
    };
    q.prototype.initializeLayer = function() {
        "use strict";
        this.context = this.getContext();
        this.wrapper = l.create('div');
        l.appendContent(this.wrapper, this.element);
        h.addClass(this.element, 'uiContextualTypeaheadView');
        this.layer = new i({
            context: this.context,
            position: 'below',
            alignment: this.alignment,
            causalElement: this.causalElement,
            permanent: true,
            shouldSetARIAProperties: false
        }, this.wrapper);
        this.layer.enableBehavior(k);
        if (n.isFixed(this.context) || this.autoflip)
            this.layer.enableBehavior(j);
        this.subscribe('render', this.renderLayer.bind(this));
    };
    q.prototype.show = function() {
        "use strict";
        if (this.minWidth) {
            n.set(this.wrapper, 'min-width', this.minWidth + 'px');
        } else if (this.width) {
            n.set(this.wrapper, 'width', this.width + 'px');
        } else 
            n.set(this.wrapper, 'width', m.getElementDimensions(this.context).width + 'px');
        var r = p.show.call(this);
        this.layer.show();
        this.inform('show');
        return r;
    };
    q.prototype.hide = function() {
        "use strict";
        this.layer.hide();
        this.inform('hide');
        return p.hide.call(this);
    };
    q.prototype.renderLayer = function() {
        "use strict";
        if (!this.isVisible())
            return;
        if (this.layer.isShown()) {
            this.layer.updatePosition();
        } else 
            this.layer.show();
    };
    q.prototype.clearText = function() {
        "use strict";
        this.layer.getCausalElement().value = '';
    };
    q.prototype.getContext = function() {
        "use strict";
        return this.element.parentNode;
    };
    e.exports = q;
}, null);
__d("TextInputControl", ["DOMControl", "Event", "Input", "copyProperties", "debounce"], function(a, b, c, d, e, f, g, h, i, j, k) {
    for (var l in g)
        if (g.hasOwnProperty(l))
            n[l] = g[l];
    var m = g === null ? null: g.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = g;
    function n(o) {
        "use strict";
        g.call(this, o);
        var p = this.getRoot(), q = k(this.update.bind(this), 0);
        h.listen(p, {
            input: q,
            keydown: q,
            paste: q
        });
    }
    n.prototype.setMaxLength = function(o) {
        "use strict";
        i.setMaxLength(this.getRoot(), o);
        return this;
    };
    n.prototype.getValue = function() {
        "use strict";
        return i.getValue(this.getRoot());
    };
    n.prototype.isEmpty = function() {
        "use strict";
        return i.isEmpty(this.getRoot());
    };
    n.prototype.setValue = function(o) {
        "use strict";
        i.setValue(this.getRoot(), o);
        this.update();
        return this;
    };
    n.prototype.clear = function() {
        "use strict";
        return this.setValue('');
    };
    n.prototype.setPlaceholderText = function(o) {
        "use strict";
        i.setPlaceholder(this.getRoot(), o);
        return this;
    };
    e.exports = n;
}, null);
__d("TextAreaControl", ["Arbiter", "ArbiterMixin", "CSS", "DOMControl", "Event", "Style", "TextInputControl", "TextMetrics", "classWithMixins", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    function q(v, w) {
        return l.getFloat(v, w) || 0;
    }
    var r = o(m, p(h));
    for (var s in r)
        if (r.hasOwnProperty(s))
            u[s] = r[s];
    var t = r === null ? null: r.prototype;
    u.prototype = Object.create(t);
    u.prototype.constructor = u;
    u.__superConstructor__ = r;
    function u(v) {
        "use strict";
        this.autogrow = i.hasClass(v, 'uiTextareaAutogrow');
        r.call(this, v);
        this.width = null;
        k.listen(v, 'focus', this._handleFocus.bind(this));
    }
    u.prototype.setAutogrow = function(v) {
        "use strict";
        this.autogrow = v;
        return this;
    };
    u.prototype.onupdate = function() {
        "use strict";
        t.onupdate.call(this);
        this.updateHeight();
    };
    u.prototype.updateHeight = function() {
        "use strict";
        if (this.autogrow) {
            var v = this.getRoot();
            if (!this.metrics)
                this.metrics = new n(v);
            if (typeof this.initialHeight === 'undefined') {
                this.isBorderBox = l.get(v, 'box-sizing') === 'border-box' || l.get(v, '-moz-box-sizing') === 'border-box' || l.get(v, '-webkit-box-sizing') === 'border-box';
                this.borderBoxOffset = q(v, 'padding-top') + q(v, 'padding-bottom') + q(v, 'border-top-width') + q(v, 'border-bottom-width');
                this.initialHeight = v.offsetHeight - this.borderBoxOffset;
            }
            var w = this.metrics.measure(), x = Math.max(this.initialHeight, w.height);
            if (this.isBorderBox)
                x += this.borderBoxOffset;
            if (x !== this.height) {
                this.height = x;
                l.set(v, 'height', x + 'px');
                g.inform('reflow');
                this.inform('resize');
            }
        } else if (this.metrics) {
            this.metrics.destroy();
            this.metrics = null;
        }
    };
    u.prototype.resetHeight = function() {
        "use strict";
        this.height =- 1;
        this.update();
    };
    u.prototype._handleFocus = function() {
        "use strict";
        this.width = null;
    };
    u.getInstance = function(v) {
        "use strict";
        return j.getInstance(v) || new u(v);
    };
    e.exports = u;
}, null);
__d("Typeahead", ["ArbiterMixin", "BehaviorsMixin", "DataStore", "DOM", "Event", "Parent", "Run", "emptyFunction", "ge", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = p(g, h);
    for (var r in q)
        if (q.hasOwnProperty(r))
            t[r] = q[r];
    var s = q === null ? null: q.prototype;
    t.prototype = Object.create(s);
    t.prototype.constructor = t;
    t.__superConstructor__ = q;
    function t(u, v, w, x) {
        "use strict";
        this.args = {
            data: u,
            view: v,
            core: w
        };
        i.set(x, 'Typeahead', this);
        this.element = x;
    }
    t.prototype.init = function(u) {
        "use strict";
        this.init = n;
        this.getCore();
        this.getView().setAccessibilityControlElement(this.getCore().getElement());
        this.proxyEvents();
        this.initBehaviors(u || []);
        this.inform('init', this);
        this.data.bootstrap();
        this.core.focus();
    };
    t.prototype.getData = function() {
        "use strict";
        if (!this.data) {
            var u = this.args.data;
            this.data = u;
            this.data.init();
        }
        return this.data;
    };
    t.prototype.getView = function() {
        "use strict";
        if (!this.view) {
            var u = this.args.view, v = u.node || o(u.node_id);
            if (!v) {
                v = j.create('div', {
                    className: 'uiTypeaheadView'
                });
                j.appendContent(this.element, v);
            }
            if (typeof u.ctor === 'string') {
                this.view = new window[u.ctor](v, u.options || {});
            } else 
                this.view = new u.ctor(v, u.options || {});
            this.view.init();
            this.view.setTypeahead(this.element);
        }
        return this.view;
    };
    t.prototype.getCore = function() {
        "use strict";
        if (!this.core) {
            var u = this.args.core;
            if (typeof u.ctor === 'string') {
                this.core = new window[u.ctor](u.options || {});
            } else 
                this.core = new u.ctor(u.options || {});
            this.core.init(this.getData(), this.getView(), this.getElement());
        }
        return this.core;
    };
    t.prototype.getElement = function() {
        "use strict";
        return this.element;
    };
    t.prototype.setHeight = function(u) {
        "use strict";
        this.getCore().setHeight(u);
    };
    t.prototype.swapData = function(u) {
        "use strict";
        var v = this.core;
        this.data = this.args.data = u;
        u.init();
        if (v) {
            v.data = u;
            v.initData();
            v.reset();
        }
        u.bootstrap();
        return u;
    };
    t.prototype.proxyEvents = function() {
        "use strict";
        [this.data, this.view, this.core].forEach(function(u) {
            u.subscribe(u.events, this.inform.bind(this));
        }, this);
    };
    t.prototype.initBehaviors = function(u) {
        "use strict";
        u.forEach(function(v) {
            if (typeof v === 'string') {
                if (a.TypeaheadBehaviors && a.TypeaheadBehaviors[v]) {
                    a.TypeaheadBehaviors[v](this);
                } else 
                    m.onLoad(function() {
                        if (a.TypeaheadBehaviors)(a.TypeaheadBehaviors[v] || n)(this);
                    }.bind(this));
            } else 
                this.enableBehavior(v);
        }, this);
    };
    t.getInstance = function(u) {
        "use strict";
        var v = l.byClass(u, 'uiTypeahead');
        return v ? i.get(v, 'Typeahead') : null;
    };
    t.initNow = function(u, v, w) {
        "use strict";
        if (w)
            w.init(u);
        u.init(v);
    };
    t.init = function(u, v, w, x) {
        "use strict";
        if (!j.isNodeOfType(u, ['input', 'textarea']))
            u = j.scry(u, 'input')[0] || j.scry(u, 'textarea')[0];
        var y = false;
        try {
            y = document.activeElement === u;
        } catch (z) {}
        if (y) {
            t.initNow(v, w, x);
        } else 
            var aa = k.listen(u, 'focus', function() {
                t.initNow(v, w, x);
                aa.remove();
            });
    };
    e.exports = t;
}, null);
__d("StickyPlaceholderInput", ["Event", "CSS", "DOM", "Input", "Parent", "emptyFunction", "getElementText"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n(r) {
        return k.byClass(r, 'uiStickyPlaceholderInput');
    }
    function o(r) {
        return i.scry(r, '.placeholder')[0];
    }
    function p(r) {
        r = r || window.event;
        var s = r.target || r.srcElement;
        if (i.isNodeOfType(s, ['input', 'textarea'])) {
            var t = n(s);
            if (t)
                setTimeout(function() {
                    h.conditionClass(t, 'uiStickyPlaceholderEmptyInput', !s.value.length);
                }, 0);
        }
    }
    var q = {
        init: function() {
            q.init = l;
            g.listen(document.documentElement, {
                keydown: p,
                paste: p,
                focusout: p
            });
        },
        registerInput: function(r) {
            q.init();
            var s = r.getAttribute('placeholder') || '';
            if (s.length)
                if (document.activeElement === r) {
                    var t = g.listen(r, 'blur', function() {
                        q.manipulateInput(r, s);
                        t.remove();
                    });
                } else 
                    q.manipulateInput(r, s);
        },
        manipulateInput: function(r, s) {
            var t = i.create('div', {
                className: 'placeholder',
                'aria-hidden': 'true'
            }, s), u = i.create('div', {
                className: 'uiStickyPlaceholderInput'
            }, t);
            if (i.isNodeOfType(r, 'textarea'))
                h.addClass(u, 'uiStickyPlaceholderTextarea');
            g.listen(t, 'click', function() {
                r.focus();
            });
            if (r.value === s)
                r.value = '';
            h.removeClass(r, 'DOMControl_placeholder');
            r.setAttribute('placeholder', '');
            i.replace(r, u);
            i.appendContent(u, r);
            h.conditionClass(u, 'uiStickyPlaceholderEmptyInput', !r.value.length);
        },
        setPlaceholderText: function(r, s) {
            var t = n(r);
            if (!t) {
                j.setPlaceholder(r, s);
            } else {
                var u = o(t);
                u && i.setContent(u, s);
            }
        },
        getPlaceholderText: function(r) {
            var s = n(r), t = o(s);
            return t && m(t);
        },
        update: function(r) {
            var s = n(r);
            if (s)
                h.conditionClass(s, 'uiStickyPlaceholderEmptyInput', !r.value.length);
        },
        getVisibleText: function(r) {
            var s = n(r);
            if (h.hasClass(s, 'uiStickyPlaceholderEmptyInput')) {
                var t = o(s);
                return t && m(t);
            } else 
                return r.value;
        }
    };
    e.exports = q;
}, null);
__d("TypeaheadCore", ["Arbiter", "ArbiterMixin", "CSS", "DOM", "Event", "Focus", "Input", "InputSelection", "Keys", "StickyPlaceholderInput", "Style", "UserAgent_DEPRECATED", "bind", "copyProperties", "emptyFunction", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    var w = v(h);
    for (var x in w)
        if (w.hasOwnProperty(x))
            z[x] = w[x];
    var y = w === null ? null: w.prototype;
    z.prototype = Object.create(y);
    z.prototype.constructor = z;
    z.__superConstructor__ = w;
    function z(aa) {
        "use strict";
        t(this, aa);
    }
    z.prototype.init = function(aa, ba, ca) {
        "use strict";
        this.init = u;
        this.data = aa;
        this.view = ba;
        this.root = ca;
        this.initInput();
        this.inputWrap = j.find(ca, 'div.wrap');
        this.hiddenInput = j.find(ca, 'input.hiddenInput');
        this.value = '';
        this.nextQuery = null;
        this.selectedText = null;
        if (this.setValueOnSelect && i.hasClass(this.inputWrap, 'selected'))
            this.selectedText = this.getValue();
        this.initView();
        this.initData();
        this.initEvents();
        this.initToggle();
        this._exclusions = [];
    };
    z.prototype.initInput = function() {
        "use strict";
        this.element = j.find(this.root, '.textInput');
        var aa = j.scry(this.element, 'input')[0];
        if (aa)
            this.element = aa;
    };
    z.prototype.initView = function() {
        "use strict";
        this.view.subscribe('highlight', l.set.bind(null, this.element));
        this.view.subscribe('select', function(aa, ba) {
            this.select(ba.selected);
        }.bind(this));
        this.view.subscribe('afterSelect', function() {
            this.afterSelect();
        }.bind(this));
    };
    z.prototype.initData = function() {
        "use strict";
        this.data.subscribe('notify', function(aa, ba) {
            if (this.root.id == ba.rootid&&!this.element.disabled && ba.value == this.getValue())
                this.view.render(ba.value, ba.results, ba.isAsync);
        }.bind(this));
        this.data.subscribe('respond', function(aa, ba) {
            if (ba.forceDisplay || ba.value == this.getValue()&&!this.element.disabled && (this.element.getAttribute('singlestate') !== 'true' || ba.nullState))
                this.view.render(ba.value, ba.results, ba.isAsync);
        }.bind(this));
        this.data.subscribe('activity', function(aa, ba) {
            this.fetching = ba.activity;
            if (!this.fetching)
                this.nextQuery && this.performQuery();
            if (this.loading != this.fetching) {
                this.loading = this.fetching;
                this.inform('loading', {
                    loading: this.loading
                });
            }
        }.bind(this));
    };
    z.prototype.initEvents = function() {
        "use strict";
        k.listen(this.view.getElement(), {
            mouseup: this.viewMouseup.bind(this),
            mousedown: this.viewMousedown.bind(this)
        });
        var aa = {
            blur: s(this, 'blur'),
            focus: s(this, 'focus'),
            click: s(this, 'click'),
            keyup: s(this, 'keyup'),
            keydown: s(this, 'keydown'),
            keypress: s(this, 'keypress')
        };
        if (r.firefox())
            aa.input = aa.keyup;
        k.listen(this.element, aa);
    };
    z.prototype.initToggle = function() {
        "use strict";
        this.subscribe('blur', this.view.hide.bind(this.view));
        this.subscribe('focus', this.view.show.bind(this.view));
    };
    z.prototype.viewMousedown = function() {
        "use strict";
        this.selecting = true;
    };
    z.prototype.viewMouseup = function() {
        "use strict";
        this.selecting = false;
    };
    z.prototype.blur = function() {
        "use strict";
        if (this.selecting) {
            this.selecting = false;
            return;
        }
        this.inform('blur');
    };
    z.prototype.click = function() {
        "use strict";
        var aa = n.get(this.element);
        if (aa.start == aa.end)
            this.element.select();
        this.inform('click');
    };
    z.prototype.focus = function() {
        "use strict";
        this.checkValue();
        this.inform('focus');
    };
    z.prototype.keyup = function() {
        "use strict";
        if (this.resetOnKeyup&&!this.getValue())
            this.view.reset();
        this.checkValue();
        if (this.getValue().length === 0)
            this.inform('change', null);
    };
    z.prototype.keydown = function(event) {
        "use strict";
        if (!this.view.isVisible() || this.view.isEmpty()) {
            setTimeout(this.checkValue.bind(this), 0);
            return;
        }
        switch (k.getKeyCode(event)) {
        case o.TAB:
            this.handleTab(event);
            return;
        case o.UP:
            this.view.prev();
            break;
        case o.DOWN:
            this.view.next();
            break;
        case o.ESC:
            this.view.reset();
            break;
        default:
            setTimeout(this.checkValue.bind(this), 0);
            return;
        }
        event.kill();
    };
    z.prototype.keypress = function(event) {
        "use strict";
        if (this.view.getSelection() && k.getKeyCode(event) == o.RETURN) {
            this.view.select();
            event.kill();
        }
    };
    z.prototype.handleTab = function(event) {
        "use strict";
        if (this.preventFocusChangeOnTab)
            if (this.view.getSelection()) {
                event.kill();
            } else 
                event.prevent();
        this.view.select();
    };
    z.prototype.select = function(aa) {
        "use strict";
        if (aa && this.setValueOnSelect) {
            var ba = aa.orig_text || aa.text;
            this.setValue(ba);
            this.setHiddenValue(aa.uid);
            this.selectedText = ba;
            i.addClass(this.inputWrap, 'selected');
        }
    };
    z.prototype.afterSelect = function() {
        "use strict";
        this.keepFocused ? l.set(this.element) : this.element.blur();
        this.resetOnSelect ? this.reset() : this.view.reset();
    };
    z.prototype.unselect = function() {
        "use strict";
        if (this.setValueOnSelect) {
            this.selectedText = null;
            i.removeClass(this.inputWrap, 'selected');
        }
        this.setHiddenValue();
        this.inform('unselect', this);
    };
    z.prototype.setEnabled = function(aa) {
        "use strict";
        var ba = aa === false;
        this.element.disabled = ba;
        i.conditionClass(this.root, 'uiTypeaheadDisabled', ba);
    };
    z.prototype.reset = function() {
        "use strict";
        this.unselect();
        this.setValue();
        !this.keepFocused && m.reset(this.element);
        this.view.reset();
        this.inform('reset');
    };
    z.prototype.getElement = function() {
        "use strict";
        return this.element;
    };
    z.prototype.setExclusions = function(aa) {
        "use strict";
        this._exclusions = aa.map(String);
    };
    z.prototype.getExclusions = function() {
        "use strict";
        return this._exclusions;
    };
    z.prototype.setValue = function(aa) {
        "use strict";
        this.value = this.nextQuery = aa || '';
        m.setValue(this.element, this.value);
        p.update(this.element);
        this.inform('change', aa);
    };
    z.prototype.setHiddenValue = function(aa) {
        "use strict";
        this.hiddenInput.value = (aa || aa === 0) ? aa : '';
        g.inform('Form/change', {
            node: this.hiddenInput
        });
    };
    z.prototype.getValue = function() {
        "use strict";
        return m.getValue(this.element);
    };
    z.prototype.getHiddenValue = function() {
        "use strict";
        return this.hiddenInput.value || '';
    };
    z.prototype.checkValue = function() {
        "use strict";
        var aa = this.getValue();
        if (aa == this.value)
            return;
        if (this.selectedText && this.selectedText != aa)
            this.unselect();
        var ba = Date.now(), ca = ba - this.time;
        this.time = ba;
        this.value = this.nextQuery = aa;
        this.performQuery(ca);
    };
    z.prototype.performQuery = function(aa) {
        "use strict";
        if (this.selectedText)
            return;
        aa = aa || 0;
        if (this.fetching && aa < this.queryTimeout) {
            this.data.query(this.nextQuery, true, this._exclusions, aa);
        } else {
            this.data.query(this.nextQuery, false, this._exclusions, aa);
            this.nextQuery = null;
        }
    };
    z.prototype.setHeight = function(aa) {
        "use strict";
        if (aa !== 'auto')
            aa = aa + 'px';
        q.set(this.element, 'height', aa);
    };
    t(z.prototype, {
        events: ['blur', 'focus', 'click', 'unselect', 'loading'],
        keepFocused: true,
        resetOnSelect: false,
        resetOnKeyup: true,
        setValueOnSelect: false,
        queryTimeout: 250,
        preventFocusChangeOnTab: false
    });
    e.exports = z;
}, null);
__d("PagesBanzaiLogger", ["Banzai", "Event", "Run"], function(a, b, c, d, e, f, g, h, i) {
    var j = 'pages_client_logging', k = 'pages_client_logging', l = {
        VITAL_WAIT: g.VITAL_WAIT,
        registerLogEvent: function(m, n, o) {
            var p = h.listen(m, 'click', function(event) {
                l.logData(n, o);
            });
            i.onLeave(function() {
                p.remove();
            });
        },
        logData: function(m, n) {
            if (g.isEnabled(k)) {
                var o = {};
                if (n)
                    o.delay = n;
                g.post(j, m, o);
            }
        }
    };
    e.exports = l;
}, null);
__d("TypeaheadBestName", ["TokenizeUtil", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._typeahead = j;
    }
    i.prototype.enable = function() {
        "use strict";
        var j = this._typeahead.getView();
        this._subscription = j.subscribe('beforeRender', function(k, l) {
            var m = l.value;
            for (var n = 0; n < l.results.length; ++n) {
                var o = l.results[n];
                if (o.alternate_names == null)
                    continue;
                if (g.isQueryMatch(m, o.default_name)) {
                    o.text = o.default_name;
                    return;
                }
                for (var p = 0; p < o.alternate_names.length; p++)
                    if (g.isQueryMatch(m, o.alternate_names[p])) {
                        o.text = o.alternate_names[p];
                        return;
                    }
                o.text = o.default_name;
            }
        });
    };
    i.prototype.disable = function() {
        "use strict";
        this._typeahead.getView().unsubscribe(this._subscription);
        this._subscription = null;
    };
    h(i.prototype, {
        _subscription: null
    });
    e.exports = i;
}, null);
__d("legacy:BestNameTypeaheadBehavior", ["TypeaheadBestName"], function(a, b, c, d, e, f, g) {
    if (!a.TypeaheadBehaviors)
        a.TypeaheadBehaviors = {};
    a.TypeaheadBehaviors.buildBestAvailableNames = function(h) {
        h.enableBehavior(g);
    };
}, 3);
__d("TypeaheadShowLoadingIndicator", ["CSS", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._typeahead = j;
    }
    i.prototype.enable = function() {
        "use strict";
        this._subscription = this._typeahead.subscribe('loading', function(j, k) {
            g.conditionClass(this._typeahead.getElement(), 'typeaheadLoading', k.loading);
            g.conditionClass(this._typeahead.getView().getElement(), 'typeaheadViewLoading', k.loading);
        }.bind(this));
    };
    i.prototype.disable = function() {
        "use strict";
        this._typeahead.unsubscribe(this._subscription);
        this._subscription = null;
    };
    h(i.prototype, {
        _subscription: null
    });
    e.exports = i;
}, null);
__d("legacy:ShowLoadingIndicatorTypeaheadBehavior", ["TypeaheadShowLoadingIndicator"], function(a, b, c, d, e, f, g) {
    if (!a.TypeaheadBehaviors)
        a.TypeaheadBehaviors = {};
    a.TypeaheadBehaviors.showLoadingIndicator = function(h) {
        h.enableBehavior(g);
    };
}, 3);
__d("CompactTypeaheadRenderer", ["BadgeHelper", "DOM", "TypeaheadFacepile"], function(a, b, c, d, e, f, g, h, i) {
    function j(k, l) {
        var m = [];
        if (k.xhp)
            return h.create('li', {
                className: 'raw'
            }, k.xhp);
        var n = k.photos || k.photo;
        if (n) {
            if (n instanceof Array) {
                n = i.render(n);
            } else 
                n = h.create('img', {
                    alt: '',
                    src: n
                });
            m.push(n);
        }
        if (k.text) {
            var o = [k.text];
            if (k.is_verified) {
                o.push(g.renderBadge('xsmall', 'verified'));
            } else if (k.is_work_user)
                o.push(g.renderBadge('xsmall', 'work'));
            m.push(h.create('span', {
                className: 'text'
            }, o));
        }
        var p = k.subtext, q = k.category;
        if (p || q) {
            var r = [];
            p && r.push(p);
            p && q && r.push(" \u00b7 ");
            q && r.push(q);
            m.push(h.create('span', {
                className: 'subtext'
            }, r));
        }
        var s = h.create('li', {
            className: k.type || ''
        }, m);
        if (k.text) {
            s.setAttribute('title', k.text);
            s.setAttribute('aria-label', k.text);
        }
        return s;
    }
    j.className = 'compact';
    e.exports = j;
}, null);
__d("DialogExpansion", ["Animation", "DialogPosition", "LoadingDialogDimensions", "Style"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = i.WIDTH, l = i.HEIGHT, m = 400, n = 100;
    function o(p) {
        "use strict";
        this._dialog = p;
        this._fixedTopMargin = p.getFixedTopPosition();
    }
    o.prototype.enable = function() {
        "use strict";
        this._subscription = this._dialog.subscribe('aftershow', this._onAfterShow.bind(this));
    };
    o.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    o.prototype.setTargetWidth = function(p) {
        "use strict";
        this._targetWidth = p;
    };
    o.prototype._onAfterShow = function() {
        "use strict";
        this._outer = this._dialog.getContentRoot();
        this._inner = this._dialog.getInnerContent();
        if (isNaN(parseInt(j.get(this._inner, 'height'), 10)))
            return;
        var p = h.calculateTopMargin(k, l);
        j.apply(this._inner, {
            opacity: '0',
            width: this._dialog.getWidth() + 'px'
        });
        j.apply(this._outer, {
            width: k + 'px',
            height: l + 'px',
            marginTop: p + 'px',
            overflow: 'hidden'
        });
        setTimeout(function() {
            var q = parseInt(this._dialog.getWidth(), 10);
            if (this._targetWidth)
                q = this._targetWidth;
            var r = parseInt(j.get(this._inner, 'height'), 10), s;
            if (this._fixedTopMargin) {
                s = this._fixedTopMargin;
            } else 
                s = h.calculateTopMargin(q, r);
            this._growThenFade(q, r, s);
        }.bind(this), 100);
    };
    o.prototype._growThenFade = function(p, q, r) {
        "use strict";
        new g(this._outer).to('width', p).to('height', q).to('marginTop', r).duration(m).ease(g.ease.both).ondone(this._fadeIn.bind(this)).go();
    };
    o.prototype._fadeIn = function() {
        "use strict";
        j.set(this._outer, 'overflow', '');
        j.set(this._outer, 'height', '');
        new g(this._inner).from('opacity', 0).to('opacity', 1).ondone(function() {
            this._dialog.inform('afterexpand');
        }.bind(this)).duration(n).go();
    };
    e.exports = o;
}, null);
__d("XBirthdayMessagePostControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/reminders\/birthday\/message\/", {});
}, null);
