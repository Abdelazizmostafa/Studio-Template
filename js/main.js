$(function () {
  'use strict';
  // Adjust Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  // Featured Work Shuffle
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-imgs .col-md').css('opacity', 1);
    } else {
      $('.shuffle-imgs .col-md').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });

  //Adding Nice Scroll To  Page
  $("body").niceScroll({
    cursorcolor:"#ffe056",
    cursorwidth:"6px",
    cursorborder:"none"       
   });

      // Caching The Scroll Top Element
      var scrollButton = $("#scroll-top");
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    // Click On Button To Scroll Top
    scrollButton.click(function () { 
        $("html,body").animate({ scrollTop : 0 }, 600); 
    });

});
