/*jslint forin: true, plusplus: true, regexp: true, sloppy: true, vars: true, white: true, browser: true, maxerr: 200, maxlen: 200*/
/*global BBC, escape, bbccom_weather*/
BBC.adverts.setZone({
    zones: {
        data: {
            ads: false,
            site: "bbccom.live.site.news",
            zone: "_default",
            labels : {
                'sponsor*' : 'IN ASSOCIATION WITH' 
            },
            keyValues: {
                sectn: "news",
                ctype: "content"
            },
            slots: {
                bottom: false,
                skyscraper: false,
                partner_button1: false,
                partner_button2: false,
                partner_button3: false,
                partner_button4: false,
                partner_button5: false,
                partner_button6: false,
                partner_button7: false,
                partner_button8: false,
                "mpu_bottom": false
            }
        },
        zones: [
        /*******************************************************************
                     * BBC Homepage
                     ******************************************************************/

        {
            uri: "/home/",
            data: {
                ads: true,
                site: "bbccom.live.site.www",
                zone: "bbc_homepage_int",
                keyValues: {
                    nnsec: "homepage_int",
                    sectn: "nonnews"
                },
                slots: {
                    "mpu_bottom": true,
                    partner_button1: false,
                    partner_button2: false,
                    partner_button3: false,
                    partner_button4: false,
                    partner_button5: false,
                    partner_button6: false,
                    partner_button7: false,
                    partner_button8: false
                    // Homepage 3.5 (Modules are enabled by default, unless set to 'false'.
                    // Homepage json config determines if JS is built into modules html)
                    //                        module_0002l:true,   // Egntertainment
                    //                        module_0001k:true,   // Weather
                    //                        module_0001f:true,   // Travel
                    //                        module_0000i:true,   // Spotlight
                    //                        module_00029:true    // Most Popular
                    //                        module_00008:true    // Sport
                },
                slotSize: {
                    mpu: "300x250,300x600,336x850"
                },
                movable: {
                    leaderboard: true
                }
            },
            zones: [
            {
                uri: "festival",
                data: {
                    zone: "2012_festival_content"
                }
            },
            {
                uri: "16000000",
                data: {
                    zone: "2012_festival_content",
                    movable: {
                        mpu: true
                    }
                }
            }
            ]
        },
        /*******************************************************************
                     * Religion & History  (BBCCOM-3799)
                     ******************************************************************/

        {
            uri: "/knowledge_learning/",
            data: {
                ads: false,
                zone: "knowledge_learning_index"
            }
        },
        /*******************************************************************
                     * Nature (BBCCOM-3799)
                     ******************************************************************/

        {
            uri: "/nature/",
            data: {
                ads: false,
                zone: "nature_index"
            }
        },
        /*******************************************************************
                     * TV
                     ******************************************************************/

        {
            uri: "/tv/",
            data: {
                ads: true,
                site: "bbccom.live.site.tv",
                zone: "bbc_tv_int",
                keyValues: {
                    nnsec: "tv_int",
                    sectn: "nonnews"
                },
                slots: {
                    wallpaper: false
                },
                slotSize: {
                    mpu: "160x600,300x250,300x600,336x700,336x850,336x280",
                    promo: "336x350"
                }
            }
        },
        /*******************************************************************
                     * Torch Relay
                     ******************************************************************/

        {
            uri: "/torchrelay",
            data: {
                ads: true,
                zone: "news_torchrelay_index",
                slotSize: {
                    mpu: "160x600,300x250,300x600,336x700,336x850,336x280"
                },
                slots: {
                    wallpaper: false
                }
            },
            zones: [
            {
                uri: "/day",
                data: {
                    zone: "news_torchrelayday_content"
                }
            }
            ]
        },
        /*******************************************************************
                     * 2012
                     ******************************************************************/

        {
            uri: "/2012",
            data: {
                ads: true,
                zone: "2012_homepage_int",
                slots: {
                    wallpaper: false
                }
            },
            zones: [
            {
                uri: "/festival",
                data: {
                    zone: "2012_festival_content"
                }
            },
            {
                uri: "/16000000",
                data: {
                    zone: "2012_festival_content"
                }
            }
            ]
        },

        /*******************************************************************
                     * BBC Worldservice
                     ******************************************************************/

        {
            uri: "/arabic(|_1024)",
            // regexp for /arabic and /arabic_1024
            data: {
                ads: true,
                site: "bbcworldservice.live.site.arabic",
                zone: "_default",
                slots: {
                    wallpaper: false
                },
                slotSize: {
                    mpu: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280"
                }
            },
            zones: [
            {
                uri: "/homepage/",
                data: {
                    zone: "ws_homepage_content"
                }
            },
            {
                uri: "/artandculture/",
                data: {
                    zone: "ws_artandculture_content"
                }
            },
            {
                uri: "/business/",
                data: {
                    zone: "ws_business_content"
                }
            },
            {
                uri: "/indepth/",
                data: {
                    zone: "ws_indepth_content"
                },
                zones: [
                {
                    // BBCCOM-5333
                    uri: "world_cup_2014.shtml",
                    data: {
                        zone: "sport_footballworldcup_content"
                    }
                }
                ]
            },
            {
                uri: "/institutional/",
                /* TV schedules */
                data: {
                    zone: "ws_tvandradio_content"
                }
            },
            {
                uri: "/interactivity/",
                data: {
                    zone: "ws_interactivity_content"
                }
            },
            {
                uri: "/inthepress/",
                data: {
                    zone: "ws_inthepress_content"
                }
            },
            {
                uri: "/learningenglish/",
                data: {
                    zone: "ws_learningenglish_content"
                }
            },
            {
                uri: "/middleeast/",
                data: {
                    zone: "ws_middleeast_content"
                }
            },
            {
                uri: "/multimedia/",
                data: {
                    zone: "ws_multimedia_content"
                }
            },
            {
                uri: "/scienceandtech/",
                data: {
                    zone: "ws_science_content"
                }
            },
            {
                uri: "/sports/",
                data: {
                    zone: "ws_sport_content"
                }
            },
            {
                uri: "/topics",
                data: {
                    zone: "ws_topics_content"
                },
                zones: [
                {
                    uri: "/video/",
                    data: {
                        zone: "ws_multimedia_content"
                    }
                },
                {
                    uri: "/pic_gal/",
                    data: {
                        zone: "ws_multimedia_content"
                    }
                }
                ]
            },
            {
                uri: "/tvandradio/",
                data: {
                    zone: "ws_tvandradio_content"
                }
            },
            {
                uri: "/video/",
                data: {
                    zone: "ws_multimedia_content"
                }
            },
            {
                uri: "/worldnews/",
                data: {
                    zone: "ws_worldnews_content"
                }
            },
            {
                uri: "/weather/",
                data: {
                    zone: "ws_weather_content"
                }
            }
            ]
        },
        {
            uri: "/mundo",
            data: {
                ads: true,
                site: "bbcworldservice.live.site.mundo",
                zone: "_default",
                slots: {
                    wallpaper: false
                },
                slotSize: {
                    mpu: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280"
                }
            },
            zones: [
            {
                uri: "/homepage/",
                data: {
                    zone: "ws_homepage_content"
                }
            },
            {
                uri: "/america_latina/",
                data: {
                    zone: "ws_latinamerica_content"
                }
            },
            {
                uri: "/aprenda_ingles/",
                data: {
                    zone: "ws_learningenglish_content"
                }
            },
            {
                uri: "/ciencia/",
                data: {
                    zone: "ws_science_content"
                }
            },
            {
                uri: "/cultura/",
                data: {
                    zone: "ws_culture_content"
                }
            },
            {
                uri: "/curiosidades/",
                data: {
                    zone: "ws_curiosities_content"
                }
            },
            {
                uri: "/economia/",
                data: {
                    zone: "ws_business_content"
                }
            },
            {
                uri: "/fotos/",
                data: {
                    zone: "ws_multimedia_content"
                }
            },
            {
                uri: "/internacional/",
                data: {
                    zone: "ws_international_content"
                }
            },
            {
                uri: "/institucional/",
                data: {
                    zone: "ws_institutional_content"
                }
            },
            {
                uri: "/rolling_news/",
                data: {
                    zone: "ws_latestnews_content"
                }
            },
            {
                uri: "/salud/",
                data: {
                    zone: "ws_health_content"
                }
            },
            {
                uri: "/tecnologia/",
                data: {
                    zone: "ws_technology_content"
                }
            },
            {
                uri: "/tiempo/",
                data: {
                    zone: "ws_weather_content"
                }
            },
            {
                uri: "/ultimas_noticias/",
                data: {
                    zone: "ws_latestnews_content"
                }
            },
            {
                uri: "/video_fotos/",
                data: {
                    zone: "ws_multimedia_content"
                }
            },
            {
                // BBCCOM-5333 (hack made to bbccom.js too)
                uri: "/world-cup",
                data: {
                    zone: "sport_footballworldcup_content"
                }
            }
            ]
        },
        {
            uri: "/russian",
            data: {
                ads: true,
                site: "bbcworldservice.live.site.russia",
                zone: "_default",
                slots: {
                    wallpaper: false,
                    adsense_middle: false,
                    adsense_mpu: false
                },
                slotSize: {
                    mpu: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280"
                }
            },
            zones: [
            {
                uri: "/homepage/",
                data: {
                    zone: "ws_homepage_content"
                }
            },
            {
                uri: "/business/",
                data: {
                    zone: "ws_business_content"
                }
            },
            {
                uri: "/criminal/",
                data: {
                    zone: "ws_criminal_content"
                }
            },
            {
                uri: "/indepth/",
                data: {
                    zone: "ws_indepth_content"
                },
                zones: [
                {
                    uri: "sochi_olympics_2014",
                    data: {
                        zone: "ws_sportwinterolympics_content"
                    }
                },
                {
                    // BBCCOM-5333
                    uri: "world_cup_2014.shtml",
                    data: {
                        zone: "sport_footballworldcup_content"
                    }
                }
                ]
            },
            {
                uri: "/institutional/",
                data: {
                    zone: "ws_institutional_content"
                }
            },
            {
                uri: "/interactivity/",
                data: {
                    zone: "ws_interactivity_content"
                }
            },
            {
                uri: "/learning_english/",
                data: {
                    zone: "ws_learningenglish_content"
                }
            },
            {
                uri: "/multimedia/",
                data: {
                    zone: "ws_multimedia_content"
                }
            },
            {
                uri: "/rolling_news/",
                data: {
                    zone: "ws_latestnews_content"
                }
            },
            {
                uri: "/russia/",
                data: {
                    zone: "ws_russia_content"
                }
            },
            {
                uri: "/science/",
                data: {
                    zone: "ws_science_content"
                }
            },
            {
                uri: "/society/",
                data: {
                    zone: "ws_society_content"
                }
            },
            {
                uri: "/sport/",
                data: {
                    zone: "ws_sport_content"
                }
            },
            {
                uri: "/uk/",
                data: {
                    zone: "ws_uk_content"
                }
            },
            {
                uri: "/video/",
                data: {
                    zone: "ws_multimedia_content"
                }
            }
            ]
        },
        /*******************************************************************
                     * PROGRAMMES
                     ******************************************************************/

        {
            uri: "/programmes",
            data: {
                ads: true,
                zone: "news_programmes_content",
                slots: {
                    wallpaper: false
                },
                slotSize: {
                    mpu: "160x600,300x250,300x600,336x700,336x850,336x280"
                }
            },
            zones: [
            {
                uri: "/n3csrm85|/b006m9ry|/n13xtmd5|/p014sq90|/n3csw96n|/n3cstntn|/n3csw96j|/n3cstntw|/n3cstntv|/n3cstntt|/n3cstnts|/n3cstntr|/n3cstntv|/n3cstntq|/n3cstntp|/n3cstntn|/n3csw96p|/n3csw96m|/n3csw96l|/n3csw96k|/p01z0s43|/p01yzwhp|/p01yzs7g|/p01yqhm1|/p01ykvwr|/p01yl7r6|/p01y67fz|/p01y6976|/p01y8hd3|/p01xz1br|/p01xy7w5|/p01xtjr8|/p01xlhxh|/p01xlhqb|/p01x38x0|/p01w0d20|/p01xl9wj|/p01xg21s|/p01xg1gg|/p01x3q76|/p01x38rq|/p01x08j6|/p01x7ywv|/p01wvqx7|/p01wvq2v|/p01wtntm|/p01wm1tw|/p01wq44s|/p01wdgcl",
                data: {
                    zone: "news_clickonline_content"
                }
            },
            {
                uri: "/p016zlyw|/n13xtmgj",
                data: {
                    zone: "news_fasttrack_content"
                }
            },
            {
                uri: "/n13xtmdc|/b006mg2m",
                data: {
                    zone: "news_hardtalk_content"
                }
            },
            {
                uri: "/n13xtmd4|/b0121whm",
                data: {
                    zone: "news_asiabusiness_content"
                }
            }
            ]
        },
        {
            uri: "/worldnews/programmes",
            data: {
                ads: true,
                zone: "ws_worldnews_content",
                slots: {
                    wallpaper: false
                },
                slotSize: {
                    mpu: "160x600,300x250,300x600,336x700,336x850,336x280"
                },
                htmlClass: "programme_light"
            }
        },
        /*******************************************************************
                     * News
                     ******************************************************************/

        {
            uri: "/2/hi",
            data: {
                ads: true,
                zone: "_default",
                keyValues: {
                    news: "default"
                },
                slots: {
                    sponsor_section: false,
                    sponsor_subsection: true,
                    // BBCCOM-5231: enable for custom branding
                    "mpu_bottom": true,
                    "module_hyper-promotional-content": false,
                    // BBCCOM-2265: Remove slots
                    "module_special-reports": false,
                    "module_most-popular-category": false,
                    "module_most-popular": false,
                    "module_market-data-include": false
                },
                movable: {
                    mpu: true
                }
            },
            zones: [
            {
                uri: "/front_page/default.stm",
                data: {
                    zone: "news_homepage_int",
                    keyValues: {
                        news: "homepage_int"
                    },
                    slots: {
                        interstitial: false
                    },
                    slotSize: {
                        leaderboard: "728x90,970x66,970x90,970x250",
                        mpu: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280"
                    }
                }
            },
            {
                uri: "/also_in_the_news/",
                data: {
                    zone: "news_alsointhenews_content"
                }
            },
            {
                uri: "/in_pictures/",
                data: {
                    zone: "news_inpictures_content",
                    slots: {
                        sponsor_section: true
                    },
                    slotSize: {
                        mpu: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280"
                    }
                }
            },
            {
                uri: "/uk_news/magazine/",
                data: {
                    zone: "news_magazine_content",
                    slots: {
                        wallpaper: false
                    }
                }
            },
            {
                uri: "/business/",
                data: {
                    zone: "news_business_content",
                    keyValues: {
                        news: "business"
                    },
                    slots: {
                        sponsor_section: true,
                        partner_button3: false,
                        partner_button4: false
                    }
                },
                zones: [
                {
                    uri: "asia_business/",
                    data: {
                        zone: "news_asiabusiness_content"
                    }
                },
                {
                    uri: "aerospace/",
                    data: {
                        zone: "news_aerospace_content"
                    }
                },
                {
                    // BBCCOM-758
                    uri: "business_of_sport/",
                    data: {
                        zone: "news_businessofsport_content"
                    }
                },
                {
                    uri: "companies/",
                    data: {
                        zone: "news_companies_content"
                    }
                },
                {
                    // Davos 2009
                    uri: "davos/",
                    data: {
                        zone: "news_davos_content"
                    }
                },
                {
                    uri: "economy/",
                    data: {
                        zone: "news_economy_content"
                    }
                },
                {
                    uri: "global_car_industry/",
                    data: {
                        zone: "news_detroitcarshow_content"
                    }
                },
                {
                    uri: "market_data/overview/",
                    data: {
                        zone: "news_marketdata_content"
                    }
                },
                {
                    uri: "market_data/stockmarket/",
                    data: {
                        zone: "news_marketdatastockmarket_content"
                    }
                },
                {
                    uri: "market_data/shares/",
                    data: {
                        zone: "news_marketdatashares_content"
                    }
                },
                {
                    uri: "market_data/currency/",
                    data: {
                        zone: "news_marketdatacurrency_content"
                    }
                },
                {
                    uri: "market_data/commodities/",
                    data: {
                        zone: "news_marketdatacommodities_content"
                    }
                },
                {
                    uri: "market_data/gilt/",
                    data: {
                        zone: "news_marketdatagilt_content"
                    }
                },
                {
                    uri: "market_data/earnings/",
                    data: {
                        zone: "news_marketdataearnings_content"
                    }
                },
                {
                    uri: "your_money/12205462",
                    data: {
                        zone: "news_smallbusiness_index"
                    }
                },
                {
                    uri: "11428889",
                    data: {
                        zone: "news_techofbusiness_content"
                    }
                },
                {
                    uri: "11629784",
                    data: {
                        zone: "news_startup_index"
                    }
                },
                {
                    uri: "24033700",
                    data: {
                        zone: "news_escape_index"
                    }
                },
                {
                    uri: "13353814",
                    data: {
                        zone: "news_oneinabillion_index"
                    }
                },
                {
                    uri: "12010322",
                    data: {
                        zone: "news_businessroundup_index"
                    }
                },
                {
                    uri: "15521824",
                    data: {
                        zone: "news_energyfutures_index"
                    }
                },
                // BBCCOM-5340 Entrepreneurs
                {
                    uri: "27614930",
                    data: {
                        zone: "news_newentrepreneurs_index"
                    }
                },
                // BBCCOM-5339 Billionaires
                {
                    uri: "29147254",
                    data: {
                        zone: "news_bigdata_index"
                    }
                },
                // BBCCOM-5620 Big Data
                {
                    uri: "27614929",
                    data: {
                        zone: "news_nextbillionaires_index"
                    }
                },
                // BBCCOM-4331 New ad zones for Entrepreneurship
                {
                    uri: "22434141",
                    data: {
                        zone: "news_entrepreneurship_index"
                    }
                },
                {
                    uri: "22449886",
                    data: {
                        zone: "news_theboss_index"
                    }
                },
                {
                    uri: "22449887",
                    data: {
                        zone: "news_thinkingbusiness_index"
                    }
                },
                {
                    // Davos 2011 feature index
                    uri: "12175813",
                    data: {
                        zone: "news_davos_index"
                    }
                },
                {
                    // BBCCOM-4927 Davos 2014 feature index
                    uri: "25652658",
                    data: {
                        zone: "news_davos_index"
                    }
                },
                {
                    // BBCCOM-759 Africa Business feature index
                    uri: "12832792",
                    data: {
                        zone: "news_africabusiness_index"
                    }
                },
                {
                    // BBCCOM-933 One in a Billion feature index
                    uri: "13689890",
                    data: {
                        zone: "news_oneinabillion_index"
                    }
                },
                {
                    // BBCCOM-953 Power of Asia feature index
                    uri: "13710859",
                    data: {
                        zone: "news_powerofasia_index"
                    }
                },
                {
                    // BBCCOM-989 New Middle Class feature index
                    uri: "13845032",
                    data: {
                        zone: "news_newmiddleclass_index"
                    }
                },
                {
                    // BBCCOM-1509  New zone file for Knowledge Economy
                    uri: "12686570",
                    data: {
                        zone: "news_knowledgeeconomy_index"
                    }
                },
                {
                    // BBCCOM-1810 New Zone for At Home Abroad
                    uri: "15736065",
                    data: {
                        zone: "news_athomeabroad_index",
                        keyValues: {
                            news: "athomeabroad"
                        }
                    }
                },
                {
                    // BBCCOM-2166 My Business
                    uri: "15870435",
                    data: {
                        zone: "news_mybusiness_index",
                        keyValues: {
                            news: "mybusiness"
                        }
                    }
                },
                {
                    // BBCCOM-2465 Running a Business
                    uri: "16611973",
                    data: {
                        zone: "news_rab_index",
                        keyValues: {
                            news: "rab"
                        }
                    }
                },
                {
                    // BBCCOM-3698/BBCCOM-5669 Business of Giving
                    uri: "19182463",
                    data: {
                        zone: "news_businessofgiving_index",
                        keyValues: {
                            news: "businessofgiving"
                        }
                    }
                },
                {
                    // BBCCOM-3697 Ideas Exchange
                    uri: "19283821",
                    data: {
                        zone: "news_ideasexchange_index",
                        keyValues: {
                            news: "ideasexchange"
                        },
                        slots: {
                            adsense_middle: false,
                            adsense_mpu: false
                        }
                    }
                },
                {
                    // BBCCOM-3752 Remove Adsense
                    uri: "19332584",
                    data: {
                        zone: "news_ideasexchange_index",
                        keyValues: {
                            news: "ideasexchange"
                        },
                        slots: {
                            adsense_middle: false,
                            adsense_mpu: false
                        }
                    }
                },
                {
                    // BBCCOM-3912 New ad zone for CEO Guru
                    uri: "20071226",
                    data: {
                        zone: "news_ceoguru_index"
                    }
                },
                {
                    // BBCCOM-4361:  New ad zone for Branding pages
                    uri: "22434141",
                    data: {
                        zone: "news_entrepreneurship_index"
                    }
                },
                {
                    // BBCCOM-4361:  New ad zone for Branding pages
                    uri: "22449886",
                    data: {
                        zone: "news_theboss_index"
                    }
                },
                {
                    // BBCCOM-4361:  New ad zone for Branding pages
                    uri: "22449887",
                    data: {
                        zone: "news_thinkingbusiness_index"
                    }
                },
                {
                    // BBCCOM-4881:  New ad zone for Business of tennis
                    uri: "25319175",
                    data: {
                        zone: "news_businessoftennis_index"
                    }
                },
                {
                    // BBCCOM-5191:  New ad zone for energy
                    uri: "15521824",
                    data: {
                        zone: "news_energy_index"
                    }
                },
                {
                    // BBCCOM-5730:  New ad zone for How to succeed
                    uri: "29617902",
                    data: {
                        zone: "news_howtosucceedin_index"
                    }
                }
                ]
            },
            {
                uri: "/health/",
                data: {
                    zone: "news_health_content",
                    keyValues: {
                        news: "health"
                    }
                },
                zones: [
                {
                    // BBCCOM-2574 Bionic Bodies
                    uri: "17153052",
                    data: {
                        zone: "news_bionicbodies_index"
                    }
                },
                {
                    uri: "medical_notes/",
                    data: {
                        zone: "news_medicalnotes_content"
                    }
                }
                ]
            },
            {
                uri: "/science_and_environment/",
                data: {
                    zone: "news_science_content"
                }
            },
            {
                uri: "/special_reports/global_economy/",
                data: {
                    zone: "news_special_reports_global_economy"
                }
            },
            {
                uri: "/technology/",
                data: {
                    zone: "news_technology_content",
                    keyValues: {
                        news: "technology"
                    },
                    slots: {
                        sponsor_section: true,
                        partner_button3: false,
                        partner_button4: false
                    }
                },
                zones: [
                {
                    uri: "14803871",
                    data: {
                        zone: "news_ideaschangeworld_index",
                        keyValues: {
                            news: "technology"
                        }
                    }
                },
                {
                    uri: "22158991",
                    data: {
                        zone: "news_clickonline_index",
                        keyValues: {
                            news: "technology"
                        }
                    }
                },
                {
                    uri: "23517670",
                    data: {
                        zone: "news_tomorrowscities_index",
                        keyValues: {
                            news: "technology"
                        }
                    }
                },
                {
                    uri: "23856699",
                    data: {
                        zone: "news_digitalindians_index",
                        keyValues: {
                            news: "technology"
                        }
                    }
                },
                {
                    uri: "25852150",
                    data: {
                        zone: "news_nextsiliconvalleys_index",
                        keyValues: {
                            news: "technology"
                        }
                    }
                }
                ]
            },
            {
                uri: "/entertainment_and_arts",
                data: {
                    zone: "news_entertainment_content",
                    keyValues: {
                        news: "entertainment"
                    },
                    slots: {
                        sponsor_section: true
                    }
                },
                zones: [
                {
                    uri: "/25626764",
                    data: {
                        zone: "news_oscars_index",
                        keyValues: {
                            news: "entertainment"
                        }
                    }
                }
                ]
            },
            {
                uri: "/in_depth/",
                data: {
                    zone: "news_indepth_content"
                }
            },
            {
                uri: "/in_depth/americas/2008/vote_usa_2008/",
                data: {
                    zone: "news_uselection_content"
                }
            },
            {
                uri: "/in_depth/sci_tech/green_room/",
                data: {
                    zone: "news_greenroom_content"
                }
            },
            {
                uri: "/in_depth/americas/2008/obama_presidency/",
                data: {
                    zone: "news_obama_content"
                }
            },
            {
                uri: "/in_depth/business/2009/davos/",
                data: {
                    zone: "news_davos_content"
                }
            },
            {
                uri: "/in_depth/business/2010/davos/",
                data: {
                    zone: "news_davos_content"
                }
            },
            {
                uri: "/in_depth/business/aerospace/",
                data: {
                    zone: "news_aerospace_content"
                }
            },
            {
                uri: "/in_depth/south_asia/2009/indian_election/",
                data: {
                    zone: "news_indianelection_default"
                }
            },
            {
                uri: "/in_depth/business/africa_business/",
                data: {
                    zone: "news_africa_business"
                }
            },
            {
                uri: "/in_depth/sci_tech/2009/copenhagen/",
                data: {
                    zone: "news_scitechcopenhagen_content"
                }
            },
            {
                uri: "/in_depth/sci_tech/digital_giants/",
                data: {
                    zone: "news_scitechdigitalgiants_content"
                }
            },
            {
                uri: "/programmes/gmt/",
                data: {
                    zone: "news_gmt_content"
                }
            },
            {
                uri: "/programmes/the_hub/",
                data: {
                    zone: "news_thehub_content"
                }
            },
            {
                uri: "/programmes/fast_track/",
                data: {
                    zone: "news_fasttrack_content"
                }
            },
            {
                uri: "/programmes/impact_asia/",
                data: {
                    zone: "news_impactasia_content"
                }
            },
            {
                uri: "/programmes/direct/",
                data: {
                    zone: "news_direct_content",
                    keyValues: {
                        news: "direct"
                    }
                },
                zones: [
                {
                    uri: "ukraine/",
                    data: {
                        zone: "news_ukrainedirect_content"
                    }
                },
                {
                    uri: "indonesia/",
                    data: {
                        zone: "news_indonesiadirect_content"
                    }
                }
                ]
            },
            {
                uri: "/world_radio_and_tv",
                data: {
                    zone: "news_worldradioandtv_content"
                },
                zones: [
                {
                    uri: "/21600986",
                    data: {
                        zone: "news_livethestory_index"
                    }
                },
                {
                    uri: "/16159225",
                    data: {
                        zone: "news_ukdirect_index"
                    }
                },
                {
                    uri: "/14237364",
                    data: {
                        zone: "news_malaysiadirect_index"
                    }
                },
                {
                    uri: "/14748120",
                    data: {
                        zone: "news_taiwandirect_index"
                    }
                },
                {
                    uri: "/15386555",
                    data: {
                        zone: "news_indiadirect_index"
                    }
                },
                {
                    uri: "/16686402",
                    data: {
                        zone: "news_mexicodirect_index"
                    }
                },
                {
                    uri: "/17028917",
                    data: {
                        zone: "news_japandirect_index"
                    }
                },
                {
                    uri: "/17274858",
                    data: {
                        zone: "news_francedirect_index"
                    }
                },
                {
                    uri: "/17488902",
                    data: {
                        zone: "news_polanddirect_index"
                    }
                },
                {
                    uri: "/18629708",
                    data: {
                        zone: "news_greecedirect_index"
                    }
                },
                {
                    uri: "/18629709",
                    data: {
                        zone: "news_thailanddirect_index"
                    }
                },
                {
                    uri: "/19481328",
                    data: {
                        zone: "news_brazildirect_index"
                    }
                },
                {
                    uri: "/19481330",
                    data: {
                        zone: "news_turkeydirect_index"
                    }
                },
                {
                    uri: "/21551336",
                    data: {
                        zone: "news_mozambiquedirect_index"
                    }
                },
                {
                    uri: "/22015729",
                    data: {
                        zone: "news_croatiadirect_index"
                    }
                },
                {
                    uri: "/23412514",
                    data: {
                        zone: "news_vietnamdirect_index"
                    }
                },
                {
                    uri: "/16446320",
                    data: {
                        ads: false
                    }
                },
                {
                    uri: "/17826228",
                    data: {
                        zone: "news_canadadirect_index"
                    }
                },
                {
                    uri: "/20431315",
                    data: {
                        zone: "news_qatardirect_index"
                    }
                },
                {
                    uri: "/19481329",
                    data: {
                        zone: "news_kenyadirect_index"
                    }
                },
                {
                    uri: "/22442688",
                    data: {
                        zone: "news_ecuadordirect_index"
                    }
                },
                {
                    uri: "/23426239",
                    data: {
                        ads: false,
                        zone: "news_meettheteam_index"
                    }
                }
                ]
            },
            {
                uri: "/programmes/world_news_today/",
                data: {
                    zone: "news_worldnewstoday_content"
                }
            },
            {
                uri: "/programmes/business_edition/",
                data: {
                    zone: "news_businessedition_content"
                }
            },
            {
                uri: "/programmes/world_news_america/",
                data: {
                    zone: "news_worldnewsamerica_content"
                }
            },
            {
                uri: "/programmes/world_news_america/highlights/",
                data: {
                    zone: "news_worldnewsamericahighlights_content"
                }
            },
            {
                uri: "/programmes/click_online/",
                data: {
                    zone: "news_clickonline_content",
                    keyValues: {
                        news: "click"
                    },
                    styles: {
                        'sponsor_section': {
                            style: 'top:19px; left:486px; color:#fff; text-align:left; width:400px;'
                        },
                        'sponsor_section_text': {
                            style: 'padding:10px; float:left;'
                        },
                        'sponsor_section_image': {
                            style: 'float:left;'
                        }
                    }
                }
            },
            {
                uri: "/programmes/hardtalk/",
                data: {
                    zone: "news_hardtalk_content",
                    keyValues: {
                        news: "hardtalk"
                    },
                    slots: {
                        adsense_middle: false,
                        adsense_mpu: false
                    }
                }
            },
            {
                uri: "/have_your_say/",
                data: {
                    zone: "news_haveyoursay_content"
                }
            },
            {
                uri: "/video_and_audio/10462520",
                data: {
                    zone: "news_videoandaudio_index",
                    slots: {
                        sponsor_section: true
                    }
                }
            },
            {
                uri: "/programmes/real_cities/",
                data: {
                    zone: "news_realcities_content",
                    keyValues: {
                        news: "newsrealcitiescontent"
                    },
                    slots: {
                        sponsor_section: true,
                        adsense_mpu: false,
                        adsense_middle: false,
                        storyprintsponsorship: false
                    },
                    styles: {
                        'sponsor_section': {
                            style: 'right:auto;top:33px;left:176px;'
                        },
                        'sponsor_section_text': {
                            style: 'color:#505050;display:inline-block;'
                        },
                        'sponsor_section_image': {
                            style: 'display:inline-block;'
                        }
                    }
                }
            },
            {
                uri: "/uk/",
                data: {
                    zone: "news_uk_content",
                    slots: {
                        wallpaper: false
                    },
                    keyValues: {
                        news: "uk"
                    }
                },
                zones: [
                {
                    uri: "11767495",
                    data: {
                        zone: "news_royalwedding_index",
                        slots: {
                            adsense_mpu: false,
                            adsense_middle: false,
                            wallpaper: false
                        }
                    }
                },
                {
                    uri: "13132410",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_royalweddingliveevent_index"
                    }
                },
                {
                    uri: "22767289",
                    data: {
                        zone: "news_royalfamily_index"
                    }
                },
                {
                    uri: "22151589",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "noads"
                    }
                },
                {
                    uri: "17500000",
                    data: {
                        zone: "news_diamondjubilee_index",
                        slots: {
                            adsense_middle: false,
                            adsense_mpu: false
                        }
                    }
                },
                {
                    uri: "18234049",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                },
                {
                    uri: "18234053",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                },
                {
                    uri: "18234044",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                },
                {
                    uri: "18235064",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                },
                {
                    uri: "18235065",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                },
                {
                    uri: "18235066",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                },
                {
                    uri: "18235067",
                    data: {
                        ads: false,
                        // disable adverts on live events page
                        zone: "news_diamondjubilee_index"
                    }
                }
                ]
            },
            {
                uri: "/england/",
                data: {
                    zone: "news_uk_content",
                    slots: {
                        wallpaper: false
                    }
                }
            },
            {
                uri: "/northern_ireland/",
                data: {
                    zone: "news_uk_content",
                    slots: {
                        wallpaper: false
                    }
                }
            },
            {
                uri: "/scotland/",
                data: {
                    zone: "news_uk_content",
                    slots: {
                        wallpaper: false
                    }
                }
            },
            {
                uri: "/wales/",
                data: {
                    zone: "news_uk_content",
                    slots: {
                        wallpaper: false
                    }
                }
            },
            {
                uri: "/politics/",
                data: {
                    zone: "news_politics_content"
                }
            },
            {
                uri: "/education/",
                data: {
                    zone: "news_education_content"
                }
            },
            {
                uri: "/magazine/",
                data: {
                    zone: "news_magazine_content",
                    slots: {
                        wallpaper: false
                    }
                },
                zones: [
                {
                    uri: "14760627",
                    data: {
                        zone: "news_alteredstates_index"
                    }
                },
                {
                    uri: "21459225",
                    data: {
                        zone: "news_powerofart_index"
                    }
                },
                {
                    uri: "24117219",
                    data: {
                        zone: "news_makingtime_index"
                    }
                },
                {
                    uri: "14633099",
                    data: {
                        zone: "news_firstperson_index"
                    }
                },
                {
                    uri: "14760626",
                    data: {
                        zone: "news_livingonline_index"
                    }
                },
                {
                    uri: "14760628",
                    data: {
                        zone: "news_picturethis_index"
                    }
                },
                {
                    uri: "18288976",
                    data: {
                        zone: "news_colcul_index"
                    }
                },
                {
                    uri: "16283802",
                    data: {
                        slots: {
                            mpu_bottom: false
                        }
                    }
                },
                {
                    // BBCCOM-4771: BBC Trending
                    uri: "24657783",
                    data: {
                        zone: "news_trending_index"
                    }
                }
                ]
            },
            {
                uri: "/world/",
                data: {
                    zone: "news_world_content",
                    keyValues: {
                        news: "world"
                    }
                },
                zones: [
                {
                    uri: "us_and_canada/",
                    data: {
                        zone: "news_usandcanada_content",
                        slots: {
                            wallpaper: false
                        },
                        keyValues: {
                            news: "america"
                        }
                    },
                    zones: [
                    {
                        uri: "15949569",
                        data: {
                            zone: "news_uselection_index",
                            keyValues: {
                                news: "uselection"
                            },
                            htmlClass: "us_election"
                        },
                        slotSize: {
                            leaderboard: "728x90"
                        }
                    },
                    {
                        uri: "19867862|19802159|20009190",
                        data: {
                            zone: "news_uselection_index",
                            keyValues: {
                                news: "uselection"
                            },
                            htmlClass: "us_election2"
                        },
                        slotSize: {
                            leaderboard: "728x90"
                        }
                    },
                    {
                        uri: "20009195",
                        data: {
                            zone: "news_uselection_index",
                            keyValues: {
                                news: "uselection"
                            },
                            htmlClass: "us_election"
                        },
                        slotSize: {
                            leaderboard: "728x90"
                        }
                    },
                    {
                        uri: "18776174",
                        data: {
                            zone: "news_adoptedathletes_index"
                        }
                    },
                    {
                        uri: "18821583",
                        data: {
                            zone: "news_adoptedathletes_index"
                        }
                    },
                    {
                        uri: "19415745",
                        data: {
                            moveAds: {
                                mpu: "mpu_high"
                            }
                        }
                    }
                    ]
                },
                {
                    uri: "latin_america/",
                    data: {
                        zone: "news_latinamerica_content",
                        keyValues: {
                            news: "america"
                        }
                    }
                },
                {
                    uri: "africa/",
                    data: {
                        zone: "news_africa_content"
                    },
                    zones: [
                    {
                        uri: "15340893",
                        data: {
                            zone: "news_africandream_content"
                        }
                    },
                    {
                        uri: "26952861",
                        data: {
                            zone: "news_southafricadirect_index"
                        }
                    },
                    {
                        uri: "23043987",
                        data: {
                            ads: false,
                            slots: {
                                adsense_middle: false,
                                adsense_mpu: false
                            }
                        }
                    }
                    ]
                },
                {
                    uri: "europe/",
                    data: {
                        zone: "news_europe_content",
                        slots: {
                            wallpaper: false
                        }
                    }

                },
                {
                    uri: "australia/",
                    data: {
                        zone: "news_australia_content",
                        slots: {
                            wallpaper: false
                        }
                    }

                },
                {
                    uri: "middle_east/",
                    data: {
                        zone: "news_middleeast_content",
                        slots: {
                            wallpaper: false
                        }
                    }
                },
                {
                    // /news/world-asia
                    uri: "asia/",
                    data: {
                        zone: "news_asia_content",
                        slots: {
                            wallpaper: false
                        }
                    },
                    zones: [
                    {
                        // BBCCOM-4620 /news/world-asia-24283534
                        uri: "24283534",
                        data: {
                            zone: "news_singaporedirect_content"
                        }
                    },
                    {
                        // BBCCOM-5295 /news/world-asia-27324487
                        uri: "27324487",
                        data: {
                            zone: "news_philippinesdirect_content"
                        }
                    }
                    ]
                },
                {
                    uri: "south_asia/",
                    data: {
                        zone: "news_asia_content"
                    }
                },
                {
                    uri: "asia_pacific/",
                    data: {
                        zone: "news_asia_content"
                    }
                },
                {
                    uri: "asia/china/",
                    data: {
                        zone: "news_asiachina_content",
                        slots: {
                            wallpaper: false
                        }
                    }
                },
                {
                    uri: "asia/india/",
                    data: {
                        zone: "news_asiaindia_content",
                        slots: {
                            wallpaper: false
                        }
                    }
                },
                {
                    // BBCCOM-1608 New zone file for Generation Asia
                    uri: "asia/15453026",
                    data: {
                        zone: "news_generationasia_content"
                    }
                },
                {
                    // BBCCOM-1841 New zone for World Aids Day
                    uri: "15823409",
                    data: {
                        zone: "news_worldaids_index",
                        keyValues: {
                            news: "worldaids"
                        }
                    }
                },
                {
                    // BBCCOM-4100 What If
                    uri: "21069026",
                    data: {
                        zone: "news_whatif_index"
                    }
                },
                {
                    // BBCCOM-4707 100women
                    uri: "24371433",
                    data: {
                        zone: "news_100women_index"
                    }
                }
                ]
            }
            ]
        },
        /*******************************************************************
                     * Earth (in News, not BBC Earth)
                     ******************************************************************/

        {
            uri: "/earth/hi",
            data: {
                ads: true,
                zone: "earth",
                keyValues: {
                    news: "earth"
                },
                slots: {
                    sponsor_section: false
                }
            },
            zones: [
            {
                uri: "/earth_news",
                data: {
                    zone: "news_earth",
                    keyValues: {
                        news: "earth"
                    }
                }
            }
            ]
        },
        /*******************************************************************
                     * Blogs
                     ******************************************************************/

        {
            uri: "/blogs",
            data: {
                ads: false,
                zone: "_default",
                keyValues: {
                    blogs: "blogs"
                }
            },
            zones: [
            {
                uri: "/news_from_elsewhere",
                data: {
                    ads: true,
                    zone: "news_from_elsewhere_content"
                }
            },
            {
                uri: "/magazine_monitor",
                data: {
                    ads: true,
                    zone: "magazine_monitor_content"
                }
            },
            {
                uri: "/trending/",
                data: {
                    ads: true,
                    zone: "news_trending_content"
                }
            },
            {
                uri: "/echochambers/",
                data: {
                    ads: true,
                    zone: "news_echochambers_content"
                }
            },
            {
                uri: "/china_blog/",
                data: {
                    ads: true,
                    zone: "news_chinablog_content"
                }
            },
            {
                uri: "/testadverts/",
                data: {
                    ads: true,
                    zone: "test",
                    site: "bbccom.test.site.flash",
                    keyValues: {
                        blogs: "blogs"
                    }
                }
            },
            {
                uri: "/bendirs/",
                data: {
                    ads: true,
                    zone: "blogs_sport_content",
                    keyValues: {
                        blogs: "bendirs"
                    }
                }
            },
            {
                uri: "/chrischarles/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "chrischarles"
                    }
                }
            },
            {
                uri: "/ethicalman/",
                data: {
                    ads: true,
                    zone: "blogs_news_science_content",
                    keyValues: {
                        blogs: "ethicalman"
                    }
                }
            },
            {
                uri: "/f1mole/",
                data: {
                    ads: true,
                    zone: "blogs_sport_motorsport_content",
                    keyValues: {
                        blogs: "f1mole"
                    }
                }
            },
            {
                uri: "/gordonfarquhar/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "gordonfarquhar"
                    }
                }
            },
            {
                uri: "/magazinemonitor/",
                data: {
                    ads: true,
                    zone: "blogs_sport_motorsport_content",
                    keyValues: {
                        blogs: "magazinemonitor"
                    }
                }
            },
            {
                uri: "/nickrobinson/",
                data: {
                    ads: true,
                    zone: "blogs_news_business_content",
                    keyValues: {
                        blogs: "nickrobinson"
                    }
                }
            },
            {
                uri: "/paulfletcher/",
                data: {
                    ads: true,
                    zone: "blogs_sport_cricket_content",
                    keyValues: {
                        blogs: "paulfletcher"
                    }
                }
            },
            {
                uri: "/philmcnulty/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "philmcnulty"
                    }
                }
            },
            {
                uri: "/philminshull/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "philminshull"
                    }
                }
            },
            {
                uri: "/photoblog/",
                data: {
                    ads: true,
                    zone: "blogs_news_inpictures_content",
                    keyValues: {
                        blogs: "photoblog"
                    }
                }
            },
            {
                uri: "/robborobson/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "robborobson"
                    }
                }
            },
            {
                uri: "/technology/",
                data: {
                    ads: true,
                    zone: "blogs_news_technology_content",
                    keyValues: {
                        blogs: "technology"
                    }
                }
            },
            {
                uri: "/thereporters/franzstrasser/",
                data: {
                    ads: true,
                    zone: "blogs_news_america_content",
                    keyValues: {
                        blogs: "thereportersfranzstrasser"
                    }
                }
            },
            {
                uri: "/thereporters/gavinhewitt/",
                data: {
                    ads: true,
                    zone: "blogs_news_europe_content",
                    keyValues: {
                        blogs: "thereportersgavinhewitt"
                    }
                }
            },
            {
                uri: "/thereporters/jonathanamos/",
                data: {
                    ads: true,
                    zone: "blogs_news_technology_content",
                    keyValues: {
                        blogs: "thereportersjonathanamos"
                    }
                }
            },
            {
                uri: "/thereporters/markeaston/",
                data: {
                    ads: true,
                    zone: "blogs_news_uk_content",
                    slots: {
                        wallpaper: false
                    },
                    keyValues: {
                        blogs: "thereportersmarkeaston"
                    }
                }
            },
            {
                uri: "/thereporters/markmardell/",
                data: {
                    ads: true,
                    zone: "blogs_news_america_content",
                    keyValues: {
                        blogs: "thereportersmarkmardell"
                    }
                }
            },
            {
                uri: "/thereporters/nickbryant/",
                data: {
                    ads: true,
                    zone: "blogs_news_australia_content",
                    keyValues: {
                        blogs: "thereportersnickbryant"
                    }
                }
            },
            {
                uri: "/thereporters/richardblack/",
                data: {
                    ads: true,
                    zone: "blogs_news_science_content",
                    keyValues: {
                        blogs: "thereportersrichardblack"
                    }
                }
            },
            {
                uri: "/thereporters/robertpeston/",
                data: {
                    ads: true,
                    zone: "blogs_news_business_content",
                    keyValues: {
                        blogs: "thereportersrobertpeston"
                    }
                }
            },
            {
                uri: "/thereporters/soutikbiswas/",
                data: {
                    ads: true,
                    zone: "blogs_news_india_content",
                    keyValues: {
                        blogs: "thereporterssoutikbiswas"
                    }
                }
            },
            {
                uri: "/thereporters/stephanieflanders/",
                data: {
                    ads: true,
                    zone: "blogs_news_business_content",
                    keyValues: {
                        blogs: "thereportersstephanieflanders"
                    }
                }
            },
            {
                uri: "/timvickery/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "timvickery"
                    }
                }
            },
            {
                uri: "/tomfordyce/",
                data: {
                    ads: true,
                    zone: "blogs_sport",
                    keyValues: {
                        blogs: "tomfordyce"
                    }
                }
            },
            {
                uri: "/simonaustin/",
                data: {
                    ads: true,
                    zone: "blogs_sport",
                    keyValues: {
                        blogs: "simonaustin"
                    }
                }
            },
            {
                uri: "/stevewilson/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "stevewilson"
                    }
                }
            },
            {
                uri: "/oliverbrett/",
                data: {
                    ads: true,
                    zone: "blogs_sport_cricket_content",
                    keyValues: {
                        blogs: "oliverbrett"
                    }
                }
            },
            {
                uri: "/mattslater/",
                data: {
                    ads: true,
                    zone: "blogs_sport",
                    keyValues: {
                        blogs: "mattslater"
                    }
                }
            },
            {
                uri: "/chrisbevan/",
                data: {
                    ads: true,
                    zone: "blogs_sport",
                    keyValues: {
                        blogs: "chrisbevan"
                    }
                }
            },
            {
                uri: "/danwalker/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "danwalker"
                    }
                }
            },
            {
                uri: "/jakehumphrey/",
                data: {
                    ads: true,
                    zone: "blogs_sport_formulaone_content",
                    keyValues: {
                        blogs: "jakehumphrey"
                    }
                }
            },
            {
                uri: "/sarahholt/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "sarahholt"
                    }
                }
            },
            {
                uri: "/jonathanlegard/",
                data: {
                    ads: true,
                    zone: "blogs_sport_formulaone_content",
                    keyValues: {
                        blogs: "jonathanlegard"
                    }
                }
            },
            {
                uri: "/annathompson/",
                data: {
                    ads: true,
                    zone: "blogs_sport",
                    keyValues: {
                        blogs: "annathompson"
                    }
                }
            },
            {
                uri: "/robhodgetts/",
                data: {
                    ads: true,
                    zone: "blogs_sport",
                    keyValues: {
                        blogs: "robhodgetts"
                    }
                }
            },
            {
                uri: "/jonathanoverend/",
                data: {
                    ads: true,
                    zone: "blogs_sport_tennis_content",
                    keyValues: {
                        blogs: "jonathanoverend"
                    }
                }
            },
            {
                uri: "/iaincarter/",
                data: {
                    ads: true,
                    zone: "blogs_sport_golf_content",
                    keyValues: {
                        blogs: "iaincarter"
                    }
                }
            },
            {
                uri: "/piersedwards/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "piersedwards"
                    }
                }
            },
            {
                uri: "/danroan/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "danroan"
                    }
                }
            },
            {
                uri: "/worldcupmotty/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "worldcupmotty"
                    }
                }
            },
            {
                uri: "/thereporters/andrewharding/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "andrewharding"
                    }
                }
            },
            {
                uri: "/davidbond/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "davidbond"
                    }
                }
            },
            {
                uri: "/jonathanstevenson/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "jonathanstevenson"
                    }
                }
            },
            {
                uri: "/chrisjardine/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "chrisjardine"
                    }
                }
            },
            {
                uri: "/jackross/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "jackross"
                    }
                }
            },
            {
                uri: "/jimspence/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "jimspence"
                    }
                }
            },
            {
                uri: "/joeltaggart/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "joeltaggart"
                    }
                }
            },
            {
                uri: "/joeltaggart/",
                data: {
                    ads: true,
                    zone: "blogs_sport_football_content",
                    keyValues: {
                        blogs: "leighgriffiths"
                    }
                }
            }
            ]
        },
        /*******************************************************************
                     * Weather
                     ******************************************************************/

        {
            uri: "/weather",
            data: {
                ads: true,
                zone: "weather_forcast",
                keyValues: {
                    weather: "forcast",
                    adsense_mpu: "adsense_mpu",
                    adsense_middle: "adsense_middle"
                },
                slots: {
                    sponsor_section: false,
                    sponsor_subsection: false,
                    wallpaper: false
                }
            },
            zones: [
            {
                uri: "/hi/news",
                data: {
                    zone: "weather_news"
                }
            },
            {
                uri: "/hi/gallery",
                data: {
                    zone: "weather_photogallery"
                }
            },
            {
                uri: "/hi/weatherwise",
                data: {
                    zone: "weather_weatherwise"
                }
            },
            {
                uri: "/hi/about",
                data: {
                    zone: "weather_about"
                }
            },
            {
                uri: "/hi/uk_reviews",
                data: {
                    zone: "weather_ukreviews"
                }
            },
            {
                uri: "/hi/uk_warnings",
                data: {
                    zone: "weather_ukwarnings"
                }
            }
            ]
        },
        /*******************************************************************
                     * Sport
                     ******************************************************************/

        {
            uri: "/sport2/hi",
            data: {
                ads: true,
                zone: "_default",
                keyValues: {
                    sectn: "sport"
                },
                slots: {
                    "mpu_bottom": true
                }
            },
            zones: [
            {
                uri: "/default.stm",
                data: {
                    zone: "sport_homepage_int",
                    keyValues: {
                        sport: "homepage_int",
                        sectn: "sport"
                    }
                }
            },
            {
                uri: "/archery",
                data: {
                    zone: "sport_archery_content"
                }
            },
            {
                uri: "/athletics",
                data: {
                    zone: "sport_athletics_content"
                }
            },
            {
                uri: "/boxing",
                data: {
                    zone: "sport_boxing_content"
                }
            },
            {
                uri: "/commonwealth_games",
                data: {
                    zone: "sport_commonwealthgames_content"
                }
            },
            {
                uri: "/cricket",
                data: {
                    zone: "sport_cricket_content"
                },
                zones: [
                {
                    uri: "teams",
                    data: {
                        labels : {
                            sponsor_subsection : 'TEAM PAGE SPONSORED BY' 
                        },
                        htmlClass: "sport_team_pages"
                    }
                }
                ]
            },
            {
                uri: "/disability_sport",
                data: {
                    zone: "sport_disabilitysport_content"
                }
            },
            {
                uri: "/fencing",
                data: {
                    zone: "sport_fencing_content"
                }
            },
            {
                uri: "/football/",
                // => /sport2/hi/football/
                data: {
                    zone: "sport_football_content",
                    keyValues: {
                        sport: "football"
                    }
                },
                zones: [
                {
                    uri: "africa",
                    data: {
                        zone: "sport_footballafrica_content"
                    }
                },
                {
                    uri: "championship",
                    data: {
                        zone: "sport_footballchampionship_content"
                    }
                },
                {
                    uri: "champions-league",
                    data: {
                        zone: "sport_footballchampionsleague_content"
                    }
                },
                {
                    uri: "conference",
                    data: {
                        zone: "sport_footballconference_content"
                    }
                },
                {
                    uri: "eng_prem",
                    data: {
                        zone: "sport_footballpremierleague_content"
                    }
                },
                {
                    uri: "european[-_]championship/2012",
                    //  european_championship or european-championship
                    data: {
                        zone: "sport_footballeuro2012_content"
                    }
                },
                {
                    uri: "europa-league",
                    data: {
                        zone: "sport_footballeuropaleague_content"
                    }
                },
                {
                    uri: "fa-cup",
                    data: {
                        zone: "sport_footballfacup_content"
                    }
                },
                {
                    uri: "fixtures",
                    data: {
                        zone: "sport_footballfixtures_content",
                        slotSize: {
                            mpu: "160x600,300x1050,300x250,300x600,336x280,336x700,336x850"
                        }
                    }
                },
                {
                    uri: "gossip",
                    data: {
                        zone: "sport_footballgossipandtransfers_content"
                    }
                },
                {
                    uri: "internationals",
                    data: {
                        zone: "sport_footballinternationals_content"
                    }
                },
                {
                    uri: "irish",
                    data: {
                        zone: "sport_footballirish_content"
                    }
                },
                {
                    uri: "league-cup",
                    data: {
                        zone: "sport_footballleaguecup_content"
                    }
                },
                {
                    uri: "league-one",
                    data: {
                        zone: "sport_footballleagueone_content"
                    }
                },
                {
                    uri: "league-two",
                    data: {
                        zone: "sport_footballleaguetwo_content"
                    }
                },
                {
                    uri: "league_of_wales/",
                    data: {
                        zone: "sport_footballwelsh_content"
                    }
                },
                {
                    uri: "live[-_]scores",
                    data: {
                        zone: "sport_footballlivescores_content"
                    }
                },
                {
                    uri: "premier[-_]league/",
                    // regexp for premier-league and premier_league
                    data: {
                        zone: "sport_footballpremierleague_content"
                    },
                    zones: [
                    {
                        uri: "fixtures",
                        data: {
                            slotSize: {
                                mpu: "160x600,300x1050,300x250,300x600,336x280,336x700,336x850"
                            }
                        }
                    }
                    ]
                },
                {
                    uri: "results",
                    data: {
                        zone: "sport_footballresults_content",
                        slotSize: {
                            mpu: "160x600,300x1050,300x250,300x600,336x280,336x700,336x850"
                        }
                    }
                },
                {
                    uri: "scottish",
                    // all scottish football
                    data: {
                        zone: "sport_footballscottish_content"
                    }
                },
                {
                    uri: "tables",
                    data: {
                        zone: "sport_footballtables_content"
                    }
                },
                {
                    uri: "teams",
                    data: {
                        zone: "sport_footballteams_content",
                        labels : {
                            sponsor_subsection : 'TEAM PAGE SPONSORED BY' 
                        },
                        htmlClass: "sport_team_pages",
                        slotSize: {
                            mpu: "160x600,300x1050,300x250,300x600,336x280,336x700,336x850"
                        }
                    },
                    zones: [
                    {
                        // BBCCOM-4584
                        uri: "/tottenham-hotspur",
                        data: {
                            zone: "sport_footballtottenham_content"
                        }
                    },
                    {
                        // BBCCOM-4721
                        uri: "/liverpool",
                        data: {
                            zone: "sport_footballliverpool_content"
                        }
                    }
                    ]
                },
                {
                    uri: "women",
                    data: {
                        zone: "sport_footballwomen_content"
                    }
                },
                {
                    // BBCCOM-5356
                    uri: "world-cup",
                    data: {
                        zone: "sport_football_content",
                        keyValues: {
                            channel: "sport",
                            sectn: "football",
                            subsection: "world-cup"
                        }
                    }
                }
                ]
            },
            {
                uri: "/formula1",
                data: {
                    zone: "sport_formulaone_content"
                }
            },
            {
                uri: "/front_page",
                /** Sports Refresh Front Page /sport/0/ */
                data: {
                    zone: "sport_homepage_int",
                    keyValues: {
                        sport: "frontpage"
                    },
                    slotSize: {
                        mpu: "160x600,300x1050,300x250,300x600,336x280,336x700,336x850"
                    }
                },
                zones: [
                {
                    uri: "/14058510",
                    data: {
                        zone: "sport_sportsdaylive_content"
                    }
                }
                ]
            },
            {
                uri: "/handball",
                data: {
                    zone: "sport_handball_content"
                }
            },
            {
                uri: "/rugby[-_]union",
                data: {
                    zone: "sport_rugby_content"
                },
                zones: [
                {
                    uri: "/teams",
                    data: {
                        labels : {
                            sponsor_subsection : 'TEAM PAGE SPONSORED BY' 
                        },
                        htmlClass: "sport_team_pages"
                    }
                }
                ]
            },
            {
                uri: "/rugby[-_]league",
                data: {
                    zone: "sport_rugbyleague_content"
                },
                zones: [
                {
                    uri: "/teams",
                    data: {
                        labels : {
                            sponsor_subsection : 'TEAM PAGE SPONSORED BY' 
                        },
                        htmlClass: "sport_team_pages"
                    }
                }
                ]
            },
            {
                uri: "/tennis",
                data: {
                    zone: "sport_tennis_content"
                }
            },
            {
                uri: "/rowing",
                data: {
                    zone: "sport_rowing_content"
                }
            },
            {
                uri: "/sports_personality",
                data: {
                    zone: "sport_sportspersonality_content"
                }
            },
            {
                uri: "/swimming",
                data: {
                    zone: "sport_swimming_content"
                }
            },
            {
                uri: "/triathlon",
                data: {
                    zone: "sport_triathlon_content"
                }
            },
            {
                uri: "/modern_pentathlon",
                data: {
                    zone: "sport_modernpentathlon_content"
                }
            },
            {
                uri: "/motorsport",
                data: {
                    zone: "sport_motorsport_content"
                }
            },
            {
                uri: "/motogp",
                data: {
                    zone: "sport_motorsport_content"
                }
            },
            {
                uri: "/motorsport/formula_one",
                data: {
                    zone: "sport_formulaone_content"
                }
            },
            {
                uri: "/snooker",
                data: {
                    zone: "sport_snooker_content"
                }
            },
            {
                uri: "/american_football",
                data: {
                    zone: "sport_americanfootball_content"
                }
            },
            {
                uri: "/horse",
                data: {
                    zone: "sport_horseracing_content"
                }
            },
            {
                uri: "/equestrian",
                data: {
                    zone: "sport_equestrian_content"
                }
            },
            {
                uri: "/basketball",
                data: {
                    zone: "sport_basketball_content"
                }
            },
            {
                uri: "/cycling",
                data: {
                    zone: "sport_cycling_content"
                }
            },
            {
                uri: "/rowing",
                data: {
                    zone: "sport_rowing_content"
                }
            },
            {
                uri: "/triathlon",
                data: {
                    zone: "sport_triathlon_content"
                }
            },
            // The following will become deprecated as new indexes are created
            {
                uri: "/other_sports",
                data: {
                    zone: "sport_othersports_content"
                },
                zones: [
                {
                    uri: "/snooker/",
                    data: {
                        zone: "sport_snooker_content"
                    }
                },
                {
                    uri: "/american_football/",
                    data: {
                        zone: "sport_americanfootball_content"
                    }
                },
                {
                    uri: "/horse",
                    data: {
                        zone: "sport_horseracing_content"
                    }
                },
                {
                    uri: "/basketball/",
                    data: {
                        zone: "sport_basketball_content"
                    }
                },
                {
                    uri: "/cycling/",
                    data: {
                        zone: "sport_cycling_content"
                    }
                },
                {
                    uri: "/rowing/",
                    data: {
                        zone: "sport_rowing_content"
                    }
                },
                {
                    uri: "/triathlon/",
                    data: {
                        zone: "sport_triathlon_content"
                    }
                }
                ]
            },
            {
                uri: "/olympics",
                data: {
                    zone: "sport_olympics_content",
                    keyValues: {
                        sport: "olympics"
                    }
                },
                zones: [
                {
                    uri: "/2012",
                    data: {
                        zone: "sport_london2012_content",
                        slotSize: {
                            mpu: "160x600,300x1050,300x250,300x600,336x280,336x700,336x850"
                        }
                    },
                    zones: [
                    {
                        uri: "/world-olympic-dreams",
                        data: {
                            zone: "sport_worldolympicdreams_index"
                        }
                    }
                    ]
                }
                ]
            },
            {
                uri: "/olympic_games",
                data: {
                    zone: "sport_olympics_content"
                },
                zones: [
                {
                    uri: "/london_2012/",
                    data: {
                        zone: "sport_london2012_content",
                        keyValues: {}
                    }
                },
                {
                    uri: "/world_olympic_dreams/",
                    data: {
                        zone: "sport_worldolympicdreams_content"
                    }
                }
                ]
            },
            {
                uri: "/winter_olympics",
                data: {
                    zone: "sport_winterolympics_content"
                }
            },
            {
                uri: "/sailing/",
                data: {
                    zone: "sport_sailing_content"
                }
            },
            {
                uri: "/other_sports/sailing/",
                data: {
                    zone: "sport_sailing_content"
                }
            },
            {
                uri: "/golf/",
                data: {
                    zone: "sport_golf_content",
                    slots: {
                        bottom: true
                    }
                }
            },
            {
                uri: "/northern_ireland/",
                data: {
                    zone: "sport_northernireland_content"
                }
            },
            {
                uri: "/scotland/",
                data: {
                    zone: "sport_scotland_content"
                }
            },
            {
                // BBCCOM-3591: Sports Day Live
                uri: "/sportsday/",
                data: {
                    zone: "sport_sportsdaylive_content"
                }
            },
            {
                uri: "/wales/",
                data: {
                    zone: "sport_wales_content"
                }
            },
            {
                uri: "/volleyball/",
                data: {
                    zone: "sport_volleyball_content"
                }
            },
            {
                uri: "/wrestling/",
                data: {
                    zone: "sport_wrestling_content"
                }
            }
            ]
        },
        /*******************************************************************
                     * BBC Earth
                     ******************************************************************/

        {
            uri: "/timothyallen.blogs.bbcearth.com",
            data: {
                ads: true,
                site: "bbcearth.com",
                zone: "blog_timothyallen",
                slotSize: {
                    mpu: "300x250,300x600"
                }
            }
        },
        {
            uri: "/humanplanet.blogs.bbcearth.com",
            data: {
                ads: true,
                site: "bbcearth.com",
                zone: "blog_humanplanet",
                slotSize: {
                    mpu: "300x250,300x600"
                }
            }
        },
        /*******************************************************************
                     * London 2012 Olympics
                     ******************************************************************/

        {
            uri: "/london2012",
            data: {
                ads: true,
                zone: "sport_olympicportal_content",
                keyValues: {
                    sport: "olympics"
                },
                slots: {
                    sponsor_section: false // Also got a CSS hack ('london2012') to hide it when using the test_zone
                }
            },
            zones: [
            {
                uri: "/festival",
                data: {
                    zone: "2012_festival_content"
                }
            },
            {
                uri: "/16000000",
                data: {
                    zone: "2012_festival_content"
                }
            }
            ]
        },
        /*******************************************************************
                     * Global iPlayer
                     ******************************************************************/

        {
            uri: "/iplayer/radio",
            data: {
                ads: true,
                site: "bbccom.live.ipad.gip.marketing",
                zone: "iplayer_radio_content"
            }
        },
        {
            uri: "/iplayer/tv",
            data: {
                ads: true,
                site: "bbccom.live.ipad.gip.marketing",
                zone: "iplayer_tv_content"
            }
        },
        /*******************************************************************
                     * Special Features - eg Changing Fortunes
                     ******************************************************************/

        {
            uri: "/specialfeatures/",
            data: {
                ads: true,
                site: "bbccom.live.site.specialfeatures",
                zone: "_default"
            },
            zones: [
            {
                uri: "help",
                // disable adverts on Help page
                data: {
                    ads: false
                }
            },
            {
                uri: "changingfortunes",
                /* BBCCOM-3679 */
                data: {
                    zone: "changingfortunes_home"
                },
                zones: [
                {
                    uri: "home",
                    data: {
                        zone: "changingfortunes_home"
                    }
                },
                {
                    uri: "clips",
                    data: {
                        zone: "changingfortunes_clips"
                    }
                },
                {
                    uri: "episodes",
                    data: {
                        zone: "changingfortunes_episodes"
                    }
                },
                {
                    uri: "episode",
                    data: {
                        zone: "changingfortunes_episode"
                    }
                }
                ]
            },
            {
                uri: "horizonsbusiness",
                /* BBCCOM-4201 */
                data: {
                    zone: "horizonsbusiness_home"
                },
                zones: [
                {
                    uri: "/megatrend",
                    data: {
                        zone: "horizonsbusiness_other"
                    }
                },
                {
                    uri: "/clips-library",
                    data: {
                        zone: "horizonsbusiness_clips"
                    }
                },
                {
                    uri: "/episodes",
                    data: {
                        zone: "horizonsbusiness_episodes"
                    }
                },
                {
                    uri: "/episode",
                    data: {
                        zone: "horizonsbusiness_episode"
                    }
                }
                ]
            }
            ]
        },
        /*******************************************************************
                     * Test pages
                     ******************************************************************/

        {
            uri: "/wwscripts",
            data: {
                ads: true,
                zone: "_default"
            }
        }
        ]
    },
    process: function(zoneData, domain, path, referrer) {
        // If it ends in a forward slash OR default.stm
        if ( path.match( /\/$|\/default.stm$/ ) ) {
            if (zoneData.keyValues.ctype) {
                zoneData.keyValues.ctype = "index";
            }
            if (zoneData.zone) {
                zoneData.zone = zoneData.zone.replace(/content$/, "index");
            }
        }

        if (bbcdotcom.objects('bbcdotcom.page.zone')) {
            zoneData.zone = bbcdotcom.page.zone;
        }

        // Referrer KeyValue
        var matchArr = referrer.match(/^(http[s]?:\/\/[a-z0-9\.]*bbc\.(co\.uk|com))(.*)$/);
        if (referrer === "") {
            // Non-bbc
            zoneData.keyValues.referrer = "nonbbc";
        } else if (matchArr && zoneData.keyValues) {
            // Within bbc website
            var refString;
            refString = matchArr[3].replace(/default.stm$|\-|\/|_/g, "");
            if (refString.length > 0 && refString.length <= 64) {
                zoneData.keyValues.referrer = escape(refString);
            } else {
                zoneData.keyValues.referrer = "";
            }
        } else {
            // Catch exceptions
            zoneData.keyValues.referrer = "nonbbc";
        }

        // Add domain of request (www.bbc.com/www.bbc.co.uk/news.bbc.co.uk) BBCCOM-1142
        zoneData.keyValues.domain = domain;

        // Referrer_Domain KeyValue
        var refDomain = referrer.match(/^(http[s]?:\/\/)([a-z0-9\.]*)((?:\/(?:\w|-|\+|\.)+)*)(\/.*)$/);
        if (refDomain) {
            zoneData.keyValues.referrer_domain = refDomain[2];
        } else {
            zoneData.keyValues.referrer_domain = "";
        }

        // Retrieve meta data for this zone
        if (zoneData.meta) {
            var meta_data = BBC.adverts.getMetaData(zoneData.meta);
            if (meta_data) {
                var key;
                for (key in meta_data) {
                    zoneData.keyValues[key] = meta_data[key];
                }
            }
        }

        // Behavioral targeting adserver integration
        var rsi_segs = [];
        var segs_beg = document.cookie.indexOf('rsi_segs=');
        if (segs_beg >= 0) {
            segs_beg = document.cookie.indexOf('=', segs_beg) + 1;
            if (segs_beg > 0) {
                var segs_end = document.cookie.indexOf(';', segs_beg);
                if (segs_end === - 1) {
                    segs_end = document.cookie.length;
                }
                rsi_segs = document.cookie.substring(segs_beg, segs_end).split('|');
            }
        }
        var segQS = rsi_segs.length > 0 ? "rsi=" + rsi_segs[0] + ";" : "",
        i;
        for (i = 1; i < rsi_segs.length && i < 20; i++) {
            segQS += ("rsi" + "=" + rsi_segs[i] + ";");
        }
        zoneData.keyValues.rsi = segQS.substring(4, segQS.length - 1);

        //event sponsorhip  keyvalue
        if (document.getElementsByName('Slug').length !== 0) {
            zoneData.keyValues.slug = escape(
            document.getElementsByName('Slug')[0].getAttribute('content').toLowerCase()
            );
        }

        // Headline keyValue
        if (document.getElementsByName('Headline').length !== 0) {
            var headline = document.getElementsByName('Headline')[0].getAttribute('content').toLowerCase();
            headline = headline.split(' ').join('');
            if (headline.indexOf(':') === - 1) {
                zoneData.keyValues.headline = encodeURIComponent(headline);
            } else {
                zoneData.keyValues.headline = encodeURIComponent(headline.substr(0, headline.indexOf(':')));
            }
        }

        // Weather location keyValues
        if (typeof(bbccom_weather) !== "undefined") {
            var weatherKey;
            for (weatherKey in bbccom_weather) {
                zoneData.keyValues[weatherKey] = escape(
                bbccom_weather[weatherKey].toLowerCase().replace(/[^a-zA-Z 0-9]/g, '')
                );
            }
        }
        return zoneData;
    }
});
