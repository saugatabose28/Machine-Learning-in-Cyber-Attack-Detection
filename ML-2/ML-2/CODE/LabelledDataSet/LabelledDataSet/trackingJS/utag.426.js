//tealium universal tag - utag.426 ut4.0.201411192059, Copyright 2014 Tealium.com Inc. All Rights Reserved.
try {
    (function(id, loader, u) {
        try {
            u = utag.o[loader].sender[id] = {}
        } catch (e) {
            u = utag.sender[id]
        };
        u.ev = {
            'view': 1
        };
        u.qsp_delim = "&";
        u.kvp_delim = "=";
        u.qs_delim = "?";
        u.tag_type = "img";
        u.base_url = "//sp.analytics.yahoo.com/spp.pl";
        u.static_params = "a=1000473583906&.yp=19472&js=no";
        u.map = {
            "ret_customer_type": "CustType",
            "ret_product_name": "ProdName"
        };
        u.extend = [];
        u.send = function(a, b) {
            if (u.ev[a] || typeof u.ev.all != "undefined") {
                var c, d, e, f;
                c = [];
                for (d in utag.loader.GV(u.map)) {
                    if (typeof b[d] != "undefined" && b[d] != "") {
                        e = u.map[d].split(",");
                        for (f = 0; f < e.length; f++) {
                            if (e[f] == "qsp_delim" || e[f] == "kvp_delim" || e[f] == "qs_delim" || e[f] == "base_url" || e[f] == "secure_base_url") {
                                u[e[f]] = b[d];
                            } else {
                                c.push(e[f] + u.kvp_delim + encodeURIComponent(b[d]));
                            }
                        }
                    }
                }
                u.secure_base_url = u.secure_base_url || "" || u.base_url;
                u.url = (location.protocol == "https:" ? u.secure_base_url : u.base_url);
                if (u.url.indexOf("http") != 0 && u.url.indexOf("/") != 0) {
                    u.url = "//" + u.url;
                }
                if (u.url.indexOf(u.qs_delim) < 0 && (c.length > 0 || u.static_params.length > 0)) {
                    u.url += u.qs_delim
                }
                if (u.static_params) {
                    if (c.length > 0) {
                        u.url += u.static_params + u.qsp_delim;
                    } else {
                        u.url += u.static_params;
                    }
                }
                if (u.tag_type == "img") {
                    u.img = new Image();
                    u.img.src = u.url + c.join(u.qsp_delim);
                } else if (u.tag_type == "script") {
                    u.s = document.getElementsByTagName("script")[0];
                    u.scr = document.createElement("script");
                    u.scr.type = "text/javascript";
                    u.scr.src = u.url + c.join(u.qsp_delim);
                    u.s.parentNode.insertBefore(u.scr, u.s);
                } else {
                    d = document.createElement("iframe");
                    d.setAttribute('id', '426');
                    d.setAttribute('height', '1');
                    d.setAttribute('width', '1');
                    d.setAttribute('style', 'display:none');
                    d.setAttribute('src', u.url + c.join(u.qsp_delim));
                    document.body.appendChild(d);
                }
            }
        }
        try {
            utag.o[loader].loader.LOAD(id)
        } catch (e) {
            utag.loader.LOAD(id)
        }
    })('426', 'godaddy.godaddy');
} catch (e) {}

