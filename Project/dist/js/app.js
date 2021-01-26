/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/navigation.js":
/*!*******************************!*\
  !*** ./scripts/navigation.js ***!
  \*******************************/
/***/ (() => {

eval("var app = function () {\n  var body;\n  var menu;\n  var menuItems;\n  var arrowTop;\n  var goAbout;\n  var aboutusSec;\n\n  var init = function init() {\n    body = document.querySelector('body');\n    menu = document.querySelector('.menu-icon');\n    menuItems = document.querySelectorAll('.navigation-phone__list-item-a');\n    arrowTop = document.querySelector('.arrow--back-top');\n    goAbout = document.querySelector('.go--about');\n    aboutusSec = document.querySelector('.section__aboutus');\n    applyListeners();\n    applyListenersToLeave();\n  };\n\n  var applyListeners = function applyListeners() {\n    menu.addEventListener('click', function () {\n      return toggleClass(body, 'nav-active');\n    });\n    arrowTop.addEventListener('click', function () {\n      return backToTop();\n    });\n\n    if (goAbout) {\n      goAbout.addEventListener('click', function () {\n        return goToAbout();\n      });\n    }\n  };\n\n  var applyListenersToLeave = function applyListenersToLeave() {\n    Array.from(menuItems).forEach(function (menuItem) {\n      menuItem.addEventListener('click', function () {\n        return toggleClass(body, 'nav-active');\n      });\n    });\n  };\n\n  var backToTop = function backToTop() {\n    if (window.scrollY > 500) {\n      window.scrollTo({\n        top: 0,\n        behavior: 'smooth'\n      });\n    }\n  };\n\n  var goToAbout = function goToAbout() {\n    window.scrollTo({\n      top: aboutusSec.offsetTop,\n      behavior: 'smooth'\n    });\n  };\n\n  var toggleClass = function toggleClass(element, stringClass) {\n    if (element.classList.contains(stringClass)) {\n      element.classList.remove(stringClass);\n    } else {\n      element.classList.add(stringClass);\n    }\n  };\n\n  init();\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc2NyaXB0cy9uYXZpZ2F0aW9uLmpzPzk5YjAiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsIm1lbnUiLCJtZW51SXRlbXMiLCJhcnJvd1RvcCIsImdvQWJvdXQiLCJhYm91dHVzU2VjIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhcHBseUxpc3RlbmVycyIsImFwcGx5TGlzdGVuZXJzVG9MZWF2ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVDbGFzcyIsImJhY2tUb1RvcCIsImdvVG9BYm91dCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJtZW51SXRlbSIsIndpbmRvdyIsInNjcm9sbFkiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwib2Zmc2V0VG9wIiwiZWxlbWVudCIsInN0cmluZ0NsYXNzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLEdBQUcsR0FBSSxZQUFNO0FBQ2pCLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLFFBQUo7QUFDQSxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsVUFBSjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCTixJQUFBQSxJQUFJLEdBQUdPLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0FQLElBQUFBLElBQUksR0FBR00sUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQVA7QUFDQU4sSUFBQUEsU0FBUyxHQUFHSyxRQUFRLENBQUNFLGdCQUFULENBQTBCLGdDQUExQixDQUFaO0FBQ0FOLElBQUFBLFFBQVEsR0FBR0ksUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFYO0FBQ0FKLElBQUFBLE9BQU8sR0FBR0csUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQVY7QUFDQUgsSUFBQUEsVUFBVSxHQUFHRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWI7QUFFQUUsSUFBQUEsY0FBYztBQUNkQyxJQUFBQSxxQkFBcUI7QUFDdEIsR0FWRDs7QUFZQSxNQUFNRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JULElBQUFBLElBQUksQ0FBQ1csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxhQUFNQyxXQUFXLENBQUNiLElBQUQsRUFBTyxZQUFQLENBQWpCO0FBQUEsS0FBL0I7QUFDQUcsSUFBQUEsUUFBUSxDQUFDUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLGFBQU1FLFNBQVMsRUFBZjtBQUFBLEtBQW5DOztBQUNBLFFBQUlWLE9BQUosRUFBYTtBQUNYQSxNQUFBQSxPQUFPLENBQUNRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDO0FBQUEsZUFBTUcsU0FBUyxFQUFmO0FBQUEsT0FBbEM7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBTUoscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDSyxJQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV2YsU0FBWCxFQUFzQmdCLE9BQXRCLENBQThCLFVBQUNDLFFBQUQsRUFBYztBQUMxQ0EsTUFBQUEsUUFBUSxDQUFDUCxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLGVBQU1DLFdBQVcsQ0FBQ2IsSUFBRCxFQUFPLFlBQVAsQ0FBakI7QUFBQSxPQUFuQztBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BLE1BQU1jLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSU0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEdBQXJCLEVBQTBCO0FBQ3hCRCxNQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0I7QUFBRUMsUUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVUMsUUFBQUEsUUFBUSxFQUFFO0FBQXBCLE9BQWhCO0FBQ0Q7QUFDRixHQUpEOztBQU1BLE1BQU1ULFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJLLElBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQjtBQUFFQyxNQUFBQSxHQUFHLEVBQUVsQixVQUFVLENBQUNvQixTQUFsQjtBQUE2QkQsTUFBQUEsUUFBUSxFQUFFO0FBQXZDLEtBQWhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNWCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDYSxPQUFELEVBQVVDLFdBQVYsRUFBMEI7QUFDNUMsUUFBSUQsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxRQUFsQixDQUEyQkYsV0FBM0IsQ0FBSixFQUE2QztBQUMzQ0QsTUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QkgsV0FBekI7QUFDRCxLQUZELE1BRU87QUFDTEQsTUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCRyxHQUFsQixDQUFzQkosV0FBdEI7QUFDRDtBQUNGLEdBTkQ7O0FBUUFyQixFQUFBQSxJQUFJO0FBQ0wsQ0FyRFcsRUFBWiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9ICgoKSA9PiB7XHJcbiAgbGV0IGJvZHk7XHJcbiAgbGV0IG1lbnU7XHJcbiAgbGV0IG1lbnVJdGVtcztcclxuICBsZXQgYXJyb3dUb3A7XHJcbiAgbGV0IGdvQWJvdXQ7XHJcbiAgbGV0IGFib3V0dXNTZWM7XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcclxuICAgIG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZpZ2F0aW9uLXBob25lX19saXN0LWl0ZW0tYScpO1xyXG4gICAgYXJyb3dUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctLWJhY2stdG9wJyk7XHJcbiAgICBnb0Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLS1hYm91dCcpO1xyXG4gICAgYWJvdXR1c1NlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19hYm91dHVzJyk7XHJcblxyXG4gICAgYXBwbHlMaXN0ZW5lcnMoKTtcclxuICAgIGFwcGx5TGlzdGVuZXJzVG9MZWF2ZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcGx5TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZUNsYXNzKGJvZHksICduYXYtYWN0aXZlJykpO1xyXG4gICAgYXJyb3dUb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBiYWNrVG9Ub3AoKSk7XHJcbiAgICBpZiAoZ29BYm91dCkge1xyXG4gICAgICBnb0Fib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ29Ub0Fib3V0KCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcGx5TGlzdGVuZXJzVG9MZWF2ZSA9ICgpID0+IHtcclxuICAgIEFycmF5LmZyb20obWVudUl0ZW1zKS5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xyXG4gICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZUNsYXNzKGJvZHksICduYXYtYWN0aXZlJykpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYmFja1RvVG9wID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNTAwKSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9BYm91dCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogYWJvdXR1c1NlYy5vZmZzZXRUb3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVDbGFzcyA9IChlbGVtZW50LCBzdHJpbmdDbGFzcykgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0cmluZ0NsYXNzKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3RyaW5nQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0cmluZ0NsYXNzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpbml0KCk7XHJcbn0pKCk7XHJcbiJdLCJmaWxlIjoiLi9zY3JpcHRzL25hdmlnYXRpb24uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scripts/navigation.js\n");

/***/ }),

/***/ "./scripts/webp/app.js":
/*!*****************************!*\
  !*** ./scripts/webp/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/main.scss */ \"./sass/main.scss\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation.js */ \"./scripts/navigation.js\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_js__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc2NyaXB0cy93ZWJwL2FwcC5qcz8zZGQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSIsImZpbGUiOiIuL3NjcmlwdHMvd2VicC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uLy4uL3Nhc3MvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCAnLi4vbmF2aWdhdGlvbi5qcyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scripts/webp/app.js\n");

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc2Fzcy9tYWluLnNjc3M/OWZkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zYXNzL21haW4uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sass/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts/webp/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;