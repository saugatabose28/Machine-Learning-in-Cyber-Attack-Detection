/*	
	Copyright 2009 British Broadcasting Corporation

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	   http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
(function() {
    if (window.gloader && typeof window.gloader.unshift === "function") {
        var settings = window.gloader;
        window.gloader = false;
    }
    if (window.gloader) {
        return;
    }
    window.gloader = {
        _requests: [],
        _modules: {},
        _expects: {},
        _extras: {},
        _errors: [],
        util: {
            getGloaderFile: function(filepath) {
                if (filepath && /(^|^.*[\/\\])(gloader(\.[^\/\\]+)?\.js)(\?|$)/i.test(filepath)) {
                    var dir = RegExp.$1;
                    if (dir) {
                        dir = dir.replace("cached/", "");
                    }
                    return {
                        dir: dir,
                        name: RegExp.$2
                    };
                }
                return undefined;
            }
        },
        map: {
            js: {},
            css: {},
            parse: function(libraryName, libraryVersions) {
                var lib = {
                    name: libraryName,
                    versions: []
                };
                var scope = {};
                var scopeProps = ["$name", "$version", "$base"];
                scopeProps.has = function(what) {
                    for (var i = 0; i < this.length; i++) {
                        if (what == this[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                if (gloader.mapProps && gloader.mapProps[lib.name]) {
                    for (var p in gloader.mapProps[lib.name]) {
                        if (!scopeProps.has(p)) {
                            scopeProps.push(p);
                        }
                    }
                }
                for (var p = 0; p < scopeProps.length; p++) {
                    scope[scopeProps[p]] = undefined;
                }
                scope.$name = lib.name;
                if (gloader.mapProps && gloader.mapProps[lib.name]) {
                    for (var p in gloader.mapProps[lib.name]) {
                        scope[p] = gloader.mapProps[lib.name][p];
                    }
                }
                for (var i = 0; i < libraryVersions.length; i++) {
                    var version = libraryVersions[i];
                    for (var v in version) {
                        if (version[v] === null) {
                            delete version[v];
                            delete scope[v];
                        } else {
                            if (v.indexOf("$") === 0) {
                                scope[v] = version[v];
                            } else {
                                if (typeof version[v] == "string") {
                                    version[v] = [version[v]];
                                    scope[v] = version[v].slice(0);
                                } else {
                                    if (typeof version[v].push != "undefined") {
                                        scope[v] = version[v].slice(0);
                                    } else {
                                        throw new Error("invalid type: " + typeof version[v]);
                                    }
                                }
                            }
                        }
                    }
                    for (var s in scope) {
                        if (typeof version[s] == "undefined") {
                            if (s.indexOf("$") === 0) {
                                version[s] = scope[s];
                            } else {
                                version[s] = scope[s].slice(0);
                            }
                        }
                    }
                    for (var p = 0; p < scopeProps.length; p++) {
                        var prop = scopeProps[p];
                        for (var vp = 0; vp < p; vp++) {
                            var vprop = scopeProps[vp];
                            if (typeof version[vprop] == "undefined") {
                                version[prop] = scope[prop];
                            }
                            var patt = new RegExp("\\{\\" + vprop + "\\}", "g");
                            version[prop] = version[prop].replace(patt, version[vprop]);
                        }
                    }
                    for (vi in version) {
                        if (vi.indexOf("$") === 0) {
                            continue;
                        }
                        for (var vii = 0; vii < version[vi].length; vii++) {
                            for (var p = 0; p < scopeProps.length; p++) {
                                var prop = scopeProps[p];
                                var patt = new RegExp("\\{\\" + prop + "\\}", "g");
                                version[vi][vii] = "" + version[vi][vii].replace(patt, "" + version[prop]);
                            }
                        }
                    }
                    lib.versions.push(version);
                }
                return lib;
            },
            add: function() {
                var args = [];
                for (var i = 1; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                var lib = gloader.map.parse(arguments[0], args);
                for (var i = 0; i < lib.versions.length; i++) {
                    var version = lib.versions[i];
                    for (var p in version) {
                        if (p.charAt(0) == "$") {
                            continue;
                        }
                        var modId = version.$name + "/" + version.$version + "/" + p;
                        gloader.map.js[modId] = version[p][0];
                        gloader.map.css[modId] = version[p][1];
                    }
                }
            },
            include: function(src) {
                if (gloader.map._include[src]) {
                    return false;
                } else {
                    document.write('<script type="text/javascript" src="' + src + '"><\/script>\n');
                    gloader.map._include[src] = true;
                    return true;
                }
            },
            _include: {},
            latest: function(libName, v) {
                if (gloader.map.$latest[libName + "/" + v]) {
                    return gloader.map.$latest[libName + "/" + v];
                }
                var result = v;
                var parts = v.split(".");
                if (parts.length < 3) {
                    if (parts[0] == parseInt(parts[0]) && (typeof parts[1] == "undefined" || parts[1] == parseInt(parts[1]))) {
                        var invalid = new RegExp("[a-zA-Z-]"), latest = [parts[0], null, null], mod;
                        for (mod in gloader.map.js) {
                            var modParts = mod.split("/");
                            if (modParts[0] == libName && modParts[2] == libName&&!invalid.test(modParts[1])) {
                                var modVParts = modParts[1].split(".");
                                if (modVParts[0] == parts[0]) {
                                    if ((typeof parts[1] == "undefined" && (latest[1] <= modVParts[1] || (latest[1] == modVParts[1] && latest[2] <= modVParts[2]))) || (typeof parts[1] != "undefined" && parts[1] == modVParts[1] && latest[2] <= modVParts[2])) {
                                        latest[1] = modVParts[1];
                                        latest[2] = modVParts[2];
                                    }
                                }
                            }
                        }
                        if (latest[2] != null) {
                            result = latest.join(".");
                        }
                    }
                }
                gloader.map.$latest[libName + "/" + v] = result;
                return result;
            },
            $latest: {}
        },
        settings: {
            ns: "bbc.glow.gloader",
            get: function(name) {
                var n = " " + gloader.settings.ns + "." + name + "=";
                var cookies = document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    if ((" " + cookies[i]).indexOf(n)>-1) {
                        return unescape(cookies[i].split("=")[1]);
                    }
                }
            },
            set: function(name, value, path) {
                var n = gloader.settings.ns + "." + name;
                document.cookie = n + "=" + escape(value) + "; path=" + ((path) ? path : "/") + ";";
            },
            clear: function(name, path) {
                var d = new Date();
                d.setTime(d.getTime() - 1);
                var n = gloader.settings.ns + "." + name;
                document.cookie = n + "=; path=" + ((path) ? path : "/") + "; expires=Thu, 01-Jan-70 00:00:01 GMT;";
            }
        },
        loadOverride: function(version) {
            var current = gloader.settings.get("override");
            version = version || prompt("Enter version", current ? current : "");
            if (version === "") {
                gloader.settings.clear("override");
            } else {
                if (version !== null) {
                    gloader.settings.set("override", version);
                }
            }
            location.reload();
        },
        loadDebug: function() {
            gloader.settings.set("debug", "1");
            location.reload();
        },
        unloadDebug: function() {
            gloader.settings.clear("debug");
            location.reload();
        },
        expect: function(srcFile) {
            srcFile = "" + srcFile;
            var modsInFile = [];
            var modId;
            for (modId in gloader.map.js) {
                if (gloader.map.js[modId] == srcFile) {
                    modsInFile.push(modId);
                    gloader._expects[modId] = (gloader._expects[modId] || 0) + 1;
                }
            }
        },
        load: function() {
            var r = {};
            if (typeof arguments[arguments.length - 1].length == "undefined") {
                r = arguments[arguments.length - 1];
                arguments.length--;
            }
            var newRequest = new gloader.Request(r);
            gloader._requests.push(newRequest);
            var mods = [];
            var override = gloader.settings.get("override");
            for (var i = 0; i < arguments.length; i++) {
                if (override && arguments[i][0] == "glow") {
                    if (typeof console != "undefined" && console.log) {
                        console.log("Overriding version '" + arguments[i][1] + "' of glow to version '" + override + "'");
                    }
                    arguments[i][1] = override;
                }
                mods.push(arguments[i]);
            }
            var ids = gloader.toIds(mods);
            newRequest.args = [];
            for (var i = 0; i < ids.length; i++) {
                newRequest.include(ids[i]);
                if (ids[i].match(/\/[^.]+$/)) {
                    newRequest.args.push(ids[i]);
                }
            }
            var waitCount = newRequest.waits.length;
            for (var i = 0; i < newRequest.waits.length; i++) {
                if (gloader._modules[newRequest.waits[i]] && gloader._modules[newRequest.waits[i]].status == gloader.Module.IMPLEMENTED) {
                    waitCount--;
                }
            }
            if (waitCount > 0) {
                newRequest.status = gloader.Request.WAITING;
                gloader.request(ids, newRequest.async);
                gloader.resolve();
            } else {
                newRequest.complete();
            }
        },
        request: function(mIds, async) {
            for (var i = 0; i < mIds.length; i++) {
                var m = mIds[i];
                if (gloader._extras[m]) {
                    gloader._modules[m] = new gloader.Module(m);
                    var extra = gloader._extras[m];
                    delete gloader._extras[m];
                    gloader.provide(extra);
                } else {
                    if (!gloader._modules[m]) {
                        gloader._modules[m] = new gloader.Module(m);
                        gloader._modules[m].status = gloader.Module.REQUESTED;
                    }
                }
                if (gloader._modules[m].status < gloader.Module.IMPLEMENTED || gloader._modules[m].css) {
                    gloader._modules[m].css = null;
                    gloader.fetch(gloader._modules[m], async);
                }
            }
        },
        fetch: function(m, async) {
            var cssSrc = gloader.map.css[m.id], jsSrc = gloader.map.js[m.id];
            gloader._modules[m.id].async = async;
            var force = (!async && gloader._fetched[jsSrc] && gloader._fetched[jsSrc].async && gloader._modules[m.id].status < gloader.Module.IMPLEMENTED);
            if (cssSrc && (force ||!gloader._fetched[cssSrc])) {
                gloader._fetched[cssSrc] = {};
                if (document) {
                    var headElement;
                    if (headElement = document.getElementsByTagName("head")[0]) {
                        var link;
                        if (link = document.createElement("link")) {
                            link.href = cssSrc;
                            link.rel = "stylesheet";
                            link.type = "text/css";
                            link.className = "gloaded async";
                            headElement.appendChild(link);
                        }
                    } else {
                        document.write('<link rel="stylesheet" type="text/css" href="' + cssSrc + '" class="gloaded sync">');
                    }
                }
            }
            if (!jsSrc) {
                var msg = "The gloader map is missing a JavaScript filepath for the module: " + m.id;
                var maps = [];
                for (var included_map in gloader.map._include) {
                    maps.push(included_map);
                }
                msg += ".\rMaps included are: " + maps.join(", ") + ".";
                gloader._errors.push(msg);
                throw new Error(msg);
            }
            if (jsSrc) {
                if (force ||!gloader._fetched[jsSrc]) {
                    gloader._fetched[jsSrc] = {};
                    gloader.expect(jsSrc);
                    if (async) {
                        gloader._fetched[jsSrc].async = true;
                        var headElement = document.getElementsByTagName("head")[0];
                        var scriptElement = document.createElement("script");
                        scriptElement.type = "text/javascript";
                        scriptElement.src = jsSrc;
                        scriptElement.className = "gloaded async";
                        headElement.appendChild(scriptElement);
                    } else {
                        gloader._fetched[jsSrc].sync = true;
                        document.write('<script type="text/javascript" src="' + jsSrc + '" class="gloaded sync"><\/script>\n');
                    }
                } else {}
                if (gloader._modules[m.id].status < gloader.Module.FETCHED) {
                    gloader._modules[m.id].status = gloader.Module.FETCHED;
                }
            }
        },
        _fetched: {},
        provide: function(m) {
            m.id = m.library[0] + "/" + m.library[1] + "/" + m.name;
            if (!gloader._modules[m.id]) {
                gloader._extras[m.id] = m;
                return;
            }
            if (gloader._modules[m.id].status >= gloader.Module.PROVIDED) {
                return;
            }
            gloader._modules[m.id].status = gloader.Module.PROVIDED;
            gloader._modules[m.id].builder = m.builder;
            gloader._modules[m.id].builder.args = [];
            var d = gloader._modules[m.id].depends = (m.depends) ? gloader.toIds(m.depends): [];
            if (d.length > 0) {
                var includes = [];
                for (var i = 0; i < d.length; i++) {
                    var requests = gloader.getRequests(m);
                    var include = {
                        async: true,
                        ids: []
                    };
                    for (var j = 0; j < requests.length; j++) {
                        requests[j].include(d[i]);
                        include.ids.push(d[i]);
                        if (requests[j].async === false) {
                            include.async = false;
                        }
                    }
                    includes.push(include);
                    if (d[i].match(/\/[^.]+$/)) {
                        gloader._modules[m.id].builder.args.push(d[i]);
                    }
                }
                for (var i = 0; i < includes.length; i++) {
                    if (includes[i].ids.length) {
                        gloader.request(includes[i].ids, includes[i].async);
                    }
                }
            } else {
                gloader.implement(m);
            }
            gloader.resolve();
        },
        _greet: function(mId) {
            if (gloader._expects[mId] > 0) {
                gloader._expects[mId]--;
            } else {
                var msg = "Unexpected module provided to gloader: " + mId;
                gloader._errors.push(msg);
                throw (msg);
            }
        },
        module: function(modDef) {
            var modId = modDef.library[0] + "/" + modDef.library[1] + "/" + modDef.name;
            gloader._greet(modId);
            if (!modDef.depends) {
                modDef.depends = [];
            }
            modDef.depends.unshift(modDef.library);
            gloader.provide(modDef);
        }, library : function(modDef) {
            var modId = modDef.name + "/" + modDef.version + "/" + modDef.name;
            gloader._greet(modId);
            if (!modDef.depends) {
                modDef.depends = [];
            }
            modDef.library = [modDef.name, modDef.version];
            gloader.provide(modDef);
        }, implement: function(m) {
            if (gloader._modules[m.id].status != gloader.Module.PROVIDED) {
                return;
            }
            for (var i = 0; i < gloader._modules[m.id].builder.args.length; i++) {
                var argName = gloader._modules[m.id].builder.args[i];
                gloader._modules[m.id].builder.args[i] = gloader._modules[m.builder.args[i]].implementation;
                gloader._modules[m.id].builder.args[i].name = argName;
            }
            gloader._modules[m.id].implementation = gloader._modules[m.id].builder.apply(null, gloader._modules[m.id].builder.args);
            gloader._modules[m.id].status = gloader.Module.IMPLEMENTED;
            for (var i = 0; i < gloader._requests.length; i++) {
                gloader._requests[i].release(m.id);
            }
        }, resolve: function() {
            MODULES: for (var m in gloader._modules) {
                var module = gloader._modules[m];
                if (module.status == gloader.Module.PROVIDED) {
                    for (var j = 0; j < module.depends.length; j++) {
                        var dModule = gloader._modules[module.depends[j]];
                        if (!dModule || dModule.status != gloader.Module.IMPLEMENTED) {
                            continue MODULES;
                        }
                    }
                    gloader.implement(module);
                    gloader.resolve();
                }
            }
        }, getRequests: function(m) {
            var requests = [];
            REQUESTS: for (var i = 0; i < gloader._requests.length; i++) {
                var request = gloader._requests[i];
                for (var j = 0; j < request.waits.length; j++) {
                    if (request.waits[j] == m.id) {
                        requests.push(request);
                        break REQUESTS;
                    }
                }
            }
            return requests;
        }, toIds: function(lib) {
            var result = [];
            for (var i = 0; i < lib.length; i++) {
                var mods = lib[i];
                var libName = mods.shift();
                var libVersion = mods.shift();
                var libId = libName + "/" + gloader.map.latest(libName, libVersion);
                result.push(libId + "/" + libName);
                for (var j = 0; j < mods.length; j++) {
                    result.push(libId + "/" + mods[j]);
                }
            }
            return result;
        }
    };
    gloader.Request = function(r) {
        this.waits = [];
        this.status = gloader.Request.INITIAL;
        if (r.onLoad) {
            r.onload = r.onLoad;
        }
        if (r.onTimeout) {
            r.ontimeout = r.onTimeout;
        }
        if (!r.async&&!r.onload) {
            this.setGlobal = true;
        }
        this.async = (typeof r.async != "undefined") ? r.async : false;
        this.onload = r.onload;
        if (r.ontimeout) {
            if (typeof r.timeout == "undefined") {
                r.timeout = 20000;
            }
            this.timeoutRef = setTimeout(r.ontimeout, r.timeout);
        }
    };
    gloader.Request.INITIAL =- 1;
    gloader.Request.WAITING = 0;
    gloader.Request.COMPLETED = 1;
    gloader.Request.prototype.include = function(mId) {
        for (var i = 0; i < this.waits.length; i++) {
            if (this.waits[i] == mId) {
                return;
            }
        }
        this.waits.push(mId);
    };
    gloader.Request.prototype.release = function(mId) {
        var implementCount = 0;
        for (var i = 0; i < this.waits.length; i++) {
            var wModule = gloader._modules[this.waits[i]];
            if (wModule && wModule.status == gloader.Module.IMPLEMENTED) {
                implementCount++;
            }
        }
        if (implementCount == this.waits.length) {
            this.complete();
        }
    };
    gloader.Request.prototype.complete = function() {
        if (this.setGlobal) {
            for (var i = 0; i < this.waits.length; i++) {
                var gModule = gloader._modules[this.waits[i]];
                window[gModule.name] = gloader._modules[this.waits[i]].implementation;
            }
        }
        if (this.status == gloader.Request.COMPLETED) {
            return;
        }
        this.status = gloader.Request.COMPLETED;
        if (this.timeoutRef) {
            clearTimeout(this.timeoutRef);
        }
        for (var i = 0; i < this.args.length; i++) {
            this.args[i] = gloader._modules[this.args[i]].implementation;
        }
        if (this.onload) {
            this.onload.apply(null, this.args);
        }
    };
    gloader.Module = function(mId) {
        this.id = mId;
        this.name = mId.split("/").pop();
        this.status = gloader.Module.INITIAL;
        this.css = gloader.map.css[mId];
    };
    gloader.Module.INITIAL =- 1;
    gloader.Module.REQUESTED = 0;
    gloader.Module.FETCHED = 1;
    gloader.Module.PROVIDED = 2;
    gloader.Module.IMPLEMENTED = 3;
    gloader.isReady = false;
    (function() {
        var d = document;
        if (
        /*@cc_on!@*/
        false) {
            if (typeof window.frameElement != "undefined") {
                d.attachEvent("onreadystatechange", function() {
                    if (d.readyState == "complete") {
                        d.detachEvent("onreadystatechange", arguments.callee);
                        gloader.isReady = true;
                    }
                });
            } else {
                (function() {
                    try {
                        d.documentElement.doScroll("left");
                    } catch (e) {
                        setTimeout(arguments.callee, 50);
                        return;
                    }
                    gloader.isReady = true;
                })();
            }
        } else {
            if (typeof d.readyState != "undefined") {
                var f = function() {
                    /loaded|complete/.test(d.readyState) ? gloader.isReady = true : setTimeout(f, 10);
                };
                f();
            } else {
                var callback = function() {
                    if (arguments.callee.fired) {
                        return;
                    }
                    arguments.callee.fired = true;
                    if (gloader) {
                        gloader.isReady = true;
                    }
                };
                if (d.addEventListener) {
                    d.addEventListener("DOMContentLoaded", callback, false);
                }
                var oldOnload = window.onload;
                window.onload = function() {
                    if (oldOnload) {
                        oldOnload();
                    }
                    callback();
                };
            }
        }
    })();
    gloader.map.setProperties = function(libraryName, props) {
        if (typeof gloader.mapProps == "undefined") {
            gloader.mapProps = {};
        }
        if (typeof gloader.mapProps[libraryName] == "undefined") {
            gloader.mapProps[libraryName] = {};
        }
        for (var p in props) {
            gloader.mapProps[libraryName][p] = props[p];
        }
    };
    gloader.use = function(name, opts) {
        name = (name || "glow");
        opts = (opts || {});
        var properties = {};
        for (var opts_name in opts) {
            var property_name = (opts_name.indexOf("$") == 0) ? opts_name: "$" + opts_name;
            properties[property_name] = opts[opts_name];
        }
        properties.$debug = (properties.$debug || "");
        properties.$base = (properties.$base || gloader._baseDir + name + "/{$version}/");
        properties.$map = (properties.$map || gloader._baseDir + name + "/map.js");
        gloader.map.setProperties(name, properties);
        gloader.map.include(properties.$map);
    };
    (function() {
        var scripts = document.getElementsByTagName("script");
        for (var i = scripts.length - 1; i >= 0; i--) {
            var src = scripts[i].getAttribute("src");
            var filespec = gloader.util.getGloaderFile(src);
            if (typeof filespec != "undefined") {
                gloader._baseDir = filespec.dir;
                var gloaderScript = scripts[i].innerHTML;
                if (/\S/.test(gloaderScript)) {
                    eval(gloaderScript);
                }
                var mapped = false;
                for (var p in gloader.map._include) {
                    mapped = true;
                    continue;
                }
                if (!mapped) {
                    if (settings) {
                        gloader.use.apply(gloader, settings);
                    } else {
                        gloader.use();
                    }
                }
                break;
            }
        }
    })();
})();
