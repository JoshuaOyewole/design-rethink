//DYNAMIC COPYRIGHT YEAR
document.getElementById('year').innerText = new Date().getFullYear();

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  $(document).ready(() => {
    $('#slideshow .slick').slick({
        autoplay: true,
        autoplaySpeed: 500, // autoplaySpeed: 1000, or             autoplaySpeed: 2000,
        dots: true,
    });
});

$(document).ready(() => {
    $('#userReview .slick').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
    });
});