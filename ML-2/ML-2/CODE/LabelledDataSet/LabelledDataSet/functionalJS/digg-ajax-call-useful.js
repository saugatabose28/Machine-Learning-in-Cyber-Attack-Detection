

window.onerror = function (errorMsg, url, line) {
var errorDataProvider = $.ajax({
url : '/api/miccheck.json',
type: 'POST',
data : {
m : errorMsg,
u : url,
l : line
}
});
};

window.BS = {
config : { FB_APP_ID : '123277257693179', v : '1.6.0' },
features : {"search": true, "polling_scores": false, "saved_stories": true, "homepage_new_stories": true, "signin": true, "submit_link": true, "digg_deeper": true, "readlater": true, "triple_lift": true, "homepage_popular_stories": true, "homepage_new_stories_polling": false, "digg": true}
};

