(function(S, h, m) {
    var f = 1000001, L = YDom.get("header"), V = YDom.get("body"), P = YDom.get("content"), d = YDom.get("extra"), b = YDom.get("right-rail-ad"), U = YDom.get("footer"), u = YDom.get("ad-slot-2"), a = "new-ad", R = "hp-ad-rr-1", s = S.location, e = s.host, j = "/csp/ads?f=f300x250_exp_3_1&fk=true&p=1&c=2&r=", q = LI.domify('<div class="content" id="ad-slot-4"></div>'), O = LI.domify('<iframe width="300" id="ad-iframe-4" scrolling="no" height="250" frameborder="0" allowtransparency="true" border="0"></iframe>'), r = LI.domify('<div class="sticky-elems-placeholder"></div>'), W = ".leo-module", c = "absolute-sticky", l = "fixed-sticky", aa = "static-sticky", z = "transparent-sticky", Q = "hidden-sticky", Z = false, J = false, K = true, N = false, M = false, I = false, p = 0, X = false, t = false, Y = 0, y = 0, A = 0, x = 87, k = 100, n = 880, g = 3, o = ":";
    function i(ag) {
        var ab = [], ac = [], af = ag.length, ae, ad;
        for (ad = 0;
        ad < af;
        ad++) {
            ae = ag[ad];
            if (!ac[ae]) {
                ab.push(ae);
                ac[ae] = 1
            }
        }
        return ab
    }
    function H(ad) {
        if (!N) {
            N = true;
            var ac = Math.floor(Math.random() * f), ab = "//" + e + j + ac;
            YDom.setAttribute(ad, "src", ab)
        }
    }
    function T() {
        if (!M && LI.inViewPort(q)) {
            H(O);
            M = true
        }
    }
    function G(ab) {
        YEvent.on(ab, "click", function(ac) {
            WebTracking.trackUserAction(R, "")
        })
    }
    function C(ab) {
        YDom.removeClass(ab, l);
        YDom.removeClass(ab, aa);
        J = K = false;
        YDom.addClass(ab, c);
        Z = true
    }
    function F(ab) {
        YDom.removeClass(ab, c);
        YDom.removeClass(ab, aa);
        Z = K = false;
        YDom.addClass(ab, l);
        J = true
    }
    function B(ab) {
        YDom.removeClass(ab, c);
        YDom.removeClass(ab, l);
        Z = J = false;
        YDom.addClass(ab, aa);
        K = true
    }
    function E(ae, ag) {
        var ad = YDom.getY(ae), ab = YDom.getRegion(ae).height, af = u ? YDom.getY(u): YDom.getY(U), ac = YDom.getDocumentScrollTop();
        if (K && (ac + x >= ad)) {
            p = ad - x;
            F(ae)
        } else {
            if (J && (ad + ab - ac >= af - ac)) {
                C(ae)
            } else {
                if (Z && (ac + x <= ad)) {
                    F(ae)
                } else {
                    if (J && (ac <= p)) {
                        B(ae)
                    }
                }
            }
        }
        if (X) {
            w(ae, ac)
        }
    }
    function D(ab, ac) {
        var ad = YDom.getViewportHeight();
        if ((ad >= n) && (I)) {
            LI.show(ab);
            E(ac);
            I = false
        } else {
            if ((ad < n) && (!I)) {
                LI.hide(ab);
                E(ac);
                I = true
            }
        }
    }
    function v(ac) {
        var ab = YDom.getY(ac);
        y = ab - 10;
        A = ab + 20;
        YDom.addClass(ac, z);
        YDom.addClass(ac, Q);
        t = true
    }
    function w(ad, ac) {
        var ae = ac > Y, ab = ac < Y;
        if (t && ae && (ac > y)) {
            YDom.removeClass(ad, z);
            YDom.removeClass(ad, Q);
            t = false
        } else {
            if (!t && ab && (ac < A)) {
                YDom.addClass(ad, z);
                t = true;
                setTimeout(function() {
                    YDom.addClass(ad, Q)
                }, k)
            }
        }
        Y = ac
    }
    LI.define("NUSStickyRightRail");
    LI.NUSStickyRightRail = function(ae, af) {
        var ah = YDom.getRegion(ae).height, al = YDom.getRegion("content").height, ag = af.stickyRightRailOption, ak = i(ag.split(o)), aj = ak.length, ao = (YDom.getClientRegion().height >= ah + x), an = ((ah + x) >= al), am = (aj > g), ad, ab, ac, ai;
        if (ao || am) {
            return false
        }
        X = af.isFadeTransitionEnabled || false;
        YEvent.onDOMReady(function() {
            for (ai = 0;
            ai < aj;
            ai++) {
                ac = ak[ai];
                if (ac === a) {
                    q.appendChild(O);
                    G(q);
                    r.appendChild(q)
                } else {
                    ad = Y$("#" + ac, ae, true);
                    if (ad) {
                        ab = ad.cloneNode(true);
                        YDom.removeClass(ab, "candy-pymk-hide");
                        r.appendChild(ab)
                    }
                }
            }
            if (r.childNodes.length === g) {
                var ap = r.childNodes[g - 1];
                D(ap, r);
                YEvent.addListener(S, "resize", function() {
                    D(ap, r)
                })
            }
            ae.appendChild(r);
            LI.Controls.parseFragment(ae);
            if (X) {
                v(r)
            }
            E(r);
            T();
            YEvent.addListener(S, "scroll", function() {
                E(r);
                T()
            });
            LI.Events.bind("infinitePagination-newPage", function() {
                E(r)
            })
        });
        this.togglePosition = function() {
            E(r)
        };
        this.loadNewAd = function() {
            N = false;
            H(O)
        }
    }
}(this, this.document));
(function(d) {
    var e = "click", a = "#body", c = ".wechat-qr-generate";
    function b() {
        var g;
        function f(i) {
            var h = d(this);
            g = new LI.ModalDialogBox(d(null), {
                title: h.data("title"),
                decorators: ["scripts/shared/Dialog/I18nDustLoading"],
                dustContentTemplate: "tl/apps/chatin/partial/qr2",
                width: 560,
                i18nMap: {
                    i18n__wechat_qr1_description: h.data("qr1-description"),
                    i18n__wechat_qr1_entry: h.data("qr1-entry"),
                    i18n__wechat_qr2_img_alt: h.data("alt"),
                    i18n__wechat_qr2_description: h.data("description"),
                    link_wechat_qr1: h.data("qr1-link"),
                    link_wechat_qr2: h.attr("href")
                }
            });
            g.open();
            i.preventDefault()
        }
        d(a).on(e, c, f)
    }
    require.ensure(["scripts/shared/Spinner", "scripts/shared/Dialog"], b)
})(jQuery);
(function() {
    var BLUR = "blur", CANCEL_FILE_UPLOAD_CLASS = "cancel-file-upload", CHECKTEXTAREA_MESSAGE_SELECTOR = "p.check-textarea-message", CLICK = "click", DECORATOR_COMPONENT, EVERYONE_AND_TWITTER = "EVERYONE_AND_TWITTER", FILE_TYPES, GET = "GET", KEY_CODE_ENTER = 13, KEY_CODE_SPACE = 32, MANAGER_STATE, SHARE_VIEW_SUMMARY = "share-view-summary", SHARE_VIEW_TITLE = "share-view-title", SHOW_IMAGE_ID = "share-include-photo", TICKET_STATUS = {
        InternalError: "INTERNAL_ERROR",
        Ok: "OK",
        TaskTimeout: "TASK_TIMEOUT",
        TicketClosed: "TICKET_CLOSED"
    }, UPLOAD_STATE, YUI_UA = YAHOO.env.ua, YLANG = YAHOO.lang, CheckTextareaControl, Slideshare = {}, ssuPaperclip, ssuShareImageUpload, unloadText = LI.i18n.get("slideshare-uploader-beforeunload"), genericErrorText = LI.i18n.get("share-module-generic-error"), interactiveLocked = false, IS_ACTIVE = "is-active", IS_INTERACTIVE = "is-interactive", IS_ERRORED = "is-errored", IS_FOCUSED = "is-focused", FILE_TYPES = {
        "image": "image",
        "presentation": "presentation",
        "document": "document"
    }, activeFileType, reviewInput = null, errorMessage, CLASS_FLAG_REVIEW = "review", CLASS_FLAG_BLOCK = "block", shareInputReviewText = LI.i18n.get("share-module-review-input-txt"), shareInputDefaultText = LI.i18n.get("share-module-share-text");
    LI.define("ShareModule");
    LI.ShareModule = function(el, config) {
        CheckTextareaControl = LI.Controls.getControl(YDom.get("postText-postModuleForm"), "CheckTextarea");
        var dataURI, decorator, defaults = {
            trackingPrefix: "hp-shr-",
            injectionMode: "inject"
        }, allowImageEdit = config.allowImageEdit || false, dustActivityTemplate = config.dustActivityTemplate || "tl/shared/uscp/feed/_activity", fileUploadForm, form = YDom.get("share-form"), hasMentions = config.hasMentions || false, lastPost = Y$(".last-post", el)[0], link = Y$(".post-link", el)[0], mentionsDecorator, message = Y$(".post-message", el)[0], overrideRichMediaContentUrl = config.overrideRichMediaContentUrl || false, postLinkClose, postMap, postModuleURL, preview = Y$(".share-preview", el)[0], shareImageUploadForm = Y$("#slideshare-upload-form-share-image-upload")[0], previewContent, requestManager, messageGhostLabel, summaryGhostLabel, titleGhostLabel, shareEditSummary, shareEditSummaryWrapper, shareEditTitle, shareEditTitleWrapper, shareIncludePhotoWrapper, shareIncludePhotoMarkup, shareViewSummary, shareViewTitle, showImageCheckbox, singleInputShareModuleEnabled = config.singleInputShareModuleEnabled, bizShareModule = config.bizShareModule, enableSlideshare = config.enableSlideshare === "true", teamSharingEnabled = config.teamSharingEnabled || false, showTwitterCountdown=!!config.showTwitterCountdown, stateManager, submit = YDom.get("share-submit"), urlInputHelper, visibilityDropdown, disableDropdown = config.disableDropdown || false, showFilteredCustomImage = false;
        function getMentionsDecorator() {
            if (!mentionsDecorator) {
                mentionsDecorator = LI.Controls.getControl(YDom.getAncestorByClassName(message, "mentions-container"), "MentionsDecorator")
            }
            return mentionsDecorator
        }
        function handleVisibilityDropdownChange(evt) {
            var checkTextAreaCountdown, value = visibilityDropdown.getSelectedValue();
            if (showTwitterCountdown) {
                checkTextAreaCountdown = Y$(CHECKTEXTAREA_MESSAGE_SELECTOR, form, true);
                LI.toggle(checkTextAreaCountdown)
            }
            if (value === EVERYONE_AND_TWITTER) {
                CheckTextareaControl.setCountMethod("twitter");
                if (!config.twitterTethered) {
                    LI.popup(config.twitterPopupURL, {
                        height: 500,
                        width: 850
                    })
                }
            } else {
                if (config.dropdownDialogValue && value === config.dropdownDialogValue) {
                    LI.Dialog().open(config.dropdownDialogConfig)
                } else {
                    CheckTextareaControl.setCountMethod("default")
                }
            }
            CheckTextareaControl.checkLength()
        }
        function Decorator() {
            var decorations = YDom.getAttribute(el, "class").split(" ");
            this.decorate = function(string) {
                var index = decorations.indexOf(string);
                if (index===-1) {
                    YDom.addClass(el, string);
                    decorations.push(string)
                }
            };
            this.getDecorations = function() {
                return decorations
            };
            this.strip = function(string) {
                var index = decorations.indexOf(string);
                if (index>-1) {
                    YDom.removeClass(el, string);
                    decorations.splice(index, 1)
                }
            };
            this.is_a = function(strings) {
                var is = false;
                strings = [].concat(strings);
                LI.each(strings, function(string) {
                    if (LI.indexOf(decorations, string)>-1) {
                        is = true
                    }
                });
                return is
            };
            this.COMPONENT = Decorator.COMPONENT
        }
        function animateMemberPhoto(marginMovement) {
            var memberPhoto = Y$(".animated-member-photo"), memberPhotoAnim = null, memberPhotoAnimAttr = {}, ANIMATION_DURATION = config.photoAnimDuration || 0.3;
            memberPhotoAnimAttr = {
                marginTop: {
                    to: marginMovement
                }
            };
            memberPhotoAnim = new YAHOO.util.Anim(memberPhoto, memberPhotoAnimAttr, ANIMATION_DURATION, YAHOO.util.Easing.easeOut);
            memberPhotoAnim.animate()
        }
        Decorator.COMPONENT = {
            Active: "active",
            ActiveLink: "active_link",
            ActiveMessage: "active_message",
            Inactive: "inactive",
            PreviewLoaded: "preview_loaded",
            PreviewLoading: "preview_loading",
            ShareLoading: "share_loading",
            ShowingCharCount: "showing_char_count",
            Transition: "transition",
            UploadActive: "upload_active",
            UploadError: "upload_error",
            UploadCancel: "upload_cancel",
            UploadProgress: "upload_progress",
            UploadConvert: "upload_convert",
            UploadPreview: "upload_preview",
            UploadProgressStart: "upload_progress_start",
            UploadProgressEnd: "upload_progress_end",
            UploadFileComplete: "upload_complete",
            UploadImageComplete: "upload_image_complete",
            UploadConvertThresholdOne: "upload_convert_threshold_one",
            UploadConvertThresholdTwo: "upload_convert_threshold_two"
        };
        DECORATOR_COMPONENT = Decorator.COMPONENT;
        decorator = new Decorator();
        function StateManager() {
            var state;
            this.changed = new YAHOO.util.CustomEvent("changed");
            this.state = function(string, args) {
                if (arguments.length >= 1) {
                    this.changed.fire(string, state, args || []);
                    if (ssuPaperclip) {
                        ssuPaperclip.stateManager.state(string, args)
                    }
                    if (ssuShareImageUpload) {
                        ssuShareImageUpload.stateManager.state(string, args)
                    }
                    state = string
                } else {
                    return state
                }
            };
            this.STATE = StateManager.STATE
        }
        StateManager.UPLOADSTATE = {
            Upload: "upload",
            Convert: "convert",
            Preview: "preview",
            ErrorState: "error"
        };
        UPLOAD_STATE = StateManager.UPLOADSTATE;
        StateManager.STATE = {
            ActiveLink: "active_link",
            ActiveMessage: "active_message",
            AttachDone: "attach_done",
            Inactive: "inactive",
            PreviewAborted: "preview_aborted",
            PreviewFailed: "preview_failed",
            PreviewLoaded: "preview_loaded",
            PreviewLoading: "preview_loading",
            ShareErred: "share_erred",
            ShareFailed: "share_failed",
            ShareInjected: "share_injected",
            ShareInjecting: "share_injecting",
            ShareLoading: "share_loading",
            ShareReady: "share_ready",
            BeforeShareSubmit: "before_share_submitted",
            ShareSubmitted: "share_submitted",
            ShareSucceeded: "share_succeeded",
            ShowingCharCount: "showing_char_count",
            UrlCaptured: "url_captured",
            ShareBlock: "share_blocked",
            ShareReview: "share_review"
        };
        MANAGER_STATE = StateManager.STATE;
        stateManager = new StateManager();
        stateManager.changed.subscribe(function(event, passedArgs) {
            var args = [].concat(passedArgs), state = args.shift();
            switch (state) {
            case MANAGER_STATE.Inactive:
                requestManager.kill();
                decorator.strip(DECORATOR_COMPONENT.Transition);
                decorator.strip(DECORATOR_COMPONENT.ActiveLink);
                decorator.strip(DECORATOR_COMPONENT.ShowingCharCount);
                decorator.strip(DECORATOR_COMPONENT.UploadActive);
                decorator.strip(DECORATOR_COMPONENT.UploadPreview);
                decorator.strip(DECORATOR_COMPONENT.UploadFileComplete);
                unloadPreview();
                enableSubmit();
                break;
            case MANAGER_STATE.ActiveMessage:
                decorator.decorate(DECORATOR_COMPONENT.Transition);
                decorator.decorate(DECORATOR_COMPONENT.Active);
                if (!YLANG.trim(link.value).length) {
                    decorator.strip(DECORATOR_COMPONENT.ActiveLink)
                }
                decorator.strip(DECORATOR_COMPONENT.Inactive);
                decorator.decorate(DECORATOR_COMPONENT.ActiveMessage);
                animateMemberPhoto(15);
                break;
            case MANAGER_STATE.ActiveLink:
                decorator.decorate(DECORATOR_COMPONENT.Transition);
                decorator.decorate(DECORATOR_COMPONENT.Active);
                decorator.strip(DECORATOR_COMPONENT.ActiveMessage);
                decorator.strip(DECORATOR_COMPONENT.Inactive);
                decorator.decorate(DECORATOR_COMPONENT.ActiveLink);
                break;
            case MANAGER_STATE.UrlCaptured:
                if (!previewContent&&!decorator.is_a(DECORATOR_COMPONENT.UploadActive)) {
                    urlInputHelper.url = urlInputHelper.getUrl();
                    link.value = urlInputHelper.url;
                    decorator.decorate(DECORATOR_COMPONENT.PreviewLoading);
                    window.setTimeout(function urlCaptured() {
                        var url = dataURI + encodeURIComponent(urlInputHelper.url);
                        if (bizShareModule) {
                            url = LI.addParams(url, {
                                "bizShareImageUpload": "enabled"
                            })
                        }
                        retrievePreview(url);
                        stateManager.state(MANAGER_STATE.PreviewLoading)
                    }, 300)
                }
                break;
            case MANAGER_STATE.PreviewLoading:
                disableSubmit();
                break;
            case MANAGER_STATE.PreviewFailed:
                enableSubmit();
                decorator.strip(DECORATOR_COMPONENT.PreviewLoading);
                break;
            case MANAGER_STATE.PreviewAborted:
                enableSubmit();
                decorator.strip(DECORATOR_COMPONENT.PreviewLoading);
                break;
            case MANAGER_STATE.PreviewLoaded:
                enableSubmit();
                decorator.strip(DECORATOR_COMPONENT.PreviewLoading);
                decorator.decorate(DECORATOR_COMPONENT.PreviewLoaded);
                break;
            case MANAGER_STATE.ShareSubmitted:
                disableSubmit();
                break;
            case MANAGER_STATE.ShareErred:
                disableSubmit();
                break;
            case MANAGER_STATE.ShareFailed:
                enableSubmit();
                break;
            case MANAGER_STATE.ShareSucceeded:
                LI.removeAlert();
                removeMessageUCF();
                toggleReviewSubmit(false);
                break;
            case MANAGER_STATE.ShareInjecting:
                break;
            case MANAGER_STATE.ShareInjected:
                urlInputHelper.clear();
                if (hasMentions && getMentionsDecorator()) {
                    getMentionsDecorator().clearMentions()
                }
                LI.Events.fire("layout:items-changed");
                LI.Events.fire("layout:updated");
                break;
            case MANAGER_STATE.ShareLoading:
                disableSubmit();
                break;
            case MANAGER_STATE.ShareReady:
                decorator.strip(DECORATOR_COMPONENT.ShareLoading);
                enableSubmit();
                if (message && document.activeElement && message.id === document.activeElement.id) {
                    stateManager.state(MANAGER_STATE.ActiveMessage);
                    WebTracking.trackUserAction(config.trackingPrefix + "actvt-msg")
                }
                break;
            case MANAGER_STATE.ShareBlock:
                displayMessageUCF("block");
                toggleBlockSubmit(true);
                break;
            case MANAGER_STATE.ShareReview:
                displayMessageUCF("review");
                toggleReviewSubmit(true);
                break;
            default:
                break
            }
            if (LI.__DEBUG) {
                console.info("ShareModule:StateChanged:" + state)
            }
        });
        function onSsuStateChange(event, passedArgs) {
            var args = [].concat(passedArgs), state = args.shift(), data = args[1] || {}, STATE = ssuPaperclip.STATE || ssuShareImageUpload.STATE || {};
            switch (state) {
            case STATE.UploadActive:
                decorator.strip(DECORATOR_COMPONENT.PreviewLoading);
                decorator.strip(DECORATOR_COMPONENT.UploadError);
                decorator.strip(DECORATOR_COMPONENT.Inactive);
                break;
            case STATE.UploadCancel:
                decorator.strip(DECORATOR_COMPONENT.UploadActive);
                decorator.strip(DECORATOR_COMPONENT.UploadPreview);
                decorator.strip(DECORATOR_COMPONENT.UploadConvert);
                decorator.strip(DECORATOR_COMPONENT.UploadProgress);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressStart);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressEnd);
                decorator.strip(DECORATOR_COMPONENT.UploadFileComplete);
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdOne);
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdTwo);
                break;
            case STATE.UploadError:
                decorator.decorate(DECORATOR_COMPONENT.UploadError);
                decorator.strip(DECORATOR_COMPONENT.UploadPreview);
                decorator.strip(DECORATOR_COMPONENT.UploadConvert);
                decorator.strip(DECORATOR_COMPONENT.UploadProgress);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressStart);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressEnd);
                decorator.strip(DECORATOR_COMPONENT.UploadFileComplete);
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdOne);
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdTwo);
                break;
            case STATE.UploadPreview:
                decorator.decorate(DECORATOR_COMPONENT.UploadPreview);
                break;
            case STATE.UploadImageComplete:
                decorator.strip(DECORATOR_COMPONENT.UploadError);
                decorator.strip(DECORATOR_COMPONENT.UploadProgress);
                decorator.strip(DECORATOR_COMPONENT.UploadConvert);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressStart);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressEnd);
                decorator.decorate(DECORATOR_COMPONENT.UploadFileComplete);
                enableSubmit();
                if (!teamSharingEnabled) {
                    visibilityDropdown.enableDropdown()
                }
                break;
            case STATE.UploadProgressStart:
                decorator.strip(DECORATOR_COMPONENT.UploadError);
                decorator.strip(DECORATOR_COMPONENT.UploadConvert);
                decorator.strip(DECORATOR_COMPONENT.UploadFileComplete);
                decorator.decorate(DECORATOR_COMPONENT.UploadProgress);
                decorator.decorate(DECORATOR_COMPONENT.UploadProgressStart);
                break;
            case STATE.UploadQueueStart:
            case STATE.UploadConvertStart:
                decorator.decorate(DECORATOR_COMPONENT.UploadConvert);
                decorator.strip(DECORATOR_COMPONENT.UploadError);
                decorator.strip(DECORATOR_COMPONENT.UploadProgress);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressStart);
                break;
            case STATE.UploadConvertEnd:
                decorator.strip(DECORATOR_COMPONENT.UploadConvert);
                decorator.strip(DECORATOR_COMPONENT.UploadProgressEnd);
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdOne);
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdTwo);
                decorator.decorate(DECORATOR_COMPONENT.UploadFileComplete);
                enableSubmit();
                if (!teamSharingEnabled) {
                    visibilityDropdown.enableDropdown()
                }
                break;
            case STATE.UploadConvertThresholdOne:
                if (!(decorator.is_a([DECORATOR_COMPONENT.UploadFileComplete, DECORATOR_COMPONENT.UploadError, DECORATOR_COMPONENT.Inactive]))) {
                    decorator.decorate(DECORATOR_COMPONENT.UploadConvertThresholdOne)
                }
                break;
            case STATE.UploadConvertThresholdTwo:
                decorator.strip(DECORATOR_COMPONENT.UploadConvertThresholdOne);
                if (!(decorator.is_a([DECORATOR_COMPONENT.UploadFileComplete, DECORATOR_COMPONENT.UploadError, DECORATOR_COMPONENT.Inactive]))) {
                    decorator.decorate(DECORATOR_COMPONENT.UploadConvertThresholdTwo)
                }
                break;
            case STATE.UploadProgressEnd:
                decorator.strip(DECORATOR_COMPONENT.UploadProgressStart);
                if (!(decorator.is_a([DECORATOR_COMPONENT.UploadFileComplete, DECORATOR_COMPONENT.UploadError, DECORATOR_COMPONENT.Inactive]))) {
                    decorator.decorate(DECORATOR_COMPONENT.UploadProgressEnd)
                }
                break;
            case STATE.InteractiveLocked:
                interactiveLocked = true;
                break;
            case STATE.InteractiveUnlocked:
                interactiveLocked = false;
                break;
            default:
                break
            }
        }
        ssuPaperclip = LI.Controls.getControl("slideshare-upload-form", "SlideshareUploader");
        if (ssuPaperclip) {
            ssuPaperclip.attachStateMonitor(onSsuStateChange);
            ssuPaperclip.attachStateMonitor(function(event, passedArgs) {
                var args = [].concat(passedArgs), state = args.shift(), data = args[1] || {}, STATE = ssuPaperclip.stateManager.STATE || {};
                switch (state) {
                case MANAGER_STATE.Inactive:
                    Slideshare.unsetFilePreview();
                    Slideshare.inactiveState(ssuPaperclip);
                    break;
                case MANAGER_STATE.ActiveMessage:
                case MANAGER_STATE.Active:
                    Slideshare.activeState(ssuPaperclip);
                    break;
                case STATE.UploadActive:
                    decorator.decorate(DECORATOR_COMPONENT.UploadActive);
                    decorator.decorate(DECORATOR_COMPONENT.Active);
                    decorator.decorate(DECORATOR_COMPONENT.Transition);
                    Slideshare.initFilePreview(data);
                    disableSubmit();
                    break;
                case STATE.UploadCancel:
                    Slideshare.unsetFilePreview();
                    Slideshare.uploadCancelState(ssuPaperclip);
                    break;
                case MANAGER_STATE.PreviewLoaded:
                    Slideshare.previewLoadedState(ssuPaperclip);
                    break;
                case STATE.UploadError:
                    Slideshare.setFileUploadError(data);
                    Slideshare.uploadErrorState(ssuPaperclip);
                    break;
                case STATE.UploadProgressStatus:
                    Slideshare.setFileUploadProgress(data);
                    break;
                case STATE.UploadPreview:
                    decorator.decorate(DECORATOR_COMPONENT.UploadPreview);
                    Slideshare.setFilePreview(data);
                    break;
                case MANAGER_STATE.BeforeShareSubmit:
                    if (wasFileUploaded()) {
                        Slideshare.validateFileUploadSubmit()
                    }
                    break;
                case STATE.UploadImageComplete:
                    Slideshare.setFilePreview(data);
                    break;
                case STATE.FileFocus:
                    Slideshare.fileFocusState(ssuPaperclip);
                    break;
                case STATE.FileBlur:
                    Slideshare.fileBlurState(ssuPaperclip);
                    break;
                default:
                    break
                }
            })
        }
        ssuShareImageUpload = LI.Controls.getControl("slideshare-upload-form-share-image-upload", "SlideshareUploader");
        if (ssuShareImageUpload) {
            ssuShareImageUpload.attachStateMonitor(onSsuStateChange);
            ssuShareImageUpload.attachStateMonitor(function(event, passedArgs) {
                var args = [].concat(passedArgs), state = args.shift(), data = args[1] || {}, STATE = ssuShareImageUpload.stateManager.STATE || {};
                switch (state) {
                case MANAGER_STATE.Inactive:
                    Slideshare.inactiveState(ssuShareImageUpload);
                    break;
                case MANAGER_STATE.ActiveMessage:
                case MANAGER_STATE.Active:
                    Slideshare.activeState(ssuShareImageUpload);
                    break;
                case STATE.UploadActive:
                    Slideshare.shareImageUpload.loading();
                    disableSubmit();
                    break;
                case STATE.UploadCancel:
                    Slideshare.shareImageUpload.loading("remove");
                    Slideshare.uploadCancelState(ssuShareImageUpload);
                    break;
                case MANAGER_STATE.PreviewLoaded:
                    Slideshare.previewLoadedState(ssuShareImageUpload);
                    break;
                case STATE.UploadError:
                    Slideshare.shareImageUpload.loading("remove");
                    Slideshare.uploadErrorState(ssuShareImageUpload);
                    break;
                case MANAGER_STATE.BeforeShareSubmit:
                    Slideshare.shareImageUpload.beforeShareSubmit();
                    break;
                case STATE.UploadImageComplete:
                    showFilteredCustomImage = true;
                    var filteredImageUrl = dataURI + encodeURIComponent(data.image);
                    retrievePreview(filteredImageUrl);
                    Slideshare.shareImageUpload.loading("remove");
                    Slideshare.shareImageUpload.uploadImageComplete(data);
                    break;
                case STATE.FileFocus:
                    Slideshare.fileFocusState(ssuShareImageUpload);
                    break;
                case STATE.FileBlur:
                    Slideshare.fileBlurState(ssuShareImageUpload);
                    break;
                default:
                    break
                }
            })
        }
        stateManager.state(MANAGER_STATE.ShareLoading);
        if (singleInputShareModuleEnabled) {
            postLinkClose = Y$(".post-link-close", el)[0];
            shareEditSummary = YDom.get("share-edit-summary");
            shareEditTitle = YDom.get("share-edit-title");
            shareEditTitleWrapper = YDom.get("share-edit-title-wrapper");
            shareEditSummaryWrapper = YDom.get("share-edit-summary-wrapper");
            messageGhostLabel = Y$(".post-message-label", el, true);
            if (messageGhostLabel) {
                messageGhostLabel = LI.Controls.getControl(messageGhostLabel, "GhostLabel")
            }
            summaryGhostLabel = LI.Controls.getControl("share-edit-summary-label", "GhostLabel");
            titleGhostLabel = LI.Controls.getControl("share-edit-title-label", "GhostLabel");
            shareIncludePhotoWrapper = YDom.get("share-include-photo-wrapper");
            shareIncludePhotoMarkup = shareIncludePhotoWrapper.innerHTML;
            shareIncludePhotoWrapper.innerHTML = "";
            if (!teamSharingEnabled&&!disableDropdown) {
                visibilityDropdown = new LI.StyledDropdown(Y$(".menu-basic", el)[0], {
                    listClass: "doc-sharing-dropdown"
                });
                handleVisibilityDropdownChange();
                LI.StyledDropdown.itemSelectEvent.subscribe(handleVisibilityDropdownChange, visibilityDropdown)
            }
        }
        config = YLANG.merge(defaults, config);
        try {
            dataURI = config.dataURI.substr(0, config.dataURI.indexOf("url=") + 4)
        } catch (error) {
            throw ("dataURI not provided to ShareModule")
        }
        try {
            postModuleURL = config.postModuleURL
        } catch (error) {
            throw ("postModuleURL not provided to ShareModule")
        }
        postMap = {
            ajax: Y$("#share-ajax")[0],
            contentEntityID: Y$("#share-entity-id")[0],
            contentImage: Y$("#share-img-selected-url")[0],
            contentImageCount: Y$("#share-img-total")[0],
            contentImageIncluded: Y$("#share-include-photo")[0],
            contentImageIndex: Y$("#share-img-selected-idx")[0],
            contentImageWidth: Y$("#share-img-width")[0],
            contentImageHeight: Y$("#share-img-height")[0],
            contentSummary: Y$("#share-edit-summary")[0],
            contentTitle: Y$("#share-edit-title")[0],
            contentSource: Y$("#share-entity-source")[0],
            shareEntityUrl: Y$("#share-entity-url")[0],
            contentUrl: Y$("#contentUrl-postModuleForm")[0],
            postText: Y$("#postText-postModuleForm")[0],
            fileShareFileType: Y$("#file-share-ext-input")[0],
            fileShareFileId: Y$("#file-share-id-input")[0]
        };
        (function(context) {
            if (!enableSlideshare) {
                return
            }
            var messageInputField = Y$(".post-message", el, true), filePreview = Y$(".file-preview", el, true), filePreviewStatus = Y$(".file-preview-status", el, true), filePercentage = Y$(".file-upload-percentage", filePreview, true), fileErrors = Y$(".file-preview-errors", filePreview, true), type = Y$(".meta", filePreview, true), title = Y$(".share-view-title", filePreview, true), summary = Y$(".share-view-summary", filePreview, true), image = Y$(".file-upload-image", filePreview, true), editContent = Y$(".share-content", filePreview, true), originalImageSrc = YDom.getAttribute(image, "src") || image.src, originalAltText = YDom.getAttribute(image, "alt") || image.alt, originalSummaryText = summaryGhostLabel ? summaryGhostLabel.getLabel(): "", originalTitleText = titleGhostLabel ? titleGhostLabel.getLabel(): "", originalLabelText = messageGhostLabel ? messageGhostLabel.getLabel(): "", filePreviewPreviousNode = YDom.getPreviousSibling(filePreview), filePreviewNode = filePreview, filePreviewStatusNode = filePreviewStatus, editContentPreviousNode = YDom.getPreviousSibling(editContent), editContentNode = editContent, previousTitle = shareEditTitle.value, previousSummary = shareEditSummary.value;
            function removePreview() {
                if (filePreview.parentNode) {
                    filePreviewNode = filePreview.parentNode.removeChild(filePreview)
                }
                if (filePreviewStatus.parentNode) {
                    filePreviewStatusNode = filePreviewStatus.parentNode.removeChild(filePreviewStatus)
                }
                if (editContent.parentNode) {
                    editContentNode = editContent.parentNode.removeChild(editContent)
                }
            }
            removePreview();
            function setTitleText(text) {
                if (title) {
                    shareEditTitle.value = previousTitle = text;
                    title.innerHTML = LI.htmlEncode(text)
                }
            }
            function setSummaryText(text) {
                if (summary) {
                    shareEditSummary.value = previousSummary = text;
                    summary.innerHTML = LI.htmlEncode(text)
                }
            }
            context["initFilePreview"] = function(args) {
                var ghostMessage;
                if (filePreview && args.type) {
                    filePreview.className = args.type + "-upload-type " + filePreview.className.replace(/(^|\s)[a-z]+-upload-type(\s|$)/, "$1 $2")
                }
                if (args.type !== "image" || allowImageEdit) {
                    YDom.insertAfter(editContentNode, editContentPreviousNode)
                }
                setSummaryText(originalSummaryText);
                setTitleText(originalTitleText);
                YDom.insertAfter(filePreviewNode, filePreviewPreviousNode);
                if (!args ||!args.isImageUpload) {
                    YDom.insertAfter(filePreviewStatusNode, filePreviewNode)
                }
                if (messageGhostLabel) {
                    if (args.type && FILE_TYPES[args.type]) {
                        ghostMessage = LI.i18n.get("share-module-file-upload-message-" + FILE_TYPES[args.type])
                    }
                    messageGhostLabel.setLabel(ghostMessage || LI.i18n.get("share-module-file-upload-message") || originalLabelText);
                    if (!messageInputField || (!messageInputField.value || messageInputField.value === originalLabelText)) {
                        messageGhostLabel.updateLabel()
                    }
                }
                message.focus();
                if (!postMap.contentImageIncluded) {
                    shareIncludePhotoWrapper.innerHTML = shareIncludePhotoMarkup;
                    postMap.contentImageIncluded = YDom.get(SHOW_IMAGE_ID)
                }
            };
            context["setFilePreview"] = function(args) {
                var title = LI.htmlUnencode(YLANG.trim(args.title)), summary = LI.htmlUnencode(YLANG.trim(args.summary));
                if (args.type && type) {
                    activeFileType = args.type;
                    type.innerHTML = args.type
                }
                if (args.extension) {
                    postMap.fileShareFileType.value = args.extension
                }
                if (title && shareEditTitle.value === previousTitle) {
                    setTitleText(title);
                    YDom.setAttribute(image, "alt", title)
                }
                if (summary && shareEditSummary.value === previousSummary) {
                    setSummaryText(summary)
                }
                if (args.image) {
                    YDom.setAttribute(image, "src", args.image.replace(/^https?\:/, "").replace(/\-(medium|large)(\.[a-z]+)$/, "-small$2"));
                    postMap.contentImage.value = args.image;
                    postMap.contentImageIndex.value = 0;
                    postMap.contentImageCount.value = 1;
                    postMap.contentImageIncluded.checked = true
                }
                if (args.url) {
                    postMap.contentUrl.value = args.url;
                    postMap.shareEntityUrl.value = args.url
                }
                if (args.id) {
                    postMap.fileShareFileId.value = args.id
                }
                postMap.contentEntityID.value = "FSHR_38"
            };
            context["unsetFilePreview"] = function() {
                var inputs = [postMap.fileShareFileType, postMap.contentImage, postMap.contentImageIndex, postMap.contentImageCount, postMap.contentImageIncluded, postMap.contentUrl, postMap.shareEntityUrl, postMap.fileShareFileId, postMap.contentEntityID];
                removePreview();
                if (type) {
                    type.innerHTML = ""
                }
                YDom.setAttribute(image, "src", originalImageSrc);
                YDom.setAttribute(image, "alt", originalAltText);
                setSummaryText(originalSummaryText);
                setTitleText(originalTitleText);
                activeFileType = "";
                LI.each(inputs, function(input) {
                    if (input) {
                        input.value = input.defaultValue
                    }
                });
                shareIncludePhotoWrapper.innerHTML = "";
                postMap.contentImageIncluded = null;
                if (messageGhostLabel) {
                    messageGhostLabel.setLabel(originalLabelText);
                    messageGhostLabel.updateLabel()
                }
            };
            context["setFileUploadProgress"] = function(args) {
                filePercentage.innerHTML = args.percentage
            };
            context["validateFileUploadSubmit"] = function() {
                if (shareEditSummary.value === originalSummaryText) {
                    shareEditSummary.value = ""
                }
                if (shareEditTitle.value === originalTitleText) {
                    shareEditTitle.value = ""
                }
            };
            context["setFileUploadError"] = function(args) {
                var errors = ["convert-error", "progress-error", "type-error", "size-error"], type = args.type, supported = false;
                LI.each(errors, function(err) {
                    YDom.removeClass(fileErrors, err);
                    if (!supported && err.indexOf(type) === 0) {
                        supported = true
                    }
                });
                if (!supported) {
                    type = "progress"
                }
                YDom.addClass(fileErrors, type + "-error")
            };
            context["uploadActive"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                YDom.addClass(thisEl, IS_ACTIVE);
                YDom.removeClass(thisEl, IS_INTERACTIVE)
            };
            context["inactiveState"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                thisSlideshareUploader.reset();
                YDom.removeClass(thisEl, IS_ACTIVE);
                YDom.removeClass(thisEl, IS_INTERACTIVE);
                YDom.removeClass(thisEl, IS_ERRORED);
                YDom.setStyle(thisEl, "bottom", "")
            };
            context["activeState"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                YDom.addClass(thisEl, IS_ACTIVE);
                if (!interactiveLocked) {
                    YDom.addClass(thisEl, IS_INTERACTIVE)
                } else {
                    YDom.removeClass(thisEl, IS_INTERACTIVE)
                }
            };
            context["uploadCancelState"] = function(thisSlideshareUploader) {
                thisSlideshareUploader.cancelState()
            };
            context["previewLoadedState"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                YDom.addClass(thisEl, IS_ACTIVE);
                YDom.removeClass(thisEl, IS_INTERACTIVE)
            };
            context["uploadErrorState"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                YDom.addClass(thisEl, IS_INTERACTIVE);
                YDom.addClass(thisEl, IS_ERRORED)
            };
            context["fileFocusState"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                YDom.addClass(thisEl, IS_FOCUSED)
            };
            context["fileBlurState"] = function(thisSlideshareUploader) {
                var thisEl = thisSlideshareUploader._el;
                YDom.removeClass(thisEl, IS_FOCUSED)
            };
            context["beforeUnloadState"] = function(event) {
                if (decorator && decorator.is_a(DECORATOR_COMPONENT.UploadActive)&&!decorator.is_a(DECORATOR_COMPONENT.UploadError)) {
                    event.returnValue = unloadText;
                    return unloadText
                }
            };
            context["shareImageUpload"] = {
                loading: function(action) {
                    if (action === "remove") {
                        YDom.removeClass("share-upload-image", "loading")
                    } else {
                        YDom.addClass("share-upload-image", "loading")
                    }
                },
                beforeShareSubmit: function() {
                    if (wasFileUploaded()) {
                        WebTracking.trackUserAction(config.trackingPrefix + "submit_scrapper_with_upload_image")
                    }
                },
                uploadImageComplete: function(args) {
                    var tmpImage = args.image, tmpImageUrl = tmpImage, tmpShareImage = Y$("#share-image");
                    if (tmpImage) {
                        YDom.addClass(tmpShareImage, "not-empty");
                        YDom.addClass(Y$("p.controls", tmpShareImage), "hidden");
                        YDom.removeClass(Y$("#share-preview-in .toggle-img-content"), "hidden");
                        postMap.contentImage.value = tmpImageUrl;
                        postMap.contentImageIndex.value = 0;
                        postMap.contentImageCount.value = 1;
                        postMap.contentImageIncluded.checked = true;
                        if (args.extension) {
                            postMap.fileShareFileType.value = args.extension
                        }
                        if (args.url) {
                            postMap.contentUrl.value = args.url;
                            postMap.shareEntityUrl.value = args.url
                        }
                        if (args.id) {
                            postMap.fileShareFileId.value = args.id
                        }
                        postMap.contentEntityID.value = "FSHR_38"
                    }
                }
            }
        }(Slideshare));
        stateManager.state(MANAGER_STATE.ShareReady);
        function typeIsXML(response) {
            var doc = (YAHOO.env.ua.ie) ? (response.responseXML && response.responseXML.documentElement): response.responseXML;
            return doc
        }
        function disableSubmit() {
            YDom.setAttribute(submit, "disabled", "true");
            YDom.addClass(submit, "disabled")
        }
        function enableSubmit() {
            submit.disabled = false;
            YDom.removeClass(submit, "disabled")
        }
        function displayMessageUCF(msg_type) {
            var div = Y$("#post-module-neu .post-actions")[0];
            removeMessageUCF();
            errorMessage = LI.domify('<div class="ucf-notify">' + LI.i18n.get("share-module-" + msg_type + "-comment-msg") + "</div>");
            if (div) {
                div.parentNode.insertBefore(errorMessage, div)
            }
        }
        function removeMessageUCF() {
            if (errorMessage) {
                errorMessage.parentNode.removeChild(errorMessage);
                errorMessage = null
            }
        }
        function toggleReviewSubmit(btn_state) {
            if (btn_state) {
                YDom.addClass(submit, CLASS_FLAG_REVIEW);
                submit.value = shareInputReviewText
            } else {
                YDom.removeClass(submit, CLASS_FLAG_REVIEW);
                submit.value = shareInputDefaultText;
                removeMessageUCF()
            }
            enableSubmit()
        }
        function toggleBlockSubmit(btn_state) {
            if (btn_state) {
                disableSubmit();
                YDom.addClass(submit, CLASS_FLAG_BLOCK)
            } else {
                enableSubmit();
                YDom.removeClass(submit, CLASS_FLAG_BLOCK);
                removeMessageUCF()
            }
        }
        function loadPreview() {
            var meta, toggleImageContent, shareImageNode, contentMeta, shareTitle, shareSummary, shareImageUploadFormWrapper;
            if (LI.isFullPage(previewContent)) {
                stateManager.state(MANAGER_STATE.PreviewFailed);
                return
            }
            link.blur();
            if (showFilteredCustomImage) {
                var previewContentImgSrc = $("img", previewContent).attr("src");
                $("img", preview).attr("src", previewContentImgSrc);
                stateManager.state(MANAGER_STATE.PreviewLoaded);
                showFilteredCustomImage = false;
                return
            } else {
                preview.innerHTML = previewContent
            }
            shareImageUploadFormWrapper = Y$(".share-image-upload-form-wrapper")[0];
            if (shareImageUploadForm && shareImageUploadFormWrapper) {
                shareImageUploadFormWrapper.appendChild(shareImageUploadForm)
            }
            if (singleInputShareModuleEnabled) {
                shareImageNode = YDom.get("share-image");
                toggleImageContent = Y$(".toggle-img-content", el)[0];
                shareIncludePhotoWrapper.innerHTML = "";
                if (toggleImageContent) {
                    toggleImageContent.innerHTML = shareImageNode ? shareIncludePhotoMarkup : ""
                }
                showImageCheckbox = YDom.get(SHOW_IMAGE_ID);
                YEvent.on(showImageCheckbox, CLICK, handleShowImageCheckboxClick)
            }
            shareTitle = YDom.get("share-view-title");
            if (shareTitle) {
                postMap.contentTitle.value = LI.htmlUnencode(shareTitle.innerHTML)
            }
            if (postMap.contentSource) {
                contentMeta = YDom.get("share-view-meta");
                postMap.contentSource.value = LI.htmlUnencode(YLANG.trim(contentMeta ? contentMeta.innerHTML : ""))
            }
            shareSummary = YDom.get("share-view-summary");
            if (shareSummary) {
                postMap.contentSummary.value = LI.htmlUnencode(shareSummary.innerHTML)
            }
            postMap.contentImage.value = YDom.getAttribute(Y$("#share-image .sheen img")[0], "src") || "";
            meta = YDom.get("share-content");
            postMap.contentEntityID.value = YDom.getAttribute(meta, "data-entity-id");
            postMap.shareEntityUrl.value = YDom.getAttribute(meta, "data-entity-url");
            LI.Controls.parseFragment(preview);
            stateManager.state(MANAGER_STATE.PreviewLoaded)
        }
        function unloadPreview() {
            postMap.contentTitle.value = postMap.contentTitle.defaultValue || "";
            postMap.contentSummary.value = postMap.contentSummary.defaultValue || "";
            if (postMap.contentSource) {
                postMap.contentSource.value = postMap.contentSource.defaultValue || ""
            }
            postMap.contentEntityID.value = "";
            if (postMap.contentUrl) {
                postMap.contentUrl.value = ""
            }
            preview.innerHTML = "";
            decorator.strip(DECORATOR_COMPONENT.PreviewLoaded);
            decorator.strip(DECORATOR_COMPONENT.PreviewLoading);
            LI.GhostLabel.Manager.show(form.id);
            urlInputHelper.unload();
            previewContent = undefined
        }
        function retrievePreview(url) {
            var timeout = 12000, frequency = 1200, delay;
            requestManager.kill();
            function fail() {
                stateManager.state(MANAGER_STATE.PreviewFailed)
            }
            function abort() {
                stateManager.state(MANAGER_STATE.PreviewAborted)
            }
            function success(response) {
                var xml = typeIsXML(response), ticket;
                function handleTicket() {
                    var url = ticket[0].firstChild.nodeValue;
                    if (url) {
                        if (bizShareModule) {
                            url = LI.addParams(url, {
                                "bizShareImageUpload": "enabled"
                            })
                        }
                        retrievePreview(url)
                    } else {
                        fail()
                    }
                }
                if (delay) {
                    window.clearTimeout(delay)
                }
                if (xml) {
                    ticket = xml.getElementsByTagName("responseInfo");
                    if (ticket.length > 0) {
                        if (ticket[0].firstChild.nodeValue === "FAILURE") {
                            fail()
                        } else {
                            if (ticket[0].firstChild.nodeValue === TICKET_STATUS.TicketClosed) {
                                ticket = xml.getElementsByTagName("forwardUrl");
                                if (ticket.length > 0) {
                                    handleTicket()
                                } else {
                                    fail()
                                }
                            } else {
                                delay = window.setTimeout(function() {
                                    retrievePreview(url)
                                }, frequency)
                            }
                        }
                    } else {
                        ticket = xml.getElementsByTagName("ticketStatusUrl");
                        if (ticket.length > 0) {
                            handleTicket()
                        } else {
                            fail()
                        }
                    }
                } else {
                    if (LI.isFullPage(response.responseText)) {
                        stateManager.state(MANAGER_STATE.PreviewFailed)
                    } else {
                        previewContent = response.responseText;
                        loadPreview()
                    }
                }
            }
            requestManager.request(YAHOO.util.Connect.asyncRequest(GET, url, {
                success: success,
                failure: fail,
                abort: abort,
                timeout: timeout
            }));
            stateManager.state(MANAGER_STATE.PreviewLoading)
        }
        function postStatus(response) {
            var _response = response.responseText;
            function injectFeedItem(responseText) {
                if (LI.NusInjection && LI.NusInjection.injectFeedItem) {
                    LI.NusInjection.injectFeedItem(responseText);
                    stateManager.state(MANAGER_STATE.ShareInjected)
                }
            }
            if (config.injectionMode === "inject") {
                requestManager.request(YAHOO.util.Connect.asyncRequest(GET, config.postModuleURL, {
                    success: function(response) {
                        var _lastPost = LI.domify(response.responseText);
                        lastPost.innerHTML = Y$(".last-post", _lastPost)[0].innerHTML;
                        stateManager.state(MANAGER_STATE.Inactive)
                    },
                    failure: function(response) {
                        stateManager.state(MANAGER_STATE.Inactive)
                    }
                }));
                stateManager.state(MANAGER_STATE.ShareInjecting)
            } else {
                stateManager.state(MANAGER_STATE.Inactive)
            }
            injectFeedItem(_response)
        }
        function typeIsJSON(response) {
            return response && /application\/json/i.test(response.getResponseHeader && response.getResponseHeader["Content-Type"])
        }
        function submitPost() {
            var fileWasUploaded = wasFileUploaded(), frequency = 1200, timeout = 30000, oldValue, pageKeyInput, extractedContentUrl;
            function success(data) {
                var xml = typeIsXML(data), response, Errors, json, responseInfoNode, responseInfoValue;
                response = data.responseXML;
                function injectTemplate(html) {
                    html = YAHOO.lang.trim(html);
                    postStatus({
                        responseText: html
                    });
                    stateManager.state(MANAGER_STATE.ShareSucceeded)
                }
                function poll(url, cb) {
                    var callCount = 1;
                    function makePollRequest(response) {
                        if (callCount < 12) {
                            window.setTimeout(makeRequest, frequency);
                            callCount += 1
                        } else {
                            failure(response)
                        }
                    }
                    function success(response) {
                        var status, jsonResponse;
                        if (typeIsJSON(response)) {
                            jsonResponse = LI.parseJSON(response.responseText);
                            if (typeof dust !== "undefined") {
                                dust.render(dustActivityTemplate, jsonResponse.content, function(error, output) {
                                    if (!error && output) {
                                        injectTemplate(output)
                                    } else {
                                        makePollRequest(response)
                                    }
                                })
                            }
                        } else {
                            if (!typeIsXML(response)) {
                                postStatus(response)
                            } else {
                                if (response.responseXML.getElementsByTagName("responseInfo")[0]) {
                                    status = response.responseXML.getElementsByTagName("responseInfo")[0].firstChild.nodeValue;
                                    if (status === TICKET_STATUS.TicketClosed) {
                                        url = response.responseXML.getElementsByTagName("forwardUrl")[0].firstChild.nodeValue;
                                        makeRequest()
                                    } else {
                                        makePollRequest(response)
                                    }
                                }
                            }
                        }
                    }
                    function failure(response) {
                        LI.injectAlert(genericErrorText, "error");
                        stateManager.state(MANAGER_STATE.ShareFailed)
                    }
                    function makeRequest() {
                        requestManager.request(YAHOO.util.Connect.asyncRequest(GET, url, {
                            success: success,
                            failure: failure,
                            timeout: timeout
                        }))
                    }
                    makeRequest()
                }
                if (xml) {
                    responseInfoNode = response.getElementsByTagName("responseInfo")[0];
                    responseInfoValue = response.getElementsByTagName("responseInfo")[0].firstChild.nodeValue;
                    if (response.getElementsByTagName("formErrors")[0]) {
                        Errors = eval("(" + response.getElementsByTagName("formErrors")[0].firstChild.nodeValue + ")");
                        LI.showFormErrors(response);
                        stateManager.state(MANAGER_STATE.ShareErred)
                    } else {
                        if (responseInfoNode && responseInfoValue === "DUPLICATE") {
                            LI.injectAlert(response.getElementsByTagName("responseMsg")[0].firstChild.nodeValue, "error");
                            stateManager.state(MANAGER_STATE.ShareFailed)
                        } else {
                            if (responseInfoNode && responseInfoValue === "FAILURE") {
                                stateManager.state(MANAGER_STATE.ShareFailed)
                            } else {
                                if (responseInfoNode && responseInfoValue === "REVIEW") {
                                    stateManager.state(MANAGER_STATE.ShareReview)
                                } else {
                                    if (responseInfoNode && responseInfoValue === "BLOCK") {
                                        stateManager.state(MANAGER_STATE.ShareBlock)
                                    } else {
                                        if (response.getElementsByTagName("jsonPayLoad")[0]) {
                                            json = eval("(" + response.getElementsByTagName("jsonPayLoad")[0].firstChild.nodeValue + ")");
                                            if (json.sharingUpdateUrl) {
                                                stateManager.state(MANAGER_STATE.ShareSucceeded);
                                                poll(json.sharingUpdateUrl)
                                            } else {
                                                stateManager.state(MANAGER_STATE.ShareFailed)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (data.status === 200 && data.responseText) {
                        json = LI.parseJSON(data.responseText);
                        if (!(json.status === "ok" && json.content)) {
                            stateManager.state(MANAGER_STATE.ShareFailed);
                            return
                        }
                        if (teamSharingEnabled && json.content.activityPollingUrl) {
                            stateManager.state(MANAGER_STATE.ShareSucceeded);
                            poll(json.content.activityPollingUrl)
                        } else {
                            if (json.content.activityWithActor) {
                                dust.render(dustActivityTemplate, json.content, function(error, output) {
                                    if (error) {
                                        stateManager.state(MANAGER_STATE.ShareFailed)
                                    } else {
                                        injectTemplate(output)
                                    }
                                })
                            } else {
                                stateManager.state(MANAGER_STATE.ShareFailed)
                            }
                        }
                    } else {
                        stateManager.state(MANAGER_STATE.ShareFailed)
                    }
                }
            }
            function failure(response) {
                var msgNode, msg;
                if (response && response.status===-1) {
                    LI.injectAlert(genericErrorText, "error");
                    stateManager.state(MANAGER_STATE.ShareFailed)
                } else {
                    if (typeIsXML(response)) {
                        msgNode = response.responseXML.getElementsByTagName("responseMsg")[0];
                        if (msgNode) {
                            msg = msgNode.firstChild.nodeValue;
                            if (msg) {
                                LI.injectAlert(msg, "error")
                            }
                        }
                    } else {
                        if (response && response.status === 500) {
                            LI.injectAlert(genericErrorText, "error");
                            stateManager.state(MANAGER_STATE.ShareFailed)
                        } else {
                            postMap.ajax.value = false;
                            form.submit();
                            LI.injectAlert(genericErrorText, "error")
                        }
                    }
                }
            }
            LI.clearFormErrors(form.id);
            LI.GhostLabel.Manager.hide(form.id);
            if (link&&!urlInputHelper.extractUrl(link.value)) {
                link.value = ""
            }
            if (overrideRichMediaContentUrl && fileWasUploaded) {
                if (activeFileType === "Image") {
                    if (message.value !== "") {
                        extractedContentUrl = urlInputHelper.extractUrl(message.value);
                        if (extractedContentUrl) {
                            link.value = extractedContentUrl;
                            postMap.contentUrl.value = extractedContentUrl;
                            postMap.shareEntityUrl.value = extractedContentUrl
                        }
                    }
                }
            }
            if (YLANG.trim(message.value) === "" && YLANG.trim(link.value) === ""&&!fileWasUploaded) {
                window.setTimeout(function() {
                    LI.GhostLabel.Manager.show(form.id)
                }, 0);
                return
            }
            if (teamSharingEnabled) {
                YAHOO.util.Connect.initHeader("X-IsAJAXForm", "1")
            }
            if (hasMentions) {
                if (getMentionsDecorator() && getMentionsDecorator().mentionEntities && getMentionsDecorator().mentionEntities.length) {
                    oldValue = message.value;
                    message.value = YLANG.trim(message.value);
                    mentionsDecorator.adjustMentions(oldValue)
                }
            }
            if (!form.pageKey && LI.getPageKey) {
                pageKeyInput = document.createElement("input");
                pageKeyInput.type = "hidden";
                pageKeyInput.name = "pageKey";
                pageKeyInput.value = LI.getPageKey();
                form.appendChild(pageKeyInput)
            }
            if (YDom.hasClass(submit, CLASS_FLAG_REVIEW)) {
                if (reviewInput === null) {
                    reviewInput = document.createElement("input");
                    reviewInput.type = "hidden";
                    reviewInput.name = "submitForReview";
                    reviewInput.value = "true";
                    form.insertBefore(reviewInput, null)
                }
            } else {
                if (reviewInput) {
                    reviewInput.parentNode.removeChild(reviewInput);
                    reviewInput = null
                }
            }
            YAHOO.util.Connect.setForm(form);
            requestManager.request(YAHOO.util.Connect.asyncRequest("POST", form.action, {
                success: success,
                failure: failure,
                timeout: timeout
            }));
            stateManager.state(MANAGER_STATE.ShareSubmitted)
        }
        function blurLinkInput(event) {
            if (!YLANG.trim(link.value).length) {
                decorator.strip(DECORATOR_COMPONENT.ActiveLink)
            }
        }
        function cancelFileUpload(event) {
            YEvent.preventDefault(event);
            stateManager.state(MANAGER_STATE.Active)
        }
        function checkShowingCharacterCountState() {
            var checkTextAreaCountdown;
            if (singleInputShareModuleEnabled) {
                checkTextAreaCountdown = Y$(CHECKTEXTAREA_MESSAGE_SELECTOR, form, true);
                if (checkTextAreaCountdown && YDom.getStyle(checkTextAreaCountdown, "display") !== "none") {
                    decorator.decorate(DECORATOR_COMPONENT.ShowingCharCount);
                    YDom.addClass(fileUploadForm, DECORATOR_COMPONENT.ShowingCharCount)
                } else {
                    decorator.strip(DECORATOR_COMPONENT.ShowingCharCount);
                    YDom.removeClass(fileUploadForm, DECORATOR_COMPONENT.ShowingCharCount)
                }
            }
        }
        function handleCloseLinkClick(event) {
            YEvent.preventDefault(event);
            decorator.strip(DECORATOR_COMPONENT.ActiveLink)
        }
        function handleShareEditTitleBlur(event) {
            setLinkPreviewTitle()
        }
        function handleShowImageCheckboxClick(event) {
            showImageCheckbox.value = showImageCheckbox.checked
        }
        function setLinkPreviewSummary() {
            var val = LI.htmlEncode(shareEditSummary.value) || summaryGhostLabel && summaryGhostLabel.getLabel();
            if (YLANG.trim(val) !== "") {
                shareViewSummary.innerHTML = val
            }
            shareEditSummary.parentNode.replaceChild(shareViewSummary, shareEditSummary);
            shareEditSummaryWrapper.appendChild(shareEditSummary)
        }
        function setLinkPreviewTitle() {
            var val = LI.htmlEncode(shareEditTitle.value) || titleGhostLabel && titleGhostLabel.getLabel();
            if (YLANG.trim(val) !== "") {
                shareViewTitle.innerHTML = val
            }
            shareEditTitle.parentNode.replaceChild(shareViewTitle, shareEditTitle);
            shareEditTitleWrapper.appendChild(shareEditTitle)
        }
        function RequestManager() {
            var requests = {}, count = 0;
            this.request = function(request) {
                var key = "request_" + count;
                count += 1;
                requests[key] = {
                    request: request
                };
                return key
            };
            this.kill = function(key) {
                var i;
                if (requests[key]) {
                    YAHOO.util.Connect.abort(requests[key].request, {}, false);
                    delete requests[key]
                } else {
                    for (i in requests) {
                        this.kill(i)
                    }
                }
            }
        }
        function UrlInputHelper() {
            var timeout, timeoutIds = [], delay = 1200, hasLoaded = false, _url, inputs = link ? [message, link]: [message];
            function resolve(target) {
                var __url;
                if (decorator.is_a(DECORATOR_COMPONENT.UploadActive)) {
                    return
                }
                __url = extractUrl(target.value);
                if (__url && __url !== _url && hasLoaded === false) {
                    _url = __url;
                    stateManager.state(MANAGER_STATE.UrlCaptured);
                    WebTracking.trackUserAction(config.trackingPrefix + "url_captured")
                }
            }
            function clearResolveUrlTimeouts() {
                var id;
                while (timeoutIds.length) {
                    id = timeoutIds.pop();
                    window.clearTimeout(id)
                }
            }
            function extractUrl(string) {
                var strings = string.replace(/\n/g, " ").split(" "), match, i = 0, j;
                j = strings.length;
                for (;
                i < j;
                i += 1) {
                    match = strings[i].match(LI.patterns.sharingUrl);
                    if (match && match.input.search("@")===-1) {
                        return strings[i].replace(",", "")
                    }
                }
                return false
            }
            this.extractUrl = extractUrl;
            this.getUrl = function() {
                return _url
            };
            this.clear = function() {
                var i = 0, j = inputs.length, checkTextAreaCountDown = Y$(CHECKTEXTAREA_MESSAGE_SELECTOR, form, true);
                hasLoaded = false;
                urlInputHelper.url = undefined;
                for (;
                i < j;
                i += 1) {
                    inputs[i].value = ""
                }
                if (checkTextAreaCountDown) {
                    checkTextAreaCountDown.parentNode.removeChild(checkTextAreaCountDown)
                }
                LI.GhostLabel.Manager.show(form.id)
            };
            this.unload = function() {
                hasLoaded = false;
                _url = undefined
            };
            YEvent.on(inputs, "keyup", function(event) {
                var target = YEvent.getTarget(event), keyCode = event.keyCode;
                if (YDom.hasClass(submit, CLASS_FLAG_REVIEW)) {
                    toggleReviewSubmit(false)
                } else {
                    if (YDom.hasClass(submit, CLASS_FLAG_BLOCK)) {
                        toggleBlockSubmit(false)
                    }
                }
                if (keyCode === KEY_CODE_ENTER || keyCode === KEY_CODE_SPACE) {
                    resolve(target);
                    clearResolveUrlTimeouts()
                } else {
                    timeout = window.setTimeout(function() {
                        resolve(target)
                    }, delay);
                    timeoutIds.push(timeout)
                }
                checkShowingCharacterCountState()
            });
            YEvent.on(inputs, "keydown", function(event) {
                clearResolveUrlTimeouts()
            });
            YEvent.on(inputs, "paste", function(event) {
                var target = YEvent.getTarget(event);
                window.setTimeout(function() {
                    resolve(target)
                }, 0);
                checkShowingCharacterCountState();
                WebTracking.trackUserAction(config.trackingPrefix + "paste")
            });
            YEvent.on(inputs, "blur", function(event) {
                resolve(YEvent.getTarget(event))
            })
        }
        requestManager = new RequestManager();
        urlInputHelper = new UrlInputHelper();
        YEvent.on(message, "focus", function(event) {
            stateManager.state(MANAGER_STATE.ActiveMessage);
            WebTracking.trackUserAction(config.trackingPrefix + "actvt-msg")
        });
        if (singleInputShareModuleEnabled) {
            YEvent.on(shareEditSummary, BLUR, setLinkPreviewSummary);
            YEvent.on(shareEditTitle, BLUR, handleShareEditTitleBlur);
            YEvent.on(postLinkClose, CLICK, handleCloseLinkClick)
        }
        YEvent.on(link, CLICK, function(event) {
            stateManager.state(MANAGER_STATE.ActiveLink);
            WebTracking.trackUserAction(config.trackingPrefix + "actvt-lnk")
        });
        YEvent.on(link, BLUR, blurLinkInput);
        YEvent.on(el, CLICK, function(event) {
            var target = YEvent.getTarget(event), checkTextAreaCountDown = Y$(CHECKTEXTAREA_MESSAGE_SELECTOR, form, true), defaultSummaryText = LI.htmlUnencode(summaryGhostLabel && summaryGhostLabel.getLabel() || ""), defaultTitleText = LI.htmlUnencode(titleGhostLabel && titleGhostLabel.getLabel() || ""), uploadCancelState;
            if (YDom.hasClass(target, "share-close")) {
                YEvent.preventDefault(event);
                link.value = "";
                if (decorator.is_a(DECORATOR_COMPONENT.UploadError)) {
                    uploadCancelState = UPLOAD_STATE.ErrorState
                } else {
                    if (decorator.is_a(DECORATOR_COMPONENT.UploadFileComplete)) {
                        uploadCancelState = UPLOAD_STATE.Preview
                    } else {
                        if (decorator.is_a(DECORATOR_COMPONENT.UploadConvert)) {
                            uploadCancelState = UPLOAD_STATE.Convert
                        } else {
                            if (decorator.is_a([DECORATOR_COMPONENT.UploadProgressStart, DECORATOR_COMPONENT.UploadProgressEnd])) {
                                uploadCancelState = UPLOAD_STATE.Upload
                            }
                        }
                    }
                }
                decorator.strip(DECORATOR_COMPONENT.ActiveLink);
                stateManager.state(MANAGER_STATE.ActiveMessage);
                unloadPreview();
                if (enableSlideshare) {
                    stateManager.state(MANAGER_STATE.Inactive);
                    stateManager.state(MANAGER_STATE.UploadCancel);
                    if (decorator.is_a(DECORATOR_COMPONENT.UploadActive)) {
                        WebTracking.trackUserAction(config.trackingPrefix + "upload_cancel_" + uploadCancelState)
                    }
                }
                WebTracking.trackUserAction(config.trackingPrefix + "prvw_unld")
            }
            if (YDom.hasClass(target, "share-cancel")) {
                YEvent.preventDefault(event);
                stateManager.state(MANAGER_STATE.Inactive);
                if (checkTextAreaCountDown) {
                    checkTextAreaCountDown.parentNode.removeChild(checkTextAreaCountDown)
                }
                WebTracking.trackUserAction(config.trackingPrefix + "cancel")
            }
            if (singleInputShareModuleEnabled) {
                if (YDom.hasClass(target, SHARE_VIEW_SUMMARY)) {
                    shareViewSummary = YDom.get(SHARE_VIEW_SUMMARY);
                    if (shareEditSummary) {
                        shareEditSummary.value = shareViewSummary.innerHTML === defaultSummaryText ? "" : LI.htmlUnencode(shareViewSummary.innerHTML);
                        shareViewSummary.parentNode.replaceChild(shareEditSummary, shareViewSummary);
                        shareEditSummary.focus()
                    }
                    if (YUI_UA.ie) {
                        YEvent.stopPropagation(event)
                    }
                } else {
                    if (YDom.hasClass(target, SHARE_VIEW_TITLE)) {
                        shareViewTitle = YDom.get(SHARE_VIEW_TITLE);
                        shareEditTitle.value = shareViewTitle.innerHTML === defaultTitleText ? "" : LI.htmlUnencode(shareViewTitle.innerHTML);
                        shareViewTitle.parentNode.replaceChild(shareEditTitle, shareViewTitle);
                        shareEditTitle.focus();
                        if (YUI_UA.ie) {
                            YEvent.stopPropagation(event)
                        }
                    } else {
                        if (YDom.hasClass(target, CANCEL_FILE_UPLOAD_CLASS)) {
                            cancelFileUpload(event)
                        }
                    }
                }
            }
        });
        YEvent.on(submit, CLICK, function(event) {
            YEvent.preventDefault(event);
            stateManager.state(MANAGER_STATE.BeforeShareSubmit);
            submitPost();
            WebTracking.trackUserAction(config.trackingPrefix + "submit")
        });
        if (enableSlideshare) {
            YEvent.on(window, "beforeunload", Slideshare.beforeUnloadState)
        }
        function wasFileUploaded() {
            return decorator.is_a([DECORATOR_COMPONENT.UploadPreview])
        }
        urlInputHelper.clear();
        postMap.ajax.value = "true";
        LI.define("DocSharing");
        LI.DocSharing.setTwitterTethered = function(twitterTethered) {
            config.twitterTethered = twitterTethered
        };
        return {
            decorator: decorator,
            stateManager: stateManager
        }
    };
    YAHOO.register("LI.ShareModule", LI.ShareModule, {})
}());
LI.define("Genie");
LI.Genie = function(c, p) {
    var q = "oid_cb_" + YDom.generateId().replace(/[^a-z]/i, "_"), r = q + "_allow", s = q + "_deny", n = q + "_error", l = q + "_close", d = q + "_scope", i = {}, k = c.tagName.toLowerCase(), a = this, m = false, b = null, h, e, j, f;
    p = p || {};
    p = {
        url: p.url || null,
        handleClickManual: p.handleClickManual || null,
        onAllow: p.onAllow || function() {},
        onDeny: p.onDeny || function() {},
        onError: p.onError || function() {},
        onClose: p.onClose || function() {},
        scope: p.scope || window,
        popupWidth: p.popupWidth || 790,
        popupHeight: p.popupHeight || 580,
        obj: p.obj || {}
    };
    if (!p.url) {
        if (k == "a") {
            p.url = c.href
        } else {
            throw new Error("No URL was supplied and no URL was found in the control.")
        }
    }
    i = YAHOO.lang.JSON.stringify({
        onAllow: r,
        onDeny: s,
        onError: n,
        onClose: l,
        scope: d
    });
    i = escape(i);
    p.url = p.url + "&cb=" + i;
    f = function(u) {
        var t = u;
        if (typeof(u) == "string") {
            t = LI.Controls.resolveName(u)
        }
        return t
    };
    p.onAllow = f(p.onAllow);
    if (!p.onAllow) {
        throw new Error("onAllow could not be found or resolved")
    }
    p.onDeny = f(p.onDeny);
    if (!p.onDeny) {
        throw new Error("onDeny could not be found or resolved")
    }
    p.onError = f(p.onError);
    if (!p.onError) {
        throw new Error("onError could not be found or resolved")
    }
    p.onClose = f(p.onClose);
    if (!p.onClose) {
        throw new Error("onClose could not be found or resolved")
    }
    if (p.scope != "window" && p.scope != window) {
        p.scope = f(p.scope);
        if (!p.scope) {
            throw new Error("scope could not be found or resolved")
        }
    }
    function o() {
        window[r] = null;
        window[s] = null;
        window[n] = null;
        window[l] = null;
        window[d] = null;
        m = false;
        clearInterval(b);
        b = null
    }
    j = function() {
        window[r] = function(t) {
            o();
            p.onAllow.call(p.scope, t, p.obj)
        };
        window[s] = function(t) {
            o();
            p.onDeny.call(p.scope, t, p.obj)
        };
        window[n] = function(t) {
            o();
            p.onError.call(p.scope, t, p.obj)
        };
        window[l] = function(t) {
            o();
            p.onClose.call(p.scope, t, p.obj)
        };
        window[d] = a
    };
    function g(t) {
        YEvent.preventDefault(t);
        j();
        h = window.open(p.url, "genie_popup", "width=" + p.popupWidth + ",height=" + p.popupHeight);
        m = true;
        b = setInterval(function() {
            if (m && h.closed) {
                o();
                p.onClose.call(p.scope, {}, p.obj)
            }
        }, 300)
    }
    if (!p.handleClickManual) {
        YEvent.on(c, "click", g)
    }
    return {
        handleClick: g
    }
};
LI.define("ExternalShareButton");
LI.ExternalShareButton = LI.BaseControl.extend(function(d) {
    var h = "selected", f = "callout-content", i = "open", b = "hidden", e = "checked", g = "click", c = "ExternalShareButton:providerEnabled", a = "ExternalShareButton:providerDisabled";
    return {
        beforeDecoration: function() {
            var j = this._config;
            this._el = this._$el.get(0), this._$button = $("#" + j.buttonToggleId), this._$toggle = $("#" + j.providerToggleId), this._$label = this._$el.find('label[for="' + j.providerToggleId + '"]'), this._$toolTip = $("#" + j.toolTipId), this._$toolTipContent = this._$toolTip.find("." + f), this._$dropArrow = $("#" + j.dropArrowId), this._$menu = $("#" + j.menuId), this._$tetherAccountIdInput = $("#" + j.tetherAccountIdInputId);
            this._userName = j.userName;
            if (this._$menu && this._userName) {
                this.populateMenu()
            }
            this.genie = new LI.Genie(this._el, {
                url: this._config.bindUrl,
                handleClickManual: true,
                onAllow: function(k, l) {
                    k.win.close();
                    if (k && k.hasOwnProperty("results")) {
                        this.bind(this.tidyBindResults(k.results))
                    }
                },
                onDeny: function(k, l) {
                    k.win.close()
                },
                onError: function(k, l) {
                    k.win.close()
                },
                onClose: function(k, l) {},
                scope: this
            })
        },
        attachEventListeners: function() {
            var j = _.bind(this.onExternalButtonClick, this);
            if (this._$button.length) {
                this._$button.on(g, j)
            }
            if (this._$toggle.length) {
                this._$toggle.on(g, j)
            }
            if (this._$label.length) {
                this._$label.on(g, j)
            }
            if (this._$dropArrow.length) {
                this._$dropArrow.on(g, _.bind(function(k) {
                    k.stopPropagation();
                    $(document).trigger(g, [this]);
                    LI.toggleClass(this._$menu.get(0), i)
                }, this));
                $(document).on(g, _.bind(function(l, k) {
                    if (!k || k._$dropArrow !== this._$dropArrow) {
                        this._$menu.removeClass(i)
                    }
                }, this))
            }
        },
        onExternalButtonClick: function(j) {
            if (!this._userName) {
                this.genie.handleClick(this._el)
            } else {
                this._$toggle.prop(e, !this._$toggle.prop(e));
                this.updateUI()
            }
            j.preventDefault()
        },
        tidyBindResults: function(j) {
            var k = {};
            if (j) {
                switch (j.provider) {
                case"TWITTER":
                    k.userName = j.tetheredAccountHandle;
                    k.tetherAccountId = j.tetheredAccountId;
                    break;
                case"TENCENT":
                case"WEIBO":
                    k.userName = j.identificationData.PROVIDER_USERNAME;
                    k.tetherAccountId = j.tetheredAccountId;
                    break
                }
            }
            return k
        },
        populateMenu: function() {
            var j = this._$menu.find("ul");
            j.prepend("<li><a class='selected' href='#'>" + this._userName + "</a></li>")
        },
        updateUI: function() {
            if (this._$button.length) {
                this._$button.toggleClass(h, this._$toggle.prop(e))
            }
            if (LI.Events && typeof LI.Events.trigger === "function") {
                if (this._$toggle.prop(e)) {
                    LI.Events.trigger(c, [this])
                } else {
                    LI.Events.trigger(a, [this])
                }
            }
            this.setToolTips();
            if (this._$dropArrow.length) {
                this._userName ? this._$dropArrow.removeClass(b) : this._$dropArrow.addClass(b)
            }
        },
        setToolTips: function() {
            var j = this._config, k = "";
            if (this._$toolTip.length) {
                if (this._userName) {
                    k = (this._$toggle.prop(e) ? j.boundToolTipText : j.boundOffToolTipText).replace("@", "@" + this._userName)
                } else {
                    k = j.toolTipText
                }
                this._$toolTipContent.html(k)
            }
        },
        bind: function(j) {
            if (j.hasOwnProperty("userName")) {
                this._userName = j.userName;
                this._$tetherAccountIdInput.val(j.tetherAccountId);
                this._$toggle.prop(e, true);
                this.populateMenu();
                this.updateUI()
            }
        }
    }
});
LI.define("SlideshareUploader");
LI.SlideshareUploader = function(aa, K) {
    var ae = {
        usePostMessage: true,
        transportName: "slideShareIframeTransport",
        paths: {},
        fileInputId: "",
        domain: document.domain.split(".").slice( - 3).join("."),
        slideshareDomain: "",
        enableUnload: true,
        enableImageUpload: true,
        checkSize: true,
        maxFileSize: 104857600,
        enableTranscriptAsDescription: true,
        enableHealthCheck: false,
        trackingPrefix: "ssu-",
        promoStatus: 0,
        bypassFrameCheck: false
    }, r = {
        PRESENTATION: "presentation",
        DOCUMENT: "document",
        IMAGE: "image",
        UNKNOWN: "unknown"
    }, u = e(), D = {
        QUEUED: 0,
        CONVERTING: 1,
        DONE: 2,
        FAILED: 3
    }, F = {
        STARTING: "starting",
        UPLOADING: "uploading",
        DONE: "done",
        ERROR: "error"
    }, w = {
        CONVERT: "convert",
        TYPE: "type",
        SIZE: "size",
        PROGRESS: "progress",
        HALT: "halt",
        HEALTH: "health",
        IFRAME: "iframe"
    }, b = {
        "upload_active": "act",
        "upload_error": "err",
        "upload_error_convert": "err-cnvr",
        "upload_error_halt": "err-halt",
        "upload_error_health": "err-hlth",
        "upload_error_iframe": "err-ifrm",
        "upload_error_progress": "err-pgrs",
        "upload_error_size": "err-fsiz",
        "upload_error_type": "err-ftyp",
        "upload_cancel": "cncl",
        "upload_cancel_convert": "cncl-cnvr",
        "upload_cancel_error": "cncl-err",
        "upload_cancel_preview": "cncl-prvw",
        "upload_cancel_upload": "cncl-upld",
        "upload_progress_start": "ustart",
        "upload_progress_end": "uend",
        "upload_convert_start": "cstart",
        "upload_convert_end": "cend",
        "upload_icon_click": "clck",
        "upload_file_upload": "sbmt",
        "upload_preview": "prvw",
        "upload_complete": "fcmpt",
        "upload_image_complete": "icmpt"
    }, G = {
        SUCCEEDED: "succeed",
        CANCELLED: "cancelled",
        FAILED: "failed",
        UPLOAD: "upload",
        QUEUE: "queue",
        CONVERT: "convert"
    }, c = {
        UploadActive: "upload_active",
        UploadError: "upload_error",
        UploadCancel: "upload_cancel",
        UploadProgressStart: "upload_progress_start",
        UploadProgressStatus: "upload_progress_status",
        UploadProgressEnd: "upload_progress_end",
        UploadFileComplete: "upload_complete",
        UploadImageComplete: "upload_image_complete",
        UploadQueueStart: "upload_queue_start",
        UploadQueueStatus: "upload_queue_status",
        UploadQueueEnd: "upload_queue_end",
        UploadConvertStart: "upload_convert_start",
        UploadConvertStatus: "upload_convert_status",
        UploadConvertEnd: "upload_convert_end",
        UploadPreview: "upload_preview",
        UploadConvertThresholdOne: "upload_convert_threshold_one",
        UploadConvertThresholdTwo: "upload_convert_threshold_two",
        FileFocus: "file_focus",
        FileBlur: "file_blur",
        InteractiveLocked: "interactive_locked",
        InteractiveUnlocked: "interactive_unlocked"
    }, U = false, af, T = null, E = YAHOO.lang, J = window.YUtil, H = H, x = new RegExp("^(https?:)?\\/\\/" + (window.location.host.replace(/\./g, "[.]")) + "\\/?", "i"), l = LI.i18n.get("slideshare-uploader-percentage"), V, j, N, S, ac, d = this;
    function e() {
        var ai = {
            jpeg: r.IMAGE,
            jpg: r.IMAGE,
            gif: r.IMAGE,
            png: r.IMAGE,
            pdf: r.DOCUMENT,
            doc: r.DOCUMENT,
            docx: r.DOCUMENT,
            rtf: r.DOCUMENT,
            odt: r.DOCUMENT,
            ppt: r.PRESENTATION,
            pps: r.PRESENTATION,
            pptx: r.PRESENTATION,
            ppsx: r.PRESENTATION,
            pot: r.PRESENTATION,
            potx: r.PRESENTATION,
            odp: r.PRESENTATION
        }, ah = {}, aj;
        if (K.acceptedExtensions) {
            aj = _.difference(_.keys(ai), [].concat(K.acceptedExtensions));
            ah = _.omit(ai, aj)
        }
        if (K.acceptedTypes) {
            aj = [].concat(K.acceptedTypes);
            _.each(ai, function() {
                if (_.contains(aj, arguments[0])) {
                    ah[arguments[1]] = arguments[0]
                }
            })
        }
        return _.isEmpty(ah) ? ai : ah
    }
    var Q = Date.now || function() {
        return + new Date()
    };
    function k(ah) {
        E.augmentObject(this, ah, true);
        this.progressId = this.progressPrefix + (Q()) + Math.random();
        this.timer = new p();
        this.base = ae.slideshareDomain
    }
    k.prototype = {
        convert: "/nhome/slideshare/convert-upload",
        status: "/nhome/slideshare/get-convert-status",
        slideshow: "/nhome/slideshare/get-slideshow",
        imageStore: "http://image-store.slidesharecdn.com/",
        progressPrefix: "_",
        uploadCallback: H,
        update: function(ah) {
            E.augmentObject(this, ah, true);
            return this
        },
        updateTimer: function() {
            var ah = this.timer;
            if (ah) {
                return ah.update.apply(ah, arguments)
            }
            return this
        },
        getProgressUrl: function() {
            return this.base + "/progress?X-Progress-ID=" + this.progressId + "&jsonp_callback={callback}"
        },
        getHealthCheckUrl: function() {
            var ah = this.base + "/health_check?X-Progress-ID=" + this.progressId + "&jsonp_callback=void&iframe_jsonp=true";
            if (ae.usePostMessage) {
                ah += "&window_post=true&post_window=parent"
            } else {
                ah += "&set_document_domain=true"
            }
            return ah
        },
        getUploadUrl: function() {
            var ah = "SlideshareUploader" + this.progressPrefix + (Q()), ai;
            if (!(/^\w+$/g.test(ah))) {
                throw new Error()
            }
            LI[ah] = (function(aj, ak) {
                return function() {
                    delete LI[ah];
                    aj.apply(ak, arguments)
                }
            }(this.uploadCallback, this));
            ai = this.base + "/upload?X-Progress-ID=" + this.progressId + "&iframe_jsonp=true";
            if (ae.usePostMessage) {
                ai += "&window_post=true&post_window=parent&jsonp_callback=" + ah
            } else {
                ai += "&set_document_domain=true&jsonp_callback=parent.LI." + ah
            }
            return ai
        },
        getConvertUrl: function() {
            return this.convert.replace("*", this.fileId)
        },
        getConvertStatusUrl: function() {
            return this.status.replace("*", this.slideshowId)
        },
        getPreviewUrl: function() {
            return this.slideshow.replace("*", this.slideshowId)
        },
        getImageUploadUrl: function() {
            var ah = this.fileId.split(".");
            return this.imageStore + ah[0] + "-large." + ah[1]
        }
    };
    function p() {
        var an = {
            start: {},
            end: {}
        }, aj = ae.paths && ae.paths.monitor, ah = "&fileAction={action}&actionResult={result}&time={time}&fileType={type}", ai = this, am = "", al = "unknown";
        function ak(ap) {
            function ao(aq) {
                return function(au) {
                    var at = typeof au !== "string", ar = [].slice.call(arguments, at ? 0 : 1);
                    return ai[aq].apply(ai, [at ? ap: au].concat(ar))
                }
            }
            return {
                reset: ao("reset"),
                update: ao("update"),
                start: ao("start"),
                end: ao("end"),
                send: ao("send")
            }
        }
        this.reset = function() {
            an = {
                start: {},
                end: {}
            };
            delete this.action;
            delete this.result;
            delete this.type;
            return this
        };
        this.update = function(ap, ao) {
            var aq = typeof ap === "string";
            E.augmentObject(this, aq ? ao : ap, true);
            return aq ? ak(ap) : this
        };
        this.start = function(ao) {
            if (ao !== am) {
                this.update({
                    action: ao
                })
            }
            ao = ao || al;
            am = ao;
            an.start[ao] = Q();
            return ak(ao)
        };
        this.end = function(ao) {
            ao = ao || al;
            an.end[ao] = Q();
            return ak(ao)
        };
        this.send = function(ap, ao) {
            var au = "", at = typeof ap === "string", aq = (at ? ap : (ap && ap.state)) || al, ar = (an.end[aq] || Q()) - an.start[aq];
            if (at) {
                ap = ao || {}
            }
            if (!aj || isNaN(ar)) {
                return this
            }
            au = E.substitute(ah, {
                action: aq || ap.action || this.action || al,
                result: ap.result || this.result || al,
                time: ar,
                type: ap.type || this.type || al
            });
            J.Connect.asyncRequest("GET", aj + au, {});
            return ak(aq)
        }
    }
    function s(ah) {
        var ai = b[ah];
        if (ai && window.WebTracking) {
            WebTracking.trackUserAction(ae.trackingPrefix + ai)
        }
    }
    function y(ah) {
        var ai;
        if (!ah || ah.source !== j.contentWindow || ah.type !== "message" || (ah.origin !== "https:" + ae.slideshareDomain && ah.origin !== "http:" + ae.slideshareDomain)) {
            return
        }
        ai = YAHOO.lang.JSON.parse(ah.data);
        if (ai.type !== "slidesharestatus") {
            return
        }
        LI[ai.method](ai.payload)
    }
    function Y() {
        ae = E.merge(ae, K);
        if (!aa.id) {
            YDom.generateId(aa, "slideshare-upload-form-")
        }
        N = aa.id + Q();
        if (ae.usePostMessage && window.postMessage) {
            YEvent.on(window, "message", y);
            ae.domain = document.location.hostname
        } else {
            if (!!ae.domain && ae.domain !== "control") {
                ae.usePostMessage = false;
                if (YAHOO.env.ua.ie && YAHOO.env.ua.ie < 8 && document.domain === ae.domain) {
                    ae.bypassFrameCheck = true
                } else {
                    document.domain = ae.domain
                }
            }
        }
        if (!K.slideshareDomain) {
            ae.slideshareDomain = "//slideshare." + ae.domain
        }
        z();
        YDom.setAttribute(aa, "target", ae.transportName);
        j = R(function() {
            YEvent.on(j, "load", W);
            ag()
        });
        aa.appendChild(j);
        O();
        YEvent.on(aa, "submit", C);
        YEvent.on(aa, "reset", X);
        YEvent.on(ae.fileInputId, "change", f);
        YEvent.on(ae.fileInputId, "click", h);
        YEvent.on(ae.fileInputId, "focus", n);
        YEvent.on(ae.fileInputId, "blur", ad);
        af = new L();
        d.stateManager = af;
        af.changed.subscribe(B);
        ag()
    }
    function z() {
        S = new k({
            progressPrefix: ae.progressPrefix
        }).update(ae.paths)
    }
    function R(an) {
        var ah, am = ae.enableHealthCheck, al, ak = ae.transportName;
        try {
            ah = document.createElement('<iframe name="' + LI.htmlEncode(ak) + '"">')
        } catch (aj) {
            ah = document.createElement("iframe");
            ah.name = ak
        }
        ah.className = "slideshare-upload-iframe";
        ah.style.display = "none";
        ah.frameborder = "none";
        ah.height = 0;
        ah.width = 0;
        YEvent.on(ah, "load", function ai() {
            var ao=!am || i(ah);
            YEvent.removeListener(ah, "load", ai);
            if (ao) {
                an.apply(this, arguments)
            }
        });
        if (am && S) {
            al = S.getHealthCheckUrl()
        } else {
            if (ae.usePostMessage) {
                al = "about:blank"
            } else {
                al = "javascript:false;"
            }
        }
        ah.src = al;
        return ah
    }
    function a(ai, am, ah) {
        var al = ai.indexOf("//") === 0 || ai.indexOf("http") === 0, ak = ai.match(x) !== null;
        function aj(ao) {
            var an = this;
            return function(aq) {
                var ap = {};
                if (aq && aq.responseText) {
                    ap = LI.parseJSON(LI.htmlUnencode(aq.responseText))
                }
                ao.call(an, ap, aq)
            }
        }
        if (al&&!ak) {
            (new LI.JSONPRequest(ai, {
                on: {
                    success: am,
                    failure: ah,
                    timeout: ah
                }
            })).send()
        } else {
            LI.asyncRequest("GET", ai, {
                success: aj(am),
                failure: aj(ah),
                custom: {
                    exception: aj(ah),
                    error: aj(ah)
                }
            })
        }
    }
    function O() {
        aa.reset()
    }
    function X() {
        z();
        if (ac) {
            ac.kill()
        }
        af.state(c.InteractiveUnlocked)
    }
    function M(ah) {
        var am = ah.success || function() {}, al = ah.failure || function() {}, ar = 0, an = ah.failureLimit || 3, ai = ah.name, aj = ah.url, ak = false, aq;
        function ap(at) {
            if (typeof at === "undefined" || at === ai) {
                ak = true;
                clearTimeout(aq)
            }
        }(function ao() {
            function au() {
                if (!ak) {
                    aq = setTimeout(ao, 1000)
                }
            }
            function av(aw) {
                var ax;
                ax = am(aw);
                ar = 0;
                if (ax) {
                    au()
                }
            }
            function at(aw) {
                var ax = true;
                if (++ar >= an) {
                    ax = al(aw)
                }
                if (ax) {
                    au()
                }
            }
            a(aj, av, at)
        }());
        return {
            kill: ap
        }
    }
    function t() {
        var ak, ai = 0, aj = 0;
        af.state(c.UploadProgressStatus, {
            percentage: E.substitute(l, {
                0: 0
            })
        });
        function al(ao) {
            var aq = true, ap = ao.state, ar = ao.received || 0, an = ao.size || 0, am = Math.max(0, Math.round(ar / an * 100)) || 0;
            if (ar && ar <= ai) {
                aj += 1;
                if (aj >= 30) {
                    return ah({
                        errorType: w.HALT
                    })
                }
            } else {
                aj = 0
            }
            ai = ar;
            if (ap === F.STARTING || ap === F.UPLOADING) {
                af.state(c.UploadProgressStatus, {
                    percentage: E.substitute(l, {
                        0: am
                    })
                });
                if (am === 100) {
                    aq = false;
                    af.state(c.UploadProgressEnd, ao)
                }
            } else {
                if (ap === F.DONE) {
                    aq = false;
                    af.state(c.UploadProgressStatus, {
                        percentage: E.substitute(l, {
                            0: 100
                        })
                    });
                    af.state(c.UploadProgressEnd, ao)
                } else {
                    return ah(ao)
                }
            }
            return aq
        }
        function ah(an) {
            an = an || {};
            var am = an.status, ao = am === 413 ? w.SIZE: (am === 415 ? w.TYPE : (an.errorType || w.PROGRESS));
            af.state(c.UploadError, {
                type: ao
            });
            return false
        }
        ak = M({
            name: c.UploadProgressEnd,
            url: S.getProgressUrl(),
            success: al,
            failure: ah
        });
        return ak
    }
    function P() {
        var ai;
        function aj(al) {
            var an = al.state, am = af.state(), ak = [c.UploadFileComplete, c.UploadQueueStatus, c.UploadQueueStart], ao = true;
            if (an === D.QUEUED) {
                af.state(c.UploadQueueStatus, al)
            } else {
                if (an === D.CONVERTING && LI.indexOf(ak, am)>-1) {
                    af.state(c.UploadQueueEnd, al);
                    af.state(c.UploadConvertStart, al)
                } else {
                    if (an === D.CONVERTING) {
                        af.state(c.UploadConvertStatus, al)
                    } else {
                        if (an === D.DONE) {
                            ao = false;
                            af.state(c.UploadConvertEnd, al)
                        } else {
                            if (an === D.FAILED) {
                                return ah(al)
                            }
                        }
                    }
                }
            }
            return ao
        }
        function ah() {
            af.state(c.UploadError, {
                type: w.CONVERT
            });
            return false
        }
        ai = M({
            name: c.UploadConvertEnd,
            url: S.getConvertStatusUrl(),
            success: aj,
            failure: ah
        });
        return ai
    }
    function ab() {
        function ai(ak) {
            var aj = ak.content && ak.content.Slideshow, al = ak.transcript && ak.transcript.transcript_body, an = ae.enableTranscriptAsDescription && al, am = window.location.protocol;
            if (aj) {
                af.state(c.UploadPreview, {
                    title: aj.Title,
                    summary: an && al || aj.Description,
                    image: (aj.ThumbnailURL.indexOf("http") === 0 ? "" : am) + aj.ThumbnailURL,
                    extension: aj.Format,
                    type: A(aj.Format),
                    id: aj.ID,
                    url: "http://www.slideshare.net/slideshow/embed_code/" + aj.ID
                })
            } else {
                ah(ak)
            }
        }
        function ah(aj) {
            af.state(c.UploadError, {
                type: w.CONVERT
            })
        }
        a(S.getPreviewUrl(), ai, ah)
    }
    function Z(ah) {
        var aj = ah.split("."), ai = aj[aj.length - 1];
        return ai.toLowerCase()
    }
    function g(ah) {
        var aj = Z(ah), ai = S.type || u[aj] || r.UNKNOWN;
        S.update({
            type: ai,
            ext: aj
        }).updateTimer({
            type: aj
        });
        return (ae.enableImageUpload ||!ae.enableImageUpload && ai !== r.IMAGE) && u.hasOwnProperty(aj)
    }
    function o(ah) {
        return (!ae.checkSize) || (ah === undefined) || (ah && ah <= ae.maxFileSize)
    }
    function A(ah) {
        var aj = Z(ah), ai = u[aj] || r.UNKNOWN;
        return LI.i18n.get("slideshare-uploader-" + ai) || ""
    }
    function I(ai) {
        var ak = S && S.getHealthCheckUrl(), am = ak && LI.domify('<iframe src="' + ak + '" height="0" width="0" style="display: none"></iframe>'), ao = ai || function() {}, an;
        function aj(ap) {
            if (am && am.parentNode) {
                am.parentNode.removeChild(am);
                am = null
            }
            clearTimeout(an);
            ao(ap)
        }
        function ah() {
            var ap = am && (!ae.enableHealthCheck || i(am));
            YEvent.removeListener(am, "load", ah);
            aj(ap)
        }
        function al() {
            aj(false)
        }
        if (am) {
            YEvent.on(am, "load", ah);
            document.body.appendChild(am);
            an = setTimeout(al, 10000)
        } else {
            al()
        }
    }
    function f() {
        var am = YDom.get(ae.fileInputId), ai = am.files ? am.files[0].size: undefined, an = am.value.replace(/\\/g, "/").split(/\//g), ak = an.pop(), al = u[Z(ak)] || r.UNKNOWN, ah = al === r.IMAGE;
        af.state(c.UploadActive, {
            isImageUpload: ah,
            type: al
        });
        if (!o(ai)) {
            af.state(c.UploadError, {
                type: w.SIZE
            });
            return
        }
        if (g(ak)) {
            I(function aj(ao) {
                if (ao) {
                    YDom.setAttribute(aa, "action", S.getUploadUrl());
                    aa.submit();
                    af.state(c.UploadPreview, {
                        track: ah,
                        title: ak,
                        type: A(ak)
                    })
                } else {
                    af.state(c.UploadError, {
                        type: w.HEALTH
                    })
                }
            })
        } else {
            af.state(c.UploadError, {
                type: w.TYPE
            })
        }
    }
    function h() {
        s("upload_icon_click");
        q(true, true)
    }
    function n() {
        af.state(c.FileFocus)
    }
    function ad() {
        af.state(c.FileBlur)
    }
    function i(aj) {
        var ak = aj || j, ah = true, al;
        if (ae.usePostMessage || ae.bypassFrameCheck) {
            return true
        }
        try {
            al = ak.contentDocument ? ak.contentDocument : (ak.contentWindow.document || ak.document);
            if (!al.getElementsByTagName("script").length) {
                ah = false
            }
        } catch (ai) {
            ah = false
        }
        return ah
    }
    function W() {
        setTimeout(function() {
            var ah = i(j);
            if (!ah) {
                af.state(c.UploadError, {
                    type: w.IFRAME
                })
            }
        }, 100)
    }
    function H(ah) {
        function aj(ak) {
            if (ak && ak.status !== "fail") {
                af.state(c.UploadFileComplete, ak)
            } else {
                ai(ak)
            }
        }
        function ai(ak) {
            af.state(c.UploadError, {
                type: w.CONVERT
            })
        }
        S.update({
            fileId: ah.file_key
        });
        af.state(c.UploadProgressEnd, ah);
        if (S.type === r.IMAGE) {
            af.state(c.UploadImageComplete, {
                image: S.getImageUploadUrl(),
                extension: S.ext,
                type: A(S.ext),
                id: S.fileId,
                url: S.getImageUploadUrl()
            })
        } else {
            a(S.getConvertUrl(), aj, ai)
        }
    }
    function C() {
        s("upload_file_upload")
    }
    function B(al, ak) {
        var aj = [].concat(ak), an = aj.shift(), ah = aj.shift(), am = aj[0] || {}, ai = am.type || "", ao = S.timer;
        if (am.track && am.track !== false) {
            s(an)
        }
        switch (an) {
        case c.UploadActive:
            ac = t();
            ao.reset();
            af.state(c.InteractiveLocked);
            af.state(c.UploadProgressStart, []);
            break;
        case c.UploadProgressStart:
            ao.start(G.UPLOAD);
            break;
        case c.UploadProgressEnd:
            v(an);
            m();
            break;
        case c.UploadImageComplete:
            ao.update({
                result: G.SUCCEEDED
            }).end(G.UPLOAD).send().reset();
            break;
        case c.UploadFileComplete:
            S.update({
                slideshowId: am.slideshow_id
            });
            af.state(c.UploadQueueStart, []);
            ao.update({
                result: G.SUCCEEDED
            }).end(G.UPLOAD).send();
            ac = P();
            break;
        case c.UploadQueueStart:
            ao.start(G.QUEUE);
            break;
        case c.UploadQueueEnd:
            ao.update({
                result: G.SUCCEEDED
            }).end(G.QUEUE).send();
            break;
        case c.UploadConvertStart:
            ao.start(G.CONVERT);
            break;
        case c.UploadConvertEnd:
            v(an);
            ab();
            ao.update({
                result: G.SUCCEEDED
            }).end(G.CONVERT).send().reset();
            break;
        case c.UploadError:
            v();
            O();
            if (ai === w.TYPE || ai === w.SIZE) {
                ao.reset()
            }
            ao.send(ao.action, {
                result: G.FAILED
            });
            if (ai) {
                s("upload_error_" + w[ai.toUpperCase()])
            }
            break;
        default:
            break
        }
    }
    function v(ah) {
        if (ac) {
            ac.kill(ah)
        }
    }
    function m() {
        var aj = ae.convertTimeThresholds, ai = function(al, ak) {
            if (typeof al === "string" && (al = al.match(/\d+/))) {
                al = parseInt(al[0], 10)
            }
            if (ak && al&&!isNaN(al)) {
                al = al * 1000;
                window.setTimeout(function() {
                    af.state(ak, [])
                }, al)
            }
        };
        if (aj) {
            for (var ah in aj) {
                if (aj.hasOwnProperty(ah)) {
                    ai(aj[ah], c[ah])
                }
            }
        }
    }
    function q(aj, ai) {
        var al = YDom.get("slideshare-hopscotch-placeholder"), ah = window.hopscotch, ak = ah && ah.getCalloutManager && ah.getCalloutManager();
        if (ak) {
            if (aj) {
                ak.removeCallout(N)
            }
            if (ae.promoStatus) {
                if (!aj) {
                    ae.promoStatus--;
                    ak.createCallout({
                        id: N,
                        title: LI.i18n.get("slideshare-uploader-promo-title"),
                        content: al.innerHTML || "",
                        target: aa.id,
                        orientation: "bottom",
                        showNavButtons: false,
                        showNumber: false,
                        width: 315,
                        xOffset: - 280,
                        arrowOffset: 266,
                        bubblePadding: 0,
                        ctaLabel: LI.i18n.get("slideshare-uploader-promo-cta"),
                        showCTAButton: (YAHOO.env.ua.ie ? false : true),
                        onCTA: function() {
                            h();
                            Y$(".file-input", aa, true).click()
                        }
                    });
                    YEvent.on(Y$(".hopscotch-bubble-close", ak.getCallout(N).element, true), "click", function() {
                        q(true, true)
                    })
                }
                if (window.oUISettings) {
                    window.oUISettings.saveSettings("slideshareUploadStatus", ai ? "0" : "" + ae.promoStatus)
                }
            }
        }
    }
    function ag() {
        if (U) {
            YDom.addClass(aa, "is-ready");
            q()
        }
        U = true
    }
    function L() {
        var ah;
        this.changed = new YAHOO.util.CustomEvent("changed");
        this.state = function(aj, ai) {
            if (arguments.length >= 1) {
                this.changed.fire(aj, ah, ai || []);
                ah = aj
            } else {
                return ah
            }
        };
        this.STATE = c
    }
    this.attachStateMonitor = function(ah) {
        af.changed.subscribe(ah)
    };
    this.cancelState = function() {
        var ah = S.timer;
        v();
        ah.send(ah.action, {
            result: G.CANCELLED
        })
    };
    this._el = aa;
    this.stateManager = af;
    this.STATE = c;
    this.reset = O;
    Y()
};
LI.define("Profile.ComposeDialog");
LI.Profile.ComposeDialog = function(f, c) {
    c = $.extend({
        inboxSentLink: "",
        inboxSentLinkTitle: "",
        dialogConfig: {}
    }, c);
    var e = $(f), d = null;
    function a() {
        d = LI.Dialog();
        d.contentChangeEvent.subscribe(function(k, j) {
            var i, l, h;
            if (j[0] === c.dialogConfig.name) {
                i = $("div.send-message-dialog");
                if (i.length) {
                    l = LI.Controls.getControl(i[0], "ComposeDialog");
                    h = l.onSendSuccess;
                    l.onSendSuccess = function(p) {
                        if (p && p.responseXML) {
                            h.call(l, p);
                            var m, n = p.responseXML.getElementsByTagName("responseMsg")[0].firstChild.nodeValue;
                            if (n) {
                                m = p.responseXML.getElementsByTagName("responseInfo")[0] && p.responseXML.getElementsByTagName("responseInfo")[0].firstChild.nodeValue;
                                LI.injectAlert(n, (m === "SUCCESS") ? "success" : "error", null, false, true);
                                b()
                            }
                        } else {
                            l.onSendFailure(p)
                        }
                    }
                }
            }
        });
        d.open(c.dialogConfig)
    }
    function b() {
        var h = $("#global-error .success p"), i;
        if (h.length && c.inboxSentLink && c.inboxSentLinkTitle) {
            i = $("<a/>").attr("href", c.inboxSentLink).attr("class", "external").html(c.inboxSentLinkTitle);
            h.append(i)
        }
    }
    function g() {
        e.on("click", function(h) {
            h.preventDefault();
            a()
        })
    }
    g();
    return {
        showDialog: a
    }
};
