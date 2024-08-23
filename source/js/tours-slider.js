import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const slidesPerViewCount = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};

const spaceBetweenValue = {
  tablet: 18,
  desktop: 30,
};

const toursSliderElement = document.querySelector('.slider--tours');
let toursSliderNavigationPrevElement;
let toursSliderNavigationNextElement;
let toursSwiperElement;

if (toursSliderElement) {
  toursSwiperElement = toursSliderElement.querySelector('.slider__swiper');
  toursSliderNavigationPrevElement = toursSliderElement.querySelector('.swiper-button-prev');
  toursSliderNavigationNextElement = toursSliderElement.querySelector('.swiper-button-next');
}

const toursSlider = new Swiper(toursSwiperElement, {
  modules: [Navigation],
  slidesPerView: slidesPerViewCount.mobile,
  loop: false,
  init: false,
  navigation: {
    nextEl: toursSliderNavigationNextElement,
    prevEl: toursSliderNavigationPrevElement,
  },
  breakpoints: {
    768: {
      slidesPerView: slidesPerViewCount.tablet,
      spaceBetween: spaceBetweenValue.tablet,
    },
    1440: {
      slidesPerView: slidesPerViewCount.desktop,
      spaceBetween: spaceBetweenValue.desktop,
      allowTouchMove: false,
    },
  },
});

const initToursSlider = () => {
  if (toursSliderElement) {
    toursSlider.init();
  }
};

export { initToursSlider };
