import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

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
  slidesPerView: 1,
  loop: false,
  init: false,
  navigation: {
    nextEl: toursSliderNavigationNextElement,
    prevEl: toursSliderNavigationPrevElement,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    },
  },
});

const initToursSlider = () => {
  if (toursSliderElement) {
    toursSwiperElement.classList.remove('slider__swiper--no-js');
    toursSlider.init();
  }
};

export { initToursSlider };
