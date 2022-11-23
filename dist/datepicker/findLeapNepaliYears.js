"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLeapNepaliYears = findLeapNepaliYears;
var _data = require("./data");
function findLeapNepaliYears() {
  for (let i = 0; i < 98; i++) {
    let sum = 0;
    for (let j = 0; j < 12; j++) {
      sum = sum + _data.endofmonths[i][j];
    }
    if (sum == 366) {
      console.log("leap year", i);
    }
  }
}