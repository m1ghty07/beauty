
$('.tabs').each(function () {
  let ths = $(this);
  ths.find('.program__block').not(':first').hide();
  ths.find('.tabs__item').click(function () {
    ths.find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
    ths.find('.program__block').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');
});

$(function () {

  $('.slider__inner').slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0',
  });

  $('.slider-bottom__inner').slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    arrows: false,
    dots: true,
  });
});

$(function () {

  $('.stars').rateYo({
    rating: 3.6,
    starWidth: "12px",
  });

});


$(function () {

  $('.program__spoiler-title').click(function(event) {
    $(this).toggleClass('active');
    $('.program__spoiler-body').slideToggle(300);
  });

});