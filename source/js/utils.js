const sliderElements = document.querySelectorAll('.slider');
const titleElements = document.querySelectorAll('.title-middle');

const removeSlidersNoJsClass = () => {
  if (sliderElements.length >= 1) {
    sliderElements.forEach((slider) => {
      if (slider.classList.contains('slider--no-js')) {
        slider.classList.remove('slider--no-js');
      }
    });
  }
};

const updateDuplicateText = () => {
  if (titleElements.length >= 1) {
    titleElements.forEach((title) => {
      if (!title.classList.contains('title-middle--no-duplicate')) {
        const titleValue = title.children[0].textContent;

        title.dataset.value = titleValue;
      }
    });
  }
};

export { removeSlidersNoJsClass, updateDuplicateText };
