"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnglishDate = EnglishDate;
exports.NepaliDate = NepaliDate;
var _dateContext = require("./contexts/dateContext");
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