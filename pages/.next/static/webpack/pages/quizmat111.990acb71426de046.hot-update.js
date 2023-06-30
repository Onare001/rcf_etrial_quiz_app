"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quizmat111",{

/***/ "./pages/quizmat111.js":
/*!*****************************!*\
  !*** ./pages/quizmat111.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/styles.module.css */ \"./assets/css/styles.module.css\");\n/* harmony import */ var _assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_examDisp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/examDisp */ \"./components/examDisp.js\");\n/* harmony import */ var _constants_mat111__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/mat111 */ \"./constants/mat111.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar StartQuiz = function(param) {\n    var name = param.name, id = param.id;\n    _s();\n    var _s1 = $RefreshSig$();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), autoSubmitted = ref[0], setAutoSubmitted = ref[1];\n    var CountdownTimer = function() {\n        _s1();\n        var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(900), countdown = ref[0], setCountdown = ref[1]; // 900 seconds = 15 minutes\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n            var timer = setInterval(function() {\n                setCountdown(function(prevCountdown) {\n                    return prevCountdown - 1;\n                });\n            }, 1000);\n            return function() {\n                clearInterval(timer);\n            };\n        }, []);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n            if (countdown === 0) {\n                console.log(\"Countdown finished!\");\n                setAutoSubmitted(true);\n            }\n        }, [\n            countdown\n        ]);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n            console.log(\"autoSubmitted:\", autoSubmitted);\n        }, [\n            autoSubmitted\n        ]);\n        var minutes = Math.floor(countdown / 60);\n        var seconds = countdown % 60;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                minutes < 10 ? \"0\" + minutes : minutes,\n                \":\",\n                seconds < 10 ? \"0\" + seconds : seconds\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this);\n    };\n    _s1(CountdownTimer, \"iVLygEsQXHEdATcSz8qxD8jrZyY=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"rcf_logo_172_X_155.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                        lineNumber: 51,\n                        columnNumber: 4\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Start Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                        lineNumber: 52,\n                        columnNumber: 4\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                lineNumber: 50,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                        src: \"rcf_logo_172_X_155.png\",\n                        alt: \"RCF_Logo\",\n                        width: \"48\",\n                        height: \"48\"\n                    }, void 0, false, {\n                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().user_info),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().timer),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CountdownTimer, {}, void 0, false, {\n                                    fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 4\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                lineNumber: 57,\n                                columnNumber: 4\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImgCircle),\n                                src: \"avatar.png\",\n                                alt: \"img\",\n                                width: \"57\",\n                                height: \"51\"\n                            }, void 0, false, {\n                                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                lineNumber: 62,\n                                columnNumber: 4\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().userid),\n                                        children: id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 5\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 48\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().user),\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 5\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                                lineNumber: 63,\n                                columnNumber: 4\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                        lineNumber: 56,\n                        columnNumber: 3\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().instruction),\n                children: \"MAT111\"\n            }, void 0, false, {\n                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                lineNumber: 69,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_assets_css_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().exambody),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_examDisp__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        quizData: _constants_mat111__WEBPACK_IMPORTED_MODULE_4__.quizData,\n                        autoSubmitted: autoSubmitted,\n                        setAutoSubmitted: setAutoSubmitted,\n                        name: name,\n                        id: id\n                    }, void 0, false, {\n                        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                        lineNumber: 72,\n                        columnNumber: 4\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                    lineNumber: 71,\n                    columnNumber: 3\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n                lineNumber: 70,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/DAHCROWN/Downloads/rcfapp/rcf_etrial_quiz_app/pages/pages/quizmat111.js\",\n        lineNumber: 49,\n        columnNumber: 2\n    }, _this);\n};\n_s(StartQuiz, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = StartQuiz;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartQuiz);\nvar _c;\n$RefreshReg$(_c, \"StartQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNxQixLQUFHO2dDQUFDUCxTQUFTLEVBQUV4QixnRkFBZ0I7Z0NBQUVpQyxHQUFHLEVBQUMsWUFBWTtnQ0FBQ0MsR0FBRyxFQUFDLEtBQUs7Z0NBQUNDLEtBQUssRUFBQyxJQUFJO2dDQUFDQyxNQUFNLEVBQUMsSUFBSTs7Ozs7cUNBQUU7MENBQ3JGLDhEQUFDYixLQUFHOztrREFDSCw4REFBQ2dCLE1BQUk7d0NBQUNmLFNBQVMsRUFBRXhCLDZFQUFhO2tEQUFHTyxFQUFFOzs7Ozs2Q0FBUTtrREFBQSw4REFBQ2tDLElBQUU7Ozs7NkNBQUU7a0RBQ2hELDhEQUFDRixNQUFJO3dDQUFDZixTQUFTLEVBQUV4QiwyRUFBVztrREFBR00sSUFBSTs7Ozs7NkNBQVE7Ozs7OztxQ0FDdEM7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNJOzBCQUNULDhEQUFDcUMsSUFBRTtnQkFBQ25CLFNBQVMsRUFBRXhCLGtGQUFrQjswQkFBRSxRQUFNOzs7OztxQkFBSzswQkFDN0MsOERBQUN1QixLQUFHO2dCQUFDQyxTQUFTLEVBQUV4QixnRkFBZ0I7MEJBQ2xDLDRFQUFDdUIsS0FBRztvQkFBQ0MsU0FBUyxFQUFFeEIsK0VBQWU7OEJBQzlCLDRFQUFDQyw0REFBSTt3QkFBQ0MsUUFBUSxFQUFFQSx1REFBUTt3QkFBRU0sYUFBYSxFQUFHQSxhQUFhO3dCQUFFQyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO3dCQUFFSCxJQUFJLEVBQUVBLElBQUk7d0JBQUVDLEVBQUUsRUFBRUEsRUFBRTs7Ozs7NkJBQUc7Ozs7O3lCQUM3Rzs7Ozs7cUJBQ0Q7Ozs7OzthQUNBLENBQ0g7QUFDSixDQUFDO0dBbkVLRixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7O0FBdUdmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpem1hdDExMS5qcz9iYWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vYXNzZXRzL2Nzcy9zdHlsZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBRdWl6IGZyb20gXCIuLi9jb21wb25lbnRzL2V4YW1EaXNwXCI7XHJcbmltcG9ydCB7IHF1aXpEYXRhIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9tYXQxMTFcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBTdGFydFF1aXogPSAoeyBuYW1lLCBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW2F1dG9TdWJtaXR0ZWQsIHNldEF1dG9TdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBDb3VudGRvd25UaW1lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb3VudGRvd24sIHNldENvdW50ZG93bl0gPSB1c2VTdGF0ZSg5MDApOyAvLyA5MDAgc2Vjb25kcyA9IDE1IG1pbnV0ZXNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldENvdW50ZG93bigocHJldkNvdW50ZG93bikgPT4gcHJldkNvdW50ZG93biAtIDEpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmIChjb3VudGRvd24gPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ291bnRkb3duIGZpbmlzaGVkIScpO1xyXG4gICAgICAgIHNldEF1dG9TdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtjb3VudGRvd25dKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhdXRvU3VibWl0dGVkOicsIGF1dG9TdWJtaXR0ZWQpO1xyXG4gICAgfSwgW2F1dG9TdWJtaXR0ZWRdKTtcclxuICBcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGNvdW50ZG93biAvIDYwKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBjb3VudGRvd24gJSA2MDtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge21pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzfTpcclxuICAgICAgICB7c2Vjb25kcyA8IDEwID8gJzAnICsgc2Vjb25kcyA6IHNlY29uZHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcblx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuXHRcdDxIZWFkPlxyXG5cdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cInJjZl9sb2dvXzE3Ml9YXzE1NS5wbmdcIiAvPlxyXG5cdFx0XHQ8dGl0bGU+U3RhcnQgUXVpejwvdGl0bGU+XHJcblx0XHQ8L0hlYWQ+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCJyY2ZfbG9nb18xNzJfWF8xNTUucG5nXCIgYWx0PVwiUkNGX0xvZ29cIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIi8+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfaW5mb30+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXJ9PlxyXG5cdFx0XHQ8Q291bnRkb3duVGltZXIvPlxyXG4gICAgICB7LyogPHA+c3RhdHVzPC9wPiAqL31cclxuICAgICAgey8qIDxwPnthdXRvU3VibWl0dGVkfTwvcD4gKi99XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT17c3R5bGVzLkltZ0NpcmNsZX0gc3JjPVwiYXZhdGFyLnBuZ1wiIGFsdD1cImltZ1wiIHdpZHRoPVwiNTdcIiBoZWlnaHQ9XCI1MVwiLz5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VyaWR9PntpZH08L3NwYW4+PGJyLz5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT57bmFtZX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cdCAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmluc3RydWN0aW9ufT5NQVQxMTE8L2gzPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5leGFtYm9keX0+XHJcblx0XHRcdDxRdWl6IHF1aXpEYXRhPXtxdWl6RGF0YX0gYXV0b1N1Ym1pdHRlZD0ge2F1dG9TdWJtaXR0ZWR9IHNldEF1dG9TdWJtaXR0ZWQ9e3NldEF1dG9TdWJtaXR0ZWR9IG5hbWU9e25hbWV9IGlkPXtpZH0vPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgY29va2llc1wiKTtcclxuICAvLyBSZWFkIGNvb2tpZXMgZnJvbSB0aGUgcmVxdWVzdCBoZWFkZXJzXHJcbiAgY29uc3QgY29va2llcyA9IHBhcnNlKGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIHx8ICcnKTtcclxuXHJcbiAgLy8gQWNjZXNzIGluZGl2aWR1YWwgY29va2llIHZhbHVlc1xyXG4gIGNvbnN0IG5hbWUgPSBjb29raWVzLm5hbWUgfHwgJyc7XHJcbiAgY29uc3QgaWQgPSBjb29raWVzLmlkIHx8ICcnO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm5hbWU6XCIsIG5hbWUpO1xyXG4gIGNvbnNvbGUubG9nKFwiaWQ6XCIsIGlkKTtcclxuXHJcbiAgaWYgKCFpZCkge1xyXG4gICAgLy8gQ29va2llIGlzIG5vdCBwcmVzZW50XHJcbiAgICBpZiAoY29udGV4dC5yZXMpIHtcclxuICAgICAgLy8gSWYgcnVubmluZyBvbiB0aGUgc2VydmVyLXNpZGUsIHJlZGlyZWN0IHRvIGluZGV4IHBhZ2VcclxuICAgICAgY29udGV4dC5yZXMuc2V0SGVhZGVyKCdMb2NhdGlvbicsICcvbG9naW4nKTtcclxuICAgICAgY29udGV4dC5yZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgY29udGV4dC5yZXMuZW5kKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiBydW5uaW5nIG9uIHRoZSBjbGllbnQtc2lkZSwgcmVkaXJlY3QgdG8gaW5kZXggcGFnZVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFBhc3MgdGhlIGNvb2tpZSB2YWx1ZXMgYXMgcHJvcHNcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFydFF1aXo7Il0sIm5hbWVzIjpbIkhlYWQiLCJHZXRTZXJ2ZXJTaWRlUHJvcHMiLCJzdHlsZXMiLCJRdWl6IiwicXVpekRhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0YXJ0UXVpeiIsIm5hbWUiLCJpZCIsImF1dG9TdWJtaXR0ZWQiLCJzZXRBdXRvU3VibWl0dGVkIiwiQ291bnRkb3duVGltZXIiLCJjb3VudGRvd24iLCJzZXRDb3VudGRvd24iLCJ0aW1lciIsInNldEludGVydmFsIiwicHJldkNvdW50ZG93biIsImNsZWFySW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJib2R5IiwibGluayIsInJlbCIsImhyZWYiLCJ0aXRsZSIsImhlYWRlciIsImltZyIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVzZXJfaW5mbyIsIkltZ0NpcmNsZSIsInNwYW4iLCJ1c2VyaWQiLCJiciIsInVzZXIiLCJoMyIsImluc3RydWN0aW9uIiwiY29udGFpbmVyIiwiZXhhbWJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/quizmat111.js\n"));

/***/ })

});