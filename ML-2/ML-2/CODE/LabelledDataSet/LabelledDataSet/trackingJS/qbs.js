
window.GDT = window.GDT || {};
if (!GDT._inited) {
    var QBS = {
        get: function() {
            var cb = arguments[4];
            if (cb) {
                cb({
                    ret: false
                });
            }
        },
        dom: {
            get: function(id) {
                return document.getElementById(id);
            }
        }
    };
    var PMT = {
        get: function() {}
    };
    (function() {
        var uin = 0;
        try {
            uin = (function() {
                var _tmp = 0;
                if (document.domain == 'qq.com') {
                    var r = new RegExp("(?:^|;+|\\s+)uin=([^;]*)"), m = document.cookie.match(r);
                    _tmp=!m ? _tmp : m[1];
                    _tmp = _tmp.replace(/^o0*/, '');
                }
                return _tmp;
            })();
        } catch (e) {}
        var tail = uin%100;
        var isGray = 1;
        var fileinfo = {
            GDT: {
                path: '/qzone/biz/ac/comm/',
                name: 'gdtlib',
                ver: ['20141105', '20141105'],
                getVer: function() {
                    return isGray;
                }
            },
            GDTVER: {
                path: '/qzone/biz/ac/comm/',
                name: 'ver',
                ver: ['20141105', "20141105"],
                getVer: function() {
                    return isGray;
                }
            },
            COMM: {
                path: '/qzone/biz/ac/comm/',
                name: 'qbscomm',
                ver: ['20141105', '20141105'],
                getVer: function() {
                    return isGray;
                }
            }
        };
        function getFile(ns) {
            var NS = fileinfo[ns];
            function _getFileVer(ns) {
                var vs = NS && NS.ver, nv, v;
                v = nv = 0;
                if (typeof vs === 'string') {
                    return vs;
                }
                try {
                    if (NS.getVer && typeof NS.getVer === 'function') {
                        nv = NS.getVer();
                    }
                } catch (e) {
                    nv = 0;
                }
                if (nv >= 0 && nv < vs.length) {
                    v = nv;
                } else {}
                return vs[v];
            }
            return NS.path + NS.name + '.' + _getFileVer(ns) + '.js';
        }
        var commfile = getFile('COMM');
        GDT.libfile = getFile('GDT');
        GDT.verfile = getFile('GDTVER');
        GDT.bf = [];
        GDT.t = 'GDT';
        var cacheUrl = {};
        function _load_js(url, cb, charset, attr, opts) {
            var node, connectId = genHash(url), onload, tmp, doc = document, head;
            head = doc.head || doc.getElementsByTagName("head")[0] || doc.body;
            opts = opts || {};
            fnQueue.add(connectId, cb);
            if (cacheUrl[connectId] && cacheUrl[connectId] < 0) {
                return;
            }
            if (cacheUrl[connectId] && cacheUrl[connectId] > 0) {
                fnQueue.execOnce(connectId);
                return;
            }
            cacheUrl[connectId] =- 1;
            node = doc.createElement("script");
            node.id = '_gdt_loader_' + Math.random();
            node.setAttribute("data-name", connectId);
            charset = charset || 'UTF-8';
            if (cb) {
                onload = function() {
                    var v = this.readyState;
                    if (typeof v === 'undefined' || "loaded" === v || "complete" === v) {
                        cacheUrl[connectId] = 1;
                        node.onload = node.onreadystatechange = null;
                        node = null;
                        fnQueue.execOnce(connectId);
                    }
                };
                node.onreadystatechange = onload;
                node.onload = onload;
            }
            node.type = 'text/javascript';
            node.charset = charset;
            if (attr) {
                for (var t in attr) {
                    if (typeof(tmp = attr[t]) == "string" && t.toLowerCase() != "src") {
                        node.setAttribute(k, tmp);
                    }
                }
            }
            node.src = url;
            head.appendChild(node);
        }
        function genHash(str) {
            var hash = 5381;
            str = str || '';
            for (var i = 0, len = str.length; i < len; ++i) {
                hash += (hash<<5) + str.charAt(i).charCodeAt();
            }
            return hash & 0x7fffffff;
        }
        var slice = Array.prototype.slice;
        var fnQueue;
        fnQueue = {
            fnlist: {},
            exec: function(key) {
                var fn, len, i, queue = fnQueue.fnlist[key] || [], args = slice.call(arguments, 1);
                len = queue.length;
                for (i = 0; i < len; i++) {
                    fn = queue[i];
                    fn.apply(null, args);
                }
            },
            execOnce: function(key) {
                var queue;
                fnQueue.exec(key);
                fnQueue.fnlist[key] = [];
            },
            add: function(key, cb) {
                !fnQueue.fnlist[key] && (fnQueue.fnlist[key] = []);
                fnQueue.fnlist[key].push(cb);
            }
        };
        function k(a) {
            a.genHash = genHash;
            a.fnQueue = fnQueue;
            a.exec = function() {
                var fnlist = ['get', 'dealpos', 'load'];
                for (var i = fnlist.length - 1; i >= 0; i--) {
                    var fname = fnlist[i], realfname = '_' + fname;
                    a[realfname] && a._exec(fname, a[realfname]);
                }
            };
            a._exec = function(type, fn) {
                var arg;
                while (arg = a.dequeue(type)) {
                    fn.apply(null, arg);
                }
            };
            a.enqueue = function(type, value) {
                a.bf[type] = a.bf[type] || [];
                a.bf[type].push(value);
            };
            a.dequeue = function(type) {
                var n;
                if (a.bf[type]) {
                    n = a.bf[type].shift();
                }
                return n;
            };
            a.onPreGet = function() {};
            a.importJs = function() {
                var args = slice.call(arguments);
                setTimeout(function() {
                    _load_js.apply(null, args);
                }, 0);
            };
            a.fp = (function() {
                var _fp = window, found = 0;
                var _isfp = function() {
                    return !!(_fp.QZONE && _fp.QZONE.FrontPage && _fp.QZFL && _fp.g_iUin);
                };
                try {
                    if (_isfp()) {
                        found = 5;
                    } else {
                        do {
                            _fp = _fp.parent;
                            if (_isfp()) {
                                found = 5;
                                break;
                            }
                        }
                        while (_fp != top);
                    }
                } catch (ex) {
                    found = 0;
                }
                if (found < 5) {
                    return false;
                }
                return _fp;
            })();
            var fk = a.fp;
            a.imgcacheDomain = (!!fk && fk.imgcacheDomain) ? fk.imgcacheDomain : 'imgcache.qq.com';
            a.siDomain = (!!fk && fk.siDomain) ? fk.siDomain : "qzonestyle.gtimg.cn";
            var d = a.siDomain;
            a.lib = {
                _file: 'http://' + d + a.libfile,
                _verfile: 'http://' + d + a.verfile,
                _commfile: 'http://' + d + commfile,
                _hasLoaded: false,
                onComplete: function() {
                    a.initVer();
                    a.initLib(function() {
                        a.exec();
                    });
                    a.exec();
                },
                load: function() {
                    if (!a.lib._hasLoaded) {
                        a.lib._hasLoaded = true;
                        var flen, _loadedNum = 0, _file, files = [a.lib._file, a.lib._verfile];
                        if (!fk || 1) {
                            files.unshift(a.lib._commfile);
                        }
                        flen = files.length;
                        for (var i = 0; i < flen; i++) {
                            _file = files[i];
                            _load_js(_file, function() {
                                _loadedNum++;
                                if (_loadedNum == flen) {
                                    a.lib.onComplete();
                                }
                            }, 'utf-8', {
                                'async': true
                            });
                        };
                    }
                }
            };
            a.lib.load();
            var getQueFn = function(type) {
                return function() {
                    var args = slice.call(arguments, 0);
                    a.enqueue(type, args);
                    if (a['_' + type]) {
                        a.exec();
                    }
                };
            };
            a.get = getQueFn('get');
            a.dealpos = getQueFn('dealpos');
            a.load = getQueFn('load');
        }
        k(GDT);
    })();
    GDT._inited = true;
}
