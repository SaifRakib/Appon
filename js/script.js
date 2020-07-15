$(function ($) {
    'use strict';


    // pre loader start
    $(window).load(function () {
        $('.pre_loader').delay(1000).fadeOut(500);
    });

    //banner slider start
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
    });
    //menu fix
    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();


        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }

    });
    //screenshot slider start

    $('.screen_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
    //venobox video start
    $('.venobox').venobox();

    //tp_bm start
    $('.tp_bm').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2500);
    });

    $(window).scroll(function () {
        var btscroll = $(this).scrollTop();


        if (btscroll > 300) {
            $('.tp_bm').fadeIn();
        } else {
            $('.tp_bm').fadeOut();
        }
    });


    // feedback slider strat

    $('.feedback_text_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.feedback_img_slider',
    });
    $('.feedback_img_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback_text_slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });



});
