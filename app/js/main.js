$(function(){
$(document).scroll(function (e) {
  $(window).scrollTop() > 60 ?
    $('.header__top').addClass('header-fixed') :
    $('.header__top').removeClass('header-fixed');
});
$('.slider').slick({
  dots: true,
  focusOnSelect: true,
  arrows: true,
  infinite: false,
  appendDots: '.slider-navigation__dots',
  // appendDots: '.slider-navigation',
  appendArrows: '.slider-navigation',
  nextArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--prev"><svg class="slider-arrow__arrow-left" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
  prevArrow: '<button type="button" class="slider-navigation__arrow slider-navigation__arrow--next"><svg class="slider-arrow__arrow-right" fill="#000"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg></button>',
});
}); 