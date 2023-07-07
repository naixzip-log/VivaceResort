//main 
$(document).ready(function(){
    $(window).resize(function(){
        var h = $(window).height();
        
        $('main').height(h);
    });

    $(window).trigger('resize');
    
    
    //swiper
    var swiper = new Swiper('main .swiper-container', {
        pagination: {
            el: 'main .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: { 
            init: function(){ 
                $('main .table_cell > *').addClass('active');
            },
            slideChangeTransitionStart: function(){ 
                $('main .table_cell > *').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('main .table_cell > *').addClass('active');
            }
        }
    });
});


//play
$(document).ready(function(){
    $('.play dt').first().addClass('active');
    
    $('.play dt').click(function(){
        $('.play dt').removeClass('active');
        $(this).addClass('active');
    });
});

//story 
$(document).ready(function(){
    var swiper = new Swiper('.story .swiper-container', {
        pagination: {
            el: '.story .swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
        },
    });
});







