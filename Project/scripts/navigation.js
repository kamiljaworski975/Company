const app = (() => {
  let body;
  let menu;
  let menuItems;
  let arrowTop;
  let goAbout;
  let aboutusSec;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.navigation-phone__list-item-a');
    arrowTop = document.querySelector('.arrow--back-top');
    goAbout = document.querySelector('.go--about');
    aboutusSec = document.querySelector('.section__aboutus');

    applyListeners();
    applyListenersToLeave();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    arrowTop.addEventListener('click', () => backToTop());
    if (goAbout) {
      goAbout.addEventListener('click', () => goToAbout());
    }
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

  const goToAbout = () => {
    window.scrollTo({ top: aboutusSec.offsetTop, behavior: 'smooth' });
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
