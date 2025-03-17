"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/habits/route";
exports.ids = ["app/api/habits/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=D%3A%5Chabit%20tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Chabit%20tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=D%3A%5Chabit%20tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Chabit%20tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_habit_tracker_src_app_api_habits_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/habits/route.ts */ \"(rsc)/./src/app/api/habits/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/habits/route\",\n        pathname: \"/api/habits\",\n        filename: \"route\",\n        bundlePath: \"app/api/habits/route\"\n    },\n    resolvedPagePath: \"D:\\\\habit tracker\\\\src\\\\app\\\\api\\\\habits\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_habit_tracker_src_app_api_habits_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/habits/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZoYWJpdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmhhYml0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmhhYml0cyUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDaGFiaXQlMjB0cmFja2VyJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDaGFiaXQlMjB0cmFja2VyJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWJpdC10cmFja2VyLz8zOGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkQ6XFxcXGhhYml0IHRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaGFiaXRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9oYWJpdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9oYWJpdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2hhYml0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXGhhYml0IHRyYWNrZXJcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcaGFiaXRzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2hhYml0cy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=D%3A%5Chabit%20tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Chabit%20tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/auth.ts":
/*!************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/auth.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"select_account\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.sub;\n            }\n            return session;\n        },\n        async jwt ({ token, account }) {\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        }\n    },\n    debug: \"development\" === \"development\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUN3RDtBQUVqRCxNQUFNQyxjQUErQjtJQUMxQ0MsV0FBVztRQUNURixzRUFBY0EsQ0FBQztZQUNiRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7WUFDOUNDLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05DLFFBQVE7b0JBQ1JDLGFBQWE7b0JBQ2JDLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFFBQVFWLFFBQVFDLEdBQUcsQ0FBQ1UsZUFBZTtJQUNuQ0MsV0FBVztRQUNULE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFQyxLQUFLLEVBQUU7WUFDOUIsSUFBSUQsUUFBUUUsSUFBSSxFQUFFO2dCQUNoQkYsUUFBUUUsSUFBSSxDQUFDQyxFQUFFLEdBQUdGLE1BQU1HLEdBQUc7WUFDN0I7WUFDQSxPQUFPSjtRQUNUO1FBQ0EsTUFBTUssS0FBSSxFQUFFSixLQUFLLEVBQUVLLE9BQU8sRUFBRTtZQUMxQixJQUFJQSxTQUFTO2dCQUNYTCxNQUFNTSxXQUFXLEdBQUdELFFBQVFFLFlBQVk7WUFDMUM7WUFDQSxPQUFPUDtRQUNUO0lBQ0Y7SUFDQVEsT0FBT3RCLGtCQUF5QjtBQUNsQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFiaXQtdHJhY2tlci8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9hdXRoLnRzP2ExNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEISxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQhLFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwcm9tcHQ6IFwic2VsZWN0X2FjY291bnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uc3ViITtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQgfSkge1xuICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG4gIH0sXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn07ICJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJpZCIsInN1YiIsImp3dCIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/habits/route.ts":
/*!*************************************!*\
  !*** ./src/app/api/habits/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth]/auth */ \"(rsc)/./src/app/api/auth/[...nextauth]/auth.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var _models_Habit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Habit */ \"(rsc)/./src/models/Habit.ts\");\n\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"You must be signed in to view habits\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        console.log(\"MongoDB connected successfully\");\n        const habits = await _models_Habit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find({\n            userId: session.user.id\n        }).sort({\n            createdAt: -1\n        });\n        console.log(\"Habits fetched:\", habits.length);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(habits);\n    } catch (error) {\n        console.error(\"Fetch habits error:\", error instanceof Error ? error.message : error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch habits\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"You must be signed in to create habits\"\n            }, {\n                status: 401\n            });\n        }\n        const { title, description } = await request.json();\n        console.log(\"Received habit data:\", {\n            title,\n            description\n        });\n        if (!title) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Title is required\"\n            }, {\n                status: 400\n            });\n        }\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        console.log(\"MongoDB connected successfully\");\n        const habit = await _models_Habit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create({\n            title,\n            description,\n            userId: session.user.id,\n            streak: 0,\n            completedDates: []\n        });\n        console.log(\"Habit created:\", habit);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(habit);\n    } catch (error) {\n        console.error(\"Create habit error:\", error instanceof Error ? error.message : error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to create habit\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9oYWJpdHMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRTtBQUNZO0FBQ25CO0FBQ0g7QUFFNUIsZUFBZUs7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyw0REFBV0E7UUFFbEQsSUFBSSxDQUFDSSxTQUFTQyxNQUFNO1lBQ2xCLE9BQU9QLGtGQUFZQSxDQUFDUSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXVDLEdBQ2hEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNUCx3REFBU0E7UUFDZlEsUUFBUUMsR0FBRyxDQUFDO1FBRVosTUFBTUMsU0FBUyxNQUFNVCxxREFBS0EsQ0FBQ1UsSUFBSSxDQUFDO1lBQzlCQyxRQUFRVCxRQUFRQyxJQUFJLENBQUNTLEVBQUU7UUFDekIsR0FBR0MsSUFBSSxDQUFDO1lBQUVDLFdBQVcsQ0FBQztRQUFFO1FBRXhCUCxRQUFRQyxHQUFHLENBQUMsbUJBQW1CQyxPQUFPTSxNQUFNO1FBQzVDLE9BQU9uQixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDSztJQUMzQixFQUFFLE9BQU9KLE9BQU87UUFDZEUsUUFBUUYsS0FBSyxDQUFDLHVCQUF1QkEsaUJBQWlCVyxRQUFRWCxNQUFNWSxPQUFPLEdBQUdaO1FBQzlFLE9BQU9ULGtGQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBeUIsR0FDbEM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFFTyxlQUFlWSxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTWpCLFVBQVUsTUFBTUwsMkRBQWdCQSxDQUFDQyw0REFBV0E7UUFFbEQsSUFBSSxDQUFDSSxTQUFTQyxNQUFNO1lBQ2xCLE9BQU9QLGtGQUFZQSxDQUFDUSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXlDLEdBQ2xEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNLEVBQUVjLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUcsTUFBTUYsUUFBUWYsSUFBSTtRQUNqREcsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QjtZQUFFWTtZQUFPQztRQUFZO1FBRXpELElBQUksQ0FBQ0QsT0FBTztZQUNWLE9BQU94QixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFvQixHQUM3QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTVAsd0RBQVNBO1FBQ2ZRLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1jLFFBQVEsTUFBTXRCLHFEQUFLQSxDQUFDdUIsTUFBTSxDQUFDO1lBQy9CSDtZQUNBQztZQUNBVixRQUFRVCxRQUFRQyxJQUFJLENBQUNTLEVBQUU7WUFDdkJZLFFBQVE7WUFDUkMsZ0JBQWdCLEVBQUU7UUFDcEI7UUFFQWxCLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JjO1FBQzlCLE9BQU8xQixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDa0I7SUFDM0IsRUFBRSxPQUFPakIsT0FBTztRQUNkRSxRQUFRRixLQUFLLENBQUMsdUJBQXVCQSxpQkFBaUJXLFFBQVFYLE1BQU1ZLE9BQU8sR0FBR1o7UUFDOUUsT0FBT1Qsa0ZBQVlBLENBQUNRLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF5QixHQUNsQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhYml0LXRyYWNrZXIvLi9zcmMvYXBwL2FwaS9oYWJpdHMvcm91dGUudHM/NjU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnLi4vYXV0aC9bLi4ubmV4dGF1dGhdL2F1dGgnO1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2xpYi9tb25nb2RiJztcbmltcG9ydCBIYWJpdCBmcm9tICdAL21vZGVscy9IYWJpdCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIFxuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnWW91IG11c3QgYmUgc2lnbmVkIGluIHRvIHZpZXcgaGFiaXRzJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXdhaXQgY29ubmVjdERCKCk7XG4gICAgY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIFxuICAgIGNvbnN0IGhhYml0cyA9IGF3YWl0IEhhYml0LmZpbmQoeyBcbiAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIFxuICAgIH0pLnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdIYWJpdHMgZmV0Y2hlZDonLCBoYWJpdHMubGVuZ3RoKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oaGFiaXRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBoYWJpdHMgZXJyb3I6JywgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBoYWJpdHMnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdZb3UgbXVzdCBiZSBzaWduZWQgaW4gdG8gY3JlYXRlIGhhYml0cycgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgaGFiaXQgZGF0YTonLCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KTtcbiAgICBcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdUaXRsZSBpcyByZXF1aXJlZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBcbiAgICBjb25zdCBoYWJpdCA9IGF3YWl0IEhhYml0LmNyZWF0ZSh7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICBzdHJlYWs6IDAsXG4gICAgICBjb21wbGV0ZWREYXRlczogW11cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdIYWJpdCBjcmVhdGVkOicsIGhhYml0KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oaGFiaXQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0ZSBoYWJpdCBlcnJvcjonLCBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBoYWJpdCcgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImNvbm5lY3REQiIsIkhhYml0IiwiR0VUIiwic2Vzc2lvbiIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiaGFiaXRzIiwiZmluZCIsInVzZXJJZCIsImlkIiwic29ydCIsImNyZWF0ZWRBdCIsImxlbmd0aCIsIkVycm9yIiwibWVzc2FnZSIsIlBPU1QiLCJyZXF1ZXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImhhYml0IiwiY3JlYXRlIiwic3RyZWFrIiwiY29tcGxldGVkRGF0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/habits/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nconst cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\nif (!global.mongoose) {\n    global.mongoose = cached;\n}\nasync function connectDB() {\n    if (cached.conn) {\n        console.log(\"Using existing MongoDB connection\");\n        return cached.conn;\n    }\n    console.log(\"Creating new MongoDB connection...\");\n    try {\n        const opts = {\n            bufferCommands: true,\n            maxPoolSize: 10,\n            serverSelectionTimeoutMS: 15000,\n            socketTimeoutMS: 45000,\n            directConnection: false\n        };\n        const conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts);\n        console.log(\"Successfully connected to MongoDB\");\n        cached.conn = conn;\n        return conn;\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error instanceof Error ? error.message : error);\n        cached.promise = null;\n        throw error;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBV2hDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsU0FBd0JDLE9BQU9OLFFBQVEsSUFBSTtJQUFFTyxNQUFNO0lBQU1DLFNBQVM7QUFBSztBQUU3RSxJQUFJLENBQUNGLE9BQU9OLFFBQVEsRUFBRTtJQUNwQk0sT0FBT04sUUFBUSxHQUFHSztBQUNwQjtBQUVBLGVBQWVJO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2ZHLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9OLE9BQU9FLElBQUk7SUFDcEI7SUFFQUcsUUFBUUMsR0FBRyxDQUFDO0lBRVosSUFBSTtRQUNGLE1BQU1DLE9BQU87WUFDWEMsZ0JBQWdCO1lBQ2hCQyxhQUFhO1lBQ2JDLDBCQUEwQjtZQUMxQkMsaUJBQWlCO1lBQ2pCQyxrQkFBa0I7UUFDcEI7UUFFQSxNQUFNVixPQUFPLE1BQU1QLHVEQUFnQixDQUFDQyxhQUFhVztRQUNqREYsUUFBUUMsR0FBRyxDQUFDO1FBQ1pOLE9BQU9FLElBQUksR0FBR0E7UUFDZCxPQUFPQTtJQUNULEVBQUUsT0FBT1ksT0FBTztRQUNkVCxRQUFRUyxLQUFLLENBQUMsNkJBQTZCQSxpQkFBaUJmLFFBQVFlLE1BQU1DLE9BQU8sR0FBR0Q7UUFDcEZkLE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNVztJQUNSO0FBQ0Y7QUFFQSxpRUFBZVYsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhYml0LXRyYWNrZXIvLi9zcmMvbGliL21vbmdvZGIudHM/NTNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5pbnRlcmZhY2UgTW9uZ29vc2VDYWNoZSB7XG4gIGNvbm46IHR5cGVvZiBtb25nb29zZSB8IG51bGw7XG4gIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIG1vbmdvb3NlOiBNb25nb29zZUNhY2hlIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlJyk7XG59XG5cbmNvbnN0IGNhY2hlZDogTW9uZ29vc2VDYWNoZSA9IGdsb2JhbC5tb25nb29zZSB8fCB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcblxuaWYgKCFnbG9iYWwubW9uZ29vc2UpIHtcbiAgZ2xvYmFsLm1vbmdvb3NlID0gY2FjaGVkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIGNvbnNvbGUubG9nKCdVc2luZyBleGlzdGluZyBNb25nb0RCIGNvbm5lY3Rpb24nKTtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgbmV3IE1vbmdvREIgY29ubmVjdGlvbi4uLicpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiB0cnVlLFxuICAgICAgbWF4UG9vbFNpemU6IDEwLFxuICAgICAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiAxNTAwMCxcbiAgICAgIHNvY2tldFRpbWVvdXRNUzogNDUwMDAsXG4gICAgICBkaXJlY3RDb25uZWN0aW9uOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdCBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cyk7XG4gICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xuICAgIGNhY2hlZC5jb25uID0gY29ubjtcbiAgICByZXR1cm4gY29ubjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvcik7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsgIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsImNvbnNvbGUiLCJsb2ciLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJtYXhQb29sU2l6ZSIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsInNvY2tldFRpbWVvdXRNUyIsImRpcmVjdENvbm5lY3Rpb24iLCJjb25uZWN0IiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Habit.ts":
/*!*****************************!*\
  !*** ./src/models/Habit.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst habitSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: String,\n        required: true\n    },\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    streak: {\n        type: Number,\n        default: 0\n    },\n    completedDates: [\n        {\n            type: Date\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    updatedAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n// Prevent duplicate model initialization\nconst Habit = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Habit || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Habit\", habitSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Habit);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0hhYml0LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjLElBQUlELHdEQUFlLENBQUM7SUFDdENHLFFBQVE7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3ZDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0UsYUFBYTtRQUFFSixNQUFNQztJQUFPO0lBQzVCSSxRQUFRO1FBQUVMLE1BQU1NO1FBQVFDLFNBQVM7SUFBRTtJQUNuQ0MsZ0JBQWdCO1FBQUM7WUFBRVIsTUFBTVM7UUFBSztLQUFFO0lBQ2hDQyxXQUFXO1FBQUVWLE1BQU1TO1FBQU1GLFNBQVNFLEtBQUtFLEdBQUc7SUFBQztJQUMzQ0MsV0FBVztRQUFFWixNQUFNUztRQUFNRixTQUFTRSxLQUFLRSxHQUFHO0lBQUM7QUFDN0M7QUFFQSx5Q0FBeUM7QUFDekMsTUFBTUUsUUFBUWpCLHdEQUFlLENBQUNpQixLQUFLLElBQUlqQixxREFBYyxDQUFDLFNBQVNDO0FBRS9ELGlFQUFlZ0IsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhYml0LXRyYWNrZXIvLi9zcmMvbW9kZWxzL0hhYml0LnRzPzhlNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgaGFiaXRTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcklkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgc3RyZWFrOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxuICBjb21wbGV0ZWREYXRlczogW3sgdHlwZTogRGF0ZSB9XSxcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG4gIHVwZGF0ZWRBdDogeyB0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdyB9XG59KTtcblxuLy8gUHJldmVudCBkdXBsaWNhdGUgbW9kZWwgaW5pdGlhbGl6YXRpb25cbmNvbnN0IEhhYml0ID0gbW9uZ29vc2UubW9kZWxzLkhhYml0IHx8IG1vbmdvb3NlLm1vZGVsKCdIYWJpdCcsIGhhYml0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgSGFiaXQ7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsImhhYml0U2NoZW1hIiwiU2NoZW1hIiwidXNlcklkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0cmVhayIsIk51bWJlciIsImRlZmF1bHQiLCJjb21wbGV0ZWREYXRlcyIsIkRhdGUiLCJjcmVhdGVkQXQiLCJub3ciLCJ1cGRhdGVkQXQiLCJIYWJpdCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Habit.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fhabits%2Froute&page=%2Fapi%2Fhabits%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fhabits%2Froute.ts&appDir=D%3A%5Chabit%20tracker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Chabit%20tracker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();