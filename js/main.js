$(document).ready(function () {

    // DOM Cache
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var $slideNumber = $('.slide-number');
    var $smallProgress = $('.progress-bar span');
    var $largeProgress = $('.vertical-progress-bar span');

    //Configuration
    var animationTime = 1000;
    var pauseTime = 3000;
    var slideCount = 1;
    var interval;


    function startSlider() {

        interval = setInterval(function(){
            $slideContainer.animate({'margin-left' : '-=100%'},
            animationTime, function(){
                $smallProgress.css('width', '0%');
                $largeProgress.css('height', '0%');

                slideCount++;
                if (slideCount === $slides.length) {
                    slideCount = 1;
                    $slideContainer.css('margin-left', 0);
                }
                $slideNumber.text('0' + slideCount);
                $smallProgress.animate({
                    'width' : '100%'
                }, 2000);
                $largeProgress.animate({
                    'height' : '100%'
                }, 2000);
            });
        
        }, pauseTime);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    function startPrev(e) {
        pauseSlider();
        slideCount--;

        if (slideCount === $slides.length) {
            slideCount = 1;
            $slideContainer.css('margin-left', '500%');
        }
        e.preventDefault();
        $slideContainer.animate({'margin-left' : '+=100%'},animationTime);
        $smallProgress.css('width', '0%');
        $largeProgress.css('height', '0%');
        startSlider();
    }

    function startNext(e) {
        e.preventDefault();
        $slideContainer.animate({'margin-left' : '-=100%'},animationTime);
        $smallProgress.css('width', '0%');
        $largeProgress.css('height', '0%');
        slideCount++;
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();

    $('.slide-prev').click(function(e){
        e.preventDefault();
    });

    $('.slide-next').click(function(e){
        e.preventDefault();
    });

    $('.slide-top').click(function(e){
        e.preventDefault();
    });

    $('.slide-down').click(function(e){
        e.preventDefault();
    });

});