$(document).ready(function(){

$('.slides_inner_part').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots:false,
  autoplay:true,
  arrows:false,
  pauseOnHover:true,
  responsive: [
		{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
		arrows:false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:false
      }
    }
	]
});

});