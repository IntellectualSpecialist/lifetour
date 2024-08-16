import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const featuresSliderElement = document.querySelector('.slider--features');
let featuresSwiperElement;
let featuresSliderNavigationPrevElement;
let featuresSliderNavigationNextElement;

if (featuresSliderElement) {
  featuresSwiperElement = featuresSliderElement.querySelector('.slider__swiper');
  featuresSliderNavigationPrevElement = featuresSliderElement.querySelector('.swiper-button-prev');
  featuresSliderNavigationNextElement = featuresSliderElement.querySelector('.swiper-button-next');
}

const featuresSlider = new Swiper(featuresSwiperElement, {
  modules: [Navigation],
  slidesPerView: 'auto',
  loop: false,
  init: false,
  allowTouchMove: true,
  spaceBetween: 30,
  centeredSlides: true,
  initialSlide: 2,
  slidesPerGroup: 2,
  navigation: {
    nextEl: featuresSliderNavigationNextElement,
    prevEl: featuresSliderNavigationPrevElement,
  }
});

const initFeaturesSlider = () => {
  featuresSwiperElement.classList.remove('slider__swiper--no-js');
  // if (window.innerWidth < 1440) {
  //   featuresSlider.destroy(true, true);
  // }

  if (window.innerWidth >= 1440) {
    featuresSlider.init();
  }
  // } else {
  //   if (featuresSlider) {
  //     featuresSlider.destroy();
  //   }
  // }
};

// const onWindowResize = () => {
//   console.log(featuresSlider !== undefined);

//   if (window.innerWidth >= 1440) {
//     if (!featuresSlider) {
//       createSlider();
//       featuresSlider.init();
//     }
//   } else {
//     featuresSlider.destroy();
//   }
// };

// initFeaturesSlider();
// window.addEventListener('resize', onWindowResize);

export { initFeaturesSlider };
