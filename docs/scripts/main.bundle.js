/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(19));
__export(__webpack_require__(8));
__export(__webpack_require__(23));
__export(__webpack_require__(25));
__export(__webpack_require__(17));
__export(__webpack_require__(24));
__export(__webpack_require__(35));
__export(__webpack_require__(58));
__export(__webpack_require__(26));
__export(__webpack_require__(60));
__export(__webpack_require__(30));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var StackScene = (function (_super) {
    __extends(StackScene, _super);
    function StackScene(_parentScene) {
        var _this = _super.call(this) || this;
        _this._parentScene = _parentScene;
        return _this;
    }
    Object.defineProperty(StackScene.prototype, "parentScene", {
        get: function () {
            return this._parentScene;
        },
        enumerable: true,
        configurable: true
    });
    StackScene.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (evt.type === 'keyPressed' && evt.code === 'Escape' && !!this.parentScene) {
            this.game.changeScene(this.parentScene);
            return true;
        }
        return false;
    };
    return StackScene;
}(engine_1.GameScene));
exports.StackScene = StackScene;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53), __webpack_require__(54)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function degToRad(deg) {
    return (deg / 180) * Math.PI;
}
exports.degToRad = degToRad;
function radToDeg(rad) {
    return (rad / Math.PI) * 180;
}
exports.radToDeg = radToDeg;
function clamp(value, lowerBound, upperBound) {
    if (lowerBound > upperBound) {
        throw new Error("Attempting to clamp with a lower bound greater than the upper bound");
    }
    if (value < lowerBound)
        value = lowerBound;
    else if (value > upperBound)
        value = upperBound;
    return value;
}
exports.clamp = clamp;
function fmod(a, b) {
    return +(a - (Math.floor(a / b) * b)).toPrecision(8);
}
exports.fmod = fmod;
function pointDirection(x1, y1, x2, y2) {
    var xdiff = x2 - x1, ydiff = y2 - y1;
    return fmod(radToDeg(Math.atan2(-ydiff, xdiff)), 360);
}
exports.pointDirection = pointDirection;
function pointDistance2(x1, y1, x2, y2) {
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
}
exports.pointDistance2 = pointDistance2;
function pointDistance(x1, y1, x2, y2) {
    return Math.sqrt(pointDistance2(x1, y1, x2, y2));
}
exports.pointDistance = pointDistance;
//# sourceMappingURL=math.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var BallObject = (function (_super) {
    __extends(BallObject, _super);
    function BallObject(name, opts) {
        var _this = _super.call(this, name, opts) || this;
        _this._radius = opts.radius;
        _this._color = opts.color;
        _this._openWorld = opts.openWorld || false;
        _this.mask = new engine_1.CircleCollisionMask(_this, _this._radius);
        return _this;
    }
    Object.defineProperty(BallObject.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (val) {
            this._radius = val;
            var mask = this.mask;
            mask.radius = this._radius;
            mask.mass = Math.PI * this.radius * this.radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BallObject.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (val) {
            this._color = val;
        },
        enumerable: true,
        configurable: true
    });
    BallObject.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (evt.type === 'keyTyped' && evt.code === 'Enter' && !this.mask.updatePositions)
            this.mask.updatePositions = 'once';
        return false;
    };
    BallObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        if (!this._openWorld && (this.hspeed !== 0 || this.vspeed !== 0)) {
            var bounds = this.scene.camera.bounds;
            if (this.y + this._radius > bounds.top) {
                this.y = bounds.top - this._radius;
                if (this.vspeed > 0)
                    this.vspeed *= -.8;
            }
            if (this.x + this._radius > bounds.right) {
                this.x = bounds.right - this._radius;
                if (this.hspeed > 0)
                    this.hspeed *= -1;
            }
            if (this.x - this._radius < bounds.left) {
                this.x = bounds.left + this._radius;
                if (this.hspeed < 0)
                    this.hspeed *= -1;
            }
        }
    };
    BallObject.prototype.renderImpl = function (adapter) {
        if (adapter.context instanceof CanvasRenderingContext2D)
            this.renderImplContext2d(adapter.context);
        else
            throw new Error("Not implemented!");
    };
    BallObject.prototype.renderImplContext2d = function (context) {
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        context.fillStyle = this._color;
        context.beginPath();
        context.ellipse(0, 0, this._radius, this._radius, 0, 0, 2 * Math.PI);
        context.fill();
    };
    return BallObject;
}(engine_1.GameObject));
exports.BallObject = BallObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var boulder_1 = __webpack_require__(12);
var bowling_ball_1 = __webpack_require__(13);
var golf_ball_1 = __webpack_require__(14);
var PhysicsControllerObject = (function (_super) {
    __extends(PhysicsControllerObject, _super);
    function PhysicsControllerObject(message, updatePositions) {
        if (updatePositions === void 0) { updatePositions = false; }
        var _this = _super.call(this, 'PhysicsController', {
            renderCamera: 'none'
        }) || this;
        _this.message = message;
        _this.updatePositions = updatePositions;
        _this.createMore = true;
        _this.displayPreserveMass = false;
        _this.preserveMomentum = true;
        _this.dragForce = null;
        return _this;
    }
    PhysicsControllerObject.prototype.addToScene = function (scene) {
        _super.prototype.addToScene.call(this, scene);
        this.game.renderPhysics = true;
    };
    PhysicsControllerObject.prototype.handleEvent = function (evt) {
        if (evt.type === 'keyPressed' && evt.code === 'F3') {
            this.game.renderPhysics = !this.game.renderPhysics;
            return true;
        }
        else if (evt.type === 'keyPressed' && evt.code === 'KeyP') {
            this.preserveMomentum = !this.preserveMomentum;
            return true;
        }
        else if (this.createMore && evt.type === 'mouseButtonPressed' && evt.button === engine_1.MouseButton.Left) {
            var chance = Math.floor(Math.random() * 3);
            var obj = chance === 0 ? new boulder_1.BoulderObject() :
                chance === 1 ? new bowling_ball_1.BowlingBallObject() :
                    new golf_ball_1.GolfBallObject();
            obj.mask.updatePositions = this.updatePositions;
            var mousePos = this.events.mousePosition;
            _a = this.scene.camera.transformPixelCoordinates(mousePos.x, mousePos.y), obj.x = _a[0], obj.y = _a[1];
            this.scene.addObject(obj);
            return true;
        }
        else if (evt.type === 'keyPressed' && evt.code === 'KeyD' && this.dragForce) {
            this.dragForce.enabled = !this.dragForce.enabled;
            return true;
        }
        else if (evt.type === 'keyPressed' && evt.code === 'KeyL' && this.dragForce) {
            this.dragForce.k1 = engine_1.clamp(+window.prompt("Enter the new low speed"), 0, 20);
            return true;
        }
        else if (evt.type === 'keyPressed' && evt.code === 'KeyH' && this.dragForce) {
            this.dragForce.k2 = engine_1.clamp(+window.prompt("Enter the new high speed"), 0, 30);
            return true;
        }
        return false;
        var _a;
    };
    PhysicsControllerObject.prototype.render = function (adapter) {
        if (adapter.context instanceof CanvasRenderingContext2D)
            this.renderContext2d(adapter.context);
        else
            throw new Error('Not implemented');
    };
    PhysicsControllerObject.prototype.renderContext2d = function (context) {
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        context.fillStyle = 'white';
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.font = '20px Cambria';
        engine_1.fillText(context, this.message, 20, 20);
        context.fillStyle = 'white';
        context.textAlign = 'right';
        context.textBaseline = 'top';
        context.font = '20px Cambria';
        var yy = 20;
        if (this.displayPreserveMass) {
            engine_1.fillText(context, "Preserve momentum: " + (this.preserveMomentum ? 'Enabled' : 'Disabled'), canvasWidth - 20, yy);
            yy += 30;
        }
        if (this.dragForce) {
            engine_1.fillText(context, "Drag (D): " + (this.dragForce.enabled ? 'Enabled' : 'Disabled'), canvasWidth - 20, yy);
            yy += 30;
            engine_1.fillText(context, "Drag lowSpeed (L): " + this.dragForce.k1, canvasWidth - 20, yy);
            yy += 30;
            engine_1.fillText(context, "Drag highSpeed (H): " + this.dragForce.k2, canvasWidth - 20, yy);
            yy += 30;
        }
    };
    return PhysicsControllerObject;
}(engine_1.GameObject));
exports.PhysicsControllerObject = PhysicsControllerObject;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var BallSelectObject = (function (_super) {
    __extends(BallSelectObject, _super);
    function BallSelectObject(opts) {
        var _this = _super.call(this, 'Ball', merge(opts, {
            color: 'white',
            radius: 10 + Math.floor(Math.random() * 86)
        })) || this;
        _this.moving = false;
        _this.controlSpring = null;
        _this.refreshColor();
        return _this;
    }
    BallSelectObject.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (evt.type === 'mouseButtonPressed' && evt.button === engine_1.MouseButton.Left) {
            var clickPos = this.scene.camera.transformPixelCoordinates(evt.pageX, evt.pageY);
            if (engine_1.pointDistance2(this.x, this.y, clickPos[0], clickPos[1]) <= Math.pow(this.radius, 2)) {
                this.clickPos = [clickPos[0] - this.x, clickPos[1] - this.y];
                BallSelectObject.currentSelection = this;
                this.moving = true;
                return true;
            }
            else if (BallSelectObject.currentSelection === this) {
                BallSelectObject.currentSelection = null;
                return false;
            }
        }
        else if (evt.type === 'mouseButtonReleased' && evt.button === engine_1.MouseButton.Left) {
            this.moving = false;
        }
        else if (BallSelectObject.currentSelection === this) {
            if (evt.type === 'mouseWheel') {
                var delta = (evt.delta > 0 ? -1 : 1) * 4;
                if (this.controlSpring) {
                    if (this.events.isKeyDown('KeyL')) {
                        this.controlSpring.restLength = engine_1.clamp(this.controlSpring.restLength + delta, 10, 300);
                        return true;
                    }
                    else if (this.events.isKeyDown('KeyS')) {
                        this.controlSpring.springConstant = engine_1.clamp(this.controlSpring.springConstant + delta, 5, 100);
                        return true;
                    }
                }
                var oldMass = this.mask.mass;
                this.radius = engine_1.clamp(this.radius + delta, 10, 96);
                var newMass = this.mask.mass;
                var preserveMomentum = this.scene.findObject('PhysicsController').preserveMomentum;
                if (preserveMomentum)
                    this.speed = (this.speed / newMass) * oldMass;
                this.refreshColor();
                return true;
            }
        }
        else if (evt.type === 'mouseButtonPressed' && evt.button === engine_1.MouseButton.Right) {
            BallSelectObject.paused = true;
        }
        else if (evt.type === 'mouseButtonReleased' && evt.button === engine_1.MouseButton.Right) {
            BallSelectObject.paused = false;
        }
        return false;
    };
    BallSelectObject.prototype.refreshColor = function () {
        var cc = 280 - Math.ceil(this.radius * 2.5);
        this.color = "rgb(" + cc + ", " + cc + ", " + cc + ")";
    };
    BallSelectObject.prototype.tick = function (delta) {
        if (this.moving) {
            var mousePos = this.events.mousePosition;
            var _a = this.scene.camera.transformPixelCoordinates(mousePos.x, mousePos.y), cmpx = _a[0], cmpy = _a[1];
            _b = [cmpx - this.clickPos[0], cmpy - this.clickPos[1]], this.x = _b[0], this.y = _b[1];
        }
        if (BallSelectObject.paused) {
            if (typeof this.pausehspeed === 'undefined') {
                this.pausehspeed = this.hspeed;
                this.pausevspeed = this.vspeed;
            }
            else {
                _c = [this.pausehspeed, this.pausevspeed], this.hspeed = _c[0], this.vspeed = _c[1];
            }
            if (this.events.isKeyDown('KeyA') || BallSelectObject.currentSelection === this) {
                var bounds = this.scene.camera.bounds;
                var mc = this.events.mousePosition;
                var mpc = this.scene.camera.transformPixelCoordinates(mc.x, mc.y);
                _d = (_e = [(mpc[0] - this.x) * 2, (mpc[1] - this.y) * 2], this.hspeed = _e[0], this.vspeed = _e[1], _e), this.pausehspeed = _d[0], this.pausevspeed = _d[1];
            }
            return;
        }
        else {
            delete this.pausehspeed;
            delete this.pausevspeed;
        }
        _super.prototype.tick.call(this, delta);
        var _b, _c, _e, _d;
    };
    BallSelectObject.prototype.renderImplContext2d = function (context) {
        _super.prototype.renderImplContext2d.call(this, context);
        if (this.game.renderPhysics) {
            context.save();
            context.rotate(-engine_1.degToRad(this.direction + 90));
            context.lineCap = 'arrow';
            context.lineWidth = 3;
            context.strokeStyle = 'green';
            context.beginPath();
            context.moveTo(3, 0);
            context.lineTo(3, this.speed * .5);
            context.stroke();
            context.strokeStyle = 'red';
            context.beginPath();
            context.moveTo(-3, 0);
            context.lineTo(-3, this.speed * .0001 * this.mask.mass);
            context.stroke();
            context.restore();
        }
        if (BallSelectObject.currentSelection === this) {
            context.strokeStyle = 'rgba(0, 0, 255, .4)';
            context.lineWidth = 6;
            context.beginPath();
            context.ellipse(0, 0, this.radius + 4, this.radius + 4, 0, 0, 2 * Math.PI);
            context.stroke();
            if (this.controlSpring) {
                context.fillStyle = 'white';
                context.font = '12pt Cambria';
                context.textBaseline = 'bottom';
                context.textAlign = 'left';
                context.fillText("spring.restLength: " + this.controlSpring.restLength, this.radius * .9, (-this.radius * .9) - 20);
                context.fillText("spring.springConstant: " + this.controlSpring.springConstant, this.radius * .9, -this.radius * .9);
            }
        }
    };
    BallSelectObject.paused = false;
    return BallSelectObject;
}(ball_1.BallObject));
exports.BallSelectObject = BallSelectObject;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ForceGenerator = (function () {
    function ForceGenerator() {
    }
    ForceGenerator.prototype.render = function (collider, context) { };
    return ForceGenerator;
}());
exports.ForceGenerator = ForceGenerator;
//# sourceMappingURL=force-generator.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(3);
var Camera = (function () {
    function Camera(_scene) {
        this._scene = _scene;
        this._clearColor = null;
        this._center = [0, 0];
        this._floorCenterPosition = true;
        this._zoomScale = 1;
        this._maxZoomScale = 4;
        this._minZoomScale = .25;
        this.renderTransformedSymbol = Symbol();
        if (!this._scene)
            throw new Error("You must pass in a valid Scene when you create a Camera.");
    }
    Object.defineProperty(Camera.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "game", {
        get: function () {
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "clearColor", {
        get: function () {
            return this._clearColor;
        },
        set: function (val) {
            this._clearColor = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "center", {
        get: function () {
            return [this._center[0], this._center[1]];
        },
        set: function (_a) {
            var x = _a[0], y = _a[1];
            this._center = [x, y];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "floorCenterPosition", {
        get: function () {
            return this._floorCenterPosition;
        },
        set: function (val) {
            this._floorCenterPosition = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "zoomScale", {
        get: function () {
            return this._zoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The zoom scale must be positive");
            this._zoomScale = math_1.clamp(val, this.minZoomScale, this.maxZoomScale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "maxZoomScale", {
        get: function () {
            return this._maxZoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The max zoom scale must be positive");
            if (val < this._minZoomScale)
                throw new Error("The min zoom scale is greater than the max zoom scale.");
            this._maxZoomScale = val;
            this.zoomScale = this.zoomScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "minZoomScale", {
        get: function () {
            return this._minZoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The min zoom scale must be positive");
            if (val > this._maxZoomScale)
                throw new Error("The max zoom scale is less than the min zoom scale.");
            this._minZoomScale = val;
            this.zoomScale = this.zoomScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "bounds", {
        get: function () {
            return this.calculateBounds(this.center, this.zoomScale);
        },
        enumerable: true,
        configurable: true
    });
    Camera.prototype.calculateBounds = function (center, zoomScale) {
        var _a = this.game.canvasSize, cvWidth = _a[0], cvHeight = _a[1];
        var _b = [(cvWidth / 2) / zoomScale, (cvHeight / 2) / zoomScale], hoff = _b[0], voff = _b[1];
        return {
            left: center[0] - hoff,
            right: center[0] + hoff,
            top: center[1] + voff,
            bottom: center[1] - voff
        };
    };
    Camera.prototype.tick = function (delta) { };
    Camera.prototype.fixedTick = function () { };
    Camera.prototype.clear = function (adapter) {
        if (this._clearColor)
            adapter.clear(this._clearColor);
    };
    Camera.prototype.renderTransformed = function (adapter, act) {
        var _a = this._center, tx = _a[0], ty = _a[1];
        if (this.floorCenterPosition) {
            tx = Math.floor(tx);
            ty = Math.floor(ty);
        }
        var _b = this.game.canvasSize, cvWidth = _b[0], cvHeight = _b[1];
        tx = Math.floor(cvWidth / 2) - (tx * this._zoomScale);
        ty = Math.floor(cvHeight / 2) - (ty * this._zoomScale);
        adapter.renderTransformed(tx, ty, 0, this._zoomScale, this._zoomScale, act, this.renderTransformedSymbol);
    };
    Camera.prototype.transformPixelCoordinates = function (x, y) {
        if (typeof x === 'object') {
            y = x.y;
            x = x.x;
        }
        var _a = this._center, tx = _a[0], ty = _a[1];
        if (this.floorCenterPosition) {
            tx = Math.floor(tx);
            ty = Math.floor(ty);
        }
        var _b = this.game.canvasSize, cvWidth = _b[0], cvHeight = _b[1];
        tx = Math.floor(cvWidth / 2) - (tx * this._zoomScale);
        ty = Math.floor(cvHeight / 2) - (ty * this._zoomScale);
        return [(x - tx) / this._zoomScale, (y - ty) / this._zoomScale];
    };
    return Camera;
}());
exports.Camera = Camera;
//# sourceMappingURL=camera.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(20);
var graphics_adapter_1 = __webpack_require__(18);
var sprite_1 = __webpack_require__(11);
var math_1 = __webpack_require__(3);
var DefaultGraphicsAdapter = (function (_super) {
    __extends(DefaultGraphicsAdapter, _super);
    function DefaultGraphicsAdapter(_context) {
        if (_context === void 0) { _context = null; }
        var _this = _super.call(this) || this;
        _this._context = _context;
        _this._initialized = false;
        return _this;
    }
    DefaultGraphicsAdapter.prototype.init = function (game) {
        var _this = this;
        if (this._initialized)
            throw new Error("Cannot initialize DefaultGraphicsAdapter twice.");
        this._initialized = true;
        if (this._context)
            throw new Error("This DefaultGraphicsAdapter was created with a context");
        if (!this.canvas)
            this._canvas = document.createElement('canvas');
        this._context = this.canvas.getContext("2d");
        game.bodyResized.addListener(function () {
            _a = [window.innerWidth, window.innerHeight], _this.canvas.width = _a[0], _this.canvas.height = _a[1];
            var _a;
        });
    };
    Object.defineProperty(DefaultGraphicsAdapter.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultGraphicsAdapter.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    DefaultGraphicsAdapter.prototype.clear = function (color) {
        var context = this.context;
        context.fillStyle = color;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    DefaultGraphicsAdapter.prototype.renderResourceLoader = function (resourcesLoaded, totalResources, errors) {
        var context = this.context;
        context.fillStyle = 'grey';
        context.fillRect(0, 0, context.canvas.scrollWidth, context.canvas.scrollHeight);
        if (totalResources > 0) {
            context.fillStyle = 'white';
            context.fillRect(4, 4, 100, 4);
            context.fillStyle = 'black';
            context.fillRect(4, 4, 100 * (resourcesLoaded / totalResources), 4);
        }
        var msg = resourcesLoaded + "/" + totalResources;
        if (errors && errors.length)
            msg += '\n' + errors;
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.fillStyle = 'black';
        render_1.fillText(context, msg, 4, 12);
    };
    DefaultGraphicsAdapter.prototype.renderScene = function (scene) {
        scene.render(this);
    };
    DefaultGraphicsAdapter.prototype.renderObject = function (obj) {
        var context = this.context;
        if (obj.sprite) {
            this.drawSprite(obj.resources, obj.sprite, 0, 0, obj.animationAge);
        }
        else {
            context.fillStyle = 'red';
            context.fillRect(0, 0, 16, 16);
            context.fillStyle = 'white';
            context.font = '16px Consolas';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('?', 0 + 8, 0 + 8);
        }
    };
    DefaultGraphicsAdapter.prototype.renderTransformed = function (translateX, translateY, rotate, scaleX, scaleY, act) {
        var context = this.context;
        context.save();
        try {
            context.translate(translateX, translateY);
            context.rotate(rotate);
            context.scale(scaleX, scaleY);
            act();
        }
        finally {
            context.restore();
        }
    };
    DefaultGraphicsAdapter.prototype.drawSprite = function (loader, sprite, x, y, imageIndex, defaultFps) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (imageIndex === void 0) { imageIndex = 0; }
        if (defaultFps === void 0) { defaultFps = 30; }
        if (!loader || !loader.loadImage)
            throw new Error("You must pass in a valid ResourceLoader to draw a sprite.");
        if (!sprite || !sprite.src)
            throw new Error("Invalid sprite. Cannot render " + sprite + ".");
        var img = loader.loadImage(sprite.src);
        var pivot = sprite.pivot || { x: 0, y: 0 };
        var context = this.context;
        if (sprite_1.isAnimationSprite(sprite)) {
            var tileset = sprite.tileset;
            var frames_1 = sprite.frames;
            var fps = sprite.framesPerSecond;
            if (typeof fps === 'undefined')
                fps = defaultFps;
            var frameIdx = math_1.fmod(Math.floor(imageIndex * fps), frames_1.length);
            var frame = frames_1[frameIdx];
            context.drawImage(img, frame.tilex * tileset.width, frame.tiley * tileset.height, tileset.width, tileset.height, x - pivot.x, y - pivot.y, tileset.width, tileset.height);
        }
        else if (sprite_1.isSingleTileSprite(sprite)) {
            var tileset = sprite.tileset;
            context.drawImage(img, tileset.tilex * tileset.width, tileset.tiley * tileset.height, tileset.width, tileset.height, x - pivot.x, y - pivot.y, tileset.width, tileset.height);
        }
        else {
            context.drawImage(img, x - pivot.x, y - pivot.y, img.width, img.height);
        }
    };
    return DefaultGraphicsAdapter;
}(graphics_adapter_1.GraphicsAdapter));
exports.DefaultGraphicsAdapter = DefaultGraphicsAdapter;
//# sourceMappingURL=default-graphics-adapter.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(3);
var default_graphics_adapter_1 = __webpack_require__(9);
var CollisionMask = (function () {
    function CollisionMask(_gobj) {
        this._gobj = _gobj;
        this._mass = 1;
        this.contacts = [];
        this.collisionImpulseX = 0;
        this.collisionImpulseY = 0;
        this.impulseCount = 0;
        this.forceAccumX = 0;
        this.forceAccumY = 0;
        this.impulseAccumX = 0;
        this.impulseAccumY = 0;
        this._generators = [];
        if (!this._gobj)
            throw new Error("Collision mask created without a game object!");
    }
    Object.defineProperty(CollisionMask.prototype, "gameObject", {
        get: function () {
            return this._gobj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollisionMask.prototype, "mass", {
        get: function () {
            return this._mass;
        },
        set: function (val) {
            this._mass = val;
        },
        enumerable: true,
        configurable: true
    });
    CollisionMask.prototype.clearContacts = function () {
        this.contacts.length = 0;
    };
    CollisionMask.prototype.resolveImpulses = function () {
        if (this.impulseCount == 0)
            return;
        this.addImpulse(this.collisionImpulseX / this.impulseCount, this.collisionImpulseY / this.impulseCount);
        this.collisionImpulseX = this.collisionImpulseY = this.impulseCount = 0;
    };
    CollisionMask.prototype.addForce = function (x, y) {
        this.forceAccumX += x;
        this.forceAccumY += y;
    };
    CollisionMask.prototype.addImpulse = function (x, y) {
        this.impulseAccumX += x;
        this.impulseAccumY += y;
    };
    Object.defineProperty(CollisionMask.prototype, "forceGenerators", {
        get: function () {
            return this._generators;
        },
        enumerable: true,
        configurable: true
    });
    CollisionMask.prototype.addForceGenerator = function (generator) {
        this._generators.push(generator);
    };
    CollisionMask.prototype.removeForceGenerator = function (generator) {
        var idx = this._generators.indexOf(generator);
        if (idx === -1)
            return;
        this._generators.splice(idx, 1);
    };
    CollisionMask.prototype.applyForces = function (delta) {
        for (var _i = 0, _a = this.gameObject.scene.forceGenerators; _i < _a.length; _i++) {
            var generator = _a[_i];
            generator.updateCollider(this, delta);
        }
        for (var _b = 0, _c = this._generators; _b < _c.length; _b++) {
            var generator = _c[_b];
            generator.updateCollider(this, delta);
        }
        this.gameObject.hspeed += this.forceAccumX;
        this.gameObject.vspeed += this.forceAccumY;
        this.gameObject.x += this.impulseAccumX;
        this.gameObject.y += this.impulseAccumY;
        this.forceAccumX = this.forceAccumY = this.impulseAccumX = this.impulseAccumY = 0;
    };
    CollisionMask.prototype.render = function (adapter) {
        if (adapter instanceof default_graphics_adapter_1.DefaultGraphicsAdapter)
            this.renderContext2d(adapter.context);
        else
            throw new Error("Not implemented!");
    };
    CollisionMask.prototype.renderContext2d = function (context) {
        context.save();
        try {
            context.translate(this.gameObject.x, this.gameObject.y);
            context.rotate(-math_1.degToRad(this.gameObject.imageAngle));
            this.renderImpl(context);
        }
        finally {
            context.restore();
        }
        for (var _i = 0, _a = this.forceGenerators; _i < _a.length; _i++) {
            var forceGenerator = _a[_i];
            forceGenerator.render(this, context);
        }
    };
    return CollisionMask;
}());
exports.CollisionMask = CollisionMask;
//# sourceMappingURL=collision-mask.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isSingleTileSprite(sprite) {
    return !!sprite.tileset && !sprite.frames;
}
exports.isSingleTileSprite = isSingleTileSprite;
function isAnimationSprite(sprite) {
    return !!sprite.frames;
}
exports.isAnimationSprite = isAnimationSprite;
//# sourceMappingURL=sprite.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var BOULDER_RADIUS = 128;
var BoulderObject = (function (_super) {
    __extends(BoulderObject, _super);
    function BoulderObject(opts) {
        return _super.call(this, 'Boulder', merge(opts, {
            color: 'grey',
            radius: BOULDER_RADIUS
        })) || this;
    }
    return BoulderObject;
}(ball_1.BallObject));
exports.BoulderObject = BoulderObject;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var BOWLING_BALL_RADIUS = 48;
var BowlingBallObject = (function (_super) {
    __extends(BowlingBallObject, _super);
    function BowlingBallObject(opts) {
        return _super.call(this, 'BowlingBall', merge(opts, {
            color: 'green',
            radius: BOWLING_BALL_RADIUS
        })) || this;
    }
    return BowlingBallObject;
}(ball_1.BallObject));
exports.BowlingBallObject = BowlingBallObject;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var GOLF_BALL_RADIUS = 24;
var GolfBallObject = (function (_super) {
    __extends(GolfBallObject, _super);
    function GolfBallObject(opts) {
        return _super.call(this, 'GolfBall', merge(opts, {
            color: 'white',
            radius: GOLF_BALL_RADIUS
        })) || this;
    }
    return GolfBallObject;
}(ball_1.BallObject));
exports.GolfBallObject = GolfBallObject;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var MOVEMENT_AMT = 300;
var PcBallForceGenerator = (function (_super) {
    __extends(PcBallForceGenerator, _super);
    function PcBallForceGenerator(ball) {
        var _this = _super.call(this) || this;
        _this.ball = ball;
        return _this;
    }
    PcBallForceGenerator.prototype.updateCollider = function (collider, delta) {
        var events = this.ball.events;
        var fx = (events.isKeyDown('ArrowLeft') && -1) + (events.isKeyDown('ArrowRight') && 1);
        var fy = (events.isKeyDown('ArrowUp') && -1) + (events.isKeyDown('ArrowDown') && 1);
        var method = events.isKeyDown('KeyI') ? 'addImpulse' : 'addForce';
        collider[method](fx * MOVEMENT_AMT * delta, fy * MOVEMENT_AMT * delta);
    };
    return PcBallForceGenerator;
}(engine_1.ForceGenerator));
var PcBallObject = (function (_super) {
    __extends(PcBallObject, _super);
    function PcBallObject(opts) {
        var _this = _super.call(this, 'PcBall', merge(opts, {
            color: 'orange',
            radius: 64
        })) || this;
        _this.mask.addForceGenerator(new PcBallForceGenerator(_this));
        return _this;
    }
    PcBallObject.prototype.renderImplContext2d = function (context) {
        _super.prototype.renderImplContext2d.call(this, context);
        if (this.game.renderPhysics) {
            context.save();
            context.rotate(-engine_1.degToRad(this.direction + 90));
            context.lineCap = 'arrow';
            context.lineWidth = 3;
            context.strokeStyle = 'green';
            context.beginPath();
            context.moveTo(3, 0);
            context.lineTo(3, this.speed * .5);
            context.stroke();
            context.strokeStyle = 'red';
            context.beginPath();
            context.moveTo(-3, 0);
            context.lineTo(-3, this.speed * .0001 * this.mask.mass);
            context.stroke();
            context.restore();
        }
    };
    return PcBallObject;
}(ball_1.BallObject));
exports.PcBallObject = PcBallObject;


/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(3);
;
var GameObject = (function () {
    function GameObject(name, opts) {
        if (opts === void 0) { opts = {}; }
        this.DEBUG_MOVEMENT = false;
        this._x = 0;
        this._y = 0;
        this._shouldTick = true;
        this._dir = 0;
        this._speed = 0;
        this._hspeed = 0;
        this._vspeed = 0;
        this._shouldRender = true;
        this._renderCamera = 'default';
        this._sprite = null;
        this._animationAge = 0;
        this._animationSpeed = 1;
        this._imageAngle = 0;
        this.renderTransformedSymbol = Symbol();
        this._name = name;
        if (typeof opts.x != 'undefined')
            this.x = opts.x;
        if (typeof opts.y != 'undefined')
            this.y = opts.y;
        if (typeof opts.shouldTick != 'undefined')
            this.shouldTick = opts.shouldTick;
        if (typeof opts.direction != 'undefined')
            this.direction = opts.direction;
        if (typeof opts.speed != 'undefined')
            this.speed = opts.speed;
        if (typeof opts.hspeed != 'undefined')
            this.hspeed = opts.hspeed;
        if (typeof opts.vspeed != 'undefined')
            this.vspeed = opts.vspeed;
        if (typeof opts.shouldRender != 'undefined')
            this.shouldRender = opts.shouldRender;
        if (typeof opts.renderCamera != 'undefined')
            this.renderCamera = opts.renderCamera;
        if (typeof opts.sprite != 'undefined')
            this.sprite = opts.sprite;
        if (typeof opts.animationAge != 'undefined')
            this.animationAge = opts.animationAge;
        if (typeof opts.animationSpeed != 'undefined')
            this.animationSpeed = opts.animationSpeed;
        if (typeof opts.imageAngle != 'undefined')
            this.imageAngle = opts.imageAngle;
        if (typeof opts.mask != 'undefined')
            this.mask = opts.mask;
    }
    Object.defineProperty(GameObject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            this._y = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "shouldTick", {
        get: function () {
            return this._shouldTick;
        },
        set: function (val) {
            this._shouldTick = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "direction", {
        get: function () {
            return this._dir;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting direction: " + val);
            val = math_1.fmod(val, 360);
            if (this._dir == val)
                return;
            this._dir = val;
            this.updateHVSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting speed: " + val);
            if (val < 0)
                throw new Error("Invalid speed: " + val + ". Must be >= 0");
            if (this._speed == val)
                return;
            this._speed = val;
            this.updateHVSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "hspeed", {
        get: function () {
            return this._hspeed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting hspeed: " + val);
            if (this._hspeed == val)
                return;
            this._hspeed = val;
            this.updateDirectionAndSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "vspeed", {
        get: function () {
            return this._vspeed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting vspeed: " + val);
            if (this._vspeed == val)
                return;
            this._vspeed = val;
            this.updateDirectionAndSpeed();
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.updateHVSpeed = function () {
        var radians = math_1.degToRad(this._dir);
        this._vspeed = -Math.sin(radians) * this._speed;
        this._hspeed = Math.cos(radians) * this._speed;
        if (this.DEBUG_MOVEMENT)
            console.log("  hspeed: " + this._hspeed + "; vspeed: " + this._vspeed);
    };
    GameObject.prototype.updateDirectionAndSpeed = function () {
        this._speed = Math.sqrt(this._hspeed * this._hspeed + this._vspeed * this._vspeed);
        if (this._speed == 0)
            return;
        this._dir = math_1.pointDirection(0, 0, this._hspeed, this._vspeed);
        if (this._dir < 0)
            this._dir += 360;
        if (this.DEBUG_MOVEMENT)
            console.log("  speed: " + this._speed + "; direction: " + this._dir);
    };
    Object.defineProperty(GameObject.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (val) {
            if (val === this._mask)
                return;
            if (this._mask && this.scene)
                this.scene.removeCollider(this._mask);
            this._mask = val;
            if (this._mask && this.scene)
                this.scene.addCollider(this._mask);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "shouldRender", {
        get: function () {
            return this._shouldRender;
        },
        set: function (val) {
            this._shouldRender = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "renderCamera", {
        get: function () {
            return this._renderCamera;
        },
        set: function (val) {
            this._renderCamera = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (val) {
            this._sprite = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "animationAge", {
        get: function () {
            return this._animationAge;
        },
        set: function (val) {
            this._animationAge = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "animationSpeed", {
        get: function () {
            return this._animationSpeed;
        },
        set: function (val) {
            this._animationSpeed = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "imageAngle", {
        get: function () {
            return this._imageAngle;
        },
        set: function (val) {
            this._imageAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scene", {
        get: function () {
            if (!this._scene)
                return null;
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "game", {
        get: function () {
            if (!this.scene)
                return null;
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "resources", {
        get: function () {
            if (!this.game)
                return null;
            return this.game.resourceLoader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "events", {
        get: function () {
            if (!this.game)
                return null;
            return this.game.eventQueue;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.addToScene = function (scene) {
        if (this._scene)
            throw new Error('This game object is already added to a scene!');
        this._scene = scene;
        if (this.mask)
            this.scene.addCollider(this.mask);
    };
    GameObject.prototype.removeFromScene = function () {
        if (this.mask)
            this.scene.removeCollider(this.mask);
        this._scene = null;
    };
    GameObject.prototype.onSceneEnter = function () { };
    GameObject.prototype.onSceneExit = function () { };
    GameObject.prototype.handleEvent = function (evt) {
    };
    GameObject.prototype.tick = function (delta) {
        if (!this.shouldTick)
            return;
        this.x += this.hspeed * delta;
        this.y += this.vspeed * delta;
        this.animationAge += this.animationSpeed * delta;
    };
    GameObject.prototype.fixedTick = function () { };
    GameObject.prototype.render = function (adapter) {
        var _this = this;
        if (!this.shouldRender)
            return;
        adapter.renderTransformed(this.x, this.y, -math_1.degToRad(this.imageAngle), 1, 1, function () {
            _this.renderImpl(adapter);
        }, this.renderTransformedSymbol);
    };
    GameObject.prototype.renderImpl = function (adapter) {
        adapter.renderObject(this);
    };
    GameObject.prototype.transformPixelCoordinates = function (x, y) {
        if (typeof x === 'object') {
            y = x.y;
            x = x.x;
        }
        var camera = this.renderCamera;
        if (camera === 'default' || !camera)
            camera = this.scene.camera;
        if (camera === 'none' || !camera)
            return [x, y];
        else
            return camera.transformPixelCoordinates(x, y);
    };
    return GameObject;
}());
exports.GameObject = GameObject;
//# sourceMappingURL=game-object.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GraphicsAdapter = (function () {
    function GraphicsAdapter() {
    }
    return GraphicsAdapter;
}());
exports.GraphicsAdapter = GraphicsAdapter;
//# sourceMappingURL=graphics-adapter.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResourceLoader = (function () {
    function ResourceLoader() {
        this.DEBUG_RESOURCES = false;
        this._resourcesLoaded = 0;
        this._resourcesLoading = 0;
        this._errors = [];
        this._images = new Map();
        this._audio = new Map();
        var pathParts = window.location.pathname.split('/');
        this._baseUrl = window.location.origin + (pathParts[pathParts.length - 1] == 'index.html' ? pathParts.slice(0, pathParts.length - 1) : pathParts).join('/');
        if (this._baseUrl.startsWith('null/'))
            this._baseUrl = 'file:///' + this._baseUrl.slice(5);
    }
    ResourceLoader.prototype.addPreloadStrategy = function (strategy) {
        strategy.preload(this);
    };
    Object.defineProperty(ResourceLoader.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "resourcesLoaded", {
        get: function () {
            return this._resourcesLoaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "totalResources", {
        get: function () {
            return this._resourcesLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "error", {
        get: function () {
            return this._errors.join('\n');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "isDone", {
        get: function () {
            return this.totalResources == this.resourcesLoaded && !this.error;
        },
        enumerable: true,
        configurable: true
    });
    ResourceLoader.prototype.loadImage = function (src) {
        var _this = this;
        src = this.resolvePath(src);
        if (this._images.has(src))
            return this._images.get(src);
        this._resourcesLoading++;
        if (this.DEBUG_RESOURCES)
            console.log("Loading image: '" + src + "'");
        var img = document.createElement('img');
        this._images.set(src, img);
        img.onload = function () {
            _this._resourcesLoaded++;
        };
        img.onerror = function (e) {
            _this._errors.push("ERROR: Could not load " + src);
        };
        img.src = src;
        return img;
    };
    ResourceLoader.prototype.loadAudio = function (src) {
        var _this = this;
        src = this.resolvePath(src);
        if (this._audio.has(src))
            return this._audio.get(src);
        this._resourcesLoading++;
        if (this.DEBUG_RESOURCES)
            console.log("Loading audio: '" + src + "'");
        var aud = document.createElement('audio');
        this._audio.set(src, aud);
        aud.onloadeddata = function () {
            _this._resourcesLoaded++;
        };
        aud.onerror = function (e) {
            _this._errors.push("ERROR: Could not load " + src);
        };
        aud.src = src;
        return aud;
    };
    ResourceLoader.prototype.resolvePath = function (src) {
        if (!src)
            throw new Error("Invalid src: [" + src + "]");
        if (src.match(/^[a-z]:\/\//i))
            return src;
        if (src.startsWith('/'))
            return "" + this.baseUrl + src;
        else
            return this.baseUrl + "/" + src;
    };
    ResourceLoader.prototype.render = function (adapter) {
        adapter.renderResourceLoader(this.resourcesLoaded, this.totalResources, this.error);
    };
    return ResourceLoader;
}());
exports.ResourceLoader = ResourceLoader;
//# sourceMappingURL=resource-loader.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sprite_1 = __webpack_require__(11);
var LINE_HEIGHT = 12;
function fillText(context, text, x, y) {
    var lines = text.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        context.fillText(line, x, y);
        y += Math.floor(parseInt(context.font) * 1.2);
    }
}
exports.fillText = fillText;
function measureSprite(loader, sprite) {
    if (!sprite || !sprite.src)
        throw new Error("Invalid sprite. Cannot measure " + sprite + ".");
    var img = loader && loader.loadImage(sprite.src);
    if (sprite_1.isAnimationSprite(sprite) || sprite_1.isSingleTileSprite(sprite)) {
        var _a = sprite.tileset, width = _a.width, height = _a.height;
        return { width: width, height: height };
    }
    else {
        return { width: img.width || 0, height: img.height || 0 };
    }
}
exports.measureSprite = measureSprite;
//# sourceMappingURL=render.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var menu_scene_1 = __webpack_require__(47);
var main_menu_1 = __webpack_require__(38);
var PhysicsGame = (function (_super) {
    __extends(PhysicsGame, _super);
    function PhysicsGame(framesPerSecond) {
        if (framesPerSecond === void 0) { framesPerSecond = 30; }
        return _super.call(this, { framesPerSecond: framesPerSecond }) || this;
    }
    PhysicsGame.prototype.start = function () {
        _super.prototype.start.call(this);
        this.changeScene(new menu_scene_1.MenuScene(new main_menu_1.MainMenuObject(), null));
    };
    return PhysicsGame;
}(engine_1.Game));
exports.PhysicsGame = PhysicsGame;


/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var camera_1 = __webpack_require__(8);
var FollowCamera = (function (_super) {
    __extends(FollowCamera, _super);
    function FollowCamera(scene) {
        var _this = _super.call(this, scene) || this;
        _this._follow = null;
        _this._offset = [0, 0];
        return _this;
    }
    Object.defineProperty(FollowCamera.prototype, "follow", {
        get: function () {
            return this._follow;
        },
        set: function (val) {
            this._follow = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowCamera.prototype, "followOffset", {
        get: function () {
            return [this._offset[0], this._offset[1]];
        },
        set: function (_a) {
            var offsetx = _a[0], offsety = _a[1];
            this._offset = [offsetx, offsety];
        },
        enumerable: true,
        configurable: true
    });
    FollowCamera.prototype.renderTransformed = function (adapter, act) {
        if (this.follow) {
            var target = [this._follow.x + this._offset[0], this._follow.y + this._offset[1]];
            this.center = target;
        }
        _super.prototype.renderTransformed.call(this, adapter, act);
    };
    return FollowCamera;
}(camera_1.Camera));
exports.FollowCamera = FollowCamera;
//# sourceMappingURL=follow-camera.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var camera_1 = __webpack_require__(8);
var GameScene = (function () {
    function GameScene(_game) {
        if (_game === void 0) { _game = null; }
        this._game = _game;
        this._generators = [];
        this._objects = [];
        this._colliders = [];
        this._camera = null;
    }
    Object.defineProperty(GameScene.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (val) {
            this._game = val;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.onEnter = function () {
        this.start();
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onSceneEnter();
        }
    };
    GameScene.prototype.onExit = function () {
        this.stop();
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onSceneExit();
        }
    };
    GameScene.prototype.start = function () {
        if (!this.camera)
            this.initCamera();
    };
    GameScene.prototype.stop = function () {
    };
    Object.defineProperty(GameScene.prototype, "forceGenerators", {
        get: function () {
            return this._generators;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.addForceGenerator = function (generator) {
        this._generators.push(generator);
    };
    GameScene.prototype.removeForceGenerator = function (generator) {
        var idx = this._generators.indexOf(generator);
        if (idx === -1)
            return;
        this._generators.splice(idx, 1);
    };
    GameScene.prototype.handleEvent = function (evt) {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick && obj.handleEvent(evt))
                return true;
        }
        return false;
    };
    GameScene.prototype.tick = function (delta) {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick)
                obj.tick(delta);
        }
        if (this.camera)
            this.camera.tick(delta);
        this.physicsTick(delta);
    };
    GameScene.prototype.fixedTick = function () {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick)
                obj.fixedTick();
        }
        if (this.camera)
            this.camera.fixedTick();
        this.physicsTick(0);
    };
    GameScene.prototype.physicsTick = function (delta) {
        for (var q = 0; q < this._colliders.length; q++) {
            this._colliders[q].clearContacts();
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var first = this._colliders[q];
            for (var w = q + 1; w < this._colliders.length; w++) {
                var second = this._colliders[w];
                first.checkForCollision(second);
            }
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var collider = this._colliders[q];
            collider.resolveCollisions();
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var collider = this._colliders[q];
            collider.resolveImpulses();
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var collider = this._colliders[q];
            collider.applyForces(delta);
        }
    };
    GameScene.prototype.render = function (adapter) {
        var defaultCamera = this.camera;
        if (defaultCamera)
            defaultCamera.clear(adapter);
        var _loop_1 = function (obj) {
            if (obj.shouldRender) {
                var renderCamera = obj.renderCamera === 'default' ? defaultCamera :
                    obj.renderCamera !== 'none' ? obj.renderCamera :
                        null;
                if (!renderCamera)
                    obj.render(adapter);
                else
                    renderCamera.renderTransformed(adapter, function () { return obj.render(adapter); });
            }
        };
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            _loop_1(obj);
        }
        if (this.game.renderPhysics)
            this.renderPhysics(adapter);
    };
    GameScene.prototype.renderPhysics = function (adapter) {
        var defaultCamera = this.camera;
        var _loop_2 = function (collider) {
            var obj = collider.gameObject;
            var renderCamera = obj.renderCamera === 'default' ? defaultCamera :
                obj.renderCamera !== 'none' ? obj.renderCamera :
                    null;
            if (!renderCamera)
                collider.render(adapter);
            else
                renderCamera.renderTransformed(adapter, function () { return collider.render(adapter); });
        };
        for (var _i = 0, _a = this._colliders; _i < _a.length; _i++) {
            var collider = _a[_i];
            _loop_2(collider);
        }
    };
    GameScene.prototype.addObject = function (obj) {
        this._objects.push(obj);
        obj.addToScene(this);
    };
    GameScene.prototype.removeObject = function (obj) {
        var idx = this._objects.indexOf(obj);
        if (idx == -1)
            throw new Error("Cannot remove game object '" + obj.name + "': it has not been added.");
        this._objects.splice(idx, 1);
        obj.removeFromScene();
    };
    GameScene.prototype.findObject = function (predicate) {
        if (typeof predicate == 'string') {
            var name_1 = predicate;
            predicate = function (obj) { return obj.name == name_1; };
        }
        else if (!predicate)
            throw new Error("Invalid predicate: " + predicate);
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (predicate(obj))
                return obj;
        }
        return null;
    };
    GameScene.prototype.findObjects = function (predicate) {
        if (!predicate)
            return this._objects.slice();
        if (typeof predicate !== 'function')
            throw new Error("Invalid predicate: " + predicate);
        return this._objects.filter(predicate);
    };
    GameScene.prototype.removeCollider = function (mask) {
        var idx = this._colliders.indexOf(mask);
        if (idx !== -1)
            this._colliders.splice(idx, 1);
    };
    GameScene.prototype.addCollider = function (mask) {
        this._colliders.push(mask);
    };
    GameScene.prototype.initCamera = function () {
        this.camera = new camera_1.Camera(this);
    };
    Object.defineProperty(GameScene.prototype, "camera", {
        get: function () {
            return this._camera;
        },
        set: function (val) {
            this._camera = val;
        },
        enumerable: true,
        configurable: true
    });
    return GameScene;
}());
exports.GameScene = GameScene;
;
//# sourceMappingURL=game-scene.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resource_loader_1 = __webpack_require__(19);
var event_queue_1 = __webpack_require__(56);
var event_emitter_1 = __webpack_require__(55);
var default_graphics_adapter_1 = __webpack_require__(9);
;
var Game = (function () {
    function Game(options) {
        this._scene = null;
        this._nextScene = null;
        this.LOGIC_TICKS_PER_RENDER_TICK = 3;
        this.maximumDelta = .25;
        this.bodyResized = new event_emitter_1.EventEmitter();
        this._renderPhysics = false;
        this.previousTick = null;
        this._resourceLoader = null;
        this._eventQueue = null;
        this._isRunning = false;
        this._size = [640, 480];
        this.fixedTickDelta = 0;
        this.timePerFixedTick = 1;
        if (!options)
            options = {};
        this.framesPerSecond = options.framesPerSecond || 30;
        this.graphicsAdapter = options.graphicsAdapter || new default_graphics_adapter_1.DefaultGraphicsAdapter();
        this.timePerFixedTick = 1 / this.framesPerSecond;
        this.maximumDelta = options.maximumDelta || 0;
        this.init();
    }
    Object.defineProperty(Game.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "nextScene", {
        get: function () {
            return this._nextScene;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.changeScene = function (newScene) {
        if (!newScene) {
            throw new Error("Tried to changeScene to a bad scene!");
        }
        if (this._nextScene) {
            throw new Error("Scene cannot be set more than once per tick!");
        }
        this._nextScene = newScene;
        if (!this._scene) {
            this.handleSceneChange();
        }
    };
    Game.prototype.handleSceneChange = function () {
        if (this._nextScene) {
            if (this._scene)
                this._scene.onExit();
            this._scene = this._nextScene;
            this._scene.game = this;
            this._scene.onEnter();
            this._nextScene = null;
        }
    };
    Game.prototype.init = function () {
        this._resourceLoader = new resource_loader_1.ResourceLoader();
        this._eventQueue = new event_queue_1.EventQueue();
        var body = document.getElementsByTagName('body')[0];
        this.initResize(body);
    };
    Game.prototype.initResize = function (body) {
        var _this = this;
        window.addEventListener('resize', function () { return _this.bodyResized.emit(void (0)); });
        this.bodyResized.addListener(function () {
            _this.canvasSize = [window.innerWidth, window.innerHeight];
        });
    };
    Object.defineProperty(Game.prototype, "renderPhysics", {
        get: function () {
            return this._renderPhysics;
        },
        set: function (val) {
            this._renderPhysics = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "canvas", {
        get: function () {
            return this.graphicsAdapter.canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "resourceLoader", {
        get: function () {
            return this._resourceLoader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "eventQueue", {
        get: function () {
            return this._eventQueue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.start = function () {
        var _this = this;
        if (this.isRunning)
            throw new Error("This game is already running. You can't run it again.");
        this._isRunning = true;
        this.graphicsAdapter.init(this);
        this.bodyResized.emit(void (0));
        document.currentScript.parentElement.insertBefore(this.canvas, document.currentScript);
        this._intervalHandle = setInterval(function () { return _this.onTick(); }, 1000 / this.framesPerSecond);
    };
    Game.prototype.stop = function () {
        if (this.isRunning)
            clearInterval(this._intervalHandle);
        this._isRunning = false;
    };
    Object.defineProperty(Game.prototype, "canvasSize", {
        get: function () {
            return [this._size[0], this._size[1]];
        },
        set: function (_a) {
            var newWidth = _a[0], newHeight = _a[1];
            if (newWidth == this._size[0] && newHeight == this._size[1])
                return;
            var prevSize = this._size;
            this._size = [newWidth, newHeight];
            this.eventQueue.enqueue({
                type: 'canvasResize',
                previousSize: prevSize,
                size: [newWidth, newHeight]
            });
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.onTick = function () {
        if (!this.isRunning)
            throw new Error("An error occurred. Game.onTick was invoked although the game is not running.");
        var currentTime = new Date();
        var delta = (this.previousTick == null) ? 0 : (currentTime.valueOf() - this.previousTick.valueOf()) / 1000;
        if (this.maximumDelta && delta > this.maximumDelta)
            delta = this.maximumDelta;
        this.previousTick = currentTime;
        this.eventQueue.tick(delta);
        this.sendEvents(this.scene);
        if (this.resourceLoader.isDone) {
            for (var q = 0; q < this.LOGIC_TICKS_PER_RENDER_TICK; q++) {
                this.tick(delta / this.LOGIC_TICKS_PER_RENDER_TICK);
            }
            this.render(this.graphicsAdapter);
        }
        else {
            this.resourceLoader.render(this.graphicsAdapter);
        }
    };
    Game.prototype.sendEvents = function (sendTo) {
        var events = this._eventQueue.clearQueue();
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var evt = events_1[_i];
            var handled = false;
            if (this.resourceLoader.isDone && this.sendEvent(sendTo, evt))
                handled = true;
            if (!handled && this.handleEvent(evt))
                handled = true;
            if (!handled && (evt.type === 'abstractButtonPressed' || evt.type === 'abstractButtonReleased') && evt.wrappedEvent) {
                if (this.resourceLoader.isDone && this.sendEvent(sendTo, evt.wrappedEvent))
                    handled = true;
                if (!handled && this.handleEvent(evt.wrappedEvent))
                    handled = true;
            }
        }
    };
    Game.prototype.handleEvent = function (evt) {
        if (evt.type === 'keyPressed' && evt.code === 'F5') {
            location.reload(evt.shiftPressed);
            return true;
        }
        else if (evt.type === 'keyPressed' && evt.code === 'F11') {
            this.toggleFullscreen();
            return true;
        }
        return false;
    };
    Game.prototype.sendEvent = function (sendTo, evt) {
        if (this._scene)
            return this._scene.handleEvent(evt);
        return false;
    };
    Game.prototype.toggleFullscreen = function () {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozExitFullscreen)
                document.mozExitFullscreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen)
                document.wskitExitFullscreen();
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            if (body.requestFullscreen)
                body.requestFullscreen();
            else if (body.mozRequestFullScreen)
                body.mozRequestFullScreen();
            else if (body.webkitRequestFullscreen)
                body.webkitRequestFullscreen();
            else if (body.msRequestFullscreen)
                body.msRequestFullscreen();
        }
    };
    Game.prototype.tick = function (delta) {
        if (this._scene) {
            this._scene.tick(delta);
            this.handleSceneChange();
        }
        this.fixedTickDelta += delta;
        while (this.fixedTickDelta >= this.timePerFixedTick) {
            this.fixedTickDelta -= this.timePerFixedTick;
            this.fixedTick();
        }
    };
    Game.prototype.fixedTick = function () {
        if (this._scene) {
            this._scene.fixedTick();
            this.handleSceneChange();
        }
    };
    Game.prototype.render = function (adapter) {
        if (!adapter)
            throw new Error("What the heck just happened? There is no graphics adapter!");
        if (this._scene)
            adapter.renderScene(this._scene);
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));
__export(__webpack_require__(9));
//# sourceMappingURL=index.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var collision_mask_1 = __webpack_require__(10);
var math_1 = __webpack_require__(3);
var CircleCollisionMask = (function (_super) {
    __extends(CircleCollisionMask, _super);
    function CircleCollisionMask(gobj, _radius, _offset, mass) {
        if (_offset === void 0) { _offset = [0, 0]; }
        if (mass === void 0) { mass = NaN; }
        var _this = _super.call(this, gobj) || this;
        _this._radius = _radius;
        _this._offset = _offset;
        _this.updatePositions = true;
        _this.mass = isNaN(mass) ? Math.PI * _this.radius * _this.radius : mass;
        return _this;
    }
    Object.defineProperty(CircleCollisionMask.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (val) {
            this._radius = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleCollisionMask.prototype, "offset", {
        get: function () {
            return [this._offset[0], this._offset[1]];
        },
        set: function (val) {
            this._offset = [val[0], val[1]];
        },
        enumerable: true,
        configurable: true
    });
    CircleCollisionMask.prototype.checkForCollision = function (other) {
        if (other instanceof CircleCollisionMask) {
            var _a = [this.gameObject.x + this._offset[0], this.gameObject.y + this._offset[1]], x = _a[0], y = _a[1];
            var _b = [other.gameObject.x + other._offset[0], other.gameObject.y + other._offset[1]], otherx = _b[0], othery = _b[1];
            var dist2 = math_1.pointDistance2(x, y, otherx, othery);
            var threshold = Math.pow(this.radius + other.radius, 2);
            if (dist2 <= 0 || dist2 >= threshold)
                return null;
            var dist = Math.sqrt(dist2);
            var normal = [(otherx - x) / dist, (othery - y) / dist];
            var penetration = (this.radius + other.radius) - dist;
            var collision = {
                first: this,
                second: other,
                contactNormal: normal,
                contactPoint: [x + normal[0] * (this.radius - (penetration / 2)), y + normal[1] * (this.radius - (penetration / 2))],
                penetration: penetration + .01
            };
            this.contacts.push(collision);
            other.contacts.push(collision);
            return collision;
        }
        else
            throw new Error('Not implemented');
    };
    CircleCollisionMask.prototype.resolveCollisions = function () {
        for (var q = 0; q < this.contacts.length; q++) {
            var contact = this.contacts[q];
            if (contact.first !== this)
                continue;
            var other = contact.second;
            var relativeMass = this.mass / (this.mass + other.mass);
            var eAbsorb = 1 - relativeMass;
            if (this.updatePositions !== false) {
                this.collisionImpulseX -= contact.contactNormal[0] * eAbsorb * contact.penetration;
                this.collisionImpulseY -= contact.contactNormal[1] * eAbsorb * contact.penetration;
                other.collisionImpulseX += contact.contactNormal[0] * relativeMass * contact.penetration;
                other.collisionImpulseY += contact.contactNormal[1] * relativeMass * contact.penetration;
                this.impulseCount++;
                other.impulseCount++;
                var a1 = (contact.contactNormal[0] * this.gameObject.hspeed) + ((contact.contactNormal[1] * this.gameObject.vspeed));
                var a2 = (contact.contactNormal[0] * other.gameObject.hspeed) + ((contact.contactNormal[1] * other.gameObject.vspeed));
                var optimizedP = (2 * (a1 - a2)) / (this.mass + other.mass);
                _a = [
                    this.gameObject.hspeed - optimizedP * other.mass * contact.contactNormal[0],
                    this.gameObject.vspeed - optimizedP * other.mass * contact.contactNormal[1]
                ], this.gameObject.hspeed = _a[0], this.gameObject.vspeed = _a[1];
                _b = [
                    other.gameObject.hspeed + optimizedP * this.mass * contact.contactNormal[0],
                    other.gameObject.vspeed + optimizedP * this.mass * contact.contactNormal[1]
                ], other.gameObject.hspeed = _b[0], other.gameObject.vspeed = _b[1];
            }
        }
        if (this.updatePositions === 'once')
            this.updatePositions = false;
        var _a, _b;
    };
    CircleCollisionMask.prototype.renderImpl = function (context) {
        context.strokeStyle = this.contacts.length ? 'red' : 'green';
        context.beginPath();
        context.ellipse(this._offset[0], this._offset[1], this.radius, this.radius, 0, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = 'red';
        context.fillRect(this._offset[0] - 3, this._offset[1] - 3, 6, 6);
        context.strokeStyle = 'purple';
        for (var q = 0; q < this.contacts.length; q++) {
            var contact = this.contacts[q];
            if (contact.first !== this)
                continue;
            context.fillRect(contact.contactPoint[0] - this.gameObject.x - 1, contact.contactPoint[1] - this.gameObject.y - 1, 2, 2);
            context.beginPath();
            context.moveTo(contact.contactPoint[0] - this.gameObject.x - contact.contactNormal[0] * contact.penetration / 2, contact.contactPoint[1] - this.gameObject.y - contact.contactNormal[1] * contact.penetration / 2);
            context.lineTo(contact.contactPoint[0] - this.gameObject.x + contact.contactNormal[0] * contact.penetration / 2, contact.contactPoint[1] - this.gameObject.y + contact.contactNormal[1] * contact.penetration / 2);
            context.stroke();
        }
    };
    return CircleCollisionMask;
}(collision_mask_1.CollisionMask));
exports.CircleCollisionMask = CircleCollisionMask;
//# sourceMappingURL=circle-collision-mask.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var force_generator_1 = __webpack_require__(7);
var DragForceGenerator = (function (_super) {
    __extends(DragForceGenerator, _super);
    function DragForceGenerator(k1, k2) {
        var _this = _super.call(this) || this;
        _this.k1 = k1;
        _this.k2 = k2;
        _this.enabled = true;
        return _this;
    }
    DragForceGenerator.prototype.updateCollider = function (collider, delta) {
        if (!this.enabled)
            return;
        if (!collider.gameObject.speed)
            return;
        var speed = collider.gameObject.speed / 100;
        var dragCoeff = this.k1 * speed + this.k2 * Math.pow(speed, 2);
        if (dragCoeff > speed * 100)
            dragCoeff = speed * 100;
        var _a = [collider.gameObject.hspeed, collider.gameObject.vspeed], hspeed = _a[0], vspeed = _a[1];
        var _b = [hspeed / speed, vspeed / speed], nhspeed = _b[0], nvspeed = _b[1];
        var _c = [-nhspeed * dragCoeff, -nvspeed * dragCoeff], hdrag = _c[0], vdrag = _c[1];
        collider.addForce(hdrag * delta, vdrag * delta);
    };
    return DragForceGenerator;
}(force_generator_1.ForceGenerator));
exports.DragForceGenerator = DragForceGenerator;
//# sourceMappingURL=drag-force-generator.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var collision_mask_1 = __webpack_require__(10);
var force_generator_1 = __webpack_require__(7);
var math_1 = __webpack_require__(3);
var GravityForceGenerator = (function (_super) {
    __extends(GravityForceGenerator, _super);
    function GravityForceGenerator(hgravity, vgravity) {
        var _this = _super.call(this) || this;
        _this.enabled = true;
        if (hgravity instanceof collision_mask_1.CollisionMask)
            _this._towards = hgravity;
        else if (typeof hgravity === 'number') {
            if (typeof vgravity === 'number') {
                _this._hgravity = hgravity;
                _this._vgravity = vgravity;
            }
            else {
                _this._hgravity = 0;
                _this._vgravity = hgravity;
            }
        }
        else {
            _this._hgravity = 0;
            _this._vgravity = 98;
        }
        return _this;
    }
    GravityForceGenerator.prototype.updateCollider = function (collider, delta) {
        if (!this.enabled)
            return;
        var hgrav = this._hgravity, vgrav = this._vgravity;
        if (this._towards) {
            var dist = math_1.pointDistance(collider.gameObject.x, collider.gameObject.y, this._towards.gameObject.x, this._towards.gameObject.y);
            var gravityCoeff = ((collider.mass * this._towards.mass) / dist) * .00001;
            _a = [gravityCoeff * (this._towards.gameObject.x - collider.gameObject.x), gravityCoeff * (this._towards.gameObject.y - collider.gameObject.y)], hgrav = _a[0], vgrav = _a[1];
        }
        collider.addForce(hgrav * delta, vgrav * delta);
        var _a;
    };
    return GravityForceGenerator;
}(force_generator_1.ForceGenerator));
exports.GravityForceGenerator = GravityForceGenerator;
//# sourceMappingURL=gravity-force-generator.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__export(__webpack_require__(27));
__export(__webpack_require__(7));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(31));
//# sourceMappingURL=index.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var force_generator_1 = __webpack_require__(7);
var math_1 = __webpack_require__(3);
var SpringForceGenerator = (function (_super) {
    __extends(SpringForceGenerator, _super);
    function SpringForceGenerator(other, springConstant, restLength) {
        var _this = _super.call(this) || this;
        _this.other = other;
        _this.springConstant = springConstant;
        _this.restLength = restLength;
        _this.enabled = true;
        _this.modifyOther = true;
        return _this;
    }
    SpringForceGenerator.prototype.updateCollider = function (collider, delta) {
        if (!this.enabled)
            return;
        var _a = [collider.gameObject.x - this.other.gameObject.x, collider.gameObject.y - this.other.gameObject.y], hdist = _a[0], vdist = _a[1];
        var magnitude = math_1.pointDistance(0, 0, hdist, vdist);
        magnitude = (this.restLength - magnitude) / 100;
        magnitude *= this.springConstant;
        var _b = [hdist * magnitude * delta, vdist * magnitude * delta], hforce = _b[0], vforce = _b[1];
        var massRatio = collider.mass / (collider.mass + this.other.mass);
        collider.addForce(hforce * (1 - massRatio), vforce * (1 - massRatio));
        if (this.modifyOther)
            this.other.addForce(-hforce * massRatio, -vforce * massRatio);
    };
    SpringForceGenerator.prototype.render = function (collider, context) {
        _super.prototype.render.call(this, collider, context);
        context.save();
        try {
            context.translate(collider.gameObject.x, collider.gameObject.y);
            context.rotate(-math_1.degToRad(math_1.pointDirection(collider.gameObject.x, collider.gameObject.y, this.other.gameObject.x, this.other.gameObject.y)));
            var dist = math_1.pointDistance(collider.gameObject.x, collider.gameObject.y, this.other.gameObject.x, this.other.gameObject.y);
            context.fillStyle = 'rgba(255, 255, 255, .2)';
            context.fillRect(0, -6, dist, 12);
            context.fillStyle = 'rgba(255, 255, 255, .8)';
            context.fillRect(0, -1.5, this.restLength, 3);
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.beginPath();
            for (var q = 0; q < dist - 5; q += 10) {
                context.lineTo(q, 0);
                context.lineTo(q + 2.5, 4);
                context.lineTo(q + 7.5, -4);
                context.lineTo(q + 10, 0);
            }
            context.stroke();
        }
        finally {
            context.restore();
        }
    };
    return SpringForceGenerator;
}(force_generator_1.ForceGenerator));
exports.SpringForceGenerator = SpringForceGenerator;
//# sourceMappingURL=spring-force-generator.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function delay(millis) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, millis);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(32));
__export(__webpack_require__(3));
__export(__webpack_require__(36));
__export(__webpack_require__(20));
__export(__webpack_require__(11));
//# sourceMappingURL=index.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rect = (function () {
    function Rect(left, right, bottom, top) {
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
    }
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this.top - this.bottom;
        },
        enumerable: true,
        configurable: true
    });
    return Rect;
}());
Rect.zero = new Rect(0, 0, 0, 0);
exports.Rect = Rect;
;
//# sourceMappingURL=rect.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var physics_game_1 = __webpack_require__(21);
var game = new physics_game_1.PhysicsGame();
game.start();


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = __webpack_require__(39);
var circles_scene_1 = __webpack_require__(45);
var bouncing_circles_scene_1 = __webpack_require__(44);
var momentum_mass_scene_1 = __webpack_require__(48);
var force_generator_scene_1 = __webpack_require__(46);
var planets_scene_1 = __webpack_require__(49);
var spring_scene_1 = __webpack_require__(52);
var spring_mesh_scene_1 = __webpack_require__(51);
var resting_contact_scene_1 = __webpack_require__(50);
var angular_velocity_scene_1 = __webpack_require__(43);
var MainMenuObject = (function (_super) {
    __extends(MainMenuObject, _super);
    function MainMenuObject() {
        return _super.call(this, 'MainMenu') || this;
    }
    MainMenuObject.prototype.initItems = function () {
        var _this = this;
        this.addMenuItem({
            text: "Circle Separation - Step by Step",
            handler: function () {
                _this.game.changeScene(new circles_scene_1.CirclesScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Circle Collision",
            handler: function () {
                _this.game.changeScene(new bouncing_circles_scene_1.BouncingCirclesScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Mass and Force",
            handler: function () {
                _this.game.changeScene(new momentum_mass_scene_1.MomentumMassScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Force Generator",
            handler: function () {
                _this.game.changeScene(new force_generator_scene_1.ForceGeneratorScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Planets",
            handler: function () {
                _this.game.changeScene(new planets_scene_1.PlanetsScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Single Spring",
            handler: function () {
                _this.game.changeScene(new spring_scene_1.SpringScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Multiple Springs",
            handler: function () {
                _this.game.changeScene(new spring_scene_1.SpringScene(_this.scene, 5));
            }
        });
        this.addMenuItem({
            text: "Mesh Springs",
            handler: function () {
                _this.game.changeScene(new spring_mesh_scene_1.SpringMeshScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Resting Contact",
            handler: function () {
                _this.game.changeScene(new resting_contact_scene_1.RestingContactScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Angular Velocity and Chasles Theorem",
            handler: function () {
                _this.game.changeScene(new angular_velocity_scene_1.AngularVelocityScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Exit",
            handler: function () {
                window.close();
            }
        });
    };
    return MainMenuObject;
}(menu_1.MenuObject));
exports.MainMenuObject = MainMenuObject;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var MenuObject = (function (_super) {
    __extends(MenuObject, _super);
    function MenuObject(name, lockedPostfix) {
        if (lockedPostfix === void 0) { lockedPostfix = ' - Locked'; }
        var _this = _super.call(this, name, {
            renderCamera: 'none'
        }) || this;
        _this.lockedPostfix = lockedPostfix;
        _this.items = [];
        _this.currentSelection = 0;
        _this.lastSelection = 0;
        return _this;
    }
    MenuObject.prototype.addToScene = function (scene) {
        _super.prototype.addToScene.call(this, scene);
        this.initItems();
    };
    MenuObject.prototype.addMenuItem = function (item) {
        this.items.push(item);
    };
    MenuObject.prototype.handleEvent = function (evt) {
        var currentItem = this.items[this.currentSelection];
        if (currentItem && !currentItem.isLocked || !currentItem.isLocked()) {
            if (evt.type === 'keyTyped' && this.items.length && (evt.code === 'Enter' || evt.code === 'Space')) {
                var currentItem_1 = this.items[this.currentSelection];
                currentItem_1.handler();
                return true;
            }
        }
        var prevSelection = this.currentSelection;
        switch (evt.type) {
            case 'keyTyped':
                if (evt.code === 'ArrowUp' || evt.code === 'ArrowLeft')
                    this.currentSelection--;
                else if (evt.code === 'ArrowRight' || evt.code === 'ArrowDown')
                    this.currentSelection++;
                if (this.currentSelection < 0)
                    this.currentSelection = this.items.length - 1;
                if (this.currentSelection >= this.items.length)
                    this.currentSelection = 0;
                break;
            case 'mouseMoved':
                break;
        }
        return this.currentSelection !== prevSelection;
    };
    MenuObject.prototype.renderImpl = function (adapter) {
        if (adapter.context instanceof CanvasRenderingContext2D)
            this.renderImplContext2d(adapter.context);
        else
            throw new Error("Not implemented!");
    };
    MenuObject.prototype.renderImplContext2d = function (context) {
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.font = '24px cambria';
        for (var q = 0; q < this.items.length; q++) {
            var item = this.items[q];
            var locked = (item.isLocked ? item.isLocked() : false);
            context.fillStyle = locked ? 'gray' :
                this.currentSelection === q ? 'orange' :
                    'white';
            context.fillText(item.text + (locked ? this.lockedPostfix : ''), 35, 20 + (30 * q));
        }
        context.textAlign = 'right';
        if (this.items.length) {
            context.fillStyle = 'orange';
            context.fillText('\u203a', 30, 20 + (30 * this.currentSelection));
        }
    };
    return MenuObject;
}(engine_1.GameObject));
exports.MenuObject = MenuObject;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var FIXED_BALL_RADIUS = 64;
var FixedBallObject = (function (_super) {
    __extends(FixedBallObject, _super);
    function FixedBallObject(opts) {
        var _this = _super.call(this, 'FixedBall', merge(opts, {
            color: 'grey',
            radius: FIXED_BALL_RADIUS
        })) || this;
        _this.angle = 0;
        _this.angleChangeSpeed = 0;
        _this.distance = 0;
        return _this;
    }
    FixedBallObject.prototype.handleEvent = function (e) {
        if (_super.prototype.handleEvent.call(this, e))
            return true;
        if (e.type === 'keyPressed' && (e.code === 'Space' || e.code === 'Enter') && this.attachTo) {
            var forceGenerators = this.attachTo.mask.forceGenerators;
            for (var _i = 0, forceGenerators_1 = forceGenerators; _i < forceGenerators_1.length; _i++) {
                var forceGen = forceGenerators_1[_i];
                if (!(forceGen instanceof engine_1.GravityForceGenerator))
                    continue;
                this.mask.addForceGenerator(forceGen);
            }
            _a = [this.attachTo.hspeed, this.attachTo.vspeed], this.hspeed = _a[0], this.vspeed = _a[1];
            this.attachTo = null;
            if (!this.angleChangeSpeed)
                return false;
            var perpAngle = this.angle + (Math.PI / 2) * Math.sign(this.angleChangeSpeed);
            var magnitude = (this.distance * 2 * this.angleChangeSpeed) / Math.PI;
            this.hspeed += Math.sin(perpAngle) * magnitude;
            this.vspeed += Math.cos(perpAngle) * magnitude;
        }
        return false;
        var _a;
    };
    FixedBallObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        if (!this.attachTo)
            return;
        this.angle += delta *= this.angleChangeSpeed;
        _a = [
            this.attachTo.x + Math.sin(this.angle) * this.distance,
            this.attachTo.y + Math.cos(this.angle) * this.distance
        ], this.x = _a[0], this.y = _a[1];
        var _a;
    };
    FixedBallObject.prototype.render = function (adapter) {
        if (this.attachTo) {
            if (adapter instanceof engine_1.DefaultGraphicsAdapter)
                this.renderAttachmentContext2d(adapter);
            else
                throw new Error("Not implemented");
        }
        _super.prototype.render.call(this, adapter);
    };
    FixedBallObject.prototype.renderAttachmentContext2d = function (adapter) {
        var context = adapter.context;
        context.strokeStyle = 'blue';
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.attachTo.x, this.attachTo.y);
        context.stroke();
    };
    return FixedBallObject;
}(ball_1.BallObject));
exports.FixedBallObject = FixedBallObject;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var PLANET_RADIUS = 32;
var PlanetObject = (function (_super) {
    __extends(PlanetObject, _super);
    function PlanetObject(opts) {
        return _super.call(this, 'Planet', merge(opts, {
            color: 'blue',
            radius: PLANET_RADIUS
        })) || this;
    }
    return PlanetObject;
}(ball_1.BallObject));
exports.PlanetObject = PlanetObject;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = __webpack_require__(4);
var merge = __webpack_require__(2);
var SUN_RADIUS = 128;
var SunObject = (function (_super) {
    __extends(SunObject, _super);
    function SunObject(opts) {
        return _super.call(this, 'Sun', merge(opts, {
            color: 'yellow',
            radius: SUN_RADIUS
        })) || this;
    }
    return SunObject;
}(ball_1.BallObject));
exports.SunObject = SunObject;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var fixed_ball_1 = __webpack_require__(40);
var pc_ball_1 = __webpack_require__(15);
var BALL_COUNT = 6;
var AngularVelocityScene = (function (_super) {
    __extends(AngularVelocityScene, _super);
    function AngularVelocityScene(parent, shiftPressed) {
        if (shiftPressed === void 0) { shiftPressed = false; }
        var _this = _super.call(this, parent) || this;
        _this.shiftPressed = shiftPressed;
        _this.initialized = false;
        return _this;
    }
    AngularVelocityScene.prototype.handleEvent = function (e) {
        if (_super.prototype.handleEvent.call(this, e))
            return true;
        if (e.type === 'keyPressed' && e.code === 'KeyR') {
            this.game.changeScene(new AngularVelocityScene(this.parentScene, e.shiftPressed));
            return true;
        }
        return false;
    };
    AngularVelocityScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject('Press space to cut the ball ties.\r\nPress R to restart the simulation', true);
        physicsController.createMore = false;
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        var gravity = new engine_1.GravityForceGenerator(98);
        var pcObj = new pc_ball_1.PcBallObject({ openWorld: true });
        pcObj.x = (bounds.left + bounds.right) / 2;
        pcObj.y = (bounds.top + bounds.bottom) / 2;
        pcObj.mask.addForceGenerator(gravity);
        this.addObject(pcObj);
        var angle = 0;
        var angleChangeSpeed = Math.PI / 2;
        var dist = 256;
        var angleAdd = (2 * Math.PI) / BALL_COUNT;
        for (var q = 0; q < BALL_COUNT; q++) {
            var chance = Math.floor(Math.random() * 3);
            var obj = new fixed_ball_1.FixedBallObject({ openWorld: true });
            obj.attachTo = pcObj;
            obj.angle = angle;
            obj.angleChangeSpeed = angleChangeSpeed;
            obj.distance = (this.shiftPressed ? .5 + Math.random() : 1) * dist;
            angle += angleAdd;
            this.addObject(obj);
        }
    };
    return AngularVelocityScene;
}(stack_scene_1.StackScene));
exports.AngularVelocityScene = AngularVelocityScene;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var boulder_1 = __webpack_require__(12);
var bowling_ball_1 = __webpack_require__(13);
var golf_ball_1 = __webpack_require__(14);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var BALL_COUNT = 0;
var BouncingCirclesScene = (function (_super) {
    __extends(BouncingCirclesScene, _super);
    function BouncingCirclesScene(parent) {
        var _this = _super.call(this, parent) || this;
        _this.initialized = false;
        return _this;
    }
    BouncingCirclesScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject('Click anywhere on the screen to place a random ball.', true);
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        this.addForceGenerator(new engine_1.GravityForceGenerator(98));
        for (var q = 0; q < BALL_COUNT; q++) {
            var chance = Math.floor(Math.random() * 3);
            var obj = chance === 0 ? new boulder_1.BoulderObject() :
                chance === 1 ? new bowling_ball_1.BowlingBallObject() :
                    new golf_ball_1.GolfBallObject();
            obj.x = bounds.left + Math.random() * (bounds.right - bounds.left);
            obj.y = bounds.bottom + Math.random() * (bounds.top - bounds.bottom);
            this.addObject(obj);
        }
    };
    return BouncingCirclesScene;
}(stack_scene_1.StackScene));
exports.BouncingCirclesScene = BouncingCirclesScene;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var boulder_1 = __webpack_require__(12);
var bowling_ball_1 = __webpack_require__(13);
var golf_ball_1 = __webpack_require__(14);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var BALL_COUNT = 2;
var CirclesScene = (function (_super) {
    __extends(CirclesScene, _super);
    function CirclesScene(parent) {
        var _this = _super.call(this, parent) || this;
        _this.initialized = false;
        return _this;
    }
    CirclesScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject('Press enter to execute a single physics step. Click anywhere on the screen to place a random ball.');
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        for (var q = 0; q < BALL_COUNT; q++) {
            var chance = Math.floor(Math.random() * 3);
            var obj = chance === 0 ? new boulder_1.BoulderObject() :
                chance === 1 ? new bowling_ball_1.BowlingBallObject() :
                    new golf_ball_1.GolfBallObject();
            obj.mask.updatePositions = false;
            obj.x = -20 + Math.random() * 40;
            obj.y = -20 + Math.random() * 40;
            this.addObject(obj);
        }
    };
    return CirclesScene;
}(stack_scene_1.StackScene));
exports.CirclesScene = CirclesScene;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_select_1 = __webpack_require__(6);
var pc_ball_1 = __webpack_require__(15);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var BALL_COUNT = 12;
var ForceGeneratorScene = (function (_super) {
    __extends(ForceGeneratorScene, _super);
    function ForceGeneratorScene(parent) {
        var _this = _super.call(this, parent) || this;
        _this.initialized = false;
        return _this;
    }
    ForceGeneratorScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject("Click a ball to select it.\nRight click and drag to change the velocity of the selected ball.\nUse the mouse wheel to increase or decrease the selected ball's mass.\nPress P to toggle preserving momentum.\nMove the orange ball using a force generator with the arrow keys.", true);
        physicsController.createMore = false;
        physicsController.displayPreserveMass = true;
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        this.addForceGenerator(new engine_1.GravityForceGenerator(98));
        this.addForceGenerator(physicsController.dragForce = new engine_1.DragForceGenerator(.001, .001));
        for (var q = 0; q < BALL_COUNT; q++) {
            var obj_1 = new ball_select_1.BallSelectObject();
            obj_1.x = bounds.left + obj_1.radius + Math.random() * (bounds.right - bounds.left - obj_1.radius * 2);
            obj_1.y = bounds.bottom + obj_1.radius + Math.random() * (bounds.top - bounds.bottom - obj_1.radius * 2);
            this.addObject(obj_1);
        }
        var obj = new pc_ball_1.PcBallObject();
        obj.x = bounds.left + obj.radius + Math.random() * (bounds.right - bounds.left - obj.radius * 2);
        obj.y = bounds.bottom + obj.radius + Math.random() * (bounds.top - bounds.bottom - obj.radius * 2);
        this.addObject(obj);
    };
    return ForceGeneratorScene;
}(stack_scene_1.StackScene));
exports.ForceGeneratorScene = ForceGeneratorScene;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var stack_scene_1 = __webpack_require__(1);
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene(menu, parentScene) {
        var _this = _super.call(this, parentScene) || this;
        _this.menu = menu;
        _this.initialized = false;
        return _this;
    }
    MenuScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        this.addObject(this.menu);
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
    };
    return MenuScene;
}(stack_scene_1.StackScene));
exports.MenuScene = MenuScene;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_select_1 = __webpack_require__(6);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var BALL_COUNT = 12;
var MomentumMassScene = (function (_super) {
    __extends(MomentumMassScene, _super);
    function MomentumMassScene(parent) {
        var _this = _super.call(this, parent) || this;
        _this.initialized = false;
        return _this;
    }
    MomentumMassScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject("Click a ball to select it.\nRight click and drag to change the velocity of the selected ball.\nUse the mouse wheel to increase or decrease the selected ball's mass.\nPress P to toggle preserving momentum.", true);
        physicsController.createMore = false;
        physicsController.displayPreserveMass = true;
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        this.addForceGenerator(new engine_1.GravityForceGenerator(98));
        for (var q = 0; q < BALL_COUNT; q++) {
            var obj = new ball_select_1.BallSelectObject();
            obj.x = bounds.left + obj.radius + Math.random() * (bounds.right - bounds.left - obj.radius * 2);
            obj.y = bounds.bottom + obj.radius + Math.random() * (bounds.top - bounds.bottom - obj.radius * 2);
            this.addObject(obj);
        }
    };
    return MomentumMassScene;
}(stack_scene_1.StackScene));
exports.MomentumMassScene = MomentumMassScene;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var planet_1 = __webpack_require__(41);
var sun_1 = __webpack_require__(42);
var stack_scene_1 = __webpack_require__(1);
var PlanetsScene = (function (_super) {
    __extends(PlanetsScene, _super);
    function PlanetsScene(parent) {
        var _this = _super.call(this, parent) || this;
        _this.initialized = false;
        return _this;
    }
    PlanetsScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var bounds = this.camera.bounds;
        var _a = [(bounds.left + bounds.right) / 2, (bounds.bottom + bounds.top) / 2], centerx = _a[0], centery = _a[1];
        var sun = new sun_1.SunObject();
        sun.x = centerx;
        sun.y = centery;
        this.addObject(sun);
        var planet = new planet_1.PlanetObject({ openWorld: true });
        planet.x = centerx - 400;
        planet.y = centery;
        planet.mask.addForce(0, 700);
        planet.mask.addForceGenerator(new engine_1.GravityForceGenerator(sun.mask));
        this.addObject(planet);
    };
    return PlanetsScene;
}(stack_scene_1.StackScene));
exports.PlanetsScene = PlanetsScene;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_select_1 = __webpack_require__(6);
var pc_ball_1 = __webpack_require__(15);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var BALL_COUNT = 6;
var RestingContactScene = (function (_super) {
    __extends(RestingContactScene, _super);
    function RestingContactScene(parent) {
        var _this = _super.call(this, parent) || this;
        _this.initialized = false;
        return _this;
    }
    RestingContactScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject("Click a ball to select it.\nRight click and drag to change the velocity of the selected ball.\nUse the mouse wheel to increase or decrease the selected ball's mass.\nMove the orange ball using a force generator with the arrow keys.\nPress F3 to render physics debug information.", true);
        physicsController.createMore = false;
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        this.addForceGenerator(new engine_1.GravityForceGenerator(98));
        this.addForceGenerator(physicsController.dragForce = new engine_1.DragForceGenerator(.002, .002));
        for (var q = 0; q < BALL_COUNT; q++) {
            var obj_1 = new ball_select_1.BallSelectObject();
            obj_1.radius = 48;
            obj_1.x = (bounds.right + bounds.left) / 2;
            obj_1.y = bounds.top - obj_1.radius - ((obj_1.radius * 2) + 2) * q;
            this.addObject(obj_1);
        }
        var obj = new pc_ball_1.PcBallObject();
        obj.x = (bounds.right + bounds.left * 3) / 4;
        obj.y = bounds.top + obj.radius * 2;
        this.addObject(obj);
        this.game.renderPhysics = false;
    };
    return RestingContactScene;
}(stack_scene_1.StackScene));
exports.RestingContactScene = RestingContactScene;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_select_1 = __webpack_require__(6);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var SpringMeshScene = (function (_super) {
    __extends(SpringMeshScene, _super);
    function SpringMeshScene(parent, MESH_WIDTH, MESH_HEIGHT) {
        if (MESH_WIDTH === void 0) { MESH_WIDTH = 10; }
        if (MESH_HEIGHT === void 0) { MESH_HEIGHT = 10; }
        var _this = _super.call(this, parent) || this;
        _this.MESH_WIDTH = MESH_WIDTH;
        _this.MESH_HEIGHT = MESH_HEIGHT;
        _this.initialized = false;
        return _this;
    }
    SpringMeshScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject("Click and drag any ball", true);
        physicsController.createMore = false;
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        var balls = [];
        var count = 0;
        for (var q = 0; q < this.MESH_WIDTH; q++) {
            var column = [];
            balls.push(column);
            for (var w = 0; w < this.MESH_HEIGHT; w++) {
                var obj = new ball_select_1.BallSelectObject();
                obj.radius = 10;
                obj.mask.addForceGenerator(new engine_1.DragForceGenerator(.1, .5));
                obj.x = bounds.left + 50 * (q + 1);
                obj.y = bounds.bottom + 50 * (w + 1);
                this.addObject(obj);
                column.push(obj);
                count++;
            }
        }
        for (var q = 0; q < this.MESH_WIDTH; q++) {
            var column = balls[q];
            for (var w = 0; w < this.MESH_HEIGHT - 1; w++) {
                var one = column[w];
                var two = column[w + 1];
                var spring = new engine_1.SpringForceGenerator(one.mask, 50, 50);
                two.mask.addForceGenerator(spring);
            }
        }
        for (var q = 0; q < this.MESH_WIDTH - 1; q++) {
            for (var w = 0; w < this.MESH_HEIGHT; w++) {
                var one = balls[q][w];
                var two = balls[q + 1][w];
                var spring = new engine_1.SpringForceGenerator(one.mask, 50, 50);
                two.mask.addForceGenerator(spring);
            }
        }
    };
    return SpringMeshScene;
}(stack_scene_1.StackScene));
exports.SpringMeshScene = SpringMeshScene;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var ball_select_1 = __webpack_require__(6);
var physics_controller_1 = __webpack_require__(5);
var stack_scene_1 = __webpack_require__(1);
var SpringScene = (function (_super) {
    __extends(SpringScene, _super);
    function SpringScene(parent, BALL_COUNT) {
        if (BALL_COUNT === void 0) { BALL_COUNT = 2; }
        var _this = _super.call(this, parent) || this;
        _this.BALL_COUNT = BALL_COUNT;
        _this.initialized = false;
        return _this;
    }
    SpringScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        var camera = this.camera = new engine_1.Camera(this);
        camera.clearColor = 'black';
        var physicsController = new physics_controller_1.PhysicsControllerObject("Click and drag any ball. After you select one:\nL + mouse wheel to change the spring length;\nS + mouse wheel to change the spring constant;\nMouse wheel to change the ball radius/mass", true);
        physicsController.createMore = false;
        this.addObject(physicsController);
        var bounds = this.camera.bounds;
        var balls = [];
        for (var q = 0; q < this.BALL_COUNT; q++) {
            var obj = new ball_select_1.BallSelectObject();
            obj.mask.addForceGenerator(new engine_1.DragForceGenerator(.1, .5));
            obj.x = bounds.left + obj.radius + Math.random() * (bounds.right - bounds.left - obj.radius * 2);
            obj.y = bounds.bottom + obj.radius + Math.random() * (bounds.top - bounds.bottom - obj.radius * 2);
            this.addObject(obj);
            balls.push(obj);
        }
        this.firstBall = balls[0];
        for (var q = 0; q < this.BALL_COUNT - 1; q++) {
            var one = balls[q];
            var two = balls[q + 1];
            var spring = new engine_1.SpringForceGenerator(one.mask, 25, (one.radius + two.radius) * 2);
            two.mask.addForceGenerator(spring);
            two.controlSpring = spring;
            if (q === 0)
                spring.modifyOther = false;
        }
    };
    return SpringScene;
}(stack_scene_1.StackScene));
exports.SpringScene = SpringScene;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = (function () {
    function EventEmitter() {
        this._listeners = [];
        this._isEmitting = false;
    }
    EventEmitter.prototype.addListener = function (listener) {
        if (!listener || typeof listener !== 'function')
            throw new Error("Listener is not a function: " + listener);
        this._listeners.push(listener);
    };
    EventEmitter.prototype.emit = function (val) {
        if (this._isEmitting)
            throw new Error("EventEmitter.emit was recursively invoked. New value: " + val);
        this._isEmitting = true;
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(val);
        }
        this._isEmitting = false;
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=event-emitter.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(57);
var EventQueue = (function () {
    function EventQueue() {
        this.DEBUG_KEYS = false;
        this.DEBUG_MOUSE = false;
        this.DEBUG_MOUSE_VERBOSE = false;
        this.DEBUG_GAMEPAD = false;
        this.DEBUG_GAMEPAD_VERBOSE = false;
        this.GAMEPAD_AXIS_THRESHOLD = .4;
        this.ABSTRACT_BUTTON_TYPE_TIMEOUT = .5;
        this.ABSTRACT_BUTTON_TYPE_REPEAT = 15;
        this._events = [];
        this._keys = new Map();
        this._mouseButtons = new Map();
        this._pageX = 0;
        this._pageY = 0;
        this._gamepads = [];
        this._gamepadAxes = [];
        this._gamepadButtonsRaw = [];
        this._gamepadButtons = new Map();
        this._currentInput = 'keyboard';
        this._abstractButtonProviders = [];
        this.abstractButtons = new Map();
        this.mrAbstractButton = '';
        this.init();
    }
    EventQueue.prototype.init = function () {
        var body = document.getElementsByTagName('body')[0];
        this.initKeyboard(body);
        this.initMouse(body);
        this.initGamepad(window);
    };
    EventQueue.prototype.initKeyboard = function (body) {
        var _this = this;
        body.addEventListener('keydown', function (e) {
            if (e.code === 'F12')
                return;
            if (e.code === 'F4' && e.altKey)
                return;
            if (!e.ctrlKey || (e.code !== 'KeyV' && e.code !== 'KeyX' && e.code !== 'KeyC'))
                e.preventDefault();
            _this.currentInputType = 'keyboard';
            if (_this.DEBUG_KEYS)
                console.log("Key Pressed: " + e.key + "; " + e.code);
            if (!_this.isKeyDown(e.code)) {
                _this._keys.set(e.code, true);
                _this.enqueue({
                    type: 'keyPressed',
                    code: e.code,
                    altPressed: !!e.altKey,
                    ctrlPressed: !!e.ctrlKey,
                    shiftPressed: !!e.shiftKey
                });
            }
            _this.enqueue({
                type: 'keyTyped',
                key: e.key,
                code: e.code,
                altPressed: !!e.altKey,
                ctrlPressed: !!e.ctrlKey,
                shiftPressed: !!e.shiftKey
            });
        });
        body.addEventListener('keyup', function (e) {
            e.preventDefault();
            _this.currentInputType = 'keyboard';
            if (_this.DEBUG_KEYS)
                console.log("Key Released: " + e.key + "; " + e.code);
            if (_this.isKeyDown(e.code)) {
                _this._keys.set(e.code, false);
                _this.enqueue({
                    type: 'keyReleased',
                    code: e.code,
                    altPressed: !!e.altKey,
                    ctrlPressed: !!e.ctrlKey,
                    shiftPressed: !!e.shiftKey
                });
            }
        });
    };
    EventQueue.prototype.initMouse = function (body) {
        var _this = this;
        body.addEventListener('mousemove', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE_VERBOSE)
                console.log("Mouse moved. Movement: " + e.movementX + ", " + e.movementY + "; Position: " + e.pageX + ", " + e.pageY);
            if (typeof e.pageX !== 'undefined')
                _this._pageX = e.pageX;
            else
                _this._pageX += e.movementX;
            if (typeof e.pageY !== 'undefined')
                _this._pageY = e.pageY;
            else
                _this._pageY += e.movementY;
            _this.enqueue({
                type: 'mouseMoved',
                movementX: e.movementX,
                movementY: e.movementY,
                pageX: _this._pageX,
                pageY: _this._pageY
            });
        });
        body.addEventListener('mousedown', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE)
                console.log("Mouse button pressed. Button: " + e.button + "; Position: " + e.pageX + ", " + e.pageY);
            if (!_this.isMouseButtonDown(e.button)) {
                if (typeof e.pageX !== 'undefined')
                    _this._pageX = e.pageX;
                if (typeof e.pageY !== 'undefined')
                    _this._pageY = e.pageY;
                _this._mouseButtons.set(e.button, true);
                _this.enqueue({
                    type: 'mouseButtonPressed',
                    button: e.button,
                    pageX: _this._pageX,
                    pageY: _this._pageY
                });
            }
        });
        body.addEventListener('mouseup', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE)
                console.log("Mouse button released. Button: " + e.button + "; Position: " + e.pageX + ", " + e.pageY);
            if (_this.isMouseButtonDown(e.button)) {
                if (typeof e.pageX !== 'undefined')
                    _this._pageX = e.pageX;
                if (typeof e.pageY !== 'undefined')
                    _this._pageY = e.pageY;
                _this._mouseButtons.set(e.button, false);
                _this.enqueue({
                    type: 'mouseButtonReleased',
                    button: e.button,
                    pageX: _this._pageX,
                    pageY: _this._pageY
                });
            }
        });
        body.addEventListener('wheel', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE)
                console.log("Mouse wheel. delta: " + e.deltaY + "; Position: " + e.pageX + ", " + e.pageY);
            if (typeof e.pageX !== 'undefined')
                _this._pageX = e.pageX;
            if (typeof e.pageY !== 'undefined')
                _this._pageY = e.pageY;
            _this.enqueue({
                type: 'mouseWheel',
                delta: e.deltaY,
                pageX: _this._pageX,
                pageY: _this._pageY
            });
        });
    };
    EventQueue.prototype.initGamepad = function (window) {
        var _this = this;
        window.addEventListener('gamepadconnected', function (e) { return _this.connectGamepad(e.gamepad); });
        window.addEventListener('gamepaddisconnected', function (e) { return _this.disconnectGamepad(e.gamepad); });
        if (!window.navigator)
            return;
        for (var _i = 0, _a = navigator.getGamepads(); _i < _a.length; _i++) {
            var gp = _a[_i];
            if (!gp || !gp.connected)
                continue;
            this.connectGamepad(gp);
        }
    };
    EventQueue.prototype.connectGamepad = function (gp) {
        if (gp.mapping !== 'standard') {
            console.error("Gamepad connected with invalid mapping: \"" + gp.mapping + "\"");
            return;
        }
        this._gamepads.push(gp.index);
        if (this.DEBUG_GAMEPAD)
            console.log("Gamepad connected. ID: " + gp.id + "; Index: " + gp.index);
        this.refreshGamepads();
    };
    EventQueue.prototype.disconnectGamepad = function (gp) {
        var idx = this._gamepads.indexOf(gp.index);
        if (idx === -1)
            return;
        this._gamepads.splice(idx);
        if (this.DEBUG_GAMEPAD)
            console.log("Gamepad disconnected. ID: " + gp.id + "; Index: " + gp.index);
        this.refreshGamepads();
    };
    EventQueue.prototype.refreshGamepads = function () {
        if (!window.navigator)
            return;
        var axes = [];
        for (var q = 0; q < this._gamepadAxes.length; q++) {
            axes[q] = 0;
        }
        var buttons = [];
        for (var q = 0; q < this._gamepadButtonsRaw.length; q++) {
            buttons[q] = false;
        }
        var gamepads = navigator.getGamepads();
        for (var _i = 0, _a = this._gamepads; _i < _a.length; _i++) {
            var gpIdx = _a[_i];
            var gp = gamepads[gpIdx];
            if (!gp.connected)
                continue;
            for (var q = 0; q < gp.axes.length; q++) {
                if (typeof axes[q] === 'undefined')
                    axes[q] = 0;
                axes[q] += gp.axes[q];
            }
            for (var q = 0; q < gp.buttons.length; q++) {
                if (typeof buttons[q] === 'undefined')
                    buttons[q] = false;
                if (gp.buttons[q].pressed)
                    buttons[q] = true;
            }
        }
        for (var q = 0; q < axes.length; q++) {
            if (Math.abs(axes[q]) > 1)
                axes[q] = Math.sign(axes[q]);
            if (axes[q] !== 0)
                this.currentInputType = 'gamepad';
            if (typeof this._gamepadAxes[q] === 'undefined')
                this._gamepadAxes[q] = 0;
            if (this._gamepadAxes[q] !== axes[q]) {
                if (this.DEBUG_GAMEPAD_VERBOSE)
                    console.log("Gamepad axis changed. Idx: " + q + ", Value: " + axes[q] + "; Previous: " + this._gamepadAxes[q]);
                this.enqueue({
                    type: 'gamepadAxisChanged',
                    idx: q,
                    previousValue: this._gamepadAxes[q],
                    value: axes[q]
                });
                var oldAxisSign = Math.abs(this._gamepadAxes[q]) < this.GAMEPAD_AXIS_THRESHOLD ? 0 : Math.sign(this._gamepadAxes[q]);
                var newAxisSign = Math.abs(axes[q]) < this.GAMEPAD_AXIS_THRESHOLD ? 0 : Math.sign(axes[q]);
                if (oldAxisSign !== newAxisSign) {
                    var axisNames = events_1.standardGamepadAxisNames[q] || ["Axis" + q + "Negative", "Axis" + q + "Positive"];
                    if (this._gamepadAxes[q] < -this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button released. Button: " + axisNames[0]);
                        this._gamepadButtons.set(axisNames[0], false);
                        this.enqueue({
                            type: 'gamepadButtonReleased',
                            button: axisNames[0]
                        });
                    }
                    else if (this._gamepadAxes[q] > this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button released. Button: " + axisNames[1]);
                        this._gamepadButtons.set(axisNames[1], false);
                        this.enqueue({
                            type: 'gamepadButtonReleased',
                            button: axisNames[1]
                        });
                    }
                    if (axes[q] < -this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button pressed. Button: " + axisNames[0]);
                        this._gamepadButtons.set(axisNames[0], true);
                        this.enqueue({
                            type: 'gamepadButtonPressed',
                            button: axisNames[0]
                        });
                    }
                    else if (axes[q] > this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button pressed. Button: " + axisNames[1]);
                        this._gamepadButtons.set(axisNames[1], true);
                        this.enqueue({
                            type: 'gamepadButtonPressed',
                            button: axisNames[1]
                        });
                    }
                }
            }
            this._gamepadAxes[q] = axes[q];
        }
        for (var q = 0; q < buttons.length; q++) {
            var buttonName = events_1.standardGamepadButtonNames[q] || "" + q;
            if (!this._gamepadButtonsRaw[q])
                this._gamepadButtonsRaw[q] = false;
            if (!this._gamepadButtonsRaw[q] && buttons[q]) {
                if (this.DEBUG_GAMEPAD)
                    console.log("Gamepad button pressed. Button: " + buttonName);
                this._gamepadButtons.set(buttonName, true);
                this.currentInputType = 'gamepad';
                this.enqueue({
                    type: 'gamepadButtonPressed',
                    button: buttonName
                });
            }
            else if (this._gamepadButtonsRaw[q] && !buttons[q]) {
                if (this.DEBUG_GAMEPAD)
                    console.log("Gamepad button released. Button: " + buttonName);
                this._gamepadButtons.set(buttonName, false);
                this.currentInputType = 'gamepad';
                this.enqueue({
                    type: 'gamepadButtonReleased',
                    button: buttonName
                });
            }
            this._gamepadButtonsRaw[q] = buttons[q];
        }
    };
    EventQueue.prototype.tick = function (delta) {
        this.refreshGamepads();
        if (this.isAbstractButtonDown(this.mrAbstractButton) && this.ABSTRACT_BUTTON_TYPE_REPEAT !== 0) {
            this.mrAbstractButtonTimeout -= delta;
            while (this.mrAbstractButtonTimeout < 0) {
                this.mrAbstractButtonTimeout += 1 / this.ABSTRACT_BUTTON_TYPE_REPEAT;
                this.enqueue({
                    type: 'abstractButtonTyped',
                    name: this.mrAbstractButton
                });
            }
        }
    };
    Object.defineProperty(EventQueue.prototype, "currentInputType", {
        get: function () {
            return this._currentInput;
        },
        set: function (val) {
            if (this._currentInput === val)
                return;
            this.enqueue({
                type: 'currentInputTypeChanged',
                previous: this._currentInput,
                current: this._currentInput = val
            });
        },
        enumerable: true,
        configurable: true
    });
    EventQueue.prototype.addAbstractButtonProvider = function (provider) {
        this._abstractButtonProviders.push(provider);
    };
    EventQueue.prototype.isKeyDown = function (code) {
        if (!this._keys.has(code))
            return false;
        return this._keys.get(code);
    };
    EventQueue.prototype.isMouseButtonDown = function (button) {
        if (!this._mouseButtons.has(button))
            return false;
        return this._mouseButtons.get(button);
    };
    Object.defineProperty(EventQueue.prototype, "mousePosition", {
        get: function () {
            return { x: this._pageX, y: this._pageY };
        },
        enumerable: true,
        configurable: true
    });
    EventQueue.prototype.isGamepadButtonDown = function (idx) {
        if (typeof idx === 'number') {
            if (idx < 0 || idx >= this._gamepadButtonsRaw.length)
                return false;
            return this._gamepadButtonsRaw[idx];
        }
        else {
            return this._gamepadButtons.get(idx) || false;
        }
    };
    EventQueue.prototype.getGamepadAxis = function (idx) {
        if (idx < 0 || idx >= this._gamepadAxes.length)
            return 0;
        return this._gamepadAxes[idx];
    };
    EventQueue.prototype.isAbstractButtonDown = function (name, manualCheck) {
        if (manualCheck === void 0) { manualCheck = false; }
        if (!this.abstractButtons.has(name))
            return false;
        if (manualCheck) {
            for (var _i = 0, _a = this._abstractButtonProviders; _i < _a.length; _i++) {
                var provider = _a[_i];
                if (provider.isAbstractButtonDown(name))
                    return true;
            }
            return false;
        }
        else {
            return this.abstractButtons.get(name);
        }
    };
    EventQueue.prototype.enqueue = function (e) {
        var lastEvent = this._events[this._events.length - 1];
        if (lastEvent) {
            if (lastEvent.type == e.type) {
                switch (e.type) {
                    case 'mouseMoved':
                        lastEvent.movementX += e.movementX;
                        lastEvent.movementY += e.movementY;
                        lastEvent.pageX = e.pageX;
                        lastEvent.pageY = e.pageY;
                        return;
                    case 'mouseWheel':
                        lastEvent.delta += e.delta;
                        return;
                    case 'canvasResize':
                        lastEvent.size = e.size;
                        return;
                    case 'gamepadAxisChanged':
                        lastEvent.value = e.value;
                        if (lastEvent.value === lastEvent.previousValue)
                            this._events.splice(this._events.length - 1, 1);
                        return;
                }
            }
        }
        for (var _i = 0, _a = this._abstractButtonProviders; _i < _a.length; _i++) {
            var provider = _a[_i];
            e = provider.transformEvent(e) || e;
        }
        this._events.push(e);
        if (e.type === 'abstractButtonPressed') {
            this.mrAbstractButton = e.name;
            this.mrAbstractButtonTimeout = this.ABSTRACT_BUTTON_TYPE_TIMEOUT;
            this.enqueue({
                type: 'abstractButtonTyped',
                name: e.name,
                wrappedEvent: e.wrappedEvent
            });
        }
    };
    EventQueue.prototype.clearQueue = function () {
        return this._events.splice(0);
    };
    return EventQueue;
}());
exports.EventQueue = EventQueue;
//# sourceMappingURL=event-queue.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
    MouseButton[MouseButton["BrowserBack"] = 3] = "BrowserBack";
    MouseButton[MouseButton["BrowserForward"] = 5] = "BrowserForward";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
exports.standardGamepadButtonNames = [
    'A', 'B', 'X', 'Y',
    'TriggerLeft', 'TriggerRight', 'TriggerLeftAlt', 'TriggerRightAlt',
    'Back', 'Start',
    'LeftStick', 'RightStick',
    'DPadUp', 'DPadDown', 'DPadLeft', 'DPadRight',
    'Center'
];
exports.standardGamepadAxisNames = [
    ['LeftStickLeft', 'LeftStickRight'],
    ['LeftStickUp', 'LeftStickDown'],
    ['RightStickLeft', 'RightStickRight'],
    ['RightStickUp', 'RightStickDown'],
];
//# sourceMappingURL=events.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(57));
__export(__webpack_require__(62));
__export(__webpack_require__(61));
//# sourceMappingURL=index.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = __webpack_require__(17);
var merge = __webpack_require__(2);
var AudioSourceObject = (function (_super) {
    __extends(AudioSourceObject, _super);
    function AudioSourceObject(name, audio, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, name, merge({
            shouldRender: false
        }, opts)) || this;
        _this.audio = audio;
        _this._shouldLoop = false;
        _this._sceneIndependent = false;
        _this._beginPlay = true;
        if (typeof opts.shouldLoop !== 'undefined')
            _this._shouldLoop = opts.shouldLoop;
        if (typeof opts.sceneIndependent !== 'undefined')
            _this._sceneIndependent = opts.sceneIndependent;
        if (typeof opts.beginPlay !== 'undefined')
            _this._beginPlay = opts.beginPlay;
        return _this;
    }
    Object.defineProperty(AudioSourceObject.prototype, "shouldLoop", {
        get: function () {
            return this._shouldLoop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioSourceObject.prototype, "sceneIndependent", {
        get: function () {
            return this._sceneIndependent;
        },
        enumerable: true,
        configurable: true
    });
    AudioSourceObject.prototype.addToScene = function (scene) {
        var _this = this;
        _super.prototype.addToScene.call(this, scene);
        var theirAudio = this.resources.loadAudio(this.audio.src);
        this._myAudio = document.createElement('audio');
        this._myAudio.src = theirAudio.src;
        this._myAudio.onended = function () {
            if (_this._shouldLoop)
                _this._myAudio.play();
            else if (_this.scene)
                _this.scene.removeObject(_this);
        };
        if ((this.game.scene == scene || this.sceneIndependent) && this._beginPlay)
            this._myAudio.play();
    };
    Object.defineProperty(AudioSourceObject.prototype, "myAudio", {
        get: function () {
            return this._myAudio;
        },
        enumerable: true,
        configurable: true
    });
    AudioSourceObject.prototype.onSceneEnter = function () {
        if (this.myAudio.paused)
            this._myAudio.play();
    };
    AudioSourceObject.prototype.onSceneExit = function () {
        if (!this.myAudio.paused && !this.sceneIndependent)
            this._myAudio.pause();
    };
    return AudioSourceObject;
}(game_object_1.GameObject));
exports.AudioSourceObject = AudioSourceObject;
//# sourceMappingURL=audio-source-object.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(59));
//# sourceMappingURL=index.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GamepadAbstractButtonProvider = (function () {
    function GamepadAbstractButtonProvider(queue) {
        this.queue = queue;
        this._buttons = new Map();
    }
    GamepadAbstractButtonProvider.prototype.bindAbstractButton = function (name) {
        var buttons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            buttons[_i - 1] = arguments[_i];
        }
        for (var _a = 0, buttons_1 = buttons; _a < buttons_1.length; _a++) {
            var button = buttons_1[_a];
            if (this._buttons.has(button))
                throw new Error("The gamepad button '" + button + "' is already registered to the '" + this._buttons.get(button) + "' abstract button.");
            this._buttons.set(button, name);
            if (!this.queue.abstractButtons.has(name))
                this.queue.abstractButtons.set(name, false);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isGamepadButtonDown(button);
            if (!previous && current) {
                this.queue.abstractButtons.set(name, true);
                this.queue.enqueue({
                    type: 'abstractButtonPressed',
                    name: name
                });
            }
        }
    };
    GamepadAbstractButtonProvider.prototype.unbindAbstractButton = function (name) {
        var buttons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            buttons[_i - 1] = arguments[_i];
        }
        for (var _a = 0, buttons_2 = buttons; _a < buttons_2.length; _a++) {
            var button = buttons_2[_a];
            if (!this._buttons.has(button) || this._buttons.get(button) !== name)
                throw new Error("The gamepad button '" + button + "' is not registered to the '" + name + "' abstract button.");
            this._buttons.delete(button);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isAbstractButtonDown(name, true);
            if (previous && !current) {
                this.queue.abstractButtons.set(name, false);
                this.queue.enqueue({
                    type: 'abstractButtonReleased',
                    name: name
                });
            }
        }
    };
    GamepadAbstractButtonProvider.prototype.transformEvent = function (e) {
        if (e.type === 'gamepadButtonPressed') {
            if (this._buttons.has(e.button)) {
                var abName = this._buttons.get(e.button);
                if (!this.queue.isAbstractButtonDown(abName)) {
                    this.queue.abstractButtons.set(abName, true);
                    this.queue.enqueue({
                        type: 'abstractButtonPressed',
                        name: abName,
                        wrappedEvent: e
                    });
                }
            }
        }
        else if (e.type === 'gamepadButtonReleased') {
            if (this._buttons.has(e.button)) {
                var abName = this._buttons.get(e.button);
                if (this.queue.isAbstractButtonDown(abName) && !this.queue.isAbstractButtonDown(abName, true)) {
                    this.queue.abstractButtons.set(abName, false);
                    this.queue.enqueue({
                        type: 'abstractButtonReleased',
                        name: abName,
                        wrappedEvent: e
                    });
                }
            }
        }
        else
            return null;
    };
    GamepadAbstractButtonProvider.prototype.isAbstractButtonDown = function (name) {
        for (var _i = 0, _a = this._buttons.keys(); _i < _a.length; _i++) {
            var button = _a[_i];
            if (this._buttons.get(button) === name) {
                if (this.queue.isGamepadButtonDown(button))
                    return true;
            }
        }
        return false;
    };
    return GamepadAbstractButtonProvider;
}());
exports.GamepadAbstractButtonProvider = GamepadAbstractButtonProvider;
//# sourceMappingURL=gamepad-abstract-button-provider.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardAbstractButtonProvider = (function () {
    function KeyboardAbstractButtonProvider(queue) {
        this.queue = queue;
        this._keys = new Map();
    }
    KeyboardAbstractButtonProvider.prototype.bindAbstractButton = function (name) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            if (this._keys.has(key))
                throw new Error("The key '" + key + "' is already registered to the '" + this._keys.get(key) + "' abstract button.");
            this._keys.set(key, name);
            if (!this.queue.abstractButtons.has(name))
                this.queue.abstractButtons.set(name, false);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isKeyDown(key);
            if (!previous && current) {
                this.queue.abstractButtons.set(name, true);
                this.queue.enqueue({
                    type: 'abstractButtonPressed',
                    name: name
                });
            }
        }
    };
    KeyboardAbstractButtonProvider.prototype.unbindAbstractButton = function (name) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
            var key = keys_2[_a];
            if (!this._keys.has(key) || this._keys.get(key) !== name)
                throw new Error("The key '" + key + "' is not registered to the '" + name + "' abstract button.");
            this._keys.delete(key);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isAbstractButtonDown(name, true);
            if (previous && !current) {
                this.queue.abstractButtons.set(name, false);
                this.queue.enqueue({
                    type: 'abstractButtonReleased',
                    name: name
                });
            }
        }
    };
    KeyboardAbstractButtonProvider.prototype.transformEvent = function (e) {
        if (e.type === 'keyPressed') {
            if (this._keys.has(e.code)) {
                var abName = this._keys.get(e.code);
                if (!this.queue.isAbstractButtonDown(abName)) {
                    this.queue.abstractButtons.set(abName, true);
                    this.queue.enqueue({
                        type: 'abstractButtonPressed',
                        name: abName,
                        wrappedEvent: e
                    });
                }
            }
        }
        else if (e.type === 'keyReleased') {
            if (this._keys.has(e.code)) {
                var abName = this._keys.get(e.code);
                if (this.queue.isAbstractButtonDown(abName) && !this.queue.isAbstractButtonDown(abName, true)) {
                    this.queue.abstractButtons.set(abName, false);
                    this.queue.enqueue({
                        type: 'abstractButtonReleased',
                        name: abName,
                        wrappedEvent: e
                    });
                }
            }
        }
        else
            return null;
    };
    KeyboardAbstractButtonProvider.prototype.isAbstractButtonDown = function (name) {
        for (var _i = 0, _a = this._keys.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this._keys.get(key) === name) {
                if (this.queue.isKeyDown(key))
                    return true;
            }
        }
        return false;
    };
    return KeyboardAbstractButtonProvider;
}());
exports.KeyboardAbstractButtonProvider = KeyboardAbstractButtonProvider;
//# sourceMappingURL=keyboard-abstract-button-provider.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=main.map