/**
 * Created by bipon on 12/8/14.
 */

    //------------------------------init fitText-----------------------
$('h1').fitText(1.8,{minFontSize:'30px',maxFontSize:'56px'});
$('h2').fitText(1.8,{minFontSize:'30px',maxFontSize:'52px'});
$('.main-title-content p').fitText(1.8,{minFontSize:'16px',maxFontSize:'23px'});

//------------------------------init background image-----------------------
$.backstretch([
    "img/slider/unsplash_52d8277ccad75_1.JPG",
    "img/slider/c86b8baa.jpg",
    "img/slider/bg_photo.png",
    "img/slider/2dc933e3.jpg"
], {
    fade: 750,
    duration: 3000
});


//------------------------------Menu hover script-----------------------
$('.navigation').hover(
    function(){
        var $this = $(this);
        expand($this);
    },
    function(){
        var $this = $(this);
        collapse($this);
    }
);
function expand($elem){
    $elem.stop(true,true).animate({width:'150px'}, 500).find('.text').delay(100).fadeIn(100);
}
function collapse($elem){
    $elem.stop(true,true).animate({width:'50px'}, 500).find('.text').fadeOut(100);
}