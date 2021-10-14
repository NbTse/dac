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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(21);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

window.$ = window.jQuery = __webpack_require__(0);
__webpack_require__(1);
__webpack_require__(5);
var AOS = __webpack_require__(6);

// App
__webpack_require__(7);
__webpack_require__(9);
__webpack_require__(12);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
// require('./video');
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);

//

AOS.init();

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(0), __webpack_require__(1)) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.6.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
      $__default['default'](element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Alert._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Alert;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.6.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY$1, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
  $__default['default'].fn[NAME$1].Constructor = Button;

  $__default['default'].fn[NAME$1].noConflict = function () {
    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.6.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY$2);
      $__default['default'].removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._updateInterval = function _updateInterval() {
      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      if (!element) {
        return;
      }

      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;
      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$2);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME$2].Constructor = Carousel;

  $__default['default'].fn[NAME$2].noConflict = function () {
    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.6.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$3);

        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME$3].Constructor = Collapse;

  $__default['default'].fn[NAME$3].noConflict = function () {
    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.6.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$4);
      $__default['default'](this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME$4].Constructor = Dropdown;

  $__default['default'].fn[NAME$4].noConflict = function () {
    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.6.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
      $__default['default'](this._element).trigger(hideEventPrevented);

      if (hideEventPrevented.isDefaultPrevented()) {
        return;
      }

      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
      $__default['default'](this._element).off(Util.TRANSITION_END);
      $__default['default'](this._element).one(Util.TRANSITION_END, function () {
        _this3._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
            _this3._element.style.overflowY = '';
          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
        }
      }).emulateTransitionEnd(modalTransitionDuration);

      this._element.focus();
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this9._config.backdrop === 'static') {
            _this9._triggerBackdropTransition();
          } else {
            _this9.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$5);

        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
  $__default['default'].fn[NAME$5].Constructor = Modal;

  $__default['default'].fn[NAME$5].noConflict = function () {
    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.6.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.6.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default['default'](event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default['default'](event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $__default['default'](this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default['default'](this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default['default'](this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default['default'](tip).appendTo(container);
        }

        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4);
        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default['default'](this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default['default'](content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default['default'](content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _extends({}, defaultBsConfig, this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default['default'](this.config.container);
      }

      return $__default['default'](document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default['default'](event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default['default'](event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default['default'](this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $element.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
  $__default['default'].fn[NAME$6].Constructor = Tooltip;

  $__default['default'].fn[NAME$6].noConflict = function () {
    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.6.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default['default'](this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default['default'](this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $__default['default'](this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
  $__default['default'].fn[NAME$7].Constructor = Popover;

  $__default['default'].fn[NAME$7].noConflict = function () {
    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.6.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$8);
      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

  $__default['default'].fn[NAME$8].noConflict = function () {
    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.6.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $__default['default'](previous).trigger(hideEvent);
      }

      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $__default['default'](previous).trigger(hiddenEvent);
        $__default['default'](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default['default'](this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
  $__default['default'].fn[NAME$9].Constructor = Tab;

  $__default['default'].fn[NAME$9].noConflict = function () {
    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.6.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
      $__default['default'](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
      $__default['default'](this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
      $__default['default'].removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._clearTimeout = function _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
  $__default['default'].fn[NAME$a].Constructor = Toast;

  $__default['default'].fn[NAME$a].noConflict = function () {
    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Typed = __webpack_require__(8);

$(function () {

    // new Typed("#typed-main-text", {
    //     stringsElement: "#typed-main-text-strings",
    //     typeSpeed: 70,
    //     backSpeed: 20,
    //     backDelay: 6000,
    //     startDelay: 1500,
    //     loop: true,
    //     showCursor: false
    // });

});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Typed"] = factory();
	else
		root["Typed"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, false);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.setAttribute('aria-hidden', true);
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Raphael = __webpack_require__(10);
var svg = __webpack_require__(11).svg;
var contributors = [];
var countries = [];
var mapCircles = [];
var selectedContributor = null;
var paper;
var mainLayer;
var DATA = {};

$(init);

function init() {

    getData().then(function () {
        contributors = DATA.contributors;
        countries = DATA.countries;

        createMap();

        setCountriesDropdown();
        setCountryClickListener();

        $("#prev-contributor").on('click', prevContributor);
        $("#next-contributor").on('click', nextContributor);

        updateContributorBox(contributors[0]);
        updateNextPrevButtonsState(0);
    });
}

function createMap() {
    paper = Raphael('map');
    paper.setViewBox(0, 0, 1114, 665, true);
    paper.setSize('100%', '100%');

    mainLayer = paper.set();
    var map = paper.path(svg);

    mainLayer.attr({ 'id': 'mainLayer', 'name': 'mainLayer' });

    map.attr({
        'class': 'map',
        'parent': 'mainLayer',
        'stroke-width': '0',
        'stroke-opacity': '1'
    }).data('id', 'map');

    mainLayer.push(map);

    createCircles();
}

function createCircles() {
    contributors.forEach(function (contributor, key) {
        var mapCircle = paper.circle(contributor.pos.x, contributor.pos.y, 5);
        mapCircle.attr({
            'class': "circle " + (key == 0 ? 'active' : ''),
            'parent': 'mainLayer',
            'stroke-width': '0'
        }).data('id', "circle_" + key).click(onCircleClick.bind(null, contributor));

        mainLayer.push(mapCircle);
        mapCircles.push(mapCircle);
    });
}

function removeCircles() {
    mainLayer.forEach(function (item) {
        if (item.type == "circle") {
            item[0].remove();
        }
    });
    mapCircles = [];
}

function onCircleClick(contributor, evt) {
    setCircleActive(evt.target);
    updateContributorBox(contributor);
}

function setCircleActive(target) {
    mapCircles.forEach(function (circle) {
        $(circle.node).removeClass('active');
    });
    $(target).addClass('active');
}

function setCountriesDropdown() {
    var selected = countries[0];
    var dropdownItems = countries.map(function (country, key) {
        return $("<a class=\"dropdown-item\" key=\"" + key + "\" href=\"#\"><span class=\"flag-icon flag-icon-" + country.id + "\"></span> " + country.name + "</a>");
    });

    $("#countries-dropdown").find(".dropdown-menu").html(dropdownItems);

    setSelectedCountry(selected);
}

function setCountryClickListener() {
    $("#countries-dropdown").find(".dropdown-menu a").on('click', function (e) {
        e.preventDefault();
        var key = $(this).attr("key");
        onCountrySelected(countries[key]);
    });
}

function onCountrySelected(country) {
    setSelectedCountry(country);
    contributors = DATA.contributors.filter(function (contributor) {
        return !country.id || country.id == contributor.country;
    });
    removeCircles();
    createCircles();
    updateContributorBox(contributors[0]);
    updateNextPrevButtonsState(0);
}

function clearMap(paper) {
    var paperDom = paper.canvas;
    paperDom.parentNode.removeChild(paperDom);
}

function setSelectedCountry(country) {
    $("#countries-dropdown").find(".dropdown-toggle").html("<span class=\"flag-icon flag-icon-" + country.id + "\"></span> " + country.name);
}

function updateContributorBox(contributor) {
    selectedContributor = contributor;
    $("#contributor-box img").attr("src", contributor.avatar);
    $("#contributor-box h5 span").text(contributor.name);
    $("#contributor-box h5 small").text(contributor.jobRole);
    $("#contributor-box p").text(contributor.description);
    $("#contributor-box .flag-icon").attr('class', function (i, c) {
        return c.replace(/(^|\s)flag-icon-\S+/g, " flag-icon-" + contributor.country);
    });

    if (contributor.twitter) {
        $("#contributor-box .link-twitter").attr("href", contributor.twitter).show();
    } else {
        $("#contributor-box .link-twitter").hide();
    }
    if (contributor.telegram) {
        $("#contributor-box .link-telegram").attr("href", contributor.telegram).show();
    } else {
        $("#contributor-box .link-telegram").hide();
    }
    if (contributor.linkedin) {
        $("#contributor-box .link-linkedin").attr("href", contributor.linkedin).show();
    } else {
        $("#contributor-box .link-linkedin").hide();
    }
    if (contributor.facebook) {
        $("#contributor-box .link-facebook").attr("href", contributor.facebook).show();
    } else {
        $("#contributor-box .link-facebook").hide();
    }
    if (contributor.community) {
        $("#contributor-box .link-community").attr("href", contributor.community).show();
    } else {
        $("#contributor-box .link-community").hide();
    }
    if (contributor.email) {
        $("#contributor-box .link-email").attr("href", contributor.email).show();
    } else {
        $("#contributor-box .link-email").hide();
    }
}

function prevContributor() {
    var _getNextOrPrevContrib = getNextOrPrevContributor(-1),
        contributor = _getNextOrPrevContrib.contributor,
        index = _getNextOrPrevContrib.index;

    updateContributorBox(contributor);
    setCircleActive(mapCircles[index][0]);
    updateNextPrevButtonsState(index);
}

function nextContributor() {
    var _getNextOrPrevContrib2 = getNextOrPrevContributor(1),
        contributor = _getNextOrPrevContrib2.contributor,
        index = _getNextOrPrevContrib2.index;

    updateContributorBox(contributor);
    setCircleActive(mapCircles[index][0]);
    updateNextPrevButtonsState(index);
}

function getNextOrPrevContributor(position) {
    var index = contributors.indexOf(selectedContributor) + position;
    index = contributors[index] ? index : 0;
    return {
        contributor: contributors[index],
        index: index
    };
}

function updateNextPrevButtonsState(index) {
    if (index + 1 >= contributors.length) {
        $("#next-contributor").addClass('disabled');
    } else {
        $("#next-contributor").removeClass('disabled');
    }
    if (index == 0) {
        $("#prev-contributor").addClass('disabled');
    } else {
        $("#prev-contributor").removeClass('disabled');
    }
}

function getData() {
    return $.get('/data').then(function (res) {
        DATA = res;
    }, function (err) {
        console.error(err);
    });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Raphael=e():t.Raphael=e()}(window,function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var i,n;i=[r(2)],void 0===(n=function(t){function e(i){if(e.is(i,"function"))return r?i():t.on("raphael.DOMload",i);if(e.is(i,A))return e._engine.create[c](e,i.splice(0,3+e.is(i[0],T))).add(i);var n=Array.prototype.slice.call(arguments,0);if(e.is(n[n.length-1],"function")){var a=n.pop();return r?a.call(e._engine.create[c](e,n)):t.on("raphael.DOMload",function(){a.call(e._engine.create[c](e,n))})}return e._engine.create[c](e,arguments)}e.version="2.3.0",e.eve=t;var r,i,n=/[, ]+/,a={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},s=/\{(\d+)\}/g,o="hasOwnProperty",l={doc:document,win:window},h={was:Object.prototype[o].call(l.win,"Raphael"),is:l.win.Raphael},u=function(){this.ca=this.customAttributes={}},c="apply",f="concat",p="ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,d="",g=" ",x=String,v="split",y="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[v](g),m={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},b=x.prototype.toLowerCase,_=Math,w=_.max,k=_.min,B=_.abs,C=_.pow,S=_.PI,T="number",A="array",M=Object.prototype.toString,E=(e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),N={NaN:1,Infinity:1,"-Infinity":1},L=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,P=_.round,z=parseFloat,F=parseInt,R=x.prototype.toUpperCase,j=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,class:""},I=e._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},D=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,q={hs:1,rg:1},O=/,?([achlmqrstvxz]),?/gi,V=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,W=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,Y=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,G=(e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),H=function(t,e){return z(t)-z(e)},X=function(t){return t},U=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},$=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Z=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return $(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return $(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return U(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return U(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return U(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return U(e.x,e.y,e.width,e.height)}},Q=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(n=0,s=(t=Tt(t)).length;n<s;n++)for(a=1,o=(l=t[n]).length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=l,e.type=l.win.SVGAngle||l.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var J,K=l.doc.createElement("div");if(K.innerHTML='<v:shape adj="1"/>',(J=K.firstChild).style.behavior="url(#default#VML)",!J||"object"!=typeof J.adj)return e.type=d;K=null}function tt(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[o](r)&&(e[r]=tt(t[r]));return e}e.svg=!(e.vml="VML"==e.type),e._Paper=u,e.fn=i=u.prototype=e.prototype,e._id=0,e.is=function(t,e){return"finite"==(e=b.call(e))?!N[o](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||M.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*_.atan2(-l,-o)/S+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*S/180},e.deg=function(t){return Math.round(180*t/S%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,A)){for(var n=t.length;n--;)if(B(t[n]-r)<=i)return t[n]}else{var a=r%(t=+t);if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var et,rt;e.createUUID=(et=/[xy]/g,rt=function(t){var e=16*_.random()|0;return("x"==t?e:3&e|8).toString(16)},function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(et,rt).toUpperCase()});e.setWindow=function(r){t("raphael.setWindow",e,l.win,r),l.win=r,l.doc=l.win.document,e._engine.initWin&&e._engine.initWin(l.win)};var it=function(t){if(e.vml){var r,i=/^\s+|\s+$/g;try{var n=new ActiveXObject("htmlfile");n.write("<body>"),n.close(),r=n.body}catch(t){r=createPopup().document.body}var a=r.createTextRange();it=ht(function(t){try{r.style.color=x(t).replace(i,d);var e=a.queryCommandValue("ForeColor");return"#"+("000000"+(e=(255&e)<<16|65280&e|(16711680&e)>>>16).toString(16)).slice(-6)}catch(t){return"none"}})}else{var s=l.doc.createElement("i");s.title="Raphaël Colour Picker",s.style.display="none",l.doc.body.appendChild(s),it=ht(function(t){return s.style.color=t,l.doc.defaultView.getComputedStyle(s,d).getPropertyValue("color")})}return it(t)},nt=function(){return"hsb("+[this.h,this.s,this.b]+")"},at=function(){return"hsl("+[this.h,this.s,this.l]+")"},st=function(){return this.hex},ot=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,"string")){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},lt=function(t,r,i,n){var a={r:t*=255,g:r*=255,b:i*=255,hex:e.rgb(t,r,i),toString:st};return e.is(n,"finite")&&(a.opacity=n),a};function ht(t,e,r){return function i(){var n=Array.prototype.slice.call(arguments,0),a=n.join("␀"),s=i.cache=i.cache||{},l=i.count=i.count||[];return s[o](a)?(function(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}(l,a),r?r(s[a]):s[a]):(l.length>=1e3&&delete s[l.shift()],l.push(a),s[a]=t[c](e,n),r?r(s[a]):s[a])}}e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"}).r=t.g=t.b=t.h=t.s=t.v=t.l=-1),t.toString=st,t},e.hsb2rgb=function(t,e,r,i){var n,a,s,o,l;return this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),o=(l=r*e)*(1-B((t=(t*=360)%360/60)%2-1)),n=a=s=r-l,lt(n+=[l,o,0,0,o,l][t=~~t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],i)},e.hsl2rgb=function(t,e,r,i){var n,a,s,o,l;return this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),o=(l=2*e*(r<.5?r:1-r))*(1-B((t=(t*=360)%360/60)%2-1)),n=a=s=r-l/2,lt(n+=[l,o,0,0,o,l][t=~~t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],i)},e.rgb2hsb=function(t,e,r){var i,n;return t=(r=ot(t,e,r))[0],e=r[1],r=r[2],{h:((0==(n=(i=w(t,e,r))-k(t,e,r))?null:i==t?(e-r)/n:i==e?(r-t)/n+2:(t-e)/n+4)+360)%6*60/360,s:0==n?0:n/i,b:i,toString:nt}},e.rgb2hsl=function(t,e,r){var i,n,a,s;return t=(r=ot(t,e,r))[0],e=r[1],r=r[2],i=((n=w(t,e,r))+(a=k(t,e,r)))/2,{h:((0==(s=n-a)?null:n==t?(e-r)/s:n==e?(r-t)/s+2:(t-e)/s+4)+360)%6*60/360,s:0==s?0:i<.5?s/(2*i):s/(2-2*i),l:i,toString:at}},e._path2string=function(){return this.join(",").replace(O,"$1")};e._preload=function(t,e){var r=l.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,l.doc.body.removeChild(this)},r.onerror=function(){l.doc.body.removeChild(this)},l.doc.body.appendChild(r),r.src=t};function ut(){return this.hex}function ct(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}e.getRGB=ht(function(t){if(!t||(t=x(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ut};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:ut};!q[o](t.toLowerCase().substring(0,2))&&"#"!=t.charAt()&&(t=it(t));var r,i,n,a,s,l,h=t.match(E);return h?(h[2]&&(n=F(h[2].substring(5),16),i=F(h[2].substring(3,5),16),r=F(h[2].substring(1,3),16)),h[3]&&(n=F((s=h[3].charAt(3))+s,16),i=F((s=h[3].charAt(2))+s,16),r=F((s=h[3].charAt(1))+s,16)),h[4]&&(l=h[4][v](D),r=z(l[0]),"%"==l[0].slice(-1)&&(r*=2.55),i=z(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=z(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),h[5]?(l=h[5][v](D),r=z(l[0]),"%"==l[0].slice(-1)&&(r*=2.55),i=z(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=z(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(r/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),e.hsb2rgb(r,i,n,a)):h[6]?(l=h[6][v](D),r=z(l[0]),"%"==l[0].slice(-1)&&(r*=2.55),i=z(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=z(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(r/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(a=z(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),e.hsl2rgb(r,i,n,a)):((h={r:r,g:i,b:n,toString:ut}).hex="#"+(16777216|n|i<<8|r<<16).toString(16).slice(1),e.is(a,"finite")&&(h.opacity=a),h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:ut}},e),e.hsb=ht(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=ht(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=ht(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=ft(t);if(r.arr)return mt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,A)&&e.is(t[0],A)&&(n=mt(t)),n.length||x(t).replace(V,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(Y,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][f](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][f](a));else for(;a.length>=i[s]&&(n.push([e][f](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=mt(n),n},e.parseTransformString=ht(function(t){if(!t)return null;var r=[];return e.is(t,A)&&e.is(t[0],A)&&(r=mt(t)),r.length||x(t).replace(W,function(t,e,i){var n=[];b.call(e);i.replace(Y,function(t,e){e&&n.push(+e)}),r.push([e][f](n))}),r.toString=e._path2string,r},this,function(t){if(!t)return t;for(var e=[],r=0;r<t.length;r++){for(var i=[],n=0;n<t[r].length;n++)i.push(t[r][n]);e.push(i)}return e});var ft=function(t){var e=ft.ps=ft.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[o](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};function pt(t,e,r,i,n){return t*(t*(-3*e+9*r-9*i+3*n)+6*e-12*r+6*i)-3*e+3*r}function dt(t,e,r,i,n,a,s,o,l){null==l&&(l=1);for(var h=(l=l>1?1:l<0?0:l)/2,u=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],c=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],f=0,p=0;p<12;p++){var d=h*u[p]+h,g=pt(d,t,r,n,s),x=pt(d,e,i,a,o),v=g*g+x*x;f+=c[p]*_.sqrt(v)}return h*f}function gt(t,e,r,i,n,a,s,o){if(!(w(t,r)<k(n,s)||k(t,r)>w(n,s)||w(e,i)<k(a,o)||k(e,i)>w(a,o))){var l=(t-r)*(a-o)-(e-i)*(n-s);if(l){var h=((t*i-e*r)*(n-s)-(t-r)*(n*o-a*s))/l,u=((t*i-e*r)*(a-o)-(e-i)*(n*o-a*s))/l,c=+h.toFixed(2),f=+u.toFixed(2);if(!(c<+k(t,r).toFixed(2)||c>+w(t,r).toFixed(2)||c<+k(n,s).toFixed(2)||c>+w(n,s).toFixed(2)||f<+k(e,i).toFixed(2)||f>+w(e,i).toFixed(2)||f<+k(a,o).toFixed(2)||f>+w(a,o).toFixed(2)))return{x:h,y:u}}}}function xt(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=dt.apply(0,t),o=dt.apply(0,r),l=w(~~(s/5),1),h=w(~~(o/5),1),u=[],c=[],f={},p=i?0:[],d=0;d<l+1;d++){var g=e.findDotsAtSegment.apply(e,t.concat(d/l));u.push({x:g.x,y:g.y,t:d/l})}for(d=0;d<h+1;d++)g=e.findDotsAtSegment.apply(e,r.concat(d/h)),c.push({x:g.x,y:g.y,t:d/h});for(d=0;d<l;d++)for(var x=0;x<h;x++){var v=u[d],y=u[d+1],m=c[x],b=c[x+1],_=B(y.x-v.x)<.001?"y":"x",C=B(b.x-m.x)<.001?"y":"x",S=gt(v.x,v.y,y.x,y.y,m.x,m.y,b.x,b.y);if(S){if(f[S.x.toFixed(4)]==S.y.toFixed(4))continue;f[S.x.toFixed(4)]=S.y.toFixed(4);var T=v.t+B((S[_]-v[_])/(y[_]-v[_]))*(y.t-v.t),A=m.t+B((S[C]-m[C])/(b[C]-m[C]))*(b.t-m.t);T>=0&&T<=1.001&&A>=0&&A<=1.001&&(i?p++:p.push({x:S.x,y:S.y,t1:k(T,1),t2:k(A,1)}))}}return p}function vt(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,p,d=i?0:[],g=0,x=t.length;g<x;g++){var v=t[g];if("M"==v[0])n=l=v[1],a=h=v[2];else{"C"==v[0]?(f=[n,a].concat(v.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var y=0,m=r.length;y<m;y++){var b=r[y];if("M"==b[0])s=u=b[1],o=c=b[2];else{"C"==b[0]?(p=[s,o].concat(b.slice(1)),s=p[6],o=p[7]):(p=[s,o,s,o,u,c,u,c],s=u,o=c);var _=xt(f,p,i);if(i)d+=_;else{for(var w=0,k=_.length;w<k;w++)_[w].segment1=g,_[w].segment2=y,_[w].bez1=f,_[w].bez2=p;d=d.concat(_)}}}}}return d}e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=C(h,3),c=C(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,x=t+2*l*(r-t)+f*(n-2*r+t),v=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,w=h*e+l*i,k=h*n+l*s,B=h*a+l*o,T=90-180*_.atan2(x-y,v-m)/S;return(x>y||v<m)&&(T+=180),{x:d,y:g,m:{x:x,y:v},n:{x:y,y:m},start:{x:b,y:w},end:{x:k,y:B},alpha:T}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=St.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return vt(t,e)},e.pathIntersectionNumber=function(t,e){return vt(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&vt(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var yt=e.pathBBox=function(t){var e=ft(t);if(e.bbox)return tt(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};for(var r,i=0,n=0,a=[],s=[],o=0,l=(t=Tt(t)).length;o<l;o++)if("M"==(r=t[o])[0])i=r[1],n=r[2],a.push(i),s.push(n);else{var h=St(i,n,r[1],r[2],r[3],r[4],r[5],r[6]);a=a[f](h.min.x,h.max.x),s=s[f](h.min.y,h.max.y),i=r[5],n=r[6]}var u=k[c](0,a),p=k[c](0,s),d=w[c](0,a),g=w[c](0,s),x=d-u,v=g-p,y={x:u,y:p,x2:d,y2:g,width:x,height:v,cx:u+x/2,cy:p+v/2};return e.bbox=tt(y),y},mt=function(t){var r=tt(t);return r.toString=e._path2string,r},bt=e._pathToRelative=function(t){var r=ft(t);if(r.rel)return mt(r.rel);e.is(t,A)&&e.is(t&&t[0],A)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(s=n=t[0][1],o=a=t[0][2],l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=b.call(f[0]))switch(c[0]=b.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,x=f.length;g<x;g++)i[h][g]=f[g]}var v=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][v-1];break;case"v":a+=+i[h][v-1];break;default:n+=+i[h][v-2],a+=+i[h][v-1]}}return i.toString=e._path2string,r.rel=mt(i),i},_t=e._pathToAbsolute=function(t){var r=ft(t);if(r.abs)return mt(r.abs);if(e.is(t,A)&&e.is(t&&t[0],A)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(s=n=+t[0][1],o=a=+t[0][2],l++,i[0]=["M",n,a]);for(var h,u,c=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=l,d=t.length;p<d;p++){if(i.push(h=[]),(u=t[p])[0]!=R.call(u[0]))switch(h[0]=R.call(u[0]),h[0]){case"A":h[1]=u[1],h[2]=u[2],h[3]=u[3],h[4]=u[4],h[5]=u[5],h[6]=+(u[6]+n),h[7]=+(u[7]+a);break;case"V":h[1]=+u[1]+a;break;case"H":h[1]=+u[1]+n;break;case"R":for(var g=[n,a][f](u.slice(1)),x=2,v=g.length;x<v;x++)g[x]=+g[x]+n,g[++x]=+g[x]+a;i.pop(),i=i[f](ct(g,c));break;case"M":s=+u[1]+n,o=+u[2]+a;default:for(x=1,v=u.length;x<v;x++)h[x]=+u[x]+(x%2?n:a)}else if("R"==u[0])g=[n,a][f](u.slice(1)),i.pop(),i=i[f](ct(g,c)),h=["R"][f](u.slice(-2));else for(var y=0,m=u.length;y<m;y++)h[y]=u[y];switch(h[0]){case"Z":n=s,a=o;break;case"H":n=h[1];break;case"V":a=h[1];break;case"M":s=h[h.length-2],o=h[h.length-1];default:n=h[h.length-2],a=h[h.length-1]}}return i.toString=e._path2string,r.abs=mt(i),i},wt=function(t,e,r,i){return[t,e,r,i,r,i]},kt=function(t,e,r,i,n,a){return[1/3*t+2/3*r,1/3*e+2/3*i,1/3*n+2/3*r,1/3*a+2/3*i,n,a]},Bt=function(t,e,r,i,n,a,s,o,l,h){var u,c=120*S/180,p=S/180*(+n||0),d=[],g=ht(function(t,e,r){return{x:t*_.cos(r)-e*_.sin(r),y:t*_.sin(r)+e*_.cos(r)}});if(h)A=h[0],M=h[1],C=h[2],T=h[3];else{t=(u=g(t,e,-p)).x,e=u.y,o=(u=g(o,l,-p)).x,l=u.y;_.cos(S/180*n),_.sin(S/180*n);var x=(t-o)/2,y=(e-l)/2,m=x*x/(r*r)+y*y/(i*i);m>1&&(r*=m=_.sqrt(m),i*=m);var b=r*r,w=i*i,k=(a==s?-1:1)*_.sqrt(B((b*w-b*y*y-w*x*x)/(b*y*y+w*x*x))),C=k*r*y/i+(t+o)/2,T=k*-i*x/r+(e+l)/2,A=_.asin(((e-T)/i).toFixed(9)),M=_.asin(((l-T)/i).toFixed(9));(A=t<C?S-A:A)<0&&(A=2*S+A),(M=o<C?S-M:M)<0&&(M=2*S+M),s&&A>M&&(A-=2*S),!s&&M>A&&(M-=2*S)}var E=M-A;if(B(E)>c){var N=M,L=o,P=l;M=A+c*(s&&M>A?1:-1),o=C+r*_.cos(M),l=T+i*_.sin(M),d=Bt(o,l,r,i,n,0,s,L,P,[M,N,C,T])}E=M-A;var z=_.cos(A),F=_.sin(A),R=_.cos(M),j=_.sin(M),I=_.tan(E/4),D=4/3*r*I,q=4/3*i*I,O=[t,e],V=[t+D*F,e-q*z],W=[o+D*j,l-q*R],Y=[o,l];if(V[0]=2*O[0]-V[0],V[1]=2*O[1]-V[1],h)return[V,W,Y][f](d);for(var G=[],H=0,X=(d=[V,W,Y][f](d).join()[v](",")).length;H<X;H++)G[H]=H%2?g(d[H-1],d[H],p).y:g(d[H],d[H+1],p).x;return G},Ct=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:C(h,3)*t+3*C(h,2)*l*r+3*h*l*l*n+C(l,3)*s,y:C(h,3)*e+3*C(h,2)*l*i+3*h*l*l*a+C(l,3)*o}},St=ht(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),f=t-r,p=(-u+_.sqrt(u*u-4*h*f))/2/h,d=(-u-_.sqrt(u*u-4*h*f))/2/h,g=[e,o],x=[t,s];return B(p)>"1e12"&&(p=.5),B(d)>"1e12"&&(d=.5),p>0&&p<1&&(l=Ct(t,e,r,i,n,a,s,o,p),x.push(l.x),g.push(l.y)),d>0&&d<1&&(l=Ct(t,e,r,i,n,a,s,o,d),x.push(l.x),g.push(l.y)),h=a-2*i+e-(o-2*a+i),f=e-i,p=(-(u=2*(i-e)-2*(a-i))+_.sqrt(u*u-4*h*f))/2/h,d=(-u-_.sqrt(u*u-4*h*f))/2/h,B(p)>"1e12"&&(p=.5),B(d)>"1e12"&&(d=.5),p>0&&p<1&&(l=Ct(t,e,r,i,n,a,s,o,p),x.push(l.x),g.push(l.y)),d>0&&d<1&&(l=Ct(t,e,r,i,n,a,s,o,d),x.push(l.x),g.push(l.y)),{min:{x:k[c](0,x),y:k[c](0,g)},max:{x:w[c](0,x),y:w[c](0,g)}}}),Tt=e._path2curve=ht(function(t,e){var r=!e&&ft(t);if(!e&&r.curve)return mt(r.curve);for(var i=_t(t),n=e&&_t(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=function(t,e,r){var i,n;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][f](Bt[c](0,[e.x,e.y][f](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][f](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][f](kt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][f](kt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][f](wt(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][f](wt(e.x,e.y,t[1],e.y));break;case"V":t=["C"][f](wt(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][f](wt(e.x,e.y,e.X,e.Y))}return t},l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(p[e]="A"),t.splice(e++,0,["C"][f](r.splice(0,6)));t.splice(e,1),v=w(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],v=w(i.length,n&&n.length||0))},u=[],p=[],d="",g="",x=0,v=w(i.length,n&&n.length||0);x<v;x++){i[x]&&(d=i[x][0]),"C"!=d&&(u[x]=d,x&&(g=u[x-1])),i[x]=o(i[x],a,g),"A"!=u[x]&&"C"==d&&(u[x]="C"),l(i,x),n&&(n[x]&&(d=n[x][0]),"C"!=d&&(p[x]=d,x&&(g=p[x-1])),n[x]=o(n[x],s,g),"A"!=p[x]&&"C"==d&&(p[x]="C"),l(n,x)),h(i,n,a,s,x),h(n,i,s,a,x);var y=i[x],m=n&&n[x],b=y.length,_=n&&m.length;a.x=y[b-2],a.y=y[b-1],a.bx=z(y[b-4])||a.x,a.by=z(y[b-3])||a.y,s.bx=n&&(z(m[_-4])||s.x),s.by=n&&(z(m[_-3])||s.y),s.x=n&&m[_-2],s.y=n&&m[_-1]}return n||(r.curve=mt(i)),n?[i,n]:i},null,mt),At=(e._parseDots=ht(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=z(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n);for(var u=((l=z(l))-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),Mt=(e._tofront=function(t,e){e.top!==t&&(At(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},e._toback=function(t,e){e.bottom!==t&&(At(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},e._insertafter=function(t,e,r){At(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},e._insertbefore=function(t,e,r){At(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},e.toMatrix=function(t,e){var r=yt(t),i={_:{transform:d},getBBox:function(){return r}};return Et(i,e),i.matrix}),Et=(e.transformPath=function(t,e){return Q(t,Mt(t,e))},e._extractTransform=function(t,r){if(null==r)return t._.transform;r=x(r).replace(/\.{3}|\u2026/g,t._.transform||d);var i,n,a=e.parseTransformString(r),s=0,o=1,l=1,h=t._,u=new Pt;if(h.transform=a||[],a)for(var c=0,f=a.length;c<f;c++){var p,g,v,y,m,b=a[c],_=b.length,w=x(b[0]).toLowerCase(),k=b[0]!=w,B=k?u.invert():0;"t"==w&&3==_?k?(p=B.x(0,0),g=B.y(0,0),v=B.x(b[1],b[2]),y=B.y(b[1],b[2]),u.translate(v-p,y-g)):u.translate(b[1],b[2]):"r"==w?2==_?(m=m||t.getBBox(1),u.rotate(b[1],m.x+m.width/2,m.y+m.height/2),s+=b[1]):4==_&&(k?(v=B.x(b[2],b[3]),y=B.y(b[2],b[3]),u.rotate(b[1],v,y)):u.rotate(b[1],b[2],b[3]),s+=b[1]):"s"==w?2==_||3==_?(m=m||t.getBBox(1),u.scale(b[1],b[_-1],m.x+m.width/2,m.y+m.height/2),o*=b[1],l*=b[_-1]):5==_&&(k?(v=B.x(b[3],b[4]),y=B.y(b[3],b[4]),u.scale(b[1],b[2],v,y)):u.scale(b[1],b[2],b[3],b[4]),o*=b[1],l*=b[2]):"m"==w&&7==_&&u.add(b[1],b[2],b[3],b[4],b[5],b[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=s,h.dx=i=u.e,h.dy=n=u.f,1==o&&1==l&&!s&&h.bbox?(h.bbox.x+=+i,h.bbox.y+=+n):h.dirtyT=1}),Nt=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},Lt=e._equaliseTransform=function(t,r){r=x(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i,n,a,s,o=w(t.length,r.length),l=[],h=[],u=0;u<o;u++){if(a=t[u]||Nt(r[u]),s=r[u]||Nt(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(l[u]=[],h[u]=[],i=0,n=w(a.length,s.length);i<n;i++)i in a&&(l[u][i]=a[i]),i in s&&(h[u][i]=s[i])}return{from:l,to:h}};function Pt(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}e._getContainer=function(t,r,i,n){var a;if(null!=(a=null!=n||e.is(t,"object")?t:l.doc.getElementById(t)))return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=bt,e._engine={},e.path2curve=Tt,e.matrix=function(t,e,r,i,n,a){return new Pt(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=_.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s,o,l,h,u=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,n],[e,i,a],[0,0,1]];for(t&&t instanceof Pt&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;s<3;s++)for(o=0;o<3;o++){for(h=0,l=0;l<3;l++)h+=c[s][l]*f[l][o];u[s][o]=h}this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new Pt(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new Pt(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+_.cos(t).toFixed(9),a=+_.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[x.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=_.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=_.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(_.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(_.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[v]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:d)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:d)+(e.rotate?"r"+[e.rotate,0,0]:d)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(Pt.prototype);for(var zt=function(){this.returnValue=!1},Ft=function(){return this.originalEvent.preventDefault()},Rt=function(){this.cancelBubble=!0},jt=function(){return this.originalEvent.stopPropagation()},It=function(t){var e=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,r=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},Dt=l.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=It(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),p&&m[e]){var a=function(e){for(var n=It(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){(e=e.targetTouches[s]).originalEvent=a,e.preventDefault=Ft,e.stopPropagation=jt;break}return r.call(i,e,n.x,n.y)};t.addEventListener(m[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),p&&m[e]&&t.removeEventListener(m[e],a,!1),!0}}:l.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||l.win.event;var e=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,n=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||zt,t.stopPropagation=t.stopPropagation||Rt,r.call(i,t,a,s)};return t.attachEvent("on"+e,n),function(){return t.detachEvent("on"+e,n),!0}}:void 0,qt=[],Ot=function(e){for(var r,i=e.clientX,n=e.clientY,a=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,s=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft,o=qt.length;o--;){if(r=qt[o],p&&e.touches){for(var h,u=e.touches.length;u--;)if((h=e.touches[u]).identifier==r.el._drag.id){i=h.clientX,n=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var c,f=r.el.node,d=f.nextSibling,g=f.parentNode,x=f.style.display;l.win.opera&&g.removeChild(f),f.style.display="none",c=r.el.paper.getElementByPoint(i,n),f.style.display=x,l.win.opera&&(d?g.insertBefore(f,d):g.appendChild(f)),c&&t("raphael.drag.over."+r.el.id,r.el,c),i+=s,n+=a,t("raphael.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,n-r.el._drag.y,i,n,e)}},Vt=function(r){e.unmousemove(Ot).unmouseup(Vt);for(var i,n=qt.length;n--;)(i=qt[n]).el._drag={},t("raphael.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,r);qt=[]},Wt=e.el={},Yt=y.length;Yt--;)!function(t){e[t]=Wt[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:Dt(this.shape||this.node||l.doc,t,r,i||this)})),this},e["un"+t]=Wt["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(y[Yt]);Wt.data=function(r,i){var n=G[this.id]=G[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[o](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},Wt.removeData=function(t){return null==t?delete G[this.id]:G[this.id]&&delete G[this.id][t],this},Wt.getData=function(){return tt(G[this.id]||{})},Wt.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},Wt.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Gt=[];Wt.drag=function(r,i,n,a,s,o){function h(h){(h.originalEvent||h).preventDefault();var u=h.clientX,c=h.clientY,f=l.doc.documentElement.scrollTop||l.doc.body.scrollTop,d=l.doc.documentElement.scrollLeft||l.doc.body.scrollLeft;if(this._drag.id=h.identifier,p&&h.touches)for(var g,x=h.touches.length;x--;)if(g=h.touches[x],this._drag.id=g.identifier,g.identifier==this._drag.id){u=g.clientX,c=g.clientY;break}this._drag.x=u+d,this._drag.y=c+f,!qt.length&&e.mousemove(Ot).mouseup(Vt),qt.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,this._drag.x,this._drag.y,h)}return this._drag={},Gt.push({el:this,start:h}),this.mousedown(h),this},Wt.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},Wt.undrag=function(){for(var r=Gt.length;r--;)Gt[r].el==this&&(this.unmousedown(Gt[r].start),Gt.splice(r,1),t.unbind("raphael.drag.*."+this.id));!Gt.length&&e.unmousemove(Ot).unmouseup(Vt),qt=[]},i.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},i.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},i.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},i.path=function(t){t&&!e.is(t,"string")&&!e.is(t[0],A)&&(t+=d);var r=e._engine.path(e.format[c](e,arguments),this);return this.__set__&&this.__set__.push(r),r},i.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},i.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,x(i));return this.__set__&&this.__set__.push(n),n},i.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ce(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},i.setStart=function(t){this.__set__=t||this.set()},i.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},i.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},i.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},i.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},i.top=i.bottom=null,i.raphael=e;function Ht(){return this.x+g+this.y+g+this.width+" × "+this.height}i.getElementByPoint=function(t,e){var r,i,n,a,s,o,h,u=this.canvas,c=l.doc.elementFromPoint(t,e);if(l.win.opera&&"svg"==c.tagName){var f=(i=(r=u).getBoundingClientRect(),n=r.ownerDocument,a=n.body,s=n.documentElement,o=s.clientTop||a.clientTop||0,h=s.clientLeft||a.clientLeft||0,{y:i.top+(l.win.pageYOffset||s.scrollTop||a.scrollTop)-o,x:i.left+(l.win.pageXOffset||s.scrollLeft||a.scrollLeft)-h}),p=u.createSVGRect();p.x=t-f.x,p.y=e-f.y,p.width=p.height=1;var d=u.getIntersectionList(p,null);d.length&&(c=d[d.length-1])}if(!c)return null;for(;c.parentNode&&c!=u.parentNode&&!c.raphael;)c=c.parentNode;return c==this.canvas.parentNode&&(c=u),c=c&&c.raphael?this.getById(c.raphaelid):null},i.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},i.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},i.forEach=function(t,e){for(var r=this.bottom;r;){if(!1===t.call(e,r))return this;r=r.next}return this},i.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},Wt.isPointInside=function(t,r){var i=this.realPath=Z[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},Wt.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Z[this.type](this),e.bboxwt=yt(this.realPath),e.bboxwt.toString=Ht,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Z[this.type](this)),e.bbox=yt(Q(this.realPath,this.matrix)),e.bbox.toString=Ht,e.dirty=e.dirtyT=0),e.bbox)},Wt.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Wt.glow=function(t){if("text"==this.type)return null;var e={width:((t=t||{}).width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Z[this.type](this);a=this.matrix?Q(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var Xt=function(t,r,i,n,a,s,o,l,h){return null==h?dt(t,r,i,n,a,s,o,l):e.findDotsAtSegment(t,r,i,n,a,s,o,l,function(t,e,r,i,n,a,s,o,l){if(!(l<0||dt(t,e,r,i,n,a,s,o)<l)){var h,u=.5,c=1-u;for(h=dt(t,e,r,i,n,a,s,o,c);B(h-l)>.01;)h=dt(t,e,r,i,n,a,s,o,c+=(h<l?1:-1)*(u/=2));return c}}(t,r,i,n,a,s,o,l,h))},Ut=function(t,r){return function(i,n,a){for(var s,o,l,h,u,c="",f={},p=0,d=0,g=(i=Tt(i)).length;d<g;d++){if("M"==(l=i[d])[0])s=+l[1],o=+l[2];else{if(p+(h=Xt(s,o,l[1],l[2],l[3],l[4],l[5],l[6]))>n){if(r&&!f.start){if(c+=["C"+(u=Xt(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p)).start.x,u.start.y,u.m.x,u.m.y,u.x,u.y],a)return c;f.start=c,c=["M"+u.x,u.y+"C"+u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return{x:(u=Xt(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p)).x,y:u.y,alpha:u.alpha}}p+=h,s=+l[5],o=+l[6]}c+=l.shift()+l}return f.end=c,(u=t?p:r?f:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1)).alpha&&(u={x:u.x,y:u.y,alpha:u.alpha}),u}},$t=Ut(1),Zt=Ut(),Qt=Ut(0,1);e.getTotalLength=$t,e.getPointAtLength=Zt,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Qt(t,e).end;var i=Qt(t,r,1);return e?Qt(i,e).end:i},Wt.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():$t(t)},Wt.getPointAtLength=function(t){var e=this.getPath();if(e)return Zt(e,t)},Wt.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},Wt.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Jt=e.easing_formulas={linear:function(t){return t},"<":function(t){return C(t,1.7)},">":function(t){return C(t,.48)},"<>":function(t){var e=.48-t/1.04,r=_.sqrt(.1734+e*e),i=r-e,n=-r-e,a=C(B(i),1/3)*(i<0?-1:1)+C(B(n),1/3)*(n<0?-1:1)+.5;return 3*(1-a)*a*a+a*a*a},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:C(2,-10*t)*_.sin(2*S*(t-.075)/.3)+1},bounce:function(t){var e=7.5625,r=2.75;return t<1/r?e*t*t:t<2/r?e*(t-=1.5/r)*t+.75:t<2.5/r?e*(t-=2.25/r)*t+.9375:e*(t-=2.625/r)*t+.984375}};Jt.easeIn=Jt["ease-in"]=Jt["<"],Jt.easeOut=Jt["ease-out"]=Jt[">"],Jt.easeInOut=Jt["ease-in-out"]=Jt["<>"],Jt["back-in"]=Jt.backIn,Jt["back-out"]=Jt.backOut;var Kt=[],te=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},ee=function(){for(var r=+new Date,i=0;i<Kt.length;i++){var n=Kt[i];if(!n.el.removed&&!n.paused){var a,s,l=r-n.start,h=n.ms,u=n.easing,c=n.from,p=n.diff,d=n.to,x=(n.t,n.el),v={},y={};if(n.initstatus?(l=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*h,n.status=n.initstatus,delete n.initstatus,n.stop&&Kt.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(l/h))/n.anim.top,!(l<0))if(l<h){var m=u(l/h);for(var b in c)if(c[o](b)){switch(I[b]){case T:a=+c[b]+m*h*p[b];break;case"colour":a="rgb("+[re(P(c[b].r+m*h*p[b].r)),re(P(c[b].g+m*h*p[b].g)),re(P(c[b].b+m*h*p[b].b))].join(",")+")";break;case"path":a=[];for(var _=0,w=c[b].length;_<w;_++){a[_]=[c[b][_][0]];for(var k=1,B=c[b][_].length;k<B;k++)a[_][k]=+c[b][_][k]+m*h*p[b][_][k];a[_]=a[_].join(g)}a=a.join(g);break;case"transform":if(p[b].real)for(a=[],_=0,w=c[b].length;_<w;_++)for(a[_]=[c[b][_][0]],k=1,B=c[b][_].length;k<B;k++)a[_][k]=c[b][_][k]+m*h*p[b][_][k];else{var C=function(t){return+c[b][t]+m*h*p[b][t]};a=[["m",C(0),C(1),C(2),C(3),C(4),C(5)]]}break;case"csv":if("clip-rect"==b)for(a=[],_=4;_--;)a[_]=+c[b][_]+m*h*p[b][_];break;default:var S=[][f](c[b]);for(a=[],_=x.paper.customAttributes[b].length;_--;)a[_]=+S[_]+m*h*p[b][_]}v[b]=a}x.attr(v),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(x.id,x,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,x,n.anim),x.attr(d),Kt.splice(i--,1),n.repeat>1&&!n.next){for(s in d)d[o](s)&&(y[s]=n.totalOrigin[s]);n.el.attr(y),ae(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&ae(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Kt.length&&te(ee)},re=function(t){return t>255?255:t<0?0:t};function ie(t,e,r,i,n,a){var s=3*e,o=3*(i-e)-s,l=1-s-o,h=3*r,u=3*(n-r)-h,c=1-h-u;function f(t){return((l*t+o)*t+s)*t}return function(t,e){var r=function(t,e){var r,i,n,a,h,u;for(n=t,u=0;u<8;u++){if(a=f(n)-t,B(a)<e)return n;if(B(h=(3*l*n+2*o)*n+s)<1e-6)break;n-=a/h}if(i=1,(n=t)<(r=0))return r;if(n>i)return i;for(;r<i;){if(a=f(n),B(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}(t,e);return((c*r+u)*r+h)*r}(t,1/(200*a))}function ne(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[o](n)&&(i[z(n)]=t[n],r.push(z(n)));r.sort(H)}this.anim=i,this.top=r[r.length-1],this.percents=r}function ae(r,i,a,s,l,h){a=z(a);var u,c,p,d,g,y,m=r.ms,b={},_={},w={};if(s)for(B=0,C=Kt.length;B<C;B++){var k=Kt[B];if(k.el.id==i.id&&k.anim==r){k.percent!=a?(Kt.splice(B,1),p=1):c=k,i.attr(k.totalOrigin);break}}else s=+_;for(var B=0,C=r.percents.length;B<C;B++){if(r.percents[B]==a||r.percents[B]>s*r.top){a=r.percents[B],g=r.percents[B-1]||0,m=m/r.top*(a-g),d=r.percents[B+1],u=r.anim[a];break}s&&i.attr(r.anim[r.percents[B]])}if(u){if(c)c.initstatus=s,c.start=new Date-c.ms*s;else{for(var S in u)if(u[o](S)&&(I[o](S)||i.paper.customAttributes[o](S)))switch(b[S]=i.attr(S),null==b[S]&&(b[S]=j[S]),_[S]=u[S],I[S]){case T:w[S]=(_[S]-b[S])/m;break;case"colour":b[S]=e.getRGB(b[S]);var A=e.getRGB(_[S]);w[S]={r:(A.r-b[S].r)/m,g:(A.g-b[S].g)/m,b:(A.b-b[S].b)/m};break;case"path":var M=Tt(b[S],_[S]),E=M[1];for(b[S]=M[0],w[S]=[],B=0,C=b[S].length;B<C;B++){w[S][B]=[0];for(var N=1,P=b[S][B].length;N<P;N++)w[S][B][N]=(E[B][N]-b[S][B][N])/m}break;case"transform":var F=i._,R=Lt(F[S],_[S]);if(R)for(b[S]=R.from,_[S]=R.to,w[S]=[],w[S].real=!0,B=0,C=b[S].length;B<C;B++)for(w[S][B]=[b[S][B][0]],N=1,P=b[S][B].length;N<P;N++)w[S][B][N]=(_[S][B][N]-b[S][B][N])/m;else{var D=i.matrix||new Pt,q={_:{transform:F.transform},getBBox:function(){return i.getBBox(1)}};b[S]=[D.a,D.b,D.c,D.d,D.e,D.f],Et(q,_[S]),_[S]=q._.transform,w[S]=[(q.matrix.a-D.a)/m,(q.matrix.b-D.b)/m,(q.matrix.c-D.c)/m,(q.matrix.d-D.d)/m,(q.matrix.e-D.e)/m,(q.matrix.f-D.f)/m]}break;case"csv":var O=x(u[S])[v](n),V=x(b[S])[v](n);if("clip-rect"==S)for(b[S]=V,w[S]=[],B=V.length;B--;)w[S][B]=(O[B]-b[S][B])/m;_[S]=O;break;default:for(O=[][f](u[S]),V=[][f](b[S]),w[S]=[],B=i.paper.customAttributes[S].length;B--;)w[S][B]=((O[B]||0)-(V[B]||0))/m}var W=u.easing,Y=e.easing_formulas[W];if(!Y)if((Y=x(W).match(L))&&5==Y.length){var G=Y;Y=function(t){return ie(t,+G[1],+G[2],+G[3],+G[4],m)}}else Y=X;if(k={anim:r,percent:a,timestamp:y=u.start||r.start||+new Date,start:y+(r.del||0),status:0,initstatus:s||0,stop:!1,ms:m,easing:Y,from:b,diff:w,to:_,el:i,callback:u.callback,prev:g,next:d,repeat:h||r.times,origin:i.attr(),totalOrigin:l},Kt.push(k),s&&!c&&!p&&(k.stop=!0,k.start=new Date-m*s,1==Kt.length))return ee();p&&(k.start=new Date-k.ms*s),1==Kt.length&&te(ee)}t("raphael.anim.start."+i.id,i,r)}}function se(t){for(var e=0;e<Kt.length;e++)Kt[e].el.paper==t&&Kt.splice(e--,1)}Wt.animateWith=function(t,r,i,n,a,s){if(this.removed)return s&&s.call(this),this;var o=i instanceof ne?i:e.animation(i,n,a,s);ae(o,this,o.percents[0],null,this.attr());for(var l=0,h=Kt.length;l<h;l++)if(Kt[l].anim==r&&Kt[l].el==t){Kt[h-1].start=Kt[l].start;break}return this},Wt.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},ne.prototype.delay=function(t){var e=new ne(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},ne.prototype.repeat=function(t){var e=new ne(this.anim,this.ms);return e.del=this.del,e.times=_.floor(w(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof ne)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a,s,l={};for(s in t)t[o](s)&&z(s)!=s&&z(s)+"%"!=s&&(a=!0,l[s]=t[s]);if(a)return i&&(l.easing=i),n&&(l.callback=n),new ne({100:l},r);if(n){var h=0;for(var u in t){var c=F(u);t[o](u)&&c>h&&(h=c)}!t[h+="%"].callback&&(t[h].callback=n)}return new ne(t,r)},Wt.animate=function(t,r,i,n){if(this.removed)return n&&n.call(this),this;var a=t instanceof ne?t:e.animation(t,r,i,n);return ae(a,this,a.percents[0],null,this.attr()),this},Wt.setTime=function(t,e){return t&&null!=e&&this.status(t,k(e,t.ms)/t.ms),this},Wt.status=function(t,e){var r,i,n=[],a=0;if(null!=e)return ae(t,this,-1,k(e,1)),this;for(r=Kt.length;a<r;a++)if((i=Kt[a]).el.id==this.id&&(!t||i.anim==t)){if(t)return i.status;n.push({anim:i.anim,status:i.status})}return t?0:n},Wt.pause=function(e){for(var r=0;r<Kt.length;r++)Kt[r].el.id!=this.id||e&&Kt[r].anim!=e||!1!==t("raphael.anim.pause."+this.id,this,Kt[r].anim)&&(Kt[r].paused=!0);return this},Wt.resume=function(e){for(var r=0;r<Kt.length;r++)if(Kt[r].el.id==this.id&&(!e||Kt[r].anim==e)){var i=Kt[r];!1!==t("raphael.anim.resume."+this.id,this,i.anim)&&(delete i.paused,this.status(i.anim,i.status))}return this},Wt.stop=function(e){for(var r=0;r<Kt.length;r++)Kt[r].el.id!=this.id||e&&Kt[r].anim!=e||!1!==t("raphael.anim.stop."+this.id,this,Kt[r].anim)&&Kt.splice(r--,1);return this},t.on("raphael.remove",se),t.on("raphael.clear",se),Wt.toString=function(){return"Raphaël’s object"};var oe,le,he,ue,ce=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=Wt.constructor&&t[e].constructor!=ce||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},fe=ce.prototype;for(var pe in fe.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)!(t=arguments[r])||t.constructor!=Wt.constructor&&t.constructor!=ce||(this[e=this.items.length]=this.items[e]=t,this.length++);return this},fe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},fe.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(!1===t.call(e,this.items[r],r))return this;return this},Wt)Wt[o](pe)&&(fe[pe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][c](r,e)})}}(pe));return fe.attr=function(t,r){if(t&&e.is(t,A)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},fe.clear=function(){for(;this.length;)this.pop()},fe.splice=function(t,e,r){t=t<0?w(this.length+t,0):t,e=w(0,k(this.length-t,e));var i,n=[],a=[],s=[];for(i=2;i<arguments.length;i++)s.push(arguments[i]);for(i=0;i<e;i++)a.push(this[t+i]);for(;i<this.length-t;i++)n.push(this[t+i]);var o=s.length;for(i=0;i<o+n.length;i++)this.items[t+i]=this[t+i]=i<o?s[i]:n[i-o];for(i=this.items.length=this.length-=e-o;this[i];)delete this[i++];return new ce(a)},fe.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},fe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a,s,o=this.items.length,l=o,h=this;if(!o)return this;n&&(s=function(){!--o&&n.call(h)}),i=e.is(i,"string")?i:s;var u=e.animation(t,r,i,s);for(a=this.items[--l].animate(u);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,u,u),this.items[l]&&!this.items[l].removed||o--;return this},fe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},fe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return{x:t=k[c](0,t),y:e=k[c](0,e),x2:r=w[c](0,r),y2:i=w[c](0,i),width:r-t,height:i-e}},fe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},fe.toString=function(){return"Raphaël‘s set"},fe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},fe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[o](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg)for(var n in e.face["units-per-em"]=F(t.face["units-per-em"],10),t.glyphs)if(t.glyphs[o](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[o](s)&&(e.glyphs[n].k[s]=a.k[s])}return t},i.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a,s=e.fonts[t];if(!s){var l=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,d)+"(\\s|$)","i");for(var h in e.fonts)if(e.fonts[o](h)&&l.test(h)){s=e.fonts[h];break}}if(s)for(var u=0,c=s.length;u<c&&((a=s[u]).face["font-weight"]!=r||a.face["font-style"]!=i&&a.face["font-style"]||a.face["font-stretch"]!=n);u++);return a}},i.print=function(t,r,i,a,s,o,l,h){o=o||"middle",l=w(k(l||0,1),-1),h=w(k(h||1,3),1);var u,c=x(i)[v](d),f=0,p=0,g=d;if(e.is(a,"string")&&(a=this.getFont(a)),a){u=(s||16)/a.face["units-per-em"];for(var y=a.face.bbox[v](n),m=+y[0],b=y[3]-y[1],_=0,B=+y[1]+("baseline"==o?b+ +a.face.descent:b/2),C=0,S=c.length;C<S;C++){if("\n"==c[C])f=0,A=0,p=0,_+=b*h;else{var T=p&&a.glyphs[c[C-1]]||{},A=a.glyphs[c[C]];f+=p?(T.w||a.w)+(T.k&&T.k[c[C]]||0)+a.w*l:0,p=1}A&&A.d&&(g+=e.transformPath(A.d,["t",f*u,_*u,"s",u,u,m,B,"t",(t-m)/u,(r-B)/u]))}}return this.path(g).attr({fill:"#000",stroke:"none"})},i.add=function(t){if(e.is(t,"array"))for(var r,i=this.set(),n=0,s=t.length;n<s;n++)r=t[n]||{},a[o](r.type)&&i.push(this[r.type]().attr(r));return i},e.format=function(t,r){var i=e.is(r,A)?[0][f](r):arguments;return t&&e.is(t,"string")&&i.length-1&&(t=t.replace(s,function(t,e){return null==i[++e]?d:i[e]})),t||d},e.fullfill=(oe=/\{([^\}]+)\}/g,le=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,function(t,e){return String(t).replace(oe,function(t,r){return function(t,e,r){var i=r;return e.replace(le,function(t,e,r,n,a){e=e||n,i&&(e in i&&(i=i[e]),"function"==typeof i&&a&&(i=i()))}),i=(null==i||i==r?t:i)+""}(t,r,e)})}),e.ninja=function(){if(h.was)l.win.Raphael=h.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=fe,t.on("raphael.DOMload",function(){r=!0}),null==(he=document).readyState&&he.addEventListener&&(he.addEventListener("DOMContentLoaded",ue=function(){he.removeEventListener("DOMContentLoaded",ue,!1),he.readyState="complete"},!1),he.readyState="loading"),function t(){/in/.test(he.readyState)?setTimeout(t,9):e.eve("raphael.DOMload")}(),e}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n;i=[r(0),r(3),r(4)],void 0===(n=function(t){return t}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n,a,s,o,l,h,u,c,f,p,d,g,x;s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h=function(t,e){return t-e},u={n:{}},c=function(){for(var t=0,e=this.length;t<e;t++)if(void 0!==this[t])return this[t]},f=function(){for(var t=this.length;--t;)if(void 0!==this[t])return this[t]},p=Object.prototype.toString,d=String,g=Array.isArray||function(t){return t instanceof Array||"[object Array]"==p.call(t)},(x=function(t,e){var r,i=a,s=Array.prototype.slice.call(arguments,2),o=x.listeners(t),l=0,u=[],p={},d=[],g=n;d.firstDefined=c,d.lastDefined=f,n=t,a=0;for(var v=0,y=o.length;v<y;v++)"zIndex"in o[v]&&(u.push(o[v].zIndex),o[v].zIndex<0&&(p[o[v].zIndex]=o[v]));for(u.sort(h);u[l]<0;)if(r=p[u[l++]],d.push(r.apply(e,s)),a)return a=i,d;for(v=0;v<y;v++)if("zIndex"in(r=o[v]))if(r.zIndex==u[l]){if(d.push(r.apply(e,s)),a)break;do{if((r=p[u[++l]])&&d.push(r.apply(e,s)),a)break}while(r)}else p[r.zIndex]=r;else if(d.push(r.apply(e,s)),a)break;return a=i,n=g,d})._events=u,x.listeners=function(t){var e,r,i,n,a,s,l,h,c=g(t)?t:t.split(o),f=u,p=[f],d=[];for(n=0,a=c.length;n<a;n++){for(h=[],s=0,l=p.length;s<l;s++)for(r=[(f=p[s].n)[c[n]],f["*"]],i=2;i--;)(e=r[i])&&(h.push(e),d=d.concat(e.f||[]));p=h}return d},x.separator=function(t){t?(t="["+(t=d(t).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",o=new RegExp(t)):o=/[\.\/]/},x.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=g(t)?g(t[0])?t:[t]:d(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r,i=g(t)?t:d(t).split(o),n=u,a=0,s=i.length;a<s;a++)n=(n=n.n).hasOwnProperty(i[a])&&n[i[a]]||(n[i[a]]={n:{}});for(n.f=n.f||[],a=0,s=n.f.length;a<s;a++)if(n.f[a]==e){r=!0;break}!r&&n.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},x.f=function(t){var e=[].slice.call(arguments,1);return function(){x.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},x.stop=function(){a=1},x.nt=function(t){var e=g(n)?n.join("."):n;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},x.nts=function(){return g(n)?n:n.split(o)},x.off=x.unbind=function(t,e){if(t){var r=g(t)?g(t[0])?t:[t]:d(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)x.off(r[i],e);else{r=g(t)?t:d(t).split(o);var a,h,c,f,p,v=[u];for(i=0,n=r.length;i<n;i++)for(f=0;f<v.length;f+=c.length-2){if(c=[f,1],a=v[f].n,"*"!=r[i])a[r[i]]&&c.push(a[r[i]]);else for(h in a)a[s](h)&&c.push(a[h]);v.splice.apply(v,c)}for(i=0,n=v.length;i<n;i++)for(a=v[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(h in a.n)if(a.n[s](h)&&a.n[h].f){var y=a.n[h].f;for(f=0,p=y.length;f<p;f++)if(y[f]==e){y.splice(f,1);break}!y.length&&delete a.n[h].f}}else for(h in delete a.f,a.n)a.n[s](h)&&a.n[h].f&&delete a.n[h].f;a=a.n}}}else x._events=u={n:{}}},x.once=function(t,e){var r=function(){return x.off(t,r),e.apply(this,arguments)};return x.on(t,r)},x.version="0.5.0",x.toString=function(){return"You are running Eve 0.5.0"},t.exports?t.exports=x:void 0===(i=function(){return x}.apply(e,[]))||(t.exports=i)},function(t,e,r){var i,n;i=[r(0)],void 0===(n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var x=function(i,n){if(n)for(var a in"string"==typeof i&&(i=x(i)),n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])));else(i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i)).style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},v=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,v=d.style,m=t._g.doc.getElementById(u);if(!m){if(n=(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e);var n=2*((p=i(r))>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c})).split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){m=x(h+"Gradient",{id:u}),e.gradient=m,x(m,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(m);for(var B=0,C=k.length;B<C;B++)m.appendChild(x("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return x(d,{fill:y(u),opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(t){if((e=document.documentMode)&&(9===e||10===e))return"url('#"+t+"')";var e,r=document.location;return"url('"+(r.protocol+"//"+r.host+r.pathname+r.search)+"#"+t+"')"},m=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},b=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=r(n).toLowerCase().split("-"),p=i.paper,v=a?"end":"start",y=i.node,m=i.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,B=3,C=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,B+=2,C+=2,l=1,h=a?4:1,u={fill:"none",stroke:m.stroke}):(h=l=k/2,u={fill:m.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,T="raphael-marker-"+v+w+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var A,M=t._g.doc.getElementById(T);M?(g[T]++,A=M.getElementsByTagName("use")[0]):(M=x(x("marker"),{id:T,markerHeight:B,markerWidth:k,orient:"auto",refX:h,refY:B/2}),A=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),M.appendChild(A),p.defs.appendChild(M),g[T]=1),x(A,u);var E=l*("diamond"!=w&&"oval"!=w);a?(s=i._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-E*b):(s=E*b,o=t.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),(u={})["marker-"+v]="url(#"+T+")",(o||s)&&(u.d=t.getSubpath(m.path,s,o)),x(y,u),i._.arrows[v+"Path"]=S,i._.arrows[v+"Marker"]=T,i._.arrows[v+"dx"]=E,i._.arrows[v+"Type"]=w,i._.arrows[v+"String"]=n}else a?(s=i._.arrows.startdx*b||0,o=t.getTotalLength(m.path)-s):(s=0,o=t.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),i._.arrows[v+"Path"]&&x(y,{d:t.getSubpath(m.path,s,o)}),delete i._.arrows[v+"Path"],delete i._.arrows[v+"Marker"],delete i._.arrows[v+"dx"],delete i._.arrows[v+"Type"],delete i._.arrows[v+"String"];for(u in g)if(g[e](u)&&!g[u]){var N=t._g.doc.getElementById(u);N&&N.parentNode.removeChild(N)}}},_={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},w=function(t,e,i){if(e=_[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}else x(t.node,{"stroke-dasharray":"none"})},k=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;for(var d in l.style.visibility="hidden",a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=x("title");var _=t._g.doc.createTextNode(g);y.appendChild(_),l.appendChild(y)}break;case"href":case"target":var k=l.parentNode;if("a"!=k.tagName.toLowerCase()){var C=x("a");k.insertBefore(C,l),C.appendChild(l),k=C}"target"==d?k.setAttributeNS(p,"show","blank"==g?"new":g):k.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":b(i,g);break;case"arrow-end":b(i,g,1);break;case"clip-rect":var S=r(g).split(h);if(4==S.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var T=x("clipPath"),A=x("rect");T.id=t.createUUID(),x(A,{x:S[0],y:S[1],width:S[2],height:S[3]}),T.appendChild(A),i.paper.defs.appendChild(T),x(l,{"clip-path":"url(#"+T.id+")"}),i.clip=A}if(!g){var M=l.getAttribute("clip-path");if(M){var E=t._g.doc.getElementById(M.replace(/(^url\(#|\)$)/g,c));E&&E.parentNode.removeChild(E),x(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(x(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&b(i,i._.arrows.startString),"endString"in i._.arrows&&b(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&m(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&m(i),i._.dirty=1;break;case"r":"rect"==i.type?x(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&w(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&b(i,i._.arrows.startString),"endString"in i._.arrows&&b(i,i._.arrows.endString,1));break;case"stroke-dasharray":w(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){T=x("pattern");var L=x("image");T.id=t.createUUID(),x(T,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(L,{x:0,y:0,"xlink:href":N[1]}),T.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;x(e,{width:t,height:r}),x(L,{width:t,height:r})})}(T),i.paper.defs.appendChild(T),x(l,{fill:"url(#"+T.id+")"}),i.pattern=T,i.pattern&&m(i);break}var P=t.getRGB(g);if(P.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&v(i,g)){if("opacity"in u||"fill-opacity"in u){var z=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(z){var F=z.getElementsByTagName("stop");x(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&x(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&x(l,{"fill-opacity":u["fill-opacity"]});P[e]("opacity")&&x(l,{"fill-opacity":P.opacity>1?P.opacity/100:P.opacity});case"stroke":P=t.getRGB(g),l.setAttribute(d,P.hex),"stroke"==d&&P[e]("opacity")&&x(l,{"stroke-opacity":P.opacity>1?P.opacity/100:P.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&b(i,i._.arrows.startString),"endString"in i._.arrows&&b(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&v(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&x(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){(z=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)))&&(F=z.getElementsByTagName("stop"),x(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}B(i,a),l.style.visibility=f},B=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,u=r(a.text).split("\n"),f=[],p=0,d=u.length;p<d;p++)h=x("tspan"),p&&x(h,{dy:1.2*l,x:s.x}),h.appendChild(t._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h}else for(p=0,d=(f=o.getElementsByTagName("tspan")).length;p<d;p++)p?x(f[p],{dy:1.2*l,x:s.x}):x(f[0],{dy:0});x(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),v=s.y-(g.y+g.height/2);v&&t.is(v,"finite")&&x(f[0],{dy:v})}},C=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},S=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},T=t.el;S.prototype=T,T.constructor=S,t._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var i=new S(r,e);return i.type="path",k(i,{fill:"none",stroke:"#000",path:t}),i},T.rotate=function(t,e,n){if(this.removed)return this;if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},T.scale=function(t,e,n,a){if(this.removed)return this;if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},T.translate=function(t,e){return this.removed?this:((t=r(t).split(h)).length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},T.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&m(this),this.node&&x(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},T.hide=function(){return this.removed||(this.node.style.display="none"),this},T.show=function(){return this.removed||(this.node.style.display=""),this},T.remove=function(){var e=C(this.node);if(!this.removed&&e.parentNode){var r=this.paper;for(var i in r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData(),this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},T._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e,r=!1;this.paper.canvas.parentElement?e=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(e=this.paper.canvas.parentNode.style),e&&"none"==e.display&&(r=!0,e.display="");var i={};try{i=this.node.getBBox()}catch(t){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},r&&(e.display="none")}return t&&this.hide(),i},T.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)(r=s[l])in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));for(var g in this.attrs[p]=f[p],d)d[e](g)&&(f[g]=d[g])}return k(this,f),this},T.toFront=function(){if(this.removed)return this;var e=C(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},T.toBack=function(){if(this.removed)return this;var e=C(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);this.paper;return this},T.insertAfter=function(e){if(this.removed||!e)return this;var r=C(this.node),i=C(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},T.insertBefore=function(e){if(this.removed||!e)return this;var r=C(this.node),i=C(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},T.blur=function(e){var r=this;if(0!=+e){var i=x("filter"),n=x("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),x(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,x(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=x("circle");t.canvas&&t.canvas.appendChild(n);var a=new S(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",x(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new S(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new S(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=x("image");x(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new S(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=x("text");e.canvas&&e.canvas.appendChild(a);var s=new S(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",k(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container;if(!r)throw new Error("SVG container not found.");var i,n=e.x,a=e.y,s=e.width,o=e.height,l=x("svg"),h="overflow:hidden;";return n=n||0,a=a||0,x(l,{height:o=o||342,version:1.1,width:s=s||512,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(l.style.cssText=h+"position:absolute;left:"+n+"px;top:"+a+"px",t._g.doc.body.appendChild(l),i=1):(l.style.cssText=h+"position:relative",r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l)),(r=new t._Paper).width=s,r.height=o,r.canvas=l,r.clear(),r._left=r._top=0,i&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a,o,l=this.getSize(),h=s(r/l.width,i/l.height),c=this.top,p=n?"xMidYMid meet":"xMinYMin";for(null==t?(this._vbSize&&(h=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=h,a=t+f+e+f+r+f+i),x(this.canvas,{viewBox:a,preserveAspectRatio:p});h&&c;)o="stroke-width"in c.attrs?c.attrs["stroke-width"]:1,c.attr({"stroke-width":o}),c._.dirty=1,c._.dirtyT=1,c=c.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(r){t=e.createSVGMatrix()}var i=-t.e%1,n=-t.f%1;(i||n)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+"px"),n&&(this._top=(this._top+n)%1,r.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=x("defs"))},t.prototype.remove=function(){for(var e in u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var A=t.st;for(var M in T)T[e](M)&&!A[e](M)&&(A[M]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(M))}}.apply(e,i))||(t.exports=n)},function(t,e,r){var i,n;i=[r(0)],void 0===(n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h=/[, ]+/,u=t.eve,c=" ",f="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},d=/([clmz]),?([^clmz]*)/gi,g=/ progid:\S+Blur\([^\)]+\)/g,x=/-?[^,\s-]+/g,v="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",y=21600,m={path:1,rect:1,image:1},b={circle:1,ellipse:1},_=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},w=function(t,e,r,i,n,a){var s=t._,o=t.matrix,h=s.fillpos,u=t.node,f=u.style,p=1,d="",g=y/e,x=y/r;if(f.visibility="hidden",e&&r){if(u.coordsize=l(g)+c+l(x),f.rotation=a*(e*r<0?-1:1),a){var v=_(a,i,n);i=v.dx,n=v.dy}if(e<0&&(d+="x"),r<0&&(d+=" y")&&(p=-1),f.flip=d,u.coordorigin=i*-g+c+n*-x,h||s.fillsize){var m=u.getElementsByTagName("fill");m=m&&m[0],u.removeChild(m),h&&(v=_(a,o.x(h[0],h[1]),o.y(h[0],h[1])),m.position=v.dx*p+c+v.dy*p),s.fillsize&&(m.size=s.fillsize[0]*l(e)+c+s.fillsize[1]*l(r)),u.appendChild(m)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var k,B=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},C=function(n,l){n.attrs=n.attrs||{};var u=n.node,g=n.attrs,v=u.style,_=m[n.type]&&(l.x!=g.x||l.y!=g.y||l.width!=g.width||l.height!=g.height||l.cx!=g.cx||l.cy!=g.cy||l.rx!=g.rx||l.ry!=g.ry||l.r!=g.r),C=b[n.type]&&(g.cx!=l.cx||g.cy!=l.cy||g.r!=l.r||g.rx!=l.rx||g.ry!=l.ry),T=n;for(var A in l)l[e](A)&&(g[A]=l[A]);if(_&&(g.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(u.href=l.href),l.title&&(u.title=l.title),l.target&&(u.target=l.target),l.cursor&&(v.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||_)&&(u.path=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(d,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=p[e];return r.replace(x,function(t){n&&2==i.length&&(s+=i+p["m"==e?"l":"L"],i=[]),i.push(a(t*y))}),s+i});return s}var o,l,h=n(e);s=[];for(var u=0,g=h.length;u<g;u++){o=h[u],"z"==(l=h[u][0].toLowerCase())&&(l="x");for(var v=1,m=o.length;v<m;v++)l+=a(o[v]*y)+(v!=m-1?",":f);s.push(l)}return s.join(c)}(~r(g.path).toLowerCase().indexOf("r")?t._pathToAbsolute(g.path):g.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[g.x,g.y],n._.fillsize=[g.width,g.height],w(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),C){var M=+g.cx,E=+g.cy,N=+g.rx||+g.r||0,L=+g.ry||+g.r||0;u.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((M-N)*y),a((E-L)*y),a((M+N)*y),a((E+L)*y),a(M*y)),n._.dirty=1}if("clip-rect"in l){var P=r(l["clip-rect"]).split(h);if(4==P.length){P[2]=+P[2]+ +P[0],P[3]=+P[3]+ +P[1];var z=u.clipRect||t._g.doc.createElement("div"),F=z.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",P),u.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",u.parentNode.insertBefore(z,u),z.appendChild(u),u.clipRect=z)}l["clip-rect"]||u.clipRect&&(u.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,f)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&B(T,l["arrow-start"]),"arrow-end"in l&&B(T,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=u.getElementsByTagName("fill");if(!(j=j&&j[0])&&(j=k("fill")),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var I=r(l.fill).match(t._ISURL);if(I){j.parentNode==u&&u.removeChild(j),j.rotate=!0,j.src=I[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+c+D.y,n._.fillpos=[D.x,D.y],t._preload(I[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=f,j.type="solid",t.getRGB(l.fill).error&&(T.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&S(T,l.fill,j)&&(g.fill="none",g.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var q=((+g["fill-opacity"]+1||2)-1)*((+g.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);q=o(s(q,0),1),j.opacity=q,j.src&&(j.color="none")}u.appendChild(j);var O=u.getElementsByTagName("stroke")&&u.getElementsByTagName("stroke")[0],V=!1;!O&&(V=O=k("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),q=((+g["stroke-opacity"]+1||2)-1)*((+g.opacity+1||2)-1)*((+W.o+1||2)-1);var Y=.75*(i(l["stroke-width"])||1);if(q=o(s(q,0),1),null==l["stroke-width"]&&(Y=g["stroke-width"]),l["stroke-width"]&&(O.weight=Y),Y&&Y<1&&(q*=Y)&&(O.weight=1),O.opacity=q,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=G[e](l["stroke-dasharray"])?G[l["stroke-dasharray"]]:f}V&&u.appendChild(O)}if("text"==T.type){T.paper.canvas.style.display=f;var H=T.paper.span,X=g.font&&g.font.match(/\d+(?:\.\d*)?(?=px)/);v=H.style,g.font&&(v.font=g.font),g["font-family"]&&(v.fontFamily=g["font-family"]),g["font-weight"]&&(v.fontWeight=g["font-weight"]),g["font-style"]&&(v.fontStyle=g["font-style"]),X=i(g["font-size"]||X&&X[0])||10,v.fontSize=100*X+"px",T.textpath.string&&(H.innerHTML=r(T.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var U=H.getBoundingClientRect();T.W=g.w=(U.right-U.left)/100,T.H=g.h=(U.bottom-U.top)/100,T.X=g.x,T.Y=g.y+T.H/2,("x"in l||"y"in l)&&(T.path.v=t.format("m{0},{1}l{2},{1}",a(g.x*y),a(g.y*y),a(g.x*y)+1));for(var $=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,Q=$.length;Z<Q;Z++)if($[Z]in l){T._.dirty=1;break}switch(g["text-anchor"]){case"start":T.textpath.style["v-text-align"]="left",T.bbx=T.W/2;break;case"end":T.textpath.style["v-text-align"]="right",T.bbx=-T.W/2;break;default:T.textpath.style["v-text-align"]="center",T.bbx=0}T.textpath.style["v-text-kern"]=!0}},S=function(e,a,s){e.attrs=e.attrs||{};e.attrs;var o=Math.pow,l="linear",h=".5 .5";if(e.attrs.gradient=a,a=(a=r(a).replace(t._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+c+r),f})).split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var p=t._parseDots(a);if(!p)return null;if(e=e.shape||e.node,p.length){e.removeChild(s),s.on=!0,s.method="none",s.color=p[0].color,s.color2=p[p.length-1].color;for(var d=[],g=0,x=p.length;g<x;g++)p[g].offset&&d.push(p[g].offset+c+p[g].color);s.colors=d.length?d.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),e.appendChild(s)}return 1},T=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},A=t.el;T.prototype=A,A.constructor=T,A.transform=function(e){if(null==e)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:f;n&&(i=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||f)),t._extractTransform(this,a+e);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~r(this.attrs.fill).indexOf("-"),p=!r(this.attrs.fill).indexOf("url(");if(o.translate(1,1),p||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var d=this.getBBox(),g=this.getBBox(1),x=d.x-g.x,v=d.y-g.y;h.coordorigin=x*-y+c+v*-y,w(this,1,1,x,v,0)}else h.style.filter=f,w(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=f,l.matrix=r(o),l.offset=o.offset();return null!==i&&(this._.transform=i,t._extractTransform(this,i)),this},A.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},A.translate=function(t,e){return this.removed?this:((t=r(t).split(h)).length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},A.scale=function(t,e,n,a){if(this.removed)return this;if((t=r(t).split(h)).length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},A.hide=function(){return!this.removed&&(this.node.style.display="none"),this},A.show=function(){return!this.removed&&(this.node.style.display=f),this},A.auxGetBBox=t.el.getBBox,A.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},A._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},A.remove=function(){if(!this.removed&&this.node.parentNode){for(var e in this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},A.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)(r=s[l])in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}var f;for(var p in null!=i&&((f={})[r]=i),null==i&&t.is(r,"object")&&(f=r),f)u("raphael.attr."+p+"."+this.id,this,f[p]);if(f){for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));for(var g in this.attrs[p]=f[p],d)d[e](g)&&(f[g]=d[g])}f.text&&"text"==this.type&&(this.textpath.string=f.text),C(this,f)}return this},A.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},A.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},A.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},A.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},A.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(g,f),0!=+e?(this.attrs.blur=e,r.filter=i+c+" progid:DXImageTransform.Microsoft.Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=k("shape");r.style.cssText=v,r.coordsize=y+c+y,r.coordorigin=e.coordorigin;var i=new T(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=f,C(i,n),e.canvas&&e.canvas.appendChild(r);var a=k("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(f),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path();a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",C(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path();n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",C(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),h=l.attrs,u=l.node,c=u.getElementsByTagName("fill")[0];return h.src=r,l.X=h.x=i,l.Y=h.y=n,l.W=h.width=a,l.H=h.height=s,h.path=o,l.type="image",c.parentNode==u&&u.removeChild(c),c.rotate=!0,c.src=r,c.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],u.appendChild(c),w(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=k("shape"),l=k("path"),h=k("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*y),a(n*y),a(i*y)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=v,o.coordsize=y+c+y,o.coordorigin="0 0";var u=new T(o,e),p={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,C(u,p),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var d=k("skew");return d.on=!0,o.appendChild(d),u.skew=d,u.transform(f),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s,o,l=this.getSize(),h=l.width,u=l.height;return a&&(i*(s=u/n)<h&&(e-=(h-i*s)/2/s),n*(o=h/i)<u&&(r-=(u-n*o)/2/o)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:l},this.forEach(function(t){t.transform("...")}),this},t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),k=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(t){k=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n=e.width,a=e.x,s=e.y;if(!r)throw new Error("VML container not found.");var o=new t._Paper,l=o.canvas=t._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=216e5+c+216e5,o.coordorigin="0 0",o.span=t._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==r?(t._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),o.renderfix=function(){},o},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=f,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){for(var e in t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas),this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var M=t.st;for(var E in A)A[e](E)&&!M[e](E)&&(M[E]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(E))}}.apply(e,i))||(t.exports=n)}])});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"svg":"M849 227c0,0 0,0 0,0 0,-1 0,-2 1,-2 0,0 0,0 0,0 -1,0 -1,0 -1,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 1,0 1,-1 0,-1 1,-2 2,-3 0,-1 0,-1 0,-2 1,-1 1,-2 1,-3 2,-3 3,-7 2,-12 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,0 1,1 1,1 1,3 1,4 0,1 0,2 1,3 0,1 0,2 -1,3 0,0 0,1 0,1 0,1 0,1 0,2 -1,2 -2,4 -4,5 -1,1 -1,1 -2,2 0,1 0,2 -1,2 -1,1 -2,1 -3,1 0,0 0,0 0,0zm-260 -14l0 -1c0,0 0,0 0,0 1,0 2,-1 3,-1 0,-1 1,-1 1,0 1,0 1,0 2,1 0,0 0,0 0,1 0,1 0,2 0,3 0,1 0,1 -1,1 0,0 -1,0 -1,0 0,-1 -1,-1 -1,-2 -1,-1 -1,-1 -2,-1 -1,1 -2,1 -3,3 0,0 0,1 0,2 -1,1 -1,2 -1,3 1,1 1,3 1,4 0,0 0,1 0,1 -1,0 -2,0 -2,1 -1,0 -1,0 -2,1 0,1 -2,2 -3,1 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1 -1,0 -3,1 -4,1 -2,1 -3,2 -5,3 0,0 -1,1 -1,1 -1,1 -1,1 -2,1 0,-1 -1,-2 -1,-3 -1,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -2,1 -3,1 -1,0 -2,1 -3,1 0,1 -1,0 -1,0 0,0 -1,-1 -1,-1 -1,0 -2,0 -2,-1 -1,0 -1,-1 -1,-1 0,-1 0,-1 0,-1 0,0 0,0 0,0 2,0 3,0 4,1 1,1 2,1 3,0 1,-2 1,-4 1,-6 0,0 0,0 0,0 0,0 0,0 0,0 -2,0 -3,1 -4,2 0,0 0,1 0,1 0,1 1,1 1,1 0,1 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-2 -3,-3 0,0 0,0 0,-1 0,-1 1,-1 2,-2 0,0 0,0 0,0 0,-1 0,-1 0,-1 -2,0 -2,-1 -1,-3 0,0 0,-1 0,-2 0,0 -1,-1 -1,-1 0,0 0,0 -1,1 -1,0 -2,2 -4,3 0,0 0,0 0,0 0,2 -2,3 -1,5 0,0 0,1 0,1 0,0 0,1 0,1 0,1 1,1 1,1 0,2 1,4 1,5 0,1 -1,3 -2,3 -1,-1 -2,-1 -3,0 -1,0 -2,1 -3,1 -1,0 -2,1 -3,1 -1,1 -2,2 -2,3 -1,4 -1,4 -4,6 -1,0 -2,1 -2,1 -1,0 -1,1 -1,1 0,0 0,1 -1,2 0,0 0,1 -1,1 -1,0 -1,0 -1,1 -1,0 -2,0 -2,1 0,1 -1,1 -2,1 -1,0 -1,-1 -2,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,1 0,2 1,3 0,0 -1,1 -1,1 -1,0 -2,0 -3,-1 -1,0 -1,0 -2,0 -1,0 -2,1 -3,1 0,0 -1,1 0,1 0,1 0,3 2,3 1,0 1,1 2,1 1,0 2,1 3,2 0,1 1,2 2,3 1,0 1,1 1,2 0,2 0,4 0,7 0,0 -1,1 -1,2 0,1 -1,1 -2,1 -1,0 -3,0 -4,0 -1,-1 -1,-1 -2,0 -1,0 -2,0 -4,-1 -1,0 -3,0 -4,0 0,0 -1,0 -1,0 -2,-1 -3,-1 -5,1 0,0 0,0 -1,0 0,0 0,1 -1,1 0,0 0,1 0,1 1,1 1,3 1,4 0,1 0,1 0,1 0,3 0,6 -2,9 0,0 0,1 0,2 -1,0 -1,1 0,1 1,2 1,4 1,5 0,1 0,1 0,1 0,0 1,1 1,1 1,0 2,1 3,0 1,0 1,0 2,0 0,0 1,0 1,1 1,1 1,2 2,2 1,1 2,2 3,1 0,0 1,-1 1,-1 2,-1 3,-1 5,-1 1,0 2,0 4,0 0,0 1,-1 1,-1 1,-1 2,-2 2,-2 1,0 2,-1 2,-2 0,-1 1,-2 2,-3 0,0 1,-1 0,-1 -1,-2 -1,-4 1,-5 0,-1 1,-1 1,-1 1,-2 2,-3 4,-3 2,-1 3,-2 3,-4 0,-1 0,-2 0,-3 0,0 1,-1 1,-1 0,-1 1,-2 2,-2 2,1 4,1 6,2 0,0 1,0 2,-1 1,-1 2,-2 4,-2 0,-1 1,-1 1,-2 1,-1 2,-1 3,0 2,0 3,1 3,2 1,1 1,2 2,3 0,0 0,0 0,0 0,0 0,0 -1,0 1,0 1,0 1,0 0,0 0,0 0,0 1,2 3,3 5,5 1,1 2,2 4,3 2,0 3,1 5,2 0,1 1,2 2,3 0,0 1,0 1,0 0,1 1,2 1,4 0,0 0,0 0,0 0,1 -1,3 -2,3 -3,0 -5,1 -8,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,1 0,1 0,1 1,1 1,1 2,2 2,1 4,1 5,2 1,0 1,0 1,0 1,-1 1,-1 1,-1 0,-1 0,-2 0,-2 0,-1 0,-2 1,-2 1,1 2,0 2,-1 1,-1 2,-2 2,-3 1,-1 1,-2 0,-2 0,-1 -1,-1 -1,-2 0,0 0,-1 1,-1 0,-1 1,-1 2,-1 0,1 1,1 1,2 1,0 1,0 1,-1 1,0 1,-1 0,-2 -2,-1 -4,-3 -6,-3 -1,-1 -1,-1 -1,-2 0,0 -1,-1 -1,-1 0,0 -1,0 -1,0 -2,0 -3,-1 -4,-2 0,0 -1,-1 -1,-2 -1,-2 -2,-3 -3,-4 -1,0 -2,-1 -2,-1 -1,-1 -1,-1 -1,-2 0,-1 0,-1 0,-2 0,-1 0,-1 1,-1 0,0 1,-1 2,-1 0,0 0,0 0,0 0,1 1,2 1,2 0,1 0,2 1,1 1,0 1,1 2,1 1,0 1,0 2,1 0,2 1,3 3,4 1,1 2,2 4,2 1,0 1,1 2,1 1,0 2,1 2,1 1,1 2,2 3,3 0,0 0,1 0,1 0,1 0,2 0,3 0,1 0,3 2,3 0,0 0,1 0,1 -1,1 0,1 1,2 1,0 1,1 2,2 0,1 1,2 1,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 1,1 1,1 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,-1 0,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 2,0 3,1 3,3 0,0 0,0 1,0 1,1 2,1 3,1 0,0 1,0 0,-1 0,-1 1,-2 1,-3 0,0 0,0 1,0 1,0 1,-1 2,-1 0,0 1,0 0,-1 0,-1 0,-2 -1,-2 -1,-1 -1,-1 -2,-1 -1,-2 -2,-3 -3,-5 0,0 0,0 0,-1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 1,1 1,1 2,0 3,-1 0,-1 0,-1 0,-2 0,0 1,0 1,0 0,0 1,0 1,0 1,-1 2,-1 3,0 1,0 2,1 2,2 0,1 0,3 -1,5 0,0 1,0 1,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,1 0,1 0,0 0,0 0,0 -1,1 -2,1 -2,2 0,0 0,0 -1,0 0,0 0,0 1,1 0,0 1,0 1,0 1,0 1,1 1,1 1,0 0,1 0,1 1,1 2,1 2,2 0,1 1,1 2,2 0,0 1,0 1,0 1,0 2,0 3,1 0,0 1,1 1,1 0,0 1,0 1,0 1,0 3,0 4,-2 0,0 1,0 2,0 1,0 2,0 3,1 1,1 2,1 3,1 2,0 3,-1 4,-2 1,-1 1,-1 2,-1 1,1 2,1 3,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,1 0,3 0,4 0,2 0,3 0,4 -1,1 -1,2 -1,3 -1,2 -2,3 -2,5 0,1 -1,2 -2,3 0,1 -1,1 -1,1 -2,0 -4,0 -6,0 -1,-1 -2,-1 -3,-1 -1,0 -3,1 -5,2 0,0 -1,0 -2,0 -3,-1 -6,-2 -9,-2 -1,0 -2,0 -3,-1 -2,-1 -3,-1 -4,-1 -2,0 -3,-1 -4,-2 0,0 -1,0 -1,0 -2,-1 -5,-1 -7,0 -1,1 -3,3 -2,5 0,0 0,1 0,1 0,1 0,1 0,2 0,0 -1,0 -1,1 -1,0 -2,1 -3,0 0,0 0,0 -1,-1 -1,0 -1,-1 -2,-1 -2,-1 -3,-2 -5,-2 -1,0 -2,0 -2,-1 -1,-1 -1,-1 -1,-2 0,0 -1,-1 -2,-1 -2,-1 -4,-2 -7,-2 -1,1 -3,0 -4,-1 0,0 0,0 0,0 -1,-1 -2,-1 -4,-2 0,0 -1,-1 0,-2 0,0 1,-1 2,-1 0,-1 0,-2 0,-3 0,-1 -1,-2 -1,-2 0,0 0,-1 0,-1 0,-1 0,-1 1,-2 0,-1 0,-1 -1,-1 -1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-1 -1,0 -2,1 -3,1 -1,0 -1,0 -2,0 -1,-1 -2,0 -3,0 -1,-1 -2,0 -3,0 -1,1 -2,1 -3,0 -2,0 -4,0 -6,1 -1,0 -2,0 -3,0 -1,0 -2,1 -3,1 -1,1 -3,2 -4,2 -1,1 -3,1 -3,2 -2,1 -3,1 -4,1 -1,-1 -2,-1 -3,-1 -2,0 -3,0 -4,0 0,0 -1,0 -1,0 0,0 -1,-1 -1,-1 -1,-1 -2,-1 -3,1 0,0 0,1 0,2 -1,2 -2,3 -4,4 -1,1 -2,2 -4,3 -1,0 -2,1 -2,3 0,1 -1,1 -1,2 -1,1 -1,2 -1,3 0,1 0,2 0,3 0,0 0,1 -1,1 0,1 -1,2 -1,3 -1,0 -1,1 -1,1 -1,0 -2,1 -2,1 -1,1 -2,1 -3,2 -1,0 -2,0 -3,1 0,1 0,1 -1,2 0,1 -1,1 -2,2 -1,1 -2,2 -2,3 -1,2 -2,4 -4,5 0,1 0,1 -1,2 -1,2 -2,4 -3,6 -1,0 -1,1 -1,2 0,2 0,3 1,3 1,1 2,2 1,3 0,1 0,2 0,3 1,2 1,4 0,7 0,0 0,0 0,1 -1,2 -1,4 -3,6 0,0 0,1 0,1 0,1 1,1 1,2 1,1 1,2 1,2 -1,2 -1,3 0,4 0,1 1,1 2,2 1,0 1,0 2,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,1 1,1 1,2 1,0 2,1 2,2 0,0 0,1 1,1 1,0 2,1 3,2 0,1 1,1 1,2 0,1 0,3 1,4 1,2 2,3 4,3 1,1 2,2 3,2 2,2 4,4 7,5 1,1 2,2 4,2 0,0 1,0 1,0 1,0 2,-1 3,-1 1,-1 3,-1 4,-1 1,0 3,0 4,0 1,-1 3,-1 4,0 1,0 1,0 2,0 0,1 1,1 2,0 1,0 2,0 3,0 0,-1 1,-1 2,-2 1,0 2,-1 3,-1 1,0 3,-1 4,-1 2,0 3,-1 5,-1 1,0 1,0 1,0 2,1 3,2 4,4 0,0 0,1 1,2 0,1 2,2 3,2 1,0 1,0 1,0 2,0 4,-1 6,-1 1,0 1,0 2,1 0,0 1,0 1,1 2,1 2,2 2,4 0,1 0,2 -1,3 0,0 0,1 -1,2 0,1 1,2 0,3 0,1 0,3 -1,4 -1,0 -1,0 -1,1 0,0 0,0 1,0 1,4 2,5 6,9 0,0 1,1 1,1 1,1 2,2 3,4 0,0 0,1 0,2 1,1 2,3 2,4 1,2 1,4 2,5 0,1 0,1 0,2 0,0 0,1 0,1 0,1 0,3 1,4 0,0 0,1 0,1 1,3 1,5 -1,6 -1,1 -1,2 -2,3 -1,1 -1,2 -2,3 0,2 0,3 -1,5 -1,1 -1,2 -1,3 0,1 0,3 0,5 0,0 0,1 1,2 2,1 3,3 3,5 1,3 2,5 3,7 1,1 2,3 2,5 0,1 0,3 1,5 0,0 0,1 0,2 0,2 1,4 1,5 0,3 1,4 3,6 0,1 1,2 2,3 0,0 1,1 1,3 0,2 1,4 2,6 0,0 1,1 1,1 0,1 0,3 -1,4 0,0 0,1 0,1 1,1 1,3 1,4 0,0 0,0 1,1 1,0 3,1 4,2 0,0 1,0 1,0 2,-1 3,-1 4,-1 1,0 2,-1 2,-1 2,0 3,0 4,0 1,0 3,-1 4,0 0,0 1,0 1,0 1,-1 3,0 4,-1 0,-1 1,-1 1,-1 2,0 4,-1 6,-2 2,-1 4,-3 6,-5 1,-1 2,-3 3,-4 1,-2 2,-3 3,-5 1,0 2,-1 2,-2 2,-1 3,-2 4,-4 0,-2 0,-3 1,-4 0,-1 0,-2 -1,-2 0,-1 0,-2 1,-2 1,-1 2,-2 3,-2 2,-1 3,-1 4,-2 1,0 2,-1 2,-2 0,-2 0,-3 0,-4 1,-1 1,-2 0,-3 0,-2 -1,-4 -1,-6 -1,-1 -1,-1 0,-2 3,-2 6,-5 9,-7 1,-1 2,-1 3,-2 1,0 2,-1 3,-1 2,-2 4,-4 5,-6 0,-1 1,-3 1,-4 -1,-1 -1,-2 0,-4 0,-1 0,-2 0,-2 -1,-2 -1,-4 0,-5 0,-1 0,-2 -1,-3 -2,0 -2,-2 -3,-3 0,-2 0,-4 0,-6 0,0 0,-1 0,-1 0,-1 0,-2 0,-2 -2,-1 -2,-3 -1,-4 0,-1 1,-3 2,-4 1,-1 1,-3 2,-4 0,-1 1,-2 2,-2 1,-1 2,-2 3,-3 2,-3 5,-6 8,-9 2,-1 4,-3 6,-4 0,0 0,0 0,0 6,-4 10,-9 12,-15 1,-3 2,-5 4,-7 1,-1 1,-3 2,-4 1,-3 0,-5 0,-7 0,0 -1,-1 -1,-1 0,0 0,0 -1,0 -1,1 -3,2 -5,2 -3,1 -5,1 -8,2 0,0 -1,0 -1,0 -2,0 -3,0 -4,1 -1,0 -1,0 -2,0 0,1 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 -2,-2 -3,-3 0,0 0,0 0,-1 1,-1 1,-2 -1,-3 0,0 -1,-1 -2,-2 -1,-1 -2,-3 -4,-4 -1,-1 -2,-2 -3,-2 -2,-1 -3,-2 -4,-5 0,-1 -1,-2 -1,-3 0,-2 -1,-3 -2,-3 -1,-1 -2,-2 -3,-2 -1,-1 -1,-2 -1,-2 0,-3 -1,-5 -1,-7 -1,-3 -2,-4 -4,-5 0,0 -1,0 -1,-1 0,0 0,0 0,-1 -1,0 -1,-1 -1,-1 0,-1 0,-3 -1,-4 0,0 -1,-1 -1,-1 -2,-3 -3,-6 -4,-9 0,0 -1,-1 -1,-1 0,0 0,-1 1,-1 0,0 1,0 1,0 1,0 1,-1 2,-1 1,0 1,1 1,1 1,1 1,1 1,2 2,1 3,4 5,6 0,1 1,2 1,3 1,1 1,2 2,2 2,1 3,2 3,3 1,1 1,1 1,2 1,1 1,2 1,3 0,0 0,1 0,1 0,2 1,4 3,5 0,1 1,1 2,1 1,1 2,2 2,4 1,1 2,3 3,4 1,1 2,2 2,3 1,1 2,3 2,5 -1,0 -1,1 0,1 1,2 1,4 1,6 1,1 1,2 1,3 1,0 1,0 2,0 1,0 1,0 2,0 1,0 2,0 3,-1 1,-1 2,-1 3,-1 2,0 3,0 4,-1 1,-1 2,-1 3,-1 1,0 2,0 2,-1 1,-1 2,-1 3,-2 1,0 3,0 4,-1 1,0 2,-1 3,-2 1,0 1,0 1,-1 1,-1 2,-2 3,-2 2,-1 3,-1 5,-2 1,0 2,0 2,-2 1,0 1,-1 2,-1 1,0 2,-1 3,-2 0,-1 1,-1 1,-2 1,0 1,0 2,0 0,0 0,-1 0,-1 1,-1 0,-2 1,-2 0,-1 0,-2 1,-2 2,-2 3,-4 4,-6 1,-1 0,-2 -1,-3 -1,-1 -1,-1 -2,-2 0,-1 -1,-2 -2,-2 -1,0 -2,0 -3,0 -1,0 -1,-1 -2,-1 -1,-1 -2,-2 -2,-4 0,-1 0,-2 0,-3 0,-1 0,-1 -1,-1 0,0 0,0 0,0 -2,2 -4,4 -5,6 -1,1 -2,2 -4,2 -1,0 -3,0 -4,0 -1,1 -1,0 -1,0 -1,-1 -1,-1 -1,-2 -1,-1 -1,-3 -1,-4 0,0 0,-1 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,1 -1,1 -1,2 -1,0 -1,0 -1,0 -1,-1 -1,-2 -1,-3 -1,-1 -1,-2 -2,-3 -1,-1 -2,-2 -2,-2 -1,-1 -1,-1 -1,-1 -1,-1 -2,-3 -3,-4 0,-1 0,-1 0,-2 0,0 0,-1 1,-1 0,0 0,-1 0,-1 1,0 2,0 2,0 1,0 2,0 3,0 0,1 1,2 1,2 1,2 2,3 3,5 1,1 1,1 2,1 0,1 1,1 1,1 1,0 2,0 3,1 0,1 1,1 1,1 2,1 4,2 5,2 1,0 2,0 2,0 1,-1 2,-1 3,-2 1,0 3,0 3,1 0,1 1,2 1,3 1,1 1,1 2,1 4,1 8,1 12,2 1,0 2,0 4,0 2,0 4,-1 7,0 0,0 1,0 1,0 2,-1 3,-1 5,-1 1,0 1,0 1,1 1,1 1,1 1,1 1,1 2,1 2,2 0,1 1,2 2,2 1,0 2,1 2,2 2,1 3,2 5,2 0,0 0,0 1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,1 -2,2 -3,1 0,0 0,0 0,0 -1,0 -1,1 0,1 1,1 2,3 3,4 3,2 4,2 6,0 1,0 2,-1 2,-3 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 1,0 1,1 0,1 1,3 1,5 0,1 0,2 0,3 1,2 1,4 1,6 1,2 2,3 2,5 0,1 0,1 1,2 0,1 1,2 2,3 1,2 1,3 2,5 0,0 0,1 1,2 0,2 1,3 2,4 1,1 1,2 2,3 0,2 1,3 2,5 0,2 0,3 1,4 1,0 1,1 1,1 1,1 3,1 4,0 0,-1 0,-1 0,-2 1,0 1,-1 2,-1 1,0 1,-1 1,-2 1,-1 1,-2 2,-2 1,-1 1,-1 1,-2 0,-1 0,-1 0,-2 0,-1 0,-2 0,-2 0,-1 0,-1 1,-2 0,-1 0,-2 0,-4 -1,0 -1,-1 -1,-2 0,-1 0,-3 0,-4 0,-1 1,-2 2,-2 0,0 1,0 1,0 1,-1 2,-2 3,-2 0,0 1,-1 1,-1 0,-1 0,-2 1,-2 2,-1 3,-3 4,-4 1,-1 1,-1 2,-2 0,-1 1,-1 2,-2 0,-1 1,-1 1,-1 2,-1 4,-3 4,-6 0,0 1,-1 1,-1 1,-1 2,-1 3,-1 3,0 5,0 7,-2 1,0 3,0 3,-1 0,0 1,0 1,0 0,1 1,2 1,3 1,2 2,5 5,6 0,0 1,0 1,0 1,1 1,1 0,2 0,1 0,2 2,2 0,1 1,1 1,2 0,0 1,0 1,0 0,2 1,4 0,6 0,0 0,1 0,2 0,0 1,1 2,1 1,0 3,0 4,-1 1,-1 2,-1 3,-2 0,0 1,0 1,0 0,1 2,1 2,3 0,0 0,1 0,2 1,3 2,5 3,7 0,1 1,1 1,2 0,0 0,1 0,1 1,2 1,4 0,6 0,1 0,2 0,2 0,2 0,3 0,5 -1,1 -1,3 1,3 0,0 0,0 0,0 2,2 4,4 5,7 1,1 1,2 1,3 0,0 0,1 0,1 1,1 1,1 1,2 0,1 0,2 1,3 1,0 2,1 2,3 0,0 0,0 1,0 0,1 1,1 1,2 1,1 2,1 3,2 1,0 2,1 4,2l0 0c0,0 0,0 0,0 1,0 1,1 2,1 0,0 0,0 1,0 0,0 0,0 0,-1 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,-1 1,-1 0,0 0,-1 0,-1 0,-1 -1,-3 -2,-4 -1,-1 -1,-2 -1,-3 0,-1 0,-2 0,-3 0,-1 0,-2 -1,-2 -1,-2 -2,-3 -3,-4 -2,-1 -3,-2 -4,-3 -2,0 -2,-1 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-2 -2,-3 0,0 0,0 0,0l0 0c0,0 0,0 0,0 -1,0 -2,-1 -2,-2 0,-1 0,-2 0,-3 1,-3 2,-6 2,-9 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 1,0 1,1 0,0 0,0 0,0 1,2 1,2 3,2 0,0 1,0 1,1 1,1 3,1 4,3 1,2 3,3 4,5 1,0 1,-1 1,-1 1,1 2,1 2,2 0,2 0,3 0,4 0,0 1,0 1,0 0,0 1,0 1,0 1,-2 3,-3 4,-5 1,0 1,0 2,-1 2,0 3,-1 5,-3 1,-1 1,-2 2,-3 0,-2 0,-4 0,-6 0,0 0,0 0,0 -1,-2 -2,-5 -3,-7 0,-1 -1,-2 -2,-2 -1,-2 -3,-3 -4,-4 -1,0 -2,-1 -2,-3 -1,0 -1,-1 -2,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 0,-1 -1,-3 1,-4 0,-1 1,-1 1,-2 0,-1 0,-1 1,-2 1,-1 3,-1 4,-2 1,0 1,0 2,0 0,0 0,0 1,0 1,0 2,1 2,2 0,1 0,1 1,2 1,0 2,0 2,-1 0,0 0,-1 0,-1l0 0 0 0 0 0c0,0 0,-1 0,-1 0,0 0,0 0,0 2,-1 4,-2 6,-2 1,-1 3,-2 3,-3 1,-1 1,-1 1,0 1,0 1,0 2,0 1,-1 2,-1 3,-1 1,0 2,-1 3,-1 1,0 2,-1 2,-2 0,0 1,0 1,-1 1,-1 3,-1 3,-3 0,0 0,0 0,0 2,-1 2,-2 3,-3 0,-1 0,-1 1,-1 0,0 0,0 0,-1 0,-1 0,-2 0,-3 0,-1 0,-2 1,-2 1,-1 2,-2 2,-3 0,-1 0,-2 1,-3 1,0 1,-1 1,-2 0,-1 0,-2 1,-2 0,-2 0,-2 -1,-3 0,-1 -1,-1 -1,-2 -1,0 -1,0 -2,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,-1 0,-1 1,-1 1,-1 2,-1 0,-1 0,-1 0,-2 -1,-1 -1,-1 -2,-2 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,-1 0,-2 0,0 -1,-1 -1,-1 -1,-1 -2,-2 -3,-3 0,-1 -1,-2 -2,-4 0,-1 -1,-1 -2,-2 0,0 -1,0 -1,-1 -1,0 -1,-1 -1,-2 0,-1 0,-2 0,-3 1,0 1,-1 1,-1 1,-2 2,-2 3,-3 1,-1 2,-1 3,-1 1,0 1,-1 1,-1 0,0 0,-1 0,-1 0,-1 0,-2 -1,-2 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,0 -1,0 -2,-1 0,0 -1,0 -2,0 -1,1 -1,2 -2,3 0,0 -1,0 -1,0 -1,0 -1,0 -2,-1 0,-1 -1,-1 -2,-2 -1,0 -2,-1 -3,-2 0,-1 0,-3 1,-3 1,0 1,0 2,0 0,0 1,0 1,-1 1,-2 1,-3 3,-4 0,0 0,-1 1,-2 0,0 0,-1 1,-2 0,0 1,0 1,0 1,-1 2,0 2,1 1,0 1,1 1,2 -1,0 -1,0 -1,0 0,1 -1,2 0,3 0,0 0,1 0,1 1,1 0,1 0,2 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 1,0 0,-1 1,-1 2,-2 1,-2 3,-3 6,-3 0,0 0,0 1,0 0,0 1,0 1,0 2,1 2,1 2,2 0,2 0,3 0,5 0,0 0,1 0,1 1,1 1,1 2,1 0,0 1,0 1,0 1,-1 1,0 2,0 0,1 1,1 1,2 1,0 1,0 0,1 -1,1 -1,1 0,2 1,1 2,3 2,5 -1,0 -1,1 -1,2 1,1 1,2 2,3 0,0 0,0 0,0 1,0 1,-1 2,-1 1,-1 1,-1 2,-1 1,0 1,0 2,0 1,0 1,-1 2,-1 1,-2 1,-3 1,-5 -1,-1 -1,-2 -1,-2 -1,-4 -1,-4 -3,-6 -1,-1 -2,-2 -2,-3 -1,-1 -2,-2 -3,-2 0,-1 -1,-1 -2,-2 0,0 -1,-2 0,-3 0,0 1,0 1,-1 1,0 1,-1 2,-2 2,-2 2,-3 1,-6 0,-2 0,-3 2,-4 0,-1 0,-1 1,-1 0,-1 1,-1 1,-2 0,0 0,-1 1,-2 2,0 2,1 3,2 1,0 2,0 3,0 1,-1 1,-1 2,-2 1,-1 2,-3 2,-4 1,-3 3,-5 3,-8 0,0 0,-1 1,-1 1,-2 2,-5 2,-8 0,-2 1,-4 1,-6 0,-1 0,-1 0,-1 1,-2 1,-3 1,-5 0,-2 -1,-5 -3,-7 0,-1 -1,-2 -1,-4 0,-2 0,-4 0,-7 0,0 0,0 0,0 1,0 1,0 1,0 1,1 2,2 3,3 1,2 1,3 1,5 1,0 1,1 1,1 1,2 2,3 2,5 0,0 0,1 0,1 0,2 0,4 2,5 0,1 1,2 1,3 0,1 0,3 1,4 0,1 0,2 0,3 0,0 0,1 1,1 0,1 0,2 1,2 0,0 1,0 1,0 0,-1 0,-1 0,-2 0,-1 0,-1 1,-1 1,0 2,1 2,1 0,0 1,0 1,0 0,0 0,0 0,0 0,-1 0,-2 -1,-3 -2,-1 -2,-3 -4,-4 0,-1 -1,-2 -1,-3 -1,-1 -1,-2 -1,-4 0,0 0,0 0,-1 0,0 1,-1 1,-1 1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 0,-2 -3,-4 -5,-9 -8,-13 -1,-1 -2,-2 -2,-4 0,-1 0,-1 0,-2 -1,-2 -2,-4 -4,-5 0,-1 0,-2 -1,-2 0,-1 -1,-2 -2,-2 0,0 0,1 -1,1 0,0 0,0 0,0 1,0 1,1 1,1 1,1 1,1 0,4 0,0 0,0 0,0 0,1 0,1 0,2 1,1 2,3 2,4 0,0 0,1 0,1 -1,0 -1,0 -1,-1 0,-1 -1,-1 -1,-2 -1,0 -1,-1 -1,-2 0,-1 0,-2 -1,-2 -2,-1 -4,-2 -5,-3 -1,-1 -1,-1 -1,-1 -1,0 -2,1 -2,1 -1,0 -2,0 -2,1 0,1 0,2 -1,2 0,0 -1,0 -1,0 0,-1 -1,-2 -1,-3 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,0 0,1 0,2 0,0 0,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -2,-1 -1,0 -1,0 -2,0 0,1 0,0 -1,0 -1,0 -1,0 -1,-1 0,0 0,-1 1,-1 0,-1 1,-3 2,-4 0,-1 1,-2 1,-4 0,-3 1,-5 3,-8 0,-2 1,-3 1,-5 -1,-1 0,-2 0,-3 1,-1 1,-2 1,-3 0,-1 0,-1 0,-2 1,-1 2,-2 3,-2 1,0 3,-1 5,-2 0,0 1,0 2,1 0,0 1,0 1,-1 1,-1 2,-1 3,-1 1,0 3,-1 4,-1 0,0 1,0 1,0 0,-1 0,-2 0,-2 0,-1 1,-1 2,-1 2,0 4,0 5,0 1,0 1,1 2,1 0,0 0,0 0,0 0,1 -1,1 -1,1 0,1 0,1 1,2 0,0 1,0 1,0 1,-1 3,-1 4,-3 0,0 1,0 1,0 1,0 2,0 2,-1 0,0 1,0 1,-1 0,-2 -1,-1 -2,-2 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,-2 -1,-3 0,-5 0,0 0,0 0,-1 1,-1 1,-2 1,-3 0,-2 0,-3 0,-5 0,-1 0,-2 1,-3 1,0 2,0 3,-1 1,0 2,0 3,0 0,0 1,0 1,-1 1,0 1,0 1,1 0,1 0,2 1,3 0,0 0,1 1,2 1,0 1,0 2,1 0,0 1,0 1,0 0,-1 0,-1 1,-1 0,-2 0,-4 0,-5 1,-1 1,-2 2,-2 1,0 1,-1 1,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 -2,-3 -2,-6 0,0 0,0 0,0 0,-1 2,-1 3,-1 0,0 0,1 0,1 -1,1 0,3 0,4 1,1 2,3 2,4 0,1 0,1 0,1 1,1 1,3 1,4 0,1 -1,2 -1,2 0,0 0,1 -1,1 0,0 0,1 0,2 0,2 0,4 -1,6 0,1 0,1 0,2 0,2 0,4 0,6 0,2 0,3 -2,5 0,0 0,1 0,1 0,0 -1,0 -1,1 -1,1 -1,1 -1,1 1,2 1,3 1,4 0,1 0,1 0,2 -1,1 -1,2 -1,3 0,1 1,3 2,4 1,6 4,10 7,15 1,1 2,2 3,3 0,1 0,2 1,3 1,1 2,2 2,3 1,1 1,2 2,3 0,2 1,2 2,3 0,0 1,0 1,0 0,-1 1,-2 1,-3 1,-2 1,-4 0,-7 -1,-2 -1,-3 2,-4 0,0 0,-1 0,-1 1,0 1,0 1,-1 -1,0 -1,-1 -2,-1 0,-1 0,-1 0,-2 0,-1 0,-2 0,-4 0,0 1,-1 2,-1 0,-1 1,-1 1,-1 1,-1 1,-2 1,-2 -1,-1 -1,-2 -2,-2 -2,-2 -2,-4 -2,-7 0,0 1,-1 1,0 0,0 0,0 1,0 1,0 1,-1 1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -2,-1 0,0 0,0 0,0 -1,-1 -2,-2 -1,-4 0,0 0,-1 0,-1 0,0 0,-1 0,-1 -1,-1 -2,-1 -3,-1 0,0 0,0 0,0 0,1 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-4 0,-2 0,-5 -1,-7 -1,0 -1,0 -1,-1 0,-1 1,-2 2,-3 0,0 1,0 1,0 1,0 1,0 1,0 0,-1 0,-2 1,-2 0,-1 1,-1 1,0 0,0 0,1 1,1 0,1 0,1 1,1 0,0 0,-1 0,-1 0,-1 0,-1 1,-2 0,-1 0,-2 1,-2 1,-1 2,-2 3,-2 1,0 2,0 2,1 1,0 2,1 2,1 1,0 1,1 1,1 0,0 1,0 1,0 1,0 1,-1 1,-1 0,-1 -1,-2 0,-3 0,-1 0,-2 0,-2 1,-2 1,-3 1,-5 0,-2 1,-4 2,-5 0,-1 1,-2 1,-4 1,-1 2,-3 4,-4 0,-1 1,-1 2,-1 0,0 1,0 2,0 1,0 1,0 2,0 0,0 0,0 0,-1 0,-1 0,-3 -1,-4 -1,-1 -1,-1 -1,-2 -1,0 -1,-1 -1,-1 -2,0 -3,-2 -4,-2 0,0 0,0 0,0l-1 0 1 0c0,0 0,0 0,0 -1,0 -1,-1 -1,-1 0,-1 -1,-2 -2,-2 0,0 0,0 -1,0 0,-1 0,-1 0,-1 0,-1 -1,-2 -2,-1 -1,0 -2,-1 -3,-2 0,0 0,-1 0,-1 1,0 1,0 2,0 1,-1 2,-2 2,-3 0,-2 0,-4 0,-5 0,-1 0,-1 0,-2 0,0 -1,-1 -1,-2 0,-1 -1,-1 -2,-1 -1,0 -2,-1 -2,-2 -1,0 -1,-1 0,-1 0,0 0,-1 0,-1 0,-1 1,-1 1,0 1,1 1,1 2,2 3,1 3,1 4,-2 0,0 0,0 0,0 1,-1 2,-2 2,-2 1,0 1,1 2,1 0,0 1,1 1,1 1,1 2,1 3,1 1,-1 2,-1 2,-1 1,0 2,0 3,0 0,0 1,0 1,0 0,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-3 -2,-3 0,0 -1,-1 -1,-1 0,-1 0,-1 0,-1 0,-1 0,-3 -1,-3 -1,-1 -1,-1 -2,-2 0,0 0,-1 0,-1 1,-1 2,-2 2,-3 0,-1 0,-1 0,-1 -1,-2 -2,-3 -2,-5 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 -2,0 -3,-1 -5,-1 0,0 0,0 -1,0 -1,-1 -2,-1 -2,0 -1,1 -2,2 -3,2 0,0 -1,0 -1,1 0,0 0,1 0,1 1,1 2,2 2,2 0,1 0,1 0,2 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,-2 -3,-3 -4,-5 -1,-1 -3,-2 -5,-2 -1,0 -2,0 -2,0 -2,0 -3,0 -4,0 -2,0 -3,0 -4,-1 -2,0 -3,-1 -5,0 -1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 -3,0 -6,-1 -9,-1 0,0 -1,0 -1,0 -2,0 -4,0 -6,1 -1,1 -2,1 -3,1 -2,1 -3,1 -5,1 -1,0 -1,0 -2,0 0,0 0,1 0,1 0,1 1,2 1,4 0,0 0,0 1,1 1,0 2,0 2,1 1,1 2,2 3,3 0,0 0,1 0,1 -1,1 -1,1 -1,2 -1,0 -2,0 -2,-1 -1,-1 -3,-2 -4,-2 -1,0 -1,0 -1,0 0,0 -1,-1 -1,-1 0,0 -1,-1 -1,-1 0,-1 0,-1 0,-1 1,-1 1,-2 0,-3 0,-1 -1,-1 -2,-1 -1,0 -2,1 -2,2 0,1 0,2 0,3 0,1 0,1 -1,2 -1,0 -3,0 -4,0 -1,0 -2,1 -3,0 0,0 0,0 0,1 -2,0 -4,1 -5,2 -2,1 -5,2 -7,2 -1,0 -1,-1 -1,-1 -1,0 -1,0 -1,-1 0,-2 -2,-4 -4,-5 0,-1 0,-1 -1,-1 -2,-1 -4,-2 -7,-1 -1,0 -1,0 -2,1 -2,1 -4,2 -6,3 -1,1 -2,1 -3,2 -1,0 -2,0 -2,-1 -1,-1 -1,-1 -2,-2 -1,0 -1,0 -2,0 -1,-1 -1,-1 -2,0 0,0 -1,0 -1,0 -1,0 -1,-1 -2,0 0,0 -1,0 -1,-1 0,0 -1,0 -2,-1 0,0 0,0 0,0 1,-2 1,-2 0,-3 0,0 0,0 0,0 -2,-1 -4,-2 -5,-1 -1,0 -2,0 -3,0 0,1 -1,1 -1,1 -1,1 -2,2 -3,1 -2,0 -3,0 -5,0 -2,0 -4,0 -5,0 -2,0 -4,1 -6,0 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 0,1 0,1 1,0 1,0 2,0 0,0 0,1 1,1 0,0 -1,1 -1,1 0,0 -1,0 -1,0 -1,1 -1,1 -1,2 0,1 0,2 1,2 1,0 1,0 2,0 0,0 0,0 0,0l0 -1 0 1c0,0 0,0 0,0 -1,0 0,1 0,2 1,0 1,1 2,2 1,0 1,1 0,1 0,0 0,1 -1,0 -1,0 -2,0 -2,0 -1,1 -2,1 -2,1 -1,1 -2,1 -2,1 -1,0 -2,0 -2,0 -1,0 -2,0 -3,2 0,1 -1,1 -2,1 -2,0 -4,0 -5,-2 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1 0,1 0,2 1,3 1,2 1,3 1,5 0,0 0,1 0,1 -1,0 -2,-1 -3,-1 -2,-1 -4,-3 -6,-4 0,0 0,0 0,0 0,-1 0,-1 -1,-1 -1,1 -1,1 -2,0 0,0 0,-1 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 -1,-2 -1,-3 -1,0 -1,0 -2,0 -1,-1 -1,-1 -1,-1 0,-1 1,-1 0,-2 -1,-1 -2,-2 -3,-3 -1,-1 -5,-2 -6,-2 0,0 0,0 -1,1 0,0 -1,0 -1,0 -2,-1 -4,-1 -6,0 0,0 -1,0 -1,0 -1,1 -1,2 -1,2 1,1 1,2 2,3 0,1 0,1 0,1 -2,1 -4,2 -5,2 -1,1 -2,1 -3,0 -1,-1 -1,-1 -2,0 -1,1 -3,0 -4,-2 0,0 0,0 0,0 0,-1 -1,-2 -1,-1 -2,0 -4,0 -7,1 0,0 -1,0 -2,1 -1,0 -2,1 -2,1 -1,0 -2,-1 -3,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 -1,1 -3,2 -4,1 0,-1 0,-1 -1,-2 0,0 0,0 -1,0 0,0 -1,0 -1,0 -1,0 -2,1 -2,1 0,1 0,1 0,1 0,1 0,2 1,2 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 -1,1 -2,2 -2,2 -1,2 -2,3 -4,3 -1,0 -1,0 -1,-1 1,-1 1,-1 1,-2 0,-1 1,-1 1,-2 0,0 1,-1 1,-1 -1,-1 0,-3 0,-4 1,0 1,-1 1,-1 -1,-1 -1,-1 0,-2 0,-1 1,-2 1,-4 1,-1 1,-2 1,-4 1,-1 1,-2 0,-3 -1,-2 -1,-3 -2,-4 0,0 0,-1 0,-1 -2,0 -2,-2 -3,-3 -1,0 -1,0 -1,0 -1,1 -1,2 -1,1 -1,-1 -2,-2 -3,-3 -1,0 -2,0 -3,-1 -1,-1 -2,-1 -3,0 -1,1 -3,2 -5,2 0,0 -1,1 -1,1 1,1 1,1 1,1 0,1 0,2 -1,2 0,1 -1,0 -1,-1 -1,0 0,-1 -1,-2 0,-1 0,-1 0,-2 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,0 -1,1 -2,1 -2,0 -1,0 -1,0 -1,-1 0,-1 -1,-2 -2,-3 -1,0 -3,0 -4,-1 0,0 -1,1 -1,1 0,0 -1,0 -1,1 -1,2 -1,4 -1,7 0,1 0,3 2,4 1,1 0,2 1,2 0,1 0,1 -1,1 -1,1 -2,1 -3,1 0,0 0,1 0,1 0,0 0,1 0,1 0,1 -1,2 -1,3 -1,0 -1,0 -1,0 -1,1 -2,1 -3,1 0,0 0,0 0,0 0,-1 0,-1 0,-2 1,0 0,-1 -1,-1 0,0 -1,0 -1,1 -1,1 -1,1 -1,1 -1,0 -2,1 -2,1 -1,0 -2,0 -2,1 -1,1 -1,1 0,2 0,0 0,1 0,1 -1,1 -2,1 -3,2 -1,0 -2,1 -3,2 -1,1 -2,1 -2,2 0,1 -1,2 -1,2 -2,0 -1,2 -2,2 -1,1 -1,1 -1,2 -1,1 0,1 0,2 0,1 0,1 1,2 1,0 2,1 3,2 1,0 3,1 3,2 1,0 1,0 1,0 0,1 -1,1 -1,1 0,0 0,0 -1,-1 0,0 0,0 0,0 -1,0 -2,0 -2,0 -1,1 -3,2 -4,2 -2,1 -3,2 -5,2 -1,0 -1,0 -2,1 -1,0 -1,1 -1,3 1,0 1,1 1,2 1,0 2,1 2,2 0,1 0,1 0,2 1,0 1,0 2,1 1,0 2,0 3,0 1,1 2,2 2,3 1,0 1,0 1,0 1,0 1,0 2,1 1,0 1,0 1,1 0,2 1,3 2,5 0,0 0,1 0,1 -1,0 -1,0 -2,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -2,-3 -1,-5 0,0 0,0 0,0 1,-1 0,-2 -1,-2 -1,0 -1,0 -2,0 -1,1 -2,0 -4,-1 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -2,-1 -3,-1 -4,-2 -1,0 -1,0 -1,1 -1,0 -1,1 -1,2 0,0 0,0 0,0 0,1 1,1 1,1 0,0 0,0 0,0l0 -1 0 1c0,0 1,0 1,0 0,1 1,1 1,1 1,0 1,1 1,1 -1,1 -1,1 -1,1 -1,0 -1,-1 -2,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,1 -1,1 -1,1 1,2 2,3 4,4 1,0 2,0 3,0 0,0 0,0 1,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -2,0 -2,0 -3,0 -4,0 -1,0 -1,-1 -2,-1 0,0 0,-1 0,-1 -1,-1 -2,-3 -2,-5 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 1,2 1,3 0,1 0,2 0,3 0,0 -1,0 -1,0 0,1 -1,2 0,3 0,1 -1,2 0,3 0,1 1,1 2,2 0,0 1,1 1,1 1,1 2,2 2,3 0,1 0,2 0,3 0,2 2,4 2,6 1,0 1,0 2,0 1,0 2,0 3,-1 1,-1 2,-1 3,0 0,0 0,0 0,0 0,0 0,0 0,1 -1,0 -3,1 -4,2 -1,1 -1,2 0,3 0,1 1,1 1,2 1,1 1,2 1,3 -1,1 -1,2 -1,4 0,0 0,1 0,2 -1,1 -2,2 -2,4 0,0 -1,0 -1,0 -2,0 -3,0 -5,-1 0,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 2,1 3,1 3,-1 1,-2 2,-5 2,-7 0,-1 0,-1 0,-2 -1,-1 -1,-2 -1,-3 1,0 0,-1 0,-1 -1,-1 -2,-1 -2,-2 -1,0 -1,-1 -2,-2 -1,-3 -2,-6 -3,-9 -1,-2 -2,-4 -3,-5 -1,-1 -1,-1 -1,-2 0,-3 -1,-6 -2,-9 0,0 0,-1 -1,-1 -2,-1 -4,-1 -6,0 -1,0 -1,0 -2,0 0,0 0,0 0,0 -1,1 -1,2 -1,3 1,2 1,4 1,6 0,1 0,2 -1,3 -1,1 -1,2 -1,4 0,1 0,1 1,2 0,0 1,1 1,2 0,1 1,2 1,3 0,0 0,1 0,1 0,1 1,2 2,3 0,0 0,0 0,0 1,0 2,0 2,0 1,2 2,3 4,3 0,0 0,1 0,1 0,1 0,1 0,2 0,0 0,1 -1,0 0,0 -1,-1 -2,-1 -1,-1 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,-1 -2,-1 -3,-2 -1,1 -1,-1 -2,-1 -2,-1 -4,-1 -6,-1 -1,0 -1,0 -1,0 -3,0 -5,0 -7,-2 -1,-1 -2,-1 -3,-2 0,0 -1,0 -1,0 0,1 0,1 0,1 0,1 0,2 1,3 1,1 2,1 3,2 0,0 1,0 1,0 1,0 1,1 1,1 1,1 2,2 3,3 0,0 0,1 0,1 -1,1 -2,2 -2,3 -1,0 -1,0 -1,0 0,0 0,0 0,-1 -1,0 -1,-1 -1,-1 0,-1 -1,-1 -1,-1 -1,1 -2,1 -4,1 0,0 0,0 0,0 0,1 -1,2 -2,2 -1,0 -2,0 -3,1 -1,1 -2,1 -2,1 -1,1 -1,0 -2,0 0,0 0,0 0,0 1,-1 0,-2 -1,-3l0 0c0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,1 0,0 0,0 0,0 -1,0 -1,1 -2,1 0,1 -1,1 -2,1 -1,0 -1,1 -2,2 -2,1 -3,3 -5,4 -1,1 -1,1 -1,2 0,0 0,1 0,2 0,0 0,0 -1,0 -1,2 -3,2 -4,1 0,-1 -1,-1 -1,-2 -1,-1 -1,-1 0,-2 0,0 1,-1 2,-1 0,0 0,-1 0,-2 -1,0 -1,-1 -2,-2 -1,-1 -2,-1 -3,-1 -2,0 -3,0 -4,0 0,0 0,0 0,0 0,0 0,1 0,1 2,1 3,3 2,6 0,0 0,1 0,1 0,1 0,1 1,2 1,0 1,1 1,2 0,1 0,1 0,2 0,0 -1,1 -1,1 -1,-1 -2,-1 -2,-1 -2,0 -3,0 -3,1 -1,1 -1,1 -2,1 -1,1 -1,2 -2,3 -1,1 -2,2 0,4 1,0 1,1 1,1 0,0 0,1 0,1 -1,1 -1,1 -2,1 -2,-1 -4,-1 -6,-3 0,0 0,0 -1,0 0,0 -1,0 -1,0 0,1 0,1 -1,2 0,0 0,1 1,1 1,1 2,2 3,2 0,0 0,0 1,0 0,1 0,1 0,1 0,1 -1,2 -1,2 -2,-1 -3,-1 -4,-2 0,-1 -1,-1 -2,-1 -1,0 -1,-1 -1,-1 0,-1 -1,-2 -2,-4 0,0 0,-1 0,-2 0,-2 0,-3 -2,-4 -1,0 -2,0 -2,-1 -1,-1 -2,-1 -2,-2 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 1,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,0 3,1 3,1 6,2 9,2 3,1 5,0 7,-1 1,0 1,0 1,0 2,-2 3,-3 3,-5 0,-1 0,-1 0,-2 -1,-1 -2,-2 -3,-3 -1,0 -2,-1 -2,-1 -1,-1 -1,-1 -2,-1 -1,-1 -3,-1 -4,-2 -1,-1 -2,-2 -3,-2 -4,-2 -5,-3 -8,-3 -1,0 -1,0 -2,0 -1,0 -1,0 -2,0 -1,0 0,0 0,-1 0,0 0,-1 -1,-1 0,0 0,0 -1,-1 -1,0 -1,0 -1,1 -1,0 -2,1 -3,0 0,0 -1,0 -2,0 0,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 1,0 1,0 1,0 1,-1 2,-1 0,0 1,-1 1,-1 1,-1 1,-1 0,-1 -2,-1 -3,-2 -5,-3 -1,0 -1,1 -2,1 0,0 0,0 0,0 0,1 0,1 -1,1 0,0 0,-1 0,-1 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 0,-1 -1,0 -1,0 -1,0 -1,1 -1,1 0,1 0,1 0,2 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,-1 -1,-2 -2,-2 0,0 0,0 0,0 0,-1 -1,-2 -2,-1 0,1 -2,1 -3,2 -1,0 -1,1 -2,2 -1,0 -1,0 -1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 1,0 0,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -2,0 -2,0 -2,2 0,0 0,0 0,0 0,0 1,0 1,0l0 1 -1 -1c0,0 0,0 0,0 -1,0 -3,1 -4,2 0,0 0,0 0,1 0,0 0,0 0,1 0,0 -1,0 -1,0 -1,0 -1,0 -2,1l0 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 0,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,2 0,0 0,0 0,0l0 0c-1,0 -2,0 -2,1 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 -2,1 0,1 0,2 1,2 0,1 0,1 0,1 1,0 0,1 0,1 0,0 -1,1 -1,0 -1,0 -2,0 -2,0 -1,0 -1,0 -1,0 0,-1 0,-2 1,-2 0,0 -1,-1 -1,-1 0,0 0,0 0,0 -1,1 -2,2 -3,3 0,1 0,1 0,1 1,1 1,1 0,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 1,0 1,0 1,0 2,0 3,0 1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -2,1 0,0 0,0 -1,0 0,0 0,1 0,1 0,1 -1,1 -1,1 0,1 0,1 0,2 0,0 -1,0 -1,1 0,0 0,0 0,1 0,1 -1,1 -1,1 -1,1 -2,1 -2,2 0,1 -1,2 -1,2 0,1 0,2 -1,2 0,0 0,0 0,1 0,1 0,1 0,2 0,1 0,2 -1,3 0,0 0,1 -1,1 0,0 0,0 -1,0 0,0 0,1 0,1 0,1 0,1 -1,2 -1,1 -2,2 -3,4 0,0 0,0 0,1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 1,0 0,1 0,1 -1,1 -1,1 -2,2 -3,2 -1,0 -2,1 -3,2 0,0 0,0 0,0 1,1 0,1 -1,1 0,1 -1,1 -1,1 -1,0 -1,0 -1,1 0,0 0,1 0,1 0,2 0,3 0,5 -1,0 0,0 0,0 0,1 1,2 1,3 0,1 1,1 1,2 0,0 0,1 0,1 -1,1 -1,1 -1,1 -1,1 0,1 0,1 0,1 1,1 1,1 1,0 1,1 0,1 0,0 0,1 -1,1 0,0 0,1 1,2 1,1 3,2 4,3 1,0 1,0 1,0 2,-1 4,-1 5,-3 0,0 1,-1 1,-2 1,0 3,-1 4,-2 0,0 0,0 0,0 0,0 1,1 1,1 0,1 0,2 0,2 1,1 1,2 1,3 0,2 1,3 2,4 1,1 1,3 2,4 1,0 0,0 0,1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 1,3 1,2 3,2 1,0 1,-1 1,-1 1,-1 1,-2 2,-2 0,0 1,0 1,0 1,0 2,0 3,-1 2,0 2,-2 2,-3 0,0 0,0 0,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-2 0,-3 0,-4 0,-1 0,-2 0,-2 0,-2 1,-3 2,-3 1,-1 1,-1 2,-2 1,0 1,-1 1,-2 0,-1 0,-1 0,-2 0,0 0,-1 0,-1 -1,-1 -2,-3 -4,-3 0,-1 -1,-1 -1,-2 0,-2 0,-5 0,-7 0,0 1,-1 1,-1 1,-2 2,-4 4,-5 1,0 2,-1 3,-2 1,-1 1,-1 2,-4 0,0 0,-1 0,-2 0,-1 0,-3 1,-4 1,-2 1,-3 3,-2 2,-1 4,0 6,1 0,0 0,1 0,1 -1,1 -1,1 -1,2 0,0 0,1 -1,1 -1,2 -2,4 -4,6 0,1 -1,1 -1,2 0,1 -1,1 -2,1 0,0 0,0 0,1 0,0 0,1 -1,2 0,0 0,1 0,1 0,1 1,1 1,2 0,2 1,4 1,6 0,1 0,1 0,2 0,0 0,1 1,1 0,0 1,1 1,1l0 0c0,0 0,0 0,0l1 0 -1 0c1,0 1,1 1,0 1,0 2,1 2,2 1,0 2,0 2,0 1,0 2,0 3,-1 2,-1 5,-2 8,-2 1,0 1,0 2,0 1,0 1,0 1,0 1,1 2,1 3,2 0,0 0,0 0,0 0,0 0,0 0,0 0,1 -1,1 -1,1 -1,0 -2,1 -2,1 -1,2 -2,2 -4,1 -1,0 -1,0 -2,0 -1,0 -1,0 -2,0 -1,0 -2,0 -3,1 -2,0 -3,1 -3,3 0,1 0,1 -1,1 -1,1 -1,1 -2,1 -1,0 -1,1 0,2 0,0 0,0 0,0 0,0 0,0 0,0l0 1zm-9 1l0 0c0,0 0,0 0,0 -1,0 -1,0 -2,1 -1,0 -1,1 -1,2 0,0 0,1 1,1 0,0 0,0 0,0 0,1 1,0 1,0 1,-1 1,-3 1,-4 0,0 0,0 0,0l0 0zm10 -5c0,0 1,0 1,-1 0,0 0,0 0,0 0,0 -1,-1 -1,0 0,0 0,0 0,0 0,0 0,1 0,1zm-21 19c0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 1,0zm13 -26c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,1 1,1zm-276 452c0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0zm-1 0c1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 1,1 1,2 0,0 0,0 1,0 1,1 1,1 2,2 0,1 0,1 1,1 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,-1 1,-1 1,-2 1,0 1,0 1,0 0,1 0,1 0,1 0,1 0,1 1,2 0,0 1,0 1,0 0,0 1,0 1,0 1,0 1,0 2,0 1,0 1,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,0 3,-1 0,0 1,0 1,-1 0,0 0,0 0,0 1,0 2,0 2,0 1,0 2,-1 2,-2 1,0 0,0 0,0 0,-1 -1,0 -1,-1 -2,0 -4,-1 -5,-2 -1,0 -1,0 -1,0 -1,-1 -2,-2 -3,-3 0,-1 0,-1 0,-2 -1,-1 -2,-2 -3,-2 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 -2,1 -2,2 -2,3 0,0 0,0 0,0 0,0 0,1 0,1 0,-1 0,-1 0,-1 -1,0 -1,-1 0,-1 0,-2 1,-3 2,-3 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 1,-2 2,-1 0,0 0,0 0,0 0,0 1,0 1,-1 0,0 0,0 0,0 -1,-1 -1,-2 -2,-3 0,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 0,-1 1,-1 1,-1 1,-2 1,-4 0,-1 1,-2 1,-3 1,0 2,-1 3,-2 0,-1 0,-2 0,-2 0,-1 0,-1 0,-2 0,-1 -1,-2 -2,-2 -1,0 -1,0 -2,0 0,-1 -1,-1 -2,-2 -1,-1 -1,-3 0,-4 0,-1 1,-1 1,-1 1,-1 2,-1 3,-2 0,0 1,0 1,0 0,-1 1,-2 0,-4 0,0 0,0 0,-1 0,-1 0,-2 1,-3 0,0 1,-1 1,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,-1 0,0 1,0 1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,1 1,0 1,0 2,0 2,-1 -1,-1 -1,-1 -1,-2 0,0 -1,-1 -1,0 0,0 -1,0 -1,0 -1,0 -2,0 -3,-1 0,-1 0,-2 0,-3 0,0 0,0 0,-1 -1,0 0,-1 1,0 0,0 1,0 2,1 1,0 2,0 3,0 1,0 3,-1 3,-2 0,-1 -1,-2 -1,-3 0,-1 1,-2 1,-3 0,0 0,0 0,0 -1,0 -1,-1 -1,-1 0,-1 1,-1 1,-1 3,0 6,0 9,-1 1,0 2,0 3,-1 1,0 2,-1 2,-3 0,-1 1,-1 1,-2 1,-1 1,-1 1,-2 0,0 0,-1 -1,-2 0,0 -1,0 -1,0 0,0 -1,-1 0,-1 0,-1 0,-1 0,-1 0,-2 0,-2 -1,-3 -1,-1 -2,-1 -3,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 2,0 4,0 6,1 0,0 1,0 1,0 1,0 2,1 3,1 2,0 3,-1 4,-3 1,-1 1,-2 2,-3 1,-1 2,-2 2,-3 0,-1 1,-3 1,-4l0 0c0,0 0,0 0,0 2,0 4,-2 4,-4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,-1 2,-1 1,-3 2,-6 4,-8 1,-2 1,-4 0,-6 0,0 0,0 0,0 0,-3 0,-5 2,-7 1,0 2,-1 3,-2 1,-1 2,-2 4,-3 1,0 2,0 2,-1 1,-1 2,-1 2,-2 0,0 0,0 1,0 1,0 1,0 2,0 1,0 2,0 3,0 1,0 3,-1 4,-2 0,-1 1,-1 2,-1 0,-1 0,-1 0,-2 0,0 0,-1 0,-2 1,-1 2,-3 3,-4 1,-1 1,-2 1,-4 0,-1 0,-2 0,-2 1,-2 1,-4 2,-5 0,-3 0,-5 0,-7 0,-2 0,-3 0,-5 0,0 0,-1 0,-1 2,-1 3,-3 4,-5 0,0 0,0 1,-1 0,-1 1,-2 2,-3 1,-1 2,-2 3,-3 1,-1 2,-2 2,-4 1,-1 1,-4 1,-5 -1,-2 -1,-4 -2,-6 0,0 0,0 -1,-1 0,0 -1,0 -2,0 -1,0 -2,0 -3,-1 -1,-1 -2,-1 -3,-3 -1,-2 -3,-2 -5,-3 -1,-1 -2,-1 -3,-1 -3,0 -7,-1 -10,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -2,0 0,1 0,0 -1,0 0,-1 0,-1 0,-2 0,0 -1,-1 -1,-1 -2,0 -4,-1 -5,-2 -2,-1 -3,-1 -4,-1 -2,0 -3,0 -3,1 0,0 0,1 0,1 -1,0 -1,-1 -1,-1 0,0 0,-1 0,-1 1,-1 0,-2 -1,-2 -1,0 -2,0 -3,-1 0,0 0,1 0,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,0 -2,0 -3,1 0,-1 -1,-1 -2,-1 1,-1 2,-1 4,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 0,-3 1,-1 1,-1 0,-2 0,0 -1,-1 -1,-2 -1,-1 -2,-2 -3,-4 0,-1 0,-2 -1,-2 -2,-3 -4,-5 -7,-6 -1,0 -1,0 -2,0 -1,-1 -2,-1 -4,-1 -2,0 -3,0 -5,0 0,0 0,0 -1,0 -1,-1 -2,-2 -4,-3 0,0 0,0 0,0 -1,-1 -1,-2 -1,-2 -1,-1 -2,-2 -3,-3 -1,0 -1,0 -2,-1 -1,0 -2,0 -2,0 -1,0 -1,0 -1,-1 0,-1 -1,-2 -2,-2 -1,-1 -2,-1 -3,-2 0,0 0,0 -1,0 0,-1 1,-1 1,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 -2,-1 -3,0 -4,0 -1,0 -1,0 -2,-1 0,0 -1,0 -1,0 0,1 0,1 0,1 -1,1 -3,2 -5,1 -1,-1 -2,-1 -3,-1 -1,1 -3,1 -4,1 0,0 -1,-1 -1,-1 0,0 0,0 0,-1 0,0 -1,-1 -2,-1 0,0 -1,0 -1,-1 -1,0 -2,0 -2,-1 -1,-1 -1,-1 -1,-1 -1,0 -1,0 -2,1 0,0 0,0 0,1 0,1 0,1 -1,1 -1,0 -2,1 -2,1 -1,0 -1,0 -1,0 0,-1 -1,-1 0,-2 0,0 1,-1 1,-1 1,-1 1,-1 0,-2 0,0 -1,0 -1,0 -1,0 -2,1 -3,1 -1,1 -2,2 -3,2 -1,1 -3,1 -4,2 0,0 0,0 0,0 -1,-1 -2,0 -3,1 0,0 -1,1 -1,2 0,1 -1,2 -2,3 0,0 -1,1 -2,2 0,0 0,1 0,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-2 -2,-2 -1,-1 -2,-2 -3,-2 -2,0 -4,0 -5,1 -1,0 -1,0 -2,0 -1,1 -2,1 -3,1 -2,-1 -4,-2 -5,-4 -1,-1 -1,-2 -2,-3 0,0 0,-1 0,-1 0,-1 0,-3 1,-4 0,0 0,-1 0,-1 0,-2 1,-3 1,-4 0,-2 0,-3 0,-4 0,-1 0,-1 0,-1 -1,0 -1,-1 -2,-1l0 0c0,0 0,0 0,0l0 0 0 0c-1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,-1 -2,0 -3,1 -5,1 -1,0 -2,0 -3,0 -1,0 -1,0 -2,0 0,0 0,-1 0,-1 1,-1 2,-3 2,-4 -1,-1 0,-2 0,-3 0,0 0,-1 1,-1 1,0 1,0 1,-1 0,-1 1,-2 1,-3 -1,-1 0,-2 1,-3 0,-1 1,-2 1,-2 0,-1 1,-1 1,-1 0,-1 -1,-2 -2,-2 -1,0 -3,-1 -4,0 -2,1 -3,1 -4,1 -2,0 -2,1 -3,2 0,0 0,1 -1,1 0,3 -1,4 -3,6 0,1 -1,1 -2,1 -1,0 -2,0 -2,0 -2,0 -3,1 -4,1 -1,0 -3,0 -3,-1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2 -1,-2 -1,-3 -2,-4 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-4 0,0 0,-1 0,-2 0,-3 0,-6 1,-9 0,0 0,-1 1,-1 1,-1 1,-3 1,-4 -1,-2 0,-4 0,-6 1,-1 2,-3 4,-3 2,0 4,-1 5,-2 1,-1 2,-2 4,-2 1,-1 2,0 3,0 1,0 1,1 2,0 1,0 2,0 2,1 1,1 3,1 4,1 1,0 2,0 3,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,-1 1,-1 1,-1 1,-1 2,-1 2,-1 2,0 4,0 6,0 2,0 4,1 5,2 1,1 2,1 2,1 1,-1 1,-1 2,-1 0,0 1,0 1,0 1,1 2,2 3,4 0,0 0,1 0,2 0,0 0,0 0,1 -1,1 -1,1 0,2 1,2 2,4 3,6 0,1 1,2 2,3 0,1 2,1 2,0 1,-2 2,-4 2,-6 0,0 0,0 0,0 0,-2 -1,-3 -1,-4 0,-1 0,-2 0,-3 0,0 0,0 -1,0 -1,-3 -1,-7 0,-10 0,-1 0,-1 0,-2 2,-1 3,-3 5,-4 1,0 1,0 1,0 1,0 2,-1 2,-1 1,-1 1,-1 1,-2 1,0 1,-1 2,-1 1,0 1,-1 2,-1 1,-1 2,-2 4,-3 1,0 1,0 1,-1 0,-1 1,-1 1,-1 0,0 1,-1 1,-1 0,0 1,-1 0,-1 0,-1 0,-1 0,-2 1,-1 1,-2 0,-3 0,0 0,-1 0,-1 0,-1 0,-3 0,-4 0,0 0,0 0,0 1,0 1,0 1,0 0,1 0,1 0,2 0,0 1,0 1,1 0,0 0,0 0,-1 1,-1 2,-2 2,-3 0,0 1,-1 1,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,0 1,0 2,-1 1,-1 2,-2 2,-4 1,-2 1,-2 3,-2 0,0 1,0 2,0 0,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 2,0 4,-1 7,-1 0,0 0,0 1,-1 0,0 0,-1 -1,-1 0,-1 -1,-2 -1,-2 1,-1 1,-2 1,-3 1,-2 2,-3 4,-4 1,0 2,0 2,-1 1,0 1,-1 2,-1 2,1 4,0 5,-1 1,0 1,0 1,-1 0,0 1,-1 1,-1 1,0 3,0 4,0 0,-1 1,0 1,0 -1,0 -1,0 -1,0 0,1 -1,1 -1,1 -1,1 -2,1 -3,3 0,0 0,1 0,1 0,1 1,2 1,2 1,0 1,0 1,0 2,-1 3,-1 5,-3 0,-1 1,-1 2,-1 2,-1 4,-1 6,-2 1,0 1,0 2,-1 0,-1 2,-1 3,-1 0,0 1,-1 1,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 -1,-1 -2,-2 -1,-3 0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -2,1 -3,3 -4,4 0,1 -1,1 -1,1 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,0 2,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-2 0,-2 -2,-2 -1,-1 -2,-1 -3,-2 0,0 -1,0 -1,0 0,0 0,0 0,0 1,1 1,2 2,3 0,0 0,0 -1,0 0,0 1,0 1,0 -2,0 -3,-1 -3,-3 0,-1 0,-2 0,-4 1,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 2,-1 3,-2 0,0 1,-1 0,-2 0,0 0,-1 -1,-1 -1,-1 -2,-1 -3,-1 -4,1 -8,2 -11,4 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -2,1 0,1 0,1 0,1 0,0 -1,0 -1,0 -1,1 -1,1 -1,1l0 0 0 0c0,0 0,-1 1,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 1,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 1,-2 1,-1 3,-2 4,-2 1,-1 2,-1 3,-2 0,-1 0,-1 0,-1 1,-1 2,-2 3,-2 1,-1 2,0 3,0 4,0 7,1 11,1 2,0 3,0 5,0 0,0 1,0 1,0 1,0 1,-1 1,-1 1,0 2,-1 3,-2 1,-1 2,-2 3,-2 0,0 1,0 2,0 2,0 3,-1 5,-2 1,-1 1,-2 1,-3 -1,0 -1,-1 0,-2 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-2 -2,-2 -3,-2 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-2 -2,-2 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,-1 1,0 1,-1 1,-1 -1,-1 -1,-1 -2,-1 0,0 -1,0 -1,0 -1,-1 -2,-2 -4,-3 0,0 0,0 0,0 0,-2 -2,-2 -3,-3 0,-1 0,-1 -1,-2 0,0 0,-1 0,-1 1,-1 1,-1 2,-2 0,0 0,-1 0,-1 -1,-1 -1,-2 -1,-3 0,-1 0,-1 -1,-1 0,-1 0,-2 -1,-2 0,-1 0,-1 0,-2 0,0 0,-1 0,-2 0,-1 0,-1 -1,-2 0,-2 -1,-4 -1,-6 0,0 0,-1 0,-1 0,-1 0,-1 -1,-1 0,0 0,0 0,0 -1,2 -2,3 -3,5 -1,2 -2,3 -4,4 0,0 -1,1 -1,1 -1,1 -2,1 -2,1 -1,0 -1,0 -2,0 -1,-1 -1,-1 -1,-2 0,0 -1,-1 -1,-1 -1,-1 -1,-1 -1,-2 0,-2 1,-3 0,-4 0,-1 0,-1 0,-1 1,-2 1,-3 2,-4 0,0 0,-1 0,-1 -2,0 -2,-1 -4,-1 0,0 -1,-1 -1,-1 -1,0 -1,-1 -1,-1 0,-1 1,-1 0,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -2,-2 0,-1 -1,-1 -2,-1 -1,0 -1,0 -2,0 -2,0 -3,0 -5,-1 0,0 -1,-1 -2,-1 -1,0 -3,1 -3,2 -1,1 -1,2 0,3 0,1 0,1 0,2 -1,1 -2,2 -2,3 -1,1 0,2 0,3 0,1 0,1 0,2 0,1 0,1 -1,2 0,0 -1,0 -1,1 -1,1 -2,2 -3,4 -1,0 -1,1 0,2 0,0 1,1 1,1 0,1 1,1 1,2 0,1 0,3 0,4 1,2 0,4 0,5 0,0 0,1 0,1 -1,0 -1,1 -2,1 -2,2 -4,3 -6,4 -1,0 -2,1 -3,1 -1,0 -1,1 -1,2 0,1 0,3 0,5 0,1 0,2 0,3 0,1 0,2 0,3 0,1 0,1 0,1 -1,1 -1,2 -2,2 0,1 0,1 0,1 -1,0 -2,0 -2,1 -1,0 -2,0 -2,0 0,-1 0,-1 0,-2 -1,0 -1,-1 -1,-1 -2,-2 -2,-3 -3,-5 0,0 0,-1 0,-2 1,-1 2,-3 2,-5 0,-1 0,-2 0,-2 1,-1 1,-2 1,-2 0,-1 0,-1 -1,-1 -2,-1 -4,-1 -6,-1 -1,0 -1,-1 -1,-1 -1,-1 -3,-2 -4,-3 -2,-1 -3,-2 -3,-3 -1,-2 -2,-3 -4,-4 -1,-1 -2,-1 -4,-2 0,0 -1,0 -2,0 -1,0 -2,0 -3,0 0,0 0,0 0,0l0 1 0 -1c0,0 0,0 0,0 0,-1 1,-2 1,-3 0,-2 0,-3 0,-5 0,0 0,-1 -1,-1 0,0 0,-1 0,-1 -1,0 -1,0 -2,0 0,0 -1,0 -1,-1 0,0 0,-1 0,-1 0,-1 1,-1 1,-2 0,-4 2,-7 5,-9 0,-1 1,-1 1,-2 2,-2 3,-4 5,-5 2,-1 3,-2 3,-3 0,-1 1,-1 1,-1 1,0 1,1 2,1 1,0 2,-1 2,-3 0,0 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 2,1 4,0 4,-2 0,0 1,0 1,0 1,0 2,0 2,1 1,0 2,0 2,-1 2,-2 4,-4 6,-6 1,0 1,0 1,0 0,-1 0,-1 0,-2 1,0 2,-1 3,-2 0,0 0,0 0,0l0 0c0,1 0,2 -1,2 0,3 -2,5 -3,8 0,0 0,0 -1,1 0,0 0,0 -1,1 0,0 0,1 1,1 0,0 0,0 1,1 0,0 1,0 0,1 0,0 0,0 0,1 0,1 1,1 2,1 0,0 1,0 1,-1 2,-1 4,-2 5,-4 0,0 0,0 1,0 0,0 1,1 1,2 0,1 1,1 1,1 1,0 2,1 3,1 0,0 1,0 1,0 0,0 1,-1 1,-1 1,-1 0,-2 0,-2 0,0 0,0 -1,0 0,0 -1,-1 -1,-2 0,-1 0,-2 -1,-3 -1,0 -1,-1 -1,-2 -1,-1 -3,-2 -4,-3 0,0 0,0 0,-1 -1,0 -1,0 -1,-1 1,0 1,0 2,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0 0,0 -1,1 -2,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 1,-3 0,0 0,0 0,0 -1,0 0,-1 0,-1 1,0 2,0 3,2 0,0 0,0 0,0 2,1 4,1 6,0 1,-1 3,-2 4,-3 0,0 1,0 1,0 1,-1 2,-1 2,-2 1,-1 1,-2 1,-2 -1,-1 -1,-1 -1,-2 0,-1 0,-1 0,-2 0,-1 0,-2 0,-3 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 1,1 1,1 2,1 1,0 2,-1 2,-3 0,0 0,-1 1,-1 0,-1 0,-2 -1,-2 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,-1 -1,-1 -1,-3 0,-1 -1,-1 -2,-1 0,0 -1,-1 -1,-1 -1,0 -2,0 -2,-1 0,0 0,0 0,0 1,0 2,0 2,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,-1 1,-1 2,1 3,2 5,2 0,0 0,0 0,0 1,0 1,0 1,0 1,1 1,1 2,2 0,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0l-1 -1 1 0c0,1 0,1 0,1 0,0 1,0 1,0 0,0 0,0 0,0 0,1 1,1 1,1 0,0 0,0 0,0 1,0 1,0 2,0 1,0 1,-1 1,-2 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 0,0 1,0 0,0 0,1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 1,1 2,1 3,1 0,0 0,1 0,1 0,0 0,0 0,0 0,1 -1,2 -1,2 0,1 1,1 1,2 1,1 1,3 2,4 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 -1,1 -1,1 0,0 0,1 1,1 1,0 2,-1 3,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,1 0,1 1,0 1,0 1,-1 1,0 2,0 2,2 1,0 1,0 1,0 1,1 1,2 1,3 0,1 0,3 0,4 0,1 -1,1 -1,1 -1,1 -2,1 -2,2 -1,1 -2,2 -3,2 -2,2 -3,2 -2,5 0,1 0,1 0,1 -1,0 -3,0 -4,1 -1,0 -3,0 -4,0 -1,-1 -1,-1 -2,-2 0,0 -1,0 -1,1 -1,0 -1,1 -2,2 -1,0 -1,1 -1,1 -1,1 0,2 0,3 1,1 3,2 5,1 0,0 1,-1 1,-1 1,0 1,0 1,0 2,1 3,1 5,1 0,0 1,0 1,1 1,1 1,3 2,4 1,0 1,1 1,2 -1,0 -1,1 0,1 1,1 1,2 3,3 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0l0 0c1,0 1,1 2,2 1,1 2,2 4,2 1,1 1,1 2,2 1,0 2,0 2,0 0,0 1,0 1,0 0,-1 0,-1 0,-2 -1,-2 -2,-4 -4,-6 0,0 -1,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 2,0 3,1 4,2 0,1 1,2 2,2 1,0 2,1 2,2 0,1 1,1 1,2 0,0 1,0 1,0 0,0 0,0 0,0 -1,-1 0,-2 0,-3 1,-1 1,-2 2,-2 0,-1 1,-1 0,-2 0,-1 0,-1 0,-1 -1,-2 -1,-3 -1,-5 0,-1 0,-1 -1,-2 -1,0 -1,-1 -2,-2 0,0 -1,0 -1,-1 1,-1 0,-2 -1,-3 0,-1 0,-1 0,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 1,0 1,0 1,0 1,0 1,0 2,-1 0,-1 0,-1 0,-1 0,-1 1,-1 1,-1 1,1 1,2 2,3 1,1 1,2 1,3 0,1 0,1 1,2 0,0 0,0 0,0 1,1 2,2 3,2 0,0 0,0 0,0 1,-1 1,-2 1,-3 0,0 0,-1 1,-1 0,0 1,0 1,0 2,-1 3,-3 5,-4 0,0 0,-1 1,-1 0,-1 0,-1 0,-1 0,-1 -1,-2 -2,-2 -1,0 -1,0 -1,-1l0 0c0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0l0 0c-1,0 -1,0 -1,0 0,0 0,0 -1,0 0,0 0,0 -1,0 0,-1 0,-1 0,-2 0,-1 0,-1 0,-2 -1,0 -2,0 -2,-1 -1,-1 -1,-1 -2,-1 -1,0 -1,-1 -1,-2 -1,-1 -2,-2 -3,-2 0,0 0,-1 0,-1 1,-1 2,-2 1,-3 0,-1 0,-1 1,-1 0,1 1,1 2,1 0,0 1,0 1,-1 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-2 1,-1 1,-2 1,-2 -1,-2 -1,-3 -2,-4 0,-2 -1,-3 -3,-3 -1,-1 -1,-1 -2,-2 0,0 0,0 0,-1 0,0 0,0 0,0l-1 1 0 -1c0,0 0,0 1,0 0,-1 0,-2 -1,-2 0,-1 0,-2 -1,-2 0,-1 -1,-1 -2,0 -1,0 -1,0 -1,-1 -1,-1 -2,-1 -2,-1 0,1 -1,0 -1,0 0,0 0,0 0,0 1,-1 1,-1 1,-2 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,-1 1,-1 1,-2 0,0 -1,-1 -1,-1 -1,-1 -3,-2 -4,-3 0,0 0,0 0,0 1,0 2,0 3,0 0,0 1,-1 0,-1 0,-1 0,-3 0,-4 -1,-2 -2,-3 -3,-3 -2,-1 -3,-1 -4,-2 -1,0 -1,0 -2,1 0,0 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 -2,-2 0,0 -1,0 -2,0 -1,1 -3,2 -5,2 -1,0 -2,0 -3,1 -1,1 -1,1 -2,2 -1,1 -1,3 -1,5 0,0 0,0 0,0 -1,1 -1,1 -2,1 -1,1 -1,1 -1,2 1,1 1,2 1,3 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 -1,0 -1,-1 -1,-4 -1,-5 0,0 0,0 0,0 1,-1 1,-2 1,-2 1,-1 1,-2 1,-3 0,-1 0,-1 1,-2 0,0 0,-1 1,-1 1,-2 3,-3 5,-4 1,0 1,-1 1,-1 0,0 0,0 0,-1 0,0 -1,0 -1,-1 -3,-1 -6,0 -8,1 -1,1 -2,2 -3,3 -2,1 -3,3 -5,4 0,0 0,1 0,1 -1,0 -1,1 -1,1 0,1 0,1 -1,2 -1,1 -2,3 -3,5 0,1 0,2 1,2 1,1 2,1 3,2 1,0 1,0 1,0 0,1 0,1 0,1 0,0 0,1 -1,0 0,0 -1,0 -2,-1 -1,0 -2,0 -2,2 0,0 0,1 0,2 0,1 1,1 1,2 1,1 1,1 2,1 1,0 1,0 1,0 1,0 1,1 2,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 0,0 0,0 -1,0 0,1 1,1 1,1 1,0 1,0 2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,2 2,2 1,-1 2,0 2,1 0,0 0,0 0,0l0 0c0,0 -1,0 -1,0 -1,0 -2,1 -2,2 -1,1 -1,2 -1,4 0,0 0,0 0,0 -1,1 -1,1 -2,2 -1,0 -1,1 -2,2 0,0 0,1 -1,2 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-1 -1,0 -1,1 -1,2 0,0 0,1 0,1 0,1 0,1 0,2 -1,0 -1,0 -2,0 0,0 -1,0 -1,-1 0,0 0,-1 0,-2 -1,-2 0,-3 1,-4 1,0 1,-1 1,-1 0,-2 -1,-4 -1,-6 -1,0 -1,0 -2,0 0,1 -1,2 -2,4 0,0 0,1 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 1,-2 1,-3 1,-4 0,-1 1,-1 1,-1 1,-1 1,-1 0,-2 0,0 -1,-1 -2,-1 -1,0 -1,0 -2,-1 0,0 0,0 0,-1 1,0 2,-1 2,-2 1,0 1,0 1,0 1,-1 1,-1 1,-2 0,-2 -1,-5 0,-7 0,-1 0,-1 0,-1 0,-2 0,-4 -1,-5 0,-1 0,-1 1,-2 1,0 2,-1 3,-2 0,0 1,-1 1,-2 0,0 0,0 0,-1 0,0 1,0 1,0 0,0 1,0 2,1 0,0 1,0 2,0 0,-1 1,-1 1,-1 2,-2 4,-4 6,-6 0,0 1,-1 1,-1 0,-1 0,-2 -1,-2 0,0 0,0 0,0 -2,-1 -3,-1 -5,-2 0,-1 -1,-1 -1,-1 -1,0 -2,0 -4,0 0,0 -1,0 -1,0 0,1 -1,2 -2,2 0,1 -1,2 -1,3 -1,1 -2,2 -2,4 -1,1 -1,1 -1,2 0,2 -1,4 -2,5 0,1 0,1 0,1 -1,1 -2,1 -3,2 0,0 0,1 0,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -2,0 -2,1 -3,3 -3,5 0,1 0,2 -1,2 0,0 -1,1 -1,1 0,1 -1,2 -1,3 1,0 1,1 1,2 1,1 1,1 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 -3,-1 -4,-3 0,0 0,0 0,0 0,-1 -1,-1 -1,-1 -1,1 -1,1 -2,2 -1,1 -2,2 -4,3 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,2 2,1 3,1 4,3l0 0c0,0 0,0 0,0 -1,0 -1,1 -2,1 -1,0 -1,0 -2,0 0,1 0,1 -1,2 0,0 0,0 0,1 0,0 0,0 -1,1 0,0 -1,0 -1,0 -1,0 -1,-1 -2,-1 -1,0 -2,-1 -3,0 0,0 0,0 -1,0 0,0 -1,0 -1,0 -1,0 -2,-1 -3,-2 0,-1 -1,-2 -2,-2 -1,0 -1,-1 -2,-1 0,-1 -1,-3 0,-4 0,0 0,-1 0,-1 -1,-1 -2,-2 -2,-2 -2,0 -4,1 -6,1 -1,0 -2,1 -2,1 0,1 0,2 1,2 0,0 0,0 1,0 0,0 0,0 1,0 0,0 1,0 2,-1 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,0 0,0 -1,1 -2,1 -3,1 -1,1 -1,1 -3,2 0,0 -1,0 -1,0 -1,0 -2,1 -2,2 0,1 -1,2 -1,4 0,0 0,1 0,1 -1,0 -1,0 -1,0 -1,0 -1,0 0,-1 0,0 0,-1 0,-2 -1,-1 -1,-1 -2,-2 0,-1 0,-2 -1,-2 0,-1 -1,-1 -1,-1 -1,0 -1,0 -2,0 -4,1 -8,0 -11,-2 0,0 0,-1 0,-1 1,-1 1,-2 2,-2 0,0 1,0 1,0 2,0 3,-1 2,-2 0,-1 0,-2 0,-3 -1,-1 -2,-1 -3,-1 -2,0 -3,-1 -4,-1 -1,-2 -3,-3 -4,-4 -1,-1 -2,-2 -2,-3 -1,-2 -2,-3 -3,-3 -2,-1 -3,-1 -4,1 0,0 0,0 -1,1 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 1,-1 2,-3 2,-5 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 -1,1 -1,1 -2,2 -3,3 0,0 -1,0 -1,0 0,0 0,-1 0,-1 -1,-1 -1,-2 0,-3 0,-2 0,-4 0,-6 0,0 0,-1 0,-1 0,0 -1,0 -1,0 -1,0 -1,1 -1,2 0,0 0,1 -1,1 -1,1 -1,1 -2,2 -1,0 -1,0 -2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,1 -1,1 -1,0 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 -2,-1 -3,0 -2,1 -4,1 -6,1 -1,0 -2,0 -2,1 -2,1 -3,1 -4,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 -1,0 -2,0 -1,1 -2,1 -3,1 -1,0 -1,1 -2,2 0,1 0,1 0,1 -1,0 -2,-1 -2,-1 -1,-1 -1,-2 -2,-3 0,0 0,-1 -1,-2 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -3,-2 -4,-2 -1,-2 -3,-3 -4,-5 0,0 0,0 0,-1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,0 -2,-1 -3,-2 -2,-1 -3,-2 -4,-2 -1,-1 -2,-1 -2,-2 -1,0 -2,-1 -2,-2 0,-1 -1,-2 -2,-1 -1,0 -2,0 -2,0 -1,0 -1,0 -1,0 -1,-1 -1,-3 -2,-4 0,0 0,0 1,0 0,-1 0,-1 0,-2 0,0 -1,0 -1,0 -1,-1 -1,-1 -2,-1 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-2 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 -1,0 0,1 0,1 -1,1 0,-1 0,-1 0,-1 0,0 0,0 0,0 1,0 1,0 2,0 0,0 0,-1 0,-1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 1,0 1,0 0,0 0,0 0,0 -1,-1 -1,-2 -2,-3 0,0 -1,0 -1,0 -1,0 -2,0 -3,1 -1,1 -3,1 -4,1 -1,-1 -2,-1 -2,-1 -2,-1 -3,0 -4,1 0,0 0,1 0,1 -1,0 -1,1 -1,1 -1,0 -2,0 -3,0 -2,0 -4,0 -5,1 -2,2 -5,3 -7,5 0,0 0,0 -1,1 -2,1 -5,3 -8,1 0,0 -1,0 -1,0 -1,-1 -2,-1 -3,0 0,1 -1,2 -1,3 -2,1 -2,2 -1,3 0,1 0,2 1,3 0,2 1,5 -1,7 0,1 0,2 1,2 1,1 1,1 2,1 0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,1 0,2 0,3 0,0 0,0 0,1 1,0 1,0 1,0 0,0 0,0 0,-1 0,1 0,1 0,1 1,-1 1,-1 1,-1 0,0 0,0 0,0l-1 0 1 0c0,0 0,0 0,0 1,0 2,0 3,0 0,0 1,1 0,1 0,0 0,1 0,1 -1,-1 -2,-1 -4,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -2,0 -3,1 0,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2 0,0 0,-1 0,-1 0,-1 1,-1 1,-1 1,-1 0,-2 -1,-2 -1,-1 -2,0 -4,0 0,0 -1,0 -1,1 -1,0 -2,0 -2,0 -1,0 -2,0 -2,1 -2,0 -4,1 -6,2 0,0 -1,1 0,2 0,0 1,1 2,2 0,0 0,1 -1,1 0,0 -1,0 -1,0 0,2 -1,3 -1,4 0,1 0,1 0,2 1,1 2,2 4,2 2,0 3,0 5,1 0,0 1,1 2,0 1,0 3,-1 4,-2 0,0 1,0 1,1 0,0 0,0 1,0 0,0 0,0 -1,0 0,0 0,0 0,1 -1,0 -1,0 -1,1 0,0 0,1 0,1 -1,1 -1,2 -2,4 0,1 -2,2 -3,2 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,0 -1,-1 -1,-1 -1,0 -1,1 -1,1 0,2 -2,3 -3,3 0,0 -1,0 -1,0 0,-1 0,-1 0,-1 -1,-1 -2,-1 -3,-1 -1,1 -3,2 -3,4 0,0 -1,0 -1,0 -2,2 -4,4 -6,6 -2,1 -2,2 -2,4 0,1 1,1 1,2 0,1 0,1 -1,2 -1,1 -1,2 0,4 0,1 0,2 0,3 0,0 1,1 1,1 1,0 1,0 2,0 1,0 2,0 3,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,0 1,1 0,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,1 0,2 0,1 -1,2 -1,2 -1,1 -1,1 -1,2 1,1 0,1 0,2 0,0 0,0 0,1 -1,0 -1,0 0,1 1,0 2,0 3,-1 0,0 0,0 0,0 1,1 3,1 3,3 0,0 1,0 1,0 0,0 0,0 0,0 1,-1 1,-1 2,-1 1,1 1,1 1,1 1,0 1,-1 2,-1 0,0 0,0 0,1 0,0 0,0 0,0 -1,1 -2,2 -3,3 -1,3 -3,6 -6,7 -1,1 -2,1 -3,2 -1,1 -3,2 -4,2 -1,1 -2,2 -3,2 0,1 -1,1 -1,1 -2,-1 -3,0 -4,0 -1,1 -2,2 -3,2 -1,2 -2,2 -4,2 -1,0 -2,1 -2,1 -2,0 -3,1 -3,2 0,0 0,0 0,0 0,1 0,1 0,1 1,0 1,0 2,0 0,-1 1,0 2,-1 1,0 1,0 2,0 0,-1 2,-2 3,-2 2,0 3,-1 4,-2 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,1 1,2 0,0 0,0 0,-1 1,0 1,0 1,-1 1,0 2,0 3,0 1,0 1,0 2,0 1,-1 1,-1 2,-1 1,-1 3,-1 3,-3 1,0 2,-1 3,-1 0,0 1,0 1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,-1 1,-1 1,-1 1,0 2,-1 3,-1 0,-1 1,-1 2,-2 0,-1 0,-1 0,-1 2,-1 4,-2 6,-3 2,0 3,-1 4,-2 0,-1 1,-1 2,-2 0,0 0,0 1,0 1,-1 1,-2 1,-2 -1,-1 -1,-1 -1,-2 0,0 0,-1 0,-1 1,-1 2,-1 3,-1 1,0 1,0 2,-1 1,0 2,-1 2,-2 0,-1 1,-1 2,-1 0,0 1,0 1,-1 1,-2 4,-3 6,-4 1,-1 2,0 2,1 0,0 0,1 0,1 0,0 0,1 -1,1 -1,-1 -3,-1 -4,0 -1,0 -1,0 -1,1 -1,2 -2,3 -4,5 0,0 0,1 0,1 1,1 1,1 0,1 0,0 -1,1 -2,1 0,0 0,1 0,1 0,1 0,1 1,1 0,0 1,0 2,-1 1,0 2,-1 4,-1 0,0 1,0 1,-1 1,0 2,-1 4,-1 0,0 1,0 1,0 1,0 1,-1 2,-1 0,-1 0,-1 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1l0 0c0,0 -1,0 -1,1 -1,0 -1,1 0,1 0,0 0,0 1,0 1,-1 1,-2 2,-3 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 -1,-2 0,0 0,-1 0,-1 -1,-1 -1,-2 0,-2 1,-1 1,-1 1,0 0,0 1,1 2,1 0,0 1,0 2,0 0,0 0,0 0,0l0 -1 0 1c0,0 0,0 0,0 0,0 0,0 0,1 0,1 1,3 2,3 1,1 2,1 2,2 1,1 1,1 1,1 0,1 1,1 1,1 1,0 1,0 2,0 1,0 2,1 3,2 0,0 1,0 1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,1 1,1 1,1 1,1 2,2 3,1 0,0 0,0 1,1 0,0 0,0 0,0 -1,1 -1,2 0,3 0,0 1,1 1,1 1,0 1,0 1,1 0,1 0,1 0,2 0,1 1,2 2,3 0,1 1,1 2,1 0,0 1,-1 1,-1 0,-1 -1,-1 -1,-1 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,1 0,1 0,2 0,1 1,1 2,2 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,-1 -1,-1 -1,-1 -1,0 -2,0 -2,1 0,1 0,2 0,2 0,1 0,2 0,3l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,1 1,2 -1,1 -1,3 -1,4 0,0 0,0 0,0 1,0 1,0 1,0 1,-1 1,-2 1,-2 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,0 1,-1 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 1,0 1,-1 2,-3 2,-5 0,0 1,0 1,0 0,0 0,0 0,1 0,0 0,0 0,1 0,1 0,1 -1,2 0,1 0,2 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 0,0 0,0 0,0l1 0 -1 0c0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 0,-1 -1,-1 -2,-1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 -1,1 0,1 1,2 0,3 0,0 0,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 0,1 0,1 1,1 1,2 1,2 0,1 -1,1 -1,2 0,0 0,1 0,1 1,1 1,2 1,3 0,0 1,0 1,0 0,0 1,0 1,0 0,-1 1,-2 1,-4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,1 1,2 0,0 1,0 1,0 0,0 1,0 0,1 0,1 -1,1 -1,3 0,0 -1,0 -1,0 0,0 -1,1 0,1 1,1 1,2 0,2 -1,0 -1,0 -1,1 0,1 1,1 2,1 1,0 2,-1 3,-1 0,0 0,0 0,0 0,1 0,1 0,1 -1,1 -1,1 -1,1 -1,1 -1,2 -1,3 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,2 2,3 1,0 1,1 0,1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 1,0 1,0 0,0 0,0 0,0l0 0c0,1 0,1 0,2 0,0 0,1 -1,1 0,1 0,1 0,1l1 2c1,1 2,1 2,2 1,0 2,1 2,1 1,0 2,1 2,1 1,0 1,1 1,1 -1,1 -1,2 0,2 0,1 0,1 0,1l0 0 0 0c0,0 0,0 0,0l0 0c0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 0,-1 -1,-1 -1,-2 0,-1 -1,-2 -3,-3 -1,0 -2,-1 -2,-1 -1,-1 -1,-1 -2,-2 0,0 -1,0 -1,0 0,0 -1,0 -1,1 0,1 0,1 0,2 0,1 1,1 1,1 0,1 1,2 2,3 1,2 3,4 5,6 0,1 0,1 1,1l0 0c0,0 0,0 0,0 -1,1 -2,1 -2,3 0,1 0,3 0,5 0,2 0,4 -1,6 -1,3 -2,5 -3,7 0,2 -1,4 -2,6 -1,2 -2,4 -2,6 0,0 0,0 1,1 0,2 -1,4 -2,6 0,1 -1,1 0,2 1,1 1,3 0,4 0,1 0,2 0,3 0,0 0,0 0,1 1,1 1,2 2,3 0,0 1,1 1,1 1,0 1,0 0,1 0,0 0,1 0,1 0,1 0,1 0,1 0,1 1,3 0,4 0,0 1,1 1,1 0,2 1,3 2,5 0,0 0,1 0,2 0,1 0,1 1,1 3,1 4,2 6,4 2,1 3,2 3,4 0,1 1,3 1,4 1,3 2,5 2,8 0,1 1,1 1,2 2,1 3,2 3,4 1,1 1,1 0,2 0,1 -1,1 -1,1 0,0 0,0 -1,0 0,0 0,1 0,1 1,1 2,2 3,3 2,1 3,2 4,3 1,1 1,1 1,2 0,1 0,1 0,2 -1,1 0,2 0,2 2,2 5,4 6,7 0,0 1,0 2,0 0,-1 0,-2 0,-2 0,-1 -1,-2 -1,-3 -1,0 -2,-3 -3,-4 0,-1 0,-1 0,-2 -1,-1 -1,-2 -1,-3 0,-1 -1,-2 -2,-3 0,-2 -1,-4 -2,-5 -1,-2 -2,-4 -3,-6 -1,0 -1,0 -1,-1 0,-2 0,-4 0,-6 0,0 0,0 1,0 0,0 1,0 2,1 1,0 1,1 1,2 1,1 1,3 2,5 1,2 2,5 4,7 0,0 1,1 1,1 0,2 1,2 2,3 0,1 1,1 2,2 0,0 0,0 0,1 0,0 -1,0 -1,1 0,0 0,1 1,1 0,1 1,2 2,2 1,1 1,1 2,2 0,1 0,1 0,2 5,4 6,6 7,11 0,1 0,1 0,1 0,1 0,1 -1,2 -1,1 0,2 1,4 0,1 1,2 2,2 1,1 2,1 3,2 1,1 2,2 3,2 1,0 1,0 2,1 0,0 1,0 1,0 2,2 4,3 6,4 1,0 3,1 4,1 1,1 2,1 4,2 4,1 4,1 9,-1 1,0 2,0 3,1 2,2 5,3 7,6 0,1 1,1 3,1 2,1 3,1 5,2 2,0 4,1 6,1 0,0 1,0 1,1 0,1 1,2 2,3 1,1 2,2 3,3 0,0 1,1 0,2 0,1 1,2 2,2 0,1 1,1 1,1 1,0 1,0 2,0 0,1 2,2 2,3 0,1 1,2 3,2 0,0 0,0 1,0 1,-1 2,0 3,1 1,1 2,1 3,2 1,1 1,0 2,0 1,-1 1,-1 1,-2 0,0 -1,-1 0,-1 1,-1 1,-2 2,-3 0,0 1,0 1,0 1,1 2,2 2,3 1,1 1,2 1,3 1,1 1,2 2,3 1,0 1,1 1,1 0,2 0,4 0,5 -1,1 -1,2 0,3 0,0 0,1 0,1 -1,1 -2,3 -3,3 -2,1 -2,2 -3,4 0,1 -1,1 -1,2 -1,0 -2,0 -3,1 0,0 0,0 0,0 -1,4 -1,4 -2,6 0,0 0,1 0,1 -1,1 -1,3 -1,4 1,1 2,2 3,2 0,0 0,0 0,0 0,0 0,0 0,-1 1,1 1,1 1,1 0,1 -1,1 -1,2 -1,0 -2,1 -2,1 -2,1 -2,2 -2,4 0,1 1,1 1,2 0,0 0,1 0,1 -1,1 0,2 0,2 1,0 2,1 3,1 1,1 2,2 2,3 0,1 1,1 2,2 0,0 0,1 1,1 0,2 1,3 2,5 1,2 2,4 3,6 1,2 3,4 4,7 0,0 0,0 0,1 0,1 1,2 1,3 3,2 6,4 9,6 0,0 1,0 2,1 1,0 3,1 4,2 1,2 3,3 5,5 0,0 0,0 0,1 1,1 1,1 1,2 0,1 0,3 0,4 0,1 0,1 0,2 1,2 1,5 0,8 0,0 0,1 0,1 1,4 0,8 0,12 0,1 0,3 0,4 0,1 0,2 -1,4 0,0 0,1 0,2 1,1 1,3 0,4 0,1 0,2 0,3 1,2 0,4 1,5 0,1 0,2 0,3 0,0 0,1 0,2 0,0 0,1 0,2 0,1 0,2 -1,2 0,4 -1,7 -2,10 0,0 0,1 0,1 -1,1 -1,2 -1,3 1,1 1,3 2,4 1,2 1,3 0,4 0,1 0,2 0,3 0,0 0,1 0,2 0,1 0,2 1,3 0,0 0,1 1,1 -2,0 -2,0 -2,1 -1,1 -1,1 -1,1 1,2 1,3 1,4 0,1 1,1 1,1 1,-1 1,-1 1,-2 0,-1 0,-2 0,-3 1,-1 0,-1 0,-2 0,0 1,0 2,0 0,-1 0,0 0,0 0,1 1,1 1,1 0,2 -1,4 -1,6 0,1 0,3 0,5 0,0 0,1 0,1 1,2 1,4 0,5 0,0 0,1 -1,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 1,2 0,0 0,0 -1,0 1,0 1,0 1,0 -2,0 -3,0 -3,1 0,2 -1,3 -2,4 0,0 1,1 1,1 0,0 0,0 0,0 1,0 1,-1 1,-1 1,0 2,1 3,1 0,0 1,1 1,1 -1,1 -1,2 -1,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,1 -1,1 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 -2,1 0,1 -1,1 0,1 0,1 0,2 0,2 0,0 1,1 1,1 0,1 -1,1 0,2 0,0 0,0 0,0l0 0 1 0 -1 0c0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,1 1,2 1,0 1,1 2,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 0,1 0,1 0,1 1,1 1,1 0,0 0,0 0,0l0 0c0,1 1,2 0,4 0,0 0,1 1,1 1,0 1,-1 1,-1 0,-1 0,-2 0,-3 0,0 0,0 0,0l0 -1 1 1c0,0 -1,0 -1,0 1,0 1,1 1,1 0,1 0,1 1,2 0,0 0,0 0,1 0,0 -1,1 -1,1 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 0,1 0,1 0,1 1,0 1,0 2,0 1,0 1,1 2,2 0,1 0,2 1,2 0,1 1,1 2,2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 -1,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -3,-1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 2,1 3,2 5,4 0,0 1,1 2,1 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm423 -561l-1 0 1 0 0 0zm-445 -14l0 0 -1 0 1 0zm52 -2c-1,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,1 0,1 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 1,-1 0,0 0,0 0,0zm470 -1c0,0 0,0 1,0 0,0 -1,0 -1,0zm29 -9c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-745 87c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm663 -93l0 0 0 0 0 0 0 0zm-170 -2c0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -1,-1 -3,-1 -4,-2 -1,0 -1,0 -2,1 -1,0 -1,0 -1,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -1,0 -1,1 -1,1 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -2,-1 -3,-2 0,0 0,0 -1,-1 0,0 -1,1 -1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,1 -1,2 -1,2 0,1 0,1 0,2 1,2 1,2 3,3 1,0 2,-1 2,-1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 -1,1 0,0 0,1 0,1 1,1 2,1 3,2 0,0 1,0 2,0 1,0 2,0 2,1 1,1 2,1 3,0 1,-1 1,-1 2,-1 1,0 2,-1 2,-2 0,-1 1,-2 1,-2 1,-2 1,-3 1,-5 0,0 0,0 0,1 0,-1 0,-1 0,-1l0 0c1,0 1,0 1,0 -1,0 -1,0 -1,0l0 0zm-293 -1l0 1c0,0 0,0 0,0 -1,-1 -2,-1 -4,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 2,-1 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -2,0 -2,0 -1,0 -1,1 0,1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,2 0,1 0,2 0,3 0,0 0,0 -1,0 0,0 0,0 0,0 0,-1 -1,-2 -1,-3 0,-1 -1,-1 -1,-1 0,0 0,0 -1,1 0,1 -1,2 -1,3 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,0 -1,-1 -1,-2 1,0 1,-1 1,-1 -1,-1 -1,-2 -1,-3 0,0 0,-1 0,-1 0,0 0,-1 0,-1 -1,0 -2,-1 -2,0 0,0 0,1 -1,1 0,1 0,2 0,3 -1,0 -1,1 -1,1 1,1 1,2 1,4 -1,0 0,0 0,0 0,0 1,1 1,1 -1,1 0,1 1,2 1,0 3,0 4,0 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -2,0 0,1 -1,1 -1,2 0,0 0,1 0,1 0,1 0,2 1,2 1,0 2,0 3,1 1,0 2,-1 3,-2 0,0 0,0 0,-1 0,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,2 1,2 2,1 1,0 1,0 1,0 0,0 0,0 0,0l0 0c0,1 -1,2 -2,3 -1,1 -1,2 0,3 1,0 2,1 3,2 0,0 0,0 0,0 1,1 2,1 2,0 1,-1 1,-2 2,-3 0,-1 0,-1 0,-2 0,-1 -1,-2 -1,-3 -1,0 -2,0 -2,0 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -2,-1 -3,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 1,-3 0,0 1,-1 2,-2 0,0 0,0 0,0 0,-1 1,-2 2,-4 0,0 0,0 0,0 0,-1 -1,-1 -1,-2 0,0 -1,-1 -1,0 -1,0 -2,-1 -2,-1 0,0 0,0 0,0l0 -1zm400 426l0 0c0,0 0,0 0,0 0,1 0,1 0,1 -1,1 -2,1 -2,2 0,1 -1,2 -2,3 -1,0 -2,2 -3,2 -1,1 -2,1 -4,1 0,0 0,0 0,0 -1,1 -2,1 -3,2 -1,1 -1,1 -2,2 -1,2 -1,4 0,5 0,1 0,1 1,2 0,2 0,3 -1,4 -1,2 -2,3 -3,4 -1,2 -1,4 -1,6 1,1 1,2 1,3 0,1 0,1 0,2 0,1 0,1 1,2 1,1 2,2 4,3 1,0 2,-1 3,-1 0,0 1,0 2,0 1,0 2,-1 3,-3 0,-1 1,-2 1,-3 1,-2 2,-5 3,-7 1,-3 2,-7 4,-11 0,-1 1,-2 1,-3 0,-1 0,-3 1,-4 0,-1 0,-2 2,-3 0,0 0,-1 0,-2 0,-1 0,-2 0,-3 0,-3 -1,-6 -3,-8 0,0 0,0 0,0 -1,1 -1,2 -2,3 0,0 0,1 -1,1 0,0 0,0 0,0l0 0zm257 -8c0,0 0,0 0,0 1,0 1,0 1,0 2,0 3,-1 4,-2 2,-1 3,-2 5,-2 0,0 1,-1 2,-1 0,0 1,0 1,-1 0,0 -1,-1 -2,-1 -2,0 -4,0 -6,2 0,0 -1,0 -2,1 0,0 -1,0 -1,1 -1,1 -2,2 -2,3 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 1,1 1,1 1,1 0,-1 0,-1 0,-1 0,0 0,0 0,0 1,0 1,-1 1,-1zm117 -9l0 0c0,0 0,0 0,0 0,1 0,1 1,2 0,0 0,0 0,-1 1,0 1,0 1,0 -1,-1 -1,-1 -2,-1 0,0 0,0 0,0l0 0zm-418 -422l0 0 0 0 0 0zm416 418c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 2,1 0,1 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-1 -2,-1 0,0 0,0 0,0 0,0 0,0 0,0zm-79 -236c0,-1 0,-1 0,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,1 0,1zm-41 164c0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,1 0,1zm0 -1c0,0 0,0 0,0 0,0 0,0 0,0 1,1 2,1 3,0l0 0 0 0c0,0 0,0 0,0l0 0c0,0 1,1 1,1 0,1 0,2 1,2 1,0 1,0 0,1 -1,1 -1,1 1,2 0,0 0,0 1,0 0,0 0,0 0,0 0,-1 1,-2 1,-3 0,0 -1,-1 -1,-1 0,0 -1,-1 -1,-2 0,-1 -1,-1 -2,-2 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,-1 1,-1 1,-1 0,-1 -1,0 -1,-1 -1,-1 0,-1 0,-2 0,-2 1,-1 1,-1 1,-1 1,-2 2,-4 1,-5 -1,-1 -1,-2 -1,-4 0,0 0,0 -1,0 0,0 -1,0 -2,-1 -2,0 -2,1 -3,2 0,0 0,1 0,1 0,2 -1,3 -1,5 0,1 0,1 0,1 -1,0 -1,1 -1,1 1,1 1,3 1,4 1,1 1,2 2,2 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,1 1,2 2,3 0,0 1,0 1,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 0,0 0,1 0,1 0,1 1,2 1,4 1,0 2,0 2,-1 1,0 1,-1 0,-2 0,-1 -1,-1 -1,-2 0,0 0,0 0,0l0 0c0,0 1,0 2,-1 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0zm101 59l0 0c0,0 0,0 0,0 1,1 2,1 3,1 0,0 0,1 0,1 0,0 0,0 1,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 -1,0 -1,-1 0,0 0,0 0,0 0,-1 -1,-1 -3,-1 0,0 0,0 0,0l0 0zm-659 -410c0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 -2,3 -3,4 0,1 0,2 1,2 1,1 2,1 3,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,1 -1,1 0,1 -1,1 -1,2 -1,1 -2,2 -2,3 -1,0 -1,0 -2,0 -2,-1 -3,-1 -5,-1 -1,0 -2,1 -2,1 -1,1 -2,1 -3,1 -2,0 -3,1 -5,1 -2,0 -3,1 -4,3 0,1 0,1 0,2 1,1 2,3 3,4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,1 0,1 1,2 0,1 1,1 2,1 0,0 1,0 2,0 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 -2,-1 -4,-1 -5,0 -1,0 -1,0 -2,0 -1,0 -2,0 -3,0 -1,1 -1,3 0,3 1,1 1,2 2,3 1,0 1,0 0,1 0,0 -1,0 -1,0 0,1 -1,1 0,2 0,1 1,3 3,4 1,0 1,0 2,-1 0,-1 1,-1 1,0 1,0 1,0 2,1 0,0 0,0 0,0 2,-1 4,0 5,-1 1,0 1,0 1,0 2,1 3,2 5,3 1,1 2,2 3,2 1,1 1,1 1,2 0,0 1,0 1,1 -1,1 -1,1 -1,2 -1,1 0,2 0,3 1,0 1,1 1,1 0,1 0,2 -1,2 0,0 0,1 0,1 1,0 1,0 1,0 1,0 1,1 1,1 0,0 0,1 -1,1 0,0 0,1 0,2 1,0 1,0 1,0 0,1 -1,1 -1,1 0,1 1,1 1,2 0,1 0,2 0,2 0,1 0,2 0,3 -1,0 0,0 0,0 0,1 0,1 0,1 1,1 1,1 0,1 -1,0 -1,0 -2,1 0,0 0,0 0,1 1,0 2,0 1,0 -1,1 -1,2 -2,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0l0 0c0,1 0,2 -1,3 0,0 0,1 0,1 2,2 3,2 4,1 1,-1 1,-1 1,-1 1,-1 1,-1 2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,2 0,0 0,0 0,1 1,0 1,0 1,0 1,0 1,1 1,2 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 1,0 2,0 2,1 0,0 0,0 0,0 0,1 -1,1 -1,0 0,0 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,-1 -1,0 -2,0 -3,0 -1,0 -1,-1 -2,-1 -1,0 -2,1 -1,2 0,0 0,0 0,0 0,1 0,1 0,1 0,1 -1,1 -1,1 -1,0 -1,1 -1,1 0,1 -1,2 -1,2 0,2 1,3 2,4 1,0 1,0 1,0 1,1 3,1 4,0 1,-1 1,-2 1,-2 -1,-1 -1,-1 -1,-1 -1,-1 -1,-1 -1,-2 0,0 0,0 0,0l0 -1 0 1c0,0 0,0 0,0 2,1 3,2 5,2 1,0 1,0 1,1 0,0 -1,0 -1,1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 -1,-1 -1,-1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,1 1,1 0,0 0,0 0,0l0 0c0,0 0,1 -1,1 0,1 0,1 0,1 0,1 0,1 0,1 -1,0 -1,0 -1,1 -1,2 -2,2 -4,2 0,0 -1,0 -1,0 0,0 0,0 0,0l-1 0c0,0 1,0 1,0 0,1 0,2 0,3 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 -1,0 -1,0 -1,-1 -1,-1 -1,0 0,1 0,1 -1,1 0,1 -1,1 -1,2 0,1 -1,2 -1,2 0,1 0,1 0,2 0,0 0,1 0,1 0,1 1,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 -2,2 0,0 -1,1 0,2 1,1 1,1 1,2 0,1 0,1 0,2 1,2 1,3 1,5 0,1 0,1 0,1 0,1 0,1 1,1 1,0 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 -1,1 -2,2 -1,1 -1,2 -1,2 1,2 1,3 2,4l0 0 0 0c0,0 0,0 0,0l0 0c0,1 0,1 1,1 0,1 0,1 0,2 0,0 0,1 0,1 1,1 1,2 1,3 1,1 0,2 0,2 0,0 0,1 0,1 1,1 1,1 2,2 1,0 2,1 2,2 0,0 0,0 0,0 1,0 2,0 3,0 0,0 0,0 1,-1 1,0 1,0 1,1 0,1 1,2 2,3 0,0 0,1 0,1 0,0 1,1 1,1 1,0 2,0 3,0 1,0 1,0 2,-1 1,-1 1,-3 2,-5 0,-1 0,-2 1,-3 1,-1 1,-1 1,-2 0,-1 1,-2 1,-3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,-1 2,-1 0,-2 1,-3 2,-4 1,-1 2,-2 1,-4 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,-1 0,0 0,0 -1,-1 0,-1 0,-1 1,-1 1,0 2,0 2,-1 0,-1 1,-1 2,-1 2,0 3,-1 4,0 1,0 1,-1 2,-1 0,0 0,-1 0,-1 3,0 4,-1 6,-2 0,0 1,0 1,0 1,-1 2,-1 3,-2 0,-2 2,-3 3,-5 1,-1 3,-2 4,-3 1,-1 2,0 3,0 0,0 1,-1 1,-1 1,0 1,0 1,0 1,0 2,0 3,0 1,-1 3,-2 4,-2 3,0 5,-1 7,-3 2,-2 5,-3 8,-5 0,-1 0,-1 0,-1 0,0 0,0 0,0 -2,-1 -4,-1 -5,-2 -1,0 -2,0 -4,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,-1 0,-1 1,0 2,0 2,0 1,-1 2,-2 1,-2 0,-1 0,-2 0,-3 0,0 1,-1 1,-1 0,0 0,1 1,1 0,1 1,3 2,4 0,1 1,2 2,2 1,0 1,0 2,0 1,0 2,0 2,-2 0,-1 0,-2 0,-3 0,-2 -1,-3 -1,-4 0,0 0,-1 0,-1 -1,-2 -2,-3 -4,-4 0,0 -1,-1 -1,-1 0,0 -1,-1 -1,-1 0,-1 0,-2 0,-3 0,0 0,0 0,-1 0,0 1,0 1,1 0,0 0,0 0,1 0,1 1,2 2,3 1,1 1,1 2,2 1,0 1,0 1,-1 0,0 0,-1 1,-2 0,0 0,-1 0,-1 1,-1 1,-2 0,-2 -1,-1 -2,-1 -3,-2 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,-1 -3,-1 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,-1 1,0 0,0 0,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,1 1,0 2,0 3,0 1,-1 2,-1 3,-1 0,0 1,-1 1,-1 0,-1 0,-1 0,-2 0,0 0,-1 0,-1 -2,0 -2,-1 -3,-1 -1,0 -1,-1 -1,-1 1,0 1,0 1,0 1,1 3,1 4,0 0,0 1,0 1,0 2,0 2,-3 1,-3 0,-1 -1,-2 -1,-2 0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 0,0 0,0 1,0 0,0 1,0 1,0 0,-1 1,-1 1,-2 0,-1 0,-2 0,-3 0,0 0,-1 -1,-1 -1,-1 0,-1 0,-2 1,0 0,-1 0,-1 0,0 -1,0 -2,-1l0 0c0,0 0,0 0,0 1,-1 1,-1 0,-2l0 0 0 0 0 2c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-2 0,1 1,1 1,1 0,0 0,0 0,0l0 0c0,0 0,0 -1,-1l0 0c1,0 1,-1 2,-2 0,0 1,0 2,0 0,0 0,0 0,1 1,0 2,1 2,3 0,1 0,2 0,3 0,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 0,-3 1,-4 0,-1 1,-3 1,-4 0,0 -1,-1 -2,-1 0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 2,-1 2,-1 1,-2 0,0 -1,-1 -1,-1 -1,-1 -1,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,0 2,-1 1,-2 2,-3 2,-5 0,-3 1,-6 4,-9 0,-1 1,-2 2,-3 0,0 0,-1 0,-1 -1,-1 -1,-1 0,-1 2,-1 2,-1 3,-2 0,-1 0,-2 0,-2 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 0,0 -1,0 0,-1 0,0 0,0 0,0 1,0 1,0 2,0 1,0 2,0 3,0 0,0 1,-1 1,-1 1,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 1,-1 1,-1 1,1 2,0 3,0 0,-1 1,-1 1,-1 2,-2 2,-3 0,-5 0,0 0,0 0,0 -2,-2 -4,-3 -6,-3 -2,0 -3,0 -4,1 -1,0 -1,0 -1,0 0,1 0,1 0,1 0,1 -1,1 -2,1 0,0 -1,0 -1,-1 0,0 -1,0 -1,0 -1,3 -4,4 -6,5 -1,0 -3,0 -4,1 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,1 -1,1l-1 0 1 0c0,0 0,-1 0,-1 1,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,-1 1,-1 1,-1 1,-2 3,-2 1,-1 2,-2 3,-3 0,-1 0,-1 0,-2 2,-3 0,-4 -2,-3 0,0 -1,0 -1,0 0,0 0,0 0,0 -1,1 -1,2 -1,2 0,1 -1,2 -2,2 0,0 0,0 0,0 -2,-1 -3,-1 -5,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 2,-1 2,-1 1,0 1,-1 2,-2 0,0 0,-1 -1,-1 -1,0 -2,0 -3,-1 -4,0 -5,0 -9,1 -1,1 -1,1 -2,1 -1,0 -1,1 -2,1 0,0 -1,0 -1,-1 0,0 0,0 0,0 1,0 1,-1 2,-1 1,0 3,-1 4,-1 3,-2 5,-2 8,-1 1,1 3,1 5,0 2,0 3,0 5,0 2,0 3,-2 5,-3 0,0 0,-2 0,-2 -1,-1 -2,-2 -3,-2 -2,-2 -4,-2 -6,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,-1 0,-1 1,0 1,0 2,0 1,-1 1,-2 0,-3 0,0 -1,-1 -1,-1 -3,1 -5,1 -8,0 -1,0 -1,0 -2,0 -1,0 -2,0 -3,0 -1,1 -3,1 -4,1 -1,-1 -2,0 -3,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 1,0 2,0 3,0 2,-1 4,-1 6,-1 2,0 4,0 5,1 2,0 3,0 5,-1 0,0 0,-1 0,-1 -1,-2 -2,-2 -4,-3 -3,-1 -6,-2 -9,-3 -1,0 -2,0 -4,0 -1,-1 -3,0 -4,0 -1,1 -2,2 -3,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 0,1 0,1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,0 -2,-1 -2,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 0,0 -1,0 -1,0 -1,0 -2,-1 -3,-1 -1,-1 -2,-1 -2,0 -1,0 -2,1 -3,0 0,0 0,1 0,1 -1,1 -1,2 -1,3 0,1 0,1 0,1 -1,1 -1,1 -2,2 0,0 0,0 0,0 -1,-1 -2,-1 -3,-1 0,0 -1,0 -1,1 0,0 0,0 0,1 0,1 1,3 1,4 0,2 0,4 1,6 1,0 0,1 0,0 -1,0 -2,1 -2,0 0,-1 -1,-2 -1,-2 -1,0 0,0 0,0 1,-1 1,-1 0,-2 -1,0 -1,-1 -1,-2 -1,-1 -2,-2 -2,-3 0,-1 -1,-2 -2,-2 -1,0 -1,0 -2,0 0,1 0,1 0,1 0,2 0,3 0,5 0,1 0,1 -1,2 0,1 -1,0 -2,0 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,-1 -1,-1 0,-1 0,-2 0,-1 0,-2 0,-4 0,0 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 -1,0 0,1 0,1 0,2 0,1 0,1 0,2 0,1 -1,1 -1,2 0,0 0,0 -1,0 0,0 1,0 1,0 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,-1 0,-1 1,-1 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 1,-1 1,-2 0,-1 1,-2 0,-3 0,-1 -1,-1 -1,-1 -1,0 -1,0 -2,1 -1,0 -3,0 -4,0 -2,1 -4,1 -6,1 0,0 -1,1 -1,1 0,1 0,1 0,2 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -1,-1 -2,0 -2,0 -1,0 -1,1 -2,1 0,1 0,1 0,1 0,1 0,2 0,3 -1,1 -1,1 -2,2 0,0 0,0 0,0 -1,1 -1,1 -2,1 -1,-1 -2,-1 -3,-1 -1,0 -2,1 -3,2 -1,1 -2,1 -4,2 0,0 0,-1 0,-1 0,0 0,0 0,0zm581 403c0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 -1,-2 0,0 0,0 1,-1 0,0 0,0 0,0 1,0 1,0 1,-1 0,0 0,-1 0,-1 1,-1 1,-1 1,-2 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,0 -1,0 0,-1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 -1,0 -2,1 -3,2 -3,5 0,1 0,1 0,2 1,1 1,2 1,3l0 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,1 0,0 0,0 1,0 0,0 0,0 1,-1 0,0 0,0 0,0l0 0c0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1zm-111 -13l0 1 0 -1 0 0zm102 -2l0 0 0 0 0 0zm27 -201c0,0 -1,0 -1,0 0,0 0,0 1,0zm-1 0c0,0 0,0 0,0 0,0 0,-1 0,-1l0 0 0 0c0,1 0,1 0,1 0,0 0,0 0,0zm-947 -46c0,0 0,0 0,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0zm947 45c0,0 0,0 -1,0 0,0 0,0 1,0zm-451 73l0 0 0 0 0 0zm-217 77l0 0 0 0 0 0zm-36 -17c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm294 -48l0 0 0 0 0 0zm36 -18l0 0c0,0 0,0 0,0 0,0 0,0 0,0zm-226 -172c0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0l1 0c0,0 0,0 0,0l1 0 -1 0c0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0zm-50 535c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm244 -513c0,0 0,0 0,0 0,0 0,0 1,0 -1,0 -1,0 -1,0zm-64 90c0,0 -1,0 -1,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm498 374c0,0 0,0 0,0 0,1 0,1 0,1 0,0 1,-1 1,-1 -1,0 -1,0 -1,0zm86 -86c-1,0 -1,1 -1,1 0,0 1,0 1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1zm5 -11l-1 0 1 0 0 0zm-3 -4c1,0 1,0 1,0 0,0 0,-1 0,-1 0,0 -1,0 -1,1 0,0 0,0 0,0zm0 -5c0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1zm-419 -18c0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1zm269 -13c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-10 -8c0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,1 0,1 0,1zm94 -2c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-90 -1c0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,1 -1,1 -1,1zm-72 -8c0,0 -1,0 -1,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm170 -2c0,0 0,1 0,0 0,0 0,0 1,0 -1,0 -1,0 -1,0 0,0 0,0 0,0zm-156 -7c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 -1,1 0,-1 0,0 0,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0zm-525 -3c0,-1 -1,-1 -1,-1 0,1 1,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm601 -14c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0zm-24 -4c0,0 0,1 1,1 0,0 0,-1 0,-1 -1,0 -1,0 -1,0zm4 -2c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-93 -4c0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm79 -4l0 1 0 -1 0 0zm-84 -9c-1,0 0,1 0,1 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0zm-828 -218c0,0 0,0 0,1 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0zm305 213c0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm187 -172c0,1 1,1 1,1 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0zm1 0c0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,0 1,1 1,1 2,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,1 0,2 0,1 0,1 1,1 0,0 1,0 1,0 0,0 1,0 2,0 0,0 0,1 0,2 1,0 1,1 1,1 1,0 1,1 1,2 -1,2 -1,2 -3,2 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,2 1,3 0,1 0,1 -1,2 0,0 -1,0 -1,1 0,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,1 0,1 2,0 4,1 5,1 0,1 0,1 0,1 0,0 0,0 0,0 -2,0 -3,0 -3,1 -1,2 -2,3 -3,4 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 2,-1 2,0 2,0 3,0 4,-2 0,0 1,0 1,0 2,0 3,0 4,0 2,-1 3,-1 5,-1 2,0 3,-1 4,-2 0,0 0,-1 0,-1 0,0 -1,0 -1,-1 0,0 0,0 0,0 0,-1 1,-2 1,-3 1,-2 0,-4 -2,-4 0,0 -1,0 -2,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,-1 0,-1 -1,-1 -1,-3 -2,-4 0,-1 0,-1 -1,-2 -1,0 -2,-2 -2,-3 -1,-2 -2,-3 -4,-4 0,0 -1,0 0,-1 0,0 0,-1 0,-2 1,-1 2,-2 2,-3 0,-1 0,-2 -1,-2 0,0 -1,0 -1,0 -1,0 -2,0 -3,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 1,-1 1,-2 0,0 0,0 0,-1 0,0 0,0 -1,0 -1,0 -2,0 -3,0 0,0 -1,0 -1,1 -1,1 -1,2 -2,4 0,0 0,0 -1,0 -1,0 -1,0 -1,1 1,1 2,2 1,4 0,0 0,0 1,1 0,0 0,0 0,1 0,0 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0zm512 166c0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 1,0 -1,-1 -1,-1 -1,-1zm-299 -312c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm3 -1c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0zm-139 -4c0,0 0,1 0,1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0zm-26 208c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0zm-283 75c0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 -1,0 -1,0zm333 -50l0 -1 0 0 0 1zm-247 -237c0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 1,0 1,0 0,0 0,0 0,0zm27 56c0,-1 0,-1 0,-1 0,0 0,0 0,0l0 0c0,0 1,0 1,0 0,1 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0zm574 197c0,1 0,1 0,1 1,0 1,0 1,0 0,-1 0,-1 -1,-1zm-369 -19c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0zm-273 82c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,1 0,1 0,1zm195 -176c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-261 -91c0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,1 0,1 0,0 0,0 0,0zm0 -1c0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,-1 3,-2 0,-1 0,-2 -1,-2 0,-1 0,-1 -1,-2 0,0 -1,-1 -1,-2 0,-1 0,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 0,-1 1,-2 1,-1 2,-3 1,-4 0,-1 1,-2 1,-2 1,-2 1,-4 2,-6 0,-1 1,-1 1,-2 2,-1 4,-2 5,-3 0,-1 1,-1 1,-2 0,-1 -1,-2 -2,-2 -1,-1 -2,-1 -3,-1 -1,0 -1,0 -2,1 -1,1 -1,1 0,2 0,1 0,2 0,3 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1 0,0 -1,-1 -1,-1 -1,0 -2,0 -2,1 -1,1 -1,1 -1,2 -1,1 -1,3 -2,5 -1,1 -1,3 -2,5 0,0 0,0 0,0 0,0 0,0 0,1 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 1,-1 1,-3 1,-4 1,-2 1,-4 1,-6 0,-1 -1,-1 -1,-1 0,-1 -1,0 -1,0 -1,1 -1,2 -1,3 0,0 0,1 -1,1 -1,-1 -2,-1 -3,-1 -1,0 -1,0 -1,0 0,0 0,0 1,0 0,-1 1,-1 1,-1 1,-1 1,-1 1,-2 -1,-1 -2,-2 -2,-2 -1,-1 -2,-1 -3,-1 0,1 -1,1 -1,2 0,0 -1,0 -1,0 -1,0 -1,0 0,-1 1,-1 1,-2 2,-3 0,0 0,-1 -1,-2 0,0 0,0 -1,0l1 0c-1,0 -1,0 -1,0 1,-3 0,-5 0,-7 0,-1 0,-2 -1,-3 -1,0 -1,0 -2,0 -1,0 -2,-1 -3,-1 -1,-1 -1,-1 -2,-2 -1,-1 -2,-2 -4,-1 -1,0 -2,0 -3,0 -1,0 -2,0 -2,0 -1,0 -1,0 -1,1 -1,1 -1,2 -1,2 0,1 0,2 -1,2 -1,1 -2,3 -4,4 0,0 -1,1 -1,2 0,0 0,0 0,0 -3,2 -4,4 -6,5 -1,0 -1,1 -2,1 0,1 1,1 1,2 1,1 1,2 1,3 0,1 0,2 0,3 0,0 0,1 1,1 1,0 3,-1 4,-2 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,1 1,1 2,1 0,0 1,0 1,0 1,-1 1,-1 2,-1 0,-1 0,-2 1,-2 1,-1 2,-2 3,-2 1,0 1,-1 2,-1 0,-1 1,-1 1,-2 1,0 1,-1 2,-1 1,0 3,0 4,-1 1,0 1,0 2,0l0 0c0,0 0,0 0,0 0,0 0,1 -1,1 -1,1 -3,2 -5,2 -1,1 -2,1 -2,2 0,1 -1,1 -1,1 -1,1 -1,1 -2,1 0,1 -1,1 -1,2 0,1 0,2 0,2 0,0 0,1 0,1 1,0 1,1 2,1 1,0 2,0 3,0 0,0 0,0 0,0 1,1 0,1 0,1 -1,0 -3,0 -4,0 -1,0 -2,1 -2,1 -1,0 -1,1 -1,1 0,1 0,1 0,2 0,1 0,2 2,2 3,1 5,1 7,1 1,0 1,0 1,0 2,2 4,3 4,4 1,1 1,1 0,1 0,0 0,0 0,0 -2,0 -4,-1 -6,-2 -1,0 -1,0 -2,0 -2,-1 -4,-1 -6,-1 -1,0 -1,1 -2,2 0,1 0,2 0,3 0,2 1,3 3,4 1,0 2,1 3,1 0,0 0,1 0,1 0,1 0,1 -1,2 0,0 0,1 0,1 0,1 0,2 1,2 0,1 0,1 0,1 1,0 1,0 1,0 2,0 4,0 6,0 1,1 2,1 3,0 1,0 2,-1 2,-1 1,0 2,-1 3,0 1,0 2,-1 3,-1 1,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,1 1,0 1,1 2,1 1,0 0,2 1,2 0,0 0,0 0,0 2,1 3,1 4,2 1,0 3,0 4,-1 1,0 2,0 2,-1 0,-1 0,-2 -1,-4 0,0 0,0 0,0 0,1 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,-1 1,-1 1,-1 1,1 2,1 2,2 0,0 0,0 0,0 0,0 0,0 0,0zm606 -62c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-1 0c0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 -1,0 -1,0zm-291 -1c0,0 0,0 0,0l-1 -1 1 1c0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 -1,0 0,0 0,0 0,0l0 0zm-243 -2c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 1,0 1,-1 2,-2 1,0 2,-1 3,-1 -1,0 -1,0 -1,0 0,0 1,0 1,0 -1,1 -2,2 -3,3 -1,1 -1,2 -1,3 0,0 0,1 1,1 0,0 0,0 0,0 2,0 2,1 2,2 0,0 0,1 0,1 0,1 0,2 -1,2 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -1,-2 -1,-3 0,0 -1,-1 -1,-1 -1,0 -2,0 -3,0 0,0 0,1 0,1 -1,0 -1,1 -1,1 0,2 1,3 1,5 0,0 0,0 0,0l0 0c0,0 0,0 0,0 -1,0 -1,0 -1,0 -3,-1 -5,0 -7,1 0,0 0,0 0,0 -1,1 -1,1 -1,1 -1,1 -1,0 -1,0 -1,-1 -1,-1 -2,0 0,1 0,2 1,2 1,1 2,2 4,3 1,1 3,2 5,2 0,1 0,1 1,1 0,0 1,0 1,-1 1,0 1,0 1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 1,-1 2,0 1,1 3,1 4,1 1,0 1,0 1,0 1,0 1,1 1,2 0,0 0,0 0,0 0,1 1,1 1,1 1,0 2,0 3,-1 1,0 1,0 2,0 1,0 2,-1 3,-2 0,0 0,0 0,-1 1,-1 1,-1 0,-2 -1,0 -1,0 -1,-1 0,0 0,-1 0,-1 0,-1 1,-1 1,-1 1,-1 2,-1 3,-1 1,-1 1,-2 2,-3 0,0 0,0 0,-1 0,0 0,0 0,0 1,0 1,-1 2,-1 1,1 2,1 4,1 0,0 1,-1 0,-2 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,1 2,0 3,-1 0,0 1,-1 1,-1 1,-1 1,-1 2,-2 0,-1 0,-1 0,-2 -1,-1 -1,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,1 2,1 0,0 1,0 1,-1 0,-1 0,-1 -1,-2 0,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 1,-1 1,-1 1,1 3,1 4,1 1,0 1,-1 1,-2 0,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 2,1 3,1 4,0 2,-2 3,-4 5,-5 1,0 2,-1 3,-1 0,-1 1,-1 1,-2 2,0 4,-2 6,-2 2,-1 4,-2 6,-3 0,0 0,-1 1,-1 0,-1 -1,-1 -1,-1 -1,0 -1,-1 -2,-1 0,0 0,0 0,0l0 1 0 -1c0,0 0,0 0,0 0,0 0,-1 1,-1 2,0 4,0 6,0 2,-1 4,-2 6,-3 0,0 1,0 1,-1 0,0 1,-1 1,-1 0,-1 0,-2 0,-3 0,0 0,-1 -1,-1 -1,-1 -1,-1 -1,-2 0,-1 0,-1 0,-2 0,-1 0,-1 0,-1 -1,0 -2,-1 -3,-1 -1,0 -1,0 -2,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 1,-1 1,-2 1,0 1,0 0,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -1,0 -2,-1 -3,-1 -1,0 -1,0 -1,-1 0,-1 -1,-1 -1,-1 -2,0 -3,0 -4,-1 -1,0 -2,0 -3,1 0,0 -1,0 -1,-1 0,-1 0,-1 0,-1 -2,0 -3,-1 -5,-1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1 0,1 0,2 -1,3 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -2,-1 -3,-2 0,0 -1,0 -1,0 -1,0 -1,1 -1,2 0,0 0,1 0,1 0,0 0,0 0,0 -1,1 -1,0 -1,0 0,0 -1,-1 -1,-2 0,-1 -1,0 -2,0 0,1 0,1 -1,1 0,0 0,0 0,0 -1,0 -2,0 -2,1 1,1 0,2 -1,2 0,0 0,1 0,2 -1,0 -2,0 -2,0 -1,-2 -1,-3 -2,-4 0,0 -1,0 -1,0 -1,-1 -1,0 -1,1 0,0 -1,1 -2,1 0,0 0,0 0,0 -1,0 -1,1 -1,1 1,1 1,2 1,3 0,0 1,0 1,0l0 0 -1 0c0,0 0,0 0,0 0,0 -1,0 -1,-1 -1,0 -1,-1 -2,0 0,0 0,0 -1,-1 0,0 0,0 0,-1 -1,0 -1,0 -2,0 0,0 -1,1 -1,1 0,0 0,0 -1,0 0,0 -1,-1 -2,0 -1,0 -3,0 -4,1 0,0 0,1 -1,1 0,1 0,2 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,-1 0,-1 0,0 1,0 1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 1,2 0,1 0,1 0,1 -1,0 -1,1 -1,1 -1,1 -1,2 0,2 1,0 1,1 1,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,0 -1,1 -1,1 0,1 1,2 1,3 1,1 2,1 3,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 2,2 3,2 4,2 1,0 2,0 3,0 0,-1 0,-1 0,-1 0,0 1,0 0,1 0,0 0,0 0,0 0,0 0,1 1,1 1,1 3,1 5,1 2,0 3,-1 5,-3 0,0 0,0 1,0 0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,1 1,1 1,0 2,0 2,1 0,0 0,0 0,0l1 0 -1 0c0,0 0,0 0,0 -3,0 -5,0 -8,1 -1,1 -2,0 -4,0 0,0 -1,0 -2,0 0,0 -1,0 -1,1 0,1 0,2 0,3 0,0 -1,0 -1,0 0,0 0,0 0,0 0,-3 -2,-5 -4,-6 -1,0 -1,0 -1,0 0,-1 -1,0 -2,0 -1,1 -1,2 -2,3 0,0 0,0 0,-1 0,1 0,1 0,1 0,-1 -1,-2 0,-3 0,-1 0,-1 0,-2 0,-1 -1,-1 -2,-2 0,0 -1,-1 -2,-1 0,0 0,-1 0,-1 0,-1 0,-2 0,-3 0,-1 0,-2 1,-3 0,-2 -1,-3 -2,-4 -1,-1 -2,-1 -3,0 0,0 -1,0 -1,1 0,0 0,0 1,1 0,0 1,0 1,0 1,0 1,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -2,0 -1,0 -1,1 -2,1 -1,0 -1,1 -1,2 0,0 0,1 0,1 1,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,-1 -2,0 -1,0 -1,1 -2,0 -1,0 -1,1 -1,2 0,0 0,1 1,2 0,0 1,1 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,-1 -2,-1 -1,0 -1,0 -2,0 -1,2 -1,5 -2,7 -1,1 0,1 0,2 1,0 2,1 3,1 0,0 0,0 1,0 0,1 0,1 0,1 0,0 0,1 -1,1 0,0 0,0 0,0 -2,-1 -3,0 -4,2 0,1 0,2 -1,4 0,2 1,3 3,4 0,0 1,1 1,1 1,0 2,0 3,0 0,1 1,0 1,0 1,0 1,-1 2,-1l0 0c0,0 0,0 0,0 0,1 0,1 0,1zm633 261c0,0 0,1 1,1 0,0 0,0 0,0l0 0c0,2 1,3 1,4 1,1 2,2 3,1 0,0 0,0 0,0 1,-1 1,-1 1,-2 1,-2 1,-4 1,-6 -1,-2 -1,-4 -3,-4 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 1,0 1,0 1,0 2,0 2,-1 0,0 1,0 1,0 1,-1 2,-1 4,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,1 -1,2 -2,2 -1,0 -1,0 -1,0 -1,0 -2,1 -1,2 0,1 0,1 0,2 0,0 1,0 1,0 0,1 1,1 2,0 0,-1 0,-1 0,-2 1,0 2,0 2,0 1,0 1,0 1,0 1,0 1,-2 1,-3 -1,0 -1,-1 -1,-1 -1,-1 0,-1 0,-2 0,0 1,0 1,0 0,0 0,0 0,0 1,0 1,0 0,1 0,0 0,0 0,1 0,1 1,1 1,2 1,0 1,1 2,1 0,1 1,0 1,0 1,-2 2,-3 3,-4 0,-1 0,-1 1,-1 0,0 1,0 2,0 1,0 1,-1 2,-1 0,0 0,0 1,0 0,0 0,0 1,0 0,-1 0,-2 1,-3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 0,1 0,1 1,1 1,-1 2,-3 1,-5 0,-1 -1,-2 -1,-4 1,-2 0,-4 0,-6 -1,0 0,-1 0,-2 1,0 1,-1 1,-1 0,-1 0,-2 0,-2 0,-2 -1,-4 -2,-6 -1,-2 -3,-4 -3,-6 0,-1 -1,-1 -2,0 -1,1 -2,3 -2,6 0,1 0,2 1,2 0,1 0,1 0,1 1,3 1,6 -1,9 0,0 0,1 0,2 -1,1 -2,2 -4,3 0,0 -1,0 -1,-1 0,0 0,0 0,-1 0,0 0,-1 0,0 -1,0 -1,0 -1,0 -1,1 0,1 0,2 0,0 0,1 0,1 -1,2 -1,3 -2,5 0,0 0,0 0,0 -1,0 -3,0 -4,0 -1,1 -2,1 -4,1 0,0 -1,1 -1,1 -2,2 -3,4 -5,5 0,1 0,1 0,1 0,1 0,1 0,2 -1,0 -2,1 -2,2 -1,0 -1,1 -1,2 0,0 0,1 1,1l0 0c0,0 0,0 0,1zm1 1c0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,1 0,1 0,0 0,0 0,0zm-319 -264c0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 -1,0 -1,1 -1,1 0,1 0,1 0,1 0,0 1,0 1,0 1,0 1,-1 2,-2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 1,0 1,0 0,0 -1,0 -1,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 0c0,0 0,0 0,-1 0,0 0,-1 -1,-1 0,0 0,0 -1,0 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,0 0,0 2,1 2,1 3,1l0 0 0 0c0,0 0,0 1,0 -1,1 -1,1 -1,1zm-329 -1c0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0l-1 0c1,-1 1,-2 1,-3 -1,-1 -2,-3 -2,-4 -1,0 -1,-1 -1,-1 0,0 -1,-1 -2,0 -1,1 -3,3 -2,5 0,1 -1,2 -1,2 0,1 0,2 0,2 0,1 1,1 1,1 2,1 3,1 5,1 0,0 0,-1 1,-1 0,-1 0,-2 0,-2 1,0 1,0 1,0 0,0 0,0 0,0 0,1 0,1 0,1zm-51 61c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 -1,0 0,0 0,0zm423 29l0 0 0 0 0 0zm-196 -97c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,1 0,0 0,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1zm230 62c0,-1 0,-1 0,-1 0,0 -1,1 -1,1 0,0 0,0 1,0 0,0 0,0 0,0zm-425 -62c0,0 0,0 0,-1 0,0 0,0 0,0 1,1 1,1 1,1 2,1 3,3 2,5 0,1 0,1 1,2 0,0 1,0 2,0 1,-1 2,-2 2,-3 0,-2 1,-3 2,-4 0,0 1,-1 1,-2 0,-1 0,-2 -1,-3 0,0 0,0 0,-1 0,0 0,-1 0,-1 0,-2 -1,-2 -2,-2 -1,0 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 0,-3 0,-1 -1,-2 -2,-2 -1,0 -2,0 -3,0 0,0 0,0 0,0 -1,1 -2,2 -2,3 1,0 0,1 0,1 0,1 0,1 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 0,1 -1,1 -1,1 0,0 -1,-1 -1,-1 -1,0 -1,0 -1,0 -1,1 -1,1 -1,1 -1,1 0,2 1,3 1,0 2,0 2,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0zm438 51c0,0 1,0 1,0 0,0 0,0 0,0 0,0 -1,0 -1,0zm224 219c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-310 -277c1,-1 0,-1 0,-1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0zm-332 103l0 0 0 0 0 0zm226 156c0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0zm181 -204c0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 -1,0 0,0 0,0 0,0zm14 -1l0 0 0 0 0 0zm1 -3c0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 1,0zm210 108c0,0 0,1 0,1 1,0 1,-1 1,-1 0,0 -1,0 -1,0 0,0 0,0 0,0zm-691 -113c0,0 1,0 1,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1zm36 -1c1,0 1,0 1,0 0,0 -1,0 -1,0 0,0 0,0 0,0zm-60 253c1,0 1,0 1,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,1 0,1 0,1zm387 -23c0,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,-1 0,-1 -1,1 -1,1 -1,1 0,0 0,0 0,1zm-81 -15c0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 1,0 1,0 0,0 0,-1 0,-1zm446 -9c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,1 0,0 1,0 1,0zm32 -76c1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-262 -147c-1,0 -1,0 -1,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,-1 0,0zm-128 108c1,1 1,1 1,1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 -1,0zm-61 -16c0,1 0,0 0,0 0,0 0,0 1,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,0zm-469 -2c-1,0 -1,0 -1,0 0,1 1,1 1,1 0,0 0,0 0,0 0,-1 0,-1 0,-1zm621 -51c0,-1 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 0,1 0,1 0,0 1,0 1,0zm-434 -10c-1,0 -1,0 -1,0 0,0 0,1 0,1 1,0 1,0 1,-1 0,0 0,0 0,0zm365 -53c0,0 0,0 -1,0 0,0 0,0 0,0 0,1 0,1 1,1 0,0 0,0 -1,0l1 0c-1,0 -1,0 -2,0 0,0 0,-1 0,-1 0,-2 -1,-3 -1,-5 1,0 0,0 0,0 -1,-1 -2,-1 -2,1 0,1 0,2 -1,4 -1,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -2,1 0,1 1,1 2,1 0,0 0,1 0,1 1,0 1,0 1,0l0 0 0 0c0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,1 1,0 2,0 4,1 0,0 0,0 1,0 0,-1 0,-1 0,-1 1,-1 2,-2 3,-3 0,0 0,0 0,-1 0,0 -1,0 -1,-1l0 0c0,0 0,0 0,0 0,0 0,-1 0,-1zm0 1c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0zm-155 0c0,0 0,0 -1,-1 0,1 0,1 0,1 0,0 0,0 1,1 0,-1 0,-1 0,-1zm417 496c-1,0 -1,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0l1 0c0,1 0,1 0,2 0,0 0,1 0,2 0,2 1,4 1,5 1,2 1,4 1,5 0,3 0,5 0,7 1,0 1,1 1,1 -1,1 -1,2 -1,3 0,2 -1,3 -3,4 -1,1 -1,3 0,3 1,1 1,2 2,2 1,1 2,2 3,2 1,0 2,0 3,0 1,0 1,0 2,0 1,-2 4,-2 6,-4 0,0 0,0 0,0 2,0 4,-1 6,0 2,0 3,0 5,0 1,0 2,0 2,-1 2,-2 3,-3 6,-4 0,0 1,-1 2,-1 0,-1 1,-1 2,-1 3,1 5,0 8,-1 1,-1 3,-1 5,-1 1,0 3,0 4,0 1,0 2,0 2,1 1,1 2,1 3,1 1,0 2,1 3,1 1,1 1,1 1,2 0,1 0,2 1,2 1,1 1,2 1,3 0,1 0,2 1,3 0,0 0,1 0,1 0,0 0,0 0,0 0,1 0,1 1,1 0,0 0,0 0,0 1,-1 3,-2 4,-4 0,0 1,-1 2,-1 0,-1 1,-1 2,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 -1,1 -2,2 -2,3 0,1 -1,2 -2,3 -1,0 -1,0 -1,1 0,0 0,0 1,0 0,0 0,0 1,0 1,0 2,0 2,-1 0,-1 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,3 0,4 -1,0 0,1 0,1 1,0 1,0 2,0 0,0 0,0 0,0l0 -1 0 1c0,0 0,0 0,0 0,0 0,0 0,0 1,2 1,4 0,7 0,0 0,1 1,1 0,1 0,2 0,2 1,2 3,3 5,4 1,0 2,1 3,1 0,1 1,1 1,2 1,0 1,0 2,0 1,-1 3,-2 4,-4 0,0 1,0 1,0 0,1 0,1 0,1 0,0 0,1 0,1 1,1 1,3 2,4 1,0 1,0 1,0 2,-1 4,-2 5,-4 1,-1 3,-1 5,-1 1,0 1,0 2,0 1,-1 3,-2 3,-3 0,-2 1,-4 1,-5 1,-2 2,-4 3,-5 1,-1 1,-2 2,-3 1,-2 2,-3 2,-4 1,-3 3,-5 5,-6 0,0 1,-1 1,-1 0,-2 2,-3 3,-5 0,-1 0,-3 1,-5 1,-2 2,-4 3,-6 0,0 0,-1 0,-2 1,-1 0,-3 0,-4 0,-1 0,-2 0,-3 0,0 0,-1 0,-2 0,-2 1,-4 2,-5 0,-1 0,-1 0,-1 0,0 0,0 -1,-1 0,0 0,0 0,1 -1,1 -1,1 -2,-1 0,0 0,0 0,0 -1,-1 -1,-3 -3,-4 0,-1 -2,-2 -1,-4 0,-1 -1,-2 -2,-2 0,-1 -1,-1 -2,-1 0,0 0,-1 0,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-2 -1,-3 0,-1 -1,-1 -1,-1 -2,-2 -3,-4 -6,-4 0,-1 0,-1 -1,-2 0,-1 0,-2 0,-3 0,-2 0,-3 -1,-4 -1,-1 -1,-2 -1,-4 0,-1 0,-2 0,-3 0,-1 0,-2 -1,-3 -1,-1 -2,-1 -3,-1 0,0 -1,0 -1,0 0,-1 0,-1 0,-2 0,-1 0,-2 -1,-4 0,-2 -1,-3 -2,-5 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 -1,1 -1,1 0,1 0,2 -1,3 0,1 0,3 -1,4 0,2 -1,4 -1,6 0,1 0,1 0,2 0,2 -1,3 -1,5 -1,1 -1,2 -1,3 -1,1 -1,1 -2,1 -2,1 -3,0 -4,-1 0,0 -1,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 1,0 1,-1 0,-1 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,0 -2,-1 -1,-1 -3,-2 -4,-2 -1,-1 -1,-1 -2,-2 0,0 -1,-1 -1,-1 -1,-1 -1,-2 -1,-2 1,-2 2,-3 2,-4 0,-1 0,-1 0,-1 1,0 1,0 1,-1 1,-1 2,-2 2,-3 0,0 0,0 0,-1 -1,0 -1,0 -2,0 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 0,0 -1,0 -1,0 -2,0 -4,-1 -6,-2 -1,0 -2,-1 -3,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 0,1 0,0 0,0 1,1 0,0 0,1 -1,1 0,0 -1,1 -2,1 -1,0 -1,0 -2,0 -1,0 -2,1 -3,2 -1,1 -2,3 -3,4 -1,1 -1,2 0,3 0,0 -1,1 -1,1 -1,-1 -2,-1 -3,-1 0,0 -1,0 -1,0 -1,-1 -1,-2 -2,-3 0,0 -1,-1 -2,0 -1,0 -2,0 -3,1 0,0 -1,1 -2,1 -1,0 -1,1 -2,2 0,0 0,1 -1,1 -1,0 -1,1 -1,2 0,1 0,1 0,1 0,1 -1,1 -1,1 0,0 -1,0 -1,0 -1,0 -1,0 -1,1 0,0 0,1 0,2 0,0 0,0 0,0 0,0 0,0 -1,0 0,-1 0,-1 -1,-2 0,0 -1,0 -1,0 -1,0 -1,1 -2,2 0,0 -1,0 0,1 0,2 -1,3 -2,5 -1,0 -1,1 -1,1 -1,2 -3,3 -5,3 -1,0 -2,0 -3,0 -2,2 -4,1 -6,3 0,0 -1,0 -1,0 -2,-1 -3,0 -4,1 -2,1 -3,2 -5,2 -1,0 -1,1 -2,2 0,1 0,0 -1,0 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,1 0,2 0,2 0,1 0,2 -1,3 -1,1 -1,2 -1,4 0,1 0,3 1,4 0,0 0,1 0,1 0,1 0,1 0,1 0,0 0,1 -1,1l0 0c0,-1 0,-2 0,-2 0,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 1,2 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0zm0 1c0,0 0,-1 0,-1 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 -1,0zm135 -63l-1 0c0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-1 -1,0 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -3,-1 0,0 0,0 0,-1 0,0 -1,0 -2,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-1 -2,-1 0,-1 -1,-2 -1,-2 0,-1 0,-1 0,-2 1,0 1,0 1,0 1,-1 1,-2 0,-3 0,0 -1,0 -1,0 -1,-1 -2,-1 -3,-1 -1,-1 -2,-1 -2,-3 0,0 -1,-1 -1,-1 -2,-2 -6,-4 -9,-5 -1,0 -3,0 -4,-1 -1,-1 -3,-1 -5,-2 -2,0 -4,-1 -6,-2 -2,-1 -4,-1 -5,1 0,0 0,0 0,0 -2,1 -4,2 -5,4 0,0 -1,0 -2,0 0,-1 -1,-1 -2,-2 0,-1 -1,-1 0,-2 0,0 0,-1 0,-1 0,-1 -1,-2 -1,-3 0,-1 -1,-1 -2,-1 -1,0 -1,0 -2,-1 -1,0 -2,0 -2,1 -2,0 -3,1 -5,2 0,0 0,0 0,0 0,0 0,1 0,1 1,0 1,0 2,1 0,0 1,0 1,1 1,1 2,1 3,1 1,0 2,0 3,0 0,0 0,1 0,1 0,0 0,0 0,0 -2,0 -3,1 -4,1 -1,0 -1,0 -1,0 1,1 2,3 2,4 0,1 2,1 2,0 0,0 1,0 1,-1 0,0 0,0 1,0 1,1 2,1 3,2 1,0 1,1 2,1 2,0 3,1 4,1 1,0 2,1 3,1 1,1 2,2 3,3 0,1 0,2 1,2 0,1 0,1 0,2 1,0 0,1 0,1 -1,0 -2,1 -3,2 0,1 0,2 1,2 1,0 3,-1 4,-1 1,0 2,0 3,1 1,1 1,1 1,1 1,1 1,1 2,1 2,1 4,1 5,1 1,0 2,0 2,0 1,-1 1,-1 1,-2 0,-1 0,-1 0,-1 1,-1 2,-2 3,-2 1,-1 2,-1 3,-1 0,1 1,1 2,2 1,0 1,1 2,1 1,2 2,3 4,5 0,1 1,1 3,1 2,0 4,1 6,2 0,0 0,0 0,0 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -2,-1 -1,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,0 2,1 0,0 0,0 0,0 0,0 0,0 1,0l0 0c0,0 0,0 0,1 0,0 1,0 1,-1 0,0 0,0 -1,0 0,0 0,0 0,0l0 0zm-89 -6c0,0 0,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1 0,0 1,0 1,-1zm-470 -384c0,0 1,0 1,-1 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 0,0 0,0zm488 361c0,0 0,1 0,1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 -1,-1 -1,-1zm-27 -30c0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0 1,0 1,0 1,-1zm-102 -18c-1,0 0,1 0,1 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0zm101 -2c0,-1 0,-1 0,-1 -1,0 -1,0 -1,1 0,0 0,0 1,0 0,0 0,0 0,0zm-626 -266c0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0zm9 263c0,1 0,1 0,1 1,0 1,0 1,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0zm-78 -31c0,1 0,1 1,1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 -1,0 -1,0zm138 -234c0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 1,-1zm-107 232c0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,0 0,1 1,0 1,0 1,0zm-12 -5c0,0 0,-1 1,-1 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,1zm8 -2c0,0 0,0 0,0 -1,0 -1,0 -1,0 0,1 1,1 1,1 0,0 0,0 0,-1zm682 -13c0,0 -1,-1 -1,-1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0zm-478 0c0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,-1 -1,-1 0,0 0,1 0,1 0,0 0,0 0,0zm-232 -215c0,0 1,0 1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,1zm47 512c0,-1 0,-1 0,-2 0,0 0,0 0,0 1,1 1,1 0,2 0,0 0,0 0,0zm716 -32c0,0 0,0 0,0 0,1 0,1 0,1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 -1,0 -1,0zm-381 -562c0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 -1,0 1,1 1,1 1,1zm-196 -19c0,0 0,-1 0,-1 0,0 0,0 -1,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1zm340 26c0,-1 0,-1 0,-1 -1,-1 -1,0 -1,0 0,0 0,1 0,1 0,0 1,0 1,0zm321 469c0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,1 0,1 0,1 0,0 0,0 0,1 0,0 1,0 1,-1zm-64 -72c0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 1,0zm-38 -3c0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 1,0 1,0zm-132 -388c0,1 1,1 1,1 0,0 1,0 1,0 0,0 0,0 -1,0 0,-1 -1,-1 -1,-1zm-741 142c0,0 -1,0 -1,0 0,0 0,0 0,1 0,0 0,0 1,0 0,0 0,0 0,-1zm613 -136c0,0 0,0 -1,-1 0,0 0,0 0,1 0,0 0,1 0,1 0,0 1,-1 1,-1zm-125 233c0,-1 0,-1 0,-1 0,0 -1,0 -1,0 0,0 0,0 0,1 0,0 1,0 1,0zm384 151c0,1 1,1 1,1 0,0 1,0 1,-1 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0zm-632 -376c-1,-1 -1,-1 -2,-1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 1,1 1,1 0,0 0,-1 1,-1 0,0 0,0 0,0zm602 262c0,0 0,0 -1,0 0,0 0,0 0,0 -1,0 -1,1 0,1 0,0 0,0 0,0 0,0 0,-1 1,-1zm-664 -262c-1,0 -1,1 -1,1 0,0 0,0 0,0 1,1 1,0 1,-1 0,0 0,0 0,0zm25 321c-1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,-1 1,-1zm627 -1c0,0 0,1 1,1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0zm-52 35c0,0 0,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0 1,0 1,0 1,-1zm-235 -297c0,0 0,0 -1,1 0,0 0,0 0,0 1,0 1,1 2,1 0,0 0,0 0,0 1,0 1,-1 0,-1 0,0 0,-1 -1,-1zm435 372c0,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 0,2 0,2 0,0 1,0 1,0 0,0 0,-1 0,-1zm-667 -471c0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,0 -1,0 0,0 0,0 0,1 0,0 1,0 1,0zm561 462c0,0 0,0 1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,1zm-700 119c0,0 0,0 0,0 0,-1 0,-1 -1,-2 0,0 0,0 0,1 -1,0 0,1 0,1 0,0 1,0 1,0zm672 -164c1,0 1,0 1,0 0,0 0,0 0,0 0,-1 -1,-1 -1,-1 0,0 -1,1 -1,1 1,0 1,1 1,0zm35 158c0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,-1 -1,-1 0,0 0,1 0,1 0,0 -1,0 -1,1 0,0 1,0 1,0 0,0 0,0 1,0zm-513 -534c0,0 -1,1 -1,1 0,0 0,1 1,1 0,0 0,0 0,0 0,-1 1,-1 1,-1 -1,-1 -1,-1 -1,-1zm188 410c0,-1 0,-1 0,-1 0,-1 -1,0 -1,0 0,1 0,1 1,1 0,0 0,0 0,0zm284 -12c1,0 1,0 1,0 0,0 0,0 1,0 0,-1 -1,-1 -1,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 -1,0 -1,1 0,0 1,0 1,0zm-21 -72c0,0 -1,0 -1,0 0,0 -1,0 -1,1 0,0 0,0 1,0 0,1 1,0 1,-1zm-305 -343c0,0 -1,0 -1,0 0,1 0,1 1,1 0,1 1,1 1,1 0,-1 0,-1 0,-2 -1,0 -1,0 -1,0zm1 2c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0 1,1 2,1 2,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 -1,0 -1,0 -2,1 0,0 0,0 0,0 0,0 0,0 0,0zm315 255c0,0 0,-1 -1,-1 0,1 0,1 0,1 -1,0 -1,0 -1,1 0,0 1,0 1,0 1,0 1,0 1,-1zm-627 -177c0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,1 0,1 1,1 0,0 0,0 0,0 0,0 1,-1 1,-1zm393 -25c1,0 1,0 1,0 0,-1 0,-1 -1,-1 0,-1 0,-1 0,-1 0,0 -1,0 -1,1 0,0 0,1 1,1 0,0 0,0 0,0zm262 359c0,1 0,1 0,1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 0,1 0,1 0,1zm-132 -74c0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,1 0,0 0,0 1,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 0,0 0,0zm-562 -28c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-1 -1,0 0,0 0,0 0,0 0,0 0,0 0,1 1,0 1,0 1,-1zm-16 -21c0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,0 2,0 0,0 0,0 0,0 0,-1 -1,-1 -1,-1 0,0 -1,0 -1,1zm5 2c1,-1 0,-2 -1,-2 0,0 0,0 0,0 0,0 0,1 0,2 1,0 1,0 1,0zm-4 4c0,0 -1,1 -1,2 0,0 1,0 1,0 1,0 1,0 1,0 0,-1 0,-2 -1,-2zm39 -181c0,1 0,1 0,1 0,1 0,1 1,1 0,0 1,0 1,0 0,0 0,-1 0,-1 0,0 -1,-1 -2,-1zm16 213c0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,1 0,1 0,1 1,0 2,0 2,-1zm0 6c0,0 0,-1 0,-1 -1,1 -1,1 -1,1 0,1 1,1 1,1 0,0 0,0 1,0 0,-1 -1,-1 -1,-1zm628 16c0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,2 2,1 0,0 0,-1 0,-1 0,0 0,0 -1,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 1,-1 1,-1 1,-2 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 -1,1 -1,1l0 0c0,0 0,0 0,0 0,-1 -1,-1 -2,-2l0 0c0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -2,-1 -4,-2 0,0 0,0 0,0 0,2 0,3 0,4 0,1 1,1 1,1 1,0 1,0 2,0 0,0 0,-1 1,-1l0 0c0,0 0,0 0,0 -1,1 -1,2 -1,3 -1,1 -1,2 0,2 0,1 1,1 1,1 1,0 1,0 1,0 1,-1 1,-2 1,-3l0 0c0,0 0,0 0,0 0,0 1,0 1,0zm-1 -2c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,2 0,2 0,0 0,0 0,0 -1,0 -1,-1 0,-2zm-226 -318c1,0 1,0 1,-1 0,0 0,-1 0,-1 -1,0 -1,1 -1,1 0,0 0,1 0,1zm251 357c0,0 0,0 0,0 0,0 1,0 1,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-1 -2,0zm-717 -393c0,0 0,0 0,0 1,1 1,1 1,1 1,0 1,0 1,-1 0,0 0,0 0,-1 0,0 -1,0 -1,0 0,0 -1,0 -1,1zm396 -16c0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 0,0 1,0zm-11 0c1,0 1,0 1,0 0,0 1,-1 1,-1 -1,0 -1,0 -1,0 -1,-1 -2,0 -1,0 0,1 0,1 0,1zm407 420c0,2 1,3 1,4 0,0 0,0 0,0 1,0 1,0 1,-1 0,-1 -1,-2 -2,-3zm-710 -267c-1,0 -1,0 -1,0 0,0 -1,0 -1,1 0,0 0,1 1,1 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 0,-1 0,-1 0,0 0,0 0,0zm-47 -33c0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,1 1,1 0,0 0,0 0,0 1,0 1,0 1,0 -1,-1 -1,-2 -2,-2zm787 325c-1,0 -1,1 0,1 0,0 0,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,0 -1,-1 -1,-1 -2,-1 0,0 0,0 0,0zm-751 -286c-1,0 -1,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 1,0 1,-1 1,-1 -1,0 -1,-1 -1,0zm538 253c0,0 -1,0 -1,0 0,0 0,1 0,1 0,1 0,1 1,1 0,0 0,0 0,0 1,0 1,0 1,0 0,-1 -1,-2 -1,-2zm-610 -322c0,0 -1,1 -1,1 -1,0 -1,1 -1,1 0,1 1,1 1,1 1,-1 1,-1 2,-2 0,0 0,-1 0,-1 -1,0 -1,0 -1,0zm816 347c1,1 1,1 1,0 0,0 0,0 0,-1 -1,0 -2,-1 -2,-1 -1,0 -1,0 -1,0 0,0 0,0 0,1 1,0 1,1 2,1zm-176 -20c0,0 0,1 0,1 -1,0 -1,0 -1,1 1,0 1,1 2,0 0,0 0,0 1,0 0,0 0,0 0,-1 0,0 -2,-1 -2,-1zm-388 -235c0,-1 0,-1 0,-1 0,0 -1,0 -1,0 0,0 -1,0 -1,1 0,1 0,1 0,2l0 0 0 0 0 0 0 0c0,0 0,0 1,-1 0,0 1,-1 1,-1zm-2 2c0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0zm501 27c1,-1 2,-2 1,-3 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -2,2 0,0 1,1 1,1 0,0 0,0 0,0zm-146 192c0,0 0,0 0,0 -1,0 -1,1 -1,1 0,1 1,1 1,2 0,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 0,-1 -1,-2zm-210 -383c0,1 1,1 2,1 0,0 1,0 1,-1 0,0 -1,-1 -1,-1 -1,0 -2,1 -2,1zm347 199c0,0 0,0 -1,0 0,0 0,0 0,1 -1,1 -1,2 -1,3 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 -1,-2 0,0 0,0 -1,0 -1,1 -2,1 -3,0 -2,-1 -4,-2 -5,-3 -1,-1 -2,-2 -3,-3 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1 1,0 1,1 1,2 0,0 1,1 1,2 0,1 0,3 0,5 0,0 0,1 -1,1 0,0 0,0 0,0 -1,0 -1,0 -1,1 0,0 0,0 0,1 -1,1 -1,1 -1,2 0,2 1,2 1,3 1,1 1,2 1,2 0,0 1,1 1,1 1,-1 2,-2 2,-2 1,-1 1,-1 0,-1 0,-1 -1,-2 -2,-2 0,0 0,0 0,0 0,-1 1,-1 1,-1 2,-1 3,-1 5,0 0,1 1,1 2,1 1,1 1,0 1,0 0,-1 0,-1 0,-2 1,-1 1,-2 2,-2 1,-1 2,-1 3,-1 1,-1 1,-2 0,-3 0,0 0,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 1,-2 2,-2 2,-4 0,0 0,0 0,0zm78 224c0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,-1 -2,-1 0,0 0,0 -1,0 0,1 0,1 1,1 0,1 1,1 2,1zm-121 -28c1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -2,-1 -4,-1 0,0 0,1 0,1 0,0 0,0 0,0 1,0 2,0 2,0 0,0 0,0 0,0zm-518 -423c1,0 1,0 1,0 0,0 1,0 1,-1 0,0 0,-1 -1,-1 0,0 -1,0 -1,0 0,1 0,2 0,2zm-78 528c0,0 0,0 0,0 0,0 0,0 0,0 0,-2 0,-3 1,-3 0,-1 0,-1 0,-1 1,0 1,1 1,1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 -1,1 -1,2zm0 0c0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 -2,1 0,0 0,1 0,1 0,0 0,0 0,0 0,-1 0,-2 1,-2 0,0 0,0 1,0zm409 -510c1,0 1,0 1,0 0,-1 -1,-1 -1,-1 -1,0 -2,1 -3,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 2,1 3,0zm-20 19c1,0 2,-1 2,-2 0,0 0,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -2,1 0,0 0,0 0,1 0,0 0,0 1,0zm331 413c0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,-1 0,-1 0,-1 -1,0 -1,1 -1,1 1,2 2,2 3,3zm-754 -330c1,0 1,0 1,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1 0,0 -1,0 -1,1 0,0 0,1 0,1 1,0 2,1 2,0zm772 352c-1,-1 -1,-1 -2,-2 0,0 -1,1 -1,1 0,0 0,1 1,2 0,0 0,0 1,0 0,0 1,-1 1,-1zm-781 -364c-1,0 -1,0 -1,1 -1,0 -2,0 -2,1 0,0 0,0 0,1 0,0 0,0 0,0 0,0 1,0 1,0 1,-1 1,-1 2,-2 0,0 0,-1 0,-1 0,0 0,0 0,0zm395 263c-1,0 -1,0 -1,0 -1,0 -1,1 -1,1 0,0 0,1 1,1 1,0 1,0 2,-1 0,0 0,0 0,-1 -1,0 -1,0 -1,0zm-59 -354c0,0 1,0 1,-1 0,0 0,-1 -1,-1 -1,0 -1,0 -2,0 0,0 0,1 0,2 1,0 1,1 2,0 0,0 0,0 0,0 0,1 -1,1 -1,1 0,0 -1,0 -1,1 0,1 0,2 1,3 0,1 0,1 1,1 1,1 2,0 3,-1 0,0 1,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,-1 -1,0 -1,0 0,-1 0,-1 1,-1 0,-2 0,0 -1,0 -2,0 0,0 0,0 -1,0l0 0 0 0zm-332 362c0,1 0,2 1,2 0,-1 1,-1 1,-2 0,0 0,-1 -1,-1 -1,0 -1,0 -1,1 0,0 0,0 0,0zm744 247c-1,1 -2,2 -2,3 0,0 1,0 1,0 0,0 1,0 1,0 1,-1 1,-2 1,-2 -1,-1 -1,-1 -1,-1zm-997 -485c-1,1 -1,1 -2,1 -1,0 -1,0 -2,1 0,0 0,0 0,0 0,0 -1,0 -1,0 -3,1 -3,1 -3,4 0,1 0,1 0,1 1,0 1,1 1,1 0,0 0,0 1,0 1,-1 3,-2 4,-3 1,0 2,-1 3,-1 0,0 0,-1 0,-2 0,0 0,-1 -1,-1 0,0 0,0 0,-1 0,0 0,0 0,0 1,1 2,1 2,0 1,0 1,0 1,0 0,0 0,-1 0,-2 0,0 -1,0 -2,0 0,1 -1,1 -1,2 0,0 0,0 0,0l0 0zm907 317c0,1 1,0 1,-1 0,0 0,0 0,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,1 0,0 0,0 0,0 0,0 0,1 0,1 1,0 1,0 2,0zm13 -22c0,0 0,0 0,0 -1,1 -1,2 -1,3 0,0 0,0 0,1 0,0 0,0 0,0 2,-1 2,-2 2,-4 0,0 -1,0 -1,0zm-261 -356c0,0 0,0 -1,0 0,0 -1,2 0,2 0,1 1,1 2,1 0,0 0,-1 0,-1 0,-1 0,-2 -1,-2zm253 477c0,0 0,0 0,1 0,0 0,0 0,0 1,0 1,0 2,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 0,-1 0,-1 -1,-1 -1,-1 -2,-1 -3,0zm-30 -387c-1,0 -2,0 -2,1 -1,0 0,1 1,1 0,0 0,0 1,1 0,-1 0,-1 0,-1 1,-1 0,-2 0,-2zm-673 33c0,0 -1,1 -1,1 0,0 0,1 1,1 0,0 1,0 1,0 1,0 1,0 1,0 0,0 0,0 0,0 1,0 1,-1 0,-1 0,-1 -1,-1 -2,-1zm26 -57c0,1 0,1 0,2 1,0 1,0 1,1 0,0 1,0 1,0 0,-1 1,-1 1,-1 0,-1 0,-1 -1,-2 -1,0 -1,0 -2,0zm247 -95c0,0 0,0 0,0 0,2 1,4 3,5 0,0 0,0 0,-1 0,0 0,0 0,0 0,-2 -2,-3 -2,-4 0,0 -1,0 -1,0zm-277 -4c0,0 1,0 1,-1 1,0 1,-1 0,-2 0,0 0,0 0,0 -1,0 -2,1 -2,2 0,0 0,1 1,1zm9 14c1,0 1,0 2,0 0,0 0,-1 0,-1 0,0 0,0 -1,0 -1,-1 -2,0 -3,0 -1,0 -1,0 -1,1 0,0 0,0 0,0l0 0c-1,0 -1,0 -1,-1 -1,0 -1,0 -1,0 -1,0 -2,0 -2,0 -1,1 -1,1 -1,1 -1,1 -1,2 -2,2 -1,0 -1,1 0,1 0,1 0,1 0,1 1,2 0,3 0,4 -1,1 -1,1 -1,0 -1,0 -1,-1 -2,-2 0,-1 0,-1 -1,-1 -2,0 -3,1 -3,3 0,1 0,2 0,3 0,0 0,1 1,1 1,0 1,1 2,2 0,2 1,3 1,5 0,1 0,2 1,3 0,0 1,0 1,0 1,-1 2,-1 2,-2 1,0 2,0 3,-1 0,0 1,0 2,-1 0,0 0,0 1,-1 0,-1 1,-2 2,-3 0,-1 0,-2 0,-3 0,0 0,-1 0,-2 -1,-1 -1,-1 -2,-1 0,-1 0,-1 0,-1 1,0 2,-1 2,-1 1,0 1,-1 1,-1 0,-1 1,-1 2,-2 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 -1,0 -2,0 -3,0 0,0 -1,-1 -1,-1 0,0 0,0 0,0 1,0 2,1 3,0zm570 -41c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-2 -1,-2 -2,-3 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,2 2,3 3,4zm-564 169c1,0 1,0 2,-1 0,0 0,-1 0,-1 0,0 -1,-1 -1,-1 -1,1 -1,1 -2,1 -1,0 -1,1 -1,1 0,0 0,0 0,1 0,0 1,1 2,0zm729 2c1,-1 2,-2 2,-4 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,1 -1,2 -1,4 0,0 0,0 0,1 0,0 1,0 1,0 0,0 0,-1 0,-1zm-751 -175c0,0 0,0 0,0l0 0c0,0 0,1 0,1 -1,1 0,2 0,2 0,1 1,1 1,2 0,0 1,1 2,1 0,0 1,0 1,0 1,0 2,-1 3,-1 0,-1 1,-2 1,-2 0,-1 0,-1 1,-2 0,0 1,0 2,-1 0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 -2,-1 -3,-1 -5,-1 -2,0 -3,0 -4,1l0 0c0,0 0,0 0,0l0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 0,-2 0,-1 -1,-1 -1,-1 -1,0 -1,0 -2,1 0,1 0,1 1,2 0,1 1,1 1,1zm26 8c0,1 1,2 2,2 1,0 1,-1 1,-2 0,-1 -1,-2 -2,-2 -1,0 -1,1 -1,2zm581 2c0,0 0,0 -1,0 0,0 0,1 0,1 0,1 1,2 2,2 0,0 1,0 1,0 0,0 0,-1 0,-1 0,-1 -1,-2 -2,-2zm-866 137c0,0 0,0 -1,0 -1,1 -2,2 -3,3 0,0 0,1 0,1 1,0 1,0 1,0 1,-1 3,-2 4,-3 0,0 0,0 0,0 0,-1 0,-1 -1,-1zm308 -126c0,0 0,1 0,1 1,0 1,0 2,0 1,0 1,-1 1,-2 0,-1 -1,-2 -2,-2 0,0 0,1 0,1 -1,1 -1,1 -1,2zm-1 -31c0,1 0,1 1,0 0,0 1,-1 1,-2 0,0 0,-1 0,-1 0,0 -1,0 -1,-1 -2,1 -3,2 -2,3 0,0 0,1 1,1zm-301 155c0,0 0,0 0,0 -1,1 -2,2 -3,3 0,0 0,0 0,0 0,0 0,1 0,1 2,-1 3,-1 4,-2 0,0 0,-1 0,-1 0,-1 0,-1 -1,-1zm468 -81c0,1 0,1 0,1 0,1 0,2 1,2 1,0 1,1 2,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,-1 -1,-2 0,-1 -1,-1 -2,0zm482 349c0,0 0,0 0,-1 0,0 0,0 0,0 -1,-1 -3,-1 -4,0 0,0 0,1 0,1 1,1 2,1 3,1 0,0 1,-1 1,-1zm38 -203c2,-2 3,-3 4,-5 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -1,1 -1,1 -1,0 -2,0 -2,1 0,1 -1,2 -1,3 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0zm-672 15c0,0 0,0 0,0 0,0 0,0 0,1 0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,-1 0,0 0,0 0,0l0 0c0,0 0,0 1,0 1,0 1,1 1,1zm689 -115c0,0 -1,0 -1,1 -1,0 -1,1 -1,2 1,0 1,1 1,2 0,0 0,0 1,0 0,0 0,0 0,0 0,-1 1,-2 1,-3 1,0 1,-1 0,-2 0,0 -1,0 -1,0zm-721 26c-2,1 -2,2 -2,4 0,0 1,0 1,1 0,-1 1,-1 1,-1 0,0 1,-1 1,-2 0,0 0,0 0,0 1,-1 0,-2 0,-2 0,0 -1,0 -1,0zm761 283c0,0 0,0 0,0 0,1 -1,1 0,1 0,2 0,3 1,4 0,0 2,0 2,0 1,-1 1,-2 0,-2 -1,-1 -2,-2 -3,-3zm-775 -407c1,0 1,0 1,0 1,-1 1,-3 1,-4 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,0 -1,0 -1,0 0,1 -1,3 -1,4 -1,0 0,1 0,1 0,1 0,1 0,1zm651 423c2,0 3,1 4,1 0,1 1,0 1,0 1,0 1,0 1,-1 0,0 0,0 -1,-1 0,-1 -2,-1 -4,-1 0,0 0,0 0,0 -1,0 -1,1 -1,1 0,0 0,0 0,1zm-627 -100c0,-1 -1,-1 -1,-1 -1,0 -2,0 -3,1 0,0 0,0 0,1 0,0 0,0 0,1 0,0 1,0 1,0 1,0 3,0 4,-1 0,0 0,0 0,-1 0,0 0,0 -1,0zm299 -63c0,0 -1,0 -1,0 0,1 0,1 0,1 0,0 0,1 0,1 1,0 2,0 4,1 0,0 0,0 0,0 1,0 2,-1 3,-1 1,0 1,0 1,0 0,0 0,0 -1,-1 0,0 -1,-1 -3,-1 -1,0 -2,0 -3,0zm97 -204c1,1 3,0 4,-1 0,0 0,0 0,0 -1,-1 -1,-2 -2,-3 0,0 -1,0 -1,0 -1,1 -2,2 -1,3 0,1 0,1 0,1zm-667 35c1,0 2,-1 2,-2 0,0 -1,-1 -2,-1 -1,0 -2,0 -3,1 0,0 0,0 0,0 0,1 0,1 0,2 1,1 2,1 3,0zm232 231c-1,0 -2,0 -2,1 -1,0 -1,0 -1,0 1,2 3,3 5,2 1,0 1,0 1,0 1,0 1,-1 1,-1 -1,-2 -3,-2 -4,-2zm661 35c0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 1,-1 2,-2 3,-3 1,-1 2,-2 4,-3 0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1 -2,3 -4,5 -6,7 0,0 0,0 0,1zm-372 -121c0,0 0,-1 0,-1 0,-1 0,-2 0,-2 0,-1 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,-1 -1,0 0,0 -1,0 -1,0 -1,1 -1,1 -1,2 0,1 0,2 1,3 0,1 1,1 2,0zm-311 -235c0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -2,1 -4,2 -6,3 0,0 0,1 0,2 1,0 1,0 2,0 1,-1 3,-3 5,-4 0,0 0,0 0,0zm390 263c1,0 1,-1 2,-1 1,-1 2,-2 2,-3 0,0 0,0 0,0 -1,0 -2,0 -4,1 -1,0 -1,0 -2,1 -1,0 -1,1 0,1 0,1 1,1 2,1zm-307 -69c-1,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 1,1 0,0 1,1 2,2 1,0 2,0 3,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-2 -4,-3 -6,-3zm473 -174c0,1 1,1 2,1 0,0 1,0 1,1 0,0 0,0 0,0 1,0 2,-1 2,-2 0,-1 0,-2 -1,-2 0,-1 -1,-1 -1,-1 -1,0 -2,1 -2,1 -1,0 -1,1 -1,1 0,0 0,0 0,1zm-510 100c0,0 0,0 0,0 0,0 0,-1 -1,-1 0,0 0,0 0,0 -1,0 -2,0 -2,0 -1,0 -1,0 -1,1 -1,0 -2,1 -2,1 -1,1 -1,1 0,1 0,1 0,1 0,1 1,0 2,0 2,0 2,0 3,-1 4,-3zm364 -30c0,1 -1,1 -1,2 1,0 1,1 1,2 0,0 1,1 2,0 2,0 2,-1 3,-3 0,0 0,0 -1,-1 0,-1 -2,-1 -3,-1 -1,0 -1,1 -1,1zm290 328c1,0 1,0 2,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 0,0 -2,0 -3,1 -4,1 -1,-1 -2,-1 -4,-1 0,0 0,0 0,0 -1,0 -2,0 -3,1 0,0 0,1 0,1 0,0 0,0 1,0 1,1 2,1 3,1 2,0 4,-1 5,-1zm-22 0c1,1 2,1 3,1 0,0 1,0 1,0 2,0 5,0 7,-1 0,0 0,0 0,0 -1,-2 -3,-2 -4,-2 0,0 -1,0 -1,0 0,1 0,1 0,1 -1,-1 -3,0 -4,0 -1,-1 -2,0 -2,0 0,1 0,1 0,1zm168 54c0,0 1,0 1,0 0,0 0,0 0,-1 0,0 0,0 0,0 -1,-2 -3,-4 -4,-6 -1,0 -2,-1 -2,-1 0,0 -1,-1 -1,-1 0,0 0,0 -1,0 0,1 0,1 0,1 1,2 2,3 3,4 1,2 2,3 4,4zm-125 -72c2,-1 5,-1 7,1 0,0 1,0 1,0 0,0 1,-1 1,-1 0,0 0,-1 -1,-1 0,0 0,-1 -1,-1 -2,-1 -4,-1 -7,-1 0,0 -1,1 -1,2 0,0 0,1 1,1zm-309 -412c0,0 0,0 1,0 0,-1 0,-2 1,-3 0,0 1,-1 1,-1 -1,-1 -2,-2 -3,-3 0,0 -1,0 -1,0 0,1 -1,1 -1,2 0,0 0,1 0,1 0,2 0,3 2,4zm-13 8c0,0 0,1 0,1 0,1 0,2 1,2 0,1 1,1 1,1 1,-1 1,-1 2,-1 0,0 1,-1 1,-1 0,-1 1,-1 1,-1 0,-1 0,-2 -1,-2 0,0 -1,-1 -1,-1 0,0 -1,0 -1,0 -1,1 -2,2 -3,2zm-20 2c0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,1 1,1 0,1 0,1 0,2 0,1 1,1 2,2 0,0 0,0 1,0 0,0 1,0 1,-1 1,0 1,-1 1,-2 0,0 0,-1 1,-1 1,-1 1,-2 2,-3 0,-1 0,-1 0,-2 -1,-1 -1,-2 -2,-2 0,0 0,0 -1,0 -1,0 -1,0 -1,2 0,1 -1,1 -2,2l0 0c0,0 0,0 0,0 0,0 0,-1 0,-1 -1,-1 -2,-1 -3,-2 -1,0 -1,0 -2,1 -1,0 -2,2 -3,3 0,0 0,2 1,2 1,0 2,0 3,0 1,0 1,0 1,-1zm0 0c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -1,-2 0,-2 0,0 1,-1 2,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,1 -2,1 -2,2zm328 344c0,0 -1,0 0,1 0,1 0,1 0,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,1 0,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,2 0,3 1,1 1,1 1,2 0,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,-1 0,0 0,0 1,0 1,-1 1,-2 1,-3 0,-1 0,-2 -1,-2 -1,-1 -2,-2 -3,-1zm-642 -337c0,0 1,0 1,-1 0,0 1,-1 0,-1 -1,-2 -3,-3 -5,-3 -1,0 -2,0 -3,1 0,1 1,2 1,2 1,1 3,2 5,2 0,0 0,0 1,0zm-277 55c0,0 0,0 1,0 1,0 1,1 1,2 1,0 1,1 1,2 1,0 1,0 1,0 1,0 2,0 3,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 -1,-2 -1,-3 -1,-1 -2,-2 -3,-2 -1,0 -1,-1 -2,-1 0,0 0,0 0,0 -1,0 -2,1 -2,2 0,0 0,1 1,1zm86 90c-1,-1 -2,0 -2,0 0,1 -1,1 -1,2 0,1 1,2 1,3 0,0 0,0 0,0 0,0 0,1 0,2 0,1 0,3 1,4 0,0 0,1 1,1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,-4 1,-6 0,-1 1,-2 1,-3 0,-1 0,-1 0,-1 -1,-1 -2,-1 -2,-1zm196 -59c0,2 0,3 2,3 2,0 4,-1 4,-3 1,-1 1,-2 1,-2 0,-1 0,-2 -1,-2 -1,-1 -2,-1 -3,0 -1,1 -2,2 -3,4 0,0 0,0 0,0zm237 148c1,1 1,3 1,5 0,2 1,3 3,1 1,0 1,0 1,-1 0,-1 0,-2 0,-2 0,0 0,0 0,0 0,-1 0,-2 0,-2 0,-1 0,-1 0,-1 0,-2 -1,-3 -3,-2 0,0 -1,0 -1,1 -1,0 -1,0 -1,1zm351 76c0,0 0,0 0,-1 -1,0 -1,0 -2,0 0,0 0,0 0,0 -2,0 -4,1 -5,2 0,1 -1,1 -1,1 0,1 1,3 2,4 2,0 4,0 5,-2 0,-1 1,-2 1,-4zm-28 -310c0,0 1,0 1,0 1,0 2,-1 4,-1 1,0 3,0 4,0 1,0 1,-1 1,-2 -1,-1 -2,-2 -3,-2 -1,0 -2,-1 -2,-1 -1,0 -2,0 -2,0 -1,0 -2,1 -2,1 0,1 0,2 0,3 0,0 -1,1 -1,2 0,0 0,0 0,0zm-604 -24c1,1 2,1 3,2 1,0 1,1 2,2 2,1 4,0 4,-2 0,-1 0,-1 0,-2 0,0 0,0 0,0 1,-2 0,-2 -2,-2 -1,0 -2,0 -3,0 -1,0 -2,0 -3,1 0,0 -1,0 -1,0 0,0 0,1 0,1 0,0 0,0 0,0zm777 421c-1,0 -2,0 -2,1 -1,2 -2,2 -3,3 -1,0 -2,0 -2,-1l0 0 0 0 0 0c-1,1 -3,1 -4,1 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0 2,2 5,3 8,2 1,0 1,0 1,0 1,-1 2,-2 3,-3 1,0 1,0 1,0 0,-1 1,-2 1,-2 0,-1 0,-2 -1,-2zm-168 -419c2,1 4,1 6,1 1,0 2,0 2,0 1,0 2,-1 2,-2 0,-1 0,-1 0,-1 0,-1 -1,-2 -3,-2 -1,0 -2,0 -2,0 -1,0 -3,0 -4,0 0,0 0,0 0,0 -1,1 -2,1 -2,1 -1,0 -1,0 -1,1 1,0 1,1 2,2zm-237 6l0 0 0 0 0 0 0 0zm294 304c-1,-1 -1,-1 -1,0 -1,0 -2,1 -2,1 0,1 -1,2 -1,3 -1,1 -1,2 -1,3 0,2 0,4 2,5 1,0 1,1 1,1 0,0 1,0 1,0 0,-1 0,-2 0,-2 1,-2 1,-3 2,-5 0,-2 0,-3 0,-4 0,-1 0,-2 -1,-2zm-135 60c0,0 -1,-1 -1,-1 -1,0 -1,0 -1,1 0,0 1,1 0,1 -1,1 0,3 -1,5 0,2 1,4 1,6 1,1 2,1 3,1 3,0 5,-3 4,-6 -1,-3 -3,-5 -5,-7zm-480 -307c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 1,1 0,2 0,2 0,2 1,3 3,3 1,0 1,0 2,0 1,0 1,0 2,1 0,0 0,0 0,0l0 0c-1,0 -2,0 -4,1 -1,0 -2,0 -3,0 -1,-1 -1,0 -2,0 0,0 0,0 0,0 0,0 0,1 -1,1 1,0 1,-1 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-2 1,-2 2,-3 2,-5 0,-1 0,-1 0,-2zm-43 277c1,0 2,0 3,0 1,0 2,0 3,0 0,0 1,1 2,1 0,1 0,1 0,0 0,0 1,0 1,0 1,-1 1,-2 3,-1 0,0 0,0 1,-1 1,0 3,0 5,0 0,0 0,0 0,0 1,0 1,-1 1,-1 0,0 0,0 0,-1 -2,-1 -3,-2 -4,-3 -1,0 -1,0 -2,0 -2,-1 -4,-1 -6,-1 0,1 -1,0 -2,0 0,0 0,0 0,0 -1,-1 -1,0 -2,0 0,1 0,1 0,1 1,1 1,2 1,3 1,0 0,1 0,0 -1,0 -1,1 -2,1 -1,0 -2,0 -3,0 0,0 0,1 0,1 0,0 1,1 1,1zm677 28c0,0 0,0 0,0 0,1 -1,2 -1,3 0,0 -1,1 -2,1 0,1 0,1 -1,1 0,0 0,1 -1,1 0,0 0,0 0,0 -1,-1 -2,-2 -3,0 -1,0 -2,1 -3,1 -1,1 -1,2 -1,3 0,0 0,0 0,0 0,0 0,1 0,1 0,0 1,0 1,0 0,-1 1,-1 1,-2 1,1 3,1 4,0 0,0 1,1 1,1 0,1 0,1 0,2 0,2 1,3 3,3 1,0 1,1 2,1 0,0 1,-1 1,-1 0,0 0,-1 0,-1 0,-1 -1,-2 0,-3 0,0 0,0 0,0 1,0 1,0 1,0 1,1 1,1 1,1 1,-1 1,-2 1,-3 0,-2 -1,-3 -1,-4 0,-1 0,-2 -1,-2 -1,-1 -1,-2 -2,-3 0,0 0,0 0,0zm-207 -365c0,1 0,1 0,1 0,1 0,2 0,2 0,1 1,3 1,4 0,1 1,2 2,3 0,0 0,0 0,0 1,0 1,0 1,0 2,-2 2,-2 5,-4 0,-1 1,-1 2,-2 0,0 1,-1 1,-2 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-2 0,-1 -1,-1 -2,-2 -2,0 -3,-1 -4,-1 -1,-1 -2,-1 -4,-2 0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,1 -1,2 0,4 0,1 1,2 1,2zm-471 330c0,0 0,-1 0,-2 0,0 -1,0 -1,-1 -3,-1 -6,-2 -9,-3 0,-1 -1,-1 -2,-2 -1,0 -2,-1 -3,-1 -1,0 -1,0 -2,-1 -1,-1 -2,-1 -4,-1 -1,0 -2,-1 -3,-1 0,0 -1,-1 -2,0 -2,0 -4,0 -5,1 -2,1 -3,2 -4,4 0,0 0,0 0,0 1,0 1,0 2,0 2,-1 4,-1 6,-3 0,0 1,0 1,1 1,0 1,1 2,1 1,0 2,0 3,0 0,1 1,1 2,1 1,1 2,1 3,1 1,0 2,1 2,1 1,2 2,2 3,3 0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 -1,0 0,1 0,2 1,2 1,0 2,0 4,0 1,0 3,-1 6,-1zm731 241c-1,0 -2,0 -4,1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -2,-2 0,0 0,0 -1,0 0,0 -1,1 -1,1 0,1 0,1 0,1 0,3 1,5 0,7 0,1 0,1 0,2 0,0 0,2 0,3 1,1 2,2 3,2 0,0 1,0 1,0 0,0 1,-1 1,-1 1,-1 2,-1 3,-1 0,0 1,0 1,-1 0,-1 1,-3 2,-4 0,-1 0,-1 0,-1 1,-1 1,-3 2,-4 0,0 0,-1 0,-1 0,-1 -1,-1 -2,-1zm-98 -140c2,0 4,0 5,1 1,0 1,0 2,0 0,-1 1,-1 1,-1 1,0 1,1 2,1 0,0 1,-1 1,-1 0,-1 -1,-1 -1,-1 -2,0 -3,-1 -4,-2 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 0,0 -1,0 0,-1 1,-1 1,-1 0,0 1,0 1,0 0,0 1,0 1,-1 0,0 -1,0 -1,0 -2,-1 -3,-1 -5,-1 -1,0 -2,-1 -2,-1 -1,-1 -2,-1 -3,1 0,0 -1,0 -2,0 0,0 -1,0 -2,0 -1,0 -2,0 -3,-1 -1,-2 -3,-2 -4,-2 -2,0 -3,0 -4,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 1,-1 1,-3 1,-4 0,-2 0,-3 0,-5 0,0 0,0 0,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,0 1,0 1,0 2,0 0,0 0,0 0,0 0,0 1,-1 0,-1 0,-1 -1,-3 -2,-4 0,0 0,0 -1,0 0,0 -1,0 -1,1 0,0 0,0 -1,1 0,0 -1,0 -1,-1 0,0 0,-1 -1,-2 0,0 0,-1 -1,-1 0,0 -1,0 -2,0 0,0 0,-1 0,-1 1,-1 0,-2 0,-2 1,-1 1,-1 0,-1 0,-1 -2,-2 -2,-3 0,-1 0,-1 -1,-1 -1,0 -1,-1 -2,-1 0,0 -1,0 -1,-1 0,-1 -1,-1 -2,-1 -1,-1 -2,-2 -3,-2 -1,0 -1,-1 -2,-1 0,-1 -1,-2 -2,-2 -2,-2 -4,-3 -5,-6 -1,0 -2,-1 -2,-1 -2,0 -4,0 -6,-1 0,0 0,0 -1,0 0,0 0,1 0,2 0,0 0,1 1,1 1,2 2,3 4,4 0,0 1,1 2,2 0,0 1,1 1,1 1,2 2,3 3,4 1,1 1,1 1,2 1,0 1,1 1,2 1,1 1,1 1,2 2,1 3,3 3,5 1,1 1,2 1,2 1,1 1,2 2,3 1,1 3,2 4,4 1,1 2,2 4,3 1,1 2,2 3,3 0,0 1,0 1,0 2,0 3,0 4,0 0,1 0,1 0,1 0,0 1,0 1,0 -1,1 -1,2 -2,3 0,0 0,0 1,1 1,0 2,0 2,1 0,0 1,1 2,1 1,0 2,0 3,0 0,1 1,1 2,1 2,-1 4,0 5,1 2,0 4,1 5,1 1,0 2,0 3,0zm-410 -241c0,1 0,1 -1,2 0,0 0,0 0,0 -1,1 -2,1 -3,1 0,0 0,0 -1,0 0,1 1,2 0,3 0,1 0,1 1,2 1,0 1,1 0,2 0,1 -1,1 -1,2 0,0 0,0 -1,0 0,1 0,3 1,3 1,1 2,1 4,1 1,0 1,-1 2,-1 1,-1 2,-1 4,-2 0,0 1,0 1,-1 1,-1 2,-3 1,-5 0,0 0,0 0,-1 0,0 0,-1 0,-1 1,-1 1,-1 1,-1 1,-1 1,-2 0,-3 0,0 0,-1 -1,-1 0,-1 0,-1 -1,-1 -1,0 -2,0 -3,-1 0,0 0,0 -1,1 -1,0 -1,0 -2,1zm-268 -180c1,1 2,1 3,1 1,1 1,1 1,2 1,0 2,0 2,0 1,0 2,-1 2,-1 0,-1 1,-1 1,-1 0,1 1,1 1,0 1,-1 1,-2 2,-2 1,-1 1,-2 2,-3 0,0 1,0 1,0 0,0 0,1 0,1 -1,1 -1,2 -2,3 0,0 0,1 0,2 0,0 1,0 2,0 0,0 0,0 0,-1 1,-1 2,-1 3,-1 0,0 1,0 1,-1 0,0 1,0 1,0 1,-2 2,-3 2,-4 1,-1 1,-1 1,-1 1,0 1,-1 1,-1 1,0 1,0 1,-1 0,0 0,-1 0,-1 0,-1 0,-2 -1,-2 0,0 -1,1 -1,1 0,0 -1,1 -1,0 -1,-1 -3,0 -4,-1 -1,0 -1,0 -2,1 -3,2 -6,4 -9,5 -1,0 -2,0 -2,0 -2,1 -3,1 -4,2 -1,1 -1,2 -1,3 0,0 0,0 0,0zm127 203c0,-1 0,-1 0,-1 0,-1 -1,-1 -1,-1 0,0 -1,-1 -1,0 -1,0 -1,0 -1,0 -1,1 -2,0 -3,0 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,-1 0,-2 -1,-2 0,0 0,0 -1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 1,-1 1,-2 2,-3 1,0 2,-2 2,-2 0,-1 0,-1 0,-1 0,0 0,-1 -1,0 -1,0 -2,0 -3,2 -2,2 -4,4 -5,7 -1,1 -2,2 -4,3 0,0 0,1 0,1 1,0 1,1 0,1 0,1 -1,1 -1,2 0,0 0,1 0,1 1,0 1,0 1,0 2,0 3,0 4,0 1,1 3,1 4,0 1,0 2,1 3,1 0,0 0,1 0,1 -1,0 -1,0 -1,1 -1,0 -1,0 0,1 0,0 0,0 0,0 1,0 1,0 2,-1 0,-1 2,-1 3,-2 0,0 0,0 0,0 0,1 0,1 -1,2 0,0 1,1 1,1 0,0 1,1 2,1 1,0 1,0 2,-1 0,0 0,-1 1,-2 0,-1 0,-1 -1,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 -1,-1 -2,-1 0,1 0,0 0,0 0,0 0,-1 1,-1 0,-1 0,-1 1,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0 0,0 -1,0 -1,0 0,-1 0,-1 0,-1 1,-1 1,-1 1,-1zm586 204c0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,-1 0,-1zm-6 -17c3,0 6,0 9,0 3,1 5,0 6,-3 1,0 0,-1 0,-1 0,0 -1,-1 -1,0 0,0 -1,1 -1,1 -1,1 -2,1 -3,1 -2,0 -4,0 -5,-1 -1,0 -3,0 -4,0 -1,0 -1,1 -3,1 0,0 0,1 0,1 -1,0 -1,1 -2,2 0,0 0,1 0,1 0,1 0,1 0,2 -1,1 -1,2 -1,3 0,1 -1,2 -1,3 0,0 -1,1 -1,1 0,1 0,2 1,3 0,0 0,0 1,0 0,1 1,2 0,3 0,1 0,1 0,2 0,1 0,1 0,2 1,0 2,0 3,0 1,-1 1,-1 1,-2 0,-2 0,-5 0,-7 0,0 1,0 1,0 0,-1 1,0 1,0 -1,1 0,3 1,4 0,0 0,1 0,1 0,1 1,1 2,1 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,2 1,2 0,0 0,0 0,0 1,1 2,0 2,0 0,-1 0,-2 0,-3 0,-1 0,-2 -1,-2 0,0 0,0 -1,0 0,-1 -1,-1 0,-2 0,-1 0,-1 -1,-2 0,0 -1,-1 -1,-2 0,0 0,-1 0,-1 1,0 1,-1 2,-1 1,-1 1,0 2,0 0,0 0,0 1,0 0,0 0,0 0,-1 1,0 1,-1 1,-2 0,0 -1,-1 -1,-1 0,0 -1,0 -1,0 -2,1 -3,1 -4,1 -1,0 -2,0 -3,1 0,1 -1,1 -1,1 -1,-1 -2,-2 -2,-3 0,-1 1,-3 2,-3zm-79 -403l0 0 0 0c-1,0 -1,0 -1,0 0,0 0,0 1,0zm7 3l0 0 0 0c0,0 0,0 0,0 0,0 0,0 0,0zm-15 2c1,1 1,1 1,3 0,0 1,0 1,1 1,0 2,0 2,1 1,0 2,0 3,1 0,1 1,1 2,1 1,0 1,0 2,0 0,0 1,-1 1,-1 0,0 0,-1 1,-2 1,0 1,-1 1,-1 1,-1 2,-2 4,-1 0,0 0,-1 1,-1 0,0 0,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 0,0 1,-1 1,-1 0,0 0,-1 0,-1 -1,-1 -1,-2 -1,-2 0,-2 -1,-2 -2,-2 -1,-1 -3,-1 -5,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,1 0,1 1,1 1,2 1,4 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-2 -2,-3 -2,-5 0,-1 -1,-1 -2,-1 -1,0 -1,-1 -2,-1 0,0 -1,0 -1,1 0,0 0,1 0,1 -1,1 0,2 0,3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -3,-1 -4,-2 0,-1 -1,-1 -2,-1 -1,-1 -2,0 -2,0 0,1 0,2 -1,3 0,1 0,1 0,2 1,1 1,2 2,3zm262 561c0,0 -1,0 -1,0 0,0 0,1 -1,1 -1,1 -2,1 -3,0 -1,-1 -1,-2 -1,-2 0,-1 0,-2 -1,-3 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 -1,1 -1,1 0,0 -1,-1 -1,-1 1,-2 1,-4 1,-6 0,-1 0,-2 0,-3 -1,-1 -2,-2 -3,-3 -1,0 -1,-1 -1,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0 0,0 0,1 0,1 0,1 1,2 0,3 0,1 0,1 1,2 0,1 0,3 1,4 0,1 0,2 0,3 0,1 0,1 0,2 0,0 1,1 1,1 0,1 -1,3 -1,4 -1,1 -1,2 -2,4 0,0 0,1 -1,1 -1,0 -1,0 -2,1 -1,0 -1,2 0,3 0,0 1,1 2,2 0,0 0,1 0,2 0,1 0,1 0,2 -1,1 -2,2 -3,3 0,0 0,0 0,1 1,0 1,1 2,1 0,0 0,0 0,0 2,0 2,-1 3,-2 2,-1 3,-3 4,-4 1,-1 2,-3 2,-5 0,-1 1,-1 2,-2 1,0 1,1 1,0 0,0 1,0 1,0 0,-1 1,-2 2,-3 1,0 1,-1 1,-1 0,-1 1,-2 1,-2 0,-1 0,-1 -1,-2zm-396 -572c0,1 0,1 1,1 0,0 0,0 1,0 1,1 1,1 2,1 0,0 1,0 1,1 0,0 0,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,1 -2,1 0,0 0,1 1,1 1,1 2,2 2,3 1,0 1,0 1,0 2,-1 3,-2 2,-4 0,0 0,-1 0,-1 0,0 0,0 1,0 0,0 0,0 0,0 1,0 1,1 1,2 0,1 0,1 0,2 0,1 0,1 1,1 1,0 2,1 2,2 1,1 2,1 4,1 2,0 4,1 7,1 0,0 0,0 1,0 1,0 2,-1 2,-2 1,0 1,-1 1,-1 -1,0 -1,-1 -1,-1 0,0 -1,0 -1,-1 -1,0 -1,-1 -1,-1 0,-1 -1,-2 -1,-3 0,-2 -2,-3 -4,-4 0,-1 -1,-1 -2,0 -1,0 -1,0 -2,-1 -1,0 -2,0 -3,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -2,1 -2,2 0,0 -1,0 -1,0 0,0 0,0 0,-1 1,0 2,-1 3,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 -1,-3 -1,-1 -2,-2 -2,-3 0,-1 0,-1 -1,-1 -1,0 -3,-1 -4,-3 0,0 -1,0 -1,-1 -1,0 -2,0 -2,1 0,1 0,2 -1,3 -1,1 -1,3 -1,4 1,2 1,3 1,4zm-245 154c2,-1 4,-2 6,-2 0,0 1,-1 1,-1 1,-1 2,-2 3,-2 1,0 1,0 2,-1 0,0 1,-1 1,-1 0,-1 0,-1 0,-1 0,-1 0,-2 1,-3 0,0 0,0 0,-1 0,0 0,0 0,0 -1,0 -1,0 -2,-1 0,0 0,-1 0,-2 0,0 -1,-1 -1,-1 0,-1 0,-1 -1,-1 0,1 -1,0 -1,0 -1,-1 -2,-1 -2,0 -2,1 -3,2 -4,1 -1,0 -2,0 -2,0 -1,0 -2,0 -3,1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 -1,0 -1,1 -1,0 -1,1 0,1 0,1 -1,1 -1,2 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 -1,-2 0,-1 0,-2 -1,-2 0,0 0,-1 -1,-1 0,-1 -1,-1 -2,0l0 0 0 0c0,0 0,0 0,0l0 0c-1,0 -2,0 -2,1 -1,1 -1,2 -2,3 0,0 0,1 1,1 0,0 1,0 1,0 1,-1 2,0 3,0 0,0 0,0 0,1 0,0 -1,1 -2,1 0,0 -1,0 -2,1 0,0 -1,0 -1,0 0,0 1,1 1,1 0,0 1,0 2,0 0,0 1,1 1,1 0,0 1,1 1,2 0,0 0,0 0,0 -1,1 -1,1 -1,1 -1,0 -1,0 -1,1 0,1 0,1 1,1 1,0 1,0 2,0 1,0 2,0 3,1 2,1 3,1 4,1 1,1 1,1 2,0zm621 436c-1,0 -1,0 -2,0 -1,0 0,-1 -1,-2 0,0 0,0 0,0 0,-1 -1,-1 -2,-1 0,1 0,1 0,1 -1,2 -2,4 -4,5 -1,1 -1,1 -1,2 -1,0 -1,1 -1,1 -1,2 -2,3 -3,4 -2,0 -4,1 -5,2 -1,1 -2,2 -4,2 0,0 -1,1 -1,1 -2,2 -4,3 -6,5 -1,2 -2,4 -3,5 0,1 0,2 0,2 2,1 3,1 4,2 0,1 0,1 0,1 1,1 3,1 4,0 2,0 3,-2 5,-3 1,-1 1,-2 2,-3 0,-1 1,-1 1,-2 1,0 1,-1 2,-2 1,-3 1,-2 4,-4 1,0 1,0 2,0 1,0 2,-1 1,-2 0,-1 0,-2 2,-3 0,0 1,0 1,-1 1,-2 3,-3 5,-5 0,0 0,-1 0,-1 0,-1 0,-2 0,-2 1,0 1,0 1,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,0zm-834 -557c-1,0 -2,0 -3,-1 0,0 -1,0 -1,0 1,-2 0,-3 1,-4 0,-1 0,-2 -1,-3 0,-1 0,-1 -1,-1 -1,-1 -1,-1 -1,-1 0,-2 0,-2 -1,-2 -1,-1 -2,-1 -3,0 -1,1 -2,1 -3,2 -1,0 -1,1 -2,1 1,1 0,1 -1,2 0,0 -1,1 -1,1 -1,0 -1,1 0,1 0,0 1,0 1,1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,0 -3,0 -1,0 -2,1 -2,2 0,1 0,1 1,2 0,0 1,0 1,1 2,1 3,2 5,1 0,0 0,0 1,0 1,1 2,1 3,1 0,0 0,0 0,0 0,0 0,0 0,0 -2,0 -4,1 -6,1 0,0 -1,0 -1,1 0,1 1,2 2,3 0,0 1,0 1,0 1,0 2,0 3,0 1,0 3,0 4,-1 1,0 1,0 2,0 1,0 2,0 3,-1 0,0 1,0 1,0 1,1 2,1 3,1 0,1 1,1 2,1 0,0 1,-1 1,-1 1,0 2,0 2,-1 2,-1 3,-2 4,-4 1,0 1,0 1,-1 1,-1 0,-2 -1,-3 0,0 0,0 -1,0 0,0 -1,0 -1,1 0,0 0,0 -1,0 0,-1 -1,-1 -1,-2 0,-1 -1,-1 0,-2 0,0 1,-1 1,-1 0,-2 0,-3 0,-4 1,0 0,-1 0,-1 0,0 -1,0 -2,0 -1,1 -2,2 -3,2 0,1 -1,2 -1,2 1,1 1,1 1,1 0,1 0,2 -1,2 0,0 0,0 0,0 -1,1 -1,1 -1,2 0,0 0,1 0,1 0,0 0,1 -1,1zm70 18c0,0 -1,-1 -1,-1 0,-1 -1,-2 -2,-1 -1,0 -2,0 -4,-1 0,0 0,0 -1,0 -2,0 -3,0 -5,0 -1,1 -2,1 -3,0 0,-1 -1,-1 -1,-1 -2,-1 -3,-1 -4,-3 0,-1 -1,-1 -1,-1 -1,-1 -1,-1 0,-1 0,0 1,-1 1,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 1,0 2,0 2,0 1,0 1,-1 1,-1 0,0 0,0 -1,0 0,-1 -1,-2 -1,-3 1,-1 0,-2 -1,-2 -1,0 -1,0 -2,0 -1,0 -1,0 -1,-1 -1,0 -1,-1 -1,-1 0,-1 0,-1 0,-1 -1,-1 -2,-2 -4,-3 -1,0 -2,0 -3,1 0,0 -1,1 0,1 0,2 0,3 1,5 0,0 0,1 0,1 1,0 2,1 3,1 2,0 2,1 2,1 0,1 -1,2 0,3 0,1 -1,2 -2,2 0,1 -1,2 -1,2 -1,2 -2,4 -1,6 0,1 1,1 2,2 0,0 0,0 0,0 1,1 2,1 3,0 0,0 1,0 1,0 0,0 0,0 0,1 0,0 0,0 0,1 0,0 1,1 1,1 2,0 3,1 4,1 3,0 5,1 8,1 1,0 1,0 2,1 0,0 1,0 3,0 0,0 1,0 2,0 1,0 1,0 1,0 1,-1 2,-2 3,-2 0,0 0,-1 0,-1 0,-1 0,-1 1,-2 1,-2 1,-3 -1,-4zm228 -10l1 0 -1 0 0 0 0 0zm1 13l0 0 0 0 0 0zm-10 -11c0,1 1,2 1,3 1,0 2,1 2,2 1,1 2,2 3,3 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 2,-2 0,0 0,-1 0,-2 0,0 0,0 1,0 0,0 0,0 0,0 1,1 1,1 2,1 0,0 1,0 1,0 0,0 0,0 0,0 -1,1 -2,1 -3,2 -1,1 -2,1 -3,1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,2 0,2 0,1 1,1 1,1 1,1 1,1 2,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,1 0,1 0,1 0,2 1,2 3,3 5,4 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,1 0,1 0,1 1,2 2,2 0,1 1,1 1,0 0,0 1,0 1,-1 0,-1 0,-3 0,-5 0,-1 1,-2 1,-3 0,0 1,-1 1,-1 0,-2 1,-4 1,-7 0,0 0,0 0,0 0,-1 1,-2 2,-2 0,-1 0,0 0,0 0,0 0,1 0,1 1,2 1,3 2,5 1,1 1,1 1,2 -1,1 -1,1 -1,2 0,0 1,1 1,1 1,0 1,-1 2,-1 1,0 1,0 1,1 0,0 0,0 0,0 0,1 1,1 1,1 2,-2 3,-3 3,-5 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -2,-1 -2,-2 0,-1 -1,-2 -2,-1 -1,0 -1,0 -1,-1 0,0 1,-1 1,-1 0,-1 -1,-1 -1,-2 -1,0 -2,0 -2,-1 -1,-1 -2,-1 -2,-2 0,-1 0,-1 -1,-1 0,0 -1,0 -1,0 -1,-1 -2,-1 -3,-2 0,-2 0,-2 -1,-3 -1,0 -1,-1 -1,-1 -1,-1 -1,-1 -2,-2 0,0 -1,0 -1,0 -1,-1 -1,0 -2,0 0,1 0,2 0,3 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,-1 -2,0 -3,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 -1,-1 -1,0 -2,0 -3,0 -1,0 -2,1 -2,2 0,0 0,0 0,1 -1,1 -1,3 1,4 0,0 0,0 0,1zm-321 7c0,0 0,0 0,0 0,0 1,-1 2,-1 1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -2,1 -1,0 -1,0 -2,0zm4 -1c1,0 2,0 2,0 0,0 0,0 0,0 0,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0zm98 -30c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,-1 1,-1 2,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,2 0,2 1,2 0,0 0,0 1,0 0,0 0,0 0,0l0 0c-1,0 -1,0 -2,1 -1,0 -2,0 -2,0zm4 -1c0,-1 0,-2 1,-3 1,0 2,-1 2,-2 0,-1 0,-2 -1,-4 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 1,-2 2,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,2 0,2 0,1 0,2 0,4 0,0 0,1 -1,2 0,1 0,1 0,1 -1,0 -1,1 -1,2 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,0 1,0 1,0 1,0 1,1 1,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 -1,0 -1,1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 -1,-1 -1,-1 0,0 0,0 0,0l-2 0c0,0 0,0 0,0 0,0 0,0 0,0zm650 222l1 0 0 0 -1 1 0 -1zm-324 -157c-1,1 -1,2 -2,4 0,0 0,1 0,2 1,0 1,0 1,1 1,0 0,2 -1,2 0,0 -1,1 -1,1 0,1 0,2 0,3 1,1 1,1 2,2 0,0 1,0 1,0 0,0 1,0 2,0 0,-1 1,0 2,1 0,0 0,0 0,1 0,1 1,2 2,2 1,0 2,1 2,1 1,0 2,0 2,0 1,0 1,0 2,0 0,0 0,0 0,0 1,0 2,0 2,0 1,0 1,0 1,0 0,-1 0,-1 0,-1 1,-1 0,-1 0,-2 -1,0 -2,-1 -3,-1 -2,-2 -3,-4 -4,-7 0,-1 -1,-2 -1,-3 0,-2 0,-4 0,-5 0,-1 1,-2 1,-3 0,0 1,-1 1,-1 0,-3 0,-5 1,-7 0,-1 0,-2 1,-3 1,0 2,-1 2,-3 1,-1 2,-3 3,-4 1,-2 2,-3 3,-4 2,-1 3,-3 5,-4 1,0 1,-1 2,-1 1,-1 2,-2 1,-4 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 0,-1 -1,-1 -1,-1 -1,-1 -2,-1 -3,0 -2,0 -3,1 -3,3 0,1 -1,2 -2,3 -1,1 -3,1 -4,1 -3,0 -4,2 -6,4 0,0 0,0 0,0 0,1 -1,1 -1,1 -1,1 -1,1 -1,1 -1,1 -1,2 -1,2 0,1 -1,2 0,2 0,1 -1,1 -1,1 0,0 0,0 0,0 -1,0 -1,1 -2,2 0,0 0,0 -1,0 0,0 -1,1 0,1 0,1 1,2 1,3 0,1 0,2 0,3 0,1 0,1 -1,2 0,1 -1,2 -1,2 -1,1 0,2 0,2 1,1 1,2 1,3zm239 326c1,1 1,3 1,4 0,1 1,2 2,2 0,0 0,1 0,1 0,1 1,2 1,3 0,1 1,2 2,2 1,0 1,0 2,0 1,0 1,0 2,1 0,1 1,1 1,1 1,-1 2,-1 3,-1 0,0 0,0 1,0 1,0 2,1 3,1 0,0 0,1 1,1 0,1 0,1 1,1 1,-1 2,-1 2,-1 1,0 1,0 2,0 0,0 1,0 1,-1 0,0 0,0 0,0 -1,-1 -1,-2 0,-3 0,0 0,-1 0,-2 0,-1 1,-2 1,-3 2,-1 2,-3 3,-4 0,-1 0,-2 1,-2 0,-1 0,-1 1,-1 0,0 1,0 1,0 0,0 1,-1 1,-1 0,0 0,0 0,-1 0,-1 -2,-1 -2,-2 -1,0 -1,-1 -1,-1 1,-1 1,-2 0,-2 -1,-1 -1,-3 0,-5 0,0 1,-1 1,-1 1,0 1,-1 1,-1 0,-1 0,-1 1,-1 0,0 1,0 1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 -1,0 -2,-1 -3,-1 -1,-1 -2,-1 -2,-3 0,0 -1,-1 -1,-1 -1,-1 -1,0 -2,0 0,0 -1,0 -1,1 -1,0 -1,1 -1,2 -1,0 -1,1 -1,1 -1,1 -2,2 -3,2 -2,1 -3,2 -4,3 0,1 -1,2 -1,2 -1,2 -2,3 -4,3 -2,0 -2,1 -3,3 0,0 0,1 -1,1 0,1 0,1 -1,1 -1,-1 -2,-1 -3,-1 -1,-1 -1,0 -2,0 0,1 0,1 0,1 -1,1 -1,3 -1,4zm-596 -325l0 1 0 0 0 -1zm15 -5c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm26 20c0,0 0,0 0,1 0,0 0,0 0,1 0,0 0,0 0,0l-1 0 1 0c0,0 0,0 0,0 0,-1 -1,-1 -1,-1 0,-1 1,-1 1,-1zm-20 36c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 1,-2 0,-1 0,-1 0,-1 1,0 1,0 1,1 0,0 0,0 0,1 0,0 -1,1 -2,1zm31 -117l0 0 0 0 0 0zm-12 -20c0,0 0,0 0,0 0,0 0,0 0,0l0 0 0 0zm44 5c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 1,0 1,0zm-51 33c0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,1 0,-1 0,-1 0,-1 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm-5 -10l0 0 0 0 0 0 0 0zm-2 7c0,0 0,0 0,0 0,0 0,0 0,0l1 0 -1 0zm125 68l0 -1 0 1 1 0 -1 0zm-1 6l0 0 0 0 0 0zm-11 -110c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0zm-1 -1c0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-21 141c0,0 0,0 -1,0 1,0 1,-1 1,-1 0,0 0,1 0,1 0,0 0,0 0,0zm62 -105c0,-1 0,-1 0,-1 0,0 0,0 1,0 0,1 0,1 0,1 -1,0 -1,0 -1,1 0,0 -1,-1 0,-1zm3 -2c0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 0,-1 1,-1zm-350 173c0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 1,1 1,1 2,1 0,1 0,2 1,3 0,1 0,2 -1,2 0,1 0,1 0,1 0,0 -1,0 -1,0 -1,0 -3,0 -4,-1l1 0c0,0 0,0 0,0 0,0 0,0 1,0 0,0 1,0 1,-1 0,-2 0,-3 -1,-5zm228 270l0 0 0 0 0 0zm-2 -48c0,0 -1,0 -1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,1 0,0 0,0 0,0zm-1 -9c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-5 -4c0,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 0,1 1,0 1,0 1,0 1,0 1,0 1,0 0,0 0,0 -1,1zm-16 -20c0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 -1,0zm-19 128c0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,1 0,0 -1,0 -1,0zm-6 -136l0 0 0 1 0 -1zm-3 240c0,0 0,0 0,0 0,1 1,1 1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0zm2 -3c1,0 1,0 1,0 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,-1 0,-1zm-6 -2c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,0 -1,0l0 0 0 0c0,0 0,0 1,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0zm-2 3c0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 -1,0 -1,0 -1,0zm0 -5c-1,0 -1,1 -1,1 0,0 0,0 0,0 -1,-1 -1,-1 0,-1 0,0 0,0 1,0 0,0 0,0 0,0zm-3 -4c0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0zm-7 -147c0,0 0,0 0,0 -2,0 -2,-1 -3,-2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,1 3,2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-1 132c0,0 -1,0 -1,0 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,0 0,1 0,1zm-9 -221c0,0 0,0 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-2 1,-3 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 1,1 0,1 0,1 -1,2zm-46 -7c0,0 0,0 0,0 -1,0 -2,-1 -2,-1 0,0 0,-1 1,-1 0,0 1,1 1,1 0,0 0,1 0,1zm-43 -213c0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,-1 1,-1 1,-1 3,-2 4,-3 0,0 1,0 1,0 1,1 1,1 2,1 1,0 1,1 1,1 0,0 0,0 -1,0 0,0 -1,0 -2,1 0,0 0,-1 0,-1 -1,0 -1,0 -2,0 -1,0 -2,1 -3,2 0,0 0,0 -1,1zm0 17c0,0 0,0 -1,-1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,1zm-3 -36c-1,1 -1,1 -2,2 -1,0 -3,0 -4,0 -1,0 -2,0 -2,-1 -1,0 -1,-1 -2,-1 0,0 0,-1 0,-1 0,0 1,0 1,0 0,0 1,1 1,1 1,0 1,0 1,-1 1,0 2,-1 2,-1 1,-1 1,-1 2,-1 1,0 1,0 1,0 1,0 1,-1 1,-1 0,-1 0,-1 0,-2 0,0 0,-1 -1,-2 0,0 0,-1 1,-1 0,0 0,0 0,0 1,1 2,3 3,4 0,1 1,1 1,1 2,0 4,0 5,-2 2,-1 3,-1 5,-1 1,-1 1,0 2,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 -1,0 -1,1 -1,0 -1,0 -2,1 -1,0 -3,1 -4,2 -1,1 -3,2 -4,3 -1,0 -1,0 -1,0 -1,-1 -2,0 -3,0zm-2 19c0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1zm-6 -13l0 0 0 0 0 0zm3 -21c0,0 -1,0 -1,0 -1,0 -1,-1 -2,-2 0,0 1,0 1,0 0,-1 1,-1 1,0 0,0 0,1 1,2zm3 -13c0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm-10 -3c-1,1 -2,1 -3,0 -1,0 -1,0 0,0 0,-1 1,-1 1,-2 1,0 2,-1 3,-1 0,-1 1,-1 1,-2 0,0 0,0 0,0 1,0 2,0 2,0 1,0 1,-1 1,-1 0,-1 -1,-1 -1,-1 -1,-1 -2,-1 -3,-1 -2,0 -3,0 -5,0 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 1,0 2,0 4,-1 6,-1 1,0 3,0 4,0 2,-1 3,-1 4,-1 1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -2,1 -3,1 -1,0 -1,1 -1,1 0,0 0,1 0,1 1,0 1,0 1,0 2,2 4,2 6,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,1 -1,1 -2,1 -2,2 0,0 0,0 -1,1 0,1 -1,1 -2,0 -1,-1 -2,-1 -3,0 0,0 -1,0 -1,1 0,1 -1,2 -2,2 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 -2,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 0,-2 1,0 0,-1 -1,-1 -1,0 -1,1 -2,1 -1,0 -1,1 -2,1zm0 28c0,0 0,0 -1,0 1,0 1,0 1,0l0 1 0 -1zm-4 -45c0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0l0 0 0 0zm32 15c0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,-1 0,-1zm-2 33l0 0 0 0 0 0zm-2 28c0,0 0,0 0,0 0,0 0,0 0,0 0,-1 1,-1 1,-1 1,0 1,0 1,1 -1,0 -1,0 -2,0zm0 14c0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,0 1,0 1,0 -1,1 -1,1 -2,1zm-30 -112c0,0 0,0 0,0 -1,0 -3,0 -4,0 0,0 0,0 0,0 -1,1 -1,1 -1,1 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 0,0 0,0 1,-1 0,0 0,0 0,0 1,0 3,0 4,0 0,0 0,0 0,0zm0 105c-1,0 -1,0 -1,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0zm-7 -33l0 0 0 0 0 -1 0 1zm-1 -69c0,0 0,0 -1,0 1,0 1,0 1,0l0 0 0 0zm-6 2c0,0 0,0 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,1 0,2 0,2 0,1 0,1 0,1zm-37 87c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 1,1 0,0 -1,0 -1,0zm-1 3c0,0 0,0 -1,0 0,-1 0,-1 0,-2 -1,0 -1,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,1 1,2 1,2 0,1 0,1 0,1zm0 -22c0,0 -1,0 -1,0 0,0 0,0 0,-1 0,0 0,0 1,1 0,0 0,0 0,0zm-1 5c0,0 0,0 0,0 0,0 0,0 -1,0 0,0 1,-1 1,-1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-2 6l-1 0 0 0c1,0 1,0 1,0 0,0 0,0 0,0zm92 -34c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 0,0zm2 -8l0 0 0 0 0 0zm0 62c1,0 1,0 2,0 0,0 0,0 0,0 0,0 1,-1 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,-4 -1,-4 3,-6 0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,0 0,0 -1,1 -2,1 -2,2 -1,1 -1,2 -1,2 0,1 -1,1 -1,1 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0 -1,0 -1,1 -1,1 -1,0 -1,0 -1,0 0,-1 0,-1 0,-1zm2 -50c0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0zm0 40c1,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,1 0,0 -1,1 -2,1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,-1 0,-1zm3 -38c0,-1 0,-1 0,-1 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0zm1 83c0,0 0,0 0,0 0,0 -1,0 -1,0 0,-1 0,-2 -1,-3 0,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,2 1,3 0,0 0,0 0,1zm-2 -12c0,1 -1,2 -1,2 0,0 0,1 0,0 -1,0 -1,0 -1,0 0,0 0,0 1,0 0,-1 0,-2 0,-3 0,-1 -1,-1 -2,-1 0,0 0,0 0,0 0,-1 0,-1 1,-1 0,0 0,0 0,0 1,0 1,0 2,1 0,-1 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,-1 -1,-2 -1,-1 -1,-2 0,-3 0,0 0,0 0,-1 1,0 1,1 1,1 1,0 1,1 2,1 0,0 0,0 0,0l0 0 0 1c0,0 0,0 0,-1 -2,1 -1,2 0,3 0,1 0,1 -1,1 0,0 -1,0 -1,0 0,0 0,0 0,1 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,1 0,1zm5 -5c0,0 0,-1 0,0 1,0 2,0 2,1 1,1 1,2 1,3 -1,1 0,3 -1,4 1,0 1,1 1,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 -1,0 -1,-1 -1,-2 -1,0 -1,0 -1,-1 0,-1 0,-2 0,-3 0,0 0,-1 0,-1 0,-1 0,-2 1,-2zm3 -4c0,0 0,0 0,0 0,1 0,1 0,1 0,0 -1,0 -1,0 0,-1 0,-1 1,-1zm0 17c0,1 0,3 -1,3 0,0 0,1 0,1l-1 0 1 0c0,-1 0,-1 0,-1 -1,-1 0,-2 1,-3 0,0 0,0 0,0 0,0 0,0 0,0zm1 -32c0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 1,-1zm1 14l0 0 0 0 0 0zm1 29c0,-1 0,-1 0,-2 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 -1,0 0,0 0,0 0,0 1,1 1,1 1,2 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,0 -1,-1 0,-1zm1 -44l0 0 0 0 0 0zm2 -32l0 0 0 0 0 0zm1 14c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 1,-1zm1 -20c0,-1 1,-1 1,-1 1,0 1,1 1,1 -1,1 -1,2 -1,3 0,1 -1,1 -2,0 -1,-1 -1,-2 1,-3zm2 58c-1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm4 32c2,0 4,-1 5,-2 1,-1 3,-1 4,-2 1,-1 1,-1 2,0 0,0 1,0 1,0 2,0 3,1 3,3 0,0 1,1 2,1 1,0 1,1 1,2 0,1 0,2 0,4 0,0 0,1 -1,0 0,0 -1,0 -1,0 -1,0 -3,0 -4,0 -1,0 -2,0 -3,-1 0,0 0,0 -1,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,-1 1,-1 0,-1 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 -1,0 -1,1 -3,2 -5,3 -1,0 -2,0 -3,-1 0,-1 -1,0 -2,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,0 0,0 0,0 1,-1 3,-2 4,-3zm-3 -14c0,0 0,0 0,0 0,0 0,0 0,0 1,0 2,0 2,0 1,1 1,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -2,-1 0,0 0,0 0,0 0,0 0,0 0,0zm1 -23c1,0 1,0 1,0 0,0 0,1 0,1 0,0 -1,0 -1,0 0,-1 0,-1 0,-1zm2 -51c0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1zm3 3c0,0 0,0 0,0 1,0 1,0 1,0 0,1 0,1 0,1 0,1 0,1 -1,1 0,-1 0,-1 0,-1 -1,0 -1,-1 0,-1zm2 68l0 0 0 0 0 0zm4 6c0,0 0,0 0,0 1,0 1,0 1,1 0,0 0,1 0,1 0,0 0,1 -1,1 0,0 0,0 0,-1 -1,-1 -1,-1 0,-2zm10 -17c0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,1 -1,1 0,0 0,0 0,0l0 0 0 0zm1 36c3,1 6,1 8,2 1,0 1,1 1,1 1,1 2,2 2,3 0,1 0,1 0,2 0,0 -1,0 -1,0 -1,0 -2,-1 -2,-2 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,1 0,1 0,2 -2,1 -2,3 -3,5 0,1 0,1 0,1 -1,0 -1,0 -1,0 0,-1 -1,-2 -1,-3 0,0 -1,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 1,-1 1,-2 1,-1 1,-2 0,-3 0,-1 0,-1 0,-2 -1,0 -2,-1 -2,-1 -1,0 -1,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -2,1 -2,2 0,1 -1,1 -2,1 -1,0 -1,1 -2,2 -1,2 -2,4 -2,7 0,3 -1,4 -3,6 0,0 -1,0 -1,-1 -1,-2 -1,-5 0,-7 1,-1 1,-3 2,-4 0,-1 0,-1 0,-2 0,0 0,0 0,-1 0,0 0,0 0,0 3,-4 3,-3 7,-4 1,0 2,0 3,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 2,-1 0,0 0,0 1,0 0,0 0,-1 0,-1zm12 17c0,0 0,1 0,1 -2,1 -3,1 -5,2 -1,0 -2,1 -3,1 -1,1 -2,1 -4,1 0,0 -1,0 -1,0 0,-1 0,-2 0,-2 0,0 0,0 0,0 2,0 4,-1 6,-2 0,-1 1,-1 2,0 0,0 1,0 2,-1 1,0 1,0 2,0 0,0 1,0 1,0zm1 -4c0,0 0,0 0,0 0,0 1,-1 2,-1 1,0 2,0 4,0 1,0 1,0 2,-1 0,0 1,0 1,0 0,0 0,0 0,0 1,1 0,2 0,2 -1,2 -2,2 -4,2 -1,-1 -3,0 -5,-1 0,0 -1,0 -1,0 0,0 0,-1 1,-1zm2 -24c0,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0zm-30 -94c0,0 0,0 1,0 -1,0 -1,0 -1,0 0,0 0,0 0,0zm8 3c0,0 0,0 1,0 0,0 1,0 1,1 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 2,0 0,0 0,0 0,0l0 1 0 0c0,0 0,0 0,-1 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -2,-1 0,0 0,0 0,0zm22 -7c0,0 0,0 0,0 1,1 2,2 3,4 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 -1,-1 -1,-2 -2,-3 0,0 1,-1 1,-1zm16 100c0,0 1,0 1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0zm8 -12c0,0 0,0 0,0 0,0 0,1 0,1 -1,0 -1,0 -2,1 0,0 0,-1 0,-1 0,0 1,-1 2,-1zm6 -20c1,1 0,1 0,1 0,0 0,0 0,0 0,0 0,-1 0,-1zm8 5c0,-1 0,-1 0,-1 1,0 1,0 1,0 0,1 0,1 0,2 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 -1,-1 0,-1zm2 -2c0,0 1,0 1,0 0,1 0,1 0,1 0,0 0,0 0,-1 -1,0 -1,0 -1,0zm10 11l0 0 0 0 0 0zm1 -7c1,0 2,0 2,0 2,-1 3,0 4,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 -1,1 -1,1 -1,-1 -2,-1 -3,-1 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,-1 0,-1 0,-1zm1 8l0 0 1 0 -1 0zm18 -5c0,0 0,0 0,0 0,1 -1,1 -2,2 0,-1 0,-1 0,-1 0,-1 1,-1 2,-1zm-61 -76l1 -1c0,1 -1,1 -1,1 0,0 0,0 0,0zm-14 -31c0,0 1,0 1,0 1,0 2,1 2,1 1,1 1,1 1,1 0,0 -1,0 -1,0 0,0 -1,0 -1,1 -1,0 -1,1 -2,2 0,0 0,1 1,1 0,0 0,0 1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,1 0,1 -1,2 0,0 -1,1 -2,2 -1,0 -2,1 -3,1 -1,0 -2,1 -2,2 -1,1 -1,2 -1,3 0,0 0,0 0,1 0,0 0,-1 0,-1 -1,0 -1,-1 -1,-1 -1,-1 -1,-1 0,-2 0,-1 1,-2 2,-3 0,0 0,-1 0,-1 -2,0 -2,-1 -2,-2 0,0 -1,0 -1,0 0,0 1,0 1,0l0 0c0,0 0,0 0,0l0 0c0,0 1,0 1,0 1,1 1,1 2,0 1,0 2,0 2,-1 1,0 1,0 1,0 0,-1 0,-2 0,-3 0,-1 0,-1 1,-1 1,-1 1,-1 1,-2 0,0 0,0 0,0 0,0 0,0 0,0zm569 110c0,1 0,1 -1,1 0,0 0,-1 0,-1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,0zm-4 -29c0,0 0,0 1,0 0,0 0,0 0,0 0,0 -1,0 -1,0zm0 4c0,0 0,0 0,0 -1,0 -1,-1 -2,-2 0,0 0,0 0,0 0,-1 1,-1 1,-1 0,1 0,1 0,2 1,0 1,0 2,1 0,0 0,0 -1,0zm-16 37l0 0 0 0 0 0 0 0zm-2 5c0,0 0,1 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,-1 0,0 0,0 0,0 1,0 1,-1 1,0 0,0 0,0 0,0zm-1 -10c-1,1 -1,0 -1,0 -1,0 -1,-1 -1,-1 0,0 1,-1 1,-1 0,0 1,0 1,1 0,0 0,0 0,1 0,0 0,0 0,0zm-22 -150c-1,0 -1,0 -1,0l0 0 0 0c0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 0,-1zm0 163c-1,1 -1,1 -2,1 -1,-1 -2,-1 -3,-2 -1,0 -1,-1 -1,-1 0,-1 0,-1 1,-1 0,-1 0,0 0,0 1,1 2,2 3,2 0,0 1,0 1,1 1,0 1,0 1,0 0,0 0,0 0,0zm-6 -179l-1 0 1 0 0 0zm-6 1c-1,0 -2,1 -3,2 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 1,-1 0,-1 1,-2 1,-2 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -2,-1 -2,-2 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,1 1,2 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,0 1,0 1,0 1,0 1,1 0,0 0,0 0,0zm-5 3c0,0 0,0 0,0 0,1 -1,2 -1,3 0,0 0,0 -1,0 -1,0 -1,1 -1,2 0,0 0,0 0,0 1,0 1,0 1,1 0,0 1,0 1,0l0 1 0 -1c0,0 -1,0 -1,0 0,-1 0,-1 -1,-1 0,0 0,0 0,0 0,-1 -1,-1 -2,-2 0,0 0,-1 -1,-2 0,0 0,-1 0,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 1,0 1,1 1,1 1,0 2,0 3,0 1,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-9 -24l0 0 0 0 0 0zm-5 208c-1,1 -2,2 -2,4 0,0 0,0 -1,0 0,0 0,0 0,-1 0,0 0,0 0,0 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 0,0 1,0 1,0 0,0 1,1 1,1 -1,0 -1,1 -1,1zm-1 -42c0,0 0,0 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 1,-1zm0 -152c0,0 1,0 1,1l0 0 0 0c-1,0 -1,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 0,0zm-17 57c-1,1 -1,1 -1,0 0,0 0,0 0,0 0,0 0,-1 1,-1 0,1 0,1 0,1 0,0 0,0 0,0zm-2 162l-1 0 1 0 0 0zm-7 -142c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-1 -3c0,0 0,0 0,0 -1,-1 -2,-3 -3,-4 0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,1 2,1 0,0 1,1 1,2 1,0 1,1 0,2zm-17 131c0,0 -2,1 -3,1 -1,-1 -1,-1 -2,-1 -1,0 -1,-1 -1,-2 0,-2 2,-5 5,-4 0,0 1,0 1,1 0,0 1,1 1,1 -1,1 -1,3 -1,4zm-7 -142l0 0 0 0 0 0zm-9 175c-2,1 -4,1 -6,1 0,0 0,0 -1,0 -2,0 -4,0 -5,-2 -1,0 -1,-1 -2,-1 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,-2 -2,-3 -1,-5 0,-1 1,-2 1,-3 0,-2 1,-2 2,-3 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,-1 -2,-2 -3,-3 -1,-1 -2,-2 -3,-3 -2,-2 -3,-3 -3,-5 -1,-2 -1,-4 -3,-5 -1,0 -1,-1 0,-2 0,-1 0,-2 0,-2 1,-1 1,-2 2,-2 1,0 2,-1 3,-3 0,0 1,0 1,0 2,-1 3,-2 5,-3 0,0 1,0 1,0 1,0 3,0 4,0 1,0 1,1 2,1 0,1 0,2 0,2 0,1 0,2 0,3 0,0 -1,0 -1,0 -1,1 -1,1 -2,1 -2,0 -2,0 -2,2 0,1 0,1 -1,2 0,0 0,0 0,0 -1,0 -2,0 -1,1 1,1 2,2 2,3 1,2 3,3 5,3 1,1 1,1 1,2 0,0 0,0 0,1 0,1 0,2 1,3 1,1 1,2 1,4 0,0 0,1 0,1 0,1 1,2 2,2 0,0 0,0 1,0 0,1 0,1 0,2 -1,0 -1,0 -1,0 1,0 1,1 1,1 1,1 2,2 2,3 0,2 0,4 1,6 0,0 0,0 0,0zm-28 -82l0 0 0 0 0 0zm-16 65c-1,0 -1,0 -2,0 -1,1 -2,1 -3,1 -1,-1 -2,0 -3,0 -1,0 -2,0 -3,0 -1,-1 -3,-1 -4,-2 -1,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,0 -3,-1 -4,-1 -3,0 -6,0 -8,1 -1,1 -2,1 -3,2 0,1 -1,1 -2,1 -1,-1 -3,0 -4,0 -2,0 -4,-1 -5,-3 0,-1 0,-1 -1,-2 0,0 0,-1 0,-1 0,-1 1,-2 1,-3 1,-1 1,-1 1,-2 0,-1 1,-2 1,-3 0,0 0,-1 1,-1 1,0 1,-1 1,-2 0,-1 1,-1 1,-2 1,-1 2,-2 2,-3 1,-1 2,-1 2,-1 0,0 1,0 1,0 1,2 3,2 5,2 0,0 0,1 0,1 0,1 -1,1 -1,1 0,1 0,1 0,1 0,0 1,1 1,1 1,0 1,1 1,2 0,1 1,1 2,1 1,0 1,-1 1,-1 1,0 2,-1 3,-1 1,-1 2,-1 3,-1 0,0 0,0 1,0 0,0 0,-1 0,-1 0,-1 -1,-1 -1,-1 0,0 0,0 0,0 -3,0 -3,0 -5,-2l-1 0 1 0c0,0 0,0 0,0l0 0c1,-1 2,-2 4,-2 1,-1 2,-1 2,-2 2,-1 3,-1 5,-1 0,0 1,0 1,0 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 -1,1 -1,1 -2,2 -1,0 -1,1 0,1 0,1 0,1 0,2 -1,1 -1,2 -3,3 0,0 0,0 0,1 1,1 2,2 3,2 2,1 4,1 5,3 2,1 3,2 5,3 2,1 3,3 4,5 0,1 -1,2 -1,3zm-40 4c0,0 -1,0 -1,0 0,1 -1,0 -1,0 0,0 0,0 -1,0 0,0 0,0 -1,0 0,0 -1,0 -1,0 1,-1 1,-1 1,-1 1,-1 2,-1 4,-1 0,0 1,1 0,2zm-5 -96c-1,0 -1,0 -1,0 1,-1 1,-2 2,-3 0,0 0,0 0,0 1,0 1,0 1,0 1,1 2,2 3,2 0,1 0,1 0,1 2,2 2,4 0,5 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,-1 -2,-3 -3,-5zm0 -26c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 -1 0 1zm1 -12c0,0 0,-1 0,-1 0,1 0,1 0,1 0,0 0,0 0,0 0,0 0,0 0,0zm9 23c0,0 0,0 0,0 0,0 0,1 1,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 0,-1zm4 73c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-2 -64c0,0 1,0 1,-1 0,0 1,0 1,0 0,0 0,0 0,0 0,2 1,3 2,4 0,1 0,1 1,2 -1,0 -1,1 -1,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 -1,-2 -2,-3 -1,0 -1,-1 -2,-2 0,0 0,-1 1,-1zm10 71c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-1 -61c0,0 1,0 1,0 0,0 0,1 0,1 -1,0 -1,-1 -1,-1 0,0 0,0 0,0zm3 7c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,1 1,0 2,1 2,2 0,0 0,0 0,1 -1,0 -1,0 -2,-1 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0 -1,0 0,0 0,0zm3 232c1,0 2,0 2,1 0,0 0,1 0,1 0,1 -1,3 -2,4 -1,0 -1,1 -1,1 0,1 0,1 0,1 0,0 -1,1 -1,1 0,0 -1,0 -1,0 0,0 0,0 -1,0 0,0 -1,0 -1,0 -1,0 -1,-1 -1,-1 0,0 0,-1 0,-1 1,-1 1,-3 1,-5 0,0 0,0 0,-1 0,0 0,-1 1,-1 1,0 2,0 4,0zm-1 -5l0 1 0 0 0 -1zm4 42c0,0 0,1 0,2 1,1 1,2 0,3 0,1 0,2 0,3 0,1 1,2 1,3 0,0 0,0 0,0 -1,1 -1,0 -1,0 -1,-1 -1,-3 -2,-5 0,0 0,-1 0,-1 1,-2 1,-3 1,-5 0,0 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 1,1 1,1 1,2zm-8 -139c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0l0 0zm1 2c0,0 1,0 1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0zm17 58c0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,0 0,-1 0,0 0,0 0,0zm-22 36l0 0 0 0 0 0 0 0zm-1 35c0,0 0,0 0,0 0,0 0,-1 0,-2 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 -2,-2 0,0 -1,-1 -1,-1 -1,-1 -1,-2 -1,-2 -1,-3 -1,-5 -1,-7 0,-1 0,-1 0,-1 1,0 1,0 1,1 0,1 1,3 1,4 -1,2 0,3 1,4 1,1 1,2 1,2 0,1 1,2 1,2 0,0 0,0 0,0 0,0 0,0 0,0 0,1 1,1 1,2 0,0 0,0 -1,0zm-4 9c0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 0,0l0 0 0 0zm-3 -7c0,1 0,1 0,1 0,0 0,-1 0,-1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,0 -1,0zm2 -24l0 0 0 0 0 0zm-4 51c0,0 0,-1 0,-1 0,1 1,1 1,1 -1,0 -1,0 -1,0zm-11 50l0 0 0 0 0 0zm-83 -134c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,1 0,1 0,1 0,0 0,0 0,0zm-2 -3c0,0 -1,0 -1,0 0,0 1,0 1,0l0 0 0 0zm-1 -1l0 0c0,0 0,1 0,1 0,0 0,-1 0,-1zm83 -196l0 0 0 0 1 1 -1 -1zm-1 -3c0,0 0,0 0,0 -1,1 -1,0 -1,0 0,0 0,-1 0,-1 0,0 0,0 1,0 0,0 0,1 0,1zm3 -20c0,-1 0,-1 0,-1 0,0 0,0 0,0 0,0 1,0 1,0 0,0 -1,1 -1,1zm-1 -6c0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,-1 -1,-1zm-1 10c0,0 0,1 0,1 0,0 0,1 0,1 -1,0 -1,0 -1,0 -1,-1 -1,-1 -1,-2 1,0 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 1,0 -1,1 -1,1 -1,1zm-1 -4l0 1 0 0 0 -1zm-4 -11c0,0 -1,0 -1,0 0,0 0,-1 0,-1 -1,0 0,0 0,0 0,-1 1,0 1,0 0,0 0,1 0,1zm-2 9c0,0 0,0 0,0 -1,-1 -1,-1 -1,-1 0,0 0,0 0,0 0,0 0,0 1,0 0,0 0,0 0,0 0,0 0,0 0,1 0,0 0,0 0,0zm-2 -38c1,0 1,-1 1,-1 0,0 0,0 0,0l0 0 0 0c0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,1 0,0 0,0 0,0 0,-1 -1,-1 -1,-1zm0 44l0 -1 0 1 0 0zm-7 -54c0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1 0,2 0,0 0,0 -1,0 0,0 0,0 0,0 0,-1 0,-1 1,-2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,1 0,1 0,1zm-6 2c0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,0 1,0 1,0 1,0 0,0 0,0 0,0l0 -1 0 1zm-4 2c0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-1 1,0 1,1 1,1zm-7 62c1,0 1,0 1,0 0,0 0,0 1,0 0,0 0,1 -1,1 0,0 0,0 0,0 -1,0 -1,-1 -1,-1zm-6 6c0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,0 -1,0 0,0 1,0 1,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm-3 -2c0,1 0,1 -1,2 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,-2 1,-3 0,0 0,0 1,-1 0,0 0,0 1,0 0,0 0,1 0,1 0,0 0,1 0,1zm-11 -25l0 0 1 0 -1 0zm242 -125c0,0 0,0 0,1 0,-1 0,-1 0,-1l0 0 0 0zm85 334c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm1 -316c1,0 1,0 2,0 0,0 0,0 0,0 0,1 0,1 -1,1 0,0 -1,0 -1,-1 0,0 0,0 0,0zm14 -15c0,0 0,0 1,0 -1,1 -1,1 -1,1 0,0 0,0 -1,1 0,0 0,0 0,0 0,0 0,0 0,-1 -1,0 0,-1 1,-1zm0 174c-1,0 -1,0 -1,0 0,0 0,0 1,-1 0,0 0,1 0,1 0,0 0,0 0,0zm3 -172l0 0 0 0c0,0 0,0 0,0 1,1 1,1 1,2 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 0,0 0,0 0,-1 0,-2 0,-3 0,0 0,0 0,0zm2 267c0,0 0,0 0,0 1,0 1,0 2,-1 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -2,0 -2,0 0,0 0,0 0,0 0,0 0,0 0,-1 0,1 0,1 0,1zm16 -130c1,0 1,0 1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,1 0,1l-1 0 0 -1zm38 -129c0,0 0,0 0,0 0,0 0,0 1,0 0,0 -1,0 -1,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 1,0 1,0 1,0zm69 24c1,0 1,0 2,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,1 -1,1 0,0 -1,0 -1,0 0,-1 0,-1 0,-1zm-73 154c0,0 1,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 -1,0 -1,0 0,0 -1,-1 -1,-2 0,0 0,-1 1,-1zm-36 79c0,0 0,1 0,1 0,0 1,0 1,0 0,0 -1,0 -1,1 0,-1 0,-1 0,-1 0,0 0,-1 0,-1zm4 -18c0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0zm7 9c0,0 0,0 1,0 0,0 -1,0 -1,1 1,0 1,0 1,0l0 0 -1 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,0 0,0 0,0z"}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var ScrollBooster = __webpack_require__(13);

var viewport = document.querySelector('#timeline');
var content = document.querySelector('#timeline > ul');

var sb = new ScrollBooster({
    viewport: viewport,
    content: content,
    mode: 'x',
    onUpdate: function onUpdate(data) {
        viewport.scrollLeft = data.position.x;
    }
});

$(document).ready(fixTimelineWidth);
window.addEventListener("orientationchange", function () {
    setTimeout(fixTimelineWidth, 300);
});

function fixTimelineWidth() {
    $("#timeline").width($(window).width());
    var items = $("#timeline > ul > li").length;
    var width = items * 200;
    $("#timeline > ul").width(width);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():"function"==typeof define&&define.amd?define("ScrollBooster",[],i):"object"==typeof exports?exports.ScrollBooster=i():t.ScrollBooster=i()}("undefined"!=typeof self?self:this,function(){return function(t){function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/dist/",i(i.s=0)}([function(t,i,e){"use strict";function o(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t){return Math.max(t.offsetWidth,t.scrollWidth)}function s(t){return Math.max(t.offsetHeight,t.scrollHeight)}function r(t,i,e){for(var o=void 0,n=t.childNodes,s=document.createRange(),r=0;o=n[r],r<n.length;r++)if(3===o.nodeType){s.selectNodeContents(o);var h=s.getBoundingClientRect();if(i>=h.left&&e>=h.top&&i<=h.right&&e<=h.bottom)return o}return!1}function h(){var t=window.getSelection?window.getSelection():document.selection;t&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty())}Object.defineProperty(i,"__esModule",{value:!0});var c=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},l=function(){function t(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),i}}(),p=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o(this,t),!(i.viewport&&i.viewport instanceof Element))return void console.error('"viewport" config property must be present and must be Element');var e={handle:i.viewport,content:i.viewport.children[0],bounce:!0,friction:.05,bounceForce:.1,textSelection:!1,onClick:function(){},shouldScroll:function(){return!0},onUpdate:function(){}};if(this.props=c({},e,i),!this.props.content)return void console.error("Viewport does not have any content");this.viewport={width:this.props.viewport.clientWidth,height:this.props.viewport.clientHeight},this.content={width:n(this.props.content),height:s(this.props.content)},this.position={x:0,y:0},this.velocity={x:0,y:0},this.friction=1-this.props.friction,this.bounceForce=this.props.bounceForce,this.isDragging=!1,this.dragStartPosition={x:0,y:0},this.dragOffsetPosition=c({},this.dragStartPosition),this.dragPosition=c({},this.position),this.isScrollEnabled=!!this.props.emulateScroll,this.isScrolling=!1,this.scrollOffset={x:0,y:0},this.bounce=this.props.bounce,this.textSelection=this.props.textSelection,this.boundX={from:Math.min(-this.content.width+this.viewport.width,0),to:0},this.boundY={from:Math.min(-this.content.height+this.viewport.height,0),to:0},this.mode={x:"x"==this.props.mode,y:"y"==this.props.mode,xy:"x"!==this.props.mode&&"y"!==this.props.mode},this.isRunning=!1,this.rafID=null,this.events={},this.animate(),this.handleEvents()}return l(t,[{key:"run",value:function(){var t=this;this.isRunning=!0,cancelAnimationFrame(this.rafID),this.rafID=requestAnimationFrame(function(){return t.animate()})}},{key:"animate",value:function(){var t=this;this.isRunning&&(this.update(),this.notify(),this.rafID=requestAnimationFrame(function(){return t.animate()}))}},{key:"update",value:function(){this.applyBoundForce(),this.applyDragForce(),this.applyScrollForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.mode.y||(this.position.x+=this.velocity.x),this.mode.x||(this.position.y+=this.velocity.y),this.bounce&&!this.isScrolling||(this.position.x=Math.max(Math.min(this.position.x,this.boundX.to),this.boundX.from),this.position.y=Math.max(Math.min(this.position.y,this.boundY.to),this.boundY.from)),!this.isDragging&&!this.isScrolling&&Math.abs(this.velocity.x)<.1&&Math.abs(this.velocity.y)<.1&&(this.isRunning=!1)}},{key:"applyForce",value:function(t){this.velocity.x+=t.x,this.velocity.y+=t.y}},{key:"applyBoundForce",value:function(){if(this.bounce&&!this.isDragging){var t=this.position.x<this.boundX.from,i=this.position.x>this.boundX.to,e=this.position.y<this.boundY.from,o=this.position.y>this.boundY.to,n={x:0,y:0};if(t||i){var s=t?this.boundX.from:this.boundX.to,r=s-this.position.x,h=r*this.bounceForce,c=this.position.x+(this.velocity.x+h)/(1-this.friction);t&&c<this.boundX.from||i&&c>this.boundX.to||(h=r*this.bounceForce-this.velocity.x),n.x=h}if(e||o){var l=e?this.boundY.from:this.boundY.to,p=l-this.position.y,a=p*this.bounceForce,u=this.position.y+(this.velocity.y+a)/(1-this.friction);e&&u<this.boundY.from||o&&u>this.boundY.to||(a=p*this.bounceForce-this.velocity.y),n.y=a}this.applyForce(n)}}},{key:"applyDragForce",value:function(){if(this.isDragging){var t={x:this.dragPosition.x-this.position.x,y:this.dragPosition.y-this.position.y},i={x:t.x-this.velocity.x,y:t.y-this.velocity.y};this.applyForce(i)}}},{key:"applyScrollForce",value:function(){if(this.isScrolling){var t={x:this.scrollOffset.x-this.velocity.x,y:this.scrollOffset.y-this.velocity.y};this.scrollOffset.x=0,this.scrollOffset.y=0,this.applyForce(t)}}},{key:"setPosition",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.velocity.x=0,this.velocity.y=0,this.position.x=-t.x||0,this.position.y=-t.y||0,this.run()}},{key:"getUpdate",value:function(){return{isRunning:this.isRunning,isDragging:this.isDragging,isScrolling:this.isScrolling,position:{x:-this.position.x,y:-this.position.y},dragOffsetPosition:this.dragOffsetPosition,viewport:c({},this.viewport),content:c({},this.content)}}},{key:"notify",value:function(){this.props.onUpdate(this.getUpdate())}},{key:"updateMetrics",value:function(){this.viewport.width=this.props.viewport.clientWidth,this.viewport.height=this.props.viewport.clientHeight,this.content.width=n(this.props.content),this.content.height=s(this.props.content),this.boundX.from=Math.min(-this.content.width+this.viewport.width,0),this.boundY.from=Math.min(-this.content.height+this.viewport.height,0),this.run()}},{key:"handleEvents",value:function(){var t=this,i=this.props.viewport,e={x:0,y:0},o={x:0,y:0},n=!1,s=function(i){var e=void 0,s=void 0;n?(e=i.touches[0].pageX,s=i.touches[0].pageY):(e=i.pageX,s=i.pageY),t.dragOffsetPosition.x=e-o.x,t.dragOffsetPosition.y=s-o.y,t.dragPosition.x=t.dragStartPosition.x+t.dragOffsetPosition.x,t.dragPosition.y=t.dragStartPosition.y+t.dragOffsetPosition.y,n||i.preventDefault()};this.events.pointerdown=function(c){var l=void 0,p=void 0,a=void 0,u=void 0;n=!(!c.touches||!c.touches[0]),n?(l=c.touches[0].pageX,p=c.touches[0].pageY,a=c.touches[0].clientX,u=c.touches[0].clientY):(l=c.pageX,p=c.pageY,a=c.clientX,u=c.clientY);var d=i.getBoundingClientRect();if(!(a-d.left>=i.clientLeft+i.clientWidth)&&!(u-d.top>=i.clientTop+i.clientHeight)&&t.props.shouldScroll(t.getUpdate(),c)){if(t.textSelection){if(r(c.target,a,u))return;h()}t.isDragging=!0,(e.x||e.y)&&(t.position.x=e.x,t.position.y=e.y,e.x=0,e.y=0),o.x=l,o.y=p,t.dragStartPosition.x=t.position.x,t.dragStartPosition.y=t.position.y,s(c),t.run();var v=void 0,f=void 0;f=function(i){t.isDragging=!1,n?(window.removeEventListener("touchmove",s),window.removeEventListener("touchend",v)):(window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",v))},n?(v=window.addEventListener("touchend",f),window.addEventListener("touchmove",s)):(v=window.addEventListener("mouseup",f),window.addEventListener("mousemove",s))}};var c=null;this.events.wheel=function(i){t.velocity.x=0,t.isScrollEnabled&&(t.isScrolling=!0,t.scrollOffset.x=-i.deltaX,t.scrollOffset.y=-i.deltaY,t.run(),clearTimeout(c),c=setTimeout(function(){return t.isScrolling=!1},80),i.preventDefault())},this.events.scroll=function(i){var o=t.props.viewport.scrollLeft,n=t.props.viewport.scrollTop;Math.abs(t.position.x+o)>3&&(t.position.x=-o,t.velocity.x=0),Math.abs(t.position.y+n)>3&&(t.position.y=-n,t.velocity.y=0),e.x=-t.props.viewport.scrollLeft,e.y=-t.props.viewport.scrollTop},this.events.click=function(i){t.props.onClick(t.getUpdate(),i)},this.events.resize=this.updateMetrics.bind(this),this.props.handle.addEventListener("mousedown",this.events.pointerdown),this.props.handle.addEventListener("touchstart",this.events.pointerdown),this.props.handle.addEventListener("click",this.events.click),this.props.viewport.addEventListener("wheel",this.events.wheel),this.props.viewport.addEventListener("scroll",this.events.scroll),window.addEventListener("resize",this.events.resize)}},{key:"destroy",value:function(){this.props.handle.removeEventListener("mousedown",this.events.pointerdown),this.props.handle.removeEventListener("touchstart",this.events.pointerdown),this.props.handle.removeEventListener("click",this.events.click),this.props.viewport.removeEventListener("wheel",this.events.wheel),this.props.viewport.removeEventListener("scroll",this.events.scroll),window.removeEventListener("resize",this.events.resize)}}]),t}();i.default=p,t.exports=i.default}])});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

$(function () {
    $('#videoModal').on('shown.bs.modal', function (e) {
        $(".yvideo").each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        });
    });

    $('#videoModal').on('hidden.bs.modal', function (e) {
        $(".yvideo").each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        });
    });
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

$(function () {
    $(window).on('load', function () {
        setTimeout(function () {
            $("#preloader-wrapper").fadeOut();
        }, 500);
    });
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function () {
    // hold onto the drop down menu                                             
    var dropdownMenu;

    // and when you show it, move it to the body                                     
    $(window).on('show.bs.dropdown', function (e) {

        // grab the menu        
        dropdownMenu = $(e.target).find('.dropdown-menu');

        // detach it and append it to the body
        $('body').append(dropdownMenu.detach());

        // grab the new offset position
        var eOffset = $(e.target).offset();

        // make sure to place it where it would normally go (this could be improved)
        dropdownMenu.css({
            'display': 'block',
            'top': eOffset.top + $(e.target).outerHeight(),
            'left': eOffset.left
        });
    });

    // and when you hide it, reattach the drop down, and hide it normally                                                   
    $(window).on('hide.bs.dropdown', function (e) {
        $(e.target).append(dropdownMenu.detach());
        dropdownMenu.hide();
    });

    $("#close-window").on("click", function () {
        $(".window-communication").fadeOut(300);
    });
})();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var OFFSET = 77;

$(function () {
    $(window).on('scroll', showOrHideNavbar);
    showOrHideNavbar();
});

function showOrHideNavbar() {
    var offset = $(window).scrollTop();
    if (offset > OFFSET) {
        showFixedNav();
    } else {
        hideFixedNav();
    }
}

function showFixedNav() {
    $("#main-nav").addClass('fixed-top');
    $("body").addClass('navbar-fixed-top');
}

function hideFixedNav() {
    $("#main-nav").removeClass('fixed-top');
    $("body").removeClass('navbar-fixed-top');
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

$(function () {

    var menuItems = $("#main-menu").find("a").filter(function () {
        return $(this).attr("href").indexOf("#") == 0;
    });
    var scrollItems = menuItems.map(function () {
        return $($(this).attr("href"));
    });
    var topMenuHeight = 80;

    menuItems.on("click", function (e) {
        e.preventDefault();

        var id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(id).offset().top - topMenuHeight
        }, 1000);
    });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight + 1;

        var curr = scrollItems.filter(function () {
            var offset = $(this).offset();
            if (!offset) return false;
            return offset.top < fromTop;
        }).last().get(0);

        if (!curr) return;

        var id = curr.attr("id");

        menuItems.parent().removeClass('active').end().filter("[href='#" + id + "']").parent().addClass('active');
    });
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

$(function () {
  initStats(50000);
  setTimeout(function () {
    return initStats(100000);
  }, 1500);
});

function initStats(initialValue) {
  var stat = $("<span>").addClass("number-effect");
  setInterval(function () {
    stat.text("+" + initialValue++ + "\u20AE");
  }, 1);

  showStats();

  function showStats() {
    stat.css("top", getRandomInt(50, 580) + "px");
    stat.css("left", getRandomInt(10, 90) + "%");

    $("body").prepend(stat);

    setTimeout(function () {
      stat.remove();
      setTimeout(showStats, 500);
    }, 3010);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var timing = '{"past":2733398,"left":1154601}';

// $(document).ready(function () {
//   var timingData = JSON.parse(timing);

//   var timerElement = document.getElementById("mjc_timer");

//   var timer = new GT_Timer();
//   timer.init({
//     timerElement: timerElement,
//     past: timingData.past,
//     left: timingData.left
//   });
//   timer.startTimer();
// });

var GT_Timer = function GT_Timer() {};

GT_Timer.prototype.options = {
  pathLength: 283
};

GT_Timer.prototype.runner = null;

GT_Timer.prototype.bySeconds = {
  past: 0,
  left: 0
};

GT_Timer.prototype.timing = {
  day: {
    past: 0,
    left: 0
  },
  hour: {
    past: 0,
    left: 0
  },
  minute: {
    past: 0,
    left: 0
  },
  second: {
    past: 0,
    left: 0
  }
};

GT_Timer.prototype.elements = {
  day: null,
  hour: null,
  minute: null,
  second: null
};

GT_Timer.prototype.init = function (options) {
  var self = this;

  self.elements.day = options.timerElement.getElementsByClassName("day")[0];
  self.elements.hour = options.timerElement.getElementsByClassName("hour")[0];
  self.elements.minute = options.timerElement.getElementsByClassName("minute")[0];
  self.elements.second = options.timerElement.getElementsByClassName("second")[0];

  self.elements.day.innerHTML = self.getGraphicHTML("DAYS");
  self.elements.hour.innerHTML = self.getGraphicHTML("HOURS");
  self.elements.minute.innerHTML = self.getGraphicHTML("MINUTES");
  self.elements.second.innerHTML = self.getGraphicHTML("SECONDS");

  self.bySeconds.past = options.past;
  self.bySeconds.left = options.left;

  self.options.pathLength = 251;
};

GT_Timer.prototype.convertSeconds = function () {
  var self = this;

  var past = self.bySeconds.past;
  var left = self.bySeconds.left;

  self.timing.second.past = past % 60;
  self.timing.second.left = left % 60;

  past = Math.floor(past / 60);
  left = Math.floor(left / 60);

  self.timing.minute.past = past % 60;
  self.timing.minute.left = left % 60;

  past = Math.floor(past / 60);
  left = Math.floor(left / 60);

  self.timing.hour.past = past % 24;
  self.timing.hour.left = left % 24;

  self.timing.day.past = Math.floor(past / 24);
  self.timing.day.left = Math.floor(left / 24);
};

GT_Timer.prototype.startTimer = function () {
  var self = this;
  self.runner = setInterval(function () {
    self.runTimer();
  }.bind(self), 1000);
};

GT_Timer.prototype.runTimer = function () {
  var self = this;

  if (self.bySeconds.left <= 0) {
    self.onTimesUp();
    return;
  }

  self.bySeconds.past = self.bySeconds.past + 1;
  self.bySeconds.left = self.bySeconds.left - 1;

  self.convertSeconds();

  self.updateLabels();

  self.setCircleDasharray();

  // setRemainingPathColor(timeLeft);
};

GT_Timer.prototype.onTimesUp = function () {
  var self = this;
  clearInterval(self.runner);
  self.runner = null;
};

GT_Timer.prototype.calculateTimeFraction = function (val, fractionCount) {
  var rawTimeFraction = val / fractionCount;
  return rawTimeFraction - 1 / fractionCount * (1 - rawTimeFraction);
};

GT_Timer.prototype.updateLabels = function () {
  var self = this;
  var timerLabel;

  timerLabel = self.elements.second.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = "" + self.timing.second.left;

  timerLabel = self.elements.minute.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = "" + self.timing.minute.left;

  timerLabel = self.elements.hour.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = "" + self.timing.hour.left;

  timerLabel = self.elements.day.getElementsByClassName("timer_value")[0];
  timerLabel.innerHTML = "" + self.timing.day.left;
};

GT_Timer.prototype.setCircleDasharray = function () {
  var self = this;

  var pathElement;
  var circleDasharray;
  var fraction;

  fraction = self.calculateTimeFraction(self.timing.second.left, 60);
  circleDasharray = (fraction * self.options.pathLength).toFixed(0) + " " + self.options.pathLength;
  pathElement = self.elements.second.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);

  fraction = self.calculateTimeFraction(self.timing.minute.left, 60);
  circleDasharray = (fraction * self.options.pathLength).toFixed(0) + " " + self.options.pathLength;
  pathElement = self.elements.minute.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);

  fraction = self.calculateTimeFraction(self.timing.hour.left, 24);
  circleDasharray = (fraction * self.options.pathLength).toFixed(0) + " " + self.options.pathLength;
  pathElement = self.elements.hour.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);

  fraction = self.calculateTimeFraction(self.timing.day.left, self.timing.day.left + self.timing.day.past);
  circleDasharray = (fraction * self.options.pathLength).toFixed(0) + " " + self.options.pathLength;
  pathElement = self.elements.day.getElementsByClassName("timer_path")[0];
  pathElement.setAttribute("stroke-dasharray", circleDasharray);
};

GT_Timer.prototype.getGraphicHTML = function (unit) {
  var self = this;
  return "\n<div class=\"base-timer\">\n  <svg class=\"base-timer__svg\" viewBox=\"0 0 100 100\">\n    <g class=\"base-timer__circle\">\n      <circle class=\"circle_1\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\n      <circle class=\"circle_2\" cx=\"50\" cy=\"50\" r=\"38\"></circle>\n      <circle class=\"circle_3\" cx=\"50\" cy=\"50\" r=\"34\"></circle>\n      <path\n        stroke-dasharray=\"" + self.pathLength + "\"\n        class=\"timer_path green\"\n        d=\"\n          M 50, 50\n          m -40, 0\n          a 40,40 0 1,0 80,0\n          a 40,40 0 1,0 -80,0\n        \"\n      ></path>\n    </g>\n  </svg>\n  <div class=\"timer_label\">\n    <div class=\"timer_value\">0</div>\n    <div class=\"timer_unit\">" + unit + "</div>\n  </div>\n</div>\n";
};

var FULL_DASH_ARRAY = 283;
var WARNING_THRESHOLD = 10;
var ALERT_THRESHOLD = 5;

var COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

var TIME_LIMIT = 20;
var timePassed = 0;
var timeLeft = TIME_LIMIT;
var timerInterval = null;
var remainingPathColor = COLOR_CODES.info.color;

// document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100">
//     <g class="base-timer__circle">
//       <circle class="circle_1" cx="50" cy="50" r="45"></circle>
//       <circle class="circle_2" cx="50" cy="50" r="38"></circle>
//       <circle class="circle_3" cx="50" cy="50" r="34"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="timer_path ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -40, 0
//           a 40,40 0 1,0 80,0
//           a 40,40 0 1,0 -80,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="timer_label" class="timer_label">${formatTime(timeLeft)}</span>
// </div>
// `;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(runTimer, 1000);
}

function runTimer() {
  timePassed = timePassed += 1;
  timeLeft = TIME_LIMIT - timePassed;
  document.getElementById("timer_label").innerHTML = formatTime(timeLeft);
  setCircleDasharray();
  setRemainingPathColor(timeLeft);

  if (timeLeft === 0) {
    onTimesUp();
  }
}

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

function setRemainingPathColor(timeLeft) {
  var alert = COLOR_CODES.alert,
      warning = COLOR_CODES.warning,
      info = COLOR_CODES.info;

  if (timeLeft <= alert.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document.getElementById("base-timer-path-remaining").classList.remove(info.color);
    document.getElementById("base-timer-path-remaining").classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  var rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - 1 / TIME_LIMIT * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  var circleDasharray = (calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0) + " 283";
  document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);