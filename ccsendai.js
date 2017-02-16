$(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
        $('.header-bottom').addClass('fixed');
    } else {
        $('.header-bottom').removeClass('fixed');
    }
});