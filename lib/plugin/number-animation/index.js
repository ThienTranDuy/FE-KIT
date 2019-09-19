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


        function runNumber() {
            $('.count__number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).data().to
                }, {
                    duration: 3000,
                    step: function (now) {
                        $(this).text(this.Counter.toFixed(0));
                    }
                })
            });
        }

        function runRoot() {
            console.log('zz');
        }

        $(window).scroll(function(){
            var $windowScroll = $(window).scrollTop();
            var $numberAnimation = $("#number-animation").offset().top;

            console.log($windowScroll);
            console.log($numberAnimation);

            if( ($windowScroll > 7200) && ($windowScroll < 7250) ) {
                console.log('aa')
                return runNumber();
            } else {
                return runRoot();
            }

        })


});
