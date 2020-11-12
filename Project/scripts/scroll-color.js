// window.onload = () => {
//   console.log("dziala");
// };

// (function () {
//   window.onload = () => {
//     console.log("dziala");
//   };

//   const contactRight = document.querySelector(".contact--right");

//   const portfolio = document.querySelector(".section__portfolio");

//   const change = () => {
//     if (contactRight.offsetTop - 32 >= portfolio.getBoundingClientRect().top) {
//         contactRight.style.color =
//         htm.scrollTop > 199 ? "blue" : "white";
//     }
//   };

//   document.addEventListener("scroll", change, false);
// })();

var doc, bod, htm;
addEventListener("load", function () {
  doc = document;
  bod = doc.body;
  htm = doc.documentElement;
  const contactRight = document.querySelector(".contact--right");
  const arrowBack = document.querySelector(".arrow--back-top");
  const portfolio = document.querySelector(".section__portfolio");
  const menu = document.querySelector(".menu-icon");
  const menuIcon = Array.from(document.querySelectorAll(".menu-icon__line"));
  addEventListener("scroll", function () {
    console.log("hmm");
    contactRight.style.color =
      contactRight.offsetTop - 32 >= portfolio.getBoundingClientRect().top
        ? "black"
        : "white";
    arrowBack.style.color =
      arrowBack.offsetTop >= portfolio.getBoundingClientRect().top
        ? "black"
        : "white";
    menuIcon.forEach((el) => {
      el.style.backgroundColor =
        menu.offsetTop >= portfolio.getBoundingClientRect().top
          ? "black"
          : "white";
    });
  });
});
