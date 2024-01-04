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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI; // your mongodb connection string\nconst options = {};\nclass Singleton {\n    constructor(){\n        this.client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        this.clientPromise = this.client.connect();\n        if (true) {\n            // In development mode, use a global variable so that the value\n            // is preserved across module reloads caused by HMR (Hot Module Replacement).\n            global._mongoClientPromise = this.clientPromise;\n        }\n    }\n    static get instance() {\n        if (!this._instance) {\n            this._instance = new Singleton();\n        }\n        return this._instance.clientPromise;\n    }\n}\nconst clientPromise = Singleton.instance;\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQVksaUNBQWlDO0FBQ2hGLE1BQU1DLFVBQVUsQ0FBQztBQU1qQixNQUFNQztJQUlKLGFBQXNCO1FBQ3BCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUlQLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUNuQyxJQUFJLENBQUNHLGFBQWEsR0FBRyxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTztRQUN4QyxJQUFJUCxJQUF5QixFQUFlO1lBQzFDLCtEQUErRDtZQUMvRCw2RUFBNkU7WUFDN0VRLE9BQU9DLG1CQUFtQixHQUFHLElBQUksQ0FBQ0gsYUFBYTtRQUNqRCxDQUFDO0lBQ0g7SUFFQSxXQUFrQkksV0FBVztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSVA7UUFDdkIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDTyxTQUFTLENBQUNMLGFBQWE7SUFDckM7QUFDRjtBQUNBLE1BQU1BLGdCQUFnQkYsVUFBVU0sUUFBUTtBQUV4QyxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmc7IC8vIHlvdXIgbW9uZ29kYiBjb25uZWN0aW9uIHN0cmluZ1xuY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50Pjtcbn1cblxuY2xhc3MgU2luZ2xldG9uIHtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTaW5nbGV0b247XG4gIHByaXZhdGUgY2xpZW50OiBNb25nb0NsaWVudDtcbiAgcHJpdmF0ZSBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PjtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xpZW50UHJvbWlzZSA9IHRoaXMuY2xpZW50LmNvbm5lY3QoKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAgICAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gdGhpcy5jbGllbnRQcm9taXNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNpbmdsZXRvbigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UuY2xpZW50UHJvbWlzZTtcbiAgfVxufVxuY29uc3QgY2xpZW50UHJvbWlzZSA9IFNpbmdsZXRvbi5pbnN0YW5jZTtcblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsIlNpbmdsZXRvbiIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJjb25uZWN0IiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImluc3RhbmNlIiwiX2luc3RhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/mongodb */ \"(api)/./lib/mongodb.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            profile (profile) {\n                return {\n                    id: profile.id.toString(),\n                    name: profile.name || profile.login,\n                    username: profile.login,\n                    email: profile.email,\n                    image: profile.avatar_url,\n                    followers: profile.followers,\n                    verified: true\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ session , user  }) {\n            // Send properties to the client, like an access_token from a provider.\n            session.username = user.username;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBQ0k7QUFDcEI7QUFFeEMsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3RCSSxTQUFTRiwwRUFBY0EsQ0FBQ0MsbURBQWFBO0lBQ3JDRSxXQUFXO1FBQ1RKLGlFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsU0FBUUEsT0FBTyxFQUFFO2dCQUNmLE9BQU87b0JBQ0xDLElBQUlELFFBQVFDLEVBQUUsQ0FBQ0MsUUFBUTtvQkFDdkJDLE1BQU1ILFFBQVFHLElBQUksSUFBSUgsUUFBUUksS0FBSztvQkFDbkNDLFVBQVVMLFFBQVFJLEtBQUs7b0JBQ3ZCRSxPQUFPTixRQUFRTSxLQUFLO29CQUNwQkMsT0FBT1AsUUFBUVEsVUFBVTtvQkFDekJDLFdBQVdULFFBQVFTLFNBQVM7b0JBQzVCQyxVQUFVLElBQUk7Z0JBQ2hCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxTQUFRLEVBQUVBLFFBQU8sRUFBRUMsS0FBSSxFQUFFLEVBQUU7WUFDL0IsdUVBQXVFO1lBQ3ZFRCxRQUFRUCxRQUFRLEdBQUdRLEtBQUtSLFFBQVE7WUFDaEMsT0FBT087UUFDVDtJQUNGO0FBQ0YsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXInO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnbGliL21vbmdvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBwcm9maWxlKHByb2ZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogcHJvZmlsZS5pZC50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSB8fCBwcm9maWxlLmxvZ2luLFxuICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmxvZ2luLFxuICAgICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICAgIGltYWdlOiBwcm9maWxlLmF2YXRhcl91cmwsXG4gICAgICAgICAgZm9sbG93ZXJzOiBwcm9maWxlLmZvbGxvd2VycyxcbiAgICAgICAgICB2ZXJpZmllZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyIH0pIHtcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXIuXG4gICAgICBzZXNzaW9uLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRIdWJQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJ0b1N0cmluZyIsIm5hbWUiLCJsb2dpbiIsInVzZXJuYW1lIiwiZW1haWwiLCJpbWFnZSIsImF2YXRhcl91cmwiLCJmb2xsb3dlcnMiLCJ2ZXJpZmllZCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();