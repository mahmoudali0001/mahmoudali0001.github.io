$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        rtl: true,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});

$(".bnt-style").click(function(){
    $(".show-hide").show(1000, function(){$(".show-hide").toggle();})
})

$(function(){
    $('.one-time').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:1,
        rtl:true,
        centerMode: true,
        centerPadding: '0',
      });
})
