import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const reviewsSliderElement = document.querySelector('.slider--reviews');
let reviewsSliderNavigationPrevElement;
let reviewsSliderNavigationNextElement;

if (reviewsSliderElement) {
  reviewsSliderNavigationPrevElement = reviewsSliderElement.querySelector('.slider__button--prev');
  reviewsSliderNavigationNextElement = reviewsSliderElement.querySelector('.slider__button--next');
}

const reviewsSlider = new Swiper(reviewsSliderElement, {
  modules: [Navigation],
  autoHeight: true,
  slidesPerView: 1,
  loop: false,
  init: false,
  navigation: {
    nextEl: reviewsSliderNavigationPrevElement,
    prevEl: reviewsSliderNavigationNextElement,
  },
});

const initReviewsSlider = () => {
  if (reviewsSliderElement) {
    reviewsSliderElement.classList.remove('slider--no-js');
    reviewsSlider.init();
  }
};

export { initReviewsSlider };
