"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Game", {
  enumerable: true,
  get: function get() {
    return _Game.default;
  }
});
Object.defineProperty(exports, "Home", {
  enumerable: true,
  get: function get() {
    return _Home.default;
  }
});
Object.defineProperty(exports, "Login", {
  enumerable: true,
  get: function get() {
    return _Login.default;
  }
});
Object.defineProperty(exports, "Ranking", {
  enumerable: true,
  get: function get() {
    return _Ranking.default;
  }
});
Object.defineProperty(exports, "Signup", {
  enumerable: true,
  get: function get() {
    return _Signup.default;
  }
});
Object.defineProperty(exports, "Utils", {
  enumerable: true,
  get: function get() {
    return _utils.default;
  }
});
Object.defineProperty(exports, "loginDuck", {
  enumerable: true,
  get: function get() {
    return _loginDuck.default;
  }
});
Object.defineProperty(exports, "userDuck", {
  enumerable: true,
  get: function get() {
    return _userDuck.default;
  }
});
var _Home = _interopRequireDefault(require("./screens/Home"));
var _utils = _interopRequireDefault(require("./utils/utils"));
var _Login = _interopRequireDefault(require("./screens/Login"));
var _Signup = _interopRequireDefault(require("./screens/Signup"));
var _Game = _interopRequireDefault(require("./screens/Game"));
var _Ranking = _interopRequireDefault(require("./screens/Ranking"));
var _loginDuck = _interopRequireDefault(require("./redux/loginDuck"));
var _userDuck = _interopRequireDefault(require("./redux/userDuck"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }