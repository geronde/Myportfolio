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


//form validation
  //update this with your js_form selector
    var form_id_js = "myForm";

    var data_js = {
        "access_token": "7si74ohfcsl7qnxyk6jk8mkh"
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
        var message = document.querySelector("#" + form_id_js + " [name='text']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
