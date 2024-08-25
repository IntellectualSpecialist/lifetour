import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import { desktopWidth, tabletWidthOnlyMediaQuery, desktopWidthMediaQuery } from './const';

const initialSlideNumber = 2;
const spaceBetweenValue = 30;
const slidesPerGroupCount = 2;
const minSlidesCount = 8;

const fragment = document.createDocumentFragment();
const featuresSliderElement = document.querySelector('.slider--features');
let featuresSwiperElement;
let featuresSwiperWrapperElement;
let featuresSliderNavigationPrevElement;
let featuresSliderNavigationNextElement;
let featuresSlider;

if (featuresSliderElement) {
  featuresSwiperElement = featuresSliderElement.querySelector('.slider__swiper');
  featuresSwiperWrapperElement = featuresSwiperElement.querySelector('.slider__wrapper');
  featuresSliderNavigationPrevElement = featuresSliderElement.querySelector('.swiper-button-prev');
  featuresSliderNavigationNextElement = featuresSliderElement.querySelector('.swiper-button-next');
}

const createSlider = () => {
  featuresSlider = new Swiper(featuresSwiperElement, {
    modules: [Navigation],
    slidesPerView: 'auto',
    initialSlide: initialSlideNumber,
    loop: true,
    init: false,
    allowTouchMove: false,
    spaceBetween: spaceBetweenValue,
    slidesPerGroup: slidesPerGroupCount,
    centeredSlides: true,
    navigation: {
      nextEl: featuresSliderNavigationNextElement,
      prevEl: featuresSliderNavigationPrevElement,
    }
  });

  featuresSlider.init();
};

const destroySlider = () => {
  if (featuresSlider !== undefined) {
    featuresSlider.destroy(true, true);
  }
};

const cloneSlides = () => {
  const slideElements = featuresSwiperWrapperElement.querySelectorAll('.slider__slide');
  let currentSlidesCount = slideElements.length;

  while (currentSlidesCount < minSlidesCount) {
    slideElements.forEach((slide) => {
      const cloneSlide = slide.cloneNode(true);
      cloneSlide.dataset.clone = 'true';
      fragment.appendChild(cloneSlide);
    });

    currentSlidesCount += slideElements.length;
  }

  featuresSwiperWrapperElement.appendChild(fragment);
};

const removeCloneSlides = () => {
  const slides = featuresSwiperWrapperElement.querySelectorAll('.slider__slide');

  slides.forEach((slide) => {
    if (slide.dataset.clone === 'true') {
      slide.remove();
    }
  });
};

const registerResizeWindowEvents = () => {
  tabletWidthOnlyMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      destroySlider();
      removeCloneSlides();
    }
  });

  desktopWidthMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      cloneSlides();
      createSlider();
    }
  });
};

const initFeaturesSlider = () => {
  if (featuresSliderElement) {
    if (window.innerWidth >= desktopWidth) {
      cloneSlides();
      createSlider();
    }

    registerResizeWindowEvents();
  }
};

export { initFeaturesSlider };
