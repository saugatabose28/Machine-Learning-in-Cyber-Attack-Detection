define("istats-1", [], function() {
    var L = {}, b = L, h, M = "sa_labels", v = "istats-notrack", R = "_istats_" + Math.random(), w = {
        internal: true,
        external: true,
        download: true,
        clickthrough: true,
        promoimage: true
    }, c = {
        type: "",
        url: ""
    }, H = 2000, B = 10000, P = 500, s, d = {
        ignore: /.+\.(jpe?g|gif|png)$/i,
        webUrl: /^(\.\.?\/|\/|https?:\/\/|[^\/.:]+([\/.]|$))/i,
        pseudoProtocol: /^(mailto:|javascript:|about:|view-source:|data:)/i,
        internalUrl: /^(?:\/\/|https?:\/\/)?(?:[^.]+\.)*(bbc(?:\.co\.uk|\.com)|doubleclick\.net)(:|\/|$)/i,
        downloadUrl: /.+\.(pdf|te?xt|rtf|docx?|xlsx?|pptx?|od[tpsgbf]|mp[234]|m4a|mpeg|exe|dmg|zip|tgz)$/i,
        relativeUrl: /^(\.\.?\/|\/[^\/]|([^\/.:]+([\/.]|$)))/i,
        clickThrough: /^#sa-(.*?)(?:-sa(.*))?$/,
        hashLabels: /^ct_|ns_(fee|campaign|linkname|mchannel|source)=(.+?)$/,
        domain: /(bbc(?:\.co\.uk|\.com))$/i
    }, x = {}, G = {
        types: {
            "trackingfail.istats": true,
            "trackingsuccess.istats": true,
            "redirect.istats": true,
            "cookiecreated.istats": true
        }
    }, Q = {}, e = {}, E = [], A = function() {
        var S = {};
        for (var T in G.types) {
            S[T] = []
        }
        return S
    }, N = D(M), F = "";
    p(window);
    N = (N || (l())._trackingCookie);
    if (N) {
        (l())._linkTracked = true
    }
    if (z()) {
        f()
    }
    t(M);
    function p(S) {
        (typeof S.istats === "undefined") && (S.istats = {});
        (typeof S.istats.enabled === "undefined") && (S.istats.enabled = true);
        return S
    }
    function l(S) {
        return S ? p(S).istats : window.istats
    }
    L.getConfig = l;
    function k() {
        if (typeof N === "string") {
            c.type = "internal";
            return N
        }
    }
    function o(U) {
        if (history.replaceState) {
            var S = location.protocol + "//" + location.host + (location.pathname ? location.pathname : "");
            try {
                history.replaceState({}, "", S + U)
            } catch (T) {
                if (window.console && console.log) {
                    console.log(T)
                }
            }
        } else {
            location.hash = U
        }
    }
    function a(S) {
        S || (S = location.hash);
        if (S !== "") {
            var W = S.match(d.clickThrough), U, V = "", X = [];
            if (W === null) {
                return 
            }
            if (W[2]) {
                V = "#" + W[2]
            }
            o(V);
            U = W[1];
            if (U === "") {
                return 
            }
            c.type = "click through";
            X = U.split("&");
            for (var T in X) {
                if (X.hasOwnProperty(T)&&!d.hashLabels.test(X[T])) {
                    X[T] = "ct_" + X[T]
                }
            }
            U = X.join("&");
            return U
        }
    }
    function z() {
        var T = true, U = true, S = (l()).enabled;
        if (window.bbcFlagpoles_istats) {
            U=!(window.bbcFlagpoles_istats === "ON")
        }
        if (U ||!S) {
            T = false
        } else {
            f()
        }
        return T
    }
    function f() {
        if (!h && typeof istatsTrackingUrl !== "undefined") {
            h = istatsTrackingUrl;
            h += "&ns_ti=" + escape(document.title);
            h += "&ns_c=" + (document.characterSet ? document.characterSet : document.defaultCharset)
        }
        return h
    }
    L._setTrackingServiceUrl = f;
    L._getTrackingServiceUrl = function() {
        return h
    };
    L.setCountername = function(S) {
        h = h.replace(/([\?&]name=)[^&]*/ig, "$1" + S)
    };
    L.getCountername = function() {
        var S = h.match(/[\?&]name=([^&]*)/i);
        if (S) {
            return S[1]
        }
    };
    function I(T, S) {
        if (!T.className) {
            return false
        }
        return (" " + T.className + " ").indexOf(" " + S + " ")===-1 ? false : true
    }
    function u(U, T) {
        var S = (U.className) ? U.className + " ": "";
        if (!I(U, T)) {
            U.className = S + T
        }
    }
    function m(V, T) {
        var S = V.className.split(" "), W = [], U = S.length;
        while (U--) {
            if (S[U] !== T) {
                W.unshift(S[U])
            }
        }
        V.className = (W.length) ? W.join(" ") : ""
    }
    L.track = function(S, V) {
        if (!z()) {
            return 
        }
        if (!w[S]) {
            throw ('Given linkType, "' + S + '" is not valid.')
        }
        V = V || {};
        if (!V.region) {
            V.region = [document.body]
        }
        if (typeof V.region.push === "undefined") {
            V.region = [V.region]
        }
        var U = V.region.length;
        while (U--) {
            var W = V.region[U];
            i(W, S);
            var T = W[R];
            T.linkTypesTracked[S] = (V || {});
            if (!T.trackerAttached) {
                (function(X) {
                    x.attach(X, "click", function(Y) {
                        e.dispatch(X, Y)
                    })
                })(W);
                T.trackerAttached = true
            }
        }
    };
    L.observe = function(S, U, V) {
        if (!G.types[U]) {
            throw ('Cannot observe: Given eventType, "' + U + '" in unknown.')
        }
        if (typeof S.push === "undefined") {
            S = [S]
        }
        var T = S.length;
        while (T--) {
            i(S[T]);
            E[S[T][R].eventsKey][U].push(V)
        }
    };
    L._isInternal = function(S) {
        return L._isWebUrl(S) && (d.relativeUrl.test(S) || d.internalUrl.test(S))
    };
    L._isExternal = function(S) {
        return L._isWebUrl(S)&&!b._isInternal(S)
    };
    L._isDownload = function(S) {
        return d.webUrl.test(S) && d.downloadUrl.test(S)
    };
    L._isWebUrl = function(S) {
        return d.webUrl.test(S)&&!d.ignore.test(S)&&!d.pseudoProtocol.test(S)
    };
    L._getDomainFromHost = y;
    function y(S) {
        var T = S.match(d.domain);
        return T ? T[1] : S
    }
    L._getLabelsFromHashString = a;
    L._createCookie = J;
    L._inspectTracking = function(S) {
        if (typeof S !== "undefined") {
            c = S
        }
        return c
    };
    L.log = function(U, T, X, Y) {
        var S = "", W;
        if (!z()) {
            return 
        }
        T = encodeURIComponent(T);
        U = encodeURIComponent(U);
        for (var V in X) {
            S += "&" + encodeURIComponent(V) + "=" + encodeURIComponent(X[V])
        }
        if (U.toLowerCase() === "pageview") {
            L.setCountername(T);
            W = h
        } else {
            W = h + "&ns_type=hidden&action_type=" + U + "&action_name=" + T
        }
        W += S;
        c.type = "logging actions";
        r(W, Y)
    };
    L.addNoTrack = function(S) {
        u(S, v)
    };
    L.removeNoTrack = function(S) {
        m(S, v)
    };
    function K(U) {
        var T = [];
        for (var S in U) {
            if (U.hasOwnProperty(S)) {
                T.push(encodeURIComponent(S) + "=" + encodeURIComponent(U[S]))
            }
        }
        return T.join("&")
    }
    L.addLabels = function(T) {
        var S = K(T);
        if (S) {
            h += (h ? "&" : "") + S;
            F += "&" + S
        }
    };
    G.notify = function(W, U, X) {
        var S = E[W[R].eventsKey][U];
        for (var T = 0, V = S.length; T < V; T++) {
            if (typeof S[T] === "function") {
                if (S[T](X) === false) {
                    return false
                }
            }
        }
    };
    x.attach = function(S, U, T) {
        if (S.addEventListener) {
            S.addEventListener(U, T, false)
        } else {
            if (S.attachEvent) {
                S.attachEvent("on" + U, T)
            } else {
                S["on" + U] = T
            }
        }
    };
    x.detach = function(S, U, T) {
        if (S.removeEventListener) {
            S.removeEventListener(U, T, false)
        } else {
            if (S.detachEvent) {
                S.detachEvent("on" + U, T)
            } else {
                S["on" + U] = null
            }
        }
    };
    x.getTarget = function(S) {
        S = S || window.event;
        return S.target || S.srcElement
    };
    function j(T, S) {
        var U = T;
        do {
            if (U.nodeName == "A") {
                return U
            }
            if (U === S) {
                return false
            }
        }
        while (U = U.parentNode)
        }
    function O(S) {
        if (!b._isWebUrl(S)) {
            return 
        }
        if (b._isExternal(S)) {
            return "external"
        } else {
            if (b._isDownload(S)) {
                return "download"
            } else {
                if (b._isInternal(S)) {
                    return "internal"
                }
            }
        }
    }
    function n(W, T, V, S, U) {
        W.istats = W.istats || {};
        W.istats.linkType = T, W.istats.linkTrackerUrl = V, W.istats.linkLocation = S, W.istats.linkElement = U
    }
    e.dispatch = function(Z, Y) {
        var T = j(x.getTarget(Y), this), S, U, W, V, X;
        if (!T ||!T.href) {
            return 
        }
        V = new Date().getTime();
        X = (T.istatsTimestamp && (V - T.istatsTimestamp) < P);
        if (X || I(T, v)) {
            return 
        }
        S = O(T.href);
        U = e[S];
        W = Z[R].linkTypesTracked[S];
        if (!S ||!U ||!W) {
            return 
        }
        T.istatsTimestamp = V;
        Y.istats = Y.istats || {};
        e[S](Z, T, Y)
    };
    e.external = function(T, Z, Y) {
        var S = T[R].linkTypesTracked.external || {}, X = encodeURIComponent(Z.href) || "", aa = Z.id ? "&extlink_id=" + encodeURIComponent(Z.id): "", W = C(Z), U = S.linkLocation ? "&link_location=" + encodeURIComponent(S.linkLocation): "", V = h + "&ns_type=hidden&action_type=extlink&extlink_url=" + X + aa + (W ? "&" + W : "") + U;
        c.type = "external";
        n(Y, "external", V, S.linkLocation, Z);
        q(V, T, Z, Y)
    };
    e.download = function(T, Z, Y) {
        var S = T[R].linkTypesTracked.download || {}, X = encodeURIComponent(Z.href) || "", aa = Z.id ? "&download_id=" + encodeURIComponent(Z.id): "", W = C(Z), U = S.linkLocation ? "&link_location=" + encodeURIComponent(S.linkLocation): "", V = h + "&ns_type=hidden&action_type=download&download_url=" + X + aa + (W ? "&" + W : "") + U;
        c.type = "download";
        n(Y, "download", V, S.linkLocation, Z);
        q(V, T, Z, Y)
    };
    e.internal = function(V, aa, Z) {
        var S = V[R].linkTypesTracked.internal || {}, W = "intlink_from_url=" + encodeURIComponent(location.href), X = "&intlink_ts=" + new Date().getTime(), ab = aa.id ? "&intlink_id=" + encodeURIComponent(aa.id): "", Y = C(aa), U = S.linkLocation ? "&link_location=" + encodeURIComponent(S.linkLocation): "", T = W + X + ab + (Y ? "&" + Y : "") + U + F;
        J(M, T, B);
        G.notify(V, "cookiecreated.istats", Z)
    };
    function C(T) {
        var S = [];
        while (T) {
            if (T.linktrack) {
                S.push(T.linktrack)
            }
            T = T.parentNode
        }
        return S.join("&")
    }
    function q(T, X, U, V) {
        var S = V.altKey || V.ctrlKey || V.metaKey || V.shiftKey, W = function() {};
        if (!S) {
            W = function() {
                if (G.notify(X, "redirect.istats", V) !== false) {
                    window.location.href = U.href
                }
            }
        }
        clearTimeout(s);
        s = setTimeout(function() {
            G.notify(X, "trackingfail.istats", V);
            W()
        }, H);
        r(T, function() {
            clearTimeout(s);
            if (G.notify(X, "trackingsuccess.istats", V) !== false) {
                W()
            }
        }, V);
        if (!S) {
            if (V.preventDefault) {
                V.preventDefault()
            } else {
                event.returnValue = false
            }
        }
    }
    function r(T, V, U) {
        var S;
        T += "&ns__t=" + (new Date().getTime());
        T += "&ns_jspageurl=" + escape(location && location.href ? location.href : document.URL);
        if (U && U.istats.linkTrackerUrl) {
            U.istats.linkTrackerUrl = T
        }
        S = new Image();
        if (typeof V === "function") {
            S.onload = function() {
                V()
            }
        }
        c.url = T;
        S.src = T
    }
    function i(S) {
        if (typeof S[R] !== "undefined") {
            return 
        }
        S[R] = {
            eventsKey: E.length,
            linkTypesTracked: {}
        };
        E.push(A())
    }
    function J(S, Y, U) {
        var V = new Date(), X = 365 * 24 * 60 * 60 * 1000, aa = window.location.host, W, Z, T;
        if (typeof U === "undefined") {
            U = X
        }
        V.setTime(V.getTime() + U);
        Z = "; expires=" + V.toGMTString();
        W = y(aa);
        T = S + "=" + encodeURIComponent(Y) + Z + "; domain=" + W + "; path=/";
        document.cookie = T;
        return T
    }
    function D(U) {
        var X = U + "=", W = document.cookie.split(";"), T;
        for (var V = 0, S = W.length; V < S; V++) {
            T = W[V];
            while (T.charAt(0) === " ") {
                T = T.substring(1, T.length)
            }
            if (T.indexOf(X) === 0) {
                return decodeURIComponent(T.substring(X.length, T.length))
            }
        }
        return null
    }
    function t(S) {
        if (D(S) !== null) {
            J(S, "", - 1)
        }
    }
    function g() {
        var S;
        if (!z() && typeof h !== "string") {
            return 
        }
        S = k() || a();
        if (S) {
            r(h + "&" + S);
            (l())._linkTracked = true
        }
    }
    if (typeof require.ready === "function") {
        require.ready(g)
    } else {
        require(["domReady"], function(S) {
            S(g)
        })
    }
    return L
});
