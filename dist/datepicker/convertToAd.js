"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ConvertToAd;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _data = require("./data");
var _dateContext = require("../contexts/dateContext");
function ConvertToAd(yearindex, monthindex, day) {
  const {
    englishDate,
    setEnglishDate
  } = (0, _dateContext.useDate)();
  let totalyeardays = 0;
  for (let i = 0; i < yearindex; i++) {
    for (let j = 0; j < 12; j++) {
      totalyeardays = totalyeardays + _data.endofmonths[i][j];
    }
  }
  let totalmonthdays = 0;
  for (let j = 0; j < monthindex; j++) {
    totalmonthdays = totalmonthdays + _data.endofmonths[yearindex][j];
  }
  let totaldays = totalyeardays + totalmonthdays + day;

  //english reference date
  let year = 1943;
  let month = 3;
  let monthday = 13;
  let daycounts = Number(totaldays);
  for (let i = 1940; i <= 2056; i++) {
    if (_data.englishnonleapyears.includes(i)) {
      if (daycounts > 365) {
        year = year + 1;
        daycounts = daycounts - 365;
      } else if (daycounts <= 365) {
        for (let j = 0; j < 14; j++) {
          //there may be 12 months remaining, for safety i have taken 14
          if (daycounts > _data.englishmonths[month]) {
            month = month + 1;
            daycounts = daycounts - _data.englishmonths[month - 1];
            if (month == 12) {
              month = 0;
              year = year + 1;
              if (_data.englishleapyears.includes(year)) {
                console.log("hii from alternate loop 1");
                monthday = monthday + daycounts;

                //loop here
                for (let k = 0; k < 10; k++) {
                  if (monthday > _data.englishleapmonths[month]) {
                    month = month + 1; //if month==12 assign 0

                    monthday = monthday - _data.englishleapmonths[month - 1];
                    if (month == 12) {
                      month = 0;
                      year = year + 1;
                      break;
                    }
                  } else {
                    break;
                  }
                }
                break;
              }
            }
          } else {
            monthday = monthday + daycounts;
            if (monthday > _data.englishmonths[month]) {
              month = month + 1; //if month==12 assign 0

              // daycounts = daycounts - englishmonths[month - 1];
              monthday = monthday - _data.englishmonths[month - 1];
              // console.log("daycounts", daycounts);

              if (month == 12) {
                month = 0;
                year = year + 1;
                break;
              }
              break;
            } else {
              break;
            }
          }
        }
        break;
      }
    }
    if (_data.englishleapyears.includes(i)) {
      if (daycounts > 366) {
        year = year + 1;
        daycounts = daycounts - 366;
      } else if (daycounts <= 366) {
        for (let j = 0; j < 14; j++) {
          if (daycounts > _data.englishleapmonths[month]) {
            month = month + 1;
            daycounts = daycounts - _data.englishleapmonths[month - 1];
            if (month == 12) {
              month = 0;
              year = year + 1;
              //needs alternate loop
              if (_data.englishnonleapyears.includes(year)) {
                console.log("hii from alternate loop 2");
                monthday = monthday + daycounts;

                //loop here
                for (let k = 0; k < 10; k++) {
                  if (monthday > _data.englishmonths[month]) {
                    month = month + 1; //if month==12 assign 0

                    monthday = monthday - _data.englishmonths[month - 1];
                    if (month == 12) {
                      month = 0;
                      year = year + 1;
                      break;
                    }
                  } else {
                    break;
                  }
                }
                break;
              }
            }
          } else {
            monthday = monthday + daycounts;
            if (monthday > _data.englishleapmonths[month]) {
              month = month + 1; //if month==12 assign 0
              // daycounts = daycounts - englishleapmonths[month - 1]
              monthday = monthday - _data.englishleapmonths[month - 1];
              if (month == 12) {
                month = 0;
                year = year + 1;
                break;
              }
              break;
            } else {
              break;
            }
          }
        }
        break;
      }
    }
  }

  // console.log("year", year);
  // console.log("month", month);
  // console.log("monthday", monthday)

  setEnglishDate("".concat(year, "-").concat(month + 1, "-").concat(monthday));
  return {
    year,
    month: month + 1,
    monthday
  };
}