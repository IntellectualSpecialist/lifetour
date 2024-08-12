import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const promoSliderElement = document.querySelector('.slider--promo');
let promoSliderPaginatonElement;

if (promoSliderElement) {
  promoSliderPaginatonElement = promoSliderElement.querySelector('.slider__pagination');
}

const promoSlider = new Swiper(promoSliderElement, {
  modules: [Pagination],
  slidesPerView: 1,
  loop: true,
  init: false,
  pagination: {
    el: promoSliderPaginatonElement,
    clickable: true,
    bulletClass: 'slider__pagination-button',
    bulletActiveClass: 'slider__pagination-button--active',
    renderBullet: function (index, className) {
      return `<button class="${className}">
                <span class="visually-hidden">${index + 1} слайд</span>
              </button>`;
    },
  },
});

const initPromoSlider = () => {
  if (promoSliderElement) {
    promoSliderElement.classList.remove('slider--no-js');
    promoSlider.init();
  }
};

export { initPromoSlider };
