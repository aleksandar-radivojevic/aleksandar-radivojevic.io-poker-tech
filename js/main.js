$(document).ready(function () {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;


    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-text-align-right"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });


    $(document).ready(function () {

        $('html, body').hide();

        if (window.location.hash) {

            setTimeout(function () {

                $('html, body').scrollTop(0).show();

                $('html, body').animate({

                    scrollTop: $(window.location.hash).offset().top

                }, 1000)

            }, 0);

        } else {

            $('html, body').show();

        }

    });


// If you want to add testimonials slider just wrap everything with div with a class bellow

    // $('.active-testimonial').owlCarousel({
    //     items: 2,
    //     margin: 30,
    //     autoplay: true,
    //     loop: true,
    //     dots: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         480: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         900: {
    //             items: 2,
    //         }

    //     }
    // });


// end slider testimonial


    // $(document).ready(function () {
    //     $('#mc_embed_signup').find('form').ajaxChimp();
    // });



// Activate WOW animation

    new WOW().init();

// Scroll to top button

    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });


// Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
});


// end scroll to top

// Switch 

const textMonth = document.querySelector('#switch-text1');
const textYear = document.querySelector('#switch-text2');
const switchTime = document.querySelectorAll('.switch-time');
const priceLow = document.querySelector('#switch-price-low');
const priceHigh = document.querySelector('#switch-price-high');

document.querySelector("input[type=checkbox]").addEventListener("change", function () {

    for (let i = 0; i < switchTime.length; i++) {
        switchTime[i].textContent = 'year';
    }

    if (this.checked) {
        textYear.style.color = 'red';
        textMonth.style.color = 'black';
        priceLow.textContent = '39';
        priceHigh.textContent = '99';

        for (let i = 0; i < switchTime.length; i++) {
            switchTime[i].textContent = 'Year';
        }



    } else {
        textYear.style.color = 'black';
        textMonth.style.color = 'red';
        textMonth.classList.remove = 'swc';
        priceLow.textContent = '6';
        priceHigh.textContent = '16';

        for (let i = 0; i < switchTime.length; i++) {
            switchTime[i].textContent = 'Month';
        }
    }

});

// end switch

// contact form

$(document).ready(function () {
    // Test for placeholder support
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            switch (e.type) {
                case 'keyup':
                    {
                        $parent.toggleClass('js-hide-label', $this.val() == '');
                    }
                    break;
                case 'blur':
                    {
                        if ($this.val() == '') {
                            $parent.addClass('js-hide-label');
                        } else {
                            $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                        }
                    }
                    break;
                case 'focus':
                    {
                        if ($this.val() !== '') {
                            $parent.removeClass('js-unhighlight-label');
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }
});

// end contact


// faq

$(".open").click( function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
    
    answer.slideToggle(200);
    
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    }
    else {
      trigger.addClass("faq-o");
    }
    
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    }
    else {
      container.addClass("expanded");
    }
  });

  // faq active state


  var topic = document.querySelectorAll('.topic');
  var question = document.querySelectorAll('.question');

  function toggleAccordion() {
      this.classList.toggle('actv');
  };

  question.forEach(item => item.addEventListener('click', toggleAccordion));

  function toggleAccordion2() {
    this.classList.toggle('actv2');
};

topic.forEach(item => item.addEventListener('click', toggleAccordion2));

// end faq


//login modal

$(window, document, undefined).ready(function () {


    // Show overlay & Open modal

    $(".login-modal-overlay").click(function () {
        $(this).fadeOut(200);
    });
    $(".openb").click(function () {
        $(".login-modal-overlay").fadeIn(200);
    });
    $(".login-modal").click(function (event) {
        event.stopPropagation();
    });


    // Input label

    $('input').blur(function () {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });
});

// youtube video

  $(document).ready(function() {
    $('#popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
