import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

let gallerySlider;

let gallerySliderNavigationPrevElement;
let gallerySliderNavigationNextElement;


const createSlider = () => {
  const gallerySliderElement = document.querySelector('.slider--gallery');

  if (gallerySliderElement) {
    gallerySliderElement.classList.remove('slider--gallery-no-js');
    gallerySliderNavigationPrevElement = gallerySliderElement.querySelector('.slider__button--prev');
    gallerySliderNavigationNextElement = gallerySliderElement.querySelector('.slider__button--next');

    gallerySlider = new Swiper(gallerySliderElement, {
      modules: [Navigation],
      slidesPerView: 2,
      spaceBetween: 5,
      loop: false,
      init: false,
      navigation: {
        nextEl: gallerySliderNavigationPrevElement,
        prevEl: gallerySliderNavigationNextElement,
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
