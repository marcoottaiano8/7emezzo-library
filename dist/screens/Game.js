"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Game;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
var _commonStyle = _interopRequireDefault(require("../style/commonStyle"));
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Game() {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isDesktop = _useResponsive2[2];
  function log() {
    console.log("ciao");
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.mainContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/pokerTable.jpg"),
    resizeMode: "cover",
    style: mobile.backgroundImg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.gameContainer, isDesktop && desktop.gameContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.gameRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row-reverse"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/venomK.jpg"),
    style: isDesktop ? [desktop.card, desktop.frontCard] : [mobile.card, mobile.frontCard],
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/electro4.jpg"),
    style: [isDesktop ? [desktop.card, desktop.frontCard] : [mobile.card, mobile.frontCard], {
      marginRight: -45
    }],
    resizeMode: "contain"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, "6")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.gameRowCenter, isDesktop && desktop.gameRowCenter]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.cardContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "column"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/goblinQ.jpg"),
    style: isDesktop ? [desktop.card, desktop.leftCard] : [mobile.card, mobile.leftCard],
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/carnage7.jpg"),
    style: [isDesktop ? [desktop.card, desktop.leftCard] : [mobile.card, mobile.leftCard], {
      marginTop: -80
    }],
    resizeMode: "contain"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, "6")), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/back.jpg"),
    style: isDesktop ? desktop.card : mobile.card,
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.cardContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, "6"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "column-reverse"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/rhino3.jpg"),
    style: isDesktop ? [desktop.card, desktop.rigthCard] : [mobile.card, mobile.rigthCard],
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/thanosA.jpg"),
    style: [isDesktop ? [desktop.card, desktop.rigthCard] : [mobile.card, mobile.rigthCard], {
      marginBottom: -80
    }],
    resizeMode: "contain"
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.gameRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, "Effettua la tua giocata:"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, "6"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/mysterio5.jpg"),
    style: isDesktop ? [desktop.card, desktop.myCard] : [mobile.card, mobile.myCard],
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/octopusJ.jpg"),
    style: [isDesktop ? [desktop.card, desktop.myCard] : [mobile.card, mobile.myCard], {
      marginLeft: -45
    }],
    resizeMode: "contain"
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.buttonContainer, isDesktop && desktop.buttonContainer]
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Carta",
    callback: log
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Stai",
    callback: log
  }))));
}
var mobile = _reactNative.StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: _reactNative.Dimensions.get("window").width,
    height: _reactNative.Dimensions.get("window").height
  },
  backgroundImg: {
    height: _reactNative.Dimensions.get("window").height,
    width: _reactNative.Dimensions.get("window").width
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  cardContainer: {
    alignItems: "center",
    flexDirection: "row"
  },
  gameRow: {
    alignItems: "center",
    justifyContent: "center"
  },
  gameRowCenter: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: -50
  },
  card: {
    height: 131,
    width: 94
  },
  frontCard: {
    marginTop: -50,
    marginBottom: 20
  },
  leftCard: {
    transform: [{
      rotate: "-90deg"
    }],
    marginLeft: -30,
    marginRight: 30
  },
  rigthCard: {
    transform: [{
      rotate: "90deg"
    }],
    marginRight: -30,
    marginLeft: 30
  },
  myCard: {
    marginTop: 10
  },
  score: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
    // paddingBottom: 1,
  },

  gameContainer: {
    overflow: "hidden",
    flex: 5,
    justifyContent: "space-between",
    paddingBottom: 40
  }
});
var desktop = _reactNative.StyleSheet.create({
  card: {
    height: 175,
    width: 125
  },
  frontCard: {
    marginTop: 30,
    marginBottom: 20
  },
  gameContainer: {
    paddingBottom: 10
  },
  leftCard: {
    transform: [{
      rotate: "-90deg"
    }],
    marginRight: 70
  },
  rigthCard: {
    transform: [{
      rotate: "90deg"
    }],
    marginLeft: 70
  },
  myCard: {
    marginTop: 20
  },
  gameRowCenter: {
    justifyContent: "space-around",
    marginBottom: -20
  },
  buttonContainer: {
    justifyContent: "space-around"
  }
});