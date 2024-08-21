import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import { mobileWidthOnlyMediaQuery, tabletWidthOnlyMediaQuery, tabletWidthMediaQuery, desktopWidthMediaQuery } from './const';

const slidesPerViewCount = {
  mobile: 1,
  tablet: 3,
  desktop: 4,
};

const initialSlide = {
  mobile: 2,
  tablet: 0,
  desktop: 0,
};

const slidesSpaceBetween = 20;

const instructorsSliderElement = document.querySelector('.slider--instructors');
let instructorsSlider;
let instructorsSliderNavigationPrevElement;
let instructorsSliderNavigationNextElement;
let instructorsSwiperElement;

if (instructorsSliderElement) {
  instructorsSwiperElement = instructorsSliderElement.querySelector('.slider__swiper');
  instructorsSliderNavigationPrevElement = instructorsSliderElement.querySelector('.swiper-button-prev');
  instructorsSliderNavigationNextElement = instructorsSliderElement.querySelector('.swiper-button-next');
}

const defaultSettings = {
  autoHeight: true,
  slidesPerView: slidesPerViewCount.mobile,
  initialSlide: initialSlide.mobile,
  spaceBetween: slidesSpaceBetween,
  allowTouchMove: true,
  breakpoints: {
    768: {
      autoHeight: false,
      initialSlide: initialSlide.tablet,
      slidesPerView: slidesPerViewCount.tablet,
      spaceBetween: slidesSpaceBetween,
      allowTouchMove: true,
    },
    1440: {
      autoHeight: false,
      initialSlide: initialSlide.desktop,
      slidesPerView: slidesPerViewCount.desktop,
      spaceBetween: slidesSpaceBetween,
      allowTouchMove: false,
    },
  },
};

const mobileSettings = {
  autoHeight: true,
  slidesPerView: slidesPerViewCount.mobile,
  initialSlide: initialSlide.mobile,
  spaceBetween: slidesSpaceBetween,
  allowTouchMove: true,
};

const tabletSettings = {
  autoHeight: false,
  initialSlide: initialSlide.tablet,
  slidesPerView: slidesPerViewCount.tablet,
  spaceBetween: slidesSpaceBetween,
  allowTouchMove: true,
};

const desktopSettings = {
  autoHeight: false,
  initialSlide: initialSlide.desktop,
  slidesPerView: slidesPerViewCount.desktop,
  spaceBetween: slidesSpaceBetween,
  allowTouchMove: false,
};

const createSlider = (settings = defaultSettings) => {
  instructorsSlider = new Swiper(instructorsSwiperElement, {
    ...settings,
    modules: [Navigation],
    loop: false,
    init: false,
    navigation: {
      nextEl: instructorsSliderNavigationNextElement,
      prevEl: instructorsSliderNavigationPrevElement,
    },
  });
  instructorsSlider.init();
};

const destroySlider = () => {
  if (instructorsSlider !== undefined) {
    instructorsSlider.destroy(true, true);
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

const initInstructorsSlider = () => {
  if (instructorsSliderElement) {
    createSlider();
    registerResizeWindowEvents();
  }
};

export { initInstructorsSlider };
