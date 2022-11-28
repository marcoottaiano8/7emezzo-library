"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _CustomInputBox = _interopRequireDefault(require("../CustomInputBox"));
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Login() {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isMobile = _useResponsive2[2];
  function log(e) {
    console.log("test");
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.mainContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/sfondo2.jpg"),
    resizeMode: "cover",
    style: mobile.backgroundImg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.title
  }, "7 e mezzo"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: isMobile ? mobile.container : [mobile.container, desktop.container]
  }, /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: "Email...",
    callbackChange: log
  }), /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: "Password...",
    callbackChange: log
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Accedi"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: mobile.subtitle,
    onPress: log
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, "Non hai un account? Registrati")))));
}
var mobile = _reactNative.StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: _reactNative.Dimensions.get("window").height
  },
  backgroundImg: {
    alignItems: "center",
    height: _reactNative.Dimensions.get("window").height,
    width: _reactNative.Dimensions.get("window").width
  },
  container: {
    flex: 1,
    marginBottom: _reactNative.Dimensions.get("window").height / 4,
    marginHorizontal: 30,
    justifyContent: "flex-end"
  },
  title: {
    marginTop: 80,
    paddingTop: 40,
    color: "#3c5070",
    fontSize: 50,
    textAlign: "center",
    textShadowOffset: {
      width: 3,
      height: 1
    },
    textShadowColor: "#ffe4e5",
    textShadowRadius: 1,
    fontWeight: "bold"
  },
  subtitle: {
    marginTop: 20,
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
var desktop = _reactNative.StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
    width: _reactNative.Dimensions.get("window").width / 3
  }
});