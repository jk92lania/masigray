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
    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        if(temp > 0) {
            header.addClass('fix-active');
        } else {
            header.removeClass('fix-active');

        }
    });
});

window.onload = function(){

}