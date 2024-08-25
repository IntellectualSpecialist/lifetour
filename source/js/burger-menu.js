import { desktopWidthMediaQuery, desktopWidth } from './const';
import { debounce } from './utils';

const removeNavDelay = 250;
const renderDelay = 300;
const bodyElement = document.querySelector('.page__body');
const mainNavElement = bodyElement.querySelector('.main-header__nav');
const navBurgerElement = bodyElement.querySelector('.js-toggle-button');
const siteListElement = mainNavElement.querySelector('.site-list');

const openMenu = () => {
  mainNavElement.classList.add('main-header__nav--shown');
  navBurgerElement.classList.add('burger--active');
  bodyElement.classList.add('page__body--modal-open');
  siteListElement.addEventListener('click', onNavLinkClick);
  bodyElement.addEventListener('click', onBodyClick);

  const siteListHeight = siteListElement.offsetHeight;
  mainNavElement.style.height = `${siteListHeight}px`;
};

const closeMenu = () => {
  mainNavElement.style.height = 0;
  navBurgerElement.classList.remove('burger--active');
  bodyElement.classList.remove('page__body--modal-open');
  siteListElement.removeEventListener('click', onNavLinkClick);
  bodyElement.removeEventListener('click', onBodyClick);

  setTimeout(() => {
    mainNavElement.classList.remove('main-header__nav--shown');
  }, removeNavDelay);
};

const debounceOpenMenu = debounce(openMenu, renderDelay);
const debounceCloseMenu = debounce(closeMenu, renderDelay);

function onNavLinkClick(evt) {
  if (evt.target.matches('.site-list__link')) {
    closeMenu();
  }
}

const onNavBurgerClick = (evt) => {
  evt.preventDefault();

  if (mainNavElement.classList.contains('main-header__nav--shown')) {
    debounceCloseMenu();
  } else {
    debounceOpenMenu();
  }
};

function onBodyClick(evt) {
  if (evt.target.closest('.main-header')) {
    evt.stopPropagation();
  } else {
    closeMenu();
  }
}

const registerResizeWindowEvents = () => {
  desktopWidthMediaQuery.addEventListener('change', (evt) => {
    if (evt.matches) {
      if (mainNavElement.classList.contains('main-header__nav--shown')) {
        closeMenu();
      }

      mainNavElement.removeAttribute('style');
      navBurgerElement.removeEventListener('click', onNavBurgerClick);
    } else {
      navBurgerElement.addEventListener('click', onNavBurgerClick);
    }
  });
};

const initNavBurger = () => {
  if (navBurgerElement) {
    if (window.innerWidth < desktopWidth) {
      navBurgerElement.addEventListener('click', onNavBurgerClick);
    }

    registerResizeWindowEvents();
  }
};

export { initNavBurger };
