$(document).ready(function () {
    
    
    // 주메뉴 모션 적용
    let nav = $('.nav');
    let headerMain = $('.header-main');
    let logo = $('.logo');
    nav.mouseenter(function(){
        $(this).addClass('nav-active');
    });
    headerMain.mouseleave(function(){
        nav.removeClass('nav-active');
    });
    logo.mouseenter(function(){
        nav.removeClass('nav-active');
    });

    // 상단이동 버튼
    $('.gotop').click(function(){
        $('html').animate({
            scrollTop: 0
        }, 500);
    });
    


    // 스크롤 기능
    let header = $('.header')    
    let w = $(window).width();
    if(w > 700) {
        fixHeader();
    }

    function fixHeader(){
        $(window).scroll(function(){
            let temp = $(window).scrollTop();
            if(temp > 0) {
                header.addClass('fix-active');
            } else {
                header.removeClass('fix-active');
    
            }
        });
    }

    // 모바일 메뉴
    let mBt = $('.m-bt');
    let mMenuBg = $('.m-menu-bg');
    let mMuenuWrap = $('.m-menu-wrap');
    let mBtClose = $('.m-bt-close');

    mBt.click(function(){
        mMenuBg.addClass('m-menu-active');
        mMuenuWrap.addClass('m-menu-active');
        
    });
    mBtClose.click(function(){
        mMenuBg.removeClass('m-menu-active');
        mMuenuWrap.removeClass('m-menu-active');
        
    });
    mMenuBg.click(function(){
        mMenuBg.removeClass('m-menu-active');
        mMuenuWrap.removeClass('m-menu-active');
        
    });

    
    
    // 화면 리사이징 처리
    $(window).resize(function(){
        w = $(window).width();
        if(w > 700) {
            mMenuBg.removeClass('m-menu-active');
            mMuenuWrap.removeClass('m-menu-active');
            fixHeader();
        }
    });
});


window.onload = function(){
    // visual slide
    let sw_visual = new Swiper('.sw-visual', {
        loop : true,
        autoplay : {
            delay: 2500,
            speed : 5000,
            disableOnInteraction: false,
          },
        navigation : {
            prevEl : ".sw-visual-prev",
            nextEl: ".sw-visual-next",
        }
        
    });
    
    
    // story slide
    let sw_story = new Swiper('.sw-story', {
        loop : true,
        slidesPerView : 2,
        autoplay : {
            delay: 2500,
            speed : 3000,
            disableOnInteraction: false,
          },
        navigation : {
            prevEl : ".sw-story-prev",
            nextEl: ".sw-story-next",
        },
        breakpoints : {
            700 :  {
                slidesPerView : 1,
            }
        }
        
    });


    
    // good slide
    let sw_good = new Swiper('.sw-good', {
        loop : true,
        slidesPerView : 1,
        navigation : {
            prevEl : ".sw-good-prev",
            nextEl: ".sw-good-next",
        },
        pagination : {
            el : '.sw-good-pg',
            clickable : true
        }
        
    });
    
}