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

/***/ "./templates/MovieCard.html":
/*!**********************************!*\
  !*** ./templates/MovieCard.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div class=\\\"w-64 h-[300px] text-white bg-MovieCard rounded-3xl flex flex-col items-center gap-2 overflow-hidden relative\\\">\\r\\n    <span class=\\\"absolute top-4 right-4 rounded-md p-1 bg-time text-sm\\\">\\r\\n        {{duration}}\\r\\n    </span>\\r\\n    <i \\r\\n    class=\\\"fa-solid  fa-circle-check absolute bottom-4 right-4 text-lg cursor-pointer \\\"\\r\\n    title=\\\"if the checkbox is checked the video is going to download after!\\\"\\r\\n    data-videoId = \\\"{{videoId}}\\\"\\r\\n    >\\r\\n    </i>\\r\\n    <select\\r\\n    class=\\\"absolute top-4 left-4 rounded-md p-1 bg-time text-sm\\\"\\r\\n    >\\r\\n        {{#each formats}}\\r\\n        <option value=\\\"{{this}}\\\" class=\\\"text-black\\\" >{{this}}</option>\\r\\n        {{/each}}\\r\\n    </select>\\r\\n    <div\\r\\n    data-id = \\\"{{videoId}}\\\"\\r\\n    class=\\\"rounded-full shadow-lg bg-grayInfo transition duration-150 hover:bg-sMain w-14 h-14 absolute my-auto top-0 bottom-0 cursor-pointer right-4 flex items-center justify-center z-10\\\"\\r\\n    >\\r\\n        <i class=\\\"fa-solid fa-play text-sMain\\\"></i>\\r\\n    </div>\\r\\n    <img\\r\\n    src=\\\"{{thumbnail}}\\\"\\r\\n    alt=\\\"couldn't load the image\\\" '\\r\\n    id=\\\"{{videoId}}\\\"\\r\\n    />\\r\\n    <div\\r\\n    class=\\\"w-full p-4\\\"\\r\\n    >\\r\\n        <div\\r\\n        class=\\\"w-full\\\"\\r\\n        >\\r\\n            <span\\r\\n            class=\\\"text-grayCustom text-sm\\\"\\r\\n            >\\r\\n                {{uploaderName}}\\r\\n            </span>\\r\\n            <p\\r\\n            class=\\\"font-bold w-full\\\" \\r\\n            style=\\\"overflow: hidden;text-overflow: ellipsis;display:-webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;\\\"\\r\\n            >\\r\\n                {{title}}\\r\\n            </p>\\r\\n            <span\\r\\n            class=\\\"text-grayInfo text-sm\\\"\\r\\n            >\\r\\n            {{views}} | {{time_uploaded}} \\r\\n            </span>\\r\\n        </div>\\r\\n\\r\\n    </div>\\r\\n</div>\");\n\n//# sourceURL=webpack://weedy/./templates/MovieCard.html?");

/***/ }),

/***/ "./templates/loading.html":
/*!********************************!*\
  !*** ./templates/loading.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div id=\\\"loading\\\" class=\\\"flex items-center flex-col gap-3 fixed justify-center top-0 bottom-0 right-0 left-0 bg-loading\\\">\\r\\n    <svg width=\\\"90\\\" height=\\\"90\\\">\\r\\n        <circle cx=\\\"50\\\" cy=\\\"50\\\" fill=\\\"none\\\" stroke=\\\"#86c288\\\" stroke-width=\\\"9\\\" r=\\\"35\\\" stroke-dasharray=\\\"164.93361431346415 56.97787143782138\\\">\\r\\n        <animateTransform attributeName=\\\"transform\\\" type=\\\"rotate\\\" repeatCount=\\\"indefinite\\\" dur=\\\"1s\\\" values=\\\"0 50 50;360 50 50\\\" keyTimes=\\\"0;1\\\"></animateTransform>\\r\\n        </circle>\\r\\n        </svg>\\r\\n        <p class=\\\"text-white\\\"> it may take a while, especially if u are downloading a  playlist. <br> so let get a joke</p>\\r\\n        \\r\\n</div>\");\n\n//# sourceURL=webpack://weedy/./templates/loading.html?");

/***/ }),

/***/ "./src/download.js":
/*!*************************!*\
  !*** ./src/download.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handlebars */ \"./node_modules/handlebars/lib/index.js\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _templates_MovieCard_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/MovieCard.html */ \"./templates/MovieCard.html\");\n/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ \"./node_modules/toastr/toastr.js\");\n/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _templates_loading_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/loading.html */ \"./templates/loading.html\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst videoFormats = [\r\n    'video:MP4',\r\n    'video:MKV',\r\n    'video:AVI',\r\n    'video:M4V',\r\n    'video:MOV',\r\n    'video:WMV',\r\n    'video:MPEG-1',\r\n    'video:MPEG-2',\r\n    'video:MPEG-4',\r\n    'video:H.264',\r\n    'video:H.265',\r\n    'video:VP8',\r\n    'video:VP9',\r\n    'video:Theora'\r\n  ];\r\nconst audioFormats = [\r\n        'audio:AAC',\r\n        'audio:AC3',\r\n        'audio:DTS',\r\n        'audio:DTS-HD',\r\n        'audio:E-AC3',\r\n        'audio:FLAC',\r\n        'audio:MP3',\r\n        'audio:Opus',\r\n        'audio:TrueHD',\r\n        'audio:Vorbis'\r\n];\r\n\r\n\r\nconst template = handlebars__WEBPACK_IMPORTED_MODULE_1___default().compile(_templates_MovieCard_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n\r\nlet timeoutsHolder = {}\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\r\n    setVideoEvenets();\r\n    directoryEvenetHandler();\r\n    submit();\r\n    if(videosJson.length >16)\r\n        handleScroll();\r\n    \r\n});\r\n\r\n\r\nlet index = videosJson.length >16? 16: 0;\r\n//this function when user scroll it shows more videos if the length of vids more than 16! show 16 every scroll\r\nfunction handleScroll() {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(() => {\r\n        if((scrollY + innerHeight) >= (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).height() - 100) && index < videosJson.length-1 ){\r\n            for(let i =index; i < index + 16;i++) {\r\n                if(videosJson[i] === undefined)\r\n                break;\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cardsContainer').append(\r\n                    template(\r\n                        {\r\n                            title: videosJson[i].title,\r\n                            thumbnail: videosJson[i].thumbnail,\r\n                            uploaderName: videosJson[i].author,\r\n                            duration: videosJson[i].duration,\r\n                            videoId: new URL( videosJson[i].url).searchParams.get('v'),\r\n                            time_uploaded: videosJson[i].time_uploaded,\r\n                            views: videosJson[i].views,\r\n                            formats: videoFormats.concat(audioFormats)\r\n                        }\r\n                    )\r\n                )\r\n                \r\n            }\r\n            index += 16;\r\n            setVideoEvenets();\r\n        }\r\n    })\r\n}\r\n\r\n// handling including and excluding a video event\r\nlet excludedVids = [];\r\nfunction setCheckedEvent(playButton) {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton)\r\n    .parent()\r\n    .children('.fa-circle-check')\r\n    .click(function ()  {\r\n            if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(\"class\").includes('fa-solid')){\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)\r\n                .attr('class',\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)\r\n                .attr('class')\r\n                .replace('fa-solid',\"fa-regular\"));\r\n                excludedVids.push(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-videoId'));\r\n            }\r\n            \r\n            else{\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)\r\n                .attr('class',\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)\r\n                .attr('class')\r\n                .replace('fa-regular',\"fa-solid\"));\r\n                excludedVids = excludedVids.filter(id => id !== jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-videoId'));\r\n            }\r\n        })\r\n    }\r\n    \r\n// handle video play and stop\r\nfunction setVideoEvenets() {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-id]').each( (index,playButton) => {\r\n        if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton).attr(\"listener\") !== 'true'){\r\n        setCheckedEvent(playButton);\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton).attr(\"listener\",'true');\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton).click(() => {\r\n            const videoId = playButton.getAttribute('data-id');\r\n            if(!jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton).children('i').attr('class').includes(\"fa-stop\")) {\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#${videoId}`)\r\n                .replaceWith(`<div class=\"videoHolder w-full\"></div>`);\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton.parentElement) \r\n                .children('.videoHolder')\r\n                .append(`\r\n                <iframe width=\"100%\" class=\"pointer-events-none\" src='https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&disablekb=1&rel=0&controls=0'></iframe>\r\n                <div class=' h-1 w-0 bg-red-600 progressBar'></div>\r\n                `);\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton)\r\n                .children('i')\r\n                .attr('class',\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton)\r\n                .children('i')\r\n                .attr('class')\r\n                .replace(\"fa-play\",\"fa-stop\"));\r\n                const duration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton.parentElement)\r\n                .children('span')\r\n                .text()\r\n                .split(\":\")\r\n                let timer;\r\n                if(duration.length < 3) {\r\n                    timer = (parseInt(duration[0]) * 60) + parseInt(duration[1]) - 1;\r\n                }\r\n                else {\r\n                    timer = (parseInt(duration[0]) * 3600) + (parseInt(duration[1]) * 60) -1  + parseInt(duration[2]);\r\n                }\r\n                timeoutsHolder[videoId] = setTimeout(() => {\r\n                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton).click();\r\n                },timer*1000)\r\n            }\r\n            else{\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton.parentElement)\r\n                .children('.videoHolder')\r\n                .replaceWith(\r\n                    `<img id=${videoId} src=\"https://i.ytimg.com/vi/${videoId}/mqdefault.jpg\" alt=\"couldn't load the image\" />`\r\n                );\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton)\r\n                .children('i')\r\n                .attr('class',\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(playButton)\r\n                .children('i')\r\n                .attr('class')\r\n                .replace(\"fa-stop\",\"fa-play\"));\r\n                clearTimeout(timeoutsHolder[videoId]);\r\n                    \r\n                \r\n\r\n            }\r\n            \r\n        });\r\n    }\r\n    })\r\n}\r\n\r\n//directory button event handler\r\nfunction directoryEvenetHandler() {\r\n    \r\n    checkLocalStorage()\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#directoryBtn').click( async () => {\r\n    const dir = await electronAPI.getDir();\r\n    if(dir !== \"no directory selected\") {\r\n        localStorage.setItem('dir',dir)\r\n    }\r\n    checkLocalStorage();\r\n\r\n})\r\n}\r\n// check if there is a directory saved in localStorage\r\nfunction checkLocalStorage () {\r\n    if(localStorage.getItem('dir'))\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#directoryBtn').attr('title',`current Directory selected: ${localStorage.getItem('dir')}`)\r\n    else \r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#directoryBtn').attr('title',\"no directory selected\")\r\n}\r\n\r\n\r\n// handling submitions\r\nfunction submit() {\r\n    const toastOptions = {\r\n        closeButton: true,\r\n        progressBar: true\r\n    }\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sendConfig')\r\n    .click(() => {\r\n        if(!localStorage.getItem('dir')){\r\n            toastr__WEBPACK_IMPORTED_MODULE_3___default().error('Choose a Directory!','No Directory Selected',toastOptions)\r\n            return\r\n        }\r\n        let data;    \r\n        if(dataType === 'playlist'){\r\n            let allSameFormat = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#selectAll').prop('checked');\r\n            const includedVids = excludedVids.length > 0? \r\n            videosJson.filter( video => !excludedVids\r\n                .includes(new URL( video.url)\r\n                .searchParams\r\n                .get('v'))): \r\n                videosJson;\r\n            if(allSameFormat){\r\n                data = includedVids.map(video => {\r\n                    return {\r\n                        id: new URL( video.url).searchParams.get('v'),\r\n                        title: video.title.replace(/[^a-zA-Z ]/g, \"\").trim(),\r\n                        thumbnail: video.thumbnail,\r\n                    }\r\n                })\r\n            data= {\r\n                dir: localStorage.dir,\r\n                allSameFormat, \r\n                format: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#selectAllFormats').val(), \r\n                videos: data \r\n            }\r\n            }\r\n            else{\r\n                data = includedVids.map(video => {\r\n                    return {\r\n                        id: new URL(video.url).searchParams.get('v'),\r\n                        title: video.title.replace(/[^a-zA-Z ]/g, \"\").trim(),\r\n                        thumbnail: video.thumbnail,\r\n                        format: jquery__WEBPACK_IMPORTED_MODULE_0___default()(`[data-id = \"${\r\n                            new URL(video.url)\r\n                            .searchParams\r\n                            .get('v')}\"]`)\r\n                            .parent()\r\n                            .children('select')\r\n                            .val()\r\n                    }\r\n                })\r\n                data = {\r\n                    dir: localStorage.dir,\r\n                    allSameFormat,\r\n                    videos:data\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            data = {\r\n                dir: localStorage.dir,\r\n                id: new URL(videosJson.url).searchParams.get('v'),\r\n                title: videosJson.title.replace(/[^a-zA-Z ]/g, \"\").trim(),\r\n                thumbnail: videosJson.thumbnail,\r\n                format: jquery__WEBPACK_IMPORTED_MODULE_0___default()(`[data-id = \"${\r\n                    new URL(videosJson.url)\r\n                    .searchParams\r\n                    .get('v')}\"]`)\r\n                    .parent()\r\n                    .children('select')\r\n                    .val()\r\n            }\r\n        }\r\n\r\n\r\n\r\n\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body)\r\n            .append(\r\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<form method='post' action='download/watch/progress'></form>\")\r\n                .append(`<textarea  name=\"data\" class=\"hidden\">${JSON.stringify(data)}</textarea>`)\r\n                .append(`<input type='hidden' name='type' value=\"${dataType}\"/>`)\r\n            );\r\n\r\n\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('body')\r\n                .append(_templates_loading_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n\r\n                \r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('form').submit();\r\n        \r\n    })\r\n}\n\n//# sourceURL=webpack://weedy/./src/download.js?");

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
/******/ 			"download": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/download.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;