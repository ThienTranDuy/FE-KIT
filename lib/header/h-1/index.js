$(document).ready(function() {
    // Scroll Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 120) {
            $("header").addClass("active");
            $("header nav .navbar-brand img").attr("src","./asset/img/saladci/logo-flex-full.png");
        } else {
            $("header").removeClass("active");
            $("header .nav-link a:after").attr("background-size","5px");
            $("header .headertop").attr("background-size","5px");
            $("header nav .navbar-brand img").attr("src","./asset/img/saladci/logo-min-reverse.png");
        }
    });

    // Button toggle
    $('.fekit-header-h-1 button.navbar-toggler').on('click', function() {
        if( $('.fekit-header-h-1 button.navbar-toggler svg').hasClass('fa-bars') === true ) {
            $('.fekit-header-h-1 button.navbar-toggler svg').removeClass('fa-bars');
            $('.fekit-header-h-1 button.navbar-toggler svg').addClass('fa-times');
            $('.fekit-header-h-1 .navbar-toggler svg').css("color","white");
            $('.fekit-header-h-1 .overlay').css({"opacity": "1", "z-index": "91", "position": "fixed"});
            $('.fekit-header-h-1 .navbar-toggler').css("z-index", "92");
        } else if( $('.fekit-header-h-1 button.navbar-toggler svg').hasClass('fa-times') === true ) {
            $('.fekit-header-h-1 button.navbar-toggler svg').removeClass('fa-times');
            $('.fekit-header-h-1 button.navbar-toggler svg').addClass('fa-bars');
            $('.fekit-header-h-1 .navbar-toggler svg').css("color","#ffffff");
            $('.fekit-header-h-1 .overlay').css({"opacity": "0", "z-index": "-1", "position": "initial"});
        }
    });

    // Off canvas
    $('.fekit-header-h-1 .navbar-toggler').on('click', function () {
        $('.fekit-header-h-1 .navbar-collapse').toggleClass('offcanvas-collapse--open');
    });

    // Show form search
    $('.fekit-header-h-1 .menutool__search').on('click', function () {
        $('.fekit-header-h-1__search').addClass('search__open');
        $('.fekit-header-h-1 .overlay').css({"opacity": "1", "z-index": "91", "position": "fixed"});
        $('.fekit-header-h-1 .navbar-toggler').css("z-index", "90");
    });

    // Off search
    $('.fekit-header-h-1__search button').on('click', function () {
        $('.fekit-header-h-1__search').removeClass('search__open');
        $('.fekit-header-h-1 .overlay').css({"opacity": "0", "z-index": "-1", "position": "initial"});
    });

    // Show form shop
    $('.fekit-header-h-1 .menutool__shop').on('click', function () {
        $('.fekit-header-h-1__shop').addClass('shop__open');
        $('.fekit-header-h-1 .overlay').css({"opacity": "1", "z-index": "91", "position": "fixed"});
        $('.fekit-header-h-1 .navbar-toggler').css("z-index", "90");
    });

    // Off shop
    $('.fekit-header-h-1__shop button').on('click', function () {
        $('.fekit-header-h-1__shop').removeClass('shop__open');
        $('.fekit-header-h-1 .overlay').css({"opacity": "0", "z-index": "-1", "position": "initial"});
    });

    // Click on overlay
    $('.fekit-header-h-1 .overlay').on('click', function () {
        if( $('.fekit-header-h-1 .navbar-collapse').hasClass('offcanvas-collapse--open') === true ) {
            $('.fekit-header-h-1 .navbar-collapse').removeClass('offcanvas-collapse--open');
            $('.fekit-header-h-1 button.navbar-toggler svg').removeClass('fa-times');
            $('.fekit-header-h-1 button.navbar-toggler svg').addClass('fa-bars');
            $('.fekit-header-h-1 .navbar-toggler svg').css("color","#ffffff");
        }
        $('.fekit-header-h-1__shop').removeClass('shop__open');
        $('.fekit-header-h-1__search').removeClass('search__open');
        $('.fekit-header-h-1 .overlay').css({"opacity": "0", "z-index": "-1", "position": "initial"});
    });

    // Change img logo when mobile
    if ( $(window).width() <= 1200 ) {
        $('.headermain').children().removeClass('container');
    } else {
        $('.headermain').children().addClass('container');
    };


    ////////////////////////////////////////////////////////////////
    // DEVEVLOP
    ////////////////////////////////////////////////////////////////
    $(window).resize(function() {
        // Change img when mobile
        if ( $(window).width() <= 1200 ) {
            $('.headermain').children().removeClass('container');
        } else {
            $('.headermain').children().addClass('container');
        };
    })
});
