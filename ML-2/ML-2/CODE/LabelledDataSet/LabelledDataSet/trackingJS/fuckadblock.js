(function(b) {
    if (b.fuckAdBlock !== undefined) {
        return 
    }
    var a = function(e) {
        if (e !== undefined) {
            this.setOption(e)
        }
        var c = this;
        var d = function() {
            setTimeout(function() {
                if (c._options.checkOnLoad === true) {
                    if (c._var.bait === null) {
                        c._creatBait()
                    }
                    setTimeout(function() {
                        c.check()
                    }, 1)
                }
            }, 1)
        };
        if (b.addEventListener) {
            b.addEventListener("load", d, false)
        } else {
            b.attachEvent("onload", d)
        }
    };
    a.prototype._options = {
        checkOnLoad: true,
        resetOnEnd: true,
        loopCheckTime: 50,
        loopMaxNumber: 5,
        baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
        baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
    };
    a.prototype._var = {
        version: "3.0.1",
        bait: null,
        checking: false,
        loop: null,
        loopNumber: 0,
        event: {
            detected: [],
            notDetected: []
        }
    };
    a.prototype._bait = null;
    a.prototype.setOption = function(c, e) {
        if (e !== undefined) {
            var d = c;
            c = {};
            c[d] = e
        }
        for (option in c) {
            this._options[option] = c[option]
        }
        return this
    };
    a.prototype._creatBait = function() {
        var c = document.createElement("div");
        c.setAttribute("class", this._options.baitClass);
        c.setAttribute("style", this._options.baitStyle);
        this._var.bait = b.document.body.appendChild(c);
        this._var.bait.offsetParent;
        this._var.bait.offsetHeight;
        this._var.bait.offsetLeft;
        this._var.bait.offsetTop;
        this._var.bait.offsetWidth;
        this._var.bait.clientHeight;
        this._var.bait.clientWidth
    };
    a.prototype._destroyBait = function() {
        b.document.body.removeChild(this._var.bait);
        this._var.bait = null
    };
    a.prototype.check = function(c) {
        if (c === undefined) {
            c = true
        }
        if (this._var.checking === true) {
            return false
        }
        this._var.checking = true;
        if (this._var.bait === null) {
            this._creatBait()
        }
        var d = this;
        this._var.loopNumber = 0;
        if (c === true) {
            this._var.loop = setInterval(function() {
                d._checkBait(c)
            }, this._options.loopCheckTime)
        }
        this._checkBait(c);
        return true
    };
    a.prototype._checkBait = function(c) {
        var d = false;
        if (this._var.bait === null) {
            this._creatBait()
        }
        if (b.document.body.getAttribute("abp") !== null || this._var.bait.offsetParent === null || this._var.bait.offsetHeight == 0 || this._var.bait.offsetLeft == 0 || this._var.bait.offsetTop == 0 || this._var.bait.offsetWidth == 0 || this._var.bait.clientHeight == 0 || this._var.bait.clientWidth == 0) {
            d = true
        }
        if (b.getComputedStyle !== undefined) {
            var e = b.getComputedStyle(this._var.bait, null);
            if (e.getPropertyValue("display") == "none" || e.getPropertyValue("visibility") == "hidden") {
                d = true
            }
        }
        if (c === true) {
            this._var.loopNumber++;
            if (this._var.loopNumber >= this._options.loopMaxNumber) {
                clearInterval(this._var.loop);
                this._var.loop = null;
                this._var.loopNumber = 0
            }
        }
        if (d === true) {
            if (c === true) {
                this._var.checking = false
            }
            this._destroyBait();
            this.emitEvent(true)
        } else {
            if (this._var.loop === null || c === false) {
                if (c === true) {
                    this._var.checking = false
                }
                this._destroyBait();
                this.emitEvent(false)
            }
        }
    };
    a.prototype.emitEvent = function(c) {
        var d = this._var.event[(c === true ? "detected" : "notDetected")];
        for (i in d) {
            d[i]()
        }
        if (this._options.resetOnEnd === true) {
            this.clearEvent()
        }
        return this
    };
    a.prototype.clearEvent = function() {
        this._var.event.detected = [];
        this._var.event.notDetected = []
    };
    a.prototype.on = function(c, d) {
        this._var.event[(c === true ? "detected" : "notDetected")].push(d);
        return this
    };
    a.prototype.onDetected = function(c) {
        return this.on(true, c)
    };
    a.prototype.onNotDetected = function(c) {
        return this.on(false, c)
    };
    b.fuckAdBlock = new a()
})(window);
