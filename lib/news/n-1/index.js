$(document).ready(function() {
    // matchHeight
    var highestBox = 0;
    $('.fekit-news-1.column', this).each(function(){
        if($(this).height() > highestBox) {
            highestBox = $(this).height();
        }
    });
    // $('.fekit-news-1 .column',this).height(highestBox);

    // Caroulsel
    $(function() {
        if ($('.fekit-news-1 .owl-carousel').length) {
            $('.fekit-news-1 .owl-carousel').owlCarousel({
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                items: 1,
                loop: true,
                center: false,
                padding: 10,
                margin: 20,
                navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
                nav: false,
                dots: false,
                autoplay: false,
                autoplayTimeout: 3000,
                autoplayHoverPause: false,
                callbacks: true,
                responsive: {
                    480: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3,
                        nav: false,
                        dots: true
                    },
                    1140: {
                        items: 3,
                        nav: false,
                        dots: false
                    }
                }
            });
        }

    });
});
