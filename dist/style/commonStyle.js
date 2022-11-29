"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var commonstyle = _reactNative.StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    minHeight: _reactNative.Dimensions.get("window").height
  },
  backgroundImg: {
    height: _reactNative.Dimensions.get("window").height,
    width: _reactNative.Dimensions.get("window").width
  },
  title: {
    marginTop: 80,
    paddingTop: 40,
    color: "#F10D26",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold"
  }
});
var _default = commonstyle;
exports.default = _default;