"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Datepicker = require("./Datepicker");
var _dateContext = require("./contexts/dateContext");
function Main() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_dateContext.DateProvider, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Datepicker:"), /*#__PURE__*/React.createElement(_Datepicker.Datepicker, null))));
}
var _default = Main;
exports.default = _default;