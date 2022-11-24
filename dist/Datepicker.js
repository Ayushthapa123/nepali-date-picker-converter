"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datepicker = Datepicker;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
var _react = _interopRequireWildcard(require("react"));
var _data = require("./datepicker/data");
var _findLeapNepaliYears = require("./datepicker/findLeapNepaliYears");
var _convertToAd = _interopRequireDefault(require("./datepicker/convertToAd"));
require("./css/datepicker.css");
var _md = require("react-icons/md");
var _dateContext = require("./contexts/dateContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Datepicker() {
  const {
    nepaliDate,
    setNepaliDate
  } = (0, _dateContext.useDate)();
  const {
    englishDate
  } = (0, _dateContext.useDate)();
  const [date, setDate] = (0, _react.useState)('');
  const [currentyear, setCurrentyear] = (0, _react.useState)(_data.allyears[0]);
  const [currentmonth, setCurrentmonth] = (0, _react.useState)(_data.months[0]);
  const [endofmonth, setEndofmonth] = (0, _react.useState)(_data.endofmonths[0][0]);
  const [yearindex, setYearindex] = (0, _react.useState)(0);
  const [monthindex, setMonthindex] = (0, _react.useState)(0);
  const [day, setDay] = (0, _react.useState)(1);
  const [showcalender, setShowcalender] = (0, _react.useState)(false);
  const [start_week_padding, setStartWeekPadding] = (0, _react.useState)('');
  const [start_week_padding_array, setStartWeekPaddingarray] = (0, _react.useState)([]);
  let alldays = [];
  function changeColor(e) {
    let buttons = document.getElementsByClassName("daybuttons");
    for (let x = 0; x < buttons.length; x++) {
      buttons[x].style.backgroundColor = "";
      e.target.style.backgroundColor = "red";
    }
  }

  // function generateYears() {
  //   for (let i = minyear; i <= maxyear; i++) {
  //     years.push(i);

  //   }
  // }

  function setAlldays() {
    let d = [];
    for (let i = 1; i <= Number(endofmonth); i++) {
      d.push(i);
    }
    alldays = d;
  }
  function setMonthdays() {
    setEndofmonth(_data.endofmonths[yearindex][monthindex]);
  }
  function weekStartDay() {
    console.log("yearindex", yearindex);
    console.log("monthindex", monthindex);
    let leapyear_included = 0;
    for (let i = 0; i < yearindex; i++) {
      if (_data.leapyearsindex.includes(i)) {
        leapyear_included++;
      }
    }
    console.log("leap Year included", leapyear_included);
    //here 2 is: because 2000 baiskh was started with tuesday(3 rd of week remaining padding of 2)
    // let totaldays=3 + yearindex*365;
    let totaldays_with_padding = 4 + yearindex * 365 + leapyear_included;
    for (let j = 0; j <= monthindex; j++) {
      totaldays_with_padding = totaldays_with_padding + _data.endofmonths[yearindex][j];
    }
    totaldays_with_padding = totaldays_with_padding - _data.endofmonths[yearindex][monthindex];
    let padding = totaldays_with_padding % 7;
    setStartWeekPadding(padding);
    let x = [];
    for (let i = 0; i < padding; i++) {
      x.push("-");
    }
    setStartWeekPaddingarray(x);
    // start_week_padding_array= new Array(start_week_padding);

    console.log("padding array", start_week_padding_array);
    console.log("totaldays completed with padding", totaldays_with_padding);
    console.log("week padding", start_week_padding);
  }
  function findWeekStartDay() {
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
    let totaldayswithpadding = totalyeardays + totalmonthdays + 3;
    let padding = totaldayswithpadding % 7;
    let x = [];
    for (let i = 0; i < padding; i++) {
      x.push("-");
    }
    setStartWeekPaddingarray(x);
  }
  function ChangeMonth(value) {
    switch (value) {
      case "increase":
        let currentmonthindex2 = _data.months.indexOf(currentmonth);
        if (currentmonthindex2 == 11) currentmonthindex2 = -1;
        setCurrentmonth(_data.months[currentmonthindex2 + 1]);
        setMonthindex(currentmonthindex2 + 1);
        break;
      case "decrease":
        let currentmonthindex = _data.months.indexOf(currentmonth);
        if (currentmonthindex == 0) currentmonthindex = 12;
        setCurrentmonth(_data.months[currentmonthindex - 1]);
        setMonthindex(currentmonthindex - 1);
        break;
      default:
        break;
    }
  }
  function ChangeYear(value) {
    switch (value) {
      case "increase":
        let currentyearindex2 = _data.allyears.indexOf(Number(currentyear));
        if (currentyearindex2 === 98) currentyearindex2 = -1;
        setCurrentyear(_data.allyears[currentyearindex2 + 1]);
        setYearindex(currentyearindex2 + 1);
        break;
      case "decrease":
        let currentyearindex = _data.allyears.indexOf(Number(currentyear));
        if (currentyearindex === 0) currentyearindex = 99;
        setCurrentyear(_data.allyears[currentyearindex - 1]);
        setYearindex(currentyearindex - 1);
        break;
      default:
        break;
    }
  }

  // generateYears();
  setAlldays();
  // let englishdate = ConvertToAd(yearindex, monthindex, day);
  (0, _convertToAd.default)(yearindex, monthindex, day);
  (0, _react.useEffect)(() => {
    setMonthdays();
    setDate("".concat(currentyear, "-").concat(monthindex + 1, "-").concat(day));
    // weekStartDay();
    findWeekStartDay();
    setTimeout(() => setNepaliDate("".concat(currentyear, "-").concat(monthindex + 1, "-").concat(day)), 0);
  }, [yearindex, monthindex, day, start_week_padding]);

  // findLeapNepaliYears();//finds all the years with 366 days

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "date-picker-container"
  }, /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Select your Date",
    value: date,
    onChange: e => setDate(e.target.value),
    onFocus: e => setShowcalender(!showcalender)
  }), showcalender && /*#__PURE__*/_react.default.createElement("div", {
    className: "date-picker"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "month-year"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "back-icon",
    onClick: e => {
      ChangeYear("decrease");
    }
  }, /*#__PURE__*/_react.default.createElement(_md.MdArrowBackIosNew, null)), _data.allyears && /*#__PURE__*/_react.default.createElement("select", {
    onChange: e => {
      setCurrentyear(e.target.value);
      setYearindex(e.target.selectedIndex);
    },
    value: currentyear
  }, _data.allyears.map((allyear, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: allyear,
    id: index,
    key: index + 100
  }, allyear))), /*#__PURE__*/_react.default.createElement("span", {
    className: "front-icon",
    onClick: e => {
      ChangeYear("increase");
    }
  }, /*#__PURE__*/_react.default.createElement(_md.MdArrowForwardIos, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "back-icon",
    onClick: e => ChangeMonth("decrease")
  }, /*#__PURE__*/_react.default.createElement(_md.MdArrowBackIosNew, null)), _data.months && /*#__PURE__*/_react.default.createElement("select", {
    onChange: e => {
      setCurrentmonth(e.target.value);
      setMonthindex(e.target.selectedIndex);
    },
    value: currentmonth
  }, _data.months.map((month, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: month,
    key: index
  }, month))), /*#__PURE__*/_react.default.createElement("span", {
    className: "front-icon",
    onClick: e => ChangeMonth("increase")
  }, /*#__PURE__*/_react.default.createElement(_md.MdArrowForwardIos, null))), _data.weeks && /*#__PURE__*/_react.default.createElement("div", {
    className: "weeks"
  }, _data.weeks.map((week, index) => /*#__PURE__*/_react.default.createElement("span", {
    key: index
  }, week))), /*#__PURE__*/_react.default.createElement("div", {
    className: "days"
  }, alldays && /*#__PURE__*/_react.default.createElement("div", {
    className: "day-buttons"
  }, start_week_padding_array === null || start_week_padding_array === void 0 ? void 0 : start_week_padding_array.map((i, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: index + 100
  }, i)), alldays.map((day, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: index,
    onClick: e => {
      setDay(index + 1);
      changeColor(e);
      setShowcalender(false);
    },
    className: "daybuttons"
  }, day))))));
}