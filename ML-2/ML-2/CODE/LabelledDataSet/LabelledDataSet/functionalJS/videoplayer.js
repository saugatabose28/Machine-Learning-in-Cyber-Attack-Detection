require({
    paths: {
        "bump-3": window.location.protocol === "https:" ? "https://ssl.live.bbc.co.uk/emp/bump-3/ssl": "http://emp.bbci.co.uk/emp/bump-3/bump-3"
    }
});
define("desktop/ui/videoplayer", ["bump-3", "bbcdotcom/av/emp/adverts", "bbcdotcom/av/emp/analytics"], function(e, h, c) {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(l, m) {
            var j;
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var o = Object(this);
            var i = o.length>>>0;
            if (i === 0) {
                return - 1
            }
            var p =+ m || 0;
            if (Math.abs(p) === Infinity) {
                p = 0
            }
            if (p >= i) {
                return - 1
            }
            j = Math.max(p >= 0 ? p : i - Math.abs(p), 0);
            while (j < i) {
                if (j in o && o[j] === l) {
                    return j
                }
                j++
            }
            return - 1
        }
    }
    var b = "video_current";
    var f = "video_playing";
    var a = {
        kind: "advert",
        identifier: "advert",
        href: "advert",
        media: {
            kind: "video",
            width: 400,
            height: 225,
            type: "video/mp4",
            connection: {
                kind: "doubleClick",
                companionSize: "$companionSize",
                companionType: "$companionType",
                companionId: "$companionId",
                href: "$preroll"
            }
        }
    };
    var d = {
        container: null,
        autoLoadFirst: true,
        autoPlayFirst: false,
        contentMap: {},
        playerConfig: {
            product: "news",
            plugins: {
                player: {
                    width: "400px",
                    height: "225px"
                }
            }
        }
    };
    var g = function(j, i) {
        this.currentVideoId = null;
        this.options = e.extend(true, {}, d, i);
        if (!this.options.container) {
            throw new Error("A container element must be provided")
        }
        this.$container = e(this.options.container);
        this.$elements = {
            player: this.$container.find(this.options.playerSelector),
            items: this.$container.find(this.options.playlistItemsSelector)
        };
        this.$elements.items.each(e.proxy(function(k, l) {
            e(l).on("click.videoplayer", e.proxy(this._onVideoSelect, this))
        }, this));
        this.$elements.player.removeAttr("href");
        if (!this.$elements.player.attr("id")) {
            this.$elements.player.attr("id", "videoplayer-" + Math.floor(Math.random() * 1000000) + 1)
        }
        this.player = this.$elements.player.player(this.options.playerConfig);
        h.addSmpPlugin(this.$elements.player.attr("id"), this.player);
        c.addEventListeners(this.player);
        this.player.bind("playing", e.proxy(this._onVideoLoaded, this));
        this.player.load();
        this.setVideos(j);
        if (this.options.autoLoadFirst) {
            this.loadVideoAt(0, this.options.autoPlayFirst)
        }
    };
    g.prototype.setVideos = function(k) {
        this.videos = k;
        this.videoIds = [];
        for (var j in k) {
            this.videoIds.push(k[j].pid)
        }
    };
    g.prototype.getVideo = function(j) {
        var i = this.videoIds.indexOf(j);
        return i >= 0 ? this.videos[i] : null
    };
    g.prototype.loadVideo = function(o, m) {
        var k = this.getVideo(o), n = [];
        if (!k) {
            return 
        }
        this.$elements.items.removeClass([b, f].join(" ")).filter("#" + o).addClass(b);
        for (var j in this.options.contentMap) {
            var i = this.options.contentMap[j];
            this.$container.find(this.options.contentMap[j]).html(k[j])
        }
        if (k.allowadvertising) {
            n.push(a)
        }
        n.push({
            vpid: k.pid
        });
        try {
            this.player.stop();
            this.player.loadPlaylist({
                title: k.title,
                summary: k.summary,
                holdingImageURL: k.img,
                items: n
            });
            if (m) {
                this.player.play()
            }
        } catch (l) {}
        this.currentVideoId = o
    };
    g.prototype.loadVideoAt = function(i, j) {
        var k = this.videoIds[i];
        if (k !== undefined) {
            this.loadVideo(k, j)
        }
    };
    g.prototype.getCurrentVideoPlaylistElement = function() {
        return this.$elements.items.filter("#" + this.currentVideoId)
    };
    g.prototype._onVideoSelect = function(i) {
        i.preventDefault();
        this.loadVideo(e(i.currentTarget).attr("id"), true)
    };
    g.prototype._onVideoLoaded = function(i) {
        this.getCurrentVideoPlaylistElement().addClass(f)
    };
    return {
        create: function(j, i) {
            return new g(j, i)
        }
    }
});
