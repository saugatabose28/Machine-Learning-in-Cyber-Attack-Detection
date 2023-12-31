(function($) {
    $.fn.jshowoff = function(settings) {
        var config = {
            animatePause: true,
            autoPlay: true,
            changeSpeed: 600,
            controls: true,
            controlText: {
                play: 'Play',
                pause: 'Pause',
                next: 'Next',
                previous: 'Prev'
            },
            effect: 'fade',
            functPause: true,
            links: true,
            speed: 4000
        };
        if (settings)
            $.extend(true, config, settings);
        if (config.speed < (config.changeSpeed + 20)) {
            alert('jShowOff: Make speed at least 20ms longer than changeSpeed; the fades aren\'t always right on time.');
            return this;
        };
        this.each(function(i) {
            var $cont = $(this);
            var gallery = $(this).children().remove();
            var timer = '';
            var counter = 0;
            var preloadedImg = [];
            var howManyInstances = $('.jshowoff').length + 1;
            var uniqueClass = 'jshowoff-' + howManyInstances;
            var cssClass = config.cssClass != undefined ? config.cssClass: '';
            $cont.css('position', 'relative').wrap('<div class="jshowoff ' + uniqueClass + '" />');
            var $wrap = $('.' + uniqueClass);
            $wrap.css('position', 'relative').addClass(cssClass);
            $(gallery[0]).clone().appendTo($cont);
            preloadImg();
            if (config.controls) {
                addControls();
                if (config.autoPlay == false) {
                    $('.' + uniqueClass + '-play').addClass(uniqueClass + '-paused jshowoff-paused').text(config.controlText.play);
                };
            };
            if (config.links) {
                addSlideLinks();
                $('.' + uniqueClass + '-slidelinks a').eq(0).addClass(uniqueClass + '-active jshowoff-active');
            };
            if (config.hovrePause) {
                $cont.hover(function() {
                    if (isPlaying())
                        pause('hover');
                }, function() {
                    if (isPlaying())
                        play('hover');
                });
            };
            if (config.autoPlay && gallery.length > 1) {
                timer = setInterval(function() {
                    play();
                }, config.speed);
            };
            if (gallery.length < 1) {
                $('.' + uniqueClass).append('<p>For jShowOff to work, the container element must have child elements.</p>');
            };
            function transitionTo(gallery, index) {
                var oldCounter = counter;
                if ((counter >= gallery.length) || (index >= gallery.length)) {
                    counter = 0;
                    var e2b = true;
                } else if ((counter < 0) || (index < 0)) {
                    counter = gallery.length - 1;
                    var b2e = true;
                } else {
                    counter = index;
                }
                if (config.effect == 'slideLeft') {
                    var newSlideDir, oldSlideDir;
                    function slideDir(dir) {
                        newSlideDir = dir == 'right' ? 'left' : 'right';
                        oldSlideDir = dir == 'left' ? 'left' : 'right';
                    };
                    counter >= oldCounter ? slideDir('left') : slideDir('right');
                    $(gallery[counter]).clone().appendTo($cont).slideIt({
                        direction: newSlideDir,
                        changeSpeed: config.changeSpeed
                    });
                    if ($cont.children().length > 1) {
                        $cont.children().eq(0).css('position', 'absolute').slideIt({
                            direction: oldSlideDir,
                            showHide: 'hide',
                            changeSpeed: config.changeSpeed
                        }, function() {
                            $(this).remove();
                        });
                    };
                } else if (config.effect == 'fade') {
                    $(gallery[counter]).clone().appendTo($cont).hide().fadeIn(config.changeSpeed, function() {
                        if ($.browser.msie)
                            this.style.removeAttribute('filter');
                    });
                    if ($cont.children().length > 1) {
                        $cont.children().eq(0).css('position', 'absolute').fadeOut(config.changeSpeed, function() {
                            $(this).remove();
                        });
                    };
                } else if (config.effect == 'none') {
                    $(gallery[counter]).clone().appendTo($cont);
                    if ($cont.children().length > 1) {
                        $cont.children().eq(0).css('position', 'absolute').remove();
                    };
                };
                if (config.links) {
                    $('.' + uniqueClass + '-active').removeClass(uniqueClass + '-active jshowoff-active');
                    $('.' + uniqueClass + '-slidelinks a').eq(counter).addClass(uniqueClass + '-active jshowoff-active');
                };
            };
            function isPlaying() {
                return $('.' + uniqueClass + '-play').hasClass('jshowoff-paused') ? false : true;
            };
            function play(src) {
                if (!isBusy()) {
                    counter++;
                    transitionTo(gallery, counter);
                    if (src == 'hover' ||!isPlaying()) {
                        timer = setInterval(function() {
                            play();
                        }, config.speed);
                    }
                    if (!isPlaying()) {
                        $('.' + uniqueClass + '-play').text(config.controlText.pause).removeClass('jshowoff-paused ' + uniqueClass + '-paused');
                    }
                };
            };
            function pause(src) {
                clearInterval(timer);
                if (!src || src == 'playBtn')
                    $('.' + uniqueClass + '-play').text(config.controlText.play).addClass('jshowoff-paused ' + uniqueClass + '-paused');
                if (config.animatePause && src == 'playBtn') {
                    $('<p class="' + uniqueClass + '-pausetext jshowoff-pausetext">' + config.controlText.pause + '</p>').css({
                        fontSize: '62%',
                        textAlign: 'center',
                        position: 'absolute',
                        top: '40%',
                        lineHeight: '100%',
                        width: '100%'
                    }).appendTo($wrap).addClass(uniqueClass + 'pauseText').animate({
                        fontSize: '600%',
                        top: '30%',
                        opacity: 0
                    }, {
                        duration: 500,
                        complete: function() {
                            $(this).remove();
                        }
                    });
                }
            };
            function next() {
                goToAndPause(counter + 1);
            };
            function previous() {
                goToAndPause(counter - 1);
            };
            function isBusy() {
                return $cont.children().length > 1 ? true : false;
            };
            function goToAndPause(index) {
                $cont.children().stop(true, true);
                if ((counter != index) || ((counter == index) && isBusy())) {
                    if (isBusy())
                        $cont.children().eq(0).remove();
                    transitionTo(gallery, index);
                    pause();
                };
            };
            function preloadImg() {
                $(gallery).each(function(i) {
                    $(this).find('img').each(function(i) {
                        preloadedImg[i] = $('<img>').attr('src', $(this).attr('src'));
                    });
                });
            };
            function addControls() {
                $wrap.append('<p class="jshowoff-controls ' + uniqueClass + '-controls"><a class="jshowoff-play ' + uniqueClass + '-play" href="#null">' + config.controlText.pause + '</a> <a class="jshowoff-prev ' + uniqueClass + '-prev" href="#null">' + config.controlText.previous + '</a> <a class="jshowoff-next ' + uniqueClass + '-next" href="#null">' + config.controlText.next + '</a></p>');
                $('.' + uniqueClass + '-controls a').each(function() {
                    if ($(this).hasClass('jshowoff-play'))
                        $(this).click(function() {
                            isPlaying() ? pause('playBtn') : play();
                            return false;
                        });
                    if ($(this).hasClass('jshowoff-prev'))
                        $(this).click(function() {
                            previous();
                            return false;
                        });
                    if ($(this).hasClass('jshowoff-next'))
                        $(this).click(function() {
                            next();
                            return false;
                        });
                });
            };
            function addSlideLinks() {
                $wrap.append('<p class="jshowoff-slidelinks ' + uniqueClass + '-slidelinks"></p>');
                $.each(gallery, function(i, val) {
                    var linktext = $(this).attr('title') != '' ? $(this).attr('title'): i + 1;
                    $('<a class="jshowoff-slidelink-' + i + ' ' + uniqueClass + '-slidelink-' + i + '" href="#null">' + linktext + '</a>').bind('click', {
                        index: i
                    }, function(e) {
                        goToAndPause(e.data.index);
                        return false;
                    }).appendTo('.' + uniqueClass + '-slidelinks');
                });
            };
        });
        return this;
    };
})(jQuery);
(function($) {
    $.fn.slideIt = function(settings, callback) {
        var config = {
            direction: 'left',
            showHide: 'show',
            changeSpeed: 600
        };
        if (settings)
            $.extend(config, settings);
        this.each(function(i) {
            $(this).css({
                left: 'auto',
                right: 'auto',
                top: 'auto',
                bottom: 'auto'
            });
            var measurement = (config.direction == 'left') || (config.direction == 'right') ? $(this).outerWidth(): $(this).outerHeight();
            var startStyle = {};
            startStyle['position'] = $(this).css('position') == 'static' ? 'relative' : $(this).css('position');
            startStyle[config.direction] = (config.showHide == 'show') ? '-' + measurement + 'px' : 0;
            var endStyle = {};
            endStyle[config.direction] = config.showHide == 'show' ? 0 : '-' + measurement + 'px';
            $(this).css(startStyle).animate(endStyle, config.changeSpeed, callback);
        });
        return this;
    };
})(jQuery);
