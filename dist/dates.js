"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnglishDate = EnglishDate;
exports.NepaliDate = NepaliDate;
exports.OurNepaliDatePicker = OurNepaliDatePicker;
var _react = _interopRequireDefault(require("react"));
var _dateContext = require("./contexts/dateContext");
var _Datepicker = require("./Datepicker");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function NepaliDate() {
  const {
    nepaliDate
  } = (0, _dateContext.useDate)();
  return nepaliDate;
}
function EnglishDate() {
  const {
    englishDate
  } = (0, _dateContext.useDate)();
  return englishDate;
}
function OurNepaliDatePicker() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Datepicker.Datepicker, null));
}