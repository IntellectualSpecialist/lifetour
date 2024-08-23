import { desktopWidthMediaQuery } from './const';

const desktopWidth = 1440;
const bodyElement = document.querySelector('.page__body');
const mainNavElement = bodyElement.querySelector('.main-header__nav');
const navBurgerElement = bodyElement.querySelector('.js-toggle-button');
const siteListElement = mainNavElement.querySelector('.site-list');

const openMenu = () => {
  mainNavElement.classList.add('main-header__nav--shown');
  navBurgerElement.classList.add('burger--active');
  bodyElement.classList.add('page__body--modal-open');
  siteListElement.addEventListener('click', onNavLinkClick);

  const siteListHeight = siteListElement.offsetHeight;
  mainNavElement.style.height = `${siteListHeight}px`;
};

const closeMenu = () => {
  mainNavElement.style.height = 0;
  navBurgerElement.classList.remove('burger--active');
  bodyElement.classList.remove('page__body--modal-open');
  siteListElement.removeEventListener('click', onNavLinkClick);

  setTimeout(() => {
    mainNavElement.classList.remove('main-header__nav--shown');
  }, 250);
};

function onNavLinkClick(evt) {
  if (evt.target.matches('.site-list__link')) {
    closeMenu();
  }
}

const onNavBurgerClick = (evt) => {
  evt.preventDefault();

  if (mainNavElement.classList.contains('main-header__nav--shown')) {
    closeMenu();
  } else {
    openMenu();
  }
};

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
