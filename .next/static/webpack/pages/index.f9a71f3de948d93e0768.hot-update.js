webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/package.js":
/*!*********************************!*\
  !*** ./src/sections/package.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Package; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_price_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/price-card */ \"./src/components/price-card.js\");\n/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/button-group */ \"./src/components/button-group.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var data_packages_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! data/packages.js */ \"./src/data/packages.js\");\n\n\nvar _jsxFileName = \"/Users/aantoci/Documents/ScratchBook/nextjs/landing-page/src/sections/package.js\",\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1024\n    },\n    items: 3,\n    draggable: false\n  },\n  tablet: {\n    breakpoint: {\n      max: 1023,\n      min: 640\n    },\n    items: 2,\n    draggable: true\n  },\n  mobile: {\n    breakpoint: {\n      max: 639,\n      min: 0\n    },\n    items: 1,\n    draggable: true\n  }\n};\nfunction Package() {\n  _s();\n\n  var monthly = data_packages_js__WEBPACK_IMPORTED_MODULE_8__[\"packages\"].monthly,\n      annual = data_packages_js__WEBPACK_IMPORTED_MODULE_8__[\"packages\"].annual;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    active: 'monthly',\n    pricingPlan: monthly\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var handlePricingPlan = function handlePricingPlan() {\n    if (plan === 'annual') {\n      setState({\n        active: 'annual',\n        pricingPlan: annual\n      });\n    } else {\n      setState({\n        active: 'monthly',\n        pricingPlan: monthly\n      });\n    }\n  };\n\n  var sliderParams = {\n    additionalTransfrom: 0,\n    arrows: false,\n    autoPlaySpeed: 3000,\n    centerMode: false,\n    className: '',\n    slidesToSlide: 1,\n    items: 3,\n    containerClass: 'carousel-container',\n    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_button_group__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 24\n      }\n    }),\n    dotListClass: '',\n    focusOnSelect: false,\n    infinite: false,\n    keyBoardControl: false,\n    itemClass: '',\n    minimumTouchDrag: 80,\n    renderButtonGroupOutside: true,\n    renderDotsOutside: false,\n    responsive: responsive,\n    showDots: false,\n    sliderClass: ''\n  };\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    id: \"pricing\",\n    sx: {\n      variant: 'section.pricing'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    slogan: \"Pricing plan\",\n    title: \"Choose your pricing plan\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    sx: styles.buttonGroup,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.buttonGroupInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"button\", {\n    className: state.active === 'monthly' ? 'active' : '',\n    type: \"button\",\n    \"aria-label\": \"Monthly\",\n    onClick: function onClick() {\n      return handlePricingPlan('monthly');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"Monthly plan\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"button\", {\n    className: state.active === 'monthly' ? 'active' : '',\n    type: \"button\",\n    \"aria-label\": \"Monthly\",\n    onClick: function onClick() {\n      return handlePricingPlan('monthly');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"Monthly plan\")))));\n}\n\n_s(Package, \"s66cXBiJ75jLEv7IBCc+NSxt7PQ=\");\n\n_c = Package;\nvar fadeIn = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n\"])));\nvar fadeIn2 = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"keyframes\"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    transform: translateY(50%);\\n    opacity: 0;\\n  }\\n  to {\\n\\t\\ttransform: translateY(0);\\n    opacity: 1;\\n  }\\n\"])));\nvar styles = {\n  pricingWrapper: {\n    mb: '-40px',\n    mt: '-40px',\n    mx: -3,\n    display: 'flex',\n    flexDirection: 'column',\n    flexWrap: 'wrap',\n    '&.pricing__wrapper .package__card': {\n      '.package__header': {\n        animation: \"\".concat(fadeIn, \" 0.8s ease-in\")\n      },\n      'ul > li': {\n        animation: \"\".concat(fadeIn2, \" 0.7s ease-in\")\n      },\n      '.package__price': {\n        animation: \"\".concat(fadeIn2, \" 0.9s ease-in\")\n      },\n      button: {\n        animation: \"\".concat(fadeIn2, \" 1s ease-in\")\n      }\n    },\n    '.carousel-container': {\n      width: '100%',\n      '> ul > li ': {\n        display: 'flex'\n      }\n    },\n    '.button__group': {\n      display: ['flex', null, null, null, 'none'],\n      mb: [4, null, null, null, 0]\n    }\n  },\n  pricingItem: {\n    mx: 3,\n    display: 'flex',\n    flexShrink: 0,\n    flex: '1 1 auto'\n  },\n  buttonGroup: {\n    justifyContent: 'center',\n    mb: '7',\n    mt: ['-15px', '-35px'],\n    position: 'relative',\n    zIndex: 2\n  },\n  buttonGroupInner: {\n    display: 'flex',\n    padding: '7px',\n    margin: '0 auto',\n    borderRadius: '5px',\n    backgroundColor: '#F7F8FB',\n    button: {\n      border: 0,\n      padding: ['15px 20px', '15px 27px'],\n      borderRadius: '5px',\n      color: 'text',\n      fontSize: [1, 2],\n      lineHeight: 1.2,\n      fontWeight: 500,\n      backgroundColor: 'transparent',\n      cursor: 'pointer',\n      fontFamily: 'body',\n      letterSpacing: '-0.24px',\n      transition: 'all 0.3s',\n      '&.active': {\n        color: '#0f2137',\n        backgroundColor: '#ffffff',\n        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)'\n      },\n      '&:focus': {\n        outline: 0\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Package\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3BhY2thZ2UuanM/MjJmNSJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsImRyYWdnYWJsZSIsInRhYmxldCIsIm1vYmlsZSIsIlBhY2thZ2UiLCJtb250aGx5IiwicGFja2FnZXMiLCJhbm51YWwiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInByaWNpbmdQbGFuIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZVByaWNpbmdQbGFuIiwicGxhbiIsInNsaWRlclBhcmFtcyIsImFkZGl0aW9uYWxUcmFuc2Zyb20iLCJhcnJvd3MiLCJhdXRvUGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNsYXNzTmFtZSIsInNsaWRlc1RvU2xpZGUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwia2V5Qm9hcmRDb250cm9sIiwiaXRlbUNsYXNzIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsInZhcmlhbnQiLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImJ1dHRvbkdyb3VwSW5uZXIiLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJmYWRlSW4yIiwicHJpY2luZ1dyYXBwZXIiLCJtYiIsIm10IiwibXgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiYW5pbWF0aW9uIiwiYnV0dG9uIiwid2lkdGgiLCJwcmljaW5nSXRlbSIsImZsZXhTaHJpbmsiLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInpJbmRleCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJjb2xvciIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJmb250RmFtaWx5IiwibGV0dGVyU3BhY2luZyIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJvdXRsaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGFBQVMsRUFBRTtBQUhKLEdBRFE7QUFNakJDLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsYUFBUyxFQUFFO0FBSEwsR0FOUztBQVdqQkUsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxhQUFTLEVBQUU7QUFITDtBQVhTLENBQW5CO0FBa0JlLFNBQVNHLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxNQUN4QkMsT0FEd0IsR0FDSkMseURBREksQ0FDeEJELE9BRHdCO0FBQUEsTUFDZkUsTUFEZSxHQUNKRCx5REFESSxDQUNmQyxNQURlOztBQUFBLGtCQUVOQyxzREFBUSxDQUFDO0FBQ2pDQyxVQUFNLEVBQUUsU0FEeUI7QUFFakNDLGVBQVcsRUFBRUw7QUFGb0IsR0FBRCxDQUZGO0FBQUEsTUFFekJNLEtBRnlCO0FBQUEsTUFFbEJDLFFBRmtCOztBQU1oQyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBSUMsSUFB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RSxLQUpFO0FBS2hCQyxtQkFBZSxFQUFFLFNBTEQ7QUFNaEJYLFVBQU0sRUFBRTtBQUNOWSxZQUFNLEVBQUUsQ0FERjtBQUVOSixhQUFPLEVBQUUsQ0FBQyxXQUFELEVBQWMsV0FBZCxDQUZIO0FBR05FLGtCQUFZLEVBQUUsS0FIUjtBQUlORyxXQUFLLEVBQUUsTUFKRDtBQUtOQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxKO0FBTU5DLGdCQUFVLEVBQUUsR0FOTjtBQU9OQyxnQkFBVSxFQUFFLEdBUE47QUFRTkwscUJBQWUsRUFBRSxhQVJYO0FBU05NLFlBQU0sRUFBRSxTQVRGO0FBVU5DLGdCQUFVLEVBQUUsTUFWTjtBQVdOQyxtQkFBYSxFQUFFLFNBWFQ7QUFZTkMsZ0JBQVUsRUFBRSxVQVpOO0FBYU4sa0JBQVk7QUFDVlAsYUFBSyxFQUFFLFNBREc7QUFFVkYsdUJBQWUsRUFBRSxTQUZQO0FBR1ZVLGlCQUFTLEVBQUU7QUFIRCxPQWJOO0FBa0JOLGlCQUFXO0FBQ1RDLGVBQU8sRUFBRTtBQURBO0FBbEJMO0FBTlE7QUE5Q0wsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZWN0aW9ucy9wYWNrYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgQm94LCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL3ByaWNlLWNhcmQnO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IHsgcGFja2FnZXMgfSBmcm9tICdkYXRhL3BhY2thZ2VzLmpzJztcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICBpdGVtczogMyxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA2NDAgfSxcbiAgICBpdGVtczogMixcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhY2thZ2UoKSB7XG4gIGNvbnN0IHsgbW9udGhseSwgYW5udWFsIH0gPSBwYWNrYWdlcztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgcHJpY2luZ1BsYW46IG1vbnRobHksXG4gIH0pO1xuICBjb25zdCBoYW5kbGVQcmljaW5nUGxhbiA9ICgpID0+IHtcbiAgICBpZiAocGxhbiA9PT0gJ2FubnVhbCcpIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiAnYW5udWFsJyxcbiAgICAgICAgcHJpY2luZ1BsYW46IGFubnVhbCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgICAgICBwcmljaW5nUGxhbjogbW9udGhseSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzbGlkZXJQYXJhbXMgPSB7XG4gICAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGF1dG9QbGF5U3BlZWQ6IDMwMDAsXG4gICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzbGlkZXNUb1NsaWRlOiAxLFxuICAgIGl0ZW1zOiAzLFxuICAgIGNvbnRhaW5lckNsYXNzOiAnY2Fyb3VzZWwtY29udGFpbmVyJyxcbiAgICBjdXN0b21CdXR0b25Hcm91cDogPEJ1dHRvbkdyb3VwIC8+LFxuICAgIGRvdExpc3RDbGFzczogJycsXG4gICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgaW5maW5pdGU6IGZhbHNlLFxuICAgIGtleUJvYXJkQ29udHJvbDogZmFsc2UsXG4gICAgaXRlbUNsYXNzOiAnJyxcbiAgICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG4gICAgcmVuZGVyRG90c091dHNpZGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gICAgc2hvd0RvdHM6IGZhbHNlLFxuICAgIHNsaWRlckNsYXNzOiAnJyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnByaWNpbmcnIH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXIgc2xvZ2FuPVwiUHJpY2luZyBwbGFuXCIgdGl0bGU9XCJDaG9vc2UgeW91ciBwcmljaW5nIHBsYW5cIiAvPlxuXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cElubmVyfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5hY3RpdmUgPT09ICdtb250aGx5JyA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW9udGhseVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVByaWNpbmdQbGFuKCdtb250aGx5Jyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1vbnRobHkgcGxhblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuYWN0aXZlID09PSAnbW9udGhseScgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vbnRobHlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmljaW5nUGxhbignbW9udGhseScpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNb250aGx5IHBsYW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nV3JhcHBlcjoge1xuICAgIG1iOiAnLTQwcHgnLFxuICAgIG10OiAnLTQwcHgnLFxuICAgIG14OiAtMyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAnJi5wcmljaW5nX193cmFwcGVyIC5wYWNrYWdlX19jYXJkJzoge1xuICAgICAgJy5wYWNrYWdlX19oZWFkZXInOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGVhc2UtaW5gLFxuICAgICAgfSxcbiAgICAgICd1bCA+IGxpJzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgZWFzZS1pbmAsXG4gICAgICB9LFxuICAgICAgJy5wYWNrYWdlX19wcmljZSc6IHtcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjlzIGVhc2UtaW5gLFxuICAgICAgfSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDFzIGVhc2UtaW5gLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICc+IHVsID4gbGkgJzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJy5idXR0b25fX2dyb3VwJzoge1xuICAgICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgfSxcbiAgcHJpY2luZ0l0ZW06IHtcbiAgICBteDogMyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFNocmluazogMCxcbiAgICBmbGV4OiAnMSAxIGF1dG8nLFxuICB9LFxuICBidXR0b25Hcm91cDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYjogJzcnLFxuICAgIG10OiBbJy0xNXB4JywgJy0zNXB4J10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyLFxuICB9LFxuICBidXR0b25Hcm91cElubmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6ICc3cHgnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjdGOEZCJyxcbiAgICBidXR0b246IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIHBhZGRpbmc6IFsnMTVweCAyMHB4JywgJzE1cHggMjdweCddLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMjRweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJyMwZjIxMzcnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAzcHggNHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSknLFxuICAgICAgfSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/package.js\n");

/***/ })

})