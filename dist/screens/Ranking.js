"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ranking;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeWeb = require("react-native-web");
var _commonStyle = _interopRequireDefault(require("../style/commonStyle"));
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var users = [{
  id: 1,
  username: "JustOtto",
  score: 70
}, {
  id: 2,
  username: "Lotto",
  score: 65
}, {
  id: 3,
  username: "Daniele",
  score: 50
}, {
  id: 4,
  username: "Mattia",
  score: 7
}];
function Ranking() {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isDesktop = _useResponsive2[2];
  var renderItem = function renderItem(_ref) {
    var item = _ref.item;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginVertical: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        flexDirection: "row",
        alignItems: "center"
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: mobile.text
    }, item.id), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [mobile.text, {
        fontWeight: "bold",
        fontSize: 20
      }]
    }, item.username)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        flexDirection: "row"
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: mobile.text
    }, item.score, " "), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: mobile.text
    }, "pts")));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _commonStyle.default.mainContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/sfondo.jpg"),
    resizeMode: "cover",
    style: _commonStyle.default.backgroundImg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.table
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/pokerTable.jpg"),
    resizeMode: "cover",
    style: {
      width: 301,
      height: 651,
      borderRadius: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.title
  }, "Classifica"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginHorizontal: 30,
      marginTop: 50
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.FlatList, {
    data: users,
    renderItem: renderItem,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    }
  }))))));
}
var mobile = _reactNative.StyleSheet.create({
  table: {
    alignItems: "center",
    backgroundColor: "white",
    width: 300,
    height: 650,
    marginTop: 40,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 17,
    marginHorizontal: 3
  },
  title: {
    marginTop: 20,
    color: "white",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold"
  }
});