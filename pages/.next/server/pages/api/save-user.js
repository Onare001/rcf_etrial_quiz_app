"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/save-user";
exports.ids = ["pages/api/save-user"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "(api)/./pages/api/save-user.js":
/*!********************************!*\
  !*** ./pages/api/save-user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { name , id  } = req.body;\n        // Set the cookies\n        res.setHeader(\"Set-Cookie\", [\n            (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(\"name\", name, {\n                path: \"/\",\n                maxAge: 3600\n            }),\n            (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(\"id\", id, {\n                path: \"/\",\n                maxAge: 3600\n            }), \n        ]);\n        res.status(200).json({\n            message: \"Cookies set successfully\"\n        });\n        console.log(\"cookie set successfully\");\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZS11c2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBQ29CO0FBRXZELE1BQU1HLE9BQU8sR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUM1QixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEVBQUUsR0FBRSxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFFN0Isa0JBQWtCO1FBQ2xCSixHQUFHLENBQUNLLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDMUJWLGlEQUFTLENBQUMsTUFBTSxFQUFFTyxJQUFJLEVBQUU7Z0JBQ3RCSSxJQUFJLEVBQUUsR0FBRztnQkFDVEMsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDO1lBQ0ZaLGlEQUFTLENBQUMsSUFBSSxFQUFFUSxFQUFFLEVBQUU7Z0JBQ2xCRyxJQUFJLEVBQUUsR0FBRztnQkFDVEMsTUFBTSxFQUFFLElBQUk7YUFDYixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUhQLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDBCQUEwQjtTQUFFLENBQUMsQ0FBQztRQUM5REMsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7SUFDeEMsT0FBTztRQUNMWixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVosT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dGpzLXByb2plY3QvLi9wYWdlcy9hcGkvc2F2ZS11c2VyLmpzPzNmNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnY29va2llJztcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcblxuY29uc3QgaGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBuYW1lLCBpZCB9ID0gcmVxLmJvZHk7XG5cbiAgICAvLyBTZXQgdGhlIGNvb2tpZXNcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJywgW1xuICAgICAgc2VyaWFsaXplKCduYW1lJywgbmFtZSwge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIG1heEFnZTogMzYwMCwgLy8gQ29va2llIGV4cGlyYXRpb24gdGltZSAoaW4gc2Vjb25kcylcbiAgICAgIH0pLFxuICAgICAgc2VyaWFsaXplKCdpZCcsIGlkLCB7XG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgbWF4QWdlOiAzNjAwLCAvLyBDb29raWUgZXhwaXJhdGlvbiB0aW1lIChpbiBzZWNvbmRzKVxuICAgICAgfSksXG4gICAgXSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdDb29raWVzIHNldCBzdWNjZXNzZnVsbHknIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiY29va2llIHNldCBzdWNjZXNzZnVsbHlcIilcbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbInNlcmlhbGl6ZSIsIk5leHRBcGlSZXF1ZXN0IiwiTmV4dEFwaVJlc3BvbnNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJpZCIsImJvZHkiLCJzZXRIZWFkZXIiLCJwYXRoIiwibWF4QWdlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/save-user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/save-user.js"));
module.exports = __webpack_exports__;

})();