(function() {
    "use strict";
    var attachedEvents = [];
    function $(id) {
        return document.getElementById(id);
    }
    window.onunload = function() {
        var i, evt;
        for (i = 0; i < attachedEvents.length; i++) {
            evt = attachedEvents[i];
            if (evt[0]) {
                evt[0].detachEvent("on" + evt[1], evt[2]);
            }
        }
        attachedEvents = [];
    };
    function addEvent(obj, evt, fn) {
        if (!obj) {
            return;
        }
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        } else if (obj.attachEvent) {
            attachedEvents.push([obj, evt, fn]);
            obj.attachEvent("on" + evt, fn);
        }
    }
    function removeEvent(obj, evt, fn) {
        if (!obj) {
            return;
        }
        if (obj.removeEventListener) {
            obj.removeEventListener(evt, fn);
        } else if (obj.detachEvent) {
            obj.detachEvent("on" + evt, fn);
        }
    }
    function doWhenReady(fn) {
        var ready = function() {
            removeEvent(document, "DOMContentLoaded", ready);
            removeEvent(window, "load", ready);
            fn();
        };
        if (document.readyState === "complete") {
            fn();
        } else {
            addEvent(document, "DOMContentLoaded", ready);
            addEvent(window, "load", ready);
        }
    }
    function updateBranding(lang) {
        var option, logo;
        if (!document.querySelector || document.body.id !==
        "www-wiktionary-org") {
            return;
        }
        option = document.querySelector("option[lang|='" + lang + "']");
        logo = option && option.getAttribute("data-logo");
        if (logo) {
            document.body.setAttribute("data-logo", logo);
        }
    }
    function getLang() {
        var uiLang = navigator.language || navigator.userLanguage, results = document.cookie.match(/(?:^|\W)searchLang=([^;]+)/);
        return (results ? results[1] : uiLang).toLowerCase();
    }
    function convertChinese(lang) {
        var i, elt, txtAttr = "data-convert-Hans", titleAttr = "data-convertTitle-Hans";
        if ("zh-hans,zh-cn,zh-sg,zh-my,".indexOf(lang + ",")===-1) {
            return;
        }
        var ids = ["zh_art", "zh_others", "zh_search", "zh_tag", "zh_top10", "zh-yue_wiki", "gan_wiki", "hak_wiki", "wuu_wiki"];
        for (i = 0; i < ids.length; i += 1) {
            if ((elt = $(ids[i]))) {
                if (elt.hasAttribute(txtAttr)) {
                    elt.innerHTML = elt.getAttribute(txtAttr);
                }
                if (elt.hasAttribute(titleAttr)) {
                    elt.title = elt.getAttribute(titleAttr);
                }
            }
        }
    }
    function convertZhLinks(lang) {
        var locale;
        if (lang.indexOf("zh") !== 0) {
            return;
        }
        locale = lang.substring(3);
        if (locale === "mo") {
            locale = "hk";
        } else if (locale === "my") {
            locale = "sg";
        }
        if ("cn,tw,hk,sg,".indexOf(locale) >= 0) {
            $("zh_wiki").href += "zh-" + locale + "/";
            $("zh_others").href = $("zh_others").href.replace("wiki/", "zh-" + locale + "/");
        }
        convertChinese(lang);
    }
    doWhenReady(function() {
        var iso639, select, options, i, len, matchingLang, matchingLink, customOption, lang = getLang();
        if (!lang) {
            return;
        }
        convertZhLinks(lang);
        iso639 = lang.match(/^\w+/);
        if (!iso639) {
            return;
        }
        iso639 = (iso639[0] === "nb") ? "no" : iso639[0];
        select = $("searchLanguage");
        if (select) {
            options = select.getElementsByTagName("option");
            for (i = 0, len = options.length; !matchingLang && i < len; i += 1) {
                if (options[i].value === iso639) {
                    matchingLang = iso639;
                }
            }
            if (!matchingLang && document.querySelector) {
                matchingLink = document.querySelector(".langlist a[lang|='" + iso639 + "']");
                if (matchingLink) {
                    matchingLang = iso639;
                    customOption = document.createElement("option");
                    customOption.setAttribute("lang", iso639);
                    customOption.setAttribute("value", iso639);
                    customOption.innerHTML = matchingLink.textContent || matchingLink.innerText || iso639;
                    select.appendChild(customOption)
                    ;
                }
            }
            if (matchingLang) {
                select.value = matchingLang;
                updateBranding(matchingLang);
            }
        }
    });
    function setupSuggestions() {
        if (window.HTMLDataListElement === undefined) {
            return;
        }
        var list = document.createElement("datalist"), search = $("searchInput");
        list.id = "suggestions";
        document.body.appendChild(list);
        search.autocomplete = "off";
        search.setAttribute("list", "suggestions");
        addEvent(search, "input", function() {
            var head = document.getElementsByTagName("head")[0], hostname = window.location.hostname.replace("www.", $("searchLanguage").value + "."), script = $("api_opensearch");
            if (script) {
                head.removeChild(script);
            }
            script = document.createElement("script");
            script.id = "api_opensearch";
            script.src = "//" + hostname + "/w/api.php?action=opensearch&limit=10&format=json&callback=portalOpensearchCallback&search=" + search.value;
            head.appendChild(script);
        });
    }
    window.portalOpensearchCallback = function(xhrResults) {
        var i, suggestions = $("suggestions"), oldOptions = suggestions.children;
        for (i = 0; i < xhrResults[1].length; i += 1) {
            var option = oldOptions[i] || document.
            createElement("option");
            option.value = xhrResults[1][i];
            if (!oldOptions[i]) {
                suggestions.appendChild(option);
            }
        }
        for (i = suggestions.children.length - 1; i >= xhrResults[1].length; i -= 1) {
            suggestions.removeChild(suggestions.children[i]);
        }
    };
    function setLang(lang) {
        if (!lang) {
            return;
        }
        var uiLang = navigator.language || navigator.userLanguage, date = new Date();
        updateBranding(lang);
        if (uiLang.match(/^\w+/) == lang) {
            date.setTime(date.getTime() - 1);
        } else {
            date.setFullYear(date.getFullYear() + 1);
        }
        document.cookie = "searchLang=" + lang + ";expires=" + date.toUTCString() + ";domain=" + location.host + ";";
    }
    doWhenReady(function() {
        var params, i, param, search = $("searchInput"), select = $("searchLanguage");
        if (search) {
            search.setAttribute("results", "10");
            setupSuggestions();
            if (search.autofocus === undefined) {
                search.focus();
            } else {
                window.scroll(0, 0);
            }
            params = location.search && location.search.substr(1).split("&");
            for (i = 0; i < params.length; i += 1) {
                param = params[i].split("=");
                if (param[0] === "search" && param[1]) {
                    search.value = decodeURIComponent(param[1].replace(/\+/g
                    , ' '));
                    return;
                }
            }
        }
        addEvent(select, "change", function() {
            setLang(select.value);
        });
    });
    doWhenReady(function() {
        var uselang = document.searchwiki && document.searchwiki.elements.uselang;
        if (uselang) {
            uselang.value = (navigator.language || navigator.userLanguage).toLowerCase().split("-")[0];
        }
    });
    function devicePixelRatio() {
        if (window.devicePixelRatio !== undefined) {
            return window.devicePixelRatio;
        } else if (window.msMatchMedia !== undefined) {
            if (window.msMatchMedia("(min-resolution: 192dpi)").matches) {
                return 2;
            } else if (window.msMatchMedia("(min-resolution: 144dpi)").matches) {
                return 1.5;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }
    function matchSrcSet(devicePixelRatio, srcset) {
        var candidates, candidate, i, ratio, selection = {
            ratio: 1
        };
        candidates = srcset.split(/ *, */);
        for (i = 0; i < candidates.length; i++) {
            candidate = candidates[i].match(/\s*(\S+)(?:\s*([\d.]+)w)?(?:\s*([\d.]+)h)?(?:\s*([\d.]+)x)?\s*/);
            ratio = candidate[4] && parseFloat(candidate[4]);
            if (ratio <= devicePixelRatio && ratio > selection.ratio) {
                selection.ratio = ratio;
                selection.src = candidate[
                1];
                selection.width = candidate[2] && parseFloat(candidate[2]);
                selection.height = candidate[3] && parseFloat(candidate[3]);
            }
        }
        return selection;
    }
    function hidpi() {
        var imgs, i, ratio = devicePixelRatio(), testImage = new Image();
        if (ratio > 1 && testImage.srcset === undefined) {
            imgs = document.getElementsByTagName("img");
            for (i = 0; i < imgs.length; i++) {
                var img = imgs[i], srcset = img.getAttribute("srcset"), match;
                if (typeof srcset === "string" && srcset !== "") {
                    match = matchSrcSet(ratio, srcset);
                    if (match.src !== undefined) {
                        img.setAttribute("src", match.src);
                        if (match.width !== undefined) {
                            img.setAttribute("width", match.width);
                        }
                        if (match.height !== undefined) {
                            img.setAttribute("height", match.height);
                        }
                    }
                }
            }
        }
    }
    doWhenReady(hidpi);
}());
if (!window.mw) {
    window.mw = window.mediaWiki = {
        loader: {
            state: function() {}
        }
    };
};
mw.loader.state({
    "ext.gadget.wm-portal": "ready"
});
/* cache key: metawiki:resourceloader:filter:minify-js:7:4f313781428ddb14f08a68ec1ffad676 */

