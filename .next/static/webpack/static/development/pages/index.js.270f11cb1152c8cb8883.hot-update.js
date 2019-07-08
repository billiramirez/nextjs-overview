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
        className: "jsx-4208652366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "jsx-4208652366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Podcasts"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4208652366" + " " + "channels",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: channel.id,
          className: "jsx-4208652366" + " " + "channel",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "ima",
          className: "jsx-4208652366",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
          className: "jsx-4208652366",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, channel.title));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2639800015",
        __self: this
      }, "header.jsx-4208652366{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-4208652366{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));grid-gap:15px;padding:15px;}.channel.jsx-4208652366{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-4208652366 img.jsx-4208652366{width:100%;}h2.jsx-4208652366{padding:5px;font-size:0.5em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWxsaXJhbWlyZXovRG9jdW1lbnRzL2JpbGxpL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1csQUFHMEIsQUFNRSxBQU9DLEFBT0gsQUFJQyxXQXZCTyxBQW9CckIsQ0FJa0IsQ0FsQjRDLENBTzFDLGNBWUYsRUF4QkgsRUFhOEIsV0FaekIsQ0F3QlQsU0FDUyxRQXhCcEIsVUFJZ0IsQUFxQmhCLENBYnNCLGFBUFAsT0FRZixNQVBBIiwiZmlsZSI6Ii9Vc2Vycy9iaWxsaXJhbWlyZXovRG9jdW1lbnRzL2JpbGxpL25leHRqcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBcbiAgXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvcmVjb21tZW5kZWQnKTtcbiAgICBsZXQgeyBib2R5OiBjaGFubmVscyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICByZXR1cm4geyBjaGFubmVscyB9O1xuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzO1xuXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIFBvZGNhc3RzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2hhbm5lbHMubWFwKGNoYW5uZWwgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hhbm5lbC5pZH0gY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9e2NoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgIHtjaGFubmVsLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoZWFkZXJ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2hhbm5lbHMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hhbm5lbHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGFubmVsIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keXtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPiAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/billiramirez/Documents/billi/nextjs/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2182694312",
        __self: this
      }, "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iaWxsaXJhbWlyZXovRG9jdW1lbnRzL2JpbGxpL25leHRqcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RVMsQUFHc0IsU0FDYSxzQkFDTCxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL2JpbGxpcmFtaXJlei9Eb2N1bWVudHMvYmlsbGkvbmV4dGpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIFxuICBcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy9yZWNvbW1lbmRlZCcpO1xuICAgIGxldCB7IGJvZHk6IGNoYW5uZWxzIH0gPSBhd2FpdCByZXEuanNvbigpO1xuICAgIHJldHVybiB7IGNoYW5uZWxzIH07XG4gIH1cblxuICByZW5kZXIoKXtcblxuICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHM7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgUG9kY2FzdHNcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbm5lbHNcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjaGFubmVscy5tYXAoY2hhbm5lbCA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtjaGFubmVsLmlkfSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAge2NoYW5uZWwudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGhlYWRlcntcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NzU2Y2E7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGFubmVscyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGFubmVse1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoYW5uZWwgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+ICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/Users/billiramirez/Documents/billi/nextjs/pages/index.js */"));
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
//# sourceMappingURL=index.js.270f11cb1152c8cb8883.hot-update.js.map