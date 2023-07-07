//gnb
$(document).ready(function(){
    var gnbbg = $('<div class="subnavbg"></div>');
        $('header').after(gnbbg);
    
    
    
    function pcGnb(){
        $('.gnb .top_nav').off('click'); 
        
        $('.gnb').hover(function(){
            $('.sub_nav, .subnavbg').stop().slideDown('fast');
        },function(){
            $('.sub_nav, .subnavbg').stop().slideUp('fast');
        });
    }
    
    
    function mGnb(){
        $('.gnb').off('mouseenter');
        $('.gnb').off('mouseleave'); 
        
        $('.panel_icon a').off('click');
        
        $('.panel_icon a').click(function(){
            $(this).toggleClass('active');
            $('.gnb, .t_nav').toggleClass('active');
            
            var has = $(this).hasClass('active'); 
            
            if(!has){ 
                $('body').css('overflow','visible');
                $('.gnb .sub_nav').slideUp(0); 
            }else{ 
                $('body').css('overflow','hidden'); 
            }
            
            
        });
        
        $('.gnb .top_nav').off('click'); 
        $('.gnb .top_nav').click(function(){
            var is = $(this).next().is(':hidden');
            
            if(is){
                $('.gnb .sub_nav').stop().slideUp('fast');
                $(this).next().stop().slideDown('fast');
            }else{
                $(this).next().stop().slideUp('fast');
            }
        });
        
    }
    
    $(window).resize(function(){
        $('.gnb, .t_nav, .panel_icon a').removeClass('active');
        $('.sub_nav').slideUp(0);
        
        var w = window.innerWidth;
        
        if(w >= 1024){ 
            pcGnb(); 
        }else{ 
            mGnb(); 
        }
    });
    
    $(window).trigger('resize');
    
});
