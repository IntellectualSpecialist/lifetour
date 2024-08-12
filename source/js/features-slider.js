import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

let featuresSlider;

let featuresSliderNavigationPrevElement;
let featuresSliderNavigationNextElement;


const createSlider = () => {
  const featuresSliderElement = document.querySelector('.slider--features');

  if (featuresSliderElement) {
    featuresSliderNavigationPrevElement = featuresSliderElement.querySelector('.slider__button--prev');
    featuresSliderNavigationNextElement = featuresSliderElement.querySelector('.slider__button--next');

    featuresSlider = new Swiper(featuresSliderElement, {
      modules: [Navigation],
      slidesPerView: 1,
      loop: false,
      init: false,
      navigation: {
        nextEl: featuresSliderNavigationPrevElement,
        prevEl: featuresSliderNavigationNextElement,
      },
    });
  }
};

const initFeaturesSlider = () => {
  if (window.innerWidth >= 1440) {
    createSlider();
    featuresSlider.init();
  }
  // } else {
  //   if (featuresSlider) {
  //     featuresSlider.destroy();
  //   }
  // }
};

// const onWindowResize = () => {
//   console.log(featuresSlider !== undefined);

//   if (window.innerWidth >= 1440) {
//     if (!featuresSlider) {
//       createSlider();
//       featuresSlider.init();
//     }
//   } else {
//     featuresSlider.destroy();
//   }
// };

initFeaturesSlider();
// window.addEventListener('resize', onWindowResize);

export { initFeaturesSlider };
