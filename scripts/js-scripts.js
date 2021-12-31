function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

$(document).ready(function () {
  $('body').bind('touchmove', function (e) { e.preventDefault() });
  setTimeout(function () {

    $('#a_anchor1').click(function () {
      $("#btn-off").removeClass("on").addClass("off");
      $("#btn-on").removeClass("off").addClass("on");
    });

    $('#a_anchor2').click(function () {
      $("#btn-on").removeClass("on").addClass("off");
      $("#btn-off").removeClass("off").addClass("on");
    });

    var divs = $('.span-scroll');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        dir = 'down';
      } else {
        dir = 'up';
      }
      // find currently visible div :
      div = -1;
      divs.each(function (i) {
        if (div < 0 && ($(this).offset().top >= $(window).scrollTop())) {
          div = i;
        }
      });
      if (dir == 'up' && div > 0) {
        div--;
      }
      if (dir == 'down' && div < 1) {
        div++;
      }

      if (div == '0') {
        $("#btn-off").removeClass("on").addClass("off");
        $("#btn-on").removeClass("off").addClass("on");
      }

      if (div == '1') {
        $("#btn-on").removeClass("on").addClass("off");
        $("#btn-off").removeClass("off").addClass("on");
      }

      $('html,body').stop().animate({
        scrollTop: divs.eq(div).offset().top
      }, 200);
      return false;
    });
    $(window).resize(function () {
      $('html,body').scrollTop(divs.eq(div).offset().top);
    });

    // $('body').removeClass('stop-scrolling');
    $('body').unbind('touchmove');
  }, 3550);

});