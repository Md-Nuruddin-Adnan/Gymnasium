$(function(){

  //banner slide
  $('.banner-slick').slick({
    dots: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
  });

  //youtube video
  $("a.bla-2").YouTubePopUp( { autoplay: 0 } );

  //gallery images zoom with venobox
  $('.venobox').venobox({
    border: '10px',
    spinner: 'cube-grid',
    spinColor: '#e23e38'
  }); 
  
  //team slide
  $('.team-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //testimonial slide
  $('.client-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  //counter up 
  $('.counter').counterUp({
    delay: 20,
    time: 3000,
  });

  //classes tab with colorfull tab
  $('#colorful').colorfulTab({
    overlayColor: "#000",
    overlayOpacity: ".6"
  });

  //sister logo slide
  $('.sis-logo-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 322,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });
  
    
 
}); 

