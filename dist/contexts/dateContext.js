"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateProvider = DateProvider;
exports.useDate = useDate;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const DateContext = /*#__PURE__*/_react.default.createContext();
function useDate() {
  return (0, _react.useContext)(DateContext);
}
function DateProvider(_ref) {
  let {
    children
  } = _ref;
  const [nepaliDate, setNepaliDate] = (0, _react.useState)("2000-1-1");
  const [englishDate, setEnglishDate] = (0, _react.useState)("1943-4-14");
  const value = {
    nepaliDate,
    setNepaliDate,
    englishDate,
    setEnglishDate
  };
  return /*#__PURE__*/_react.default.createElement(DateContext.Provider, {
    value: value
  }, children);
}