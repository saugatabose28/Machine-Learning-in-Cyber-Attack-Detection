LI.define("HopscotchPlaceholderCallout");
LI.HopscotchPlaceholderCallout = LI.BaseControl.extend(function(b) {
    var a = {
        dependencies: ["scripts/shared/HopscotchCallout"]
    };
    return {
        beforeDecoration: function() {
            _.defaults(this._config, a)
        },
        afterLoad: function() {
            var d, f, c = this._config.calloutOptions, e = this._config.contentId;
            f = document.getElementById(e);
            c.content = f ? f.innerHTML : "";
            d = new LI.HopscotchCallout(this._$el[0], this._config.calloutOptions)
        }
    }
});
LI.define("Lego");
LI.Lego = LI.BaseControl.extend(function(i) {
    var h = "click", q = "string", u = "number", d = "", E = "[data-li-lego-trk-token]", r = "li-lego-trk-token", y = "[data-li-lego-action]", x = "li-lego-action", B = "li-lego-action-name", G = "[data-li-lego-id]", m = "li-lego-id", l = "data-li-lego-id", C = "li-lego-redirect", v = "[data-li-lego-action=IMPRESSION]", D = "time%3E%3D", t = "li-lego-cooloff", z = "POST", f = "GET", k = ".lego-module", I = "fired-primary", w = "a", g = "body", c = "li", b = "IMPRESSION", A = "COOLOFF", s = "PRIMARY_ACTION", F = "DISMISS", o = "NONE", j = "SHOW", H = "NO_DATA", e = "href", n = "4d", a = 3000;
    var p = function(J, K) {
        this.id = (K ? J.id : J.widgetId) || d;
        this.endpoint = (K ? J.endpoint : J.endPoint) || d;
        this.trkToken = (K ? J.trackingToken : J.trackToken) || d;
        this.html = J.html || d
    };
    p.prototype = {
        _autoTrackImpression: function() {
            var K = this, J = $('[data-li-lego-id="' + this.id + '"]');
            if ($.trim(J.html()) === d) {
                this.fire(A, {
                    period: K.parent.coolOffPeriod
                })
            } else {
                this.fire(b)
            }
        },
        _getClickRequestObj: function(K, J, L) {
            var J = J || o, L = L || function() {};
            return {
                url: this.parent.clickUrl,
                postData: "&trkToken=" + this.trkToken + "&actionCategory=" + K + "&actionName=" + J,
                success: L
            }
        },
        _getImpressionRequestObj: function(J) {
            var J = J || j;
            return {
                url: this.parent.impressionUrl,
                postData: "&trkToken=" + this.trkToken + "&visibility=" + J
            }
        },
        _getCooloffRequestObj: function(P, K, N) {
            var J = this.parent.coolOffUrl, M = D + P, L = K.reason || "nodata", N = N || function() {}, O = {};
            if (L === "skip") {
                O = {
                    url: J,
                    postData: "&page=" + K.page + "&layout=" + K.layout + "&slot=" + K.slot + "&group=" + K.group + "&widget=" + K.widget + "&member=" + K.member + "&period=" + M + "&reason=" + L,
                    success: N
                }
            } else {
                O = {
                    url: J,
                    postData: "&token=" + this.trkToken + "&period=" + M + "&reason=" + L,
                    success: N
                }
            }
            return O
        },
        fire: function(K, J) {
            var L, J = J || {};
            if (K === b) {
                L = this._getImpressionRequestObj(J.visibility)
            } else {
                if (K === A) {
                    L = this._getCooloffRequestObj(J.period || this.coolOffPeriod, J, J.success)
                } else {
                    L = this._getClickRequestObj(K, J.actionName, J.success)
                }
            }
            this._sendRequest(L);
            return L
        },
        _sendRequest: function(J) {
            if (J) {
                LI.asyncRequest(z, J.url, {
                    custom: {
                        exception: function() {
                            return false
                        }
                    },
                    success: J.success
                }, J.postData)
            }
        }
    };
    return {
        beforeDecoration: function() {
            var J = this._config, K = J.autoTrackImpressions;
            i.beforeDecoration.call(this);
            this.clickUrl = J.clickUrl || d;
            this.impressionUrl = J.impressionUrl || d;
            this.coolOffUrl = J.coolOffUrl || d;
            this.legoData = J.legoData || [];
            this.coolOffPeriod = J.coolOffPeriod || n;
            this.autoTrackImpressions = K === undefined ? true : K;
            this.displaySize = J.displaySize || Number.POSITIVE_INFINITY;
            this.callbackConfig = J.callbackConfig || {};
            this.memberId = J.memberId || "";
            this.endpointParams = J.endpointParams || {};
            this.slotId = J.slotId || d;
            this.useHierarchicalJSON = J.useHierarchicalJSON || false;
            this.hrefRedirection = J.hrefRedirection || false;
            this.frag = document.createDocumentFragment();
            this._widgets = [];
            this.count = 0;
            this._initLegoModules()
        },
        afterDecoration: function() {
            i.afterDecoration.call(this);
            if (!this.isEmpty()) {
                if (this.autoTrackImpressions) {
                    this._autoTrackImpressions()
                }
            } else {
                this._fetchWidgets()
            }
        },
        attachEventListeners: function() {
            var K = this, J = K._$el, L;
            J.on(h, function(U) {
                var P = $(U.target), O = P.closest(G), R = P.closest(y), Q = K._getWidget(O.data(m)), T = "", M = "", S = "", N = "", V = function() {};
                if (Q && R.length) {
                    M = R.data(x);
                    S = R.data(B);
                    N = R.attr(e);
                    T = R.data(C);
                    if (N && (T !== "off") && K.hrefRedirection) {
                        U.preventDefault();
                        if (N !== "#") {
                            V = function() {
                                window.location.href = N
                            }
                        }
                    }
                    if (M === s) {
                        if (!R.hasClass(I)) {
                            Q.fire(M, {
                                actionName: S,
                                success: V
                            });
                            R.addClass(I)
                        }
                    } else {
                        Q.fire(M, {
                            actionName: S,
                            success: V
                        });
                        if (M === F) {
                            J.fadeOut()
                        }
                    }
                }
            })
        },
        _initLegoModules: function() {
            var J = this.legoData, O = this.slotId, N = this.useHierarchicalJSON, R = [], Q, L, K, P, M;
            J = _.isString(J) ? $.parseJSON(J) : J;
            if (N&&!_.isArray(J) && J.hasOwnProperty(O)) {
                P = J[O];
                if (P.hasOwnProperty("groups")) {
                    M = P.groups;
                    if (_.isArray(M) && M.length && M[0].hasOwnProperty("widgets")) {
                        R = M[0].widgets
                    }
                }
            } else {
                R = J
            }
            if (_.isArray(R)) {
                for (L = 0, Q = R.length;
                L < Q;
                L++) {
                    K = new p(R[L], N);
                    K.parent = this;
                    this._widgets.push(K)
                }
            }
        },
        _fetchWidgets: function() {
            var M = this, L = this._widgets, K = L.length, J = this.finishCallback, O, N;
            if (K) {
                for (O = 0;
                O < K;
                O++) {
                    (function(P) {
                        $.ajax({
                            type: f,
                            timeout: a,
                            beforeSend: function(Q) {
                                Q.setRequestHeader("X-IsAJAXForm", 1)
                            },
                            url: M._buildWidgetEndpoint(P),
                            success: function(Q) {
                                P.html = Q.content
                            },
                            complete: function(Q, R) {
                                if (++M.count >= M._widgets.length) {
                                    M._embedWidgets()
                                }
                            }
                        })
                    })(L[O])
                }
            } else {
                if (J) {
                    J()
                }
            }
        },
        _buildWidgetEndpoint: function(J) {
            var L = this.endpointParams, K = J.endpoint;
            return LI.addParams(K, L)
        },
        _embedWidgets: function() {
            var Q = this._widgets, O = Q.length, N = 0, P = this.displaySize, K = this.beforeEmbed, T = this.finishCallback, S = this.frag, R, M, L, J;
            for (J = 0;
            J < O && N < P;
            J++) {
                M = Q[J];
                L = M.html;
                if (L) {
                    R = document.createElement(c);
                    R.setAttribute(l, M.id);
                    R.innerHTML = M.html;
                    S.appendChild(R);
                    N++
                }
                if (this.autoTrackImpressions) {
                    if (L) {
                        M.fire(b)
                    } else {
                        M.fire(b, {
                            visibility: H
                        })
                    }
                }
            }
            if (K) {
                K()
            }
            this._$el.html(S);
            LI.Controls.parseFragment(this._$el.get(0));
            if (T) {
                T()
            }
        },
        getWidgets: function() {
            var L = this._widgets, K = L.length, J = [], N, M;
            for (N = 0;
            N < K;
            N++) {
                M = L[N];
                if (M.html) {
                    J.push(M)
                }
            }
            return J
        },
        getEmbeddedWidgets: function() {
            return this.getWidgets().slice(0, this.displaySize)
        },
        isEmpty: function() {
            return $.trim(this._$el.html()) === d
        },
        getWidget: function(J) {
            return this._getWidget(J, true)
        },
        _getWidget: function(N, K) {
            var L = K ? this.getWidgets(): this._widgets, J = L.length, O, M;
            if (typeof N === q) {
                for (O = 0;
                O < J;
                O++) {
                    M = L[O];
                    if (M && M.id === N) {
                        return M
                    }
                }
            } else {
                if (typeof N === u) {
                    return L[N]
                }
            }
        },
        _autoTrackImpressions: function() {
            var L = this, K = this._widgets, J = K.length, M;
            for (M = 0;
            M < J;
            M++) {
                K[M]._autoTrackImpression()
            }
        }
    }
});
