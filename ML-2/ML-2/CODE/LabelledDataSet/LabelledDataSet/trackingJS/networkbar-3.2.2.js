function PornhubNetworkBar(a) {
    if (!arguments.length) {
        return - 1
    }
    this.parent = this;
    this.element = arguments[0] ? document.getElementById(arguments[0]) : null;
    this.utm = arguments[1] ? arguments[1].toLowerCase() : "unknown";
    this.gay=!!arguments[2];
    this.fixed=!!arguments[3];
    this.extraCSS = arguments[4] ? arguments[4] : "";
    this.tablet=!!arguments[5];
    this.settings = {
        styleCSS: true,
        debug: false,
        namespace: "pnbar"
    };
    this.css2d = false;
    var c = "transform WebkitTransform MozTransform OTransform msTransform".split(" ");
    for (var b = 0; b < c.length; b++) {
        if (document.createElement("div").style[c[b]] !== undefined) {
            this.css2d = c[b]
        }
    }
    this.html = (this.fixed ? '<div class="bar_spacer"></div>' : "") + '<div class="bar_body ' + (this.tablet ? "tablet" : "desktop") + '"><div class="bar_items"><div class="title">Pornhub NETWORK</div>' + (this.gay ? '<div class="gaycolors"><div class="color1"></div><div class="color2"></div><div class="color3"></div><div class="color4"></div><div class="color5"></div><div class="color6"></div></div><div class="links"><a data-utm="pornhub" href="http://www.pornhub.com/gayporn?{@utm}">Pornhub</a><a data-utm="redtube" href="http://www.redtube.com/redtube/gay?{@utm}">RedTube</a><a data-utm="gaytube" href="http://www.gaytube.com/?{@utm}">Gaytube</a><a data-utm="tube8" href="http://www.tube8.com/gay/?{@utm}">Tube8</a><a data-utm="xtube" href="http://www.xtube.com/?splash=false&iAm=M&ilike=M&{@utm}">XTube</a><a data-utm="pornmd" href="http://www.pornmd.com/?{@utm}">PornMD</a>' + (this.tablet ? "" : '<a data-utm="youporngay" href="http://www.youporngay.com/?{@utm}">YouPorn</a><a data-utm="extremetube" href="http://www.extremetube.com/gay?{@utm}">ExtremeTube</a><a data-utm="spankwire" href="http://www.spankwire.com/home/Gay?{@utm}">SpankWire</a>') + '<div class="alternateHead">Straight Porn</div>' : '<div class="links"><a data-utm="pornhub" href="http://www.pornhub.com/?{@utm}">Pornhub</a><a data-utm="youporn" href="http://www.youporn.com/?{@utm}">YouPorn</a><a data-utm="redtube" href="http://www.redtube.com/?{@utm}">RedTube</a><a data-utm="tube8" href="http://www.tube8.com/?{@utm}">Tube8</a><a data-utm="pornmd" href="http://www.pornmd.com/?{@utm}">PornMD</a><a data-utm="spankwire" href="http://www.spankwire.com/?{@utm}">SpankWire</a>' + (this.tablet ? "" : '<a data-utm="keezmovies" href="http://www.keezmovies.com/?{@utm}">KeezMovies</a><a data-utm="xtube" href="http://www.xtube.com/?splash=false&iAm=M&ilike=F&{@utm}">XTube</a><a data-utm="extremetube" href="http://www.extremetube.com/straight?{@utm}">ExtremeTube</a>') + '<div class="alternateHead">Gay Porn</div>') + '<div class="moreHead">More</div><div class="searchWrap"><div class="search">' + (this.css2d ? "" : "Search") + '</div></div></div><div class="pornmd_search"><form><input type="text" placeholder="Search the Pornhub Network" /><input type="submit" value="GO" /></form><p>Powered by <b>PornMD</b></p><button>Close</button></div></div><div class="alternateMenu">{@alternate}</div><div class="moreMenu">{@more}</div></div>';
    this.alternate = (this.gay ? '<a data-alt-utm="pornhub" target="_parent" href="http://www.pornhub.com/?{@utm}">Pornhub</a><a data-alt-utm="youporn" target="_parent" href="http://www.youporn.com/?{@utm}">YouPorn</a><a data-alt-utm="redtube" target="_parent" href="http://www.redtube.com/?{@utm}">RedTube</a><a data-alt-utm="tube8" target="_parent" href="http://www.tube8.com/?{@utm}">Tube8</a><a data-alt-utm="spankwire" target="_parent" href="http://www.spankwire.com/home/Straight?{@utm}">SpankWire</a><a data-alt-utm="keezmovies" target="_parent" href="http://www.keezmovies.com/?{@utm}">Keezmovies</a><a data-alt-utm="xtube" target="_parent" href="http://www.xtube.com/?splash=false&iam=M&ilike=F&{@utm}">XTube</a><a data-alt-utm="extremetube" target="_parent" href="http://www.extremetube.com/straight?{@utm}">Extremetube</a>' : '<a data-alt-utm="pornhub" target="_parent" href="http://www.pornhub.com/gayporn?{@utm}">Pornhub Gay</a><a data-alt-utm="redtube" target="_parent" href="http://www.redtube.com/redtube/gay?{@utm}">RedTube Gay</a><a data-alt-utm="gaytube" target="_parent" href="http://www.gaytube.com/?{@utm}">GayTube</a><a data-alt-utm="xtube" target="_parent" href="http://www.xtube.com/videos.php?splash=false&iam=M&ilike=M&{@utm}">XTube Gay</a><a data-alt-utm="tube8" target="_parent" href="http://www.tube8.com/gay/?{@utm}">Tube8 Gay</a><a data-alt-utm="youporn" target="_parent" href="http://www.youporngay.com/?{@utm}">YouPorn Gay</a><a data-alt-utm="extremetube" target="_parent" href="http://www.extremetube.com/gay?{@utm}">ExtremeTube Gay</a><a data-alt-utm="spankwire" target="_parent" href="http://www.spankwire.com/home/Gay?{@utm}">SpankWire Gay</a>');
    this.more = (this.gay ? (this.tablet ? '<a data-more-utm="youporngay" href="http://www.youporngay.com/?{@utm}">YouPorn</a><a data-more-utm="extremetube" href="http://www.extremetube.com/gay?{@utm}">ExtremeTube</a><a data-more-utm="spankwire" href="http://www.spankwire.com/home/Gay?{@utm}">SpankWire</a>' : "") + '<a data-more-utm="porniq" target="_parent" href="http://www.porniq.com/?{@utm}">PornIQ</a><a data-more-utm="peeperz" href="http://www.peeperz.com/?{@utm}">Peeperz</a>' : (this.tablet ? '<a data-more-utm="keezmovies" href="http://www.keezmovies.com/?{@utm}">KeezMovies</a><a data-more-utm="extremetube" href="http://www.extremetube.com/?{@utm}">ExtremeTube</a><a data-more-utm="xtube" href="http://www.xtube.com/?splash=false&iAm=M&ilike=F&{@utm}">XTube</a><a data-more-utm="mofosex" href="http://www.mofosex.com/?{@utm}">Mofosex</a>' : "") + '<a data-more-utm="porniq" target="_parent" href="http://www.porniq.com/?{@utm}">PornIQ</a><a data-more-utm="peeperz" href="http://www.peeperz.com/?{@utm}">Peeperz</a>');
    this.css = "div.bar_body, div.bar_body *  {display:inline-block;position:relative;margin:0;padding:0;height:" + (this.tablet ? "36" : "20") + "px;border:none;background:#000;font:inherit;text-decoration:none;color:#fff;} " + (this.fixed ? "div.bar_spacer { display:block;position:relative;height:" + (this.tablet ? "40" : "24") + "px; } " : "") + "div.bar_body {display:block;" + (this.fixed ? "position:fixed;top:0;left:0;" : "") + "padding:2px 0;width:100%;height:" + (this.tablet ? "36" : "20") + "px;border-bottom:1px solid #555;font:normal normal normal 12px/20px Arial, Helvetica, sans-serif;z-index:999999;} div.bar_body div.bar_items {display:block;width:960px;margin:0 auto;background : #000;} div.bar_body div.bar_items div.title {float:left;margin : " + (this.gay ? "-1px 16px 0 1px;" : "0 16px 0 0;") + "height:" + (this.tablet ? "36" : "20") + "px;line-height:" + (this.tablet ? "36" : "20") + "px;font-size:14px;font-weight:bold;letter-spacing : -0.5px;color : #fff;} div.bar_body div.bar_items div.gaycolors {position:absolute;left:0; bottom:-2px;width:132px; height:3px;background:#fff;} div.bar_body div.bar_items div.gaycolors div {float:left; width:22px; height:2px;} " + (this.gay ? "div.bar_body div.bar_items div.gaycolors div.color1 { background:#ff1818; border-bottom:1px solid #ae1011; }div.bar_body div.bar_items div.gaycolors div.color2 { background:#ffaf19; border-bottom:1px solid #ae7511; }div.bar_body div.bar_items div.gaycolors div.color3 { background:#ffff1a; border-bottom:1px solid #aead11; }div.bar_body div.bar_items div.gaycolors div.color4 { background:#0d930d; border-bottom:1px solid #105f13; }div.bar_body div.bar_items div.gaycolors div.color5 { background:#1918ff; border-bottom:1px solid #1010ad; }div.bar_body div.bar_items div.gaycolors div.color6 { background:#9c0d9c; border-bottom:1px solid #5f1060; }" : "") + "div.bar_body div.bar_items div.links {float:left;width:80%;margin:0 8px 0 0;" + (this.tablet ? "width:600px;" : "") + "overflow:hidden;} div.bar_body div.bar_items div.links a, div.bar_body div.bar_items div.links div {float:left;height:" + (this.tablet ? "36" : "20") + "px;line-height:" + (this.tablet ? "36" : "20") + "px;padding:0 9px;border-radius:12px;cursor:pointer;} div.bar_body.desktop div.bar_items div.links a:hover {background : #1b1b1b;color : #a1a1a1;} div.bar_body div.bar_items div.links div.active {color : #a1a1a1;cursor:default;} " + (this.css2d ? "div.bar_body div.bar_items div.links div.searchWrap {padding:1px 5px; margin:0; } div.bar_body div.bar_items div.links div.search {float:left;cursor:pointer;display:inline-block;margin:" + (this.tablet ? "10px 0 10px 0" : "3px 0 3px 0") + ';padding:0;width:6px;height:6px;border:2px solid #fff;position:relative;border-radius:8px;} div.bar_body div.bar_items div.links div.search:before {content: "";display:inline-block;position:absolute;right: -5px;bottom: -3px;border-width:0;background: #fff;width:6px;height:2px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);} ' : "div.bar_body div.bar_items div.links div.searchWrap {padding:0; margin:0; } div.bar_body div.bar_items div.links div.search {float:left;cursor:pointer;margin:1px 0 1px 0;height:16px;border:1px solid #8F8F8F;outline:0;background-color: #727272;color: #fff;text-align:center;textShadow:1px 1px 1px #333;line-height:16px;cursor:pointer;} ") + "div.pornmd_search { display:none;float:left;position:relative;margin:0 0 0 10px;width:560px;height:" + (this.tablet ? "36" : "20") + "px;line-height:" + (this.tablet ? "36" : "20") + "px;} div.pornmd_search form {float:left;height:" + (this.tablet ? "36" : "20") + "px;} div.pornmd_search form input[type=text] {float:left;margin:" + (this.tablet ? "4px" : "0") + " 0;padding:0 10px;width:260px;height:" + (this.tablet ? "28" : "20") + "px;line-height:" + (this.tablet ? "28" : "20") + "px;border-radius:5px 0 0 5px;border:0;background: #fff;color: #000;font-size:" + (this.tablet ? "16" : "13") + "px;outline:0;} div.pornmd_search form input[type=submit] {float:left;height:" + (this.tablet ? "28" : "20") + "px;margin:" + (this.tablet ? "4px" : "0") + " 0;padding:0 15px;border-radius:0 5px 5px 0;border:0;outline:0;background-color: #29a4c2;line-height:20px;font-size:11px;color: #fff;textShadow:1px 1px 1px #333;cursor:pointer;-webkit-appearance:none;} div.pornmd_search p {float:left;margin:0 20px;top:1px;} div.pornmd_search p b {font-weight:bold;color: #808080;} div.pornmd_search button {float:left;margin:" + (this.tablet ? "4" : "1") + "px 0;height:" + (this.tablet ? "26" : "18") + "px;width:64px;border:1px solid #8F8F8F;outline:0;background-color: #727272;color: #fff;text-align:center;textShadow:1px 1px 1px #333;line-height:" + (this.tablet ? "24" : "16") + "px;cursor:pointer;} div.alternateMenu, div.moreMenu { display:none; margin-top: -1px; padding:4px 2px; width:115px; height:auto;} .ie7 div.alternateMenu, .ie7 div.moreMenu { margin-top: -3px; } div.alternateMenu a, div.moreMenu a, div.moreMenu div.active { display:block; padding:2px 5px; width:105px; height:" + (this.tablet ? "30" : "15") + "px; } .desktop div.alternateMenu a:hover, .desktop div.moreMenu a:hover { color : #a1a1a1;} div.moreMenu div.active { color : #a1a1a1;cursor:default;} " + this.extraCSS;
    this.fn = {
        parent: this,
        bind: function(d, f, e) {
            if (d.addEventListener) {
                d.addEventListener(f, e, false)
            } else {
                d.attachEvent("on" + f, e)
            }
        },
        prepareUTM: function() {
            var d = ("utm_source={@1}&utm_medium=network-bar&utm_campaign={@1}-networkbar" + (this.parent.gay ? "-gay" : "")).replace(/{@1}/g, this.parent.utm);
            this.parent.html = this.parent.html.replace(/{@utm}/g, d);
            this.parent.alternate = this.parent.alternate.replace(/{@utm}/g, d);
            this.parent.more = this.parent.more.replace(/{@utm}/g, d)
        },
        writeHTML: function() {
            if (!this.parent.element) {
                jQuery("body").prepend('<div id="PornhubNetworkBar" />');
                this.parent.element = document.getElementById("PornhubNetworkBar")
            }
            this.parent.html = this.parent.html.replace(/{@alternate}/g, this.parent.alternate);
            this.parent.html = this.parent.html.replace(/{@more}/g, this.parent.more);
            this.parent.element.innerHTML = this.parent.html;
            var f = jQuery("a[data-alt-utm=" + this.parent.utm + "]", this.parent.element).first();
            if (f.length) {
                var d = f.prop("href");
                var e = d.search(/(#|\?)/);
                if (e) {
                    f.prop("href", d.replace(d.substr(e), ""))
                }
            }
        },
        prepareEvents: function() {
            var f = this;
            var h = jQuery(".alternateHead", this.parent.element).first();
            var e = jQuery(".alternateMenu", this.parent.element).first();
            var g = jQuery(".moreHead", this.parent.element).first();
            var d = jQuery(".moreMenu", this.parent.element).first();
            h.on("mouseenter", function(i) {
                e.show().offset({
                    top: "0px",
                    left: h.offset().left
                })
            }).on("mouseleave", function(i) {
                setTimeout(function() {
                    if (!jQuery(i.relatedTarget).hasClass("alternateMenu")) {
                        e.hide()
                    }
                }, f.parent.tablet ? 300 : 0)
            });
            e.on("mouseleave", function(i) {
                setTimeout(function() {
                    if (!jQuery(i.relatedTarget).hasClass("alternateHead")) {
                        e.hide()
                    }
                }, f.parent.tablet ? 600 : 0)
            });
            g.on("mouseenter", function(i) {
                d.show().offset({
                    top: "0px",
                    left: g.offset().left
                })
            }).on("mouseleave", function(i) {
                setTimeout(function() {
                    if (!jQuery(i.relatedTarget).hasClass("moreMenu")) {
                        d.hide()
                    }
                }, f.parent.tablet ? 300 : 0)
            });
            d.on("mouseleave", function(i) {
                setTimeout(function() {
                    if (!jQuery(i.relatedTarget).hasClass("moreHead")) {
                        d.hide()
                    }
                }, f.parent.tablet ? 600 : 0)
            });
            jQuery(".search", this.parent.element).first().parent().on("click", function(i) {
                jQuery(".links", f.parent.element).first().hide();
                jQuery(".pornmd_search", f.parent.element).first().show();
                jQuery(".pornmd_search", f.parent.element).find("input[type=text]").focus()
            });
            jQuery("div.pornmd_search button", this.parent.element).first().on("click", function(i) {
                jQuery(".pornmd_search", f.parent.element).first().hide();
                jQuery(".links", f.parent.element).first().show()
            });
            jQuery("div.pornmd_search form", this.parent.element).first().on("submit", function(l) {
                var k = jQuery(this);
                var j = jQuery.trim(k.children("input").val());
                if (!j.length) {
                    return false
                }
                var m = encodeURIComponent(j).replace(/(%20)/gi, "+");
                var i = f.parent.gay;
                var n = f.parent.utm != "pornmd" ? ("?utm_term=" + m + "-" + (i ? "g" : "s") + "&utm_source={@1}&utm_medium=network-bar&utm_campaign={@1}-networkbar" + (i ? "-gay" : "")).replace(/{@1}/g, f.parent.utm): "";
                k.attr("method", "post").attr("action", "http://www.pornmd.com/" + (i ? "gay" : "straight") + "/" + m + n)
            })
        },
        writeCSS: function() {
            jQuery("head").append('<style type="text/css">' + this.parent.css + "</style>");
            var d = jQuery("a[data-utm=" + this.parent.utm + "]", this.parent.element).first();
            if (!d.length) {
                d = jQuery("a[data-more-utm=" + this.parent.utm + "]", this.parent.element).first()
            }
            d.replaceWith('<div class="active">' + d.text() + "</div>")
        },
        msg: function() {}
    };
    if (this.settings.debug && typeof console == "object") {
        this.fn.msg = function() {
            arguments[0] && (arguments[0] = this.parent.settings.namespace + "_msg: " + arguments[0]);
            console.log.apply(console, arguments)
        }
    } else {
        this.fn.msg = function() {}
    }
    this.fn.prepareUTM();
    this.fn.writeHTML();
    this.fn.prepareEvents();
    this.fn.writeCSS()
};
