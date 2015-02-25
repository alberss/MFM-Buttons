$(window).load(function() {
    $(".loader-container").fadeOut("slow");

    var delay = 0;

    $('i').each(function() {
        var i = $(this);
        setTimeout(function() {
          i.addClass('active');
        }, delay+=100);
    });

    $('.leches').addClass('active');
});

$(document).ready(function(){
    $('#hamburguer').click(function(){
        $('#side-menu').toggleClass('active');
    });
});
