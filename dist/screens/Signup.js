"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Signup;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CustomInputBox = _interopRequireDefault(require("../CustomInputBox"));
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
var _commonStyle = _interopRequireDefault(require("../style/commonStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var username, email, password;
function Signup(props) {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isMobile = _useResponsive2[2];
  var _useState = (0, _react.useState)({
      disable: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  function log(e) {
    console.log("test");
  }
  function goToLogin() {
    if (!!props.goToLogin) {
      props.goToLogin();
    }
  }
  function checkSignUp() {
    console.log("registrato");
    goToLogin();
  }
  function setUsername(e) {
    username = e;
    var disable = true;
    if (!!username && !!email && !!password) {
      disable = false;
    }
    setState(_objectSpread(_objectSpread({}, state), {}, {
      disable: disable
    }));
  }
  function setEmail(e) {
    email = e;
    var disable = true;
    if (!!username && !!email && !!password) {
      disable = false;
    }
    setState(_objectSpread(_objectSpread({}, state), {}, {
      disable: disable
    }));
  }
  function setPassword(e) {
    password = e;
    var disable = true;
    if (!!username && !!email && !!password) {
      disable = false;
    }
    setState(_objectSpread(_objectSpread({}, state), {}, {
      disable: disable
    }));
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
    style: isMobile ? mobile.container : [mobile.container, desktop.container]
  }, /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: "Username...",
    callbackChange: setUsername
  }), /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: "Email...",
    callbackChange: setEmail
  }), /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: "Password...",
    callbackChange: setPassword
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Registrati",
    callback: checkSignUp,
    disable: state.disable
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: mobile.subtitle,
    onPress: goToLogin
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, "Hai gi\xE1 un account? Accedi")))));
}
var mobile = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _reactNative.Dimensions.get("window").height / 4,
    marginHorizontal: "auto",
    justifyContent: "flex-end",
    minWidth: _reactNative.Dimensions.get("window").width / 1.5,
    textAlign: "center"
  },
  subtitle: {
    marginTop: 20,
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
});
var desktop = _reactNative.StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 100,
    width: _reactNative.Dimensions.get("window").width / 3,
    minWidth: 0
  }
});