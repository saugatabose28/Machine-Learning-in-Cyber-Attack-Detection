(function() {
    dust.register("tl/apps/profile/v2/embed/treasury_view_v2", N);
    var ai = {
        "media_cell_2row": M,
        "media_cell_3row": F,
        "thumbnail_view": an,
        "reorder_item": am,
        "hidden_view": aj
    };
    function N(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("ne", aD, {
            "else": Z,
            "block": V
        }, {
            "key": ap,
            "value": "true",
            "type": "boolean"
        })
    }
    function M(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<div class="media-cell media-wrapper-2row treasury-open-item evt-dispatch').helper("eq", aD, {
            "block": L
        }, {
            "key": K,
            "value": "-1"
        }).write('" data-event-id="treasury-open-item" data-item-id="').reference(aD.get("id"), aD, "h").write('">').block(aD.getBlock("thumbnail_view"), aD, {}, null).write("</div>").section(aD.get("items"), aD, {
            "block": J
        }, null)
    }
    function L(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" media-add-frame cell disabled")
    }
    function K(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function J(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("meta"), aD, {
            "block": I
        }, null)
    }
    function I(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": H
        }, {
            "key": G,
            "value": "-1"
        })
    }
    function H(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("reorder_item"), aD, {}, null)
    }
    function G(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function F(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<div class="media-cell media-wrapper-3row treasury-open-item evt-dispatch').helper("eq", aD, {
            "block": E
        }, {
            "key": ax,
            "value": "-1"
        }).write('" data-event-id="treasury-open-item" data-item-id="').reference(aD.get("id"), aD, "h").write('">').block(aD.getBlock("thumbnail_view"), aD, {}, null).write("</div>").section(aD.get("items"), aD, {
            "block": av
        }, null)
    }
    function E(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" media-add-frame cell disabled")
    }
    function ax(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function av(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("meta"), aD, {
            "block": at
        }, null)
    }
    function at(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": aq
        }, {
            "key": ao,
            "value": "-1"
        })
    }
    function aq(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("reorder_item"), aD, {}, null)
    }
    function ao(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function an(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.partial("tl/apps/profile/treasury/profile_thumbnail_view", aD, null)
    }
    function am(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("formData"), aD, {
            "block": al
        }, {
            "group": ak,
            "itemId": "TRSY"
        })
    }
    function al(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.partial("tl/apps/profile/treasury/reorder_item", aD, null)
    }
    function ak(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write("treasury-").reference(aD.get("profileElement"), aD, "h")
    }
    function aj(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<a href="javascript:void(0)" class="hidden-view-more view-media-link evt-dispatch" data-event-id="treasury-view-more" role="button">').reference(aD.get("i18n_view_more"), aD, "h").write("</a>").helper("eq", aD, {
            "else": ah,
            "block": ag
        }, {
            "key": aa,
            "value": "B"
        })
    }
    function ah(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<a href="javascript:void(0)" class="hidden-view-less view-media-link evt-dispatch stealth" data-event-id="treasury-view-less" role="button">').reference(aD.get("i18n_view_less"), aD, "h").write("</a>")
    }
    function ag(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("items"), aD, {
            "block": af
        }, null)
    }
    function af(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("meta"), aD, {
            "block": ae
        }, null)
    }
    function ae(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": ad
        }, {
            "key": ab,
            "value": "-1"
        })
    }
    function ad(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<a href="#tooltip-').reference(aD.get("profileElement"), aD, "h").write('" class="hidden-view-collapse evt-dispatch transparent" data-event-id="treasury-view-less">').reference(aD.get("i18n_collapse"), aD, "h").write("</a>").helper("jsControl", aD, {
            "block": ac
        }, {
            "name": "LI.BalloonCallout"
        }).write('<div id="tooltip-').reference(aD.get("profileElement"), aD, "h").write('" class="callout-container"><div class="callout-content">').reference(aD.get("i18n_collapse"), aD, "h").write("</div></div>")
    }
    function ac(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write("{width: 'auto',id:'tooltip-").reference(aD.get("profileElement"), aD, "h", ["h", "j", "s"]).write("',orientation: 'bottom',type: 'tooltip-callout'}")
    }
    function ab(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function aa(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("lix_treasury_pagination"), aD, "h")
    }
    function Z(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "else": Y,
            "block": X
        }, {
            "key": W,
            "value": "2row"
        }).block(aD.getBlock("reorder_item"), aD, {}, null)
    }
    function Y(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("media_cell_3row"), aD, {}, null)
    }
    function X(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("media_cell_2row"), aD, {}, null)
    }
    function W(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("whichRow"), aD, "h")
    }
    function V(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.exists(aD.get("items"), aD, {
            "block": U
        }, null)
    }
    function U(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("items"), aD, {
            "block": T
        }, null).write('<div class="treasury-container').helper("ne", aD, {
            "block": R
        }, {
            "key": Q,
            "value": "true"
        }).helper("eq", aD, {
            "else": P,
            "block": O
        }, {
            "key": aD.get("lix_facelift"),
            "value": "B"
        }).write('"').section(aD.get("items"), aD, {
            "block": D
        }, null).write(">").section(aD.get("items"), aD, {
            "block": z
        }, null).write("</div>").helper("eq", aD, {
            "else": b,
            "block": au
        }, {
            "key": ar,
            "value": "true",
            "type": "string"
        })
    }
    function T(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": S
        }, {
            "key": aD.get("$len"),
            "value": "1",
            "type": "number"
        })
    }
    function S(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.partial("tl/apps/profile/treasury/treasury_add_link", aD, null)
    }
    function R(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" no-server-fetch")
    }
    function Q(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("hasMore"), aD, "h")
    }
    function P(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" original")
    }
    function O(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" facelift")
    }
    function D(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("meta"), aD, {
            "block": C
        }, null)
    }
    function C(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": B
        }, {
            "key": A,
            "value": "-1"
        })
    }
    function B(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('data-section-id="').reference(aD.get("profileElement"), aD, "h").write('"')
    }
    function A(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function z(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("math", aD, {
            "block": y
        }, {
            "key": aD.get("$idx"),
            "method": "mod",
            "operand": "5"
        }).helper("math", aD, {
            "block": f
        }, {
            "key": aD.get("$len"),
            "method": "subtract",
            "operand": aD.get("$idx")
        })
    }
    function y(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("lte", aD, {
            "else": x,
            "block": o
        }, {
            "value": "1",
            "type": "number"
        })
    }
    function x(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("math", aD, {
            "block": w
        }, {
            "key": aD.get("$idx"),
            "method": "mod",
            "operand": "5"
        })
    }
    function w(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": v
        }, {
            "value": "2",
            "type": "number"
        }).section(aD.get("meta"), aD, {
            "block": q
        }, null).helper("eq", aD, {
            "block": p
        }, {
            "value": "4",
            "type": "number"
        })
    }
    function v(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<div class="media-wrapper').helper("gte", aD, {
            "block": u
        }, {
            "key": aD.get("$idx"),
            "value": "5",
            "type": "number"
        }).section(aD.get("meta"), aD, {
            "block": t
        }, null).write('">')
    }
    function u(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" stealth")
    }
    function t(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": s
        }, {
            "key": r,
            "value": "-1"
        })
    }
    function s(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" media-add-frame")
    }
    function r(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function q(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("media_cell_3row"), aD, {}, null)
    }
    function p(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write("</div>")
    }
    function o(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("math", aD, {
            "block": n
        }, {
            "key": aD.get("$idx"),
            "method": "mod",
            "operand": "5"
        })
    }
    function n(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": m
        }, {
            "value": "0",
            "type": "number"
        }).section(aD.get("meta"), aD, {
            "block": h
        }, null).helper("eq", aD, {
            "block": g
        }, {
            "value": "1",
            "type": "number"
        })
    }
    function m(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write('<div class="media-wrapper').helper("gte", aD, {
            "block": l
        }, {
            "key": aD.get("$idx"),
            "value": "5",
            "type": "number"
        }).section(aD.get("meta"), aD, {
            "block": k
        }, null).write('">')
    }
    function l(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" stealth")
    }
    function k(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": j
        }, {
            "key": i,
            "value": "-1"
        })
    }
    function j(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write(" media-add-frame")
    }
    function i(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("id"), aD, "h")
    }
    function h(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("media_cell_2row"), aD, {}, null)
    }
    function g(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write("</div>")
    }
    function f(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": e
        }, {
            "value": "1",
            "type": "number"
        })
    }
    function e(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("math", aD, {
            "block": d
        }, {
            "key": aD.get("$idx"),
            "method": "mod",
            "operand": "5"
        })
    }
    function d(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {}, {
            "value": "1",
            "type": "number"
        }).helper("eq", aD, {}, {
            "value": "4",
            "type": "number"
        }).helper("default", aD, {
            "block": c
        }, null)
    }
    function c(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.write("</div>")
    }
    function b(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.section(aD.get("items"), aD, {
            "block": a
        }, null)
    }
    function a(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "block": aC
        }, {
            "key": aD.get("$idx"),
            "value": "0",
            "type": "number"
        })
    }
    function aC(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("eq", aD, {
            "else": aB,
            "block": az
        }, {
            "key": aw,
            "value": "true",
            "type": "string"
        })
    }
    function aB(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("gte", aD, {
            "block": aA
        }, {
            "key": aD.get("$len"),
            "value": "6",
            "type": "number"
        })
    }
    function aA(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("hidden_view"), aD, {}, null)
    }
    function az(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.helper("gte", aD, {
            "block": ay
        }, {
            "key": aD.get("$len"),
            "value": "7",
            "type": "number"
        })
    }
    function ay(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("hidden_view"), aD, {}, null)
    }
    function aw(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("selfView"), aD, "h")
    }
    function au(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.block(aD.getBlock("hidden_view"), aD, {}, null)
    }
    function ar(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("hasMore"), aD, "h")
    }
    function ap(aE, aD) {
        aD = aD.shiftBlocks(ai);
        return aE.reference(aD.get("addNew"), aD, "h")
    }
    return N
})();
(function() {
    dust.register("treasury_view_v2", dust.cache["tl/apps/profile/v2/embed/treasury_view_v2"])
})();
(function() {
    dust.register("tl/apps/profile/v2/embed/treasury_dialog_v2", m);
    function m(q, p) {
        return q.section(p.get("treasury"), p, {
            "block": k
        }, null)
    }
    function k(q, p) {
        return q.exists(p.get("pictureID"), p, {
            "else": i,
            "block": g
        }, null).write('<div class="treasury-dialog-wrapper">').exists(p.get("items"), p, {
            "block": f
        }, null).write("</div>")
    }
    function i(q, p) {
        return q
    }
    function g(q, p) {
        return q
    }
    function f(q, p) {
        return q.write('<div></div><div class="carousel-container"><div class="carousel-wrapper"><ul class="carousel">').section(p.get("items"), p, {
            "block": e
        }, null).write('</ul></div><a href="javascript:void(0);" class="btn-prev disabled evt-dispatch" data-event-id="treasury-carousel-prev" role="button">‹</a><a href="javascript:void(0);" class="btn-next evt-dispatch" data-event-id="treasury-carousel-next" role="button">›</a><p class="carousel-position"></p><div class="hr"></div></div>')
    }
    function e(q, p) {
        return q.section(p.get("comments"), p, {
            "block": d
        }, null).section(p.get("meta"), p, {
            "block": b
        }, null).section(p.get("likes"), p, {
            "block": a
        }, null).section(p.get("meta"), p, {
            "block": n
        }, null)
    }
    function d(q, p) {
        return q.section(p.get("recentComments"), p, {
            "block": c
        }, null)
    }
    function c(q, p) {
        return q
    }
    function b(q, p) {
        return q
    }
    function a(q, p) {
        return q.section(p.get("recentActors"), p, {
            "block": o
        }, null)
    }
    function o(q, p) {
        return q
    }
    function n(q, p) {
        return q.write('<li class="evt-dispatch" data-event-id="treasury-carousel-selected" data-item-id="').reference(p.get("id"), p, "h").write('"><a href="javascript:void(0);" role="button">').section(p.get("images"), p, {
            "block": l
        }, null).write('</a><div class="meta"><div class="background"></div><p><span title="').reference(p.get("title"), p, "h").write('">').reference(p.get("title"), p, "h").write("</span></p></div></li>")
    }
    function l(q, p) {
        return q.helper("eq", p, {
            "block": j
        }, {
            "key": h,
            "value": "0"
        })
    }
    function j(q, p) {
        return q.write('<img src="').reference(p.get("url"), p, "h").write('" title="').reference(p.get("title"), p, "h").write('" alt="').reference(p.get("altText"), p, "h").write('"/>')
    }
    function h(q, p) {
        return q.reference(p.get("$idx"), p, "h")
    }
    return m
})();
(function() {
    dust.register("treasury_dialog_v2", dust.cache["tl/apps/profile/v2/embed/treasury_dialog_v2"])
})();
function ShowMore(c, d) {
    var d = d || {};
    c = (c.constructor == String) ? YDom.get(c) : c;
    var d = {
        charCount: d.charCount || 100,
        className: d.className || "",
        showMoreText: d.showMoreText || LI.i18n.get("ShowMore-see-more"),
        showLessText: d.showLessText || LI.i18n.get("ShowMore-see-less"),
        showMoreTextLong: d.showMoreTextLong || LI.i18n.get("ShowMore-see-more-long"),
        showLessTextLong: d.showLessTextLong || LI.i18n.get("ShowMore-see-less-long"),
        showEllipsis: (d.showEllipsis === false) ? false: true
    };
    if (c && c.innerHTML) {
        var l = c.innerHTML, b = d.charCount, f = d.showMoreText, g = /<\/?\w+(\s+\w+="?[^>]*"?)*\s*>/g, p = l.match(g), e = l.replace(g, "|").replace(/\n/g, "\u0007").replace(/\s+/g, " ").replace(/(^\s|\s$)/g, ""), o = e.match(new RegExp("(.{" + b + "})(.*)"));
        if (!o || o[2].length < f.length * 1.5) {
            return null
        } else {
            var k = o[1], m = o[2];
            if (k.match(/\w$/) && m.match(/^\w/)) {
                m = k.match(/\w+$/)[0] + m;
                k = k.replace(/\w+$/, "")
            }
            var n, j, a = [], i = {
                collapsed: true,
                showMore: f,
                showLess: d.showLessText,
                showMoreLong: d.showMoreTextLong,
                showLessLong: d.showLessTextLong,
                className: d.className,
                el: c
            };
            while (p && p[0]) {
                n = p.shift();
                if (k.match(/\|[^$]/)) {
                    k = k.replace(/\|/, n)
                } else {
                    if (k.match(/\|/)) {
                        k = k.replace(/\|/, "")
                    } else {
                        if (n.match(/<\//)) {
                            a.push(n)
                        }
                    }
                }
                if (p.length == 0) {
                    k += a.join("")
                }
            }
            var h = k.replace(/^\s+|\s+$/g, "");
            if (d.showEllipsis) {
                h += "..."
            }
            h = h.replace(/\u0007/g, "\n");
            i.content = {
                original: l,
                truncated: h
            };
            c.innerHTML = h;
            j = i.link = document.createElement("A");
            j.href = "#";
            j.title = d.showLessTextLong;
            j.className = "toggle-show-more";
            j.innerHTML = i.showLess;
            if (i.collapsed) {
                j.title = d.showMoreTextLong;
                j.innerHTML = i.showMore
            }
            c.appendChild(j);
            YEvent.on(c, "click", this.toggle, i)
        }
    }
}
ShowMore.prototype = {
    toggle: function(a, e) {
        var f, d = e.link, c = e.content, b = YEvent.getTarget(a);
        if (b.tagName == "A" && b.className == "toggle-show-more") {
            YEvent.preventDefault(a);
            f = e.collapsed=!e.collapsed;
            this.removeChild(d);
            if (f) {
                d.title = e.showMoreLong;
                d.innerHTML = e.showMore;
                this.innerHTML = c.truncated;
                if (e.className && e.el) {
                    YDom.removeClass(e.el, e.className)
                }
            } else {
                d.title = e.showLessLong;
                d.innerHTML = e.showLess;
                this.innerHTML = c.original;
                if (e.className && e.el) {
                    YDom.addClass(e.el, e.className)
                }
            }
            this.appendChild(d)
        }
    }
};
(function(c, e) {
    var d = "ontouchstart" in document.documentElement ? "touchend": "click", b = LI.Events.fire, a = e.trim;
    e(document).on(d, ".evt-dispatch", function(h) {
        var g = e(this), f = a(g.data("event-id"));
        h.preventDefault();
        h.stopPropagation();
        if (f&&!g.hasClass("disabled")) {
            b(f, g)
        }
    })
}(this, jQuery));
LI.define("RichViewer");
LI.RichViewer = LI.BaseControl.extend(function(f) {
    var p = $(window), x = $("body"), y = $("html"), i = $(document), o, B, b, r, u = false, l = {
        RICH_VIEWER: "rich_viewer",
        VIEWER: "rich_viewer_viewer",
        CAROUSEL: "rich_viewer_carousel",
        SOCIAL: "rich_viewer_side_rail",
        FLAG: "rich_viewer_flag",
        BROWSEMAP: "treasury_landing_browsemap"
    }, D = ["tl/apps/profile/treasury/rich_viewer", "tl/apps/profile/treasury/rich_viewer_viewer", "tl/apps/profile/treasury/rich_viewer_carousel", "tl/apps/profile/treasury/rich_viewer_side_rail", "tl/apps/profile/treasury/rich_viewer_flag", "tl/apps/profile/treasury/treasury_landing_browsemap"], n = ["css!scss/apps/profile/treasury/rich_viewer"], q = {
        carousel: {
            track: undefined
        },
        social: {},
        flag: undefined
    }, z = {
        headerExpandHeight: undefined,
        headerDiffHeight: undefined,
        headerTimer: undefined,
        carouselLock: false,
        carouselStart: undefined,
        carouselEnd: undefined,
        carouselRange: undefined,
        carouselScrollMax: undefined,
        carouselTotal: undefined,
        canTransition: undefined
    }, d = "disabled", e = "selected", C = "hidden", w = "flagged semi-transparent", E = "flagged transparent", v = "transparent", t = "show-social", k = "collapsed", c = "stealth", s = 90, m = "ontouchstart" in document.documentElement ? "touchend": "click", A = "mouseenter", h = "mouseleave", a = "keyup", j = "resize", g = LI.browser.ie, F = (LI.TREASURY_CONF && LI.TREASURY_CONF.lix) || {};
    return {
        beforeDecoration: function() {
            var I = this, G, H;
            G = this._config = _.defaults(this._config, q);
            H = G.data;
            b=!H;
            if (!b) {
                H.hasCarousel=!!G.carousel;
                H.hasSocial=!!G.social
            }
            x.off(A, ".treasury-open-item");
            if (!g) {
                $.when(this.loadDependencies(D), this.loadCss(n)).then(function() {
                    B = true;
                    if (!b && o) {
                        I.open()
                    }
                })
            }
        },
        attachEventListeners: function() {
            var G = this;
            x.on(m, ".treasury-open-item:not(.disabled):not(.editing)", function(H) {
                var I = H.target.nodeName;
                H.preventDefault();
                if (I !== "A" && I !== "BUTTON") {
                    o = true;
                    G._$el = $(H.currentTarget);
                    if (r || g || (B&&!b)) {
                        G.open(G._$el)
                    }
                }
            })
        },
        onResolve: function(G) {
            this.open()
        },
        _render: function() {
            r = true;
            return this._buildMarkup().then(this._attachEventListeners).then(this._bindSocialCommentsEvents)
        },
        _buildMarkup: function() {
            return $.when(this._renderRichViewerMarkup()).then(this._renderMarkUpSuccess, this._renderMarkUpFailure)
        },
        _renderRichViewerMarkup: function() {
            var G = new $.Deferred();
            this._setActiveItemMeta(this._$el);
            dust.render(l.RICH_VIEWER, this._config.data, function(I, H) {
                if (I) {
                    G.reject(I)
                } else {
                    G.resolve(H)
                }
            });
            return G.promise()
        },
        _renderMarkUpSuccess: function(G) {
            var H = this._config.data.meta, I = H.type;
            x.append(G);
            this.rv = $(".rich-viewer");
            this.carousel = this.rv.find(".carousel");
            this.browseMap = $(".browsemap");
            this.isBrowseMap=!!this.browseMap.length;
            if (I === "video" || I === "rich") {
                this.renderContentWithIframe(H)
            }
            this.prepareHeader();
            if (this._config.carousel && this.carousel.length) {
                this.prepareCarousel()
            }
        },
        _renderMarkUpFailure: function() {
            throw new Error("Unable to render RichViewer markup")
        },
        renderContentWithIframe: function(O) {
            var M = window.location.protocol === "https:", H = document.createElement("iframe"), J = $(H), I = $('.viewer[name="' + parseInt(O.id, 10) + '"]'), K = (F.specialUrls !== undefined) && _.some(F.specialUrls.split("_"), function(P) {
                return O.html.indexOf(P)>-1
            }), L = M&&!F.removeHttps&&!K ? O.html.replace(/http:/gi, "https:").replace(/http%3A/gi, "https%3A"): O.html, N = $(L).attr("style", ""), G;
            if (L.match(/iframe/)) {
                G = N.attr("src");
                if (G.indexOf("youtube.com/embed/")!==-1) {
                    N.attr("src", LI.addParams(G, {
                        "wmode": "transparent",
                        "html5": "1"
                    }))
                } else {
                    if (G.indexOf("behance.net/")!==-1) {
                        N.attr("src", G.replace("iframe=1", "iframe=2")).attr("width", "").attr("height", "").attr("scrolling", "auto")
                    } else {
                        N.attr("src", G)
                    }
                }
                I.append(N);
                return
            } else {
                if (L.match(/<embed/)) {
                    N = N.is("embed") ? N : N.find("embed");
                    G = N.attr("src")
                }
            }
            if (g) {
                J.attr("src", G ? G : "javascript:void((function(){document.open();document.domain='" + document.domain + "';document.close();})())")
            } else {
                J.attr("src", G ? G : "about:blank")
            }
            J.attr("frameborder", 0).attr("scrolling", "no").hide();
            I.append(J);
            setTimeout(function() {
                var P = H.contentWindow || H.contentDocument, Q = '<html><body style="margin:0;">' + L;
                if (P.document) {
                    P = P.document
                }
                P.open();
                if (g) {
                    P.write(Q + '</body><script>document.domain="' + document.domain + '";<\/script></html>')
                } else {
                    P.write(Q + "</body></html>")
                }
                P.close();
                setTimeout(function() {
                    var R = $(H).contents().find("iframe, object, embed, div"), S = {
                        height: "100%",
                        width: "100%"
                    };
                    R.attr(S).css($.extend(S, {
                        margin: "0 auto"
                    }));
                    J.show()
                }, 1000)
            }, 1)
        },
        prepareHeader: function() {
            var I = this.rv.find(".description"), J = I.find(".text"), H = J.height(), G = z.headerExpandHeight = J.prop("scrollHeight"), K = z.headerDiffHeight = G - H;
            if (K) {
                I.addClass(k)
            } else {
                I.find(".see-more-btn").addClass(c)
            }
        },
        toggleHeader: function(K) {
            var M = z, H = this.rv, O = H.find(".description"), Q = H.find(".viewer-column"), G = H.find(".viewer-header"), I = H.find(".viewer-carousel"), R = "", P = "", J = "", N = "", L;
            if (K) {
                L = M.headerDiffHeight;
                R = M.headerExpandHeight + "px";
                P = L + "px";
                J = "-" + L + "px";
                N = "-" + L + "px";
                O.removeClass(k)
            } else {
                O.addClass(k);
                clearTimeout(M.headerTimer)
            }
            O.find(".text").css("height", R);
            Q.css("margin-top", P);
            G.css("margin-top", J);
            I.css("bottom", N)
        },
        calculateCarouselPosition: function(O, J) {
            var I = this._config.data, K = z, G = this.carousel, N = K.carouselTotal, P = this.rv.find(".carousel-container"), Q = P.find(".btn-prev"), H = P.find(".btn-next"), M, L = I.itemNumber;
            switch (O) {
            case"carouselPrev":
                K.carouselStart = K.carouselStart - K.carouselRange;
                if (K.carouselStart >= 1) {
                    K.carouselEnd = K.carouselEnd - K.carouselRange
                } else {
                    K.carouselStart = 1;
                    K.carouselEnd = K.carouselRange
                }
                break;
            case"carouselNext":
                K.carouselEnd = K.carouselEnd + K.carouselRange;
                if (K.carouselEnd <= N) {
                    K.carouselStart = K.carouselStart + K.carouselRange
                } else {
                    K.carouselStart = N - K.carouselRange + 1;
                    K.carouselEnd = N
                }
                break;
            default:
                M = P.width();
                K.carouselStart = (Math.floor(parseInt(G.css("left"), 10) / s)*-1) + 1;
                if (K.carouselStart >= N) {
                    K.carouselStart = L
                }
                K.carouselRange = Math.floor(M / s);
                K.carouselEnd = K.carouselStart + K.carouselRange - 1;
                K.carouselScrollMax = J;
                if (K.carouselEnd >= N) {
                    K.carouselEnd = N;
                    if (G.width() > M) {
                        G.css("left", J + "px")
                    }
                }
            }
            this.rv.find(".carousel-position").html(I.i18n_carousel_position.replace("{0}", K.carouselStart).replace("{1}", K.carouselEnd).replace("{2}", N));
            z = K
        },
        prepareCarousel: function() {
            var G = this.carousel, Q = G.find("li"), I = G.width(), J = this.rv, M = this._config.data, N = M.meta.id, L = this.locateItemById(N), P = J.find(".carousel-container").width(), H = P - I, O = M.itemNumber, K =- (s * O);
            Q.removeClass(e);
            Q.eq(O).addClass(e);
            if (this.isBrowseMap) {
                this._updateBrowsemap(L)
            }
            if (I <= P) {
                J.find(".viewer-carousel").find(".btn-prev").addClass(d);
                J.find(".viewer-carousel").find(".btn-next").addClass(d)
            } else {
                G.css("left", (K > H ? K : H) + "px")
            }
            z.carouselTotal = M.treasury.num, this.calculateCarouselPosition("prepare", H)
        },
        _bindSocialCommentsEvents: function() {
            var L = this, K = $(".rich-viewer textarea"), J = $(".rich-viewer .comment-btn"), G = $(".social-integration"), H = $("#lb-social-comment")[0], I;
            J.on(m, function(M) {
                K.trigger("keydown", [true]);
                J.attr("disabled", "disabled")
            });
            K.on("keydown paste", function(R, N) {
                var P = K, O = L._config.data, S = O.treasury_conf, M, Q;
                if (!$(".comment-save-error").hasClass(C)) {
                    $(".comment-save-error").addClass(C);
                    P.removeClass("input-error")
                }
                if (N === true) {
                    M = P.attr("data-url");
                    Q = $.trim(P.val());
                    if (!Q) {
                        return true
                    }
                    $.ajax(M, {
                        type: "POST",
                        dataType: "JSON",
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "X-IsAJAXForm": 1
                        },
                        data: {
                            message: Q,
                            activityId: O.meta.activityId
                        },
                        error: function() {
                            LI.Events.fire("show-media-error", S.i18n.error_posting_comment);
                            $(".comment-form .comment-save-error").removeClass(C);
                            P.addClass("input-error")
                        },
                        success: function(U) {
                            var ab = P.val(), T = $(".social-integration .comments ul"), W = T.children(".hidden.comment").last(), X = W.clone(), Z, V, aa, Y;
                            if (!U ||!U.content || U.status !== "ok" ||!U.content.commentID) {
                                LI.Events.fire("show-media-error", S.i18n.error_posting_comment)
                            }
                            Z = U.content.threadUrn;
                            V = U.content.commentID;
                            P.val("");
                            if (F.commentDeletion === "enabled") {
                                aa = X.find(".delete");
                                Y = aa.data("url").replace("_threadUrn", Z).replace("_commentId", V);
                                aa.attr("data-url", Y).data("url", Y)
                            }
                            X.find("q").text(ab);
                            X.removeClass(C);
                            T.find("li.comment.hidden").before(X);
                            G.animate({
                                scrollTop: G[0].scrollHeight
                            }, 800);
                            L._updateCommentCounter(true);
                            O.comments = O.comments || {};
                            O.comments.totalComments = (O.comments.totalComments || 0) + 1;
                            O.comments.recentComments = O.comments.recentComments || [];
                            O.comments.recentComments.push({
                                id: parseInt(V, 10),
                                deletable: true,
                                commenter: {
                                    url: S.sessionProfile,
                                    image: (S.sessionAvatar) ? {
                                        url: S.sessionAvatar
                                    }
                                    : null,
                                    title: S.sessionFullName
                                },
                                message: ab,
                                url__remove_comment: Y ? Y: null
                            })
                        }
                    });
                    return false
                }
            })
        },
        _updateCommentCounter: function(H) {
            var G, I;
            G = $(".social-integration .comment-counter .counter");
            I = (parseInt(G.text().replace(/\(|\)/, ""), 10) || 0) + (H ? 1 : - 1);
            G.text(I ? "(" + I + ")" : "")
        },
        locateItemById: function(J) {
            var I = this._config.data, H = I && I.treasury && I.treasury.items, G = H && H.length;
            if (typeof this._$el === "number" && G) {
                if (J < G) {
                    return {
                        item: H[this._$el],
                        index: this._$el
                    }
                } else {
                    return {
                        item: H[0],
                        index: 0
                    }
                }
            }
            while (G--) {
                if (H[G].meta.id === J ||!G) {
                    return {
                        item: H[G],
                        index: G
                    }
                }
            }
            return null
        },
        _trackViewEvent: function(H) {
            var G = this._config.carousel.track;
            if (G) {
                $.ajax({
                    headers: {
                        "X-IsAJAXForm": "1"
                    },
                    type: "POST",
                    url: G.replace("_treasuryId", H)
                })
            }
        },
        _setActiveItemMeta: function(H) {
            var L = typeof H === "number" ? H: H.data("item-id"), K = this.locateItemById(L), G = "http://", I = "https://", J;
            if (K) {
                this._trackViewEvent(L);
                J = K.item.meta.url;
                if (J && J.indexOf(G) && J.indexOf(I)) {
                    K.item.meta.url = G + J
                }
                this._config.data.meta = K.item.meta;
                this._config.data.likes = K.item.likes;
                this._config.data.comments = K.item.comments;
                this._config.data.itemNumber = K.index;
                return true
            }
            return false
        },
        selectItem: function(H) {
            var J = this, I, G;
            if (this._setActiveItemMeta(this._$el)) {
                dust.render(l.VIEWER, this._config.data, function(L, K) {
                    var M;
                    if (!L) {
                        J.rv.find("iframe").addClass(c);
                        J.rv.find(".viewer-container").replaceWith(K);
                        M = J._config.data.meta.type;
                        if (M === "video" || M === "rich") {
                            J.renderContentWithIframe(J._config.data.meta)
                        }
                        setTimeout(function() {
                            J.prepareHeader()
                        }, 0)
                    }
                });
                if (this._config.carousel&&!this.carousel.length && z.carouselTotal > 1) {
                    dust.render(l.CAROUSEL, this._config.data, function(L, K) {
                        if (!L) {
                            J.rv.find(".viewer-container").after(K);
                            J.carousel = J.rv.find(".carousel")
                        }
                    })
                }
                if (this.carousel.length&&!H) {
                    setTimeout(function() {
                        J.prepareCarousel()
                    }, 0)
                }
                if (this.carousel.length) {
                    this.carousel.find("." + e).removeClass(e);
                    this.carousel.find("li").eq(this._config.data.itemNumber).addClass(e)
                }
                if (this._config.social) {
                    dust.render(l.SOCIAL, this._config.data, function(L, K) {
                        if (!L) {
                            J.rv.find(".side-rail").replaceWith(K);
                            J._bindSocialCommentsEvents()
                        }
                    })
                }
                if (this.isBrowseMap) {
                    I = this._config.data.meta.id;
                    G = this.locateItemById(I);
                    this._updateBrowsemap(G)
                }
            }
        },
        updateData: function(H) {
            var J = this, G = this._config, I = G.data = H;
            I.hasCarousel=!!G.carousel;
            I.hasSocial=!!G.social;
            b = false;
            if (I.hasCarousel && this.carousel) {
                dust.render(l.CAROUSEL, this._config.data, function(L, K) {
                    if (!L) {
                        J.rv.find(".viewer-carousel").replaceWith(K === "" ? " " : K);
                        J.carousel = J.rv.find(".carousel");
                        z.carouselTotal = J._config.data.treasury.num
                    }
                })
            }
            if (B && o) {
                this.open(this._$el)
            }
        },
        clearData: function() {
            this._config.data = undefined;
            b = true;
            o = false
        },
        canTransition: function() {
            var G = document.body.style;
            z.canTransition = "WebkitTransition" in G || "MozTransition" in G || "OTransition" in G || "transition" in G ? true : false;
            return z.canTransition
        },
        _attachEventListeners: function() {
            var G = this._config;
            x.on(m, ".rich-viewer .description", this._viewDescriptionHandler).on(A, ".rich-viewer .viewer-header", this._viewHeaderMouseEnterHandler).on(h, ".rich-viewer .viewer-header", this._viewHeaderMouseLeaveHandler);
            if (G.flag) {
                x.on(m, ".rich-viewer .flag-btn", this._flagOpenHandler).on(m, ".rich-viewer .flagged-option[type=radio]", this._flagSelectionHandler).on(m, ".rich-viewer .flag-cta-send", this._flagSendHandler).on(m, ".rich-viewer .flag-close, .rich-viewer .flag-cta-cancel", this._flagCloseHandler)
            }
            if (G.carousel) {
                x.on(m, ".rich-viewer .viewer-carousel li", this._carouselItemHandler).on(m, ".rich-viewer .viewer-carousel .btn-prev, .rich-viewer .viewer-carousel .btn-next", this._carouselPrevNextHandler)
            }
            if (G.social) {
                x.on(m, ".rich-viewer .show-social-btn", this._socialShowBtnHandler).on(a, ".rich-viewer #txt-social-comment", this._socialEnableCommentSubmitHandler)
            }
            x.on(m, ".rich-viewer .rich-viewer-mask, .rich-viewer .btn-close, .rich-viewer .btn-click-to-close", this.close);
            i.on(a, this._keyupHandler);
            p.on(j, this._resizeHandler)
        },
        open: function(G) {
            if (G !== undefined) {
                this._$el = typeof G === "number" ? G : $(G)
            }
            if (!r) {
                if (g) {
                    $.when(this.loadDependencies(D), this.loadCss(n)).then(_.bind(function() {
                        B = true;
                        if (!b) {
                            if (!this.ieToggle) {
                                this.ieToggle = true;
                                this.updateData(this._config.data)
                            } else {
                                setTimeout(_.bind(function() {
                                    this._render().then(this._openRichViewer)
                                }, this), 0)
                            }
                        }
                    }, this))
                } else {
                    this._render().then(this._openRichViewer)
                }
            } else {
                this.selectItem();
                this._openRichViewer()
            }
        },
        _openRichViewer: function() {
            var G = this;
            this.rv.removeClass("stealth");
            setTimeout(function() {
                y.css("overflow", "hidden");
                G.rv.addClass("animate")
            }, 0);
            if (this.isBrowseMap) {
                this._forceScrollOnSocialContainer()
            }
        },
        close: function() {
            var G = this;
            this.rv.removeClass("animate");
            y.css("overflow", "");
            this.rv.find(".viewer-carousel").find(".btn-prev, .btn-next").removeClass(d);
            this.rv.find("iframe").addClass("stealth").remove();
            setTimeout(function() {
                G.rv.addClass("stealth")
            }, 500)
        },
        _keyupHandler: function(G) {
            if (u) {
                return
            }
            if (G.keyCode === 27) {
                this.close()
            } else {
                if (G.keyCode === 37) {
                    if (this.carousel.length) {
                        this._$el = this.carousel.find(".selected").prev();
                        if (!this._$el.length) {
                            this._$el = this.carousel.find("li").last()
                        }
                        this.selectItem(true);
                        this._shiftCarousel(false)
                    }
                } else {
                    if (G.keyCode === 39) {
                        if (this.carousel.length) {
                            this._$el = this.carousel.find(".selected").next();
                            if (!this._$el.length) {
                                this._$el = this.carousel.find("li").first()
                            }
                            this.selectItem(true);
                            this._shiftCarousel(true)
                        }
                    }
                }
            }
        },
        _carouselAnimate: function(I, H, G) {
            var K = this, J = this.carousel;
            u = true;
            J.animate({
                "left": I
            }, {
                duration: "slow",
                done: function() {
                    K.calculateCarouselPosition(H, G);
                    u = false
                }
            })
        },
        _shiftCarousel: function(K) {
            var N = this.carousel, L = N.width(), I = $(".carousel-container").width(), G = I - L, M = parseInt(N.css("left"), 10), J, H;
            z.carouselLock = false;
            if (!z.carouselLock && z.carouselEnd > z.carouselStart) {
                z.carouselLock = true;
                J = z.carouselRange * s*-1;
                H = this._config.data.itemNumber;
                if (K) {
                    if (H > z.carouselEnd) {
                        if ((z.carouselTotal - z.carouselEnd) >= z.carouselRange) {
                            this._carouselAnimate("+=" + J, "carouselNext")
                        } else {
                            this._carouselAnimate(G + "px", "default", G)
                        }
                    } else {
                        if (H === 0 && z.carouselTotal === z.carouselEnd) {
                            this._carouselAnimate("0", "default", G)
                        }
                    }
                } else {
                    if (H < z.carouselStart) {
                        if (z.carouselStart >= z.carouselRange) {
                            this._carouselAnimate("-=" + J, "carouselPrev")
                        } else {
                            this._carouselAnimate("0", "default", G)
                        }
                    } else {
                        if ((H + 1) === z.carouselTotal) {
                            this._carouselAnimate("+=" + G + "px", "default", G)
                        }
                    }
                }
                z.carouselLock = false
            }
        },
        _resizeHandler: function() {
            var H, G;
            this.prepareHeader();
            if (this.carousel.length) {
                G = this.rv.find(".carousel-container").width();
                H = this.carousel.width();
                this.calculateCarouselPosition("resize", G - H)
            }
            if (this.isBrowseMap) {
                this._forceScrollOnSocialContainer()
            }
        },
        _forceScrollOnSocialContainer: function() {
            var H, I = $(".browsemap").outerHeight(), G = $(".social-container"), K = G.outerHeight(), J = $(".side-rail").outerHeight();
            H = J - I;
            G.css("height", H)
        },
        _viewDescriptionHandler: function() {
            this.toggleHeader(this.rv.find(".description").hasClass(k))
        },
        _viewHeaderMouseEnterHandler: function() {
            clearTimeout(z.headerTimer)
        },
        _viewHeaderMouseLeaveHandler: function() {
            var G = this;
            if (!G.rv.find(".description").hasClass(k)) {
                z.headerTimer = setTimeout(function() {
                    G.toggleHeader(false)
                }, 2000)
            }
        },
        _flagOpenHandler: function() {
            var L = this.rv, K = this, J = L.find(".viewer"), H = J.children().not(".flagging-container"), G = H.length ? H.get(0).nodeName === "IFRAME": false, I = L.find(".flagging-container");
            if (!I.length) {
                dust.render(l.FLAG, this._config.data, function(N, M) {
                    if (!N) {
                        J.append(M);
                        I = L.find(".flagging-container");
                        if (z.canTransition !== undefined ? z.canTransition : K.canTransition()) {
                            setTimeout(function() {
                                H.addClass(G ? E : w);
                                I.removeClass(v)
                            }, 0);
                            if (G) {
                                setTimeout(function() {
                                    H.addClass(c)
                                }, 300)
                            }
                        } else {
                            H.addClass(w).addClass(c);
                            I.removeClass(v)
                        }
                    }
                })
            } else {
                if (z.canTransition) {
                    I.removeClass(c);
                    setTimeout(function() {
                        H.addClass(G ? E : w);
                        I.removeClass(v)
                    }, 0);
                    if (G) {
                        setTimeout(function() {
                            H.addClass(c)
                        }, 300)
                    }
                } else {
                    H.addClass(w).addClass(c);
                    I.removeClass(c)
                }
            }
        },
        _flagSelectionHandler: function() {
            this.rv.find(".flag-cta-send").prop("disabled", false)
        },
        _flagSendHandler: function() {
            var G = $(".rich-viewer .flagged-option[type=radio]:checked").data("detail"), I = this._config.data.meta.id, H = this;
            $.ajax(this._config.flag.replace("_treasuryId", I).replace("_detail", G), {
                dataType: "json",
                headers: {
                    "X-IsAJAXForm": "1"
                },
                success: function() {
                    var K = H.rv.find(".flagging-container"), J = K.find(".flag-cta-cancel");
                    K.addClass("success");
                    J.html(J.attr("data-close"))
                }
            })
        },
        _flagCloseHandler: function() {
            var J = this.rv, H = J.find(".viewer").children(), G = H.length ? H.get(0).nodeName === "IFRAME": false, I = J.find(".flagging-container");
            if (z.canTransition) {
                if (G) {
                    H.removeClass(c)
                }
                setTimeout(function() {
                    H.removeClass(G ? E : w);
                    I.addClass(v)
                }, 0);
                setTimeout(function() {
                    I.addClass(c)
                }, 300)
            } else {
                H.removeClass(w).removeClass(c);
                I.addClass(c)
            }
        },
        _carouselItemHandler: function(G) {
            var H = this._$el = $(G.currentTarget);
            if (!H.hasClass(e)) {
                this.selectItem(true)
            }
        },
        _carouselPrevNextHandler: function(H) {
            var J = $(H.currentTarget), N = this, K, M, I, L, G;
            if (!z.carouselLock) {
                z.carouselLock = true;
                K = J.hasClass("btn-next");
                M = this.carousel;
                G = z.carouselScrollMax;
                I = z.carouselRange * s*-1;
                L = parseInt(M.css("left"), 10);
                if (K && (L + I > G)) {
                    M.animate({
                        "left": "+=" + I
                    }, "slow", function() {
                        z.carouselLock = false;
                        N.calculateCarouselPosition("carouselNext")
                    })
                } else {
                    if (!K && (L - I < 0)) {
                        M.animate({
                            "left": "-=" + I
                        }, "slow", function() {
                            z.carouselLock = false;
                            N.calculateCarouselPosition("carouselPrev")
                        })
                    } else {
                        if (K && L === G) {
                            M.animate({
                                "left": 0
                            }, "slow", function() {
                                z.carouselLock = false;
                                N.calculateCarouselPosition("default", G)
                            })
                        } else {
                            if (!K && L === 0) {
                                M.animate({
                                    "left": "+=" + G + "px"
                                }, "slow", function() {
                                    z.carouselLock = false;
                                    N.calculateCarouselPosition("default", G)
                                })
                            } else {
                                M.animate({
                                    "left": (K ? G : 0) + "px"
                                }, "slow", function() {
                                    z.carouselLock = false;
                                    N.calculateCarouselPosition(K ? "carouselNext" : "carouselPrev", G)
                                })
                            }
                        }
                    }
                }
            }
        },
        _socialShowBtnHandler: function() {
            var G = this.rv.find(".rich-viewer-content");
            if (G.hasClass(t)) {
                G.removeClass(t)
            } else {
                G.addClass(t)
            }
        },
        _socialEnableCommentSubmitHandler: function() {
            var I = this.rv, H = I.find("#txt-social-comment"), G = I.find(".comment-btn");
            G.prop("disabled", !H.val())
        },
        _updateBrowsemap: function(H) {
            var I = this, G = LI.addParams(H.item.meta.browsemapUrl, {
                "count": "4",
                "offset": "0"
            });
            $.ajax(G, {
                type: "GET",
                dataType: "JSON",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-IsAJAXForm": 1
                },
                success: function(J) {
                    dust.render(l.BROWSEMAP, J.content, function(L, K) {
                        if (!L) {
                            $(".insights.browsemap").remove();
                            $(".rich-viewer .browsemap").replaceWith(K);
                            I._forceScrollOnSocialContainer()
                        }
                    })
                }
            })
        }
    }
});
(function(Q, H) {
    var l = "ontouchstart" in document.documentElement ? "touchend": "click", aa = LI.Events, j = aa.bind, w = aa.fire, t = LI.htmlEncode, Z = Q.ShowMore, S = Q.XSS, B = function(ag) {
        try {
            WebTracking.trackUserAction(ag)
        } catch (ah) {}
    }, a, e = "show-media-error", v = "_treasuryId", q = "_detail", G = 13, A = 419, s = 202, V, O, o, F, g, X, y, ac, U, c, L, r, af, ae, m = 0, I = "disabled", T = "hidden", C = "selected", u = "loading", d = "show", z = H("body"), h = LI.browser, D, ab, W, N, R, n, M, P, f, K, b, x, k, p, ad, Y, J, E;
    function i() {
        a = LI.TREASURY_CONF;
        af = a.i18n;
        r = a.url;
        W = a.tracks;
        ab = a.lix;
        O = af.treasury_viewer_title;
        o = af.treasury_error_rendering;
        V = af.treasury_dialog_position;
        F = af.error_posting_comment;
        a.sessionAvatar = a.sessionAvatar ? a.sessionAvatar : null;
        if (ab.facelift) {
            A = 374;
            s = 187
        }
        H(".treasury-container").siblings(".callout-container").remove();
        R = document.body.style;
        N = R.WebkitTransition !== undefined || R.MozTransition !== undefined || R.OTransition !== undefined || R.transition !== undefined;
        ae=!(h.ie && (h.ie6 || h.ie7 || h.ie8));
        P = function(ai) {
            var aj;
            if (ab.newProfileEdit) {
                return
            }
            if (!c&&!J) {
                J = true;
                if (!D) {
                    D = new LI.RichViewer("", {
                        data: c,
                        carousel: {
                            track: r.post_view_event
                        },
                        flag: r.flag,
                        lix: a.lix
                    })
                } else {
                    D.clearData()
                }
                aj = r.get_all.replace("_offset", 0).replace("_count", 1000000).replace("_isFullView", 1).replace("_section", "");
                aj = a.isNmp ? aj.replace("_memberId", a.memberId) : aj;
                H.getJSON(aj, function(am) {
                    var ak, al;
                    if (am.status !== "ok") {
                        k(af.error_fetching_full_view_data)
                    } else {
                        c = am.content;
                        c.treasury_conf = a;
                        E = c.defaultAvatar;
                        if (c && c.treasury.items) {
                            al = c.treasury.items;
                            ak = al.length;
                            while (ak--) {
                                f(al[ak])
                            }
                        }
                        c.sessionFullName = a.sessionFullName;
                        c.sessionAvatar = a.sessionAvatar;
                        c.sessionProfile = a.sessionProfile;
                        D.updateData(c);
                        if (typeof ai === "function") {
                            ai()
                        }
                    }
                    J = false
                })
            }
        };
        z.on("mouseenter", ".treasury-open-item", P);
        f = function(aq) {
            var aj = aq.likes, am = aj && aj.recentActors, al = aq.comments, ao = "member:" + a.sessionId, ap = al && al.recentComments, ak = a.selfView, an, ai;
            if (ap) {
                ai = al.totalComments;
                al.totalComments = ai > 0 ? ai : 0;
                an = ap.length;
                while (an--) {
                    if (ak || ap[an].commenterId === ao) {
                        ap[an].deletable = true
                    }
                }
                K(ap);
                al.showMoreComments = (ap.length < ai)
            } else {
                aq.comments = {}
            }
            if (am) {
                an = am.length;
                while (an--) {
                    if (am[an].id === ao) {
                        am.splice(an, 1);
                        break
                    }
                }
            }
            if (aj && aj.totalLikes > 0) {
                switch (aj.totalLikes) {
                case 1:
                    if (aj.likedByCurrentUser) {
                        aj.i18n_like_link = aq.i18n_like_link_1;
                        aj.i18n_unlike_link = ""
                    } else {
                        aj.i18n_like_link = aj.i18n_like_link_3.replace("{0}", am[0].profile_link);
                        aj.i18n_unlike_link = aj.i18n_like_link_2.replace("{0}", am[0].profile_link)
                    }
                    break;
                case 2:
                    if (aj.likedByCurrentUser) {
                        aj.i18n_like_link = aj.i18n_like_link_3.replace("{0}", am[0].profile_link);
                        aj.i18n_unlike_link = aj.i18n_like_link_2.replace("{0}", am[0].profile_link)
                    } else {
                        aj.i18n_like_link = aj.i18n_like_link_5.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link);
                        aj.i18n_unlike_link = aj.i18n_like_link_4.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link)
                    }
                    break;
                case 3:
                    if (aj.likedByCurrentUser) {
                        aj.i18n_like_link = aj.i18n_like_link_5.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link);
                        aj.i18n_unlike_link = aj.i18n_like_link_4.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link)
                    } else {
                        aj.i18n_like_link = aj.i18n_like_link_7.replace("{0}", am[0].profile_link).replace("{1}", 2);
                        aj.i18n_unlike_link = aj.i18n_like_link_6.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link).replace("{2}", am[2].profile_link)
                    }
                    break;
                default:
                    if (aj.likedByCurrentUser) {
                        aj.i18n_like_link = aj.i18n_like_link_7.replace("{0}", am[0].profile_link).replace("{1}", aj.totalLikes - 2);
                        aj.i18n_unlike_link = aj.i18n_like_link_8.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link).replace("{2}", aj.totalLikes - 3)
                    } else {
                        aj.i18n_like_link = aj.i18n_like_link_7.replace("{0}", am[0].profile_link).replace("{1}", aj.totalLikes - 1);
                        aj.i18n_unlike_link = aj.i18n_like_link_8.replace("{0}", am[0].profile_link).replace("{1}", am[1].profile_link).replace("{2}", aj.totalLikes - 2)
                    }
                    break
                }
            } else {
                aq.likes = {
                    totalLikes: 0,
                    i18n_like_link: aq.i18n_like_link_1,
                    i18n_unlike_link: ""
                }
            }
        };
        K = function(ai) {
            if (ai) {
                ai.sort(function(ak, aj) {
                    return ak.createdDate > aj.createdDate ? 1 : (ak.createdDate < aj.createdDate?-1 : 0)
                })
            }
        };
        k = function(ai) {
            w(e, ai)
        };
        p = function(aj) {
            var ai;
            if (aj.length > 1 && aj.charAt(0) === "B") {
                ai = parseInt(aj.substr(1), 10)
            }
            return ai
        };
        b = function(aj) {
            var ai, ak;
            ai = H(".social-integration .comment-counter .counter");
            ak = (parseInt(ai.text().replace(/\(|\)/, ""), 10) || 0) + (aj ? 1 : - 1);
            ai.text(ak ? "(" + ak + ")" : "")
        };
        x = function(ai) {
            H.ajax({
                type: "POST",
                url: r.post_view_event.replace(v, ai)
            })
        };
        Y = function(ak) {
            var aj = c && c.treasury && c.treasury.items, ai = aj && aj.length;
            while (ai--) {
                if (aj[ai].meta.id === ak) {
                    return {
                        item: aj[ai],
                        index: ai
                    }
                }
            }
            return null
        };
        if (a.selfView) {
            j("media-item-changed", function(ai) {
                var aj;
                if (c) {
                    M = true;
                    c = null
                }
                P()
            });
            j("media-item-removed", function(ai) {
                var aj;
                if (c) {
                    aj = Y(ai.id);
                    if (aj) {
                        c.treasury.items.splice(aj.index, 1);
                        c.treasury.num--;
                        if (D) {
                            D.clearData();
                            D.updateData(c)
                        }
                    }
                }
            })
        }
        j("treasury-open-item", function(ai) {
            if (a.isNmp) {
                c = undefined;
                P(function() {
                    D.open(ai)
                })
            }
        });
        j("treasury-flag-item", function(ak) {
            var ai = H("#dialog-wrapper.treasury-dialog"), al = ai.find(".carousel .evt-dispatch.selected").data("item-id"), aj = ak.hasClass("inappropriate") ? "inappropriate": "copyright";
            H.ajax(r.flag.replace(v, al).replace(q, aj), {
                dataType: "json",
                headers: {
                    "X-IsAJAXForm": "1"
                },
                success: function() {
                    var am;
                    if (!H.support.opacity) {
                        am = ai.find("iframe");
                        if (am.length) {
                            am.addClass("stealth");
                            ai.find(".media-mask").addClass("opaque")
                        }
                    }
                    ai.find(".media-mask, .flagged-content, .undo-action").removeClass("stealth");
                    ai.find(".do-action").addClass("stealth");
                    if (aj === "copyright") {
                        LI.popup(ak.attr("href"), {})
                    }
                },
                error: function() {
                    w(e, af.error_removing_data)
                }
            })
        });
        j("treasury-undo-flag-item", function() {
            var ai = H("#dialog-wrapper.treasury-dialog"), aj;
            if (!H.support.opacity) {
                aj = ai.find("iframe");
                if (aj.length) {
                    aj.removeClass("stealth");
                    ai.find(".media-mask").removeClass("opaque")
                }
            }
            ai.find(".media-mask, .flagged-content, .undo-action").addClass("stealth");
            ai.find(".do-action").removeClass("stealth")
        });
        j("see-all-likers", function(al) {
            var ak = al.closest("ul").data("all-liker-url"), ai = al.parent(), am = ai.next(), aj = "loaded";
            if (!am.hasClass(aj)) {
                H.ajax(ak, {
                    type: "GET",
                    dataType: "html",
                    success: function(an) {
                        an = H(an).appendTo(am);
                        am.addClass(aj).show();
                        ai.hide();
                        am.find(".show-less").addClass("evt-dispatch").attr("data-event-id", "show-less-likes")
                    },
                    error: function() {}
                })
            } else {
                am.show();
                ai.hide()
            }
        });
        j("show-less-likes", function(aj) {
            var ak = aj.parent(), ai = ak.prev();
            ak.hide();
            ai.show()
        });
        function ag(aj, ak) {
            var al = aj.find(".media-wrapper").not(".media-add-frame"), ai;
            if (!ak) {
                al = al.not(".stealth")
            }
            ai = al.length - 2;
            return (A + s * ai)
        }
        j("treasury-view-more", function(ai) {
            var am = ai.siblings(".treasury-container"), aw = ag(am, true), au = ai.siblings(".hidden-view-collapse"), ap = ab.pagination, av = am.attr("data-section-id") || "summary", al = am.find(".media-cell").not(".media-add-frame").length, ar, aj, ak = p(ab.pageSize) || 100, at = p(ab.prefetchThreshold) || 2, ao = "no-server-fetch";
            function an(az, ax) {
                var aA, ay;
                if (N) {
                    aA = am.css("height");
                    am.css("height", aA);
                    ay = parseInt(aA, 10) + (s * az);
                    setTimeout(function() {
                        am.addClass("animate").css("height", ay + "px");
                        if (ax) {
                            ai.addClass("animate transparent active")
                        }
                        if (au.hasClass("transparent")) {
                            au.removeClass("animate transparent").addClass("active")
                        }
                    }, 0)
                }
            }
            function aq(az, ay, aA) {
                var ax = r.get_all.replace("_offset", az).replace("_count", ak).replace("_isFullView", 0).replace("_section", encodeURIComponent(ay));
                ax = a.isNmp ? ax.replace("_memberId", a.memberId) : ax;
                am[0].isFetching = true;
                am[0].showNextDeferred = false;
                H.getJSON(ax, function(aC) {
                    var aB;
                    if (aC.status !== "ok") {
                        k(af.error_fetching_full_view_data);
                        am[0].isFetching = false;
                        am[0].showNextDeferred = false
                    } else {
                        aB = aC.content.treasury;
                        dust.render("treasury_view_v2", aB, function(aE, aD) {
                            if (aE) {
                                k(o)
                            } else {
                                aA({
                                    rows: H(aD).children(".media-wrapper").not(".media-add-frame"),
                                    hasMore: aB.hasMore
                                })
                            }
                            am[0].isFetching = false;
                            am[0].showNextDeferred = false
                        })
                    }
                })
            }
            if (ap) {
                ar = am.find(".media-wrapper.stealth").not(".media-add-frame");
                aj = ar.slice(0, 2);
                if (aj.length) {
                    an(aj.length, ar.length <= 2 && am.hasClass(ao));
                    aj.removeClass("stealth");
                    if (ar.length < (2 + 2 * at)&&!am.hasClass(ao)&&!am[0].isFetching) {
                        aq(al, av, function(ax) {
                            ax.rows.addClass("stealth");
                            ax.rows.insertAfter(am.children(".media-wrapper").not(".media-add-frame").last());
                            if (!ax.hasMore) {
                                am.addClass(ao)
                            }
                            if (am[0].showNextDeferred) {
                                ar = am.find(".media-wrapper.stealth").not(".media-add-frame");
                                aj = ar.slice(0, 2);
                                an(aj.length, ar.length <= 2 && am.hasClass(ao));
                                aj.removeClass("stealth");
                                am[0].showNextDeferred = false
                            }
                        })
                    }
                } else {
                    if (!am[0].isFetching) {
                        aq(al, av, function(ax) {
                            an(ax.rows.length, !ax.hasMore);
                            ax.rows.insertAfter(am.children(".media-wrapper").not(".media-add-frame").last());
                            if (!ax.hasMore) {
                                am.addClass(ao)
                            }
                        })
                    } else {
                        am[0].showNextDeferred = true
                    }
                }
            } else {
                ai.addClass("stealth");
                ai.siblings(".hidden-view-less").removeClass("stealth");
                am.find(".media-wrapper").removeClass("stealth");
                if (N&&!am.hasClass("adding")) {
                    am.css("height", A + "px");
                    setTimeout(function() {
                        am.addClass("animate").css("height", aw + "px")
                    }, 50)
                }
            }
        });
        j("treasury-view-less", function(ak) {
            var al = ak.siblings(".treasury-container"), aj = ak.siblings(".hidden-view-more"), ai = ab.pagination;
            if (ai) {
                ak.addClass("animate transparent active");
                aj.addClass("active").removeClass("animate transparent")
            } else {
                ak.addClass("stealth");
                aj.removeClass("stealth");
                if (N) {
                    al.css("height", ag(al) + "px");
                    setTimeout(function() {
                        al.addClass("animate");
                        al.css("height", A + "px")
                    }, 50)
                } else {
                    al.find(".media-wrapper").slice(2).addClass("stealth")
                }
            }
        });
        j("treasury-social-like", function(an) {
            var aj = "like", ai = "unlike", al, am;
            an.addClass(u);
            function ak() {
                var ao;
                ao = an.find(".counter");
                am = parseInt(ao.text().replace(/\(|\)/, ""), 10) || 0;
                if (an.hasClass(aj)) {
                    an.removeClass(aj).addClass(ai);
                    am--;
                    al = an.attr("data-url-unlike")
                } else {
                    an.removeClass(ai).addClass(aj);
                    am++;
                    al = an.attr("data-url-like")
                }
                ao.text((am > 0) ? "(" + am + ")" : "")
            }
            ak();
            H.ajax(al, {
                type: "POST",
                dataType: "JSON",
                success: function() {
                    var ao;
                    an.removeClass(u);
                    ao = an.closest(".social-integration").find(".comments > ul .likes,.comments > ul .unlikes");
                    ao.toggle(T);
                    c.likes = c.likes || {};
                    c.likes.totalLikes = am || 0;
                    c.likes.likedByCurrentUser=!c.likes.likedByCurrentUser
                },
                error: function() {
                    an.removeClass(u);
                    ak()
                },
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-IsAJAXForm": 1
                }
            })
        });
        j("treasury-social-comment", function(ai) {
            ai.closest(".social-integration").find("textarea").focus()
        });
        j("delete-treasury-comment", function(al) {
            var aj = al.attr("data-url"), ai = H(".social-integration .comment-counter .counter"), ak, am = al.closest("li");
            if (aj.length) {
                H.ajax(aj, {
                    type: "POST",
                    dataType: "JSON"
                }).done(function() {
                    al.remove();
                    am.slideUp(function() {
                        H(this).remove();
                        c.comments = c.comments || {};
                        c.comments.totalComments = (c.comments.totalComments || 1) - 1;
                        c.comments.recentComments = c.comments.recentComments || [];
                        _.each(c.comments.recentComments, function(ao, an) {
                            if (ao.url__remove_comment === aj) {
                                c.comments.recentComments.splice(an, 1)
                            }
                        });
                        ak = c.comments.totalComments;
                        ai.text(ak ? "(" + ak + ")" : "")
                    })
                }).fail(function() {
                    am.find(".delete-error").removeClass(T);
                    w(e, af.error_deleting_comment)
                })
            } else {}
        });
        j("show-more-treasury-comments", function(ak) {
            var ai = ak.data("url"), al = (ab.socialCommentShowMoreCount + "").replace("show_", ""), am = parseInt(al, 10), an = c.comments, aj, ao, ap, aq;
            am = am > 0 && am < 1000 ? am : 25;
            ap = an.totalComments;
            ao = ao > 0 && ao < am ? ao : am;
            aj = ap - an.recentComments.length - ao;
            aq = false;
            ai = ai.replace("_start", aj).replace("_count", ao).replace("_total", ap).replace("_reverseChron", aq);
            ak.addClass(u);
            H.ajax(ai, {
                success: function(aO) {
                    var aI, aJ, aG, aA, aC, at, aL, aM, aB, av, aK, aD, ay, ar, aN, aE, ax, au, aw, az, aF = aO && aO.content && aO.content.commentsWithActor, aH = aF && aF.comments;
                    ak.removeClass(u);
                    aD = ak.parent().parent();
                    if (!aO || aO.status !== "ok" ||!aO.content ||!aF ||!aH ||!aH.elements ||!aH.elements.length) {
                        aD.hide();
                        return k(af.error_showing_more_comments)
                    }
                    aI = aH.elements;
                    aJ = aI.length;
                    aA = H(".social-integration .comments ul");
                    aC = aA.children(".hidden.comment").last();
                    ay = c.comments.recentComments;
                    while (aJ--) {
                        aK = aI[aJ];
                        aG = aK.message;
                        aL = aK.threadId;
                        aM = aK.commentId || (aK.urnMap && aK.urnMap.id);
                        if (H('a[data-url*="commentId=' + aM + '"]').length) {
                            continue
                        }
                        at = aC.clone();
                        ar = t(aK.commenter.url);
                        aw = aK.commenter;
                        aN = aw && aw.image ? t(aw.image.url) : E;
                        aE = t(aK.commenter.title);
                        az = aw.properties;
                        ax = aw.link__delete_comment;
                        au = aw.creation_timestamp;
                        if (ab.commentDeletion === "enabled") {
                            aB = at.find(".delete");
                            av = aB.data("url").replace("_threadUrn", aL).replace("_commentId", aM);
                            aB.attr("data-url", av)
                        }
                        at.find(".comment-avatar").attr("href", ar);
                        at.find(".comment-avatar img").attr("alt", aE).attr("src", aN);
                        at.find("a.commenter").text(aE);
                        at.find(".timestamp").text(au);
                        at.find("q").text(aG);
                        at.removeClass(T);
                        aD.after(at);
                        ay["push"]({
                            deletable: true,
                            commenter: {
                                url: aK.url,
                                image: aK.commenter.image,
                                title: aK.commenter.title,
                                fmt__creation_timestamp: au,
                                url__remove_comment: ax
                            },
                            message: aG
                        })
                    }
                    if (ay.length >= c.comments.totalComments ||!aI.length) {
                        aD.hide();
                        c.comments.showMoreComments = false
                    }
                },
                error: function() {
                    ak.removeClass(u);
                    k(af.error_showing_more_comments)
                }
            })
        });
        z.on("otransitionend transitionend webkitTransitionEnd", ".treasury-container", function() {
            var ai = H(this);
            ai.removeClass("animate");
            if (ai.css("height") === (A + "px")) {
                ai.find(".media-wrapper").slice(2).addClass("stealth")
            }
            ai.css("height", "")
        });
        H("button.dialog-close").on(function() {
            H("html").css("overflow", "auto");
            H("html").removeAttr("scrolling")
        });
        function ah() {
            var ak = Q.location.href, aj = ak.match(/mediaId=(\d+)/), al, ai;
            if (aj && aj[1]) {
                al = aj[1];
                ai = H(".media-cell[data-item-id=" + al + "]");
                if (ai.length) {
                    if (!ai.is(":visible")) {
                        ai.parent().parent().parent().find(".hidden-view-more a").trigger(l)
                    }
                    ai.trigger(l)
                }
            }
        }
        ah()
    }
    j(e, function(ag) {
        if (H.fn.ProfileEdit) {
            H.fn.ProfileEdit.showGlobalAlert(ag, "failure")
        } else {
            LI.injectAlert(ag, "failure")
        }
    });
    j("treasury-share-link", function(ah) {
        var ag = H(".share-link-input");
        ah.closest(".actions").toggleClass("show-share-link-input");
        ag.toggleClass(d);
        setTimeout(function() {
            ag.select()
        }, 500)
    });
    H.fn.ready(i)
}(this, jQuery));
