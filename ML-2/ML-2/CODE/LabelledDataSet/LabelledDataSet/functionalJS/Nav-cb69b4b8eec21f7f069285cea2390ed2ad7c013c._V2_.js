/* NavAuiShim */
(function(a) {
    a.execute(function() {
        (function(b) {
            document.createElement("header");
            var a = function(b) {
                function c(a, b, c) {
                    a[c] = function() {
                        d._replay.push(b.concat({
                            m: c,
                            a: [].slice.call(arguments)
                        }))
                    }
                }
                var d = {};
                d._sourceName = b;
                d._replay = [];
                d.getNow = function(a, b) {
                    return b
                };
                d.when = function() {
                    var b = [{
                        m: "when",
                        a: [].slice.call(arguments)
                    }
                    ], a = {};
                    c(a, b, "run");
                    c(a, b, "declare");
                    c(a, b, "publish");
                    c(a, b, "build");
                    return a
                };
                c(d, [], "declare");
                c(d, [], "build");
                c(d, [], "publish");
                c(d, [], "importEvent");
                a._shims.push(d);
                return d
            };
            a._shims = [];
            if (!b.$Nav)
                b.$Nav = a("rcx-nav");
            if (!b.$Nav.make)
                b.$Nav.make = a
        })(window)
    })
})(function() {
    var a = window.AmazonUIPageJS || P, b = a.attributeErrors;
    return b ? b("NavAuiShim") : a
}());; /* RetailSearchAutocompleteAuiAssets */
(function(E) {
    E.execute(function() {
        if (!window.$SearchJS && window.$Nav)
            window.$SearchJS = $Nav.make("sx");
        if (window.$SearchJS) {
            $SearchJS.when("jQuery").run("autocomplete-lib", function(a) {
                (function(v, D) {
                    var V;
                    function Q(e, c, g, f, k) {
                        e.append(a('<input type="hidden"/>').attr(k ? "class" : "id", c).attr("name", g).attr("value", f))
                    }
                    function F(e, c) {
                        var a = e.find('option[value$="' + c + '"]');
                        a.length > 1 && (a = a[0]);
                        return a
                    }
                    function Ca(e, c, g) {
                        var f = u;
                        e == "search-alias=aps"&&!c && (c = F(f, e).text());
                        a("#" + ha).css("visibility",
                        "hidden");
                        a(Da).text(c);
                        f.val(e);
                        g || (opt.sb.focus(), W(opt.form, e))
                    }
                    function W(a, c, g, f, k) {
                        var l = g != null && f;
                        if (l || c != null) {
                            var j = a.attr("action"), r = f.type === B.getType();
                            if (!r&&!l) {
                                var G;
                                !c ||!c.length || (G = c.indexOf("="))==-1 ? f = "" : (f = c.substr(G + 1), k = f.indexOf("-") + 1, r = f.substr(0, 3), f = k ? r : r + f.charAt(k));
                                c = "dd_" + f
                            } else 
                                c = g + "_" + (r ? f.alias : f.sgIndex), r && (c += "_" + B.buildDepartmentReftagSuffix(f)), c += "_" + k;
                            f = c;
                            E.test(j) ? j = l && X.test(j) ? j.replace(X, "$1_" + f) : j.replace(E, "ref=nb_sb_" + f) : (j.charAt(j.length - 1) != "/" &&
                            (j += "/"), j += f);
                            a.attr("action", j)
                        }
                    }
                    function Ya(a, c, g) {
                        var f, k, l, j, r, G = c || 0;
                        return {
                            callSuggestionsService: function(a) {
                                f = a;
                                k = "&noCacheIE=" + (new Date).getTime();
                                l = document.getElementsByTagName("head").item(0);
                                j = "JscriptId" + G;
                                r = document.createElement("script");
                                r.setAttribute("type", "text/javascript");
                                r.setAttribute("charset", "utf-8");
                                r.setAttribute("src", f + k);
                                r.setAttribute("id", j);
                                l.appendChild(r)
                            },
                            cleanup: function() {
                                try {
                                    l.removeChild(r)
                                } catch (a) {}
                            },
                            keywords: a,
                            counter: G,
                            imeEnhUsed: g
                        }
                    }
                    var E = /(ref=[-\w]+)/,
                    ia = /^\s+/, ja = /\s+/g, X = /(dd_[a-z]{3,4})(_|$)[\w]*/, Za = /\{department\}/g, $a = /\+/g, ab = /search-alias\s*=\s*([\w-]+)/, bb = /node\s*=\s*([\d]+)/, cb = /bbn\s*=\s*([\d]+)/, db = /^me=([0-9A-Z]*)/, Da = "#ddCrtSel", ha = "searchDropdown_pop_conn", ka = Object.prototype.toString, u;
                    V = typeof uet == "function" && typeof uex == "function";
                    a.isArray = a.isArray || function(a) {
                        return ka.call(a) === "[object Array]"
                    };
                    var eb = function(e, c, g, f) {
                        var k = a(g), l = c.pe || e.parent(), j = null, r=!1, G=!1, e = function() {}, x = a.extend({}, {
                            afterCreate: e,
                            beforeShow: e,
                            afterShow: e,
                            beforeHide: e,
                            beforeHtmlChange: e,
                            afterHtmlChange: e,
                            onWindowResize: e
                        }, f), s = function(a) {
                            x.beforeHtmlChange.call(k, a);
                            k.html(a);
                            x.afterHtmlChange.call(k, a)
                        }, u = function() {
                            x.beforeShow.call(k, j);
                            k.show();
                            j && j.show();
                            x.afterShow.call(k, j)
                        }, t = function() {
                            r=!0;
                            G && u();
                            x.afterCreate.call(k, j)
                        };
                        $Nav.when("nav.inline").run("SearchSuggestSetup", function() {
                            a("#nav-bar-left").length === 1&&!a.isArray(c.src) ? $Nav.when("nav.createFlyout").run("SearchSuggestFlyout", function(a) {
                                j = a({
                                    name: "Search Suggest",
                                    content: k,
                                    className: "srch_sggst_flyout",
                                    align: {
                                        base: l,
                                        from: "bottom left",
                                        to: "top left"
                                    },
                                    onAlign: function() {
                                        var a = l.width();
                                        k.css({
                                            width: a
                                        })
                                    }
                                });
                                t()
                            }) : setupStatic()
                        });
                        this.getNode = function() {
                            return k
                        };
                        this.html = function(a) {
                            s(a);
                            return this
                        };
                        this.setupStatic = function() {
                            k.appendTo(l);
                            a(v).resize(function(a) {
                                x.onWindowResize.call(k, a)
                            });
                            t()
                        };
                        this.visible = function() {
                            return r ? j ? j.isVisible() : k.css("display") != "none" : !1
                        };
                        this.hide = function() {
                            r ? (x.beforeHide.call(k, j), j && j.hide(), k.hide(), s("")) : G=!1;
                            return this
                        };
                        this.show =
                        function() {
                            r ? u() : G=!0;
                            return this
                        }
                    }, la = function(a) {
                        var c, g, f, k, l = 0, j = 0;
                        this.keydown = function(a) {
                            k=!1;
                            l != j && (l = j = 0);
                            return a ? f = a : f
                        };
                        this.keyup = function(f, l) {
                            if (f != D)
                                if (g = f, c && c.length > 0 && (g == 8 || g == 46))
                                    c = c.substring(0, c.length - 1), j == 1 && (j = 0), k=!0, a && a(l && l.length > 0 ? l + c : c);
                                else if (g >= 65 && g <= 90) {
                                    var u = String.fromCharCode(g);
                                    c += u;
                                    k=!0;
                                    j == 1 ? j = 0 : a && a(l && l.length > 0 ? l + c : c)
                                }
                            return g
                        };
                        this.isImeInput = function() {
                            return f == 229 || f == 197
                        };
                        this.reset = function(a) {
                            a && l == 1 ? l = 0 : (f = g = D, c = "");
                            a && (k=!1)
                        };
                        this.isValidKey =
                        function() {
                            return k
                        };
                        this.setFlag = function() {
                            j = l = 1
                        }
                    }, fb = function(e, c) {
                        function g(a) {
                            a !== D && (j = r = a, e.val(a));
                            return e.val().replace(ia, "").replace(ja, " ")
                        }
                        function f(a) {
                            a !== D && (u = a);
                            return u
                        }
                        function k(a) {
                            var e = g();
                            if (e != j && (a || e != r))
                                j = e, s && s.reset(!0), f(e), c.change(e)
                        }
                        function l() {
                            return x && c.opt.imeEnh && s.isValidKey()
                        }
                        var j, r, u, x=!1, s = c.opt.imeEnh && new la(function(a) {
                            f(a);
                            c.change(a)
                        }), v=!1;
                        V && ue.tag(e.get(0) === document.activeElement ? "iss-late" : "iss-on-time");
                        e.keydown(function(a) {
                            var e = a.keyCode,
                            f = e == 38?-1 : e == 40 ? 1 : 0;
                            s && s.keydown(e);
                            x = e == 229 || e == 197?!0 : e >= 48 && e <= 57 || e >= 65 && e <= 90?!1 : x;
                            f && (c.adjust(f), g() != "" && a.preventDefault());
                            c.opt.doCTWKeydown && c.opt.doCTWKeydown(a)
                        }).keyup(function(a) {
                            a = a.keyCode;
                            switch (a) {
                            case 13:
                                c.hide();
                                break;
                            case 27:
                                return c.dismiss();
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                                break;
                            default:
                                s && s.isImeInput() ? s.keyup(a, j) : k(!0)
                            }
                        }).keypress(function(a) {
                            switch (a.keyCode) {
                            case 13:
                                return c.submitEnabled();
                            default:
                                c.keyPress()
                            }
                        }).select(function() {
                            s && s.setFlag()
                        }).blur(function() {
                            c.dismiss();
                            s && s.reset()
                        }).focus(function() {
                            s && s.reset()
                        }).click(function() {
                            c.click(g());
                            s && s.reset()
                        });
                        e.bind("compositionstart", function() {
                            v=!0
                        }).bind("compositionend", function() {
                            setTimeout(function() {
                                return function() {
                                    v=!1
                                }
                            }(), 200)
                        });
                        u = j = g();
                        this.keyword = function(a) {
                            return g(a)
                        };
                        this.userInput = function(a) {
                            return f(a)
                        };
                        this.size = function() {
                            return c.newDesign ? {
                                width: a("#nav-iss-attach").outerWidth(),
                                height: a("#nav-iss-attach").outerHeight()
                            } : {
                                width: e.outerWidth(),
                                height: e.outerHeight()
                            }
                        };
                        this.pos = function() {
                            return c.newDesign ?
                            a("#nav-iss-attach").position() : e.position()
                        };
                        this.offset = function() {
                            return e.offset()
                        };
                        this.parent = function() {
                            return e.parent()
                        };
                        this.hasFocus = function() {
                            return e.get(0) === document.activeElement
                        };
                        this.cursorPos = function() {
                            var a = e.get(0);
                            if ("selectionStart"in a)
                                return a.selectionStart;
                            else if (document.selection) {
                                a.focus();
                                var c = document.selection.createRange(), f = document.selection.createRange().text.length;
                                c.moveStart("character", - a.value.length);
                                return c.text.length - f
                            }
                            return - 1
                        };
                        this.update = k;
                        this.isImeEnhUsed =
                        l;
                        this.blur = function() {
                            e.blur()
                        };
                        this.focus = function() {
                            var a = e.val();
                            e.focus().val("").val(a)
                        };
                        this.keydown = function(a) {
                            e.keydown(a)
                        };
                        this.click = function(a) {
                            e.click(a)
                        };
                        this.onFocus = function(a) {
                            e.focus(a)
                        };
                        this.onBlur = function(a) {
                            e.blur(a)
                        };
                        this.isImeUsed = function() {
                            return x
                        };
                        this.shouldAddIMEReftag = function() {
                            return c.opt.ime && v || l()
                        }
                    };
                    v.AutoComplete = function(e) {
                        function c(d) {
                            a.extend(b, Fa, d);
                            L = b.isNavInline && L;
                            Ga = B.createDataArray(a, b);
                            d = b.src;
                            Y = a.isArray(d);
                            g(b, "sb");
                            if (b.sb) {
                                w = new fb(b.sb, {
                                    adjust: k,
                                    hide: j,
                                    dismiss: r,
                                    change: Y ? G: x,
                                    submitEnabled: s,
                                    keyPress: V,
                                    click: l,
                                    newDesign: L,
                                    opt: b
                                });
                                g(b, "pe");
                                y = new eb(w, b, '<div id="srch_sggst" style="display:none"/>', {
                                    afterCreate: ma,
                                    onWindowResize: ma,
                                    beforeShow: ma
                                });
                                g(b, "form");
                                g(b, "valInput");
                                g(b, "dd");
                                g(b, "submit");
                                u = b.dd;
                                b.protocol = b.protocol || v.document.location.protocol || "http:";
                                u && (Z = u.val());
                                Y && (M = d[0], Ha = d[1], b.sb.removeAttr("style"), y.setupStatic());
                                if (b.submit)
                                    f("disabled"), b.submitImgDef = b.submit.attr("src"), b.submitToggle = b.submitImgDef && b.submitImg;
                                b.ime && v.setInterval(function() {
                                    w.update()
                                }, 20);
                                $SearchJS.importEvent("navbarPromos");
                                $SearchJS.when("navbarPromos").run("autocomplete-navbarPromos", function() {
                                    R = v.navbar.issPromotions(3)
                                })
                            }
                        }
                        function g(d, b, n) {
                            if (n = d[b])
                                if ((n = a(n)) && n.length)
                                    return d[b] = n;
                            delete d[b]
                        }
                        function f(d) {
                            b.submit.prop ? b.submit.prop("disabled", d) : b.submit.attr("disabled", d)
                        }
                        function k(d) {
                            if (!(C <= 0))
                                try {
                                    Ia(), d > 0 && o >= C - 1 ? o =- 1 : d < 0 && o < 0 ? o = C - 1 : o += d, ca() && o === 0&&!Ja && (o -= 1, Ja=!0), Ka(!0)
                            } catch (a) {}
                        }
                        function l(d) {
                            d.length ? b.triggerISSOnClick &&
                            !y.visible() && a("#navFooter") && a("#navFooter").is(":visible") && na() : oa()
                        }
                        function j() {
                            !b.ime && $()
                        }
                        function r() {
                            return y.visible() ? (setTimeout(function() {
                                return function() {
                                    $()
                                }
                            }(), 300), o =- 1, S == "sugg" && pa(), !1) : !0
                        }
                        function G(d) {
                            A = [];
                            if (d.length) {
                                N =- 1;
                                if (b.multiword)
                                    for (var a = t(H()), a = RegExp("(^|(?:\\s))" + a, "i"), n = 0, I = M.length, c; n < I && A.length < b.maxSuggestions; n++)
                                        c = M[n], t(c).match(a) && (A.push({
                                            keyword: c,
                                            i: n
                                        }), N==-1 && (N = n));
                                else {
                                    I = 0;
                                    c = M.length - 1;
                                    for (var e =- 1, q = "", a = t(H()), f = a.length; I <= c;)
                                        e = Math.floor((I +
                                        c) / 2), q = t(M[e]).substr(0, f), q < a ? I = e + 1 : (c = e - 1, q == a && (N = e));
                                    if (N!=-1) {
                                        I = N;
                                        do 
                                            A.push({
                                                keyword: M[I],
                                                i: I
                                            }), ++I;
                                        while (A.length < b.maxSuggestions && (n = M[I])&&!t(n).indexOf(a))
                                        }
                                }
                                C = A.length;
                                La(d);
                                X();
                                Ea()
                            } else 
                                oa();
                            T = null;
                            o =- 1
                        }
                        function x(d) {
                            (new Date).getTime();
                            var a = w.isImeEnhUsed();
                            T && (clearTimeout(T), T = null);
                            var n = Ma, c=!d ||!d.length;
                            c && w.isImeUsed() && (n = 200);
                            T = setTimeout(function() {
                                return function() {
                                    c ? oa() : b.imeEnh ? na(d, a) : na();
                                    T = null;
                                    o =- 1
                                }
                            }(), n)
                        }
                        function s() {
                            if (S == "promo" && o>-1)
                                return document.location.href =
                                R[o].href, !1;
                            var d = b.submit;
                            if (d)
                                return d.prop?!d.prop("disabled") : !d.attr("disabled")
                        }
                        function V(d) {
                            qa && qa(d)
                        }
                        function t(d) {
                            return b.normalize ? b.normalize(d) : d.toLowerCase()
                        }
                        function X() {
                            var d = "disabled";
                            if (C) {
                                var a = t(A[0].keyword), n = t(H());
                                if (a.length == n.length&&!(b.multiword ? Na(a, n) : t(a).indexOf(t(n))))
                                    Oa(N), d = ""
                            }
                            f(d)
                        }
                        function Ea() {
                            if (b.manualOverride&&!C) {
                                var d = H();
                                if ((d = b.manualOverride(d)) && d.length)
                                    d = Pa(d), Qa(), Ra(d), f("")
                            }
                        }
                        function oa() {
                            if (!L ||!R || R.length == 0)
                                $(), ra();
                            else {
                                C = R.length;
                                S = "promo";
                                y.html("");
                                ra();
                                y.show();
                                h = '<ul class="promo_list">';
                                for (i = 0; i < C; i++)
                                    p = R[i], h += '<li id="' + b.sugPrefix + i + '" onclick="document.location.href=\'' + p.href + "'\">", h += '<div class="promo_image" style="background-image: url(\'' + p.image + "');\"></div>", h += '<div class="promo_cat">' + p.category + "</div>", h += '<div class="promo_title">' + p.title + "</div>", h += "</li>";
                                h += "</ul>";
                                y.html(h);
                                v.navbar.logImpression("iss");
                                for (i = 0; i < C; ++i)
                                    a("#" + b.sugPrefix + i).mouseover(sa).mouseout(ta)
                            }
                        }
                        function ha(d) {
                            if (!(!b.isDigitalFeaturesEnabled &&
                            !ua || d.length != a(Fa.sb).val().length)) {
                                a("#searchDropdownBox option");
                                var J = [], n = RegExp("\\b" + d.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1") + "(.*)", "i");
                                d.length >= B.getMinNumOfChars() && (a.each(Ga, function(d, a) {
                                    if (J.length === B.getMaxNumOfResults())
                                        return !1;
                                    if (n.test(a.triggerWords) || n.test(a.name))
                                        B.logImpression(a.alias), a.position = J.length === 0 ? 0 : J.length + 1, J.push(a), C++, K > 0 && K++
                                }), a.each(J, function(d) {
                                    A.splice(d, 0, J[d])
                                }))
                            }
                        }
                        function ca() {
                            if (typeof b !== "undefined" && b.hasOwnProperty("isShowPromotionInfoInIss") &&
                            b.isShowPromotionInfoInIss === 1) {
                                var d = [["\u53cc\u5341\u4e00"], ["\u53cc11"], ["shuangshiyi"], ["shuang11"], ["\u5149\u68cd\u8282"], ["guanggunjie"]];
                                for (i = 0; i < d.length; i++)
                                    if (H().indexOf(d[i])>-1)
                                        return !0
                            }
                            return !1
                        }
                        function La(d) {
                            var J = b.sugPrefix, n = "#" + J;
                            b.imeSpacing && w.isImeUsed();
                            aa() || b.deepNodeISS && b.deepNodeISS.searchAliasAccessor();
                            y.html("");
                            ha(d);
                            var c = "";
                            if (C > 0)
                                ra(), y.show(), !Y&&!L && (c += '<div id="sugdivhdr"> ' + b.sugText + "</div>");
                            else if (b.noMatch) {
                                var e = a("#" + b.noMatch);
                                y.html("");
                                y.getNode().append(e.clone().attr("class",
                                "suggest_link suggest_nm").css({
                                    display: "block"
                                }));
                                y.show();
                                b.submitToggle && b.submit.attr("src", b.submitImg)
                            } else 
                                $();
                            ca() && (c += '<div id="promotion" class="suggest_link"><span style="color:#e47911; font-weight:bold;">2014\u4e9a\u9a6c\u900a\u53cc\u5341\u4e00\u4fc3\u9500 </span><span style="color:#888888;"> \u70b9\u51fb\u8fdb\u5165 </span></div>', c += '<div class="sx_line_holder" />');
                            for (i = 0; i < C; i++) {
                                e = A[i];
                                i > 0 && A[i - 1].type !== e.type && (c += '<div class="sx_line_holder" />');
                                var f = e, q = d, e = J, j = i, k = "", g = "",
                                l = f.type === B.getType();
                                if (l) {
                                    g = f;
                                    f = "";
                                    q = da(g, q, "name");
                                    g = q + (g.alias !== "gift-cards" && g.alias !== "digital-text" ? " Store" : "");
                                    switch (Sa) {
                                    case 0:
                                        f = '<span class="sx_category_name_highlight">Shop the ' + g + "</span>";
                                        break;
                                    case 1:
                                        f = 'Shop the <span class="sx_category_name_highlight">' + g + "</span>";
                                        break;
                                    case 2:
                                        f = 'go to <span class="sx_category_name_highlight">' + q + "</span>";
                                        break;
                                    default:
                                        f = '<span class="sx_category_name_highlight">' + q + "</span>"
                                    }
                                    q = f
                                } else if (f.alias) {
                                    var g = f, o = f = void 0;
                                    b.deptText ? (ea() ? (f = '<span class="suggest_category_without_keyword">',
                                    o = '<span class="sx_category_name_highlight">' + g.categoryName + "</span>") : b.xcatSuggestionImprovementFlag == va&&!O ? (f = da(g, q) + " <span>", o = '<span class="sx_category_name_highlight">' + g.categoryName + "</span>") : (f = da(g, q) + ' <span class="suggest_category">', o = g.categoryName), q = f + b.deptText.replace(Za, o) + "</span>") : q = g.categoryName
                                } else 
                                    q = da(f, q);
                                g = q;
                                q = j == K + 1 && K > 0;
                                !l && b.xcatSuggestionImprovementFlag != gb && K > 0&&!O && q && (k += '<div class="sx_line_holder" />');
                                l = "suggest_link";
                                j == 0 && la && (l += " imeSpacing");
                                k += '<div id="' +
                                (e + j) + '" class="' + l + '">' + g + "</div>";
                                c += k
                            }
                            C > 0&&!L && (c += '<div id="sugdivhdr2" align="right">&nbsp;</div>');
                            (d = c) && y.html(d);
                            wa == 0 && A.length > 0 && (wa = (new Date).getTime() - Ta + Ma);
                            u && (Z = u.val());
                            Ua = Va(Z);
                            for (d = 0; d < C; ++d)
                                a(n + d).mouseover(sa).mouseout(ta).click(ia);
                            a("#promotion") !== null && a("#promotion").length > 0 && a("#promotion").mouseover(sa).mouseout(ta).click(ja);
                            b.doCTWDisplay && b.doCTWDisplay();
                            n = A[0];
                            if (b.xcatSuggestionImprovementFlag == va&&!O&&!U && n) {
                                d=!1;
                                if ((b.isDigitalFeaturesEnabled || ua) && n.hasOwnProperty("type"))
                                    d =
                                    n.type === B.getType();
                                if (!d&&!n.sn)
                                    n.alias = D, n.categoryName = D
                            }
                        }
                        function ra() {
                            b.noMatch && (a("#" + b.noMatch).hide(), b.submitToggle && b.submit.attr("src", b.submitImgDef))
                        }
                        function ia() {
                            o = parseInt(this.id.substr(6), 10);
                            var d = w.shouldAddIMEReftag() ? "ime_": D;
                            pa(d);
                            y.hide();
                            xa ? v.setTimeout(function() {
                                b.form.submit()
                            }, 10) : b.form.submit()
                        }
                        function ja() {
                            document.location.href = "/b/ref=nb_sb_ss_p?ie=UTF8&node=361165071"
                        }
                        function pa(d) {
                            var c, n, e;
                            if (o >= 0)
                                e = fa && o == 0 ? A[1] : A[o], H(e.keyword), c = e.alias, n = e.categoryName;
                            if (Y)
                                o >= 0 ? (Oa(e.i), f("")) : (X(), Ea());
                            else {
                                var g = u, j, q;
                                if (g) {
                                    q = c ? "search-alias=" + c : Z;
                                    j = q == ba || Z == ba ? null : ba;
                                    c && (c = F(g, q), ba = null, c.length || (g.append(a("<option/>").attr("value", q).text(n)), ba = q));
                                    try {
                                        xa=!1, a(Da).length && Ca(q, n, !0), g.val(q)
                                    } catch (k) {
                                        xa=!0
                                    }
                                    j && F(g, j).remove()
                                }
                                c = a("#issprefix");
                                n = B.getType();
                                e ? (g = "ss_", j = w.userInput(), d && (g += d), W(b.form, null, e && e.source && e.source[0] == "fb" ? g + "fb" : e.alias ? g + "c" : b.sc && e && e.sc ? g + "sc" : e.type === n ? g + n : g + "i", e, j.length), j = j + "," + Ua + "," + wa, c.length ? c.attr("value",
                                j) : Q(b.form, "issprefix", "sprefix", j)) : c.remove()
                            }
                        }
                        function ma(d) {
                            if (!d) {
                                var d = w.pos(), a = w.size();
                                this.css({
                                    width: a.width,
                                    top: d.top + a.height,
                                    left: d.left
                                })
                            }
                        }
                        function sa() {
                            this.style.cursor = L==!0 ? "pointer" : "default";
                            Ia();
                            o = parseInt(this.id.substr(b.sugPrefix.length), 10);
                            Ka(!1)
                        }
                        function ta() {
                            ya(a(this));
                            o =- 1
                        }
                        function ya(d) {
                            d.removeClass("suggest_link_over")
                        }
                        function Ka(d) {
                            !(o>-1) && ca() ? (S == "sugg" && (za=!0, d && H("2014\u4e9a\u9a6c\u900a\u53cc\u5341\u4e00\u4fc3\u9500")), a("#promotion").addClass("suggest_link_over")) :
                            (S == "sugg" && d && pa(), a("#" + b.sugPrefix + o).addClass("suggest_link_over"))
                        }
                        function Ia() {
                            !(o>-1) && ca() ? (za=!1, ya(a("#promotion"))) : ya(a("#" + b.sugPrefix + o))
                        }
                        function Na(d, a) {
                            var b = t(d).search(RegExp("(^|(?:\\s))" + t(a), "i"));
                            return b <= 0 ? b : b + 1
                        }
                        function da(d, a, c) {
                            d = c ? d[c] : d.keyword;
                            c = b.multiword ? Na(d, a) : t(d).indexOf(t(a));
                            if (c!==-1)
                                a = a.length, d = [d.substr(0, c), "<b>", d.substr(c, a), "</b>", d.substr(c + a)].join("");
                            return d
                        }
                        function $() {
                            S == "sugg" && z && (z.cleanup(), z = null);
                            C = 0;
                            y.hide();
                            o =- 1
                        }
                        function Oa(d) {
                            d = Ha[d];
                            b.valInput && b.valInput.length ? b.valInput.attr("value", d) : (d = Pa(d || location.href), Qa(), Ra(d))
                        }
                        function Pa(d) {
                            for (var d = d.split("?"), a = d.length > 1 ? d[1] : D, a = a ? a.split("&") : [], b = a.length, c; b-- > 0;)
                                c = a[b].split("="), a[b] = {
                                    name: c[0],
                                    value: c[1].replace($a, " ")
                                };
                            return {
                                uri: d[0],
                                formParams: a
                            }
                        }
                        function Qa() {
                            b.form.find(".frmDynamic").remove()
                        }
                        function Ra(a) {
                            b.form.attr("action", a.uri);
                            for (var c = 0; c < a.formParams.length; c++) {
                                var e = a.formParams[c];
                                Q(b.form, "frmDynamic", e.name, unescape(decodeURIComponent(e.value)),
                                1)
                            }
                        }
                        function H(a) {
                            return w.keyword(a)
                        }
                        function aa(a) {
                            if (a)
                                Ca(a);
                            else 
                                return Va(u.attr("value"))
                        }
                        function Va(a) {
                            return (a = a.match(ab)) ? a[1] : null
                        }
                        function ka(a) {
                            var c = b.aliases, e;
                            if (e = c)
                                if (!(e = c === "*")) {
                                    a:
                                    {
                                        e = 0;
                                        for (var f = c.length; e < f; e++)
                                            if (c[e] == a) {
                                                a = e;
                                                break a
                                            }
                                            a =- 1
                                        }
                                        e = a >= 0
                                }
                            return e
                        }
                        function Wa(a, b, c, e, f, g, j) {
                            a.push({
                                keyword: c,
                                sc: b[g] && b[g].sc?!0: !1,
                                source: b[g].source,
                                alias: e,
                                categoryName: f,
                                sgIndex: g,
                                xcatIndex: j
                            })
                        }
                        function ea() {
                            return b.xcatSuggestionImprovementFlag == hb&&!O
                        }
                        function Aa(d) {
                            return !d ? a(u.children()[0]).text() :
                            (d = a(F(u, "search-alias=" + d))) && d.length ? a.trim(d.text()) : D
                        }
                        function na(d, c) {
                            Ta = (new Date).getTime();
                            z && z.cleanup();
                            if (ga && w.hasFocus()) {
                                var e = aa() || (b.deepNodeISS ? b.deepNodeISS.searchAliasAccessor() : null), f = d || H(), g = [], j = function() {
                                    a.each(arguments, function(a, d) {
                                        g.push(d)
                                    })
                                }, q, k;
                                ka(e) ? (b.qs && (q = w.cursorPos(), q>-1 && q < f.length && (k = f.substring(q), f = f.substring(0, q))), j(b.protocol, "//", b.src, "?", "method=completion", "&q=", encodeURIComponent(f), "&search-alias=", e, "&client=", b.cid, "&mkt=", b.mkt, "&fb=", b.fb,
                                "&xcat=", b.xcat, "&x=updateISSCompletion"), k && j("&qs=" + encodeURIComponent(k)), b.np && j("&np=" + b.np), b.sc && j("&sc=1"), z && z.cleanup(), z = new Ya(f, ib++, c), z.callSuggestionsService(g.join(""))) : $()
                            }
                        }
                        var b = {}, M, Ha, o =- 1, A = [], C = 0, T = null, la = 0, z = null, N =- 1, Z, ba, xa=!1, Y, w, qa, Ba, y, ga=!0, R = [], S = "sugg", L = a("#navbar").hasClass("nav-beacon"), Fa = {
                            sb: "#twotabsearchtextbox",
                            form: "#navbar form[name='site-search']",
                            dd: "#searchDropdownBox",
                            cid: "amazon-search-ui",
                            action: "",
                            sugPrefix: "issDiv",
                            sugText: "Search suggestions",
                            xcat: 0,
                            fb: 0,
                            imeSpacing: 0,
                            maxSuggestions: 10
                        }, fa=!1, gb = 0, hb = 1, va = 2, K =- 1, U=!1, O=!1, Ta, wa = 0, Ua, Ma = 100, ib = 0, Xa=!1, Sa = 0, ua=!1, Ga = D, za=!1;
                        e && c(e);
                        var Ja=!1;
                        b.form && b.form.submit(function() {
                            var a = t(H()), c = "ref=nb_sb_noss", e = 0;
                            if (!(o>-1)) {
                                var f = A;
                                if (f.length > 0)
                                    for (c = "ref=nb_sb_noss_2"; e < f.length;) {
                                        if (t(f[e].keyword) == a) {
                                            c = "ref=nb_sb_noss_1";
                                            break
                                        }
                                        e++
                                    }
                                b.form.attr("action", b.form.attr("action").replace(E, c))
                            }
                        });
                        return {
                            suggest: function(a) {
                                Ba = a
                            },
                            keypress: function(a) {
                                qa = a
                            },
                            submit: function(a) {
                                b.form.submit(a)
                            },
                            blur: function() {
                                w.blur()
                            },
                            keyword: H,
                            merchant: function() {
                                var a = u.attr("value").match(db);
                                return a ? a[1] : null
                            },
                            searchAlias: aa,
                            searchNode: function() {
                                var a = u.attr("value").match(bb);
                                return a ? a[1] : null
                            },
                            bbn: function() {
                                var a = u.attr("value").match(cb);
                                return a ? a[1] : null
                            },
                            stop: function() {
                                ga=!1;
                                requestedKeyword = "";
                                z && (z.cleanup(), z = null)
                            },
                            start: function() {
                                ga=!0
                            },
                            encoding: function() {
                                var a = b.form.find("input[name^='__mk_']");
                                if (a.length)
                                    return [a.attr("name"), a.val()]
                            },
                            focus: function() {
                                w.focus()
                            },
                            offset: function() {
                                return w.pos()
                            },
                            keydown: function(a) {
                                w.keydown(a)
                            },
                            isImeEnhUsed: function() {
                                return Xa
                            },
                            triggerImeEnh: function() {
                                return w.isImeUsed() && b.ime && a.browser.msie
                            },
                            haveCategorySuggestions: function() {
                                return K > 0 || U
                            },
                            isDigitalFeaturesEnabled: function() {
                                return b.isDigitalFeaturesEnabled === 1
                            },
                            setDepartmentResultStyle: function(a) {
                                Sa = a
                            },
                            enableDepartment: function() {
                                ua=!0
                            },
                            isShowPromotionInfoInIssEnabled: function() {
                                return b.isShowPromotionInfoInIss === 1
                            },
                            isPromotionSelected: function() {
                                return za
                            },
                            onFocus: w ? w.onFocus: function() {},
                            onBlur: w ? w.onBlur: function() {},
                            cursorPos: w ?
                            w.cursorPos: function() {
                                return - 1
                            },
                            initStaticSuggestions: function(a, b, e, f, g, j, q, k, l, o) {
                                c({
                                    form: b,
                                    ime: l,
                                    multiword: o,
                                    noMatch: k,
                                    sb: a,
                                    src: [j, q],
                                    submit: f,
                                    submitImg: g,
                                    valInput: e
                                })
                            },
                            initDynamicSuggestions: function(a, b, e, f, g, j, q, k, l, o) {
                                c({
                                    aliases: j,
                                    dd: e,
                                    deptText: k,
                                    form: b,
                                    handler: q,
                                    ime: g == 6 || g == 3240,
                                    mkt: g,
                                    sb: a,
                                    sc: o,
                                    src: f,
                                    sugText: l
                                })
                            },
                            updateAutoCompletion: function() {
                                if (z && ga && completion.length && (completion[0] = completion[0] || "", z.keywords = z.keywords || "", completion[0].toLowerCase() === z.keywords.toLowerCase() &&
                                (Xa = z.imeEnhUsed, z.cleanup(), z = null, w.hasFocus()))) {
                                    var a = completion[1], c = completion.length > 2 ? completion[2]: [], e, f = a.length, g = [], j = 0, k, l=!aa() && b.deepNodeISS && b.deepNodeISS.searchAliasAccessor(), o = l && (Aa(l) || b.deepNodeISS && b.deepNodeISS.searchAliasDisplayNameAccessor());
                                    K = 0;
                                    U = fa=!1;
                                    for (O = l && o; g.length < b.maxSuggestions && j < f;) {
                                        k = {
                                            keyword: a[j],
                                            sc: c[j] && c[j].sc?!0: !1,
                                            sgIndex: j
                                        };
                                        if (O)
                                            k.alias = l, k.categoryName = o;
                                        g.push(k);
                                        e = (c && c.length ? c[j].nodes : []) || [];
                                        if (e.length) {
                                            k = g;
                                            var r = c, u = j, s = a.length, t = void 0,
                                            t = void 0, v = 0, y = 0, x = 0, D = a[u];
                                            e = (r && r.length ? r[u].nodes : []) || [];
                                            if ((t = r[u].source) && t.length)
                                                for (v = 0; v < t.length; v++)
                                                    if (t[v] === "fb") {
                                                        s == 1 && ea() ? fa=!0 : k.pop();
                                                        U=!0;
                                                        break
                                                    }
                                            if (b.xcatSuggestionImprovementFlag == va&&!O&&!U) {
                                                var s = k, x = r, t = D, v = u, Q = aa(), B = Aa(Q);
                                                if (s[0].alias || s[0].categoryName)
                                                    s[0].sn=!0;
                                                else {
                                                    var F = s[0];
                                                    F.alias = Q;
                                                    F.categoryName = B
                                                }
                                                Q != "aps" && (Wa(s, x, t, "aps", Aa("aps"), v, 1), b.maxSuggestions += 1);
                                                x = k.length
                                            }
                                            for (m = e.length; y < m && y < 4 && k.length < b.maxSuggestions;)
                                                t = e[y], Wa(k, r, D, t.alias, t.name, u, x), ++y,
                                                ++x;
                                            K = k.length - 1
                                        }
                                        j == 0 && K > 0 && ea()&&!fa && (g.push(g[0]), b.maxSuggestions += 1);
                                        ++j
                                    }
                                    C = g.length;
                                    A = g;
                                    La(completion[0]);
                                    Ba && (a = Ba, c = completion[0], f = A.slice(), U && ea() && f.splice(0, 1), a(c, f))
                                }
                            },
                            init: c
                        }
                    };
                    V && uet("cf", "iss-init-pc", {
                        wb: 1
                    })
                })(window);
                $SearchJS.publish("search-js-autocomplete-lib")
            });
            var B = function() {
                var a = {}, v = [["instant-video", "Amazon Instant Video", ["Amazon", "Instant", "Video", "movies", "rentals"]], ["prime-instant-video", "Prime Instant Video", "prime,movies,instant,video,free,streaming,netflix".split(",")],
                ["appliances", "Appliances", ["Appliances"]], ["mobile-apps", "Apps for Android", ["Apps", "Android", "mobile"]], ["arts-crafts", "Arts, Crafts & Sewing", ["arts", "crafts", "sewing"]], ["automotive", "Automotive", ["automotive", "cars"]], ["baby-products", "Baby Products", ["baby", "products"]], ["beauty", "Beauty", ["beauty", "makeup", "hair"]], ["stripbooks", "Books", ["books", "textbooks", "rentals"]], ["mobile", "Cell Phones & Accessories", "cell,phones,mobile,cases,iphone,galaxy,nexus".split(",")], ["collectibles", "Collectibles & Fine Art",
                "collectibles,fine,art,coins,memorabilia,paintings,wall art".split(",")], ["computers", "Computers", ["computers", "pc", "laptop", "desktop"]], ["electronics", "Electronics", ["electronics"]], ["financial", "Credit Cards", ["credit", "cards"]], ["gift-cards", "Gift Cards Store", ["gift", "cards"]], ["grocery", "Grocery & Gourmet Food", ["grocery", "gourmet", "food"]], ["hpc", "Health & Personal Care", ["health", "personal", "care"]], ["garden", "Home & Kitchen", ["home", "kitchen", "furniture", "art"]], ["industrial", "Industrial & Scientific",
                ["Industrial", "Scientific"]], ["digital-text", "Kindle Store", ["kindle", "store", "ebooks", "books"]], ["magazines", "Magazine Subscriptions", ["magazines", "subscriptions"]], ["movies-tv", "Movies & TV", "movies,tv,dvds,vhs,video,blu ray,bluray,blu-ray".split(",")], ["digital-music", "MP3 Music", ["mp3", "music"]], ["popular", "Music", ["music", "cds", "autorip", "vinyl"]], ["mi", "Musical Instruments", ["musical", "instruments", "guitars", "dj"]], ["office-products", "Office Products", ["office", "products", "school", "toner"]],
                ["lawngarden", "Patio, Lawn & Garden", ["patio", "lawn", "garden"]], ["pets", "Pet Supplies", "pet,supplies,dogs,cats,birds,fish".split(",")], ["software", "Software", ["software"]], ["sporting", "Sporting & Outdoors", ["sporting", "outdoors", "sports"]], ["tools", "Tools & Home Improvement", ["tools", "home", "improvement"]], ["toys-and-games", "Toys & Games", ["toys", "games"]], ["videogames", "Video Games", "video,games,xbox,ps3,ps4,wii,playstation".split(",")], ["watches", "Watches", ["watches"]], ["wine", "Wine", ["wine"]],
                ["pantry", "Prime Pantry", ["prime", "pantry"]]], D = [["fashion", "Clothing, Shoes & Jewelry", "clothing,clothes,luggage,hats,shirts,jacket,wallets,sunglasses,jewelry,shoes,handbags,sandals,boots".split(",")], ["fashion-mens", "Men's Clothing, Shoes & Jewelry", "mens,clothing,clothes,shoes,jewelry,mens clothing,mens shoes,mens jewelry".split(",")], ["fashion-womens", "Women's Clothing, Shoes & Jewelry", "womens,clothing,clothes,shoes,jewelry,womens clothing,womens shoes,womens jewelry".split(",")], ["fashion-baby",
                "Baby Clothing, Shoes & Jewelry", "baby,clothing,clothes,shoes,jewelry,baby clothing,baby shoes,baby jewelry".split(",")], ["fashion-boys", "Boys Clothing, Shoes & Jewelry", "boys,clothing,clothes,shoes,jewelry,boys clothing,boys shoes,boys jewelry".split(",")], ["fashion-girls", "Girls' Clothing, Shoes & Jewelry", "girls,clothing,clothes,shoes,jewelry,girls clothing,girls shoes,girls jewelry".split(",")]], B = [["jewelry", "Jewelry", ["jewelry"]], ["shoes", "Shoes", ["shoes", "handbags", "sandals", "boots"]], ["apparel",
                "Clothing & Accessories", "clothing,clothes,hats,shirts,jacket,wallets,sunglasses".split(",")]];
                a.createDataArray = function(a, F) {
                    var E = [], W = void 0, W = typeof F !== "undefined" && F.hasOwnProperty("isWayfindingEnabled") && F.isWayfindingEnabled === 1 ? D : B;
                    v = v.concat(W);
                    a.each(v, function(a) {
                        a = v[a];
                        E.push({
                            id: a[0],
                            alias: a[0],
                            keyword: "",
                            categoryName: "",
                            type: "department",
                            name: a[1],
                            triggerWords: a[2],
                            sn: !1
                        })
                    });
                    return E
                };
                a.getType = function() {
                    return "department"
                };
                a.getMinNumOfChars = function() {
                    return 3
                };
                a.getMaxNumOfResults =
                function() {
                    return 3
                };
                a.logImpression = function(a) {
                    ue && ue.count && (a = "deptiss" + a.replace("-", ""), ue.count(a, ue.count(a) + 1))
                };
                a.buildDepartmentReftagSuffix = function(a) {
                    var v = "deptiss";
                    v += a.hasOwnProperty("position") ? "_" + a.position : "";
                    return v
                };
                return a
            }()
        }
    })
})(function() {
    var E = window.AmazonUIPageJS || P, B = E.attributeErrors;
    return B ? B("RetailSearchAutocompleteAuiAssets") : E
}());; /* RetailSearchClientSideLoggingAuiAssets */
(function(d) {
    d.execute(function() {
        if (!window.$SearchJS && window.$Nav)
            window.$SearchJS = $Nav.make("sx");
        window.$SearchJS && ($SearchJS.importEvent("jQuery", {
            as: "$",
            global: "jQuery"
        }), $SearchJS.importEvent("jQuery", {
            global: "jQuery"
        }), $SearchJS.when("jQuery").run("searchCSL-lib", function(c) {
            c.searchCSL = c.searchCSL || new function() {
                var b = this, g = [], e = [], d, i, j, f, h = 200, k;
                b.init = function(a, l, c) {
                    a && l&&!d && (d = a, b.updateRid(l), c && (h = c))
                };
                b.updateRid = function(a) {
                    a && i != a && (b.tx(), i = a, j = {})
                };
                b.addWlt = function(a) {
                    if (a) {
                        if (a.call &&
                        (a = a(), !a))
                            return;
                        j[a] || (g.push(a), j[a] = 1, b.scheduleTx())
                    }
                };
                b.addAmabotPrerendered = function(a) {
                    a && a.rid && a.selections && a.selections.length && (e.push(a), b.scheduleTx())
                };
                b.scheduleTx = function() {
                    if (h == 0)
                        b.tx();
                    else {
                        if (!k) {
                            var a = window.onbeforeunload;
                            window.onbeforeunload = function(c) {
                                f && (window.clearInterval(f), f = void 0);
                                b.tx();
                                k=!1;
                                return a && a.call ? a(c) : void 0
                            };
                            k=!0
                        }
                        !f && h > 0 && (f = window.setTimeout(function() {
                            f = void 0;
                            b.tx()
                        }, h))
                    }
                };
                b.tx = function() {
                    if (g.length || e.length) {
                        var a = "/mn/search/csl?";
                        g.length &&
                        (a += "rrid=" + i + "&cpt=" + d + "&ctw=" + g.join("|"), g = []);
                        if (e.length) {
                            var b = "";
                            c.each(e, function(a, d) {
                                b += d.rid + ":";
                                c.each(d.selections, function(a, c) {
                                    c && (b += c + (a != d.selections.length - 1 ? "," : ""))
                                });
                                b += a != e.length - 1 ? "." : ""
                            });
                            e = [];
                            b && (a += a.charAt(a.length - 1) == "?" ? "" : "&", a += "amabotSelections=" + b)
                        }(new Image).src = a
                    }
                }
            };
            $SearchJS.publish("search-csl", c.searchCSL)
        }))
    })
})(function() {
    var d = window.AmazonUIPageJS || P, c = d.attributeErrors;
    return c ? c("RetailSearchClientSideLoggingAuiAssets") : d
}());
