"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoggedState = exports.saveUserData = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _utils = require("../utils/utils");
var setLoggedState = function setLoggedState(obj) {
  return function (dispatch) {
    try {
      return dispatch(setLoggedStateAction(obj));
    } catch (err) {
      console.error(err);
    }
  };
};
exports.setLoggedState = setLoggedState;
var saveUserData = function saveUserData(userData) {
  return function (dispatch) {
    try {
      return dispatch(saveUserDataAction(userData));
    } catch (err) {
      console.error(err);
    }
  };
};
exports.saveUserData = saveUserData;
var userDuck = (0, _toolkit.createSlice)({
  name: "userDuck",
  initialState: {
    isLoggedIn: undefined,
    userData: undefined
  },
  reducers: {
    setLoggedStateAction: function setLoggedStateAction(state, action) {
      state.isLoggedIn = action.payload;
    },
    saveUserDataAction: function saveUserDataAction(state, action) {
      state.userData = action.payload;
    }
  }
});
var _default = userDuck.reducer;
exports.default = _default;
var _userDuck$actions = userDuck.actions,
  setLoggedStateAction = _userDuck$actions.setLoggedStateAction,
  saveUserDataAction = _userDuck$actions.saveUserDataAction;