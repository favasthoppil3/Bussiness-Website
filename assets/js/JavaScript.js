$(".wed-img").slice(0,12).show()
        $(".wed-btn").on("click", function(){
            $(".wed-img:hidden").slice(0,10).slideDown()
            if ($(".wed-img:hidden").length == 0) {
                $(".wed-btn").fadeOut('slow')
            }
        })


        function changeBg(){
            var navbar = document.getElementById('navbar');
            var scrollvalue = window.scrollY;
           
            if(scrollvalue <100){
                navbar.classList.remove('bgColor');
            } else{
                navbar.classList.add('bgColor');
            }
        }
        window.addEventListener('scroll', changeBg);
        




        /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }




  function validateform() {
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if(name==null || name==""){
      alert('name box not be blank')
    

    }
    

  }

  (function() {
    "use strict";
 
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()
