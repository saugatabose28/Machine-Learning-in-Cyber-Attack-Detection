
var _ua = navigator.userAgent;
var locDomain = 'vk.com'.match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/)[0];
if (/opera/i.test(_ua) || !/msie 6/i.test(_ua) || document.domain != locDomain) {
  document.domain = locDomain;
}
parent.__qlClear();
parent.onReLoginFailed(true);
