import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const reviewsSliderElement = document.querySelector('.slider--reviews');
let reviewsSliderNavigationPrevElement;
let reviewsSliderNavigationNextElement;
let reviewsSwiperElement;

if (reviewsSliderElement) {
  reviewsSwiperElement = reviewsSliderElement.querySelector('.slider__swiper');
  reviewsSliderNavigationPrevElement = reviewsSliderElement.querySelector('.swiper-button-prev');
  reviewsSliderNavigationNextElement = reviewsSliderElement.querySelector('.swiper-button-next');
}

const reviewsSlider = new Swiper(reviewsSwiperElement, {
  modules: [Navigation],
  autoHeight: true,
  slidesPerView: 1,
  loop: false,
  init: false,
  navigation: {
    nextEl: reviewsSliderNavigationNextElement,
    prevEl: reviewsSliderNavigationPrevElement,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
      slidesOffsetAfter: 50,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 120,
      freeMode: true,
      slidesOffsetAfter: 50,
    },
  },
});

const initReviewsSlider = () => {
  if (reviewsSliderElement) {
    reviewsSliderElement.classList.remove('slider--no-js');
    reviewsSlider.init();
  }
};

export { initReviewsSlider };
