var baseurl = 'http://xhamster.com';
$(document).ready(function() {
    if ($('#main .menu')) {
        if (Modernizr.touch) {
            var hideItAll = function() {
                $(".menu ul.sub").css('display', 'none');
                $(".menu .subL").css('display', 'none');
                $("a.hasSub.deep").removeClass('sel');
            };
            var onMenuClick = function(e) {
                e.preventDefault();
                if ($(this).parent().children('ul.sub').is(':visible')) {
                    menuMainOut(e, $(this).parent());
                } else {
                    hideItAll();
                    menuMainIn(e, $(this).parent());
                }
                e.stopPropagation();
            };
            $("a.hasSub").not('.deep').on('click', onMenuClick);
            /*$(".menuUser a").on('click', onMenuClick);*/
            $("body div").not('a.hasSub').on('click', function(e) {
                hideItAll();
            });
            $('a.hasSub.deep').click(function(e) {
                if (!$(this).hasClass('sel')) {
                    e.preventDefault();
                    e.stopPropagation();
                    menuMainIn(e, $(this).parent());
                }
            });
        } else {
            $('.menu li').hover(menuMainIn, menuMainOut);
        }
        $('#search .select').hover(menuSearchIn, menuSearchOut);
        $('.menuLang').hover(menuLangIn, menuLangOut);
        $('#search .list a').click(menuSearchClick);
        $('#search .list a.sel').click();
        $('#searchAdvBtn').click(searchAdv.Show);
        //$('#search .adv').bind('mouseenter',searchAdv.In).bind('mouseleave',searchAdv.Out);
        if (getCookie('UID')) {
            menuCounter();
        }
        $('#userInvites a').hover(inviteIn, inviteOut);
    }
    $('.popLogin').bind('click', login.popLogin);
    $('.popSignup').bind('click', login.popSignup);
    $('.hSprite').bind('mouseover', hRotator.start).bind('mouseout', hRotator.stop).bind('click', hRotator.click);
    //$('.menu2 .l1 a').hover(menu2.over,menu2.out)
    $('.menu2').bind('mouseleave', menu2.outAll);
    $('.menu2 .l3').bind('mouseleave', menu2.l3out);
    $('.menu2 .l2 a').hover(menu2.l2over, menu2.l2out);
    $('input[placeholder],textarea[placeholder]').bind('focus', placeholderIn).bind('blur', placeholderOut);
    $('body').on('mouseenter', 'a,div,span,i,u,input', xEvent.mIn).on('mouseleave', 'a,div,span,i,input', xEvent.mOut).on('click', 'a,input', xEvent.click);
    $('.tabs .head a').bind('click', tabChange);
    searchList.init($('#searchText'), $('#searchList'));
    $('iframe').bind('load', xEvent.frameLoaded);
    $(".menuNewsLink").hover(function(e) {
        $("#menuNews").show();
    }, function(e) {
        if (!$(this).attr('stay')) {
            $("#menuNews").hide();
        }
    });
    $("#menuNews").hover(function(e) {
        $(this).show();
    }, function(e) {
        $(this).hide()
    });
    $(".menuUser .sub li a.ssub").hover(function(e) {
        $(".menuUser .sub li a.hasSub").addClass('unHovered');
    }, function(e) {
        $(".menuUser .sub li a.hasSub").removeClass('unHovered');
    });
    $(".userOuter .s .c input").change(function(e) {
        if ($(this).is(':checked')) 
            $(this).parent().parent().parent().addClass('sel');
        else 
            $(this).parent().parent().parent().removeClass('sel')
    });
    //$("#menuNews").hover(function(e){$(".menuNewsLink").attr('stay',1)}, function(e){$(".menuNewsLink").removeAttr('stay')});
    if (window.parent != window) 
        $.ajax({
            'url': '/ajax/ref.php',
            'dataType': 'script',
            'data': {
                'url': document.referrer
            }
        });
    $(".bottom_message a.act_exit").click(function(e) {
        e.preventDefault();
        $(".bottom_message").hide();
        setCookieD("x_cookies_approved", 1, 30);
        if ($(this).attr('href') != '#') {
            window.open($(this).attr('href'));
        }
    });

    $("#cRng").hover(function(e) {
        $(this).children(".list").show();
    }, function(e) {
        $(this).children(".list").hide();
    });
});

function captchaLoad(id) {
    if (typeof(Recaptcha) == 'undefined') {
        $.ajax({
            'dataType': 'script',
            'url': document.location.protocol + '//static.xhamster.com/js/recaptcha_ajax2.js'
        }).done(function () {
            Recaptcha.create("6Ld7YsISAAAAAN-PZ6ABWPR9y5IhwiWbGZgeoqRa", id, {
                theme: "white"
            });
        });
    } else 
        Recaptcha.create("6Ld7YsISAAAAAN-PZ6ABWPR9y5IhwiWbGZgeoqRa", id, {
            theme: "white"
        })
}

var xEvent = {};
xEvent.frameLoaded = function (e) {
    $(this).next('.loader,.loaderAjax').hide();
}

xEvent.frameLoad = function (t, src) {
    $(t).attr('src', src).bind('load', xEvent.frameLoaded).next('.loader,.loaderAjax').show();
}

xEvent.mIn = function (e) {
    var t = $(this);
    if (t.attr('overicon') && !t.hasClass('off')) 
        t.children('.icon,.iconL').addClass(t.attr('overicon'));
    if ('ontouchstart' in document.documentElement) {} else {
        if (t.attr('hint')) 
            xEvent.hintShow(t, t.attr('hint'));
        if (t.attr('hintL')) 
            xEvent.hintShow(t, t.attr('hintL'), false, true);
    }
}

xEvent.mOut = function (e) {
    var t = $(this);
    if (t.attr('overicon')) 
        t.children('.icon,.iconL').removeClass(t.attr('overicon'));
    if ('ontouchstart' in document.documentElement) {} else {
        if (t.attr('hint')) 
            xEvent.hintHide(t);
        if (t.attr('hintL')) 
            xEvent.hintHide(t);
    }
}

xEvent.click = function (e) {
    var t = $(this);
    if (t.hasClass('off')) {
        if (e) 
            e.preventDefault();
        return;
    }
    var ajaxUrl = t.attr('ajax');
    if (ajaxUrl) {
        if (e) 
            e.preventDefault();
        if (t.hasClass('frameLoader')) 
            $('#frameLoader').show();
        if (!t.data('ajax')) {
            var domID = t.attr('id');
            if (!domID) {
                domID = "_ajaxDOM" + $.now();
                t.attr('id', domID);
            }
            $data = {
                'domID': domID
            };
            if (t.attr('from')) {
                $data['from'] = t.attr('from');
            }
            var ajaxID = $.ajax({
                'url': ajaxUrl,
                'data': $data,
                'context': this,
                'dataType': 'script',
                'complete': function() {
                    t.removeData('ajax');
                }
            });
            t.data('ajax', ajaxID);
        }
    }
}

xEvent.hintEnter = function (e) {
    var t = $(this);
    var text = t.attr('hint');
    xEvent.hintShow(t, text);
}

xEvent.hintShow = function (t, text, temporary, onLeft) {
    var hintBox;
    if (typeof(temporary) != 'undefined' && temporary) {
        $('#' + temporary).remove();
        $('body').append("<table class='hintBox' id='" + temporary + "'><tr><td><div class='box'><div class='txt'></div></div><div class='arrow'></div></td></tr></table>");
        hintBox = $('#' + temporary);
    } else {
        hintBox = $('#hint');
    }
    if (onLeft) 
        hintBox.addClass('hintL');
    else 
        hintBox.removeClass('hintL');

    var pos = t.offset();
    var w = t.attr('hintw');
    if (!w) {
        $('.box', hintBox).css({
            'width': 'auto'
        });
        $('.txt', hintBox).css({
            'white-space': 'nowrap'
        }).html(text);
    } else {
        $('.box', hintBox).css({
            'width': w + 'px'
        });
        $('.txt', hintBox).css({
            'white-space': 'normal'
        }).html(text);
    }
    var wB = hintBox.innerWidth() * 1;
    var hB = hintBox.innerHeight() * 1;
    var wT = t.innerWidth() * 1;
    var hT = t.innerHeight() * 1;
    var left = 0;
    var top = 0;
    var mleft = 0;
    var mtop = 0;
    if (onLeft) {
        left = pos.left - wB - 5;
        top = pos.top + hT / 2;
        mtop = - 1 * hT / 2 + 1;
    } else {
        left = pos.left + wT / 2;
        top = pos.top - hB - 3;
        mleft = - 1 * wB / 2;
        mtop = - 5;
    }

    var css = {
        'margin-left': mleft + 'px',
        'margin-top': mtop + 'px',
        'top': top + 'px',
        'left': left + 'px'
    };

    hintBox.css(css);
    hintBox.show();
    if (temporary) 
        setTimeout('xEvent.hintDel("#' + temporary + '")', 5000)
}

xEvent.hintDel = function (id) {
    $(id).fadeOut('fast', function() {
        $(this).remove()
    });
}

xEvent.hintHide = function(e) {
    $('#hint').hide();
}

xEvent.disable = function(el) {
    el = $(el);
    el.each(function() {
        var t = $(this);
        var overClass = t.attr('overicon');
        var hint = t.attr('hint');
        $(t).removeAttr('href').removeAttr('ajax').removeAttr('href').removeAttr('hint').removeAttr('overicon');
        if (overClass) 
            $('.' + overClass, t).removeClass(overClass);
        if (hint) 
            xEvent.hintHide();
    });
}

xEvent.loaderShow = function (el) {
    el = $(el);
    el.css({
        'position': 'relative'
    });
    var h = el.innerHeight();
    el.append("<div class='loader loaderAjax' style='height:" + h + "px'></div>");
}

xEvent.loaderHide = function (el) {
    $('loader', el).remove();
}
var searchList = {
    'ajax': false,
    'list': false,
    'input': false,
    'selected': false,
    'selectedFirst': false
};

searchList.init = function (input, list) {
    //input.typeWatch({callback: searchList.query,wait: 150,highlight: true,captureLength:-1});
    input.keydown(searchList.key);
    input.keyup(searchList.keyUp);
    searchList.list = list;
    searchList.list.bind('mouseenter', searchList.mIn).bind('mouseleave', searchList.mOut);
    input.closest('form').bind('submit', searchList.onSubmit);
}

searchList.onSubmit = function (e) {
    var query = $('input[name=q]', this).val();
    if (query != searchList.selected && searchList.selectedFirst) 
        searchList.selected = searchList.selectedFirst;
    $('input[name=new]', this).attr('disabled', (query == searchList.selected));
}

searchList.keyUp = function (e) {
    var t = $(this);
    var valOld = t.data('searchList');
    var valCurr = t.val();
    if (valOld != valCurr) {
        t.data('searchList', valCurr);
        searchList.query(valCurr, t);
    }
}


searchList.key = function (e) {
    if (e.keyCode == 40) {
        e.preventDefault();
        searchList.select(true);
    }
    if (e.keyCode == 38) {
        e.preventDefault();
        searchList.select(false);
    }
}

searchList.select = function (up) {
    if (!searchList.input) 
        return;
    var selected = $('.sel', searchList.list);
    var all = $('a', searchList.list);
    var selectedNext;
    if (selected.size()) {
        if (up) {
            selectedNext = selected.next();
            if (!selectedNext.size()) 
                selectedNext = all.eq(0);
        } else {
            selectedNext = selected.prev();
            if (!selectedNext.size()) 
                selectedNext = all.eq(all.size() - 1);
        }

    } else 
        selectedNext = all.eq(0);
    if (!selectedNext.size()) 
        return;
    all.removeClass('sel');
    selectedNext.addClass('sel');
    searchList.selected = selectedNext.text();
    searchList.input.data('searchList', searchList.selected).val(searchList.selected);
}

searchList.showList = function (el) {
    var pos = el.offset();
    var h = el.outerHeight();
    searchList.list.css({
        'left': pos.left,
        'top': (pos.top + h)
    });
    searchList.list.show();
}

searchList.query = function (text, el) {
    if (searchList.ajax) 
        searchList.ajax.abort();
    if (!text.length) {
        searchList.list.hide();
        return;
    }
    searchList.ajax = $.ajax({
        'url': '/ajax/search.php',
        'data': {
            'q': text
        },
        'dataType': 'json',
        'context': el
    }).done(function (data) {
        var html = "";
        if (data[0]) 
            searchList.selectedFirst = data[0].replace(/<\/?[^>]+>/gi, '');
        $.each(data, function (index, value) {
            html += "<span>" + value + "</span>";
        });
        searchList.list.html(html).children('span').bind('click', searchList.click);
        searchList.input = $(el);
        searchList.showList(searchList.input);
        searchList.input.bind('blur', searchList.mOut);
    }).always(function (data) {
        searchList.ajax = false;
    });
}

searchList.click = function (e) {
    e.preventDefault();
    if (!searchList.input) 
        return false;
    searchList.selected = $(this).text();
    searchList.input.val(searchList.selected);
    searchList.list.hide();
    searchList.input.closest('form').submit();
}

searchList.mOut = function (e) {
    searchList.list.hide();
    searchList.input.bind('blur', searchList.mOut)
}

searchList.mIn = function (e) {
    searchList.input.unbind('blur', searchList.mOut)
}

searchList.submit = function (e) {
    if (searchList.ajax) 
        searchList.ajax.abort();
    //return false;
}


function placeholderIn(e) {
    $(this).attr('placeholderBk', $(this).attr('placeholder')).removeAttr('placeholder');
}

function placeholderOut(e) {
    $(this).attr('placeholder', $(this).attr('placeholderBk'));
}

function inviteIn(e) {
    $('#userInvites div').addClass('hover');
}

function inviteOut(e) {
    $('#userInvites div').removeClass('hover');
}

function menuCounter() {
    $.ajax({
        'url': '/menuAjax.php?act=counter',
        'dataType': 'script',
        complete: function(jqXHR, textStatus) {
            setTimeout(menuCounter, 60000);
        }
    });
}

function menuSearchClick(e) {
    e.preventDefault();
    var t = $(this);
    var val = t.attr('value');
    var text = t.text();
    $('#search .select span').text(text);
    $('#qcat').val(val);
    if (val == 'video') 
        $('#searchAdvBox').show();
    else 
        $('#searchAdvBox').hide();
    $('a', t.parent()).removeClass("sel");
    t.addClass('sel');
    t.parent().hide();
}

function menuSearchIn(e) {
    $(this).addClass('selectEd').children('.list').show();

}

function menuSearchOut(e) {
    $(this).removeClass('selectEd').children('.list').hide();
}

function menuLangIn(e) {
    $('a', this).css({
        'display': 'block'
    });
}

function menuLangOut(e) {
    $('a', this).not('.def').css({
        'display': 'none'
    });
}

var searchAdv = {
    'timer': false
};

searchAdv.Out = function (e) {
    //advTimer = setTimeout(searchAdv.Hide,500);
}

searchAdv.In = function (e) {
    clearTimeout(searchAdv.timer);
}

searchAdv.Hide = function (e) {
    $('#searchAdv').hide();
}

searchAdv.Show = function (e) {
    e.preventDefault();
    $('#searchAdv').toggle();
    if (!$('#searchAdv').attr('loaded')) {
        $.ajax({
            'url': '/menuAjax.php?act=search'
        }).done( function (text) {
            $('#searchAdv').attr('loaded', true);
            $('#searchAdv .box').html(text);
            $('#searchAdv .toggle').bind('click', searchAdv.Toggle).click();
            $('#searchAdv .chGroup input').bind('change', searchAdv.checkGroup);
            $('#searchAdv .channelsBox input').bind('change', searchAdv.checkChannel);
            $('#searchAdv .close').bind('click', searchAdv.Hide);
            $('#searchAdv .save').bind('click', searchAdv.Search);
            $('#searchAdv .reset').bind('click', searchAdv.Reset);
        });
    }
}

searchAdv.Search = function (e) {
    $.ajax({
        'url': '/menuAjax.php?act=searchSave',
        'cache': false,
        'dataType': 'json',
        'data': $('#searchAdv').serialize(),
        'type': 'POST'
    }).done(function (data) {
        if (data.adv) {
            $('#searchAdvBtn').attr('overicon', 'iconSettingsAdvOver');
            $('#searchAdvBtn .icon').removeClass('iconSettings').addClass('iconSettingsAdv');
        } else {
            $('#searchAdvBtn').attr('overicon', 'iconSettingsOver');
            $('#searchAdvBtn .icon').removeClass('iconSettingsAdv').addClass('iconSettings');
        }
        if ($('#searchText').val()) 
            $('#search').submit();
    });
    $('#searchAdv').hide();
}

searchAdv.Reset = function (e) {
    $('#searchAdv input[type=checkbox]').prop('checked', true);
    $('#searchAdv select').val('Any');
}

searchAdv.checkGroup = function (e) {
    var t = $(this);
    var box = t.parents('.channelsGroup');
    var channels = $('.channelsBox', box);
    if (t.prop('checked')) 
        $('input', channels).prop('checked', true);
    else 
        $('input', channels).prop('checked', false);
}

searchAdv.checkChannel = function (e) {
    var t = $(this);
    var box = t.parents('.channelsGroup');
    var channels = $('.channelsBox', box);
    var allCheck = $('.chGroup input', box);
    if (t.prop('checked')) 
        allCheck.prop('checked', true);
    else {
        if (!$('input:checked', channels).size()) 
            allCheck.prop('checked', false);
    }
}

searchAdv.Toggle = function (e) {
    var t = $(this);
    var box = t.parents('.channelsGroup');
    var channels = $('.channelsBox', box);
    var title = '';
    if (t.attr('show')) {
        channels.hide();
        title = t.attr('titleShow');
        t.removeAttr('show');
    } else {
        channels.show();
        title = t.attr('titleHide');
        t.attr('show', 1);
    }
    t.text(title);
}

var menuMainTimer = false;
function menuMainLoad(a, t) {
    var loader = $('.iconMenuAjax', a);
    if (!loader.size()) {
        a.prepend('<div class="icon iconMenuAjax"></div>');
    } else 
        loader.show();
    var ajaxID = $.ajax({
        'url': a.attr('load'),
        'data': {
            'ajax': 1
        },
        'cache': true,
        'context': t.get(0)
    }).done(function(data) {
        $(this).append(data);
        if (t) {
            menuMainIn.call(this, t.get(0));
        } else {
            menuMainIn.call(this, false);
        }
    }).always(function () {
        $(this).children('a').removeAttr('load').children('.iconMenuAjax').hide();
    });
    t.data('ajax', ajaxID);
}

function menuMainIn(e, obj) {
    if (obj == undefined ||!obj) {
        obj = false;
        var t = $(this);
    } else {
        var t = obj;
    }
    if (e) {
        t.data('over', true);
    } else {
        if (!t.data('over')) 
            return false;
    }
    var a = t.children('a');
    var sub = t.children('.sub')
    if (sub.size() && sub.hasClass('subL')) {
        sub.css({
            'left': t.width() + 'px',
            'top': '0'
        });
    }
    if (!sub.size() && a.attr('load')) {
        menuMainLoad(a, t);
    } else {
        if (a.hasClass('timer')) {
            if (menuMainTimer) 
                clearTimeout(menuMainTimer);
            var timerCall = function() {
                sub.show();
            }
            menuMainTimer = setTimeout(timerCall, 125);
        } else 
            sub.show();
    }
    a.addClass('sel');
}

function menuMainOut(e, obj) {
    if (menuMainTimer) 
        clearTimeout(menuMainTimer);

    if (obj == undefined ||!obj) {
        var t = $(this);
    } else {
        var t = obj;
    }
    if (e) 
        t.data('over', false);
    var a = t.children('a');
    var sub = t.children('.sub')
    if (a.attr('ajax')) {
        $('.iconMenuAjax', a).hide();
        var ajaxID = t.data('ajax');
        if (ajaxID) 
            ajaxID.abort();
    }
    sub.hide();
    if (!a.hasClass('fix')) 
        a.removeClass('sel');
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != - 1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == - 1) 
                end = cookie.length;
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return (setStr);
}

function setCookie(name, value, time) {
    var expires = new Date();
    expires.setTime( expires.getTime() + time * 1000 );
    document.cookie = name + '=' + value + '; expires=' + expires.toGMTString() + '; path=/; domain=.xhamster.com';
}

function setCookieD(name, value, days, path) {
    var date = new Date();
    date.setTime( date.getTime() + (days * 24 * 60 * 60 * 1000) );
    if (!path) 
        path = '/';
    document.cookie = name + '=' + value + '; expires=' + date.toGMTString() + '; path=' + path + '; domain=.xhamster.com';
}

function tabChange(e) {
    var t = $(this);
    if (t.attr('href') != '#') 
        return;
    e.preventDefault();
    var tab = t.parent().parent();
    if (t.hasClass('sel')) 
        return;
    var tabList = t.parent().children('a').removeClass('sel');
    t.addClass('sel');
    var tabNum = tabList.index(t);
    var contentList = $('.content', tab).children('.tab');
    var contentSel = contentList.hide().eq(tabNum).show();
    if (t.attr('ajax') && !contentSel.children().size()) {
        $.ajax({
            'url': t.attr('ajax'),
            'dateType': 'script'
        });
        contentSel.html('<div class="loader"></div>');
        return;
    }
    if (t.attr('iframe') && !contentSel.children().size()) {
        contentSel.html('<div class="loader"></div><iframe style="display: none;" src="' + t.attr('iframe') + '" scrolling="no" frameborder="no" align="middle" allowtransparency="true" marginheight="0" marginwidth="0"></iframe>');
        $('iframe', contentSel).bind('load', tabLoad);
        return;
    }
    $('input', t.parent()).val(tabNum);
}

function tabLoad(e) {
    var t = $(this);
    t.parent().children('.loader').hide();
    t.show();
}

function adClick(target, clickRef) {
    var bkRef = target.href;
    target.href = clickRef;
    setTimeout(function() {
        target.href = bkRef
    }, 500)
};

function openPm(username, width, height, isvideo, sameWin) {
    if (!getCookie('UID')) {
        login.popSignup();
        return false;
    }
    if (typeof(isvideo) == 'undefined') 
        isvideo = false;
    if (typeof(sameWin) == 'undefined') 
        sameWin = false;
    if (!width) 
        width = 910;
    if (!height) 
        height = 610;
    if (isvideo) 
        var url = "/user/" + username + "/messages-video-1";
    else 
        var url = "/user/" + username + "/messages-1";
    if (sameWin)
        window.location.href = url;
    else {
        var w = window.open(url, "privateMessage", "width=" + width + "px,height=" + height + "px,resizable=0,toolbar=0,location=0,status=0,menubar=0,directories=0,scrollbars=yes");
        w.focus();
    }
    return false;
}

function openW(url, name, w, h) {
    window.open(url, name, "width=" + w + "px,height=" + h + "px,resizable=0,toolbar=0,location=0,status=0,menubar=0,directories=0,scrollbars=yes").focus();
    return false;
}
(function( $ ) {
    $.fn.serializeJSON = function(inp) {
        var json = inp || {};
        jQuery.map($(this).serializeArray(), function(n, i) {
            json[n['name']] = n['value'];
        });
        return json;
    };
})( jQuery );


var modal = {
    'window': false,
    'mask': false
};

modal.init = function () {
    if (modal.mask) 
        return true;
    var mask = $('#mask');
    if (!mask.size()) {
        $('body').append("<div id='mask'></div>");
        mask = $('#mask');
    }
    modal.mask = mask;
    $(window).bind('resize', modal.size);
}

modal.size = function () {
    if (!modal.mask) 
        return false;
    return modal.mask.css({
        'height': $(document).height()
    });
}

modal.show = function (el, noClose, topPosType, opacity) {
    modal.init();
    modal.size().show();
    if (noClose) {
        $(document).unbind('keydown', modal.key);
        $('#mask').unbind('click', modal.hide);
        modal.mask.css({
            'opacity': 0.9
        });
    } else {
        $(document).bind('keydown', modal.key);
        $('#mask').bind('click', modal.hide);
        modal.mask.css({
            'opacity': 0.5
        });
    }
    if (opacity) 
        modal.mask.css({
            'opacity': opacity
        });
    modal.window = $(el);
    $('.close', modal.window).bind('click', modal.hide);
    $('.spot iframe').hide();
    if (topPosType === false) {
        modal.window.show();
        return;
    }

    var winH = $(window).height();
    var winW = $(window).width();

    var wTop = 0;
    if (typeof(topPosType) == 'undefined') {
        var wTop = (window.scrollY) ? window.scrollY : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        wTop += $(window).height() / 2 - modal.window.height() / 2;
    } else if (typeof(topPosType) == 'number') 
        wTop += topPosType;
    else 
        wTop = winH / 2 - modal.window.height() / 2;
    var wLeft = winW / 2 - modal.window.width() / 2;
    if (wTop < 0) 
        wTop = 0;
    if (wLeft < 0) 
        wLeft = 0;
    modal.window.css({
        'top': wTop,
        'left': wLeft
    }).show();
}

modal.key = function (e) {
    if (e.keyCode == 27) {
        $('#mask').click();
    }
}

modal.hide = function (e) {
    if (e) 
        e.preventDefault();
    modal.init();
    $(document).unbind('keydown', modal.key);
    $('#mask').unbind('click', modal.hide);
    modal.mask.hide();
    if (modal.window) 
        modal.window.hide();
    $('.spot iframe').show();
    if (typeof(modal.onHide) == 'function') 
        modal.onHide();
    modal.onHide = false;
    modal.window = false;
}

function js_u_salt(u)
{
    return u * getCookie('UID');
}

function ucfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function openWindow(url, name, width, height)
{
    window.open(url, name, "width=" + width + "px,height=" + height + "px,resizable=0,toolbar=0,location=0,status=0,menubar=0,directories=0,scrollbars=yes").focus();
    return false;
}
(function() {
    var
    fullScreenApi = {
        supportsFullScreen: false,
        isFullScreen: function() {
            return false;
        },
        requestFullScreen: function() {},
        cancelFullScreen: function() {},
        fullScreenEventName: '',
        prefix: ''
    },
    browserPrefixes = 'webkit moz o ms khtml'.split(' ');

    // check for native support
    if (typeof document.cancelFullScreen != 'undefined') {
        fullScreenApi.supportsFullScreen = true;
    } else {
        // check for fullscreen support by vendor prefix
        for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
            fullScreenApi.prefix = browserPrefixes[i];

            if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
                fullScreenApi.supportsFullScreen = true;

                break;
            }
        }
    }
    var wscript = null;
    /*
        if (!fullScreenApi.supportsFullScreen) {
            if(typeof window.ActiveXObject!="undefined"){
                try {
                    wscript = new ActiveXObject("WScript.Shell");
                } catch (err){
                    
                }
                if(wscript!=null) fullScreenApi.supportsFullScreen = true;
            }
        }
        */
    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
        fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';

        fullScreenApi.isFullScreen = function() {
            switch (this.prefix) {
            case '':
                return document.fullScreen;
            case 'webkit':
                return document.webkitIsFullScreen;
            default:
                return document[this.prefix + 'FullScreen'];
            }
        }
        fullScreenApi.requestFullScreen = function(el) {
            if (wscript != null) 
                return wscript.SendKeys("{F11}");
            return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
        }
        fullScreenApi.cancelFullScreen = function(el) {
            if (wscript != null) 
                return wscript.SendKeys("{F11}");
            return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
        }
    }

    // jQuery plugin
    if (typeof jQuery != 'undefined') {
        jQuery.fn.requestFullScreen = function() {

            return this.each(function() {
                if (fullScreenApi.supportsFullScreen) {
                    fullScreenApi.requestFullScreen(this);
                }
            });
        };
    }

    // export api
    window.fullScreenApi = fullScreenApi;
})();


var hRotator = {
    'timer': 0,
    'cache': {},
    'id': 0,
    'curr': false,
    'stopped': true,
    'clicked': false,
    'time': 0
};

hRotator.click = function(e) {
    if (typeof(Modernizr) != 'undefined' && Modernizr.touch && !hRotator.clicked && ($.now() - hRotator.time) < 300 ) {
        hRotator.clicked = true;
        e.stopPropagation();
        e.preventDefault();
        if (hRotator.stopped) 
            hRotator.start.call(this);
    }
}

hRotator.start2 = function(el) {
    var t = $(el);
    t.bind('mouseout', hRotator.stop);
    hRotator.start.call(el);
}

hRotator.start = function(e) {
    var t = $(this);
    hRotator.stop();
    hRotator.curr = t;
    hRotator.id = t.attr('id');
    hRotator.time = $.now();
    hRotator.curr.css('background-position', '0 0');
    if (!hRotator.cache[hRotator.id]) {
        img = new Image();
        img.loaded = false;
        hRotator.cache[hRotator.id] = img;
        img.vid = hRotator.id;
    } else 
        img = hRotator.cache[hRotator.id];
    hRotator.stopped = false;
    if (!img.loaded) {
        t.parent().append('<span></span>');
        hRotator.loader = $('span', t.parent());
        $(img).bind('load', hRotator.onLoad);
        img.src = t.attr('sprite');
    } else {
        hRotator.begin();
    }
}

hRotator.stop = function() {
    hRotator.stopped = true;
    hRotator.clicked = false;
    clearTimeout(hRotator.timer);
    if (hRotator.curr) {
        hRotator.curr.css({
            'background-image': ''
        });
        if (hRotator.loader) {
            hRotator.loader.remove();
            hRotator.loader = false;
        }
    }
    hRotator.id = false;
    hRotator.curr = false;
    hRotator.loader = false;
}

hRotator.onTime = function(num) {
    clearTimeout(hRotator.timer);
    if (hRotator.stopped) {
        hRotator.stop();
        return true;
    }
    num++;
    if (num > 9) 
        num = 0;
    pos = (num*-160) + 'px 0px';
    hRotator.curr.css({
        'background-position': pos
    });
    hRotator.timer = setTimeout('hRotator.onTime(' + num + ')', 500);
}

hRotator.onLoad = function(e) {
    this.loaded = true;
    if (this.vid != hRotator.id) {
        return true;
    }
    hRotator.begin();
}

hRotator.begin = function() {
    if (hRotator.loader) {
        hRotator.loader.remove();
        hRotator.loader = false;
    }
    hRotator.curr.css({
        'background-position': '0 0'
    });
    hRotator.curr.css({
        'background-image': 'url(' + hRotator.curr.attr('sprite') + ')'
    });
    hRotator.onTime( - 1);
}


var menu2 = {
    'timer': false
};

menu2.over = function (e) {
    var t = $(this);
    var subName = t.attr('sub');
    if (!subName) 
        return;
    var menu = t.closest('.menu2');
    var timer = menu.data('timer');
    if (timer) 
        clearTimeout(timer);
    var timerCall = function() {
        if (menu.data('show') == subName) 
            return;
        var subAll = $('.l2 .sub', menu);
        var subShow = subAll.filter('[sub=' + subName + ']');
        if (!subShow.size()) 
            return;
        var subHide = subAll.not(subShow);
        $('a', t.parent()).removeClass('sel');
        t.addClass('sel');
        $(subHide).hide();
        subShow.show().css({
            'top': '-30px'
        }).animate({
            'top': 0
        }, 300);
        menu.data('show', subName);
    }
    menu.data('timer', setTimeout(timerCall, 125));
}


menu2.outAll = function (e) {
    $('.l3 .sub', this).hide();
}
menu2.out = function (e) {
    var t = $(this);
    var menu = t.closest('.menu2');
    var timer = menu.data('timer');
    if (timer) 
        clearTimeout(timer);
}

menu2.l2over = function (e) {
    var t = $(this);
    var menu = $(this).closest('.menu2')
    var ajax = t.attr('load');
    $('.l3 .sub', menu).hide();
    if (!ajax) 
        return;
    if (t.data('ajax')) 
        return;
    var timer = t.data('timer');
    if (timer) 
        return;
    var timerCall = function() {
        var subID = t.data('subID');
        if (subID) {
            $('#' + subID).show();
            return;
        }
        subID = "sub" + $.now();
        var loader = $('.iconMenuAjax', t);
        if (!loader.size()) 
            t.prepend('<div class="icon iconMenuAjax"></div>');
        else 
            loader.show();
        var ajaxID = $.ajax({
            'url': ajax,
            'data': {
                'ajax': 1,
                'menu': subID
            },
            'cache': true,
            'context': t.get(0)
        }).done(function(data) {
            var menu = $(this).closest('.menu2')
            $('.l3', menu).append(data);
            $('.l3 .toggle', menu).bind('click', menu2.l3toggle);
        }).always(function () {
            $(this).removeData('ajax').children('.iconMenuAjax').hide();
        });
        t.data('ajax', ajaxID);
        t.data('subID', subID);
    }
    t.data('timer', setTimeout(timerCall, 125));
}

menu2.l2out = function (e) {
    var t = $(this);
    var timer = t.data('timer');
    if (timer) 
        clearTimeout(timer);
    t.removeData('timer');
    var subID = t.data('subID');
    if (subID) {
        if ($(e.relatedTarget).closest('.sub').attr('id') != subID) 
            $('#' + subID).hide();
    }
}

menu2.l3toggle = function (e) {
    var t = $(this);
    var sub = t.parent().next();
    if (t.attr('show')) {
        sub.hide();
        t.text(t.attr('titleshow')).removeAttr('show');
    } else {
        sub.show();
        t.text(t.attr('titlehide')).attr('show', 1);
    }
}

menu2.l3out = function (e) {
    $('.sub', this).hide();
}

var digits = {
    'el': false,
    'frame': 0,
    'num': 0,
    'timer': 0
};

digits.init = function (el, animate, clean) {
    //preapre to scroll
    digits.el = $(el);
    if (!digits.el.size()) 
        return;
    if (digits.num) 
        num = digits.num;
    else 
        num = digits.el.attr('num') * 1;
    if (clean) 
        digits.el.html('');
    var items = $('div', digits.el);
    toStr = num.toString();
    if (items.size() != toStr.length) {
        var count = items.size();
        if (count < toStr.length) {
            //add digits
            while (count < toStr.length) {
                count++;
                if (count > 1 && (count % 3) == 1) 
                    digits.el.prepend("<span class='dot'></span>");
                digits.el.prepend("<span><div class='d00' num='0'></div></span>");
            }
        } else {
            //remove unused
            var dotCount = Math.floor(toStr.length / 3);
            var dotCurrent = Math.floor(count / 3);
            $('span', digits.el).slice(0, count + dotCurrent - toStr.length - dotCount).remove();
        }
        var items = $('div', digits.el);
    }
    for (i = toStr.length - 1; i >= 0; i--) {
        items.eq(i).attr('to', toStr.charAt(i));
    }
    digits.num = num;
    if (digits.timer) 
        clearInterval(digits.timer);
    if (animate) 
        digits.animate();
}

digits.inc = function () {
    digits.num++;
    digits.init(digits.el, true);
}

digits.animate = function () {
    digits.frame++;
    if (digits.frame > 4) 
        frame = 0;
    else 
        frame = digits.frame;
    var animated = false;
    $('div', digits.el).each(function() {
        var t = $(this);
        var numCurr = t.attr('num') * 1;
        var numEnd = t.attr('to') * 1;
        if (numCurr == numEnd) 
            return;
        animated = true;
        if (digits.frame > 4) {
            numCurr++;
            if (numCurr > 9) 
                numCurr = 0;
            t.attr('num', numCurr);
        }
        var animClass = "d" + numCurr.toString() + frame.toString();
        t.attr('class', animClass);
    });
    digits.frame = frame;
    if (digits.timer) 
        clearInterval(digits.timer);
    if (animated) 
        digits.timer = setTimeout('digits.animate()', 30);
}

var login = {
    'timer': 0,
    'loginAjax': 0,
    'emailAjax': 0,
    'ajaxPop': 0,
    'digitTimer': 0
};

login.stats = function() {
    res1 = Math.floor(Math.random() * 100000000).toString(16);
    res2 = (($.now())).toString(16).substring(0, 8);
    res = res1 + ':/:' + res2;
    document.cookie = 'xsid=' + res + '; path=/';
    return res;
}

login.ready = function(loginform) {
    $('.login form').bind('submit', login.submit);
    if (!login.digitTimer) 
        login.digitTimer = setInterval('digits.inc()', 5000);
    $('.xsid').val(login.stats());
    if (loginform) {
        digits.init('#digitsLogin', true, true);
        $('#loginForm .loginBnt').bind('click', login.loginClick);
        $('#loginPop .signup').bind('click', login.popSignup);
    } else {
        digits.init('#digitsSignup', true, true);
        $('#signup .signup').bind('click', login.signupClick);
        $('#signupLogin').bind('keypress', login.changeTimer);
        $('#signupMail').bind('blur', function() {
            login.change($(this).attr('id'))
        });
        $('#signupPass').bind('blur', function() {
            login.change('signupPass', 'signupLogin')
        });
        $("#mailHelp a").bind('click', function(e) {
            $('#signupMail').val($(this).text());
            $('#mailHelp').hide();
            return false;
        });
        $('#signupCountry').bind('change', login.states).change();
        captchaLoad('recaptcha');
    }
}

login.mailCheck = function(e) {
    $(this).mailcheck({
        suggested: function(element, suggestion) {
            $("#mailHelp a").text(suggestion.full)
            $("#mailHelp").show();
        },
        empty: function(element) {
            $("#mailHelp").hide();
        }
    });
}

login.change = function(el, el2) {
    if (typeof(login['ajax' + el]) != 'undefined') 
        login['ajax' + el].abort();
    var elQ = $('#' + el);
    elQ.addClass('ajax');
    var data = {
        'act': 'check',
        'val': elQ.val(),
        'name': elQ.attr('name')
    };
    if (el2) {
        data.val2 = $('#' + el2).val();
    }
    login['ajax' + el] = $.ajax({
        'url': '/ajax/login.php',
        'data': data,
        'dataType': 'script',
        'complete': function() {
            $('#' + el).removeClass('ajax');
        }
    });
}

login.changeTimer = function(e) {
    if (!e.charCode && e.keyCode != 8) 
        return;
    var name = $(this).attr('id');
    if (typeof(login['timer' + name]) != 'undefined') 
        clearTimeout(login['timer' + name]);
    login['timer' + name] = setTimeout('login.change("' + name + '")', 1000);
}

login.error = function(name, title, signupForm) {
    var input, box;
    if (name.substr(0, 1) == '#') 
        input = $(name);
    else {
        if (signupForm) 
            input = $('#signup :input[name=' + name + ']');
        else 
            input = $('#loginForm :input[name=' + name + ']');
    }
    if (!input.size()) 
        return;
    box = input.parents('td:eq(0)');
    if (!box.size()) 
        return;
    var errorBox = $('.err', box);
    if (!title) {
        if (input.attr('type') == 'checkbox') 
            input.parent().removeClass('err');
        else {
            input.removeClass('red');
            errorBox.remove();
        }
        return;
    }
    if (input.attr('type') == 'checkbox') 
        input.parent().addClass('err');
    else {
        if (!errorBox.size()) 
            box.append('<div class="err">' + title + '</div>');
        else 
            errorBox.html(title);
        input.addClass('red');
    }
}

login.states = function(e) {
    var country = $(this).val();
    if (country == 'US') {
        $('#us_state').show();
        $('#ca_state').hide();
    } else if (country == 'CA') {
        $('#ca_state').show();
        $('#us_state').hide();
    } else 
        $('#ca_state,#us_state').hide();
}

login.loginClick = function(e) {
    e.preventDefault();
    $('#loginForm').submit();
}

login.signupClick = function(e) {
    e.preventDefault();
    $('#signup').submit();
}

login.submit = function(e) {
    e.preventDefault();
    $('.login .ajSubmit').show();
    if (login['ajaxSubmit']) 
        return false;
    login['ajaxSubmit'] = $.ajax({
        'url': '/ajax/login.php',
        'data': $(this).serialize(),
        'dataType': 'script',
        'complete': function() {
            login['ajaxSubmit'] = false;
            $('.login .ajSubmit').hide();
        }
    });
}

login.pop = function(data) {
    if (login['ajaxPop']) 
        login['ajaxPop'].abort();
    login['ajaxPop'] = $.ajax({
        'url': '/ajax/login.php',
        'data': data,
        'dataType': 'script',
        'complete': function() {
            login['ajaxPop'] = false;
        }
    });
}

login.popLogin = function(e) {
    if (e) 
        e.preventDefault();
    if (Modernizr.touch) {
        document.location.href = "/login.php";
        return false;
    }

    login.ready(true);
    $('#signupPop').hide();
    modal.show('#loginPop', false);
}

login.popSignup = function(e, from) {
    if (e) 
        e.preventDefault();
    if (Modernizr.touch) {
        document.location.href = "/signup.php";
        return false;
    }
    if (!$('#signupPop').size()) 
        login.pop({
            'act': 'popSignup',
            'from': from
        })
    else {
        $('#loginPop').hide();
        login.ready(false);
        modal.show('#signupPop', false);
    }
}

login.popTips = function(action) {
    $.ajax({
        'dataType': 'script',
        'url': '/ajax/tips.php?act=' + action
    });
    return false;
}
login.popTipsBuy = function(e) {
    if (e) 
        e.preventDefault();
    return login.popTips('buy');
}

login.popTipsHistory = function(e) {
    if (e) 
        e.preventDefault();
    return login.popTips('history');
}

login.popTipsSettings = function(e) {
    if (e) 
        e.preventDefault();
    return login.popTips('settings');
}

login.popTipsPayments = function(e) {
    if (e) 
        e.preventDefault();
    return login.popTips('payments');
}

function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function showi18nTrans(text)
{
    var main = $("div#main").html();
    /*var textArr = text.split(':');
        for (var i=0; i<textArr.length; i++) {
            textArr[i] = escapeRegExp(textArr[i]);
        }
        var text2 = textArr.join(".+?");*/
    var text2 = escapeRegExp(text);
    main = main.replace(
    new RegExp("([^a-zA-Z]{1}\\s{0,100})\\b(" + text2 + ")\\b([^a-zA-Z]{1}\\s{0,100})", "gm"),
    "$1<span class='transHint'>$2</span>$3"
    );
    $('div#main').html(main);
    var targetOffset = $(".transHint").offset().top;
    window.scrollTo(0, targetOffset);

    /*if (window.find && window.getSelection) {
            document.designMode = "on";
            var sel = window.getSelection();
            sel.collapse(document.body, 0);

            while (window.find(text, true)) {
                document.execCommand("HiliteColor", false, "yellow");
                sel.collapseToEnd();
            }
            document.designMode = "off";
        } else if (document.body.createTextRange) {
            var textRange = document.body.createTextRange();
            while (textRange.findText(text)) {
                textRange.execCommand("BackColor", false, "yellow");
                textRange.collapse(false);
            }
        }*/
}

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/%(\d+)/g, function(_, m) {
        return args[--m];
    });
}
if (!String.prototype.trim) 
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
window.Modernizr = function(a, b, c) {
    function v(a) {
        i.cssText = a
    }
    function w(a, b) {
        return v(l.join(a + ";") + (b || ""))
    }
    function x(a, b) {
        return typeof a === b
    }
    function y(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function z(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d===!1 ? a[e] : x(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    var d = "2.6.2", e = {}, f = b.documentElement, g = "modernizr", h = b.createElement(g), i = h.style, j, k = {}.toString, l = " -webkit- -moz- -o- -ms- ".split(" "), m = {}, n = {}, o = {}, p = [], q = p.slice, r, s = function(a, c, d, e) {
        var h, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"), j.id = e ? e[d] : g + (d + 1), l.appendChild(j);
        return h = ["&#173;", '<style id="s', g, '">', a, "</style>"].join(""), l.id = g, (m ? l : n).innerHTML += h, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = f.style.overflow, f.style.overflow = "hidden", f.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), f.style.overflow = k), !!i
    }, t = {}.hasOwnProperty, u;
    !x(t, "undefined")&&!x(t.call, "undefined") ? u = function(a, b) {
        return t.call(a, b)
    } : u = function(a, b) {
        return b in a && x(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = q.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(q.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(q.call(arguments)))
        };
        return e
    }), m.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c=!0 : s(["@media (", l.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    };
    for (var A in m)
        u(m, A) && (r = A.toLowerCase(), e[r] = m[A](), p.push((e[r] ? "" : "no-") + r));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                u(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, v(""), h = j = null, e._version = d, e._prefixes = l, e.testStyles = s, e
}(this, this.document);;
eval(function(p, a, c, k, e, d) {
    e = function(c) {
        return c.toString(36)
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[c.toString(a)] = k[c] || c.toString(a)
        }
        k = [function(e) {
            return d[e]
        }
        ];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('d.c=f(1){0=\'--\';k{5(g.2){5(j(1)!="i"){2.h(\'8\',1)}b{0=2.q(\'8\');5(!0){4=$.s();9=(4-l).7(6);a=(4).7(6).u(3);0=9+\':\'+a}t.r=\'m=\'+0+\'; n=/\'}}}o(e){}p 0}', 31, 31, 'res|value|localStorage||time|if|16|toString|sid|res1|res2|else|stats|login||function|window|setItem|undefined|typeof|try|24563844|xsid|path|catch|return|getItem|cookie|now|document|substring'.split('|'), 0, {}));
//xh=~[];xh={___:++xh,$$$$:(![]+"")[xh],__$:++xh,$_$_:(![]+"")[xh],_$_:++xh,$_$$:({}+"")[xh],$$_$:(xh[xh]+"")[xh],_$$:++xh,$$$_:(!""+"")[xh],$__:++xh,$_$:++xh,$$__:({}+"")[xh],$$_:++xh,$$$:++xh,$___:++xh,$__$:++xh};xh.$_=(xh.$_=xh+"")[xh.$_$]+(xh._$=xh.$_[xh.__$])+(xh.$$=(xh.$+"")[xh.__$])+((!xh)+"")[xh._$$]+(xh.__=xh.$_[xh.$$_])+(xh.$=(!""+"")[xh.__$])+(xh._=(!""+"")[xh._$_])+xh.$_[xh.$_$]+xh.__+xh._$+xh.$;xh.$$=xh.$+(!""+"")[xh._$$]+xh.__+xh._+xh.$+xh.$$;xh.$=(xh.___)[xh.$_][xh.$_];xh.$(xh.$(xh.$$+"\""+(![]+"")[xh._$_]+xh._$+"\\"+xh.__$+xh.$__+xh.$$$+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$$_+".\\"+xh.__$+xh.$$_+xh._$$+xh.__+xh.$_$_+xh.__+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+xh.$$$$+xh._+"\\"+xh.__$+xh.$_$+xh.$$_+xh.$$__+xh.__+"\\"+xh.__$+xh.$_$+xh.__$+xh._$+"\\"+xh.__$+xh.$_$+xh.$$_+"\\"+xh.$__+xh.___+"(\\"+xh.__$+xh.$$_+xh.$$_+xh.$_$_+(![]+"")[xh._$_]+xh._+xh.$$$_+")\\"+xh.$__+xh.___+"{\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+"'--';\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+xh.__+"\\"+xh.__$+xh.$$_+xh._$_+"\\"+xh.__$+xh.$$$+xh.__$+"\\"+xh.$__+xh.___+"{\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$$$+"\\"+xh.$__+xh.___+"(\\"+xh.__$+xh.$$_+xh.$$$+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$$_+xh.$$_$+xh._$+"\\"+xh.__$+xh.$$_+xh.$$$+"."+(![]+"")[xh._$_]+xh._$+xh.$$__+xh.$_$_+(![]+"")[xh._$_]+"\\"+xh.__$+xh._$_+xh._$$+xh.__+xh._$+"\\"+xh.__$+xh.$$_+xh._$_+xh.$_$_+"\\"+xh.__$+xh.$__+xh.$$$+xh.$$$_+")\\"+xh.$__+xh.___+"{\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$$$+"\\"+xh.$__+xh.___+"("+xh.__+"\\"+xh.__$+xh.$$$+xh.__$+"\\"+xh.__$+xh.$$_+xh.___+xh.$$$_+xh._$+xh.$$$$+"\\"+xh.$__+xh.___+"(\\"+xh.__$+xh.$$_+xh.$$_+xh.$_$_+(![]+"")[xh._$_]+xh._+xh.$$$_+")\\"+xh.$__+xh.___+"!=\\"+xh.$__+xh.___+"\\\""+xh._+"\\"+xh.__$+xh.$_$+xh.$$_+xh.$$_$+xh.$$$_+xh.$$$$+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$$_+xh.$$$_+xh.$$_$+"\\\")\\"+xh.$__+xh.___+"{\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+(![]+"")[xh._$_]+xh._$+xh.$$__+xh.$_$_+(![]+"")[xh._$_]+"\\"+xh.__$+xh._$_+xh._$$+xh.__+xh._$+"\\"+xh.__$+xh.$$_+xh._$_+xh.$_$_+"\\"+xh.__$+xh.$__+xh.$$$+xh.$$$_+".\\"+xh.__$+xh.$$_+xh._$$+xh.$$$_+xh.__+"\\"+xh.__$+xh.__$+xh.__$+xh.__+xh.$$$_+"\\"+xh.__$+xh.$_$+xh.$_$+"('\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$_$+"',\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh.$$_+xh.$_$_+(![]+"")[xh._$_]+xh._+xh.$$$_+")\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"}\\"+xh.$__+xh.___+xh.$$$_+(![]+"")[xh._$_]+"\\"+xh.__$+xh.$$_+xh._$$+xh.$$$_+"\\"+xh.$__+xh.___+"{\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+(![]+"")[xh._$_]+xh._$+xh.$$__+xh.$_$_+(![]+"")[xh._$_]+"\\"+xh.__$+xh._$_+xh._$$+xh.__+xh._$+"\\"+xh.__$+xh.$$_+xh._$_+xh.$_$_+"\\"+xh.__$+xh.$__+xh.$$$+xh.$$$_+".\\"+xh.__$+xh.$__+xh.$$$+xh.$$$_+xh.__+"\\"+xh.__$+xh.__$+xh.__$+xh.__+xh.$$$_+"\\"+xh.__$+xh.$_$+xh.$_$+"('\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$_$+"');\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$$$+"\\"+xh.$__+xh.___+"(!\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+")\\"+xh.$__+xh.___+"{\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+xh.__+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$_$+xh.$$$_+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+"$.\\"+xh.__$+xh.$_$+xh.$$_+xh._$+"\\"+xh.__$+xh.$$_+xh.$$$+"();\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+xh.__$+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+"("+xh.__+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$_$+xh.$$$_+"\\"+xh.$__+xh.___+"-\\"+xh.$__+xh.___+xh._$_+xh.$__+xh.$_$+xh.$$_+xh._$$+xh.$$$+xh.$__+xh.$__+")."+xh.__+xh._$+"\\"+xh.__$+xh._$_+xh._$$+xh.__+"\\"+xh.__$+xh.$$_+xh._$_+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$$_+"\\"+xh.__$+xh.$__+xh.$$$+"("+xh.__$+xh.$$_+");\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+xh._$_+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+"("+xh.__+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$_$+xh.$$$_+")."+xh.__+xh._$+"\\"+xh.__$+xh._$_+xh._$$+xh.__+"\\"+xh.__$+xh.$$_+xh._$_+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$$_+"\\"+xh.__$+xh.$__+xh.$$$+"("+xh.__$+xh.$$_+").\\"+xh.__$+xh.$$_+xh._$$+xh._+xh.$_$$+"\\"+xh.__$+xh.$$_+xh._$$+xh.__+"\\"+xh.__$+xh.$$_+xh._$_+"\\"+xh.__$+xh.$_$+xh.__$+"\\"+xh.__$+xh.$_$+xh.$$_+"\\"+xh.__$+xh.$__+xh.$$$+"("+xh._$$+");\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+xh.__$+"\\"+xh.$__+xh.___+"+\\"+xh.$__+xh.___+"':'\\"+xh.$__+xh.___+"+\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+xh._$_+"\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"}\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+xh.$$_$+xh._$+xh.$$__+xh._+"\\"+xh.__$+xh.$_$+xh.$_$+xh.$$$_+"\\"+xh.__$+xh.$_$+xh.$$_+xh.__+"."+xh.$$__+xh._$+xh._$+"\\"+xh.__$+xh.$_$+xh._$$+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$$_+"\\"+xh.$__+xh.___+"=\\"+xh.$__+xh.___+"'\\"+xh.__$+xh.$$$+xh.___+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.__$+xh.$_$+xh.__$+xh.$$_$+"='\\"+xh.$__+xh.___+"+\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.$__+xh.___+"+\\"+xh.$__+xh.___+"';\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh.___+xh.$_$_+xh.__+"\\"+xh.__$+xh.$_$+xh.___+"=/'\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"}\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"}\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"}\\"+xh.$__+xh.___+xh.$$__+xh.$_$_+xh.__+xh.$$__+"\\"+xh.__$+xh.$_$+xh.___+"\\"+xh.$__+xh.___+"("+xh.$$$_+")\\"+xh.$__+xh.___+"{}\\"+xh.__$+xh._$_+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+xh.__+xh._+"\\"+xh.__$+xh.$$_+xh._$_+"\\"+xh.__$+xh.$_$+xh.$$_+"\\"+xh.$__+xh.___+"\\"+xh.__$+xh.$$_+xh._$_+xh.$$$_+"\\"+xh.__$+xh.$$_+xh._$$+"\\"+xh.__$+xh._$_+"}"+"\"")())();
