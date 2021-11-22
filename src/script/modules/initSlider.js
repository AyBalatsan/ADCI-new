import Swiper from 'swiper/bundle';


export default function initSlider(){
// let widthWin = window.outerWidth;
  
  // else if(widthWin >= 768){
  //   // collectivesSwiper.disable()
  //   // serviceSwiper.disable()
  //   // fundSwiper.disable()
  //   // partnersSwiper.disable()
  // }
  const previewSwiper = new Swiper('.preview__swiper', {
    slidesPerView: 1,
    loop: true,
    initialSlide: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.preview__paginations',
      bulletClass: "preview__toggle",
      bulletActiveClass: "preview__toggle--active",
      clickable: true,  
    },
  });  
}