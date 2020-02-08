var mySwiper = new Swiper('.swiper-container', {
  
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    
    510: {
      slidesPerView: 2,
      navigation: {
        nextEl: '.arrow',
      },
    },
    
    320: {
      slidesPerView: 1,
      navigation: {
      nextEl: '.arrow',
      },
    },
  }
  
});
$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(this).toggleClass("menu-btn_active");
    $(".header-menu").toggleClass("header-menu_active");
  });
  
});

