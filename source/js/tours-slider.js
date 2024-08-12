import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const toursSliderElement = document.querySelector('.slider--tours');
let toursSliderNavigationPrevElement;
let toursSliderNavigationNextElement;

if (toursSliderElement) {
  toursSliderNavigationPrevElement = toursSliderElement.querySelector('.slider__button--prev');
  toursSliderNavigationNextElement = toursSliderElement.querySelector('.slider__button--next');
}

const toursSlider = new Swiper(toursSliderElement, {
  modules: [Navigation],
  slidesPerView: 1,
  loop: false,
  init: false,
  navigation: {
    nextEl: toursSliderNavigationPrevElement,
    prevEl: toursSliderNavigationNextElement,
  },
});

const initToursSlider = () => {
  if (toursSliderElement) {
    toursSliderElement.classList.remove('slider--no-js');
    toursSlider.init();
  }
};

export { initToursSlider };
