$('.slide-one-item-alt').owlCarousel({
      center: false,
      items: 1,
    dots:false,
      loop: true,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      pauseOnHover: true,
      onDragged: function(event) {
        console.log('event : ',event.relatedTarget['_drag']['direction'])
        if ( event.relatedTarget['_drag']['direction'] == 'left') {
          $('.slide-one-item-alt-text').trigger('next.owl.carousel');
        } else {
          $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
        }
      }
    });
    
    
    $('.slide-one-item-alt-text').owlCarousel({
      center: false,
      items: 1,
      dots:false,
      loop: true,
      margin: 0,
      smartSpeed: 2000,
      autoplay: true,
      pauseOnHover: true,
      onDragged: function(event) {
        console.log('event : ',event.relatedTarget['_drag']['direction'])
        if ( event.relatedTarget['_drag']['direction'] == 'left') {
          $('.slide-one-item-alt').trigger('next.owl.carousel');
        } else {
          $('.slide-one-item-alt').trigger('prev.owl.carousel');
        }
      }
    });

    


    $('.custom-next').click(function(e) {
      e.preventDefault();
      $('.slide-one-item-alt').trigger('next.owl.carousel');
      $('.slide-one-item-alt-text').trigger('next.owl.carousel');
    });
    
    $('.custom-prev').click(function(e) {
      e.preventDefault();
      $('.slide-one-item-alt').trigger('prev.owl.carousel');
      $('.slide-one-item-alt-text').trigger('prev.owl.carousel');
    });


  
  $(document).ready(function(){
    $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function(){
     $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        if($(window).scrollTop() > 10){
          $('#header').addClass('header-active');
        }else{
          $('#header').removeClass('header-active');
        }
    });
  });

  let daysItem = document.querySelector("#days");
  let hoursItem = document.querySelector("#hours");
  let minItem = document.querySelector("#min");
  let secItem = document.querySelector("#sec");
  
  
  let countDown = () => {
    let futureDate = new Date("1 Jan 2021");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    //console.log(myDate);
  
    let days = Math.floor(myDate / 86400/ 60 / 60 / 24);
  
    let hours = Math.floor(myDate / 3600 / 60 / 60) % 24;
  
    let min = Math.floor(myDate / 1000 / 60) % 60;
  
    let sec = Math.floor(myDate / 1000) % 60;
  
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
  }
  
  countDown()
  
  setInterval(countDown, 1000)
  
  var $owl = $('#carousel1');
$owl.children().each(function( index ){
  $(this).attr('data-position', index)
});
$('#carousel1').owlCarousel({
  loop:true,
 center:true,
  margin:0,
  autoplay:true,
  responsiveClass:true,
  nav: false,
  responsive:{
    0: {
      items: 1
    },
    680: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$(document).on('click', '.owl-item>div', function(){
  var $speed = 1000;
  $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
});  


// go to top
const scrollTop = document.querySelector(".scrollTop"); 
	       
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        scrollTop.classList.add("active");
    } else{
        scrollTop.classList.remove("active");  
    }
})

$('.clients-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: 'linear',
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }

  }
});