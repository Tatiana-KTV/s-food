$(function(){
$(document).scroll(function (e) {
  $(window).scrollTop() > 60 ?
    $('.header__top').addClass('header-fixed') :
    $('.header__top').removeClass('header-fixed');
});
$('.slider').slick({
  dots: true,
  arrows: true,
  infinite: false,
  focusOnSelect: true,
});
});