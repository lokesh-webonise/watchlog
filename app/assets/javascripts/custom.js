/**
 * Created by Sachidananda on 20-Sep-14.
 */
function logContainer(){
    var contHead=$('.content-header').height();
    var jumbTurn=$('.page-content .jumbotron').height();
    var winHeight=$(window).height();
    $('.logContainer').css({'height': winHeight-(contHead+jumbTurn+10)});

}
$(document).ready(function(){
    $(window).resize(function(){
        logContainer();
    })
    logContainer();
    /*Menu-toggle*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

    /*Scroll Spy*/
    $('body').scrollspy({ target: '#spy', offset:80});

    /*Smooth link animation*/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    $('.dropdown-toggle').dropdown();
})
