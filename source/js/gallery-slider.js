import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

let gallerySlider;
let gallerySliderNavigationPrevElement;
let gallerySliderNavigationNextElement;
let gallerySwiperElement;

const createSlider = () => {
  const gallerySliderElement = document.querySelector('.slider--gallery');

  if (gallerySliderElement) {
    gallerySwiperElement = gallerySliderElement.querySelector('.slider__swiper');
    gallerySwiperElement.classList.remove('slider__swiper--gallery-no-js');
    gallerySliderNavigationPrevElement = gallerySliderElement.querySelector('.swiper-button-prev');
    gallerySliderNavigationNextElement = gallerySliderElement.querySelector('.swiper-button-next');

    gallerySlider = new Swiper(gallerySwiperElement, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 5,
      loop: true,
      init: false,
      navigation: {
        nextEl: gallerySliderNavigationNextElement,
        prevEl: gallerySliderNavigationPrevElement,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
  }
};

const initGallerySlider = () => {
  createSlider();
  gallerySlider.init();
  if (window.innerWidth >= 1440) {
    gallerySlider.destroy();
  }
};

initGallerySlider();

export { initGallerySlider };
