"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Game;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils/utils");
var _lobbyApi = require("7emezzo-gs/dist/services/api/lobbyApi");
var _useResponsive3 = _interopRequireDefault(require("../utils/useResponsive"));
var _commonStyle = _interopRequireDefault(require("../style/commonStyle"));
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
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
var ws;
var user;
var cards = [require("../assets/images/cards/thanosA.jpg"), require("../assets/images/cards/sandman2.jpg"), require("../assets/images/cards/rhino3.jpg"), require("../assets/images/cards/electro4.jpg"), require("../assets/images/cards/mysterio5.jpg"), require("../assets/images/cards/taskmaster6.jpg"), require("../assets/images/cards/carnage7.jpg"), require("../assets/images/cards/octopusJ.jpg"), require("../assets/images/cards/goblinQ.jpg"), require("../assets/images/cards/venomK.jpg")];

// let playerIndex = null

function Game(props) {
  var _getHands$, _getHands$$cards$, _getHands$2, _getHands$2$cards$, _getHands$3, _getHands$3$cards$;
  var _useResponsive = (0, _useResponsive3.default)(),
    _useResponsive2 = _slicedToArray(_useResponsive, 3),
    Mobile = _useResponsive2[0],
    Default = _useResponsive2[1],
    isDesktop = _useResponsive2[2];
  var _useState = (0, _react.useState)({
      match: null,
      endGame: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0, _react.useEffect)(function () {
    connect();
  }, []);
  (0, _react.useEffect)(function () {
    console.log("STATE", state);
  }, [state]);
  (0, _react.useEffect)(function () {
    if (state.endGame) {
      quitMatch();
    }
  }, [state.endGame]);

  //connessione
  function connect() {
    return _connect.apply(this, arguments);
  } //ritorna l'inidice del mio player nell'array degli users
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
                ws.send(JSON.stringify({
                  user_id: user.id,
                  method: "connectLobby"
                }));
              };
              ws.onmessage = function (e) {
                var msg = JSON.parse(e.data);
                if (!!msg.hands) {
                  console.log("ONMESSAGE", msg);
                  // if (msg.ended) {
                  //   //la partita è finita
                  // }
                  // else {
                  //   storeGameData(msg)
                  // }

                  setState(_objectSpread(_objectSpread({}, state), {}, {
                    match: msg,
                    endGame: msg.ended
                  }));
                }
              };
              ws.onclose = function () {
                // console.log("DISCONNESSO");
                // console.log("Riconnessione in corso");
                connect();
              };
              setTimeout(function () {
                ws.send(JSON.stringify({
                  user_id: user.id,
                  method: "requestCard"
                }));
              }, 1000);
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _connect.apply(this, arguments);
  }
  function getPlayerIndex() {
    var _state$match, _state$match$users;
    var tempPlayerIndex = null;
    state === null || state === void 0 ? void 0 : (_state$match = state.match) === null || _state$match === void 0 ? void 0 : (_state$match$users = _state$match.users) === null || _state$match$users === void 0 ? void 0 : _state$match$users.forEach(function (element, index) {
      if (element.id === user.id) tempPlayerIndex = index;
    });
    return tempPlayerIndex;
  }

  //ritorna la mia mano
  function getMyHand() {
    var _state$match2;
    var playerIndex = getPlayerIndex();
    var myHand = state === null || state === void 0 ? void 0 : (_state$match2 = state.match) === null || _state$match2 === void 0 ? void 0 : _state$match2.hands[playerIndex];
    return myHand;
  }

  //ritorna tutte le hands senza la mia
  function getHands() {
    var _state$match3, _state$match3$hands;
    var tempHands = state === null || state === void 0 ? void 0 : (_state$match3 = state.match) === null || _state$match3 === void 0 ? void 0 : (_state$match3$hands = _state$match3.hands) === null || _state$match3$hands === void 0 ? void 0 : _state$match3$hands.filter(function (el) {
      return el.user.id !== user.id;
    });
    return tempHands;
  }

  //ritorna le mie carte
  function getMyCards() {
    var _getMyHand;
    return (_getMyHand = getMyHand()) === null || _getMyHand === void 0 ? void 0 : _getMyHand.cards;
  }
  function getMyTurn() {
    var _getMyHand2;
    return (_getMyHand2 = getMyHand()) === null || _getMyHand2 === void 0 ? void 0 : _getMyHand2.turn;
  }

  //ritorna tutti i players
  function getPlayers() {
    var tempPlayers = state.match.users;
    return tempPlayers;
  }
  function requestCard() {
    setTimeout(function () {
      ws.send(JSON.stringify({
        user_id: user.id,
        method: "requestCard"
      }));
      ws.send(JSON.stringify({
        user_id: user.id,
        method: "checkEndMatch"
      }));
    }, 1000);
  }
  function stopPlaying() {
    setTimeout(function () {
      ws.send(JSON.stringify({
        user_id: user.id,
        method: "stopPlaying"
      }));
      ws.send(JSON.stringify({
        user_id: user.id,
        method: "checkEndMatch"
      }));
    }, 1000);
  }
  function quitMatch() {
    return _quitMatch.apply(this, arguments);
  }
  function _quitMatch() {
    _quitMatch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ws.send(JSON.stringify({
                user_id: user.id,
                method: "quitMatch"
              }));
              console.log('PARTITA FINITA');
              // let res = await fetchData(deleteLobby)
              if (!!props.callbackQuit) props.callbackQuit();
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _quitMatch.apply(this, arguments);
  }
  function getValueFromCard(card) {
    var value = 0;
    switch (card.figure) {
      case 'NUMBER':
        value = card.value;
        break;
      case 'FANTE':
        value = 8;
        break;
      case 'CAVALLO':
        value = 9;
        break;
      case 'RE':
        value = 10;
        break;
    }
    return value - 1;
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.mainContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: require("../assets/images/pokerTable.jpg"),
    resizeMode: "cover",
    style: mobile.backgroundImg
  }, !!state.match && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.gameContainer, isDesktop && desktop.gameContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.gameRow
  }, !!getHands()[1] ? /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row-reverse"
    }
  }, getHands()[1].cards.map(function (el, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, key === 0 ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: cards[getValueFromCard(el)],
      style: isDesktop ? [desktop.card, desktop.frontCard] : [mobile.card, mobile.frontCard],
      resizeMode: "contain"
    }) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: require("../assets/images/cards/back.jpg"),
      style: [isDesktop ? [desktop.card, desktop.frontCard] : [mobile.card, mobile.frontCard], {
        marginRight: -45
      }],
      resizeMode: "contain"
    }));
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, (_getHands$ = getHands()[1]) === null || _getHands$ === void 0 ? void 0 : (_getHands$$cards$ = _getHands$.cards[0]) === null || _getHands$$cards$ === void 0 ? void 0 : _getHands$$cards$.value)) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/back.jpg"),
    style: isDesktop ? [desktop.card, desktop.frontCard] : [mobile.card, mobile.frontCard],
    resizeMode: "contain"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.gameRowCenter, isDesktop && desktop.gameRowCenter]
  }, !!getHands()[2] ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.cardContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "column"
    }
  }, getHands()[2].cards.map(function (el, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, key === 0 ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: cards[getValueFromCard(el)],
      style: isDesktop ? [desktop.card, desktop.leftCard] : [mobile.card, mobile.leftCard],
      resizeMode: "contain"
    }) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: require("../assets/images/cards/back.jpg"),
      style: [isDesktop ? [desktop.card, desktop.leftCard] : [mobile.card, mobile.leftCard], {
        marginTop: -80
      }],
      resizeMode: "contain"
    }));
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, (_getHands$2 = getHands()[2]) === null || _getHands$2 === void 0 ? void 0 : (_getHands$2$cards$ = _getHands$2.cards[0]) === null || _getHands$2$cards$ === void 0 ? void 0 : _getHands$2$cards$.value)) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/back.jpg"),
    style: isDesktop ? [desktop.card, desktop.leftCard] : [mobile.card, mobile.leftCard],
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/back.jpg"),
    style: isDesktop ? desktop.card : mobile.card,
    resizeMode: "contain"
  }), !!getHands()[0] ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.cardContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, (_getHands$3 = getHands()[0]) === null || _getHands$3 === void 0 ? void 0 : (_getHands$3$cards$ = _getHands$3.cards[0]) === null || _getHands$3$cards$ === void 0 ? void 0 : _getHands$3$cards$.value), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "column-reverse"
    }
  }, getHands()[0].cards.map(function (el, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, key === 0 ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: cards[getValueFromCard(el)],
      style: isDesktop ? [desktop.card, desktop.rigthCard] : [mobile.card, mobile.rigthCard],
      resizeMode: "contain"
    }) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: require("../assets/images/cards/back.jpg"),
      style: [isDesktop ? [desktop.card, desktop.rigthCard] : [mobile.card, mobile.rigthCard], {
        marginBottom: -80
      }],
      resizeMode: "contain"
    }));
  }))) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require("../assets/images/cards/back.jpg"),
    style: isDesktop ? [desktop.card, desktop.rigthCard] : [mobile.card, mobile.rigthCard],
    resizeMode: "contain"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.gameRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.text
  }, "Effettua la tua giocata:"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.score
  }, getMyHand().cardValue), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row"
    }
  }, getMyCards().map(function (el, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, key === 0 ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: cards[getValueFromCard(el)],
      style: isDesktop ? [desktop.card, desktop.myCard] : [mobile.card, mobile.myCard],
      resizeMode: "contain"
    }) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: cards[getValueFromCard(el)],
      style: [isDesktop ? [desktop.card, desktop.myCard] : [mobile.card, mobile.myCard], {
        marginLeft: -45
      }],
      resizeMode: "contain"
    }));
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [mobile.buttonContainer, isDesktop && desktop.buttonContainer]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: 'row'
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Carta",
    disable: !getMyTurn(),
    callback: requestCard
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Stai",
    disable: !getMyTurn(),
    callback: stopPlaying
  })), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Esci",
    callback: quitMatch
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
    flexDirection: "column"
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