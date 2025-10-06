"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _excluded = ["precision", "format", "inGamut"],
  _excluded2 = ["space"],
  _excluded3 = ["algorithm"],
  _excluded4 = ["method"],
  _excluded5 = ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"];
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var es_array_push = {};
var global$1;
var hasRequiredGlobal;
function requireGlobal() {
  if (hasRequiredGlobal) return global$1;
  hasRequiredGlobal = 1;
  var check = function check(it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  global$1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();
  return global$1;
}
var objectGetOwnPropertyDescriptor = {};
var fails;
var hasRequiredFails;
function requireFails() {
  if (hasRequiredFails) return fails;
  hasRequiredFails = 1;
  fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  return fails;
}
var descriptors;
var hasRequiredDescriptors;
function requireDescriptors() {
  if (hasRequiredDescriptors) return descriptors;
  hasRequiredDescriptors = 1;
  var fails = requireFails();

  // Detect IE8's incomplete defineProperty implementation
  descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  });
  return descriptors;
}
var functionBindNative;
var hasRequiredFunctionBindNative;
function requireFunctionBindNative() {
  if (hasRequiredFunctionBindNative) return functionBindNative;
  hasRequiredFunctionBindNative = 1;
  var fails = requireFails();
  functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });
  return functionBindNative;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var call = Function.prototype.call;
  functionCall = NATIVE_BIND ? call.bind(call) : function () {
    return call.apply(call, arguments);
  };
  return functionCall;
}
var objectPropertyIsEnumerable = {};
var hasRequiredObjectPropertyIsEnumerable;
function requireObjectPropertyIsEnumerable() {
  if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  hasRequiredObjectPropertyIsEnumerable = 1;
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  return objectPropertyIsEnumerable;
}
var createPropertyDescriptor;
var hasRequiredCreatePropertyDescriptor;
function requireCreatePropertyDescriptor() {
  if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  hasRequiredCreatePropertyDescriptor = 1;
  createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return createPropertyDescriptor;
}
var functionUncurryThis;
var hasRequiredFunctionUncurryThis;
function requireFunctionUncurryThis() {
  if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  hasRequiredFunctionUncurryThis = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var call = FunctionPrototype.call;
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
    return function () {
      return call.apply(fn, arguments);
    };
  };
  return functionUncurryThis;
}
var classofRaw;
var hasRequiredClassofRaw;
function requireClassofRaw() {
  if (hasRequiredClassofRaw) return classofRaw;
  hasRequiredClassofRaw = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toString = uncurryThis({}.toString);
  var stringSlice = uncurryThis(''.slice);
  classofRaw = function classofRaw(it) {
    return stringSlice(toString(it), 8, -1);
  };
  return classofRaw;
}
var indexedObject;
var hasRequiredIndexedObject;
function requireIndexedObject() {
  if (hasRequiredIndexedObject) return indexedObject;
  hasRequiredIndexedObject = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails = requireFails();
  var classof = requireClassofRaw();
  var $Object = Object;
  var split = uncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
  } : $Object;
  return indexedObject;
}
var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;
function requireIsNullOrUndefined() {
  if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  hasRequiredIsNullOrUndefined = 1;
  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  isNullOrUndefined = function isNullOrUndefined(it) {
    return it === null || it === undefined;
  };
  return isNullOrUndefined;
}
var requireObjectCoercible;
var hasRequiredRequireObjectCoercible;
function requireRequireObjectCoercible() {
  if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  hasRequiredRequireObjectCoercible = 1;
  var isNullOrUndefined = requireIsNullOrUndefined();
  var $TypeError = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  requireObjectCoercible = function requireObjectCoercible(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
  };
  return requireObjectCoercible;
}
var toIndexedObject;
var hasRequiredToIndexedObject;
function requireToIndexedObject() {
  if (hasRequiredToIndexedObject) return toIndexedObject;
  hasRequiredToIndexedObject = 1;
  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = requireIndexedObject();
  var requireObjectCoercible = requireRequireObjectCoercible();
  toIndexedObject = function toIndexedObject(it) {
    return IndexedObject(requireObjectCoercible(it));
  };
  return toIndexedObject;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = (typeof document === "undefined" ? "undefined" : _typeof(document)) == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };
  return isCallable;
}
var isObject;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  var isCallable = requireIsCallable();
  isObject = function isObject(it) {
    return _typeof(it) == 'object' ? it !== null : isCallable(it);
  };
  return isObject;
}
var getBuiltIn;
var hasRequiredGetBuiltIn;
function requireGetBuiltIn() {
  if (hasRequiredGetBuiltIn) return getBuiltIn;
  hasRequiredGetBuiltIn = 1;
  var global = requireGlobal();
  var isCallable = requireIsCallable();
  var aFunction = function aFunction(argument) {
    return isCallable(argument) ? argument : undefined;
  };
  getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
  };
  return getBuiltIn;
}
var objectIsPrototypeOf;
var hasRequiredObjectIsPrototypeOf;
function requireObjectIsPrototypeOf() {
  if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  hasRequiredObjectIsPrototypeOf = 1;
  var uncurryThis = requireFunctionUncurryThis();
  objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  return objectIsPrototypeOf;
}
var engineUserAgent;
var hasRequiredEngineUserAgent;
function requireEngineUserAgent() {
  if (hasRequiredEngineUserAgent) return engineUserAgent;
  hasRequiredEngineUserAgent = 1;
  engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';
  return engineUserAgent;
}
var engineV8Version;
var hasRequiredEngineV8Version;
function requireEngineV8Version() {
  if (hasRequiredEngineV8Version) return engineV8Version;
  hasRequiredEngineV8Version = 1;
  var global = requireGlobal();
  var userAgent = requireEngineUserAgent();
  var process = global.process;
  var Deno = global.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  engineV8Version = version;
  return engineV8Version;
}
var symbolConstructorDetection;
var hasRequiredSymbolConstructorDetection;
function requireSymbolConstructorDetection() {
  if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  hasRequiredSymbolConstructorDetection = 1;
  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION = requireEngineV8Version();
  var fails = requireFails();
  var global = requireGlobal();
  var $String = global.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
  return symbolConstructorDetection;
}
var useSymbolAsUid;
var hasRequiredUseSymbolAsUid;
function requireUseSymbolAsUid() {
  if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  hasRequiredUseSymbolAsUid = 1;
  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';
  return useSymbolAsUid;
}
var isSymbol;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol;
  hasRequiredIsSymbol = 1;
  var getBuiltIn = requireGetBuiltIn();
  var isCallable = requireIsCallable();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var $Object = Object;
  isSymbol = USE_SYMBOL_AS_UID ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };
  return isSymbol;
}
var tryToString;
var hasRequiredTryToString;
function requireTryToString() {
  if (hasRequiredTryToString) return tryToString;
  hasRequiredTryToString = 1;
  var $String = String;
  tryToString = function tryToString(argument) {
    try {
      return $String(argument);
    } catch (error) {
      return 'Object';
    }
  };
  return tryToString;
}
var aCallable;
var hasRequiredACallable;
function requireACallable() {
  if (hasRequiredACallable) return aCallable;
  hasRequiredACallable = 1;
  var isCallable = requireIsCallable();
  var tryToString = requireTryToString();
  var $TypeError = TypeError;

  // `Assert: IsCallable(argument) is true`
  aCallable = function aCallable(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
  };
  return aCallable;
}
var getMethod;
var hasRequiredGetMethod;
function requireGetMethod() {
  if (hasRequiredGetMethod) return getMethod;
  hasRequiredGetMethod = 1;
  var aCallable = requireACallable();
  var isNullOrUndefined = requireIsNullOrUndefined();

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  getMethod = function getMethod(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };
  return getMethod;
}
var ordinaryToPrimitive;
var hasRequiredOrdinaryToPrimitive;
function requireOrdinaryToPrimitive() {
  if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  hasRequiredOrdinaryToPrimitive = 1;
  var call = requireFunctionCall();
  var isCallable = requireIsCallable();
  var isObject = requireIsObject();
  var $TypeError = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  ordinaryToPrimitive = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
  };
  return ordinaryToPrimitive;
}
var sharedStore = {
  exports: {}
};
var isPure;
var hasRequiredIsPure;
function requireIsPure() {
  if (hasRequiredIsPure) return isPure;
  hasRequiredIsPure = 1;
  isPure = false;
  return isPure;
}
var defineGlobalProperty;
var hasRequiredDefineGlobalProperty;
function requireDefineGlobalProperty() {
  if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  hasRequiredDefineGlobalProperty = 1;
  var global = requireGlobal();

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  defineGlobalProperty = function defineGlobalProperty(key, value) {
    try {
      defineProperty(global, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global[key] = value;
    }
    return value;
  };
  return defineGlobalProperty;
}
var hasRequiredSharedStore;
function requireSharedStore() {
  if (hasRequiredSharedStore) return sharedStore.exports;
  hasRequiredSharedStore = 1;
  var IS_PURE = requireIsPure();
  var globalThis = requireGlobal();
  var defineGlobalProperty = requireDefineGlobalProperty();
  var SHARED = '__core-js_shared__';
  var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
  (store.versions || (store.versions = [])).push({
    version: '3.36.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  return sharedStore.exports;
}
var shared;
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  var store = requireSharedStore();
  shared = function shared(key, value) {
    return store[key] || (store[key] = value || {});
  };
  return shared;
}
var toObject;
var hasRequiredToObject;
function requireToObject() {
  if (hasRequiredToObject) return toObject;
  hasRequiredToObject = 1;
  var requireObjectCoercible = requireRequireObjectCoercible();
  var $Object = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  toObject = function toObject(argument) {
    return $Object(requireObjectCoercible(argument));
  };
  return toObject;
}
var hasOwnProperty_1;
var hasRequiredHasOwnProperty;
function requireHasOwnProperty() {
  if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  hasRequiredHasOwnProperty = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toObject = requireToObject();
  var hasOwnProperty = uncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };
  return hasOwnProperty_1;
}
var uid;
var hasRequiredUid;
function requireUid() {
  if (hasRequiredUid) return uid;
  hasRequiredUid = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var id = 0;
  var postfix = Math.random();
  var toString = uncurryThis(1.0.toString);
  uid = function uid(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };
  return uid;
}
var wellKnownSymbol;
var hasRequiredWellKnownSymbol;
function requireWellKnownSymbol() {
  if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  hasRequiredWellKnownSymbol = 1;
  var global = requireGlobal();
  var shared = requireShared();
  var hasOwn = requireHasOwnProperty();
  var uid = requireUid();
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var _Symbol = global.Symbol;
  var WellKnownSymbolsStore = shared('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol['for'] || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
  wellKnownSymbol = function wellKnownSymbol(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
  };
  return wellKnownSymbol;
}
var toPrimitive;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive;
  hasRequiredToPrimitive = 1;
  var call = requireFunctionCall();
  var isObject = requireIsObject();
  var isSymbol = requireIsSymbol();
  var getMethod = requireGetMethod();
  var ordinaryToPrimitive = requireOrdinaryToPrimitive();
  var wellKnownSymbol = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  toPrimitive = function toPrimitive(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };
  return toPrimitive;
}
var toPropertyKey;
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey;
  hasRequiredToPropertyKey = 1;
  var toPrimitive = requireToPrimitive();
  var isSymbol = requireIsSymbol();

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  toPropertyKey = function toPropertyKey(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };
  return toPropertyKey;
}
var documentCreateElement;
var hasRequiredDocumentCreateElement;
function requireDocumentCreateElement() {
  if (hasRequiredDocumentCreateElement) return documentCreateElement;
  hasRequiredDocumentCreateElement = 1;
  var global = requireGlobal();
  var isObject = requireIsObject();
  var document = global.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document) && isObject(document.createElement);
  documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document.createElement(it) : {};
  };
  return documentCreateElement;
}
var ie8DomDefine;
var hasRequiredIe8DomDefine;
function requireIe8DomDefine() {
  if (hasRequiredIe8DomDefine) return ie8DomDefine;
  hasRequiredIe8DomDefine = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();
  var createElement = requireDocumentCreateElement();

  // Thanks to IE8 for its funny defineProperty
  ie8DomDefine = !DESCRIPTORS && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  });
  return ie8DomDefine;
}
var hasRequiredObjectGetOwnPropertyDescriptor;
function requireObjectGetOwnPropertyDescriptor() {
  if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  hasRequiredObjectGetOwnPropertyDescriptor = 1;
  var DESCRIPTORS = requireDescriptors();
  var call = requireFunctionCall();
  var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var toIndexedObject = requireToIndexedObject();
  var toPropertyKey = requireToPropertyKey();
  var hasOwn = requireHasOwnProperty();
  var IE8_DOM_DEFINE = requireIe8DomDefine();

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {/* empty */}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };
  return objectGetOwnPropertyDescriptor;
}
var objectDefineProperty = {};
var v8PrototypeDefineBug;
var hasRequiredV8PrototypeDefineBug;
function requireV8PrototypeDefineBug() {
  if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  hasRequiredV8PrototypeDefineBug = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
  return v8PrototypeDefineBug;
}
var anObject;
var hasRequiredAnObject;
function requireAnObject() {
  if (hasRequiredAnObject) return anObject;
  hasRequiredAnObject = 1;
  var isObject = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;

  // `Assert: Type(argument) is Object`
  anObject = function anObject(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
  };
  return anObject;
}
var hasRequiredObjectDefineProperty;
function requireObjectDefineProperty() {
  if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  hasRequiredObjectDefineProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var anObject = requireAnObject();
  var toPropertyKey = requireToPropertyKey();
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  return objectDefineProperty;
}
var createNonEnumerableProperty;
var hasRequiredCreateNonEnumerableProperty;
function requireCreateNonEnumerableProperty() {
  if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  hasRequiredCreateNonEnumerableProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var definePropertyModule = requireObjectDefineProperty();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return createNonEnumerableProperty;
}
var makeBuiltIn = {
  exports: {}
};
var functionName;
var hasRequiredFunctionName;
function requireFunctionName() {
  if (hasRequiredFunctionName) return functionName;
  hasRequiredFunctionName = 1;
  var DESCRIPTORS = requireDescriptors();
  var hasOwn = requireHasOwnProperty();
  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
  functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };
  return functionName;
}
var inspectSource;
var hasRequiredInspectSource;
function requireInspectSource() {
  if (hasRequiredInspectSource) return inspectSource;
  hasRequiredInspectSource = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var isCallable = requireIsCallable();
  var store = requireSharedStore();
  var functionToString = uncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  inspectSource = store.inspectSource;
  return inspectSource;
}
var weakMapBasicDetection;
var hasRequiredWeakMapBasicDetection;
function requireWeakMapBasicDetection() {
  if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  hasRequiredWeakMapBasicDetection = 1;
  var global = requireGlobal();
  var isCallable = requireIsCallable();
  var WeakMap = global.WeakMap;
  weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  return weakMapBasicDetection;
}
var sharedKey;
var hasRequiredSharedKey;
function requireSharedKey() {
  if (hasRequiredSharedKey) return sharedKey;
  hasRequiredSharedKey = 1;
  var shared = requireShared();
  var uid = requireUid();
  var keys = shared('keys');
  sharedKey = function sharedKey(key) {
    return keys[key] || (keys[key] = uid(key));
  };
  return sharedKey;
}
var hiddenKeys;
var hasRequiredHiddenKeys;
function requireHiddenKeys() {
  if (hasRequiredHiddenKeys) return hiddenKeys;
  hasRequiredHiddenKeys = 1;
  hiddenKeys = {};
  return hiddenKeys;
}
var internalState;
var hasRequiredInternalState;
function requireInternalState() {
  if (hasRequiredInternalState) return internalState;
  hasRequiredInternalState = 1;
  var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  var global = requireGlobal();
  var isObject = requireIsObject();
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var hasOwn = requireHasOwnProperty();
  var shared = requireSharedStore();
  var sharedKey = requireSharedKey();
  var hiddenKeys = requireHiddenKeys();
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError = global.TypeError;
  var WeakMap = global.WeakMap;
  var set, get, has;
  var enforce = function enforce(it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function set(it, metadata) {
      if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function get(it) {
      return store.get(it) || {};
    };
    has = function has(it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function set(it, metadata) {
      if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function get(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function has(it) {
      return hasOwn(it, STATE);
    };
  }
  internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };
  return internalState;
}
var hasRequiredMakeBuiltIn;
function requireMakeBuiltIn() {
  if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  hasRequiredMakeBuiltIn = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails = requireFails();
  var isCallable = requireIsCallable();
  var hasOwn = requireHasOwnProperty();
  var DESCRIPTORS = requireDescriptors();
  var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  var inspectSource = requireInspectSource();
  var InternalStateModule = requireInternalState();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice = uncurryThis(''.slice);
  var replace = uncurryThis(''.replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
    return defineProperty(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS) defineProperty(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  return makeBuiltIn.exports;
}
var defineBuiltIn;
var hasRequiredDefineBuiltIn;
function requireDefineBuiltIn() {
  if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  hasRequiredDefineBuiltIn = 1;
  var isCallable = requireIsCallable();
  var definePropertyModule = requireObjectDefineProperty();
  var makeBuiltIn = requireMakeBuiltIn();
  var defineGlobalProperty = requireDefineGlobalProperty();
  defineBuiltIn = function defineBuiltIn(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      } catch (error) {/* empty */}
      if (simple) O[key] = value;else definePropertyModule.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O;
  };
  return defineBuiltIn;
}
var objectGetOwnPropertyNames = {};
var mathTrunc;
var hasRequiredMathTrunc;
function requireMathTrunc() {
  if (hasRequiredMathTrunc) return mathTrunc;
  hasRequiredMathTrunc = 1;
  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };
  return mathTrunc;
}
var toIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;
function requireToIntegerOrInfinity() {
  if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  hasRequiredToIntegerOrInfinity = 1;
  var trunc = requireMathTrunc();

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  toIntegerOrInfinity = function toIntegerOrInfinity(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };
  return toIntegerOrInfinity;
}
var toAbsoluteIndex;
var hasRequiredToAbsoluteIndex;
function requireToAbsoluteIndex() {
  if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  hasRequiredToAbsoluteIndex = 1;
  var toIntegerOrInfinity = requireToIntegerOrInfinity();
  var max = Math.max;
  var min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };
  return toAbsoluteIndex;
}
var toLength;
var hasRequiredToLength;
function requireToLength() {
  if (hasRequiredToLength) return toLength;
  hasRequiredToLength = 1;
  var toIntegerOrInfinity = requireToIntegerOrInfinity();
  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  toLength = function toLength(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };
  return toLength;
}
var lengthOfArrayLike;
var hasRequiredLengthOfArrayLike;
function requireLengthOfArrayLike() {
  if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  hasRequiredLengthOfArrayLike = 1;
  var toLength = requireToLength();

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  lengthOfArrayLike = function lengthOfArrayLike(obj) {
    return toLength(obj.length);
  };
  return lengthOfArrayLike;
}
var arrayIncludes;
var hasRequiredArrayIncludes;
function requireArrayIncludes() {
  if (hasRequiredArrayIncludes) return arrayIncludes;
  hasRequiredArrayIncludes = 1;
  var toIndexedObject = requireToIndexedObject();
  var toAbsoluteIndex = requireToAbsoluteIndex();
  var lengthOfArrayLike = requireLengthOfArrayLike();

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  return arrayIncludes;
}
var objectKeysInternal;
var hasRequiredObjectKeysInternal;
function requireObjectKeysInternal() {
  if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  hasRequiredObjectKeysInternal = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var hasOwn = requireHasOwnProperty();
  var toIndexedObject = requireToIndexedObject();
  var indexOf = requireArrayIncludes().indexOf;
  var hiddenKeys = requireHiddenKeys();
  var push = uncurryThis([].push);
  objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };
  return objectKeysInternal;
}
var enumBugKeys;
var hasRequiredEnumBugKeys;
function requireEnumBugKeys() {
  if (hasRequiredEnumBugKeys) return enumBugKeys;
  hasRequiredEnumBugKeys = 1;
  // IE8- don't enum bug keys
  enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  return enumBugKeys;
}
var hasRequiredObjectGetOwnPropertyNames;
function requireObjectGetOwnPropertyNames() {
  if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  hasRequiredObjectGetOwnPropertyNames = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys = requireEnumBugKeys();
  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
  };
  return objectGetOwnPropertyNames;
}
var objectGetOwnPropertySymbols = {};
var hasRequiredObjectGetOwnPropertySymbols;
function requireObjectGetOwnPropertySymbols() {
  if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  hasRequiredObjectGetOwnPropertySymbols = 1;
  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  return objectGetOwnPropertySymbols;
}
var ownKeys;
var hasRequiredOwnKeys;
function requireOwnKeys() {
  if (hasRequiredOwnKeys) return ownKeys;
  hasRequiredOwnKeys = 1;
  var getBuiltIn = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  var anObject = requireAnObject();
  var concat = uncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };
  return ownKeys;
}
var copyConstructorProperties;
var hasRequiredCopyConstructorProperties;
function requireCopyConstructorProperties() {
  if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  hasRequiredCopyConstructorProperties = 1;
  var hasOwn = requireHasOwnProperty();
  var ownKeys = requireOwnKeys();
  var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  var definePropertyModule = requireObjectDefineProperty();
  copyConstructorProperties = function copyConstructorProperties(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };
  return copyConstructorProperties;
}
var isForced_1;
var hasRequiredIsForced;
function requireIsForced() {
  if (hasRequiredIsForced) return isForced_1;
  hasRequiredIsForced = 1;
  var fails = requireFails();
  var isCallable = requireIsCallable();
  var replacement = /#|\.prototype\./;
  var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  isForced_1 = isForced;
  return isForced_1;
}
var _export;
var hasRequired_export;
function require_export() {
  if (hasRequired_export) return _export;
  hasRequired_export = 1;
  var global = requireGlobal();
  var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var defineBuiltIn = requireDefineBuiltIn();
  var defineGlobalProperty = requireDefineGlobalProperty();
  var copyConstructorProperties = requireCopyConstructorProperties();
  var isForced = requireIsForced();

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global;
    } else if (STATIC) {
      target = global[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = global[TARGET] && global[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };
  return _export;
}
var isArray;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray;
  hasRequiredIsArray = 1;
  var classof = requireClassofRaw();

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  isArray = Array.isArray || function isArray(argument) {
    return classof(argument) === 'Array';
  };
  return isArray;
}
var arraySetLength;
var hasRequiredArraySetLength;
function requireArraySetLength() {
  if (hasRequiredArraySetLength) return arraySetLength;
  hasRequiredArraySetLength = 1;
  var DESCRIPTORS = requireDescriptors();
  var isArray = requireIsArray();
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();
  arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
      throw new $TypeError('Cannot set read only .length');
    }
    return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };
  return arraySetLength;
}
var doesNotExceedSafeInteger;
var hasRequiredDoesNotExceedSafeInteger;
function requireDoesNotExceedSafeInteger() {
  if (hasRequiredDoesNotExceedSafeInteger) return doesNotExceedSafeInteger;
  hasRequiredDoesNotExceedSafeInteger = 1;
  var $TypeError = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  doesNotExceedSafeInteger = function doesNotExceedSafeInteger(it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
    return it;
  };
  return doesNotExceedSafeInteger;
}
var hasRequiredEs_array_push;
function requireEs_array_push() {
  if (hasRequiredEs_array_push) return es_array_push;
  hasRequiredEs_array_push = 1;
  var $ = require_export();
  var toObject = requireToObject();
  var lengthOfArrayLike = requireLengthOfArrayLike();
  var setArrayLength = requireArraySetLength();
  var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();
  var fails = requireFails();
  var INCORRECT_TO_LENGTH = fails(function () {
    return [].push.call({
      length: 0x100000000
    }, 1) !== 4294967297;
  });

  // V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
  // https://bugs.chromium.org/p/v8/issues/detail?id=12681
  var properErrorOnNonWritableLength = function properErrorOnNonWritableLength() {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).push();
    } catch (error) {
      return error instanceof TypeError;
    }
  };
  var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

  // `Array.prototype.push` method
  // https://tc39.es/ecma262/#sec-array.prototype.push
  $({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    push: function push(item) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      var argCount = arguments.length;
      doesNotExceedSafeInteger(len + argCount);
      for (var i = 0; i < argCount; i++) {
        O[len] = arguments[i];
        len++;
      }
      setArrayLength(O, len);
      return len;
    }
  });
  return es_array_push;
}
requireEs_array_push();

// A is m x n. B is n x p. product is m x p.
function multiplyMatrices(A, B) {
  var m = A.length;
  if (!Array.isArray(A[0])) {
    // A is vector, convert to [[a, b, c, ...]]
    A = [A];
  }
  if (!Array.isArray(B[0])) {
    // B is vector, convert to [[a], [b], [c], ...]]
    B = B.map(function (x) {
      return [x];
    });
  }
  var p = B[0].length;
  var B_cols = B[0].map(function (_, i) {
    return B.map(function (x) {
      return x[i];
    });
  }); // transpose B
  var product = A.map(function (row) {
    return B_cols.map(function (col) {
      var ret = 0;
      if (!Array.isArray(row)) {
        var _iterator = _createForOfIteratorHelper(col),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _c = _step.value;
            ret += row * _c;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return ret;
      }
      for (var i = 0; i < row.length; i++) {
        ret += row[i] * (col[i] || 0);
      }
      return ret;
    });
  });
  if (m === 1) {
    product = product[0]; // Avoid [[a, b, c, ...]]
  }
  if (p === 1) {
    return product.map(function (x) {
      return x[0];
    }); // Avoid [[a], [b], [c], ...]]
  }
  return product;
}

/**
 * Check if a value is a string (including a String object)
 * @param {*} str - Value to check
 * @returns {boolean}
 */
function isString(str) {
  return type(str) === "string";
}

/**
 * Determine the internal JavaScript [[Class]] of an object.
 * @param {*} o - Value to check
 * @returns {string}
 */
function type(o) {
  var str = Object.prototype.toString.call(o);
  return (str.match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function serializeNumber(n, _ref) {
  var precision = _ref.precision,
    unit = _ref.unit;
  if (isNone(n)) {
    return "none";
  }
  return toPrecision(n, precision) + (unit !== null && unit !== void 0 ? unit : "");
}

/**
 * Check if a value corresponds to a none argument
 * @param {*} n - Value to check
 * @returns {boolean}
 */
function isNone(n) {
  return Number.isNaN(n) || n instanceof Number && (n === null || n === void 0 ? void 0 : n.none);
}

/**
 * Replace none values with 0
 */
function skipNone(n) {
  return isNone(n) ? 0 : n;
}

/**
 * Round a number to a certain number of significant digits
 * @param {number} n - The number to round
 * @param {number} precision - Number of significant digits
 */
function toPrecision(n, precision) {
  if (n === 0) {
    return 0;
  }
  var integer = ~~n;
  var digits = 0;
  if (integer && precision) {
    digits = ~~Math.log10(Math.abs(integer)) + 1;
  }
  var multiplier = Math.pow(10.0, precision - digits);
  return Math.floor(n * multiplier + 0.5) / multiplier;
}
var angleFactor = {
  deg: 1,
  grad: 0.9,
  rad: 180 / Math.PI,
  turn: 360
};

/**
* Parse a CSS function, regardless of its name and arguments
* @param String str String to parse
* @return {{name, args, rawArgs}}
*/
function parseFunction(str) {
  if (!str) {
    return;
  }
  str = str.trim();
  var isFunctionRegex = /^([a-z]+)\((.+?)\)$/i;
  var isNumberRegex = /^-?[\d.]+$/;
  var unitValueRegex = /%|deg|g?rad|turn$/;
  var singleArgument = /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;
  var parts = str.match(isFunctionRegex);
  if (parts) {
    // It is a function, parse args
    var args = [];
    parts[2].replace(singleArgument, function ($0, rawArg) {
      var match = rawArg.match(unitValueRegex);
      var arg = rawArg;
      if (match) {
        var unit = match[0];
        // Drop unit from value
        var unitlessArg = arg.slice(0, -unit.length);
        if (unit === "%") {
          // Convert percentages to 0-1 numbers
          arg = new Number(unitlessArg / 100);
          arg.type = "<percentage>";
        } else {
          // Multiply angle by appropriate factor for its unit
          arg = new Number(unitlessArg * angleFactor[unit]);
          arg.type = "<angle>";
          arg.unit = unit;
        }
      } else if (isNumberRegex.test(arg)) {
        // Convert numerical args to numbers
        arg = new Number(arg);
        arg.type = "<number>";
      } else if (arg === "none") {
        arg = new Number(NaN);
        arg.none = true;
      }
      if ($0.startsWith("/")) {
        // It's alpha
        arg = arg instanceof Number ? arg : new Number(arg);
        arg.alpha = true;
      }
      if (_typeof(arg) === "object" && arg instanceof Number) {
        arg.raw = rawArg;
      }
      args.push(arg);
    });
    return {
      name: parts[1].toLowerCase(),
      rawName: parts[1],
      rawArgs: parts[2],
      // An argument could be (as of css-color-4):
      // a number, percentage, degrees (hue), ident (in color())
      args: args
    };
  }
}
function last(arr) {
  return arr[arr.length - 1];
}
function interpolate(start, end, p) {
  if (isNaN(start)) {
    return end;
  }
  if (isNaN(end)) {
    return start;
  }
  return start + (end - start) * p;
}
function interpolateInv(start, end, value) {
  return (value - start) / (end - start);
}
function mapRange(from, to, value) {
  return interpolate(to[0], to[1], interpolateInv(from[0], from[1], value));
}
function parseCoordGrammar(coordGrammars) {
  return coordGrammars.map(function (coordGrammar) {
    return coordGrammar.split("|").map(function (type) {
      type = type.trim();
      var range = type.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
      if (range) {
        var ret = new String(range[1]);
        ret.range = [+range[2], +range[3]];
        return ret;
      }
      return type;
    });
  });
}

/**
 * Clamp value between the minimum and maximum
 * @param {number} min minimum value to return
 * @param {number} val the value to return if it is between min and max
 * @param {number} max maximum value to return
 * @returns number
 */
function clamp(min, val, max) {
  return Math.max(Math.min(max, val), min);
}

/**
 * Copy sign of one value to another.
 * @param {number} - to number to copy sign to
 * @param {number} - from number to copy sign from
 * @returns number
 */
function copySign(to, from) {
  return Math.sign(to) === Math.sign(from) ? to : -to;
}

/**
 * Perform pow on a signed number and copy sign to result
 * @param {number} - base the base number
 * @param {number} - exp the exponent
 * @returns number
 */
function spow(base, exp) {
  return copySign(Math.pow(Math.abs(base), exp), base);
}

/**
 * Perform a divide, but return zero if the numerator is zero
 * @param {number} n - the numerator
 * @param {number} d - the denominator
 * @returns number
 */
function zdiv(n, d) {
  return d === 0 ? 0 : n / d;
}

/**
 * Perform a bisect on a sorted list and locate the insertion point for
 * a value in arr to maintain sorted order.
 * @param {number[]} arr - array of sorted numbers
 * @param {number} value - value to find insertion point for
 * @param {number} lo - used to specify a the low end of a subset of the list
 * @param {number} hi - used to specify a the high end of a subset of the list
 * @returns number
 */
function bisectLeft(arr, value) {
  var lo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var hi = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length;
  while (lo < hi) {
    var mid = lo + hi >> 1;
    if (arr[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}
var util = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bisectLeft: bisectLeft,
  clamp: clamp,
  copySign: copySign,
  interpolate: interpolate,
  interpolateInv: interpolateInv,
  isNone: isNone,
  isString: isString,
  last: last,
  mapRange: mapRange,
  multiplyMatrices: multiplyMatrices,
  parseCoordGrammar: parseCoordGrammar,
  parseFunction: parseFunction,
  serializeNumber: serializeNumber,
  skipNone: skipNone,
  spow: spow,
  toPrecision: toPrecision,
  type: type,
  zdiv: zdiv
});

/**
 * A class for adding deep extensibility to any piece of JS code
 */
var Hooks = /*#__PURE__*/function () {
  function Hooks() {
    _classCallCheck(this, Hooks);
  }
  return _createClass(Hooks, [{
    key: "add",
    value: function add(name, callback, first) {
      if (typeof arguments[0] != "string") {
        // Multiple hooks
        for (var name in arguments[0]) {
          this.add(name, arguments[0][name], arguments[1]);
        }
        return;
      }
      (Array.isArray(name) ? name : [name]).forEach(function (name) {
        this[name] = this[name] || [];
        if (callback) {
          this[name][first ? "unshift" : "push"](callback);
        }
      }, this);
    }
  }, {
    key: "run",
    value: function run(name, env) {
      this[name] = this[name] || [];
      this[name].forEach(function (callback) {
        callback.call(env && env.context ? env.context : env, env);
      });
    }
  }]);
}();
/**
 * The instance of {@link Hooks} used throughout Color.js
 */
var hooks = new Hooks();
var _globalThis$process;
// Global defaults one may want to configure
var defaults = {
  gamut_mapping: "css",
  precision: 5,
  deltaE: "76",
  // Default deltaE method
  verbose: (globalThis === null || globalThis === void 0 || (_globalThis$process = globalThis.process) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.env) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.NODE_ENV) === null || _globalThis$process === void 0 ? void 0 : _globalThis$process.toLowerCase()) !== "test",
  warn: function warn(msg) {
    if (this.verbose) {
      var _globalThis$console, _globalThis$console$w;
      globalThis === null || globalThis === void 0 || (_globalThis$console = globalThis.console) === null || _globalThis$console === void 0 || (_globalThis$console$w = _globalThis$console.warn) === null || _globalThis$console$w === void 0 || _globalThis$console$w.call(_globalThis$console, msg);
    }
  }
};
var es_error_cause = {};
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var apply = FunctionPrototype.apply;
  var call = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  functionApply = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
    return call.apply(apply, arguments);
  });
  return functionApply;
}
var functionUncurryThisAccessor;
var hasRequiredFunctionUncurryThisAccessor;
function requireFunctionUncurryThisAccessor() {
  if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  hasRequiredFunctionUncurryThisAccessor = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var aCallable = requireACallable();
  functionUncurryThisAccessor = function functionUncurryThisAccessor(object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {/* empty */}
  };
  return functionUncurryThisAccessor;
}
var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;
function requireIsPossiblePrototype() {
  if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  hasRequiredIsPossiblePrototype = 1;
  var isObject = requireIsObject();
  isPossiblePrototype = function isPossiblePrototype(argument) {
    return isObject(argument) || argument === null;
  };
  return isPossiblePrototype;
}
var aPossiblePrototype;
var hasRequiredAPossiblePrototype;
function requireAPossiblePrototype() {
  if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  hasRequiredAPossiblePrototype = 1;
  var isPossiblePrototype = requireIsPossiblePrototype();
  var $String = String;
  var $TypeError = TypeError;
  aPossiblePrototype = function aPossiblePrototype(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
  };
  return aPossiblePrototype;
}
var objectSetPrototypeOf;
var hasRequiredObjectSetPrototypeOf;
function requireObjectSetPrototypeOf() {
  if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  hasRequiredObjectSetPrototypeOf = 1;
  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var anObject = requireAnObject();
  var aPossiblePrototype = requireAPossiblePrototype();

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  return objectSetPrototypeOf;
}
var proxyAccessor;
var hasRequiredProxyAccessor;
function requireProxyAccessor() {
  if (hasRequiredProxyAccessor) return proxyAccessor;
  hasRequiredProxyAccessor = 1;
  var defineProperty = requireObjectDefineProperty().f;
  proxyAccessor = function proxyAccessor(Target, Source, key) {
    key in Target || defineProperty(Target, key, {
      configurable: true,
      get: function get() {
        return Source[key];
      },
      set: function set(it) {
        Source[key] = it;
      }
    });
  };
  return proxyAccessor;
}
var inheritIfRequired;
var hasRequiredInheritIfRequired;
function requireInheritIfRequired() {
  if (hasRequiredInheritIfRequired) return inheritIfRequired;
  hasRequiredInheritIfRequired = 1;
  var isCallable = requireIsCallable();
  var isObject = requireIsObject();
  var setPrototypeOf = requireObjectSetPrototypeOf();

  // makes subclassing work correct for wrapped built-ins
  inheritIfRequired = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
  return inheritIfRequired;
}
var toStringTagSupport;
var hasRequiredToStringTagSupport;
function requireToStringTagSupport() {
  if (hasRequiredToStringTagSupport) return toStringTagSupport;
  hasRequiredToStringTagSupport = 1;
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG] = 'z';
  toStringTagSupport = String(test) === '[object z]';
  return toStringTagSupport;
}
var classof;
var hasRequiredClassof;
function requireClassof() {
  if (hasRequiredClassof) return classof;
  hasRequiredClassof = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var isCallable = requireIsCallable();
  var classofRaw = requireClassofRaw();
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };
  return classof;
}
var toString;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString;
  hasRequiredToString = 1;
  var classof = requireClassof();
  var $String = String;
  toString = function toString(argument) {
    if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };
  return toString;
}
var normalizeStringArgument;
var hasRequiredNormalizeStringArgument;
function requireNormalizeStringArgument() {
  if (hasRequiredNormalizeStringArgument) return normalizeStringArgument;
  hasRequiredNormalizeStringArgument = 1;
  var toString = requireToString();
  normalizeStringArgument = function normalizeStringArgument(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
  };
  return normalizeStringArgument;
}
var installErrorCause;
var hasRequiredInstallErrorCause;
function requireInstallErrorCause() {
  if (hasRequiredInstallErrorCause) return installErrorCause;
  hasRequiredInstallErrorCause = 1;
  var isObject = requireIsObject();
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();

  // `InstallErrorCause` abstract operation
  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
  installErrorCause = function installErrorCause(O, options) {
    if (isObject(options) && 'cause' in options) {
      createNonEnumerableProperty(O, 'cause', options.cause);
    }
  };
  return installErrorCause;
}
var errorStackClear;
var hasRequiredErrorStackClear;
function requireErrorStackClear() {
  if (hasRequiredErrorStackClear) return errorStackClear;
  hasRequiredErrorStackClear = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var $Error = Error;
  var replace = uncurryThis(''.replace);
  var TEST = function (arg) {
    return String(new $Error(arg).stack);
  }('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
  errorStackClear = function errorStackClear(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
      while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    }
    return stack;
  };
  return errorStackClear;
}
var errorStackInstallable;
var hasRequiredErrorStackInstallable;
function requireErrorStackInstallable() {
  if (hasRequiredErrorStackInstallable) return errorStackInstallable;
  hasRequiredErrorStackInstallable = 1;
  var fails = requireFails();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  errorStackInstallable = !fails(function () {
    var error = new Error('a');
    if (!('stack' in error)) return true;
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
    return error.stack !== 7;
  });
  return errorStackInstallable;
}
var errorStackInstall;
var hasRequiredErrorStackInstall;
function requireErrorStackInstall() {
  if (hasRequiredErrorStackInstall) return errorStackInstall;
  hasRequiredErrorStackInstall = 1;
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var clearErrorStack = requireErrorStackClear();
  var ERROR_STACK_INSTALLABLE = requireErrorStackInstallable();

  // non-standard V8
  var captureStackTrace = Error.captureStackTrace;
  errorStackInstall = function errorStackInstall(error, C, stack, dropEntries) {
    if (ERROR_STACK_INSTALLABLE) {
      if (captureStackTrace) captureStackTrace(error, C);else createNonEnumerableProperty(error, 'stack', clearErrorStack(stack, dropEntries));
    }
  };
  return errorStackInstall;
}
var wrapErrorConstructorWithCause;
var hasRequiredWrapErrorConstructorWithCause;
function requireWrapErrorConstructorWithCause() {
  if (hasRequiredWrapErrorConstructorWithCause) return wrapErrorConstructorWithCause;
  hasRequiredWrapErrorConstructorWithCause = 1;
  var getBuiltIn = requireGetBuiltIn();
  var hasOwn = requireHasOwnProperty();
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var setPrototypeOf = requireObjectSetPrototypeOf();
  var copyConstructorProperties = requireCopyConstructorProperties();
  var proxyAccessor = requireProxyAccessor();
  var inheritIfRequired = requireInheritIfRequired();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var installErrorCause = requireInstallErrorCause();
  var installErrorStack = requireErrorStackInstall();
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  wrapErrorConstructorWithCause = function wrapErrorConstructorWithCause(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
    var STACK_TRACE_LIMIT = 'stackTraceLimit';
    var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
    var path = FULL_NAME.split('.');
    var ERROR_NAME = path[path.length - 1];
    var OriginalError = getBuiltIn.apply(null, path);
    if (!OriginalError) return;
    var OriginalErrorPrototype = OriginalError.prototype;

    // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
    if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
    if (!FORCED) return OriginalError;
    var BaseError = getBuiltIn('Error');
    var WrappedError = wrapper(function (a, b) {
      var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
      var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
      if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
      installErrorStack(result, WrappedError, result.stack, 2);
      if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
      if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
      return result;
    });
    WrappedError.prototype = OriginalErrorPrototype;
    if (ERROR_NAME !== 'Error') {
      if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);else copyConstructorProperties(WrappedError, BaseError, {
        name: true
      });
    } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
      proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
      proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
    }
    copyConstructorProperties(WrappedError, OriginalError);
    if (!IS_PURE) try {
      // Safari 13- bug: WebAssembly errors does not have a proper `.name`
      if (OriginalErrorPrototype.name !== ERROR_NAME) {
        createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
      }
      OriginalErrorPrototype.constructor = WrappedError;
    } catch (error) {/* empty */}
    return WrappedError;
  };
  return wrapErrorConstructorWithCause;
}
var hasRequiredEs_error_cause;
function requireEs_error_cause() {
  if (hasRequiredEs_error_cause) return es_error_cause;
  hasRequiredEs_error_cause = 1;
  /* eslint-disable no-unused-vars -- required for functions `.length` */
  var $ = require_export();
  var global = requireGlobal();
  var apply = requireFunctionApply();
  var wrapErrorConstructorWithCause = requireWrapErrorConstructorWithCause();
  var WEB_ASSEMBLY = 'WebAssembly';
  var WebAssembly = global[WEB_ASSEMBLY];

  // eslint-disable-next-line es/no-error-cause -- feature detection
  var FORCED = new Error('e', {
    cause: 7
  }).cause !== 7;
  var exportGlobalErrorCauseWrapper = function exportGlobalErrorCauseWrapper(ERROR_NAME, wrapper) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
    $({
      global: true,
      constructor: true,
      arity: 1,
      forced: FORCED
    }, O);
  };
  var exportWebAssemblyErrorCauseWrapper = function exportWebAssemblyErrorCauseWrapper(ERROR_NAME, wrapper) {
    if (WebAssembly && WebAssembly[ERROR_NAME]) {
      var O = {};
      O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
      $({
        target: WEB_ASSEMBLY,
        stat: true,
        constructor: true,
        arity: 1,
        forced: FORCED
      }, O);
    }
  };

  // https://tc39.es/ecma262/#sec-nativeerror
  exportGlobalErrorCauseWrapper('Error', function (init) {
    return function Error(message) {
      return apply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('EvalError', function (init) {
    return function EvalError(message) {
      return apply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('RangeError', function (init) {
    return function RangeError(message) {
      return apply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
    return function ReferenceError(message) {
      return apply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
    return function SyntaxError(message) {
      return apply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('TypeError', function (init) {
    return function TypeError(message) {
      return apply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('URIError', function (init) {
    return function URIError(message) {
      return apply(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
    return function CompileError(message) {
      return apply(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
    return function LinkError(message) {
      return apply(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
    return function RuntimeError(message) {
      return apply(init, this, arguments);
    };
  });
  return es_error_cause;
}
requireEs_error_cause();
var WHITES = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1.00000, (1.0 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.3290, 1.00000, (1.0 - 0.3127 - 0.3290) / 0.3290]
};
function getWhite(name) {
  if (Array.isArray(name)) {
    return name;
  }
  return WHITES[name];
}

// Adapt XYZ from white point W1 to W2
function adapt$2(W1, W2, XYZ) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  W1 = getWhite(W1);
  W2 = getWhite(W2);
  if (!W1 || !W2) {
    throw new TypeError("Missing white point to convert ".concat(!W1 ? "from" : "").concat(!W1 && !W2 ? "/" : "").concat(!W2 ? "to" : ""));
  }
  if (W1 === W2) {
    // Same whitepoints, no conversion needed
    return XYZ;
  }
  var env = {
    W1: W1,
    W2: W2,
    XYZ: XYZ,
    options: options
  };
  hooks.run("chromatic-adaptation-start", env);
  if (!env.M) {
    if (env.W1 === WHITES.D65 && env.W2 === WHITES.D50) {
      env.M = [[1.0479297925449969, 0.022946870601609652, -0.05019226628920524], [0.02962780877005599, 0.9904344267538799, -0.017073799063418826], [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]];
    } else if (env.W1 === WHITES.D50 && env.W2 === WHITES.D65) {
      env.M = [[0.955473421488075, -0.02309845494876471, 0.06325924320057072], [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323], [0.012314014864481998, -0.020507649298898964, 1.330365926242124]];
    }
  }
  hooks.run("chromatic-adaptation-end", env);
  if (env.M) {
    return multiplyMatrices(env.M, env.XYZ);
  } else {
    throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
  }
}
var noneTypes = new Set(["<number>", "<percentage>", "<angle>"]);

/**
 * Validates the coordinates of a color against a format's coord grammar and
 * maps the coordinates to the range or refRange of the coordinates.
 * @param {ColorSpace} space - Colorspace the coords are in
 * @param {object} format - the format object to validate against
 * @param {string} name - the name of the color function. e.g. "oklab" or "color"
 * @returns {object[]} - an array of type metadata for each coordinate
 */
function coerceCoords(space, format, name, coords) {
  var types = Object.entries(space.coords).map(function (_ref, i) {
    var _ref3 = _slicedToArray(_ref, 2),
      id = _ref3[0],
      coordMeta = _ref3[1];
    var coordGrammar = format.coordGrammar[i];
    var arg = coords[i];
    var providedType = arg === null || arg === void 0 ? void 0 : arg.type;

    // Find grammar alternative that matches the provided type
    // Non-strict equals is intentional because we are comparing w/ string objects
    var type;
    if (arg.none) {
      type = coordGrammar.find(function (c) {
        return noneTypes.has(c);
      });
    } else {
      type = coordGrammar.find(function (c) {
        return c == providedType;
      });
    }

    // Check that each coord conforms to its grammar
    if (!type) {
      // Type does not exist in the grammar, throw
      var coordName = coordMeta.name || id;
      throw new TypeError("".concat(providedType !== null && providedType !== void 0 ? providedType : arg.raw, " not allowed for ").concat(coordName, " in ").concat(name, "()"));
    }
    var fromRange = type.range;
    if (providedType === "<percentage>") {
      fromRange || (fromRange = [0, 1]);
    }
    var toRange = coordMeta.range || coordMeta.refRange;
    if (fromRange && toRange) {
      coords[i] = mapRange(fromRange, toRange, coords[i]);
    }
    return type;
  });
  return types;
}

/**
 * Convert a CSS Color string to a color object
 * @param {string} str
 * @param {object} [options]
 * @param {object} [options.meta] - Object for additional information about the parsing
 * @returns {Color}
 */
function parse(str) {
  var _String;
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    meta = _ref4.meta;
  var env = {
    "str": (_String = String(str)) === null || _String === void 0 ? void 0 : _String.trim()
  };
  hooks.run("parse-start", env);
  if (env.color) {
    return env.color;
  }
  env.parsed = parseFunction(env.str);
  if (env.parsed) {
    // Is a functional syntax
    var name = env.parsed.name;
    if (name === "color") {
      // color() function
      var id = env.parsed.args.shift();
      // Check against both <dashed-ident> and <ident> versions
      var alternateId = id.startsWith("--") ? id.substring(2) : "--".concat(id);
      var ids = [id, alternateId];
      var alpha = env.parsed.rawArgs.indexOf("/") > 0 ? env.parsed.args.pop() : 1;
      var _iterator2 = _createForOfIteratorHelper(ColorSpace.all),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var space = _step2.value;
          var colorSpec = space.getFormat("color");
          if (colorSpec) {
            var _colorSpec$ids;
            if (ids.includes(colorSpec.id) || (_colorSpec$ids = colorSpec.ids) !== null && _colorSpec$ids !== void 0 && _colorSpec$ids.filter(function (specId) {
              return ids.includes(specId);
            }).length) {
              // From https://drafts.csswg.org/css-color-4/#color-function
              // If more <number>s or <percentage>s are provided than parameters that the colorspace takes, the excess <number>s at the end are ignored.
              // If less <number>s or <percentage>s are provided than parameters that the colorspace takes, the missing parameters default to 0. (This is particularly convenient for multichannel printers where the additional inks are spot colors or varnishes that most colors on the page won’t use.)
              var coords = Object.keys(space.coords).map(function (_, i) {
                return env.parsed.args[i] || 0;
              });
              var types = void 0;
              if (colorSpec.coordGrammar) {
                types = coerceCoords(space, colorSpec, "color", coords);
              }
              if (meta) {
                Object.assign(meta, {
                  formatId: "color",
                  types: types
                });
              }
              if (colorSpec.id.startsWith("--") && !id.startsWith("--")) {
                defaults.warn("".concat(space.name, " is a non-standard space and not currently supported in the CSS spec. ") + "Use prefixed color(".concat(colorSpec.id, ") instead of color(").concat(id, ")."));
              }
              if (id.startsWith("--") && !colorSpec.id.startsWith("--")) {
                defaults.warn("".concat(space.name, " is a standard space and supported in the CSS spec. ") + "Use color(".concat(colorSpec.id, ") instead of prefixed color(").concat(id, ")."));
              }
              return {
                spaceId: space.id,
                coords: coords,
                alpha: alpha
              };
            }
          }
        }

        // Not found
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var didYouMean = "";
      var registryId = id in ColorSpace.registry ? id : alternateId;
      if (registryId in ColorSpace.registry) {
        var _ColorSpace$registry$;
        // Used color space id instead of color() id, these are often different
        var cssId = (_ColorSpace$registry$ = ColorSpace.registry[registryId].formats) === null || _ColorSpace$registry$ === void 0 || (_ColorSpace$registry$ = _ColorSpace$registry$.color) === null || _ColorSpace$registry$ === void 0 ? void 0 : _ColorSpace$registry$.id;
        if (cssId) {
          didYouMean = "Did you mean color(".concat(cssId, ")?");
        }
      }
      throw new TypeError("Cannot parse color(".concat(id, "). ") + (didYouMean || "Missing a plugin?"));
    } else {
      var _iterator3 = _createForOfIteratorHelper(ColorSpace.all),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _space = _step3.value;
          // color space specific function
          var format = _space.getFormat(name);
          if (format && format.type === "function") {
            var _alpha = 1;
            if (format.lastAlpha || last(env.parsed.args).alpha) {
              _alpha = env.parsed.args.pop();
            }
            var _coords = env.parsed.args;
            var _types = void 0;
            if (format.coordGrammar) {
              _types = coerceCoords(_space, format, name, _coords);
            }
            if (meta) {
              Object.assign(meta, {
                formatId: format.name,
                types: _types
              });
            }
            return {
              spaceId: _space.id,
              coords: _coords,
              alpha: _alpha
            };
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } else {
    // Custom, colorspace-specific format
    var _iterator4 = _createForOfIteratorHelper(ColorSpace.all),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _space2 = _step4.value;
        for (var formatId in _space2.formats) {
          var _format = _space2.formats[formatId];
          if (_format.type !== "custom") {
            continue;
          }
          if (_format.test && !_format.test(env.str)) {
            continue;
          }
          var color = _format.parse(env.str);
          if (color) {
            var _color$alpha;
            (_color$alpha = color.alpha) !== null && _color$alpha !== void 0 ? _color$alpha : color.alpha = 1;
            if (meta) {
              meta.formatId = formatId;
            }
            return color;
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  // If we're here, we couldn't parse
  throw new TypeError("Could not parse ".concat(str, " as a color. Missing a plugin?"));
}

/**
 * Resolves a color reference (object or string) to a plain color object
 * @param {Color | {space, coords, alpha} | string | Array<Color | {space, coords, alpha} | string> } color
 * @returns {{space, coords, alpha} | Array<{space, coords, alpha}}>
 */
function getColor(color) {
  if (Array.isArray(color)) {
    return color.map(getColor);
  }
  if (!color) {
    throw new TypeError("Empty color reference");
  }
  if (isString(color)) {
    color = parse(color);
  }

  // Object fixup
  var space = color.space || color.spaceId;
  if (!(space instanceof ColorSpace)) {
    // Convert string id to color space object
    color.space = ColorSpace.get(space);
  }
  if (color.alpha === undefined) {
    color.alpha = 1;
  }
  return color;
}
var ε$7 = .000075;

/**
 * Class to represent a color space
 */
var ColorSpace = /*#__PURE__*/function () {
  function ColorSpace(options) {
    _classCallCheck(this, ColorSpace);
    var _options$coords, _ref, _options$white, _options$formats, _this$formats$color;
    this.id = options.id;
    this.name = options.name;
    this.base = options.base ? ColorSpace.get(options.base) : null;
    this.aliases = options.aliases;
    if (this.base) {
      this.fromBase = options.fromBase;
      this.toBase = options.toBase;
    }

    // Coordinate metadata

    var coords = (_options$coords = options.coords) !== null && _options$coords !== void 0 ? _options$coords : this.base.coords;
    for (var name in coords) {
      if (!("name" in coords[name])) {
        coords[name].name = name;
      }
    }
    this.coords = coords;

    // White point

    var white = (_ref = (_options$white = options.white) !== null && _options$white !== void 0 ? _options$white : this.base.white) !== null && _ref !== void 0 ? _ref : "D65";
    this.white = getWhite(white);

    // Sort out formats

    this.formats = (_options$formats = options.formats) !== null && _options$formats !== void 0 ? _options$formats : {};
    for (var _name in this.formats) {
      var format = this.formats[_name];
      format.type || (format.type = "function");
      format.name || (format.name = _name);
    }
    if (!((_this$formats$color = this.formats.color) !== null && _this$formats$color !== void 0 && _this$formats$color.id)) {
      var _this$formats$color2;
      this.formats.color = _objectSpread(_objectSpread({}, (_this$formats$color2 = this.formats.color) !== null && _this$formats$color2 !== void 0 ? _this$formats$color2 : {}), {}, {
        id: options.cssId || this.id
      });
    }

    // Gamut space

    if (options.gamutSpace) {
      // Gamut space explicitly specified
      this.gamutSpace = options.gamutSpace === "self" ? this : ColorSpace.get(options.gamutSpace);
    } else {
      // No gamut space specified, calculate a sensible default
      if (this.isPolar) {
        // Do not check gamut through polar coordinates
        this.gamutSpace = this.base;
      } else {
        this.gamutSpace = this;
      }
    }

    // Optimize inGamut for unbounded spaces
    if (this.gamutSpace.isUnbounded) {
      this.inGamut = function (coords, options) {
        return true;
      };
    }

    // Other stuff
    this.referred = options.referred;

    // Compute ancestors and store them, since they will never change
    Object.defineProperty(this, "path", {
      value: getPath(this).reverse(),
      writable: false,
      enumerable: true,
      configurable: true
    });
    hooks.run("colorspace-init-end", this);
  }
  return _createClass(ColorSpace, [{
    key: "inGamut",
    value: function inGamut(coords) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$epsilon = _ref5.epsilon,
        epsilon = _ref5$epsilon === void 0 ? ε$7 : _ref5$epsilon;
      if (!this.equals(this.gamutSpace)) {
        coords = this.to(this.gamutSpace, coords);
        return this.gamutSpace.inGamut(coords, {
          epsilon: epsilon
        });
      }
      var coordMeta = Object.values(this.coords);
      return coords.every(function (c, i) {
        var meta = coordMeta[i];
        if (meta.type !== "angle" && meta.range) {
          if (Number.isNaN(c)) {
            // NaN is always in gamut
            return true;
          }
          var _meta$range = _slicedToArray(meta.range, 2),
            min = _meta$range[0],
            _max = _meta$range[1];
          return (min === undefined || c >= min - epsilon) && (_max === undefined || c <= _max + epsilon);
        }
        return true;
      });
    }
  }, {
    key: "isUnbounded",
    get: function get() {
      return Object.values(this.coords).every(function (coord) {
        return !("range" in coord);
      });
    }
  }, {
    key: "cssId",
    get: function get() {
      var _this$formats;
      return ((_this$formats = this.formats) === null || _this$formats === void 0 || (_this$formats = _this$formats.color) === null || _this$formats === void 0 ? void 0 : _this$formats.id) || this.id;
    }
  }, {
    key: "isPolar",
    get: function get() {
      for (var id in this.coords) {
        if (this.coords[id].type === "angle") {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "getFormat",
    value: function getFormat(format) {
      if (_typeof(format) === "object") {
        format = processFormat(format, this);
        return format;
      }
      var ret;
      if (format === "default") {
        // Get first format
        ret = Object.values(this.formats)[0];
      } else {
        ret = this.formats[format];
      }
      if (ret) {
        ret = processFormat(ret, this);
        return ret;
      }
      return null;
    }

    /**
     * Check if this color space is the same as another color space reference.
     * Allows proxying color space objects and comparing color spaces with ids.
     * @param {string | ColorSpace} space ColorSpace object or id to compare to
     * @returns {boolean}
     */
  }, {
    key: "equals",
    value: function equals(space) {
      if (!space) {
        return false;
      }
      return this === space || this.id === space || this.id === space.id;
    }
  }, {
    key: "to",
    value: function to(space, coords) {
      if (arguments.length === 1) {
        var color = getColor(space);
        var _ref6 = [color.space, color.coords];
        space = _ref6[0];
        coords = _ref6[1];
      }
      space = ColorSpace.get(space);
      if (this.equals(space)) {
        // Same space, no change needed
        return coords;
      }

      // Convert NaN to 0, which seems to be valid in every coordinate of every color space
      coords = coords.map(function (c) {
        return Number.isNaN(c) ? 0 : c;
      });

      // Find connection space = lowest common ancestor in the base tree
      var myPath = this.path;
      var otherPath = space.path;
      var connectionSpace, connectionSpaceIndex;
      for (var i = 0; i < myPath.length; i++) {
        if (myPath[i].equals(otherPath[i])) {
          connectionSpace = myPath[i];
          connectionSpaceIndex = i;
        } else {
          break;
        }
      }
      if (!connectionSpace) {
        // This should never happen
        throw new Error("Cannot convert between color spaces ".concat(this, " and ").concat(space, ": no connection space was found"));
      }

      // Go up from current space to connection space
      for (var _i = myPath.length - 1; _i > connectionSpaceIndex; _i--) {
        coords = myPath[_i].toBase(coords);
      }

      // Go down from connection space to target space
      for (var _i2 = connectionSpaceIndex + 1; _i2 < otherPath.length; _i2++) {
        coords = otherPath[_i2].fromBase(coords);
      }
      return coords;
    }
  }, {
    key: "from",
    value: function from(space, coords) {
      if (arguments.length === 1) {
        var color = getColor(space);
        var _ref7 = [color.space, color.coords];
        space = _ref7[0];
        coords = _ref7[1];
      }
      space = ColorSpace.get(space);
      return space.to(this, coords);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.name, " (").concat(this.id, ")");
    }
  }, {
    key: "getMinCoords",
    value: function getMinCoords() {
      var ret = [];
      for (var id in this.coords) {
        var _range$min;
        var meta = this.coords[id];
        var _range = meta.range || meta.refRange;
        ret.push((_range$min = _range === null || _range === void 0 ? void 0 : _range.min) !== null && _range$min !== void 0 ? _range$min : 0);
      }
      return ret;
    }
  }], [{
    key: "all",
    get:
    // Returns array of unique color spaces
    function get() {
      return _toConsumableArray(new Set(Object.values(ColorSpace.registry)));
    }
  }, {
    key: "register",
    value: function register(id, space) {
      if (arguments.length === 1) {
        space = arguments[0];
        id = space.id;
      }
      space = this.get(space);
      if (this.registry[id] && this.registry[id] !== space) {
        throw new Error("Duplicate color space registration: '".concat(id, "'"));
      }
      this.registry[id] = space;

      // Register aliases when called without an explicit ID.
      if (arguments.length === 1 && space.aliases) {
        var _iterator5 = _createForOfIteratorHelper(space.aliases),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var alias = _step5.value;
            this.register(alias, space);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      return space;
    }

    /**
     * Lookup ColorSpace object by name
     * @param {ColorSpace | string} name
     */
  }, {
    key: "get",
    value: function get(space) {
      if (!space || space instanceof ColorSpace) {
        return space;
      }
      var argType = type(space);
      if (argType === "string") {
        // It's a color space id
        var ret = ColorSpace.registry[space.toLowerCase()];
        if (!ret) {
          throw new TypeError("No color space found with id = \"".concat(space, "\""));
        }
        return ret;
      }
      for (var _len = arguments.length, alternatives = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        alternatives[_key - 1] = arguments[_key];
      }
      if (alternatives.length) {
        return ColorSpace.get.apply(ColorSpace, alternatives);
      }
      throw new TypeError("".concat(space, " is not a valid color space"));
    }

    /**
     * Get metadata about a coordinate of a color space
     *
     * @static
     * @param {Array | string} ref
     * @param {ColorSpace | string} [workingSpace]
     * @return {Object}
     */
  }, {
    key: "resolveCoord",
    value: function resolveCoord(ref, workingSpace) {
      var coordType = type(ref);
      var space, coord;
      if (coordType === "string") {
        if (ref.includes(".")) {
          // Absolute coordinate
          var _ref$split = ref.split(".");
          var _ref$split2 = _slicedToArray(_ref$split, 2);
          space = _ref$split2[0];
          coord = _ref$split2[1];
        } else {
          // Relative coordinate
          space = void 0;
          coord = ref;
        }
      } else if (Array.isArray(ref)) {
        var _ref8 = _slicedToArray(ref, 2);
        space = _ref8[0];
        coord = _ref8[1];
      } else {
        // Object
        space = ref.space;
        coord = ref.coordId;
      }
      space = ColorSpace.get(space);
      if (!space) {
        space = workingSpace;
      }
      if (!space) {
        throw new TypeError("Cannot resolve coordinate reference ".concat(ref, ": No color space specified and relative references are not allowed here"));
      }
      coordType = type(coord);
      if (coordType === "number" || coordType === "string" && coord >= 0) {
        // Resolve numerical coord
        var meta = Object.entries(space.coords)[coord];
        if (meta) {
          return _objectSpread({
            space: space,
            id: meta[0],
            index: coord
          }, meta[1]);
        }
      }
      space = ColorSpace.get(space);
      var normalizedCoord = coord.toLowerCase();
      var i = 0;
      for (var id in space.coords) {
        var _meta$name;
        var _meta = space.coords[id];
        if (id.toLowerCase() === normalizedCoord || ((_meta$name = _meta.name) === null || _meta$name === void 0 ? void 0 : _meta$name.toLowerCase()) === normalizedCoord) {
          return _objectSpread({
            space: space,
            id: id,
            index: i
          }, _meta);
        }
        i++;
      }
      throw new TypeError("No \"".concat(coord, "\" coordinate found in ").concat(space.name, ". Its coordinates are: ").concat(Object.keys(space.coords).join(", ")));
    }
  }]);
}();
_defineProperty(ColorSpace, "registry", {});
_defineProperty(ColorSpace, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
function getPath(space) {
  var ret = [space];
  for (var s = space; s = s.base;) {
    ret.push(s);
  }
  return ret;
}
function processFormat(format) {
  var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    coords = _ref9.coords;
  if (format.coords && !format.coordGrammar) {
    format.type || (format.type = "function");
    format.name || (format.name = "color");

    // Format has not been processed
    format.coordGrammar = parseCoordGrammar(format.coords);
    var coordFormats = Object.entries(coords).map(function (_ref2, i) {
      var _ref0 = _slicedToArray(_ref2, 2),
        id = _ref0[0],
        coordMeta = _ref0[1];
      // Preferred format for each coord is the first one
      var outputType = format.coordGrammar[i][0];
      var fromRange = coordMeta.range || coordMeta.refRange;
      var toRange = outputType.range,
        suffix = "";

      // Non-strict equals intentional since outputType could be a string object
      if (outputType == "<percentage>") {
        toRange = [0, 100];
        suffix = "%";
      } else if (outputType == "<angle>") {
        suffix = "deg";
      }
      return {
        fromRange: fromRange,
        toRange: toRange,
        suffix: suffix
      };
    });
    format.serializeCoords = function (coords, precision) {
      return coords.map(function (c, i) {
        var _coordFormats$i = coordFormats[i],
          fromRange = _coordFormats$i.fromRange,
          toRange = _coordFormats$i.toRange,
          suffix = _coordFormats$i.suffix;
        if (fromRange && toRange) {
          c = mapRange(fromRange, toRange, c);
        }
        c = serializeNumber(c, {
          precision: precision,
          unit: suffix
        });
        return c;
      });
    };
  }
  return format;
}
var xyz_d65 = new ColorSpace({
  id: "xyz-d65",
  name: "XYZ D65",
  coords: {
    x: {
      name: "X"
    },
    y: {
      name: "Y"
    },
    z: {
      name: "Z"
    }
  },
  white: "D65",
  formats: {
    color: {
      ids: ["xyz-d65", "xyz"]
    }
  },
  aliases: ["xyz"]
});

/**
 * Convenience class for RGB color spaces
 * @extends {ColorSpace}
 */
var RGBColorSpace = /*#__PURE__*/function (_ColorSpace2) {
  /**
   * Creates a new RGB ColorSpace.
   * If coords are not specified, they will use the default RGB coords.
   * Instead of `fromBase()` and `toBase()` functions,
   * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
   * @param {*} options - Same options as {@link ColorSpace} plus:
   * @param {number[][]} options.toXYZ_M - Matrix to convert to XYZ
   * @param {number[][]} options.fromXYZ_M - Matrix to convert from XYZ
   */
  function RGBColorSpace(options) {
    var _this;
    _classCallCheck(this, RGBColorSpace);
    var _options$referred;
    if (!options.coords) {
      options.coords = {
        r: {
          range: [0, 1],
          name: "Red"
        },
        g: {
          range: [0, 1],
          name: "Green"
        },
        b: {
          range: [0, 1],
          name: "Blue"
        }
      };
    }
    if (!options.base) {
      options.base = xyz_d65;
    }
    if (options.toXYZ_M && options.fromXYZ_M) {
      var _options$toBase, _options$fromBase;
      (_options$toBase = options.toBase) !== null && _options$toBase !== void 0 ? _options$toBase : options.toBase = function (rgb) {
        var xyz = multiplyMatrices(options.toXYZ_M, rgb);
        if (_this.white !== _this.base.white) {
          // Perform chromatic adaptation
          xyz = adapt$2(_this.white, _this.base.white, xyz);
        }
        return xyz;
      };
      (_options$fromBase = options.fromBase) !== null && _options$fromBase !== void 0 ? _options$fromBase : options.fromBase = function (xyz) {
        xyz = adapt$2(_this.base.white, _this.white, xyz);
        return multiplyMatrices(options.fromXYZ_M, xyz);
      };
    }
    (_options$referred = options.referred) !== null && _options$referred !== void 0 ? _options$referred : options.referred = "display";
    return _this = _callSuper(this, RGBColorSpace, [options]);
  }
  _inherits(RGBColorSpace, _ColorSpace2);
  return _createClass(RGBColorSpace);
}(ColorSpace);
/**
 * Get the coordinates of a color in any color space
 * @param {Color} color
 * @param {string | ColorSpace} [space = color.space] The color space to convert to. Defaults to the color's current space
 * @returns {number[]} The color coordinates in the given color space
 */
function getAll(color, space) {
  color = getColor(color);
  if (!space || color.space.equals(space)) {
    // No conversion needed
    return color.coords.slice();
  }
  space = ColorSpace.get(space);
  return space.from(color);
}
function get(color, prop) {
  color = getColor(color);
  var _ColorSpace$resolveCo = ColorSpace.resolveCoord(prop, color.space),
    space = _ColorSpace$resolveCo.space,
    index = _ColorSpace$resolveCo.index;
  var coords = getAll(color, space);
  return coords[index];
}
function setAll(color, space, coords) {
  color = getColor(color);
  space = ColorSpace.get(space);
  color.coords = space.to(color.space, coords);
  return color;
}
setAll.returns = "color";

// Set properties and return current instance
function set(color, prop, value) {
  color = getColor(color);
  if (arguments.length === 2 && type(arguments[1]) === "object") {
    // Argument is an object literal
    var object = arguments[1];
    for (var _p in object) {
      set(color, _p, object[_p]);
    }
  } else {
    if (typeof value === "function") {
      value = value(get(color, prop));
    }
    var _ColorSpace$resolveCo2 = ColorSpace.resolveCoord(prop, color.space),
      space = _ColorSpace$resolveCo2.space,
      index = _ColorSpace$resolveCo2.index;
    var coords = getAll(color, space);
    coords[index] = value;
    setAll(color, space, coords);
  }
  return color;
}
set.returns = "color";
var XYZ_D50 = new ColorSpace({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: xyz_d65,
  fromBase: function fromBase(coords) {
    return adapt$2(xyz_d65.white, "D50", coords);
  },
  toBase: function toBase(coords) {
    return adapt$2("D50", xyz_d65.white, coords);
  }
});

// κ * ε  = 2^3 = 8
var ε$6 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var ε3$1 = 24 / 116;
var κ$4 = 24389 / 27; // 29^3/3^3

var white$4 = WHITES.D50;
var lab = new ColorSpace({
  id: "lab",
  name: "Lab",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D50, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: white$4,
  base: XYZ_D50,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase: function fromBase(XYZ) {
    // compute xyz, which is XYZ scaled relative to reference white
    var xyz = XYZ.map(function (value, i) {
      return value / white$4[i];
    });

    // now compute f
    var f = xyz.map(function (value) {
      return value > ε$6 ? Math.cbrt(value) : (κ$4 * value + 16) / 116;
    });
    return [116 * f[1] - 16,
    // L
    500 * (f[0] - f[1]),
    // a
    200 * (f[1] - f[2]) // b
    ];
  },
  // Convert Lab to D50-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase: function toBase(Lab) {
    // compute f, starting with the luminance-related term
    var f = [];
    f[1] = (Lab[0] + 16) / 116;
    f[0] = Lab[1] / 500 + f[1];
    f[2] = f[1] - Lab[2] / 200;

    // compute xyz
    var xyz = [f[0] > ε3$1 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ$4, Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ$4, f[2] > ε3$1 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ$4];

    // Compute XYZ by scaling xyz by reference white
    return xyz.map(function (value, i) {
      return value * white$4[i];
    });
  },
  formats: {
    "lab": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function constrain(angle) {
  return (angle % 360 + 360) % 360;
}
function adjust(arc, angles) {
  if (arc === "raw") {
    return angles;
  }
  var _angles$map = angles.map(constrain),
    _angles$map2 = _slicedToArray(_angles$map, 2),
    a1 = _angles$map2[0],
    a2 = _angles$map2[1];
  var angleDiff = a2 - a1;
  if (arc === "increasing") {
    if (angleDiff < 0) {
      a2 += 360;
    }
  } else if (arc === "decreasing") {
    if (angleDiff > 0) {
      a1 += 360;
    }
  } else if (arc === "longer") {
    if (-180 < angleDiff && angleDiff < 180) {
      if (angleDiff > 0) {
        a1 += 360;
      } else {
        a2 += 360;
      }
    }
  } else if (arc === "shorter") {
    if (angleDiff > 180) {
      a1 += 360;
    } else if (angleDiff < -180) {
      a2 += 360;
    }
  }
  return [a1, a2];
}
var lch = new ColorSpace({
  id: "lch",
  name: "LCH",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 150],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: lab,
  fromBase: function fromBase(Lab) {
    // Convert to polar form
    var _Lab = _slicedToArray(Lab, 3),
      L = _Lab[0],
      a = _Lab[1],
      b = _Lab[2];
    var hue;
    var ε = 0.02;
    if (Math.abs(a) < ε && Math.abs(b) < ε) {
      hue = NaN;
    } else {
      hue = Math.atan2(b, a) * 180 / Math.PI;
    }
    return [L,
    // L is still L
    Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)),
    // Chroma
    constrain(hue) // Hue, in degrees [0 to 360)
    ];
  },
  toBase: function toBase(LCH) {
    // Convert from polar form
    var _LCH = _slicedToArray(LCH, 3),
      Lightness = _LCH[0],
      Chroma = _LCH[1],
      Hue = _LCH[2];
    // Clamp any negative Chroma
    if (Chroma < 0) {
      Chroma = 0;
    }
    // Deal with NaN Hue
    if (isNaN(Hue)) {
      Hue = 0;
    }
    return [Lightness,
    // L is still L
    Chroma * Math.cos(Hue * Math.PI / 180),
    // a
    Chroma * Math.sin(Hue * Math.PI / 180) // b
    ];
  },
  formats: {
    "lch": {
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});

// deltaE2000 is a statistically significant improvement
// and is recommended by the CIE and Idealliance
// especially for color differences less than 10 deltaE76
// but is wicked complicated
// and many implementations have small errors!
// DeltaE2000 is also discontinuous; in case this
// matters to you, use deltaECMC instead.

var Gfactor = Math.pow(25, 7);
var π$1 = Math.PI;
var r2d = 180 / π$1;
var d2r$1 = π$1 / 180;
function pow7(x) {
  // Faster than x ** 7 or Math.pow(x, 7)

  var x2 = x * x;
  var x7 = x2 * x2 * x2 * x;
  return x7;
}
function deltaE2000(color, sample) {
  var _ref1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref1$kL = _ref1.kL,
    kL = _ref1$kL === void 0 ? 1 : _ref1$kL,
    _ref1$kC = _ref1.kC,
    kC = _ref1$kC === void 0 ? 1 : _ref1$kC,
    _ref1$kH = _ref1.kH,
    kH = _ref1$kH === void 0 ? 1 : _ref1$kH;
  // Given this color as the reference
  // and the function parameter as the sample,
  // calculate deltaE 2000.
  // This implementation assumes the parametric
  // weighting factors kL, kC and kH
  // for the influence of viewing conditions
  // are all 1, as sadly seems typical.
  // kL should be increased for lightness texture or noise
  // and kC increased for chroma noise
  var _getColor = getColor([color, sample]);
  var _getColor2 = _slicedToArray(_getColor, 2);
  color = _getColor2[0];
  sample = _getColor2[1];
  var _lab$from = lab.from(color),
    _lab$from2 = _slicedToArray(_lab$from, 3),
    L1 = _lab$from2[0],
    a1 = _lab$from2[1],
    b1 = _lab$from2[2];
  var C1 = lch.from(lab, [L1, a1, b1])[1];
  var _lab$from3 = lab.from(sample),
    _lab$from4 = _slicedToArray(_lab$from3, 3),
    L2 = _lab$from4[0],
    a2 = _lab$from4[1],
    b2 = _lab$from4[2];
  var C2 = lch.from(lab, [L2, a2, b2])[1];

  // Check for negative Chroma,
  // which might happen through
  // direct user input of LCH values

  if (C1 < 0) {
    C1 = 0;
  }
  if (C2 < 0) {
    C2 = 0;
  }
  var Cbar = (C1 + C2) / 2; // mean Chroma

  // calculate a-axis asymmetry factor from mean Chroma
  // this turns JND ellipses for near-neutral colors back into circles
  var C7 = pow7(Cbar);
  var G = 0.5 * (1 - Math.sqrt(C7 / (C7 + Gfactor)));

  // scale a axes by asymmetry factor
  // this by the way is why there is no Lab2000 colorspace
  var adash1 = (1 + G) * a1;
  var adash2 = (1 + G) * a2;

  // calculate new Chroma from scaled a and original b axes
  var Cdash1 = Math.sqrt(Math.pow(adash1, 2) + Math.pow(b1, 2));
  var Cdash2 = Math.sqrt(Math.pow(adash2, 2) + Math.pow(b2, 2));

  // calculate new hues, with zero hue for true neutrals
  // and in degrees, not radians

  var h1 = adash1 === 0 && b1 === 0 ? 0 : Math.atan2(b1, adash1);
  var h2 = adash2 === 0 && b2 === 0 ? 0 : Math.atan2(b2, adash2);
  if (h1 < 0) {
    h1 += 2 * π$1;
  }
  if (h2 < 0) {
    h2 += 2 * π$1;
  }
  h1 *= r2d;
  h2 *= r2d;

  // Lightness and Chroma differences; sign matters
  var ΔL = L2 - L1;
  var ΔC = Cdash2 - Cdash1;

  // Hue difference, getting the sign correct
  var hdiff = h2 - h1;
  var hsum = h1 + h2;
  var habs = Math.abs(hdiff);
  var Δh;
  if (Cdash1 * Cdash2 === 0) {
    Δh = 0;
  } else if (habs <= 180) {
    Δh = hdiff;
  } else if (hdiff > 180) {
    Δh = hdiff - 360;
  } else if (hdiff < -180) {
    Δh = hdiff + 360;
  } else {
    defaults.warn("the unthinkable has happened");
  }

  // weighted Hue difference, more for larger Chroma
  var ΔH = 2 * Math.sqrt(Cdash2 * Cdash1) * Math.sin(Δh * d2r$1 / 2);

  // calculate mean Lightness and Chroma
  var Ldash = (L1 + L2) / 2;
  var Cdash = (Cdash1 + Cdash2) / 2;
  var Cdash7 = pow7(Cdash);

  // Compensate for non-linearity in the blue region of Lab.
  // Four possibilities for hue weighting factor,
  // depending on the angles, to get the correct sign
  var hdash;
  if (Cdash1 * Cdash2 === 0) {
    hdash = hsum; // which should be zero
  } else if (habs <= 180) {
    hdash = hsum / 2;
  } else if (hsum < 360) {
    hdash = (hsum + 360) / 2;
  } else {
    hdash = (hsum - 360) / 2;
  }

  // positional corrections to the lack of uniformity of CIELAB
  // These are all trying to make JND ellipsoids more like spheres

  // SL Lightness crispening factor
  // a background with L=50 is assumed
  var lsq = Math.pow(Ldash - 50, 2);
  var SL = 1 + 0.015 * lsq / Math.sqrt(20 + lsq);

  // SC Chroma factor, similar to those in CMC and deltaE 94 formulae
  var SC = 1 + 0.045 * Cdash;

  // Cross term T for blue non-linearity
  var T = 1;
  T -= 0.17 * Math.cos((hdash - 30) * d2r$1);
  T += 0.24 * Math.cos(2 * hdash * d2r$1);
  T += 0.32 * Math.cos((3 * hdash + 6) * d2r$1);
  T -= 0.20 * Math.cos((4 * hdash - 63) * d2r$1);

  // SH Hue factor depends on Chroma,
  // as well as adjusted hue angle like deltaE94.
  var SH = 1 + 0.015 * Cdash * T;

  // RT Hue rotation term compensates for rotation of JND ellipses
  // and Munsell constant hue lines
  // in the medium-high Chroma blue region
  // (Hue 225 to 315)
  var Δθ = 30 * Math.exp(-1 * Math.pow((hdash - 275) / 25, 2));
  var RC = 2 * Math.sqrt(Cdash7 / (Cdash7 + Gfactor));
  var RT = -1 * Math.sin(2 * Δθ * d2r$1) * RC;

  // Finally calculate the deltaE, term by term as root sume of squares
  var dE = Math.pow(ΔL / (kL * SL), 2);
  dE += Math.pow(ΔC / (kC * SC), 2);
  dE += Math.pow(ΔH / (kH * SH), 2);
  dE += RT * (ΔC / (kC * SC)) * (ΔH / (kH * SH));
  return Math.sqrt(dE);
  // Yay!!!
}

// Recalculated for consistent reference white
// see https://github.com/w3c/csswg-drafts/issues/6642#issuecomment-943521484
var XYZtoLMS_M$1 = [[0.8190224379967030, 0.3619062600528904, -0.1288737815209879], [0.0329836539323885, 0.9292868615863434, 0.0361446663506424], [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]];
// inverse of XYZtoLMS_M
var LMStoXYZ_M$1 = [[1.2268798758459243, -0.5578149944602171, 0.2813910456659647], [-0.0405757452148008, 1.1122868032803170, -0.0717110580655164], [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]];
var LMStoLab_M = [[0.2104542683093140, 0.7936177747023054, -0.0040720430116193], [1.9779985324311684, -2.4285922420485799, 0.4505937096174110], [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]];
// LMStoIab_M inverted
var LabtoLMS_M = [[1.0000000000000000, 0.3963377773761749, 0.2158037573099136], [1.0000000000000000, -0.1055613458156586, -0.0638541728258133], [1.0000000000000000, -0.0894841775298119, -1.2914855480194092]];
var OKLab = new ColorSpace({
  id: "oklab",
  name: "Oklab",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    a: {
      refRange: [-0.4, 0.4]
    },
    b: {
      refRange: [-0.4, 0.4]
    }
  },
  // Note that XYZ is relative to D65
  white: "D65",
  base: xyz_d65,
  fromBase: function fromBase(XYZ) {
    // move to LMS cone domain
    var LMS = multiplyMatrices(XYZtoLMS_M$1, XYZ);

    // non-linearity
    var LMSg = LMS.map(function (val) {
      return Math.cbrt(val);
    });
    return multiplyMatrices(LMStoLab_M, LMSg);
  },
  toBase: function toBase(OKLab) {
    // move to LMS cone domain
    var LMSg = multiplyMatrices(LabtoLMS_M, OKLab);

    // restore linearity
    var LMS = LMSg.map(function (val) {
      return Math.pow(val, 3);
    });
    return multiplyMatrices(LMStoXYZ_M$1, LMS);
  },
  formats: {
    "oklab": {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in CIE Lab

function deltaEOK(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaEOK, term by term as root sum of squares
  var _getColor3 = getColor([color, sample]);
  var _getColor4 = _slicedToArray(_getColor3, 2);
  color = _getColor4[0];
  sample = _getColor4[1];
  var _OKLab$from = OKLab.from(color),
    _OKLab$from2 = _slicedToArray(_OKLab$from, 3),
    L1 = _OKLab$from2[0],
    a1 = _OKLab$from2[1],
    b1 = _OKLab$from2[2];
  var _OKLab$from3 = OKLab.from(sample),
    _OKLab$from4 = _slicedToArray(_OKLab$from3, 3),
    L2 = _OKLab$from4[0],
    a2 = _OKLab$from4[1],
    b2 = _OKLab$from4[2];
  var ΔL = L1 - L2;
  var Δa = a1 - a2;
  var Δb = b1 - b2;
  return Math.sqrt(Math.pow(ΔL, 2) + Math.pow(Δa, 2) + Math.pow(Δb, 2));
}
var ε$5 = .000075;

/**
 * Check if a color is in gamut of either its own or another color space
 * @return {Boolean} Is the color in gamut?
 */
function inGamut(color, space) {
  var _ref10 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref10$epsilon = _ref10.epsilon,
    epsilon = _ref10$epsilon === void 0 ? ε$5 : _ref10$epsilon;
  color = getColor(color);
  if (!space) {
    space = color.space;
  }
  space = ColorSpace.get(space);
  var coords = color.coords;
  if (space !== color.space) {
    coords = space.from(color);
  }
  return space.inGamut(coords, {
    epsilon: epsilon
  });
}
function clone(color) {
  return {
    space: color.space,
    coords: color.coords.slice(),
    alpha: color.alpha
  };
}

/**
 * Euclidean distance of colors in an arbitrary color space
 */
function distance(color1, color2) {
  var space = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "lab";
  space = ColorSpace.get(space);

  // Assume getColor() is called on color in space.from()
  var coords1 = space.from(color1);
  var coords2 = space.from(color2);
  return Math.sqrt(coords1.reduce(function (acc, c1, i) {
    var c2 = coords2[i];
    if (isNaN(c1) || isNaN(c2)) {
      return acc;
    }
    return acc + Math.pow(c2 - c1, 2);
  }, 0));
}
function deltaE76(color, sample) {
  // Assume getColor() is called in the distance function
  return distance(color, sample, "lab");
}

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// CMC by the Color Measurement Committee of the
// Bradford Society of Dyeists and Colorsts, 1994.
// Uses LCH rather than Lab,
// with different weights for L, C and H differences
// A nice increase in accuracy for modest increase in complexity
var π = Math.PI;
var d2r = π / 180;
function deltaECMC(color, sample) {
  var _ref11 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref11$l = _ref11.l,
    l = _ref11$l === void 0 ? 2 : _ref11$l,
    _ref11$c = _ref11.c,
    c = _ref11$c === void 0 ? 1 : _ref11$c;
  // Given this color as the reference
  // and a sample,
  // calculate deltaE CMC.
  // This implementation assumes the parametric
  // weighting factors l:c are 2:1
  // which is typical for non-textile uses.
  var _getColor5 = getColor([color, sample]);
  var _getColor6 = _slicedToArray(_getColor5, 2);
  color = _getColor6[0];
  sample = _getColor6[1];
  var _lab$from5 = lab.from(color),
    _lab$from6 = _slicedToArray(_lab$from5, 3),
    L1 = _lab$from6[0],
    a1 = _lab$from6[1],
    b1 = _lab$from6[2];
  var _lch$from = lch.from(lab, [L1, a1, b1]),
    _lch$from2 = _slicedToArray(_lch$from, 3),
    C1 = _lch$from2[1],
    H1 = _lch$from2[2];
  var _lab$from7 = lab.from(sample),
    _lab$from8 = _slicedToArray(_lab$from7, 3),
    L2 = _lab$from8[0],
    a2 = _lab$from8[1],
    b2 = _lab$from8[2];
  var C2 = lch.from(lab, [L2, a2, b2])[1];

  // let [L1, a1, b1] = color.getAll(lab);
  // let C1 = color.get("lch.c");
  // let H1 = color.get("lch.h");
  // let [L2, a2, b2] = sample.getAll(lab);
  // let C2 = sample.get("lch.c");

  // Check for negative Chroma,
  // which might happen through
  // direct user input of LCH values

  if (C1 < 0) {
    C1 = 0;
  }
  if (C2 < 0) {
    C2 = 0;
  }

  // we don't need H2 as ΔH is calculated from Δa, Δb and ΔC

  // Lightness and Chroma differences
  // These are (color - sample), unlike deltaE2000
  var ΔL = L1 - L2;
  var ΔC = C1 - C2;
  var Δa = a1 - a2;
  var Δb = b1 - b2;

  // weighted Hue difference, less for larger Chroma difference

  var H2 = Math.pow(Δa, 2) + Math.pow(Δb, 2) - Math.pow(ΔC, 2);
  // due to roundoff error it is possible that, for zero a and b,
  // ΔC > Δa + Δb is 0, resulting in attempting
  // to take the square root of a negative number

  // trying instead the equation from Industrial Color Physics
  // By Georg A. Klein

  // let ΔH = ((a1 * b2) - (a2 * b1)) / Math.sqrt(0.5 * ((C2 * C1) + (a2 * a1) + (b2 * b1)));
  // console.log({ΔH});
  // This gives the same result to 12 decimal places
  // except it sometimes NaNs when trying to root a negative number

  // let ΔH = Math.sqrt(H2); we never actually use the root, it gets squared again!!

  // positional corrections to the lack of uniformity of CIELAB
  // These are all trying to make JND ellipsoids more like spheres

  // SL Lightness crispening factor, depends entirely on L1 not L2
  var SL = 0.511; // linear portion of the Y to L transfer function
  if (L1 >= 16) {
    // cubic portion
    SL = 0.040975 * L1 / (1 + 0.01765 * L1);
  }

  // SC Chroma factor
  var SC = 0.0638 * C1 / (1 + 0.0131 * C1) + 0.638;

  // Cross term T for blue non-linearity
  var T;
  if (Number.isNaN(H1)) {
    H1 = 0;
  }
  if (H1 >= 164 && H1 <= 345) {
    T = 0.56 + Math.abs(0.2 * Math.cos((H1 + 168) * d2r));
  } else {
    T = 0.36 + Math.abs(0.4 * Math.cos((H1 + 35) * d2r));
  }
  // console.log({T});

  // SH Hue factor also depends on C1,
  var C4 = Math.pow(C1, 4);
  var F = Math.sqrt(C4 / (C4 + 1900));
  var SH = SC * (F * T + 1 - F);

  // Finally calculate the deltaE, term by term as root sume of squares
  var dE = Math.pow(ΔL / (l * SL), 2);
  dE += Math.pow(ΔC / (c * SC), 2);
  dE += H2 / Math.pow(SH, 2);
  // dE += (ΔH / SH)  ** 2;
  return Math.sqrt(dE);
  // Yay!!!
}
var Yw$1 = 203; // absolute luminance of media white

var XYZ_Abs_D65 = new ColorSpace({
  // Absolute CIE XYZ, with a D65 whitepoint,
  // as used in most HDR colorspaces as a starting point.
  // SDR spaces are converted per BT.2048
  // so that diffuse, media white is 203 cd/m²
  id: "xyz-abs-d65",
  cssId: "--xyz-abs-d65",
  name: "Absolute XYZ D65",
  coords: {
    x: {
      refRange: [0, 9504.7],
      name: "Xa"
    },
    y: {
      refRange: [0, 10000],
      name: "Ya"
    },
    z: {
      refRange: [0, 10888.3],
      name: "Za"
    }
  },
  base: xyz_d65,
  fromBase: function fromBase(XYZ) {
    // Make XYZ absolute, not relative to media white
    // Maximum luminance in PQ is 10,000 cd/m²
    // Relative XYZ has Y=1 for media white
    return XYZ.map(function (v) {
      return Math.max(v * Yw$1, 0);
    });
  },
  toBase: function toBase(AbsXYZ) {
    // Convert to media-white relative XYZ
    return AbsXYZ.map(function (v) {
      return Math.max(v / Yw$1, 0);
    });
  }
});
var b$1 = 1.15;
var g = 0.66;
var n$1 = 2610 / Math.pow(2, 14);
var ninv$1 = Math.pow(2, 14) / 2610;
var c1$2 = 3424 / Math.pow(2, 12);
var c2$2 = 2413 / Math.pow(2, 7);
var c3$2 = 2392 / Math.pow(2, 7);
var p = 1.7 * 2523 / Math.pow(2, 5);
var pinv = Math.pow(2, 5) / (1.7 * 2523);
var d = -0.56;
var d0 = 1.6295499532821566E-11;
var XYZtoCone_M = [[0.41478972, 0.579999, 0.0146480], [-0.2015100, 1.120649, 0.0531008], [-0.0166008, 0.264800, 0.6684799]];
// XYZtoCone_M inverted
var ConetoXYZ_M = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]];
var ConetoIab_M = [[0.5, 0.5, 0], [3.524000, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]];
// ConetoIab_M inverted
var IabtoCone_M = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]];
var Jzazbz = new ColorSpace({
  id: "jzazbz",
  name: "Jzazbz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    az: {
      refRange: [-0.5, 0.5]
    },
    bz: {
      refRange: [-0.5, 0.5]
    }
  },
  base: XYZ_Abs_D65,
  fromBase: function fromBase(XYZ) {
    // First make XYZ absolute, not relative to media white
    // Maximum luminance in PQ is 10,000 cd/m²
    // Relative XYZ has Y=1 for media white
    // BT.2048 says media white Y=203 at PQ 58

    var _XYZ = _slicedToArray(XYZ, 3),
      Xa = _XYZ[0],
      Ya = _XYZ[1],
      Za = _XYZ[2];

    // modify X and Y
    var Xm = b$1 * Xa - (b$1 - 1) * Za;
    var Ym = g * Ya - (g - 1) * Xa;

    // move to LMS cone domain
    var LMS = multiplyMatrices(XYZtoCone_M, [Xm, Ym, Za]);

    // PQ-encode LMS
    var PQLMS = LMS.map(function (val) {
      var num = c1$2 + c2$2 * Math.pow(val / 10000, n$1);
      var denom = 1 + c3$2 * Math.pow(val / 10000, n$1);
      return Math.pow(num / denom, p);
    });

    // almost there, calculate Iz az bz
    var _multiplyMatrices = multiplyMatrices(ConetoIab_M, PQLMS),
      _multiplyMatrices2 = _slicedToArray(_multiplyMatrices, 3),
      Iz = _multiplyMatrices2[0],
      az = _multiplyMatrices2[1],
      bz = _multiplyMatrices2[2];
    // console.log({Iz, az, bz});

    var Jz = (1 + d) * Iz / (1 + d * Iz) - d0;
    return [Jz, az, bz];
  },
  toBase: function toBase(Jzazbz) {
    var _Jzazbz = _slicedToArray(Jzazbz, 3),
      Jz = _Jzazbz[0],
      az = _Jzazbz[1],
      bz = _Jzazbz[2];
    var Iz = (Jz + d0) / (1 + d - d * (Jz + d0));

    // bring into LMS cone domain
    var PQLMS = multiplyMatrices(IabtoCone_M, [Iz, az, bz]);

    // convert from PQ-coded to linear-light
    var LMS = PQLMS.map(function (val) {
      var num = c1$2 - Math.pow(val, pinv);
      var denom = c3$2 * Math.pow(val, pinv) - c2$2;
      var x = 10000 * Math.pow(num / denom, ninv$1);
      return x; // luminance relative to diffuse white, [0, 70 or so].
    });

    // modified abs XYZ
    var _multiplyMatrices3 = multiplyMatrices(ConetoXYZ_M, LMS),
      _multiplyMatrices4 = _slicedToArray(_multiplyMatrices3, 3),
      Xm = _multiplyMatrices4[0],
      Ym = _multiplyMatrices4[1],
      Za = _multiplyMatrices4[2];

    // restore standard D50 relative XYZ, relative to media white
    var Xa = (Xm + (b$1 - 1) * Za) / b$1;
    var Ya = (Ym + (g - 1) * Xa) / g;
    return [Xa, Ya, Za];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    "color": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
var jzczhz = new ColorSpace({
  id: "jzczhz",
  name: "JzCzHz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    cz: {
      refRange: [0, 1],
      name: "Chroma"
    },
    hz: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Jzazbz,
  fromBase: function fromBase(jzazbz) {
    // Convert to polar form
    var _jzazbz = _slicedToArray(jzazbz, 3),
      Jz = _jzazbz[0],
      az = _jzazbz[1],
      bz = _jzazbz[2];
    var hue;
    var ε = 0.0002; // chromatic components much smaller than a,b

    if (Math.abs(az) < ε && Math.abs(bz) < ε) {
      hue = NaN;
    } else {
      hue = Math.atan2(bz, az) * 180 / Math.PI;
    }
    return [Jz,
    // Jz is still Jz
    Math.sqrt(Math.pow(az, 2) + Math.pow(bz, 2)),
    // Chroma
    constrain(hue) // Hue, in degrees [0 to 360)
    ];
  },
  toBase: function toBase(jzczhz) {
    // Convert from polar form
    // debugger;
    return [jzczhz[0],
    // Jz is still Jz
    jzczhz[1] * Math.cos(jzczhz[2] * Math.PI / 180),
    // az
    jzczhz[1] * Math.sin(jzczhz[2] * Math.PI / 180) // bz
    ];
  }
});

// More accurate color-difference formulae
// than the simple 1976 Euclidean distance in Lab

// Uses JzCzHz, which has improved perceptual uniformity
// and thus a simple Euclidean root-sum of ΔL² ΔC² ΔH²
// gives good results.

function deltaEJz(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaE in JzCzHz.
  var _getColor7 = getColor([color, sample]);
  var _getColor8 = _slicedToArray(_getColor7, 2);
  color = _getColor8[0];
  sample = _getColor8[1];
  var _jzczhz$from = jzczhz.from(color),
    _jzczhz$from2 = _slicedToArray(_jzczhz$from, 3),
    Jz1 = _jzczhz$from2[0],
    Cz1 = _jzczhz$from2[1],
    Hz1 = _jzczhz$from2[2];
  var _jzczhz$from3 = jzczhz.from(sample),
    _jzczhz$from4 = _slicedToArray(_jzczhz$from3, 3),
    Jz2 = _jzczhz$from4[0],
    Cz2 = _jzczhz$from4[1],
    Hz2 = _jzczhz$from4[2];

  // Lightness and Chroma differences
  // sign does not matter as they are squared.
  var ΔJ = Jz1 - Jz2;
  var ΔC = Cz1 - Cz2;

  // length of chord for ΔH
  if (Number.isNaN(Hz1) && Number.isNaN(Hz2)) {
    // both undefined hues
    Hz1 = 0;
    Hz2 = 0;
  } else if (Number.isNaN(Hz1)) {
    // one undefined, set to the defined hue
    Hz1 = Hz2;
  } else if (Number.isNaN(Hz2)) {
    Hz2 = Hz1;
  }
  var Δh = Hz1 - Hz2;
  var ΔH = 2 * Math.sqrt(Cz1 * Cz2) * Math.sin(Δh / 2 * (Math.PI / 180));
  return Math.sqrt(Math.pow(ΔJ, 2) + Math.pow(ΔC, 2) + Math.pow(ΔH, 2));
}
var c1$1 = 3424 / 4096;
var c2$1 = 2413 / 128;
var c3$1 = 2392 / 128;
var m1$1 = 2610 / 16384;
var m2 = 2523 / 32;
var im1 = 16384 / 2610;
var im2 = 32 / 2523;

// The matrix below includes the 4% crosstalk components
// and is from the Dolby "What is ICtCp" paper"
var XYZtoLMS_M = [[0.3592832590121217, 0.6976051147779502, -0.0358915932320290], [-0.1920808463704993, 1.1004767970374321, 0.0753748658519118], [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]];
// linear-light Rec.2020 to LMS, again with crosstalk
// rational terms from Jan Fröhlich,
// Encoding High Dynamic Range andWide Color Gamut Imagery, p.97
// and ITU-R BT.2124-0 p.2
/*
const Rec2020toLMS_M = [
	[ 1688 / 4096,  2146 / 4096,   262 / 4096 ],
	[  683 / 4096,  2951 / 4096,   462 / 4096 ],
	[   99 / 4096,   309 / 4096,  3688 / 4096 ]
];
*/
// this includes the Ebner LMS coefficients,
// the rotation, and the scaling to [-0.5,0.5] range
// rational terms from Fröhlich p.97
// and ITU-R BT.2124-0 pp.2-3
var LMStoIPT_M = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]];

// inverted matrices, calculated from the above
var IPTtoLMS_M = [[0.9999999999999998, 0.0086090370379328, 0.1110296250030260], [0.9999999999999998, -0.0086090370379328, -0.1110296250030259], [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]];
/*
const LMStoRec2020_M = [
	[ 3.4375568932814012112,   -2.5072112125095058195,   0.069654319228104608382],
	[-0.79142868665644156125,   1.9838372198740089874,  -0.19240853321756742626 ],
	[-0.025646662911506476363, -0.099240248643945566751, 1.1248869115554520431  ]
];
*/
var LMStoXYZ_M = [[2.0701522183894223, -1.3263473389671563, 0.2066510476294053], [0.3647385209748072, 0.6805660249472273, -0.0453045459220347], [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]];

// Only the PQ form of ICtCp is implemented here. There is also an HLG form.
// from Dolby, "WHAT IS ICTCP?"
// https://professional.dolby.com/siteassets/pdfs/ictcp_dolbywhitepaper_v071.pdf
// and
// Dolby, "Perceptual Color Volume
// Measuring the Distinguishable Colors of HDR and WCG Displays"
// https://professional.dolby.com/siteassets/pdfs/dolby-vision-measuring-perceptual-color-volume-v7.1.pdf
var ictcp = new ColorSpace({
  id: "ictcp",
  name: "ICTCP",
  // From BT.2100-2 page 7:
  // During production, signal values are expected to exceed the
  // range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
  // signal degradation during cascaded processing. Such values of E′,
  // below 0.0 or exceeding 1.0, should not be clipped during production
  // and exchange.
  // Values below 0.0 should not be clipped in reference displays (even
  // though they represent “negative” light) to allow the black level of
  // the signal (LB) to be properly set using test signals known as “PLUGE”
  coords: {
    i: {
      refRange: [0, 1],
      // Constant luminance,
      name: "I"
    },
    ct: {
      refRange: [-0.5, 0.5],
      // Full BT.2020 gamut in range [-0.5, 0.5]
      name: "CT"
    },
    cp: {
      refRange: [-0.5, 0.5],
      name: "CP"
    }
  },
  base: XYZ_Abs_D65,
  fromBase: function fromBase(XYZ) {
    // move to LMS cone domain
    var LMS = multiplyMatrices(XYZtoLMS_M, XYZ);
    return LMStoICtCp(LMS);
  },
  toBase: function toBase(ICtCp) {
    var LMS = ICtCptoLMS(ICtCp);
    return multiplyMatrices(LMStoXYZ_M, LMS);
  }
});
function LMStoICtCp(LMS) {
  // apply the PQ EOTF
  // we can't ever be dividing by zero because of the "1 +" in the denominator
  var PQLMS = LMS.map(function (val) {
    var num = c1$1 + c2$1 * Math.pow(val / 10000, m1$1);
    var denom = 1 + c3$1 * Math.pow(val / 10000, m1$1);
    return Math.pow(num / denom, m2);
  });

  // LMS to IPT, with rotation for Y'C'bC'r compatibility
  return multiplyMatrices(LMStoIPT_M, PQLMS);
}
function ICtCptoLMS(ICtCp) {
  var PQLMS = multiplyMatrices(IPTtoLMS_M, ICtCp);

  // From BT.2124-0 Annex 2 Conversion 3
  var LMS = PQLMS.map(function (val) {
    var num = Math.max(Math.pow(val, im2) - c1$1, 0);
    var denom = c2$1 - c3$1 * Math.pow(val, im2);
    return 10000 * Math.pow(num / denom, im1);
  });
  return LMS;
}

// Delta E in ICtCp space,
// which the ITU calls Delta E ITP, which is shorter
// formulae from ITU Rec. ITU-R BT.2124-0

function deltaEITP(color, sample) {
  // Given this color as the reference
  // and a sample,
  // calculate deltaE in ICtCp
  // which is simply the Euclidean distance
  var _getColor9 = getColor([color, sample]);
  var _getColor0 = _slicedToArray(_getColor9, 2);
  color = _getColor0[0];
  sample = _getColor0[1];
  var _ictcp$from = ictcp.from(color),
    _ictcp$from2 = _slicedToArray(_ictcp$from, 3),
    I1 = _ictcp$from2[0],
    T1 = _ictcp$from2[1],
    P1 = _ictcp$from2[2];
  var _ictcp$from3 = ictcp.from(sample),
    _ictcp$from4 = _slicedToArray(_ictcp$from3, 3),
    I2 = _ictcp$from4[0],
    T2 = _ictcp$from4[1],
    P2 = _ictcp$from4[2];

  // the 0.25 factor is to undo the encoding scaling in Ct
  // the 720 is so that 1 deltaE = 1 JND
  // per  ITU-R BT.2124-0 p.3

  return 720 * Math.sqrt(Math.pow(I1 - I2, 2) + 0.25 * Math.pow(T1 - T2, 2) + Math.pow(P1 - P2, 2));
}
var white$3 = WHITES.D65;
var adaptedCoef = 0.42;
var adaptedCoefInv = 1 / adaptedCoef;
var tau = 2 * Math.PI;
var cat16 = [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-0.002079, 0.048952, 0.953127]];
var cat16Inv = [[1.8620678550872327, -1.0112546305316843, 0.14918677544445175], [0.38752654323613717, 0.6214474419314753, -0.008973985167612518], [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]];
var m1 = [[460.0, 451.0, 288.0], [460.0, -891.0, -261.0], [460.0, -220.0, -6300.0]];
var surroundMap = {
  dark: [0.8, 0.525, 0.8],
  dim: [0.9, 0.59, 0.9],
  average: [1, 0.69, 1]
};
var hueQuadMap = {
  // Red, Yellow, Green, Blue, Red
  h: [20.14, 90.00, 164.25, 237.53, 380.14],
  e: [0.8, 0.7, 1.0, 1.2, 0.8],
  H: [0.0, 100.0, 200.0, 300.0, 400.0]
};
var rad2deg = 180 / Math.PI;
var deg2rad$1 = Math.PI / 180;
function adapt$1(coords, fl) {
  var temp = coords.map(function (c) {
    var x = spow(fl * Math.abs(c) * 0.01, adaptedCoef);
    return 400 * copySign(x, c) / (x + 27.13);
  });
  return temp;
}
function unadapt(adapted, fl) {
  var constant = 100 / fl * Math.pow(27.13, adaptedCoefInv);
  return adapted.map(function (c) {
    var cabs = Math.abs(c);
    return copySign(constant * spow(cabs / (400 - cabs), adaptedCoefInv), c);
  });
}
function hueQuadrature(h) {
  var hp = constrain(h);
  if (hp <= hueQuadMap.h[0]) {
    hp += 360;
  }
  var i = bisectLeft(hueQuadMap.h, hp) - 1;
  var _hueQuadMap$h$slice = hueQuadMap.h.slice(i, i + 2),
    _hueQuadMap$h$slice2 = _slicedToArray(_hueQuadMap$h$slice, 2),
    hi = _hueQuadMap$h$slice2[0],
    hii = _hueQuadMap$h$slice2[1];
  var _hueQuadMap$e$slice = hueQuadMap.e.slice(i, i + 2),
    _hueQuadMap$e$slice2 = _slicedToArray(_hueQuadMap$e$slice, 2),
    ei = _hueQuadMap$e$slice2[0],
    eii = _hueQuadMap$e$slice2[1];
  var Hi = hueQuadMap.H[i];
  var t = (hp - hi) / ei;
  return Hi + 100 * t / (t + (hii - hp) / eii);
}
function invHueQuadrature(H) {
  var Hp = (H % 400 + 400) % 400;
  var i = Math.floor(0.01 * Hp);
  Hp = Hp % 100;
  var _hueQuadMap$h$slice3 = hueQuadMap.h.slice(i, i + 2),
    _hueQuadMap$h$slice4 = _slicedToArray(_hueQuadMap$h$slice3, 2),
    hi = _hueQuadMap$h$slice4[0],
    hii = _hueQuadMap$h$slice4[1];
  var _hueQuadMap$e$slice3 = hueQuadMap.e.slice(i, i + 2),
    _hueQuadMap$e$slice4 = _slicedToArray(_hueQuadMap$e$slice3, 2),
    ei = _hueQuadMap$e$slice4[0],
    eii = _hueQuadMap$e$slice4[1];
  return constrain((Hp * (eii * hi - ei * hii) - 100 * hi * eii) / (Hp * (eii - ei) - 100 * eii));
}
function environment(refWhite, adaptingLuminance, backgroundLuminance, surround, discounting) {
  var env = {};
  env.discounting = discounting;
  env.refWhite = refWhite;
  env.surround = surround;
  var xyzW = refWhite.map(function (c) {
    return c * 100;
  });

  // The average luminance of the environment in `cd/m^2cd/m` (a.k.a. nits)
  env.la = adaptingLuminance;
  // The relative luminance of the nearby background
  env.yb = backgroundLuminance;
  // Absolute luminance of the reference white.
  var yw = xyzW[1];

  // Cone response for reference white
  var rgbW = multiplyMatrices(cat16, xyzW);

  // Surround: dark, dim, and average
  surround = surroundMap[env.surround];
  var f = surround[0];
  env.c = surround[1];
  env.nc = surround[2];
  var k = 1 / (5 * env.la + 1);
  var k4 = Math.pow(k, 4);

  // Factor of luminance level adaptation
  env.fl = k4 * env.la + 0.1 * (1 - k4) * (1 - k4) * Math.cbrt(5 * env.la);
  env.flRoot = Math.pow(env.fl, 0.25);
  env.n = env.yb / yw;
  env.z = 1.48 + Math.sqrt(env.n);
  env.nbb = 0.725 * Math.pow(env.n, -0.2);
  env.ncb = env.nbb;

  // Degree of adaptation calculating if not discounting
  // illuminant (assumed eye is fully adapted)
  var d = discounting ? 1 : Math.max(Math.min(f * (1 - 1 / 3.6 * Math.exp((-env.la - 42) / 92)), 1), 0);
  env.dRgb = rgbW.map(function (c) {
    return interpolate(1, yw / c, d);
  });
  env.dRgbInv = env.dRgb.map(function (c) {
    return 1 / c;
  });

  // Achromatic response
  var rgbCW = rgbW.map(function (c, i) {
    return c * env.dRgb[i];
  });
  var rgbAW = adapt$1(rgbCW, env.fl);
  env.aW = env.nbb * (2 * rgbAW[0] + rgbAW[1] + 0.05 * rgbAW[2]);

  // console.log(env);

  return env;
}

// Pre-calculate everything we can with the viewing conditions
var viewingConditions$1 = environment(white$3, 64 / Math.PI * 0.2, 20, "average", false);
function fromCam16(cam16, env) {
  // These check ensure one, and only one attribute for a
  // given category is provided.
  if (!(cam16.J !== undefined ^ cam16.Q !== undefined)) {
    throw new Error("Conversion requires one and only one: 'J' or 'Q'");
  }
  if (!(cam16.C !== undefined ^ cam16.M !== undefined ^ cam16.s !== undefined)) {
    throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
  }

  // Hue is absolutely required
  if (!(cam16.h !== undefined ^ cam16.H !== undefined)) {
    throw new Error("Conversion requires one and only one: 'h' or 'H'");
  }

  // Black
  if (cam16.J === 0.0 || cam16.Q === 0.0) {
    return [0.0, 0.0, 0.0];
  }

  // Break hue into Cartesian components
  var hRad = 0.0;
  if (cam16.h !== undefined) {
    hRad = constrain(cam16.h) * deg2rad$1;
  } else {
    hRad = invHueQuadrature(cam16.H) * deg2rad$1;
  }
  var cosh = Math.cos(hRad);
  var sinh = Math.sin(hRad);

  // Calculate `Jroot` from one of the lightness derived coordinates.
  var Jroot = 0.0;
  if (cam16.J !== undefined) {
    Jroot = spow(cam16.J, 1 / 2) * 0.1;
  } else if (cam16.Q !== undefined) {
    Jroot = 0.25 * env.c * cam16.Q / ((env.aW + 4) * env.flRoot);
  }

  // Calculate the `t` value from one of the chroma derived coordinates
  var alpha = 0.0;
  if (cam16.C !== undefined) {
    alpha = cam16.C / Jroot;
  } else if (cam16.M !== undefined) {
    alpha = cam16.M / env.flRoot / Jroot;
  } else if (cam16.s !== undefined) {
    alpha = 0.0004 * Math.pow(cam16.s, 2) * (env.aW + 4) / env.c;
  }
  var t = spow(alpha * Math.pow(1.64 - Math.pow(0.29, env.n), -0.73), 10 / 9);

  // Eccentricity
  var et = 0.25 * (Math.cos(hRad + 2) + 3.8);

  // Achromatic response
  var A = env.aW * spow(Jroot, 2 / env.c / env.z);

  // Calculate red-green and yellow-blue components
  var p1 = 5e4 / 13 * env.nc * env.ncb * et;
  var p2 = A / env.nbb;
  var r = 23 * (p2 + 0.305) * zdiv(t, 23 * p1 + t * (11 * cosh + 108 * sinh));
  var a = r * cosh;
  var b = r * sinh;

  // Calculate back from cone response to XYZ
  var rgb_c = unadapt(multiplyMatrices(m1, [p2, a, b]).map(function (c) {
    return c * 1 / 1403;
  }), env.fl);
  return multiplyMatrices(cat16Inv, rgb_c.map(function (c, i) {
    return c * env.dRgbInv[i];
  })).map(function (c) {
    return c / 100;
  });
}
function toCam16(xyzd65, env) {
  // Cone response
  var xyz100 = xyzd65.map(function (c) {
    return c * 100;
  });
  var rgbA = adapt$1(multiplyMatrices(cat16, xyz100).map(function (c, i) {
    return c * env.dRgb[i];
  }), env.fl);

  // Calculate hue from red-green and yellow-blue components
  var a = rgbA[0] + (-12 * rgbA[1] + rgbA[2]) / 11;
  var b = (rgbA[0] + rgbA[1] - 2 * rgbA[2]) / 9;
  var hRad = (Math.atan2(b, a) % tau + tau) % tau;

  // Eccentricity
  var et = 0.25 * (Math.cos(hRad + 2) + 3.8);
  var t = 5e4 / 13 * env.nc * env.ncb * zdiv(et * Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)), rgbA[0] + rgbA[1] + 1.05 * rgbA[2] + 0.305);
  var alpha = spow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, env.n), 0.73);

  // Achromatic response
  var A = env.nbb * (2 * rgbA[0] + rgbA[1] + 0.05 * rgbA[2]);
  var Jroot = spow(A / env.aW, 0.5 * env.c * env.z);

  // Lightness
  var J = 100 * spow(Jroot, 2);

  // Brightness
  var Q = 4 / env.c * Jroot * (env.aW + 4) * env.flRoot;

  // Chroma
  var C = alpha * Jroot;

  // Colorfulness
  var M = C * env.flRoot;

  // Hue
  var h = constrain(hRad * rad2deg);

  // Hue quadrature
  var H = hueQuadrature(h);

  // Saturation
  var s = 50 * spow(env.c * alpha / (env.aW + 4), 1 / 2);

  // console.log({J: J, C: C, h: h, s: s, Q: Q, M: M, H: H});

  return {
    J: J,
    C: C,
    h: h,
    s: s,
    Q: Q,
    M: M,
    H: H
  };
}

// Provided as a way to directly evaluate the CAM16 model
// https://observablehq.com/@jrus/cam16: reference implementation
// https://arxiv.org/pdf/1802.06067.pdf: Nico Schlömer
// https://onlinelibrary.wiley.com/doi/pdf/10.1002/col.22324: hue quadrature
// https://www.researchgate.net/publication/318152296_Comprehensive_color_solutions_CAM16_CAT16_and_CAM16-UCS
// Results compared against: https://github.com/colour-science/colour
var cam16 = new ColorSpace({
  id: "cam16-jmh",
  cssId: "--cam16-jmh",
  name: "CAM16-JMh",
  coords: {
    j: {
      refRange: [0, 100],
      name: "J"
    },
    m: {
      refRange: [0, 105.0],
      name: "Colorfulness"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: xyz_d65,
  fromBase: function fromBase(xyz) {
    var cam16 = toCam16(xyz, viewingConditions$1);
    return [cam16.J, cam16.M, cam16.h];
  },
  toBase: function toBase(cam16) {
    return fromCam16({
      J: cam16[0],
      M: cam16[1],
      h: cam16[2]
    }, viewingConditions$1);
  }
});
var white$2 = WHITES.D65;
var ε$4 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var κ$3 = 24389 / 27; // 29^3/3^3

function toLstar(y) {
  // Convert XYZ Y to L*

  var fy = y > ε$4 ? Math.cbrt(y) : (κ$3 * y + 16) / 116;
  return 116.0 * fy - 16.0;
}
function fromLstar(lstar) {
  // Convert L* back to XYZ Y

  return lstar > 8 ? Math.pow((lstar + 16) / 116, 3) : lstar / κ$3;
}
function fromHct(coords, env) {
  // Use Newton's method to try and converge as quick as possible or
  // converge as close as we can. While the requested precision is achieved
  // most of the time, it may not always be achievable. Especially past the
  // visible spectrum, the algorithm will likely struggle to get the same
  // precision. If, for whatever reason, we cannot achieve the accuracy we
  // seek in the allotted iterations, just return the closest we were able to
  // get.

  var _coords2 = _slicedToArray(coords, 3),
    h = _coords2[0],
    c = _coords2[1],
    t = _coords2[2];
  var xyz = [];
  var j = 0;

  // Shortcut out for black
  if (t === 0) {
    return [0.0, 0.0, 0.0];
  }

  // Calculate the Y we need to target
  var y = fromLstar(t);

  // A better initial guess yields better results. Polynomials come from
  // curve fitting the T vs J response.
  if (t > 0) {
    j = 0.00379058511492914 * Math.pow(t, 2) + 0.608983189401032 * t + 0.9155088574762233;
  } else {
    j = 9.514440756550361e-06 * Math.pow(t, 2) + 0.08693057439788597 * t - 21.928975842194614;
  }

  // Threshold of how close is close enough, and max number of attempts.
  // More precision and more attempts means more time spent iterating. Higher
  // required precision gives more accuracy but also increases the chance of
  // not hitting the goal. 2e-12 allows us to convert round trip with
  // reasonable accuracy of six decimal places or more.
  var threshold = 2e-12;
  var max_attempts = 15;
  var attempt = 0;
  var last = Infinity;

  // Try to find a J such that the returned y matches the returned y of the L*
  while (attempt <= max_attempts) {
    xyz = fromCam16({
      J: j,
      C: c,
      h: h
    }, env);

    // If we are within range, return XYZ
    // If we are closer than last time, save the values
    var delta = Math.abs(xyz[1] - y);
    if (delta < last) {
      if (delta <= threshold) {
        return xyz;
      }
      last = delta;
    }

    // f(j_root) = (j ** (1 / 2)) * 0.1
    // f(j) = ((f(j_root) * 100) ** 2) / j - 1 = 0
    // f(j_root) = Y = y / 100
    // f(j) = (y ** 2) / j - 1
    // f'(j) = (2 * y) / j
    j = j - (xyz[1] - y) * j / (2 * xyz[1]);
    attempt += 1;
  }

  // We could not acquire the precision we desired,
  // return our closest attempt.
  return fromCam16({
    J: j,
    C: c,
    h: h
  }, env);
}
function toHct(xyz, env) {
  // Calculate HCT by taking the L* of CIE LCh D65 and CAM16 chroma and hue.

  var t = toLstar(xyz[1]);
  if (t === 0.0) {
    return [0.0, 0.0, 0.0];
  }
  var cam16 = toCam16(xyz, viewingConditions);
  return [constrain(cam16.h), cam16.C, t];
}

// Pre-calculate everything we can with the viewing conditions
var viewingConditions = environment(white$2, 200 / Math.PI * fromLstar(50.0), fromLstar(50.0) * 100, "average", false);

// https://material.io/blog/science-of-color-design
// This is not a port of the material-color-utilities,
// but instead implements the full color space as described,
// combining CAM16 JCh and Lab D65. This does not clamp conversion
// to HCT to specific chroma bands and provides support for wider
// gamuts than Google currently supports and does so at a greater
// precision (> 8 bits back to sRGB).
// This implementation comes from https://github.com/facelessuser/coloraide
// which is licensed under MIT.
var hct = new ColorSpace({
  id: "hct",
  name: "HCT",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    c: {
      refRange: [0, 145],
      name: "Colorfulness"
    },
    t: {
      refRange: [0, 100],
      name: "Tone"
    }
  },
  base: xyz_d65,
  fromBase: function fromBase(xyz) {
    return toHct(xyz);
  },
  toBase: function toBase(hct) {
    return fromHct(hct, viewingConditions);
  },
  formats: {
    color: {
      id: "--hct",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
var deg2rad = Math.PI / 180;
var ucsCoeff = [1.00, 0.007, 0.0228];

/**
* Convert HCT chroma and hue (CAM16 JMh colorfulness and hue) using UCS logic for a and b.
* @param {number[]} coords - HCT coordinates.
* @return {number[]}
*/
function convertUcsAb(coords) {
  // We want the distance between the actual color.
  // If chroma is negative, it will throw off our calculations.
  // Normally, converting back to the base and forward will correct it.
  // If we have a negative chroma after this, then we have a color that
  // cannot resolve to positive chroma.
  if (coords[1] < 0) {
    coords = hct.fromBase(hct.toBase(coords));
  }

  // Only in extreme cases (usually outside the visible spectrum)
  // can the input value for log become negative.
  // Avoid domain error by forcing a zero result via "max" if necessary.
  var M = Math.log(Math.max(1 + ucsCoeff[2] * coords[1] * viewingConditions.flRoot, 1.0)) / ucsCoeff[2];
  var hrad = coords[0] * deg2rad;
  var a = M * Math.cos(hrad);
  var b = M * Math.sin(hrad);
  return [coords[2], a, b];
}

/**
* Color distance using HCT.
* @param {Color} color - Color to compare.
* @param {Color} sample - Color to compare.
* @return {number[]}
*/
function deltaEHCT(color, sample) {
  var _getColor1 = getColor([color, sample]);
  var _getColor10 = _slicedToArray(_getColor1, 2);
  color = _getColor10[0];
  sample = _getColor10[1];
  var _convertUcsAb = convertUcsAb(hct.from(color)),
    _convertUcsAb2 = _slicedToArray(_convertUcsAb, 3),
    t1 = _convertUcsAb2[0],
    a1 = _convertUcsAb2[1],
    b1 = _convertUcsAb2[2];
  var _convertUcsAb3 = convertUcsAb(hct.from(sample)),
    _convertUcsAb4 = _slicedToArray(_convertUcsAb3, 3),
    t2 = _convertUcsAb4[0],
    a2 = _convertUcsAb4[1],
    b2 = _convertUcsAb4[2];

  // Use simple euclidean distance with a and b using UCS conversion
  // and LCh lightness (HCT tone).
  return Math.sqrt(Math.pow(t1 - t2, 2) + Math.pow(a1 - a2, 2) + Math.pow(b1 - b2, 2));
}
var deltaEMethods = {
  deltaE76: deltaE76,
  deltaECMC: deltaECMC,
  deltaE2000: deltaE2000,
  deltaEJz: deltaEJz,
  deltaEITP: deltaEITP,
  deltaEOK: deltaEOK,
  deltaEHCT: deltaEHCT
};

/**
 * Calculate the epsilon to 2 degrees smaller than the specified JND.
 * @param {Number} jnd - The target "just noticeable difference".
 * @returns {Number}
 */
function calcEpsilon(jnd) {
  // Calculate the epsilon to 2 degrees smaller than the specified JND.

  var order = !jnd ? 0 : Math.floor(Math.log10(Math.abs(jnd)));
  // Limit to an arbitrary value to ensure value is never too small and causes infinite loops.
  return Math.max(parseFloat("1e".concat(order - 2)), 1e-6);
}
var GMAPPRESET = {
  "hct": {
    method: "hct.c",
    jnd: 2,
    deltaEMethod: "hct",
    blackWhiteClamp: {}
  },
  "hct-tonal": {
    method: "hct.c",
    jnd: 0,
    deltaEMethod: "hct",
    blackWhiteClamp: {
      channel: "hct.t",
      min: 0,
      max: 100
    }
  }
};

/**
 * Force coordinates to be in gamut of a certain color space.
 * Mutates the color it is passed.
 * @param {Object|string} options object or spaceId string
 * @param {string} options.method - How to force into gamut.
 *        If "clip", coordinates are just clipped to their reference range.
 *        If "css", coordinates are reduced according to the CSS 4 Gamut Mapping Algorithm.
 *        If in the form [colorSpaceId].[coordName], that coordinate is reduced
 *        until the color is in gamut. Please note that this may produce nonsensical
 *        results for certain coordinates (e.g. hue) or infinite loops if reducing the coordinate never brings the color in gamut.
 * @param {ColorSpace|string} options.space - The space whose gamut we want to map to
 * @param {string} options.deltaEMethod - The delta E method to use while performing gamut mapping.
 *        If no method is specified, delta E 2000 is used.
 * @param {Number} options.jnd - The "just noticeable difference" to target.
 * @param {Object} options.blackWhiteClamp - Used to configure SDR black and clamping.
 *        "channel" indicates the "space.channel" to use for determining when to clamp.
 *        "min" indicates the lower limit for black clamping and "max" indicates the upper
 *        limit for white clamping.
 */

function toGamut(color) {
  var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref12$method = _ref12.method,
    method = _ref12$method === void 0 ? defaults.gamut_mapping : _ref12$method,
    _ref12$space = _ref12.space,
    space = _ref12$space === void 0 ? undefined : _ref12$space,
    _ref12$deltaEMethod = _ref12.deltaEMethod,
    deltaEMethod = _ref12$deltaEMethod === void 0 ? "" : _ref12$deltaEMethod,
    _ref12$jnd = _ref12.jnd,
    jnd = _ref12$jnd === void 0 ? 2 : _ref12$jnd,
    _ref12$blackWhiteClam = _ref12.blackWhiteClamp,
    blackWhiteClamp = _ref12$blackWhiteClam === void 0 ? {} : _ref12$blackWhiteClam;
  color = getColor(color);
  if (isString(arguments[1])) {
    space = arguments[1];
  } else if (!space) {
    space = color.space;
  }
  space = ColorSpace.get(space);

  // 3 spaces:
  // color.space: current color space
  // space: space whose gamut we are mapping to
  // mapSpace: space with the coord we're reducing

  if (inGamut(color, space, {
    epsilon: 0
  })) {
    return color;
  }
  var spaceColor;
  if (method === "css") {
    spaceColor = toGamutCSS(color, {
      space: space
    });
  } else {
    if (method !== "clip" && !inGamut(color, space)) {
      if (Object.prototype.hasOwnProperty.call(GMAPPRESET, method)) {
        var _GMAPPRESET$method = GMAPPRESET[method];
        method = _GMAPPRESET$method.method;
        jnd = _GMAPPRESET$method.jnd;
        deltaEMethod = _GMAPPRESET$method.deltaEMethod;
        blackWhiteClamp = _GMAPPRESET$method.blackWhiteClamp;
      }

      // Get the correct delta E method
      var de = deltaE2000;
      if (deltaEMethod !== "") {
        for (var _m in deltaEMethods) {
          if ("deltae" + deltaEMethod.toLowerCase() === _m.toLowerCase()) {
            de = deltaEMethods[_m];
            break;
          }
        }
      }
      var clipped = toGamut(to(color, space), {
        method: "clip",
        space: space
      });
      if (de(color, clipped) > jnd) {
        // Clamp to SDR white and black if required
        if (Object.keys(blackWhiteClamp).length === 3) {
          var channelMeta = ColorSpace.resolveCoord(blackWhiteClamp.channel);
          var channel = get(to(color, channelMeta.space), channelMeta.id);
          if (isNone(channel)) {
            channel = 0;
          }
          if (channel >= blackWhiteClamp.max) {
            return to({
              space: "xyz-d65",
              coords: WHITES["D65"]
            }, color.space);
          } else if (channel <= blackWhiteClamp.min) {
            return to({
              space: "xyz-d65",
              coords: [0, 0, 0]
            }, color.space);
          }
        }

        // Reduce a coordinate of a certain color space until the color is in gamut
        var coordMeta = ColorSpace.resolveCoord(method);
        var mapSpace = coordMeta.space;
        var coordId = coordMeta.id;
        var mappedColor = to(color, mapSpace);
        // If we were already in the mapped color space, we need to resolve undefined channels
        mappedColor.coords.forEach(function (c, i) {
          if (isNone(c)) {
            mappedColor.coords[i] = 0;
          }
        });
        var bounds = coordMeta.range || coordMeta.refRange;
        var min = bounds[0];
        var _ε = calcEpsilon(jnd);
        var low = min;
        var high = get(mappedColor, coordId);
        while (high - low > _ε) {
          var _clipped = clone(mappedColor);
          _clipped = toGamut(_clipped, {
            space: space,
            method: "clip"
          });
          var _deltaE = de(mappedColor, _clipped);
          if (_deltaE - jnd < _ε) {
            low = get(mappedColor, coordId);
          } else {
            high = get(mappedColor, coordId);
          }
          set(mappedColor, coordId, (low + high) / 2);
        }
        spaceColor = to(mappedColor, space);
      } else {
        spaceColor = clipped;
      }
    } else {
      spaceColor = to(color, space);
    }
    if (method === "clip" // Dumb coord clipping
    // finish off smarter gamut mapping with clip to get rid of ε, see #17
    || !inGamut(spaceColor, space, {
      epsilon: 0
    })) {
      var _bounds = Object.values(space.coords).map(function (c) {
        return c.range || [];
      });
      spaceColor.coords = spaceColor.coords.map(function (c, i) {
        var _bounds$i = _slicedToArray(_bounds[i], 2),
          min = _bounds$i[0],
          max = _bounds$i[1];
        if (min !== undefined) {
          c = Math.max(min, c);
        }
        if (max !== undefined) {
          c = Math.min(c, max);
        }
        return c;
      });
    }
  }
  if (space !== color.space) {
    spaceColor = to(spaceColor, color.space);
  }
  color.coords = spaceColor.coords;
  return color;
}
toGamut.returns = "color";

// The reference colors to be used if lightness is out of the range 0-1 in the
// `Oklch` space. These are created in the `Oklab` space, as it is used by the
// DeltaEOK calculation, so it is guaranteed to be imported.
var COLORS = {
  WHITE: {
    space: OKLab,
    coords: [1, 0, 0]
  },
  BLACK: {
    space: OKLab,
    coords: [0, 0, 0]
  }
};

/**
 * Given a color `origin`, returns a new color that is in gamut using
 * the CSS Gamut Mapping Algorithm. If `space` is specified, it will be in gamut
 * in `space`, and returned in `space`. Otherwise, it will be in gamut and
 * returned in the color space of `origin`.
 * @param {Object} origin
 * @param {Object} options
 * @param {ColorSpace|string} options.space
 * @returns {Color}
 */
function toGamutCSS(origin) {
  var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    space = _ref13.space;
  var JND = 0.02;
  var ε = 0.0001;
  origin = getColor(origin);
  if (!space) {
    space = origin.space;
  }
  space = ColorSpace.get(space);
  var oklchSpace = ColorSpace.get("oklch");
  if (space.isUnbounded) {
    return to(origin, space);
  }
  var origin_OKLCH = to(origin, oklchSpace);
  var L = origin_OKLCH.coords[0];

  // return media white or black, if lightness is out of range
  if (L >= 1) {
    var _white = to(COLORS.WHITE, space);
    _white.alpha = origin.alpha;
    return to(_white, space);
  }
  if (L <= 0) {
    var black = to(COLORS.BLACK, space);
    black.alpha = origin.alpha;
    return to(black, space);
  }
  if (inGamut(origin_OKLCH, space, {
    epsilon: 0
  })) {
    return to(origin_OKLCH, space);
  }
  function clip(_color) {
    var destColor = to(_color, space);
    var spaceCoords = Object.values(space.coords);
    destColor.coords = destColor.coords.map(function (coord, index) {
      if ("range" in spaceCoords[index]) {
        var _spaceCoords$index$ra = _slicedToArray(spaceCoords[index].range, 2),
          _min = _spaceCoords$index$ra[0],
          _max2 = _spaceCoords$index$ra[1];
        return clamp(_min, coord, _max2);
      }
      return coord;
    });
    return destColor;
  }
  var min = 0;
  var max = origin_OKLCH.coords[1];
  var min_inGamut = true;
  var current = clone(origin_OKLCH);
  var clipped = clip(current);
  var E = deltaEOK(clipped, current);
  if (E < JND) {
    return clipped;
  }
  while (max - min > ε) {
    var chroma = (min + max) / 2;
    current.coords[1] = chroma;
    if (min_inGamut && inGamut(current, space, {
      epsilon: 0
    })) {
      min = chroma;
    } else {
      clipped = clip(current);
      E = deltaEOK(clipped, current);
      if (E < JND) {
        if (JND - E < ε) {
          break;
        } else {
          min_inGamut = false;
          min = chroma;
        }
      } else {
        max = chroma;
      }
    }
  }
  return clipped;
}

/**
 * Convert to color space and return a new color
 * @param {Object|string} space - Color space object or id
 * @param {Object} options
 * @param {boolean} options.inGamut - Whether to force resulting color in gamut
 * @returns {Color}
 */
function to(color, space) {
  var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    inGamut = _ref14.inGamut;
  color = getColor(color);
  space = ColorSpace.get(space);
  var coords = space.from(color);
  var ret = {
    space: space,
    coords: coords,
    alpha: color.alpha
  };
  if (inGamut) {
    ret = toGamut(ret, inGamut === true ? undefined : inGamut);
  }
  return ret;
}
to.returns = "color";
var es_array_unshift = {};
var deletePropertyOrThrow;
var hasRequiredDeletePropertyOrThrow;
function requireDeletePropertyOrThrow() {
  if (hasRequiredDeletePropertyOrThrow) return deletePropertyOrThrow;
  hasRequiredDeletePropertyOrThrow = 1;
  var tryToString = requireTryToString();
  var $TypeError = TypeError;
  deletePropertyOrThrow = function deletePropertyOrThrow(O, P) {
    if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };
  return deletePropertyOrThrow;
}
var hasRequiredEs_array_unshift;
function requireEs_array_unshift() {
  if (hasRequiredEs_array_unshift) return es_array_unshift;
  hasRequiredEs_array_unshift = 1;
  var $ = require_export();
  var toObject = requireToObject();
  var lengthOfArrayLike = requireLengthOfArrayLike();
  var setArrayLength = requireArraySetLength();
  var deletePropertyOrThrow = requireDeletePropertyOrThrow();
  var doesNotExceedSafeInteger = requireDoesNotExceedSafeInteger();

  // IE8-
  var INCORRECT_RESULT = [].unshift(0) !== 1;

  // V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
  var properErrorOnNonWritableLength = function properErrorOnNonWritableLength() {
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).unshift();
    } catch (error) {
      return error instanceof TypeError;
    }
  };
  var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();

  // `Array.prototype.unshift` method
  // https://tc39.es/ecma262/#sec-array.prototype.unshift
  $({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    unshift: function unshift(item) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      var argCount = arguments.length;
      if (argCount) {
        doesNotExceedSafeInteger(len + argCount);
        var k = len;
        while (k--) {
          var to = k + argCount;
          if (k in O) O[to] = O[k];else deletePropertyOrThrow(O, to);
        }
        for (var j = 0; j < argCount; j++) {
          O[j] = arguments[j];
        }
      }
      return setArrayLength(O, len + argCount);
    }
  });
  return es_array_unshift;
}
requireEs_array_unshift();

/**
 * Generic toString() method, outputs a color(spaceId ...coords) function, a functional syntax, or custom formats defined by the color space
 * @param {Object} options
 * @param {number} options.precision - Significant digits
 * @param {boolean} options.inGamut - Adjust coordinates to fit in gamut first? [default: false]
 */
function serialize(color) {
  var _ref, _color$space$getForma;
  var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref15$precision = _ref15.precision,
    precision = _ref15$precision === void 0 ? defaults.precision : _ref15$precision,
    _ref15$format = _ref15.format,
    format = _ref15$format === void 0 ? "default" : _ref15$format,
    _ref15$inGamut = _ref15.inGamut,
    inGamut$1 = _ref15$inGamut === void 0 ? true : _ref15$inGamut,
    customOptions = _objectWithoutProperties(_ref15, _excluded);
  var ret;
  color = getColor(color);
  var formatId = format;
  format = (_ref = (_color$space$getForma = color.space.getFormat(format)) !== null && _color$space$getForma !== void 0 ? _color$space$getForma : color.space.getFormat("default")) !== null && _ref !== void 0 ? _ref : ColorSpace.DEFAULT_FORMAT;

  // The assignment to coords and inGamut needs to stay in the order they are now
  // The order of the assignment was changed as a workaround for a bug in Next.js
  // See this issue for details: https://github.com/color-js/color.js/issues/260

  var coords = color.coords.slice(); // clone so we can manipulate it

  inGamut$1 || (inGamut$1 = format.toGamut);
  if (inGamut$1 && !inGamut(color)) {
    // FIXME what happens if the color contains NaNs?
    coords = toGamut(clone(color), inGamut$1 === true ? undefined : inGamut$1).coords;
  }
  if (format.type === "custom") {
    customOptions.precision = precision;
    if (format.serialize) {
      ret = format.serialize(coords, color.alpha, customOptions);
    } else {
      throw new TypeError("format ".concat(formatId, " can only be used to parse colors, not for serialization"));
    }
  } else {
    // Functional syntax
    var name = format.name || "color";
    if (format.serializeCoords) {
      coords = format.serializeCoords(coords, precision);
    } else {
      if (precision !== null) {
        coords = coords.map(function (c) {
          return serializeNumber(c, {
            precision: precision
          });
        });
      }
    }
    var args = _toConsumableArray(coords);
    if (name === "color") {
      var _format$ids;
      // If output is a color() function, add colorspace id as first argument
      var cssId = format.id || ((_format$ids = format.ids) === null || _format$ids === void 0 ? void 0 : _format$ids[0]) || color.space.id;
      args.unshift(cssId);
    }
    var alpha = color.alpha;
    if (precision !== null) {
      alpha = serializeNumber(alpha, {
        precision: precision
      });
    }
    var strAlpha = color.alpha >= 1 || format.noAlpha ? "" : "".concat(format.commas ? "," : " /", " ").concat(alpha);
    ret = "".concat(name, "(").concat(args.join(format.commas ? ", " : " ")).concat(strAlpha, ")");
  }
  return ret;
}

// convert an array of linear-light rec2020 values to CIE XYZ
// using  D65 (no chromatic adaptation)
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// 0 is actually calculated as  4.994106574466076e-17
var toXYZ_M$5 = [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0.000000000000000, 0.028072693049087428, 1.060985057710791]];

// from ITU-R BT.2124-0 Annex 2 p.3
var fromXYZ_M$5 = [[1.716651187971268, -0.355670783776392, -0.253366281373660], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]];
var REC2020Linear = new RGBColorSpace({
  id: "rec2020-linear",
  cssId: "--rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: toXYZ_M$5,
  fromXYZ_M: fromXYZ_M$5
});

// import sRGB from "./srgb.js";

var α = 1.09929682680944;
var β = 0.018053968510807;
var REC2020 = new RGBColorSpace({
  id: "rec2020",
  name: "REC.2020",
  base: REC2020Linear,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase: function toBase(RGB) {
    return RGB.map(function (val) {
      if (val < β * 4.5) {
        return val / 4.5;
      }
      return Math.pow((val + α - 1) / α, 1 / 0.45);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      if (val >= β) {
        return α * Math.pow(val, 0.45) - (α - 1);
      }
      return 4.5 * val;
    });
  }
});
var toXYZ_M$4 = [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0.0000000000000000, 0.04511338185890264, 1.043944368900976]];
var fromXYZ_M$4 = [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]];
var P3Linear = new RGBColorSpace({
  id: "p3-linear",
  cssId: "--display-p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: toXYZ_M$4,
  fromXYZ_M: fromXYZ_M$4
});

// This is the linear-light version of sRGB
// as used for example in SVG filters
// or in Canvas

// This matrix was calculated directly from the RGB and white chromaticities
// when rounded to 8 decimal places, it agrees completely with the official matrix
// see https://github.com/w3c/csswg-drafts/issues/5922
var toXYZ_M$3 = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]];

// This matrix is the inverse of the above;
// again it agrees with the official definition when rounded to 8 decimal places
var fromXYZ_M$3 = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]];
var sRGBLinear = new RGBColorSpace({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: toXYZ_M$3,
  fromXYZ_M: fromXYZ_M$3
});

/* List of CSS color keywords
 * Note that this does not include currentColor, transparent,
 * or system colors
 */

// To produce: Visit https://www.w3.org/TR/css-color-4/#named-colors
// and run in the console:
// copy($$("tr", $(".named-color-table tbody")).map(tr => `"${tr.cells[2].textContent.trim()}": [${tr.cells[4].textContent.trim().split(/\s+/).map(c => c === "0"? "0" : c === "255"? "1" : c + " / 255").join(", ")}]`).join(",\n"))
var KEYWORDS = {
  "aliceblue": [240 / 255, 248 / 255, 1],
  "antiquewhite": [250 / 255, 235 / 255, 215 / 255],
  "aqua": [0, 1, 1],
  "aquamarine": [127 / 255, 1, 212 / 255],
  "azure": [240 / 255, 1, 1],
  "beige": [245 / 255, 245 / 255, 220 / 255],
  "bisque": [1, 228 / 255, 196 / 255],
  "black": [0, 0, 0],
  "blanchedalmond": [1, 235 / 255, 205 / 255],
  "blue": [0, 0, 1],
  "blueviolet": [138 / 255, 43 / 255, 226 / 255],
  "brown": [165 / 255, 42 / 255, 42 / 255],
  "burlywood": [222 / 255, 184 / 255, 135 / 255],
  "cadetblue": [95 / 255, 158 / 255, 160 / 255],
  "chartreuse": [127 / 255, 1, 0],
  "chocolate": [210 / 255, 105 / 255, 30 / 255],
  "coral": [1, 127 / 255, 80 / 255],
  "cornflowerblue": [100 / 255, 149 / 255, 237 / 255],
  "cornsilk": [1, 248 / 255, 220 / 255],
  "crimson": [220 / 255, 20 / 255, 60 / 255],
  "cyan": [0, 1, 1],
  "darkblue": [0, 0, 139 / 255],
  "darkcyan": [0, 139 / 255, 139 / 255],
  "darkgoldenrod": [184 / 255, 134 / 255, 11 / 255],
  "darkgray": [169 / 255, 169 / 255, 169 / 255],
  "darkgreen": [0, 100 / 255, 0],
  "darkgrey": [169 / 255, 169 / 255, 169 / 255],
  "darkkhaki": [189 / 255, 183 / 255, 107 / 255],
  "darkmagenta": [139 / 255, 0, 139 / 255],
  "darkolivegreen": [85 / 255, 107 / 255, 47 / 255],
  "darkorange": [1, 140 / 255, 0],
  "darkorchid": [153 / 255, 50 / 255, 204 / 255],
  "darkred": [139 / 255, 0, 0],
  "darksalmon": [233 / 255, 150 / 255, 122 / 255],
  "darkseagreen": [143 / 255, 188 / 255, 143 / 255],
  "darkslateblue": [72 / 255, 61 / 255, 139 / 255],
  "darkslategray": [47 / 255, 79 / 255, 79 / 255],
  "darkslategrey": [47 / 255, 79 / 255, 79 / 255],
  "darkturquoise": [0, 206 / 255, 209 / 255],
  "darkviolet": [148 / 255, 0, 211 / 255],
  "deeppink": [1, 20 / 255, 147 / 255],
  "deepskyblue": [0, 191 / 255, 1],
  "dimgray": [105 / 255, 105 / 255, 105 / 255],
  "dimgrey": [105 / 255, 105 / 255, 105 / 255],
  "dodgerblue": [30 / 255, 144 / 255, 1],
  "firebrick": [178 / 255, 34 / 255, 34 / 255],
  "floralwhite": [1, 250 / 255, 240 / 255],
  "forestgreen": [34 / 255, 139 / 255, 34 / 255],
  "fuchsia": [1, 0, 1],
  "gainsboro": [220 / 255, 220 / 255, 220 / 255],
  "ghostwhite": [248 / 255, 248 / 255, 1],
  "gold": [1, 215 / 255, 0],
  "goldenrod": [218 / 255, 165 / 255, 32 / 255],
  "gray": [128 / 255, 128 / 255, 128 / 255],
  "green": [0, 128 / 255, 0],
  "greenyellow": [173 / 255, 1, 47 / 255],
  "grey": [128 / 255, 128 / 255, 128 / 255],
  "honeydew": [240 / 255, 1, 240 / 255],
  "hotpink": [1, 105 / 255, 180 / 255],
  "indianred": [205 / 255, 92 / 255, 92 / 255],
  "indigo": [75 / 255, 0, 130 / 255],
  "ivory": [1, 1, 240 / 255],
  "khaki": [240 / 255, 230 / 255, 140 / 255],
  "lavender": [230 / 255, 230 / 255, 250 / 255],
  "lavenderblush": [1, 240 / 255, 245 / 255],
  "lawngreen": [124 / 255, 252 / 255, 0],
  "lemonchiffon": [1, 250 / 255, 205 / 255],
  "lightblue": [173 / 255, 216 / 255, 230 / 255],
  "lightcoral": [240 / 255, 128 / 255, 128 / 255],
  "lightcyan": [224 / 255, 1, 1],
  "lightgoldenrodyellow": [250 / 255, 250 / 255, 210 / 255],
  "lightgray": [211 / 255, 211 / 255, 211 / 255],
  "lightgreen": [144 / 255, 238 / 255, 144 / 255],
  "lightgrey": [211 / 255, 211 / 255, 211 / 255],
  "lightpink": [1, 182 / 255, 193 / 255],
  "lightsalmon": [1, 160 / 255, 122 / 255],
  "lightseagreen": [32 / 255, 178 / 255, 170 / 255],
  "lightskyblue": [135 / 255, 206 / 255, 250 / 255],
  "lightslategray": [119 / 255, 136 / 255, 153 / 255],
  "lightslategrey": [119 / 255, 136 / 255, 153 / 255],
  "lightsteelblue": [176 / 255, 196 / 255, 222 / 255],
  "lightyellow": [1, 1, 224 / 255],
  "lime": [0, 1, 0],
  "limegreen": [50 / 255, 205 / 255, 50 / 255],
  "linen": [250 / 255, 240 / 255, 230 / 255],
  "magenta": [1, 0, 1],
  "maroon": [128 / 255, 0, 0],
  "mediumaquamarine": [102 / 255, 205 / 255, 170 / 255],
  "mediumblue": [0, 0, 205 / 255],
  "mediumorchid": [186 / 255, 85 / 255, 211 / 255],
  "mediumpurple": [147 / 255, 112 / 255, 219 / 255],
  "mediumseagreen": [60 / 255, 179 / 255, 113 / 255],
  "mediumslateblue": [123 / 255, 104 / 255, 238 / 255],
  "mediumspringgreen": [0, 250 / 255, 154 / 255],
  "mediumturquoise": [72 / 255, 209 / 255, 204 / 255],
  "mediumvioletred": [199 / 255, 21 / 255, 133 / 255],
  "midnightblue": [25 / 255, 25 / 255, 112 / 255],
  "mintcream": [245 / 255, 1, 250 / 255],
  "mistyrose": [1, 228 / 255, 225 / 255],
  "moccasin": [1, 228 / 255, 181 / 255],
  "navajowhite": [1, 222 / 255, 173 / 255],
  "navy": [0, 0, 128 / 255],
  "oldlace": [253 / 255, 245 / 255, 230 / 255],
  "olive": [128 / 255, 128 / 255, 0],
  "olivedrab": [107 / 255, 142 / 255, 35 / 255],
  "orange": [1, 165 / 255, 0],
  "orangered": [1, 69 / 255, 0],
  "orchid": [218 / 255, 112 / 255, 214 / 255],
  "palegoldenrod": [238 / 255, 232 / 255, 170 / 255],
  "palegreen": [152 / 255, 251 / 255, 152 / 255],
  "paleturquoise": [175 / 255, 238 / 255, 238 / 255],
  "palevioletred": [219 / 255, 112 / 255, 147 / 255],
  "papayawhip": [1, 239 / 255, 213 / 255],
  "peachpuff": [1, 218 / 255, 185 / 255],
  "peru": [205 / 255, 133 / 255, 63 / 255],
  "pink": [1, 192 / 255, 203 / 255],
  "plum": [221 / 255, 160 / 255, 221 / 255],
  "powderblue": [176 / 255, 224 / 255, 230 / 255],
  "purple": [128 / 255, 0, 128 / 255],
  "rebeccapurple": [102 / 255, 51 / 255, 153 / 255],
  "red": [1, 0, 0],
  "rosybrown": [188 / 255, 143 / 255, 143 / 255],
  "royalblue": [65 / 255, 105 / 255, 225 / 255],
  "saddlebrown": [139 / 255, 69 / 255, 19 / 255],
  "salmon": [250 / 255, 128 / 255, 114 / 255],
  "sandybrown": [244 / 255, 164 / 255, 96 / 255],
  "seagreen": [46 / 255, 139 / 255, 87 / 255],
  "seashell": [1, 245 / 255, 238 / 255],
  "sienna": [160 / 255, 82 / 255, 45 / 255],
  "silver": [192 / 255, 192 / 255, 192 / 255],
  "skyblue": [135 / 255, 206 / 255, 235 / 255],
  "slateblue": [106 / 255, 90 / 255, 205 / 255],
  "slategray": [112 / 255, 128 / 255, 144 / 255],
  "slategrey": [112 / 255, 128 / 255, 144 / 255],
  "snow": [1, 250 / 255, 250 / 255],
  "springgreen": [0, 1, 127 / 255],
  "steelblue": [70 / 255, 130 / 255, 180 / 255],
  "tan": [210 / 255, 180 / 255, 140 / 255],
  "teal": [0, 128 / 255, 128 / 255],
  "thistle": [216 / 255, 191 / 255, 216 / 255],
  "tomato": [1, 99 / 255, 71 / 255],
  "turquoise": [64 / 255, 224 / 255, 208 / 255],
  "violet": [238 / 255, 130 / 255, 238 / 255],
  "wheat": [245 / 255, 222 / 255, 179 / 255],
  "white": [1, 1, 1],
  "whitesmoke": [245 / 255, 245 / 255, 245 / 255],
  "yellow": [1, 1, 0],
  "yellowgreen": [154 / 255, 205 / 255, 50 / 255]
};
var coordGrammar = Array(3).fill("<percentage> | <number>[0, 255]");
var coordGrammarNumber = Array(3).fill("<number>[0, 255]");
var sRGB = new RGBColorSpace({
  id: "srgb",
  name: "sRGB",
  base: sRGBLinear,
  fromBase: function fromBase(rgb) {
    // convert an array of linear-light sRGB values in the range 0.0-1.0
    // to gamma corrected form
    // https://en.wikipedia.org/wiki/SRGB
    return rgb.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      if (abs > 0.0031308) {
        return sign * (1.055 * Math.pow(abs, 1 / 2.4) - 0.055);
      }
      return 12.92 * val;
    });
  },
  toBase: function toBase(rgb) {
    // convert an array of sRGB values in the range 0.0 - 1.0
    // to linear light (un-companded) form.
    // https://en.wikipedia.org/wiki/SRGB
    return rgb.map(function (val) {
      var sign = val < 0 ? -1 : 1;
      var abs = val * sign;
      if (abs <= 0.04045) {
        return val / 12.92;
      }
      return sign * Math.pow((abs + 0.055) / 1.055, 2.4);
    });
  },
  formats: {
    "rgb": {
      coords: coordGrammar
    },
    "rgb_number": {
      name: "rgb",
      commas: true,
      coords: coordGrammarNumber,
      noAlpha: true
    },
    "color": {/* use defaults */},
    "rgba": {
      coords: coordGrammar,
      commas: true,
      lastAlpha: true
    },
    "rgba_number": {
      name: "rgba",
      commas: true,
      coords: coordGrammarNumber
    },
    "hex": {
      type: "custom",
      toGamut: true,
      test: function test(str) {
        return /^#([a-f0-9]{3,4}){1,2}$/i.test(str);
      },
      parse: function parse(str) {
        if (str.length <= 5) {
          // #rgb or #rgba, duplicate digits
          str = str.replace(/[a-f0-9]/gi, "$&$&");
        }
        var rgba = [];
        str.replace(/[a-f0-9]{2}/gi, function (component) {
          rgba.push(parseInt(component, 16) / 255);
        });
        return {
          spaceId: "srgb",
          coords: rgba.slice(0, 3),
          alpha: rgba.slice(3)[0]
        };
      },
      serialize: function serialize(coords, alpha) {
        var _ref16 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref16$collapse = _ref16.collapse,
          collapse = _ref16$collapse === void 0 ? true : _ref16$collapse;
        if (alpha < 1) {
          coords.push(alpha);
        }
        coords = coords.map(function (c) {
          return Math.round(c * 255);
        });
        var collapsible = collapse && coords.every(function (c) {
          return c % 17 === 0;
        });
        var hex = coords.map(function (c) {
          if (collapsible) {
            return (c / 17).toString(16);
          }
          return c.toString(16).padStart(2, "0");
        }).join("");
        return "#" + hex;
      }
    },
    "keyword": {
      type: "custom",
      test: function test(str) {
        return /^[a-z]+$/i.test(str);
      },
      parse: function parse(str) {
        str = str.toLowerCase();
        var ret = {
          spaceId: "srgb",
          coords: null,
          alpha: 1
        };
        if (str === "transparent") {
          ret.coords = KEYWORDS.black;
          ret.alpha = 0;
        } else {
          ret.coords = KEYWORDS[str];
        }
        if (ret.coords) {
          return ret;
        }
      }
    }
  }
});
var P3 = new RGBColorSpace({
  id: "p3",
  cssId: "display-p3",
  name: "P3",
  base: P3Linear,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: sRGB.fromBase,
  toBase: sRGB.toBase
});

// Default space for CSS output. Code in Color.js makes this wider if there's a DOM available
defaults.display_space = sRGB;
var supportsNone;
if (typeof CSS !== "undefined" && CSS.supports) {
  // Find widest supported color space for CSS
  for (var _i3 = 0, _arr = [lab, REC2020, P3]; _i3 < _arr.length; _i3++) {
    var space = _arr[_i3];
    var coords = space.getMinCoords();
    var color = {
      space: space,
      coords: coords,
      alpha: 1
    };
    var str = serialize(color);
    if (CSS.supports("color", str)) {
      defaults.display_space = space;
      break;
    }
  }
}

/**
 * Returns a serialization of the color that can actually be displayed in the browser.
 * If the default serialization can be displayed, it is returned.
 * Otherwise, the color is converted to Lab, REC2020, or P3, whichever is the widest supported.
 * In Node.js, this is basically equivalent to `serialize()` but returns a `String` object instead.
 *
 * @export
 * @param {{space, coords} | Color | string} color
 * @param {*} [options={}] Options to be passed to serialize()
 * @param {ColorSpace | string} [options.space = defaults.display_space] Color space to use for serialization if default is not supported
 * @returns {String} String object containing the serialized color with a color property containing the converted color (or the original, if no conversion was necessary)
 */
function _display(color) {
  var _ref17 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref17$space = _ref17.space,
    space = _ref17$space === void 0 ? defaults.display_space : _ref17$space,
    options = _objectWithoutProperties(_ref17, _excluded2);
  var ret = serialize(color, options);
  if (typeof CSS === "undefined" || CSS.supports("color", ret) || !defaults.display_space) {
    ret = new String(ret);
    ret.color = color;
  } else {
    // If we're here, what we were about to output is not supported
    var fallbackColor = color;

    // First, check if the culprit is none values
    var hasNone = color.coords.some(isNone) || isNone(color.alpha);
    if (hasNone) {
      var _supportsNone;
      // Does the browser support none values?
      if (!((_supportsNone = supportsNone) !== null && _supportsNone !== void 0 ? _supportsNone : supportsNone = CSS.supports("color", "hsl(none 50% 50%)"))) {
        // Nope, try again without none
        fallbackColor = clone(color);
        fallbackColor.coords = fallbackColor.coords.map(skipNone);
        fallbackColor.alpha = skipNone(fallbackColor.alpha);
        ret = serialize(fallbackColor, options);
        if (CSS.supports("color", ret)) {
          // We're done, now it's supported
          ret = new String(ret);
          ret.color = fallbackColor;
          return ret;
        }
      }
    }

    // If we're here, the color function is not supported
    // Fall back to fallback space
    fallbackColor = to(fallbackColor, space);
    ret = new String(serialize(fallbackColor, options));
    ret.color = fallbackColor;
  }
  return ret;
}
function equals(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  return color1.space === color2.space && color1.alpha === color2.alpha && color1.coords.every(function (c, i) {
    return c === color2.coords[i];
  });
}

/**
 * Relative luminance
 */
function getLuminance(color) {
  // Assume getColor() is called on color in get()
  return get(color, [xyz_d65, "y"]);
}
function setLuminance(color, value) {
  // Assume getColor() is called on color in set()
  set(color, [xyz_d65, "y"], value);
}
function register$2(Color) {
  Object.defineProperty(Color.prototype, "luminance", {
    get: function get() {
      return getLuminance(this);
    },
    set: function set(value) {
      setLuminance(this, value);
    }
  });
}
var luminance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getLuminance: getLuminance,
  register: register$2,
  setLuminance: setLuminance
});

// WCAG 2.0 contrast https://www.w3.org/TR/WCAG20-TECHS/G18.html
// Simple contrast, with fixed 5% viewing flare contribution
// Symmetric, does not matter which is foreground and which is background

function contrastWCAG21(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Y1 = Math.max(getLuminance(color1), 0);
  var Y2 = Math.max(getLuminance(color2), 0);
  if (Y2 > Y1) {
    var _ref18 = [Y2, Y1];
    Y1 = _ref18[0];
    Y2 = _ref18[1];
  }
  return (Y1 + .05) / (Y2 + .05);
}

// APCA 0.0.98G
// https://github.com/Myndex/apca-w3
// see also https://github.com/w3c/silver/issues/643

// exponents
var normBG = 0.56;
var normTXT = 0.57;
var revTXT = 0.62;
var revBG = 0.65;

// clamps
var blkThrs = 0.022;
var blkClmp = 1.414;
var loClip = 0.1;
var deltaYmin = 0.0005;

// scalers
// see https://github.com/w3c/silver/issues/645
var scaleBoW = 1.14;
var loBoWoffset = 0.027;
var scaleWoB = 1.14;
function fclamp(Y) {
  if (Y >= blkThrs) {
    return Y;
  }
  return Y + Math.pow(blkThrs - Y, blkClmp);
}
function linearize(val) {
  var sign = val < 0 ? -1 : 1;
  var abs = Math.abs(val);
  return sign * Math.pow(abs, 2.4);
}

// Not symmetric, requires a foreground (text) color, and a background color
function contrastAPCA(background, foreground) {
  foreground = getColor(foreground);
  background = getColor(background);
  var S;
  var C;
  var Sapc;

  // Myndex as-published, assumes sRGB inputs
  var R, G, B;
  foreground = to(foreground, "srgb");
  // Should these be clamped to in-gamut values?

  // Calculates "screen luminance" with non-standard simple gamma EOTF
  // weights should be from CSS Color 4, not the ones here which are via Myndex and copied from Lindbloom
  var _foreground$coords = _slicedToArray(foreground.coords, 3);
  R = _foreground$coords[0];
  G = _foreground$coords[1];
  B = _foreground$coords[2];
  var lumTxt = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.0721750;
  background = to(background, "srgb");
  var _background$coords = _slicedToArray(background.coords, 3);
  R = _background$coords[0];
  G = _background$coords[1];
  B = _background$coords[2];
  var lumBg = linearize(R) * 0.2126729 + linearize(G) * 0.7151522 + linearize(B) * 0.0721750;

  // toe clamping of very dark values to account for flare
  var Ytxt = fclamp(lumTxt);
  var Ybg = fclamp(lumBg);

  // are we "Black on White" (dark on light), or light on dark?
  var BoW = Ybg > Ytxt;

  // why is this a delta, when Y is not perceptually uniform?
  // Answer: it is a noise gate, see
  // https://github.com/LeaVerou/color.js/issues/208
  if (Math.abs(Ybg - Ytxt) < deltaYmin) {
    C = 0;
  } else {
    if (BoW) {
      // dark text on light background
      S = Math.pow(Ybg, normBG) - Math.pow(Ytxt, normTXT);
      C = S * scaleBoW;
    } else {
      // light text on dark background
      S = Math.pow(Ybg, revBG) - Math.pow(Ytxt, revTXT);
      C = S * scaleWoB;
    }
  }
  if (Math.abs(C) < loClip) {
    Sapc = 0;
  } else if (C > 0) {
    // not clear whether Woffset is loBoWoffset or loWoBoffset
    // but they have the same value
    Sapc = C - loBoWoffset;
  } else {
    Sapc = C + loBoWoffset;
  }
  return Sapc * 100;
}

// Michelson  luminance contrast
// the relation between the spread and the sum of the two luminances
// Symmetric, does not matter which is foreground and which is background
// No black level compensation for flare.

function contrastMichelson(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Y1 = Math.max(getLuminance(color1), 0);
  var Y2 = Math.max(getLuminance(color2), 0);
  if (Y2 > Y1) {
    var _ref19 = [Y2, Y1];
    Y1 = _ref19[0];
    Y2 = _ref19[1];
  }
  var denom = Y1 + Y2;
  return denom === 0 ? 0 : (Y1 - Y2) / denom;
}

// Weber luminance contrast
// The difference between the two luminances divided by the lower luminance
// Symmetric, does not matter which is foreground and which is background
// No black level compensation for flare.

// the darkest sRGB color above black is #000001 and this produces
// a plain Weber contrast of ~45647.
// So, setting the divide-by-zero result at 50000 is a reasonable
// max clamp for the plain Weber
var max = 50000;
function contrastWeber(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Y1 = Math.max(getLuminance(color1), 0);
  var Y2 = Math.max(getLuminance(color2), 0);
  if (Y2 > Y1) {
    var _ref20 = [Y2, Y1];
    Y1 = _ref20[0];
    Y2 = _ref20[1];
  }
  return Y2 === 0 ? max : (Y1 - Y2) / Y2;
}

// CIE Lightness difference, as used by Google Material Design
// Google HCT Tone is the same as CIE Lightness
// https://material.io/blog/science-of-color-design

function contrastLstar(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var L1 = get(color1, [lab, "l"]);
  var L2 = get(color2, [lab, "l"]);
  return Math.abs(L1 - L2);
}

// κ * ε  = 2^3 = 8
var ε$3 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var ε3 = 24 / 116;
var κ$2 = 24389 / 27; // 29^3/3^3

var white$1 = WHITES.D65;
var lab_d65 = new ColorSpace({
  id: "lab-d65",
  name: "Lab D65",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D65, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: white$1,
  base: xyz_d65,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase: function fromBase(XYZ) {
    // compute xyz, which is XYZ scaled relative to reference white
    var xyz = XYZ.map(function (value, i) {
      return value / white$1[i];
    });

    // now compute f
    var f = xyz.map(function (value) {
      return value > ε$3 ? Math.cbrt(value) : (κ$2 * value + 16) / 116;
    });
    return [116 * f[1] - 16,
    // L
    500 * (f[0] - f[1]),
    // a
    200 * (f[1] - f[2]) // b
    ];
  },
  // Convert Lab to D65-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase: function toBase(Lab) {
    // compute f, starting with the luminance-related term
    var f = [];
    f[1] = (Lab[0] + 16) / 116;
    f[0] = Lab[1] / 500 + f[1];
    f[2] = f[1] - Lab[2] / 200;

    // compute xyz
    var xyz = [f[0] > ε3 ? Math.pow(f[0], 3) : (116 * f[0] - 16) / κ$2, Lab[0] > 8 ? Math.pow((Lab[0] + 16) / 116, 3) : Lab[0] / κ$2, f[2] > ε3 ? Math.pow(f[2], 3) : (116 * f[2] - 16) / κ$2];

    // Compute XYZ by scaling xyz by reference white
    return xyz.map(function (value, i) {
      return value * white$1[i];
    });
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});

// Delta Phi Star perceptual lightness contrast
// See https://github.com/Myndex/deltaphistar
// The (difference between two Lstars each raised to phi) raised to (1/phi)
// Symmetric, does not matter which is foreground and which is background

var phi = Math.pow(5, 0.5) * 0.5 + 0.5; // Math.phi can be used if Math.js

function contrastDeltaPhi(color1, color2) {
  color1 = getColor(color1);
  color2 = getColor(color2);
  var Lstr1 = get(color1, [lab_d65, "l"]);
  var Lstr2 = get(color2, [lab_d65, "l"]);
  var deltaPhiStar = Math.abs(Math.pow(Lstr1, phi) - Math.pow(Lstr2, phi));
  var contrast = Math.pow(deltaPhiStar, 1 / phi) * Math.SQRT2 - 40;
  return contrast < 7.5 ? 0.0 : contrast;
}
var contrastMethods = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contrastAPCA: contrastAPCA,
  contrastDeltaPhi: contrastDeltaPhi,
  contrastLstar: contrastLstar,
  contrastMichelson: contrastMichelson,
  contrastWCAG21: contrastWCAG21,
  contrastWeber: contrastWeber
});
function contrast(background, foreground) {
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isString(o)) {
    o = {
      algorithm: o
    };
  }
  var _o = o,
    algorithm = _o.algorithm,
    rest = _objectWithoutProperties(_o, _excluded3);
  if (!algorithm) {
    var algorithms = Object.keys(contrastMethods).map(function (a) {
      return a.replace(/^contrast/, "");
    }).join(", ");
    throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(algorithms));
  }
  background = getColor(background);
  foreground = getColor(foreground);
  for (var _a in contrastMethods) {
    if ("contrast" + algorithm.toLowerCase() === _a.toLowerCase()) {
      return contrastMethods[_a](background, foreground, rest);
    }
  }
  throw new TypeError("Unknown contrast algorithm: ".concat(algorithm));
}

// Chromaticity coordinates
function uv(color) {
  // Assumes getAll() calls getColor() on color
  var _getAll = getAll(color, xyz_d65),
    _getAll2 = _slicedToArray(_getAll, 3),
    X = _getAll2[0],
    Y = _getAll2[1],
    Z = _getAll2[2];
  var denom = X + 15 * Y + 3 * Z;
  return [4 * X / denom, 9 * Y / denom];
}
function xy(color) {
  // Assumes getAll() calls getColor() on color
  var _getAll3 = getAll(color, xyz_d65),
    _getAll4 = _slicedToArray(_getAll3, 3),
    X = _getAll4[0],
    Y = _getAll4[1],
    Z = _getAll4[2];
  var sum = X + Y + Z;
  return [X / sum, Y / sum];
}
function register$1(Color) {
  // no setters, as lightness information is lost
  // when converting color to chromaticity
  Object.defineProperty(Color.prototype, "uv", {
    get: function get() {
      return uv(this);
    }
  });
  Object.defineProperty(Color.prototype, "xy", {
    get: function get() {
      return xy(this);
    }
  });
}
var chromaticity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  register: register$1,
  uv: uv,
  xy: xy
});
function deltaE(c1, c2) {
  var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isString(o)) {
    o = {
      method: o
    };
  }
  var _o2 = o,
    _o2$method = _o2.method,
    method = _o2$method === void 0 ? defaults.deltaE : _o2$method,
    rest = _objectWithoutProperties(_o2, _excluded4);
  for (var _m2 in deltaEMethods) {
    if ("deltae" + method.toLowerCase() === _m2.toLowerCase()) {
      return deltaEMethods[_m2](c1, c2, rest);
    }
  }
  throw new TypeError("Unknown deltaE method: ".concat(method));
}
function lighten(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .25;
  var space = ColorSpace.get("oklch", "lch");
  var lightness = [space, "l"];
  return set(color, lightness, function (l) {
    return l * (1 + amount);
  });
}
function darken(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .25;
  var space = ColorSpace.get("oklch", "lch");
  var lightness = [space, "l"];
  return set(color, lightness, function (l) {
    return l * (1 - amount);
  });
}
var variations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  darken: darken,
  lighten: lighten
});

/**
 * Functions related to color interpolation
 */

/**
 * Return an intermediate color between two colors
 * Signatures: mix(c1, c2, p, options)
 *             mix(c1, c2, options)
 *             mix(color)
 * @param {Color | string} c1 The first color
 * @param {Color | string} [c2] The second color
 * @param {number} [p=.5] A 0-1 percentage where 0 is c1 and 1 is c2
 * @param {Object} [o={}]
 * @return {Color}
 */
function mix(c1, c2) {
  var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : .5;
  var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _ref21 = [getColor(c1), getColor(c2)];
  c1 = _ref21[0];
  c2 = _ref21[1];
  if (type(p) === "object") {
    var _ref22 = [.5, p];
    p = _ref22[0];
    o = _ref22[1];
  }
  var r = range(c1, c2, o);
  return r(p);
}

/**
 *
 * @param {Color | string | Function} c1 The first color or a range
 * @param {Color | string} [c2] The second color if c1 is not a range
 * @param {Object} [options={}]
 * @return {Color[]}
 */
function steps(c1, c2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var colorRange;
  if (isRange(c1)) {
    // Tweaking existing range
    colorRange = c1;
    options = c2;
    var _colorRange$rangeArgs = _slicedToArray(colorRange.rangeArgs.colors, 2);
    c1 = _colorRange$rangeArgs[0];
    c2 = _colorRange$rangeArgs[1];
  }
  var _options = options,
    maxDeltaE = _options.maxDeltaE,
    deltaEMethod = _options.deltaEMethod,
    _options$steps = _options.steps,
    steps = _options$steps === void 0 ? 2 : _options$steps,
    _options$maxSteps = _options.maxSteps,
    maxSteps = _options$maxSteps === void 0 ? 1000 : _options$maxSteps,
    rangeOptions = _objectWithoutProperties(_options, _excluded5);
  if (!colorRange) {
    var _ref23 = [getColor(c1), getColor(c2)];
    c1 = _ref23[0];
    c2 = _ref23[1];
    colorRange = range(c1, c2, rangeOptions);
  }
  var totalDelta = deltaE(c1, c2);
  var actualSteps = maxDeltaE > 0 ? Math.max(steps, Math.ceil(totalDelta / maxDeltaE) + 1) : steps;
  var ret = [];
  if (maxSteps !== undefined) {
    actualSteps = Math.min(actualSteps, maxSteps);
  }
  if (actualSteps === 1) {
    ret = [{
      p: .5,
      color: colorRange(.5)
    }];
  } else {
    var step = 1 / (actualSteps - 1);
    ret = Array.from({
      length: actualSteps
    }, function (_, i) {
      var p = i * step;
      return {
        p: p,
        color: colorRange(p)
      };
    });
  }
  if (maxDeltaE > 0) {
    // Iterate over all stops and find max deltaE
    var maxDelta = ret.reduce(function (acc, cur, i) {
      if (i === 0) {
        return 0;
      }
      var ΔΕ = deltaE(cur.color, ret[i - 1].color, deltaEMethod);
      return Math.max(acc, ΔΕ);
    }, 0);
    while (maxDelta > maxDeltaE) {
      // Insert intermediate stops and measure maxDelta again
      // We need to do this for all pairs, otherwise the midpoint shifts
      maxDelta = 0;
      for (var i = 1; i < ret.length && ret.length < maxSteps; i++) {
        var prev = ret[i - 1];
        var cur = ret[i];
        var _p2 = (cur.p + prev.p) / 2;
        var _color2 = colorRange(_p2);
        maxDelta = Math.max(maxDelta, deltaE(_color2, prev.color), deltaE(_color2, cur.color));
        ret.splice(i, 0, {
          p: _p2,
          color: colorRange(_p2)
        });
        i++;
      }
    }
  }
  ret = ret.map(function (a) {
    return a.color;
  });
  return ret;
}

/**
 * Interpolate to color2 and return a function that takes a 0-1 percentage
 * @param {Color | string | Function} color1 The first color or an existing range
 * @param {Color | string} [color2] If color1 is a color, this is the second color
 * @param {Object} [options={}]
 * @returns {Function} A function that takes a 0-1 percentage and returns a color
 */
function range(color1, color2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (isRange(color1)) {
    // Tweaking existing range
    var r = color1,
      _options2 = color2;
    return range.apply(void 0, _toConsumableArray(r.rangeArgs.colors).concat([_objectSpread(_objectSpread({}, r.rangeArgs.options), _options2)]));
  }
  var space = options.space,
    outputSpace = options.outputSpace,
    progression = options.progression,
    premultiplied = options.premultiplied;
  color1 = getColor(color1);
  color2 = getColor(color2);

  // Make sure we're working on copies of these colors
  color1 = clone(color1);
  color2 = clone(color2);
  var rangeArgs = {
    colors: [color1, color2],
    options: options
  };
  if (space) {
    space = ColorSpace.get(space);
  } else {
    space = ColorSpace.registry[defaults.interpolationSpace] || color1.space;
  }
  outputSpace = outputSpace ? ColorSpace.get(outputSpace) : space;
  color1 = to(color1, space);
  color2 = to(color2, space);

  // Gamut map to avoid areas of flat color
  color1 = toGamut(color1);
  color2 = toGamut(color2);

  // Handle hue interpolation
  // See https://github.com/w3c/csswg-drafts/issues/4735#issuecomment-635741840
  if (space.coords.h && space.coords.h.type === "angle") {
    var arc = options.hue = options.hue || "shorter";
    var hue = [space, "h"];
    var _ref24 = [get(color1, hue), get(color2, hue)],
      θ1 = _ref24[0],
      θ2 = _ref24[1];
    // Undefined hues must be evaluated before hue fix-up to properly
    // calculate hue arcs between undefined and defined hues.
    // See https://github.com/w3c/csswg-drafts/issues/9436#issuecomment-1746957545
    if (isNaN(θ1) && !isNaN(θ2)) {
      θ1 = θ2;
    } else if (isNaN(θ2) && !isNaN(θ1)) {
      θ2 = θ1;
    }
    var _adjust = adjust(arc, [θ1, θ2]);
    var _adjust2 = _slicedToArray(_adjust, 2);
    θ1 = _adjust2[0];
    θ2 = _adjust2[1];
    set(color1, hue, θ1);
    set(color2, hue, θ2);
  }
  if (premultiplied) {
    // not coping with polar spaces yet
    color1.coords = color1.coords.map(function (c) {
      return c * color1.alpha;
    });
    color2.coords = color2.coords.map(function (c) {
      return c * color2.alpha;
    });
  }
  return Object.assign(function (p) {
    p = progression ? progression(p) : p;
    var coords = color1.coords.map(function (start, i) {
      var end = color2.coords[i];
      return interpolate(start, end, p);
    });
    var alpha = interpolate(color1.alpha, color2.alpha, p);
    var ret = {
      space: space,
      coords: coords,
      alpha: alpha
    };
    if (premultiplied) {
      // undo premultiplication
      ret.coords = ret.coords.map(function (c) {
        return c / alpha;
      });
    }
    if (outputSpace !== space) {
      ret = to(ret, outputSpace);
    }
    return ret;
  }, {
    rangeArgs: rangeArgs
  });
}
function isRange(val) {
  return type(val) === "function" && !!val.rangeArgs;
}
defaults.interpolationSpace = "lab";
function register(Color) {
  Color.defineFunction("mix", mix, {
    returns: "color"
  });
  Color.defineFunction("range", range, {
    returns: "function<color>"
  });
  Color.defineFunction("steps", steps, {
    returns: "array<color>"
  });
}
var interpolation = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isRange: isRange,
  mix: mix,
  range: range,
  register: register,
  steps: steps
});
var HSL = new ColorSpace({
  id: "hsl",
  name: "HSL",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: sRGB,
  // Adapted from https://drafts.csswg.org/css-color-4/better-rgbToHsl.js
  fromBase: function fromBase(rgb) {
    var max = Math.max.apply(Math, _toConsumableArray(rgb));
    var min = Math.min.apply(Math, _toConsumableArray(rgb));
    var _rgb = _slicedToArray(rgb, 3),
      r = _rgb[0],
      g = _rgb[1],
      b = _rgb[2];
    var h = NaN,
      s = 0,
      l = (min + max) / 2;
    var d = max - min;
    if (d !== 0) {
      s = l === 0 || l === 1 ? 0 : (max - l) / Math.min(l, 1 - l);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
      }
      h = h * 60;
    }

    // Very out of gamut colors can produce negative saturation
    // If so, just rotate the hue by 180 and use a positive saturation
    // see https://github.com/w3c/csswg-drafts/issues/9222
    if (s < 0) {
      h += 180;
      s = Math.abs(s);
    }
    if (h >= 360) {
      h -= 360;
    }
    return [h, s * 100, l * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: function toBase(hsl) {
    var _hsl = _slicedToArray(hsl, 3),
      h = _hsl[0],
      s = _hsl[1],
      l = _hsl[2];
    h = h % 360;
    if (h < 0) {
      h += 360;
    }
    s /= 100;
    l /= 100;
    function f(n) {
      var k = (n + h / 30) % 12;
      var a = s * Math.min(l, 1 - l);
      return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    }
    return [f(0), f(8), f(4)];
  },
  formats: {
    "hsl": {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
    },
    "hsla": {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
      commas: true,
      lastAlpha: true
    }
  }
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

var HSV = new ColorSpace({
  id: "hsv",
  name: "HSV",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    v: {
      range: [0, 100],
      name: "Value"
    }
  },
  base: HSL,
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  fromBase: function fromBase(hsl) {
    var _hsl2 = _slicedToArray(hsl, 3),
      h = _hsl2[0],
      s = _hsl2[1],
      l = _hsl2[2];
    s /= 100;
    l /= 100;
    var v = l + s * Math.min(l, 1 - l);
    return [h,
    // h is the same
    v === 0 ? 0 : 200 * (1 - l / v),
    // s
    100 * v];
  },
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  toBase: function toBase(hsv) {
    var _hsv = _slicedToArray(hsv, 3),
      h = _hsv[0],
      s = _hsv[1],
      v = _hsv[2];
    s /= 100;
    v /= 100;
    var l = v * (1 - s / 2);
    return [h,
    // h is the same
    l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l) * 100, l * 100];
  },
  formats: {
    color: {
      id: "--hsv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});

// The Hue, Whiteness Blackness (HWB) colorspace
// See https://drafts.csswg.org/css-color-4/#the-hwb-notation
// Note that, like HSL, calculations are done directly on
// gamma-corrected sRGB values rather than linearising them first.

var hwb = new ColorSpace({
  id: "hwb",
  name: "HWB",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    w: {
      range: [0, 100],
      name: "Whiteness"
    },
    b: {
      range: [0, 100],
      name: "Blackness"
    }
  },
  base: HSV,
  fromBase: function fromBase(hsv) {
    var _hsv2 = _slicedToArray(hsv, 3),
      h = _hsv2[0],
      s = _hsv2[1],
      v = _hsv2[2];
    return [h, v * (100 - s) / 100, 100 - v];
  },
  toBase: function toBase(hwb) {
    var _hwb = _slicedToArray(hwb, 3),
      h = _hwb[0],
      w = _hwb[1],
      b = _hwb[2];

    // Now convert percentages to [0..1]
    w /= 100;
    b /= 100;

    // Achromatic check (white plus black >= 1)
    var sum = w + b;
    if (sum >= 1) {
      var gray = w / sum;
      return [h, 0, gray * 100];
    }
    var v = 1 - b;
    var s = v === 0 ? 0 : 1 - w / v;
    return [h, s * 100, v * 100];
  },
  formats: {
    "hwb": {
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});

// convert an array of linear-light a98-rgb values to CIE XYZ
// http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
// has greater numerical precision than section 4.3.5.3 of
// https://www.adobe.com/digitalimag/pdfs/AdobeRGB1998.pdf
// but the values below were calculated from first principles
// from the chromaticity coordinates of R G B W
var toXYZ_M$2 = [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]];
var fromXYZ_M$2 = [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]];
var A98Linear = new RGBColorSpace({
  id: "a98rgb-linear",
  cssId: "--a98-rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: toXYZ_M$2,
  fromXYZ_M: fromXYZ_M$2
});
var a98rgb = new RGBColorSpace({
  id: "a98rgb",
  cssId: "a98-rgb",
  name: "Adobe® 98 RGB compatible",
  base: A98Linear,
  toBase: function toBase(RGB) {
    return RGB.map(function (val) {
      return Math.pow(Math.abs(val), 563 / 256) * Math.sign(val);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      return Math.pow(Math.abs(val), 256 / 563) * Math.sign(val);
    });
  }
});

// convert an array of  prophoto-rgb values to CIE XYZ
// using  D50 (so no chromatic adaptation needed afterwards)
// matrix cannot be expressed in rational form, but is calculated to 64 bit accuracy
// see https://github.com/w3c/csswg-drafts/issues/7675
var toXYZ_M$1 = [[0.79776664490064230, 0.13518129740053308, 0.03134773412839220], [0.28807482881940130, 0.71183523424187300, 0.00008993693872564], [0.00000000000000000, 0.00000000000000000, 0.82510460251046020]];
var fromXYZ_M$1 = [[1.34578688164715830, -0.25557208737979464, -0.05110186497554526], [-0.54463070512490190, 1.50824774284514680, 0.02052744743642139], [0.00000000000000000, 0.00000000000000000, 1.21196754563894520]];
var ProPhotoLinear = new RGBColorSpace({
  id: "prophoto-linear",
  cssId: "--prophoto-rgb-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: XYZ_D50,
  toXYZ_M: toXYZ_M$1,
  fromXYZ_M: fromXYZ_M$1
});
var Et = 1 / 512;
var Et2 = 16 / 512;
var prophoto = new RGBColorSpace({
  id: "prophoto",
  cssId: "prophoto-rgb",
  name: "ProPhoto",
  base: ProPhotoLinear,
  toBase: function toBase(RGB) {
    // Transfer curve is gamma 1.8 with a small linear portion
    return RGB.map(function (v) {
      return v < Et2 ? v / 16 : Math.pow(v, 1.8);
    });
  },
  fromBase: function fromBase(RGB) {
    return RGB.map(function (v) {
      return v >= Et ? Math.pow(v, 1 / 1.8) : 16 * v;
    });
  }
});
var oklch = new ColorSpace({
  id: "oklch",
  name: "Oklch",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    c: {
      refRange: [0, 0.4],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  white: "D65",
  base: OKLab,
  fromBase: function fromBase(oklab) {
    // Convert to polar form
    var _oklab = _slicedToArray(oklab, 3),
      L = _oklab[0],
      a = _oklab[1],
      b = _oklab[2];
    var h;
    var ε = 0.0002; // chromatic components much smaller than a,b

    if (Math.abs(a) < ε && Math.abs(b) < ε) {
      h = NaN;
    } else {
      h = Math.atan2(b, a) * 180 / Math.PI;
    }
    return [L,
    // OKLab L is still L
    Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)),
    // Chroma
    constrain(h) // Hue, in degrees [0 to 360)
    ];
  },
  // Convert from polar form
  toBase: function toBase(oklch) {
    var _oklch = _slicedToArray(oklch, 3),
      L = _oklch[0],
      C = _oklch[1],
      h = _oklch[2];
    var a, b;

    // check for NaN hue
    if (isNaN(h)) {
      a = 0;
      b = 0;
    } else {
      a = C * Math.cos(h * Math.PI / 180);
      b = C * Math.sin(h * Math.PI / 180);
    }
    return [L, a, b];
  },
  formats: {
    "oklch": {
      coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
});
var white = WHITES.D65;
var ε$2 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var κ$1 = 24389 / 27; // 29^3/3^3
var _uv = uv({
    space: xyz_d65,
    coords: white
  }),
  _uv2 = _slicedToArray(_uv, 2),
  U_PRIME_WHITE = _uv2[0],
  V_PRIME_WHITE = _uv2[1];
var Luv = new ColorSpace({
  id: "luv",
  name: "Luv",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    // Reference ranges from https://facelessuser.github.io/coloraide/colors/luv/
    u: {
      refRange: [-215, 215]
    },
    v: {
      refRange: [-215, 215]
    }
  },
  white: white,
  base: xyz_d65,
  // Convert D65-adapted XYZ to Luv
  // https://en.wikipedia.org/wiki/CIELUV#The_forward_transformation
  fromBase: function fromBase(XYZ) {
    var xyz = [skipNone(XYZ[0]), skipNone(XYZ[1]), skipNone(XYZ[2])];
    var y = xyz[1];
    var _uv3 = uv({
        space: xyz_d65,
        coords: xyz
      }),
      _uv4 = _slicedToArray(_uv3, 2),
      up = _uv4[0],
      vp = _uv4[1];

    // Protect against XYZ of [0, 0, 0]
    if (!Number.isFinite(up) || !Number.isFinite(vp)) {
      return [0, 0, 0];
    }
    var L = y <= ε$2 ? κ$1 * y : 116 * Math.cbrt(y) - 16;
    return [L, 13 * L * (up - U_PRIME_WHITE), 13 * L * (vp - V_PRIME_WHITE)];
  },
  // Convert Luv to D65-adapted XYZ
  // https://en.wikipedia.org/wiki/CIELUV#The_reverse_transformation
  toBase: function toBase(Luv) {
    var _Luv = _slicedToArray(Luv, 3),
      L = _Luv[0],
      u = _Luv[1],
      v = _Luv[2];

    // Protect against division by zero and NaN Lightness
    if (L === 0 || isNone(L)) {
      return [0, 0, 0];
    }
    u = skipNone(u);
    v = skipNone(v);
    var up = u / (13 * L) + U_PRIME_WHITE;
    var vp = v / (13 * L) + V_PRIME_WHITE;
    var y = L <= 8 ? L / κ$1 : Math.pow((L + 16) / 116, 3);
    return [y * (9 * up / (4 * vp)), y, y * ((12 - 3 * up - 20 * vp) / (4 * vp))];
  },
  formats: {
    color: {
      id: "--luv",
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
var LCHuv = new ColorSpace({
  id: "lchuv",
  name: "LChuv",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 220],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Luv,
  fromBase: function fromBase(Luv) {
    // Convert to polar form
    var _Luv2 = _slicedToArray(Luv, 3),
      L = _Luv2[0],
      u = _Luv2[1],
      v = _Luv2[2];
    var hue;
    var ε = 0.02;
    if (Math.abs(u) < ε && Math.abs(v) < ε) {
      hue = NaN;
    } else {
      hue = Math.atan2(v, u) * 180 / Math.PI;
    }
    return [L,
    // L is still L
    Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2)),
    // Chroma
    constrain(hue) // Hue, in degrees [0 to 360)
    ];
  },
  toBase: function toBase(LCH) {
    // Convert from polar form
    var _LCH2 = _slicedToArray(LCH, 3),
      Lightness = _LCH2[0],
      Chroma = _LCH2[1],
      Hue = _LCH2[2];
    // Clamp any negative Chroma
    if (Chroma < 0) {
      Chroma = 0;
    }
    // Deal with NaN Hue
    if (isNaN(Hue)) {
      Hue = 0;
    }
    return [Lightness,
    // L is still L
    Chroma * Math.cos(Hue * Math.PI / 180),
    // u
    Chroma * Math.sin(Hue * Math.PI / 180) // v
    ];
  },
  formats: {
    color: {
      id: "--lchuv",
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});

/*
Adapted from: https://github.com/hsluv/hsluv-javascript/blob/14b49e6cf9a9137916096b8487a5372626b57ba4/src/hsluv.ts

Copyright (c) 2012-2022 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var ε$1 = 216 / 24389; // 6^3/29^3 == (24/116)^3
var κ = 24389 / 27; // 29^3/3^3

var m_r0 = fromXYZ_M$3[0][0];
var m_r1 = fromXYZ_M$3[0][1];
var m_r2 = fromXYZ_M$3[0][2];
var m_g0 = fromXYZ_M$3[1][0];
var m_g1 = fromXYZ_M$3[1][1];
var m_g2 = fromXYZ_M$3[1][2];
var m_b0 = fromXYZ_M$3[2][0];
var m_b1 = fromXYZ_M$3[2][1];
var m_b2 = fromXYZ_M$3[2][2];
function distanceFromOriginAngle(slope, intercept, angle) {
  var d = intercept / (Math.sin(angle) - slope * Math.cos(angle));
  return d < 0 ? Infinity : d;
}
function calculateBoundingLines(l) {
  var sub1 = Math.pow(l + 16, 3) / 1560896;
  var sub2 = sub1 > ε$1 ? sub1 : l / κ;
  var s1r = sub2 * (284517 * m_r0 - 94839 * m_r2);
  var s2r = sub2 * (838422 * m_r2 + 769860 * m_r1 + 731718 * m_r0);
  var s3r = sub2 * (632260 * m_r2 - 126452 * m_r1);
  var s1g = sub2 * (284517 * m_g0 - 94839 * m_g2);
  var s2g = sub2 * (838422 * m_g2 + 769860 * m_g1 + 731718 * m_g0);
  var s3g = sub2 * (632260 * m_g2 - 126452 * m_g1);
  var s1b = sub2 * (284517 * m_b0 - 94839 * m_b2);
  var s2b = sub2 * (838422 * m_b2 + 769860 * m_b1 + 731718 * m_b0);
  var s3b = sub2 * (632260 * m_b2 - 126452 * m_b1);
  return {
    r0s: s1r / s3r,
    r0i: s2r * l / s3r,
    r1s: s1r / (s3r + 126452),
    r1i: (s2r - 769860) * l / (s3r + 126452),
    g0s: s1g / s3g,
    g0i: s2g * l / s3g,
    g1s: s1g / (s3g + 126452),
    g1i: (s2g - 769860) * l / (s3g + 126452),
    b0s: s1b / s3b,
    b0i: s2b * l / s3b,
    b1s: s1b / (s3b + 126452),
    b1i: (s2b - 769860) * l / (s3b + 126452)
  };
}
function calcMaxChromaHsluv(lines, h) {
  var hueRad = h / 360 * Math.PI * 2;
  var r0 = distanceFromOriginAngle(lines.r0s, lines.r0i, hueRad);
  var r1 = distanceFromOriginAngle(lines.r1s, lines.r1i, hueRad);
  var g0 = distanceFromOriginAngle(lines.g0s, lines.g0i, hueRad);
  var g1 = distanceFromOriginAngle(lines.g1s, lines.g1i, hueRad);
  var b0 = distanceFromOriginAngle(lines.b0s, lines.b0i, hueRad);
  var b1 = distanceFromOriginAngle(lines.b1s, lines.b1i, hueRad);
  return Math.min(r0, r1, g0, g1, b0, b1);
}
var hsluv = new ColorSpace({
  id: "hsluv",
  name: "HSLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: LCHuv,
  gamutSpace: sRGB,
  // Convert LCHuv to HSLuv
  fromBase: function fromBase(lch) {
    var _ref25 = [skipNone(lch[0]), skipNone(lch[1]), skipNone(lch[2])],
      l = _ref25[0],
      c = _ref25[1],
      h = _ref25[2];
    var s;
    if (l > 99.9999999) {
      s = 0;
      l = 100;
    } else if (l < 0.00000001) {
      s = 0;
      l = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max3 = calcMaxChromaHsluv(lines, h);
      s = c / _max3 * 100;
    }
    return [h, s, l];
  },
  // Convert HSLuv to LCHuv
  toBase: function toBase(hsl) {
    var _ref26 = [skipNone(hsl[0]), skipNone(hsl[1]), skipNone(hsl[2])],
      h = _ref26[0],
      s = _ref26[1],
      l = _ref26[2];
    var c;
    if (l > 99.9999999) {
      l = 100;
      c = 0;
    } else if (l < 0.00000001) {
      l = 0;
      c = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max4 = calcMaxChromaHsluv(lines, h);
      c = _max4 / 100 * s;
    }
    return [l, c, h];
  },
  formats: {
    color: {
      id: "--hsluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});

/*
Adapted from: https://github.com/hsluv/hsluv-javascript/blob/14b49e6cf9a9137916096b8487a5372626b57ba4/src/hsluv.ts

Copyright (c) 2012-2022 Alexei Boronine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

fromXYZ_M$3[0][0];
fromXYZ_M$3[0][1];
fromXYZ_M$3[0][2];
fromXYZ_M$3[1][0];
fromXYZ_M$3[1][1];
fromXYZ_M$3[1][2];
fromXYZ_M$3[2][0];
fromXYZ_M$3[2][1];
fromXYZ_M$3[2][2];
function distanceFromOrigin(slope, intercept) {
  return Math.abs(intercept) / Math.sqrt(Math.pow(slope, 2) + 1);
}
function calcMaxChromaHpluv(lines) {
  var r0 = distanceFromOrigin(lines.r0s, lines.r0i);
  var r1 = distanceFromOrigin(lines.r1s, lines.r1i);
  var g0 = distanceFromOrigin(lines.g0s, lines.g0i);
  var g1 = distanceFromOrigin(lines.g1s, lines.g1i);
  var b0 = distanceFromOrigin(lines.b0s, lines.b0i);
  var b1 = distanceFromOrigin(lines.b1s, lines.b1i);
  return Math.min(r0, r1, g0, g1, b0, b1);
}
var hpluv = new ColorSpace({
  id: "hpluv",
  name: "HPLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: LCHuv,
  gamutSpace: "self",
  // Convert LCHuv to HPLuv
  fromBase: function fromBase(lch) {
    var _ref27 = [skipNone(lch[0]), skipNone(lch[1]), skipNone(lch[2])],
      l = _ref27[0],
      c = _ref27[1],
      h = _ref27[2];
    var s;
    if (l > 99.9999999) {
      s = 0;
      l = 100;
    } else if (l < 0.00000001) {
      s = 0;
      l = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max5 = calcMaxChromaHpluv(lines);
      s = c / _max5 * 100;
    }
    return [h, s, l];
  },
  // Convert HPLuv to LCHuv
  toBase: function toBase(hsl) {
    var _ref28 = [skipNone(hsl[0]), skipNone(hsl[1]), skipNone(hsl[2])],
      h = _ref28[0],
      s = _ref28[1],
      l = _ref28[2];
    var c;
    if (l > 99.9999999) {
      l = 100;
      c = 0;
    } else if (l < 0.00000001) {
      l = 0;
      c = 0;
    } else {
      var lines = calculateBoundingLines(l);
      var _max6 = calcMaxChromaHpluv(lines);
      c = _max6 / 100 * s;
    }
    return [l, c, h];
  },
  formats: {
    color: {
      id: "--hpluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
});
var Yw = 203; // absolute luminance of media white, cd/m²
var n = 2610 / Math.pow(2, 14);
var ninv = Math.pow(2, 14) / 2610;
var m = 2523 / Math.pow(2, 5);
var minv = Math.pow(2, 5) / 2523;
var c1 = 3424 / Math.pow(2, 12);
var c2 = 2413 / Math.pow(2, 7);
var c3 = 2392 / Math.pow(2, 7);
var rec2100Pq = new RGBColorSpace({
  id: "rec2100pq",
  cssId: "rec2100-pq",
  name: "REC.2100-PQ",
  base: REC2020Linear,
  toBase: function toBase(RGB) {
    // given PQ encoded component in range [0, 1]
    // return media-white relative linear-light
    return RGB.map(function (val) {
      var x = Math.pow(Math.max(Math.pow(val, minv) - c1, 0) / (c2 - c3 * Math.pow(val, minv)), ninv);
      return x * 10000 / Yw; // luminance relative to diffuse white, [0, 70 or so].
    });
  },
  fromBase: function fromBase(RGB) {
    // given media-white relative linear-light
    // returnPQ encoded component in range [0, 1]
    return RGB.map(function (val) {
      var x = Math.max(val * Yw / 10000, 0); // absolute luminance of peak white is 10,000 cd/m².
      var num = c1 + c2 * Math.pow(x, n);
      var denom = 1 + c3 * Math.pow(x, n);
      return Math.pow(num / denom, m);
    });
  }
});

// FIXME see https://github.com/LeaVerou/color.js/issues/190

var a = 0.17883277;
var b = 0.28466892; // 1 - (4 * a)
var c = 0.55991073; // 0.5 - a * Math.log(4 *a)

var scale = 3.7743; // Place 18% grey at HLG 0.38, so media white at 0.75

var rec2100Hlg = new RGBColorSpace({
  id: "rec2100hlg",
  cssId: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: REC2020Linear,
  toBase: function toBase(RGB) {
    // given HLG encoded component in range [0, 1]
    // return media-white relative linear-light
    return RGB.map(function (val) {
      // first the HLG EOTF
      // ITU-R BT.2390-10 p.30 section
      // 6.3 The hybrid log-gamma electro-optical transfer function (EOTF)
      // Then scale by 3 so media white is 1.0
      if (val <= 0.5) {
        return Math.pow(val, 2) / 3 * scale;
      }
      return (Math.exp((val - c) / a) + b) / 12 * scale;
    });
  },
  fromBase: function fromBase(RGB) {
    // given media-white relative linear-light
    // where diffuse white is 1.0,
    // return HLG encoded component in range [0, 1]
    return RGB.map(function (val) {
      // first scale to put linear-light media white at 1/3
      val /= scale;
      // now the HLG OETF
      // ITU-R BT.2390-10 p.23
      // 6.1 The hybrid log-gamma opto-electronic transfer function (OETF)
      if (val <= 1 / 12) {
        return Math.sqrt(3 * val);
      }
      return a * Math.log(12 * val - b) + c;
    });
  }
});
var CATs = {};
hooks.add("chromatic-adaptation-start", function (env) {
  if (env.options.method) {
    env.M = adapt(env.W1, env.W2, env.options.method);
  }
});
hooks.add("chromatic-adaptation-end", function (env) {
  if (!env.M) {
    env.M = adapt(env.W1, env.W2, env.options.method);
  }
});
function defineCAT(_ref) {
  var id = _ref.id,
    toCone_M = _ref.toCone_M,
    fromCone_M = _ref.fromCone_M;
  // Use id, toCone_M, fromCone_M like variables
  CATs[id] = arguments[0];
}
function adapt(W1, W2) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Bradford";
  // adapt from a source whitepoint or illuminant W1
  // to a destination whitepoint or illuminant W2,
  // using the given chromatic adaptation transform (CAT)
  // debugger;
  var method = CATs[id];
  var _multiplyMatrices5 = multiplyMatrices(method.toCone_M, W1),
    _multiplyMatrices6 = _slicedToArray(_multiplyMatrices5, 3),
    ρs = _multiplyMatrices6[0],
    γs = _multiplyMatrices6[1],
    βs = _multiplyMatrices6[2];
  var _multiplyMatrices7 = multiplyMatrices(method.toCone_M, W2),
    _multiplyMatrices8 = _slicedToArray(_multiplyMatrices7, 3),
    ρd = _multiplyMatrices8[0],
    γd = _multiplyMatrices8[1],
    βd = _multiplyMatrices8[2];

  // all practical illuminants have non-zero XYZ so no division by zero can occur below
  var scale = [[ρd / ρs, 0, 0], [0, γd / γs, 0], [0, 0, βd / βs]];
  // console.log({scale});

  var scaled_cone_M = multiplyMatrices(scale, method.toCone_M);
  var adapt_M = multiplyMatrices(method.fromCone_M, scaled_cone_M);
  // console.log({scaled_cone_M, adapt_M});
  return adapt_M;
}
defineCAT({
  id: "von Kries",
  toCone_M: [[0.4002400, 0.7076000, -0.0808100], [-0.2263000, 1.1653200, 0.0457000], [0.0000000, 0.0000000, 0.9182200]],
  fromCone_M: [[1.8599363874558397, -1.1293816185800916, 0.21989740959619328], [0.3611914362417676, 0.6388124632850422, -0.000006370596838649899], [0, 0, 1.0890636230968613]]
});
defineCAT({
  id: "Bradford",
  // Convert an array of XYZ values in the range 0.0 - 1.0
  // to cone fundamentals
  toCone_M: [[0.8951000, 0.2664000, -0.1614000], [-0.7502000, 1.7135000, 0.0367000], [0.0389000, -0.0685000, 1.0296000]],
  // and back
  fromCone_M: [[0.9869929054667121, -0.14705425642099013, 0.15996265166373122], [0.4323052697233945, 0.5183602715367774, 0.049291228212855594], [-0.00852866457517732, 0.04004282165408486, 0.96848669578755]]
});
defineCAT({
  id: "CAT02",
  // with complete chromatic adaptation to W2, so D = 1.0
  toCone_M: [[0.7328000, 0.4296000, -0.1624000], [-0.7036000, 1.6975000, 0.0061000], [0.0030000, 0.0136000, 0.9834000]],
  fromCone_M: [[1.0961238208355142, -0.27886900021828726, 0.18274517938277307], [0.4543690419753592, 0.4735331543074117, 0.07209780371722911], [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427]]
});
defineCAT({
  id: "CAT16",
  toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-0.002079, 0.048952, 0.953127]],
  // the extra precision is needed to avoid roundtripping errors
  fromCone_M: [[1.862067855087233, -1.0112546305316845, 0.14918677544445172], [0.3875265432361372, 0.6214474419314753, -0.008973985167612521], [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496]]
});
Object.assign(WHITES, {
  // whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
  // all normalized to Y (luminance) = 1.00000
  // Illuminant A is a tungsten electric light, giving a very warm, orange light.
  A: [1.09850, 1.00000, 0.35585],
  // Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
  C: [0.98074, 1.000000, 1.18232],
  // The daylight series of illuminants simulate natural daylight.
  // The color temperature (in degrees Kelvin/100) ranges from
  // cool, overcast daylight (D50) to bright, direct sunlight (D65).
  D55: [0.95682, 1.00000, 0.92149],
  D75: [0.94972, 1.00000, 1.22638],
  // Equal-energy illuminant, used in two-stage CAT16
  E: [1.00000, 1.00000, 1.00000],
  // The F series of illuminants represent fluorescent lights
  F2: [0.99186, 1.00000, 0.67393],
  F7: [0.95041, 1.00000, 1.08747],
  F11: [1.00962, 1.00000, 0.64350]
});

// The ACES whitepoint
// see TB-2018-001 Derivation of the ACES White Point CIE Chromaticity Coordinates
// also https://github.com/ampas/aces-dev/blob/master/documents/python/TB-2018-001/aces_wp.py
// Similar to D60
WHITES.ACES = [0.32168 / 0.33767, 1.00000, (1.00000 - 0.32168 - 0.33767) / 0.33767];

// convert an array of linear-light ACEScc values to CIE XYZ
var toXYZ_M = [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]];
var fromXYZ_M = [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]];
var ACEScg = new RGBColorSpace({
  id: "acescg",
  cssId: "--acescg",
  name: "ACEScg",
  // ACEScg – A scene-referred, linear-light encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescg/
  // uses the AP1 primaries, see section 4.3.1 Color primaries
  coords: {
    r: {
      range: [0, 65504],
      name: "Red"
    },
    g: {
      range: [0, 65504],
      name: "Green"
    },
    b: {
      range: [0, 65504],
      name: "Blue"
    }
  },
  referred: "scene",
  white: WHITES.ACES,
  toXYZ_M: toXYZ_M,
  fromXYZ_M: fromXYZ_M
});

// export default Color;

var ε = Math.pow(2, -16);

// the smallest value which, in the 32bit IEEE 754 float encoding,
// decodes as a non-negative value
var ACES_min_nonzero = -0.35828683;

// brightest encoded value, decodes to 65504
var ACES_cc_max = (Math.log2(65504) + 9.72) / 17.52; // 1.468

var acescc = new RGBColorSpace({
  id: "acescc",
  cssId: "--acescc",
  name: "ACEScc",
  // see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescc/
  // uses the AP1 primaries, see section 4.3.1 Color primaries

  // Appendix A: "Very small ACES scene referred values below 7 1/4 stops
  // below 18% middle gray are encoded as negative ACEScc values.
  // These values should be preserved per the encoding in Section 4.4
  // so that all positive ACES values are maintained."
  coords: {
    r: {
      range: [ACES_min_nonzero, ACES_cc_max],
      name: "Red"
    },
    g: {
      range: [ACES_min_nonzero, ACES_cc_max],
      name: "Green"
    },
    b: {
      range: [ACES_min_nonzero, ACES_cc_max],
      name: "Blue"
    }
  },
  referred: "scene",
  base: ACEScg,
  // from section 4.4.2 Decoding Function
  toBase: function toBase(RGB) {
    var low = (9.72 - 15) / 17.52; // -0.3014

    return RGB.map(function (val) {
      if (val <= low) {
        return (Math.pow(2, val * 17.52 - 9.72) - ε) * 2; // very low values, below -0.3014
      } else if (val < ACES_cc_max) {
        return Math.pow(2, val * 17.52 - 9.72);
      } else {
        // val >= ACES_cc_max
        return 65504;
      }
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase: function fromBase(RGB) {
    return RGB.map(function (val) {
      if (val <= 0) {
        return (Math.log2(ε) + 9.72) / 17.52; // -0.3584
      } else if (val < ε) {
        return (Math.log2(ε + val * 0.5) + 9.72) / 17.52;
      } else {
        // val >= ε
        return (Math.log2(val) + 9.72) / 17.52;
      }
    });
  } // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
});
var spaces = /*#__PURE__*/Object.freeze({
  __proto__: null,
  A98RGB: a98rgb,
  A98RGB_Linear: A98Linear,
  ACEScc: acescc,
  ACEScg: ACEScg,
  CAM16_JMh: cam16,
  HCT: hct,
  HPLuv: hpluv,
  HSL: HSL,
  HSLuv: hsluv,
  HSV: HSV,
  HWB: hwb,
  ICTCP: ictcp,
  JzCzHz: jzczhz,
  Jzazbz: Jzazbz,
  LCH: lch,
  LCHuv: LCHuv,
  Lab: lab,
  Lab_D65: lab_d65,
  Luv: Luv,
  OKLCH: oklch,
  OKLab: OKLab,
  P3: P3,
  P3_Linear: P3Linear,
  ProPhoto: prophoto,
  ProPhoto_Linear: ProPhotoLinear,
  REC_2020: REC2020,
  REC_2020_Linear: REC2020Linear,
  REC_2100_HLG: rec2100Hlg,
  REC_2100_PQ: rec2100Pq,
  XYZ_ABS_D65: XYZ_Abs_D65,
  XYZ_D50: XYZ_D50,
  XYZ_D65: xyz_d65,
  sRGB: sRGB,
  sRGB_Linear: sRGBLinear
});

/**
 * Class that represents a color
 */
var Color = exports["default"] = /*#__PURE__*/function () {
  /**
   * Creates an instance of Color.
   * Signatures:
   * - `new Color(stringToParse)`
   * - `new Color(otherColor)`
   * - `new Color({space, coords, alpha})`
   * - `new Color(space, coords, alpha)`
   * - `new Color(spaceId, coords, alpha)`
   */
  function Color() {
    var _this2 = this;
    _classCallCheck(this, Color);
    var color;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1) {
      color = getColor(args[0]);
    }
    var space, coords, alpha;
    if (color) {
      space = color.space || color.spaceId;
      coords = color.coords;
      alpha = color.alpha;
    } else {
      // default signature new Color(ColorSpace, array [, alpha])
      space = args[0];
      coords = args[1];
      alpha = args[2];
    }
    Object.defineProperty(this, "space", {
      value: ColorSpace.get(space),
      writable: false,
      enumerable: true,
      configurable: true // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
    });
    this.coords = coords ? coords.slice() : [0, 0, 0];

    // Clamp alpha to [0, 1]
    this.alpha = alpha > 1 || alpha === undefined ? 1 : alpha < 0 ? 0 : alpha;

    // Convert "NaN" to NaN
    for (var i = 0; i < this.coords.length; i++) {
      if (this.coords[i] === "NaN") {
        this.coords[i] = NaN;
      }
    }

    // Define getters and setters for each coordinate
    var _loop = function _loop(id) {
      Object.defineProperty(_this2, id, {
        get: function get() {
          return _this2.get(id);
        },
        set: function set(value) {
          return _this2.set(id, value);
        }
      });
    };
    for (var id in this.space.coords) {
      _loop(id);
    }
  }
  return _createClass(Color, [{
    key: "spaceId",
    get: function get() {
      return this.space.id;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Color(this.space, this.coords, this.alpha);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        spaceId: this.spaceId,
        coords: this.coords,
        alpha: this.alpha
      };
    }
  }, {
    key: "display",
    value: function display() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      var ret = _display.apply(void 0, [this].concat(args));

      // Convert color object to Color instance
      ret.color = new Color(ret.color);
      return ret;
    }

    /**
     * Get a color from the argument passed
     * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
     */
  }], [{
    key: "get",
    value: function get(color) {
      if (color instanceof Color) {
        return color;
      }
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return _construct(Color, [color].concat(args));
    }
  }, {
    key: "defineFunction",
    value: function defineFunction(name, code) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : code;
      var _o$instance = o.instance,
        instance = _o$instance === void 0 ? true : _o$instance,
        returns = o.returns;
      var func = function func() {
        var ret = code.apply(void 0, arguments);
        if (returns === "color") {
          ret = Color.get(ret);
        } else if (returns === "function<color>") {
          var f = ret;
          ret = function ret() {
            var ret = f.apply(void 0, arguments);
            return Color.get(ret);
          };
          // Copy any function metadata
          Object.assign(ret, f);
        } else if (returns === "array<color>") {
          ret = ret.map(function (c) {
            return Color.get(c);
          });
        }
        return ret;
      };
      if (!(name in Color)) {
        Color[name] = func;
      }
      if (instance) {
        Color.prototype[name] = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return func.apply(void 0, [this].concat(args));
        };
      }
    }
  }, {
    key: "defineFunctions",
    value: function defineFunctions(o) {
      for (var name in o) {
        Color.defineFunction(name, o[name], o[name]);
      }
    }
  }, {
    key: "extend",
    value: function extend(exports) {
      if (exports.register) {
        exports.register(Color);
      } else {
        // No register method, just add the module's functions
        for (var name in exports) {
          Color.defineFunction(name, exports[name]);
        }
      }
    }
  }]);
}();
Color.defineFunctions({
  get: get,
  getAll: getAll,
  set: set,
  setAll: setAll,
  to: to,
  equals: equals,
  inGamut: inGamut,
  toGamut: toGamut,
  distance: distance,
  toString: serialize
});
Object.assign(Color, {
  util: util,
  hooks: hooks,
  WHITES: WHITES,
  Space: ColorSpace,
  spaces: ColorSpace.registry,
  parse: parse,
  // Global defaults one may want to configure
  defaults: defaults
});
for (var _i4 = 0, _Object$keys = Object.keys(spaces); _i4 < _Object$keys.length; _i4++) {
  var key = _Object$keys[_i4];
  ColorSpace.register(spaces[key]);
}
var es_reflect_toStringTag = {};
var setToStringTag;
var hasRequiredSetToStringTag;
function requireSetToStringTag() {
  if (hasRequiredSetToStringTag) return setToStringTag;
  hasRequiredSetToStringTag = 1;
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  setToStringTag = function setToStringTag(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };
  return setToStringTag;
}
var hasRequiredEs_reflect_toStringTag;
function requireEs_reflect_toStringTag() {
  if (hasRequiredEs_reflect_toStringTag) return es_reflect_toStringTag;
  hasRequiredEs_reflect_toStringTag = 1;
  var $ = require_export();
  var global = requireGlobal();
  var setToStringTag = requireSetToStringTag();
  $({
    global: true
  }, {
    Reflect: {}
  });

  // Reflect[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-reflect-@@tostringtag
  setToStringTag(global.Reflect, 'Reflect', true);
  return es_reflect_toStringTag;
}
requireEs_reflect_toStringTag();

// Add space accessors to existing color spaces
for (var id in ColorSpace.registry) {
  addSpaceAccessors(id, ColorSpace.registry[id]);
}

// Add space accessors to color spaces not yet created
hooks.add("colorspace-init-end", function (space) {
  var _space$aliases;
  addSpaceAccessors(space.id, space);
  (_space$aliases = space.aliases) === null || _space$aliases === void 0 || _space$aliases.forEach(function (alias) {
    addSpaceAccessors(alias, space);
  });
});
function addSpaceAccessors(id, space) {
  var propId = id.replace(/-/g, "_");
  Object.defineProperty(Color.prototype, propId, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get: function get() {
      var _this3 = this;
      var ret = this.getAll(id);
      if (typeof Proxy === "undefined") {
        // If proxies are not supported, just return a static array
        return ret;
      }

      // Enable color.spaceId.coordName syntax
      return new Proxy(ret, {
        has: function has(obj, property) {
          try {
            ColorSpace.resolveCoord([space, property]);
            return true;
          } catch (e) {}
          return Reflect.has(obj, property);
        },
        get: function get(obj, property, receiver) {
          if (property && _typeof(property) !== "symbol" && !(property in obj)) {
            var _ColorSpace$resolveCo3 = ColorSpace.resolveCoord([space, property]),
              index = _ColorSpace$resolveCo3.index;
            if (index >= 0) {
              return obj[index];
            }
          }
          return Reflect.get(obj, property, receiver);
        },
        set: function set(obj, property, value, receiver) {
          if (property && _typeof(property) !== "symbol" && !(property in obj) || property >= 0) {
            var _ColorSpace$resolveCo4 = ColorSpace.resolveCoord([space, property]),
              index = _ColorSpace$resolveCo4.index;
            if (index >= 0) {
              obj[index] = value;

              // Update color.coords
              _this3.setAll(id, obj);
              return true;
            }
          }
          return Reflect.set(obj, property, value, receiver);
        }
      });
    },
    // Convert coords in another colorspace to internal coords and set them
    // Target colorspace: this.spaceId
    // Source colorspace: id
    set: function set(coords) {
      this.setAll(id, coords);
    },
    configurable: true,
    enumerable: true
  });
}

// Import all modules of Color.js
Color.extend(deltaEMethods);
Color.extend({
  deltaE: deltaE
});
Object.assign(Color, {
  deltaEMethods: deltaEMethods
});
Color.extend(variations);
Color.extend({
  contrast: contrast
});
Color.extend(chromaticity);
Color.extend(luminance);
Color.extend(interpolation);
Color.extend(contrastMethods);
