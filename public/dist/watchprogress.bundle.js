/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./templates/StreamProgressCard.html":
/*!*******************************************!*\
  !*** ./templates/StreamProgressCard.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"\\r\\n<div  class=\\\"flex gap-3 p-2 shadow-md rounded-md w-5/6 mx-auto my-3  bg-MovieCard\\\">\\r\\n    <img src=\\\"{{thumbnail}}\\\" \\r\\n    class=\\\" rounded-md\\\"\\r\\n    />\\r\\n    <div class=\\\"flex flex-col gap-2 text-white w-full justify-evenly\\\">\\r\\n        <div>\\r\\n            <span \\r\\n            class=\\\"font-bold\\\"\\r\\n            style=\\\"overflow: hidden;text-overflow: ellipsis;display:-webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;\\\"\\r\\n            >{{title}}</span>\\r\\n            <span class=\\\"text-sm text-grayCustom\\\">{{format}}</span>\\r\\n            <br>\\r\\n            <span id=\\\"escape{{id}}preparing\\\" class=\\\"text-sm text-sMain flex gap-3 items-center\\\"> Preparing video Stream pls hold UwU</span>\\r\\n        </div>\\r\\n        <div class=\\\"flex gap-2 w-full items-center p-1\\\">\\r\\n            <div id=\\\"escape{{id}}\\\"></div>  \\r\\n            <i id=\\\"escape{{id}}\\\" class=\\\"text-sm text-sMain\\\">0%</i>\\r\\n        </div>\\r\\n        \\r\\n    </div>\\r\\n</div>\");\n\n//# sourceURL=webpack://weedy/./templates/StreamProgressCard.html?");

/***/ }),

/***/ "./src/watchprogress.js":
/*!******************************!*\
  !*** ./src/watchprogress.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _templates_StreamProgressCard_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/StreamProgressCard.html */ \"./templates/StreamProgressCard.html\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlebars */ \"./node_modules/handlebars/lib/index.js\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var progressbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! progressbar.js */ \"./node_modules/progressbar.js/src/main.js\");\n/* harmony import */ var progressbar_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(progressbar_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)();\r\nsocket.on('canceled', () => history.back())\r\n\r\nconst template = handlebars__WEBPACK_IMPORTED_MODULE_3___default().compile(_templates_StreamProgressCard_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\nconst data = JSON.parse(videosJson);\r\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(fnReady)\r\nfunction fnReady() {\r\n    \r\n    if( dataType === 'playlist')\r\n        downloadPlaylist()\r\n    else\r\n        downloadVideo(data)\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function downloadPlaylist() {\r\n    for( const video of data.videos ) {\r\n        let format;\r\n        if(data.allSameFormat) \r\n            format = data.format.split(\":\")[1].toLowerCase()\r\n        else \r\n            format = video.format.split(\":\")[1].toLowerCase()\r\n        await downloadVideo(video,format,data.dir)\r\n    }\r\n    toastr__WEBPACK_IMPORTED_MODULE_5___default().info('your playlist is finished Downloading',\"Finished\",{timeOut:100000});\r\n\r\n}\r\nfunction downloadVideo(videoObj,format,dir){\r\n    removeEventListeners();\r\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('body')\r\n        .append(template(videoObj));\r\n    const bar = new progressbar_js__WEBPACK_IMPORTED_MODULE_4__.Line(`div#escape${videoObj.id}`,{\r\n        easing: 'easeIn',\r\n        strokeWidth: 0.5,\r\n        trailWidth: 0.1,\r\n        color:'#86c288',\r\n        \r\n    });\r\n    return new Promise((resolve,reject) => {\r\n\r\n    socket.on('download-completed', video => {\r\n        const toastOptions = {\r\n            closeButton: true,\r\n            progressBar: true\r\n        }\r\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(`#escape${videoObj.id}preparing`)\r\n        .text('video downloaded')\r\n        .append('<i class=\"fa-solid fa-circle-check text-sMain\"></i>')\r\n        toastr__WEBPACK_IMPORTED_MODULE_5___default().success(video.title,'Download completed',toastOptions)\r\n        resolve()\r\n    });\r\n    socket.on('progress', progress => {\r\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(`#escape${videoObj.id}preparing`).text('converting video Stream Owo!')\r\n        bar.animate( progress/100,{\r\n            duration:100,\r\n        });\r\n        jquery__WEBPACK_IMPORTED_MODULE_1___default()(`i#escape${videoObj.id}`)\r\n            .text(`${progress}%`)\r\n    })\r\n    socket.on('error', err => reject(err))\r\n    socket.emit('download-video', {...videoObj,dir:dir? dir: videoObj.dir, format: format? format: videoObj.format.split(\":\")[1].toLowerCase()})\r\n})\r\n}\r\n\r\nfunction removeEventListeners() {\r\n    socket.removeEventListener('download-completed');\r\n    socket.removeEventListener('progress');\r\n    socket.removeEventListener('error');\r\n  }\r\n\r\n\n\n//# sourceURL=webpack://weedy/./src/watchprogress.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = fs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"watchprogress": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweedy"] = self["webpackChunkweedy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/watchprogress.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;