const app = (() => {
  let body;
  let menu;
  let menuItems;
  let arrowTop;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.navigation-phone__list-item-a');
    arrowTop = document.querySelector('.arrow--back-top');

    applyListeners();
    applyListenersToLeave();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    arrowTop.addEventListener('click', () => backToTop());
  };

  const applyListenersToLeave = () => {
    Array.from(menuItems).forEach((menuItem) => {
      menuItem.addEventListener('click', () => toggleClass(body, 'nav-active'));
    });
  };

  const backToTop = () => {
    if (window.scrollY > 500) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass)) {
      element.classList.remove(stringClass);
    } else {
      element.classList.add(stringClass);
    }
  };

  init();
})();
