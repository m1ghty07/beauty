$(function () {

  $('.slider__inner').slick({
    slidesToScroll:1,
    slidesToShow:5,
    centerMode: true,
    centerPadding:'0px',
  });
});

$(function () {

  $("#stars").rateYo({
    rating: 5
  });

});