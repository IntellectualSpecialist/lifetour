import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const initialSlide = 0;
const slidesPerViewCount = 1;
const promoSliderElement = document.querySelector('.slider--promo');
let sliderLinks;
let promoSliderPaginatonElement;

if (promoSliderElement) {
  promoSliderPaginatonElement = promoSliderElement.querySelector('.slider__pagination');
  sliderLinks = promoSliderElement.querySelectorAll('a[href]');
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
      return `<button class="${className}">
                <span class="visually-hidden">${index + 1} слайд</span>
              </button>`;
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const setLinksTabindex = () => {
  sliderLinks.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });
};

const onSlideChange = () => {
  promoSlider.on('slideChange', () => {
    setLinksTabindex();
    promoSlider.slides[promoSlider.activeIndex].querySelector('a').setAttribute('tabindex', '0');
  });
};

const initPromoSlider = () => {
  if (promoSliderElement) {
    setLinksTabindex();
    sliderLinks[initialSlide].setAttribute('tabindex', '0');

    promoSlider.init();
    onSlideChange();
  }
};

export { initPromoSlider };
