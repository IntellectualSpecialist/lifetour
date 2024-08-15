import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const instructorsSliderElement = document.querySelector('.slider--instructors');
let instructorsSliderNavigationPrevElement;
let instructorsSliderNavigationNextElement;
let instructorsSwiperElement;

if (instructorsSliderElement) {
  instructorsSwiperElement = instructorsSliderElement.querySelector('.slider__swiper');
  instructorsSliderNavigationPrevElement = instructorsSliderElement.querySelector('.swiper-button-prev');
  instructorsSliderNavigationNextElement = instructorsSliderElement.querySelector('.swiper-button-next');
}

const instructorsSlider = new Swiper(instructorsSwiperElement, {
  modules: [Navigation],
  autoHeight: true,
  slidesPerView: 1,
  loop: false,
  init: false,
  initialSlide: 2,
  navigation: {
    nextEl: instructorsSliderNavigationNextElement,
    prevEl: instructorsSliderNavigationPrevElement,
  },
  breakpoints: {
    768: {
      autoHeight: false,
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const initInstructorsSlider = () => {
  if (instructorsSliderElement) {
    instructorsSwiperElement.classList.remove('slider__swiper--instructors-no-js');
    instructorsSlider.init();
  }
};

export { initInstructorsSlider };
