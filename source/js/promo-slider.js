import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const promoSlider = new Swiper('.slider--promo', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  init: false,
  allowTouchMove: true,
  pagination: {
    el: '.slider--promo .slider__pagination',
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
  const promoSliderElement = document.querySelector('.slider--promo');

  if (promoSliderElement) {
    promoSlider.init();
  }
};

export { initPromoSlider };
