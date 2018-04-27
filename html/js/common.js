$(function() {

    'use strict';

    /*******************************************************/
    //CAROUSEL
    /*******************************************************/
    $('.kinds__box').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        nav: true,
        navText: '',
        stagePadding: 20,
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,
            },
            361: {
                items: 2,
                stagePadding: 10,
            },
            641: {
                items: 3
            },
            769: {
                items: 4
            }
        }
    });

    /***********************************************************/
    //Parallax Effect
    /***********************************************************/
    $.Scrollax();

});
