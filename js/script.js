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

    
    


    // 스크롤 기능
    let header = $('.header')
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
        let w = $(window).width();
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
            delay: 2000,
            disableOnInteraction: false,
          },
        navigation : {
            prevEl : ".sw-visual-prev",
            nextEl: ".sw-visual-next",
        }
        
    });
}