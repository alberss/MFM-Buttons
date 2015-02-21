$(document).ready(function(){

    var delay = 0;
    $('i').each(function() {
        var i = $(this);
        setTimeout(function() {
          i.addClass('active');
        }, delay+=100);
    });

    $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e) {
        e.preventDefault();

        var index = $(document.body).data("index");
        var movement;

        if(e.originalEvent.wheelDelta >= 0 && index < 0)
             movement = index+100;
        else if(e.originalEvent.wheelDelta <= 0)
            movement = index-100;

        $('body').css({
            "-webkit-transform": "translateY("+(movement)+"vh)"
        });

        $('body').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
            $(document.body).data("index",movement);
        });
    });
});
