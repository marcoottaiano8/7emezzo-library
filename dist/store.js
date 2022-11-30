"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reduxLogger = _interopRequireDefault(require("redux-logger"));
var _userDuck = _interopRequireDefault(require("./redux/userDuck"));
var _loginDuck = _interopRequireDefault(require("./redux/loginDuck"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// file: todos/todosReducer.ts noEmit

// file: store.ts

// We'll use redux-logger just as an example of adding another middleware

//duck

var reducer = (0, _toolkit.combineReducers)({
  loginDuck: _loginDuck.default,
  userDuck: _userDuck.default
});
var store = (0, _toolkit.configureStore)({
  reducer: reducer,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_reduxLogger.default);
  },
  devTools: process.env.NODE_ENV !== "production"
});
var _default = store; // The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batched subscribe, and devtools enhancers were composed together
exports.default = _default;