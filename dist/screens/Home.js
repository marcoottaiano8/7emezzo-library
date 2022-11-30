"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
var _commonStyle = _interopRequireDefault(require("../style/commonStyle"));
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Home() {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isDesktop = _useResponsive2[2];
  function log(e) {
    console.log("test");
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _commonStyle.default.mainContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/sfondo.jpg"),
    resizeMode: "cover",
    style: _commonStyle.default.backgroundImg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _commonStyle.default.title
  }, "7 e mezzo"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.container, isDesktop && desktop.container]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/ironman.gif"),
    style: mobile.image
  })), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Gioca",
    callback: log
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Classifica",
    callback: log
  }))));
}
var mobile = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _reactNative.Dimensions.get("window").height / 4,
    justifyContent: "flex-end"
  },
  image: {
    height: 200,
    width: 200
  }
});
var desktop = _reactNative.StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100
  }
});