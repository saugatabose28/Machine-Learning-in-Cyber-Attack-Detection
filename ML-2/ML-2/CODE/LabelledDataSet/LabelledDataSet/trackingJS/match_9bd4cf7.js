
GDTDefine('gdt:mod/match.js', function(require, exports, module) {
    function run() {
        try {
            var isAppCenter = location.host === 'my.qzone.qq.com' || (/\bapp=[\d]{5}/).test(location.href), isQZCenter = typeof QZONE != 'undefined'&&!!QZONE.FrontPage && typeof QZONE.FrontPage.getCurrentAppID == 'function' && QZONE.FrontPage.getCurrentAppID() == 0 && typeof g_isOFP != 'undefined' && g_isOFP == '1';
            if (isAppCenter || isQZCenter) {
                setTimeout(function() {
                    var ifr = document.createElement('iframe');
                    ifr.frameBorder = '0';
                    ifr.width = ifr.height = '1';
                    ifr.style.cssText = 'position:absolute;left:0;top:0';
                    ifr.src = 'http://qzs.qq.com/qzone/biz/comm/widget/cookiematching/cm_helper.html#mod=cm';
                    document.body.appendChild(ifr);
                }, 10000);
            }
        } catch (err) {}
    }
    module.exports = run;
});
