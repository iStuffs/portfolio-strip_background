$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  $('#bg-scroll').css('background-position', '90% -' + wScroll + 'px');
});
