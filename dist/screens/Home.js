"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils/utils");
var _lobbyApi = require("7emezzo-gs/dist/services/api/lobbyApi");
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
var _CustomModal = _interopRequireDefault(require("../CustomModal"));
var _commonStyle = _interopRequireDefault(require("../style/commonStyle"));
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
var _CustomInputBox = _interopRequireDefault(require("../CustomInputBox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ws = null;
var user = null;
var idLobby = null;
function Home(props) {
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isDesktop = _useResponsive2[2];
  var _useState = (0, _react.useState)({
      fastGameModal: false,
      createLobbyModal: false,
      joinLobbyModal: false,
      modalMessage: "",
      startGameVisible: true,
      idLobby: null,
      msg: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  //component did mount
  (0, _react.useEffect)(function () {
    connect();
  }, []);
  function connect() {
    return _connect.apply(this, arguments);
  } //partita veloce
  function _connect() {
    _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = JSON;
              _context.next = 3;
              return (0, _utils.getDataFromStorage)("user");
            case 3:
              _context.t1 = _context.sent;
              user = _context.t0.parse.call(_context.t0, _context.t1);
              ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
              ws.onopen = function () {
                console.log("WS connesso");
                if (state.idLobby !== null) {
                  ws.send(JSON.stringify({
                    user_id: user.id,
                    method: "connectLobby"
                  }));
                }
              };
              ws.onmessage = function (e) {
                var msg = JSON.parse(e.data);
                console.log("ONMESSAGE", msg);
                if (!!msg.hands) {
                  ws.close();
                  if (!!props.goToGame) props.goToGame();
                }
              };
              ws.onclose = function () {
                connect();
              };
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _connect.apply(this, arguments);
  }
  function setFastGameModal() {
    return _setFastGameModal.apply(this, arguments);
  } //crea lobby
  function _setFastGameModal() {
    _setFastGameModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var startGameVisible, message, idLobby, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              startGameVisible = false;
              message = "";
              idLobby = null;
              _context2.next = 5;
              return (0, _utils.fetchData)(_lobbyApi.putLobby, -1);
            case 5:
              res = _context2.sent;
              console.log(res);
              if (res.status !== 200) message = "Errore del server";else {
                message = "In attesa di altri giocatori...";
                idLobby = res.data.idLobby;
                if (res.data.users[0].id === user.id) startGameVisible = true;
                ws.send(JSON.stringify({
                  user_id: user.id,
                  method: "connectLobby"
                }));
              }
              setState(_objectSpread(_objectSpread({}, state), {}, {
                fastGameModal: true,
                startGameVisible: startGameVisible,
                modalMessage: message,
                idLobby: idLobby
              }));
            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _setFastGameModal.apply(this, arguments);
  }
  function setCreateLobbyModal() {
    return _setCreateLobbyModal.apply(this, arguments);
  } //esci dalla lobby
  function _setCreateLobbyModal() {
    _setCreateLobbyModal = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var startGameVisible, message, idLobby, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              startGameVisible = false;
              message = "";
              idLobby = null;
              _context3.next = 5;
              return (0, _utils.fetchData)(_lobbyApi.postLobby);
            case 5:
              res = _context3.sent;
              console.log(res);
              if (res.status !== 200) message = "Errore del server";else {
                message = "In attesa di altri giocatori...";
                idLobby = res.data.idLobby;
                if (res.data.users[0].id === user.id) startGameVisible = true;
                ws.send(JSON.stringify({
                  user_id: user.id,
                  method: "connectLobby"
                }));
              }
              setState(_objectSpread(_objectSpread({}, state), {}, {
                createLobbyModal: true,
                startGameVisible: startGameVisible,
                modalMessage: message,
                idLobby: idLobby
              }));
            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _setCreateLobbyModal.apply(this, arguments);
  }
  function quitLobby() {
    return _quitLobby.apply(this, arguments);
  } //vai alla classifica
  function _quitLobby() {
    _quitLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!!state.idLobby || state.modalMessage !== "In attesa di altri giocatori...")) {
                _context4.next = 6;
                break;
              }
              _context4.next = 3;
              return (0, _utils.fetchData)(_lobbyApi.deleteLobby);
            case 3:
              res = _context4.sent;
              console.log("quit", res);
              ws.send(JSON.stringify({
                method: "quitLobby",
                idLobby: state.idLobby
              }));
            case 6:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                fastGameModal: false,
                createLobbyModal: false,
                joinLobbyModal: false,
                idLobby: null,
                modalMessage: ""
              }));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _quitLobby.apply(this, arguments);
  }
  function goToRanking() {
    if (!!props.goToRanking) props.goToRanking();
  }

  //inizia la partita
  function startMatch() {
    ws.send(JSON.stringify({
      user_id: user.id,
      method: "startMatch"
    }));
    if (!!props.goToGame) props.goToGame();
  }
  function setJoinLobbyModal() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      joinLobbyModal: !state.joinLobbyModal
    }));
  }
  function setIdLobby(e) {
    idLobby = e.replace(/[^0-9]/g, "");
    setState(_objectSpread(_objectSpread({}, state), {}, {
      idLobby: idLobby
    }));
  }
  function searchLobby() {
    return _searchLobby.apply(this, arguments);
  }
  function _searchLobby() {
    _searchLobby = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var startGameVisible, message, idLobby, res;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              startGameVisible = false;
              message = "";
              idLobby = null;
              _context5.next = 5;
              return (0, _utils.fetchData)(_lobbyApi.putLobby, state.idLobby);
            case 5:
              res = _context5.sent;
              console.log(res);
              if (res.status !== 200) message = "Lobby non trovata";else {
                message = "In attesa di altri giocatori...";
                idLobby = res.data.idLobby;
                if (res.data.users[0].id === user.id) startGameVisible = true;
                ws.send(JSON.stringify({
                  user_id: user.id,
                  method: "connectLobby"
                }));
              }
              setState(_objectSpread(_objectSpread({}, state), {}, {
                startGameVisible: startGameVisible,
                modalMessage: message,
                idLobby: idLobby
              }));
            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _searchLobby.apply(this, arguments);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _commonStyle.default.mainContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/sfondo.jpg"),
    resizeMode: "cover",
    style: _commonStyle.default.backgroundImg
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _commonStyle.default.title
  }, "7 e \xBD"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.container, isDesktop && desktop.container]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/ironman.gif"),
    style: mobile.image
  })), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Partita veloce",
    callback: setFastGameModal
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Crea lobby",
    callback: setCreateLobbyModal
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row"
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Unisciti a lobby",
    callback: setJoinLobbyModal
  })), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Classifica",
    callback: goToRanking
  })), /*#__PURE__*/_react.default.createElement(_CustomModal.default, {
    visible: state.fastGameModal,
    callbackClose: quitLobby
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [mobile.text, mobile.title]
  }, "Lobby ", state.idLobby), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.modalContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, state.modalMessage), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 40,
      marginBottom: -30
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Inizia partita",
    callback: startMatch
  })))), /*#__PURE__*/_react.default.createElement(_CustomModal.default, {
    visible: state.createLobbyModal,
    callbackClose: quitLobby
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [mobile.text, mobile.title]
  }, "Lobby ", state.idLobby), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.modalContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, "In attesa di altri giocatori..."), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 40,
      marginBottom: -30
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Inizia partita"
  })))), /*#__PURE__*/_react.default.createElement(_CustomModal.default, {
    visible: state.joinLobbyModal,
    callbackClose: quitLobby
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [mobile.text, mobile.title]
  }, "Lobby ", state.idLobby), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.modalContainer
  }, state.modalMessage === "" ? /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: "Inserire id della lobby",
    callbackChange: setIdLobby,
    type: "number"
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Cerca lobby",
    callback: searchLobby
  })) : /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, state.modalMessage), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 40,
      marginBottom: -30
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Inizia partita",
    callback: startMatch
  })))))));
}
var mobile = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _reactNative.Dimensions.get("window").height / 8,
    justifyContent: "flex-end"
  },
  image: {
    height: 200,
    width: 200
  },
  modalContainer: {
    marginTop: 20
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    color: "white"
  }
});
var desktop = _reactNative.StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    marginTop: 50
  }
});