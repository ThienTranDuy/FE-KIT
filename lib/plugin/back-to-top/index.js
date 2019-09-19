$(document).ready(function() {
        var backToTop = function() {
        var scrollTop = $(window).scrollTop();
        var screenScroll = $(window).height()/2;
        if (scrollTop > screenScroll) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
        };

        backToTop();

        $(window).on('scroll', function() {
            backToTop();
        });

        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
});
