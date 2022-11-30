"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomModal;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomModal(props) {
  function closeModal() {
    if (!!props.callbackClose) props.callbackClose();
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.centeredView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    animationType: "fade",
    transparent: true,
    visible: props.visible,
    onRequestClose: closeModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.centeredViewInner
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.modalView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: closeModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.closeButton
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.closeButtonText
  }, "x"))), props.children))));
}
var mobile = _reactNative.StyleSheet.create({
  centeredView: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  centeredViewInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F10D26",
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    position: "absolute",
    top: -30,
    right: -35,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    // backgroundColor: "black",
    height: 35,
    width: 35,
    backgroundColor: "#F10D26",
    alignItems: "center",
    justifyContent: "center"
  },
  closeButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginTop: -5
  }
});