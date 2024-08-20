import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const fragment = document.createDocumentFragment();
const featuresSliderElement = document.querySelector('.slider--features');
let featuresSwiperElement;
let featuresSwiperWrapperElement;
let featuresSliderNavigationPrevElement;
let featuresSliderNavigationNextElement;

if (featuresSliderElement) {
  featuresSwiperElement = featuresSliderElement.querySelector('.slider__swiper');
  featuresSwiperWrapperElement = featuresSwiperElement.querySelector('.slider__wrapper');
  featuresSliderNavigationPrevElement = featuresSliderElement.querySelector('.swiper-button-prev');
  featuresSliderNavigationNextElement = featuresSliderElement.querySelector('.swiper-button-next');
}

const featuresSlider = new Swiper(featuresSwiperElement, {
  modules: [Navigation],
  slidesPerView: 'auto',
  initialSlide: 2,
  loop: true,
  init: false,
  allowTouchMove: false,
  spaceBetween: 30,
  slidesPerGroup: 2,
  centeredSlides: true,
  navigation: {
    nextEl: featuresSliderNavigationNextElement,
    prevEl: featuresSliderNavigationPrevElement,
  }
});

const cloneSlides = () => {
  const slides = featuresSwiperWrapperElement.querySelectorAll('.slider__slide');

  slides.forEach((slide) => {
    const cloneSlide = slide.cloneNode(true);
    fragment.appendChild(cloneSlide);
  });

  featuresSwiperWrapperElement.appendChild(fragment);
};

const initFeaturesSlider = () => {
  featuresSliderElement.classList.remove('slider--no-js');
  // if (window.innerWidth < 1440) {
  //   featuresSlider.destroy(true, true);
  // }

  if (window.innerWidth >= 1440) {
    cloneSlides();
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
