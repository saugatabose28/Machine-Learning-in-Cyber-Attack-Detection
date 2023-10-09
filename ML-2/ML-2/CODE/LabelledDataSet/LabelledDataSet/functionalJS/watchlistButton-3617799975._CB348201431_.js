(function(e, f) {
    var a = f.location.hash.search("debug=1") >= 0, c = 1;
    function d(j, g) {
        var h, i = j;
        if (typeof g === "function") {
            g = g(j);
        }
        if (typeof g === "string" || typeof g === "number") {
            a && consoleLog("create text node : " + g, "jsonml");
            j.append(g);
        } else {
            if (e.isPlainObject(g)) {
                a && consoleLog("attach attributes", "jsonml");
                e.each(g, function(k, l) {
                    try {
                        j.attr(k, l);
                    } catch (m) {
                        c && consoleLog(j[0].nodeName + " rejected assignment of attribute : " + k + "=" + l, "jsonml");
                    }
                });
            } else {
                if (g instanceof Array) {
                    e.each(g, function(k, l) {
                        if (typeof l === "function") {
                            l = l(j);
                        }
                        if (k === 0 && typeof l === "string") {
                            a && consoleLog("create new element : " + l, "jsonml");
                            h = e(f.createElement(l));
                            i = h;
                        } else {
                            d(i, l);
                        }
                    });
                    if (h) {
                        j.append(h);
                    }
                } else {
                    if (!g) {
                        a && consoleLog("noop", "jsonml");
                    } else {
                        a && consoleLog("unknown data type", "jsonml");
                    }
                }
            }
        }
    }
    function b(k) {
        var h = [], g, m, j, l, i = {};
        if (k.length === 1) {
            g = k[0].nodeType;
            m = k[0].nodeName;
            j = k[0].nodeValue;
            l = k[0].attributes;
            if (g == 1) {
                a && consoleLog("encode element : " + m, "jsonml");
                h.push(m);
                if (l.length > 0) {
                    e.each(l, function(o, n) {
                        i[n.name] = n.value;
                    });
                    h.push(i);
                }
                h.push(b(k.contents()));
            } else {
                if (g == 3) {
                    a && consoleLog("encode text : " + j, "jsonml");
                    h = j;
                } else {
                    if (g == 8) {
                        a && consoleLog("ignoring comment : " + j, "jsonml");
                    } else {
                        a && consoleLog("unsupported node type", "jsonml");
                    }
                }
            }
        } else {
            k.each(function() {
                var n = b(e(this));
                if (typeof n === "string") {
                    if (h.length === 0) {
                        h.push(undefined);
                    }
                }
                h.push(n);
            });
        }
        return h;
    }
    e.fn.jsonml = function(g) {
        var h = e(this);
        if (g) {
            d(h, g);
            h.trigger("jsonml_ready");
            return h;
        } else {
            return b(h.contents());
        }
    };
    e.jsonml = {
        toDom: function(g) {
            var h = e("<div>");
            h.jsonml(g);
            return h.contents();
        },
        fromDom: b
    };
})(jQuery, document);
(function(c) {
    function a(d) {
        return c("<div/>").text(d).html();
    }
    var b = {
        tmpl_alert: function(e, f, d) {
            return (["div", {
                "class": "message_box small"
            }, ["div", {
                "class": e
            }, f, ["span", {
                "class": "btn2_list_name"
            }, a(d)]]]);
        },
        tmpl_base: function(f) {
            var e = this, d = c.extend({
                text: null,
                href: null,
                classes: [],
                attrs: {},
                type: null,
                size: null,
                extra: null,
                glyph: null
            }, f);
            d.classes.push("btn2");
            if (d.size) {
                d.classes.push(d.size);
            }
            if (d.type) {
                d.classes.push(d.type);
            }
            if (d.glyph) {
                d.classes.push("btn2_glyph_on");
            }
            if (d.extra) {
                d.classes.push(d.extra);
            }
            if (d.text) {
                d.classes.push("btn2_text_on");
            }
            return ([["div", {
                "class": "btn2_alert",
                style: "display:none"
            }
            ], ["a", {
                "class": d.classes.join(" "),
                onclick: ""
            }, d.attrs, d.href && {
                href: d.href
            }, e.tmpl_glyph(d), e.tmpl_text(d)]]);
        },
        tmpl_glyph: function(d) {
            return (["span", {
                "class": "btn2_glyph"
            }, d.glyph]);
        },
        tmpl_text: function(d) {
            return (["span", {
                "class": "btn2_text"
            }, d.text]);
        },
        tmpl_spin: function() {
            return ["div", {
                "class": "btn2_spin"
            }
            ];
        },
        tmpl_check: function() {
            return ["div", {
                "class": "btn2_check"
            }, "&#x2714;"];
        },
        tmpl_plus: function() {
            return ["div", {
                "class": "btn2_plus"
            }, "+"];
        },
        tmpl_error: function() {
            return ["div", {
                "class": "btn2_error"
            }, "!"];
        },
        tmpl_down: function() {
            return ["div", {
                "class": "btn2_down"
            }
            ];
        }
    };
    window.imdb_btn2 = {
        templates: b
    };
    c.widget("ui.imdb_btn2", {
        options: {
            templates: b,
            model: null
        },
        _create: function() {
            var e = this, h = e.element, j = e.options, g = h.attr("data-size"), i = h.attr("data-type"), d = h.attr("data-extra"), f = (h.attr("data-classes") || "").split(" ");
            e.templates = j.templates, e.model = j.model;
            if (e.model) {
                e.model.size = e.model.size || g;
                e.model.type = e.model.type || i;
                e.model.classes = e.model.classes || f;
                e.model.extra = e.model.extra || d;
                h.children().remove();
                h.jsonml(e.templates.tmpl_base(e.model));
            }
            h.addClass("btn2_wrapper btn2_active");
        },
        modifyGlyph: function(g) {
            var d = this, e = d.element, f = c(".btn2", e);
            d.model.glyph = g;
            if (g != null) {
                f.addClass("btn2_glyph_on");
            } else {
                f.removeClass("btn2_glyph_on");
            }
            c(".btn2_glyph", e).replaceWith(c.jsonml.toDom(d.templates.tmpl_glyph(d.model)));
        },
        modifyText: function(g) {
            var d = this, e = d.element, f = c(".btn2", e);
            d.model.text = g;
            if (g != null) {
                f.addClass("btn2_text_on");
            } else {
                f.removeClass("btn2_text_on");
            }
            c(".btn2_text", e).replaceWith(c.jsonml.toDom(d.templates.tmpl_text(d.model)));
        },
        show_alert: function(e, g, i, d) {
            var f = c(".btn2_alert", e);
            f.removeClass("btn2_fail").removeClass("btn2_add_ok").removeClass("btn2_remove_ok");
            if (g == "error") {
                f.addClass("btn2_fail");
            }
            if (g == "success" && i == "Added to ") {
                f.addClass("btn2_add_ok");
            }
            if (g == "success" && i == "Removed from ") {
                f.addClass("btn2_remove_ok");
            }
            f.empty();
            var h = imdb_btn2.templates.tmpl_alert(g, i, d);
            f.append(c.jsonml.toDom(h));
            f.attr("style", "display: block;");
            f.queue("btn2_alert", function(j) {
                setTimeout(function() {
                    j();
                }, 2000);
            }).queue("btn2_alert", function(j) {
                c(this).css({
                    display: "none"
                });
            }).dequeue("btn2_alert");
        }
    });
})(jQuery);
(function(b) {
    var a = {
        glyph: {
            loading: imdb_btn2.templates.tmpl_spin(),
            "in": imdb_btn2.templates.tmpl_check(),
            out: null,
            pending: imdb_btn2.templates.tmpl_spin(),
            error: imdb_btn2.templates.tmpl_error()
        },
        text: {
            loading: "Loading",
            "in": "Watchlist",
            out: "Add to Watchlist",
            pending: "Watchlist",
            error: "Unavailable"
        },
        title: {
            loading: "Loading watchlist data",
            "in": "Click to remove from watchlist",
            out: "Click to add to watchlist",
            pending: "Updating watchlist data",
            error: "Watchlist currently unavailable"
        }
    };
    b.widget("ui.wlb_lite_base", b.ui.imdb_btn2, {
        options: {
            model: {
                assets: a,
                glyph: a.glyph.loading,
                text: a.text.loading,
                tconst: null,
                state: "loading"
            }
        },
        _create: function() {
            var d = this, e = d.element, f = d.options, c = f.model;
            if (!c.tconst) {
                c.tconst = e.attr("data-tconst");
            }
            if (!c.caller_name) {
                c.caller_name = e.attr("data-caller-name") || e.closest("[data-caller-name]").attr("data-caller-name");
            }
            b.ui.imdb_btn2.prototype._create.apply(this, arguments);
            e.addClass("wlb_lite");
            if (!c.tconst) {
                if ("consoleLog" in window) {
                    consoleLog("Requires option model.tconst or data-tconst attribute", "wlb-lite");
                }
                d._set_state("error");
                return;
            } else {
                if (!CS.hasAccount()) {
                    d._set_state("out");
                }
            }
            b("a.btn2", e).bind("click.wlb_lite", function() {
                d._request_toggle();
            });
            d.global_handlers = {
                wlb_async_init: function(g, h) {
                    d._async_init(h);
                },
                wlb_async_update: function(g, h) {
                    d._async_update(h);
                }
            };
            b(document).bind("wlb_async_init", d.global_handlers.wlb_async_init).bind("wlb_async_update", d.global_handlers.wlb_async_update);
            e.attr("data-initialized", 1);
        },
        destroy: function() {
            var c = this, d = c.element;
            b("a.btn2", d).unbind(".wlb_lite");
            b(document).unbind("wlb_async_init", c.global_handlers.wlb_async_init).unbind("wlb_async_update", c.global_handlers.wlb_async_update);
            b.ui.imdb_btn2.prototype.destroy.apply(this, arguments);
        },
        _is_attached: function() {
            var c = this, d = c.element;
            return (d.parents("body").length > 0);
        },
        _async_init: function(g) {
            var d = this, e = d.element, f = d.options, c = f.model;
            if (!d._is_attached()) {
                return d.destroy();
            }
            c.extra = g.extra;
            c.list_id = g.list_id;
            if (g.checked[c.tconst]) {
                if ("consoleLog" in window) {
                    consoleLog("initialization complete", "wlb_lite");
                }
                if (g.has[c.tconst]) {
                    c.list_item_id = g.has[c.tconst][0];
                    d._set_state("in");
                } else {
                    d._set_state("out");
                }
                e.trigger("wlb_ready", {
                    tconst: c.tconst,
                    inwatchlist: g.has[c.tconst]
                });
            }
        },
        _async_update: function(g) {
            var d = this, e = d.element, f = d.options, c = f.model;
            if (!d._is_attached()) {
                return d.destroy();
            }
            if (g.list_class === "watchlist" && c.list_id === "watchlist") {
                c.list_id = g.list_id;
            }
            if (c.tconst === g.tconst && c.list_id === g.list_id) {
                if (g.list_item_id) {
                    d._set_state("in");
                    c.list_item_id = g.list_item_id;
                } else {
                    d._set_state("out");
                    c.list_item_id = null;
                }
            }
        },
        _set_state: function(f) {
            var d = this, e = d.options, c = e.model;
            c.state = f;
            d._ui_render();
        },
        _ui_render: function() {
            var d = this, f = d.element, g = d.options, e = g.templates, c = g.model, j = c.assets.title[c.state], i = c.assets.text[c.state], h = c.assets.glyph[c.state];
            d.modifyText(i);
            d.modifyGlyph(h);
            b("a.btn2", f).attr("title", j);
        },
        _request_toggle: function() {
            var d = this, f = d.element, g = d.options, c = g.model, e, i = f.data("show-message");
            if (!CS.hasAccount()) {
                CS.activate_login_lightbox();
                return;
            }
            f.trigger("wlb_user_interaction");
            if (c.state === "loading" || c.state === "error" || c.state === "pending") {
                return;
            }
            d._set_state("pending");
            var h = null;
            if (c.list_item_id) {
                e = "/list/_ajax/edit";
                h = {
                    action: "delete",
                    list_id: c.list_id,
                    list_item_id: c.list_item_id,
                    ref_tag: c.caller_name,
                    list_class: "WATCHLIST"
                };
            } else {
                if (c.list_id === "watchlist") {
                    e = "/list/_ajax/watchlist_add";
                    h = {
                        tconst: c.tconst,
                        lcn: c.caller_name
                    };
                } else {
                    e = "/list/_ajax/edit";
                    h = {
                        "const": c.tconst,
                        list_id: c.list_id,
                        ref_tag: c.caller_name,
                        list_class: "WATCHLIST"
                    };
                }
            }
            if (c.extra) {
                h[c.extra.name] = c.extra.value;
            }
            b.ajax({
                url: e,
                type: "POST",
                data: h,
                beforeSend: window.addClickstreamHeadersToAjax,
                error: function() {
                    if ("consoleLog" in window) {
                        consoleLog("failed to toggle membership", "wl_button");
                    }
                    d._set_state("error");
                    if (i) {
                        d.show_alert(f, "error", "Could not update ", "Watchlist");
                    }
                },
                success: function(j) {
                    if (j.status != 200) {
                        return this.error();
                    }
                    if (j.list_id) {
                        c.list_id = j.list_id;
                    }
                    if (i) {
                        if (j.list_item_id) {
                            d.show_alert(f, "success", "Added to ", "Watchlist");
                        } else {
                            d.show_alert(f, "success", "Removed from ", "Watchlist");
                        }
                    }
                    f.trigger("wlb_async_update", {
                        tconst: c.tconst,
                        list_id: c.list_id,
                        list_class: "watchlist",
                        list_item_id: j.list_item_id
                    });
                }
            });
        }
    });
    b.fn.wlb_lite = function() {
        var g = b(this).not("[data-initialized=1]"), c = b.fn.wlb_lite_base.apply(this, arguments), f = [], d = {}, e = {};
        if (g.length === 0) {
            return c;
        }
        if (typeof arguments[0] === "string") {
            return c;
        }
        if (CS.hasAccount()) {
            g.each(function() {
                var h = b(this).attr("data-tconst");
                if (!d[h]) {
                    d[h] = true;
                    f.push(h);
                }
            });
            b.ajax({
                url: "/list/_ajax/watchlist_has",
                type: "POST",
                data: {
                    consts: f,
                    tracking_tag: "wlb-lite"
                },
                beforeSend: window.addClickstreamHeadersToAjax,
                error: function() {
                    if ("consoleLog" in window) {
                        consoleLog("watchlist_has request failed", "wl_button");
                    }
                },
                success: function(h) {
                    if (h.status != 200) {
                        return this.error();
                    }
                    g.first().trigger("wlb_async_init", {
                        list_id: h.list_id || "watchlist",
                        has: h.has,
                        checked: d,
                        extra: h.extra
                    });
                }
            });
        }
        return c;
    };
})(jQuery);
(function(c) {
    var a = {
        tmpl_view: function() {
            return (["div", {
                "class": "wlb_drop_item"
            }, ["a", {
                "class": "wlb_message",
                href: "/list/watchlist",
                onclick: ""
            }, ["span", {
                "class": "wlb_text"
            }, "View Watchlist"], " &raquo;"]]);
        },
        tmpl_new: function() {
            return (["div", {
                "class": "wlb_drop_item"
            }, ["a", {
                "class": "wlb_message",
                href: "/list/create",
                onclick: ""
            }, ["span", {
                "class": "wlb_text"
            }, "New List"], " &raquo;"]]);
        },
        tmpl_cluster: function(f) {
            var e = this, d = [];
            d = c.fn.wl_map(f, e.tmpl_item);
            return ([e.tmpl_view(), ["div", {
                "class": "wlb_dropdown_cluster"
            }, d], e.tmpl_new()]);
        },
        tmpl_item: function(f) {
            var e = f.data_list_item_ids;
            var d;
            if (f.wlb_text == "CHECKINS") {
                f.wlb_text = "Check-ins";
            }
            if (e) {
                d = e.join(",");
            } else {
                d = "";
            }
            return (["div", {
                "class": "wlb_drop_item"
            }, ["a", {
                "class": f.className.join(" "),
                "data-list-id": f.data_list_id,
                "data-list-item-ids": d,
                onclick: ""
            }, ["span", {
                "class": "wlb_glyph"
            }, f.wlb_glyph], ["span", {
                "class": "wlb_text"
            }, b(f.wlb_text)]], ["a", {
                "class": "wlb_extra wlb_righty",
                href: f.href
            }, "&raquo;"]]);
        }
    };
    function b(d) {
        return c("<div/>").text(d).html();
    }
    c.widget("ui.wlb_dropdown", c.ui.imdb_btn2, {
        options: {
            model: {
                text: null,
                glyph: ["div", {
                    "class": "btn2_down"
                }
                ],
                tconst: null,
                state: "wlb_loading_on"
            }
        },
        _create: function() {
            var f = this, h = f.element, i = f.options, d = i.model, g = c(".wlb_dropdown_list"), j = h.attr("data-lcn"), e = 0;
            c.extend(f, {
                context: h.attr("data-context") || "",
                required_action: h.attr("data-required-action") || "none",
                weblab_id: h.attr("data-weblab-id") || "control"
            });
            if (!d.tconst) {
                d.tconst = h.attr("data-tconst");
            }
            c.ui.imdb_btn2.prototype._create.apply(this, arguments);
            h.addClass("wlb_dropdown");
            if (!d.tconst) {
                consoleLog("Requires option model.tconst or data-tconst attribute", "wlb-lite");
                f._set_state("error");
                return;
            } else {
                if (!CS.hasAccount()) {
                    f._set_state("wlb_enabled_on");
                }
            }
            c("a.btn2", h).bind("click.wlb_dropdown_btn", function() {
                h.trigger("wlb_user_interaction");
                if (f.required_action === "none") {
                    if (g.is(":visible")) {
                        g.hide();
                    } else {
                        g.show();
                        f._load_dropdown();
                    }
                } else {
                    CS.activate_login_lightbox();
                }
            });
            c("a.btn2", h).bind("mouseenter", function() {
                if (e) {
                    clearTimeout(e);
                }
            });
            c("a.btn2", h).bind("mouseleave", function() {
                e = setTimeout(function() {
                    c(".wlb_dropdown_list").hide();
                }, 300);
            });
            c("a.wlb_message.wlb_lefty").live("click", function() {
                var k = c(this);
                f._request_toggle(k);
                c(".wlb_dropdown_list").hide();
            });
            c("div.wlb_classic_wrapper").delegate(".wlb_dropdown_list", "mouseenter", function() {
                if (e) {
                    clearTimeout(e);
                }
            });
            c("div.wlb_classic_wrapper").delegate(".wlb_dropdown_list", "mouseleave", function() {
                e = setTimeout(function() {
                    c(".wlb_dropdown_list").hide();
                }, 300);
            });
            h.attr("data-initialized", 1);
            f._set_state("wlb_enabled_on");
        },
        destroy: function() {
            var d = this, e = d.element;
            c("a.btn2", e).unbind(".wlb_dropdown_btn");
            c.ui.imdb_btn2.prototype.destroy.apply(this, arguments);
        },
        _is_attached: function() {
            var d = this, e = d.element;
            return (e.parents("body").length > 0);
        },
        _async_update: function(i) {
            var e = this, g = e.element, h = e.options, d = h.model;
            if (!e._is_attached()) {
                return e.destroy();
            }
            if (d.tconst === i.tconst && d.list_id === i.list_id) {
                if (i.list_item_id) {
                    d.list_item_id = i.list_item_id;
                } else {
                    d.list_item_id = null;
                }
                e._set_state("wlb_enabled_on");
                c(".wlb_dropdown_list").empty();
                c(".wlb_dropdown_list").jsonml(a.tmpl_cluster(i.dropdown_items));
                c(".wlb_dropdown_list").show();
            }
            var f = c("a.wlb_message.wlb_lefty").filter("[data-list-id=" + i.list_id + "]");
            e._update_membership_status(f, i.list_item_id);
        },
        _update_membership_status: function(e, f) {
            var d = this;
            if (f) {
                e.addClass("wlb_selected").attr("data-list-item-ids", f).find(".btn2_glyph, .wlb_glyph").html("&#x2714;");
            } else {
                e.removeClass("wlb_selected").attr("data-list-item-ids", "").find(".btn2_glyph, .wlb_glyph").html("+");
            }
        },
        _set_state: function(g) {
            var e = this, f = e.options, d = f.model;
            d.state = g;
            e._ui_render();
        },
        _ui_render: function() {
            var e = this, g = e.element, h = e.options, f = h.templates, d = h.model, k, j, i;
            switch (d.state) {
            case"wlb_loading_on":
                k = null;
                j = null;
                i = f.tmpl_down();
                break;
            case"wlb_enabled_on":
                k = null;
                j = null;
                i = f.tmpl_down();
                break;
            case"error":
                k = "Watchlist currently unavailable";
                j = "Unavailable";
                i = f.tmpl_error();
                break;
            }
            e.modifyText(j);
            e.modifyGlyph(i);
            c("a.btn2", g).attr("title", k);
        },
        _request_toggle: function(n) {
            var q = this, r = q.element, e = q.options, p = e.templates, f = e.model, d = "/list/_ajax/edit";
            r.trigger("wlb_user_interaction");
            var l = n.attr("data-list-id");
            var g = (n.attr("data-list-item-ids") || "").split(",");
            var o = c(".btn2_text, .wlb_text", n).text();
            var h = n.hasClass("wlb_selected");
            var k;
            for (var j in g) {
                if (h) {
                    k = {
                        action: "delete",
                        list_id: l,
                        list_item_id: g[j],
                        ref_tag: "title"
                    };
                } else {
                    k = {
                        "const": f.tconst,
                        list_id: l,
                        ref_tag: "title"
                    };
                }
                if (q.extra) {
                    k[q.extra.name] = q.extra.value;
                }
                c.ajax({
                    url: d,
                    type: "POST",
                    data: k,
                    beforeSend: window.addClickstreamHeadersToAjax,
                    error: function() {
                        consoleLog("failed to toggle membership", "wl_dropdown");
                        q.show_alert(c(".wlb_dropdown_btn"), "error", "Could not update ", o);
                    },
                    success: function(m) {
                        var i = m.list_item_id || null;
                        if (m.status != 200) {
                            return this.error();
                        }
                        if (l === "watchlist" && m.list_id) {
                            c("a.wlb_message.wlb_lefty").attr("data-list-id", m.list_id);
                            l = m.list_id;
                        }
                        if (i) {
                            q.show_alert(c(".wlb_dropdown_btn"), "success", "Added to ", o);
                        } else {
                            q.show_alert(c(".wlb_dropdown_btn"), "success", "Removed from ", o);
                        }
                        q._async_update({
                            tconst: f.tconst,
                            list_id: l,
                            list_item_id: i
                        });
                    }
                });
            }
        },
        _load_dropdown: function() {
            var e = this, g = e.element, h = e.options, d = h.model, f;
            g.trigger("wlb_user_interaction");
            if (!CS.hasAccount()) {
                CS.activate_login_lightbox();
                return;
            }
            c.ajax({
                url: "/list/_ajax/wlb_dropdown",
                type: "POST",
                data: {
                    tconst: d.tconst
                },
                beforeSend: window.addClickstreamHeadersToAjax,
                error: function() {
                    consoleLog("failed to toggle membership", "wl_dropdown");
                },
                success: function(i) {
                    if (i.status != 200) {
                        return this.error();
                    }
                    if (i.list_id) {
                        d.list_id = i.list_id;
                    }
                    e._async_update({
                        tconst: d.tconst,
                        list_id: d.list_id,
                        list_class: "watchlist",
                        list_item_id: i.list_item_id,
                        dropdown_items: i.items
                    });
                }
            });
        }
    });
})(jQuery);
jQuery(document).ready(function() {
    $(".wlb_watchlist_btn").wlb_lite({
        model: {
            assets: {
                glyph: {
                    out: imdb_btn2.templates.tmpl_plus()
                },
                text: {
                    out: "Watchlist"
                }
            }
        }
    });
    $(".wlb_dropdown_btn").wlb_dropdown();
    $.fn.wl_map = function(a, d) {
        if (a.constructor != Array || typeof(d) != "function") {
            return;
        }
        if (a.map && typeof(a.map) == "function") {
            return a.map(d);
        }
        var c = [];
        for (var b = 0; b < a.length; b++) {
            c.push(d(a[b]));
        }
        return c;
    };
});
(function(a) {
    if (a(document).data("wl-button-analytics")) {
        return;
    } else {
        a(document).data("wl-button-analytics", true);
    }
    if (!("_gaq" in window)) {
        window._gaq = [];
    }
    a(document).bind("wlb_async_update", function(i, f) {
        var j = a(i.target), h = a("a", j), g = h.filter("[data-list-id=" + f.list_id + "]"), k = j.attr("data-tconst"), c = j.attr("data-ga-identifier") || j.attr("data-caller-name") || j.closest("[data-caller-name]").attr("data-caller-name"), b = "watchlist", d = "add_from";
        if (g.closest(".wlb_dropdown").length > 0) {
            b = "list";
        }
        if (!f.list_item_id) {
            d = "remove_from";
        }
        _gaq.push(["_trackEvent", b, d + "_" + c, k]);
        _gaq.push(function() {
            consoleLog(b + " " + d + " " + c + " " + f.tconst, "gaq");
        });
    });
})(jQuery);
