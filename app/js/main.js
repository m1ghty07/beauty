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
    arrows:false,
    dots:true,
  });
});

$(function () {

  $('.stars').rateYo({
    rating: 3.6,
    starWidth: "12px",
  });

});
