$(document).ready(function() {
    $('.fekit-slider-1 .owl-carousel').owlCarousel({
        // Hiệu ứng
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        // Phím chuyển slide
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        // Hình ảnh
        items: 1,
        loop: true,
        center: true,
        autoplay: false,
        autoplayTimeout: 3000,
        callbacks: true,
        mouseDrag: true,
        lazyLoad: true,
        nav: false,
        dots: false,
        responsive: {
            576: {
                nav: false,
                dots: true,
            },
            768: {
                nav: true,
                dots: false,
            }
        }
    });
});
