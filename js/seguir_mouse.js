var $cursor = $('.cursor');

function moveCursor(e) {
  $cursor.addClass('movimiento');
  
	TweenLite.to($cursor, 0.23, {
    left: e.pageX,
    top: e.pageY,
    ease: Power4.easOut
  });
  
  clearTimeout(timer);

   var timer = setTimeout(function() {
       $cursor.removeClass('movimiento');
   }, 300);
}

$(window).on('mousemove', moveCursor);