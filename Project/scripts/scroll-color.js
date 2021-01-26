import 'waypoints/lib/noframework.waypoints';

(function () {
  var doc, bod, htm;
  addEventListener('load', function () {
    doc = document;
    bod = doc.body;
    htm = doc.documentElement;
    const contactRight = document.querySelector('.contact--right');
    const arrowBack = document.querySelector('.arrow--back-top');
    const aboutus = document.querySelector('.section__aboutus');
    const about = document.querySelector('.section__about');
    const services = document.querySelector('.section__services');
    const bottom = document.querySelector('.section__bottom');
    const menu = document.querySelector('.menu-icon');
    const menuIcon = Array.from(document.querySelectorAll('.menu-icon__line'));

    const contactRightOffset = contactRight.offsetTop;
    const arrowBackOffset = arrowBack.offsetTop;
    const menuOffset = menu.offsetTop;

    const colorOne = ['black', 'white'];
    const colorTwo = ['white', 'black'];
    const elChan = [
      { elem: contactRight, off: contactRightOffset },
      { elem: arrowBack, off: arrowBackOffset },
      { elem: menuIcon, off: menuOffset },
    ];
    const ObjCh = [
      { el: aboutus, color: colorOne },
      { el: about, color: colorTwo },
      { el: services, color: colorOne },
      { el: bottom, color: colorTwo },
    ];

    ObjCh.forEach((el) => {
      elChan.forEach((el2) => {
        var waypoint = new Waypoint({
          element: el.el,
          handler: function (direction) {
            if (el2.elem === menuIcon) {
              menuIcon.forEach((el3) => {
                el3.style.background =
                  direction === 'up' ? el.color[1] : el.color[0];
              });
            } else {
              el2.elem.style.color =
                direction === 'up' ? el.color[1] : el.color[0];
            }
          },
          offset: el2.off,
        });
      });
    });
  });
})();

//   var waypoint2 = new Waypoint({
//     element: aboutus,
//     handler: function (direction) {
//       menuIcon.forEach((el) => {
//         el.style.background = direction === 'up' ? 'white' : 'black';
//       });
//     },
//     offset: menu.offsetTop,
//   });
//   var waypoint3 = new Waypoint({
//     element: aboutus,
//     handler: function (direction) {
//       contactRight.style.color = direction === 'up' ? 'white' : 'black';
//     },
//     offset: contactRight.offsetTop,
//   });

//   var waypoint = new Waypoint({
//       element: about,
//       handler: function (direction) {
//         arrowBack.style.color = direction === 'up' ? 'white' : 'black';
//       },
//       offset: arrowBack.offsetTop,
//     });

//     var waypoint2 = new Waypoint({
//       element: about,
//       handler: function (direction) {
//         menuIcon.forEach((el) => {
//           el.style.background = direction === 'up' ? 'white' : 'black';
//         });
//       },
//       offset: menu.offsetTop,
//     });
//     var waypoint3 = new Waypoint({
//       element: aboutus,
//       handler: function (direction) {
//         contactRight.style.color = direction === 'up' ? 'white' : 'black';
//       },
//       offset: contactRight.offsetTop,
//     });
