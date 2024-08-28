import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import { changeLinksTabindex, onSlideChange} from './utils';

const slidesPerViewCount = 1;
const promoSliderElement = document.querySelector('.slider--promo');
let sliderLinksElements;
let promoSliderPaginatonElement;

if (promoSliderElement) {
  promoSliderPaginatonElement = promoSliderElement.querySelector('.slider__pagination');
  sliderLinksElements = promoSliderElement.querySelectorAll('a[href]');
}

const promoSlider = new Swiper(promoSliderElement, {
  modules: [Pagination],
  slidesPerView: slidesPerViewCount,
  loop: true,
  init: false,
  pagination: {
    el: promoSliderPaginatonElement,
    clickable: true,
    bulletClass: 'slider__pagination-button',
    bulletActiveClass: 'slider__pagination-button--active',
    renderBullet: function (index, className) {
      return `<button class="${className}" type="button">
                <span class="visually-hidden">Cлайд ${index + 1}</span>
              </button>`;
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const initPromoSlider = () => {
  if (promoSliderElement) {
    promoSlider.init();
    changeLinksTabindex(sliderLinksElements, slidesPerViewCount, promoSlider.activeIndex);
    onSlideChange(promoSlider, sliderLinksElements, slidesPerViewCount);
  }
};

export { initPromoSlider };
