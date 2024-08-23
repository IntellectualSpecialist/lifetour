import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import { tabletWidthOnlyMediaQuery, desktopWidthMediaQuery } from './const';

const desktopWidth = 1440;
const spaceBetweenValue = 5;
const slidesPerViewCount = {
  mobile: 2,
  tablet: 3,
};
const gallerySliderElement = document.querySelector('.slider--gallery');
let gallerySlider;
let gallerySliderNavigationPrevElement;
let gallerySliderNavigationNextElement;
let gallerySwiperElement;

if (gallerySliderElement) {
  gallerySwiperElement = gallerySliderElement.querySelector('.slider__swiper');
  gallerySliderElement.classList.remove('slider--no-js');
  gallerySliderNavigationPrevElement = gallerySliderElement.querySelector('.swiper-button-prev');
  gallerySliderNavigationNextElement = gallerySliderElement.querySelector('.swiper-button-next');
}

const createSlider = () => {
  gallerySlider = new Swiper(gallerySwiperElement, {
    modules: [Navigation],
    slidesPerView: slidesPerViewCount.mobile,
    spaceBetween: spaceBetweenValue,
    loop: true,
    init: false,
    navigation: {
      nextEl: gallerySliderNavigationNextElement,
      prevEl: gallerySliderNavigationPrevElement,
    },
    breakpoints: {
      768: {
        slidesPerView: slidesPerViewCount.tablet,
      },
    },
  });

  gallerySlider.init();
};

const destroySlider = () => {
  if (gallerySlider !== undefined) {
    gallerySlider.destroy(true, true);
  }
};

const registerResizeWindowEvents = () => {
  tabletWidthOnlyMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      createSlider();
    }
  });

  desktopWidthMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      destroySlider();
    }
  });
};

const initGallerySlider = () => {
  if (gallerySliderElement) {
    createSlider();
    registerResizeWindowEvents();

    if (window.innerWidth >= desktopWidth) {
      destroySlider();
    }
  }
};

export { initGallerySlider };
