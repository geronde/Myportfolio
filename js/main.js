$('.hamburger').click(function(event) {
    $(this).toggleClass('is-active');
    $('nav ul').toggleClass('invisible');
    if ($('.nav').hasClass('open') == false)
        $('.nav').addClass('open');
    else $('.nav').removeClass('open');

});

$('.nav li a').click(function(event) {
    /* Act on the event */
    $('.hamburger').toggleClass('is-active');
    $('nav ul').toggleClass('invisible');
    if ($('.nav').hasClass('open') == false)
        $('.nav').addClass('open');
    else $('.nav').removeClass('open');
});

//scroll to check portfolio
$(".action_call").click(function() {
    $('html,body').animate({
            scrollTop: $("#mywork").offset().top
        },
        'slow');
});
//floating 
$('.portfolio').addClass('clearfix');


//slider
var mobile_devices_mq = window.matchMedia("(max-width:1024px)");

debugger;
var url = window.location.href;
var start = url.substr(url.indexOf("#") + 1);
if (mobile_devices_mq.matches) {
    var mobile_swiper = new Swiper('.swiper-container', {
        initialSlide: start,
        direction: 'horizontal',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        keyboardControl: true,

    });
    $('.main-menu').css('margin', '0 auto');
} else {

    //info
    $('.information, a[href="#about_me"]').on('click', function(event) {

        $('#about_me').css('visibility', 'visible').addClass('fadeInRight').removeClass('fadeOutLeft');
        $('.close_section').css('visibility', 'visible');

    });
    //close the about me section
    $('.close_section').click(function(event) {
        /* Act on the event */
        $('#about_me').css('visibility', 'hidden').addClass('fadeOutLeft').removeClass('fadeInRight');
    });

    var large_devices = new Swiper('.swiper-container', {
        initialSlide: start,
        direction: 'vertical',
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        keyboardControl: true,

        paginationBulletRender: function(swiper, index, className) {
            return '<span class="' + className + '"></span>';
        }



    });


}

