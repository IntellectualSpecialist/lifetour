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

const setLinksTabindex = (sliderLinks) => {
  sliderLinks.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });
};

const changeLinksTabindex = (sliderLinks, slidesPerView, startSlide) => {
  setLinksTabindex(sliderLinks);

  for (let i = 0; i < slidesPerView; i++) {
    sliderLinks[startSlide + i].setAttribute('tabindex', '0');
  }
};

const onSlideChange = (slider, sliderLinks, slidesPerView) => {
  slider.on('slideChange', () => {
    const activeSlideIndex = slider.activeIndex;

    changeLinksTabindex(sliderLinks, slidesPerView, activeSlideIndex);
  });
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { removeSlidersNoJsClass, updateDuplicateText, changeLinksTabindex, onSlideChange, debounce};
