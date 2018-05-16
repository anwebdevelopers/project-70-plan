$(function() {

    'use strict';

    /*******************************************************/
    //CAROUSEL
    /*******************************************************/
    $('.kinds-slider').addClass('owl-carousel').owlCarousel({
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

    /*******************************************************/
    //Parallax Effect
    /*******************************************************/
    $.Scrollax();

    /*******************************************************/
    //ACCORDION
    /*******************************************************/
     $('.accordion').each(function() {
        var $this = $(this);
        $this.children('.accordion__box').hide();
    }).on('click', '.accordion__title', function(e) {
        e.stopPropagation();
        var $this = $(this);
        $this.closest('.accordion').hasClass('active') ? $this.closest('.accordion').removeClass('active').children('.accordion__box').slideUp(200) : $this.closest('.accordion').addClass('active').children('.accordion__box').slideDown(200).end().siblings().removeClass('active').children('.accordion__box').slideUp(200);
    });

    /*******************************************************/
    //Яндекс карта
    /*******************************************************/
    if(typeof ymaps === 'object') {
        ymaps.ready(function() {
            var myMap;
            myMap = new ymaps.Map('map', {
                    center: [57.631844, 39.869668],
                    zoom: 14,
                    controls: [],
                    behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
            myMap.controls.add('zoomControl', {
                size: 'small',
                position: {
                    top: 'auto',
                    left: 10,
                    bottom: 50
                }
            }),
            myMap.geoObjects.add(new ymaps.Placemark([57.631844, 39.869668], {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon-map.svg',
                iconImageSize: [34, 48],
                iconImageOffset: [-17, -48]
            }));
            function disableDrag() {
                var w = $(window).width();
                w <= 992 ? myMap.behaviors.disable('drag') : myMap.behaviors.enable('drag');
            }
            disableDrag();
            $(window).resize(disableDrag);
        });
    }

    /*******************************************************/
    //Projects Gallery
    /*******************************************************/

    $('.gallery').each(function() {
        $(this).find('.gallery-thumbs').on('click', '.gallery-thumbs-item:not(.active)', function() {
            var imgPath = $(this).children('img').attr('src');
            var oldImage = $(this).closest('.gallery').find('.gallery-img img');
            var newImage = $('<img src="' + imgPath + '">');
            newImage.hide();
            $(this).closest('.gallery').find('.gallery-img').append(newImage);
            newImage.fadeIn(600);
            oldImage.fadeOut(600, function() {
                $(this).remove();
            });
            $(this).addClass('active').siblings().removeClass('active');
        });
        $(this).find('.gallery-thumbs-item:first').click();
    });

    /*******************************************************/
    //TABS
    /*******************************************************/

    $('.tabs').each(function() {
        $(this).children('.tabs__item').not(':first').hide(),
        $(this).children('.tabs__buttons').on('click', 'button:not(.active)', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('.tabs').children('.tabs__item').stop().slideUp(300).eq($(this).index()).stop().slideDown(300);
        }).children('button').first().addClass('active');
    });
    
    //var simpleBar = new SimpleBar(document.getElementById('placeList'));
});
