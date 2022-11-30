"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useResponsive3 = _interopRequireDefault(require("./utils/useResponsive"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CustomButton(props) {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isDesktop = _useResponsive2[2];
  var handleClick = function handleClick() {
    if (!!props.callback) {
      props.callback();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    disabled: props.disable,
    style: [mobile.button, props.disable && mobile.disable, isDesktop && desktopStyle.button],
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [mobile.text, isDesktop && desktopStyle.text]
  }, props.label)));
}
CustomButton.defaultProps = {
  label: "Click",
  disable: false
};
var mobile = _reactNative.StyleSheet.create({
  button: {
    backgroundColor: "#F10D26",
    border: "none",
    borderRadius: 30,
    paddingHorizontal: 45,
    paddingVertical: 10,
    marginBottom: 30,
    marginHorizontal: 20
  },
  disable: {
    opacity: 0.5
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});
var desktopStyle = _reactNative.StyleSheet.create({
  text: {
    fontSize: 25
  },
  button: {
    width: 400,
    marginHorizontal: 0
  }
});
var _default = CustomButton;
exports.default = _default;