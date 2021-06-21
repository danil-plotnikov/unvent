$('[data-fancybox="map"]').fancybox({});

$('.header-burger').click(function() {
    $('.nav').toggleClass('nav-active');
    $(this).toggleClass('header-burger__active')
});