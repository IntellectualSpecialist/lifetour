import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { mobileWidthOnlyMediaQuery, tabletWidthOnlyMediaQuery, tabletWidthMediaQuery, desktopWidthMediaQuery } from './const';

const slidesPerViewMobile = 1;
const spaceBetween = {
  mobile: 0,
  tablet: 30,
  desktop: 120,
};
const slidesOffset = {
  tablet: 60,
  desktop: 50,
};

const reviewsSliderElement = document.querySelector('.slider--reviews');
let reviewsSlider;
let reviewsSliderNavigationPrevElement;
let reviewsSliderNavigationNextElement;
let reviewsSwiperElement;

if (reviewsSliderElement) {
  reviewsSwiperElement = reviewsSliderElement.querySelector('.slider__swiper');
  reviewsSliderNavigationPrevElement = reviewsSliderElement.querySelector('.swiper-button-prev');
  reviewsSliderNavigationNextElement = reviewsSliderElement.querySelector('.swiper-button-next');
}

const defaultSettings = {
  autoHeight: true,
  slidesPerView: slidesPerViewMobile,
  spaceBetween: spaceBetween.mobile,
  allowTouchMove: true,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: spaceBetween.tablet,
      slidesOffsetAfter: slidesOffset.tablet,
      autoHeight: false,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: spaceBetween.desktop,
      slidesOffsetAfter: slidesOffset.desktop,
      autoHeight: false,
      allowTouchMove: false,
    },
  },
};

const mobileSettings = {
  autoHeight: true,
  slidesPerView: slidesPerViewMobile,
  spaceBetween: spaceBetween.mobile,
  allowTouchMove: true,
};

const tabletSettings = {
  allowTouchMove: true,
  slidesPerView: 'auto',
  spaceBetween: spaceBetween.tablet,
  slidesOffsetAfter: slidesOffset.tablet,
};

const desktopSettings = {
  slidesPerView: 'auto',
  spaceBetween: spaceBetween.desktop,
  slidesOffsetAfter: slidesOffset.desktop,
  allowTouchMove: false,
};

const createSlider = (settings = defaultSettings) => {
  reviewsSlider = new Swiper(reviewsSwiperElement, {
    ...settings,
    modules: [Navigation],
    loop: false,
    init: false,
    navigation: {
      nextEl: reviewsSliderNavigationNextElement,
      prevEl: reviewsSliderNavigationPrevElement,
    },
  });
  reviewsSlider.init();
};

const destroySlider = () => {
  if (reviewsSlider !== undefined) {
    reviewsSlider.destroy(true, true);
  }
};

const registerResizeWindowEvents = () => {
  mobileWidthOnlyMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      destroySlider();
      createSlider(mobileSettings);
    }
  });

  tabletWidthOnlyMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      destroySlider();
      createSlider(tabletSettings);
    }
  });

  tabletWidthMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      destroySlider();
      createSlider(tabletSettings);
    }
  });

  desktopWidthMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      destroySlider();
      createSlider(desktopSettings);
    }
  });
};

const initReviewsSlider = () => {
  if (reviewsSliderElement) {
    createSlider();
    registerResizeWindowEvents();
  }
};

export { initReviewsSlider };
