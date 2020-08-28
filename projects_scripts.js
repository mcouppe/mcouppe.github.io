$(document).ready(function () {
  $(".slickContainer").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    respondTo: "slider",
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><img class='carouselBtn btnLeft' src='./toTheLeftArrow.png' alt='button to go left'/></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><img class='carouselBtn btnRight' src='./toTheLeftArrow.png' alt='button to go right'/></button>",
  });
});
