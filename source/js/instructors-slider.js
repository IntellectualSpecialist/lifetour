import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const instructorsSliderElement = document.querySelector('.slider--instructors');
let instructorsSliderNavigationPrevElement;
let instructorsSliderNavigationNextElement;

if (instructorsSliderElement) {
  instructorsSliderNavigationPrevElement = instructorsSliderElement.querySelector('.slider__button--prev');
  instructorsSliderNavigationNextElement = instructorsSliderElement.querySelector('.slider__button--next');
}

const instructorsSlider = new Swiper(instructorsSliderElement, {
  modules: [Navigation],
  slidesPerView: 1,
  loop: false,
  init: false,
  initialSlide: 2,
  navigation: {
    nextEl: instructorsSliderNavigationPrevElement,
    prevEl: instructorsSliderNavigationNextElement,
  },
});

const initInstructorsSlider = () => {
  if (instructorsSliderElement) {
    instructorsSliderElement.classList.remove('slider--instructors-no-js');
    instructorsSlider.init();
  }
};

export { initInstructorsSlider };
