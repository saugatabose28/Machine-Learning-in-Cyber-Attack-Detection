LI.define("ContactsFileUpload");
LI.ContactsFileUpload = function(c, b) {
    var b = {
        fetchPermMediaIDURL: b.fetchPermMediaIDURL || null,
        checkStatusURL: b.checkStatusURL || null,
        displayImportedContactsToInviteURL: b.displayImportedContactsToInviteURL || null,
        progressMessage: b.progressMessage || null,
        fileUploadId: b.fileUploadId || null,
        proccessingIconUrl: b.proccessingIconUrl || "#",
        displayImportedContactsInRegURL: b.displayImportedContactsInRegURL || null,
        onUploadRedirectToFetch: b.onUploadRedirectToFetch || false
    };
    b.checkStatusReqCount = 0;
    b.processingIcon = '<img src="' + b.proccessingIconUrl + '" alt="' + b.progressMessage + '" style="vertical-align:middle;" >';
    var a = YDom.get("fileUploadForm");
    YDom.get("uploadFileSubmit").disabled = true;
    YEvent.on(b.fileUploadId, "click", function() {
        YDom.get("uploadFileSubmit").disabled = false;
        YDom.get("upload_msg").innerHTML = ""
    });
    YEvent.on("uploadFileSubmit", "click", this.mediaUpload, b)
};
LI.ContactsFileUpload.prototype = {
    displayMsg: function(b, a) {
        if (a) {
            LI.injectAlert(b, "success", "upload_msg")
        } else {
            LI.injectAlert(b, "error", "upload_msg")
        }
    },
    mediaUpload: function(evt, config) {
        YEvent.preventDefault(evt);
        if (YDom.get(config.fileUploadId).value == "") {
            window.LI.ContactsFileUpload.prototype.displayMsg(LI.i18n.get("TEXT_NOFILE_ERROR"), false);
            YDom.get("upload_progress").innerHTML = ""
        } else {
            YDom.get("upload_progress").innerHTML = config.processingIcon;
            var form = YDom.get("fileUploadForm");
            var isHttps = location.href.match(new RegExp("https://"));
            YAHOO.util.Connect.setForm(form, true, isHttps);
            YAHOO.util.Connect.asyncRequest("POST", form.action, {
                upload: function(o) {
                    var success = false;
                    var response = eval("(" + o.responseText + ")");
                    if (response != null) {
                        var status = response.status;
                        if (status == "SUCCESS") {
                            success = true;
                            var tempMediaID = response.value;
                            window.LI.ContactsFileUpload.prototype.fetchPermMediaID(config, tempMediaID)
                        }
                    }
                    if (!success) {
                        window.LI.ContactsFileUpload.prototype.displayMsg(LI.i18n.get("TEXT_FILEUPLOAD_ERROR"), false);
                        YDom.get("upload_progress").innerHTML = ""
                    }
                }
            })
        }
    },
    fetchPermMediaID: function(config, tempMediaID) {
        window.LI.ContactsFileUpload.prototype.trackFileUpload();
        var fetchPermMediaIDURL = config.fetchPermMediaIDURL + "&tempMediaID=" + tempMediaID;
        YAHOO.util.Connect.asyncRequest("GET", fetchPermMediaIDURL, {
            success: function(o) {
                var status = o.responseXML.getElementsByTagName("responseInfo")[0].firstChild.nodeValue;
                var message = null;
                if (status == "SUCCESS") {
                    var permMediaID = eval("(" + o.responseXML.getElementsByTagName("jsonPayLoad")[0].firstChild.nodeValue + ")").permMediaID;
                    window.LI.ContactsFileUpload.prototype.checkStatus(config, permMediaID)
                } else {
                    message = o.responseXML.getElementsByTagName("responseMsg")[0].firstChild.nodeValue;
                    window.LI.ContactsFileUpload.prototype.displayMsg(message, false);
                    YDom.get("upload_progress").innerHTML = ""
                }
            },
            failure: function(ex) {
                window.LI.ContactsFileUpload.prototype.displayMsg(LI.i18n.get("TEXT_FILEUPLOAD_ERROR"), false);
                YDom.get("upload_progress").innerHTML = ""
            },
            timeout: 5000
        })
    },
    checkStatus: function(config, permMediaID) {
        YAHOO.util.Connect.asyncRequest("POST", config.checkStatusURL, {
            success: function(o) {
                var status = o.responseXML.getElementsByTagName("responseInfo")[0].firstChild.nodeValue;
                var message = null;
                if (status == "SUCCESS") {
                    var jsonPayload = eval("(" + o.responseXML.getElementsByTagName("jsonPayLoad")[0].firstChild.nodeValue + ")");
                    var flag = jsonPayload.flag;
                    switch (flag) {
                    case"success":
                        window.LI.ContactsFileUpload.prototype.displayImportedContacts(config, jsonPayload.batchID);
                        break;
                    case"waiting":
                        if (config.checkStatusReqCount > 10) {
                            window.LI.ContactsFileUpload.prototype.displayImportedContacts(config, jsonPayload.batchID)
                        } else {
                            window.setTimeout(function() {
                                window.LI.ContactsFileUpload.prototype.checkStatus(config, permMediaID)
                            }, 2000)
                        }
                        break;
                    case"timeout":
                        message = o.responseXML.getElementsByTagName("responseMsg")[0].firstChild.nodeValue;
                        window.LI.ContactsFileUpload.prototype.displayMsg(message, true);
                        YDom.get("upload_progress").innerHTML = "";
                        break
                    }
                } else {
                    message = o.responseXML.getElementsByTagName("responseMsg")[0].firstChild.nodeValue;
                    window.LI.ContactsFileUpload.prototype.displayMsg(message, false);
                    YDom.get("upload_progress").innerHTML = ""
                }
            },
            failure: function(ex) {
                window.LI.ContactsFileUpload.prototype.displayMsg(LI.i18n.get("TEXT_FILEUPLOAD_ERROR"), false);
                YDom.get("upload_progress").innerHTML = ""
            },
            timeout: 5000
        }, "checkStatusReqCount=" + config.checkStatusReqCount+++"&permMediaID=" + permMediaID)
    },
    displayImportedContacts: function(b, d) {
        if (!b.onUploadRedirectToFetch) {
            var c = YDom.getElementBy(function(e) {
                return (e.name == "goback") ? true : false
            }, "input", "fileUploadForm");
            var a = (c) ? "&goback=" + c.value: "";
            YDom.get("upload_progress").innerHTML = "";
            window.location = b.displayImportedContactsToInviteURL + "&batchID=" + d + a
        } else {
            window.location = b.displayImportedContactsInRegURL
        }
    },
    trackFileUpload: function(a) {
        WebTracking.trackUserAction("abook_file_upload", "")
    }
};
if (lui != null && lui.goback == null) {
    Lui.GoBack = {};
    Lui.GoBack.GOBACK = "goback";
    lui.goback = function() {
        var N = "jsstate";
        var C = "placeholder";
        var O = "goback";
        var D = {};
        var Q = new Lui.Url(window.location.href);
        var L = null;
        var K = [];
        function R(T, Y) {
            var Z = T + (Y ? "Secure" : "");
            var V = D[Z];
            if (V != null) {
                return V
            }
            var X = YDom.get(Z);
            if (X == null) {
                return ""
            }
            var W = "file://";
            var U = X.href;
            if (U.toLowerCase().indexOf(W) == 0) {
                U = U.substring(W.length)
            }
            V = new Lui.Url(U);
            D[Z] = V;
            return V
        }
        function S(T, V) {
            if (V != null) {
                var W;
                if (M(T)) {
                    W = V.getPath().replace(C, T.getPath(T.isSecure()))
                } else {
                    W = T.getPath()
                }
                var U = [];
                if (V.hasParameters()) {
                    U.push(V.getParameterString())
                }
                if (T.hasParameters()) {
                    U.push(T.getParameterString())
                }
                if (U.length > 0) {
                    W += "?" + U.join("&")
                }
                if (T.hasFragment()) {
                    W += "#" + T.getFragment()
                }
                return W
            }
        }
        function M(T) {
            if (T instanceof Lui.Url) {
                T = T.getPath()
            }
            return !new RegExp(/^\s*(http:|https:|ftp:|javascript:|mailto:|#)/ig).test(T)
        }
        function P(T) {
            var U = new Lui.Url(T);
            var V = R("aGoBackTemplateLink", U.isSecure());
            return S(U, V)
        }
        function J(T) {
            var U = new Lui.Url(T);
            var V = R("anogbGoBackTemplateLink", U.isSecure());
            return S(U, V)
        }
        function E(T) {
            var U = new Lui.Url(T);
            U.appendParameter(N, G());
            var V = R("agbpushGoBackTemplateLink", U.isSecure());
            return S(U, V)
        }
        function H(T) {
            T.href = lui.goback.agbpushHref(T.href);
            return true
        }
        function B(T) {
            T.action = lui.goback.agbpushHref(T.action);
            return true
        }
        function G() {
            if (K.length == 0) {
                return ""
            }
            var U = [];
            for (var T = 0; T < K.length; T++) {
                U.push(K[T].serializeState())
            }
            return U.join("")
        }
        function A(X, Y) {
            if (X && X instanceof Lui.GoBack.State) {
                X[Lui.GoBack.State.PARAM_OBJ_ID] = Y;
                K.push(X);
                var W = Lui.Url.decode(Q.getParameterValueByKey(N));
                if (W != null) {
                    if (L == null) {
                        L = {};
                        var V = W.split(".");
                        V.shift();
                        for (var U = 0; U < V.length; U++) {
                            var T = V[U].split("_");
                            L[T.shift()] = T.join("_")
                        }
                    }
                    X.deserializeState(L[X[Lui.GoBack.State.PARAM_OBJ_ID]])
                }
            }
        }
        function I() {
            K = [];
            return this
        }
        function F(T) {
            Q = new Lui.Url(T)
        }
        return {
            register: A,
            clearRegistry: I,
            checkUrl: M,
            aHref: P,
            anogbHref: J,
            agbpushHref: E,
            agbpushHrefOnclick: H,
            setUrl: F
        }
    }();
    Lui.GoBack.State = function() {};
    Lui.GoBack.State.PARAM_OBJ_ID = "jsstateId";
    Lui.GoBack.State.prototype.serializeState = function(C) {
        if (this[Lui.GoBack.State.PARAM_OBJ_ID] == null) {
            var B = "Unique id not set";
            throw B
        }
        var D = [];
        D.push(".");
        D.push(this[Lui.GoBack.State.PARAM_OBJ_ID]);
        if (C && YAHOO.lang.isArray(C) && C.length > 0) {
            for (var A = 0; A < C.length; A++) {
                D.push("_");
                D.push(Lui.GoBack.STRING_CODEC.encode(YAHOO.lang.trim(C[A])))
            }
        }
        return D.join("")
    };
    Lui.GoBack.State.prototype.deserializeState = function(B) {
        if (B == null) {
            return null
        }
        var C = ("" + B).split("_");
        for (var A = 0; A < C.length; A++) {
            C[A] = Lui.GoBack.STRING_CODEC.decode(C[A])
        }
        return C
    };
    Lui.GoBack.StringCodec = function(B, C) {
        if (YAHOO.lang.isUndefined(B)) {
            B = "*"
        }
        if (C == null ||!YAHOO.lang.isArray(C) || C.length > 7) {
            throw "The array you provide must be not null, not empty, and contain less than 7 characters"
        }
        for (var A = 0; A < C.length; A++) {
            if (C[A] == B) {
                throw "The characters you can encode must be different from the encoding character!"
            }
            if (C[A] >= "0" && C[A] <= "9") {
                throw "The character you encode must not be one of '0'-'9'"
            }
        }
        if (B >= "0" && B <= "9") {
            throw "The encoding character must not be one of '0'-'9'"
        }
        this._charactersToEncode = C;
        this._encodingChar = B;
        var D = "0";
        this._encodedEncodingCharString = this._encodingChar + (D++);
        this._encodedNullString = this._encodingChar + (D++);
        this._encodedEmptyString = this._encodingChar + (D++);
        this._encodedCharsString = [];
        for (var A = 0; A < C.length; A++) {
            this._encodedCharsString.push(this._encodingChar + (D++))
        }
    };
    Lui.GoBack.StringCodec.prototype.encode = function(C) {
        if (C == null) {
            return this._encodedNullString
        }
        if (C.length == 0) {
            return this._encodedEmptyString
        }
        var E = [];
        var D;
        var A = C.length;
        mainloop: for (var B = 0; B < A; B++) {
            D = C.charAt(B);
            if (D == this._encodingChar) {
                E.push(this._encodedEncodingCharString);
                continue
            }
            for (j = 0; j < this._charactersToEncode.length; j++) {
                if (D == this._charactersToEncode[j]) {
                    E.push(this._encodedCharsString[j]);
                    continue mainloop
                }
            }
            E.push(D)
        }
        return E.join("")
    };
    Lui.GoBack.StringCodec.prototype.decode = function(D) {
        if (D == null) {
            return null
        }
        if (D == this._encodedNullString) {
            return null
        }
        if (D == this._encodedEmptyString) {
            return ""
        }
        var H = [];
        var G;
        var B = D.length;
        var F = B - 1;
        for (var C = 0; C < B; C++) {
            G = D.charAt(C);
            if (G == this._encodingChar) {
                if (C == F) {
                    throw "Cannot decode exception: " + D
                }
                G = D.charAt(++C);
                if (G == "0") {
                    H.push(this._encodingChar)
                } else {
                    var A = G - "3";
                    try {
                        H.push(this._charactersToEncode[A])
                    } catch (E) {
                        throw "Cannot decode exception: " + D
                    }
                }
            } else {
                H.push(G)
            }
        }
        return H.join("")
    };
    Lui.GoBack.STRING_CODEC = new Lui.GoBack.StringCodec("*", [".", "_", "-"])
};
(function() {
    var a = 2, d = 500, e = 400, k = "btn-menu-open", b = "btn-split-toggle-hover", g = "menu-btn-item-selected", c = "click", l = "mouseout", f = "mouseover";
    function h(q, p) {
        var s, n, o, r, m;
        if (!q) {
            return
        }
        this.listEl = r = YDom.getChildrenBy(q, function(t) {
            return t.tagName == "UL"
        })[0];
        if (!r) {
            return
        }
        p = p || {};
        YAHOO.lang.augmentObject(p, {
            tier: "quaternary",
            split: false,
            camo: true,
            showOnHover: false,
            appendMenuToDocumentBody: false,
            appendMenuToElement: false
        });
        this.el = q;
        this.config = p;
        n = "btn-" + p.tier;
        s = "btn-menu " + n;
        if (p.split) {
            s += " btn-split"
        }
        if (p.camo) {
            s += " btn-camo"
        }
        this.buttonContainer = o = LI.domify('<span class="' + s + '"><span class="toggle-btn"></span></span>');
        this.toggleEl = YDom.getFirstChild(o);
        q.insertBefore(o, r);
        LI.hide(r);
        YDom.removeClass(YDom.getElementsByClassName(n, "", r), n);
        m = YDom.getElementsByClassName(g, "li", r)[0] || YDom.getFirstChild(r);
        this.setButtonEl(m);
        YEvent.on(o, f, this._onMouseOver, this, true);
        YEvent.on(o, l, this._onMouseOut, this, true);
        YEvent.on(o, c, this._onClick, this, true)
    }
    h.prototype = {
        _onClick: function(m) {
            var o = YEvent.getTarget(m), n = o;
            if (!this.config.split || o != this.buttonEl) {
                YEvent.preventDefault(m);
                if (!this.menu) {
                    this.initMenu()
                }
                this.menu.setVisible(!this.menu.getVisible())
            }
        },
        _onDocMouseOver: function(m) {
            var o = YEvent.getTarget(m), n = this, p = n.menu, q = n.hideMenuTimer;
            if (p) {
                if (YDom.isAncestor(n.el, o) || YDom.isAncestor(p.getEl(), o)) {
                    if (q) {
                        window.clearTimeout(q);
                        n.hideMenuTimer = null
                    }
                } else {
                    if (!q) {
                        n.hideMenuTimer = window.setTimeout(function() {
                            p.setVisible(false);
                            YEvent.removeListener(document.body, f, n._onDocMouseOver);
                            n.hideMenuTimer = null
                        }, e)
                    }
                }
            }
        },
        _onMenuItemClick: function(m) {},
        _onMenuVisibleChange: function(n) {
            var o = this.buttonContainer, q, p, m;
            if (n.newValue) {
                q = YDom.getRegion(o);
                p = this.menu.el;
                m = (this.config.split) ? q.right - YDom.getRegion(p).width : q.left;
                YDom.setXY(p, [m, q.bottom + a]);
                YDom.addClass(o, k)
            } else {
                YDom.removeClass(o, k)
            }
        },
        _onMouseOut: function(m) {
            var n = YEvent.getTarget(m);
            if (this.config.split && n !== this.buttonEl) {
                YDom.removeClass(this.buttonContainer, b)
            }
            if (this.showMenuTimer&&!YDom.isAncestor(this.el, n)) {
                window.clearTimeout(this.showMenuTimer)
            }
        },
        _onMouseOver: function(m) {
            var o = YEvent.getTarget(m), n = this;
            if (n.config.split && o !== n.buttonEl) {
                YDom.addClass(n.buttonContainer, b)
            }
            if (n.config.showOnHover) {
                if (!n.menu) {
                    n.initMenu()
                }
                if (!n.menu.getVisible()&&!n.showMenuTimer) {
                    n.showMenuTimer = window.setTimeout(function() {
                        n.menu.setVisible(true);
                        YEvent.on(document.body, f, n._onDocMouseOver, n, true);
                        n.showMenuTimer = null
                    }, d)
                }
            }
        },
        initMenu: function() {
            var n = this.listEl, m = (this.config.appendMenuToDocumentBody) ? document.body: ((this.config.appendMenuToElement) ? this.config.appendMenuToElement : this.el);
            LI.show(n);
            m.appendChild(n);
            this.menu = new j(n);
            this.menu.subscribe("visibleChange", this._onMenuVisibleChange, this, true);
            this.menu.subscribe("menuItemClick", this._onMenuItemClick, this, true)
        },
        setButtonEl: function(q) {
            var r = YDom.getFirstChild(q), p = (this.config.split) ? r: r.cloneNode(true), n = this.buttonEl, m = this.config.split, o;
            YDom.addClass(p, "btn");
            if (m) {
                YDom.addClass(p, "btn-" + this.config.tier)
            }
            p.setAttribute("data-li-backref", YDom.generateId(q));
            this.buttonContainer.insertBefore(p, this.toggleEl);
            if (m) {
                YDom.setStyle(q, "display", "none")
            } else {
                YDom.addClass(q, g)
            }
            this.buttonEl = p;
            if (n) {
                YDom.removeClass(n, "btn");
                if (m) {
                    YDom.removeClass(n, "btn-" + this.config.tier)
                }
                o = YDom.get(n.getAttribute("data-li-backref"));
                if (m) {
                    YDom.setStyle(o, "display", "");
                    o.appendChild(n)
                } else {
                    YDom.removeClass(o, g);
                    n.parentNode.removeChild(n)
                }
            }
        }
    };
    function i(n, m) {
        m = {
            tier: m.type || "ternary",
            split: true,
            camo: false
        };
        return new h(n, m)
    }
    function j(n, m) {
        this.el = n;
        m = m || {};
        this.config = {
            closeonclick: m.closeonclick || true,
            visible: false
        };
        YDom.addClass(n, "menu-btn drop");
        this.createEvent("visibleChange");
        this.createEvent("menuItemClick")
    }
    j.prototype = {
        _onDocClick: function(m) {
            this.setVisible(false)
        },
        _onClick: function(m) {
            var p = YEvent.getTarget(m), o = p, n;
            if (this.el !== p) {
                while (o.parentNode !== this.el) {
                    o = o.parentNode
                }
                n = {
                    el: o
                };
                this.fireEvent("menuItemClick", n)
            }
        },
        getEl: function() {
            return this.el
        },
        getVisible: function() {
            return this.config.visible
        },
        setVisible: function(o) {
            var n, m;
            if (o == this.getVisible()) {
                return false
            }
            if (o) {
                YDom.setStyle(this.el, "visibility", "visible");
                if (this.config.closeonclick) {
                    n = this;
                    window.setTimeout(function() {
                        YEvent.on(document.body, c, n._onDocClick, n, true);
                        YEvent.on(n.el, c, n._onClick, n, true)
                    }, 10)
                }
            } else {
                YDom.setStyle(this.el, "visibility", "hidden");
                if (this.config.closeonclick) {
                    YEvent.removeListener(document.body, c, this._onDocClick);
                    YEvent.removeListener(this.el, c, this._onClick)
                }
            }
            m = {
                name: "visible",
                prevValue: this.config.visible,
                newValue: o
            };
            this.config.visible = o;
            this.fireEvent("visibleChange", m)
        }
    };
    YAHOO.lang.augmentProto(j, YAHOO.util.EventProvider);
    LI.MenuButton = h;
    LI.SplitButton = i
})();
YAHOO.util.History = (function() {
    var c = null;
    var l = null;
    var g = false;
    var d = [];
    var b = [];
    function j() {
        var n, m;
        m = self.location.href;
        n = m.indexOf("#");
        return n >= 0 ? m.substr(n + 1) : null
    }
    function a() {
        var n, o, p = [], m = [];
        for (n in d) {
            if (YAHOO.lang.hasOwnProperty(d, n)) {
                o = d[n];
                p.push(n + "=" + o.initialState);
                m.push(n + "=" + o.currentState)
            }
        }
        l.value = p.join("&") + "|" + m.join("&");
        if (YAHOO.env.ua.webkit) {
            l.value += "|" + b.join(",")
        }
    }
    function i(m) {
        var r, s, n, p, q, u, t, o;
        if (!m) {
            for (n in d) {
                if (YAHOO.lang.hasOwnProperty(d, n)) {
                    p = d[n];
                    p.currentState = p.initialState;
                    p.onStateChange(unescape(p.currentState))
                }
            }
            return 
        }
        q = [];
        u = m.split("&");
        for (r = 0, s = u.length; r < s; r++) {
            t = u[r].split("=");
            if (t.length === 2) {
                n = t[0];
                o = t[1];
                q[n] = o
            }
        }
        for (n in d) {
            if (YAHOO.lang.hasOwnProperty(d, n)) {
                p = d[n];
                o = q[n];
                if (!o || p.currentState !== o) {
                    p.currentState = o || p.initialState;
                    p.onStateChange(unescape(p.currentState))
                }
            }
        }
    }
    function k(q) {
        var m, p, n;
        m = '<html><body><div id="state">' + q.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") + "</div></body></html>";
        try {
            p = c.contentWindow.document;
            n = p.domain;
            p.open();
            p.write(m);
            p.close();
            if (p.domain !== n) {
                p.domain = n
            }
            return true
        } catch (o) {
            return false
        }
    }
    var e = 1000;
    function h() {
        e--;
        var q, n, p, o;
        try {
            q = c.contentWindow.document
        } catch (m) {
            if (e > 0) {
                setTimeout(h, 10)
            }
            return 
        }
        n = q.getElementById("state");
        p = n ? n.innerText : null;
        o = j();
        setInterval(function() {
            var w, s, t, u, v, r;
            q = c.contentWindow.document;
            n = q.getElementById("state");
            w = n ? n.innerText : null;
            v = j();
            if (w !== p) {
                p = w;
                i(p);
                if (!p) {
                    s = [];
                    for (t in d) {
                        if (YAHOO.lang.hasOwnProperty(d, t)) {
                            u = d[t];
                            s.push(t + "=" + u.initialState)
                        }
                    }
                    v = s.join("&")
                } else {
                    v = p
                }
                self.location.hash = v;
                o = v;
                a()
            } else {
                if (v !== o) {
                    o = v;
                    k(v)
                }
            }
        }, 50);
        g = true;
        YAHOO.util.History.onLoadEvent.fire()
    }
    function f() {
        var t, v, r, x, n, p, w, q, u, o, m, s;
        r = l.value.split("|");
        if (r.length > 1) {
            w = r[0].split("&");
            for (t = 0, v = w.length; t < v; t++) {
                x = w[t].split("=");
                if (x.length === 2) {
                    n = x[0];
                    q = x[1];
                    p = d[n];
                    if (p) {
                        p.initialState = q
                    }
                }
            }
            u = r[1].split("&");
            for (t = 0, v = u.length; t < v; t++) {
                x = u[t].split("=");
                if (x.length >= 2) {
                    n = x[0];
                    o = x[1];
                    p = d[n];
                    if (p) {
                        p.currentState = o
                    }
                }
            }
        }
        if (r.length > 2) {
            b = r[2].split(",")
        }
        if (YAHOO.env.ua.ie) {
            if (typeof document.documentMode === "undefined" || document.documentMode < 8) {
                h()
            } else {
                YAHOO.util.Event.on(self, "hashchange", function() {
                    var y = j();
                    i(y);
                    a()
                });
                g = true;
                YAHOO.util.History.onLoadEvent.fire()
            }
        } else {
            m = history.length;
            s = j();
            setInterval(function() {
                var A, y, z;
                y = j();
                z = history.length;
                if (y !== s) {
                    s = y;
                    m = z;
                    i(s);
                    a()
                } else {
                    if (z !== m && YAHOO.env.ua.webkit && YAHOO.env.ua.webkit < 500) {
                        s = y;
                        m = z;
                        A = b[m - 1];
                        i(A);
                        a()
                    }
                }
            }, 50);
            g = true;
            YAHOO.util.History.onLoadEvent.fire()
        }
    }
    return {
        onLoadEvent: new YAHOO.util.CustomEvent("onLoad"),
        onReady: function(m, n, o) {
            if (g) {
                setTimeout(function() {
                    var p = window;
                    if (o) {
                        if (o === true) {
                            p = n
                        } else {
                            p = o
                        }
                    }
                    m.call(p, "onLoad", [], n)
                }, 0)
            } else {
                YAHOO.util.History.onLoadEvent.subscribe(m, n, o)
            }
        },
        register: function(o, m, q, r, s) {
            var p, n;
            if (typeof o !== "string" || YAHOO.lang.trim(o) === "" || typeof m !== "string" || typeof q !== "function") {
                throw new Error("Missing or invalid argument")
            }
            if (d[o]) {
                return 
            }
            if (g) {
                throw new Error("All modules must be registered before calling YAHOO.util.History.initialize")
            }
            o = escape(o);
            m = escape(m);
            p = null;
            if (s === true) {
                p = r
            } else {
                p = s
            }
            n = function(t) {
                return q.call(p, t, r)
            };
            d[o] = {
                name: o,
                initialState: m,
                currentState: m,
                onStateChange: n
            }
        },
        initialize: function(m, n) {
            if (g) {
                return 
            }
            if (YAHOO.env.ua.opera && typeof history.navigationMode !== "undefined") {
                history.navigationMode = "compatible"
            }
            if (typeof m === "string") {
                m = document.getElementById(m)
            }
            if (!m || m.tagName.toUpperCase() !== "TEXTAREA" && (m.tagName.toUpperCase() !== "INPUT" || m.type !== "hidden" && m.type !== "text")) {
                throw new Error("Missing or invalid argument")
            }
            l = m;
            if (YAHOO.env.ua.ie && (typeof document.documentMode === "undefined" || document.documentMode < 8)) {
                if (typeof n === "string") {
                    n = document.getElementById(n)
                }
                if (!n || n.tagName.toUpperCase() !== "IFRAME") {
                    throw new Error("Missing or invalid argument")
                }
                c = n
            }
            YAHOO.util.Event.onDOMReady(f)
        },
        navigate: function(n, o) {
            var m;
            if (typeof n !== "string" || typeof o !== "string") {
                throw new Error("Missing or invalid argument")
            }
            m = {};
            m[n] = o;
            return YAHOO.util.History.multiNavigate(m)
        },
        multiNavigate: function(n) {
            var m, o, q, p, r;
            if (typeof n !== "object") {
                throw new Error("Missing or invalid argument")
            }
            if (!g) {
                throw new Error("The Browser History Manager is not initialized")
            }
            for (o in n) {
                if (!d[o]) {
                    throw new Error("The following module has not been registered: " + o)
                }
            }
            m = [];
            for (o in d) {
                if (YAHOO.lang.hasOwnProperty(d, o)) {
                    q = d[o];
                    if (YAHOO.lang.hasOwnProperty(n, o)) {
                        p = n[unescape(o)]
                    } else {
                        p = unescape(q.currentState)
                    }
                    o = escape(o);
                    p = escape(p);
                    m.push(o + "=" + p)
                }
            }
            r = m.join("&");
            if (YAHOO.env.ua.ie && (typeof document.documentMode === "undefined" || document.documentMode < 8)) {
                return k(r)
            } else {
                self.location.hash = r;
                if (YAHOO.env.ua.webkit) {
                    b[history.length] = r;
                    a()
                }
                return true
            }
        },
        getCurrentState: function(m) {
            var n;
            if (typeof m !== "string") {
                throw new Error("Missing or invalid argument")
            }
            if (!g) {
                throw new Error("The Browser History Manager is not initialized")
            }
            n = d[m];
            if (!n) {
                throw new Error("No such registered module: " + m)
            }
            return unescape(n.currentState)
        },
        getBookmarkedState: function(r) {
            var q, n, m, t, o, s, p;
            if (typeof r !== "string") {
                throw new Error("Missing or invalid argument")
            }
            m = self.location.href.indexOf("#");
            if (m >= 0) {
                t = self.location.href.substr(m + 1);
                o = t.split("&");
                for (q = 0, n = o.length; q < n; q++) {
                    s = o[q].split("=");
                    if (s.length === 2) {
                        p = s[0];
                        if (p === r) {
                            return unescape(s[1])
                        }
                    }
                }
            }
            return null
        },
        getQueryStringParameter: function(r, o) {
            var p, n, m, t, s, q;
            o = o || self.location.href;
            m = o.indexOf("?");
            t = m >= 0 ? o.substr(m + 1) : o;
            m = t.lastIndexOf("#");
            t = m >= 0 ? t.substr(0, m) : t;
            s = t.split("&");
            for (p = 0, n = s.length; p < n; p++) {
                q = s[p].split("=");
                if (q.length >= 2) {
                    if (q[0] === r) {
                        return unescape(q[1])
                    }
                }
            }
            return null
        }
    }
})();
YAHOO.register("history", YAHOO.util.History, {
    version: "2.8.1",
    build: "19"
});
(function() {
    var c = YAHOO.util.History, a = "yui-history-iframe", d = "yui-history-field";
    function b() {
        var f, g, h;
        if (!YDom.get(d)) {
            g = document.createElement("input");
            g.id = d;
            g.type = "hidden";
            document.body.insertBefore(g, document.body.firstChild)
        }
        if (YAHOO.env.ua.ie && YAHOO.env.ua.ie < 8&&!YDom.get(a)) {
            h = document.createElement("iframe");
            h.id = a;
            h.src = "javascript:'<script>window.onload=function(){document.write(\\'<script>if(document.domain !== \\\"" + document.domain + '\\")document.domain=\\"' + document.domain + "\\\";<\\\\/script>\\');document.close();};<\/script>'";
            YDom.setStyle(h, "position", "absolute");
            YDom.setStyle(h, "left", "0");
            YDom.setStyle(h, "top", "0");
            YDom.setStyle(h, "width", "1px");
            YDom.setStyle(h, "height", "1px");
            YDom.setStyle(h, "visibility", "hidden");
            document.body.insertBefore(h, document.body.firstChild)
        }
        try {
            c.initialize(d, a)
        } catch (i) {
            HistoryManager.failed = true
        }
    }
    HistoryManager = {
        failed: false,
        getCurrentState: function(e) {
            return c.getCurrentState(e)
        },
        navigate: function(e, f) {
            c.navigate(e, f)
        },
        register: function(h) {
            var g = h.name, k = h.onHistoryStateChange, f = h.onHistoryManagerReady, j = h.scope || null, i = h.queryParam || "", e = h.defaultState || "";
            initialState = c.getBookmarkedState(g);
            if (!initialState && i) {
                initialState = c.getQueryStringParameter(i)
            }
            if (!initialState) {
                initialState = e
            }
            c.register(g, initialState, k, {
                name: g
            }, j);
            c.onReady(f, {
                name: g
            }, j)
        }
    };
    YEvent.onDOMReady(b);
    LI.HistoryManager = HistoryManager
})();
(function() {
    function a(b) {
        this.url = b.url || "";
        this.callback = b.callback || {};
        this.method = b.method || "GET";
        this.postData = b.postData || "";
        this.mode = b.mode || "YUI";
        this.beforeRequestEvent = new YAHOO.util.CustomEvent("beforeRequest")
    }
    a.prototype = {
        addParams: function(b) {
            if (this.getMethod() === "POST") {
                this.setPostData(LI.addParams(this.getPostData(), b, true))
            } else {
                this.setUrl(LI.addParams(this.getUrl(), b))
            }
        },
        asyncRequest: function() {
            this.beforeRequestEvent.fire();
            var d = this, f = d.getMethod(), c = d.getUrl(), e = d.getCallback(), b = d.getPostData();
            if (this.mode === "YUI") {
                return YConn.asyncRequest(f, c, e, b)
            } else {
                if (this.mode === "LI") {
                    return LI.asyncRequest(f, c, e, b)
                }
            }
        },
        getCallback: function() {
            return this.callback
        },
        getMethod: function() {
            return this.method
        },
        getMode: function() {
            return this.mode
        },
        getPostData: function() {
            return this.postData
        },
        getUrl: function() {
            return this.url
        },
        setCallback: function(b) {
            this.callback = b
        },
        setMethod: function(b) {
            this.method = b
        },
        setMode: function(b) {
            this.mode = b
        },
        setPostData: function(b) {
            this.postData = b
        },
        setUrl: function(b) {
            this.url = b
        }
    };
    LI.ARBase = a
})();
(function() {
    var c = "disabled", q = "feed-no-more", f = "feed-item-insert", d = '<span class="loading"></span>', p = "noMoreResults", h = false, k = false, j = 0, m = 3, e = false, l = 600, a, r = true;
    function n(z) {
        var A, w, v, y, t, u;
        try {
            A = LI.addToList(z.responseText, this.el, function(C, B) {
                if (!B) {
                    YDom.addClass(C, f)
                }
            })
        } catch (x) {
            A = []
        }
        w = A.length;
        v = z.argument.triggers;
        y = v.length;
        if (w) {
            this.fetchEvent.fire();
            if (YAHOO.util.ImageLoader) {
                LI.each(A, LI.showAllDeferredImg)
            }
            YDom.removeClass(v, c);
            for (u = 0;
            u < y;
            ++u) {
                YDom.removeClass(v[u].el, c)
            }
        } else {
            this.noMoreResultsEvent.fire();
            this.showNoMoreResultsEl();
            h = true
        }
        for (u = 0;
        u < y;
        ++u) {
            t = v[u];
            t.el.innerHTML = t.html
        }
        this.addedToListEvent.fire();
        j++;
        k = false
    }
    function s(x) {
        var v = x.argument.triggers, w = v.length, t, u;
        this.noMoreResultsEvent.fire();
        this.showNoMoreResultsEl();
        h = true;
        for (u = 0;
        u < w;
        ++u) {
            t = v[u];
            t.el.innerHTML = t.html
        }
    }
    function g(t) {
        var u = YEvent.getTarget(t);
        YEvent.preventDefault(t);
        if (!YDom.hasClass(u, c)&&!k && r) {
            this.triggerClickEvent.fire(u);
            this.fetchMoreResults(u)
        }
    }
    function b() {
        if (!k&&!h && (j !== m) && r) {
            this.triggerScrollEvent.fire();
            this.fetchMoreResults()
        }
        if (!e && (j === m)) {
            this.infiniteScrollStopEvent.fire();
            e = true
        }
    }
    function i(w) {
        var v = "LI_", u = (w.indexOf(v) === 0), t = parseInt(w.replace(v, ""), 10);
        m = (!u || isNaN(t)) ? m : t
    }
    function o(v, u) {
        var t;
        o.superclass.constructor.call(this, u);
        this.attributes = u.attributes || ["data-li-date", "before"];
        this.triggers = u.triggers || ".feed-show-more";
        this.enableInfiniteScroll = u.enableInfiniteScroll || false;
        this.i18n = u.i18n || {};
        t = {};
        t[p] = LI.i18n.get("InfinitePagination-no-more-results");
        YAHOO.lang.augmentObject(this.i18n, t);
        this.el = v;
        this.triggerClickEvent = new YAHOO.util.CustomEvent("triggerClick");
        this.triggerScrollEvent = new YAHOO.util.CustomEvent("triggerScroll");
        this.beforeFetchEvent = new YAHOO.util.CustomEvent("beforeFetch");
        this.fetchEvent = new YAHOO.util.CustomEvent("fetch");
        this.addedToListEvent = new YAHOO.util.CustomEvent("addedToListEvent");
        this.noMoreResultsEvent = new YAHOO.util.CustomEvent("noMoreResults");
        this.infiniteScrollStopEvent = new YAHOO.util.CustomEvent("infiniteScrollStop");
        this.infiniteScrollStopThreshold = u.infiniteScrollStopThreshold || "";
        i(this.infiniteScrollStopThreshold);
        this.setCallback({
            success: n,
            failure: s,
            scope: this
        });
        if (this.enableInfiniteScroll) {
            a = LI.ElementVisible ? new LI.ElementVisible(document.getElementById("feed-show-more"), l, b, this) : null
        }
        YEvent.on(Y$(this.triggers), "click", g, null, this)
    }
    YAHOO.extend(o, LI.ARBase, {
        destroy: function() {
            if (this.enableInfiniteScroll&&!!a) {
                a.destroy();
                a = null
            }
            YEvent.removeListener(Y$(this.triggers), "click", g);
            this.triggerClickEvent.unsubscribeAll();
            this.triggerScrollEvent.unsubscribeAll();
            this.beforeFetchEvent.unsubscribeAll();
            this.fetchEvent.unsubscribeAll();
            this.noMoreResultsEvent.unsubscribeAll();
            this.infiniteScrollStopEvent.unsubscribeAll();
            h = false;
            k = false;
            j = 0
        },
        disableTriggers: function() {
            YDom.addClass(Y$(this.triggers), c);
            r = false
        },
        enableTriggers: function() {
            YDom.removeClass(Y$(this.triggers), c);
            r = true
        },
        fetchMoreResults: function() {
            var z = this.getLastResult(), y = Y$(this.triggers), t = y.length, v = this.attributes, x = {}, A = [], C, B, w, u;
            if (k ||!z) {
                return
            }
            k = true;
            this.beforeFetchEvent.fire();
            for (w = 0;
            w < t;
            ++w) {
                C = y[w];
                A[A.length] = {
                    el: C,
                    html: C.innerHTML
                };
                C.innerHTML = d;
                YDom.addClass(C, c)
            }
            for (w = v.length - 1;
            w >= 0;
            --w) {
                u = v[w];
                x[u.urlParam] = z.getAttribute(u.attribute)
            }
            this.addParams(x);
            B = this.getCallback();
            B.argument = {
                triggers: A
            };
            this.setCallback(B);
            this.asyncRequest()
        },
        getLastResult: function() {
            var x = YDom.getChildren(this.el), u = this.attributes, w, t, v, y;
            for (w = x.length - 1;
            w >= 0;
            --w) {
                t = x[w];
                y = true;
                for (v = u.length - 1;
                v >= 0;
                --v) {
                    if (u[v].notRequired) {
                        continue
                    }
                    if (!t.getAttribute(u[v].attribute)) {
                        y = false;
                        break
                    }
                }
                if (y) {
                    return t
                }
            }
            return null
        },
        hideNoMoreResultsEl: function() {
            var t = this.noMoreResultsEl;
            if (t) {
                t.parentNode.removeChild(t)
            }
        },
        showNoMoreResultsEl: function() {
            var t = this.el;
            if (!this.noMoreResultsEl) {
                this.noMoreResultsEl = LI.domify('<div class="' + q + '">' + this.i18n[p] + "</div>")
            }
            t.parentNode.insertBefore(this.noMoreResultsEl, t.nextSibling)
        },
        getRequestMade: function() {
            return j
        }
    });
    LI.InfinitePagination = o
}());
(function() {
    var d = 86400000;
    function a(e) {
        this.pollFailureEvent.fire(e);
        if (this.stopOnFail) {
            this.stop()
        } else {
            this.start()
        }
    }
    function c(e) {
        if (LI.isFullPage(e.responseText)) {
            a.call(this, e)
        } else {
            this.pollSuccessEvent.fire(e);
            if (!this.hasBeenDestroyed) {
                this.start()
            }
        }
    }
    function b(e) {
        b.superclass.constructor.call(this, e);
        this.interval = e.interval || function(f) {
            return 1000 * Math.pow(1.3, f) + 20000 * (f + 1)
        };
        this.stopOnFail = YAHOO.lang.isUndefined(e.stopOnFail) ? true : e.stopOnFail;
        this.pollSuccessEvent = new YAHOO.util.CustomEvent("pollSuccess");
        this.pollFailureEvent = new YAHOO.util.CustomEvent("pollFailure");
        this.numCalls = 0;
        this.hasBeenDestroyed = false;
        this.setCallback({
            success: c,
            failure: a,
            scope: this
        })
    }
    YAHOO.extend(b, LI.ARBase, {
        destroy: function() {
            this.stop();
            this.pollSuccessEvent.unsubscribeAll();
            this.pollFailureEvent.unsubscribeAll();
            this.hasBeenDestroyed = true
        },
        requestNow: function() {
            this.stop();
            this.req = this.asyncRequest()
        },
        resetInterval: function() {
            this.numCalls = 0
        },
        stop: function() {
            var e = this.timeout;
            if (e) {
                window.clearTimeout(this.timeout);
                this.timeout = null
            }
            if (this.req) {
                YConn.abort(this.req);
                this.req = null
            }
        },
        start: function() {
            var f = this, e = f.interval;
            f.stop();
            if (YAHOO.lang.isFunction(e)) {
                e = e(f.numCalls)
            }
            if (YAHOO.lang.isNumber(e)) {
                e = Math.min(e, d);
                if (f.url) {
                    f.timeout = window.setTimeout(function() {
                        f.req = f.asyncRequest();
                        ++f.numCalls
                    }, e)
                }
            }
        }
    });
    LI.Polling = b
}());
(function() {
    var j, h = "feed-item-insert", u = "text-indent", p = '<div class="real-time-notification"></div>', l = "newResult", v = "newResults", a = "newResultsMax", i = "Relevance", b = "data-li-update-date", f = new Date().getTime(), q = "none", d = "display";
    function e(w) {
        if (w === "A") {
            return 20
        } else {
            if (w === "B") {
                return 100
            } else {
                if (w === "C") {
                    return 1000
                } else {
                    return 20
                }
            }
        }
    }
    function s(z) {
        if (!z) {
            return []
        }
        var w = z.split("&"), A = {}, y, x;
        for (x = w.length - 1;
        x >= 0;
        --x) {
            y = w[x].split("=");
            A[y[0]] = y[1]
        }
        return A
    }
    function g() {
        if (!j) {
            j = {
                monthAgo: LI.i18n.get("RealTimeResults-month-ago"),
                monthsAgo: LI.i18n.get("RealTimeResults-months-ago"),
                dayAgo: LI.i18n.get("RealTimeResults-day-ago"),
                daysAgo: LI.i18n.get("RealTimeResults-days-ago"),
                hourAgo: LI.i18n.get("RealTimeResults-hour-ago"),
                hoursAgo: LI.i18n.get("RealTimeResults-hours-ago"),
                minuteAgo: LI.i18n.get("RealTimeResults-minute-ago"),
                minutesAgo: LI.i18n.get("RealTimeResults-minutes-ago"),
                secondAgo: LI.i18n.get("RealTimeResults-second-ago"),
                secondsAgo: LI.i18n.get("RealTimeResults-seconds-ago")
            }
        }
        return j
    }
    function t(w) {
        this.pendingResults.unshift.apply(this.pendingResults, w)
    }
    function r() {
        var w = (this.incompany) ? YDom.get("feed-content"): this.resultsEl;
        if (!this.notificationEl ||!YDom.inDocument(this.notificationEl)) {
            if (this.isNewRealTimeUX) {
                this.rtNotifyContainer = YDom.get("rt-notify-container");
                this.originalTop = YDom.getStyle(this.rtNotifyContainer, "top");
                this.notificationEl = Y$(".button", this.rtNotifyContainer, true);
                if (!this.hasNotificationElListener) {
                    YEvent.on(this.notificationEl, "click", k, null, this);
                    this.hasNotificationElListener = true
                }
            } else {
                this.notificationEl = w.parentNode.insertBefore(LI.domify(p), w);
                YEvent.on(this.notificationEl, "click", k, null, this)
            }
        }
        return this.notificationEl
    }
    function o(w) {
        return function(x) {
            var y = x.getAttribute(w);
            return (y && (!isNaN(y)))
        }
    }
    function c() {
        var A = {}, w = this.pendingResults, z, y, x;
        x = (w.length) ? this.getDateFromEl(this.pendingResults[0]) : (f);
        z = YDom.getFirstChildBy(this.resultsEl, o(this.dateAttribute));
        y = z ? this.getDateFromEl(z) : (f);
        A[this.dateUrlParam] = Math.max(x, y) + 1;
        if (this.progressivePoll && this.ppSinceDate) {
            A[this.dateUrlParam] = this.ppSinceDate
        }
        this.polling.addParams(A)
    }
    function k(w) {
        if (this.disableFetch) {
            this.notificationClickEvent.fire();
            return
        }
        if (this.fetchUrl) {
            if (this.numResults > this.maxPendingResults) {
                window.location.reload()
            } else {
                this.fetchAndInsertResults()
            }
        } else {
            if (this.pendingResults.length > this.maxPendingResults) {
                window.location.reload()
            } else {
                this.insertPendingResults()
            }
        }
        this.notificationClickEvent.fire()
    }
    function m(x, y) {
        var B = y[0], A, z = YAHOO.lang.trim(B.responseText), w = 0, C;
        if (!LI.isFullPage(z)) {
            if (this.fetchUrl) {
                if (this.progressivePoll) {
                    A = z.split("_");
                    if (A.length === 2) {
                        w = parseInt(A[0], 10);
                        this.ppSinceDate = parseInt(A[1], 10)
                    }
                    this.numResults = isNaN(this.numResults) ? 0 : this.numResults;
                    w += this.numResults
                } else {
                    w = parseInt(z, 10) || 0
                }
                this.updateNotification(w);
                this.numResults = w
            } else {
                C = YDom.getChildren(LI.domify("<ul>" + z + "</ul>"));
                if (C) {
                    w = C.length;
                    if (w) {
                        t.call(this, C);
                        this.resultsFoundEvent.fire(C);
                        this.updateNotification(this.pendingResults.length)
                    }
                }
            }
            if (w) {
                if (this.stopOnResults) {
                    this.polling.stop()
                }
                if (w > this.maxPendingResults) {
                    this.polling.stop()
                }
            }
        }
        this.pollSuccessEvent.fire(w)
    }
    function n(y, x) {
        var z = {
            method: x.method || "POST",
            url: (x.uscpUrl) ? x.uscpUrl: x.url,
            uscpUrl: x.uscpUrl || "",
            interval: x.interval || function(D) {
                return 1000 * Math.pow(1.3, D) + 20000 * (D + 1)
            },
            postData: x.postData || "",
            mode: x.mode || "YUI"
        }, A = new LI.Polling(z), w, C = x.realTimeMaxDisplay || "A";
        this.config = x;
        this.maxPendingResults = e(C);
        this.fetchUrl = x.fetchUrl || "";
        this.uscpFetchUrl = x.uscpFetchUrl || "";
        this.contextId = x.contextId || "";
        this.moduleKey = x.moduleKey || "";
        this.sortType = x.sortType || "";
        this.countUrlParam = x.countUrlParam || "";
        this.defaultDate = x.defaultDate || (new Date().getTime());
        this.disableFetch = x.disableFetch || false;
        this.pendingResults = [];
        this.polling = A;
        this.pollConfig = z;
        this.dateAttribute = x.dateAttribute || "data-li-date";
        this.dateUrlParam = x.dateUrlParam || "since-date";
        this.stopOnResults = YAHOO.lang.isUndefined(x.stopOnResults) ? false : x.stopOnResults;
        this.autoStartMode = x.autoStartMode || "onLoad";
        this.timestampSelector = x.timestampSelector || null;
        this.updateTitle = YAHOO.lang.isUndefined(x.updateTitle) ? true : x.updateTitle;
        this.progressivePoll = YAHOO.lang.isUndefined(x.progressivePoll) ? false : x.progressivePoll;
        this.ppSinceDate = null;
        this.resultsEl = y;
        this.isNewRealTimeUX=!!x.isNewRealTimeUX;
        this.hasNotificationElListener = false;
        this.i18n = x.i18n || {};
        w = {};
        w[l] = LI.i18n.get("RealTimeResults-new-result");
        w[v] = LI.i18n.get("RealTimeResults-new-results");
        w[a] = LI.i18n.get("RealTimeResults-new-results-max");
        YAHOO.lang.augmentObject(this.i18n, w);
        if (this.updateTitle) {
            this.originalTitle = document.title
        }
        A.pollSuccessEvent.subscribe(m, null, this);
        A.beforeRequestEvent.subscribe(c, null, this);
        this.pollSuccessEvent = new YAHOO.util.CustomEvent("pollSuccess");
        this.resultsFoundEvent = new YAHOO.util.CustomEvent("resultsFound");
        this.notificationClickEvent = new YAHOO.util.CustomEvent("notificationClick");
        this.resultsInsertedEvent = new YAHOO.util.CustomEvent("resultsInserted");
        this.incompany = x.incompany || false;
        function B() {
            A.start()
        }
        switch (this.autoStartMode) {
        case"now":
            B();
            break;
        case"onDomReady":
            YEvent.onDOMReady(B);
            break;
        case"onLoad":
            YEvent.on(window, "load", B);
            break
        }
    }
    n.prototype = {
        addParams: function(w) {
            this.polling.addParams(w)
        },
        clearPendingResults: function() {
            this.pendingResults = [];
            this.updateNotification(0)
        },
        destroy: function() {
            this.clearPendingResults();
            this.polling.destroy();
            this.cleanupClickListener();
            this.resultsFoundEvent.unsubscribeAll();
            this.resultsInsertedEvent.unsubscribeAll()
        },
        getHeight: function(y, z) {
            var x = document.createElement("div"), w;
            x.appendChild(LI.domify("<ul>" + y + "</ul>"));
            YDom.setStyle(x, "position", "absolute");
            x = z.appendChild(x);
            w = YDom.getRegion(x).height;
            z.removeChild(x);
            x = null;
            return w
        },
        cleanupClickListener: function() {
            YEvent.removeListener(this.notificationEl, "click", k);
            this.originalTop = this.notificationEl = this.rtNotifyContainer = null
        },
        slideData: function(z) {
            var x, y = YDom.get("feed-wrapper"), A = YDom.get("feed-content"), w = this.getHeight(z, A);
            YDom.setStyle(A, "top", (w*-1) + "px");
            YDom.setStyle(A, "position", "relative");
            YDom.setStyle(y, "overflow", "hidden");
            x = new YAnim(A, {
                top: {
                    to: 0
                }
            }, 0.5);
            x.animate();
            x.onComplete.subscribe(function() {
                YDom.setStyle(A, "position", "");
                YDom.setStyle(y, "overflow", "");
                x = null
            })
        },
        fetchAndInsertResults: function() {
            var D = this.polling.getMode(), w = this.polling.getMethod(), z = this.polling.getPostData(), A = this.polling.getUrl(), x = this.uscpFetchUrl || this.fetchUrl, C = this.contextId, F = this.moduleKey, E = r.call(this), J = new LI.ProcessingOverlay(E, {
                width: 16,
                additionalClassName: this.isNewRealTimeUX ? "new-realtime": ""
            }), I = {
                success: function(L) {
                    var K = L.responseText;
                    if (!LI.isFullPage(K)) {
                        t.call(this, YDom.getChildren(LI.domify("<ul>" + K + "</ul>")));
                        this.insertPendingResults();
                        if (this.isNewRealTimeUX) {
                            this.slideData(K);
                            this.hideNotification(this.rtNotifyContainer)
                        }
                    }
                    YDom.setStyle(E, u, "");
                    J.hide()
                },
                failure: function(K) {
                    YDom.setStyle(E, u, "");
                    J.hide()
                },
                scope: this
            }, B, y, G, H;
            y = A.split("?");
            B = s(y[1]);
            B.cxtId = C;
            B.trkMod = F;
            if (this.countUrlParam) {
                B[this.countUrlParam] = this.numResults
            }
            if (this.progressivePoll && B[this.dateUrlParam]) {
                G = YDom.getFirstChildBy(this.resultsEl, o(this.dateAttribute));
                H = G ? this.getDateFromEl(G) : (new Date().getTime());
                B[this.dateUrlParam] = H + 1;
                this.numResults = 0
            }
            if (B) {
                x = LI.addParams(x, B)
            }
            if (D === "YUI") {
                YConn.asyncRequest(w, x, I, z)
            } else {
                if (D === "LI") {
                    LI.asyncRequest(w, x, I, z)
                }
            }
            if (this.isNewRealTimeUX) {
                YDom.setStyle(E, "visibility", "hidden")
            }
            YDom.setStyle(E, u, "-12345px");
            J.show()
        },
        getDateFromEl: function(w) {
            var x;
            x = parseInt(w.getAttribute(this.dateAttribute), 10);
            if (isNaN(x)) {
                x = this.defaultDate
            }
            return x
        },
        getFetchUrl: function() {
            return this.fetchUrl
        },
        getPendingResults: function() {
            return this.pendingResults
        },
        getUrl: function() {
            return this.polling.getUrl()
        },
        insertPendingResults: function(E) {
            E = E || 0;
            var F = this.pendingResults, D = F.splice(E, F.length - E), w = YDom.getFirstChild(this.resultsEl), C = this.timestampSelector, A, G, x, z, B, y;
            D = LI.addToList(D, w);
            if (this.incompany) {
                LI.NusInjection.removeInjectionContainer()
            }
            this.resultsInsertedEvent.fire(D, this.resultsEl);
            YDom.addClass(w, h);
            if (C) {
                A = YDom.getChildren(this.resultsEl);
                for (z = A.length - 1;
                z >= 0;
                --z) {
                    G = A[z];
                    x = G.getAttribute(this.dateAttribute);
                    B = Y$(C, G, true);
                    if (B) {
                        y = LI.timeFormat(x, g());
                        if (y) {
                            B.innerHTML = y
                        }
                    }
                }
            }
            if (window.COMSCORE) {
                COMSCORE.beacon({
                    c1: 2,
                    c2: 6402952,
                    c3: "",
                    c4: "",
                    c5: "",
                    c6: "",
                    c15: ""
                })
            }
            this.updateNotification(F.length);
            if (this.progressivePoll) {
                this.ppSinceDate = this.getDateFromEl(YDom.getFirstChild(this.resultsEl)) + 1
            }
            if (LI.lazyLoadImages) {
                LI.lazyLoadImages()
            }
            if (this.stopOnResults) {
                this.polling.start()
            }
        },
        requestNow: function() {
            this.polling.requestNow()
        },
        reset: function() {
            this.stop();
            this.clearPendingResults();
            this.start()
        },
        resetInterval: function() {
            this.polling.resetInterval()
        },
        setFetchUrl: function(w) {
            this.fetchUrl = w
        },
        setUrl: function(w) {
            this.polling.setUrl(w)
        },
        start: function() {
            this.polling.start()
        },
        stop: function() {
            this.polling.stop()
        },
        showNotification: function(x) {
            var w;
            if (x) {
                YDom.setStyle(x, "top", this.originalTop);
                w = new YAnim(x, {
                    top: {
                        to: this.isNewRealTimeUX?-3: 0
                    }
                }, 0.5);
                YDom.setStyle(this.notificationEl, "visibility", "visible");
                YDom.setStyle(x, d, "block");
                w.animate()
            }
        },
        hideNotification: function(w) {
            YDom.setStyle(w, d, q);
            YDom.setStyle(w, "top", this.originalTop)
        },
        updateNotification: function(z) {
            var x = r.call(this), D = this.i18n, y, C = LI.i18n.get("RealTimeResults-new-results-max"), w = this.maxPendingResults, B = YAHOO.lang.substitute(C, {
                "0": w
            }), A;
            if (z <= 1) {
                A = D[l]
            } else {
                if ((z > 1) && (z <= w)) {
                    A = D[v]
                } else {
                    if (z > w) {
                        A = D[a]
                    }
                }
            }
            if (this.isNewRealTimeUX) {
                y = this.rtNotifyContainer;
                if (z) {
                    if (this.updateTitle) {
                        if (z <= w) {
                            x.innerHTML = YAHOO.lang.substitute(A, {
                                "0": z
                            });
                            document.title = "(" + z + ") " + this.originalTitle
                        } else {
                            x.innerHTML = YAHOO.lang.substitute(A, {
                                "0": w
                            });
                            document.title = "(" + B + ") " + this.originalTitle
                        }
                    }
                    if (YDom.getStyle(y, d) === q) {
                        this.showNotification(y)
                    }
                } else {
                    this.hideNotification(y);
                    if (this.updateTitle) {
                        document.title = this.originalTitle
                    }
                }
            } else {
                if (z) {
                    if (this.updateTitle) {
                        if (z <= w) {
                            x.innerHTML = YAHOO.lang.substitute(A, {
                                "0": z
                            });
                            document.title = "(" + z + ") " + this.originalTitle
                        } else {
                            x.innerHTML = YAHOO.lang.substitute(A, {
                                "0": w
                            });
                            document.title = "(" + B + ") " + this.originalTitle
                        }
                    }
                    LI.show(x)
                } else {
                    x.parentNode.removeChild(x);
                    if (this.updateTitle) {
                        document.title = this.originalTitle
                    }
                }
            }
        }
    };
    LI.RealTimeResults = n
}());
(function() {
    var b, a = "feature-update-spot";
    function d() {
        if (!b ||!YDom.inDocument(b)) {
            b = YDom.get("my-feed-post");
            if (!b) {
                b = LI.domify('<ul id="my-feed-post" class="chron"></ul>');
                var e = YDom.get("feed-content");
                if (e) {
                    e.insertBefore(b, YDom.getFirstChild(e))
                }
            }
        }
        return b
    }
    function c() {
        var e = YDom.getElementsByClassName("post-home", "div")[0], f;
        if (!e) {
            return null
        }
        f = (e) ? YDom.getElementsByClassName("my-current", "div", e)[0] : null;
        if (!f) {
            f = e.appendChild(LI.domify('<div class="my-current"></div>'))
        }
        return f
    }
    LI.NusInjection = {
        injectEvent: new YAHOO.util.CustomEvent("inject_feed_item"),
        injectFeedItem: function(k) {
            var l = d(), i = YDom.getFirstChild(l), g = YDom.getAncestorByClassName(l, "feed"), j = (g) ? LI.Controls.getControl(g, "Nus"): null, e = (j) ? j.getTypeFilter(): null, f = (e && e !== "ALL" && e !== "SHARE" && e !== "COWORKERS_V2"), h, n, m;
            if (!f) {
                h = LI.domify(k);
                n = h.cloneNode(false);
                if (i) {
                    if (YDom.hasClass(i, a)) {
                        YDom.insertAfter(n, i)
                    } else {
                        l.insertBefore(n, i)
                    }
                } else {
                    l.appendChild(n)
                }
                n.innerHTML = h.innerHTML;
                LI.Controls.parseFragment(n);
                LI.highlight(YDom.getFirstChild(n));
                LI.showAllDeferredImg(n)
            } else {
                if (!i) {
                    LI.NusInjection.removeInjectionContainer()
                }
            }
            this.injectEvent.fire()
        },
        injectUrl: function(f, e) {
            var i = 1;
            var h = e.onInject || null;
            var j = {
                success: function(l) {
                    var k = (l.getResponseHeader) ? l.getResponseHeader["Content-Type"]: null;
                    if (k === null || k.indexOf("text/xml")>-1) {
                        if (i < 7) {
                            pollTimeout = window.setTimeout(g, 1300);
                            i++
                        } else {
                            this.failure()
                        }
                    } else {
                        LI.NusInjection.injectFeedItem(l.responseText);
                        if (h && h.success) {
                            h.success.call()
                        }
                    }
                },
                failure: function(k) {
                    if (h && h.failure) {
                        h.failure.call()
                    }
                },
                timeout: 12000
            };
            function g() {
                var k = YAHOO.util.Connect.asyncRequest("GET", f, j)
            }
            g()
        },
        removeInjectionContainer: function(e) {
            if (!e) {
                e = d()
            }
            if (e) {
                e.parentNode.removeChild(e)
            }
        }
    }
})();
YAHOO.register("LI.NusInjection", LI.NusInjection, {});
(function() {
    var a = window.YDom, c = a.setStyle;
    function b(e, d) {
        if (e) {
            this.contextEl = e
        }
        this.width = (d && d.width) ? d.width : 75;
        this.isFlexHeight = (d && d.isFlexHeight);
        if (d && d.relative) {
            this.relative = true
        } else {
            this.relative = false
        }
        this.fixed=!!(d && d.fixed);
        this.additionalClassName = (d && d.additionalClassName) ? d.additionalClassName : "";
        this.overlay = null
    }
    b.prototype = {
        getContextEl: function() {
            return this.contextEl
        },
        setContextEl: function(d) {
            this.contextEl = d
        },
        resetFixedOverlayPosition: function(f) {
            var e = a.getXY(this.contextEl), d = f ? f: 0;
            if (e && e.length) {
                a.setStyle(this.overlay, "left", e[0] + "px");
                a.setStyle(this.overlay, "top", e[1] - d / 2 + a.getViewportHeight() / 2 + "px")
            }
        },
        hide: function() {
            var d = this.overlay, e;
            if (d) {
                e = d.parentNode;
                if (e) {
                    e.removeChild(d)
                }
            }
        },
        show: function(i) {
            i = i || this.contextEl;
            var f = this.overlay, l = i.offsetHeight, g = i.offsetWidth, j = a.getXY(i), d = this.width, k = (l < d) ? d: l, e = (g < d) ? d: g, h = document.body;
            if (!f) {
                f = LI.domify('<div class="processing-overlay processing-overlay-' + d + " " + this.additionalClassName + '"></div>');
                if (!this.relative) {
                    h.appendChild(f)
                } else {
                    i.appendChild(f)
                }
                this.overlay = f
            }
            if (f.parentNode !== h) {
                if (!this.relative) {
                    h.appendChild(f)
                } else {
                    i.appendChild(f)
                }
            }
            c(f, "height", (this.isFlexHeight) ? "100%" : k + "px");
            c(f, "width", e + "px");
            if (!this.relative) {
                if (!this.fixed) {
                    a.setXY(f, j)
                } else {
                    c(f, "position", "fixed");
                    this.resetFixedOverlayPosition(k)
                }
            } else {
                c(f, "left", "0");
                c(f, "top", "0")
            }
            c(f, "visibility", "visible")
        }
    };
    LI.ProcessingOverlay = b
})();
LI.define("EnableNusEndorsements");
LI.EnableNusEndorsements = function(c, b) {
    b = b || {};
    b = {
        dataURLTemplate: b.dataURLTemplate,
        dialogTitle: b.dialogTitle || "",
        dialogSrc: b.dialogSrc || ""
    };
    var a = function(e) {
        YEvent.preventDefault(e);
        var f = Math.floor((Math.random() * 1000000) + 1), g = LI.addParams(b.dataURLTemplate, {
            randomizeSuggestionsSeed: f
        });
        LI.asyncRequest("GET", g, {
            success: function(i) {
                var h;
                if (i.responseText) {
                    h = i.responseText["suggested_member_skill_endorsements_for_multiple_members"];
                    if (h) {
                        if (h.connections && h.connections.length) {
                            LI.SuggestedEndorsementsData = {
                                data: i,
                                randomizationSeed: f
                            };
                            LI.Dialog().open({
                                content: {
                                    "title": b.dialogTitle,
                                    "url": b.dialogSrc
                                },
                                "width": 545,
                                "type": "task-modeless",
                                "className": "endorse-dialog dialog-v2",
                                "dependencies": LI.EndorseDialogDependencies
                            });
                            return
                        }
                    }
                }
                d()
            },
            custom: {
                error: d,
                exception: d
            }
        })
    };
    var d = function() {
        if (c.href) {
            window.location = c.href
        }
    };
    YEvent.on(c, "click", a)
};
LI.define("WebMailNMP");
LI.WebMailNMP = function(a, b) {
    var d = {
        application: b.application || null
    };
    var o = YDom.get(Y$(".service-providers", a));
    var j = YDom.get(Y$(".service-providers input", a));
    var n = YDom.get(Y$(".service-providers li", a));
    var p = Y$('select[name="otherDomain"]', a)[0];
    var f = Y$('input[name="defaultGmail"]', a)[0];
    var i = Y$('input[name="defaultOther"]', a)[0];
    var h = LI.i18n.getLocale().value;
    var l = function() {
        m(this.value, f, i);
        YEvent.on(j, "click", function() {
            m(this.value, f, i)
        });
        YEvent.on(p, "change", function() {
            var t = p.options[p.selectedIndex].text.replace(/\.com/, "");
            if (t === "googlemail") {
                t = "gmail"
            }
            var u = false;
            var r = null;
            for (var s = 0, q = j.length;
            s < q;
            s++) {
                if (j[s].value === "other") {
                    r = j[s]
                }
                if (j[s].value === t) {
                    j[s].checked = true;
                    u = true
                }
            }
            if (!u) {
                r.checked = true
            }
        })
    };
    var m = function(t, s, r) {
        e();
        for (var q = 0;
        j.length > q;
        q++) {
            if (j[q].checked) {
                switch (j[q].value) {
                case"yahoo":
                    LI.show(Y$(".login-yahoo", a));
                    break;
                case"hotmail":
                    LI.show(Y$(".login-hotmail", a));
                    break;
                case"aol":
                    if (d.application === "registration") {
                        LI.show(Y$(".login-aol", a))
                    } else {
                        LI.show(Y$(".anti-pattern", a));
                        c(j[q].value)
                    }
                    break;
                case"gmail":
                    LI.show(Y$(".anti-pattern", a));
                    if (h === "de_DE") {
                        c("googlemail")
                    } else {
                        k(p, s.value)
                    }
                    break;
                case"other":
                    LI.show(Y$(".anti-pattern", a));
                    k(p, r.value);
                    break
                }
            }
        }
    };
    var e = function() {
        LI.hide(Y$(".login-yahoo", a));
        LI.hide(Y$(".login-hotmail", a));
        LI.hide(Y$(".login-aol", a));
        LI.hide(Y$(".anti-pattern", a))
    };
    var g = function() {
        p.selectedIndex = 0
    };
    var c = function(q) {
        k(p, q + ".com")
    };
    function k(v, u) {
        var t = false;
        for (var r = 0, q = v.options.length;
        r < q;
        r++) {
            var s = v.options[r];
            if (s.text === u) {
                v.selectedIndex = r;
                t = true
            }
        }
        if (!t) {
            if (v != null && v.options != null) {
                v.options[v.options.length] = new Option(u, "", false, true);
                v.selectedIndex = v.options.length - 1
            }
        }
    }
    l()
};
function DropList(d, b) {
    b = b || {};
    b = {
        actionableNode: b.actionableNode || null,
        actionType: b.actionType || "click",
        skipStopPropOnClassName: b.skipStopPropOnClassName || null,
        disableOnClassName: b.disableOnClassName || null
    };
    this.open = function(g) {
        YDom.addClass(this, "open");
        YDom.setStyle(this, "position", "relative")
    };
    this.close = function(g, h) {
        LI.DropListMgr.closeAll();
        YDom.removeClass(h, "open");
        YDom.setStyle(h, "position", "static")
    };
    this.toggle = function(g, h) {
        var i = (YAHOO.lang.isArray(h)) ? h[0]: h;
        if (b.disableOnClassName && YDom.hasClass(d, b.disableOnClassName)) {
            return
        }
        if (YDom.hasClass(i, "open")) {
            YDom.removeClass(i, "open");
            YDom.setStyle(i, "position", "static");
            this.onToggleClose.fire({
                evt: g
            })
        } else {
            LI.DropListMgr.closeAll();
            LI.DropListMgr.add(i);
            YDom.addClass(i, "open");
            YDom.setStyle(i, "position", "relative")
        }
    };
    var a = function(g, h) {
        var i = YEvent.getTarget(g), j = b.skipStopPropOnClassName;
        if (!j ||!YDom.hasClass(i, j)) {
            YEvent.stopPropagation(g)
        }
        this.toggle(g, h)
    };
    this.onToggleClose = new YAHOO.util.CustomEvent("dropListToggleClose");
    var f = (b.actionableNode) ? YDom.get(b.actionableNode): YDom.getElementsByClassName("droplist", "*", d), e = function(g) {
        YEvent.preventDefault(g)
    };
    if (YDom.hasClass(d, "droplist")) {
        f.push(d)
    }
    if (b.actionType && b.actionType == "click") {
        for (var c = 0;
        f.length > c;
        c++) {
            YEvent.on(Y$("a", f[c])[0], "click", e)
        }
        YEvent.on(document, "click", this.close, f);
        if (!b.skipStopPropOnClassName) {
            YEvent.on(f, "click", YEvent.stopPropagation);
            YEvent.on(f, "click", this.toggle, f, this)
        } else {
            YEvent.on(f, "click", a, f, this)
        }
    } else {
        YEvent.on(f, "mouseover", this.open);
        YEvent.on(f, "mouseout", this.close, f)
    }
}
LI.define("DropListMgr");
LI.DropListMgr = (function() {
    var a = [];
    return {
        add: function(b) {
            a.push(b)
        },
        closeAll: function() {
            YDom.removeClass(a, "open");
            YDom.setStyle(a, "position", "static");
            a = []
        }
    }
})();
LI.define("PymkRiver");
LI.PymkRiver = function(a, x) {
    var o = this;
    x = x || {};
    x = {
        riverHasDropList: (x.riverHasDropList === true) ? true: false
    };
    var k = 0;
    var s = false;
    var g = true;
    var j = false;
    var e = [];
    var w = {};
    this.onBeforeRowRemoved = new YAHOO.util.CustomEvent("beforeRowRemoved");
    this.onRowRemoved = new YAHOO.util.CustomEvent("rowRemoved");
    this.onRowAdded = new YAHOO.util.CustomEvent("rowAdded");
    this.onNoMoreRows = new YAHOO.util.CustomEvent("noMoreRows");
    this.onErrorMessageReceived = new YAHOO.util.CustomEvent("errorMessageReceived");
    function n(i) {
        return Y$("li.vcard.extra-row:first", i, true)
    }
    function q(i) {
        return Y$("li.vcard.extra-row", i)
    }
    function v() {
        return Y$("li.vcard:not(.extra-row)", a)
    }
    function y() {
        return Y$("li.vcard", a)
    }
    function p() {
        if (!j) {
            YDom.setStyle(a, "height", YDom.getStyle(a, "height"));
            j = true
        }
    }
    function t() {
        var i = v();
        if (j&&!s && (k == i.length ||!g)) {
            YDom.setStyle(a, "height", "");
            j = false
        }
    }
    function z(A) {
        YEvent.stopEvent(A);
        var i = YEvent.getTarget(A);
        if (!YDom.hasClass(i, "remove-row") ||!i.nodeName == "A") {
            return
        }
        var B = YDom.getAncestorByClassName(i, "vcard");
        l(B)
    }
    function l(B, i) {
        var D = B, A = i || Y$(".remove-row", B)[0].href;
        if (YDom.hasClass(D, "removing-row")) {
            return
        }
        YDom.addClass(D, "removing-row");
        o.onBeforeRowRemoved.fire(D);
        p();
        e.push(A);
        d();
        var C = new YAnim(D, {
            opacity: {
                to: 0
            }
        }, 0.3);
        C.onComplete.subscribe(function() {
            YDom.setStyle(D, "height", D.clientHeight);
            YDom.setStyle(D, "min-height", "0");
            var E = new YAnim(D, {
                height: {
                    to: 0
                }
            }, 0.3);
            E.onComplete.subscribe(function() {
                D.parentNode.removeChild(D);
                o.onRowRemoved.fire(D);
                if (YDom.hasClass(D, "first")) {
                    var F = Y$("li.vcard:first", a, true);
                    if (F) {
                        YDom.addClass(F, "first")
                    }
                }
                b()
            });
            E.animate()
        });
        C.animate()
    }
    function b() {
        var A = v();
        var C = n();
        if (C) {
            var i, D;
            YDom.removeClass(C, "extra-row");
            i = parseInt(YDom.getStyle(C, "height"));
            D = YDom.getStyle(C, "min-height");
            YDom.setStyle(C, "height", "0");
            YDom.setStyle(C, "min-height", "0");
            YDom.setStyle(C, "display", "block");
            var B = new YAnim(C, {
                height: {
                    to: i
                }
            }, 0.5);
            B.onComplete.subscribe(function() {
                YDom.removeClass(C, "extra-row");
                YDom.setStyle(C, "height", "");
                YDom.setStyle(C, "display", "");
                YDom.setStyle(C, "min-height", D);
                t();
                o.onRowAdded.fire(C)
            });
            B.animate()
        } else {
            if (A.length === 0) {
                o.onNoMoreRows.fire(a)
            }
            t()
        }
    }
    function d() {
        if (s) {
            return
        }
        s = true;
        var i = e.shift();
        if (!i) {
            s = false;
            return
        }
        var A = i.split("?");
        if (A.length > 0) {
            i = A[0];
            A = A[1]
        } else {
            A = ""
        }
        YAHOO.util.Connect.initHeader("X-IsAJAXForm", "1");
        YAHOO.util.Connect.asyncRequest("POST", i, {
            success: function(B) {
                var J = B.responseText, D;
                try {
                    D = LI.parseJSON(J);
                    J = D.content || ""
                } catch (I) {
                    J = ""
                }
                var E, L;
                E = document.createElement("div");
                E.innerHTML = J;
                L = q(E);
                empty = Y$("#no-results", E, true);
                var K;
                for (var F = 0, H = L.length;
                F < H;
                F++) {
                    K = L[F];
                    if (!K.id.match(/[0-9]/) ||!w[K.id]) {
                        YDom.removeClass(K, "first");
                        a.appendChild(K);
                        LI.Controls.parseFragment(K);
                        w[K.id] = true
                    }
                }
                var G = q();
                if (G.length === 0) {
                    g = false;
                    o.onNoMoreRows.fire(a);
                    if (empty) {
                        t();
                        o.onErrorMessageReceived.fire(empty)
                    }
                } else {
                    var C = v();
                    if (C.length < k) {
                        b()
                    }
                }
                E = null;
                s = false;
                d()
            },
            failure: function(B) {
                s = false;
                d()
            },
            cache: false
        }, A)
    }
    var m = y();
    k = v().length;
    var h, c;
    if (!x.riverHasDropList) {
        YEvent.addListener(a, "click", function(A) {
            var i = YEvent.getTarget(A);
            if (YDom.hasClass(i, "remove-row") && i.nodeName == "A") {
                YEvent.stopEvent(A);
                z(A)
            }
        })
    }
    for (var r = 0, u = m.length;
    r < u;
    r++) {
        h = m[r];
        if (h.id.match(/[0-9]/)) {
            w[h.id] = true
        }
        if (x.riverHasDropList) {
            c = LI.Controls.getControl(Y$(".remove-list", m[r], true).id, "DropList");
            c.onToggleClose.subscribe(function(i, B) {
                var A = B[0].evt, C = YEvent.getTarget(A);
                if (YDom.hasClass(C, "remove-row") && C.nodeName == "A") {
                    YEvent.stopEvent(A);
                    z(A)
                }
            })
        }
    }
    o.hideRow = l;
    (function f() {
        if (LI.PymkRiverExperiment) {
            return
        }
        LI.PymkRiverExperiment = true;
        var A = YDom.get("pymk"), E = YDom.hasClass, C = 0, i = "ontouchstart" in document.documentElement ? "touchend": "click";
        if (E(A, "pymk-new-design")) {
            var G = E(A, "refresh-to-full"), H = E(A, "click-to-profile"), D = E(A, "click-to-connect"), B = E(A, "click-to-full-pymk"), I = E(A, "ignore-to-pymk"), F = Y$("#pymk .header")[0];
            YEvent.on(F, i, function() {
                window.location.href = YDom.getAttribute(F, "data-url")
            });
            if (I) {
                YEvent.addListener(a, i, function(K) {
                    var J = YEvent.getTarget(K), L = J.nodeName.toLowerCase();
                    if (E(J, "remove-row") && L === "a") {
                        if (++C >= 2) {
                            window.location.href = YDom.getAttribute(F, "data-url-item")
                        }
                    }
                })
            }
            if (H || D || B) {
                YEvent.addListener(a, i, function(M) {
                    var L = YEvent.getTarget(M), N = L.nodeName.toLowerCase(), J = "nmp_pymk_click_result", K;
                    if (E(L, "vcard") && N === "li") {
                        if (B) {
                            window.location.href = YDom.getAttribute(F, "data-url-item-click")
                        } else {
                            if (H) {
                                K = YDom.getAttribute(YDom.getChildren(L)[0], "href");
                                K = K.replace("nmp_pymk_photo", J);
                                window.location.href = K
                            } else {
                                if (D) {
                                    K = YDom.getAttribute(YDom.getFirstChild(YDom.getChildren(L)[2]), "href");
                                    K = K.replace("nmp_pymk_connect", J);
                                    window.location.href = K
                                }
                            }
                        }
                    }
                })
            }
        }
    })()
};
(function() {
    var e = "hide", c = 2500;
    function d(g) {
        var f = parseInt(YDom.getStyle(g, "margin-bottom")), h = new YAnim(g, {
            marginBottom: {
                to: 0
            }
        }, - f / c);
        h.animate()
    }
    function b(g) {
        var f = g.offsetHeight + 10, h = new YAnim(g, {
            marginBottom: {
                to: - f
            }
        }, f / c);
        h.onComplete.subscribe(function() {
            h = null;
            if (!YDom.hasClass(g, e)) {
                YDom.addClass(g, e)
            }
        });
        h.animate()
    }
    function a(g, f) {
        f = f || {};
        this.el = YDom.get(g);
        YEvent.on(g, "click", this._onClick, this, true);
        if (f.lazyEvent) {
            this._onClick(f.lazyEvent)
        }
    }
    a.prototype = {
        _onClick: function(h) {
            var g = YEvent.getTarget(h), f = g;
            if (f.tagName != "A") {
                f = YDom.getAncestorByTagName(f, "A")
            }
            if (!f) {
                return
            }
            if (YDom.hasClass(f, "expand")) {
                YEvent.preventDefault(h);
                this.expandAggregatedItems(f)
            } else {
                if (YDom.hasClass(f, "nest-expand")) {
                    YEvent.preventDefault(h);
                    if (!YDom.hasClass(f, "nest-expand-loading")) {
                        this.expandNestedItems(f)
                    }
                } else {
                    if (YDom.hasClass(f, "nest-collapse")) {
                        YEvent.preventDefault(h);
                        this.collapseNestedItems(f)
                    } else {
                        if (YDom.hasClass(f, "split")) {
                            YEvent.preventDefault(h);
                            this.splitAggregatedItems(f)
                        } else {
                            if (YDom.hasClass(f, "collapse")) {
                                YEvent.preventDefault(h);
                                this.collapseAggregatedItems(f)
                            }
                        }
                    }
                }
            }
        },
        collapseAggregatedItems: function(f) {
            var g = YDom.getAncestorByClassName(f, "feed-item");
            while (true) {
                if (!YDom.hasClass(g, "feed-item-agg")) {
                    break
                }
                YDom.addClass(g, "nus-hidden");
                g = g.previousSibling
            }
            YDom.removeClass(g, "feed-item-expanded")
        },
        collapseNestedItems: function(g) {
            var f = YDom.getAncestorByClassName(g, "feed-body"), h = YDom.getChildrenBy(f, function(i) {
                return YDom.hasClass(i, "chron")
            })[0];
            b(h);
            YDom.replaceClass(g, "nest-collapse", "nest-expand");
            if (YDom.hasClass(g.parentNode, "aggregation")) {
                g.setAttribute("data-li-collapse-text", g.innerHTML);
                g.innerHTML = g.getAttribute("data-li-expand-text")
            }
        },
        expandAggregatedItems: function(f) {
            if (this.fetchAggregatedItems(f, this.expandAggregatedItemsOnFetch)) {
                return
            }
            var g = YDom.getAncestorByClassName(f, "feed-item");
            YDom.addClass(g, "feed-item-expanded");
            while (true) {
                g = g.nextSibling;
                if (!YDom.hasClass(g, "feed-item-agg")) {
                    break
                }
                YDom.removeClass(g, "nus-hidden")
            }
        },
        expandAggregatedItemsOnFetch: function(j, i) {
            var h = YDom.getElementsByClassName("expand", "a", j)[0], f = YDom.getElementsByClassName("n", "span", h)[0].innerHTML, g = i[i.length - 1];
            YDom.addClass(j, "feed-item-expanded");
            if (g) {
                g.appendChild(LI.domify('<p class="aggregation"><a class="collapse" href="#">' + YAHOO.lang.substitute((i.length > 1) ? LI.i18n.get("Nus-collapse-updates") : LI.i18n.get("Nus-collapse-update"), {
                    "0": i.length,
                    "1": f
                }) + "</a></p>"))
            }
        },
        fetchAggregatedItems: function(h, f) {
            var g = h.getAttribute("data-li-agg-url");
            if (!g || g == "#") {
                return false
            }
            h.setAttribute("data-li-agg-url", "#");
            var i = {
                success: function(n) {
                    var m = YDom.getAncestorByClassName(h, "feed-item"), l = YDom.getNextSibling(m) || m.parentNode, j;
                    try {
                        j = LI.addToList(n.responseText, l, function(o) {
                            YDom.addClass(o, "feed-item-agg")
                        })
                    } catch (k) {
                        j = []
                    }
                    LI.highlight(m);
                    LI.each(j, function(o) {
                        LI.highlight(o);
                        LI.showAllDeferredImg(o)
                    });
                    if (f) {
                        f.apply(this, [m, j])
                    }
                },
                failure: function(j) {},
                scope: this
            };
            YAHOO.util.Connect.asyncRequest("GET", g, i);
            return true
        },
        expandNestedItems: function(i) {
            var g = i.getAttribute("data-li-agg-url"), f = YDom.getAncestorByClassName(i, "feed-body"), j = i.getAttribute("data-li-bf-enabled"), h = "chron", l;
            if (j) {
                h += " backfill"
            }
            if (!g || g == "#") {
                l = YDom.getChildrenBy(f, function(m) {
                    return YDom.hasClass(m, "chron")
                })[0];
                if (l) {
                    YDom.removeClass(l, e)
                }
                d(l);
                YDom.replaceClass(i, "nest-expand", "nest-collapse");
                if (YDom.hasClass(i.parentNode, "aggregation")) {
                    i.innerHTML = i.getAttribute("data-li-collapse-text")
                }
            } else {
                i.setAttribute("data-li-agg-url", "#");
                YDom.addClass(i, "nest-expand-loading");
                var k = {
                    success: function(r) {
                        var s = f.appendChild(LI.domify('<div style="position: absolute; top: 0; left: 0; width: 100%; visibility: hidden;"></div>')), q, m, p, n;
                        l = LI.domify('<ol class="' + h + '">' + r.responseText + "</ol>");
                        s.appendChild(l);
                        m = l.offsetHeight;
                        YDom.setStyle(l, "margin-bottom", ( - m - 10) + "px");
                        if (YDom.hasClass(i.parentNode, "backfill")) {
                            q = YDom.getElementsByClassName("feed-item", "li", l)[0];
                            if (q) {
                                l.removeChild(q)
                            }
                        }
                        f.appendChild(l);
                        f.removeChild(s);
                        LI.showAllDeferredImg(l);
                        LI.Controls.parseFragment(l);
                        d(l);
                        YDom.replaceClass(i, "nest-expand", "nest-collapse");
                        YDom.removeClass(i, "nest-expand-loading");
                        if (YDom.hasClass(i.parentNode, "aggregation")) {
                            n = YDom.getElementsByClassName("n", "span", i)[0].innerHTML, p = YDom.getChildren(l).length;
                            i.setAttribute("data-li-expand-text", i.innerHTML);
                            i.innerHTML = YAHOO.lang.substitute((p > 1) ? LI.i18n.get("Nus-collapse-updates") : LI.i18n.get("Nus-collapse-update"), {
                                "0": p,
                                "1": n
                            });
                            if (YDom.hasClass(i.parentNode, "backfill")) {
                                i.innerHTML = YAHOO.lang.substitute(LI.i18n.get("Nus-collapse-from"), {
                                    "0": n
                                })
                            }
                        }
                    },
                    failure: function(m) {
                        YDom.removeClass(i, "nest-expand-loading")
                    },
                    scope: this
                };
                YAHOO.util.Connect.asyncRequest("GET", g, k)
            }
        },
        splitAggregatedItems: function(f) {
            this.fetchAggregatedItems(f, this.splitAggregatedItemsOnFetch)
        },
        splitAggregatedItemsOnFetch: function(g, f) {
            g.parentNode.removeChild(g);
            YDom.batch(f, function(h) {
                var j = YDom.getElementsByClassName("comments", "div", h)[0];
                YDom.removeClass(j, e);
                var i = YDom.getElementsByClassName("form", "div", j)[0];
                YDom.addClass(i, "mini")
            })
        }
    };
    LI.NusAggregation = a
})();
YAHOO.register("LI.NusAggregation", LI.NusAggregation, {});
(function() {
    var m = "data-li-config", c = "data-li-num-liked", d = "data-li-summary-url", u = ".feed-like .like", x = ".feed-like .unlike", h = "feed-like", n = "feed-item", q = "show-like", e = "rollup-update-detail", f = "social-gestures-likes", o = "zero-count", s = "liker", r = "count-container", b = "data-li-permLink", w = "data-li-article-like-url", j = "data-li-article-unlike-url", k = "data-li-pulse-like-url", g = "data-li-pulse-unlike-url", v = "data-li-article-id", l = "data-li-megaphoneFlag", a = "data-li-lite-url", t = "pre-rendered", p = "likers";
    function i(z, y) {
        y = y || {};
        this.el = YDom.get(z);
        this.cache = {};
        this.isKatyEnabled = y.isFeedKatificationEnabled;
        this.isDust=!!y.isDust;
        this.dustAllLikersTemplate = y.dustAllLikersTemplate || "tl/shared/uscp/feed/social_activity/likes/_detail";
        this.dustRecentLikersTemplate = y.dustRecentLikersTemplate || "tl/shared/uscp/feed/social_activity/likes/_recent";
        YEvent.on(z, "click", this._onClick, this, true);
        if (y.lazyEvent) {
            this._onClick(y.lazyEvent)
        }
    }
    i.prototype = {
        _onClick: function(y) {
            this.likeOrUnlike(y);
            this.likeOrUnlikeNewsUpdate(y);
            this.showLikers(y);
            this.hideLikers(y)
        },
        hideLikers: function(B) {
            var A = YEvent.getTarget(B), z, C, y;
            if (!A ||!YDom.hasClass(A, "show-less")) {
                return
            }
            YEvent.preventDefault(B);
            z = A.parentNode;
            C = z.id;
            if (!C ||!this.cache[C]) {
                return
            }
            y = this.cache[C];
            this.cache[C] = z.innerHTML;
            z.innerHTML = y
        },
        updateLikeCount: function(z, A, y, H, G, D) {
            var E = Y$(x, H, true), B = y && y.parentNode, C, F;
            if (D) {
                if (A) {
                    if (y) {
                        B.replaceChild(A, y)
                    } else {
                        G.insertBefore(A, G.firstChild)
                    }
                } else {
                    if (y) {
                        B.removeChild(y)
                    }
                }
            } else {
                if (this.isDust) {
                    if (!z && parseInt(E.getAttribute(c), 10) === 1) {
                        B.removeChild(y);
                        LI.Events.fire("layout:updated")
                    } else {
                        C = E.getAttribute(d);
                        F = {
                            success: function(I) {
                                var J = YAHOO.lang.JSON.parse(I.responseText).content;
                                dust.render(this.dustRecentLikersTemplate, J, function(L, K) {
                                    var M = LI.domify(YAHOO.lang.trim(K));
                                    if (L) {
                                        return
                                    }
                                    if (y) {
                                        B.replaceChild(M, y)
                                    } else {
                                        G.insertBefore(M, G.firstChild)
                                    }
                                });
                                LI.Events.fire("layout:updated")
                            },
                            failure: function(I) {},
                            scope: this
                        };
                        YAHOO.util.Connect.asyncRequest("GET", C, F)
                    }
                }
            }
            if (z) {
                this.incrementLike(H)
            } else {
                this.decrementLike(H)
            }
        },
        incrementLike: function(B) {
            var z = Y$(".feed-like .like span", B, true), y = Y$(".feed-like .unlike span", B, true), A, D, C;
            if (z && y) {
                D = z.parentNode;
                C = y.parentNode;
                A = parseInt(D.getAttribute(c), 10);
                y.innerHTML = z.innerHTML = LI.numberFormat(++A);
                D.setAttribute(c, A);
                C.setAttribute(c, A)
            } else {
                A = 1;
                z = Y$(u, B, true);
                y = Y$(x, B, true);
                if (z && y) {
                    y.innerHTML = z.innerHTML = LI.i18n.get("NUS_LIKING_LIKE_LINK", 1);
                    z.setAttribute(c, A);
                    y.setAttribute(c, A)
                }
            }
        },
        decrementLike: function(B) {
            var z = Y$(".feed-like .like span", B, true), y = Y$(".feed-like .unlike span", B, true), A, D, C;
            if (z && y) {
                D = z.parentNode;
                C = y.parentNode;
                A = parseInt(D.getAttribute(c), 10);
                if (A === 1) {
                    z = Y$(u, B, true);
                    y = Y$(x, B, true);
                    y.innerHTML = z.innerHTML = LI.i18n.get("NUS_LIKING_LIKE", 0);
                    z.setAttribute(c, 0);
                    y.setAttribute(c, 0)
                } else {
                    y.innerHTML = z.innerHTML = LI.numberFormat(--A);
                    D.setAttribute(c, A);
                    C.setAttribute(c, A)
                }
            }
        },
        likeOrUnlike: function(B) {
            var C = YEvent.getTarget(B), D = C, z, H, y, E, A, F;
            if (D.tagName !== "A") {
                D = YDom.getAncestorByTagName(D, "A")
            }
            if (!D) {
                return
            }
            y = D.getAttribute("data-li-unlike-url");
            F = Boolean(parseInt(D.getAttribute(a), 2));
            z=!y;
            y = y || D.getAttribute("data-li-like-url");
            A = Boolean(parseInt(D.getAttribute(l), 2));
            if (!y || A === true) {
                return
            }
            YEvent.preventDefault(B);
            H = D.parentNode;
            E = YDom.getAncestorByClassName(D, "feed-uscp") ? true : false;
            YDom.addClass(H, "loading");
            var G = {
                success: function(K) {
                    var P, L, R, Y, S, U, I, X, M, V, J, O, T = E ? false: true, Q = YAHOO.env.ua.ie, W = (Q && Q < 10) ? K.responseXML.documentElement: K.responseXML;
                    if (W) {
                        G.failure(K)
                    } else {
                        if (F) {
                            var N = YAHOO.lang.JSON.parse(K.responseText);
                            if (N.content && N.content.toLowerCase() !== "success") {
                                return
                            }
                        }
                        YDom.removeClass(H, "loading");
                        LI.toggleClass(D.parentNode, "show-like");
                        Y = YDom.getAncestorByClassName(D, e) || YDom.getAncestorByClassName(D, n);
                        if (!Y) {
                            return
                        }
                        X = Y$("div.comments > ul", Y, true);
                        if (!X) {
                            R = Y$(".feed-body", Y, true);
                            this.createInsertDiscussionList(R);
                            X = Y$("div.comments > ul", Y, true)
                        }
                        if (F&&!A) {
                            P = Y$("li.likers", X, true);
                            V = Y$("li.pre-rendered", X, true);
                            if (z && V) {
                                YDom.replaceClass(V, t, p);
                                if (P) {
                                    YDom.replaceClass(P, p, t)
                                }
                            } else {
                                if (P) {
                                    YDom.replaceClass(P, p, t);
                                    if (V) {
                                        YDom.replaceClass(V, t, p)
                                    }
                                }
                            }
                            this.updateLikeCount(z, false, false, Y, false, false)
                        } else {
                            S = (K.responseText) ? LI.domify(K.responseText) : null;
                            P = Y$("li.likers", X, true);
                            if (this.isKatyEnabled) {
                                if (E) {
                                    J = YDom.getAncestorByTagName(D, "LI");
                                    O = (J) ? J.getAttribute("data-li-update-html") : null;
                                    if (O && O.toLowerCase() === "true") {
                                        S = YAHOO.lang.JSON.parse(K.responseText);
                                        S = (S.content && S.status && S.status.toLowerCase() === "ok") ? LI.domify(S.content) : null;
                                        T = true
                                    }
                                }
                                this.updateLikeCount(z, S, P, Y, X, T)
                            } else {
                                if (S) {
                                    if (P) {
                                        P.parentNode.replaceChild(S, P)
                                    } else {
                                        X.insertBefore(S, X.firstChild)
                                    }
                                } else {
                                    if (P) {
                                        P.parentNode.removeChild(P)
                                    }
                                    LI.Events.fire("layout:updated")
                                }
                            }
                        }
                        if (X) {
                            M = X.parentNode;
                            LI.show(M)
                        }
                        I = LI.Controls.getControl(this.el, "NusDiscussion");
                        if (!I) {
                            return
                        }
                        U = YDom.getElementsByClassName("form", "div", M)[0];
                        if (!U) {
                            return
                        }
                        if (!YDom.getChildren(U).length) {
                            L = YAHOO.lang.JSON.parse(M.getAttribute(m));
                            I.createCommentForm(L, U)
                        }
                    }
                },
                failure: function(I) {
                    window.location = D.href
                },
                scope: this
            };
            if (E || F) {
                YAHOO.util.Connect.initHeader("X-IsAJAXForm", "1")
            }
            YAHOO.util.Connect.asyncRequest("GET", y, G)
        },
        likeOrUnlikeNewsUpdate: function(H) {
            var I = YEvent.getTarget(H), K = I, L, y, E, B, N, G, J, D, A, C, F, z;
            if (K.tagName !== "A") {
                K = YDom.getAncestorByTagName(K, "A")
            }
            if (!K) {
                return
            }
            F = Boolean(parseInt(K.getAttribute(l), 2));
            if (F) {
                C = K.getAttribute(b)
            }
            L = YDom.getAncestorByTagName(K, "LI");
            if (YDom.hasClass(L, h)) {
                L = K.parentNode;
                if (YDom.hasClass(L, q)) {
                    y = (F === true) ? K.getAttribute(k) : K.getAttribute(w);
                    E = true
                } else {
                    y = (F === true) ? K.getAttribute(g) : K.getAttribute(j);
                    E = false
                }
                if (!y) {
                    return
                }
                J = E ? "like" : "unlike";
                D = (LI.readCookie("JSESSIONID") || "").replace(/"/g, "");
                A = K.getAttribute(v);
                YEvent.preventDefault(H);
                if (!YDom.hasClass(L, "loading")) {
                    YDom.addClass(L, "loading");
                    var M = {
                        success: function(Q) {
                            var T, P, O, S, R = (YAHOO.env.ua.ie) ? Q.responseXML.documentElement: Q.responseXML;
                            if (R) {
                                M.failure(Q)
                            } else {
                                YDom.removeClass(L, "loading");
                                LI.toggleClass(L, q);
                                P = YDom.getAncestorByClassName(K, e) || YDom.getAncestorByClassName(K, n);
                                if (!P) {
                                    return
                                }
                                O = T = S = null;
                                if (this.isKatyEnabled) {
                                    this.updateLikeCount(E, O, T, P, S, true)
                                }
                            }
                        },
                        failure: function(O) {
                            window.location = K.href
                        },
                        custom: {
                            error: function(O) {
                                window.location = K.href
                            }
                        },
                        scope: this
                    };
                    z = "submit=" + J + "&csrfToken=" + D + "&articleId=" + A;
                    if (F === true) {
                        z += "&permLink=" + C
                    }
                    LI.asyncRequest("POST", y, M, z)
                }
            } else {
                if (YDom.hasClass(L, f)) {
                    if (!YDom.hasClass(L, s)) {
                        y = K.getAttribute(w);
                        N = YDom.getNextSibling(K);
                        E = true
                    } else {
                        y = K.getAttribute(j);
                        N = YDom.getPreviousSibling(K);
                        E = false
                    }
                    if (!y) {
                        return
                    }
                    B = YDom.getFirstChild(K);
                    G = YDom.getFirstChild(N);
                    if (!YDom.hasClass(B, r) ||!YDom.hasClass(G, r)) {
                        return
                    }
                    J = E ? "like" : "unlike";
                    D = (LI.readCookie("JSESSIONID") || "").replace(/"/g, "");
                    A = K.getAttribute(v);
                    YEvent.preventDefault(H);
                    if (!YDom.hasClass(B, "loading")) {
                        YDom.addClass(L, "is-loading");
                        YDom.addClass(B, "loading");
                        var M = {
                            success: function(Q) {
                                var O, P, R = (YAHOO.env.ua.ie) ? Q.responseXML.documentElement: Q.responseXML;
                                if (R) {
                                    M.failure(Q)
                                } else {
                                    O = parseInt(K.getAttribute(c), 10);
                                    if (E) {
                                        YDom.addClass(L, s);
                                        P = LI.numberFormat(++O)
                                    } else {
                                        YDom.removeClass(L, s);
                                        P = LI.numberFormat(--O)
                                    }
                                    K.setAttribute(c, P);
                                    N.setAttribute(c, P);
                                    B.innerHTML = P;
                                    G.innerHTML = P;
                                    if (parseInt(P, 10) === 0) {
                                        YDom.addClass(L, o)
                                    } else {
                                        YDom.removeClass(L, o)
                                    }
                                    YDom.removeClass(L, "is-loading");
                                    YDom.removeClass(B, "loading")
                                }
                            },
                            failure: function(O) {
                                window.location = K.href
                            },
                            custom: {
                                error: function(O) {
                                    window.location = K.href
                                }
                            },
                            scope: this
                        };
                        LI.asyncRequest("POST", y, M, "submit=" + J + "&csrfToken=" + D + "&articleId=" + A)
                    }
                }
            }
        },
        showLikers: function(C) {
            var D = YEvent.getTarget(C), E = D, F = false, y, A, G, z, H, B;
            if (E.tagName !== "A") {
                E = YDom.getAncestorByTagName(E, "A")
            }
            if (!E ||!YDom.hasClass(E, "other-likers")) {
                return
            }
            YEvent.preventDefault(C);
            A = E.parentNode;
            z = YDom.generateId(A);
            if (!this.cache[z]) {
                G = A.parentNode;
                y = G.getAttribute("data-li-likers-url");
                if (YDom.hasClass(G, "uscp-likers")) {
                    F = true
                }
                H = {
                    success: function(I) {
                        var J;
                        this.cache[z] = A.innerHTML;
                        if (F) {
                            J = YAHOO.lang.JSON.parse(I.responseText).content;
                            if (this.isDust) {
                                dust.render(this.dustAllLikersTemplate, J, function(L, K) {
                                    if (!L) {
                                        A.innerHTML = K
                                    }
                                })
                            } else {
                                A.innerHTML = J
                            }
                        } else {
                            A.innerHTML = I.responseText
                        }
                    },
                    failure: function(I) {},
                    scope: this
                };
                if (F) {
                    YAHOO.util.Connect.initHeader("X-IsAJAXForm", "1")
                }
                YAHOO.util.Connect.asyncRequest("GET", y, H)
            } else {
                B = this.cache[z];
                this.cache[z] = A.innerHTML;
                A.innerHTML = B
            }
        },
        createInsertDiscussionList: function(y) {
            var A, z = null;
            if (y) {
                A = document.createElement("div");
                A.appendChild(document.createElement("ul"));
                A.setAttribute("class", "comments");
                z = y.appendChild(A)
            }
            return z
        }
    };
    LI.NusLiking = i
}());
YAHOO.register("LI.NusLiking", LI.NusLiking, {});
LI.define("NusHiding");
LI.NusHiding = function(b, a) {
    var a = {
        showHiddenLink: a.showHiddenLink || null,
        hideHiddenLink: a.hideHiddenLink || null,
        countLink: "nus-hidden-count-link",
        count: "nus-hidden-count",
        lazyEvent: a.lazyEvent || null,
        breakoutHomeUrl: a.breakoutHomeUrl || false,
        breakoutPage: Boolean(parseInt(a.breakoutPage, 2)) || false
    };
    YEvent.on(b, "click", this.hideMember, a);
    YEvent.on(b, "click", this.refreshFeed, a);
    if (a.lazyEvent) {
        this.hideMember(a.lazyEvent, a);
        this.refreshFeed(a.lazyEvent, a)
    }
};
LI.NusHiding.prototype = {
    hideMember: function(h, c) {
        var f = YEvent.getTarget(h), b = c.breakoutPage, g = c.breakoutHomeUrl;
        if (!YDom.hasClass(f, "nus-hide-member")) {
            return
        }
        function i(k) {
            if (!k.responseXML || k.responseXML.getElementsByTagName("responseInfo")[0].firstChild.nodeValue === "FAILURE") {
                e();
                return
            }
            var m = YDom.getAncestorByClassName(f, "feed-item");
            if (!m.getAttribute("data-config") || m.getAttribute("data-config") === null) {
                return
            }
            var p = YJson.parse(m.getAttribute("data-config"));
            var q = YDom.getElementsByClassName("nus-mid-" + p.mid, "li", "feed-content");
            YDom.addClass(q, "nus-hidden");
            YDom.addClass(m, "nus-hidden-undo");
            YDom.removeClass(m, "nus-hidden");
            var t = k.responseXML.getElementsByTagName("responseMsg")[0].firstChild.nodeValue;
            var l = YJson.parse(k.responseXML.getElementsByTagName("jsonPayLoad")[0].firstChild.nodeValue);
            var r = {
                undoUrl: l.undoUrl,
                undoTrackUrl: l.undoTrackUrl ? l.undoTrackUrl: "",
                undoText: LI.i18n.get("NUS_HIDING_UNDO"),
                undoClose: LI.i18n.get("NUS_HIDING_CLOSE"),
                undoMessage: LI.i18n.get("NUS_HIDING_YOU_WILL_NO_LONGER_RECEIVE_UPDATES_FROM_THIS_MEMBER")
            };
            var u = YAHOO.lang.substitute(['<div class="nus-undo">', '<p>{undoMsg} &middot; <a href="{link}" data-li-track-url="{trackLink}" class="nus-undo-link">{text}</a></p>', '<span class="dismiss">{close}</span>', "</div>"].join(""), {
                undoMsg: r.undoMessage,
                link: r.undoUrl,
                trackLink: r.undoTrackUrl,
                text: r.undoText,
                close: r.undoClose
            });
            var v = LI.domify(u);
            m.appendChild(v);
            YEvent.on(Y$("a.nus-undo-link", m)[0], "click", LI.NusHiding.prototype.undoHideMember, [m, q, v, c]);
            YEvent.on(Y$("span.dismiss", m)[0], "click", function() {
                LI.fade(m);
                if (b && g) {
                    window.location = g
                }
            });
            var n = YDom.get(c.count);
            var j = YDom.get(c.countLink);
            if (n) {
                var s = (n.innerHTML) ? parseInt(n.innerHTML, 10): 0;
                if (!LI.NusHiding.prototype.isShowingHiddenUpdates()) {
                    if (s) {
                        var s = s + q.length
                    } else {
                        var s = q.length
                    }
                    if (s === 0) {
                        LI.NusHiding.prototype.resetMasterLink()
                    } else {
                        YDom.replaceClass(YDom.getAncestorByTagName(j, "li"), "hide", "show");
                        n.innerHTML = s
                    }
                }
            }
        }
        function e() {
            var j = f.href.replace("format=ajax", "format=page");
            window.location = j
        }
        YEvent.preventDefault(h);
        var d = {
            success: i,
            failure: e,
            timeout: 15000
        };
        var a = f.getAttribute("data-url");
        YAHOO.util.Connect.asyncRequest("GET", a, d, null)
    },
    undoHideMember: function(b, c) {
        var e = YEvent.getTarget(b);
        if (!YDom.hasClass(e, "nus-undo-link")) {
            return
        }
        function f(h) {
            if (!h.responseXML || h.responseXML.getElementsByTagName("responseInfo")[0].firstChild.nodeValue === "FAILURE") {
                a();
                return
            }
            var l = c[0];
            var p = c[1];
            var m = c[2];
            var j = c[3];
            YDom.removeClass(l, "nus-hidden-undo");
            YDom.removeClass(p, "nus-hidden");
            l.removeChild(m);
            for (var k = 0;
            k < p.length;
            k++) {
                LI.highlight(p[k])
            }
            var n = YDom.get(j.count);
            var g = YDom.get(j.countLink);
            if (n) {
                var q = (n.innerHTML) ? parseInt(n.innerHTML, 10): 0;
                if (LI.NusHiding.prototype.isShowingHiddenUpdates() === false) {
                    if (q) {
                        var q = q - p.length
                    } else {
                        var q = p.length
                    }
                    if (q === 0) {
                        LI.NusHiding.prototype.resetMasterLink()
                    } else {
                        YDom.replaceClass(YDom.getAncestorByTagName(g, "li"), "hide", "show");
                        n.innerHTML = q
                    }
                }
            }
        }
        function a() {
            var g = e.href.replace("format=ajax", "format=page");
            window.location = g
        }
        YEvent.preventDefault(b);
        var d = {
            success: f,
            failure: a,
            timeout: 15000
        };
        YAHOO.util.Connect.asyncRequest("GET", e.href, d, null)
    },
    refreshFeed: function(b, d) {
        var f = YEvent.getTarget(b), c;
        if (!YDom.hasClass(f, "nus-refresh")) {
            return
        }
        function g(m) {
            if (!m.responseText) {
                a();
                return
            }
            var p = YDom.get("feed-content");
            p.innerHTML = m.responseText;
            LI.Controls.parseFragment(p);
            window.networkUpdatesShowMore.init();
            var h = Y$(".nus-now-showing", "feed-content");
            for (var j = 0;
            j < h.length;
            j++) {
                LI.highlight(h[j], null, null, 10)
            }
            if (typeof miniProfile !== undefined) {
                window.miniProfile.init(p)
            }
            var l = YDom.get(d.countLink);
            var k = YDom.get("nus-hidden-count-master");
            var n = (k.innerHTML) ? parseInt(k.innerHTML, 10): 0;
            if (LI.NusHiding.prototype.isShowingHiddenUpdates()) {
                l.href = d.showHiddenLink;
                if (YDom.hasClass(f, "master")) {
                    l.innerHTML = YAHOO.lang.substitute(LI.i18n.get("NUS_HIDING_IS_HIDING_MSG"), {
                        0: n
                    });
                    YDom.replaceClass(l, "is-showing", "is-hiding")
                }
            } else {
                l.href = d.showHiddenLink;
                l.innerHTML = YAHOO.lang.substitute(LI.i18n.get("NUS_HIDING_IS_SHOWING_MSG"), {
                    0: ""
                });
                YDom.replaceClass(l, "is-hiding", "is-showing")
            }
            if (n === 0) {
                LI.NusHiding.prototype.resetMasterLink()
            }
        }
        function a() {}
        YEvent.preventDefault(b);
        if (YDom.hasClass(f, "master")) {
            var c = (LI.NusHiding.prototype.isShowingHiddenUpdates()) ? d.hideHiddenLink: d.showHiddenLink
        } else {
            c = f.getAttribute("data-url")
        }
        var e = {
            success: g,
            failure: a,
            timeout: 15000
        };
        YAHOO.util.Connect.asyncRequest("GET", c, e, null)
    },
    isShowingHiddenUpdates: function() {
        return YDom.hasClass("nus-hidden-count-link", "is-showing")
    },
    resetMasterLink: function() {
        var a = YDom.get("nus-hidden-count-link");
        YDom.replaceClass(YDom.getAncestorByTagName(a, "li"), "show", "hide");
        YDom.get(a).innerHTML = YAHOO.lang.substitute(LI.i18n.get("NUS_HIDING_IS_HIDING_MSG"), {
            0: ""
        });
        YDom.replaceClass(a, "is-showing", "is-hiding")
    }
};
YAHOO.register("LI.NusHiding", LI.NusHiding, {});
LI.define("NusDeleteUpdate");
(function() {
    function f(j, k, g) {
        var i;
        function h() {
            k.parentNode.removeChild(k);
            LI.Events.fire("layout:items-changed");
            LI.Events.fire("layout:updated")
        }
        j = LI.addParams(j, {
            ajax: 1
        });
        YAHOO.util.Connect.initHeader("X-IsAJAXForm", "1");
        i = YConn.asyncRequest("GET", j, {
            success: function(q) {
                var n = q.responseText, p, m;
                try {
                    p = q.responseXML.documentElement
                } catch (l) {
                    p = q.responseXML
                }
                LI.Dialog().close();
                if (p) {
                    m = p.getElementsByTagName("responseInfo")[0];
                    if (m && m.firstChild.nodeValue === "SUCCESS") {
                        LI.injectAlert(p.getElementsByTagName("responseMsg")[0].firstChild.nodeValue, "success");
                        if (k && k.parentNode) {
                            h()
                        }
                        window.setTimeout(function() {
                            LI.removeAlert(null, true);
                            if (g) {
                                window.location = g
                            }
                        }, 2000)
                    }
                } else {
                    if (n) {
                        m = YJson.parse(n);
                        if (m && m.status === "ok" && k && k.parentNode) {
                            h()
                        }
                    }
                }
            }
        })
    }
    function e(g) {
        var h = YEvent.getTarget(g);
        if (YDom.hasClass(h, this.hideClass)) {
            YEvent.preventDefault(g);
            a.call(this, h.href, YDom.getAncestorByClassName(h, "feed-item"))
        }
    }
    function b(h, j) {
        var i = YEvent.getTarget(h), g = this.breakoutHomeUrl;
        if (this.useAjax && YDom.hasClass(i, "confirm-delete")) {
            YEvent.preventDefault(h);
            f(i.href, j, g)
        }
    }
    function a(i, j) {
        var g = ['<div class="dialog-container interrupt">', '<div class="attention"><p><strong>{0}</strong></p></div>', '<p class="actions">', '<a href="{3}" class="btn-primary confirm-delete">{1}</a>', '<a href="#" class="dialog-close" role="button">{2}</a>', "</p>", "</div>"].join(" "), h;
        h = LI.domify(YAHOO.lang.substitute(g, {
            0: LI.i18n.get("NusDeleteUpdate-are-you"),
            1: LI.i18n.get("NusDeleteUpdate-yes"),
            2: LI.i18n.get("NusDeleteUpdate-cancel"),
            3: i
        }));
        LI.Dialog().open({
            name: "nusDeleteUdpate",
            type: "interrupt",
            width: "500",
            className: "dialog-v2 nusDeleteUpdate",
            content: {
                node: h,
                title: LI.i18n.get("NusDeleteUpdate-please-confirm")
            }
        });
        YEvent.on(h, "click", b, j, this)
    }
    function c() {
        var g = this.tracking.onClose;
        if (g.code) {
            LI.Dialog().closeEvent.subscribe(function() {
                WebTracking.trackUserAction(g.code, g.data)
            })
        }
    }
    function d(h, g) {
        g = g || {};
        this.hideClass = g.clzName || "nus-hide-item";
        this.useAjax = g.useAjax || false;
        this.breakoutHomeUrl = g.breakoutHomeUrl || false;
        this.tracking = g.tracking || {
            onClose: {
                code: null,
                data: {}
            }
        };
        c.apply(this);
        YEvent.on(h, "click", e, null, this);
        if (g.lazyEvent) {
            e.call(this, g.lazyEvent)
        }
    }
    LI.NusDeleteUpdate = d
}());
YAHOO.register("LI.NusDeleteUpdate", LI.NusDeleteUpdate, {});
LI.define("NusDiscussion");
(function() {
    var j = "data-li-comment-id", r = "data-li-config", v = "data-li-discussion-id", o = "data-li-member-name", D = "data-li-scope-id", B = "data-li-scope-type", y = "data-li-topic-id", i = "data-li-topic-type", E = "data-li-urn-id", f = "data-li-actor-type", C = "data-li-actor-id", h = "data-li-action-token", b = "cancel-comment", l = "comments", q = "comment-item", m = "comments-loading", d = "disabled", u = "loading", g = "feed-delete-comment", w = "feed-item", e = "rollup-update-detail", t = "focus-comment-form", z = "post-comment", k = "invalid", x = "first", s = "last", A = "flag", n = "review", p = "block", c = "POST", a = 7000;
    LI.NusDiscussion = function(G, F) {
        this.el = YDom.get(G);
        this.useDwr = (F.useDwr !== "undefined" && F.useDwr === false) ? false : true;
        this.imgSize = F.imgSize || 30;
        this.maxLength = F.maxLength || 700;
        this.addCommentUrl = F.addCommentLink;
        this.deleteCommentUrl = F.deleteCommentLink;
        this.addCommentUrlUscp = F.addCommentLinkUscp;
        this.addCommentUrlMegaphone = F.addCommentMegaphone;
        this.deleteCommentUrlMegaphone = F.deleteCommentMegaphone;
        this.deleteCommentUrlUscp = F.deleteCommentLinkUscp;
        this.addCommentUrlTreasury = F.addCommentTreasury || "";
        this.addCommentUrlSchoolTreasury = F.addCommentSchoolTreasury || "";
        this.addCommentUrlEdu = F.addCommentEdu || "";
        this.isFeedKatificationEnabled=!!F.isFeedKatificationEnabled;
        this.isInCompany=!!F.isInCompany;
        this.companyId = F.companyId || "";
        this.commentSpamFlaggingEnabled = F.commentSpamFlaggingEnabled || false;
        this.useMentions = F.useMentions || false;
        this.useNewMiniProfile = F.useNewMiniProfile || false;
        this.mentionsTriggerKeyString = F.mentionsTriggerKeyString || "A";
        this.mentionsDedupeConnections = F.mentionsDedupeConnections || false;
        this.mentionsDelay = F.mentionsQueryDelay || 250;
        this.isDust=!!F.isDust;
        this.dustCommentThreadTemplate = F.dustCommentThreadTemplate || "tl/shared/uscp/feed/social_activity/comments/main";
        this.urlRegEx = new RegExp(F.urlRegEx || LI.patterns.sharingUrl);
        YEvent.on(G, "click", this._onClick, this, true);
        YEvent.onFocus(G, this._onFocus, this, true);
        this.isInDialog = F.isInDialog || false
    };
    LI.NusDiscussion.prototype = {
        _onClick: function(I) {
            var H = YEvent.getTarget(I), G = H, F = YDom.getAncestorByClassName(H, e) || YDom.getAncestorByClassName(H, w);
            if (YDom.hasClass(H, z) && (!YDom.hasClass(H, p))) {
                YEvent.preventDefault(I);
                this.postComment(F);
                return
            }
            if (G.tagName !== "A") {
                G = YDom.getAncestorByTagName(G, "A")
            }
            if (YDom.hasClass(G, g)) {
                YEvent.preventDefault(I);
                if (!YDom.hasClass(G, A)) {
                    this.deleteComment(G, F)
                }
                return
            }
            if (YDom.hasClass(G, b)) {
                YEvent.preventDefault(I);
                this.clearCommentForm(YDom.getAncestorByClassName(G, "form"));
                return
            }
            if (YDom.hasClass(G, t)) {
                if (this.focusCommentForm(F)) {
                    YEvent.preventDefault(I)
                }
                return
            }
            if (YDom.hasClass(G, "show-all-comments")) {
                YEvent.preventDefault(I);
                this.showAllComments(G);
                return
            }
        },
        _onFocus: function(H) {
            var G = YEvent.getTarget(H), F;
            if (G.tagName === "TEXTAREA" && YDom.hasClass(G, "comment-text")) {
                YEvent.on(G, "blur", this._onBlur, this, true);
                YEvent.on(G, "keyup", this._onKeyup, this, true);
                F = YDom.getAncestorByClassName(G, e) || YDom.getAncestorByClassName(G, w);
                this.focusCommentForm(F)
            }
        },
        _onBlur: function(G) {
            var F = YEvent.getTarget(G);
            if (F.tagName === "TEXTAREA" && YDom.hasClass(F, "comment-text")) {
                YEvent.removeListener(F, "keyup", this._onKeyup);
                YEvent.removeListener(F, "blur", this._onBlur)
            }
        },
        _onKeyup: function(I) {
            var H = YEvent.getTarget(I), F = YDom.getAncestorByClassName(H, e) || YDom.getAncestorByClassName(H, w), G = YDom.getElementsByClassName(z, "input", F)[0];
            if (H.tagName === "TEXTAREA" && YDom.hasClass(H, "comment-text")) {
                if (this.isValid(F)) {
                    this.enableInput(G);
                    if (YDom.hasClass(G, n)) {
                        this.togglereviewInput(G, false)
                    } else {
                        if (YDom.hasClass(G, p)) {
                            this.toggleblockedInput(G, false)
                        }
                    }
                } else {
                    this.disableInput(G)
                }
            }
        },
        isValid: function(F) {
            var G = YDom.getElementsByClassName("ghost", "label", F)[0], H = YDom.getElementsByClassName("comment-text", "textarea", F)[0];
            return ((H.value !== "") && (G.innerHTML !== H.value) && (!YDom.hasClass(H, k)))
        },
        clearCommentForm: function(G) {
            var F = G.getElementsByTagName("textarea")[0], H = $(".mentions-highlighter", G);
            if (H.length) {
                H[0].innerHTML = ""
            }
            F.value = "";
            F.blur();
            YDom.addClass(G, "mini");
            LI.Events.fire("layout:updated")
        },
        createCommentForm: function(Z, S) {
            var N, Q, M, G, R, P, O, V, W, X, J, U, I, T, L, K, Y, H, aa, F;
            N = Z.activityID || new Date().getMilliseconds();
            L = Z.topicType + "-" + Z.topicID + "-" + Z.scopeType + "-" + Z.scopeID + "-" + N;
            T = Z.ghostText || LI.i18n.get("NUS_DISCUSSION_ADD_A_COMMENT");
            P = "mentions-container-" + L;
            W = "mentions-data-" + L;
            J = "comment-highlighter-" + L;
            U = "comment-body-" + L;
            K = "typeahead-container-" + L;
            Y = "comment-typeahead-" + L;
            H = "comment-typeahead-" + L + "-script";
            if (this.isFeedKatificationEnabled) {
                if (this.useMentions) {
                    R = ['<form action="#">', '<div id="', P, '" class="mentions-container">', '<pre class="mentions-highlighter" id="', J, '"></pre>', '<label for="', U, '" class="ghost">', T, "</label>", '<textarea class="texta comment-text mentions-input" id="', U, '"></textarea></div>', '<input type="hidden" name="comment-typeahead" id="', Y, '" />', '<script id="', H, '"><\/script>', '<div class="mentions-typeahead-container" id="', K, '"></div>', '<input type="hidden" name="mentions" id="', W, '" />', '<div class="actions">', '<input type="submit" class="', z, ' btn-primary" value="', LI.i18n.get("NUS_DISCUSSION_COMMENT"), '">', "</div>", "</form>"].join("")
                } else {
                    R = ['<form action="#">', '<label for="comment-body-', L, '" class="ghost">', T, "</label>", '<textarea class="texta comment-text" id="comment-body-', L, '"></textarea>', '<div class="actions" >', '<input type="submit" class="', z, ' btn-primary" value="', LI.i18n.get("NUS_DISCUSSION_COMMENT"), '">', "</div>", "</form>"].join("")
                }
            } else {
                R = ['<form action="#" id="form-network-update-', L, '">', '<label for="comment-body-', L, '" id="comment-body-', L, '-label" class="ghost">', LI.i18n.get("NUS_DISCUSSION_ADD_A_COMMENT"), "</label>", '<textarea class="texta comment-text" id="comment-body-', L, '"></textarea>', '<div class="actions" id="btn-', L, '">', '<input type="submit" class="', z, ' btn-primary" value="', LI.i18n.get("NUS_DISCUSSION_COMMENT"), '">', " ", LI.i18n.get("NUS_DISCUSSION_OR"), " ", '<a href="#" class="', b, '">', LI.i18n.get("NUS_DISCUSSION_CANCEL"), "</a>", "</div>", "</form>"].join("")
            }
            S.innerHTML = R;
            if (!this.isValid(S)) {
                F = YDom.getElementsByClassName(z, "input", S)[0];
                this.disableInput(F)
            }
            if (LI.hasPlaceholder ||!this.useMentions) {
                G = new LI.GhostLabel(YDom.getElementsByClassName("ghost", "label", S)[0])
            }
            Q = new window.CheckTextarea(YDom.getElementsByClassName("comment-text", "textarea", S)[0], {
                maxLength: this.maxLength,
                grow: {
                    onFocus: 40,
                    infinite: this.useMentions
                },
                showMsgOn: "error"
            });
            if (this.useMentions) {
                M = Z.topicID || 0;
                V = "nus-discussion";
                if (LI.MentionsDecorator.isInfluencer) {
                    O = "mynetwork"
                } else {
                    O = "my1stnetwork"
                }
                I = LI.Controls.addControl(H, "LI.Typeahead2", {
                    handleEventAs: ["DEFAULT"],
                    source: "TYPE_DISCUSSION_PARTICIPANTS_COMPANIES_FIRST_DEGREE_CONNECTIONS",
                    maxResultsDisplayed: 11,
                    maxResultsPerSource: [{
                        sourceID: "discussionparticipants",
                        max: 3
                    }, {
                        sourceID: O,
                        max: 5
                    }, {
                        sourceID: "company",
                        max: 3
                    }
                    ],
                    renderAs: ["DEFAULT", "AUTOCHOOSE", {
                        autoSnapContainer: false
                    }
                    ],
                    containerEl: document.getElementById(K),
                    resultsClass: "mentions-typeahead"
                });
                aa = "&ta-updateId=" + M + "&ta-posterId=" + Z.scopeID;
                if (M !== N) {
                    aa += "&ta-isMegaphone=true"
                }
                X = LI.Controls.addControl(U, "LI.MentionsDecorator", {
                    triggers: this.mentionsTriggerKeyString,
                    mentionsInputEl: "#" + U,
                    typeaheadEl: "#" + Y,
                    mentionsEl: "#" + W,
                    highlightEl: "#" + J,
                    context: V,
                    urlAppend: aa,
                    dedupeConnections: this.mentionsDedupeConnections,
                    queryDelay: this.mentionsQueryDelay
                })
            }
            LI.Events.fire("layout:updated")
        },
        disableInput: function(F) {
            YDom.addClass(F, d);
            F.disabled = true
        },
        enableInput: function(F) {
            YDom.removeClass(F, d);
            F.disabled = false
        },
        togglereviewInput: function(F, G) {
            if (G) {
                YDom.addClass(F, n);
                F.value = LI.i18n.get("NUS_DISCUSSION_REVIEW_INPUT_TXT")
            } else {
                YDom.removeClass(F, n);
                F.value = LI.i18n.get("NUS_DISCUSSION_COMMENT");
                this.removeError()
            }
        },
        toggleblockedInput: function(F, G) {
            if (G) {
                this.disableInput(F);
                YDom.addClass(F, p)
            } else {
                YDom.removeClass(F, p);
                this.removeError()
            }
        },
        focusCommentForm: function(F) {
            var K, G, J, I, H;
            if (!F) {
                return false
            }
            K = YDom.getElementsByClassName(l, "div", F)[0];
            if (!K) {
                return false
            }
            LI.show(K);
            J = YDom.getElementsByClassName("form", "div", K)[0];
            if (!J) {
                return false
            }
            YDom.removeClass(J, "mini");
            if (!YDom.getChildren(J).length) {
                G = this.getConfigFromContainer(K);
                this.createCommentForm(G, J)
            }
            I = J.getElementsByTagName("textarea")[0];
            if (!I) {
                return false
            }
            I.focus();
            LI.Events.fire("layout:updated");
            if (!this.isValid(K)) {
                H = YDom.getElementsByClassName(z, "input", K)[0];
                this.disableInput(H)
            }
            return true
        },
        getConfigFromContainer: function(F) {
            var G = YJson.parse(F.getAttribute(r));
            G.memberName = F.getAttribute(o) || "";
            return G
        },
        postComment: function(W) {
            function H(an) {
                var ad = "", ab = YDom.getFirstChild(M), ah = YDom.getChildren(ab), ay = Z.value, ae = s, az = 0, aw, ak = YDom.getElementsByClassName(t, "A", W)[0], ao, av, ap, am, ai, ag, aj, af = [], ar, at, au, ac = LI.htmlEncode(LI.htmlUnencode(aa.memberName)), al = an.mention || "", ax, aq = 0;
                aw = ak.getElementsByTagName("span");
                at = ah[ah.length - 1];
                if (al && al !== "[]" && al.length && P.useMentions) {
                    al = YJson.parse(al);
                    ax = al.length;
                    ar = ax;
                    al = al.sort(function(aB, aA) {
                        return aA.index - aB.index
                    });
                    while (ar--) {
                        ap = al[ar];
                        ag = ap.index;
                        av = ap.length;
                        ao = ag + av;
                        aj = ay.substr(ag, av);
                        am = ap.mini || "";
                        ai = ap.profile || "";
                        if (ag) {
                            af.push(G(ay.substr(aq, (ag - aq))))
                        }
                        if (ai) {
                            if (am) {
                                if (P.useNewMiniProfile) {
                                    af.push(['<span class="new-miniprofile-container ', ap.mini, '" data-li-url="', ap.mini, '" data-li-tl="tl/shared/profile/mini_profile_shell">', '<a href="', ap.profile, '" class="mention">', LI.htmlEncode(aj), "</a></span>"].join(""))
                                } else {
                                    af.push(['<span class="miniprofile-container ', ap.mini, '">', '<a href="', ap.profile, '" class="mention">', LI.htmlEncode(aj), "</a>", "</span>"].join(""))
                                }
                            } else {
                                af.push(['<a href="', ap.profile, '" class="mention">', LI.htmlEncode(aj), "</a>"].join(""))
                            }
                        } else {
                            af.push(LI.htmlEncode(aj))
                        }
                        if (!ar) {
                            af.push(G(ay.substr(ao)))
                        }
                        aq = ao
                    }
                    af = af.join("")
                } else {
                    af = G(ay)
                }
                if (aw.length) {
                    aw = aw[0];
                    az = parseInt(aw.innerHTML.replace(/[^0-9]/, ""), 10)
                }
                if (P.isFeedKatificationEnabled && (az === 0)) {
                    ad = '<div class="bubble"></div>';
                    ae = x
                }
                YDom.removeClass(at, s);
                au = ['<li class="', q, " ", ae, '">', ad, '<img class="feed-photo photo" width="', P.imgSize, '" height="', P.imgSize, '" alt="', ac, '" src="', aa.memberPhoto, '">', "<p>", '<a id="nus-comment-', an.commentID, '" data-li-uscp-action="delete-my-comment" href="', an.deleteCommentLink, '" class="delete ', g, '" ', i, '="', aa.topicType, '" ', y, '="', aa.topicID, '" ', B, '="', aa.scopeType, '" ', D, '="', aa.scopeID, '" ', v, '="', an.discussionID, '" ', j, '="', an.commentID, '" ', E, '="', aa.objectUrnId, '">', LI.i18n.get("NUS_DISCUSSION_DELETE"), "</a>", '<a href="', aa.profileLink, '" class="commenter">', ac, "</a> ", "<q>", af, "</q> ", '<span class="nus-timestamp">', LI.i18n.get("NUS_DISCUSSION_TIME_MSG"), "</span> ", "</p>", "</li>"].join("");
                ab.appendChild(LI.domify(au));
                P.clearCommentForm(YDom.getElementsByClassName("form", "div", W)[0]);
                if (az === 0) {
                    ak.innerHTML += " (<span>1</span>)"
                } else {
                    aw.innerHTML = LI.numberFormat(az + 1)
                }
                if (YDom.hasClass(F, n)) {
                    P.togglereviewInput(F, false)
                }
                P.enableInput(F);
                if (P.isInDialog) {
                    LI.Events.fire("nusPostSuccess")
                }
                LI.Events.fire("layout:updated")
            }
            function U(ab) {
                var ac;
                if (ab === "review" || ab === "block") {
                    P.error = LI.domify('<div class="nus-feed-notify">' + LI.i18n.get("NUS_DISCUSSION_" + ab.toUpperCase() + "_COMMENT_MSG") + "</div>");
                    if (ab === "review") {
                        P.togglereviewInput(F, true)
                    } else {
                        if (ab === "block") {
                            P.toggleblockedInput(F, true)
                        }
                    }
                } else {
                    P.error = LI.domify('<span class="error">' + LI.i18n.get("NUS_DISCUSSION_ERROR_GENERIC") + "</span>")
                }
                if (P.useMentions) {
                    ac = YDom.getAncestorByClassName(Z, "form");
                    ac.insertBefore(P.error, ac.firstChild)
                } else {
                    Z.parentNode.insertBefore(P.error, Z)
                }
                if (ab !== "block") {
                    P.enableInput(F)
                }
            }
            function G(aj) {
                var ae = LI.htmlEncode(aj).split(" ");
                var ak = [], ad = ae.length, ac = "", ai = P.urlRegEx, ag = "http://", ah = "https://";
                for (var af = 0;
                af < ad;
                af++) {
                    var ab = ae[af];
                    if (ai.test(ab)) {
                        ac = ab;
                        if (ac.indexOf(ag) !== 0 && ac.indexOf(ah) !== 0) {
                            ac = ag + ac
                        }
                        ab = '<a class="comment-url" data-li-trkcode="commentURL" href="' + ac + '" target="_blank">' + ab + "</a>"
                    }
                    ak.push(ab)
                }
                return ak.join(" ")
            }
            var M = YDom.getElementsByClassName(l, "div", W)[0], aa = this.getConfigFromContainer(M), Z = YDom.getElementsByClassName("comment-text", "textarea", M)[0], I = YDom.getElementsByClassName("ghost", "label", M)[0], R = true, J = YDom.getAncestorByClassName(M, "linkedin-profile-update-treasury") ? true: false, O = aa.megaphoneFlag && Boolean(parseInt(aa.megaphoneFlag, 2)), X = aa.eduFlag && Boolean(parseInt(aa.eduFlag, 2)), V = "", T = Y$("input[name=mentions]", W), L, P = this, Y = window.escape, Q, F, K;
            if (O && this.addCommentUrlMegaphone !== "") {
                L = this.addCommentUrlMegaphone
            } else {
                if (R) {
                    var N = J && this.addCommentUrlTreasury !== "";
                    var S = X && this.addCommentUrlEdu !== "";
                    if (N && S) {
                        L = this.addCommentUrlSchoolTreasury
                    } else {
                        if (N) {
                            L = this.addCommentUrlTreasury
                        } else {
                            if (S) {
                                L = this.addCommentUrlEdu
                            } else {
                                L = this.addCommentUrlUscp
                            }
                        }
                    }
                } else {
                    L = this.addCommentUrl
                }
            }
            if ((Z.value === "") || (I.innerHTML === Z.value)) {
                return
            }
            if (T.length) {
                V = "&mentions=" + T[0].value
            }
            Q = {
                async: true,
                callback: H,
                errorHandler: U,
                timeout: 12000
            };
            if (!this.isFeedKatificationEnabled) {
                LI.hide(YDom.getNextSibling(Z))
            }
            F = YDom.getElementsByClassName(z, "input", M)[0];
            this.disableInput(F);
            this.removeError();
            if (this.useDwr) {
                LI.later(window.NetworkUpdateDiscussionAjaxService, 0, "comment", aa.topicType, aa.topicID, aa.scopeType, aa.scopeID, Z.value, Q)
            } else {
                if (L) {
                    if (this.isInCompany) {
                        K = ["activityId=", Y(aa.topicID), "&companyId=", encodeURIComponent(this.companyId), "&content=", encodeURIComponent(Z.value), V].join("")
                    } else {
                        if (O) {
                            K = ["articleId=", Y(aa.topicID), "&commentBody=", encodeURIComponent(Z.value), "&permLink=", Y(aa.permLink), V].join("")
                        } else {
                            if (R) {
                                K = ["activityUrn=", Y(aa.objectUrn), "&objectUrn=", Y(aa.objectUrnId), "&attributedObjectUrn=", Y(aa.attributedObjectUrnId), "&comment=true", "&createViralActivity=", Y(aa.createViralActivity), "&message=", encodeURIComponent(Z.value), V, "&actorId=", Y(aa.actorId), "&actorType=", Y(aa.actorType), "&actionToken=", Y(aa.actionToken)].join("");
                                if (aa.trackingMetadataJson) {
                                    K = K + "&trackingMetadataJson=" + encodeURIComponent(aa.trackingMetadataJson)
                                }
                                if (J) {
                                    if (X) {
                                        K = ["treasuryUrn=", encodeURIComponent(aa.objectUrnId), "&message=", encodeURIComponent(Z.value)].join("")
                                    } else {
                                        K = ["activityId=", Y(aa.activityID), "&objectUrn=", Y(aa.objectUrnId), "&threadUrn=", Y(aa.objectUrnId), "&attributedObjectUrn=", Y(aa.attributedObjectUrnId), "&comment=true", "&createViralActivity=", Y(aa.createViralActivity), "&message=", encodeURIComponent(Z.value), V, "&actorId=", Y(aa.actorId), "&actorType=", Y(aa.actorType), "&actionToken=", Y(aa.actionToken)].join("")
                                    }
                                }
                            } else {
                                K = ["topicType=", Y(aa.topicType), "&topicId=", Y(aa.topicID), "&scopeType=", Y(aa.scopeType), "&scopeId=", Y(aa.scopeID), "&comment=", encodeURIComponent(Z.value), V].join("")
                            }
                        }
                    }
                    if (YDom.hasClass(F, n)) {
                        K = K + "&submitForReview=true"
                    }
                    $.ajax({
                        type: c,
                        url: L,
                        data: K,
                        beforeSend: function(ab) {
                            ab.setRequestHeader("X-IsAjaxForm", 1)
                        },
                        success: function(ad) {
                            var ab = ad.content || ad.responseText, ae, ac = ad.status;
                            if (ab) {
                                if ((typeof ab !== "object") && (ab === "error" || LI.isFullPage(ab))) {
                                    if (ac === "review" || ac === "block") {
                                        U(ac)
                                    } else {
                                        U()
                                    }
                                } else {
                                    if (O) {
                                        ae = {
                                            commentID: ab.pulseComment.commentIdStr,
                                            deleteCommentLink: "#",
                                            mention: ab.pulseComment.mentions
                                        }
                                    } else {
                                        if (P.isInCompany || R) {
                                            ae = ab
                                        } else {
                                            ae = $.parseJSON(ab)
                                        }
                                    }
                                    H(ae)
                                }
                            }
                        },
                        error: U,
                        timeout: a
                    })
                }
            }
        },
        removeError: function() {
            if (this.error) {
                this.error.parentNode.removeChild(this.error);
                this.error = null
            }
        },
        showAllComments: function(I) {
            var F = this, H = YDom.getAncestorByTagName(I, "li");
            function G() {
                YDom.removeClass(H, m)
            }
            YDom.addClass(H, m);
            $.ajax({
                url: I.getAttribute("data-li-more-url"),
                success: function(K) {
                    var J = K.content || K.responseText || K;
                    if (F.isDust) {
                        try {
                            dust.render(F.dustCommentThreadTemplate, J, function(N, M) {
                                if (N) {
                                    YDom.removeClass(H, m)
                                } else {
                                    LI.addToList(YAHOO.lang.trim(M), H)
                                }
                            })
                        } catch (L) {}
                        H.parentNode.removeChild(H)
                    } else {
                        try {
                            LI.addToList(J, H)
                        } catch (L) {}
                        H.parentNode.removeChild(H)
                    }
                    LI.Events.fire("layout:updated")
                },
                error: function() {
                    YDom.removeClass(H, m)
                },
                timeout: a
            })
        },
        deleteComment: function(O, R) {
            function L() {
                var S = YDom.getAncestorByTagName(O, "li"), U, V, W, T;
                S.parentNode.removeChild(S);
                U = YDom.getElementsByClassName(t, "A", R)[0];
                W = U.getElementsByTagName("span");
                if (W.length) {
                    W = W[0];
                    V = parseInt(W.innerHTML.replace(/[^0-9]/, ""), 10) - 1;
                    if (V > 0) {
                        W.innerHTML = LI.numberFormat(V)
                    } else {
                        T = U.innerHTML.indexOf("(");
                        U.innerHTML = U.innerHTML.substring(0, T)
                    }
                }
                LI.Events.fire("layout:updated")
            }
            function J() {
                YDom.removeClass(Q, u)
            }
            var K = {
                async: true,
                callback: L,
                errorHandler: J,
                timeout: 120000
            }, Q = O.parentNode, I = YDom.getElementsByClassName(l, "div", R)[0], H = this.getConfigFromContainer(I), N = true, G = H.megaphoneFlag && Boolean(parseInt(H.megaphoneFlag, 2)), M = G ? this.deleteCommentUrlMegaphone: (N ? this.deleteCommentUrlUscp : this.deleteCommentUrl), P = window.escape, F;
            YDom.addClass(Q, u);
            if (this.useDwr) {
                LI.later(window.NetworkUpdateDiscussionAjaxService, 0, "deleteComment", O.getAttribute(i), O.getAttribute(y), O.getAttribute(B), O.getAttribute(D), O.getAttribute(v), O.getAttribute(j), K)
            } else {
                if (M) {
                    if (this.isInCompany) {
                        F = "activityId=" + P(O.getAttribute(y)) + "&companyId=" + encodeURIComponent(this.companyId) + "&commentId=" + P(O.getAttribute(j))
                    } else {
                        if (G) {
                            F = ["submit=delete", "&articleId=", P(H.topicID), "&commentId=", P(O.getAttribute(j)), "&permLink=", P(H.permLink)].join("")
                        } else {
                            if (N) {
                                F = "threadUrn=" + P(O.getAttribute(E)) + "&commentId=" + P(O.getAttribute(j));
                                if (H) {
                                    F += "&actorId=" + P(H.actorId) + "&actorType=" + P(H.actorType) + "&actionToken=" + P(H.actionToken)
                                } else {
                                    F += "&actorId=" + P(O.getAttribute(C)) + "&actorType=" + P(O.getAttribute(f)) + "&actionToken=" + P(O.getAttribute(h))
                                }
                            } else {
                                F = "topicType=" + P(O.getAttribute(i)) + "&topicId=" + P(O.getAttribute(y)) + "&scopeType=" + P(O.getAttribute(B)) + "&scopeId=" + P(O.getAttribute(D)) + "&discussionId=" + P(O.getAttribute(v)) + "&commentId=" + P(O.getAttribute(j))
                            }
                        }
                    }
                    $.ajax({
                        type: c,
                        url: M,
                        data: F,
                        beforeSend: function(S) {
                            S.setRequestHeader("X-IsAjaxForm", 1)
                        },
                        success: function(T) {
                            var S = T.content || T.responseText;
                            if (S) {
                                if (S === "error") {
                                    J()
                                } else {
                                    L()
                                }
                            }
                        },
                        error: J,
                        timeout: a
                    })
                }
            }
        }
    }
}());
(function() {
    var a = "gyml-home-carousel", l = ".delete", f = ".logo-hover", c = ".ol-carousel", h = ".carousel-element", d = ".next-button", q = ".action-join", m = ".private-join", o = ".public-join", r = ".showmore-no-interaction", e = ".showmore-interaction", i = "next-button-hidden", j = "hidden", b = "fadeout", k = "on", p = "off", n = YAHOO.env.ua;
    LI.RecommendationsHover = function g(t, s) {
        this.container = t;
        this.deleteButton = Y$(l, t, true);
        this.logoHover = Y$(f, t, true);
        this.nextButton = Y$(d);
        this.joinButton = Y$(q, t);
        this.privateJoin = Y$(m, t, true);
        this.publicJoin = Y$(o, t, true);
        this.noInteraction = Y$(r, a);
        this.interaction = Y$(e, a);
        this.olCarousel = Y$(c, a);
        this.liCarousel = Y$(h, a);
        this.interactionTimeout = null;
        YEvent.on(this.container, "mouseover", this.reveal, this);
        YEvent.on(this.container, "mouseout", this.hide, this);
        YEvent.on(this.deleteButton, "mouseup", this.remove, this);
        YEvent.on(this.joinButton, "click", this.joinGroup, this);
        if (!YEvent.getListeners("gyml-next-button", "mouseup")) {
            YEvent.on(this.nextButton, "mouseup", this.slide, this)
        }
    };
    LI.RecommendationsHover.prototype = {
        findFirstOff: function(u) {
            var v = 0, s = u.liCarousel, t;
            for (t = s.length - 1;
            t >= 0;
            t--) {
                if (YDom.hasClass(s[t], k)) {
                    v = t + 1;
                    break
                }
            }
            return v
        },
        reveal: function(s, t) {
            var v = YEvent.getTarget(s), u = 50;
            clearTimeout(t.interactionTimeout);
            if ((v === t.joinButton) || (v.parentNode === t.joinButton)) {
                YEvent.preventDefault(s);
                YDom.addClass(t.deleteButton, b);
                YDom.addClass(t.logoHover, b);
                setTimeout(function() {
                    YDom.addClass(t.deleteButton, j);
                    YDom.addClass(t.logoHover, j)
                }, u)
            } else {
                YDom.removeClass(t.deleteButton, j);
                YDom.removeClass(t.logoHover, j);
                setTimeout(function() {
                    YDom.removeClass(t.deleteButton, b);
                    YDom.removeClass(t.logoHover, b)
                }, u)
            }
            return this
        },
        hide: function(s, u) {
            var t = this, v = 50;
            u.interactionTimeout = setTimeout(function() {
                YDom.addClass(u.deleteButton, b);
                YDom.addClass(u.logoHover, b);
                setTimeout(function() {
                    YDom.addClass(u.deleteButton, j);
                    YDom.addClass(u.logoHover, j)
                }, v);
                return t
            }, v)
        },
        remove: function(s, x) {
            var u = {
                width: {
                    to: 0
                },
                margin: {
                    to: 0
                }
            }, y = new YAnim(x.container, u), t = x.liCarousel, z, w, v;
            y.duration = 0.15;
            z = x.findFirstOff(x);
            YDom.removeClass(t[z], p);
            YDom.addClass(t[z], k);
            setTimeout(function() {
                if (!n.ie) {
                    YDom.addClass(x.nextButton, i)
                }
                y.animate()
            }, 500);
            setTimeout(function() {
                if (!n.ie) {
                    YDom.removeClass(x.nextButton, i)
                }
                v = null;
                v = x.container;
                v.parentNode.removeChild(v)
            }, 650);
            return this
        },
        slide: function(A, x) {
            var B, y, v, s = x.liCarousel, t = 516, w = YDom.getStyle(x.olCarousel, "right"), u = parseInt(w), z = u + t;
            B = x.findFirstOff(x);
            if (YDom.hasClass(s[B], p)) {
                if (s[B + 3]) {
                    for (v = B;
                    v < B + 3;
                    v++) {
                        YDom.removeClass(s[v], p);
                        YDom.addClass(s[v], k)
                    }
                } else {
                    y = s.slice(B).length;
                    for (v = B;
                    v < B + y;
                    v++) {
                        YDom.removeClass(s[v], p);
                        YDom.addClass(s[v], k)
                    }
                }
                for (v = B - 1;
                v >= B - 3;
                v--) {
                    YDom.removeClass(s[v], k);
                    YDom.addClass(s[v], p)
                }
                YDom.setStyle(x.olCarousel, "right", z + "px");
                B = x.findFirstOff(x);
                if (!s[B]) {
                    YDom.addClass(x.nextButton, i)
                }
            }
            return this
        },
        joinGroup: function(s, v) {
            var w = YEvent.getTarget(s), x = v.joinButton, u, y, t;
            YEvent.preventDefault(s);
            if (w.tagName !== "A") {
                w = YDom.getAncestorByTagName(w, "A")
            }
            u = w.getAttribute("data-gyml-feed-join-url");
            YDom.addClass(x, "loading");
            y = {
                success: function(z) {
                    t = z.responseText || "";
                    if (t.indexOf("auto_granted") >= 0 || t.indexOf("pending_approval") >= 0) {
                        YDom.removeClass(x, "loading");
                        YDom.addClass(x, j);
                        if (w.getAttribute("data-gyml-ispublic") == "false") {
                            YDom.removeClass(v.privateJoin, j)
                        } else {
                            YDom.removeClass(v.publicJoin, j)
                        }
                        YDom.addClass(v.noInteraction, j);
                        YDom.removeClass(v.interaction, j);
                        setTimeout(function() {
                            YDom.removeClass(v.interaction, b)
                        }, 50)
                    } else {
                        y.failure(z)
                    }
                },
                failure: function(z) {
                    window.location = w.href
                },
                scope: this
            };
            LI.asyncRequest("POST", u, y)
        }
    }
}());
YAHOO.register("LI.RecommendationsHover", LI.RecommendationsHover, {});
LI.define("NusFollow");
LI.NusFollow = function(a, b) {
    var h = "loading", c = "following", g = "not-following", e = "followed", d = "not-followed", f = this;
    b = b || {};
    this.config = {
        trackAndFollowUrl: b.trackAndFollowUrl || null,
        unfollowUrl: b.unfollowUrl || null
    };
    function i(j) {
        var n = YEvent.getTarget(j), l = n, m = null, p = {};
        YEvent.preventDefault(j);
        function o(q) {
            YDom.removeClass(a, h);
            if (m === "follow") {
                YDom.replaceClass(a, d, e)
            } else {
                YDom.replaceClass(a, e, d)
            }
        }
        function k(q) {
            YDom.removeClass(a, h)
        }
        p = {
            success: o,
            failure: k,
            custom: {
                error: k
            },
            timeout: 5000
        };
        if (l.tagName.toUpperCase() !== "A") {
            l = YDom.getAncestorByTagName(l, "A")
        }
        if (l) {
            YDom.addClass(a, h);
            if (YDom.hasClass(l, g)) {
                m = "follow";
                LI.asyncRequest("GET", f.config.trackAndFollowUrl, p, null)
            } else {
                if (YDom.hasClass(l, c)) {
                    m = "unfollow";
                    LI.asyncRequest("GET", f.config.unfollowUrl, p, null)
                } else {
                    k()
                }
            }
        }
    }
    YEvent.on(a, "click", i)
};
(function() {
    var a = "followed", c = "not-followed", d = "following";
    LI.FollowPeople = function b(f, e) {
        this.container = f;
        YEvent.on(f, "click", this.unfollowPeople, null, this)
    };
    LI.FollowPeople.prototype = {
        callback: function(e) {
            return {
                success: function() {
                    YDom.removeClass(this.container, "loading");
                    YDom.replaceClass(this.container, a, c)
                },
                failure: function() {
                    YDom.removeClass(this.container, "loading")
                },
                scope: e
            }
        },
        unfollowPeople: function(e) {
            var g = this, h = YEvent.getTarget(e), f;
            h = YDom.hasClass(h, d) ? h : YDom.getAncestorByClassName(h, d);
            if (h) {
                YEvent.preventDefault(e);
                f = h.getAttribute("data-unfollow-people-url");
                if (f) {
                    YDom.addClass(this.container, "loading");
                    YAHOO.util.Connect.asyncRequest("POST", f, g.callback(g))
                }
            }
        }
    }
}());
LI.define("FollowPeople");
LI.define("FollowToggler");
LI.FollowToggler = (function() {
    var i = "followee", l = "is-following", e = "", g = "", r, m, o = "loading", q = "changed", c = "href", d = "follow", s = "unfollow", n = "action-" + d, j = "action-" + s;
    function k(u, t) {
        var v = (u && u.id) || (new Date()).getTime();
        if (!t.disabled) {
            i = t.toggleContainerClass || i;
            l = t.toggleClass || l;
            e = t.actionClassSuffix || e;
            g = t.selectedClass || g;
            YEvent.on(u, "click", h);
            r = new YAHOO.util.CustomEvent(q + v);
            return {
                change: r
            }
        }
    }
    function h(u) {
        var v = YEvent.getTarget(u), t = true;
        if (g && v.tagName && v.tagName !== "A") {
            v = YDom.getAncestorByTagName(v, "a")
        }
        if (YDom.hasClass(v, n + e)) {
            b(v)
        } else {
            if (YDom.hasClass(v, j + e)) {
                p(v)
            } else {
                t = false
            }
        }
        if (t) {
            YEvent.preventDefault(u)
        }
    }
    function a(u) {
        var t = u.match(/(followee|memberId|channels)[=|\/](\d+)/i), v = null;
        if (t&&!!t.length) {
            v = t[2] || null
        }
        return v
    }
    function f(t, v, u) {
        LI.asyncRequest(v || "GET", t, {
            success: u.success,
            failure: u.failure,
            custom: {
                exception: u.failure,
                error: u.failure
            }
        })
    }
    function b(v) {
        var t = YDom.getAttribute(v, c), u = YDom.getAncestorByClassName(v, i), w = a(t);
        if (!t) {
            return
        }
        YDom.addClass(u, o);
        f(t, "POST", {
            success: function(x) {
                YDom.removeClass(u, o);
                YDom.addClass(u, l);
                if (g) {
                    m = Y$("." + j, u);
                    YDom.removeClass(v, g);
                    YDom.addClass(m, g)
                }
                r.fire(d, {
                    success: true,
                    id: w
                })
            },
            failure: function() {
                YDom.removeClass(u, o);
                r.fire(d, {
                    success: false,
                    id: w
                })
            }
        })
    }
    function p(v) {
        var t = YDom.getAttribute(v, c), u = YDom.getAncestorByClassName(v, i), w = a(t);
        if (!t) {
            return
        }
        YDom.addClass(u, o);
        f(t, "POST", {
            success: function(x) {
                YDom.removeClass(u, o);
                YDom.removeClass(u, l);
                if (g) {
                    m = Y$("." + n, u);
                    YDom.removeClass(v, g);
                    YDom.addClass(m, g)
                }
                r.fire(s, {
                    success: true,
                    id: w
                })
            },
            failure: function() {
                YDom.removeClass(u, o);
                r.fire(s, {
                    success: false,
                    id: w
                })
            }
        })
    }
    return k
}());
LI.define("DigestHoverReveal");
LI.DigestHoverReveal = LI.BaseControl.extend(function(c) {
    var e = "rollup-update-detail-hidden", h = "photo-large", k = "photo-bigger", g = ".rollup-member-photos", j = ".photo", d = ".rollup-update-detail", b = "li-selected", l = "data-li-track-hover-url", a = "li", f = 200, i = {
        biggerImageEnable: false,
        trackingKey: "NUS_DIG_NEW-hover",
        isDisableTracking: false
    };
    return {
        beforeDecoration: function() {
            this._config = _.defaults(this._config, i);
            this._photoClass = this._config.biggerImageEnable ? k : h;
            this._$memberPhotos = this._$el.find(g);
            this._$details = this._$el.find(d);
            this._$photos = this._$memberPhotos.find(j);
            this._timer = null;
            this._lastEl
        },
        attachEventListeners: function() {
            this._$memberPhotos.on("mouseover", j, _.bind(this.digestFocus, this));
            this._$memberPhotos.on("mouseout", j, _.bind(this.clearTimer, this))
        },
        digestFocus: function(p) {
            var n = $(p.target), o = $("#" + n[0].id.replace("photo", "detail")), m = this;
            if (this._lastEl && this._lastEl[0].id === n[0].id) {
                return
            }
            this._timer = setTimeout(function() {
                m._doAction(n, o)
            }, f)
        },
        _doAction: function(o, p) {
            var m, n;
            this._lastEl = o;
            this._$photos.removeClass(this._photoClass);
            o.addClass(this._photoClass);
            if (navigator.userAgent.match(/msie [6-7]/i)) {
                this._$photos.each(function(r, q) {
                    $(q).closest(a).removeClass(b)
                });
                o.closest(a).addClass(b)
            }
            this._$details.addClass(e);
            p.removeClass(e);
            if (!this.isDisableTracking) {
                WebTracking.trackUserAction(this.trackingKey)
            }
            m = o.closest("[" + l + "]");
            if (m) {
                n = m.attr(l);
                if (n) {
                    $.ajax(n)
                }
            }
        },
        clearTimer: function() {
            if (this._timer) {
                clearTimeout(this._timer)
            }
        }
    }
});
LI.ZeppelinForm = function(X, N) {
    var N = {
        passwordResolutionUrl: N.passwordResolutionUrl || "",
        formID: N.formID || "nwmi-form",
        formImportMessageID: N.formImportMessageID || "import_msg",
        formEmailInputID: N.formEmailInputID || "email-nWMIForm",
        formEmailInputName: N.formEmailInputName || "",
        formEmailProgressID: N.formEmailProgressID || "wmi_progress",
        formPasswordDivID: N.formPasswordDivID || "pswd-div",
        formUsernameDivID: N.formUsernameDivID || "email-username",
        formSubmitButtonID: N.formSubmitButtonID || "resolve-btn",
        webmailAddrElId: N.webmailAddrElId || "webmail-addr",
        formDisclaimerMessageID: N.formDisclaimerMessageID || "disclaimer_msg",
        openInPopup: N.openInPopup || false,
        popupUrl: N.popupUrl || "",
        successUrl: N.successUrl || "",
        newGoBackValue: N.newGoBackValue || null,
        successMonitorUrl: N.successMonitorUrl || null,
        authOnlySuccessUrl: N.authOnlySuccessUrl || "",
        controlNameOverride: N.controlNameOverride || null,
        progressMessage: N.progressMessage || "",
        errorMessage: N.errorMessage || null,
        invalidEmailMessage: N.invalidEmailMessage || "",
        generalErrorMessage: N.generalErrorMessage || "",
        invalidLoginMessage: N.invalidLoginMessage || "",
        unsupportedEmailTypeMessage: N.unsupportedEmailTypeMessage || "",
        loginLimitMessage: N.loginLimitMessage || "",
        noContactsReturnedMessage: N.noContactsReturnedMessage || "",
        webmailUrlErrorMessage: N.webmailUrlErrorMessage || "",
        userEnteredWebmailUrlErrorMessage: N.userEnteredWebmailUrlErrorMessage || "",
        quickResolveDomains: {},
        domainPopupSizes: {
            "hotmail.com": {
                width: 905,
                height: 580
            },
            "live.com": {
                width: 905,
                height: 580
            },
            "msn.com": {
                width: 905,
                height: 580
            },
            "aol.com": {
                width: 520,
                height: 315
            },
            "default": {
                width: 790,
                height: 580
            }
        },
        exception: {},
        isPromo: N.isPromo || false,
        providerNameFieldID: N.providerNameFieldID || "",
        providerNameFieldName: N.providerNameFieldName || "",
        importerNameFieldID: N.importerNameFieldID || "",
        importerNameFieldName: N.importerNameFieldName || "",
        useGenieFieldID: N.useGenieFieldID || "",
        useGenieFieldName: N.useGenieFieldName || "",
        useZeppelinXFieldName: N.useZeppelinXFieldName || "",
        defaultProviderFieldName: N.defaultProviderFieldName || "",
        usernameFieldId: N.usernameFieldId || "",
        usernameFieldName: N.usernameFieldName || "",
        originNameFieldName: N.originNameFieldName || "",
        referrerFieldName: N.referrerFieldName || "referrer_alias",
        hasWebmailField: N.hasWebmailField || false,
        fandangoParam: N.fandangoParam || "fandango",
        importerProviderParam: N.importerProviderParam || "importerProvider",
        authOnly: N.authOnly || false,
        formTarget: N.formTarget || "zeppelin_popup",
        eventNotify: N.eventNotify || false,
        hidePopupForExchangeIMAP: N.hidePopupForExchangeIMAP || false,
        userEnteredEmailTrackingCode: N.userEnteredEmailTrackingCode || "",
        userChangedEmailTrackingCode: N.userChangedEmailTrackingCode || "",
        webmailURLPromptedTrackingCode: N.webmailURLPromptedTrackingCode || "",
        extraParamsFunc: N.extraParamsFunc || null,
        hidePasswordInit: N.hidePasswordInit || false,
        externalErrContainerId: N.externalErrContainerId || "",
        skipInitialResolve: N.skipInitialResolve || false,
        origins: N.origins || [],
        isNewAddConnectionsFlow: N.isNewAddConnectionsFlow || false,
        isGlobalNav: N.isGlobalNav || false,
        isNewLegalese: N.isNewLegalese || false,
        oauthAbookImportLegaleseId: N.oauthAbookImportLegaleseId || "",
        notOauthAbookImportLegaleseId: N.notOauthAbookImportLegaleseId || ""
    }, Z = null, s = null, E = "", d = "", ab = N.domainPopupSizes, u = ab["default"], J = u.width, S = u.height, e = new YAHOO.util.CustomEvent("error"), Q = new YAHOO.util.CustomEvent("emailResolved"), b = new YAHOO.util.CustomEvent("displayMsg"), l = YDom.get(N.formID), y = YDom.get(N.externalErrContainerId), L = Y$(".alt_unsupported_msg", y ? y : l, true), O = YDom.get(N.formSubmitButtonID), aa = YDom.get(N.formImportMessageID), t = (N.formEmailInputName) ? l[N.formEmailInputName]: YDom.get(N.formEmailInputID), G = (t) ? t.value: "", M = YDom.getElementsByClassName("username-suggestion"), g = null, ac = (N.formEmailInputName) ? l[N.formEmailInputName]: YDom.get(N.formEmailInputID), H = YDom.get(N.formPasswordDivID), m = Y$("input", H, true), h = YDom.get(N.webmailAddrElId), B = Y$("input", h, true), n = YDom.get("promo-subhead") || null, r = YDom.get("zeppelin-loading"), i = "loading", W = "error", U = false, R = ("placeholder" in document.createElement("input")), I, T, z, c, w, f, v;
    if (N.isNewLegalese) {
        if (!N.hidePasswordInit) {
            LI.show(N.notOauthAbookImportLegaleseId);
            LI.hide(N.oauthAbookImportLegaleseId)
        } else {
            LI.hide(N.notOauthAbookImportLegaleseId);
            LI.show(N.oauthAbookImportLegaleseId)
        }
    }
    N.useZeppelinXFieldNameOld = (N.useZeppelinXFieldName ? N.useZeppelinXFieldName.replace("_", "-") : "");
    N.originNameFieldNameOld = (N.originNameFieldName ? N.originNameFieldName.replace("_", "-") : "");
    if (N.newGoBackValue) {
        f = new RegExp("[\\?&]goback=%2E([^&#]*)");
        v = f.exec(N.successUrl);
        N.successUrl = N.successUrl.replace(v[1], N.newGoBackValue)
    }
    function k() {
        g = window.open("#", N.formTarget, "width=" + J + ",height=" + S + ",toolbar=0,location=0,toolbar=0,status=0,scrollbars=no")
    }
    function a(ad) {
        var ae = ad.split("@")[1];
        if (ab[ae]) {
            J = ab[ae].width;
            S = ab[ae].height
        } else {
            J = u.width;
            S = u.height
        }
    }
    function F(ad) {
        var ae = ad.value;
        if (!ae || (!R && ae === ad.getAttribute("data-placeholder"))) {
            setTimeout(function() {
                O.disabled = true
            }, 0);
            return false
        }
        return true
    }
    YEvent.on(M, "click", function(ad) {
        var af = YDom.get(N.formUsernameDivID), ae = Y$("input", af, true);
        if (af && YDom.getStyle(af, "display") !== "none") {
            if (ae) {
                ae.value = this.innerHTML
            }
            YDom.removeClass(af, "hidden")
        }
    });
    var D = false;
    YEvent.on(l, "submit", function(ad) {
        var ak = Y$(".submit-spinner", l, true), af = ac.value;
        if (D) {
            YEvent.stopEvent(ad);
            return
        }
        D = true;
        setTimeout(function() {
            D = false
        }, 3000);
        if (!ac.value) {
            YEvent.stopEvent(ad);
            return
        }
        if (N.eventNotify) {
            LI.ZeppelinFormInstance = null
        } else {
            var aj = LI.Controls.getControl(l, N.controlNameOverride || "LI.ZeppelinForm");
            LI.ZeppelinFormInstance = aj
        }
        var ae, ah = l[N.originNameFieldName];
        if (ah) {
            ae = ah.value
        }
        var ag = LI.Controls.getControl("addconnpolling", "AddConnPolling");
        if (!N.hidePopupForExchangeIMAP || (ae !== "webmailImportExchange" && ae !== "webmailImportIMAP"&&!(YDom.hasClass(l, "async")))) {
            YDom.setAttribute(l, "target", N.formTarget);
            k()
        } else {
            YDom.setAttribute(l, "target", "LI_ifrm_abook_import_form_" + ae);
            if (ag) {
                ag.addAsync(ae);
                ag.startAsyncTimer(ae)
            }
            O.disabled = true;
            if (ak) {
                YDom.addClass(ak, "show");
                if (LI.Events) {
                    var ai = function() {
                        O.disabled = false;
                        YDom.removeClass(ak, "show");
                        LI.Events.unbind("add-conn-import-error", ai)
                    };
                    LI.Events.bind("add-conn-import-error", ai)
                }
            }
        }
        LI.clearFormErrors(X);
        aa.innerHTML = "";
        if (WebTracking) {
            if (N.userEnteredEmailTrackingCode && (G !== "") && G !== af) {
                WebTracking.trackUserAction(N.userEnteredEmailTrackingCode, {
                    email: af,
                    origin: ae
                })
            } else {
                WebTracking.trackUserAction("fetch_import_start", {
                    email: af,
                    origin: ae
                })
            }
        }
    });
    YEvent.on(window, "unload", function() {
        if (g) {
            g.close()
        }
    });
    w = N.extraParamsFunc || function() {
        return ""
    };
    if (!N.isPromo) {
        var q = null;
        var I = function(ad) {
            if (!ad || ad.value === E) {
                return
            }
            if (s != null) {
                window.clearTimeout(s);
                s = null
            }
            if (Z != null) {
                window.clearInterval(Z);
                Z = null
            }
            if (!ad.value) {
                O.disabled = true
            }
            E = YAHOO.lang.trim(ad.value);
            if (!q) {
                q = /^([a-zA-Z0-9_\-=\.\'\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/i
            }
            if (E.match(q)) {
                Z = window.setInterval(function() {
                    if (E === d) {
                        T(N)
                    } else {
                        d = E
                    }
                }, 500)
            } else {
                if (E.length > 1) {
                    s = window.setTimeout(function() {
                        var ae = N.invalidEmailMessage;
                        YDom.addClass(ad, W);
                        c(ae, false, N);
                        if (U) {
                            YDom.removeClass(r, i);
                            U = false
                        }
                    }, 5000)
                } else {
                    if (U) {
                        YDom.removeClass(r, i);
                        U = false
                    }
                    return
                }
            }
            if (!U) {
                YDom.addClass(r, i);
                U = true
            }
            O.disabled = true
        };
        T = function() {
            var af, ad, ai, aj;
            LI.clearFormErrors(X);
            if (L) {
                YDom.addClass(L, "hidden")
            }
            if (Z != null) {
                window.clearInterval(Z);
                Z = null
            }
            aa.innerHTML = "";
            YDom.removeClass(ac, W);
            var ah = E.split("@")[1];
            if (N.quickResolveDomains[ah]) {
                af = N.quickResolveDomains[ah].domain;
                ad = N.quickResolveDomains[ah].passwordRequired
            }
            a(E);
            function ae(ak) {
                ag(ak.responseText)
            }
            function ag(ak) {
                var ay, az, aB, at, av, an, ar = false, am = E, aC = ak.origin, aA = l[N.originNameFieldName], al = l[N.originNameFieldNameOld], aq = YDom.get(N.formUsernameDivID), ap = (N.useGenieFieldName) ? l[N.useGenieFieldName]: YDom.get(N.useGenieFieldID), aw = l[N.useZeppelinXFieldName], au = l[N.useZeppelinXFieldNameOld];
                N.isEmailChanged = false;
                if (s != null) {
                    window.clearTimeout(s)
                }
                if (U) {
                    YDom.removeClass(r, i);
                    U = false
                }
                var ao = (N.importerNameFieldName) ? l[N.importerNameFieldName]: YDom.get(N.importerNameFieldID), ax = (N.providerNameFieldName) ? l[N.providerNameFieldName]: YDom.get(N.providerNameFieldID);
                if (ao) {
                    if (ak.importerName) {
                        ao.value = ak.importerName
                    } else {
                        ao.value = ""
                    }
                }
                if (ax) {
                    if (ak.providerName) {
                        ax.value = ak.providerName
                    } else {
                        ax.value = ""
                    }
                }
                if (ak.error) {
                    WebTracking.trackUserAction("email-resolution-response-error");
                    c(N.generalErrorMessage);
                    return
                }
                if (ak.email !== am) {
                    return
                }
                if (ak.origin !== undefined) {
                    if (aA) {
                        aA.value = aC;
                        if (al) {
                            al.value = aC
                        }
                    }
                    if (N.formUsernameDivID) {
                        if (aq) {
                            if (aC === "webmailImportExchange") {
                                YDom.removeClass(aq, "hidden");
                                LI.show(aq)
                            } else {
                                YDom.addClass(aq, "hidden");
                                LI.hide(aq)
                            }
                        }
                    }
                }
                if (N.isNewAddConnectionsFlow) {
                    aB = N.formID;
                    if (aB && (an = aB.lastIndexOf("-"))!==-1) {
                        av = aB.substring(an + 1)
                    }
                    if (av !== ak.origin && aB.indexOf(ak.origin)===-1) {
                        if (av !== "anyemail") {
                            ar = true
                        } else {
                            for (ay = 0, az = N.origins.length;
                            ay < az;
                            ay++) {
                                if (ak.origin === N.origins[ay]) {
                                    ar = true;
                                    break
                                }
                            }
                        }
                    }
                }
                if (!(at = YDom.get("reimport-check-" + aC))) {
                    at = YDom.get("reimport-check-x-anyemail")
                }
                if (N.isNewAddConnectionsFlow) {
                    if (!ar) {
                        if (ak.passwordRequired) {
                            LI.show(H);
                            LI.hide(at);
                            YDom.addClass(l, "async");
                            if (ap) {
                                ap.value = false
                            }
                            if (N.isNewLegalese) {
                                LI.show(N.notOauthAbookImportLegaleseId);
                                LI.hide(N.oauthAbookImportLegaleseId)
                            }
                        } else {
                            LI.hide(H);
                            LI.show(at);
                            if (ap) {
                                ap.value = true
                            }
                            if (N.isNewLegalese) {
                                LI.hide(N.notOauthAbookImportLegaleseId);
                                LI.show(N.oauthAbookImportLegaleseId)
                            }
                            YDom.removeClass(l, "async")
                        }
                    }
                } else {
                    if (ak.passwordRequired) {
                        LI.show(H);
                        LI.hide(at);
                        if (ap) {
                            ap.value = false
                        }
                        if (N.isNewLegalese) {
                            LI.show(N.notOauthAbookImportLegaleseId);
                            LI.hide(N.oauthAbookImportLegaleseId)
                        }
                    } else {
                        LI.hide(H);
                        LI.show(at);
                        if (ap) {
                            ap.value = true
                        }
                        if (N.isNewLegalese) {
                            LI.hide(N.notOauthAbookImportLegaleseId);
                            LI.show(N.oauthAbookImportLegaleseId)
                        }
                    }
                }
                if (ak.notSupported) {
                    x();
                    return
                }
                if (ak.showPartnersNotice) {
                    LI.show(N.formDisclaimerMessageID)
                } else {
                    LI.hide(N.formDisclaimerMessageID)
                }
                if (ak.rateLimit) {
                    c(N.loginLimitMessage);
                    return
                }
                if (!N.hasWebmailField && (ak.WEBMAIL_ADDRESS || ak.WEBMAIL_ADDRESS === "")) {
                    x();
                    return
                }
                if (ak.ZEPPELINX_ROUTING) {
                    aw.value = ak.ZEPPELINX_ROUTING;
                    au.value = ak.ZEPPELINX_ROUTING
                } else {
                    YDom.setAttribute(aw, "value", "false");
                    YDom.setAttribute(au, "value", "false")
                }
                if (N.isNewAddConnectionsFlow) {
                    if (ar) {
                        E = G
                    }
                }
                Q.fire(ak);
                if (LI.Events&&!N.isGlobalNav) {
                    LI.Events.fire("zeppelin-form-email-resolved", ak, l, av)
                }
                z()
            }
            if (af) {
                ai = {
                    "isCustomDomain": false,
                    "type": af,
                    "email": E,
                    "passwordRequired": ad
                };
                ag(ai)
            } else {
                aj = {
                    custom: {
                        exception: function() {
                            return false
                        }
                    },
                    success: ae,
                    failure: function() {
                        ag({
                            error: true
                        })
                    }
                };
                O.disabled = true;
                LI.asyncRequest("GET", N.passwordResolutionUrl + "?email=" + E + w(), aj)
            }
        };
        z = function() {
            if (ac.value && ((YDom.getStyle(H, "display") !== "none") ? m.value : true) && (h === null || ((YDom.getStyle(h, "display") !== "none") ? B.value : true))) {
                O.disabled = false
            } else {
                O.disabled = true
            }
        };
        d = ac.value;
        if (!N.skipInitialResolve && F(ac)) {
            E = ac.value;
            T(N)
        } else {
            if (N.hidePasswordInit) {
                LI.hide(H)
            } else {
                LI.show(H)
            }
        }
        YEvent.on(ac, "keyup", function(ad) {
            I(YEvent.getTarget(ad))
        });
        YEvent.on([H, h], "keyup", z);
        z();
        if (LI.Events) {
            LI.Events.bind("zeppelin-form-check-address", function(ad) {
                if (ad === ac) {
                    I(ac)
                }
            })
        }
        YEvent.on(Y$(".change-email", l, true), "click", function(ad) {
            YEvent.preventDefault(ad);
            YDom.addClass(Y$(".email-display", l, true), "hidden");
            YDom.removeClass(Y$(".email-address", l, true), "hidden");
            if (WebTracking && N.userChangedEmailTrackingCode) {
                WebTracking.trackUserAction(N.userChangedEmailTrackingCode)
            }
        })
    }
    if (L) {
        YEvent.on(Y$(".file_import_opener", l, true), "click", function() {
            LI.Events.fire("zeppelin-form-jump-to-file-upload")
        })
    }
    c = function(ah, ad) {
        var af, ae, ag;
        if (L) {
            if (ah !== N.unsupportedEmailTypeMessage) {
                YDom.addClass(L, "hidden")
            }
        }
        if (ad) {
            LI.injectAlert(ah, "success", N.formImportMessageID)
        } else {
            e.fire();
            af = N.formImportMessageID;
            ae = (!af) ? YDom.get("global-error") : YDom.get(af);
            ae.innerHTML = "";
            ag = "<span class='{type}'>{msg}</span>";
            if (n) {
                YDom.setStyle(n, "display", "none");
                n = null
            }
            ah = LI.htmlEncode(ah);
            ae.innerHTML = YAHOO.lang.substitute(ag, {
                msg: ah,
                type: "error"
            });
            WebTracking.trackUserAction("display-error")
        }
        b.fire()
    };
    function A() {
        if (g) {
            g.focus();
            setTimeout(function() {
                g.close()
            }, 5)
        }
    }
    function P() {
        A();
        c(N.generalErrorMessage);
        WebTracking.trackUserAction("general-error")
    }
    function C() {
        A();
        c(N.invalidLoginMessage);
        WebTracking.trackUserAction("invalid-login-error")
    }
    function j() {
        A();
        c(N.noContactsReturnedMessage);
        WebTracking.trackUserAction("no-contacts-returned-error")
    }
    function x() {
        if (L) {
            if (aa) {
                aa.innerHTML = ""
            }
            YDom.removeClass(L, "hidden")
        } else {
            c(N.unsupportedEmailTypeMessage);
            YDom.addClass(ac, W)
        }
        WebTracking.trackUserAction("email-resolution-unsupported-email-error")
    }
    function Y() {
        A();
        c(N.loginLimitMessage);
        WebTracking.trackUserAction("login-limit-error")
    }
    function V() {
        var ad = Y$("input", N.webmailAddrElId, true);
        A();
        if (N.webmailAddrElId) {
            if (YDom.getStyle(YDom.get(N.webmailAddrElId), "display") === "none") {
                c(N.webmailUrlErrorMessage);
                WebTracking.trackUserAction("webmail-url-error");
                LI.show(N.webmailAddrElId);
                if (ad) {
                    ad.value = ""
                }
            } else {
                c(N.userEnteredWebmailUrlErrorMessage);
                WebTracking.trackUserAction("webmail-url-error")
            }
        }
    }
    function p(ad, ae) {
        if (WebTracking) {
            WebTracking.trackUserAction("add_conn_client_success", {
                origin: ae,
                event: ad
            })
        }
        if (N.successMonitorUrl) {
            var af = l[N.referrerFieldName].value;
            LI.asyncRequest("POST", N.successMonitorUrl, {
                custom: {
                    error: function(ag) {},
                    exception: function() {
                        return false
                    }
                }
            }, "referrer=" + af)
        }
    }
    function o(ai, ae) {
        A();
        var af = l[N.originNameFieldName], ah = (N.providerNameFieldName) ? l[N.providerNameFieldName]: YDom.get(N.providerNameFieldID), ag, ad;
        if (af) {
            ad = af.value
        }
        if (N.authOnly && N.authOnlySuccessUrl !== "") {
            p("auth_only", ad);
            window.location.href = N.authOnlySuccessUrl;
            return
        }
        if (ah) {
            ag = ah.value
        }
        if (N.successUrl.indexOf("?") < 0) {
            N.successUrl = N.successUrl + "?"
        }
        if (ae) {
            p("not_complete", ad);
            window.location.href = N.successUrl + "&" + N.fandangoParam + "=" + ae + "&" + N.importerProviderParam + "=" + ag;
            return
        }
        p("success", ad);
        window.location.href = N.successUrl + (ai ? "&batchID=" + ai : "") + (ag ? "&" + N.importerProviderParam + "=" + ag : "") + (ad ? "&origin=" + ad : "")
    }
    function K() {
        return N.authOnly
    }
    return {
        overrideDisplayMsg: function(ad) {
            c = ad
        },
        overrideGetExtraResolveEmailParams: function(ad) {
            w = ad
        },
        showGeneralError: P,
        showBadLoginError: C,
        showUnsupportedEmailError: x,
        showLoginLimitError: Y,
        showNoContactsReturnedError: j,
        showWebmailUrlErrorMessage: V,
        adjustPopupSize: a,
        openPopup: k,
        success: o,
        errorEvent: e,
        emailResolvedEvent: Q,
        displayMsgEvent: b,
        isAuthOnly: K,
        closePopup: true
    }
};
(function() {
    var i = "nus-carousel", a = "carousel-wheel", h = "carousel-item", d = "removed", b = "disabled", n = "delete", k = "next", j = "prev", e = "active", c = "only-active", s = "both-active", q = "next", p = "prev", l = "mouseover", r = "mouseout";
    function o() {
        this.nextButton.addClass(b);
        this.prevButton.addClass(b);
        this.isPrevButtonDisabled = this.isNextButtonDisabled = true
    }
    function m() {
        var t = this.carouselWheel.hasClass(s);
        if (this.objIndex > 0) {
            this.nextButton.removeClass(b);
            this.isNextButtonDisabled = false
        } else {
            if (t) {
                this.carouselWheel.removeClass(s)
            }
            this.prevButton.addClass(c)
        }
        if (this.objIndex + this.itemsToShift !== this.numOfItems) {
            this.prevButton.removeClass(b);
            this.isPrevButtonDisabled = false;
            this.carouselWheel.addClass(s)
        } else {
            if (t) {
                this.carouselWheel.removeClass(s)
            }
            this.nextButton.addClass(c)
        }
    }
    function g(u) {
        var y, w, v = this.itemsToShift, x = (this.numOfItems - v) - this.objIndex, A = parseInt(this.carouselWheel.css("left"), 10) || 0, t = this.objIndex + v === this.numOfItems, z;
        o.call(this);
        if (u === q) {
            w = (this.objIndex > v) ? v : this.objIndex;
            z = w * this.itemWidth;
            if (((this.objIndex >= w) && (this.objIndex + w === this.numOfItems)) || w === 1 && t) {
                A -= z - this.nextPrevWidth
            } else {
                A -= w * this.itemWidth
            }
            this.objIndex -= w
        } else {
            if (u === p) {
                w = x > v ? v : x;
                if (this.objIndex + v + w < this.numOfItems) {
                    A += w * this.itemWidth
                } else {
                    A += w * this.itemWidth - this.nextPrevWidth
                }
                this.objIndex += w
            }
        }
        y = w * this.shiftDuration;
        this.carouselWheel.animate({
            left: A
        }, y, "linear", _.bind(m, this))
    }
    function f(u, t) {}
    f.prototype = {
        init: function(u, t) {
            this.carousel = this.carousel || $(u).closest("." + i);
            this.carouselWheel = this.carouselWheel || $("ul." + a, u);
            this.carouselItems = this.carouselItems || $("li." + h, this.carouselWheel);
            this.nextButton = this.nextButton || $("button." + k, this.carousel);
            this.prevButton = this.prevButton || $("button." + j, this.carousel);
            this.itemsToShift = this.itemsToShift || 2;
            this.itemWidth = this.itemWidth || this.carouselItems.first().outerWidth(true);
            this.numOfItems = this.numOfItems || this.carouselItems.length;
            this.isNextButtonDisabled = this.isNextButtonDisabled || false;
            this.isPrevButtonDisabled = this.isPrevButtonDisabled || true;
            this.shiftDuration = this.shiftDuration || 500;
            this.objIndex = this.objIndex || this.numOfItems - this.itemsToShift;
            this.nextPrevWidth = this.nextPrevWidth || 0;
            $(this.carousel).on("click", $.proxy(this.onClickNusCarousel, this)).on(l, $.proxy(this.onMouseEventNusCarousel, this)).on(r, $.proxy(this.onMouseEventNusCarousel, this));
            this.isPrevButtonDisabled = true;
            this.prevButton.addClass(b);
            this.nextButton.addClass(c)
        },
        getCarousel: function(t) {
            return $(t).closest("." + a)
        },
        getCarouselItem: function(t) {
            return $(t).closest("." + h)
        },
        removeCarouselItem: function(t) {
            t.addClass(d);
            this.objIndex -= 1;
            this.numOfItems -= 1;
            m.call(this)
        },
        onMouseEventNusCarousel: function(v) {
            var t = $(v.target), u = this.getCarouselItem(t);
            if (t.hasClass(n) || t.hasClass(k) || t.hasClass(j)) {
                if (v.type === l) {
                    t.addClass(e)
                } else {
                    if (v.type === r) {
                        t.removeClass(e)
                    }
                }
            }
            if (u) {
                if (v.type === l) {
                    u.addClass(e)
                } else {
                    if (v.type === r) {
                        u.removeClass(e)
                    }
                }
            }
        },
        onClickNusCarousel: function(x) {
            var v, w, A, v = $(x.target), B = v.hasClass(n), t = v.hasClass(k), z = v.hasClass(j), y = v.hasClass(c), u;
            if (B || t || z) {
                x.preventDefault();
                if (B) {
                    u = v.attr("href");
                    LI.asyncRequest("GET", u, {});
                    o.call(this);
                    w = this.getCarouselItem(v);
                    this.removeCarouselItem(w)
                } else {
                    if (t) {
                        this.prevButton.removeClass(b);
                        this.isPrevButtonDisabled = false;
                        if (!this.isNextButtonDisabled) {
                            g.call(this, q)
                        }
                    } else {
                        if (z) {
                            this.nextButton.removeClass(b);
                            this.isNextButtonDisabled = false;
                            if (!this.isPrevButtonDisabled) {
                                g.call(this, p)
                            }
                        }
                    }
                }
                if (y) {
                    v.removeClass(c)
                }
            }
        }
    };
    LI.NusCarousel = f
}());
(function() {
    var h = "action-join", i = "loading", e = "pending-join", f = "joined", c = 2000, j = 10000, l, k;
    function g() {
        this.init = function(q, p) {
            l = p.gymlJoinEndpointLix === "treatment";
            this.shiftDuration = 333;
            this.itemsToShift = 3;
            k.init.call(this, q, p)
        };
        this.onClickNusCarousel = function(v) {
            k.onClickNusCarousel.call(this, v);
            var s, u, q, p = $(v.target), t = p.closest("." + h), r = p.closest(".carousel-showmore");
            if (t.length) {
                q = t.data("gyml-feed-join-url");
                v.preventDefault();
                if (!q) {
                    return
                }
                t.addClass(i);
                this.getCarouselItem(t).addClass(e);
                s = {
                    success: function(y) {
                        s.removeClasses.call(this);
                        var x = this.getCarouselItem(t), w = y.responseText || "", z = JSON.parse(w);
                        if (b[z.content]) {
                            m();
                            b[z.content].call(this, x)
                        } else {
                            o(z.content)
                        }
                    },
                    failure: function(w) {
                        s.removeClasses.call(this);
                        o("OTHER")
                    },
                    scope: this,
                    removeClasses: function() {
                        this.getCarouselItem(t).removeClass(e);
                        t.removeClass(i)
                    }
                };
                u = {
                    success: function(y) {
                        var x = this.getCarouselItem(t), w = y.responseText || "";
                        if (w.indexOf("auto_granted") >= 0 || w.indexOf("pending_approval") >= 0) {
                            x.addClass(f);
                            this.getCarousel(t).addClass(f);
                            t.removeClass(i);
                            setTimeout(_.bind(this.removeCarouselItem, this, x), c)
                        } else {
                            u.failure.call(this, y)
                        }
                    },
                    failure: function(x) {
                        var w = this.getCarouselItem(t);
                        this.removeCarouselItem(w)
                    },
                    scope: this
                };
                LI.asyncRequest("POST", q, l ? s : u)
            } else {
                if (r.length) {
                    q = r.find("a").attr("href");
                    if (q && q.length) {
                        window.location = q
                    }
                }
            }
        }
    }
    g.prototype = new LI.NusCarousel();
    g.prototype.constructor = LI.NusCarousel;
    k = g.prototype.constructor.prototype;
    function n(q, p) {
        var r = new g();
        r.init(q, p)
    }
    LI.NusGYMLCarousel = n;
    var b = {
        CONFIRMED: function(p) {
            p.addClass(f)
        },
        ALREADY_IN_GROUP: function(p) {
            p.addClass(f)
        },
        PENDING: function(p) {
            p.addClass(e)
        },
        BLOCKED: function(p) {
            a("BLOCKED", p)
        },
        NON_EXISTENT_GROUP: function(p) {
            a("NON_EXISTENT_GROUP", p)
        },
        USER_ALREADY_REQUESTED_ACCESS: function(p) {
            a("USER_ALREADY_REQUESTED_ACCESS", p)
        },
        INACTIVE_GROUP: function(p) {
            a("INACTIVE_GROUP", p)
        },
        GROUP_MAX_SIZE_REACHED: function(p) {
            a("GROUP_MAX_SIZE_REACHED", p)
        },
        USER_MAX_GROUP_SIZE_REACHED: function() {
            o("USER_MAX_GROUP_SIZE_REACHED")
        }
    };
    function a(p, q) {
        o(p);
        setTimeout(_.bind(this.removeCarouselItem, this, q), c)
    }
    function o(p) {
        $(".error-message-text").html(LI.i18n.get(p || "OTHER"));
        d();
        setTimeout(m, j)
    }
    $(".error-message-close").click(function() {
        m()
    });
    function m() {
        $(".error-message-box").slideUp()
    }
    function d() {
        $(".error-message-box").slideDown()
    }
}());
(function() {
    var g = "connect", b = "joining", h = "joined", d = "interacted", f = 2000, i;
    function a(j) {
        var k = j.attr("href");
        if (k) {
            window.location = k
        }
    }
    function e() {
        this.init = function(k, j) {
            this.itemsToShift = 2;
            this.nextPrevWidth = 29;
            i.init.call(this, k, j)
        };
        this.onClickNusCarousel = function(m) {
            i.onClickNusCarousel.call(this, m);
            var j, n, k, l;
            j = $(m.target);
            if (j.hasClass(g)) {
                m.preventDefault();
                k = j.attr("data-li-connect");
                if (!k) {
                    return
                }
                l = this.getCarouselItem(j);
                l.addClass(b);
                n = {
                    success: function(q) {
                        var p = q.responseText || "";
                        if (p && p.status && p.status === "success") {
                            l.addClass(h);
                            this.getCarousel(l).addClass(d);
                            l.removeClass(b);
                            setTimeout(_.bind(this.removeCarouselItem, this, l), f)
                        } else {
                            a(j)
                        }
                    },
                    failure: function(p) {
                        a(j)
                    },
                    custom: {
                        error: function(p) {
                            a(j)
                        }
                    },
                    scope: this
                };
                LI.asyncRequest("POST", k, n)
            }
        }
    }
    e.prototype = new LI.NusCarousel();
    e.prototype.constructor = LI.NusCarousel;
    i = e.prototype.constructor.prototype;
    function c(k, j) {
        var l = new e();
        l.init(k, j)
    }
    LI.NusPYMKCarousel = c
})();
LI.define("Share");
LI.Share = LI.BaseControl.extend(function(f) {
    var c = {
        url: null,
        assetUrl: "/sharing/api/reshare/assets",
        title: LI.i18n.get("share-dialog-title") || "Share",
        width: 515,
        additionalClass: "share-dialog-v2",
        lazyEvent: null,
        delegateSelector: null,
        showOnlyWhenReady: false,
        extra: null
    }, d = "click", g = "mouseenter", a = "ShareModuleDialog.", b = a + "success", e = a + "failure";
    return {
        _setListener: function() {
            if (!LI.Share.listenersSet) {
                LI.Share.listenersSet = true;
                LI.Dialog().contentChangeEvent.subscribe(function(j, i) {
                    var h = i[1];
                    if (i[0] === "sharingDialog" && h) {
                        if (h.attributedObjectUrnId) {
                            $("#input-attributedObjectUrn").val(h.attributedObjectUrnId)
                        }
                        if (h.trackingMetadataJson) {
                            $("#input-trackingMetadataJson").val(h.trackingMetadataJson)
                        }
                    }
                });
                LI.Dialog().submitEvent.subscribe(function(k, j) {
                    var i = j[2], h = i && (i.trackingUrl || i.onSubmitTrackingUrl);
                    if (h) {
                        $.get(h)
                    }
                })
            }
        },
        _openOldDialog: function(h) {
            h.preventDefault();
            this._setListener();
            if (!this._dialog) {
                this._dialog = LI.Dialog()
            }
            this._dialog.open(h, {
                name: "sharingDialog",
                type: "task-modal",
                width: this._config.width,
                className: "dialog-v2 " + this._config.additionalClass,
                content: {
                    title: this._config.title,
                    url: this._config.url
                },
                dependencies: {
                    jsFiles: LI.Share.jsAssets,
                    cssFiles: LI.Share.cssAssets
                },
                showOnlyWhenReady: this._config.showOnlyWhenReady,
                extra: this._config.extra
            })
        },
        _openDialog: function(h) {
            h.preventDefault();
            if (!this._dialog) {
                this._dialog = new LI.ModalDialogBox(this._$el, {
                    title: this._config.title,
                    width: this._config.width,
                    decorators: ["scripts/shared/Dialog/AjaxLoading"],
                    customClassName: this._config.additionalClass,
                    dependencies: LI.Share.jsAssets,
                    cssDependencies: LI.Share.cssAssets
                });
                this._dialog.afterInit = function() {
                    this.open()
                }
            } else {
                this._dialog.open()
            }
        },
        _loadAssetUrls: function(h) {
            function i(j) {
                if (j.success) {
                    j = j.data;
                    if (LI.SharingDialog.Version === "v3" && LI.ModalDialogBox && LI.Spinner) {
                        j.css = "css!" + j.css
                    }
                    LI.Share.jsAssets.push(j.js);
                    LI.Share.cssAssets.push(j.css);
                    this._$el.off(g)
                }
            }
            if (h) {
                h.preventDefault()
            }
            if (!LI.Share.assetsUrlPromise) {
                if (LI.Share.jsAssets.length && LI.Share.cssAssets.length) {
                    LI.Share.assetsUrlPromise = $.Deferred().resolve().promise()
                } else {
                    LI.Share.assetsUrlPromise = $.get(this._config.assetUrl).done(_.bind(i, this))
                }
            }
            return LI.Share.assetsUrlPromise
        },
        _loadDialog: function(h) {
            var i = this;
            h.preventDefault();
            function k() {
                if (LI.SharingDialog.Version === "v3" && LI.ModalDialogBox && LI.Spinner) {
                    i._openDialog(h)
                } else {
                    i._openOldDialog(h)
                }
            }
            function j() {
                if (LI.injectAlert) {
                    LI.injectAlert(LI.i18n.get("share-dialog-error-timeout"), "error")
                }
            }
            this._loadAssetUrls().then(k, j)
        },
        _submitSuccess: function(h) {},
        beforeDecoration: function() {
            _.defaults(this._config, c);
            if (this._config.url && this._$el.attr("href") === "#") {
                this._$el.attr("href", this._config.url)
            }
            LI.Share.jsAssets = LI.SharingDialog.Scripts || [];
            LI.Share.cssAssets = LI.SharingDialog.Styles || [];
            this._dialogVersion = LI.SharingDialog.Version
        },
        attachEventListeners: function() {
            if (this._config.delegateSelector) {
                this._$el.on(g, this._config.delegateSelector, this._loadAssetUrls);
                this._$el.on(d, this._config.delegateSelector, this._loadDialog)
            } else {
                this._$el.on(g, this._loadAssetUrls);
                this._$el.on(d, this._loadDialog)
            }
            LI.Events.on(b, this._submitSuccess)
        },
        afterInit: function() {
            this.openAndFetch = this._loadDialog;
            if (this._config.lazyEvent) {
                this._loadDialog(this._config.lazyEvent)
            }
        }
    }
});
(function() {
    LI.define("SlideshareViewer");
    var a = "width", d = "height", c = "max", b = {
        width: d,
        height: a
    };
    LI.SlideshareViewer = function(g, e) {
        e || (e = {});
        var f = {
            iframe: function() {
                var i;
                e.constraint || (e.constraint = a);
                e.toolbarHeight || (e.toolbarHeight = 30);
                if (e.aspectRatio) {
                    h(e.aspectRatio)
                } else {
                    if (e.aspectRatioEl) {
                        i = YDom.get(e.aspectRatioEl);
                        if (i.height && i.width) {
                            h(i.width / i.height)
                        } else {
                            i.onload = function() {
                                if (this.height && this.width) {
                                    h(this.width / this.height)
                                }
                            }
                        }
                    }
                }
            },
            img: function() {
                var i = g.src.replace("-large", "-original");
                YEvent.on(g, "click", function() {
                    window.open(i)
                })
            }
        };
        if (g && g.tagName && f.hasOwnProperty(g.tagName.toLowerCase())) {
            f[g.tagName.toLowerCase()]()
        }
        function h(k) {
            if (!isNaN(k)&&!(e.rejectTinyAspectRatio && k < e.minAspectRatio)) {
                k = Math.max(k, e.minAspectRatio || 0);
                var m = {}, j = e.constraint, l = b[j], i = e[j] || g[j];
                m[j] = Math.min(i, e[c + j] || Infinity);
                m[l] = m[j] * Math.pow(k, (j === a?-1 : 1));
                if (e[c + l] && m[l] > e[c + l]) {
                    m[l] = e[c + l];
                    m[j] = m[l] * Math.pow(k, (l === a?-1 : 1))
                }
                if (m.width && m.height) {
                    m = {
                        width: Math.floor(m.width),
                        height: Math.floor(m.height) + e.toolbarHeight
                    };
                    g.width = m.width;
                    g.height = m.height;
                    g.style.width = m.width + "px";
                    g.style.height = m.height + "px"
                }
            }
        }
    }
})(undefined);
LI.define("ShareImageChooser");
LI.ShareImageChooser = function(d, e) {
    var e = {
        images: e.images || [],
        origImages: e.origImages || [],
        current: 0,
        total: e.images.length,
        imgInputID: (e.imgInputID) ? e.imgInputID: null,
        imgSelectedIdxID: (e.imgSelectedIdxID) ? e.imgSelectedIdxID: null,
        imgIdxLengthID: (e.imgIdxLengthID) ? e.imgIdxLengthID: null,
        showGalleryID: (e.showGalleryID) ? e.showGalleryID: null
    };
    var g = Y$("img", d, true), h = Y$(".previous", d, true), a = Y$(".next", d, true), j = Y$(".current", d, true), m = Y$(".controls", d, true), k = Y$(".total", d, true), b = YDom.get(e.showGalleryID), i = YDom.get(e.imgInputID), n = YDom.get(e.imgIdxLengthID);
    function o(p) {
        YEvent.preventDefault(p);
        var q = YEvent.getTarget(p);
        if (YDom.hasClass(q, "next") || YDom.getAncestorByClassName(q, "next")) {
            e.current++;
            if (e.current >= e.images.length) {
                l(0)
            } else {
                l(e.current)
            }
        }
        if (YDom.hasClass(q, "previous") || YDom.getAncestorByClassName(q, "previous")) {
            e.current--;
            if (e.current < 0) {
                l(e.images.length - 1)
            } else {
                l(e.current)
            }
        }
    }
    function l(p) {
        e.current = p;
        var q = e.origImages[p] || e.images[p];
        if (e.images[p]) {
            g.src = e.images[p]
        }
        j.innerHTML = p + 1;
        if (i && q) {
            i.value = q
        }
        if (YDom.get(e.imgSelectedIdxID)) {
            YDom.get(e.imgSelectedIdxID).value = e.current
        }
    }
    function f() {
        var u = [], s = 1, q, w = document.createElement("div"), t = function(x) {
            var y = YDom.getRegion(this);
            if (parseInt(y.width, 10) > 60 && parseInt(y.height, 10) > 60) {
                u.push(this.src)
            }
            s++;
            v()
        }, p = function(x) {
            s++;
            v()
        };
        document.body.appendChild(w);
        YDom.setStyle(w, "position", "absolute");
        YDom.setStyle(w, "left", "70000px");
        for (var r = 0;
        e.images.length > r;
        r++) {
            q = null;
            if (r === 0) {
                u.push(e.images[0])
            } else {
                q = document.createElement("img");
                w.appendChild(q);
                YEvent.on(q, "load", t);
                YEvent.on(q, "error", p);
                q.src = e.images[r]
            }
        }
        function v() {
            if (s === e.images.length) {
                document.body.removeChild(w);
                e.images = u;
                if (u.length > 1) {
                    LI.show(m)
                }
                k.innerHTML = u.length;
                YEvent.on([h, a], "click", o)
            }
        }
    }
    function c(p) {
        var r = YEvent.getTarget(p), q = e.current;
        if (r.checked && i) {
            i.value = e.origImages[q] || e.images[q] || "";
            YDom.setStyle(d, "visibility", "visible")
        } else {
            e.origImages[q] = i.value;
            YDom.setStyle(d, "visibility", "hidden");
            i.value = ""
        }
    }
    YEvent.on([h, a], "click", YEvent.preventDefault);
    if (e.images.length > 1) {
        f()
    }
    if (n) {
        n.value = e.images.length
    }
    if (b) {
        YEvent.on(b, "click", c);
        b.checked = true
    }
    l(0)
};
LI.define("JobsForYou");
LI.JobsForYou = function(d, c) {
    var c = c || {}, a = document.getElementById("recJobs");
    var f = function() {
        YEvent.on(YDom.getElementsByClassName("remove", "a", a), "click", e);
        if (c.tracking) {
            YEvent.on(YDom.getElementsByClassName("track-job", "a", a), "click", b)
        }
        var g = YDom.getElementsByClassName("droplist", "div", a);
        YEvent.on(g, "mouseover", function(h) {
            YDom.addClass(this, "open");
            YDom.setStyle(this, "position", "relative")
        });
        YEvent.on(g, "mouseout", function(h) {
            LI.DropListMgr.closeAll();
            YDom.removeClass(this, "open");
            YDom.setStyle(this, "position", "static")
        })
    };
    var b = function(j) {
        var i = YEvent.getTarget(j);
        if (i.nodeName.toLowerCase() != "a") {
            i = YDom.getAncestorByTagName(i, "a")
        }
        var h = i.getAttribute("data-li-trk-url"), g = i.href;
        if (h == "" || h == null) {
            return
        }
        YEvent.stopEvent(j);
        YAHOO.util.Connect.asyncRequest("GET", h, {
            success: function(k) {
                window.location.href = g
            },
            failure: function(k) {
                window.location.href = g
            },
            timeout: 1000
        })
    };
    var e = function(j) {
        YEvent.stopEvent(j);
        var i = YEvent.getTarget(j), k = YDom.getAncestorByClassName(i, "job"), g = YDom.hasClass(k, "sponsored"), h = Y$("li.extra" + (g ? ".sponsored" : ".organic"), a), l = new YAHOO.util.Anim(k, {
            opacity: {
                to: 0
            }
        }, 0.3);
        YAHOO.util.Connect.asyncRequest("GET", i.href, {
            timeout: 10000
        });
        l.onComplete.subscribe(function() {
            k.parentNode.removeChild(k);
            var n = null, o = YDom.getChildrenBy(a, function(r) {
                return (!YDom.hasClass(r, "extra")&&!YDom.hasClass(r, "empty-message"))
            }), q = document.getElementById("recJobs-empty-message"), p = document.getElementById("recjobs-see-more");
            if (h.length) {
                n = h[0];
                YDom.removeClass(n, "extra");
                h = h.slice(1)
            } else {
                if (!o.length && q) {
                    YDom.addClass(d, "empty");
                    n = q
                }
            }
            if (!h.length) {
                if (p&&!c.hasMoreRecJobs) {
                    LI.hide(p)
                }
            }
            if (n) {
                YDom.setStyle(n, "opacity", 0);
                var m = new YAnim(n, {
                    opacity: {
                        to: 1
                    }
                }, 0.8);
                m.animate()
            }
        });
        l.animate()
    };
    f()
};
LI.define("GroupsForYou");
LI.GroupsForYou = function(c, b) {
    var b = b || {}, d = document.getElementById("recGroups");
    var e = function() {
        if (b.tracking) {
            YEvent.on(YDom.getElementsByClassName("track-group", "a", d), "click", a)
        }
    };
    var a = function(i) {
        var h = YEvent.getTarget(i);
        if (h.nodeName.toLowerCase() != "a") {
            h = YDom.getAncestorByTagName(h, "a")
        }
        var g = h.getAttribute("data-li-trk-url"), f = h.href;
        if (!g) {
            return
        }
        YEvent.stopEvent(i);
        YAHOO.util.Connect.asyncRequest("GET", g, {
            success: function(j) {
                window.location.href = f
            },
            failure: function(j) {
                window.location.href = f
            },
            timeout: 1000
        })
    };
    e()
};
LI.define("CompaniesForYou");
LI.CompaniesForYou = function(d, c) {
    var c = c || {}, b = document.getElementById("recCompanies");
    var e = function() {
        if (c.tracking) {
            YEvent.on(YDom.getElementsByClassName("track-company", "a", b), "click", a)
        }
    };
    var a = function(i) {
        var h = YEvent.getTarget(i);
        if (h.nodeName.toLowerCase() != "a") {
            h = YDom.getAncestorByTagName(h, "a")
        }
        var g = h.getAttribute("data-li-trk-url"), f = h.href;
        if (!g) {
            return
        }
        YEvent.stopEvent(i);
        YAHOO.util.Connect.asyncRequest("GET", g, {
            success: function(j) {
                window.location.href = f
            },
            failure: function(j) {
                window.location.href = f
            },
            timeout: 1000
        })
    };
    e()
};
(function() {
    if (LI.BalloonCalloutManager !== undefined) {
        return
    }
    LI.define("BalloonCalloutManager");
    LI.BalloonCalloutManager = (function() {
        var f = 500, p = f, d = 100, u = "callout-overlay", y = "callout-", n = '<span class="callout-arrow"></span>', h = {}, j = {
            zIndex: 10,
            constraintoviewport: true
        }, v = null, A = false, i = null, l = null, m = null, c = false, s = {}, g = new YAHOO.util.KeyListener(document, {
            keys: 27
        }, {
            fn: function() {
                if (i) {
                    i.close(null)
                }
            }
        });
        var b = function(C, B) {
            h[C] = B
        };
        var x = function(B) {
            delete h[B]
        };
        var q = function() {
            A = true
        };
        var r = function() {
            A = false;
            k()
        };
        var w = function(J) {
            var G = J.config, I, D;
            if (m) {
                window.clearTimeout(m);
                m = null;
                i = null;
                YDom.removeClass(l, "shown")
            }
            if (i) {
                i.close()
            }
            i = J;
            if (G.relativeToTrigger === true) {
                v.cfg.setProperty("constraintoviewport", false)
            }
            if (G.zIndex !== null && G.zIndex !== undefined) {
                v.cfg.setProperty("zIndex", G.zIndex)
            }
            f = G.persist ? d : p;
            YDom.setStyle(l, "width", G.width);
            l.className = [G.type, " ", y, G.orientation, " ", G.id].join("");
            if (!G.cacheCalloutContent && G.id) {
                v.setBody(document.getElementById(G.id).innerHTML + n)
            } else {
                v.setBody(G.content + n)
            }
            v.render(document.body);
            v.cfg.setProperty("context", [J.el, G.overlayCorner, G.contextCorner]);
            l.dimensions = o(l);
            J.el.dimensions = o(J.el);
            I = G.orientation.split("-");
            D = s[I[0]](J.el, l, I);
            D.dx += G.offsetX;
            D.dy += G.offsetY;
            YDom.setXY(l, [l.dimensions.x + D.dx, l.dimensions.y + D.dy]);
            if (YAHOO.env.ua.ie === 6) {
                v.moveTo([l.dimensions.x + D.dx, l.dimensions.y + D.dy])
            }
            YDom.addClass(l, "shown");
            if (G.eventsOnInternalElements) {
                var C = G.eventsOnInternalElements;
                if (C.elementClass && C.elementClass !== "") {
                    var F = YDom.getElementsByClassName(C.elementClass), H = F.length;
                    for (var E = 0, B;
                    E < H;
                    E++) {
                        B = F[E];
                        YEvent.purgeElement(B, false, C.elementEvent);
                        YEvent.on(B, C.elementEvent, J[C.elementAction], J, true)
                    }
                }
                c = true
            }
            if (G.persist) {
                g.enable()
            }
        };
        s = {
            top: function(H, C, B, E) {
                var I = H.dimensions || o(H), G = C.dimensions || o(C), D, F;
                E = E || {};
                if (B[0] === "top") {
                    E.dx = I.x + 0.5 * I.width - (G.x + 0.5 * G.width);
                    E.dy = I.y + I.height - G.y;
                    if (B[1]) {
                        this[B[1]](H, C, B, E)
                    }
                } else {
                    D = Y$(".callout-arrow", C, true);
                    F = o(D);
                    F.height = F.height || 0;
                    E.dy += (0.5 * G.height - 0.5 * F.height)
                }
                return E
            },
            right: function(H, C, B, E) {
                var I = H.dimensions || o(H), G = C.dimensions || o(C), D, F;
                E = E || {};
                if (B[0] === "right") {
                    E.dx = I.x - (G.x + G.width);
                    E.dy = I.y + 0.5 * I.height - (G.y + 0.5 * G.height);
                    if (B[1]) {
                        this[B[1]](H, C, B, E)
                    }
                } else {
                    D = Y$(".callout-arrow", C, true);
                    F = o(D);
                    F.width = F.width || 0;
                    E.dx += ( - 0.5 * G.width + 0.5 * F.width)
                }
                return E
            },
            bottom: function(H, C, B, E) {
                var I = H.dimensions || o(H), G = C.dimensions || o(C), D, F;
                E = E || {};
                if (B[0] === "bottom") {
                    E.dx = I.x + 0.5 * I.width - (G.x + 0.5 * G.width);
                    E.dy = I.y - (G.y + G.height);
                    if (B[1]) {
                        this[B[1]](H, C, B, E)
                    }
                } else {
                    D = Y$(".callout-arrow", C, true);
                    F = o(D);
                    F.height = F.height || 0;
                    E.dy += ( - 0.5 * G.height + 0.5 * F.height)
                }
                return E
            },
            left: function(H, C, B, E) {
                var I = H.dimensions || o(H), G = C.dimensions || o(C), D, F;
                E = E || {};
                if (B[0] === "left") {
                    E.dx = I.x + I.width - G.x;
                    E.dy = I.y + 0.5 * I.height - (G.y + 0.5 * G.height);
                    if (B[1]) {
                        this[B[1]](H, C, B, E)
                    }
                } else {
                    D = Y$(".callout-arrow", C, true);
                    F = o(D);
                    F.width = F.width || 0;
                    E.dx += (0.5 * G.width - 0.5 * F.width)
                }
                return E
            }
        };
        var o = function(D) {
            var C = YDom.getXY(D), F, B, E;
            if (!C ||!C.length) {
                return {}
            }
            F = D.getBoundingClientRect();
            E = parseInt(F.right - F.left, 10);
            B = parseInt(F.bottom - F.top, 10);
            return {
                height: B,
                width: E,
                x: C[0],
                y: C[1]
            }
        };
        var z = function(C) {
            var B = i&&!i.isActive();
            if ((!A && B) || C) {
                v.setBody("");
                i = null;
                YDom.removeClass(l, "shown");
                g.disable()
            }
        };
        var k = function() {
            if (!m) {
                m = window.setTimeout(function() {
                    window.clearTimeout(m);
                    m = null;
                    z(false)
                }, LI.BALLOON_CALLOUT_HIDE_DELAY || f)
            }
        };
        var t = function() {
            z(true)
        };
        var e = function() {
            v = new YAHOO.widget.Overlay(u, j);
            v.render(document.body);
            l = YDom.get(u);
            YEvent.on(l, "mouseover", q);
            YEvent.on(l, "mouseout", r);
            if (LI.Events && typeof LI.Events.trigger === "function") {
                LI.Events.trigger("LI.BalloonCalloutManager:initialized")
            }
        };
        var a = function() {
            return i
        };
        YEvent.onDOMReady(function() {
            if (YAHOO && YAHOO.widget && YAHOO.widget.Overlay) {
                e()
            } else {
                var B;
                if (!(LI && LI.UrlPackage && LI.UrlPackage.containerCore)) {
                    throw new Error("The package url for container-core does not exist.")
                }
                B = LI.UrlPackage.containerCore;
                YAHOO.util.Get.script(B, {
                    onSuccess: e,
                    onFailure: function() {
                        throw new Error("Failed to load dependency: " + B)
                    }
                })
            }
        });
        return {
            register: b,
            destroy: x,
            overlay: v,
            show: w,
            hide: k,
            showing: a,
            forceClose: t
        }
    })()
})();
LI.define("BalloonCallout");
LI.BalloonCallout = function(c, r) {
    var p = LI.BalloonCalloutManager, b = null, f = 350, d = "hover", a = YDom.get("callout-overlay") || null, m = {
        "left": ["tl", "tr", 5, 0],
        "right": ["tr", "tl", - 5, 0],
        "top": ["tl", "tl", 0, 5],
        "bottom": ["bl", "tl", 0, - 5],
        "top-left": ["tl", "bl", 0, 5],
        "top-right": ["tr", "br", 0, 5],
        "right-top": ["tr", "tl", - 5, 0],
        "right-bottom": ["br", "bl", - 5, 0],
        "bottom-right": ["br", "tr", 0, - 5],
        "bottom-left": ["bl", "tl", 0, - 5],
        "left-bottom": ["bl", "br", 5, 0],
        "left-top": ["tl", "tr", 5, 0]
    }, n, k, h, g;
    r = r || {};
    if (c.tagName && c.tagName.toLowerCase() === "a" && c.href.indexOf("#")>-1) {
        r.anchor = true;
        r.id = c.href.substring(c.href.indexOf("#") + 1)
    } else {
        r.anchor = false
    }
    r = {
        anchor: r.anchor,
        width: r.width || 300,
        id: r.id || "",
        overlayCorner: r.overlayCorner || null,
        contextCorner: r.contextCorner || null,
        orientation: r.orientation || "left-top",
        content: r.content || null,
        events: r.events || ["mouseover", "mouseout"],
        eventsOnInternalElements: r.eventsOnInternalElements || null,
        type: r.type || "balloon-callout",
        offsetX: r.offsetX || 0,
        offsetY: r.offsetY || 0,
        relativeToTrigger: r.relativeToTrigger || false,
        zIndex: r.zIndex,
        persist: r.persist || false,
        delayOpen: r.delayOpen || false,
        cacheCalloutContent: r.cacheCalloutContent !== undefined ? r.cacheCalloutContent: true,
        toolTipTextAttr: r.toolTipTextAttr || null,
        openCallback: r.openCallback || null,
        closeCallback: r.closeCallback || null
    };
    var o = function(s) {
        YEvent.preventDefault(s);
        if (r.persist) {
            YEvent.stopPropagation(s)
        }
    };
    var q = function(s) {
        this.persist = true;
        if (YAHOO.util.Dom.hasClass(s.target, "callout-close")) {
            j()
        }
    };
    var e = function(s) {
        var t = false;
        if (s.button) {
            t = (s.button === 2);
            this.persist = t ? true : false
        }
        if (!this.persist) {
            j.call(this, s)
        } else {
            this.persist = false
        }
    };
    var i = function() {
        var t = this;
        this.active = true;
        YDom.addClass(c, d);
        if (g) {
            n = c.title;
            c.title = ""
        }
        function s() {
            p.show(t);
            t.openEvent.fire();
            if (!a) {
                a = YDom.get("callout-overlay")
            }
            if (r.persist) {
                YEvent.on(a, "click", q, t, true);
                YEvent.on(document, "click", e, t, true);
                var u = YDom.getElementsByClassName("callout-close", null, a);
                if (u.length > 0) {
                    u[0].focus()
                }
            } else {
                YEvent.removeListener(a, "click", q);
                YEvent.removeListener(document, "click", e)
            }
            if (r.openCallback && typeof(r.openCallback) === "function") {
                r.openCallback(t)
            }
        }
        if (r.delayOpen&&!b) {
            b = window.setTimeout(function() {
                b = null;
                s()
            }, f)
        } else {
            s()
        }
    };
    var j = function(s) {
        var t = this;
        this.active = false;
        this.persist = false;
        YDom.removeClass(c, d);
        if (g) {
            c.title = n
        }
        if (r.delayOpen && b) {
            window.clearTimeout(b);
            b = null
        }
        if (s) {
            p.hide()
        } else {
            p.forceClose()
        }
        if (r.persist) {
            YEvent.removeListener(a, "click", q);
            YEvent.removeListener(document, "click", e);
            if (c) {
                c.focus()
            }
        }
        if (r.closeCallback && typeof(r.closeCallback) === "function") {
            r.closeCallback(t)
        }
    };
    var l = function(s) {
        this.active=!this.active;
        if (this.active || this !== p.showing()) {
            i.call(this, s)
        } else {
            if (!r.persist || (r.events[0] !== "mouseover")) {
                j.call(this, s)
            } else {
                this.active = true
            }
        }
    };
    this.isActive = function() {
        return this.active
    };
    this.destroy = function() {
        if (r.anchor) {
            YEvent.removeListener(c, "click", o)
        }
        if (r.persist) {
            YEvent.removeListener(c, r.events[0], l)
        } else {
            YEvent.removeListener(c, r.events[0], i);
            YEvent.removeListener(c, r.events[1], j)
        }
        if (r.eventsOnInternalElements) {
            var w = r.eventsOnInternalElements;
            if (w.elementClass && w.elementClass !== "") {
                var t = YDom.getElementsByClassName(w.elementClass), v = t.length;
                for (var u = 0, s;
                u < v;
                u++) {
                    s = t[u];
                    YEvent.removeListener(s, w.elementEvent, w.elementAction)
                }
            }
        }
        j();
        p.destroy(c.id)
    };
    this.setContent = function(s) {
        if (!s) {
            s = document.getElementById(r.id).innerHTML
        }
        r.content = s
    };
    if (!r.content) {
        r.content = document.getElementById(r.id);
        if (!r.content) {
            throw "Could not find info element"
        } else {
            k = r.content.innerHTML;
            if (r.toolTipTextAttr) {
                n = c.getAttribute(r.toolTipTextAttr);
                k = k.replace("__PLACEHOLDER__", LI.htmlEncode(n))
            }
            r.content = k
        }
    }
    if (r.width !== "auto") {
        r.width += "px"
    }
    if (r.anchor) {
        YEvent.on(c, "click", o)
    }
    if (!r.overlayCorner) {
        r.overlayCorner = m[r.orientation][0]
    }
    if (!r.contextCorner) {
        r.contextCorner = m[r.orientation][1]
    }
    r.offsetX += m[r.orientation][2];
    r.offsetY += m[r.orientation][3];
    this.openEvent = new YAHOO.util.CustomEvent("open");
    YDom.generateId(c, "callout-trigger-");
    g = (r.toolTipTextAttr === "title");
    this.config = r;
    this.el = c;
    this.active = false;
    this.close = j;
    this.open = i;
    this.toggle = l;
    this.persist = false;
    p.register(c.id, this);
    if (r.persist) {
        YEvent.on(c, r.events[0], l, this, true)
    } else {
        YEvent.on(c, r.events[0], i, this, true);
        YEvent.on(c, r.events[1], j, this, true)
    }
};
LI.Controls.register("LI.BalloonCallout");
LI.define("BalloonCalloutDelegator");
LI.BalloonCalloutDelegator = function(c, a) {
    var b = {};
    a = a || {};
    a.dataId = a.dataId ? ("data" + a.dataId) : "data-li-tooltip-id";
    function d(g, e) {
        if (e&&!b[e.id]) {
            a.id = g;
            var f = new LI.BalloonCallout(e, a);
            f.toggle();
            b[e.id] = true
        }
    }
    YEvent.on(c, "mouseover", function(e) {
        var f = YEvent.getTarget(e), g = YDom.getAttribute(f, a.dataId);
        if (!g && YDom.getAttribute(f.parentNode, a.dataId)) {
            f = f.parentNode;
            g = YDom.getAttribute(f, a.dataId)
        }
        if (g) {
            YDom.generateId(f);
            d(g, f);
            YEvent.stopPropagation(e)
        }
    })
};
(function() {
    var r = 300, b = "DDDDDD", k = "E8E8E8", h = /^https?\:\/\/www\.youtube\.com\/watch\?/, j = /^https?\:\/\/youtu\.be\//, u, o = "feed-item", e = "video-container", d = "video-body", l = "video-share", s = "video-shown", v = "share-object", g = "photo", m = "properties", p = "div", q = "a", f = 8;
    function n(x) {
        return h.test(x) || j.test(x)
    }
    function t(y) {
        var x = /[\?&]v=([^&#]*)/.exec(y);
        if (x) {
            return x[1]
        }
        x = /\/([^/]*)$/.exec(y);
        if (x) {
            return x[1]
        }
        return null
    }
    function c(y) {
        var x = null, z;
        if (n(y)) {
            z = t(y);
            if (z) {
                x = {
                    url: "https://www.youtube.com/v/" + z + "?autoplay=1&fs=1&rel=0&color1=" + b + "&color2=" + k,
                    width: "100%",
                    height: r + "px",
                    params: {
                        allowfullscreen: "true",
                        wmode: "transparent",
                        allowScriptAccess: "never"
                    }
                }
            }
        }
        return x
    }
    function a(B) {
        var y = B.url, z = B.id || "player-" + (new Date().getTime()), A = B.width || "100%", J = B.height || "100%", D = B.params || {}, C = B.flashvars || {}, I = D["quality"] || "high", G = "", F = "", x = [], H, E, K = null;
        for (H in D) {
            if (D.hasOwnProperty(H)) {
                G += '<param name="' + H + '" value="' + D[H] + '" />';
                F += " " + H + '="' + D[H] + '" '
            }
        }
        for (H in C) {
            if (C.hasOwnProperty(H)) {
                x[x.length] = H + "=" + C[H]
            }
        }
        if (x.length) {
            E = x.join("&");
            G += '<param name="flashvars" value="' + E + '" />';
            F += ' flashvars="' + E + '" '
        }
        K = '<object id="' + z + '" width="' + A + '" height="' + J + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' + '<param name="movie" value="' + y + '" />' + '<param name="quality" value="' + I + '" />' + G + '<embed name="' + z + '" width="' + A + '" height="' + J + '" src="' + y + '" quality="' + I + '" ' + F + ' type="application/x-shockwave-flash"></embed>' + "</object>";
        return K
    }
    function w() {
        var y = 0, x, A, z;
        if (navigator.plugins && navigator.plugins.length) {
            x = navigator.plugins["Shockwave Flash"];
            if (x && x.description && x.description.length) {
                A = /[0-9]+./;
                y = parseInt(x.description.match(A)[0], 10)
            }
        } else {
            if (YAHOO.env.ua.ie) {
                for (z = (f + 10);
                z >= f;
                z--) {
                    try {
                        x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + z);
                        y = z;
                        break
                    } catch (B) {}
                }
            }
        }
        return (y >= f)
    }
    function i(I) {
        var G = YEvent.getTarget(I), B = G.getAttribute("data-contentpermalink") || (G.parentNode && G.parentNode.getAttribute("data-contentpermalink")), x, J, A, D, C, F, E, H, y;
        function z(K) {
            J = YDom.getAncestorByClassName(K, o);
            C = YDom.getElementsByClassName(e, p, J)[0];
            E = YDom.getElementsByClassName(g, p, J)[0];
            H = YDom.getElementsByClassName(m, p, J)[0];
            A = YDom.getElementsByClassName(v, p, J)[0];
            D = YDom.getElementsByClassName(l, q, A)[0];
            F = YDom.getElementsByClassName(d, p, C)[0];
            A = D || A
        }
        if (B && n(B)) {
            if (u === undefined) {
                u = (!YAHOO.env.ua.mobile && w())
            }
            if (u) {
                YEvent.preventDefault(I);
                z(G);
                if (!C) {
                    location.href = B
                }
                F.innerHTML = a(c(B));
                YDom.setStyle(F, "opacity", 0);
                F.style.height = (A.offsetHeight - 20) + "px";
                A.style.display = "none";
                C.style.display = "block";
                YDom.addClass(E, s);
                YDom.addClass(H, s);
                y = new YAHOO.util.Anim(F, {
                    height: {
                        to: r
                    }
                }, 0.2);
                y.onComplete.subscribe(function() {
                    new YAHOO.util.Anim(F, {
                        opacity: {
                            to: 1
                        }
                    }, 0.2).animate();
                    LI.Events.fire("layout:updated")
                });
                y.animate();
                if (WebTracking) {
                    WebTracking.trackUserAction("NusInlineVideo-play")
                }
            }
        } else {
            if (YDom.hasClass(G, "video-close")) {
                YEvent.stopEvent(I);
                z(G);
                C.style.display = "none";
                A.style.display = "block";
                YDom.removeClass(E, s);
                YDom.removeClass(H, s);
                F.innerHTML = "";
                LI.Events.fire("layout:updated")
            }
        }
    }
    YEvent.onDOMReady(function() {
        YEvent.on("body", "click", i)
    })
})();
