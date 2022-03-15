var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  
}
    $('.owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        center:true,
        autoplay: true,
        autoplayHoverPause:true,
        slideSpeed: 3000,
        paginationSpeed: 5000,
       smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    }) 
    /////////////////////////////////////////////////////////
var owl = $('.owl-products');
owl.owlCarousel();
$('#team-circle-left').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('#team-circle-right').click(function () {
    owl.trigger('next.owl.carousel');
});
//////////////////////////////////////////////////////
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
/////////////////////////////////////////
$('.owl-carousel1').owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    center:true,
    autoplay: true,
    autoplayHoverPause:true,
    slideSpeed: 3000,
    paginationSpeed: 5000,
   smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 

new WOW().init();
