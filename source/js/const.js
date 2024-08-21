const mobileWidthOnlyMediaQuery = window.matchMedia('(max-width: 767px)');
const tabletWidthMediaQuery = window.matchMedia('(min-width: 768px)');
const tabletWidthOnlyMediaQuery = window.matchMedia('(max-width: 1439px)');
const desktopWidthMediaQuery = window.matchMedia('(min-width: 1440px)');

export { mobileWidthOnlyMediaQuery, tabletWidthOnlyMediaQuery, tabletWidthMediaQuery, desktopWidthMediaQuery };
