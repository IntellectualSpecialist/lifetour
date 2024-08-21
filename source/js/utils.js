const sliders = document.querySelectorAll('.slider');

const removeSlidersNoJsClass = () => {
  if (sliders.length >= 1) {
    sliders.forEach((slider) => {
      if (slider.classList.contains('slider--no-js')) {
        slider.classList.remove('slider--no-js');
      }
    });
  }
};

export { removeSlidersNoJsClass };
