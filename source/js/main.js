import { initNavBurger } from './burger-menu';
import { removeSlidersNoJsClass, updateDuplicateText } from './utils';
import { initPromoSlider } from './promo-slider';
import { initToursSlider } from './tours-slider';
import { initInstructorsSlider } from './instructors-slider';
import { initReviewsSlider } from './reviews-slider';
import { initFeaturesSlider } from './features-slider';
import { initGallerySlider } from './gallery-slider';
import { initFormValidate } from './validate-form';

const bootstrap = () => {
  initNavBurger();
  updateDuplicateText();
  removeSlidersNoJsClass();
  initPromoSlider();
  initToursSlider();
  initInstructorsSlider();
  initReviewsSlider();
  initFeaturesSlider();
  initGallerySlider();
  initFormValidate();
};

window.addEventListener('load', () => {
  bootstrap();
});
