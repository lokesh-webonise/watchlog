/**
 * Created by Sachidananda on 20-Sep-14.
 */
function projectListBar(){
    $('.projectListBar').on('click',function(){
        $('.sideBar').animate(width, 320)
    })
}
function logContainer(){
    var screenWidth= $(window).width();
    var sideBar = $('.sideBar').width()
    $(".logSection").css({'max-width': screenWidth-sideBar})
}
function listSlideManage(){
    $(".projectName").on('click',function(){
        $(".projectName").next('ul').slideUp();
        if( $(this).next('ul').css('display') == 'none') {
            $(this).next('ul').slideDown();
        }
    })
}

$(document).ready(function(){
    listSlideManage();
    logContainer();
    $(window).resize(function(){
       logContainer();
    });
});