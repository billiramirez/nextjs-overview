webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/billiramirez/Documents/billi/nextjs/pages/index.js";




var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1470273157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-1470273157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Podcasts"), channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: channel.id,
          className: "jsx-1470273157" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "ima",
          className: "jsx-1470273157",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-1470273157",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, channel.title));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3036025732",
        __self: this
      }, "header.jsx-1470273157{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channel.jsx-1470273157{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWxsaXJhbWlyZXovRG9jdW1lbnRzL2JpbGxpL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ1csQUFHMEIsQUFPRyxXQU5LLEdBT0QsZ0JBTkwsRUFPOEIsV0FOekIsa0JBQ3BCLFdBTUEiLCJmaWxlIjoiL1VzZXJzL2JpbGxpcmFtaXJlei9Eb2N1bWVudHMvYmlsbGkvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIFxuICBcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpO1xuICAgIGxldCB7IGJvZHk6IGNoYW5uZWxzIH0gPSBhd2FpdCByZXEuanNvbigpO1xuICAgIHJldHVybiB7IGNoYW5uZWxzIH07XG4gIH1cblxuICByZW5kZXIoKXtcblxuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgUG9kY2FzdHNcbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAge1xuICAgICAgICAgIGNoYW5uZWxzLm1hcChjaGFubmVsID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjaGFubmVsLmlkfSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgc3JjPXtjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJpbWFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAge2NoYW5uZWwudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoYW5uZWx7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT4gIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/billiramirez/Documents/billi/nextjs/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2182694312",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWxsaXJhbWlyZXovRG9jdW1lbnRzL2JpbGxpL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RFMsQUFHc0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2JpbGxpcmFtaXJlei9Eb2N1bWVudHMvYmlsbGkvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIFxuICBcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpO1xuICAgIGxldCB7IGJvZHk6IGNoYW5uZWxzIH0gPSBhd2FpdCByZXEuanNvbigpO1xuICAgIHJldHVybiB7IGNoYW5uZWxzIH07XG4gIH1cblxuICByZW5kZXIoKXtcblxuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgUG9kY2FzdHNcbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAge1xuICAgICAgICAgIGNoYW5uZWxzLm1hcChjaGFubmVsID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjaGFubmVsLmlkfSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgc3JjPXtjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJpbWFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAge2NoYW5uZWwudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoYW5uZWx7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT4gIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/billiramirez/Documents/billi/nextjs/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var req, _ref, channels;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://api.audioboom.com/channels/recommended');

              case 2:
                req = _context.sent;
                _context.next = 5;
                return req.json();

              case 5:
                _ref = _context.sent;
                channels = _ref.body;
                return _context.abrupt("return", {
                  channels: channels
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.e0eb8fd1c4fe3f0ffd2e.hot-update.js.map